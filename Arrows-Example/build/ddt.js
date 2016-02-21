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
	
	var data = [1, 2, 3, 4, 5];
	
	// Expression bodies
	// normal function
	var result1 = data.map(function name(v) {
	    return v + 1;
	});
	
	// arrow function
	var result2 = data.map(function (v) {
	    return v + 1;
	});
	
	console.log('------ Array map use normal function ------');
	console.log(result1.toString());
	
	console.log('------ Array map use arrow function ------');
	console.log(result2.toString());
	
	// Statement bodies
	// normal function
	var result3 = data.reduce(function (previousValue, currentValue, currentIndex, array) {
	    if (currentIndex % 2 == 0) {
	        return previousValue + currentValue;
	    } else {
	        return previousValue;
	    }
	}, 0);
	
	// arrow function
	var result4 = data.reduce(function (previousValue, currentValue, currentIndex, array) {
	    if (currentIndex % 2 == 0) {
	        return previousValue + currentValue;
	    } else {
	        return previousValue;
	    }
	}, 0);
	
	console.log('------ Array reduce use normal function ------');
	console.log(result3);
	
	console.log('------ Array map use arrow function ------');
	console.log(result4);
	
	// Statement bodies
	// nums.forEach(v => {
	//   if (v % 5 === 0)
	//     fives.push(v);
	// });
	
	// Lexical this
	var Book = {
	    _name: "Holiday",
	    _authors: ["Watt", "Steve"],
	    printAuthors: function printAuthors() {
	        var _this = this;
	
	        this._authors.forEach(function (author) {
	            return console.log(author + " write " + _this._name);
	        });
	    }
	};
	
	console.log('------ Lexical this test ------');
	Book.printAuthors();

/***/ }
/******/ ]);
//# sourceMappingURL=ddt.js.map