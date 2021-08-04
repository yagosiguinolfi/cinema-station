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
    background: '#1c1c2e',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL3N0eWxlcy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvc3R5bGVzL3RoZW1lLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJheGlvcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsInByb3BzIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsInRleHQiLCJwcmltYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLCtEQUFBLEdBQXlCLDRCQUF6Qjs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UsOERBQUMsNERBQUQ7QUFBZSxTQUFLLEVBQUVDLGtEQUF0QjtBQUFBLDRCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBQ0QsK0RBQWVGLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFTyxNQUFNSSxZQUFZLEdBQUdDLG9FQUFILCtjQVlMQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CQyxVQVp2QixFQWFWRixLQUFLLElBQUlBLEtBQUssQ0FBQ0gsS0FBTixDQUFZSSxNQUFaLENBQW1CRSxJQWJsQixDQUFsQixDOzs7Ozs7Ozs7Ozs7QUNGUCxNQUFNTixLQUFLLEdBQUc7QUFDWkksUUFBTSxFQUFFO0FBQ05DLGNBQVUsRUFBRSxTQUROO0FBRU5DLFFBQUksRUFBRSxTQUZBO0FBR05DLFdBQU8sRUFBRTtBQUhIO0FBREksQ0FBZDtBQU9BLCtEQUFlUCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDUEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xyXG5cclxuLy8gaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS91cGNvbWluZz9hcGlfa2V5PWZlNjVmOGU4NDBlMTVkMDZjNWMwMGJmMTMwODRkYTc0Jmxhbmd1YWdlPXB0LUJSJnBhZ2U9MVxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgKntcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgICosIGlucHV0LCBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFVidW50dSwgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICAgICAgZm9udDogNDAwIDE2cHggUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gIC5jb2xvcmVkOm50aC1jaGlsZCgxKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmZmU3O1xyXG4gIH1cclxuICAuY29sb3JlZDpudGgtY2hpbGQoMikge1xyXG4gICAgYmFja2dyb3VuZDogI2RmZmZkOTtcclxuICB9XHJcbiAgLmNvbG9yZWQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIGJhY2tncm91bmQ6ICNjZGZlY2E7XHJcbiAgfVxyXG4gIC5jb2xvcmVkOm50aC1jaGlsZCg0KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmJmZWJiO1xyXG4gIH1cclxuICAuY29sb3JlZDpudGgtY2hpbGQoNSkge1xyXG4gICAgYmFja2dyb3VuZDogI2E5ZmRhYztcclxuICB9XHJcbiAgLmNvbG9yZWQ6bnRoLWNoaWxkKDYpIHtcclxuICAgIGJhY2tncm91bmQ6ICM5MGYyOWM7XHJcbiAgfVxyXG4gIC5jb2xvcmVkOm50aC1jaGlsZCg3KSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzdlNjhjO1xyXG4gIH1cclxuXHJcbmBcclxuIiwiY29uc3QgdGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnIzFjMWMyZScsXHJcbiAgICB0ZXh0OiAnI2UwZTBlMycsXHJcbiAgICBwcmltYXJ5OiAnIzIyNTVlZScsXHJcbiAgfSxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9