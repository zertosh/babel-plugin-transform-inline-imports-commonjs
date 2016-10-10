"use strict";

var _foo;

function _load_foo() {
  return _foo = require("foo");
}

(_foo || _load_foo()).bar;
(_foo || _load_foo()).bar2;
(_foo || _load_foo()).baz;
(_foo || _load_foo()).bar;
(_foo || _load_foo()).bar;
(_foo || _load_foo()).xyz;