---
title: About Securus Pattern Library
layout: root
---

{{#markdown}}
Welcome to the Securus Pattern Library, the Securus UI framework.

## What is the Securus Pattern Library
The Securus Pattern Library is a set of common assets for front end web development on the Securus NextGen platform. Currently, when you add the Securus Pattern Library to your project you have access to:

* CSS Styles
* Fonts
* Icons
* Images

The Securus Pattern Library also documents how to use all of these components together to build an interface in the approved NextGen style.

Want to get started? Check out the [getting started guide](getting-started.html).

## Why does it matter?
UI development can be one of the most consuming parts of building a web application. Over several years, the design system for NextGen has been built out and approved by Marketing and refined by real usage by developers and end-users.

The Securus Pattern Library allows new projects to maintain a consistent style and to rapidly prototype without having to start from scratch each time.

## Browser Support
The Securus Pattern Library supports all modern browsers, including IE10+. It makes use of [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixing for the supported browsers.

## Dependencies
The Securus Pattern Library is built on several components:

* Sass is compiled to CSS using [grunt-sass](https://github.com/sindresorhus/grunt-sass)
* Vendor prefixing is added using [PostCSS](https://github.com/nDmitry/grunt-postcss) and the [Autoprefixer plugin](https://github.com/postcss/autoprefixer).
* Documentation is built and released via [PatternPack](https://github.com/patternpack/patternpack)
* [Grunt](http://gruntjs.com/) is our task runner of choice for executing all the build and deployment tasks

## Contributing
The Securus Pattern Library is built as an internal open source project at Securus. All the source code is [available on GitHub](https://github.com/securus-ng-scp/ui). did you find a bug? [Open an issue](https://github.com/securus-ng-scp/ui/issues). Have a new component you'd like to add? [Submit a Pull Request](https://github.com/securus-ng-scp/ui/pulls) to the UX team.

{{/markdown}}
