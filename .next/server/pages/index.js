(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/DefaultContent/index.js":
/*!************************************************!*\
  !*** ./src/components/DefaultContent/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/DefaultContent/styles.js");

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\src\\components\\DefaultContent\\index.js";


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
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Buttons, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Show details"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (DefaultContent);

/***/ }),

/***/ "./src/components/DefaultContent/styles.js":
/*!*************************************************!*\
  !*** ./src/components/DefaultContent/styles.js ***!
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

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1vpbrda-0"
})([""]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1vpbrda-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1vpbrda-2"
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

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\src\\components\\Model\\ModelSection\\index.js";

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
})(["height:100vh;scroll-snap-align:start;"]);
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

var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\src\\components\\Model\\ModelsWrapper\\index.js";




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
    setRegisteredModels(state => state.filter(model => model.modelName != mdoelName));
  }, []);
  const getMovieByName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(modelName => {
    return registeredModel.find(model => model.mdoelName === modelName) || null;
  });
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
      lineNumber: 31,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DefaultContent */ "./src/components/DefaultContent/index.js");
/* harmony import */ var _components_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Model */ "./src/components/Model/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/pages/styles.js");


var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\src\\pages\\index.js";





function HomePage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cinema Station"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelsWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: ['Filme 1', 'Filme 2', 'Filme 3', 'Filme 4', 'Filme 5', 'Filme 6', 'Filme 7'].map(modelName => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelSection, {
            className: 'colored',
            modelName: modelName,
            overlayNode: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__.default, {
              label: modelName,
              description: "Order online for delivery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 19
            }, this)
          }, modelName, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this)
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
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/pages/styles.js":
/*!*****************************!*\
  !*** ./src/pages/styles.js ***!
  \*****************************/
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
  componentId: "sc-1dery8-0"
})([""]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1dery8-1"
})([""]);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1dery8-2"
})([""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL0RlZmF1bHRDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvRGVmYXVsdENvbnRlbnQvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvTW9kZWxTZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvTW9kZWxTZWN0aW9uL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vZGVsL01vZGVsc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9Nb2RlbHNXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW9kZWwvTW9kZWxzV3JhcHBlci9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9wYWdlcy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRGVmYXVsdENvbnRlbnQiLCJsYWJlbCIsImRlc2NyaXB0aW9uIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiSGVhZGluZyIsIkJ1dHRvbnMiLCJNb2RlbFNlY3Rpb24iLCJtb2RlbE5hbWUiLCJvdmVybGF5Tm9kZSIsImNoaWxkcmVuIiwicHJvcHMiLCJNb2RlbHNDb250ZXh0IiwiUmVhY3QiLCJNb2RlbHNXcmFwcGVyIiwid3JhcHBlclJlZiIsInVzZVJlZiIsInJlZ2lzdGVyZWRNb2RlbHMiLCJzZXRSZWdpc3RlcmVkTW9kZWxzIiwidXNlU3RhdGUiLCJyZWdpc3Rlck1vZGVsIiwidXNlQ2FsbGJhY2siLCJtb2RlbCIsInN0YXRlIiwidW5yZWdpc3Rlck1vZGVsIiwiZmlsdGVyIiwibWRvZWxOYW1lIiwiZ2V0TW92aWVCeU5hbWUiLCJyZWdpc3RlcmVkTW9kZWwiLCJmaW5kIiwiSG9tZVBhZ2UiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUF4QixFQUFnRDtBQUM5QyxzQkFDRSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNFLDhEQUFDLDRDQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLDhEQUFDLDRDQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7QUFFRCwrREFBZUYsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBR08sTUFBTUcsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBR0EsTUFBTUMsT0FB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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUsOERBQUMsOENBQUQ7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBLCtCQUNFO0FBQUEsb0JBQ0csQ0FDQyxTQURELEVBRUMsU0FGRCxFQUdDLFNBSEQsRUFJQyxTQUpELEVBS0MsU0FMRCxFQU1DLFNBTkQsRUFPQyxTQVBELEVBUUNDLEdBUkQsQ0FRS3ZCLFNBQVMsaUJBQ2IsOERBQUMsMkRBQUQ7QUFFRSxxQkFBUyxFQUFFLFNBRmI7QUFHRSxxQkFBUyxFQUFFQSxTQUhiO0FBSUUsdUJBQVcsZUFDVCw4REFBQywrREFBRDtBQUNFLG1CQUFLLEVBQUVBLFNBRFQ7QUFFRSx5QkFBVyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKLGFBQ09BLFNBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFrQ0Q7O0FBRUQsK0RBQWVzQixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFFTyxNQUFNM0IsU0FBUyxHQUFHQyx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiO0FBQ0EsTUFBTUUsT0FBTyxHQUFHRix1RUFBSDtBQUFBO0FBQUE7QUFBQSxRQUFiLEM7Ozs7Ozs7Ozs7O0FDSlAsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEhlYWRpbmcsIEJ1dHRvbnMgfSBmcm9tICcuL3N0eWxlcydcblxuZnVuY3Rpb24gRGVmYXVsdENvbnRlbnQoeyBsYWJlbCwgZGVzY3JpcHRpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGluZz5cbiAgICAgICAgPGgxPntsYWJlbH08L2gxPlxuICAgICAgICA8aDI+e2Rlc2NyaXB0aW9ufTwvaDI+XG4gICAgICA8L0hlYWRpbmc+XG5cbiAgICAgIDxCdXR0b25zPlxuICAgICAgICA8YnV0dG9uPlNob3cgZGV0YWlsczwvYnV0dG9uPlxuICAgICAgPC9CdXR0b25zPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRDb250ZW50XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG5cclxuYDsiLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcydcblxuZnVuY3Rpb24gTW9kZWxTZWN0aW9uKHsgbW9kZWxOYW1lLCBvdmVybGF5Tm9kZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfT57Y2hpbGRyZW59PC9Db250YWluZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsU2VjdGlvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbmBcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkLmRpdmBgXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBNb2RlbHNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsc0NvbnRleHRcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kZWxzQ29udGV4dCBmcm9tICcuLi9Nb2RlbHNDb250ZXh0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmZ1bmN0aW9uIE1vZGVsc1dyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbClcbiAgY29uc3QgW3JlZ2lzdGVyZWRNb2RlbHMsIHNldFJlZ2lzdGVyZWRNb2RlbHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IHJlZ2lzdGVyTW9kZWwgPSB1c2VDYWxsYmFjayhtb2RlbCA9PiB7XG4gICAgc2V0UmVnaXN0ZXJlZE1vZGVscyhzdGF0ZSA9PiBbLi4uc3RhdGUsIG1vZGVsXSlcbiAgfSwgW10pXG4gIGNvbnN0IHVucmVnaXN0ZXJNb2RlbCA9IHVzZUNhbGxiYWNrKG1vZGVsTmFtZSA9PiB7XG4gICAgc2V0UmVnaXN0ZXJlZE1vZGVscyhzdGF0ZSA9PlxuICAgICAgc3RhdGUuZmlsdGVyKG1vZGVsID0+IG1vZGVsLm1vZGVsTmFtZSAhPSBtZG9lbE5hbWUpXG4gICAgKVxuICB9LCBbXSlcblxuICBjb25zdCBnZXRNb3ZpZUJ5TmFtZSA9IHVzZUNhbGxiYWNrKG1vZGVsTmFtZSA9PiB7XG4gICAgcmV0dXJuIHJlZ2lzdGVyZWRNb2RlbC5maW5kKG1vZGVsID0+IG1vZGVsLm1kb2VsTmFtZSA9PT0gbW9kZWxOYW1lKSB8fCBudWxsXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8TW9kZWxzQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgd3JhcHBlclJlZixcbiAgICAgICAgcmVnaXN0ZXJlZE1vZGVscyxcbiAgICAgICAgcmVnaXN0ZXJNb2RlbCxcbiAgICAgICAgdW5yZWdpc3Rlck1vZGVsLFxuICAgICAgICBnZXRNb3ZpZUJ5TmFtZSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciByZWY9e3dyYXBwZXJSZWZ9PntjaGlsZHJlbn08L0NvbnRhaW5lcj5cbiAgICA8L01vZGVsc0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWxzV3JhcHBlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5gXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YGBcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kZWxzV3JhcHBlciB9IGZyb20gXCIuL01vZGVsc1dyYXBwZXJcIjtcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RlbFNlY3Rpb24gfSBmcm9tIFwiLi9Nb2RlbFNlY3Rpb25cIjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IERlZmF1bHRDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGVmYXVsdENvbnRlbnQnXG5pbXBvcnQgeyBNb2RlbHNXcmFwcGVyLCBNb2RlbFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL01vZGVsJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNpbmVtYSBTdGF0aW9uPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxNb2RlbHNXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAnRmlsbWUgMScsXG4gICAgICAgICAgICAgICdGaWxtZSAyJyxcbiAgICAgICAgICAgICAgJ0ZpbG1lIDMnLFxuICAgICAgICAgICAgICAnRmlsbWUgNCcsXG4gICAgICAgICAgICAgICdGaWxtZSA1JyxcbiAgICAgICAgICAgICAgJ0ZpbG1lIDYnLFxuICAgICAgICAgICAgICAnRmlsbWUgNycsXG4gICAgICAgICAgICBdLm1hcChtb2RlbE5hbWUgPT4gKFxuICAgICAgICAgICAgICA8TW9kZWxTZWN0aW9uXG4gICAgICAgICAgICAgICAga2V5PXttb2RlbE5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnY29sb3JlZCd9XG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lPXttb2RlbE5hbWV9XG4gICAgICAgICAgICAgICAgb3ZlcmxheU5vZGU9e1xuICAgICAgICAgICAgICAgICAgPERlZmF1bHRDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXttb2RlbE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiT3JkZXIgb25saW5lIGZvciBkZWxpdmVyeVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGVsc1dyYXBwZXI+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgYFxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuZGl2YGBcbmV4cG9ydCBjb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBgXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9