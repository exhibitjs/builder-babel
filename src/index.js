import {transform} from 'babel-core';

const defaults = {
  include: '**/*.{js,jsx,babel.js}',
  replaceExt: /\.(jsx|babel\.js)$/,
  sourceMaps: true,
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  // remove special plugin-only options
  const include = options.include;
  delete options.include;
  const replaceExt = options.replaceExt;
  delete options.replaceExt;

  return function exhibitBabel({matches, file, contents, util}) {
    // pass non-JS files straight through
    if (!matches(include)) return contents;

    // replace extension for outgoing filename (if it's jsx or whatever)
    const jsFilename = replaceExt ? file.replace(replaceExt, '.js') : file;

    // compile the contents
    const source = contents.toString();
    try {
      result = transform(source, options);
    }
    catch (error) {
      // todo: remove the "(line:column)" from end of message
      throw new util.SourceError({
        file,
        message: error.message,
        contents: source,
        line: error.loc ? error.loc.line : null,
        column: error.loc ? error.loc.column : null,
      });
    }

    if (options.sourceMaps) {
      const comment = util.convertSourceMap
        .fromObject(result.map)
        .setProperty('sources', [file])
        .toComment();

      return { [jsFilename]: `${result.code}\n${comment}` };
    }

    return { [jsFilename]: result.code };
  };
}
