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
/******/ 	return __webpack_require__(__webpack_require__.s = 195);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
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
  module.exports = __webpack_require__(90)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(93)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(68);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(59);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(120);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(124);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(59);

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
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(35)('wks');
var uid = __webpack_require__(27);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(55);
var toPrimitive = __webpack_require__(31);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(68);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
var MAP = (exports.MAP = "__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

// export const SKELETON = `__SECRET_SKELETON_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`;

var MARKER = (exports.MARKER =
  "__SECRET_MARKER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var MARKER_WITH_LABEL = (exports.MARKER_WITH_LABEL =
  "__SECRET_MARKER_WITH_LABEL_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var RECTANGLE = (exports.RECTANGLE =
  "__SECRET_RECTANGLE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var POLYLINE = (exports.POLYLINE =
  "__SECRET_POLYLINE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var POLYGON = (exports.POLYGON =
  "__SECRET_POLYGON_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var CIRCLE = (exports.CIRCLE =
  "__SECRET_CIRCLE_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var KML_LAYER = (exports.KML_LAYER =
  "__SECRET_KML_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var DIRECTIONS_RENDERER = (exports.DIRECTIONS_RENDERER =
  "__SECRET_DIRECTIONS_RENDERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var HEATMAP_LAYER = (exports.HEATMAP_LAYER =
  "__SECRET_HEATMAP_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var FUSION_TABLES_LAYER = (exports.FUSION_TABLES_LAYER =
  "__SECRET_FUSION_TABLES_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var ANCHOR = (exports.ANCHOR =
  "__SECRET_ANCHOR_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var INFO_WINDOW = (exports.INFO_WINDOW =
  "__SECRET_INFO_WINDOW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var OVERLAY_VIEW = (exports.OVERLAY_VIEW =
  "__SECRET_OVERLAY_VIEW_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var GROUND_LAYER = (exports.GROUND_LAYER =
  "__SECRET_GROUND_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var DRAWING_MANAGER = (exports.DRAWING_MANAGER =
  "__SECRET_DRAWING_MANAGER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var SEARCH_BOX = (exports.SEARCH_BOX =
  "__SECRET_SEARCH_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var MARKER_CLUSTERER = (exports.MARKER_CLUSTERER =
  "__SECRET_MARKER_CLUSTERER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var INFO_BOX = (exports.INFO_BOX =
  "__SECRET_INFO_BOX_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var TRAFFIC_LAYER = (exports.TRAFFIC_LAYER =
  "__SECRET_TRAFFIC_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var STREET_VIEW_PANORAMA = (exports.STREET_VIEW_PANORAMA =
  "__SECRET_STREET_VIEW_PANORAMA_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")

var BICYCLING_LAYER = (exports.BICYCLING_LAYER =
  "__SECRET_BICYCLING_LAYER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED")


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(2);
var ctx = __webpack_require__(47);
var hide = __webpack_require__(18);
var has = __webpack_require__(15);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(23)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _bind2 = __webpack_require__(70)

var _bind3 = _interopRequireDefault(_bind2)

var _isFunction2 = __webpack_require__(71)

var _isFunction3 = _interopRequireDefault(_isFunction2)

var _reduce3 = __webpack_require__(262)

var _reduce4 = _interopRequireDefault(_reduce3)

var _forEach2 = __webpack_require__(338)

var _forEach3 = _interopRequireDefault(_forEach2)

var _lowerFirst2 = __webpack_require__(340)

var _lowerFirst3 = _interopRequireDefault(_lowerFirst2)

var _has2 = __webpack_require__(347)

var _has3 = _interopRequireDefault(_has2)

exports.construct = construct
exports.componentDidMount = componentDidMount
exports.componentDidUpdate = componentDidUpdate
exports.componentWillUnmount = componentWillUnmount

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
/* eslint-disable no-param-reassign */
function rdcUncontrolledAndControlledProps(acc, value, key) {
  if ((0, _has3.default)(acc.prevProps, key)) {
    var match = key.match(/^default(\S+)/)
    if (match) {
      var unprefixedKey = (0, _lowerFirst3.default)(match[1])
      if (!(0, _has3.default)(acc.nextProps, unprefixedKey)) {
        acc.nextProps[unprefixedKey] = acc.prevProps[key]
      }
    } else {
      acc.nextProps[key] = acc.prevProps[key]
    }
  }
  return acc
}

function applyUpdaterToNextProps(updaterMap, prevProps, nextProps, instance) {
  ;(0, _forEach3.default)(updaterMap, function(fn, key) {
    var nextValue = nextProps[key]
    if (nextValue !== prevProps[key]) {
      fn(instance, nextValue)
    }
  })
}

function construct(propTypes, updaterMap, prevProps, instance) {
  var _reduce2 = (0, _reduce4.default)(
      propTypes,
      rdcUncontrolledAndControlledProps,
      {
        nextProps: {},
        prevProps: prevProps,
      }
    ),
    nextProps = _reduce2.nextProps

  applyUpdaterToNextProps(
    updaterMap,
    {
      /* empty prevProps for construct */
    },
    nextProps,
    instance
  )
}

function componentDidMount(component, instance, eventMap) {
  registerEvents(component, instance, eventMap)
}

function componentDidUpdate(
  component,
  instance,
  eventMap,
  updaterMap,
  prevProps
) {
  component.unregisterAllEvents()
  applyUpdaterToNextProps(updaterMap, prevProps, component.props, instance)
  registerEvents(component, instance, eventMap)
}

function componentWillUnmount(component) {
  component.unregisterAllEvents()
}

function registerEvents(component, instance, eventMap) {
  var registeredList = (0, _reduce4.default)(
    eventMap,
    function(acc, googleEventName, onEventName) {
      if ((0, _isFunction3.default)(component.props[onEventName])) {
        acc.push(
          google.maps.event.addListener(
            instance,
            googleEventName,
            component.props[onEventName]
          )
        )
      }
      return acc
    },
    []
  )

  component.unregisterAllEvents = (0, _bind3.default)(
    _forEach3.default,
    null,
    registeredList,
    unregisterEvent
  )
}

function unregisterEvent(registered) {
  google.maps.event.removeListener(registered)
}


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(25);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(66);
var defined = __webpack_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(143);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(57);
var enumBugKeys = __webpack_require__(36);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(19);
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
/* 32 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(35)('keys');
var uid = __webpack_require__(27);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(26) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(22);
var dPs = __webpack_require__(104);
var enumBugKeys = __webpack_require__(36);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(56)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(105).appendChild(iframe);
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(2);
var LIBRARY = __webpack_require__(26);
var wksExt = __webpack_require__(41);
var defineProperty = __webpack_require__(10).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(214),
    getValue = __webpack_require__(219);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(86);
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
/* 48 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(23)(function () {
  return Object.defineProperty(__webpack_require__(56)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(19);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(87)(false);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(34)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(100);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(110);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(26);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(61);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(28);
var $iterCreate = __webpack_require__(103);
var setToStringTag = __webpack_require__(40);
var getPrototypeOf = __webpack_require__(58);
var ITERATOR = __webpack_require__(9)('iterator');
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(57);
var hiddenKeys = __webpack_require__(36).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(30);
var createDesc = __webpack_require__(25);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(31);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(55);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72),
    getRawTag = __webpack_require__(215),
    objectToString = __webpack_require__(216);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(48);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(33);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(102)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(60)(String, 'String', function (iterated) {
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(127),
    createWrap = __webpack_require__(220),
    getHolder = __webpack_require__(132),
    replaceHolders = __webpack_require__(75);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(65),
    isObject = __webpack_require__(44);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(129),
    isObject = __webpack_require__(44);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(65),
    isObjectLike = __webpack_require__(51);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(267),
    baseKeys = __webpack_require__(274),
    isArrayLike = __webpack_require__(78);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(71),
    isLength = __webpack_require__(133);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(281),
    listCacheDelete = __webpack_require__(282),
    listCacheGet = __webpack_require__(283),
    listCacheHas = __webpack_require__(284),
    listCacheSet = __webpack_require__(285);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(81);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(299);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 85 */,
/* 86 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(67);
var toAbsoluteIndex = __webpack_require__(88);
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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resize_observer_polyfill__ = __webpack_require__(94);




var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var imgWithClick = { cursor: 'pointer' };

var Photo = function Photo(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left;

  var imgStyle = { margin: margin };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  var handleClick = function handleClick(event) {
    onClick(event, { photo: photo, index: index });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', _extends({
    style: onClick ? _extends({}, imgStyle, imgWithClick) : imgStyle
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
}

// return two decimal places rounded number
function ratio(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return round(width / height, 2);
}

// takes the Gallery's photos array, width of the container,
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
  }
  // divide photos over rows, max cells based on `columns`
  // effectively resulting in [[0, 1, 2], [3, 4, 5], [6, 7]]
  var rows = photos.reduce(function (acc, cell, idx) {
    var row = Math.floor(idx / columns);
    acc[row] = acc[row] ? [].concat(toConsumableArray(acc[row]), [cell]) : [cell]; // eslint-disable-line no-param-reassign
    return acc;
  }, []);
  // calculate total ratio of each row, and adjust each cell height and width
  // accordingly.
  var ratios = [];
  var rowsWithSizes = rows.map(function (row, rowIndex) {
    var totalRatio = row.reduce(function (result, photo) {
      return result + ratio(photo);
    }, 0);
    var rowWidth = width - row.length * (margin * 2);

    // save total ratio of each row
    if (rowIndex !== rows.length - 1) ratios.push(totalRatio);

    // assign height
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
      return _extends({}, photo, {
        height: round(height, 1),
        width: round(height * ratio(photo), 1)
      });
    });
  });
  return rowsWithSizes.reduce(function (acc, row) {
    return [].concat(toConsumableArray(acc), toConsumableArray(row));
  }, []);
}
function computeSizesColumns(_ref3) {
  var photos = _ref3.photos,
      columns = _ref3.columns,
      width = _ref3.width,
      margin = _ref3.margin;

  // calculate each colWidth based on total width and column amount
  var colWidth = (width - margin * 2 * columns) / columns;

  // map through each photo to assign adjusted height and width based on colWidth
  var photosWithSizes = photos.map(function (photo) {
    var newHeight = photo.height / photo.width * colWidth;
    return _extends({}, photo, {
      width: round(colWidth, 1),
      height: round(newHeight, 1)
    });
  });

  // store all possible left positions
  // and current top positions for each column
  var colLeftPositions = [];
  var colCurrTopPositions = [];
  for (var i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1);
    colCurrTopPositions[i] = 0;
  }

  // map through each photo, then reduce thru each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height
  var photosPositioned = photosWithSizes.map(function (photo) {
    var smallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item < colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);

    photo.top = colCurrTopPositions[smallestCol];
    photo.left = colLeftPositions[smallestCol];
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2;

    // store the tallest col to use for gallery height because of abs positioned elements
    var tallestCol = colCurrTopPositions.reduce(function (acc, item, i) {
      acc = item > colCurrTopPositions[acc] ? i : acc;
      return acc;
    }, 0);
    photo.containerHeight = colCurrTopPositions[tallestCol];
    return photo;
  });
  return photosPositioned;
}

var Gallery = function (_React$Component) {
  inherits(Gallery, _React$Component);

  function Gallery() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Gallery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      containerWidth: 0
    }, _this.handleClick = function (event, _ref2) {
      var index = _ref2.index;
      var _this$props = _this.props,
          photos = _this$props.photos,
          onClick = _this$props.onClick;

      onClick(event, {
        index: index,
        photo: photos[index],
        previous: photos[index - 1] || null,
        next: photos[index + 1] || null
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Gallery, [{
    key: 'componentDidMount',
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
            _this2.setState({ containerWidth: Math.floor(newWidth) });
          });
        }
      });
      this.observer.observe(this._gallery);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.observer.disconnect();
      window.cancelAnimationFrame(this.animationFrameID);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var containerWidth = this.state.containerWidth;
      // no containerWidth until after first render with refs, skip calculations and render nothing
      if (!containerWidth) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { ref: function ref(c) {
            return _this3._gallery = c;
          } },
        '\xA0'
      );
      var _props$ImageComponent = this.props.ImageComponent,
          ImageComponent = _props$ImageComponent === undefined ? Photo : _props$ImageComponent;
      // subtract 1 pixel because the browser may round up a pixel

      var _props = this.props,
          margin = _props.margin,
          onClick = _props.onClick,
          direction = _props.direction;
      var columns = this.props.columns;

      // set default breakpoints if user doesn't specify columns prop

      if (columns === undefined) {
        columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 3;
        if (containerWidth >= 1500) columns = 4;
      }
      var photos = this.props.photos;
      var width = containerWidth - 1;
      var galleryStyle = void 0,
          thumbs = void 0;

      if (direction === 'row') {
        galleryStyle = { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' };
        thumbs = computeSizes({ width: width, columns: columns, margin: margin, photos: photos });
      }
      if (direction === 'column') {
        galleryStyle = { position: 'relative' };
        thumbs = computeSizesColumns({ width: width, columns: columns, margin: margin, photos: photos });
        galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
      }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'react-photo-gallery--gallery' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { ref: function ref(c) {
              return _this3._gallery = c;
            }, style: galleryStyle },
          thumbs.map(function (photo, index) {
            var left = photo.left,
                top = photo.top,
                containerHeight = photo.containerHeight,
                rest = objectWithoutProperties(photo, ['left', 'top', 'containerHeight']);

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
          })
        )
      );
    }
  }]);
  return Gallery;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Gallery.propTypes = {
  photos: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(photoPropType).isRequired,
  direction: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  columns: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  margin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  ImageComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

Gallery.defaultProps = {
  margin: 2,
  direction: 'row'
};

/* harmony default export */ __webpack_exports__["a"] = (Gallery);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(91);

var ReactPropTypesSecret = __webpack_require__(38);
var checkPropTypes = __webpack_require__(92);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 91 */
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
/* 92 */
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
  var ReactPropTypesSecret = __webpack_require__(38);
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(38);

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
/* 94 */
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

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(50)))

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
module.exports = __webpack_require__(2).Object.getPrototypeOf;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(37);
var $getPrototypeOf = __webpack_require__(58);

__webpack_require__(97)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(13);
var core = __webpack_require__(2);
var fails = __webpack_require__(23);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(99);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(10).f });


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(106);
module.exports = __webpack_require__(41).f('iterator');


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(33);
var defined = __webpack_require__(32);
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(39);
var descriptor = __webpack_require__(25);
var setToStringTag = __webpack_require__(40);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(18)(IteratorPrototype, __webpack_require__(9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(22);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
var global = __webpack_require__(8);
var hide = __webpack_require__(18);
var Iterators = __webpack_require__(28);
var TO_STRING_TAG = __webpack_require__(9)('toStringTag');

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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(108);
var step = __webpack_require__(109);
var Iterators = __webpack_require__(28);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(60)(Array, 'Array', function (iterated, kind) {
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
/* 108 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
module.exports = __webpack_require__(2).Symbol;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(13);
var redefine = __webpack_require__(61);
var META = __webpack_require__(113).KEY;
var $fails = __webpack_require__(23);
var shared = __webpack_require__(35);
var setToStringTag = __webpack_require__(40);
var uid = __webpack_require__(27);
var wks = __webpack_require__(9);
var wksExt = __webpack_require__(41);
var wksDefine = __webpack_require__(42);
var enumKeys = __webpack_require__(114);
var isArray = __webpack_require__(115);
var anObject = __webpack_require__(22);
var isObject = __webpack_require__(19);
var toIObject = __webpack_require__(20);
var toPrimitive = __webpack_require__(31);
var createDesc = __webpack_require__(25);
var _create = __webpack_require__(39);
var gOPNExt = __webpack_require__(116);
var $GOPD = __webpack_require__(63);
var $DP = __webpack_require__(10);
var $keys = __webpack_require__(29);
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
  __webpack_require__(62).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(30).f = $propertyIsEnumerable;
  __webpack_require__(49).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(26)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(27)('meta');
var isObject = __webpack_require__(19);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(23)(function () {
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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(30);
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
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(48);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(20);
var gOPN = __webpack_require__(62).f;
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
/* 117 */
/***/ (function(module, exports) {



/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122);
module.exports = __webpack_require__(2).Object.setPrototypeOf;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(13);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(123).set });


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(19);
var anObject = __webpack_require__(22);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(47)(Function.call, __webpack_require__(63).f(Object.prototype, '__proto__').set, 2);
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);
var $Object = __webpack_require__(2).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(13);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(39) });


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(64),
    overRest = __webpack_require__(211),
    setToString = __webpack_require__(141);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(44);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(129),
    baseLodash = __webpack_require__(131);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(291),
    mapCacheDelete = __webpack_require__(298),
    mapCacheGet = __webpack_require__(300),
    mapCacheHas = __webpack_require__(301),
    mapCacheSet = __webpack_require__(302);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(24),
    isSymbol = __webpack_require__(76);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 137 */,
