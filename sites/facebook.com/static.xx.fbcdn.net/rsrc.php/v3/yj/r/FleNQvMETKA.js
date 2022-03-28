if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("InlineFbtResult", ["cr:1183579"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1183579")
}), 98);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        injectReactShim: function(a) {
            var b = {
                validated: !0
            };
            g ? Object.defineProperty(a, "_store", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: b
            }) : a._store = b
        }
    };
    e.exports = b
}), null);
__d("FbtResultBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        function a(a, b) {
            this.$1 = a, this.__errorListener = b, this.$3 = !1, this.$2 = null
        }
        var b = a.prototype;
        b.flattenToArray = function() {
            return a.flattenToArray(this.$1)
        };
        b.getContents = function() {
            return this.$1
        };
        b.toString = function() {
            if (Object.isFrozen(this)) return this.$4();
            if (this.$3) return "<<Reentering fbt.toString() is forbidden>>";
            this.$3 = !0;
            try {
                return this.$4()
            } finally {
                this.$3 = !1
            }
        };
        b.$4 = function() {
            if (this.$2 != null) return this.$2;
            var b = "",
                c = this.flattenToArray();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                if (typeof e === "string" || e instanceof a) b += e.toString();
                else {
                    var f;
                    (f = this.__errorListener) == null ? void 0 : f.onStringSerializationError == null ? void 0 : f.onStringSerializationError(e)
                }
            }
            Object.isFrozen(this) || (this.$2 = b);
            return b
        };
        b.toJSON = function() {
            return this.toString()
        };
        a.flattenToArray = function(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = b[d];
                Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e)
            }
            return c
        };
        return a
    }();
    ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function(a) {
        g.prototype[a] = function() {
            var b;
            (b = this.__errorListener) == null ? void 0 : b.onStringMethodUsed == null ? void 0 : b.onStringMethodUsed(a);
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return String.prototype[a].apply(this, d)
        }
    });
    e.exports = g
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            d = a.call(this, c, d) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        c.get = function(a) {
            return new c(a.contents, a.errorListener)
        };
        return c
    }(b("FbtResultBase"));
    e.exports = a
}), null);
__d("TransAppInlineMode", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        STRING_MANAGER: "STRING_MANAGER",
        TRANSLATION: "TRANSLATION",
        APPROVE: "APPROVE",
        REPORT: "REPORT",
        NO_INLINE: "NO_INLINE"
    });
    f["default"] = a
}), 66);
__d("getUnwrappedFbt", ["FbtResultGK"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = a.contents;
        var c = b("FbtResultGK").inlineMode,
            d = b("FbtResultGK").shouldReturnFbtResult;
        if (!d && c !== "REPORT") return (a == null ? void 0 : a.length) === 1 && typeof a[0] === "string" ? a[0] : a
    }
    e.exports = a
}), null);
__d("getFbtResult", ["FbtResult", "FbtResultGK", "InlineFbtResult", "getUnwrappedFbt", "gkx", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    if (c("gkx")("708253") && c("FbtResultGK").inlineMode === "TRANSLATION") {
        c("recoverableViolation")("TransAppInlineMode=TRANSLATION should not happen on Comet yet. " + ("[inlineMode=" + ((b = c("FbtResultGK").inlineMode) != null ? b : "") + "]") + ("[runtime_site_is_comet=" + String(c("gkx")("708253")) + "]"), "internationalization")
    }

    function a(a) {
        var b = c("getUnwrappedFbt")(a);
        if (b != null) return b;
        b = a.contents;
        var d = a.patternString,
            e = a.patternHash;
        return c("FbtResultGK").inlineMode != null && c("FbtResultGK").inlineMode !== "NO_INLINE" ? new(c("InlineFbtResult"))(b, c("FbtResultGK").inlineMode, d, e) : c("FbtResult").get(a)
    }
    g["default"] = a
}), 98);
__d("FbtErrorListenerWWW", ["FBLogger", "killswitch"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$1 = a.hash, this.$2 = a.translation
        }
        var b = a.prototype;
        b.onStringSerializationError = function(a) {
            var b = "Context not logged.";
            if (!c("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                var d = JSON.stringify(a);
                d != null && (b = d.substr(0, 250))
            } catch (a) {
                b = a.message
            }
            d = (a == null ? void 0 : (d = a.constructor) == null ? void 0 : d.name) || "";
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix('Converting to a string will drop content data. Hash="%s" Translation="%s" Content="%s" (type=%s,%s)', this.$1, this.$2, b, typeof a, d)
        };
        b.onStringMethodUsed = function(a) {
            c("FBLogger")("fbt").blameToPreviousDirectory().blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FbtPureStringResult", ["FbtResult"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("FbtResult"));
    e.exports = a
}), null);
__d("getFbsResult", ["FbtPureStringResult"], (function(a, b, c, d, e, f) {
    function a(a) {
        return new(b("FbtPureStringResult"))(a.contents, a.errorListener)
    }
    e.exports = a
}), null);
__d("getTranslatedInput", [], (function(a, b, c, d, e, f) {
    var g = "B!N@$T",
        h = {};

    function a(a) {
        var b = a.table;
        typeof b === "string" && b.startsWith(g) && (b in h || (h[b] = JSON.parse(b.substring(g.length))), b = h[b]);
        return {
            table: b,
            args: a.args
        }
    }
    f["default"] = a
}), 66);
__d("translationOverrideListener", ["requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");

    function a(a) {
        h.onReady(function(b) {
            return b.log(function() {
                return {
                    hash: a
                }
            })
        })
    }
    g["default"] = a
}), 98);
__d("FbtEnv", ["FbtErrorListenerWWW", "FbtHooks", "IntlViewerContext", "getFbsResult", "getFbtResult", "getTranslatedInput", "promiseDone", "requireDeferred", "translationOverrideListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = c("requireDeferred")("FbtLogging").__setRef("FbtEnv"),
        j = !1;

    function a() {
        if (j) return;
        j = !0;
        (h || (h = b("FbtHooks"))).register({
            errorListener: function(a) {
                return new(c("FbtErrorListenerWWW"))(a)
            },
            getFbsResult: c("getFbsResult"),
            getFbtResult: c("getFbtResult"),
            getTranslatedInput: c("getTranslatedInput"),
            onTranslationOverride: c("translationOverrideListener"),
            getViewerContext: function() {
                return c("IntlViewerContext")
            },
            logImpression: function(a) {
                return c("promiseDone")(i.load().then(function(b) {
                    return b.logImpression == null ? void 0 : b.logImpression(a)
                }))
            }
        })
    }
    g.setupOnce = a
}), 98);
__d("FbtHooksImpl", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getErrorListener: function(a) {
            return g.errorListener == null ? void 0 : g.errorListener(a)
        },
        logImpression: function(a) {
            g.logImpression == null ? void 0 : g.logImpression(a)
        },
        onTranslationOverride: function(a) {
            g.onTranslationOverride == null ? void 0 : g.onTranslationOverride(a)
        },
        getFbsResult: function(a) {
            return g.getFbsResult(a)
        },
        getFbtResult: function(a) {
            return g.getFbtResult(a)
        },
        getTranslatedInput: function(a) {
            var b;
            return (b = g.getTranslatedInput == null ? void 0 : g.getTranslatedInput(a)) != null ? b : a
        },
        getViewerContext: function() {
            return g.getViewerContext()
        },
        register: function(a) {
            Object.assign(g, a)
        }
    };
    e.exports = a
}), null);
__d("FbtHooks", ["FbtEnv", "FbtHooksImpl"], (function(a, b, c, d, e, f) {
    e.exports = b("FbtHooksImpl"), b("FbtEnv").setupOnce()
}), null);
__d("getAsyncHeaders", ["LSD", "ZeroCategoryHeader", "isFacebookURI", "killswitch"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = {},
            d = c("isFacebookURI")(a);
        d && c("ZeroCategoryHeader").value && (b[c("ZeroCategoryHeader").header] = c("ZeroCategoryHeader").value);
        d = h(a);
        d && (b["X-FB-LSD"] = d);
        return b
    }

    function h(a) {
        if (c("killswitch")("SAF_JS_FB_X_LSD_HEADER")) return null;
        return !a.toString().startsWith("/") && a.getOrigin() !== document.location.origin ? null : c("LSD").token
    }
    g["default"] = a
}), 98);
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
    f["default"] = a
}), 66);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b;
        b = a == null ? void 0 : (b = a.ownerDocument) == null ? void 0 : b.documentElement;
        return !a || !("getBoundingClientRect" in a) || !c("containsNode")(b, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : c("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
    }
    g["default"] = a
}), 98);
__d("EventListener", ["cr:1353359"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1353359")
}), 98);
__d("InlineFbtResultImpl", ["cx", "FbtHooks", "FbtReactUtil", "FbtResultBase"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b, c, e) {
        var f = "_4qba";
        e != null && e != "" && (b === "TRANSLATION" ? f = "_4qbb" : b === "APPROVE" ? f = "_4qbc" : b === "REPORT" && (f = "_4qbd"));
        return {
            $$typeof: d("FbtReactUtil").REACT_ELEMENT_TYPE,
            type: "em",
            key: null,
            ref: null,
            props: {
                className: f,
                "data-intl-hash": e,
                "data-intl-translation": c,
                "data-intl-trid": "",
                children: a,
                suppressHydrationWarning: !0
            },
            _owner: null
        }
    }
    var j = function(a) {
        return i(a.content, a.inlineMode, a.translation, a.hash)
    };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g) {
            var h;
            h = a.call(this, b, c("FbtHooks").getErrorListener({
                translation: f,
                hash: g
            })) || this;
            h.$$typeof = d("FbtReactUtil").REACT_ELEMENT_TYPE;
            h.key = null;
            h.ref = null;
            h.type = j;
            h.props = {
                content: b,
                inlineMode: e,
                translation: f,
                hash: g
            };
            return h
        }
        return b
    }(c("FbtResultBase"));
    g["default"] = a
}), 98);
__d("LogHistory", [], (function(a, b, c, d, e, f) {
    var g = 500,
        h = {},
        i = [];

    function j(a, b, c, d) {
        var e = d[0];
        if (typeof e !== "string" || d.length !== 1) return;
        i.push({
            date: Date.now(),
            level: a,
            category: b,
            event: c,
            args: e
        });
        i.length > g && i.shift()
    }
    var k = function() {
        function a(a) {
            this.category = a
        }
        var b = a.prototype;
        b.debug = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("debug", this.category, a, c);
            return this
        };
        b.log = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("log", this.category, a, c);
            return this
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("warn", this.category, a, c);
            return this
        };
        b.error = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("error", this.category, a, c);
            return this
        };
        return a
    }();

    function a(a) {
        h[a] || (h[a] = new k(a));
        return h[a]
    }

    function b() {
        return i
    }

    function c() {
        i.length = 0
    }

    function d(a) {
        return a.map(function(a) {
            var b = /\d\d:\d\d:\d\d/.exec(new Date(a.date).toString());
            return [b && b[0], a.level, a.category, a.event, a.args].join(" | ")
        }).join("\n")
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d
}), 66);
__d("SchedulerFeatureFlags", ["gkx", "qex"], (function(a, b, c, d, e, f, g) {
    var h;
    a = !0;
    b = c("gkx")("1099893");
    e = (d = c("qex")._("648")) != null ? d : c("gkx")("5541");
    f = e;
    d = 5;
    h = (h = c("qex")._("650")) != null ? h : 10;
    c = (c = c("qex")._("651")) != null ? c : 10;
    g.enableSchedulerDebugging = a;
    g.enableProfiling = b;
    g.enableIsInputPending = e;
    g.enableIsInputPendingContinuous = f;
    g.frameYieldMs = d;
    g.continuousYieldMs = h;
    g.maxYieldMs = c
}), 98);
__d("Scheduler-dev.classic", ["SchedulerFeatureFlags"], (function(a, b, c, d, e, f) {
    "use strict"
}), null);
__d("Scheduler-profiling.classic", ["SchedulerFeatureFlags"], (function(b, c, d, e, f, g) {
    "use strict";
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var h = c("SchedulerFeatureFlags").enableIsInputPending,
        i = c("SchedulerFeatureFlags").enableSchedulerDebugging,
        j = c("SchedulerFeatureFlags").enableProfiling;
    e = c("SchedulerFeatureFlags").enableIsInputPendingContinuous;
    var k = c("SchedulerFeatureFlags").frameYieldMs,
        l = c("SchedulerFeatureFlags").continuousYieldMs,
        m = c("SchedulerFeatureFlags").maxYieldMs;

    function n(b, c) {
        var d = b.length;
        b.push(c);
        a: for (; 0 < d;) {
            var e = d - 1 >>> 1,
                f = b[e];
            if (0 < q(f, c)) b[e] = c, b[d] = f, d = e;
            else break a
        }
    }

    function o(b) {
        return 0 === b.length ? null : b[0]
    }

    function p(b) {
        if (0 === b.length) return null;
        var c = b[0],
            d = b.pop();
        if (d !== c) {
            b[0] = d;
            a: for (var e = 0, f = b.length, g = f >>> 1; e < g;) {
                var h = 2 * (e + 1) - 1,
                    i = b[h],
                    j = h + 1,
                    k = b[j];
                if (0 > q(i, d)) j < f && 0 > q(k, i) ? (b[e] = k, b[j] = d, e = j) : (b[e] = i, b[h] = d, e = h);
                else if (j < f && 0 > q(k, d)) b[e] = k, b[j] = d, e = j;
                else break a
            }
        }
        return c
    }

    function q(b, c) {
        var d = b.sortIndex - c.sortIndex;
        return 0 !== d ? d : b.id - c.id
    }
    var r = 0,
        s = 0,
        t = 0,
        u = null,
        v = null,
        w = 0;

    function x(b) {
        if (null !== v) {
            var c = w;
            w += b.length;
            if (w + 1 > t) {
                t *= 2;
                if (524288 < t) {
                    y();
                    return
                }
                var d = new Int32Array(4 * t);
                d.set(v);
                u = d.buffer;
                v = d
            }
            v.set(b, c)
        }
    }

    function b() {
        t = 131072, u = new ArrayBuffer(4 * t), v = new Int32Array(u), w = 0
    }

    function y() {
        var b = u;
        t = 0;
        v = u = null;
        w = 0;
        return b
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var z = performance;
        g.unstable_now = function() {
            return z.now()
        }
    } else {
        var A = Date,
            B = A.now();
        g.unstable_now = function() {
            return A.now() - B
        }
    }
    var C = [],
        D = [],
        ba = 1,
        E = !1;
    d = null;
    var F = 3,
        G = !1,
        H = !1,
        I = !1,
        J = "function" === typeof setTimeout ? setTimeout : null,
        K = "function" === typeof clearTimeout ? clearTimeout : null,
        L = "undefined" !== typeof setImmediate ? setImmediate : null,
        M = "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending ? navigator.scheduling.isInputPending.bind(navigator.scheduling) : null,
        ca = {
            includeContinuous: e
        };

    function N(b) {
        for (var c = o(D); null !== c;) {
            if (null === c.callback) p(D);
            else if (c.startTime <= b) p(D), c.sortIndex = c.expirationTime, n(C, c), j && (j && null !== v && x([1, 1e3 * b, c.id, c.priorityLevel]), c.isQueued = !0);
            else break;
            c = o(D)
        }
    }

    function O(b) {
        I = !1;
        N(b);
        if (!H)
            if (null !== o(C)) H = !0, $(P);
            else {
                var c = o(D);
                null !== c && aa(O, c.startTime - b)
            }
    }

    function P(c, b) {
        j && j && null !== v && x([8, 1e3 * b, s]);
        H = !1;
        I && (I = !1, K(T), T = -1);
        G = !0;
        var e = F;
        try {
            if (j) try {
                return Q(c, b)
            } catch (b) {
                if (null !== d) {
                    var f = g.unstable_now();
                    j && null !== v && x([3, 1e3 * f, d.id]);
                    d.isQueued = !1
                }
                throw b
            } else return Q(c, b)
        } finally {
            d = null, F = e, G = !1, j && (c = g.unstable_now(), j && (s++, null !== v && x([7, 1e3 * c, s])))
        }
    }

    function Q(c, b) {
        N(b);
        for (d = o(C); !(null === d || i && E || d.expirationTime > b && (!c || X()));) {
            var e = d.callback;
            if ("function" === typeof e) {
                d.callback = null;
                F = d.priorityLevel;
                var f = d.expirationTime <= b;
                if (j) {
                    var h = d;
                    j && (r++, null !== v && x([5, 1e3 * b, h.id, r]))
                }
                e = e(f);
                b = g.unstable_now();
                "function" === typeof e ? (d.callback = e, j && j && null !== v && x([6, 1e3 * b, d.id, r])) : (j && (j && null !== v && x([2, 1e3 * b, d.id]), d.isQueued = !1), d === o(C) && p(C));
                N(b)
            } else p(C);
            d = o(C)
        }
        if (null !== d) return !0;
        c = o(D);
        null !== c && aa(O, c.startTime - b);
        return !1
    }
    var R = !1,
        S = null,
        T = -1,
        U = k,
        V = -1,
        W = !1;

    function X() {
        var b = g.unstable_now() - V;
        if (b < U) return !1;
        if (h) {
            if (W) return !0;
            if (b < l) {
                if (null !== M) return M()
            } else if (b < m && null !== M) return M(ca)
        }
        return !0
    }

    function Y() {
        if (null !== S) {
            var b = g.unstable_now();
            V = b;
            var c = !0;
            try {
                c = S(!0, b)
            } finally {
                c ? Z() : (R = !1, S = null)
            }
        } else R = !1;
        W = !1
    }
    var Z;
    if ("function" === typeof L) Z = function() {
        L(Y)
    };
    else if ("undefined" !== typeof MessageChannel) {
        f = new MessageChannel();
        var da = f.port2;
        f.port1.onmessage = Y;
        Z = function() {
            da.postMessage(null)
        }
    } else Z = function() {
        J(Y, 0)
    };

    function $(b) {
        S = b, R || (R = !0, Z())
    }

    function aa(b, c) {
        T = J(function() {
            b(g.unstable_now())
        }, c)
    }
    c = j ? {
        startLoggingProfilingEvents: b,
        stopLoggingProfilingEvents: y
    } : null;
    g.unstable_IdlePriority = 5;
    g.unstable_ImmediatePriority = 1;
    g.unstable_LowPriority = 4;
    g.unstable_NormalPriority = 3;
    g.unstable_Profiling = c;
    g.unstable_UserBlockingPriority = 2;
    g.unstable_cancelCallback = function(b) {
        if (j && b.isQueued) {
            var c = g.unstable_now();
            j && null !== v && x([4, 1e3 * c, b.id]);
            b.isQueued = !1
        }
        b.callback = null
    };
    g.unstable_continueExecution = function() {
        E = !1, H || G || (H = !0, $(P))
    };
    g.unstable_forceFrameRate = function(b) {
        0 > b || 125 < b ? !1 : U = 0 < b ? Math.floor(1e3 / b) : k
    };
    g.unstable_getCurrentPriorityLevel = function() {
        return F
    };
    g.unstable_getFirstCallbackNode = function() {
        return o(C)
    };
    g.unstable_next = function(b) {
        switch (F) {
            case 1:
            case 2:
            case 3:
                var c = 3;
                break;
            default:
                c = F
        }
        var d = F;
        F = c;
        try {
            return b()
        } finally {
            F = d
        }
    };
    g.unstable_pauseExecution = function() {
        E = !0
    };
    g.unstable_requestPaint = function() {
        h && void 0 !== navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && (W = !0)
    };
    g.unstable_runWithPriority = function(b, c) {
        switch (b) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                b = 3
        }
        var d = F;
        F = b;
        try {
            return c()
        } finally {
            F = d
        }
    };
    g.unstable_scheduleCallback = function(b, c, d) {
        var e = g.unstable_now();
        "object" === typeof d && null !== d ? (d = d.delay, d = "number" === typeof d && 0 < d ? e + d : e) : d = e;
        switch (b) {
            case 1:
                var f = -1;
                break;
            case 2:
                f = 250;
                break;
            case 5:
                f = 1073741823;
                break;
            case 4:
                f = 1e4;
                break;
            default:
                f = 5e3
        }
        f = d + f;
        b = {
            id: ba++,
            callback: c,
            priorityLevel: b,
            startTime: d,
            expirationTime: f,
            sortIndex: -1
        };
        j && (b.isQueued = !1);
        d > e ? (b.sortIndex = d, n(D, b), null === o(C) && b === o(D) && (I ? (K(T), T = -1) : I = !0, aa(O, d - e))) : (b.sortIndex = f, n(C, b), j && (j && null !== v && x([1, 1e3 * e, b.id, b.priorityLevel]), b.isQueued = !0), H || G || (H = !0, $(P)));
        return b
    };
    g.unstable_shouldYield = X;
    g.unstable_wrapCallback = function(b) {
        var c = F;
        return function() {
            var d = F;
            F = c;
            try {
                return b.apply(this, arguments)
            } finally {
                F = d
            }
        }
    };
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error())
}), null);
__d("SchedulerFb-Internals_DO_NOT_USE", ["Scheduler-dev.classic", "Scheduler-profiling.classic", "ifRequireable", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    "use strict";
    a.requestAnimationFrame === void 0 && (a.requestAnimationFrame = b("requestAnimationFramePolyfill"));
    var g;
    g = b("Scheduler-profiling.classic");
    e.exports = {
        unstable_ImmediatePriority: g.unstable_ImmediatePriority,
        unstable_UserBlockingPriority: g.unstable_UserBlockingPriority,
        unstable_NormalPriority: g.unstable_NormalPriority,
        unstable_LowPriority: g.unstable_LowPriority,
        unstable_IdlePriority: g.unstable_IdlePriority,
        unstable_getCurrentPriorityLevel: g.unstable_getCurrentPriorityLevel,
        unstable_runWithPriority: g.unstable_runWithPriority,
        unstable_now: g.unstable_now,
        unstable_scheduleCallback: function(a, c, d) {
            var e = b("ifRequireable")("TimeSlice", function(a) {
                return a.guard(c, "unstable_scheduleCallback", {
                    propagationType: a.PropagationType.CONTINUATION,
                    registerCallStack: !0
                })
            }, function() {
                return c
            });
            a = g.unstable_scheduleCallback(a, e, d);
            return a
        },
        unstable_cancelCallback: function(a) {
            return g.unstable_cancelCallback(a)
        },
        unstable_wrapCallback: function(a) {
            var c = b("ifRequireable")("TimeSlice", function(b) {
                return b.guard(a, "unstable_wrapCallback", {
                    propagationType: b.PropagationType.CONTINUATION,
                    registerCallStack: !0
                })
            }, function() {
                return a
            });
            return g.unstable_wrapCallback(c)
        },
        unstable_pauseExecution: function() {
            return g.unstable_pauseExecution()
        },
        unstable_continueExecution: function() {
            return g.unstable_continueExecution()
        },
        unstable_shouldYield: g.unstable_shouldYield,
        unstable_requestPaint: g.unstable_requestPaint,
        unstable_forceFrameRate: g.unstable_forceFrameRate,
        unstable_Profiling: g.unstable_Profiling
    }
}), null);
__d("scheduler", ["SchedulerFb-Internals_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("SchedulerFb-Internals_DO_NOT_USE")
}), null);
__d("cancelAnimationFramePolyfill", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeCancelAnimationFrame || a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.oCancelAnimationFrame || a.msCancelAnimationFrame || a.clearTimeout;
    c = b;
    f["default"] = c
}), 66);
__d("cancelAnimationFrame", ["cancelAnimationFramePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        c("cancelAnimationFramePolyfill")(a)
    }
    g["default"] = a
}), 98);