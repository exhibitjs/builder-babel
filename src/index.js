import {transform} from 'babel-core';
import convertSourceMap from 'convert-source-map';

const defaults = {
  extensions: ['.js', 'babel.js', '.es6', '.es6.js', '.jsx'],
  sourceMaps: true,
};

export default function (_options) {
  let options, extensions;

  function setup() {
    options = Object.assign({}, defaults, _options);

    // remove our special option
    if (options.extensions) {
      extensions = options.extensions;
      delete options.extensions;
    }

    // the remaining options object is suitable for giving to babel.
  }

  return function exhibitBabel(path, contents) {
    if (!options) setup();

    // pass non-JS files straight through
    let isJS, jsFilename;
    for (const extension of extensions) {
      if (path.substr(-extension.length) === extension) {
        isJS = true;
        jsFilename = path.substring(0, path.length - extension.length) + '.js';
        break;
      }
    }
    if (!isJS) return contents;


    const source = contents.toString();
    let result;

    try {
      result = transform(source, options);
    }
    catch (error) {
      // todo: remove the "(line:column)" from end of message

      throw new this.util.SourceError({
        message: error.message,
        path: path,
        contents: source,
        line: error.loc ? error.loc.line : null,
        column: error.loc ? error.loc.column : null,
      });
    }


    if (options.sourceMaps) {
      // console.log('result.map', typeof result.map, result.map);

      const comment = convertSourceMap
        .fromObject(result.map)
        .setProperty('sources', [path])
        .toComment();

      return { [jsFilename]: `${result.code}\n${comment}` };
    }

    return { [jsFilename]: result.code };
  };
}
