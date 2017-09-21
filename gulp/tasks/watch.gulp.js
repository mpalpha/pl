/**
 * Serve and BrowserSync
 */

'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const fs = require('fs');
const args = require('yargs').argv;
const config = require('../gulp.config')();
const browserSync = require('browser-sync').create();

/**
 * Kick off build tasks and reload the browser upon changes (ctrl+c to exit)
 * @task {serve}
 * @order {4}
 */
gulp.task('serve', cb => {
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