/* 138 */,
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(197), __esModule: true };

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(212),
    shortOut = __webpack_require__(145);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(50)))

/***/ }),
/* 144 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(64),
    metaMap = __webpack_require__(147);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(148);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(150),
    composeArgsRight = __webpack_require__(151),
    countHolders = __webpack_require__(223),
    createCtor = __webpack_require__(73),
    createRecurry = __webpack_require__(152),
    getHolder = __webpack_require__(132),
    reorder = __webpack_require__(238),
    replaceHolders = __webpack_require__(75),
    root = __webpack_require__(21);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(224),
    setData = __webpack_require__(156),
    setWrapToString = __webpack_require__(157);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(147),
    noop = __webpack_require__(225);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(129),
    baseLodash = __webpack_require__(131);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(146),
    shortOut = __webpack_require__(145);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(230),
    insertWrapDetails = __webpack_require__(231),
    setToString = __webpack_require__(141),
    updateWrapDetails = __webpack_require__(232);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 158 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(44),
    isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 160 */
/***/ (function(module, exports) {

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

module.exports = canUseDOM;

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapProps", function() { return mapProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withProps", function() { return withProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withPropsOnChange", function() { return withPropsOnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHandlers", function() { return withHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProp", function() { return renameProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renameProps", function() { return renameProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenProp", function() { return flattenProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withState", function() { return withState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStateHandlers", function() { return withStateHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withReducer", function() { return withReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderComponent", function() { return renderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNothing", function() { return renderNothing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldUpdate", function() { return shouldUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pure", function() { return pure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForKeys", function() { return onlyUpdateForKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyUpdateForPropTypes", function() { return onlyUpdateForPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withContext", function() { return withContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContext", function() { return getContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lifecycle", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toClass", function() { return toClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatic", function() { return setStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPropTypes", function() { return setPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDisplayName", function() { return setDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return getDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapDisplayName", function() { return wrapDisplayName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassComponent", function() { return isClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSink", function() { return createSink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromProp", function() { return componentFromProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return nest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoistStatics", function() { return hoistStatics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStream", function() { return componentFromStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentFromStreamWithConfig", function() { return componentFromStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStream", function() { return mapPropsStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPropsStreamWithConfig", function() { return mapPropsStreamWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandler", function() { return createEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventHandlerWithConfig", function() { return createEventHandlerWithConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setObservableConfig", function() { return configureObservable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_change_emitter__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_change_emitter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_change_emitter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_symbol_observable__ = __webpack_require__(246);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default.a; });






var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

var setDisplayName = function setDisplayName(displayName) {
  return setStatic('displayName', displayName);
};

var getDisplayName = function getDisplayName(Component$$1) {
  if (typeof Component$$1 === 'string') {
    return Component$$1;
  }

  if (!Component$$1) {
    return undefined;
  }

  return Component$$1.displayName || Component$$1.name || 'Component';
};

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var MapProps = function MapProps(props) {
      return factory(propsMapper(props));
    };
    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapProps'))(MapProps);
    }
    return MapProps;
  };
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
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



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var withProps = function withProps(input) {
  var hoc = mapProps(function (props) {
    return _extends({}, props, typeof input === 'function' ? input(props) : input);
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var pick = function pick(obj, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(pick(props, shouldMapOrKeys), pick(nextProps, shouldMapOrKeys));
    };

    var WithPropsOnChange = function (_Component) {
      inherits(WithPropsOnChange, _Component);

      function WithPropsOnChange() {
        var _temp, _this, _ret;

        classCallCheck(this, WithPropsOnChange);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.computedProps = propsMapper(_this.props), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithPropsOnChange.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (shouldMap(this.props, nextProps)) {
          this.computedProps = propsMapper(nextProps);
        }
      };

      WithPropsOnChange.prototype.render = function render() {
        return factory(_extends({}, this.props, this.computedProps));
      };

      return WithPropsOnChange;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withPropsOnChange'))(WithPropsOnChange);
    }
    return WithPropsOnChange;
  };
};

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

/* eslint-disable no-console */
var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithHandlers = function (_Component) {
      inherits(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        classCallCheck(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      WithHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };
    DefaultProps.defaultProps = props;
    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'defaultProps'))(DefaultProps);
    }
    return DefaultProps;
  };
};

var omit = function omit(obj, keys) {
  var rest = objectWithoutProperties(obj, []);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (rest.hasOwnProperty(key)) {
      delete rest[key];
    }
  }
  return rest;
};

var renameProp = function renameProp(oldName, newName) {
  var hoc = mapProps(function (props) {
    var _babelHelpers$extends;

    return _extends({}, omit(props, [oldName]), (_babelHelpers$extends = {}, _babelHelpers$extends[newName] = props[oldName], _babelHelpers$extends));
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProp'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var keys = Object.keys;


var mapKeys = function mapKeys(obj, func) {
  return keys(obj).reduce(function (result, key) {
    var val = obj[key];
    /* eslint-disable no-param-reassign */
    result[func(val, key)] = val;
    /* eslint-enable no-param-reassign */
    return result;
  }, {});
};

var renameProps = function renameProps(nameMap) {
  var hoc = mapProps(function (props) {
    return _extends({}, omit(props, keys(nameMap)), mapKeys(pick(props, keys(nameMap)), function (_, oldName) {
      return nameMap[oldName];
    }));
  });
  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'renameProps'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var flattenProp = function flattenProp(propName) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var FlattenProp = function FlattenProp(props) {
      return factory(_extends({}, props, props[propName]));
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'flattenProp'))(FlattenProp);
    }
    return FlattenProp;
  };
};

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithState = function (_Component) {
      inherits(WithState, _Component);

      function WithState() {
        var _temp, _this, _ret;

        classCallCheck(this, WithState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithState.prototype.render = function render() {
        var _babelHelpers$extends;

        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[stateUpdaterName] = this.updateStateValue, _babelHelpers$extends)));
      };

      return WithState;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withState'))(WithState);
    }
    return WithState;
  };
};

var withStateHandlers = function withStateHandlers(initialState, stateUpdaters) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithStateHandlers = function (_Component) {
      inherits(WithStateHandlers, _Component);

      function WithStateHandlers() {
        var _temp, _this, _ret;

        classCallCheck(this, WithStateHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
      }

      WithStateHandlers.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var propsChanged = nextProps !== this.props;
        // the idea is to skip render if stateUpdater handler return undefined
        // this allows to create no state update handlers with access to state and props
        var stateChanged = !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(nextState, this.state);
        return propsChanged || stateChanged;
      };

      WithStateHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state, this.stateUpdaters));
      };

      return WithStateHandlers;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.state = typeof initialState === 'function' ? initialState(this.props) : initialState;
      this.stateUpdaters = mapValues(stateUpdaters, function (handler) {
        return function (mayBeEvent) {
          for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          // Having that functional form of setState can be called async
          // we need to persist SyntheticEvent
          if (mayBeEvent && typeof mayBeEvent.persist === 'function') {
            mayBeEvent.persist();
          }

          _this2.setState(function (state, props) {
            return handler(state, props).apply(undefined, [mayBeEvent].concat(args));
          });
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withStateHandlers'))(WithStateHandlers);
    }
    return WithStateHandlers;
  };
};

var withReducer = function withReducer(stateName, dispatchName, reducer, initialState) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithReducer = function (_Component) {
      inherits(WithReducer, _Component);

      function WithReducer() {
        var _temp, _this, _ret;

        classCallCheck(this, WithReducer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: _this.initializeStateValue()
        }, _this.dispatch = function (action) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: reducer(stateValue, action)
            };
          });
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithReducer.prototype.initializeStateValue = function initializeStateValue() {
        if (initialState !== undefined) {
          return typeof initialState === 'function' ? initialState(this.props) : initialState;
        }
        return reducer(undefined, { type: '@@recompose/INIT' });
      };

      WithReducer.prototype.render = function render() {
        var _babelHelpers$extends;

        return factory(_extends({}, this.props, (_babelHelpers$extends = {}, _babelHelpers$extends[stateName] = this.state.stateValue, _babelHelpers$extends[dispatchName] = this.dispatch, _babelHelpers$extends)));
      };

      return WithReducer;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withReducer'))(WithReducer);
    }
    return WithReducer;
  };
};

var identity = function identity(Component$$1) {
  return Component$$1;
};

var branch = function branch(test, left) {
  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : identity;
  return function (BaseComponent) {
    var leftFactory = void 0;
    var rightFactory = void 0;
    var Branch = function Branch(props) {
      if (test(props)) {
        leftFactory = leftFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(left(BaseComponent));
        return leftFactory(props);
      }
      rightFactory = rightFactory || Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(right(BaseComponent));
      return rightFactory(props);
    };

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'branch'))(Branch);
    }
    return Branch;
  };
};

var renderComponent = function renderComponent(Component$$1) {
  return function (_) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(Component$$1);
    var RenderComponent = function RenderComponent(props) {
      return factory(props);
    };
    if (process.env.NODE_ENV !== 'production') {
      RenderComponent.displayName = wrapDisplayName(Component$$1, 'renderComponent');
    }
    return RenderComponent;
  };
};

var Nothing = function (_Component) {
  inherits(Nothing, _Component);

  function Nothing() {
    classCallCheck(this, Nothing);
    return possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Nothing.prototype.render = function render() {
    return null;
  };

  return Nothing;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var renderNothing = function renderNothing(_) {
  return Nothing;
};

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var ShouldUpdate = function (_Component) {
      inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        classCallCheck(this, ShouldUpdate);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

var pure = function pure(BaseComponent) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

var onlyUpdateForKeys = function onlyUpdateForKeys(propKeys) {
  var hoc = shouldUpdate(function (props, nextProps) {
    return !__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(pick(nextProps, propKeys), pick(props, propKeys));
  });

  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForKeys'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var onlyUpdateForPropTypes = function onlyUpdateForPropTypes(BaseComponent) {
  var propTypes = BaseComponent.propTypes;

  if (process.env.NODE_ENV !== 'production') {
    if (!propTypes) {
      /* eslint-disable */
      console.error('A component without any `propTypes` was passed to ' + '`onlyUpdateForPropTypes()`. Check the implementation of the ' + ('component with display name "' + getDisplayName(BaseComponent) + '".'));
      /* eslint-enable */
    }
  }

  var propKeys = Object.keys(propTypes || {});
  var OnlyUpdateForPropTypes = onlyUpdateForKeys(propKeys)(BaseComponent);

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(wrapDisplayName(BaseComponent, 'onlyUpdateForPropTypes'))(OnlyUpdateForPropTypes);
  }
  return OnlyUpdateForPropTypes;
};

var withContext = function withContext(childContextTypes, getChildContext) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    var WithContext = function (_Component) {
      inherits(WithContext, _Component);

      function WithContext() {
        var _temp, _this, _ret;

        classCallCheck(this, WithContext);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.getChildContext = function () {
          return getChildContext(_this.props);
        }, _temp), possibleConstructorReturn(_this, _ret);
      }

      WithContext.prototype.render = function render() {
        return factory(this.props);
      };

      return WithContext;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    WithContext.childContextTypes = childContextTypes;

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'withContext'))(WithContext);
    }
    return WithContext;
  };
};

var getContext = function getContext(contextTypes) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
    var GetContext = function GetContext(ownerProps, context) {
      return factory(_extends({}, ownerProps, context));
    };

    GetContext.contextTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'getContext'))(GetContext);
    }
    return GetContext;
  };
};

/* eslint-disable no-console */
var lifecycle = function lifecycle(spec) {
  return function (BaseComponent) {
    var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);

    if (process.env.NODE_ENV !== 'production' && spec.hasOwnProperty('render')) {
      console.error('lifecycle() does not support the render method; its behavior is to ' + 'pass all props and state to the base component.');
    }

    var Lifecycle = function (_Component) {
      inherits(Lifecycle, _Component);

      function Lifecycle() {
        classCallCheck(this, Lifecycle);
        return possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      Lifecycle.prototype.render = function render() {
        return factory(_extends({}, this.props, this.state));
      };

      return Lifecycle;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

    Object.keys(spec).forEach(function (hook) {
      return Lifecycle.prototype[hook] = spec[hook];
    });

    if (process.env.NODE_ENV !== 'production') {
      return setDisplayName(wrapDisplayName(BaseComponent, 'lifecycle'))(Lifecycle);
    }
    return Lifecycle;
  };
};

var isClassComponent = function isClassComponent(Component$$1) {
  return Boolean(Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function');
};

var toClass = function toClass(baseComponent) {
  if (isClassComponent(baseComponent)) {
    return baseComponent;
  }

  var ToClass = function (_Component) {
    inherits(ToClass, _Component);

    function ToClass() {
      classCallCheck(this, ToClass);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    ToClass.prototype.render = function render() {
      if (typeof baseComponent === 'string') {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(baseComponent, this.props);
      }
      return baseComponent(this.props, this.context);
    };

    return ToClass;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  ToClass.displayName = getDisplayName(baseComponent);
  ToClass.propTypes = baseComponent.propTypes;
  ToClass.contextTypes = baseComponent.contextTypes;
  ToClass.defaultProps = baseComponent.defaultProps;

  return ToClass;
};

var setPropTypes = function setPropTypes(propTypes) {
  return setStatic('propTypes', propTypes);
};

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

var createSink = function createSink(callback) {
  return function (_Component) {
    inherits(Sink, _Component);

    function Sink() {
      classCallCheck(this, Sink);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Sink.prototype.componentWillMount = function componentWillMount() {
      callback(this.props);
    };

    Sink.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      callback(nextProps);
    };

    Sink.prototype.render = function render() {
      return null;
    };

    return Sink;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
};

var componentFromProp = function componentFromProp(propName) {
  var Component$$1 = function Component$$1(props) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(props[propName], omit(props, [propName]));
  };
  Component$$1.displayName = 'componentFromProp(' + propName + ')';
  return Component$$1;
};

var nest = function nest() {
  for (var _len = arguments.length, Components = Array(_len), _key = 0; _key < _len; _key++) {
    Components[_key] = arguments[_key];
  }

  var factories = Components.map(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"]);
  var Nest = function Nest(_ref) {
    var props = objectWithoutProperties(_ref, []),
        children = _ref.children;
    return factories.reduceRight(function (child, factory) {
      return factory(props, child);
    }, children);
  };

  if (process.env.NODE_ENV !== 'production') {
    var displayNames = Components.map(getDisplayName);
    Nest.displayName = 'nest(' + displayNames.join(', ') + ')';
  }

  return Nest;
};

var hoistStatics = function hoistStatics(higherOrderComponent) {
  return function (BaseComponent) {
    var NewComponent = higherOrderComponent(BaseComponent);
    __WEBPACK_IMPORTED_MODULE_2_hoist_non_react_statics___default()(NewComponent, BaseComponent);
    return NewComponent;
  };
};

var _config = {
  fromESObservable: null,
  toESObservable: null
};

var configureObservable = function configureObservable(c) {
  _config = c;
};

var config = {
  fromESObservable: function fromESObservable(observable) {
    return typeof _config.fromESObservable === 'function' ? _config.fromESObservable(observable) : observable;
  },
  toESObservable: function toESObservable(stream) {
    return typeof _config.toESObservable === 'function' ? _config.toESObservable(stream) : stream;
  }
};

var componentFromStreamWithConfig = function componentFromStreamWithConfig(config$$1) {
  return function (propsToVdom) {
    return function (_Component) {
      inherits(ComponentFromStream, _Component);

      function ComponentFromStream() {
        var _config$fromESObserva;

        var _temp, _this, _ret;

        classCallCheck(this, ComponentFromStream);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { vdom: null }, _this.propsEmitter = Object(__WEBPACK_IMPORTED_MODULE_3_change_emitter__["createChangeEmitter"])(), _this.props$ = config$$1.fromESObservable((_config$fromESObserva = {
          subscribe: function subscribe(observer) {
            var unsubscribe = _this.propsEmitter.listen(function (props) {
              if (props) {
                observer.next(props);
              } else {
                observer.complete();
              }
            });
            return { unsubscribe: unsubscribe };
          }
        }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_4_symbol_observable__["a" /* default */]] = function () {
          return this;
        }, _config$fromESObserva)), _this.vdom$ = config$$1.toESObservable(propsToVdom(_this.props$)), _temp), possibleConstructorReturn(_this, _ret);
      }

      // Stream of props


      // Stream of vdom


      ComponentFromStream.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this;

        // Subscribe to child prop changes so we know when to re-render
        this.subscription = this.vdom$.subscribe({
          next: function next(vdom) {
            _this2.setState({ vdom: vdom });
          }
        });
        this.propsEmitter.emit(this.props);
      };

      ComponentFromStream.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // Receive new props from the owner
        this.propsEmitter.emit(nextProps);
      };

      ComponentFromStream.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        return nextState.vdom !== this.state.vdom;
      };

      ComponentFromStream.prototype.componentWillUnmount = function componentWillUnmount() {
        // Call without arguments to complete stream
        this.propsEmitter.emit();

        // Clean-up subscription before un-mounting
        this.subscription.unsubscribe();
      };

      ComponentFromStream.prototype.render = function render() {
        return this.state.vdom;
      };

      return ComponentFromStream;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  };
};

var componentFromStream = function componentFromStream(propsToVdom) {
  return componentFromStreamWithConfig(config)(propsToVdom);
};

var identity$1 = function identity(t) {
  return t;
};

var mapPropsStreamWithConfig = function mapPropsStreamWithConfig(config$$1) {
  var componentFromStream = componentFromStreamWithConfig({
    fromESObservable: identity$1,
    toESObservable: identity$1
  });
  return function (transform) {
    return function (BaseComponent) {
      var factory = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createFactory"])(BaseComponent);
      var fromESObservable = config$$1.fromESObservable,
          toESObservable = config$$1.toESObservable;

      return componentFromStream(function (props$) {
        var _ref;

        return _ref = {
          subscribe: function subscribe(observer) {
            var subscription = toESObservable(transform(fromESObservable(props$))).subscribe({
              next: function next(childProps) {
                return observer.next(factory(childProps));
              }
            });
            return {
              unsubscribe: function unsubscribe() {
                return subscription.unsubscribe();
              }
            };
          }
        }, _ref[__WEBPACK_IMPORTED_MODULE_4_symbol_observable__["a" /* default */]] = function () {
          return this;
        }, _ref;
      });
    };
  };
};

var mapPropsStream = function mapPropsStream(transform) {
  var hoc = mapPropsStreamWithConfig(config)(transform);

  if (process.env.NODE_ENV !== 'production') {
    return function (BaseComponent) {
      return setDisplayName(wrapDisplayName(BaseComponent, 'mapPropsStream'))(hoc(BaseComponent));
    };
  }
  return hoc;
};

var createEventHandlerWithConfig = function createEventHandlerWithConfig(config$$1) {
  return function () {
    var _config$fromESObserva;

    var emitter = Object(__WEBPACK_IMPORTED_MODULE_3_change_emitter__["createChangeEmitter"])();
    var stream = config$$1.fromESObservable((_config$fromESObserva = {
      subscribe: function subscribe(observer) {
        var unsubscribe = emitter.listen(function (value) {
          return observer.next(value);
        });
        return { unsubscribe: unsubscribe };
      }
    }, _config$fromESObserva[__WEBPACK_IMPORTED_MODULE_4_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _config$fromESObserva));
    return {
      handler: emitter.emit,
      stream: stream
    };
  };
};

var createEventHandler = createEventHandlerWithConfig(config);

// Higher-order component helpers



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17)))

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(264),
    createBaseEach = __webpack_require__(277);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(269),
    isObjectLike = __webpack_require__(51);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(21),
    stubFalse = __webpack_require__(270);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(166)(module)))

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(271),
    baseUnary = __webpack_require__(272),
    nodeUtil = __webpack_require__(273);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(79),
    stackClear = __webpack_require__(286),
    stackDelete = __webpack_require__(287),
    stackGet = __webpack_require__(288),
    stackHas = __webpack_require__(289),
    stackSet = __webpack_require__(290);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(303),
    isObjectLike = __webpack_require__(51);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(304),
    arraySome = __webpack_require__(307),
    cacheHas = __webpack_require__(308);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(44);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(175),
    toKey = __webpack_require__(84);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(24),
    isKey = __webpack_require__(136),
    stringToPath = __webpack_require__(327),
    toString = __webpack_require__(176);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(330);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(175),
    isArguments = __webpack_require__(164),
    isArray = __webpack_require__(24),
    isIndex = __webpack_require__(74),
    isLength = __webpack_require__(133),
    toKey = __webpack_require__(84);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(180),
    eq = __webpack_require__(81);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(142);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
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
/* 194 */,
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_gallery__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_shoutout_styles__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_google_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_styles_js__ = __webpack_require__(371);
// import "./i18n.js";

