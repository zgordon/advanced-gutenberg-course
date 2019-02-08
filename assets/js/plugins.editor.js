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
/******/ 	return __webpack_require__(__webpack_require__.s = 188);
/******/ })
/************************************************************************/
/******/ ({

/***/ 103:
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


/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_toc__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_layout_switcher__ = __webpack_require__(196);
/**
 * Import Sidebar Plugins
 */





/***/ }),

/***/ 189:
/***/ (function(module, exports) {

/**
 * Get dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;


var PluginSidebarDemo = function PluginSidebarDemo(props) {
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-demo" },
      __("Plugin Sidebar Demo", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwpadvgb-demo",
        title: __("Plugin Sidebar Demo", "jsforwpadvblocks")
      },
      wp.element.createElement(
        PanelBody,
        { title: __("Sidebar Header", "jsforwpadvblocks"), opened: true },
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(
            "p",
            null,
            __("Plugin Sidebar Demo", "jsforwpadvblocks")
          )
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-demo", {
  icon: "admin-plugins",
  render: PluginSidebarDemo
});

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockList__ = __webpack_require__(193);
/**
 * Get dependencies
 */
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;







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
        PanelBody,
        null,
        wp.element.createElement(
          PanelRow,
          null,
          wp.element.createElement(__WEBPACK_IMPORTED_MODULE_3__components_BlockList__["a" /* default */], null)
        )
      )
    )
  );
};

registerPlugin("jsforwpadvgb-toc", {
  icon: __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
  render: TableOfContents
});

/***/ }),

/***/ 191:
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

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(194);
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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(195);


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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var getBlockType = wp.blocks.getBlockType;
var Button = wp.components.Button;
var _wp$data = wp.data,
    select = _wp$data.select,
    dispatch = _wp$data.dispatch,
    withSelect = _wp$data.withSelect;




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

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__ = __webpack_require__(199);
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var Fragment = wp.element.Fragment;






