import {
  require_classnames
} from "./chunk-GSKJAQL2.js";
import {
  require_react_dom
} from "./chunk-EVB5MFRE.js";
import {
  require_react
} from "./chunk-KZRXRAEA.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-OL46QLBJ.js";

// node_modules/react-datasheet-grid/dist/hooks/useColumnWidths.js
var require_useColumnWidths = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useColumnWidths.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useColumnWidths = exports.getColumnWidths = void 0;
    var react_1 = require_react();
    var getColumnWidths = (containerWidth, columns) => {
      const items = columns.map(({ basis, minWidth, maxWidth }) => ({
        basis,
        minWidth,
        maxWidth,
        size: basis,
        violation: 0,
        frozen: false,
        factor: 0
      }));
      let availableWidth = items.reduce((acc, cur) => acc - cur.size, containerWidth);
      if (availableWidth > 0) {
        columns.forEach(({ grow }, i) => {
          items[i].factor = grow;
        });
      } else if (availableWidth < 0) {
        columns.forEach(({ shrink }, i) => {
          items[i].factor = shrink;
        });
      }
      for (const item of items) {
        if (item.factor === 0) {
          item.frozen = true;
        }
      }
      while (items.some(({ frozen }) => !frozen)) {
        const sumFactors = items.reduce((acc, cur) => acc + (cur.frozen ? 0 : cur.factor), 0);
        let totalViolation = 0;
        for (const item of items) {
          if (!item.frozen) {
            item.size += availableWidth * item.factor / sumFactors;
            if (item.size < item.minWidth) {
              item.violation = item.minWidth - item.size;
            } else if (item.maxWidth !== void 0 && item.size > item.maxWidth) {
              item.violation = item.maxWidth - item.size;
            } else {
              item.violation = 0;
            }
            item.size += item.violation;
            totalViolation += item.violation;
          }
        }
        if (totalViolation > 0) {
          for (const item of items) {
            if (item.violation > 0) {
              item.frozen = true;
            }
          }
        } else if (totalViolation < 0) {
          for (const item of items) {
            if (item.violation < 0) {
              item.frozen = true;
            }
          }
        } else {
          break;
        }
        availableWidth = items.reduce((acc, cur) => acc - cur.size, containerWidth);
      }
      return items.map(({ size }) => size);
    };
    exports.getColumnWidths = getColumnWidths;
    var useColumnWidths = (columns, width) => {
      const columnsHash = columns.map(({ basis, minWidth, maxWidth, grow, shrink }) => [basis, minWidth, maxWidth, grow, shrink].join(",")).join("|");
      return (0, react_1.useMemo)(() => {
        if (width === void 0) {
          return {
            fullWidth: false,
            columnWidths: void 0,
            columnRights: void 0,
            totalWidth: void 0
          };
        }
        const columnWidths = (0, exports.getColumnWidths)(width, columns);
        let totalWidth = 0;
        const columnRights = columnWidths.map((w, i) => {
          totalWidth += w;
          return i === columnWidths.length - 1 ? Infinity : totalWidth;
        });
        return {
          fullWidth: Math.abs(width - totalWidth) < 0.1,
          columnWidths,
          columnRights,
          totalWidth
        };
      }, [width, columnsHash]);
    };
    exports.useColumnWidths = useColumnWidths;
  }
});

// node_modules/react-resize-detector/build/index.esm.js
var index_esm_exports = {};
__export(index_esm_exports, {
  default: () => ResizeDetector,
  useResizeDetector: () => useResizeDetector,
  withResizeDetector: () => withResizeDetector
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function getRawTag$1(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
function baseGetTag$1(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
function isSymbol$1(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
function withResizeDetector(ComponentInner, options) {
  if (options === void 0) {
    options = {};
  }
  var ResizeDetectorHOC = (
    /** @class */
    function(_super) {
      __extends(ResizeDetectorHOC2, _super);
      function ResizeDetectorHOC2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ref = (0, import_react.createRef)();
        return _this;
      }
      ResizeDetectorHOC2.prototype.render = function() {
        var _a = this.props, forwardedRef = _a.forwardedRef, rest = __rest(_a, ["forwardedRef"]);
        var targetRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : this.ref;
        return React.createElement(
          ResizeDetector,
          __assign({}, options, { targetRef }),
          React.createElement(ComponentInner, __assign({ targetRef }, rest))
        );
      };
      return ResizeDetectorHOC2;
    }(import_react.Component)
  );
  function forwardRefWrapper(props, ref) {
    return React.createElement(ResizeDetectorHOC, __assign({}, props, { forwardedRef: ref }));
  }
  var name = ComponentInner.displayName || ComponentInner.name;
  forwardRefWrapper.displayName = "withResizeDetector(".concat(name, ")");
  return (0, import_react.forwardRef)(forwardRefWrapper);
}
function useResizeDetector(props) {
  if (props === void 0) {
    props = {};
  }
  var _a = props.skipOnMount, skipOnMount = _a === void 0 ? false : _a, refreshMode = props.refreshMode, _b = props.refreshRate, refreshRate = _b === void 0 ? 1e3 : _b, refreshOptions = props.refreshOptions, _c = props.handleWidth, handleWidth = _c === void 0 ? true : _c, _d = props.handleHeight, handleHeight = _d === void 0 ? true : _d, targetRef = props.targetRef, observerOptions = props.observerOptions, onResize = props.onResize;
  var skipResize = (0, import_react.useRef)(skipOnMount);
  var localRef = (0, import_react.useRef)(null);
  var ref = targetRef !== null && targetRef !== void 0 ? targetRef : localRef;
  var resizeHandler = (0, import_react.useRef)();
  var _e = (0, import_react.useState)({
    width: void 0,
    height: void 0
  }), size = _e[0], setSize = _e[1];
  useEnhancedEffect(function() {
    if (isSSR()) {
      return;
    }
    var notifyResize = createNotifier(onResize, setSize, handleWidth, handleHeight);
    var resizeCallback = function(entries) {
      if (!handleWidth && !handleHeight)
        return;
      entries.forEach(function(entry) {
        var _a2 = entry && entry.contentRect || {}, width = _a2.width, height = _a2.height;
        var shouldSetSize = !skipResize.current && !isSSR();
        if (shouldSetSize) {
          notifyResize({ width, height });
        }
        skipResize.current = false;
      });
    };
    resizeHandler.current = patchResizeHandler(resizeCallback, refreshMode, refreshRate, refreshOptions);
    var resizeObserver = new window.ResizeObserver(resizeHandler.current);
    if (ref.current) {
      resizeObserver.observe(ref.current, observerOptions);
    }
    return function() {
      resizeObserver.disconnect();
      var patchedResizeHandler = resizeHandler.current;
      if (patchedResizeHandler && patchedResizeHandler.cancel) {
        patchedResizeHandler.cancel();
      }
    };
  }, [refreshMode, refreshRate, refreshOptions, handleWidth, handleHeight, onResize, observerOptions, ref.current]);
  return __assign({ ref }, size);
}
var React, import_react, import_react_dom, extendStatics, __assign, commonjsGlobal, isObject_1, freeGlobal$1, _freeGlobal, freeGlobal, freeSelf, root$2, _root, root$1, now$1, now_1, reWhitespace, _trimmedEndIndex, trimmedEndIndex, reTrimStart, _baseTrim, root, Symbol$2, _Symbol, Symbol$1, objectProto$1, hasOwnProperty, nativeObjectToString$1, symToStringTag$1, _getRawTag, objectProto, nativeObjectToString, _objectToString, Symbol2, getRawTag, objectToString, nullTag, undefinedTag, symToStringTag, _baseGetTag, isObjectLike_1, baseGetTag, isObjectLike, symbolTag, isSymbol_1, baseTrim, isObject$2, isSymbol, NAN, reIsBadHex, reIsBinary, reIsOctal, freeParseInt, toNumber_1, isObject$1, now, toNumber, FUNC_ERROR_TEXT$1, nativeMax, nativeMin, debounce_1, debounce, isObject, FUNC_ERROR_TEXT, throttle_1, patchResizeHandler, isFunction, isSSR, isDOMElement, createNotifier, ResizeDetector, useEnhancedEffect;
var init_index_esm = __esm({
  "node_modules/react-resize-detector/build/index.esm.js"() {
    React = __toESM(require_react());
    import_react = __toESM(require_react());
    import_react_dom = __toESM(require_react_dom());
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    isObject_1 = isObject$3;
    freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    _freeGlobal = freeGlobal$1;
    freeGlobal = _freeGlobal;
    freeSelf = typeof self == "object" && self && self.Object === Object && self;
    root$2 = freeGlobal || freeSelf || Function("return this")();
    _root = root$2;
    root$1 = _root;
    now$1 = function() {
      return root$1.Date.now();
    };
    now_1 = now$1;
    reWhitespace = /\s/;
    _trimmedEndIndex = trimmedEndIndex$1;
    trimmedEndIndex = _trimmedEndIndex;
    reTrimStart = /^\s+/;
    _baseTrim = baseTrim$1;
    root = _root;
    Symbol$2 = root.Symbol;
    _Symbol = Symbol$2;
    Symbol$1 = _Symbol;
    objectProto$1 = Object.prototype;
    hasOwnProperty = objectProto$1.hasOwnProperty;
    nativeObjectToString$1 = objectProto$1.toString;
    symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
    _getRawTag = getRawTag$1;
    objectProto = Object.prototype;
    nativeObjectToString = objectProto.toString;
    _objectToString = objectToString$1;
    Symbol2 = _Symbol;
    getRawTag = _getRawTag;
    objectToString = _objectToString;
    nullTag = "[object Null]";
    undefinedTag = "[object Undefined]";
    symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    _baseGetTag = baseGetTag$1;
    isObjectLike_1 = isObjectLike$1;
    baseGetTag = _baseGetTag;
    isObjectLike = isObjectLike_1;
    symbolTag = "[object Symbol]";
    isSymbol_1 = isSymbol$1;
    baseTrim = _baseTrim;
    isObject$2 = isObject_1;
    isSymbol = isSymbol_1;
    NAN = 0 / 0;
    reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    reIsBinary = /^0b[01]+$/i;
    reIsOctal = /^0o[0-7]+$/i;
    freeParseInt = parseInt;
    toNumber_1 = toNumber$1;
    isObject$1 = isObject_1;
    now = now_1;
    toNumber = toNumber_1;
    FUNC_ERROR_TEXT$1 = "Expected a function";
    nativeMax = Math.max;
    nativeMin = Math.min;
    debounce_1 = debounce$1;
    debounce = debounce_1;
    isObject = isObject_1;
    FUNC_ERROR_TEXT = "Expected a function";
    throttle_1 = throttle;
    patchResizeHandler = function(resizeCallback, refreshMode, refreshRate, refreshOptions) {
      switch (refreshMode) {
        case "debounce":
          return debounce_1(resizeCallback, refreshRate, refreshOptions);
        case "throttle":
          return throttle_1(resizeCallback, refreshRate, refreshOptions);
        default:
          return resizeCallback;
      }
    };
    isFunction = function(fn) {
      return typeof fn === "function";
    };
    isSSR = function() {
      return typeof window === "undefined";
    };
    isDOMElement = function(element) {
      return element instanceof Element || element instanceof HTMLDocument;
    };
    createNotifier = function(onResize, setSize, handleWidth, handleHeight) {
      return function(_a) {
        var width = _a.width, height = _a.height;
        setSize(function(prev) {
          if (prev.width === width && prev.height === height) {
            return prev;
          }
          if (prev.width === width && !handleHeight || prev.height === height && !handleWidth) {
            return prev;
          }
          if (onResize && isFunction(onResize)) {
            onResize(width, height);
          }
          return { width, height };
        });
      };
    };
    ResizeDetector = /** @class */
    function(_super) {
      __extends(ResizeDetector2, _super);
      function ResizeDetector2(props) {
        var _this = _super.call(this, props) || this;
        _this.cancelHandler = function() {
          if (_this.resizeHandler && _this.resizeHandler.cancel) {
            _this.resizeHandler.cancel();
            _this.resizeHandler = null;
          }
        };
        _this.attachObserver = function() {
          var _a2 = _this.props, targetRef = _a2.targetRef, observerOptions = _a2.observerOptions;
          if (isSSR()) {
            return;
          }
          if (targetRef && targetRef.current) {
            _this.targetRef.current = targetRef.current;
          }
          var element = _this.getElement();
          if (!element) {
            return;
          }
          if (_this.observableElement && _this.observableElement === element) {
            return;
          }
          _this.observableElement = element;
          _this.resizeObserver.observe(element, observerOptions);
        };
        _this.getElement = function() {
          var _a2 = _this.props, querySelector = _a2.querySelector, targetDomEl = _a2.targetDomEl;
          if (isSSR())
            return null;
          if (querySelector)
            return document.querySelector(querySelector);
          if (targetDomEl && isDOMElement(targetDomEl))
            return targetDomEl;
          if (_this.targetRef && isDOMElement(_this.targetRef.current))
            return _this.targetRef.current;
          var currentElement = (0, import_react_dom.findDOMNode)(_this);
          if (!currentElement)
            return null;
          var renderType = _this.getRenderType();
          switch (renderType) {
            case "renderProp":
              return currentElement;
            case "childFunction":
              return currentElement;
            case "child":
              return currentElement;
            case "childArray":
              return currentElement;
            default:
              return currentElement.parentElement;
          }
        };
        _this.createResizeHandler = function(entries) {
          var _a2 = _this.props, _b = _a2.handleWidth, handleWidth = _b === void 0 ? true : _b, _c = _a2.handleHeight, handleHeight = _c === void 0 ? true : _c, onResize = _a2.onResize;
          if (!handleWidth && !handleHeight)
            return;
          var notifyResize = createNotifier(onResize, _this.setState.bind(_this), handleWidth, handleHeight);
          entries.forEach(function(entry) {
            var _a3 = entry && entry.contentRect || {}, width = _a3.width, height = _a3.height;
            var shouldSetSize = !_this.skipOnMount && !isSSR();
            if (shouldSetSize) {
              notifyResize({ width, height });
            }
            _this.skipOnMount = false;
          });
        };
        _this.getRenderType = function() {
          var _a2 = _this.props, render = _a2.render, children = _a2.children;
          if (isFunction(render)) {
            return "renderProp";
          }
          if (isFunction(children)) {
            return "childFunction";
          }
          if ((0, import_react.isValidElement)(children)) {
            return "child";
          }
          if (Array.isArray(children)) {
            return "childArray";
          }
          return "parent";
        };
        var skipOnMount = props.skipOnMount, refreshMode = props.refreshMode, _a = props.refreshRate, refreshRate = _a === void 0 ? 1e3 : _a, refreshOptions = props.refreshOptions;
        _this.state = {
          width: void 0,
          height: void 0
        };
        _this.skipOnMount = skipOnMount;
        _this.targetRef = (0, import_react.createRef)();
        _this.observableElement = null;
        if (isSSR()) {
          return _this;
        }
        _this.resizeHandler = patchResizeHandler(_this.createResizeHandler, refreshMode, refreshRate, refreshOptions);
        _this.resizeObserver = new window.ResizeObserver(_this.resizeHandler);
        return _this;
      }
      ResizeDetector2.prototype.componentDidMount = function() {
        this.attachObserver();
      };
      ResizeDetector2.prototype.componentDidUpdate = function() {
        this.attachObserver();
      };
      ResizeDetector2.prototype.componentWillUnmount = function() {
        if (isSSR()) {
          return;
        }
        this.observableElement = null;
        this.resizeObserver.disconnect();
        this.cancelHandler();
      };
      ResizeDetector2.prototype.render = function() {
        var _a = this.props, render = _a.render, children = _a.children, _b = _a.nodeType, WrapperTag = _b === void 0 ? "div" : _b;
        var _c = this.state, width = _c.width, height = _c.height;
        var childProps = { width, height, targetRef: this.targetRef };
        var renderType = this.getRenderType();
        var typedChildren;
        switch (renderType) {
          case "renderProp":
            return render && render(childProps);
          case "childFunction":
            typedChildren = children;
            return typedChildren(childProps);
          case "child":
            typedChildren = children;
            if (typedChildren.type && typeof typedChildren.type === "string") {
              childProps.targetRef;
              var nativeProps = __rest(childProps, ["targetRef"]);
              return (0, import_react.cloneElement)(typedChildren, nativeProps);
            }
            return (0, import_react.cloneElement)(typedChildren, childProps);
          case "childArray":
            typedChildren = children;
            return typedChildren.map(function(el) {
              return !!el && (0, import_react.cloneElement)(el, childProps);
            });
          default:
            return React.createElement(WrapperTag, null);
        }
      };
      return ResizeDetector2;
    }(import_react.PureComponent);
    useEnhancedEffect = isSSR() ? import_react.useEffect : import_react.useLayoutEffect;
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useColumns.js
var require_useColumns = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useColumns.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useColumns = exports.parseFlexValue = void 0;
    var react_1 = __importStar(require_react());
    var defaultComponent = () => react_1.default.createElement(react_1.default.Fragment, null);
    var defaultIsCellEmpty = () => false;
    var identityRow = ({ rowData }) => rowData;
    var defaultCopyValue = () => null;
    var defaultGutterComponent = ({ rowIndex }) => react_1.default.createElement(react_1.default.Fragment, null, rowIndex + 1);
    var cellAlwaysEmpty = () => true;
    var defaultPrePasteValues = (values) => values;
    var parseFlexValue = (value) => {
      if (typeof value === "number") {
        return {
          basis: 0,
          grow: value,
          shrink: 1
        };
      }
      if (value.match(/^ *\d+(\.\d*)? *$/)) {
        return {
          basis: 0,
          grow: parseFloat(value.trim()),
          shrink: 1
        };
      }
      if (value.match(/^ *\d+(\.\d*)? *px *$/)) {
        return {
          basis: parseFloat(value.trim()),
          grow: 1,
          shrink: 1
        };
      }
      if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? *$/)) {
        const [grow, shrink] = value.trim().split(" ");
        return {
          basis: 0,
          grow: parseFloat(grow),
          shrink: parseFloat(shrink)
        };
      }
      if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? *px *$/)) {
        const [grow, basis] = value.trim().split(" ");
        return {
          basis: parseFloat(basis),
          grow: parseFloat(grow),
          shrink: 1
        };
      }
      if (value.match(/^ *\d+(\.\d*)? \d+(\.\d*)? \d+(\.\d*)? *px *$/)) {
        const [grow, shrink, basis] = value.trim().split(" ");
        return {
          basis: parseFloat(basis),
          grow: parseFloat(grow),
          shrink: parseFloat(shrink)
        };
      }
      return {
        basis: 0,
        grow: 1,
        shrink: 1
      };
    };
    exports.parseFlexValue = parseFlexValue;
    var useColumns = (columns, gutterColumn, stickyRightColumn) => {
      return (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const partialColumns = [
          gutterColumn === false ? {
            basis: 0,
            grow: 0,
            shrink: 0,
            minWidth: 0,
            // eslint-disable-next-line react/display-name
            component: () => react_1.default.createElement(react_1.default.Fragment, null),
            headerClassName: "dsg-hidden-cell",
            cellClassName: "dsg-hidden-cell",
            isCellEmpty: cellAlwaysEmpty
          } : Object.assign(Object.assign({}, gutterColumn), { basis: (_a = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.basis) !== null && _a !== void 0 ? _a : 40, grow: (_b = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.grow) !== null && _b !== void 0 ? _b : 0, shrink: (_c = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.shrink) !== null && _c !== void 0 ? _c : 0, minWidth: (_d = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.minWidth) !== null && _d !== void 0 ? _d : 0, title: (_e = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.title) !== null && _e !== void 0 ? _e : react_1.default.createElement("div", { className: "dsg-corner-indicator" }), component: (_f = gutterColumn === null || gutterColumn === void 0 ? void 0 : gutterColumn.component) !== null && _f !== void 0 ? _f : defaultGutterComponent, isCellEmpty: cellAlwaysEmpty }),
          ...columns
        ];
        if (stickyRightColumn) {
          partialColumns.push(Object.assign(Object.assign({}, stickyRightColumn), { basis: (_g = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.basis) !== null && _g !== void 0 ? _g : 40, grow: (_h = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.grow) !== null && _h !== void 0 ? _h : 0, shrink: (_j = stickyRightColumn === null || stickyRightColumn === void 0 ? void 0 : stickyRightColumn.shrink) !== null && _j !== void 0 ? _j : 0, minWidth: (_k = stickyRightColumn.minWidth) !== null && _k !== void 0 ? _k : 0, isCellEmpty: cellAlwaysEmpty }));
        }
        return partialColumns.map((column) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _j2, _k2, _l, _m, _o, _p, _q, _r;
          const legacyWidth = column.width !== void 0 ? (0, exports.parseFlexValue)(column.width) : {
            basis: void 0,
            grow: void 0,
            shrink: void 0
          };
          return Object.assign(Object.assign({}, column), { basis: (_b2 = (_a2 = column.basis) !== null && _a2 !== void 0 ? _a2 : legacyWidth.basis) !== null && _b2 !== void 0 ? _b2 : 0, grow: (_d2 = (_c2 = column.grow) !== null && _c2 !== void 0 ? _c2 : legacyWidth.grow) !== null && _d2 !== void 0 ? _d2 : 1, shrink: (_f2 = (_e2 = column.shrink) !== null && _e2 !== void 0 ? _e2 : legacyWidth.shrink) !== null && _f2 !== void 0 ? _f2 : 1, minWidth: (_g2 = column.minWidth) !== null && _g2 !== void 0 ? _g2 : 100, component: (_h2 = column.component) !== null && _h2 !== void 0 ? _h2 : defaultComponent, disableKeys: (_j2 = column.disableKeys) !== null && _j2 !== void 0 ? _j2 : false, disabled: (_k2 = column.disabled) !== null && _k2 !== void 0 ? _k2 : false, keepFocus: (_l = column.keepFocus) !== null && _l !== void 0 ? _l : false, deleteValue: (_m = column.deleteValue) !== null && _m !== void 0 ? _m : identityRow, copyValue: (_o = column.copyValue) !== null && _o !== void 0 ? _o : defaultCopyValue, pasteValue: (_p = column.pasteValue) !== null && _p !== void 0 ? _p : identityRow, prePasteValues: (_q = column.prePasteValues) !== null && _q !== void 0 ? _q : defaultPrePasteValues, isCellEmpty: (_r = column.isCellEmpty) !== null && _r !== void 0 ? _r : defaultIsCellEmpty });
        });
      }, [gutterColumn, stickyRightColumn, columns]);
    };
    exports.useColumns = useColumns;
  }
});

