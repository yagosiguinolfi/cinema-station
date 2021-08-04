(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/DefaultOverlayContent/index.js":
/*!*******************************************************!*\
  !*** ./src/components/DefaultOverlayContent/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/DefaultOverlayContent/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\DefaultOverlayContent\\index.js";



function DefaultOverlayContent({
  label,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Heading, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Buttons, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        children: "Show details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DefaultOverlayContent);

/***/ }),

/***/ "./src/components/DefaultOverlayContent/styles.js":
/*!********************************************************!*\
  !*** ./src/components/DefaultOverlayContent/styles.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Heading": function() { return /* binding */ Heading; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ggpooc-0"
})(["display:flex;flex-direction:column;justify-content:space-between;flex:1;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1ggpooc-1"
})(["margin-top:16.5vh;text-align:center;>h1{font-weight:500;font-size:40px;line-height:48px;color:#393c41;}>h2{font-weight:normal;font-size:14px;line-height:20px;color:#5c5e62;}"]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1ggpooc-2"
})(["width:100%;text-align:center;"]);

/***/ }),

/***/ "./src/components/Movie/MovieOverlay/index.js":
/*!****************************************************!*\
  !*** ./src/components/Movie/MovieOverlay/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MovieOverlay/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MovieOverlay\\index.js";



function MovieOverlay({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MovieOverlay);

/***/ }),

/***/ "./src/components/Movie/MovieOverlay/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/MovieOverlay/styles.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1hk7ebg-0"
})(["position:sticky;top:0;height:100vh;margin-top:-100vh;display:flex;flex-direction:column;align-items:center;"]);

/***/ }),

/***/ "./src/components/Movie/MoviePreview/index.js":
/*!****************************************************!*\
  !*** ./src/components/Movie/MoviePreview/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MoviePreview/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MoviePreview\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable @next/next/no-img-element */

/* eslint-disable no-unused-vars */


function MoviePreview(_ref) {
  let {
    movie
  } = _ref,
      props = _objectWithoutProperties(_ref, ["movie"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      alt: "",
      src: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {
      children: movie.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MoviePreview);

/***/ }),

/***/ "./src/components/Movie/MoviePreview/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/MoviePreview/styles.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Title": function() { return /* binding */ Title; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1emomf5-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:40vh;width:300px;border-style:solid;border-width:2px;border-color:#f1f1f2;border-radius:10px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1emomf5-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1emomf5-2"
})([""]);

/***/ }),

/***/ "./src/components/Movie/MovieSection/index.js":
/*!****************************************************!*\
  !*** ./src/components/Movie/MovieSection/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MovieSection/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MovieSection\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-unused-vars */


function MovieSection(_ref) {
  let {
    movieName,
    overlayNode,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["movieName", "overlayNode", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MovieSection);

/***/ }),

/***/ "./src/components/Movie/MovieSection/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/MovieSection/styles.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Heading": function() { return /* binding */ Heading; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-19vvp3n-0"
})(["height:100vh;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-19vvp3n-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-19vvp3n-2"
})([""]);

/***/ }),

/***/ "./src/components/Movie/MovieWrapper/index.js":
/*!****************************************************!*\
  !*** ./src/components/Movie/MovieWrapper/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MovieOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MovieOverlay */ "./src/components/Movie/MovieOverlay/index.js");
/* harmony import */ var _MoviesContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MoviesContext */ "./src/components/Movie/MoviesContext.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MovieWrapper/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MovieWrapper\\index.js";

/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */





function MoviesWrapper({
  children
}) {
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: registeredMovies,
    1: setRegisteredMovies
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const registerMovie = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(movie => {
    setRegisteredMovies(state => [...state, movie]);
  }, []);
  const unregisterMovie = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(movieName => {
    setRegisteredMovies(state => state.filter(movie => movie.movieName !== movieName));
  }, []);
  const getMovieByName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(movieName => registeredMovies.find(movie => movie.movieName === movieName) || null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MoviesContext__WEBPACK_IMPORTED_MODULE_3__.default.Provider, {
    value: {
      wrapperRef,
      registeredMovies,
      registerMovie,
      unregisterMovie,
      getMovieByName
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
      ref: wrapperRef,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Teste"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.OverlaysRoot, {
        children: registeredMovies.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieOverlay__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: movie.title
        }, movie.id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MoviesWrapper);

/***/ }),