var LayoutSwitcher = function LayoutSwitcher() {
  var layouts = {
    default: [createBlock("core/paragraph", {})],
    hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", { text: "Call to Action", align: "center" }), createBlock("core/columns", { columns: 3 })],
    featured: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", { placeholder: "Outro text" })]
  };
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-layout-switcher" },
      __("Layout Switcher", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwp-layout-switcher",
        title: __("Layout Switcher", "jsforwpadvblocks")
      },
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__["a" /* default */], { layouts: layouts, icons: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */] })
    )
  );
};

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].switcher,
  render: LayoutSwitcher
});

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icons = {};
icons.switcher = wp.element.createElement(
  "svg",
  {
    width: "20px",
    height: "20px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m12 45.699 5.1992-6c2-2.3008 5-3.6992 8-3.6992h33.898l-2.1992 11c-0.60156 2.8008 2.6016 4.8008 4.8984 3.1016l28.301-21c1.6992-1.1992 1.6992-3.8008 0-5l-28.301-21c-2.3008-1.6992-5.5 0.30078-4.8984 3.1016l2.1992 10.898h-34.598c-8.8008 0-15.898 7.1016-15.898 15.898v11.398c0 1.8008 2.1992 2.7031 3.3984 1.3008z" }),
  wp.element.createElement("path", { d: "m88.801 51c-1.8008-0.69922-3.6992-0.19922-5 1.3008l-4.8008 5.5977c-1.3984 1.6016-3.3984 2.5-5.6016 2.5h-28.699l1.3984-7.1016c0.5-2.3008-0.5-4.6016-2.5-5.8984-2-1.3008-4.5-1.1992-6.3984 0.19922l-26.699 19.902c-1.3984 1.1016-2.3008 2.6992-2.3008 4.5s0.80078 3.5 2.3008 4.5l26.699 19.801c1 0.69922 2.1992 1.1016 3.3984 1.1016 1 0 2.1016-0.30078 3-0.89844 2-1.3008 3-3.6016 2.5-5.8984l-1.3984-7.1016 29.301-0.003906c9.8008 0 17.699-7.8984 17.699-17.699v-10.602c0.10156-1.8984-1.0977-3.5977-2.8984-4.1992zm-2.4023 14.898c0 6.8008-5.5 12.301-12.301 12.301h-32.699c-0.80078 0-1.6016 0.39844-2.1016 1-0.5 0.60156-0.69922 1.3984-0.60156 2.1992l2.1016 10.301c0 0.10156 0 0.19922-0.10156 0.30078-0.19922 0.10156-0.19922 0-0.30078 0l-26.695-19.801s-0.10156-0.10156-0.10156-0.19922c0-0.10156 0.10156-0.19922 0.10156-0.19922l26.699-19.801c0.10156 0 0.10156-0.10156 0.30078 0s0.10156 0.19922 0.10156 0.30078l-2.1016 10.301c-0.19922 0.80078 0 1.6016 0.60156 2.1992 0.5 0.60156 1.3008 1 2.1016 1h32c3.6992 0 7.1992-1.6016 9.6016-4.3984l3.3008-3.8008-0.003907 8.2969z" })
);
icons.hero = wp.element.createElement(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m49.969 7.5c-3.8203 0-6.9062 3.1172-6.9062 6.9375 0 3.8438 3.0859 6.9062 6.9062 6.9062 3.8438 0 6.9688-3.0625 6.9688-6.9062 0-3.8203-3.125-6.9375-6.9688-6.9375zm-30.844 15.312c-4.125 0-4.125 5.4375 0 5.4375h9.3438v-5.4375zm11.406 0v5.4375h10.062v19.438h6.2812v-1.0312h6.2188v1.0312h6.3125v-19.438h10.062v-5.4375zm41 0v5.4375h9.3438c4.125 0 4.125-5.4375 0-5.4375zm-21.562 6.6562l1.3125 3.3125 3.5625 0.1875-2.75 2.2812 0.90625 3.4062-3.0312-1.9375-2.9688 1.9375 0.90625-3.4062-2.75-2.2812 3.5625-0.1875zm-11.438 0.875l-13.438 37.594h13.438zm22.938 0v37.594h13.438zm-20.875 19.438v24.062h7.7812v-17.844h3.25v17.844h7.7812v-24.062h-6.3125v1.0312h-6.2188v-1.0312zm0 26.156v12.688c0 2.1523 1.7227 3.875 3.875 3.875 2.1445 0 3.9062-1.7227 3.9062-3.875v-12.688zm11.031 0v12.688c0 2.1523 1.7617 3.875 3.9062 3.875 2.1523 0 3.875-1.7227 3.875-3.875v-12.688z" })
);
icons.featured = wp.element.createElement(
  "svg",
  {
    width: "40px",
    height: "40px",
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  },
  wp.element.createElement("path", { d: "m87.75 57.609c-0.3125-1.1094-0.625-2.2227-0.9375-3.3359-0.32812 1.0391-0.65625 2.0781-0.98438 3.1172-0.80469 2.5391-3.1289 4.6133-5.9141 4.5078-1.2656-0.050782-2.5234-0.10156-3.7852-0.15234l2.4258 1.7344c0.15625 0.10938 0.29687 0.23047 0.4375 0.34766 2.1641 1.1797 3.5117 3.5195 2.3789 6.582-0.47656 1.2852-0.94531 2.5703-1.4219 3.8555 1.1367-0.83984 2.2734-1.6836 3.4141-2.5234 2.3711-1.7539 5.4219-0.62891 7.4336 0.96094 0.74609 0.58984 1.4922 1.1797 2.2422 1.7656-0.41406-1.2344-0.82422-2.4727-1.2383-3.7109-0.90234-2.707 0.60938-5.4531 2.8164-6.9297 0.87109-0.58203 1.7461-1.1641 2.6172-1.7461-1.1875 0.011719-2.3789 0.019531-3.5664 0.027344-2.7383 0.03125-5.1836-1.8828-5.918-4.5z" }),
  wp.element.createElement("path", { d: "m19.418 74.473c-0.41406-1.2344-0.82422-2.4727-1.2383-3.7109-0.90234-2.707 0.60937-5.4531 2.8203-6.9297 0.87109-0.58203 1.7422-1.1641 2.6133-1.7461-1.1875 0.011718-2.3789 0.019531-3.5664 0.027343-2.7383 0.023438-5.1797-1.8906-5.9141-4.5039-0.3125-1.1094-0.62891-2.2227-0.94141-3.3359-0.32812 1.0391-0.65625 2.0781-0.98438 3.1172-0.80078 2.5391-3.1289 4.6133-5.9141 4.5078-1.2617-0.050782-2.5234-0.10156-3.7891-0.15234l2.4258 1.7344c0.15625 0.10938 0.29687 0.23047 0.4375 0.34766 2.1641 1.1797 3.5117 3.5195 2.3828 6.582-0.47266 1.2852-0.94922 2.5703-1.4219 3.8555 1.1406-0.83984 2.2773-1.6836 3.4141-2.5234 2.3672-1.7539 5.4219-0.62891 7.4336 0.96094 0.75 0.58984 1.4961 1.1797 2.2422 1.7695z" }),
  wp.element.createElement("path", { d: "m94.039 34.57h-0.035156c-4.6211 0.039063-9.2422 0.074219-13.867 0.11328-5.2383 0.042968-10.48 0.085937-15.723 0.12891-2.6719-9.4766-5.3438-18.953-8.0156-28.43-1.6875-5.9844-10.023-5.7188-11.832 0-2.9453 9.3281-5.8945 18.656-8.8438 27.984-5.1914-0.20313-10.383-0.41016-15.574-0.61328-4.3906-0.17188-8.7852-0.34766-13.176-0.51953-0.34766-0.015625-0.69531-0.027344-1.0469-0.042969-6.5898-0.26172-7.707 8.1367-3.0977 11.434 0.14844 0.10547 0.29688 0.21094 0.44141 0.31641 7.7266 5.5195 15.453 11.035 23.18 16.555-3.2461 8.793-6.4883 17.582-9.7344 26.375-0.23047 0.625-0.46094 1.2461-0.69141 1.875-1.793 4.8555 4.7461 10.078 9.0117 6.9297 0.48828-0.35938 0.98047-0.72266 1.4688-1.082 3.4414-2.5469 6.8828-5.0898 10.324-7.6289 4.1836-3.0938 8.3672-6.1836 12.547-9.2734 4.1055 3.2344 8.207 6.4727 12.312 9.707l9.5156 7.5c0.28125 0.22656 0.56641 0.44531 0.85156 0.67187 4.3555 3.4336 12.402 0.47656 10.254-5.9688-0.25781-0.77734-0.51953-1.5547-0.77734-2.3359-2.8945-8.6758-5.793-17.355-8.6914-26.035 8.0977-5.4062 16.191-10.816 24.289-16.227 0.027344-0.019531 0.046875-0.042968 0.074219-0.058594 4.8164-3.3164 3.1836-11.426-3.1641-11.375zm-31.582 19.867c-2.2109 1.4766-3.7227 4.2227-2.8164 6.9297 1.4922 4.4727 2.9844 8.9414 4.4805 13.414-3.4258-2.6992-6.8516-5.4023-10.277-8.1055-2.0117-1.5859-5.0625-2.7109-7.4336-0.96094-3.8828 2.8672-7.7617 5.7383-11.645 8.6055 1.6562-4.4844 3.3125-8.9688 4.9648-13.453 1.1289-3.0625-0.21875-5.3984-2.3828-6.582-0.14062-0.11719-0.28125-0.23438-0.4375-0.34766-3.5859-2.5625-7.1719-5.1211-10.754-7.6797 4.6719 0.18359 9.3438 0.36719 14.012 0.55469 2.7852 0.10938 5.1133-1.9688 5.918-4.5039 1.3555-4.293 2.7109-8.5859 4.0664-12.875 1.2383 4.3945 2.4766 8.7891 3.7148 13.184 0.73828 2.6133 3.1797 4.5273 5.918 4.5039 4.5977-0.035156 9.1953-0.074219 13.797-0.11328-3.7109 2.4727-7.418 4.9492-11.125 7.4297z" })
);
/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitcherButton__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResetControls__ = __webpack_require__(201);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;





