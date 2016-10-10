"use strict";

var _foo;

function _load_foo() {
  return _foo = babelHelpers.interopRequireDefault(require("foo"));
}

var _foo2;

function _load_foo2() {
  return _foo2 = require("foo");
}

(_foo || _load_foo()).default;
(_foo2 || _load_foo2()).baz;