/***/ "./src/components/Movie/MovieWrapper/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/MovieWrapper/styles.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "OverlaysRoot": function() { return /* binding */ OverlaysRoot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1df9e8l-0"
})(["height:100vh;scroll-snap-type:y mandatory;overflow-y:scroll;"]);
const OverlaysRoot = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__OverlaysRoot",
  componentId: "sc-1df9e8l-1"
})(["position:sticky;top:0;right:0;left:0;bottom:0;"]);

/***/ }),

/***/ "./src/components/Movie/MoviesContext.js":
/*!***********************************************!*\
  !*** ./src/components/Movie/MoviesContext.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const MoviesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (MoviesContext);

/***/ }),

/***/ "./src/components/Movie/index.js":
/*!***************************************!*\
  !*** ./src/components/Movie/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesWrapper": function() { return /* reexport safe */ _MovieWrapper__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "MovieSection": function() { return /* reexport safe */ _MovieSection__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _MovieWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieWrapper */ "./src/components/Movie/MovieWrapper/index.js");
/* harmony import */ var _MovieSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieSection */ "./src/components/Movie/MovieSection/index.js");



/***/ }),

/***/ "./src/pages/_styles.js":
/*!******************************!*\
  !*** ./src/pages/_styles.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Heading": function() { return /* binding */ Heading; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; },
/* harmony export */   "Content": function() { return /* binding */ Content; },
/* harmony export */   "Title": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "_styles__Container",
  componentId: "sc-z3uf8w-0"
})([""]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "_styles__Heading",
  componentId: "sc-z3uf8w-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "_styles__Buttons",
  componentId: "sc-z3uf8w-2"
})([""]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "_styles__Content",
  componentId: "sc-z3uf8w-3"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-evenly;width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "_styles__Title",
  componentId: "sc-z3uf8w-4"
})([""]);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DefaultOverlayContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/DefaultOverlayContent */ "./src/components/DefaultOverlayContent/index.js");
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Movie */ "./src/components/Movie/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_styles */ "./src/pages/_styles.js");
/* harmony import */ var _components_Movie_MoviePreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Movie/MoviePreview */ "./src/components/Movie/MoviePreview/index.js");


var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\pages\\index.js";

/* eslint-disable no-unused-vars */

/* eslint-disable @next/next/no-img-element */








