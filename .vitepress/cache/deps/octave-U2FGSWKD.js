import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/octave.js
function wordRegexp(words) {
  return new RegExp("^((" + words.join(")|(") + "))\\b");
}
var singleOperators = new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]");
var singleDelimiters = new RegExp("^[\\(\\[\\{\\},:=;\\.]");
var doubleOperators = new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))");
var doubleDelimiters = new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))");
var tripleDelimiters = new RegExp("^((>>=)|(<<=))");
var expressionEnd = new RegExp("^[\\]\\)]");
var identifiers = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
var builtins = wordRegexp([
  "error",
  "eval",
  "function",
  "abs",
  "acos",
  "atan",
  "asin",
  "cos",
  "cosh",
  "exp",
  "log",
  "prod",
  "sum",
  "log10",
  "max",
  "min",
  "sign",
  "sin",
  "sinh",
  "sqrt",
  "tan",
  "reshape",
  "break",
  "zeros",
  "default",
  "margin",
  "round",
  "ones",
  "rand",
  "syn",
  "ceil",
  "floor",
  "size",
  "clear",
  "zeros",
  "eye",
  "mean",
  "std",
  "cov",
  "det",
  "eig",
  "inv",
  "norm",
  "rank",
  "trace",
  "expm",
  "logm",
  "sqrtm",
  "linspace",
  "plot",
  "title",
  "xlabel",
  "ylabel",
  "legend",
  "text",
  "grid",
  "meshgrid",
  "mesh",
  "num2str",
  "fft",
  "ifft",
  "arrayfun",
  "cellfun",
  "input",
  "fliplr",
  "flipud",
  "ismember"
]);
var keywords = wordRegexp([
  "return",
  "case",
  "switch",
  "else",
  "elseif",
  "end",
  "endif",
  "endfunction",
  "if",
  "otherwise",
  "do",
  "for",
  "while",
  "try",
  "catch",
  "classdef",
  "properties",
  "events",
  "methods",
  "global",
  "persistent",
  "endfor",
  "endwhile",
  "printf",
  "sprintf",
  "disp",
  "until",
  "continue",
  "pkg"
]);
function tokenTranspose(stream, state) {
  if (!stream.sol() && stream.peek() === "'") {
    stream.next();
    state.tokenize = tokenBase;
    return "operator";
  }
  state.tokenize = tokenBase;
  return tokenBase(stream, state);
}
function tokenComment(stream, state) {
  if (stream.match(/^.*%}/)) {
    state.tokenize = tokenBase;
    return "comment";
  }
  ;
  stream.skipToEnd();
  return "comment";
}
function tokenBase(stream, state) {
  if (stream.eatSpace()) return null;
  if (stream.match("%{")) {
    state.tokenize = tokenComment;
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(/^[%#]/)) {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(/^[0-9\.+-]/, false)) {
    if (stream.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/)) {
      stream.tokenize = tokenBase;
      return "number";
    }
    ;
    if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/)) {
      return "number";
    }
    ;
    if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/)) {
      return "number";
    }
    ;
  }
  if (stream.match(wordRegexp(["nan", "NaN", "inf", "Inf"]))) {
    return "number";
  }
  ;
  var m = stream.match(/^"(?:[^"]|"")*("|$)/) || stream.match(/^'(?:[^']|'')*('|$)/);
  if (m) {
    return m[1] ? "string" : "error";
  }
  if (stream.match(keywords)) {
    return "keyword";
  }
  ;
  if (stream.match(builtins)) {
    return "builtin";
  }
  ;
  if (stream.match(identifiers)) {
    return "variable";
  }
  ;
  if (stream.match(singleOperators) || stream.match(doubleOperators)) {
    return "operator";
  }
  ;
  if (stream.match(singleDelimiters) || stream.match(doubleDelimiters) || stream.match(tripleDelimiters)) {
    return null;
  }
  ;
  if (stream.match(expressionEnd)) {
    state.tokenize = tokenTranspose;
    return null;
  }
  ;
  stream.next();
  return "error";
}
var octave = {
  name: "octave",
  startState: function() {
    return {
      tokenize: tokenBase
    };
  },
  token: function(stream, state) {
    var style = state.tokenize(stream, state);
    if (style === "number" || style === "variable") {
      state.tokenize = tokenTranspose;
    }
    return style;
  },
  languageData: {
    commentTokens: { line: "%" }
  }
};
export {
  octave
};
//# sourceMappingURL=octave-U2FGSWKD.js.map
