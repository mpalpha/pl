/**
 * cleanup Tasks
 */

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const pump = require('pump');
const del = require('del');
const $ = require('gulp-load-plugins')({ lazy: true });
const fs = require('fs');
const config = require('../gulp.config')();
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;

/**
 * clean dist
 */
gulp.task('clean-dist', false, [], cb => {
  return pump([
    gulp.src(config.json.src),
    $.if(!force, $.newer(config.clean.dist)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.dist], cb))
  ]);
});

/**
 * clean assets
 */
gulp.task('clean-assets', false, [], cb => {
  return pump([
    gulp.src(config.copy.assets.src),
    $.if(!force, $.newer(config.copy.assets.dest)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.assets], cb))
  ]);
});

/** 
 * clean minified icons
 */
gulp.task('clean-icons', false, [], cb => {
  return pump([
    gulp.src(config.svg_min.src),
    $.if(!force, $.newer(config.icons.newer)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.svg_min.dest + '*.svg'], cb))
  ]);
});

/** 
 * clean pages
 */
gulp.task('clean-pages', false, [], cb => {
  return pump([
    gulp.src(config.build_templates.src),
    $.if(!force, $.newer(config.build_templates.dest)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.pages], cb))
  ]);
});

// clean minified css
gulp.task('clean-min-css', false, [], cb => {
  return pump([
    gulp.src([config.css.dest + '**/*.css', '!**/*min.css']),
    $.if(!force, $.newer(config.css.dest)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.min_css], cb))
  ]);
});

/**
 * clean minified theme css
 */
gulp.task('clean-theme-min-css', false, [], cb => {
  return pump([
    gulp.src(config.theme_css.src),
    $.if(!force, $.newer(config.theme_css.dest)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.theme_min_css], cb))
  ]);
});

/**
 * clean json
 */
gulp.task('clean-json', false, [], cb => {
  return pump([
    gulp.src(config.build_templates.src),
    $.if(!force, $.newer(config.build_templates.dest)),
    $.filter('**/' + config.all), // empty source stream for null dest
    gulp.dest(config.root, del([config.clean.json], cb))
  ]);
});
