if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("queryThenMutateDOM", ["ErrorUtils", "Run", "TimeSlice", "emptyFunction", "gkx", "requestAnimationFrame"], (function(a, b, c, d, e, f) {
    var g, h, i, j = [],
        k = {};

    function l(a, c, d) {
        if (!a && !c) return {
            cancel: b("emptyFunction")
        };
        if (d && Object.prototype.hasOwnProperty.call(k, d)) return {
            cancel: b("emptyFunction")
        };
        else d && (k[d] = 1);
        c = b("TimeSlice").guard(c || b("emptyFunction"), "queryThenMutateDOM mutation callback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        a = b("TimeSlice").guard(a || b("emptyFunction"), "queryThenMutateDOM query callback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        var e = {
            queryFunction: a,
            mutateFunction: c,
            output: null,
            deleted: !1
        };
        j.push(e);
        n();
        h || (h = !0, b("gkx")("708253") || b("Run").onLeave(function() {
            h = !1, i = !1, k = {}, j.length = 0
        }));
        return {
            cancel: function() {
                e.deleted = !0, d && delete k[d]
            }
        }
    }
    l.prepare = function(a, b, c) {
        return function() {
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            e.unshift(this);
            var g = Function.prototype.bind.apply(a, e),
                h = b.bind(this);
            l(g, h, c)
        }
    };
    var m = b("TimeSlice").guard(function() {
        while (j.length) {
            k = {};
            var a = [];
            window.document.body.getClientRects();
            while (j.length) {
                var b = j.shift();
                b.deleted || (b.output = o(b.queryFunction), a.push(b))
            }
            while (a.length) {
                b = a.shift();
                b.deleted || o(b.mutateFunction, null, [b.output])
            }
        }
        i = !1
    }, "queryThenMutateDOM runScheduledQueriesAndMutations", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN
    });

    function n() {
        !i && j.length && (i = !0, b("requestAnimationFrame")(m))
    }

    function o(a, c, d, e, f) {
        return (g || (g = b("ErrorUtils"))).applyWithGuard(a, c, d, e, f)
    }
    e.exports = l
}), null);
__d("getVendorPrefixedName", ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"], (function(a, b, c, d, e, f, g, h) {
    var i = {},
        j = ["Webkit", "ms", "Moz", "O"],
        k = new RegExp("^(" + j.join("|") + ")"),
        l = d("ExecutionEnvironment").canUseDOM ? document.createElement("div").style : {};

    function m(a) {
        for (var b = 0; b < j.length; b++) {
            var c = j[b] + a;
            if (c in l) return c
        }
        return null
    }

    function n(a) {
        switch (a) {
            case "lineClamp":
                return c("UserAgent").isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
            default:
                return null
        }
    }

    function a(a) {
        var b = c("camelize")(a);
        if (i[b] === void 0) {
            var e = b.charAt(0).toUpperCase() + b.slice(1);
            k.test(e) && h(0, 957, a);
            d("ExecutionEnvironment").canUseDOM ? i[b] = b in l ? b : m(e) : i[b] = n(b)
        }
        return i[b]
    }
    g["default"] = a
}), 98);
__d("BrowserSupportCore", ["getVendorPrefixedName"], (function(a, b, c, d, e, f) {
    a = {
        hasCSSAnimations: function() {
            return !!b("getVendorPrefixedName")("animationName")
        },
        hasCSSTransforms: function() {
            return !!b("getVendorPrefixedName")("transform")
        },
        hasCSS3DTransforms: function() {
            return !!b("getVendorPrefixedName")("perspective")
        },
        hasCSSTransitions: function() {
            return !!b("getVendorPrefixedName")("transition")
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("BrowserSupport", ["BrowserSupportCore", "ExecutionEnvironment", "UserAgent_DEPRECATED", "getVendorPrefixedName", "memoize"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function i() {
        if (d("ExecutionEnvironment").canUseDOM) {
            h || (h = document.createElement("div"));
            return h
        }
        return null
    }
    b = function(a) {
        return c("memoize")(function() {
            var b = i();
            return !b ? !1 : a(b)
        })
    };
    e = b(function(a) {
        a.style.cssText = "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
        return /sticky/.test(a.style.position)
    });
    f = b(function(a) {
        return "scrollSnapType" in a.style || "webkitScrollSnapType" in a.style || "msScrollSnapType" in a.style
    });
    var j = b(function(a) {
        return "scrollBehavior" in a.style
    });
    b = b(function(a) {
        if (!("pointerEvents" in a.style)) return !1;
        a.style.cssText = "pointer-events:auto";
        return a.style.pointerEvents === "auto"
    });
    var k = c("memoize")(function() {
            return !(d("UserAgent_DEPRECATED").webkit() && !d("UserAgent_DEPRECATED").chrome() && d("UserAgent_DEPRECATED").windows()) && "FileList" in window && "FormData" in window
        }),
        l = c("memoize")(function() {
            return !!a.blob
        }),
        m = c("memoize")(function() {
            return d("ExecutionEnvironment").canUseDOM && document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "foreignObject").toString().includes("SVGForeignObject")
        }),
        n = c("memoize")(function() {
            return !!window.MutationObserver
        }),
        o = c("memoize")(function() {
            var a = {
                    transition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "mozTransitionEnd",
                    OTransition: "oTransitionEnd"
                },
                b = c("getVendorPrefixedName")("transition");
            return a[b] || null
        }),
        p = function() {
            return !!window.CanvasRenderingContext2D
        };
    g.hasCSSAnimations = c("BrowserSupportCore").hasCSSAnimations;
    g.hasCSSTransforms = c("BrowserSupportCore").hasCSSTransforms;
    g.hasCSS3DTransforms = c("BrowserSupportCore").hasCSS3DTransforms;
    g.hasCSSTransitions = c("BrowserSupportCore").hasCSSTransitions;
    g.hasPositionSticky = e;
    g.hasScrollSnapPoints = f;
    g.hasScrollBehavior = j;
    g.hasPointerEvents = b;
    g.hasFileAPI = k;
    g.hasBlobFactory = l;
    g.hasSVGForeignObject = m;
    g.hasMutationObserver = n;
    g.getTransitionEndEvent = o;
    g.hasCanvasRenderingContext2D = p
}), 98);
__d("ReactFbPropTypes", ["FbtResultBase", "warning"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = function(c, d, e, f, g, h, i) {
                var j = d[e];
                if (j instanceof b("FbtResultBase")) return null;
                if (c) return a.isRequired(d, e, f, g, h, i);
                else return a(d, e, f, g, h, i)
            },
            d = c.bind(null, !1);
        d.isRequired = c.bind(null, !0);
        return d
    }
    f.wrapStringTypeChecker = a
}), null);
__d("fbjs/lib/emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("emptyFunction")
}), null);
__d("fbjs/lib/invariant", ["invariant"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("invariant")
}), null);
__d("fbjs/lib/warning", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("warning")
}), null);
__d("prop-types/lib/ReactPropTypesSecret", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    e.exports = a
}), null);
__d("prop-types/checkPropTypes", ["fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a, b, c, d, e) {}
    e.exports = a
}), null);
__d("prop-types/prop-types", ["fbjs/lib/emptyFunction", "fbjs/lib/invariant", "fbjs/lib/warning", "prop-types/checkPropTypes", "prop-types/lib/ReactPropTypesSecret"], (function(a, b, c, d, e, f) {
    var g, h = function() {
        b("fbjs/lib/invariant")(0, 1492)
    };
    a = function() {
        return h
    };
    h.isRequired = h;
    c = {
        array: h,
        bool: h,
        func: h,
        number: h,
        object: h,
        string: h,
        symbol: h,
        any: h,
        arrayOf: a,
        element: h,
        instanceOf: a,
        node: h,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a
    };
    c.checkPropTypes = b("fbjs/lib/emptyFunction");
    c.PropTypes = c;
    e.exports = c
}), null);
__d("prop-types", ["ReactFbPropTypes", "prop-types/prop-types"], (function(a, b, c, d, e, f) {
    e.exports = b("prop-types/prop-types")
}), null);