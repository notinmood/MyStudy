/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stringHelper.js":
/*!*****************************!*\
  !*** ./src/stringHelper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSubString\": () => (/* binding */ getSubString),\n/* harmony export */   \"reverse\": () => (/* binding */ reverse),\n/* harmony export */   \"right\": () => (/* binding */ right),\n/* harmony export */   \"left\": () => (/* binding */ left)\n/* harmony export */ });\n/**\r\n * 截取某个字符串的子字符串\r\n * @param {*} whole 待截取的全字符串\r\n * @param {*} length 截取长度\r\n * @param {*} positive 截取方向（true表示正向，false表示反向）\r\n */\r\nconst getSubString = function (whole, length, positive = true) {\r\n    const realLength = whole.length;\r\n    let result = '';\r\n    if (length >= realLength) {\r\n        result = whole;\r\n    } else if (positive == true) {\r\n        result = whole.substring(0, length);\r\n    } else {\r\n        result = whole.substring(realLength - length, realLength);\r\n    }\r\n    return result;\r\n};\r\n\r\n/**\r\n * 从右向左截取字符串\r\n * @param {*} whole\r\n * @param {*} length\r\n */\r\nconst right = function (whole, length) {\r\n    return getSubString(whole, length, false);\r\n};\r\n\r\n/**\r\n * 从左向右截取字符串\r\n * @param {*} whole\r\n * @param {*} length\r\n */\r\nconst left = function (whole, length) {\r\n    return getSubString(whole, length, true);\r\n};\r\n\r\n/**\r\n * 将字符串进行方向反转\r\n * @param {*} data 待反转的字符串\r\n */\r\nconst reverse = function (data) {\r\n    return data.split('').reverse().join('');\r\n};\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://BabelStudy/./src/stringHelper.js?");

/***/ }),

/***/ "./验证区/HTML/es6/usingES6.js":
/*!**********************************!*\
  !*** ./验证区/HTML/es6/usingES6.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_stringHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/stringHelper.js */ \"./src/stringHelper.js\");\n\r\n\r\nlet whole =\"qingdao city\";\r\nlet result= _src_stringHelper_js__WEBPACK_IMPORTED_MODULE_0__.left(whole,4);\r\nconsole.log(result);\n\n//# sourceURL=webpack://BabelStudy/./%E9%AA%8C%E8%AF%81%E5%8C%BA/HTML/es6/usingES6.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./验证区/HTML/es6/usingES6.js");
/******/ 	
/******/ })()
;