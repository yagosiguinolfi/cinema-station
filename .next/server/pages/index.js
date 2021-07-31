(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/DefaultContent/index.js":
/*!********************************************!*\
  !*** ./components/DefaultContent/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/DefaultContent/styles.js");

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\components\\DefaultContent\\index.js";


function DefaultContent({
  label,
  description
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Buttons, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Show details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DefaultContent);

/***/ }),

/***/ "./components/DefaultContent/styles.js":
/*!*********************************************!*\
  !*** ./components/DefaultContent/styles.js ***!
  \*********************************************/
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

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const Heading = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const Buttons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;

/***/ }),

/***/ "./components/Model/ModelSection/index.js":
/*!************************************************!*\
  !*** ./components/Model/ModelSection/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/Model/ModelSection/styles.js");

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\components\\Model\\ModelSection\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



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
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ModelSection);

/***/ }),

/***/ "./components/Model/ModelSection/styles.js":
/*!*************************************************!*\
  !*** ./components/Model/ModelSection/styles.js ***!
  \*************************************************/
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

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const Heading = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;
const Buttons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

`;

/***/ }),

/***/ "./components/Model/ModelsWrapper/index.js":
/*!*************************************************!*\
  !*** ./components/Model/ModelsWrapper/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\components\\Model\\ModelsWrapper\\index.js";


function ModelsWrapper({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ModelsWrapper);

/***/ }),

/***/ "./components/Model/index.js":
/*!***********************************!*\
  !*** ./components/Model/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelsWrapper": function() { return /* reexport safe */ _ModelsWrapper__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "ModelSection": function() { return /* reexport safe */ _ModelSection__WEBPACK_IMPORTED_MODULE_1__.default; }
/* harmony export */ });
/* harmony import */ var _ModelsWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelsWrapper */ "./components/Model/ModelsWrapper/index.js");
/* harmony import */ var _ModelSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModelSection */ "./components/Model/ModelSection/index.js");



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DefaultContent */ "./components/DefaultContent/index.js");
/* harmony import */ var _components_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Model */ "./components/Model/index.js");
/* harmony import */ var _public_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/GlobalStyles */ "./public/styles/GlobalStyles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./pages/styles.js");


var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\pages\\index.js";






function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cinema Station"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelsWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [["Filme 1", "Filme 2", "Filme 3", "Filme 4", "Filme 5", "Filme 6", "Filme 7"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelSection, {
            modelName: "Model One",
            overlayNode: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__.default, {
              label: "Model One",
              description: "Order online for delivery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
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

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)``;
const Heading = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)``;
const Buttons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)``;

/***/ }),

/***/ "./public/styles/GlobalStyles.js":
/*!***************************************!*\
  !*** ./public/styles/GlobalStyles.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyles": function() { return /* binding */ GlobalStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input, button {
        font-family: Roboto, Ubuntu, sans-serif;
    }

    .colored:nth-child(1) {
        background: #f1ffe7;
    }
    .colored:nth-child(2) {
        background: #dfffd9;
    }
    .colored:nth-child(3) {
        background: #cdfeca;
    }
    .colored:nth-child(4) {
        background: #bbfebb;
    }
    .colored:nth-child(5) {
        background: #a9fdac;
    }
    .colored:nth-child(6) {
        background: #90f29c;
    }
    .colored:nth-child(7) {
        background: #77e68c;
    }

`;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL2NvbXBvbmVudHMvRGVmYXVsdENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9jb21wb25lbnRzL0RlZmF1bHRDb250ZW50L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL2NvbXBvbmVudHMvTW9kZWwvTW9kZWxTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vY29tcG9uZW50cy9Nb2RlbC9Nb2RlbFNlY3Rpb24vc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vY29tcG9uZW50cy9Nb2RlbC9Nb2RlbHNXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vY29tcG9uZW50cy9Nb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vcGFnZXMvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vcHVibGljL3N0eWxlcy9HbG9iYWxTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRGVmYXVsdENvbnRlbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiSGVhZGluZyIsIkJ1dHRvbnMiLCJNb2RlbFNlY3Rpb24iLCJtb2RlbE5hbWUiLCJvdmVybGF5Tm9kZSIsImNoaWxkcmVuIiwicHJvcHMiLCJNb2RlbHNXcmFwcGVyIiwiSG9tZVBhZ2UiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLGNBQVQsQ0FBeUI7QUFBQ0MsT0FBRDtBQUFRQztBQUFSLENBQXpCLEVBQStDO0FBQzdDLHNCQUNBLDhEQUFDLDhDQUFEO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsa0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUsOERBQUMsNENBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQVlEOztBQUVELCtEQUFlRixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFHTyxNQUFNRyxTQUFTLEdBQUdDLDhEQUFXO0FBQ3BDO0FBQ0EsQ0FGTztBQUdBLE1BQU1DLE9BQU8sR0FBR0QsOERBQVc7QUFDbEM7QUFDQSxDQUZPO0FBR0EsTUFBTUUsT0FBTyxHQUFHRiw4REFBVztBQUNsQztBQUNBLENBRk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RQOztBQUVBLFNBQVNHLFlBQVQsT0FBc0U7QUFBQSxNQUFoRDtBQUFFQyxhQUFGO0FBQWFDLGVBQWI7QUFBMEJDO0FBQTFCLEdBQWdEO0FBQUEsTUFBVEMsS0FBUzs7QUFDcEUsc0JBQU8sOERBQUMsOENBQUQsa0NBQWVBLEtBQWY7QUFBQSxjQUF1QkQ7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVILFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRU8sTUFBTUosU0FBUyxHQUFHQyw4REFBVztBQUNwQztBQUNBLENBRk87QUFHQSxNQUFNQyxPQUFPLEdBQUdELDhEQUFXO0FBQ2xDO0FBQ0EsQ0FGTztBQUdBLE1BQU1FLE9BQU8sR0FBR0YsOERBQVc7QUFDbEM7QUFDQSxDQUZPLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQOztBQUVBLFNBQVNRLGFBQVQsQ0FBd0I7QUFBQ0Y7QUFBRCxDQUF4QixFQUFvQztBQUNsQyxzQkFBTyw4REFBQyw0Q0FBRDtBQUFBLGNBQVlBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVFLGFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyw4Q0FBRDtBQUFBLDZCQUNFLDhEQUFDLDREQUFEO0FBQUEsK0JBQ0U7QUFBQSxxQkFDRyxDQUNDLFNBREQsRUFFQyxTQUZELEVBR0MsU0FIRCxFQUlDLFNBSkQsRUFLQyxTQUxELEVBTUMsU0FORCxFQU9DLFNBUEQsQ0FESCxlQVVFLDhEQUFDLDJEQUFEO0FBQ0UscUJBQVMsRUFBQyxXQURaO0FBRUUsdUJBQVcsZUFDVCw4REFBQywrREFBRDtBQUNFLG1CQUFLLEVBQUMsV0FEUjtBQUVFLHlCQUFXLEVBQUM7QUFGZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBNEJFLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QkY7QUFBQSxrQkFERjtBQWdDRDs7QUFFRCwrREFBZUEsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBRU8sTUFBTVYsU0FBUyxHQUFHQyw4REFBVyxFQUE3QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0QsOERBQVcsRUFBM0I7QUFDQSxNQUFNRSxPQUFPLEdBQUdGLDhEQUFXLEVBQTNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlA7QUFFTyxNQUFNVSxZQUFZLEdBQUdDLGdFQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FqQ08sQzs7Ozs7Ozs7Ozs7QUNGUCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGFpbmVyLCBIZWFkaW5nLCBCdXR0b25zfSBmcm9tIFwiLi9zdHlsZXNcIlxyXG5cclxuZnVuY3Rpb24gRGVmYXVsdENvbnRlbnQgKHtsYWJlbCwgZGVzY3JpcHRpb259KSB7XHJcbiAgcmV0dXJuIChcclxuICA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRpbmc+XHJcbiAgICAgIDxoMT57bGFiZWx9PC9oMT5cclxuICAgICAgPGgyPntkZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgPC9IZWFkaW5nPlxyXG5cclxuICAgIDxCdXR0b25zPlxyXG4gICAgICA8YnV0dG9uPlNob3cgZGV0YWlsczwvYnV0dG9uPlxyXG4gICAgPC9CdXR0b25zPlxyXG4gIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRDb250ZW50IiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuXHJcbmA7IiwiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBNb2RlbFNlY3Rpb24oeyBtb2RlbE5hbWUsIG92ZXJsYXlOb2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVyPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kZWxTZWN0aW9uO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgXHJcblxyXG5gO1xyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcblxyXG5gOyIsImltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBNb2RlbHNXcmFwcGVyICh7Y2hpbGRyZW59KSB7XHJcbiAgcmV0dXJuIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbHNXcmFwcGVyIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbHNXcmFwcGVyIH0gZnJvbSBcIi4vTW9kZWxzV3JhcHBlclwiO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGVsU2VjdGlvbiB9IGZyb20gXCIuL01vZGVsU2VjdGlvblwiO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBEZWZhdWx0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9EZWZhdWx0Q29udGVudFwiO1xyXG5pbXBvcnQgeyBNb2RlbHNXcmFwcGVyLCBNb2RlbFNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tIFwiLi4vcHVibGljL3N0eWxlcy9HbG9iYWxTdHlsZXNcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNpbmVtYSBTdGF0aW9uPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxNb2RlbHNXcmFwcGVyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICBcIkZpbG1lIDFcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDJcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDNcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDRcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDVcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDZcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDdcIixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPE1vZGVsU2VjdGlvblxyXG4gICAgICAgICAgICAgIG1vZGVsTmFtZT1cIk1vZGVsIE9uZVwiXHJcbiAgICAgICAgICAgICAgb3ZlcmxheU5vZGU9e1xyXG4gICAgICAgICAgICAgICAgPERlZmF1bHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9kZWwgT25lXCJcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPcmRlciBvbmxpbmUgZm9yIGRlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9Nb2RlbFNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGVsc1dyYXBwZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YGA7XHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBgO1xyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAgICp7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAqLCBpbnB1dCwgYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBVYnVudHUsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmZmU3O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGZmZmQ5O1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2RmZWNhO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmJmZWJiO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDUpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYTlmZGFjO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDYpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOTBmMjljO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yZWQ6bnRoLWNoaWxkKDcpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNzdlNjhjO1xyXG4gICAgfVxyXG5cclxuYDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==