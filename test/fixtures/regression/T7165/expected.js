'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bar;

function _load_bar() {
  return _bar = require('bar');
}

Object.keys(_bar || _load_bar()).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return (_bar || _load_bar())[key];
    }
  });
});

var _foo;

function _load_foo() {
  return _foo = _interopRequireDefault(require('foo'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anything = {};