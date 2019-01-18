/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(56)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(59)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(38);
var toPrimitive = __webpack_require__(20);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var ctx = __webpack_require__(37);
var hide = __webpack_require__(8);
var has = __webpack_require__(6);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var createDesc = __webpack_require__(15);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48);
var defined = __webpack_require__(21);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(1);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(76);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(11);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(1);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(30);
var defineProperty = __webpack_require__(4).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(21);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(51);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(10);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(35);
var IE_PROTO = __webpack_require__(23)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(71);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(82);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(45);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(27);
var $iterCreate = __webpack_require__(75);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(42);
var ITERATOR = __webpack_require__(11)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(19);
var createDesc = __webpack_require__(15);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(20);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(38);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(5) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(41);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10);
var toLength = __webpack_require__(53);
var toAbsoluteIndex = __webpack_require__(54);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(22);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resize_observer_polyfill__ = __webpack_require__(60);




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var imgWithClick = {
  cursor: 'pointer'
};

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left;
  var imgStyle = {
    margin: margin
  };

  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  var handleClick = function handleClick(event) {
    onClick(event, {
      photo: photo,
      index: index
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", _extends({
    style: onClick ? _objectSpread({}, imgStyle, imgWithClick) : imgStyle
  }, photo, {
    onClick: onClick ? handleClick : null
  }));
};

var photoPropType = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
  src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  alt: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  srcSet: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),
  sizes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array])
});
Photo.propTypes = {
  index: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  photo: photoPropType.isRequired,
  margin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  top: function top(props) {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: function left(props) {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

function round(value, decimals) {
  if (!decimals) decimals = 0;
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
} // return two decimal places rounded number

function ratio(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return round(width / height, 2);
} // takes the Gallery's photos array, width of the container,
// margin between photos Gallery prop, and columns Gallery prop.
// calculates, sizes based on columns and returns the photos array
// with new height/width props in each object

function computeSizes(_ref2) {
  var photos = _ref2.photos,
      columns = _ref2.columns,
      width = _ref2.width,
      margin = _ref2.margin;

  if (!width) {
    return [];
  } // divide photos over rows, max cells based on `columns`
  // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]


  var rows = photos.reduce(function (acc, cell, idx) {
    var row = Math.floor(idx / columns);
    acc[row] = acc[row] ? [].concat(_toConsumableArray(acc[row]), [cell]) : [cell]; // eslint-disable-line no-param-reassign

    return acc;
  }, []); // calculate total ratio of each row, and adjust each cell height and width
  // accordingly.

  var ratios = [];
  var rowsWithSizes = rows.map(function (row, rowIndex) {
    var totalRatio = row.reduce(function (result, photo) {
      return result + ratio(photo);
    }, 0);
    var rowWidth = width - row.length * (margin * 2); // save total ratio of each row

    if (rowIndex !== rows.length - 1) ratios.push(totalRatio); // assign height
    // 3 scenarios...
    //  if its a regular row where row.length === columns
    //    rowWidth / totalRatio
    //  if columns > row.length
    //    if !lastRow
    //      use the average aspect ratio of previous rows
    //    else (all photos are on a single row)
    //      ...

    var height = row.length === columns ? rowWidth / totalRatio : photos.length < columns ? rowWidth / totalRatio * (row.length / columns) : rowWidth / (ratios.reduce(function (acc, item) {
      return acc + item;
    }, 0) / (rows.length - 1));
    return row.map(function (photo) {
      return _objectSpread({}, photo, {
        height: round(height, 1),
        width: round(height * ratio(photo), 1)
      });
    });
  });
  return rowsWithSizes.reduce(function (acc, row) {
    return [].concat(_toConsumableArray(acc), _toConsumableArray(row));
  }, []);
}
function computeSizesColumns(_ref3) {
  var photos = _ref3.photos,
      columns = _ref3.columns,
      width = _ref3.width,
      margin = _ref3.margin;
  // calculate each colWidth based on total width and column amount
  var colWidth = (width - margin * 2 * columns) / columns; // map through each photo to assign adjusted height and width based on colWidth

  var photosWithSizes = photos.map(function (photo) {
    var newHeight = photo.height / photo.width * colWidth;
    return _objectSpread({}, photo, {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  }); // store all possible left positions
  // and current top positions for each column

  var colLeftPositions = [];
  var colCurrTopPositions = [];

  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  } // map through each photo, then reduce thru each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height


  var photosPositioned = photosWithSizes.map(function (photo) {
    var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item < colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2; // store the tallest col to use for gallery height because of abs positioned elements

    var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item > colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
}

var Gallery =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Gallery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      containerWidth: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event, _ref) {
      var index = _ref.index;
      var _this$props = _this.props,
          photos = _this$props.photos,
          onClick = _this$props.onClick;
      onClick(event, {
        index: index,
        photo: photos[index],
        previous: photos[index - 1] || null,
        next: photos[index + 1] || null
      });
    });

    return _this;
  }

  _createClass(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.animationFrameID = null;
      this.observer = new __WEBPACK_IMPORTED_MODULE_2_resize_observer_polyfill__["a" /* default */](function (entries) {
        // only do something if width changes
        var newWidth = entries[0].contentRect.width;

        if (_this2.state.containerWidth !== newWidth) {
          // put in an animation frame to stop "benign errors" from
          // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
          _this2.animationFrameID = window.requestAnimationFrame(function () {
            _this2.setState({
              containerWidth: Math.floor(newWidth)
            });
          });
        }
      });
      this.observer.observe(this._gallery);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.observer.disconnect();
      window.cancelAnimationFrame(this.animationFrameID);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var containerWidth = this.state.containerWidth; // no containerWidth until after first render with refs, skip calculations and render nothing

      if (!containerWidth) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(c) {
          return _this3._gallery = c;
        }
      }, "\xA0");
      var _this$props$ImageComp = this.props.ImageComponent,
          ImageComponent = _this$props$ImageComp === void 0 ? Photo : _this$props$ImageComp; // subtract 1 pixel because the browser may round up a pixel

      var _this$props2 = this.props,
          margin = _this$props2.margin,
          onClick = _this$props2.onClick,
          direction = _this$props2.direction;
      var columns = this.props.columns; // allow parent to calculate columns from containerWidth

      if (typeof columns === 'function') {
        columns = columns(containerWidth);
      } // set default breakpoints if user doesn't specify columns prop


      if (columns === undefined) {
        columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
      }

      var photos = this.props.photos;
      var width = containerWidth - 1;
      var galleryStyle, thumbs;

      if (direction === 'row') {
        galleryStyle = {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row'
        };
        thumbs = computeSizes({
          width: width,
          columns: columns,
          margin: margin,
          photos: photos
        });
      }

      if (direction === 'column') {
        galleryStyle = {
          position: 'relative'
        };
        thumbs = computeSizesColumns({
          width: width,
          columns: columns,
          margin: margin,
          photos: photos
        });
        galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "react-photo-gallery--gallery"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        ref: function ref(c) {
          return _this3._gallery = c;
        },
        style: galleryStyle
      }, thumbs.map(function (photo, index) {
        var left = photo.left,
            top = photo.top,
            containerHeight = photo.containerHeight,
            rest = _objectWithoutProperties(photo, ["left", "top", "containerHeight"]);

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ImageComponent, {
          key: photo.key || photo.src,
          margin: margin,
          index: index,
          photo: rest,
          direction: direction,
          left: left,
          top: top,
          onClick: onClick ? _this3.handleClick : null
        });
      })));
    }
  }]);

  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Gallery.propTypes = {
  photos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(photoPropType).isRequired,
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),
  margin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  ImageComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};
