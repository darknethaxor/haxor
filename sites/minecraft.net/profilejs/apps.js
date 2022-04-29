! function() {
    var e, t, n, r, o = {
            4258: function(e, t, n) {
                var r, o, i, c = n(9142);

                function u(e) {
                    return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   v4.2.5+7f2b526d
                 */
                i = function() {
                    "use strict";

                    function e(e) {
                        return "function" == typeof e
                    }
                    var t = Array.isArray ? Array.isArray : function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        },
                        r = 0,
                        o = void 0,
                        i = void 0,
                        a = function(e, t) {
                            b[r] = e, b[r + 1] = t, 2 === (r += 2) && (i ? i(v) : w())
                        },
                        s = "undefined" != typeof window ? window : void 0,
                        f = s || {},
                        l = f.MutationObserver || f.WebKitMutationObserver,
                        d = "undefined" == typeof self && void 0 !== c && "[object process]" === {}.toString.call(c),
                        h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function p() {
                        var e = setTimeout;
                        return function() {
                            return e(v, 1)
                        }
                    }
                    var b = new Array(1e3);

                    function v() {
                        for (var e = 0; e < r; e += 2)(0, b[e])(b[e + 1]), b[e] = void 0, b[e + 1] = void 0;
                        r = 0
                    }
                    var m, y, g, _, w = void 0;

                    function T(e, t) {
                        var n = this,
                            r = new this.constructor(S);
                        void 0 === r[j] && D(r);
                        var o = n._state;
                        if (o) {
                            var i = arguments[o - 1];
                            a((function() {
                                return q(o, r, i, n._result)
                            }))
                        } else N(n, r, e, t);
                        return r
                    }

                    function A(e) {
                        if (e && "object" === u(e) && e.constructor === this) return e;
                        var t = new this(S);
                        return O(t, e), t
                    }
                    d ? w = function() {
                        return c.nextTick(v)
                    } : l ? (y = 0, g = new l(v), _ = document.createTextNode(""), g.observe(_, {
                        characterData: !0
                    }), w = function() {
                        _.data = y = ++y % 2
                    }) : h ? ((m = new MessageChannel).port1.onmessage = v, w = function() {
                        return m.port2.postMessage(0)
                    }) : w = void 0 === s ? function() {
                        try {
                            var e = Function("return this")().require("vertx");
                            return void 0 !== (o = e.runOnLoop || e.runOnContext) ? function() {
                                o(v)
                            } : p()
                        } catch (e) {
                            return p()
                        }
                    }() : p();
                    var j = Math.random().toString(36).substring(2);

                    function S() {}
                    var E = void 0,
                        C = {
                            error: null
                        };

                    function k(e) {
                        try {
                            return e.then
                        } catch (e) {
                            return C.error = e, C
                        }
                    }

                    function P(t, n, r) {
                        n.constructor === t.constructor && r === T && n.constructor.resolve === A ? function(e, t) {
                            1 === t._state ? L(e, t._result) : 2 === t._state ? M(e, t._result) : N(t, void 0, (function(t) {
                                return O(e, t)
                            }), (function(t) {
                                return M(e, t)
                            }))
                        }(t, n) : r === C ? (M(t, C.error), C.error = null) : void 0 === r ? L(t, n) : e(r) ? function(e, t, n) {
                            a((function(e) {
                                var r = !1,
                                    o = function(e, t, n, r) {
                                        try {
                                            e.call(t, n, r)
                                        } catch (e) {
                                            return e
                                        }
                                    }(n, t, (function(n) {
                                        r || (r = !0, t !== n ? O(e, n) : L(e, n))
                                    }), (function(t) {
                                        r || (r = !0, M(e, t))
                                    }), e._label);
                                !r && o && (r = !0, M(e, o))
                            }), e)
                        }(t, n, r) : L(t, n)
                    }

                    function O(e, t) {
                        var n, r;
                        e === t ? M(e, new TypeError("You cannot resolve a promise with itself")) : (r = u(n = t), null === n || "object" !== r && "function" !== r ? L(e, t) : P(e, t, k(t)))
                    }

                    function x(e) {
                        e._onerror && e._onerror(e._result), F(e)
                    }

                    function L(e, t) {
                        e._state === E && (e._result = t, e._state = 1, 0 !== e._subscribers.length && a(F, e))
                    }

                    function M(e, t) {
                        e._state === E && (e._state = 2, e._result = t, a(x, e))
                    }

                    function N(e, t, n, r) {
                        var o = e._subscribers,
                            i = o.length;
                        e._onerror = null, o[i] = t, o[i + 1] = n, o[i + 2] = r, 0 === i && e._state && a(F, e)
                    }

                    function F(e) {
                        var t = e._subscribers,
                            n = e._state;
                        if (0 !== t.length) {
                            for (var r = void 0, o = void 0, i = e._result, c = 0; c < t.length; c += 3) r = t[c], o = t[c + n], r ? q(n, r, o, i) : o(i);
                            e._subscribers.length = 0
                        }
                    }

                    function q(t, n, r, o) {
                        var i = e(r),
                            c = void 0,
                            u = void 0,
                            a = void 0,
                            s = void 0;
                        if (i) {
                            if ((c = function(e, t) {
                                    try {
                                        return e(t)
                                    } catch (e) {
                                        return C.error = e, C
                                    }
                                }(r, o)) === C ? (s = !0, u = c.error, c.error = null) : a = !0, n === c) return void M(n, new TypeError("A promises callback cannot return that same promise."))
                        } else c = o, a = !0;
                        n._state !== E || (i && a ? O(n, c) : s ? M(n, u) : 1 === t ? L(n, c) : 2 === t && M(n, c))
                    }
                    var B = 0;

                    function D(e) {
                        e[j] = B++, e._state = void 0, e._result = void 0, e._subscribers = []
                    }
                    var Y = function() {
                            function e(e, n) {
                                this._instanceConstructor = e, this.promise = new e(S), this.promise[j] || D(this.promise), t(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? L(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && L(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return e.prototype._enumerate = function(e) {
                                for (var t = 0; this._state === E && t < e.length; t++) this._eachEntry(e[t], t)
                            }, e.prototype._eachEntry = function(e, t) {
                                var n = this._instanceConstructor,
                                    r = n.resolve;
                                if (r === A) {
                                    var o = k(e);
                                    if (o === T && e._state !== E) this._settledAt(e._state, t, e._result);
                                    else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                                    else if (n === K) {
                                        var i = new n(S);
                                        P(i, e, o), this._willSettleAt(i, t)
                                    } else this._willSettleAt(new n((function(t) {
                                        return t(e)
                                    })), t)
                                } else this._willSettleAt(r(e), t)
                            }, e.prototype._settledAt = function(e, t, n) {
                                var r = this.promise;
                                r._state === E && (this._remaining--, 2 === e ? M(r, n) : this._result[t] = n), 0 === this._remaining && L(r, this._result)
                            }, e.prototype._willSettleAt = function(e, t) {
                                var n = this;
                                N(e, void 0, (function(e) {
                                    return n._settledAt(1, t, e)
                                }), (function(e) {
                                    return n._settledAt(2, t, e)
                                }))
                            }, e
                        }(),
                        K = function() {
                            function t(e) {
                                this[j] = B++, this._result = this._state = void 0, this._subscribers = [], S !== e && ("function" != typeof e && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(), this instanceof t ? function(e, t) {
                                    try {
                                        t((function(t) {
                                            O(e, t)
                                        }), (function(t) {
                                            M(e, t)
                                        }))
                                    } catch (t) {
                                        M(e, t)
                                    }
                                }(this, e) : function() {
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                }())
                            }
                            return t.prototype.catch = function(e) {
                                return this.then(null, e)
                            }, t.prototype.finally = function(t) {
                                var n = this,
                                    r = n.constructor;
                                return e(t) ? n.then((function(e) {
                                    return r.resolve(t()).then((function() {
                                        return e
                                    }))
                                }), (function(e) {
                                    return r.resolve(t()).then((function() {
                                        throw e
                                    }))
                                })) : n.then(t, t)
                            }, t
                        }();
                    return K.prototype.then = T, K.all = function(e) {
                        return new Y(this, e).promise
                    }, K.race = function(e) {
                        var n = this;
                        return t(e) ? new n((function(t, r) {
                            for (var o = e.length, i = 0; i < o; i++) n.resolve(e[i]).then(t, r)
                        })) : new n((function(e, t) {
                            return t(new TypeError("You must pass an array to race."))
                        }))
                    }, K.resolve = A, K.reject = function(e) {
                        var t = new this(S);
                        return M(t, e), t
                    }, K._setScheduler = function(e) {
                        i = e
                    }, K._setAsap = function(e) {
                        a = e
                    }, K._asap = a, K.polyfill = function() {
                        var e = void 0;
                        if (void 0 !== n.g) e = global;
                        else if ("undefined" != typeof self) e = self;
                        else try {
                            e = Function("return this")()
                        } catch (e) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var t = e.Promise;
                        if (t) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(t.resolve())
                            } catch (e) {}
                            if ("[object Promise]" === r && !t.cast) return
                        }
                        e.Promise = K
                    }, K.Promise = K, K
                }, "object" === u(t) ? e.exports = i() : void 0 === (o = "function" == typeof(r = i) ? r.call(t, n, t, e) : r) || (e.exports = o)
            },
            9142: function(e) {
                var t, n, r = e.exports = {};

                function o() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function c(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        t = o
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        n = i
                    }
                }();
                var u, a = [],
                    s = !1,
                    f = -1;

                function l() {
                    s && u && (s = !1, u.length ? a = u.concat(a) : f = -1, a.length && d())
                }

                function d() {
                    if (!s) {
                        var e = c(l);
                        s = !0;
                        for (var t = a.length; t;) {
                            for (u = a, a = []; ++f < t;) u && u[f].run();
                            f = -1, t = a.length
                        }
                        u = null, s = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function h(e, t) {
                    this.fun = e, this.array = t
                }

                function p() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    a.push(new h(e, t)), 1 !== a.length || s || c(d)
                }, h.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            }
        },
        i = {};

    function c(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return o[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = o, c.amdO = {}, c.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return c.d(t, {
                a: t
            }), t
        }, c.d = function(e, t) {
            for (var n in t) c.o(t, n) && !c.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, c.f = {}, c.e = function(e) {
            return Promise.all(Object.keys(c.f).reduce((function(t, n) {
                return c.f[n](e, t), t
            }), []))
        }, c.u = function(e) {
            return ({
                25: "@mojang~answerSecurityQuestions",
                429: "polyfills",
                505: "theme",
                592: "common",
                691: "@mojang~passwordReset",
                713: "@mojang~yggdrasilWebProfile",
                722: "@mojang~accountSecurity",
                909: "@mojang~passwordChange",
                971: "@mojang~profileRedeemCode"
            }[e] || e) + ".chunk." + {
                12: "d809326873acea28c998",
                25: "7e66f13794e54d07409a",
                70: "93e9a9a06367a40e9771",
                87: "1271bc848ddeb4c3c51b",
                344: "dfa704837d58eddde377",
                377: "1d6128a8cc45d6f94517",
                429: "7e507d6e27a0c6017f1d",
                478: "3ef9e60a9a037681338c",
                505: "4c6d10a3cb94ec5424d6",
                533: "1cf0a6275b4674b607d0",
                592: "756038aba9bf1aab4390",
                598: "70bf499cedce7ead2367",
                601: "1941fc1e288e153e9efa",
                644: "fbcaafa804635ea8b516",
                691: "5b6e32c8e96d79878083",
                713: "3e64b2a60f63c6fde740",
                722: "91dd4bcdab3672a04d29",
                843: "4449aee130471f1064b8",
                873: "8a63c1d291a37b750809",
                909: "7cd91d7d499e76f68d6b",
                936: "aa2ef37602a22acbdf48",
                971: "119f83e8b59b13001937"
            }[e] + ".js"
        }, c.miniCssF = function(e) {
            return 55 === e ? "undefined/apps.css" : e + ".chunk." + {
                12: "31d6cfe0d16ae931b73c",
                25: "31d6cfe0d16ae931b73c",
                70: "31d6cfe0d16ae931b73c",
                87: "31d6cfe0d16ae931b73c",
                344: "31d6cfe0d16ae931b73c",
                377: "31d6cfe0d16ae931b73c",
                429: "31d6cfe0d16ae931b73c",
                478: "31d6cfe0d16ae931b73c",
                505: "54a21ce3b33a36ba6329",
                533: "31d6cfe0d16ae931b73c",
                592: "31d6cfe0d16ae931b73c",
                598: "31d6cfe0d16ae931b73c",
                601: "31d6cfe0d16ae931b73c",
                644: "31d6cfe0d16ae931b73c",
                691: "31d6cfe0d16ae931b73c",
                713: "31d6cfe0d16ae931b73c",
                722: "31d6cfe0d16ae931b73c",
                843: "31d6cfe0d16ae931b73c",
                873: "31d6cfe0d16ae931b73c",
                909: "31d6cfe0d16ae931b73c",
                936: "31d6cfe0d16ae931b73c",
                971: "31d6cfe0d16ae931b73c"
            }[e] + ".css"
        }, c.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), c.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, e = {}, t = "minecraft-net-coreapps:", c.l = function(n, r, o, i) {
            if (e[n]) e[n].push(r);
            else {
                var u, a;
                if (void 0 !== o)
                    for (var s = document.getElementsByTagName("script"), f = 0; f < s.length; f++) {
                        var l = s[f];
                        if (l.getAttribute("src") == n || l.getAttribute("data-webpack") == t + o) {
                            u = l;
                            break
                        }
                    }
                u || (a = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.setAttribute("data-webpack", t + o), u.src = n), e[n] = [r];
                var d = function(t, r) {
                        u.onerror = u.onload = null, clearTimeout(h);
                        var o = e[n];
                        if (delete e[n], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function(e) {
                                return e(r)
                            })), t) return t(r)
                    },
                    h = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: u
                    }), 12e4);
                u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), a && document.head.appendChild(u)
            }
        }, c.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, c.nmd = function(e) {
            return e.paths = [], e.children || (e.children = []), e
        }, c.j = 55, c.p = "/profilejs/1b3b46799d01ab6f2f1d/", n = function(e) {
            return new Promise((function(t, n) {
                var r = c.miniCssF(e),
                    o = c.p + r;
                if (function(e, t) {
                        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                            var o = (c = n[r]).getAttribute("data-href") || c.getAttribute("href");
                            if ("stylesheet" === c.rel && (o === e || o === t)) return c
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            var c;
                            if ((o = (c = i[r]).getAttribute("data-href")) === e || o === t) return c
                        }
                    }(r, o)) return t();
                ! function(e, t, n, r) {
                    var o = document.createElement("link");
                    o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(i) {
                        if (o.onerror = o.onload = null, "load" === i.type) n();
                        else {
                            var c = i && ("load" === i.type ? "missing" : i.type),
                                u = i && i.target && i.target.href || t,
                                a = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                            a.code = "CSS_CHUNK_LOAD_FAILED", a.type = c, a.request = u, o.parentNode.removeChild(o), r(a)
                        }
                    }, o.href = t, document.head.appendChild(o)
                }(e, o, t, n)
            }))
        }, r = {
            55: 0
        }, c.f.miniCss = function(e, t) {
            r[e] ? t.push(r[e]) : 0 !== r[e] && {
                505: 1
            }[e] && t.push(r[e] = n(e).then((function() {
                r[e] = 0
            }), (function(t) {
                throw delete r[e], t
            })))
        },
        function() {
            var e = {
                55: 0
            };
            c.f.j = function(t, n) {
                var r = c.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else {
                        var o = new Promise((function(n, o) {
                            r = e[t] = [n, o]
                        }));
                        n.push(r[2] = o);
                        var i = c.p + c.u(t),
                            u = new Error;
                        c.l(i, (function(n) {
                            if (c.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                                var o = n && ("load" === n.type ? "missing" : n.type),
                                    i = n && n.target && n.target.src;
                                u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", u.name = "ChunkLoadError", u.type = o, u.request = i, r[1](u)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, n) {
                    for (var r, o, i = n[0], u = n[1], a = n[2], s = 0, f = []; s < i.length; s++) o = i[s], c.o(e, o) && e[o] && f.push(e[o][0]), e[o] = 0;
                    for (r in u) c.o(u, r) && (c.m[r] = u[r]);
                    for (a && a(c), t && t(n); f.length;) f.shift()()
                },
                n = self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }(),
        function() {
            "use strict";
            "function" != typeof window.Promise && c(4258).polyfill(), c.e(505).then(c.bind(c, 2811)), Promise.all([c.e(429), c.e(592), c.e(377), c.e(12), c.e(70), c.e(87), c.e(644)]).then(c.bind(c, 6282)), Promise.all([c.e(429), c.e(592), c.e(713), c.e(722), c.e(971), c.e(25), c.e(909), c.e(377), c.e(12), c.e(843), c.e(87), c.e(598)]).then(c.bind(c, 4354))
        }()
}();
//# sourceMappingURL=apps.js.map