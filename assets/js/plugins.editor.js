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
/******/ 	return __webpack_require__(__webpack_require__.s = 187);
/******/ })
/************************************************************************/
/******/ ({

/***/ 116:
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

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__01_plugin_sidebar_demo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_toc__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__03_layout_switcher__ = __webpack_require__(195);
/**
 * Import Sidebar Plugins
 */





/***/ }),

/***/ 188:
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

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_BlockList__ = __webpack_require__(192);
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

/***/ 190:
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

/***/ 191:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockItem__ = __webpack_require__(193);
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

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BlockButton__ = __webpack_require__(194);


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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(116);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__ = __webpack_require__(198);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var createBlock = wp.blocks.createBlock;
var registerPlugin = wp.plugins.registerPlugin;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;






var LayoutSwitcher = function LayoutSwitcher() {
  var layouts = {
    default: [createBlock("core/paragraph", {})],
    hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", {
      text: __("Layout Switcher", "jsforwpadvblocks"),
      align: "center"
    }), createBlock("core/columns", { columns: 3 })],
    featured: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", {
      placeholder: __("Outro Text", "jsforwpadvblocks")
    })]
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
        name: "jsforwpadvgb-layout-switcher",
        title: __("Layout Switcher", "jsforwpadvblocks")
      },
      wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__components_SwitcherControls__["a" /* default */], { icons: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */], layouts: layouts })
    )
  );
};

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].switcher,
  render: LayoutSwitcher
});

/***/ }),

/***/ 196:
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
  wp.element.createElement("path", {
    d: "m51.91 27.891 4.8594 15.051 15.82-0.03125c2 0 2.75 2.4688 0.98828 3.7383l-12.629 9.1406 4.9102 15.039c0.62891 1.9219-1.6797 3.4297-3.1914 2.1406l-12.66-9.2383-12.781 9.3281c-1.7383 1.2617-3.6602-0.44141-2.9297-2.6484l4.7695-14.621-12.809-9.2695c-1.6289-1.1797-0.67187-3.7383 1.3086-3.6094l15.68 0.03125 4.8594-15.051c0.60156-1.8516 3.2109-1.8203 3.8008 0z",
    fillRule: "evenodd"
  }),
  wp.element.createElement("path", { d: "m50 9.7891c22.199 0 40.211 18.012 40.211 40.211s-18.012 40.211-40.211 40.211-40.211-18.012-40.211-40.211 18.012-40.211 40.211-40.211zm0 4c-20 0-36.211 16.211-36.211 36.211s16.211 36.211 36.211 36.211 36.211-16.211 36.211-36.211-16.211-36.211-36.211-36.211z" })
);
/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SwitcherButton__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResetControls__ = __webpack_require__(200);
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    Icon = _wp$components.Icon,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    dispatch = _wp$data.dispatch;





var SwitcherControls = function SwitcherControls(_ref) {
  var blocks = _ref.blocks,
      icons = _ref.icons,
      layouts = _ref.layouts;

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
          label: __("Hero", "jsforwpadvblocks"),
          icon: icons.hero,
          blockIds: blockIds,
          layout: layouts.hero
        }),
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__SwitcherButton__["a" /* default */], {
          label: __("Feature", "jsforwpadvblocks"),
          icon: icons.featured,
          blockIds: blockIds,
          layout: layouts.featured
        })
      )
    ),
    wp.element.createElement(
      PanelBody,
      { title: __("Reset Layout", "jsforwpadvblocks") },
      wp.element.createElement(
        PanelRow,
        null,
        wp.element.createElement(__WEBPACK_IMPORTED_MODULE_1__ResetControls__["a" /* default */], { layout: layouts.default })
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Icon = wp.components.Icon;
var _wp$data = wp.data,
    withDispatch = _wp$data.withDispatch,
    select = _wp$data.select;


var SwitcherButton = function SwitcherButton(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      layout = _ref.layout,
      blockIds = _ref.blockIds,
      removeBlocks = _ref.removeBlocks,
      resetBlocks = _ref.resetBlocks,
      insertBlock = _ref.insertBlock,
      insertBlocks = _ref.insertBlocks;

  return wp.element.createElement(
    "button",
    {
      onClick: function onClick() {
        console.log(label);
        // removeBlocks(blockIds);
        resetBlocks([]);
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

/* harmony default export */ __webpack_exports__["a"] = (withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      removeBlocks = _dispatch.removeBlocks,
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks,
      insertBlock = _dispatch.insertBlock;

  return {
    removeBlocks: removeBlocks,
    resetBlocks: resetBlocks,
    insertBlock: insertBlock,
    insertBlocks: insertBlocks
  };
})(SwitcherButton));

/***/ }),

/***/ 200:
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
      layout = _ref.layout,
      resetBlocks = _ref.resetBlocks,
      insertBlocks = _ref.insertBlocks;

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
        __("This action will remove all blocks", "jsforwpadvblocks"),
        wp.element.createElement(
          "strong",
          null,
          __("This can be undone before leaving the page with the Undo option.", "jsforwpadvblocks")
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
              insertBlocks(layout);
              setState({ isOpen: false });
            }
          },
          __("Reset Layout", "jsforwpadvblocks")
        )
      )
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (compose(withState({
  isOpen: false
}), withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      resetBlocks = _dispatch.resetBlocks,
      insertBlocks = _dispatch.insertBlocks;

  return {
    resetBlocks: resetBlocks,
    insertBlocks: insertBlocks
  };
}))(ResetControls));

/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map