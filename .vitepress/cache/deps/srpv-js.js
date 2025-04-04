import {
  require_fs
} from "./chunk-4RL6IR4I.js";
import {
  require_http
} from "./chunk-MHJDNTSG.js";
import {
  require_https
} from "./chunk-N6I6HNZ2.js";
import {
  require_url
} from "./chunk-W3TQBGP4.js";
import {
  require_react
} from "./chunk-KZRXRAEA.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-OL46QLBJ.js";

// browser-external:canvas
var require_canvas = __commonJS({
  "browser-external:canvas"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "canvas" has been externalized for browser compatibility. Cannot access "canvas.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// browser-external:zlib
var require_zlib = __commonJS({
  "browser-external:zlib"(exports2, module2) {
    module2.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "zlib" has been externalized for browser compatibility. Cannot access "zlib.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/srpv-js/node_modules/pdfjs-dist/build/pdf.js
var require_pdf = __commonJS({
  "node_modules/srpv-js/node_modules/pdfjs-dist/build/pdf.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define("pdfjs-dist/build/pdf", [], factory);
      else if (typeof exports === "object")
        exports["pdfjs-dist/build/pdf"] = factory();
      else
        root["pdfjs-dist/build/pdf"] = root.pdfjsLib = factory();
    })(exports, function() {
      return (
        /******/
        (() => {
          "use strict";
          var __webpack_modules__ = [
            ,
            /* 1 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.addLinkAttributes = addLinkAttributes;
              exports2.deprecated = deprecated;
              exports2.getFilenameFromUrl = getFilenameFromUrl;
              exports2.getPdfFilenameFromUrl = getPdfFilenameFromUrl;
              exports2.isDataScheme = isDataScheme;
              exports2.isFetchSupported = isFetchSupported;
              exports2.isPdfFile = isPdfFile;
              exports2.isValidFetchUrl = isValidFetchUrl;
              exports2.loadScript = loadScript;
              exports2.StatTimer = exports2.RenderingCancelledException = exports2.PDFDateString = exports2.PageViewport = exports2.LinkTarget = exports2.DOMSVGFactory = exports2.DOMCMapReaderFactory = exports2.DOMCanvasFactory = exports2.DEFAULT_LINK_REL = exports2.BaseCMapReaderFactory = exports2.BaseCanvasFactory = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              const DEFAULT_LINK_REL = "noopener noreferrer nofollow";
              exports2.DEFAULT_LINK_REL = DEFAULT_LINK_REL;
              const SVG_NS = "http://www.w3.org/2000/svg";
              class BaseCanvasFactory {
                constructor() {
                  if (this.constructor === BaseCanvasFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseCanvasFactory.");
                  }
                }
                create(width, height) {
                  (0, _util2.unreachable)("Abstract method `create` called.");
                }
                reset(canvasAndContext, width, height) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }
                  canvasAndContext.canvas.width = width;
                  canvasAndContext.canvas.height = height;
                }
                destroy(canvasAndContext) {
                  if (!canvasAndContext.canvas) {
                    throw new Error("Canvas is not specified");
                  }
                  canvasAndContext.canvas.width = 0;
                  canvasAndContext.canvas.height = 0;
                  canvasAndContext.canvas = null;
                  canvasAndContext.context = null;
                }
              }
              exports2.BaseCanvasFactory = BaseCanvasFactory;
              class DOMCanvasFactory extends BaseCanvasFactory {
                constructor({
                  ownerDocument = globalThis.document
                } = {}) {
                  super();
                  this._document = ownerDocument;
                }
                create(width, height) {
                  if (width <= 0 || height <= 0) {
                    throw new Error("Invalid canvas size");
                  }
                  const canvas = this._document.createElement("canvas");
                  const context = canvas.getContext("2d");
                  canvas.width = width;
                  canvas.height = height;
                  return {
                    canvas,
                    context
                  };
                }
              }
              exports2.DOMCanvasFactory = DOMCanvasFactory;
              class BaseCMapReaderFactory {
                constructor({
                  baseUrl = null,
                  isCompressed = false
                }) {
                  if (this.constructor === BaseCMapReaderFactory) {
                    (0, _util2.unreachable)("Cannot initialize BaseCMapReaderFactory.");
                  }
                  this.baseUrl = baseUrl;
                  this.isCompressed = isCompressed;
                }
                async fetch({
                  name
                }) {
                  if (!this.baseUrl) {
                    throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                  }
                  if (!name) {
                    throw new Error("CMap name must be specified.");
                  }
                  const url = this.baseUrl + name + (this.isCompressed ? ".bcmap" : "");
                  const compressionType = this.isCompressed ? _util2.CMapCompressionType.BINARY : _util2.CMapCompressionType.NONE;
                  return this._fetchData(url, compressionType).catch((reason) => {
                    throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${url}`);
                  });
                }
                _fetchData(url, compressionType) {
                  (0, _util2.unreachable)("Abstract method `_fetchData` called.");
                }
              }
              exports2.BaseCMapReaderFactory = BaseCMapReaderFactory;
              class DOMCMapReaderFactory extends BaseCMapReaderFactory {
                _fetchData(url, compressionType) {
                  if (isFetchSupported() && isValidFetchUrl(url, document.baseURI)) {
                    return fetch(url).then(async (response) => {
                      if (!response.ok) {
                        throw new Error(response.statusText);
                      }
                      let cMapData;
                      if (this.isCompressed) {
                        cMapData = new Uint8Array(await response.arrayBuffer());
                      } else {
                        cMapData = (0, _util2.stringToBytes)(await response.text());
                      }
                      return {
                        cMapData,
                        compressionType
                      };
                    });
                  }
                  return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.open("GET", url, true);
                    if (this.isCompressed) {
                      request.responseType = "arraybuffer";
                    }
                    request.onreadystatechange = () => {
                      if (request.readyState !== XMLHttpRequest.DONE) {
                        return;
                      }
                      if (request.status === 200 || request.status === 0) {
                        let cMapData;
                        if (this.isCompressed && request.response) {
                          cMapData = new Uint8Array(request.response);
                        } else if (!this.isCompressed && request.responseText) {
                          cMapData = (0, _util2.stringToBytes)(request.responseText);
                        }
                        if (cMapData) {
                          resolve({
                            cMapData,
                            compressionType
                          });
                          return;
                        }
                      }
                      reject(new Error(request.statusText));
                    };
                    request.send(null);
                  });
                }
              }
              exports2.DOMCMapReaderFactory = DOMCMapReaderFactory;
              class DOMSVGFactory {
                create(width, height) {
                  (0, _util2.assert)(width > 0 && height > 0, "Invalid SVG dimensions");
                  const svg = document.createElementNS(SVG_NS, "svg:svg");
                  svg.setAttribute("version", "1.1");
                  svg.setAttribute("width", width + "px");
                  svg.setAttribute("height", height + "px");
                  svg.setAttribute("preserveAspectRatio", "none");
                  svg.setAttribute("viewBox", "0 0 " + width + " " + height);
                  return svg;
                }
                createElement(type) {
                  (0, _util2.assert)(typeof type === "string", "Invalid SVG element type");
                  return document.createElementNS(SVG_NS, type);
                }
              }
              exports2.DOMSVGFactory = DOMSVGFactory;
              class PageViewport {
                constructor({
                  viewBox,
                  scale,
                  rotation,
                  offsetX = 0,
                  offsetY = 0,
                  dontFlip = false
                }) {
                  this.viewBox = viewBox;
                  this.scale = scale;
                  this.rotation = rotation;
                  this.offsetX = offsetX;
                  this.offsetY = offsetY;
                  const centerX = (viewBox[2] + viewBox[0]) / 2;
                  const centerY = (viewBox[3] + viewBox[1]) / 2;
                  let rotateA, rotateB, rotateC, rotateD;
                  rotation %= 360;
                  if (rotation < 0) {
                    rotation += 360;
                  }
                  switch (rotation) {
                    case 180:
                      rotateA = -1;
                      rotateB = 0;
                      rotateC = 0;
                      rotateD = 1;
                      break;
                    case 90:
                      rotateA = 0;
                      rotateB = 1;
                      rotateC = 1;
                      rotateD = 0;
                      break;
                    case 270:
                      rotateA = 0;
                      rotateB = -1;
                      rotateC = -1;
                      rotateD = 0;
                      break;
                    case 0:
                      rotateA = 1;
                      rotateB = 0;
                      rotateC = 0;
                      rotateD = -1;
                      break;
                    default:
                      throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
                  }
                  if (dontFlip) {
                    rotateC = -rotateC;
                    rotateD = -rotateD;
                  }
                  let offsetCanvasX, offsetCanvasY;
                  let width, height;
                  if (rotateA === 0) {
                    offsetCanvasX = Math.abs(centerY - viewBox[1]) * scale + offsetX;
                    offsetCanvasY = Math.abs(centerX - viewBox[0]) * scale + offsetY;
                    width = Math.abs(viewBox[3] - viewBox[1]) * scale;
                    height = Math.abs(viewBox[2] - viewBox[0]) * scale;
                  } else {
                    offsetCanvasX = Math.abs(centerX - viewBox[0]) * scale + offsetX;
                    offsetCanvasY = Math.abs(centerY - viewBox[1]) * scale + offsetY;
                    width = Math.abs(viewBox[2] - viewBox[0]) * scale;
                    height = Math.abs(viewBox[3] - viewBox[1]) * scale;
                  }
                  this.transform = [rotateA * scale, rotateB * scale, rotateC * scale, rotateD * scale, offsetCanvasX - rotateA * scale * centerX - rotateC * scale * centerY, offsetCanvasY - rotateB * scale * centerX - rotateD * scale * centerY];
                  this.width = width;
                  this.height = height;
                }
                clone({
                  scale = this.scale,
                  rotation = this.rotation,
                  offsetX = this.offsetX,
                  offsetY = this.offsetY,
                  dontFlip = false
                } = {}) {
                  return new PageViewport({
                    viewBox: this.viewBox.slice(),
                    scale,
                    rotation,
                    offsetX,
                    offsetY,
                    dontFlip
                  });
                }
                convertToViewportPoint(x, y) {
                  return _util2.Util.applyTransform([x, y], this.transform);
                }
                convertToViewportRectangle(rect) {
                  const topLeft = _util2.Util.applyTransform([rect[0], rect[1]], this.transform);
                  const bottomRight = _util2.Util.applyTransform([rect[2], rect[3]], this.transform);
                  return [topLeft[0], topLeft[1], bottomRight[0], bottomRight[1]];
                }
                convertToPdfPoint(x, y) {
                  return _util2.Util.applyInverseTransform([x, y], this.transform);
                }
              }
              exports2.PageViewport = PageViewport;
              class RenderingCancelledException extends _util2.BaseException {
                constructor(msg, type) {
                  super(msg);
                  this.type = type;
                }
              }
              exports2.RenderingCancelledException = RenderingCancelledException;
              const LinkTarget = {
                NONE: 0,
                SELF: 1,
                BLANK: 2,
                PARENT: 3,
                TOP: 4
              };
              exports2.LinkTarget = LinkTarget;
              function addLinkAttributes(link, {
                url,
                target,
                rel,
                enabled = true
              } = {}) {
                (0, _util2.assert)(url && typeof url === "string", 'addLinkAttributes: A valid "url" parameter must provided.');
                const urlNullRemoved = (0, _util2.removeNullCharacters)(url);
                if (enabled) {
                  link.href = link.title = urlNullRemoved;
                } else {
                  link.href = "";
                  link.title = `Disabled: ${urlNullRemoved}`;
                  link.onclick = () => {
                    return false;
                  };
                }
                let targetStr = "";
                switch (target) {
                  case LinkTarget.NONE:
                    break;
                  case LinkTarget.SELF:
                    targetStr = "_self";
                    break;
                  case LinkTarget.BLANK:
                    targetStr = "_blank";
                    break;
                  case LinkTarget.PARENT:
                    targetStr = "_parent";
                    break;
                  case LinkTarget.TOP:
                    targetStr = "_top";
                    break;
                }
                link.target = targetStr;
                link.rel = typeof rel === "string" ? rel : DEFAULT_LINK_REL;
              }
              function isDataScheme(url) {
                const ii = url.length;
                let i2 = 0;
                while (i2 < ii && url[i2].trim() === "") {
                  i2++;
                }
                return url.substring(i2, i2 + 5).toLowerCase() === "data:";
              }
              function isPdfFile(filename) {
                return typeof filename === "string" && /\.pdf$/i.test(filename);
              }
              function getFilenameFromUrl(url) {
                const anchor = url.indexOf("#");
                const query = url.indexOf("?");
                const end = Math.min(anchor > 0 ? anchor : url.length, query > 0 ? query : url.length);
                return url.substring(url.lastIndexOf("/", end) + 1, end);
              }
              function getPdfFilenameFromUrl(url, defaultFilename = "document.pdf") {
                if (typeof url !== "string") {
                  return defaultFilename;
                }
                if (isDataScheme(url)) {
                  (0, _util2.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.');
                  return defaultFilename;
                }
                const reURI = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
                const reFilename = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
                const splitURI = reURI.exec(url);
                let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
                if (suggestedFilename) {
                  suggestedFilename = suggestedFilename[0];
                  if (suggestedFilename.includes("%")) {
                    try {
                      suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
                    } catch (ex) {
                    }
                  }
                }
                return suggestedFilename || defaultFilename;
              }
              class StatTimer {
                constructor() {
                  this.started = /* @__PURE__ */ Object.create(null);
                  this.times = [];
                }
                time(name) {
                  if (name in this.started) {
                    (0, _util2.warn)(`Timer is already running for ${name}`);
                  }
                  this.started[name] = Date.now();
                }
                timeEnd(name) {
                  if (!(name in this.started)) {
                    (0, _util2.warn)(`Timer has not been started for ${name}`);
                  }
                  this.times.push({
                    name,
                    start: this.started[name],
                    end: Date.now()
                  });
                  delete this.started[name];
                }
                toString() {
                  const outBuf = [];
                  let longest = 0;
                  for (const time of this.times) {
                    const name = time.name;
                    if (name.length > longest) {
                      longest = name.length;
                    }
                  }
                  for (const time of this.times) {
                    const duration = time.end - time.start;
                    outBuf.push(`${time.name.padEnd(longest)} ${duration}ms
`);
                  }
                  return outBuf.join("");
                }
              }
              exports2.StatTimer = StatTimer;
              function isFetchSupported() {
                return typeof fetch !== "undefined" && typeof Response !== "undefined" && "body" in Response.prototype && typeof ReadableStream !== "undefined";
              }
              function isValidFetchUrl(url, baseUrl) {
                try {
                  const {
                    protocol
                  } = baseUrl ? new URL(url, baseUrl) : new URL(url);
                  return protocol === "http:" || protocol === "https:";
                } catch (ex) {
                  return false;
                }
              }
              function loadScript(src, removeScriptElement = false) {
                return new Promise((resolve, reject) => {
                  const script = document.createElement("script");
                  script.src = src;
                  script.onload = function(evt) {
                    if (removeScriptElement) {
                      script.remove();
                    }
                    resolve(evt);
                  };
                  script.onerror = function() {
                    reject(new Error(`Cannot load script at: ${script.src}`));
                  };
                  (document.head || document.documentElement).appendChild(script);
                });
              }
              function deprecated(details) {
                console.log("Deprecated API usage: " + details);
              }
              let pdfDateStringRegex;
              class PDFDateString {
                static toDateObject(input) {
                  if (!input || !(0, _util2.isString)(input)) {
                    return null;
                  }
                  if (!pdfDateStringRegex) {
                    pdfDateStringRegex = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
                  }
                  const matches = pdfDateStringRegex.exec(input);
                  if (!matches) {
                    return null;
                  }
                  const year = parseInt(matches[1], 10);
                  let month = parseInt(matches[2], 10);
                  month = month >= 1 && month <= 12 ? month - 1 : 0;
                  let day = parseInt(matches[3], 10);
                  day = day >= 1 && day <= 31 ? day : 1;
                  let hour = parseInt(matches[4], 10);
                  hour = hour >= 0 && hour <= 23 ? hour : 0;
                  let minute = parseInt(matches[5], 10);
                  minute = minute >= 0 && minute <= 59 ? minute : 0;
                  let second = parseInt(matches[6], 10);
                  second = second >= 0 && second <= 59 ? second : 0;
                  const universalTimeRelation = matches[7] || "Z";
                  let offsetHour = parseInt(matches[8], 10);
                  offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
                  let offsetMinute = parseInt(matches[9], 10) || 0;
                  offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
                  if (universalTimeRelation === "-") {
                    hour += offsetHour;
                    minute += offsetMinute;
                  } else if (universalTimeRelation === "+") {
                    hour -= offsetHour;
                    minute -= offsetMinute;
                  }
                  return new Date(Date.UTC(year, month, day, hour, minute, second));
                }
              }
              exports2.PDFDateString = PDFDateString;
            },
            /* 2 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.arrayByteLength = arrayByteLength;
              exports2.arraysToBytes = arraysToBytes;
              exports2.assert = assert;
              exports2.bytesToString = bytesToString;
              exports2.createObjectURL = createObjectURL;
              exports2.createPromiseCapability = createPromiseCapability;
              exports2.createValidAbsoluteUrl = createValidAbsoluteUrl;
              exports2.escapeString = escapeString;
              exports2.getModificationDate = getModificationDate;
              exports2.getVerbosityLevel = getVerbosityLevel;
              exports2.info = info;
              exports2.isArrayBuffer = isArrayBuffer;
              exports2.isArrayEqual = isArrayEqual;
              exports2.isAscii = isAscii;
              exports2.isBool = isBool;
              exports2.isNum = isNum;
              exports2.isSameOrigin = isSameOrigin;
              exports2.isString = isString;
              exports2.objectFromMap = objectFromMap;
              exports2.objectSize = objectSize;
              exports2.removeNullCharacters = removeNullCharacters;
              exports2.setVerbosityLevel = setVerbosityLevel;
              exports2.shadow = shadow;
              exports2.string32 = string32;
              exports2.stringToBytes = stringToBytes;
              exports2.stringToPDFString = stringToPDFString;
              exports2.stringToUTF16BEString = stringToUTF16BEString;
              exports2.stringToUTF8String = stringToUTF8String;
              exports2.unreachable = unreachable;
              exports2.utf8StringToString = utf8StringToString;
              exports2.warn = warn;
              exports2.VerbosityLevel = exports2.Util = exports2.UNSUPPORTED_FEATURES = exports2.UnknownErrorException = exports2.UnexpectedResponseException = exports2.TextRenderingMode = exports2.StreamType = exports2.PermissionFlag = exports2.PasswordResponses = exports2.PasswordException = exports2.PageActionEventType = exports2.OPS = exports2.MissingPDFException = exports2.IsLittleEndianCached = exports2.IsEvalSupportedCached = exports2.InvalidPDFException = exports2.ImageKind = exports2.IDENTITY_MATRIX = exports2.FormatError = exports2.FontType = exports2.FONT_IDENTITY_MATRIX = exports2.DocumentActionEventType = exports2.CMapCompressionType = exports2.BaseException = exports2.AnnotationType = exports2.AnnotationStateModelType = exports2.AnnotationReviewState = exports2.AnnotationReplyType = exports2.AnnotationMarkedState = exports2.AnnotationFlag = exports2.AnnotationFieldFlag = exports2.AnnotationBorderStyleType = exports2.AnnotationActionEventType = exports2.AbortException = void 0;
              __w_pdfjs_require__2(3);
              const IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
              exports2.IDENTITY_MATRIX = IDENTITY_MATRIX;
              const FONT_IDENTITY_MATRIX = [1e-3, 0, 0, 1e-3, 0, 0];
              exports2.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
              const PermissionFlag = {
                PRINT: 4,
                MODIFY_CONTENTS: 8,
                COPY: 16,
                MODIFY_ANNOTATIONS: 32,
                FILL_INTERACTIVE_FORMS: 256,
                COPY_FOR_ACCESSIBILITY: 512,
                ASSEMBLE: 1024,
                PRINT_HIGH_QUALITY: 2048
              };
              exports2.PermissionFlag = PermissionFlag;
              const TextRenderingMode = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
              };
              exports2.TextRenderingMode = TextRenderingMode;
              const ImageKind = {
                GRAYSCALE_1BPP: 1,
                RGB_24BPP: 2,
                RGBA_32BPP: 3
              };
              exports2.ImageKind = ImageKind;
              const AnnotationType = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
              };
              exports2.AnnotationType = AnnotationType;
              const AnnotationStateModelType = {
                MARKED: "Marked",
                REVIEW: "Review"
              };
              exports2.AnnotationStateModelType = AnnotationStateModelType;
              const AnnotationMarkedState = {
                MARKED: "Marked",
                UNMARKED: "Unmarked"
              };
              exports2.AnnotationMarkedState = AnnotationMarkedState;
              const AnnotationReviewState = {
                ACCEPTED: "Accepted",
                REJECTED: "Rejected",
                CANCELLED: "Cancelled",
                COMPLETED: "Completed",
                NONE: "None"
              };
              exports2.AnnotationReviewState = AnnotationReviewState;
              const AnnotationReplyType = {
                GROUP: "Group",
                REPLY: "R"
              };
              exports2.AnnotationReplyType = AnnotationReplyType;
              const AnnotationFlag = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
              };
              exports2.AnnotationFlag = AnnotationFlag;
              const AnnotationFieldFlag = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
              };
              exports2.AnnotationFieldFlag = AnnotationFieldFlag;
              const AnnotationBorderStyleType = {
                SOLID: 1,
                DASHED: 2,
                BEVELED: 3,
                INSET: 4,
                UNDERLINE: 5
              };
              exports2.AnnotationBorderStyleType = AnnotationBorderStyleType;
              const AnnotationActionEventType = {
                E: "Mouse Enter",
                X: "Mouse Exit",
                D: "Mouse Down",
                U: "Mouse Up",
                Fo: "Focus",
                Bl: "Blur",
                PO: "PageOpen",
                PC: "PageClose",
                PV: "PageVisible",
                PI: "PageInvisible",
                K: "Keystroke",
                F: "Format",
                V: "Validate",
                C: "Calculate"
              };
              exports2.AnnotationActionEventType = AnnotationActionEventType;
              const DocumentActionEventType = {
                WC: "WillClose",
                WS: "WillSave",
                DS: "DidSave",
                WP: "WillPrint",
                DP: "DidPrint"
              };
              exports2.DocumentActionEventType = DocumentActionEventType;
              const PageActionEventType = {
                O: "PageOpen",
                C: "PageClose"
              };
              exports2.PageActionEventType = PageActionEventType;
              const StreamType = {
                UNKNOWN: "UNKNOWN",
                FLATE: "FLATE",
                LZW: "LZW",
                DCT: "DCT",
                JPX: "JPX",
                JBIG: "JBIG",
                A85: "A85",
                AHX: "AHX",
                CCF: "CCF",
                RLX: "RLX"
              };
              exports2.StreamType = StreamType;
              const FontType = {
                UNKNOWN: "UNKNOWN",
                TYPE1: "TYPE1",
                TYPE1C: "TYPE1C",
                CIDFONTTYPE0: "CIDFONTTYPE0",
                CIDFONTTYPE0C: "CIDFONTTYPE0C",
                TRUETYPE: "TRUETYPE",
                CIDFONTTYPE2: "CIDFONTTYPE2",
                TYPE3: "TYPE3",
                OPENTYPE: "OPENTYPE",
                TYPE0: "TYPE0",
                MMTYPE1: "MMTYPE1"
              };
              exports2.FontType = FontType;
              const VerbosityLevel = {
                ERRORS: 0,
                WARNINGS: 1,
                INFOS: 5
              };
              exports2.VerbosityLevel = VerbosityLevel;
              const CMapCompressionType = {
                NONE: 0,
                BINARY: 1,
                STREAM: 2
              };
              exports2.CMapCompressionType = CMapCompressionType;
              const OPS = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotations: 78,
                endAnnotations: 79,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintJpegXObject: 82,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
              };
              exports2.OPS = OPS;
              const UNSUPPORTED_FEATURES = {
                unknown: "unknown",
                forms: "forms",
                javaScript: "javaScript",
                signatures: "signatures",
                smask: "smask",
                shadingPattern: "shadingPattern",
                font: "font",
                errorTilingPattern: "errorTilingPattern",
                errorExtGState: "errorExtGState",
                errorXObject: "errorXObject",
                errorFontLoadType3: "errorFontLoadType3",
                errorFontState: "errorFontState",
                errorFontMissing: "errorFontMissing",
                errorFontTranslate: "errorFontTranslate",
                errorColorSpace: "errorColorSpace",
                errorOperatorList: "errorOperatorList",
                errorFontToUnicode: "errorFontToUnicode",
                errorFontLoadNative: "errorFontLoadNative",
                errorFontBuildPath: "errorFontBuildPath",
                errorFontGetPath: "errorFontGetPath",
                errorMarkedContent: "errorMarkedContent"
              };
              exports2.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
              const PasswordResponses = {
                NEED_PASSWORD: 1,
                INCORRECT_PASSWORD: 2
              };
              exports2.PasswordResponses = PasswordResponses;
              let verbosity = VerbosityLevel.WARNINGS;
              function setVerbosityLevel(level) {
                if (Number.isInteger(level)) {
                  verbosity = level;
                }
              }
              function getVerbosityLevel() {
                return verbosity;
              }
              function info(msg) {
                if (verbosity >= VerbosityLevel.INFOS) {
                  console.log(`Info: ${msg}`);
                }
              }
              function warn(msg) {
                if (verbosity >= VerbosityLevel.WARNINGS) {
                  console.log(`Warning: ${msg}`);
                }
              }
              function unreachable(msg) {
                throw new Error(msg);
              }
              function assert(cond, msg) {
                if (!cond) {
                  unreachable(msg);
                }
              }
              function isSameOrigin(baseUrl, otherUrl) {
                let base;
                try {
                  base = new URL(baseUrl);
                  if (!base.origin || base.origin === "null") {
                    return false;
                  }
                } catch (e2) {
                  return false;
                }
                const other = new URL(otherUrl, base);
                return base.origin === other.origin;
              }
              function _isValidProtocol(url) {
                if (!url) {
                  return false;
                }
                switch (url.protocol) {
                  case "http:":
                  case "https:":
                  case "ftp:":
                  case "mailto:":
                  case "tel:":
                    return true;
                  default:
                    return false;
                }
              }
              function createValidAbsoluteUrl(url, baseUrl) {
                if (!url) {
                  return null;
                }
                try {
                  const absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
                  if (_isValidProtocol(absoluteUrl)) {
                    return absoluteUrl;
                  }
                } catch (ex) {
                }
                return null;
              }
              function shadow(obj, prop, value) {
                Object.defineProperty(obj, prop, {
                  value,
                  enumerable: true,
                  configurable: true,
                  writable: false
                });
                return value;
              }
              const BaseException = function BaseExceptionClosure() {
                function BaseException2(message) {
                  if (this.constructor === BaseException2) {
                    unreachable("Cannot initialize BaseException.");
                  }
                  this.message = message;
                  this.name = this.constructor.name;
                }
                BaseException2.prototype = new Error();
                BaseException2.constructor = BaseException2;
                return BaseException2;
              }();
              exports2.BaseException = BaseException;
              class PasswordException extends BaseException {
                constructor(msg, code) {
                  super(msg);
                  this.code = code;
                }
              }
              exports2.PasswordException = PasswordException;
              class UnknownErrorException extends BaseException {
                constructor(msg, details) {
                  super(msg);
                  this.details = details;
                }
              }
              exports2.UnknownErrorException = UnknownErrorException;
              class InvalidPDFException extends BaseException {
              }
              exports2.InvalidPDFException = InvalidPDFException;
              class MissingPDFException extends BaseException {
              }
              exports2.MissingPDFException = MissingPDFException;
              class UnexpectedResponseException extends BaseException {
                constructor(msg, status) {
                  super(msg);
                  this.status = status;
                }
              }
              exports2.UnexpectedResponseException = UnexpectedResponseException;
              class FormatError extends BaseException {
              }
              exports2.FormatError = FormatError;
              class AbortException extends BaseException {
              }
              exports2.AbortException = AbortException;
              const NullCharactersRegExp = /\x00/g;
              function removeNullCharacters(str) {
                if (typeof str !== "string") {
                  warn("The argument for removeNullCharacters must be a string.");
                  return str;
                }
                return str.replace(NullCharactersRegExp, "");
              }
              function bytesToString(bytes) {
                assert(bytes !== null && typeof bytes === "object" && bytes.length !== void 0, "Invalid argument for bytesToString");
                const length = bytes.length;
                const MAX_ARGUMENT_COUNT = 8192;
                if (length < MAX_ARGUMENT_COUNT) {
                  return String.fromCharCode.apply(null, bytes);
                }
                const strBuf = [];
                for (let i2 = 0; i2 < length; i2 += MAX_ARGUMENT_COUNT) {
                  const chunkEnd = Math.min(i2 + MAX_ARGUMENT_COUNT, length);
                  const chunk = bytes.subarray(i2, chunkEnd);
                  strBuf.push(String.fromCharCode.apply(null, chunk));
                }
                return strBuf.join("");
              }
              function stringToBytes(str) {
                assert(typeof str === "string", "Invalid argument for stringToBytes");
                const length = str.length;
                const bytes = new Uint8Array(length);
                for (let i2 = 0; i2 < length; ++i2) {
                  bytes[i2] = str.charCodeAt(i2) & 255;
                }
                return bytes;
              }
              function arrayByteLength(arr) {
                if (arr.length !== void 0) {
                  return arr.length;
                }
                assert(arr.byteLength !== void 0, "arrayByteLength - invalid argument.");
                return arr.byteLength;
              }
              function arraysToBytes(arr) {
                const length = arr.length;
                if (length === 1 && arr[0] instanceof Uint8Array) {
                  return arr[0];
                }
                let resultLength = 0;
                for (let i2 = 0; i2 < length; i2++) {
                  resultLength += arrayByteLength(arr[i2]);
                }
                let pos = 0;
                const data = new Uint8Array(resultLength);
                for (let i2 = 0; i2 < length; i2++) {
                  let item = arr[i2];
                  if (!(item instanceof Uint8Array)) {
                    if (typeof item === "string") {
                      item = stringToBytes(item);
                    } else {
                      item = new Uint8Array(item);
                    }
                  }
                  const itemLength = item.byteLength;
                  data.set(item, pos);
                  pos += itemLength;
                }
                return data;
              }
              function string32(value) {
                return String.fromCharCode(value >> 24 & 255, value >> 16 & 255, value >> 8 & 255, value & 255);
              }
              function objectSize(obj) {
                return Object.keys(obj).length;
              }
              function objectFromMap(map) {
                const obj = /* @__PURE__ */ Object.create(null);
                for (const [key, value] of map) {
                  obj[key] = value;
                }
                return obj;
              }
              function isLittleEndian() {
                const buffer8 = new Uint8Array(4);
                buffer8[0] = 1;
                const view32 = new Uint32Array(buffer8.buffer, 0, 1);
                return view32[0] === 1;
              }
              const IsLittleEndianCached = {
                get value() {
                  return shadow(this, "value", isLittleEndian());
                }
              };
              exports2.IsLittleEndianCached = IsLittleEndianCached;
              function isEvalSupported() {
                try {
                  new Function("");
                  return true;
                } catch (e2) {
                  return false;
                }
              }
              const IsEvalSupportedCached = {
                get value() {
                  return shadow(this, "value", isEvalSupported());
                }
              };
              exports2.IsEvalSupportedCached = IsEvalSupportedCached;
              const hexNumbers = [...Array(256).keys()].map((n2) => n2.toString(16).padStart(2, "0"));
              class Util {
                static makeHexColor(r2, g, b) {
                  return `#${hexNumbers[r2]}${hexNumbers[g]}${hexNumbers[b]}`;
                }
                static transform(m1, m2) {
                  return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
                }
                static applyTransform(p2, m2) {
                  const xt = p2[0] * m2[0] + p2[1] * m2[2] + m2[4];
                  const yt = p2[0] * m2[1] + p2[1] * m2[3] + m2[5];
                  return [xt, yt];
                }
                static applyInverseTransform(p2, m2) {
                  const d2 = m2[0] * m2[3] - m2[1] * m2[2];
                  const xt = (p2[0] * m2[3] - p2[1] * m2[2] + m2[2] * m2[5] - m2[4] * m2[3]) / d2;
                  const yt = (-p2[0] * m2[1] + p2[1] * m2[0] + m2[4] * m2[1] - m2[5] * m2[0]) / d2;
                  return [xt, yt];
                }
                static getAxialAlignedBoundingBox(r2, m2) {
                  const p1 = Util.applyTransform(r2, m2);
                  const p2 = Util.applyTransform(r2.slice(2, 4), m2);
                  const p3 = Util.applyTransform([r2[0], r2[3]], m2);
                  const p4 = Util.applyTransform([r2[2], r2[1]], m2);
                  return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
                }
                static inverseTransform(m2) {
                  const d2 = m2[0] * m2[3] - m2[1] * m2[2];
                  return [m2[3] / d2, -m2[1] / d2, -m2[2] / d2, m2[0] / d2, (m2[2] * m2[5] - m2[4] * m2[3]) / d2, (m2[4] * m2[1] - m2[5] * m2[0]) / d2];
                }
                static apply3dTransform(m2, v) {
                  return [m2[0] * v[0] + m2[1] * v[1] + m2[2] * v[2], m2[3] * v[0] + m2[4] * v[1] + m2[5] * v[2], m2[6] * v[0] + m2[7] * v[1] + m2[8] * v[2]];
                }
                static singularValueDecompose2dScale(m2) {
                  const transpose = [m2[0], m2[2], m2[1], m2[3]];
                  const a2 = m2[0] * transpose[0] + m2[1] * transpose[2];
                  const b = m2[0] * transpose[1] + m2[1] * transpose[3];
                  const c2 = m2[2] * transpose[0] + m2[3] * transpose[2];
                  const d2 = m2[2] * transpose[1] + m2[3] * transpose[3];
                  const first = (a2 + d2) / 2;
                  const second = Math.sqrt((a2 + d2) ** 2 - 4 * (a2 * d2 - c2 * b)) / 2;
                  const sx = first + second || 1;
                  const sy = first - second || 1;
                  return [Math.sqrt(sx), Math.sqrt(sy)];
                }
                static normalizeRect(rect) {
                  const r2 = rect.slice(0);
                  if (rect[0] > rect[2]) {
                    r2[0] = rect[2];
                    r2[2] = rect[0];
                  }
                  if (rect[1] > rect[3]) {
                    r2[1] = rect[3];
                    r2[3] = rect[1];
                  }
                  return r2;
                }
                static intersect(rect1, rect2) {
                  function compare(a2, b) {
                    return a2 - b;
                  }
                  const orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare);
                  const orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare);
                  const result = [];
                  rect1 = Util.normalizeRect(rect1);
                  rect2 = Util.normalizeRect(rect2);
                  if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
                    result[0] = orderedX[1];
                    result[2] = orderedX[2];
                  } else {
                    return null;
                  }
                  if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
                    result[1] = orderedY[1];
                    result[3] = orderedY[2];
                  } else {
                    return null;
                  }
                  return result;
                }
              }
              exports2.Util = Util;
              const PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
              function stringToPDFString(str) {
                const length = str.length, strBuf = [];
                if (str[0] === "þ" && str[1] === "ÿ") {
                  for (let i2 = 2; i2 < length; i2 += 2) {
                    strBuf.push(String.fromCharCode(str.charCodeAt(i2) << 8 | str.charCodeAt(i2 + 1)));
                  }
                } else if (str[0] === "ÿ" && str[1] === "þ") {
                  for (let i2 = 2; i2 < length; i2 += 2) {
                    strBuf.push(String.fromCharCode(str.charCodeAt(i2 + 1) << 8 | str.charCodeAt(i2)));
                  }
                } else {
                  for (let i2 = 0; i2 < length; ++i2) {
                    const code = PDFStringTranslateTable[str.charCodeAt(i2)];
                    strBuf.push(code ? String.fromCharCode(code) : str.charAt(i2));
                  }
                }
                return strBuf.join("");
              }
              function escapeString(str) {
                return str.replace(/([()\\\n\r])/g, (match) => {
                  if (match === "\n") {
                    return "\\n";
                  } else if (match === "\r") {
                    return "\\r";
                  }
                  return `\\${match}`;
                });
              }
              function isAscii(str) {
                return /^[\x00-\x7F]*$/.test(str);
              }
              function stringToUTF16BEString(str) {
                const buf = ["þÿ"];
                for (let i2 = 0, ii = str.length; i2 < ii; i2++) {
                  const char = str.charCodeAt(i2);
                  buf.push(String.fromCharCode(char >> 8 & 255), String.fromCharCode(char & 255));
                }
                return buf.join("");
              }
              function stringToUTF8String(str) {
                return decodeURIComponent(escape(str));
              }
              function utf8StringToString(str) {
                return unescape(encodeURIComponent(str));
              }
              function isBool(v) {
                return typeof v === "boolean";
              }
              function isNum(v) {
                return typeof v === "number";
              }
              function isString(v) {
                return typeof v === "string";
              }
              function isArrayBuffer(v) {
                return typeof v === "object" && v !== null && v.byteLength !== void 0;
              }
              function isArrayEqual(arr1, arr2) {
                if (arr1.length !== arr2.length) {
                  return false;
                }
                for (let i2 = 0, ii = arr1.length; i2 < ii; i2++) {
                  if (arr1[i2] !== arr2[i2]) {
                    return false;
                  }
                }
                return true;
              }
              function getModificationDate(date = /* @__PURE__ */ new Date()) {
                const buffer = [date.getUTCFullYear().toString(), (date.getUTCMonth() + 1).toString().padStart(2, "0"), date.getUTCDate().toString().padStart(2, "0"), date.getUTCHours().toString().padStart(2, "0"), date.getUTCMinutes().toString().padStart(2, "0"), date.getUTCSeconds().toString().padStart(2, "0")];
                return buffer.join("");
              }
              function createPromiseCapability() {
                const capability = /* @__PURE__ */ Object.create(null);
                let isSettled = false;
                Object.defineProperty(capability, "settled", {
                  get() {
                    return isSettled;
                  }
                });
                capability.promise = new Promise(function(resolve, reject) {
                  capability.resolve = function(data) {
                    isSettled = true;
                    resolve(data);
                  };
                  capability.reject = function(reason) {
                    isSettled = true;
                    reject(reason);
                  };
                });
                return capability;
              }
              function createObjectURL(data, contentType = "", forceDataSchema = false) {
                if (URL.createObjectURL && !forceDataSchema) {
                  return URL.createObjectURL(new Blob([data], {
                    type: contentType
                  }));
                }
                const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                let buffer = `data:${contentType};base64,`;
                for (let i2 = 0, ii = data.length; i2 < ii; i2 += 3) {
                  const b1 = data[i2] & 255;
                  const b2 = data[i2 + 1] & 255;
                  const b3 = data[i2 + 2] & 255;
                  const d1 = b1 >> 2, d2 = (b1 & 3) << 4 | b2 >> 4;
                  const d3 = i2 + 1 < ii ? (b2 & 15) << 2 | b3 >> 6 : 64;
                  const d4 = i2 + 2 < ii ? b3 & 63 : 64;
                  buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
                }
                return buffer;
              }
            },
            /* 3 */
            /***/
            (__unused_webpack_module2, __unused_webpack_exports, __w_pdfjs_require__2) => {
              var _is_node2 = __w_pdfjs_require__2(4);
              ;
            },
            /* 4 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.isNodeJS = void 0;
              const isNodeJS = typeof process === "object" && process + "" === "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
              exports2.isNodeJS = isNodeJS;
            },
            /* 5 */
            /***/
            (__unused_webpack_module, exports, __w_pdfjs_require__) => {
              Object.defineProperty(exports, "__esModule", {
                value: true
              });
              exports.getDocument = getDocument;
              exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
              exports.version = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultCMapReaderFactory = exports.DefaultCanvasFactory = exports.build = void 0;
              var _util = __w_pdfjs_require__(2);
              var _display_utils = __w_pdfjs_require__(1);
              var _font_loader = __w_pdfjs_require__(6);
              var _node_utils = __w_pdfjs_require__(7);
              var _annotation_storage = __w_pdfjs_require__(8);
              var _api_compatibility = __w_pdfjs_require__(9);
              var _canvas = __w_pdfjs_require__(10);
              var _worker_options = __w_pdfjs_require__(12);
              var _is_node = __w_pdfjs_require__(4);
              var _message_handler = __w_pdfjs_require__(13);
              var _metadata = __w_pdfjs_require__(14);
              var _optional_content_config = __w_pdfjs_require__(15);
              var _transport_stream = __w_pdfjs_require__(16);
              const DEFAULT_RANGE_CHUNK_SIZE = 65536;
              const RENDERING_CANCELLED_TIMEOUT = 100;
              const DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
              exports.DefaultCanvasFactory = DefaultCanvasFactory;
              const DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
              exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
              let createPDFNetworkStream;
              function setPDFNetworkStreamFactory(pdfNetworkStreamFactory) {
                createPDFNetworkStream = pdfNetworkStreamFactory;
              }
              function getDocument(src) {
                const task = new PDFDocumentLoadingTask();
                let source;
                if (typeof src === "string" || src instanceof URL) {
                  source = {
                    url: src
                  };
                } else if ((0, _util.isArrayBuffer)(src)) {
                  source = {
                    data: src
                  };
                } else if (src instanceof PDFDataRangeTransport) {
                  source = {
                    range: src
                  };
                } else {
                  if (typeof src !== "object") {
                    throw new Error("Invalid parameter in getDocument, need either string, URL, Uint8Array, or parameter object.");
                  }
                  if (!src.url && !src.data && !src.range) {
                    throw new Error("Invalid parameter object: need either .data, .range or .url");
                  }
                  source = src;
                }
                const params = /* @__PURE__ */ Object.create(null);
                let rangeTransport = null, worker2 = null;
                for (const key in source) {
                  const value = source[key];
                  switch (key) {
                    case "url":
                      if (typeof window !== "undefined") {
                        try {
                          params[key] = new URL(value, window.location).href;
                          continue;
                        } catch (ex) {
                          (0, _util.warn)(`Cannot create valid URL: "${ex}".`);
                        }
                      } else if (typeof value === "string" || value instanceof URL) {
                        params[key] = value.toString();
                        continue;
                      }
                      throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
                    case "range":
                      rangeTransport = value;
                      continue;
                    case "worker":
                      worker2 = value;
                      continue;
                    case "data":
                      if (_is_node.isNodeJS && typeof Buffer !== "undefined" && value instanceof Buffer) {
                        params[key] = new Uint8Array(value);
                      } else if (value instanceof Uint8Array) {
                        break;
                      } else if (typeof value === "string") {
                        params[key] = (0, _util.stringToBytes)(value);
                      } else if (typeof value === "object" && value !== null && !isNaN(value.length)) {
                        params[key] = new Uint8Array(value);
                      } else if ((0, _util.isArrayBuffer)(value)) {
                        params[key] = new Uint8Array(value);
                      } else {
                        throw new Error("Invalid PDF binary data: either typed array, string, or array-like object is expected in the data property.");
                      }
                      continue;
                  }
                  params[key] = value;
                }
                params.rangeChunkSize = params.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
                params.CMapReaderFactory = params.CMapReaderFactory || DefaultCMapReaderFactory;
                params.ignoreErrors = params.stopAtErrors !== true;
                params.fontExtraProperties = params.fontExtraProperties === true;
                params.pdfBug = params.pdfBug === true;
                params.enableXfa = params.enableXfa === true;
                if (typeof params.docBaseUrl !== "string" || (0, _display_utils.isDataScheme)(params.docBaseUrl)) {
                  params.docBaseUrl = null;
                }
                if (!Number.isInteger(params.maxImageSize)) {
                  params.maxImageSize = -1;
                }
                if (typeof params.isEvalSupported !== "boolean") {
                  params.isEvalSupported = true;
                }
                if (typeof params.disableFontFace !== "boolean") {
                  params.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || false;
                }
                if (typeof params.ownerDocument === "undefined") {
                  params.ownerDocument = globalThis.document;
                }
                if (typeof params.disableRange !== "boolean") {
                  params.disableRange = false;
                }
                if (typeof params.disableStream !== "boolean") {
                  params.disableStream = false;
                }
                if (typeof params.disableAutoFetch !== "boolean") {
                  params.disableAutoFetch = false;
                }
                (0, _util.setVerbosityLevel)(params.verbosity);
                if (!worker2) {
                  const workerParams = {
                    verbosity: params.verbosity,
                    port: _worker_options.GlobalWorkerOptions.workerPort
                  };
                  worker2 = workerParams.port ? PDFWorker.fromPort(workerParams) : new PDFWorker(workerParams);
                  task._worker = worker2;
                }
                const docId = task.docId;
                worker2.promise.then(function() {
                  if (task.destroyed) {
                    throw new Error("Loading aborted");
                  }
                  const workerIdPromise = _fetchDocument(worker2, params, rangeTransport, docId);
                  const networkStreamPromise = new Promise(function(resolve) {
                    let networkStream;
                    if (rangeTransport) {
                      networkStream = new _transport_stream.PDFDataTransportStream({
                        length: params.length,
                        initialData: params.initialData,
                        progressiveDone: params.progressiveDone,
                        contentDispositionFilename: params.contentDispositionFilename,
                        disableRange: params.disableRange,
                        disableStream: params.disableStream
                      }, rangeTransport);
                    } else if (!params.data) {
                      networkStream = createPDFNetworkStream({
                        url: params.url,
                        length: params.length,
                        httpHeaders: params.httpHeaders,
                        withCredentials: params.withCredentials,
                        rangeChunkSize: params.rangeChunkSize,
                        disableRange: params.disableRange,
                        disableStream: params.disableStream
                      });
                    }
                    resolve(networkStream);
                  });
                  return Promise.all([workerIdPromise, networkStreamPromise]).then(function([workerId, networkStream]) {
                    if (task.destroyed) {
                      throw new Error("Loading aborted");
                    }
                    const messageHandler = new _message_handler.MessageHandler(docId, workerId, worker2.port);
                    messageHandler.postMessageTransfers = worker2.postMessageTransfers;
                    const transport = new WorkerTransport(messageHandler, task, networkStream, params);
                    task._transport = transport;
                    messageHandler.send("Ready", null);
                  });
                }).catch(task._capability.reject);
                return task;
              }
              function _fetchDocument(worker2, source, pdfDataRangeTransport, docId) {
                if (worker2.destroyed) {
                  return Promise.reject(new Error("Worker was destroyed"));
                }
                if (pdfDataRangeTransport) {
                  source.length = pdfDataRangeTransport.length;
                  source.initialData = pdfDataRangeTransport.initialData;
                  source.progressiveDone = pdfDataRangeTransport.progressiveDone;
                  source.contentDispositionFilename = pdfDataRangeTransport.contentDispositionFilename;
                }
                return worker2.messageHandler.sendWithPromise("GetDocRequest", {
                  docId,
                  apiVersion: "2.9.359",
                  source: {
                    data: source.data,
                    url: source.url,
                    password: source.password,
                    disableAutoFetch: source.disableAutoFetch,
                    rangeChunkSize: source.rangeChunkSize,
                    length: source.length
                  },
                  maxImageSize: source.maxImageSize,
                  disableFontFace: source.disableFontFace,
                  postMessageTransfers: worker2.postMessageTransfers,
                  docBaseUrl: source.docBaseUrl,
                  ignoreErrors: source.ignoreErrors,
                  isEvalSupported: source.isEvalSupported,
                  fontExtraProperties: source.fontExtraProperties,
                  enableXfa: source.enableXfa
                }).then(function(workerId) {
                  if (worker2.destroyed) {
                    throw new Error("Worker was destroyed");
                  }
                  return workerId;
                });
              }
              const PDFDocumentLoadingTask = /* @__PURE__ */ function PDFDocumentLoadingTaskClosure() {
                let nextDocumentId = 0;
                class PDFDocumentLoadingTask2 {
                  constructor() {
                    this._capability = (0, _util.createPromiseCapability)();
                    this._transport = null;
                    this._worker = null;
                    this.docId = "d" + nextDocumentId++;
                    this.destroyed = false;
                    this.onPassword = null;
                    this.onProgress = null;
                    this.onUnsupportedFeature = null;
                  }
                  get promise() {
                    return this._capability.promise;
                  }
                  destroy() {
                    this.destroyed = true;
                    const transportDestroyed = !this._transport ? Promise.resolve() : this._transport.destroy();
                    return transportDestroyed.then(() => {
                      this._transport = null;
                      if (this._worker) {
                        this._worker.destroy();
                        this._worker = null;
                      }
                    });
                  }
                }
                return PDFDocumentLoadingTask2;
              }();
              class PDFDataRangeTransport {
                constructor(length, initialData, progressiveDone = false, contentDispositionFilename = null) {
                  this.length = length;
                  this.initialData = initialData;
                  this.progressiveDone = progressiveDone;
                  this.contentDispositionFilename = contentDispositionFilename;
                  this._rangeListeners = [];
                  this._progressListeners = [];
                  this._progressiveReadListeners = [];
                  this._progressiveDoneListeners = [];
                  this._readyCapability = (0, _util.createPromiseCapability)();
                }
                addRangeListener(listener) {
                  this._rangeListeners.push(listener);
                }
                addProgressListener(listener) {
                  this._progressListeners.push(listener);
                }
                addProgressiveReadListener(listener) {
                  this._progressiveReadListeners.push(listener);
                }
                addProgressiveDoneListener(listener) {
                  this._progressiveDoneListeners.push(listener);
                }
                onDataRange(begin, chunk) {
                  for (const listener of this._rangeListeners) {
                    listener(begin, chunk);
                  }
                }
                onDataProgress(loaded, total) {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressListeners) {
                      listener(loaded, total);
                    }
                  });
                }
                onDataProgressiveRead(chunk) {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressiveReadListeners) {
                      listener(chunk);
                    }
                  });
                }
                onDataProgressiveDone() {
                  this._readyCapability.promise.then(() => {
                    for (const listener of this._progressiveDoneListeners) {
                      listener();
                    }
                  });
                }
                transportReady() {
                  this._readyCapability.resolve();
                }
                requestDataRange(begin, end) {
                  (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
                }
                abort() {
                }
              }
              exports.PDFDataRangeTransport = PDFDataRangeTransport;
              class PDFDocumentProxy {
                constructor(pdfInfo, transport) {
                  this._pdfInfo = pdfInfo;
                  this._transport = transport;
                }
                get annotationStorage() {
                  return this._transport.annotationStorage;
                }
                get numPages() {
                  return this._pdfInfo.numPages;
                }
                get fingerprint() {
                  return this._pdfInfo.fingerprint;
                }
                get isPureXfa() {
                  return this._pdfInfo.isPureXfa;
                }
                getPage(pageNumber) {
                  return this._transport.getPage(pageNumber);
                }
                getPageIndex(ref) {
                  return this._transport.getPageIndex(ref);
                }
                getDestinations() {
                  return this._transport.getDestinations();
                }
                getDestination(id) {
                  return this._transport.getDestination(id);
                }
                getPageLabels() {
                  return this._transport.getPageLabels();
                }
                getPageLayout() {
                  return this._transport.getPageLayout();
                }
                getPageMode() {
                  return this._transport.getPageMode();
                }
                getViewerPreferences() {
                  return this._transport.getViewerPreferences();
                }
                getOpenAction() {
                  return this._transport.getOpenAction();
                }
                getAttachments() {
                  return this._transport.getAttachments();
                }
                getJavaScript() {
                  return this._transport.getJavaScript();
                }
                getJSActions() {
                  return this._transport.getDocJSActions();
                }
                getOutline() {
                  return this._transport.getOutline();
                }
                getOptionalContentConfig() {
                  return this._transport.getOptionalContentConfig();
                }
                getPermissions() {
                  return this._transport.getPermissions();
                }
                getMetadata() {
                  return this._transport.getMetadata();
                }
                getMarkInfo() {
                  return this._transport.getMarkInfo();
                }
                getData() {
                  return this._transport.getData();
                }
                getDownloadInfo() {
                  return this._transport.downloadInfoCapability.promise;
                }
                getStats() {
                  return this._transport.getStats();
                }
                cleanup(keepLoadedFonts = false) {
                  return this._transport.startCleanup(keepLoadedFonts || this.isPureXfa);
                }
                destroy() {
                  return this.loadingTask.destroy();
                }
                get loadingParams() {
                  return this._transport.loadingParams;
                }
                get loadingTask() {
                  return this._transport.loadingTask;
                }
                saveDocument() {
                  if (arguments.length > 0) {
                    (0, _display_utils.deprecated)("saveDocument no longer accepts any options.");
                  }
                  if (this._transport.annotationStorage.size <= 0) {
                    (0, _display_utils.deprecated)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
                  }
                  return this._transport.saveDocument();
                }
                getFieldObjects() {
                  return this._transport.getFieldObjects();
                }
                hasJSActions() {
                  return this._transport.hasJSActions();
                }
                getCalculationOrderIds() {
                  return this._transport.getCalculationOrderIds();
                }
              }
              exports.PDFDocumentProxy = PDFDocumentProxy;
              class PDFPageProxy {
                constructor(pageIndex, pageInfo, transport, ownerDocument, pdfBug = false) {
                  this._pageIndex = pageIndex;
                  this._pageInfo = pageInfo;
                  this._ownerDocument = ownerDocument;
                  this._transport = transport;
                  this._stats = pdfBug ? new _display_utils.StatTimer() : null;
                  this._pdfBug = pdfBug;
                  this.commonObjs = transport.commonObjs;
                  this.objs = new PDFObjects();
                  this.cleanupAfterRender = false;
                  this.pendingCleanup = false;
                  this._intentStates = /* @__PURE__ */ new Map();
                  this.destroyed = false;
                }
                get pageNumber() {
                  return this._pageIndex + 1;
                }
                get rotate() {
                  return this._pageInfo.rotate;
                }
                get ref() {
                  return this._pageInfo.ref;
                }
                get userUnit() {
                  return this._pageInfo.userUnit;
                }
                get view() {
                  return this._pageInfo.view;
                }
                getViewport({
                  scale,
                  rotation = this.rotate,
                  offsetX = 0,
                  offsetY = 0,
                  dontFlip = false
                } = {}) {
                  return new _display_utils.PageViewport({
                    viewBox: this.view,
                    scale,
                    rotation,
                    offsetX,
                    offsetY,
                    dontFlip
                  });
                }
                getAnnotations({
                  intent = null
                } = {}) {
                  if (!this._annotationsPromise || this._annotationsIntent !== intent) {
                    this._annotationsPromise = this._transport.getAnnotations(this._pageIndex, intent);
                    this._annotationsIntent = intent;
                  }
                  return this._annotationsPromise;
                }
                getJSActions() {
                  return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex));
                }
                getXfa() {
                  return this._xfaPromise || (this._xfaPromise = this._transport.getPageXfa(this._pageIndex));
                }
                render({
                  canvasContext,
                  viewport,
                  intent = "display",
                  renderInteractiveForms = false,
                  transform = null,
                  imageLayer = null,
                  canvasFactory = null,
                  background = null,
                  includeAnnotationStorage = false,
                  optionalContentConfigPromise = null
                }) {
                  var _a;
                  var _intentState;
                  if (((_a = arguments[0]) == null ? void 0 : _a.annotationStorage) !== void 0) {
                    (0, _display_utils.deprecated)("render no longer accepts an `annotationStorage` option, please use the `includeAnnotationStorage`-boolean instead.");
                    includeAnnotationStorage || (includeAnnotationStorage = !!arguments[0].annotationStorage);
                  }
                  if (this._stats) {
                    this._stats.time("Overall");
                  }
                  const renderingIntent = intent === "print" ? "print" : "display";
                  this.pendingCleanup = false;
                  if (!optionalContentConfigPromise) {
                    optionalContentConfigPromise = this._transport.getOptionalContentConfig();
                  }
                  let intentState = this._intentStates.get(renderingIntent);
                  if (!intentState) {
                    intentState = /* @__PURE__ */ Object.create(null);
                    this._intentStates.set(renderingIntent, intentState);
                  }
                  if (intentState.streamReaderCancelTimeout) {
                    clearTimeout(intentState.streamReaderCancelTimeout);
                    intentState.streamReaderCancelTimeout = null;
                  }
                  const canvasFactoryInstance = canvasFactory || new DefaultCanvasFactory({
                    ownerDocument: this._ownerDocument
                  });
                  const annotationStorage = includeAnnotationStorage ? this._transport.annotationStorage.serializable : null;
                  if (!intentState.displayReadyCapability) {
                    intentState.displayReadyCapability = (0, _util.createPromiseCapability)();
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false
                    };
                    if (this._stats) {
                      this._stats.time("Page Request");
                    }
                    this._pumpOperatorList({
                      pageIndex: this._pageIndex,
                      intent: renderingIntent,
                      renderInteractiveForms: renderInteractiveForms === true,
                      annotationStorage
                    });
                  }
                  const complete = (error) => {
                    intentState.renderTasks.delete(internalRenderTask);
                    if (this.cleanupAfterRender || renderingIntent === "print") {
                      this.pendingCleanup = true;
                    }
                    this._tryCleanup();
                    if (error) {
                      internalRenderTask.capability.reject(error);
                      this._abortOperatorList({
                        intentState,
                        reason: error
                      });
                    } else {
                      internalRenderTask.capability.resolve();
                    }
                    if (this._stats) {
                      this._stats.timeEnd("Rendering");
                      this._stats.timeEnd("Overall");
                    }
                  };
                  const internalRenderTask = new InternalRenderTask({
                    callback: complete,
                    params: {
                      canvasContext,
                      viewport,
                      transform,
                      imageLayer,
                      background
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    operatorList: intentState.operatorList,
                    pageIndex: this._pageIndex,
                    canvasFactory: canvasFactoryInstance,
                    useRequestAnimationFrame: renderingIntent !== "print",
                    pdfBug: this._pdfBug
                  });
                  ((_intentState = intentState).renderTasks || (_intentState.renderTasks = /* @__PURE__ */ new Set())).add(internalRenderTask);
                  const renderTask = internalRenderTask.task;
                  Promise.all([intentState.displayReadyCapability.promise, optionalContentConfigPromise]).then(([transparency, optionalContentConfig]) => {
                    if (this.pendingCleanup) {
                      complete();
                      return;
                    }
                    if (this._stats) {
                      this._stats.time("Rendering");
                    }
                    internalRenderTask.initializeGraphics({
                      transparency,
                      optionalContentConfig
                    });
                    internalRenderTask.operatorListChanged();
                  }).catch(complete);
                  return renderTask;
                }
                getOperatorList() {
                  function operatorListChanged() {
                    if (intentState.operatorList.lastChunk) {
                      intentState.opListReadCapability.resolve(intentState.operatorList);
                      intentState.renderTasks.delete(opListTask);
                    }
                  }
                  const renderingIntent = "oplist";
                  let intentState = this._intentStates.get(renderingIntent);
                  if (!intentState) {
                    intentState = /* @__PURE__ */ Object.create(null);
                    this._intentStates.set(renderingIntent, intentState);
                  }
                  let opListTask;
                  if (!intentState.opListReadCapability) {
                    var _intentState2;
                    opListTask = /* @__PURE__ */ Object.create(null);
                    opListTask.operatorListChanged = operatorListChanged;
                    intentState.opListReadCapability = (0, _util.createPromiseCapability)();
                    ((_intentState2 = intentState).renderTasks || (_intentState2.renderTasks = /* @__PURE__ */ new Set())).add(opListTask);
                    intentState.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: false
                    };
                    if (this._stats) {
                      this._stats.time("Page Request");
                    }
                    this._pumpOperatorList({
                      pageIndex: this._pageIndex,
                      intent: renderingIntent
                    });
                  }
                  return intentState.opListReadCapability.promise;
                }
                streamTextContent({
                  normalizeWhitespace = false,
                  disableCombineTextItems = false,
                  includeMarkedContent = false
                } = {}) {
                  const TEXT_CONTENT_CHUNK_SIZE = 100;
                  return this._transport.messageHandler.sendWithStream("GetTextContent", {
                    pageIndex: this._pageIndex,
                    normalizeWhitespace: normalizeWhitespace === true,
                    combineTextItems: disableCombineTextItems !== true,
                    includeMarkedContent: includeMarkedContent === true
                  }, {
                    highWaterMark: TEXT_CONTENT_CHUNK_SIZE,
                    size(textContent) {
                      return textContent.items.length;
                    }
                  });
                }
                getTextContent(params = {}) {
                  const readableStream = this.streamTextContent(params);
                  return new Promise(function(resolve, reject) {
                    function pump() {
                      reader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          resolve(textContent);
                          return;
                        }
                        Object.assign(textContent.styles, value.styles);
                        textContent.items.push(...value.items);
                        pump();
                      }, reject);
                    }
                    const reader = readableStream.getReader();
                    const textContent = {
                      items: [],
                      styles: /* @__PURE__ */ Object.create(null)
                    };
                    pump();
                  });
                }
                getStructTree() {
                  return this._structTreePromise || (this._structTreePromise = this._transport.getStructTree(this._pageIndex));
                }
                _destroy() {
                  this.destroyed = true;
                  this._transport.pageCache[this._pageIndex] = null;
                  const waitOn = [];
                  for (const [intent, intentState] of this._intentStates) {
                    this._abortOperatorList({
                      intentState,
                      reason: new Error("Page was destroyed."),
                      force: true
                    });
                    if (intent === "oplist") {
                      continue;
                    }
                    for (const internalRenderTask of intentState.renderTasks) {
                      waitOn.push(internalRenderTask.completed);
                      internalRenderTask.cancel();
                    }
                  }
                  this.objs.clear();
                  this._annotationsPromise = null;
                  this._jsActionsPromise = null;
                  this._xfaPromise = null;
                  this._structTreePromise = null;
                  this.pendingCleanup = false;
                  return Promise.all(waitOn);
                }
                cleanup(resetStats = false) {
                  this.pendingCleanup = true;
                  return this._tryCleanup(resetStats);
                }
                _tryCleanup(resetStats = false) {
                  if (!this.pendingCleanup) {
                    return false;
                  }
                  for (const {
                    renderTasks,
                    operatorList
                  } of this._intentStates.values()) {
                    if (renderTasks.size > 0 || !operatorList.lastChunk) {
                      return false;
                    }
                  }
                  this._intentStates.clear();
                  this.objs.clear();
                  this._annotationsPromise = null;
                  this._jsActionsPromise = null;
                  this._xfaPromise = null;
                  this._structTreePromise = null;
                  if (resetStats && this._stats) {
                    this._stats = new _display_utils.StatTimer();
                  }
                  this.pendingCleanup = false;
                  return true;
                }
                _startRenderPage(transparency, intent) {
                  const intentState = this._intentStates.get(intent);
                  if (!intentState) {
                    return;
                  }
                  if (this._stats) {
                    this._stats.timeEnd("Page Request");
                  }
                  if (intentState.displayReadyCapability) {
                    intentState.displayReadyCapability.resolve(transparency);
                  }
                }
                _renderPageChunk(operatorListChunk, intentState) {
                  for (let i2 = 0, ii = operatorListChunk.length; i2 < ii; i2++) {
                    intentState.operatorList.fnArray.push(operatorListChunk.fnArray[i2]);
                    intentState.operatorList.argsArray.push(operatorListChunk.argsArray[i2]);
                  }
                  intentState.operatorList.lastChunk = operatorListChunk.lastChunk;
                  for (const internalRenderTask of intentState.renderTasks) {
                    internalRenderTask.operatorListChanged();
                  }
                  if (operatorListChunk.lastChunk) {
                    this._tryCleanup();
                  }
                }
                _pumpOperatorList(args) {
                  (0, _util.assert)(args.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');
                  const readableStream = this._transport.messageHandler.sendWithStream("GetOperatorList", args);
                  const reader = readableStream.getReader();
                  const intentState = this._intentStates.get(args.intent);
                  intentState.streamReader = reader;
                  const pump = () => {
                    reader.read().then(({
                      value,
                      done
                    }) => {
                      if (done) {
                        intentState.streamReader = null;
                        return;
                      }
                      if (this._transport.destroyed) {
                        return;
                      }
                      this._renderPageChunk(value, intentState);
                      pump();
                    }, (reason) => {
                      intentState.streamReader = null;
                      if (this._transport.destroyed) {
                        return;
                      }
                      if (intentState.operatorList) {
                        intentState.operatorList.lastChunk = true;
                        for (const internalRenderTask of intentState.renderTasks) {
                          internalRenderTask.operatorListChanged();
                        }
                        this._tryCleanup();
                      }
                      if (intentState.displayReadyCapability) {
                        intentState.displayReadyCapability.reject(reason);
                      } else if (intentState.opListReadCapability) {
                        intentState.opListReadCapability.reject(reason);
                      } else {
                        throw reason;
                      }
                    });
                  };
                  pump();
                }
                _abortOperatorList({
                  intentState,
                  reason,
                  force = false
                }) {
                  (0, _util.assert)(reason instanceof Error || typeof reason === "object" && reason !== null, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');
                  if (!intentState.streamReader) {
                    return;
                  }
                  if (!force) {
                    if (intentState.renderTasks.size > 0) {
                      return;
                    }
                    if (reason instanceof _display_utils.RenderingCancelledException) {
                      intentState.streamReaderCancelTimeout = setTimeout(() => {
                        this._abortOperatorList({
                          intentState,
                          reason,
                          force: true
                        });
                        intentState.streamReaderCancelTimeout = null;
                      }, RENDERING_CANCELLED_TIMEOUT);
                      return;
                    }
                  }
                  intentState.streamReader.cancel(new _util.AbortException(reason == null ? void 0 : reason.message));
                  intentState.streamReader = null;
                  if (this._transport.destroyed) {
                    return;
                  }
                  for (const [intent, curIntentState] of this._intentStates) {
                    if (curIntentState === intentState) {
                      this._intentStates.delete(intent);
                      break;
                    }
                  }
                  this.cleanup();
                }
                get stats() {
                  return this._stats;
                }
              }
              exports.PDFPageProxy = PDFPageProxy;
              class LoopbackPort {
                constructor() {
                  this._listeners = [];
                  this._deferred = Promise.resolve(void 0);
                }
                postMessage(obj, transfers) {
                  function cloneValue(value) {
                    var _a;
                    if (typeof value !== "object" || value === null) {
                      return value;
                    }
                    if (cloned.has(value)) {
                      return cloned.get(value);
                    }
                    let buffer, result;
                    if ((buffer = value.buffer) && (0, _util.isArrayBuffer)(buffer)) {
                      if (transfers == null ? void 0 : transfers.includes(buffer)) {
                        result = new value.constructor(buffer, value.byteOffset, value.byteLength);
                      } else {
                        result = new value.constructor(value);
                      }
                      cloned.set(value, result);
                      return result;
                    }
                    if (value instanceof Map) {
                      result = /* @__PURE__ */ new Map();
                      cloned.set(value, result);
                      for (const [key, val] of value) {
                        result.set(key, cloneValue(val));
                      }
                      return result;
                    }
                    if (value instanceof Set) {
                      result = /* @__PURE__ */ new Set();
                      cloned.set(value, result);
                      for (const val of value) {
                        result.add(cloneValue(val));
                      }
                      return result;
                    }
                    if (value instanceof URL) {
                      throw new Error(`LoopbackPort.postMessage - cannot clone: ${value}`);
                    }
                    result = Array.isArray(value) ? [] : /* @__PURE__ */ Object.create(null);
                    cloned.set(value, result);
                    for (const i2 in value) {
                      let desc, p2 = value;
                      while (!(desc = Object.getOwnPropertyDescriptor(p2, i2))) {
                        p2 = Object.getPrototypeOf(p2);
                      }
                      if (typeof desc.value === "undefined") {
                        continue;
                      }
                      if (typeof desc.value === "function") {
                        if ((_a = value.hasOwnProperty) == null ? void 0 : _a.call(value, i2)) {
                          throw new Error(`LoopbackPort.postMessage - cannot clone: ${value[i2]}`);
                        }
                        continue;
                      }
                      result[i2] = cloneValue(desc.value);
                    }
                    return result;
                  }
                  const cloned = /* @__PURE__ */ new WeakMap();
                  const event = {
                    data: cloneValue(obj)
                  };
                  this._deferred.then(() => {
                    for (const listener of this._listeners) {
                      listener.call(this, event);
                    }
                  });
                }
                addEventListener(name, listener) {
                  this._listeners.push(listener);
                }
                removeEventListener(name, listener) {
                  const i2 = this._listeners.indexOf(listener);
                  this._listeners.splice(i2, 1);
                }
                terminate() {
                  this._listeners.length = 0;
                }
              }
              exports.LoopbackPort = LoopbackPort;
              const PDFWorker = function PDFWorkerClosure() {
                var _a;
                const pdfWorkerPorts = /* @__PURE__ */ new WeakMap();
                let isWorkerDisabled = false;
                let fallbackWorkerSrc;
                let nextFakeWorkerId = 0;
                let fakeWorkerCapability;
                if (_is_node.isNodeJS && typeof __require === "function") {
                  isWorkerDisabled = true;
                  fallbackWorkerSrc = "./pdf.worker.js";
                } else if (typeof document === "object" && "currentScript" in document) {
                  const pdfjsFilePath = (_a = document.currentScript) == null ? void 0 : _a.src;
                  if (pdfjsFilePath) {
                    fallbackWorkerSrc = pdfjsFilePath.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
                  }
                }
                function getWorkerSrc() {
                  if (_worker_options.GlobalWorkerOptions.workerSrc) {
                    return _worker_options.GlobalWorkerOptions.workerSrc;
                  }
                  if (typeof fallbackWorkerSrc !== "undefined") {
                    if (!_is_node.isNodeJS) {
                      (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                    }
                    return fallbackWorkerSrc;
                  }
                  throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
                }
                function getMainThreadWorkerMessageHandler() {
                  var _a2;
                  let mainWorkerMessageHandler2;
                  try {
                    mainWorkerMessageHandler2 = (_a2 = globalThis.pdfjsWorker) == null ? void 0 : _a2.WorkerMessageHandler;
                  } catch (ex) {
                  }
                  return mainWorkerMessageHandler2 || null;
                }
                function setupFakeWorkerGlobal() {
                  if (fakeWorkerCapability) {
                    return fakeWorkerCapability.promise;
                  }
                  fakeWorkerCapability = (0, _util.createPromiseCapability)();
                  const loader = async function() {
                    const mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
                    if (mainWorkerMessageHandler) {
                      return mainWorkerMessageHandler;
                    }
                    if (_is_node.isNodeJS && typeof __require === "function") {
                      const worker = eval("require")(getWorkerSrc());
                      return worker.WorkerMessageHandler;
                    }
                    await (0, _display_utils.loadScript)(getWorkerSrc());
                    return window.pdfjsWorker.WorkerMessageHandler;
                  };
                  loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
                  return fakeWorkerCapability.promise;
                }
                function createCDNWrapper(url) {
                  const wrapper = "importScripts('" + url + "');";
                  return URL.createObjectURL(new Blob([wrapper]));
                }
                class PDFWorker {
                  constructor({
                    name = null,
                    port = null,
                    verbosity = (0, _util.getVerbosityLevel)()
                  } = {}) {
                    if (port && pdfWorkerPorts.has(port)) {
                      throw new Error("Cannot use more than one PDFWorker per port");
                    }
                    this.name = name;
                    this.destroyed = false;
                    this.postMessageTransfers = true;
                    this.verbosity = verbosity;
                    this._readyCapability = (0, _util.createPromiseCapability)();
                    this._port = null;
                    this._webWorker = null;
                    this._messageHandler = null;
                    if (port) {
                      pdfWorkerPorts.set(port, this);
                      this._initializeFromPort(port);
                      return;
                    }
                    this._initialize();
                  }
                  get promise() {
                    return this._readyCapability.promise;
                  }
                  get port() {
                    return this._port;
                  }
                  get messageHandler() {
                    return this._messageHandler;
                  }
                  _initializeFromPort(port) {
                    this._port = port;
                    this._messageHandler = new _message_handler.MessageHandler("main", "worker", port);
                    this._messageHandler.on("ready", function() {
                    });
                    this._readyCapability.resolve();
                  }
                  _initialize() {
                    if (typeof Worker !== "undefined" && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                      let workerSrc = getWorkerSrc();
                      try {
                        if (!(0, _util.isSameOrigin)(window.location.href, workerSrc)) {
                          workerSrc = createCDNWrapper(new URL(workerSrc, window.location).href);
                        }
                        const worker2 = new Worker(workerSrc);
                        const messageHandler = new _message_handler.MessageHandler("main", "worker", worker2);
                        const terminateEarly = () => {
                          worker2.removeEventListener("error", onWorkerError);
                          messageHandler.destroy();
                          worker2.terminate();
                          if (this.destroyed) {
                            this._readyCapability.reject(new Error("Worker was destroyed"));
                          } else {
                            this._setupFakeWorker();
                          }
                        };
                        const onWorkerError = () => {
                          if (!this._webWorker) {
                            terminateEarly();
                          }
                        };
                        worker2.addEventListener("error", onWorkerError);
                        messageHandler.on("test", (data) => {
                          worker2.removeEventListener("error", onWorkerError);
                          if (this.destroyed) {
                            terminateEarly();
                            return;
                          }
                          if (data) {
                            this._messageHandler = messageHandler;
                            this._port = worker2;
                            this._webWorker = worker2;
                            if (!data.supportTransfers) {
                              this.postMessageTransfers = false;
                            }
                            this._readyCapability.resolve();
                            messageHandler.send("configure", {
                              verbosity: this.verbosity
                            });
                          } else {
                            this._setupFakeWorker();
                            messageHandler.destroy();
                            worker2.terminate();
                          }
                        });
                        messageHandler.on("ready", (data) => {
                          worker2.removeEventListener("error", onWorkerError);
                          if (this.destroyed) {
                            terminateEarly();
                            return;
                          }
                          try {
                            sendTest();
                          } catch (e2) {
                            this._setupFakeWorker();
                          }
                        });
                        const sendTest = () => {
                          const testObj = new Uint8Array([this.postMessageTransfers ? 255 : 0]);
                          try {
                            messageHandler.send("test", testObj, [testObj.buffer]);
                          } catch (ex) {
                            (0, _util.warn)("Cannot use postMessage transfers.");
                            testObj[0] = 0;
                            messageHandler.send("test", testObj);
                          }
                        };
                        sendTest();
                        return;
                      } catch (e2) {
                        (0, _util.info)("The worker has been disabled.");
                      }
                    }
                    this._setupFakeWorker();
                  }
                  _setupFakeWorker() {
                    if (!isWorkerDisabled) {
                      (0, _util.warn)("Setting up fake worker.");
                      isWorkerDisabled = true;
                    }
                    setupFakeWorkerGlobal().then((WorkerMessageHandler) => {
                      if (this.destroyed) {
                        this._readyCapability.reject(new Error("Worker was destroyed"));
                        return;
                      }
                      const port = new LoopbackPort();
                      this._port = port;
                      const id = "fake" + nextFakeWorkerId++;
                      const workerHandler = new _message_handler.MessageHandler(id + "_worker", id, port);
                      WorkerMessageHandler.setup(workerHandler, port);
                      const messageHandler = new _message_handler.MessageHandler(id, id + "_worker", port);
                      this._messageHandler = messageHandler;
                      this._readyCapability.resolve();
                      messageHandler.send("configure", {
                        verbosity: this.verbosity
                      });
                    }).catch((reason) => {
                      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${reason.message}".`));
                    });
                  }
                  destroy() {
                    this.destroyed = true;
                    if (this._webWorker) {
                      this._webWorker.terminate();
                      this._webWorker = null;
                    }
                    pdfWorkerPorts.delete(this._port);
                    this._port = null;
                    if (this._messageHandler) {
                      this._messageHandler.destroy();
                      this._messageHandler = null;
                    }
                  }
                  static fromPort(params) {
                    if (!params || !params.port) {
                      throw new Error("PDFWorker.fromPort - invalid method signature.");
                    }
                    if (pdfWorkerPorts.has(params.port)) {
                      return pdfWorkerPorts.get(params.port);
                    }
                    return new PDFWorker(params);
                  }
                  static getWorkerSrc() {
                    return getWorkerSrc();
                  }
                }
                return PDFWorker;
              }();
              exports.PDFWorker = PDFWorker;
              class WorkerTransport {
                constructor(messageHandler, loadingTask, networkStream, params) {
                  this.messageHandler = messageHandler;
                  this.loadingTask = loadingTask;
                  this.commonObjs = new PDFObjects();
                  this.fontLoader = new _font_loader.FontLoader({
                    docId: loadingTask.docId,
                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                    ownerDocument: params.ownerDocument
                  });
                  this._params = params;
                  this.CMapReaderFactory = new params.CMapReaderFactory({
                    baseUrl: params.cMapUrl,
                    isCompressed: params.cMapPacked
                  });
                  this.destroyed = false;
                  this.destroyCapability = null;
                  this._passwordCapability = null;
                  this._networkStream = networkStream;
                  this._fullReader = null;
                  this._lastProgress = null;
                  this.pageCache = [];
                  this.pagePromises = [];
                  this.downloadInfoCapability = (0, _util.createPromiseCapability)();
                  this.setupMessageHandler();
                }
                get annotationStorage() {
                  return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
                }
                destroy() {
                  if (this.destroyCapability) {
                    return this.destroyCapability.promise;
                  }
                  this.destroyed = true;
                  this.destroyCapability = (0, _util.createPromiseCapability)();
                  if (this._passwordCapability) {
                    this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                  }
                  const waitOn = [];
                  for (const page of this.pageCache) {
                    if (page) {
                      waitOn.push(page._destroy());
                    }
                  }
                  this.pageCache.length = 0;
                  this.pagePromises.length = 0;
                  if (this.hasOwnProperty("annotationStorage")) {
                    this.annotationStorage.resetModified();
                  }
                  const terminated = this.messageHandler.sendWithPromise("Terminate", null);
                  waitOn.push(terminated);
                  Promise.all(waitOn).then(() => {
                    this.commonObjs.clear();
                    this.fontLoader.clear();
                    this._hasJSActionsPromise = null;
                    if (this._networkStream) {
                      this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                    }
                    if (this.messageHandler) {
                      this.messageHandler.destroy();
                      this.messageHandler = null;
                    }
                    this.destroyCapability.resolve();
                  }, this.destroyCapability.reject);
                  return this.destroyCapability.promise;
                }
                setupMessageHandler() {
                  const {
                    messageHandler,
                    loadingTask
                  } = this;
                  messageHandler.on("GetReader", (data, sink) => {
                    (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
                    this._fullReader = this._networkStream.getFullReader();
                    this._fullReader.onProgress = (evt) => {
                      this._lastProgress = {
                        loaded: evt.loaded,
                        total: evt.total
                      };
                    };
                    sink.onPull = () => {
                      this._fullReader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          sink.close();
                          return;
                        }
                        (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetReader - expected an ArrayBuffer.");
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      }).catch((reason) => {
                        sink.error(reason);
                      });
                    };
                    sink.onCancel = (reason) => {
                      this._fullReader.cancel(reason);
                      sink.ready.catch((readyReason) => {
                        if (this.destroyed) {
                          return;
                        }
                        throw readyReason;
                      });
                    };
                  });
                  messageHandler.on("ReaderHeadersReady", (data) => {
                    const headersCapability = (0, _util.createPromiseCapability)();
                    const fullReader = this._fullReader;
                    fullReader.headersReady.then(() => {
                      if (!fullReader.isStreamingSupported || !fullReader.isRangeSupported) {
                        if (this._lastProgress && loadingTask.onProgress) {
                          loadingTask.onProgress(this._lastProgress);
                        }
                        fullReader.onProgress = (evt) => {
                          if (loadingTask.onProgress) {
                            loadingTask.onProgress({
                              loaded: evt.loaded,
                              total: evt.total
                            });
                          }
                        };
                      }
                      headersCapability.resolve({
                        isStreamingSupported: fullReader.isStreamingSupported,
                        isRangeSupported: fullReader.isRangeSupported,
                        contentLength: fullReader.contentLength
                      });
                    }, headersCapability.reject);
                    return headersCapability.promise;
                  });
                  messageHandler.on("GetRangeReader", (data, sink) => {
                    (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                    const rangeReader = this._networkStream.getRangeReader(data.begin, data.end);
                    if (!rangeReader) {
                      sink.close();
                      return;
                    }
                    sink.onPull = () => {
                      rangeReader.read().then(function({
                        value,
                        done
                      }) {
                        if (done) {
                          sink.close();
                          return;
                        }
                        (0, _util.assert)((0, _util.isArrayBuffer)(value), "GetRangeReader - expected an ArrayBuffer.");
                        sink.enqueue(new Uint8Array(value), 1, [value]);
                      }).catch((reason) => {
                        sink.error(reason);
                      });
                    };
                    sink.onCancel = (reason) => {
                      rangeReader.cancel(reason);
                      sink.ready.catch((readyReason) => {
                        if (this.destroyed) {
                          return;
                        }
                        throw readyReason;
                      });
                    };
                  });
                  messageHandler.on("GetDoc", ({
                    pdfInfo
                  }) => {
                    this._numPages = pdfInfo.numPages;
                    loadingTask._capability.resolve(new PDFDocumentProxy(pdfInfo, this));
                  });
                  messageHandler.on("DocException", function(ex) {
                    let reason;
                    switch (ex.name) {
                      case "PasswordException":
                        reason = new _util.PasswordException(ex.message, ex.code);
                        break;
                      case "InvalidPDFException":
                        reason = new _util.InvalidPDFException(ex.message);
                        break;
                      case "MissingPDFException":
                        reason = new _util.MissingPDFException(ex.message);
                        break;
                      case "UnexpectedResponseException":
                        reason = new _util.UnexpectedResponseException(ex.message, ex.status);
                        break;
                      case "UnknownErrorException":
                        reason = new _util.UnknownErrorException(ex.message, ex.details);
                        break;
                    }
                    if (!(reason instanceof Error)) {
                      const msg = "DocException - expected a valid Error.";
                      (0, _util.warn)(msg);
                    }
                    loadingTask._capability.reject(reason);
                  });
                  messageHandler.on("PasswordRequest", (exception) => {
                    this._passwordCapability = (0, _util.createPromiseCapability)();
                    if (loadingTask.onPassword) {
                      const updatePassword = (password) => {
                        this._passwordCapability.resolve({
                          password
                        });
                      };
                      try {
                        loadingTask.onPassword(updatePassword, exception.code);
                      } catch (ex) {
                        this._passwordCapability.reject(ex);
                      }
                    } else {
                      this._passwordCapability.reject(new _util.PasswordException(exception.message, exception.code));
                    }
                    return this._passwordCapability.promise;
                  });
                  messageHandler.on("DataLoaded", (data) => {
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.length,
                        total: data.length
                      });
                    }
                    this.downloadInfoCapability.resolve(data);
                  });
                  messageHandler.on("StartRenderPage", (data) => {
                    if (this.destroyed) {
                      return;
                    }
                    const page = this.pageCache[data.pageIndex];
                    page._startRenderPage(data.transparency, data.intent);
                  });
                  messageHandler.on("commonobj", (data) => {
                    var _a;
                    if (this.destroyed) {
                      return;
                    }
                    const [id, type, exportedData] = data;
                    if (this.commonObjs.has(id)) {
                      return;
                    }
                    switch (type) {
                      case "Font":
                        const params = this._params;
                        if ("error" in exportedData) {
                          const exportedError = exportedData.error;
                          (0, _util.warn)(`Error during font loading: ${exportedError}`);
                          this.commonObjs.resolve(id, exportedError);
                          break;
                        }
                        let fontRegistry = null;
                        if (params.pdfBug && ((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled)) {
                          fontRegistry = {
                            registerFont(font2, url) {
                              globalThis.FontInspector.fontAdded(font2, url);
                            }
                          };
                        }
                        const font = new _font_loader.FontFaceObject(exportedData, {
                          isEvalSupported: params.isEvalSupported,
                          disableFontFace: params.disableFontFace,
                          ignoreErrors: params.ignoreErrors,
                          onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                          fontRegistry
                        });
                        this.fontLoader.bind(font).catch((reason) => {
                          return messageHandler.sendWithPromise("FontFallback", {
                            id
                          });
                        }).finally(() => {
                          if (!params.fontExtraProperties && font.data) {
                            font.data = null;
                          }
                          this.commonObjs.resolve(id, font);
                        });
                        break;
                      case "FontPath":
                      case "Image":
                        this.commonObjs.resolve(id, exportedData);
                        break;
                      default:
                        throw new Error(`Got unknown common object type ${type}`);
                    }
                  });
                  messageHandler.on("obj", (data) => {
                    var _a;
                    if (this.destroyed) {
                      return void 0;
                    }
                    const [id, pageIndex, type, imageData] = data;
                    const pageProxy = this.pageCache[pageIndex];
                    if (pageProxy.objs.has(id)) {
                      return void 0;
                    }
                    switch (type) {
                      case "Image":
                        pageProxy.objs.resolve(id, imageData);
                        const MAX_IMAGE_SIZE_TO_STORE = 8e6;
                        if (((_a = imageData == null ? void 0 : imageData.data) == null ? void 0 : _a.length) > MAX_IMAGE_SIZE_TO_STORE) {
                          pageProxy.cleanupAfterRender = true;
                        }
                        break;
                      default:
                        throw new Error(`Got unknown object type ${type}`);
                    }
                    return void 0;
                  });
                  messageHandler.on("DocProgress", (data) => {
                    if (this.destroyed) {
                      return;
                    }
                    if (loadingTask.onProgress) {
                      loadingTask.onProgress({
                        loaded: data.loaded,
                        total: data.total
                      });
                    }
                  });
                  messageHandler.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
                  messageHandler.on("FetchBuiltInCMap", (data, sink) => {
                    if (this.destroyed) {
                      sink.error(new Error("Worker was destroyed"));
                      return;
                    }
                    let fetched = false;
                    sink.onPull = () => {
                      if (fetched) {
                        sink.close();
                        return;
                      }
                      fetched = true;
                      this.CMapReaderFactory.fetch(data).then(function(builtInCMap) {
                        sink.enqueue(builtInCMap, 1, [builtInCMap.cMapData.buffer]);
                      }).catch(function(reason) {
                        sink.error(reason);
                      });
                    };
                  });
                }
                _onUnsupportedFeature({
                  featureId
                }) {
                  if (this.destroyed) {
                    return;
                  }
                  if (this.loadingTask.onUnsupportedFeature) {
                    this.loadingTask.onUnsupportedFeature(featureId);
                  }
                }
                getData() {
                  return this.messageHandler.sendWithPromise("GetData", null);
                }
                getPage(pageNumber) {
                  if (!Number.isInteger(pageNumber) || pageNumber <= 0 || pageNumber > this._numPages) {
                    return Promise.reject(new Error("Invalid page request"));
                  }
                  const pageIndex = pageNumber - 1;
                  if (pageIndex in this.pagePromises) {
                    return this.pagePromises[pageIndex];
                  }
                  const promise = this.messageHandler.sendWithPromise("GetPage", {
                    pageIndex
                  }).then((pageInfo) => {
                    if (this.destroyed) {
                      throw new Error("Transport destroyed");
                    }
                    const page = new PDFPageProxy(pageIndex, pageInfo, this, this._params.ownerDocument, this._params.pdfBug);
                    this.pageCache[pageIndex] = page;
                    return page;
                  });
                  this.pagePromises[pageIndex] = promise;
                  return promise;
                }
                getPageIndex(ref) {
                  return this.messageHandler.sendWithPromise("GetPageIndex", {
                    ref
                  }).catch(function(reason) {
                    return Promise.reject(new Error(reason));
                  });
                }
                getAnnotations(pageIndex, intent) {
                  return this.messageHandler.sendWithPromise("GetAnnotations", {
                    pageIndex,
                    intent
                  });
                }
                saveDocument() {
                  var _a;
                  return this.messageHandler.sendWithPromise("SaveDocument", {
                    numPages: this._numPages,
                    annotationStorage: this.annotationStorage.serializable,
                    filename: ((_a = this._fullReader) == null ? void 0 : _a.filename) ?? null
                  }).finally(() => {
                    this.annotationStorage.resetModified();
                  });
                }
                getFieldObjects() {
                  return this.messageHandler.sendWithPromise("GetFieldObjects", null);
                }
                hasJSActions() {
                  return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null));
                }
                getCalculationOrderIds() {
                  return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
                }
                getDestinations() {
                  return this.messageHandler.sendWithPromise("GetDestinations", null);
                }
                getDestination(id) {
                  if (typeof id !== "string") {
                    return Promise.reject(new Error("Invalid destination request."));
                  }
                  return this.messageHandler.sendWithPromise("GetDestination", {
                    id
                  });
                }
                getPageLabels() {
                  return this.messageHandler.sendWithPromise("GetPageLabels", null);
                }
                getPageLayout() {
                  return this.messageHandler.sendWithPromise("GetPageLayout", null);
                }
                getPageMode() {
                  return this.messageHandler.sendWithPromise("GetPageMode", null);
                }
                getViewerPreferences() {
                  return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
                }
                getOpenAction() {
                  return this.messageHandler.sendWithPromise("GetOpenAction", null);
                }
                getAttachments() {
                  return this.messageHandler.sendWithPromise("GetAttachments", null);
                }
                getJavaScript() {
                  return this.messageHandler.sendWithPromise("GetJavaScript", null);
                }
                getDocJSActions() {
                  return this.messageHandler.sendWithPromise("GetDocJSActions", null);
                }
                getPageJSActions(pageIndex) {
                  return this.messageHandler.sendWithPromise("GetPageJSActions", {
                    pageIndex
                  });
                }
                getPageXfa(pageIndex) {
                  return this.messageHandler.sendWithPromise("GetPageXfa", {
                    pageIndex
                  });
                }
                getStructTree(pageIndex) {
                  return this.messageHandler.sendWithPromise("GetStructTree", {
                    pageIndex
                  });
                }
                getOutline() {
                  return this.messageHandler.sendWithPromise("GetOutline", null);
                }
                getOptionalContentConfig() {
                  return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((results) => {
                    return new _optional_content_config.OptionalContentConfig(results);
                  });
                }
                getPermissions() {
                  return this.messageHandler.sendWithPromise("GetPermissions", null);
                }
                getMetadata() {
                  return this.messageHandler.sendWithPromise("GetMetadata", null).then((results) => {
                    var _a, _b;
                    return {
                      info: results[0],
                      metadata: results[1] ? new _metadata.Metadata(results[1]) : null,
                      contentDispositionFilename: ((_a = this._fullReader) == null ? void 0 : _a.filename) ?? null,
                      contentLength: ((_b = this._fullReader) == null ? void 0 : _b.contentLength) ?? null
                    };
                  });
                }
                getMarkInfo() {
                  return this.messageHandler.sendWithPromise("GetMarkInfo", null);
                }
                getStats() {
                  return this.messageHandler.sendWithPromise("GetStats", null);
                }
                async startCleanup(keepLoadedFonts = false) {
                  await this.messageHandler.sendWithPromise("Cleanup", null);
                  if (this.destroyed) {
                    return;
                  }
                  for (let i2 = 0, ii = this.pageCache.length; i2 < ii; i2++) {
                    const page = this.pageCache[i2];
                    if (!page) {
                      continue;
                    }
                    const cleanupSuccessful = page.cleanup();
                    if (!cleanupSuccessful) {
                      throw new Error(`startCleanup: Page ${i2 + 1} is currently rendering.`);
                    }
                  }
                  this.commonObjs.clear();
                  if (!keepLoadedFonts) {
                    this.fontLoader.clear();
                  }
                  this._hasJSActionsPromise = null;
                }
                get loadingParams() {
                  const params = this._params;
                  return (0, _util.shadow)(this, "loadingParams", {
                    disableAutoFetch: params.disableAutoFetch,
                    disableFontFace: params.disableFontFace
                  });
                }
              }
              class PDFObjects {
                constructor() {
                  this._objs = /* @__PURE__ */ Object.create(null);
                }
                _ensureObj(objId) {
                  if (this._objs[objId]) {
                    return this._objs[objId];
                  }
                  return this._objs[objId] = {
                    capability: (0, _util.createPromiseCapability)(),
                    data: null,
                    resolved: false
                  };
                }
                get(objId, callback = null) {
                  if (callback) {
                    this._ensureObj(objId).capability.promise.then(callback);
                    return null;
                  }
                  const obj = this._objs[objId];
                  if (!obj || !obj.resolved) {
                    throw new Error(`Requesting object that isn't resolved yet ${objId}.`);
                  }
                  return obj.data;
                }
                has(objId) {
                  const obj = this._objs[objId];
                  return (obj == null ? void 0 : obj.resolved) || false;
                }
                resolve(objId, data) {
                  const obj = this._ensureObj(objId);
                  obj.resolved = true;
                  obj.data = data;
                  obj.capability.resolve(data);
                }
                clear() {
                  this._objs = /* @__PURE__ */ Object.create(null);
                }
              }
              class RenderTask {
                constructor(internalRenderTask) {
                  this._internalRenderTask = internalRenderTask;
                  this.onContinue = null;
                }
                get promise() {
                  return this._internalRenderTask.capability.promise;
                }
                cancel() {
                  this._internalRenderTask.cancel();
                }
              }
              const InternalRenderTask = /* @__PURE__ */ function InternalRenderTaskClosure() {
                const canvasInRendering = /* @__PURE__ */ new WeakSet();
                class InternalRenderTask2 {
                  constructor({
                    callback,
                    params,
                    objs,
                    commonObjs,
                    operatorList,
                    pageIndex,
                    canvasFactory,
                    useRequestAnimationFrame = false,
                    pdfBug = false
                  }) {
                    this.callback = callback;
                    this.params = params;
                    this.objs = objs;
                    this.commonObjs = commonObjs;
                    this.operatorListIdx = null;
                    this.operatorList = operatorList;
                    this._pageIndex = pageIndex;
                    this.canvasFactory = canvasFactory;
                    this._pdfBug = pdfBug;
                    this.running = false;
                    this.graphicsReadyCallback = null;
                    this.graphicsReady = false;
                    this._useRequestAnimationFrame = useRequestAnimationFrame === true && typeof window !== "undefined";
                    this.cancelled = false;
                    this.capability = (0, _util.createPromiseCapability)();
                    this.task = new RenderTask(this);
                    this._cancelBound = this.cancel.bind(this);
                    this._continueBound = this._continue.bind(this);
                    this._scheduleNextBound = this._scheduleNext.bind(this);
                    this._nextBound = this._next.bind(this);
                    this._canvas = params.canvasContext.canvas;
                  }
                  get completed() {
                    return this.capability.promise.catch(function() {
                    });
                  }
                  initializeGraphics({
                    transparency = false,
                    optionalContentConfig
                  }) {
                    var _a;
                    if (this.cancelled) {
                      return;
                    }
                    if (this._canvas) {
                      if (canvasInRendering.has(this._canvas)) {
                        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                      }
                      canvasInRendering.add(this._canvas);
                    }
                    if (this._pdfBug && ((_a = globalThis.StepperManager) == null ? void 0 : _a.enabled)) {
                      this.stepper = globalThis.StepperManager.create(this._pageIndex);
                      this.stepper.init(this.operatorList);
                      this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
                    }
                    const {
                      canvasContext,
                      viewport,
                      transform,
                      imageLayer,
                      background
                    } = this.params;
                    this.gfx = new _canvas.CanvasGraphics(canvasContext, this.commonObjs, this.objs, this.canvasFactory, imageLayer, optionalContentConfig);
                    this.gfx.beginDrawing({
                      transform,
                      viewport,
                      transparency,
                      background
                    });
                    this.operatorListIdx = 0;
                    this.graphicsReady = true;
                    if (this.graphicsReadyCallback) {
                      this.graphicsReadyCallback();
                    }
                  }
                  cancel(error = null) {
                    this.running = false;
                    this.cancelled = true;
                    if (this.gfx) {
                      this.gfx.endDrawing();
                    }
                    if (this._canvas) {
                      canvasInRendering.delete(this._canvas);
                    }
                    this.callback(error || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"));
                  }
                  operatorListChanged() {
                    if (!this.graphicsReady) {
                      if (!this.graphicsReadyCallback) {
                        this.graphicsReadyCallback = this._continueBound;
                      }
                      return;
                    }
                    if (this.stepper) {
                      this.stepper.updateOperatorList(this.operatorList);
                    }
                    if (this.running) {
                      return;
                    }
                    this._continue();
                  }
                  _continue() {
                    this.running = true;
                    if (this.cancelled) {
                      return;
                    }
                    if (this.task.onContinue) {
                      this.task.onContinue(this._scheduleNextBound);
                    } else {
                      this._scheduleNext();
                    }
                  }
                  _scheduleNext() {
                    if (this._useRequestAnimationFrame) {
                      window.requestAnimationFrame(() => {
                        this._nextBound().catch(this._cancelBound);
                      });
                    } else {
                      Promise.resolve().then(this._nextBound).catch(this._cancelBound);
                    }
                  }
                  async _next() {
                    if (this.cancelled) {
                      return;
                    }
                    this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                    if (this.operatorListIdx === this.operatorList.argsArray.length) {
                      this.running = false;
                      if (this.operatorList.lastChunk) {
                        this.gfx.endDrawing();
                        if (this._canvas) {
                          canvasInRendering.delete(this._canvas);
                        }
                        this.callback();
                      }
                    }
                  }
                }
                return InternalRenderTask2;
              }();
              const version = "2.9.359";
              exports.version = version;
              const build = "e667c8cbc";
              exports.build = build;
            },
            /* 6 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.FontLoader = exports2.FontFaceObject = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              class BaseFontLoader {
                constructor({
                  docId,
                  onUnsupportedFeature,
                  ownerDocument = globalThis.document
                }) {
                  if (this.constructor === BaseFontLoader) {
                    (0, _util2.unreachable)("Cannot initialize BaseFontLoader.");
                  }
                  this.docId = docId;
                  this._onUnsupportedFeature = onUnsupportedFeature;
                  this._document = ownerDocument;
                  this.nativeFontFaces = [];
                  this.styleElement = null;
                }
                addNativeFontFace(nativeFontFace) {
                  this.nativeFontFaces.push(nativeFontFace);
                  this._document.fonts.add(nativeFontFace);
                }
                insertRule(rule) {
                  let styleElement = this.styleElement;
                  if (!styleElement) {
                    styleElement = this.styleElement = this._document.createElement("style");
                    styleElement.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
                    this._document.documentElement.getElementsByTagName("head")[0].appendChild(styleElement);
                  }
                  const styleSheet = styleElement.sheet;
                  styleSheet.insertRule(rule, styleSheet.cssRules.length);
                }
                clear() {
                  for (const nativeFontFace of this.nativeFontFaces) {
                    this._document.fonts.delete(nativeFontFace);
                  }
                  this.nativeFontFaces.length = 0;
                  if (this.styleElement) {
                    this.styleElement.remove();
                    this.styleElement = null;
                  }
                }
                async bind(font) {
                  if (font.attached || font.missingFile) {
                    return;
                  }
                  font.attached = true;
                  if (this.isFontLoadingAPISupported) {
                    const nativeFontFace = font.createNativeFontFace();
                    if (nativeFontFace) {
                      this.addNativeFontFace(nativeFontFace);
                      try {
                        await nativeFontFace.loaded;
                      } catch (ex) {
                        this._onUnsupportedFeature({
                          featureId: _util2.UNSUPPORTED_FEATURES.errorFontLoadNative
                        });
                        (0, _util2.warn)(`Failed to load font '${nativeFontFace.family}': '${ex}'.`);
                        font.disableFontFace = true;
                        throw ex;
                      }
                    }
                    return;
                  }
                  const rule = font.createFontFaceRule();
                  if (rule) {
                    this.insertRule(rule);
                    if (this.isSyncFontLoadingSupported) {
                      return;
                    }
                    await new Promise((resolve) => {
                      const request = this._queueLoadingCallback(resolve);
                      this._prepareFontLoadEvent([rule], [font], request);
                    });
                  }
                }
                _queueLoadingCallback(callback) {
                  (0, _util2.unreachable)("Abstract method `_queueLoadingCallback`.");
                }
                get isFontLoadingAPISupported() {
                  var _a;
                  return (0, _util2.shadow)(this, "isFontLoadingAPISupported", !!((_a = this._document) == null ? void 0 : _a.fonts));
                }
                get isSyncFontLoadingSupported() {
                  (0, _util2.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
                }
                get _loadTestFont() {
                  (0, _util2.unreachable)("Abstract method `_loadTestFont`.");
                }
                _prepareFontLoadEvent(rules, fontsToLoad, request) {
                  (0, _util2.unreachable)("Abstract method `_prepareFontLoadEvent`.");
                }
              }
              let FontLoader;
              exports2.FontLoader = FontLoader;
              {
                exports2.FontLoader = FontLoader = class GenericFontLoader extends BaseFontLoader {
                  constructor(params) {
                    super(params);
                    this.loadingContext = {
                      requests: [],
                      nextRequestId: 0
                    };
                    this.loadTestFontId = 0;
                  }
                  get isSyncFontLoadingSupported() {
                    let supported = false;
                    if (typeof navigator === "undefined") {
                      supported = true;
                    } else {
                      const m2 = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                      if ((m2 == null ? void 0 : m2[1]) >= 14) {
                        supported = true;
                      }
                    }
                    return (0, _util2.shadow)(this, "isSyncFontLoadingSupported", supported);
                  }
                  _queueLoadingCallback(callback) {
                    function completeRequest() {
                      (0, _util2.assert)(!request.done, "completeRequest() cannot be called twice.");
                      request.done = true;
                      while (context.requests.length > 0 && context.requests[0].done) {
                        const otherRequest = context.requests.shift();
                        setTimeout(otherRequest.callback, 0);
                      }
                    }
                    const context = this.loadingContext;
                    const request = {
                      id: `pdfjs-font-loading-${context.nextRequestId++}`,
                      done: false,
                      complete: completeRequest,
                      callback
                    };
                    context.requests.push(request);
                    return request;
                  }
                  get _loadTestFont() {
                    const getLoadTestFont = function() {
                      return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
                    };
                    return (0, _util2.shadow)(this, "_loadTestFont", getLoadTestFont());
                  }
                  _prepareFontLoadEvent(rules, fonts, request) {
                    function int32(data2, offset) {
                      return data2.charCodeAt(offset) << 24 | data2.charCodeAt(offset + 1) << 16 | data2.charCodeAt(offset + 2) << 8 | data2.charCodeAt(offset + 3) & 255;
                    }
                    function spliceString(s2, offset, remove, insert) {
                      const chunk1 = s2.substring(0, offset);
                      const chunk2 = s2.substring(offset + remove);
                      return chunk1 + insert + chunk2;
                    }
                    let i2, ii;
                    const canvas = this._document.createElement("canvas");
                    canvas.width = 1;
                    canvas.height = 1;
                    const ctx = canvas.getContext("2d");
                    let called = 0;
                    function isFontReady(name, callback) {
                      called++;
                      if (called > 30) {
                        (0, _util2.warn)("Load test font never loaded.");
                        callback();
                        return;
                      }
                      ctx.font = "30px " + name;
                      ctx.fillText(".", 0, 20);
                      const imageData = ctx.getImageData(0, 0, 1, 1);
                      if (imageData.data[3] > 0) {
                        callback();
                        return;
                      }
                      setTimeout(isFontReady.bind(null, name, callback));
                    }
                    const loadTestFontId = `lt${Date.now()}${this.loadTestFontId++}`;
                    let data = this._loadTestFont;
                    const COMMENT_OFFSET = 976;
                    data = spliceString(data, COMMENT_OFFSET, loadTestFontId.length, loadTestFontId);
                    const CFF_CHECKSUM_OFFSET = 16;
                    const XXXX_VALUE = 1482184792;
                    let checksum = int32(data, CFF_CHECKSUM_OFFSET);
                    for (i2 = 0, ii = loadTestFontId.length - 3; i2 < ii; i2 += 4) {
                      checksum = checksum - XXXX_VALUE + int32(loadTestFontId, i2) | 0;
                    }
                    if (i2 < loadTestFontId.length) {
                      checksum = checksum - XXXX_VALUE + int32(loadTestFontId + "XXX", i2) | 0;
                    }
                    data = spliceString(data, CFF_CHECKSUM_OFFSET, 4, (0, _util2.string32)(checksum));
                    const url = `url(data:font/opentype;base64,${btoa(data)});`;
                    const rule = `@font-face {font-family:"${loadTestFontId}";src:${url}}`;
                    this.insertRule(rule);
                    const names = [];
                    for (const font of fonts) {
                      names.push(font.loadedName);
                    }
                    names.push(loadTestFontId);
                    const div = this._document.createElement("div");
                    div.style.visibility = "hidden";
                    div.style.width = div.style.height = "10px";
                    div.style.position = "absolute";
                    div.style.top = div.style.left = "0px";
                    for (const name of names) {
                      const span = this._document.createElement("span");
                      span.textContent = "Hi";
                      span.style.fontFamily = name;
                      div.appendChild(span);
                    }
                    this._document.body.appendChild(div);
                    isFontReady(loadTestFontId, () => {
                      this._document.body.removeChild(div);
                      request.complete();
                    });
                  }
                };
              }
              class FontFaceObject {
                constructor(translatedData, {
                  isEvalSupported = true,
                  disableFontFace = false,
                  ignoreErrors = false,
                  onUnsupportedFeature,
                  fontRegistry = null
                }) {
                  this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
                  for (const i2 in translatedData) {
                    this[i2] = translatedData[i2];
                  }
                  this.isEvalSupported = isEvalSupported !== false;
                  this.disableFontFace = disableFontFace === true;
                  this.ignoreErrors = ignoreErrors === true;
                  this._onUnsupportedFeature = onUnsupportedFeature;
                  this.fontRegistry = fontRegistry;
                }
                createNativeFontFace() {
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }
                  let nativeFontFace;
                  if (!this.cssFontInfo) {
                    nativeFontFace = new FontFace(this.loadedName, this.data, {});
                  } else {
                    const css = {
                      weight: this.cssFontInfo.fontWeight
                    };
                    if (this.cssFontInfo.italicAngle) {
                      css.style = `oblique ${this.cssFontInfo.italicAngle}deg`;
                    }
                    nativeFontFace = new FontFace(this.cssFontInfo.fontFamily, this.data, css);
                  }
                  if (this.fontRegistry) {
                    this.fontRegistry.registerFont(this);
                  }
                  return nativeFontFace;
                }
                createFontFaceRule() {
                  if (!this.data || this.disableFontFace) {
                    return null;
                  }
                  const data = (0, _util2.bytesToString)(this.data);
                  const url = `url(data:${this.mimetype};base64,${btoa(data)});`;
                  let rule;
                  if (!this.cssFontInfo) {
                    rule = `@font-face {font-family:"${this.loadedName}";src:${url}}`;
                  } else {
                    let css = `font-weight: ${this.cssFontInfo.fontWeight};`;
                    if (this.cssFontInfo.italicAngle) {
                      css += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`;
                    }
                    rule = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${css}src:${url}}`;
                  }
                  if (this.fontRegistry) {
                    this.fontRegistry.registerFont(this, url);
                  }
                  return rule;
                }
                getPathGenerator(objs, character) {
                  if (this.compiledGlyphs[character] !== void 0) {
                    return this.compiledGlyphs[character];
                  }
                  let cmds;
                  try {
                    cmds = objs.get(this.loadedName + "_path_" + character);
                  } catch (ex) {
                    if (!this.ignoreErrors) {
                      throw ex;
                    }
                    this._onUnsupportedFeature({
                      featureId: _util2.UNSUPPORTED_FEATURES.errorFontGetPath
                    });
                    (0, _util2.warn)(`getPathGenerator - ignoring character: "${ex}".`);
                    return this.compiledGlyphs[character] = function(c2, size) {
                    };
                  }
                  if (this.isEvalSupported && _util2.IsEvalSupportedCached.value) {
                    const jsBuf = [];
                    for (const current of cmds) {
                      const args = current.args !== void 0 ? current.args.join(",") : "";
                      jsBuf.push("c.", current.cmd, "(", args, ");\n");
                    }
                    return this.compiledGlyphs[character] = new Function("c", "size", jsBuf.join(""));
                  }
                  return this.compiledGlyphs[character] = function(c2, size) {
                    for (const current of cmds) {
                      if (current.cmd === "scale") {
                        current.args = [size, -size];
                      }
                      c2[current.cmd].apply(c2, current.args);
                    }
                  };
                }
              }
              exports2.FontFaceObject = FontFaceObject;
            },
            /* 7 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.NodeCMapReaderFactory = exports2.NodeCanvasFactory = void 0;
              var _display_utils2 = __w_pdfjs_require__2(1);
              var _is_node2 = __w_pdfjs_require__2(4);
              var _util2 = __w_pdfjs_require__2(2);
              let NodeCanvasFactory = class {
                constructor() {
                  (0, _util2.unreachable)("Not implemented: NodeCanvasFactory");
                }
              };
              exports2.NodeCanvasFactory = NodeCanvasFactory;
              let NodeCMapReaderFactory = class {
                constructor() {
                  (0, _util2.unreachable)("Not implemented: NodeCMapReaderFactory");
                }
              };
              exports2.NodeCMapReaderFactory = NodeCMapReaderFactory;
              if (_is_node2.isNodeJS) {
                exports2.NodeCanvasFactory = NodeCanvasFactory = class extends _display_utils2.BaseCanvasFactory {
                  create(width, height) {
                    if (width <= 0 || height <= 0) {
                      throw new Error("Invalid canvas size");
                    }
                    const Canvas = require_canvas();
                    const canvas = Canvas.createCanvas(width, height);
                    return {
                      canvas,
                      context: canvas.getContext("2d")
                    };
                  }
                };
                exports2.NodeCMapReaderFactory = NodeCMapReaderFactory = class extends _display_utils2.BaseCMapReaderFactory {
                  _fetchData(url, compressionType) {
                    return new Promise((resolve, reject) => {
                      const fs = require_fs();
                      fs.readFile(url, (error, data) => {
                        if (error || !data) {
                          reject(new Error(error));
                          return;
                        }
                        resolve({
                          cMapData: new Uint8Array(data),
                          compressionType
                        });
                      });
                    });
                  }
                };
              }
            },
            /* 8 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.AnnotationStorage = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              class AnnotationStorage {
                constructor() {
                  this._storage = /* @__PURE__ */ new Map();
                  this._modified = false;
                  this.onSetModified = null;
                  this.onResetModified = null;
                }
                getValue(key, defaultValue) {
                  const obj = this._storage.get(key);
                  return obj !== void 0 ? obj : defaultValue;
                }
                setValue(key, value) {
                  const obj = this._storage.get(key);
                  let modified = false;
                  if (obj !== void 0) {
                    for (const [entry, val] of Object.entries(value)) {
                      if (obj[entry] !== val) {
                        modified = true;
                        obj[entry] = val;
                      }
                    }
                  } else {
                    this._storage.set(key, value);
                    modified = true;
                  }
                  if (modified) {
                    this._setModified();
                  }
                }
                getAll() {
                  return this._storage.size > 0 ? (0, _util2.objectFromMap)(this._storage) : null;
                }
                get size() {
                  return this._storage.size;
                }
                _setModified() {
                  if (!this._modified) {
                    this._modified = true;
                    if (typeof this.onSetModified === "function") {
                      this.onSetModified();
                    }
                  }
                }
                resetModified() {
                  if (this._modified) {
                    this._modified = false;
                    if (typeof this.onResetModified === "function") {
                      this.onResetModified();
                    }
                  }
                }
                get serializable() {
                  return this._storage.size > 0 ? this._storage : null;
                }
              }
              exports2.AnnotationStorage = AnnotationStorage;
            },
            /* 9 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.apiCompatibilityParams = void 0;
              var _is_node2 = __w_pdfjs_require__2(4);
              const compatibilityParams = /* @__PURE__ */ Object.create(null);
              {
                (function checkFontFace() {
                  if (_is_node2.isNodeJS) {
                    compatibilityParams.disableFontFace = true;
                  }
                })();
              }
              const apiCompatibilityParams = Object.freeze(compatibilityParams);
              exports2.apiCompatibilityParams = apiCompatibilityParams;
            },
            /* 10 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.CanvasGraphics = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _pattern_helper = __w_pdfjs_require__2(11);
              const MIN_FONT_SIZE = 16;
              const MAX_FONT_SIZE = 100;
              const MAX_GROUP_SIZE = 4096;
              const COMPILE_TYPE3_GLYPHS = true;
              const MAX_SIZE_TO_COMPILE = 1e3;
              const FULL_CHUNK_HEIGHT = 16;
              const LINEWIDTH_SCALE_FACTOR = 1.000001;
              function addContextCurrentTransform(ctx) {
                if (ctx.mozCurrentTransform) {
                  return;
                }
                ctx._originalSave = ctx.save;
                ctx._originalRestore = ctx.restore;
                ctx._originalRotate = ctx.rotate;
                ctx._originalScale = ctx.scale;
                ctx._originalTranslate = ctx.translate;
                ctx._originalTransform = ctx.transform;
                ctx._originalSetTransform = ctx.setTransform;
                ctx._originalResetTransform = ctx.resetTransform;
                ctx._transformMatrix = ctx._transformMatrix || [1, 0, 0, 1, 0, 0];
                ctx._transformStack = [];
                try {
                  const desc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ctx), "lineWidth");
                  ctx._setLineWidth = desc.set;
                  ctx._getLineWidth = desc.get;
                  Object.defineProperty(ctx, "lineWidth", {
                    set: function setLineWidth(width) {
                      this._setLineWidth(width * LINEWIDTH_SCALE_FACTOR);
                    },
                    get: function getLineWidth() {
                      return this._getLineWidth();
                    }
                  });
                } catch (_) {
                }
                Object.defineProperty(ctx, "mozCurrentTransform", {
                  get: function getCurrentTransform() {
                    return this._transformMatrix;
                  }
                });
                Object.defineProperty(ctx, "mozCurrentTransformInverse", {
                  get: function getCurrentTransformInverse() {
                    const [a2, b, c2, d2, e2, f2] = this._transformMatrix;
                    const ad_bc = a2 * d2 - b * c2;
                    const bc_ad = b * c2 - a2 * d2;
                    return [d2 / ad_bc, b / bc_ad, c2 / bc_ad, a2 / ad_bc, (d2 * e2 - c2 * f2) / bc_ad, (b * e2 - a2 * f2) / ad_bc];
                  }
                });
                ctx.save = function ctxSave() {
                  const old = this._transformMatrix;
                  this._transformStack.push(old);
                  this._transformMatrix = old.slice(0, 6);
                  this._originalSave();
                };
                ctx.restore = function ctxRestore() {
                  const prev = this._transformStack.pop();
                  if (prev) {
                    this._transformMatrix = prev;
                    this._originalRestore();
                  }
                };
                ctx.translate = function ctxTranslate(x, y) {
                  const m2 = this._transformMatrix;
                  m2[4] = m2[0] * x + m2[2] * y + m2[4];
                  m2[5] = m2[1] * x + m2[3] * y + m2[5];
                  this._originalTranslate(x, y);
                };
                ctx.scale = function ctxScale(x, y) {
                  const m2 = this._transformMatrix;
                  m2[0] = m2[0] * x;
                  m2[1] = m2[1] * x;
                  m2[2] = m2[2] * y;
                  m2[3] = m2[3] * y;
                  this._originalScale(x, y);
                };
                ctx.transform = function ctxTransform(a2, b, c2, d2, e2, f2) {
                  const m2 = this._transformMatrix;
                  this._transformMatrix = [m2[0] * a2 + m2[2] * b, m2[1] * a2 + m2[3] * b, m2[0] * c2 + m2[2] * d2, m2[1] * c2 + m2[3] * d2, m2[0] * e2 + m2[2] * f2 + m2[4], m2[1] * e2 + m2[3] * f2 + m2[5]];
                  ctx._originalTransform(a2, b, c2, d2, e2, f2);
                };
                ctx.setTransform = function ctxSetTransform(a2, b, c2, d2, e2, f2) {
                  this._transformMatrix = [a2, b, c2, d2, e2, f2];
                  ctx._originalSetTransform(a2, b, c2, d2, e2, f2);
                };
                ctx.resetTransform = function ctxResetTransform() {
                  this._transformMatrix = [1, 0, 0, 1, 0, 0];
                  ctx._originalResetTransform();
                };
                ctx.rotate = function ctxRotate(angle) {
                  const cosValue = Math.cos(angle);
                  const sinValue = Math.sin(angle);
                  const m2 = this._transformMatrix;
                  this._transformMatrix = [m2[0] * cosValue + m2[2] * sinValue, m2[1] * cosValue + m2[3] * sinValue, m2[0] * -sinValue + m2[2] * cosValue, m2[1] * -sinValue + m2[3] * cosValue, m2[4], m2[5]];
                  this._originalRotate(angle);
                };
              }
              class CachedCanvases {
                constructor(canvasFactory) {
                  this.canvasFactory = canvasFactory;
                  this.cache = /* @__PURE__ */ Object.create(null);
                }
                getCanvas(id, width, height, trackTransform) {
                  let canvasEntry;
                  if (this.cache[id] !== void 0) {
                    canvasEntry = this.cache[id];
                    this.canvasFactory.reset(canvasEntry, width, height);
                    canvasEntry.context.setTransform(1, 0, 0, 1, 0, 0);
                  } else {
                    canvasEntry = this.canvasFactory.create(width, height);
                    this.cache[id] = canvasEntry;
                  }
                  if (trackTransform) {
                    addContextCurrentTransform(canvasEntry.context);
                  }
                  return canvasEntry;
                }
                clear() {
                  for (const id in this.cache) {
                    const canvasEntry = this.cache[id];
                    this.canvasFactory.destroy(canvasEntry);
                    delete this.cache[id];
                  }
                }
              }
              function compileType3Glyph(imgData) {
                const POINT_TO_PROCESS_LIMIT = 1e3;
                const POINT_TYPES = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]);
                const width = imgData.width, height = imgData.height, width1 = width + 1;
                let i2, ii, j, j0;
                const points = new Uint8Array(width1 * (height + 1));
                const lineSize = width + 7 & ~7, data0 = imgData.data;
                const data = new Uint8Array(lineSize * height);
                let pos = 0;
                for (i2 = 0, ii = data0.length; i2 < ii; i2++) {
                  const elem = data0[i2];
                  let mask = 128;
                  while (mask > 0) {
                    data[pos++] = elem & mask ? 0 : 255;
                    mask >>= 1;
                  }
                }
                let count = 0;
                pos = 0;
                if (data[pos] !== 0) {
                  points[0] = 1;
                  ++count;
                }
                for (j = 1; j < width; j++) {
                  if (data[pos] !== data[pos + 1]) {
                    points[j] = data[pos] ? 2 : 1;
                    ++count;
                  }
                  pos++;
                }
                if (data[pos] !== 0) {
                  points[j] = 2;
                  ++count;
                }
                for (i2 = 1; i2 < height; i2++) {
                  pos = i2 * lineSize;
                  j0 = i2 * width1;
                  if (data[pos - lineSize] !== data[pos]) {
                    points[j0] = data[pos] ? 1 : 8;
                    ++count;
                  }
                  let sum = (data[pos] ? 4 : 0) + (data[pos - lineSize] ? 8 : 0);
                  for (j = 1; j < width; j++) {
                    sum = (sum >> 2) + (data[pos + 1] ? 4 : 0) + (data[pos - lineSize + 1] ? 8 : 0);
                    if (POINT_TYPES[sum]) {
                      points[j0 + j] = POINT_TYPES[sum];
                      ++count;
                    }
                    pos++;
                  }
                  if (data[pos - lineSize] !== data[pos]) {
                    points[j0 + j] = data[pos] ? 2 : 4;
                    ++count;
                  }
                  if (count > POINT_TO_PROCESS_LIMIT) {
                    return null;
                  }
                }
                pos = lineSize * (height - 1);
                j0 = i2 * width1;
                if (data[pos] !== 0) {
                  points[j0] = 8;
                  ++count;
                }
                for (j = 1; j < width; j++) {
                  if (data[pos] !== data[pos + 1]) {
                    points[j0 + j] = data[pos] ? 4 : 8;
                    ++count;
                  }
                  pos++;
                }
                if (data[pos] !== 0) {
                  points[j0 + j] = 4;
                  ++count;
                }
                if (count > POINT_TO_PROCESS_LIMIT) {
                  return null;
                }
                const steps = new Int32Array([0, width1, -1, 0, -width1, 0, 0, 0, 1]);
                const outlines = [];
                for (i2 = 0; count && i2 <= height; i2++) {
                  let p2 = i2 * width1;
                  const end = p2 + width;
                  while (p2 < end && !points[p2]) {
                    p2++;
                  }
                  if (p2 === end) {
                    continue;
                  }
                  const coords = [p2 % width1, i2];
                  const p0 = p2;
                  let type = points[p2];
                  do {
                    const step = steps[type];
                    do {
                      p2 += step;
                    } while (!points[p2]);
                    const pp = points[p2];
                    if (pp !== 5 && pp !== 10) {
                      type = pp;
                      points[p2] = 0;
                    } else {
                      type = pp & 51 * type >> 4;
                      points[p2] &= type >> 2 | type << 2;
                    }
                    coords.push(p2 % width1, p2 / width1 | 0);
                    if (!points[p2]) {
                      --count;
                    }
                  } while (p0 !== p2);
                  outlines.push(coords);
                  --i2;
                }
                const drawOutline = function(c2) {
                  c2.save();
                  c2.scale(1 / width, -1 / height);
                  c2.translate(0, -height);
                  c2.beginPath();
                  for (let k = 0, kk = outlines.length; k < kk; k++) {
                    const o2 = outlines[k];
                    c2.moveTo(o2[0], o2[1]);
                    for (let l2 = 2, ll = o2.length; l2 < ll; l2 += 2) {
                      c2.lineTo(o2[l2], o2[l2 + 1]);
                    }
                  }
                  c2.fill();
                  c2.beginPath();
                  c2.restore();
                };
                return drawOutline;
              }
              class CanvasExtraState {
                constructor() {
                  this.alphaIsShape = false;
                  this.fontSize = 0;
                  this.fontSizeScale = 1;
                  this.textMatrix = _util2.IDENTITY_MATRIX;
                  this.textMatrixScale = 1;
                  this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
                  this.leading = 0;
                  this.x = 0;
                  this.y = 0;
                  this.lineX = 0;
                  this.lineY = 0;
                  this.charSpacing = 0;
                  this.wordSpacing = 0;
                  this.textHScale = 1;
                  this.textRenderingMode = _util2.TextRenderingMode.FILL;
                  this.textRise = 0;
                  this.fillColor = "#000000";
                  this.strokeColor = "#000000";
                  this.patternFill = false;
                  this.fillAlpha = 1;
                  this.strokeAlpha = 1;
                  this.lineWidth = 1;
                  this.activeSMask = null;
                  this.resumeSMaskCtx = null;
                  this.transferMaps = null;
                }
                clone() {
                  return Object.create(this);
                }
                setCurrentPoint(x, y) {
                  this.x = x;
                  this.y = y;
                }
              }
              const CanvasGraphics = function CanvasGraphicsClosure() {
                const EXECUTION_TIME = 15;
                const EXECUTION_STEPS = 10;
                function putBinaryImageData(ctx, imgData, transferMaps = null) {
                  if (typeof ImageData !== "undefined" && imgData instanceof ImageData) {
                    ctx.putImageData(imgData, 0, 0);
                    return;
                  }
                  const height = imgData.height, width = imgData.width;
                  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                  let srcPos = 0, destPos;
                  const src = imgData.data;
                  const dest = chunkImgData.data;
                  let i2, j, thisChunkHeight, elemsInThisChunk;
                  let transferMapRed, transferMapGreen, transferMapBlue, transferMapGray;
                  if (transferMaps) {
                    switch (transferMaps.length) {
                      case 1:
                        transferMapRed = transferMaps[0];
                        transferMapGreen = transferMaps[0];
                        transferMapBlue = transferMaps[0];
                        transferMapGray = transferMaps[0];
                        break;
                      case 4:
                        transferMapRed = transferMaps[0];
                        transferMapGreen = transferMaps[1];
                        transferMapBlue = transferMaps[2];
                        transferMapGray = transferMaps[3];
                        break;
                    }
                  }
                  if (imgData.kind === _util2.ImageKind.GRAYSCALE_1BPP) {
                    const srcLength = src.byteLength;
                    const dest32 = new Uint32Array(dest.buffer, 0, dest.byteLength >> 2);
                    const dest32DataLength = dest32.length;
                    const fullSrcDiff = width + 7 >> 3;
                    let white = 4294967295;
                    let black = _util2.IsLittleEndianCached.value ? 4278190080 : 255;
                    if (transferMapGray) {
                      if (transferMapGray[0] === 255 && transferMapGray[255] === 0) {
                        [white, black] = [black, white];
                      }
                    }
                    for (i2 = 0; i2 < totalChunks; i2++) {
                      thisChunkHeight = i2 < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                      destPos = 0;
                      for (j = 0; j < thisChunkHeight; j++) {
                        const srcDiff = srcLength - srcPos;
                        let k = 0;
                        const kEnd = srcDiff > fullSrcDiff ? width : srcDiff * 8 - 7;
                        const kEndUnrolled = kEnd & ~7;
                        let mask = 0;
                        let srcByte = 0;
                        for (; k < kEndUnrolled; k += 8) {
                          srcByte = src[srcPos++];
                          dest32[destPos++] = srcByte & 128 ? white : black;
                          dest32[destPos++] = srcByte & 64 ? white : black;
                          dest32[destPos++] = srcByte & 32 ? white : black;
                          dest32[destPos++] = srcByte & 16 ? white : black;
                          dest32[destPos++] = srcByte & 8 ? white : black;
                          dest32[destPos++] = srcByte & 4 ? white : black;
                          dest32[destPos++] = srcByte & 2 ? white : black;
                          dest32[destPos++] = srcByte & 1 ? white : black;
                        }
                        for (; k < kEnd; k++) {
                          if (mask === 0) {
                            srcByte = src[srcPos++];
                            mask = 128;
                          }
                          dest32[destPos++] = srcByte & mask ? white : black;
                          mask >>= 1;
                        }
                      }
                      while (destPos < dest32DataLength) {
                        dest32[destPos++] = 0;
                      }
                      ctx.putImageData(chunkImgData, 0, i2 * FULL_CHUNK_HEIGHT);
                    }
                  } else if (imgData.kind === _util2.ImageKind.RGBA_32BPP) {
                    const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
                    j = 0;
                    elemsInThisChunk = width * FULL_CHUNK_HEIGHT * 4;
                    for (i2 = 0; i2 < fullChunks; i2++) {
                      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                      srcPos += elemsInThisChunk;
                      if (hasTransferMaps) {
                        for (let k = 0; k < elemsInThisChunk; k += 4) {
                          if (transferMapRed) {
                            dest[k + 0] = transferMapRed[dest[k + 0]];
                          }
                          if (transferMapGreen) {
                            dest[k + 1] = transferMapGreen[dest[k + 1]];
                          }
                          if (transferMapBlue) {
                            dest[k + 2] = transferMapBlue[dest[k + 2]];
                          }
                        }
                      }
                      ctx.putImageData(chunkImgData, 0, j);
                      j += FULL_CHUNK_HEIGHT;
                    }
                    if (i2 < totalChunks) {
                      elemsInThisChunk = width * partialChunkHeight * 4;
                      dest.set(src.subarray(srcPos, srcPos + elemsInThisChunk));
                      if (hasTransferMaps) {
                        for (let k = 0; k < elemsInThisChunk; k += 4) {
                          if (transferMapRed) {
                            dest[k + 0] = transferMapRed[dest[k + 0]];
                          }
                          if (transferMapGreen) {
                            dest[k + 1] = transferMapGreen[dest[k + 1]];
                          }
                          if (transferMapBlue) {
                            dest[k + 2] = transferMapBlue[dest[k + 2]];
                          }
                        }
                      }
                      ctx.putImageData(chunkImgData, 0, j);
                    }
                  } else if (imgData.kind === _util2.ImageKind.RGB_24BPP) {
                    const hasTransferMaps = !!(transferMapRed || transferMapGreen || transferMapBlue);
                    thisChunkHeight = FULL_CHUNK_HEIGHT;
                    elemsInThisChunk = width * thisChunkHeight;
                    for (i2 = 0; i2 < totalChunks; i2++) {
                      if (i2 >= fullChunks) {
                        thisChunkHeight = partialChunkHeight;
                        elemsInThisChunk = width * thisChunkHeight;
                      }
                      destPos = 0;
                      for (j = elemsInThisChunk; j--; ) {
                        dest[destPos++] = src[srcPos++];
                        dest[destPos++] = src[srcPos++];
                        dest[destPos++] = src[srcPos++];
                        dest[destPos++] = 255;
                      }
                      if (hasTransferMaps) {
                        for (let k = 0; k < destPos; k += 4) {
                          if (transferMapRed) {
                            dest[k + 0] = transferMapRed[dest[k + 0]];
                          }
                          if (transferMapGreen) {
                            dest[k + 1] = transferMapGreen[dest[k + 1]];
                          }
                          if (transferMapBlue) {
                            dest[k + 2] = transferMapBlue[dest[k + 2]];
                          }
                        }
                      }
                      ctx.putImageData(chunkImgData, 0, i2 * FULL_CHUNK_HEIGHT);
                    }
                  } else {
                    throw new Error(`bad image kind: ${imgData.kind}`);
                  }
                }
                function putBinaryImageMask(ctx, imgData) {
                  const height = imgData.height, width = imgData.width;
                  const partialChunkHeight = height % FULL_CHUNK_HEIGHT;
                  const fullChunks = (height - partialChunkHeight) / FULL_CHUNK_HEIGHT;
                  const totalChunks = partialChunkHeight === 0 ? fullChunks : fullChunks + 1;
                  const chunkImgData = ctx.createImageData(width, FULL_CHUNK_HEIGHT);
                  let srcPos = 0;
                  const src = imgData.data;
                  const dest = chunkImgData.data;
                  for (let i2 = 0; i2 < totalChunks; i2++) {
                    const thisChunkHeight = i2 < fullChunks ? FULL_CHUNK_HEIGHT : partialChunkHeight;
                    let destPos = 3;
                    for (let j = 0; j < thisChunkHeight; j++) {
                      let elem, mask = 0;
                      for (let k = 0; k < width; k++) {
                        if (!mask) {
                          elem = src[srcPos++];
                          mask = 128;
                        }
                        dest[destPos] = elem & mask ? 0 : 255;
                        destPos += 4;
                        mask >>= 1;
                      }
                    }
                    ctx.putImageData(chunkImgData, 0, i2 * FULL_CHUNK_HEIGHT);
                  }
                }
                function copyCtxState(sourceCtx, destCtx) {
                  const properties = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
                  for (let i2 = 0, ii = properties.length; i2 < ii; i2++) {
                    const property = properties[i2];
                    if (sourceCtx[property] !== void 0) {
                      destCtx[property] = sourceCtx[property];
                    }
                  }
                  if (sourceCtx.setLineDash !== void 0) {
                    destCtx.setLineDash(sourceCtx.getLineDash());
                    destCtx.lineDashOffset = sourceCtx.lineDashOffset;
                  }
                }
                function resetCtxToDefault(ctx) {
                  ctx.strokeStyle = "#000000";
                  ctx.fillStyle = "#000000";
                  ctx.fillRule = "nonzero";
                  ctx.globalAlpha = 1;
                  ctx.lineWidth = 1;
                  ctx.lineCap = "butt";
                  ctx.lineJoin = "miter";
                  ctx.miterLimit = 10;
                  ctx.globalCompositeOperation = "source-over";
                  ctx.font = "10px sans-serif";
                  if (ctx.setLineDash !== void 0) {
                    ctx.setLineDash([]);
                    ctx.lineDashOffset = 0;
                  }
                }
                function composeSMaskBackdrop(bytes, r0, g0, b0) {
                  const length = bytes.length;
                  for (let i2 = 3; i2 < length; i2 += 4) {
                    const alpha = bytes[i2];
                    if (alpha === 0) {
                      bytes[i2 - 3] = r0;
                      bytes[i2 - 2] = g0;
                      bytes[i2 - 1] = b0;
                    } else if (alpha < 255) {
                      const alpha_ = 255 - alpha;
                      bytes[i2 - 3] = bytes[i2 - 3] * alpha + r0 * alpha_ >> 8;
                      bytes[i2 - 2] = bytes[i2 - 2] * alpha + g0 * alpha_ >> 8;
                      bytes[i2 - 1] = bytes[i2 - 1] * alpha + b0 * alpha_ >> 8;
                    }
                  }
                }
                function composeSMaskAlpha(maskData, layerData, transferMap) {
                  const length = maskData.length;
                  const scale = 1 / 255;
                  for (let i2 = 3; i2 < length; i2 += 4) {
                    const alpha = transferMap ? transferMap[maskData[i2]] : maskData[i2];
                    layerData[i2] = layerData[i2] * alpha * scale | 0;
                  }
                }
                function composeSMaskLuminosity(maskData, layerData, transferMap) {
                  const length = maskData.length;
                  for (let i2 = 3; i2 < length; i2 += 4) {
                    const y = maskData[i2 - 3] * 77 + maskData[i2 - 2] * 152 + maskData[i2 - 1] * 28;
                    layerData[i2] = transferMap ? layerData[i2] * transferMap[y >> 8] >> 8 : layerData[i2] * y >> 16;
                  }
                }
                function genericComposeSMask(maskCtx, layerCtx, width, height, subtype, backdrop, transferMap) {
                  const hasBackdrop = !!backdrop;
                  const r0 = hasBackdrop ? backdrop[0] : 0;
                  const g0 = hasBackdrop ? backdrop[1] : 0;
                  const b0 = hasBackdrop ? backdrop[2] : 0;
                  let composeFn;
                  if (subtype === "Luminosity") {
                    composeFn = composeSMaskLuminosity;
                  } else {
                    composeFn = composeSMaskAlpha;
                  }
                  const PIXELS_TO_PROCESS = 1048576;
                  const chunkSize = Math.min(height, Math.ceil(PIXELS_TO_PROCESS / width));
                  for (let row = 0; row < height; row += chunkSize) {
                    const chunkHeight = Math.min(chunkSize, height - row);
                    const maskData = maskCtx.getImageData(0, row, width, chunkHeight);
                    const layerData = layerCtx.getImageData(0, row, width, chunkHeight);
                    if (hasBackdrop) {
                      composeSMaskBackdrop(maskData.data, r0, g0, b0);
                    }
                    composeFn(maskData.data, layerData.data, transferMap);
                    maskCtx.putImageData(layerData, 0, row);
                  }
                }
                function composeSMask(ctx, smask, layerCtx) {
                  const mask = smask.canvas;
                  const maskCtx = smask.context;
                  ctx.setTransform(smask.scaleX, 0, 0, smask.scaleY, smask.offsetX, smask.offsetY);
                  genericComposeSMask(maskCtx, layerCtx, mask.width, mask.height, smask.subtype, smask.backdrop, smask.transferMap);
                  ctx.drawImage(mask, 0, 0);
                }
                const LINE_CAP_STYLES = ["butt", "round", "square"];
                const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
                const NORMAL_CLIP = {};
                const EO_CLIP = {};
                class CanvasGraphics2 {
                  constructor(canvasCtx, commonObjs, objs, canvasFactory, imageLayer, optionalContentConfig) {
                    this.ctx = canvasCtx;
                    this.current = new CanvasExtraState();
                    this.stateStack = [];
                    this.pendingClip = null;
                    this.pendingEOFill = false;
                    this.res = null;
                    this.xobjs = null;
                    this.commonObjs = commonObjs;
                    this.objs = objs;
                    this.canvasFactory = canvasFactory;
                    this.imageLayer = imageLayer;
                    this.groupStack = [];
                    this.processingType3 = null;
                    this.baseTransform = null;
                    this.baseTransformStack = [];
                    this.groupLevel = 0;
                    this.smaskStack = [];
                    this.smaskCounter = 0;
                    this.tempSMask = null;
                    this.contentVisible = true;
                    this.markedContentStack = [];
                    this.optionalContentConfig = optionalContentConfig;
                    this.cachedCanvases = new CachedCanvases(this.canvasFactory);
                    if (canvasCtx) {
                      addContextCurrentTransform(canvasCtx);
                    }
                    this._cachedGetSinglePixelWidth = null;
                  }
                  beginDrawing({
                    transform,
                    viewport,
                    transparency = false,
                    background = null
                  }) {
                    const width = this.ctx.canvas.width;
                    const height = this.ctx.canvas.height;
                    this.ctx.save();
                    this.ctx.fillStyle = background || "rgb(255, 255, 255)";
                    this.ctx.fillRect(0, 0, width, height);
                    this.ctx.restore();
                    if (transparency) {
                      const transparentCanvas = this.cachedCanvases.getCanvas("transparent", width, height, true);
                      this.compositeCtx = this.ctx;
                      this.transparentCanvas = transparentCanvas.canvas;
                      this.ctx = transparentCanvas.context;
                      this.ctx.save();
                      this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform);
                    }
                    this.ctx.save();
                    resetCtxToDefault(this.ctx);
                    if (transform) {
                      this.ctx.transform.apply(this.ctx, transform);
                    }
                    this.ctx.transform.apply(this.ctx, viewport.transform);
                    this.baseTransform = this.ctx.mozCurrentTransform.slice();
                    this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]);
                    if (this.imageLayer) {
                      this.imageLayer.beginLayout();
                    }
                  }
                  executeOperatorList(operatorList, executionStartIdx, continueCallback, stepper) {
                    const argsArray = operatorList.argsArray;
                    const fnArray = operatorList.fnArray;
                    let i2 = executionStartIdx || 0;
                    const argsArrayLen = argsArray.length;
                    if (argsArrayLen === i2) {
                      return i2;
                    }
                    const chunkOperations = argsArrayLen - i2 > EXECUTION_STEPS && typeof continueCallback === "function";
                    const endTime = chunkOperations ? Date.now() + EXECUTION_TIME : 0;
                    let steps = 0;
                    const commonObjs = this.commonObjs;
                    const objs = this.objs;
                    let fnId;
                    while (true) {
                      if (stepper !== void 0 && i2 === stepper.nextBreakPoint) {
                        stepper.breakIt(i2, continueCallback);
                        return i2;
                      }
                      fnId = fnArray[i2];
                      if (fnId !== _util2.OPS.dependency) {
                        this[fnId].apply(this, argsArray[i2]);
                      } else {
                        for (const depObjId of argsArray[i2]) {
                          const objsPool = depObjId.startsWith("g_") ? commonObjs : objs;
                          if (!objsPool.has(depObjId)) {
                            objsPool.get(depObjId, continueCallback);
                            return i2;
                          }
                        }
                      }
                      i2++;
                      if (i2 === argsArrayLen) {
                        return i2;
                      }
                      if (chunkOperations && ++steps > EXECUTION_STEPS) {
                        if (Date.now() > endTime) {
                          continueCallback();
                          return i2;
                        }
                        steps = 0;
                      }
                    }
                  }
                  endDrawing() {
                    while (this.stateStack.length || this.current.activeSMask !== null) {
                      this.restore();
                    }
                    this.ctx.restore();
                    if (this.transparentCanvas) {
                      this.ctx = this.compositeCtx;
                      this.ctx.save();
                      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                      this.ctx.drawImage(this.transparentCanvas, 0, 0);
                      this.ctx.restore();
                      this.transparentCanvas = null;
                    }
                    this.cachedCanvases.clear();
                    if (this.imageLayer) {
                      this.imageLayer.endLayout();
                    }
                  }
                  setLineWidth(width) {
                    this.current.lineWidth = width;
                    this.ctx.lineWidth = width;
                  }
                  setLineCap(style) {
                    this.ctx.lineCap = LINE_CAP_STYLES[style];
                  }
                  setLineJoin(style) {
                    this.ctx.lineJoin = LINE_JOIN_STYLES[style];
                  }
                  setMiterLimit(limit) {
                    this.ctx.miterLimit = limit;
                  }
                  setDash(dashArray, dashPhase) {
                    const ctx = this.ctx;
                    if (ctx.setLineDash !== void 0) {
                      ctx.setLineDash(dashArray);
                      ctx.lineDashOffset = dashPhase;
                    }
                  }
                  setRenderingIntent(intent) {
                  }
                  setFlatness(flatness) {
                  }
                  setGState(states) {
                    for (let i2 = 0, ii = states.length; i2 < ii; i2++) {
                      const state = states[i2];
                      const key = state[0];
                      const value = state[1];
                      switch (key) {
                        case "LW":
                          this.setLineWidth(value);
                          break;
                        case "LC":
                          this.setLineCap(value);
                          break;
                        case "LJ":
                          this.setLineJoin(value);
                          break;
                        case "ML":
                          this.setMiterLimit(value);
                          break;
                        case "D":
                          this.setDash(value[0], value[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(value);
                          break;
                        case "FL":
                          this.setFlatness(value);
                          break;
                        case "Font":
                          this.setFont(value[0], value[1]);
                          break;
                        case "CA":
                          this.current.strokeAlpha = state[1];
                          break;
                        case "ca":
                          this.current.fillAlpha = state[1];
                          this.ctx.globalAlpha = state[1];
                          break;
                        case "BM":
                          this.ctx.globalCompositeOperation = value;
                          break;
                        case "SMask":
                          if (this.current.activeSMask) {
                            if (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask) {
                              this.suspendSMaskGroup();
                            } else {
                              this.endSMaskGroup();
                            }
                          }
                          this.current.activeSMask = value ? this.tempSMask : null;
                          if (this.current.activeSMask) {
                            this.beginSMaskGroup();
                          }
                          this.tempSMask = null;
                          break;
                        case "TR":
                          this.current.transferMaps = value;
                      }
                    }
                  }
                  beginSMaskGroup() {
                    const activeSMask = this.current.activeSMask;
                    const drawnWidth = activeSMask.canvas.width;
                    const drawnHeight = activeSMask.canvas.height;
                    const cacheId = "smaskGroupAt" + this.groupLevel;
                    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
                    const currentCtx = this.ctx;
                    const currentTransform = currentCtx.mozCurrentTransform;
                    this.ctx.save();
                    const groupCtx = scratchCanvas.context;
                    groupCtx.scale(1 / activeSMask.scaleX, 1 / activeSMask.scaleY);
                    groupCtx.translate(-activeSMask.offsetX, -activeSMask.offsetY);
                    groupCtx.transform.apply(groupCtx, currentTransform);
                    activeSMask.startTransformInverse = groupCtx.mozCurrentTransformInverse;
                    copyCtxState(currentCtx, groupCtx);
                    this.ctx = groupCtx;
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                    this.groupStack.push(currentCtx);
                    this.groupLevel++;
                  }
                  suspendSMaskGroup() {
                    const groupCtx = this.ctx;
                    this.groupLevel--;
                    this.ctx = this.groupStack.pop();
                    composeSMask(this.ctx, this.current.activeSMask, groupCtx);
                    this.ctx.restore();
                    this.ctx.save();
                    copyCtxState(groupCtx, this.ctx);
                    this.current.resumeSMaskCtx = groupCtx;
                    const deltaTransform = _util2.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, deltaTransform);
                    groupCtx.save();
                    groupCtx.setTransform(1, 0, 0, 1, 0, 0);
                    groupCtx.clearRect(0, 0, groupCtx.canvas.width, groupCtx.canvas.height);
                    groupCtx.restore();
                  }
                  resumeSMaskGroup() {
                    const groupCtx = this.current.resumeSMaskCtx;
                    const currentCtx = this.ctx;
                    this.ctx = groupCtx;
                    this.groupStack.push(currentCtx);
                    this.groupLevel++;
                  }
                  endSMaskGroup() {
                    const groupCtx = this.ctx;
                    this.groupLevel--;
                    this.ctx = this.groupStack.pop();
                    composeSMask(this.ctx, this.current.activeSMask, groupCtx);
                    this.ctx.restore();
                    copyCtxState(groupCtx, this.ctx);
                    const deltaTransform = _util2.Util.transform(this.current.activeSMask.startTransformInverse, groupCtx.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, deltaTransform);
                  }
                  save() {
                    this.ctx.save();
                    const old = this.current;
                    this.stateStack.push(old);
                    this.current = old.clone();
                    this.current.resumeSMaskCtx = null;
                  }
                  restore() {
                    if (this.current.resumeSMaskCtx) {
                      this.resumeSMaskGroup();
                    }
                    if (this.current.activeSMask !== null && (this.stateStack.length === 0 || this.stateStack[this.stateStack.length - 1].activeSMask !== this.current.activeSMask)) {
                      this.endSMaskGroup();
                    }
                    if (this.stateStack.length !== 0) {
                      this.current = this.stateStack.pop();
                      this.ctx.restore();
                      this.pendingClip = null;
                      this._cachedGetSinglePixelWidth = null;
                    } else {
                      this.current.activeSMask = null;
                    }
                  }
                  transform(a2, b, c2, d2, e2, f2) {
                    this.ctx.transform(a2, b, c2, d2, e2, f2);
                    this._cachedGetSinglePixelWidth = null;
                  }
                  constructPath(ops, args) {
                    const ctx = this.ctx;
                    const current = this.current;
                    let x = current.x, y = current.y;
                    for (let i2 = 0, j = 0, ii = ops.length; i2 < ii; i2++) {
                      switch (ops[i2] | 0) {
                        case _util2.OPS.rectangle:
                          x = args[j++];
                          y = args[j++];
                          const width = args[j++];
                          const height = args[j++];
                          const xw = x + width;
                          const yh = y + height;
                          ctx.moveTo(x, y);
                          if (width === 0 || height === 0) {
                            ctx.lineTo(xw, yh);
                          } else {
                            ctx.lineTo(xw, y);
                            ctx.lineTo(xw, yh);
                            ctx.lineTo(x, yh);
                          }
                          ctx.closePath();
                          break;
                        case _util2.OPS.moveTo:
                          x = args[j++];
                          y = args[j++];
                          ctx.moveTo(x, y);
                          break;
                        case _util2.OPS.lineTo:
                          x = args[j++];
                          y = args[j++];
                          ctx.lineTo(x, y);
                          break;
                        case _util2.OPS.curveTo:
                          x = args[j + 4];
                          y = args[j + 5];
                          ctx.bezierCurveTo(args[j], args[j + 1], args[j + 2], args[j + 3], x, y);
                          j += 6;
                          break;
                        case _util2.OPS.curveTo2:
                          ctx.bezierCurveTo(x, y, args[j], args[j + 1], args[j + 2], args[j + 3]);
                          x = args[j + 2];
                          y = args[j + 3];
                          j += 4;
                          break;
                        case _util2.OPS.curveTo3:
                          x = args[j + 2];
                          y = args[j + 3];
                          ctx.bezierCurveTo(args[j], args[j + 1], x, y, x, y);
                          j += 4;
                          break;
                        case _util2.OPS.closePath:
                          ctx.closePath();
                          break;
                      }
                    }
                    current.setCurrentPoint(x, y);
                  }
                  closePath() {
                    this.ctx.closePath();
                  }
                  stroke(consumePath) {
                    consumePath = typeof consumePath !== "undefined" ? consumePath : true;
                    const ctx = this.ctx;
                    const strokeColor = this.current.strokeColor;
                    ctx.globalAlpha = this.current.strokeAlpha;
                    if (this.contentVisible) {
                      if (typeof strokeColor === "object" && (strokeColor == null ? void 0 : strokeColor.getPattern)) {
                        const lineWidth = this.getSinglePixelWidth();
                        ctx.save();
                        ctx.strokeStyle = strokeColor.getPattern(ctx, this);
                        ctx.lineWidth = Math.max(lineWidth, this.current.lineWidth);
                        ctx.stroke();
                        ctx.restore();
                      } else {
                        const lineWidth = this.getSinglePixelWidth();
                        if (lineWidth < 0 && -lineWidth >= this.current.lineWidth) {
                          ctx.save();
                          ctx.resetTransform();
                          ctx.lineWidth = Math.round(this._combinedScaleFactor);
                          ctx.stroke();
                          ctx.restore();
                        } else {
                          ctx.lineWidth = Math.max(lineWidth, this.current.lineWidth);
                          ctx.stroke();
                        }
                      }
                    }
                    if (consumePath) {
                      this.consumePath();
                    }
                    ctx.globalAlpha = this.current.fillAlpha;
                  }
                  closeStroke() {
                    this.closePath();
                    this.stroke();
                  }
                  fill(consumePath) {
                    consumePath = typeof consumePath !== "undefined" ? consumePath : true;
                    const ctx = this.ctx;
                    const fillColor = this.current.fillColor;
                    const isPatternFill = this.current.patternFill;
                    let needRestore = false;
                    if (isPatternFill) {
                      ctx.save();
                      ctx.fillStyle = fillColor.getPattern(ctx, this);
                      needRestore = true;
                    }
                    if (this.contentVisible) {
                      if (this.pendingEOFill) {
                        ctx.fill("evenodd");
                        this.pendingEOFill = false;
                      } else {
                        ctx.fill();
                      }
                    }
                    if (needRestore) {
                      ctx.restore();
                    }
                    if (consumePath) {
                      this.consumePath();
                    }
                  }
                  eoFill() {
                    this.pendingEOFill = true;
                    this.fill();
                  }
                  fillStroke() {
                    this.fill(false);
                    this.stroke(false);
                    this.consumePath();
                  }
                  eoFillStroke() {
                    this.pendingEOFill = true;
                    this.fillStroke();
                  }
                  closeFillStroke() {
                    this.closePath();
                    this.fillStroke();
                  }
                  closeEOFillStroke() {
                    this.pendingEOFill = true;
                    this.closePath();
                    this.fillStroke();
                  }
                  endPath() {
                    this.consumePath();
                  }
                  clip() {
                    this.pendingClip = NORMAL_CLIP;
                  }
                  eoClip() {
                    this.pendingClip = EO_CLIP;
                  }
                  beginText() {
                    this.current.textMatrix = _util2.IDENTITY_MATRIX;
                    this.current.textMatrixScale = 1;
                    this.current.x = this.current.lineX = 0;
                    this.current.y = this.current.lineY = 0;
                  }
                  endText() {
                    const paths = this.pendingTextPaths;
                    const ctx = this.ctx;
                    if (paths === void 0) {
                      ctx.beginPath();
                      return;
                    }
                    ctx.save();
                    ctx.beginPath();
                    for (let i2 = 0; i2 < paths.length; i2++) {
                      const path = paths[i2];
                      ctx.setTransform.apply(ctx, path.transform);
                      ctx.translate(path.x, path.y);
                      path.addToPath(ctx, path.fontSize);
                    }
                    ctx.restore();
                    ctx.clip();
                    ctx.beginPath();
                    delete this.pendingTextPaths;
                  }
                  setCharSpacing(spacing) {
                    this.current.charSpacing = spacing;
                  }
                  setWordSpacing(spacing) {
                    this.current.wordSpacing = spacing;
                  }
                  setHScale(scale) {
                    this.current.textHScale = scale / 100;
                  }
                  setLeading(leading) {
                    this.current.leading = -leading;
                  }
                  setFont(fontRefName, size) {
                    const fontObj = this.commonObjs.get(fontRefName);
                    const current = this.current;
                    if (!fontObj) {
                      throw new Error(`Can't find font for ${fontRefName}`);
                    }
                    current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                    if (current.fontMatrix[0] === 0 || current.fontMatrix[3] === 0) {
                      (0, _util2.warn)("Invalid font matrix for font " + fontRefName);
                    }
                    if (size < 0) {
                      size = -size;
                      current.fontDirection = -1;
                    } else {
                      current.fontDirection = 1;
                    }
                    this.current.font = fontObj;
                    this.current.fontSize = size;
                    if (fontObj.isType3Font) {
                      return;
                    }
                    const name = fontObj.loadedName || "sans-serif";
                    let bold = "normal";
                    if (fontObj.black) {
                      bold = "900";
                    } else if (fontObj.bold) {
                      bold = "bold";
                    }
                    const italic = fontObj.italic ? "italic" : "normal";
                    const typeface = `"${name}", ${fontObj.fallbackName}`;
                    let browserFontSize = size;
                    if (size < MIN_FONT_SIZE) {
                      browserFontSize = MIN_FONT_SIZE;
                    } else if (size > MAX_FONT_SIZE) {
                      browserFontSize = MAX_FONT_SIZE;
                    }
                    this.current.fontSizeScale = size / browserFontSize;
                    this.ctx.font = `${italic} ${bold} ${browserFontSize}px ${typeface}`;
                  }
                  setTextRenderingMode(mode) {
                    this.current.textRenderingMode = mode;
                  }
                  setTextRise(rise) {
                    this.current.textRise = rise;
                  }
                  moveText(x, y) {
                    this.current.x = this.current.lineX += x;
                    this.current.y = this.current.lineY += y;
                  }
                  setLeadingMoveText(x, y) {
                    this.setLeading(-y);
                    this.moveText(x, y);
                  }
                  setTextMatrix(a2, b, c2, d2, e2, f2) {
                    this.current.textMatrix = [a2, b, c2, d2, e2, f2];
                    this.current.textMatrixScale = Math.hypot(a2, b);
                    this.current.x = this.current.lineX = 0;
                    this.current.y = this.current.lineY = 0;
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  paintChar(character, x, y, patternTransform, resetLineWidthToOne) {
                    const ctx = this.ctx;
                    const current = this.current;
                    const font = current.font;
                    const textRenderingMode = current.textRenderingMode;
                    const fontSize = current.fontSize / current.fontSizeScale;
                    const fillStrokeMode = textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                    const isAddToPathSet = !!(textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG);
                    const patternFill = current.patternFill && !font.missingFile;
                    let addToPath;
                    if (font.disableFontFace || isAddToPathSet || patternFill) {
                      addToPath = font.getPathGenerator(this.commonObjs, character);
                    }
                    if (font.disableFontFace || patternFill) {
                      ctx.save();
                      ctx.translate(x, y);
                      ctx.beginPath();
                      addToPath(ctx, fontSize);
                      if (patternTransform) {
                        ctx.setTransform.apply(ctx, patternTransform);
                      }
                      if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                        ctx.fill();
                      }
                      if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                        if (resetLineWidthToOne) {
                          ctx.resetTransform();
                          ctx.lineWidth = Math.round(this._combinedScaleFactor);
                        }
                        ctx.stroke();
                      }
                      ctx.restore();
                    } else {
                      if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                        ctx.fillText(character, x, y);
                      }
                      if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                        if (resetLineWidthToOne) {
                          ctx.save();
                          ctx.moveTo(x, y);
                          ctx.resetTransform();
                          ctx.lineWidth = Math.round(this._combinedScaleFactor);
                          ctx.strokeText(character, 0, 0);
                          ctx.restore();
                        } else {
                          ctx.strokeText(character, x, y);
                        }
                      }
                    }
                    if (isAddToPathSet) {
                      const paths = this.pendingTextPaths || (this.pendingTextPaths = []);
                      paths.push({
                        transform: ctx.mozCurrentTransform,
                        x,
                        y,
                        fontSize,
                        addToPath
                      });
                    }
                  }
                  get isFontSubpixelAAEnabled() {
                    const {
                      context: ctx
                    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                    ctx.scale(1.5, 1);
                    ctx.fillText("I", 0, 10);
                    const data = ctx.getImageData(0, 0, 10, 10).data;
                    let enabled = false;
                    for (let i2 = 3; i2 < data.length; i2 += 4) {
                      if (data[i2] > 0 && data[i2] < 255) {
                        enabled = true;
                        break;
                      }
                    }
                    return (0, _util2.shadow)(this, "isFontSubpixelAAEnabled", enabled);
                  }
                  showText(glyphs) {
                    const current = this.current;
                    const font = current.font;
                    if (font.isType3Font) {
                      return this.showType3Text(glyphs);
                    }
                    const fontSize = current.fontSize;
                    if (fontSize === 0) {
                      return void 0;
                    }
                    const ctx = this.ctx;
                    const fontSizeScale = current.fontSizeScale;
                    const charSpacing = current.charSpacing;
                    const wordSpacing = current.wordSpacing;
                    const fontDirection = current.fontDirection;
                    const textHScale = current.textHScale * fontDirection;
                    const glyphsLength = glyphs.length;
                    const vertical = font.vertical;
                    const spacingDir = vertical ? 1 : -1;
                    const defaultVMetrics = font.defaultVMetrics;
                    const widthAdvanceScale = fontSize * current.fontMatrix[0];
                    const simpleFillText = current.textRenderingMode === _util2.TextRenderingMode.FILL && !font.disableFontFace && !current.patternFill;
                    ctx.save();
                    let patternTransform;
                    if (current.patternFill) {
                      ctx.save();
                      const pattern = current.fillColor.getPattern(ctx, this);
                      patternTransform = ctx.mozCurrentTransform;
                      ctx.restore();
                      ctx.fillStyle = pattern;
                    }
                    ctx.transform.apply(ctx, current.textMatrix);
                    ctx.translate(current.x, current.y + current.textRise);
                    if (fontDirection > 0) {
                      ctx.scale(textHScale, -1);
                    } else {
                      ctx.scale(textHScale, 1);
                    }
                    let lineWidth = current.lineWidth;
                    let resetLineWidthToOne = false;
                    const scale = current.textMatrixScale;
                    if (scale === 0 || lineWidth === 0) {
                      const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                      if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                        this._cachedGetSinglePixelWidth = null;
                        lineWidth = this.getSinglePixelWidth();
                        resetLineWidthToOne = lineWidth < 0;
                      }
                    } else {
                      lineWidth /= scale;
                    }
                    if (fontSizeScale !== 1) {
                      ctx.scale(fontSizeScale, fontSizeScale);
                      lineWidth /= fontSizeScale;
                    }
                    ctx.lineWidth = lineWidth;
                    let x = 0, i2;
                    for (i2 = 0; i2 < glyphsLength; ++i2) {
                      const glyph = glyphs[i2];
                      if ((0, _util2.isNum)(glyph)) {
                        x += spacingDir * glyph * fontSize / 1e3;
                        continue;
                      }
                      let restoreNeeded = false;
                      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                      const character = glyph.fontChar;
                      const accent = glyph.accent;
                      let scaledX, scaledY;
                      let width = glyph.width;
                      if (vertical) {
                        const vmetric = glyph.vmetric || defaultVMetrics;
                        const vx = -(glyph.vmetric ? vmetric[1] : width * 0.5) * widthAdvanceScale;
                        const vy = vmetric[2] * widthAdvanceScale;
                        width = vmetric ? -vmetric[0] : width;
                        scaledX = vx / fontSizeScale;
                        scaledY = (x + vy) / fontSizeScale;
                      } else {
                        scaledX = x / fontSizeScale;
                        scaledY = 0;
                      }
                      if (font.remeasure && width > 0) {
                        const measuredWidth = ctx.measureText(character).width * 1e3 / fontSize * fontSizeScale;
                        if (width < measuredWidth && this.isFontSubpixelAAEnabled) {
                          const characterScaleX = width / measuredWidth;
                          restoreNeeded = true;
                          ctx.save();
                          ctx.scale(characterScaleX, 1);
                          scaledX /= characterScaleX;
                        } else if (width !== measuredWidth) {
                          scaledX += (width - measuredWidth) / 2e3 * fontSize / fontSizeScale;
                        }
                      }
                      if (this.contentVisible && (glyph.isInFont || font.missingFile)) {
                        if (simpleFillText && !accent) {
                          ctx.fillText(character, scaledX, scaledY);
                        } else {
                          this.paintChar(character, scaledX, scaledY, patternTransform, resetLineWidthToOne);
                          if (accent) {
                            const scaledAccentX = scaledX + fontSize * accent.offset.x / fontSizeScale;
                            const scaledAccentY = scaledY - fontSize * accent.offset.y / fontSizeScale;
                            this.paintChar(accent.fontChar, scaledAccentX, scaledAccentY, patternTransform, resetLineWidthToOne);
                          }
                        }
                      }
                      let charWidth;
                      if (vertical) {
                        charWidth = width * widthAdvanceScale - spacing * fontDirection;
                      } else {
                        charWidth = width * widthAdvanceScale + spacing * fontDirection;
                      }
                      x += charWidth;
                      if (restoreNeeded) {
                        ctx.restore();
                      }
                    }
                    if (vertical) {
                      current.y -= x;
                    } else {
                      current.x += x * textHScale;
                    }
                    ctx.restore();
                    return void 0;
                  }
                  showType3Text(glyphs) {
                    const ctx = this.ctx;
                    const current = this.current;
                    const font = current.font;
                    const fontSize = current.fontSize;
                    const fontDirection = current.fontDirection;
                    const spacingDir = font.vertical ? 1 : -1;
                    const charSpacing = current.charSpacing;
                    const wordSpacing = current.wordSpacing;
                    const textHScale = current.textHScale * fontDirection;
                    const fontMatrix = current.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                    const glyphsLength = glyphs.length;
                    const isTextInvisible = current.textRenderingMode === _util2.TextRenderingMode.INVISIBLE;
                    let i2, glyph, width, spacingLength;
                    if (isTextInvisible || fontSize === 0) {
                      return;
                    }
                    this._cachedGetSinglePixelWidth = null;
                    ctx.save();
                    ctx.transform.apply(ctx, current.textMatrix);
                    ctx.translate(current.x, current.y);
                    ctx.scale(textHScale, fontDirection);
                    for (i2 = 0; i2 < glyphsLength; ++i2) {
                      glyph = glyphs[i2];
                      if ((0, _util2.isNum)(glyph)) {
                        spacingLength = spacingDir * glyph * fontSize / 1e3;
                        this.ctx.translate(spacingLength, 0);
                        current.x += spacingLength * textHScale;
                        continue;
                      }
                      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                      const operatorList = font.charProcOperatorList[glyph.operatorListId];
                      if (!operatorList) {
                        (0, _util2.warn)(`Type3 character "${glyph.operatorListId}" is not available.`);
                        continue;
                      }
                      if (this.contentVisible) {
                        this.processingType3 = glyph;
                        this.save();
                        ctx.scale(fontSize, fontSize);
                        ctx.transform.apply(ctx, fontMatrix);
                        this.executeOperatorList(operatorList);
                        this.restore();
                      }
                      const transformed = _util2.Util.applyTransform([glyph.width, 0], fontMatrix);
                      width = transformed[0] * fontSize + spacing;
                      ctx.translate(width, 0);
                      current.x += width * textHScale;
                    }
                    ctx.restore();
                    this.processingType3 = null;
                  }
                  setCharWidth(xWidth, yWidth) {
                  }
                  setCharWidthAndBounds(xWidth, yWidth, llx, lly, urx, ury) {
                    this.ctx.rect(llx, lly, urx - llx, ury - lly);
                    this.clip();
                    this.endPath();
                  }
                  getColorN_Pattern(IR) {
                    let pattern;
                    if (IR[0] === "TilingPattern") {
                      const color = IR[1];
                      const baseTransform = this.baseTransform || this.ctx.mozCurrentTransform.slice();
                      const canvasGraphicsFactory = {
                        createCanvasGraphics: (ctx) => {
                          return new CanvasGraphics2(ctx, this.commonObjs, this.objs, this.canvasFactory);
                        }
                      };
                      pattern = new _pattern_helper.TilingPattern(IR, color, this.ctx, canvasGraphicsFactory, baseTransform);
                    } else {
                      pattern = (0, _pattern_helper.getShadingPattern)(IR);
                    }
                    return pattern;
                  }
                  setStrokeColorN() {
                    this.current.strokeColor = this.getColorN_Pattern(arguments);
                  }
                  setFillColorN() {
                    this.current.fillColor = this.getColorN_Pattern(arguments);
                    this.current.patternFill = true;
                  }
                  setStrokeRGBColor(r2, g, b) {
                    const color = _util2.Util.makeHexColor(r2, g, b);
                    this.ctx.strokeStyle = color;
                    this.current.strokeColor = color;
                  }
                  setFillRGBColor(r2, g, b) {
                    const color = _util2.Util.makeHexColor(r2, g, b);
                    this.ctx.fillStyle = color;
                    this.current.fillColor = color;
                    this.current.patternFill = false;
                  }
                  shadingFill(patternIR) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const ctx = this.ctx;
                    this.save();
                    const pattern = (0, _pattern_helper.getShadingPattern)(patternIR);
                    ctx.fillStyle = pattern.getPattern(ctx, this, true);
                    const inv = ctx.mozCurrentTransformInverse;
                    if (inv) {
                      const canvas = ctx.canvas;
                      const width = canvas.width;
                      const height = canvas.height;
                      const bl = _util2.Util.applyTransform([0, 0], inv);
                      const br = _util2.Util.applyTransform([0, height], inv);
                      const ul = _util2.Util.applyTransform([width, 0], inv);
                      const ur = _util2.Util.applyTransform([width, height], inv);
                      const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                      const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                      const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                      const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                      this.ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
                    } else {
                      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    }
                    this.restore();
                  }
                  beginInlineImage() {
                    (0, _util2.unreachable)("Should not call beginInlineImage");
                  }
                  beginImageData() {
                    (0, _util2.unreachable)("Should not call beginImageData");
                  }
                  paintFormXObjectBegin(matrix, bbox) {
                    if (!this.contentVisible) {
                      return;
                    }
                    this.save();
                    this.baseTransformStack.push(this.baseTransform);
                    if (Array.isArray(matrix) && matrix.length === 6) {
                      this.transform.apply(this, matrix);
                    }
                    this.baseTransform = this.ctx.mozCurrentTransform;
                    if (bbox) {
                      const width = bbox[2] - bbox[0];
                      const height = bbox[3] - bbox[1];
                      this.ctx.rect(bbox[0], bbox[1], width, height);
                      this.clip();
                      this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                    if (!this.contentVisible) {
                      return;
                    }
                    this.restore();
                    this.baseTransform = this.baseTransformStack.pop();
                  }
                  beginGroup(group) {
                    if (!this.contentVisible) {
                      return;
                    }
                    this.save();
                    const currentCtx = this.ctx;
                    if (!group.isolated) {
                      (0, _util2.info)("TODO: Support non-isolated groups.");
                    }
                    if (group.knockout) {
                      (0, _util2.warn)("Knockout groups not supported.");
                    }
                    const currentTransform = currentCtx.mozCurrentTransform;
                    if (group.matrix) {
                      currentCtx.transform.apply(currentCtx, group.matrix);
                    }
                    if (!group.bbox) {
                      throw new Error("Bounding box is required.");
                    }
                    let bounds = _util2.Util.getAxialAlignedBoundingBox(group.bbox, currentCtx.mozCurrentTransform);
                    const canvasBounds = [0, 0, currentCtx.canvas.width, currentCtx.canvas.height];
                    bounds = _util2.Util.intersect(bounds, canvasBounds) || [0, 0, 0, 0];
                    const offsetX = Math.floor(bounds[0]);
                    const offsetY = Math.floor(bounds[1]);
                    let drawnWidth = Math.max(Math.ceil(bounds[2]) - offsetX, 1);
                    let drawnHeight = Math.max(Math.ceil(bounds[3]) - offsetY, 1);
                    let scaleX = 1, scaleY = 1;
                    if (drawnWidth > MAX_GROUP_SIZE) {
                      scaleX = drawnWidth / MAX_GROUP_SIZE;
                      drawnWidth = MAX_GROUP_SIZE;
                    }
                    if (drawnHeight > MAX_GROUP_SIZE) {
                      scaleY = drawnHeight / MAX_GROUP_SIZE;
                      drawnHeight = MAX_GROUP_SIZE;
                    }
                    let cacheId = "groupAt" + this.groupLevel;
                    if (group.smask) {
                      cacheId += "_smask_" + this.smaskCounter++ % 2;
                    }
                    const scratchCanvas = this.cachedCanvases.getCanvas(cacheId, drawnWidth, drawnHeight, true);
                    const groupCtx = scratchCanvas.context;
                    groupCtx.scale(1 / scaleX, 1 / scaleY);
                    groupCtx.translate(-offsetX, -offsetY);
                    groupCtx.transform.apply(groupCtx, currentTransform);
                    if (group.smask) {
                      this.smaskStack.push({
                        canvas: scratchCanvas.canvas,
                        context: groupCtx,
                        offsetX,
                        offsetY,
                        scaleX,
                        scaleY,
                        subtype: group.smask.subtype,
                        backdrop: group.smask.backdrop,
                        transferMap: group.smask.transferMap || null,
                        startTransformInverse: null
                      });
                    } else {
                      currentCtx.setTransform(1, 0, 0, 1, 0, 0);
                      currentCtx.translate(offsetX, offsetY);
                      currentCtx.scale(scaleX, scaleY);
                    }
                    copyCtxState(currentCtx, groupCtx);
                    this.ctx = groupCtx;
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                    this.groupStack.push(currentCtx);
                    this.groupLevel++;
                    this.current.activeSMask = null;
                  }
                  endGroup(group) {
                    if (!this.contentVisible) {
                      return;
                    }
                    this.groupLevel--;
                    const groupCtx = this.ctx;
                    this.ctx = this.groupStack.pop();
                    if (this.ctx.imageSmoothingEnabled !== void 0) {
                      this.ctx.imageSmoothingEnabled = false;
                    } else {
                      this.ctx.mozImageSmoothingEnabled = false;
                    }
                    if (group.smask) {
                      this.tempSMask = this.smaskStack.pop();
                    } else {
                      this.ctx.drawImage(groupCtx.canvas, 0, 0);
                    }
                    this.restore();
                  }
                  beginAnnotations() {
                    this.save();
                    if (this.baseTransform) {
                      this.ctx.setTransform.apply(this.ctx, this.baseTransform);
                    }
                  }
                  endAnnotations() {
                    this.restore();
                  }
                  beginAnnotation(rect, transform, matrix) {
                    this.save();
                    resetCtxToDefault(this.ctx);
                    this.current = new CanvasExtraState();
                    if (Array.isArray(rect) && rect.length === 4) {
                      const width = rect[2] - rect[0];
                      const height = rect[3] - rect[1];
                      this.ctx.rect(rect[0], rect[1], width, height);
                      this.clip();
                      this.endPath();
                    }
                    this.transform.apply(this, transform);
                    this.transform.apply(this, matrix);
                  }
                  endAnnotation() {
                    this.restore();
                  }
                  paintImageMaskXObject(img) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const ctx = this.ctx;
                    const width = img.width, height = img.height;
                    const fillColor = this.current.fillColor;
                    const isPatternFill = this.current.patternFill;
                    const glyph = this.processingType3;
                    if (COMPILE_TYPE3_GLYPHS && glyph && glyph.compiled === void 0) {
                      if (width <= MAX_SIZE_TO_COMPILE && height <= MAX_SIZE_TO_COMPILE) {
                        glyph.compiled = compileType3Glyph({
                          data: img.data,
                          width,
                          height
                        });
                      } else {
                        glyph.compiled = null;
                      }
                    }
                    if (glyph == null ? void 0 : glyph.compiled) {
                      glyph.compiled(ctx);
                      return;
                    }
                    const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                    const maskCtx = maskCanvas.context;
                    maskCtx.save();
                    putBinaryImageMask(maskCtx, img);
                    maskCtx.globalCompositeOperation = "source-in";
                    maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                    maskCtx.fillRect(0, 0, width, height);
                    maskCtx.restore();
                    this.paintInlineImageXObject(maskCanvas.canvas);
                  }
                  paintImageMaskXObjectRepeat(imgData, scaleX, skewX = 0, skewY = 0, scaleY, positions) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const width = imgData.width;
                    const height = imgData.height;
                    const fillColor = this.current.fillColor;
                    const isPatternFill = this.current.patternFill;
                    const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                    const maskCtx = maskCanvas.context;
                    maskCtx.save();
                    putBinaryImageMask(maskCtx, imgData);
                    maskCtx.globalCompositeOperation = "source-in";
                    maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                    maskCtx.fillRect(0, 0, width, height);
                    maskCtx.restore();
                    const ctx = this.ctx;
                    for (let i2 = 0, ii = positions.length; i2 < ii; i2 += 2) {
                      ctx.save();
                      ctx.transform(scaleX, skewX, skewY, scaleY, positions[i2], positions[i2 + 1]);
                      ctx.scale(1, -1);
                      ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                      ctx.restore();
                    }
                  }
                  paintImageMaskXObjectGroup(images) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const ctx = this.ctx;
                    const fillColor = this.current.fillColor;
                    const isPatternFill = this.current.patternFill;
                    for (let i2 = 0, ii = images.length; i2 < ii; i2++) {
                      const image = images[i2];
                      const width = image.width, height = image.height;
                      const maskCanvas = this.cachedCanvases.getCanvas("maskCanvas", width, height);
                      const maskCtx = maskCanvas.context;
                      maskCtx.save();
                      putBinaryImageMask(maskCtx, image);
                      maskCtx.globalCompositeOperation = "source-in";
                      maskCtx.fillStyle = isPatternFill ? fillColor.getPattern(maskCtx, this) : fillColor;
                      maskCtx.fillRect(0, 0, width, height);
                      maskCtx.restore();
                      ctx.save();
                      ctx.transform.apply(ctx, image.transform);
                      ctx.scale(1, -1);
                      ctx.drawImage(maskCanvas.canvas, 0, 0, width, height, 0, -1, 1, 1);
                      ctx.restore();
                    }
                  }
                  paintImageXObject(objId) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
                    if (!imgData) {
                      (0, _util2.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    this.paintInlineImageXObject(imgData);
                  }
                  paintImageXObjectRepeat(objId, scaleX, scaleY, positions) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
                    if (!imgData) {
                      (0, _util2.warn)("Dependent image isn't ready yet");
                      return;
                    }
                    const width = imgData.width;
                    const height = imgData.height;
                    const map = [];
                    for (let i2 = 0, ii = positions.length; i2 < ii; i2 += 2) {
                      map.push({
                        transform: [scaleX, 0, 0, scaleY, positions[i2], positions[i2 + 1]],
                        x: 0,
                        y: 0,
                        w: width,
                        h: height
                      });
                    }
                    this.paintInlineImageXObjectGroup(imgData, map);
                  }
                  paintInlineImageXObject(imgData) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const width = imgData.width;
                    const height = imgData.height;
                    const ctx = this.ctx;
                    this.save();
                    ctx.scale(1 / width, -1 / height);
                    const currentTransform = ctx.mozCurrentTransformInverse;
                    let widthScale = Math.max(Math.hypot(currentTransform[0], currentTransform[1]), 1);
                    let heightScale = Math.max(Math.hypot(currentTransform[2], currentTransform[3]), 1);
                    let imgToPaint, tmpCanvas, tmpCtx;
                    if (typeof HTMLElement === "function" && imgData instanceof HTMLElement || !imgData.data) {
                      imgToPaint = imgData;
                    } else {
                      tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", width, height);
                      tmpCtx = tmpCanvas.context;
                      putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
                      imgToPaint = tmpCanvas.canvas;
                    }
                    let paintWidth = width, paintHeight = height;
                    let tmpCanvasId = "prescale1";
                    while (widthScale > 2 && paintWidth > 1 || heightScale > 2 && paintHeight > 1) {
                      let newWidth = paintWidth, newHeight = paintHeight;
                      if (widthScale > 2 && paintWidth > 1) {
                        newWidth = Math.ceil(paintWidth / 2);
                        widthScale /= paintWidth / newWidth;
                      }
                      if (heightScale > 2 && paintHeight > 1) {
                        newHeight = Math.ceil(paintHeight / 2);
                        heightScale /= paintHeight / newHeight;
                      }
                      tmpCanvas = this.cachedCanvases.getCanvas(tmpCanvasId, newWidth, newHeight);
                      tmpCtx = tmpCanvas.context;
                      tmpCtx.clearRect(0, 0, newWidth, newHeight);
                      tmpCtx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, 0, newWidth, newHeight);
                      imgToPaint = tmpCanvas.canvas;
                      paintWidth = newWidth;
                      paintHeight = newHeight;
                      tmpCanvasId = tmpCanvasId === "prescale1" ? "prescale2" : "prescale1";
                    }
                    ctx.drawImage(imgToPaint, 0, 0, paintWidth, paintHeight, 0, -height, width, height);
                    if (this.imageLayer) {
                      const position = this.getCanvasPosition(0, -height);
                      this.imageLayer.appendImage({
                        imgData,
                        left: position[0],
                        top: position[1],
                        width: width / currentTransform[0],
                        height: height / currentTransform[3]
                      });
                    }
                    this.restore();
                  }
                  paintInlineImageXObjectGroup(imgData, map) {
                    if (!this.contentVisible) {
                      return;
                    }
                    const ctx = this.ctx;
                    const w = imgData.width;
                    const h = imgData.height;
                    const tmpCanvas = this.cachedCanvases.getCanvas("inlineImage", w, h);
                    const tmpCtx = tmpCanvas.context;
                    putBinaryImageData(tmpCtx, imgData, this.current.transferMaps);
                    for (let i2 = 0, ii = map.length; i2 < ii; i2++) {
                      const entry = map[i2];
                      ctx.save();
                      ctx.transform.apply(ctx, entry.transform);
                      ctx.scale(1, -1);
                      ctx.drawImage(tmpCanvas.canvas, entry.x, entry.y, entry.w, entry.h, 0, -1, 1, 1);
                      if (this.imageLayer) {
                        const position = this.getCanvasPosition(entry.x, entry.y);
                        this.imageLayer.appendImage({
                          imgData,
                          left: position[0],
                          top: position[1],
                          width: w,
                          height: h
                        });
                      }
                      ctx.restore();
                    }
                  }
                  paintSolidColorImageMask() {
                    if (!this.contentVisible) {
                      return;
                    }
                    this.ctx.fillRect(0, 0, 1, 1);
                  }
                  markPoint(tag) {
                  }
                  markPointProps(tag, properties) {
                  }
                  beginMarkedContent(tag) {
                    this.markedContentStack.push({
                      visible: true
                    });
                  }
                  beginMarkedContentProps(tag, properties) {
                    if (tag === "OC") {
                      this.markedContentStack.push({
                        visible: this.optionalContentConfig.isVisible(properties)
                      });
                    } else {
                      this.markedContentStack.push({
                        visible: true
                      });
                    }
                    this.contentVisible = this.isContentVisible();
                  }
                  endMarkedContent() {
                    this.markedContentStack.pop();
                    this.contentVisible = this.isContentVisible();
                  }
                  beginCompat() {
                  }
                  endCompat() {
                  }
                  consumePath() {
                    const ctx = this.ctx;
                    if (this.pendingClip) {
                      if (this.pendingClip === EO_CLIP) {
                        ctx.clip("evenodd");
                      } else {
                        ctx.clip();
                      }
                      this.pendingClip = null;
                    }
                    ctx.beginPath();
                  }
                  getSinglePixelWidth() {
                    if (this._cachedGetSinglePixelWidth === null) {
                      const m2 = this.ctx.mozCurrentTransform;
                      const absDet = Math.abs(m2[0] * m2[3] - m2[2] * m2[1]);
                      const sqNorm1 = m2[0] ** 2 + m2[2] ** 2;
                      const sqNorm2 = m2[1] ** 2 + m2[3] ** 2;
                      const pixelHeight = Math.sqrt(Math.max(sqNorm1, sqNorm2)) / absDet;
                      if (sqNorm1 !== sqNorm2 && this._combinedScaleFactor * pixelHeight > 1) {
                        this._cachedGetSinglePixelWidth = -(this._combinedScaleFactor * pixelHeight);
                      } else if (absDet > Number.EPSILON) {
                        this._cachedGetSinglePixelWidth = pixelHeight;
                      } else {
                        this._cachedGetSinglePixelWidth = 1;
                      }
                    }
                    return this._cachedGetSinglePixelWidth;
                  }
                  getCanvasPosition(x, y) {
                    const transform = this.ctx.mozCurrentTransform;
                    return [transform[0] * x + transform[2] * y + transform[4], transform[1] * x + transform[3] * y + transform[5]];
                  }
                  isContentVisible() {
                    for (let i2 = this.markedContentStack.length - 1; i2 >= 0; i2--) {
                      if (!this.markedContentStack[i2].visible) {
                        return false;
                      }
                    }
                    return true;
                  }
                }
                for (const op in _util2.OPS) {
                  CanvasGraphics2.prototype[_util2.OPS[op]] = CanvasGraphics2.prototype[op];
                }
                return CanvasGraphics2;
              }();
              exports2.CanvasGraphics = CanvasGraphics;
            },
            /* 11 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.getShadingPattern = getShadingPattern;
              exports2.TilingPattern = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              let svgElement;
              function createMatrix(matrix) {
                if (typeof DOMMatrix !== "undefined") {
                  return new DOMMatrix(matrix);
                }
                if (!svgElement) {
                  svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                }
                return svgElement.createSVGMatrix(matrix);
              }
              function applyBoundingBox(ctx, bbox) {
                if (!bbox || typeof Path2D === "undefined") {
                  return;
                }
                const width = bbox[2] - bbox[0];
                const height = bbox[3] - bbox[1];
                const region = new Path2D();
                region.rect(bbox[0], bbox[1], width, height);
                ctx.clip(region);
              }
              class BaseShadingPattern {
                constructor() {
                  if (this.constructor === BaseShadingPattern) {
                    (0, _util2.unreachable)("Cannot initialize BaseShadingPattern.");
                  }
                }
                getPattern() {
                  (0, _util2.unreachable)("Abstract method `getPattern` called.");
                }
              }
              class RadialAxialShadingPattern extends BaseShadingPattern {
                constructor(IR) {
                  super();
                  this._type = IR[1];
                  this._bbox = IR[2];
                  this._colorStops = IR[3];
                  this._p0 = IR[4];
                  this._p1 = IR[5];
                  this._r0 = IR[6];
                  this._r1 = IR[7];
                  this._matrix = IR[8];
                }
                getPattern(ctx, owner, shadingFill) {
                  const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", ctx.canvas.width, ctx.canvas.height, true);
                  const tmpCtx = tmpCanvas.context;
                  tmpCtx.clearRect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                  tmpCtx.beginPath();
                  tmpCtx.rect(0, 0, tmpCtx.canvas.width, tmpCtx.canvas.height);
                  if (!shadingFill) {
                    tmpCtx.setTransform.apply(tmpCtx, owner.baseTransform);
                    if (this._matrix) {
                      tmpCtx.transform.apply(tmpCtx, this._matrix);
                    }
                  } else {
                    tmpCtx.setTransform.apply(tmpCtx, ctx.mozCurrentTransform);
                  }
                  applyBoundingBox(tmpCtx, this._bbox);
                  let grad;
                  if (this._type === "axial") {
                    grad = tmpCtx.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]);
                  } else if (this._type === "radial") {
                    grad = tmpCtx.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1);
                  }
                  for (const colorStop of this._colorStops) {
                    grad.addColorStop(colorStop[0], colorStop[1]);
                  }
                  tmpCtx.fillStyle = grad;
                  tmpCtx.fill();
                  const pattern = ctx.createPattern(tmpCanvas.canvas, "repeat");
                  pattern.setTransform(createMatrix(ctx.mozCurrentTransformInverse));
                  return pattern;
                }
              }
              function drawTriangle(data, context, p1, p2, p3, c1, c2, c3) {
                const coords = context.coords, colors = context.colors;
                const bytes = data.data, rowSize = data.width * 4;
                let tmp;
                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }
                if (coords[p2 + 1] > coords[p3 + 1]) {
                  tmp = p2;
                  p2 = p3;
                  p3 = tmp;
                  tmp = c2;
                  c2 = c3;
                  c3 = tmp;
                }
                if (coords[p1 + 1] > coords[p2 + 1]) {
                  tmp = p1;
                  p1 = p2;
                  p2 = tmp;
                  tmp = c1;
                  c1 = c2;
                  c2 = tmp;
                }
                const x1 = (coords[p1] + context.offsetX) * context.scaleX;
                const y1 = (coords[p1 + 1] + context.offsetY) * context.scaleY;
                const x2 = (coords[p2] + context.offsetX) * context.scaleX;
                const y2 = (coords[p2 + 1] + context.offsetY) * context.scaleY;
                const x3 = (coords[p3] + context.offsetX) * context.scaleX;
                const y3 = (coords[p3 + 1] + context.offsetY) * context.scaleY;
                if (y1 >= y3) {
                  return;
                }
                const c1r = colors[c1], c1g = colors[c1 + 1], c1b = colors[c1 + 2];
                const c2r = colors[c2], c2g = colors[c2 + 1], c2b = colors[c2 + 2];
                const c3r = colors[c3], c3g = colors[c3 + 1], c3b = colors[c3 + 2];
                const minY = Math.round(y1), maxY = Math.round(y3);
                let xa, car, cag, cab;
                let xb, cbr, cbg, cbb;
                for (let y = minY; y <= maxY; y++) {
                  if (y < y2) {
                    let k2;
                    if (y < y1) {
                      k2 = 0;
                    } else if (y1 === y2) {
                      k2 = 1;
                    } else {
                      k2 = (y1 - y) / (y1 - y2);
                    }
                    xa = x1 - (x1 - x2) * k2;
                    car = c1r - (c1r - c2r) * k2;
                    cag = c1g - (c1g - c2g) * k2;
                    cab = c1b - (c1b - c2b) * k2;
                  } else {
                    let k2;
                    if (y > y3) {
                      k2 = 1;
                    } else if (y2 === y3) {
                      k2 = 0;
                    } else {
                      k2 = (y2 - y) / (y2 - y3);
                    }
                    xa = x2 - (x2 - x3) * k2;
                    car = c2r - (c2r - c3r) * k2;
                    cag = c2g - (c2g - c3g) * k2;
                    cab = c2b - (c2b - c3b) * k2;
                  }
                  let k;
                  if (y < y1) {
                    k = 0;
                  } else if (y > y3) {
                    k = 1;
                  } else {
                    k = (y1 - y) / (y1 - y3);
                  }
                  xb = x1 - (x1 - x3) * k;
                  cbr = c1r - (c1r - c3r) * k;
                  cbg = c1g - (c1g - c3g) * k;
                  cbb = c1b - (c1b - c3b) * k;
                  const x1_ = Math.round(Math.min(xa, xb));
                  const x2_ = Math.round(Math.max(xa, xb));
                  let j = rowSize * y + x1_ * 4;
                  for (let x = x1_; x <= x2_; x++) {
                    k = (xa - x) / (xa - xb);
                    if (k < 0) {
                      k = 0;
                    } else if (k > 1) {
                      k = 1;
                    }
                    bytes[j++] = car - (car - cbr) * k | 0;
                    bytes[j++] = cag - (cag - cbg) * k | 0;
                    bytes[j++] = cab - (cab - cbb) * k | 0;
                    bytes[j++] = 255;
                  }
                }
              }
              function drawFigure(data, figure, context) {
                const ps = figure.coords;
                const cs = figure.colors;
                let i2, ii;
                switch (figure.type) {
                  case "lattice":
                    const verticesPerRow = figure.verticesPerRow;
                    const rows = Math.floor(ps.length / verticesPerRow) - 1;
                    const cols = verticesPerRow - 1;
                    for (i2 = 0; i2 < rows; i2++) {
                      let q = i2 * verticesPerRow;
                      for (let j = 0; j < cols; j++, q++) {
                        drawTriangle(data, context, ps[q], ps[q + 1], ps[q + verticesPerRow], cs[q], cs[q + 1], cs[q + verticesPerRow]);
                        drawTriangle(data, context, ps[q + verticesPerRow + 1], ps[q + 1], ps[q + verticesPerRow], cs[q + verticesPerRow + 1], cs[q + 1], cs[q + verticesPerRow]);
                      }
                    }
                    break;
                  case "triangles":
                    for (i2 = 0, ii = ps.length; i2 < ii; i2 += 3) {
                      drawTriangle(data, context, ps[i2], ps[i2 + 1], ps[i2 + 2], cs[i2], cs[i2 + 1], cs[i2 + 2]);
                    }
                    break;
                  default:
                    throw new Error("illegal figure");
                }
              }
              class MeshShadingPattern extends BaseShadingPattern {
                constructor(IR) {
                  super();
                  this._coords = IR[2];
                  this._colors = IR[3];
                  this._figures = IR[4];
                  this._bounds = IR[5];
                  this._matrix = IR[6];
                  this._bbox = IR[7];
                  this._background = IR[8];
                }
                _createMeshCanvas(combinedScale, backgroundColor, cachedCanvases) {
                  const EXPECTED_SCALE = 1.1;
                  const MAX_PATTERN_SIZE = 3e3;
                  const BORDER_SIZE = 2;
                  const offsetX = Math.floor(this._bounds[0]);
                  const offsetY = Math.floor(this._bounds[1]);
                  const boundsWidth = Math.ceil(this._bounds[2]) - offsetX;
                  const boundsHeight = Math.ceil(this._bounds[3]) - offsetY;
                  const width = Math.min(Math.ceil(Math.abs(boundsWidth * combinedScale[0] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                  const height = Math.min(Math.ceil(Math.abs(boundsHeight * combinedScale[1] * EXPECTED_SCALE)), MAX_PATTERN_SIZE);
                  const scaleX = boundsWidth / width;
                  const scaleY = boundsHeight / height;
                  const context = {
                    coords: this._coords,
                    colors: this._colors,
                    offsetX: -offsetX,
                    offsetY: -offsetY,
                    scaleX: 1 / scaleX,
                    scaleY: 1 / scaleY
                  };
                  const paddedWidth = width + BORDER_SIZE * 2;
                  const paddedHeight = height + BORDER_SIZE * 2;
                  const tmpCanvas = cachedCanvases.getCanvas("mesh", paddedWidth, paddedHeight, false);
                  const tmpCtx = tmpCanvas.context;
                  const data = tmpCtx.createImageData(width, height);
                  if (backgroundColor) {
                    const bytes = data.data;
                    for (let i2 = 0, ii = bytes.length; i2 < ii; i2 += 4) {
                      bytes[i2] = backgroundColor[0];
                      bytes[i2 + 1] = backgroundColor[1];
                      bytes[i2 + 2] = backgroundColor[2];
                      bytes[i2 + 3] = 255;
                    }
                  }
                  for (const figure of this._figures) {
                    drawFigure(data, figure, context);
                  }
                  tmpCtx.putImageData(data, BORDER_SIZE, BORDER_SIZE);
                  const canvas = tmpCanvas.canvas;
                  return {
                    canvas,
                    offsetX: offsetX - BORDER_SIZE * scaleX,
                    offsetY: offsetY - BORDER_SIZE * scaleY,
                    scaleX,
                    scaleY
                  };
                }
                getPattern(ctx, owner, shadingFill) {
                  applyBoundingBox(ctx, this._bbox);
                  let scale;
                  if (shadingFill) {
                    scale = _util2.Util.singularValueDecompose2dScale(ctx.mozCurrentTransform);
                  } else {
                    scale = _util2.Util.singularValueDecompose2dScale(owner.baseTransform);
                    if (this._matrix) {
                      const matrixScale = _util2.Util.singularValueDecompose2dScale(this._matrix);
                      scale = [scale[0] * matrixScale[0], scale[1] * matrixScale[1]];
                    }
                  }
                  const temporaryPatternCanvas = this._createMeshCanvas(scale, shadingFill ? null : this._background, owner.cachedCanvases);
                  if (!shadingFill) {
                    ctx.setTransform.apply(ctx, owner.baseTransform);
                    if (this._matrix) {
                      ctx.transform.apply(ctx, this._matrix);
                    }
                  }
                  ctx.translate(temporaryPatternCanvas.offsetX, temporaryPatternCanvas.offsetY);
                  ctx.scale(temporaryPatternCanvas.scaleX, temporaryPatternCanvas.scaleY);
                  return ctx.createPattern(temporaryPatternCanvas.canvas, "no-repeat");
                }
              }
              class DummyShadingPattern extends BaseShadingPattern {
                getPattern() {
                  return "hotpink";
                }
              }
              function getShadingPattern(IR) {
                switch (IR[0]) {
                  case "RadialAxial":
                    return new RadialAxialShadingPattern(IR);
                  case "Mesh":
                    return new MeshShadingPattern(IR);
                  case "Dummy":
                    return new DummyShadingPattern();
                }
                throw new Error(`Unknown IR type: ${IR[0]}`);
              }
              const PaintType = {
                COLORED: 1,
                UNCOLORED: 2
              };
              class TilingPattern {
                static get MAX_PATTERN_SIZE() {
                  return (0, _util2.shadow)(this, "MAX_PATTERN_SIZE", 3e3);
                }
                constructor(IR, color, ctx, canvasGraphicsFactory, baseTransform) {
                  this.operatorList = IR[2];
                  this.matrix = IR[3] || [1, 0, 0, 1, 0, 0];
                  this.bbox = IR[4];
                  this.xstep = IR[5];
                  this.ystep = IR[6];
                  this.paintType = IR[7];
                  this.tilingType = IR[8];
                  this.color = color;
                  this.ctx = ctx;
                  this.canvasGraphicsFactory = canvasGraphicsFactory;
                  this.baseTransform = baseTransform;
                }
                createPatternCanvas(owner) {
                  const operatorList = this.operatorList;
                  const bbox = this.bbox;
                  const xstep = this.xstep;
                  const ystep = this.ystep;
                  const paintType = this.paintType;
                  const tilingType = this.tilingType;
                  const color = this.color;
                  const canvasGraphicsFactory = this.canvasGraphicsFactory;
                  (0, _util2.info)("TilingType: " + tilingType);
                  const x0 = bbox[0], y0 = bbox[1], x1 = bbox[2], y1 = bbox[3];
                  const matrixScale = _util2.Util.singularValueDecompose2dScale(this.matrix);
                  const curMatrixScale = _util2.Util.singularValueDecompose2dScale(this.baseTransform);
                  const combinedScale = [matrixScale[0] * curMatrixScale[0], matrixScale[1] * curMatrixScale[1]];
                  const dimx = this.getSizeAndScale(xstep, this.ctx.canvas.width, combinedScale[0]);
                  const dimy = this.getSizeAndScale(ystep, this.ctx.canvas.height, combinedScale[1]);
                  const tmpCanvas = owner.cachedCanvases.getCanvas("pattern", dimx.size, dimy.size, true);
                  const tmpCtx = tmpCanvas.context;
                  const graphics = canvasGraphicsFactory.createCanvasGraphics(tmpCtx);
                  graphics.groupLevel = owner.groupLevel;
                  this.setFillAndStrokeStyleToContext(graphics, paintType, color);
                  graphics.transform(dimx.scale, 0, 0, dimy.scale, 0, 0);
                  this.clipBbox(graphics, bbox, x0, y0, x1, y1);
                  graphics.baseTransform = graphics.ctx.mozCurrentTransform.slice();
                  graphics.executeOperatorList(operatorList);
                  graphics.endDrawing();
                  return {
                    canvas: tmpCanvas.canvas,
                    scaleX: dimx.scale,
                    scaleY: dimy.scale
                  };
                }
                getSizeAndScale(step, realOutputSize, scale) {
                  step = Math.abs(step);
                  const maxSize = Math.max(TilingPattern.MAX_PATTERN_SIZE, realOutputSize);
                  let size = Math.ceil(step * scale);
                  if (size >= maxSize) {
                    size = maxSize;
                  } else {
                    scale = size / step;
                  }
                  return {
                    scale,
                    size
                  };
                }
                clipBbox(graphics, bbox, x0, y0, x1, y1) {
                  if (Array.isArray(bbox) && bbox.length === 4) {
                    const bboxWidth = x1 - x0;
                    const bboxHeight = y1 - y0;
                    graphics.ctx.rect(x0, y0, bboxWidth, bboxHeight);
                    graphics.clip();
                    graphics.endPath();
                  }
                }
                setFillAndStrokeStyleToContext(graphics, paintType, color) {
                  const context = graphics.ctx, current = graphics.current;
                  switch (paintType) {
                    case PaintType.COLORED:
                      const ctx = this.ctx;
                      context.fillStyle = ctx.fillStyle;
                      context.strokeStyle = ctx.strokeStyle;
                      current.fillColor = ctx.fillStyle;
                      current.strokeColor = ctx.strokeStyle;
                      break;
                    case PaintType.UNCOLORED:
                      const cssColor = _util2.Util.makeHexColor(color[0], color[1], color[2]);
                      context.fillStyle = cssColor;
                      context.strokeStyle = cssColor;
                      current.fillColor = cssColor;
                      current.strokeColor = cssColor;
                      break;
                    default:
                      throw new _util2.FormatError(`Unsupported paint type: ${paintType}`);
                  }
                }
                getPattern(ctx, owner, shadingFill) {
                  ctx = this.ctx;
                  let matrix = ctx.mozCurrentTransformInverse;
                  if (!shadingFill) {
                    matrix = _util2.Util.transform(matrix, owner.baseTransform);
                    if (this.matrix) {
                      matrix = _util2.Util.transform(matrix, this.matrix);
                    }
                  }
                  const temporaryPatternCanvas = this.createPatternCanvas(owner);
                  let domMatrix = createMatrix(matrix);
                  domMatrix = domMatrix.scale(1 / temporaryPatternCanvas.scaleX, 1 / temporaryPatternCanvas.scaleY);
                  const pattern = ctx.createPattern(temporaryPatternCanvas.canvas, "repeat");
                  pattern.setTransform(domMatrix);
                  return pattern;
                }
              }
              exports2.TilingPattern = TilingPattern;
            },
            /* 12 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.GlobalWorkerOptions = void 0;
              const GlobalWorkerOptions = /* @__PURE__ */ Object.create(null);
              exports2.GlobalWorkerOptions = GlobalWorkerOptions;
              GlobalWorkerOptions.workerPort = GlobalWorkerOptions.workerPort === void 0 ? null : GlobalWorkerOptions.workerPort;
              GlobalWorkerOptions.workerSrc = GlobalWorkerOptions.workerSrc === void 0 ? "" : GlobalWorkerOptions.workerSrc;
            },
            /* 13 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.MessageHandler = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              const CallbackKind = {
                UNKNOWN: 0,
                DATA: 1,
                ERROR: 2
              };
              const StreamKind = {
                UNKNOWN: 0,
                CANCEL: 1,
                CANCEL_COMPLETE: 2,
                CLOSE: 3,
                ENQUEUE: 4,
                ERROR: 5,
                PULL: 6,
                PULL_COMPLETE: 7,
                START_COMPLETE: 8
              };
              function wrapReason(reason) {
                if (typeof reason !== "object" || reason === null) {
                  return reason;
                }
                switch (reason.name) {
                  case "AbortException":
                    return new _util2.AbortException(reason.message);
                  case "MissingPDFException":
                    return new _util2.MissingPDFException(reason.message);
                  case "UnexpectedResponseException":
                    return new _util2.UnexpectedResponseException(reason.message, reason.status);
                  case "UnknownErrorException":
                    return new _util2.UnknownErrorException(reason.message, reason.details);
                  default:
                    return new _util2.UnknownErrorException(reason.message, reason.toString());
                }
              }
              class MessageHandler {
                constructor(sourceName, targetName, comObj) {
                  this.sourceName = sourceName;
                  this.targetName = targetName;
                  this.comObj = comObj;
                  this.callbackId = 1;
                  this.streamId = 1;
                  this.postMessageTransfers = true;
                  this.streamSinks = /* @__PURE__ */ Object.create(null);
                  this.streamControllers = /* @__PURE__ */ Object.create(null);
                  this.callbackCapabilities = /* @__PURE__ */ Object.create(null);
                  this.actionHandler = /* @__PURE__ */ Object.create(null);
                  this._onComObjOnMessage = (event) => {
                    const data = event.data;
                    if (data.targetName !== this.sourceName) {
                      return;
                    }
                    if (data.stream) {
                      this._processStreamMessage(data);
                      return;
                    }
                    if (data.callback) {
                      const callbackId = data.callbackId;
                      const capability = this.callbackCapabilities[callbackId];
                      if (!capability) {
                        throw new Error(`Cannot resolve callback ${callbackId}`);
                      }
                      delete this.callbackCapabilities[callbackId];
                      if (data.callback === CallbackKind.DATA) {
                        capability.resolve(data.data);
                      } else if (data.callback === CallbackKind.ERROR) {
                        capability.reject(wrapReason(data.reason));
                      } else {
                        throw new Error("Unexpected callback case");
                      }
                      return;
                    }
                    const action = this.actionHandler[data.action];
                    if (!action) {
                      throw new Error(`Unknown action from worker: ${data.action}`);
                    }
                    if (data.callbackId) {
                      const cbSourceName = this.sourceName;
                      const cbTargetName = data.sourceName;
                      new Promise(function(resolve) {
                        resolve(action(data.data));
                      }).then(function(result) {
                        comObj.postMessage({
                          sourceName: cbSourceName,
                          targetName: cbTargetName,
                          callback: CallbackKind.DATA,
                          callbackId: data.callbackId,
                          data: result
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName: cbSourceName,
                          targetName: cbTargetName,
                          callback: CallbackKind.ERROR,
                          callbackId: data.callbackId,
                          reason: wrapReason(reason)
                        });
                      });
                      return;
                    }
                    if (data.streamId) {
                      this._createStreamSink(data);
                      return;
                    }
                    action(data.data);
                  };
                  comObj.addEventListener("message", this._onComObjOnMessage);
                }
                on(actionName, handler) {
                  const ah = this.actionHandler;
                  if (ah[actionName]) {
                    throw new Error(`There is already an actionName called "${actionName}"`);
                  }
                  ah[actionName] = handler;
                }
                send(actionName, data, transfers) {
                  this._postMessage({
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: actionName,
                    data
                  }, transfers);
                }
                sendWithPromise(actionName, data, transfers) {
                  const callbackId = this.callbackId++;
                  const capability = (0, _util2.createPromiseCapability)();
                  this.callbackCapabilities[callbackId] = capability;
                  try {
                    this._postMessage({
                      sourceName: this.sourceName,
                      targetName: this.targetName,
                      action: actionName,
                      callbackId,
                      data
                    }, transfers);
                  } catch (ex) {
                    capability.reject(ex);
                  }
                  return capability.promise;
                }
                sendWithStream(actionName, data, queueingStrategy, transfers) {
                  const streamId = this.streamId++;
                  const sourceName = this.sourceName;
                  const targetName = this.targetName;
                  const comObj = this.comObj;
                  return new ReadableStream({
                    start: (controller) => {
                      const startCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId] = {
                        controller,
                        startCall: startCapability,
                        pullCall: null,
                        cancelCall: null,
                        isClosed: false
                      };
                      this._postMessage({
                        sourceName,
                        targetName,
                        action: actionName,
                        streamId,
                        data,
                        desiredSize: controller.desiredSize
                      }, transfers);
                      return startCapability.promise;
                    },
                    pull: (controller) => {
                      const pullCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId].pullCall = pullCapability;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.PULL,
                        streamId,
                        desiredSize: controller.desiredSize
                      });
                      return pullCapability.promise;
                    },
                    cancel: (reason) => {
                      (0, _util2.assert)(reason instanceof Error, "cancel must have a valid reason");
                      const cancelCapability = (0, _util2.createPromiseCapability)();
                      this.streamControllers[streamId].cancelCall = cancelCapability;
                      this.streamControllers[streamId].isClosed = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.CANCEL,
                        streamId,
                        reason: wrapReason(reason)
                      });
                      return cancelCapability.promise;
                    }
                  }, queueingStrategy);
                }
                _createStreamSink(data) {
                  const self = this;
                  const action = this.actionHandler[data.action];
                  const streamId = data.streamId;
                  const sourceName = this.sourceName;
                  const targetName = data.sourceName;
                  const comObj = this.comObj;
                  const streamSink = {
                    enqueue(chunk, size = 1, transfers) {
                      if (this.isCancelled) {
                        return;
                      }
                      const lastDesiredSize = this.desiredSize;
                      this.desiredSize -= size;
                      if (lastDesiredSize > 0 && this.desiredSize <= 0) {
                        this.sinkCapability = (0, _util2.createPromiseCapability)();
                        this.ready = this.sinkCapability.promise;
                      }
                      self._postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.ENQUEUE,
                        streamId,
                        chunk
                      }, transfers);
                    },
                    close() {
                      if (this.isCancelled) {
                        return;
                      }
                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.CLOSE,
                        streamId
                      });
                      delete self.streamSinks[streamId];
                    },
                    error(reason) {
                      (0, _util2.assert)(reason instanceof Error, "error must have a valid reason");
                      if (this.isCancelled) {
                        return;
                      }
                      this.isCancelled = true;
                      comObj.postMessage({
                        sourceName,
                        targetName,
                        stream: StreamKind.ERROR,
                        streamId,
                        reason: wrapReason(reason)
                      });
                    },
                    sinkCapability: (0, _util2.createPromiseCapability)(),
                    onPull: null,
                    onCancel: null,
                    isCancelled: false,
                    desiredSize: data.desiredSize,
                    ready: null
                  };
                  streamSink.sinkCapability.resolve();
                  streamSink.ready = streamSink.sinkCapability.promise;
                  this.streamSinks[streamId] = streamSink;
                  new Promise(function(resolve) {
                    resolve(action(data.data, streamSink));
                  }).then(function() {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId,
                      success: true
                    });
                  }, function(reason) {
                    comObj.postMessage({
                      sourceName,
                      targetName,
                      stream: StreamKind.START_COMPLETE,
                      streamId,
                      reason: wrapReason(reason)
                    });
                  });
                }
                _processStreamMessage(data) {
                  const streamId = data.streamId;
                  const sourceName = this.sourceName;
                  const targetName = data.sourceName;
                  const comObj = this.comObj;
                  switch (data.stream) {
                    case StreamKind.START_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].startCall.resolve();
                      } else {
                        this.streamControllers[streamId].startCall.reject(wrapReason(data.reason));
                      }
                      break;
                    case StreamKind.PULL_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].pullCall.resolve();
                      } else {
                        this.streamControllers[streamId].pullCall.reject(wrapReason(data.reason));
                      }
                      break;
                    case StreamKind.PULL:
                      if (!this.streamSinks[streamId]) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          success: true
                        });
                        break;
                      }
                      if (this.streamSinks[streamId].desiredSize <= 0 && data.desiredSize > 0) {
                        this.streamSinks[streamId].sinkCapability.resolve();
                      }
                      this.streamSinks[streamId].desiredSize = data.desiredSize;
                      const {
                        onPull
                      } = this.streamSinks[data.streamId];
                      new Promise(function(resolve) {
                        resolve(onPull && onPull());
                      }).then(function() {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          success: true
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.PULL_COMPLETE,
                          streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      break;
                    case StreamKind.ENQUEUE:
                      (0, _util2.assert)(this.streamControllers[streamId], "enqueue should have stream controller");
                      if (this.streamControllers[streamId].isClosed) {
                        break;
                      }
                      this.streamControllers[streamId].controller.enqueue(data.chunk);
                      break;
                    case StreamKind.CLOSE:
                      (0, _util2.assert)(this.streamControllers[streamId], "close should have stream controller");
                      if (this.streamControllers[streamId].isClosed) {
                        break;
                      }
                      this.streamControllers[streamId].isClosed = true;
                      this.streamControllers[streamId].controller.close();
                      this._deleteStreamController(streamId);
                      break;
                    case StreamKind.ERROR:
                      (0, _util2.assert)(this.streamControllers[streamId], "error should have stream controller");
                      this.streamControllers[streamId].controller.error(wrapReason(data.reason));
                      this._deleteStreamController(streamId);
                      break;
                    case StreamKind.CANCEL_COMPLETE:
                      if (data.success) {
                        this.streamControllers[streamId].cancelCall.resolve();
                      } else {
                        this.streamControllers[streamId].cancelCall.reject(wrapReason(data.reason));
                      }
                      this._deleteStreamController(streamId);
                      break;
                    case StreamKind.CANCEL:
                      if (!this.streamSinks[streamId]) {
                        break;
                      }
                      const {
                        onCancel
                      } = this.streamSinks[data.streamId];
                      new Promise(function(resolve) {
                        resolve(onCancel && onCancel(wrapReason(data.reason)));
                      }).then(function() {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId,
                          success: true
                        });
                      }, function(reason) {
                        comObj.postMessage({
                          sourceName,
                          targetName,
                          stream: StreamKind.CANCEL_COMPLETE,
                          streamId,
                          reason: wrapReason(reason)
                        });
                      });
                      this.streamSinks[streamId].sinkCapability.reject(wrapReason(data.reason));
                      this.streamSinks[streamId].isCancelled = true;
                      delete this.streamSinks[streamId];
                      break;
                    default:
                      throw new Error("Unexpected stream case");
                  }
                }
                async _deleteStreamController(streamId) {
                  await Promise.allSettled([this.streamControllers[streamId].startCall, this.streamControllers[streamId].pullCall, this.streamControllers[streamId].cancelCall].map(function(capability) {
                    return capability && capability.promise;
                  }));
                  delete this.streamControllers[streamId];
                }
                _postMessage(message, transfers) {
                  if (transfers && this.postMessageTransfers) {
                    this.comObj.postMessage(message, transfers);
                  } else {
                    this.comObj.postMessage(message);
                  }
                }
                destroy() {
                  this.comObj.removeEventListener("message", this._onComObjOnMessage);
                }
              }
              exports2.MessageHandler = MessageHandler;
            },
            /* 14 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.Metadata = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              class Metadata {
                constructor({
                  parsedData,
                  rawData
                }) {
                  this._metadataMap = parsedData;
                  this._data = rawData;
                }
                getRaw() {
                  return this._data;
                }
                get(name) {
                  return this._metadataMap.get(name) ?? null;
                }
                getAll() {
                  return (0, _util2.objectFromMap)(this._metadataMap);
                }
                has(name) {
                  return this._metadataMap.has(name);
                }
              }
              exports2.Metadata = Metadata;
            },
            /* 15 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.OptionalContentConfig = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              class OptionalContentGroup {
                constructor(name, intent) {
                  this.visible = true;
                  this.name = name;
                  this.intent = intent;
                }
              }
              class OptionalContentConfig {
                constructor(data) {
                  this.name = null;
                  this.creator = null;
                  this._order = null;
                  this._groups = /* @__PURE__ */ new Map();
                  if (data === null) {
                    return;
                  }
                  this.name = data.name;
                  this.creator = data.creator;
                  this._order = data.order;
                  for (const group of data.groups) {
                    this._groups.set(group.id, new OptionalContentGroup(group.name, group.intent));
                  }
                  if (data.baseState === "OFF") {
                    for (const group of this._groups) {
                      group.visible = false;
                    }
                  }
                  for (const on of data.on) {
                    this._groups.get(on).visible = true;
                  }
                  for (const off of data.off) {
                    this._groups.get(off).visible = false;
                  }
                }
                _evaluateVisibilityExpression(array) {
                  const length = array.length;
                  if (length < 2) {
                    return true;
                  }
                  const operator = array[0];
                  for (let i2 = 1; i2 < length; i2++) {
                    const element = array[i2];
                    let state;
                    if (Array.isArray(element)) {
                      state = this._evaluateVisibilityExpression(element);
                    } else if (this._groups.has(element)) {
                      state = this._groups.get(element).visible;
                    } else {
                      (0, _util2.warn)(`Optional content group not found: ${element}`);
                      return true;
                    }
                    switch (operator) {
                      case "And":
                        if (!state) {
                          return false;
                        }
                        break;
                      case "Or":
                        if (state) {
                          return true;
                        }
                        break;
                      case "Not":
                        return !state;
                      default:
                        return true;
                    }
                  }
                  return operator === "And";
                }
                isVisible(group) {
                  if (group.type === "OCG") {
                    if (!this._groups.has(group.id)) {
                      (0, _util2.warn)(`Optional content group not found: ${group.id}`);
                      return true;
                    }
                    return this._groups.get(group.id).visible;
                  } else if (group.type === "OCMD") {
                    if (group.expression) {
                      return this._evaluateVisibilityExpression(group.expression);
                    }
                    if (!group.policy || group.policy === "AnyOn") {
                      for (const id of group.ids) {
                        if (!this._groups.has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (this._groups.get(id).visible) {
                          return true;
                        }
                      }
                      return false;
                    } else if (group.policy === "AllOn") {
                      for (const id of group.ids) {
                        if (!this._groups.has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (!this._groups.get(id).visible) {
                          return false;
                        }
                      }
                      return true;
                    } else if (group.policy === "AnyOff") {
                      for (const id of group.ids) {
                        if (!this._groups.has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (!this._groups.get(id).visible) {
                          return true;
                        }
                      }
                      return false;
                    } else if (group.policy === "AllOff") {
                      for (const id of group.ids) {
                        if (!this._groups.has(id)) {
                          (0, _util2.warn)(`Optional content group not found: ${id}`);
                          return true;
                        }
                        if (this._groups.get(id).visible) {
                          return false;
                        }
                      }
                      return true;
                    }
                    (0, _util2.warn)(`Unknown optional content policy ${group.policy}.`);
                    return true;
                  }
                  (0, _util2.warn)(`Unknown group type ${group.type}.`);
                  return true;
                }
                setVisibility(id, visible = true) {
                  if (!this._groups.has(id)) {
                    (0, _util2.warn)(`Optional content group not found: ${id}`);
                    return;
                  }
                  this._groups.get(id).visible = !!visible;
                }
                getOrder() {
                  if (!this._groups.size) {
                    return null;
                  }
                  if (this._order) {
                    return this._order.slice();
                  }
                  return Array.from(this._groups.keys());
                }
                getGroups() {
                  return this._groups.size > 0 ? (0, _util2.objectFromMap)(this._groups) : null;
                }
                getGroup(id) {
                  return this._groups.get(id) || null;
                }
              }
              exports2.OptionalContentConfig = OptionalContentConfig;
            },
            /* 16 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFDataTransportStream = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _display_utils2 = __w_pdfjs_require__2(1);
              class PDFDataTransportStream {
                constructor(params, pdfDataRangeTransport) {
                  (0, _util2.assert)(pdfDataRangeTransport, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
                  this._queuedChunks = [];
                  this._progressiveDone = params.progressiveDone || false;
                  this._contentDispositionFilename = params.contentDispositionFilename || null;
                  const initialData = params.initialData;
                  if ((initialData == null ? void 0 : initialData.length) > 0) {
                    const buffer = new Uint8Array(initialData).buffer;
                    this._queuedChunks.push(buffer);
                  }
                  this._pdfDataRangeTransport = pdfDataRangeTransport;
                  this._isStreamingSupported = !params.disableStream;
                  this._isRangeSupported = !params.disableRange;
                  this._contentLength = params.length;
                  this._fullRequestReader = null;
                  this._rangeReaders = [];
                  this._pdfDataRangeTransport.addRangeListener((begin, chunk) => {
                    this._onReceiveData({
                      begin,
                      chunk
                    });
                  });
                  this._pdfDataRangeTransport.addProgressListener((loaded, total) => {
                    this._onProgress({
                      loaded,
                      total
                    });
                  });
                  this._pdfDataRangeTransport.addProgressiveReadListener((chunk) => {
                    this._onReceiveData({
                      chunk
                    });
                  });
                  this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                    this._onProgressiveDone();
                  });
                  this._pdfDataRangeTransport.transportReady();
                }
                _onReceiveData(args) {
                  const buffer = new Uint8Array(args.chunk).buffer;
                  if (args.begin === void 0) {
                    if (this._fullRequestReader) {
                      this._fullRequestReader._enqueue(buffer);
                    } else {
                      this._queuedChunks.push(buffer);
                    }
                  } else {
                    const found = this._rangeReaders.some(function(rangeReader) {
                      if (rangeReader._begin !== args.begin) {
                        return false;
                      }
                      rangeReader._enqueue(buffer);
                      return true;
                    });
                    (0, _util2.assert)(found, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
                  }
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                _onProgress(evt) {
                  if (evt.total === void 0) {
                    const firstReader = this._rangeReaders[0];
                    if (firstReader == null ? void 0 : firstReader.onProgress) {
                      firstReader.onProgress({
                        loaded: evt.loaded
                      });
                    }
                  } else {
                    const fullReader = this._fullRequestReader;
                    if (fullReader == null ? void 0 : fullReader.onProgress) {
                      fullReader.onProgress({
                        loaded: evt.loaded,
                        total: evt.total
                      });
                    }
                  }
                }
                _onProgressiveDone() {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.progressiveDone();
                  }
                  this._progressiveDone = true;
                }
                _removeRangeReader(reader) {
                  const i2 = this._rangeReaders.indexOf(reader);
                  if (i2 >= 0) {
                    this._rangeReaders.splice(i2, 1);
                  }
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                  const queuedChunks = this._queuedChunks;
                  this._queuedChunks = null;
                  return new PDFDataTransportStreamReader(this, queuedChunks, this._progressiveDone, this._contentDispositionFilename);
                }
                getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const reader = new PDFDataTransportStreamRangeReader(this, begin, end);
                  this._pdfDataRangeTransport.requestDataRange(begin, end);
                  this._rangeReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }
                  for (const reader of this._rangeReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                  this._pdfDataRangeTransport.abort();
                }
              }
              exports2.PDFDataTransportStream = PDFDataTransportStream;
              class PDFDataTransportStreamReader {
                constructor(stream, queuedChunks, progressiveDone = false, contentDispositionFilename = null) {
                  this._stream = stream;
                  this._done = progressiveDone || false;
                  this._filename = (0, _display_utils2.isPdfFile)(contentDispositionFilename) ? contentDispositionFilename : null;
                  this._queuedChunks = queuedChunks || [];
                  this._loaded = 0;
                  for (const chunk of this._queuedChunks) {
                    this._loaded += chunk.byteLength;
                  }
                  this._requests = [];
                  this._headersReady = Promise.resolve();
                  stream._fullRequestReader = this;
                  this.onProgress = null;
                }
                _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }
                  if (this._requests.length > 0) {
                    const requestCapability = this._requests.shift();
                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunks.push(chunk);
                  }
                  this._loaded += chunk.byteLength;
                }
                get headersReady() {
                  return this._headersReady;
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._stream._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._stream._isStreamingSupported;
                }
                get contentLength() {
                  return this._stream._contentLength;
                }
                async read() {
                  if (this._queuedChunks.length > 0) {
                    const chunk = this._queuedChunks.shift();
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                }
                progressiveDone() {
                  if (this._done) {
                    return;
                  }
                  this._done = true;
                }
              }
              class PDFDataTransportStreamRangeReader {
                constructor(stream, begin, end) {
                  this._stream = stream;
                  this._begin = begin;
                  this._end = end;
                  this._queuedChunk = null;
                  this._requests = [];
                  this._done = false;
                  this.onProgress = null;
                }
                _enqueue(chunk) {
                  if (this._done) {
                    return;
                  }
                  if (this._requests.length === 0) {
                    this._queuedChunk = chunk;
                  } else {
                    const requestsCapability = this._requests.shift();
                    requestsCapability.resolve({
                      value: chunk,
                      done: false
                    });
                    for (const requestCapability of this._requests) {
                      requestCapability.resolve({
                        value: void 0,
                        done: true
                      });
                    }
                    this._requests.length = 0;
                  }
                  this._done = true;
                  this._stream._removeRangeReader(this);
                }
                get isStreamingSupported() {
                  return false;
                }
                async read() {
                  if (this._queuedChunk) {
                    const chunk = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  this._stream._removeRangeReader(this);
                }
              }
            },
            /* 17 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.AnnotationLayer = void 0;
              var _display_utils2 = __w_pdfjs_require__2(1);
              var _util2 = __w_pdfjs_require__2(2);
              var _annotation_storage2 = __w_pdfjs_require__2(8);
              var _scripting_utils = __w_pdfjs_require__2(18);
              class AnnotationElementFactory {
                static create(parameters) {
                  const subtype = parameters.data.annotationType;
                  switch (subtype) {
                    case _util2.AnnotationType.LINK:
                      return new LinkAnnotationElement(parameters);
                    case _util2.AnnotationType.TEXT:
                      return new TextAnnotationElement(parameters);
                    case _util2.AnnotationType.WIDGET:
                      const fieldType = parameters.data.fieldType;
                      switch (fieldType) {
                        case "Tx":
                          return new TextWidgetAnnotationElement(parameters);
                        case "Btn":
                          if (parameters.data.radioButton) {
                            return new RadioButtonWidgetAnnotationElement(parameters);
                          } else if (parameters.data.checkBox) {
                            return new CheckboxWidgetAnnotationElement(parameters);
                          }
                          return new PushButtonWidgetAnnotationElement(parameters);
                        case "Ch":
                          return new ChoiceWidgetAnnotationElement(parameters);
                      }
                      return new WidgetAnnotationElement(parameters);
                    case _util2.AnnotationType.POPUP:
                      return new PopupAnnotationElement(parameters);
                    case _util2.AnnotationType.FREETEXT:
                      return new FreeTextAnnotationElement(parameters);
                    case _util2.AnnotationType.LINE:
                      return new LineAnnotationElement(parameters);
                    case _util2.AnnotationType.SQUARE:
                      return new SquareAnnotationElement(parameters);
                    case _util2.AnnotationType.CIRCLE:
                      return new CircleAnnotationElement(parameters);
                    case _util2.AnnotationType.POLYLINE:
                      return new PolylineAnnotationElement(parameters);
                    case _util2.AnnotationType.CARET:
                      return new CaretAnnotationElement(parameters);
                    case _util2.AnnotationType.INK:
                      return new InkAnnotationElement(parameters);
                    case _util2.AnnotationType.POLYGON:
                      return new PolygonAnnotationElement(parameters);
                    case _util2.AnnotationType.HIGHLIGHT:
                      return new HighlightAnnotationElement(parameters);
                    case _util2.AnnotationType.UNDERLINE:
                      return new UnderlineAnnotationElement(parameters);
                    case _util2.AnnotationType.SQUIGGLY:
                      return new SquigglyAnnotationElement(parameters);
                    case _util2.AnnotationType.STRIKEOUT:
                      return new StrikeOutAnnotationElement(parameters);
                    case _util2.AnnotationType.STAMP:
                      return new StampAnnotationElement(parameters);
                    case _util2.AnnotationType.FILEATTACHMENT:
                      return new FileAttachmentAnnotationElement(parameters);
                    default:
                      return new AnnotationElement(parameters);
                  }
                }
              }
              class AnnotationElement {
                constructor(parameters, {
                  isRenderable = false,
                  ignoreBorder = false,
                  createQuadrilaterals = false
                } = {}) {
                  this.isRenderable = isRenderable;
                  this.data = parameters.data;
                  this.layer = parameters.layer;
                  this.page = parameters.page;
                  this.viewport = parameters.viewport;
                  this.linkService = parameters.linkService;
                  this.downloadManager = parameters.downloadManager;
                  this.imageResourcesPath = parameters.imageResourcesPath;
                  this.renderInteractiveForms = parameters.renderInteractiveForms;
                  this.svgFactory = parameters.svgFactory;
                  this.annotationStorage = parameters.annotationStorage;
                  this.enableScripting = parameters.enableScripting;
                  this.hasJSActions = parameters.hasJSActions;
                  this._mouseState = parameters.mouseState;
                  if (isRenderable) {
                    this.container = this._createContainer(ignoreBorder);
                  }
                  if (createQuadrilaterals) {
                    this.quadrilaterals = this._createQuadrilaterals(ignoreBorder);
                  }
                }
                _createContainer(ignoreBorder = false) {
                  const data = this.data, page = this.page, viewport = this.viewport;
                  const container = document.createElement("section");
                  let width = data.rect[2] - data.rect[0];
                  let height = data.rect[3] - data.rect[1];
                  container.setAttribute("data-annotation-id", data.id);
                  const rect = _util2.Util.normalizeRect([data.rect[0], page.view[3] - data.rect[1] + page.view[1], data.rect[2], page.view[3] - data.rect[3] + page.view[1]]);
                  container.style.transform = `matrix(${viewport.transform.join(",")})`;
                  container.style.transformOrigin = `${-rect[0]}px ${-rect[1]}px`;
                  if (!ignoreBorder && data.borderStyle.width > 0) {
                    container.style.borderWidth = `${data.borderStyle.width}px`;
                    if (data.borderStyle.style !== _util2.AnnotationBorderStyleType.UNDERLINE) {
                      width = width - 2 * data.borderStyle.width;
                      height = height - 2 * data.borderStyle.width;
                    }
                    const horizontalRadius = data.borderStyle.horizontalCornerRadius;
                    const verticalRadius = data.borderStyle.verticalCornerRadius;
                    if (horizontalRadius > 0 || verticalRadius > 0) {
                      const radius = `${horizontalRadius}px / ${verticalRadius}px`;
                      container.style.borderRadius = radius;
                    }
                    switch (data.borderStyle.style) {
                      case _util2.AnnotationBorderStyleType.SOLID:
                        container.style.borderStyle = "solid";
                        break;
                      case _util2.AnnotationBorderStyleType.DASHED:
                        container.style.borderStyle = "dashed";
                        break;
                      case _util2.AnnotationBorderStyleType.BEVELED:
                        (0, _util2.warn)("Unimplemented border style: beveled");
                        break;
                      case _util2.AnnotationBorderStyleType.INSET:
                        (0, _util2.warn)("Unimplemented border style: inset");
                        break;
                      case _util2.AnnotationBorderStyleType.UNDERLINE:
                        container.style.borderBottomStyle = "solid";
                        break;
                      default:
                        break;
                    }
                    if (data.color) {
                      container.style.borderColor = _util2.Util.makeHexColor(data.color[0] | 0, data.color[1] | 0, data.color[2] | 0);
                    } else {
                      container.style.borderWidth = 0;
                    }
                  }
                  container.style.left = `${rect[0]}px`;
                  container.style.top = `${rect[1]}px`;
                  container.style.width = `${width}px`;
                  container.style.height = `${height}px`;
                  return container;
                }
                _createQuadrilaterals(ignoreBorder = false) {
                  if (!this.data.quadPoints) {
                    return null;
                  }
                  const quadrilaterals = [];
                  const savedRect = this.data.rect;
                  for (const quadPoint of this.data.quadPoints) {
                    this.data.rect = [quadPoint[2].x, quadPoint[2].y, quadPoint[1].x, quadPoint[1].y];
                    quadrilaterals.push(this._createContainer(ignoreBorder));
                  }
                  this.data.rect = savedRect;
                  return quadrilaterals;
                }
                _createPopup(trigger, data) {
                  let container = this.container;
                  if (this.quadrilaterals) {
                    trigger = trigger || this.quadrilaterals;
                    container = this.quadrilaterals[0];
                  }
                  if (!trigger) {
                    trigger = document.createElement("div");
                    trigger.style.height = container.style.height;
                    trigger.style.width = container.style.width;
                    container.appendChild(trigger);
                  }
                  const popupElement = new PopupElement({
                    container,
                    trigger,
                    color: data.color,
                    title: data.title,
                    modificationDate: data.modificationDate,
                    contents: data.contents,
                    hideWrapper: true
                  });
                  const popup = popupElement.render();
                  popup.style.left = container.style.width;
                  container.appendChild(popup);
                }
                _renderQuadrilaterals(className) {
                  for (const quadrilateral of this.quadrilaterals) {
                    quadrilateral.className = className;
                  }
                  return this.quadrilaterals;
                }
                render() {
                  (0, _util2.unreachable)("Abstract method `AnnotationElement.render` called");
                }
              }
              class LinkAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.url || parameters.data.dest || parameters.data.action || parameters.data.isTooltipOnly || parameters.data.actions && (parameters.data.actions.Action || parameters.data.actions["Mouse Up"] || parameters.data.actions["Mouse Down"]));
                  super(parameters, {
                    isRenderable,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  const {
                    data,
                    linkService
                  } = this;
                  const link = document.createElement("a");
                  if (data.url) {
                    (0, _display_utils2.addLinkAttributes)(link, {
                      url: data.url,
                      target: data.newWindow ? _display_utils2.LinkTarget.BLANK : linkService.externalLinkTarget,
                      rel: linkService.externalLinkRel,
                      enabled: linkService.externalLinkEnabled
                    });
                  } else if (data.action) {
                    this._bindNamedAction(link, data.action);
                  } else if (data.dest) {
                    this._bindLink(link, data.dest);
                  } else if (data.actions && (data.actions.Action || data.actions["Mouse Up"] || data.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions) {
                    this._bindJSAction(link, data);
                  } else {
                    this._bindLink(link, "");
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("linkAnnotation").map((quadrilateral, index) => {
                      const linkElement = index === 0 ? link : link.cloneNode();
                      quadrilateral.appendChild(linkElement);
                      return quadrilateral;
                    });
                  }
                  this.container.className = "linkAnnotation";
                  this.container.appendChild(link);
                  return this.container;
                }
                _bindLink(link, destination) {
                  link.href = this.linkService.getDestinationHash(destination);
                  link.onclick = () => {
                    if (destination) {
                      this.linkService.goToDestination(destination);
                    }
                    return false;
                  };
                  if (destination || destination === "") {
                    link.className = "internalLink";
                  }
                }
                _bindNamedAction(link, action) {
                  link.href = this.linkService.getAnchorUrl("");
                  link.onclick = () => {
                    this.linkService.executeNamedAction(action);
                    return false;
                  };
                  link.className = "internalLink";
                }
                _bindJSAction(link, data) {
                  link.href = this.linkService.getAnchorUrl("");
                  const map = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                  for (const name of Object.keys(data.actions)) {
                    const jsName = map.get(name);
                    if (!jsName) {
                      continue;
                    }
                    link[jsName] = () => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: data.id,
                          name
                        }
                      });
                      return false;
                    };
                  }
                  link.className = "internalLink";
                }
              }
              class TextAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable
                  });
                }
                render() {
                  this.container.className = "textAnnotation";
                  const image = document.createElement("img");
                  image.style.height = this.container.style.height;
                  image.style.width = this.container.style.width;
                  image.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
                  image.alt = "[{{type}} Annotation]";
                  image.dataset.l10nId = "text_annotation_type";
                  image.dataset.l10nArgs = JSON.stringify({
                    type: this.data.name
                  });
                  if (!this.data.hasPopup) {
                    this._createPopup(image, this.data);
                  }
                  this.container.appendChild(image);
                  return this.container;
                }
              }
              class WidgetAnnotationElement extends AnnotationElement {
                render() {
                  if (this.data.alternativeText) {
                    this.container.title = this.data.alternativeText;
                  }
                  return this.container;
                }
                _getKeyModifier(event) {
                  return navigator.platform.includes("Win") && event.ctrlKey || navigator.platform.includes("Mac") && event.metaKey;
                }
                _setEventListener(element, baseName, eventName, valueGetter) {
                  if (baseName.includes("mouse")) {
                    element.addEventListener(baseName, (event) => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: eventName,
                          value: valueGetter(event),
                          shift: event.shiftKey,
                          modifier: this._getKeyModifier(event)
                        }
                      });
                    });
                  } else {
                    element.addEventListener(baseName, (event) => {
                      var _a;
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id: this.data.id,
                          name: eventName,
                          value: event.target.checked
                        }
                      });
                    });
                  }
                }
                _setEventListeners(element, names, getter) {
                  var _a;
                  for (const [baseName, eventName] of names) {
                    if (eventName === "Action" || ((_a = this.data.actions) == null ? void 0 : _a[eventName])) {
                      this._setEventListener(element, baseName, eventName, getter);
                    }
                  }
                }
                _dispatchEventFromSandbox(actions, jsEvent) {
                  const setColor = (jsName, styleName, event) => {
                    const color = event.detail[jsName];
                    event.target.style[styleName] = _scripting_utils.ColorConverters[`${color[0]}_HTML`](color.slice(1));
                  };
                  const commonActions = {
                    display: (event) => {
                      const hidden = event.detail.display % 2 === 1;
                      event.target.style.visibility = hidden ? "hidden" : "visible";
                      this.annotationStorage.setValue(this.data.id, {
                        hidden,
                        print: event.detail.display === 0 || event.detail.display === 3
                      });
                    },
                    print: (event) => {
                      this.annotationStorage.setValue(this.data.id, {
                        print: event.detail.print
                      });
                    },
                    hidden: (event) => {
                      event.target.style.visibility = event.detail.hidden ? "hidden" : "visible";
                      this.annotationStorage.setValue(this.data.id, {
                        hidden: event.detail.hidden
                      });
                    },
                    focus: (event) => {
                      setTimeout(() => event.target.focus({
                        preventScroll: false
                      }), 0);
                    },
                    userName: (event) => {
                      event.target.title = event.detail.userName;
                    },
                    readonly: (event) => {
                      if (event.detail.readonly) {
                        event.target.setAttribute("readonly", "");
                      } else {
                        event.target.removeAttribute("readonly");
                      }
                    },
                    required: (event) => {
                      if (event.detail.required) {
                        event.target.setAttribute("required", "");
                      } else {
                        event.target.removeAttribute("required");
                      }
                    },
                    bgColor: (event) => {
                      setColor("bgColor", "backgroundColor", event);
                    },
                    fillColor: (event) => {
                      setColor("fillColor", "backgroundColor", event);
                    },
                    fgColor: (event) => {
                      setColor("fgColor", "color", event);
                    },
                    textColor: (event) => {
                      setColor("textColor", "color", event);
                    },
                    borderColor: (event) => {
                      setColor("borderColor", "borderColor", event);
                    },
                    strokeColor: (event) => {
                      setColor("strokeColor", "borderColor", event);
                    }
                  };
                  for (const name of Object.keys(jsEvent.detail)) {
                    const action = actions[name] || commonActions[name];
                    if (action) {
                      action(jsEvent);
                    }
                  }
                }
              }
              class TextWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  const isRenderable = parameters.renderInteractiveForms || !parameters.data.hasAppearance && !!parameters.data.fieldValue;
                  super(parameters, {
                    isRenderable
                  });
                }
                setPropertyOnSiblings(base, key, value, keyInStorage) {
                  const storage = this.annotationStorage;
                  for (const element of document.getElementsByName(base.name)) {
                    if (element !== base) {
                      element[key] = value;
                      const data = /* @__PURE__ */ Object.create(null);
                      data[keyInStorage] = value;
                      storage.setValue(element.getAttribute("id"), data);
                    }
                  }
                }
                render() {
                  var _a;
                  const storage = this.annotationStorage;
                  const id = this.data.id;
                  this.container.className = "textWidgetAnnotation";
                  let element = null;
                  if (this.renderInteractiveForms) {
                    const storedData = storage.getValue(id, {
                      value: this.data.fieldValue,
                      valueAsString: this.data.fieldValue
                    });
                    const textContent = storedData.valueAsString || storedData.value || "";
                    const elementData = {
                      userValue: null,
                      formattedValue: null,
                      beforeInputSelectionRange: null,
                      beforeInputValue: null
                    };
                    if (this.data.multiLine) {
                      element = document.createElement("textarea");
                      element.textContent = textContent;
                    } else {
                      element = document.createElement("input");
                      element.type = "text";
                      element.setAttribute("value", textContent);
                    }
                    elementData.userValue = textContent;
                    element.setAttribute("id", id);
                    element.addEventListener("input", (event) => {
                      storage.setValue(id, {
                        value: event.target.value
                      });
                      this.setPropertyOnSiblings(element, "value", event.target.value, "value");
                    });
                    let blurListener = (event) => {
                      if (elementData.formattedValue) {
                        event.target.value = elementData.formattedValue;
                      }
                      event.target.scrollLeft = 0;
                      elementData.beforeInputSelectionRange = null;
                    };
                    if (this.enableScripting && this.hasJSActions) {
                      element.addEventListener("focus", (event) => {
                        if (elementData.userValue) {
                          event.target.value = elementData.userValue;
                        }
                      });
                      element.addEventListener("updatefromsandbox", (jsEvent) => {
                        const actions = {
                          value(event) {
                            elementData.userValue = event.detail.value || "";
                            storage.setValue(id, {
                              value: elementData.userValue.toString()
                            });
                            if (!elementData.formattedValue) {
                              event.target.value = elementData.userValue;
                            }
                          },
                          valueAsString(event) {
                            elementData.formattedValue = event.detail.valueAsString || "";
                            if (event.target !== document.activeElement) {
                              event.target.value = elementData.formattedValue;
                            }
                            storage.setValue(id, {
                              formattedValue: elementData.formattedValue
                            });
                          },
                          selRange(event) {
                            const [selStart, selEnd] = event.detail.selRange;
                            if (selStart >= 0 && selEnd < event.target.value.length) {
                              event.target.setSelectionRange(selStart, selEnd);
                            }
                          }
                        };
                        this._dispatchEventFromSandbox(actions, jsEvent);
                      });
                      element.addEventListener("keydown", (event) => {
                        var _a2;
                        elementData.beforeInputValue = event.target.value;
                        let commitKey = -1;
                        if (event.key === "Escape") {
                          commitKey = 0;
                        } else if (event.key === "Enter") {
                          commitKey = 2;
                        } else if (event.key === "Tab") {
                          commitKey = 3;
                        }
                        if (commitKey === -1) {
                          return;
                        }
                        elementData.userValue = event.target.value;
                        (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id,
                            name: "Keystroke",
                            value: event.target.value,
                            willCommit: true,
                            commitKey,
                            selStart: event.target.selectionStart,
                            selEnd: event.target.selectionEnd
                          }
                        });
                      });
                      const _blurListener = blurListener;
                      blurListener = null;
                      element.addEventListener("blur", (event) => {
                        var _a2;
                        if (this._mouseState.isDown) {
                          elementData.userValue = event.target.value;
                          (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                              id,
                              name: "Keystroke",
                              value: event.target.value,
                              willCommit: true,
                              commitKey: 1,
                              selStart: event.target.selectionStart,
                              selEnd: event.target.selectionEnd
                            }
                          });
                        }
                        _blurListener(event);
                      });
                      element.addEventListener("mousedown", (event) => {
                        elementData.beforeInputValue = event.target.value;
                        elementData.beforeInputSelectionRange = null;
                      });
                      element.addEventListener("keyup", (event) => {
                        if (event.target.selectionStart === event.target.selectionEnd) {
                          elementData.beforeInputSelectionRange = null;
                        }
                      });
                      element.addEventListener("select", (event) => {
                        elementData.beforeInputSelectionRange = [event.target.selectionStart, event.target.selectionEnd];
                      });
                      if ((_a = this.data.actions) == null ? void 0 : _a.Keystroke) {
                        element.addEventListener("input", (event) => {
                          var _a2;
                          let selStart = -1;
                          let selEnd = -1;
                          if (elementData.beforeInputSelectionRange) {
                            [selStart, selEnd] = elementData.beforeInputSelectionRange;
                          }
                          (_a2 = this.linkService.eventBus) == null ? void 0 : _a2.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                              id,
                              name: "Keystroke",
                              value: elementData.beforeInputValue,
                              change: event.data,
                              willCommit: false,
                              selStart,
                              selEnd
                            }
                          });
                        });
                      }
                      this._setEventListeners(element, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.value);
                    }
                    if (blurListener) {
                      element.addEventListener("blur", blurListener);
                    }
                    element.disabled = this.data.readOnly;
                    element.name = this.data.fieldName;
                    if (this.data.maxLen !== null) {
                      element.maxLength = this.data.maxLen;
                    }
                    if (this.data.comb) {
                      const fieldWidth = this.data.rect[2] - this.data.rect[0];
                      const combWidth = fieldWidth / this.data.maxLen;
                      element.classList.add("comb");
                      element.style.letterSpacing = `calc(${combWidth}px - 1ch)`;
                    }
                  } else {
                    element = document.createElement("div");
                    element.textContent = this.data.fieldValue;
                    element.style.verticalAlign = "middle";
                    element.style.display = "table-cell";
                  }
                  this._setTextStyle(element);
                  this.container.appendChild(element);
                  return this.container;
                }
                _setTextStyle(element) {
                  const TEXT_ALIGNMENT = ["left", "center", "right"];
                  const {
                    fontSize,
                    fontColor
                  } = this.data.defaultAppearanceData;
                  const style = element.style;
                  if (fontSize) {
                    style.fontSize = `${fontSize}px`;
                  }
                  style.color = _util2.Util.makeHexColor(fontColor[0], fontColor[1], fontColor[2]);
                  if (this.data.textAlignment !== null) {
                    style.textAlign = TEXT_ALIGNMENT[this.data.textAlignment];
                  }
                }
              }
              class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderInteractiveForms
                  });
                }
                render() {
                  const storage = this.annotationStorage;
                  const data = this.data;
                  const id = data.id;
                  let value = storage.getValue(id, {
                    value: data.fieldValue && (data.exportValue && data.exportValue === data.fieldValue || !data.exportValue && data.fieldValue !== "Off")
                  }).value;
                  if (typeof value === "string") {
                    value = value !== "Off";
                    storage.setValue(id, {
                      value
                    });
                  }
                  this.container.className = "buttonWidgetAnnotation checkBox";
                  const element = document.createElement("input");
                  element.disabled = data.readOnly;
                  element.type = "checkbox";
                  element.name = this.data.fieldName;
                  if (value) {
                    element.setAttribute("checked", true);
                  }
                  element.setAttribute("id", id);
                  element.addEventListener("change", function(event) {
                    const name = event.target.name;
                    for (const checkbox of document.getElementsByName(name)) {
                      if (checkbox !== event.target) {
                        checkbox.checked = false;
                        storage.setValue(checkbox.parentNode.getAttribute("data-annotation-id"), {
                          value: false
                        });
                      }
                    }
                    storage.setValue(id, {
                      value: event.target.checked
                    });
                  });
                  if (this.enableScripting && this.hasJSActions) {
                    element.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value(event) {
                          event.target.checked = event.detail.value !== "Off";
                          storage.setValue(id, {
                            value: event.target.checked
                          });
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
                  }
                  this.container.appendChild(element);
                  return this.container;
                }
              }
              class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderInteractiveForms
                  });
                }
                render() {
                  this.container.className = "buttonWidgetAnnotation radioButton";
                  const storage = this.annotationStorage;
                  const data = this.data;
                  const id = data.id;
                  let value = storage.getValue(id, {
                    value: data.fieldValue === data.buttonValue
                  }).value;
                  if (typeof value === "string") {
                    value = value !== data.buttonValue;
                    storage.setValue(id, {
                      value
                    });
                  }
                  const element = document.createElement("input");
                  element.disabled = data.readOnly;
                  element.type = "radio";
                  element.name = data.fieldName;
                  if (value) {
                    element.setAttribute("checked", true);
                  }
                  element.setAttribute("id", id);
                  element.addEventListener("change", function(event) {
                    const {
                      target
                    } = event;
                    for (const radio of document.getElementsByName(target.name)) {
                      if (radio !== target) {
                        storage.setValue(radio.getAttribute("id"), {
                          value: false
                        });
                      }
                    }
                    storage.setValue(id, {
                      value: target.checked
                    });
                  });
                  if (this.enableScripting && this.hasJSActions) {
                    const pdfButtonValue = data.buttonValue;
                    element.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value(event) {
                          const checked = pdfButtonValue === event.detail.value;
                          for (const radio of document.getElementsByName(event.target.name)) {
                            const radioId = radio.getAttribute("id");
                            radio.checked = radioId === id && checked;
                            storage.setValue(radioId, {
                              value: radio.checked
                            });
                          }
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    this._setEventListeners(element, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (event) => event.target.checked);
                  }
                  this.container.appendChild(element);
                  return this.container;
                }
              }
              class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
                render() {
                  const container = super.render();
                  container.className = "buttonWidgetAnnotation pushButton";
                  if (this.data.alternativeText) {
                    container.title = this.data.alternativeText;
                  }
                  return container;
                }
              }
              class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(parameters) {
                  super(parameters, {
                    isRenderable: parameters.renderInteractiveForms
                  });
                }
                render() {
                  this.container.className = "choiceWidgetAnnotation";
                  const storage = this.annotationStorage;
                  const id = this.data.id;
                  storage.getValue(id, {
                    value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : void 0
                  });
                  const selectElement = document.createElement("select");
                  selectElement.disabled = this.data.readOnly;
                  selectElement.name = this.data.fieldName;
                  selectElement.setAttribute("id", id);
                  if (!this.data.combo) {
                    selectElement.size = this.data.options.length;
                    if (this.data.multiSelect) {
                      selectElement.multiple = true;
                    }
                  }
                  for (const option of this.data.options) {
                    const optionElement = document.createElement("option");
                    optionElement.textContent = option.displayValue;
                    optionElement.value = option.exportValue;
                    if (this.data.fieldValue.includes(option.exportValue)) {
                      optionElement.setAttribute("selected", true);
                    }
                    selectElement.appendChild(optionElement);
                  }
                  const getValue = (event, isExport) => {
                    const name = isExport ? "value" : "textContent";
                    const options = event.target.options;
                    if (!event.target.multiple) {
                      return options.selectedIndex === -1 ? null : options[options.selectedIndex][name];
                    }
                    return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option[name]);
                  };
                  const getItems = (event) => {
                    const options = event.target.options;
                    return Array.prototype.map.call(options, (option) => {
                      return {
                        displayValue: option.textContent,
                        exportValue: option.value
                      };
                    });
                  };
                  if (this.enableScripting && this.hasJSActions) {
                    selectElement.addEventListener("updatefromsandbox", (jsEvent) => {
                      const actions = {
                        value(event) {
                          const options = selectElement.options;
                          const value = event.detail.value;
                          const values = new Set(Array.isArray(value) ? value : [value]);
                          Array.prototype.forEach.call(options, (option) => {
                            option.selected = values.has(option.value);
                          });
                          storage.setValue(id, {
                            value: getValue(event, true)
                          });
                        },
                        multipleSelection(event) {
                          selectElement.multiple = true;
                        },
                        remove(event) {
                          const options = selectElement.options;
                          const index = event.detail.remove;
                          options[index].selected = false;
                          selectElement.remove(index);
                          if (options.length > 0) {
                            const i2 = Array.prototype.findIndex.call(options, (option) => option.selected);
                            if (i2 === -1) {
                              options[0].selected = true;
                            }
                          }
                          storage.setValue(id, {
                            value: getValue(event, true),
                            items: getItems(event)
                          });
                        },
                        clear(event) {
                          while (selectElement.length !== 0) {
                            selectElement.remove(0);
                          }
                          storage.setValue(id, {
                            value: null,
                            items: []
                          });
                        },
                        insert(event) {
                          const {
                            index,
                            displayValue,
                            exportValue
                          } = event.detail.insert;
                          const optionElement = document.createElement("option");
                          optionElement.textContent = displayValue;
                          optionElement.value = exportValue;
                          selectElement.insertBefore(optionElement, selectElement.children[index]);
                          storage.setValue(id, {
                            value: getValue(event, true),
                            items: getItems(event)
                          });
                        },
                        items(event) {
                          const {
                            items
                          } = event.detail;
                          while (selectElement.length !== 0) {
                            selectElement.remove(0);
                          }
                          for (const item of items) {
                            const {
                              displayValue,
                              exportValue
                            } = item;
                            const optionElement = document.createElement("option");
                            optionElement.textContent = displayValue;
                            optionElement.value = exportValue;
                            selectElement.appendChild(optionElement);
                          }
                          if (selectElement.options.length > 0) {
                            selectElement.options[0].selected = true;
                          }
                          storage.setValue(id, {
                            value: getValue(event, true),
                            items: getItems(event)
                          });
                        },
                        indices(event) {
                          const indices = new Set(event.detail.indices);
                          const options = event.target.options;
                          Array.prototype.forEach.call(options, (option, i2) => {
                            option.selected = indices.has(i2);
                          });
                          storage.setValue(id, {
                            value: getValue(event, true)
                          });
                        },
                        editable(event) {
                          event.target.disabled = !event.detail.editable;
                        }
                      };
                      this._dispatchEventFromSandbox(actions, jsEvent);
                    });
                    selectElement.addEventListener("input", (event) => {
                      var _a;
                      const exportValue = getValue(event, true);
                      const value = getValue(event, false);
                      storage.setValue(id, {
                        value: exportValue
                      });
                      (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                          id,
                          name: "Keystroke",
                          value,
                          changeEx: exportValue,
                          willCommit: true,
                          commitKey: 1,
                          keyDown: false
                        }
                      });
                    });
                    this._setEventListeners(selectElement, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"]], (event) => event.target.checked);
                  } else {
                    selectElement.addEventListener("input", function(event) {
                      storage.setValue(id, {
                        value: getValue(event)
                      });
                    });
                  }
                  this.container.appendChild(selectElement);
                  return this.container;
                }
              }
              class PopupAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable
                  });
                }
                render() {
                  const IGNORE_TYPES = ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"];
                  this.container.className = "popupAnnotation";
                  if (IGNORE_TYPES.includes(this.data.parentType)) {
                    return this.container;
                  }
                  const selector = `[data-annotation-id="${this.data.parentId}"]`;
                  const parentElements = this.layer.querySelectorAll(selector);
                  if (parentElements.length === 0) {
                    return this.container;
                  }
                  const popup = new PopupElement({
                    container: this.container,
                    trigger: Array.from(parentElements),
                    color: this.data.color,
                    title: this.data.title,
                    modificationDate: this.data.modificationDate,
                    contents: this.data.contents
                  });
                  const page = this.page;
                  const rect = _util2.Util.normalizeRect([this.data.parentRect[0], page.view[3] - this.data.parentRect[1] + page.view[1], this.data.parentRect[2], page.view[3] - this.data.parentRect[3] + page.view[1]]);
                  const popupLeft = rect[0] + this.data.parentRect[2] - this.data.parentRect[0];
                  const popupTop = rect[1];
                  this.container.style.transformOrigin = `${-popupLeft}px ${-popupTop}px`;
                  this.container.style.left = `${popupLeft}px`;
                  this.container.style.top = `${popupTop}px`;
                  this.container.appendChild(popup.render());
                  return this.container;
                }
              }
              class PopupElement {
                constructor(parameters) {
                  this.container = parameters.container;
                  this.trigger = parameters.trigger;
                  this.color = parameters.color;
                  this.title = parameters.title;
                  this.modificationDate = parameters.modificationDate;
                  this.contents = parameters.contents;
                  this.hideWrapper = parameters.hideWrapper || false;
                  this.pinned = false;
                }
                render() {
                  const BACKGROUND_ENLIGHT = 0.7;
                  const wrapper = document.createElement("div");
                  wrapper.className = "popupWrapper";
                  this.hideElement = this.hideWrapper ? wrapper : this.container;
                  this.hideElement.hidden = true;
                  const popup = document.createElement("div");
                  popup.className = "popup";
                  const color = this.color;
                  if (color) {
                    const r2 = BACKGROUND_ENLIGHT * (255 - color[0]) + color[0];
                    const g = BACKGROUND_ENLIGHT * (255 - color[1]) + color[1];
                    const b = BACKGROUND_ENLIGHT * (255 - color[2]) + color[2];
                    popup.style.backgroundColor = _util2.Util.makeHexColor(r2 | 0, g | 0, b | 0);
                  }
                  const title = document.createElement("h1");
                  title.textContent = this.title;
                  popup.appendChild(title);
                  const dateObject = _display_utils2.PDFDateString.toDateObject(this.modificationDate);
                  if (dateObject) {
                    const modificationDate = document.createElement("span");
                    modificationDate.textContent = "{{date}}, {{time}}";
                    modificationDate.dataset.l10nId = "annotation_date_string";
                    modificationDate.dataset.l10nArgs = JSON.stringify({
                      date: dateObject.toLocaleDateString(),
                      time: dateObject.toLocaleTimeString()
                    });
                    popup.appendChild(modificationDate);
                  }
                  const contents = this._formatContents(this.contents);
                  popup.appendChild(contents);
                  if (!Array.isArray(this.trigger)) {
                    this.trigger = [this.trigger];
                  }
                  for (const element of this.trigger) {
                    element.addEventListener("click", this._toggle.bind(this));
                    element.addEventListener("mouseover", this._show.bind(this, false));
                    element.addEventListener("mouseout", this._hide.bind(this, false));
                  }
                  popup.addEventListener("click", this._hide.bind(this, true));
                  wrapper.appendChild(popup);
                  return wrapper;
                }
                _formatContents(contents) {
                  const p2 = document.createElement("p");
                  const lines = contents.split(/(?:\r\n?|\n)/);
                  for (let i2 = 0, ii = lines.length; i2 < ii; ++i2) {
                    const line = lines[i2];
                    p2.appendChild(document.createTextNode(line));
                    if (i2 < ii - 1) {
                      p2.appendChild(document.createElement("br"));
                    }
                  }
                  return p2;
                }
                _toggle() {
                  if (this.pinned) {
                    this._hide(true);
                  } else {
                    this._show(true);
                  }
                }
                _show(pin = false) {
                  if (pin) {
                    this.pinned = true;
                  }
                  if (this.hideElement.hidden) {
                    this.hideElement.hidden = false;
                    this.container.style.zIndex += 1;
                  }
                }
                _hide(unpin = true) {
                  if (unpin) {
                    this.pinned = false;
                  }
                  if (!this.hideElement.hidden && !this.pinned) {
                    this.hideElement.hidden = true;
                    this.container.style.zIndex -= 1;
                  }
                }
              }
              class FreeTextAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "freeTextAnnotation";
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class LineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "lineAnnotation";
                  const data = this.data;
                  const width = data.rect[2] - data.rect[0];
                  const height = data.rect[3] - data.rect[1];
                  const svg = this.svgFactory.create(width, height);
                  const line = this.svgFactory.createElement("svg:line");
                  line.setAttribute("x1", data.rect[2] - data.lineCoordinates[0]);
                  line.setAttribute("y1", data.rect[3] - data.lineCoordinates[1]);
                  line.setAttribute("x2", data.rect[2] - data.lineCoordinates[2]);
                  line.setAttribute("y2", data.rect[3] - data.lineCoordinates[3]);
                  line.setAttribute("stroke-width", data.borderStyle.width || 1);
                  line.setAttribute("stroke", "transparent");
                  svg.appendChild(line);
                  this.container.append(svg);
                  this._createPopup(line, data);
                  return this.container;
                }
              }
              class SquareAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "squareAnnotation";
                  const data = this.data;
                  const width = data.rect[2] - data.rect[0];
                  const height = data.rect[3] - data.rect[1];
                  const svg = this.svgFactory.create(width, height);
                  const borderWidth = data.borderStyle.width;
                  const square = this.svgFactory.createElement("svg:rect");
                  square.setAttribute("x", borderWidth / 2);
                  square.setAttribute("y", borderWidth / 2);
                  square.setAttribute("width", width - borderWidth);
                  square.setAttribute("height", height - borderWidth);
                  square.setAttribute("stroke-width", borderWidth || 1);
                  square.setAttribute("stroke", "transparent");
                  square.setAttribute("fill", "none");
                  svg.appendChild(square);
                  this.container.append(svg);
                  this._createPopup(square, data);
                  return this.container;
                }
              }
              class CircleAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "circleAnnotation";
                  const data = this.data;
                  const width = data.rect[2] - data.rect[0];
                  const height = data.rect[3] - data.rect[1];
                  const svg = this.svgFactory.create(width, height);
                  const borderWidth = data.borderStyle.width;
                  const circle = this.svgFactory.createElement("svg:ellipse");
                  circle.setAttribute("cx", width / 2);
                  circle.setAttribute("cy", height / 2);
                  circle.setAttribute("rx", width / 2 - borderWidth / 2);
                  circle.setAttribute("ry", height / 2 - borderWidth / 2);
                  circle.setAttribute("stroke-width", borderWidth || 1);
                  circle.setAttribute("stroke", "transparent");
                  circle.setAttribute("fill", "none");
                  svg.appendChild(circle);
                  this.container.append(svg);
                  this._createPopup(circle, data);
                  return this.container;
                }
              }
              class PolylineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                  this.containerClassName = "polylineAnnotation";
                  this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const data = this.data;
                  const width = data.rect[2] - data.rect[0];
                  const height = data.rect[3] - data.rect[1];
                  const svg = this.svgFactory.create(width, height);
                  let points = [];
                  for (const coordinate of data.vertices) {
                    const x = coordinate.x - data.rect[0];
                    const y = data.rect[3] - coordinate.y;
                    points.push(x + "," + y);
                  }
                  points = points.join(" ");
                  const polyline = this.svgFactory.createElement(this.svgElementName);
                  polyline.setAttribute("points", points);
                  polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                  polyline.setAttribute("stroke", "transparent");
                  polyline.setAttribute("fill", "none");
                  svg.appendChild(polyline);
                  this.container.append(svg);
                  this._createPopup(polyline, data);
                  return this.container;
                }
              }
              class PolygonAnnotationElement extends PolylineAnnotationElement {
                constructor(parameters) {
                  super(parameters);
                  this.containerClassName = "polygonAnnotation";
                  this.svgElementName = "svg:polygon";
                }
              }
              class CaretAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "caretAnnotation";
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class InkAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                  this.containerClassName = "inkAnnotation";
                  this.svgElementName = "svg:polyline";
                }
                render() {
                  this.container.className = this.containerClassName;
                  const data = this.data;
                  const width = data.rect[2] - data.rect[0];
                  const height = data.rect[3] - data.rect[1];
                  const svg = this.svgFactory.create(width, height);
                  for (const inkList of data.inkLists) {
                    let points = [];
                    for (const coordinate of inkList) {
                      const x = coordinate.x - data.rect[0];
                      const y = data.rect[3] - coordinate.y;
                      points.push(`${x},${y}`);
                    }
                    points = points.join(" ");
                    const polyline = this.svgFactory.createElement(this.svgElementName);
                    polyline.setAttribute("points", points);
                    polyline.setAttribute("stroke-width", data.borderStyle.width || 1);
                    polyline.setAttribute("stroke", "transparent");
                    polyline.setAttribute("fill", "none");
                    this._createPopup(polyline, data);
                    svg.appendChild(polyline);
                  }
                  this.container.append(svg);
                  return this.container;
                }
              }
              class HighlightAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("highlightAnnotation");
                  }
                  this.container.className = "highlightAnnotation";
                  return this.container;
                }
              }
              class UnderlineAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("underlineAnnotation");
                  }
                  this.container.className = "underlineAnnotation";
                  return this.container;
                }
              }
              class SquigglyAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("squigglyAnnotation");
                  }
                  this.container.className = "squigglyAnnotation";
                  return this.container;
                }
              }
              class StrikeOutAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true,
                    createQuadrilaterals: true
                  });
                }
                render() {
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  if (this.quadrilaterals) {
                    return this._renderQuadrilaterals("strikeoutAnnotation");
                  }
                  this.container.className = "strikeoutAnnotation";
                  return this.container;
                }
              }
              class StampAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  const isRenderable = !!(parameters.data.hasPopup || parameters.data.title || parameters.data.contents);
                  super(parameters, {
                    isRenderable,
                    ignoreBorder: true
                  });
                }
                render() {
                  this.container.className = "stampAnnotation";
                  if (!this.data.hasPopup) {
                    this._createPopup(null, this.data);
                  }
                  return this.container;
                }
              }
              class FileAttachmentAnnotationElement extends AnnotationElement {
                constructor(parameters) {
                  var _a;
                  super(parameters, {
                    isRenderable: true
                  });
                  const {
                    filename,
                    content
                  } = this.data.file;
                  this.filename = (0, _display_utils2.getFilenameFromUrl)(filename);
                  this.content = content;
                  (_a = this.linkService.eventBus) == null ? void 0 : _a.dispatch("fileattachmentannotation", {
                    source: this,
                    id: (0, _util2.stringToPDFString)(filename),
                    filename,
                    content
                  });
                }
                render() {
                  this.container.className = "fileAttachmentAnnotation";
                  const trigger = document.createElement("div");
                  trigger.style.height = this.container.style.height;
                  trigger.style.width = this.container.style.width;
                  trigger.addEventListener("dblclick", this._download.bind(this));
                  if (!this.data.hasPopup && (this.data.title || this.data.contents)) {
                    this._createPopup(trigger, this.data);
                  }
                  this.container.appendChild(trigger);
                  return this.container;
                }
                _download() {
                  var _a;
                  (_a = this.downloadManager) == null ? void 0 : _a.openOrDownloadData(this.container, this.content, this.filename);
                }
              }
              class AnnotationLayer {
                static render(parameters) {
                  const sortedAnnotations = [], popupAnnotations = [];
                  for (const data of parameters.annotations) {
                    if (!data) {
                      continue;
                    }
                    if (data.annotationType === _util2.AnnotationType.POPUP) {
                      popupAnnotations.push(data);
                      continue;
                    }
                    sortedAnnotations.push(data);
                  }
                  if (popupAnnotations.length) {
                    sortedAnnotations.push(...popupAnnotations);
                  }
                  for (const data of sortedAnnotations) {
                    const element = AnnotationElementFactory.create({
                      data,
                      layer: parameters.div,
                      page: parameters.page,
                      viewport: parameters.viewport,
                      linkService: parameters.linkService,
                      downloadManager: parameters.downloadManager,
                      imageResourcesPath: parameters.imageResourcesPath || "",
                      renderInteractiveForms: parameters.renderInteractiveForms !== false,
                      svgFactory: new _display_utils2.DOMSVGFactory(),
                      annotationStorage: parameters.annotationStorage || new _annotation_storage2.AnnotationStorage(),
                      enableScripting: parameters.enableScripting,
                      hasJSActions: parameters.hasJSActions,
                      mouseState: parameters.mouseState || {
                        isDown: false
                      }
                    });
                    if (element.isRenderable) {
                      const rendered = element.render();
                      if (data.hidden) {
                        rendered.style.visibility = "hidden";
                      }
                      if (Array.isArray(rendered)) {
                        for (const renderedElement of rendered) {
                          parameters.div.appendChild(renderedElement);
                        }
                      } else {
                        if (element instanceof PopupAnnotationElement) {
                          parameters.div.prepend(rendered);
                        } else {
                          parameters.div.appendChild(rendered);
                        }
                      }
                    }
                  }
                }
                static update(parameters) {
                  const transform = `matrix(${parameters.viewport.transform.join(",")})`;
                  for (const data of parameters.annotations) {
                    const elements = parameters.div.querySelectorAll(`[data-annotation-id="${data.id}"]`);
                    if (elements) {
                      for (const element of elements) {
                        element.style.transform = transform;
                      }
                    }
                  }
                  parameters.div.hidden = false;
                }
              }
              exports2.AnnotationLayer = AnnotationLayer;
            },
            /* 18 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.ColorConverters = void 0;
              function makeColorComp(n2) {
                return Math.floor(Math.max(0, Math.min(1, n2)) * 255).toString(16).padStart(2, "0");
              }
              class ColorConverters {
                static CMYK_G([c2, y, m2, k]) {
                  return ["G", 1 - Math.min(1, 0.3 * c2 + 0.59 * m2 + 0.11 * y + k)];
                }
                static G_CMYK([g]) {
                  return ["CMYK", 0, 0, 0, 1 - g];
                }
                static G_RGB([g]) {
                  return ["RGB", g, g, g];
                }
                static G_HTML([g]) {
                  const G = makeColorComp(g);
                  return `#${G}${G}${G}`;
                }
                static RGB_G([r2, g, b]) {
                  return ["G", 0.3 * r2 + 0.59 * g + 0.11 * b];
                }
                static RGB_HTML([r2, g, b]) {
                  const R = makeColorComp(r2);
                  const G = makeColorComp(g);
                  const B = makeColorComp(b);
                  return `#${R}${G}${B}`;
                }
                static T_HTML() {
                  return "#00000000";
                }
                static CMYK_RGB([c2, y, m2, k]) {
                  return ["RGB", 1 - Math.min(1, c2 + k), 1 - Math.min(1, m2 + k), 1 - Math.min(1, y + k)];
                }
                static CMYK_HTML(components) {
                  return this.RGB_HTML(this.CMYK_RGB(components));
                }
                static RGB_CMYK([r2, g, b]) {
                  const c2 = 1 - r2;
                  const m2 = 1 - g;
                  const y = 1 - b;
                  const k = Math.min(c2, m2, y);
                  return ["CMYK", c2, m2, y, k];
                }
              }
              exports2.ColorConverters = ColorConverters;
            },
            /* 19 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.renderTextLayer = renderTextLayer;
              var _util2 = __w_pdfjs_require__2(2);
              const MAX_TEXT_DIVS_TO_RENDER = 1e5;
              const DEFAULT_FONT_SIZE = 30;
              const DEFAULT_FONT_ASCENT = 0.8;
              const ascentCache = /* @__PURE__ */ new Map();
              const AllWhitespaceRegexp = /^\s+$/g;
              function getAscent(fontFamily, ctx) {
                const cachedAscent = ascentCache.get(fontFamily);
                if (cachedAscent) {
                  return cachedAscent;
                }
                ctx.save();
                ctx.font = `${DEFAULT_FONT_SIZE}px ${fontFamily}`;
                const metrics = ctx.measureText("");
                let ascent = metrics.fontBoundingBoxAscent;
                let descent = Math.abs(metrics.fontBoundingBoxDescent);
                if (ascent) {
                  ctx.restore();
                  const ratio = ascent / (ascent + descent);
                  ascentCache.set(fontFamily, ratio);
                  return ratio;
                }
                ctx.strokeStyle = "red";
                ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
                ctx.strokeText("g", 0, 0);
                let pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
                descent = 0;
                for (let i2 = pixels.length - 1 - 3; i2 >= 0; i2 -= 4) {
                  if (pixels[i2] > 0) {
                    descent = Math.ceil(i2 / 4 / DEFAULT_FONT_SIZE);
                    break;
                  }
                }
                ctx.clearRect(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE);
                ctx.strokeText("A", 0, DEFAULT_FONT_SIZE);
                pixels = ctx.getImageData(0, 0, DEFAULT_FONT_SIZE, DEFAULT_FONT_SIZE).data;
                ascent = 0;
                for (let i2 = 0, ii = pixels.length; i2 < ii; i2 += 4) {
                  if (pixels[i2] > 0) {
                    ascent = DEFAULT_FONT_SIZE - Math.floor(i2 / 4 / DEFAULT_FONT_SIZE);
                    break;
                  }
                }
                ctx.restore();
                if (ascent) {
                  const ratio = ascent / (ascent + descent);
                  ascentCache.set(fontFamily, ratio);
                  return ratio;
                }
                ascentCache.set(fontFamily, DEFAULT_FONT_ASCENT);
                return DEFAULT_FONT_ASCENT;
              }
              function appendText(task, geom, styles, ctx) {
                const textDiv = document.createElement("span");
                const textDivProperties = {
                  angle: 0,
                  canvasWidth: 0,
                  hasText: geom.str !== "",
                  hasEOL: geom.hasEOL,
                  originalTransform: null,
                  paddingBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  scale: 1
                };
                task._textDivs.push(textDiv);
                const tx = _util2.Util.transform(task._viewport.transform, geom.transform);
                let angle = Math.atan2(tx[1], tx[0]);
                const style = styles[geom.fontName];
                if (style.vertical) {
                  angle += Math.PI / 2;
                }
                const fontHeight = Math.hypot(tx[2], tx[3]);
                const fontAscent = fontHeight * getAscent(style.fontFamily, ctx);
                let left, top;
                if (angle === 0) {
                  left = tx[4];
                  top = tx[5] - fontAscent;
                } else {
                  left = tx[4] + fontAscent * Math.sin(angle);
                  top = tx[5] - fontAscent * Math.cos(angle);
                }
                textDiv.style.left = `${left}px`;
                textDiv.style.top = `${top}px`;
                textDiv.style.fontSize = `${fontHeight}px`;
                textDiv.style.fontFamily = style.fontFamily;
                textDiv.setAttribute("role", "presentation");
                textDiv.textContent = geom.str;
                textDiv.dir = geom.dir;
                if (task._fontInspectorEnabled) {
                  textDiv.dataset.fontName = geom.fontName;
                }
                if (angle !== 0) {
                  textDivProperties.angle = angle * (180 / Math.PI);
                }
                let shouldScaleText = false;
                if (geom.str.length > 1 || task._enhanceTextSelection && AllWhitespaceRegexp.test(geom.str)) {
                  shouldScaleText = true;
                } else if (geom.transform[0] !== geom.transform[3]) {
                  const absScaleX = Math.abs(geom.transform[0]), absScaleY = Math.abs(geom.transform[3]);
                  if (absScaleX !== absScaleY && Math.max(absScaleX, absScaleY) / Math.min(absScaleX, absScaleY) > 1.5) {
                    shouldScaleText = true;
                  }
                }
                if (shouldScaleText) {
                  if (style.vertical) {
                    textDivProperties.canvasWidth = geom.height * task._viewport.scale;
                  } else {
                    textDivProperties.canvasWidth = geom.width * task._viewport.scale;
                  }
                }
                task._textDivProperties.set(textDiv, textDivProperties);
                if (task._textContentStream) {
                  task._layoutText(textDiv);
                }
                if (task._enhanceTextSelection && textDivProperties.hasText) {
                  let angleCos = 1, angleSin = 0;
                  if (angle !== 0) {
                    angleCos = Math.cos(angle);
                    angleSin = Math.sin(angle);
                  }
                  const divWidth = (style.vertical ? geom.height : geom.width) * task._viewport.scale;
                  const divHeight = fontHeight;
                  let m2, b;
                  if (angle !== 0) {
                    m2 = [angleCos, angleSin, -angleSin, angleCos, left, top];
                    b = _util2.Util.getAxialAlignedBoundingBox([0, 0, divWidth, divHeight], m2);
                  } else {
                    b = [left, top, left + divWidth, top + divHeight];
                  }
                  task._bounds.push({
                    left: b[0],
                    top: b[1],
                    right: b[2],
                    bottom: b[3],
                    div: textDiv,
                    size: [divWidth, divHeight],
                    m: m2
                  });
                }
              }
              function render(task) {
                if (task._canceled) {
                  return;
                }
                const textDivs = task._textDivs;
                const capability = task._capability;
                const textDivsLength = textDivs.length;
                if (textDivsLength > MAX_TEXT_DIVS_TO_RENDER) {
                  task._renderingDone = true;
                  capability.resolve();
                  return;
                }
                if (!task._textContentStream) {
                  for (let i2 = 0; i2 < textDivsLength; i2++) {
                    task._layoutText(textDivs[i2]);
                  }
                }
                task._renderingDone = true;
                capability.resolve();
              }
              function findPositiveMin(ts, offset, count) {
                let result = 0;
                for (let i2 = 0; i2 < count; i2++) {
                  const t2 = ts[offset++];
                  if (t2 > 0) {
                    result = result ? Math.min(t2, result) : t2;
                  }
                }
                return result;
              }
              function expand(task) {
                const bounds = task._bounds;
                const viewport = task._viewport;
                const expanded = expandBounds(viewport.width, viewport.height, bounds);
                for (let i2 = 0; i2 < expanded.length; i2++) {
                  const div = bounds[i2].div;
                  const divProperties = task._textDivProperties.get(div);
                  if (divProperties.angle === 0) {
                    divProperties.paddingLeft = bounds[i2].left - expanded[i2].left;
                    divProperties.paddingTop = bounds[i2].top - expanded[i2].top;
                    divProperties.paddingRight = expanded[i2].right - bounds[i2].right;
                    divProperties.paddingBottom = expanded[i2].bottom - bounds[i2].bottom;
                    task._textDivProperties.set(div, divProperties);
                    continue;
                  }
                  const e2 = expanded[i2], b = bounds[i2];
                  const m2 = b.m, c2 = m2[0], s2 = m2[1];
                  const points = [[0, 0], [0, b.size[1]], [b.size[0], 0], b.size];
                  const ts = new Float64Array(64);
                  for (let j = 0, jj = points.length; j < jj; j++) {
                    const t2 = _util2.Util.applyTransform(points[j], m2);
                    ts[j + 0] = c2 && (e2.left - t2[0]) / c2;
                    ts[j + 4] = s2 && (e2.top - t2[1]) / s2;
                    ts[j + 8] = c2 && (e2.right - t2[0]) / c2;
                    ts[j + 12] = s2 && (e2.bottom - t2[1]) / s2;
                    ts[j + 16] = s2 && (e2.left - t2[0]) / -s2;
                    ts[j + 20] = c2 && (e2.top - t2[1]) / c2;
                    ts[j + 24] = s2 && (e2.right - t2[0]) / -s2;
                    ts[j + 28] = c2 && (e2.bottom - t2[1]) / c2;
                    ts[j + 32] = c2 && (e2.left - t2[0]) / -c2;
                    ts[j + 36] = s2 && (e2.top - t2[1]) / -s2;
                    ts[j + 40] = c2 && (e2.right - t2[0]) / -c2;
                    ts[j + 44] = s2 && (e2.bottom - t2[1]) / -s2;
                    ts[j + 48] = s2 && (e2.left - t2[0]) / s2;
                    ts[j + 52] = c2 && (e2.top - t2[1]) / -c2;
                    ts[j + 56] = s2 && (e2.right - t2[0]) / s2;
                    ts[j + 60] = c2 && (e2.bottom - t2[1]) / -c2;
                  }
                  const boxScale = 1 + Math.min(Math.abs(c2), Math.abs(s2));
                  divProperties.paddingLeft = findPositiveMin(ts, 32, 16) / boxScale;
                  divProperties.paddingTop = findPositiveMin(ts, 48, 16) / boxScale;
                  divProperties.paddingRight = findPositiveMin(ts, 0, 16) / boxScale;
                  divProperties.paddingBottom = findPositiveMin(ts, 16, 16) / boxScale;
                  task._textDivProperties.set(div, divProperties);
                }
              }
              function expandBounds(width, height, boxes) {
                const bounds = boxes.map(function(box, i2) {
                  return {
                    x1: box.left,
                    y1: box.top,
                    x2: box.right,
                    y2: box.bottom,
                    index: i2,
                    x1New: void 0,
                    x2New: void 0
                  };
                });
                expandBoundsLTR(width, bounds);
                const expanded = new Array(boxes.length);
                for (const b of bounds) {
                  const i2 = b.index;
                  expanded[i2] = {
                    left: b.x1New,
                    top: 0,
                    right: b.x2New,
                    bottom: 0
                  };
                }
                boxes.map(function(box, i2) {
                  const e2 = expanded[i2], b = bounds[i2];
                  b.x1 = box.top;
                  b.y1 = width - e2.right;
                  b.x2 = box.bottom;
                  b.y2 = width - e2.left;
                  b.index = i2;
                  b.x1New = void 0;
                  b.x2New = void 0;
                });
                expandBoundsLTR(height, bounds);
                for (const b of bounds) {
                  const i2 = b.index;
                  expanded[i2].top = b.x1New;
                  expanded[i2].bottom = b.x2New;
                }
                return expanded;
              }
              function expandBoundsLTR(width, bounds) {
                bounds.sort(function(a2, b) {
                  return a2.x1 - b.x1 || a2.index - b.index;
                });
                const fakeBoundary = {
                  x1: -Infinity,
                  y1: -Infinity,
                  x2: 0,
                  y2: Infinity,
                  index: -1,
                  x1New: 0,
                  x2New: 0
                };
                const horizon = [{
                  start: -Infinity,
                  end: Infinity,
                  boundary: fakeBoundary
                }];
                for (const boundary of bounds) {
                  let i2 = 0;
                  while (i2 < horizon.length && horizon[i2].end <= boundary.y1) {
                    i2++;
                  }
                  let j = horizon.length - 1;
                  while (j >= 0 && horizon[j].start >= boundary.y2) {
                    j--;
                  }
                  let horizonPart, affectedBoundary;
                  let q, k, maxXNew = -Infinity;
                  for (q = i2; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    let xNew;
                    if (affectedBoundary.x2 > boundary.x1) {
                      xNew = affectedBoundary.index > boundary.index ? affectedBoundary.x1New : boundary.x1;
                    } else if (affectedBoundary.x2New === void 0) {
                      xNew = (affectedBoundary.x2 + boundary.x1) / 2;
                    } else {
                      xNew = affectedBoundary.x2New;
                    }
                    if (xNew > maxXNew) {
                      maxXNew = xNew;
                    }
                  }
                  boundary.x1New = maxXNew;
                  for (q = i2; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    if (affectedBoundary.x2New === void 0) {
                      if (affectedBoundary.x2 > boundary.x1) {
                        if (affectedBoundary.index > boundary.index) {
                          affectedBoundary.x2New = affectedBoundary.x2;
                        }
                      } else {
                        affectedBoundary.x2New = maxXNew;
                      }
                    } else if (affectedBoundary.x2New > maxXNew) {
                      affectedBoundary.x2New = Math.max(maxXNew, affectedBoundary.x2);
                    }
                  }
                  const changedHorizon = [];
                  let lastBoundary = null;
                  for (q = i2; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    const useBoundary = affectedBoundary.x2 > boundary.x2 ? affectedBoundary : boundary;
                    if (lastBoundary === useBoundary) {
                      changedHorizon[changedHorizon.length - 1].end = horizonPart.end;
                    } else {
                      changedHorizon.push({
                        start: horizonPart.start,
                        end: horizonPart.end,
                        boundary: useBoundary
                      });
                      lastBoundary = useBoundary;
                    }
                  }
                  if (horizon[i2].start < boundary.y1) {
                    changedHorizon[0].start = boundary.y1;
                    changedHorizon.unshift({
                      start: horizon[i2].start,
                      end: boundary.y1,
                      boundary: horizon[i2].boundary
                    });
                  }
                  if (boundary.y2 < horizon[j].end) {
                    changedHorizon[changedHorizon.length - 1].end = boundary.y2;
                    changedHorizon.push({
                      start: boundary.y2,
                      end: horizon[j].end,
                      boundary: horizon[j].boundary
                    });
                  }
                  for (q = i2; q <= j; q++) {
                    horizonPart = horizon[q];
                    affectedBoundary = horizonPart.boundary;
                    if (affectedBoundary.x2New !== void 0) {
                      continue;
                    }
                    let used = false;
                    for (k = i2 - 1; !used && k >= 0 && horizon[k].start >= affectedBoundary.y1; k--) {
                      used = horizon[k].boundary === affectedBoundary;
                    }
                    for (k = j + 1; !used && k < horizon.length && horizon[k].end <= affectedBoundary.y2; k++) {
                      used = horizon[k].boundary === affectedBoundary;
                    }
                    for (k = 0; !used && k < changedHorizon.length; k++) {
                      used = changedHorizon[k].boundary === affectedBoundary;
                    }
                    if (!used) {
                      affectedBoundary.x2New = maxXNew;
                    }
                  }
                  Array.prototype.splice.apply(horizon, [i2, j - i2 + 1].concat(changedHorizon));
                }
                for (const horizonPart of horizon) {
                  const affectedBoundary = horizonPart.boundary;
                  if (affectedBoundary.x2New === void 0) {
                    affectedBoundary.x2New = Math.max(width, affectedBoundary.x2);
                  }
                }
              }
              class TextLayerRenderTask {
                constructor({
                  textContent,
                  textContentStream,
                  container,
                  viewport,
                  textDivs,
                  textContentItemsStr,
                  enhanceTextSelection
                }) {
                  var _a;
                  this._textContent = textContent;
                  this._textContentStream = textContentStream;
                  this._container = container;
                  this._document = container.ownerDocument;
                  this._viewport = viewport;
                  this._textDivs = textDivs || [];
                  this._textContentItemsStr = textContentItemsStr || [];
                  this._enhanceTextSelection = !!enhanceTextSelection;
                  this._fontInspectorEnabled = !!((_a = globalThis.FontInspector) == null ? void 0 : _a.enabled);
                  this._reader = null;
                  this._layoutTextLastFontSize = null;
                  this._layoutTextLastFontFamily = null;
                  this._layoutTextCtx = null;
                  this._textDivProperties = /* @__PURE__ */ new WeakMap();
                  this._renderingDone = false;
                  this._canceled = false;
                  this._capability = (0, _util2.createPromiseCapability)();
                  this._renderTimer = null;
                  this._bounds = [];
                  this._capability.promise.finally(() => {
                    if (this._layoutTextCtx) {
                      this._layoutTextCtx.canvas.width = 0;
                      this._layoutTextCtx.canvas.height = 0;
                      this._layoutTextCtx = null;
                    }
                  }).catch(() => {
                  });
                }
                get promise() {
                  return this._capability.promise;
                }
                cancel() {
                  this._canceled = true;
                  if (this._reader) {
                    this._reader.cancel(new _util2.AbortException("TextLayer task cancelled."));
                    this._reader = null;
                  }
                  if (this._renderTimer !== null) {
                    clearTimeout(this._renderTimer);
                    this._renderTimer = null;
                  }
                  this._capability.reject(new Error("TextLayer task cancelled."));
                }
                _processItems(items, styleCache) {
                  for (let i2 = 0, len = items.length; i2 < len; i2++) {
                    if (items[i2].str === void 0) {
                      if (items[i2].type === "beginMarkedContentProps" || items[i2].type === "beginMarkedContent") {
                        const parent = this._container;
                        this._container = document.createElement("span");
                        this._container.classList.add("markedContent");
                        if (items[i2].id !== null) {
                          this._container.setAttribute("id", `${items[i2].id}`);
                        }
                        parent.appendChild(this._container);
                      } else if (items[i2].type === "endMarkedContent") {
                        this._container = this._container.parentNode;
                      }
                      continue;
                    }
                    this._textContentItemsStr.push(items[i2].str);
                    appendText(this, items[i2], styleCache, this._layoutTextCtx);
                  }
                }
                _layoutText(textDiv) {
                  const textDivProperties = this._textDivProperties.get(textDiv);
                  let transform = "";
                  if (textDivProperties.canvasWidth !== 0 && textDivProperties.hasText) {
                    const {
                      fontSize,
                      fontFamily
                    } = textDiv.style;
                    if (fontSize !== this._layoutTextLastFontSize || fontFamily !== this._layoutTextLastFontFamily) {
                      this._layoutTextCtx.font = `${fontSize} ${fontFamily}`;
                      this._layoutTextLastFontSize = fontSize;
                      this._layoutTextLastFontFamily = fontFamily;
                    }
                    const {
                      width
                    } = this._layoutTextCtx.measureText(textDiv.textContent);
                    if (width > 0) {
                      textDivProperties.scale = textDivProperties.canvasWidth / width;
                      transform = `scaleX(${textDivProperties.scale})`;
                    }
                  }
                  if (textDivProperties.angle !== 0) {
                    transform = `rotate(${textDivProperties.angle}deg) ${transform}`;
                  }
                  if (transform.length > 0) {
                    if (this._enhanceTextSelection) {
                      textDivProperties.originalTransform = transform;
                    }
                    textDiv.style.transform = transform;
                  }
                  if (textDivProperties.hasText) {
                    this._container.appendChild(textDiv);
                  }
                  if (textDivProperties.hasEOL) {
                    const br = document.createElement("br");
                    br.setAttribute("role", "presentation");
                    this._container.appendChild(br);
                  }
                }
                _render(timeout = 0) {
                  const capability = (0, _util2.createPromiseCapability)();
                  let styleCache = /* @__PURE__ */ Object.create(null);
                  const canvas = this._document.createElement("canvas");
                  canvas.height = canvas.width = DEFAULT_FONT_SIZE;
                  canvas.mozOpaque = true;
                  this._layoutTextCtx = canvas.getContext("2d", {
                    alpha: false
                  });
                  if (this._textContent) {
                    const textItems = this._textContent.items;
                    const textStyles = this._textContent.styles;
                    this._processItems(textItems, textStyles);
                    capability.resolve();
                  } else if (this._textContentStream) {
                    const pump = () => {
                      this._reader.read().then(({
                        value,
                        done
                      }) => {
                        if (done) {
                          capability.resolve();
                          return;
                        }
                        Object.assign(styleCache, value.styles);
                        this._processItems(value.items, styleCache);
                        pump();
                      }, capability.reject);
                    };
                    this._reader = this._textContentStream.getReader();
                    pump();
                  } else {
                    throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                  }
                  capability.promise.then(() => {
                    styleCache = null;
                    if (!timeout) {
                      render(this);
                    } else {
                      this._renderTimer = setTimeout(() => {
                        render(this);
                        this._renderTimer = null;
                      }, timeout);
                    }
                  }, this._capability.reject);
                }
                expandTextDivs(expandDivs = false) {
                  if (!this._enhanceTextSelection || !this._renderingDone) {
                    return;
                  }
                  if (this._bounds !== null) {
                    expand(this);
                    this._bounds = null;
                  }
                  const transformBuf = [], paddingBuf = [];
                  for (let i2 = 0, ii = this._textDivs.length; i2 < ii; i2++) {
                    const div = this._textDivs[i2];
                    const divProps = this._textDivProperties.get(div);
                    if (!divProps.hasText) {
                      continue;
                    }
                    if (expandDivs) {
                      transformBuf.length = 0;
                      paddingBuf.length = 0;
                      if (divProps.originalTransform) {
                        transformBuf.push(divProps.originalTransform);
                      }
                      if (divProps.paddingTop > 0) {
                        paddingBuf.push(`${divProps.paddingTop}px`);
                        transformBuf.push(`translateY(${-divProps.paddingTop}px)`);
                      } else {
                        paddingBuf.push(0);
                      }
                      if (divProps.paddingRight > 0) {
                        paddingBuf.push(`${divProps.paddingRight / divProps.scale}px`);
                      } else {
                        paddingBuf.push(0);
                      }
                      if (divProps.paddingBottom > 0) {
                        paddingBuf.push(`${divProps.paddingBottom}px`);
                      } else {
                        paddingBuf.push(0);
                      }
                      if (divProps.paddingLeft > 0) {
                        paddingBuf.push(`${divProps.paddingLeft / divProps.scale}px`);
                        transformBuf.push(`translateX(${-divProps.paddingLeft / divProps.scale}px)`);
                      } else {
                        paddingBuf.push(0);
                      }
                      div.style.padding = paddingBuf.join(" ");
                      if (transformBuf.length) {
                        div.style.transform = transformBuf.join(" ");
                      }
                    } else {
                      div.style.padding = null;
                      div.style.transform = divProps.originalTransform;
                    }
                  }
                }
              }
              function renderTextLayer(renderParameters) {
                const task = new TextLayerRenderTask({
                  textContent: renderParameters.textContent,
                  textContentStream: renderParameters.textContentStream,
                  container: renderParameters.container,
                  viewport: renderParameters.viewport,
                  textDivs: renderParameters.textDivs,
                  textContentItemsStr: renderParameters.textContentItemsStr,
                  enhanceTextSelection: renderParameters.enhanceTextSelection
                });
                task._render(renderParameters.timeout);
                return task;
              }
            },
            /* 20 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.SVGGraphics = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _display_utils2 = __w_pdfjs_require__2(1);
              var _is_node2 = __w_pdfjs_require__2(4);
              let SVGGraphics = class {
                constructor() {
                  (0, _util2.unreachable)("Not implemented: SVGGraphics");
                }
              };
              exports2.SVGGraphics = SVGGraphics;
              {
                let opListToTree = function(opList) {
                  let opTree = [];
                  const tmp = [];
                  for (const opListElement of opList) {
                    if (opListElement.fn === "save") {
                      opTree.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                      });
                      tmp.push(opTree);
                      opTree = opTree[opTree.length - 1].items;
                      continue;
                    }
                    if (opListElement.fn === "restore") {
                      opTree = tmp.pop();
                    } else {
                      opTree.push(opListElement);
                    }
                  }
                  return opTree;
                }, pf = function(value) {
                  if (Number.isInteger(value)) {
                    return value.toString();
                  }
                  const s2 = value.toFixed(10);
                  let i2 = s2.length - 1;
                  if (s2[i2] !== "0") {
                    return s2;
                  }
                  do {
                    i2--;
                  } while (s2[i2] === "0");
                  return s2.substring(0, s2[i2] === "." ? i2 : i2 + 1);
                }, pm = function(m2) {
                  if (m2[4] === 0 && m2[5] === 0) {
                    if (m2[1] === 0 && m2[2] === 0) {
                      if (m2[0] === 1 && m2[3] === 1) {
                        return "";
                      }
                      return `scale(${pf(m2[0])} ${pf(m2[3])})`;
                    }
                    if (m2[0] === m2[3] && m2[1] === -m2[2]) {
                      const a2 = Math.acos(m2[0]) * 180 / Math.PI;
                      return `rotate(${pf(a2)})`;
                    }
                  } else {
                    if (m2[0] === 1 && m2[1] === 0 && m2[2] === 0 && m2[3] === 1) {
                      return `translate(${pf(m2[4])} ${pf(m2[5])})`;
                    }
                  }
                  return `matrix(${pf(m2[0])} ${pf(m2[1])} ${pf(m2[2])} ${pf(m2[3])} ${pf(m2[4])} ${pf(m2[5])})`;
                };
                const SVG_DEFAULTS = {
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fillColor: "#000000"
                };
                const XML_NS = "http://www.w3.org/XML/1998/namespace";
                const XLINK_NS = "http://www.w3.org/1999/xlink";
                const LINE_CAP_STYLES = ["butt", "round", "square"];
                const LINE_JOIN_STYLES = ["miter", "round", "bevel"];
                const convertImgDataToPng = function() {
                  const PNG_HEADER = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
                  const CHUNK_WRAPPER_SIZE = 12;
                  const crcTable = new Int32Array(256);
                  for (let i2 = 0; i2 < 256; i2++) {
                    let c2 = i2;
                    for (let h = 0; h < 8; h++) {
                      if (c2 & 1) {
                        c2 = 3988292384 ^ c2 >> 1 & 2147483647;
                      } else {
                        c2 = c2 >> 1 & 2147483647;
                      }
                    }
                    crcTable[i2] = c2;
                  }
                  function crc32(data, start, end) {
                    let crc = -1;
                    for (let i2 = start; i2 < end; i2++) {
                      const a2 = (crc ^ data[i2]) & 255;
                      const b = crcTable[a2];
                      crc = crc >>> 8 ^ b;
                    }
                    return crc ^ -1;
                  }
                  function writePngChunk(type, body, data, offset) {
                    let p2 = offset;
                    const len = body.length;
                    data[p2] = len >> 24 & 255;
                    data[p2 + 1] = len >> 16 & 255;
                    data[p2 + 2] = len >> 8 & 255;
                    data[p2 + 3] = len & 255;
                    p2 += 4;
                    data[p2] = type.charCodeAt(0) & 255;
                    data[p2 + 1] = type.charCodeAt(1) & 255;
                    data[p2 + 2] = type.charCodeAt(2) & 255;
                    data[p2 + 3] = type.charCodeAt(3) & 255;
                    p2 += 4;
                    data.set(body, p2);
                    p2 += body.length;
                    const crc = crc32(data, offset + 4, p2);
                    data[p2] = crc >> 24 & 255;
                    data[p2 + 1] = crc >> 16 & 255;
                    data[p2 + 2] = crc >> 8 & 255;
                    data[p2 + 3] = crc & 255;
                  }
                  function adler32(data, start, end) {
                    let a2 = 1;
                    let b = 0;
                    for (let i2 = start; i2 < end; ++i2) {
                      a2 = (a2 + (data[i2] & 255)) % 65521;
                      b = (b + a2) % 65521;
                    }
                    return b << 16 | a2;
                  }
                  function deflateSync(literals) {
                    if (!_is_node2.isNodeJS) {
                      return deflateSyncUncompressed(literals);
                    }
                    try {
                      let input;
                      if (parseInt(process.versions.node) >= 8) {
                        input = literals;
                      } else {
                        input = Buffer.from(literals);
                      }
                      const output = require_zlib().deflateSync(input, {
                        level: 9
                      });
                      return output instanceof Uint8Array ? output : new Uint8Array(output);
                    } catch (e2) {
                      (0, _util2.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e2);
                    }
                    return deflateSyncUncompressed(literals);
                  }
                  function deflateSyncUncompressed(literals) {
                    let len = literals.length;
                    const maxBlockLength = 65535;
                    const deflateBlocks = Math.ceil(len / maxBlockLength);
                    const idat = new Uint8Array(2 + len + deflateBlocks * 5 + 4);
                    let pi = 0;
                    idat[pi++] = 120;
                    idat[pi++] = 156;
                    let pos = 0;
                    while (len > maxBlockLength) {
                      idat[pi++] = 0;
                      idat[pi++] = 255;
                      idat[pi++] = 255;
                      idat[pi++] = 0;
                      idat[pi++] = 0;
                      idat.set(literals.subarray(pos, pos + maxBlockLength), pi);
                      pi += maxBlockLength;
                      pos += maxBlockLength;
                      len -= maxBlockLength;
                    }
                    idat[pi++] = 1;
                    idat[pi++] = len & 255;
                    idat[pi++] = len >> 8 & 255;
                    idat[pi++] = ~len & 65535 & 255;
                    idat[pi++] = (~len & 65535) >> 8 & 255;
                    idat.set(literals.subarray(pos), pi);
                    pi += literals.length - pos;
                    const adler = adler32(literals, 0, literals.length);
                    idat[pi++] = adler >> 24 & 255;
                    idat[pi++] = adler >> 16 & 255;
                    idat[pi++] = adler >> 8 & 255;
                    idat[pi++] = adler & 255;
                    return idat;
                  }
                  function encode(imgData, kind, forceDataSchema, isMask) {
                    const width = imgData.width;
                    const height = imgData.height;
                    let bitDepth, colorType, lineSize;
                    const bytes = imgData.data;
                    switch (kind) {
                      case _util2.ImageKind.GRAYSCALE_1BPP:
                        colorType = 0;
                        bitDepth = 1;
                        lineSize = width + 7 >> 3;
                        break;
                      case _util2.ImageKind.RGB_24BPP:
                        colorType = 2;
                        bitDepth = 8;
                        lineSize = width * 3;
                        break;
                      case _util2.ImageKind.RGBA_32BPP:
                        colorType = 6;
                        bitDepth = 8;
                        lineSize = width * 4;
                        break;
                      default:
                        throw new Error("invalid format");
                    }
                    const literals = new Uint8Array((1 + lineSize) * height);
                    let offsetLiterals = 0, offsetBytes = 0;
                    for (let y = 0; y < height; ++y) {
                      literals[offsetLiterals++] = 0;
                      literals.set(bytes.subarray(offsetBytes, offsetBytes + lineSize), offsetLiterals);
                      offsetBytes += lineSize;
                      offsetLiterals += lineSize;
                    }
                    if (kind === _util2.ImageKind.GRAYSCALE_1BPP && isMask) {
                      offsetLiterals = 0;
                      for (let y = 0; y < height; y++) {
                        offsetLiterals++;
                        for (let i2 = 0; i2 < lineSize; i2++) {
                          literals[offsetLiterals++] ^= 255;
                        }
                      }
                    }
                    const ihdr = new Uint8Array([width >> 24 & 255, width >> 16 & 255, width >> 8 & 255, width & 255, height >> 24 & 255, height >> 16 & 255, height >> 8 & 255, height & 255, bitDepth, colorType, 0, 0, 0]);
                    const idat = deflateSync(literals);
                    const pngLength = PNG_HEADER.length + CHUNK_WRAPPER_SIZE * 3 + ihdr.length + idat.length;
                    const data = new Uint8Array(pngLength);
                    let offset = 0;
                    data.set(PNG_HEADER, offset);
                    offset += PNG_HEADER.length;
                    writePngChunk("IHDR", ihdr, data, offset);
                    offset += CHUNK_WRAPPER_SIZE + ihdr.length;
                    writePngChunk("IDATA", idat, data, offset);
                    offset += CHUNK_WRAPPER_SIZE + idat.length;
                    writePngChunk("IEND", new Uint8Array(0), data, offset);
                    return (0, _util2.createObjectURL)(data, "image/png", forceDataSchema);
                  }
                  return function convertImgDataToPng2(imgData, forceDataSchema, isMask) {
                    const kind = imgData.kind === void 0 ? _util2.ImageKind.GRAYSCALE_1BPP : imgData.kind;
                    return encode(imgData, kind, forceDataSchema, isMask);
                  };
                }();
                class SVGExtraState {
                  constructor() {
                    this.fontSizeScale = 1;
                    this.fontWeight = SVG_DEFAULTS.fontWeight;
                    this.fontSize = 0;
                    this.textMatrix = _util2.IDENTITY_MATRIX;
                    this.fontMatrix = _util2.FONT_IDENTITY_MATRIX;
                    this.leading = 0;
                    this.textRenderingMode = _util2.TextRenderingMode.FILL;
                    this.textMatrixScale = 1;
                    this.x = 0;
                    this.y = 0;
                    this.lineX = 0;
                    this.lineY = 0;
                    this.charSpacing = 0;
                    this.wordSpacing = 0;
                    this.textHScale = 1;
                    this.textRise = 0;
                    this.fillColor = SVG_DEFAULTS.fillColor;
                    this.strokeColor = "#000000";
                    this.fillAlpha = 1;
                    this.strokeAlpha = 1;
                    this.lineWidth = 1;
                    this.lineJoin = "";
                    this.lineCap = "";
                    this.miterLimit = 0;
                    this.dashArray = [];
                    this.dashPhase = 0;
                    this.dependencies = [];
                    this.activeClipUrl = null;
                    this.clipGroup = null;
                    this.maskId = "";
                  }
                  clone() {
                    return Object.create(this);
                  }
                  setCurrentPoint(x, y) {
                    this.x = x;
                    this.y = y;
                  }
                }
                let clipCount = 0;
                let maskCount = 0;
                let shadingCount = 0;
                exports2.SVGGraphics = SVGGraphics = class {
                  constructor(commonObjs, objs, forceDataSchema = false) {
                    this.svgFactory = new _display_utils2.DOMSVGFactory();
                    this.current = new SVGExtraState();
                    this.transformMatrix = _util2.IDENTITY_MATRIX;
                    this.transformStack = [];
                    this.extraStack = [];
                    this.commonObjs = commonObjs;
                    this.objs = objs;
                    this.pendingClip = null;
                    this.pendingEOFill = false;
                    this.embedFonts = false;
                    this.embeddedFonts = /* @__PURE__ */ Object.create(null);
                    this.cssStyle = null;
                    this.forceDataSchema = !!forceDataSchema;
                    this._operatorIdMapping = [];
                    for (const op in _util2.OPS) {
                      this._operatorIdMapping[_util2.OPS[op]] = op;
                    }
                  }
                  save() {
                    this.transformStack.push(this.transformMatrix);
                    const old = this.current;
                    this.extraStack.push(old);
                    this.current = old.clone();
                  }
                  restore() {
                    this.transformMatrix = this.transformStack.pop();
                    this.current = this.extraStack.pop();
                    this.pendingClip = null;
                    this.tgrp = null;
                  }
                  group(items) {
                    this.save();
                    this.executeOpTree(items);
                    this.restore();
                  }
                  loadDependencies(operatorList) {
                    const fnArray = operatorList.fnArray;
                    const argsArray = operatorList.argsArray;
                    for (let i2 = 0, ii = fnArray.length; i2 < ii; i2++) {
                      if (fnArray[i2] !== _util2.OPS.dependency) {
                        continue;
                      }
                      for (const obj of argsArray[i2]) {
                        const objsPool = obj.startsWith("g_") ? this.commonObjs : this.objs;
                        const promise = new Promise((resolve) => {
                          objsPool.get(obj, resolve);
                        });
                        this.current.dependencies.push(promise);
                      }
                    }
                    return Promise.all(this.current.dependencies);
                  }
                  transform(a2, b, c2, d2, e2, f2) {
                    const transformMatrix = [a2, b, c2, d2, e2, f2];
                    this.transformMatrix = _util2.Util.transform(this.transformMatrix, transformMatrix);
                    this.tgrp = null;
                  }
                  getSVG(operatorList, viewport) {
                    this.viewport = viewport;
                    const svgElement = this._initialize(viewport);
                    return this.loadDependencies(operatorList).then(() => {
                      this.transformMatrix = _util2.IDENTITY_MATRIX;
                      this.executeOpTree(this.convertOpList(operatorList));
                      return svgElement;
                    });
                  }
                  convertOpList(operatorList) {
                    const operatorIdMapping = this._operatorIdMapping;
                    const argsArray = operatorList.argsArray;
                    const fnArray = operatorList.fnArray;
                    const opList = [];
                    for (let i2 = 0, ii = fnArray.length; i2 < ii; i2++) {
                      const fnId = fnArray[i2];
                      opList.push({
                        fnId,
                        fn: operatorIdMapping[fnId],
                        args: argsArray[i2]
                      });
                    }
                    return opListToTree(opList);
                  }
                  executeOpTree(opTree) {
                    for (const opTreeElement of opTree) {
                      const fn = opTreeElement.fn;
                      const fnId = opTreeElement.fnId;
                      const args = opTreeElement.args;
                      switch (fnId | 0) {
                        case _util2.OPS.beginText:
                          this.beginText();
                          break;
                        case _util2.OPS.dependency:
                          break;
                        case _util2.OPS.setLeading:
                          this.setLeading(args);
                          break;
                        case _util2.OPS.setLeadingMoveText:
                          this.setLeadingMoveText(args[0], args[1]);
                          break;
                        case _util2.OPS.setFont:
                          this.setFont(args);
                          break;
                        case _util2.OPS.showText:
                          this.showText(args[0]);
                          break;
                        case _util2.OPS.showSpacedText:
                          this.showText(args[0]);
                          break;
                        case _util2.OPS.endText:
                          this.endText();
                          break;
                        case _util2.OPS.moveText:
                          this.moveText(args[0], args[1]);
                          break;
                        case _util2.OPS.setCharSpacing:
                          this.setCharSpacing(args[0]);
                          break;
                        case _util2.OPS.setWordSpacing:
                          this.setWordSpacing(args[0]);
                          break;
                        case _util2.OPS.setHScale:
                          this.setHScale(args[0]);
                          break;
                        case _util2.OPS.setTextMatrix:
                          this.setTextMatrix(args[0], args[1], args[2], args[3], args[4], args[5]);
                          break;
                        case _util2.OPS.setTextRise:
                          this.setTextRise(args[0]);
                          break;
                        case _util2.OPS.setTextRenderingMode:
                          this.setTextRenderingMode(args[0]);
                          break;
                        case _util2.OPS.setLineWidth:
                          this.setLineWidth(args[0]);
                          break;
                        case _util2.OPS.setLineJoin:
                          this.setLineJoin(args[0]);
                          break;
                        case _util2.OPS.setLineCap:
                          this.setLineCap(args[0]);
                          break;
                        case _util2.OPS.setMiterLimit:
                          this.setMiterLimit(args[0]);
                          break;
                        case _util2.OPS.setFillRGBColor:
                          this.setFillRGBColor(args[0], args[1], args[2]);
                          break;
                        case _util2.OPS.setStrokeRGBColor:
                          this.setStrokeRGBColor(args[0], args[1], args[2]);
                          break;
                        case _util2.OPS.setStrokeColorN:
                          this.setStrokeColorN(args);
                          break;
                        case _util2.OPS.setFillColorN:
                          this.setFillColorN(args);
                          break;
                        case _util2.OPS.shadingFill:
                          this.shadingFill(args[0]);
                          break;
                        case _util2.OPS.setDash:
                          this.setDash(args[0], args[1]);
                          break;
                        case _util2.OPS.setRenderingIntent:
                          this.setRenderingIntent(args[0]);
                          break;
                        case _util2.OPS.setFlatness:
                          this.setFlatness(args[0]);
                          break;
                        case _util2.OPS.setGState:
                          this.setGState(args[0]);
                          break;
                        case _util2.OPS.fill:
                          this.fill();
                          break;
                        case _util2.OPS.eoFill:
                          this.eoFill();
                          break;
                        case _util2.OPS.stroke:
                          this.stroke();
                          break;
                        case _util2.OPS.fillStroke:
                          this.fillStroke();
                          break;
                        case _util2.OPS.eoFillStroke:
                          this.eoFillStroke();
                          break;
                        case _util2.OPS.clip:
                          this.clip("nonzero");
                          break;
                        case _util2.OPS.eoClip:
                          this.clip("evenodd");
                          break;
                        case _util2.OPS.paintSolidColorImageMask:
                          this.paintSolidColorImageMask();
                          break;
                        case _util2.OPS.paintImageXObject:
                          this.paintImageXObject(args[0]);
                          break;
                        case _util2.OPS.paintInlineImageXObject:
                          this.paintInlineImageXObject(args[0]);
                          break;
                        case _util2.OPS.paintImageMaskXObject:
                          this.paintImageMaskXObject(args[0]);
                          break;
                        case _util2.OPS.paintFormXObjectBegin:
                          this.paintFormXObjectBegin(args[0], args[1]);
                          break;
                        case _util2.OPS.paintFormXObjectEnd:
                          this.paintFormXObjectEnd();
                          break;
                        case _util2.OPS.closePath:
                          this.closePath();
                          break;
                        case _util2.OPS.closeStroke:
                          this.closeStroke();
                          break;
                        case _util2.OPS.closeFillStroke:
                          this.closeFillStroke();
                          break;
                        case _util2.OPS.closeEOFillStroke:
                          this.closeEOFillStroke();
                          break;
                        case _util2.OPS.nextLine:
                          this.nextLine();
                          break;
                        case _util2.OPS.transform:
                          this.transform(args[0], args[1], args[2], args[3], args[4], args[5]);
                          break;
                        case _util2.OPS.constructPath:
                          this.constructPath(args[0], args[1]);
                          break;
                        case _util2.OPS.endPath:
                          this.endPath();
                          break;
                        case 92:
                          this.group(opTreeElement.items);
                          break;
                        default:
                          (0, _util2.warn)(`Unimplemented operator ${fn}`);
                          break;
                      }
                    }
                  }
                  setWordSpacing(wordSpacing) {
                    this.current.wordSpacing = wordSpacing;
                  }
                  setCharSpacing(charSpacing) {
                    this.current.charSpacing = charSpacing;
                  }
                  nextLine() {
                    this.moveText(0, this.current.leading);
                  }
                  setTextMatrix(a2, b, c2, d2, e2, f2) {
                    const current = this.current;
                    current.textMatrix = current.lineMatrix = [a2, b, c2, d2, e2, f2];
                    current.textMatrixScale = Math.hypot(a2, b);
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.xcoords = [];
                    current.ycoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtElement.appendChild(current.tspan);
                  }
                  beginText() {
                    const current = this.current;
                    current.x = current.lineX = 0;
                    current.y = current.lineY = 0;
                    current.textMatrix = _util2.IDENTITY_MATRIX;
                    current.lineMatrix = _util2.IDENTITY_MATRIX;
                    current.textMatrixScale = 1;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.txtElement = this.svgFactory.createElement("svg:text");
                    current.txtgrp = this.svgFactory.createElement("svg:g");
                    current.xcoords = [];
                    current.ycoords = [];
                  }
                  moveText(x, y) {
                    const current = this.current;
                    current.x = current.lineX += x;
                    current.y = current.lineY += y;
                    current.xcoords = [];
                    current.ycoords = [];
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                  }
                  showText(glyphs) {
                    const current = this.current;
                    const font = current.font;
                    const fontSize = current.fontSize;
                    if (fontSize === 0) {
                      return;
                    }
                    const fontSizeScale = current.fontSizeScale;
                    const charSpacing = current.charSpacing;
                    const wordSpacing = current.wordSpacing;
                    const fontDirection = current.fontDirection;
                    const textHScale = current.textHScale * fontDirection;
                    const vertical = font.vertical;
                    const spacingDir = vertical ? 1 : -1;
                    const defaultVMetrics = font.defaultVMetrics;
                    const widthAdvanceScale = fontSize * current.fontMatrix[0];
                    let x = 0;
                    for (const glyph of glyphs) {
                      if (glyph === null) {
                        x += fontDirection * wordSpacing;
                        continue;
                      } else if ((0, _util2.isNum)(glyph)) {
                        x += spacingDir * glyph * fontSize / 1e3;
                        continue;
                      }
                      const spacing = (glyph.isSpace ? wordSpacing : 0) + charSpacing;
                      const character = glyph.fontChar;
                      let scaledX, scaledY;
                      let width = glyph.width;
                      if (vertical) {
                        let vx;
                        const vmetric = glyph.vmetric || defaultVMetrics;
                        vx = glyph.vmetric ? vmetric[1] : width * 0.5;
                        vx = -vx * widthAdvanceScale;
                        const vy = vmetric[2] * widthAdvanceScale;
                        width = vmetric ? -vmetric[0] : width;
                        scaledX = vx / fontSizeScale;
                        scaledY = (x + vy) / fontSizeScale;
                      } else {
                        scaledX = x / fontSizeScale;
                        scaledY = 0;
                      }
                      if (glyph.isInFont || font.missingFile) {
                        current.xcoords.push(current.x + scaledX);
                        if (vertical) {
                          current.ycoords.push(-current.y + scaledY);
                        }
                        current.tspan.textContent += character;
                      } else {
                      }
                      let charWidth;
                      if (vertical) {
                        charWidth = width * widthAdvanceScale - spacing * fontDirection;
                      } else {
                        charWidth = width * widthAdvanceScale + spacing * fontDirection;
                      }
                      x += charWidth;
                    }
                    current.tspan.setAttributeNS(null, "x", current.xcoords.map(pf).join(" "));
                    if (vertical) {
                      current.tspan.setAttributeNS(null, "y", current.ycoords.map(pf).join(" "));
                    } else {
                      current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    }
                    if (vertical) {
                      current.y -= x;
                    } else {
                      current.x += x * textHScale;
                    }
                    current.tspan.setAttributeNS(null, "font-family", current.fontFamily);
                    current.tspan.setAttributeNS(null, "font-size", `${pf(current.fontSize)}px`);
                    if (current.fontStyle !== SVG_DEFAULTS.fontStyle) {
                      current.tspan.setAttributeNS(null, "font-style", current.fontStyle);
                    }
                    if (current.fontWeight !== SVG_DEFAULTS.fontWeight) {
                      current.tspan.setAttributeNS(null, "font-weight", current.fontWeight);
                    }
                    const fillStrokeMode = current.textRenderingMode & _util2.TextRenderingMode.FILL_STROKE_MASK;
                    if (fillStrokeMode === _util2.TextRenderingMode.FILL || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      if (current.fillColor !== SVG_DEFAULTS.fillColor) {
                        current.tspan.setAttributeNS(null, "fill", current.fillColor);
                      }
                      if (current.fillAlpha < 1) {
                        current.tspan.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      }
                    } else if (current.textRenderingMode === _util2.TextRenderingMode.ADD_TO_PATH) {
                      current.tspan.setAttributeNS(null, "fill", "transparent");
                    } else {
                      current.tspan.setAttributeNS(null, "fill", "none");
                    }
                    if (fillStrokeMode === _util2.TextRenderingMode.STROKE || fillStrokeMode === _util2.TextRenderingMode.FILL_STROKE) {
                      const lineWidthScale = 1 / (current.textMatrixScale || 1);
                      this._setStrokeAttributes(current.tspan, lineWidthScale);
                    }
                    let textMatrix = current.textMatrix;
                    if (current.textRise !== 0) {
                      textMatrix = textMatrix.slice();
                      textMatrix[5] += current.textRise;
                    }
                    current.txtElement.setAttributeNS(null, "transform", `${pm(textMatrix)} scale(${pf(textHScale)}, -1)`);
                    current.txtElement.setAttributeNS(XML_NS, "xml:space", "preserve");
                    current.txtElement.appendChild(current.tspan);
                    current.txtgrp.appendChild(current.txtElement);
                    this._ensureTransformGroup().appendChild(current.txtElement);
                  }
                  setLeadingMoveText(x, y) {
                    this.setLeading(-y);
                    this.moveText(x, y);
                  }
                  addFontStyle(fontObj) {
                    if (!fontObj.data) {
                      throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                    }
                    if (!this.cssStyle) {
                      this.cssStyle = this.svgFactory.createElement("svg:style");
                      this.cssStyle.setAttributeNS(null, "type", "text/css");
                      this.defs.appendChild(this.cssStyle);
                    }
                    const url = (0, _util2.createObjectURL)(fontObj.data, fontObj.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += `@font-face { font-family: "${fontObj.loadedName}"; src: url(${url}); }
`;
                  }
                  setFont(details) {
                    const current = this.current;
                    const fontObj = this.commonObjs.get(details[0]);
                    let size = details[1];
                    current.font = fontObj;
                    if (this.embedFonts && !fontObj.missingFile && !this.embeddedFonts[fontObj.loadedName]) {
                      this.addFontStyle(fontObj);
                      this.embeddedFonts[fontObj.loadedName] = fontObj;
                    }
                    current.fontMatrix = fontObj.fontMatrix || _util2.FONT_IDENTITY_MATRIX;
                    let bold = "normal";
                    if (fontObj.black) {
                      bold = "900";
                    } else if (fontObj.bold) {
                      bold = "bold";
                    }
                    const italic = fontObj.italic ? "italic" : "normal";
                    if (size < 0) {
                      size = -size;
                      current.fontDirection = -1;
                    } else {
                      current.fontDirection = 1;
                    }
                    current.fontSize = size;
                    current.fontFamily = fontObj.loadedName;
                    current.fontWeight = bold;
                    current.fontStyle = italic;
                    current.tspan = this.svgFactory.createElement("svg:tspan");
                    current.tspan.setAttributeNS(null, "y", pf(-current.y));
                    current.xcoords = [];
                    current.ycoords = [];
                  }
                  endText() {
                    var _a;
                    const current = this.current;
                    if (current.textRenderingMode & _util2.TextRenderingMode.ADD_TO_PATH_FLAG && ((_a = current.txtElement) == null ? void 0 : _a.hasChildNodes())) {
                      current.element = current.txtElement;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                  setLineWidth(width) {
                    if (width > 0) {
                      this.current.lineWidth = width;
                    }
                  }
                  setLineCap(style) {
                    this.current.lineCap = LINE_CAP_STYLES[style];
                  }
                  setLineJoin(style) {
                    this.current.lineJoin = LINE_JOIN_STYLES[style];
                  }
                  setMiterLimit(limit) {
                    this.current.miterLimit = limit;
                  }
                  setStrokeAlpha(strokeAlpha) {
                    this.current.strokeAlpha = strokeAlpha;
                  }
                  setStrokeRGBColor(r2, g, b) {
                    this.current.strokeColor = _util2.Util.makeHexColor(r2, g, b);
                  }
                  setFillAlpha(fillAlpha) {
                    this.current.fillAlpha = fillAlpha;
                  }
                  setFillRGBColor(r2, g, b) {
                    this.current.fillColor = _util2.Util.makeHexColor(r2, g, b);
                    this.current.tspan = this.svgFactory.createElement("svg:tspan");
                    this.current.xcoords = [];
                    this.current.ycoords = [];
                  }
                  setStrokeColorN(args) {
                    this.current.strokeColor = this._makeColorN_Pattern(args);
                  }
                  setFillColorN(args) {
                    this.current.fillColor = this._makeColorN_Pattern(args);
                  }
                  shadingFill(args) {
                    const width = this.viewport.width;
                    const height = this.viewport.height;
                    const inv = _util2.Util.inverseTransform(this.transformMatrix);
                    const bl = _util2.Util.applyTransform([0, 0], inv);
                    const br = _util2.Util.applyTransform([0, height], inv);
                    const ul = _util2.Util.applyTransform([width, 0], inv);
                    const ur = _util2.Util.applyTransform([width, height], inv);
                    const x0 = Math.min(bl[0], br[0], ul[0], ur[0]);
                    const y0 = Math.min(bl[1], br[1], ul[1], ur[1]);
                    const x1 = Math.max(bl[0], br[0], ul[0], ur[0]);
                    const y1 = Math.max(bl[1], br[1], ul[1], ur[1]);
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", x0);
                    rect.setAttributeNS(null, "y", y0);
                    rect.setAttributeNS(null, "width", x1 - x0);
                    rect.setAttributeNS(null, "height", y1 - y0);
                    rect.setAttributeNS(null, "fill", this._makeShadingPattern(args));
                    if (this.current.fillAlpha < 1) {
                      rect.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                    }
                    this._ensureTransformGroup().appendChild(rect);
                  }
                  _makeColorN_Pattern(args) {
                    if (args[0] === "TilingPattern") {
                      return this._makeTilingPattern(args);
                    }
                    return this._makeShadingPattern(args);
                  }
                  _makeTilingPattern(args) {
                    const color = args[1];
                    const operatorList = args[2];
                    const matrix = args[3] || _util2.IDENTITY_MATRIX;
                    const [x0, y0, x1, y1] = args[4];
                    const xstep = args[5];
                    const ystep = args[6];
                    const paintType = args[7];
                    const tilingId = `shading${shadingCount++}`;
                    const [tx0, ty0] = _util2.Util.applyTransform([x0, y0], matrix);
                    const [tx1, ty1] = _util2.Util.applyTransform([x1, y1], matrix);
                    const [xscale, yscale] = _util2.Util.singularValueDecompose2dScale(matrix);
                    const txstep = xstep * xscale;
                    const tystep = ystep * yscale;
                    const tiling = this.svgFactory.createElement("svg:pattern");
                    tiling.setAttributeNS(null, "id", tilingId);
                    tiling.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                    tiling.setAttributeNS(null, "width", txstep);
                    tiling.setAttributeNS(null, "height", tystep);
                    tiling.setAttributeNS(null, "x", `${tx0}`);
                    tiling.setAttributeNS(null, "y", `${ty0}`);
                    const svg = this.svg;
                    const transformMatrix = this.transformMatrix;
                    const fillColor = this.current.fillColor;
                    const strokeColor = this.current.strokeColor;
                    const bbox = this.svgFactory.create(tx1 - tx0, ty1 - ty0);
                    this.svg = bbox;
                    this.transformMatrix = matrix;
                    if (paintType === 2) {
                      const cssColor = _util2.Util.makeHexColor(...color);
                      this.current.fillColor = cssColor;
                      this.current.strokeColor = cssColor;
                    }
                    this.executeOpTree(this.convertOpList(operatorList));
                    this.svg = svg;
                    this.transformMatrix = transformMatrix;
                    this.current.fillColor = fillColor;
                    this.current.strokeColor = strokeColor;
                    tiling.appendChild(bbox.childNodes[0]);
                    this.defs.appendChild(tiling);
                    return `url(#${tilingId})`;
                  }
                  _makeShadingPattern(args) {
                    switch (args[0]) {
                      case "RadialAxial":
                        const shadingId = `shading${shadingCount++}`;
                        const colorStops = args[3];
                        let gradient;
                        switch (args[1]) {
                          case "axial":
                            const point0 = args[4];
                            const point1 = args[5];
                            gradient = this.svgFactory.createElement("svg:linearGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "x1", point0[0]);
                            gradient.setAttributeNS(null, "y1", point0[1]);
                            gradient.setAttributeNS(null, "x2", point1[0]);
                            gradient.setAttributeNS(null, "y2", point1[1]);
                            break;
                          case "radial":
                            const focalPoint = args[4];
                            const circlePoint = args[5];
                            const focalRadius = args[6];
                            const circleRadius = args[7];
                            gradient = this.svgFactory.createElement("svg:radialGradient");
                            gradient.setAttributeNS(null, "id", shadingId);
                            gradient.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                            gradient.setAttributeNS(null, "cx", circlePoint[0]);
                            gradient.setAttributeNS(null, "cy", circlePoint[1]);
                            gradient.setAttributeNS(null, "r", circleRadius);
                            gradient.setAttributeNS(null, "fx", focalPoint[0]);
                            gradient.setAttributeNS(null, "fy", focalPoint[1]);
                            gradient.setAttributeNS(null, "fr", focalRadius);
                            break;
                          default:
                            throw new Error(`Unknown RadialAxial type: ${args[1]}`);
                        }
                        for (const colorStop of colorStops) {
                          const stop = this.svgFactory.createElement("svg:stop");
                          stop.setAttributeNS(null, "offset", colorStop[0]);
                          stop.setAttributeNS(null, "stop-color", colorStop[1]);
                          gradient.appendChild(stop);
                        }
                        this.defs.appendChild(gradient);
                        return `url(#${shadingId})`;
                      case "Mesh":
                        (0, _util2.warn)("Unimplemented pattern Mesh");
                        return null;
                      case "Dummy":
                        return "hotpink";
                      default:
                        throw new Error(`Unknown IR type: ${args[0]}`);
                    }
                  }
                  setDash(dashArray, dashPhase) {
                    this.current.dashArray = dashArray;
                    this.current.dashPhase = dashPhase;
                  }
                  constructPath(ops, args) {
                    const current = this.current;
                    let x = current.x, y = current.y;
                    let d2 = [];
                    let j = 0;
                    for (const op of ops) {
                      switch (op | 0) {
                        case _util2.OPS.rectangle:
                          x = args[j++];
                          y = args[j++];
                          const width = args[j++];
                          const height = args[j++];
                          const xw = x + width;
                          const yh = y + height;
                          d2.push("M", pf(x), pf(y), "L", pf(xw), pf(y), "L", pf(xw), pf(yh), "L", pf(x), pf(yh), "Z");
                          break;
                        case _util2.OPS.moveTo:
                          x = args[j++];
                          y = args[j++];
                          d2.push("M", pf(x), pf(y));
                          break;
                        case _util2.OPS.lineTo:
                          x = args[j++];
                          y = args[j++];
                          d2.push("L", pf(x), pf(y));
                          break;
                        case _util2.OPS.curveTo:
                          x = args[j + 4];
                          y = args[j + 5];
                          d2.push("C", pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]), pf(x), pf(y));
                          j += 6;
                          break;
                        case _util2.OPS.curveTo2:
                          d2.push("C", pf(x), pf(y), pf(args[j]), pf(args[j + 1]), pf(args[j + 2]), pf(args[j + 3]));
                          x = args[j + 2];
                          y = args[j + 3];
                          j += 4;
                          break;
                        case _util2.OPS.curveTo3:
                          x = args[j + 2];
                          y = args[j + 3];
                          d2.push("C", pf(args[j]), pf(args[j + 1]), pf(x), pf(y), pf(x), pf(y));
                          j += 4;
                          break;
                        case _util2.OPS.closePath:
                          d2.push("Z");
                          break;
                      }
                    }
                    d2 = d2.join(" ");
                    if (current.path && ops.length > 0 && ops[0] !== _util2.OPS.rectangle && ops[0] !== _util2.OPS.moveTo) {
                      d2 = current.path.getAttributeNS(null, "d") + d2;
                    } else {
                      current.path = this.svgFactory.createElement("svg:path");
                      this._ensureTransformGroup().appendChild(current.path);
                    }
                    current.path.setAttributeNS(null, "d", d2);
                    current.path.setAttributeNS(null, "fill", "none");
                    current.element = current.path;
                    current.setCurrentPoint(x, y);
                  }
                  endPath() {
                    const current = this.current;
                    current.path = null;
                    if (!this.pendingClip) {
                      return;
                    }
                    if (!current.element) {
                      this.pendingClip = null;
                      return;
                    }
                    const clipId = `clippath${clipCount++}`;
                    const clipPath = this.svgFactory.createElement("svg:clipPath");
                    clipPath.setAttributeNS(null, "id", clipId);
                    clipPath.setAttributeNS(null, "transform", pm(this.transformMatrix));
                    const clipElement = current.element.cloneNode(true);
                    if (this.pendingClip === "evenodd") {
                      clipElement.setAttributeNS(null, "clip-rule", "evenodd");
                    } else {
                      clipElement.setAttributeNS(null, "clip-rule", "nonzero");
                    }
                    this.pendingClip = null;
                    clipPath.appendChild(clipElement);
                    this.defs.appendChild(clipPath);
                    if (current.activeClipUrl) {
                      current.clipGroup = null;
                      for (const prev of this.extraStack) {
                        prev.clipGroup = null;
                      }
                      clipPath.setAttributeNS(null, "clip-path", current.activeClipUrl);
                    }
                    current.activeClipUrl = `url(#${clipId})`;
                    this.tgrp = null;
                  }
                  clip(type) {
                    this.pendingClip = type;
                  }
                  closePath() {
                    const current = this.current;
                    if (current.path) {
                      const d2 = `${current.path.getAttributeNS(null, "d")}Z`;
                      current.path.setAttributeNS(null, "d", d2);
                    }
                  }
                  setLeading(leading) {
                    this.current.leading = -leading;
                  }
                  setTextRise(textRise) {
                    this.current.textRise = textRise;
                  }
                  setTextRenderingMode(textRenderingMode) {
                    this.current.textRenderingMode = textRenderingMode;
                  }
                  setHScale(scale) {
                    this.current.textHScale = scale / 100;
                  }
                  setRenderingIntent(intent) {
                  }
                  setFlatness(flatness) {
                  }
                  setGState(states) {
                    for (const [key, value] of states) {
                      switch (key) {
                        case "LW":
                          this.setLineWidth(value);
                          break;
                        case "LC":
                          this.setLineCap(value);
                          break;
                        case "LJ":
                          this.setLineJoin(value);
                          break;
                        case "ML":
                          this.setMiterLimit(value);
                          break;
                        case "D":
                          this.setDash(value[0], value[1]);
                          break;
                        case "RI":
                          this.setRenderingIntent(value);
                          break;
                        case "FL":
                          this.setFlatness(value);
                          break;
                        case "Font":
                          this.setFont(value);
                          break;
                        case "CA":
                          this.setStrokeAlpha(value);
                          break;
                        case "ca":
                          this.setFillAlpha(value);
                          break;
                        default:
                          (0, _util2.warn)(`Unimplemented graphic state operator ${key}`);
                          break;
                      }
                    }
                  }
                  fill() {
                    const current = this.current;
                    if (current.element) {
                      current.element.setAttributeNS(null, "fill", current.fillColor);
                      current.element.setAttributeNS(null, "fill-opacity", current.fillAlpha);
                      this.endPath();
                    }
                  }
                  stroke() {
                    const current = this.current;
                    if (current.element) {
                      this._setStrokeAttributes(current.element);
                      current.element.setAttributeNS(null, "fill", "none");
                      this.endPath();
                    }
                  }
                  _setStrokeAttributes(element, lineWidthScale = 1) {
                    const current = this.current;
                    let dashArray = current.dashArray;
                    if (lineWidthScale !== 1 && dashArray.length > 0) {
                      dashArray = dashArray.map(function(value) {
                        return lineWidthScale * value;
                      });
                    }
                    element.setAttributeNS(null, "stroke", current.strokeColor);
                    element.setAttributeNS(null, "stroke-opacity", current.strokeAlpha);
                    element.setAttributeNS(null, "stroke-miterlimit", pf(current.miterLimit));
                    element.setAttributeNS(null, "stroke-linecap", current.lineCap);
                    element.setAttributeNS(null, "stroke-linejoin", current.lineJoin);
                    element.setAttributeNS(null, "stroke-width", pf(lineWidthScale * current.lineWidth) + "px");
                    element.setAttributeNS(null, "stroke-dasharray", dashArray.map(pf).join(" "));
                    element.setAttributeNS(null, "stroke-dashoffset", pf(lineWidthScale * current.dashPhase) + "px");
                  }
                  eoFill() {
                    if (this.current.element) {
                      this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                    }
                    this.fill();
                  }
                  fillStroke() {
                    this.stroke();
                    this.fill();
                  }
                  eoFillStroke() {
                    if (this.current.element) {
                      this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                    }
                    this.fillStroke();
                  }
                  closeStroke() {
                    this.closePath();
                    this.stroke();
                  }
                  closeFillStroke() {
                    this.closePath();
                    this.fillStroke();
                  }
                  closeEOFillStroke() {
                    this.closePath();
                    this.eoFillStroke();
                  }
                  paintSolidColorImageMask() {
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", "1px");
                    rect.setAttributeNS(null, "height", "1px");
                    rect.setAttributeNS(null, "fill", this.current.fillColor);
                    this._ensureTransformGroup().appendChild(rect);
                  }
                  paintImageXObject(objId) {
                    const imgData = objId.startsWith("g_") ? this.commonObjs.get(objId) : this.objs.get(objId);
                    if (!imgData) {
                      (0, _util2.warn)(`Dependent image with object ID ${objId} is not ready yet`);
                      return;
                    }
                    this.paintInlineImageXObject(imgData);
                  }
                  paintInlineImageXObject(imgData, mask) {
                    const width = imgData.width;
                    const height = imgData.height;
                    const imgSrc = convertImgDataToPng(imgData, this.forceDataSchema, !!mask);
                    const cliprect = this.svgFactory.createElement("svg:rect");
                    cliprect.setAttributeNS(null, "x", "0");
                    cliprect.setAttributeNS(null, "y", "0");
                    cliprect.setAttributeNS(null, "width", pf(width));
                    cliprect.setAttributeNS(null, "height", pf(height));
                    this.current.element = cliprect;
                    this.clip("nonzero");
                    const imgEl = this.svgFactory.createElement("svg:image");
                    imgEl.setAttributeNS(XLINK_NS, "xlink:href", imgSrc);
                    imgEl.setAttributeNS(null, "x", "0");
                    imgEl.setAttributeNS(null, "y", pf(-height));
                    imgEl.setAttributeNS(null, "width", pf(width) + "px");
                    imgEl.setAttributeNS(null, "height", pf(height) + "px");
                    imgEl.setAttributeNS(null, "transform", `scale(${pf(1 / width)} ${pf(-1 / height)})`);
                    if (mask) {
                      mask.appendChild(imgEl);
                    } else {
                      this._ensureTransformGroup().appendChild(imgEl);
                    }
                  }
                  paintImageMaskXObject(imgData) {
                    const current = this.current;
                    const width = imgData.width;
                    const height = imgData.height;
                    const fillColor = current.fillColor;
                    current.maskId = `mask${maskCount++}`;
                    const mask = this.svgFactory.createElement("svg:mask");
                    mask.setAttributeNS(null, "id", current.maskId);
                    const rect = this.svgFactory.createElement("svg:rect");
                    rect.setAttributeNS(null, "x", "0");
                    rect.setAttributeNS(null, "y", "0");
                    rect.setAttributeNS(null, "width", pf(width));
                    rect.setAttributeNS(null, "height", pf(height));
                    rect.setAttributeNS(null, "fill", fillColor);
                    rect.setAttributeNS(null, "mask", `url(#${current.maskId})`);
                    this.defs.appendChild(mask);
                    this._ensureTransformGroup().appendChild(rect);
                    this.paintInlineImageXObject(imgData, mask);
                  }
                  paintFormXObjectBegin(matrix, bbox) {
                    if (Array.isArray(matrix) && matrix.length === 6) {
                      this.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
                    }
                    if (bbox) {
                      const width = bbox[2] - bbox[0];
                      const height = bbox[3] - bbox[1];
                      const cliprect = this.svgFactory.createElement("svg:rect");
                      cliprect.setAttributeNS(null, "x", bbox[0]);
                      cliprect.setAttributeNS(null, "y", bbox[1]);
                      cliprect.setAttributeNS(null, "width", pf(width));
                      cliprect.setAttributeNS(null, "height", pf(height));
                      this.current.element = cliprect;
                      this.clip("nonzero");
                      this.endPath();
                    }
                  }
                  paintFormXObjectEnd() {
                  }
                  _initialize(viewport) {
                    const svg = this.svgFactory.create(viewport.width, viewport.height);
                    const definitions = this.svgFactory.createElement("svg:defs");
                    svg.appendChild(definitions);
                    this.defs = definitions;
                    const rootGroup = this.svgFactory.createElement("svg:g");
                    rootGroup.setAttributeNS(null, "transform", pm(viewport.transform));
                    svg.appendChild(rootGroup);
                    this.svg = rootGroup;
                    return svg;
                  }
                  _ensureClipGroup() {
                    if (!this.current.clipGroup) {
                      const clipGroup = this.svgFactory.createElement("svg:g");
                      clipGroup.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                      this.svg.appendChild(clipGroup);
                      this.current.clipGroup = clipGroup;
                    }
                    return this.current.clipGroup;
                  }
                  _ensureTransformGroup() {
                    if (!this.tgrp) {
                      this.tgrp = this.svgFactory.createElement("svg:g");
                      this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                      if (this.current.activeClipUrl) {
                        this._ensureClipGroup().appendChild(this.tgrp);
                      } else {
                        this.svg.appendChild(this.tgrp);
                      }
                    }
                    return this.tgrp;
                  }
                };
              }
            },
            /* 21 */
            /***/
            (__unused_webpack_module2, exports2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.XfaLayer = void 0;
              class XfaLayer {
                static setupStorage(html, fieldId, element, storage) {
                  const storedData = storage.getValue(fieldId, {
                    value: null
                  });
                  switch (element.name) {
                    case "textarea":
                      html.textContent = storedData.value !== null ? storedData.value : "";
                      html.addEventListener("input", (event) => {
                        storage.setValue(fieldId, {
                          value: event.target.value
                        });
                      });
                      break;
                    case "input":
                      if (storedData.value !== null) {
                        html.setAttribute("value", storedData.value);
                      }
                      if (element.attributes.type === "radio") {
                        html.addEventListener("change", (event) => {
                          const {
                            target
                          } = event;
                          for (const radio of document.getElementsByName(target.name)) {
                            if (radio !== target) {
                              const id = radio.id;
                              storage.setValue(id.split("-")[0], {
                                value: false
                              });
                            }
                          }
                          storage.setValue(fieldId, {
                            value: target.checked
                          });
                        });
                      } else {
                        html.addEventListener("input", (event) => {
                          storage.setValue(fieldId, {
                            value: event.target.value
                          });
                        });
                      }
                      break;
                    case "select":
                      if (storedData.value !== null) {
                        for (const option of element.children) {
                          if (option.attributes.value === storedData.value) {
                            option.attributes.selected = true;
                          }
                        }
                      }
                      html.addEventListener("input", (event) => {
                        const options = event.target.options;
                        const value = options.selectedIndex === -1 ? null : options[options.selectedIndex].value;
                        storage.setValue(fieldId, {
                          value
                        });
                      });
                      break;
                  }
                }
                static setAttributes(html, element, storage) {
                  const {
                    attributes
                  } = element;
                  for (const [key, value] of Object.entries(attributes)) {
                    if (value === null || value === void 0 || key === "fieldId") {
                      continue;
                    }
                    if (key !== "style") {
                      if (key === "textContent") {
                        html.textContent = value;
                      } else {
                        html.setAttribute(key, value);
                      }
                    } else {
                      Object.assign(html.style, value);
                    }
                  }
                  if (storage && attributes.fieldId !== void 0) {
                    this.setupStorage(html, attributes.fieldId, element, storage);
                  }
                }
                static render(parameters) {
                  const storage = parameters.annotationStorage;
                  const root = parameters.xfa;
                  const rootHtml = document.createElement(root.name);
                  if (root.attributes) {
                    this.setAttributes(rootHtml, root);
                  }
                  const stack = [[root, -1, rootHtml]];
                  const rootDiv = parameters.div;
                  rootDiv.appendChild(rootHtml);
                  const coeffs = parameters.viewport.transform.join(",");
                  rootDiv.style.transform = `matrix(${coeffs})`;
                  rootDiv.setAttribute("class", "xfaLayer xfaFont");
                  while (stack.length > 0) {
                    const [parent, i2, html] = stack[stack.length - 1];
                    if (i2 + 1 === parent.children.length) {
                      stack.pop();
                      continue;
                    }
                    const child = parent.children[++stack[stack.length - 1][1]];
                    if (child === null) {
                      continue;
                    }
                    const {
                      name
                    } = child;
                    if (name === "#text") {
                      html.appendChild(document.createTextNode(child.value));
                      continue;
                    }
                    const childHtml = document.createElement(name);
                    html.appendChild(childHtml);
                    if (child.attributes) {
                      this.setAttributes(childHtml, child, storage);
                    }
                    if (child.children && child.children.length > 0) {
                      stack.push([child, -1, childHtml]);
                    } else if (child.value) {
                      childHtml.appendChild(document.createTextNode(child.value));
                    }
                  }
                }
                static update(parameters) {
                  const transform = `matrix(${parameters.viewport.transform.join(",")})`;
                  parameters.div.style.transform = transform;
                  parameters.div.hidden = false;
                }
              }
              exports2.XfaLayer = XfaLayer;
            },
            /* 22 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFNodeStream = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _network_utils = __w_pdfjs_require__2(23);
              ;
              const fs = require_fs();
              const http = require_http();
              const https = require_https();
              const url = require_url();
              const fileUriRegex = /^file:\/\/\/[a-zA-Z]:\//;
              function parseUrl(sourceUrl) {
                const parsedUrl = url.parse(sourceUrl);
                if (parsedUrl.protocol === "file:" || parsedUrl.host) {
                  return parsedUrl;
                }
                if (/^[a-z]:[/\\]/i.test(sourceUrl)) {
                  return url.parse(`file:///${sourceUrl}`);
                }
                if (!parsedUrl.host) {
                  parsedUrl.protocol = "file:";
                }
                return parsedUrl;
              }
              class PDFNodeStream {
                constructor(source) {
                  this.source = source;
                  this.url = parseUrl(source.url);
                  this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:";
                  this.isFsUrl = this.url.protocol === "file:";
                  this.httpHeaders = this.isHttp && source.httpHeaders || {};
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
                  this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                  return this._fullRequestReader;
                }
                getRangeReader(start, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const rangeReader = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, start, end) : new PDFNodeStreamRangeReader(this, start, end);
                  this._rangeRequestReaders.push(rangeReader);
                  return rangeReader;
                }
                cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFNodeStream = PDFNodeStream;
              class BaseFullReader {
                constructor(stream) {
                  this._url = stream.url;
                  this._done = false;
                  this._storedError = null;
                  this.onProgress = null;
                  const source = stream.source;
                  this._contentLength = source.length;
                  this._loaded = 0;
                  this._filename = null;
                  this._disableRange = source.disableRange || false;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  this._isStreamingSupported = !source.disableStream;
                  this._isRangeSupported = !source.disableRange;
                  this._readableStream = null;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  this._headersCapability = (0, _util2.createPromiseCapability)();
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._readCapability.promise;
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  const chunk = this._readableStream.read();
                  if (chunk === null) {
                    this._readCapability = (0, _util2.createPromiseCapability)();
                    return this.read();
                  }
                  this._loaded += chunk.length;
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded,
                      total: this._contentLength
                    });
                  }
                  const buffer = new Uint8Array(chunk).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);
                    return;
                  }
                  this._readableStream.destroy(reason);
                }
                _error(reason) {
                  this._storedError = reason;
                  this._readCapability.resolve();
                }
                _setReadableStream(readableStream) {
                  this._readableStream = readableStream;
                  readableStream.on("readable", () => {
                    this._readCapability.resolve();
                  });
                  readableStream.on("end", () => {
                    readableStream.destroy();
                    this._done = true;
                    this._readCapability.resolve();
                  });
                  readableStream.on("error", (reason) => {
                    this._error(reason);
                  });
                  if (!this._isStreamingSupported && this._isRangeSupported) {
                    this._error(new _util2.AbortException("streaming is disabled"));
                  }
                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }
              class BaseRangeReader {
                constructor(stream) {
                  this._url = stream.url;
                  this._done = false;
                  this._storedError = null;
                  this.onProgress = null;
                  this._loaded = 0;
                  this._readableStream = null;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  const source = stream.source;
                  this._isStreamingSupported = !source.disableStream;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._readCapability.promise;
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  const chunk = this._readableStream.read();
                  if (chunk === null) {
                    this._readCapability = (0, _util2.createPromiseCapability)();
                    return this.read();
                  }
                  this._loaded += chunk.length;
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded
                    });
                  }
                  const buffer = new Uint8Array(chunk).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (!this._readableStream) {
                    this._error(reason);
                    return;
                  }
                  this._readableStream.destroy(reason);
                }
                _error(reason) {
                  this._storedError = reason;
                  this._readCapability.resolve();
                }
                _setReadableStream(readableStream) {
                  this._readableStream = readableStream;
                  readableStream.on("readable", () => {
                    this._readCapability.resolve();
                  });
                  readableStream.on("end", () => {
                    readableStream.destroy();
                    this._done = true;
                    this._readCapability.resolve();
                  });
                  readableStream.on("error", (reason) => {
                    this._error(reason);
                  });
                  if (this._storedError) {
                    this._readableStream.destroy(this._storedError);
                  }
                }
              }
              function createRequestOptions(parsedUrl, headers) {
                return {
                  protocol: parsedUrl.protocol,
                  auth: parsedUrl.auth,
                  host: parsedUrl.hostname,
                  port: parsedUrl.port,
                  path: parsedUrl.path,
                  method: "GET",
                  headers
                };
              }
              class PDFNodeStreamFullReader extends BaseFullReader {
                constructor(stream) {
                  super(stream);
                  const handleResponse = (response) => {
                    if (response.statusCode === 404) {
                      const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = error;
                      this._headersCapability.reject(error);
                      return;
                    }
                    this._headersCapability.resolve();
                    this._setReadableStream(response);
                    const getResponseHeader = (name) => {
                      return this._readableStream.headers[name.toLowerCase()];
                    };
                    const {
                      allowRangeRequests,
                      suggestedLength
                    } = (0, _network_utils.validateRangeRequestCapabilities)({
                      getResponseHeader,
                      isHttp: stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = allowRangeRequests;
                    this._contentLength = suggestedLength || this._contentLength;
                    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                  };
                  this._request = null;
                  if (this._url.protocol === "http:") {
                    this._request = http.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
                  } else {
                    this._request = https.request(createRequestOptions(this._url, stream.httpHeaders), handleResponse);
                  }
                  this._request.on("error", (reason) => {
                    this._storedError = reason;
                    this._headersCapability.reject(reason);
                  });
                  this._request.end();
                }
              }
              class PDFNodeStreamRangeReader extends BaseRangeReader {
                constructor(stream, start, end) {
                  super(stream);
                  this._httpHeaders = {};
                  for (const property in stream.httpHeaders) {
                    const value = stream.httpHeaders[property];
                    if (typeof value === "undefined") {
                      continue;
                    }
                    this._httpHeaders[property] = value;
                  }
                  this._httpHeaders.Range = `bytes=${start}-${end - 1}`;
                  const handleResponse = (response) => {
                    if (response.statusCode === 404) {
                      const error = new _util2.MissingPDFException(`Missing PDF "${this._url}".`);
                      this._storedError = error;
                      return;
                    }
                    this._setReadableStream(response);
                  };
                  this._request = null;
                  if (this._url.protocol === "http:") {
                    this._request = http.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                  } else {
                    this._request = https.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                  }
                  this._request.on("error", (reason) => {
                    this._storedError = reason;
                  });
                  this._request.end();
                }
              }
              class PDFNodeStreamFsFullReader extends BaseFullReader {
                constructor(stream) {
                  super(stream);
                  let path = decodeURIComponent(this._url.path);
                  if (fileUriRegex.test(this._url.href)) {
                    path = path.replace(/^\//, "");
                  }
                  fs.lstat(path, (error, stat) => {
                    if (error) {
                      if (error.code === "ENOENT") {
                        error = new _util2.MissingPDFException(`Missing PDF "${path}".`);
                      }
                      this._storedError = error;
                      this._headersCapability.reject(error);
                      return;
                    }
                    this._contentLength = stat.size;
                    this._setReadableStream(fs.createReadStream(path));
                    this._headersCapability.resolve();
                  });
                }
              }
              class PDFNodeStreamFsRangeReader extends BaseRangeReader {
                constructor(stream, start, end) {
                  super(stream);
                  let path = decodeURIComponent(this._url.path);
                  if (fileUriRegex.test(this._url.href)) {
                    path = path.replace(/^\//, "");
                  }
                  this._setReadableStream(fs.createReadStream(path, {
                    start,
                    end: end - 1
                  }));
                }
              }
            },
            /* 23 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.createResponseStatusError = createResponseStatusError;
              exports2.extractFilenameFromHeader = extractFilenameFromHeader;
              exports2.validateRangeRequestCapabilities = validateRangeRequestCapabilities;
              exports2.validateResponseStatus = validateResponseStatus;
              var _util2 = __w_pdfjs_require__2(2);
              var _content_disposition = __w_pdfjs_require__2(24);
              var _display_utils2 = __w_pdfjs_require__2(1);
              function validateRangeRequestCapabilities({
                getResponseHeader,
                isHttp,
                rangeChunkSize,
                disableRange
              }) {
                (0, _util2.assert)(rangeChunkSize > 0, "Range chunk size must be larger than zero");
                const returnValues = {
                  allowRangeRequests: false,
                  suggestedLength: void 0
                };
                const length = parseInt(getResponseHeader("Content-Length"), 10);
                if (!Number.isInteger(length)) {
                  return returnValues;
                }
                returnValues.suggestedLength = length;
                if (length <= 2 * rangeChunkSize) {
                  return returnValues;
                }
                if (disableRange || !isHttp) {
                  return returnValues;
                }
                if (getResponseHeader("Accept-Ranges") !== "bytes") {
                  return returnValues;
                }
                const contentEncoding = getResponseHeader("Content-Encoding") || "identity";
                if (contentEncoding !== "identity") {
                  return returnValues;
                }
                returnValues.allowRangeRequests = true;
                return returnValues;
              }
              function extractFilenameFromHeader(getResponseHeader) {
                const contentDisposition = getResponseHeader("Content-Disposition");
                if (contentDisposition) {
                  let filename = (0, _content_disposition.getFilenameFromContentDispositionHeader)(contentDisposition);
                  if (filename.includes("%")) {
                    try {
                      filename = decodeURIComponent(filename);
                    } catch (ex) {
                    }
                  }
                  if ((0, _display_utils2.isPdfFile)(filename)) {
                    return filename;
                  }
                }
                return null;
              }
              function createResponseStatusError(status, url) {
                if (status === 404 || status === 0 && url.startsWith("file:")) {
                  return new _util2.MissingPDFException('Missing PDF "' + url + '".');
                }
                return new _util2.UnexpectedResponseException(`Unexpected server response (${status}) while retrieving PDF "${url}".`, status);
              }
              function validateResponseStatus(status) {
                return status === 200 || status === 206;
              }
            },
            /* 24 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.getFilenameFromContentDispositionHeader = getFilenameFromContentDispositionHeader;
              var _util2 = __w_pdfjs_require__2(2);
              function getFilenameFromContentDispositionHeader(contentDisposition) {
                let needsEncodingFixup = true;
                let tmp = toParamRegExp("filename\\*", "i").exec(contentDisposition);
                if (tmp) {
                  tmp = tmp[1];
                  let filename = rfc2616unquote(tmp);
                  filename = unescape(filename);
                  filename = rfc5987decode(filename);
                  filename = rfc2047decode(filename);
                  return fixupEncoding(filename);
                }
                tmp = rfc2231getparam(contentDisposition);
                if (tmp) {
                  const filename = rfc2047decode(tmp);
                  return fixupEncoding(filename);
                }
                tmp = toParamRegExp("filename", "i").exec(contentDisposition);
                if (tmp) {
                  tmp = tmp[1];
                  let filename = rfc2616unquote(tmp);
                  filename = rfc2047decode(filename);
                  return fixupEncoding(filename);
                }
                function toParamRegExp(attributePattern, flags) {
                  return new RegExp("(?:^|;)\\s*" + attributePattern + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', flags);
                }
                function textdecode(encoding, value) {
                  if (encoding) {
                    if (!/^[\x00-\xFF]+$/.test(value)) {
                      return value;
                    }
                    try {
                      const decoder = new TextDecoder(encoding, {
                        fatal: true
                      });
                      const buffer = (0, _util2.stringToBytes)(value);
                      value = decoder.decode(buffer);
                      needsEncodingFixup = false;
                    } catch (e2) {
                      if (/^utf-?8$/i.test(encoding)) {
                        try {
                          value = decodeURIComponent(escape(value));
                          needsEncodingFixup = false;
                        } catch (err) {
                        }
                      }
                    }
                  }
                  return value;
                }
                function fixupEncoding(value) {
                  if (needsEncodingFixup && /[\x80-\xff]/.test(value)) {
                    value = textdecode("utf-8", value);
                    if (needsEncodingFixup) {
                      value = textdecode("iso-8859-1", value);
                    }
                  }
                  return value;
                }
                function rfc2231getparam(contentDispositionStr) {
                  const matches = [];
                  let match;
                  const iter = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                  while ((match = iter.exec(contentDispositionStr)) !== null) {
                    let [, n2, quot, part] = match;
                    n2 = parseInt(n2, 10);
                    if (n2 in matches) {
                      if (n2 === 0) {
                        break;
                      }
                      continue;
                    }
                    matches[n2] = [quot, part];
                  }
                  const parts = [];
                  for (let n2 = 0; n2 < matches.length; ++n2) {
                    if (!(n2 in matches)) {
                      break;
                    }
                    let [quot, part] = matches[n2];
                    part = rfc2616unquote(part);
                    if (quot) {
                      part = unescape(part);
                      if (n2 === 0) {
                        part = rfc5987decode(part);
                      }
                    }
                    parts.push(part);
                  }
                  return parts.join("");
                }
                function rfc2616unquote(value) {
                  if (value.startsWith('"')) {
                    const parts = value.slice(1).split('\\"');
                    for (let i2 = 0; i2 < parts.length; ++i2) {
                      const quotindex = parts[i2].indexOf('"');
                      if (quotindex !== -1) {
                        parts[i2] = parts[i2].slice(0, quotindex);
                        parts.length = i2 + 1;
                      }
                      parts[i2] = parts[i2].replace(/\\(.)/g, "$1");
                    }
                    value = parts.join('"');
                  }
                  return value;
                }
                function rfc5987decode(extvalue) {
                  const encodingend = extvalue.indexOf("'");
                  if (encodingend === -1) {
                    return extvalue;
                  }
                  const encoding = extvalue.slice(0, encodingend);
                  const langvalue = extvalue.slice(encodingend + 1);
                  const value = langvalue.replace(/^[^']*'/, "");
                  return textdecode(encoding, value);
                }
                function rfc2047decode(value) {
                  if (!value.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(value)) {
                    return value;
                  }
                  return value.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(matches, charset, encoding, text) {
                    if (encoding === "q" || encoding === "Q") {
                      text = text.replace(/_/g, " ");
                      text = text.replace(/=([0-9a-fA-F]{2})/g, function(match, hex) {
                        return String.fromCharCode(parseInt(hex, 16));
                      });
                      return textdecode(charset, text);
                    }
                    try {
                      text = atob(text);
                    } catch (e2) {
                    }
                    return textdecode(charset, text);
                  });
                }
                return "";
              }
            },
            /* 25 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFNetworkStream = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _network_utils = __w_pdfjs_require__2(23);
              ;
              const OK_RESPONSE = 200;
              const PARTIAL_CONTENT_RESPONSE = 206;
              function getArrayBuffer(xhr) {
                const data = xhr.response;
                if (typeof data !== "string") {
                  return data;
                }
                const array = (0, _util2.stringToBytes)(data);
                return array.buffer;
              }
              class NetworkManager {
                constructor(url, args) {
                  this.url = url;
                  args = args || {};
                  this.isHttp = /^https?:/i.test(url);
                  this.httpHeaders = this.isHttp && args.httpHeaders || {};
                  this.withCredentials = args.withCredentials || false;
                  this.getXhr = args.getXhr || function NetworkManager_getXhr() {
                    return new XMLHttpRequest();
                  };
                  this.currXhrId = 0;
                  this.pendingRequests = /* @__PURE__ */ Object.create(null);
                }
                requestRange(begin, end, listeners) {
                  const args = {
                    begin,
                    end
                  };
                  for (const prop in listeners) {
                    args[prop] = listeners[prop];
                  }
                  return this.request(args);
                }
                requestFull(listeners) {
                  return this.request(listeners);
                }
                request(args) {
                  const xhr = this.getXhr();
                  const xhrId = this.currXhrId++;
                  const pendingRequest = this.pendingRequests[xhrId] = {
                    xhr
                  };
                  xhr.open("GET", this.url);
                  xhr.withCredentials = this.withCredentials;
                  for (const property in this.httpHeaders) {
                    const value = this.httpHeaders[property];
                    if (typeof value === "undefined") {
                      continue;
                    }
                    xhr.setRequestHeader(property, value);
                  }
                  if (this.isHttp && "begin" in args && "end" in args) {
                    xhr.setRequestHeader("Range", `bytes=${args.begin}-${args.end - 1}`);
                    pendingRequest.expectedStatus = PARTIAL_CONTENT_RESPONSE;
                  } else {
                    pendingRequest.expectedStatus = OK_RESPONSE;
                  }
                  xhr.responseType = "arraybuffer";
                  if (args.onError) {
                    xhr.onerror = function(evt) {
                      args.onError(xhr.status);
                    };
                  }
                  xhr.onreadystatechange = this.onStateChange.bind(this, xhrId);
                  xhr.onprogress = this.onProgress.bind(this, xhrId);
                  pendingRequest.onHeadersReceived = args.onHeadersReceived;
                  pendingRequest.onDone = args.onDone;
                  pendingRequest.onError = args.onError;
                  pendingRequest.onProgress = args.onProgress;
                  xhr.send(null);
                  return xhrId;
                }
                onProgress(xhrId, evt) {
                  const pendingRequest = this.pendingRequests[xhrId];
                  if (!pendingRequest) {
                    return;
                  }
                  if (pendingRequest.onProgress) {
                    pendingRequest.onProgress(evt);
                  }
                }
                onStateChange(xhrId, evt) {
                  const pendingRequest = this.pendingRequests[xhrId];
                  if (!pendingRequest) {
                    return;
                  }
                  const xhr = pendingRequest.xhr;
                  if (xhr.readyState >= 2 && pendingRequest.onHeadersReceived) {
                    pendingRequest.onHeadersReceived();
                    delete pendingRequest.onHeadersReceived;
                  }
                  if (xhr.readyState !== 4) {
                    return;
                  }
                  if (!(xhrId in this.pendingRequests)) {
                    return;
                  }
                  delete this.pendingRequests[xhrId];
                  if (xhr.status === 0 && this.isHttp) {
                    if (pendingRequest.onError) {
                      pendingRequest.onError(xhr.status);
                    }
                    return;
                  }
                  const xhrStatus = xhr.status || OK_RESPONSE;
                  const ok_response_on_range_request = xhrStatus === OK_RESPONSE && pendingRequest.expectedStatus === PARTIAL_CONTENT_RESPONSE;
                  if (!ok_response_on_range_request && xhrStatus !== pendingRequest.expectedStatus) {
                    if (pendingRequest.onError) {
                      pendingRequest.onError(xhr.status);
                    }
                    return;
                  }
                  const chunk = getArrayBuffer(xhr);
                  if (xhrStatus === PARTIAL_CONTENT_RESPONSE) {
                    const rangeHeader = xhr.getResponseHeader("Content-Range");
                    const matches = /bytes (\d+)-(\d+)\/(\d+)/.exec(rangeHeader);
                    pendingRequest.onDone({
                      begin: parseInt(matches[1], 10),
                      chunk
                    });
                  } else if (chunk) {
                    pendingRequest.onDone({
                      begin: 0,
                      chunk
                    });
                  } else if (pendingRequest.onError) {
                    pendingRequest.onError(xhr.status);
                  }
                }
                getRequestXhr(xhrId) {
                  return this.pendingRequests[xhrId].xhr;
                }
                isPendingRequest(xhrId) {
                  return xhrId in this.pendingRequests;
                }
                abortRequest(xhrId) {
                  const xhr = this.pendingRequests[xhrId].xhr;
                  delete this.pendingRequests[xhrId];
                  xhr.abort();
                }
              }
              class PDFNetworkStream {
                constructor(source) {
                  this._source = source;
                  this._manager = new NetworkManager(source.url, {
                    httpHeaders: source.httpHeaders,
                    withCredentials: source.withCredentials
                  });
                  this._rangeChunkSize = source.rangeChunkSize;
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                _onRangeRequestReaderClosed(reader) {
                  const i2 = this._rangeRequestReaders.indexOf(reader);
                  if (i2 >= 0) {
                    this._rangeRequestReaders.splice(i2, 1);
                  }
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
                  this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
                  return this._fullRequestReader;
                }
                getRangeReader(begin, end) {
                  const reader = new PDFNetworkStreamRangeRequestReader(this._manager, begin, end);
                  reader.onClosed = this._onRangeRequestReaderClosed.bind(this);
                  this._rangeRequestReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFNetworkStream = PDFNetworkStream;
              class PDFNetworkStreamFullRequestReader {
                constructor(manager, source) {
                  this._manager = manager;
                  const args = {
                    onHeadersReceived: this._onHeadersReceived.bind(this),
                    onDone: this._onDone.bind(this),
                    onError: this._onError.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._url = source.url;
                  this._fullRequestId = manager.requestFull(args);
                  this._headersReceivedCapability = (0, _util2.createPromiseCapability)();
                  this._disableRange = source.disableRange || false;
                  this._contentLength = source.length;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  this._isStreamingSupported = false;
                  this._isRangeSupported = false;
                  this._cachedChunks = [];
                  this._requests = [];
                  this._done = false;
                  this._storedError = void 0;
                  this._filename = null;
                  this.onProgress = null;
                }
                _onHeadersReceived() {
                  const fullRequestXhrId = this._fullRequestId;
                  const fullRequestXhr = this._manager.getRequestXhr(fullRequestXhrId);
                  const getResponseHeader = (name) => {
                    return fullRequestXhr.getResponseHeader(name);
                  };
                  const {
                    allowRangeRequests,
                    suggestedLength
                  } = (0, _network_utils.validateRangeRequestCapabilities)({
                    getResponseHeader,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                  });
                  if (allowRangeRequests) {
                    this._isRangeSupported = true;
                  }
                  this._contentLength = suggestedLength || this._contentLength;
                  this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                  if (this._isRangeSupported) {
                    this._manager.abortRequest(fullRequestXhrId);
                  }
                  this._headersReceivedCapability.resolve();
                }
                _onDone(args) {
                  if (args) {
                    if (this._requests.length > 0) {
                      const requestCapability = this._requests.shift();
                      requestCapability.resolve({
                        value: args.chunk,
                        done: false
                      });
                    } else {
                      this._cachedChunks.push(args.chunk);
                    }
                  }
                  this._done = true;
                  if (this._cachedChunks.length > 0) {
                    return;
                  }
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                }
                _onError(status) {
                  const url = this._url;
                  const exception = (0, _network_utils.createResponseStatusError)(status, url);
                  this._storedError = exception;
                  this._headersReceivedCapability.reject(exception);
                  for (const requestCapability of this._requests) {
                    requestCapability.reject(exception);
                  }
                  this._requests.length = 0;
                  this._cachedChunks.length = 0;
                }
                _onProgress(data) {
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: data.loaded,
                      total: data.lengthComputable ? data.total : this._contentLength
                    });
                  }
                }
                get filename() {
                  return this._filename;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get headersReady() {
                  return this._headersReceivedCapability.promise;
                }
                async read() {
                  if (this._storedError) {
                    throw this._storedError;
                  }
                  if (this._cachedChunks.length > 0) {
                    const chunk = this._cachedChunks.shift();
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  this._headersReceivedCapability.reject(reason);
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  if (this._manager.isPendingRequest(this._fullRequestId)) {
                    this._manager.abortRequest(this._fullRequestId);
                  }
                  this._fullRequestReader = null;
                }
              }
              class PDFNetworkStreamRangeRequestReader {
                constructor(manager, begin, end) {
                  this._manager = manager;
                  const args = {
                    onDone: this._onDone.bind(this),
                    onProgress: this._onProgress.bind(this)
                  };
                  this._requestId = manager.requestRange(begin, end, args);
                  this._requests = [];
                  this._queuedChunk = null;
                  this._done = false;
                  this.onProgress = null;
                  this.onClosed = null;
                }
                _close() {
                  if (this.onClosed) {
                    this.onClosed(this);
                  }
                }
                _onDone(data) {
                  const chunk = data.chunk;
                  if (this._requests.length > 0) {
                    const requestCapability = this._requests.shift();
                    requestCapability.resolve({
                      value: chunk,
                      done: false
                    });
                  } else {
                    this._queuedChunk = chunk;
                  }
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  this._close();
                }
                _onProgress(evt) {
                  if (!this.isStreamingSupported && this.onProgress) {
                    this.onProgress({
                      loaded: evt.loaded
                    });
                  }
                }
                get isStreamingSupported() {
                  return false;
                }
                async read() {
                  if (this._queuedChunk !== null) {
                    const chunk = this._queuedChunk;
                    this._queuedChunk = null;
                    return {
                      value: chunk,
                      done: false
                    };
                  }
                  if (this._done) {
                    return {
                      value: void 0,
                      done: true
                    };
                  }
                  const requestCapability = (0, _util2.createPromiseCapability)();
                  this._requests.push(requestCapability);
                  return requestCapability.promise;
                }
                cancel(reason) {
                  this._done = true;
                  for (const requestCapability of this._requests) {
                    requestCapability.resolve({
                      value: void 0,
                      done: true
                    });
                  }
                  this._requests.length = 0;
                  if (this._manager.isPendingRequest(this._requestId)) {
                    this._manager.abortRequest(this._requestId);
                  }
                  this._close();
                }
              }
            },
            /* 26 */
            /***/
            (__unused_webpack_module2, exports2, __w_pdfjs_require__2) => {
              Object.defineProperty(exports2, "__esModule", {
                value: true
              });
              exports2.PDFFetchStream = void 0;
              var _util2 = __w_pdfjs_require__2(2);
              var _network_utils = __w_pdfjs_require__2(23);
              ;
              function createFetchOptions(headers, withCredentials, abortController) {
                return {
                  method: "GET",
                  headers,
                  signal: abortController == null ? void 0 : abortController.signal,
                  mode: "cors",
                  credentials: withCredentials ? "include" : "same-origin",
                  redirect: "follow"
                };
              }
              function createHeaders(httpHeaders) {
                const headers = new Headers();
                for (const property in httpHeaders) {
                  const value = httpHeaders[property];
                  if (typeof value === "undefined") {
                    continue;
                  }
                  headers.append(property, value);
                }
                return headers;
              }
              class PDFFetchStream {
                constructor(source) {
                  this.source = source;
                  this.isHttp = /^https?:/i.test(source.url);
                  this.httpHeaders = this.isHttp && source.httpHeaders || {};
                  this._fullRequestReader = null;
                  this._rangeRequestReaders = [];
                }
                get _progressiveDataLength() {
                  var _a;
                  return ((_a = this._fullRequestReader) == null ? void 0 : _a._loaded) ?? 0;
                }
                getFullReader() {
                  (0, _util2.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
                  this._fullRequestReader = new PDFFetchStreamReader(this);
                  return this._fullRequestReader;
                }
                getRangeReader(begin, end) {
                  if (end <= this._progressiveDataLength) {
                    return null;
                  }
                  const reader = new PDFFetchStreamRangeReader(this, begin, end);
                  this._rangeRequestReaders.push(reader);
                  return reader;
                }
                cancelAllRequests(reason) {
                  if (this._fullRequestReader) {
                    this._fullRequestReader.cancel(reason);
                  }
                  for (const reader of this._rangeRequestReaders.slice(0)) {
                    reader.cancel(reason);
                  }
                }
              }
              exports2.PDFFetchStream = PDFFetchStream;
              class PDFFetchStreamReader {
                constructor(stream) {
                  this._stream = stream;
                  this._reader = null;
                  this._loaded = 0;
                  this._filename = null;
                  const source = stream.source;
                  this._withCredentials = source.withCredentials || false;
                  this._contentLength = source.length;
                  this._headersCapability = (0, _util2.createPromiseCapability)();
                  this._disableRange = source.disableRange || false;
                  this._rangeChunkSize = source.rangeChunkSize;
                  if (!this._rangeChunkSize && !this._disableRange) {
                    this._disableRange = true;
                  }
                  if (typeof AbortController !== "undefined") {
                    this._abortController = new AbortController();
                  }
                  this._isStreamingSupported = !source.disableStream;
                  this._isRangeSupported = !source.disableRange;
                  this._headers = createHeaders(this._stream.httpHeaders);
                  const url = source.url;
                  fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                    if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                      throw (0, _network_utils.createResponseStatusError)(response.status, url);
                    }
                    this._reader = response.body.getReader();
                    this._headersCapability.resolve();
                    const getResponseHeader = (name) => {
                      return response.headers.get(name);
                    };
                    const {
                      allowRangeRequests,
                      suggestedLength
                    } = (0, _network_utils.validateRangeRequestCapabilities)({
                      getResponseHeader,
                      isHttp: this._stream.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange
                    });
                    this._isRangeSupported = allowRangeRequests;
                    this._contentLength = suggestedLength || this._contentLength;
                    this._filename = (0, _network_utils.extractFilenameFromHeader)(getResponseHeader);
                    if (!this._isStreamingSupported && this._isRangeSupported) {
                      this.cancel(new _util2.AbortException("Streaming is disabled."));
                    }
                  }).catch(this._headersCapability.reject);
                  this.onProgress = null;
                }
                get headersReady() {
                  return this._headersCapability.promise;
                }
                get filename() {
                  return this._filename;
                }
                get contentLength() {
                  return this._contentLength;
                }
                get isRangeSupported() {
                  return this._isRangeSupported;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._headersCapability.promise;
                  const {
                    value,
                    done
                  } = await this._reader.read();
                  if (done) {
                    return {
                      value,
                      done
                    };
                  }
                  this._loaded += value.byteLength;
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded,
                      total: this._contentLength
                    });
                  }
                  const buffer = new Uint8Array(value).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (this._reader) {
                    this._reader.cancel(reason);
                  }
                  if (this._abortController) {
                    this._abortController.abort();
                  }
                }
              }
              class PDFFetchStreamRangeReader {
                constructor(stream, begin, end) {
                  this._stream = stream;
                  this._reader = null;
                  this._loaded = 0;
                  const source = stream.source;
                  this._withCredentials = source.withCredentials || false;
                  this._readCapability = (0, _util2.createPromiseCapability)();
                  this._isStreamingSupported = !source.disableStream;
                  if (typeof AbortController !== "undefined") {
                    this._abortController = new AbortController();
                  }
                  this._headers = createHeaders(this._stream.httpHeaders);
                  this._headers.append("Range", `bytes=${begin}-${end - 1}`);
                  const url = source.url;
                  fetch(url, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((response) => {
                    if (!(0, _network_utils.validateResponseStatus)(response.status)) {
                      throw (0, _network_utils.createResponseStatusError)(response.status, url);
                    }
                    this._readCapability.resolve();
                    this._reader = response.body.getReader();
                  }).catch((reason) => {
                    if ((reason == null ? void 0 : reason.name) === "AbortError") {
                      return;
                    }
                    throw reason;
                  });
                  this.onProgress = null;
                }
                get isStreamingSupported() {
                  return this._isStreamingSupported;
                }
                async read() {
                  await this._readCapability.promise;
                  const {
                    value,
                    done
                  } = await this._reader.read();
                  if (done) {
                    return {
                      value,
                      done
                    };
                  }
                  this._loaded += value.byteLength;
                  if (this.onProgress) {
                    this.onProgress({
                      loaded: this._loaded
                    });
                  }
                  const buffer = new Uint8Array(value).buffer;
                  return {
                    value: buffer,
                    done: false
                  };
                }
                cancel(reason) {
                  if (this._reader) {
                    this._reader.cancel(reason);
                  }
                  if (this._abortController) {
                    this._abortController.abort();
                  }
                }
              }
            }
            /******/
          ];
          var __webpack_module_cache__ = {};
          function __w_pdfjs_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId](module2, module2.exports, __w_pdfjs_require__);
            return module2.exports;
          }
          var __webpack_exports__ = {};
          (() => {
            var exports2 = __webpack_exports__;
            Object.defineProperty(exports2, "__esModule", {
              value: true
            });
            Object.defineProperty(exports2, "addLinkAttributes", {
              enumerable: true,
              get: function() {
                return _display_utils2.addLinkAttributes;
              }
            });
            Object.defineProperty(exports2, "getFilenameFromUrl", {
              enumerable: true,
              get: function() {
                return _display_utils2.getFilenameFromUrl;
              }
            });
            Object.defineProperty(exports2, "getPdfFilenameFromUrl", {
              enumerable: true,
              get: function() {
                return _display_utils2.getPdfFilenameFromUrl;
              }
            });
            Object.defineProperty(exports2, "isPdfFile", {
              enumerable: true,
              get: function() {
                return _display_utils2.isPdfFile;
              }
            });
            Object.defineProperty(exports2, "LinkTarget", {
              enumerable: true,
              get: function() {
                return _display_utils2.LinkTarget;
              }
            });
            Object.defineProperty(exports2, "loadScript", {
              enumerable: true,
              get: function() {
                return _display_utils2.loadScript;
              }
            });
            Object.defineProperty(exports2, "PDFDateString", {
              enumerable: true,
              get: function() {
                return _display_utils2.PDFDateString;
              }
            });
            Object.defineProperty(exports2, "RenderingCancelledException", {
              enumerable: true,
              get: function() {
                return _display_utils2.RenderingCancelledException;
              }
            });
            Object.defineProperty(exports2, "build", {
              enumerable: true,
              get: function() {
                return _api.build;
              }
            });
            Object.defineProperty(exports2, "getDocument", {
              enumerable: true,
              get: function() {
                return _api.getDocument;
              }
            });
            Object.defineProperty(exports2, "LoopbackPort", {
              enumerable: true,
              get: function() {
                return _api.LoopbackPort;
              }
            });
            Object.defineProperty(exports2, "PDFDataRangeTransport", {
              enumerable: true,
              get: function() {
                return _api.PDFDataRangeTransport;
              }
            });
            Object.defineProperty(exports2, "PDFWorker", {
              enumerable: true,
              get: function() {
                return _api.PDFWorker;
              }
            });
            Object.defineProperty(exports2, "version", {
              enumerable: true,
              get: function() {
                return _api.version;
              }
            });
            Object.defineProperty(exports2, "CMapCompressionType", {
              enumerable: true,
              get: function() {
                return _util2.CMapCompressionType;
              }
            });
            Object.defineProperty(exports2, "createObjectURL", {
              enumerable: true,
              get: function() {
                return _util2.createObjectURL;
              }
            });
            Object.defineProperty(exports2, "createPromiseCapability", {
              enumerable: true,
              get: function() {
                return _util2.createPromiseCapability;
              }
            });
            Object.defineProperty(exports2, "createValidAbsoluteUrl", {
              enumerable: true,
              get: function() {
                return _util2.createValidAbsoluteUrl;
              }
            });
            Object.defineProperty(exports2, "InvalidPDFException", {
              enumerable: true,
              get: function() {
                return _util2.InvalidPDFException;
              }
            });
            Object.defineProperty(exports2, "MissingPDFException", {
              enumerable: true,
              get: function() {
                return _util2.MissingPDFException;
              }
            });
            Object.defineProperty(exports2, "OPS", {
              enumerable: true,
              get: function() {
                return _util2.OPS;
              }
            });
            Object.defineProperty(exports2, "PasswordResponses", {
              enumerable: true,
              get: function() {
                return _util2.PasswordResponses;
              }
            });
            Object.defineProperty(exports2, "PermissionFlag", {
              enumerable: true,
              get: function() {
                return _util2.PermissionFlag;
              }
            });
            Object.defineProperty(exports2, "removeNullCharacters", {
              enumerable: true,
              get: function() {
                return _util2.removeNullCharacters;
              }
            });
            Object.defineProperty(exports2, "shadow", {
              enumerable: true,
              get: function() {
                return _util2.shadow;
              }
            });
            Object.defineProperty(exports2, "UnexpectedResponseException", {
              enumerable: true,
              get: function() {
                return _util2.UnexpectedResponseException;
              }
            });
            Object.defineProperty(exports2, "UNSUPPORTED_FEATURES", {
              enumerable: true,
              get: function() {
                return _util2.UNSUPPORTED_FEATURES;
              }
            });
            Object.defineProperty(exports2, "Util", {
              enumerable: true,
              get: function() {
                return _util2.Util;
              }
            });
            Object.defineProperty(exports2, "VerbosityLevel", {
              enumerable: true,
              get: function() {
                return _util2.VerbosityLevel;
              }
            });
            Object.defineProperty(exports2, "AnnotationLayer", {
              enumerable: true,
              get: function() {
                return _annotation_layer.AnnotationLayer;
              }
            });
            Object.defineProperty(exports2, "apiCompatibilityParams", {
              enumerable: true,
              get: function() {
                return _api_compatibility2.apiCompatibilityParams;
              }
            });
            Object.defineProperty(exports2, "GlobalWorkerOptions", {
              enumerable: true,
              get: function() {
                return _worker_options2.GlobalWorkerOptions;
              }
            });
            Object.defineProperty(exports2, "renderTextLayer", {
              enumerable: true,
              get: function() {
                return _text_layer.renderTextLayer;
              }
            });
            Object.defineProperty(exports2, "SVGGraphics", {
              enumerable: true,
              get: function() {
                return _svg.SVGGraphics;
              }
            });
            Object.defineProperty(exports2, "XfaLayer", {
              enumerable: true,
              get: function() {
                return _xfa_layer.XfaLayer;
              }
            });
            var _display_utils2 = __w_pdfjs_require__(1);
            var _api = __w_pdfjs_require__(5);
            var _util2 = __w_pdfjs_require__(2);
            var _annotation_layer = __w_pdfjs_require__(17);
            var _api_compatibility2 = __w_pdfjs_require__(9);
            var _worker_options2 = __w_pdfjs_require__(12);
            var _text_layer = __w_pdfjs_require__(19);
            var _svg = __w_pdfjs_require__(20);
            var _xfa_layer = __w_pdfjs_require__(21);
            const pdfjsVersion = "2.9.359";
            const pdfjsBuild = "e667c8cbc";
            {
              const {
                isNodeJS
              } = __w_pdfjs_require__(4);
              if (isNodeJS) {
                const PDFNodeStream = __w_pdfjs_require__(22).PDFNodeStream;
                (0, _api.setPDFNetworkStreamFactory)((params) => {
                  return new PDFNodeStream(params);
                });
              } else {
                const PDFNetworkStream = __w_pdfjs_require__(25).PDFNetworkStream;
                let PDFFetchStream;
                if ((0, _display_utils2.isFetchSupported)()) {
                  PDFFetchStream = __w_pdfjs_require__(26).PDFFetchStream;
                }
                (0, _api.setPDFNetworkStreamFactory)((params) => {
                  if (PDFFetchStream && (0, _display_utils2.isValidFetchUrl)(params.url)) {
                    return new PDFFetchStream(params);
                  }
                  return new PDFNetworkStream(params);
                });
              }
            }
          })();
          return __webpack_exports__;
        })()
      );
    });
  }
});

// node_modules/srpv-js/dist/index.modern.js
var import_react = __toESM(require_react());
var import_pdfjs_dist = __toESM(require_pdf());
var a = ({ pdf: n2, page: r2, scale: o2 }) => {
  (0, import_react.useEffect)(() => {
    a2({ pageNum: r2, pdf: n2, scale: o2 });
  }, [r2, o2]);
  const a2 = ({ pageNum: e2, pdf: t2, scale: n3 }) => {
    const r3 = document.getElementById("page-" + e2), o3 = document.createElement("canvas");
    o3.className = "shadowDocument", o3.style.display = "none", o3.addEventListener("mousemove", (e3) => {
      ((e4, t3) => {
        if (1 === t3.buttons) {
          e4.style.cursor = "grabbing";
          const n4 = document.querySelector(".ant-drawer-body");
          n4.scrollLeft += -t3.movementX, n4.scrollTop += -t3.movementY;
        } else e4.style.cursor = "default";
      })(o3, e3);
    }), t2 && t2.getPage(e2).then(function(t3) {
      const a3 = t3.getViewport({ scale: n3 }), i2 = o3;
      i2.width = Math.floor(a3.width), i2.height = Math.floor(a3.height);
      const l2 = { canvasContext: i2.getContext("2d"), viewport: a3 };
      r3.children.length < 2 && (r3.appendChild(o3), t3.render(l2).promise.then(function() {
        o3.style.display = "block", r3.children.length > 1 && r3.removeChild(document.querySelector("#page-" + e2).children[0]);
      }));
    });
  };
  return import_react.default.createElement("div", { id: "page-" + r2, className: "pdfViewer" });
};
var i;
var l;
var s = (function(e2, t2) {
  var n2;
  window, n2 = function() {
    return function(e3) {
      var t3 = {};
      function n3(r2) {
        if (t3[r2]) return t3[r2].exports;
        var o2 = t3[r2] = { i: r2, l: false, exports: {} };
        return e3[r2].call(o2.exports, o2, o2.exports, n3), o2.l = true, o2.exports;
      }
      return n3.m = e3, n3.c = t3, n3.d = function(e4, t4, r2) {
        n3.o(e4, t4) || Object.defineProperty(e4, t4, { enumerable: true, get: r2 });
      }, n3.r = function(e4) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
      }, n3.t = function(e4, t4) {
        if (1 & t4 && (e4 = n3(e4)), 8 & t4) return e4;
        if (4 & t4 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
        var r2 = /* @__PURE__ */ Object.create(null);
        if (n3.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: e4 }), 2 & t4 && "string" != typeof e4) for (var o2 in e4) n3.d(r2, o2, (function(t5) {
          return e4[t5];
        }).bind(null, o2));
        return r2;
      }, n3.n = function(e4) {
        var t4 = e4 && e4.__esModule ? function() {
          return e4.default;
        } : function() {
          return e4;
        };
        return n3.d(t4, "a", t4), t4;
      }, n3.o = function(e4, t4) {
        return Object.prototype.hasOwnProperty.call(e4, t4);
      }, n3.p = "", n3(n3.s = 0);
    }({ "./src/index.js": (
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3), n3(
          /*! ./sass/index.scss */
          "./src/sass/index.scss"
        );
        var r2 = n3(
          /*! ./js/init */
          "./src/js/init.js"
        ).default.init;
        "undefined" != typeof window && (window.printJS = r2), t3.default = r2;
      }
    ), "./src/js/browser.js": (
      /*!***************************!*\
        !*** ./src/js/browser.js ***!
        \***************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = { isFirefox: function() {
          return "undefined" != typeof InstallTrigger;
        }, isIE: function() {
          return -1 !== navigator.userAgent.indexOf("MSIE") || !!document.documentMode;
        }, isEdge: function() {
          return !r2.isIE() && !!window.StyleMedia;
        }, isChrome: function() {
          var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
          return !!e4.chrome;
        }, isSafari: function() {
          return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || -1 !== navigator.userAgent.toLowerCase().indexOf("safari");
        }, isIOSChrome: function() {
          return -1 !== navigator.userAgent.toLowerCase().indexOf("crios");
        } };
        t3.default = r2;
      }
    ), "./src/js/functions.js": (
      /*!*****************************!*\
        !*** ./src/js/functions.js ***!
        \*****************************/
      /*! exports provided: addWrapper, capitalizePrint, collectStyles, addHeader, cleanUp, isRawHTML */
      function(e3, t3, n3) {
        n3.r(t3), n3.d(t3, "addWrapper", function() {
          return i2;
        }), n3.d(t3, "capitalizePrint", function() {
          return l2;
        }), n3.d(t3, "collectStyles", function() {
          return s2;
        }), n3.d(t3, "addHeader", function() {
          return d2;
        }), n3.d(t3, "cleanUp", function() {
          return u2;
        }), n3.d(t3, "isRawHTML", function() {
          return p2;
        });
        var r2 = n3(
          /*! ./modal */
          "./src/js/modal.js"
        ), o2 = n3(
          /*! ./browser */
          "./src/js/browser.js"
        );
        function a2(e4) {
          return (a2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          })(e4);
        }
        function i2(e4, t4) {
          return '<div style="font-family:' + t4.font + " !important; font-size: " + t4.font_size + ' !important; width:100%;">' + e4 + "</div>";
        }
        function l2(e4) {
          return e4.charAt(0).toUpperCase() + e4.slice(1);
        }
        function s2(e4, t4) {
          for (var n4 = "", r3 = (document.defaultView || window).getComputedStyle(e4, ""), o3 = 0; o3 < r3.length; o3++) (-1 !== t4.targetStyles.indexOf("*") || -1 !== t4.targetStyle.indexOf(r3[o3]) || c2(t4.targetStyles, r3[o3])) && r3.getPropertyValue(r3[o3]) && (n4 += r3[o3] + ":" + r3.getPropertyValue(r3[o3]) + ";");
          return n4 + "max-width: " + t4.maxWidth + "px !important; font-size: " + t4.font_size + " !important;";
        }
        function c2(e4, t4) {
          for (var n4 = 0; n4 < e4.length; n4++) if ("object" === a2(t4) && -1 !== t4.indexOf(e4[n4])) return true;
          return false;
        }
        function d2(e4, t4) {
          var n4 = document.createElement("div");
          if (p2(t4.header)) n4.innerHTML = t4.header;
          else {
            var r3 = document.createElement("h1"), o3 = document.createTextNode(t4.header);
            r3.appendChild(o3), r3.setAttribute("style", t4.headerStyle), n4.appendChild(r3);
          }
          e4.insertBefore(n4, e4.childNodes[0]);
        }
        function u2(e4) {
          e4.showModal && r2.default.close(), e4.onLoadingEnd && e4.onLoadingEnd(), (e4.showModal || e4.onLoadingStart) && window.URL.revokeObjectURL(e4.printable);
          var t4 = "mouseover";
          (o2.default.isChrome() || o2.default.isFirefox()) && (t4 = "focus"), window.addEventListener(t4, function n4() {
            window.removeEventListener(t4, n4), e4.onPrintDialogClose();
            var r3 = document.getElementById(e4.frameId);
            r3 && r3.remove();
          });
        }
        function p2(e4) {
          return new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e4);
        }
      }
    ), "./src/js/html.js": (
      /*!************************!*\
        !*** ./src/js/html.js ***!
        \************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./functions */
          "./src/js/functions.js"
        ), o2 = n3(
          /*! ./print */
          "./src/js/print.js"
        );
        function a2(e4) {
          return (a2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          })(e4);
        }
        t3.default = { print: function(e4, t4) {
          var n4, i2 = "object" === a2(n4 = e4.printable) && n4 && (n4 instanceof HTMLElement || 1 === n4.nodeType) ? e4.printable : document.getElementById(e4.printable);
          i2 ? (e4.printableElement = function e5(t5, n5) {
            for (var o3 = t5.cloneNode(), a3 = Array.prototype.slice.call(t5.childNodes), i3 = 0; i3 < a3.length; i3++) if (-1 === n5.ignoreElements.indexOf(a3[i3].id)) {
              var l2 = e5(a3[i3], n5);
              o3.appendChild(l2);
            }
            switch (n5.scanStyles && 1 === t5.nodeType && o3.setAttribute("style", Object(r2.collectStyles)(t5, n5)), t5.tagName) {
              case "SELECT":
                o3.value = t5.value;
                break;
              case "CANVAS":
                o3.getContext("2d").drawImage(t5, 0, 0);
            }
            return o3;
          }(i2, e4), e4.header && Object(r2.addHeader)(e4.printableElement, e4), o2.default.send(e4, t4)) : window.console.error("Invalid HTML element id: " + e4.printable);
        } };
      }
    ), "./src/js/image.js": (
      /*!*************************!*\
        !*** ./src/js/image.js ***!
        \*************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./functions */
          "./src/js/functions.js"
        ), o2 = n3(
          /*! ./print */
          "./src/js/print.js"
        ), a2 = n3(
          /*! ./browser */
          "./src/js/browser.js"
        );
        t3.default = { print: function(e4, t4) {
          e4.printable.constructor !== Array && (e4.printable = [e4.printable]), e4.printableElement = document.createElement("div"), e4.printable.forEach(function(t5) {
            var n4 = document.createElement("img");
            n4.setAttribute("style", e4.imageStyle), n4.src = t5, a2.default.isFirefox() && (n4.src = n4.src);
            var r3 = document.createElement("div");
            r3.appendChild(n4), e4.printableElement.appendChild(r3);
          }), e4.header && Object(r2.addHeader)(e4.printableElement, e4), o2.default.send(e4, t4);
        } };
      }
    ), "./src/js/init.js": (
      /*!************************!*\
        !*** ./src/js/init.js ***!
        \************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./browser */
          "./src/js/browser.js"
        ), o2 = n3(
          /*! ./modal */
          "./src/js/modal.js"
        ), a2 = n3(
          /*! ./pdf */
          "./src/js/pdf.js"
        ), i2 = n3(
          /*! ./html */
          "./src/js/html.js"
        ), l2 = n3(
          /*! ./raw-html */
          "./src/js/raw-html.js"
        ), s2 = n3(
          /*! ./image */
          "./src/js/image.js"
        ), c2 = n3(
          /*! ./json */
          "./src/js/json.js"
        );
        function d2(e4) {
          return (d2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          })(e4);
        }
        var u2 = ["pdf", "html", "image", "json", "raw-html"];
        t3.default = { init: function() {
          var e4 = { printable: null, fallbackPrintable: null, type: "pdf", header: null, headerStyle: "font-weight: 300;", maxWidth: 800, properties: null, gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;", gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;", showModal: false, onError: function(e5) {
            throw e5;
          }, onLoadingStart: null, onLoadingEnd: null, onPrintDialogClose: function() {
          }, onIncompatibleBrowser: function() {
          }, modalMessage: "Retrieving Document...", frameId: "printJS", printableElement: null, documentTitle: "Document", targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"], targetStyles: ["border", "box", "break", "text-decoration"], ignoreElements: [], repeatTableHeader: true, css: null, style: null, scanStyles: true, base64: false, onPdfOpen: null, font: "TimesNewRoman", font_size: "12pt", honorMarginPadding: true, honorColor: false, imageStyle: "max-width: 100%;" }, t4 = arguments[0];
          if (void 0 === t4) throw new Error("printJS expects at least 1 attribute.");
          switch (d2(t4)) {
            case "string":
              e4.printable = encodeURI(t4), e4.fallbackPrintable = e4.printable, e4.type = arguments[1] || e4.type;
              break;
            case "object":
              for (var n4 in e4.printable = t4.printable, e4.fallbackPrintable = void 0 !== t4.fallbackPrintable ? t4.fallbackPrintable : e4.printable, e4.fallbackPrintable = e4.base64 ? "data:application/pdf;base64,".concat(e4.fallbackPrintable) : e4.fallbackPrintable, e4) "printable" !== n4 && "fallbackPrintable" !== n4 && (e4[n4] = void 0 !== t4[n4] ? t4[n4] : e4[n4]);
              break;
            default:
              throw new Error('Unexpected argument type! Expected "string" or "object", got ' + d2(t4));
          }
          if (!e4.printable) throw new Error("Missing printable information.");
          if (!e4.type || "string" != typeof e4.type || -1 === u2.indexOf(e4.type.toLowerCase())) throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
          e4.showModal && o2.default.show(e4), e4.onLoadingStart && e4.onLoadingStart();
          var p2 = document.getElementById(e4.frameId);
          p2 && p2.parentNode.removeChild(p2);
          var f2 = document.createElement("iframe");
          switch (r2.default.isFirefox() ? f2.setAttribute("style", "width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0") : f2.setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute; border: 0"), f2.setAttribute("id", e4.frameId), "pdf" !== e4.type && (f2.srcdoc = "<html><head><title>" + e4.documentTitle + "</title>", e4.css && (Array.isArray(e4.css) || (e4.css = [e4.css]), e4.css.forEach(function(e5) {
            f2.srcdoc += '<link rel="stylesheet" href="' + e5 + '">';
          })), f2.srcdoc += "</head><body></body></html>"), e4.type) {
            case "pdf":
              if (r2.default.isIE()) try {
                console.info("Print.js doesn't support PDF printing in Internet Explorer.");
                var m2 = window.open(e4.fallbackPrintable, "_blank");
                m2.focus(), e4.onIncompatibleBrowser();
              } catch (t5) {
                e4.onError(t5);
              } finally {
                e4.showModal && o2.default.close(), e4.onLoadingEnd && e4.onLoadingEnd();
              }
              else a2.default.print(e4, f2);
              break;
            case "image":
              s2.default.print(e4, f2);
              break;
            case "html":
              i2.default.print(e4, f2);
              break;
            case "raw-html":
              l2.default.print(e4, f2);
              break;
            case "json":
              c2.default.print(e4, f2);
          }
        } };
      }
    ), "./src/js/json.js": (
      /*!************************!*\
        !*** ./src/js/json.js ***!
        \************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./functions */
          "./src/js/functions.js"
        ), o2 = n3(
          /*! ./print */
          "./src/js/print.js"
        );
        function a2(e4) {
          return (a2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e5) {
            return typeof e5;
          } : function(e5) {
            return e5 && "function" == typeof Symbol && e5.constructor === Symbol && e5 !== Symbol.prototype ? "symbol" : typeof e5;
          })(e4);
        }
        t3.default = { print: function(e4, t4) {
          if ("object" !== a2(e4.printable)) throw new Error("Invalid javascript data object (JSON).");
          if ("boolean" != typeof e4.repeatTableHeader) throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
          if (!e4.properties || !Array.isArray(e4.properties)) throw new Error("Invalid properties array for your JSON data.");
          e4.properties = e4.properties.map(function(t5) {
            return { field: "object" === a2(t5) ? t5.field : t5, displayName: "object" === a2(t5) ? t5.displayName : t5, columnSize: "object" === a2(t5) && t5.columnSize ? t5.columnSize + ";" : 100 / e4.properties.length + "%;" };
          }), e4.printableElement = document.createElement("div"), e4.header && Object(r2.addHeader)(e4.printableElement, e4), e4.printableElement.innerHTML += function(e5) {
            var t5 = e5.printable, n4 = e5.properties, o3 = '<table style="border-collapse: collapse; width: 100%;">';
            e5.repeatTableHeader && (o3 += "<thead>"), o3 += "<tr>";
            for (var a3 = 0; a3 < n4.length; a3++) o3 += '<th style="width:' + n4[a3].columnSize + ";" + e5.gridHeaderStyle + '">' + Object(r2.capitalizePrint)(n4[a3].displayName) + "</th>";
            o3 += "</tr>", e5.repeatTableHeader && (o3 += "</thead>"), o3 += "<tbody>";
            for (var i2 = 0; i2 < t5.length; i2++) {
              o3 += "<tr>";
              for (var l2 = 0; l2 < n4.length; l2++) {
                var s2 = t5[i2], c2 = n4[l2].field.split(".");
                if (c2.length > 1) for (var d2 = 0; d2 < c2.length; d2++) s2 = s2[c2[d2]];
                else s2 = s2[n4[l2].field];
                o3 += '<td style="width:' + n4[l2].columnSize + e5.gridStyle + '">' + s2 + "</td>";
              }
              o3 += "</tr>";
            }
            return o3 + "</tbody></table>";
          }(e4), o2.default.send(e4, t4);
        } };
      }
    ), "./src/js/modal.js": (
      /*!*************************!*\
        !*** ./src/js/modal.js ***!
        \*************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = { show: function(e4) {
          var t4 = document.createElement("div");
          t4.setAttribute("style", "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"), t4.setAttribute("id", "printJS-Modal");
          var n4 = document.createElement("div");
          n4.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
          var o2 = document.createElement("div");
          o2.setAttribute("class", "printClose"), o2.setAttribute("id", "printClose"), n4.appendChild(o2);
          var a2 = document.createElement("span");
          a2.setAttribute("class", "printSpinner"), n4.appendChild(a2);
          var i2 = document.createTextNode(e4.modalMessage);
          n4.appendChild(i2), t4.appendChild(n4), document.getElementsByTagName("body")[0].appendChild(t4), document.getElementById("printClose").addEventListener("click", function() {
            r2.close();
          });
        }, close: function() {
          var e4 = document.getElementById("printJS-Modal");
          e4 && e4.parentNode.removeChild(e4);
        } };
        t3.default = r2;
      }
    ), "./src/js/pdf.js": (
      /*!***********************!*\
        !*** ./src/js/pdf.js ***!
        \***********************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./print */
          "./src/js/print.js"
        ), o2 = n3(
          /*! ./functions */
          "./src/js/functions.js"
        );
        function a2(e4, t4, n4) {
          var o3 = new window.Blob([n4], { type: "application/pdf" });
          o3 = window.URL.createObjectURL(o3), t4.setAttribute("src", o3), r2.default.send(e4, t4);
        }
        t3.default = { print: function(e4, t4) {
          if (e4.base64) {
            var n4 = Uint8Array.from(atob(e4.printable), function(e5) {
              return e5.charCodeAt(0);
            });
            a2(e4, t4, n4);
          } else {
            e4.printable = /^(blob|http|\/\/)/i.test(e4.printable) ? e4.printable : window.location.origin + ("/" !== e4.printable.charAt(0) ? "/" + e4.printable : e4.printable);
            var r3 = new window.XMLHttpRequest();
            r3.responseType = "arraybuffer", r3.addEventListener("error", function() {
              Object(o2.cleanUp)(e4), e4.onError(r3.statusText, r3);
            }), r3.addEventListener("load", function() {
              if (-1 === [200, 201].indexOf(r3.status)) return Object(o2.cleanUp)(e4), void e4.onError(r3.statusText, r3);
              a2(e4, t4, r3.response);
            }), r3.open("GET", e4.printable, true), r3.send();
          }
        } };
      }
    ), "./src/js/print.js": (
      /*!*************************!*\
        !*** ./src/js/print.js ***!
        \*************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./browser */
          "./src/js/browser.js"
        ), o2 = n3(
          /*! ./functions */
          "./src/js/functions.js"
        );
        function a2(e4, t4) {
          try {
            if (e4.focus(), r2.default.isEdge() || r2.default.isIE()) try {
              e4.contentWindow.document.execCommand("print", false, null);
            } catch (t5) {
              e4.contentWindow.print();
            }
            else e4.contentWindow.print();
          } catch (e5) {
            t4.onError(e5);
          } finally {
            r2.default.isFirefox() && (e4.style.visibility = "hidden", e4.style.left = "-1px"), Object(o2.cleanUp)(t4);
          }
        }
        t3.default = { send: function(e4, t4) {
          document.getElementsByTagName("body")[0].appendChild(t4);
          var n4 = document.getElementById(e4.frameId);
          n4.onload = function() {
            if ("pdf" !== e4.type) {
              var t5 = n4.contentWindow || n4.contentDocument;
              if (t5.document && (t5 = t5.document), t5.body.appendChild(e4.printableElement), "pdf" !== e4.type && e4.style) {
                var o3 = document.createElement("style");
                o3.innerHTML = e4.style, t5.head.appendChild(o3);
              }
              var i2 = t5.getElementsByTagName("img");
              i2.length > 0 ? function(e5) {
                var t6 = e5.map(function(e6) {
                  if (e6.src && e6.src !== window.location.href) return function(e7) {
                    return new Promise(function(t7) {
                      !function n5() {
                        e7 && void 0 !== e7.naturalWidth && 0 !== e7.naturalWidth && e7.complete ? t7() : setTimeout(n5, 500);
                      }();
                    });
                  }(e6);
                });
                return Promise.all(t6);
              }(Array.from(i2)).then(function() {
                return a2(n4, e4);
              }) : a2(n4, e4);
            } else r2.default.isFirefox() ? setTimeout(function() {
              return a2(n4, e4);
            }, 1e3) : a2(n4, e4);
          };
        } };
      }
    ), "./src/js/raw-html.js": (
      /*!****************************!*\
        !*** ./src/js/raw-html.js ***!
        \****************************/
      /*! exports provided: default */
      function(e3, t3, n3) {
        n3.r(t3);
        var r2 = n3(
          /*! ./print */
          "./src/js/print.js"
        );
        t3.default = { print: function(e4, t4) {
          e4.printableElement = document.createElement("div"), e4.printableElement.setAttribute("style", "width:100%"), e4.printableElement.innerHTML = e4.printable, r2.default.send(e4, t4);
        } };
      }
    ), "./src/sass/index.scss": (
      /*!*****************************!*\
        !*** ./src/sass/index.scss ***!
        \*****************************/
      /*! no static exports found */
      function(e3, t3, n3) {
      }
    ), 0: (
      /*!****************************!*\
        !*** multi ./src/index.js ***!
        \****************************/
      /*! no static exports found */
      function(e3, t3, n3) {
        e3.exports = n3(
          /*! ./src/index.js */
          "./src/index.js"
        );
      }
    ) }).default;
  }, e2.exports = n2();
}(l = { exports: {} }), (i = l.exports) && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i);
var c = () => import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-file-earmark-arrow-down", viewBox: "0 0 16 16" }, import_react.default.createElement("path", { d: "M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" }), import_react.default.createElement("path", { d: "M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" }));
var d = () => import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-printer", viewBox: "0 0 16 16" }, import_react.default.createElement("path", { d: "M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" }), import_react.default.createElement("path", { d: "M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z" }));
var u = () => import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus", viewBox: "0 0 16 16" }, import_react.default.createElement("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }));
var p = () => import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-dash", viewBox: "0 0 16 16" }, import_react.default.createElement("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }));
var f = () => import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "30", height: "30", fill: "currentColor", className: "bi bi-arrow-repeat arrowRepeat", viewBox: "0 0 16 16" }, import_react.default.createElement("path", { d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" }), import_react.default.createElement("path", { "fill-rule": "evenodd", d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" }));
var m = class extends import_react.default.Component {
  constructor({ props: t2 }) {
    super(t2);
    const o2 = this;
    this.onWheelEvent = (e2) => {
      e2.ctrlKey && (e2.preventDefault(), e2.deltaY < 0 ? this.increaseScale() : this.reduceScale());
    }, this.increaseScale = () => {
      this.setState((e2, t3) => e2.scale + 0.2 >= 3 ? { scale: e2.scale } : { scale: e2.scale + 0.2 });
    }, this.reduceScale = () => {
      this.setState((e2, t3) => e2.scale - 0.2 <= 0 ? { scale: e2.scale } : { scale: e2.scale - 0.2 }, () => {
        this.render();
      });
    }, this.printDocument = function() {
      try {
        return Promise.resolve(o2.state.pdf.getData()).then(function(e2) {
          const t3 = new Blob([e2], { type: "application/pdf" });
          s(URL.createObjectURL(t3));
        });
      } catch (e2) {
        return Promise.reject(e2);
      }
    }, this.downloadDocument = () => {
      const e2 = { method: "GET", headers: { Authorization: "" + localStorage.getItem("token") } };
      fetch(this.props.link, e2).then((e3) => e3.blob()).then((e3) => {
        const t3 = window.URL.createObjectURL(e3), n2 = document.createElement("a");
        n2.style.display = "none", n2.href = t3, n2.download = this.props.link.replace(process.env.REACT_APP_BACK_HOST + "/media/pdf/", ""), document.body.appendChild(n2), n2.click(), window.URL.revokeObjectURL(t3);
      }).catch((e3) => console.log("error", e3));
    }, this.loadingDocument = () => import_react.default.createElement("div", { className: "loadingPage" }, import_react.default.createElement("div", { className: "loadingPage__div" }, import_react.default.createElement(f, null), import_react.default.createElement("p", null, "Loading"))), this.state = { numPages: 0, numPagesArr: [1], scale: 1.5, pdf: null, visibleMenu: false, isRender: false, isLoadingError: false }, this.mainDiv = import_react.default.createRef(), import_pdfjs_dist.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${import_pdfjs_dist.version}/legacy/build/pdf.worker.min.js`;
  }
  componentDidMount() {
    const e2 = this, t2 = (0, import_pdfjs_dist.getDocument)({ url: this.props.link, cMapUrl: `//unpkg.com/pdfjs-dist@${import_pdfjs_dist.version}/cmaps`, cMapPacked: true });
    t2.promise.then((e3) => {
      let t3 = [];
      for (let n2 = 1; n2 <= e3.numPages; n2++) t3.push(n2);
      this.setState({ pdf: e3, numPages: e3.numPages, numPagesArr: t3 }, () => {
        var e4;
        null === (e4 = this.mainDiv.current) || void 0 === e4 || e4.addEventListener("wheel", (e5) => {
          this.onWheelEvent(e5);
        });
      });
    }, function(t3) {
      e2.setState({ isLoadingError: true }), console.error(t3);
    }), t2.promise.catch((t3) => {
      e2.setState({ isLoadingError: true }), console.log(t3);
    });
  }
  render() {
    const { pdf: t2, scale: n2, isRender: r2, isLoadingError: o2 } = this.state;
    return t2 || o2 ? !t2 && o2 ? import_react.default.createElement("div", null, "Произошла проблема при загрузке документа. Пожалуйста сообщите нам об этом") : import_react.default.createElement("div", null, import_react.default.createElement("div", { className: "pdfViewerTools", style: { position: "fixed" } }, import_react.default.createElement("button", { onClick: () => this.increaseScale(), className: "panelButton" }, import_react.default.createElement(u, null)), import_react.default.createElement("button", { onClick: () => this.reduceScale(), className: "panelButton" }, import_react.default.createElement(p, null)), import_react.default.createElement("button", { onClick: () => this.printDocument(), className: "panelButton" }, import_react.default.createElement(d, null)), import_react.default.createElement("button", { onClick: () => this.downloadDocument(), className: "panelButton" }, import_react.default.createElement(c, null)), import_react.default.createElement("div", { className: "scale" }, Math.round(33 * n2), "%/100%")), !r2 && import_react.default.createElement("div", { ref: this.mainDiv, style: { minHeight: "100vh" } }, this.state.numPagesArr.map((t3) => import_react.default.createElement("div", { style: { marginBottom: 20 } }, import_react.default.createElement(a, { key: t3, page: t3, pdf: this.state.pdf, scale: n2 }))))) : this.loadingDocument();
  }
};
export {
  m as PDFViewer
};
//# sourceMappingURL=srpv-js.js.map
