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
})([""]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1ggpooc-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1ggpooc-2"
})([""]);

/***/ }),

/***/ "./src/components/Model/ModelSection/index.js":
/*!****************************************************!*\
  !*** ./src/components/Model/ModelSection/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Model/ModelSection/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Model\\ModelSection\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable no-unused-vars */


function ModelSection(_ref) {
  let {
    modelName,
    overlayNode,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["modelName", "overlayNode", "children"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ModelSection);

/***/ }),

/***/ "./src/components/Model/ModelSection/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/Model/ModelSection/styles.js ***!
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
  componentId: "sc-ntztp8-0"
})(["height:100vh;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-ntztp8-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-ntztp8-2"
})([""]);

/***/ }),

/***/ "./src/components/Model/ModelsContext.js":
/*!***********************************************!*\
  !*** ./src/components/Model/ModelsContext.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModelsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();
/* harmony default export */ __webpack_exports__["default"] = (ModelsContext);

/***/ }),

/***/ "./src/components/Model/ModelsWrapper/index.js":
/*!*****************************************************!*\
  !*** ./src/components/Model/ModelsWrapper/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModelsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModelsContext */ "./src/components/Model/ModelsContext.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Model/ModelsWrapper/styles.js");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Model\\ModelsWrapper\\index.js";

/* eslint-disable react-hooks/exhaustive-deps */




function ModelsWrapper({
  children
}) {
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: registeredModels,
    1: setRegisteredModels
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const registerModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(model => {
    setRegisteredModels(state => [...state, model]);
  }, []);
  const unregisterModel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(modelName => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName));
  }, []);
  const getMovieByName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(modelName => registeredModels.find(model => model.mdoelName === modelName) || null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModelsContext__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
    value: {
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getMovieByName
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {
      ref: wrapperRef,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ModelsWrapper);

/***/ }),

/***/ "./src/components/Model/ModelsWrapper/styles.js":
/*!******************************************************!*\
  !*** ./src/components/Model/ModelsWrapper/styles.js ***!
  \******************************************************/
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
  componentId: "sc-p99yhy-0"
})(["height:100vh;scroll-snap-type:y mandatory;overflow-y:scroll;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-p99yhy-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-p99yhy-2"
})([""]);

/***/ }),

/***/ "./src/components/Model/index.js":
/*!***************************************!*\
  !*** ./src/components/Model/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsWrapper": function() { return /* reexport safe */ _ModelsWrapper__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ModelSection": function() { return /* reexport safe */ _ModelSection__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _ModelsWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelsWrapper */ "./src/components/Model/ModelsWrapper/index.js");
/* harmony import */ var _ModelSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelSection */ "./src/components/Model/ModelSection/index.js");



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
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;"]);
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
/* harmony import */ var _components_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Model */ "./src/components/Model/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_styles */ "./src/pages/_styles.js");


var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\pages\\index.js";