// node_modules/throttle-debounce/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/throttle-debounce/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function throttle2(delay, noTrailing, callback, debounceMode) {
      var timeoutID;
      var cancelled = false;
      var lastExec = 0;
      function clearExistingTimeout() {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
      }
      function cancel() {
        clearExistingTimeout();
        cancelled = true;
      }
      if (typeof noTrailing !== "boolean") {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = void 0;
      }
      function wrapper() {
        for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
          arguments_[_key] = arguments[_key];
        }
        var self2 = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) {
          return;
        }
        function exec() {
          lastExec = Date.now();
          callback.apply(self2, arguments_);
        }
        function clear() {
          timeoutID = void 0;
        }
        if (debounceMode && !timeoutID) {
          exec();
        }
        clearExistingTimeout();
        if (debounceMode === void 0 && elapsed > delay) {
          exec();
        } else if (noTrailing !== true) {
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
        }
      }
      wrapper.cancel = cancel;
      return wrapper;
    }
    function debounce2(delay, atBegin, callback) {
      return callback === void 0 ? throttle2(delay, atBegin, false) : throttle2(delay, callback, atBegin !== false);
    }
    exports.debounce = debounce2;
    exports.throttle = throttle2;
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useDeepEqualState.js
var require_useDeepEqualState = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useDeepEqualState.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useDeepEqualState = void 0;
    var react_1 = require_react();
    var fast_deep_equal_1 = __importDefault(require_fast_deep_equal());
    var useDeepEqualState = (defaultValue) => {
      const [value, setValue] = (0, react_1.useState)(defaultValue);
      const customSetValue = (0, react_1.useCallback)((newValue) => {
        setValue((prevValue) => {
          const nextValue = typeof newValue === "function" ? newValue(prevValue) : newValue;
          return (0, fast_deep_equal_1.default)(nextValue, prevValue) ? prevValue : nextValue;
        });
      }, [setValue]);
      return [value, customSetValue];
    };
    exports.useDeepEqualState = useDeepEqualState;
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useEdges.js
var require_useEdges = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useEdges.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useEdges = void 0;
    var react_1 = require_react();
    var throttle_debounce_1 = require_cjs();
    var useDeepEqualState_1 = require_useDeepEqualState();
    var useEdges = (ref, width, height) => {
      const [edges, setEdges] = (0, useDeepEqualState_1.useDeepEqualState)({
        top: true,
        right: true,
        bottom: true,
        left: true
      });
      (0, react_1.useEffect)(() => {
        const onScroll = (0, throttle_debounce_1.throttle)(100, () => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
          setEdges({
            top: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollTop) === 0,
            right: ((_c = (_b = ref.current) === null || _b === void 0 ? void 0 : _b.scrollLeft) !== null && _c !== void 0 ? _c : 0) >= ((_e = (_d = ref.current) === null || _d === void 0 ? void 0 : _d.scrollWidth) !== null && _e !== void 0 ? _e : 0) - (width !== null && width !== void 0 ? width : 0) - 1,
            bottom: ((_g = (_f = ref.current) === null || _f === void 0 ? void 0 : _f.scrollTop) !== null && _g !== void 0 ? _g : 0) >= ((_j = (_h = ref.current) === null || _h === void 0 ? void 0 : _h.scrollHeight) !== null && _j !== void 0 ? _j : 0) - (height !== null && height !== void 0 ? height : 0) - 1,
            left: ((_k = ref.current) === null || _k === void 0 ? void 0 : _k.scrollLeft) === 0
          });
        });
        const current = ref.current;
        current === null || current === void 0 ? void 0 : current.addEventListener("scroll", onScroll);
        setTimeout(onScroll, 100);
        return () => {
          current === null || current === void 0 ? void 0 : current.removeEventListener("scroll", onScroll);
          onScroll.cancel();
        };
      }, [height, width, ref, setEdges]);
      return edges;
    };
    exports.useEdges = useEdges;
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useDocumentEventListener.js
var require_useDocumentEventListener = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useDocumentEventListener.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useDocumentEventListener = void 0;
    var react_1 = require_react();
    var useDocumentEventListener = (type, listener) => {
      (0, react_1.useEffect)(() => {
        document.addEventListener(type, listener);
        return () => {
          document.removeEventListener(type, listener);
        };
      }, [listener, type]);
    };
    exports.useDocumentEventListener = useDocumentEventListener;
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useGetBoundingClientRect.js
var require_useGetBoundingClientRect = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useGetBoundingClientRect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useGetBoundingClientRect = void 0;
    var react_1 = require_react();
    var throttle_debounce_1 = require_cjs();
    var useGetBoundingClientRect = (ref, delay = 200) => {
      const boundingRect = (0, react_1.useRef)(null);
      const throttledCompute = (0, react_1.useMemo)(() => (0, throttle_debounce_1.throttle)(delay, true, () => {
        setTimeout(() => {
          var _a;
          return boundingRect.current = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || null;
        }, 0);
      }), [ref, delay]);
      return (0, react_1.useCallback)((force = false) => {
        var _a;
        if (force) {
          boundingRect.current = ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || null;
        } else {
          throttledCompute();
        }
        return boundingRect.current;
      }, [ref, throttledCompute]);
    };
    exports.useGetBoundingClientRect = useGetBoundingClientRect;
  }
});

// node_modules/react-datasheet-grid/dist/components/AddRows.js
var require_AddRows = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/AddRows.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AddRows = exports.createAddRowsComponent = void 0;
    var react_1 = __importStar(require_react());
    var createAddRowsComponent = (translationKeys = {}) => (
      // eslint-disable-next-line react/display-name
      ({ addRows }) => {
        var _a, _b;
        const [value, setValue] = (0, react_1.useState)(1);
        const [rawValue, setRawValue] = (0, react_1.useState)(String(value));
        return react_1.default.createElement(
          "div",
          { className: "dsg-add-row" },
          react_1.default.createElement("button", { type: "button", className: "dsg-add-row-btn", onClick: () => addRows(value) }, (_a = translationKeys.button) !== null && _a !== void 0 ? _a : "Add"),
          " ",
          react_1.default.createElement("input", { className: "dsg-add-row-input", value: rawValue, onBlur: () => setRawValue(String(value)), type: "number", min: 1, onChange: (e) => {
            setRawValue(e.target.value);
            setValue(Math.max(1, Math.round(parseInt(e.target.value) || 0)));
          }, onKeyDown: (event) => {
            if (event.key === "Enter") {
              addRows(value);
            }
          } }),
          " ",
          (_b = translationKeys.unit) !== null && _b !== void 0 ? _b : "rows"
        );
      }
    );
    exports.createAddRowsComponent = createAddRowsComponent;
    exports.AddRows = (0, exports.createAddRowsComponent)();
    exports.AddRows.displayName = "AddRows";
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useDebounceState.js
var require_useDebounceState = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useDebounceState.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useDebounceState = void 0;
    var react_1 = require_react();
    var throttle_debounce_1 = require_cjs();
    var useDebounceState = (defaultValue, delay) => {
      const [debouncedValue, setDebouncedValue] = (0, react_1.useState)(defaultValue);
      const cancelRef = (0, react_1.useRef)();
      (0, react_1.useEffect)(() => () => {
        var _a;
        return (_a = cancelRef.current) === null || _a === void 0 ? void 0 : _a.cancel();
      }, []);
      const setValue = (0, react_1.useMemo)(() => cancelRef.current = (0, throttle_debounce_1.debounce)(delay, (newValue) => {
        setDebouncedValue(newValue);
      }), [delay]);
      return [debouncedValue, setValue];
    };
    exports.useDebounceState = useDebounceState;
  }
});

// node_modules/react-datasheet-grid/dist/components/ContextMenu.js
var require_ContextMenu = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/ContextMenu.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContextMenu = exports.createContextMenuComponent = exports.defaultRenderItem = void 0;
    var React2 = __importStar(require_react());
    var react_1 = require_react();
    var useDocumentEventListener_1 = require_useDocumentEventListener();
    var defaultRenderItem = (item) => {
      if (item.type === "CUT") {
        return React2.createElement(React2.Fragment, null, "Cut");
      }
      if (item.type === "COPY") {
        return React2.createElement(React2.Fragment, null, "Copy");
      }
      if (item.type === "PASTE") {
        return React2.createElement(React2.Fragment, null, "Paste");
      }
      if (item.type === "DELETE_ROW") {
        return React2.createElement(React2.Fragment, null, "Delete row");
      }
      if (item.type === "DELETE_ROWS") {
        return React2.createElement(
          React2.Fragment,
          null,
          "Delete rows ",
          React2.createElement("b", null, item.fromRow),
          " to ",
          React2.createElement("b", null, item.toRow)
        );
      }
      if (item.type === "INSERT_ROW_BELLOW") {
        return React2.createElement(React2.Fragment, null, "Insert row below");
      }
      if (item.type === "DUPLICATE_ROW") {
        return React2.createElement(React2.Fragment, null, "Duplicate row");
      }
      if (item.type === "DUPLICATE_ROWS") {
        return React2.createElement(
          React2.Fragment,
          null,
          "Duplicate rows ",
          React2.createElement("b", null, item.fromRow),
          " to ",
          React2.createElement("b", null, item.toRow)
        );
      }
      return item.type;
    };
    exports.defaultRenderItem = defaultRenderItem;
    var createContextMenuComponent = (renderItem = exports.defaultRenderItem) => (
      // eslint-disable-next-line react/display-name
      ({ clientX, clientY, items, close }) => {
        const containerRef = (0, react_1.useRef)(null);
        const onClickOutside = (0, react_1.useCallback)((event) => {
          var _a;
          const clickInside = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
          if (!clickInside) {
            close();
          }
        }, [close]);
        (0, useDocumentEventListener_1.useDocumentEventListener)("mousedown", onClickOutside);
        return React2.createElement("div", { className: "dsg-context-menu", style: { left: clientX + "px", top: clientY + "px" }, ref: containerRef }, items.map((item) => React2.createElement("div", { key: item.type, onClick: item.action, className: "dsg-context-menu-item" }, renderItem(item))));
      }
    );
    exports.createContextMenuComponent = createContextMenuComponent;
    exports.ContextMenu = (0, exports.createContextMenuComponent)(exports.defaultRenderItem);
    exports.ContextMenu.displayName = "ContextMenu";
  }
});

// node_modules/react-datasheet-grid/dist/utils/domParser.js
var require_domParser = __commonJS({
  "node_modules/react-datasheet-grid/dist/utils/domParser.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseDom = void 0;
    var parser = typeof DOMParser !== "undefined" ? new DOMParser() : { parseFromString: () => null };
    var parseDom = (html) => {
      return parser.parseFromString(html, "text/html");
    };
    exports.parseDom = parseDom;
  }
});

// node_modules/react-datasheet-grid/dist/utils/copyPasting.js
var require_copyPasting = __commonJS({
  "node_modules/react-datasheet-grid/dist/utils/copyPasting.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPrintableUnicode = exports.encodeHtml = exports.parseTextPlainData = exports.parseTextHtmlData = void 0;
    var domParser_1 = require_domParser();
    var parseTextHtmlData = (data) => {
      var _a, _b;
      const doc = (0, domParser_1.parseDom)(data.replace(/<br\/?>/g, "\n"));
      const table = doc.getElementsByTagName("table")[0];
      if (table) {
        const rows = [];
        for (let i = 0; i < table.rows.length; i++) {
          const row = [];
          rows.push(row);
          for (let j = 0; j < table.rows[i].cells.length; j++) {
            row.push((_a = table.rows[i].cells[j].textContent) !== null && _a !== void 0 ? _a : "");
          }
        }
        return rows;
      }
      const span = doc.getElementsByTagName("span")[0];
      if (span) {
        return [[(_b = span.textContent) !== null && _b !== void 0 ? _b : ""]];
      }
      return [[""]];
    };
    exports.parseTextHtmlData = parseTextHtmlData;
    var parseTextPlainData = (data) => {
      const cleanData = data.replace(/\r|\n$/g, "");
      const output = [[]];
      let cursor = 0;
      let startCell = 0;
      let quoted = false;
      let lastRowIndex = 0;
      const saveCell = () => {
        let str = cleanData.slice(startCell, cursor);
        if (str[0] === '"' && str[str.length - 1] === '"') {
          quoted = true;
        }
        if (quoted && str[str.length - 1] === '"' && str.includes("\n")) {
          str = str.slice(1, str.length - 1).replace(/""/g, '"');
          quoted = false;
        }
        if (quoted && str[str.length - 1] !== '"') {
          str.split("\n").forEach((cell, i, { length }) => {
            output[lastRowIndex].push(cell);
            if (i < length - 1) {
              output.push([]);
              lastRowIndex++;
            }
          });
        } else {
          output[lastRowIndex].push(str);
        }
      };
      while (cursor < cleanData.length) {
        if (quoted && cleanData[cursor] === '"' && ![void 0, "	", '"'].includes(cleanData[cursor + 1])) {
          quoted = false;
        }
        if (quoted && cleanData[cursor] === '"' && cleanData[cursor + 1] === '"') {
          cursor++;
        }
        if (cursor === startCell && cleanData[cursor] === '"') {
          quoted = true;
        }
        if (cleanData[cursor] === "	") {
          saveCell();
          startCell = cursor + 1;
          quoted = false;
        }
        if (cleanData[cursor] === "\n" && !quoted) {
          saveCell();
          output.push([]);
          startCell = cursor + 1;
          lastRowIndex++;
        }
        cursor++;
      }
      saveCell();
      return output;
    };
    exports.parseTextPlainData = parseTextPlainData;
    var encodeHtml = (str) => {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    };
    exports.encodeHtml = encodeHtml;
    var isPrintableUnicode = (str) => {
      return str.match(/^[^\x00-\x20\x7F-\x9F]$/) !== null;
    };
    exports.isPrintableUnicode = isPrintableUnicode;
  }
});

