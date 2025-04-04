import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/z80.js
function mkZ80(ez802) {
  var keywords1, keywords2;
  if (ez802) {
    keywords1 = /^(exx?|(ld|cp)([di]r?)?|[lp]ea|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|[de]i|halt|im|in([di]mr?|ir?|irx|2r?)|ot(dmr?|[id]rx|imr?)|out(0?|[di]r?|[di]2r?)|tst(io)?|slp)(\.([sl]?i)?[sl])?\b/i;
    keywords2 = /^(((call|j[pr]|rst|ret[in]?)(\.([sl]?i)?[sl])?)|(rs|st)mix)\b/i;
  } else {
    keywords1 = /^(exx?|(ld|cp|in)([di]r?)?|pop|push|ad[cd]|cpl|daa|dec|inc|neg|sbc|sub|and|bit|[cs]cf|x?or|res|set|r[lr]c?a?|r[lr]d|s[lr]a|srl|djnz|nop|rst|[de]i|halt|im|ot[di]r|out[di]?)\b/i;
    keywords2 = /^(call|j[pr]|ret[in]?|b_?(call|jump))\b/i;
  }
  var variables1 = /^(af?|bc?|c|de?|e|hl?|l|i[xy]?|r|sp)\b/i;
  var variables2 = /^(n?[zc]|p[oe]?|m)\b/i;
  var errors = /^([hl][xy]|i[xy][hl]|slia|sll)\b/i;
  var numbers = /^([\da-f]+h|[0-7]+o|[01]+b|\d+d?)\b/i;
  return {
    name: "z80",
    startState: function() {
      return {
        context: 0
      };
    },
    token: function(stream, state) {
      if (!stream.column())
        state.context = 0;
      if (stream.eatSpace())
        return null;
      var w;
      if (stream.eatWhile(/\w/)) {
        if (ez802 && stream.eat(".")) {
          stream.eatWhile(/\w/);
        }
        w = stream.current();
        if (stream.indentation()) {
          if ((state.context == 1 || state.context == 4) && variables1.test(w)) {
            state.context = 4;
            return "variable";
          }
          if (state.context == 2 && variables2.test(w)) {
            state.context = 4;
            return "variableName.special";
          }
          if (keywords1.test(w)) {
            state.context = 1;
            return "keyword";
          } else if (keywords2.test(w)) {
            state.context = 2;
            return "keyword";
          } else if (state.context == 4 && numbers.test(w)) {
            return "number";
          }
          if (errors.test(w))
            return "error";
        } else if (stream.match(numbers)) {
          return "number";
        } else {
          return null;
        }
      } else if (stream.eat(";")) {
        stream.skipToEnd();
        return "comment";
      } else if (stream.eat('"')) {
        while (w = stream.next()) {
          if (w == '"')
            break;
          if (w == "\\")
            stream.next();
        }
        return "string";
      } else if (stream.eat("'")) {
        if (stream.match(/\\?.'/))
          return "number";
      } else if (stream.eat(".") || stream.sol() && stream.eat("#")) {
        state.context = 5;
        if (stream.eatWhile(/\w/))
          return "def";
      } else if (stream.eat("$")) {
        if (stream.eatWhile(/[\da-f]/i))
          return "number";
      } else if (stream.eat("%")) {
        if (stream.eatWhile(/[01]/))
          return "number";
      } else {
        stream.next();
      }
      return null;
    }
  };
}
var z80 = mkZ80(false);
var ez80 = mkZ80(true);
export {
  ez80,
  z80
};
//# sourceMappingURL=z80-6T62SBDK.js.map