function HomePage() {
  const {
    0: pageMovies,
    1: setPageMovies
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
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
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_5__.ModelsWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: pageMovies.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_5__.ModelSection, {
            // className={'colored'}
            backgroundImage: movie.poster_path,
            modelName: movie.title,
            overlayNode: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DefaultOverlayContent__WEBPACK_IMPORTED_MODULE_4__.default, {
              label: movie.title,
              description: movie.overview
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 19
            }, this),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Content, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  maxWidth: '30%'
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_6__.Title, {
                  children: movie.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: movie.overview
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, this)
          }, movie.id, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudC9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbFNlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbFNlY3Rpb24vc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvTW9kZWxzQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vZGVsL01vZGVsc1dyYXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbHNXcmFwcGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL3BhZ2VzL19zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkRlZmF1bHRPdmVybGF5Q29udGVudCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJIZWFkaW5nIiwiQnV0dG9ucyIsIk1vZGVsU2VjdGlvbiIsIm1vZGVsTmFtZSIsIm92ZXJsYXlOb2RlIiwiY2hpbGRyZW4iLCJwcm9wcyIsIk1vZGVsc0NvbnRleHQiLCJSZWFjdCIsIk1vZGVsc1dyYXBwZXIiLCJ3cmFwcGVyUmVmIiwidXNlUmVmIiwicmVnaXN0ZXJlZE1vZGVscyIsInNldFJlZ2lzdGVyZWRNb2RlbHMiLCJ1c2VTdGF0ZSIsInJlZ2lzdGVyTW9kZWwiLCJ1c2VDYWxsYmFjayIsIm1vZGVsIiwic3RhdGUiLCJ1bnJlZ2lzdGVyTW9kZWwiLCJmaWx0ZXIiLCJnZXRNb3ZpZUJ5TmFtZSIsImZpbmQiLCJtZG9lbE5hbWUiLCJDb250ZW50IiwiVGl0bGUiLCJIb21lUGFnZSIsInBhZ2VNb3ZpZXMiLCJzZXRQYWdlTW92aWVzIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInJlc3VsdHMiLCJtYXAiLCJtb3ZpZSIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJvdmVydmlldyIsIm1heFdpZHRoIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EscUJBQVQsQ0FBK0I7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQS9CLEVBQXVEO0FBQ3JELHNCQUNFLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsNENBQUQ7QUFBQSw2QkFDRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0FBRUQsK0RBQWVGLHFCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFFTyxNQUFNRyxTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWI7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLHVFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQWIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pQO0FBQ0E7O0FBRUEsU0FBU0csWUFBVCxPQUFzRTtBQUFBLE1BQWhEO0FBQUVDLGFBQUY7QUFBYUMsZUFBYjtBQUEwQkM7QUFBMUIsR0FBZ0Q7QUFBQSxNQUFUQyxLQUFTOztBQUNwRSxzQkFBTyw4REFBQyw4Q0FBRCxrQ0FBZUEsS0FBZjtBQUFBLGNBQXVCRDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7QUFFRCwrREFBZUgsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFFTyxNQUFNSixTQUFTLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9HQUFmO0FBT0EsTUFBTUMsT0FBTyxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiLEM7Ozs7Ozs7Ozs7Ozs7O0FDVlA7QUFFQSxNQUFNUSxhQUFhLGdCQUFHQywwREFBQSxFQUF0QjtBQUVBLCtEQUFlRCxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNFLGFBQVQsQ0FBdUI7QUFBRUo7QUFBRixDQUF2QixFQUFxQztBQUNuQyxRQUFNSyxVQUFVLEdBQUdDLDZDQUFNLENBQUMsSUFBRCxDQUF6QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxnQkFBRDtBQUFBLE9BQW1CQztBQUFuQixNQUEwQ0MsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQ0EsUUFBTUMsYUFBYSxHQUFHQyxrREFBVyxDQUFDQyxLQUFLLElBQUk7QUFDekNKLHVCQUFtQixDQUFDSyxLQUFLLElBQUksQ0FBQyxHQUFHQSxLQUFKLEVBQVdELEtBQVgsQ0FBVixDQUFuQjtBQUNELEdBRmdDLEVBRTlCLEVBRjhCLENBQWpDO0FBR0EsUUFBTUUsZUFBZSxHQUFHSCxrREFBVyxDQUFDYixTQUFTLElBQUk7QUFDL0NVLHVCQUFtQixDQUFDSyxLQUFLLElBQ3ZCQSxLQUFLLENBQUNFLE1BQU4sQ0FBYUgsS0FBSyxJQUFJQSxLQUFLLENBQUNkLFNBQU4sS0FBb0JBLFNBQTFDLENBRGlCLENBQW5CO0FBR0QsR0FKa0MsRUFJaEMsRUFKZ0MsQ0FBbkM7QUFNQSxRQUFNa0IsY0FBYyxHQUFHTCxrREFBVyxDQUNoQ2IsU0FBUyxJQUNQUyxnQkFBZ0IsQ0FBQ1UsSUFBakIsQ0FBc0JMLEtBQUssSUFBSUEsS0FBSyxDQUFDTSxTQUFOLEtBQW9CcEIsU0FBbkQsS0FBaUUsSUFGbkMsQ0FBbEM7QUFLQSxzQkFDRSw4REFBQyw0REFBRDtBQUNFLFNBQUssRUFBRTtBQUNMTyxnQkFESztBQUVMRSxzQkFGSztBQUdMRyxtQkFISztBQUlMSSxxQkFKSztBQUtMRTtBQUxLLEtBRFQ7QUFBQSwyQkFTRSw4REFBQyw4Q0FBRDtBQUFXLFNBQUcsRUFBRVgsVUFBaEI7QUFBQSxnQkFBNkJMO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFRCwrREFBZUksYUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBRU8sTUFBTVgsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvRUFBZjtBQUtBLE1BQU1DLE9BQU8sR0FBR0QsdUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBYjtBQUNBLE1BQU1FLE9BQU8sR0FBR0YsdUVBQUg7QUFBQTtBQUFBO0FBQUEsUUFBYixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRU8sTUFBTUQsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiO0FBQ0EsTUFBTXlCLE9BQU8sR0FBR3pCLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGtGQUFiO0FBTUEsTUFBTTBCLEtBQUssR0FBRzFCLHNFQUFIO0FBQUE7QUFBQTtBQUFBLFFBQVgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzJCLFFBQVQsR0FBb0I7QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBR2U7QUFBSCxNQUFjZiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUI7QUFFQWdCLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxvREFBQSxDQUVJLGlGQUZKLEVBSUdDLElBSkgsQ0FJUSxNQUFPQyxRQUFQLElBQW9CO0FBQ3hCLFlBQU1MLGFBQWEsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWYsQ0FBbkI7QUFDQU4sYUFBTyxDQUFDSSxRQUFRLENBQUNDLElBQVYsQ0FBUDtBQUNELEtBUEg7QUFRRCxHQVRRLEVBU04sRUFUTSxDQUFUO0FBV0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsOENBQUQ7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQ0dQLFVBQVUsQ0FBQ1MsR0FBWCxDQUFnQkMsS0FBRCxpQkFDZCw4REFBQywyREFBRDtBQUVFO0FBQ0EsMkJBQWUsRUFBRUEsS0FBSyxDQUFDQyxXQUh6QjtBQUlFLHFCQUFTLEVBQUVELEtBQUssQ0FBQ0UsS0FKbkI7QUFLRSx1QkFBVyxlQUNULDhEQUFDLHNFQUFEO0FBQ0UsbUJBQUssRUFBRUYsS0FBSyxDQUFDRSxLQURmO0FBRUUseUJBQVcsRUFBRUYsS0FBSyxDQUFDRztBQUZyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5KO0FBQUEsbUNBWUUsOERBQUMsNENBQUQ7QUFBQSxzQ0FDRTtBQUFBLHVDQUNFO0FBQ0UscUJBQUcsRUFBRyxtQ0FBa0NILEtBQUssQ0FBQ0MsV0FBWSxFQUQ1RDtBQUVFLHFCQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQU9FO0FBQUsscUJBQUssRUFBRTtBQUFFRywwQkFBUSxFQUFFO0FBQVosaUJBQVo7QUFBQSx3Q0FDRSw4REFBQywwQ0FBRDtBQUFBLDRCQUFRSixLQUFLLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixlQUVFO0FBQUEseUNBQ0U7QUFBQSw4QkFBSUYsS0FBSyxDQUFDRztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRixhQUNPSCxLQUFLLENBQUNLLEVBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUEwQ0Q7O0FBRUQsK0RBQWVoQixRQUFmLEU7Ozs7Ozs7Ozs7O0FDbEVBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIEJ1dHRvbnMgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmZ1bmN0aW9uIERlZmF1bHRPdmVybGF5Q29udGVudCh7IGxhYmVsLCBkZXNjcmlwdGlvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgIDxoMT57bGFiZWx9PC9oMT5cclxuICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XHJcbiAgICAgIDwvSGVhZGluZz5cclxuXHJcbiAgICAgIDxCdXR0b25zPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPlNob3cgZGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICA8L0J1dHRvbnM+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRPdmVybGF5Q29udGVudFxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmZ1bmN0aW9uIE1vZGVsU2VjdGlvbih7IG1vZGVsTmFtZSwgb3ZlcmxheU5vZGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsU2VjdGlvblxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBjb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBgXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IE1vZGVsc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGVsc0NvbnRleHRcclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNb2RlbHNDb250ZXh0IGZyb20gJy4uL01vZGVsc0NvbnRleHQnXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuZnVuY3Rpb24gTW9kZWxzV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCB3cmFwcGVyUmVmID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgW3JlZ2lzdGVyZWRNb2RlbHMsIHNldFJlZ2lzdGVyZWRNb2RlbHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgcmVnaXN0ZXJNb2RlbCA9IHVzZUNhbGxiYWNrKG1vZGVsID0+IHtcclxuICAgIHNldFJlZ2lzdGVyZWRNb2RlbHMoc3RhdGUgPT4gWy4uLnN0YXRlLCBtb2RlbF0pXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgdW5yZWdpc3Rlck1vZGVsID0gdXNlQ2FsbGJhY2sobW9kZWxOYW1lID0+IHtcclxuICAgIHNldFJlZ2lzdGVyZWRNb2RlbHMoc3RhdGUgPT5cclxuICAgICAgc3RhdGUuZmlsdGVyKG1vZGVsID0+IG1vZGVsLm1vZGVsTmFtZSAhPT0gbW9kZWxOYW1lKVxyXG4gICAgKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBnZXRNb3ZpZUJ5TmFtZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgbW9kZWxOYW1lID0+XHJcbiAgICAgIHJlZ2lzdGVyZWRNb2RlbHMuZmluZChtb2RlbCA9PiBtb2RlbC5tZG9lbE5hbWUgPT09IG1vZGVsTmFtZSkgfHwgbnVsbFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RlbHNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgd3JhcHBlclJlZixcclxuICAgICAgICByZWdpc3RlcmVkTW9kZWxzLFxyXG4gICAgICAgIHJlZ2lzdGVyTW9kZWwsXHJcbiAgICAgICAgdW5yZWdpc3Rlck1vZGVsLFxyXG4gICAgICAgIGdldE1vdmllQnlOYW1lXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxDb250YWluZXIgcmVmPXt3cmFwcGVyUmVmfT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICA8L01vZGVsc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbHNXcmFwcGVyXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIE1vZGVsc1dyYXBwZXIgfSBmcm9tICcuL01vZGVsc1dyYXBwZXInXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kZWxTZWN0aW9uIH0gZnJvbSAnLi9Nb2RlbFNlY3Rpb24nXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBjb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgYFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IERlZmF1bHRPdmVybGF5Q29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL0RlZmF1bHRPdmVybGF5Q29udGVudCc7XHJcbmltcG9ydCB7IE1vZGVsc1dyYXBwZXIsIE1vZGVsU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTW9kZWwnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQsIFRpdGxlIH0gZnJvbSAnLi9fc3R5bGVzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IFtwYWdlTW92aWVzLCBzZXRQYWdlTW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgJzMvbW92aWUvdXBjb21pbmc/YXBpX2tleT1mZTY1ZjhlODQwZTE1ZDA2YzVjMDBiZjEzMDg0ZGE3NCZsYW5ndWFnZT1wdC1CUiZwYWdlPTEnLFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldFBhZ2VNb3ZpZXMocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2luZW1hIFN0YXRpb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPE1vZGVsc1dyYXBwZXI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7cGFnZU1vdmllcy5tYXAoKG1vdmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1vZGVsU2VjdGlvblxyXG4gICAgICAgICAgICAgICAga2V5PXttb3ZpZS5pZH1cclxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17J2NvbG9yZWQnfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPXttb3ZpZS5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICAgICAgIG1vZGVsTmFtZT17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Tm9kZT17KFxyXG4gICAgICAgICAgICAgICAgICA8RGVmYXVsdE92ZXJsYXlDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttb3ZpZS5vdmVydmlld31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke21vdmllLnBvc3Rlcl9wYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGl0bGU+e21vdmllLnRpdGxlfTwvVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICAgIDwvTW9kZWxTZWN0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTW9kZWxzV3JhcHBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=