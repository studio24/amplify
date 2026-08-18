(function() {
  "use strict";
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var tabby_polyfills_min$1 = { exports: {} };
  var tabby_polyfills_min = tabby_polyfills_min$1.exports;
  var hasRequiredTabby_polyfills_min;
  function requireTabby_polyfills_min() {
    if (hasRequiredTabby_polyfills_min) return tabby_polyfills_min$1.exports;
    hasRequiredTabby_polyfills_min = 1;
    (function(module, exports) {
      Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(e) {
        var t = this;
        if (!document.documentElement.contains(this)) return null;
        do {
          if (t.matches(e)) return t;
          t = t.parentElement;
        } while (null !== t);
        return null;
      }), (function(e, t) {
        module.exports = t(e);
      })("undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof window ? window : tabby_polyfills_min, (function(e) {
        var t = { idPrefix: "tabby-toggle_", default: "[data-tabby-default]" }, r = function(t2) {
          if (t2 && "true" != t2.getAttribute("aria-selected")) {
            var r2 = document.querySelector(t2.hash);
            if (r2) {
              var o2 = (function(e2) {
                var t3 = e2.closest('[role="tablist"]');
                if (!t3) return {};
                var r3 = t3.querySelector('[role="tab"][aria-selected="true"]');
                if (!r3) return {};
                var o3 = document.querySelector(r3.hash);
                return r3.setAttribute("aria-selected", "false"), r3.setAttribute("tabindex", "-1"), o3 ? (o3.setAttribute("hidden", "hidden"), { previousTab: r3, previousContent: o3 }) : { previousTab: r3 };
              })(t2);
              !(function(e2, t3) {
                e2.setAttribute("aria-selected", "true"), e2.setAttribute("tabindex", "0"), t3.removeAttribute("hidden"), e2.focus();
              })(t2, r2), o2.tab = t2, o2.content = r2, (function(t3, r3) {
                var o3;
                "function" == typeof e.CustomEvent ? o3 = new CustomEvent("tabby", { bubbles: true, cancelable: true, detail: r3 }) : (o3 = document.createEvent("CustomEvent")).initCustomEvent("tabby", true, true, r3), t3.dispatchEvent(o3);
              })(t2, o2);
            }
          }
        }, o = function(e2, t2) {
          var o2 = (function(e3) {
            var t3 = e3.closest('[role="tablist"]'), r2 = t3 ? t3.querySelectorAll('[role="tab"]') : null;
            if (r2) return { tabs: r2, index: Array.prototype.indexOf.call(r2, e3) };
          })(e2);
          if (o2) {
            var n, i = o2.tabs.length - 1;
            ["ArrowUp", "ArrowLeft", "Up", "Left"].indexOf(t2) > -1 ? n = o2.index < 1 ? i : o2.index - 1 : ["ArrowDown", "ArrowRight", "Down", "Right"].indexOf(t2) > -1 ? n = o2.index === i ? 0 : o2.index + 1 : "Home" === t2 ? n = 0 : "End" === t2 && (n = i), r(o2.tabs[n]);
          }
        };
        return function(n, i) {
          var a, l, u = {};
          u.destroy = function() {
            var e2 = l.querySelectorAll("a");
            Array.prototype.forEach.call(e2, (function(e3) {
              var t2 = document.querySelector(e3.hash);
              t2 && (function(e4, t3, r2) {
                e4.id.slice(0, r2.idPrefix.length) === r2.idPrefix && (e4.id = ""), e4.removeAttribute("role"), e4.removeAttribute("aria-controls"), e4.removeAttribute("aria-selected"), e4.removeAttribute("tabindex"), e4.closest("li").removeAttribute("role"), t3.removeAttribute("role"), t3.removeAttribute("aria-labelledby"), t3.removeAttribute("hidden");
              })(e3, t2, a);
            })), l.removeAttribute("role"), document.documentElement.removeEventListener("click", c, true), l.removeEventListener("keydown", s, true), a = null, l = null;
          }, u.setup = function() {
            if (l = document.querySelector(n)) {
              var e2 = l.querySelectorAll("a");
              l.setAttribute("role", "tablist"), Array.prototype.forEach.call(e2, (function(e3) {
                var t2 = document.querySelector(e3.hash);
                t2 && (function(e4, t3, r2) {
                  e4.id || (e4.id = r2.idPrefix + t3.id), e4.setAttribute("role", "tab"), e4.setAttribute("aria-controls", t3.id), e4.closest("li").setAttribute("role", "presentation"), t3.setAttribute("role", "tabpanel"), t3.setAttribute("aria-labelledby", e4.id), e4.matches(r2.default) ? e4.setAttribute("aria-selected", "true") : (e4.setAttribute("aria-selected", "false"), e4.setAttribute("tabindex", "-1"), t3.setAttribute("hidden", "hidden"));
                })(e3, t2, a);
              }));
            }
          }, u.toggle = function(e2) {
            var t2 = e2;
            "string" == typeof e2 && (t2 = document.querySelector(n + ' [role="tab"][href*="' + e2 + '"]')), r(t2);
          };
          var c = function(e2) {
            var t2 = e2.target.closest(n + ' [role="tab"]');
            t2 && (e2.preventDefault(), r(t2));
          }, s = function(e2) {
            var t2 = document.activeElement;
            t2.matches(n + ' [role="tab"]') && (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Up", "Down", "Left", "Right", "Home", "End"].indexOf(e2.key) < 0 || o(t2, e2.key));
          };
          return a = (function() {
            var e2 = {};
            return Array.prototype.forEach.call(arguments, (function(t2) {
              for (var r2 in t2) {
                if (!t2.hasOwnProperty(r2)) return;
                e2[r2] = t2[r2];
              }
            })), e2;
          })(t, i || {}), u.setup(), (function(t2) {
            if (!(e.location.hash.length < 1)) {
              var o2 = document.querySelector(t2 + ' [role="tab"][href*="' + e.location.hash + '"]');
              r(o2);
            }
          })(n), document.documentElement.addEventListener("click", c, true), l.addEventListener("keydown", s, true), u;
        };
      }));
    })(tabby_polyfills_min$1);
    return tabby_polyfills_min$1.exports;
  }
  var tabby_polyfills_minExports = requireTabby_polyfills_min();
  const Tabby = /* @__PURE__ */ getDefaultExportFromCjs(tabby_polyfills_minExports);
  new Tabby("[data-tabs]");
})();