Gallery.defaultProps = {
  margin: 2,
  direction: 'row'
};

/* harmony default export */ __webpack_exports__["a"] = (Gallery);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(57);

var ReactPropTypesSecret = __webpack_require__(26);
var checkPropTypes = __webpack_require__(58);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(26);
  var loggedTypeFailures = {};

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          )

        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(26);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(49)))

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(62), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
module.exports = __webpack_require__(1).Object.getPrototypeOf;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(35);
var $getPrototypeOf = __webpack_require__(42);

__webpack_require__(64)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(1);
var fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(67);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
var $Object = __webpack_require__(1).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(5), 'Object', { defineProperty: __webpack_require__(4).f });


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(43);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
__webpack_require__(78);
module.exports = __webpack_require__(30).f('iterator');


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(74)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(22);
var defined = __webpack_require__(21);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(28);
var descriptor = __webpack_require__(15);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(11)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(4);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
var global = __webpack_require__(3);
var hide = __webpack_require__(8);
var Iterators = __webpack_require__(27);
var TO_STRING_TAG = __webpack_require__(11)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(80);
var step = __webpack_require__(81);
var Iterators = __webpack_require__(27);
var toIObject = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(44)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
__webpack_require__(89);
__webpack_require__(90);
__webpack_require__(91);
module.exports = __webpack_require__(1).Symbol;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(3);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(5);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(45);
var META = __webpack_require__(85).KEY;
var $fails = __webpack_require__(12);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(29);
var uid = __webpack_require__(17);
var wks = __webpack_require__(11);
var wksExt = __webpack_require__(30);
var wksDefine = __webpack_require__(31);
var enumKeys = __webpack_require__(86);
var isArray = __webpack_require__(87);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(9);
var toIObject = __webpack_require__(10);
var toPrimitive = __webpack_require__(20);
var createDesc = __webpack_require__(15);
var _create = __webpack_require__(28);
var gOPNExt = __webpack_require__(88);
var $GOPD = __webpack_require__(47);
var $DP = __webpack_require__(4);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(19).f = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(17)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(4).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(12)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(19);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(41);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10);
var gOPN = __webpack_require__(46).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('asyncIterator');


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31)('observable');


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(93);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(97);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(43);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(94), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(95);
module.exports = __webpack_require__(1).Object.setPrototypeOf;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(96).set });


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(37)(Function.call, __webpack_require__(47).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var $Object = __webpack_require__(1).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(28) });


