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
/******/ 	return __webpack_require__(__webpack_require__.s = 178);
/******/ })
/************************************************************************/
/******/ ({

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_toc__ = __webpack_require__(179);
/**
 * Import Sidebar Plugins
 */



/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockList__ = __webpack_require__(182);
/**
 * Get dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var PanelRow = wp.components.PanelRow;







var TableOfContents = function TableOfContents(props) {
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-toc" },
      __("Table of Contents", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-toc",
        title: __("Table of Contents", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelRow,
        null,
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockList__["a" /* default */], null)
      )
    )
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
  render: TableOfContents
});

/***/ }),

/***/ 180:
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
  wp.element.createElement("path", { d: "m49.445 60.777h31c0.89063 0 1.668-0.66797 1.668-1.668l-0.003906-12c0-0.89062-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v6.7773h-12.223v-24.441c0-0.10938 0-0.22266-0.10938-0.33203h15.109c0.89062 0 1.668-0.66797 1.668-1.668v-12.004c0-0.89062-0.77734-1.668-1.668-1.668h-31c-0.89063 0-1.668 0.77734-1.668 1.668v12c0 0.89063 0.77734 1.668 1.668 1.668h15c-0.10938 0.10938-0.10938 0.21875-0.10938 0.33203v49.445c0 0.33203 0.22266 0.55469 0.55469 0.55469h12.777v5.1094c0 0.89062 0.77734 1.668 1.668 1.668h31c0.89063 0 1.668-0.77734 1.668-1.668l-0.003906-12c0-0.89063-0.77734-1.668-1.668-1.668l-30.996 0.003906c-0.89062 0-1.668 0.77734-1.668 1.668v5.7773l-12.223-0.003907v-23.332h12.223v4.1094c0 0.89062 0.77734 1.668 1.668 1.668zm-30.445-33.332v-12c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm29.891 45.109c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469h-31c-0.33203 0-0.55469-0.22266-0.55469-0.55469zm0-25.445c0-0.33203 0.22266-0.55469 0.55469-0.55469h31c0.33203 0 0.55469 0.22266 0.55469 0.55469v12c0 0.33203-0.22266 0.55469-0.55469 0.55469l-31 0.003907c-0.33203 0-0.55469-0.22266-0.55469-0.55469z" }),
  wp.element.createElement("path", { d: "m52.891 53.668h24c0.33203 0 0.55469-0.22266 0.55469-0.55469s-0.22266-0.55469-0.55469-0.55469l-24-0.003906c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55859 0.55469 0.55859z" }),
  wp.element.createElement("path", { d: "m52.891 79.109h12c0.33203 0 0.55469-0.22266 0.55469-0.55469 0-0.33203-0.22266-0.55469-0.55469-0.55469h-12c-0.33203 0-0.55469 0.22266-0.55469 0.55469-0.003907 0.33594 0.21875 0.55469 0.55469 0.55469z" })
);

/* harmony default export */ __webpack_exports__["a"] = (icon);

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(183);
var withSelect = wp.data.withSelect;




var BlockList = function BlockList(_ref) {
  var blocks = _ref.blocks;

  var blockItems = blocks.map(function (block) {
    return wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockItem__["a" /* default */], { block: block });
  });
  return wp.element.createElement(
    "ul",
    { className: "jsforwp-toc" },
    blockItems
  );
};

/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(BlockList));

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(184);


var BlockItem = function BlockItem(_ref) {
  var block = _ref.block;

  var childBlocks = null;

  if (block.innerBlocks) {
    childBlocks = block.innerBlocks.map(function (innerBlock) {
      return wp.element.createElement(BlockItem, { block: innerBlock });
    });
  }
  return wp.element.createElement(
    "li",
    { key: block.clientId },
    wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__BlockButton__["a" /* default */], { block: block }),
    childBlocks && wp.element.createElement(
      "ul",
      null,
      childBlocks
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (BlockItem);

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var getBlockType = wp.blocks.getBlockType;
var Button = wp.components.Button;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;




console.log(select("core/editor"));

var BlockButton = function BlockButton(_ref) {
  var block = _ref.block,
      isBlockSelected = _ref.isBlockSelected;

  var blockType = getBlockType(block.name);
  return wp.element.createElement(
    Button,
    {
      className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()("editor-block-navigation__item-button", {
        "is-selected": isBlockSelected
      }),
      onClick: function onClick() {
        return dispatch("core/editor").selectBlock(block.clientId);
      }
    },
    wp.element.createElement(
      "span",
      { "class": "editor-block-icon has-colors" },
      blockType.icon.src
    ),
    blockType.title
  );
};

// export default BlockButton;
/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select, ownProps) {
  var clientId = ownProps.block.clientId;

  return {
    isBlockSelected: select("core/editor").isBlockSelected(clientId)
  };
})(BlockButton));

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map