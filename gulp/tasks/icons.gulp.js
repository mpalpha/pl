/**
 * Icon glyph generation Tasks
 */

'use strict';

const gulp = require('gulp-help')(require('gulp'));
const pump = require('pump');
const $ = require('gulp-load-plugins')({ lazy: true });
const config = require('../gulp.config')();
const browserSync = require('browser-sync').create();
const del = require('del');
const runSequence = require('run-sequence');
const debugging = require('yargs').argv.debug || false;
const force = require('yargs').argv.force || false;
const reload = browserSync.reload;

/**
 * clean, compress and optimize svg icons
 */
gulp.task('svg-min', false, ['clean-icons'], () => {
  return gulp
    .src(config.svg_min.src)
    .pipe($.if(!force, $.newer(config.svg_min.newer)))
    .pipe($.if(debugging, $.debug({ title: 'gulp-imagemin:' })))
    .pipe($.imagemin(config.svg_min.options))
    .pipe(gulp.dest(config.svg_min.dest));
});

/**
 * generate icon font, json and html sample page
 */
gulp.task(
  'icons',
  'Generate icon font, json and html sample page. Dependencies:',
  ['svg-min'],
  () => {
    return gulp
      .src(config.icons.src)
      .pipe($.if(!force, $.newer(config.icons.newer)))
      .pipe($.if(debugging, $.debug({ title: 'gulp-iconfont:' })))
      .pipe(
        $.iconfont({
          appendUnicode: false,
          normalize: true,
          formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
          timestamp: Math.round(Date.now() / 1000), // recommended to get consistent builds when watching files
          fontName: config.icons.fontName,
          fontHeight: 1001,
          descent: 50
        })
      )
      .on('glyphs', glyphs => {
        // build icons.json file
        $.debug({ title: 'filter icon glyphs:' });
        let glyphsFiltered = [];
        glyphs.forEach(glyph => {
          glyphsFiltered.push({
            id: glyph.name.replace(/\s/g, '-').toLowerCase(),
            name: glyph.name
              .replace(/-/g, ' ')
              .toLowerCase()
              .toLowerCase()
              .replace(/\b\w/g, m => {
                return m.toUpperCase();
              }),
            unicode: glyph.unicode[0]
              .charCodeAt(0)
              .toString(16)
              .toLowerCase()
          });
        });

        $.newer({
          dest: './assets/fonts/' + config.icons.fontName + '/',
          ext: '.{svg|woff|woff2|eot|ttf}'
        });

        $.debug({ title: 'generate icons json file:' });
        $.file(
          // generate icons json file
          'icons.json',
          JSON.stringify({ icons: glyphsFiltered }, null, 4)
        ).pipe(gulp.dest('assets/fonts/' + config.icons.fontName + '/'));

        gulp // generate icons sass file
          .src('./assets/templates/_icons.scss')
          .pipe($.debug({ title: 'generate icons sass file:' }))
          .pipe(
            $.consolidate('lodash', {
              glyphs: glyphsFiltered,
              timeStamp: Math.round(Date.now() / 1000),
              fontName: config.icons.fontName,
              glyphsSassMap:
                '(\n  ' +
                glyphsFiltered
                  .map(glyph => {
                    return glyph.id + ': "' + glyph.unicode + '"';
                  })
                  .join(',\n  ') +
                '\n)',
              fontPath: '../fonts/' + config.icons.fontName + '/', // set path to font (from your CSS file if relative)
              classPrefix: 'securus' // set class name prefix in your CSS
            })
          )
          .pipe($.rename('_securus-icons.scss')) // rename icons sass file
          .pipe(gulp.dest('./assets/sass/shared/')); // set path to export your CSS

        gulp // generate icons html demo file
          .src('./assets/templates/index.html')
          .pipe($.debug({ title: 'generate icons html file:' }))
          .pipe(
            $.consolidate('lodash', {
              glyphs: glyphs,
              glyphsFiltered: glyphsFiltered,
              timeStamp: Math.round(Date.now() / 1000),
              fontName: config.icons.fontName,
              fontPath: '../fonts/' + config.icons.fontName + '/',
              classPrefix: 'securus' // set class name prefix in your CSS
            })
          )
          .pipe(gulp.dest('./assets/fonts/' + config.icons.fontName + '/'));
      })
      .pipe(gulp.dest('assets/fonts/' + config.icons.fontName + '/'));
  }
);