/***/ }),
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_gallery__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_shoutout_styles__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_data_example__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_variations__ = __webpack_require__(136);
/**
 * Import example blocks
 */






/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_photo_gallery__ = __webpack_require__(55);

/**
 * Block dependencies
 */




/**
 * Block libraries
 */

var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaPlaceholder = _wp$editor.MediaPlaceholder;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    ToggleControl = _wp$components.ToggleControl;

/**
 * Register block
 */

/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
  keywords: [__("Masonry", "jsforwpadvblocks"), __("Images Media", "jsforwpadvblocks"), __("Lightbox", "jsforwpadvblocks")],
  attributes: {
    images: {
      type: "array",
      default: []
    },
    direction: {
      type: "string",
      default: "row"
    },
    isLightboxEnabled: {
      type: "boolean",
      default: true
    }
  },
  supports: {
    align: ["full", "wide"]
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        images = _props$attributes.images,
        direction = _props$attributes.direction,
        isLightboxEnabled = _props$attributes.isLightboxEnabled,
        className = props.className,
        setAttributes = props.setAttributes;

    var onSelectImages = function onSelectImages(newImages) {
      var images = newImages.map(function (img) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, {
          src: img.sizes.large.url,
          width: img.sizes.large.width,
          height: img.sizes.large.height,
          id: img.sizes.large.id,
          alt: img.sizes.large.alt,
          caption: img.sizes.large.caption
        });
      });
      setAttributes({ images: images });
    };
    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(
          PanelBody,
          {
            title: __("Gallery Settings", "jsforwpadvblocks"),
            initialOpen: true
          },
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(RadioControl, {
              label: __("Grid Style", "jsforwpadvblocks"),
              selected: direction,
              options: [{ label: "Rows", value: "row" }, { label: "Columns", value: "column" }],
              onChange: function onChange(direction) {
                return setAttributes({ direction: direction });
              }
            })
          ),
          wp.element.createElement(
            PanelRow,
            null,
            wp.element.createElement(ToggleControl, {
              label: __("Enable / disable lightbox", "jsforwpadvblocks"),
              checked: isLightboxEnabled,
              onChange: function onChange(isLightboxEnabled) {
                return setAttributes({ isLightboxEnabled: isLightboxEnabled });
              }
            })
          )
        )
      ),
      !!images.length && wp.element.createElement(
        BlockControls,
        null,
        wp.element.createElement(
          Toolbar,
          null,
          wp.element.createElement(MediaUpload, {
            allowedTypes: ["images"],
            multiple: true,
            gallery: true,
            value: images.map(function (img) {
              return img.id;
            }),
            onSelect: onSelectImages,
            render: function render(_ref) {
              var open = _ref.open;
              return wp.element.createElement(IconButton, {
                className: "components-toolbar__control",
                label: __("Edit Gallery", "jsforwpadvblocks"),
                icon: "edit",
                onClick: open
              });
            }
          })
        )
      ),
      wp.element.createElement(
        "div",
        { className: className + " " + direction },
        !!!images.length ? wp.element.createElement(MediaPlaceholder, {
          icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
          labels: {
            title: __("Gallery", "jsforwpadvblocks"),
            instructions: __("Drag images, upload new ones or select files from your library", "jsforwpadvblocks")
          },
          accept: "images/*",
          multiple: true,
          onSelect: onSelectImages
        }) : wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3_react_photo_gallery__["a" /* default */], { photos: images, direction: direction })
      )
    );
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        images = _props$attributes2.images,
        direction = _props$attributes2.direction,
        isLightboxEnabled = _props$attributes2.isLightboxEnabled;

    return wp.element.createElement(
      "div",
      {
        className: "" + direction,
        "data-direction": direction,
        "data-isLightboxEnabled": isLightboxEnabled
      },
      wp.element.createElement(
        "div",
        { className: "react-photo-gallery--gallery server-render" },
        wp.element.createElement(
          "div",
          { style: "display: flex; flex-flow: row wrap" },
          images.map(function (img) {
            return wp.element.createElement("img", {
              src: img.src,
              alt: img.alt,
              title: img.caption,
              width: img.width,
              height: img.height,
              "data-id": img.id,
              style: {
                width: img.width,
                height: img.height
              }
            });
          })
        )
      )
    );
  }
}));

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(121);
module.exports = __webpack_require__(1).Object.assign;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(122) });


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(34);
var pIE = __webpack_require__(19);
var toObject = __webpack_require__(35);
var IObject = __webpack_require__(48);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(12)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "M67.5,23.7v12.9c0,1.8-1.5,3.3-3.3,3.3H51.3c-1.8,0-3.3-1.5-3.3-3.3V23.7c0-1.8,1.5-3.3,3.3-3.3h12.9 C66,20.4,67.5,21.9,67.5,23.7z M78.9,39.9h12.9c1.8,0,3.3-1.5,3.3-3.3V23.7c0-1.8-1.5-3.3-3.3-3.3H78.9c-1.8,0-3.3,1.5-3.3,3.3v12.9 C75.5,38.4,77,39.9,78.9,39.9z M51.3,67.5h12.9c1.8,0,3.3-1.5,3.3-3.3V51.3c0-1.8-1.5-3.3-3.3-3.3H51.3c-1.8,0-3.3,1.5-3.3,3.3v12.9 C47.9,66,49.4,67.5,51.3,67.5z M75.5,64.2c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V51.3c0-1.8-1.5-3.3-3.3-3.3H78.9 c-1.8,0-3.3,1.5-3.3,3.3V64.2z M39.9,51.3c0-1.8-1.5-3.3-3.3-3.3H23.7c-1.8,0-3.3,1.5-3.3,3.3v12.9c0,1.8,1.5,3.3,3.3,3.3h12.9 c1.8,0,3.3-1.5,3.3-3.3V51.3z M47.9,91.8c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9c0-1.8-1.5-3.3-3.3-3.3H51.3 c-1.8,0-3.3,1.5-3.3,3.3V91.8z M75.5,91.8c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9c0-1.8-1.5-3.3-3.3-3.3H78.9 c-1.8,0-3.3,1.5-3.3,3.3V91.8z M36.6,75.5H23.7c-1.8,0-3.3,1.5-3.3,3.3v12.9c0,1.8,1.5,3.3,3.3,3.3h12.9c1.8,0,3.3-1.5,3.3-3.3V78.9 C39.9,77,38.4,75.5,36.6,75.5z M40,34.8c0,2.9-2.3,5.2-5.2,5.2H9.5c-2.5,0-4.6-2-4.6-4.6V10.1c0-2.9,2.3-5.2,5.2-5.2h24.7 c2.9,0,5.2,2.3,5.2,5.2V34.8z M31.6,13.2H13.3v18.4h18.4V13.2z" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),
/* 124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/**
 * Block dependencies
 */
