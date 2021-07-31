self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DefaultContent */ "./components/DefaultContent/index.js");
/* harmony import */ var _components_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Model */ "./components/Model/index.js");
/* harmony import */ var _public_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/styles/GlobalStyles */ "./public/styles/GlobalStyles.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./pages/styles.js");
/* module decorator */ module = __webpack_require__.hmd(module);


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

_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Heading": function() { return /* binding */ Heading; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; }
/* harmony export */ });
/* harmony import */ var C_Users_Yago_Siguinolfi_Documents_Projetos_Quero2Pay_cinema_station_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function _templateObject3() {
  var data = (0,C_Users_Yago_Siguinolfi_Documents_Projetos_Quero2Pay_cinema_station_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0,C_Users_Yago_Siguinolfi_Documents_Projetos_Quero2Pay_cinema_station_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0,C_Users_Yago_Siguinolfi_Documents_Projetos_Quero2Pay_cinema_station_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2());
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject3());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6WyJIb21lUGFnZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsIkhlYWRpbmciLCJCdXR0b25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLDhEQUFDLDhDQUFEO0FBQUEsNkJBQ0UsOERBQUMsNERBQUQ7QUFBQSwrQkFDRTtBQUFBLHFCQUNHLENBQ0MsU0FERCxFQUVDLFNBRkQsRUFHQyxTQUhELEVBSUMsU0FKRCxFQUtDLFNBTEQsRUFNQyxTQU5ELEVBT0MsU0FQRCxDQURILGVBVUUsOERBQUMsMkRBQUQ7QUFDRSxxQkFBUyxFQUFDLFdBRFo7QUFFRSx1QkFBVyxlQUNULDhEQUFDLCtEQUFEO0FBQ0UsbUJBQUssRUFBQyxXQURSO0FBRUUseUJBQVcsRUFBQztBQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUE0QkUsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCRjtBQUFBLGtCQURGO0FBZ0NEOztLQWpDUUEsUTtBQW1DVCwrREFBZUEsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUVPLElBQU1DLFNBQVMsR0FBR0MsMERBQUgsbUJBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUdELDBEQUFILG9CQUFiO0FBQ0EsSUFBTUUsT0FBTyxHQUFHRiwwREFBSCxvQkFBYiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZmQwY2NlYWViOTBjYWEwOWE1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRGVmYXVsdENvbnRlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVmYXVsdENvbnRlbnRcIjtcclxuaW1wb3J0IHsgTW9kZWxzV3JhcHBlciwgTW9kZWxTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kZWxcIjtcclxuaW1wb3J0IHsgR2xvYmFsU3R5bGVzIH0gZnJvbSBcIi4uL3B1YmxpYy9zdHlsZXMvR2xvYmFsU3R5bGVzXCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DaW5lbWEgU3RhdGlvbjwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8TW9kZWxzV3JhcHBlcj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSAxXCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSAyXCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSAzXCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSA0XCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSA1XCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSA2XCIsXHJcbiAgICAgICAgICAgICAgXCJGaWxtZSA3XCIsXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgIDxNb2RlbFNlY3Rpb25cclxuICAgICAgICAgICAgICBtb2RlbE5hbWU9XCJNb2RlbCBPbmVcIlxyXG4gICAgICAgICAgICAgIG92ZXJsYXlOb2RlPXtcclxuICAgICAgICAgICAgICAgIDxEZWZhdWx0Q29udGVudFxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vZGVsIE9uZVwiXHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiT3JkZXIgb25saW5lIGZvciBkZWxpdmVyeVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPjwvTW9kZWxTZWN0aW9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Nb2RlbHNXcmFwcGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgO1xyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYDtcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YGA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=