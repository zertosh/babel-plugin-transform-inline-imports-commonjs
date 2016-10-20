# babel-plugin-transform-inline-imports-commonjs

**This plugin should be used instead of [`babel-plugin-transform-es2015-modules-commonjs`](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)**

[![Build Status](https://travis-ci.org/zertosh/babel-plugin-transform-inline-imports-commonjs.svg?branch=master)](https://travis-ci.org/zertosh/babel-plugin-transform-inline-imports-commonjs)

## Installation

```sh
$ npm install babel-plugin-transform-inline-imports-commonjs
```

## Details

This plugin transforms [ES modules](http://exploringjs.com/es6/ch_modules.html) ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) and [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)), into CommonJS [`require` and `module.exports`](https://nodejs.org/api/modules.html). `import`s are transformed into lazily loaded memoized `require`s. So the `require` call is deferred until the imported identifier is referenced. This allows you to write idiomatic code without the performance costs of loading code up-front (I/O, parsing, and executing).

### Transform example

**Before:**

```js
import bigModule from 'big-module';

export default function(val) {
  return bigModule.doExpensiveThing(val);
}
```

**After:**

```js
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (val) {
  return (_bigModule || _bigModule2()).default.doExpensiveThing(val);
};

var _bigModule;

function _bigModule2() {
  return _bigModule = _interopRequireDefault(require('big-module'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

## Usage

### Configuration

The same settings that are available for [`babel-plugin-transform-es2015-modules-commonjs`](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/) are available for `babel-plugin-transform-inline-imports-commonjs`:

```js
// without options
{
  "plugins": ["transform-inline-imports-commonjs"]
}

// with options
{
  "plugins": [
    ["transform-inline-imports-commonjs", {
      "allowTopLevelThis": true,
      "strict": false,
      "loose": true
    }]
  ]
}
```

#### Additional settings

* `excludeModules`:
  - An array of strings that correspond to module IDs that should not be "inline-import"'ed. For the config `"excludeModules": ["atom"]`:

  ```js
  import {TextEditor} from 'atom'; // transforms to plain `require` with interop
  import foo from 'bar'; // transforms to inline import
  ```

* `excludeNodeBuiltins` (default: `false`)
  - Do not apply "inline-imports" to [Node builtin modules](https://github.com/sindresorhus/builtin-modules/blob/v1.1.1/builtin-modules.json). These modules are usually already in the module cache, so there may be no need to lazily load them.

  ```js
  import * as path from 'path'; // transforms to plain `require` with interop
  import foo from 'bar'; // transforms to inline import
  ```
