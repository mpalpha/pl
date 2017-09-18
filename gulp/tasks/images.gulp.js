/**
 * CSS Preprocessing/Compiling Tasks
 */

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const pump = require('pump');
const $ = require('gulp-load-plugins')({ lazy: true });
const fs = require('fs');
const config = require('../gulp.config')();
const browserSync = require('browser-sync');
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;

/**
 * optimize/compress images
 */
gulp.task('optimize-images', false, [], cb => {
  pump(
    [
      gulp.src(config.img.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.img.dest)),
      $.cache($.imagemin(config.img.imagemin.options)),
      gulp.dest(config.img.dest)
    ],
    cb
  );
});
