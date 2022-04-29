(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [70], {
        8419: function(e, t, r) {
            "use strict";
            r.d(t, {
                uD: function() {
                    return U
                }
            });
            var n = r(8709),
                o = r(16),
                a = r(7431);

            function i(e, t, r, n, o, a, i) {
                try {
                    var u = e[a](i),
                        c = u.value
                } catch (e) {
                    return void r(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(n, o)
            }
            var u = function(e) {
                    var t = e.logoutStore,
                        r = e.items,
                        u = e.sessionUsername,
                        c = e.location,
                        s = void 0 === c ? window.location : c,
                        l = (0, a.Ir)().isMsa,
                        f = function() {
                            var e, r = (e = regeneratorRuntime.mark((function e(r) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.preventDefault(), e.next = 3, t.logout(l);
                                        case 3:
                                            n = e.sent, s.assign(n);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    r = arguments;
                                return new Promise((function(n, o) {
                                    var a = e.apply(t, r);

                                    function u(e) {
                                        i(a, n, o, u, c, "next", e)
                                    }

                                    function c(e) {
                                        i(a, n, o, u, c, "throw", e)
                                    }
                                    u(void 0)
                                }))
                            });
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }(),
                        m = r.map((function() {
                            return n.createRef()
                        }));
                    return n.createElement(n.Fragment, null, n.createElement(o.Q6, {
                        "data-aem-contentname": "Profile dropdown",
                        items: r,
                        itemRefs: m,
                        id: "profiledd1",
                        buttonTitle: u,
                        buttonProps: {
                            size: "sm",
                            className: "nav-link inverted text-smaller font-weight-normal"
                        },
                        ariaLabel: "Account navigation menu"
                    }, (function(e) {
                        return n.createElement(n.Fragment, null, r.map((function(t, r) {
                            return t.href ? n.createElement("a", {
                                "data-aem-contentname": "Dropdown anchor item",
                                "data-testid": "dropdown-anchor-item",
                                key: r,
                                href: t.href,
                                className: "dropdown-item text-truncate",
                                ref: m[r],
                                tabIndex: 0,
                                onClick: e
                            }, t.name) : n.createElement("button", {
                                "data-aem-contentname": "Dropdown button item",
                                "data-testid": "dropdown-button-item",
                                key: r,
                                className: "dropdown-item text-truncate text-uppercase",
                                ref: m[r],
                                tabIndex: 0,
                                onClick: function(e) {
                                    f(e)
                                },
                                onKeyDown: function(e) {
                                    return "Enter" === e.key && f(e)
                                }
                            }, t.name)
                        })))
                    })))
                },
                c = r(7503),
                s = r(5487),
                l = r(6089);

            function f(e) {
                return function(e) {
                    if (Array.isArray(e)) return m(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return m(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var h = function(e) {
                    var t = e.logoutStore,
                        r = e.getSessionUsername,
                        o = e.itemUrls,
                        a = (0, l.useTranslation)().t,
                        i = (0, c.oR)(c.mR),
                        m = [{
                            name: a("Profile"),
                            href: o.profile
                        }, {
                            name: a("Order History"),
                            href: o.orderHistory || null
                        }, {
                            name: a("Log out")
                        }].filter((function(e) {
                            return null !== e.href
                        }));
                    return (0, s.SZ)((function() {
                        var e = i.state,
                            c = e.fetching,
                            s = e.userDetails;
                        if (!c && s && r()) {
                            var l = s.emailVerified,
                                h = [{
                                    name: a("Verify this account"),
                                    href: o.verifyEmail
                                }],
                                p = [].concat(f(l ? [] : h), f(m));
                            return n.createElement(u, {
                                logoutStore: t,
                                items: p,
                                sessionUsername: r()
                            })
                        }
                        return null
                    }))
                },
                p = r(9474);

            function y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? y(Object(r), !0).forEach((function(t) {
                        d(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function d(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var v = g({
                    translationPath: p.iZ,
                    "url.verifyEmail": null,
                    "url.orderHistory": null
                }, p.gZ),
                b = g(g(g({}, v), p.Di), window.accountNavMenuConfig),
                S = (0, p.Gu)(b, "accountNavMenuConfig"),
                w = r(6418),
                P = function(e) {
                    var t = e.logoutStore,
                        r = e.getSessionUsername,
                        o = e.itemUrls,
                        a = (0, l.useTranslation)().t,
                        i = [{
                            name: a("Profile"),
                            href: o.profile
                        }, {
                            name: a("Log out")
                        }].filter((function(e) {
                            return null !== e.href
                        }));
                    return (0, s.SZ)((function() {
                        return r() ? n.createElement(u, {
                            logoutStore: t,
                            items: i,
                            sessionUsername: r()
                        }) : null
                    }))
                },
                _ = r(8369),
                E = r(9348),
                O = function() {
                    var e = {
                            login: S["url.login"],
                            profile: S["url.profile"],
                            orderHistory: S["url.orderHistory"],
                            verifyEmail: S["url.verifyEmail"]
                        },
                        t = (0, a.LP)(),
                        r = (0, a.Ir)(),
                        o = r.validating,
                        i = r.valid,
                        u = r.isMsa;
                    return (0, s.SZ)((function() {
                        return o ? null : i ? u && (0, a.Ph)() ? n.createElement(P, {
                            logoutStore: E.eg,
                            getSessionUsername: a.Ph,
                            itemUrls: e
                        }) : i && !u && n.createElement(c.n7, {
                            stores: [
                                [c.mR, c._c.getInstance()]
                            ]
                        }, n.createElement(_.Au, {
                            token: t
                        }, n.createElement(h, {
                            logoutStore: E.eg,
                            getSessionUsername: a.Ph,
                            itemUrls: e
                        }))) : n.createElement("a", {
                            "data-aem-contentname": "Log in",
                            href: e.login,
                            className: "nav-link inverted"
                        }, n.createElement(l.T, null, "Log in"))
                    }))
                },
                U = function() {
                    var e = S.translationPath,
                        t = S.language,
                        r = (0, w.t)(e, t);
                    return r && n.createElement(a.hz, null, n.createElement(l.TranslationProvider, {
                        translation: r
                    }, n.createElement(O, null)))
                };
            r(6250)
        },
        6166: function(e, t, r) {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            /**
             *
             *
             * @author Jerry Bendy <jerry@icewingcc.com>
             * @licence MIT
             *
             */
            ! function(e) {
                "use strict";
                var t, r = function() {
                        try {
                            if (e.URLSearchParams && "bar" === new e.URLSearchParams("foo=bar").get("foo")) return e.URLSearchParams
                        } catch (e) {}
                        return null
                    }(),
                    o = r && "a=1" === new r({
                        a: 1
                    }).toString(),
                    a = r && "+" === new r("s=%2B").get("s"),
                    i = !r || ((t = new r).append("s", " &"), "s=+%26" === t.toString()),
                    u = f.prototype,
                    c = !(!e.Symbol || !e.Symbol.iterator);
                if (!(r && o && a && i)) {
                    u.append = function(e, t) {
                        g(this.__URLSearchParams__, e, t)
                    }, u.delete = function(e) {
                        delete this.__URLSearchParams__[e]
                    }, u.get = function(e) {
                        var t = this.__URLSearchParams__;
                        return this.has(e) ? t[e][0] : null
                    }, u.getAll = function(e) {
                        var t = this.__URLSearchParams__;
                        return this.has(e) ? t[e].slice(0) : []
                    }, u.has = function(e) {
                        return v(this.__URLSearchParams__, e)
                    }, u.set = function(e, t) {
                        this.__URLSearchParams__[e] = ["" + t]
                    }, u.toString = function() {
                        var e, t, r, n, o = this.__URLSearchParams__,
                            a = [];
                        for (t in o)
                            for (r = m(t), e = 0, n = o[t]; e < n.length; e++) a.push(r + "=" + m(n[e]));
                        return a.join("&")
                    };
                    var s = !!a && r && !o && e.Proxy;
                    Object.defineProperty(e, "URLSearchParams", {
                        value: s ? new Proxy(r, {
                            construct: function(e, t) {
                                return new e(new f(t[0]).toString())
                            }
                        }) : f
                    });
                    var l = e.URLSearchParams.prototype;
                    l.polyfill = !0, l.forEach = l.forEach || function(e, t) {
                        var r = y(this.toString());
                        Object.getOwnPropertyNames(r).forEach((function(n) {
                            r[n].forEach((function(r) {
                                e.call(t, r, n, this)
                            }), this)
                        }), this)
                    }, l.sort = l.sort || function() {
                        var e, t, r, n = y(this.toString()),
                            o = [];
                        for (e in n) o.push(e);
                        for (o.sort(), t = 0; t < o.length; t++) this.delete(o[t]);
                        for (t = 0; t < o.length; t++) {
                            var a = o[t],
                                i = n[a];
                            for (r = 0; r < i.length; r++) this.append(a, i[r])
                        }
                    }, l.keys = l.keys || function() {
                        var e = [];
                        return this.forEach((function(t, r) {
                            e.push(r)
                        })), p(e)
                    }, l.values = l.values || function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t)
                        })), p(e)
                    }, l.entries = l.entries || function() {
                        var e = [];
                        return this.forEach((function(t, r) {
                            e.push([r, t])
                        })), p(e)
                    }, c && (l[e.Symbol.iterator] = l[e.Symbol.iterator] || l.entries)
                }

                function f(e) {
                    ((e = e || "") instanceof URLSearchParams || e instanceof f) && (e = e.toString()), this.__URLSearchParams__ = y(e)
                }

                function m(e) {
                    var t = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": "\0"
                    };
                    return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g, (function(e) {
                        return t[e]
                    }))
                }

                function h(e) {
                    return e.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, (function(e) {
                        return decodeURIComponent(e)
                    }))
                }

                function p(t) {
                    var r = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return c && (r[e.Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function y(e) {
                    var t = {};
                    if ("object" === n(e))
                        if (d(e))
                            for (var r = 0; r < e.length; r++) {
                                var o = e[r];
                                if (!d(o) || 2 !== o.length) throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                                g(t, o[0], o[1])
                            } else
                                for (var a in e) e.hasOwnProperty(a) && g(t, a, e[a]);
                        else {
                            0 === e.indexOf("?") && (e = e.slice(1));
                            for (var i = e.split("&"), u = 0; u < i.length; u++) {
                                var c = i[u],
                                    s = c.indexOf("="); - 1 < s ? g(t, h(c.slice(0, s)), h(c.slice(s + 1))) : c && g(t, h(c), "")
                            }
                        }
                    return t
                }

                function g(e, t, r) {
                    var n = "string" == typeof r ? r : null != r && "function" == typeof r.toString ? r.toString() : JSON.stringify(r);
                    v(e, t) ? e[t].push(n) : e[t] = [n]
                }

                function d(e) {
                    return !!e && "[object Array]" === Object.prototype.toString.call(e)
                }

                function v(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
            }(void 0 !== r.g ? r.g : "undefined" != typeof window ? window : this)
        }
    }
]);
//# sourceMappingURL=70.chunk.93e9a9a06367a40e9771.js.map