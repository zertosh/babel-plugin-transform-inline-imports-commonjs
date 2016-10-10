"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOdd = undefined;
exports.nextOdd = nextOdd;

var _evens;

function _load_evens() {
  return _evens = require("./evens");
}

function nextOdd(n) {
  return (0, (_evens || _load_evens()).isEven)(n) ? n + 1 : n + 2;
}

var isOdd = exports.isOdd = function (isEven) {
  return function (n) {
    return !isEven(n);
  };
}((_evens || _load_evens()).isEven);