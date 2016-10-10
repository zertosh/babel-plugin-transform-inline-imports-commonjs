'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo;

function _load_foo() {
  return _foo = _interopRequireDefault(require('foo'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

console.log((_foo || _load_foo())['default']);

exports['default'] = 5;