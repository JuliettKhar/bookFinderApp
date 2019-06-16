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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Api = exports.Api = function () {\n\tfunction Api() {\n\t\t_classCallCheck(this, Api);\n\n\t\tthis.apiKey = 'AIzaSyBtaCmhGVVgqlfkNQnNnnIhY0nPUR1MU0g';\n\t}\n\n\t_createClass(Api, [{\n\t\tkey: 'getData',\n\t\tvalue: async function getData(queryString) {\n\t\t\tvar query = queryString;\n\t\t\tvar url = await fetch('https://www.googleapis.com/books/v1/volumes?q=' + query + '&maxResults=40&key=' + this.apiKey);\n\t\t\tvar response = await url.json();\n\t\t\treturn {\n\t\t\t\tresponse: response\n\t\t\t};\n\t\t}\n\t}]);\n\n\treturn Api;\n}();\n\n//# sourceURL=webpack:///./src/js/api.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.init = init;\n\nvar _api = __webpack_require__(/*! ./api.js */ \"./src/js/api.js\");\n\nvar _ui = __webpack_require__(/*! ./ui.js */ \"./src/js/ui.js\");\n\nvar api = new _api.Api();\nvar ui = new _ui.UI();\n\nfunction getBooks(queryString) {\n\tvar books = api.getData(queryString).then(function (data) {\n\t\treturn ui.displayBooks(data);\n\t}).catch(function (err) {\n\t\treturn console.log(err);\n\t});\n}\n\nfunction onClick(event) {\n\tvar inputValue = ui.input.value;\n\tvar queryString = inputValue.split(' ').join('+');\n\tgetBooks(queryString);\n\tevent.preventDefault();\n}\n\nfunction subscribe() {\n\tui.btn.addEventListener('click', onClick);\n}\n\nfunction init() {\n\tsubscribe();\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n\nvar _app = __webpack_require__(/*! ./app.js */ \"./src/js/app.js\");\n\nvar app = _interopRequireWildcard(_app);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\napp.init();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UI = exports.UI = function () {\n\tfunction UI() {\n\t\t_classCallCheck(this, UI);\n\n\t\tthis.init();\n\t}\n\n\t_createClass(UI, [{\n\t\tkey: 'init',\n\t\tvalue: function init() {\n\t\t\tthis.result = document.querySelector('#results');\n\t\t\tthis.input = document.querySelector('#bookSearch');\n\t\t\tthis.btn = document.querySelector('.search__button');\n\t\t}\n\t}, {\n\t\tkey: 'displayBooks',\n\t\tvalue: function displayBooks(data) {\n\t\t\tconsole.log(data);\n\t\t\tvar instance = data.response.items;\n\t\t\tvar template = '';\n\t\t\tinstance.forEach(function (book) {\n\t\t\t\tconsole.log(book.volumeInfo.imageLinks.smallThumbnail);\n\t\t\t\ttemplate += '\\n\\t\\t\\t <ul class=\"book\">\\n\\t\\t\\t \\t<li class=\"book__img\"><img class=\"book__img-size\"src=\"' + (book.volumeInfo.imageLinks.smallThumbnail !== undefined ? book.volumeInfo.imageLinks.smallThumbnail : '#') + '\" alt=\"image is not aviliable\"></li>\\n\\t\\t\\t\\t\\t<li class=\"book__title\">' + book.volumeInfo.title + '</li>\\n\\t\\t\\t\\t\\t<li class=\"book__author\">by ' + (book.volumeInfo.authors !== undefined ? book.volumeInfo.authors : ' - ') + '</li>\\n\\t\\t\\t\\t\\t<li class=\"book__pages\">' + (book.volumeInfo.pageCount !== undefined ? book.volumeInfo.pageCount : ' - ') + ' pages</li>\\n\\t\\t\\t\\t\\t<li class=\"book__published\">Published ' + (book.volumeInfo.publishedDate !== undefined ? book.volumeInfo.publishedDate : ' - ') + '</li>\\n\\t\\t\\t\\t\\t<li><a class=\"book__download\" href=\"' + book.accessInfo.webReaderLink + '\">read on GooglePlay</a></li>\\n\\t\\t\\t\\t\\t<li><a class=\"book__download\" href=\"' + book.accessInfo.epub.acsTokenLink + '\">epub</a></li>\\n\\t\\t\\t\\t\\t<li><a class=\"book__download\" href=\"' + book.accessInfo.pdf.acsTokenLink + '\">pdf</a></li>\\n\\t\\t\\t</ul>\\n\\t\\t\\t';\n\t\t\t});\n\t\t\tthis.result.innerHTML = template;\n\t\t\tconsole.log(data);\n\t\t}\n\n\t\t// \tdisplayError(message, className) {\n\t\t// \t\t\tconst errorMessage = document.createElement('p');\n\t\t// \t\t\terrorMessage.className = className;\n\t\t// \t\t\terrorMessage.appendClild(document.createTextNode(message));\n\t\t// \t\t\tthis.result.appendChild(errorMessage);\n\t\t// }\n\n\t}]);\n\n\treturn UI;\n}();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });