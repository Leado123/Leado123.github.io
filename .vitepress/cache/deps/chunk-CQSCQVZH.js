// node_modules/outvariant/lib/index.mjs
var POSITIONALS_EXP = /(%?)(%([sdjo]))/g;
function serializePositional(positional, flag) {
  switch (flag) {
    case "s":
      return positional;
    case "d":
    case "i":
      return Number(positional);
    case "j":
      return JSON.stringify(positional);
    case "o": {
      if (typeof positional === "string") {
        return positional;
      }
      const json = JSON.stringify(positional);
      if (json === "{}" || json === "[]" || /^\[object .+?\]$/.test(json)) {
        return positional;
      }
      return json;
    }
  }
}
function format(message, ...positionals) {
  if (positionals.length === 0) {
    return message;
  }
  let positionalIndex = 0;
  let formattedMessage = message.replace(
    POSITIONALS_EXP,
    (match, isEscaped, _, flag) => {
      const positional = positionals[positionalIndex];
      const value = serializePositional(positional, flag);
      if (!isEscaped) {
        positionalIndex++;
        return value;
      }
      return match;
    }
  );
  if (positionalIndex < positionals.length) {
    formattedMessage += ` ${positionals.slice(positionalIndex).join(" ")}`;
  }
  formattedMessage = formattedMessage.replace(/%{2,2}/g, "%");
  return formattedMessage;
}
var STACK_FRAMES_TO_IGNORE = 2;
function cleanErrorStack(error) {
  if (!error.stack) {
    return;
  }
  const nextStack = error.stack.split("\n");
  nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
  error.stack = nextStack.join("\n");
}
var InvariantError = class extends Error {
  constructor(message, ...positionals) {
    super(message);
    this.message = message;
    this.name = "Invariant Violation";
    this.message = format(message, ...positionals);
    cleanErrorStack(this);
  }
};
var invariant = (predicate, message, ...positionals) => {
  if (!predicate) {
    throw new InvariantError(message, ...positionals);
  }
};
invariant.as = (ErrorConstructor, predicate, message, ...positionals) => {
  if (!predicate) {
    const isConstructor = ErrorConstructor.prototype.name != null;
    const error = isConstructor ? new ErrorConstructor(format(message, positionals)) : ErrorConstructor(format(message, positionals));
    throw error;
  }
};