/**
 * Import example blocks
 */







/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icons__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_photo_gallery__ = __webpack_require__(89);

/**
 * Block dependencies
 */




/**
 * Internal block libraries
 */
var Fragment = wp.element.Fragment;
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaPlaceholder = _wp$editor.MediaPlaceholder,
    BlockControls = _wp$editor.BlockControls,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RadioControl = _wp$components.RadioControl,
    Toolbar = _wp$components.Toolbar;




/**
 * Register example block
 */
/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block.", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: __WEBPACK_IMPORTED_MODULE_1__icons__["a" /* default */].upload
  },
  keywords: [__("Media", "jsforwpadvblocks"), __("Images", "jsforwpadvblocks")],
  attributes: {
    direction: {
      type: "string",
      default: "row"
    },
    images: {
      type: "array",
      default: []
    },
    blockAlignment: {
      type: "string",
      default: "wide"
    }
  },
  getEditWrapperProps: function getEditWrapperProps(_ref) {
    var blockAlignment = _ref.blockAlignment;

    if ("left" === blockAlignment || "right" === blockAlignment || "full" === blockAlignment) {
      return { "data-align": blockAlignment };
    }
  },

  edit: function edit(props) {
    var _props$attributes = props.attributes,
        direction = _props$attributes.direction,
        images = _props$attributes.images,
        blockAlignment = _props$attributes.blockAlignment,
        className = props.className,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onSelectImages = function onSelectImages(photos) {
      var images = photos.map(function (img) {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, {
          src: img.sizes.large.url,
          width: img.sizes.large.width,
          height: img.sizes.large.height,
          id: img.id,
          alt: img.alt,
          caption: img.caption
          // sizes: img.sizes
        });
      });
      setAttributes({
        images: images
      });
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
              label: __("Flex Direction", "jsforwpblocks"),
              selected: direction,
              options: [{ label: "Row", value: "row" }, { label: "Column", value: "column" }],
              onChange: function onChange(direction) {
                return setAttributes({ direction: direction });
              }
            })
          )
        )
      ),
      wp.element.createElement(
        BlockControls,
        null,
        wp.element.createElement(BlockAlignmentToolbar, {
          value: blockAlignment,
          onChange: function onChange(blockAlignment) {
            return setAttributes({ blockAlignment: blockAlignment });
          }
        }),
        !!images.length && wp.element.createElement(
          Toolbar,
          null,
          wp.element.createElement(MediaUpload, {
            onSelect: onSelectImages,
            allowedTypes: ["image"],
            multiple: true,
            gallery: true,
            value: images.map(function (img) {
              return img.id;
            }),
            render: function render(_ref2) {
              var open = _ref2.open;
              return wp.element.createElement(IconButton, {
                className: "components-toolbar__control",
                label: __("Edit Gallery"),
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
        !!!images.length && wp.element.createElement(
          Fragment,
          null,
          wp.element.createElement(MediaPlaceholder, {
            icon: "format-gallery",
            className: className,
            labels: {
              title: __("Gallery"),
              instructions: __("Drag images, upload new ones or select files from your library.")
            },
            onSelect: onSelectImages,
            accept: "image/*"
            //allowedTypes={ALLOWED_MEDIA_TYPES}
            , multiple: true
            //notices={noticeUI}
            //onError={noticeOperations.createErrorNotice}
          })
        ),
        !!images.length && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_4_react_photo_gallery__["a" /* default */], { photos: images, direction: direction })
      )
    );
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        direction = _props$attributes2.direction,
        images = _props$attributes2.images,
        blockAlignment = _props$attributes2.blockAlignment;

    return wp.element.createElement(
      "div",
      {
        className: "align" + blockAlignment + " " + direction,
        "data-direction": direction
      },
      wp.element.createElement(
        "div",
        { "class": "react-photo-gallery--gallery server-side" },
        wp.element.createElement(
          "div",
          { style: "display: flex; flex-flow: row wrap;" },
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
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(13);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(199) });


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(49);
var pIE = __webpack_require__(30);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(66);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(23)(function () {
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
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icons = {};

icons.upload = wp.element.createElement(
    'svg',
    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'm77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z'
    }),
    wp.element.createElement('path', { d: 'm16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z'
    }),
    wp.element.createElement('path', { d: 'm28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z'
    }),
    wp.element.createElement('path', { d: 'm84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z'
    })
);

icons.swap = wp.element.createElement(
    'svg',
    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'm39.66 76.422h36.762v-36.781h-36.762zm4.6211-32.141h27.5v27.5h-27.5z'
    }),
    wp.element.createElement('path', { d: 'm36.801 55.719h-8.582v-27.5h27.5v9.2031h4.6406v-13.844h-36.781v36.762h13.223z'
    }),
    wp.element.createElement('path', { d: 'm90.18 42.781c-3-16.801-16.02-29.922-33-32.961-2.3789-0.42187-4.7812-0.64062-7.1797-0.64062v4.6211c2.1211 0 4.2617 0.17969 6.3594 0.55859 14.781 2.6406 26.18 13.898 29.121 28.398l-5.6602 0.003907 8.0781 14 8.0781-14h-5.7969z'
    }),
    wp.element.createElement('path', { d: 'm14.52 57.219h5.6602l-8.0781-13.98-8.0781 14h5.8008c3 16.801 16.039 29.941 33 32.961 2.375 0.40234 4.7773 0.64062 7.1758 0.64062v-4.6406c-2.1016 0-4.2617-0.19922-6.3594-0.57812-14.781-2.6406-26.18-13.883-29.121-28.402z'
    })
);

icons.remove = wp.element.createElement(
    'svg',
    { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
    wp.element.createElement('path', { d: 'm50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z'
    })
);

/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),
/* 201 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 202 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(204);
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
/* 204 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ApiForm__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Map__ = __webpack_require__(208);
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
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl;





// import Map from "./components/Map";

/**
 * Register example block
 */
/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/google-map", {
  title: __("Google Map", "jsforwpadvblocks"),
  description: __("An example block for working with the Google Maps API.", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: {
    // background: "rgba(254, 243, 224, 0.52)",
    src: "location-alt"
  },
  keywords: [__("Location", "jsforwpadvblocks")],
  attributes: {
    text: {
      type: "html"
    }
  },
  edit: function edit(props) {
    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__edit__["a" /* default */], props);
  },
  save: function save(props) {
    var text = props.attributes.text;

    return wp.element.createElement("div", null);
  }
}));

/***/ }),
/* 206 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);





var _wp = wp,
    apiFetch = _wp.apiFetch;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl;

var ApiForm = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ApiForm, _Component);

  function ApiForm() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ApiForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ApiForm.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ApiForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      apiKeyTextControl: _this.props.apiKey
    }, _this.toggleIsEditing = function (e) {
      e.preventDefault();
      _this.props.toggleIsEditingApiKey();
    }, _this.onSave = function (e) {
      e.preventDefault();
      _this.props.updateApiKey(_this.state.apiKeyTextControl);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ApiForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.props.isEditingApiKey || this.props.apiKey === "" ? wp.element.createElement(
        "form",
        null,
        wp.element.createElement(TextControl, {
          label: "Please enter in a Google Maps API Key",
          readonly: this.props.isSavingApiKey,
          value: this.state.apiKeyTextControl,
          onChange: function onChange(apiKeyTextControl) {
            return _this2.setState({ apiKeyTextControl: apiKeyTextControl });
          }
        }),
        wp.element.createElement(
          "p",
          null,
          wp.element.createElement(
            Button,
            {
              className: "is-button is-primary",
              disabled: this.props.isSavingApiKey,
              onClick: this.onSave
            },
            "Save API Key"
          ),
          " ",
          wp.element.createElement(
            Button,
            {
              className: "is-button",
              disabled: this.props.isSavingApiKey,
              onClick: this.toggleIsEditing
            },
            "Cancel"
          )
        ),
        wp.element.createElement(
          "p",
          null,
          wp.element.createElement(
            "a",
            {
              href: "https://developers.google.com/maps/documentation/javascript/get-api-key",
              target: "_blank"
            },
            "Instructions for getting a Google Maps API Key"
          )
        )
      ) : wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
          "p",
          null,
          "API Key Saved"
        ),
        wp.element.createElement(
          "p",
          null,
          wp.element.createElement(
            Button,
            { className: "is-button", onClick: this.toggleIsEditing },
            "Edit API Key"
          )
        )
      );
    }
  }]);

  return ApiForm;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ApiForm);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_google_maps__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_google_maps__);
/*
 * Base Google Map example
 */
var Component = wp.element.Component;




// - Localize default map location
// - Search form in sidebar
// - Wire autocomplete for locations
// - onSelect location, add to sidebar and map

var MyMapComponent = Object(__WEBPACK_IMPORTED_MODULE_0_react_google_maps__["withScriptjs"])(Object(__WEBPACK_IMPORTED_MODULE_0_react_google_maps__["withGoogleMap"])(function (props) {
  return wp.element.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react_google_maps__["GoogleMap"],
    { defaultZoom: 8, defaultCenter: { lat: -34.397, lng: 150.644 } },
    props.isMarkerShown && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0_react_google_maps__["Marker"], { position: { lat: -34.397, lng: 150.644 } })
  );
}));

/* harmony default export */ __webpack_exports__["a"] = (MyMapComponent);

// export default class SimpleMapPage extends Component {
//   static propTypes = {
//     center: PropTypes.array,
//     zoom: PropTypes.number,
//     greatPlaceCoords: PropTypes.any
//   };

//   static defaultProps = {
//     center: [59.938043, 30.337157],
//     zoom: 9,
//     greatPlaceCoords: { lat: 59.724465, lng: 30.080121 }
//   };

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <GoogleMap
//         // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
//         center={this.props.center}
//         zoom={this.props.zoom}
//       >
//         <MyGreatPlace
//           lat={59.955413}
//           lng={30.337844}
//           text={"A"} /* Kreyser Avrora */
//         />
//         <MyGreatPlace
//           {...this.props.greatPlaceCoords}
//           text={"B"} /* road circle */
//         />
//       </GoogleMap>
//     );
//   }
// }

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _withScriptjs = __webpack_require__(210)

Object.defineProperty(exports, "withScriptjs", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withScriptjs).default
  },
})

var _withGoogleMap = __webpack_require__(250)

Object.defineProperty(exports, "withGoogleMap", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_withGoogleMap).default
  },
})

var _GoogleMap = __webpack_require__(251)

Object.defineProperty(exports, "GoogleMap", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GoogleMap).default
  },
})

var _Circle = __webpack_require__(349)

Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default
  },
})

var _Marker = __webpack_require__(350)

Object.defineProperty(exports, "Marker", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Marker).default
  },
})

var _Polyline = __webpack_require__(351)

Object.defineProperty(exports, "Polyline", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Polyline).default
  },
})

var _Polygon = __webpack_require__(352)

Object.defineProperty(exports, "Polygon", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Polygon).default
  },
})

var _Rectangle = __webpack_require__(353)

Object.defineProperty(exports, "Rectangle", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rectangle).default
  },
})

var _InfoWindow = __webpack_require__(354)

Object.defineProperty(exports, "InfoWindow", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InfoWindow).default
  },
})

var _OverlayView = __webpack_require__(355)

Object.defineProperty(exports, "OverlayView", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_OverlayView).default
  },
})

var _GroundOverlay = __webpack_require__(364)

Object.defineProperty(exports, "GroundOverlay", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroundOverlay).default
  },
})

var _DirectionsRenderer = __webpack_require__(365)

Object.defineProperty(exports, "DirectionsRenderer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DirectionsRenderer).default
  },
})

var _FusionTablesLayer = __webpack_require__(366)

Object.defineProperty(exports, "FusionTablesLayer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_FusionTablesLayer).default
  },
})

var _KmlLayer = __webpack_require__(367)

Object.defineProperty(exports, "KmlLayer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_KmlLayer).default
  },
})

var _TrafficLayer = __webpack_require__(368)

Object.defineProperty(exports, "TrafficLayer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TrafficLayer).default
  },
})

var _StreetViewPanorama = __webpack_require__(369)

Object.defineProperty(exports, "StreetViewPanorama", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_StreetViewPanorama).default
  },
})

var _BicyclingLayer = __webpack_require__(370)

