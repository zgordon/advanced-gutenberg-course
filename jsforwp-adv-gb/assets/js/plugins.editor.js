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
/******/ 	return __webpack_require__(__webpack_require__.s = 373);
/******/ })
/************************************************************************/
/******/ ({

/***/ 181:
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

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_toc__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__02_layout_switcher__ = __webpack_require__(376);



/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(181);
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

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__plugin_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__plugin_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
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
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var compose = wp.compose.compose;
var __ = wp.i18n.__;





var TableOfContents = function TableOfContents(_ref) {
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
  // console.log(coverBlock);
  return wp.element.createElement(
    Fragment,
    null,
    wp.element.createElement(
      PluginSidebarMoreMenuItem,
      { icon: "edit", target: "jsforwp-layout-switcher" },
      __("JS for WP TOC", "jsforwpadvblocks")
    ),
    wp.element.createElement(
      PluginSidebar,
      {
        icon: "edit",
        name: "jsforwp-layout-switcher",
        title: "JS for WP Layout Switcher"
      },
      wp.element.createElement(
        "p",
        null,
        wp.element.createElement(
          Button,
          {
            className: "components-button is-button",
            onClick: function onClick() {
              removeBlocks(blockIds);
              insertBlocks(layouts.hero);
            }
          },
          "Hero Layout"
        )
      ),
      wp.element.createElement(
        "p",
        null,
        wp.element.createElement(
          Button,
          {
            className: "components-button is-button",
            onClick: function onClick() {
              removeBlocks(blockIds);
              insertBlocks(layouts.featured);
            }
          },
          "Featured Layout"
        )
      )
    )
  );
};

var TOC = compose(withDispatch(function (dispatch, ownProps) {
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
}))(TableOfContents);

var TocList = registerPlugin("jsforwp-layout-switcher", {
  icon: "edit",
  render: TOC
});

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=plugins.editor.js.map