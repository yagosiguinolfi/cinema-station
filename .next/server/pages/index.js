(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/Movie/MoviePreview/styles.js");
/* harmony import */ var _public_assets_right_chevron_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../public/assets/right-chevron.png */ "./public/assets/right-chevron.png");

var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\components\\Movie\\MoviePreview\\index.js";

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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Container, {
    backgroundImage: `https://image.tmdb.org/t/p/w300/${movie === null || movie === void 0 ? void 0 : movie.poster_path}`,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: {
        pathname: `/details/${movie.id}`
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_5__.Button, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
          alt: "see details",
          src: _public_assets_right_chevron_png__WEBPACK_IMPORTED_MODULE_6__.default,
          layout: "intrinsic"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 10
  }, this);
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
/* harmony export */   "Text": function() { return /* binding */ Text; },
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1emomf5-0"
})(["display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-end;background-image:url(", ");background-size:cover;height:42vh;width:28vh;border-style:solid;border-width:4px;border-color:#414142;border-radius:10px;margin:0 10px 10px;padding:6px;"], props => props.backgroundImage);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1emomf5-1"
})([""]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2.withConfig({
  displayName: "styles__Text",
  componentId: "sc-1emomf5-2"
})(["font-size:16px;font-weight:400;color:#ffffff;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-1emomf5-3"
})(["display:flex;align-items:center;justify-content:center;padding:6px;height:40px;width:40px;opacity:0.8;border-radius:20px;background-color:#3a3a3a;border-color:", ";border-width:2px;"], props => props.theme.colors.text);

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_DefaultOverlayContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DefaultOverlayContent */ "./src/components/DefaultOverlayContent/index.js");
/* harmony import */ var _components_Movie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Movie */ "./src/components/Movie/index.js");
/* harmony import */ var _styles_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/index */ "./src/styles/index.js");
/* harmony import */ var _components_Movie_MoviePreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Movie/MoviePreview */ "./src/components/Movie/MoviePreview/index.js");
/* harmony import */ var _public_assets_cine_station_icon_ico__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/cine-station-icon.ico */ "./public/assets/cine-station-icon.ico");
/* harmony import */ var _public_assets_cine_station_logo_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/assets/cine-station-logo.png */ "./public/assets/cine-station-logo.png");


var _jsxFileName = "C:\\Users\\YagoSiguinolfi\\Documents\\Projetos\\Quero2\\cinema-station\\src\\pages\\index.js";

/* eslint-disable no-unused-vars */

/* eslint-disable @next/next/no-img-element */










async function getStaticProps(context) {
  const data = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1').then(async response => response.data);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "cine-icon",
        href: _public_assets_cine_station_icon_ico__WEBPACK_IMPORTED_MODULE_9__.default,
        type: "image/ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cinema Station"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "cinema-station",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_index__WEBPACK_IMPORTED_MODULE_7__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_index__WEBPACK_IMPORTED_MODULE_7__.Header, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_index__WEBPACK_IMPORTED_MODULE_7__.ViewImage, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
            src: _public_assets_cine_station_logo_png__WEBPACK_IMPORTED_MODULE_10__.default,
            alt: "cinema-station-logo",
            width: "180",
            height: "180"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_index__WEBPACK_IMPORTED_MODULE_7__.Content, {
        children: data.results.map(movie => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Movie_MoviePreview__WEBPACK_IMPORTED_MODULE_8__.default, {
          movie: movie
        }, movie.id, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./src/styles/index.js":
/*!*****************************!*\
  !*** ./src/styles/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Heading": function() { return /* binding */ Heading; },
/* harmony export */   "Header": function() { return /* binding */ Header; },
/* harmony export */   "Buttons": function() { return /* binding */ Buttons; },
/* harmony export */   "Content": function() { return /* binding */ Content; },
/* harmony export */   "Title": function() { return /* binding */ Title; },
/* harmony export */   "ViewImage": function() { return /* binding */ ViewImage; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-13xcmdz-0"
})(["height:100vh;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Heading",
  componentId: "sc-13xcmdz-1"
})([""]);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Header",
  componentId: "sc-13xcmdz-2"
})(["display:flex;flex-direction:column;height:20vh;background-color:", ";"], props => props.theme.colors.background);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Buttons",
  componentId: "sc-13xcmdz-3"
})([""]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-13xcmdz-4"
})(["display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;justify-content:space-evenly;width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "styles__Title",
  componentId: "sc-13xcmdz-5"
})([""]);
const ViewImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "styles__ViewImage",
  componentId: "sc-13xcmdz-6"
})(["height:20vh;"]);

/***/ }),

/***/ "./public/assets/cine-station-icon.ico":
/*!*********************************************!*\
  !*** ./public/assets/cine-station-icon.ico ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/assets/cine-station-icon.15cc42620f611b0e89520689bfc0797c.ico","height":256,"width":256});

/***/ }),

