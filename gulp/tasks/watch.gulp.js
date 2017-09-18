/**
 * Serve and BrowserSync
 */

'use strict';
const gulp = require('gulp-help')(require('gulp'));
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const fs = require('fs');
const args = require('yargs').argv;
const config = require('../gulp.config')();
const browserSync = require('browser-sync').create();

/**
 *  Kick off build and development tasks:
 *  Launches the BrowserSync server
 *  Watches & updates files
 *  Reloads the browser after linting has finished.
 */
gulp.task('serve', 'Kick off build and development tasks.', [], cb => {
  runSequence('release-prep', () => {
    browserSync.init({
      port: 8888,
      reloadDelay: 100,
      reloadDebounce: 250,
      server: {
        baseDir: config.base_path
      }
    });
    gulp.watch(config.img.dest, () => {
      runSequence('optimize-images', 'copy-assets');
    });
    gulp.watch([config.watch.icons, config.watch.scss], () => {
      runSequence('styles', 'copy-assets');
    });
    gulp.watch(config.watch.build_templates, () => {
      runSequence('build-templates', 'copy-assets');
    });
    gulp.watch(config.watch.html, () => {
      browserSync.reload();
    });
    gulp.watch(config.watch.css, () => {
      browserSync.reload();
    });
  });
  cb();
});
