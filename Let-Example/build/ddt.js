/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';
	
	function varTest() {
	    console.log('------ varTest ------');
	    var x = 31;
	    if (true) {
	        var x = 71; // same variable!
	        console.log(x); // 71
	    }
	    console.log(x); // 71
	}
	
	function letTest() {
	    console.log('------ letTest ------');
	    var x = 31;
	    if (true) {
	        var _x = 71; // different variable
	        console.log(_x); // 71
	    }
	    console.log(x); // 31
	}
	
	function varletTest() {
	    console.log('------ varletTest ------');
	    var x = 31;
	    if (true) {
	        var _x2 = 71; // different variable
	        console.log(_x2); // 71
	    }
	    console.log(x); // 31
	}
	
	function constTest() {
	    console.log('------ constTest ------');
	    var x = undefined;
	    if (true) {
	        // okay, block scoped name
	        var _x3 = 31;
	        // error, const
	        //x = 71;
	        console.log(_x3); // 31
	    }
	    // okay, declared with `let`
	    x = 71;
	    console.log(x); // 71
	}
	
	varTest();
	letTest();
	varletTest();
	constTest();

/***/ }
/******/ ]);
//# sourceMappingURL=ddt.js.map