function HomePage() {
  const {
    0: pageMovies,
    1: setPageMovies
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default().get('3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1').then(async response => {
      await setPageMovies(response.data.results);
      setData(response.data);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cinema Station"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Content, {
        children: pageMovies.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movie_MoviePreview__WEBPACK_IMPORTED_MODULE_7__.default, {
          movie: movie
        }, movie.id, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZU92ZXJsYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZU92ZXJsYXkvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllU2VjdGlvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVdyYXBwZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL3BhZ2VzL19zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRlZmF1bHRPdmVybGF5Q29udGVudCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJIZWFkaW5nIiwiQnV0dG9ucyIsIk1vdmllT3ZlcmxheSIsImNoaWxkcmVuIiwiTW92aWVQcmV2aWV3IiwibW92aWUiLCJwcm9wcyIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJUaXRsZSIsIk1vdmllU2VjdGlvbiIsIm1vdmllTmFtZSIsIm92ZXJsYXlOb2RlIiwiTW92aWVzV3JhcHBlciIsIndyYXBwZXJSZWYiLCJ1c2VSZWYiLCJyZWdpc3RlcmVkTW92aWVzIiwic2V0UmVnaXN0ZXJlZE1vdmllcyIsInVzZVN0YXRlIiwicmVnaXN0ZXJNb3ZpZSIsInVzZUNhbGxiYWNrIiwic3RhdGUiLCJ1bnJlZ2lzdGVyTW92aWUiLCJmaWx0ZXIiLCJnZXRNb3ZpZUJ5TmFtZSIsImZpbmQiLCJtYXAiLCJpZCIsIk92ZXJsYXlzUm9vdCIsIk1vdmllc0NvbnRleHQiLCJSZWFjdCIsIkNvbnRlbnQiLCJIb21lUGFnZSIsInBhZ2VNb3ZpZXMiLCJzZXRQYWdlTW92aWVzIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRoZW4iLCJyZXNwb25zZSIs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QUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQmxCLCtDQUFRLENBQUMsRUFBRCxDQUFoQztBQUVBbUIsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RDLG9EQUFBLENBRUksaUZBRkosRUFJR0MsSUFKSCxDQUlRLE1BQU9DLFFBQVAsSUFBb0I7QUFDeEIsWUFBTU4sYUFBYSxDQUFDTSxRQUFRLENBQUNMLElBQVQsQ0FBY00sT0FBZixDQUFuQjtBQUNBTCxhQUFPLENBQUNJLFFBQVEsQ0FBQ0wsSUFBVixDQUFQO0FBQ0QsS0FQSDtBQVFELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFXQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyw4Q0FBRDtBQUFBLDZCQUNFLDhEQUFDLDRDQUFEO0FBQUEsa0JBQ0NGLFVBQVUsQ0FBQ1AsR0FBWCxDQUFlckIsS0FBSyxpQkFDbkIsOERBQUMsbUVBQUQ7QUFFQSxlQUFLLEVBQUVBO0FBRlAsV0FDS0EsS0FBSyxDQUFDc0IsRUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUREO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBLGtCQURGO0FBK0NEOztBQUVELCtEQUFlSyxRQUFmLEU7Ozs7Ozs7Ozs7O0FDMUVBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIEJ1dHRvbnMgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmZ1bmN0aW9uIERlZmF1bHRPdmVybGF5Q29udGVudCh7IGxhYmVsLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgIDxoMT57bGFiZWx9PC9oMT5cclxuICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxCdXR0b25zPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNob3cgZGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbnM+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRPdmVybGF5Q29udGVudFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4OiAxO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxNi41dmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICA+aDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgY29sb3I6ICMzOTNjNDE7XHJcbiAgfVxyXG4gID5oMntcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjNWM1ZTYyO1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbiIsImltcG9ydCBSZWFjdCAgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcydcblxuZnVuY3Rpb24gTW92aWVPdmVybGF5KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW92aWVPdmVybGF5XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOjA7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi10b3A6IC0xMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmAiLCIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmZ1bmN0aW9uIE1vdmllUHJldmlldyh7IG1vdmllLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfT5cclxuICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzE4NS8ke21vdmllLnBvc3Rlcl9wYXRofWB9Lz5cclxuICAgIDxUaXRsZT57bW92aWUudGl0bGV9PC9UaXRsZT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVByZXZpZXdcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvKiBtYXgtaGVpZ2h0OiA0MHZoOyAqL1xyXG4gIGhlaWdodDogNDB2aDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItY29sb3I6ICNmMWYxZjI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YGBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZVNlY3Rpb24oeyBtb3ZpZU5hbWUsIG92ZXJsYXlOb2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVNlY3Rpb25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vdmllT3ZlcmxheSBmcm9tICcuLi9Nb3ZpZU92ZXJsYXknXHJcbmltcG9ydCBNb3ZpZXNDb250ZXh0IGZyb20gJy4uL01vdmllc0NvbnRleHQnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgT3ZlcmxheXNSb290IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbcmVnaXN0ZXJlZE1vdmllcywgc2V0UmVnaXN0ZXJlZE1vdmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCByZWdpc3Rlck1vdmllID0gdXNlQ2FsbGJhY2sobW92aWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PiBbLi4uc3RhdGUsIG1vdmllXSlcclxuICB9LCBbXSlcclxuICBjb25zdCB1bnJlZ2lzdGVyTW92aWUgPSB1c2VDYWxsYmFjayhtb3ZpZU5hbWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PlxyXG4gICAgICBzdGF0ZS5maWx0ZXIobW92aWUgPT4gbW92aWUubW92aWVOYW1lICE9PSBtb3ZpZU5hbWUpXHJcbiAgICApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGdldE1vdmllQnlOYW1lID0gdXNlQ2FsbGJhY2soXHJcbiAgICBtb3ZpZU5hbWUgPT5cclxuICAgICAgcmVnaXN0ZXJlZE1vdmllcy5maW5kKG1vdmllID0+IG1vdmllLm1vdmllTmFtZSA9PT0gbW92aWVOYW1lKSB8fCBudWxsXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB3cmFwcGVyUmVmLFxyXG4gICAgICAgIHJlZ2lzdGVyZWRNb3ZpZXMsXHJcbiAgICAgICAgcmVnaXN0ZXJNb3ZpZSxcclxuICAgICAgICB1bnJlZ2lzdGVyTW92aWUsXHJcbiAgICAgICAgZ2V0TW92aWVCeU5hbWVcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciByZWY9e3dyYXBwZXJSZWZ9PlxyXG4gICAgICAgIDxoMT5UZXN0ZTwvaDE+XHJcbiAgICAgICAgPE92ZXJsYXlzUm9vdD5cclxuICAgICAgICAgIHtyZWdpc3RlcmVkTW92aWVzLm1hcChtb3ZpZSA9PlxyXG4gICAgICAgICAgICA8TW92aWVPdmVybGF5IGtleT17bW92aWUuaWR9Pnttb3ZpZS50aXRsZX08L01vdmllT3ZlcmxheT4pfVxyXG4gICAgICAgIDwvT3ZlcmxheXNSb290PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTW92aWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllc1dyYXBwZXJcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5c1Jvb3QgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNb3ZpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNDb250ZXh0XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW92aWVzV3JhcHBlciB9IGZyb20gJy4vTW92aWVXcmFwcGVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vdmllU2VjdGlvbiB9IGZyb20gJy4vTW92aWVTZWN0aW9uJ1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgRGVmYXVsdE92ZXJsYXlDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGVmYXVsdE92ZXJsYXlDb250ZW50JztcclxuaW1wb3J0IHsgTW92aWVzV3JhcHBlciwgTW92aWVTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29udGVudCwgVGl0bGUgfSBmcm9tICcuL19zdHlsZXMnO1xyXG5pbXBvcnQgTW92aWVQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3JztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtwYWdlTW92aWVzLCBzZXRQYWdlTW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgICczL21vdmllL3VwY29taW5nP2FwaV9rZXk9ZmU2NWY4ZTg0MGUxNWQwNmM1YzAwYmYxMzA4NGRhNzQmbGFuZ3VhZ2U9cHQtQlImcGFnZT0xJyxcclxuICAgICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRQYWdlTW92aWVzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNpbmVtYSBTdGF0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgIHtwYWdlTW92aWVzLm1hcChtb3ZpZT0+XHJcbiAgICAgICAgICA8TW92aWVQcmV2aWV3XHJcbiAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwLyR7bW92aWUucG9zdGVyX3BhdGh9YH1cclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzAlJyB9fT5cclxuICAgICAgICAgICAgPFRpdGxlPnttb3ZpZS50aXRsZX08L1RpdGxlPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICB7LyogPE1vdmllc1dyYXBwZXI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGFnZU1vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1vdmllU2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZT17bW92aWUucG9zdGVyX3BhdGh9XHJcbiAgICAgICAgICAgICAgICBtb3ZpZU5hbWU9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb3ZlcmxheU5vZGU9eyhcclxuICAgICAgICAgICAgICAgICAgPERlZmF1bHRPdmVybGF5Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXttb3ZpZS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bW92aWUub3ZlcnZpZXd9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9Nb3ZpZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb3ZpZXNXcmFwcGVyPiAqL31cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=