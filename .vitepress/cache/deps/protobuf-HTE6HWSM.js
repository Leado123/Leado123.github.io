import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/protobuf.js
function wordRegexp(words) {
  return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
}
var keywordArray = [
  "package",
  "message",
  "import",
  "syntax",
  "required",
  "optional",
  "repeated",
  "reserved",
  "default",
  "extensions",
  "packed",
  "bool",
  "bytes",
  "double",
  "enum",
  "float",
  "string",
  "int32",
  "int64",
  "uint32",
  "uint64",
  "sint32",
  "sint64",
  "fixed32",
  "fixed64",
  "sfixed32",
  "sfixed64",
  "option",
  "service",
  "rpc",
  "returns"
];
var keywords = wordRegexp(keywordArray);
var identifiers = new RegExp("^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*");
function tokenBase(stream) {
  if (stream.eatSpace()) return null;
  if (stream.match("//")) {
    stream.skipToEnd();
    return "comment";
  }
  if (stream.match(/^[0-9\.+-]/, false)) {
    if (stream.match(/^[+-]?0x[0-9a-fA-F]+/))
      return "number";
    if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))
      return "number";
    if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
      return "number";
  }
  if (stream.match(/^"([^"]|(""))*"/)) {
    return "string";
  }
  if (stream.match(/^'([^']|(''))*'/)) {
    return "string";
  }
  if (stream.match(keywords)) {
    return "keyword";
  }
  if (stream.match(identifiers)) {
    return "variable";
  }
  ;
  stream.next();
  return null;
}
var protobuf = {
  name: "protobuf",
  token: tokenBase,
  languageData: {
    autocomplete: keywordArray
  }
};
export {
  protobuf
};
//# sourceMappingURL=protobuf-HTE6HWSM.js.map
