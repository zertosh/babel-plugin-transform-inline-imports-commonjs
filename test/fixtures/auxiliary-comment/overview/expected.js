/*before*/"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test2 = exports.test = undefined;

/*after*/ /*before*/require("foo") /*after*/;

/*before*/require("foo-bar") /*after*/;

/*before*/require("./directory/foo-bar") /*after*/;

/*before*/var _foo;

/*after*/function /*before*/_load_foo /*after*/() /*before*/{
  return _foo = babelHelpers.interopRequireDefault(require("foo2"));
}

var _foo2;

/*after*/function /*before*/_load_foo2 /*after*/() /*before*/{
  return _foo2 = babelHelpers.interopRequireWildcard(require("foo3"));
}

var _foo3;

/*after*/function /*before*/_load_foo3 /*after*/() /*before*/{
  return _foo3 = require("foo4");
}

var _foo4;

/*after*/function /*before*/_load_foo4 /*after*/() /*before*/{
  return _foo4 = require("foo5");
}

exports. /*after*/test = test;
var test2 = /*before*/exports. /*after*/test2 = 5;

/*before*/(0, (_foo3 || _load_foo3()).bar) /*after*/( /*before*/(_foo || _load_foo()).default /*after*/, /*before*/(_foo4 || _load_foo4()).foo /*after*/);

/* my comment */
/*before*/(_foo4 || _load_foo4()).foo /*after*/;
/*before*/(_foo || _load_foo()).default /*after*/;