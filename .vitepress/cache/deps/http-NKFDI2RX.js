import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/http.js
function failFirstLine(stream, state) {
  stream.skipToEnd();
  state.cur = header;
  return "error";
}
function start(stream, state) {
  if (stream.match(/^HTTP\/\d\.\d/)) {
    state.cur = responseStatusCode;
    return "keyword";
  } else if (stream.match(/^[A-Z]+/) && /[ \t]/.test(stream.peek())) {
    state.cur = requestPath;
    return "keyword";
  } else {
    return failFirstLine(stream, state);
  }
}
function responseStatusCode(stream, state) {
  var code = stream.match(/^\d+/);
  if (!code) return failFirstLine(stream, state);
  state.cur = responseStatusText;
  var status = Number(code[0]);
  if (status >= 100 && status < 400) {
    return "atom";
  } else {
    return "error";
  }
}
function responseStatusText(stream, state) {
  stream.skipToEnd();
  state.cur = header;
  return null;
}
function requestPath(stream, state) {
  stream.eatWhile(/\S/);
  state.cur = requestProtocol;
  return "string.special";
}
function requestProtocol(stream, state) {
  if (stream.match(/^HTTP\/\d\.\d$/)) {
    state.cur = header;
    return "keyword";
  } else {
    return failFirstLine(stream, state);
  }
}
function header(stream) {
  if (stream.sol() && !stream.eat(/[ \t]/)) {
    if (stream.match(/^.*?:/)) {
      return "atom";
    } else {
      stream.skipToEnd();
      return "error";
    }
  } else {
    stream.skipToEnd();
    return "string";
  }
}
function body(stream) {
  stream.skipToEnd();
  return null;
}
var http = {
  name: "http",
  token: function(stream, state) {
    var cur = state.cur;
    if (cur != header && cur != body && stream.eatSpace()) return null;
    return cur(stream, state);
  },
  blankLine: function(state) {
    state.cur = body;
  },
  startState: function() {
    return { cur: start };
  }
};
export {
  http
};
//# sourceMappingURL=http-NKFDI2RX.js.map
