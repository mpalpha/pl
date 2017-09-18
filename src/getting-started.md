---
title: Getting Started with the Securus Pattern Library
layout: root
---

{{#markdown}}
The Securus Pattern Library is a library of reusable assets to help any Securus application quickly get off the ground with a consistent style. It is available as a project dependency via [npm](http://npmjs.org/) or [bower](http://bower.io).

## Including the Securus Pattern Library in your project
Including the Securus Pattern Library requires the use of [npm](http://npmjs.org/) or [bower](http://bower.io) in your project.

### npm
To include via npm, simply run

```shell
npm install --save-dev http://es-bitbucket01.dal.securustech.net/scm/ux/securus-pattern-library.git
```

This will add a reference in your `package.json`. Be sure to read the [versioning notes below][#versioning-notes].

### bower
Bower is the less optimal way to install the Securus Pattern Library, but is also supported if necessary. Simply run:

```shell
bower install http://es-bitbucket01.dal.securustech.net/scm/ux/securus-pattern-library.git
```

This will add a reference in your `bower.json`. Be sure to read the [versioning notes below][#versioning-notes].

## Versioning
The Securus Pattern Library is versioned using a [Semantic Versioning](http://semver.org/) approach. This means you can lock down your application releases with a reference to a specific version of library, and down the road bring in new changes.

Running the `npm install` or `bower install` commands above will simply pull in the latest version of the Securus Pattern Library. To specify a version, go to your `package.json` (npm) or `bower.json` (bower), find the line that references `securus-pattern-library`, and add `#v1.0.0` where `1.0.0` is the specific version you want. Then just run `npm update` or `bower update`.

Updating to a new version of the library is a matter of updating the version reference in your `package.json` or `bower.json`.

## Referencing Assets
Once you've installed the Securus Pattern Library, you can simply reference the necessary assets by pointing to them in your package managed-directory.

For example, to include the CSS, you'd include this line in your HTML files:

```html
<link rel="stylesheet" href="/node-modules/securus-pattern-library/dist/pattern-library/assets/css/securus.min.css" />
```

Included in the distribution are:

* `/assets/css/securus.css` and `/assets/css/securus.min.css` - the primary stylesheet to be included
* `/assets/css/font-awesome.min.css` - for using the font awesome icons
* `/assets/images` - approved brand images

All other fonts and icons are available via the CSS that is imported above.
{{/markdown}}