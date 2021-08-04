exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 2738:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a54b4f32bdc1ef890ddd.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/pN3wqNVHJwq7SJ7oPMoPr/_buildManifest.js","static/pN3wqNVHJwq7SJ7oPMoPr/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-c034215587cd157b2989.js","static/chunks/pages/index-abd0822b3b15f776959e.js"],"/_app":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-c034215587cd157b2989.js","static/chunks/pages/_app-1cbf4ffc5d8d69da6a90.js"],"/_error":["static/chunks/webpack-61095c13c5984b221292.js","static/chunks/framework-92300432a1172ef1338b.js","static/chunks/main-c034215587cd157b2989.js","static/chunks/pages/_error-a0e21b9b223f827fe1f2.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";
module.exports = {};

/***/ }),

/***/ 5706:
/***/ (function(module) {

"use strict";
module.exports = {"Dg":[]};

/***/ }),

/***/ 5963:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(27);
;// CONCATENATED MODULE: ./src/styles/global.js

const GlobalStyles = (0,styled_components_cjs/* createGlobalStyle */.vJ)(["*{margin:0;padding:0;box-sizing:border-box;}*,input,button{font-family:Roboto,Ubuntu,sans-serif;}body{background:", ";color:", ";font:400 16px Roboto,sans-serif;}.colored:nth-child(1){background:#f1ffe7;}.colored:nth-child(2){background:#dfffd9;}.colored:nth-child(3){background:#cdfeca;}.colored:nth-child(4){background:#bbfebb;}.colored:nth-child(5){background:#a9fdac;}.colored:nth-child(6){background:#90f29c;}.colored:nth-child(7){background:#77e68c;}"], props => props.theme.colors.background, props => props.theme.colors.text);
;// CONCATENATED MODULE: ./src/styles/theme.js
const theme = {
  colors: {
    background: '#121214',
    text: '#e0e0e3',
    primary: '#2255ee'
  }
};
/* harmony default export */ var styles_theme = (theme);
;// CONCATENATED MODULE: ./src/pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1

(axios_default()).defaults.baseURL = 'https://api.themoviedb.org';

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_components_cjs/* ThemeProvider */.f6, {
    theme: styles_theme,
    children: [/*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime.jsx(GlobalStyles, {})]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyDocument; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* eslint-disable no-unused-vars */



class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {// static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet()
  //   const originalRenderPage = ctx.renderPage
  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
  //       })
  //     const initialProps = await Document.getInitialProps(ctx)
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     }
  //   } finally {
  //     sheet.seal()
  //   }
  // }
  // render() {
  //   return (
  //     <Html lang="pt">
  //       <Head>
  //         <meta charSet="utf-8" />
  //         <link
  //           href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
  //           rel="stylesheet"
  //         />
  //         <link rel="icon" href="https://rocketseat.com.br/favicon.ico" />
  //       </Head>
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   )
  // }
}

/***/ }),

/***/ 2308:
/***/ (function(module) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 2308;
module.exports = webpackEmptyContext;

/***/ })

};
;