/**
 * root gulp file
 */
'use strict';

const gulp = require('gulp');
const requireDir = require('require-dir');

/**
 * Tasks are imported from the 'gulp' directory
 */
requireDir('./gulp', {
  recurse: true
});

/**
 * Default task / help
 */
gulp.task('default', ['help']);

/**
 * Show help
 * @task {help}
 * @group {help}
 * @order {0}
 */
gulp.task('help', ['init-help']);

/**
 * options available to any task
 * @task {*}
 * @group {Options}
 * @order {0}
 * @arg {verbose} show verbose build information
 * @arg {debug} show debug information
 * @arg {force} force an un-cached build
 */
gulp.task('*', ['default'], () => {});
