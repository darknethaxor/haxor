if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("SubscriptionsHandler", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose
    }

    function j(a) {
        i(a).call(a)
    }
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.addSubscriptions = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            b.every(i) || h(0, 3659);
            this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(j)
        };
        b.engage = function() {
            this.$1 == null && (this.$1 = [])
        };
        b.release = function() {
            this.$1 != null && (this.$1.forEach(j), this.$1 = null)
        };
        b.releaseOne = function(a) {
            var b = this.$1;
            if (b == null) return;
            var c = b.indexOf(a);
            c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("joinClasses", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a || "",
            c = arguments.length <= 1 ? 0 : arguments.length - 1;
        for (var d = 0; d < c; d++) {
            var e = d + 1 < 1 || arguments.length <= d + 1 ? void 0 : arguments[d + 1];
            e != null && e !== "" && (b = (b ? b + " " : "") + e)
        }
        return b
    }
    f["default"] = a
}), 66);
__d("WebPixelRatio", ["SiteData"], (function(a, b, c, d, e, f, g) {
    function a() {
        return c("SiteData").pr != null && c("SiteData").pr > 0 ? c("SiteData").pr : window.devicePixelRatio || 1
    }
    g.get = a
}), 98);
__d("qpl", ["QPLHasteSupportDataStorage", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};
    a = {
        _: function(a, b) {
            var d = h[b];
            if (d == null) {
                var e = c("QPLHasteSupportDataStorage").get(b);
                e == null ? (c("recoverableViolation")("Failed to find a Haste-supplied config for the QPL event " + ("identified by token `" + b + "`."), "staticresources"), d = {
                    i: a
                }) : d = babelHelpers["extends"]({
                    i: a
                }, e);
                h[b] = d
            }
            return d
        }
    };
    b = a;
    g["default"] = b
}), 98);