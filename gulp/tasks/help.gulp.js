/**
 * help documentation
 */

'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: true });

/** 
 * This help information
 * @task {help}
 * @group {default}
 * @order {0}
 */
gulp.task('init-help', function() {
    return $.helpDoc(gulp, {
        lineWidth: 120,
        keysColumnWidth: 25,
        logger: $.util,
        displayDependencies: true,
        defaultGroupName: 'Development Tasks'
    });
});