'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mod;

function _load_mod() {
  return _mod = require('mod');
}

Object.keys(_mod || _load_mod()).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return (_mod || _load_mod())[key];
    }
  });
});