Object.defineProperty(exports, "BicyclingLayer", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BicyclingLayer).default
  },
})

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _objectWithoutProperties2 = __webpack_require__(140)

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _bind2 = __webpack_require__(70)

var _bind3 = _interopRequireDefault(_bind2)

exports.withScriptjs = withScriptjs

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _canUseDom = __webpack_require__(160)

var _canUseDom2 = _interopRequireDefault(_canUseDom)

var _recompose = __webpack_require__(161)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var LOADING_STATE_NONE = "NONE"
var LOADING_STATE_BEGIN = "BEGIN"
var LOADING_STATE_LOADED = "LOADED"

function withScriptjs(BaseComponent) {
  var factory = _react2.default.createFactory(BaseComponent)

  var Container = (function(_React$PureComponent) {
    ;(0, _inherits3.default)(Container, _React$PureComponent)

    function Container() {
      var _ref

      var _temp, _this, _ret

      ;(0, _classCallCheck3.default)(this, Container)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
          this,
          (_ref =
            Container.__proto__ ||
            (0, _getPrototypeOf2.default)(Container)).call.apply(
            _ref,
            [this].concat(args)
          )
        )),
        _this)),
        (_this.state = {
          loadingState: LOADING_STATE_NONE,
        }),
        (_this.isUnmounted = false),
        (_this.handleLoaded = (0, _bind3.default)(_this.handleLoaded, _this)),
        _temp)),
        (0, _possibleConstructorReturn3.default)(_this, _ret)
      )
    }

    ;(0, _createClass3.default)(Container, [
      {
        key: "handleLoaded",
        value: function handleLoaded() {
          if (this.isUnmounted) {
            return
          }
          this.setState({
            loadingState: LOADING_STATE_LOADED,
          })
        },
      },
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          var _props = this.props,
            loadingElement = _props.loadingElement,
            googleMapURL = _props.googleMapURL

          ;(0, _invariant2.default)(
            !!loadingElement && !!googleMapURL,
            "Required props loadingElement or googleMapURL is missing. You need to provide both of them."
          )
        },
      },
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          var loadingState = this.state.loadingState

          if (loadingState !== LOADING_STATE_NONE || !_canUseDom2.default) {
            return
          }
          this.setState({
            loadingState: LOADING_STATE_BEGIN,
          })
          // Don't load scriptjs as a dependency since we do not want this module be used on server side.
          // eslint-disable-next-line global-require
          var scriptjs = __webpack_require__(249)
          var googleMapURL = this.props.googleMapURL

          scriptjs(googleMapURL, this.handleLoaded)
        },
      },
      {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.isUnmounted = true
        },
      },
      {
        key: "render",
        value: function render() {
          var _props2 = this.props,
            loadingElement = _props2.loadingElement,
            googleMapURL = _props2.googleMapURL,
            restProps = (0, _objectWithoutProperties3.default)(_props2, [
              "loadingElement",
              "googleMapURL",
            ])
          var loadingState = this.state.loadingState

          if (loadingState === LOADING_STATE_LOADED) {
            return factory(restProps)
          } else {
            return loadingElement
          }
        },
      },
    ])
    return Container
  })(_react2.default.PureComponent)

  Container.displayName =
    "withScriptjs(" + (0, _recompose.getDisplayName)(BaseComponent) + ")"
  Container.propTypes = {
    loadingElement: _propTypes2.default.node.isRequired,
    googleMapURL: _propTypes2.default.string.isRequired,
  }

  return Container
}

exports.default = withScriptjs


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(128);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(213),
    defineProperty = __webpack_require__(142),
    identity = __webpack_require__(64);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 213 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(71),
    isMasked = __webpack_require__(217),
    isObject = __webpack_require__(44),
    toSource = __webpack_require__(144);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 216 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(218);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 219 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(146),
    createBind = __webpack_require__(221),
    createCurry = __webpack_require__(222),
    createHybrid = __webpack_require__(149),
    createPartial = __webpack_require__(239),
    getData = __webpack_require__(153),
    mergeData = __webpack_require__(240),
    setData = __webpack_require__(156),
    setWrapToString = __webpack_require__(157),
    toInteger = __webpack_require__(241);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(73),
    root = __webpack_require__(21);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(128),
    createCtor = __webpack_require__(73),
    createHybrid = __webpack_require__(149),
    createRecurry = __webpack_require__(152),
    getHolder = __webpack_require__(132),
    replaceHolders = __webpack_require__(75),
    root = __webpack_require__(21);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 223 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(130),
    getData = __webpack_require__(153),
    getFuncName = __webpack_require__(226),
    lodash = __webpack_require__(228);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 225 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(227);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 227 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(130),
    LodashWrapper = __webpack_require__(154),
    baseLodash = __webpack_require__(131),
    isArray = __webpack_require__(24),
    isObjectLike = __webpack_require__(51),
    wrapperClone = __webpack_require__(229);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(130),
    LodashWrapper = __webpack_require__(154),
    copyArray = __webpack_require__(155);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 230 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 231 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(158),
    arrayIncludes = __webpack_require__(233);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(234);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(235),
    baseIsNaN = __webpack_require__(236),
    strictIndexOf = __webpack_require__(237);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 235 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 236 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 237 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(155),
    isIndex = __webpack_require__(74);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(128),
    createCtor = __webpack_require__(73),
    root = __webpack_require__(21);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(150),
    composeArgsRight = __webpack_require__(151),
    replaceHolders = __webpack_require__(75);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(242);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(159);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createChangeEmitter = exports.createChangeEmitter = function createChangeEmitter() {
  var currentListeners = [];
  var nextListeners = currentListeners;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  function listen(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function () {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  function emit() {
    currentListeners = nextListeners;
    var listeners = currentListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i].apply(listeners, arguments);
    }
  }

  return {
    listen: listen,
    emit: emit
  };
};

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(248);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(50), __webpack_require__(247)(module)))

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      fn(el)
      return 1
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _objectWithoutProperties2 = __webpack_require__(140)

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
)

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _bind2 = __webpack_require__(70)

var _bind3 = _interopRequireDefault(_bind2)

exports.withGoogleMap = withGoogleMap

var _warning = __webpack_require__(162)

var _warning2 = _interopRequireDefault(_warning)

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _recompose = __webpack_require__(161)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
function withGoogleMap(BaseComponent) {
  var factory = _react2.default.createFactory(BaseComponent)

  var Container = (function(_React$PureComponent) {
    ;(0, _inherits3.default)(Container, _React$PureComponent)

    function Container() {
      var _ref

      var _temp, _this, _ret

      ;(0, _classCallCheck3.default)(this, Container)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
          this,
          (_ref =
            Container.__proto__ ||
            (0, _getPrototypeOf2.default)(Container)).call.apply(
            _ref,
            [this].concat(args)
          )
        )),
        _this)),
        (_this.state = {
          map: null,
        }),
        (_this.handleComponentMount = (0, _bind3.default)(
          _this.handleComponentMount,
          _this
        )),
        _temp)),
        (0, _possibleConstructorReturn3.default)(_this, _ret)
      )
    }

    ;(0, _createClass3.default)(Container, [
      {
        key: "getChildContext",
        value: function getChildContext() {
          return (0, _defineProperty3.default)(
            {},
            _constants.MAP,
            this.state.map
          )
        },
      },
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          var _props = this.props,
            containerElement = _props.containerElement,
            mapElement = _props.mapElement

          ;(0, _invariant2.default)(
            !!containerElement && !!mapElement,
            "Required props containerElement or mapElement is missing. You need to provide both of them.\n The `google.maps.Map` instance will be initialized on mapElement and it's wrapped by containerElement.\nYou need to provide both of them since Google Map requires the DOM to have height when initialized."
          )
        },
      },
      {
        key: "handleComponentMount",
        value: function handleComponentMount(node) {
          if (this.state.map || node === null) {
            return
          }
          ;(0, _warning2.default)(
            "undefined" !== typeof google,
            "Make sure you've put a <script> tag in your <head> element to load Google Maps JavaScript API v3.\n If you're looking for built-in support to load it for you, use the \"async/ScriptjsLoader\" instead.\n See https://github.com/tomchentw/react-google-maps/pull/168"
          )
          // https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
          var map = new google.maps.Map(node)
          this.setState({ map: map })
        },
      },
      {
        key: "render",
        value: function render() {
          var _props2 = this.props,
            containerElement = _props2.containerElement,
            mapElement = _props2.mapElement,
            restProps = (0, _objectWithoutProperties3.default)(_props2, [
              "containerElement",
              "mapElement",
            ])
          var map = this.state.map

          if (map) {
            return _react2.default.cloneElement(
              containerElement,
              {},
              _react2.default.cloneElement(mapElement, {
                ref: this.handleComponentMount,
              }),
              _react2.default.createElement("div", null, factory(restProps))
            )
          } else {
            return _react2.default.cloneElement(
              containerElement,
              {},
              _react2.default.cloneElement(mapElement, {
                ref: this.handleComponentMount,
              }),
              _react2.default.createElement("div", null)
            )
          }
        },
      },
    ])
    return Container
  })(_react2.default.PureComponent)

  Container.displayName =
    "withGoogleMap(" + (0, _recompose.getDisplayName)(BaseComponent) + ")"
  Container.propTypes = {
    containerElement: _propTypes2.default.node.isRequired,
    mapElement: _propTypes2.default.node.isRequired,
  }
  Container.childContextTypes = (0, _defineProperty3.default)(
    {},
    _constants.MAP,
    _propTypes2.default.object
  )

  return Container
}

exports.default = withGoogleMap


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.GoogleMap = exports.Map = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _toConsumableArray2 = __webpack_require__(252)

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Map`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
 */
var Map = (exports.Map = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Map, _React$PureComponent)
  ;(0, _createClass3.default)(Map, [
    {
      key: "fitBounds",

      /**
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
       * @public
       */
      value: function fitBounds() {
        var _context$MAP

        return (_context$MAP = this.context[_constants.MAP]).fitBounds.apply(
          _context$MAP,
          arguments
        )
      },

      /**
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
       * @public
       */
    },
    {
      key: "panBy",
      value: function panBy() {
        var _context$MAP2

        return (_context$MAP2 = this.context[_constants.MAP]).panBy.apply(
          _context$MAP2,
          arguments
        )
      },

      /**
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
       * @public
       */
    },
    {
      key: "panTo",
      value: function panTo() {
        var _context$MAP3

        return (_context$MAP3 = this.context[_constants.MAP]).panTo.apply(
          _context$MAP3,
          arguments
        )
      },

      /**
       * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
       * @public
       */
    },
    {
      key: "panToBounds",
      value: function panToBounds() {
        var _context$MAP4

        return (_context$MAP4 = this.context[_constants.MAP]).panToBounds.apply(
          _context$MAP4,
          arguments
        )
      },

      /*
     * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map
     */
    },
  ])

  function Map(props, context) {
    ;(0, _classCallCheck3.default)(this, Map)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Map.__proto__ || (0, _getPrototypeOf2.default)(Map)).call(
        this,
        props,
        context
      )
    )

    ;(0, _invariant2.default)(
      !!_this.context[_constants.MAP],
      "Did you wrap <GoogleMap> component with withGoogleMap() HOC?"
    )
    ;(0, _MapChildHelper.construct)(
      GoogleMap.propTypes,
      updaterMap,
      _this.props,
      _this.context[_constants.MAP]
    )
    return _this
  }

  ;(0, _createClass3.default)(Map, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.context[_constants.MAP],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.context[_constants.MAP],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },

      /**
       * Returns the lat/lng bounds of the current viewport. If more than one copy of the world is visible, the bounds range in longitude from -180 to 180 degrees inclusive. If the map is not yet initialized (i.e. the mapType is still null), or center and zoom have not been set then the result is `null` or `undefined`.
       * @type LatLngBoundsnullundefined
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.context[_constants.MAP].getBounds()
      },

      /**
       * Returns the position displayed at the center of the map. Note that this `LatLng` object is _not_ wrapped. See `[LatLng](#LatLng)` for more information.
       * @type LatLngLatLngLatLng
       * @public
       */
    },
    {
      key: "getCenter",
      value: function getCenter() {
        return this.context[_constants.MAP].getCenter()
      },

      /**
       * Returns the clickability of the map icons. A map icon represents a point of interest, also known as a POI. If the returned value is true, then the icons are clickable on the map.
       * @type boolean
       * @public
       */
    },
    {
      key: "getClickableIcons",
      value: function getClickableIcons() {
        return this.context[_constants.MAP].getClickableIcons()
      },

      /**
       *
       * @type Element
       * @public
       */
    },
    {
      key: "getDiv",
      value: function getDiv() {
        return this.context[_constants.MAP].getDiv()
      },

      /**
       * Returns the compass heading of aerial imagery. The heading value is measured in degrees (clockwise) from cardinal direction North.
       * @type number
       * @public
       */
    },
    {
      key: "getHeading",
      value: function getHeading() {
        return this.context[_constants.MAP].getHeading()
      },

      /**
       *
       * @type MapTypeId|string
       * @public
       */
    },
    {
      key: "getMapTypeId",
      value: function getMapTypeId() {
        return this.context[_constants.MAP].getMapTypeId()
      },

      /**
       * Returns the current `Projection`. If the map is not yet initialized (i.e. the mapType is still null) then the result is null. Listen to `projection_changed` and check its value to ensure it is not null.
       * @type ProjectionProjectionprojection_changed
       * @public
       */
    },
    {
      key: "getProjection",
      value: function getProjection() {
        return this.context[_constants.MAP].getProjection()
      },

      /**
       * Returns the default `StreetViewPanorama` bound to the map, which may be a default panorama embedded within the map, or the panorama set using `setStreetView()`. Changes to the map's `streetViewControl` will be reflected in the display of such a bound panorama.
       * @type StreetViewPanoramaStreetViewPanoramasetStreetView()streetViewControl
       * @public
       */
    },
    {
      key: "getStreetView",
      value: function getStreetView() {
        return this.context[_constants.MAP].getStreetView()
      },

      /**
       * Returns the current angle of incidence of the map, in degrees from the viewport plane to the map plane. The result will be `0` for imagery taken directly overhead or `45` for 45° imagery. 45° imagery is only available for `satellite` and `hybrid` map types, within some locations, and at some zoom levels. **Note:** This method does not return the value set by `setTilt`. See `setTilt` for details.
       * @type number045satellitehybridsetTiltsetTilt
       * @public
       */
    },
    {
      key: "getTilt",
      value: function getTilt() {
        return this.context[_constants.MAP].getTilt()
      },

      /**
       *
       * @type number
       * @public
       */
    },
    {
      key: "getZoom",
      value: function getZoom() {
        return this.context[_constants.MAP].getZoom()
      },
    },
  ])
  return Map
})(
  _react2.default.PureComponent
)) /*
                                   * -----------------------------------------------------------------------------
                                   * This file is auto-generated from the corresponding file at `src/macros/`.
                                   * Please **DO NOT** edit this file directly when creating PRs.
                                   * -----------------------------------------------------------------------------
                                   */

Map.displayName = "GoogleMap"
Map.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapTypeRegistry
   * @type Array<[id:string, mapType:MapType|*]>
   */
  defaultExtraMapTypes: _propTypes2.default.arrayOf(
    _propTypes2.default.arrayOf(_propTypes2.default.any)
  ),

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultClickableIcons: _propTypes2.default.bool,

  /**
   * @type number
   */
  defaultHeading: _propTypes2.default.number,

  /**
   * @type MapTypeId|string
   */
  defaultMapTypeId: _propTypes2.default.any,

  /**
   * @type MapOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type StreetViewPanorama
   */
  defaultStreetView: _propTypes2.default.any,

  /**
   * @type number
   */
  defaultTilt: _propTypes2.default.number,

  /**
   * @type number
   */
  defaultZoom: _propTypes2.default.number,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes2.default.any,

  /**
   * @type boolean
   */
  clickableIcons: _propTypes2.default.bool,

  /**
   * @type number
   */
  heading: _propTypes2.default.number,

  /**
   * @type MapTypeId|string
   */
  mapTypeId: _propTypes2.default.any,

  /**
   * @type MapOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type StreetViewPanorama
   */
  streetView: _propTypes2.default.any,

  /**
   * @type number
   */
  tilt: _propTypes2.default.number,

  /**
   * @type number
   */
  zoom: _propTypes2.default.number,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMapTypeIdChanged: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onTilesLoaded: _propTypes2.default.func,

  /**
   * function
   */
  onBoundsChanged: _propTypes2.default.func,

  /**
   * function
   */
  onCenterChanged: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,

  /**
   * function
   */
  onHeadingChanged: _propTypes2.default.func,

  /**
   * function
   */
  onIdle: _propTypes2.default.func,

  /**
   * function
   */
  onProjectionChanged: _propTypes2.default.func,

  /**
   * function
   */
  onResize: _propTypes2.default.func,

  /**
   * function
   */
  onTiltChanged: _propTypes2.default.func,

  /**
   * function
   */
  onZoomChanged: _propTypes2.default.func,
}
Map.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
var GoogleMap = (exports.GoogleMap = Map)