// node_modules/@codesandbox/sandpack-client/dist/utils-52664384.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __awaiter(thisArg, _arguments, P, generator) {
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
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var SandpackLogLevel;
(function(SandpackLogLevel2) {
  SandpackLogLevel2[SandpackLogLevel2["None"] = 0] = "None";
  SandpackLogLevel2[SandpackLogLevel2["Error"] = 10] = "Error";
  SandpackLogLevel2[SandpackLogLevel2["Warning"] = 20] = "Warning";
  SandpackLogLevel2[SandpackLogLevel2["Info"] = 30] = "Info";
  SandpackLogLevel2[SandpackLogLevel2["Debug"] = 40] = "Debug";
})(SandpackLogLevel || (SandpackLogLevel = {}));
var createError = function(message) {
  return "[sandpack-client]: ".concat(message);
};
function nullthrows(value, err) {
  if (err === void 0) {
    err = "Value is nullish";
  }
  invariant(value != null, createError(err));
  return value;
}
var DEPENDENCY_ERROR_MESSAGE = '"dependencies" was not specified - provide either a package.json or a "dependencies" value';
var ENTRY_ERROR_MESSAGE = '"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';
function createPackageJSON(dependencies, devDependencies, entry) {
  if (dependencies === void 0) {
    dependencies = {};
  }
  if (devDependencies === void 0) {
    devDependencies = {};
  }
  if (entry === void 0) {
    entry = "/index.js";
  }
  return JSON.stringify({
    name: "sandpack-project",
    main: entry,
    dependencies,
    devDependencies
  }, null, 2);
}
function addPackageJSONIfNeeded(files, dependencies, devDependencies, entry) {
  var _a, _b;
  var normalizedFilesPath = normalizePath(files);
  var packageJsonFile = normalizedFilesPath["/package.json"];
  if (!packageJsonFile) {
    nullthrows(dependencies, DEPENDENCY_ERROR_MESSAGE);
    nullthrows(entry, ENTRY_ERROR_MESSAGE);
    normalizedFilesPath["/package.json"] = {
      code: createPackageJSON(dependencies, devDependencies, entry)
    };
    return normalizedFilesPath;
  }
  if (packageJsonFile) {
    var packageJsonContent = JSON.parse(packageJsonFile.code);
    nullthrows(!(!dependencies && !packageJsonContent.dependencies), ENTRY_ERROR_MESSAGE);
    if (dependencies) {
      packageJsonContent.dependencies = __assign(__assign({}, (_a = packageJsonContent.dependencies) !== null && _a !== void 0 ? _a : {}), dependencies !== null && dependencies !== void 0 ? dependencies : {});
    }
    if (devDependencies) {
      packageJsonContent.devDependencies = __assign(__assign({}, (_b = packageJsonContent.devDependencies) !== null && _b !== void 0 ? _b : {}), devDependencies !== null && devDependencies !== void 0 ? devDependencies : {});
    }
    if (entry) {
      packageJsonContent.main = entry;
    }
    normalizedFilesPath["/package.json"] = {
      code: JSON.stringify(packageJsonContent, null, 2)
    };
  }
  return normalizedFilesPath;
}
function extractErrorDetails(msg) {
  var _a;
  if (msg.title === "SyntaxError") {
    var title = msg.title, path = msg.path, message = msg.message, line = msg.line, column = msg.column;
    return { title, path, message, line, column };
  }
  var relevantStackFrame = getRelevantStackFrame((_a = msg.payload) === null || _a === void 0 ? void 0 : _a.frames);
  if (!relevantStackFrame) {
    return { message: msg.message };
  }
  var errorInCode = getErrorInOriginalCode(relevantStackFrame);
  var errorLocation = getErrorLocation(relevantStackFrame);
  var errorMessage = formatErrorMessage(relevantStackFrame._originalFileName, msg.message, errorLocation, errorInCode);
  return {
    message: errorMessage,
    title: msg.title,
    path: relevantStackFrame._originalFileName,
    line: relevantStackFrame._originalLineNumber,
    column: relevantStackFrame._originalColumnNumber
  };
}
function getRelevantStackFrame(frames) {
  if (!frames) {
    return;
  }
  return frames.find(function(frame) {
    return !!frame._originalFileName;
  });
}
function getErrorLocation(errorFrame) {
  return errorFrame ? " (".concat(errorFrame._originalLineNumber, ":").concat(errorFrame._originalColumnNumber, ")") : "";
}
function getErrorInOriginalCode(errorFrame) {
  var lastScriptLine = errorFrame._originalScriptCode[errorFrame._originalScriptCode.length - 1];
  var numberOfLineNumberCharacters = lastScriptLine.lineNumber.toString().length;
  var leadingCharacterOffset = 2;
  var barSeparatorCharacterOffset = 3;
  var extraLineLeadingSpaces = leadingCharacterOffset + numberOfLineNumberCharacters + barSeparatorCharacterOffset + errorFrame._originalColumnNumber;
  return errorFrame._originalScriptCode.reduce(function(result, scriptLine) {
    var leadingChar = scriptLine.highlight ? ">" : " ";
    var lineNumber = scriptLine.lineNumber.toString().length === numberOfLineNumberCharacters ? "".concat(scriptLine.lineNumber) : " ".concat(scriptLine.lineNumber);
    var extraLine = scriptLine.highlight ? "\n" + " ".repeat(extraLineLeadingSpaces) + "^" : "";
    return result + // accumulator
    "\n" + leadingChar + // > or " "
    " " + lineNumber + // line number on equal number of characters
    " | " + scriptLine.content + // code
    extraLine;
  }, "");
}
function formatErrorMessage(filePath, message, location, errorInCode) {
  return "".concat(filePath, ": ").concat(message).concat(location, "\n").concat(errorInCode);
}
var normalizePath = function(path) {
  if (typeof path === "string") {
    return path.startsWith("/") ? path : "/".concat(path);
  }
  if (Array.isArray(path)) {
    return path.map(function(p) {
      return p.startsWith("/") ? p : "/".concat(p);
    });
  }
  if (typeof path === "object" && path !== null) {
    return Object.entries(path).reduce(function(acc, _a) {
      var key = _a[0], content = _a[1];
      var fileName = key.startsWith("/") ? key : "/".concat(key);
      acc[fileName] = content;
      return acc;
    }, {});
  }
  return null;
};

export {
  invariant,
  __extends,
  __assign,
  __awaiter,
  __generator,
  __spreadArray,
  SandpackLogLevel,
  createError,
  nullthrows,
  createPackageJSON,
  addPackageJSONIfNeeded,
  extractErrorDetails,
  normalizePath
};
//# sourceMappingURL=chunk-CQSCQVZH.js.map
