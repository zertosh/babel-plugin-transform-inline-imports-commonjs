'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

Object.defineProperty(exports, 'basename2', {
  enumerable: true,
  get: function () {
    return _path.basename;
  }
});

var _bar;

function _load_bar() {
  return _bar = require('bar');
}

Object.defineProperty(exports, 'foo', {
  enumerable: true,
  get: function () {
    return (_bar || _load_bar()).foo;
  }
});
