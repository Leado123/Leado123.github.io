import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/vbscript.js
function mkVBScript(parserConf) {
  var ERRORCLASS = "error";
  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
  }
  var singleOperators = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]");
  var doubleOperators = new RegExp("^((<>)|(<=)|(>=))");
  var singleDelimiters = new RegExp("^[\\.,]");
  var brackets = new RegExp("^[\\(\\)]");
  var identifiers = new RegExp("^[A-Za-z][_A-Za-z0-9]*");
  var openingKeywords = ["class", "sub", "select", "while", "if", "function", "property", "with", "for"];
  var middleKeywords = ["else", "elseif", "case"];
  var endKeywords = ["next", "loop", "wend"];
  var wordOperators = wordRegexp(["and", "or", "not", "xor", "is", "mod", "eqv", "imp"]);
  var commonkeywords = [
    "dim",
    "redim",
    "then",
    "until",
    "randomize",
    "byval",
    "byref",
    "new",
    "property",
    "exit",
    "in",
    "const",
    "private",
    "public",
    "get",
    "set",
    "let",
    "stop",
    "on error resume next",
    "on error goto 0",
    "option explicit",
    "call",
    "me"
  ];
  var atomWords = ["true", "false", "nothing", "empty", "null"];
  var builtinFuncsWords = [
    "abs",
    "array",
    "asc",
    "atn",
    "cbool",
    "cbyte",
    "ccur",
    "cdate",
    "cdbl",
    "chr",
    "cint",
    "clng",
    "cos",
    "csng",
    "cstr",
    "date",
    "dateadd",
    "datediff",
    "datepart",
    "dateserial",
    "datevalue",
    "day",
    "escape",
    "eval",
    "execute",
    "exp",
    "filter",
    "formatcurrency",
    "formatdatetime",
    "formatnumber",
    "formatpercent",
    "getlocale",
    "getobject",
    "getref",
    "hex",
    "hour",
    "inputbox",
    "instr",
    "instrrev",
    "int",
    "fix",
    "isarray",
    "isdate",
    "isempty",
    "isnull",
    "isnumeric",
    "isobject",
    "join",
    "lbound",
    "lcase",
    "left",
    "len",
    "loadpicture",
    "log",
    "ltrim",
    "rtrim",
    "trim",
    "maths",
    "mid",
    "minute",
    "month",
    "monthname",
    "msgbox",
    "now",
    "oct",
    "replace",
    "rgb",
    "right",
    "rnd",
    "round",
    "scriptengine",
    "scriptenginebuildversion",
    "scriptenginemajorversion",
    "scriptengineminorversion",
    "second",
    "setlocale",
    "sgn",
    "sin",
    "space",
    "split",
    "sqr",
    "strcomp",
    "string",
    "strreverse",
    "tan",
    "time",
    "timer",
    "timeserial",
    "timevalue",
    "typename",
    "ubound",
    "ucase",
    "unescape",
    "vartype",
    "weekday",
    "weekdayname",
    "year"
  ];
  var builtinConsts = [
    "vbBlack",
    "vbRed",
    "vbGreen",
    "vbYellow",
    "vbBlue",
    "vbMagenta",
    "vbCyan",
    "vbWhite",
    "vbBinaryCompare",
    "vbTextCompare",
    "vbSunday",
    "vbMonday",
    "vbTuesday",
    "vbWednesday",
    "vbThursday",
    "vbFriday",
    "vbSaturday",
    "vbUseSystemDayOfWeek",
    "vbFirstJan1",
    "vbFirstFourDays",
    "vbFirstFullWeek",
    "vbGeneralDate",
    "vbLongDate",
    "vbShortDate",
    "vbLongTime",
    "vbShortTime",
    "vbObjectError",
    "vbOKOnly",
    "vbOKCancel",
    "vbAbortRetryIgnore",
    "vbYesNoCancel",
    "vbYesNo",
    "vbRetryCancel",
    "vbCritical",
    "vbQuestion",
    "vbExclamation",
    "vbInformation",
    "vbDefaultButton1",
    "vbDefaultButton2",
    "vbDefaultButton3",
    "vbDefaultButton4",
    "vbApplicationModal",
    "vbSystemModal",
    "vbOK",
    "vbCancel",
    "vbAbort",
    "vbRetry",
    "vbIgnore",
    "vbYes",
    "vbNo",
    "vbCr",
    "VbCrLf",
    "vbFormFeed",
    "vbLf",
    "vbNewLine",
    "vbNullChar",
    "vbNullString",
    "vbTab",
    "vbVerticalTab",
    "vbUseDefault",
    "vbTrue",
    "vbFalse",
    "vbEmpty",
    "vbNull",
    "vbInteger",
    "vbLong",
    "vbSingle",
    "vbDouble",
    "vbCurrency",
    "vbDate",
    "vbString",
    "vbObject",
    "vbError",
    "vbBoolean",
    "vbVariant",
    "vbDataObject",
    "vbDecimal",
    "vbByte",
    "vbArray"
  ];
  var builtinObjsWords = ["WScript", "err", "debug", "RegExp"];
  var knownProperties = ["description", "firstindex", "global", "helpcontext", "helpfile", "ignorecase", "length", "number", "pattern", "source", "value", "count"];
  var knownMethods = ["clear", "execute", "raise", "replace", "test", "write", "writeline", "close", "open", "state", "eof", "update", "addnew", "end", "createobject", "quit"];
  var aspBuiltinObjsWords = ["server", "response", "request", "session", "application"];
  var aspKnownProperties = [
    "buffer",
    "cachecontrol",
    "charset",
    "contenttype",
    "expires",
    "expiresabsolute",
    "isclientconnected",
    "pics",
    "status",
    //response
    "clientcertificate",
    "cookies",
    "form",
    "querystring",
    "servervariables",
    "totalbytes",
    //request
    "contents",
    "staticobjects",
    //application
    "codepage",
    "lcid",
    "sessionid",
    "timeout",
    //session
    "scripttimeout"
  ];
  var aspKnownMethods = [
    "addheader",
    "appendtolog",
    "binarywrite",
    "end",
    "flush",
    "redirect",
    //response
    "binaryread",
    //request
    "remove",
    "removeall",
    "lock",
    "unlock",
    //application
    "abandon",
    //session
    "getlasterror",
    "htmlencode",
    "mappath",
    "transfer",
    "urlencode"
  ];
  var knownWords = knownMethods.concat(knownProperties);
  builtinObjsWords = builtinObjsWords.concat(builtinConsts);
  if (parserConf.isASP) {
    builtinObjsWords = builtinObjsWords.concat(aspBuiltinObjsWords);
    knownWords = knownWords.concat(aspKnownMethods, aspKnownProperties);
  }
  ;
  var keywords = wordRegexp(commonkeywords);
  var atoms = wordRegexp(atomWords);
  var builtinFuncs = wordRegexp(builtinFuncsWords);
  var builtinObjs = wordRegexp(builtinObjsWords);
  var known = wordRegexp(knownWords);
  var stringPrefixes = '"';
  var opening = wordRegexp(openingKeywords);
  var middle = wordRegexp(middleKeywords);
  var closing = wordRegexp(endKeywords);
  var doubleClosing = wordRegexp(["end"]);
  var doOpening = wordRegexp(["do"]);
  var noIndentWords = wordRegexp(["on error resume next", "exit"]);
  var comment = wordRegexp(["rem"]);
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
    if (stream.match(comment)) {
      stream.skipToEnd();
      return "comment";
    }
    if (stream.match(/^((&H)|(&O))?[0-9\.]/i, false) && !stream.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)) {
      var floatLiteral = false;
      if (stream.match(/^\d*\.\d+/i)) {
        floatLiteral = true;
      } else if (stream.match(/^\d+\.\d*/)) {
        floatLiteral = true;
      } else if (stream.match(/^\.\d+/)) {
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
    if (stream.match(doubleOperators) || stream.match(singleOperators) || stream.match(wordOperators)) {
      return "operator";
    }
    if (stream.match(singleDelimiters)) {
      return null;
    }
    if (stream.match(brackets)) {
      return "bracket";
    }
    if (stream.match(noIndentWords)) {
      state.doInCurrentLine = true;
      return "keyword";
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
      if (!state.doInCurrentLine)
        dedent(stream, state);
      else
        state.doInCurrentLine = false;
      return "keyword";
    }
    if (stream.match(keywords)) {
      return "keyword";
    }
    if (stream.match(atoms)) {
      return "atom";
    }
    if (stream.match(known)) {
      return "variableName.special";
    }
    if (stream.match(builtinFuncs)) {
      return "builtin";
    }
    if (stream.match(builtinObjs)) {
      return "builtin";
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
      current = stream.current();
      if (style && (style.substr(0, 8) === "variable" || style === "builtin" || style === "keyword")) {
        if (style === "builtin" || style === "keyword") style = "variable";
        if (knownWords.indexOf(current.substr(1)) > -1) style = "keyword";
        return style;
      } else {
        return ERRORCLASS;
      }
    }
    return style;
  }
  return {
    name: "vbscript",
    startState: function() {
      return {
        tokenize: tokenBase,
        lastToken: null,
        currentIndent: 0,
        nextLineIndent: 0,
        doInCurrentLine: false,
        ignoreKeyword: false
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
      if (style === null) style = null;
      return style;
    },
    indent: function(state, textAfter, cx) {
      var trueText = textAfter.replace(/^\s+|\s+$/g, "");
      if (trueText.match(closing) || trueText.match(doubleClosing) || trueText.match(middle)) return cx.unit * (state.currentIndent - 1);
      if (state.currentIndent < 0) return 0;
      return state.currentIndent * cx.unit;
    }
  };
}
var vbScript = mkVBScript({});
var vbScriptASP = mkVBScript({ isASP: true });
export {
  vbScript,
  vbScriptASP
};
//# sourceMappingURL=vbscript-H7QYOJIT.js.map
