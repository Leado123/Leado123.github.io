import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/jinja2.js
var keywords = [
  "and",
  "as",
  "block",
  "endblock",
  "by",
  "cycle",
  "debug",
  "else",
  "elif",
  "extends",
  "filter",
  "endfilter",
  "firstof",
  "do",
  "for",
  "endfor",
  "if",
  "endif",
  "ifchanged",
  "endifchanged",
  "ifequal",
  "endifequal",
  "ifnotequal",
  "set",
  "raw",
  "endraw",
  "endifnotequal",
  "in",
  "include",
  "load",
  "not",
  "now",
  "or",
  "parsed",
  "regroup",
  "reversed",
  "spaceless",
  "call",
  "endcall",
  "macro",
  "endmacro",
  "endspaceless",
  "ssi",
  "templatetag",
  "openblock",
  "closeblock",
  "openvariable",
  "closevariable",
  "without",
  "context",
  "openbrace",
  "closebrace",
  "opencomment",
  "closecomment",
  "widthratio",
  "url",
  "with",
  "endwith",
  "get_current_language",
  "trans",
  "endtrans",
  "noop",
  "blocktrans",
  "endblocktrans",
  "get_available_languages",
  "get_current_language_bidi",
  "pluralize",
  "autoescape",
  "endautoescape"
];
var operator = /^[+\-*&%=<>!?|~^]/;
var sign = /^[:\[\(\{]/;
var atom = ["true", "false"];
var number = /^(\d[+\-\*\/])?\d+(\.\d+)?/;
keywords = new RegExp("((" + keywords.join(")|(") + "))\\b");
atom = new RegExp("((" + atom.join(")|(") + "))\\b");
function tokenBase(stream, state) {
  var ch = stream.peek();
  if (state.incomment) {
    if (!stream.skipTo("#}")) {
      stream.skipToEnd();
    } else {
      stream.eatWhile(/\#|}/);
      state.incomment = false;
    }
    return "comment";
  } else if (state.intag) {
    if (state.operator) {
      state.operator = false;
      if (stream.match(atom)) {
        return "atom";
      }
      if (stream.match(number)) {
        return "number";
      }
    }
    if (state.sign) {
      state.sign = false;
      if (stream.match(atom)) {
        return "atom";
      }
      if (stream.match(number)) {
        return "number";
      }
    }
    if (state.instring) {
      if (ch == state.instring) {
        state.instring = false;
      }
      stream.next();
      return "string";
    } else if (ch == "'" || ch == '"') {
      state.instring = ch;
      stream.next();
      return "string";
    } else if (state.inbraces > 0 && ch == ")") {
      stream.next();
      state.inbraces--;
    } else if (ch == "(") {
      stream.next();
      state.inbraces++;
    } else if (state.inbrackets > 0 && ch == "]") {
      stream.next();
      state.inbrackets--;
    } else if (ch == "[") {
      stream.next();
      state.inbrackets++;
    } else if (!state.lineTag && (stream.match(state.intag + "}") || stream.eat("-") && stream.match(state.intag + "}"))) {
      state.intag = false;
      return "tag";
    } else if (stream.match(operator)) {
      state.operator = true;
      return "operator";
    } else if (stream.match(sign)) {
      state.sign = true;
    } else {
      if (stream.column() == 1 && state.lineTag && stream.match(keywords)) {
        return "keyword";
      }
      if (stream.eat(" ") || stream.sol()) {
        if (stream.match(keywords)) {
          return "keyword";
        }
        if (stream.match(atom)) {
          return "atom";
        }
        if (stream.match(number)) {
          return "number";
        }
        if (stream.sol()) {
          stream.next();
        }
      } else {
        stream.next();
      }
    }
    return "variable";
  } else if (stream.eat("{")) {
    if (stream.eat("#")) {
      state.incomment = true;
      if (!stream.skipTo("#}")) {
        stream.skipToEnd();
      } else {
        stream.eatWhile(/\#|}/);
        state.incomment = false;
      }
      return "comment";
    } else if (ch = stream.eat(/\{|%/)) {
      state.intag = ch;
      state.inbraces = 0;
      state.inbrackets = 0;
      if (ch == "{") {
        state.intag = "}";
      }
      stream.eat("-");
      return "tag";
    }
  } else if (stream.eat("#")) {
    if (stream.peek() == "#") {
      stream.skipToEnd();
      return "comment";
    } else if (!stream.eol()) {
      state.intag = true;
      state.lineTag = true;
      state.inbraces = 0;
      state.inbrackets = 0;
      return "tag";
    }
  }
  stream.next();
}
var jinja2 = {
  name: "jinja2",
  startState: function() {
    return { tokenize: tokenBase, inbrackets: 0, inbraces: 0 };
  },
  token: function(stream, state) {
    var style = state.tokenize(stream, state);
    if (stream.eol() && state.lineTag && !state.instring && state.inbraces == 0 && state.inbrackets == 0) {
      state.intag = false;
      state.lineTag = false;
    }
    return style;
  },
  languageData: {
    commentTokens: { block: { open: "{#", close: "#}", line: "##" } }
  }
};
export {
  jinja2
};
//# sourceMappingURL=jinja2-K4VCQ5BM.js.map