var SwitcherControls = function SwitcherControls(_ref) {
  var blocks = _ref.blocks,
      layouts = _ref.layouts,
      icons = _ref.icons;

  var blockIds = blocks.map(function (block) {
    return block.clientId;
  });
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PanelBody,
      { title: __("Layout Choices", "jsforwpadvblocks"), opened: true },
      wp.element.createElement(
        PanelRow,
        { className: "layout-switcher" },
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
          blockIds: blockIds,
          layout: layouts.hero,
          icon: icons.hero,
          label: __("Hero", "jsforwpadvblocks")
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
          blockIds: blockIds,
          layout: layouts.featured,
          icon: icons.featured,
          label: __("Featured", "jsforwpadvblocks")
        })
      )
    ),
    wp.element.createElement(
      PanelBody,
      { title: __("Reset Layout", "jsforwpadvblocks") },
      wp.element.createElement(
        PanelRow,
        null,
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__ResetControls__["a" /* default */], null)
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(SwitcherControls));

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var withDispatch = wp.data.withDispatch;


var SwitcherButton = function SwitcherButton(_ref) {
  var blockIds = _ref.blockIds,
      removeBlocks = _ref.removeBlocks,
      resetBlocks = _ref.resetBlocks,
      insertBlock = _ref.insertBlock,
      insertBlocks = _ref.insertBlocks,
      icon = _ref.icon,
      label = _ref.label,
      layout = _ref.layout;

  return wp.element.createElement(
    "button",
    {
      onClick: function onClick() {
        removeBlocks(blockIds);
        // resetBlocks([]); // Also works
        insertBlocks(layout);
      }
    },
    wp.element.createElement(Icon, { icon: icon }),
    wp.element.createElement(
      "span",
      null,
      label
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch, ownProps) {
  var _dispatch = dispatch("core/editor"),
      removeBlocks = _dispatch.removeBlocks,
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks,
      insertBlock = _dispatch.insertBlock;

  return {
    removeBlocks: removeBlocks,
    resetBlocks: resetBlocks,
    insertBlocks: insertBlocks,
    insertBlock: insertBlock
  };
})(SwitcherButton));

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Modal = _wp$components.Modal;
var withDispatch = wp.data.withDispatch;
var _wp$compose = wp.compose,
    compose = _wp$compose.compose,
    withState = _wp$compose.withState;


