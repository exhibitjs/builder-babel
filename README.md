# exhibit-builder-babel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> [Exhibit](https://github.com/exhibitjs/exhibit) builder plugin.
>
> Transforms JavaScript files using [Babel](https://babeljs.io/).


## Installation

```sh
npm install --save-dev exhibit-builder-babel
```


## Usage

```js
exhibit('./src')
  .use('babel', {stage: 0})
  .build('dist');
```

## Options

Most of the standard [Babel options](https://babeljs.io/docs/usage/options/) work as normal.  Plus there is one extra option provided by this plugin, and the difference that `sourceMaps` defaults to `true`.

### `extensions`

**Default: `['.js', 'babel.js', '.es6', '.es6.js', '.jsx']`**

An array of extensions that you want to be processed by Babel.


## License

MIT


<!-- badge URLs -->
[npm-url]: https://npmjs.org/package/exhibit-builder-babel
[npm-image]: https://img.shields.io/npm/v/exhibit-builder-babel.svg?style=flat-square

[travis-url]: http://travis-ci.org/exhibitjs/exhibit-builder-babel
[travis-image]: https://img.shields.io/travis/exhibitjs/exhibit-builder-babel.svg?style=flat-square

[depstat-url]: https://david-dm.org/exhibitjs/exhibit-builder-babel
[depstat-image]: https://img.shields.io/david/exhibitjs/exhibit-builder-babel.svg?style=flat-square
