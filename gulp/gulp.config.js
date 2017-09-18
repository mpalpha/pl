/**
 * This file/module contains all configuration for the gulp build process.
 */
/*jshint camelcase: false */

'use strict';

const debugging = require('yargs').argv.debug || false;
const fs = require('fs');

module.exports = function() {
  const pkg = require('../package.json'),
    path = require('path'),
    now = new Date(),
    year = now.getFullYear(),
    root = './',
    build = 'build',
    dist = 'dist',
    pub = 'pub',
    app = 'app',
    src = 'src',
    libs = 'libs',
    theme = 'theme',
    assets = 'assets',
    theme_assets = theme + '-' + assets,
    node = 'node_modules',
    any = '*.*',
    css = '*.css',
    scss = '*.scss',
    html = '*.html',
    md = '*.md',
    hbs = '*.hbs',
    json = '*.json',
    js = '*.js',
    base_folder = 'pattern-library';
  const config = {
    version: pkg.version,
    root: root,
    build: build,
    dist: dist,
    pub: pub,
    app: app,
    src: src,
    libs: libs,
    node: node,
    theme: theme,
    assets: assets,
    theme_assets: theme_assets,
    _any: any,
    _css: css,
    _scss: scss,
    _html: html,
    _md: md,
    _hbs: hbs,
    _json: json,
    _js: json,
    base_path: dist + '/' + base_folder + '/',
    build_templates: {
      src: root + src + '/**/' + any,
      theme: root + theme + '/',
      layout_dir: root + theme + '/layouts',
      partials: root + theme + '/partials/' + hbs,
      layouts: root + theme + '/layouts/' + hbs,
      pages: root + src + '/**/' + any,
      data: root + 'data/',
      dest: root + dist + '/' + base_folder + '/',
      options: {
        root: src + '/',
        layouts: theme + '/layouts' + '/',
        partials: theme + '/partials/',
        helpers: [
          root + node + '/panini/helpers/',
          root + theme + '/helpers/',
          root + node + '/handlebars-helpers/lib/helpers/'
        ],
        data: root + 'data/'
      }
    },
    html: {
      src: dist + '/' + base_folder + '/**/' + html
    },
    theme_css: {
      src: root + assets + '/' + theme_assets + '/scss/**/' + scss,
      newer: {
        dest: root + assets + '/' + theme_assets + '/css',
        ext: '.css',
        extra: root + assets + '/' + theme_assets + '/scss/**/' + scss
      },
      dest: root + assets + '/' + theme_assets + '/css/'
    },
    css: {
      src: [root + assets + '/sass/**/' + scss, '!**/vendor-ext/*.scss'],
      newer: {
        dest: root + assets + '/css',
        ext: '.css',
        extra: root + assets + '/sass/**/' + scss
      },
      dest: root + assets + '/css/'
    },
    min_css: {
      src: [root + assets + '/css/**/*.css', '!/**/*.min.css'],
      newer: {
        dest: root + assets + '/css',
        ext: '.min.css',
        extra: root + assets + '/css/securus.css'
      },
      dest: root + assets + '/css'
    },
    img: {
      src: root + 'images/**/' + any,
      imagemin: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        }
      },
      dest: root + 'images/'
    },
    font: {
      src: root + 'fonts/**/' + any,
      dest: root + 'fonts/'
    },
    icons: {
      src: './assets/icons/min/*.svg',
      newer: './assets/fonts/securus-icons/securus-icons.svg',
      dest: './assets/fonts/securus-icons',
      destCss: './assets/sass/shared',
      options: {
        hashes: true,
        types: 'eot,woff2,woff,ttf,svg',
        engine: 'node',
        autoHint: false,
        font: 'securus-icons',
        fontFilename: 'securus-icons',
        relativeFontPath: '../fonts/securus-icons',
        syntax: 'bootstrap',
        stylesheet: 'scss',
        templateOptions: {
          baseClass: 'fa',
          classPrefix: 'securus-',
          mixinPrefix: 'securus-'
        }
      },
      fontName: 'securus-icons'
    },
    svg_min: {
      options: {
        interlaced: true,
        progressive: true,
        optimizationLevel: 5,
        verbose: debugging,
        svgoPlugins: [
          {
            removeViewBox: true
          },
          {
            convertPathData: true
          },
          {
            removeDimensions: true
          },
          {
            collapseGroups: true
          },
          {
            removeEmptyContainers: true
          },
          {
            convertStyleToAttrs: true
          },
          {
            removeUselessStrokeAndFill: true
          },
          {
            collapseGroups: true
          },
          {
            removeAttrs: {
              attrs: ['xmlns']
            }
          },
          {
            removeStyleElement: true
          }
        ]
      },
      src: root + assets + '/icons/*',
      newer: root + assets + '/icons/min',
      dest: root + assets + '/icons/min',
      ext: '.svg'
    },
    json: {
      src: root + src + '/**/' + any,
      tree: root + src,
      menu: root + 'data/menu/files.json',
      dest: root
    },
    copy: {
      assets: {
        src: [
          root + assets + '/**/' + any,
          '!' + assets + '/{sass,sass/**}',
          '!' + assets + '/{icons,icons/**}',
          '!' + assets + '/{templates,templates/**}',
          '!' + assets + '/theme_assets/{scss,scss/**}'
        ],
        dest: root + dist + '/' + base_folder + '/' + assets + '/'
      },
      fontawesome: {
        src: root + 'node_modules/font-awesome/css/font-awesome.min.css',
        dest: root + assets + '/css'
      }
    },
    clean: {
      dist: root + dist + '/**/' + any,
      assets: root + dist + '/' + assets + '/**/' + any,
      pages: root + dist + '/' + base_folder + '/**/' + html,
      min_css: root + assets + '/css/**/*.min.{css|map}',
      theme_min_css: root + assets + '/' + theme_assets + '/css/**/*.min.css',
      json: root + 'data/menu/files.json'
    },
    watch: {
      build_templates: [
        root + theme + '/**/*.{hbs|html|js}',
        root + src + '/**/' + any,
        root + 'data/' + any,
        '!' + root + 'data/menu/files.json'
      ],
      icons: [
        root + '/' + assets + '/icons/*.svg',
        root + '/' + assets + '/templates/' + any
      ],
      html: root + dist + '/' + base_folder + '/**/' + html,
      scss: [
        root + '/' + assets + '/sass/**/' + scss,
        root + '/' + assets + '/templates/**/' + scss,
        root + '/' + theme_assets + '/scss/**/' + scss
      ],
      css: root + dist + '/' + base_folder + '/**/' + css
    },
    gitadd: {
      options: {
        all: true
      }
    },
    bump: {
      options: {
        files: ['./bower.json', './package.json'],
        updateConfigs: ['pkg'],
        commitFiles: ['-a'],
        push: false
      }
    }
  };
  return config;
};
