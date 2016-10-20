'use strict';

var _atom = require('atom');

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _fs;

function _load_fs() {
  return _fs = _interopRequireWildcard(require('fs'));
}

var _util;

function _load_util() {
  return _util = require('util');
}

var _foo;

function _load_foo() {
  return _foo = _interopRequireDefault(require('foo'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_atom.TextEditor;

(_path || _load_path()).default.basename;
(_fs || _load_fs()).readFile;
(_util || _load_util()).inspect;

(_foo || _load_foo()).default;
(_foo || _load_foo()).default.bar;