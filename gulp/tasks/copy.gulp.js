/**
 * Copy Tasks
 */

'use strict';

const gulp = require('gulp');
const pump = require('pump');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('../gulp.config')();
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;

/**
 * copy generated assets
 */
gulp.task('copy-assets', ['clean-assets'], cb => {
  pump(
    [
      gulp.src(config.copy.assets.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.copy.assets.dest)),
      gulp.dest(config.copy.assets.dest)
    ],
    gulp.start('copy-fontawesome'),
    cb
  );
});

/**
 * copy vendor fonts
 */
gulp.task('copy-fontawesome', cb => {
  pump(
    [
      gulp.src(config.copy.fontawesome.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.copy.fontawesome.dest)),
      gulp.dest(config.copy.fontawesome.dest)
    ],
    cb
  );
});
