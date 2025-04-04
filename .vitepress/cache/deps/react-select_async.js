import {
  Select,
  _defineProperty,
  _objectSpread2,
  _objectWithoutProperties,
  _slicedToArray,
  handleInputChange,
  useStateManager
} from "./chunk-DEC57D5V.js";
import "./chunk-FFYAK5JG.js";
import {
  _extends
} from "./chunk-EAXHGRGE.js";
import "./chunk-H5MQ6BND.js";
import {
  require_react_dom
} from "./chunk-EVB5MFRE.js";
import {
  require_react
} from "./chunk-KZRXRAEA.js";
import {
  __toESM
} from "./chunk-OL46QLBJ.js";

// node_modules/react-select/async/dist/react-select-async.esm.js
var React = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/react-select/dist/useAsync-c64f5536.esm.js
var import_react = __toESM(require_react());
var _excluded = ["defaultOptions", "cacheOptions", "loadOptions", "options", "isLoading", "onInputChange", "filterOption"];
function useAsync(_ref) {
  var _ref$defaultOptions = _ref.defaultOptions, propsDefaultOptions = _ref$defaultOptions === void 0 ? false : _ref$defaultOptions, _ref$cacheOptions = _ref.cacheOptions, cacheOptions = _ref$cacheOptions === void 0 ? false : _ref$cacheOptions, propsLoadOptions = _ref.loadOptions;
  _ref.options;
  var _ref$isLoading = _ref.isLoading, propsIsLoading = _ref$isLoading === void 0 ? false : _ref$isLoading, propsOnInputChange = _ref.onInputChange, _ref$filterOption = _ref.filterOption, filterOption = _ref$filterOption === void 0 ? null : _ref$filterOption, restSelectProps = _objectWithoutProperties(_ref, _excluded);
  var propsInputValue = restSelectProps.inputValue;
  var lastRequest = (0, import_react.useRef)(void 0);
  var mounted = (0, import_react.useRef)(false);
  var _useState = (0, import_react.useState)(Array.isArray(propsDefaultOptions) ? propsDefaultOptions : void 0), _useState2 = _slicedToArray(_useState, 2), defaultOptions = _useState2[0], setDefaultOptions = _useState2[1];
  var _useState3 = (0, import_react.useState)(typeof propsInputValue !== "undefined" ? propsInputValue : ""), _useState4 = _slicedToArray(_useState3, 2), stateInputValue = _useState4[0], setStateInputValue = _useState4[1];
  var _useState5 = (0, import_react.useState)(propsDefaultOptions === true), _useState6 = _slicedToArray(_useState5, 2), isLoading = _useState6[0], setIsLoading = _useState6[1];
  var _useState7 = (0, import_react.useState)(void 0), _useState8 = _slicedToArray(_useState7, 2), loadedInputValue = _useState8[0], setLoadedInputValue = _useState8[1];
  var _useState9 = (0, import_react.useState)([]), _useState10 = _slicedToArray(_useState9, 2), loadedOptions = _useState10[0], setLoadedOptions = _useState10[1];
  var _useState11 = (0, import_react.useState)(false), _useState12 = _slicedToArray(_useState11, 2), passEmptyOptions = _useState12[0], setPassEmptyOptions = _useState12[1];
  var _useState13 = (0, import_react.useState)({}), _useState14 = _slicedToArray(_useState13, 2), optionsCache = _useState14[0], setOptionsCache = _useState14[1];
  var _useState15 = (0, import_react.useState)(void 0), _useState16 = _slicedToArray(_useState15, 2), prevDefaultOptions = _useState16[0], setPrevDefaultOptions = _useState16[1];
  var _useState17 = (0, import_react.useState)(void 0), _useState18 = _slicedToArray(_useState17, 2), prevCacheOptions = _useState18[0], setPrevCacheOptions = _useState18[1];
  if (cacheOptions !== prevCacheOptions) {
    setOptionsCache({});
    setPrevCacheOptions(cacheOptions);
  }
  if (propsDefaultOptions !== prevDefaultOptions) {
    setDefaultOptions(Array.isArray(propsDefaultOptions) ? propsDefaultOptions : void 0);
    setPrevDefaultOptions(propsDefaultOptions);
  }
  (0, import_react.useEffect)(function() {
    mounted.current = true;
    return function() {
      mounted.current = false;
    };
  }, []);
  var loadOptions = (0, import_react.useCallback)(function(inputValue, callback) {
    if (!propsLoadOptions) return callback();
    var loader = propsLoadOptions(inputValue, callback);
    if (loader && typeof loader.then === "function") {
      loader.then(callback, function() {
        return callback();
      });
    }
  }, [propsLoadOptions]);
  (0, import_react.useEffect)(function() {
    if (propsDefaultOptions === true) {
      loadOptions(stateInputValue, function(options2) {
        if (!mounted.current) return;
        setDefaultOptions(options2 || []);
        setIsLoading(!!lastRequest.current);
      });
    }
  }, []);
  var onInputChange = (0, import_react.useCallback)(function(newValue, actionMeta) {
    var inputValue = handleInputChange(newValue, actionMeta, propsOnInputChange);
    if (!inputValue) {
      lastRequest.current = void 0;
      setStateInputValue("");
      setLoadedInputValue("");
      setLoadedOptions([]);
      setIsLoading(false);
      setPassEmptyOptions(false);
      return;
    }
    if (cacheOptions && optionsCache[inputValue]) {
      setStateInputValue(inputValue);
      setLoadedInputValue(inputValue);
      setLoadedOptions(optionsCache[inputValue]);
      setIsLoading(false);
      setPassEmptyOptions(false);
    } else {
      var request = lastRequest.current = {};
      setStateInputValue(inputValue);
      setIsLoading(true);
      setPassEmptyOptions(!loadedInputValue);
      loadOptions(inputValue, function(options2) {
        if (!mounted) return;
        if (request !== lastRequest.current) return;
        lastRequest.current = void 0;
        setIsLoading(false);
        setLoadedInputValue(inputValue);
        setLoadedOptions(options2 || []);
        setPassEmptyOptions(false);
        setOptionsCache(options2 ? _objectSpread2(_objectSpread2({}, optionsCache), {}, _defineProperty({}, inputValue, options2)) : optionsCache);
      });
    }
  }, [cacheOptions, loadOptions, loadedInputValue, optionsCache, propsOnInputChange]);
  var options = passEmptyOptions ? [] : stateInputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
  return _objectSpread2(_objectSpread2({}, restSelectProps), {}, {
    options,
    isLoading: isLoading || propsIsLoading,
    onInputChange,
    filterOption
  });
}

// node_modules/react-select/async/dist/react-select-async.esm.js
var import_react_dom = __toESM(require_react_dom());
var AsyncSelect = (0, import_react2.forwardRef)(function(props, ref) {
  var stateManagedProps = useAsync(props);
  var selectProps = useStateManager(stateManagedProps);
  return React.createElement(Select, _extends({
    ref
  }, selectProps));
});
var AsyncSelect$1 = AsyncSelect;
export {
  AsyncSelect$1 as default,
  useAsync
};
//# sourceMappingURL=react-select_async.js.map
