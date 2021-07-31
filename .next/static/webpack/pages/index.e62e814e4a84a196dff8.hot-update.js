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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Yago Siguinolfi\\Documents\\Projetos\\Quero2Pay\\cinema-station\\pages\\index.js";





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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelsWrapper, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [["Filme 1", "Filme 2", "Filme 3", "Filme 4", "Filme 5", "Filme 6", "Filme 7"], /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Model__WEBPACK_IMPORTED_MODULE_3__.ModelSection, {
            modelName: "Model One",
            overlayNode: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DefaultContent__WEBPACK_IMPORTED_MODULE_2__.default, {
              label: "Model One",
              description: "Order online for delivery"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw2QkFDRSw4REFBQyw0REFBRDtBQUFBLCtCQUNFO0FBQUEscUJBQ0csQ0FDQyxTQURELEVBRUMsU0FGRCxFQUdDLFNBSEQsRUFJQyxTQUpELEVBS0MsU0FMRCxFQU1DLFNBTkQsRUFPQyxTQVBELENBREgsZUFVRSw4REFBQywyREFBRDtBQUNFLHFCQUFTLEVBQUMsV0FEWjtBQUVFLHVCQUFXLGVBQ1QsOERBQUMsK0RBQUQ7QUFDRSxtQkFBSyxFQUFDLFdBRFI7QUFFRSx5QkFBVyxFQUFDO0FBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQTRCRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUJGO0FBQUEsa0JBREY7QUFnQ0Q7O0tBakNRQSxRO0FBbUNULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU2MmU4MTRlNGE4NGExOTZkZmY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBEZWZhdWx0Q29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9EZWZhdWx0Q29udGVudFwiO1xyXG5pbXBvcnQgeyBNb2RlbHNXcmFwcGVyLCBNb2RlbFNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tIFwiLi4vcHVibGljL3N0eWxlcy9HbG9iYWxTdHlsZXNcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q2luZW1hIFN0YXRpb248L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxNb2RlbHNXcmFwcGVyPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICBcIkZpbG1lIDFcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDJcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDNcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDRcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDVcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDZcIixcclxuICAgICAgICAgICAgICBcIkZpbG1lIDdcIixcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPE1vZGVsU2VjdGlvblxyXG4gICAgICAgICAgICAgIG1vZGVsTmFtZT1cIk1vZGVsIE9uZVwiXHJcbiAgICAgICAgICAgICAgb3ZlcmxheU5vZGU9e1xyXG4gICAgICAgICAgICAgICAgPERlZmF1bHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9kZWwgT25lXCJcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPcmRlciBvbmxpbmUgZm9yIGRlbGl2ZXJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+PC9Nb2RlbFNlY3Rpb24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vZGVsc1dyYXBwZXI+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=