exports.default = Map

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed",
}

var updaterMap = {
  extraMapTypes: function extraMapTypes(instance, extra) {
    extra.forEach(function(it) {
      var _instance$mapTypes

      return (_instance$mapTypes = instance.mapTypes).set.apply(
        _instance$mapTypes,
        (0, _toConsumableArray3.default)(it)
      )
    })
  },
  center: function center(instance, _center) {
    instance.setCenter(_center)
  },
  clickableIcons: function clickableIcons(instance, _clickableIcons) {
    instance.setClickableIcons(_clickableIcons)
  },
  heading: function heading(instance, _heading) {
    instance.setHeading(_heading)
  },
  mapTypeId: function mapTypeId(instance, _mapTypeId) {
    instance.setMapTypeId(_mapTypeId)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  streetView: function streetView(instance, _streetView) {
    instance.setStreetView(_streetView)
  },
  tilt: function tilt(instance, _tilt) {
    instance.setTilt(_tilt)
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom)
  },
}


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(253);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(254), __esModule: true };

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(69);
__webpack_require__(255);
module.exports = __webpack_require__(2).Array.from;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(47);
var $export = __webpack_require__(13);
var toObject = __webpack_require__(37);
var call = __webpack_require__(256);
var isArrayIter = __webpack_require__(257);
var toLength = __webpack_require__(67);
var createProperty = __webpack_require__(258);
var getIterFn = __webpack_require__(259);

$export($export.S + $export.F * !__webpack_require__(261)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(22);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(28);
var ITERATOR = __webpack_require__(9)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(10);
var createDesc = __webpack_require__(25);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(260);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(28);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(48);
var TAG = __webpack_require__(9)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(9)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(263),
    baseEach = __webpack_require__(163),
    baseIteratee = __webpack_require__(278),
    baseReduce = __webpack_require__(337),
    isArray = __webpack_require__(24);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 263 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(265),
    keys = __webpack_require__(77);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(266);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 266 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(268),
    isArguments = __webpack_require__(164),
    isArray = __webpack_require__(24),
    isBuffer = __webpack_require__(165),
    isIndex = __webpack_require__(74),
    isTypedArray = __webpack_require__(167);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(65),
    isObjectLike = __webpack_require__(51);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 270 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(65),
    isLength = __webpack_require__(133),
    isObjectLike = __webpack_require__(51);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(143);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(166)(module)))

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(168),
    nativeKeys = __webpack_require__(275);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(276);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(78);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(279),
    baseMatchesProperty = __webpack_require__(325),
    identity = __webpack_require__(64),
    isArray = __webpack_require__(24),
    property = __webpack_require__(334);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(280),
    getMatchData = __webpack_require__(324),
    matchesStrictComparable = __webpack_require__(173);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(169),
    baseIsEqual = __webpack_require__(170);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(80);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(80);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(80);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(80);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(79);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 287 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 289 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(79),
    Map = __webpack_require__(134),
    MapCache = __webpack_require__(135);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(292),
    ListCache = __webpack_require__(79),
    Map = __webpack_require__(134);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(293),
    hashDelete = __webpack_require__(294),
    hashGet = __webpack_require__(295),
    hashHas = __webpack_require__(296),
    hashSet = __webpack_require__(297);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(82);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(82);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(82);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(82);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(83);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 299 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(83);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(83);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(83);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(169),
    equalArrays = __webpack_require__(171),
    equalByTag = __webpack_require__(309),
    equalObjects = __webpack_require__(313),
    getTag = __webpack_require__(320),
    isArray = __webpack_require__(24),
    isBuffer = __webpack_require__(165),
    isTypedArray = __webpack_require__(167);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(135),
    setCacheAdd = __webpack_require__(305),
    setCacheHas = __webpack_require__(306);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 305 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 306 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 307 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 308 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72),
    Uint8Array = __webpack_require__(310),
    eq = __webpack_require__(81),
    equalArrays = __webpack_require__(171),
    mapToArray = __webpack_require__(311),
    setToArray = __webpack_require__(312);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(21);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 311 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 312 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(314);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(315),
    getSymbols = __webpack_require__(317),
    keys = __webpack_require__(77);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(316),
    isArray = __webpack_require__(24);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 316 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(318),
    stubArray = __webpack_require__(319);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 318 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 319 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(321),
    Map = __webpack_require__(134),
    Promise = __webpack_require__(322),
    Set = __webpack_require__(323),
    WeakMap = __webpack_require__(148),
    baseGetTag = __webpack_require__(65),
    toSource = __webpack_require__(144);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(43),
    root = __webpack_require__(21);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(172),
    keys = __webpack_require__(77);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(170),
    get = __webpack_require__(326),
    hasIn = __webpack_require__(332),
    isKey = __webpack_require__(136),
    isStrictComparable = __webpack_require__(172),
    matchesStrictComparable = __webpack_require__(173),
    toKey = __webpack_require__(84);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(174);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(328);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(329);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(135);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(72),
    arrayMap = __webpack_require__(331),
    isArray = __webpack_require__(24),
    isSymbol = __webpack_require__(76);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 331 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(333),
    hasPath = __webpack_require__(177);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 333 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(335),
    basePropertyDeep = __webpack_require__(336),
    isKey = __webpack_require__(136),
    toKey = __webpack_require__(84);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 335 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(174);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 337 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(158),
    baseEach = __webpack_require__(163),
    castFunction = __webpack_require__(339),
    isArray = __webpack_require__(24);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(64);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(341);

/**
 * Converts the first character of `string` to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.lowerFirst('Fred');
 * // => 'fred'
 *
 * _.lowerFirst('FRED');
 * // => 'fRED'
 */
var lowerFirst = createCaseFirst('toLowerCase');

module.exports = lowerFirst;


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(342),
    hasUnicode = __webpack_require__(178),
    stringToArray = __webpack_require__(344),
    toString = __webpack_require__(176);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(343);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 343 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(345),
    hasUnicode = __webpack_require__(178),
    unicodeToArray = __webpack_require__(346);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 345 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 346 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

var baseHas = __webpack_require__(348),
    hasPath = __webpack_require__(177);

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),
/* 348 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Circle = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Circle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Circle = (exports.Circle = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Circle, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Circle
   */
  function Circle(props, context) {
    ;(0, _classCallCheck3.default)(this, Circle)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Circle.__proto__ || (0, _getPrototypeOf2.default)(Circle)).call(
        this,
        props,
        context
      )
    )

    var circle = new google.maps.Circle()
    ;(0, _MapChildHelper.construct)(
      Circle.propTypes,
      updaterMap,
      _this.props,
      circle
    )
    circle.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)({}, _constants.CIRCLE, circle)
    return _this
  }

  ;(0, _createClass3.default)(Circle, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.CIRCLE],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.CIRCLE],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var circle = this.state[_constants.CIRCLE]
        if (circle) {
          circle.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Gets the `LatLngBounds` of this Circle.
       * @type LatLngBoundsLatLngBounds
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.CIRCLE].getBounds()
      },

      /**
       * Returns the center of this circle.
       * @type LatLng
       * @public
       */
    },
    {
      key: "getCenter",
      value: function getCenter() {
        return this.state[_constants.CIRCLE].getCenter()
      },

      /**
       * Returns whether this circle can be dragged by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getDraggable",
      value: function getDraggable() {
        return this.state[_constants.CIRCLE].getDraggable()
      },

      /**
       * Returns whether this circle can be edited by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getEditable",
      value: function getEditable() {
        return this.state[_constants.CIRCLE].getEditable()
      },

      /**
       * Returns the radius of this circle (in meters).
       * @type number
       * @public
       */
    },
    {
      key: "getRadius",
      value: function getRadius() {
        return this.state[_constants.CIRCLE].getRadius()
      },

      /**
       * Returns whether this circle is visible on the map.
       * @type boolean
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.state[_constants.CIRCLE].getVisible()
      },
    },
  ])
  return Circle
})(_react2.default.PureComponent))

Circle.propTypes = {
  /**
   * @type LatLng|LatLngLiteral
   */
  defaultCenter: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes2.default.bool,

  /**
   * @type CircleOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type number
   */
  defaultRadius: _propTypes2.default.number,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type LatLng|LatLngLiteral
   */
  center: _propTypes2.default.any,

  /**
   * @type boolean
   */
  draggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes2.default.bool,

  /**
   * @type CircleOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type number
   */
  radius: _propTypes2.default.number,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onCenterChanged: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,

  /**
   * function
   */
  onRadiusChanged: _propTypes2.default.func,
}
Circle.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Circle

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onRadiusChanged: "radius_changed",
}

var updaterMap = {
  center: function center(instance, _center) {
    instance.setCenter(_center)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  radius: function radius(instance, _radius) {
    instance.setRadius(_radius)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Marker = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _Marker$contextTypes /*
                           * -----------------------------------------------------------------------------
                           * This file is auto-generated from the corresponding file at `src/macros/`.
                           * Please **DO NOT** edit this file directly when creating PRs.
                           * -----------------------------------------------------------------------------
                           */
/* global google */

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Marker`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
 */
var Marker = (exports.Marker = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Marker, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Marker
   */
  function Marker(props, context) {
    ;(0, _classCallCheck3.default)(this, Marker)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Marker.__proto__ || (0, _getPrototypeOf2.default)(Marker)).call(
        this,
        props,
        context
      )
    )

    var marker = new google.maps.Marker()
    ;(0, _MapChildHelper.construct)(
      Marker.propTypes,
      updaterMap,
      _this.props,
      marker
    )
    var markerClusterer = _this.context[_constants.MARKER_CLUSTERER]
    if (markerClusterer) {
      markerClusterer.addMarker(marker, !!_this.props.noRedraw)
    } else {
      marker.setMap(_this.context[_constants.MAP])
    }
    _this.state = (0, _defineProperty3.default)({}, _constants.MARKER, marker)
    return _this
  }

  ;(0, _createClass3.default)(Marker, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        return (0, _defineProperty3.default)(
          {},
          _constants.ANCHOR,
          this.context[_constants.ANCHOR] || this.state[_constants.MARKER]
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.MARKER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.MARKER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var marker = this.state[_constants.MARKER]
        if (marker) {
          var markerClusterer = this.context[_constants.MARKER_CLUSTERER]
          if (markerClusterer) {
            markerClusterer.removeMarker(marker, !!this.props.noRedraw)
          }
          marker.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },

      /**
       *
       * @type Animation
       * @public
       */
    },
    {
      key: "getAnimation",
      value: function getAnimation() {
        return this.state[_constants.MARKER].getAnimation()
      },

      /**
       *
       * @type boolean
       * @public
       */
    },
    {
      key: "getClickable",
      value: function getClickable() {
        return this.state[_constants.MARKER].getClickable()
      },

      /**
       *
       * @type string
       * @public
       */
    },
    {
      key: "getCursor",
      value: function getCursor() {
        return this.state[_constants.MARKER].getCursor()
      },

      /**
       *
       * @type boolean
       * @public
       */
    },
    {
      key: "getDraggable",
      value: function getDraggable() {
        return this.state[_constants.MARKER].getDraggable()
      },

      /**
       *
       * @type string|Icon|Symbol
       * @public
       */
    },
    {
      key: "getIcon",
      value: function getIcon() {
        return this.state[_constants.MARKER].getIcon()
      },

      /**
       *
       * @type MarkerLabel
       * @public
       */
    },
    {
      key: "getLabel",
      value: function getLabel() {
        return this.state[_constants.MARKER].getLabel()
      },

      /**
       *
       * @type number
       * @public
       */
    },
    {
      key: "getOpacity",
      value: function getOpacity() {
        return this.state[_constants.MARKER].getOpacity()
      },

      /**
       *
       * @type MarkerPlace
       * @public
       */
    },
    {
      key: "getPlace",
      value: function getPlace() {
        return this.state[_constants.MARKER].getPlace()
      },

      /**
       *
       * @type LatLng
       * @public
       */
    },
    {
      key: "getPosition",
      value: function getPosition() {
        return this.state[_constants.MARKER].getPosition()
      },

      /**
       *
       * @type MarkerShape
       * @public
       */
    },
    {
      key: "getShape",
      value: function getShape() {
        return this.state[_constants.MARKER].getShape()
      },

      /**
       *
       * @type string
       * @public
       */
    },
    {
      key: "getTitle",
      value: function getTitle() {
        return this.state[_constants.MARKER].getTitle()
      },

      /**
       *
       * @type boolean
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.state[_constants.MARKER].getVisible()
      },

      /**
       *
       * @type number
       * @public
       */
    },
    {
      key: "getZIndex",
      value: function getZIndex() {
        return this.state[_constants.MARKER].getZIndex()
      },
    },
  ])
  return Marker
})(_react2.default.PureComponent))

Marker.propTypes = {
  /**
   * For the 2nd argument of `MarkerCluster#addMarker`
   * @see https://github.com/mikesaidani/marker-clusterer-plus
   */
  noRedraw: _propTypes2.default.bool,

  /**
   * @type Animation
   */
  defaultAnimation: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultClickable: _propTypes2.default.bool,

  /**
   * @type string
   */
  defaultCursor: _propTypes2.default.string,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes2.default.bool,

  /**
   * @type string|Icon|Symbol
   */
  defaultIcon: _propTypes2.default.any,

  /**
   * @type string|MarkerLabel
   */
  defaultLabel: _propTypes2.default.any,

  /**
   * @type number
   */
  defaultOpacity: _propTypes2.default.number,

  /**
   * @type MarkerOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type MarkerPlace
   */
  defaultPlace: _propTypes2.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes2.default.any,

  /**
   * @type MarkerShape
   */
  defaultShape: _propTypes2.default.any,

  /**
   * @type string
   */
  defaultTitle: _propTypes2.default.string,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type number
   */
  defaultZIndex: _propTypes2.default.number,

  /**
   * @type Animation
   */
  animation: _propTypes2.default.any,

  /**
   * @type boolean
   */
  clickable: _propTypes2.default.bool,

  /**
   * @type string
   */
  cursor: _propTypes2.default.string,

  /**
   * @type boolean
   */
  draggable: _propTypes2.default.bool,

  /**
   * @type string|Icon|Symbol
   */
  icon: _propTypes2.default.any,

  /**
   * @type string|MarkerLabel
   */
  label: _propTypes2.default.any,

  /**
   * @type number
   */
  opacity: _propTypes2.default.number,

  /**
   * @type MarkerOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type MarkerPlace
   */
  place: _propTypes2.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes2.default.any,

  /**
   * @type MarkerShape
   */
  shape: _propTypes2.default.any,

  /**
   * @type string
   */
  title: _propTypes2.default.string,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * @type number
   */
  zIndex: _propTypes2.default.number,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onAnimationChanged: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onClickableChanged: _propTypes2.default.func,

  /**
   * function
   */
  onCursorChanged: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,

  /**
   * function
   */
  onDraggableChanged: _propTypes2.default.func,

  /**
   * function
   */
  onFlatChanged: _propTypes2.default.func,

  /**
   * function
   */
  onIconChanged: _propTypes2.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes2.default.func,

  /**
   * function
   */
  onShapeChanged: _propTypes2.default.func,

  /**
   * function
   */
  onTitleChanged: _propTypes2.default.func,

  /**
   * function
   */
  onVisibleChanged: _propTypes2.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes2.default.func,
}
Marker.contextTypes = ((_Marker$contextTypes = {}),
(0, _defineProperty3.default)(
  _Marker$contextTypes,
  _constants.MAP,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _Marker$contextTypes,
  _constants.MARKER_CLUSTERER,
  _propTypes2.default.object
),
_Marker$contextTypes)
Marker.childContextTypes = (0, _defineProperty3.default)(
  {},
  _constants.ANCHOR,
  _propTypes2.default.object
)
exports.default = Marker

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDrag: "drag",
  onDraggableChanged: "draggable_changed",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onPositionChanged: "position_changed",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed",
}

var updaterMap = {
  animation: function animation(instance, _animation) {
    instance.setAnimation(_animation)
  },
  clickable: function clickable(instance, _clickable) {
    instance.setClickable(_clickable)
  },
  cursor: function cursor(instance, _cursor) {
    instance.setCursor(_cursor)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  icon: function icon(instance, _icon) {
    instance.setIcon(_icon)
  },
  label: function label(instance, _label) {
    instance.setLabel(_label)
  },
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  place: function place(instance, _place) {
    instance.setPlace(_place)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  shape: function shape(instance, _shape) {
    instance.setShape(_shape)
  },
  title: function title(instance, _title) {
    instance.setTitle(_title)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex)
  },
}


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Polyline = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Polyline`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Polyline = (exports.Polyline = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Polyline, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polyline
   */
  function Polyline(props, context) {
    ;(0, _classCallCheck3.default)(this, Polyline)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Polyline.__proto__ || (0, _getPrototypeOf2.default)(Polyline)).call(
        this,
        props,
        context
      )
    )

    var polyline = new google.maps.Polyline()
    ;(0, _MapChildHelper.construct)(
      Polyline.propTypes,
      updaterMap,
      _this.props,
      polyline
    )
    polyline.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.POLYLINE,
      polyline
    )
    return _this
  }

  ;(0, _createClass3.default)(Polyline, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.POLYLINE],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.POLYLINE],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var polyline = this.state[_constants.POLYLINE]
        if (polyline) {
          polyline.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Returns whether this shape can be dragged by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getDraggable",
      value: function getDraggable() {
        return this.state[_constants.POLYLINE].getDraggable()
      },

      /**
       * Returns whether this shape can be edited by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getEditable",
      value: function getEditable() {
        return this.state[_constants.POLYLINE].getEditable()
      },

      /**
       * Retrieves the path.
       * @type MVCArray<LatLng>
       * @public
       */
    },
    {
      key: "getPath",
      value: function getPath() {
        return this.state[_constants.POLYLINE].getPath()
      },

      /**
       * Returns whether this poly is visible on the map.
       * @type boolean
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.state[_constants.POLYLINE].getVisible()
      },
    },
  ])
  return Polyline
})(_react2.default.PureComponent))

Polyline.propTypes = {
  /**
   * @type boolean
   */
  defaultDraggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes2.default.bool,

  /**
   * @type PolylineOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  draggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes2.default.bool,

  /**
   * @type PolylineOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: _propTypes2.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,
}
Polyline.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Polyline

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onClick: "click",
  onDrag: "drag",
}

var updaterMap = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  path: function path(instance, _path) {
    instance.setPath(_path)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Polygon = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Polygon`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Polygon = (exports.Polygon = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Polygon, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Polygon
   */
  function Polygon(props, context) {
    ;(0, _classCallCheck3.default)(this, Polygon)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Polygon.__proto__ || (0, _getPrototypeOf2.default)(Polygon)).call(
        this,
        props,
        context
      )
    )

    var polygon = new google.maps.Polygon()
    ;(0, _MapChildHelper.construct)(
      Polygon.propTypes,
      updaterMap,
      _this.props,
      polygon
    )
    polygon.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)({}, _constants.POLYGON, polygon)
    return _this
  }

  ;(0, _createClass3.default)(Polygon, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.POLYGON],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.POLYGON],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var polygon = this.state[_constants.POLYGON]
        if (polygon) {
          polygon.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Returns whether this shape can be dragged by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getDraggable",
      value: function getDraggable() {
        return this.state[_constants.POLYGON].getDraggable()
      },

      /**
       * Returns whether this shape can be edited by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getEditable",
      value: function getEditable() {
        return this.state[_constants.POLYGON].getEditable()
      },

      /**
       * Retrieves the first path.
       * @type MVCArray<LatLng>
       * @public
       */
    },
    {
      key: "getPath",
      value: function getPath() {
        return this.state[_constants.POLYGON].getPath()
      },

      /**
       * Retrieves the paths for this polygon.
       * @type MVCArray<MVCArray<LatLng>>
       * @public
       */
    },
    {
      key: "getPaths",
      value: function getPaths() {
        return this.state[_constants.POLYGON].getPaths()
      },

      /**
       * Returns whether this poly is visible on the map.
       * @type boolean
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.state[_constants.POLYGON].getVisible()
      },
    },
  ])
  return Polygon
})(_react2.default.PureComponent))

Polygon.propTypes = {
  /**
   * @type boolean
   */
  defaultDraggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes2.default.bool,

  /**
   * @type PolygonOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  defaultPath: _propTypes2.default.any,

  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  defaultPaths: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  draggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes2.default.bool,

  /**
   * @type PolygonOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type MVCArray<LatLng>|Array<LatLng|LatLngLiteral>
   */
  path: _propTypes2.default.any,

  /**
   * @type MVCArray<MVCArray<LatLng>>|MVCArray<LatLng>|Array<Array<LatLng|LatLngLiteral>>|Array<LatLng|LatLngLiteral>
   */
  paths: _propTypes2.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,
}
Polygon.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Polygon

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onClick: "click",
  onDrag: "drag",
}

