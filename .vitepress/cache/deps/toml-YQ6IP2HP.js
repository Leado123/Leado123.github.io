import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/toml.js
var toml = {
  name: "toml",
  startState: function() {
    return {
      inString: false,
      stringType: "",
      lhs: true,
      inArray: 0
    };
  },
  token: function(stream, state) {
    if (!state.inString && (stream.peek() == '"' || stream.peek() == "'")) {
      state.stringType = stream.peek();
      stream.next();
      state.inString = true;
    }
    if (stream.sol() && state.inArray === 0) {
      state.lhs = true;
    }
    if (state.inString) {
      while (state.inString && !stream.eol()) {
        if (stream.peek() === state.stringType) {
          stream.next();
          state.inString = false;
        } else if (stream.peek() === "\\") {
          stream.next();
          stream.next();
        } else {
          stream.match(/^.[^\\\"\']*/);
        }
      }
      return state.lhs ? "property" : "string";
    } else if (state.inArray && stream.peek() === "]") {
      stream.next();
      state.inArray--;
      return "bracket";
    } else if (state.lhs && stream.peek() === "[" && stream.skipTo("]")) {
      stream.next();
      if (stream.peek() === "]") stream.next();
      return "atom";
    } else if (stream.peek() === "#") {
      stream.skipToEnd();
      return "comment";
    } else if (stream.eatSpace()) {
      return null;
    } else if (state.lhs && stream.eatWhile(function(c) {
      return c != "=" && c != " ";
    })) {
      return "property";
    } else if (state.lhs && stream.peek() === "=") {
      stream.next();
      state.lhs = false;
      return null;
    } else if (!state.lhs && stream.match(/^\d\d\d\d[\d\-\:\.T]*Z/)) {
      return "atom";
    } else if (!state.lhs && (stream.match("true") || stream.match("false"))) {
      return "atom";
    } else if (!state.lhs && stream.peek() === "[") {
      state.inArray++;
      stream.next();
      return "bracket";
    } else if (!state.lhs && stream.match(/^\-?\d+(?:\.\d+)?/)) {
      return "number";
    } else if (!stream.eatSpace()) {
      stream.next();
    }
    return null;
  },
  languageData: {
    commentTokens: { line: "#" }
  }
};
export {
  toml
};
//# sourceMappingURL=toml-YQ6IP2HP.js.map
