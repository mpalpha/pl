/**
 * bump version Tasks
 */

'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('../gulp.config')();
const args = require('yargs').argv;
const bumpVersion = args.major || args.minor || 'patch';
const debugging = args.debug || false;

/**
 * Update bower, component, npm at once
 */
gulp.task(
  'bump-version',
  () => {
    return gulp
      .src(['./bower.json', './package.json', './.version.json'])
      .pipe($.if(debugging, $.debug()))
      .pipe($.bump({ type: bumpVersion }))
      .pipe(gulp.dest('./'));
  }
);
