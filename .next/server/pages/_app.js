(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global */ "./src/styles/global.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ "./src/styles/theme.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1

(axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.baseURL) = 'https://api.themoviedb.org';

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__.default,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_3__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyles": function() { return /* binding */ GlobalStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*{margin:0;padding:0;box-sizing:border-box;}*,input,button{font-family:Roboto,Ubuntu,sans-serif;}body{background:", ";color:", ";font:400 16px Roboto,sans-serif;}.colored:nth-child(1){background:#f1ffe7;}.colored:nth-child(2){background:#dfffd9;}.colored:nth-child(3){background:#cdfeca;}.colored:nth-child(4){background:#bbfebb;}.colored:nth-child(5){background:#a9fdac;}.colored:nth-child(6){background:#90f29c;}.colored:nth-child(7){background:#77e68c;}"], props => props.theme.colors.background, props => props.theme.colors.text);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {
  colors: {
    background: '#121214',
    text: '#e0e0e3',
    primary: '#2255ee'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL3N0eWxlcy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInRleHQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLCtEQUFBLEdBQXlCLDRCQUF6Qjs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVDLGtEQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBQ0QsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFTyxNQUFNSSxZQUFZLEdBQUdDLG9FQUFILCtjQVlMQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CQyxVQVp2QixFQWFWRixLQUFLLElBQUlBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CRSxJQWJsQixDQUFsQixDOzs7Ozs7Ozs7Ozs7QUNGUCxNQUFNTixLQUFLLEdBQUc7QUFDWkksUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSxTQUROO0FBRU5DLFFBQUksRUFBRSxTQUZBO0FBR05DLFdBQU8sRUFBRTtBQUhIO0FBREksQ0FBZDtBQU9BLCtEQUFlUCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDUEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEdsb2JhbFN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG4vLyBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3VwY29taW5nP2FwaV9rZXk9ZmU2NWY4ZTg0MGUxNWQwNmM1YzAwYmYxMzA4NGRhNzQmbGFuZ3VhZ2U9cHQtQlImcGFnZT0xXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICAqe1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuXG4gICAgKiwgaW5wdXQsIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFVidW50dSwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICBib2R5IHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgICAgZm9udDogNDAwIDE2cHggUm9ib3RvLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIFxuICAuY29sb3JlZDpudGgtY2hpbGQoMSkge1xuICAgIGJhY2tncm91bmQ6ICNmMWZmZTc7XG4gIH1cbiAgLmNvbG9yZWQ6bnRoLWNoaWxkKDIpIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGZmZmQ5O1xuICB9XG4gIC5jb2xvcmVkOm50aC1jaGlsZCgzKSB7XG4gICAgYmFja2dyb3VuZDogI2NkZmVjYTtcbiAgfVxuICAuY29sb3JlZDpudGgtY2hpbGQoNCkge1xuICAgIGJhY2tncm91bmQ6ICNiYmZlYmI7XG4gIH1cbiAgLmNvbG9yZWQ6bnRoLWNoaWxkKDUpIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTlmZGFjO1xuICB9XG4gIC5jb2xvcmVkOm50aC1jaGlsZCg2KSB7XG4gICAgYmFja2dyb3VuZDogIzkwZjI5YztcbiAgfVxuICAuY29sb3JlZDpudGgtY2hpbGQoNykge1xuICAgIGJhY2tncm91bmQ6ICM3N2U2OGM7XG4gIH1cblxuYFxuIiwiY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzEyMTIxNCcsXHJcbiAgICB0ZXh0OiAnI2UwZTBlMycsXHJcbiAgICBwcmltYXJ5OiAnIzIyNTVlZScsXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9