// import icons from "./icons";

// import "./editor.scss";

/**
 * Internal block libraries
 */
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var RichText = wp.editor.RichText;

/**
 * Register example block
 */

/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/shoutout-styles", {
  title: __("Shoutout", "jsforwpadvblocks"),
  description: __("An example block for working with Styles API.", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: {
    // background: "rgba(254, 243, 224, 0.52)",
    src: "edit"
  },
  keywords: [__("Call to Action", "jsforwpadvblocks")],
  attributes: {
    headline: {
      type: "string"
    },
    text: {
      type: "html"
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        headline = _props$attributes.headline,
        text = _props$attributes.text,
        className = props.className,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;


    return wp.element.createElement(
      "div",
      { className: className },
      wp.element.createElement(RichText, {
        value: headline,
        tagName: "h2",
        placeholder: __("Headline", "jsforwpadvblocks"),
        onChange: function onChange(headline) {
          return setAttributes({ headline: headline });
        }
      }),
      wp.element.createElement(RichText, {
        value: text,
        placeholder: __("Shoutout Text", "jsforwpadvblocks"),
        onChange: function onChange(text) {
          return setAttributes({ text: text });
        }
      })
    );
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        headline = _props$attributes2.headline,
        text = _props$attributes2.text;

    return wp.element.createElement(
      "div",
      null,
      wp.element.createElement(RichText.Content, { value: headline, tagName: "h2" }),
      wp.element.createElement(RichText.Content, { value: text, tagName: "div" })
    );
  }
}));

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_CoreData__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ListItemsSelect__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ListItemsWithSelect__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ListItemsWithCompose__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ListItemsSubscribe__ = __webpack_require__(134);
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;









/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/data-example", {
  title: __("Data Example", "jsforwpadvblocks"),
  description: __("Demo of select, distaptch, withSelect and withDispatch", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */],
  attributes: {},
  edit: function edit(props) {
    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ListItemsSubscribe__["a" /* default */], null)
    );
  },
  save: function save(props) {
    return wp.element.createElement(
      "p",
      null,
      "DATA"
    );
  }
}));

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icon = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m82.801 52.102c-4.3984 0-8.1992 2.5-10 6.1992l-13.301-5.1016c0.19922-0.89844 0.30078-1.8008 0.30078-2.8008 0-3.8008-1.6992-7.1992-4.3008-9.3984l8.3984-11c1.5 0.89844 3.1992 1.5 5.1016 1.5 5.1992 0 9.5-4.3008 9.5-9.5s-4.3008-9.5-9.5-9.5-9.5 4.3008-9.5 9.5c0 2.8008 1.1992 5.1992 3.1016 7l-8.5 11c-1.8984-1.1992-4.1992-2-6.6992-2-2.3984 0-4.6016 0.69922-6.5 1.8984l-5.6992-9.3984c2.6992-1.8984 4.5-5 4.5-8.5 0-5.6992-4.6016-10.398-10.398-10.398-5.6992 0-10.398 4.6016-10.398 10.398 0 5.8008 4.6016 10.398 10.398 10.398 1.6016 0 3.1016-0.39844 4.3984-1l5.8008 9.5c-2.8008 2.3008-4.5 5.6992-4.5 9.6016 0 0.39844 0 0.69922 0.10156 1.1016l-13.602 2.1992c-0.5-3.8008-3.8008-6.6992-7.6992-6.6992-4.3008 0-7.8008 3.5-7.8008 7.8008 0 4.3008 3.5 7.8008 7.8008 7.8008 4.1016 0 7.3984-3.1016 7.6992-7.1016l13.801-2.1992c1.1992 5.1992 5.6016 9.1016 11 9.6016l-0.69922 8.3984c-0.60156 0-1.1992 0.10156-1.6992 0.19922-4.6992 1-7.6016 5.6992-6.6016 10.301 1 4.6992 5.6992 7.6016 10.301 6.6016 4.6992-1 7.6016-5.6992 6.6016-10.301-0.80078-3.5-3.6016-6-6.8984-6.6016l0.69922-8.5c5.1016-0.19922 9.3008-3.5 11-8l13.102 5.1016c-0.30078 1.1016-0.5 2.1992-0.5 3.3984 0 6.1992 5 11.199 11.199 11.199 6.1992 0 11.199-5 11.199-11.199 0.09375-6.4023-5.0078-11.5-11.207-11.5z" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Component = wp.element.Component;
var select = wp.data.select;


var CoreData = function CoreData() {
  return wp.element.createElement(
    "div",
    null,
    wp.element.createElement(
      "h3",
      null,
      "Core Data"
    )
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (CoreData);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Component = wp.element.Component;
var select = wp.data.select;


var ListItemsSelect = function ListItemsSelect(_ref) {
  var heading = _ref.heading;

  var blocks = select("core/editor").getBlocks();
  return wp.element.createElement(
    "div",
    null,
    wp.element.createElement(
      "h3",
      null,
      heading
    ),
    wp.element.createElement(
      "ul",
      null,
      blocks.map(function (block) {
        return wp.element.createElement(
          "li",
          null,
          block.name
        );
      })
    )
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (ListItemsSelect);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ButtonWithDispatch__ = __webpack_require__(132);
var Component = wp.element.Component;
var withSelect = wp.data.withSelect;

// import DeleteButton from "./ButtonDispatch";



var ListItemsWithSelect = function ListItemsWithSelect(_ref) {
  var blocks = _ref.blocks,
      heading = _ref.heading;
  return wp.element.createElement(
    "div",
    null,
    wp.element.createElement(
      "h3",
      null,
      heading
    ),
    wp.element.createElement(
      "ul",
      null,
      blocks.map(function (block) {
        return wp.element.createElement(
          "li",
          null,
          block.name,
          " ",
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__ButtonWithDispatch__["a" /* default */], { clientId: block.clientId })
        );
      })
    )
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (withSelect(function (select, ownProps) {
  // console.log(ownProps);
  return {
    blocks: select("core/editor").getBlocks()
  };
})(ListItemsWithSelect));

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var Button = wp.components.Button;
var withDispatch = wp.data.withDispatch;


var DeleteButton = function DeleteButton(_ref) {
  var clientId = _ref.clientId,
      removeBlock = _ref.removeBlock;

  return wp.element.createElement(
    Button,
    {
      className: "is-button is-default",
      onClick: function onClick() {
        return removeBlock(clientId);
      }
    },
    __("X", "jsforwpadvblocks")
  );
};

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch, ownProps) {
  var removeBlock = dispatch("core/editor").removeBlock;
  return {
    removeBlock: dispatch("core/editor").removeBlock
  };
})(DeleteButton));

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var Component = wp.element.Component;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var Button = wp.components.Button;


var ListItemsWithCompose = function ListItemsWithCompose(_ref) {
  var blocks = _ref.blocks,
      removeBlock = _ref.removeBlock;
  return wp.element.createElement(
    "div",
    null,
    wp.element.createElement(
      "h3",
      null,
      __("With Compose", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      "ul",
      null,
      blocks.map(function (block) {
        return wp.element.createElement(
          "li",
          null,
          block.name,
          " ",
          wp.element.createElement(
            Button,
            {
              className: "is-button is-default",
              onClick: function onClick() {
                return removeBlock(block.clientId);
              }
            },
            __("X", "jsforwpadvblocks")
          )
        );
      })
    )
  );
};

/* unused harmony default export */ var _unused_webpack_default_export = (compose([withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
}), withDispatch(function (dispatch) {
  return {
    removeBlock: dispatch("core/editor").removeBlock
  };
})])(ListItemsWithCompose));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors__ = __webpack_require__(194);





var Component = wp.element.Component;
var _wp$data = wp.data,
    subscribe = _wp$data.subscribe,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;
var Button = wp.components.Button;




var ListItemsSubscribe = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ListItemsSubscribe, _Component);

  function ListItemsSubscribe() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ListItemsSubscribe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ListItemsSubscribe.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ListItemsSubscribe)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      blockCount: select("core/editor").getBlockCount()
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ListItemsSubscribe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var unsubscribe = subscribe(function () {
        var blockCount = select("core/editor").getBlockCount();
        _this2.setState({ blockCount: blockCount });
        // core();
        // coreBlocks();
        // coreEditor();
        // coreEditPost();
        // coreNotices();
        // coreNux();
        Object(__WEBPACK_IMPORTED_MODULE_5__selectors__["a" /* coreViewport */])();
      });
    }

    //   console.log(blocks);

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement(
        "div",
        null,
        wp.element.createElement(
          "p",
          null,
          "Block Count: ",
          this.state.blockCount
        ),
        wp.element.createElement(
          Button,
          {
            onClick: function onClick() {
              dispatch("core/nux").triggerGuide(["core/editor.inserter", "core/editor.settings", "core/editor.preview", "core/editor.publish"]);
            }
          },
          "Trigger Guide"
        )
      );
    }
  }]);

  return ListItemsSubscribe;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ListItemsSubscribe);

