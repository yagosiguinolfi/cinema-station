(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9920:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/DefaultOverlayContent/styles.js

const styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ggpooc-0"
})(["display:flex;flex-direction:column;justify-content:space-between;flex:1;"]);
const styles_Heading = external_styled_components_default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-1ggpooc-1"
})(["margin-top:16.5vh;text-align:center;>h1{font-weight:500;font-size:40px;line-height:48px;color:#393c41;}>h2{font-weight:normal;font-size:14px;line-height:20px;color:#5c5e62;}"]);
const styles_Buttons = external_styled_components_default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-1ggpooc-2"
})(["width:100%;text-align:center;"]);
;// CONCATENATED MODULE: ./src/components/DefaultOverlayContent/index.js





function DefaultOverlayContent({
  label,
  description
}) {
  return /*#__PURE__*/_jsxs(Container, {
    children: [/*#__PURE__*/_jsxs(Heading, {
      children: [/*#__PURE__*/_jsx("h1", {
        children: label
      }), /*#__PURE__*/_jsx("h2", {
        children: description
      })]
    }), /*#__PURE__*/_jsx(Buttons, {
      children: /*#__PURE__*/_jsx("button", {
        type: "button",
        children: "Show details"
      })
    })]
  });
}

/* harmony default export */ var components_DefaultOverlayContent = ((/* unused pure expression or super */ null && (DefaultOverlayContent)));
;// CONCATENATED MODULE: ./src/components/Movie/MovieOverlay/styles.js

const MovieOverlay_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1hk7ebg-0"
})(["position:sticky;top:0;height:100vh;margin-top:-100vh;display:flex;flex-direction:column;align-items:center;"]);
;// CONCATENATED MODULE: ./src/components/Movie/MovieOverlay/index.js




function MovieOverlay_MovieOverlay({
  children
}) {
  return /*#__PURE__*/_jsx(Container, {
    children: children
  });
}

/* harmony default export */ var Movie_MovieOverlay = ((/* unused pure expression or super */ null && (MovieOverlay_MovieOverlay)));
;// CONCATENATED MODULE: ./src/components/Movie/MoviesContext.js

const MoviesContext_MoviesContext = /*#__PURE__*/(/* unused pure expression or super */ null && (React.createContext()));
/* harmony default export */ var Movie_MoviesContext = ((/* unused pure expression or super */ null && (MoviesContext_MoviesContext)));
;// CONCATENATED MODULE: ./src/components/Movie/MovieWrapper/styles.js

const MovieWrapper_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1df9e8l-0"
})(["height:100vh;scroll-snap-type:y mandatory;overflow-y:scroll;"]);
const styles_OverlaysRoot = external_styled_components_default().div.withConfig({
  displayName: "styles__OverlaysRoot",
  componentId: "sc-1df9e8l-1"
})(["position:sticky;top:0;right:0;left:0;bottom:0;"]);
;// CONCATENATED MODULE: ./src/components/Movie/MovieWrapper/index.js



/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */





function MoviesWrapper({
  children
}) {
  const wrapperRef = useRef(null);
  const {
    0: registeredMovies,
    1: setRegisteredMovies
  } = useState([]);
  const registerMovie = useCallback(movie => {
    setRegisteredMovies(state => [...state, movie]);
  }, []);
  const unregisterMovie = useCallback(movieName => {
    setRegisteredMovies(state => state.filter(movie => movie.movieName !== movieName));
  }, []);
  const getMovieByName = useCallback(movieName => registeredMovies.find(movie => movie.movieName === movieName) || null);
  return /*#__PURE__*/_jsx(MoviesContext.Provider, {
    value: {
      wrapperRef,
      registeredMovies,
      registerMovie,
      unregisterMovie,
      getMovieByName
    },
    children: /*#__PURE__*/_jsxs(Container, {
      ref: wrapperRef,
      children: [/*#__PURE__*/_jsx("h1", {
        children: "Teste"
      }), /*#__PURE__*/_jsx(OverlaysRoot, {
        children: registeredMovies.map(movie => /*#__PURE__*/_jsx(MovieOverlay, {
          children: movie.title
        }, movie.id))
      })]
    })
  });
}

/* harmony default export */ var MovieWrapper = ((/* unused pure expression or super */ null && (MoviesWrapper)));
;// CONCATENATED MODULE: ./src/components/Movie/MovieSection/styles.js

const MovieSection_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-19vvp3n-0"
})(["height:100vh;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;"]);
const MovieSection_styles_Heading = external_styled_components_default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-19vvp3n-1"
})([""]);
const MovieSection_styles_Buttons = external_styled_components_default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-19vvp3n-2"
})([""]);
;// CONCATENATED MODULE: ./src/components/Movie/MovieSection/index.js


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

  return /*#__PURE__*/_jsx(Container, _objectSpread(_objectSpread({}, props), {}, {
    children: children
  }));
}

