"use strict";

var _foo;

function _load_foo() {
  return _foo = require("foo");
}

(_foo || _load_foo()).default;
(_foo || _load_foo()).default;
(_foo || _load_foo()).foo3;
(0, (_foo || _load_foo()).foo3)();