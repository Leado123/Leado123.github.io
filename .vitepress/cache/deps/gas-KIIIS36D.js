import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/gas.js
function mkGas(arch) {
  var custom = [];
  var lineCommentStartSymbol = "";
  var directives = {
    ".abort": "builtin",
    ".align": "builtin",
    ".altmacro": "builtin",
    ".ascii": "builtin",
    ".asciz": "builtin",
    ".balign": "builtin",
    ".balignw": "builtin",
    ".balignl": "builtin",
    ".bundle_align_mode": "builtin",
    ".bundle_lock": "builtin",
    ".bundle_unlock": "builtin",
    ".byte": "builtin",
    ".cfi_startproc": "builtin",
    ".comm": "builtin",
    ".data": "builtin",
    ".def": "builtin",
    ".desc": "builtin",
    ".dim": "builtin",
    ".double": "builtin",
    ".eject": "builtin",
    ".else": "builtin",
    ".elseif": "builtin",
    ".end": "builtin",
    ".endef": "builtin",
    ".endfunc": "builtin",
    ".endif": "builtin",
    ".equ": "builtin",
    ".equiv": "builtin",
    ".eqv": "builtin",
    ".err": "builtin",
    ".error": "builtin",
    ".exitm": "builtin",
    ".extern": "builtin",
    ".fail": "builtin",
    ".file": "builtin",
    ".fill": "builtin",
    ".float": "builtin",
    ".func": "builtin",
    ".global": "builtin",
    ".gnu_attribute": "builtin",
    ".hidden": "builtin",
    ".hword": "builtin",
    ".ident": "builtin",
    ".if": "builtin",
    ".incbin": "builtin",
    ".include": "builtin",
    ".int": "builtin",
    ".internal": "builtin",
    ".irp": "builtin",
    ".irpc": "builtin",
    ".lcomm": "builtin",
    ".lflags": "builtin",
    ".line": "builtin",
    ".linkonce": "builtin",
    ".list": "builtin",
    ".ln": "builtin",
    ".loc": "builtin",
    ".loc_mark_labels": "builtin",
    ".local": "builtin",
    ".long": "builtin",
    ".macro": "builtin",
    ".mri": "builtin",
    ".noaltmacro": "builtin",
    ".nolist": "builtin",
    ".octa": "builtin",
    ".offset": "builtin",
    ".org": "builtin",
    ".p2align": "builtin",
    ".popsection": "builtin",
    ".previous": "builtin",
    ".print": "builtin",
    ".protected": "builtin",
    ".psize": "builtin",
    ".purgem": "builtin",
    ".pushsection": "builtin",
    ".quad": "builtin",
    ".reloc": "builtin",
    ".rept": "builtin",
    ".sbttl": "builtin",
    ".scl": "builtin",
    ".section": "builtin",
    ".set": "builtin",
    ".short": "builtin",
    ".single": "builtin",
    ".size": "builtin",
    ".skip": "builtin",
    ".sleb128": "builtin",
    ".space": "builtin",
    ".stab": "builtin",
    ".string": "builtin",
    ".struct": "builtin",
    ".subsection": "builtin",
    ".symver": "builtin",
    ".tag": "builtin",
    ".text": "builtin",
    ".title": "builtin",
    ".type": "builtin",
    ".uleb128": "builtin",
    ".val": "builtin",
    ".version": "builtin",
    ".vtable_entry": "builtin",
    ".vtable_inherit": "builtin",
    ".warning": "builtin",
    ".weak": "builtin",
    ".weakref": "builtin",
    ".word": "builtin"
  };
  var registers = {};
  function x86() {
    lineCommentStartSymbol = "#";
    registers.al = "variable";
    registers.ah = "variable";
    registers.ax = "variable";
    registers.eax = "variableName.special";
    registers.rax = "variableName.special";
    registers.bl = "variable";
    registers.bh = "variable";
    registers.bx = "variable";
    registers.ebx = "variableName.special";
    registers.rbx = "variableName.special";
    registers.cl = "variable";
    registers.ch = "variable";
    registers.cx = "variable";
    registers.ecx = "variableName.special";
    registers.rcx = "variableName.special";
    registers.dl = "variable";
    registers.dh = "variable";
    registers.dx = "variable";
    registers.edx = "variableName.special";
    registers.rdx = "variableName.special";
    registers.si = "variable";
    registers.esi = "variableName.special";
    registers.rsi = "variableName.special";
    registers.di = "variable";
    registers.edi = "variableName.special";
    registers.rdi = "variableName.special";
    registers.sp = "variable";
    registers.esp = "variableName.special";
    registers.rsp = "variableName.special";
    registers.bp = "variable";
    registers.ebp = "variableName.special";
    registers.rbp = "variableName.special";
    registers.ip = "variable";
    registers.eip = "variableName.special";
    registers.rip = "variableName.special";
    registers.cs = "keyword";
    registers.ds = "keyword";
    registers.ss = "keyword";
    registers.es = "keyword";
    registers.fs = "keyword";
    registers.gs = "keyword";
  }
  function armv6() {
    lineCommentStartSymbol = "@";
    directives.syntax = "builtin";
    registers.r0 = "variable";
    registers.r1 = "variable";
    registers.r2 = "variable";
    registers.r3 = "variable";
    registers.r4 = "variable";
    registers.r5 = "variable";
    registers.r6 = "variable";
    registers.r7 = "variable";
    registers.r8 = "variable";
    registers.r9 = "variable";
    registers.r10 = "variable";
    registers.r11 = "variable";
    registers.r12 = "variable";
    registers.sp = "variableName.special";
    registers.lr = "variableName.special";
    registers.pc = "variableName.special";
    registers.r13 = registers.sp;
    registers.r14 = registers.lr;
    registers.r15 = registers.pc;
    custom.push(function(ch, stream) {
      if (ch === "#") {
        stream.eatWhile(/\w/);
        return "number";
      }
    });
  }
  if (arch === "x86") {
    x86();
  } else if (arch === "arm" || arch === "armv6") {
    armv6();
  }
  function nextUntilUnescaped(stream, end) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (next === end && !escaped) {
        return false;
      }
      escaped = !escaped && next === "\\";
    }
    return escaped;
  }
  function clikeComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (ch === "/" && maybeEnd) {
        state.tokenize = null;
        break;
      }
      maybeEnd = ch === "*";
    }
    return "comment";
  }
  return {
    name: "gas",
    startState: function() {
      return {
        tokenize: null
      };
    },
    token: function(stream, state) {
      if (state.tokenize) {
        return state.tokenize(stream, state);
      }
      if (stream.eatSpace()) {
        return null;
      }
      var style, cur, ch = stream.next();
      if (ch === "/") {
        if (stream.eat("*")) {
          state.tokenize = clikeComment;
          return clikeComment(stream, state);
        }
      }
      if (ch === lineCommentStartSymbol) {
        stream.skipToEnd();
        return "comment";
      }
      if (ch === '"') {
        nextUntilUnescaped(stream, '"');
        return "string";
      }
      if (ch === ".") {
        stream.eatWhile(/\w/);
        cur = stream.current().toLowerCase();
        style = directives[cur];
        return style || null;
      }
      if (ch === "=") {
        stream.eatWhile(/\w/);
        return "tag";
      }
      if (ch === "{") {
        return "bracket";
      }
      if (ch === "}") {
        return "bracket";
      }
      if (/\d/.test(ch)) {
        if (ch === "0" && stream.eat("x")) {
          stream.eatWhile(/[0-9a-fA-F]/);
          return "number";
        }
        stream.eatWhile(/\d/);
        return "number";
      }
      if (/\w/.test(ch)) {
        stream.eatWhile(/\w/);
        if (stream.eat(":")) {
          return "tag";
        }
        cur = stream.current().toLowerCase();
        style = registers[cur];
        return style || null;
      }
      for (var i = 0; i < custom.length; i++) {
        style = custom[i](ch, stream, state);
        if (style) {
          return style;
        }
      }
    },
    languageData: {
      commentTokens: {
        line: lineCommentStartSymbol,
        block: { open: "/*", close: "*/" }
      }
    }
  };
}
var gas = mkGas("x86");
var gasArm = mkGas("arm");
export {
  gas,
  gasArm
};
//# sourceMappingURL=gas-KIIIS36D.js.map