/***/ }),
/* 135 */,
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
var registerBlockStyle = wp.blocks.registerBlockStyle;




registerBlockStyle("core/quote", {
  name: "colorful-quote",
  label: "Colorful Quote"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "default",
  label: "Default"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "serious",
  label: "Serious"
});

registerBlockStyle("jsforwpadvblocks/shoutout-styles", {
  name: "colorful",
  label: "Colorful"
});

/***/ }),
/* 137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export core */
/* unused harmony export coreBlocks */
/* unused harmony export coreEditor */
/* unused harmony export coreEditPost */
/* unused harmony export coreNotices */
/* unused harmony export coreNux */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coreViewport; });
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch;

var core = function core() {
  console.group("wp.data.select('core')");
  console.log("getAuthors: ", select("core").getAuthors());
  console.log("getEmbedPreview: ", select("core").getEmbedPreview());
  console.log("getEntity: ", select("core").getEntity("postType", "post"));
  console.log("getEntity2: ", select("core").getEntity("root", "postType"));
  console.log("getEntityRecord: ", select("core").getEntityRecord("postType", "post", 628));
  console.log("getEntityRecords: ", select("core").getEntityRecords("postType", "post"));
  console.log("getMediaItems: ", select("core").getMediaItems());
  console.log("getMedia: ", select("core").getMedia(10));
  console.log("getPostTypes: ", select("core").getPostTypes());
  console.log("getPostType: ", select("core").getPostType("post"));
  console.log("getTaxonomies: ", select("core").getTaxonomies());
  console.log("getTaxonomy: ", select("core").getTaxonomy("category"));
  console.log("getThemeSupports: ", select("core").getThemeSupports());
  // Still not sure how this works, or if only internal?
  console.log("getUserQueryResults: ", select("core").getUserQueryResults("author"));
  console.log("hasUploadPermissions: ", select("core").hasUploadPermissions());
  console.log("isPreviewEmbedFallback: ", select("core").isPreviewEmbedFallback());
  console.log("isRequestingEmbedPreview: ", select("core").isRequestingEmbedPreview());
  console.groupEnd();
};

var coreBlocks = function coreBlocks() {
  console.group('wp.data.select("core/blocks")');
  console.log("getBlockStyles", select("core/blocks").getBlockStyles("core/quote"));
  // Not sure how to get working for core blocks
  console.log("getBlockSupport", select("core/blocks").getBlockSupport("jsforwpadvblocks/gallery", "align"));
  console.log("getBlockType", select("core/blocks").getBlockType("core/quote"));
  console.log("getBlockTypes", select("core/blocks").getBlockTypes());
  console.log("getCategories", select("core/blocks").getCategories());
  console.log("getChildBlockNames", select("core/blocks").getChildBlockNames("kadence/rowlayout"));
  console.log("getDefaultBlockName", select("core/blocks").getDefaultBlockName());
  console.log("getFreeformFallbackBlockName", select("core/blocks").getFreeformFallbackBlockName());
  console.log("getUnregisteredFallbackBlockName", select("core/blocks").getUnregisteredFallbackBlockName());
  // How to get working for core blocks
  console.log("hasBlockSupport", select("core/blocks").hasBlockSupport("jsforwpadvblocks/gallery", "align"));
  console.log("hasChildBlocks", select("core/blocks").hasChildBlocks("kadence/rowlayout"));
  console.log("hasChildBlocksWithInserterSupport", select("core/blocks").hasChildBlocksWithInserterSupport("kadence/rowlayout"));
  console.groupEnd();
};

