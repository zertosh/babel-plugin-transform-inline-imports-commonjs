"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo;

function _load_foo() {
  return _foo = require("foo");
}

Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return (_foo || _load_foo()).foo;
  }
});