var updaterMap = {
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  path: function path(instance, _path) {
    instance.setPath(_path)
  },
  paths: function paths(instance, _paths) {
    instance.setPaths(_paths)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.Rectangle = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.Rectangle`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var Rectangle = (exports.Rectangle = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(Rectangle, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#Rectangle
   */
  function Rectangle(props, context) {
    ;(0, _classCallCheck3.default)(this, Rectangle)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (Rectangle.__proto__ || (0, _getPrototypeOf2.default)(Rectangle)).call(
        this,
        props,
        context
      )
    )

    var rectangle = new google.maps.Rectangle()
    ;(0, _MapChildHelper.construct)(
      Rectangle.propTypes,
      updaterMap,
      _this.props,
      rectangle
    )
    rectangle.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.RECTANGLE,
      rectangle
    )
    return _this
  }

  ;(0, _createClass3.default)(Rectangle, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.RECTANGLE],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.RECTANGLE],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var rectangle = this.state[_constants.RECTANGLE]
        if (rectangle) {
          rectangle.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Returns the bounds of this rectangle.
       * @type LatLngBounds
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.RECTANGLE].getBounds()
      },

      /**
       * Returns whether this rectangle can be dragged by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getDraggable",
      value: function getDraggable() {
        return this.state[_constants.RECTANGLE].getDraggable()
      },

      /**
       * Returns whether this rectangle can be edited by the user.
       * @type boolean
       * @public
       */
    },
    {
      key: "getEditable",
      value: function getEditable() {
        return this.state[_constants.RECTANGLE].getEditable()
      },

      /**
       * Returns whether this rectangle is visible on the map.
       * @type boolean
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.state[_constants.RECTANGLE].getVisible()
      },
    },
  ])
  return Rectangle
})(_react2.default.PureComponent))

Rectangle.propTypes = {
  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  defaultBounds: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultDraggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  defaultEditable: _propTypes2.default.bool,

  /**
   * @type RectangleOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type LatLngBounds|LatLngBoundsLiteral
   */
  bounds: _propTypes2.default.any,

  /**
   * @type boolean
   */
  draggable: _propTypes2.default.bool,

  /**
   * @type boolean
   */
  editable: _propTypes2.default.bool,

  /**
   * @type RectangleOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onDragEnd: _propTypes2.default.func,

  /**
   * function
   */
  onDragStart: _propTypes2.default.func,

  /**
   * function
   */
  onMouseDown: _propTypes2.default.func,

  /**
   * function
   */
  onMouseMove: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOut: _propTypes2.default.func,

  /**
   * function
   */
  onMouseOver: _propTypes2.default.func,

  /**
   * function
   */
  onMouseUp: _propTypes2.default.func,

  /**
   * function
   */
  onRightClick: _propTypes2.default.func,

  /**
   * function
   */
  onBoundsChanged: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onDrag: _propTypes2.default.func,
}
Rectangle.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = Rectangle

var eventMap = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDrag: "drag",
}

var updaterMap = {
  bounds: function bounds(instance, _bounds) {
    instance.setBounds(_bounds)
  },
  draggable: function draggable(instance, _draggable) {
    instance.setDraggable(_draggable)
  },
  editable: function editable(instance, _editable) {
    instance.setEditable(_editable)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
}


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.InfoWindow = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _InfoWindow$contextTy /*
                            * -----------------------------------------------------------------------------
                            * This file is auto-generated from the corresponding file at `src/macros/`.
                            * Please **DO NOT** edit this file directly when creating PRs.
                            * -----------------------------------------------------------------------------
                            */
/* global google */

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _canUseDom = __webpack_require__(160)

var _canUseDom2 = _interopRequireDefault(_canUseDom)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _reactDom = __webpack_require__(53)

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.InfoWindow`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
 */
var InfoWindow = (exports.InfoWindow = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(InfoWindow, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#InfoWindow
   */
  function InfoWindow(props, context) {
    ;(0, _classCallCheck3.default)(this, InfoWindow)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (InfoWindow.__proto__ || (0, _getPrototypeOf2.default)(InfoWindow)).call(
        this,
        props,
        context
      )
    )

    var infoWindow = new google.maps.InfoWindow()
    ;(0, _MapChildHelper.construct)(
      InfoWindow.propTypes,
      updaterMap,
      _this.props,
      infoWindow
    )
    infoWindow.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.INFO_WINDOW,
      infoWindow
    )
    return _this
  }

  ;(0, _createClass3.default)(InfoWindow, [
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        if (!_canUseDom2.default || this.containerElement) {
          return
        }
        if (_react2.default.version.match(/^16/)) {
          this.containerElement = document.createElement("div")
        }
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.INFO_WINDOW],
          eventMap
        )
        if (_react2.default.version.match(/^16/)) {
          this.state[_constants.INFO_WINDOW].setContent(this.containerElement)
          open(
            this.state[_constants.INFO_WINDOW],
            this.context[_constants.ANCHOR]
          )
          return
        }
        var content = document.createElement("div")
        _reactDom2.default.unstable_renderSubtreeIntoContainer(
          this,
          _react2.default.Children.only(this.props.children),
          content
        )
        this.state[_constants.INFO_WINDOW].setContent(content)
        open(
          this.state[_constants.INFO_WINDOW],
          this.context[_constants.ANCHOR]
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.INFO_WINDOW],
          eventMap,
          updaterMap,
          prevProps
        )
        if (_react2.default.version.match(/^16/)) {
          return
        }
        if (this.props.children !== prevProps.children) {
          _reactDom2.default.unstable_renderSubtreeIntoContainer(
            this,
            _react2.default.Children.only(this.props.children),
            this.state[_constants.INFO_WINDOW].getContent()
          )
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var infoWindow = this.state[_constants.INFO_WINDOW]
        if (infoWindow) {
          if (
            !_react2.default.version.match(/^16/) &&
            infoWindow.getContent()
          ) {
            _reactDom2.default.unmountComponentAtNode(infoWindow.getContent())
          }
          infoWindow.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        if (_react2.default.version.match(/^16/)) {
          return _reactDom2.default.createPortal(
            _react2.default.Children.only(this.props.children),
            this.containerElement
          )
        }
        return false
      },

      /**
       *
       * @type LatLng
       * @public
       */
    },
    {
      key: "getPosition",
      value: function getPosition() {
        return this.state[_constants.INFO_WINDOW].getPosition()
      },

      /**
       *
       * @type number
       * @public
       */
    },
    {
      key: "getZIndex",
      value: function getZIndex() {
        return this.state[_constants.INFO_WINDOW].getZIndex()
      },
    },
  ])
  return InfoWindow
})(_react2.default.PureComponent))

InfoWindow.propTypes = {
  /**
   * @type InfoWindowOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes2.default.any,

  /**
   * @type number
   */
  defaultZIndex: _propTypes2.default.number,

  /**
   * @type InfoWindowOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes2.default.any,

  /**
   * @type number
   */
  zIndex: _propTypes2.default.number,

  /**
   * function
   */
  onCloseClick: _propTypes2.default.func,

  /**
   * function
   */
  onDomReady: _propTypes2.default.func,

  /**
   * function
   */
  onContentChanged: _propTypes2.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes2.default.func,

  /**
   * function
   */
  onZindexChanged: _propTypes2.default.func,
}
InfoWindow.contextTypes = ((_InfoWindow$contextTy = {}),
(0, _defineProperty3.default)(
  _InfoWindow$contextTy,
  _constants.MAP,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _InfoWindow$contextTy,
  _constants.ANCHOR,
  _propTypes2.default.object
),
_InfoWindow$contextTy)
exports.default = InfoWindow

var open = function open(infoWindow, anchor) {
  if (anchor) {
    infoWindow.open(infoWindow.getMap(), anchor)
  } else if (infoWindow.getPosition()) {
    infoWindow.open(infoWindow.getMap())
  } else {
    ;(0, _invariant2.default)(
      false,
      "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."
    )
  }
}

var eventMap = {
  onCloseClick: "closeclick",
  onDomReady: "domready",
  onContentChanged: "content_changed",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed",
}

var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex)
  },
}


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.OverlayView = undefined

var _extends2 = __webpack_require__(356)

var _extends3 = _interopRequireDefault(_extends2)

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _delay2 = __webpack_require__(357)

var _delay3 = _interopRequireDefault(_delay2)

var _assign2 = __webpack_require__(359)

var _assign3 = _interopRequireDefault(_assign2)

var _bind2 = __webpack_require__(70)

var _bind3 = _interopRequireDefault(_bind2)

var _OverlayView$contextT /*
                            * -----------------------------------------------------------------------------
                            * This file is auto-generated from the corresponding file at `src/macros/`.
                            * Please **DO NOT** edit this file directly when creating PRs.
                            * -----------------------------------------------------------------------------
                            */
/* global google */

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _reactDom = __webpack_require__(53)