// node_modules/react-datasheet-grid/dist/utils/typeCheck.js
var require_typeCheck = __commonJS({
  "node_modules/react-datasheet-grid/dist/utils/typeCheck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getSelectionWithId = exports.getSelection = exports.getCellWithId = exports.getCell = void 0;
    var getCell = (value, colMax, rowMax, columns) => {
      if (value === null || !colMax || !rowMax) {
        return null;
      }
      if (typeof value !== "object") {
        throw new Error("Value must be an object or null");
      }
      const colIndex = columns.findIndex((column) => column.id === value.col);
      const cell = {
        col: Math.max(0, Math.min(colMax - 1, colIndex === -1 ? Number(value.col) : colIndex - 1)),
        row: Math.max(0, Math.min(rowMax - 1, Number(value.row)))
      };
      if (isNaN(cell.col) || isNaN(cell.row)) {
        throw new Error("col or cell are not valid positive numbers");
      }
      return cell;
    };
    exports.getCell = getCell;
    var getCellWithId = (cell, columns) => {
      var _a;
      return cell ? {
        col: cell.col,
        row: cell.row,
        colId: (_a = columns[cell.col + 1]) === null || _a === void 0 ? void 0 : _a.id
      } : null;
    };
    exports.getCellWithId = getCellWithId;
    var getSelection = (value, colMax, rowMax, columns) => {
      if (value === null || !colMax || !rowMax) {
        return null;
      }
      if (typeof value !== "object") {
        throw new Error("Value must be an object or null");
      }
      const selection = {
        min: (0, exports.getCell)(value.min, colMax, rowMax, columns),
        max: (0, exports.getCell)(value.max, colMax, rowMax, columns)
      };
      if (!selection.min || !selection.max) {
        throw new Error("min and max must be defined");
      }
      return selection;
    };
    exports.getSelection = getSelection;
    var getSelectionWithId = (selection, columns) => selection ? {
      min: (0, exports.getCellWithId)(selection.min, columns),
      max: (0, exports.getCellWithId)(selection.max, columns)
    } : null;
    exports.getSelectionWithId = getSelectionWithId;
  }
});

// node_modules/react-datasheet-grid/dist/utils/tab.js
var require_tab = __commonJS({
  "node_modules/react-datasheet-grid/dist/utils/tab.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getAllTabbableElements = void 0;
    var getAllTabbableElements = () => Array.from(document.querySelectorAll("*")).filter((element) => {
      return element instanceof HTMLElement && typeof element.tabIndex === "number" && element.tabIndex >= 0 && !element.disabled && (!(element instanceof HTMLAnchorElement) || !!element.href || element.getAttribute("tabIndex") !== null) && getComputedStyle(element).visibility !== "collapse";
    });
    exports.getAllTabbableElements = getAllTabbableElements;
  }
});

// node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/node_modules/@tanstack/virtual-core/dist/cjs/utils.cjs
var require_utils = __commonJS({
  "node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/node_modules/@tanstack/virtual-core/dist/cjs/utils.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    function memo(getDeps, fn, opts) {
      let deps = opts.initialDeps ?? [];
      let result;
      return () => {
        var _a, _b, _c, _d;
        let depTime;
        if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
        const newDeps = getDeps();
        const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
        if (!depsChanged) {
          return result;
        }
        deps = newDeps;
        let resultTime;
        if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
        result = fn(...newDeps);
        if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
          const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
          const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
          const resultFpsPercentage = resultEndTime / 16;
          const pad = (str, num) => {
            str = String(str);
            while (str.length < num) {
              str = " " + str;
            }
            return str;
          };
          console.info(
            `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * resultFpsPercentage, 120)
            )}deg 100% 31%);`,
            opts == null ? void 0 : opts.key
          );
        }
        (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
        return result;
      };
    }
    function notUndefined(value, msg) {
      if (value === void 0) {
        throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
      } else {
        return value;
      }
    }
    var approxEqual = (a, b) => Math.abs(a - b) < 1;
    var debounce2 = (targetWindow, fn, ms) => {
      let timeoutId;
      return function(...args) {
        targetWindow.clearTimeout(timeoutId);
        timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
      };
    };
    exports.approxEqual = approxEqual;
    exports.debounce = debounce2;
    exports.memo = memo;
    exports.notUndefined = notUndefined;
  }
});

// node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/node_modules/@tanstack/virtual-core/dist/cjs/index.cjs
var require_cjs2 = __commonJS({
  "node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/node_modules/@tanstack/virtual-core/dist/cjs/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    var utils = require_utils();
    var defaultKeyExtractor = (index) => index;
    var defaultRangeExtractor = (range) => {
      const start = Math.max(range.startIndex - range.overscan, 0);
      const end = Math.min(range.endIndex + range.overscan, range.count - 1);
      const arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    };
    var observeElementRect = (instance, cb) => {
      const element = instance.scrollElement;
      if (!element) {
        return;
      }
      const targetWindow = instance.targetWindow;
      if (!targetWindow) {
        return;
      }
      const handler = (rect) => {
        const { width, height } = rect;
        cb({ width: Math.round(width), height: Math.round(height) });
      };
      handler(element.getBoundingClientRect());
      if (!targetWindow.ResizeObserver) {
        return () => {
        };
      }
      const observer = new targetWindow.ResizeObserver((entries) => {
        const run = () => {
          const entry = entries[0];
          if (entry == null ? void 0 : entry.borderBoxSize) {
            const box = entry.borderBoxSize[0];
            if (box) {
              handler({ width: box.inlineSize, height: box.blockSize });
              return;
            }
          }
          handler(element.getBoundingClientRect());
        };
        instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
      });
      observer.observe(element, { box: "border-box" });
      return () => {
        observer.unobserve(element);
      };
    };
    var addEventListenerOptions = {
      passive: true
    };
    var observeWindowRect = (instance, cb) => {
      const element = instance.scrollElement;
      if (!element) {
        return;
      }
      const handler = () => {
        cb({ width: element.innerWidth, height: element.innerHeight });
      };
      handler();
      element.addEventListener("resize", handler, addEventListenerOptions);
      return () => {
        element.removeEventListener("resize", handler);
      };
    };
    var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
    var observeElementOffset = (instance, cb) => {
      const element = instance.scrollElement;
      if (!element) {
        return;
      }
      const targetWindow = instance.targetWindow;
      if (!targetWindow) {
        return;
      }
      let offset = 0;
      const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : utils.debounce(
        targetWindow,
        () => {
          cb(offset, false);
        },
        instance.options.isScrollingResetDelay
      );
      const createHandler = (isScrolling) => () => {
        const { horizontal, isRtl } = instance.options;
        offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
        fallback();
        cb(offset, isScrolling);
      };
      const handler = createHandler(true);
      const endHandler = createHandler(false);
      endHandler();
      element.addEventListener("scroll", handler, addEventListenerOptions);
      const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
      if (registerScrollendEvent) {
        element.addEventListener("scrollend", endHandler, addEventListenerOptions);
      }
      return () => {
        element.removeEventListener("scroll", handler);
        if (registerScrollendEvent) {
          element.removeEventListener("scrollend", endHandler);
        }
      };
    };
    var observeWindowOffset = (instance, cb) => {
      const element = instance.scrollElement;
      if (!element) {
        return;
      }
      const targetWindow = instance.targetWindow;
      if (!targetWindow) {
        return;
      }
      let offset = 0;
      const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => void 0 : utils.debounce(
        targetWindow,
        () => {
          cb(offset, false);
        },
        instance.options.isScrollingResetDelay
      );
      const createHandler = (isScrolling) => () => {
        offset = element[instance.options.horizontal ? "scrollX" : "scrollY"];
        fallback();
        cb(offset, isScrolling);
      };
      const handler = createHandler(true);
      const endHandler = createHandler(false);
      endHandler();
      element.addEventListener("scroll", handler, addEventListenerOptions);
      const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
      if (registerScrollendEvent) {
        element.addEventListener("scrollend", endHandler, addEventListenerOptions);
      }
      return () => {
        element.removeEventListener("scroll", handler);
        if (registerScrollendEvent) {
          element.removeEventListener("scrollend", endHandler);
        }
      };
    };
    var measureElement = (element, entry, instance) => {
      if (entry == null ? void 0 : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          const size = Math.round(
            box[instance.options.horizontal ? "inlineSize" : "blockSize"]
          );
          return size;
        }
      }
      return Math.round(
        element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
      );
    };
    var windowScroll = (offset, {
      adjustments = 0,
      behavior
    }, instance) => {
      var _a, _b;
      const toOffset = offset + adjustments;
      (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
        [instance.options.horizontal ? "left" : "top"]: toOffset,
        behavior
      });
    };
    var elementScroll = (offset, {
      adjustments = 0,
      behavior
    }, instance) => {
      var _a, _b;
      const toOffset = offset + adjustments;
      (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
        [instance.options.horizontal ? "left" : "top"]: toOffset,
        behavior
      });
    };
    var Virtualizer = class {
      constructor(opts) {
        this.unsubs = [];
        this.scrollElement = null;
        this.targetWindow = null;
        this.isScrolling = false;
        this.scrollToIndexTimeoutId = null;
        this.measurementsCache = [];
        this.itemSizeCache = /* @__PURE__ */ new Map();
        this.pendingMeasuredCacheIndexes = [];
        this.scrollRect = null;
        this.scrollOffset = null;
        this.scrollDirection = null;
        this.scrollAdjustments = 0;
        this.elementsCache = /* @__PURE__ */ new Map();
        this.observer = /* @__PURE__ */ (() => {
          let _ro = null;
          const get = () => {
            if (_ro) {
              return _ro;
            }
            if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
              return null;
            }
            return _ro = new this.targetWindow.ResizeObserver((entries) => {
              entries.forEach((entry) => {
                const run = () => {
                  this._measureElement(entry.target, entry);
                };
                this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
              });
            });
          };
          return {
            disconnect: () => {
              var _a;
              (_a = get()) == null ? void 0 : _a.disconnect();
              _ro = null;
            },
            observe: (target) => {
              var _a;
              return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
            },
            unobserve: (target) => {
              var _a;
              return (_a = get()) == null ? void 0 : _a.unobserve(target);
            }
          };
        })();
        this.range = null;
        this.setOptions = (opts2) => {
          Object.entries(opts2).forEach(([key, value]) => {
            if (typeof value === "undefined") delete opts2[key];
          });
          this.options = {
            debug: false,
            initialOffset: 0,
            overscan: 1,
            paddingStart: 0,
            paddingEnd: 0,
            scrollPaddingStart: 0,
            scrollPaddingEnd: 0,
            horizontal: false,
            getItemKey: defaultKeyExtractor,
            rangeExtractor: defaultRangeExtractor,
            onChange: () => {
            },
            measureElement,
            initialRect: { width: 0, height: 0 },
            scrollMargin: 0,
            gap: 0,
            indexAttribute: "data-index",
            initialMeasurementsCache: [],
            lanes: 1,
            isScrollingResetDelay: 150,
            enabled: true,
            isRtl: false,
            useScrollendEvent: true,
            useAnimationFrameWithResizeObserver: false,
            ...opts2
          };
        };
        this.notify = (sync) => {
          var _a, _b;
          (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
        };
        this.maybeNotify = utils.memo(
          () => {
            this.calculateRange();
            return [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null
            ];
          },
          (isScrolling) => {
            this.notify(isScrolling);
          },
          {
            key: "maybeNotify",
            debug: () => this.options.debug,
            initialDeps: [
              this.isScrolling,
              this.range ? this.range.startIndex : null,
              this.range ? this.range.endIndex : null
            ]
          }
        );
        this.cleanup = () => {
          this.unsubs.filter(Boolean).forEach((d) => d());
          this.unsubs = [];
          this.observer.disconnect();
          this.scrollElement = null;
          this.targetWindow = null;
        };
        this._didMount = () => {
          return () => {
            this.cleanup();
          };
        };
        this._willUpdate = () => {
          var _a;
          const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
          if (this.scrollElement !== scrollElement) {
            this.cleanup();
            if (!scrollElement) {
              this.maybeNotify();
              return;
            }
            this.scrollElement = scrollElement;
            if (this.scrollElement && "ownerDocument" in this.scrollElement) {
              this.targetWindow = this.scrollElement.ownerDocument.defaultView;
            } else {
              this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
            }
            this.elementsCache.forEach((cached) => {
              this.observer.observe(cached);
            });
            this._scrollToOffset(this.getScrollOffset(), {
              adjustments: void 0,
              behavior: void 0
            });
            this.unsubs.push(
              this.options.observeElementRect(this, (rect) => {
                this.scrollRect = rect;
                this.maybeNotify();
              })
            );
            this.unsubs.push(
              this.options.observeElementOffset(this, (offset, isScrolling) => {
                this.scrollAdjustments = 0;
                this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
                this.scrollOffset = offset;
                this.isScrolling = isScrolling;
                this.maybeNotify();
              })
            );
          }
        };
        this.getSize = () => {
          if (!this.options.enabled) {
            this.scrollRect = null;
            return 0;
          }
          this.scrollRect = this.scrollRect ?? this.options.initialRect;
          return this.scrollRect[this.options.horizontal ? "width" : "height"];
        };
        this.getScrollOffset = () => {
          if (!this.options.enabled) {
            this.scrollOffset = null;
            return 0;
          }
          this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
          return this.scrollOffset;
        };
        this.getFurthestMeasurement = (measurements, index) => {
          const furthestMeasurementsFound = /* @__PURE__ */ new Map();
          const furthestMeasurements = /* @__PURE__ */ new Map();
          for (let m = index - 1; m >= 0; m--) {
            const measurement = measurements[m];
            if (furthestMeasurementsFound.has(measurement.lane)) {
              continue;
            }
            const previousFurthestMeasurement = furthestMeasurements.get(
              measurement.lane
            );
            if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
              furthestMeasurements.set(measurement.lane, measurement);
            } else if (measurement.end < previousFurthestMeasurement.end) {
              furthestMeasurementsFound.set(measurement.lane, true);
            }
            if (furthestMeasurementsFound.size === this.options.lanes) {
              break;
            }
          }
          return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a, b) => {
            if (a.end === b.end) {
              return a.index - b.index;
            }
            return a.end - b.end;
          })[0] : void 0;
        };
        this.getMeasurementOptions = utils.memo(
          () => [
            this.options.count,
            this.options.paddingStart,
            this.options.scrollMargin,
            this.options.getItemKey,
            this.options.enabled
          ],
          (count, paddingStart, scrollMargin, getItemKey, enabled) => {
            this.pendingMeasuredCacheIndexes = [];
            return {
              count,
              paddingStart,
              scrollMargin,
              getItemKey,
              enabled
            };
          },
          {
            key: false
          }
        );
        this.getMeasurements = utils.memo(
          () => [this.getMeasurementOptions(), this.itemSizeCache],
          ({ count, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
            if (!enabled) {
              this.measurementsCache = [];
              this.itemSizeCache.clear();
              return [];
            }
            if (this.measurementsCache.length === 0) {
              this.measurementsCache = this.options.initialMeasurementsCache;
              this.measurementsCache.forEach((item) => {
                this.itemSizeCache.set(item.key, item.size);
              });
            }
            const min = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
            this.pendingMeasuredCacheIndexes = [];
            const measurements = this.measurementsCache.slice(0, min);
            for (let i = min; i < count; i++) {
              const key = getItemKey(i);
              const furthestMeasurement = this.options.lanes === 1 ? measurements[i - 1] : this.getFurthestMeasurement(measurements, i);
              const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
              const measuredSize = itemSizeCache.get(key);
              const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i);
              const end = start + size;
              const lane = furthestMeasurement ? furthestMeasurement.lane : i % this.options.lanes;
              measurements[i] = {
                index: i,
                start,
                size,
                end,
                key,
                lane
              };
            }
            this.measurementsCache = measurements;
            return measurements;
          },
          {
            key: "getMeasurements",
            debug: () => this.options.debug
          }
        );
        this.calculateRange = utils.memo(
          () => [
            this.getMeasurements(),
            this.getSize(),
            this.getScrollOffset(),
            this.options.lanes
          ],
          (measurements, outerSize, scrollOffset, lanes) => {
            return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
              measurements,
              outerSize,
              scrollOffset,
              lanes
            }) : null;
          },
          {
            key: "calculateRange",
            debug: () => this.options.debug
          }
        );
        this.getVirtualIndexes = utils.memo(
          () => {
            let startIndex = null;
            let endIndex = null;
            const range = this.calculateRange();
            if (range) {
              startIndex = range.startIndex;
              endIndex = range.endIndex;
            }
            return [
              this.options.rangeExtractor,
              this.options.overscan,
              this.options.count,
              startIndex,
              endIndex
            ];
          },
          (rangeExtractor, overscan, count, startIndex, endIndex) => {
            return startIndex === null || endIndex === null ? [] : rangeExtractor({
              startIndex,
              endIndex,
              overscan,
              count
            });
          },
          {
            key: "getVirtualIndexes",
            debug: () => this.options.debug
          }
        );
        this.indexFromElement = (node) => {
          const attributeName = this.options.indexAttribute;
          const indexStr = node.getAttribute(attributeName);
          if (!indexStr) {
            console.warn(
              `Missing attribute name '${attributeName}={index}' on measured element.`
            );
            return -1;
          }
          return parseInt(indexStr, 10);
        };
        this._measureElement = (node, entry) => {
          const index = this.indexFromElement(node);
          const item = this.measurementsCache[index];
          if (!item) {
            return;
          }
          const key = item.key;
          const prevNode = this.elementsCache.get(key);
          if (prevNode !== node) {
            if (prevNode) {
              this.observer.unobserve(prevNode);
            }
            this.observer.observe(node);
            this.elementsCache.set(key, node);
          }
          if (node.isConnected) {
            this.resizeItem(index, this.options.measureElement(node, entry, this));
          }
        };
        this.resizeItem = (index, size) => {
          const item = this.measurementsCache[index];
          if (!item) {
            return;
          }
          const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
          const delta = size - itemSize;
          if (delta !== 0) {
            if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
              if (this.options.debug) {
                console.info("correction", delta);
              }
              this._scrollToOffset(this.getScrollOffset(), {
                adjustments: this.scrollAdjustments += delta,
                behavior: void 0
              });
            }
            this.pendingMeasuredCacheIndexes.push(item.index);
            this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
            this.notify(false);
          }
        };
        this.measureElement = (node) => {
          if (!node) {
            this.elementsCache.forEach((cached, key) => {
              if (!cached.isConnected) {
                this.observer.unobserve(cached);
                this.elementsCache.delete(key);
              }
            });
            return;
          }
          this._measureElement(node, void 0);
        };
        this.getVirtualItems = utils.memo(
          () => [this.getVirtualIndexes(), this.getMeasurements()],
          (indexes, measurements) => {
            const virtualItems = [];
            for (let k = 0, len = indexes.length; k < len; k++) {
              const i = indexes[k];
              const measurement = measurements[i];
              virtualItems.push(measurement);
            }
            return virtualItems;
          },
          {
            key: "getVirtualItems",
            debug: () => this.options.debug
          }
        );
        this.getVirtualItemForOffset = (offset) => {
          const measurements = this.getMeasurements();
          if (measurements.length === 0) {
            return void 0;
          }
          return utils.notUndefined(
            measurements[findNearestBinarySearch(
              0,
              measurements.length - 1,
              (index) => utils.notUndefined(measurements[index]).start,
              offset
            )]
          );
        };
        this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
          const size = this.getSize();
          const scrollOffset = this.getScrollOffset();
          if (align === "auto") {
            align = toOffset >= scrollOffset + size ? "end" : "start";
          }
          if (align === "center") {
            toOffset += (itemSize - size) / 2;
          } else if (align === "end") {
            toOffset -= size;
          }
          const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
          const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
          const maxOffset = scrollSize - size;
          return Math.max(Math.min(maxOffset, toOffset), 0);
        };
        this.getOffsetForIndex = (index, align = "auto") => {
          index = Math.max(0, Math.min(index, this.options.count - 1));
          const item = this.measurementsCache[index];
          if (!item) {
            return void 0;
          }
          const size = this.getSize();
          const scrollOffset = this.getScrollOffset();
          if (align === "auto") {
            if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
              align = "end";
            } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
              align = "start";
            } else {
              return [scrollOffset, align];
            }
          }
          const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
          return [
            this.getOffsetForAlignment(toOffset, align, item.size),
            align
          ];
        };
        this.isDynamicMode = () => this.elementsCache.size > 0;
        this.cancelScrollToIndex = () => {
          if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
            this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
            this.scrollToIndexTimeoutId = null;
          }
        };
        this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
          this.cancelScrollToIndex();
          if (behavior === "smooth" && this.isDynamicMode()) {
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size."
            );
          }
          this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
            adjustments: void 0,
            behavior
          });
        };
        this.scrollToIndex = (index, { align: initialAlign = "auto", behavior } = {}) => {
          index = Math.max(0, Math.min(index, this.options.count - 1));
          this.cancelScrollToIndex();
          if (behavior === "smooth" && this.isDynamicMode()) {
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size."
            );
          }
          const offsetAndAlign = this.getOffsetForIndex(index, initialAlign);
          if (!offsetAndAlign) return;
          const [offset, align] = offsetAndAlign;
          this._scrollToOffset(offset, { adjustments: void 0, behavior });
          if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
            this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
              this.scrollToIndexTimeoutId = null;
              const elementInDOM = this.elementsCache.has(
                this.options.getItemKey(index)
              );
              if (elementInDOM) {
                const [latestOffset] = utils.notUndefined(
                  this.getOffsetForIndex(index, align)
                );
                if (!utils.approxEqual(latestOffset, this.getScrollOffset())) {
                  this.scrollToIndex(index, { align, behavior });
                }
              } else {
                this.scrollToIndex(index, { align, behavior });
              }
            });
          }
        };
        this.scrollBy = (delta, { behavior } = {}) => {
          this.cancelScrollToIndex();
          if (behavior === "smooth" && this.isDynamicMode()) {
            console.warn(
              "The `smooth` scroll behavior is not fully supported with dynamic size."
            );
          }
          this._scrollToOffset(this.getScrollOffset() + delta, {
            adjustments: void 0,
            behavior
          });
        };
        this.getTotalSize = () => {
          var _a;
          const measurements = this.getMeasurements();
          let end;
          if (measurements.length === 0) {
            end = this.options.paddingStart;
          } else {
            end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
              ...measurements.slice(-this.options.lanes).map((m) => m.end)
            );
          }
          return Math.max(
            end - this.options.scrollMargin + this.options.paddingEnd,
            0
          );
        };
        this._scrollToOffset = (offset, {
          adjustments,
          behavior
        }) => {
          this.options.scrollToFn(offset, { behavior, adjustments }, this);
        };
        this.measure = () => {
          this.itemSizeCache = /* @__PURE__ */ new Map();
          this.notify(false);
        };
        this.setOptions(opts);
      }
    };
    var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
      while (low <= high) {
        const middle = (low + high) / 2 | 0;
        const currentValue = getCurrentValue(middle);
        if (currentValue < value) {
          low = middle + 1;
        } else if (currentValue > value) {
          high = middle - 1;
        } else {
          return middle;
        }
      }
      if (low > 0) {
        return low - 1;
      } else {
        return 0;
      }
    };
    function calculateRange({
      measurements,
      outerSize,
      scrollOffset,
      lanes
    }) {
      const lastIndex = measurements.length - 1;
      const getOffset = (index) => measurements[index].start;
      let startIndex = findNearestBinarySearch(
        0,
        lastIndex,
        getOffset,
        scrollOffset
      );
      let endIndex = startIndex;
      while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
        endIndex++;
      }
      if (lanes > 1) {
        startIndex = Math.max(0, startIndex - startIndex % lanes);
        endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
      }
      return { startIndex, endIndex };
    }
    exports.approxEqual = utils.approxEqual;
    exports.debounce = utils.debounce;
    exports.memo = utils.memo;
    exports.notUndefined = utils.notUndefined;
    exports.Virtualizer = Virtualizer;
    exports.defaultKeyExtractor = defaultKeyExtractor;
    exports.defaultRangeExtractor = defaultRangeExtractor;
    exports.elementScroll = elementScroll;
    exports.measureElement = measureElement;
    exports.observeElementOffset = observeElementOffset;
    exports.observeElementRect = observeElementRect;
    exports.observeWindowOffset = observeWindowOffset;
    exports.observeWindowRect = observeWindowRect;
    exports.windowScroll = windowScroll;
  }
});

