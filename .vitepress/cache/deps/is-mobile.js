import {
  __commonJS
} from "./chunk-OL46QLBJ.js";

// node_modules/is-mobile/index.js
var require_is_mobile = __commonJS({
  "node_modules/is-mobile/index.js"(exports, module) {
    module.exports = isMobile;
    module.exports.isMobile = isMobile;
    module.exports.default = isMobile;
    var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var notMobileRE = /CrOS/;
    var tabletRE = /android|ipad|playbook|silk/i;
    function isMobile(opts) {
      if (!opts) opts = {};
      let ua = opts.ua;
      if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;
      if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
        ua = ua.headers["user-agent"];
      }
      if (typeof ua !== "string") return false;
      let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
      if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
        result = true;
      }
      return result;
    }
  }
});
export default require_is_mobile();
//# sourceMappingURL=is-mobile.js.map
