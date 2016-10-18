'use strict';

var _path = _interopRequireDefault(require('path'));

var _fs = _interopRequireWildcard(require('fs'));

var _util = require('util');

var _foo;

function _load_foo() {
  return _foo = _interopRequireDefault(require('foo'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_path.default.basename;
_fs.readFile;
_util.inspect;

(_foo || _load_foo()).default;
(_foo || _load_foo()).default.bar;
