(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [12, 116], {
        7439: function(t, e, n) {
            "use strict";

            function r() {
                return (r = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        9736: function(t, e, n) {
            "use strict";

            function r(t, e) {
                if (null == t) return {};
                var n, r, o = {},
                    i = Object.keys(t);
                for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);
                return o
            }
            n.d(e, {
                Z: function() {
                    return r
                }
            })
        },
        1917: function(t, e, n) {
            "use strict";
            n.d(e, {
                N: function() {
                    return l
                }
            });
            var r = n(9474);

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        a(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function a(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var u = i({
                    relyingPartyKey: r.iZ,
                    xboxSisuTestParam: void 0,
                    "url.xboxLoginReturnUrl": r.iZ,
                    "url.xboxRegisterReturnUrl": r.iZ,
                    "url.xboxLiveUrl": r.iZ,
                    "url.plafabXboxLiveUrl": r.iZ,
                    "url.marketplaceMinecraft": r.iZ,
                    "url.pocketRelamsMinecraft": r.iZ,
                    sisuCobrandId: r.iZ,
                    xboxMSAClientId: r.iZ,
                    environmentName: r.iZ
                }, r.gZ),
                c = i(i(i({}, u), r.Di), window.msaUtilsConfig),
                l = (0, r.Gu)(c, "msaUtilsConfig")
        },
        6250: function(t, e, n) {
            "use strict";
            n.d(e, {
                vS: function() {
                    return s
                },
                Fk: function() {
                    return I
                },
                oy: function() {
                    return a
                },
                Y8: function() {
                    return T
                },
                HP: function() {
                    return u
                },
                GX: function() {
                    return C.GX
                },
                E$: function() {
                    return C.E$
                },
                WR: function() {
                    return C.WR
                },
                RF: function() {
                    return C.RF
                },
                w1: function() {
                    return C.w1
                },
                YK: function() {
                    return g
                },
                li: function() {
                    return y
                },
                QL: function() {
                    return A
                },
                s5: function() {
                    return b
                }
            });
            var r = n(8709),
                o = n(1917);

            function i(t, e) {
                var n = new RegExp(/\?.+/g),
                    r = n.test(t) || n.test(e) ? "&env=" : "?env=";
                return "" !== o.N.environmentName ? r + o.N.environmentName : ""
            }

            function a(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e.xboxState ? e.xboxState : o.N.msaStateLoginParam,
                    r = e.returnURL ? e.returnURL : o.N["url.xboxLoginReturnUrl"],
                    a = i(t, r),
                    u = encodeURIComponent(r + t + a),
                    c = ["state=".concat(n), "cobrandId=".concat(o.N.sisuCobrandId), o.N.xboxSisuTestParam, "tid=".concat(o.N.titleId), "ru=".concat(u), "aid=".concat(o.N.sisuAppId)].filter(Boolean).join("&");
                return "".concat(o.N["endpoint.xboxAuthUrl"], "?").concat(c)
            }

            function u(t) {
                var e = i(t),
                    n = o.N["url.xboxRegisterReturnUrl"] + t + e,
                    r = ["state=signup", "signup=1", "cobrandId=".concat(o.N.sisuCobrandId), o.N.xboxSisuTestParam, "tid=".concat(o.N.titleId), "ru=".concat(encodeURI(n)), "aid=".concat(o.N.sisuAppId)].join("&");
                return "".concat(o.N["endpoint.xboxAuthUrl"], "?").concat(r)
            }
            window.buildMsaLoginUrl = a;
            var c = n(16),
                l = n(6089),
                s = function(t) {
                    var e = t.returnURL,
                        n = void 0 === e ? "" : e,
                        o = t.xboxState,
                        i = {
                            returnURL: n,
                            xboxState: void 0 === o ? "" : o
                        };
                    return r.useEffect((function() {
                        window.location.replace(a(window.location.search, i))
                    }), []), r.createElement(c.Si, null, r.createElement(c.aN, null, r.createElement(l.T, null, "Logging in...")))
                },
                f = n(2374),
                d = n(2846),
                p = n(1849),
                h = n(4541),
                v = n(3795),
                m = n(3652),
                y = function() {
                    var t = new URLSearchParams(window.location.search).get("view");
                    return !(!t || "mojang" !== t.toLowerCase())
                },
                g = function() {
                    var t = new URLSearchParams(window.location.search).get("view");
                    return !(!t || "msa" !== t.toLowerCase())
                },
                b = function() {
                    m.set(o.N["cookie.entitlementState"], "true", o.N["cookie.options"])
                };

            function w(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(n), !0).forEach((function(e) {
                        x(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function x(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function E(t, e, n, r, o, i, a) {
                try {
                    var u = t[i](a),
                        c = u.value
                } catch (t) {
                    return void n(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var S = function(t, e, n, r) {
                    var o, i = arguments.length,
                        a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : O(Reflect)) && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                    else
                        for (var u = t.length - 1; u >= 0; u--)(o = t[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                    return i > 3 && a && Object.defineProperty(e, n, a), a
                },
                j = function t(e, n) {
                    var r = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.api = e, this.setSession = n, this.state = {
                        loggedIn: !1,
                        error: !1,
                        authenticating: !1
                    }, this.login = function() {
                        var t, e = (t = regeneratorRuntime.mark((function t(e) {
                            var n, i, a, u, c, l, s = arguments;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = s.length > 1 && void 0 !== s[1] ? s[1] : p.v, r.setState(k(k({}, r.state), {}, {
                                            authenticating: !0
                                        })), t.next = 4, r.api.loginWithXbox(e);
                                    case 4:
                                        if (!(i = t.sent).error) {
                                            t.next = 8;
                                            break
                                        }
                                        return r.setState({
                                            error: !0,
                                            loggedIn: !1,
                                            authenticating: !1
                                        }), t.abrupt("return");
                                    case 8:
                                        if (i.ok) {
                                            t.next = 11;
                                            break
                                        }
                                        return r.setState({
                                            error: !1,
                                            loggedIn: !1,
                                            authenticating: !1
                                        }), t.abrupt("return");
                                    case 11:
                                        return a = i.data.access_token, t.next = 14, n(a);
                                    case 14:
                                        if (u = t.sent, !i.ok) {
                                            t.next = 22;
                                            break
                                        }
                                        return r.setSession(a, ""), r.setState({
                                            error: !1,
                                            loggedIn: !0,
                                            authenticating: !1
                                        }), c = o.N["minecraft.entitlements"], l = u.data.items.filter((function(t) {
                                            var e = t.name;
                                            return c.includes(e)
                                        })), !u.error && u.data.items.length > 0 && l.length > 0 && b(), t.abrupt("return");
                                    case 22:
                                        r.setState({
                                            error: !1,
                                            loggedIn: !1,
                                            authenticating: !1
                                        });
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(e, n);

                                function a(t) {
                                    E(i, r, o, a, u, "next", t)
                                }

                                function u(t) {
                                    E(i, r, o, a, u, "throw", t)
                                }
                                a(void 0)
                            }))
                        });
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.setState = function(t) {
                        r.state = t
                    }
                };
            S([f.LO], j.prototype, "state", void 0), S([f.aD], j.prototype, "setState", void 0);
            var A = new j((0, h.e)(v.Z), d.K),
                C = n(7569),
                R = function() {
                    return r.createElement(c.Zb, {
                        bgColor: "white",
                        className: "p-sm-5 p-4"
                    }, r.createElement(c.eW, null, r.createElement(c.ll, {
                        className: "text-center mb-4",
                        heading: "h2"
                    }, r.createElement(l.T, null, "Oops!")), r.createElement(c.SK, {
                        className: "text-center"
                    }, r.createElement(l.T, null, "We could not validate your access, please try to login again.")), r.createElement(c.iR, null, r.createElement(c.Qj, {
                        "data-aem-contentname": "Login linkbutton",
                        href: a(window.location.search),
                        colorVariant: "primary",
                        block: !0
                    }, r.createElement(l.T, null, "Login")))))
                },
                P = n(5487),
                I = function(t) {
                    var e, n, o = t.children,
                        i = t.store,
                        a = void 0 === i ? A : i,
                        u = t.token,
                        l = void 0 === u ? (e = (0, C.E$)(window.location.hash), n = (0, C.GX)(e), (0, C.w1)(n)) : u;
                    return r.useEffect((function() {
                        void 0 !== l && a && a.login && a.login(l)
                    }), [l, a]), (0, P.SZ)((function() {
                        var t = a.state,
                            e = t.error,
                            n = t.authenticating;
                        t.loggedIn;
                        return l ? n ? r.createElement(c.Si, null, r.createElement(c.aN, null, "Loading...")) : e ? r.createElement(R, null) : r.createElement(r.Fragment, null, o) : r.createElement(r.Fragment, null, o)
                    }))
                },
                V = o.N.xboxMSAClientId;

            function T(t, e) {
                var n = i(t),
                    r = e ? "/login" + t : t,
                    a = encodeURIComponent(o.N["url.xboxLogoutReturnUrl"] + r + n),
                    u = ["state=logout", "ru=".concat(a)].join("&"),
                    c = encodeURIComponent("".concat(o.N["endpoint.xboxOAuthUrl"], "signout?").concat(u));
                return "".concat(o.N["endpoint.msaOAuthUrl"], "?client_id=").concat(V, "&redirect_uri=").concat(c)
            }
        },
        7569: function(t, e, n) {
            "use strict";
            n.d(e, {
                E$: function() {
                    return u
                },
                GX: function() {
                    return c
                },
                WR: function() {
                    return l
                },
                RF: function() {
                    return s
                },
                w1: function() {
                    return f
                },
                vJ: function() {
                    return d
                }
            });
            var r = n(1917),
                o = n(4115);

            function i(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var n = [],
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        o = !0, i = t
                    } finally {
                        try {
                            r || null == u.return || u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return a(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = function(t) {
                    return new URLSearchParams(t.replace("#", "?")).get("accessToken")
                },
                c = function(t) {
                    try {
                        return (0, o.$)(t)
                    } catch (t) {
                        return
                    }
                },
                l = function(t) {
                    var e, n, r, o = "Unknown";
                    try {
                        var a = null === (r = null === (n = null === (e = null == t ? void 0 : t.find((function(t) {
                            return t.Item1.includes("http://xboxlive.com")
                        }))) || void 0 === e ? void 0 : e.Item2) || void 0 === n ? void 0 : n.DisplayClaims) || void 0 === r ? void 0 : r.xui;
                        null == a || a.forEach((function(t) {
                            Object.entries(t).forEach((function(t) {
                                var e = i(t, 2),
                                    n = e[0],
                                    r = e[1];
                                "gtg" === n && (o = r)
                            }))
                        }))
                    } catch (t) {
                        console.log(t)
                    }
                    return o
                },
                s = function(t) {
                    var e;
                    try {
                        return null === (e = t.find((function(t) {
                            return t.Item1.includes(r.N.relyingPartyKey)
                        }))) || void 0 === e ? void 0 : e.Item2.Token
                    } catch (t) {
                        return
                    }
                },
                f = function(t) {
                    var e, n, o;
                    try {
                        var i = null === (e = null == t ? void 0 : t.find((function(t) {
                            return t.Item1.includes(r.N.relyingPartyKey)
                        }))) || void 0 === e ? void 0 : e.Item2;
                        if (i) return "XBL3.0 x=".concat(null === (o = null === (n = null == i ? void 0 : i.DisplayClaims) || void 0 === n ? void 0 : n.xui) || void 0 === o ? void 0 : o[0].uhs, ";").concat(null == i ? void 0 : i.Token)
                    } catch (t) {
                        return
                    }
                },
                d = function(t, e) {
                    var n, r, o;
                    try {
                        var i = null === (n = null == e ? void 0 : e.find((function(e) {
                            return e.Item1.includes(t)
                        }))) || void 0 === n ? void 0 : n.Item2;
                        if (i) return "XBL3.0 x=".concat(null === (o = null === (r = null == i ? void 0 : i.DisplayClaims) || void 0 === r ? void 0 : r.xui) || void 0 === o ? void 0 : o[0].uhs, ";").concat(null == i ? void 0 : i.Token)
                    } catch (t) {
                        return
                    }
                }
        },
        3652: function(t, e) {
            "use strict";
            var n = this && this.__assign || Object.assign || function(t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                    for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            };

            function r(t, e) {
                if (!e) return "";
                var n = "; " + t;
                return !0 === e ? n : n + "=" + e
            }

            function o(t, e, n) {
                return encodeURIComponent(t).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/\(/g, "%28").replace(/\)/g, "%29") + "=" + encodeURIComponent(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) + function(t) {
                    if ("number" == typeof t.expires) {
                        var e = new Date;
                        e.setMilliseconds(e.getMilliseconds() + 864e5 * t.expires), t.expires = e
                    }
                    return r("Expires", t.expires ? t.expires.toUTCString() : "") + r("Domain", t.domain) + r("Path", t.path) + r("Secure", t.secure) + r("SameSite", t.sameSite)
                }(n)
            }

            function i(t) {
                for (var e = {}, n = t ? t.split("; ") : [], r = /(%[0-9A-Z]{2})+/g, o = 0; o < n.length; o++) {
                    var i = n[o].split("="),
                        a = i.slice(1).join("=");
                    '"' === a.charAt(0) && (a = a.slice(1, -1));
                    try {
                        e[i[0].replace(r, decodeURIComponent)] = a.replace(r, decodeURIComponent)
                    } catch (t) {}
                }
                return e
            }

            function a() {
                return i(document.cookie)
            }

            function u(t, e, r) {
                document.cookie = o(t, e, n({
                    path: "/"
                }, r))
            }
            e.__esModule = !0, e.encode = o, e.parse = i, e.getAll = a, e.get = function(t) {
                return a()[t]
            }, e.set = u, e.remove = function(t, e) {
                u(t, "", n({}, e, {
                    expires: -1
                }))
            }
        },
        2009: function(t, e, n) {
            "use strict";
            var r = n(3731);
            e.Z = r.default
        },
        2815: function(t, e, n) {
            "use strict";
            n.d(e, {
                q: function() {
                    return It
                },
                q_: function() {
                    return et
                }
            });
            var r = n(7439),
                o = n(9736),
                i = n(8709);

            function a(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = c(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return a = t.done, t
                    },
                    e: function(t) {
                        u = !0, i = t
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                }
            }

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                }(t) || c(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                if (t) {
                    if ("string" == typeof t) return l(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                }
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && f(t, e)
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function d(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(t);
                    if (e) {
                        var o = v(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(t, e) {
                return !e || "object" !== w(e) && "function" != typeof e ? h(t) : e
            }

            function h(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function v(t) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function m(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function y(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function g(t, e, n) {
                return e && y(t.prototype, e), n && y(t, n), t
            }

            function b(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function w(t) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var k = {
                arr: Array.isArray,
                obj: function(t) {
                    return "[object Object]" === Object.prototype.toString.call(t)
                },
                fun: function(t) {
                    return "function" == typeof t
                },
                str: function(t) {
                    return "string" == typeof t
                },
                num: function(t) {
                    return "number" == typeof t
                },
                und: function(t) {
                    return void 0 === t
                },
                nul: function(t) {
                    return null === t
                },
                set: function(t) {
                    return t instanceof Set
                },
                map: function(t) {
                    return t instanceof Map
                },
                equ: function(t, e) {
                    if (w(t) !== w(e)) return !1;
                    if (k.str(t) || k.num(t)) return t === e;
                    if (k.obj(t) && k.obj(e) && Object.keys(t).length + Object.keys(e).length === 0) return !0;
                    var n;
                    for (n in t)
                        if (!(n in e)) return !1;
                    for (n in e)
                        if (t[n] !== e[n]) return !1;
                    return !k.und(n) || t === e
                }
            };

            function x() {
                var t = (0, i.useState)(!1)[1];
                return (0, i.useCallback)((function() {
                    return t((function(t) {
                        return !t
                    }))
                }), [])
            }

            function E(t, e) {
                return k.und(t) || k.nul(t) ? e : t
            }

            function O(t) {
                return k.und(t) ? [] : k.arr(t) ? t : [t]
            }

            function S(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                return k.fun(t) ? t.apply(void 0, n) : t
            }

            function j(t) {
                var e = function(t) {
                    return t.to, t.from, t.config, t.onStart, t.onRest, t.onFrame, t.children, t.reset, t.reverse, t.force, t.immediate, t.delay, t.attach, t.destroyed, t.interpolateTo, t.ref, t.lazy, (0, o.Z)(t, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"])
                }(t);
                if (k.und(e)) return (0, r.Z)({
                    to: e
                }, t);
                var n = Object.keys(t).reduce((function(n, o) {
                    return k.und(e[o]) ? (0, r.Z)({}, n, b({}, o, t[o])) : n
                }), {});
                return (0, r.Z)({
                    to: e
                }, n)
            }
            var A, C, R = function() {
                    function t() {
                        m(this, t), this.payload = void 0, this.children = []
                    }
                    return g(t, [{
                        key: "getAnimatedValue",
                        value: function() {
                            return this.getValue()
                        }
                    }, {
                        key: "getPayload",
                        value: function() {
                            return this.payload || this
                        }
                    }, {
                        key: "attach",
                        value: function() {}
                    }, {
                        key: "detach",
                        value: function() {}
                    }, {
                        key: "getChildren",
                        value: function() {
                            return this.children
                        }
                    }, {
                        key: "addChild",
                        value: function(t) {
                            0 === this.children.length && this.attach(), this.children.push(t)
                        }
                    }, {
                        key: "removeChild",
                        value: function(t) {
                            var e = this.children.indexOf(t);
                            this.children.splice(e, 1), 0 === this.children.length && this.detach()
                        }
                    }]), t
                }(),
                P = function(t) {
                    s(n, t);
                    var e = d(n);

                    function n() {
                        var t;
                        return m(this, n), (t = e.apply(this, arguments)).payload = [], t.attach = function() {
                            return t.payload.forEach((function(e) {
                                return e instanceof R && e.addChild(h(t))
                            }))
                        }, t.detach = function() {
                            return t.payload.forEach((function(e) {
                                return e instanceof R && e.removeChild(h(t))
                            }))
                        }, t
                    }
                    return n
                }(R),
                I = function(t) {
                    s(n, t);
                    var e = d(n);

                    function n() {
                        var t;
                        return m(this, n), (t = e.apply(this, arguments)).payload = {}, t.attach = function() {
                            return Object.values(t.payload).forEach((function(e) {
                                return e instanceof R && e.addChild(h(t))
                            }))
                        }, t.detach = function() {
                            return Object.values(t.payload).forEach((function(e) {
                                return e instanceof R && e.removeChild(h(t))
                            }))
                        }, t
                    }
                    return g(n, [{
                        key: "getValue",
                        value: function(t) {
                            void 0 === t && (t = !1);
                            var e = {};
                            for (var n in this.payload) {
                                var r = this.payload[n];
                                (!t || r instanceof R) && (e[n] = r instanceof R ? r[t ? "getAnimatedValue" : "getValue"]() : r)
                            }
                            return e
                        }
                    }, {
                        key: "getAnimatedValue",
                        value: function() {
                            return this.getValue(!0)
                        }
                    }]), n
                }(R);

            function V(t, e) {
                A = {
                    fn: t,
                    transform: e
                }
            }

            function T(t) {
                C = t
            }
            var L, Z = function(t) {
                return "undefined" != typeof window ? window.requestAnimationFrame(t) : -1
            };

            function N(t) {
                L = t
            }
            var U = function() {
                return Date.now()
            };

            function F(t) {
                t
            }
            var M, D, q = function(t) {
                return t.current
            };

            function _(t) {
                M = t
            }
            var X = function(t) {
                s(n, t);
                var e = d(n);

                function n(t, o) {
                    var i;
                    return m(this, n), (i = e.call(this)).update = void 0, i.payload = t.style ? (0, r.Z)({}, t, {
                        style: M(t.style)
                    }) : t, i.update = o, i.attach(), i
                }
                return n
            }(I);

            function z(t, e, n) {
                if ("function" == typeof t) return t;
                if (Array.isArray(t)) return z({
                    range: t,
                    output: e,
                    extrapolate: n
                });
                if (L && "string" == typeof t.output[0]) return L(t);
                var r = t,
                    o = r.output,
                    i = r.range || [0, 1],
                    a = r.extrapolateLeft || r.extrapolate || "extend",
                    u = r.extrapolateRight || r.extrapolate || "extend",
                    c = r.easing || function(t) {
                        return t
                    };
                return function(t) {
                    var e = function(t, e) {
                        for (var n = 1; n < e.length - 1 && !(e[n] >= t); ++n);
                        return n - 1
                    }(t, i);
                    return function(t, e, n, r, o, i, a, u, c) {
                        var l = c ? c(t) : t;
                        if (l < e) {
                            if ("identity" === a) return l;
                            "clamp" === a && (l = e)
                        }
                        if (l > n) {
                            if ("identity" === u) return l;
                            "clamp" === u && (l = n)
                        }
                        if (r === o) return r;
                        if (e === n) return t <= e ? r : o;
                        e === -1 / 0 ? l = -l : n === 1 / 0 ? l -= e : l = (l - e) / (n - e);
                        l = i(l), r === -1 / 0 ? l = -l : o === 1 / 0 ? l += r : l = l * (o - r) + r;
                        return l
                    }(t, i[e], i[e + 1], o[e], o[e + 1], c, a, u, r.map)
                }
            }
            var B = function(t) {
                s(n, t);
                var e = d(n);

                function n(t, r, o) {
                    var i;
                    return m(this, n), (i = e.call(this)).calc = void 0, i.payload = t instanceof P && !(t instanceof n) ? t.getPayload() : Array.isArray(t) ? t : [t], i.calc = z(r, o), i
                }
                return g(n, [{
                    key: "getValue",
                    value: function() {
                        return this.calc.apply(this, u(this.payload.map((function(t) {
                            return t.getValue()
                        }))))
                    }
                }, {
                    key: "updateConfig",
                    value: function(t, e) {
                        this.calc = z(t, e)
                    }
                }, {
                    key: "interpolate",
                    value: function(t, e) {
                        return new n(this, t, e)
                    }
                }]), n
            }(P);

            function W(t, e) {
                "update" in t ? e.add(t) : t.getChildren().forEach((function(t) {
                    return W(t, e)
                }))
            }
            var Y = function(t) {
                    s(n, t);
                    var e = d(n);

                    function n(t) {
                        var r, o;
                        return m(this, n), r = e.call(this), o = h(r), r.animatedStyles = new Set, r.value = void 0, r.startPosition = void 0, r.lastPosition = void 0, r.lastVelocity = void 0, r.startTime = void 0, r.lastTime = void 0, r.done = !1, r.setValue = function(t, e) {
                            void 0 === e && (e = !0), o.value = t, e && o.flush()
                        }, r.value = t, r.startPosition = t, r.lastPosition = t, r
                    }
                    return g(n, [{
                        key: "flush",
                        value: function() {
                            0 === this.animatedStyles.size && W(this, this.animatedStyles), this.animatedStyles.forEach((function(t) {
                                return t.update()
                            }))
                        }
                    }, {
                        key: "clearStyles",
                        value: function() {
                            this.animatedStyles.clear()
                        }
                    }, {
                        key: "getValue",
                        value: function() {
                            return this.value
                        }
                    }, {
                        key: "interpolate",
                        value: function(t, e) {
                            return new B(this, t, e)
                        }
                    }]), n
                }(R),
                $ = function(t) {
                    s(n, t);
                    var e = d(n);

                    function n(t) {
                        var r;
                        return m(this, n), (r = e.call(this)).payload = t.map((function(t) {
                            return new Y(t)
                        })), r
                    }
                    return g(n, [{
                        key: "setValue",
                        value: function(t, e) {
                            var n = this;
                            void 0 === e && (e = !0), Array.isArray(t) ? t.length === this.payload.length && t.forEach((function(t, r) {
                                return n.payload[r].setValue(t, e)
                            })) : this.payload.forEach((function(n) {
                                return n.setValue(t, e)
                            }))
                        }
                    }, {
                        key: "getValue",
                        value: function() {
                            return this.payload.map((function(t) {
                                return t.getValue()
                            }))
                        }
                    }, {
                        key: "interpolate",
                        value: function(t, e) {
                            return new B(this, t, e)
                        }
                    }]), n
                }(P),
                G = !1,
                H = new Set,
                K = function t() {
                    if (!G) return !1;
                    var e, n = U(),
                        r = a(H);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            for (var o = e.value, i = !1, u = 0; u < o.configs.length; u++) {
                                for (var c = o.configs[u], l = void 0, s = void 0, f = 0; f < c.animatedValues.length; f++) {
                                    var d = c.animatedValues[f];
                                    if (!d.done) {
                                        var p = c.fromValues[f],
                                            h = c.toValues[f],
                                            v = d.lastPosition,
                                            m = h instanceof R,
                                            y = Array.isArray(c.initialVelocity) ? c.initialVelocity[f] : c.initialVelocity;
                                        if (m && (h = h.getValue()), c.immediate) d.setValue(h), d.done = !0;
                                        else if ("string" != typeof p && "string" != typeof h) {
                                            if (void 0 !== c.duration) v = p + c.easing((n - d.startTime) / c.duration) * (h - p), l = n >= d.startTime + c.duration;
                                            else if (c.decay) v = p + y / (1 - .998) * (1 - Math.exp(-(1 - .998) * (n - d.startTime))), (l = Math.abs(d.lastPosition - v) < .1) && (h = v);
                                            else {
                                                s = void 0 !== d.lastTime ? d.lastTime : n, y = void 0 !== d.lastVelocity ? d.lastVelocity : c.initialVelocity, n > s + 64 && (s = n);
                                                for (var g = Math.floor(n - s), b = 0; b < g; ++b) {
                                                    v += 1 * (y += 1 * ((-c.tension * (v - h) + -c.friction * y) / c.mass) / 1e3) / 1e3
                                                }
                                                var w = !(!c.clamp || 0 === c.tension) && (p < h ? v > h : v < h),
                                                    k = Math.abs(y) <= c.precision,
                                                    x = 0 === c.tension || Math.abs(h - v) <= c.precision;
                                                l = w || k && x, d.lastVelocity = y, d.lastTime = n
                                            }
                                            m && !c.toValues[f].done && (l = !1), l ? (d.value !== h && (v = h), d.done = !0) : i = !0, d.setValue(v), d.lastPosition = v
                                        } else d.setValue(h), d.done = !0
                                    }
                                }
                                o.props.onFrame && (o.values[c.name] = c.interpolation.getValue())
                            }
                            o.props.onFrame && o.props.onFrame(o.values), i || (H.delete(o), o.stop(!0))
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return H.size ? D ? D() : Z(t) : G = !1, G
                },
                Q = 0,
                J = function() {
                    function t() {
                        var e = this;
                        m(this, t), this.id = void 0, this.idle = !0, this.hasChanged = !1, this.guid = 0, this.local = 0, this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.listeners = [], this.queue = [], this.localQueue = void 0, this.getValues = function() {
                            return e.interpolations
                        }, this.id = Q++
                    }
                    return g(t, [{
                        key: "update",
                        value: function(t) {
                            if (!t) return this;
                            var e = j(t),
                                n = e.delay,
                                i = void 0 === n ? 0 : n,
                                a = e.to,
                                u = (0, o.Z)(e, ["delay", "to"]);
                            if (k.arr(a) || k.fun(a)) this.queue.push((0, r.Z)({}, u, {
                                delay: i,
                                to: a
                            }));
                            else if (a) {
                                var c = {};
                                Object.entries(a).forEach((function(t) {
                                    var e = t[0],
                                        n = t[1],
                                        o = (0, r.Z)({
                                            to: b({}, e, n),
                                            delay: S(i, e)
                                        }, u),
                                        a = c[o.delay] && c[o.delay].to;
                                    c[o.delay] = (0, r.Z)({}, c[o.delay], o, {
                                        to: (0, r.Z)({}, a, o.to)
                                    })
                                })), this.queue = Object.values(c)
                            }
                            return this.queue = this.queue.sort((function(t, e) {
                                return t.delay - e.delay
                            })), this.diff(u), this
                        }
                    }, {
                        key: "start",
                        value: function(t) {
                            var e, n = this;
                            if (this.queue.length) {
                                this.idle = !1, this.localQueue && this.localQueue.forEach((function(t) {
                                    var e = t.from,
                                        o = void 0 === e ? {} : e,
                                        i = t.to,
                                        a = void 0 === i ? {} : i;
                                    k.obj(o) && (n.merged = (0, r.Z)({}, o, n.merged)), k.obj(a) && (n.merged = (0, r.Z)({}, n.merged, a))
                                }));
                                var i = this.local = ++this.guid,
                                    a = this.localQueue = this.queue;
                                this.queue = [], a.forEach((function(e, r) {
                                    var u = e.delay,
                                        c = (0, o.Z)(e, ["delay"]),
                                        l = function(e) {
                                            r === a.length - 1 && i === n.guid && e && (n.idle = !0, n.props.onRest && n.props.onRest(n.merged)), t && t()
                                        },
                                        s = k.arr(c.to) || k.fun(c.to);
                                    u ? setTimeout((function() {
                                        i === n.guid && (s ? n.runAsync(c, l) : n.diff(c).start(l))
                                    }), u) : s ? n.runAsync(c, l) : n.diff(c).start(l)
                                }))
                            } else k.fun(t) && this.listeners.push(t), this.props.onStart && this.props.onStart(), e = this, H.has(e) || H.add(e), G || (G = !0, Z(D || K));
                            return this
                        }
                    }, {
                        key: "stop",
                        value: function(t) {
                            return this.listeners.forEach((function(e) {
                                return e(t)
                            })), this.listeners = [], this
                        }
                    }, {
                        key: "pause",
                        value: function(t) {
                            var e;
                            return this.stop(!0), t && (e = this, H.has(e) && H.delete(e)), this
                        }
                    }, {
                        key: "runAsync",
                        value: function(t, e) {
                            var n = this,
                                i = this,
                                a = (t.delay, (0, o.Z)(t, ["delay"])),
                                u = this.local,
                                c = Promise.resolve(void 0);
                            if (k.arr(a.to))
                                for (var l = function(t) {
                                        var e = t,
                                            o = (0, r.Z)({}, a, j(a.to[e]));
                                        k.arr(o.config) && (o.config = o.config[e]), c = c.then((function() {
                                            if (u === n.guid) return new Promise((function(t) {
                                                return n.diff(o).start(t)
                                            }))
                                        }))
                                    }, s = 0; s < a.to.length; s++) l(s);
                            else if (k.fun(a.to)) {
                                var f, d = 0;
                                c = c.then((function() {
                                    return a.to((function(t) {
                                        var e = (0, r.Z)({}, a, j(t));
                                        if (k.arr(e.config) && (e.config = e.config[d]), d++, u === n.guid) return f = new Promise((function(t) {
                                            return n.diff(e).start(t)
                                        }))
                                    }), (function(t) {
                                        return void 0 === t && (t = !0), i.stop(t)
                                    })).then((function() {
                                        return f
                                    }))
                                }))
                            }
                            c.then(e)
                        }
                    }, {
                        key: "diff",
                        value: function(t) {
                            var e = this;
                            this.props = (0, r.Z)({}, this.props, t);
                            var n = this.props,
                                o = n.from,
                                i = void 0 === o ? {} : o,
                                a = n.to,
                                u = void 0 === a ? {} : a,
                                c = n.config,
                                l = void 0 === c ? {} : c,
                                s = n.reverse,
                                f = n.attach,
                                d = n.reset,
                                p = n.immediate;
                            if (s) {
                                var h = [u, i];
                                i = h[0], u = h[1]
                            }
                            this.merged = (0, r.Z)({}, i, this.merged, u), this.hasChanged = !1;
                            var v = f && f(this);
                            if (this.animations = Object.entries(this.merged).reduce((function(t, n) {
                                    var o = n[0],
                                        a = n[1],
                                        u = t[o] || {},
                                        c = k.num(a),
                                        s = k.str(a) && !a.startsWith("#") && !/\d/.test(a) && !C[a],
                                        f = k.arr(a),
                                        h = !c && !f && !s,
                                        m = k.und(i[o]) ? a : i[o],
                                        y = c || f || s ? a : 1,
                                        g = S(l, o);
                                    v && (y = v.animations[o].parent);
                                    var w, x = u.parent,
                                        j = u.interpolation,
                                        A = O(v ? y.getPayload() : y),
                                        R = a;
                                    h && (R = L({
                                        range: [0, 1],
                                        output: [a, a]
                                    })(1));
                                    var P = j && j.getValue(),
                                        I = !k.und(x) && u.animatedValues.some((function(t) {
                                            return !t.done
                                        })),
                                        V = !k.equ(R, P),
                                        T = !k.equ(R, u.previous),
                                        Z = !k.equ(g, u.config);
                                    if (d || T && V || Z) {
                                        if (c || s) x = j = u.parent || new Y(m);
                                        else if (f) x = j = u.parent || new $(m);
                                        else if (h) {
                                            var N = u.interpolation && u.interpolation.calc(u.parent.value);
                                            N = void 0 === N || d ? m : N, u.parent ? (x = u.parent).setValue(0, !1) : x = new Y(0);
                                            var F = {
                                                output: [N, a]
                                            };
                                            u.interpolation ? (j = u.interpolation, u.interpolation.updateConfig(F)) : j = x.interpolate(F)
                                        }
                                        return A = O(v ? y.getPayload() : y), w = O(x.getPayload()), d && !h && x.setValue(m, !1), e.hasChanged = !0, w.forEach((function(t) {
                                            t.startPosition = t.value, t.lastPosition = t.value, t.lastVelocity = I ? t.lastVelocity : void 0, t.lastTime = I ? t.lastTime : void 0, t.startTime = U(), t.done = !1, t.animatedStyles.clear()
                                        })), S(p, o) && x.setValue(h ? y : a, !1), (0, r.Z)({}, t, b({}, o, (0, r.Z)({}, u, {
                                            name: o,
                                            parent: x,
                                            interpolation: j,
                                            animatedValues: w,
                                            toValues: A,
                                            previous: R,
                                            config: g,
                                            fromValues: O(x.getValue()),
                                            immediate: S(p, o),
                                            initialVelocity: E(g.velocity, 0),
                                            clamp: E(g.clamp, !1),
                                            precision: E(g.precision, .01),
                                            tension: E(g.tension, 170),
                                            friction: E(g.friction, 26),
                                            mass: E(g.mass, 1),
                                            duration: g.duration,
                                            easing: E(g.easing, (function(t) {
                                                return t
                                            })),
                                            decay: g.decay
                                        })))
                                    }
                                    return V ? t : (h && (x.setValue(1, !1), j.updateConfig({
                                        output: [R, R]
                                    })), x.done = !0, e.hasChanged = !0, (0, r.Z)({}, t, b({}, o, (0, r.Z)({}, t[o], {
                                        previous: R
                                    }))))
                                }), this.animations), this.hasChanged)
                                for (var m in this.configs = Object.values(this.animations), this.values = {}, this.interpolations = {}, this.animations) this.interpolations[m] = this.animations[m].interpolation, this.values[m] = this.animations[m].interpolation.getValue();
                            return this
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.stop(), this.props = {}, this.merged = {}, this.animations = {}, this.interpolations = {}, this.values = {}, this.configs = [], this.local = 0
                        }
                    }]), t
                }(),
                tt = function(t, e) {
                    var n = (0, i.useRef)(!1),
                        r = (0, i.useRef)(),
                        o = k.fun(e),
                        a = (0, i.useMemo)((function() {
                            var n;
                            return r.current && (r.current.map((function(t) {
                                return t.destroy()
                            })), r.current = void 0), [new Array(t).fill().map((function(t, r) {
                                var i = new J,
                                    a = o ? S(e, r, i) : e[r];
                                return 0 === r && (n = a.ref), i.update(a), n || i.start(), i
                            })), n]
                        }), [t]),
                        u = a[0],
                        c = a[1];
                    r.current = u;
                    (0, i.useImperativeHandle)(c, (function() {
                        return {
                            start: function() {
                                return Promise.all(r.current.map((function(t) {
                                    return new Promise((function(e) {
                                        return t.start(e)
                                    }))
                                })))
                            },
                            stop: function(t) {
                                return r.current.forEach((function(e) {
                                    return e.stop(t)
                                }))
                            },
                            get controllers() {
                                return r.current
                            }
                        }
                    }));
                    var l = (0, i.useMemo)((function() {
                        return function(t) {
                            return r.current.map((function(e, n) {
                                e.update(o ? S(t, n, e) : t[n]), c || e.start()
                            }))
                        }
                    }), [t]);
                    (0, i.useEffect)((function() {
                        n.current ? o || l(e) : c || r.current.forEach((function(t) {
                            return t.start()
                        }))
                    })), (0, i.useEffect)((function() {
                        return n.current = !0,
                            function() {
                                return r.current.forEach((function(t) {
                                    return t.destroy()
                                }))
                            }
                    }), []);
                    var s = r.current.map((function(t) {
                        return t.getValues()
                    }));
                    return o ? [s, l, function(t) {
                        return r.current.forEach((function(e) {
                            return e.pause(t)
                        }))
                    }] : s
                },
                et = function(t) {
                    var e = k.fun(t),
                        n = tt(1, e ? t : [t]),
                        r = n[0],
                        o = n[1],
                        i = n[2];
                    return e ? [r[0], o, i] : r
                };
            var nt = function(t) {
                    s(n, t);
                    var e = d(n);

                    function n(t) {
                        var r;
                        return m(this, n), void 0 === t && (t = {}), r = e.call(this), !t.transform || t.transform instanceof R || (t = A.transform(t)), r.payload = t, r
                    }
                    return n
                }(I),
                rt = {
                    transparent: 0,
                    aliceblue: 4042850303,
                    antiquewhite: 4209760255,
                    aqua: 16777215,
                    aquamarine: 2147472639,
                    azure: 4043309055,
                    beige: 4126530815,
                    bisque: 4293182719,
                    black: 255,
                    blanchedalmond: 4293643775,
                    blue: 65535,
                    blueviolet: 2318131967,
                    brown: 2771004159,
                    burlywood: 3736635391,
                    burntsienna: 3934150143,
                    cadetblue: 1604231423,
                    chartreuse: 2147418367,
                    chocolate: 3530104575,
                    coral: 4286533887,
                    cornflowerblue: 1687547391,
                    cornsilk: 4294499583,
                    crimson: 3692313855,
                    cyan: 16777215,
                    darkblue: 35839,
                    darkcyan: 9145343,
                    darkgoldenrod: 3095792639,
                    darkgray: 2846468607,
                    darkgreen: 6553855,
                    darkgrey: 2846468607,
                    darkkhaki: 3182914559,
                    darkmagenta: 2332068863,
                    darkolivegreen: 1433087999,
                    darkorange: 4287365375,
                    darkorchid: 2570243327,
                    darkred: 2332033279,
                    darksalmon: 3918953215,
                    darkseagreen: 2411499519,
                    darkslateblue: 1211993087,
                    darkslategray: 793726975,
                    darkslategrey: 793726975,
                    darkturquoise: 13554175,
                    darkviolet: 2483082239,
                    deeppink: 4279538687,
                    deepskyblue: 12582911,
                    dimgray: 1768516095,
                    dimgrey: 1768516095,
                    dodgerblue: 512819199,
                    firebrick: 2988581631,
                    floralwhite: 4294635775,
                    forestgreen: 579543807,
                    fuchsia: 4278255615,
                    gainsboro: 3705462015,
                    ghostwhite: 4177068031,
                    gold: 4292280575,
                    goldenrod: 3668254975,
                    gray: 2155905279,
                    green: 8388863,
                    greenyellow: 2919182335,
                    grey: 2155905279,
                    honeydew: 4043305215,
                    hotpink: 4285117695,
                    indianred: 3445382399,
                    indigo: 1258324735,
                    ivory: 4294963455,
                    khaki: 4041641215,
                    lavender: 3873897215,
                    lavenderblush: 4293981695,
                    lawngreen: 2096890111,
                    lemonchiffon: 4294626815,
                    lightblue: 2916673279,
                    lightcoral: 4034953471,
                    lightcyan: 3774873599,
                    lightgoldenrodyellow: 4210742015,
                    lightgray: 3553874943,
                    lightgreen: 2431553791,
                    lightgrey: 3553874943,
                    lightpink: 4290167295,
                    lightsalmon: 4288707327,
                    lightseagreen: 548580095,
                    lightskyblue: 2278488831,
                    lightslategray: 2005441023,
                    lightslategrey: 2005441023,
                    lightsteelblue: 2965692159,
                    lightyellow: 4294959359,
                    lime: 16711935,
                    limegreen: 852308735,
                    linen: 4210091775,
                    magenta: 4278255615,
                    maroon: 2147483903,
                    mediumaquamarine: 1724754687,
                    mediumblue: 52735,
                    mediumorchid: 3126187007,
                    mediumpurple: 2473647103,
                    mediumseagreen: 1018393087,
                    mediumslateblue: 2070474495,
                    mediumspringgreen: 16423679,
                    mediumturquoise: 1221709055,
                    mediumvioletred: 3340076543,
                    midnightblue: 421097727,
                    mintcream: 4127193855,
                    mistyrose: 4293190143,
                    moccasin: 4293178879,
                    navajowhite: 4292783615,
                    navy: 33023,
                    oldlace: 4260751103,
                    olive: 2155872511,
                    olivedrab: 1804477439,
                    orange: 4289003775,
                    orangered: 4282712319,
                    orchid: 3664828159,
                    palegoldenrod: 4008225535,
                    palegreen: 2566625535,
                    paleturquoise: 2951671551,
                    palevioletred: 3681588223,
                    papayawhip: 4293907967,
                    peachpuff: 4292524543,
                    peru: 3448061951,
                    pink: 4290825215,
                    plum: 3718307327,
                    powderblue: 2967529215,
                    purple: 2147516671,
                    rebeccapurple: 1714657791,
                    red: 4278190335,
                    rosybrown: 3163525119,
                    royalblue: 1097458175,
                    saddlebrown: 2336560127,
                    salmon: 4202722047,
                    sandybrown: 4104413439,
                    seagreen: 780883967,
                    seashell: 4294307583,
                    sienna: 2689740287,
                    silver: 3233857791,
                    skyblue: 2278484991,
                    slateblue: 1784335871,
                    slategray: 1887473919,
                    slategrey: 1887473919,
                    snow: 4294638335,
                    springgreen: 16744447,
                    steelblue: 1182971135,
                    tan: 3535047935,
                    teal: 8421631,
                    thistle: 3636451583,
                    tomato: 4284696575,
                    turquoise: 1088475391,
                    violet: 4001558271,
                    wheat: 4125012991,
                    white: 4294967295,
                    whitesmoke: 4126537215,
                    yellow: 4294902015,
                    yellowgreen: 2597139199
                },
                ot = "[-+]?\\d*\\.?\\d+",
                it = ot + "%";

            function at() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
            }
            var ut = new RegExp("rgb" + at(ot, ot, ot)),
                ct = new RegExp("rgba" + at(ot, ot, ot, ot)),
                lt = new RegExp("hsl" + at(ot, it, it)),
                st = new RegExp("hsla" + at(ot, it, it, ot)),
                ft = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                dt = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                pt = /^#([0-9a-fA-F]{6})$/,
                ht = /^#([0-9a-fA-F]{8})$/;

            function vt(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function mt(t, e, n) {
                var r = n < .5 ? n * (1 + e) : n + e - n * e,
                    o = 2 * n - r,
                    i = vt(o, r, t + 1 / 3),
                    a = vt(o, r, t),
                    u = vt(o, r, t - 1 / 3);
                return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * u) << 8
            }

            function yt(t) {
                var e = parseInt(t, 10);
                return e < 0 ? 0 : e > 255 ? 255 : e
            }

            function gt(t) {
                return (parseFloat(t) % 360 + 360) % 360 / 360
            }

            function bt(t) {
                var e = parseFloat(t);
                return e < 0 ? 0 : e > 1 ? 255 : Math.round(255 * e)
            }

            function wt(t) {
                var e = parseFloat(t);
                return e < 0 ? 0 : e > 100 ? 1 : e / 100
            }

            function kt(t) {
                var e, n, r = "number" == typeof(e = t) ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (n = pt.exec(e)) ? parseInt(n[1] + "ff", 16) >>> 0 : rt.hasOwnProperty(e) ? rt[e] : (n = ut.exec(e)) ? (yt(n[1]) << 24 | yt(n[2]) << 16 | yt(n[3]) << 8 | 255) >>> 0 : (n = ct.exec(e)) ? (yt(n[1]) << 24 | yt(n[2]) << 16 | yt(n[3]) << 8 | bt(n[4])) >>> 0 : (n = ft.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0 : (n = ht.exec(e)) ? parseInt(n[1], 16) >>> 0 : (n = dt.exec(e)) ? parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0 : (n = lt.exec(e)) ? (255 | mt(gt(n[1]), wt(n[2]), wt(n[3]))) >>> 0 : (n = st.exec(e)) ? (mt(gt(n[1]), wt(n[2]), wt(n[3])) | bt(n[4])) >>> 0 : null;
                if (null === r) return t;
                var o = (16711680 & (r = r || 0)) >>> 16,
                    i = (65280 & r) >>> 8,
                    a = (255 & r) / 255;
                return "rgba(".concat((4278190080 & r) >>> 24, ", ").concat(o, ", ").concat(i, ", ").concat(a, ")")
            }
            var xt = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                Et = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
                Ot = new RegExp("(".concat(Object.keys(rt).join("|"), ")"), "g"),
                St = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                jt = ["Webkit", "Ms", "Moz", "O"];

            function At(t, e, n) {
                return null == e || "boolean" == typeof e || "" === e ? "" : n || "number" != typeof e || 0 === e || St.hasOwnProperty(t) && St[t] ? ("" + e).trim() : e + "px"
            }
            St = Object.keys(St).reduce((function(t, e) {
                return jt.forEach((function(n) {
                    return t[function(t, e) {
                        return t + e.charAt(0).toUpperCase() + e.substring(1)
                    }(n, e)] = t[e]
                })), t
            }), St);
            var Ct = {};
            _((function(t) {
                return new nt(t)
            })), F("div"), N((function(t) {
                var e = t.output.map((function(t) {
                        return t.replace(Et, kt)
                    })).map((function(t) {
                        return t.replace(Ot, kt)
                    })),
                    n = e[0].match(xt).map((function() {
                        return []
                    }));
                e.forEach((function(t) {
                    t.match(xt).forEach((function(t, e) {
                        return n[e].push(+t)
                    }))
                }));
                var o = e[0].match(xt).map((function(e, o) {
                    return z((0, r.Z)({}, t, {
                        output: n[o]
                    }))
                }));
                return function(t) {
                    var n = 0;
                    return e[0].replace(xt, (function() {
                        return o[n++](t)
                    })).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (function(t, e, n, r, o) {
                        return "rgba(".concat(Math.round(e), ", ").concat(Math.round(n), ", ").concat(Math.round(r), ", ").concat(o, ")")
                    }))
                }
            })), T(rt), V((function(t, e) {
                if (!t.nodeType || void 0 === t.setAttribute) return !1;
                var n = e.style,
                    r = e.children,
                    i = e.scrollTop,
                    a = e.scrollLeft,
                    u = (0, o.Z)(e, ["style", "children", "scrollTop", "scrollLeft"]),
                    c = "filter" === t.nodeName || t.parentNode && "filter" === t.parentNode.nodeName;
                for (var l in void 0 !== i && (t.scrollTop = i), void 0 !== a && (t.scrollLeft = a), void 0 !== r && (t.textContent = r), n)
                    if (n.hasOwnProperty(l)) {
                        var s = 0 === l.indexOf("--"),
                            f = At(l, n[l], s);
                        "float" === l && (l = "cssFloat"), s ? t.style.setProperty(l, f) : t.style[l] = f
                    }
                for (var d in u) {
                    var p = c ? d : Ct[d] || (Ct[d] = d.replace(/([A-Z])/g, (function(t) {
                        return "-" + t.toLowerCase()
                    })));
                    void 0 !== t.getAttribute(p) && t.setAttribute(p, u[d])
                }
            }), (function(t) {
                return t
            }));
            var Rt, Pt, It = (Rt = function(t) {
                return (0, i.forwardRef)((function(e, n) {
                    var a = x(),
                        u = (0, i.useRef)(!0),
                        c = (0, i.useRef)(null),
                        l = (0, i.useRef)(null),
                        s = (0, i.useCallback)((function(t) {
                            var e = c.current;
                            c.current = new X(t, (function() {
                                l.current && !1 === A.fn(l.current, c.current.getAnimatedValue()) && a()
                            })), e && e.detach()
                        }), []);
                    (0, i.useEffect)((function() {
                        return function() {
                            u.current = !1, c.current && c.current.detach()
                        }
                    }), []), (0, i.useImperativeHandle)(n, (function() {
                        return q(l, u, a)
                    })), s(e);
                    var f = c.current.getValue(),
                        d = (f.scrollTop, f.scrollLeft, (0, o.Z)(f, ["scrollTop", "scrollLeft"]));
                    return i.createElement(t, (0, r.Z)({}, d, {
                        ref: function(t) {
                            return l.current = function(t, e) {
                                return e && (k.fun(e) ? e(t) : k.obj(e) && (e.current = t)), t
                            }(t, n)
                        }
                    }))
                }))
            }, void 0 === (Pt = !1) && (Pt = !0), function(t) {
                return (k.arr(t) ? t : Object.keys(t)).reduce((function(t, e) {
                    var n = Pt ? e[0].toLowerCase() + e.substring(1) : e;
                    return t[n] = Rt(n), t
                }), Rt)
            })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"])
        },
        4724: function(t, e, n) {
            "use strict";
            var r = n(8709),
                o = n(1169);

            function i() {
                return (i = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }
            var a = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
                u = {
                    popupContent: {
                        tooltip: {
                            position: "absolute",
                            zIndex: 999
                        },
                        modal: {
                            position: "relative",
                            margin: "auto"
                        }
                    },
                    popupArrow: {
                        height: "8px",
                        width: "16px",
                        position: "absolute",
                        background: "transparent",
                        color: "#FFF",
                        zIndex: -1
                    },
                    overlay: {
                        tooltip: {
                            position: "fixed",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            zIndex: 999
                        },
                        modal: {
                            position: "fixed",
                            top: "0",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            display: "flex",
                            zIndex: 999
                        }
                    }
                },
                c = ["top left", "top center", "top right", "right top", "right center", "right bottom", "bottom left", "bottom center", "bottom right", "left top", "left center", "left bottom"],
                l = function(t, e, n, r, o) {
                    var i = o.offsetX,
                        a = o.offsetY,
                        u = r ? 8 : 0,
                        c = n.split(" "),
                        l = t.top + t.height / 2,
                        s = t.left + t.width / 2,
                        f = e.height,
                        d = e.width,
                        p = l - f / 2,
                        h = s - d / 2,
                        v = "",
                        m = "0%",
                        y = "0%";
                    switch (c[0]) {
                        case "top":
                            p -= f / 2 + t.height / 2 + u, v = "rotate(180deg)  translateX(50%)", m = "100%", y = "50%";
                            break;
                        case "bottom":
                            p += f / 2 + t.height / 2 + u, v = "rotate(0deg) translateY(-100%) translateX(-50%)", y = "50%";
                            break;
                        case "left":
                            h -= d / 2 + t.width / 2 + u, v = " rotate(90deg)  translateY(50%) translateX(-25%)", y = "100%", m = "50%";
                            break;
                        case "right":
                            h += d / 2 + t.width / 2 + u, v = "rotate(-90deg)  translateY(-150%) translateX(25%)", m = "50%"
                    }
                    switch (c[1]) {
                        case "top":
                            p = t.top, m = t.height / 2 + "px";
                            break;
                        case "bottom":
                            p = t.top - f + t.height, m = f - t.height / 2 + "px";
                            break;
                        case "left":
                            h = t.left, y = t.width / 2 + "px";
                            break;
                        case "right":
                            h = t.left - d + t.width, y = d - t.width / 2 + "px"
                    }
                    return {
                        top: p = "top" === c[0] ? p - a : p + a,
                        left: h = "left" === c[0] ? h - i : h + i,
                        transform: v,
                        arrowLeft: y,
                        arrowTop: m
                    }
                },
                s = function(t, e, n, r, o, i) {
                    var a = o.offsetX,
                        u = o.offsetY,
                        s = {
                            arrowLeft: "0%",
                            arrowTop: "0%",
                            left: 0,
                            top: 0,
                            transform: "rotate(135deg)"
                        },
                        f = 0,
                        d = function(t) {
                            var e = {
                                top: 0,
                                left: 0,
                                width: window.innerWidth,
                                height: window.innerHeight
                            };
                            if ("string" == typeof t) {
                                var n = document.querySelector(t);
                                null !== n && (e = n.getBoundingClientRect())
                            }
                            return e
                        }(i),
                        p = Array.isArray(n) ? n : [n];
                    for ((i || Array.isArray(n)) && (p = [].concat(p, c)); f < p.length;) {
                        var h = {
                            top: (s = l(t, e, p[f], r, {
                                offsetX: a,
                                offsetY: u
                            })).top,
                            left: s.left,
                            width: e.width,
                            height: e.height
                        };
                        if (!(h.top <= d.top || h.left <= d.left || h.top + h.height >= d.top + d.height || h.left + h.width >= d.left + d.width)) break;
                        f++
                    }
                    return s
                },
                f = 0,
                d = (0, r.forwardRef)((function(t, e) {
                    var n = t.trigger,
                        c = void 0 === n ? null : n,
                        l = t.onOpen,
                        d = void 0 === l ? function() {} : l,
                        p = t.onClose,
                        h = void 0 === p ? function() {} : p,
                        v = t.defaultOpen,
                        m = void 0 !== v && v,
                        y = t.open,
                        g = void 0 === y ? void 0 : y,
                        b = t.disabled,
                        w = void 0 !== b && b,
                        k = t.nested,
                        x = void 0 !== k && k,
                        E = t.closeOnDocumentClick,
                        O = void 0 === E || E,
                        S = t.repositionOnResize,
                        j = void 0 === S || S,
                        A = t.closeOnEscape,
                        C = void 0 === A || A,
                        R = t.on,
                        P = void 0 === R ? ["click"] : R,
                        I = t.contentStyle,
                        V = void 0 === I ? {} : I,
                        T = t.arrowStyle,
                        L = void 0 === T ? {} : T,
                        Z = t.overlayStyle,
                        N = void 0 === Z ? {} : Z,
                        U = t.className,
                        F = void 0 === U ? "" : U,
                        M = t.position,
                        D = void 0 === M ? "bottom center" : M,
                        q = t.modal,
                        _ = void 0 !== q && q,
                        X = t.lockScroll,
                        z = void 0 !== X && X,
                        B = t.arrow,
                        W = void 0 === B || B,
                        Y = t.offsetX,
                        $ = void 0 === Y ? 0 : Y,
                        G = t.offsetY,
                        H = void 0 === G ? 0 : G,
                        K = t.mouseEnterDelay,
                        Q = void 0 === K ? 100 : K,
                        J = t.mouseLeaveDelay,
                        tt = void 0 === J ? 100 : J,
                        et = t.keepTooltipInside,
                        nt = void 0 !== et && et,
                        rt = t.children,
                        ot = (0, r.useState)(g || m),
                        it = ot[0],
                        at = ot[1],
                        ut = (0, r.useRef)(null),
                        ct = (0, r.useRef)(null),
                        lt = (0, r.useRef)(null),
                        st = (0, r.useRef)(null),
                        ft = (0, r.useRef)("popup-" + ++f),
                        dt = !!_ || !c,
                        pt = (0, r.useRef)(0);
                    a((function() {
                        return it ? (st.current = document.activeElement, St(), xt(), wt()) : kt(),
                            function() {
                                clearTimeout(pt.current)
                            }
                    }), [it]), (0, r.useEffect)((function() {
                        "boolean" == typeof g && (g ? ht() : vt())
                    }), [g, w]);
                    var ht = function() {
                            it || w || (at(!0), setTimeout(d, 0))
                        },
                        vt = function() {
                            it && !w && (at(!1), dt && st.current.focus(), setTimeout(h, 0))
                        },
                        mt = function(t) {
                            null == t || t.stopPropagation(), it ? vt() : ht()
                        },
                        yt = function() {
                            clearTimeout(pt.current), pt.current = setTimeout(ht, Q)
                        },
                        gt = function(t) {
                            null == t || t.preventDefault(), mt()
                        },
                        bt = function() {
                            clearTimeout(pt.current), pt.current = setTimeout(vt, tt)
                        },
                        wt = function() {
                            dt && z && (document.getElementsByTagName("body")[0].style.overflow = "hidden")
                        },
                        kt = function() {
                            dt && z && (document.getElementsByTagName("body")[0].style.overflow = "auto")
                        },
                        xt = function() {
                            var t, e = null == ct || null === (t = ct.current) || void 0 === t ? void 0 : t.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),
                                n = Array.prototype.slice.call(e)[0];
                            null == n || n.focus()
                        };
                    (0, r.useImperativeHandle)(e, (function() {
                        return {
                            open: function() {
                                ht()
                            },
                            close: function() {
                                vt()
                            },
                            toggle: function() {
                                mt()
                            }
                        }
                    }));
                    var Et, Ot, St = function() {
                        if (!dt && it && (null == ut ? void 0 : ut.current) && (null == ut ? void 0 : ut.current) && (null == ct ? void 0 : ct.current)) {
                            var t, e, n = ut.current.getBoundingClientRect(),
                                r = ct.current.getBoundingClientRect(),
                                o = s(n, r, D, W, {
                                    offsetX: $,
                                    offsetY: H
                                }, nt);
                            if (ct.current.style.top = o.top + window.scrollY + "px", ct.current.style.left = o.left + window.scrollX + "px", W && lt.current) lt.current.style.transform = o.transform, lt.current.style.setProperty("-ms-transform", o.transform), lt.current.style.setProperty("-webkit-transform", o.transform), lt.current.style.top = (null === (t = L.top) || void 0 === t ? void 0 : t.toString()) || o.arrowTop, lt.current.style.left = (null === (e = L.left) || void 0 === e ? void 0 : e.toString()) || o.arrowLeft
                        }
                    };
                    Et = vt, void 0 === (Ot = C) && (Ot = !0), (0, r.useEffect)((function() {
                            if (Ot) {
                                var t = function(t) {
                                    "Escape" === t.key && Et()
                                };
                                return document.addEventListener("keyup", t),
                                    function() {
                                        Ot && document.removeEventListener("keyup", t)
                                    }
                            }
                        }), [Et, Ot]),
                        function(t, e) {
                            void 0 === e && (e = !0), (0, r.useEffect)((function() {
                                if (e) {
                                    var n = function(e) {
                                        if (9 === e.keyCode) {
                                            var n, r = null == t || null === (n = t.current) || void 0 === n ? void 0 : n.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),
                                                o = Array.prototype.slice.call(r);
                                            if (1 === o.length) return void e.preventDefault();
                                            var i = o[0],
                                                a = o[o.length - 1];
                                            e.shiftKey && document.activeElement === i ? (e.preventDefault(), a.focus()) : document.activeElement === a && (e.preventDefault(), i.focus())
                                        }
                                    };
                                    return document.addEventListener("keydown", n),
                                        function() {
                                            e && document.removeEventListener("keydown", n)
                                        }
                                }
                            }), [t, e])
                        }(ct, it && dt),
                        function(t, e) {
                            void 0 === e && (e = !0), (0, r.useEffect)((function() {
                                if (e) {
                                    var n = function() {
                                        t()
                                    };
                                    return window.addEventListener("resize", n),
                                        function() {
                                            e && window.removeEventListener("resize", n)
                                        }
                                }
                            }), [t, e])
                        }(St, j),
                        function(t, e, n) {
                            void 0 === n && (n = !0), (0, r.useEffect)((function() {
                                if (n) {
                                    var r = function(n) {
                                        var r = Array.isArray(t) ? t : [t],
                                            o = !1;
                                        r.forEach((function(t) {
                                            t.current && !t.current.contains(n.target) || (o = !0)
                                        })), n.stopPropagation(), o || e()
                                    };
                                    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r),
                                        function() {
                                            n && (document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r))
                                        }
                                }
                            }), [t, e, n])
                        }(c ? [ct, ut] : [ct], vt, O && !x);
                    var jt, At = function() {
                            return r.createElement("div", Object.assign({}, (t = dt ? u.popupContent.modal : u.popupContent.tooltip, e = {
                                className: "popup-content " + ("" !== F ? F.split(" ").map((function(t) {
                                    return t + "-content"
                                })).join(" ") : ""),
                                style: i({}, t, V, {
                                    pointerEvents: "auto"
                                }),
                                ref: ct,
                                onClick: function(t) {
                                    t.stopPropagation()
                                }
                            }, !_ && P.indexOf("hover") >= 0 && (e.onMouseEnter = yt, e.onMouseLeave = bt), e), {
                                key: "C",
                                role: dt ? "dialog" : "tooltip",
                                id: ft.current
                            }), W && !dt && r.createElement("div", {
                                ref: lt,
                                style: u.popupArrow
                            }, r.createElement("svg", {
                                "data-testid": "arrow",
                                className: "popup-arrow " + ("" !== F ? F.split(" ").map((function(t) {
                                    return t + "-arrow"
                                })).join(" ") : ""),
                                viewBox: "0 0 32 16",
                                style: i({
                                    position: "absolute"
                                }, L)
                            }, r.createElement("path", {
                                d: "M16 0l16 16H0z",
                                fill: "currentcolor"
                            }))), rt && "function" == typeof rt ? rt(vt, it) : rt);
                            var t, e
                        },
                        Ct = !(P.indexOf("hover") >= 0),
                        Rt = dt ? u.overlay.modal : u.overlay.tooltip,
                        Pt = [Ct && r.createElement("div", {
                            key: "O",
                            "data-testid": "overlay",
                            "data-popup": dt ? "modal" : "tooltip",
                            className: "popup-overlay " + ("" !== F ? F.split(" ").map((function(t) {
                                return t + "-overlay"
                            })).join(" ") : ""),
                            style: i({}, Rt, N, {
                                pointerEvents: O && x || dt ? "auto" : "none"
                            }),
                            onClick: O && x ? vt : void 0,
                            tabIndex: -1
                        }, dt && At()), !dt && At()];
                    return r.createElement(r.Fragment, null, function() {
                        for (var t = {
                                key: "T",
                                ref: ut,
                                "aria-describedby": ft.current
                            }, e = Array.isArray(P) ? P : [P], n = 0, o = e.length; n < o; n++) switch (e[n]) {
                            case "click":
                                t.onClick = mt;
                                break;
                            case "right-click":
                                t.onContextMenu = gt;
                                break;
                            case "hover":
                                t.onMouseEnter = yt, t.onMouseLeave = bt;
                                break;
                            case "focus":
                                t.onFocus = yt, t.onBlur = bt
                        }
                        if ("function" == typeof c) {
                            var i = c(it);
                            return !!c && r.cloneElement(i, t)
                        }
                        return !!c && r.cloneElement(c, t)
                    }(), it && o.createPortal(Pt, (null === (jt = document.getElementById("popup-root")) && ((jt = document.createElement("div")).setAttribute("id", "popup-root"), document.body.appendChild(jt)), jt)))
                }));
            e.Z = d
        }
    }
]);
//# sourceMappingURL=12.chunk.d809326873acea28c998.js.map