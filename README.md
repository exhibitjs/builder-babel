> # babel
>
> **Exhibit.js builder plugin**
>
> Transforms JavaScript files using [Babel](https://babeljs.io/).
>
> ```sh
> $ npm install -D exhibit-builder-babel
> ```
>
> [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url] [![devDependency Status][devdepstat-image]][devdepstat-url] [![peerDependency Status][peerdepstat-image]][peerdepstat-url]


## Usage

```js
  .use('babel', {stage: 1})
```

Compiles ES2015+ JavaScript to ES5.


## Options

Most of the usual [Babel options](https://babeljs.io/docs/usage/options/) work as normal, except that I/O-related options won't have any effect. Also, `sourceMaps` defaults to `true` in this plugin; otherwise defaults are unchanged.

#### Additional options

> **`include`** (string/array/function) — default: `'**/*.{js,jsx,babel.js}'`

Chooses which files should be compiled. Follows Exhibit’s [glob convention](https://github.com/exhibitjs/exhibit/blob/master/docs/glob-convention.md).

> **`replaceExt`** (regular expression) — default: `/\.(jsx|babel\.js)$/`

A regular expression to select the extension from the incoming filename. This extension will be replaced with `.js` when outputting compiled files, using  `file.replace(regex, '.js')`.


---

## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-babel
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-babel.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/builder-babel
[travis-image]: https://img.shields.io/travis/exhibitjs/builder-babel.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/builder-babel
[depstat-image]: https://img.shields.io/david/exhibitjs/builder-babel.svg?style=flat-square

[devdepstat-url]: https://david-dm.org/exhibitjs/builder-babel#info=devDependencies
[devdepstat-image]: https://img.shields.io/david/dev/exhibitjs/builder-babel.svg?style=flat-square&label=devDeps

[peerdepstat-url]: https://david-dm.org/exhibitjs/builder-babel#info=peerDependencies
[peerdepstat-image]: https://img.shields.io/david/peer/exhibitjs/builder-babel.svg?style=flat-square&label=peerDeps
