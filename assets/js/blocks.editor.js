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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__01_gallery__ = __webpack_require__(1);
/**
 * Import example blocks
 */


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__icon__ = __webpack_require__(2);
/**
 * Block dependencies
 */


/**
 * Block dependencies
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Register block
 */

/* unused harmony default export */ var _unused_webpack_default_export = (registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: __WEBPACK_IMPORTED_MODULE_0__icon__["a" /* default */],
  keywords: [__("Masonry", "jsforwpadvblocks"), __("Images Media", "jsforwpadvblocks"), __("Lightbox", "jsforwpadvblocks")],
  edit: function edit(props) {
    return wp.element.createElement(
      "p",
      null,
      "Gallery goes here.."
    );
  },
  save: function save(props) {
    return wp.element.createElement(
      "p",
      null,
      "Gallery goes here.."
    );
  }
}));

/***/ }),
/* 2 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.js.map