'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _atom = require('atom');

Object.defineProperty(exports, 'TextEditor', {
  enumerable: true,
  get: function () {
    return _atom.TextEditor;
  }
});

var _path;

function _load_path() {
  return _path = require('path');
}

Object.defineProperty(exports, 'basename2', {
  enumerable: true,
  get: function () {
    return (_path || _load_path()).basename;
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