var _reactDom2 = _interopRequireDefault(_reactDom)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _OverlayViewHelper = __webpack_require__(363)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.OverlayView`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
 */
var OverlayView = (exports.OverlayView = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(OverlayView, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  function OverlayView(props, context) {
    ;(0, _classCallCheck3.default)(this, OverlayView)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        OverlayView.__proto__ || (0, _getPrototypeOf2.default)(OverlayView)
      ).call(this, props, context)
    )

    var overlayView = new google.maps.OverlayView()
    // You must implement three methods: onAdd(), draw(), and onRemove().
    overlayView.onAdd = (0, _bind3.default)(_this.onAdd, _this)
    overlayView.draw = (0, _bind3.default)(_this.draw, _this)
    overlayView.onRemove = (0, _bind3.default)(_this.onRemove, _this)
    _this.onPositionElement = (0, _bind3.default)(
      _this.onPositionElement,
      _this
    )
    // You must call setMap() with a valid Map object to trigger the call to
    // the onAdd() method and setMap(null) in order to trigger the onRemove() method.
    overlayView.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.OVERLAY_VIEW,
      overlayView
    )
    return _this
  }

  ;(0, _createClass3.default)(OverlayView, [
    {
      key: "onAdd",
      value: function onAdd() {
        this.containerElement = document.createElement("div")
        this.containerElement.style.position = "absolute"
      },
    },
    {
      key: "draw",
      value: function draw() {
        var mapPaneName = this.props.mapPaneName

        ;(0, _invariant2.default)(
          !!mapPaneName,
          "OverlayView requires either props.mapPaneName or props.defaultMapPaneName but got %s",
          mapPaneName
        )
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapPanes
        var mapPanes = this.state[_constants.OVERLAY_VIEW].getPanes()
        mapPanes[mapPaneName].appendChild(this.containerElement)

        _reactDom2.default.unstable_renderSubtreeIntoContainer(
          this,
          _react2.default.Children.only(this.props.children),
          this.containerElement,
          this.onPositionElement
        )
      },
    },
    {
      key: "onPositionElement",
      value: function onPositionElement() {
        // https://developers.google.com/maps/documentation/javascript/3.exp/reference#MapCanvasProjection
        var mapCanvasProjection = this.state[
          _constants.OVERLAY_VIEW
        ].getProjection()

        var offset = (0, _extends3.default)(
          {
            x: 0,
            y: 0,
          },
          (0, _OverlayViewHelper.getOffsetOverride)(
            this.containerElement,
            this.props
          )
        )
        var layoutStyles = (0, _OverlayViewHelper.getLayoutStyles)(
          mapCanvasProjection,
          offset,
          this.props
        )
        ;(0, _assign3.default)(this.containerElement.style, layoutStyles)
      },
    },
    {
      key: "onRemove",
      value: function onRemove() {
        this.containerElement.parentNode.removeChild(this.containerElement)
        _reactDom2.default.unmountComponentAtNode(this.containerElement)
        this.containerElement = null
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.OVERLAY_VIEW],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.OVERLAY_VIEW],
          eventMap,
          updaterMap,
          prevProps
        )
        ;(0, _delay3.default)(this.state[_constants.OVERLAY_VIEW].draw)
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var overlayView = this.state[_constants.OVERLAY_VIEW]
        if (overlayView) {
          overlayView.setMap(null)
          // You must implement three methods: onAdd(), draw(), and onRemove().
          overlayView.onAdd = null
          overlayView.draw = null
          overlayView.onRemove = null
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Returns the panes in which this OverlayView can be rendered. The panes are not initialized until `onAdd` is called by the API.
       * @type MapPanesonAdd
       * @public
       */
    },
    {
      key: "getPanes",
      value: function getPanes() {
        return this.state[_constants.OVERLAY_VIEW].getPanes()
      },

      /**
       * Returns the `MapCanvasProjection` object associated with this `OverlayView`. The projection is not initialized until `onAdd` is called by the API.
       * @type MapCanvasProjectionMapCanvasProjectionOverlayViewonAdd
       * @public
       */
    },
    {
      key: "getProjection",
      value: function getProjection() {
        return this.state[_constants.OVERLAY_VIEW].getProjection()
      },
    },
  ])
  return OverlayView
})(_react2.default.PureComponent))

OverlayView.FLOAT_PANE = "floatPane"
OverlayView.MAP_PANE = "mapPane"
OverlayView.MARKER_LAYER = "markerLayer"
OverlayView.OVERLAY_LAYER = "overlayLayer"
OverlayView.OVERLAY_MOUSE_TARGET = "overlayMouseTarget"
OverlayView.propTypes = {
  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  mapPaneName: _propTypes2.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  position: _propTypes2.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  bounds: _propTypes2.default.object,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  children: _propTypes2.default.node.isRequired,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#OverlayView
   */
  getPixelPositionOffset: _propTypes2.default.func,
}
OverlayView.contextTypes = ((_OverlayView$contextT = {}),
(0, _defineProperty3.default)(
  _OverlayView$contextT,
  _constants.MAP,
  _propTypes2.default.object
),
(0, _defineProperty3.default)(
  _OverlayView$contextT,
  _constants.ANCHOR,
  _propTypes2.default.object
),
_OverlayView$contextT)
exports.default = OverlayView

var eventMap = {}

var updaterMap = {}


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(139);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var baseDelay = __webpack_require__(358),
    baseRest = __webpack_require__(127),
    toNumber = __webpack_require__(159);

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

module.exports = delay;


/***/ }),
/* 358 */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(179),
    copyObject = __webpack_require__(360),
    createAssigner = __webpack_require__(361),
    isArrayLike = __webpack_require__(78),
    isPrototype = __webpack_require__(168),
    keys = __webpack_require__(77);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(179),
    baseAssignValue = __webpack_require__(180);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(127),
    isIterateeCall = __webpack_require__(362);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(81),
    isArrayLike = __webpack_require__(78),
    isIndex = __webpack_require__(74),
    isObject = __webpack_require__(44);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})

var _isFunction2 = __webpack_require__(71)

var _isFunction3 = _interopRequireDefault(_isFunction2)

exports.getOffsetOverride = getOffsetOverride
exports.getLayoutStyles = getLayoutStyles

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/* global google */
function getOffsetOverride(containerElement, props) {
  var getPixelPositionOffset = props.getPixelPositionOffset
  //
  // Allows the component to control the visual position of the OverlayView
  // relative to the LatLng pixel position.
  //

  if ((0, _isFunction3.default)(getPixelPositionOffset)) {
    return getPixelPositionOffset(
      containerElement.offsetWidth,
      containerElement.offsetHeight
    )
  } else {
    return {}
  }
}

function createLatLng(inst, Type) {
  return new Type(inst.lat, inst.lng)
}

function createLatLngBounds(inst, Type) {
  return new Type(
    new google.maps.LatLng(inst.ne.lat, inst.ne.lng),
    new google.maps.LatLng(inst.sw.lat, inst.sw.lng)
  )
}

function ensureOfType(inst, type, factory) {
  if (inst instanceof type) {
    return inst
  } else {
    return factory(inst, type)
  }
}

function getLayoutStylesByBounds(mapCanvasProjection, offset, bounds) {
  var ne = mapCanvasProjection.fromLatLngToDivPixel(bounds.getNorthEast())
  var sw = mapCanvasProjection.fromLatLngToDivPixel(bounds.getSouthWest())
  if (ne && sw) {
    return {
      left: sw.x + offset.x + "px",
      top: ne.y + offset.y + "px",
      width: ne.x - sw.x - offset.x + "px",
      height: sw.y - ne.y - offset.y + "px",
    }
  }
  return {
    left: "-9999px",
    top: "-9999px",
  }
}

function getLayoutStylesByPosition(mapCanvasProjection, offset, position) {
  var point = mapCanvasProjection.fromLatLngToDivPixel(position)
  if (point) {
    var x = point.x,
      y = point.y

    return {
      left: x + offset.x + "px",
      top: y + offset.y + "px",
    }
  }
  return {
    left: "-9999px",
    top: "-9999px",
  }
}

function getLayoutStyles(mapCanvasProjection, offset, props) {
  if (props.bounds) {
    var bounds = ensureOfType(
      props.bounds,
      google.maps.LatLngBounds,
      createLatLngBounds
    )
    return getLayoutStylesByBounds(mapCanvasProjection, offset, bounds)
  } else {
    var position = ensureOfType(
      props.position,
      google.maps.LatLng,
      createLatLng
    )
    return getLayoutStylesByPosition(mapCanvasProjection, offset, position)
  }
}


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.GroundOverlay = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _warning = __webpack_require__(162)

var _warning2 = _interopRequireDefault(_warning)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.GroundOverlay`
 *
 * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
 */
var GroundOverlay = (exports.GroundOverlay = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(GroundOverlay, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#GroundOverlay
   */
  function GroundOverlay(props, context) {
    ;(0, _classCallCheck3.default)(this, GroundOverlay)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        GroundOverlay.__proto__ || (0, _getPrototypeOf2.default)(GroundOverlay)
      ).call(this, props, context)
    )

    ;(0, _warning2.default)(
      !props.url || !props.bounds,
      "\nFor GroundOveray, url and bounds are passed in to constructor and are immutable\n after iinstantiated. This is the behavior of Google Maps JavaScript API v3 (\n See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay)\n Hence, use the corresponding two props provided by `react-google-maps`.\n They're prefixed with _default_ (defaultUrl, defaultBounds).\n\n In some cases, you'll need the GroundOverlay component to reflect the changes\n of url and bounds. You can leverage the React's key property to remount the\n component. Typically, just `key={url}` would serve your need.\n See https://github.com/tomchentw/react-google-maps/issues/655\n"
    )
    var groundOverlay = new google.maps.GroundOverlay(
      props.defaultUrl || props.url,
      props.defaultBounds || props.bounds
    )
    ;(0, _MapChildHelper.construct)(
      GroundOverlay.propTypes,
      updaterMap,
      _this.props,
      groundOverlay
    )
    groundOverlay.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.GROUND_LAYER,
      groundOverlay
    )
    return _this
  }

  ;(0, _createClass3.default)(GroundOverlay, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.GROUND_LAYER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.GROUND_LAYER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var GroundOverlay = this.state[_constants.GROUND_LAYER]
        if (GroundOverlay) {
          GroundOverlay.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Gets the `LatLngBounds` of this overlay.
       * @type LatLngBoundsLatLngBounds
       * @public
       */
    },
    {
      key: "getBounds",
      value: function getBounds() {
        return this.state[_constants.GROUND_LAYER].getBounds()
      },

      /**
       * Returns the opacity of this ground overlay.
       * @type number
       * @public
       */
    },
    {
      key: "getOpacity",
      value: function getOpacity() {
        return this.state[_constants.GROUND_LAYER].getOpacity()
      },

      /**
       * Gets the url of the projected image.
       * @type string
       * @public
       */
    },
    {
      key: "getUrl",
      value: function getUrl() {
        return this.state[_constants.GROUND_LAYER].getUrl()
      },
    },
  ])
  return GroundOverlay
})(
  _react2.default.PureComponent
)) /*
                                   * -----------------------------------------------------------------------------
                                   * This file is auto-generated from the corresponding file at `src/macros/`.
                                   * Please **DO NOT** edit this file directly when creating PRs.
                                   * -----------------------------------------------------------------------------
                                   */
/* global google */

GroundOverlay.propTypes = {
  /**
   * @type string
   */
  defaultUrl: _propTypes2.default.string /* v10.0.0 .isRequired */ /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   */,

  defaultBounds: _propTypes2.default.object /* v10.0.0 .isRequired */ /**
   * @type string
   * @deprecated use `defaultUrl` instead. It will be removed in v10.0.0
   */,

  url: _propTypes2.default.string,

  /**
   * @see https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
   * @deprecated use `defaultBounds` instead. It will be removed in v10.0.0
   */
  bounds: _propTypes2.default.object,

  /**
   * @type number
   */
  defaultOpacity: _propTypes2.default.number,

  /**
   * @type number
   */
  opacity: _propTypes2.default.number,

  /**
   * function
   */
  onDblClick: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,
}
GroundOverlay.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = GroundOverlay

var eventMap = {
  onDblClick: "dblclick",
  onClick: "click",
}

var updaterMap = {
  opacity: function opacity(instance, _opacity) {
    instance.setOpacity(_opacity)
  },
}


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.DirectionsRenderer = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.DirectionsRenderer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var DirectionsRenderer = (exports.DirectionsRenderer = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(DirectionsRenderer, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#DirectionsRenderer
   */
  function DirectionsRenderer(props, context) {
    ;(0, _classCallCheck3.default)(this, DirectionsRenderer)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        DirectionsRenderer.__proto__ ||
        (0, _getPrototypeOf2.default)(DirectionsRenderer)
      ).call(this, props, context)
    )

    var directionsRenderer = new google.maps.DirectionsRenderer()
    ;(0, _MapChildHelper.construct)(
      DirectionsRenderer.propTypes,
      updaterMap,
      _this.props,
      directionsRenderer
    )
    directionsRenderer.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.DIRECTIONS_RENDERER,
      directionsRenderer
    )
    return _this
  }

  ;(0, _createClass3.default)(DirectionsRenderer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.DIRECTIONS_RENDERER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.DIRECTIONS_RENDERER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var directionsRenderer = this.state[_constants.DIRECTIONS_RENDERER]
        if (directionsRenderer) {
          directionsRenderer.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Returns the renderer's current set of directions.
       * @type DirectionsResult
       * @public
       */
    },
    {
      key: "getDirections",
      value: function getDirections() {
        return this.state[_constants.DIRECTIONS_RENDERER].getDirections()
      },

      /**
       * Returns the panel `<div>` in which the `DirectionsResult` is rendered.
       * @type Node<div>DirectionsResult
       * @public
       */
    },
    {
      key: "getPanel",
      value: function getPanel() {
        return this.state[_constants.DIRECTIONS_RENDERER].getPanel()
      },

      /**
       * Returns the current (zero-based) route index in use by this `DirectionsRenderer` object.
       * @type numberDirectionsRenderer
       * @public
       */
    },
    {
      key: "getRouteIndex",
      value: function getRouteIndex() {
        return this.state[_constants.DIRECTIONS_RENDERER].getRouteIndex()
      },
    },
  ])
  return DirectionsRenderer
})(_react2.default.PureComponent))

DirectionsRenderer.propTypes = {
  /**
   * @type DirectionsResult
   */
  defaultDirections: _propTypes2.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type Node
   */
  defaultPanel: _propTypes2.default.any,

  /**
   * @type number
   */
  defaultRouteIndex: _propTypes2.default.number,

  /**
   * @type DirectionsResult
   */
  directions: _propTypes2.default.any,

  /**
   * @type DirectionsRendererOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type Node
   */
  panel: _propTypes2.default.any,

  /**
   * @type number
   */
  routeIndex: _propTypes2.default.number,

  /**
   * function
   */
  onDirectionsChanged: _propTypes2.default.func,
}
DirectionsRenderer.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = DirectionsRenderer

var eventMap = {
  onDirectionsChanged: "directions_changed",
}

var updaterMap = {
  directions: function directions(instance, _directions) {
    instance.setDirections(_directions)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  panel: function panel(instance, _panel) {
    instance.setPanel(_panel)
  },
  routeIndex: function routeIndex(instance, _routeIndex) {
    instance.setRouteIndex(_routeIndex)
  },
}


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.FusionTablesLayer = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.FusionTablesLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var FusionTablesLayer = (exports.FusionTablesLayer = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(FusionTablesLayer, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#FusionTablesLayer
   */
  function FusionTablesLayer(props, context) {
    ;(0, _classCallCheck3.default)(this, FusionTablesLayer)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        FusionTablesLayer.__proto__ ||
        (0, _getPrototypeOf2.default)(FusionTablesLayer)
      ).call(this, props, context)
    )

    var fusionTablesLayer = new google.maps.FusionTablesLayer()
    ;(0, _MapChildHelper.construct)(
      FusionTablesLayer.propTypes,
      updaterMap,
      _this.props,
      fusionTablesLayer
    )
    fusionTablesLayer.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.FUSION_TABLES_LAYER,
      fusionTablesLayer
    )
    return _this
  }

  ;(0, _createClass3.default)(FusionTablesLayer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.FUSION_TABLES_LAYER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.FUSION_TABLES_LAYER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var fusionTablesLayer = this.state[_constants.FUSION_TABLES_LAYER]
        if (fusionTablesLayer) {
          fusionTablesLayer.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },
    },
  ])
  return FusionTablesLayer
})(_react2.default.PureComponent))

FusionTablesLayer.propTypes = {
  /**
   * @type FusionTablesLayerOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type FusionTablesLayerOptions
   */
  options: _propTypes2.default.any,

  /**
   * function
   */
  onClick: _propTypes2.default.func,
}
FusionTablesLayer.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = FusionTablesLayer

var eventMap = {
  onClick: "click",
}

var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
}


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.KmlLayer = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.KmlLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var KmlLayer = (exports.KmlLayer = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(KmlLayer, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#KmlLayer
   */
  function KmlLayer(props, context) {
    ;(0, _classCallCheck3.default)(this, KmlLayer)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (KmlLayer.__proto__ || (0, _getPrototypeOf2.default)(KmlLayer)).call(
        this,
        props,
        context
      )
    )

    var kmlLayer = new google.maps.KmlLayer()
    ;(0, _MapChildHelper.construct)(
      KmlLayer.propTypes,
      updaterMap,
      _this.props,
      kmlLayer
    )
    kmlLayer.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.KML_LAYER,
      kmlLayer
    )
    return _this
  }

  ;(0, _createClass3.default)(KmlLayer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.KML_LAYER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.KML_LAYER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var kmlLayer = this.state[_constants.KML_LAYER]
        if (kmlLayer) {
          kmlLayer.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },

      /**
       * Get the default viewport for the layer being displayed.
       * @type LatLngBounds
       * @public
       */
    },
    {
      key: "getDefaultViewport",
      value: function getDefaultViewport() {
        return this.state[_constants.KML_LAYER].getDefaultViewport()
      },

      /**
       * Get the metadata associated with this layer, as specified in the layer markup.
       * @type KmlLayerMetadata
       * @public
       */
    },
    {
      key: "getMetadata",
      value: function getMetadata() {
        return this.state[_constants.KML_LAYER].getMetadata()
      },

      /**
       * Get the status of the layer, set once the requested document has loaded.
       * @type KmlLayerStatus
       * @public
       */
    },
    {
      key: "getStatus",
      value: function getStatus() {
        return this.state[_constants.KML_LAYER].getStatus()
      },

      /**
       * Gets the URL of the KML file being displayed.
       * @type string
       * @public
       */
    },
    {
      key: "getUrl",
      value: function getUrl() {
        return this.state[_constants.KML_LAYER].getUrl()
      },

      /**
       * Gets the z-index of the KML Layer.
       * @type number
       * @public
       */
    },
    {
      key: "getZIndex",
      value: function getZIndex() {
        return this.state[_constants.KML_LAYER].getZIndex()
      },
    },
  ])
  return KmlLayer
})(_react2.default.PureComponent))

KmlLayer.propTypes = {
  /**
   * @type KmlLayerOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type string
   */
  defaultUrl: _propTypes2.default.string,

  /**
   * @type number
   */
  defaultZIndex: _propTypes2.default.number,

  /**
   * @type KmlLayerOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type string
   */
  url: _propTypes2.default.string,

  /**
   * @type number
   */
  zIndex: _propTypes2.default.number,

  /**
   * function
   */
  onDefaultViewportChanged: _propTypes2.default.func,

  /**
   * function
   */
  onClick: _propTypes2.default.func,

  /**
   * function
   */
  onStatusChanged: _propTypes2.default.func,
}
KmlLayer.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = KmlLayer

var eventMap = {
  onDefaultViewportChanged: "defaultviewport_changed",
  onClick: "click",
  onStatusChanged: "status_changed",
}