var coreEditor = function coreEditor() {
  console.group("core/editor");
  console.log("canInsertBlockType", select("core/editor").canInsertBlockType("core/paragraph"));

  // Uses logged in user
  console.log("canUserUseUnfilteredHTML", select("core/editor").canUserUseUnfilteredHTML());

  console.log("didPostSaveRequestFail", select("core/editor").didPostSaveRequestFail());

  console.log("didPostSaveRequestSucceed", select("core/editor").didPostSaveRequestSucceed());

  console.log("getActivePostLock", select("core/editor").getActivePostLock());
  console.log("getAdjacentBlockClientId", select("core/editor").getAdjacentBlockClientId());
  console.log("getAutosave", select("core/editor").getAutosave());
  console.log("getAutosaveAttribute", select("core/editor").getAutosaveAttribute());
  console.log("getBlock", select("core/editor").getBlock());
  console.log("getBlockAttributes", select("core/editor").getBlockAttributes());
  console.log("getBlockCount", select("core/editor").getBlockCount());
  console.log("getBlockDependantsCacheBust", select("core/editor").getBlockDependantsCacheBust());
  console.log("getBlockHierarchyRootClientId", select("core/editor").getBlockHierarchyRootClientId());
  console.log("getBlockIndex", select("core/editor").getBlockIndex());
  console.log("getBlockIndex", select("core/editor").getBlockIndex());
  console.log("getBlockInsertionPoint", select("core/editor").getBlockInsertionPoint());
  console.log("getBlockListSettings", select("core/editor").getBlockListSettings());
  console.log("getBlockMode", select("core/editor").getBlockMode());
  console.log("getBlockName", select("core/editor").getBlockName());
  console.log("getBlockOrder", select("core/editor").getBlockOrder());
  console.log("getBlockRootClientId", select("core/editor").getBlockRootClientId());
  console.log("getBlockSelectionEnd", select("core/editor").getBlockSelectionEnd());
  console.log("getBlockSelectionEnd", select("core/editor").getBlockSelectionEnd());
  console.log("getBlockSelectionStart", select("core/editor").getBlockSelectionStart());
  console.log("getBlocks", select("core/editor").getBlocks());
  console.log("getBlocksByClientId", select("core/editor").getBlocksByClientId());
  console.log("getBlocksForSerialization", select("core/editor").getBlocksForSerialization());
  console.log("getClientIdsOfDescendants", select("core/editor").getClientIdsOfDescendants());
  console.log("getClientIdsWithDescendants", select("core/editor").getClientIdsWithDescendants());
  console.log("getCurrentPost", select("core/editor").getCurrentPost());

  // Takes as a parameter any property from getCurrentPost()
  console.log("getCurrentPostAttribute", select("core/editor").getCurrentPostAttribute("id"));
  console.log("getCurrentPostId", select("core/editor").getCurrentPostId());
  console.log("getCurrentPostLastRevisionId", select("core/editor").getCurrentPostLastRevisionId());
  console.log("getCurrentPostRevisionsCount", select("core/editor").getCurrentPostRevisionsCount());
  console.log("getCurrentPostType", select("core/editor").getCurrentPostType());
  console.log("getEditedPostAttribute", select("core/editor").getEditedPostAttribute());
  // getEditedPostAttribute
  // getEditedPostContent
  // getEditedPostPreviewLink
  // getEditedPostVisibility

  // getEditorSettings
  console.log("getEditorSettings", select("core/editor").getEditorSettings());
  // getFirstMultiSelectedBlockClientId

  // Includes inner blocks VS getBlockCount is
  // just parent blocks
  console.log("getGlobalBlockCount", select("core/editor").getGlobalBlockCount());
  // getInserterItems
  console.log("getInserterItems", select("core/editor").getInserterItems());
  // getLastMultiSelectedBlockClientId
  // getMultiSelectedBlockClientIds
  // getMultiSelectedBlocks
  console.log("getMultiSelectedBlocks", select("core/editor").getMultiSelectedBlocks());

  // getMultiSelectedBlocksEndClientId
  // getMultiSelectedBlocksStartClientId
  // getNextBlockClientId
  console.log("getNextBlockClientId", select("core/editor").getNextBlockClientId());
  // getPermalink
  console.log("getPermalink", select("core/editor").getPermalink());
  // getPermalinkParts
  console.log("getPermalinkParts", select("core/editor").getPermalinkParts());

  // getPostEdits
  // getPostLockUser
  // getPreviousBlockClientId
  // getReferenceByDistinctEdits
  // getSelectedBlock;
  console.log("getSelectedBlock", select("core/editor").getSelectedBlock());
  // getSelectedBlockClientId
  console.log("getSelectedBlockClientId", select("core/editor").getSelectedBlockClientId());
  // getSelectedBlockCount
  // getSelectedBlocksInitialCaretPosition - Couldn't get working
  console.log("getSelectedBlocksInitialCaretPosition", select("core/editor").getSelectedBlocksInitialCaretPosition());
  // getStateBeforeOptimisticTransaction
  // getSuggestedPostFormat - Would not work in block, but would work in sidebar or outside a block.  Requires single block in editor
  console.log("getSuggestedPostFormat", select("core/editor").getSuggestedPostFormat());
  // getTemplate;
  console.log("getTemplate", select("core/editor").getTemplate());
  // getTemplateLock
  console.log("getTemplateLock", select("core/editor").getTemplateLock());
  // getTokenSettings - not sure what tokens to pass
  // console.log("getTokenSettings", select("core/editor").getTokenSettings());
  // hasAutosave
  // hasChangedContent
  console.log("hasChangedContent", select("core/editor").hasChangedContent("className"));
  // hasEditorRedo
  // hasEditorUndo
  // hasInserterItems
  // hasMultiSelection
  // hasSelectedBlock
  console.log("hasSelectedBlock", select("core/editor").hasSelectedBlock());
  // hasSelectedInnerBlock - Seems to return false when a inner block is actually selected
  console.log("hasSelectedInnerBlock", select("core/editor").hasSelectedInnerBlock());
  // inSomeHistory
  // isAncestorMultiSelected
  // isAutosavingPost
  // isBlockInsertionPointVisible
  // isBlockMultiSelected
  // isBlockSelected
  // Takes clientID
  console.log("isBlockSelected", select("core/editor").isBlockSelected());
  // isBlockValid
  // isBlockWithinSelection
  // isCaretWithinFormattedText
  // isCleanNewPost
  // isCurrentPostPending
  // isCurrentPostPublished
  console.log("isCurrentPostPublished", select("core/editor").isCurrentPostPublished());
  // isCurrentPostScheduled
  // isEditedPostAutosaveable
  // isEditedPostBeingScheduled
  // isEditedPostDateFloating
  // isEditedPostDirty
  // isEditedPostEmpty
  // isEditedPostNew
  console.log("isEditedPostNew", select("core/editor").isEditedPostNew());
  // isEditedPostPublishable
  // isEditedPostSaveable
  // isFirstMultiSelectedBlock
  // isMultiSelecting
  // isPermalinkEditable
  // isPostLockTakeover
  // isPostLocked
  // isPostSavingLocked
  // isPreviewingPost - Seems to only get triggered first time
  console.log("isPreviewingPost", select("core/editor").isPreviewingPost());
  // isPublishSidebarEnabled
  // isPublishingPost
  console.log("isPublishingPost", select("core/editor").isPublishingPost());
  // isSavingPost
  console.log("isSavingPost", select("core/editor").isSavingPost());
  // isSelectionEnabled
  // isTyping - COOL.  Returns false once mouse moves (along with other things probably)
  console.log("isTyping", select("core/editor").isTyping());
  // isValidTemplate
  console.groupEnd();
};

