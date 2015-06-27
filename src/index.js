import {transform} from 'babel-core';
import convertSourceMap from 'convert-source-map';

const defaults = {
  extensions: ['.es6', '.es6.js', '.js'],
};

export default function (_options) {
  let options;
  function setup(_) {
    options = _.assign({}, defaults, _options);
  }

  return function exhibitBabel(path, contents) {
    const {_} = this;
    const results = {};

    if (!options) setup(_);

    // pass non-JS files straight through
    let isJS, jsFilename;
    for (const extension of options.extensions) {
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
      result = transform(source, {});
    }
    catch (error) {
      console.log('ERROR!!!');
      console.log(error.loc);

      // todo: remove the "(line:column)" from end of message

      throw new this.SourceError({
        message: error.message,
        path: path,
        contents: source,
        line: error.loc ? error.loc.line : null,
        column: error.loc ? error.loc.column : null,
      });
    }

    // const comment = convertSourceMap
    //   .fromJSON(result.map)
    //   .setProperty('sources', [path])
    //   .toComment();

    results[jsFilename] = result.code + '\n'; //+ comment;
    return results;
  };
}