var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  url: function url(instance, _url) {
    instance.setUrl(_url)
  },
  zIndex: function zIndex(instance, _zIndex) {
    instance.setZIndex(_zIndex)
  },
}


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.TrafficLayer = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.TrafficLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var TrafficLayer = (exports.TrafficLayer = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(TrafficLayer, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#TrafficLayer
   */
  function TrafficLayer(props, context) {
    ;(0, _classCallCheck3.default)(this, TrafficLayer)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        TrafficLayer.__proto__ || (0, _getPrototypeOf2.default)(TrafficLayer)
      ).call(this, props, context)
    )

    var trafficLayer = new google.maps.TrafficLayer()
    ;(0, _MapChildHelper.construct)(
      TrafficLayer.propTypes,
      updaterMap,
      _this.props,
      trafficLayer
    )
    trafficLayer.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.TRAFFIC_LAYER,
      trafficLayer
    )
    return _this
  }

  ;(0, _createClass3.default)(TrafficLayer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.TRAFFIC_LAYER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.TRAFFIC_LAYER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var trafficLayer = this.state[_constants.TRAFFIC_LAYER]
        if (trafficLayer) {
          trafficLayer.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },
    },
  ])
  return TrafficLayer
})(_react2.default.PureComponent))

TrafficLayer.propTypes = {
  /**
   * @type TrafficLayerOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type TrafficLayerOptions
   */
  options: _propTypes2.default.any,
}
TrafficLayer.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = TrafficLayer

var eventMap = {}

var updaterMap = {
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
}


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.StreetViewPanorama = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _invariant = __webpack_require__(52)

var _invariant2 = _interopRequireDefault(_invariant)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.StreetViewPanorama`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#StreetViewPanorama
 */
var StreetViewPanorama = (exports.StreetViewPanorama = (function(
  _React$PureComponent
) {
  ;(0, _inherits3.default)(StreetViewPanorama, _React$PureComponent)

  function StreetViewPanorama(props, context) {
    ;(0, _classCallCheck3.default)(this, StreetViewPanorama)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        StreetViewPanorama.__proto__ ||
        (0, _getPrototypeOf2.default)(StreetViewPanorama)
      ).call(this, props, context)
    )

    ;(0, _invariant2.default)(
      !!_this.context[_constants.MAP],
      "Did you render <StreetViewPanorama> as a child of <GoogleMap> with withGoogleMap() HOC?"
    )
    ;(0, _MapChildHelper.construct)(
      StreetViewPanorama.propTypes,
      updaterMap,
      _this.props,
      _this.context[_constants.MAP].getStreetView()
    )
    return _this
  }

  ;(0, _createClass3.default)(StreetViewPanorama, [
    {
      key: "getChildContext",
      value: function getChildContext() {
        return (0, _defineProperty3.default)(
          {},
          _constants.MAP,
          this.context[_constants.MAP].getStreetView()
        )
      },
    },
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.context[_constants.MAP].getStreetView(),
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.context[_constants.MAP].getStreetView(),
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var streetViewPanorama = this.context[_constants.MAP].getStreetView()
        if (streetViewPanorama) {
          streetViewPanorama.setVisible(false)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        var children = this.props.children

        return _react2.default.createElement("div", null, children)
      },

      /**
       * Returns the set of navigation links for the Street View panorama.
       * @type Array<StreetViewLink>
       * @public
       */
    },
    {
      key: "getLinks",
      value: function getLinks() {
        return this.context[_constants.MAP].getLinks()
      },

      /**
       * Returns the StreetViewLocation of the current panorama.
       * @type StreetViewLocation
       * @public
       */
    },
    {
      key: "getLocation",
      value: function getLocation() {
        return this.context[_constants.MAP].getLocation()
      },

      /**
       * Returns the state of motion tracker. If true when the user physically moves the device and the browser supports it, the Street View Panorama tracks the physical movements.
       * @type boolean
       * @public
       */
    },
    {
      key: "getMotionTracking",
      value: function getMotionTracking() {
        return this.context[_constants.MAP].getMotionTracking()
      },

      /**
       * Returns the current panorama ID for the Street View panorama. This id is stable within the browser's current session only.
       * @type string
       * @public
       */
    },
    {
      key: "getPano",
      value: function getPano() {
        return this.context[_constants.MAP].getPano()
      },

      /**
       * Returns the heading and pitch of the photographer when this panorama was taken. For Street View panoramas on the road, this also reveals in which direction the car was travelling. This data is available after the `pano_changed` event.
       * @type StreetViewPovpano_changed
       * @public
       */
    },
    {
      key: "getPhotographerPov",
      value: function getPhotographerPov() {
        return this.context[_constants.MAP].getPhotographerPov()
      },

      /**
       * Returns the current `LatLng` position for the Street View panorama.
       * @type LatLngLatLng
       * @public
       */
    },
    {
      key: "getPosition",
      value: function getPosition() {
        return this.context[_constants.MAP].getPosition()
      },

      /**
       * Returns the current point of view for the Street View panorama.
       * @type StreetViewPov
       * @public
       */
    },
    {
      key: "getPov",
      value: function getPov() {
        return this.context[_constants.MAP].getPov()
      },

      /**
       * Returns the status of the panorama on completion of the `setPosition()` or `setPano()` request.
       * @type StreetViewStatussetPosition()setPano()
       * @public
       */
    },
    {
      key: "getStatus",
      value: function getStatus() {
        return this.context[_constants.MAP].getStatus()
      },

      /**
       * Returns `true` if the panorama is visible. It does not specify whether Street View imagery is available at the specified position.
       * @type booleantrue
       * @public
       */
    },
    {
      key: "getVisible",
      value: function getVisible() {
        return this.context[_constants.MAP].getVisible()
      },

      /**
       * Returns the zoom level of the panorama. Fully zoomed-out is level 0, where the field of view is 180 degrees. Zooming in increases the zoom level.
       * @type number
       * @public
       */
    },
    {
      key: "getZoom",
      value: function getZoom() {
        return this.context[_constants.MAP].getZoom()
      },
    },
  ])
  return StreetViewPanorama
})(
  _react2.default.PureComponent
)) /*
                                   * -----------------------------------------------------------------------------
                                   * This file is auto-generated from the corresponding file at `src/macros/`.
                                   * Please **DO NOT** edit this file directly when creating PRs.
                                   * -----------------------------------------------------------------------------
                                   */

StreetViewPanorama.propTypes = {
  /**
   * @type Array<StreetViewLink>
   */
  defaultLinks: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultMotionTracking: _propTypes2.default.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  defaultOptions: _propTypes2.default.any,

  /**
   * @type string
   */
  defaultPano: _propTypes2.default.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  defaultPosition: _propTypes2.default.any,

  /**
   * @type StreetViewPov
   */
  defaultPov: _propTypes2.default.any,

  /**
   * @type boolean
   */
  defaultVisible: _propTypes2.default.bool,

  /**
   * @type number
   */
  defaultZoom: _propTypes2.default.number,

  /**
   * @type Array<StreetViewLink>
   */
  links: _propTypes2.default.any,

  /**
   * @type boolean
   */
  motionTracking: _propTypes2.default.bool,

  /**
   * @type StreetViewPanoramaOptions
   */
  options: _propTypes2.default.any,

  /**
   * @type string
   */
  pano: _propTypes2.default.string,

  /**
   * @type LatLng|LatLngLiteral
   */
  position: _propTypes2.default.any,

  /**
   * @type StreetViewPov
   */
  pov: _propTypes2.default.any,

  /**
   * @type boolean
   */
  visible: _propTypes2.default.bool,

  /**
   * @type number
   */
  zoom: _propTypes2.default.number,

  /**
   * function
   */
  onCloseClick: _propTypes2.default.func,

  /**
   * function
   */
  onPanoChanged: _propTypes2.default.func,

  /**
   * function
   */
  onPositionChanged: _propTypes2.default.func,

  /**
   * function
   */
  onPovChanged: _propTypes2.default.func,

  /**
   * function
   */
  onResize: _propTypes2.default.func,

  /**
   * function
   */
  onStatusChanged: _propTypes2.default.func,

  /**
   * function
   */
  onVisibleChanged: _propTypes2.default.func,

  /**
   * function
   */
  onZoomChanged: _propTypes2.default.func,
}
StreetViewPanorama.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
StreetViewPanorama.childContextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = StreetViewPanorama

var eventMap = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed",
}

var updaterMap = {
  links: function links(instance, _links) {
    instance.setLinks(_links)
  },
  motionTracking: function motionTracking(instance, _motionTracking) {
    instance.setMotionTracking(_motionTracking)
  },
  options: function options(instance, _options) {
    instance.setOptions(_options)
  },
  pano: function pano(instance, _pano) {
    instance.setPano(_pano)
  },
  position: function position(instance, _position) {
    instance.setPosition(_position)
  },
  pov: function pov(instance, _pov) {
    instance.setPov(_pov)
  },
  visible: function visible(instance, _visible) {
    instance.setVisible(_visible)
  },
  zoom: function zoom(instance, _zoom) {
    instance.setZoom(_zoom)
  },
}


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true,
})
exports.BicyclingLayer = undefined

var _defineProperty2 = __webpack_require__(11)

var _defineProperty3 = _interopRequireDefault(_defineProperty2)

var _getPrototypeOf = __webpack_require__(3)

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf)

var _classCallCheck2 = __webpack_require__(4)

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2)

var _createClass2 = __webpack_require__(5)

var _createClass3 = _interopRequireDefault(_createClass2)

var _possibleConstructorReturn2 = __webpack_require__(6)

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
)

var _inherits2 = __webpack_require__(7)

var _inherits3 = _interopRequireDefault(_inherits2)

var _react = __webpack_require__(0)

var _react2 = _interopRequireDefault(_react)

var _propTypes = __webpack_require__(1)

var _propTypes2 = _interopRequireDefault(_propTypes)

var _MapChildHelper = __webpack_require__(16)

var _constants = __webpack_require__(12)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

/**
 * A wrapper around `google.maps.BicyclingLayer`
 *
 * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
 */
/*
 * -----------------------------------------------------------------------------
 * This file is auto-generated from the corresponding file at `src/macros/`.
 * Please **DO NOT** edit this file directly when creating PRs.
 * -----------------------------------------------------------------------------
 */
/* global google */
var BicyclingLayer = (exports.BicyclingLayer = (function(_React$PureComponent) {
  ;(0, _inherits3.default)(BicyclingLayer, _React$PureComponent)

  /*
   * @see https://developers.google.com/maps/documentation/javascript/3.exp/reference#BicyclingLayer
   */
  function BicyclingLayer(props, context) {
    ;(0, _classCallCheck3.default)(this, BicyclingLayer)

    var _this = (0, _possibleConstructorReturn3.default)(
      this,
      (
        BicyclingLayer.__proto__ ||
        (0, _getPrototypeOf2.default)(BicyclingLayer)
      ).call(this, props, context)
    )

    var bicyclingLayer = new google.maps.BicyclingLayer()
    ;(0, _MapChildHelper.construct)(
      BicyclingLayer.propTypes,
      updaterMap,
      _this.props,
      bicyclingLayer
    )
    bicyclingLayer.setMap(_this.context[_constants.MAP])
    _this.state = (0, _defineProperty3.default)(
      {},
      _constants.BICYCLING_LAYER,
      bicyclingLayer
    )
    return _this
  }

  ;(0, _createClass3.default)(BicyclingLayer, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        ;(0, _MapChildHelper.componentDidMount)(
          this,
          this.state[_constants.BICYCLING_LAYER],
          eventMap
        )
      },
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        ;(0, _MapChildHelper.componentDidUpdate)(
          this,
          this.state[_constants.BICYCLING_LAYER],
          eventMap,
          updaterMap,
          prevProps
        )
      },
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        ;(0, _MapChildHelper.componentWillUnmount)(this)
        var bicyclingLayer = this.state[_constants.BICYCLING_LAYER]
        if (bicyclingLayer) {
          bicyclingLayer.setMap(null)
        }
      },
    },
    {
      key: "render",
      value: function render() {
        return false
      },
    },
  ])
  return BicyclingLayer
})(_react2.default.PureComponent))

BicyclingLayer.propTypes = {}
BicyclingLayer.contextTypes = (0, _defineProperty3.default)(
  {},
  _constants.MAP,
  _propTypes2.default.object
)
exports.default = BicyclingLayer

var eventMap = {}

var updaterMap = {}


/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(372);
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
/* 372 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ApiForm__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Map__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ToggleSidebarButton__ = __webpack_require__(428);





var _wp = wp,
    apiFetch = _wp.apiFetch;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    Spinner = _wp$components.Spinner;






var Edit = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Edit, _Component);

  function Edit() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Edit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Edit.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      apiKey: "",
      isLoading: true,
      isSavingApiKey: false,
      isEditingApiKey: false
    }, _this.toggleIsEditingApiKey = function () {
      _this.setState({ isEditingApiKey: !_this.state.isEditingApiKey });
    }, _this.updateApiKey = function (apiKey) {
      _this.setState({ isSavingApiKey: true });
      apiFetch({
        path: "/jsforwpadvgb/v1/maps-api",
        method: "POST",
        body: apiKey
      }).then(function (data) {
        _this.setState({
          apiKey: apiKey,
          isSavingApiKey: false,
          isEditingApiKey: false
        });
      }).catch(function (error) {
        return alert(error);
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      apiFetch({ path: "/jsforwpadvgb/v1/maps-api" }).then(function (apiKey) {
        _this2.setState({
          apiKey: apiKey,
          isLoading: false
        });
      }).catch(function (error) {
        return console.error(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          text = _props.attributes.text,
          className = _props.className,
          setAttributes = _props.setAttributes,
          isSelected = _props.isSelected;


      if (this.state.isLoading) {
        return wp.element.createElement(
          "p",
          null,
          wp.element.createElement(Spinner, null),
          "Loading..."
        );
      }

      return wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
          InspectorControls,
          null,
          wp.element.createElement(
            PanelBody,
            {
              title: __("API Key", "jsforwpadvblocks"),
              initialOpen: true
            },
            wp.element.createElement(
              PanelRow,
              null,
              wp.element.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ApiForm__["a" /* default */], {
                apiKey: this.state.apiKey,
                isSavingApiKey: this.state.isSavingApiKey,
                isEditingApiKey: this.state.isEditingApiKey,
                toggleIsEditingApiKey: this.toggleIsEditingApiKey,
                updateApiKey: this.updateApiKey
              })
            )
          )
        ),
        wp.element.createElement(
          "div",
          { className: className, style: { width: "100%", height: "400px" } },
          this.state.apiKey === "" ? wp.element.createElement(
            "p",
            null,
            "Please enter an API key in the block settings",
            " ",
            wp.element.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ToggleSidebarButton__["a" /* default */], null)
          ) : wp.element.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Map__["a" /* default */], {
            isMarkerShown: true,
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + this.state.apiKey + "&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: wp.element.createElement("div", { style: { height: "100%" } }),
            containerElement: wp.element.createElement("div", { style: { height: "300px" } }),
            mapElement: wp.element.createElement("div", { style: { height: "100%" } })
          })
        )
      );
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (Edit);

/***/ }),
/* 427 */,
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var Button = wp.components.Button;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;


var ToggleSidebarButton = function ToggleSidebarButton(_ref) {
  var isEditorSidebarOpened = _ref.isEditorSidebarOpened,
      closeGeneralSidebar = _ref.closeGeneralSidebar,
      openGeneralSidebar = _ref.openGeneralSidebar;

  var toggleGeneralSidebar = isEditorSidebarOpened ? closeGeneralSidebar : openGeneralSidebar;

  if (isEditorSidebarOpened) return null;
  return wp.element.createElement(
    Button,
    { className: "is-button is-primary", onClick: openGeneralSidebar },
    "Open Block Settings"
  );
};

/* harmony default export */ __webpack_exports__["a"] = (compose(withSelect(function (select) {
  return {
    isEditorSidebarOpened: select("core/edit-post").isEditorSidebarOpened()
  };
}), withDispatch(function (dispatch, ownProps, _ref2) {
  var select = _ref2.select;

  var _select = select("core/editor"),
      getBlockSelectionStart = _select.getBlockSelectionStart;

  var _dispatch = dispatch("core/edit-post"),
      _openGeneralSidebar = _dispatch.openGeneralSidebar,
      closeGeneralSidebar = _dispatch.closeGeneralSidebar;

  return {
    openGeneralSidebar: function openGeneralSidebar() {
      return _openGeneralSidebar(getBlockSelectionStart() ? "edit-post/block" : "edit-post/document");
    },
    closeGeneralSidebar: closeGeneralSidebar
  };
}))(ToggleSidebarButton));

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.js.map