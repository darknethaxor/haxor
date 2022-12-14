if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

"use strict";
(function() {
    var a = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    if (typeof a.AbortController !== "undefined") return;
    var b = function() {
            function a() {
                this.__listeners = new Map()
            }
            a.prototype = Object.create(Object.prototype);
            a.prototype.addEventListener = function(a, b, c) {
                if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
                var d = this.__listeners,
                    e = a.toString();
                d.has(e) || d.set(e, new Map());
                var f = d.get(e);
                f.has(b) || f.set(b, c)
            };
            a.prototype.removeEventListener = function(a, b, c) {
                if (arguments.length < 2) throw new TypeError("TypeError: Failed to execute 'addEventListener' on 'CustomEventTarget': 2 arguments required, but only " + arguments.length + " present.");
                var d = this.__listeners,
                    e = a.toString();
                if (d.has(e)) {
                    var f = d.get(e);
                    f.has(b) && f["delete"](b)
                }
            };
            a.prototype.dispatchEvent = function(a) {
                if (!(a instanceof Event)) throw new TypeError("Failed to execute 'dispatchEvent' on 'CustomEventTarget': parameter 1 is not of type 'Event'.");
                var b = a.type,
                    c = this.__listeners;
                c = c.get(b);
                if (c)
                    for (var b = c.entries(), d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= b.length) break;
                            f = b[e++]
                        } else {
                            e = b.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        var g = f[0];
                        f = f[1];
                        try {
                            typeof g === "function" ? g.call(this, a) : g && typeof g.handleEvent === "function" && g.handleEvent(a)
                        } catch (a) {
                            setTimeout(function() {
                                throw a
                            })
                        }
                        f && f.once && c["delete"](g)
                    }
                return !0
            };
            return a
        }(),
        c = {};
    a.AbortSignal = function() {
        function a(a) {
            if (a !== c) throw new TypeError("Illegal constructor.");
            b.call(this);
            this._aborted = !1
        }
        a.prototype = Object.create(b.prototype);
        a.prototype.constructor = a;
        Object.defineProperty(a.prototype, "onabort", {
            get: function() {
                return this._onabort
            },
            set: function(a) {
                var b = this._onabort;
                b && this.removeEventListener("abort", b);
                this._onabort = a;
                this.addEventListener("abort", a)
            }
        });
        Object.defineProperty(a.prototype, "aborted", {
            get: function() {
                return this._aborted
            }
        });
        return a
    }();
    a.AbortController = function() {
        function a() {
            this._signal = new AbortSignal(c)
        }
        a.prototype = Object.create(Object.prototype);
        Object.defineProperty(a.prototype, "signal", {
            get: function() {
                return this._signal
            }
        });
        a.prototype.abort = function() {
            var a = this.signal;
            a.aborted || (a._aborted = !0, a.dispatchEvent(new Event("abort")))
        };
        return a
    }()
})();



"use strict";
(function() {
    if (!Array.prototype.flat) {
        var a = function b(a) {
            return a < 1 ? Array.prototype.slice.call(this) : Array.prototype.reduce.call(this, function(c, d) {
                Array.isArray(d) ? c.push.apply(c, b.call(d, a - 1)) : c.push(d);
                return c
            }, [])
        };
        Array.prototype.flat = function() {
            return a.call(this, isNaN(arguments[0]) ? 1 : Number(arguments[0]))
        }
    }
    if (!Array.prototype.flatMap) {
        var b = function(a, b) {
            var c = [];
            if (typeof b !== "function") throw new TypeError("Callback function must be callable.");
            for (var d = 0; d < a.length; d++) {
                var e = b.call(a, a[d], d, a);
                Array.isArray(e) ? c.push.apply(c, e) : c.push(e)
            }
            return c
        };
        Array.prototype.flatMap = function(a) {
            var c = arguments[1] || this;
            return b(c, a)
        }
    }
})();


(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
    if (!Array.prototype.values) {
        var e = typeof Symbol === "function" ? Symbol.iterator : "@@iterator",
            f = function() {
                function a(a) {
                    this.$1 = void 0;
                    this.$2 = 0;
                    if (a == null) throw new TypeError("Cannot convert undefined or null to object");
                    this.$1 = Object(a)
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null || this.$2 >= this.$1.length) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var a = this.$1[this.$2];
                    this.$2++;
                    return {
                        value: a,
                        done: !1
                    }
                };
                b[e] = function() {
                    return this
                };
                return a
            }();
        Array.prototype.values = function() {
            return new f(this)
        }
    }
    Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] || (Array.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = Array.prototype.values)
})();
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        };
    g = function(b, c, d, e, f) {
        if (f) {
            f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
            e = f.callId;
            a[e] = (a[e] || 0) + 1
        }
        return d.apply(b, c)
    };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = g, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = f : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};
self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);





"use strict";
(function() {
    if (typeof Element === "undefined" || Element.prototype.scroll) return;

    function a(a, b) {
        b === void 0 && (b = !1);
        if (a.length === 0) return;
        var c = a[0],
            d = a[1];
        c = Number(c) || 0;
        d = Number(d) || 0;
        if (a.length === 1) {
            a = a[0];
            if (a == null) return;
            c = a.left;
            d = a.top;
            c !== void 0 && (c = Number(c) || 0);
            d !== void 0 && (d = Number(d) || 0)
        }
        c !== void 0 && (this.scrollLeft = (b ? this.scrollLeft : 0) + c);
        d !== void 0 && (this.scrollTop = (b ? this.scrollTop : 0) + d)
    }
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
        a.call(this, arguments)
    };
    Element.prototype.scrollBy = function() {
        a.call(this, arguments, !0)
    }
})();


typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    typeof Object.fromEntries !== "function" && (Object.fromEntries = function(a) {
        var b = {};
        for (var a = a, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var e;
            if (c) {
                if (d >= a.length) break;
                e = a[d++]
            } else {
                d = a.next();
                if (d.done) break;
                e = d.value
            }
            e = e;
            var f = e[0];
            e = e[1];
            b[f] = e
        }
        return b
    });
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});




"use strict";
(function(a) {
    function b() {
        if (typeof URL !== "function") return !1;
        if (typeof URL.createObjectURL !== "function" || typeof URL.revokeObjectURL !== "function") return !1;
        return typeof File !== "function" || typeof Blob !== "function" ? !1 : !0
    }
    a = a && a.Env || {};
    if (!a.gk_instrument_object_url) return;
    if (!b()) return;
    var c = {},
        d = URL.createObjectURL,
        e = URL.revokeObjectURL;
    URL.createObjectURL = function(a) {
        var b = null,
            e = 0;
        a instanceof File ? (b = "File", e = a.size) : a instanceof Blob ? (b = "Blob", e = a.size) : typeof MediaSource === "function" && a instanceof MediaSource && (b = "MediaSource", e = 0);
        a = d.call(URL, a);
        b !== null && (c[a] = {
            type: b,
            size: e
        });
        return a
    };
    URL.revokeObjectURL = function(a) {
        e.call(URL, a), delete c[a]
    };
    URL._fbRegisteredObjectURL = function() {
        return Object.values(c)
    }
})(this);
(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    typeof Symbol !== "undefined" && !(typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"));

    function d(a) {
        this.wrapped = a
    }

    function e(a) {
        var b, c;

        function e(a, d) {
            return new Promise(function(e, g) {
                e = {
                    key: a,
                    arg: d,
                    resolve: e,
                    reject: g,
                    next: null
                };
                c ? c = c.next = e : (b = c = e, f(a, d))
            })
        }

        function f(b, c) {
            try {
                var e = a[b](c);
                c = e.value;
                var h = c instanceof d;
                Promise.resolve(h ? c.wrapped : c).then(function(a) {
                    if (h) {
                        f(b === "return" ? "return" : "next", a);
                        return
                    }
                    g(e.done ? "return" : "normal", a)
                }, function(a) {
                    f("throw", a)
                })
            } catch (a) {
                g("throw", a)
            }
        }

        function g(a, d) {
            switch (a) {
                case "return":
                    b.resolve({
                        value: d,
                        done: !0
                    });
                    break;
                case "throw":
                    b.reject(d);
                    break;
                default:
                    b.resolve({
                        value: d,
                        done: !1
                    });
                    break
            }
            b = b.next;
            b ? f(b.key, b.arg) : c = null
        }
        this._invoke = e;
        typeof a["return"] !== "function" && (this["return"] = void 0)
    }
    typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") && (e.prototype[typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator"] = function() {
        return this
    });
    e.prototype.next = function(a) {
        return this._invoke("next", a)
    };
    e.prototype["throw"] = function(a) {
        return this._invoke("throw", a)
    };
    e.prototype["return"] = function(a) {
        return this._invoke("return", a)
    };
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        return new(Function.prototype.bind.apply(a, [null].concat(b)))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind;
    b.wrapAsyncGenerator = function(a) {
        return function() {
            return new e(a.apply(this, arguments))
        }
    };
    b.awaitAsyncGenerator = function(a) {
        return new d(a)
    };
    b.asyncIterator = function(a) {
        var b;
        if (typeof Symbol !== "undefined") {
            if (typeof Symbol === "function" ? Symbol.asyncIterator : "@@asyncIterator") {
                b = a[Symbol.asyncIterator];
                if (b != null) return b.call(a)
            }
            if (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") {
                b = a[Symbol.iterator];
                if (b != null) return b.call(a)
            }
        }
        throw new TypeError("Object is not async iterable")
    };
    b.asyncGeneratorDelegate = function(a, b) {
        var c = {},
            d = !1;

        function e(c, e) {
            d = !0;
            e = new Promise(function(b) {
                b(a[c](e))
            });
            return {
                done: !1,
                value: b(e)
            }
        }
        typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") && (c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
            return this
        });
        c.next = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("next", a)
        };
        typeof a["throw"] === "function" && (c["throw"] = function(a) {
            if (d) {
                d = !1;
                throw a
            }
            return e("throw", a)
        });
        typeof a["return"] === "function" && (c["return"] = function(a) {
            if (d) {
                d = !1;
                return a
            }
            return e("return", a)
        });
        return c
    }
})(typeof global === "undefined" ? self : global);

(function(a) {
    if (a.require != null) return;
    var b = null,
        c = null,
        d = [],
        e = {},
        f = {},
        g = 0,
        h = 0,
        i = 0,
        j = 0,
        k = 0,
        l = 1,
        m = 2,
        n = 4,
        o = 8,
        p = 16,
        aa = 32,
        ba = 64,
        ca = {},
        q = {},
        r = Object.prototype.hasOwnProperty,
        s = Object.prototype.toString;

    function t(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || T(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], T(g) || a.push(g.id)
        }
        for (d in b) r.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            d = f ? f.dependencies : null;
            if (!f || !d) h += " is not defined";
            else if (T(f)) h += " is ready";
            else {
                f = [];
                for (var i = 0; i < d.length; i++) g = d[i], T(g) || f.push(g.id);
                h += " is waiting for " + f.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function u(b) {
        var a = new Error(b);
        a.name = "ModuleError";
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [2, 2];
        return a
    }
    $ = a.Env || {};
    var v = !!$.gk_nonjs_deps_in_require,
        w = !!$.gk_requirelazy_mem,
        x = !!$.gk_require_when_ready_in_order,
        y = !!$.profile_require_factories,
        z = a.performance || {},
        A;
    if (z.now && z.timing && z.timing.navigationStart) {
        var da = z.timing.navigationStart;
        A = function() {
            return z.now() + da
        }
    } else A = function() {
        return Date.now()
    };
    var B = 0;

    function C(a) {
        B++;
        var b = e[a];
        (!b || b.exports == null) && (H(a), b = e[a]);
        b && b.refcount-- === 1 && (e[a] = null);
        return b
    }

    function D(a) {
        return a.defaultExport !== q ? a.defaultExport : a.exports
    }

    function E(a) {
        a = C(a);
        if (a) return D(a)
    }

    function F(a) {
        a = C(a);
        if (a) return a.defaultExport !== q ? a.defaultExport : null
    }

    function G(a) {
        a = C(a);
        if (a) return a.exports
    }

    function ea(a) {
        a.factoryLength === -1 && (a.factoryLength = a.factory.length);
        return a.factoryLength
    }

    function H(d) {
        var g = a.ErrorGuard;
        if (g && !g.inGuard()) return g.applyWithGuard(H, null, [d]);
        g = e[d];
        if (!g) {
            var h = 'Requiring unknown module "%s"';
            throw u(h, d)
        }
        var i, j;
        if (g.hasError)
            if (g.error == null) throw u('Requiring module "%s" which threw an exception', d);
            else {
                h = I(g.error);
                J(h, {
                    messageFormat: 'Requiring module "%s" which threw an exception',
                    messageParams: [d]
                });
                throw h
            }
        if (!T(g)) throw u('Requiring module "%s" with unresolved dependencies: %s', d, t([d]));
        L(g);
        h = g.exports = {};
        var k = g.factory,
            l = g.dependencies;
        if (s.call(k) === "[object Function]" && l != null) {
            var n = l.length,
                p;
            try {
                try {
                    na(g)
                } catch (a) {
                    K(a, d)
                }
                var q = [],
                    v = n;
                if (g.special & o) {
                    var w = g.special & aa ? c : b;
                    q = w.slice(0);
                    q[w.length - 2] = g;
                    q[w.length - 1] = h;
                    v += q.length
                }
                if (g.special & m) {
                    w = ea(g);
                    v = Math.min(n + q.length, w)
                }
                for (var h = 0; h < n; h++) {
                    w = l[h];
                    q.length < v && q.push(E.call(null, w.id))
                }
                var x;
                y && (x = A());
                f[g.id].factoryRun = !0;
                try {
                    w = g.context != null ? g.context : a;
                    v = k.apply(w, q)
                } catch (a) {
                    K(a, d)
                } finally {
                    if (y) {
                        l = A();
                        n = f[g.id];
                        n.factoryTime = l - (x || 0);
                        n.factoryEnd = l;
                        n.factoryStart = x;
                        if (k.__SMmeta)
                            for (var h in k.__SMmeta) Object.prototype.hasOwnProperty.call(k.__SMmeta, h) && (n[h] = k.__SMmeta[h])
                    }
                }
            } catch (a) {
                g.hasError = !0;
                g.error = a;
                g.exports = null;
                throw a
            } finally {}
            v && (g.exports = v);
            var z;
            g.special & ba ? g.exports != null && r.call(g.exports, "default") && (g.defaultExport = z = g.exports["default"]) : g.defaultExport = z = g.exports;
            if (typeof z === "function") {
                w = z.__superConstructor__;
                (!z.displayName || w && w.displayName === z.displayName) && (z.displayName = (z.name || "(anonymous)") + " [from " + d + "]")
            }
            g.factoryFinished = !0
        } else g.exports = k;
        q = "__isRequired__" + d;
        l = e[q];
        l && !T(l) && M(q, ca)
    }

    function I(b) {
        if (a.getErrorSafe != null) return a.getErrorSafe(b);
        return b != null && typeof b === "object" && typeof b.message === "string" ? b : u("Non-error thrown: %s", String(b))
    }

    function J(b, c) {
        var d = a.ErrorSerializer;
        d && d.aggregateError(b, c)
    }

    function K(a, b) {
        a = I(a);
        J(a, {
            messageFormat: 'Module "%s"',
            messageParams: [b],
            forcedKey: b.startsWith("__") ? null : b
        });
        throw a
    }

    function fa() {
        return B
    }

    function ga() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function L(a) {
        if (a.nonJSDeps) return;
        a.nonJSDeps = !0;
        a.dependencies && a.dependencies.forEach(L)
    }

    function M(b, c, e, g, h, i, l) {
        c === void 0 ? (c = [], e = b, b = R()) : e === void 0 && (e = c, s.call(b) === "[object Array]" ? (c = b, b = R(c.join(","))) : c = []);
        var m = {
                cancel: P.bind(this, b)
            },
            n = N(b);
        if (!c && !e && i) {
            n.refcount += i;
            return m
        }
        f[b] = {
            id: b,
            dependencies: c,
            meta: l,
            category: g,
            defined: y ? A() : null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        };
        if (n.dependencies && n.reload !== !0) {
            b.indexOf(":") != -1 ? k++ : j++;
            return m
        }
        i && (n.refcount += i);
        l = c.map(N);
        n.factory = e;
        n.dependencies = l;
        n.context = h;
        n.special = g;
        (n.nonJSDeps || ma(n)) && (n.nonJSDeps = !1, L(n));
        U(n);
        if (d.length > 0) {
            var o = d;
            d = [];
            b = a.ScheduleJSWork ? a.ScheduleJSWork : pa;
            b(function() {
                if (x) {
                    for (var a = 0; a < o.length; a++) E.call(null, o[a].id);
                    o.length = 0
                } else
                    while (o.length > 0) E.call(null, o.pop().id)
            })()
        }
        return m
    }

    function N(a) {
        var b = e[a];
        if (b) return b;
        b = new O(a, 0);
        e[a] = b;
        return b
    }

    function O(a, b, c) {
        this.id = a, this.refcount = b, this.exports = c || null, this.defaultExport = c || q, this.factory = void 0, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = void 0, this.depPosition = 0, this.context = void 0, this.special = 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1, this.nonJSDeps = !1
    }

    function P(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = null;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && P(c.id)
            }
    }

    function Q(a, b, c) {
        var d = w ? "__requireLazy__x__" + g++ : "__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++;
        return M("__requireLazy__" + d, a, Z()(b, "requireLazy", {
            propagationType: 0
        }), l | p, c, 1)
    }

    function R(a) {
        return "__mod__" + (a != null ? a + "__" : "") + g++
    }

    function S(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (S(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !T(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function ha(a) {
        var b = a.dependencies;
        if (!b) throw u("Called _replaceCycleLinkWithSCCDeps on an undefined module");
        h++;
        S(b, [], a);
        a.depPosition++;
        U(a)
    }

    function ia(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                ha(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function T(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function ja(a) {
        a.depPosition++, U(a)
    }

    function ka(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b != null) {
            var c = b;
            c.nonJSDeps && L(a);
            b = c.nextDepWaitingNext;
            c.nextDepWaitingNext = null;
            var d = !e[c.id];
            d || ja(c)
        }
    }

    function la(a) {
        return a.special & l
    }

    function ma(a) {
        return a.special & p
    }

    function U(a) {
        while (a.dependencies != null && a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = T(b);
            if (!c && a != b) {
                ia(a, b);
                return
            }
            a.depPosition++
        }
        la(a) && d.push(a);
        a.nextDepWaitingHead !== null && ka(a)
    }

    function na(a) {
        if (a.sideEffectDependencyException != null) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    na(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & n) try {
                    E.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function V(a, b) {
        e[a] = new O(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryStart: null,
            factoryEnd: null,
            factoryRun: !1
        }
    }
    V("module", 0);
    V("exports", 0);
    V("define", M);
    V("global", a);
    V("require", E);
    V("importDefault", F);
    V("importNamespace", G);
    V("requireDynamic", oa);
    V("requireLazy", Q);
    V("requireWeak", W);
    V("ifRequired", X);
    V("ifRequireable", Y);
    b = [E.call(null, "global"), E.call(null, "require"), E.call(null, "requireDynamic"), E.call(null, "requireLazy"), null, null];
    c = [E.call(null, "global"), E.call(null, "require"), E.call(null, "importDefault"), E.call(null, "importNamespace"), E.call(null, "requireLazy"), null, null];
    M.amd = {};
    a.define = M;
    a.require = E;
    a.importDefault = F;
    a.importNamespace = G;
    a.requireDynamic = oa;
    a.requireLazy = Q;

    function oa(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function W(a, b) {
        X.call(null, a, function(a) {
            b(a)
        }, function() {
            M("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], Z()(function() {
                return b(D(e[a]))
            }, "requireWeak"), l, null, 1)
        })
    }

    function X(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(D(a))
        } else if (typeof c === "function") return c()
    }

    function Y(a, b, c) {
        if (v !== !0) return X.call(null, a, b, c);
        var d = e[a];
        if (d && d.nonJSDeps && T(d)) {
            if (typeof b === "function") return b(E.call(null, a))
        } else if (typeof c === "function") return c()
    }
    $ = {
        getDupCount: function() {
            return [j, k]
        },
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: t
    };

    function pa(a) {
        return a
    }

    function Z() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : pa;
        return function() {
            return b.apply(void 0, arguments)
        }
    }
    V("__getTotalRequireCalls", fa);
    V("__getModuleTimeDetails", ga);
    V("__debug", $);
    a.__d = function(a, b, c, d) {
        Z()(function() {
            M(a, b, c, (d || m) | o, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };

    function $(a, b) {
        return !0
    }
    if (a.__d_stub) {
        for (var W = 0; W < a.__d_stub.length; W++) a.__d.apply(null, a.__d_stub[W]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var Y = 0; Y < a.__rl_stub.length; Y++) Q.apply(null, a.__rl_stub[Y]);
        delete a.__rl_stub
    }
    F = function() {};
    a.$RefreshReg$ = F;
    a.$RefreshSig$ = function() {
        return function(a) {
            return a
        }
    }
})(this);
(function(a) {
    var b = a.performance;
    b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function() {
        a.__isresourcetimingbufferfull = !0
    }, b.setResourceTimingBufferSize = function() {})
})(this);

__d("fb-error-lite", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function a(a) {
        var b = new Error(a);
        if (b.stack === void 0) try {
            throw b
        } catch (a) {}
        b.messageFormat = a;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        b.messageParams = d.map(function(a) {
            return String(a)
        });
        b.taalOpcodes = [g.PREVIOUS_FRAME];
        return b
    }
    b = {
        err: a,
        TAALOpcode: g
    };
    f["default"] = b
}), 66);
__d("$-core", ["fb-error-lite"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return h(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function b(a) {
        return h(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function h(a, b) {
        if (!b) {
            a = c("fb-error-lite").err('Tried to get element with id of "%s" but it is not present on the page', String(a));
            a.taalOpcodes = a.taalOpcodes || [];
            a.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FILE];
            throw a
        }
        return b
    }
    a.fromIDOrElement = b;
    g["default"] = a
}), 98);
__d("$", ["$-core"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("$-core")
}), 98);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        compat_iframe_token: null,
        iframeKey: "",
        iframeTarget: "",
        iframeToken: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1,
        enableDefaultTrustedTypePolicy: !1,
        ig_server_override: ""
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    c = b;
    f["default"] = c
}), 66);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    f["default"] = a
}), 66);
__d("invariant", ["Env", "fb-error-lite", "sprintf"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (!a) {
            var d = b;
            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), g = 2; g < e; g++) f[g - 2] = arguments[g];
            if (typeof d === "number") {
                var i = h(d, f),
                    j = i.message,
                    k = i.decoderLink;
                d = j;
                f.unshift(k)
            } else if (d === void 0) {
                d = "Invariant: ";
                for (var l = 0; l < f.length; l++) d += "%s,"
            }
            var m = d,
                n = new Error(m);
            n.name = "Invariant Violation";
            n.messageFormat = d;
            n.messageParams = f.map(function(a) {
                return String(a)
            });
            n.taalOpcodes = [c("fb-error-lite").TAALOpcode.PREVIOUS_FRAME];
            n.stack;
            throw n
        }
    }

    function h(a, b) {
        var d = "Minified invariant #" + a + "; %s";
        b.length > 0 && (d += " Params: " + b.map(function(a) {
            return "%s"
        }).join(", "));
        a = c("Env").show_invariant_decoder === !0 ? "visit " + i(a, b) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function i(a, b) {
        a = "https://www.internalfb.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
    g["default"] = a
}), 98);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || h(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("performance", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.performance || a.msPerformance || a.webkitPerformance || {};
    c = b;
    f["default"] = c
}), 66);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f, g) {
    if (c("performance").now) b = function() {
        return c("performance").now()
    };
    else {
        d = a._cstart;
        e = Date.now();
        var h = typeof d === "number" && d < e ? d : e,
            i = 0;
        b = function() {
            var a = Date.now(),
                b = a - h;
            b < i && (h -= i - b, b = a - h);
            i = b;
            return b
        }
    }
    f = b;
    g["default"] = f
}), 98);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    f["default"] = a
}), 66);
__d("fb-error", ["performanceNow", "removeFromArray"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };

    function i(b) {
        var a = new Error(b);
        if (a.stack === void 0) try {
            throw a
        } catch (a) {}
        a.messageFormat = b;
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        a.messageParams = d.map(function(a) {
            return String(a)
        });
        a.taalOpcodes = [h.PREVIOUS_FRAME];
        return a
    }
    var j = !1,
        k = {
            errorListener: function(b) {
                var c = a.console,
                    d = c[b.type] ? b.type : "error";
                if (b.type === "fatal" || d === "error" && !j) {
                    d = b.message;
                    c.error("ErrorUtils caught an error:\n\n" + d + "\n\nSubsequent non-fatal errors won't be logged; see https://fburl.com/debugjs.");
                    j = !0
                }
            }
        },
        l = {
            access_token: null
        },
        m = 6,
        n = 6e4,
        o = 10 * n,
        p = new Map(),
        q = 0;

    function r() {
        var a = (g || (g = b("performanceNow")))();
        if (a > q + n) {
            var c = a - o;
            for (var d = p, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                var i = h[0];
                h = h[1];
                h.lastAccessed < c && p["delete"](i)
            }
            q = a
        }
    }

    function s(a) {
        r();
        var c = (g || (g = b("performanceNow")))(),
            d = p.get(a);
        if (d == null) {
            p.set(a, {
                dropped: 0,
                logged: [c],
                lastAccessed: c
            });
            return 1
        }
        a = d.dropped;
        var e = d.logged;
        d.lastAccessed = c;
        while (e[0] < c - n) e.shift();
        if (e.length < m) {
            d.dropped = 0;
            e.push(c);
            return a + 1
        } else {
            d.dropped++;
            return null
        }
    }
    var t = {
        shouldLog: function(a) {
            return s(a.hash)
        }
    };

    function u(a) {
        var b = null;
        a == null || typeof a !== "object" ? b = i("Non-object thrown: %s", String(a)) : typeof a.message !== "string" ? b = i("Non-error thrown: %s, keys: %s", String(a), JSON.stringify(Object.keys(a).sort())) : Object.isExtensible && !Object.isExtensible(a) && (b = i("Non-extensible thrown: %s", String(a.message)));
        if (b != null) {
            b.taalOpcodes = b.taalOpcodes || [];
            b.taalOpcodes.push(h.PREVIOUS_FRAME);
            return b
        }
        return a
    }
    var aa = typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        v;

    function ba(a) {
        var b = a.error != null ? u(a.error) : i(a.message || "");
        b.fileName == null && a.filename != null && (b.fileName = a.filename);
        b.line == null && a.lineno != null && (b.line = a.lineno);
        b.column == null && a.colno != null && (b.column = a.colno);
        b.guardList = [aa];
        b.loggingSource = "ONERROR";
        (a = v) === null || a === void 0 ? void 0 : a.reportError(b)
    }
    var w = {
            setup: function(b) {
                if (typeof a.addEventListener !== "function") return;
                if (v != null) return;
                v = b;
                a.addEventListener("error", ba)
            }
        },
        x = [],
        y = {
            pushGuard: function(a) {
                x.unshift(a)
            },
            popGuard: function() {
                x.shift()
            },
            inGuard: function() {
                return x.length !== 0
            },
            cloneGuardList: function() {
                return x.map(function(a) {
                    return a.name
                })
            },
            findDeferredSource: function() {
                for (var a = 0; a < x.length; a++) {
                    var b = x[a];
                    if (b.deferredSource != null) return b.deferredSource
                }
            }
        };

    function ca(a) {
        if (a.type != null) return a.type;
        if (a.loggingSource == "GUARDED" || a.loggingSource == "ERROR_BOUNDARY") return "fatal";
        if (a.name == "SyntaxError") return "fatal";
        if (a.loggingSource == "ONERROR" && a.message.indexOf("ResizeObserver loop") >= 0) return "warn";
        return a.stack != null && a.stack.indexOf("chrome-extension://") >= 0 ? "warn" : "error"
    }
    var z = [],
        A = function() {
            function a() {
                this.metadata = [].concat(z)
            }
            var b = a.prototype;
            b.addEntries = function() {
                var a;
                (a = this.metadata).push.apply(a, arguments);
                return this
            };
            b.addEntry = function(a, b, c) {
                this.metadata.push([a, b, c]);
                return this
            };
            b.isEmpty = function() {
                return this.metadata.length === 0
            };
            b.clearEntries = function() {
                this.metadata = []
            };
            b.format = function() {
                var a = [];
                this.metadata.forEach(function(b) {
                    if (b && b.length) {
                        b = b.map(function(a) {
                            return a != null ? String(a).replace(/:/g, "_") : ""
                        }).join(":");
                        a.push(b)
                    }
                });
                return a
            };
            b.getAll = function() {
                return this.metadata
            };
            a.addGlobalMetadata = function(a, b, c) {
                z.push([a, b, c])
            };
            a.getGlobalMetadata = function() {
                return z
            };
            a.unsetGlobalMetadata = function(a, b) {
                z = z.filter(function(c) {
                    return !(Array.isArray(c) && c[0] === a && c[1] === b)
                })
            };
            return a
        }(),
        B = {
            debug: 1,
            info: 2,
            warn: 3,
            error: 4,
            fatal: 5
        };

    function c(a, b) {
        if (Object.isFrozen(a)) return;
        b.type && ((!a.type || B[a.type] > B[b.type]) && (a.type = b.type));
        var c = b.metadata;
        if (c != null) {
            var d;
            d = (d = a.metadata) !== null && d !== void 0 ? d : new A();
            c != null && d.addEntries.apply(d, c.getAll());
            a.metadata = d
        }
        b.project != null && (a.project = b.project);
        b.errorName != null && (a.errorName = b.errorName);
        b.componentStack != null && (a.componentStack = b.componentStack);
        b.deferredSource != null && (a.deferredSource = b.deferredSource);
        b.blameModule != null && (a.blameModule = b.blameModule);
        b.loggingSource != null && (a.loggingSource = b.loggingSource);
        d = (c = a.messageFormat) !== null && c !== void 0 ? c : a.message;
        c = (c = a.messageParams) !== null && c !== void 0 ? c : [];
        if (d !== b.messageFormat && b.messageFormat != null) {
            var e;
            d += " [Caught in: " + b.messageFormat + "]";
            c.push.apply(c, (e = b.messageParams) !== null && e !== void 0 ? e : [])
        }
        a.messageFormat = d;
        a.messageParams = c;
        e = b.forcedKey;
        d = a.forcedKey;
        c = e != null && d != null ? e + "_" + d : e !== null && e !== void 0 ? e : d;
        a.forcedKey = c
    }

    function d(a) {
        var b;
        return da((b = a.messageFormat) !== null && b !== void 0 ? b : a.message, a.messageParams || [])
    }

    function da(a, b) {
        var c = 0;
        a = a.replace(/%s/g, function() {
            return c < b.length ? b[c++] : "NOPARAM"
        });
        c < b.length && (a += " PARAMS" + JSON.stringify(b.slice(c)));
        return a
    }

    function f(a) {
        return (a !== null && a !== void 0 ? a : []).map(function(a) {
            return String(a)
        })
    }
    var C = {
            aggregateError: c,
            toReadableMessage: d,
            toStringParams: f
        },
        ea = 5,
        D = [];

    function E(a) {
        D.push(a), D.length > ea && D.shift()
    }

    function F(a) {
        var b = a.getAllResponseHeaders();
        if (b != null && b.indexOf("X-FB-Debug") >= 0) {
            b = a.getResponseHeader("X-FB-Debug");
            b && E(b)
        }
    }

    function fa() {
        return D
    }
    var G = {
            add: E,
            addFromXHR: F,
            getAll: fa
        },
        ga = "abcdefghijklmnopqrstuvwxyz012345";

    function H() {
        var a = 0;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (f != null) {
                var g = f.length;
                for (var h = 0; h < g; h++) a = (a << 5) - a + f.charCodeAt(h)
            }
        }
        var i = "";
        for (var j = 0; j < 6; j++) i = ga.charAt(a & 31) + i, a >>= 5;
        return i
    }
    var I = [/\(([^\s\)\()]+):(\d+):(\d+)\)$/, /@([^\s\)\()]+):(\d+):(\d+)$/, /^([^\s\)\()]+):(\d+):(\d+)$/, /^at ([^\s\)\()]+):(\d+):(\d+)$/],
        ha = /^\w+:\s.*?\n/g;
    Error.stackTraceLimit != null && Error.stackTraceLimit < 80 && (Error.stackTraceLimit = 80);

    function ia(a) {
        var b = a.name,
            c = a.message;
        a = a.stack;
        if (a == null) return null;
        if (b != null && c != null && c !== "") {
            var d = b + ": " + c + "\n";
            if (a.startsWith(d)) return a.substr(d.length);
            if (a === b + ": " + c) return null
        }
        if (b != null) {
            d = b + "\n";
            if (a.startsWith(d)) return a.substr(d.length)
        }
        if (c != null && c !== "") {
            b = ": " + c + "\n";
            d = a.indexOf(b);
            c = a.substring(0, d);
            if (/^\w+$/.test(c)) return a.substring(d + b.length)
        }
        return a.replace(ha, "")
    }

    function J(a) {
        a = a.trim();
        var b;
        a;
        var c, d, e;
        if (a.includes("charset=utf-8;base64,")) b = "<inlined-file>";
        else {
            var f;
            for (var g = 0; g < I.length; g++) {
                var h = I[g];
                f = a.match(h);
                if (f != null) break
            }
            f != null && f.length === 4 ? (c = f[1], d = parseInt(f[2], 10), e = parseInt(f[3], 10), b = a.substring(0, a.length - f[0].length)) : b = a;
            b = b.replace(/^at /, "").trim()
        }
        h = {
            identifier: b,
            script: c,
            line: d,
            column: e
        };
        h.text = K(h);
        return h
    }

    function ja(a) {
        return a == null || a === "" ? [] : a.split(/\n\n/)[0].split("\n").map(J)
    }

    function ka(a) {
        a = ia(a);
        return ja(a)
    }

    function la(a) {
        if (a == null || a === "") return null;
        a = a.split("\n");
        a.splice(0, 1);
        return a.map(function(a) {
            return a.trim()
        })
    }

    function K(a) {
        var b = a.identifier,
            c = a.script,
            d = a.line;
        a = a.column;
        b = "    at " + (b !== null && b !== void 0 ? b : "<unknown>");
        c != null && d != null && a != null && (b += " (" + c + ":" + d + ":" + a + ")");
        return b
    }

    function L(c) {
        var d, e, f, i, j, k, l = ka(c);
        d = (d = c.taalOpcodes) !== null && d !== void 0 ? d : [];
        var m = c.framesToPop;
        if (m != null) {
            m = Math.min(m, l.length);
            while (m-- > 0) d.unshift(h.PREVIOUS_FRAME)
        }
        m = (m = c.messageFormat) !== null && m !== void 0 ? m : c.message;
        e = ((e = c.messageParams) !== null && e !== void 0 ? e : []).map(function(a) {
            return String(a)
        });
        var n = la(c.componentStack),
            o = n == null ? null : n.map(J),
            p = c.metadata ? c.metadata.format() : new A().format();
        p.length === 0 && (p = void 0);
        var q = l.map(function(a) {
            return a.text
        }).join("\n");
        f = (f = c.errorName) !== null && f !== void 0 ? f : c.name;
        var r = ca(c),
            s = c.loggingSource,
            t = c.project;
        i = (i = c.lineNumber) !== null && i !== void 0 ? i : c.line;
        j = (j = c.columnNumber) !== null && j !== void 0 ? j : c.column;
        k = (k = c.fileName) !== null && k !== void 0 ? k : c.sourceURL;
        var u = l.length > 0;
        u && i == null && (i = l[0].line);
        u && j == null && (j = l[0].column);
        u && k == null && (k = l[0].script);
        o = {
            blameModule: c.blameModule,
            column: j == null ? null : String(j),
            clientTime: Math.floor(Date.now() / 1e3),
            componentStackFrames: o,
            deferredSource: c.deferredSource != null ? L(c.deferredSource) : null,
            extra: (u = c.extra) !== null && u !== void 0 ? u : {},
            fbtrace_id: c.fbtrace_id,
            guardList: (j = c.guardList) !== null && j !== void 0 ? j : [],
            hash: H(f, q, r, t, s),
            isNormalizedError: !0,
            line: i == null ? null : String(i),
            loggingSource: s,
            message: C.toReadableMessage(c),
            messageFormat: m,
            messageParams: e,
            metadata: p,
            name: f,
            page_time: Math.floor((g || (g = b("performanceNow")))()),
            project: t,
            reactComponentStack: n,
            script: k,
            serverHash: c.serverHash,
            stack: q,
            stackFrames: l,
            type: r,
            xFBDebug: G.getAll()
        };
        c.forcedKey != null && (o.forcedKey = c.forcedKey);
        d.length > 0 && (o.taalOpcodes = d);
        u = a.location;
        u && (o.windowLocationURL = u.href);
        for (var j in o) o[j] == null && delete o[j];
        return o
    }

    function ma(a) {
        return a != null && typeof a === "object" && a.isNormalizedError === !0 ? a : null
    }
    var M = {
            formatStackFrame: K,
            normalizeError: L,
            ifNormalizedError: ma
        },
        na = "<global.react>",
        N = [],
        O = [],
        P = 50,
        Q = !1,
        R = {
            history: O,
            addListener: function(a, b) {
                b === void 0 && (b = !1), N.push(a), b || O.forEach(function(b) {
                    return a(b, (b = b.loggingSource) !== null && b !== void 0 ? b : "DEPRECATED")
                })
            },
            unshiftListener: function(a) {
                N.unshift(a)
            },
            removeListener: function(a) {
                b("removeFromArray")(N, a)
            },
            reportError: function(a) {
                a = M.normalizeError(a);
                R.reportNormalizedError(a)
            },
            reportNormalizedError: function(b) {
                if (Q) return !1;
                var a = y.cloneGuardList();
                b.componentStackFrames && a.unshift(na);
                a.length > 0 && (b.guardList = a);
                if (b.deferredSource == null) {
                    a = y.findDeferredSource();
                    a != null && (b.deferredSource = M.normalizeError(a))
                }
                O.length > P && O.splice(P / 2, 1);
                O.push(b);
                Q = !0;
                for (var a = 0; a < N.length; a++) try {
                    var c;
                    N[a](b, (c = b.loggingSource) !== null && c !== void 0 ? c : "DEPRECATED")
                } catch (a) {}
                Q = !1;
                return !0
            }
        };
    R.addListener(k.errorListener);
    var oa = "<anonymous guard>",
        S = !1,
        T = {
            applyWithGuard: function(a, b, c, d) {
                y.pushGuard({
                    name: ((d === null || d === void 0 ? void 0 : d.name) != null ? d.name : null) || (a.name ? "func_name:" + a.name : null) || oa,
                    deferredSource: d === null || d === void 0 ? void 0 : d.deferredSource
                });
                if (S) try {
                    return a.apply(b, c)
                } finally {
                    y.popGuard()
                }
                try {
                    return Function.prototype.apply.call(a, b, c)
                } catch (h) {
                    try {
                        b = d !== null && d !== void 0 ? d : {};
                        var e = b.deferredSource,
                            f = b.onError;
                        b = b.onNormalizedError;
                        var g = u(h);
                        e = {
                            deferredSource: e,
                            loggingSource: "GUARDED",
                            project: (e = d === null || d === void 0 ? void 0 : d.project) !== null && e !== void 0 ? e : "ErrorGuard",
                            type: d === null || d === void 0 ? void 0 : d.errorType
                        };
                        C.aggregateError(g, e);
                        d = M.normalizeError(g);
                        g == null && a && (d.extra[a.toString().substring(0, 100)] = "function", c != null && c.length && (d.extra[Array.from(c).toString().substring(0, 100)] = "args"));
                        d.guardList = y.cloneGuardList();
                        f && f(g);
                        b && b(d);
                        R.reportNormalizedError(d)
                    } catch (a) {}
                } finally {
                    y.popGuard()
                }
            },
            guard: function(a, b) {
                function c() {
                    for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
                    return T.applyWithGuard(a, this, d, b)
                }
                a.__SMmeta && (c.__SMmeta = a.__SMmeta);
                return c
            },
            inGuard: function() {
                return y.inGuard()
            },
            skipGuardGlobal: function(a) {
                S = a
            }
        },
        U = 1024,
        V = [],
        W = 0;

    function X(a) {
        return String(a)
    }

    function Y(a) {
        return a == null ? null : String(a)
    }

    function pa(a, b) {
        var c = {};
        b && b.forEach(function(a) {
            c[a] = !0
        });
        Object.keys(a).forEach(function(b) {
            a[b] ? c[b] = !0 : c[b] && delete c[b]
        });
        return Object.keys(c)
    }

    function Z(a) {
        return (a !== null && a !== void 0 ? a : []).map(function(a) {
            return {
                column: Y(a.column),
                identifier: a.identifier,
                line: Y(a.line),
                script: a.script
            }
        })
    }

    function qa(a) {
        a = String(a);
        return a.length > U ? a.substring(0, U - 3) + "..." : a
    }

    function ra(a, b) {
        var c;
        c = {
            appId: Y(b.appId),
            cavalry_lid: b.cavalry_lid,
            access_token: l.access_token,
            ancestor_hash: a.hash,
            bundle_variant: (c = b.bundle_variant) !== null && c !== void 0 ? c : null,
            clientTime: X(a.clientTime),
            column: a.column,
            componentStackFrames: Z(a.componentStackFrames),
            events: a.events,
            extra: pa(a.extra, b.extra),
            forcedKey: a.forcedKey,
            frontend_env: (c = b.frontend_env) !== null && c !== void 0 ? c : null,
            guardList: a.guardList,
            line: a.line,
            loggingFramework: b.loggingFramework,
            messageFormat: qa(a.messageFormat),
            messageParams: a.messageParams.map(qa),
            name: a.name,
            sample_weight: Y(b.sample_weight),
            script: a.script,
            site_category: b.site_category,
            stackFrames: Z(a.stackFrames),
            type: a.type,
            page_time: Y(a.page_time),
            project: a.project,
            push_phase: b.push_phase,
            report_source: b.report_source,
            report_source_ref: b.report_source_ref,
            rollout_hash: (c = b.rollout_hash) !== null && c !== void 0 ? c : null,
            script_path: b.script_path,
            server_revision: Y(b.server_revision),
            spin: Y(b.spin),
            svn_rev: String(b.client_revision),
            additional_client_revisions: Array.from((c = b.additional_client_revisions) !== null && c !== void 0 ? c : []).map(X),
            taalOpcodes: a.taalOpcodes == null ? null : a.taalOpcodes.map(function(a) {
                return a
            }),
            web_session_id: b.web_session_id,
            version: "3",
            xFBDebug: a.xFBDebug
        };
        b = a.blameModule;
        var d = a.deferredSource;
        b != null && (c.blameModule = String(b));
        d && d.stackFrames && (c.deferredSource = {
            stackFrames: Z(d.stackFrames)
        });
        a.metadata && (c.metadata = a.metadata);
        a.loadingUrls && (c.loadingUrls = a.loadingUrls);
        a.serverHash != null && (c.serverHash = a.serverHash);
        a.windowLocationURL != null && (c.windowLocationURL = a.windowLocationURL);
        a.loggingSource != null && (c.loggingSource = a.loggingSource);
        return c
    }

    function sa(a, b, c) {
        var d;
        W++;
        if (b.sample_weight === 0) return !1;
        var e = t.shouldLog(a);
        if (e == null) return !1;
        if ((d = b.projectBlocklist) !== null && d !== void 0 && d.includes(a.project)) return !1;
        d = ra(a, b);
        Object.assign(d, {
            ancestors: V.slice(),
            clientWeight: X(e),
            page_position: X(W)
        });
        V.length < 15 && V.push(a.hash);
        c(d);
        return !0
    }
    var ta = {
            createErrorPayload: ra,
            postError: sa
        },
        $ = null,
        ua = !1;

    function va(a) {
        if (!$) return;
        var b = a.reason,
            c;
        if (b != null && typeof b === "object" && (b.name == null || b.name === "" || b.message == null || b.message === "")) try {
            c = i("UnhandledRejection: %s", JSON.stringify(b)), c.loggingSource = "ONUNHANDLEDREJECTION"
        } catch (a) {
            c = i("UnhandledRejection: (circular) %s", Object.keys(b).join(",")), c.loggingSource = "ONUNHANDLEDREJECTION"
        } else c = u(b), c.loggingSource || (c.loggingSource = "ONUNHANDLEDREJECTION");
        $.reportError(c);
        a.preventDefault()
    }

    function wa(b) {
        $ = b, typeof a.addEventListener === "function" && !ua && (ua = !0, a.addEventListener("unhandledrejection", va))
    }
    var xa = {
        onunhandledrejection: va,
        setup: wa
    };
    c = {
        preSetup: function(a) {
            (a == null || a.ignoreOnError !== !0) && w.setup(R), (a == null || a.ignoreOnUnahndledRejection !== !0) && xa.setup(R)
        },
        setup: function(a, b) {
            R.addListener(function(c) {
                ta.postError(c, a, b)
            })
        }
    };
    var ya = function() {
        function a(a) {
            this.project = a, this.events = [], this.metadata = new A(), this.taalOpcodes = []
        }
        var b = a.prototype;
        b.$1 = function(b, c) {
            var d = String(c),
                e = this.events,
                f = this.project,
                g = this.metadata,
                i = this.blameModule,
                j = this.forcedKey,
                k = this.error,
                l;
            for (var m = arguments.length, n = new Array(m > 2 ? m - 2 : 0), o = 2; o < m; o++) n[o - 2] = arguments[o];
            if (this.normalizedError) {
                var p = {
                    message: this.normalizedError.messageFormat + " [Caught in: " + d + "]",
                    params: [].concat(this.normalizedError.messageParams, n),
                    forcedKey: j
                };
                l = babelHelpers["extends"]({}, this.normalizedError, {
                    message: p.message,
                    messageFormat: p.message,
                    messageParams: C.toStringParams(p.params),
                    project: f,
                    type: b,
                    loggingSource: "FBLOGGER"
                })
            } else if (k) this.taalOpcodes.length > 0 && new a("fblogger").blameToPreviousFrame().blameToPreviousFrame().warn("Blame helpers do not work with catching"), C.aggregateError(k, {
                messageFormat: d,
                messageParams: C.toStringParams(n),
                errorName: k.name,
                forcedKey: j,
                project: f,
                type: b,
                loggingSource: "FBLOGGER"
            }), l = M.normalizeError(k);
            else {
                k = new Error(d);
                if (k.stack === void 0) try {
                    throw k
                } catch (a) {}
                k.messageFormat = d;
                k.messageParams = C.toStringParams(n);
                k.blameModule = i;
                k.forcedKey = j;
                k.project = f;
                k.type = b;
                k.loggingSource = "FBLOGGER";
                k.taalOpcodes = [h.PREVIOUS_FRAME, h.PREVIOUS_FRAME].concat(this.taalOpcodes);
                l = M.normalizeError(k);
                l.name = "FBLogger"
            }
            g.isEmpty() || (l.metadata = g.format());
            if (e.length > 0)
                if (l.events != null) {
                    var q;
                    (q = l.events).push.apply(q, e)
                } else l.events = e;
            R.reportNormalizedError(l);
            return k
        };
        b.fatal = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["fatal", a].concat(c))
        };
        b.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["error", a].concat(c))
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        b.info = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["info", a].concat(c))
        };
        b.debug = function(a) {};
        b.mustfixThrow = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            var e = this.$1.apply(this, ["error", a].concat(c));
            e || (e = i("mustfixThrow does not support catchingNormalizedError"), e.taalOpcodes = e.taalOpcodes || [], e.taalOpcodes.push(h.PREVIOUS_FRAME));
            throw e
        };
        b.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        b.catchingNormalizedError = function(a) {
            this.normalizedError = a;
            return this
        };
        b.event = function(a) {
            this.events.push(a);
            return this
        };
        b.blameToModule = function(a) {
            this.blameModule = a;
            return this
        };
        b.blameToPreviousFile = function() {
            this.taalOpcodes.push(h.PREVIOUS_FILE);
            return this
        };
        b.blameToPreviousFrame = function() {
            this.taalOpcodes.push(h.PREVIOUS_FRAME);
            return this
        };
        b.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(h.PREVIOUS_DIR);
            return this
        };
        b.addToCategoryKey = function(a) {
            this.forcedKey = a;
            return this
        };
        b.addMetadata = function(a, b, c) {
            this.metadata.addEntry(a, b, c);
            return this
        };
        return a
    }();
    d = function(a, b) {
        var c = new ya(a);
        return b != null ? c.event(a + "." + b) : c
    };
    d.addGlobalMetadata = function(a, b, c) {
        A.addGlobalMetadata(a, b, c)
    };
    f = {
        blameToPreviousFile: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FILE);
            return a
        },
        blameToPreviousFrame: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_FRAME);
            return a
        },
        blameToPreviousDirectory: function(a) {
            var b;
            a.taalOpcodes = (b = a.taalOpcodes) !== null && b !== void 0 ? b : [];
            a.taalOpcodes.push(h.PREVIOUS_DIR);
            return a
        }
    };
    F = {
        err: i,
        ErrorBrowserConsole: k,
        ErrorDynamicData: l,
        ErrorFilter: t,
        ErrorGlobalEventHandler: w,
        ErrorGuard: T,
        ErrorGuardState: y,
        ErrorMetadata: A,
        ErrorNormalizeUtils: M,
        ErrorPoster: ta,
        ErrorPubSub: R,
        ErrorSerializer: C,
        ErrorSetup: c,
        ErrorXFBDebug: G,
        FBLogger: d,
        getErrorSafe: u,
        getSimpleHash: H,
        TAAL: f,
        TAALOpcode: h
    };
    e.exports = F
}), null);
__d("ErrorGuard", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuard
}), 98);
__d("CallbackDependencyManager", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            a = this.$1.get(a);
            if (!a) return;
            for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var h = f[0];
                f = f[1] - 1;
                a.set(h, f);
                f <= 0 && a["delete"](h);
                f = this.$2.get(h);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](h);
                        (g || (g = b("ErrorGuard"))).applyWithGuard(f, null, [])
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(a, null, []);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        var b = this;
        this.remove = function() {
            b.subscriber && (b.subscriber.removeSubscription(b), b.subscriber = null)
        };
        this.subscriber = a
    };
    f["default"] = a
}), 66);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(c("EventSubscription"));
    g["default"] = a
}), 98);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    c = b;
    f["default"] = c
}), 66);
__d("FBLogger", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").FBLogger
}), 98);
__d("unrecoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        d = d === void 0 ? {} : d;
        d = d.error;
        b = c("FBLogger")(b);
        d ? b = b.catching(d) : b = b.blameToPreviousFrame();
        d = e == null ? void 0 : e.categoryKey;
        d != null && (b = b.addToCategoryKey(d));
        return b.mustfixThrow(a)
    }
    g["default"] = a
}), 98);
__d("BaseEventEmitter", ["EmitterSubscription", "ErrorGuard", "EventSubscriptionVendor", "emptyFunction", "unrecoverableViolation"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.removeListener = function(a) {
            this.$2.removeSubscription(a)
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            (g || (g = b("ErrorGuard"))).applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(c("BaseEventEmitter"));
    g["default"] = a
}), 98);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || h(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorGuard", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        return Array.isArray(a) ? a : [a]
    }

    function j(a) {
        return a instanceof k || a === k ? a : k
    }
    var k = function() {
            function a() {
                var a = new(c("EventEmitter"))();
                this.$3 = new l();
                this.$2 = new(c("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(c("CallbackDependencyManager"))();
                this.$4 = []
            }
            var b = a.prototype;
            b.subscribe = function(a, b, d) {
                var e = this;
                a = i(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || h(0, 1966, a)
                });
                typeof b === "function" || h(0, 1967, b);
                d = d || "all";
                d === "new" || d === "all" || h(0, 1968, d);
                a = a.map(function(a) {
                    var c = function(c) {
                        return e.$5(b, a, c)
                    };
                    c.__SMmeta = b.__SMmeta;
                    if (d === "new") return e.$2.addListener(a, c);
                    e.$4.push({});
                    c = e.$2.addRetroactiveListener(a, c);
                    e.$4.pop();
                    return c
                });
                return new(c("ArbiterToken"))(this, a)
            };
            b.$5 = function(a, b, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[b] === !1) return;
                a = c("ErrorGuard").applyWithGuard(a, null, [b, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[b] = a
            };
            b.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            b.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            b.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            b.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || h(0, 1969), a.unsubscribe()
            };
            b.inform = function(a, b, c) {
                var d = Array.isArray(a);
                a = i(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    g || h(0, 1970, g);
                    this.$3.setHoldingBehavior(g, c);
                    this.$2.emitAndHold(g, b);
                    this.$6(g, b, e)
                }
                g = this.$4.pop();
                return d ? g : g[a[0]]
            };
            b.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || h(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            b.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            b.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(j(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(j(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(j(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(j(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(j(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(j(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(j(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(j(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(j(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(j(this), arguments)
            };
            return a
        }(),
        l = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(c("EventHolder"));
    k.call(k);
    a = k;
    g["default"] = a
}), 98);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("SimpleHook", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.__callbacks = [], this.call = this.$2
        }
        var b = a.prototype;
        b.hasCallback = function(a) {
            var b = this.__callbacks;
            return b.length > 0 && (a == null || b.some(function(b) {
                return b === a || b.$1 === a
            }))
        };
        b.add = function(a, b) {
            var c = this,
                d;
            if ((b == null ? void 0 : b.once) === !0) {
                b = function() {
                    c.remove(d), a.apply(null, arguments)
                };
                b.$1 = a;
                d = b
            } else d = a;
            this.__callbacks.push(d);
            return d
        };
        b.removeLast = function() {
            return this.__callbacks.pop()
        };
        b.remove = function(a) {
            return this.removeIf(function(b) {
                return b === a
            })
        };
        b.removeIf = function(a) {
            var b = this.__callbacks;
            this.__callbacks = b.filter(function(b) {
                return !a(b)
            });
            return b.length > this.__callbacks.length
        };
        b.clear = function() {
            this.__callbacks = []
        };
        b.$2 = function() {
            var a = this.__callbacks;
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b];
                d.apply(null, arguments)
            }
        };
        return a
    }();
    f.SimpleHook = a
}), 66);
__d("BanzaiLazyQueue", ["SimpleHook"], (function(a, b, c, d, e, f, g) {
    var h = [],
        i = new(d("SimpleHook").SimpleHook)();
    a = {
        onQueue: i,
        queuePost: function(a, b, c) {
            h.push([a, b, c]), i.call(a, b, c)
        },
        flushQueue: function() {
            var a = h;
            h = [];
            return a
        }
    };
    f.exports = a
}), 34);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = !!(a !== void 0 && a.document && a.document.createElement);
    c = typeof WorkerGlobalScope === "function";
    d = {
        canUseDOM: b,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: b && !!(a.addEventListener || a.attachEvent),
        canUseViewport: b && !!window.screen,
        isInWorker: c,
        isInBrowser: b || c
    };
    e.exports = d
}), null);
__d("gkx", ["invariant", "BanzaiLazyQueue", "ExecutionEnvironment", "emptyFunction"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
        j = {};

    function k(a) {
        var b = i[a];
        b != null || h(0, 11797, a);
        j[a] || (j[a] = !0, (d("ExecutionEnvironment").canUseDOM || d("ExecutionEnvironment").isInWorker) && d("BanzaiLazyQueue").queuePost("gk2_exposure", {
            identifier: a,
            hash: b.hash
        }));
        return b.result
    }
    k.add = function(a, b) {
        for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
    };
    k.addLoggedInternal = function(a) {
        k.add(a);
        for (var a in a) j[a] = !0
    };
    a = c("emptyFunction");
    k.getGKs = function() {
        return null
    };
    k.getLogged = function() {
        return Object.keys(j).map(function(a) {
            return {
                identifier: a,
                hash: i[a].hash
            }
        })
    };
    k.setPass = a;
    k.setFail = a;
    k.clear = a;
    b = k;
    g["default"] = b
}), 98);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a) {
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !i(a) || a.size === void 0 || h(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function i(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] != null
    }
    g["default"] = a
}), 98);
__d("DataStore", ["DataStoreConfig", "gkx", "isEmpty"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("DataStoreConfig").expandoKey,
        i = b("DataStoreConfig").useExpando,
        j = b("gkx")("1073500") && window.WeakMap ? new window.WeakMap() : null,
        k = {},
        l = 1;

    function m(a) {
        if (typeof a === "string") return "str_" + a;
        else {
            var b;
            return "elem_" + ((b = a.__FB_TOKEN) != null ? b : a.__FB_TOKEN = [l++])[0]
        }
    }

    function n(a) {
        if (j != null && typeof a === "object") {
            j.get(a) === void 0 && j.set(a, {});
            return j.get(a)
        } else if (i && typeof a === "object") return a[h] || (a[h] = {});
        a = m(a);
        return k[a] || (k[a] = {})
    }
    var o = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = n(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[b];
            if (e === void 0 && a.getAttribute != null)
                if (a.hasAttribute != null && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = n(a),
                e = d[c];
            delete d[c];
            (g || (g = b("isEmpty")))(d) && o.purge(a);
            return e
        },
        purge: function(a) {
            if (j != null && typeof a === "object") return j["delete"](a);
            else i && typeof a === "object" ? delete a[h] : delete k[m(a)]
        },
        _storage: k
    };
    e.exports = o
}), null);
__d("BigPipePlugins", ["DataStore"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {}
        a.runPluginOnPagelet = function(b) {
            a.getPluginList().forEach(function(a) {
                a(b)
            })
        };
        a.getPluginList = function() {
            return [a.$1]
        };
        a.$1 = function(b) {
            if (!b) return;
            b = b.querySelectorAll("div[data-fte]");
            for (var c = 0, d = b.length; c < d; c++) a.$2(b[c], "data-ft", "data-ft")
        };
        a.$2 = function(a, b, c) {
            var e = a.getAttribute(b);
            e && (d("DataStore").set(a, c, e), a.removeAttribute(b))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("objectValues", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return Object.values(a)
    }
    f["default"] = a
}), 66);
__d("BootloaderEvents", ["Arbiter", "objectValues"], (function(a, b, c, d, e, f, g) {
    var h = "bootloader/bootload",
        i = "hasteResponse/handle",
        j = "bootloader/defer_timeout",
        k = "bootloader/resource_in_longtail_bt_manifest",
        l = new(c("Arbiter"))(),
        m = new Set(),
        n = new Set();

    function o(a, b) {
        return "haste_response_ef:" + a + ":" + ((a = b) != null ? a : "<unknown>")
    }

    function a(a) {
        var b = new Map();
        for (var a = c("objectValues")(a), d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= a.length) break;
                f = a[e++]
            } else {
                e = a.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            for (var f = f, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (g) {
                    if (h >= f.length) break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                var j = i[0];
                i = i[1];
                b.set(j, i)
            }
        }
        return b
    }

    function b() {
        return {
            blocking: new Map(),
            nonblocking: new Map(),
            "default": new Map()
        }
    }

    function d(a) {
        m.add(a)
    }

    function e(a) {
        m["delete"](a), l.inform(h, a, "persistent")
    }

    function f(a, b) {
        n.add(o(a, b))
    }

    function p(a, b, c) {
        l.inform(o(a, b), c, "persistent")
    }

    function q(a) {
        l.inform(j, a, "persistent")
    }

    function r(a) {
        return l.subscribe(h, function(b, c) {
            return a(c)
        })
    }

    function s(a) {
        return l.subscribe(j, function(b, c) {
            return a(c)
        })
    }

    function t() {
        return new Set(m)
    }

    function u(a) {
        l.inform(i, a, "persistent")
    }

    function v(a) {
        return l.subscribe(i, function(b, c) {
            b = o(c.source, c.sourceDetail);
            if (n.has(b)) {
                l.subscribe(b, function(b, d) {
                    return a(babelHelpers["extends"]({}, c, {
                        efData: d
                    }))
                });
                return
            }
            a(c)
        })
    }

    function w(a) {
        return l.subscribe(k, a)
    }
    var x = !1;

    function y() {
        if (x) return;
        x = !0;
        l.inform(k, null, "persistent")
    }
    g.flattenResourceMapSet = a;
    g.newResourceMapSet = b;
    g.notifyBootloadStart = d;
    g.notifyBootload = e;
    g.notifyHasteResponseEFStart = f;
    g.notifyHasteResponseEF = p;
    g.notifyDeferTimeout = q;
    g.onBootload = r;
    g.onDeferTimeout = s;
    g.getActiveBootloads = t;
    g.notifyHasteResponse = u;
    g.onHasteResponse = v;
    g.onResourceInLongTailBTManifest = w;
    g.notifyResourceInLongTailBTManifest = y
}), 98);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f, g) {
    var h = function() {
        return Date.now()
    };

    function a(a) {
        h = a
    }
    if (c("performance").now && c("performance").timing && c("performance").timing.navigationStart) {
        var i = c("performance").timing.navigationStart;
        b = function() {
            return c("performance").now() + i
        }
    } else b = function() {
        return h()
    };
    b.setFallback = a;
    d = b;
    g["default"] = d
}), 98);
__d("BootloaderEventsManager", ["CallbackDependencyManager", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        "use strict";

        function a() {
            this.$1 = new(b("CallbackDependencyManager"))(), this.$2 = new Map()
        }
        var c = a.prototype;
        c.rsrcDone = function(a) {
            return a
        };
        c.bootload = function(a) {
            return "bl:" + a.join(",")
        };
        c.tierOne = function(a) {
            return "t1:" + a
        };
        c.tierTwoStart = function(a) {
            return "t2s:" + a
        };
        c.tierTwo = function(a) {
            return "t2:" + a
        };
        c.tierThreeStart = function(a) {
            return "t3s:" + a
        };
        c.tierThree = function(a) {
            return "t3:" + a
        };
        c.tierOneLog = function(a) {
            return "t1l:" + a
        };
        c.tierTwoLog = function(a) {
            return "t2l:" + a
        };
        c.tierThreeLog = function(a) {
            return "t3l:" + a
        };
        c.beDone = function(a) {
            return "beDone:" + a
        };
        c.notify = function(a) {
            this.$2.set(a, (g || (g = b("performanceAbsoluteNow")))()), this.$1.satisfyPersistentDependency(a)
        };
        c.getEventTime = function(a) {
            return this.$2.get(a)
        };
        c.registerCallback = function(a, b) {
            this.$1.registerCallback(a, b)
        };
        return a
    }();
    e.exports = a
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        function a() {
            this.$1 = [], this.$2 = null
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$2 != null && !this.$1[a] && (this.$2 = null);
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            if (this.$2 != null) return this.$2;
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return this.$2 = i(d + a.join(""))
        };
        return a
    }();

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    f["default"] = a
}), 66);
__d("CSRBitMap", ["BitMap"], (function(a, b, c, d, e, f, g) {
    var h = new(c("BitMap"))();

    function a(a) {
        h.set(a)
    }

    function b() {
        return h.toCompressedString()
    }
    g.add = a;
    g.toCompressedString = b
}), 98);
__d("CSRIndexUtil", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    b = 0;

    function a(a) {
        a.substr(0, 1) === ":" || h(0, 21456, a);
        return a.substr(1).split(",").map(function(a) {
            return parseInt(a, 10)
        })
    }
    g.UNKNOWN_RESOURCE_INDEX = b;
    g.parseCSRIndexes = a
}), 98);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    f["default"] = a
}), 66);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("BlueCompatBroker", ["Env", "URI", "isCometAltpayJsSdkIframeAllowedDomain", "isFacebookURI", "isMessengerDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = new Map(),
        k = !1,
        l = function(a) {
            a = new(g || (g = b("URI")))(a);
            return b("isFacebookURI")(a) || b("isWorkplaceDotComURI")(a) || b("isMessengerDotComURI")(a)
        },
        m = {
            dispatch: function(a) {
                var b = m.getMessageEventString(a, "compatAction");
                if (b != null) {
                    b = j.get(b);
                    b && b(a)
                }
            },
            getMessageEventString: function(a, b) {
                a = a.data;
                if (typeof a === "object") {
                    a = a == null ? void 0 : a[b];
                    if (typeof a === "string") return a
                }
                return ""
            },
            init: function(a) {
                a === void 0 && (a = "");
                if (!k) {
                    document.body && (document.body.style.overflow = "auto");
                    var c = b("isCometAltpayJsSdkIframeAllowedDomain")() ? "https://secure.facebook.com/" : document.referrer,
                        d = c.indexOf("/", 8);
                    c = c.substring(0, d);
                    if (l(c)) {
                        d = new MessageChannel();
                        a = a !== "" ? a : (h || (h = b("Env"))).iframeKey;
                        i = d.port1;
                        i.onmessage = m.dispatch;
                        window.parent.postMessage({
                            compatAction: "CompatSetup",
                            iframeKey: a
                        }, c + "/", [d.port2])
                    }
                    try {
                        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
                    } catch (a) {}
                    k = !0
                }
            },
            register: function(a, b) {
                j.set(a, b)
            },
            clear: function(a) {
                j["delete"](a)
            },
            sendMessage: function(a) {
                k || m.init(), i && i.postMessage(babelHelpers["extends"]({}, a))
            }
        };
    e.exports = m
}), null);
__d("MessengerEnvironment", ["CurrentEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = babelHelpers["extends"]({}, c("CurrentEnvironment"), {
        messengerui: !1,
        roomschatui: !1,
        setMessengerUI: function(a) {
            h.messengerui = a
        },
        setRoomsChatUI: function(a) {
            h.roomschatui = a
        }
    });
    a = h;
    g["default"] = a
}), 98);
__d("areEqual", [], (function(a, b, c, d, e, f) {
    var g = [],
        h = [];

    function a(a, b) {
        var c = g.length ? g.pop() : [],
            d = h.length ? h.pop() : [];
        a = i(a, b, c, d);
        c.length = 0;
        d.length = 0;
        g.push(c);
        h.push(d);
        return a
    }

    function i(a, b, c, d) {
        if (a === b) return a !== 0 || 1 / a == 1 / b;
        if (a == null || b == null) return !1;
        if (typeof a !== "object" || typeof b !== "object") return !1;
        var e = Object.prototype.toString,
            f = e.call(a);
        if (f != e.call(b)) return !1;
        switch (f) {
            case "[object String]":
                return a == String(b);
            case "[object Number]":
                return isNaN(a) || isNaN(b) ? !1 : a == Number(b);
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        e = c.length;
        while (e--)
            if (c[e] == a) return d[e] == b;
        c.push(a);
        d.push(b);
        e = 0;
        if (f === "[object Array]") {
            e = a.length;
            if (e !== b.length) return !1;
            while (e--)
                if (!i(a[e], b[e], c, d)) return !1
        } else if (a instanceof Set) {
            if (a.size !== b.size) return !1;
            f = Array.from(b.values());
            for (var e = a, g = Array.isArray(e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var j;
                if (g) {
                    if (h >= e.length) break;
                    j = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    j = h.value
                }
                j = j;
                var k = !1;
                for (var l = 0; l < f.length; l++) {
                    var m = f[l];
                    if (i(j, m, c, d)) {
                        k = !0;
                        f.splice(l, 1);
                        break
                    }
                }
                if (k === !1) return !1
            }
            return !0
        } else {
            if (a.constructor !== b.constructor) return !1;
            if (Object.prototype.hasOwnProperty.call(a, "valueOf") && Object.prototype.hasOwnProperty.call(b, "valueOf")) return a.valueOf() == b.valueOf();
            m = Object.keys(a);
            if (m.length != Object.keys(b).length) return !1;
            for (var j = 0; j < m.length; j++) {
                if (m[j] === "_owner") continue;
                if (!Object.prototype.hasOwnProperty.call(b, m[j]) || !i(a[m[j]], b[m[j]], c, d)) return !1
            }
        }
        c.pop();
        d.pop();
        return !0
    }
    f["default"] = a
}), 66);
__d("isCdnURI", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var b = Number(a.getPort());
        if (!!b && b !== 80 && b !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : !1
    }
    f["default"] = a
}), 66);
__d("BlueCompatRouter", ["BlueCompatBroker", "Env", "MessengerEnvironment", "URI", "areEqual", "gkx", "isCdnURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(b, c) {
        var d, e = a.__fbNativeClearTimeout || window.clearTimeout,
            f = a.__fbNativeSetTimeout || window.setTimeout;
        return function() {
            var a = this,
                g = arguments,
                h = function() {
                    d = null, b.apply(a, g)
                };
            e(d);
            d = f(h, c)
        }
    };
    var h = {
            convertUri: function(a) {
                if (a == null || a === "") return new(c("URI"))();
                a = new(c("URI"))(a);
                if (a.getDomain().endsWith("messenger.com")) return a.setDomain(a.getDomain().replace(/messenger\.com/i, "facebook.com")).setPath("/messages" + a.getPath());
                else return a
            },
            goFragment: function(a) {
                if (c("Env").isCQuick) {
                    a = h.convertUri(a);
                    if (a.getFragment()) {
                        var b = c("URI").getRequestURI(!1, !1);
                        if (c("areEqual")(new(c("URI"))(b).setFragment("").getQualifiedURI(), new(c("URI"))(a).setFragment("").getQualifiedURI())) return !0
                    }
                }
                return !1
            },
            go: function(a, b) {
                if (c("Env").isCQuick) {
                    var d = new(c("URI"))(a);
                    a = h.convertUri(a);
                    var e = a.getQualifiedURI();
                    if (c("isCdnURI")(a) || e.getPath().startsWith("/compat")) return !1;
                    a = function() {
                        if (c("MessengerEnvironment").messengerui && e.getPath().startsWith("/messages")) return [!1, "/messages"];
                        if (d.getPath().startsWith("/settings") && e.getPath().startsWith("/settings") && (c("gkx")("1224637") || e.getSubdomain() !== d.getSubdomain())) {
                            var a = e.getQueryData().tab;
                            return a != null ? [!1, "/settings/" + a] : [!1, "/settings"]
                        }
                        if (d.getPath().startsWith("/games") && e.getPath().startsWith("/games")) return [!1, "/games/web"];
                        if (d.getPath().startsWith("/notes") && e.getPath().startsWith("/notes")) return [!1, "/notes"];
                        if (d.getPath().startsWith("/latest/posts") && e.getPath().startsWith("/latest/posts")) return [!1, "/business"];
                        if (/\/[A-Za-z\-0-9]+\/settings/.test(d.getPath())) return [!1, "/pages/settings"];
                        return /\/[A-Za-z\-0-9]+\/insights/.test(d.getPath()) ? [!1, "/insights"] : [!0, ""]
                    }();
                    var f = a[0];
                    a = a[1];
                    i({
                        compatAction: "route",
                        maintainKey: a,
                        replace: b,
                        uri: String(e)
                    });
                    return f
                }
                return !1
            },
            startChat: function(a, b) {
                return h.sendMessage({
                    compatAction: "startchat",
                    tabId: a,
                    isPage: b
                })
            },
            chatListener: function(a, b, c) {
                a.addEventListener("click", function(a) {
                    a.preventDefault(), h.startChat(b, c)
                })
            },
            sendMessage: function(a) {
                if (c("Env").isCQuick) {
                    c("BlueCompatBroker").init();
                    c("BlueCompatBroker").sendMessage(a);
                    return !0
                }
                return !1
            }
        },
        i = b(h.sendMessage, 250);
    d = h;
    g["default"] = d
}), 98);
__d("BaseDeserializePHPQueryData", [], (function(a, b, c, d, e, f) {
    var g = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function h(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function a(a, b) {
        if (a == null || a === "") return {};
        var c = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var d = Object.prototype.hasOwnProperty;
        for (var e = 0, f = a.length; e < f; e++) {
            var i = a[e].match(g);
            if (!i) {
                var j = a[e].indexOf("=");
                if (j === -1) c[b(a[e])] = null;
                else {
                    var k = a[e].substring(0, j);
                    j = a[e].substring(j + 1);
                    c[b(k)] = b(j)
                }
            } else {
                k = i[2].split(/\]\[|\[|\]/).slice(0, -1);
                j = i[1];
                i = b(i[3] || "");
                k[0] = j;
                j = c;
                for (var l = 0; l < k.length - 1; l++) {
                    var m = h(k[l]);
                    if (m) {
                        if (!d.call(j, m)) {
                            var n = k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            j[m] = n;
                            if (j[m] !== n) return c
                        }
                        j = j[m]
                    } else k[l + 1] && !k[l + 1].match(/^\d{1,3}$/) ? j.push({}) : j.push([]), j = j[j.length - 1]
                }
                j instanceof Array && k[k.length - 1] === "" ? j.push(i) : j[h(k[k.length - 1])] = i
            }
        }
        return c
    }
    f.deserialize = a
}), 66);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        return i(a, "", {})
    }

    function i(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || h(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && i(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    g["default"] = a
}), 98);
__d("PHPQuerySerializer", ["BaseDeserializePHPQueryData", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = [];
        a = c("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
            }
        return b.join("&")
    }

    function h(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }

    function b(a) {
        return d("BaseDeserializePHPQueryData").deserialize(a, i)
    }

    function i(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    e = {
        serialize: a,
        encodeComponent: h,
        deserialize: b,
        decodeComponent: i
    };
    f.exports = e
}), 34);
__d("PHPQuerySerializerNoEncoding", ["BaseDeserializePHPQueryData", "PHPQuerySerializer", "flattenPHPQueryData", "gkx"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = [];
        a = c("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
            }
        return b.join("&")
    }

    function h(a) {
        return a
    }

    function b(a) {
        return d("BaseDeserializePHPQueryData").deserialize(a, i)
    }

    function i(a) {
        return c("gkx")("5241") ? a : d("PHPQuerySerializer").decodeComponent(a)
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = b;
    g.decodeComponent = i
}), 98);
__d("PHPStrictQuerySerializer", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = [];
        a = c("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? b.push(e) : b.push(e + "=" + h(String(a[d])))
            }
        return b.join("&")
    }

    function h(a) {
        return encodeURIComponent(a)
    }
    g.serialize = a;
    g.encodeComponent = h;
    g.deserialize = d("PHPQuerySerializer").deserialize;
    g.decodeComponent = d("PHPQuerySerializer").decodeComponent
}), 98);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");

    function a(a) {
        if (a.trim() === "") return null;
        a = a.match(g);
        if (a == null) return null;
        var b = a[2] ? a[2].substr(2) : null,
            c = a[1] ? a[1].substr(0, a[1].length - 1) : null;
        a = {
            uri: a[0] ? a[0] : null,
            scheme: c,
            authority: b,
            userinfo: a[3] ? a[3].substr(0, a[3].length - 1) : null,
            host: a[2] ? a[4] : null,
            port: a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null,
            path: a[6] ? a[6] : null,
            query: a[7] ? a[7].substr(1) : null,
            fragment: a[8] ? a[8].substr(1) : null,
            isGenericURI: b === null && !!c
        };
        return a
    }
    f.parse = a
}), 66);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    f["default"] = g
}), 66);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f, g) {
    var h = c("createObjectFrom")(["accountscenter", "aidemos", "aistudio", "blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-internal", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "flipper", "ftp", "gtalk", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "lasso", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "instagram", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "oculus.feed", "oculusstore", "odh", "skype", "callto", "messenger", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami", "origami-file", "fb-nimble-vrsrecorder", "fb-nimble-monohandtrackingvis", "together", "togetherbl", "horizonlauncher", "venues", "whatsapp-consumer", "whatsapp-smb", "fb-ide-opener", "fb-vscode", "fb-vscode-insiders", "spark-studio", "manifold", "origami-internal", "origami-public"]);

    function a(a) {
        return a == null || a === "" ? !0 : Object.prototype.hasOwnProperty.call(h, a.toLowerCase())
    }
    g.isAllowed = a
}), 98);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    f["default"] = a
}), 66);
__d("URIAbstractBase", ["invariant", "FBLogger", "PHPStrictQuerySerializer", "URIRFC3986", "URISchemes", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    var h, i, j = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        k = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        l = [];
    a = function() {
        "use strict";
        a.parse = function(c, d, e, f) {
            if (!d) return !0;
            if (d instanceof a) {
                c.setProtocol(d.getProtocol());
                c.setDomain(d.getDomain());
                c.setPort(d.getPort());
                c.setPath(d.getPath());
                c.setQueryData(f.deserialize(f.serialize(d.getQueryData())));
                c.setFragment(d.getFragment());
                c.setIsGeneric(d.getIsGeneric());
                c.setForceFragmentSeparator(d.getForceFragmentSeparator());
                c.setOriginalRawQuery(d.getOriginalRawQuery());
                c.setQueryParamModified(!1);
                return !0
            }
            d = d.toString().trim();
            var g = (h || (h = b("URIRFC3986"))).parse(d) || {
                fragment: null,
                scheme: null,
                query: null
            };
            if (!e && !(i || (i = b("URISchemes"))).isAllowed(g.scheme)) return !1;
            c.setProtocol(g.scheme || "");
            if (!e && j.test(g.host || "")) return !1;
            c.setDomain(g.host || "");
            c.setPort(g.port || "");
            c.setPath(g.path || "");
            if (e) c.setQueryData(f.deserialize(g.query || "") || {});
            else try {
                c.setQueryData(f.deserialize(g.query || "") || {})
            } catch (a) {
                return !1
            }
            c.setFragment(g.fragment || "");
            g.fragment === "" && c.setForceFragmentSeparator(!0);
            c.setIsGeneric(g.isGenericURI || !1);
            c.setOriginalRawQuery(g.query);
            c.setQueryParamModified(!1);
            if (g.userinfo !== null) {
                if (e) throw new Error("URI.parse: invalid URI (userinfo is not allowed in a URI): " + d);
                return !1
            }
            if (!c.getDomain() && c.getPath().indexOf("\\") !== -1) {
                if (e) throw new Error("URI.parse: invalid URI (no domain but multiple back-slashes): " + d);
                return !1
            }
            if (!c.getProtocol() && k.test(d)) {
                if (e) throw new Error("URI.parse: invalid URI (unsafe protocol-relative URLs): " + d + "'");
                return !1
            }
            if (c.getDomain() && c.getPath() && !c.getPath().startsWith("/")) {
                if (e) throw new Error("URI.parse: invalid URI (domain and path where path lacks leading slash): " + d);
                return !1
            }
            f = c.getProtocol() === "mailto" || c.getProtocol() === "tel" || c.getProtocol() === "sms";
            c.getProtocol() && !f && !c.getDomain() && c.getPath() !== "" && b("FBLogger")("uri").warn('URI.parse: invalid URI (protocol "' + c.getProtocol() + '" with no domain)');
            return !0
        };
        a.tryParse = function(b, c) {
            var d = new a(null, c);
            return a.parse(d, b, !1, c) ? d : null
        };
        a.isValid = function(b, c) {
            return !!a.tryParse(b, c)
        };

        function a(b, c) {
            c || g(0, 2966), this.$9 = c, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, a.parse(this, b, !0, c), this.$11 = !1
        }
        var c = a.prototype;
        c.setProtocol = function(a) {
            (i || (i = b("URISchemes"))).isAllowed(a) || g(0, 11793, a);
            this.$7 = a;
            return this
        };
        c.getProtocol = function() {
            return (this.$7 || "").toLowerCase()
        };
        c.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        c.isSecure = function() {
            return this.getProtocol() === "https"
        };
        c.setDomain = function(a) {
            if (j.test(a)) throw new Error("URI.setDomain: unsafe domain specified: " + a + " for url " + this.toString());
            this.$1 = a;
            return this
        };
        c.getDomain = function() {
            return this.$1
        };
        c.setPort = function(a) {
            this.$6 = a;
            return this
        };
        c.getPort = function() {
            return this.$6
        };
        c.setPath = function(a) {
            this.$5 = a;
            return this
        };
        c.getPath = function() {
            return this.$5
        };
        c.addQueryData = function(a, b) {
            Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
            this.$11 = !0;
            return this
        };
        c.setQueryData = function(a) {
            this.$8 = a;
            this.$11 = !0;
            return this
        };
        c.getQueryData = function() {
            return this.$8
        };
        c.setQueryString = function(a) {
            return this.setQueryData(this.$9.deserialize(a))
        };
        c.getQueryString = function(a, b, c) {
            a === void 0 && (a = !1);
            b === void 0 && (b = function() {
                return !1
            });
            c === void 0 && (c = null);
            return this.$12(!1, a, b, c)
        };
        c.$12 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            if (!this.$11 && (b || c(this.getDomain()))) {
                return (b = this.$10) != null ? b : ""
            }
            return (a && d ? d : this.$9).serialize(this.getQueryData())
        };
        c.removeQueryData = function(a) {
            Array.isArray(a) || (a = [a]);
            for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
            this.$11 = !0;
            return this
        };
        c.setFragment = function(a) {
            this.$3 = a;
            this.setForceFragmentSeparator(!1);
            return this
        };
        c.getFragment = function() {
            return this.$3
        };
        c.setForceFragmentSeparator = function(a) {
            this.$2 = a;
            return this
        };
        c.getForceFragmentSeparator = function() {
            return this.$2
        };
        c.setIsGeneric = function(a) {
            this.$4 = a;
            return this
        };
        c.getIsGeneric = function() {
            return this.$4
        };
        c.getOriginalRawQuery = function() {
            return this.$10
        };
        c.setOriginalRawQuery = function(a) {
            this.$10 = a;
            return this
        };
        c.setQueryParamModified = function(a) {
            this.$11 = a;
            return this
        };
        c.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
        };
        c.toString = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !1, a, b)
        };
        c.toStringRawQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!0, !1, a, b)
        };
        c.toStringPreserveQuery = function(a, b) {
            a === void 0 && (a = function() {
                return !1
            });
            b === void 0 && (b = null);
            return this.$13(!1, !0, a, b)
        };
        c.toStringStrictQueryEncoding = function(a) {
            a === void 0 && (a = function() {
                return !1
            });
            return this.$13(!0, !1, a, b("PHPStrictQuerySerializer"))
        };
        c.$13 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = this;
            for (var f = 0; f < l.length; f++) e = l[f](e);
            return e.$14(a, b, c, d)
        };
        c.$14 = function(a, b, c, d) {
            a === void 0 && (a = !1);
            b === void 0 && (b = !1);
            c === void 0 && (c = function() {
                return !1
            });
            d === void 0 && (d = null);
            var e = "",
                f = this.getProtocol();
            f && (e += f + ":" + (this.getIsGeneric() ? "" : "//"));
            f = this.getDomain();
            f && (e += f);
            f = this.getPort();
            f && (e += ":" + f);
            f = this.getPath();
            f ? e += f : e && (e += "/");
            f = this.$12(a, b, c, d);
            f && (e += "?" + f);
            a = this.getFragment();
            a ? e += "#" + a : this.getForceFragmentSeparator() && (e += "#");
            return e
        };
        a.registerFilter = function(a) {
            l.push(a)
        };
        c.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        c.isSameOrigin = function(a) {
            return !this.getProtocol() || !this.getDomain() || !a.getProtocol() || !a.getDomain() ? !1 : this.getOrigin() === a.getOrigin()
        };
        c.getQualifiedURIBase = function() {
            return new a(this, this.$9).qualify()
        };
        c.qualify = function() {
            if (!this.getDomain()) {
                var b = new a(window.location.href, this.$9);
                this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
            }
            return this
        };
        c.setSubdomain = function(a) {
            var c = this.qualify();
            c = c.getDomain();
            return this.setDomain(b("setHostSubdomain")(c, a))
        };
        c.getSubdomain = function() {
            if (!this.getDomain()) return "";
            var a = this.getDomain().split(".");
            if (a.length <= 2) return "";
            else return a[0]
        };
        c.isSubdomainOfDomain = function(b) {
            var c = this.getDomain();
            return a.isDomainSubdomainOfDomain(c, b, this.$9)
        };
        a.isDomainSubdomainOfDomain = function(b, c, d) {
            if (c === "" || b === "") return !1;
            if (b.endsWith(c)) {
                var e = b.length,
                    f = c.length,
                    g = e - f - 1;
                if (e === f || b[g] === ".") {
                    e = new a(null, d);
                    e.setDomain(c);
                    return a.isValid(e, d)
                }
            }
            return !1
        };
        return a
    }();
    e.exports = a
}), null);
__d("err", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").err
}), 98);
__d("URIBase", ["PHPQuerySerializerNoEncoding", "URIAbstractBase", "UriNeedRawQuerySVChecker", "err"], (function(a, b, c, d, e, f) {
    function g(a, c, d, e) {
        try {
            a = b("URIAbstractBase").parse(a, c, d, e);
            return a
        } catch (a) {
            throw new Error(b("err")(a.message))
        }
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);
        c.tryParse = function(a, b) {
            var d = new c(null, b);
            return g(d, a, !1, b) ? d : null
        };
        c.isValid = function(a, b) {
            return !!c.tryParse(a, b)
        };

        function c(b, c) {
            var d;
            d = a.call(this, b, c) || this;
            d.$URIBase1 = c;
            g(babelHelpers.assertThisInitialized(d), b, !0, c);
            return d
        }
        var d = c.prototype;
        d.setDomain = function(c) {
            try {
                a.prototype.setDomain.call(this, c)
            } catch (a) {
                throw new Error(b("err")(a.message))
            }
            return this
        };
        d.getQualifiedURIBase = function() {
            return new c(this, this.$URIBase1).qualify()
        };
        d.qualify = function() {
            if (!this.getDomain()) {
                var a = new c(window.location.href, this.$URIBase1);
                this.setProtocol(a.getProtocol()).setDomain(a.getDomain()).setPort(a.getPort())
            }
            return this
        };
        d.isSubdomainOfDomain = function(a) {
            var b = this.getDomain();
            return c.isDomainSubdomainOfDomain(b, a, this.$URIBase1)
        };
        c.isDomainSubdomainOfDomain = function(a, b, d) {
            if (b === "" || a === "") return !1;
            if (a.endsWith(b)) {
                var e = a.length,
                    f = b.length,
                    g = e - f - 1;
                if (e === f || a[g] === ".") {
                    e = new c(null, d);
                    e.setDomain(b);
                    return c.isValid(e, d)
                }
            }
            return !1
        };
        d.toString = function() {
            return a.prototype.toString.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringRawQuery = function() {
            return a.prototype.toStringRawQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringPreserveQuery = function() {
            return a.prototype.toStringPreserveQuery.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        d.toStringStrictQueryEncoding = function() {
            return a.prototype.toStringStrictQueryEncoding.call(this, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery)
        };
        d.getQueryString = function(c) {
            c === void 0 && (c = !1);
            return a.prototype.getQueryString.call(this, c, b("UriNeedRawQuerySVChecker").isDomainNeedRawQuery, b("PHPQuerySerializerNoEncoding"))
        };
        return c
    }(b("URIAbstractBase"));
    e.exports = a
}), null);
__d("UriNeedRawQuerySVChecker", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = ["http", "https"];

    function a(a) {
        if (a == null) return !1;
        a = a instanceof(g || (g = b("URIBase"))) ? a : (g || (g = b("URIBase"))).tryParse(a, h || (h = b("PHPQuerySerializer")));
        if (a == null) return !1;
        var c = a.getProtocol();
        return !i.includes(c) ? !1 : j(a.getDomain())
    }

    function j(a) {
        return a != null && b("UriNeedRawQuerySVConfig").uris.some(function(c) {
            return (g || (g = b("URIBase"))).isDomainSubdomainOfDomain(a, c, h || (h = b("PHPQuerySerializer")))
        })
    }
    e.exports = {
        isUriNeedRawQuery: a,
        isDomainNeedRawQuery: j
    }
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
    f["default"] = a
}), 66);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    f["default"] = a
}), 66);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && h(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
    g["default"] = a
}), 98);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    f["default"] = a
}), 66);
__d("unexpectedUseInComet", ["FBLogger", "err", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (!c("gkx")("708253")) return;
        a = a + " called unexpectedly. This is not supported in Comet!";
        c("FBLogger")("comet_infra").blameToPreviousFrame().blameToPreviousFrame().mustfix(a)
    }
    g["default"] = a
}), 98);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a.setProtocol("").setDomain("").setPort("")
    }
    f["default"] = a
}), 66);
__d("URI", ["Env", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "UriNeedRawQuerySVChecker", "areSameOrigin", "ifRequired", "isFacebookURI", "memoize", "memoizeStringOnly", "unexpectedUseInComet", "unqualifyURI"], (function(a, b, c, d, e, f, g) {
    var h = c("memoize")(function() {
        return new j(window.location.href)
    });

    function i() {
        return c("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var j = function(e) {
        babelHelpers.inheritsLoose(b, e);

        function b(a) {
            var b;
            d("UriNeedRawQuerySVChecker").isUriNeedRawQuery(a) ? b = e.call(this, a, d("PHPQuerySerializerNoEncoding")) || this : b = e.call(this, a || "", d("PHPQuerySerializer")) || this;
            return babelHelpers.assertThisInitialized(b)
        }
        var f = b.prototype;
        f.setPath = function(a) {
            this.path = a;
            return e.prototype.setPath.call(this, a)
        };
        f.getPath = function() {
            var a = e.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        f.setProtocol = function(a) {
            this.protocol = a;
            return e.prototype.setProtocol.call(this, a)
        };
        f.setDomain = function(a) {
            this.domain = a;
            return e.prototype.setDomain.call(this, a)
        };
        f.setPort = function(a) {
            this.port = a;
            return e.prototype.setPort.call(this, a)
        };
        f.setFragment = function(a) {
            this.fragment = a;
            return e.prototype.setFragment.call(this, a)
        };
        f.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        f.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        f.valueOf = function() {
            return this.toString()
        };
        f.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!c("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        };
        f.getUnqualifiedURI = function() {
            return c("unqualifyURI")(new b(this))
        };
        f.getQualifiedURI = function() {
            return new b(this).qualify()
        };
        f.isSameOrigin = function(a) {
            a = a;
            a == null ? a = h() : a instanceof b || (a = new b(a.toString()));
            return c("areSameOrigin")(this, a)
        };
        b.goURIOnNewWindow = function(a) {
            b.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        b.goURIOnWindow = function(e, f, g, h) {
            g === void 0 && (g = !1);
            h === void 0 && (h = !1);
            e = new b(e);
            g = g;
            var i = !f || f === window;
            if (c("Env").isCQuick && c("isFacebookURI")(e) && i) {
                i = {
                    cquick: c("Env").iframeKey,
                    ctarget: c("Env").iframeTarget,
                    cquick_token: c("Env").iframeToken
                };
                e.addQueryData(i);
                g = !1
            }
            i = e.toString();
            e = f ? f : window;
            !g && a.PageTransitions ? a.PageTransitions.go(i, h) : window.location.href === i ? d("ReloadPage").now() : h ? e.location.replace(i) : e.location.href = i
        };
        f.go = function(a, d) {
            c("unexpectedUseInComet")("uri.go"), b.go(this, a, d)
        };
        b.tryParseURI = function(a) {
            a = c("URIBase").tryParse(a, d("PHPQuerySerializer"));
            return a ? new b(a) : null
        };
        b.isValidURI = function(a) {
            return c("URIBase").isValid(a, d("PHPQuerySerializer"))
        };
        b.getRequestURI = function(a, c) {
            a === void 0 && (a = !0);
            c === void 0 && (c = !1);
            if (a) {
                a = i();
                if (a) return a.getCurrentURI(!!c).getQualifiedURI()
            }
            return new b(window.location.href)
        };
        b.getMostRecentURI = function() {
            var a = i();
            return a ? a.getMostRecentURI().getQualifiedURI() : new b(window.location.href)
        };
        b.getNextURI = function() {
            var a = i();
            return a ? a.getNextURI().getQualifiedURI() : new b(window.location.href)
        };
        b.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        b.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        b.normalize = function(a) {
            return a != null && typeof a === "string" ? this.normalizeString(a) : new b(a).toString()
        };
        return b
    }(c("URIBase"));
    j.go = function(a, b, d) {
        c("unexpectedUseInComet")("URI.go"), j.goURIOnWindow(a, window, b, d)
    };
    j.normalizeString = c("memoizeStringOnly")(function(a) {
        return new j(a).toString()
    });
    j.expression = /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/;
    j.arrayQueryExpression = /^(\w+)((?:\[\w*\])+)=?(.*)/;
    g["default"] = j
}), 98);
__d("isCometAltpayJsSdkIframeAllowedDomain", ["CometAltpayJsSdkIframeAllowedDomains", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = Object.freeze(c("CometAltpayJsSdkIframeAllowedDomains"));
    var h = Object.freeze(b.allowed_domains);

    function a() {
        var a = new(c("URI"))(window.location.href);
        if (h == null || h.length <= 0) return !1;
        var b = h.some(function(b) {
            b = new(c("URI"))(b);
            return b == null ? !1 : a.isSameOrigin(b)
        });
        return b ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("ReloadPage", ["BlueCompatRouter", "Env"], (function(a, b, c, d, e, f) {
    var g;

    function h(c) {
        !(g || (g = b("Env"))).isCQuick ? a.window.location.reload(c) : b("BlueCompatRouter").sendMessage({
            compatAction: "reload"
        })
    }

    function c(b) {
        a.setTimeout(h, b)
    }
    f.now = h;
    f.delay = c
}), 66);
__d("isInternalFBURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)internalfb\\.com$", "i");

    function a(a) {
        return g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx", "isInternalFBURI"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a, b) {
            this.$1 = {}, this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.setInt = function(a, b) {
            return this.__setParam(a, "Int", b)
        };
        b.setFBID = function(a, b) {
            return this.__setParam(a, "FBID", b)
        };
        b.setFloat = function(a, b) {
            return this.__setParam(a, "Float", b)
        };
        b.setString = function(a, b) {
            return this.__setParam(a, "String", b)
        };
        b.setExists = function(a, b) {
            b === !1 && (b = void 0);
            return this.__setParam(a, "Exists", b)
        };
        b.setBool = function(a, b) {
            return this.__setParam(a, "Bool", b)
        };
        b.setBoolVector = function(a, b) {
            return this.__setParam(a, "BoolVector", b)
        };
        b.setEnum = function(a, b) {
            return this.__setParam(a, "Enum", b)
        };
        b.setPath = function(a, b) {
            return this.__setParam(a, "Path", b)
        };
        b.setIntVector = function(a, b) {
            return this.__setParam(a, "IntVector", b)
        };
        b.setIntKeyset = function(a, b) {
            return this.__setParam(a, "IntKeyset", b)
        };
        b.setIntSet = function(a, b) {
            return this.__setParam(a, "IntSet", b.join(","))
        };
        b.setFloatVector = function(a, b) {
            return this.__setParam(a, "FloatVector", b)
        };
        b.setFloatSet = function(a, b) {
            return this.__setParam(a, "FloatSet", b.join(","))
        };
        b.setStringVector = function(a, b) {
            return this.__setParam(a, "StringVector", b)
        };
        b.setStringKeyset = function(a, b) {
            return this.__setParam(a, "StringKeyset", b)
        };
        b.setStringSet = function(a, b) {
            return this.__setParam(a, "StringSet", b)
        };
        b.setFBIDVector = function(a, b) {
            return this.__setParam(a, "FBIDVector", b)
        };
        b.setFBIDSet = function(a, b) {
            return this.__setParam(a, "FBIDSet", b)
        };
        b.setFBIDKeyset = function(a, b) {
            return this.__setParam(a, "FBIDKeyset", b)
        };
        b.setEnumVector = function(a, b) {
            return this.__setParam(a, "EnumVector", b)
        };
        b.setEnumSet = function(a, b) {
            return this.__setParam(a, "EnumSet", b)
        };
        b.setEnumKeyset = function(a, b) {
            return this.__setParam(a, "EnumKeyset", b)
        };
        b.setIntToIntMap = function(a, b) {
            return this.__setParam(a, "IntToIntMap", b)
        };
        b.setIntToFloatMap = function(a, b) {
            return this.__setParam(a, "IntToFloatMap", b)
        };
        b.setIntToStringMap = function(a, b) {
            return this.__setParam(a, "IntToStringMap", b)
        };
        b.setIntToBoolMap = function(a, b) {
            return this.__setParam(a, "IntToBoolMap", b)
        };
        b.setStringToIntMap = function(a, b) {
            return this.__setParam(a, "StringToIntMap", b)
        };
        b.setStringToFloatMap = function(a, b) {
            return this.__setParam(a, "StringToFloatMap", b)
        };
        b.setStringToStringMap = function(a, b) {
            return this.__setParam(a, "StringToStringMap", b)
        };
        b.setStringToNullableStringMap = function(a, b) {
            return this.__setParam(a, "StringToNullableStringMap", b)
        };
        b.setStringToBoolMap = function(a, b) {
            return this.__setParam(a, "StringToBoolMap", b)
        };
        b.setStringToEnumMap = function(a, b) {
            return this.__setParam(a, "StringToEnumMap", b)
        };
        b.setEnumToStringVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToStringVectorMap", b)
        };
        b.setEnumToStringMap = function(a, b) {
            return this.__setParam(a, "EnumToStringMap", b)
        };
        b.setEnumToBoolMap = function(a, b) {
            return this.__setParam(a, "EnumToBoolMap", b)
        };
        b.setEnumToEnumMap = function(a, b) {
            return this.__setParam(a, "EnumToEnumMap", b)
        };
        b.setEnumToIntMap = function(a, b) {
            return this.__setParam(a, "EnumToIntMap", b)
        };
        b.setEnumToFBIDVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToFBIDVectorMap", b)
        };
        b.setStringToIntDict = function(a, b) {
            return this.__setParam(a, "StringToIntDict", b)
        };
        b.setStringToNullableIntDict = function(a, b) {
            return this.__setParam(a, "StringToNullableIntDict", b)
        };
        b.setStringToFloatDict = function(a, b) {
            return this.__setParam(a, "StringToFloatDict", b)
        };
        b.setStringToStringKeysetDict = function(a, b) {
            return this.__setParam(a, "StringToStringKeysetDict", b)
        };
        b.setStringToNullableFloatDict = function(a, b) {
            return this.__setParam(a, "StringToNullableFloatDict", b)
        };
        b.setStringToStringDict = function(a, b) {
            return this.__setParam(a, "StringToStringDict", b)
        };
        b.setStringToNullableStringDict = function(a, b) {
            return this.__setParam(a, "StringToNullableStringDict", b)
        };
        b.setStringToBoolDict = function(a, b) {
            return this.__setParam(a, "StringToBoolDict", b)
        };
        b.setStringToEnumDict = function(a, b) {
            return this.__setParam(a, "StringToEnumDict", b)
        };
        b.setEnumToIntDict = function(a, b) {
            return this.__setParam(a, "EnumToIntDict", b)
        };
        b.setEnumToStringDict = function(a, b) {
            return this.__setParam(a, "EnumToStringDict", b)
        };
        b.setHackType = function(a, b) {
            return this.__setParam(a, "HackType", b)
        };
        b.setTypeAssert = function(a, b) {
            return this.__setParam(a, "TypeAssert", b)
        };
        b.__validateRequiredParamsExistence = function() {
            for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || h(0, 903, a)
        };
        b.setParams = function(a) {
            for (var b in a) {
                this.__assertParamExists(b);
                var c = this.$3[b].type;
                this.__setParam(b, c, a[b])
            }
            return this
        };
        b.__assertParamExists = function(a) {
            a in this.$3 || h(0, 37339, a)
        };
        b.__setParam = function(a, b, c) {
            this.__assertParamExists(a);
            var d = this.$3[a].type,
                e = {
                    StringOrPFBID: "String",
                    IntOrPFBID: "Int",
                    FBIDOrPFBID: "FBID"
                };
            e = e[d];
            d === b || e === b || h(0, 37340, a, b, d);
            this.__setParamInt(a, c);
            return this
        };
        b.__setParamInt = function(a, b) {
            this.$1[a] = b
        };
        b.getRequest_LEGACY_UNTYPED = function(a) {
            return a.setReplaceTransportMarkers().setURI(this.getURI())
        };
        b.setPreviousActorIsPageVoice = function(a) {
            this.__setParamInt("paipv", a ? 1 : 0);
            return this
        };
        b.getURI = function() {
            this.__validateRequiredParamsExistence();
            var a = {},
                b = "",
                d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                e = this.$2.split("/"),
                f = !1;
            for (var g = 0; g < e.length; g++) {
                var i = e[g];
                if (i === "") continue;
                var j = d.exec(i);
                if (!j) b += "/" + i;
                else {
                    i = j[2] === "?";
                    var k = j[4],
                        l = this.$3[k];
                    l || h(0, 11837, k, this.$2);
                    if (i && f) continue;
                    if (this.$1[k] == null && i) {
                        f = !0;
                        continue
                    }
                    i = this.$1[k] != null ? this.$1[k] : l.defaultValue;
                    i != null || h(0, 907, k);
                    l = j[1] ? j[1] : "";
                    j = j[5] ? j[5] : "";
                    b += "/" + l + i + j;
                    a[k] = !0
                }
            }
            this.$2.slice(-1) === "/" && (b += "/");
            b === "" && (b = "/");
            l = new(c("URI"))(b);
            for (var i in this.$1) {
                j = this.$1[i];
                if (!a[i] && j != null) {
                    k = this.$3[i];
                    l.addQueryData(i, k && k.type === "Exists" ? null : j)
                }
            }
            return l
        };
        b.getLookasideURI = function() {
            var a = "lookaside.facebook.com";
            c("isInternalFBURI")(c("URI").getRequestURI()) ? a = "lookaside.internalfb.com" : c("gkx")("996940") && (a = "lookaside.internmc.facebook.com");
            return this.getURI().setDomain(a).setProtocol("https")
        };
        a.create = function(b, c) {
            return function() {
                return new a(b, c)
            }
        };
        return a
    }();
    a.prototype.getRequest = function(a) {
        return this.getRequest_LEGACY_UNTYPED(a)
    };
    g["default"] = a
}), 98);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    var h = function a(b, c, d) {
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0, 11839, c);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0, 11840, c);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0, 11841, c)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0, 5045);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0, 5045);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0, 11842, b)
        }
        return e
    };
    a = function() {
        function a(a, b, c) {
            this.$1 = b;
            this.$2 = babelHelpers["extends"]({}, c.getQueryData());
            b = a.split("/").filter(function(a) {
                return a
            });
            a = c.getPath().split("/").filter(function(a) {
                return a
            });
            for (var d = 0; d < b.length; ++d) {
                var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                if (!e) {
                    b[d] === a[d] || g(0, 5047, c.getPath());
                    continue
                }
                var f = !!e[1],
                    h = !!e[2];
                !h || d === b.length - 1 || g(0, 11843, i);
                var i = e[3];
                Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 11844, i);
                this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
            }
            Object.keys(this.$1).forEach(function(a) {
                !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
            }, this)
        }
        var b = a.prototype;
        b.getExists = function(a) {
            return this.$2[a] !== void 0
        };
        b.getBool = function(a) {
            return this.$3(a, "Bool")
        };
        b.getInt = function(a) {
            return this.$3(a, "Int")
        };
        b.getFloat = function(a) {
            return this.$3(a, "Float")
        };
        b.getFBID = function(a) {
            return this.$3(a, "FBID")
        };
        b.getString = function(a) {
            return this.$3(a, "String")
        };
        b.getEnum = function(a) {
            return this.$3(a, "Enum")
        };
        b.getOptionalInt = function(a) {
            return this.$4(a, "Int")
        };
        b.getOptionalFloat = function(a) {
            return this.$4(a, "Float")
        };
        b.getOptionalFBID = function(a) {
            return this.$4(a, "FBID")
        };
        b.getOptionalString = function(a) {
            return this.$4(a, "String")
        };
        b.getOptionalEnum = function(a) {
            return this.$4(a, "Enum")
        };
        b.getIntVector = function(a) {
            return this.$3(a, "IntVector")
        };
        b.getFloatVector = function(a) {
            return this.$3(a, "FloatVector")
        };
        b.getFBIDVector = function(a) {
            return this.$3(a, "FBIDVector")
        };
        b.getStringVector = function(a) {
            return this.$3(a, "StringVector")
        };
        b.getEnumVector = function(a) {
            return this.$3(a, "EnumVector")
        };
        b.getOptionalIntVector = function(a) {
            return this.$4(a, "IntVector")
        };
        b.getOptionalFloatVector = function(a) {
            return this.$4(a, "FloatVector")
        };
        b.getOptionalFBIDVector = function(a) {
            return this.$4(a, "FBIDVector")
        };
        b.getOptionalStringVector = function(a) {
            return this.$4(a, "StringVector")
        };
        b.getOptionalEnumVector = function(a) {
            return this.$4(a, "EnumVector")
        };
        b.getIntSet = function(a) {
            return this.$3(a, "IntSet")
        };
        b.getFBIDSet = function(a) {
            return this.$3(a, "FBIDSet")
        };
        b.getFBIDKeyset = function(a) {
            return this.$3(a, "FBIDKeyset")
        };
        b.getStringSet = function(a) {
            return this.$3(a, "StringSet")
        };
        b.getEnumKeyset = function(a) {
            return this.$3(a, "EnumKeyset")
        };
        b.getOptionalIntSet = function(a) {
            return this.$4(a, "IntSet")
        };
        b.getOptionalFBIDSet = function(a) {
            return this.$4(a, "FBIDSet")
        };
        b.getOptionalFBIDKeyset = function(a) {
            return this.$4(a, "FBIDKeyset")
        };
        b.getOptionalStringSet = function(a) {
            return this.$4(a, "StringSet")
        };
        b.getEnumToBoolMap = function(a) {
            return this.$3(a, "EnumToBoolMap")
        };
        b.getEnumToEnumMap = function(a) {
            return this.$3(a, "EnumToEnumMap")
        };
        b.getEnumToFloatMap = function(a) {
            return this.$3(a, "EnumToFloatMap")
        };
        b.getEnumToIntMap = function(a) {
            return this.$3(a, "EnumToIntMap")
        };
        b.getEnumToStringMap = function(a) {
            return this.$3(a, "EnumToStringMap")
        };
        b.getIntToBoolMap = function(a) {
            return this.$3(a, "IntToBoolMap")
        };
        b.getIntToEnumMap = function(a) {
            return this.$3(a, "IntToEnumMap")
        };
        b.getIntToFloatMap = function(a) {
            return this.$3(a, "IntToFloatMap")
        };
        b.getIntToIntMap = function(a) {
            return this.$3(a, "IntToIntMap")
        };
        b.getIntToStringMap = function(a) {
            return this.$3(a, "IntToStringMap")
        };
        b.getStringToBoolMap = function(a) {
            return this.$3(a, "StringToBoolMap")
        };
        b.getStringToEnumMap = function(a) {
            return this.$3(a, "StringToEnumMap")
        };
        b.getStringToFloatMap = function(a) {
            return this.$3(a, "StringToFloatMap")
        };
        b.getStringToIntMap = function(a) {
            return this.$3(a, "StringToIntMap")
        };
        b.getStringToStringMap = function(a) {
            return this.$3(a, "StringToStringMap")
        };
        b.getOptionalEnumToBoolMap = function(a) {
            return this.$4(a, "EnumToBoolMap")
        };
        b.getOptionalEnumToEnumMap = function(a) {
            return this.$4(a, "EnumToEnumMap")
        };
        b.getOptionalEnumToFloatMap = function(a) {
            return this.$4(a, "EnumToFloatMap")
        };
        b.getOptionalEnumToIntMap = function(a) {
            return this.$4(a, "EnumToIntMap")
        };
        b.getOptionalEnumToStringMap = function(a) {
            return this.$4(a, "EnumToStringMap")
        };
        b.getOptionalIntToBoolMap = function(a) {
            return this.$4(a, "IntToBoolMap")
        };
        b.getOptionalIntToEnumMap = function(a) {
            return this.$4(a, "IntToEnumMap")
        };
        b.getOptionalIntToFloatMap = function(a) {
            return this.$4(a, "IntToFloatMap")
        };
        b.getOptionalIntToIntMap = function(a) {
            return this.$4(a, "IntToIntMap")
        };
        b.getOptionalIntToStringMap = function(a) {
            return this.$4(a, "IntToStringMap")
        };
        b.getOptionalStringToBoolMap = function(a) {
            return this.$4(a, "StringToBoolMap")
        };
        b.getOptionalStringToEnumMap = function(a) {
            return this.$4(a, "StringToEnumMap")
        };
        b.getOptionalStringToFloatMap = function(a) {
            return this.$4(a, "StringToFloatMap")
        };
        b.getOptionalStringToIntMap = function(a) {
            return this.$4(a, "StringToIntMap")
        };
        b.getOptionalStringToStringMap = function(a) {
            return this.$4(a, "StringToStringMap")
        };
        b.getEnumToNullableEnumMap = function(a) {
            return this.$3(a, "EnumToNullableEnumMap")
        };
        b.getEnumToNullableFloatMap = function(a) {
            return this.$3(a, "EnumToNullableFloatMap")
        };
        b.getEnumToNullableIntMap = function(a) {
            return this.$3(a, "EnumToNullableIntMap")
        };
        b.getEnumToNullableStringMap = function(a) {
            return this.$3(a, "EnumToNullableStringMap")
        };
        b.getIntToNullableEnumMap = function(a) {
            return this.$3(a, "IntToNullableEnumMap")
        };
        b.getIntToNullableFloatMap = function(a) {
            return this.$3(a, "IntToNullableFloatMap")
        };
        b.getIntToNullableIntMap = function(a) {
            return this.$3(a, "IntToNullableIntMap")
        };
        b.getIntToNullableStringMap = function(a) {
            return this.$3(a, "IntToNullableStringMap")
        };
        b.getStringToNullableEnumMap = function(a) {
            return this.$3(a, "StringToNullableEnumMap")
        };
        b.getStringToNullableFloatMap = function(a) {
            return this.$3(a, "StringToNullableFloatMap")
        };
        b.getStringToNullableIntMap = function(a) {
            return this.$3(a, "StringToNullableIntMap")
        };
        b.getStringToNullableStringMap = function(a) {
            return this.$3(a, "StringToNullableStringMap")
        };
        b.getOptionalEnumToNullableEnumMap = function(a) {
            return this.$4(a, "EnumToNullableEnumMap")
        };
        b.getOptionalEnumToNullableFloatMap = function(a) {
            return this.$4(a, "EnumToNullableFloatMap")
        };
        b.getOptionalEnumToNullableIntMap = function(a) {
            return this.$4(a, "EnumToNullableIntMap")
        };
        b.getOptionalEnumToNullableStringMap = function(a) {
            return this.$4(a, "EnumToNullableStringMap")
        };
        b.getOptionalIntToNullableEnumMap = function(a) {
            return this.$4(a, "IntToNullableEnumMap")
        };
        b.getOptionalIntToNullableFloatMap = function(a) {
            return this.$4(a, "IntToNullableFloatMap")
        };
        b.getOptionalIntToNullableIntMap = function(a) {
            return this.$4(a, "IntToNullableIntMap")
        };
        b.getOptionalIntToNullableStringMap = function(a) {
            return this.$4(a, "IntToNullableStringMap")
        };
        b.getOptionalStringToNullableEnumMap = function(a) {
            return this.$4(a, "StringToNullableEnumMap")
        };
        b.getOptionalStringToNullableFloatMap = function(a) {
            return this.$4(a, "StringToNullableFloatMap")
        };
        b.getOptionalStringToNullableIntMap = function(a) {
            return this.$4(a, "StringToNullableIntMap")
        };
        b.getOptionalStringToNullableStringMap = function(a) {
            return this.$4(a, "StringToNullableStringMap")
        };
        b.$3 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                c.required && g(0, 5052);
                return h(b, c.defaultValue, c.enumType)
            }
            c.required || b === "Bool" || c.defaultValue != null || g(0, 11845, b, a, b, a);
            return h(b, this.$2[a], c.enumType)
        };
        b.$4 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            c.required && g(0, 11846, b, a, b, a);
            c.defaultValue && g(0, 5052);
            return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
        };
        b.$5 = function(a, b) {
            Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 37317, a), this.$1[a].type === b || g(0, 11848, a, b, this.$1[a].type)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.getURIBuilder = function(a) {
            var b = new(c("XControllerURIBuilder"))(this.$1, this.$2);
            if (a) {
                var d = this.getRequest(a);
                Object.keys(this.$2).forEach(function(a) {
                    var c = this.$2[a],
                        e = "";
                    !c.required && !Object.prototype.hasOwnProperty.call(c, "defaultValue") && (e = "Optional");
                    e = "get" + e + c.type;
                    e = d[e](a);
                    if (e == null || Object.prototype.hasOwnProperty.call(c, "defaultValue") && e === c.defaultValue) return;
                    c = "set" + c.type;
                    b[c](a, e)
                }, this)
            }
            return b
        };
        b.getRequest = function(a) {
            return new(c("XRequest"))(this.$1, this.$2, a)
        };
        a.create = function(b, c) {
            return new a(b, c)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("XHeartbeatController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/nw/", {})
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    b = a;
    f["default"] = b
}), 66);
__d("clearTimeout", ["cr:806696"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:806696")
}), 98);
__d("getSameOriginTransport", ["ExecutionEnvironment", "err"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw b("err")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment.");
        try {
            return new a.XMLHttpRequest()
        } catch (a) {
            throw b("err")("getSameOriginTransport: %s", a.message)
        }
    }
    e.exports = c
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("KSConfig").killed.has(a)
    }
    e.exports = a
}), null);
__d("setTimeout", ["cr:807042"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:807042")
}), 98);
__d("NetworkHeartbeat", ["XHeartbeatController", "clearTimeout", "getSameOriginTransport", "killswitch", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("XHeartbeatController").getURIBuilder().getURI().toString(),
        i = 6400,
        j = 100,
        k = null,
        l = 0,
        m = null,
        n = c("killswitch")("DISABLE_HEARTBEAT_POLLING");

    function o(a, b) {
        m = c("getSameOriginTransport")(), m.open("GET", h, !0), m.onload = function() {
            m && m.status === 204 && (n = !0), q(a)
        }, m.onerror = function() {
            r(a, b)
        }, m.ontimeout = function() {
            r(a, b)
        }, m.send()
    }

    function p() {
        m = null, j = 100, l = 0, c("clearTimeout")(k)
    }

    function q(a) {
        p(), a()
    }

    function r(a, b) {
        k = c("setTimeout")(function() {
            s(a, b, void 0, !0)
        }, j), l++, j < i && (j = Math.min(j * Math.pow(2, l), i)), b()
    }

    function s(a, b, c, d) {
        c === void 0 && (c = function() {
            return !0
        }), d === void 0 && (d = !1), n || (d || m == null && c()) && o(a, b)
    }

    function a() {
        return m != null
    }
    g.maybeStartHeartbeat = s;
    g.isHeartbeatPending = a
}), 98);
__d("NetworkStatusImpl", ["FBLogger", "NetworkHeartbeat", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = [],
        i = window.navigator.onLine,
        j = 2,
        k = 5e3,
        l = [],
        m = [],
        n = 0,
        o = !0,
        p = !1,
        q = function() {
            u(o, !0)
        },
        r = function() {
            u(p, !0)
        };

    function s() {
        var a = h.slice();
        a.forEach(function(a) {
            a({
                online: i
            })
        })
    }

    function t(a) {
        a = h.indexOf(a);
        a > -1 && h.splice(a, 1)
    }

    function u(a, b) {
        b === void 0 && (b = !1);
        var e = i === a;
        b = !b && a === o && d("NetworkHeartbeat").isHeartbeatPending();
        if (e || b) return;
        i = a;
        c("FBLogger")("NetworkStatus").warn("Network switched to " + (a ? "online" : "offline"));
        i || d("NetworkHeartbeat").maybeStartHeartbeat(q, r);
        s()
    }

    function v() {
        var a = c("performanceNow")();
        l = l.filter(function(b) {
            return w(b.startTime, a)
        });
        m = m.filter(function(b) {
            return w(b.startTime, a)
        });
        return m.length / l.length < j
    }
    var w = function(a, b) {
        return a > b - k
    };

    function a() {
        return i
    }

    function b(a) {
        h.push(a);
        var b = !1;
        return {
            remove: function() {
                b || (b = !0, t(a))
            }
        }
    }

    function e() {
        var a = c("performanceNow")();
        l.push({
            startTime: a
        });
        d("NetworkHeartbeat").maybeStartHeartbeat(q, r, v)
    }

    function f() {
        var a = c("performanceNow")();
        m.push({
            startTime: a
        });
        w(n, a) || (m = m.filter(function(b) {
            return w(b.startTime, a)
        }), n = a)
    }
    window.addEventListener("online", function() {
        u(o)
    });
    window.addEventListener("offline", function() {
        u(p)
    });
    g.isOnline = a;
    g.onChange = b;
    g.reportError = e;
    g.reportSuccess = f
}), 98);
__d("NetworkStatusSham", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !0
    }

    function b(a) {
        return {
            remove: function() {}
        }
    }

    function c() {
        return
    }

    function d() {
        return
    }
    f.isOnline = a;
    f.onChange = b;
    f.reportError = c;
    f.reportSuccess = d
}), 66);
__d("NetworkStatus", ["NetworkStatusImpl", "NetworkStatusSham", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("gkx")("708253") && c("gkx")("1263340") ? d("NetworkStatusImpl") : d("NetworkStatusSham");
    b = a;
    g["default"] = b
}), 98);
__d("CircularBuffer", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            if (a <= 0) throw c("unrecoverableViolation")("Buffer size should be a positive integer", "comet_infra");
            this.$1 = a;
            this.$2 = 0;
            this.$3 = [];
            this.$4 = []
        }
        var b = a.prototype;
        b.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        b.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        b.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        b.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        b.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        b.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        b.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    b = a;
    f["default"] = b
}), 66);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    f["default"] = b
}), 66);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 1e3,
        j = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        k = {},
        l = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(i),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        k[a] = {
            idx: 1,
            entries: c
        };
        l[a] = d
    });

    function m(a, c, d) {
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = n.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(g || (g = b("URI")))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var n = {
        getUID: function(a, b) {
            var c = k[a],
                d = m(a, b, c.idx);
            c.entries.write(d);
            l[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = l[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return l[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = (h || (h = b("performanceAbsoluteNow")))()
        },
        measureResponseReceived: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = (h || (h = b("performanceAbsoluteNow")))()
        },
        annotate: function(a, c) {
            a = l[a];
            a = a.get(c);
            if (!a) return j;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = l[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = n
}), null);
__d("TimeSlice", ["cr:717822"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:717822")
}), 98);
__d("clearInterval", ["cr:1003267"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:1003267")
}), 98);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    }
    f["default"] = a
}), 66);
__d("setIntervalAcrossTransitions", ["cr:896462"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:896462")
}), 98);
__d("CSSLoader", ["CSSLoaderConfig", "NetworkStatus", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "nullthrows", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = 20,
        i = b("CSSLoaderConfig").timeout,
        j = b("CSSLoaderConfig").loadEventSupported,
        k, l = [],
        m, n = new Map();

    function o(a) {
        if (k) return;
        k = !0;
        var b = document.createElement("link");
        b.onload = function() {
            j = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function p() {
        var a = [],
            c = [];
        if (Date.now() >= m) {
            for (var d = n.values(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (e) {
                    if (f >= d.length) break;
                    h = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    h = f.value
                }
                h = h;
                c.push(h.signal);
                a.push(h.error)
            }
            n.clear()
        } else
            for (var h = n, f = Array.isArray(h), e = 0, h = f ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (e >= h.length) break;
                    d = h[e++]
                } else {
                    e = h.next();
                    if (e.done) break;
                    d = e.value
                }
                d = d;
                var j = d[0];
                d = d[1];
                var k = d.signal,
                    l = window.getComputedStyle ? getComputedStyle(k) : k.currentStyle;
                l && parseInt(l.height, 10) > 1 && (a.push(d.load), c.push(k), n["delete"](j))
            }
        for (var l = 0; l < c.length; l++) {
            d = b("nullthrows")(c[l].parentNode);
            d.removeChild(c[l])
        }
        if (!(g || (g = b("isEmpty")))(a)) {
            for (l = 0; l < a.length; l++) a[l]();
            m = Date.now() + i
        }
        return n.size === 0
    }

    function q(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = n.size !== 0;
        m = Date.now() + i;
        n.set(a, {
            signal: f,
            load: d,
            error: e
        });
        if (!c) var g = b("setIntervalAcrossTransitions")(function() {
            p() && b("clearInterval")(g)
        }, h)
    }

    function r(a, c, d, e, f, g) {
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var i = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? q(a, d, i, f) : j !== !0 ? (q(a, d, i, f), j === void 0 && o(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, i()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, c, d, e, f, g) {
            var h = document;
            if ("createStyleSheet" in h) {
                var i;
                for (var j = 0; j < l.length; j++)
                    if (l[j].imports.length < 31) {
                        i = j;
                        break
                    }
                if (i === void 0) {
                    try {
                        l.push(h.createStyleSheet())
                    } catch (a) {
                        b("NetworkStatus").reportError();
                        g();
                        return
                    }
                    i = l.length - 1
                }
                b("NetworkStatus").reportSuccess();
                l[i].addImport(c);
                r(a, c, d, f, g, null);
                return
            }
            j = h.createElement("link");
            j.rel = "stylesheet";
            j.type = "text/css";
            j.href = c;
            e && (j.crossOrigin = "anonymous");
            r(a, c, d, f, g, j);
            d.appendChild(j)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            r(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("ClientConsistencyEventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("BaseEventEmitter"))();
    b = a;
    g["default"] = b
}), 98);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    f["default"] = a
}), 66);
__d("ClientConsistency", ["ClientConsistencyEventEmitter", "SiteData", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("SiteData").client_revision,
        h = !1,
        i = null,
        j = {},
        k = new Set(),
        l = new Set(),
        m = function(a) {
            j = {};
            var c = Object.keys(a).sort().reverse(),
                d = function() {
                    if (f) {
                        if (g >= e.length) return "break";
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) return "break";
                        h = g.value
                    }
                    var c = h,
                        d = Number(c);
                    c = (c = a[d]) != null ? c : [];
                    if (c.length === 0) {
                        n(d);
                        return "break"
                    }
                    c.forEach(function(a) {
                        var c;
                        j[a] = Math.max((c = j[a]) != null ? c : 0, d);
                        if (l.has(a)) return;
                        l.add(a);
                        b("requireWeak").call(null, a, function() {
                            if (!j[a]) return;
                            n(j[a])
                        })
                    })
                };
            for (var e = c, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                c = d();
                if (c === "break") break
            }
        },
        n = function(a) {
            a === 2 && b("ClientConsistencyEventEmitter").emit("softRefresh"), a === 3 && b("ClientConsistencyEventEmitter").emit("hardRefresh")
        },
        o = function(a) {
            var b = a.actions;
            a = a.rev;
            if (a === g) return;
            i = b;
            b != null && m(b)
        };
    a = {
        init: function() {
            if (h) return;
            b("ClientConsistencyEventEmitter").addListener("newEntry", function(a) {
                o(a)
            });
            h = !0
        },
        addAdditionalRevision: function(a) {
            a !== g && (k.add(a), b("ClientConsistencyEventEmitter").emit("newRevision", a))
        },
        getAdditionalRevisions: function() {
            return k
        },
        hasPendingClientActions: function() {
            return i != null && Object.keys(i).length > 0
        }
    };
    e.exports = a
}), null);
__d("ErrorPubSub", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorPubSub
}), 98);
__d("JSResourceEvents", ["performanceAbsoluteNow"], (function(a, b, c, d, e, f, g) {
    var h = 50,
        i = new Map();

    function a(a, b, d) {
        a = a;
        b = (b = b) != null ? b : "";
        var e = i.get(a);
        e || i.set(a, e = new Map());
        a = e.get(b);
        a || e.set(b, a = new Map());
        e = a.get(d);
        e || a.set(d, e = [0, []]);
        e[1][e[0]++ % h] = c("performanceAbsoluteNow")()
    }

    function j(a, b, c) {
        var d = i.get(a);
        if (!d) return [];
        var e = [];
        for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var j;
            if (g) {
                if (h >= d.length) break;
                j = d[h++]
            } else {
                h = d.next();
                if (h.done) break;
                j = h.value
            }
            j = j;
            var k = j[0];
            j = j[1];
            for (var j = j, l = Array.isArray(j), m = 0, j = l ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var n;
                if (l) {
                    if (m >= j.length) break;
                    n = j[m++]
                } else {
                    m = j.next();
                    if (m.done) break;
                    n = m.value
                }
                n = n;
                var o = n[0];
                n = n[1];
                for (var n = n[1], p = Array.isArray(n), q = 0, n = p ? n : n[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var r;
                    if (p) {
                        if (q >= n.length) break;
                        r = n[q++]
                    } else {
                        q = n.next();
                        if (q.done) break;
                        r = q.value
                    }
                    r = r;
                    r >= b && r <= c && e.push({
                        module: a,
                        ref: k || null,
                        type: o,
                        time: r
                    })
                }
            }
        }
        return e.sort(function(a, b) {
            return a.time - b.time
        })
    }

    function b(a, b) {
        var c = new Map();
        for (var d = i.keys(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= d.length) break;
                g = d[f++]
            } else {
                f = d.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            var h = j(g, a, b);
            h.length && c.set(g, h)
        }
        return c
    }
    g.notify = a;
    g.getEvents = j;
    g.getAllModuleEvents = b
}), 98);
/**
 * License: https://www.facebook.com/legal/license/I4Z1iQLOL-w/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    (function(c, d) {
        "use strict";
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(typeof self === "undefined" ? typeof a === "undefined" ? this : a : self)
}), null);
__d("setImmediatePolyfill", ["invariant", "ImmediateImplementation", "PromiseUsePolyfillSetImmediateGK"], (function(a, b, c, d, e, f, g) {
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = c("TimeSlice").guard(a, "setImmediate", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        return c("setImmediatePolyfill").apply(void 0, [b].concat(e))
    }
    g["default"] = a
}), 98);
__d("setTimeoutAcrossTransitions", ["cr:986633"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:986633")
}), 98);
__d("Promise", ["TimeSlice", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        this.onFulfilled = typeof a === "function" ? a : null, this.onRejected = typeof c === "function" ? c : null, this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler"), this.promise = d
    }

    function t(a, b) {
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        Array.isArray(a) || (a = [m.reject(new TypeError("Promise.all must be passed an array."))]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.allSettled = function(a) {
        if (!Array.isArray(a)) return m.reject(new TypeError("Promise.allSettled must be passed an array."));
        var b = Array(a.length),
            c = function(c, d) {
                var e = a[c];
                d = typeof e === "object" && e !== null && typeof e.then === "function";
                b[c] = d ? new m(function(a, b) {
                    e.then(function(b) {
                        a({
                            status: "fulfilled",
                            value: b
                        })
                    }, function(b) {
                        a({
                            status: "rejected",
                            reason: b
                        })
                    })
                }) : m.resolve({
                    status: "fulfilled",
                    value: e
                })
            };
        for (var d = 0, e = a.length; d < e; ++d) c(d, e);
        return m.all(b)
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("PromiseAnnotate", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a.displayName = b;
        return a
    }

    function b(a) {
        a = a.displayName;
        if (typeof a === "string") return a;
        else return null
    }
    f.setDisplayName = a;
    f.getDisplayName = b
}), 66);
__d("ifRequireable", ["ifRequired"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return c("ifRequired").call(null, a, b, d)
    }
    g["default"] = a
}), 98);
__d("JSResourceReference", ["JSResourceEvents", "Promise", "PromiseAnnotate", "ifRequireable", "ifRequired"], (function(a, b, c, d, e, f, g) {
    var h = function(a) {
            return a
        },
        i = [],
        j = null;

    function k(a) {
        j ? a(j) : i.push(a)
    }
    var l = "JSResource: unknown caller";
    a = function() {
        a.setBootloader = function(a) {
            j = a;
            for (var a = 0; a < i.length; a++) {
                var b = i[a];
                b(j)
            }
            i = []
        };

        function a(a) {
            this.$1 = a
        }
        var e = a.prototype;
        e.getModuleId = function() {
            var a = this.$1;
            return a
        };
        e.getModuleIdAsRef = function() {
            return this.$1
        };
        e.load = function() {
            var a = this;
            d("JSResourceEvents").notify(this.$1, this.$2, "LOADED");
            var c = new(b("Promise"))(function(b) {
                k(function(c) {
                    return c.loadModules([a.getModuleIdAsRef()], b, (c = a.$2) != null ? c : l)
                })
            });
            d("PromiseAnnotate").setDisplayName(c, "Bootload(" + this.getModuleId() + ")");
            return c
        };
        e.preload = function() {
            var a, b = this,
                c = (a = this.$2) != null ? a : l;
            k(function(a) {
                return a.loadModules([b.getModuleIdAsRef()], function() {}, "preload: " + c)
            })
        };
        e.equals = function(a) {
            return this === a || this.$1 == a.$1
        };
        e.getModuleIfRequireable = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequireable").call(null, this.$1, h)
        };
        e.getModuleIfRequired = function() {
            d("JSResourceEvents").notify(this.$1, this.$2, "ACCESSED");
            return c("ifRequired").call(null, this.$1, h)
        };
        e.__setRef = function(a) {
            this.$2 = a;
            d("JSResourceEvents").notify(this.$1, this.$2, "CREATED");
            return this
        };
        a.loadAll = function(a, b) {
            var c = {},
                e = !1;
            for (var f = a, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (g) {
                    if (h >= f.length) break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                var j = i.$2;
                j && (e = !0, c[j] = !0);
                d("JSResourceEvents").notify(i.$1, j, "LOADED")
            }
            k(function(d) {
                return d.loadModules(a.map(function(a) {
                    return a.getModuleId()
                }), b, e ? Object.keys(c).join(":") : "JSResource: unknown caller")
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("$InternalEnum", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.prototype.hasOwnProperty,
        h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function i(a) {
        var b = h.get(a);
        if (b !== void 0) return b;
        var c = new Map();
        Object.getOwnPropertyNames(a).forEach(function(b) {
            c.set(a[b], b)
        });
        try {
            h.set(a, c)
        } catch (a) {}
        return c
    }
    var j = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return i(this).has(a)
            }
        },
        cast: {
            value: function(a) {
                return this.isValid(a) ? a : void 0
            }
        },
        members: {
            value: function() {
                return i(this).keys()
            }
        },
        getName: {
            value: function(a) {
                return i(this).get(a)
            }
        }
    }));

    function a(a) {
        var b = Object.create(j);
        for (var c in a) g.call(a, c) && Object.defineProperty(b, c, {
            value: a[c]
        });
        return Object.freeze(b)
    }
    var k = Object.freeze(Object.defineProperties(Object.create(null), {
        isValid: {
            value: function(a) {
                return typeof a === "string" ? g.call(this, a) : !1
            }
        },
        cast: {
            value: j.cast
        },
        members: {
            value: function() {
                return Object.getOwnPropertyNames(this).values()
            }
        },
        getName: {
            value: function(a) {
                return a
            }
        }
    }));
    a.Mirrored = function(a) {
        var b = Object.create(k);
        for (var c = 0, d = a.length; c < d; ++c) Object.defineProperty(b, a[c], {
            value: a[c]
        });
        return Object.freeze(b)
    };
    Object.freeze(a.Mirrored);
    e.exports = Object.freeze(a)
}), null);
__d("RequireDeferredFactoryEvent", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        SUPPORT_DATA: "sd",
        CSS: "css"
    });
    c = a;
    f["default"] = c
}), 66);
__d("getErrorSafe", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").getErrorSafe
}), 98);
__d("promiseDone", ["Env", "ErrorPubSub", "getErrorSafe"], (function(a, b, c, d, e, f) {
    var g, h;

    function a(a, c, d) {
        var e, f = (e = (g || (g = b("Env"))).deferred_stack_trace_rate) != null ? e : 0,
            i = null;
        f >= 1 && Math.random() < 1 / f && (i = new Error(""));
        var j = function() {
                i = null
            },
            k = arguments.length > 1 ? a.then(c, d) : a;
        k.then(j, function(a) {
            a = b("getErrorSafe")(a);
            a.deferredSource = i;
            a.loggingSource = "PROMISE_DONE";
            (h || (h = b("ErrorPubSub"))).reportError(a);
            j()
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["invariant", "CallbackDependencyManager", "Promise", "RequireDeferredFactoryEvent", "ifRequireable", "ifRequired", "performanceNow", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = 1;
    d = 2;
    e = 16;
    var i = a | d | e,
        j = null;

    function k() {
        j == null && (j = new(c("CallbackDependencyManager"))());
        return j
    }

    function l(a, b) {
        return a + ":" + b
    }
    var m = new Set();
    f = function() {
        function a(a) {
            this.$1 = a
        }
        var d = a.prototype;
        d.getModuleId = function() {
            var a = this.$1;
            return a
        };
        d.getModuleIdAsRef = function() {
            return this.$1
        };
        d.preload = function() {};
        d.getModuleIfRequired = function() {
            return c("ifRequired").call(null, this.$1, function(a) {
                return a
            })
        };
        d.getModuleIfRequireable = function() {
            return c("ifRequireable").call(null, this.$1, function(a) {
                return a
            })
        };
        d.$2 = function(a) {
            var b = this,
                d = c("ifRequireable")("InteractionTracingMetrics", function(a) {
                    return a.currentInteractionLogger().addRequireDeferred(b.getModuleId(), c("performanceNow")())
                }),
                e = !1,
                f = function(b, f) {
                    d == null ? void 0 : d(c("performanceNow")(), f), e || a(b)
                };
            c("ifRequireable").call(null, this.$1, function(a) {
                return f(a, !0)
            }, function() {
                c("requireWeak").call(null, b.$1, function(a) {
                    return f(a, !1)
                })
            });
            return {
                remove: function() {
                    e = !0
                }
            }
        };
        d.load = function() {
            var a = this;
            return new(b("Promise"))(function(b) {
                return a.$2(b)
            })
        };
        d.__setRef = function(a) {
            return this
        };
        d.onReadyImmediately = function(a) {
            return this.$2(a)
        };
        d.onReady = function(a) {
            var d = function() {
                    return h(!1, "Unreachable because Promise constructor is synchronous")
                },
                e = new(b("Promise"))(function(a) {
                    return d = a
                }),
                f = this.$2(d);
            c("promiseDone")(e, a);
            return f
        };
        d.loadImmediately = function(a) {
            return this.$2(a)
        };
        a.getRDModuleName_DO_NOT_USE = function(a) {
            return "rd:" + a
        };
        a.unblock = function(d, e) {
            var f = k(),
                g = function() {
                    var g = d[h];
                    m.has(g) || (m.add(g), f.registerCallback(function() {
                        define(a.getRDModuleName_DO_NOT_USE(g), [g], function() {
                            b.call(null, g)
                        }, i)
                    }, Array.from(c("RequireDeferredFactoryEvent").members(), function(a) {
                        return l(g, a)
                    })));
                    f.satisfyPersistentDependency(l(g, e))
                };
            for (var h = 0; h < d.length; h++) g()
        };
        return a
    }();
    g["default"] = f
}), 98);
__d("ResourceHasher", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 0;

    function a(a) {
        return "async:" + a
    }

    function b() {
        return "ejs:" + i++
    }

    function c(a) {
        typeof a === "string" || h(0, 19551, a);
        return a
    }
    g.getAsyncHash = a;
    g.createExternalJSHash = b;
    g.getValidResourceHash = c
}), 98);
__d("TrustedTypeUtils", ["TrustedTypesConfig"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return function(d) {
            if (a(d)) return d;
            try {
                for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                return b.apply(void 0, ["" + d].concat(f))
            } catch (a) {
                if (c("TrustedTypesConfig").reportOnly) return "" + d;
                throw a
            }
        }
    }
    g.createTrustedType = a
}), 98);
__d("TrustedTypesWithNoDefaultPolicies", ["invariant", "TrustedTypeUtils", "TrustedTypesConfig"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    if (typeof trustedTypes !== "undefined" && c("TrustedTypesConfig").useTrustedTypes) {
        var i = trustedTypes;
        a = babelHelpers["extends"]({}, i, {
            createPolicy: function(a, b) {
                "createHTML" in b && "createScriptURL" in b && "createScript" in b || h(0, 56394);
                a = i.createPolicy(a, b);
                return {
                    createHTML: d("TrustedTypeUtils").createTrustedType(i.isHTML.bind(i), a.createHTML.bind(a)),
                    createScript: d("TrustedTypeUtils").createTrustedType(i.isScript.bind(i), a.createScript.bind(a)),
                    createScriptURL: d("TrustedTypeUtils").createTrustedType(i.isScriptURL.bind(i), a.createScriptURL.bind(a))
                }
            }
        });
        b = a
    } else {
        var j = function(a) {
            return a
        };
        e = {
            isHTML: function() {
                return !1
            },
            isScriptURL: function() {
                return !1
            },
            isScript: function() {
                return !1
            },
            createPolicy: function(a, b) {
                return {
                    createHTML: j,
                    createScriptURL: j,
                    createScript: j
                }
            }
        };
        b = e
    }
    f = b;
    g["default"] = f
}), 98);
__d("createTrustedScriptURLFromBootloaderDataURI", ["TrustedTypesWithNoDefaultPolicies"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(a) {
        return a
    };
    var h = "bootloader-data-uri",
        i, j = {
            createScriptURL: function(a) {
                return a
            },
            createScript: b,
            createHTML: b
        };

    function k() {
        if (i) return;
        i = c("TrustedTypesWithNoDefaultPolicies").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    g["default"] = a
}), 98);
__d("isFacebookDotNetURI", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var b = Number(a.getPort());
        if (!!b && b !== 80 && b !== 443) return !1;
        return a.isSubdomainOfDomain("facebook.net") ? !0 : !1
    }
    f["default"] = a
}), 66);
__d("createTrustedScriptURLFromFacebookURI", ["TrustedTypesWithNoDefaultPolicies", "URI", "err", "isCdnURI", "isFacebookDotNetURI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(a) {
        return a
    };
    var h = "fburi-scripturls",
        i, j = {
            createScriptURL: function(a) {
                var b = c("URI").tryParseURI(a);
                if (b != null && (c("isFacebookURI")(b) || c("isCdnURI")(b) || c("isFacebookDotNetURI")(b))) return a;
                throw c("err")("Violating Trusted Type policies, non-fb URI.")
            },
            createScript: b,
            createHTML: b
        };

    function k() {
        if (i) return;
        i = c("TrustedTypesWithNoDefaultPolicies").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScriptURL(a)
    }
    g["default"] = a
}), 98);
__d("Bootloader", ["invariant", "BootloaderConfig", "BootloaderEndpoint", "BootloaderEvents", "BootloaderEventsManager", "CSRBitMap", "CSRIndexUtil", "CSSLoader", "ClientConsistency", "ErrorPubSub", "FBLogger", "JSResourceReference", "NetworkStatus", "RequireDeferredReference", "ResourceHasher", "ResourceTimingsStore", "TimeSlice", "cr:696703", "createTrustedScriptURLFromBootloaderDataURI", "createTrustedScriptURLFromFacebookURI", "err", "fb-error", "ifRequireable", "nullthrows", "performanceAbsoluteNow", "performanceNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = b("fb-error").TAAL,
        l = b("CSRIndexUtil").UNKNOWN_RESOURCE_INDEX,
        m = b("CSRIndexUtil").parseCSRIndexes,
        n = function() {},
        o = new Set(),
        p = !!b("BootloaderConfig").deferBootloads;
    p && !a.__comet_ssr_is_server_env_DO_NOT_USE && b("setTimeoutAcrossTransitions")(function() {
        $.undeferBootloads(!0)
    }, 15e3);
    var q = [],
        r = new Map(),
        s = new Map(),
        t = new Map(),
        u = new Map(),
        v = new Map(),
        w = null,
        x = new Map(),
        y = new Map(),
        z = new Map(),
        A = [],
        B = new Map(),
        C = new Set(),
        D = !1,
        E = new Set(),
        F = !1,
        G = new(b("BootloaderEventsManager"))(),
        H = b("BootloaderConfig").jsRetries || [],
        I = b("BootloaderConfig").jsRetryAbortNum,
        J = b("BootloaderConfig").jsRetryAbortTime,
        K = H.length > 0;
    (h || (h = b("ErrorPubSub"))).unshiftListener(function(a) {
        var b = [];
        for (var c = s, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f[1];
            if (t.has(g)) continue;
            f = N(g);
            if (f.type === "csr" || f.type === "async") continue;
            b.push(f.src)
        }
        a.loadingUrls = b
    });

    function aa(a) {
        if (p || !F) return !1;
        for (var b = 0; b < a.length; b++) {
            var c, d = a[b];
            d = v.get(d);
            if (!d) return !1;
            d = [d.r, ((c = d.rdfds) == null ? void 0 : c.r) || [], ((c = d.rds) == null ? void 0 : c.r) || []];
            for (var c = 0; c < d.length; c++) {
                var e = d[c];
                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (f) {
                        if (g >= e.length) break;
                        h = e[g++]
                    } else {
                        g = e.next();
                        if (g.done) break;
                        h = g.value
                    }
                    h = h;
                    if (!x.has(h)) return !1
                }
            }
        }
        return !0
    }

    function L(a) {
        var c = v.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("Bootloader: %s is not in the component map", a));
        return c
    }

    function M(a) {
        var c = L(a);
        c.be && (delete c.be, $.done(b("ResourceHasher").getAsyncHash(a)))
    }

    function N(a) {
        var c = x.get(a);
        if (!c) throw k.blameToPreviousFile(b("err")("No resource entry for hash: %s", a));
        return c
    }

    function ba(a, c) {
        var d = b("ResourceHasher").getAsyncHash(a);
        if (!x.has(d)) x.set(d, {
            type: "async",
            module: a,
            blocking: !!c
        });
        else {
            a = N(d);
            a.type === "async" || g(0, 21557);
            a.blocking && !c && (a.blocking = !1)
        }
        return d
    }

    function O() {
        w || (w = document.head || document.getElementsByTagName("head")[0] || document.body);
        return w
    }

    function P(a) {
        var b = document.createDocumentFragment();
        a(b);
        O().appendChild(b)
    }

    function Q() {
        if (!K) return !1;
        var a = A.length;
        if (a < I) return !0;
        a = A[a - 1] - A[a - I];
        a < J && (b("FBLogger")("bootloader").warn("JS retry abort"), K = !1);
        return K
    }

    function ca(a, b, c) {
        a = void 0;
        switch (b.type) {
            case "async":
                return;
            case "css":
                a = "style";
                break;
            case "js":
                a = "script";
                break;
            default:
                a = b.type, g(0, 3721)
        }
        if (b.d === 1) return;
        var d = document.createElement("link");
        d.href = b.src;
        d.rel = "preload";
        d.as = a;
        b.nc || (d.crossOrigin = "anonymous");
        c.appendChild(d)
    }

    function R(a, c, d, e) {
        var f = document.createElement("script");
        c.d ? f.src = b("createTrustedScriptURLFromBootloaderDataURI")(c.src) : f.src = b("createTrustedScriptURLFromFacebookURI")(c.src);
        f.async = !0;
        c.nc || (f.crossOrigin = "anonymous");
        c.m != null && (f.dataset.btmanifest = c.m);
        f.dataset.bootloaderHashClient = a;
        S(f, a, c, d);
        e.appendChild(f);
        return f
    }

    function S(a, c, d, e) {
        var f = a.src,
            g = (i || (i = b("performanceAbsoluteNow")))(),
            h = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            j = b("ResourceTimingsStore").getUID("js", f);
        b("ResourceTimingsStore").annotate("js", j).addStringAnnotation("name", c).addStringAnnotation("source", f);
        b("ifRequireable")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", f).addStringAnnotation("name", c)
        });
        b("ResourceTimingsStore").measureRequestSent("js", j);
        a.onload = h.bind(void 0, function() {
            var a;
            a = (a = z.get(f)) != null ? a : 0;
            a && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, f, (i || (i = b("performanceAbsoluteNow")))() - g, a);
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            e()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", j), h.bind(void 0, e)())
        };
        a.onerror = h.bind(void 0, function() {
            var h;
            b("ResourceTimingsStore").measureResponseReceived("js", j);
            h = (h = z.get(f)) != null ? h : 0;
            var k = (i || (i = b("performanceAbsoluteNow")))();
            Q() && h < H.length ? (A.push(k), setTimeout(function() {
                if (!Q()) return;
                var b = a.parentNode;
                b && (b.removeChild(a), R(c, d, e, b))
            }, H[h]), z.set(f, h + 1)) : (u.set(c, k), b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, f, k - g, h, s.size - t.size), b("NetworkStatus").reportError(), e())
        })
    }

    function T(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c.src, s.size - t.size), u.set(a, (i || (i = b("performanceAbsoluteNow")))()), b("NetworkStatus").reportError(), d()
        }
    }

    function da(a, c, d, e) {
        if (s.has(a)) return;
        s.set(a, (i || (i = b("performanceAbsoluteNow")))());
        if (c.p && b("BootloaderConfig").hypStep4) {
            var f = m(c.p),
                h = new Set(),
                j = 0;
            f.forEach(function(b, c) {
                b !== l && y.get(b) !== a && h.add(c), b > j && (j = b)
            });
            j > b("BootloaderConfig").btCutoffIndex && b("BootloaderEvents").notifyResourceInLongTailBTManifest();
            if (h.size === f.length) return;
            else if (h.size > 0) {
                f = c.src.replace(/\/y[a-zA-Z0-9_-]\//, "/");
                f.includes("/intern/rsrc.php") ? c.src = f.replace(/(!)(.+)(\.(?:css|js)(?:$|\?))/, function(a, b, c, d) {
                    return b + c.split(",").filter(function(a, b) {
                        return !h.has(b)
                    }).join(",") + d
                }) : f.includes("/rsrc.php") && (c.src = f.replace(/(.*\/)([^.]+)(\.)/, function(a, b, c, d) {
                    return b + c.match(/.{1,11}/g).filter(function(a, b) {
                        return !h.has(b)
                    }).join("") + d
                }))
            }
        }
        ca(a, c, d);
        window.CavalryLogger && window.CavalryLogger.getInstance().measureResources({
            name: a,
            type: c.type
        }, e);
        switch (c.type) {
            case "js":
                R(a, c, function() {
                    return $.done(a)
                }, d);
                break;
            case "css":
                f = function() {
                    return $.done(a)
                };
                b("CSSLoader").loadStyleSheet(a, c.src, d, !c.nc, f, T(a, c, f));
                break;
            case "async":
                b("BootloaderEndpoint").load(c.module, c.blocking, a);
                break;
            default:
                c.type, g(0, 3721)
        }
    }

    function U(a, c, d, e, f) {
        var h = new Map(),
            i = (f = f) != null ? f : b("BootloaderEvents").newResourceMapSet();
        f = [];
        var j = [],
            k = [];
        for (var a = W(a), l = Array.isArray(a), m = 0, a = l ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var n;
            if (l) {
                if (m >= a.length) break;
                n = a[m++]
            } else {
                m = a.next();
                if (m.done) break;
                n = m.value
            }
            n = n;
            var o = n[0];
            n = n[1];
            var p = void 0;
            switch (n.type) {
                case "css":
                    p = n.nonblocking ? "nonblocking" : "blocking";
                    break;
                case "js":
                    p = "default";
                    break;
                case "async":
                    p = n.blocking ? "blocking" : "nonblocking";
                    break;
                default:
                    n.type, g(0, 3721)
            }
            i[p].set(o, n);
            var q = G.rsrcDone(o);
            k.push(q);
            p !== "nonblocking" && (j.push(q), p === "blocking" && f.push(q));
            s.has(o) || h.set(o, n)
        }
        var r, t;
        !b("cr:696703") ? r = t = function(a) {
            return a()
        } : (t = b("cr:696703").scheduleLoggingPriCallback, r = b("cr:696703").getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE());
        var u = c.onBlocking,
            v = c.onAll,
            w = c.onLog;
        u && G.registerCallback(function() {
            r(u)
        }, f);
        v && G.registerCallback(function() {
            r(v)
        }, j);
        w && G.registerCallback(function() {
            t(function() {
                return w(i)
            })
        }, k);
        for (var p = h, q = Array.isArray(p), o = 0, p = q ? p : p[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            if (q) {
                if (o >= p.length) break;
                n = p[o++]
            } else {
                o = p.next();
                if (o.done) break;
                n = o.value
            }
            m = n;
            l = m[0];
            a = m[1];
            da(l, a, d, e)
        }
    }

    function V(a, c, d) {
        x.set(a, c);
        if (c.type === "async" || c.type === "csr") return;
        var e = c.p;
        if (e)
            for (var e = m(e), f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var h;
                if (f) {
                    if (g >= e.length) break;
                    h = e[g++]
                } else {
                    g = e.next();
                    if (g.done) break;
                    h = g.value
                }
                h = h;
                if (h === l) continue;
                (!y.has(h) || d) && y.set(h, a);
                (b("BootloaderConfig").phdOn ? c.c == 2 : c.c) && b("CSRBitMap").add(h)
            }
    }

    function ea(a, c) {
        var d = G.bootload(c);
        if (C.has(d)) return [d, null];
        C.add(d);
        var e = (i || (i = b("performanceAbsoluteNow")))();
        c = {
            ref: a,
            components: c,
            timesliceContext: b("TimeSlice").getContext(),
            startTime: (a = r.get(d)) != null ? a : e,
            fetchStartTime: e,
            callbackStart: 0,
            callbackEnd: 0,
            tierOne: b("BootloaderEvents").newResourceMapSet(),
            tierTwo: b("BootloaderEvents").newResourceMapSet(),
            tierThree: b("BootloaderEvents").newResourceMapSet(),
            beRequests: new Map()
        };
        b("BootloaderEvents").notifyBootloadStart(c);
        return [d, c]
    }

    function fa(a) {
        return b("ifRequireable").call(null, a, function() {
            return !0
        }, function() {
            return !1
        })
    }

    function ga(a, c, e, f) {
        B.has(a) || B.set(a, {
            firstBootloadStart: (i || (i = b("performanceAbsoluteNow")))(),
            logData: new Set()
        });
        f && b("nullthrows")(B.get(a)).logData.add(f);
        var g = L(a),
            h = g.r,
            j = g.rdfds,
            k = g.rds;
        g = g.be;
        g = fa(a) ? null : ba(a, g);
        g == null && G.notify(G.beDone(a));
        U(g != null ? [g].concat(h) : h, {
            onAll: function() {
                return G.notify(G.tierOne(a))
            },
            onLog: function() {
                return G.notify(G.tierOneLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierOne);
        var l = (j == null ? void 0 : j.m) || [];
        U((j == null ? void 0 : j.r) || [], {
            onBlocking: function() {
                return b("RequireDeferredReference").unblock(l, "css")
            },
            onAll: function() {
                return G.registerCallback(function() {
                    G.notify(G.tierTwoStart(a)), d.call(null, l.map(b("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                        return G.notify(G.tierTwo(a))
                    })
                }, [G.tierOne(a), c])
            },
            onLog: function() {
                return G.notify(G.tierTwoLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierTwo);
        var m = (k == null ? void 0 : k.m) || [];
        U((k == null ? void 0 : k.r) || [], {
            onBlocking: function() {
                return b("RequireDeferredReference").unblock(m, "css")
            },
            onAll: function() {
                return G.registerCallback(function() {
                    G.notify(G.tierThreeStart(a)), d.call(null, m.map(b("RequireDeferredReference").getRDModuleName_DO_NOT_USE), function() {
                        return G.notify(G.tierThree(a))
                    })
                }, [G.tierTwo(a)])
            },
            onLog: function() {
                return G.notify(G.tierThreeLog(a))
            }
        }, e, f == null ? void 0 : f.ref, f == null ? void 0 : f.tierThree)
    }

    function W(a) {
        var c = new Map();
        for (var d = 0; d < a.length; d++) {
            var e = a[d],
                f = x.get(e);
            if (!f) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", e);
                continue
            }
            var h = void 0;
            if (f.type === "csr") h = m(f.src);
            else if (f.p) h = m(f.p), h.includes(l) && c.set(e, f), h = h.filter(function(a) {
                return a !== l
            });
            else {
                c.set(e, f);
                continue
            }
            for (var e = h, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (f) {
                    if (h >= e.length) break;
                    i = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                i = b("nullthrows")(y.get(i), "No hash for rsrcIndex:" + i);
                var j = N(i);
                j.type !== "csr" || g(0, 20056, i);
                c.set(i, j)
            }
        }
        return c.entries()
    }

    function X(a) {
        var c, d = a.getAttribute("data-bootloader-hash");
        if (d == null) return;
        var e = b("ResourceHasher").getValidResourceHash(d);
        if (a.id) {
            if (E.has(a.id)) return;
            E.add(a.id)
        }
        d = a.tagName == "SCRIPT" ? {
            src: a.src,
            type: "js"
        } : {
            src: a.href,
            type: "css"
        };
        a.crossOrigin == null && (d.nc = 1);
        d.type === "css" && a.getAttribute("data-nonblocking") && (d.nonblocking = 1);
        var f = a.getAttribute("data-c");
        f == "1" ? d.c = 1 : f == "2" && (d.c = 2);
        d.p = a.getAttribute("data-p");
        f = a.getAttribute("data-btmanifest");
        f != null && (d.m = f);
        x.has(e) && !b("BootloaderConfig").silentDups && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", e, d.src);
        V(e, d, !0);
        s.set(e, (i || (i = b("performanceAbsoluteNow")))());
        f = function() {
            return $.done(e)
        };
        c = d.type === "js" ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[e] ? f() : d.type === "js" ? S(a, e, d, f) : b("CSSLoader").setupEventListeners(e, d.src, O(), f, T(e, d, f), a)
    }

    function Y() {
        if (D) return;
        D = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return X(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return X(a)
        })
    }

    function Z() {
        F = !0;
        var a = q;
        q = [];
        a.forEach(function(a) {
            var b = a[0],
                c = a[1],
                d = a[2];
            a = a[3];
            a(function() {
                $.loadModules.apply($, [b, c, d])
            })
        })
    }
    var $ = {
        loadModules: function(a, c, e) {
            c === void 0 && (c = n);
            e === void 0 && (e = "loadModules: unknown caller");
            var f = a,
                g = !1,
                h = function() {
                    g || c.apply(void 0, arguments)
                };
            a = {
                remove: function() {
                    g = !0
                }
            };
            if (!aa(f)) {
                var j = "Deferred: Bootloader.loadModules";
                j = b("TimeSlice").getGuardedContinuation(j);
                q.push([f, h, e, j]);
                j = G.bootload(f);
                r.set(j, (j = r.get(j)) != null ? j : (i || (i = b("performanceAbsoluteNow")))());
                return a
            }
            j = ea(e, f);
            var k = j[0],
                l = j[1];
            G.registerCallback(d.bind(null, f, function() {
                l && (l.callbackStart = (i || (i = b("performanceAbsoluteNow")))()), h.apply(void 0, arguments), l && (l.callbackEnd = (i || (i = b("performanceAbsoluteNow")))()), G.notify(k)
            }), f.map(function(a) {
                return G.tierOne(a)
            }));
            P(function(b) {
                for (var c = 0; c < f.length; c++) {
                    var a = f[c];
                    ga(a, k, b, l)
                }
            });
            if (l) {
                j = new Set([k]);
                for (var m = 0; m < f.length; m++) {
                    var o = f[m];
                    j.add(G.beDone(o));
                    j.add(G.tierThree(o));
                    j.add(G.tierOneLog(o));
                    j.add(G.tierTwoLog(o));
                    j.add(G.tierThreeLog(o))
                }
                G.registerCallback(function() {
                    return b("BootloaderEvents").notifyBootload(l)
                }, Array.from(j));
                b("ifRequireable")("TimeSliceInteraction", function(a) {
                    a.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierOne).keys())).addSetAnnotation("rdfd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierTwo).keys())).addSetAnnotation("rd_requested_hashes", Array.from(b("BootloaderEvents").flattenResourceMapSet(l.tierThree).keys())).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", f)
                })
            }
            return a
        },
        loadResources: function(a, c, d) {
            d === void 0 && (d = "loadResources: unknown caller"), Y(), P(function(e) {
                var f;
                return U(a.map(function(a) {
                    return b("ResourceHasher").getValidResourceHash(a)
                }), (f = c) != null ? f : Object.freeze({}), e, d)
            })
        },
        requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
            var c = b("ResourceHasher").createExternalJSHash();
            V(c, {
                type: "js",
                src: a,
                nc: 1
            }, !1);
            $.loadResources([c])
        },
        done: function(a) {
            t.set(a, (i || (i = b("performanceAbsoluteNow")))()), window.CavalryLogger && window.CavalryLogger.done_js([a]), G.notify(G.rsrcDone(a))
        },
        beDone: function(a, b, c) {
            for (var d = (d = (d = B.get(a)) == null ? void 0 : d.logData) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d, g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                g.beRequests.set(b, c)
            }
            G.notify(G.beDone(a))
        },
        handlePayload: function(a, c) {
            for (var d = (d = a.rsrcTags) != null ? d : [], e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d, g;
                if (e) {
                    if (f >= d.length) break;
                    g = d[f++]
                } else {
                    f = d.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                X(document.getElementById(g))
            }
            $.setResourceMap((g = a.rsrcMap) != null ? g : {}, a.sotUpgrades, a.consistency.rev, c);
            a.csrUpgrade && m(a.csrUpgrade).forEach(function(a) {
                return b("CSRBitMap").add(a)
            });
            a.compMap && $.enableBootload(a.compMap, c)
        },
        enableBootload: function(a, b) {
            for (var c in a) b && b.comp++, !v.has(c) ? (v.set(c, a[c]), o.has(c) && (o["delete"](c), M(c))) : b && b.dup_comp++;
            Y();
            p || Z()
        },
        undeferBootloads: function(a) {
            a === void 0 && (a = !1);
            if (window.location.search.indexOf("&__deferBootloads=") !== -1) return;
            a && p && b("BootloaderEvents").notifyDeferTimeout({
                componentMapSize: v.size,
                pending: q.map(function(a) {
                    var b = a[0];
                    a[1];
                    var c = a[2];
                    a[3];
                    return {
                        components: b,
                        ref: c
                    }
                }),
                time: (j || (j = b("performanceNow")))()
            });
            p = !1;
            v.size && Z()
        },
        markComponentsAsImmediate: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                v.has(c) ? M(c) : o.add(c)
            }
        },
        setResourceMap: function(a, c, d, e) {
            var f = !1;
            for (var g in a) {
                e && e.rsrc++;
                g = b("ResourceHasher").getValidResourceHash(g);
                var h = a[g],
                    i = x.get(g);
                !i ? (h.type === "js" && (f = !0), V(g, h, !1)) : (e && e.dup_rsrc++, (i.type === "js" && h.type === "js" || i.type === "css" && h.type === "css") && (h.d && !i.d && (h.type === "js" && (f = !0), i.src = h.src, i.d = 1)))
            }
            f && d != null && b("ClientConsistency").addAdditionalRevision(d);
            if (c)
                for (var h = c, i = Array.isArray(h), g = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (i) {
                        if (g >= h.length) break;
                        a = h[g++]
                    } else {
                        g = h.next();
                        if (g.done) break;
                        a = g.value
                    }
                    e = a;
                    f = x.get(e);
                    f && V(e, f, !0)
                }
        },
        getURLToHashMap: function() {
            var a = new Map();
            for (var b = x, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                if (e.type === "async" || e.type === "csr") continue;
                a.set(e.src, f)
            }
            return a
        },
        loadPredictedResourceMap: function(a, b, c) {
            $.setResourceMap(a, null, c), $.loadResources(Object.keys(a), b)
        },
        getCSSResources: function(a) {
            var b = [];
            for (var a = W(a), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                e.type === "css" && b.push(f)
            }
            return b
        },
        getBootloadedComponents: function() {
            var a = new Map();
            for (var b = B, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                a.set(f, e.firstBootloadStart)
            }
            return a
        },
        getResourceState: function(a) {
            return {
                loadStart: s.get(a),
                loadEnd: t.get(a),
                loadError: u.get(a)
            }
        },
        getComponentTiming: function(a) {
            var b;
            return {
                tierTwoStart: (b = G.getEventTime(G.tierTwoStart(a))) != null ? b : 0,
                tierTwoEnd: (b = G.getEventTime(G.tierTwo(a))) != null ? b : 0,
                tierThreeStart: (b = G.getEventTime(G.tierThreeStart(a))) != null ? b : 0,
                tierThreeEnd: (b = G.getEventTime(G.tierThree(a))) != null ? b : 0
            }
        },
        getLoadedResourceCount: function() {
            return t.size
        },
        getErrorCount: function() {
            return u.size
        },
        forceFlush: function() {
            b("BootloaderEndpoint").forceFlush()
        },
        __debug: {
            componentMap: v,
            requested: s,
            resources: x,
            riMap: y,
            retries: z,
            errors: u,
            loaded: t,
            bootloaded: B,
            queuedToMarkAsImmediate: o,
            _resolveCSRs: W,
            _getQueuedLoadModules: function() {
                return q
            },
            _dequeueLoadModules: function(a) {
                a = q.splice(a, 1);
                if (!a.length) return;
                a = a[0];
                var b = a[0],
                    c = a[1],
                    d = a[2];
                a = a[3];
                var e = p,
                    f = F;
                p = !1;
                F = !0;
                a(function() {
                    $.loadModules.apply($, [b, c, d])
                });
                p = e;
                F = f
            }
        }
    };
    b("JSResourceReference").setBootloader($);
    e.exports = $
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    c = "for (;;);";
    var g = /^for ?\(;;\);/;
    d = c.length;

    function a(a) {
        return !!a.match(g)
    }

    function b(a) {
        var b = a.match(g);
        return b ? a.substr(b[0].length) : b
    }
    f.regex = g;
    f.length = d;
    f.exists = a;
    f.clean = b
}), 66);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    c = a.clearImmediate || b("ImmediateImplementation").clearImmediate;
    f["default"] = c
}), 66);
__d("clearImmediate", ["clearImmediatePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        c("clearImmediatePolyfill")(a)
    }
    g["default"] = a
}), 98);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("DTSGInitialData").token || null;

    function a() {
        return i
    }

    function b(a) {
        i = a
    }

    function c() {
        h(0, 5809)
    }
    g.getToken = a;
    g.setToken = b;
    g.refresh = c
}), 98);
__d("isOculusDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("DTSGUtils", ["SprinkleConfig", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            d = c.toString();
            return b("SprinkleConfig").should_randomize ? d : b("SprinkleConfig").version + d
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com") || a.isSubdomainOfDomain("discoverapp.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("DTSGInitData").async_get_token || null;

    function a() {
        return h
    }

    function b(a) {
        h = a
    }
    g.getToken = a;
    g.setToken = b
}), 98);
__d("ge", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    f["default"] = a
}), 66);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ge", "memoize"], (function(a, b, c, d, e, f, g) {
    var h = new Set();

    function i(a, e, f) {
        var g = f !== void 0 ? e[f] : e,
            j;
        if (Array.isArray(g))
            for (j = 0; j < g.length; j++) i(a, g, j);
        else if (g && typeof g === "object")
            if (g.__m) g.__lazy ? e[f] = c("memoize")(b.bind(null, g.__m)) : e[f] = b.call(null, g.__m);
            else if (g.__jsr) e[f] = new(b.call(null, "JSResourceReference"))(g.__jsr).__setRef("replaceTransportMarkers");
        else if (g.__dr) e[f] = new(b.call(null, "RequireDeferredReference"))(g.__dr).__setRef("replaceTransportMarkers");
        else if (g.__rc) g.__rc[0] === null ? e[f] = null : e[f] = b.call(null, g.__rc[0]), g.__rc[1] && (h.has(g.__rc[1]) || (h.add(g.__rc[1]), d("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: g.__rc[1]
        })));
        else if (g.__e) e[f] = c("ge")(g.__e);
        else if (g.__rel) e[f] = a.relativeTo;
        else if (g.__bigPipeContext) e[f] = a.bigPipeContext;
        else if (g.__bbox) e[f] = g.__bbox;
        else {
            for (var j in g) i(a, g, j);
            if (g.__map) e[f] = new Map(g.__map);
            else if (g.__set) e[f] = new Set(g.__set);
            else if (g.__imm) {
                j = g.__imm;
                a = j.method;
                g = j.value;
                e[f] = b.call(null, "immutable")[a](g)
            }
        }
    }
    g["default"] = i
}), 98);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f, g) {
    var h = 2,
        i = 8,
        j = new(c("BitMap"))(),
        k = {
            getLoadedModuleHash: function() {
                return j.toCompressedString()
            },
            getModuleNameAndHash: function(a) {
                a = a.split("@");
                return {
                    hash: a[1],
                    name: a[0]
                }
            },
            handleDefine: function(a, b, d, e, g) {
                e >= 0 && j.set(e), define(a, b, function(h, i, j, k, b) {
                    h = {
                        data: d
                    };
                    c("replaceTransportMarkers")({
                        relativeTo: g
                    }, h);
                    if (e === -42) {
                        i = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof i === "string" ? i : ""))
                    }
                    b.exports = h.data
                }, h | i)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    k.handleDefine.apply(null, c)
                })
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        hs_key: "__hs",
        connection_class_server_guess_key: "__ccg",
        dpr_key: "dpr",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv",
        lite_iframe_locale_override_key: "__ltif_locale",
        weblite_key: "__wblt",
        weblite_iframe_key: "__wbltif",
        kite_key: "__ktif",
        kite_legacy_key: "_ktif",
        haste_session_id_key: "__hsi",
        jsmod_key: "__dyn",
        csr_key: "__csr",
        comet_key: "__comet_req"
    })
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    function g() {
        var a = 4022871197,
            b = function(b) {
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
    f["default"] = a
}), 66);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 4294967296,
        h = b("ServerNonce").ServerNonce,
        i;

    function j() {
        i == null && (i = b("Alea")(h));
        return i
    }
    var k = {
        random: function() {
            var b = typeof Uint32Array === "function" ? new Uint32Array(1) : null,
                c = a.crypto || a.msCrypto;
            if (b != null) try {
                var d = c == null ? void 0 : c.getRandomValues;
                if (typeof d === "function") {
                    var e = d.bind(c);
                    return function() {
                        try {
                            e(b)
                        } catch (a) {
                            return j()()
                        }
                        return b[0] / g
                    }
                }
            } catch (a) {}
            return j()
        }(),
        uint32: function() {
            return Math.floor(k.random() * g)
        },
        coinflip: function(a) {
            if (a === 0) return !1;
            return a <= 1 ? !0 : k.random() * a <= 1
        }
    };
    e.exports = k
}), null);
__d("WebSessionDefaultTimeoutMs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 35e3;
    f["default"] = a
}), 66);
__d("CookieConsent", ["CookieConsentIFrameConfig", "InitialCookieConsent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(c("InitialCookieConsent").initialConsent),
        i = c("InitialCookieConsent").shouldShowCookieBanner,
        j = {
            setConsented: function() {
                h.add(1), i = !1
            },
            hasConsent: function(a) {
                return h.has(a)
            },
            isCookiesBlocked: function() {
                return c("InitialCookieConsent").noCookies
            },
            shouldShowCookieBanner: function() {
                return i
            },
            isThirdPartyIframeAllowed: function(a) {
                if (j.isCookiesBlocked() || !j.hasConsent(1)) return !1;
                return c("CookieConsentIFrameConfig").allowlisted_iframes.includes(a.id) ? !0 : j.hasConsent(2)
            }
        };
    a = j;
    g["default"] = a
}), 98);
__d("isQuotaExceededError", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(b) {
        return Boolean(b instanceof a.DOMException && (b.code === 22 || b.code === 1014 || b.name === "QuotaExceededError" || b.name === "NS_ERROR_DOM_QUOTA_REACHED"))
    }

    function b(a, b) {
        return Boolean(g(b) && a && a.length !== 0)
    }
    f.isQuotaExceededError = g;
    f.isStorageQuotaExceededError = b
}), 66);
__d("WebStorage", ["CookieConsent", "FBLogger", "err", "isQuotaExceededError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = {},
        j = "localStorage",
        k = "sessionStorage",
        l = !1;

    function m(a, b, d) {
        if (c("CookieConsent").isCookiesBlocked() || !c("CookieConsent").hasConsent(1)) {
            l || (c("FBLogger")("web_storage").warn("Failed to get %s because of missing cookie consent", d.toString()), l = !0);
            return null
        }
        Object.prototype.hasOwnProperty.call(a, d) || (a[d] = b(d));
        return a[d]
    }

    function n(a) {
        try {
            return window[a]
        } catch (a) {
            c("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function o(a) {
        var b = null;
        try {
            b = window[a];
            if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
                var e = "__test__" + Date.now();
                b.setItem(e, "");
                b.removeItem(e)
            } else return null
        } catch (e) {
            if (d("isQuotaExceededError").isStorageQuotaExceededError(b, e) === !1) {
                c("FBLogger")("web_storage").catching(e).warn("Failed to get WebStorage of type `%s`", a);
                return null
            }
        }
        return b
    }

    function p(a) {
        var b = null;
        try {
            b = window[a];
            if (b != null && typeof b.setItem === "function" && typeof b.removeItem === "function") {
                a = "__test__" + Date.now();
                b.setItem(a, "");
                b.removeItem(a)
            }
        } catch (a) {
            if (d("isQuotaExceededError").isStorageQuotaExceededError(b, a) === !0) return !0
        }
        return !1
    }

    function q(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function r(a, b, d) {
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(b, d)
        } catch (g) {
            var f = q(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = c("err")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", b, d.length, f.join())
        }
        return e
    }
    a = {
        getLocalStorage: function() {
            return m(h, o, j)
        },
        getAllowlistedKeyFromLocalStorage: function(a) {
            var b;
            return (b = m(i, n, j)) == null ? void 0 : b.getItem(a)
        },
        getSessionStorage: function() {
            return m(h, o, k)
        },
        getAllowlistedKeyFromSessionStorage: function(a) {
            var b;
            return (b = m(i, n, k)) == null ? void 0 : b.getItem(a)
        },
        getLocalStorageForRead: function() {
            return m(i, n, j)
        },
        getSessionStorageForRead: function() {
            return m(i, n, k)
        },
        isLocalStorageQuotaExceeded: function() {
            return p(j)
        },
        isSessionStorageQuotaExceeded: function() {
            return p(k)
        },
        setItemGuarded: r,
        setAllowlistedKeyToLocalStorage: function(a, b, c) {
            return r(a, b, c)
        },
        clearCaches: function() {
            h = {}, i = {}
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("WebSession", ["FBLogger", "Random", "WebSessionDefaultTimeoutMs", "WebStorage"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 36,
        i = 6,
        j = Math.pow(h, i);

    function k(a) {
        return a == null || Number.isFinite(a) === !1 || a <= 0 ? null : a
    }

    function l(a) {
        if (a == null) return null;
        var b = parseInt(a, 10);
        if ("" + b !== a) {
            c("FBLogger")("web_session").warn("Expected the web session expiry time to parse as an integer. Found `%s`.", String(a));
            return null
        }
        return k(b)
    }

    function m(a) {
        if (a == null) return null;
        if (a.length !== i) {
            c("FBLogger")("web_session").warn("Expected the web session id to be a %d character string. It was %d character(s). Received `%s`.", i, a.length, a);
            return null
        }
        if (/^[a-z0-9]+$/.test(a) === !1) {
            c("FBLogger")("web_session").warn("Expected the web session ID to be a base-%d encoded string. Received `%s`.", h, a);
            return null
        }
        return a
    }

    function n(a) {
        if (a == null) return null;
        if (typeof a !== "string" && a instanceof String === !1) {
            c("FBLogger")("web_session").warn("A non-string value was passed to `coerceSession`. This should be impossible according to this method's Flow type. The value was `%s`.", a);
            return null
        }
        a = a.split(":");
        var b = a[0];
        a = a[1];
        a = l(a);
        b = m(b);
        return a == null || b == null ? null : {
            expiryTime: a,
            id: b
        }
    }

    function o() {
        var a = Math.floor(d("Random").random() * j);
        a = a.toString(h);
        return "0".repeat(i - a.length) + a
    }
    var p = null;

    function q() {
        p == null && (p = o());
        return p
    }

    function r(a) {
        a === void 0 && (a = Date.now());
        var b = c("WebStorage").getLocalStorageForRead();
        if (b == null) return null;
        b = n(b.getItem("Session"));
        return b && a < b.expiryTime ? b : null
    }

    function s() {
        var a = c("WebStorage").getSessionStorageForRead();
        if (a == null) return null;
        a = m(a.getItem("TabId"));
        if (a == null) {
            var b = c("WebStorage").getSessionStorage();
            if (b == null) return null;
            var d = o();
            c("WebStorage").setItemGuarded(b, "TabId", d);
            return d
        }
        return a
    }

    function a(a) {
        if (a !== void 0 && k(a) == null) {
            c("FBLogger")("web_session").warn("`WebSession.extend()` was passed an invalid target expiry time `%s`.", a);
            return
        }
        var b = Date.now();
        a = (a = a) != null ? a : b + c("WebSessionDefaultTimeoutMs");
        var d = r(b);
        if (d && d.expiryTime >= a || a <= b) return;
        b = c("WebStorage").getLocalStorage();
        if (b != null) {
            d = d == null ? o() : d.id;
            c("WebStorage").setItemGuarded(b, "Session", d + ":" + a)
        }
    }

    function t() {
        var a;
        return (a = r()) == null ? void 0 : a.id
    }

    function b() {
        var a, b, c = q();
        a = (a = t()) != null ? a : "";
        b = (b = s()) != null ? b : "";
        return a + ":" + b + ":" + c
    }

    function e() {
        return q()
    }
    g.extend = a;
    g.getSessionId = t;
    g.getId = b;
    g.getPageId_DO_NOT_USE = e
}), 98);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};

    function a(a, b) {
        g[a] = b
    }

    function b() {
        return g
    }
    f.add = a;
    f.get = b
}), 66);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }

    function j(a, b) {
        /\s/.test(b) && h(0, 11794, b);
        b && (a.classList ? a.classList.add(b) : l(a, b) || (a.className = a.className + " " + b));
        return a
    }

    function k(a, b) {
        /\s/.test(b) && h(0, 11795, b);
        b && (a.classList ? a.classList.remove(b) : l(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
        return a
    }

    function a(a, b, c) {
        return (c ? j : k)(a, b)
    }

    function l(a, b) {
        /\s/.test(b) && h(0, 442);
        return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function b(a, b) {
        var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
            return i(a, b)
        };
        return c.call(a, b)
    }
    g.addClass = j;
    g.removeClass = k;
    g.conditionClass = a;
    g.hasClass = l;
    g.matchesSelector = b
}), 98);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return !!document.body && d("CSSCore").hasClass(document.body, "plugin")
    }
    g["default"] = a
}), 98);
__d("uniqueRequestID", [], (function(a, b, c, d, e, f) {
    var g = 36,
        h = 1;

    function a() {
        return (h++).toString(g)
    }
    f["default"] = a
}), 66);
__d("getAsyncParams", ["CSRBitMap", "CometPersistQueryParams", "CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", "ISB", "JSErrorLoggingConfig", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "WebConnectionClassServerGuess", "WebSession", "asyncParams", "isSocialPlugin", "uniqueRequestID"], (function(a, b, c, d, e, f) {
    var g, h, i = b("JSErrorLoggingConfig").sampleWeight,
        j = b("JSErrorLoggingConfig").sampleWeightKey,
        k = {
            locale: !0,
            cxobfus: !0,
            js_debug: !0,
            cquick: !0,
            cquick_token: !0,
            wdplevel: !0,
            prod_graphql: !0,
            sri: !0
        },
        l = {
            ctarget: !0
        };

    function a(a) {
        var c, d = babelHelpers["extends"]({}, b("asyncParams").get(), (c = {
            __user: (g || (g = b("CurrentUserInitialData"))).USER_ID,
            __a: 1
        }, c[b("StaticSiteData").jsmod_key] = b("ServerJSDefine").getLoadedModuleHash(), c[b("StaticSiteData").csr_key] = b("CSRBitMap").toCompressedString(), c.__req = b("uniqueRequestID")(), c[b("StaticSiteData").hs_key] = b("SiteData").haste_session, c[b("StaticSiteData").dpr_key] = b("SiteData").pr, c[b("StaticSiteData").connection_class_server_guess_key] = b("WebConnectionClassServerGuess").connectionClass, c.__rev = b("SiteData").client_revision, c.__s = b("WebSession").getId(), c[b("StaticSiteData").haste_session_id_key] = b("SiteData").hsi, c));
        if (!b("SiteData").wbloks_env) {
            d[b("StaticSiteData").comet_key] = (c = b("SiteData").comet_env) != null ? c : b("SiteData").is_comet ? 1 : 0
        }
        Object.entries(b("CometPersistQueryParams").relative).forEach(function(a) {
            var b = a[0];
            a = a[1];
            a != null && (d[b] = String(a))
        });
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_" || k[b] > -1 || l[b] > -1) && (l[b] > -1 ? d[b] = decodeURIComponent(a) : d[b] = a)
        });
        (h || (h = b("Env"))).isCQuick && !d.cquick && (d.cquick = (h || (h = b("Env"))).iframeKey, d.ctarget = h.iframeTarget, d.cquick_token = h.iframeToken);
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (d.fb_dtsg = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (d.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            c = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            c && (d.fb_dtsg_ag = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)))
        }
        b("ISB").token && (d.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (d.__sp = 1);
        if (b("SiteData").spin) {
            d[(a = b("StaticSiteData")).spin_rev_key] = b("SiteData")[a.spin_rev_key];
            d[a.spin_branch_key] = b("SiteData")[a.spin_branch_key];
            d[a.spin_time_key] = b("SiteData")[a.spin_time_key];
            b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key])
        }
        i != null && j != null && (d[j] = i);
        return d
    }
    e.exports = a
}), null);
__d("BootloaderEndpoint", ["Bootloader", "BootloaderEndpointConfig", "CSRFGuard", "FBLogger", "HasteResponse", "TimeSlice", "clearImmediate", "fb-error", "getAsyncParams", "getSameOriginTransport", "performanceAbsoluteNow", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").ErrorXFBDebug,
        i = b("BootloaderEndpointConfig").endpointURI,
        j = 0,
        k = null,
        l = null,
        m = new Map(),
        n = new Map();

    function o(a) {
        return Array.from(a.keys()).join(",")
    }

    function p(a, c) {
        var d = {};
        a.size && (d.modules = o(a));
        c.size && (d.nb_modules = o(c));
        a = Object.entries(babelHelpers["extends"]({}, d, b("getAsyncParams")("GET"))).map(function(a) {
            var b = a[0];
            a = a[1];
            return encodeURIComponent(b) + "=" + encodeURIComponent(String(a))
        }).join("&");
        return i + (i.includes("?") ? "&" : "?") + a
    }

    function q(a, c) {
        if (a.size === 0 && c.size === 0) return;
        var d = p(a, c),
            e = b("getSameOriginTransport")(),
            f = j++,
            i = (g || (g = b("performanceAbsoluteNow")))();
        e.open("GET", d, !0);
        var k = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        e.onreadystatechange = function() {
            if (e.readyState !== 4) return;
            k(function() {
                h.addFromXHR(e);
                var g = e.status === 200 ? JSON.parse(b("CSRFGuard").clean(e.responseText)) : null;
                if (g == null) {
                    b("FBLogger")("bootloader").warn('Invalid bootloader response %d, blocking mods: %s; non-blocking mods: %s; "%s"', e.status, o(a), o(c), e.responseText.substr(0, 256));
                    return
                }
                if (g.error) b("FBLogger")("bootloader").warn("Non-fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
                else if (g.__error) {
                    b("FBLogger")("bootloader").warn("Fatal error from bootloader endpoint, blocking mods: %s; non-blocking mods: %s", o(a), o(c));
                    return
                }
                b("TimeSlice").guard(function() {
                    return r(d, g, a, c, f, i)
                }, "Bootloader receiveEndpointData", {
                    propagationType: b("TimeSlice").PropagationType.CONTINUATION
                })()
            })
        };
        e.send()
    }

    function r(a, c, d, e, f, h) {
        var i = (g || (g = b("performanceAbsoluteNow")))(),
            j = c.serverGenTime,
            k = c.hrp;
        if (k == null) {
            c = c;
            b("FBLogger")("be_null_hrp").mustfix("Found null hrp, blocking mods: %s; non-blocking mods: %s; response error: %s", o(d), o(e), c.error + ", summary: " + c.errorSummary + ", description: " + c.errorDescription);
            k = c
        }
        b("HasteResponse").handle(k, {
            source: "bootloader_endpoint",
            sourceDetail: JSON.stringify({
                b: Array.from(d.keys()),
                n: Array.from(e.keys())
            }),
            onBlocking: function() {
                var a = [d, e];
                for (var c = 0; c < a.length; c++) {
                    var f = a[c];
                    for (var f = f.values(), g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var i;
                        if (g) {
                            if (h >= f.length) break;
                            i = f[h++]
                        } else {
                            h = f.next();
                            if (h.done) break;
                            i = h.value
                        }
                        i = i;
                        b("Bootloader").done(i)
                    }
                }
            },
            onLog: function(c) {
                var g = [d, e];
                for (var k = 0; k < g.length; k++) {
                    var l = g[k];
                    for (var l = l.keys(), m = Array.isArray(l), n = 0, l = m ? l : l[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var o;
                        if (m) {
                            if (n >= l.length) break;
                            o = l[n++]
                        } else {
                            n = l.next();
                            if (n.done) break;
                            o = n.value
                        }
                        o = o;
                        b("Bootloader").beDone(o, f, babelHelpers["extends"]({
                            requestStart: h,
                            responseStart: i,
                            serverGenTime: j,
                            uri: a
                        }, c))
                    }
                }
            }
        })
    }

    function s() {
        var a = m,
            c = n;
        b("clearImmediate")(l);
        l = null;
        k = null;
        m = new Map();
        n = new Map();
        q(a, c)
    }
    a = {
        load: function(a, c, d) {
            (c ? m : n).set(a, d);
            if (b("BootloaderEndpointConfig").debugNoBatching) {
                s();
                return
            }
            if (l != null) return;
            k = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
            l = b("setImmediateAcrossTransitions")(function() {
                k && k(function() {
                    return s()
                })
            })
        },
        forceFlush: function() {
            k && k(function() {
                return s()
            })
        }
    };
    e.exports = a
}), null);
__d("MetaConfigMap", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
        add: function(a, b) {
            for (var c in a) b && b.entry++, !(c in g) ? g[c] = a[c] : b && b.dup_entry++
        },
        get: function(a) {
            return g[a]
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("QPLHasteSupportDataStorage", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
        add: function(a, b) {
            Object.keys(a).forEach(function(c) {
                b && b.entry++;
                if (g[c] == null) {
                    var d = a[c];
                    g[c] = d
                } else b && b.dup_entry++
            })
        },
        get: function(a) {
            return g[a]
        }
    };
    f["default"] = a
}), 66);
__d("bx", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a) {
        var b = h[a];
        if (!b) throw c("unrecoverableViolation")("bx" + ('(...): Unknown file path "' + a + '"'), "staticresources");
        return b
    }
    a.add = function(a, b) {
        var c = !1;
        for (var c in a) b && b.entry++, !(c in h) ? (a[c].loggingID = c, h[c] = a[c]) : b && b.dup_entry++
    };
    a.getURL = function(a) {
        return a.uri
    };
    g["default"] = a
}), 98);
__d("recoverableViolation", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        d = d === void 0 ? {} : d;
        d = d.error;
        b = c("FBLogger")(b);
        d ? b = b.catching(d) : b = b.blameToPreviousFrame();
        d = e == null ? void 0 : e.categoryKey;
        d != null && (b = b.addToCategoryKey(d));
        b.mustfix(a);
        return null
    }
    g["default"] = a
}), 98);
__d("getFalcoLogPolicy_DO_NOT_USE", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            r: 1
        },
        i = {};

    function a(a) {
        var b = i[a];
        if (b == null) {
            c("recoverableViolation")("Failed to find a Haste-supplied log policy for the Falco event ' +\n        'identified by token `" + a + "`. Failing open (ie. with a sampling rate of 1.0).", "staticresources");
            return h
        }
        return b
    }
    a.add = function(a, b) {
        Object.keys(a).forEach(function(c) {
            b && b.entry++, i[c] == null ? i[c] = a[c] : b && b.dup_entry++
        })
    };
    g["default"] = a
}), 98);
__d("ix", ["invariant", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
    var i = {},
        j = new Set();

    function b(b) {
        var d = i[b];
        !d && h(0, 11798, b);
        a.__flight_execution_mode_DO_NOT_USE === "flight" && d.sprited === 1 && j.add(c("nullthrows")(d.origPath, "origPath should be defined on the server in react flight"));
        return d
    }
    b.add = function(a, b) {
        var c = !1;
        for (var c in a) b && b.entry++, !(c in i) ? (a[c].loggingID = c, i[c] = a[c]) : b && b.dup_entry++
    };
    b.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function() {
        a.__flight_execution_mode_DO_NOT_USE === "flight" || h(0, 34547);
        return Array.from(j)
    };
    g["default"] = b
}), 98);
__d("justknobx", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {};
    a = {
        getBool: function(a) {
            h(0, 47459)
        },
        getInt: function(a) {
            h(0, 47459)
        },
        _: function(a) {
            var b = i[a];
            b != null || h(0, 47458, a);
            return b.r
        },
        add: function(a, b) {
            for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("qex", ["invariant", "BanzaiLazyQueue"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = {},
        j = {};
    a = {
        _: function(a) {
            var b = i[a];
            b != null || h(0, 11799, a);
            var c = b.r;
            b = b.l;
            b != null && !j[a] && (j[a] = !0, d("BanzaiLazyQueue").queuePost("qex", {
                l: b
            }));
            return c
        },
        add: function(a, b) {
            for (var c in a) b && b.entry++, !(c in i) ? i[c] = a[c] : b && b.dup_entry++
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("HasteSupportData", ["ix", "MetaConfigMap", "QPLHasteSupportDataStorage", "bx", "getFalcoLogPolicy_DO_NOT_USE", "gkx", "justknobx", "qex"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b) {
        var d = a.bxData,
            e = a.clpData,
            f = a.gkxData,
            g = a.ixData,
            i = a.metaconfigData,
            j = a.qexData,
            k = a.qplData;
        a = a.justknobxData;
        d != null && c("bx").add(d, b);
        e != null && c("getFalcoLogPolicy_DO_NOT_USE").add(e, b);
        f != null && c("gkx").add(f, b);
        g != null && h.add(g, b);
        i != null && c("MetaConfigMap").add(i, b);
        j != null && c("qex").add(j, b);
        k != null && c("QPLHasteSupportDataStorage").add(k, b);
        a != null && c("justknobx").add(a, b)
    }
    g.handle = a
}), 98);
__d("CSS", ["$", "CSSCore"], (function(a, b, c, d, e, f, g) {
    var h = typeof window != "undefined" ? window.CSS : null,
        i = "hidden_elem";
    h = h && h.supports.bind(h);

    function a(a, b) {
        c("$").fromIDOrElement(a).className = b || "";
        return a
    }

    function j(a, b) {
        return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").hasClass(c("$").fromIDOrElement(a), b)
    }

    function b(a, b) {
        return a instanceof Document || a instanceof Text ? !1 : d("CSSCore").matchesSelector(c("$").fromIDOrElement(a), b)
    }

    function k(a, b) {
        return d("CSSCore").addClass(c("$").fromIDOrElement(a), b)
    }

    function l(a, b) {
        return d("CSSCore").removeClass(c("$").fromIDOrElement(a), b)
    }

    function m(a, b, e) {
        return d("CSSCore").conditionClass(c("$").fromIDOrElement(a), b, !!e)
    }

    function n(a, b) {
        return m(a, b, !j(a, b))
    }

    function e(a) {
        return !j(a, i)
    }

    function f(a) {
        return k(a, i)
    }

    function o(a) {
        return l(a, i)
    }

    function p(a) {
        return n(a, i)
    }

    function q(a, b) {
        return m(a, i, !b)
    }
    g.supports = h;
    g.setClass = a;
    g.hasClass = j;
    g.matchesSelector = b;
    g.addClass = k;
    g.removeClass = l;
    g.conditionClass = m;
    g.toggleClass = n;
    g.shown = e;
    g.hide = f;
    g.show = o;
    g.toggle = p;
    g.conditionShow = q
}), 98);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b = b.toUpperCase();
        a = i(a, function(a) {
            return a.nodeName === b
        });
        return a instanceof Element ? a : null
    }

    function b(a, b) {
        a = i(a, function(a) {
            return a instanceof Element && d("CSS").hasClass(a, b)
        });
        return a instanceof Element ? a : null
    }

    function c(a, b) {
        a = a;
        if (typeof a.matches === "function") {
            while (a && a !== document && !a.matches(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else if (typeof a.msMatchesSelector === "function") {
            while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
            return a instanceof Element ? a : null
        } else return h(a, b)
    }

    function h(a, b) {
        a = a;
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (!(c instanceof Element) && !(c instanceof Document)) return null;
        c = c.querySelectorAll(b);
        while (a) {
            if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
            a = a.parentNode
        }
        return a instanceof Element ? a : null
    }

    function e(a, b) {
        a = i(a, function(a) {
            return a instanceof Element && !!a.getAttribute(b)
        });
        return a instanceof Element ? a : null
    }

    function i(a, b) {
        a = a;
        while (a) {
            if (b(a)) return a;
            a = a.parentNode
        }
        return null
    }
    g.byTag = a;
    g.byClass = b;
    g.bySelector = c;
    g.bySelector_SLOW = h;
    g.byAttribute = e;
    g.find = i
}), 98);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f, g) {
    a = function() {
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(b) {
            b = d("Parent").find(b, function(b) {
                return !!a.forNode(b)
            });
            return b ? a.forNode(b) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var b = a.prototype;
        b.onCleanup = function(a) {
            this.$6.push(a)
        };
        b.onUnmount = function(a) {
            this.$7.push(a)
        };
        b.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        b.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        b.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        b.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        b.$10 = function(a) {
            this.$5.add(a)
        };
        b.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    a.$1 = new Map();
    g["default"] = a
}), 98);
__d("__debug", [], (function(a, b, c, d, e, f) {
    a = {};
    f["default"] = a
}), 66);
__d("ServerJS", ["ContextualComponent", "ErrorGuard", "ServerJSDefine", "__debug", "err", "ge", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    var g, h = 1,
        i = 2,
        j = 16,
        k = 0;
    a = function() {
        "use strict";

        function a() {
            this.$2 = {}, this.$1 = null, this.$4 = {}, this.$3 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, m)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, c, d) {
            this.$3 = c;
            if (a.__guard != null) throw b("err")("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            d(a.define || [], this.$6, this);
            d(a.markup || [], this.$7, this);
            d(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            d(a.instances || [], this.$10, this);
            var e = d(a.pre_display_requires || [], this.$11, this);
            e = e.concat(d(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    e.forEach(function(a) {
                        a && a.cancel()
                    })
                }
            }
        };
        c.handlePartial = function(a, b) {
            var c = this;
            (a.instances || []).forEach(function(a) {
                p(c.$2, a)
            });
            (a.markup || []).forEach(function(a) {
                o(c.$2, a)
            });
            (a.elements || []).forEach(function(a) {
                o(c.$2, a)
            });
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$1 = a;
            return this
        };
        c.cleanup = function(a) {
            var c = Object.keys(this.$2);
            a ? d.call(null, c, a.guard(function() {}, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, function() {});
            this.$2 = {};

            function f(c) {
                var d = this.$4[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$4[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                throw l(b("err")("%s did not fire because it has missing dependencies.\n%s", f, a), d)
            }
            for (var a in this.$4)(g || (g = b("ErrorGuard"))).applyWithGuard(f, this, [a], {
                name: "ServerJS:cleanup id: " + a,
                project: "ServerJSCleanup"
            })
        };
        c.$6 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$1], {
                name: "JS::define"
            })
        };
        c.$11 = function(a, c, d, e) {
            return (g || (g = b("ErrorGuard"))).applyWithGuard(this.$12, this, [a, c, d, e], {
                name: c != null ? "JS::call" : "JS::requireModule"
            })
        };
        c.$12 = function(a, c, d, e) {
            var f = this;
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var m = a.name,
                n = a.hash,
                o;
            typeof c === "object" ? a = c : (a = d, o = c);
            d = [m].concat(a || []);
            var p;
            o != null ? p = "__call__" + m + "." + o : p = "__requireModule__" + m;
            p += "__" + k++;
            this.$4[p] = [m, o, n];
            var q = this.$3 && this.$3.bigPipeContext,
                r = (g || (g = b("ErrorGuard"))).guard(function(a) {
                    a = b.call(null, m);
                    delete f.$4[p];
                    e && b("replaceTransportMarkers")({
                        relativeTo: f.$1,
                        bigPipeContext: q
                    }, e);
                    if (o != null) {
                        if (!a[o]) throw l(b("err")('Module %s has no method "%s"', m, o), n);
                        a[o].apply(a, e || []);
                        r.__SMmeta = a[o].__SMmeta || {};
                        r.__SMmeta.module = r.__SMmeta.module || m;
                        r.__SMmeta.name = r.__SMmeta.name || o
                    }
                }, {
                    name: o != null ? "JS::call('" + m + "', '" + o + "', ...)" : "JS::requireModule('" + m + "')"
                });
            c = define(p, d, r, h | j | i, this, 1, this.$3);
            return c
        };
        c.$10 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$13, this, [a, c, d, e], {
                name: "JS::instance"
            })
        };
        c.$13 = function(a, c, d, e) {
            var f = this,
                g = null;
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var h = a.name;
            a = a.hash;
            if (c) {
                var k = this.$3 && this.$3.bigPipeContext;
                g = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: f.$1,
                        bigPipeContext: k
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }
            }
            define(h, c, g, i | j, null, e)
        };
        c.$7 = function(a, c, d) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$14, this, [a, c, d], {
                name: "JS::markup"
            })
        };
        c.$14 = function(a, c, d) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var e = a.name;
            a = a.hash;
            define(e, ["HTML"], function(b) {
                try {
                    return b.replaceJSONWrapper(c).getRootNode()
                } catch (b) {
                    throw l(b, a)
                }
            }, j, null, d)
        };
        c.$8 = function(a, c, d, e) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$15, this, [a, c, d, e], {
                name: "JS::element"
            })
        };
        c.$15 = function(a, c, d, e) {
            a = b("ServerJSDefine").getModuleNameAndHash(a);
            var f = a.name,
                g = a.hash;
            if (c === null && d != null) {
                define(f, null, null, j, null, d);
                return
            }
            a = [];
            var i = j;
            d = d || 0;
            e != null && (a.push(e), i |= h, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw l(b("err")('Could not find element "%s"%s', c, d), g)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            (g || (g = b("ErrorGuard"))).applyWithGuard(this.$16, this, [a], {
                name: "ContextualComponents"
            })
        };
        c.$16 = function(a) {
            var c = this,
                d = this.$3 && this.$3.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$1,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, n(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function l(a, b) {
        a.serverHash = b;
        return a
    }

    function m(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function n(a) {
        var b = 0;
        a = a;
        while (a) a = a.parentElement, b++;
        return b
    }

    function o(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[2] = (a[2] || 0) + 1);
        c[d] = !0
    }

    function p(c, a) {
        var d = b("ServerJSDefine").getModuleNameAndHash(a[0]);
        d = d.name;
        d in c || (a[3] = (a[3] || 0) + 1);
        c[d] = !0
    }
    e.exports = a
}), null);
__d("HasteResponse", ["Bootloader", "BootloaderEvents", "ClientConsistencyEventEmitter", "HasteSupportData", "ServerJS", "TimeSlice", "__debug", "fb-error", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("fb-error").getSimpleHash,
        i = new Set(),
        j = {
            handleSRPayload: function(a, c) {
                var d = a.hsdp;
                a = a.hblp;
                d && b("HasteSupportData").handle(d, c == null ? void 0 : c.hsdp);
                a && b("Bootloader").handlePayload(a, c == null ? void 0 : c.hblp);
                (a == null ? void 0 : a.consistency) != null && b("ClientConsistencyEventEmitter").emit("newEntry", a.consistency)
            },
            handle: function(a, c) {
                var d = a.jsmods,
                    e = a.allResources;
                a = a.hsrp;
                var f = c.source,
                    k = c.sourceDetail,
                    l = c.onBlocking,
                    m = c.onLog;
                c = c.onAll;
                var n = (g || (g = b("performanceAbsoluteNow")))(),
                    o;
                if (k == null) o = !0;
                else {
                    var p = h(f, k);
                    i.has(p) ? o = !1 : (o = !0, i.add(p))
                }
                var q = {
                    hsdp: {
                        entry: 0,
                        dup_entry: 0
                    },
                    hblp: {
                        rsrc: 0,
                        dup_rsrc: 0,
                        comp: 0,
                        dup_comp: 0
                    },
                    sjsp: {
                        define: 0,
                        dup_user_define: 0,
                        dup_system_define: 0,
                        require: 0
                    }
                };
                a && j.handleSRPayload(a, q);
                var r = 0,
                    s = 0;
                b("Bootloader").loadResources((p = e) != null ? p : [], {
                    onBlocking: function() {
                        q.sjsp.require += ((d == null ? void 0 : d.require) || []).length;
                        q.sjsp.define += ((d == null ? void 0 : d.define) || []).length;
                        var a = b("__debug").getDupCount(),
                            c = a[0];
                        a = a[1];
                        q.sjsp.dup_user_define -= c;
                        q.sjsp.dup_system_define -= a;
                        r = (g || (g = b("performanceAbsoluteNow")))();
                        new(b("ServerJS"))().handle(d || {});
                        s = g();
                        var e = b("__debug").getDupCount();
                        c = e[0];
                        a = e[1];
                        q.sjsp.dup_user_define += c;
                        q.sjsp.dup_system_define += a;
                        l == null ? void 0 : l()
                    },
                    onAll: c,
                    onLog: function(a) {
                        a = {
                            source: f,
                            sourceDetail: k,
                            isFirstIdentical: o,
                            timesliceContext: b("TimeSlice").getContext(),
                            startTime: n,
                            logTime: (g || (g = b("performanceAbsoluteNow")))(),
                            jsmodsStart: r,
                            jsmodsEnd: s,
                            rsrcs: a,
                            payloadStats: q
                        };
                        m == null ? void 0 : m(a);
                        b("BootloaderEvents").notifyHasteResponse(a)
                    }
                }, "HasteResponse:" + f + ":" + ((a = k) != null ? a : "<unknown>"))
            }
        };
    e.exports = j
}), null);
__d("ErrorGuardState", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorGuardState
}), 98);
__d("ErrorNormalizeUtils", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorNormalizeUtils
}), 98);
__d("ErrorSerializer", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("fb-error").ErrorSerializer
}), 98);
__d("ErrorUtils", ["ErrorGuard", "ErrorGuardState", "ErrorNormalizeUtils", "ErrorPubSub", "ErrorSerializer", "getErrorSafe"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    h || b("ErrorGuardState");
    b("ErrorNormalizeUtils");
    i || (i = b("ErrorPubSub"));
    b("getErrorSafe");
    j || (j = b("ErrorGuard"));
    b("ErrorSerializer");
    a.getErrorSafe = c("getErrorSafe");
    a.ErrorGuard = c("ErrorGuard");
    a.ErrorSerializer = c("ErrorSerializer");
    d = {
        history: c("ErrorPubSub").history,
        applyWithGuard: function(a, b, d, e, f, g) {
            return c("ErrorGuard").applyWithGuard(a, b, (a = d) != null ? a : [], {
                name: f,
                onNormalizedError: e,
                deferredSource: g == null ? void 0 : g.deferredSource
            })
        },
        guard: function(a, b, d) {
            a = c("ErrorGuard").guard(a, b != null ? {
                name: b
            } : null);
            d != null && (a = a.bind(d));
            return a
        },
        normalizeError: function(a) {
            var b;
            return (b = c("ErrorNormalizeUtils").ifNormalizedError(a)) != null ? b : c("ErrorNormalizeUtils").normalizeError(c("getErrorSafe")(a))
        }
    };
    a.ErrorUtils = d;
    e = d;
    typeof __t === "function" && __t.setHandler && __t.setHandler(c("ErrorPubSub").reportError);
    g["default"] = e
}), 99);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }

    function get(key) {
        if (!factories[key]) throw new Error("JSCC entry is missing");
        return factories[key]()
    }

    function init(constructors) {
        for (var key in constructors) factories[key] = createFactory(constructors[key]);
        return function clearJSCC() {
            for (var _key in constructors) delete factories[_key]
        }
    }

    function parse(jsccMapString) {
        return eval(jsccMapString)
    }
    exports.get = get;
    exports.init = init;
    exports.parse = parse
}), 66);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    f["default"] = a
}), 66);
__d("PageletEventConstsJS", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ARRIVE_END: "arrive",
        ARRIVE_START: "prearrive",
        CSS_END: "css_load",
        CSS_START: "css",
        DISPLAY_END: "display",
        DISPLAY_START: "display_start",
        IMAGES_DISPLAYED: "images_displayed",
        JS_END: "jsdone",
        JS_START: "jsstart",
        ONLOAD_END: "onload",
        ONLOAD_START: "preonload",
        PAGELET_EVENT: "pagelet_events",
        PHASE_BEGIN: "phase_begin",
        SETUP: "setup"
    });
    f["default"] = a
}), 66);
__d("PageletSet", ["Arbiter"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function i(a) {
        return Object.prototype.hasOwnProperty.call(h, a)
    }

    function j(a) {
        return h[a]
    }

    function a(a) {
        if (!i(a)) {
            var b = new n(a);
            h[a] = b
        }
        return j(a)
    }

    function k() {
        return Object.keys(h)
    }

    function l(a) {
        if (i(a)) {
            var b = j(a);
            delete h[a];
            b.destroy()
        }
    }

    function m(a, b) {
        return a.contains ? a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    }
    var n = function() {
        function a(a) {
            var b = this;
            this.id = a;
            this.$1 = null;
            this.$2 = [];
            this.addDestructor(function() {
                c("Arbiter").inform("pagelet/destroy", {
                    id: b.id,
                    root: b.$1
                })
            })
        }
        var b = a.prototype;
        b.getRoot = function() {
            return this.$1
        };
        b.setRoot = function(a) {
            this.$1 = a
        };
        b.$3 = function() {
            var a = [],
                b = this.$1;
            if (!b) return a;
            var c = k();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                if (e === this.id) continue;
                e = h[e];
                var f = e.getRoot();
                f && m(b, f) && a.push(e)
            }
            return a
        };
        b.addDestructor = function(a) {
            this.$2.push(a)
        };
        b.destroy = function() {
            var a = this.$3();
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                i(c.id) && l(c.id)
            }
            for (var c = 0; c < this.$2.length; c++) {
                a = this.$2[c]();
                a && a()
            }
        };
        return a
    }();
    g.hasPagelet = i;
    g.getPagelet = j;
    g.getOrCreatePagelet = a;
    g.getPageletIDs = k;
    g.removePagelet = l
}), 98);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a;
        a = function() {
            for (var a = arguments.length, c = new Array(a), d = 0; d < a; d++) c[d] = arguments[d];
            return b.apply(this, c)
        };
        a.cancel = function() {
            b = c("emptyFunction")
        };
        return a
    }
    g["default"] = a
}), 98);
__d("isTruthy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a != null && Boolean(a)
    }
    f["default"] = a
}), 66);
__d("RunBlue", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "isTruthy", "performanceAbsoluteNow", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "onunloadhooks",
        i = "onafterunloadhooks";

    function j(b, d) {
        var e = a.CavalryLogger && a.CavalryLogger.getInstance();
        if (!e) return;
        c("isTruthy")(d) ? e.setAbsTimeStamp && e.setAbsTimeStamp(b, d) : e.setTimeStamp(b)
    }

    function b(b) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(b, "domreadyhooks:late");
            return {
                remove: c("emptyFunction")
            }
        } else return p("domreadyhooks", b)
    }

    function e(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = a.setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return a.clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function f(a, b) {
        b = b === void 0 ? !window.loading_page_chrome : b;
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, b) {
        window.onunload || (window.onunload = c("TimeSlice").guard(function() {
            c("Arbiter").inform(c("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, b)
    }

    function l(a) {
        return k(h, a)
    }

    function m(a) {
        return k(i, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, b) {
        var d = c("createCancelableFunction")(b);
        b = function() {
            d(), d.cancel()
        };
        a = c("ContextualComponent").closestToNode(a);
        a && a.onCleanup(b);
        window.onleavehooks = (window.onleavehooks || []).concat(b);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, b) {
        var d;
        d = (d = b) != null ? d : c("emptyFunction");
        b || c("recoverableViolation")("Undefined handler is not allowed", "web_speed");
        var e = c("createCancelableFunction")(d);
        window[a] = (window[a] || []).concat(e);
        return {
            remove: function() {
                e.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = c("TimeSlice").guard(function() {
        c("Arbiter").inform(c("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        var b = document,
            d = window;
        if (b.addEventListener) {
            var e = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (e && e[1] < 525) var f = a.setInterval(function() {
                /loaded|complete/.test(b.readyState) && (r(), a.clearInterval(f))
            }, 10);
            else b.addEventListener("DOMContentLoaded", r, !0)
        } else {
            e = d.location.protocol === "https:" ? "//:" : "javascript:void(0)";
            b.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + e + '"></');
            b.write("script>")
        }
        var g = d.onload;
        d.onload = c("TimeSlice").guard(function() {
            j("t_layout"), g && g(), c("Arbiter").inform(c("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        d.onbeforeunload = c("TimeSlice").guard(function(a) {
            var b = {};
            c("Arbiter").inform(c("PageEvents").NATIVE_ONBEFOREUNLOAD, b, "state");
            b.warn || c("Arbiter").inform(c("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (b.warn !== void 0) {
                b = b.warn.body != null ? b.warn.body : b.warn;
                a && (a.returnValue = b);
                return b
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a, b = c("performanceAbsoluteNow")();
        ((a = window.console) == null ? void 0 : a.timeStamp) && window.console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        j("t_onload", b);
        c("Arbiter").inform(c("PageEvents").BIGPIPE_ONLOAD, {
            ts: b
        }, "state")
    }
    var u = c("Arbiter").registerCallback(function() {
            d("BigPipeInstance").getCurrentInstance() ? c("Arbiter").subscribeOnce(d("BigPipeInstance").Events.displayed, t) : t()
        }, [c("PageEvents").NATIVE_ONLOAD]),
        v = c("Arbiter").registerCallback(function() {
            j("t_domcontent");
            var a = {
                timeTriggered: Date.now()
            };
            c("Arbiter").inform(c("PageEvents").BIGPIPE_DOMREADY, a, "state")
        }, [c("PageEvents").NATIVE_DOMREADY]);
    d("ExecutionEnvironment").canUseDOM && s();
    g.onLoad = b;
    g.onAfterLoad = e;
    g.onBeforeUnload = f;
    g.onUnload = l;
    g.onAfterUnload = m;
    g.onLeave = n;
    g.onCleanupOrLeave = o;
    g.__removeHook = q;
    g.__onloadCallback = u;
    g.__domContentCallback = v
}), 98);
__d("UserTimingUtils", ["performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof c("performance").mark === "function" && typeof c("performance").clearMarks === "function" && typeof c("performance").measure === "function" && typeof c("performance").clearMeasures === "function",
        i = !1;
    if (h && c("performance").mark != null) {
        var j = "__v3",
            k = {};
        Object.defineProperty(k, "startTime", {
            get: function() {
                i = !0
            }
        });
        try {
            c("performance").mark(j, k)
        } catch (a) {} finally {
            c("performance").clearMarks(j)
        }
    }

    function a(a) {
        h && c("performance").mark(a)
    }

    function b(a, b, d) {
        d === void 0 && (d = !0);
        if (h) {
            try {
                c("performance").measure(a, b)
            } catch (a) {}
            d && c("performance").clearMarks(b);
            c("performance").clearMeasures(a)
        }
    }

    function d(a) {
        if (h) {
            try {
                a = c("performance").getEntriesByName(a, "mark");
                if (a != null && a.length > 0) return !0
            } catch (a) {}
            return !1
        }
    }

    function e(a) {
        if (h) try {
            c("performance").clearMarks(a)
        } catch (a) {}
    }

    function f(a, b) {
        i && (c("performance").measure(a, b), c("performance").clearMeasures(a))
    }

    function l(a, b) {
        i && (c("performance").mark(a, b), c("performance").clearMarks(a))
    }
    g.measureStart = a;
    g.measureEnd = b;
    g.hasMark = d;
    g.clearMarks = e;
    g.measureModern = f;
    g.markModern = l
}), 98);
__d("captureUsageSnapshot", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        var a = window.__bodyWrapper;
        if (!a.getCodeUsage) return {
            js_calls: {},
            document_html: "",
            stylesheets: {}
        };
        a = babelHelpers["extends"]({}, a.getCodeUsage());
        var b = String(window.document.body.outerHTML),
            c = {};
        Array.from(document.styleSheets).forEach(function(a) {
            a.href && (c[a.href] = !0)
        });
        return {
            js_calls: a,
            document_html: b,
            stylesheets: c
        }
    }
    f["default"] = a
}), 66);
/**
 * License: https://www.facebook.com/legal/license/YzYYrH_bE_k/
 */
__d("DOMPurify", [], (function(a, b, c, d, e, f) {
    (function(b, c) {
        typeof f === "object" && typeof e !== "undefined" ? e.exports = c() : typeof define === "function" && define.amd ? define(c) : (b = b || self, b.DOMPurify = c())
    })(this, function() {
        "use strict";

        function a(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }
        var b = Object.hasOwnProperty,
            c = Object.setPrototypeOf,
            d = Object.isFrozen,
            e = Object.getPrototypeOf,
            f = Object.getOwnPropertyDescriptor,
            g = Object.freeze,
            h = Object.seal,
            i = Object.create,
            j = typeof Reflect !== "undefined" && Reflect,
            k = j.apply,
            l = j.construct;
        k || (k = function(a, b, c) {
            return a.apply(b, c)
        });
        g || (g = function(a) {
            return a
        });
        h || (h = function(a) {
            return a
        });
        l || (l = function(b, c) {
            return new(Function.prototype.bind.apply(b, [null].concat(a(c))))()
        });
        var aa = q(Array.prototype.forEach),
            ba = q(Array.prototype.pop),
            m = q(Array.prototype.push),
            n = q(String.prototype.toLowerCase),
            ca = q(String.prototype.match),
            o = q(String.prototype.replace),
            da = q(String.prototype.indexOf),
            ea = q(String.prototype.trim),
            p = q(RegExp.prototype.test),
            fa = r(TypeError);

        function q(a) {
            return function(b) {
                for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                return k(a, b, d)
            }
        }

        function r(a) {
            return function() {
                for (var b = arguments.length, c = Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                return l(a, c)
            }
        }

        function s(a, b) {
            c && c(a, null);
            var e = b.length;
            while (e--) {
                var f = b[e];
                if (typeof f === "string") {
                    var g = n(f);
                    g !== f && (d(b) || (b[e] = g), f = g)
                }
                a[f] = !0
            }
            return a
        }

        function t(a) {
            var c = i(null),
                d = void 0;
            for (d in a) k(b, a, [d]) && (c[d] = a[d]);
            return c
        }

        function u(a, b) {
            while (a !== null) {
                var c = f(a, b);
                if (c) {
                    if (c.get) return q(c.get);
                    if (typeof c.value === "function") return q(c.value)
                }
                a = e(a)
            }

            function d(a) {
                return null
            }
            return d
        }
        var ga = g(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
            v = g(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
            w = g(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
            ha = g(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
            x = g(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
            ia = g(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
            ja = g(["#text"]),
            ka = g(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
            y = g(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
            la = g(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
            z = g(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
            ma = h(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
            na = h(/<%[\s\S]*|[\s\S]*%>/gm),
            oa = h(/^data-[\-\w.\u00B7-\uFFFF]/),
            pa = h(/^aria-[\-\w]+$/),
            qa = h(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
            ra = h(/^(?:\w+script|data):/i),
            sa = h(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
            A = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(a) {
                return typeof a
            } : function(a) {
                return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            };

        function B(a) {
            if (Array.isArray(a)) {
                for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
                return c
            } else return Array.from(a)
        }
        var ta = function() {
                return typeof window === "undefined" ? null : window
            },
            ua = function(a, b) {
                if ((typeof a === "undefined" ? "undefined" : A(a)) !== "object" || typeof a.createPolicy !== "function") return null;
                var c = null,
                    d = "data-tt-policy-suffix";
                b.currentScript && b.currentScript.hasAttribute(d) && (c = b.currentScript.getAttribute(d));
                b = "dompurify" + (c ? "#" + c : "");
                try {
                    return a.createPolicy(b, {
                        createHTML: function(a) {
                            return a
                        }
                    })
                } catch (a) {
                    console.warn("TrustedTypes policy " + b + " could not be created.");
                    return null
                }
            };

        function va() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ta(),
                b = function(a) {
                    return va(a)
                };
            b.version = "2.2.7";
            b.removed = [];
            if (!a || !a.document || a.document.nodeType !== 9) {
                b.isSupported = !1;
                return b
            }
            var c = a.document,
                d = a.document,
                e = a.DocumentFragment,
                f = a.HTMLTemplateElement,
                h = a.Node,
                i = a.Element,
                j = a.NodeFilter,
                k = a.NamedNodeMap,
                l = k === void 0 ? a.NamedNodeMap || a.MozNamedAttrMap : k,
                q = a.Text,
                r = a.Comment,
                wa = a.DOMParser,
                xa = a.trustedTypes,
                C = i.prototype,
                ya = u(C, "cloneNode"),
                za = u(C, "nextSibling"),
                Aa = u(C, "childNodes"),
                D = u(C, "parentNode");
            if (typeof f === "function") {
                var E = d.createElement("template");
                E.content && E.content.ownerDocument && (d = E.content.ownerDocument)
            }
            var F = ua(xa, c),
                Ba = F && S ? F.createHTML("") : "",
                G = d,
                H = G.implementation,
                Ca = G.createNodeIterator,
                Da = G.getElementsByTagName,
                Ea = G.createDocumentFragment,
                Fa = c.importNode,
                Ga = {};
            try {
                Ga = t(d).documentMode ? d.documentMode : {}
            } catch (a) {}
            var I = {};
            b.isSupported = typeof D === "function" && H && typeof H.createHTMLDocument !== "undefined" && Ga !== 9;
            var J = ma,
                K = na,
                Ha = oa,
                Ia = pa,
                Ja = ra,
                Ka = sa,
                L = qa,
                M = null,
                La = s({}, [].concat(B(ga), B(v), B(w), B(x), B(ja))),
                N = null,
                Ma = s({}, [].concat(B(ka), B(y), B(la), B(z))),
                Na = null,
                Oa = null,
                Pa = !0,
                Qa = !0,
                Ra = !1,
                O = !1,
                P = !1,
                Sa = !1,
                Ta = !1,
                Q = !1,
                R = !1,
                Ua = !0,
                S = !1,
                Va = !0,
                Wa = !0,
                T = !1,
                U = {},
                Xa = s({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                Ya = null,
                Za = s({}, ["audio", "video", "img", "source", "image", "track"]),
                $a = null,
                ab = s({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                V = null,
                bb = d.createElement("form"),
                cb = function(a) {
                    if (V && V === a) return;
                    (!a || (typeof a === "undefined" ? "undefined" : A(a)) !== "object") && (a = {});
                    a = t(a);
                    M = "ALLOWED_TAGS" in a ? s({}, a.ALLOWED_TAGS) : La;
                    N = "ALLOWED_ATTR" in a ? s({}, a.ALLOWED_ATTR) : Ma;
                    $a = "ADD_URI_SAFE_ATTR" in a ? s(t(ab), a.ADD_URI_SAFE_ATTR) : ab;
                    Ya = "ADD_DATA_URI_TAGS" in a ? s(t(Za), a.ADD_DATA_URI_TAGS) : Za;
                    Na = "FORBID_TAGS" in a ? s({}, a.FORBID_TAGS) : {};
                    Oa = "FORBID_ATTR" in a ? s({}, a.FORBID_ATTR) : {};
                    U = "USE_PROFILES" in a ? a.USE_PROFILES : !1;
                    Pa = a.ALLOW_ARIA_ATTR !== !1;
                    Qa = a.ALLOW_DATA_ATTR !== !1;
                    Ra = a.ALLOW_UNKNOWN_PROTOCOLS || !1;
                    O = a.SAFE_FOR_TEMPLATES || !1;
                    P = a.WHOLE_DOCUMENT || !1;
                    Q = a.RETURN_DOM || !1;
                    R = a.RETURN_DOM_FRAGMENT || !1;
                    Ua = a.RETURN_DOM_IMPORT !== !1;
                    S = a.RETURN_TRUSTED_TYPE || !1;
                    Ta = a.FORCE_BODY || !1;
                    Va = a.SANITIZE_DOM !== !1;
                    Wa = a.KEEP_CONTENT !== !1;
                    T = a.IN_PLACE || !1;
                    L = a.ALLOWED_URI_REGEXP || L;
                    O && (Qa = !1);
                    R && (Q = !0);
                    U && (M = s({}, [].concat(B(ja))), N = [], U.html === !0 && (s(M, ga), s(N, ka)), U.svg === !0 && (s(M, v), s(N, y), s(N, z)), U.svgFilters === !0 && (s(M, w), s(N, y), s(N, z)), U.mathMl === !0 && (s(M, x), s(N, la), s(N, z)));
                    a.ADD_TAGS && (M === La && (M = t(M)), s(M, a.ADD_TAGS));
                    a.ADD_ATTR && (N === Ma && (N = t(N)), s(N, a.ADD_ATTR));
                    a.ADD_URI_SAFE_ATTR && s($a, a.ADD_URI_SAFE_ATTR);
                    Wa && (M["#text"] = !0);
                    P && s(M, ["html", "head", "body"]);
                    M.table && (s(M, ["tbody"]), delete Na.tbody);
                    g && g(a);
                    V = a
                },
                db = s({}, ["mi", "mo", "mn", "ms", "mtext"]),
                eb = s({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                W = s({}, v);
            s(W, w);
            s(W, ha);
            var fb = s({}, x);
            s(fb, ia);
            var gb = "http://www.w3.org/1998/Math/MathML",
                hb = "http://www.w3.org/2000/svg",
                X = "http://www.w3.org/1999/xhtml",
                ib = function(a) {
                    var b = D(a);
                    (!b || !b.tagName) && (b = {
                        namespaceURI: X,
                        tagName: "template"
                    });
                    var c = n(a.tagName),
                        d = n(b.tagName);
                    if (a.namespaceURI === hb) {
                        if (b.namespaceURI === X) return c === "svg";
                        return b.namespaceURI === gb ? c === "svg" && (d === "annotation-xml" || db[d]) : Boolean(W[c])
                    }
                    if (a.namespaceURI === gb) {
                        if (b.namespaceURI === X) return c === "math";
                        return b.namespaceURI === hb ? c === "math" && eb[d] : Boolean(fb[c])
                    }
                    if (a.namespaceURI === X) {
                        if (b.namespaceURI === hb && !eb[d]) return !1;
                        if (b.namespaceURI === gb && !db[d]) return !1;
                        a = s({}, ["title", "style", "font", "a", "script"]);
                        return !fb[c] && (a[c] || !W[c])
                    }
                    return !1
                },
                Y = function(a) {
                    m(b.removed, {
                        element: a
                    });
                    try {
                        a.parentNode.removeChild(a)
                    } catch (b) {
                        try {
                            a.outerHTML = Ba
                        } catch (b) {
                            a.remove()
                        }
                    }
                },
                jb = function(a, c) {
                    try {
                        m(b.removed, {
                            attribute: c.getAttributeNode(a),
                            from: c
                        })
                    } catch (a) {
                        m(b.removed, {
                            attribute: null,
                            from: c
                        })
                    }
                    c.removeAttribute(a);
                    if (a === "is" && !N[a])
                        if (Q || R) try {
                            Y(c)
                        } catch (a) {} else try {
                            c.setAttribute(a, "")
                        } catch (a) {}
                },
                kb = function(a) {
                    var b = void 0,
                        c = void 0;
                    if (Ta) a = "<remove></remove>" + a;
                    else {
                        var e = ca(a, /^[\r\n\t ]+/);
                        c = e && e[0]
                    }
                    e = F ? F.createHTML(a) : a;
                    try {
                        b = new wa().parseFromString(e, "text/html")
                    } catch (a) {}
                    if (!b || !b.documentElement) {
                        b = H.createHTMLDocument("");
                        var f = b;
                        f = f.body;
                        f.parentNode.removeChild(f.parentNode.firstElementChild);
                        f.outerHTML = e
                    }
                    a && c && b.body.insertBefore(d.createTextNode(c), b.body.childNodes[0] || null);
                    return Da.call(b, P ? "html" : "body")[0]
                },
                lb = function(a) {
                    return Ca.call(a.ownerDocument || a, a, j.SHOW_ELEMENT | j.SHOW_COMMENT | j.SHOW_TEXT, function() {
                        return j.FILTER_ACCEPT
                    }, !1)
                },
                mb = function(a) {
                    if (a instanceof q || a instanceof r) return !1;
                    return typeof a.nodeName !== "string" || typeof a.textContent !== "string" || typeof a.removeChild !== "function" || !(a.attributes instanceof l) || typeof a.removeAttribute !== "function" || typeof a.setAttribute !== "function" || typeof a.namespaceURI !== "string" || typeof a.insertBefore !== "function" ? !0 : !1
                },
                Z = function(a) {
                    return (typeof h === "undefined" ? "undefined" : A(h)) === "object" ? a instanceof h : a && (typeof a === "undefined" ? "undefined" : A(a)) === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"
                },
                $ = function(a, c, d) {
                    if (!I[a]) return;
                    aa(I[a], function(a) {
                        a.call(b, c, d, V)
                    })
                },
                nb = function(a) {
                    var c = void 0;
                    $("beforeSanitizeElements", a, null);
                    if (mb(a)) {
                        Y(a);
                        return !0
                    }
                    if (ca(a.nodeName, /[\u0080-\uFFFF]/)) {
                        Y(a);
                        return !0
                    }
                    var d = n(a.nodeName);
                    $("uponSanitizeElement", a, {
                        tagName: d,
                        allowedTags: M
                    });
                    if (!Z(a.firstElementChild) && (!Z(a.content) || !Z(a.content.firstElementChild)) && p(/<[/\w]/g, a.innerHTML) && p(/<[/\w]/g, a.textContent)) {
                        Y(a);
                        return !0
                    }
                    if (!M[d] || Na[d]) {
                        if (Wa && !Xa[d]) {
                            var e = D(a),
                                f = Aa(a);
                            if (f && e) {
                                var g = f.length;
                                for (var g = g - 1; g >= 0; --g) e.insertBefore(ya(f[g], !0), za(a))
                            }
                        }
                        Y(a);
                        return !0
                    }
                    if (a instanceof i && !ib(a)) {
                        Y(a);
                        return !0
                    }
                    if ((d === "noscript" || d === "noembed") && p(/<\/no(script|embed)/i, a.innerHTML)) {
                        Y(a);
                        return !0
                    }
                    O && a.nodeType === 3 && (c = a.textContent, c = o(c, J, " "), c = o(c, K, " "), a.textContent !== c && (m(b.removed, {
                        element: a.cloneNode()
                    }), a.textContent = c));
                    $("afterSanitizeElements", a, null);
                    return !1
                },
                ob = function(a, b, c) {
                    if (Va && (b === "id" || b === "name") && (c in d || c in bb)) return !1;
                    if (!(Qa && p(Ha, b)))
                        if (!(Pa && p(Ia, b)))
                            if (!N[b] || Oa[b]) return !1;
                            else if (!$a[b])
                        if (!p(L, o(c, Ka, "")))
                            if (!((b === "src" || b === "xlink:href" || b === "href") && a !== "script" && da(c, "data:") === 0 && Ya[a]))
                                if (!(Ra && !p(Ja, o(c, Ka, ""))))
                                    if (!!c) return !1;
                    return !0
                },
                pb = function(a) {
                    var c, d = void 0,
                        e = void 0,
                        f = void 0;
                    $("beforeSanitizeAttributes", a, null);
                    var g = a.attributes;
                    if (!g) return;
                    var h = {
                        attrName: "",
                        attrValue: "",
                        keepAttr: !0,
                        allowedAttributes: N
                    };
                    f = g.length;
                    while (f--) {
                        c = g[f];
                        var i = c,
                            j = i.name;
                        i = i.namespaceURI;
                        d = ea(c.value);
                        e = n(j);
                        h.attrName = e;
                        h.attrValue = d;
                        h.keepAttr = !0;
                        h.forceKeepAttr = void 0;
                        $("uponSanitizeAttribute", a, h);
                        d = h.attrValue;
                        if (h.forceKeepAttr) continue;
                        jb(j, a);
                        if (!h.keepAttr) continue;
                        if (p(/\/>/i, d)) {
                            jb(j, a);
                            continue
                        }
                        O && (d = o(d, J, " "), d = o(d, K, " "));
                        c = a.nodeName.toLowerCase();
                        if (!ob(c, e, d)) continue;
                        try {
                            i ? a.setAttributeNS(i, j, d) : a.setAttribute(j, d), ba(b.removed)
                        } catch (a) {}
                    }
                    $("afterSanitizeAttributes", a, null)
                },
                qb = function a(b) {
                    var c = void 0,
                        d = lb(b);
                    $("beforeSanitizeShadowDOM", b, null);
                    while (c = d.nextNode()) {
                        $("uponSanitizeShadowNode", c, null);
                        if (nb(c)) continue;
                        c.content instanceof e && a(c.content);
                        pb(c)
                    }
                    $("afterSanitizeShadowDOM", b, null)
                };
            b.sanitize = function(d, f) {
                var g = void 0,
                    i = void 0,
                    j = void 0,
                    k = void 0;
                d || (d = "<!-->");
                if (typeof d !== "string" && !Z(d))
                    if (typeof d.toString !== "function") throw fa("toString is not a function");
                    else {
                        d = d.toString();
                        if (typeof d !== "string") throw fa("dirty is not a string, aborting")
                    }
                if (!b.isSupported) {
                    if (A(a.toStaticHTML) === "object" || typeof a.toStaticHTML === "function") {
                        if (typeof d === "string") return a.toStaticHTML(d);
                        if (Z(d)) return a.toStaticHTML(d.outerHTML)
                    }
                    return d
                }
                Sa || cb(f);
                b.removed = [];
                typeof d === "string" && (T = !1);
                if (!T)
                    if (d instanceof h) g = kb("<!---->"), f = g.ownerDocument.importNode(d, !0), f.nodeType === 1 && f.nodeName === "BODY" ? g = f : f.nodeName === "HTML" ? g = f : g.appendChild(f);
                    else {
                        if (!Q && !O && !P && d.indexOf("<") === -1) return F && S ? F.createHTML(d) : d;
                        g = kb(d);
                        if (!g) return Q ? null : Ba
                    }
                g && Ta && Y(g.firstChild);
                f = lb(T ? d : g);
                while (i = f.nextNode()) {
                    if (i.nodeType === 3 && i === j) continue;
                    if (nb(i)) continue;
                    i.content instanceof e && qb(i.content);
                    pb(i);
                    j = i
                }
                j = null;
                if (T) return d;
                if (Q) {
                    if (R) {
                        k = Ea.call(g.ownerDocument);
                        while (g.firstChild) k.appendChild(g.firstChild)
                    } else k = g;
                    Ua && (k = Fa.call(c, k, !0));
                    return k
                }
                i = P ? g.outerHTML : g.innerHTML;
                O && (i = o(i, J, " "), i = o(i, K, " "));
                return F && S ? F.createHTML(i) : i
            };
            b.setConfig = function(a) {
                cb(a), Sa = !0
            };
            b.clearConfig = function() {
                V = null, Sa = !1
            };
            b.isValidAttribute = function(a, b, c) {
                V || cb({});
                a = n(a);
                b = n(b);
                return ob(a, b, c)
            };
            b.addHook = function(a, b) {
                if (typeof b !== "function") return;
                I[a] = I[a] || [];
                m(I[a], b)
            };
            b.removeHook = function(a) {
                I[a] && ba(I[a])
            };
            b.removeHooks = function(a) {
                I[a] && (I[a] = [])
            };
            b.removeAllHooks = function() {
                I = {}
            };
            return b
        }
        j = va();
        return j
    })
}), null);
__d("TrustedTypes", ["DOMPurify", "FBLogger", "TrustedTypeUtils", "TrustedTypesConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    if (typeof trustedTypes !== "undefined" && c("TrustedTypesConfig").useTrustedTypes) {
        var h = function(a, b) {
                c("FBLogger")("sec_infra").warn("[Trusted-Types]: String '%s' is flowing to DOM XSS sink. Default Trusted Type policy was executed and removed dangerous elements. Returned string is: '%s'. If this is breaking your feature, post in Security Infra group.", a.toString().slice(0, 15), b.toString().slice(0, 15))
            },
            i = trustedTypes;
        a = babelHelpers["extends"]({}, i, {
            createPolicy: function(a, b) {
                a = i.createPolicy(a, b);
                return {
                    createHTML: d("TrustedTypeUtils").createTrustedType(i.isHTML.bind(i), a.createHTML.bind(a)),
                    createScript: d("TrustedTypeUtils").createTrustedType(i.isScript.bind(i), a.createScript.bind(a)),
                    createScriptURL: d("TrustedTypeUtils").createTrustedType(i.isScriptURL.bind(i), a.createScriptURL.bind(a))
                }
            }
        });
        var j = c("DOMPurify")(window);
        i.createPolicy("default", {
            createHTML: function(a, b) {
                b = j.sanitize(a, {
                    RETURN_TRUSTED_TYPE: !0
                });
                if (a == b) return a;
                h(a, b);
                return c("TrustedTypesConfig").reportOnly ? a : b
            }
        });
        b = a
    } else {
        var k = function(a) {
            return a
        };
        e = {
            isHTML: function() {
                return !1
            },
            isScriptURL: function() {
                return !1
            },
            isScript: function() {
                return !1
            },
            createPolicy: function(a, b) {
                return {
                    createHTML: k,
                    createScriptURL: k,
                    createScript: k
                }
            }
        };
        b = e
    }
    f = b;
    g["default"] = f
}), 98);
__d("createTrustedFunction", ["TrustedTypes", "TrustedTypesConfig", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "unsafe-function",
        i, j = {
            createScript: function(a) {
                var b = trustedTypes;
                for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
                e.forEach(function(a) {
                    if (!b.isScript(a)) throw c("err")("Trusted Function requires TrustedScripts args only.")
                });
                var g = e.slice(0, -1).join(","),
                    h = e.pop().toString(),
                    i = "(function anonymous(\n    " + g + "\n    ) {\n    " + h + "\n    })";
                return i
            }
        };

    function k() {
        if (i) return;
        i = c("TrustedTypes").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function b() {
        for (var b = arguments.length, d = new Array(b), e = 0; e < b; e++) d[e] = arguments[e];
        if (typeof trustedTypes !== "undefined" && c("TrustedTypesConfig").useTrustedTypes) {
            var f;
            return a.eval((f = l()).createScript.apply(f, [""].concat(d)))
        } else return babelHelpers.construct(Function, d)
    }
    g["default"] = b
}), 98);
__d("createTrustedScriptWithoutValidation_DO_NOT_USE", ["TrustedTypesWithNoDefaultPolicies"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(a) {
        return a
    };
    var h = "ls-script",
        i, j = {
            createScript: function(a) {
                return a
            },
            createScriptURL: b,
            createHTML: b
        };

    function k() {
        if (i) return;
        i = c("TrustedTypesWithNoDefaultPolicies").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createScript(a)
    }
    g["default"] = a
}), 98);
__d("fastDeepCopy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return typeof a === "object" && a !== null ? g(a) : a
    }

    function g(a) {
        var b = typeof a.constructor === "function" ? a.constructor() : {};
        if (Array.isArray(a))
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                b[c] = typeof d === "object" && d !== null ? g(d) : d
            } else
                for (var d in a) {
                    c = a[d];
                    b[d] = typeof c === "object" && c !== null ? g(c) : c
                }
        return b
    }
    f["default"] = a
}), 66);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};

    function i(a, b) {
        h[a] = b
    }

    function j(a) {
        return h[a]
    }

    function a(a) {
        var b = j(a);
        if (b) return b;
        b = new(c("RequireDeferredReference"))(a);
        i(a, b);
        return b
    }
    g["default"] = a
}), 98);
__d("BigPipe", ["$", "Arbiter", "BigPipeExperiments", "BigPipeInstance", "BigPipePlugins", "Bootloader", "ErrorUtils", "FBLogger", "HasteResponse", "JSCC", "PageEvents", "PageletEventConstsJS", "PageletSet", "RunBlue", "ServerJS", "TimeSlice", "UserTimingUtils", "captureUsageSnapshot", "clearTimeout", "createTrustedFunction", "createTrustedScriptWithoutValidation_DO_NOT_USE", "fastDeepCopy", "ge", "gkx", "performanceAbsoluteNow", "requireDeferred", "setTimeout"], (function(a, b, c, d, e, f, g) {
    a.__bigPipeFactory = c("performanceAbsoluteNow")();
    var h = document.documentMode || +(/MSIE.(\d+)/.exec(navigator.userAgent) || [])[1],
        i = console.timeStamp && window.location.search.indexOf("pagelet_ts=1") > 0;

    function j(a, b) {
        d("UserTimingUtils").measureStart(a + " " + b)
    }

    function k(a, b, c) {
        d("UserTimingUtils").measureEnd("\u26cf " + a + " [" + b + "][phase " + c + "]", a + " " + b)
    }

    function l(a, b) {
        if (a)
            for (var d = 0; d < a.length; d++) c("ErrorUtils").applyWithGuard(c("createTrustedFunction")(c("createTrustedScriptWithoutValidation_DO_NOT_USE")(a[d])), b)
    }
    var m = 1;
    b = function() {
        function a(b) {
            var e = this;
            this._onDisplayDone = function(a) {
                e.arbiter.registerCallback(a, ["display_done"])
            };
            Object.assign(this, {
                arbiter: c("Arbiter"),
                rootNodeID: "content",
                lid: null,
                isAjax: !1,
                domContentCallback: d("RunBlue").__domContentCallback,
                onloadCallback: d("RunBlue").__onloadCallback,
                domContentEvt: c("PageEvents").BIGPIPE_DOMREADY,
                onloadEvt: c("PageEvents").BIGPIPE_ONLOAD,
                forceFinish: !1,
                config: {},
                _currentPhase: 0,
                _lastPhaseOfLastResponse: -1,
                _lastPhaseBeforeLastResponse: -1,
                _livePagelets: {},
                _phases: {},
                _orderedPhases: [],
                _maxPhase: 0,
                _displayDoneFired: !1,
                _displayDone: !1,
                _awaitingLIDEventQueue: []
            }, b);
            this.config || (this.config = {});
            this.automatic ? this._relevant_instance = d("BigPipeInstance").getCurrentInstance() : d("BigPipeInstance").setCurrentInstance_DO_NOT_USE(this);
            this._serverJS = new(c("ServerJS"))();
            this._informEventExternal(a.Events.init, {
                arbiter: this.arbiter
            }, c("Arbiter"));
            this._displayDoneCallback = this.arbiter.registerCallback(function() {
                var b = c("captureUsageSnapshot")();
                e._informEventExternal(a.Events.displayed, {
                    rid: e.rid,
                    ajax: e.isAjax,
                    usageSnapshot: b
                })
            }, ["display_done"]);
            b = ["pagelet_displayed_all"];
            this.config.extra_dom_content_event != null && b.push(this.config.extra_dom_content_event);
            this.arbiter.registerCallback(this.domContentCallback, b);
            this._beginPhase(0);
            this.arbiter.registerCallback(this.onloadCallback, ["bigpipe_e2e_reported"]);
            this._loadedCallback = this.arbiter.registerCallback(function() {
                e._informEventExternal(a.Events.loaded, {
                    rid: e.rid,
                    ajax: e.isAjax
                }), e.arbiter.inform("bigpipe_e2e_reported", !0)
            }, ["pagelet_displayed_all"]);
            this.arbiter.registerCallback(function() {
                return e._serverJS.cleanup(c("TimeSlice"))
            }, [this.onloadEvt, "bigpipe_e2e_reported"])
        }
        var b = a.prototype;
        b._beginPhase = function(a) {
            var b = this._getOrCreatePhase(a);
            b.begun = !0;
            this._informEventExternal("phase_begin", {
                phase: a
            });
            this.arbiter.inform("phase_begin_" + a, !0, "state")
        };
        b._getOrCreatePhase = function(a) {
            if (this._phases[a]) return this._phases[a];
            var b = {
                pagelets: [],
                begun: !1,
                complete: !1
            };
            this._phases[a] = b;
            var c = 0;
            while (c < this._orderedPhases.length) {
                if (a < this._orderedPhases[c]) break;
                c++
            }
            this._orderedPhases.splice(c, 0, a);
            return b
        };
        b._tryRenderingNextPhase = function() {
            var a = this._phases[this._currentPhase];
            if (a && a.begun && !a.complete) return;
            for (var a = this._orderedPhases, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                var e = this._phases[d];
                if (e.begun)
                    if (e.complete) continue;
                    else return;
                else {
                    this._currentPhase = d;
                    this._beginPhase(d);
                    return
                }
            }
        };
        b._displayPageletHandler = function(a) {
            this.displayCallback ? this.displayCallback(this._displayPagelet.bind(this, a)) : this._displayPagelet(a)
        };
        b._displayPagelet = function(a) {
            j(a.id, "display");
            a.displayStarted = !0;
            this._informPageletEvent(c("PageletEventConstsJS").DISPLAY_START, a);
            var b = this._getPagelet(a),
                d = [],
                e = {};
            for (var f in a.content) {
                var g = a.content[f];
                a.append && (f = this._getPageletRootID(a));
                var h = c("ge")(f);
                if (!h || f == null) {
                    var i = "Root element %s is missing for pagelet %s";
                    continue
                }
                f === b.id && b.setRoot(h);
                if (g) {
                    if (a.append) p(h, g, d);
                    else if (g.nodeType) h.innerHTML = "", p(h, g, d);
                    else {
                        i = n(g);
                        h.innerHTML = i;
                        e[f] = i;
                        d.push(h)
                    }
                    c("BigPipeExperiments").enable_bigpipe_plugins && c("BigPipePlugins").runPluginOnPagelet(h)
                }
                g = h.getAttribute("data-referrer");
                g || h.setAttribute("data-referrer", f)
            }
            i = null;
            if (a.static_templates) {
                g = c("ge")("static_templates");
                g && (i = n(a.static_templates), a.replace_static_templates_if_exists && (i = q(g, i, d)), p(g, i, d))
            }
            this._informPageletDisplayDetails(a.id, a.jsmods, e, i);
            a.displayed = !0;
            if (a.jsmods) {
                h = this._serverJS.handlePartial(a.jsmods, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone
                    }
                });
                b.addDestructor(h.cancel.bind(h))
            }
            var l = [];
            d.forEach(function(a) {
                if (typeof a.getElementsByTagName === "function") {
                    a = a.getElementsByTagName("img");
                    for (var b = 0; b < a.length; b++) l.push(a[b].src)
                }
            });
            l.length > 0 && this._informEventExternal("images_displayed", {
                pagelet: a.id,
                timeslice: c("TimeSlice").getContext() ? c("TimeSlice").getContext().contextID : null,
                images: l
            });
            if (c("gkx")("676920")) {
                var m = c("performanceAbsoluteNow")();
                c("requireDeferred")("VisualCompletionGating").__setRef("BigPipe").onReady(function(b) {
                    b && b.addElements(a.id, d, m)
                })
            }
            this._informPageletEvent(c("PageletEventConstsJS").DISPLAY_END, a);
            k(a.id, "display", a.phase);
            this.arbiter.inform(a.id + "_displayed", !0, "state")
        };
        b._onPhaseDisplayEnd = function(b) {
            var d = this._getOrCreatePhase(b);
            d.complete = !0;
            if (b === this._ttiPhase) {
                d = {};
                var e = c("captureUsageSnapshot")();
                this._informEventExternal(a.Events.tti, {
                    phase: this._ttiPhase,
                    rid: this.rid,
                    ajax: this.isAjax,
                    metrics: d,
                    usageSnapshot: e
                });
                this.arbiter.inform("tti_pagelet_displayed", !0, "state")
            }
            this._isRelevant() && (b === this._lastPhaseBeforeLastResponse && this._fireDisplayDone(function() {}), b === this._lastPhaseOfLastResponse && (this._displayDoneFired || this._fireDisplayDone(function() {}), this.arbiter.inform("pagelet_displayed_all", !0, "state")));
            b !== this._lastPhaseOfLastResponse && this._nextPhase()
        };
        b._nextPhase = function() {
            this.config.flush_pagelets_asap ? h <= 8 ? c("setTimeout")(this._tryRenderingNextPhase.bind(this), 20) : this._tryRenderingNextPhase() : (this._currentPhase++, h <= 8 ? c("setTimeout")(this._beginPhase.bind(this, this._currentPhase), 20) : this._beginPhase(this._currentPhase))
        };
        b._fireDisplayDone = function(a) {
            this._displayDoneFired = !0, this.arbiter.inform("display_done", !0), this._displayDone = !0, a(), this.lid != null && k("display_done", this.lid, "all")
        };
        b._downloadJsForPagelet = function(a) {
            var b = this;
            this._informPageletEvent(c("PageletEventConstsJS").JS_START, a);
            c("Bootloader").loadResources(a.allResources || [], {
                onAll: function() {
                    b._informPageletEvent(c("PageletEventConstsJS").JS_END, a);
                    a.requires = a.requires || [];
                    (!b.isAjax || a.phase >= 1) && a.requires.push("uipage_onload");
                    var d = function() {
                            b._informPageletEvent(c("PageletEventConstsJS").ONLOAD_START, a), b._isRelevantPagelet(a) && l(a.onload), b._informPageletEvent(c("PageletEventConstsJS").ONLOAD_END, a), b.arbiter.inform("pagelet_onload", !0), a.provides && b.arbiter.inform(a.provides, !0, "state")
                        },
                        e = function() {
                            b._isRelevantPagelet(a) && l(a.onafterload)
                        };
                    b.arbiter.registerCallback(d, a.requires);
                    b.arbiter.registerCallback(e, [b.onloadEvt])
                }
            }, a.id)
        };
        b._getPagelet = function(a) {
            a = this._getPageletRootID(a);
            return d("PageletSet").getPagelet(a)
        };
        b._getPageletRootID = function(a) {
            return a.append || Object.keys(a.content)[0] || null
        };
        b._isRelevant = function() {
            var a = d("BigPipeInstance").getCurrentInstance();
            return this == a || this.automatic && this._relevant_instance == a || this.jsNonBlock || this.forceFinish || a && a.allowIrrelevantRequests
        };
        b._isRelevantPagelet = function(a) {
            if (!this._isRelevant()) return !1;
            a = this._getPageletRootID(a);
            return !!this._livePagelets[a]
        };
        b._informEventExternal = function(a, b, d) {
            b = b || {}, d = d || this.arbiter, b.ts || (b.ts = c("performanceAbsoluteNow")()), i && (console.timeStamp && console.timeStamp(a + " " + (Object.prototype.hasOwnProperty.call(b, "arbiter") ? JSON.stringify(babelHelpers["extends"]({}, b, {
                arbiter: null
            })) : JSON.stringify(b)))), this.lid === null ? this._awaitingLIDEventQueue.push([d, a, b]) : (b.lid = this.lid, d.inform(a, b, "persistent"))
        };
        b._informPageletEvent = function(a, b, c) {
            a = {
                event: a,
                id: b.id,
                ts: c
            };
            b.phase && (a.phase = b.phase);
            b.categories && (a.categories = b.categories);
            b.allResources && (a.allResources = b.allResources);
            b.displayResources && (a.displayResources = b.displayResources);
            this._informEventExternal("pagelet_event", a)
        };
        b._informPageletDisplayDetails = function(a, b, d, e) {
            if (this.config.dispatch_pagelet_replayable_actions) try {
                this._informEventExternal("pagelet_performing_replayable_actions", {
                    id: a,
                    jsmods: c("fastDeepCopy")(b),
                    contentMap: d,
                    staticTemplates: e
                })
            } catch (a) {
                c("FBLogger")("bigpipe_pagelet_replay").catching(a).warn("failed at _informPageletDisplayDetails"), this._informEventExternal("pagelet_performing_replayable_actions_failed", {})
            }
        };
        a.getCurrentInstance = function() {
            return d("BigPipeInstance").getCurrentInstance()
        };
        return a
    }();
    Object.assign(b.prototype, {
        beforePageletArrive: function(a, b) {
            var d = this;
            c("TimeSlice").guard(function() {
                return d._informPageletEvent(c("PageletEventConstsJS").ARRIVE_START, {
                    id: a
                }, b)
            }, "beforePageletArrive " + a, {
                root: !0
            })()
        },
        setPageID: function(a) {
            this.lid = a, this._awaitingLIDEventQueue.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                b.lid = a;
                c.inform(d, b, "persistent")
            }), this._awaitingLIDEventQueue = [], this.lid && j("display_done", this.lid)
        },
        onPageletArrive: c("ErrorUtils").guard(function(a) {
            var b, e = this;
            this._informPageletEvent(c("PageletEventConstsJS").ARRIVE_END, a);
            d("HasteResponse").handleSRPayload((b = a.hsrp) != null ? b : {});
            a.content = a.content || {};
            var f = a.phase;
            if (a.all_phases)
                for (var b = a.all_phases, g = Array.isArray(b), h = 0, b = g ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (g) {
                        if (h >= b.length) break;
                        i = b[h++]
                    } else {
                        h = b.next();
                        if (h.done) break;
                        i = h.value
                    }
                    i = i;
                    this._getOrCreatePhase(i)
                }
            i = this._getOrCreatePhase(f);
            i.pagelets.push(a.id);
            this._maxPhase = Math.max(f, this._maxPhase);
            a.last_in_phase && this.arbiter.registerCallback(function() {
                return e._onPhaseDisplayEnd(f)
            }, i.pagelets.map(function(a) {
                return a + "_displayed"
            }).concat(["phase_begin_" + f]));
            h = this._getPageletRootID(a);
            var j = d("PageletSet").getOrCreatePagelet(h);
            a.last_pagelet && (this._lastPhaseBeforeLastResponse = this._maxPhase);
            a.the_end && (this._lastPhaseOfLastResponse = f);
            a.tti_phase !== void 0 && (this._ttiPhase = a.tti_phase);
            this._livePagelets[j.id] = !0;
            j.addDestructor(function() {
                delete e._livePagelets[j.id]
            });
            if (a.jscc_map != null && a.jscc_map !== "") {
                g = d("JSCC").parse(a.jscc_map);
                b = d("JSCC").init(g);
                j.addDestructor(b)
            }
            var k, l = [];
            if (a.jsmods) {
                i = a.jsmods.define;
                h = a.jsmods.instances;
                g = a.jsmods.markup;
                b = a.jsmods.pre_display_requires;
                delete a.jsmods.define;
                delete a.jsmods.instances;
                delete a.jsmods.markup;
                delete a.jsmods.pre_display_requires;
                var n = 19e3;
                n = function() {
                    if (a.displayStarted === !0) {
                        c("FBLogger")("BigPipe").warn("registerToBlockDisplayUntilDone_DONOTUSE called after pagelet %s was displayed. This is a no-op.", a.id);
                        return function() {}
                    }
                    var b, d, f = m + "_preDisplayEvent";
                    m++;
                    k ? e.arbiter.registerCallback(k, [f]) : l.push(f);
                    return c("TimeSlice").guard(function() {
                        d = !0, c("clearTimeout")(b), e.arbiter.inform(f, !0, "state")
                    }, "BigPipeDisplayBlockingEvent " + f, {
                        propagationType: c("TimeSlice").PropagationType.EXECUTION
                    })
                };
                this._informPageletDisplayDetails(a.id, {
                    define: i,
                    instances: h,
                    markup: g,
                    pre_display_requires: b
                }, {});
                this._serverJS.handlePartial({
                    define: i,
                    instances: h,
                    markup: g,
                    pre_display_requires: b
                }, {
                    pagelet: a.id,
                    bigPipeContext: {
                        onDisplayDone: this._onDisplayDone,
                        registerToBlockDisplayUntilDone_DONOTUSE: n
                    }
                })
            }
            this.arbiter.registerCallback(this._loadedCallback, ["pagelet_onload"]);
            this._informPageletEvent(c("PageletEventConstsJS").SETUP, a);
            if (a.display_out_of_phase === "asap") l = l.concat(["first_response_displayed", a.id + "_css_end"]);
            else if (a.display_out_of_phase === "after_tti") {
                var o = a.id + "_greedy_render";
                l = l.concat(["first_response_displayed", a.id + "_css_end", o]);
                var p = !1;
                i = function() {
                    if (p) return;
                    e.arbiter.inform(o, !0, "state")
                };
                this.arbiter.registerCallback(i, ["tti_pagelet_displayed"]);
                this.arbiter.registerCallback(i, ["phase_begin_" + f])
            } else l = l.concat(["phase_begin_" + a.phase, a.id + "_css_end"]);
            (a.display_dependency || []).forEach(function(a) {
                return l.push(a + "_displayed")
            });
            if (a.display_group) {
                h = document.body.getElementsByClassName("pagelet-group");
                for (var g = 0; g < h.length; g++) {
                    b = h[g];
                    if (b.id === a.id) break;
                    b.getAttribute("data-display-group") === a.display_group && l.push(b.id + "_displayed")
                }
            }
            k = this.arbiter.registerCallback(function() {
                a.display_delay_ms === void 0 ? e._displayPageletHandler(a) : c("setTimeout")(function() {
                    return e._displayPageletHandler(a)
                }, a.display_delay_ms)
            }, l);
            var q = !1;
            n = function() {
                if (q) return;
                q = !0;
                e._informPageletEvent(c("PageletEventConstsJS").CSS_START, a);
                var b = a.displayResources || [];
                c("Bootloader").loadResources(b, {
                    onAll: function() {
                        e._informPageletEvent(c("PageletEventConstsJS").CSS_END, a), e.arbiter.inform(a.id + "_css_end", !0, "state")
                    }
                }, a.id)
            };
            this.config.flush_pagelets_asap ? n() : this.arbiter.registerCallback(n, ["phase_begin_" + f]);
            i = [a.id + "_displayed"];
            this.jsNonBlock || i.push(this.domContentEvt);
            this.arbiter.registerCallback(this._downloadJsForPagelet.bind(this, a), i)
        }, "BigPipe#onPageletArrive")
    });
    b.Events = d("BigPipeInstance").Events;

    function n(a) {
        if (!a || typeof a === "string") return a;
        if (a.container_id) {
            var b = c("$")(a.container_id);
            a = o(b) || "";
            b.parentNode.removeChild(b);
            return a
        }
        a.nodeType;
        return null
    }

    function o(a) {
        if (!a.firstChild) return null;
        if (a.firstChild.nodeType !== 8) return null;
        a = a.firstChild.nodeValue;
        a = a.substring(1, a.length - 1);
        return a.replace(/\\([\s\S]|$)/g, "$1")
    }

    function p(a, b, c) {
        b = r(b);
        for (var d = 0; d < b.childNodes.length; d++) c.push(b.childNodes[d]);
        a.appendChild(b)
    }

    function q(a, b, c) {
        b = r(b);
        var d = document.createDocumentFragment(),
            e = b.childNodes.length;
        for (var f = 0; f < e; f++) {
            var g = b.firstChild,
                h = g.id && document.getElementById(g.id),
                i = h && h.parentNode;
            i === a ? (i.replaceChild(g, h), c.push(g)) : d.appendChild(g)
        }
        return d
    }

    function r(a) {
        if (a.nodeType) return a;
        var b = document.createDocumentFragment();
        a = n(a);
        if (a) {
            var c = document.createElement("div");
            c.innerHTML = a;
            while (c.firstChild) b.appendChild(c.firstChild)
        }
        return b
    }
    e = b;
    g["default"] = e
}), 98);
__d("DefaultTrustedTypePolicies", ["Env", "URI", "err", "isCdnURI", "isFacebookDotNetURI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        if (c("Env").enableDefaultTrustedTypePolicy === !1) return;
        if (typeof trustedTypes !== "undefined") {
            var a = trustedTypes;
            a.createPolicy("default", {
                createScriptURL: function(a, b) {
                    b = c("URI").tryParseURI(a);
                    if (b != null && (c("isFacebookURI")(b) || c("isCdnURI")(b) || c("isFacebookDotNetURI")(b))) return a;
                    throw c("err")("Violating Trusted Type policies, non-fb URI:" + a)
                }
            })
        }
    }
    g.setDefaultPolicy = a
}), 98);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.sessionID = c("AdsInterfacesSessionConfig").sessionID
}), 98);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("EventConfig").sampling || {},
        h = {
            canSample: function(a) {
                return !!g[a]
            },
            getEventSampleWeights: function(a) {
                a.__samplingWeights == void 0 && (a.__samplingWeights = {
                    event: i(h.getEventWeight(a))
                });
                return a.__samplingWeights
            },
            getEventWeight: function(a) {
                a = a.type in g ? g[a.type] : 1;
                return a * g.__eventDefault
            },
            getEventInteractionIDs: function(a, b) {
                return []
            }
        };

    function i(a) {
        if (a === 0) return 0;
        var b = g.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = h
}), null);
__d("SubscriptionList", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this,
                d = {
                    callback: a
                };
            this.$1.push(d);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = b.$1.indexOf(d);
                    if (a === -1) {
                        c("recoverableViolation")("SubscriptionList: Callback already removed.", "SubscriptionList");
                        return
                    }
                    b.$1.splice(a, 1);
                    b.$3 && b.$1.length === 0 && b.$3()
                }
            }
        };
        b.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        b.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    f["default"] = a
}), 66);
__d("ScriptPath", ["ErrorGuard", "SubscriptionList", "TimeSlice", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = "sp_pi",
        j = 1e3 * 30,
        k = null,
        l = null,
        m = new(b("SubscriptionList"))(),
        n = null,
        o = [],
        p = b("TimeSlice").guard(function(a, c) {
            m.getCallbacks().forEach(function(d) {
                (g || (g = b("ErrorGuard"))).applyWithGuard(function() {
                    d({
                        source: k,
                        dest: l,
                        cause: a,
                        extraData: c
                    })
                }, null, [])
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function q() {
        return l ? l.scriptPath : void 0
    }

    function r() {
        var a = (h || (h = b("WebStorage"))).getSessionStorage();
        if (!a || b("isInIframe")()) return;
        h.setItemGuarded(a, i, JSON.stringify({
            pageInfo: l,
            clickPoint: n,
            time: Date.now()
        }))
    }

    function a() {
        var a = (h || (h = b("WebStorage"))).getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(i);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - j && (a = (h || (h = b("WebStorage"))).getSessionStorage(), a && a.removeItem(i)), l = c.pageInfo, n = c.clickPoint, l && (l.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            k = l, l = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, o = [], window._script_path = a, p()
        },
        openOverlayView: function(a, b, c) {
            if (!a) return;
            var d = o.length;
            (d === 0 || o[d - 1] !== a) && (k = Object.assign({}, l), l && (l.topViewEndpoint = a), c && c.replaceTopOverlay && d > 0 ? (o[d - 1] = a, p("replace_overlay_view", b)) : (o.push(a), p("open_overlay_view", b)))
        },
        closeOverlayView: function(a, b) {
            a = o.lastIndexOf(a);
            if (a === -1) return;
            k = Object.assign({}, l);
            l && (a > 0 ? l.topViewEndpoint = o[a - 1] : l.topViewEndpoint = null);
            o = o.slice(0, a);
            p("close_overlay_view", b)
        },
        setClickPointInfo: function(a) {
            n = a, r()
        },
        getClickPointInfo: function() {
            return n
        },
        getScriptPath: q,
        getCategoryToken: function() {
            return l ? l.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = l) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = o.length;
            return a > 0 ? o[a - 1] : q()
        },
        getPageInfo: function() {
            return l
        },
        getSourcePageInfo: function() {
            return k
        },
        subscribe: function(a) {
            return m.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            r()
        }
    };
    e.exports = c
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = /\./,
        j = /\|\|/,
        k = /\s+\-\s+/,
        l = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        m = /^(\d*)(.*)/;

    function n(a, b) {
        a = a.split(j);
        if (a.length > 1) return a.some(function(a) {
            return E.contains(a, b)
        });
        else return o(a[0].trim(), b)
    }

    function o(a, b) {
        a = a.split(k);
        a.length > 0 && a.length <= 2 || h(0, 11800);
        if (a.length === 1) return p(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            y(c) && y(a) || h(0, 11801);
            return p(">=" + c, b) && p("<=" + a, b)
        }
    }

    function p(a, b) {
        a = a.trim();
        if (a === "") return !0;
        b = b.split(i);
        a = w(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return q(b, a);
            case "<=":
                return r(b, a);
            case ">=":
                return t(b, a);
            case ">":
                return u(b, a);
            case "~":
            case "~>":
                return v(b, a);
            default:
                return s(b, a)
        }
    }

    function q(a, b) {
        return D(a, b) === -1
    }

    function r(a, b) {
        a = D(a, b);
        return a === -1 || a === 0
    }

    function s(a, b) {
        return D(a, b) === 0
    }

    function t(a, b) {
        a = D(a, b);
        return a === 1 || a === 0
    }

    function u(a, b) {
        return D(a, b) === 1
    }

    function v(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        x(e) && (b[d] = e + 1 + "");
        return t(a, c) && q(a, b)
    }

    function w(a) {
        a = a.split(i);
        var b = a[0].match(l);
        b || h(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function x(a) {
        return !isNaN(a) && isFinite(a)
    }

    function y(a) {
        return !w(a).modifier
    }

    function z(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function A(a, b) {
        a = a.slice();
        b = b.slice();
        z(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        z(b, a.length);
        return [a, b]
    }

    function B(a, b) {
        var c = a.match(m),
            d = b.match(m);
        c = c && c[1];
        d = d && d[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (x(c) && x(d) && c !== d) return C(c, d);
        else return C(a, b)
    }

    function C(a, b) {
        typeof a === typeof b || h(0, 11802);
        if (typeof a === "string" && typeof b === "string")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        if (typeof a === "number" && typeof b === "number")
            if (a > b) return 1;
            else if (a < b) return -1;
        else return 0;
        typeof a === typeof b || h(0, 11802);
        return 0
    }

    function D(a, b) {
        a = A(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = B(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var E = {
        contains: function(a, b) {
            return n(a.trim(), b.trim())
        }
    };
    a = E;
    g["default"] = a
}), 98);
__d("UserAgent", ["UserAgentData", "VersionRange", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d, e) {
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (b != null) {
            d = e ? e(d) : d;
            return c("VersionRange").contains(d, b)
        }
        return !1
    }

    function i(a) {
        return c("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").browserName, c("UserAgentData").browserFullVersion, a)
        }),
        isBrowserArchitecture: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").browserArchitecture, null, a)
        }),
        isDevice: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").deviceName, null, a)
        }),
        isEngine: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").engineName, c("UserAgentData").engineVersion, a)
        }),
        isPlatform: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").platformName, c("UserAgentData").platformFullVersion, a, i)
        }),
        isPlatformArchitecture: c("memoizeStringOnly")(function(a) {
            return h(c("UserAgentData").platformArchitecture, null, a)
        })
    };
    b = a;
    g["default"] = b
}), 98);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    f["default"] = a
}), 66);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(i(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    g["default"] = a
}), 98);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    c = b;
    f["default"] = c
}), 66);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame", "performanceNow"], (function(a, b, c, d, e, f, g) {
    var h = 0;
    b = c("nativeRequestAnimationFrame") || function(b) {
        var d = c("performanceNow")(),
            e = Math.max(0, 16 - (d - h));
        h = d + e;
        return a.setTimeout(function() {
            b(c("performanceNow")())
        }, e)
    };
    d = b;
    g["default"] = d
}), 98);
__d("requestAnimationFrameAcrossTransitions", ["TimeSlice", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a = c("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION
        });
        return c("requestAnimationFramePolyfill")(a)
    }
    g["default"] = a
}), 98);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a(a) {
        a === void 0 && (a = g);
        return a + (i++).toString(h)
    }
    f["default"] = a
}), 66);
__d("EventProfilerImpl", ["Bootloader", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerSampler", "ScriptPath", "TimeSlice", "UserAgent", "getParentClassesForEventProfiler", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {},
        j = {},
        k = !1,
        l = 0,
        m = new Set(["click", "keydown", "mousewheel", "scroll"]),
        n = null,
        o = null;
    c = {
        __wrapEventListenHandler: function(a) {
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f = {
                        event: 0
                    },
                    s = (g || (g = b("performanceAbsoluteNow")))();
                d.id = d.id || b("uniqueID")();
                var t = d.id,
                    u, v = j[t],
                    w = null;
                i[t] === void 0 && !v ? (w = b("getParentClassesForEventProfiler")(d.target), f = r(d), o != null && o.beforeHandlers(t, c), u = a.call(this, c, d), j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")) : (f = r(d), u = v(function() {
                    j[t] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                }));
                v = g();
                if (i[t] === void 0) {
                    w = w;
                    var x = q(d);
                    x = x || s;
                    var y = Math.max(s - x, 0),
                        z = null;
                    b("UserAgent").isBrowser("Chrome") && (z = !!d.cancelable);
                    var A = z && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    i[t] = {
                        event_name: c,
                        event_start_ms: Math.round(x),
                        main_thread_wait_ms: Math.round(y),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    h[t] = {
                        event_target_raw: w,
                        weight: f.event,
                        cancelable: !!z,
                        deliberate_sync: !!A,
                        ad_account_id: n,
                        event_end_ms: 0
                    };
                    y = b("EventProfilerAdsSessionProvider").sessionID;
                    y && (h[t].ads_session_id = y);
                    var B = !1;
                    m.has(c) && (!k && l < x && (k = !0, B = !0), h[t].is_first_in_frame = B, h[t].is_first_overlapping = B);
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        var a = (g || (g = b("performanceAbsoluteNow")))();
                        i[t].request_animation_frame_wait_ms = Math.round(a - h[t].event_end_ms);
                        delete h[t].event_end_ms;
                        var d = !1;

                        function e() {
                            if (d) return;
                            d = !0;
                            var e = (g || (g = b("performanceAbsoluteNow")))();
                            i[t].set_timeout_wait_ms = Math.round(e - a);
                            p(t, s, e);
                            m.has(c) && B && (k = !1, l = e);
                            e = j[t];
                            e && delete j[t];
                            delete i[t];
                            delete h[t]
                        }
                        b("requestAnimationFrameAcrossTransitions")(e);
                        b("setTimeoutAcrossTransitions")(e, 0)
                    })
                }
                i[t].event_handlers_runtime_ms += v - s;
                h[t].event_end_ms = v;
                o != null && o.afterEachHandler(t, i[t]);
                return u
            }
        },
        setCurrentAdAccountId: function(a) {
            n = a
        },
        setAdsConfig: function(a) {
            o = a
        }
    };

    function p(a, c, d) {
        c = i[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = babelHelpers["extends"]({}, i[a], h[a]);
        o != null && o.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl")
    }
    var q = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function r(a) {
        return o != null ? o.getEventSampleWeights(a) : b("EventProfilerSampler").getEventSampleWeights(a)
    }
    e.exports = c
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (a === void 0) return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    f["default"] = a
}), 66);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d && (d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a)));
    e.exports = g
}), null);
__d("createTrustedHTMLWithoutValidation_DO_NOT_USE", ["TrustedTypesWithNoDefaultPolicies"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(a) {
        return a
    };
    var h = "untrusted-html",
        i, j = {
            createHTML: function(a) {
                return a
            },
            createScriptURL: b,
            createScript: b
        };

    function k() {
        if (i) return;
        i = c("TrustedTypesWithNoDefaultPolicies").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createHTML(a)
    }
    g["default"] = a
}), 98);
__d("createTrustedHTMLForLinkTag", ["TrustedTypesWithNoDefaultPolicies", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function(a) {
        return a
    };
    var h = "link-tag-html",
        i, j = {
            createHTML: function(a) {
                if (a === "<link />") return a;
                throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")
            },
            createScriptURL: b,
            createScript: b
        };

    function k() {
        if (i) return;
        i = c("TrustedTypesWithNoDefaultPolicies").createPolicy(h, j)
    }

    function l() {
        i || k();
        return i
    }

    function a(a) {
        return l().createHTML(a)
    }
    g["default"] = a
}), 98);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment", "createTrustedHTMLForLinkTag"], (function(a, b, c, d, e, f, g, h) {
    var i = d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        j = {};
    b = [1, '<select multiple="true">', "</select>"];
    e = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var k = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        l = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: b,
            option: b,
            caption: e,
            colgroup: e,
            tbody: e,
            tfoot: e,
            thead: e,
            td: f,
            th: f
        };
    d = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    d.forEach(function(a) {
        l[a] = k, j[a] = !0
    });

    function a(a) {
        a = a;
        !i && h(0, 144);
        Object.prototype.hasOwnProperty.call(l, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(j, a) || (a === "*" ? i.innerHTML = c("createTrustedHTMLForLinkTag")("<link />") : i.innerHTML = "<" + a + "></" + a + ">", j[a] = !i.firstChild);
        return j[a] ? l[a] : null
    }
    g["default"] = a
}), 98);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "createTrustedHTMLWithoutValidation_DO_NOT_USE", "getMarkupWrap"], (function(a, b, c, d, e, f, g, h) {
    var i = d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        j = /^\s*<(\w+)/;

    function k(a) {
        a = a.match(j);
        return a && a[1].toLowerCase()
    }

    function a(a, b) {
        var d = i;
        !i && h(0, 5001);
        var e = k(a);
        e = e && c("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = c("createTrustedHTMLWithoutValidation_DO_NOT_USE")(a);
        e = d.getElementsByTagName("script");
        e.length && (b || h(0, 5002), Array.from(e).forEach(b));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
    g["default"] = a
}), 98);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
    f["default"] = a
}), 66);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";

        function a(c) {
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("HardwareCSS", [], (function(a, b, c, d, e, f) {
    function g() {
        if (window != null && window.document && document.body) {
            var a = document.body,
                b = a.getAttribute("class") || "";
            window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency >= 4 ? a.setAttribute("class", b + " cores-gte4") : a.setAttribute("class", b + " cores-lt4")
        }
    }
    var h = {
        init: function() {
            g(), h.init = function() {}
        }
    };
    e.exports = h
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        PROFILING_COUNTERS: 0,
        HEARTBEAT: 1,
        FLUX_PERF_TOOL: 2
    };
    b = {
        PROFILING_COUNTERS: 0,
        HEARTBEAT: 1,
        FLUX_PERF_TOOL: 2
    };
    f.beforeIDs = a;
    f.afterIDs = b
}), 66);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetTimeout || a.setTimeout,
        i = 5e3,
        j = {},
        k = {};

    function b(a, b) {
        var d = j[a] = j[a] || new(c("CircularBuffer"))(i);
        d.write(b);
        k[a] && k[a].forEach(function(a) {
            try {
                a(b)
            } catch (a) {}
        })
    }

    function d(a) {
        if (!j[a]) return [];
        else return j[a].read()
    }

    function e(a, b) {
        if (typeof b !== "function") return;
        k[a] = k[a] || [];
        k[a].push(b);
        if (j[a]) {
            a = j[a];
            a.read().forEach(function(a) {
                try {
                    b(a)
                } catch (a) {}
            })
        }
    }

    function f(a, b) {
        var d = j[a];
        d ? d.expand(b) : j[a] = new(c("CircularBuffer"))(b)
    }

    function l(a) {
        j[a] && h(function() {
            j[a].clear()
        }, 0)
    }
    g.write = b;
    g.read = d;
    g.tail = e;
    g.expand = f;
    g.clear = l
}), 98);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
        }
        var b = a.prototype;
        b.onNewContextCreatedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        b.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        b.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        b.onNewContextCreated = function(a, b, c) {
            return this.isEnabled() ? this.onNewContextCreatedWhileEnabled(a, b, c) : null
        };
        b.onBeforeContextStarted = function(a, b, c) {
            return this.isEnabled() ? this.onBeforeContextStartedWhileEnabled(a, b, c) : null
        };
        b.onAfterContextStarted = function(a, b, c, d) {
            return null
        };
        b.onAfterContextEnded = function(a, b, c, d) {
            if (this.isEnabled()) {
                c = c;
                this.onAfterContextEndedWhileEnabled(a, b, c, d)
            }
            this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
        };
        b.onDisable = function() {};
        b.onEnable = function() {};
        b.getBeforeID = function() {
            throw Error("unimplemented abstract method")
        };
        b.getAfterID = function() {
            throw Error("unimplemented abstract method")
        };
        b.isEnabled = function() {
            return this.$4
        };
        b.__getExpiryCallback = function() {
            var a = this,
                b = ++this.$1;
            this.$2[b] = !0;
            this.$3++;
            return function() {
                a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1))
            }
        };
        b.expressInterest = function() {
            var a = this.__getExpiryCallback();
            this.isEnabled() || (this.onEnable(), c("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
            this.$4 = !0;
            this.$5 = !0;
            return a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j;
    c = function(c) {
        babelHelpers.inheritsLoose(d, c);

        function d() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = 33, b.$HeartbeatObserver2 = 60, b.$HeartbeatObserver3 = null, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = {}, b.$HeartbeatObserver6 = null, b.$HeartbeatObserver7 = [], b.$HeartbeatObserver8 = 1, b.$HeartbeatObserver9 = null, a) || babelHelpers.assertThisInitialized(b)
        }
        var e = d.prototype;
        e.onNewContextCreatedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absBeginTimeMs;
            c = a.absEndTimeMs;
            d = a.name;
            a = a.isRoot;
            a && b != null && c != null && (this.$HeartbeatObserver5[d] ? (this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "ignored_exec",
                timeMs: c
            }, !1)) : (this.$HeartbeatObserver10({
                type: "exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver10({
                type: "exec",
                timeMs: c
            }, !1)))
        };
        e.__getExpiryCallback = function() {
            var a = this,
                d = c.prototype.__getExpiryCallback.call(this),
                e = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver7.push([e, d]);
            return function() {
                d(), a.$HeartbeatObserver11()
            }
        };
        e.onEnable = function() {
            var c = (h || (h = b("Env"))).timeslice_heartbeat_config || {};
            this.$HeartbeatObserver1 = c.pollIntervalMs || this.$HeartbeatObserver1;
            this.$HeartbeatObserver2 = c.idleGapThresholdMs || this.$HeartbeatObserver2;
            this.$HeartbeatObserver5 = c.ignoredTimesliceNames || this.$HeartbeatObserver5;
            c = a.__fbNativeSetInterval || a.setInterval;
            this.$HeartbeatObserver4 = c(this.$HeartbeatObserver12.bind(this), this.$HeartbeatObserver1);
            c = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver3 = {
                type: "beat",
                timeMs: c
            };
            this.$HeartbeatObserver6 = c + this.$HeartbeatObserver1;
            this.$HeartbeatObserver9 = c
        };
        e.onDisable = function() {
            this.$HeartbeatObserver4 && clearInterval(this.$HeartbeatObserver4), this.$HeartbeatObserver4 = null
        };
        e.getBeforeID = function() {
            return (i || (i = b("ExecutionContextObservers"))).beforeIDs.HEARTBEAT
        };
        e.getAfterID = function() {
            return (i || (i = b("ExecutionContextObservers"))).afterIDs.HEARTBEAT
        };
        e.$HeartbeatObserver13 = function(a) {
            return a.type == "beat" || a.type == "ignored_exec"
        };
        e.$HeartbeatObserver10 = function(a, c) {
            if (this.$HeartbeatObserver3 == null) {
                b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
                this.$HeartbeatObserver3 = a;
                return
            }
            var d = this.$HeartbeatObserver3.timeMs,
                e = a.timeMs;
            if (c) {
                c = this.$HeartbeatObserver6 + this.$HeartbeatObserver2;
                c = e > c;
                if (this.$HeartbeatObserver3.type === "exec") a.type === "exec" ? this.$HeartbeatObserver14(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver13(a) && this.$HeartbeatObserver14(d, e, c ? "likely_post_exec" : "post_exec");
                else if (this.$HeartbeatObserver13(this.$HeartbeatObserver3))
                    if (a.type === "exec") this.$HeartbeatObserver14(d, e, c ? "likely_pre_exec" : "pre_exec");
                    else if (this.$HeartbeatObserver13(a) && c) {
                    c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                    this.$HeartbeatObserver14(d, e, c)
                }
            }
            this.$HeartbeatObserver3 = a
        };
        e.$HeartbeatObserver14 = function(a, c, d) {
            a < c && (j || (j = b("LogBuffer"))).write("time_slice_heartbeat", {
                begin: a,
                end: c,
                id: this.$HeartbeatObserver8++,
                parentID: null,
                guard: "browser time: " + d,
                representsExecution: !1
            })
        };
        e.$HeartbeatObserver12 = function() {
            var a = (g || (g = b("performanceAbsoluteNow")))();
            this.$HeartbeatObserver11(a);
            this.$HeartbeatObserver10({
                type: "beat",
                timeMs: a
            }, !0);
            this.$HeartbeatObserver6 = a + this.$HeartbeatObserver1
        };
        e.$HeartbeatObserver11 = function(a) {
            a = a || (g || (g = b("performanceAbsoluteNow")))();
            while (this.$HeartbeatObserver7.length > 0) {
                var c = this.$HeartbeatObserver7[0],
                    d = c[0];
                c = c[1];
                if (a - d > l.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver7.shift();
                else break
            }
            d = this.$HeartbeatObserver9;
            a - d > l.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver15()
        };
        e.$HeartbeatObserver15 = function() {
            for (var a = this.$HeartbeatObserver7, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                d[0];
                d = d[1];
                d()
            }
            this.$HeartbeatObserver7 = []
        };
        return d
    }(b("OnDemandExecutionContextObserver"));
    var k = new c();
    b("TimeSlice").registerExecutionContextObserver(k);
    var l = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return k
        }
    };
    e.exports = l
}), 3);
__d("InitialJSLoader", ["Arbiter", "Bootloader", "PageEvents"], (function(a, b, c, d, e, f, g) {
    var h = "BOOTLOAD/JSREADY";

    function a(a, b) {
        c("Arbiter").subscribe(c("PageEvents").BIGPIPE_DOMREADY, function() {
            function d() {
                c("Bootloader").loadResources(a, {
                    onAll: function() {
                        c("Arbiter").inform(h, !0, "state")
                    }
                })
            }
            b != null && b > 0 ? setTimeout(d, b) : d()
        })
    }
    g.INITIAL_JS_READY = h;
    g.loadOnDOMContentReady = a
}), 98);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || h(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
    f["default"] = a
}), 66);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    var g = {};

    function a(a, b, c) {
        var d = b in g ? g[b](a, c) : a;
        return function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            return d.apply(this, b)
        }
    }
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    f["default"] = a
}), 66);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b;
        b = a != null ? (b = a.ownerDocument) != null ? b : a : document;
        b = (b = b.defaultView) != null ? b : window;
        return !!(a != null && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    f["default"] = a
}), 66);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return c("isNode")(a) && a.nodeType == 3
    }
    g["default"] = a
}), 98);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (!a || !b) return !1;
        else if (a === b) return !0;
        else if (c("isTextNode")(a)) return !1;
        else if (c("isTextNode")(b)) return h(a, b.parentNode);
        else if ("contains" in a) return a.contains(b);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(b) & 16);
        else return !1
    }
    g["default"] = h
}), 98);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function i(a) {
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || h(0, 3914);
        typeof b === "number" || h(0, 3915);
        b === 0 || b - 1 in a || h(0, 3916);
        typeof a.callee !== "function" || h(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function j(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!j(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return i(a)
    }
    g["default"] = a
}), 98);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f, g) {
    var h = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function i(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }

    function a(a, b) {
        a = j(a, b);
        return a[0]
    }

    function b(a, b, c) {
        b = j(a, b);
        a = j(a, c);
        b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
        return c[0]
    }

    function j(a, b) {
        if (!a || !a.getElementsByTagName) return [];
        b = b.split(" ");
        var e = [a];
        for (var f = 0; f < b.length; f++) {
            if (e.length === 0) break;
            if (b[f] === "") continue;
            var g = b[f],
                j = b[f],
                k = [],
                l = !1;
            if (g.charAt(0) == "^")
                if (f === 0) l = !0, g = g.slice(1);
                else return [];
            g = g.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
            g = g.split(" ");
            var m = g[0] || "*",
                n = m == "*",
                o = g[1] && g[1].charAt(0) == "#";
            if (o) {
                o = c("ge")(g[1].slice(1), a, m);
                if (o && (n || o.tagName.toLowerCase() == m))
                    for (var p = 0; p < e.length; p++)
                        if (l && c("containsNode")(o, e[p])) {
                            k = [o];
                            break
                        } else if (document == e[p] || c("containsNode")(e[p], o) && e[p] !== o) {
                    k = [o];
                    break
                }
            } else {
                o = [];
                p = e.length;
                var q, r = !l && j.indexOf("[") < 0 && document.querySelectorAll;
                for (var s = 0; s < p; s++) {
                    if (l) {
                        q = [];
                        var t = e[s].parentNode;
                        while (c("isElementNode")(t))(n || t.tagName.toLowerCase() == m) && q.push(t), t = t.parentNode
                    } else r ? h.test(j) ? q = e[s].getElementsByClassName(j.substring(1)) : q = e[s].querySelectorAll(j) : q = e[s].getElementsByTagName(m);
                    t = q.length;
                    for (var u = 0; u < t; u++) o.push(q[u])
                }
                if (!r)
                    for (var q = 1; q < g.length; q++) {
                        t = g[q];
                        u = t.charAt(0) == ".";
                        n = t.substring(1);
                        for (s = 0; s < o.length; s++) {
                            p = o[s];
                            if (!p || p.nodeType !== 1) continue;
                            if (u) {
                                d("CSS").hasClass(p, n) || delete o[s];
                                continue
                            } else {
                                j = t.slice(1, t.length - 1);
                                m = j.indexOf("=");
                                if (m < 0) {
                                    if (!i(p, j)) {
                                        delete o[s];
                                        continue
                                    }
                                } else {
                                    r = j.substr(0, m);
                                    j = j.substr(m + 1);
                                    j = j.slice(1, j.length - 1);
                                    if (p.getAttribute(r) != j) {
                                        delete o[s];
                                        continue
                                    }
                                }
                            }
                        }
                    }
                for (s = 0; s < o.length; s++)
                    if (o[s]) {
                        k.push(o[s]);
                        if (l) break
                    }
            }
            e = k
        }
        return e
    }

    function e() {
        var a = window.getSelection;
        if (a) return a() + "";
        else {
            a = document.selection;
            if (a) return a.createRange().text
        }
        return null
    }

    function f(a, b) {
        (typeof a === "string" || typeof b === "string") && c("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
        return c("containsNode")(c("ge")(a), c("ge")(b))
    }

    function k() {
        var a = c("ifRequired")("Quickling", function(a) {
            return a.isActive() ? c("ge")("content") : null
        });
        return a || document.body
    }

    function l(a, b) {
        b = c("createArrayFromMixed")(b).join("|").toUpperCase().split("|");
        b = c("createObjectFrom")(b);
        return c("isNode")(a) && a.nodeName in b
    }

    function m(a) {
        return l(a, ["input", "textarea"]) || a.contentEditable === "true"
    }
    g.find = a;
    g.findPushSafe = b;
    g.scry = j;
    g.getSelection = e;
    g.contains = f;
    g.getRootElement = k;
    g.isNodeOfType = l;
    g.isInputNode = m
}), 98);
__d("EventProfiler", ["cr:708886"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:708886")
}), 98);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }

    function a(a) {
        var b;
        if (a == null) return 0;
        var c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollTop) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollTop) || 0 : a.scrollTop || 0
    }

    function b(a, b) {
        if (a == null) return;
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollTop = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollTop = b || 0)) : a.scrollTop = b || 0
    }

    function c(a) {
        var b, c = a.ownerDocument;
        return g(a, c) ? (c == null ? void 0 : (b = c.body) == null ? void 0 : b.scrollLeft) || (c == null ? void 0 : (b = c.documentElement) == null ? void 0 : b.scrollLeft) || 0 : a.scrollLeft || 0
    }

    function d(a, b) {
        var c = a.ownerDocument;
        g(a, c) ? ((c == null ? void 0 : c.body) && (c.body.scrollLeft = b || 0), (c == null ? void 0 : c.documentElement) && (c.documentElement.scrollLeft = b || 0)) : a.scrollLeft = b || 0
    }
    f.getTop = a;
    f.setTop = b;
    f.getLeft = c;
    f.setLeft = d
}), 66);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    var g = function(b, a, c, d, e) {
            "use strict";
            var f = this;
            this.set_namespace = function(a) {
                f.ns = a;
                return f
            };
            this.coalesce_namespace = function(a) {
                f.ns === null && (f.ns = a);
                return f
            };
            this.add_event = function() {
                return f
            };
            var g = b + "/" + a;
            this.ue = g;
            this.ue_ts = b;
            this.ue_count = a;
            this.context = c;
            this.ns = null;
            this.node = d;
            this.type = e
        },
        h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n].ue_ts < m; --n)
                if (i[n].node == c && i[n].type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0].ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("FlowMigrationUtilsForLegacyFiles", ["FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "flow_typing_for_legacy_code";

    function a(a) {
        c("FBLogger")(h).blameToPreviousFile().event(h + ".bad_call").mustfix(a);
        return new Error("[" + h + "] " + a)
    }
    g.invariantViolation = a
}), 98);
__d("getDocumentScrollElement", ["FlowMigrationUtilsForLegacyFiles"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        if (a.scrollingElement) return a.scrollingElement;
        a = !h && a.compatMode === "CSS1Compat" ? a.documentElement : a.body;
        a || d("FlowMigrationUtilsForLegacyFiles").invariantViolation("null result in getDocumentScrollElement");
        return a
    }
    g["default"] = a
}), 98);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
    f["default"] = a
}), 66);
__d("Event", ["$", "Arbiter", "DOMEvent", "DOMEventListener", "DOMQuery", "DataStore", "Env", "ErrorGuard", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TimeSlice", "UserAgent", "clickRefAction", "dedupString", "fb-error", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f) {
    var g, h, i = b("fb-error").TAAL,
        j = "Event.listeners";
    Event.prototype || (Event.prototype = {});

    function k(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }
    var l = function() {
        "use strict";

        function a(a, b, c) {
            this.cancelBubble = !1, this.target = a, this.type = b, this.data = c
        }
        var c = a.prototype;
        c.getData = function() {
            this.data = this.data || {};
            return this.data
        };
        c.stop = function() {
            return Event.stop(this)
        };
        c.prevent = function() {
            return Event.prevent(this)
        };
        c.isDefaultPrevented = function() {
            return Event.isDefaultPrevented(this)
        };
        c.kill = function() {
            return Event.kill(this)
        };
        c.getTarget = function() {
            return new(b("DOMEvent"))(this).target || null
        };
        return a
    }();

    function m(a) {
        if (a instanceof l) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in Event.prototype) try {
                a[b] = Event.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(Event.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, l.prototype);
    c = {
        listen: function(a, c, d, e, f) {
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new u(a, d, null, c, e, null, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = Event.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var h in c) g[h] = Event.listen(a, h, c[h], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                h = i.blameToPreviousFrame(new Error("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(h).mustfix("Tried to listen to element of type %s", c);
                throw h
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                h = b("getDocumentScrollElement")();
                h !== document.documentElement && h !== document.body && (a = h)
            }
            g = b("DataStore").get(a, j, {});
            h = o[c];
            h && (c = h.base, h.wrap && (d = h.wrap(d)));
            q(a, g, c, f);
            h = g[c];
            e in h || (h[e] = []);
            var k = h[e].length;
            d = new u(a, d, g, c, e, k, f);
            h[e][k] = d;
            h.numHandlers++;
            f.passive || (h.numNonPassiveHandlers++, p(a, g[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            k(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            k(a.event);
            return !1
        },
        getKeyCode: function(a) {
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!n) {
                var a = b("getObjectValues")(Event.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                n = a
            }
            return n
        },
        fire: function(a, b, c) {
            c = new l(a, b, c);
            var d;
            do {
                var e = Event.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = Event.__getHandler(a, b);
            if (a) return a(m(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, j);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    };
    Object.assign(Event, c);
    var n = null;
    d = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var o;
    !window.navigator.msPointerEnabled ? o = {
        mouseenter: {
            base: "mouseover",
            wrap: d
        },
        mouseleave: {
            base: "mouseout",
            wrap: d
        }
    } : o = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: d
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: d
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        f = function(a, b) {
            b = m(b);
            var c = b.getTarget();
            while (c) Event.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", f.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", f.bind(null, "focusout"), !0)
    }
    var p = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        q = function(a, c, d, e) {
            if (d in c) return;
            var f = b("TimeSlice").guard(t.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? Event.Priority._BUBBLE : Event.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                Event.listen(a, d, g, f, e)
            }
        };

    function r(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function s(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var t = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        c = m(c);
        if (!b("DataStore").get(this, j)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, j)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && r(f) && !s(e, "file") && !s(e, "submit") && c.prevent();
            (g || (g = b("Env"))).gk_no_ref_action != !0 && (a == "click" && b("clickRefAction")("click", f, c), a == "contextmenu" && b("clickRefAction")("contextmenu", f, c), a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c))
        }
        e = Event.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var h = 0; h < f.length; h++) {
                    if (!f[h]) continue;
                    var i = f[h].fire(this, c);
                    if (i === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    Event.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };
    var u = function() {
        "use strict";

        function a(a, b, c, d, e, f, g) {
            this.$1 = a, this.$2 = b, this.$3 = c, this.$7 = d, this.$6 = e, this.$4 = f, this.$5 = g
        }
        var c = a.prototype;
        c.isRemoved = function() {
            return !this.$3
        };
        c.remove = function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (this.isRemoved()) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this.$3[this.$7];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this.$3[this.$7]) : (delete a[this.$6][this.$4], a.numHandlers--, this.$5.passive || (a.numNonPassiveHandlers--, p(this.$1, this.$3[this.$7], this.$7)));
                this.$3 = null
            }
        };
        c.fire = function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? (h || (h = b("ErrorGuard"))).applyWithGuard(this.$2, a, [c], {
                name: "eventhandler:" + c.type + ":" + (typeof a.name == "string" ? a.name : a.id)
            }) : !0
        };
        return a
    }();
    a.$E = Event.$E = m;
    e.exports = Event
}), null);
__d("getSurfaceAwareContainer", ["ge"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        var a = c("ge")("workGalahadWebChromeEntity");
        return a ? a : document.body
    }
    g["default"] = a
}), 98);
__d("snowliftLoadingSpinner", ["cx", "CSS"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a) {
        d("CSS").addClass(a, "_1m42");
        return function() {
            d("CSS").removeClass(a, "_1m42")
        }
    }
    g["default"] = a
}), 98);
__d("PhotoSnowliftLoader", ["Arbiter", "Bootloader", "FBLogger", "PageEvents", "getSurfaceAwareContainer", "ifRequired", "snowliftLoadingSpinner"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d) {
        if (a && a.offer_bypass_snowlift === "1") {
            r(d);
            c("Bootloader").loadModules(["AsyncRequest"], function(a) {
                new a().setURI(b).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function i(a, b, d) {
        if (a && a.offerx_bypass_snowlift === "1") {
            r(d);
            c("Bootloader").loadModules(["AsyncRequest", "XOfferController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.offerx_id).setEnum("referrer", a.offerx_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }

    function j(a, b, d) {
        if (a && a.sales_promo_bypass_snowlift === "1") {
            r(d);
            c("Bootloader").loadModules(["AsyncRequest", "XSalesPromoWWWDetailsDialogAsyncController"], function(b, c) {
                c = c.getURIBuilder().setFBID("offer_id", a.sales_promo_id).setString("referrer", a.sales_promo_referrer).setStringVector("__xts__", a.__xts__).setString("__tn__", a.__tn__).getURI();
                new b().setURI(c).send()
            }, "PhotoSnowliftLoader");
            return !0
        }
        return !1
    }
    var k = function() {};
    c("Arbiter").subscribe("PhotoSnowlift.OPEN", function() {
        k()
    });
    c("Arbiter").subscribe("SalesPromoDetails.OPEN", function() {
        k()
    });
    c("Arbiter").subscribe("OfferDetails.OPEN", function() {
        k()
    });
    var l = !1,
        m = "",
        n = {
            x: 960,
            y: 960
        },
        o = 360,
        p = {
            x: 82,
            y: 42
        };

    function a(a, b, d) {
        c("Bootloader").loadModules(["URI"], function(e) {
            m = "";
            k();
            k = c("snowliftLoadingSpinner")(b);
            var f = String(e.getMostRecentURI().getQueryData().viewas),
                g = new e(a).getQueryData();
            g = s(g, a, b, f);
            if (g) {
                b.getAttribute("data-ploi") && (g = new Image(), g.src = new e(t(b)));
                q(a, b, f, d)
            }
        }, "PhotoSnowliftLoader")
    }

    function q(a, b, d, e) {
        r(d), c("Bootloader").loadModules(["Live", "PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"], function() {}, "PhotoSnowliftLoader"), c("Bootloader").loadModules(["PhotoSnowlift"], function(c) {
            c.bootstrap(a, b)
        }, e)
    }
    var r = function(a) {
        if (l) return;
        l = !0;
        var b = a ? {
            viewas: a
        } : {};
        c("Bootloader").loadModules(["AsyncRequest"], function(a) {
            new a("/ajax/photos/snowlift/init.php").setAllowCrossPageTransition(!0).setMethod("GET").setReadOnly(!0).setData(b).setErrorHandler(function(a) {
                c("FBLogger")("photo_snowlift").catching(a.toError()).warn("failed to initialize snowlift")
            }).send()
        }, "PhotoSnowliftLoader")
    };

    function s(a, b, c, d) {
        c = h(a, b, d);
        var e = i(a, b, d);
        a = j(a, b, d);
        return !c && !a && !e
    }

    function t(a) {
        m === "" && c("ifRequired")("URI", function(b) {
            var c = a.getAttribute("data-ploi"),
                d = a.getAttribute("data-plsi");
            b = new b(a.getAttribute("ajaxify")).getQueryData().size.split(",");
            d && !u({
                hasSmallImage: !!d,
                dimensions: {
                    x: b[0],
                    y: b[1]
                }
            }) ? m = d : c ? m = c : m = ""
        });
        return m
    }

    function u(a) {
        c("ifRequired")("Vector", function(b) {
            if (!a.hasSmallImage) return !1;
            b = v(a.dimensions);
            if (b) {
                b = w(b);
                b = x(a.dimensions, b);
                if (b) return b.x > n.x || b.y > n.y
            }
            return !1
        });
        return !1
    }

    function v(a) {
        c("ifRequired")("Vector", function(b) {
            var c = b.getViewportDimensions(),
                d = new b(a.x, a.y),
                e;
            e = Math.min(d.x, c.x - o - p.x);
            c = c.y - p.y;
            c = Math.min(d.y, c);
            if (e === 0 && c === 0) return new b(0, 0);
            var f = e / c;
            d = d.x / d.y;
            return f < d ? new b(e, Math.round(e / d)) : new b(Math.round(c * d), c)
        })
    }

    function w(a) {
        c("ifRequired")("Vector", function(b) {
            window.devicePixelRatio && window.devicePixelRatio > 1 && (a = new b(a.x * window.devicePixelRatio, a.y * window.devicePixelRatio))
        });
        return a
    }

    function x(a, b) {
        c("ifRequired")("Vector", function(c) {
            var d = a.x,
                e = a.y;
            if (d >= b.x || e >= b.y) {
                var f = b.x / b.y,
                    g = d / e;
                f < g ? (d = b.x, e = Math.round(d / g)) : f > g ? (e = b.y, d = Math.round(e * g)) : (d = b.x, e = b.y)
            }
            return new c(d, e)
        })
    }
    b = function() {
        c("Arbiter").subscribe(c("PageEvents").BIGPIPE_ONLOAD, function() {
            var a = c("getSurfaceAwareContainer")();
            (a && a.classList.contains("home") || a && a.classList.contains("timelineLayout")) && c("ifRequired")("requestIdleCallback", function(a) {
                a(function() {
                    r()
                })
            }, function() {
                r()
            })
        })
    };
    g.STAGE_NORMAL_MAX = n;
    g.SIDEBAR_SIZE_MAX = o;
    g.STAGE_CHROME = p;
    g.load = a;
    g.loadWithSnowLift = q;
    g.loadFrame = r;
    g.shouldUseSnowlift = s;
    g.getImageURL = t;
    g.shouldShowHiRes = u;
    g.getStageSize = v;
    g.adjustStageSizeForPixelRatio = w;
    g.getImageSizeInStage = x;
    g.preload = b
}), 98);
__d("PrimerInlineHandlers", ["Bootloader", "CSS", "Parent", "nullthrows", "uniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = new Map();

    function j(a, b) {
        var e = c("nullthrows")(a.id);
        e in h || (h[e] = 0);
        h[e] === 0 && d("CSS").addClass(a, "bootloading");
        h[e] += b
    }

    function k(a) {
        var b = c("nullthrows")(a.id);
        h[b]--;
        h[b] === 0 && d("CSS").removeClass(a, "bootloading")
    }

    function l(a, b, c, d) {
        var e = d !== void 0 ? c[d] : c,
            f;
        if (Array.isArray(e))
            for (f = 0; f < e.length; f++) l(a, b, e, f);
        else if (e && typeof e === "object")
            if (e.__elem) c[d] = a;
            else if (e.__event) c[d] = b;
        else
            for (var f in e) l(a, b, e, f)
    }

    function m(a, b, e) {
        var g = d("Parent").byClass(a, "stat_elem") || a;
        g.id || g.setAttribute("id", c("uniqueID")());
        e = JSON.parse(a.getAttribute(e));
        j(g, e.length);
        e.forEach(function(d) {
            d = Array.isArray(d) ? n(d) : o(d);
            var e = d.moduleName,
                h = d.methodName,
                j = d.logicalKey,
                m = d.args;
            l(a, b, m);
            var p = c("Bootloader").loadModules.call(c("Bootloader"), [e], function(a) {
                k(g), a[h].apply(a, m)
            }, "Primer: addEventHandler");
            if (j != null) {
                d = i.get(j);
                d !== void 0 && d();
                i.set(j, function() {
                    p.remove(), k(a)
                })
            }
        })
    }

    function n(a) {
        var b = a[0],
            c = a[1];
        a = a.slice(2);
        return {
            moduleName: b,
            methodName: c,
            args: a
        }
    }

    function o(a) {
        var b = a.k,
            c = a.mod,
            d = a.meth;
        a = a.a;
        return {
            logicalKey: b,
            moduleName: c,
            methodName: d,
            args: a
        }
    }

    function a(a, b, c) {
        a = d("Parent").byAttribute(a, c);
        if (!a) return null;
        do m(a, b, c); while (a = d("Parent").byAttribute(a.parentNode, c));
        return !1
    }
    g.run = a
}), 98);
__d("ReactServerPrimer", ["FBLogger", "Parent", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map();

    function i(a) {
        while (a && a instanceof Node) {
            if (a instanceof HTMLElement && a.getAttribute("data-sr-before")) break;
            var b = a.previousSibling;
            b ? a = b : a = a.parentNode
        }
        if (a instanceof HTMLElement) return a;
        else {
            c("FBLogger")("ServerCallables").mustfix("Failed to find wrapping data-sr-before mount");
            return null
        }
    }

    function j(a, b, d) {
        var e = i(b);
        if (!e) return null;
        var f = !1,
            g = h.get(e);
        g || (g = [], h.set(e, g), f = !0);
        g.push(function() {
            var c = new a.constructor(a.type, a),
                e = d === void 0 ? b : d;
            e.dispatchEvent(c)
        });
        f && c("requireWeak")("ReactServerRenderer", function(a) {
            a.dequeueHydrate(e)
        });
        return !1
    }

    function a(a, b, c) {
        a = d("Parent").byAttribute(c, a);
        return !a ? null : j(b, a, c)
    }

    function b(a) {
        var b = h.get(a);
        b != null && b.forEach(function(a) {
            a()
        });
        h["delete"](a)
    }
    g.findSRBeforeMountElem = i;
    g.queueEvent = j;
    g.handleEvent = a;
    g.notifyReactHydrateMount = b
}), 98);
__d("firstClickTimestamp", ["DataStore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "first-click-timestamp";

    function a(a, b) {
        var c = d("DataStore").get(a, h);
        c || d("DataStore").set(a, h, b.toString())
    }

    function b(a) {
        a = d("DataStore").get(a, h);
        return Number(a)
    }
    g.setIfFirstClick = a;
    g.get = b
}), 98);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("requireDeferred")("BanzaiScuba_DEPRECATED").__setRef("CookieStore");

    function i(a, b, c, d, e, f, g, h) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "") + (h ? "; SameSite=" + h : "")
    }

    function j(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function k() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = (g || (g = b("performanceNow")))(),
                c = document.cookie;
            a = g() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var l = function() {
        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g, h) {
            document.cookie = i(a, b, c, d, e, f, g, h)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = j(a, b, c)
        };
        c.getCookie = function(a) {
            var c;
            this.$1++;
            var d = (g || (g = b("performanceNow")))();
            c = (c = k()) == null ? void 0 : c.match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            a = g() - d;
            d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic;
            var e = b("Random").coinflip(d);
            e && m(d, "classic", a, this.$1);
            return c ? decodeURIComponent(c[1]) : null
        };
        return a
    }();

    function m(a, b, c, d, e, f) {
        h.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var n = 10 * 1e3,
        o = function() {
            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g, h) {
                document.cookie = i(a, b, c, d, e, f, g, h), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = j(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                var c = (g || (g = b("performanceNow")))();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = (g || (g = b("performanceNow")))() - c;
                    m(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + n < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + n < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                var a;
                this.$4++;
                a = (a = (a = k()) == null ? void 0 : a.split(";")) != null ? a : [];
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new o() : new l()
        },
        CookieCacheForTest: o,
        CookieStoreSlowForTest: l
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieDomain", "CookieStore"], (function(a, b, c, d, e, f, g) {
    var h = /_js_(.*)/,
        i;

    function j() {
        i || (i = d("CookieStore").newCookieStore());
        return i
    }

    function k() {
        return "." + c("CookieDomain").domain
    }

    function l(a) {
        return window.self != window.top ? !1 : !0
    }

    function m(a, b) {
        if (!r(a)) return;
        n(a, b, t(a), u(a), s(a), v(a))
    }

    function n(a, b, c, d, e, f) {
        var g = Date.now();
        if (c != null)
            if (c > g) c -= g;
            else if (c == 1) {
            o(a, d);
            return
        }
        j().setCookie(g, a, b, d, k(), c, e, f)
    }

    function a(a, b) {
        if (!l(a)) return;
        m(a, b)
    }

    function b(a, b, c, d, e) {
        if (!l(a)) return;
        n(a, b, c, d, e)
    }

    function o(a, b) {
        b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, k())
    }

    function e(a) {
        return !r(a) ? null : j().getCookie(a)
    }

    function p(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0,
            sameSite: a.s || "None"
        }
    }

    function q(a) {
        if (c("CookieCoreConfig")[a] !== void 0) return p(c("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? q(a[1]) : null
    }

    function r(a) {
        return q(a) !== null
    }

    function s(a) {
        a = q(a);
        return a == null ? !0 : !a.insecure
    }

    function t(a) {
        a = q(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function u(a) {
        a = q(a);
        return a == null ? "/" : a.path
    }

    function v(a) {
        a = q(a);
        return a == null || a.sameSite == null ? null : a.sameSite
    }
    g.set = m;
    g.setWithoutChecks = n;
    g.setIfFirstPartyContext = a;
    g.setWithoutChecksIfFirstPartyContext = b;
    g.clear = o;
    g.get = e
}), 98);
__d("Cookie", ["Bootloader", "CookieConsent", "CookieCore"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (!c("CookieConsent").hasConsent(1)) {
            c("Bootloader").loadModules(["ODS"], function(b) {
                b.bumpEntityKey(2966, "defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function i() {
        return !c("CookieConsent").isCookiesBlocked()
    }

    function a(a, b) {
        if (!i() || !h(a)) return;
        d("CookieCore").set(a, b)
    }

    function b(a, b) {
        if (!i()) return;
        d("CookieCore").set(a, b)
    }

    function e(a, b, c, e, f) {
        if (!i() || !h(a)) return;
        d("CookieCore").setWithoutChecks(a, b, c, e, f)
    }
    f = babelHelpers["extends"]({}, d("CookieCore"), {
        set: a,
        setWithoutChecks: e,
        setWithoutCheckingUserConsent_DANGEROUS: b
    });
    g["default"] = f
}), 98);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return ((a = g.exec(a)) == null ? void 0 : a[1]) || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            a = c + "|" + ((c = a.getAttribute("data-referrer")) != null ? c : "");
            b("Cookie").set("x-src", a)
        }
    }
    e.exports = a
}), null);
__d("Primer", ["invariant", "Bootloader", "CSS", "Env", "Event", "Parent", "PhotoSnowliftLoader", "PrimerInlineHandlers", "ReactServerPrimer", "TimeSlice", "clickRefAction", "firstClickTimestamp", "ifRequired", "performanceNow", "requireDeferred", "trackReferrer"], (function(a, b, c, d, e, f, g, h) {
    var i = c("requireDeferred")("AsyncRequest").__setRef("Primer"),
        j = null,
        k = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;
    a = document.documentElement;
    a != null || h(0, 2301);

    function l(a, b, e, f, g) {
        d("firstClickTimestamp").setIfFirstClick(b, c("performanceNow")());
        var j = b.getAttribute("ajaxify"),
            l = b.href,
            m = f != null && f !== "" ? f : j || l;
        m && c("clickRefAction")("a", b, a).coalesce_namespace("primer");
        if (j && l && !/#$/.test(l)) {
            f = a.which && a.which === 2;
            j = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            if (f || j) return
        }
        l = d("PrimerInlineHandlers").run(e, a, "data-onclick");
        c("trackReferrer")(b, m);
        var n = g || b.rel;
        n = n && n.match(k);
        n = n && n[0];
        f = "Primer: " + n;
        switch (n) {
            case "dialog":
            case "dialog-post":
                c("Bootloader").loadModules(["AsyncDialog"], function(a) {
                    a.bootstrap(m, b, n)
                }, f);
                break;
            case "async":
            case "async-post":
                i.loadImmediately(function(a) {
                    a.bootstrap(m, b, n === "async-post")
                });
                break;
            case "theater":
                !c("Env").isCQuick ? d("PhotoSnowliftLoader").load(m, b, f) : c("ifRequired")("PageTransitions", function(a) {
                    a.go(m)
                });
                break;
            case "toggle":
                j = b.parentNode;
                j != null || h(0, 2302);
                d("CSS").toggleClass(j, "openToggler");
                c("Bootloader").loadModules(["Toggler"], function(a) {
                    if (b.parentNode == null) return;
                    a.bootstrap(b)
                }, f);
                break;
            default:
                c("ifRequired")("PageTransitionsRegistrar", function(b) {
                    b.__onClick(a)
                }, function() {});
                return l
        }
        return !1
    }
    c("Event").listen(document, "click", function(a) {
        a = a || window.event;
        if (a.button >= 2) return;
        j = a.target || a.srcElement;
        var b = d("Parent").byTag(j, "A");
        b instanceof HTMLAnchorElement ? b = l(a, b, j) : b = d("PrimerInlineHandlers").run(j, a, "data-onclick");
        b == null && (b = d("ReactServerPrimer").handleEvent("data-sr-onclick", a, j));
        return b
    }, c("Event").Priority._BUBBLE);
    c("Event").listen(document, "submit", function(a) {
        var b = a.getTarget(),
            d = b && b.getAttribute("rel");
        if (b && b.nodeName == "FORM" && (d == "async" || d === "dialog")) {
            c("clickRefAction")("f", b, a).coalesce_namespace("primer");
            var e = j;
            switch (d) {
                case "async":
                    c("Bootloader").loadModules(["FormSubmit"], function(a) {
                        a.send(b, e)
                    }, "Primer: async");
                    break;
                case "dialog":
                    c("Bootloader").loadModules(["FormSubmit", "AsyncDialog"], function(a, c) {
                        a = a.buildRequest(b, e);
                        a && c.send(a)
                    }, "Primer: form dialog");
                    break
            }
            return !1
        } else return c("ifRequired")("PageTransitionsRegistrar", function(b) {
            return b.__onSubmit(a, j)
        })
    }, c("Event").Priority._BUBBLE);
    var m = null;
    b = function(a, b) {
        b = b || window.event;
        m = b.target || b.srcElement;
        var c = d("PrimerInlineHandlers").run(m, b, "data-on" + a);
        n();
        a === "mouseover" && (o(), c == null && m && (c = d("ReactServerPrimer").handleEvent("data-sr-onmouseover", b, m)))
    };
    e = function(a, b) {
        b = b || window.event, m = b.relatedTarget || b.toElement
    };
    var n = function() {
            var a = m,
                b = d("Parent").byAttribute(m, "data-hover");
            if (b) {
                switch (b.getAttribute("data-hover")) {
                    case "tooltip":
                        c("Bootloader").loadModules(["Tooltip"], function(c) {
                            m === a && c.process(b, m)
                        }, "Primer: tooltip");
                        break
                }
                return
            }
        },
        o = function() {
            var a = m,
                b = d("Parent").byAttribute(a, "data-hovercard");
            b && c("Bootloader").loadModules(["Hovercard"], function(c) {
                m === a && c.processNode(b)
            }, "Primer: hovercard")
        };
    a.onmouseover = c("TimeSlice").guard(b.bind(null, "mouseover"), "Primer mouseover");
    a.onmouseout = c("TimeSlice").guard(e.bind(null, "mouseout"), "Primer mouseout");
    f = c("TimeSlice").guard(b.bind(null, "focus"), "Primer focus");
    a.addEventListener ? a.addEventListener("focus", f, !0) : a.attachEvent("onfocusin", f);
    e = c("TimeSlice").guard(b.bind(null, "keypress"), "Primer keypress");
    a.addEventListener && a.addEventListener("keypress", e, !0);
    d("PhotoSnowliftLoader").preload();
    g.primerHandleAjaxify = l
}), 98);
__d("ChatConfig", ["invariant", "ChatConfigInitialData"], (function(a, b, c, d, e, f, g, h) {
    var i = babelHelpers["extends"]({}, c("ChatConfigInitialData"));

    function j(a, b) {
        return a in i ? i[a] : b
    }

    function a(a) {
        return !!j(a, !1)
    }

    function b(a, b) {
        b === void 0 && (b = 0);
        if (a in i) {
            typeof i[a] === "number" || h(0, 3109);
            return i[a]
        }
        return b
    }

    function d(a, b) {
        i[a] = b
    }

    function e() {
        return i
    }
    g.get = j;
    g.getBool = a;
    g.getNumber = b;
    g.set = d;
    g.getDebugInfo = e
}), 98);
__d("SidebarPrelude", ["Arbiter", "Bootloader", "CSS", "ChatConfig", "URI", "setTimeout"], (function(a, b, c, d, e, f, g) {
    var h = d("ChatConfig").get("sidebar.hide_buddylist_off_homepage"),
        i = d("ChatConfig").get("sidebar.hide_buddylist_off_allpage"),
        j = "buddylistOff",
        k = "sidebarMode";

    function a(a) {
        var b = document.documentElement;
        if (b) {
            var e = i || h && !l();
            e ? d("CSS").addClass(b, j) : (d("CSS").removeClass(b, j), h && c("setTimeout")(function() {
                c("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            }));
            b.clientWidth > a && (d("CSS").addClass(b, k), c("Arbiter").inform("sidebar/visibility", !0, "state"))
        }
    }

    function b() {
        var a = document.documentElement;
        if (a) {
            var b = i || h && !l();
            b ? d("CSS").addClass(a, j) : (d("CSS").removeClass(a, j), h && c("setTimeout")(function() {
                c("Bootloader").loadModules(["Dock"], function(a) {
                    a.resizeAllFlyouts()
                }, "SidebarPrelude")
            }))
        }
    }

    function l() {
        return new(c("URI"))(window.location.href).getPath() === "/"
    }
    g.addSidebarMode = a;
    g.addBuddylistMode = b;
    g.isOnHomepage = l
}), 98);
__d("SubmitOnEnterListener", ["Bootloader", "CSS"], (function(a, b, c, d, e, f) {
    document.documentElement.onkeydown = function(a) {
        a = a || window.event;
        var c = a.target || a.srcElement;
        a = a.keyCode == 13 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && b("CSS").hasClass(c, "enter_submit");
        if (a) {
            b("Bootloader").loadModules(["DOM", "Input", "trackReferrer", "Form"], function(a, b, d, e) {
                if (!b.isEmpty(c)) {
                    b = c.form;
                    a = a.scry(b, ".enter_submit_target")[0] || a.scry(b, '[type="submit"]')[0];
                    if (a) {
                        e = e.getAttribute(b, "ajaxify") || e.getAttribute(b, "action");
                        e && d(b, e);
                        a.click()
                    }
                }
            }, "SubmitOnEnterListener");
            return !1
        }
    }
}), null);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorPubSub"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3;
    a = function() {
        function a(a) {
            var b = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = h;
            this.$4 = a;
            this.$1 = new(c("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                b.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var b = a.prototype;
        b.open = function() {
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        b.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        b.isActive = function() {
            return this.$2.length > 0
        };
        b.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        b.$7 = function(a) {
            var b, d, e, f;
            for (var g = 0; g < this.$2.length; g++) {
                var h = this.$2[g],
                    i = h.startIdx;
                h = h.id;
                h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
                (b == null || i < b) && (b = i)
            }
            if (e == null || b == null || f == null) {
                c("ErrorPubSub").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            h = this.$8(f);
            i = this.$1.read().slice(h);
            g = this.$8(d == null ? this.$5 : d) - this.$8(b);
            g > 0 && (this.$1.dropFirst(g), this.$6 += g);
            return i
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }

    function c() {
        try {
            return "SharedWorkerGlobalScope" in a && a instanceof a.SharedWorkerGlobalScope
        } catch (a) {
            return !1
        }
    }

    function d() {
        return "SharedWorker" in a && typeof a.SharedWorker === "function"
    }
    f.isWorkerContext = b;
    f.isSharedWorkerContext = c;
    f.isSharedWorkerSupported = d
}), 66);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {};

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    f["default"] = a
}), 66);
__d("TimeSliceImpl", ["invariant", "Env", "ErrorGuard", "FBLogger", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k, l = [],
        m = [],
        n = "key" + Math.random(),
        o = 1,
        p = !1;
    c = (h || (h = b("Env"))).timesliceBufferSize;
    c == null && (c = 5e3);
    var q = new(b("IntervalTrackingBoundedBuffer"))(c),
        r = [],
        s = [],
        t = [];

    function u() {
        return v(r)
    }

    function v(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function w(a, c) {
        var d = {};
        (i || (i = b("ErrorGuard"))).applyWithGuard(z, null, [a, c, d]);
        i.applyWithGuard(A, null, [a, c, d]);
        r.push(a);
        s.push(c);
        t.push(d)
    }

    function x(a, b, c) {
        l.forEach(function(d) {
            var e = d.onNewContextCreated(u(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function y(a, b, c) {
        m.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function z(a, b, c) {
        l.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function A(a, b, c) {
        l.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function B() {
        var a = u(),
            c = v(s),
            d = v(t);
        if (a == null || c == null || d == null) {
            b("FBLogger")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            p = !1;
            return
        }(i || (i = b("ErrorGuard"))).applyWithGuard(y, null, [a, c, d]);
        p = !a.isRoot;
        r.pop();
        s.pop();
        t.pop()
    }
    var C = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            var e;
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var f = D(d);
            if (a[n]) return a;
            var l;
            p && (l = u());
            var m = {},
                r = 0,
                s = void 0;
            e = (e = (h || (h = b("Env"))).deferred_stack_trace_rate) != null ? e : 0;
            d && d.registerCallStack && e > 0 && Math.random() < 1 / e && (s = new Error("deferred execution source"));
            d = function() {
                var d = (j || (j = b("performanceAbsoluteNow")))(),
                    e = o++,
                    g = {
                        contextID: e,
                        name: c,
                        isRoot: !p,
                        executionNumber: r++,
                        meta: f,
                        absBeginTimeMs: d
                    };
                w(g, m);
                if (l != null) {
                    var h = !!f.isContinuation;
                    l.isRoot ? (g.indirectParentID = l.contextID, g.isEdgeContinuation = h) : (g.indirectParentID = l.indirectParentID, g.isEdgeContinuation = !!(h && l.isEdgeContinuation))
                }
                var n = (k || (k = b("WorkerUtils"))).isWorkerContext();
                p = !0;
                try {
                    for (var t = arguments.length, v = new Array(t), x = 0; x < t; x++) v[x] = arguments[x];
                    if (!g.isRoot || n) return a.apply(this, v);
                    else return (i || (i = b("ErrorGuard"))).applyWithGuard(a, this, v, {
                        name: "TimeSlice" + (c ? ": " + c : ""),
                        deferredSource: s
                    })
                } finally {
                    var y = u();
                    if (y == null) b("FBLogger")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), p = !1;
                    else {
                        var z = y.isRoot,
                            A = y.contextID,
                            C = y.indirectParentID,
                            D = y.isEdgeContinuation,
                            E = (j || (j = b("performanceAbsoluteNow")))();
                        y.absEndTimeMs = E;
                        if (z && d != null) {
                            var F = babelHelpers["extends"]({
                                begin: d,
                                end: E,
                                id: A,
                                indirectParentID: C,
                                representsExecution: !0,
                                isEdgeContinuation: l && D,
                                guard: c
                            }, f, a.__SMmeta);
                            q.pushElement(F)
                        }
                        B()
                    }
                }
            };
            d[n] = {};
            (i || (i = b("ErrorGuard"))).applyWithGuard(x, null, [m, c, f]);
            return d
        },
        copyGuardForWrapper: function(a, b) {
            a && a[n] && (b[n] = a[n]);
            return b
        },
        getContext: function() {
            return u()
        },
        getGuardedContinuation: function(a) {
            function b(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }
            return C.guard(b, a, {
                propagationType: C.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(C, n, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return r.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            var b = !1;
            for (var c = 0; c < l.length; c++)
                if (l[c].getBeforeID() > a.getBeforeID()) {
                    l.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || l.push(a);
            for (var c = 0; c < m.length; c++)
                if (m[c].getAfterID() > a.getAfterID()) {
                    m.splice(c, 0, a);
                    return
                }
            m.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < r.length; b++) {
                var c = r[b],
                    d = s[b],
                    e = t[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                t[b] = e
            }
        },
        getBuffer: function() {
            return q
        }
    };

    function D(a) {
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case C.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case C.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case C.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    b("wrapFunction").setWrapper(function(a, b) {
        return C.guard(a, b, {
            registerCallStack: !0
        })
    }, "entry");
    a.TimeSlice = C;
    e.exports = C
}), 6);
__d("URLFragmentPrelude", ["URLFragmentPreludeConfig", "requireWeak"], (function(a, b, c, d, e, f) {
    a = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;
    var g = /^[^\/\\#!\.\?\*\&\^=]+$/;
    window.location.href.replace(a, function(a, c, d, e) {
        var f;
        f = a = c + (d ? "?" + d : "");
        if (e) {
            var h = e.replace(/^(!|%21)/, "");
            h = h.charAt(0);
            if (h !== "/" && h !== "\\" && b("URLFragmentPreludeConfig").hashtagRedirect) {
                h = e.match(g);
                h && !d && c == "/" && (f = "/hashtag/" + e)
            }
        }
        f != a && (b("requireWeak")("ODS", function(a) {
            a.bumpEntityKey(3216, "url_fragment_prelude", "blue_redirected")
        }), window.location.replace(f))
    })
}), null);
__d("Visibility", ["BaseEventEmitter", "ExecutionEnvironment", "TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h, i;
    d("ExecutionEnvironment").canUseDOM && (document.hidden !== void 0 ? (h = "hidden", i = "visibilitychange") : document.mozHidden !== void 0 ? (h = "mozHidden", i = "mozvisibilitychange") : document.msHidden !== void 0 ? (h = "msHidden", i = "msvisibilitychange") : document.webkitHidden !== void 0 && (h = "webkitHidden", i = "webkitvisibilitychange"));
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = h, c.hiddenEvent = i, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.isHidden = function() {
            return h ? document[h] : !1
        };
        c.isSupported = function() {
            return d("ExecutionEnvironment").canUseDOM && document.addEventListener && i !== void 0
        };
        return b
    }(c("BaseEventEmitter"));
    var j = new a();
    j.isSupported() && document.addEventListener(j.hiddenEvent, c("TimeSlice").guard(function(a) {
        j.emit(j.isHidden() ? j.HIDDEN : j.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    b = j;
    g["default"] = b
}), 98);
__d("VisibilityListener", ["Visibility", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = Date.now() - c("performanceNow")(),
        i = [],
        j = !1,
        k = 1e4;
    i.push({
        key: h,
        value: c("Visibility").isHidden()
    });

    function l(a, b) {
        if (j || i.length > k) {
            j = !0;
            return
        }
        i.push({
            key: a + h,
            value: b
        })
    }
    c("Visibility").addListener(c("Visibility").VISIBLE, function(a) {
        l(a.changeTime, !1)
    });
    c("Visibility").addListener(c("Visibility").HIDDEN, function(a) {
        l(a.changeTime, !0)
    });

    function m(a, b) {
        if (j) return null;
        var d;
        for (var a = i.length - 1; a >= 0; a--)
            if (i[a].key <= b) {
                d = i.slice(0, a + 1);
                break
            }
        if (d === void 0) return null;
        d[d.length - 1].value !== c("Visibility").isHidden() && (d[d.length] = {
            key: b,
            value: c("Visibility").isHidden()
        });
        return d
    }

    function a(a, b) {
        var d = m(a, b);
        if (!d) return null;
        if (d.length < 2) return c("Visibility").isHidden() ? b - a : 0;
        var e = d.length - 1;
        b = d[e].value ? b - d[e].key : 0;
        for (--e; e > 0; e--)
            if (d[e].key > a) d[e].value && (b += d[e + 1].key - d[e].key);
            else break;
        d[e].value && (b = d[e + 1].key - a);
        return b
    }

    function b() {
        return !0
    }
    g.getHiddenTimings = m;
    g.getHiddenTime = a;
    g.supported = b
}), 99);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f) {
    var g;
    if ((g || (g = b("performance"))).now)
        if ((g || (g = b("performance"))).timing && (g || (g = b("performance"))).timing.navigationStart) a = function() {
            return (g || (g = b("performance"))).timing.navigationStart
        };
        else {
            if (typeof window._cstart === "number") a = function() {
                return window._cstart
            };
            else {
                var h = Date.now();
                a = function() {
                    return h
                }
            }
            a.isPolyfilled = !0
        }
    else a = function() {
        return 0
    }, a.isPolyfilled = !0;
    e.exports = a
}), null);
__d("bootstrapWebSession", ["WebSession", "WebSessionDefaultTimeoutMs", "performanceNavigationStart"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        a = c("performanceNavigationStart")() || a;
        return Number.isInteger(a) ? a : null
    }
    var i = !1;

    function a(a) {
        if (i === !0) return;
        i = !0;
        a = h(a);
        a != null && a > 0 && d("WebSession").extend(a + c("WebSessionDefaultTimeoutMs"))
    }
    g["default"] = a
}), 98);
__d("clearIntervalBlue", [], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
    f["default"] = b
}), 66);
__d("clearTimeoutBlue", [], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function b(a) {
        g(a)
    }
    f["default"] = b
}), 66);
__d("legacy:arbiter", ["Arbiter"], (function(a, b, c, d, e, f) {
    a.Arbiter = b("Arbiter")
}), 3);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("legacy:constructor-cache", ["JSCC"], (function(a, b, c, d, e, f) {
    a.JSCC = b("JSCC")
}), 3);
__d("legacy:css", ["CSS"], (function(a, b, c, d, e, f) {
    a.CSS = b("CSS")
}), 3);
__d("legacy:dom-core", ["$", "ge"], (function(a, b, c, d, e, f) {
    a.$ = a.$ || b("$"), a.ge = b("ge")
}), 3);
__d("legacy:emptyFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a.emptyFunction = b("emptyFunction")
}), 3);
__d("goURI", ["URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("URI").go
}), 98);
__d("legacy:goURI", ["goURI"], (function(a, b, c, d, e, f) {
    a.goURI = b("goURI")
}), 3);
__d("Run", ["cr:925100"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        __domContentCallback: (a = b("cr:925100")).__domContentCallback,
        __onloadCallback: a.__onloadCallback,
        __removeHook: a.__removeHook,
        onAfterLoad: a.onAfterLoad,
        onAfterUnload: a.onAfterUnload,
        onBeforeUnload: a.onBeforeUnload,
        maybeOnBeforeUnload: a.onBeforeUnload,
        onCleanupOrLeave: a.onCleanupOrLeave,
        onLeave: a.onLeave,
        onLoad: a.onLoad,
        onUnload: a.onUnload
    }
}), null);
__d("legacy:onload", ["PageEvents", "Run"], (function(a, b, c, d, e, f) {
    a.PageEvents = b("PageEvents");
    a.onloadRegister_DEPRECATED = (c = b("Run")).onLoad;
    a.onloadRegister = function() {
        return b("Run").onLoad.apply(this, arguments)
    };
    a.onafterloadRegister_DEPRECATED = c.onAfterLoad;
    a.onafterloadRegister = function() {
        return b("Run").onAfterLoad.apply(this, arguments)
    };
    a.onleaveRegister = c.onLeave;
    a.onbeforeunloadRegister = c.onBeforeUnload;
    a.onunloadRegister = c.onUnload
}), 3);
__d("legacy:parent", ["Parent"], (function(a, b, c, d, e, f) {
    a.Parent = b("Parent")
}), 3);
__d("LowerDomainRegex", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = /(^|\.)(facebook|facebookcorewwwi|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd|workplace|bulletin|www.novi)\..*/;
    b = /\.(facebook\.sg|facebookcorewwwi\.(?:test)?onion|facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd\.onion|workplace\.com|novi\.com|bulletin\.com)$/;
    f.domainRegex = a;
    f.hostnameRegex = b
}), 66);
__d("lowerFacebookDomain", ["LowerDomainRegex"], (function(a, b, c, d, e, f, g) {
    b = window.location.hostname.match(d("LowerDomainRegex").hostnameRegex);
    var h = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        h = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == h
    };

    function a() {
        document.domain = h
    }
    c = a;
    g["default"] = c
}), 98);
__d("lowerDomain", ["LowerDomainRegex", "lowerFacebookDomain"], (function(a, b, c, d, e, f, g) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(d("LowerDomainRegex").domainRegex) && c("lowerFacebookDomain")()
}), 34);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("setIntervalAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetInterval || a.setInterval;

    function b(b, d) {
        var e = c("TimeSlice").guard(b, "setInterval");
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
        return Function.prototype.apply.call(h, a, [e, d].concat(g))
    }
    g["default"] = b
}), 98);
__d("setTimeoutAcrossTransitionsBlue", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.__fbNativeSetTimeout || a.setTimeout;

    function b(b, d) {
        var e = c("TimeSlice").guard(b, "setTimeout", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) g[i - 2] = arguments[i];
        return Function.prototype.apply.call(h, a, [e, d].concat(g))
    }
    g["default"] = b
}), 98);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    c = b;
    f["default"] = c
}), 66);
__d("setTimeoutBlue", ["TimeSlice", "TimerStorage", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        var d, e = function() {
            c("TimerStorage").unset(c("TimerStorage").TIMEOUT, d);
            for (var b = arguments.length, e = new Array(b), f = 0; f < b; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        c("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = c("setTimeoutAcrossTransitions").apply(void 0, [e, b].concat(g));
        c("TimerStorage").set(c("TimerStorage").TIMEOUT, d);
        return d
    }
    g["default"] = a
}), 98);