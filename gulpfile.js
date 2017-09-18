/**
 * root gulp file
 */
'use strict';

const gulp = require('gulp-help')(require('gulp'));
const requireDir = require('require-dir');

/**
 * Tasks are imported from the 'gulp' directory
 */
requireDir('./gulp', {
  recurse: true
});

/**
 * Default gulp task
 */
gulp.task('default', 'Default gulp task / help.', ['help'], () => {}, {
  aliases: ['default']
});

/**
 * debug task
 */
gulp.task(
  '*',
  'Show debug or verbose information for any task.',
  () => {
    return true;
  },
  {
    options: {
      debug: 'Example: "gulp * --debug"',
      verbose: 'Example: "gulp * --verbose"'
    }
  }
);
