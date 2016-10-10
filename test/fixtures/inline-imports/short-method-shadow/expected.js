'use strict';

var _foo;

function _load_foo() {
  return _foo = _interopRequireDefault(require('foo'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Obj = {
  Foo() {
    (0, (_foo || _load_foo()).default)();
    return (_foo || _load_foo()).default;
  }
};

class Cls {
  Foo() {
    (0, (_foo || _load_foo()).default)();
    return (_foo || _load_foo()).default;
  }
}