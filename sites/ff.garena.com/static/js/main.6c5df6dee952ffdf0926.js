! function(t) {
    function n(n) {
        for (var r, i, s = n[0], c = n[1], u = n[2], f = 0, d = []; f < s.length; f++) i = s[f], Object.prototype.hasOwnProperty.call(o, i) && o[i] && d.push(o[i][0]), o[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        for (l && l(n); d.length;) d.shift()();
        return a.push.apply(a, u || []), e()
    }

    function e() {
        for (var t, n = 0; n < a.length; n++) {
            for (var e = a[n], r = !0, s = 1; s < e.length; s++) {
                var c = e[s];
                0 !== o[c] && (r = !1)
            }
            r && (a.splice(n--, 1), t = i(i.s = e[0]))
        }
        return t
    }
    var r = {},
        o = {
            0: 0
        },
        a = [];

    function i(n) {
        if (r[n]) return r[n].exports;
        var e = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(e.exports, e, e.exports, i), e.l = !0, e.exports
    }
    i.m = t, i.c = r, i.d = function(t, n, e) {
        i.o(t, n) || Object.defineProperty(t, n, {
            enumerable: !0,
            get: e
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, n) {
        if (1 & n && (t = i(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (i.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var r in t) i.d(e, r, function(n) {
                return t[n]
            }.bind(null, r));
        return e
    }, i.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(n, "a", n), n
    }, i.o = function(t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, i.p = "/";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = n, s = s.slice();
    for (var u = 0; u < s.length; u++) n(s[u]);
    var l = c;
    a.push([34, 1]), e()
}([, , , , , , function(t, n, e) {}, function(t, n, e) {}, function(t, n, e) {}, function(t, n, e) {}, function(t, n, e) {}, , , function(t) {
    t.exports = JSON.parse('{"InvalidToken":"Invalid token!","ServerError":"Server error!","NoAccount":"No account!","Login":"Login error!","ErrorMessage":"Error!!","btnConfirm":"Confirm","btnCancel":"Cancel","textError":"Error"}')
}, , , , , , , , , , function(t, n, e) {
    "use strict";
    e(6)
}, function(t, n, e) {
    "use strict";
    e(7)
}, function(t, n, e) {
    "use strict";
    e(8)
}, function(t, n, e) {
    "use strict";
    e(9)
}, , , , , function(t, n, e) {
    "use strict";
    e(10)
}, function(t, n) {
    ["".concat("https://freefiremobile-a.akamaihd.net/common/web_event/zendeskauth/assets", "/background.jpg")].forEach((function(t) {
        (new Image).src = t
    }))
}, function(t, n, e) {}, function(t, n, e) {
    "use strict";
    e.r(n);
    var r = e(0),
        o = e(3),
        a = e.n(o),
        i = e(2),
        s = e.n(i),
        c = e(11),
        u = e.n(c);

    function l(t) {
        return t.startsWith("_") ? t.slice(1, t.length) : t.replace(/[_.-](\w|$)/g, (function(t, n) {
            return n.toUpperCase()
        }))
    }

    function f(t) {
        return t.replace(/(?:^|\.?)([A-Z])/g, (function(t, n) {
            return "_".concat(n.toLowerCase())
        }))
    }

    function d(t) {
        return function n(e) {
            if (e instanceof Array) return e.map((function(t) {
                return n(t)
            }));
            if (e instanceof Object) {
                var r = {};
                return Object.keys(e).forEach((function(o) {
                    r[t(o)] = n(e[o])
                })), r
            }
            return e
        }
    }

    function p(t) {
        return 1 === t.length ? "0".concat(t) : t
    }
    var g = {
            getRegion: function() {
                var t = window.location.pathname.replace(/^\/(europe|ind|bd|ru|sg).*/, "$1");
                return "/" === t && (t = "sg"), t
            },
            getParam: function(t, n) {
                var e = n || window.location.href,
                    r = t.replace(/[[]]/g, "\\$&"),
                    o = new RegExp("[?&]".concat(r, "(=([^&#]*)|&|#|$)")).exec(e);
                return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
            },
            camelizeStr: l,
            snakifyStr: f,
            delay: function(t) {
                return new Promise((function(n) {
                    return setTimeout(n, t)
                }))
            },
            camelizeKeys: d(l),
            snakifyKeys: d(f),
            capitalize: function(t) {
                return "string" != typeof t ? "" : t.charAt(0).toUpperCase() + t.slice(1)
            },
            parseTime: function(t) {
                var n = Math.floor(t / 86400) || 0,
                    e = Math.floor(t % 86400 / 3600) || 0,
                    r = Math.floor(t % 3600 / 60) || 0,
                    o = Math.floor(t % 60) || 0;
                return {
                    d: p(n.toString()),
                    h: p(e.toString()),
                    m: p(r.toString()),
                    s: p(o.toString())
                }
            },
            transformImage: function(t, n) {
                if (!t) return "";
                if (!n) return t;
                var e = t.substr(0, t.lastIndexOf("/")),
                    r = u.a.basename(t);
                return "".concat(e, "/").concat(r.substr(0, r.lastIndexOf(".")), "-").concat(n, ".png")
            },
            prependZero: p,
            includes: function(t, n) {
                return -1 !== t.indexOf(n)
            },
            excludes: function(t, n) {
                return -1 === t.indexOf(n)
            }
        },
        h = e(12),
        v = e.n(h),
        m = e(5),
        b = e(13),
        _ = {};
    _.sg_en = b;
    var y = _;
    r.default.use(m.a), r.default.use({
        install: function(t, n) {
            var e = n.cdn;
            t.prototype.$assetsUrl = function(t) {
                return [e, t].join("/")
            }, t.prototype.$i18nUrl = function(t) {
                var n = this.$i18n.locale || "sg_en";
                return this.$assetsUrl([n, t].join("/"))
            }
        }
    }, {
        cdn: "https://freefiremobile-a.akamaihd.net/common/web_event/zendeskauth/assets"
    });
    var w = {},
        k = new m.a({
            locale: "sg_en",
            fallbackLocale: "sg_en",
            messages: y
        });

    function C(t) {
        return k.locale = t, document.documentElement.lang = t, t
    }
    var x = JSON.parse('{"sg_en":18}'),
        S = {
            ind_en: "rosetta-ind",
            ind_hi: "rosetta-ind",
            sac_es: "rosetta-sac",
            na_en: "rosetta-sac",
            na_es: "rosetta-sac",
            us_es: "rosetta-us"
        },
        O = function() {
            var t = a()(s.a.mark((function t(n) {
                var e, r;
                return s.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, e = S[n] || "rosetta", t.next = 4, fetch("https://".concat(e, ".garenanow.com/transify/").concat("0", "?lang=").concat(x[n]));
                        case 4:
                            if (200 !== (r = t.sent).status) {
                                t.next = 7;
                                break
                            }
                            return t.abrupt("return", r.json());
                        case 7:
                            throw Error("Fetch Rosetta failed with status ".concat(r.status));
                        case 10:
                            return t.prev = 10, t.t0 = t.catch(0), console.warn("Referring to local translation due to", t.t0), t.abrupt("return", y[n]);
                        case 14:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [0, 10]
                ])
            })));
            return function(n) {
                return t.apply(this, arguments)
            }
        }();

    function E(t) {
        return M.apply(this, arguments)
    }

    function M() {
        return (M = a()(s.a.mark((function t(n) {
            var e, r, o, a, i, c;
            return s.a.wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (!(n in w)) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return", C(n));
                    case 2:
                        return e = Object.keys(x), (r = e.find((function(t) {
                            return t === n
                        }))) || (o = n.split("_"), a = v()(o, 1), i = a[0], r = e.find((function(t) {
                            return t.indexOf(i) > -1
                        })) || "sg_en"), t.next = 7, O(r);
                    case 7:
                        return c = t.sent, k.setLocaleMessage(r, c), w[r] = !0, t.abrupt("return", C(r));
                    case 11:
                    case "end":
                        return t.stop()
                }
            }), t)
        })))).apply(this, arguments)
    }
    var P = e(4),
        j = {
            name: "ButtonPrimary"
        },
        L = (e(23), e(1)),
        $ = Object(L.a)(j, (function() {
            var t = this.$createElement;
            return (this._self._c || t)("button", this._g({
                staticClass: "button-primary"
            }, this.$listeners), [this._t("default")], 2)
        }), [], !1, null, "797edaaf", null).exports,
        z = {
            name: "BaseModalSmall",
            methods: {
                close: function() {
                    this.$emit("close")
                }
            }
        },
        I = (e(24), Object(L.a)(z, (function() {
            var t = this.$createElement,
                n = this._self._c || t;
            return n("div", {
                staticClass: "modal"
            }, [n("div", {
                staticClass: "dialog"
            }, [n("div", {
                staticClass: "header"
            }, [this._t("header"), this._v(" "), n("button", {
                staticClass: "btn-close",
                on: {
                    click: this.close
                }
            })], 2), this._v(" "), n("div", {
                staticClass: "body"
            }, [this._t("default")], 2), this._v(" "), n("div", {
                staticClass: "footer"
            }, [this._t("footer")], 2)])])
        }), [], !1, null, "875378f8", null).exports),
        A = {
            name: "ModalError",
            props: {
                error: {
                    type: String,
                    required: !0
                }
            },
            components: {
                ButtonPrimary: $,
                BaseModalSmall: I
            },
            computed: {
                message: function() {
                    return this.$t(g.capitalize(this.error))
                }
            }
        },
        T = (e(25), Object(L.a)(A, (function() {
            var t = this,
                n = t.$createElement,
                e = t._self._c || n;
            return e("BaseModalSmall", {
                on: {
                    close: function(n) {
                        return t.$emit("close")
                    }
                },
                scopedSlots: t._u([{
                    key: "header",
                    fn: function() {
                        return [e("span", [t._v(t._s(t.$t("textError")))])]
                    },
                    proxy: !0
                }, {
                    key: "footer",
                    fn: function() {
                        return [e("ButtonPrimary", {
                            on: {
                                click: function(n) {
                                    return t.$emit("close")
                                }
                            }
                        }, [e("span", [t._v(t._s(t.$t("btnConfirm")))])])]
                    },
                    proxy: !0
                }])
            }, [t._v(" "), e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "message"
            }, [t._v(t._s(t.message))])])])
        }), [], !1, null, "472757f8", null).exports),
        B = {
            name: "Loading",
            components: {
                MountingPortal: P.MountingPortal
            }
        },
        F = (e(26), Object(L.a)(B, (function() {
            var t = this.$createElement,
                n = this._self._c || t;
            return n("MountingPortal", {
                attrs: {
                    append: "",
                    mountTo: "body"
                }
            }, [n("div", {
                staticClass: "loading"
            })])
        }), [], !1, null, "4333bfda", null).exports),
        R = e(14),
        U = e.n(R);
    var K = {
            name: "App",
            components: {
                ModalError: T,
                MountingPortal: P.MountingPortal,
                Loading: F
            },
            data: function() {
                return {
                    error: "",
                    loading: !0
                }
            },
            computed: {
                authZd: function() {
                    var t = g.getParam("return_to"),
                        n = t ? /:\/\/([^/]+)/.exec(t)[1].split(".")[0] : "ffsupport",
                        e = g.getParam("ios"),
                        r = "".concat("https://zendeskauth.ff.garena.com/login", "?return_to=").concat(t, "&subdomain=").concat(n);
                    return "1" === e && (r += "&ios=1"), r
                },
                oauthLink: function() {
                    var t = {
                        client_id: "100067",
                        response_type: "token",
                        redirect_uri: this.authZd
                    };
                    return "".concat("https://auth.garena.com/oauth/login", "?").concat(U.a.stringify(t))
                },
                isMobile: function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                },
                isIos: function() {
                    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
                }
            },
            methods: {
                loginLink: function(t) {
                    window.location = "".concat(this.oauthLink, "&platform=").concat(t)
                },
                clearError: function() {
                    this.error = null
                }
            },
            mounted: function() {
                var t = this;
                return a()(s.a.mark((function n() {
                    var e, r;
                    return s.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, E("sg_en");
                            case 2:
                                e = g.getParam("error"), r = g.getParam("access_token"), e && (t.error = e), r ? (t.loading = !0, window.location.href = "https://zendeskauth.ff.garena.com/login?access_token=".concat(r)) : t.loading = !1;
                            case 6:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))()
            }
        },
        N = (e(31), Object(L.a)(K, (function() {
            var t = this,
                n = t.$createElement,
                e = t._self._c || n;
            return e("div", {
                attrs: {
                    id: "app"
                }
            }, [t.loading ? e("Loading") : e("div", {
                staticClass: "content"
            }, [e("div", {
                staticClass: "home-background"
            }), t._v(" "), e("div", {
                staticClass: "ff-logo"
            }), t._v(" "), e("div", {
                staticClass: "container"
            }, [e("div", {
                staticClass: "title"
            }, [t._v("FF CUSTOMER SERVICE")]), t._v(" "), e("div", {
                staticClass: "subtitle"
            }, [t._v("Please login to your Free Fire account")]), t._v(" "), e("div", {
                staticClass: "options"
            }, [e("button", {
                staticClass: "btn-facebook",
                on: {
                    click: function(n) {
                        return t.loginLink(3)
                    }
                }
            }), t._v(" "), e("button", {
                staticClass: "btn-vk",
                on: {
                    click: function(n) {
                        return t.loginLink(5)
                    }
                }
            }), t._v(" "), e("button", {
                staticClass: "btn-google",
                on: {
                    click: function(n) {
                        return t.loginLink(8)
                    }
                }
            }), t._v(" "), e("button", {
                staticClass: "btn-huawei",
                on: {
                    click: function(n) {
                        return t.loginLink(7)
                    }
                }
            }), t._v(" "), e("button", {
                staticClass: "btn-apple",
                on: {
                    click: function(n) {
                        return t.loginLink(10)
                    }
                }
            }), t._v(" "), e("button", {
                staticClass: "btn-twitter",
                on: {
                    click: function(n) {
                        return t.loginLink(11)
                    }
                }
            })]), t._v(" "), e("div", {
                staticClass: "link"
            }, [t._v("\n        Ensure that you link your Free Fire account to be able to submit a\n        ticket\n      ")])]), t._v(" "), t.isMobile ? t._e() : e("div", {
                staticClass: "note"
            }, [t._v("\n      *Our support is limited to and will only entertain requests in English\n      Language.\n    ")]), t._v(" "), e("footer", [e("div", {
                staticClass: "garena"
            }), t._v(" "), e("div", {
                staticClass: "copyright"
            }, [e("p", [t._v("Copyright © Garena International.")]), t._v(" "), e("p", [t._v("\n          Trademarks belong to their respective owners. All rights Reserved.\n        ")])])])]), t._v(" "), e("MountingPortal", {
                attrs: {
                    append: "",
                    mountTo: "body"
                }
            }, [e("transition", {
                attrs: {
                    name: "modal"
                }
            }, [t.error ? e("ModalError", {
                attrs: {
                    error: t.error
                },
                on: {
                    close: t.clearError
                }
            }) : t._e()], 1)], 1)], 1)
        }), [], !1, null, null, null).exports),
        Z = e(36);
    r.default.filter("dateFormat", (function(t, n) {
        return t ? n ? Object(Z.a)(t, n) : t : ""
    })), r.default.filter("chineseNumber", (function(t) {
        if (!t || "number" != typeof t) return t;
        return ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"][t - 1]
    })), r.default.filter("commaNumber", (function(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })), r.default.filter("prependZero", (function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
            e = "0".repeat(n);
        return t ? ("string" != typeof t && (e = t.toString()), e.padStart(n, "0")) : e
    })), r.default.filter("capitalize", (function(t) {
        return t ? t.toString().charAt(0).toUpperCase() + t.slice(1) : ""
    })), r.default.filter("camelizeStr", g.camelizeStr), r.default.filter("snakifyStr", g.snakifyStr), r.default.filter("camelizeKeys", g.camelizeKeys), r.default.filter("snakifyKeys", g.snakifyKeys);
    e(32), e(33);
    ! function() {
        var t = document.documentElement;

        function n() {
            var n, e = Math.max(window.innerHeight, window.innerWidth),
                r = Math.min(window.innerHeight, window.innerWidth);
            n = e / r > 1334 / 750 ? r / 750 * 100 : e / 1334 * 100, t.style.fontSize = "".concat(n, "px"), t.style.height = "".concat(r, "px"), t.style.width = "".concat(e, "px")
        }
        n(), window.addEventListener("orientationchange", n), window.addEventListener("resize", n)
    }(), r.default.config.productionTip = !1, window.vue = new r.default({
        el: "#app",
        i18n: k,
        render: function(t) {
            return t(N)
        }
    })
}]);