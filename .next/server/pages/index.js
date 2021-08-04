(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,494];
exports.modules = {

/***/ 800:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(914);
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

/***/ 165:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/DefaultOverlayContent/styles.js

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ggpooc-0"
})([""]);
const Heading = external_styled_components_default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1ggpooc-1"
})([""]);
const Buttons = external_styled_components_default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1ggpooc-2"
})([""]);
;// CONCATENATED MODULE: ./src/components/DefaultOverlayContent/index.js





function DefaultOverlayContent({
  label,
  description
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Heading, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: label
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: description
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Buttons, {
      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        children: "Show details"
      })
    })]
  });
}

/* harmony default export */ var components_DefaultOverlayContent = (DefaultOverlayContent);
;// CONCATENATED MODULE: ./src/components/Model/ModelsContext.js

const ModelsContext = /*#__PURE__*/external_react_default().createContext();
/* harmony default export */ var Model_ModelsContext = (ModelsContext);
;// CONCATENATED MODULE: ./src/components/Model/ModelsWrapper/styles.js

const styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-p99yhy-0"
})(["height:100vh;scroll-snap-type:y mandatory;overflow-y:scroll;"]);
const styles_Heading = external_styled_components_default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-p99yhy-1"
})([""]);
const styles_Buttons = external_styled_components_default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-p99yhy-2"
})([""]);
;// CONCATENATED MODULE: ./src/components/Model/ModelsWrapper/index.js


/* eslint-disable react-hooks/exhaustive-deps */




function ModelsWrapper({
  children
}) {
  const wrapperRef = (0,external_react_.useRef)(null);
  const {
    0: registeredModels,
    1: setRegisteredModels
  } = (0,external_react_.useState)([]);
  const registerModel = (0,external_react_.useCallback)(model => {
    setRegisteredModels(state => [...state, model]);
  }, []);
  const unregisterModel = (0,external_react_.useCallback)(modelName => {
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName));
  }, []);
  const getMovieByName = (0,external_react_.useCallback)(modelName => registeredModels.find(model => model.mdoelName === modelName) || null);
  return /*#__PURE__*/jsx_runtime_.jsx(Model_ModelsContext.Provider, {
    value: {
      wrapperRef,
      registeredModels,
      registerModel,
      unregisterModel,
      getMovieByName
    },
    children: /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
      ref: wrapperRef,
      children: children
    })
  });
}

/* harmony default export */ var Model_ModelsWrapper = (ModelsWrapper);
;// CONCATENATED MODULE: ./src/components/Model/ModelSection/styles.js

const ModelSection_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-ntztp8-0"
})(["height:100vh;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;"]);
const ModelSection_styles_Heading = external_styled_components_default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-ntztp8-1"
})([""]);
const ModelSection_styles_Buttons = external_styled_components_default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-ntztp8-2"
})([""]);
;// CONCATENATED MODULE: ./src/components/Model/ModelSection/index.js


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

  return /*#__PURE__*/jsx_runtime_.jsx(ModelSection_styles_Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
}

/* harmony default export */ var Model_ModelSection = (ModelSection);
;// CONCATENATED MODULE: ./src/components/Model/index.js


// EXTERNAL MODULE: ./src/pages/_styles.js
var _styles = __webpack_require__(800);
;// CONCATENATED MODULE: ./src/pages/index.js










function HomePage() {
  const {
    0: pageMovies,
    1: setPageMovies
  } = (0,external_react_.useState)([]);
  const {
    1: setData
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    external_axios_default().get('3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1').then(async response => {
      await setPageMovies(response.data.results);
      setData(response.data);
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Cinema Station"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(_styles.Container, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Model_ModelsWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: pageMovies.map(movie => /*#__PURE__*/jsx_runtime_.jsx(Model_ModelSection, {
            // className={'colored'}
            backgroundImage: movie.poster_path,
            modelName: movie.title,
            overlayNode: /*#__PURE__*/jsx_runtime_.jsx(components_DefaultOverlayContent, {
              label: movie.title,
              description: movie.overview
            }),
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(_styles.Content, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  maxWidth: '30%'
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(_styles.Title, {
                  children: movie.title
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: movie.overview
                  })
                })]
              })]
            })
          }, movie.id))
        })
      })
    })]
  });
}

/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 914:
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
var __webpack_exports__ = (__webpack_exec__(165));
module.exports = __webpack_exports__;

})();