var coreEditPost = function coreEditPost() {
  console.group("core/edit-post");
  console.log("getActiveGeneralSidebarName", select("core/edit-post").getActiveGeneralSidebarName());
  // getActiveMetaBoxLocations:
  // getAllMetaBoxes:
  // getEditorMode:
  console.log("getEditorMode", select("core/edit-post").getEditorMode());

  // getMetaBoxesPerLocation:
  // getPreference:
  console.log("getPreference('isGeneralSidebarDismissed)'", select("core/edit-post").getPreference("isGeneralSidebarDismissed"));
  // getPreferences:
  console.log("getPreferences", select("core/edit-post").getPreferences());
  // hasMetaBoxes:
  // isEditorPanelEnabled:
  // isEditorPanelOpened - Works with document setting panels, not sure how to get panel name of custom panels
  console.log("isEditorPanelOpened", select("core/edit-post").isEditorPanelOpened("discussion-panel"), select("core/edit-post").isEditorPanelOpened("featured-image"));
  // isEditorPanelRemoved:
  // isEditorSidebarOpened:
  console.log("isEditorSidebarOpened", select("core/edit-post").isEditorSidebarOpened("core/edit-post"));
  // isFeatureActive: focusMode, fixedToolbar
  console.log("isFeatureActive", select("core/edit-post").isFeatureActive("fullscreenMode"));
  // isMetaBoxLocationActive:
  // isMetaBoxLocationVisible:
  // isModalActive: ['edit-post/options']
  console.log("isModalActive", select("core/edit-post").isModalActive("edit-post/keyboard-shortcut-help"));
  // isPluginItemPinned:
  console.log("isPluginItemPinned", select("core/edit-post").isPluginItemPinned("jsforwpadvgb/toc"));
  // isPluginSidebarOpened:
  console.log("isPluginSidebarOpened", select("core/edit-post").isPluginSidebarOpened("jsforwpadvgb/toc"));
  // isPublishSidebarOpened:
  console.log("isPublishSidebarOpened", select("core/edit-post").isPublishSidebarOpened());
  // isSavingMetaBoxes:
  console.groupEnd();
};

var coreNotices = function coreNotices() {
  console.group("core/notices");
  console.log("getNotices", select("core/notices").getNotices());
  console.groupEnd();
};

var coreNux = function coreNux() {
  console.group("core/nux");
  console.log("areTipsEnabled", select("core/nux").areTipsEnabled());
  // Possible core guides?
  // "core/editor.inserter", "core/editor.settings",
  // "core/editor.preview", "core/editor.publish"
  console.log("getAssociatedGuide", select("core/nux").getAssociatedGuide("core/editor.settings"));
  // console.log("isTipVisible", select("core/nux").isTipVisible());
  console.groupEnd();
};

var coreViewport = function coreViewport() {
  console.group("core/viewport");
  console.log("isViewportMatch", select("core/viewport").isViewportMatch("< medium"));
  // NOTE: ifViewportMatches HOC
  console.groupEnd();
};

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.js.map