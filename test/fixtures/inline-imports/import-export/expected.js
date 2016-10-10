'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Foo = undefined;

var _Foo;

function _load_Foo() {
  return _Foo = require('./Foo');
}

Object.defineProperty(exports, 'Foo', {
  enumerable: true,
  get: function () {
    return (_Foo || _load_Foo()).Foo;
  }
});


(_Foo || _load_Foo()).Foo;