/* harmony default export */ var Movie_MovieSection = ((/* unused pure expression or super */ null && (MovieSection)));
;// CONCATENATED MODULE: ./src/components/Movie/index.js


// EXTERNAL MODULE: ./src/styles/index.js
var styles = __webpack_require__(1714);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Movie/MoviePreview/styles.js

const MoviePreview_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1emomf5-0"
})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;background-image:url(", ");background-size:cover;height:42vh;width:28vh;border-style:solid;border-width:4px;border-color:#414142;border-radius:10px;margin:0 10px 10px;padding:6px;"], props => props.backgroundImage);
const Title = external_styled_components_default().h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1emomf5-1"
})([""]);
const Text = external_styled_components_default().h2.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1emomf5-2"
})(["font-size:16px;font-weight:400;color:#ffffff;"]);
const Button = external_styled_components_default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1emomf5-3"
})(["display:flex;align-items:center;justify-content:center;padding:6px;height:40px;width:40px;opacity:0.8;border-radius:20px;background-color:#3a3a3a;border-color:", ";border-width:2px;"], props => props.theme.colors.text);
;// CONCATENATED MODULE: ./public/assets/right-chevron.png
/* harmony default export */ var right_chevron = ({"src":"/_next/static/image/public/assets/right-chevron.d0f5d4946e66c0ab74bbf72d078f5588.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42jWPyw7BYBCFp2w9k7cQK4lYCOLeqh8tcWni8giegIS4BIlEbWwqIVZWNjbE5QU6Y2Ea+m3n5HxzwHh9Ao0rzaonHJV3NC2usQtMyURJmaAExoOyrRsVNQszFYsa6gLDhTn2gBEmSeBQv1CzdsakMDEhNpRXxnZSGWEHHLQDeYDRD6RrFqW4IauuMCgP7Kg8xBK46EeqcyDOgby6xJg8tGNOwFV0WREVW0yxQsn0bR8rcuBgPElv3Smt7VHwkzVuCHGDHxh+1gPG+xP5zxz8ZlL7f/QCAHwBWj6I9M8TwA4AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/Movie/MoviePreview/index.js


/* eslint-disable no-unreachable */

/* eslint-disable @next/next/link-passhref */

/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable react/button-has-type */

/* eslint-disable no-undef */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable no-unused-vars */







function MoviePreview({
  movie
}) {
  // const router = useRouter()
  // const [current, setCurrent] = useState({})
  // useEffect(() => {    
  //   setCurrent({movie})
  // }, [])
  return /*#__PURE__*/jsx_runtime_.jsx(MoviePreview_styles_Container, {
    backgroundImage: `https://image.tmdb.org/t/p/w300/${movie === null || movie === void 0 ? void 0 : movie.poster_path}`,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: {
        pathname: `/details/${movie.id}`
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Button, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: "see details",
          src: right_chevron,
          layout: "intrinsic"
        })
      })
    })
  });
} // export async function getStaticProps() {
//   return {
//     props: {
//       movie:current,
//     },
//   }
// }
// const Link = ({ children, href }) => {
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


/* harmony default export */ var Movie_MoviePreview = (MoviePreview);
;// CONCATENATED MODULE: ./public/assets/cine-station-icon.ico
/* harmony default export */ var cine_station_icon = ({"src":"/_next/static/image/public/assets/cine-station-icon.15cc42620f611b0e89520689bfc0797c.ico","height":256,"width":256});
// EXTERNAL MODULE: ./public/assets/cine-station-logo.png
var cine_station_logo = __webpack_require__(7969);
;// CONCATENATED MODULE: ./src/pages/index.js




/* eslint-disable no-unused-vars */

/* eslint-disable @next/next/no-img-element */










async function getStaticProps(context) {
  const data = await external_axios_default().get('3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1').then(async response => response.data);
  return {
    props: {
      data
    }
  };
}

function HomePage(props) {
  const {
    data
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "cine-icon",
        href: cine_station_icon,
        type: "image/ico"
      }), /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Cinema Station"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "cinema-station",
        content: "initial-scale=1.0, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles/* Container */.W2, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(styles/* Header */.h4, {
        children: /*#__PURE__*/jsx_runtime_.jsx(styles/* ViewImage */.OH, {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: cine_station_logo/* default */.Z,
            alt: "cinema-station-logo",
            width: "160",
            height: "160"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(styles/* Content */.VY, {
        children: data.results.map(movie => /*#__PURE__*/jsx_runtime_.jsx(Movie_MoviePreview, {
          movie: movie
        }, movie.id))
      })]
    })]
  });
}

/* harmony default export */ var pages = (HomePage);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
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
var __webpack_exports__ = __webpack_require__.X(0, [821,61,509], function() { return __webpack_exec__(9920); });
module.exports = __webpack_exports__;

})();