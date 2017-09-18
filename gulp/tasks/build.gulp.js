/**
 * html/handlebars/markdown Preprocessing/Compiling Tasks
 */

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const pump = require('pump');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('../gulp.config')();
const panini = require('panini');
const path = require('path');
const dirTree = require('../utils/directory-tree');
const browserSync = require('browser-sync');
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;

/**
 *  generate files json data for nested menu helper
 */
gulp.task('generate-json-file', false, [], cb => {
  let err;
  pump(
    [
      gulp.src(config.json.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.json.menu)),
      $.filter(file => /index\.md/.test(file.path)), // filter only the index file to trigger the callback once todo: remove this hack
      $.callback(() => {
        /**
         * async writeFile
         */
        require('fs').writeFile(
          config.json.menu,
          JSON.stringify(
            dirTree(config.json.tree, {
              key: 'name',
              order: ['structures', 'elements', 'patterns', 'icons', 'angular'],
              extension: /\.md/,
              type: 'html'
            })
          ),
          { flag: 'w', encoding: 'utf8' },
          err => {
            return err || undefined;
          }
        );
      })
    ],
    cb(err)
  );
});

/** 
 * refresh panini libraries
 */
gulp.task('panini-refresh', false, [], cb => {
  panini.refresh();
  cb();
});

/**
 *  generated flat files from html/handlebars/markdown templates
 */
gulp.task(
  'build-templates',
  false,
  ['clean-pages', 'generate-json-file'],
  cb => {
    gulp.start('panini-refresh');
    pump(
      [
        gulp.src(config.build_templates.src),
        $.if(debugging, $.debug()),
        $.if(!force, $.newer(config.build_templates.dest)),
        panini(config.build_templates.options),
        $.extname(),
        $.plumber(),
        gulp.dest(config.build_templates.dest, cb)
      ],
      cb
    );
  }
);

/** 
 * kick off the build process
 */
gulp.task(
  'build',
  'Kick off the build process.',
  cb => {
    gulp.start('release-prep');
    cb();
  },
  {
    aliases: ['release-prep']
  }
);
