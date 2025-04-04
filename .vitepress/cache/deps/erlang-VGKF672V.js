import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/erlang.js
var typeWords = [
  "-type",
  "-spec",
  "-export_type",
  "-opaque"
];
var keywordWords = [
  "after",
  "begin",
  "catch",
  "case",
  "cond",
  "end",
  "fun",
  "if",
  "let",
  "of",
  "query",
  "receive",
  "try",
  "when"
];
var separatorRE = /[\->,;]/;
var separatorWords = [
  "->",
  ";",
  ","
];
var operatorAtomWords = [
  "and",
  "andalso",
  "band",
  "bnot",
  "bor",
  "bsl",
  "bsr",
  "bxor",
  "div",
  "not",
  "or",
  "orelse",
  "rem",
  "xor"
];
var operatorSymbolRE = /[\+\-\*\/<>=\|:!]/;
var operatorSymbolWords = [
  "=",
  "+",
  "-",
  "*",
  "/",
  ">",
  ">=",
  "<",
  "=<",
  "=:=",
  "==",
  "=/=",
  "/=",
  "||",
  "<-",
  "!"
];
var openParenRE = /[<\(\[\{]/;
var openParenWords = [
  "<<",
  "(",
  "[",
  "{"
];
var closeParenRE = /[>\)\]\}]/;
var closeParenWords = [
  "}",
  "]",
  ")",
  ">>"
];
var guardWords = [
  "is_atom",
  "is_binary",
  "is_bitstring",
  "is_boolean",
  "is_float",
  "is_function",
  "is_integer",
  "is_list",
  "is_number",
  "is_pid",
  "is_port",
  "is_record",
  "is_reference",
  "is_tuple",
  "atom",
  "binary",
  "bitstring",
  "boolean",
  "function",
  "integer",
  "list",
  "number",
  "pid",
  "port",
  "record",
  "reference",
  "tuple"
];
var bifWords = [
  "abs",
  "adler32",
  "adler32_combine",
  "alive",
  "apply",
  "atom_to_binary",
  "atom_to_list",
  "binary_to_atom",
  "binary_to_existing_atom",
  "binary_to_list",
  "binary_to_term",
  "bit_size",
  "bitstring_to_list",
  "byte_size",
  "check_process_code",
  "contact_binary",
  "crc32",
  "crc32_combine",
  "date",
  "decode_packet",
  "delete_module",
  "disconnect_node",
  "element",
  "erase",
  "exit",
  "float",
  "float_to_list",
  "garbage_collect",
  "get",
  "get_keys",
  "group_leader",
  "halt",
  "hd",
  "integer_to_list",
  "internal_bif",
  "iolist_size",
  "iolist_to_binary",
  "is_alive",
  "is_atom",
  "is_binary",
  "is_bitstring",
  "is_boolean",
  "is_float",
  "is_function",
  "is_integer",
  "is_list",
  "is_number",
  "is_pid",
  "is_port",
  "is_process_alive",
  "is_record",
  "is_reference",
  "is_tuple",
  "length",
  "link",
  "list_to_atom",
  "list_to_binary",
  "list_to_bitstring",
  "list_to_existing_atom",
  "list_to_float",
  "list_to_integer",
  "list_to_pid",
  "list_to_tuple",
  "load_module",
  "make_ref",
  "module_loaded",
  "monitor_node",
  "node",
  "node_link",
  "node_unlink",
  "nodes",
  "notalive",
  "now",
  "open_port",
  "pid_to_list",
  "port_close",
  "port_command",
  "port_connect",
  "port_control",
  "pre_loaded",
  "process_flag",
  "process_info",
  "processes",
  "purge_module",
  "put",
  "register",
  "registered",
  "round",
  "self",
  "setelement",
  "size",
  "spawn",
  "spawn_link",
  "spawn_monitor",
  "spawn_opt",
  "split_binary",
  "statistics",
  "term_to_binary",
  "time",
  "throw",
  "tl",
  "trunc",
  "tuple_size",
  "tuple_to_list",
  "unlink",
  "unregister",
  "whereis"
];
var anumRE = /[\w@Ø-ÞÀ-Öß-öø-ÿ]/;
var escapesRE = /[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;
function tokenizer(stream, state) {
  if (state.in_string) {
    state.in_string = !doubleQuote(stream);
    return rval(state, stream, "string");
  }
  if (state.in_atom) {
    state.in_atom = !singleQuote(stream);
    return rval(state, stream, "atom");
  }
  if (stream.eatSpace()) {
    return rval(state, stream, "whitespace");
  }
  if (!peekToken(state) && stream.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/)) {
    if (is_member(stream.current(), typeWords)) {
      return rval(state, stream, "type");
    } else {
      return rval(state, stream, "attribute");
    }
  }
  var ch = stream.next();
  if (ch == "%") {
    stream.skipToEnd();
    return rval(state, stream, "comment");
  }
  if (ch == ":") {
    return rval(state, stream, "colon");
  }
  if (ch == "?") {
    stream.eatSpace();
    stream.eatWhile(anumRE);
    return rval(state, stream, "macro");
  }
  if (ch == "#") {
    stream.eatSpace();
    stream.eatWhile(anumRE);
    return rval(state, stream, "record");
  }
  if (ch == "$") {
    if (stream.next() == "\\" && !stream.match(escapesRE)) {
      return rval(state, stream, "error");
    }
    return rval(state, stream, "number");
  }
  if (ch == ".") {
    return rval(state, stream, "dot");
  }
  if (ch == "'") {
    if (!(state.in_atom = !singleQuote(stream))) {
      if (stream.match(/\s*\/\s*[0-9]/, false)) {
        stream.match(/\s*\/\s*[0-9]/, true);
        return rval(state, stream, "fun");
      }
      if (stream.match(/\s*\(/, false) || stream.match(/\s*:/, false)) {
        return rval(state, stream, "function");
      }
    }
    return rval(state, stream, "atom");
  }
  if (ch == '"') {
    state.in_string = !doubleQuote(stream);
    return rval(state, stream, "string");
  }
  if (/[A-Z_Ø-ÞÀ-Ö]/.test(ch)) {
    stream.eatWhile(anumRE);
    return rval(state, stream, "variable");
  }
  if (/[a-z_ß-öø-ÿ]/.test(ch)) {
    stream.eatWhile(anumRE);
    if (stream.match(/\s*\/\s*[0-9]/, false)) {
      stream.match(/\s*\/\s*[0-9]/, true);
      return rval(state, stream, "fun");
    }
    var w = stream.current();
    if (is_member(w, keywordWords)) {
      return rval(state, stream, "keyword");
    } else if (is_member(w, operatorAtomWords)) {
      return rval(state, stream, "operator");
    } else if (stream.match(/\s*\(/, false)) {
      if (is_member(w, bifWords) && (peekToken(state).token != ":" || peekToken(state, 2).token == "erlang")) {
        return rval(state, stream, "builtin");
      } else if (is_member(w, guardWords)) {
        return rval(state, stream, "guard");
      } else {
        return rval(state, stream, "function");
      }
    } else if (lookahead(stream) == ":") {
      if (w == "erlang") {
        return rval(state, stream, "builtin");
      } else {
        return rval(state, stream, "function");
      }
    } else if (is_member(w, ["true", "false"])) {
      return rval(state, stream, "boolean");
    } else {
      return rval(state, stream, "atom");
    }
  }
  var digitRE = /[0-9]/;
  var radixRE = /[0-9a-zA-Z]/;
  if (digitRE.test(ch)) {
    stream.eatWhile(digitRE);
    if (stream.eat("#")) {
      if (!stream.eatWhile(radixRE)) {
        stream.backUp(1);
      }
    } else if (stream.eat(".")) {
      if (!stream.eatWhile(digitRE)) {
        stream.backUp(1);
      } else {
        if (stream.eat(/[eE]/)) {
          if (stream.eat(/[-+]/)) {
            if (!stream.eatWhile(digitRE)) {
              stream.backUp(2);
            }
          } else {
            if (!stream.eatWhile(digitRE)) {
              stream.backUp(1);
            }
          }
        }
      }
    }
    return rval(state, stream, "number");
  }
  if (nongreedy(stream, openParenRE, openParenWords)) {
    return rval(state, stream, "open_paren");
  }
  if (nongreedy(stream, closeParenRE, closeParenWords)) {
    return rval(state, stream, "close_paren");
  }
  if (greedy(stream, separatorRE, separatorWords)) {
    return rval(state, stream, "separator");
  }
  if (greedy(stream, operatorSymbolRE, operatorSymbolWords)) {
    return rval(state, stream, "operator");
  }
  return rval(state, stream, null);
}
function nongreedy(stream, re, words) {
  if (stream.current().length == 1 && re.test(stream.current())) {
    stream.backUp(1);
    while (re.test(stream.peek())) {
      stream.next();
      if (is_member(stream.current(), words)) {
        return true;
      }
    }
    stream.backUp(stream.current().length - 1);
  }
  return false;
}
function greedy(stream, re, words) {
  if (stream.current().length == 1 && re.test(stream.current())) {
    while (re.test(stream.peek())) {
      stream.next();
    }
    while (0 < stream.current().length) {
      if (is_member(stream.current(), words)) {
        return true;
      } else {
        stream.backUp(1);
      }
    }
    stream.next();
  }
  return false;
}
function doubleQuote(stream) {
  return quote(stream, '"', "\\");
}
function singleQuote(stream) {
  return quote(stream, "'", "\\");
}
function quote(stream, quoteChar, escapeChar) {
  while (!stream.eol()) {
    var ch = stream.next();
    if (ch == quoteChar) {
      return true;
    } else if (ch == escapeChar) {
      stream.next();
    }
  }
  return false;
}
function lookahead(stream) {
  var m = stream.match(/^\s*([^\s%])/, false);
  return m ? m[1] : "";
}
function is_member(element, list) {
  return -1 < list.indexOf(element);
}
function rval(state, stream, type) {
  pushToken(state, realToken(type, stream));
  switch (type) {
    case "atom":
      return "atom";
    case "attribute":
      return "attribute";
    case "boolean":
      return "atom";
    case "builtin":
      return "builtin";
    case "close_paren":
      return null;
    case "colon":
      return null;
    case "comment":
      return "comment";
    case "dot":
      return null;
    case "error":
      return "error";
    case "fun":
      return "meta";
    case "function":
      return "tag";
    case "guard":
      return "property";
    case "keyword":
      return "keyword";
    case "macro":
      return "macroName";
    case "number":
      return "number";
    case "open_paren":
      return null;
    case "operator":
      return "operator";
    case "record":
      return "bracket";
    case "separator":
      return null;
    case "string":
      return "string";
    case "type":
      return "def";
    case "variable":
      return "variable";
    default:
      return null;
  }
}
function aToken(tok, col, ind, typ) {
  return {
    token: tok,
    column: col,
    indent: ind,
    type: typ
  };
}
function realToken(type, stream) {
  return aToken(
    stream.current(),
    stream.column(),
    stream.indentation(),
    type
  );
}
function fakeToken(type) {
  return aToken(type, 0, 0, type);
}
function peekToken(state, depth) {
  var len = state.tokenStack.length;
  var dep = depth ? depth : 1;
  if (len < dep) {
    return false;
  } else {
    return state.tokenStack[len - dep];
  }
}
function pushToken(state, token) {
  if (!(token.type == "comment" || token.type == "whitespace")) {
    state.tokenStack = maybe_drop_pre(state.tokenStack, token);
    state.tokenStack = maybe_drop_post(state.tokenStack);
  }
}
function maybe_drop_pre(s, token) {
  var last = s.length - 1;
  if (0 < last && s[last].type === "record" && token.type === "dot") {
    s.pop();
  } else if (0 < last && s[last].type === "group") {
    s.pop();
    s.push(token);
  } else {
    s.push(token);
  }
  return s;
}
function maybe_drop_post(s) {
  if (!s.length) return s;
  var last = s.length - 1;
  if (s[last].type === "dot") {
    return [];
  }
  if (last > 1 && s[last].type === "fun" && s[last - 1].token === "fun") {
    return s.slice(0, last - 1);
  }
  switch (s[last].token) {
    case "}":
      return d(s, { g: ["{"] });
    case "]":
      return d(s, { i: ["["] });
    case ")":
      return d(s, { i: ["("] });
    case ">>":
      return d(s, { i: ["<<"] });
    case "end":
      return d(s, { i: ["begin", "case", "fun", "if", "receive", "try"] });
    case ",":
      return d(s, { e: [
        "begin",
        "try",
        "when",
        "->",
        ",",
        "(",
        "[",
        "{",
        "<<"
      ] });
    case "->":
      return d(s, {
        r: ["when"],
        m: ["try", "if", "case", "receive"]
      });
    case ";":
      return d(s, { E: ["case", "fun", "if", "receive", "try", "when"] });
    case "catch":
      return d(s, { e: ["try"] });
    case "of":
      return d(s, { e: ["case"] });
    case "after":
      return d(s, { e: ["receive", "try"] });
    default:
      return s;
  }
}
function d(stack, tt) {
  for (var type in tt) {
    var len = stack.length - 1;
    var tokens = tt[type];
    for (var i = len - 1; -1 < i; i--) {
      if (is_member(stack[i].token, tokens)) {
        var ss = stack.slice(0, i);
        switch (type) {
          case "m":
            return ss.concat(stack[i]).concat(stack[len]);
          case "r":
            return ss.concat(stack[len]);
          case "i":
            return ss;
          case "g":
            return ss.concat(fakeToken("group"));
          case "E":
            return ss.concat(stack[i]);
          case "e":
            return ss.concat(stack[i]);
        }
      }
    }
  }
  return type == "E" ? [] : stack;
}
function indenter(state, textAfter, cx) {
  var t;
  var wordAfter = wordafter(textAfter);
  var currT = peekToken(state, 1);
  var prevT = peekToken(state, 2);
  if (state.in_string || state.in_atom) {
    return null;
  } else if (!prevT) {
    return 0;
  } else if (currT.token == "when") {
    return currT.column + cx.unit;
  } else if (wordAfter === "when" && prevT.type === "function") {
    return prevT.indent + cx.unit;
  } else if (wordAfter === "(" && currT.token === "fun") {
    return currT.column + 3;
  } else if (wordAfter === "catch" && (t = getToken(state, ["try"]))) {
    return t.column;
  } else if (is_member(wordAfter, ["end", "after", "of"])) {
    t = getToken(state, ["begin", "case", "fun", "if", "receive", "try"]);
    return t ? t.column : null;
  } else if (is_member(wordAfter, closeParenWords)) {
    t = getToken(state, openParenWords);
    return t ? t.column : null;
  } else if (is_member(currT.token, [",", "|", "||"]) || is_member(wordAfter, [",", "|", "||"])) {
    t = postcommaToken(state);
    return t ? t.column + t.token.length : cx.unit;
  } else if (currT.token == "->") {
    if (is_member(prevT.token, ["receive", "case", "if", "try"])) {
      return prevT.column + cx.unit + cx.unit;
    } else {
      return prevT.column + cx.unit;
    }
  } else if (is_member(currT.token, openParenWords)) {
    return currT.column + currT.token.length;
  } else {
    t = defaultToken(state);
    return truthy(t) ? t.column + cx.unit : 0;
  }
}
function wordafter(str) {
  var m = str.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);
  return truthy(m) && m.index === 0 ? m[0] : "";
}
function postcommaToken(state) {
  var objs = state.tokenStack.slice(0, -1);
  var i = getTokenIndex(objs, "type", ["open_paren"]);
  return truthy(objs[i]) ? objs[i] : false;
}
function defaultToken(state) {
  var objs = state.tokenStack;
  var stop = getTokenIndex(objs, "type", ["open_paren", "separator", "keyword"]);
  var oper = getTokenIndex(objs, "type", ["operator"]);
  if (truthy(stop) && truthy(oper) && stop < oper) {
    return objs[stop + 1];
  } else if (truthy(stop)) {
    return objs[stop];
  } else {
    return false;
  }
}
function getToken(state, tokens) {
  var objs = state.tokenStack;
  var i = getTokenIndex(objs, "token", tokens);
  return truthy(objs[i]) ? objs[i] : false;
}
function getTokenIndex(objs, propname, propvals) {
  for (var i = objs.length - 1; -1 < i; i--) {
    if (is_member(objs[i][propname], propvals)) {
      return i;
    }
  }
  return false;
}
function truthy(x) {
  return x !== false && x != null;
}
var erlang = {
  name: "erlang",
  startState() {
    return {
      tokenStack: [],
      in_string: false,
      in_atom: false
    };
  },
  token: tokenizer,
  indent: indenter,
  languageData: {
    commentTokens: { line: "%" }
  }
};
export {
  erlang
};
//# sourceMappingURL=erlang-VGKF672V.js.map
