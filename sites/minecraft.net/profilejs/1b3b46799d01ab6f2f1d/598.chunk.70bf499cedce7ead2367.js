(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [598], {
        4354: function(e, t, n) {
            "use strict";
            n.r(t);
            n(7703), n(6198), n(4866), n(3413), n(9973);
            var a = n(8709),
                r = n(1169),
                l = n(2707),
                c = n(1031),
                o = n(2708),
                i = n(9348),
                s = n(6089),
                m = n(717),
                u = n(6418),
                g = n(9597),
                d = function(e) {
                    var t = e.title;
                    return a.createElement(g.ZP, null, a.createElement("title", null, "".concat(t, " | Minecraft")))
                },
                f = n(6001),
                E = n(8369),
                p = n(8196),
                v = n(16),
                h = function(e) {
                    var t = e.children;
                    return /MSIE|Trident/.test(navigator.userAgent) ? a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-md-10 col-lg-8 col-xl-6"
                    }, a.createElement("h1", null, a.createElement(s.T, null, "Unsupported Browser.")), a.createElement(v.nv, null, a.createElement(s.T, null, "You are using an unsupported browser. Please switch to the latest browsers."))))) : a.createElement(a.Fragment, null, t)
                },
                b = function(e) {
                    var t = e.children,
                        n = e.enableMaintenanceView;
                    return "enKGr49N7mL4Bt7Q93Yh" !== new URLSearchParams(window.location.search).get("testId") && n ? a.createElement(a.Fragment, null, a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-md-10 col-lg-8 col-xl-6"
                    }, a.createElement("h3", null, "We are down for maintenance. We'll be back soon...")))))) : a.createElement(a.Fragment, null, t)
                },
                w = n(4050),
                N = n(638),
                y = n(102);

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        O(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function O(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function T(e, t, n, a, r, l, c) {
                try {
                    var o = e[l](c),
                        i = o.value
                } catch (e) {
                    return void n(e)
                }
                o.done ? t(i) : Promise.resolve(i).then(a, r)
            }
            fetch(n.p + "assets/sprite.svg").then((function(e) {
                return e.text()
            })).then(function() {
                var e, t = (e = regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, f.m)('[data-role="sprite"]');
                            case 2:
                                e.sent.innerHTML = t;
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })), function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, r) {
                        var l = e.apply(t, n);

                        function c(e) {
                            T(l, a, r, c, o, "next", e)
                        }

                        function o(e) {
                            T(l, a, r, c, o, "throw", e)
                        }
                        c(void 0)
                    }))
                });
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()).catch((function(e) {
                return console.error("failed to load sprite", e)
            }));
            var x = a.lazy((function() {
                    return Promise.all([n.e(592), n.e(873)]).then(n.bind(n, 4936))
                })),
                A = function() {
                    var e = (0, s.useTranslation)().t;
                    return localStorage.setItem("IsNewProfileEnabled", window.sharedEnvConfig["enable.newProfile"] ? window.sharedEnvConfig["enable.newProfile"].toString() : "false"), a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Log in")
                    }), a.createElement(b, {
                        enableMaintenanceView: o.N["enable.maintenanceView"]
                    }, a.createElement(h, null, a.createElement("div", {
                        "data-aem-item": "Log in Module",
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-10 col-md-8 col-lg-5"
                    }, a.createElement(x, null))))))))
                },
                F = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Log out")
                    }), a.createElement("div", {
                        "data-aem-item": "Log out Module",
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(i.h4, null))))
                },
                R = a.lazy((function() {
                    return n.e(533).then(n.bind(n, 3533))
                })),
                W = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Profile")
                    }), a.createElement(b, {
                        enableMaintenanceView: o.N["enable.maintenanceView"]
                    }, a.createElement("div", {
                        "data-aem-item": "Profile Module",
                        className: "bg-wool-light bg-img-height"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "site-content--hide-footer"
                    }, a.createElement(R, null))))))
                },
                k = a.lazy((function() {
                    return n.e(601).then(n.bind(n, 3601))
                })),
                M = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Forgot Password")
                    }), a.createElement("div", {
                        "data-aem-item": "Forgot Password Module",
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(k, null))))))
                },
                L = a.lazy((function() {
                    return Promise.all([n.e(691), n.e(478)]).then(n.bind(n, 7478))
                })),
                S = function() {
                    var e = (0, s.useTranslation)().t,
                        t = (0, c.UO)().passwordResetToken;
                    return window.passwordResetConfig = j(j({}, window.passwordResetConfig), {}, {
                        passwordResetToken: t
                    }), a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Reset password")
                    }), a.createElement("div", {
                        "data-aem-item": "Reset Password Module",
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(L, null))))))
                },
                C = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Order summary")
                    }), a.createElement("div", {
                        "data-aem-item": "Order Summary Module",
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(m.$, null))))))
                },
                V = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Link Accounts")
                    }), a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(E.AI, null))))))
                },
                z = a.lazy((function() {
                    return Promise.all([n.e(592), n.e(344)]).then(n.bind(n, 344))
                })),
                B = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Registration")
                    }), a.createElement(h, null, a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(z, null)))))))
                },
                I = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Account security")
                    }), a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(N.J, {
                        postLogoutFn: w.rf
                    }))))))
                },
                _ = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Buy Minecraft")
                    }), a.createElement(b, {
                        enableMaintenanceView: o.N["enable.maintenanceView"]
                    }, a.createElement(h, null, a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(p.t, null))))))))
                },
                q = a.lazy((function() {
                    return Promise.all([n.e(592), n.e(936)]).then(n.bind(n, 8936))
                })),
                U = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Set Profile Name")
                    }), a.createElement(h, null, a.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer bg-img-height bg-globe d-flex align-items-center"
                    }, a.createElement("div", {
                        className: "container"
                    }, a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12 col-sm-8 col-lg-6"
                    }, a.createElement(q, null)))))))
                },
                D = function() {
                    var e = (0, s.useTranslation)().t;
                    return a.createElement(a.Fragment, null, a.createElement(d, {
                        title: e("Billing info")
                    }), a.createElement("div", {
                        className: "row justify-content-center"
                    }, a.createElement("div", {
                        className: "col-12"
                    }, a.createElement(y.AX, null))))
                },
                H = function() {
                    return a.useEffect((function() {
                        window.location.replace("/404")
                    })), a.createElement(a.Fragment, null)
                },
                Y = function() {
                    var e = o.N.translationPath,
                        t = o.N.language,
                        n = (0, u.t)(e, t);
                    return n && a.createElement("main", {
                        className: "site-body--core-apps site-body--my-minecraft"
                    }, a.createElement(s.TranslationProvider, {
                        translation: n
                    }, a.createElement(l.BrowserRouter, {
                        basename: "/".concat(o.N.language)
                    }, a.createElement(a.Suspense, {
                        fallback: a.createElement("div", {
                            className: "area-overlay"
                        }, a.createElement("div", {
                            className: "bg-wool-light"
                        }), a.createElement("div", {
                            className: "preloader"
                        }, a.createElement("div", {
                            className: "bigsquare"
                        }, a.createElement("div", {
                            className: "square first"
                        }), a.createElement("div", {
                            className: "square second"
                        }), a.createElement("div", {
                            className: "square third"
                        }), a.createElement("div", {
                            className: "square fourth"
                        })), a.createElement("p", null, a.createElement(s.T, null, "Loading..."))))
                    }, a.createElement(c.rs, null, a.createElement(c.AW, {
                        exact: !0,
                        path: "/login",
                        component: A
                    }), a.createElement(c.AW, {
                        exact: !0,
                        path: "/logout",
                        component: F
                    }), a.createElement(c.AW, {
                        path: "/profile",
                        component: W
                    }), a.createElement(c.AW, {
                        path: "/password/reset/:passwordResetToken([a-f0-9]{32})",
                        component: S
                    }), a.createElement(c.AW, {
                        path: "/password/forgot",
                        component: M
                    }), a.createElement(c.AW, {
                        path: "/order-summary",
                        component: C
                    }), a.createElement(c.AW, {
                        path: "/link-accounts",
                        component: V
                    }), a.createElement(c.AW, {
                        exact: !0,
                        path: "/minecraft-java/setup/receipt",
                        component: B
                    }), a.createElement(c.AW, {
                        exact: !0,
                        path: "/store/minecraft-java-edition/buy",
                        component: _
                    }), a.createElement(c.AW, {
                        path: "/set-profile-name",
                        component: U
                    }), a.createElement(c.AW, {
                        path: "/account-security",
                        component: I
                    }), a.createElement(c.AW, {
                        path: "/forced-billing-info",
                        component: D
                    }), a.createElement(c.AW, {
                        component: H
                    }))))))
                };
            (0, f.I)("CoreAppsApp").then((function(e) {
                r.render(a.createElement(Y, null), e)
            })).catch(console.error)
        },
        4050: function(e, t, n) {
            "use strict";
            n.d(t, {
                gB: function() {
                    return l
                },
                rf: function() {
                    return c
                }
            });
            var a = n(2708),
                r = n(4211).N,
                l = function(e) {
                    var t = new URLSearchParams(location.search).get("return_url"),
                        n = "/".concat(a.N.language, "/").concat(e),
                        r = t ? o(unescape(t), a.N.whitelistedRedirectHosts, n) : n;
                    window.location.replace(r)
                },
                c = function(e) {
                    var t = o(e, a.N.whitelistedRedirectHosts, "/profile/");
                    l("login?return_url=".concat(escape(t)))
                };

            function o(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.location.origin,
                    l = r(e);
                if ("about:blank" === l) return n;
                if (/^\/\w.*/.test(e)) return l;
                var c = new URL(l, a),
                    o = c.hostname;
                return t.some((function(e) {
                    return o.includes(e)
                })) ? l : n
            }
        }
    }
]);
//# sourceMappingURL=598.chunk.70bf499cedce7ead2367.js.map