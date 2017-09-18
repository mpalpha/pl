/**
 * CSS Preprocessing/Compiling Tasks
 */

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const stylelintFormatter = require('stylelint-formatter-pretty');
const pump = require('pump');
const runSequence = require('run-sequence');
const $ = require('gulp-load-plugins')({ lazy: true });
const fs = require('fs');
const config = require('../gulp.config')();
const browserSync = require('browser-sync');
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;
const fixcss = require('yargs').argv.fixcss || false;
const nolint = require('yargs').argv.nolint ? false : true;

/**
 * generate class/id usage json file for csso
 */
gulp.task('generate-css-usage', false, [], cb => {
  pump(
    [
      gulp.src(config.html.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.css.dest + '/usage.json')),
      $.concat('usage.html'),
      $.cssoUsage(),
      gulp.dest(config.css.dest)
    ],
    cb
  );
});

/**
 * minify styles
 */
gulp.task('minify-css', false, [], cb => {
  pump(
    [
      gulp.src(config.min_css.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.min_css.newer)),
      $.rename({ suffix: '.min' }),
      $.sourcemaps.init({ loadMaps: true }),
      $.if(debugging, $.sizediff.start()),
      $.csso({
        sourceMap: true,
        restructure: false,
        debug: debugging
        //,usage: JSON.stringify(require("../." + config.css.dest + "/usage.json"))
      }),
      $.if(
        debugging,
        $.sizediff.stop({
          title: 'csso',
          formatFn: data => {
            return (
              'saved ' +
              ((data.diff / 1024).toFixed(2) + 'KB') +
              ' (' +
              Math.round(100 * data.compressionRatio) +
              '%)'
            );
          }
        })
      ),
      $.sourcemaps.write('/'),
      gulp.dest(config.min_css.dest)
    ],
    cb
  );
});

/**
 * lint theme styles
 */
gulp.task('lint-theme-css', false, [], cb => {
  return gulp
    .src(config.theme_css.src)
    .pipe($.if(debugging, $.debug()))
    .pipe(
      $.if(
        nolint,
        $.stylelint({
          failAfterError: true,
          reporters: [{ formatter: stylelintFormatter, console: true }]
        })
      )
    );
});

/**
 * lint styles
 */
gulp.task('lint-css', false, [], cb => {
  return gulp
    .src(config.css.src)
    .pipe($.if(debugging, $.debug()))
    .pipe(
      $.if(
        nolint,
        $.stylelint({
          failAfterError: true,
          reporters: [{ formatter: stylelintFormatter, console: true }]
        })
      )
    );
});

/**
 * compile pattern library theme styles
 */
gulp.task('build-theme-css', false, [], cb => {
  pump(
    [
      gulp.src(config.theme_css.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.theme_css.newer)),
      $.sourcemaps.init(),
      $.sass(),
      $.autoprefixer('last 2 versions'),
      $.sourcemaps.write('/'),
      gulp.dest(config.theme_css.dest)
    ],
    cb
  );
});

/**
 * compile base styles
 */
gulp.task('build-css', false, [], cb => {
  pump(
    [
      gulp.src(config.css.src),
      $.if(debugging, $.debug()),
      $.if(!force, $.newer(config.css.newer)),
      $.sourcemaps.init(),
      $.sass(),
      $.autoprefixer('last 2 versions'),
      $.sourcemaps.write('/'),
      gulp.dest(config.css.dest)
    ],
    cb
  );
});

/**
 * fix scss stylelint errors
 */
gulp.task('fix-scss', function () {
  return gulp.src(config.css.src)
    .pipe($.if(fixcss, $.newer(config.css.newer)))
    .pipe($.if(fixcss, $.stylefmt()))
    .pipe(gulp.dest('./assets/sass/'));
});

/**
 * kick off the build process
 */
gulp.task('styles', false, ['icons'], cb => {
  runSequence(
    //"generate-css-usage",
    ['fix-scss'],
    ['lint-theme-css', 'lint-css'],
    ['build-css', 'build-theme-css'],
    'minify-css',
    cb
  );
});