// node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/dist/cjs/index.cjs
var require_cjs3 = __commonJS({
  "node_modules/react-datasheet-grid/node_modules/@tanstack/react-virtual/dist/cjs/index.cjs"(exports) {
    "use strict";
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    var React2 = require_react();
    var reactDom = require_react_dom();
    var virtualCore = require_cjs2();
    function _interopNamespaceDefault(e) {
      const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
      if (e) {
        for (const k in e) {
          if (k !== "default") {
            const d = Object.getOwnPropertyDescriptor(e, k);
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
      n.default = e;
      return Object.freeze(n);
    }
    var React__namespace = _interopNamespaceDefault(React2);
    var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React__namespace.useLayoutEffect : React__namespace.useEffect;
    function useVirtualizerBase(options) {
      const rerender = React__namespace.useReducer(() => ({}), {})[1];
      const resolvedOptions = {
        ...options,
        onChange: (instance2, sync) => {
          var _a;
          if (sync) {
            reactDom.flushSync(rerender);
          } else {
            rerender();
          }
          (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
        }
      };
      const [instance] = React__namespace.useState(
        () => new virtualCore.Virtualizer(resolvedOptions)
      );
      instance.setOptions(resolvedOptions);
      useIsomorphicLayoutEffect(() => {
        return instance._didMount();
      }, []);
      useIsomorphicLayoutEffect(() => {
        return instance._willUpdate();
      });
      return instance;
    }
    function useVirtualizer(options) {
      return useVirtualizerBase({
        observeElementRect: virtualCore.observeElementRect,
        observeElementOffset: virtualCore.observeElementOffset,
        scrollToFn: virtualCore.elementScroll,
        ...options
      });
    }
    function useWindowVirtualizer(options) {
      return useVirtualizerBase({
        getScrollElement: () => typeof document !== "undefined" ? window : null,
        observeElementRect: virtualCore.observeWindowRect,
        observeElementOffset: virtualCore.observeWindowOffset,
        scrollToFn: virtualCore.windowScroll,
        initialOffset: () => typeof document !== "undefined" ? window.scrollY : 0,
        ...options
      });
    }
    exports.useVirtualizer = useVirtualizer;
    exports.useWindowVirtualizer = useWindowVirtualizer;
    Object.keys(virtualCore).forEach((k) => {
      if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
        enumerable: true,
        get: () => virtualCore[k]
      });
    });
  }
});

// node_modules/react-datasheet-grid/dist/components/Cell.js
var require_Cell = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/Cell.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cell = void 0;
    var react_1 = __importDefault(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var Cell = ({ children, gutter, stickyRight, active, disabled, className, width, left }) => {
      return react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-cell", gutter && "dsg-cell-gutter", disabled && "dsg-cell-disabled", gutter && active && "dsg-cell-gutter-active", stickyRight && "dsg-cell-sticky-right", className), style: {
        width,
        left: stickyRight ? void 0 : left
      } }, children);
    };
    exports.Cell = Cell;
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useMemoizedIndexCallback.js
var require_useMemoizedIndexCallback = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useMemoizedIndexCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMemoizedIndexCallback = void 0;
    var react_1 = require_react();
    var useMemoizedIndexCallback = (callbackFn, argsLength) => {
      return (0, react_1.useMemo)(() => {
        const cache = /* @__PURE__ */ new Map();
        return (index) => {
          if (!cache.has(index)) {
            cache.set(index, (...args) => {
              callbackFn(index, ...args.slice(0, argsLength));
            });
          }
          return cache.get(index);
        };
      }, [argsLength, callbackFn]);
    };
    exports.useMemoizedIndexCallback = useMemoizedIndexCallback;
  }
});

// node_modules/react-datasheet-grid/dist/components/Grid.js
var require_Grid = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/Grid.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Grid = void 0;
    var react_virtual_1 = require_cjs3();
    var react_1 = __importStar(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var Cell_1 = require_Cell();
    var useMemoizedIndexCallback_1 = require_useMemoizedIndexCallback();
    var Grid = ({ data, columns, outerRef, innerRef, columnWidths, hasStickyRightColumn, displayHeight, headerRowHeight, rowHeight, rowKey, fullWidth, selection, activeCell, rowClassName, cellClassName, children, editing, getContextMenuItems, setRowData, deleteRows, duplicateRows, insertRowAfter, stopEditing, onScroll }) => {
      var _a, _b, _c, _d;
      const rowVirtualizer = (0, react_virtual_1.useVirtualizer)({
        count: data.length,
        getScrollElement: () => outerRef.current,
        paddingStart: headerRowHeight,
        estimateSize: (index) => rowHeight(index).height,
        getItemKey: (index) => {
          if (rowKey && index > 0) {
            const row = data[index - 1];
            if (typeof rowKey === "function") {
              return rowKey({ rowData: row, rowIndex: index });
            } else if (typeof rowKey === "string" && row instanceof Object && rowKey in row) {
              const key = row[rowKey];
              if (typeof key === "string" || typeof key === "number") {
                return key;
              }
            }
          }
          return index;
        },
        overscan: 5
      });
      const colVirtualizer = (0, react_virtual_1.useVirtualizer)({
        count: columns.length,
        getScrollElement: () => outerRef.current,
        estimateSize: (index) => {
          var _a2;
          return (_a2 = columnWidths === null || columnWidths === void 0 ? void 0 : columnWidths[index]) !== null && _a2 !== void 0 ? _a2 : 100;
        },
        horizontal: true,
        getItemKey: (index) => {
          var _a2;
          return (_a2 = columns[index].id) !== null && _a2 !== void 0 ? _a2 : index;
        },
        overscan: 1,
        rangeExtractor: (range) => {
          const result = (0, react_virtual_1.defaultRangeExtractor)(range);
          if (result[0] !== 0) {
            result.unshift(0);
          }
          if (hasStickyRightColumn && result[result.length - 1] !== columns.length - 1) {
            result.push(columns.length - 1);
          }
          return result;
        }
      });
      (0, react_1.useEffect)(() => {
        colVirtualizer.measure();
      }, [colVirtualizer, columnWidths]);
      const setGivenRowData = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(setRowData, 1);
      const deleteGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(deleteRows, 0);
      const duplicateGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(duplicateRows, 0);
      const insertAfterGivenRow = (0, useMemoizedIndexCallback_1.useMemoizedIndexCallback)(insertRowAfter, 0);
      const selectionColMin = (_a = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _a !== void 0 ? _a : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col;
      const selectionColMax = (_b = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _b !== void 0 ? _b : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col;
      const selectionMinRow = (_c = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _c !== void 0 ? _c : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row;
      const selectionMaxRow = (_d = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _d !== void 0 ? _d : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row;
      return react_1.default.createElement(
        "div",
        { ref: outerRef, className: "dsg-container", onScroll, style: { height: displayHeight } },
        react_1.default.createElement(
          "div",
          { ref: innerRef, style: {
            width: fullWidth ? "100%" : colVirtualizer.getTotalSize(),
            height: rowVirtualizer.getTotalSize()
          } },
          headerRowHeight > 0 && react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-row", "dsg-row-header"), style: {
            width: fullWidth ? "100%" : colVirtualizer.getTotalSize(),
            height: headerRowHeight
          } }, colVirtualizer.getVirtualItems().map((col) => react_1.default.createElement(
            Cell_1.Cell,
            { key: col.key, gutter: col.index === 0, stickyRight: hasStickyRightColumn && col.index === columns.length - 1, width: col.size, left: col.start, className: (0, classnames_1.default)("dsg-cell-header", selectionColMin !== void 0 && selectionColMax !== void 0 && selectionColMin <= col.index - 1 && selectionColMax >= col.index - 1 && "dsg-cell-header-active", columns[col.index].headerClassName) },
            react_1.default.createElement("div", { className: "dsg-cell-header-container" }, columns[col.index].title)
          ))),
          rowVirtualizer.getVirtualItems().map((row) => {
            const rowActive = Boolean(row.index >= (selectionMinRow !== null && selectionMinRow !== void 0 ? selectionMinRow : Infinity) && row.index <= (selectionMaxRow !== null && selectionMaxRow !== void 0 ? selectionMaxRow : -Infinity));
            return react_1.default.createElement("div", { key: row.key, className: (0, classnames_1.default)("dsg-row", typeof rowClassName === "string" ? rowClassName : null, typeof rowClassName === "function" ? rowClassName({
              rowData: data[row.index],
              rowIndex: row.index
            }) : null), style: {
              height: row.size,
              top: row.start,
              width: fullWidth ? "100%" : colVirtualizer.getTotalSize()
            } }, colVirtualizer.getVirtualItems().map((col) => {
              const colCellClassName = columns[col.index].cellClassName;
              const disabled = columns[col.index].disabled;
              const Component2 = columns[col.index].component;
              const cellDisabled = disabled === true || typeof disabled === "function" && disabled({
                rowData: data[row.index],
                rowIndex: row.index
              });
              const cellIsActive = (activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === row.index && activeCell.col === col.index - 1;
              return react_1.default.createElement(
                Cell_1.Cell,
                { key: col.key, gutter: col.index === 0, stickyRight: hasStickyRightColumn && col.index === columns.length - 1, active: col.index === 0 && rowActive, disabled: cellDisabled, className: (0, classnames_1.default)(typeof colCellClassName === "function" ? colCellClassName({
                  rowData: data[row.index],
                  rowIndex: row.index,
                  columnId: columns[col.index].id
                }) : colCellClassName, typeof cellClassName === "function" ? cellClassName({
                  rowData: data[row.index],
                  rowIndex: row.index,
                  columnId: columns[col.index].id
                }) : cellClassName), width: col.size, left: col.start },
                react_1.default.createElement(Component2, { rowData: data[row.index], getContextMenuItems, disabled: cellDisabled, active: cellIsActive, columnIndex: col.index - 1, rowIndex: row.index, focus: cellIsActive && editing, deleteRow: deleteGivenRow(row.index), duplicateRow: duplicateGivenRow(row.index), stopEditing, insertRowBelow: insertAfterGivenRow(row.index), setRowData: setGivenRowData(row.index), columnData: columns[col.index].columnData })
              );
            }));
          }),
          children
        )
      );
    };
    exports.Grid = Grid;
  }
});

