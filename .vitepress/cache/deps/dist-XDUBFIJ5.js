import {
  html
} from "./chunk-XIFAY33O.js";
import "./chunk-WS77TBA6.js";
import {
  javascriptLanguage
} from "./chunk-CQODXWBO.js";
import "./chunk-5VHTIHW6.js";
import {
  ExternalTokenizer,
  LRLanguage,
  LRParser,
  LanguageSupport,
  parseMixed,
  styleTags,
  tags
} from "./chunk-HNY5L3CQ.js";
import "./chunk-OL46QLBJ.js";

// node_modules/@codemirror/lang-angular/dist/index.js
var Text = 1;
var attributeContentSingle = 33;
var attributeContentDouble = 34;
var scriptAttributeContentSingle = 35;
var scriptAttributeContentDouble = 36;
var text = new ExternalTokenizer((input) => {
  let start = input.pos;
  for (; ; ) {
    if (input.next == 10) {
      input.advance();
      break;
    } else if (input.next == 123 && input.peek(1) == 123 || input.next < 0) {
      break;
    }
    input.advance();
  }
  if (input.pos > start)
    input.acceptToken(Text);
});
function attrContent(quote, token, script) {
  return new ExternalTokenizer((input) => {
    let start = input.pos;
    while (input.next != quote && input.next >= 0 && (script || input.next != 38 && (input.next != 123 || input.peek(1) != 123)))
      input.advance();
    if (input.pos > start)
      input.acceptToken(token);
  });
}
var attrSingle = attrContent(39, attributeContentSingle, false);
var attrDouble = attrContent(34, attributeContentDouble, false);
var scriptAttrSingle = attrContent(39, scriptAttributeContentSingle, true);
var scriptAttrDouble = attrContent(34, scriptAttributeContentDouble, true);
var parser = LRParser.deserialize({
  version: 14,
  states: "(jOVOqOOOeQpOOOvO!bO'#CaOOOP'#Cx'#CxQVOqOOO!OQpO'#CfO!WQpO'#ClO!]QpO'#CrO!bQpO'#CsOOQO'#Cv'#CvQ!gQpOOQ!lQpOOQ!qQpOOOOOV,58{,58{O!vOpO,58{OOOP-E6v-E6vO!{QpO,59QO#TQpO,59QOOQO,59W,59WO#YQpO,59^OOQO,59_,59_O#_QpOOO#_QpOOO#gQpOOOOOV1G.g1G.gO#oQpO'#CyO#tQpO1G.lOOQO1G.l1G.lO#|QpO1G.lOOQO1G.x1G.xO$UO`O'#DUO$ZOWO'#DUOOQO'#Co'#CoQOQpOOOOQO'#Cu'#CuO$`OtO'#CwO$qOrO'#CwOOQO,59e,59eOOQO-E6w-E6wOOQO7+$W7+$WO%SQpO7+$WO%[QpO7+$WOOOO'#Cp'#CpO%aOpO,59pOOOO'#Cq'#CqO%fOpO,59pOOOS'#Cz'#CzO%kOtO,59cOOQO,59c,59cOOOQ'#C{'#C{O%|OrO,59cO&_QpO<<GrOOQO<<Gr<<GrOOQO1G/[1G/[OOOS-E6x-E6xOOQO1G.}1G.}OOOQ-E6y-E6yOOQOAN=^AN=^",
  stateData: "&d~OvOS~OPROSQOVROWRO~OZTO[XO^VOaUOhWO~OR]OU^O~O[`O^aO~O[bO~O[cO~O[dO~ObeO~ObfO~ObgO~ORhO~O]kOwiO~O[lO~O_mO~OynOzoO~OysOztO~O[uO~O]wOwiO~O_yOwiO~OtzO~Os|O~OSQOV!OOW!OOr!OOy!QO~OSQOV!ROW!ROq!ROz!QO~O_!TOwiO~O]!UO~Oy!VO~Oz!VO~OSQOV!OOW!OOr!OOy!XO~OSQOV!ROW!ROq!ROz!XO~O]!ZO~O",
  goto: "#dyPPPPPzPPPP!WPPPPP!WPP!Z!^!a!d!dP!g!j!m!p!v#Q#WPPPPPPPP#^SROSS!Os!PT!Rt!SRYPRqeR{nR}oRZPRqfR[PRqgQSOR_SQj`SvjxRxlQ!PsR!W!PQ!StR!Y!SQpeRrf",
  nodeNames: "⚠ Text Content }} {{ Interpolation InterpolationContent Entity InvalidEntity Attribute BoundAttributeName [ Identifier ] ( ) ReferenceName # Is ExpressionAttributeValue AttributeInterpolation AttributeInterpolation EventName DirectiveName * StatementAttributeValue AttributeName AttributeValue",
  maxTerm: 42,
  nodeProps: [
    ["openedBy", 3, "{{", 15, "("],
    ["closedBy", 4, "}}", 14, ")"],
    ["isolate", -4, 5, 19, 25, 27, ""]
  ],
  skippedNodes: [0],
  repeatNodeCount: 4,
  tokenData: "0r~RyOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mqr#rrs%jst&Qtv#rvw&hwx)zxy*byz*xz{+`{}#r}!O+v!O!P-]!P!Q#r!Q![+v![!]+v!]!_#r!_!`-s!`!c#r!c!}+v!}#O.Z#O#P#r#P#Q.q#Q#R#r#R#S+v#S#T#r#T#o+v#o#p/X#p#q#r#q#r0Z#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vQ#wTUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rQ$ZSO#q#r#r;'S#r;'S;=`$g<%lO#rQ$jP;=`<%l#rR$t[UQvPOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mq#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR%qTyPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&XTaPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&oXUQWPOp'[pq#rq!]'[!]!^#r!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R'aXUQOp'[pq#rq!]'[!]!^'|!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R(TTVPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR(gXOp'[pq#rq!]'[!]!^'|!^#q'[#q#r)S#r;'S'[;'S;=`)t<%lO'[P)VUOp)Sq!])S!]!^)i!^;'S)S;'S;=`)n<%lO)SP)nOVPP)qP;=`<%l)SR)wP;=`<%l'[R*RTzPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR*iT^PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+PT_PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+gThPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+}b[PUQO}#r}!O+v!O!Q#r!Q![+v![!]+v!]!c#r!c!}+v!}#R#r#R#S+v#S#T#r#T#o+v#o#q#r#q#r$W#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vR-YP;=`<%l+vR-dTwPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR-zTUQbPO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.bTZPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.xT]PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/^VUQO#o#r#o#p/s#p#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/zTSPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#r~0^TO#q#r#q#r0m#r;'S#r;'S;=`$g<%lO#r~0rOR~",
  tokenizers: [text, attrSingle, attrDouble, scriptAttrSingle, scriptAttrDouble, 0, 1],
  topRules: { "Content": [0, 2], "Attribute": [1, 9] },
  tokenPrec: 0
});
var exprParser = javascriptLanguage.parser.configure({
  top: "SingleExpression"
});
var baseParser = parser.configure({
  props: [
    styleTags({
      Text: tags.content,
      Is: tags.definitionOperator,
      AttributeName: tags.attributeName,
      "AttributeValue ExpressionAttributeValue StatementAttributeValue": tags.attributeValue,
      Entity: tags.character,
      InvalidEntity: tags.invalid,
      "BoundAttributeName/Identifier": tags.attributeName,
      "EventName/Identifier": tags.special(tags.attributeName),
      "ReferenceName/Identifier": tags.variableName,
      "DirectiveName/Identifier": tags.keyword,
      "{{ }}": tags.brace,
      "( )": tags.paren,
      "[ ]": tags.bracket,
      "# '*'": tags.punctuation
    })
  ]
});
var exprMixed = { parser: exprParser };
var statementMixed = { parser: javascriptLanguage.parser };
var textParser = baseParser.configure({
  wrap: parseMixed((node, input) => node.name == "InterpolationContent" ? exprMixed : null)
});
var attrParser = baseParser.configure({
  wrap: parseMixed((node, input) => {
    var _a;
    return node.name == "InterpolationContent" ? exprMixed : node.name != "AttributeInterpolation" ? null : ((_a = node.node.parent) === null || _a === void 0 ? void 0 : _a.name) == "StatementAttributeValue" ? statementMixed : exprMixed;
  }),
  top: "Attribute"
});
var textMixed = { parser: textParser };
var attrMixed = { parser: attrParser };
var baseHTML = html();
function mkAngular(language) {
  return language.configure({ wrap: parseMixed(mixAngular) }, "angular");
}
var angularLanguage = mkAngular(baseHTML.language);
function mixAngular(node, input) {
  switch (node.name) {
    case "Attribute":
      return /^[*#(\[]|\{\{/.test(input.read(node.from, node.to)) ? attrMixed : null;
    case "Text":
      return textMixed;
  }
  return null;
}
function angular(config = {}) {
  let base = baseHTML;
  if (config.base) {
    if (config.base.language.name != "html" || !(config.base.language instanceof LRLanguage))
      throw new RangeError("The base option must be the result of calling html(...)");
    base = config.base;
  }
  return new LanguageSupport(base.language == baseHTML.language ? angularLanguage : mkAngular(base.language), [base.support, base.language.data.of({
    closeBrackets: { brackets: ["[", "{", '"'] },
    indentOnInput: /^\s*[\}\]]$/
  })]);
}
export {
  angular,
  angularLanguage
};
//# sourceMappingURL=dist-XDUBFIJ5.js.map