/***/ "./public/assets/cine-station-logo.png":
/*!*********************************************!*\
  !*** ./public/assets/cine-station-logo.png ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/assets/cine-station-logo.7e8923f355a0ebe4372af8c03b12417d.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABDklEQVR4nAVAP0tCURT/nXufWYYRhaGE/XFJgqKgoaBoaHWKxhzcwu/RFAQGllNNETW0OYQNOdcU1GDRC7EU08FKfe/17jlBuV1Wg+OgziuM10Q4NIMtv0uloQi6LEJ0lBZYw4KfGlLhOA6UhaRhFLN5SmWLtqJ8RqaZ5HAkStuTc4ASGLsMHT1D4ibXsimX5qdokuZjC+J/OS5VO55+l/7fRaJ+3Qz196mQkbvgordZWnnxXc1WJASZGNAcMFo/9txnKkPi54XG5ehGe20pGPZ7PluKAIcZt9+/Xdq7qqKwXJnaaUfsMUupHovTMqZeMebjjeWEsqef+nj93qARWwVoFswP8PxaLBjo10XwDy3xf6yVzCvBAAAAAElFTkSuQmCC"});

/***/ }),

/***/ "./public/assets/right-chevron.png":
/*!*****************************************!*\
  !*** ./public/assets/right-chevron.png ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/public/assets/right-chevron.d0f5d4946e66c0ab74bbf72d078f5588.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42jWPyw7BYBCFp2w9k7cQK4lYCOLeqh8tcWni8giegIS4BIlEbWwqIVZWNjbE5QU6Y2Ea+m3n5HxzwHh9Ao0rzaonHJV3NC2usQtMyURJmaAExoOyrRsVNQszFYsa6gLDhTn2gBEmSeBQv1CzdsakMDEhNpRXxnZSGWEHHLQDeYDRD6RrFqW4IauuMCgP7Kg8xBK46EeqcyDOgby6xJg8tGNOwFV0WREVW0yxQsn0bR8rcuBgPElv3Smt7VHwkzVuCHGDHxh+1gPG+xP5zxz8ZlL7f/QCAHwBWj6I9M8TwA4AAAAASUVORK5CYII="});

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0T3ZlcmxheUNvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9EZWZhdWx0T3ZlcmxheUNvbnRlbnQvc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVPdmVybGF5L2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVPdmVybGF5L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllUHJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllUHJldmlldy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVNlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9Nb3ZpZVNlY3Rpb24vc3R5bGVzLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVXcmFwcGVyL2luZGV4LmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vc3JjL2NvbXBvbmVudHMvTW92aWUvTW92aWVXcmFwcGVyL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9jb21wb25lbnRzL01vdmllL01vdmllc0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9zcmMvY29tcG9uZW50cy9Nb3ZpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3NyYy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vLi9wdWJsaWMvYXNzZXRzL2NpbmUtc3RhdGlvbi1pY29uLmljbyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL3B1YmxpYy9hc3NldHMvY2luZS1zdGF0aW9uLWxvZ28ucG5nIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vcHVibGljL2Fzc2V0cy9yaWdodC1jaGV2cm9uLnBuZyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jaW5lbWEtc3RhdGlvbi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY2luZW1hLXN0YXRpb24vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovL2NpbmVtYS1zdGF0aW9uL2lnbm9yZWR8QzpcXFVzZXJzXFxZYWdvU2lndWlub2xmaVxcRG9jdW1lbnRzXFxQcm9qZXRvc1xcUXVlcm8yXFxjaW5lbWEtc3RhdGlvblxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9yZWYiLCJwcmlvcml0eSIsImxvYWRpbmciLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsIk9iamVjdCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImVycm9yIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsIl91bnVzZWQiLCJjYW5QcmVmZXRjaCIsInByZWZldGNoVmlhRG9tIiwicmVzIiwicmVqIiwicXVlcnlTZWxlY3RvciIsImNyb3NzT3JpZ2luIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwidGVzdCIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsInBhdGhuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic3BsaXQiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJtaXR0IiwiY3JlYXRlIiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ5IiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInN1YnN0ciIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJwYXJzZVBhcmFtZXRlciIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkRlZmF1bHRPdmVybGF5Q29udGVudCIsImxhYmVsIiwiZGVzY3JpcHRpb24iLCJDb250YWluZXIiLCJzdHlsZWQiLCJIZWFkaW5nIiwiQnV0dG9ucyIsIk1vdmllT3ZlcmxheSIsIk1vdmllUHJldmlldyIsIm1vdmllIiwicG9zdGVyX3BhdGgiLCJpY29uR28iLCJUaXRsZSIsIlRleHQiLCJCdXR0b24iLCJ0aGVtZSIsImNvbG9ycyIsIk1vdmllU2VjdGlvbiIsIm1vdmllTmFtZSIsIm92ZXJsYXlOb2RlIiwiTW92aWVzV3JhcHBlciIsIndyYXBwZXJSZWYiLCJyZWdpc3RlcmVkTW92aWVzIiwic2V0UmVnaXN0ZXJlZE1vdmllcyIsInJlZ2lzdGVyTW92aWUiLCJ1bnJlZ2lzdGVyTW92aWUiLCJnZXRNb3ZpZUJ5TmFtZSIsInRpdGxlIiwiT3ZlcmxheXNSb290IiwiTW92aWVzQ29udGV4dCIsIlJlYWN0IiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiYXhpb3MiLCJyZXNwb25zZSIsIkhvbWVQYWdlIiwiaWNvbkNpbmVTIiwibG9nb0NpbmVTIiwicmVzdWx0cyIsIkhlYWRlciIsImJhY2tn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Q0EsTUFBTXNDLFNBQVMsR0FBR3RDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLG9CQUFmLEM7Ozs7Ozs7Ozs7OztBQ3RCUCwrREFBZ0IsQ0FBQywwSEFBMEgsRTs7Ozs7Ozs7Ozs7O0FDQTNJLCtEQUFnQixDQUFDLHdKQUF3Siw2YkFBNmIsRTs7Ozs7Ozs7Ozs7O0FDQXRtQiwrREFBZ0IsQ0FBQyxvSkFBb0osNlhBQTZYLEU7Ozs7Ozs7Ozs7O0FDQXJoQixrQkFBa0IsTUFBTSx3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsZ0NBQWdDLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7QUNEQSwyR0FBK0M7Ozs7Ozs7Ozs7O0FDQS9DLHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PUltYWdlO3ZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9oZWFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9oZWFkXCIpKTt2YXIgX3RvQmFzZT1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjRcIik7dmFyIF9pbWFnZUNvbmZpZz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2lmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7O2dsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQ9dHJ1ZTt9Y29uc3QgVkFMSURfTE9BRElOR19WQUxVRVM9WydsYXp5JywnZWFnZXInLHVuZGVmaW5lZF07Y29uc3QgbG9hZGVycz1uZXcgTWFwKFtbJ2ltZ2l4JyxpbWdpeExvYWRlcl0sWydjbG91ZGluYXJ5JyxjbG91ZGluYXJ5TG9hZGVyXSxbJ2FrYW1haScsYWthbWFpTG9hZGVyXSxbJ2RlZmF1bHQnLGRlZmF1bHRMb2FkZXJdXSk7Y29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUz1bJ2ZpbGwnLCdmaXhlZCcsJ2ludHJpbnNpYycsJ3Jlc3BvbnNpdmUnLHVuZGVmaW5lZF07ZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYyl7cmV0dXJuIHNyYy5kZWZhdWx0IT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpe3JldHVybiBzcmMuc3JjIT09dW5kZWZpbmVkO31mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpe3JldHVybiB0eXBlb2Ygc3JjPT09J29iamVjdCcmJihpc1N0YXRpY1JlcXVpcmUoc3JjKXx8aXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7fWNvbnN0e2RldmljZVNpemVzOmNvbmZpZ0RldmljZVNpemVzLGltYWdlU2l6ZXM6Y29uZmlnSW1hZ2VTaXplcyxsb2FkZXI6Y29uZmlnTG9hZGVyLHBhdGg6Y29uZmlnUGF0aCxkb21haW5zOmNvbmZpZ0RvbWFpbnN9PXByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTfHxfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0Oy8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXM9Wy4uLmNvbmZpZ0RldmljZVNpemVzLC4uLmNvbmZpZ0ltYWdlU2l6ZXNdO2NvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsYik9PmEtYik7YWxsU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTtmdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKXtpZihzaXplcyYmKGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKSl7Ly8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbmNvbnN0IHZpZXdwb3J0V2lkdGhSZT0vKF58XFxzKSgxP1xcZD9cXGQpdncvZztjb25zdCBwZXJjZW50U2l6ZXM9W107Zm9yKGxldCBtYXRjaDttYXRjaD12aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7bWF0Y2gpe3BlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7fWlmKHBlcmNlbnRTaXplcy5sZW5ndGgpe2NvbnN0IHNtYWxsZXN0UmF0aW89TWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSowLjAxO3JldHVybnt3aWR0aHM6YWxsU2l6ZXMuZmlsdGVyKHM9PnM+PWNvbmZpZ0RldmljZVNpemVzWzBdKnNtYWxsZXN0UmF0aW8pLGtpbmQ6J3cnfTt9cmV0dXJue3dpZHRoczphbGxTaXplcyxraW5kOid3J307fWlmKHR5cGVvZiB3aWR0aCE9PSdudW1iZXInfHxsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJyl7cmV0dXJue3dpZHRoczpjb25maWdEZXZpY2VTaXplcyxraW5kOid3J307fWNvbnN0IHdpZHRocz1bLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4vLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbi8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4vLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4vLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG5bd2lkdGgsd2lkdGgqMi8qLCB3aWR0aCAqIDMqL10ubWFwKHc9PmFsbFNpemVzLmZpbmQocD0+cD49dyl8fGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aC0xXSkpXTtyZXR1cm57d2lkdGhzLGtpbmQ6J3gnfTt9ZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aCxxdWFsaXR5LHNpemVzLGxvYWRlcn0pe2lmKHVub3B0aW1pemVkKXtyZXR1cm57c3JjLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTt9Y29uc3R7d2lkdGhzLGtpbmR9PWdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpO2NvbnN0IGxhc3Q9d2lkdGhzLmxlbmd0aC0xO3JldHVybntzaXplczohc2l6ZXMmJmtpbmQ9PT0ndyc/JzEwMHZ3JzpzaXplcyxzcmNTZXQ6d2lkdGhzLm1hcCgodyxpKT0+YCR7bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3fSl9ICR7a2luZD09PSd3Jz93OmkrMX0ke2tpbmR9YCkuam9pbignLCAnKSwvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbi8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG5zcmM6bG9hZGVyKHtzcmMscXVhbGl0eSx3aWR0aDp3aWR0aHNbbGFzdF19KX07fWZ1bmN0aW9uIGdldEludCh4KXtpZih0eXBlb2YgeD09PSdudW1iZXInKXtyZXR1cm4geDt9aWYodHlwZW9mIHg9PT0nc3RyaW5nJyl7cmV0dXJuIHBhcnNlSW50KHgsMTApO31yZXR1cm4gdW5kZWZpbmVkO31mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpe2NvbnN0IGxvYWQ9bG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtpZihsb2FkKXtyZXR1cm4gbG9hZCgoMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Jvb3Q6Y29uZmlnUGF0aH0sbG9hZGVyUHJvcHMpKTt9dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO30vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoaW1nLHBsYWNlaG9sZGVyKXtpZihwbGFjZWhvbGRlcj09PSdibHVyJyYmaW1nKXtjb25zdCBoYW5kbGVMb2FkPSgpPT57aWYoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Y29uc3QgcD0nZGVjb2RlJ2luIGltZz9pbWcuZGVjb2RlKCk6UHJvbWlzZS5yZXNvbHZlKCk7cC5jYXRjaCgoKT0+e30pLnRoZW4oKCk9PntpbWcuc3R5bGUuZmlsdGVyPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZFNpemU9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J25vbmUnO30pO319O2lmKGltZy5jb21wbGV0ZSl7Ly8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4vLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4vLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuaGFuZGxlTG9hZCgpO31lbHNle2ltZy5vbmxvYWQ9aGFuZGxlTG9hZDt9fX1mdW5jdGlvbiBJbWFnZShfcmVmKXtsZXR7c3JjLHNpemVzLHVub3B0aW1pemVkPWZhbHNlLHByaW9yaXR5PWZhbHNlLGxvYWRpbmcsY2xhc3NOYW1lLHF1YWxpdHksd2lkdGgsaGVpZ2h0LG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbixsb2FkZXI9ZGVmYXVsdEltYWdlTG9hZGVyLHBsYWNlaG9sZGVyPSdlbXB0eScsYmx1ckRhdGFVUkx9PV9yZWYsYWxsPSgwLF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLFtcInNyY1wiLFwic2l6ZXNcIixcInVub3B0aW1pemVkXCIsXCJwcmlvcml0eVwiLFwibG9hZGluZ1wiLFwiY2xhc3NOYW1lXCIsXCJxdWFsaXR5XCIsXCJ3aWR0aFwiLFwiaGVpZ2h0XCIsXCJvYmplY3RGaXRcIixcIm9iamVjdFBvc2l0aW9uXCIsXCJsb2FkZXJcIixcInBsYWNlaG9sZGVyXCIsXCJibHVyRGF0YVVSTFwiXSk7bGV0IHJlc3Q9YWxsO2xldCBsYXlvdXQ9c2l6ZXM/J3Jlc3BvbnNpdmUnOidpbnRyaW5zaWMnO2lmKCdsYXlvdXQnaW4gcmVzdCl7Ly8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbmlmKHJlc3QubGF5b3V0KWxheW91dD1yZXN0LmxheW91dDsvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG5kZWxldGUgcmVzdFsnbGF5b3V0J107fWxldCBzdGF0aWNTcmM9Jyc7aWYoaXNTdGF0aWNJbXBvcnQoc3JjKSl7Y29uc3Qgc3RhdGljSW1hZ2VEYXRhPWlzU3RhdGljUmVxdWlyZShzcmMpP3NyYy5kZWZhdWx0OnNyYztpZighc3RhdGljSW1hZ2VEYXRhLnNyYyl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO31ibHVyRGF0YVVSTD1ibHVyRGF0YVVSTHx8c3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO3N0YXRpY1NyYz1zdGF0aWNJbWFnZURhdGEuc3JjO2lmKCFsYXlvdXR8fGxheW91dCE9PSdmaWxsJyl7aGVpZ2h0PWhlaWdodHx8c3RhdGljSW1hZ2VEYXRhLmhlaWdodDt3aWR0aD13aWR0aHx8c3RhdGljSW1hZ2VEYXRhLndpZHRoO2lmKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0fHwhc3RhdGljSW1hZ2VEYXRhLndpZHRoKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO319fXNyYz10eXBlb2Ygc3JjPT09J3N0cmluZyc/c3JjOnN0YXRpY1NyYztjb25zdCB3aWR0aEludD1nZXRJbnQod2lkdGgpO2NvbnN0IGhlaWdodEludD1nZXRJbnQoaGVpZ2h0KTtjb25zdCBxdWFsaXR5SW50PWdldEludChxdWFsaXR5KTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoIXNyYyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3dpZHRoLGhlaWdodCxxdWFsaXR5fSl9YCk7fWlmKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHR5cGVvZiB3aWR0aEludCE9PSd1bmRlZmluZWQnJiZpc05hTih3aWR0aEludCl8fHR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4oaGVpZ2h0SW50KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7fWlmKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYocHJpb3JpdHkmJmxvYWRpbmc9PT0nbGF6eScpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTt9aWYocGxhY2Vob2xkZXI9PT0nYmx1cicpe2lmKGxheW91dCE9PSdmaWxsJyYmKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7ZGVjb2Rpbmc6XCJhc3luY1wiLHN0eWxlOmltZ1N0eWxlLGNsYXNzTmFtZTpjbGFzc05hbWV9KSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsT2JqZWN0LmFzc2lnbih7fSxyZXN0LGltZ0F0dHJpYnV0ZXMse2RlY29kaW5nOlwiYXN5bmNcIixjbGFzc05hbWU6Y2xhc3NOYW1lLHJlZjplbGVtZW50PT57c2V0UmVmKGVsZW1lbnQpO3JlbW92ZVBsYWNlaG9sZGVyKGVsZW1lbnQscGxhY2Vob2xkZXIpO30sc3R5bGU6aW1nU3R5bGV9KSkscHJpb3JpdHk/LyojX19QVVJFX18qLyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4vLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbi8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbi8vXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6J19fbmltZy0nK2ltZ0F0dHJpYnV0ZXMuc3JjK2ltZ0F0dHJpYnV0ZXMuc3JjU2V0K2ltZ0F0dHJpYnV0ZXMuc2l6ZXMscmVsOlwicHJlbG9hZFwiLGFzOlwiaW1hZ2VcIixocmVmOmltZ0F0dHJpYnV0ZXMuc3JjU2V0P3VuZGVmaW5lZDppbWdBdHRyaWJ1dGVzLnNyYy8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzcmNzZXQ6aW1nQXR0cmlidXRlcy5zcmNTZXQvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4saW1hZ2VzaXplczppbWdBdHRyaWJ1dGVzLnNpemVzfSkpOm51bGwpO30vL0JVSUxUIElOIExPQURFUlNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpe3JldHVybiBzcmNbMF09PT0nLyc/c3JjLnNsaWNlKDEpOnNyYzt9ZnVuY3Rpb24gaW1naXhMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbmNvbnN0IHBhcmFtcz1bJ2F1dG89Zm9ybWF0JywnZml0PW1heCcsJ3c9Jyt3aWR0aF07bGV0IHBhcmFtc1N0cmluZz0nJztpZihxdWFsaXR5KXtwYXJhbXMucHVzaCgncT0nK3F1YWxpdHkpO31pZihwYXJhbXMubGVuZ3RoKXtwYXJhbXNTdHJpbmc9Jz8nK3BhcmFtcy5qb2luKCcmJyk7fXJldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gO31mdW5jdGlvbiBha2FtYWlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRofSl7cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDt9ZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG5jb25zdCBwYXJhbXM9WydmX2F1dG8nLCdjX2xpbWl0Jywnd18nK3dpZHRoLCdxXycrKHF1YWxpdHl8fCdhdXRvJyldO2xldCBwYXJhbXNTdHJpbmc9cGFyYW1zLmpvaW4oJywnKSsnLyc7cmV0dXJuYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7fWZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbWlzc2luZ1ZhbHVlcz1bXTsvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbmlmKCFzcmMpbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtpZighd2lkdGgpbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO2lmKG1pc3NpbmdWYWx1ZXMubGVuZ3RoPjApe3Rocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtzcmMsd2lkdGgscXVhbGl0eX0pfWApO31pZihzcmMuc3RhcnRzV2l0aCgnLy8nKSl7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIXNyYy5zdGFydHNXaXRoKCcvJykmJmNvbmZpZ0RvbWFpbnMpe2xldCBwYXJzZWRTcmM7dHJ5e3BhcnNlZFNyYz1uZXcgVVJMKHNyYyk7fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcihlcnIpO3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKXt0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmArYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTt9fX1yZXR1cm5gJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eXx8NzV9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgSGVhZGluZywgQnV0dG9ucyB9IGZyb20gJy4vc3R5bGVzJ1xyXG5cclxuZnVuY3Rpb24gRGVmYXVsdE92ZXJsYXlDb250ZW50KHsgbGFiZWwsIGRlc2NyaXB0aW9uIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWRpbmc+XHJcbiAgICAgICAgPGgxPntsYWJlbH08L2gxPlxyXG4gICAgICAgIDxoMj57ZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgPC9IZWFkaW5nPlxyXG5cclxuICAgICAgPEJ1dHRvbnM+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+U2hvdyBkZXRhaWxzPC9idXR0b24+XHJcbiAgICAgIDwvQnV0dG9ucz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdE92ZXJsYXlDb250ZW50XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXg6IDE7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDE2LjV2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gID5oMSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBjb2xvcjogIzM5M2M0MTtcclxuICB9XHJcbiAgPmgye1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1YzVlNjI7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCdXR0b25zID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuIiwiaW1wb3J0IFJlYWN0ICBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJ1xuXG5mdW5jdGlvbiBNb3ZpZU92ZXJsYXkoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZU92ZXJsYXlcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6MDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogLTEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVucmVhY2hhYmxlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbGluay1wYXNzaHJlZiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvYnV0dG9uLWhhcy10eXBlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgVGl0bGUsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJy4vc3R5bGVzJ1xyXG5pbXBvcnQgaWNvbkdvIGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9hc3NldHMvcmlnaHQtY2hldnJvbi5wbmcnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZVByZXZpZXcoe21vdmllfSkge1xyXG5cclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIC8vIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKHt9KVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4geyAgICBcclxuICAvLyAgIHNldEN1cnJlbnQoe21vdmllfSlcclxuICAvLyB9LCBbXSlcclxuXHJcblxyXG5cclxuICByZXR1cm4gPENvbnRhaW5lciBiYWNrZ3JvdW5kSW1hZ2U9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MzAwLyR7bW92aWU/LnBvc3Rlcl9wYXRofWB9PlxyXG4gICAgey8qIDxpbWcgYWx0PVwiXCIgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzE4NS8ke21vdmllPy5wb3N0ZXJfcGF0aH1gfSAvPiAqL31cclxuICAgIHsvKiA8VGl0bGU+e21vdmllPy50aXRsZX08L1RpdGxlPiAqL31cclxuICAgIDxMaW5rIFxyXG4gICAgIGhyZWY9e3tcclxuICAgICAgcGF0aG5hbWU6IGAvZGV0YWlscy8ke21vdmllLmlkfWBcclxuICAgIH19PlxyXG4gICAgICA8QnV0dG9uPlxyXG4gICAgICAgIDxJbWFnZSBhbHQ9XCJzZWUgZGV0YWlsc1wiIHNyYz17aWNvbkdvfSBsYXlvdXQ9J2ludHJpbnNpYycgLz5cclxuICAgICAgICB7LyogPFRleHQ+U2hvdyBkZXRhaWxzPC9UZXh0PiAqL31cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0xpbms+XHJcbiAgPC9Db250YWluZXI+XHJcbn1cclxuICAvLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gICByZXR1cm4ge1xyXG4gIC8vICAgICBwcm9wczoge1xyXG4gIC8vICAgICAgIG1vdmllOmN1cnJlbnQsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuXHJcbi8vIGNvbnN0IExpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiB7XHJcbi8vICAgXHJcbi8vICAgcmV0dXJuIDxhXHJcbi8vICAgICBocmVmPVwiI1wiXHJcbi8vICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4vLyAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuLy8gICAgICAgcm91dGVyLnB1c2goaHJlZilcclxuLy8gICAgIH19XHJcbi8vICAgPlxyXG4vLyAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPHN0eWxlIGpzeD57YFxyXG4vLyAgICAgICAgIGEge1xyXG4vLyAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgYH08L3N0eWxlPlxyXG4vLyAgIDwvYT5cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aWVQcmV2aWV3XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzKT0+cHJvcHMuYmFja2dyb3VuZEltYWdlfSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDQydmg7XHJcbiAgd2lkdGg6IDI4dmg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDRweDtcclxuICBib3JkZXItY29sb3I6ICM0MTQxNDI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDZweDtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXHJcbmBcclxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuaDJgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2EzYTtcclxuICBib3JkZXItY29sb3I6ICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy50ZXh0fTtcclxuICBib3JkZXItd2lkdGg6ICAycHg7XHJcbmBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZVNlY3Rpb24oeyBtb3ZpZU5hbWUsIG92ZXJsYXlOb2RlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZVNlY3Rpb25cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5leHBvcnQgY29uc3QgSGVhZGluZyA9IHN0eWxlZC5kaXZgYFxyXG5leHBvcnQgY29uc3QgQnV0dG9ucyA9IHN0eWxlZC5kaXZgYFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMgKi9cclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IE1vdmllT3ZlcmxheSBmcm9tICcuLi9Nb3ZpZU92ZXJsYXknXHJcbmltcG9ydCBNb3ZpZXNDb250ZXh0IGZyb20gJy4uL01vdmllc0NvbnRleHQnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgT3ZlcmxheXNSb290IH0gZnJvbSAnLi9zdHlsZXMnXHJcblxyXG5mdW5jdGlvbiBNb3ZpZXNXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHdyYXBwZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICBjb25zdCBbcmVnaXN0ZXJlZE1vdmllcywgc2V0UmVnaXN0ZXJlZE1vdmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCByZWdpc3Rlck1vdmllID0gdXNlQ2FsbGJhY2sobW92aWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PiBbLi4uc3RhdGUsIG1vdmllXSlcclxuICB9LCBbXSlcclxuICBjb25zdCB1bnJlZ2lzdGVyTW92aWUgPSB1c2VDYWxsYmFjayhtb3ZpZU5hbWUgPT4ge1xyXG4gICAgc2V0UmVnaXN0ZXJlZE1vdmllcyhzdGF0ZSA9PlxyXG4gICAgICBzdGF0ZS5maWx0ZXIobW92aWUgPT4gbW92aWUubW92aWVOYW1lICE9PSBtb3ZpZU5hbWUpXHJcbiAgICApXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGdldE1vdmllQnlOYW1lID0gdXNlQ2FsbGJhY2soXHJcbiAgICBtb3ZpZU5hbWUgPT5cclxuICAgICAgcmVnaXN0ZXJlZE1vdmllcy5maW5kKG1vdmllID0+IG1vdmllLm1vdmllTmFtZSA9PT0gbW92aWVOYW1lKSB8fCBudWxsXHJcbiAgKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE1vdmllc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB3cmFwcGVyUmVmLFxyXG4gICAgICAgIHJlZ2lzdGVyZWRNb3ZpZXMsXHJcbiAgICAgICAgcmVnaXN0ZXJNb3ZpZSxcclxuICAgICAgICB1bnJlZ2lzdGVyTW92aWUsXHJcbiAgICAgICAgZ2V0TW92aWVCeU5hbWVcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPENvbnRhaW5lciByZWY9e3dyYXBwZXJSZWZ9PlxyXG4gICAgICAgIDxoMT5UZXN0ZTwvaDE+XHJcbiAgICAgICAgPE92ZXJsYXlzUm9vdD5cclxuICAgICAgICAgIHtyZWdpc3RlcmVkTW92aWVzLm1hcChtb3ZpZSA9PlxyXG4gICAgICAgICAgICA8TW92aWVPdmVybGF5IGtleT17bW92aWUuaWR9Pnttb3ZpZS50aXRsZX08L01vdmllT3ZlcmxheT4pfVxyXG4gICAgICAgIDwvT3ZlcmxheXNSb290PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTW92aWVzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllc1dyYXBwZXJcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBPdmVybGF5c1Jvb3QgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG5gXHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBNb3ZpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpZXNDb250ZXh0XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTW92aWVzV3JhcHBlciB9IGZyb20gJy4vTW92aWVXcmFwcGVyJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vdmllU2VjdGlvbiB9IGZyb20gJy4vTW92aWVTZWN0aW9uJ1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgRGVmYXVsdE92ZXJsYXlDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRGVmYXVsdE92ZXJsYXlDb250ZW50J1xyXG5pbXBvcnQgeyBNb3ZpZXNXcmFwcGVyLCBNb3ZpZVNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL01vdmllJ1xyXG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQsIFRpdGxlLCBIZWFkZXIsIFZpZXdJbWFnZSB9IGZyb20gJy4uL3N0eWxlcy9pbmRleCdcclxuaW1wb3J0IE1vdmllUHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL01vdmllL01vdmllUHJldmlldydcclxuaW1wb3J0IGljb25DaW5lUyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2NpbmUtc3RhdGlvbi1pY29uLmljbydcclxuaW1wb3J0IGxvZ29DaW5lUyBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2NpbmUtc3RhdGlvbi1sb2dvLnBuZydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICAnMy9tb3ZpZS91cGNvbWluZz9hcGlfa2V5PWZlNjVmOGU4NDBlMTVkMDZjNWMwMGJmMTMwODRkYTc0Jmxhbmd1YWdlPXB0LUJSJnBhZ2U9MSdcclxuICAgICAgKVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHJlc3BvbnNlLmRhdGEpXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGFcclxuICAgIH0gXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZSAocHJvcHMpIHtcclxuICBjb25zdCB7ZGF0YX0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgey8qIDxJbWFnZSBzcmM9e2ljb25DaW5lU30gYWx0PVwiY2luZW1hLXN0YXRpb24taWNvblwiIC8+ICovfVxyXG4gICAgICAgIDxsaW5rIHJlbD1cImNpbmUtaWNvblwiIGhyZWY9e2ljb25DaW5lU30gdHlwZT1cImltYWdlL2ljb1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPkNpbmVtYSBTdGF0aW9uPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiY2luZW1hLXN0YXRpb25cIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGVyPiAgICAgICAgIFxyXG4gICAgICAgICAgPFZpZXdJbWFnZT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17bG9nb0NpbmVTfSBhbHQ9XCJjaW5lbWEtc3RhdGlvbi1sb2dvXCIgd2lkdGg9JzE4MCcgaGVpZ2h0PScxODAnLz5cclxuICAgICAgICAgIDwvVmlld0ltYWdlPiAgICAgICAgIFxyXG4gICAgICAgIDwvSGVhZGVyPlxyXG4gICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAge2RhdGEucmVzdWx0cy5tYXAobW92aWUgPT5cclxuICAgICAgICAgICAgPE1vdmllUHJldmlld1xyXG4gICAgICAgICAgICAgIGtleT17bW92aWUuaWR9XHJcbiAgICAgICAgICAgICAgbW92aWU9e21vdmllfVxyXG4gICAgICAgICAgICAvPil9XHJcbiAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIHsvKiA8TW92aWVzV3JhcHBlcj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtwYWdlTW92aWVzLm1hcCgobW92aWUpID0+IChcclxuICAgICAgICAgICAgICA8TW92aWVTZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBrZXk9e21vdmllLmlkfVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlPXttb3ZpZS5wb3N0ZXJfcGF0aH1cclxuICAgICAgICAgICAgICAgIG1vdmllTmFtZT17bW92aWUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBvdmVybGF5Tm9kZT17KFxyXG4gICAgICAgICAgICAgICAgICA8RGVmYXVsdE92ZXJsYXlDb250ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e21vdmllLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXttb3ZpZS5vdmVydmlld31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L01vdmllU2VjdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L01vdmllc1dyYXBwZXI+ICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQuZGl2YGBcclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAyMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTsvLyMwMDIyMzM7XHJcbmBcclxuZXhwb3J0IGNvbnN0IEJ1dHRvbnMgPSBzdHlsZWQuZGl2YGBcclxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgYFxyXG5leHBvcnQgY29uc3QgVmlld0ltYWdlID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDIwdmg7XHJcbmBcclxuIiwiZXhwb3J0IGRlZmF1bHQgIHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9wdWJsaWMvYXNzZXRzL2NpbmUtc3RhdGlvbi1pY29uLjE1Y2M0MjYyMGY2MTFiMGU4OTUyMDY4OWJmYzA3OTdjLmljb1wiLFwiaGVpZ2h0XCI6MjU2LFwid2lkdGhcIjoyNTZ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9jaW5lLXN0YXRpb24tbG9nby43ZTg5MjNmMzU1YTBlYmU0MzcyYWY4YzAzYjEyNDE3ZC5wbmdcIixcImhlaWdodFwiOjUwMCxcIndpZHRoXCI6NTAwLFwiYmx1ckRhdGFVUkxcIjpcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWdBQUFBSUNBWUFBQURFRDc2TEFBQUJEa2xFUVZSNG5BVkFQMHRDVVJUL25YdWZXWVlSaGFHRS9YRkpncUtnb2FCb2FIV0t4aHpjd3UvUkZBUUdsbE5ORVRXME9ZUU5PZGNVMUdEUkM3RVUwOEZLZmUvMTdqbEJ1VjFXZytPZ3ppdU0xMFE0TklNdHYwdWxvUWk2TEVKMGxCWll3NEtmR2xMaE9BNlVoYVJoRkxONVNtV0x0cUo4UnFhWjVIQWtTdHVUYzRBU0dMc01IVDFENGliWHNpbVg1cWRva3VaakMrSi9PUzVWTzU1K2wvN2ZSYUorM1F6MTk2bVFrYnZnb3JkWldubnhYYzFXSkFTWkdOQWNNRm8vOXR4bktrUGk1NFhHNWVoR2UyMHBHUFo3UGx1S0FJY1p0OSsvWGRxN3FxS3dYSm5hYVVmc01VdXBIb3ZUTXFaZU1lYmpqZVdFc3FlZituajkzcUFSV3dWb0Zzd1A4UHhhTEJqbzEwWHdEeTN4ZjZ5VnpDdkJBQUFBQUVsRlRrU3VRbUNDXCJ9OyIsImV4cG9ydCBkZWZhdWx0ICB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvcHVibGljL2Fzc2V0cy9yaWdodC1jaGV2cm9uLmQwZjVkNDk0NmU2NmMwYWI3NGJiZjcyZDA3OGY1NTg4LnBuZ1wiLFwiaGVpZ2h0XCI6NTEyLFwid2lkdGhcIjo1MTIsXCJibHVyRGF0YVVSTFwiOlwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFJQ0FZQUFBREVENzZMQUFBQTNVbEVRVlI0MmpXUHl3N0JZQkNGcDJ3OWs3Y1FLNGxZQ09MZXFoOHRjV25pOGdpZWdJUzRCSWxFYld3cUlWWldOamJFNVFVNlkyRWErbTNuNUh4endIaDlBbzByemFvbkhKVjNOQzJ1c1F0TXlVUkptYUFFeG9PeXJSc1ZOUXN6RllzYTZnTERoVG4yZ0JFbVNlQlF2MUN6ZHNha01ERWhOcFJYeG5aU0dXRUhITFFEZVlEUkQ2UnJGcVc0SWF1dU1DZ1A3S2c4eEJLNDZFZXFjeURPZ2J5NnhKZzh0R05Pd0ZWMFdSRVZXMHl4UXNuMGJSOHJjdUJnUEVsdjNTbXQ3Vkh3a3pWdUNIR0RIeGgrMWdQRyt4UDV6eHo4WmxMN2YvUUNBSHdCV2o2STlNOFR3QTRBQUFBQVNVVk9SSzVDWUlJPVwifTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9