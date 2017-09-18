'use strict';

const FS = require('fs');
const PATH = require('path');
const slash = require('slash');
const constants = {
  DIRECTORY: 'directory',
  FILE: 'file'
};

/**
 * safe synchronous directory read
 */
let safeReadDirSync = path => {
  let dirData = {};
  try {
    dirData = FS.readdirSync(path);
  } catch (ex) {
    if (ex.code == 'EACCES') return null;
    else throw ex;
  }
  return dirData;
};

/**
 * sort array by specific key value order (key defaults to path)
 */
let sortOrderByArray = (
  getOrder = ['first', 'second', 'third'],
  getArr,
  sortKey = 'path'
) =>
  getArr.sort(
    (a, b) => getOrder.indexOf(a[sortKey]) - getOrder.indexOf(b[sortKey])
  );

/**
 * export main directory parse function
 * path: path to directory
 * options: 
 *   order = array order defaults to ["first", "second", "third"]
 *   key = sort order key defaults to "path"
 *   extension = find regex extension ("/\.md/")
 *   type = replace extension with this "html"
 */
module.exports = (path, options, onEachFile, getOrder) => {
  const root = process.platform === 'win32' ? slash(path) : path;
  let getPath = path => {
    let thisPath = {
      abs: path,
      rel: path.replace(PATH.normalize(root) + '/', '')
    };
    return thisPath;
  };

  /**
   * recursive directory parse
   */
  let getTree = path => {
    if (process.platform === 'win32') slash(path).replace('\\', '/');
    const _path = getPath(path);
    const name = PATH.basename(path).split('.')[0];
    let item = { path: _path.rel, name };
    let stats;

    try {
      stats = FS.statSync(_path.abs);
    } catch (e) {
      return null;
    }
    /**
     * Skip if it matches the option.exclude regex
     */
    if (options && options.exclude && options.exclude.test(_path.abs))
      return null;

    if (stats.isFile()) {
      /**
       * process files
       */
      const ext = PATH.extname(_path.abs).toLowerCase(); // Skip if it does not match the option.extension regex

      /**
       * rename file type extension if option.filetype and option.extension are provided
       */
      if (options && options.type && options.extension)
        item.path = item.path.split('.')[0] + '.' + options.type;

      item.size = stats.size; // File size in bytes
      item.extension = options.type || ext; // replace extension
      item.type = constants.FILE; // process children

      if (onEachFile) {
        onEachFile(item, PATH);
      }
    } else if (stats.isDirectory()) {
      /**
       * process folders
       */
      let dirData = safeReadDirSync(_path.abs);
      if (dirData === null) return dirData;

      item.children = dirData
        .map(child => getTree(PATH.join(_path.abs, child), options, onEachFile))
        .filter(e => !!e);
      item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
      item.type = constants.DIRECTORY;

      if (root == path) {
        item = item.children;
      }
    } else {
      return null;
    }
    return item;
  };

  /**
   * sort if a key and order array is provided 
   */
  return options && options.order && options.key
    ? sortOrderByArray(
        options.order,
        getTree(path, options, 'path', onEachFile),
        options.key
      )
    : getTree(path, options, 'path', onEachFile);
};