// node_modules/react-datasheet-grid/dist/components/SelectionRect.js
var require_SelectionRect = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/SelectionRect.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionRect = void 0;
    var react_1 = __importStar(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var buildSquare = (top, right, bottom, left) => {
      return [
        [left, top],
        [right, top],
        [right, bottom],
        [left, bottom],
        [left, top]
      ];
    };
    var buildClipPath = (top, right, bottom, left) => {
      const values = [
        ...buildSquare(0, "100%", "100%", 0),
        ...buildSquare(top, right, bottom, left)
      ];
      return `polygon(evenodd, ${values.map((pair) => pair.map((value) => typeof value === "number" && value !== 0 ? value + "px" : value).join(" ")).join(",")})`;
    };
    exports.SelectionRect = react_1.default.memo(({ columnWidths, columnRights, headerRowHeight, selection, rowHeight, activeCell, hasStickyRightColumn, dataLength, viewWidth, viewHeight, contentWidth, edges, isCellDisabled, editing, expandSelection }) => {
      var _a, _b, _c, _d;
      const activeCellIsDisabled = activeCell ? isCellDisabled(activeCell) : false;
      const selectionIsDisabled = (0, react_1.useMemo)(() => {
        if (!selection) {
          return activeCellIsDisabled;
        }
        for (let col = selection.min.col; col <= selection.max.col; ++col) {
          for (let row = selection.min.row; row <= selection.max.row; ++row) {
            if (!isCellDisabled({ col, row })) {
              return false;
            }
          }
        }
        return true;
      }, [activeCellIsDisabled, isCellDisabled, selection]);
      if (!columnWidths || !columnRights) {
        return null;
      }
      const extraPixelV = (rowI) => {
        return rowI < dataLength - 1 ? 1 : 0;
      };
      const extraPixelH = (colI) => {
        return colI < columnWidths.length - (hasStickyRightColumn ? 3 : 2) ? 1 : 0;
      };
      const activeCellRect = activeCell && {
        width: columnWidths[activeCell.col + 1] + extraPixelH(activeCell.col),
        height: rowHeight(activeCell.row).height + extraPixelV(activeCell.row),
        left: columnRights[activeCell.col],
        top: rowHeight(activeCell.row).top + headerRowHeight
      };
      const selectionRect = selection && {
        width: columnWidths.slice(selection.min.col + 1, selection.max.col + 2).reduce((a, b) => a + b) + extraPixelH(selection.max.col),
        height: rowHeight(selection.max.row).top + rowHeight(selection.max.row).height - rowHeight(selection.min.row).top + extraPixelV(selection.max.row),
        left: columnRights[selection.min.col],
        top: rowHeight(selection.min.row).top + headerRowHeight
      };
      const minSelection = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
      const maxSelection = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
      const expandRowsIndicator = maxSelection && expandSelection !== null && {
        left: columnRights[maxSelection.col] + columnWidths[maxSelection.col + 1],
        top: rowHeight(maxSelection.row).top + rowHeight(maxSelection.row).height + headerRowHeight,
        transform: `translate(-${maxSelection.col < columnWidths.length - (hasStickyRightColumn ? 3 : 2) ? 50 : 100}%, -${maxSelection.row < dataLength - 1 ? 50 : 100}%)`
      };
      const expandRowsRect = minSelection && maxSelection && expandSelection !== null && {
        width: columnWidths.slice(minSelection.col + 1, maxSelection.col + 2).reduce((a, b) => a + b) + extraPixelH(maxSelection.col),
        height: rowHeight(maxSelection.row + expandSelection).top + rowHeight(maxSelection.row + expandSelection).height - rowHeight(maxSelection.row + 1).top + extraPixelV(maxSelection.row + expandSelection) - 1,
        left: columnRights[minSelection.col],
        top: rowHeight(maxSelection.row).top + rowHeight(maxSelection.row).height + headerRowHeight + 1
      };
      return react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(
          "div",
          { className: "dsg-scrollable-view-container", style: {
            height: rowHeight(dataLength - 1).top + rowHeight(dataLength - 1).height + headerRowHeight,
            width: contentWidth ? contentWidth : "100%"
          } },
          react_1.default.createElement("div", { className: (0, classnames_1.default)({
            "dsg-scrollable-view": true,
            "dsg-scrollable-view-t": !edges.top,
            "dsg-scrollable-view-r": !edges.right,
            "dsg-scrollable-view-b": !edges.bottom,
            "dsg-scrollable-view-l": !edges.left
          }), style: {
            top: headerRowHeight,
            left: columnWidths[0],
            height: viewHeight ? viewHeight - headerRowHeight : 0,
            width: contentWidth && viewWidth ? viewWidth - columnWidths[0] - (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0) : `calc(100% - ${columnWidths[0] + (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0)}px)`
          } })
        ),
        (selectionRect || activeCellRect) && react_1.default.createElement(
          "div",
          { className: "dsg-selection-col-marker-container", style: {
            left: (_a = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.left) !== null && _a !== void 0 ? _a : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.left,
            width: (_b = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.width) !== null && _b !== void 0 ? _b : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.width,
            height: rowHeight(dataLength - 1).top + rowHeight(dataLength - 1).height + headerRowHeight
          } },
          react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-selection-col-marker", selectionIsDisabled && "dsg-selection-col-marker-disabled"), style: { top: headerRowHeight } })
        ),
        (selectionRect || activeCellRect) && react_1.default.createElement(
          "div",
          { className: "dsg-selection-row-marker-container", style: {
            top: (_c = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.top) !== null && _c !== void 0 ? _c : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.top,
            height: (_d = selectionRect === null || selectionRect === void 0 ? void 0 : selectionRect.height) !== null && _d !== void 0 ? _d : activeCellRect === null || activeCellRect === void 0 ? void 0 : activeCellRect.height,
            width: contentWidth ? contentWidth : "100%"
          } },
          react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-selection-row-marker", selectionIsDisabled && "dsg-selection-row-marker-disabled"), style: { left: columnWidths[0] } })
        ),
        activeCellRect && activeCell && react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-active-cell", {
          "dsg-active-cell-focus": editing,
          "dsg-active-cell-disabled": activeCellIsDisabled
        }), style: activeCellRect }),
        selectionRect && activeCellRect && react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-selection-rect", selectionIsDisabled && "dsg-selection-rect-disabled"), style: Object.assign(Object.assign({}, selectionRect), { clipPath: buildClipPath(activeCellRect.top - selectionRect.top, activeCellRect.left - selectionRect.left, activeCellRect.top + activeCellRect.height - selectionRect.top, activeCellRect.left + activeCellRect.width - selectionRect.left) }) }),
        expandRowsRect && react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-expand-rows-rect"), style: expandRowsRect }),
        expandRowsIndicator && react_1.default.createElement("div", { className: (0, classnames_1.default)("dsg-expand-rows-indicator", selectionIsDisabled && "dsg-expand-rows-indicator-disabled"), style: expandRowsIndicator })
      );
    });
    exports.SelectionRect.displayName = "SelectionRect";
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useRowHeights.js
var require_useRowHeights = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useRowHeights.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRowHeights = void 0;
    var react_1 = require_react();
    var useRowHeights = ({ value, rowHeight }) => {
      const calculatedHeights = (0, react_1.useRef)([]);
      const [, rerender] = (0, react_1.useState)(0);
      return (0, react_1.useMemo)(() => {
        const getRowIndex = (top) => {
          if (typeof rowHeight === "number") {
            return Math.min(value.length - 1, Math.max(-1, Math.floor(top / rowHeight)));
          }
          let l = 0;
          let r = calculatedHeights.current.length - 1;
          while (l <= r) {
            const m = Math.floor((l + r) / 2);
            if (calculatedHeights.current[m].top < top) {
              l = m + 1;
            } else if (calculatedHeights.current[m].top > top) {
              r = m - 1;
            } else {
              return m;
            }
          }
          if (r === calculatedHeights.current.length - 1 && value.length > calculatedHeights.current.length && (!calculatedHeights.current.length || top >= calculatedHeights.current[r].top + calculatedHeights.current[r].height)) {
            let lastBottom = r === -1 ? 0 : calculatedHeights.current[r].top + calculatedHeights.current[r].height;
            do {
              r++;
              const height = rowHeight({ rowIndex: r, rowData: value[r] });
              calculatedHeights.current.push({
                height,
                top: lastBottom
              });
              lastBottom += height;
            } while (lastBottom <= top && r < calculatedHeights.current.length - 1);
          }
          return r;
        };
        return {
          resetAfter: (index) => {
            calculatedHeights.current = calculatedHeights.current.slice(0, index);
            rerender((x) => x + 1);
          },
          getRowSize: (index) => {
            if (typeof rowHeight === "number") {
              return { height: rowHeight, top: rowHeight * index };
            }
            if (index >= value.length) {
              return { height: 0, top: 0 };
            }
            if (index < calculatedHeights.current.length) {
              return calculatedHeights.current[index];
            }
            let lastBottom = calculatedHeights.current[calculatedHeights.current.length - 1].top + calculatedHeights.current[calculatedHeights.current.length - 1].height;
            for (let i = calculatedHeights.current.length; i <= index; i++) {
              const height = rowHeight({ rowIndex: i, rowData: value[i] });
              calculatedHeights.current.push({ height, top: lastBottom });
              lastBottom += height;
            }
            return calculatedHeights.current[index];
          },
          getRowIndex,
          totalSize: (maxHeight) => {
            if (typeof rowHeight === "number") {
              return value.length * rowHeight;
            }
            const index = getRowIndex(maxHeight);
            return calculatedHeights.current[index].top + calculatedHeights.current[index].height;
          }
        };
      }, [rowHeight, value]);
    };
    exports.useRowHeights = useRowHeights;
  }
});

