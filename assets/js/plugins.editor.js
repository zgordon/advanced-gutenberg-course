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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_layout_switcher__ = __webpack_require__(181);



/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var registerPlugin = wp.plugins.registerPlugin;
var getBlockType = wp.blocks.getBlockType;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var __ = wp.i18n.__;





var TableOfContents = function TableOfContents(_ref) {
  var getBlock = _ref.getBlock,
      hasBlocks = _ref.hasBlocks,
      isBlockSelected = _ref.isBlockSelected,
      blocks = _ref.blocks;
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      {
        icon: "wordpress-alt",
        target: "jsforwp-toc-sidebar"
      },
      __("JS for WP TOC", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        icon: "wordpress-alt",
        name: "jsforwp-toc-sidebar",
        title: "JS for WP TOC"
      },
      wp.element.createElement(TocBlocks, { blocks: blocks, isBlockSelected: isBlockSelected })
    )
  );
};

var Node = function Node(props) {
  //   console.log(selectBlock);

  // http://lyndseyb.co.uk/posts/creating-a-nested-listview-using-react

  var childnodes = null;

  // the Node component calls itself if there are children
  if (props.children) {
    childnodes = props.children.map(function (childnode) {
      return wp.element.createElement(NodeWithDispatch, {
        node: childnode,
        isBlockSelected: props.isBlockSelected,
        children: childnode.innerBlocks
      });
    });
  }

  var blockType = getBlockType(props.node.name);
  //   let isSelected = props.isBlockSelected(props.node.clientId);

  // return our list element
  // display children if there are any
  return wp.element.createElement(
    "li",
    { key: props.node.clientId },
    wp.element.createElement(
      "div",
      { className: "editor-block-navigation__item" },
      wp.element.createElement(
        Button,
        {
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()("editor-block-navigation__item-button", {
            "is-selected": props.isBlockSelected(props.node.clientId)
          })
          // icon={getBlockType(props.node.name).icon.src}
          , onClick: function onClick() {
            return props.selectBlock(props.node.clientId);
          }
        },
        wp.element.createElement(
          "span",
          { "class": "editor-block-icon has-colors" },
          blockType.icon.src
        ),
        blockType.title
      ),
      childnodes ? wp.element.createElement(
        "ul",
        null,
        childnodes
      ) : null
    )
  );
};

var TocBlocks = function TocBlocks(_ref2) {
  var blocks = _ref2.blocks,
      isBlockSelected = _ref2.isBlockSelected;

  var nodes = blocks.map(function (block) {
    return wp.element.createElement(NodeWithDispatch, {
      node: block,
      isBlockSelected: isBlockSelected,
      children: block.innerBlocks
    });
  });

  return wp.element.createElement(
    "div",
    null,
    wp.element.createElement(
      "ul",
      { className: "jsforwp-toc" },
      nodes
    )
  );
};

var NodeWithDispatch = withDispatch(function (dispatch) {
  var _dispatch = dispatch("core/editor"),
      selectBlock = _dispatch.selectBlock;

  return {
    selectBlock: selectBlock
  };
})(Node);

var TOC = withSelect(function (select) {
  var _select = select("core/editor"),
      isBlockSelected = _select.isBlockSelected;

  return {
    getBlock: select("core/editor").getBlock(),
    hasBlocks: !!select("core/editor").getBlockCount(),
    blocks: select("core/editor").getBlocks(),
    isBlockSelected: isBlockSelected
  };
})(TableOfContents);

var TocList = registerPlugin("jsforwptoc", {
  icon: "wordpress-alt",
  render: TOC
});

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icons__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
var registerPlugin = wp.plugins.registerPlugin;
var _wp$blocks = wp.blocks,
    getBlockType = _wp$blocks.getBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editPost = wp.editPost,
    PluginSidebar = _wp$editPost.PluginSidebar,
    PluginSidebarMoreMenuItem = _wp$editPost.PluginSidebarMoreMenuItem;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    Icon = _wp$components.Icon,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var __ = wp.i18n.__;






var LayoutSwitcher = function LayoutSwitcher(_ref) {
  var getBlocks = _ref.getBlocks,
      insertBlocks = _ref.insertBlocks,
      insertBlock = _ref.insertBlock,
      removeBlocks = _ref.removeBlocks,
      blocks = _ref.blocks;

  var blockIds = blocks.map(function (block) {
    return block.clientId;
  });
  var layouts = {
    hero: [createBlock("core/cover", { align: "full" }), createBlock("core/button", { text: "Call to Action", align: "center" }), createBlock("core/columns", { columns: 3 })],
    featured: [createBlock("core/heading", {}), createBlock("core/spacer", { height: "10" }), createBlock("core/media-text", { align: "full" }), createBlock("core/spacer", { height: "40" }), createBlock("core/quote", {}), createBlock("core/spacer", { height: "20" }), createBlock("core/media-text", { mediaPosition: "right" }), createBlock("core/paragraph", { placeholder: "Outro text" })]
  };
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { target: "jsforwpadvgb-layout-switcher" },
      __("JS for WP TOC", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        name: "jsforwp-layout-switcher",
        title: "JS for WP Layout Switcher"
      },
      wp.element.createElement(
        PanelBody,
        { title: __("Layouts", "jsforwpadvblocks"), opened: true },
        wp.element.createElement(
          PanelRow,
          { className: "layout-switcher" },
          wp.element.createElement(
            "button",
            {
              onClick: function onClick() {
                removeBlocks(blockIds);
                insertBlocks(layouts.hero);
              }
            },
            wp.element.createElement(Icon, { icon: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].hero }),
            wp.element.createElement(
              "span",
              null,
              "Hero Layout"
            )
          ),
          wp.element.createElement(
            Button,
            {
              onClick: function onClick() {
                removeBlocks(blockIds);
                insertBlocks(layouts.featured);
              }
            },
            __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].featured,
            "Featured Layout"
          )
        )
      )
    )
  );
};

var LayoutSwitcherWithCompose = compose(withDispatch(function (dispatch, ownProps) {
  var _dispatch = dispatch("core/editor"),
      removeBlocks = _dispatch.removeBlocks,
      insertBlocks = _dispatch.insertBlocks,
      insertBlock = _dispatch.insertBlock;

  return {
    removeBlocks: removeBlocks,
    insertBlocks: insertBlocks,
    insertBlock: insertBlock
  };
}), withSelect(function (select) {
  return {
    blocks: select("core/editor").getBlocks(),
    getBlocks: select("core/editor").getBlocks
  };
}))(LayoutSwitcher);

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: __WEBPACK_IMPORTED_MODULE_0__icons__["a" /* default */].switcher,
  render: LayoutSwitcherWithCompose
});

/***/ }),

/***/ 182:
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

/***/ 183:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 40:
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