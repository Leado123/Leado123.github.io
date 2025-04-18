import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/vb.js
var ERRORCLASS = "error";
function wordRegexp(words) {
  return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
}
var singleOperators = new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]");
var singleDelimiters = new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]");
var doubleOperators = new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))");
var doubleDelimiters = new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))");
var tripleDelimiters = new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");
var identifiers = new RegExp("^[_A-Za-z][_A-Za-z0-9]*");
var openingKeywords = ["class", "module", "sub", "enum", "select", "while", "if", "function", "get", "set", "property", "try", "structure", "synclock", "using", "with"];
var middleKeywords = ["else", "elseif", "case", "catch", "finally"];
var endKeywords = ["next", "loop"];
var operatorKeywords = ["and", "andalso", "or", "orelse", "xor", "in", "not", "is", "isnot", "like"];
var wordOperators = wordRegexp(operatorKeywords);
var commonKeywords = ["#const", "#else", "#elseif", "#end", "#if", "#region", "addhandler", "addressof", "alias", "as", "byref", "byval", "cbool", "cbyte", "cchar", "cdate", "cdbl", "cdec", "cint", "clng", "cobj", "compare", "const", "continue", "csbyte", "cshort", "csng", "cstr", "cuint", "culng", "cushort", "declare", "default", "delegate", "dim", "directcast", "each", "erase", "error", "event", "exit", "explicit", "false", "for", "friend", "gettype", "goto", "handles", "implements", "imports", "infer", "inherits", "interface", "isfalse", "istrue", "lib", "me", "mod", "mustinherit", "mustoverride", "my", "mybase", "myclass", "namespace", "narrowing", "new", "nothing", "notinheritable", "notoverridable", "of", "off", "on", "operator", "option", "optional", "out", "overloads", "overridable", "overrides", "paramarray", "partial", "private", "protected", "public", "raiseevent", "readonly", "redim", "removehandler", "resume", "return", "shadows", "shared", "static", "step", "stop", "strict", "then", "throw", "to", "true", "trycast", "typeof", "until", "until", "when", "widening", "withevents", "writeonly"];
var commontypes = ["object", "boolean", "char", "string", "byte", "sbyte", "short", "ushort", "int16", "uint16", "integer", "uinteger", "int32", "uint32", "long", "ulong", "int64", "uint64", "decimal", "single", "double", "float", "date", "datetime", "intptr", "uintptr"];
var keywords = wordRegexp(commonKeywords);
var types = wordRegexp(commontypes);
var stringPrefixes = '"';
var opening = wordRegexp(openingKeywords);
var middle = wordRegexp(middleKeywords);
var closing = wordRegexp(endKeywords);
var doubleClosing = wordRegexp(["end"]);
var doOpening = wordRegexp(["do"]);
var indentInfo = null;
function indent(_stream, state) {
  state.currentIndent++;
}
function dedent(_stream, state) {
  state.currentIndent--;
}
function tokenBase(stream, state) {
  if (stream.eatSpace()) {
    return null;
  }
  var ch = stream.peek();
  if (ch === "'") {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(/^((&H)|(&O))?[0-9\.a-f]/i, false)) {
    var floatLiteral = false;
    if (stream.match(/^\d*\.\d+F?/i)) {
      floatLiteral = true;
    } else if (stream.match(/^\d+\.\d*F?/)) {
      floatLiteral = true;
    } else if (stream.match(/^\.\d+F?/)) {
      floatLiteral = true;
    }
    if (floatLiteral) {
      stream.eat(/J/i);
      return "number";
    }
    var intLiteral = false;
    if (stream.match(/^&H[0-9a-f]+/i)) {
      intLiteral = true;
    } else if (stream.match(/^&O[0-7]+/i)) {
      intLiteral = true;
    } else if (stream.match(/^[1-9]\d*F?/)) {
      stream.eat(/J/i);
      intLiteral = true;
    } else if (stream.match(/^0(?![\dx])/i)) {
      intLiteral = true;
    }
    if (intLiteral) {
      stream.eat(/L/i);
      return "number";
    }
  }
  if (stream.match(stringPrefixes)) {
    state.tokenize = tokenStringFactory(stream.current());
    return state.tokenize(stream, state);
  }
  if (stream.match(tripleDelimiters) || stream.match(doubleDelimiters)) {
    return null;
  }
  if (stream.match(doubleOperators) || stream.match(singleOperators) || stream.match(wordOperators)) {
    return "operator";
  }
  if (stream.match(singleDelimiters)) {
    return null;
  }
  if (stream.match(doOpening)) {
    indent(stream, state);
    state.doInCurrentLine = true;
    return "keyword";
  }
  if (stream.match(opening)) {
    if (!state.doInCurrentLine)
      indent(stream, state);
    else
      state.doInCurrentLine = false;
    return "keyword";
  }
  if (stream.match(middle)) {
    return "keyword";
  }
  if (stream.match(doubleClosing)) {
    dedent(stream, state);
    dedent(stream, state);
    return "keyword";
  }
  if (stream.match(closing)) {
    dedent(stream, state);
    return "keyword";
  }
  if (stream.match(types)) {
    return "keyword";
  }
  if (stream.match(keywords)) {
    return "keyword";
  }
  if (stream.match(identifiers)) {
    return "variable";
  }
  stream.next();
  return ERRORCLASS;
}
function tokenStringFactory(delimiter) {
  var singleline = delimiter.length == 1;
  var OUTCLASS = "string";
  return function(stream, state) {
    while (!stream.eol()) {
      stream.eatWhile(/[^'"]/);
      if (stream.match(delimiter)) {
        state.tokenize = tokenBase;
        return OUTCLASS;
      } else {
        stream.eat(/['"]/);
      }
    }
    if (singleline) {
      state.tokenize = tokenBase;
    }
    return OUTCLASS;
  };
}
function tokenLexer(stream, state) {
  var style = state.tokenize(stream, state);
  var current = stream.current();
  if (current === ".") {
    style = state.tokenize(stream, state);
    if (style === "variable") {
      return "variable";
    } else {
      return ERRORCLASS;
    }
  }
  var delimiter_index = "[({".indexOf(current);
  if (delimiter_index !== -1) {
    indent(stream, state);
  }
  if (indentInfo === "dedent") {
    if (dedent(stream, state)) {
      return ERRORCLASS;
    }
  }
  delimiter_index = "])}".indexOf(current);
  if (delimiter_index !== -1) {
    if (dedent(stream, state)) {
      return ERRORCLASS;
    }
  }
  return style;
}
var vb = {
  name: "vb",
  startState: function() {
    return {
      tokenize: tokenBase,
      lastToken: null,
      currentIndent: 0,
      nextLineIndent: 0,
      doInCurrentLine: false
    };
  },
  token: function(stream, state) {
    if (stream.sol()) {
      state.currentIndent += state.nextLineIndent;
      state.nextLineIndent = 0;
      state.doInCurrentLine = 0;
    }
    var style = tokenLexer(stream, state);
    state.lastToken = { style, content: stream.current() };
    return style;
  },
  indent: function(state, textAfter, cx) {
    var trueText = textAfter.replace(/^\s+|\s+$/g, "");
    if (trueText.match(closing) || trueText.match(doubleClosing) || trueText.match(middle)) return cx.unit * (state.currentIndent - 1);
    if (state.currentIndent < 0) return 0;
    return state.currentIndent * cx.unit;
  },
  languageData: {
    closeBrackets: { brackets: ["(", "[", "{", '"'] },
    commentTokens: { line: "'" },
    autocomplete: openingKeywords.concat(middleKeywords).concat(endKeywords).concat(operatorKeywords).concat(commonKeywords).concat(commontypes)
  }
};
export {
  vb
};
//# sourceMappingURL=vb-NWKV3JKQ.js.map