// node_modules/react-datasheet-grid/dist/components/DataSheetGrid.js
var require_DataSheetGrid = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/DataSheetGrid.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DataSheetGrid = void 0;
    var react_1 = __importStar(require_react());
    var useColumnWidths_1 = require_useColumnWidths();
    var react_resize_detector_1 = (init_index_esm(), __toCommonJS(index_esm_exports));
    var useColumns_1 = require_useColumns();
    var useEdges_1 = require_useEdges();
    var useDeepEqualState_1 = require_useDeepEqualState();
    var useDocumentEventListener_1 = require_useDocumentEventListener();
    var useGetBoundingClientRect_1 = require_useGetBoundingClientRect();
    var AddRows_1 = require_AddRows();
    var useDebounceState_1 = require_useDebounceState();
    var fast_deep_equal_1 = __importDefault(require_fast_deep_equal());
    var ContextMenu_1 = require_ContextMenu();
    var copyPasting_1 = require_copyPasting();
    var typeCheck_1 = require_typeCheck();
    var tab_1 = require_tab();
    var Grid_1 = require_Grid();
    var SelectionRect_1 = require_SelectionRect();
    var useRowHeights_1 = require_useRowHeights();
    var DEFAULT_DATA = [];
    var DEFAULT_COLUMNS = [];
    var DEFAULT_CREATE_ROW = () => ({});
    var DEFAULT_EMPTY_CALLBACK = () => null;
    var DEFAULT_DUPLICATE_ROW = ({ rowData }) => Object.assign({}, rowData);
    exports.DataSheetGrid = react_1.default.memo(react_1.default.forwardRef(({ value: data = DEFAULT_DATA, className, style, height: maxHeight = 400, onChange = DEFAULT_EMPTY_CALLBACK, columns: rawColumns = DEFAULT_COLUMNS, rowHeight = 40, headerRowHeight = typeof rowHeight === "number" ? rowHeight : 40, gutterColumn, stickyRightColumn, rowKey, addRowsComponent: AddRowsComponent = AddRows_1.AddRows, createRow = DEFAULT_CREATE_ROW, autoAddRow = false, lockRows = false, disableExpandSelection = false, disableSmartDelete = false, duplicateRow = DEFAULT_DUPLICATE_ROW, contextMenuComponent: ContextMenuComponent = ContextMenu_1.ContextMenu, disableContextMenu: disableContextMenuRaw = false, onFocus = DEFAULT_EMPTY_CALLBACK, onBlur = DEFAULT_EMPTY_CALLBACK, onActiveCellChange = DEFAULT_EMPTY_CALLBACK, onSelectionChange = DEFAULT_EMPTY_CALLBACK, rowClassName, cellClassName, onScroll }, ref) => {
      var _a, _b, _c, _d, _e, _f;
      const lastEditingCellRef = (0, react_1.useRef)(null);
      const disableContextMenu = disableContextMenuRaw || lockRows;
      const columns = (0, useColumns_1.useColumns)(rawColumns, gutterColumn, stickyRightColumn);
      const hasStickyRightColumn = Boolean(stickyRightColumn);
      const innerRef = (0, react_1.useRef)(null);
      const outerRef = (0, react_1.useRef)(null);
      const beforeTabIndexRef = (0, react_1.useRef)(null);
      const afterTabIndexRef = (0, react_1.useRef)(null);
      const [heightDiff, setHeightDiff] = (0, useDebounceState_1.useDebounceState)(1, 100);
      const { getRowSize, totalSize, getRowIndex } = (0, useRowHeights_1.useRowHeights)({
        value: data,
        rowHeight
      });
      const displayHeight = Math.min(maxHeight, headerRowHeight + totalSize(maxHeight) + heightDiff);
      const { width, height } = (0, react_resize_detector_1.useResizeDetector)({
        targetRef: outerRef,
        refreshMode: "throttle",
        refreshRate: 100
      });
      setHeightDiff(height ? displayHeight - height : 0);
      const edges = (0, useEdges_1.useEdges)(outerRef, width, height);
      const { fullWidth, totalWidth: contentWidth, columnWidths, columnRights } = (0, useColumnWidths_1.useColumnWidths)(columns, width);
      const [contextMenu, setContextMenu] = (0, react_1.useState)(null);
      const [contextMenuItems, setContextMenuItems] = (0, react_1.useState)([]);
      const [editing, setEditing] = (0, react_1.useState)(false);
      const [expandSelectionRowsCount, setExpandSelectionRowsCount] = (0, react_1.useState)(0);
      const [expandingSelectionFromRowIndex, setExpandingSelectionFromRowIndex] = (0, react_1.useState)(null);
      const [activeCell, setActiveCell] = (0, useDeepEqualState_1.useDeepEqualState)(null);
      const [selectionCell, setSelectionCell] = (0, useDeepEqualState_1.useDeepEqualState)(null);
      const selection = (0, react_1.useMemo)(() => activeCell && selectionCell && {
        min: {
          col: Math.min(activeCell.col, selectionCell.col),
          row: Math.min(activeCell.row, selectionCell.row)
        },
        max: {
          col: Math.max(activeCell.col, selectionCell.col),
          row: Math.max(activeCell.row, selectionCell.row)
        }
      }, [activeCell, selectionCell]);
      const [selectionMode, setSelectionMode] = (0, useDeepEqualState_1.useDeepEqualState)({
        // True when the position of the cursor should impact the columns of the selection
        columns: false,
        // True when the position of the cursor should impact the rows of the selection
        rows: false,
        // True when the user is dragging the mouse around to select
        active: false
      });
      const expandSelection = disableExpandSelection || editing || selectionMode.active || (activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === (data === null || data === void 0 ? void 0 : data.length) - 1 || (selection === null || selection === void 0 ? void 0 : selection.max.row) === (data === null || data === void 0 ? void 0 : data.length) - 1 || activeCell && columns.slice(((_a = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _a !== void 0 ? _a : activeCell.col) + 1, ((_b = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _b !== void 0 ? _b : activeCell.col) + 2).every((column) => column.disabled === true) ? null : expandSelectionRowsCount;
      const getInnerBoundingClientRect = (0, useGetBoundingClientRect_1.useGetBoundingClientRect)(innerRef);
      const getOuterBoundingClientRect = (0, useGetBoundingClientRect_1.useGetBoundingClientRect)(outerRef);
      (0, react_1.useEffect)(() => {
        var _a2;
        if (activeCell !== null) {
          ;
          document.activeElement.blur();
          (_a2 = window.getSelection()) === null || _a2 === void 0 ? void 0 : _a2.removeAllRanges();
        }
      }, [activeCell !== null]);
      const getCursorIndex = (0, react_1.useCallback)((event, force = false, includeSticky = false) => {
        const innerBoundingClientRect = getInnerBoundingClientRect(force);
        const outerBoundingClientRect = includeSticky && getOuterBoundingClientRect(force);
        if (innerBoundingClientRect && columnRights && columnWidths) {
          let x = event.clientX - innerBoundingClientRect.left;
          let y = event.clientY - innerBoundingClientRect.top;
          if (outerBoundingClientRect) {
            if (event.clientY - outerBoundingClientRect.top <= headerRowHeight) {
              y = 0;
            }
            if (event.clientX - outerBoundingClientRect.left <= columnWidths[0]) {
              x = 0;
            }
            if (hasStickyRightColumn && outerBoundingClientRect.right - event.clientX <= columnWidths[columnWidths.length - 1]) {
              x = columnRights[columnRights.length - 2] + 1;
            }
          }
          return {
            col: columnRights.findIndex((right) => x < right) - 1,
            row: getRowIndex(y - headerRowHeight)
          };
        }
        return null;
      }, [
        columnRights,
        columnWidths,
        data.length,
        getInnerBoundingClientRect,
        getOuterBoundingClientRect,
        headerRowHeight,
        hasStickyRightColumn,
        getRowIndex
      ]);
      const dataRef = (0, react_1.useRef)(data);
      dataRef.current = data;
      const isCellDisabled = (0, react_1.useCallback)((cell) => {
        const disabled = columns[cell.col + 1].disabled;
        return Boolean(typeof disabled === "function" ? disabled({
          rowData: dataRef.current[cell.row],
          rowIndex: cell.row
        }) : disabled);
      }, [columns]);
      const insertRowAfter = (0, react_1.useCallback)((row, count = 1) => {
        if (lockRows) {
          return;
        }
        setSelectionCell(null);
        setEditing(false);
        onChange([
          ...dataRef.current.slice(0, row + 1),
          ...new Array(count).fill(0).map(createRow),
          ...dataRef.current.slice(row + 1)
        ], [
          {
            type: "CREATE",
            fromRowIndex: row + 1,
            toRowIndex: row + 1 + count
          }
        ]);
        setActiveCell((a) => ({
          col: (a === null || a === void 0 ? void 0 : a.col) || 0,
          row: row + count,
          doNotScrollX: true
        }));
      }, [createRow, lockRows, onChange, setActiveCell, setSelectionCell]);
      const duplicateRows = (0, react_1.useCallback)((rowMin, rowMax = rowMin) => {
        if (lockRows) {
          return;
        }
        onChange([
          ...dataRef.current.slice(0, rowMax + 1),
          ...dataRef.current.slice(rowMin, rowMax + 1).map((rowData, i) => duplicateRow({ rowData, rowIndex: i + rowMin })),
          ...dataRef.current.slice(rowMax + 1)
        ], [
          {
            type: "CREATE",
            fromRowIndex: rowMax + 1,
            toRowIndex: rowMax + 2 + rowMax - rowMin
          }
        ]);
        setActiveCell({ col: 0, row: rowMax + 1, doNotScrollX: true });
        setSelectionCell({
          col: columns.length - (hasStickyRightColumn ? 3 : 2),
          row: 2 * rowMax - rowMin + 1,
          doNotScrollX: true
        });
        setEditing(false);
      }, [
        columns.length,
        duplicateRow,
        lockRows,
        onChange,
        setActiveCell,
        setSelectionCell,
        hasStickyRightColumn
      ]);
      const scrollTo = (0, react_1.useCallback)((cell) => {
        if (!height || !width) {
          return;
        }
        if (!cell.doNotScrollY) {
          const topMax = getRowSize(cell.row).top;
          const topMin = getRowSize(cell.row).top + getRowSize(cell.row).height + headerRowHeight - height + 1;
          const scrollTop = outerRef.current.scrollTop;
          if (scrollTop > topMax) {
            outerRef.current.scrollTop = topMax;
          } else if (scrollTop < topMin) {
            outerRef.current.scrollTop = topMin;
          }
        }
        if (columnRights && columnWidths && outerRef.current && !cell.doNotScrollX) {
          const leftMax = columnRights[cell.col] - columnRights[0];
          const leftMin = columnRights[cell.col] + columnWidths[cell.col + 1] + (hasStickyRightColumn ? columnWidths[columnWidths.length - 1] : 0) - width + 1;
          const scrollLeft = outerRef.current.scrollLeft;
          if (scrollLeft > leftMax) {
            outerRef.current.scrollLeft = leftMax;
          } else if (scrollLeft < leftMin) {
            outerRef.current.scrollLeft = leftMin;
          }
        }
      }, [
        height,
        width,
        headerRowHeight,
        columnRights,
        columnWidths,
        getRowSize,
        hasStickyRightColumn
      ]);
      (0, react_1.useEffect)(() => {
        if (selectionCell) {
          scrollTo(selectionCell);
        }
      }, [selectionCell, scrollTo]);
      (0, react_1.useEffect)(() => {
        if (activeCell) {
          scrollTo(activeCell);
        }
      }, [activeCell, scrollTo]);
      const setRowData = (0, react_1.useCallback)((rowIndex, item) => {
        var _a2, _b2;
        onChange([
          ...(_a2 = dataRef.current) === null || _a2 === void 0 ? void 0 : _a2.slice(0, rowIndex),
          item,
          ...(_b2 = dataRef.current) === null || _b2 === void 0 ? void 0 : _b2.slice(rowIndex + 1)
        ], [
          {
            type: "UPDATE",
            fromRowIndex: rowIndex,
            toRowIndex: rowIndex + 1
          }
        ]);
      }, [onChange]);
      const deleteRows = (0, react_1.useCallback)((rowMin, rowMax = rowMin) => {
        if (lockRows) {
          return;
        }
        setEditing(false);
        setActiveCell((a) => {
          const row = Math.min(dataRef.current.length - 2 - rowMax + rowMin, rowMin);
          if (row < 0) {
            return null;
          }
          return a && { col: a.col, row };
        });
        setSelectionCell(null);
        onChange([
          ...dataRef.current.slice(0, rowMin),
          ...dataRef.current.slice(rowMax + 1)
        ], [
          {
            type: "DELETE",
            fromRowIndex: rowMin,
            toRowIndex: rowMax + 1
          }
        ]);
      }, [lockRows, onChange, setActiveCell, setSelectionCell]);
      const deleteSelection = (0, react_1.useCallback)((_smartDelete = true) => {
        const smartDelete = _smartDelete && !disableSmartDelete;
        if (!activeCell) {
          return;
        }
        const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
        const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
        if (data.slice(min.row, max.row + 1).every((rowData, i) => columns.every((column) => column.isCellEmpty({ rowData, rowIndex: i + min.row })))) {
          if (smartDelete) {
            deleteRows(min.row, max.row);
          }
          return;
        }
        const newData = [...data];
        for (let row = min.row; row <= max.row; ++row) {
          for (let col = min.col; col <= max.col; ++col) {
            if (!isCellDisabled({ col, row })) {
              const { deleteValue = ({ rowData }) => rowData } = columns[col + 1];
              newData[row] = deleteValue({
                rowData: newData[row],
                rowIndex: row
              });
            }
          }
        }
        if (smartDelete && (0, fast_deep_equal_1.default)(newData, data)) {
          setActiveCell({ col: 0, row: min.row, doNotScrollX: true });
          setSelectionCell({
            col: columns.length - (hasStickyRightColumn ? 3 : 2),
            row: max.row,
            doNotScrollX: true
          });
          return;
        }
        onChange(newData, [
          {
            type: "UPDATE",
            fromRowIndex: min.row,
            toRowIndex: max.row + 1
          }
        ]);
      }, [
        activeCell,
        columns,
        data,
        deleteRows,
        isCellDisabled,
        onChange,
        selection === null || selection === void 0 ? void 0 : selection.max,
        selection === null || selection === void 0 ? void 0 : selection.min,
        setActiveCell,
        setSelectionCell,
        hasStickyRightColumn
      ]);
      const stopEditing = (0, react_1.useCallback)(({ nextRow = true } = {}) => {
        if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) === dataRef.current.length - 1) {
          if (nextRow && autoAddRow) {
            insertRowAfter(activeCell.row);
          } else {
            setEditing(false);
          }
        } else {
          setEditing(false);
          if (nextRow) {
            setActiveCell((a) => a && { col: a.col, row: a.row + 1 });
          }
        }
      }, [activeCell === null || activeCell === void 0 ? void 0 : activeCell.row, autoAddRow, insertRowAfter, setActiveCell]);
      const onCopy = (0, react_1.useCallback)((event) => __awaiter(void 0, void 0, void 0, function* () {
        var _g, _h;
        if (!editing && activeCell) {
          const copyData = [];
          const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
          const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
          for (let row = min.row; row <= max.row; ++row) {
            copyData.push([]);
            for (let col = min.col; col <= max.col; ++col) {
              const { copyValue = () => null } = columns[col + 1];
              copyData[row - min.row].push(copyValue({ rowData: data[row], rowIndex: row }));
            }
          }
          const textPlain = copyData.map((row) => row.join("	")).join("\n");
          const textHtml = `<table>${copyData.map((row) => `<tr>${row.map((cell) => `<td>${(0, copyPasting_1.encodeHtml)(String(cell !== null && cell !== void 0 ? cell : "")).replace(/\n/g, "<br/>")}</td>`).join("")}</tr>`).join("")}</table>`;
          if (event !== void 0) {
            (_g = event.clipboardData) === null || _g === void 0 ? void 0 : _g.setData("text/plain", textPlain);
            (_h = event.clipboardData) === null || _h === void 0 ? void 0 : _h.setData("text/html", textHtml);
            event.preventDefault();
            return;
          }
          let success = false;
          if (navigator.clipboard.write !== void 0) {
            const textBlob = new Blob([textPlain], {
              type: "text/plain"
            });
            const htmlBlob = new Blob([textHtml], { type: "text/html" });
            const clipboardData = [
              new ClipboardItem({
                "text/plain": textBlob,
                "text/html": htmlBlob
              })
            ];
            yield navigator.clipboard.write(clipboardData).then(() => {
              success = true;
            });
          } else if (navigator.clipboard.writeText !== void 0) {
            yield navigator.clipboard.writeText(textPlain).then(() => {
              success = true;
            });
          } else if (document.execCommand !== void 0) {
            const result = document.execCommand("copy");
            if (result) {
              success = true;
            }
          }
          if (!success) {
            alert("This action is unavailable in your browser, but you can still use Ctrl+C for copy or Ctrl+X for cut");
          }
        }
      }), [activeCell, columns, data, editing, selection]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("copy", onCopy);
      const onCut = (0, react_1.useCallback)((event) => {
        if (!editing && activeCell) {
          onCopy(event);
          deleteSelection(false);
        }
      }, [activeCell, deleteSelection, editing, onCopy]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("cut", onCut);
      const applyPasteDataToDatasheet = (0, react_1.useCallback)((pasteData) => __awaiter(void 0, void 0, void 0, function* () {
        var _j, _k;
        if (!editing && activeCell) {
          const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
          const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
          const results = yield Promise.all(pasteData[0].map((_, columnIndex) => {
            var _a2, _b2;
            const prePasteValues = (_a2 = columns[min.col + columnIndex + 1]) === null || _a2 === void 0 ? void 0 : _a2.prePasteValues;
            const values = pasteData.map((row) => row[columnIndex]);
            return (_b2 = prePasteValues === null || prePasteValues === void 0 ? void 0 : prePasteValues(values)) !== null && _b2 !== void 0 ? _b2 : values;
          }));
          pasteData = pasteData.map((_, rowIndex) => results.map((column) => column[rowIndex]));
          if (pasteData.length === 1) {
            const newData = [...data];
            for (let columnIndex = 0; columnIndex < pasteData[0].length; columnIndex++) {
              const pasteValue = (_j = columns[min.col + columnIndex + 1]) === null || _j === void 0 ? void 0 : _j.pasteValue;
              if (pasteValue) {
                for (let rowIndex = min.row; rowIndex <= max.row; rowIndex++) {
                  if (!isCellDisabled({
                    col: columnIndex + min.col,
                    row: rowIndex
                  })) {
                    newData[rowIndex] = yield pasteValue({
                      rowData: newData[rowIndex],
                      value: pasteData[0][columnIndex],
                      rowIndex
                    });
                  }
                }
              }
            }
            onChange(newData, [
              {
                type: "UPDATE",
                fromRowIndex: min.row,
                toRowIndex: max.row + 1
              }
            ]);
            setActiveCell({ col: min.col, row: min.row });
            setSelectionCell({
              col: Math.min(min.col + pasteData[0].length - 1, columns.length - (hasStickyRightColumn ? 3 : 2)),
              row: max.row
            });
          } else {
            let newData = [...data];
            const missingRows = min.row + pasteData.length - data.length;
            if (missingRows > 0) {
              if (!lockRows) {
                newData = [
                  ...newData,
                  ...new Array(missingRows).fill(0).map(() => createRow())
                ];
              } else {
                pasteData.splice(pasteData.length - missingRows, missingRows);
              }
            }
            for (let columnIndex = 0; columnIndex < pasteData[0].length && min.col + columnIndex < columns.length - (hasStickyRightColumn ? 2 : 1); columnIndex++) {
              const pasteValue = (_k = columns[min.col + columnIndex + 1]) === null || _k === void 0 ? void 0 : _k.pasteValue;
              if (pasteValue) {
                for (let rowIndex = 0; rowIndex < pasteData.length; rowIndex++) {
                  if (!isCellDisabled({
                    col: min.col + columnIndex,
                    row: min.row + rowIndex
                  })) {
                    newData[min.row + rowIndex] = yield pasteValue({
                      rowData: newData[min.row + rowIndex],
                      value: pasteData[rowIndex][columnIndex],
                      rowIndex: min.row + rowIndex
                    });
                  }
                }
              }
            }
            const operations = [
              {
                type: "UPDATE",
                fromRowIndex: min.row,
                toRowIndex: min.row + pasteData.length - (!lockRows && missingRows > 0 ? missingRows : 0)
              }
            ];
            if (missingRows > 0 && !lockRows) {
              operations.push({
                type: "CREATE",
                fromRowIndex: min.row + pasteData.length - missingRows,
                toRowIndex: min.row + pasteData.length
              });
            }
            onChange(newData, operations);
            setActiveCell({ col: min.col, row: min.row });
            setSelectionCell({
              col: Math.min(min.col + pasteData[0].length - 1, columns.length - (hasStickyRightColumn ? 3 : 2)),
              row: min.row + pasteData.length - 1
            });
          }
        }
      }), [
        activeCell,
        columns,
        createRow,
        data,
        editing,
        hasStickyRightColumn,
        isCellDisabled,
        lockRows,
        onChange,
        selection === null || selection === void 0 ? void 0 : selection.max,
        selection === null || selection === void 0 ? void 0 : selection.min,
        setActiveCell,
        setSelectionCell
      ]);
      const onPaste = (0, react_1.useCallback)((event) => {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        if (activeCell && !editing) {
          let pasteData = [[""]];
          if ((_a2 = event.clipboardData) === null || _a2 === void 0 ? void 0 : _a2.types.includes("text/html")) {
            pasteData = (0, copyPasting_1.parseTextHtmlData)((_b2 = event.clipboardData) === null || _b2 === void 0 ? void 0 : _b2.getData("text/html"));
          } else if ((_c2 = event.clipboardData) === null || _c2 === void 0 ? void 0 : _c2.types.includes("text/plain")) {
            pasteData = (0, copyPasting_1.parseTextPlainData)((_d2 = event.clipboardData) === null || _d2 === void 0 ? void 0 : _d2.getData("text/plain"));
          } else if ((_e2 = event.clipboardData) === null || _e2 === void 0 ? void 0 : _e2.types.includes("text")) {
            pasteData = (0, copyPasting_1.parseTextPlainData)((_f2 = event.clipboardData) === null || _f2 === void 0 ? void 0 : _f2.getData("text"));
          }
          applyPasteDataToDatasheet(pasteData);
          event.preventDefault();
        }
      }, [activeCell, applyPasteDataToDatasheet, editing]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("paste", onPaste);
      const onMouseDown = (0, react_1.useCallback)((event) => {
        var _a2, _b2, _c2;
        if (contextMenu && contextMenuItems.length) {
          return;
        }
        const rightClick = event.button === 2 || event.button === 0 && event.ctrlKey;
        const clickInside = ((_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) || false;
        const cursorIndex = clickInside ? getCursorIndex(event, true, true) : null;
        if (!clickInside && editing && activeCell && columns[activeCell.col + 1].keepFocus) {
          return;
        }
        if (event.target instanceof HTMLElement && event.target.className.includes("dsg-expand-rows-indicator")) {
          setExpandingSelectionFromRowIndex(Math.max((_b2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _b2 !== void 0 ? _b2 : 0, (_c2 = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _c2 !== void 0 ? _c2 : 0));
          return;
        }
        const clickOnActiveCell = cursorIndex && activeCell && activeCell.col === cursorIndex.col && activeCell.row === cursorIndex.row && !isCellDisabled(activeCell);
        if (clickOnActiveCell && editing) {
          return;
        }
        const clickOnStickyRightColumn = (cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.col) === columns.length - 2 && hasStickyRightColumn;
        const rightClickInSelection = rightClick && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row && cursorIndex.col >= selection.min.col && cursorIndex.col <= selection.max.col;
        const rightClickOnSelectedHeaders = rightClick && selection && cursorIndex && cursorIndex.row === -1 && cursorIndex.col >= selection.min.col && cursorIndex.col <= selection.max.col;
        const rightClickOnSelectedGutter = rightClick && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row && cursorIndex.col === -1;
        const clickOnSelectedStickyRightColumn = clickOnStickyRightColumn && selection && cursorIndex && cursorIndex.row >= selection.min.row && cursorIndex.row <= selection.max.row;
        if (rightClick && !disableContextMenu) {
          setContextMenu({
            x: event.clientX,
            y: event.clientY,
            cursorIndex
          });
        }
        if ((!(event.shiftKey && activeCell) || rightClick) && data.length > 0) {
          setActiveCell(cursorIndex && {
            col: (rightClickInSelection || rightClickOnSelectedHeaders) && activeCell ? activeCell.col : Math.max(0, clickOnStickyRightColumn ? 0 : cursorIndex.col),
            row: (rightClickInSelection || rightClickOnSelectedGutter || clickOnSelectedStickyRightColumn) && activeCell ? activeCell.row : Math.max(0, cursorIndex.row),
            doNotScrollX: Boolean(rightClickInSelection && activeCell || clickOnStickyRightColumn || cursorIndex.col === -1),
            doNotScrollY: Boolean(rightClickInSelection && activeCell || cursorIndex.row === -1)
          });
        }
        if (clickOnActiveCell && !rightClick) {
          lastEditingCellRef.current = activeCell;
        }
        setEditing(Boolean(clickOnActiveCell && !rightClick));
        setSelectionMode(cursorIndex && !rightClick ? {
          columns: cursorIndex.col !== -1 && !clickOnStickyRightColumn || Boolean(event.shiftKey && activeCell),
          rows: cursorIndex.row !== -1 || Boolean(event.shiftKey && activeCell),
          active: true
        } : {
          columns: false,
          rows: false,
          active: false
        });
        if (event.shiftKey && activeCell && !rightClick) {
          setSelectionCell(cursorIndex && {
            col: Math.max(0, cursorIndex.col - (clickOnStickyRightColumn ? 1 : 0)),
            row: Math.max(0, cursorIndex.row)
          });
        } else if (!rightClickInSelection) {
          if (cursorIndex && ((cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.col) === -1 || (cursorIndex === null || cursorIndex === void 0 ? void 0 : cursorIndex.row) === -1 || clickOnStickyRightColumn)) {
            let col = cursorIndex.col;
            let row = cursorIndex.row;
            let doNotScrollX = false;
            let doNotScrollY = false;
            if (cursorIndex.col === -1 || clickOnStickyRightColumn) {
              col = columns.length - (hasStickyRightColumn ? 3 : 2);
              doNotScrollX = true;
            }
            if (cursorIndex.row === -1) {
              row = data.length - 1;
              doNotScrollY = true;
            }
            if (rightClickOnSelectedHeaders && selectionCell) {
              col = selectionCell.col;
              doNotScrollY = true;
            }
            if ((rightClickOnSelectedGutter || clickOnSelectedStickyRightColumn) && selectionCell) {
              row = selectionCell.row;
              doNotScrollX = true;
            }
            setSelectionCell({ col, row, doNotScrollX, doNotScrollY });
          } else {
            setSelectionCell(null);
          }
          if (clickInside) {
            event.preventDefault();
          }
        }
      }, [
        contextMenu,
        contextMenuItems.length,
        getCursorIndex,
        editing,
        activeCell,
        columns,
        isCellDisabled,
        selection,
        hasStickyRightColumn,
        disableContextMenu,
        setSelectionMode,
        setActiveCell,
        setSelectionCell,
        selectionCell,
        data.length
      ]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("mousedown", onMouseDown);
      const onMouseUp = (0, react_1.useCallback)(() => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g, _h, _j;
        if (expandingSelectionFromRowIndex !== null) {
          if (expandSelectionRowsCount > 0 && activeCell) {
            let copyData = [];
            const min = (selection === null || selection === void 0 ? void 0 : selection.min) || activeCell;
            const max = (selection === null || selection === void 0 ? void 0 : selection.max) || activeCell;
            for (let row = min.row; row <= max.row; ++row) {
              copyData.push([]);
              for (let col = min.col; col <= max.col; ++col) {
                const { copyValue = () => null } = columns[col + 1];
                copyData[row - min.row].push(String((_a2 = copyValue({ rowData: data[row], rowIndex: row })) !== null && _a2 !== void 0 ? _a2 : ""));
              }
            }
            Promise.all(copyData[0].map((_, columnIndex) => {
              var _a3, _b3;
              const prePasteValues = (_a3 = columns[min.col + columnIndex + 1]) === null || _a3 === void 0 ? void 0 : _a3.prePasteValues;
              const values = copyData.map((row) => row[columnIndex]);
              return (_b3 = prePasteValues === null || prePasteValues === void 0 ? void 0 : prePasteValues(values)) !== null && _b3 !== void 0 ? _b3 : values;
            })).then((results) => {
              var _a3;
              copyData = copyData.map((_, rowIndex) => results.map((column) => column[rowIndex]));
              const newData = [...data];
              for (let columnIndex = 0; columnIndex < copyData[0].length; columnIndex++) {
                const pasteValue = (_a3 = columns[min.col + columnIndex + 1]) === null || _a3 === void 0 ? void 0 : _a3.pasteValue;
                if (pasteValue) {
                  for (let rowIndex = max.row + 1; rowIndex <= max.row + expandSelectionRowsCount; rowIndex++) {
                    if (!isCellDisabled({
                      col: columnIndex + min.col,
                      row: rowIndex
                    })) {
                      newData[rowIndex] = pasteValue({
                        rowData: newData[rowIndex],
                        value: copyData[(rowIndex - max.row - 1) % copyData.length][columnIndex],
                        rowIndex
                      });
                    }
                  }
                }
              }
              onChange(newData, [
                {
                  type: "UPDATE",
                  fromRowIndex: max.row + 1,
                  toRowIndex: max.row + 1 + expandSelectionRowsCount
                }
              ]);
            });
            setExpandSelectionRowsCount(0);
            setActiveCell({
              col: Math.min((_b2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.col) !== null && _b2 !== void 0 ? _b2 : Infinity, (_c2 = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _c2 !== void 0 ? _c2 : Infinity),
              row: Math.min((_d2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _d2 !== void 0 ? _d2 : Infinity, (_e2 = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _e2 !== void 0 ? _e2 : Infinity),
              doNotScrollX: true,
              doNotScrollY: true
            });
            setSelectionCell({
              col: Math.max((_f2 = activeCell === null || activeCell === void 0 ? void 0 : activeCell.col) !== null && _f2 !== void 0 ? _f2 : 0, (_g = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _g !== void 0 ? _g : 0),
              row: Math.max((_h = activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== null && _h !== void 0 ? _h : 0, (_j = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _j !== void 0 ? _j : 0) + expandSelectionRowsCount
            });
          }
          setExpandingSelectionFromRowIndex(null);
        }
        setSelectionMode({
          columns: false,
          rows: false,
          active: false
        });
      }, [
        expandingSelectionFromRowIndex,
        setSelectionMode,
        expandSelectionRowsCount,
        activeCell,
        selection === null || selection === void 0 ? void 0 : selection.min,
        selection === null || selection === void 0 ? void 0 : selection.max,
        data,
        onChange,
        setActiveCell,
        setSelectionCell,
        columns,
        isCellDisabled
      ]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("mouseup", onMouseUp);
      const onMouseMove = (0, react_1.useCallback)((event) => {
        if (expandingSelectionFromRowIndex !== null) {
          const cursorIndex = getCursorIndex(event);
          if (cursorIndex) {
            setExpandSelectionRowsCount(Math.max(0, cursorIndex.row - expandingSelectionFromRowIndex));
            scrollTo({
              col: cursorIndex.col,
              row: Math.max(cursorIndex.row, expandingSelectionFromRowIndex)
            });
          }
        }
        if (selectionMode.active) {
          const cursorIndex = getCursorIndex(event);
          const lastColumnIndex = columns.length - (hasStickyRightColumn ? 3 : 2);
          setSelectionCell(cursorIndex && {
            col: selectionMode.columns ? Math.max(0, Math.min(lastColumnIndex, cursorIndex.col)) : lastColumnIndex,
            row: selectionMode.rows ? Math.max(0, cursorIndex.row) : data.length - 1,
            doNotScrollX: !selectionMode.columns,
            doNotScrollY: !selectionMode.rows
          });
          setEditing(false);
        }
      }, [
        scrollTo,
        selectionMode.active,
        selectionMode.columns,
        selectionMode.rows,
        getCursorIndex,
        columns.length,
        hasStickyRightColumn,
        setSelectionCell,
        data.length,
        expandingSelectionFromRowIndex
      ]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("mousemove", onMouseMove);
      const onKeyDown = (0, react_1.useCallback)((event) => {
        var _a2;
        if (!activeCell) {
          return;
        }
        if (event.isComposing) {
          return;
        }
        if (event.key === "Tab" && !event.shiftKey && activeCell.col === columns.length - (hasStickyRightColumn ? 3 : 2) && !columns[activeCell.col + 1].disableKeys) {
          if (activeCell.row === data.length - 1) {
            if (afterTabIndexRef.current) {
              event.preventDefault();
              setActiveCell(null);
              setSelectionCell(null);
              setEditing(false);
              const allElements = (0, tab_1.getAllTabbableElements)();
              const index = allElements.indexOf(afterTabIndexRef.current);
              allElements[(index + 1) % allElements.length].focus();
              return;
            }
          } else {
            setActiveCell((cell) => {
              var _a3;
              return { col: 0, row: ((_a3 = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _a3 !== void 0 ? _a3 : 0) + 1 };
            });
            setSelectionCell(null);
            setEditing(false);
            event.preventDefault();
            return;
          }
        }
        if (event.key === "Tab" && event.shiftKey && activeCell.col === 0 && !columns[activeCell.col + 1].disableKeys) {
          if (activeCell.row === 0) {
            if (beforeTabIndexRef.current) {
              event.preventDefault();
              setActiveCell(null);
              setSelectionCell(null);
              setEditing(false);
              const allElements = (0, tab_1.getAllTabbableElements)();
              const index = allElements.indexOf(beforeTabIndexRef.current);
              allElements[(index - 1 + allElements.length) % allElements.length].focus();
              return;
            }
          } else {
            setActiveCell((cell) => {
              var _a3;
              return {
                col: columns.length - (hasStickyRightColumn ? 3 : 2),
                row: ((_a3 = cell === null || cell === void 0 ? void 0 : cell.row) !== null && _a3 !== void 0 ? _a3 : 1) - 1
              };
            });
            setSelectionCell(null);
            setEditing(false);
            event.preventDefault();
            return;
          }
        }
        if (((_a2 = event.key) === null || _a2 === void 0 ? void 0 : _a2.startsWith("Arrow")) || event.key === "Tab") {
          if (editing && columns[activeCell.col + 1].disableKeys) {
            return;
          }
          if (editing && ["ArrowLeft", "ArrowRight"].includes(event.key)) {
            return;
          }
          const add = ([x, y], cell) => cell && {
            col: Math.max(0, Math.min(columns.length - (hasStickyRightColumn ? 3 : 2), cell.col + x)),
            row: Math.max(0, Math.min(data.length - 1, cell.row + y))
          };
          if (event.key === "Tab" && event.shiftKey) {
            setActiveCell((cell) => add([-1, 0], cell));
            setSelectionCell(null);
          } else {
            const direction = {
              ArrowDown: [0, 1],
              ArrowUp: [0, -1],
              ArrowLeft: [-1, 0],
              ArrowRight: [1, 0],
              Tab: [1, 0]
            }[event.key];
            if (event.ctrlKey || event.metaKey) {
              direction[0] *= columns.length;
              direction[1] *= data.length;
            }
            if (event.shiftKey) {
              setSelectionCell((cell) => add(direction, cell || activeCell));
            } else {
              setActiveCell((cell) => add(direction, cell));
              setSelectionCell(null);
            }
          }
          setEditing(false);
          event.preventDefault();
        } else if (event.key === "Escape") {
          if (!editing && !selectionCell) {
            setActiveCell(null);
          }
          setSelectionCell(null);
          setEditing(false);
        } else if ((event.key === "Enter" || event.key === "F2") && !event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
          setSelectionCell(null);
          if (editing) {
            if (!columns[activeCell.col + 1].disableKeys) {
              stopEditing();
              event.preventDefault();
            }
          } else if (!isCellDisabled(activeCell)) {
            lastEditingCellRef.current = activeCell;
            setEditing(true);
            scrollTo(activeCell);
            event.preventDefault();
          }
        } else if (event.key === "Enter" && !event.ctrlKey && !event.metaKey && !event.altKey && event.shiftKey) {
          insertRowAfter((selection === null || selection === void 0 ? void 0 : selection.max.row) || activeCell.row);
        } else if (event.key === "d" && (event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey) {
          duplicateRows((selection === null || selection === void 0 ? void 0 : selection.min.row) || activeCell.row, selection === null || selection === void 0 ? void 0 : selection.max.row);
          event.preventDefault();
        } else if (((0, copyPasting_1.isPrintableUnicode)(event.key) || event.code.match(/Key[A-Z]$/)) && !event.ctrlKey && !event.metaKey && !event.altKey) {
          if (!editing && !isCellDisabled(activeCell)) {
            lastEditingCellRef.current = activeCell;
            setSelectionCell(null);
            setEditing(true);
            scrollTo(activeCell);
          }
        } else if (["Backspace", "Delete"].includes(event.key)) {
          if (!editing) {
            deleteSelection();
            event.preventDefault();
          }
        } else if (event.key === "a" && (event.ctrlKey || event.metaKey)) {
          if (!editing) {
            setActiveCell({
              col: 0,
              row: 0,
              doNotScrollY: true,
              doNotScrollX: true
            });
            setSelectionCell({
              col: columns.length - (hasStickyRightColumn ? 3 : 2),
              row: data.length - 1,
              doNotScrollY: true,
              doNotScrollX: true
            });
            event.preventDefault();
          }
        }
      }, [
        activeCell,
        columns,
        data.length,
        deleteSelection,
        duplicateRows,
        editing,
        insertRowAfter,
        isCellDisabled,
        scrollTo,
        selection === null || selection === void 0 ? void 0 : selection.max.row,
        selection === null || selection === void 0 ? void 0 : selection.min.row,
        selectionCell,
        setActiveCell,
        setSelectionCell,
        stopEditing,
        hasStickyRightColumn
      ]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("keydown", onKeyDown);
      const onContextMenu = (0, react_1.useCallback)((event) => {
        var _a2;
        const clickInside = ((_a2 = innerRef.current) === null || _a2 === void 0 ? void 0 : _a2.contains(event.target)) || false;
        const cursorIndex = clickInside ? getCursorIndex(event, true, true) : null;
        const clickOnActiveCell = cursorIndex && activeCell && activeCell.col === cursorIndex.col && activeCell.row === cursorIndex.row && editing;
        if (clickInside && !clickOnActiveCell) {
          event.preventDefault();
        }
      }, [getCursorIndex, activeCell, editing]);
      (0, useDocumentEventListener_1.useDocumentEventListener)("contextmenu", onContextMenu);
      (0, react_1.useEffect)(() => {
        const items = [];
        if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
          items.push({
            type: "COPY",
            action: () => {
              onCopy();
              setContextMenu(null);
            }
          }, {
            type: "CUT",
            action: () => {
              onCut();
              setContextMenu(null);
            }
          }, {
            type: "PASTE",
            action: () => __awaiter(void 0, void 0, void 0, function* () {
              if (navigator.clipboard.read !== void 0) {
                const items2 = yield navigator.clipboard.read();
                items2.forEach((item) => __awaiter(void 0, void 0, void 0, function* () {
                  let pasteData = [[""]];
                  if (item.types.includes("text/html")) {
                    const htmlTextData = yield item.getType("text/html");
                    pasteData = (0, copyPasting_1.parseTextHtmlData)(yield htmlTextData.text());
                  } else if (item.types.includes("text/plain")) {
                    const plainTextData = yield item.getType("text/plain");
                    pasteData = (0, copyPasting_1.parseTextPlainData)(yield plainTextData.text());
                  } else if (item.types.includes("text")) {
                    const htmlTextData = yield item.getType("text");
                    pasteData = (0, copyPasting_1.parseTextHtmlData)(yield htmlTextData.text());
                  }
                  applyPasteDataToDatasheet(pasteData);
                }));
              } else if (navigator.clipboard.readText !== void 0) {
                const text = yield navigator.clipboard.readText();
                applyPasteDataToDatasheet((0, copyPasting_1.parseTextPlainData)(text));
              } else {
                alert("This action is unavailable in your browser, but you can still use Ctrl+V for paste");
              }
              setContextMenu(null);
            })
          });
        }
        if ((selection === null || selection === void 0 ? void 0 : selection.max.row) !== void 0) {
          items.push({
            type: "INSERT_ROW_BELLOW",
            action: () => {
              setContextMenu(null);
              insertRowAfter(selection.max.row);
            }
          });
        } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
          items.push({
            type: "INSERT_ROW_BELLOW",
            action: () => {
              setContextMenu(null);
              insertRowAfter(activeCell.row);
            }
          });
        }
        if ((selection === null || selection === void 0 ? void 0 : selection.min.row) !== void 0 && selection.min.row !== selection.max.row) {
          items.push({
            type: "DUPLICATE_ROWS",
            fromRow: selection.min.row + 1,
            toRow: selection.max.row + 1,
            action: () => {
              setContextMenu(null);
              duplicateRows(selection.min.row, selection.max.row);
            }
          });
        } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
          items.push({
            type: "DUPLICATE_ROW",
            action: () => {
              setContextMenu(null);
              duplicateRows(activeCell.row);
            }
          });
        }
        if ((selection === null || selection === void 0 ? void 0 : selection.min.row) !== void 0 && selection.min.row !== selection.max.row) {
          items.push({
            type: "DELETE_ROWS",
            fromRow: selection.min.row + 1,
            toRow: selection.max.row + 1,
            action: () => {
              setContextMenu(null);
              deleteRows(selection.min.row, selection.max.row);
            }
          });
        } else if ((activeCell === null || activeCell === void 0 ? void 0 : activeCell.row) !== void 0) {
          items.push({
            type: "DELETE_ROW",
            action: () => {
              setContextMenu(null);
              deleteRows(activeCell.row);
            }
          });
        }
        setContextMenuItems(items);
        if (!items.length) {
          setContextMenu(null);
        }
      }, [
        selection,
        activeCell,
        deleteRows,
        duplicateRows,
        insertRowAfter,
        onCut,
        onCopy,
        applyPasteDataToDatasheet
      ]);
      const contextMenuItemsRef = (0, react_1.useRef)(contextMenuItems);
      contextMenuItemsRef.current = contextMenuItems;
      const getContextMenuItems = (0, react_1.useCallback)(() => contextMenuItemsRef.current, []);
      (0, react_1.useImperativeHandle)(ref, () => ({
        activeCell: (0, typeCheck_1.getCellWithId)(activeCell, columns),
        selection: (0, typeCheck_1.getSelectionWithId)(selection !== null && selection !== void 0 ? selection : activeCell ? { min: activeCell, max: activeCell } : null, columns),
        setSelection: (value) => {
          const selection2 = (0, typeCheck_1.getSelection)(value, columns.length - (hasStickyRightColumn ? 2 : 1), data.length, columns);
          setActiveCell((selection2 === null || selection2 === void 0 ? void 0 : selection2.min) || null);
          setEditing(false);
          setSelectionMode({ columns: false, active: false, rows: false });
          setSelectionCell((selection2 === null || selection2 === void 0 ? void 0 : selection2.max) || null);
        },
        setActiveCell: (value) => {
          const cell = (0, typeCheck_1.getCell)(value, columns.length - (hasStickyRightColumn ? 2 : 1), data.length, columns);
          setActiveCell(cell);
          setEditing(false);
          setSelectionMode({ columns: false, active: false, rows: false });
          setSelectionCell(null);
        }
      }));
      const callbacksRef = (0, react_1.useRef)({
        onFocus,
        onBlur,
        onActiveCellChange,
        onSelectionChange
      });
      callbacksRef.current.onFocus = onFocus;
      callbacksRef.current.onBlur = onBlur;
      callbacksRef.current.onActiveCellChange = onActiveCellChange;
      callbacksRef.current.onSelectionChange = onSelectionChange;
      (0, react_1.useEffect)(() => {
        if (lastEditingCellRef.current) {
          if (editing) {
            callbacksRef.current.onFocus({
              cell: (0, typeCheck_1.getCellWithId)(lastEditingCellRef.current, columns)
            });
          } else {
            callbacksRef.current.onBlur({
              cell: (0, typeCheck_1.getCellWithId)(lastEditingCellRef.current, columns)
            });
          }
        }
      }, [editing, columns]);
      (0, react_1.useEffect)(() => {
        callbacksRef.current.onActiveCellChange({
          cell: (0, typeCheck_1.getCellWithId)(activeCell, columns)
        });
      }, [activeCell === null || activeCell === void 0 ? void 0 : activeCell.col, activeCell === null || activeCell === void 0 ? void 0 : activeCell.row, columns]);
      (0, react_1.useEffect)(() => {
        callbacksRef.current.onSelectionChange({
          selection: (0, typeCheck_1.getSelectionWithId)(selection !== null && selection !== void 0 ? selection : activeCell ? { min: activeCell, max: activeCell } : null, columns)
        });
      }, [
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (_c = selection === null || selection === void 0 ? void 0 : selection.min.col) !== null && _c !== void 0 ? _c : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (_d = selection === null || selection === void 0 ? void 0 : selection.min.row) !== null && _d !== void 0 ? _d : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (_e = selection === null || selection === void 0 ? void 0 : selection.max.col) !== null && _e !== void 0 ? _e : activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (_f = selection === null || selection === void 0 ? void 0 : selection.max.row) !== null && _f !== void 0 ? _f : activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
        activeCell === null || activeCell === void 0 ? void 0 : activeCell.col,
        activeCell === null || activeCell === void 0 ? void 0 : activeCell.row,
        columns
      ]);
      return react_1.default.createElement(
        "div",
        { className, style },
        react_1.default.createElement("div", { ref: beforeTabIndexRef, tabIndex: rawColumns.length && data.length ? 0 : void 0, onFocus: (e) => {
          e.target.blur();
          setActiveCell({ col: 0, row: 0 });
        } }),
        react_1.default.createElement(
          Grid_1.Grid,
          { columns, outerRef, columnWidths, hasStickyRightColumn, displayHeight, data, fullWidth, headerRowHeight, activeCell, innerRef, rowHeight: getRowSize, rowKey, selection, rowClassName, editing, getContextMenuItems, setRowData, deleteRows, insertRowAfter, duplicateRows, stopEditing, cellClassName, onScroll },
          react_1.default.createElement(SelectionRect_1.SelectionRect, { columnRights, columnWidths, activeCell, selection, headerRowHeight, rowHeight: getRowSize, hasStickyRightColumn, dataLength: data.length, viewHeight: height, viewWidth: width, contentWidth: fullWidth ? void 0 : contentWidth, edges, editing, isCellDisabled, expandSelection })
        ),
        react_1.default.createElement("div", { ref: afterTabIndexRef, tabIndex: rawColumns.length && data.length ? 0 : void 0, onFocus: (e) => {
          e.target.blur();
          setActiveCell({
            col: columns.length - (hasStickyRightColumn ? 3 : 2),
            row: data.length - 1
          });
        } }),
        !lockRows && AddRowsComponent && react_1.default.createElement(AddRowsComponent, { addRows: (count) => insertRowAfter(data.length - 1, count) }),
        contextMenu && contextMenuItems.length > 0 && react_1.default.createElement(ContextMenuComponent, { clientX: contextMenu.x, clientY: contextMenu.y, cursorIndex: contextMenu.cursorIndex, items: contextMenuItems, close: () => setContextMenu(null) })
      );
    }));
    exports.DataSheetGrid.displayName = "DataSheetGrid";
  }
});

// node_modules/react-datasheet-grid/dist/components/StaticDataSheetGrid.js
var require_StaticDataSheetGrid = __commonJS({
  "node_modules/react-datasheet-grid/dist/components/StaticDataSheetGrid.js"(exports) {
    "use strict";
    var __rest2 = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StaticDataSheetGrid = void 0;
    var react_1 = require_react();
    var DataSheetGrid_1 = require_DataSheetGrid();
    var react_2 = __importDefault(require_react());
    exports.StaticDataSheetGrid = react_2.default.forwardRef((_a, ref) => {
      var { columns, gutterColumn, stickyRightColumn, addRowsComponent, createRow, duplicateRow, style, rowKey, onFocus, onBlur, onActiveCellChange, onSelectionChange, rowClassName, rowHeight } = _a, rest = __rest2(_a, ["columns", "gutterColumn", "stickyRightColumn", "addRowsComponent", "createRow", "duplicateRow", "style", "rowKey", "onFocus", "onBlur", "onActiveCellChange", "onSelectionChange", "rowClassName", "rowHeight"]);
      const [staticProps] = (0, react_1.useState)({
        columns,
        gutterColumn,
        stickyRightColumn,
        addRowsComponent,
        createRow,
        duplicateRow,
        style,
        rowKey,
        onFocus,
        onBlur,
        onActiveCellChange,
        onSelectionChange,
        rowClassName,
        rowHeight
      });
      return react_2.default.createElement(DataSheetGrid_1.DataSheetGrid, Object.assign({}, staticProps, rest, { rowHeight: typeof rowHeight === "number" ? rowHeight : staticProps.rowHeight, ref }));
    });
  }
});

// node_modules/react-datasheet-grid/dist/hooks/useFirstRender.js
var require_useFirstRender = __commonJS({
  "node_modules/react-datasheet-grid/dist/hooks/useFirstRender.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useFirstRender = void 0;
    var react_1 = require_react();
    var useFirstRender = () => {
      const firstRenderRef = (0, react_1.useRef)(true);
      const firstRender = firstRenderRef.current;
      firstRenderRef.current = false;
      return firstRender;
    };
    exports.useFirstRender = useFirstRender;
  }
});

// node_modules/react-datasheet-grid/dist/columns/textColumn.js
var require_textColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/textColumn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTextColumn = exports.textColumn = void 0;
    var react_1 = __importStar(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var useFirstRender_1 = require_useFirstRender();
    var TextComponent = react_1.default.memo(({ active, focus, rowData, setRowData, columnData: { placeholder, alignRight, formatInputOnFocus, formatBlurredInput, parseUserInput, continuousUpdates } }) => {
      const ref = (0, react_1.useRef)(null);
      const firstRender = (0, useFirstRender_1.useFirstRender)();
      const asyncRef = (0, react_1.useRef)({
        rowData,
        formatInputOnFocus,
        formatBlurredInput,
        setRowData,
        parseUserInput,
        continuousUpdates,
        firstRender,
        // Timestamp of last focus (when focus becomes true) and last change (input change)
        // used to prevent un-necessary updates when value was not changed
        focusedAt: 0,
        changedAt: 0,
        // This allows us to keep track of whether or not the user blurred the input using the Esc key
        // If the Esc key is used we do not update the row's value (only relevant when continuousUpdates is false)
        escPressed: false
      });
      asyncRef.current = {
        rowData,
        formatInputOnFocus,
        formatBlurredInput,
        setRowData,
        parseUserInput,
        continuousUpdates,
        firstRender,
        // Keep the same values across renders
        focusedAt: asyncRef.current.focusedAt,
        changedAt: asyncRef.current.changedAt,
        escPressed: asyncRef.current.escPressed
      };
      (0, react_1.useLayoutEffect)(() => {
        if (focus) {
          if (ref.current) {
            ref.current.value = asyncRef.current.formatInputOnFocus(asyncRef.current.rowData);
            ref.current.focus();
            ref.current.select();
          }
          asyncRef.current.escPressed = false;
          asyncRef.current.focusedAt = Date.now();
        } else {
          if (ref.current) {
            if (!asyncRef.current.escPressed && !asyncRef.current.continuousUpdates && !asyncRef.current.firstRender && // Make sure that focus was gained more than 10 ms ago, used to prevent flickering
            asyncRef.current.changedAt >= asyncRef.current.focusedAt) {
              asyncRef.current.setRowData(asyncRef.current.parseUserInput(ref.current.value));
            }
            ref.current.blur();
          }
        }
      }, [focus]);
      (0, react_1.useEffect)(() => {
        if (!focus && ref.current) {
          ref.current.value = asyncRef.current.formatBlurredInput(rowData);
        }
      }, [focus, rowData]);
      return react_1.default.createElement("input", {
        // We use an uncontrolled component for better performance
        defaultValue: formatBlurredInput(rowData),
        className: (0, classnames_1.default)("dsg-input", alignRight && "dsg-input-align-right"),
        placeholder: active ? placeholder : void 0,
        // Important to prevent any undesired "tabbing"
        tabIndex: -1,
        ref,
        // Make sure that while the cell is not focus, the user cannot interact with the input
        // The cursor will not change to "I", the style of the input will not change,
        // and the user cannot click and edit the input (this part is handled by DataSheetGrid itself)
        style: { pointerEvents: focus ? "auto" : "none" },
        onChange: (e) => {
          asyncRef.current.changedAt = Date.now();
          if (continuousUpdates) {
            setRowData(parseUserInput(e.target.value));
          }
        },
        onKeyDown: (e) => {
          if (e.key === "Escape") {
            asyncRef.current.escPressed = true;
          }
        }
      });
    });
    TextComponent.displayName = "TextComponent";
    exports.textColumn = createTextColumn();
    function createTextColumn({ placeholder, alignRight = false, continuousUpdates = true, deletedValue = null, parseUserInput = (value) => value.trim() || null, formatBlurredInput = (value) => String(value !== null && value !== void 0 ? value : ""), formatInputOnFocus = (value) => String(value !== null && value !== void 0 ? value : ""), formatForCopy = (value) => String(value !== null && value !== void 0 ? value : ""), parsePastedValue = (value) => value.replace(/[\n\r]+/g, " ").trim() || null } = {}) {
      return {
        component: TextComponent,
        columnData: {
          placeholder,
          alignRight,
          continuousUpdates,
          formatInputOnFocus,
          formatBlurredInput,
          parseUserInput
        },
        deleteValue: () => deletedValue,
        copyValue: ({ rowData }) => formatForCopy(rowData),
        pasteValue: ({ value }) => parsePastedValue(value),
        isCellEmpty: ({ rowData }) => rowData === null || rowData === void 0
      };
    }
    exports.createTextColumn = createTextColumn;
  }
});

// node_modules/react-datasheet-grid/dist/columns/checkboxColumn.js
var require_checkboxColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/checkboxColumn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.checkboxColumn = void 0;
    var react_1 = __importStar(require_react());
    var FALSY = [
      "",
      "false",
      "no",
      "off",
      "disabled",
      "0",
      "n",
      "f",
      "unchecked",
      "undefined",
      "null",
      "wrong",
      "negative"
    ];
    var CheckboxComponent = react_1.default.memo(({ focus, rowData, setRowData, active, stopEditing, disabled }) => {
      const ref = (0, react_1.useRef)(null);
      (0, react_1.useLayoutEffect)(() => {
        if (focus) {
          setRowData(!rowData);
          stopEditing({ nextRow: false });
        }
      }, [focus, stopEditing]);
      return react_1.default.createElement("input", {
        className: "dsg-checkbox",
        // Important to prevent any undesired "tabbing"
        tabIndex: -1,
        type: "checkbox",
        ref,
        disabled,
        checked: Boolean(rowData),
        // When cell is not active, we allow the user to toggle the checkbox by clicking on it
        // When cell becomes active, we disable this feature and rely on focus instead (see `useLayoutEffect` above)
        onMouseDown: () => !active && setRowData(!rowData),
        onChange: () => null
      });
    });
    CheckboxComponent.displayName = "CheckboxComponent";
    exports.checkboxColumn = {
      component: CheckboxComponent,
      deleteValue: () => false,
      // We can customize what value is copied: when the checkbox is checked we copy YES, otherwise we copy NO
      copyValue: ({ rowData }) => rowData ? "YES" : "NO",
      // Since we copy custom values, we have to make sure pasting gives us the expected result
      // Here NO is included in the FALSY array, so it will be converted to false, YES is not, so it will be converted to true
      pasteValue: ({ value }) => !FALSY.includes(value.toLowerCase()),
      isCellEmpty: ({ rowData }) => !rowData
    };
  }
});

// node_modules/react-datasheet-grid/dist/columns/floatColumn.js
var require_floatColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/floatColumn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.floatColumn = void 0;
    var textColumn_1 = require_textColumn();
    exports.floatColumn = (0, textColumn_1.createTextColumn)({
      alignRight: true,
      formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat().format(value) : "",
      parseUserInput: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? number : null;
      },
      parsePastedValue: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? number : null;
      }
    });
  }
});

// node_modules/react-datasheet-grid/dist/columns/intColumn.js
var require_intColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/intColumn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.intColumn = void 0;
    var textColumn_1 = require_textColumn();
    exports.intColumn = (0, textColumn_1.createTextColumn)({
      alignRight: true,
      formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat().format(value) : "",
      parseUserInput: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? Math.round(number) : null;
      },
      parsePastedValue: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? Math.round(number) : null;
      }
    });
  }
});

