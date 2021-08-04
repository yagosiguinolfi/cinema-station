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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MoviePreview/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MoviePreview\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/button-has-type */

/* eslint-disable no-undef */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable no-unused-vars */



function MoviePreview(_ref) {
  let {
    movie
  } = _ref,
      props = _objectWithoutProperties(_ref, ["movie"]);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(); // function openDetails() {
  //   console.log('clicou router')
  //   router.push('/details', movie.title, { getInitialProps: { movie } })
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      alt: "",
      src: `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {
      children: movie.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: () => router.push('/details'),
      children: "Show details"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
} // const Link = ({ children, href }) => {
//   
//   return <a
//     href="#"
//     onClick={(e) => {
//       e.preventDefault()
//       router.push(href)
//     }}
//   >
//     {children}
//     <style jsx>{`
//         a {
//           margin-right: 10px;
//         }
//       `}</style>
//   </a>
// }


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
})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;height:40vh;width:300px;border-style:solid;border-width:2px;border-color:#f1f1f2;border-radius:10px;margin-bottom:10px;"]);
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
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Content, {
        children: pageMovies.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movie_MoviePreview__WEBPACK_IMPORTED_MODULE_7__.default, {
          movie: movie
        }, movie.id, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZU92ZXJsYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZU92ZXJsYXkvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllU2VjdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllU2VjdGlvbi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVdyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVdyYXBwZXIvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL3BhZ2VzL19zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJEZWZhdWx0T3ZlcmxheUNvbnRlbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiSGVhZGluZyIsIkJ1dHRvbnMiLCJNb3ZpZU92ZXJsYXkiLCJjaGlsZHJlbiIsIk1vdmllUHJldmlldyIsIm1vdmllIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwicHVzaCIsIlRpdGxlIiwiTW92aWVTZWN0aW9uIiwibW92aWVOYW1lIiwib3ZlcmxheU5vZGUiLCJNb3ZpZXNXcmFwcGVyIiwid3JhcHBlclJlZiIsInVzZVJlZiIsInJlZ2lzdGVyZWRNb3ZpZXMiLCJzZXRSZWdpc3RlcmVkTW92aWVzIiwidXNlU3RhdGUiLCJyZWdpc3Rlck1vdmllIiwidXNlQ2FsbGJhY2siLCJzdGF0ZSIsInVucmVnaXN0ZXJNb3ZpZSIsImZpbHRlciIsImdldE1vdmllQnlOYW1lIiwiZmluZCIsIm1hcCIsImlkIiwiT3ZlcmxheXNSb290IiwiTW92aWVzQ29udGV4dCIsIlJlYWN0IiwiQ29udGVudCIsIkhvbWVQYWdlIiwicGFnZU1vdmllcyIsInNldFBhZ2VNb3ZpZXMiLCJkYXRhIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwicmVzdWx0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQjtBQUFFQyxPQUFGO0FBQVNDO0FBQVQsQ0FBL0IsRUFBdUQ7QUFDckQsc0JBQ0UsOERBQUMsOENBQUQ7QUFBQSw0QkFDRSw4REFBQyw0Q0FBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSw4REFBQyw0Q0FBRDtBQUFBLDZCQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7QUFFRCwrREFBZUYscUJBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUVPLE1BQU1HLFNBQVMsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0ZBQWY7QUFNQSxNQUFNQyxPQUFPLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFMQUFiO0FBaUJBLE1BQU1FLE9BQU8sR0FBR0YsdUVBQUg7QUFBQTtBQUFBO0FBQUEscUNBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCUDtBQUNBOztBQUVBLFNBQVNHLFlBQVQsQ0FBc0I7QUFBRUM7QUFBRixDQUF0QixFQUFvQztBQUNsQyxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLGNBQ0dBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVELFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUVPLE1B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O0FBQUE7QUFBQSxnQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQStDRDs7QUFFRCwrREFBZUssUUFBZixFOzs7Ozs7Ozs7OztBQzNFQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBIZWFkaW5nLCBCdXR0b25zIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBEZWZhdWx0T3ZlcmxheUNvbnRlbnQoeyBsYWJlbCwgZGVzY3JpcHRpb24gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGluZz5cclxuICAgICAgICA8aDE+e2xhYmVsfTwvaDE+XHJcbiAgICAgICAgPGgyPntkZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICA8L0hlYWRpbmc+XHJcblxyXG4gICAgICA8QnV0dG9ucz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5TaG93IGRldGFpbHM8L2J1dHRvbj5cclxuICAgICAgPC9CdXR0b25zPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0T3ZlcmxheUNvbnRlbnRcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleDogMTtcclxuYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTYuNXZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgPmgxIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAjMzkzYzQxO1xyXG4gIH1cclxuICA+aDJ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzVjNWU2MjtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG4iLCJpbXBvcnQgUmVhY3QgIGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmZ1bmN0aW9uIE1vdmllT3ZlcmxheSh7IGNoaWxkcmVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllT3ZlcmxheVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDowO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAtMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gIiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWlzLXZhbGlkICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2J1dHRvbi1oYXMtdHlwZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBUaXRsZSB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuZnVuY3Rpb24gTW92aWVQcmV2aWV3KHsgbW92aWUsIC4uLnByb3BzIH0pIHtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAvLyBmdW5jdGlvbiBvcGVuRGV0YWlscygpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdjbGljb3Ugcm91dGVyJylcclxuICAvLyAgIHJvdXRlci5wdXNoKCcvZGV0YWlscycsIG1vdmllLnRpdGxlLCB7IGdldEluaXRpYWxQcm9wczogeyBtb3ZpZSB9IH0pXHJcbiAgLy8gfVxyXG5cclxuXHJcblxyXG4gIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+XHJcbiAgICA8aW1nIGFsdD1cIlwiIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cxODUvJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfSAvPlxyXG4gICAgPFRpdGxlPnttb3ZpZS50aXRsZX08L1RpdGxlPlxyXG4gICAgey8qIDxMaW5rIGhyZWY9XCIvZGV0YWlsc1wiPiAqL31cclxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9kZXRhaWxzJyl9PlNob3cgZGV0YWlsczwvYnV0dG9uPlxyXG4gICAgey8qIDwvTGluaz4gKi99XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuXHJcbi8vIGNvbnN0IExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiB7XHJcbi8vICAgXHJcbi8vICAgcmV0dXJuIDxhXHJcbi8vICAgICBocmVmPVwiI1wiXHJcbi8vICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgICAgcm91dGVyLnB1c2goaHJlZilcclxuLy8gICAgIH19XHJcbi8vICAgPlxyXG4vLyAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPHN0eWxlIGpzeD57YFxyXG4vLyAgICAgICAgIGEge1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgYH08L3N0eWxlPlxyXG4vLyAgIDwvYT5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVQcmV2aWV3XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLyogbWF4LWhlaWdodDogNDB2aDsgKi9cclxuICBoZWlnaHQ6IDQwdmg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjFmMWYyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YGBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZVNlY3Rpb24oeyBtb3ZpZU5hbWUsIG92ZXJsYXlOb2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVNlY3Rpb25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vdmllT3ZlcmxheSBmcm9tICcuLi9Nb3ZpZU92ZXJsYXknXHJcbmltcG9ydCBNb3ZpZXNDb250ZXh0IGZyb20gJy4uL01vdmllc0NvbnRleHQnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgT3ZlcmxheXNSb290IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbcmVnaXN0ZXJlZE1vdmllcywgc2V0UmVnaXN0ZXJlZE1vdmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCByZWdpc3Rlck1vdmllID0gdXNlQ2FsbGJhY2sobW92aWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PiBbLi4uc3RhdGUsIG1vdmllXSlcclxuICB9LCBbXSlcclxuICBjb25zdCB1bnJlZ2lzdGVyTW92aWUgPSB1c2VDYWxsYmFjayhtb3ZpZU5hbWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PlxyXG4gICAgICBzdGF0ZS5maWx0ZXIobW92aWUgPT4gbW92aWUubW92aWVOYW1lICE9PSBtb3ZpZU5hbWUpXHJcbiAgICApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGdldE1vdmllQnlOYW1lID0gdXNlQ2FsbGJhY2soXHJcbiAgICBtb3ZpZU5hbWUgPT5cclxuICAgICAgcmVnaXN0ZXJlZE1vdmllcy5maW5kKG1vdmllID0+IG1vdmllLm1vdmllTmFtZSA9PT0gbW92aWVOYW1lKSB8fCBudWxsXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB3cmFwcGVyUmVmLFxyXG4gICAgICAgIHJlZ2lzdGVyZWRNb3ZpZXMsXHJcbiAgICAgICAgcmVnaXN0ZXJNb3ZpZSxcclxuICAgICAgICB1bnJlZ2lzdGVyTW92aWUsXHJcbiAgICAgICAgZ2V0TW92aWVCeU5hbWVcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciByZWY9e3dyYXBwZXJSZWZ9PlxyXG4gICAgICAgIDxoMT5UZXN0ZTwvaDE+XHJcbiAgICAgICAgPE92ZXJsYXlzUm9vdD5cclxuICAgICAgICAgIHtyZWdpc3RlcmVkTW92aWVzLm1hcChtb3ZpZSA9PlxyXG4gICAgICAgICAgICA8TW92aWVPdmVybGF5IGtleT17bW92aWUuaWR9Pnttb3ZpZS50aXRsZX08L01vdmllT3ZlcmxheT4pfVxyXG4gICAgICAgIDwvT3ZlcmxheXNSb290PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTW92aWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllc1dyYXBwZXJcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5c1Jvb3QgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNb3ZpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNDb250ZXh0XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW92aWVzV3JhcHBlciB9IGZyb20gJy4vTW92aWVXcmFwcGVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vdmllU2VjdGlvbiB9IGZyb20gJy4vTW92aWVTZWN0aW9uJ1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgRGVmYXVsdE92ZXJsYXlDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGVmYXVsdE92ZXJsYXlDb250ZW50JztcclxuaW1wb3J0IHsgTW92aWVzV3JhcHBlciwgTW92aWVTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Nb3ZpZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQ29udGVudCwgVGl0bGUgfSBmcm9tICcuL19zdHlsZXMnO1xyXG5pbXBvcnQgTW92aWVQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWUvTW92aWVQcmV2aWV3JztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtwYWdlTW92aWVzLCBzZXRQYWdlTW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgICczL21vdmllL3VwY29taW5nP2FwaV9rZXk9ZmU2NWY4ZTg0MGUxNWQwNmM1YzAwYmYxMzA4NGRhNzQmbGFuZ3VhZ2U9cHQtQlImcGFnZT0xJyxcclxuICAgICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRQYWdlTW92aWVzKHJlc3BvbnNlLmRhdGEucmVzdWx0cyk7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DaW5lbWEgU3RhdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgIHtwYWdlTW92aWVzLm1hcChtb3ZpZSA9PlxyXG4gICAgICAgICAgICA8TW92aWVQcmV2aWV3XHJcbiAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICBtb3ZpZT17bW92aWV9XHJcbiAgICAgICAgICAgIC8+KX1cclxuICAgICAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLnBvc3Rlcl9wYXRofWB9XHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXhXaWR0aDogJzMwJScgfX0+XHJcbiAgICAgICAgICAgIDxUaXRsZT57bW92aWUudGl0bGV9PC9UaXRsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cD57bW92aWUub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgey8qIDxNb3ZpZXNXcmFwcGVyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge3BhZ2VNb3ZpZXMubWFwKChtb3ZpZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNb3ZpZVNlY3Rpb25cclxuICAgICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U9e21vdmllLnBvc3Rlcl9wYXRofVxyXG4gICAgICAgICAgICAgICAgbW92aWVOYW1lPXttb3ZpZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIG92ZXJsYXlOb2RlPXsoXHJcbiAgICAgICAgICAgICAgICAgIDxEZWZhdWx0T3ZlcmxheUNvbnRlbnRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e21vdmllLm92ZXJ2aWV3fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvTW92aWVTZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW92aWVzV3JhcHBlcj4gKi99XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==