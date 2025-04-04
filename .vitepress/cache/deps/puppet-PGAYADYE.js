import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/legacy-modes/mode/puppet.js
var words = {};
var variable_regex = /({)?([a-z][a-z0-9_]*)?((::[a-z][a-z0-9_]*)*::)?[a-zA-Z0-9_]+(})?/;
function define(style, string) {
  var split = string.split(" ");
  for (var i = 0; i < split.length; i++) {
    words[split[i]] = style;
  }
}
define("keyword", "class define site node include import inherits");
define("keyword", "case if else in and elsif default or");
define("atom", "false true running present absent file directory undef");
define("builtin", "action augeas burst chain computer cron destination dport exec file filebucket group host icmp iniface interface jump k5login limit log_level log_prefix macauthorization mailalias maillist mcx mount nagios_command nagios_contact nagios_contactgroup nagios_host nagios_hostdependency nagios_hostescalation nagios_hostextinfo nagios_hostgroup nagios_service nagios_servicedependency nagios_serviceescalation nagios_serviceextinfo nagios_servicegroup nagios_timeperiod name notify outiface package proto reject resources router schedule scheduled_task selboolean selmodule service source sport ssh_authorized_key sshkey stage state table tidy todest toports tosource user vlan yumrepo zfs zone zpool");
function tokenString(stream, state) {
  var current, prev, found_var = false;
  while (!stream.eol() && (current = stream.next()) != state.pending) {
    if (current === "$" && prev != "\\" && state.pending == '"') {
      found_var = true;
      break;
    }
    prev = current;
  }
  if (found_var) {
    stream.backUp(1);
  }
  if (current == state.pending) {
    state.continueString = false;
  } else {
    state.continueString = true;
  }
  return "string";
}
function tokenize(stream, state) {
  var word = stream.match(/[\w]+/, false);
  var attribute = stream.match(/(\s+)?\w+\s+=>.*/, false);
  var resource = stream.match(/(\s+)?[\w:_]+(\s+)?{/, false);
  var special_resource = stream.match(/(\s+)?[@]{1,2}[\w:_]+(\s+)?{/, false);
  var ch = stream.next();
  if (ch === "$") {
    if (stream.match(variable_regex)) {
      return state.continueString ? "variableName.special" : "variable";
    }
    return "error";
  }
  if (state.continueString) {
    stream.backUp(1);
    return tokenString(stream, state);
  }
  if (state.inDefinition) {
    if (stream.match(/(\s+)?[\w:_]+(\s+)?/)) {
      return "def";
    }
    stream.match(/\s+{/);
    state.inDefinition = false;
  }
  if (state.inInclude) {
    stream.match(/(\s+)?\S+(\s+)?/);
    state.inInclude = false;
    return "def";
  }
  if (stream.match(/(\s+)?\w+\(/)) {
    stream.backUp(1);
    return "def";
  }
  if (attribute) {
    stream.match(/(\s+)?\w+/);
    return "tag";
  }
  if (word && words.hasOwnProperty(word)) {
    stream.backUp(1);
    stream.match(/[\w]+/);
    if (stream.match(/\s+\S+\s+{/, false)) {
      state.inDefinition = true;
    }
    if (word == "include") {
      state.inInclude = true;
    }
    return words[word];
  }
  if (/(^|\s+)[A-Z][\w:_]+/.test(word)) {
    stream.backUp(1);
    stream.match(/(^|\s+)[A-Z][\w:_]+/);
    return "def";
  }
  if (resource) {
    stream.match(/(\s+)?[\w:_]+/);
    return "def";
  }
  if (special_resource) {
    stream.match(/(\s+)?[@]{1,2}/);
    return "atom";
  }
  if (ch == "#") {
    stream.skipToEnd();
    return "comment";
  }
  if (ch == "'" || ch == '"') {
    state.pending = ch;
    return tokenString(stream, state);
  }
  if (ch == "{" || ch == "}") {
    return "bracket";
  }
  if (ch == "/") {
    stream.match(/^[^\/]*\//);
    return "string.special";
  }
  if (ch.match(/[0-9]/)) {
    stream.eatWhile(/[0-9]+/);
    return "number";
  }
  if (ch == "=") {
    if (stream.peek() == ">") {
      stream.next();
    }
    return "operator";
  }
  stream.eatWhile(/[\w-]/);
  return null;
}
var puppet = {
  name: "puppet",
  startState: function() {
    var state = {};
    state.inDefinition = false;
    state.inInclude = false;
    state.continueString = false;
    state.pending = false;
    return state;
  },
  token: function(stream, state) {
    if (stream.eatSpace()) return null;
    return tokenize(stream, state);
  }
};
export {
  puppet
};
//# sourceMappingURL=puppet-PGAYADYE.js.map