// node_modules/react-datasheet-grid/dist/columns/percentColumn.js
var require_percentColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/percentColumn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.percentColumn = void 0;
    var textColumn_1 = require_textColumn();
    var TEN_TO_THE_12 = 1e12;
    var TEN_TO_THE_10 = 1e10;
    exports.percentColumn = (0, textColumn_1.createTextColumn)({
      alignRight: true,
      formatBlurredInput: (value) => typeof value === "number" ? new Intl.NumberFormat(void 0, { style: "percent" }).format(value) : "",
      // We turn percentages (numbers between 0 and 1) into string (between 0 and 100)
      // We could have just multiply percentages by 100, but floating point arithmetic won't work as expected: 0.29 * 100 === 28.999999999999996
      // So we have to round those numbers to 10 decimals before turning them into strings
      formatInputOnFocus: (value) => typeof value === "number" && !isNaN(value) ? String(Math.round(value * TEN_TO_THE_12) / TEN_TO_THE_10) : "",
      parseUserInput: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? number / 100 : null;
      },
      parsePastedValue: (value) => {
        const number = parseFloat(value);
        return !isNaN(number) ? number : null;
      }
    });
  }
});

// node_modules/react-datasheet-grid/dist/columns/dateColumn.js
var require_dateColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/dateColumn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dateColumn = void 0;
    var react_1 = __importStar(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var DateComponent = react_1.default.memo(({ focus, active, rowData, setRowData }) => {
      var _a;
      const ref = (0, react_1.useRef)(null);
      (0, react_1.useLayoutEffect)(() => {
        var _a2, _b;
        if (focus) {
          (_a2 = ref.current) === null || _a2 === void 0 ? void 0 : _a2.select();
        } else {
          (_b = ref.current) === null || _b === void 0 ? void 0 : _b.blur();
        }
      }, [focus]);
      return react_1.default.createElement("input", {
        className: (0, classnames_1.default)("dsg-input", !active && "dsg-hide-date-picker"),
        type: "date",
        // Important to prevent any undesired "tabbing"
        tabIndex: -1,
        max: "9999-12-31",
        ref,
        // The `pointerEvents` trick is the same than in `textColumn`
        // Only show the calendar symbol on non-empty cells, or when cell is active, otherwise set opacity to 0
        style: {
          pointerEvents: focus ? "auto" : "none",
          opacity: rowData || active ? void 0 : 0
        },
        // Because rowData is a Date object and we need a string, we use toISOString...
        value: (_a = rowData === null || rowData === void 0 ? void 0 : rowData.toISOString().substr(0, 10)) !== null && _a !== void 0 ? _a : "",
        // ...and the input returns a string that should be converted into a Date object
        onChange: (e) => {
          const date = new Date(e.target.value);
          setRowData(isNaN(date.getTime()) ? null : date);
        }
      });
    });
    DateComponent.displayName = "DateComponent";
    exports.dateColumn = {
      component: DateComponent,
      deleteValue: () => null,
      // We convert the date to a string for copying using toISOString
      copyValue: ({ rowData }) => rowData ? rowData.toISOString().substr(0, 10) : null,
      // Because the Date constructor works using iso format, we can use it to parse ISO string back to a Date object
      pasteValue: ({ value }) => {
        const date = new Date(value.replace(/\.\s?|\//g, "-"));
        return isNaN(date.getTime()) ? null : date;
      },
      minWidth: 170,
      isCellEmpty: ({ rowData }) => !rowData
    };
  }
});

