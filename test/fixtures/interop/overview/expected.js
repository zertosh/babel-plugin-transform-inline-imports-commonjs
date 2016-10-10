"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test2 = exports.test = undefined;

require("foo");

require("foo-bar");

require("./directory/foo-bar");

var _foo;

function _load_foo() {
  return _foo = babelHelpers.interopRequireDefault(require("foo2"));
}

var _foo2;

function _load_foo2() {
  return _foo2 = babelHelpers.interopRequireWildcard(require("foo3"));
}

var _foo3;

function _load_foo3() {
  return _foo3 = require("foo4");
}

var _foo4;

function _load_foo4() {
  return _foo4 = require("foo5");
}

exports.test = test;
var test2 = exports.test2 = 5;

(_foo3 || _load_foo3()).bar;
(_foo4 || _load_foo4()).foo;
(_foo || _load_foo()).default;