var ResetControls = function ResetControls(_ref) {
  var isOpen = _ref.isOpen,
      setState = _ref.setState,
      resetBlocks = _ref.resetBlocks;
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      Button,
      { isLink: true, isDestructive: true, onClick: function onClick() {
          return setState({ isOpen: true });
        } },
      __("Reset Layout", "jsforwpadvblocks")
    ),
    isOpen && wp.element.createElement(
      Modal,
      {
        className: "layout-switcher-reset",
        title: __("Warning!", "jsforwpadvblocks"),
        onRequestClose: function onRequestClose() {
          return setState({ isOpen: false });
        }
      },
      wp.element.createElement(
        "p",
        null,
        __("This action will remove all blocks.", "jsforwpadvblocks"),
        wp.element.createElement(
          "strong",
          null,
          __("This can be undone before saving with the Undo option.", "jsforwpadvblocks")
        )
      ),
      wp.element.createElement(
        "p",
        null,
        wp.element.createElement(
          Button,
          {
            isDefault: true,
            onClick: function onClick() {
              resetBlocks([]);
              setState({ isOpen: false });
            }
          },
          __("Reset Layout.", "jsforwpadvblocks")
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (compose(withState({
  isOpen: false
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      resetBlocks = _dispatch.resetBlocks;

  return {
    resetBlocks: resetBlocks
  };
}))(ResetControls));

/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map