// node_modules/react-datasheet-grid/dist/columns/isoDateColumn.js
var require_isoDateColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/isoDateColumn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isoDateColumn = void 0;
    var react_1 = __importStar(require_react());
    var classnames_1 = __importDefault(require_classnames());
    var IsoDateComponent = react_1.default.memo(({ focus, active, rowData, setRowData }) => {
      const ref = (0, react_1.useRef)(null);
      (0, react_1.useLayoutEffect)(() => {
        var _a, _b;
        if (focus) {
          (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
        } else {
          (_b = ref.current) === null || _b === void 0 ? void 0 : _b.blur();
        }
      }, [focus]);
      return react_1.default.createElement("input", {
        className: (0, classnames_1.default)("dsg-input", !active && "dsg-hide-date-picker"),
        type: "date",
        // Important to prevent any undesired "tabbing"
        tabIndex: -1,
        max: "9999-12-31",
        ref,
        // The `pointerEvents` trick is the same than in `textColumn`
        // Only show the calendar symbol on non-empty cells, or when cell is active, otherwise set opacity to 0
        style: {
          pointerEvents: focus ? "auto" : "none",
          opacity: rowData || active ? void 0 : 0
        },
        // Because rowData is a Date object and we need a string, we use toISOString...
        value: rowData !== null && rowData !== void 0 ? rowData : "",
        // ...and the input returns a string that should be converted into a Date object
        onChange: (e) => {
          const date = new Date(e.target.value);
          setRowData(isNaN(date.getTime()) ? null : date.toISOString().substr(0, 10));
        }
      });
    });
    IsoDateComponent.displayName = "IsoDateComponent";
    exports.isoDateColumn = {
      component: IsoDateComponent,
      deleteValue: () => null,
      copyValue: ({ rowData }) => rowData,
      // Because the Date constructor works using iso format, we can use it to parse ISO string back to a Date object
      pasteValue: ({ value }) => {
        const date = new Date(value.replace(/\.\s?|\//g, "-"));
        return isNaN(date.getTime()) ? null : date.toISOString().substr(0, 10);
      },
      minWidth: 170,
      isCellEmpty: ({ rowData }) => !rowData
    };
  }
});

// node_modules/react-datasheet-grid/dist/columns/keyColumn.js
var require_keyColumn = __commonJS({
  "node_modules/react-datasheet-grid/dist/columns/keyColumn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __rest2 = exports && exports.__rest || function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keyColumn = void 0;
    var react_1 = __importStar(require_react());
    var KeyComponent = (_a) => {
      var { columnData: { key, original }, rowData, setRowData } = _a, rest = __rest2(_a, ["columnData", "rowData", "setRowData"]);
      const rowDataRef = (0, react_1.useRef)(rowData);
      rowDataRef.current = rowData;
      const setKeyData = (0, react_1.useCallback)((value) => {
        setRowData(Object.assign(Object.assign({}, rowDataRef.current), { [key]: value }));
      }, [key, setRowData]);
      if (!original.component) {
        return react_1.default.createElement(react_1.default.Fragment, null);
      }
      const Component2 = original.component;
      return react_1.default.createElement(Component2, Object.assign({
        columnData: original.columnData,
        setRowData: setKeyData,
        // We only pass the value of the desired key, this is why each cell does not have to re-render everytime
        // another cell in the same row changes!
        rowData: rowData[key]
      }, rest));
    };
    var keyColumn = (key, column) => Object.assign(Object.assign({ id: key }, column), {
      // We pass the key and the original column as columnData to be able to retrieve them in the cell component
      columnData: { key, original: column },
      component: KeyComponent,
      // Here we simply wrap all functions to only pass the value of the desired key to the column, and not the entire row
      copyValue: ({ rowData, rowIndex }) => {
        var _a, _b;
        return (_b = (_a = column.copyValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : null;
      },
      deleteValue: ({ rowData, rowIndex }) => {
        var _a, _b;
        return Object.assign(Object.assign({}, rowData), { [key]: (_b = (_a = column.deleteValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : null });
      },
      pasteValue: ({ rowData, value, rowIndex }) => {
        var _a, _b;
        return Object.assign(Object.assign({}, rowData), { [key]: (_b = (_a = column.pasteValue) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], value, rowIndex })) !== null && _b !== void 0 ? _b : null });
      },
      disabled: typeof column.disabled === "function" ? ({ rowData, rowIndex }) => {
        var _a;
        return typeof column.disabled === "function" ? column.disabled({ rowData: rowData[key], rowIndex }) : (_a = column.disabled) !== null && _a !== void 0 ? _a : false;
      } : column.disabled,
      cellClassName: typeof column.cellClassName === "function" ? ({ rowData, rowIndex, columnId }) => {
        var _a;
        return typeof column.cellClassName === "function" ? column.cellClassName({ rowData: rowData[key], rowIndex, columnId }) : (_a = column.cellClassName) !== null && _a !== void 0 ? _a : void 0;
      } : column.cellClassName,
      isCellEmpty: ({ rowData, rowIndex }) => {
        var _a, _b;
        return (_b = (_a = column.isCellEmpty) === null || _a === void 0 ? void 0 : _a.call(column, { rowData: rowData[key], rowIndex })) !== null && _b !== void 0 ? _b : false;
      }
    });
    exports.keyColumn = keyColumn;
  }
});

// node_modules/react-datasheet-grid/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-datasheet-grid/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderContextMenuItem = exports.createContextMenuComponent = exports.createAddRowsComponent = exports.keyColumn = exports.isoDateColumn = exports.dateColumn = exports.percentColumn = exports.intColumn = exports.floatColumn = exports.checkboxColumn = exports.createTextColumn = exports.textColumn = exports.DataSheetGrid = exports.DynamicDataSheetGrid = void 0;
    var DataSheetGrid_1 = require_DataSheetGrid();
    var StaticDataSheetGrid_1 = require_StaticDataSheetGrid();
    exports.DynamicDataSheetGrid = DataSheetGrid_1.DataSheetGrid;
    exports.DataSheetGrid = StaticDataSheetGrid_1.StaticDataSheetGrid;
    var textColumn_1 = require_textColumn();
    Object.defineProperty(exports, "textColumn", { enumerable: true, get: function() {
      return textColumn_1.textColumn;
    } });
    Object.defineProperty(exports, "createTextColumn", { enumerable: true, get: function() {
      return textColumn_1.createTextColumn;
    } });
    var checkboxColumn_1 = require_checkboxColumn();
    Object.defineProperty(exports, "checkboxColumn", { enumerable: true, get: function() {
      return checkboxColumn_1.checkboxColumn;
    } });
    var floatColumn_1 = require_floatColumn();
    Object.defineProperty(exports, "floatColumn", { enumerable: true, get: function() {
      return floatColumn_1.floatColumn;
    } });
    var intColumn_1 = require_intColumn();
    Object.defineProperty(exports, "intColumn", { enumerable: true, get: function() {
      return intColumn_1.intColumn;
    } });
    var percentColumn_1 = require_percentColumn();
    Object.defineProperty(exports, "percentColumn", { enumerable: true, get: function() {
      return percentColumn_1.percentColumn;
    } });
    var dateColumn_1 = require_dateColumn();
    Object.defineProperty(exports, "dateColumn", { enumerable: true, get: function() {
      return dateColumn_1.dateColumn;
    } });
    var isoDateColumn_1 = require_isoDateColumn();
    Object.defineProperty(exports, "isoDateColumn", { enumerable: true, get: function() {
      return isoDateColumn_1.isoDateColumn;
    } });
    var keyColumn_1 = require_keyColumn();
    Object.defineProperty(exports, "keyColumn", { enumerable: true, get: function() {
      return keyColumn_1.keyColumn;
    } });
    var AddRows_1 = require_AddRows();
    Object.defineProperty(exports, "createAddRowsComponent", { enumerable: true, get: function() {
      return AddRows_1.createAddRowsComponent;
    } });
    var ContextMenu_1 = require_ContextMenu();
    Object.defineProperty(exports, "createContextMenuComponent", { enumerable: true, get: function() {
      return ContextMenu_1.createContextMenuComponent;
    } });
    Object.defineProperty(exports, "renderContextMenuItem", { enumerable: true, get: function() {
      return ContextMenu_1.defaultRenderItem;
    } });
  }
});
export default require_dist();
//# sourceMappingURL=react-datasheet-grid.js.map
