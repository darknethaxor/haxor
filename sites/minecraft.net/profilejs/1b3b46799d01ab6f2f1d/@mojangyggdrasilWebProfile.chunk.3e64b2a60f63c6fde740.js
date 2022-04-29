(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [713], {
        102: function(e, t, r) {
            "use strict";
            r.d(t, {
                I2: function() {
                    return xo
                },
                AX: function() {
                    return To
                },
                NU: function() {
                    return po
                },
                Ds: function() {
                    return z
                }
            });
            var n = r(8709),
                a = r(7656),
                o = r(6089),
                l = r(6418),
                i = r(9474);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach((function(t) {
                        u(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var m = s({
                    "enable.asq": !0,
                    "endpoint.checkoutUrl": i.iZ,
                    "realms.plans": [{
                        variantId: i.iZ,
                        subscription: !1,
                        duration: 0,
                        discount: i.iZ,
                        displayName: i.iZ,
                        quantity: 0,
                        price: i.iZ
                    }],
                    translationPath: i.iZ,
                    "url.realmsMarketingPage": i.iZ,
                    "url.realmsEulaUrl": i.iZ,
                    "url.realmsTrialCC": i.iZ,
                    "url.privacyPolicyUrl": i.iZ,
                    "url.billingInfoRemoveCard": i.iZ,
                    "url.billingInfoEditCard": i.iZ,
                    "url.billingInfoAddCard": i.iZ,
                    "asset.themeModelClassic": i.iZ,
                    "asset.themeModelSlim": i.iZ,
                    "url.restartUrl": i.iZ,
                    "url.profile": i.iZ,
                    "url.forcedBillingInfoPath": i.iZ
                }, i.gZ),
                f = s(s(s({}, m), i.Di), window.profileConfig),
                d = (0, i.Gu)(f, "profileConfig"),
                p = r(7431),
                h = r(5487),
                v = r(7503),
                y = r(2707),
                g = r(16);

            function b(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                (t = t || new Date(0)).setUTCMilliseconds(e);
                var r = t.getUTCFullYear(),
                    n = E(t.getUTCMonth() + 1, 2),
                    a = E(t.getUTCDate(), 2),
                    o = E(t.getUTCHours(), 2),
                    l = E(t.getUTCMinutes(), 2);
                return "".concat(r, "-").concat(n, "-").concat(a, "T").concat(o, ":").concat(l)
            }

            function E(e, t) {
                var r = "0" + e;
                return r.substr(r.length - t, t)
            }
            var w = function(e) {
                    var t = e.children,
                        r = e.label;
                    return n.createElement("dl", {
                        className: "row align-items-center mb-0 py-2"
                    }, n.createElement("dt", {
                        className: "col-4 font-weight-normal text-small text-600 mb-0"
                    }, r), n.createElement("dd", {
                        className: "col-8 text-small text-gray-dark mb-0 d-inline-flex",
                        "data-testid": r
                    }, t))
                },
                A = function() {
                    var e = (0, v.oR)(v.mR).state,
                        t = (0, o.useTranslation)().t;
                    if (!e.userDetails) return null;
                    var r = e.userDetails,
                        a = r.registeredAt,
                        l = r.email,
                        i = r.emailOfParent,
                        c = r.dateOfBirth,
                        s = r.registerIp;
                    return e.userDetails ? n.createElement(n.Fragment, null, n.createElement("h1", {
                        className: "font-mc-ten border-bottom mb-0"
                    }, n.createElement(o.T, null, "Personal information")), n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: t("E-mail")
                    }, l)), i && n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: t("Parents E-mail")
                    }, i)), c && n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: t("Date of birth")
                    }, function(e) {
                        return (b(e, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || "").split("T").shift()
                    }(c))), s && n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: t("Registration IP")
                    }, s)), a && n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: t("Registration Date (UTC)")
                    }, b(a)))) : null
                },
                C = r(2374),
                k = r(6618);

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = j(e);
                    if (t) {
                        var a = j(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return R(this, r)
                }
            }

            function R(e, t) {
                return !t || "object" !== T(t) && "function" != typeof t ? I(e) : t
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var P = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : T(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                N = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && x(e, t)
                    }(i, e);
                    var t, r, a, l = O(i);

                    function i(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, i), (t = l.call(this, e)).toggleDetailsExpanded = t.toggleDetailsExpanded.bind(I(t)), t
                    }
                    return t = i, (r = [{
                        key: "toggleDetailsExpanded",
                        value: function() {
                            return this.detailsExpanded = !this.detailsExpanded
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.createElement("div", {
                                className: "my-3 text-small",
                                "data-testid": "pii-disclaimer"
                            }, n.createElement(g.zx, {
                                variant: "link",
                                onClick: this.toggleDetailsExpanded,
                                "aria-expanded": !!this.detailsExpanded
                            }, n.createElement(o.T, null, "Why do you need my personal information?")), n.createElement(g.M0, {
                                expanded: this.detailsExpanded
                            }, (function(e) {
                                var t = e.ref;
                                return n.createElement("div", {
                                    className: "my-3",
                                    ref: t
                                }, n.createElement("p", null, n.createElement(o.T, null, "Basically it's both for your own safety and for ours. Should you somehow lose access to your account, this information will help strengthen your identity, and if you were to have an issue with one of your purchases from us, it will help us identify the correct payment data.")), n.createElement("p", null, n.createElement(o.T, null, "Having access to this information will also aid us in the battle against fraudsters and help protect our customers from making bad purchases of our products from illegitimate third-party sources.")), n.createElement("p", null, n.createElement(o.T, null, "We promise to not make your personal information available for public display. To learn more about your rights, and how we treat your information, read through the Privacy Policy section of Terms and Conditions.")))
                            })))
                        }
                    }]) && S(t.prototype, r), a && S(t, a), i
                }(n.Component);
            P([C.LO], N.prototype, "detailsExpanded", void 0), N = P([k.Pi], N);
            var M = r(6259);

            function D(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return B(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return B(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Q = function() {
                    var e = (0, v.oR)(v.mR),
                        t = (0, o.useTranslation)().t,
                        r = D(n.useState(!1), 2),
                        a = r[0],
                        l = r[1];
                    return (0, h.SZ)((function() {
                        var r = e.state;
                        return n.createElement("div", {
                            className: "my-5"
                        }, n.createElement("h2", {
                            className: "font-mc-ten border-bottom mb-0"
                        }, n.createElement(o.T, null, "Security information")), n.createElement("div", {
                            className: "py-3 ".concat(a ? "" : "border-bottom")
                        }, n.createElement(w, {
                            label: t("Password")
                        }, n.createElement(n.Fragment, null, n.createElement("span", {
                            className: "sr-only"
                        }, n.createElement(o.T, null, "Masked Password")), n.createElement("span", {
                            "aria-hidden": "true"
                        }, "●●●●●●●●●●●●●●"), n.createElement(g.zx, {
                            className: "ml-auto",
                            variant: "link",
                            "aria-label": t("Change password"),
                            "aria-expanded": !!a,
                            onClick: function() {
                                return l(!a)
                            }
                        }, n.createElement(o.T, null, "Change"))))), n.createElement(g.M0, {
                            expanded: a
                        }, (function(e) {
                            var t = e.ref,
                                a = e.updateHeight;
                            return n.createElement("div", {
                                className: "p-4 border",
                                ref: t
                            }, n.createElement(M.X, {
                                accountId: r.userDetails.id,
                                layoutChanged: a
                            }))
                        })))
                    }))
                },
                L = r(9928);

            function z(e) {
                var t, r, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = [];
                return function() {
                    var c = a,
                        s = (new Date).getTime(),
                        u = !t || s - t > c;
                    t = s;
                    for (var m = arguments.length, f = new Array(m), d = 0; d < m; d++) f[d] = arguments[d];
                    if (u && o.leading) return o.accumulate ? Promise.resolve(e.call(this, [f])).then((function(e) {
                        return e[0]
                    })) : Promise.resolve(e.call.apply(e, [this].concat(f)));
                    if (r ? clearTimeout(n) : r = F(), l.push(f), n = setTimeout(i.bind(this), c), o.accumulate) {
                        var p = l.length - 1;
                        return r.promise.then((function(e) {
                            return e[p]
                        }))
                    }
                    return r.promise
                };

                function i() {
                    var t = r;
                    clearTimeout(n), Promise.resolve(o.accumulate ? e.call(this, l) : e.apply(this, l[l.length - 1])).then(t.resolve, t.reject), l = [], r = null
                }
            }

            function F() {
                var e = {};
                return e.promise = new Promise((function(t, r) {
                    e.resolve = t, e.reject = r
                })), e
            }

            function H(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function U(e) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var V, G, Y = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : U(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Z = Symbol("profileNameLookupStoreSymbol");
            ! function(e) {
                e[e.Available = 0] = "Available", e[e.NotAvailable = 1] = "NotAvailable", e[e.NotSet = 2] = "NotSet"
            }(V || (V = {})),
            function(e) {
                e.AVAILABLE = "AVAILABLE", e.DUPLICATE = "DUPLICATE", e.NOT_ALLOWED = "NOT_ALLOWED"
            }(G || (G = {}));
            var X = function e(t) {
                var r = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.api = t, this.available = V.NotSet, this.fetching = !1, this.networkError = !1, this.errorMessage = null, this.status = null, this.lookupProfileName = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                        var n, a, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!r.fetching) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return r.setFetching(!0), r.setAvailable(V.NotSet), e.next = 6, r.api.lookupProfileName(t);
                                case 6:
                                    n = e.sent, a = n.data, o = n.error, a && (r.setAvailable(a.status === G.AVAILABLE ? V.Available : V.NotAvailable), r.setStatus(a.status)), r.setNetworkError(o), r.setFetching(!1);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, a) {
                            var o = e.apply(t, r);

                            function l(e) {
                                H(o, n, a, l, i, "next", e)
                            }

                            function i(e) {
                                H(o, n, a, l, i, "throw", e)
                            }
                            l(void 0)
                        }))
                    });
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), this.setAvailable = function(e) {
                    r.available = e
                }, this.setStatus = function(e) {
                    r.status = e
                }, this.setNetworkError = function(e) {
                    r.networkError = e
                }, this.setFetching = function(e) {
                    r.fetching = e
                }, this.lookupProfileName = z(this.lookupProfileName, 250, {
                    leading: !1
                })
            };
            Y([C.LO], X.prototype, "available", void 0), Y([C.LO], X.prototype, "fetching", void 0), Y([C.LO], X.prototype, "networkError", void 0), Y([C.LO], X.prototype, "errorMessage", void 0), Y([C.LO], X.prototype, "status", void 0), Y([C.aD], X.prototype, "setAvailable", void 0), Y([C.aD], X.prototype, "setStatus", void 0), Y([C.aD], X.prototype, "setNetworkError", void 0), Y([C.aD], X.prototype, "setFetching", void 0);
            var J = new X((0, v.lj)());

            function q(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function K(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            q(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            q(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function W(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var $ = function(e) {
                var t = e.onSubmit,
                    r = e.formErrorId,
                    a = (0, L.cI)(),
                    l = a.handleSubmit,
                    i = a.register,
                    c = a.errors,
                    s = a.trigger,
                    u = (a.formState, (0, o.useTranslation)().t),
                    m = W(n.useState(!1), 2),
                    f = m[0],
                    d = m[1],
                    p = W(n.useState(""), 2),
                    y = p[0],
                    b = p[1],
                    E = function() {
                        var e = K(regeneratorRuntime.mark((function e(t) {
                            var r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return b(t.target.value), e.next = 3, s();
                                    case 3:
                                        r = e.sent, d(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    w = (0, v.oR)(Z),
                    A = function() {
                        var e = K(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return w.errorMessage = null, e.next = 3, w.lookupProfileName(t);
                                    case 3:
                                        return w.available === V.NotAvailable && (d(!1), w.errorMessage = u("This profile name is not available.")), w.status === G.DUPLICATE && (d(!1), w.errorMessage = u("This profile name already exists.")), w.status === G.NOT_ALLOWED && (d(!1), w.errorMessage = u("You can’t use language that some might find offensive.")), e.abrupt("return", w.available === V.Available);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return n.useEffect((function() {
                    w.errorMessage = null, f && y.match(/^\w{3,16}$/i) && A(y)
                }), [y, f]), (0, h.SZ)((function() {
                    return n.createElement("form", {
                        onSubmit: l(t)
                    }, n.createElement("div", {
                        className: "form-group pb-2 mb-5 mb-sm-4"
                    }, n.createElement(g.Qy, {
                        display: "block",
                        align: "left",
                        htmlFor: "newName"
                    }, n.createElement(o.T, null, "New profile name")), n.createElement(g.II, {
                        name: "newName",
                        onChange: function(e) {
                            return E(e)
                        },
                        inputProps: {
                            required: !0,
                            "aria-describedby": "newNameChangeError",
                            "aria-invalid": !!c.newName,
                            "data-testid": "new-name-change-input"
                        },
                        error: c.newName,
                        errorId: "newNameChangeError",
                        inputRef: i({
                            required: u("This field is required."),
                            minLength: {
                                value: 3,
                                message: u("Your profile name has to be at least 3 characters long.")
                            },
                            maxLength: {
                                value: 16,
                                message: u("Your profile name has to be 16 characters or less")
                            },
                            pattern: {
                                value: /^\w{3,16}$/i,
                                message: u("Your profile name can only include letters, numbers and underscores.")
                            }
                        })
                    }), w.errorMessage && n.createElement(g.nv, {
                        id: "newNameChangeError",
                        color: "danger",
                        "aria-live": "assertive",
                        align: "left",
                        className: "mb-0 mt-0 text-small"
                    }, w.errorMessage)), n.createElement(g.zx, {
                        "data-aem-contentname": "Profile Name Change button",
                        colorVariant: f ? "primary" : "disabled",
                        type: "submit",
                        "data-testid": "ChangeNameButton",
                        "aria-describedby": r,
                        "aria-disabled": !f
                    }, n.createElement(o.T, null, "Change profile name")))
                }))
            };

            function ee(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function te(e) {
                return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var re, ne = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : te(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                ae = Symbol("profileNameChangeStoreSymbol");
            ! function(e) {
                e[e.NotChanged = 0] = "NotChanged", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
            }(re || (re = {}));
            var oe = function e(t, r) {
                var n = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.api = t, this.msaProfileStore = r, this.nameChanged = re.NotChanged, this.fetching = !1, this.networkError = !1, this.changeProfileName = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                        var r, a, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!n.fetching) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return n.setNameChanged(re.NotChanged), n.setFetching(!0), e.next = 6, n.api.changeProfileName(t);
                                case 6:
                                    (r = e.sent).data, a = r.ok, o = r.error, n.setNameChanged(a ? re.Success : re.Error), n.setNetworkError(o), n.setFetching(!1), n.nameChanged === re.Success && n.msaProfileStore.fetchUserDetails();
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, a) {
                            var o = e.apply(t, r);

                            function l(e) {
                                ee(o, n, a, l, i, "next", e)
                            }

                            function i(e) {
                                ee(o, n, a, l, i, "throw", e)
                            }
                            l(void 0)
                        }))
                    });
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(), this.setNameChanged = function(e) {
                    n.nameChanged = e
                }, this.setNetworkError = function(e) {
                    n.networkError = e
                }, this.setFetching = function(e) {
                    n.fetching = e
                }
            };

            function le() {
                return new oe((0, v.lj)(), v.Yk.getInstance())
            }

            function ie(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }
            ne([C.LO], oe.prototype, "nameChanged", void 0), ne([C.LO], oe.prototype, "fetching", void 0), ne([C.LO], oe.prototype, "networkError", void 0), ne([C.aD], oe.prototype, "setNameChanged", void 0), ne([C.aD], oe.prototype, "setNetworkError", void 0), ne([C.aD], oe.prototype, "setFetching", void 0);
            var ce = function(e) {
                var t = e.updateHeight,
                    r = "changeNameFormError",
                    a = (0, v.oR)(ae),
                    l = (0, v.oR)(v.sw);
                return n.useLayoutEffect((function() {
                    t()
                }), [a.nameChanged, l.state.nameDetails.nameChangeAllowed, t]), (0, h.SZ)((function() {
                    var e, t, i = l.state.nameDetails.changedAt ? l.state.nameDetails.changedAt : l.state.nameDetails.createdAt,
                        c = new Date(i).toLocaleDateString(d.locale),
                        s = 30 - (e = new Date(i).getTime(), t = Date.now(), Math.round((t - e) / 864e5)),
                        u = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, a.changeProfileName(t.newName);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    r = arguments;
                                return new Promise((function(n, a) {
                                    var o = e.apply(t, r);

                                    function l(e) {
                                        ie(o, n, a, l, i, "next", e)
                                    }

                                    function i(e) {
                                        ie(o, n, a, l, i, "throw", e)
                                    }
                                    l(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }();
                    return a.nameChanged === re.Success ? n.createElement(g.bZ, {
                        colorVariant: "primary",
                        dismissible: !0
                    }, n.createElement(o.T, null, "Success! Your profile name has been changed!")) : !1 === l.state.nameDetails.nameChangeAllowed ? n.createElement(n.Fragment, null, n.createElement(g.nv, {
                        "data-testid": "change-name-not-allowed"
                    }, n.createElement(o.T, null, "Oh no! You can only change your name every 30 days.")), n.createElement(g.nv, null, n.createElement(o.T, {
                        placeholders: [c, s]
                    }, "Your last name change was on %1$s. You can change it again in %2$s days."))) : n.createElement(n.Fragment, null, a.nameChanged === re.Error && n.createElement(g.bZ, {
                        colorVariant: "danger",
                        dismissible: !0,
                        id: r
                    }, n.createElement(o.T, null, "Oops! Something went wrong and we could not change your profile name. Are you sure you entered the correct password? If the problem persists, try again later.")), n.createElement(g.nv, null, n.createElement(o.T, null, "Your profile name is a name displayed in-game to let other players know who you are.")), n.createElement(g.nv, null, n.createElement(o.T, null, "A name change can only be made once every 30 days. Choose your identity wisely!")), n.createElement($, {
                        onSubmit: u,
                        formErrorId: r
                    }))
                }))
            };

            function se(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ue(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ue(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ue(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var me = function(e) {
                    ! function(e) {
                        if (null == e) throw new TypeError("Cannot destructure undefined")
                    }(e);
                    var t = se(n.useState(!1), 2),
                        r = t[0],
                        a = t[1],
                        l = (0, o.useTranslation)().t,
                        i = (0, v.oR)(v.sw);
                    return (0, h.SZ)((function() {
                        var e = i.state.profile;
                        return e ? n.createElement("div", {
                            className: "my-5"
                        }, n.createElement("h2", {
                            className: "font-mc-ten border-bottom mb-0"
                        }, n.createElement(o.T, null, "Profile information")), n.createElement("div", {
                            className: "py-3 ".concat(r ? "" : "border-bottom")
                        }, n.createElement(w, {
                            label: l("Profile Name")
                        }, n.createElement("span", {
                            "data-testid": "profile_name"
                        }, e.name), n.createElement(g.zx, {
                            variant: "link",
                            className: "ml-auto",
                            "aria-label": l("Change profile name"),
                            "aria-expanded": !!r,
                            onClick: function() {
                                return a(!r)
                            }
                        }, n.createElement(o.T, null, "Change")))), n.createElement("div", {
                            className: r ? "border" : ""
                        }, n.createElement(g.M0, {
                            expanded: r
                        }, (function(e) {
                            var t = e.updateHeight,
                                r = e.ref;
                            return n.createElement("div", {
                                className: "p-4",
                                ref: r
                            }, n.createElement("h3", {
                                className: "font-mc-ten"
                            }, n.createElement(o.T, null, "Change profile name")), i.state.nameDetails && n.createElement(ce, {
                                updateHeight: t
                            }))
                        })))) : null
                    }))
                },
                fe = r(8369),
                de = function() {
                    var e = (0, v.oR)(v.mR),
                        t = (0, v.oR)(v.sw),
                        r = (0, a.Tx)().log;
                    return n.useEffect((function() {
                        r && r.pageView("profile")
                    }), [r]), (0, h.SZ)((function() {
                        var r = e.state;
                        return r.fetching ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : r.error ? n.createElement(g.bZ, {
                            colorVariant: "danger"
                        }, n.createElement(o.T, null, "Something went wrong and we could not get your user")) : n.createElement(n.Fragment, null, d["enable.msaMigration"] && n.createElement("div", {
                            "data-testid": "msa-upsell-container"
                        }, n.createElement(fe.sX, {
                            profile: t.state.profile
                        })), n.createElement(A, null), n.createElement(N, null), n.createElement(g.Qj, {
                            colorVariant: "warning",
                            href: "https://account.mojang.com/me/settings",
                            "data-testid": "edit-remove-account-link"
                        }, n.createElement(o.T, null, "Edit/remove account")), n.createElement(Q, null), n.createElement(me, null))
                    }))
                },
                pe = function(e) {
                    var t = e.width,
                        r = e.className;
                    return n.createElement("img", {
                        className: r,
                        width: t,
                        alt: "",
                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACOCAYAAAD5NAC7AAAqq0lEQVR42uyd+XtUVZrH+WHmPxmUJak1G7ImVVlIirAmJCGQkBWTEPY1gSRkBRwFN0RABdn3fXHptu32sXtmerRdenPptnVsBVFB1B679Z3vOedW3lxu3Tr3piBOK/U83+dWkiKVut/Ped/3nPPey7Af86OqOJRZVZybOezO48f1qCjOmVBdGj5RUxr+h5B4Xo3vDbvz+GE/akpyx0eNr5+TTdUlISnxXHyv9g4IP8yHMLWmJHzSZDzLAkI1XnsHhB+C8WUa4zUg1NwB4Z93xFtDvVVVSnciwg/lMb8oe6Iwy4nxlcXCYKhMPa+6ExH+iY0vzZ4YDfV1Doyvg+ldzSE60pslJJ/XOQChjiPCKfGew+48vm/jnY/4in7js+gwTH/2wSx6ZqsSnuN7DEKFLiLcAeH7D/U1ToyfDTOLBhqf2W/8xS1mmUHIYhBmOwSh6A4IQzPiS8OnnBmvcvz9S3PpJw8U0C+35dFzMPiCYbhVmfJnzz8UEq+V/+b+Zbn4HeJ3OQNBQHkHhNsW6pXxdQ6NfwDG/xQmvrFzCr0O/ebxKfTf2yP00iO59OzWkAkEPMf3svCzPPEavFb9mzegn24pkBDVl0VBuFMjDNmjsiQ8SRrvasSz8a/tmEKvPm4Wg5CHsB+SYuMtr8fvkCAgIjgHgVND9inxGYbdedz+UP9ATOMjxGJTX4He2BGht3flCMnnr5iMj5jFIIj3wHu5Sw2A+A4Ijke8Mv5bV8ZvsR3xFuNfh9nvPJFHf30qTJd3h6TwXH7vdRMIkVhiELYABHcR4dvq0uxTNXdAsDM+dNpJjp8XNX6ZM+NfkSEfxj9eAJNz+43/2CQ7ECI2mmIFYQ7+Nsc1wh0Q5KOGjXdX1TsyHtoOk3ZNofcPFtLlfbkwOQtmQ2y8BoQCesWcQuxrBFEsuksN39Yi2omehB+p8dnC+G8TGPFa4z84NJWun5lOX5+fTl+em07XTkTok/05yuynIEcg5CoQLO9lWyzib+WI4DA1nP5RRIRKjfEJ5Xh741kDQdjnHgSVGgqh+CC87rJGqDNAqPmhgiDargYz4s1VfSR+cYcc/+c9BXT99DT6+sIM+oqNh+xAmKIiwlMOQdgdpj89KWYNBVoQeNaQb0QEJyBwRPhBtKohv0njnVf1YZtQH1HSV/VyZH9+LEJfnp2mjI4LwgwGQZMaruzJpM/2TqBr+8bTVRzfw/tpQEhoHYFBCGX+aEY8Gx9xNJ17Vxi/21LVSxOv7AUIxwUI012AYK0RrjytjP8cxg8QQBhHn0oQsg0QpjiMCKpGWOCyRhDp85+jy7YkfMap8Qsw4rew8fpQv13kVxj/ZJ7ddM4Kwr5sunbMKQicGq7uzzaMH2cx3wqC+4iAz8wgOK0RcG7/X6aGqrJQZo1hfL0j40MxjIc0xv/p6Xz6+HAefXIYUzoxUveE2WwtCCoi8IjXR4QbJwvo2qEsYfQtBiEiohw+e0Segy3/pCBgxLPx2qpeGQ/qc5TxuwZh/NE8unJkgPA9dyBwRLhxbppjEL645SBEhBgEU0QIOweBi8Xv23j9iOccH4ljfMSU4/+0Vxg/mY23kxERLj8d1lTzmhohIRAmxAThL6YaIWL5vHapod5tREAUHoJNmpyswRr/OhvvoLjLFcUdRit0KJeNttHV4/mY/hXSjTPT6LOj+QYIWQ5ByDZmDdNvU0QYDxAmcrGorxEGHRGw6XRWeHRbja93GOq3aKv6SAzjYxd3l2HS5RggfKqMtxRyDEK2cxB4+niLQZjAIMiIEMY5cQ7CC1wjUMXQgcDGi1+mjNf33NUbVf0Ljoq7CHK8MY/fZbNJYwOCMn6q1qQbMPNzA4SPHEeEHDVruH01AoNgmj5GbFMDg5AnIgL3LN4uEGqE8aXhs/hl32mLO6O9umdRFh3ty6KXt+XKD/Abp8XdwTxZmLERel09kEvXTxXK0Q45AoEjgtNiMcEaYa/jYlG7jqDOZQStarniHONcy3OuQHC0sugQBGxThmrxYs7xmhFfJoxHe3WfaKjMRHeNbK+SXTa/eCSXu2z0Vb3M9ZedgmCYePWgAcI5RyYlUiMAoulDMGvI59TA3UvyXKpzK85xpjzXR6IgcBezIxAq4LHJ9Pb2Sf9SPycvVK01nkd9Q3mI+hZn4Y/INIzPvKnBkkH4Of74X28voDd3iareajyLQfh4L0K2NEBrEEeEkwIEYYDOJK4RriAiDBEINpoQMzW8uTNfnrOfC+NN/YuZ/QIQBgiZwgt4wtHACQjCc+H9sGl595TPmTHhO+OH2uvm5uNNVtaG6HBPJj33UKapxdoOgpcfnUxv7y6gy7bmW4u7ayenYITnCQO0JuHncsn22uEw3TgVYRD0qYFB0MOGGgXLwgey6IsT+ZoagXUNEerqYawq7p/ExtvougHBO0/minNmNt8CgWxlhwdZ8CILnugAUKotC0sQigrHfztpQsacYfmh1OaCnBQqzEujsunj5YsAgg4CvCZE7U0hOtCNP4R77bnL1txsifCvZgPvYMfuo0Ox5/afHuOq/itxcs9jFOEEShD2xI4In8i1+ommvHtdgjBFmeAYBPtZw+U9WXRVvgeH9GsHM+1AYOPxefjzAf5D2QBoUsw0gN+PncbsaO+BOmdG8yp3MfPoxzmX576jSXkxX2M+UrtMEzMj42jC2CClpfrpntRg87BIdnqjACAvFBByBUJlsRWEnzwUppcete+yVSBMIQbBMp2zikHgEb8n9iYNgzBBgXDaFQiYNRT0g3AZ7/GpMt7mfQQIkwQItsazrCBc2z+ePlHG27ShcR2Ac4pzGxpoPEyVHuiNnw3jC8bRRBifEvRQSsBDGWl+Gpee0jisICe9IQIAJocDQgmB0NkUpov35WPaUohiz2q+FQRRF0TomtjDh8nx9/AZhM8P5+grbf65kRqmcGrQF4uYCk6mzw9MjI543fsABAB5JEcYrBWgB/x59O7uaLdRoX1HMl+jgHM7mTrliOfrGLXGR5TxqUEv5KG0FK8QAyAiwAAAdCBoLrxUVG5clEPP/HuB/MMZhIgNCOo1fzlQCBAAgQJBbxIixvUjYdOIhyzmJJAa5KLQ9eN5dA2jVQubEnL9RLp6KBzXeEQ/AT8+e9x1EpwXoSnyXOKc8oh3ZbxnoPEmAMampTTZAJAYCBW2INgKYU59YICgjQgsAcIUgIAKff9EmKSpthMA4YtBgvDJkVzD+MkOjVfnShmfbxjPU73EjGelpxoA5FsA0IGQettAeMUEwtTBgOAyNYTw7yKDAGGiQxDGYUEpE8bni7rHhfEFbo3nHG8x3h6AMZYUEE+hBCJCkQKhzxaEiEWogI3UMNVVamAQJkiTPos1Og1xRAhxjZBQROCqnou7AlfG9zUbxhe5Mz5VFXcq1xtKg6zmy58BAE0N4Cwi+N2CwBHhPkuNYJW6qMMVCBwRkEpQI3ymQLBCoKsR8D6uIgJMNxmvOojdj3j3xkNsLkx3BEGGAYAuBdye1FBkkxrsCkUGYRCpoZAjgvNZg9MlZgApOpCnYQaQK41/La7xEbPxmDH1DcL4CfcEMdq99qE+yHKUAgpsAMiV5lpSwS2vEfosEcFGVhAcpganIEygq09PwlpDpnmJ2brphPdU0Qh/g/xbXt9ViFCvGfFsvIS/xnWO1xd3LI4CVkBsUwCbOS0vQE1z/DQzHyBkMQiOU0Ou+9TAIERMIOinj9MGWSOw8ViJkyt+H8Xda1CmQyIdKeN3ysLVeY6PGl90G41HdEiByeMzvFQY9tDYdHzPDACmgRoApk8O0MZmP/U2+am5PEAz4oEQsjy31AhVDkGoMUC4hFGijwgRnjW4XUc4IyMCjJ+ENX79XsNlHD/F7uNnJwrZeFfFnfsRP8H9iJepYRyMn5btpcppHqqaDgDwdarzdQAGoAfmbwIE9y32y+eLylVEyMlS6WGyFBtvAwKnBqcgFBsgNLtaR3BVI1w/rZZsL+u3oaX5H2KX7i00rrz2uPN5PKIZ5/jihHK83nhIGe+RxtfMkObjuS0A+ggA0xEFhMwgrKxIoeKCoAIBYgDslGCNABAuWVJDRMi2RnjPJjVcQ5Ufc62eQbAY//auPKO4c2F8s0Pjy9QmDYd6w/hgYsZDDEC6BoACLQBmELavSKfty8bQ2vlpVCRAyDRACLkBwX1qYBCmQAyAXUR4TYKgIsIXp22Mt4IgO5Q+3B01vsCl8ZzjXS/gBBIe8ZANAEErAGN4GugEANajy9Jp18ox9OSqMQAhIz4IYQ0Iue4iAoOQ72rWgNU4LMfG7UewLNk6Nf6SwxHPxmdZ5vGJG+8SgP5ZQDitaVAArBhDOyEcJQiPcUSgbAbBBgD+fmI1gv30Ub8NbWc8Xvv/sbiDxjs3Xp8CYq8DMAAzAICYAfRpAIBiglDsNjVkKU3JHRwIlxyDwI0puOhECtHB4SZNxDTiBzed8w6B8RoANEWgrPBnFwRo78oAbVum8n6vBoBbC4LfXUQocgOCalT5r8cK0GSRI4Tn+J7OeAhpx6XxPOJTbnmo16t+po8aZgUAkA+/M/Y0kFNA6CYAMN07vjpAZ1oDdAjHbUuV+b0LzQDsMGSFgUFokSCo1JCTxWFfGq4rFm9hRIDJRrNljuqyfSBTiptXAYLNtmwfr9y5Mz4w9MbXwfim4gAtnh2kpqJgTADSeS/APgIchfGnW1gChEcBwjYAsIMBiCsGIcMaEeJDwOsIWQqE0kEViwUGBAO6bFVvnV0XM17LoT6BHK+q+uDtD/XzbzJ+EYyXUgDYRoB70lMbkAL0AJxSMkDw0wlo3+pUae7jbLYGBE2xCMUDgpeY3a8j9DRn08HuEF3aGreLWf7sEiRe27Mw29UCzoz+BRwu7obIeJjsoeUlPjZeCwCnAFsAivMtAEB+OrU2QOfXeenieg+davXRXoCwY1AgZNiCkKepEQCC+1kDjm2NIdrfBaPNIOC5En6G14jXul654+mc1BAZP8tDa0q91D7HSy1lgwMgdgrIugmAtVHzFQDnAMAFAAAIcGQQrCkhQx2XZ1i0Ez97QoHANYIJBMc1gsvmVQbBZHyDMJ577lwaP+QjXhnPWjtIAMzTwJAQA3CMI4CCAACcZADowjoPooE4JksdXhOkx5ez4XZ63AaEtVYQGAD3xaK+nb1RCc/1xpdxqLfO44d6xCu1CSUAwJjoQpAEIGQGYBbWAQ6sUrMAQMAAQOdaFQAwH0qGFABH8LPtGuMtYhA4NSS0xOwGBNcj3n2OD9zaEc/G6wFYDDViGjjOBoBxNgAgz6p+gL4mP8zx09E1fjoNc6MAnG2VxtsAYGuyer7spmPMiJBhUyNoZOpH0IPg3njv9z/iHQKwELOBBbN8cZaCzU2hltE0HQD0NGIlEPP+zYv8MMxPRwwQEAGixpsBWAMAosay4fJ7Dy9Jk8cd8mv+vgMQLOsI9gA4XmLWr9Wz8dDQGr+wKBnGeyzG6wFg46tj7QUwBJSeZlkHsAKg9gIUBL3QpmYFwskWH1IAm39OHhkAJTb4saXpMppsWhighxan4msGgF9nhQBFpJEaMnTFon2rGmQDgm7EQ0M3j6+GmmF865wk6pqbBFM9bLIeAADjo3phPL9vfADiRoAsjgAbYXwfS0KxbVkqHVidQqdVJEBEAADQYQAAo8wQwOxtAKAXv6u70Uc90KamAD24yAYEhiAOCKk027ZG0LSqmUGIvWQb4Cmdow6cREc8Gy/VCUXNXa8xf12Zl1aW+lEnBGi+091A7gnUA2BEAMjXr0eWpsEkYUo67V8VxCzBCwCS6PBqvzRVKV0Jzx9dYgDQ4JPqMrQRMCkQLJFAiQGA7COCFQTHXcya6dxQjXg2HtIDwMbLQq8ZagQAVW4B4O1g6yxgWn8E8MUEQBV10gg8VyDsE5tHhvnblrAeWZxGPcL0e4W8FvU1RkFI10QCKwjbGQTVs6iBgFODqifSU7xDbTzytI3xLLtQD+N9JuMXCekAyND0A1gBUBGgj2sAJSsAhmFq1D+I/H4f8vzDMHzb4nR61NDDi9KoG+Z3LvDGlgIhGhG0kcAKwhjZobS8IshdzJAOBLwOJ2JopnPVRqhfpzGeAeAaAM95xJuM1wMwn5tCXUwDoUh2gJZVqBpg0yI2v5dTAOduI9xvaU6hDYaZmxoDtHVhKj0C8x9qTqUuGL2hzksdLNpQb2ggCA0KBMwaHEGwU0nuTj64NChrlMVz/TSLQeAC1woAQqGDET8m0RzvMY94vTjUQxbjtQDw3zkz1wOzvbZXB1sAYAjUCSqZEqAVlQqATc0cAcyjnwGAmTAVU5g6qDaZOmtG0yaYvL5qFK2bPxLf85iF13VA+DeAQMEDEGQkedxNJAAADywOImL5RPMqQJUgICLYRgMGIBjLfGX89JzBj3i1gIPPVZ7MxuukILEf8fYAmIyfleehSWPt0xuvBHIKiAlBtPN3NkBYDhBEBHhsOVJADAAekADA0HoQP38Eram4mx5cX0yvvHSe/vOFk7R17XRaM/cuaqkYSeurPUo1CHUQYFAgLGAAtnNN4CgSAAAJqNG40g9C/Ww/PoMTANj8/EwYmZDxvICzAQA4Nb4dr11d6nNivGXhZ77JeIv52o4gs/l8NIMQ8cO0VGMWIMxJHwgAzBxB66pG0KMds2H8Ofr7N99Q9PG3r7+iX/3kGG1ZM51Wl99Fa+aNQAGHgqgKubE6Gf82GRFBAbS5KdD/e/Ee5sKQj3EAYAhWzDcDgCMDkBIbAJxImJ+Y8W1CDIDe+DL3xi8pUcfyAj9NvEdvPAMQZx2AIWCZQfBTeWGQOmrShEEwQhl1P0zb3lVCr77MxpseJhCOSxBWlN1Fq8pH0NrKJAnCegUBagi/mkXcBMEuvNeJFuw+rkpRIGgA2AwAllfaABBSEYDn/HxpFXInAEjAeDMAt834eZEAhcb5nBrPANitA+TZA8ACANmZfsqBypAa2qpT6WGc+NM7V9Hf2Hjt4+qVz+n43h20YWEuLSv5N1o1925EhCQJQV+DX80i+iGAAMFOAHC2Ve1AYv0BjSkp0vwdTgAIOwMghQFwv0mjAeBWGT+XjacU58brVwL1UcAPAJRyoexJQj4qyhlJ+3dtpC+I6Itvif7+nb3xN278L7333lV6883/od/9/mP671//kQ7vfkyBUPpvqB1GUO8Cv5xBYA0BEHCa2Yn644yxGXXB0KlWAUKqBKBHAgDZRgAWA2BJAQyAdcTrN2msAAy58XoAzP0AZtN5PQCyhyA3qkw/5sh3U9/mHrpBRJ/8HaMbun4TCF9++Q29//5n9Nvf/VWYz5IgXKZfCxCe2kZdi/Koq84jp48PKwiQDhiA0y3G8jNvRKE5RexF+NCzqGYrvQ4A4GmgDgDuuVuCgrKNjXciOQvouJXGB5yF+1ShoC0APAswF4F8eXhDqV9eIKKWWuMDMHHM3bTxvh5EAGG+guCKAOEfRJ9/8w96589X6A9vXaHf/+Ey9DH9/vcf0e8Awm+FfvshIPhAHt9++1N6+eU3aXPrAtpc7+2H4FEFAXYTowBAN+1GnmnxyS3rQ6v9Rjs7tAgAVDAASvEWghiA6MZKPTdbovcu4GqTphXTuVWl/ls74oNCzrqLp4SMpWDtDSKsu4FyEai70S/uEwAgGITYAIywACD0KQD48MY3dPHn/0U/ffk1+s2b79MfAQIUBQHHj+itty7Tq6/+mQ4cfobWtG2lqqr5tKL8buqu99GWhSkqFcjFIQCwVgCQxFFACWD4RL8CjkoAAf0JfrmOkeMeAGyrsvFCzVYAdEu2Qxnq5WuDAa80vDDspYqpCuBx8S4P5wgQezMI4RT9AFjDb8TJKBMgyAIQpjsH4K8I/Zd+8Ws685OX6dwLv6IXfvk6vfqGAuGddz+l19/4gA4fe55aOrZSffM6ql/UTvPmVeDkD0dTyChqw4LSRhSFDy3C9HOpAuBsHABOCSkI8H1MBesVvOb6xi4FqBM+p8AfNcMpAGx8ydAbnwIp4z0wntMXbwZprw6OtxuIogqSIDSYQciBrCmANRCAsz/9pQQgenzxP96kk2d/Qa2dD9O9izuoYYnSvUs2UPncCqqZCgAqR1Fr9Whqq0uWK4X3IyodW+MxIgBkC4DSOQDwwAJ/fACCVgDKCwI2AIgawGM1HhriEc+h3jC+ko13eXGopQiMuR3MIDSrnb1GrFhNy1UzgQkZAoBuRwBEdf5n/0Edm7bD9E5auLybmpZ1mgCYM3k4rcaqYWvVaBkFOuqT5VLxNkSBvSuDaEzxxIoAkAYALgJN08BUKR0AgZtG/PdvPI94lg4A/Q0iuCMIpkvxlnCTlEwPnQChASDkTZCzgJgAfGgDwIUX/5O67t9Fjcu6JQCNBgALDABmhYejDhhJLQBgfW2SBKAbAMhZwdJ0WQ/sWxWUjSlGEcgAQHEBCFkAUNIDoIq7RHN8QQLGI6dPtRrvHoAxpnWA+JeHMwAMQa8SvsYJqbyLdu/opus2EUAHQJMBwL0GAHMBwLSs4bS4VAAwCotDmEPXiQjgAQCp3HCyLEMuDu1fHURq8CnjYwCQHScFpGpTAGvp7EDiOX7soHM8jPdaQr0rAPS7gWYA+pT5SgwAjGf1NGJ7t/YurOp10zU7AF4CAC/YAdAlAWhYqgCoXwwA5gGAzOGYgiEFiJ3EagOABRIAyxKx6EbesjiIDSQfHVnNMwEGwF0RyADwZgt67sSUcJDGD82Id58CFACWjtpZ+UG5J6+2WAFCFACWGYCau+jY0930uVMAfmYA8O87TQAsMACYVVJJWRnDad6UEQYAowEAllIBwMMCgCVpDAAkNofuXxSkbiM1bZddzGoWsGXQALDx1cZKIBaDhmrEw3iezg32KuF7bS8Pt706mAHAyJK3gsHVwAoEYXpMAHwmAD5xkwIAQAMAaIwCsFgBUFhUSaNG3EVjUkbigygAOur1AET/vh5IgPDECoBbF3ANwJx8PzUUwXjrSXU14vG73LWVB6KhHqM3AeObiuJfHp5he7dwjgDIr6rTxrgXAEBIw0kOKPMH1gEAQKYAVwBwCogCcC8AqAcAdQBgKgAYPfIuSh49EidkNE3NTqKmkmQBAMzXAMCSECyzrgRCrpeCGQA3oR5yGeph/JBcHm5/jyAGAOavNN39Q+687cYU7JElxkgzINhQezdqgJ5bDoAnaSRlpIymSeOSKWu8h2Zgn76lMihXBbENbQWgyQzA5kW3DwB9jucZxu00vmnWIC8P10cAw3SW3HY9uiYorxA6sEr07ikAOgCAkQJgupsUEA+A4RKAVP9oygIAoQkeyoJCE71UUuBHm5mcDeDvihMBDAD4ziSQLgUEdACYjc9KIMdP5Rzv2vhGGL96kJeHc0OIDoCVFgBQXAVN0639K1FoNYygQ0+00wc3vqWPv/5WAfAPPQCdogZY2gUIbgagoh8Av3cU2pySJADhiR4sPHkBgY/C2IYuVf0Isl7ZssQKwGYLAIlFAOwPJGz8WOMevokbz1p76+4PoAEAMgAwLbocWz6SntvbTu/A9bcv36D3PvubAEEB8NVgAOAI4E0ehQZNMwA5MD8n04fnkNGYsrIygGgkR709ACzeDNIDgOfKgOLJXlnVp8QzPuhkOpe48W1CCQJge5s4XJVrXKQZGwDMsU0QHF8xkn62r53e/VQB8NbHN+TxL5//jd6/9rWYBrL5GgDqsTQ8Vc4ChlOyAcCY1CQKxwAgV4g7lKg4IrZ/OfzbATDZEQDmLluj505f1QdNVf1tMl4PQLNQcRDL9ApYXvG0bgZZ7xGEEHesLY0OrUuXF17scAkA60v67ftX6eCZZ+nEpRejewDWGkAAgGMddgIr711LM2cV06T04RT0jUQUGIUTGY0A3lgASOVBgADPDRAq1W6msR3M5usBgOGqH2BWLhsPscFxzE8NmHN85S01Xg9As6pR0IEdoNZ5YqPO5laxOgBOtKfR+S5sv26IgiC6ceMB0GEB4J0rCoCnDp+hnfuP097jF+jEMz8HBL+SPQKYBYgCUEJQ3dhC5dVLqaRyMc2cOYumh4bTjPAIyhk/Ss4EJo71AAIDgEwzAAwBFBKGq8q/pBD98rPwnM3XAwDlIdJkcnu18/v0Q+PSE6zqi9A95P7y8H7jV5ejLgL0G6r8tA7RbxIA0EwD7QE415lGZyEcJQgHW9Pp2Nog3zNoIAD77QHYfeSsAEBq14ETtPfEBTr13EvUed8OqmlaRxV1K2lO1RIqm784CoDcC5iVM4JKJ4+i2XmjaG5hMhVmew0IDACyILP5LNXFDLH5+hSgxMYP3Twel46hmndzeTirdY6v3/gOtMG3q6M9AKkuAWCl0pkNqXS6DRC0BhQEBgAvHuikP332XVwAYL6QfP7koVO0fN0mOern1izDUQFQCs2cJQGQzaazAUBp/ihaVKb2A+6d7aHCHB/SgYCAzZdi883SRQC99MZPG/yIby2zXB7uTOXQPF+/4e3KfPU1tI5TgGYW4A4AMwgteO2q0fTc9gb64/9cpXc/QxS48lVcACAAcJKWru2F8cuiACAK3ARA7kgqkQCMxslVS8E9jR7qQHNII/LjtFwxE1BNKQyADQjalrChG/FsfDIbz3JlPExnVVoBmHSPPQAuIwBDENUZoQ4Fwsk1XjrXG6FfXniK/vD+ZQnCu598HQeAUwCgzwJA2fwlNGuWqgGKAYAY/WUFo2leoegL8FB3AyBo8KLSV5eRNSH/Tc/jAhBG28sCwNCOeA71bi8PZ+Pb2Xh76QHgItANAKxoFGCd60qn8x1BGQ3OShB20x8/QPPnR1/S7qPn4kaAeRKApcQAFKEAvAvhX5lfHhFKolWVyWhUFRB45S5kb5MXlb5qVVs4ByBM9nPzqsV4PnJH0BCPeBvjdQC0zwXs8wMo7AI8yu3NZwAqGABLV7DuXsEn1qcyAHYQMAB0vjudnts8lp7pu4fOtQf6QXjx1OO05+BR2nnwLO06eNIUAZa19MnRP68WUUACsBQpAMeiaTQ7924qweifI8yfkiTVXJosje+GeoSaBATcodQtQYjdzj6Z5ery8MSreo8z41lsfLlPGt9Tm0q99anUWRV0YD4D0DrXxzWA5roACwDHxN3C1wVliIfh9hoIwKax9OxGaJMC4WybAGEUnWwbT/seXEk79hygJw6fEyCYAJhbu4LKa5ZTVUU1TM6kVUVJtGTmaKqdOprmKvPl8d5iBYAhbkxREESbVwEIgwCjXQOQyiM+4Xn8BpeXh0Mw3svG17E6qx0CUIE0AfNbS70MgLv/L4DvFArpQDABoCBgEC713kMXNmC2sHokbawfR/d3LpcgPHX0PC1r3QTjV1BtVR0tKQ/T2tmjqbUYl5DPHkVripPwdRItR+isn56EGgAAzB4AAJtv2QU0QJCvqS12vxs4eZIux+uNt14bqFfXPKQ4zN97a1Ok4Wal6QGA8W0w3lgf0ACgjwAwn3VKHBkECwAXujMYAAkB6xmhPtzFA0XbupK78UHG0taeVbRqxUpaCuPXleKiUHx/XclIPEcreMlomJ8s1VKC3AktL4bKPDBbpAA78826DxAsr3QDAK8E1s5IZOXOJQD9xiujYbgdAPbGl1sXiFoUAPazgIKc9AYHADAENiAwAOOsUUCaj+/huGd1BgqZIG2oSKa2shEQWr3kEY2fLEAAAErY/NZS9XxzlZcOrPShK8joRrKab78b6LofIAHjnQJgHvFaAQCN8RoAEooALDMI7akKgB4GwBoJFAAnOsZQNyjvqkmhrmqAUOlDvkPOAwhtLECQZBjfLwDhEQCo1UfuR+AOJZamIcTxZpB743UAWEM9j3i9OAVwqGe5BGCMwxrAKhsQziMSPA8ALBBsZF3sHUv3NaQJAACCEIPQIUCYM1qqTQBQ6unXOqhFASDNP7GGl6IBguxQ4p5FPFeyByDsHgC98XoAulyN+DTL1xvmB3jEa6StATTTQHmH8LOtGgBYeK2PLnX46dkeVQtYQZBHeZVvZ00qzJdiEGqC1ClAwIkCAMJ0k1qgzdUKAJaC4DS0a0UK3W/cJKLPuEfAZpurg6Ehuzy8AwCYc7xTpfWrB+emq9KD3+Vx8b5eRFINADH7AaBItthKDNChlQG0VqvbxrP59gDgNvJSFwUIvVEQWM9jnWB/yxjqYgCsQnTYgDC3Xl565TGkALivWqaAmBA8vSpNdCxxFzMg2KSJAOkOLg+vG9Tl4TyP75rPI96h2PhqGF/hiUYQJwDIKeQGLBytme2l0lwvRzlnDSEMQTZO0EzMo9dXmkDg/z/IHgATCM/0pJsgON15j/yQPbVC9iB0SRACAoS4AJwyLgnfYwCwU2qMvKXM1qUwrdIFAIlfHm5dwEnceAsAOuPn5KoFrCA3rziOADenAwahIkAHTSBYAbjI5tuAoKaE9zelSZN7FAj2qhMwKBBwBa4CoMUCgCkCGBD0/x+G62vSYt8fIBTvugD3l4ez8UEHxqfZh3o2PhYAWuPHG8anQNy8YvO/hhXkpC2MMAAJgMAAQDFASBaSIDzXiy5ejM4uabBzISKg+VRcDBpg4y0AyMZV0/9d2D4QgLAdAI4vDrXbpHFoPBvOX/OI168QekzGd8D41Sbj7VrR7beD54oIwFHAPQjnJAhmAC7E0aU2D+1djpFSFXAFAIDBdYFGc8r6oAKPU4ACQBlvuo9we22aKQXY3iPI6eXh1t05uRffo8x0AwCMD1iM1wGgRrwyvkwYn2EYz6ZrzTciQPmwYDD4r3nhtNzJ4eDF/OzgoEBYJ0BYEYDxPnqmTQ/ARbzm+OpkTInwofDhu6sDjgF4eJEC4MwG3oaWIJgBMEWAjtp0HQAsPQAW49shBwBoR7x+mVguHMF4jzI+3a3xPhx9YiPoYnp6MEd4P2zgQ4CQH065MBgQZkxW7UjH13jouQ4xyuNCgPQhCrokzJGND8cgaCIAA2ASQNi7GqklBgDtACAnK/bfrr86mLUQWlEauHk/ngGo1QIwaON7KsS6SBLNwRL1uEEYn24Yn5YWyB2me0zODuZAF/PDg4oIOCE+CcLztiCo7z/WmEwdCgDIAgKfNEPdAoBFNgB0IhpssHYxcwSwuV28HgBLs6W1C8ccAaAYxgcSMn4ujI854oPxC730ASN+mNtHfiglW6WGgCsQwpkKhI5KX4yIwADsW2YCwAICThqfxIEAdCkAuCGF9yTO3QTCExwB4t8nMGgFYHGJ2fgONt0GAEuevzXGu8/xMtSj8fOCQ+P1EUGkBsDwXWQQILQDhGOrvfRcO4OAOgDFG0Y7PqwFAmtEYAAWSwDUBpRtjwJ3MR9dn0GdMCJmBAjZ3iRK3oO3ZR4bz3vtjgBI2PhyNt5tqP9OGZ+SrfN1UBEhCkLB4EBA8edRIBjF4uGVybS1TpwAPQhdVQEAgLYzCYAzXepOk/+PgbUGiHWPIAZgwXQf3o9Nh+waMLkG4ByfeKh3X9x9l+Y81CcOgqZY1EcEIzU8226AsCKZHtSAgO/LfoKzHSmOAbgIALbGASCDI4AZgBlimmoxOl4jRuIjfpDFXZoY8SnWET90IIQD7iJClik1mEFYGRMEBqAuGWsOvA3tDIBUN7MABqA6vum8Hy+3ZYfQeOR4TagfehCyU84nXiMYILQZqQFmb2AQ5HGrBMDSj6CLAO4ACGgAqIzZiHHbjU9P9Ynjd6jqz2PkD4HxQ1EjZA0AYb4AwWMCQaWGZKNT1gKABYTbBoC+A+f2jfhUI8f/XzvnstIwEIXhPFFbc/OyKJgmMUnBG7hwoa68oVvpRhT0ASy+hjtrdeWjlXpIh/6GOMyltTTNDMxCxdX/zf+fmXNaV8/qlzcaOn84QlKsEQBCY9w/RwQUAOCMqolrAH4EXB4QACgC+cJjz0d49jdYfTO3+g3PC62qrZ3QC7PI/kwBglY0fKNGoCZQA21oHgRwBP0agAHwiIwX7dlPPD67P7V6Er8kfDVBYDWC/q2hyV4WZQDA/qQn4v6tqwzA5X5r/HQK4cW7IS+8g43fMauviPCLf0dI4Aj05Y/cGHgvQpB3KvvXtjoAu9Rxg+VLTODQwIp2xudVfS68QsZX3xEyjWg4JBDuz2gQ9I4/mPK+GABKbVnFJg2s3l0b4sTXaHUJhDRyhko1AgkZTUGwCyDwAHgRAeCoAADhe2zmTlt4nwlf95VEXoeBIP2OkEy6jwChPLMIAK7UHeACAJQmcEon3pUVHlZvhOdEQ1cXhLQEgtgBAlEECE68q2r1LXPiZR0hC50PRIO+I3w9AABVB3g+QcYfxxJW7xQbS7D61nDLtwPLLN1ocPSigdq5bz17/HrDA4A/EHK916SPoilkPAAgqCC85611LLPm4AiRniMcZTZ9sIN+DmUcADttN8dtjX48E/5j0wj/r9Gg1HSK8eQsrAHgAjrXOSP8QkHIInsEEERbHAHYRvgagIAI0BCe/s8IvzQrDfxABwQAoJTxIyP8soIQ5yAMUCPMEAHl61wuvG+uc1UAwRY5gtgBcJ0bUZduYISvLggDgCADQPHEmwecVYkGBkI3djkAGKuvBwhwhCkAG7+snubqty2zVv3WMIkGegiieTsatjTC13NFwXrc3nJiq8brBzxZ+R9UCyjxAAAAAElFTkSuQmCC"
                    })
                },
                he = r(6230),
                ve = function(e) {
                    var t = e.onDismiss;
                    return n.createElement(g.bZ, {
                        dismissible: !0,
                        onDismiss: t,
                        colorVariant: "light",
                        className: "mb-5 d-flex align-items-center"
                    }, n.createElement("div", {
                        className: "mr-3"
                    }, n.createElement(pe, {
                        width: "50px"
                    })), n.createElement("div", null, n.createElement("strong", null, n.createElement(o.T, null, "Hooray!")), " ", n.createElement(o.T, null, "You have a gift!"), " ", n.createElement(he.fO, {
                        to: "#rewards"
                    }, "Click here to go to your rewards list.")))
                },
                ye = r(5588);

            function ge(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function be(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Image;
                return new Promise((function(r, n) {
                    t.crossOrigin = "Anonymous", t.addEventListener("load", (function() {
                        r(t)
                    })), t.addEventListener("error", (function() {
                        n(new Error("File is not an image"))
                    })), t.src = e
                }))
            }

            function Ee(e) {
                var t = e.width,
                    r = e.height;
                if (64 !== t || 32 !== r && 64 !== r) throw new Error("Incorrect image dimensions")
            }

            function we(e) {
                return new Promise((function(t, r) {
                    if ("png" === e.name.match(/\.([^\.]+)$/)[1].toLowerCase())
                        if (e.size > 16384) r(new Error("File is too large"));
                        else {
                            var n = new FileReader;
                            n.addEventListener("load", function() {
                                var e, n = (e = regeneratorRuntime.mark((function e(n) {
                                    var a, o;
                                    return regeneratorRuntime.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, a = n.target.result, e.next = 4, be(a);
                                            case 4:
                                                Ee(o = e.sent), t(o), e.next = 12;
                                                break;
                                            case 9:
                                                e.prev = 9, e.t0 = e.catch(0), r(e.t0);
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 9]
                                    ])
                                })), function() {
                                    var t = this,
                                        r = arguments;
                                    return new Promise((function(n, a) {
                                        var o = e.apply(t, r);

                                        function l(e) {
                                            ge(o, n, a, l, i, "next", e)
                                        }

                                        function i(e) {
                                            ge(o, n, a, l, i, "throw", e)
                                        }
                                        l(void 0)
                                    }))
                                });
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }()), n.addEventListener("error", (function() {
                                r(new Error("Could not load file"))
                            })), n.readAsDataURL(e)
                        }
                    else r(new Error("File is not a .png"))
                }))
            }

            function Ae(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Ce(e) {
                return (Ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var ke = function e(t, r, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                Ae(this, e), this.name = t, this.value = r, this.imageUrl = n, this.selected = a, this.id = r
            };

            function Se(e) {
                var t = new URL(e);
                return t.protocol = window.location.protocol, t.href
            }

            function xe(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Oe(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            xe(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            xe(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Re(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Ie(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Re(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Re(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function je(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Te(e) {
                return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }(function(e, t, r, n) {
                var a, o = arguments.length,
                    l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ce(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                else
                    for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                o > 3 && l && Object.defineProperty(t, r, l)
            })([C.LO], ke.prototype, "selected", void 0);
            var Pe = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Te(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Ne = {
                    alias: "No cape",
                    id: "no-cape",
                    url: null,
                    state: "INACTIVE"
                },
                Me = function() {
                    function e(t) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.http = t, this.selectCape = function(e) {
                            r.capes.forEach((function(t) {
                                return t.state = t.id === e ? "ACTIVE" : "INACTIVE"
                            }))
                        }, this.save = function() {
                            var e = Ie(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.put("minecraft/profile/capes/active", {
                                                capeId: t
                                            }, {
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        case 2:
                                            (0, C.z)("cape saved", r.postSaveOrDelete);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.purge = Ie(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.http.delete("minecraft/profile/capes/active");
                                    case 2:
                                        (0, C.z)("cape deleted", r.postSaveOrDelete);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.fetchCapes = function() {
                            var e = Ie(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            r.loading = !0, n = t.capes, r.capes = void 0 === n ? [] : n, r.updateCapeProtocol(), r.capes.unshift(Ne), r.capes.find((function(e) {
                                                return "ACTIVE" === e.state
                                            })) || (r.capes.find((function(e) {
                                                return e.id === Ne.id
                                            })).state = "ACTIVE"), (0, C.z)("capes fetched", (function() {
                                                r.loading = !1
                                            }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.postSaveOrDelete = function() {
                            r.saved = !0, r.timeoutId && clearTimeout(r.timeoutId), r.timeoutId = window.setTimeout((function() {
                                r.saved = !1
                            }), 2e3)
                        }, this.updateCapeProtocol = function() {
                            r.capes.forEach((function(e) {
                                e.url = Se(e.url)
                            }))
                        }
                    }
                    var t, r, n;
                    return t = e, (r = [{
                        key: "selectedCape",
                        get: function() {
                            return this.capes.find((function(e) {
                                return "ACTIVE" === e.state
                            }))
                        }
                    }]) && je(t.prototype, r), n && je(t, n), e
                }();
            Pe([C.LO], Me.prototype, "capes", void 0), Pe([C.LO], Me.prototype, "loading", void 0), Pe([C.LO], Me.prototype, "saved", void 0), Pe([C.LO], Me.prototype, "redeemError", void 0), Pe([C.LO], Me.prototype, "redeemed", void 0), Pe([C.Fl], Me.prototype, "selectedCape", null), Pe([C.aD], Me.prototype, "selectCape", void 0), Pe([C.aD], Me.prototype, "save", void 0), Pe([C.aD], Me.prototype, "purge", void 0), Pe([C.aD], Me.prototype, "fetchCapes", void 0), Pe([C.aD], Me.prototype, "postSaveOrDelete", void 0), Pe([C.aD], Me.prototype, "updateCapeProtocol", void 0);
            var De = new Me(v.Zf);

            function Be(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Qe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Be(Object(r), !0).forEach((function(t) {
                        Le(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Be(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Le(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function ze(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Fe(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            ze(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            ze(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function He(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Ue(e) {
                return (Ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var Ve, Ge = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Ue(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Ye = Symbol("skinStoreSymbol");
            ! function(e) {
                e.SLIM = "SLIM", e.ClASSIC = "ClASSIC"
            }(Ve || (Ve = {}));
            var Ze = new ke("Classic", "classic", d["asset.themeModelClassic"], !0),
                Xe = new ke("Slim", "slim", d["asset.themeModelSlim"]),
                Je = [Ze, Xe],
                qe = function() {
                    function e(t, r) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.api = t, this.capeStore = r, this.state = {
                            currentSkinUrl: null,
                            currentModel: null,
                            image: void 0,
                            file: void 0,
                            remoteSkin: void 0,
                            error: !1,
                            transferring: !1,
                            reseted: !1,
                            models: Je,
                            msaProfile: null,
                            fileError: null,
                            selectedModel: null,
                            defaultSkin: !1
                        }, this.fetchCurrentSkin = Fe(regeneratorRuntime.mark((function e() {
                            var t, r, a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.api.getProfile();
                                    case 2:
                                        if (t = e.sent, r = t.data, a = t.error, !r) {
                                            e.next = 11;
                                            break
                                        }
                                        return n.capeStore.fetchCapes(r), o = r.skins, n.setCurrentModel(r), n.setState({
                                            currentSkinUrl: Se(o[0].url),
                                            error: a,
                                            selectedModel: n.state.selectedModel ? n.state.selectedModel : Ze.id,
                                            defaultSkin: o[0].hasOwnProperty("alias")
                                        }), e.abrupt("return");
                                    case 11:
                                        n.setState({
                                            currentSkinUrl: null
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.resetSkin = Fe(regeneratorRuntime.mark((function e() {
                            var t, r, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.api.deleteSkin();
                                    case 2:
                                        t = e.sent, r = t.data, a = t.error, n.setState({
                                            currentSkinUrl: Se(r ? r.skins[0].url : ""),
                                            error: a,
                                            reseted: !a,
                                            defaultSkin: !!r && r.skins[0].hasOwnProperty("alias")
                                        }), n.setCurrentModel(r), n.clearCurrentSelections(), n.selectModel(Ze.id), setTimeout((function() {
                                            n.setState({
                                                reseted: !1
                                            })
                                        }), 3e3);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.selectModel = function(e) {
                            n.state.models.forEach((function(t) {
                                (t.selected = t.id === e.toLocaleLowerCase()) && n.setState({
                                    selectedModel: t.id
                                })
                            }))
                        }, this.setCurrentModel = function(e) {
                            var t;
                            e ? (t = e.skins[0].variant === Ve.SLIM ? Xe.id : Ze.id, n.setState({
                                currentModel: t
                            })) : n.setState({
                                currentModel: n.state.currentModel
                            })
                        }, this.clearCurrentSelections = function() {
                            n.setState({
                                fileError: null,
                                error: !1,
                                image: void 0,
                                remoteSkin: void 0,
                                file: void 0,
                                transferring: !1
                            })
                        }, this.setRemoteSkin = function(e) {
                            n.setState({
                                remoteSkin: e
                            })
                        }, this.setSkinFromFile = function() {
                            var e = Fe(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.t0 = n, e.t1 = t, e.next = 5, we(t);
                                        case 5:
                                            e.t2 = e.sent, e.t3 = {
                                                file: e.t1,
                                                image: e.t2,
                                                error: !1
                                            }, e.t0.setState.call(e.t0, e.t3), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t4 = e.catch(0), n.setState({
                                                fileError: e.t4
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.postUpload = function(e, t) {
                            n.clearCurrentSelections(), n.setState({
                                error: t,
                                currentModel: n.state.selectedModel,
                                currentSkinUrl: Se(e ? e.skins[0].url : ""),
                                defaultSkin: !!e && e.skins[0].hasOwnProperty("alias")
                            })
                        }, this.setState = function(e) {
                            n.state = Qe(Qe({}, n.state), e)
                        }, this.fetchCurrentSkin()
                    }
                    var t, r, n, a, o;
                    return t = e, r = [{
                        key: "uploadRemoteSkin",
                        value: (o = Fe(regeneratorRuntime.mark((function e() {
                            var t, r, n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = {
                                            url: this.state.remoteSkin,
                                            variant: this.state.selectedModel
                                        }, e.next = 3, this.api.uploadRemoteSkin(t);
                                    case 3:
                                        r = e.sent, n = r.data, a = r.error, this.postUpload(n, a);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "uploadSkin",
                        value: (a = Fe(regeneratorRuntime.mark((function e() {
                            var t, r, n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.setState({
                                                transferring: !0,
                                                fileError: null,
                                                error: !1
                                            }), !this.state.file) {
                                            e.next = 11;
                                            break
                                        }
                                        return t = this.createFormData(this.state.selectedModel, this.state.file), e.next = 5, this.api.uploadSkin(t);
                                    case 5:
                                        r = e.sent, n = r.data, a = r.error, this.postUpload(n, a), e.next = 12;
                                        break;
                                    case 11:
                                        this.uploadRemoteSkin();
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "createFormData",
                        value: function(e, t) {
                            var r = new FormData;
                            return r.append("variant", e), r.append("file", t), r
                        }
                    }], n = [{
                        key: "getInstance",
                        value: function() {
                            return e.instance || (e.instance = new e(function() {
                                var e, t, r, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Zf;
                                return {
                                    getProfile: (n = Oe(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, a.get("minecraft/profile");
                                                case 3:
                                                    if (!(t = e.sent).ok) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 7, t.json();
                                                case 7:
                                                    return e.t0 = e.sent, e.abrupt("return", {
                                                        data: e.t0,
                                                        error: !1
                                                    });
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    return e.prev = 11, e.t1 = e.catch(0), e.abrupt("return", {
                                                        data: null,
                                                        error: !0
                                                    });
                                                case 14:
                                                    return e.abrupt("return", {
                                                        data: null,
                                                        error: !1
                                                    });
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 11]
                                        ])
                                    }))), function() {
                                        return n.apply(this, arguments)
                                    }),
                                    deleteSkin: (r = Oe(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, a.delete("minecraft/profile/skins/active");
                                                case 3:
                                                    if (!(t = e.sent).ok) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 7, t.json();
                                                case 7:
                                                    return e.t0 = e.sent, e.abrupt("return", {
                                                        data: e.t0,
                                                        error: !1
                                                    });
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    return e.prev = 11, e.t1 = e.catch(0), e.abrupt("return", {
                                                        data: null,
                                                        error: !0
                                                    });
                                                case 14:
                                                    return e.abrupt("return", {
                                                        data: null,
                                                        error: !1
                                                    });
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 11]
                                        ])
                                    }))), function() {
                                        return r.apply(this, arguments)
                                    }),
                                    uploadSkin: (t = Oe(regeneratorRuntime.mark((function e(t) {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, a.post("minecraft/profile/skins", t);
                                                case 3:
                                                    if (!(r = e.sent).ok) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 7, r.json();
                                                case 7:
                                                    return e.t0 = e.sent, e.abrupt("return", {
                                                        data: e.t0,
                                                        error: !1
                                                    });
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    return e.prev = 11, e.t1 = e.catch(0), e.abrupt("return", {
                                                        data: null,
                                                        error: !0
                                                    });
                                                case 14:
                                                    return e.abrupt("return", {
                                                        data: null,
                                                        error: !1
                                                    });
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 11]
                                        ])
                                    }))), function(e) {
                                        return t.apply(this, arguments)
                                    }),
                                    uploadRemoteSkin: (e = Oe(regeneratorRuntime.mark((function e(t) {
                                        var r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, a.post("minecraft/profile/skins", JSON.stringify(t), {
                                                        headers: {
                                                            "Content-Type": "application/json"
                                                        }
                                                    });
                                                case 3:
                                                    if (!(r = e.sent).ok) {
                                                        e.next = 9;
                                                        break
                                                    }
                                                    return e.next = 7, r.json();
                                                case 7:
                                                    return e.t0 = e.sent, e.abrupt("return", {
                                                        data: e.t0,
                                                        error: !1
                                                    });
                                                case 9:
                                                    e.next = 14;
                                                    break;
                                                case 11:
                                                    return e.prev = 11, e.t1 = e.catch(0), e.abrupt("return", {
                                                        data: null,
                                                        error: !0
                                                    });
                                                case 14:
                                                    return e.abrupt("return", {
                                                        data: null,
                                                        error: !1
                                                    });
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 11]
                                        ])
                                    }))), function(t) {
                                        return e.apply(this, arguments)
                                    })
                                }
                            }(), De)), e.instance
                        }
                    }], r && He(t.prototype, r), n && He(t, n), e
                }();
            Ge([C.LO], qe.prototype, "state", void 0), Ge([C.aD], qe.prototype, "setState", void 0);
            var Ke = function() {
                    var e, t = (0, v.oR)(Ye),
                        r = function(e) {
                            var r = e[0];
                            t.setSkinFromFile(r)
                        };
                    return (0, h.SZ)((function() {
                        var a = t.state,
                            l = a.image,
                            i = a.remoteSkin,
                            c = a.fileError,
                            s = a.error;
                        return l || i ? null : n.createElement("div", null, s && n.createElement("div", {
                            role: "alert",
                            className: "alert alert-danger"
                        }, n.createElement(o.T, null, "Something went wrong... Please try again ")), c && n.createElement("div", {
                            role: "alert",
                            className: "alert alert-danger"
                        }, c.message), n.createElement("p", {
                            className: "text-center"
                        }, n.createElement(o.T, null, "After you've created your custom skin, upload it here:")), n.createElement(ye.Z, {
                            "data-aem-contentname": "Skin file dropzone",
                            className: "file-drop p-5 text-center mb-4",
                            ref: function(t) {
                                e = t
                            },
                            onDrop: r,
                            multiple: !1,
                            disableClick: !0
                        }, n.createElement("p", null, n.createElement(o.T, null, "Drop your skin file here, or:")), n.createElement("button", {
                            className: "btn btn-secondary",
                            onClick: function(t) {
                                return function(t) {
                                    t.preventDefault(), e.open()
                                }(t)
                            }
                        }, n.createElement(o.T, null, "Select a file"))))
                    }))
                },
                We = function() {
                    var e = (0, v.oR)(Ye),
                        t = e.state.models;
                    return (0, h.SZ)((function() {
                        return n.createElement("div", null, n.createElement("p", {
                            className: "text-center w-75 mx-auto"
                        }, n.createElement(o.T, null, "First choose the shape of your Minecraft character by picking one of two models.")), n.createElement("div", {
                            className: "row mb-5"
                        }, t.map((function(t, r) {
                            return n.createElement("div", {
                                className: "col text-center mb-3",
                                key: r,
                                "data-testid": t.id
                            }, n.createElement(g.rC, {
                                "data-aem-contentname": "Model Selection",
                                id: t.id,
                                name: "modelRadioSelect",
                                onChange: function() {
                                    return e.selectModel(t.id)
                                },
                                label: t.name,
                                checked: t.selected,
                                className: "w-100"
                            }, n.createElement("div", {
                                className: "mb-3"
                            }, n.createElement("img", {
                                src: t.imageUrl,
                                alt: ""
                            }))))
                        }))))
                    }))
                },
                _e = function() {
                    var e = (0, v.oR)(Ye);
                    return (0, h.SZ)((function() {
                        var t = e.state,
                            r = t.image,
                            a = t.remoteSkin,
                            l = t.transferring,
                            i = t.selectedModel;
                        return r || a ? n.createElement("div", {
                            className: "text-center file-drop p-5 text-center mb-4",
                            "data-testid": "skin-upload-view"
                        }, n.createElement("div", {
                            className: "mb-4"
                        }, n.createElement("p", {
                            className: "mb-2"
                        }, n.createElement(o.T, null, "Selected skin:")), n.createElement("div", {
                            className: "row mb-3"
                        }, n.createElement("div", {
                            className: "col"
                        }, n.createElement("img", {
                            src: r && r.src || a,
                            className: "image-rendering-pixelated",
                            width: "256",
                            "data-testid": "skin-image"
                        }))), n.createElement("p", null, n.createElement(o.T, {
                            placeholders: [i || ""],
                            isHTML: !0
                        }, " Selected model: <strong>%1$s</strong>")), n.createElement("p", {
                            className: "w-75 mx-auto"
                        }, n.createElement(o.T, null, "Update the skin of your character in Minecraft: Java Edition by clicking Upload below, or hit cancel to abort.")), n.createElement(g.zx, {
                            colorVariant: "primary",
                            disabled: l,
                            onClick: function() {
                                e.uploadSkin()
                            }
                        }, l ? n.createElement(o.T, null, "Uploading") : n.createElement(o.T, null, "upload")), " ", n.createElement(g.zx, {
                            colorVariant: "secondary",
                            onClick: function() {
                                e.clearCurrentSelections()
                            }
                        }, n.createElement(o.T, null, "Cancel")))) : null
                    }))
                },
                $e = function() {
                    return (0, h.SZ)((function() {
                        return n.createElement("div", {
                            className: "mb-4",
                            "data-testid": "select-model"
                        }, n.createElement("h1", {
                            className: "font-mc-ten border-bottom mb-4"
                        }, n.createElement(o.T, null, "Change your skin - PC/MAC")), n.createElement("h2", {
                            className: "font-mc-ten text-600 text-center"
                        }, n.createElement(o.T, null, "1. Select model")), n.createElement(We, null), n.createElement("h2", {
                            className: "font-mc-ten text-600 text-center"
                        }, n.createElement(o.T, null, "2. Upload custom skin")), n.createElement(Ke, null), n.createElement(_e, null), n.createElement("div", {
                            className: "alert alert-light mb-4",
                            "data-testid": "change-skin-note"
                        }, n.createElement(o.T, {
                            "data-aem-contentname": "Skin article link",
                            placeholders: ["https://help.mojang.com/customer/portal/articles/979200?ref=profile"],
                            isHTML: !0
                        }, "<strong>Note!</strong> This changes your skin on the Minecraft: Java Edition.\n            You can change your skin in the other versions of Minecraft by accessing menus in-game.\n            For more information, check <a class='alert-link' href='%1$s'>this handy help article</a>.")), n.createElement("p", {
                            className: "mb-4",
                            "data-testid": "help-article"
                        }, n.createElement(o.T, {
                            "data-aem-contentname": "Texture article link",
                            placeholders: ["https://help.mojang.com/customer/portal/articles/979200?ref=profile"],
                            isHTML: !0
                        }, "Do you wonder HOW you give your character a unique texture? Create your own skin or\n              find ready-made skins on the internet! Check out <a href='%1$s'>this help article</a>\n              for more information.")))
                    }))
                },
                et = function() {
                    var e = (0, o.useTranslation)().t,
                        t = (0, v.oR)(Ye);
                    return (0, h.SZ)((function() {
                        var r = t.state,
                            a = r.currentSkinUrl,
                            l = r.currentModel,
                            i = r.reseted,
                            c = r.defaultSkin;
                        return a ? n.createElement("div", {
                            className: "mb-4",
                            "data-testid": "skin-reset"
                        }, n.createElement("h2", {
                            className: "font-mc-ten border-bottom mb-3"
                        }, n.createElement(o.T, null, "Current skin")), n.createElement("div", {
                            className: "text-center"
                        }, n.createElement("p", null, n.createElement(o.T, {
                            placeholders: [l]
                        }, "Your current skin (%1$s):")), n.createElement("p", null, n.createElement("img", {
                            src: a,
                            className: "image-rendering-pixelated",
                            width: "256",
                            alt: e("Your current skin")
                        })), c ? null : n.createElement(n.Fragment, null, n.createElement("p", null, n.createElement(o.T, null, "Want to go back to the default look?")), n.createElement("button", {
                            "data-aem-contentname": "Reset skin button",
                            className: "btn btn-warning",
                            onClick: function() {
                                return t.resetSkin()
                            }
                        }, n.createElement(o.T, null, "Reset your skin"))), i ? n.createElement("div", {
                            className: "alert alert-success my-3"
                        }, n.createElement(o.T, null, "Your skin has been reseted.")) : null)) : null
                    }))
                };

            function tt(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var rt = "rgba(128, 128, 128, .5)",
                nt = .5,
                at = function(e) {
                    var t = e.width,
                        r = e.height,
                        a = tt(e, ["width", "height"]);
                    return n.createElement("svg", Object.assign({
                        viewBox: "0 0 ".concat(t, " ").concat(r),
                        width: "100%",
                        height: "100%"
                    }, a), n.createElement("line", {
                        x1: nt,
                        y1: nt,
                        x2: t - nt,
                        y2: r - nt,
                        stroke: rt,
                        strokeWidth: .2
                    }), n.createElement("line", {
                        x1: t - nt,
                        y1: nt,
                        x2: nt,
                        y2: r - nt,
                        stroke: rt,
                        strokeWidth: .2
                    }), n.createElement("rect", {
                        x: "0",
                        y: "0",
                        width: t,
                        height: r,
                        fill: "none",
                        stroke: rt,
                        strokeWidth: 1
                    }))
                };

            function ot(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var lt = function(e) {
                    var t = e.width,
                        r = e.height,
                        a = e.scale,
                        o = e.children,
                        l = ot(e, ["width", "height", "scale", "children"]),
                        i = (0, g.ZF)("div", "position-relative");
                    return n.createElement(i, Object.assign({
                        style: {
                            height: r * a,
                            width: t * a
                        }
                    }, l), o)
                },
                it = function(e) {
                    var t = e.cape,
                        r = e.onChange;
                    return n.createElement(g.rC, {
                        "data-aem-contentname": "Capes Select",
                        id: t.id,
                        label: t.alias,
                        name: "capeRadioSelect",
                        className: "w-100 h-100",
                        labelClassName: "position-relative z-index-0",
                        onChange: function() {
                            return r(t)
                        },
                        checked: "ACTIVE" === t.state
                    }, n.createElement("div", {
                        className: "d-inline-block"
                    }, t.url ? n.createElement(g.hZ, {
                        load: function() {
                            return be(t.url)
                        }
                    }, (function(e, t) {
                        return e && t ? n.createElement(g.wQ, {
                            image: t,
                            scale: 8,
                            crop: {
                                x: 1,
                                y: 1,
                                width: 10,
                                height: 16
                            }
                        }) : n.createElement(lt, {
                            className: "bg-300",
                            width: 10,
                            height: 16,
                            scale: 8
                        })
                    })) : n.createElement(lt, {
                        width: 10,
                        height: 16,
                        scale: 8
                    }, n.createElement(at, {
                        width: 10,
                        height: 16,
                        className: "d-block"
                    }))))
                };

            function ct(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return st(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return st(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function st(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ut = function(e) {
                e.profileId;
                var t = e.capeStore,
                    r = e.onCapeAdded,
                    a = ct((0, n.useState)(null), 2),
                    l = a[0];
                a[1];
                return (0, n.useEffect)((function() {
                    r(l)
                }), [l, r]), (0, h.SZ)((function() {
                    var e = t.capes,
                        r = t.purge,
                        a = t.save,
                        l = t.saved,
                        i = t.selectCape,
                        c = t.selectedCape;
                    return e ? n.createElement(g.X2, null, e.map((function(e) {
                        return n.createElement(g.JX, {
                            key: e.id,
                            ref: function(e) {},
                            size: 6,
                            xl: 4,
                            className: "text-center pb-3"
                        }, n.createElement(it, {
                            cape: e,
                            onChange: function(e) {
                                e.id === Ne.id ? r() : a(e.id), i(e.id)
                            }
                        }))
                    })), n.createElement(g.JX, {
                        size: 12
                    }, n.createElement(g.bZ, {
                        colorVariant: "light",
                        className: "text-center mb-4",
                        style: {
                            opacity: l ? 1 : 0
                        },
                        "data-testid": "saveMessage"
                    }, c && c.id !== Ne.id ? n.createElement(o.T, {
                        placeholders: [c.alias]
                    }, "%1$s cape selected") : n.createElement(o.T, null, "No cape selected")))) : null
                }))
            };

            function mt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function ft(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function dt(e, t) {
                return (dt = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function pt(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = vt(e);
                    if (t) {
                        var a = vt(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return ht(this, r)
                }
            }

            function ht(e, t) {
                return !t || "object" !== yt(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function vt(e) {
                return (vt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function yt(e) {
                return (yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var gt = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : yt(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                bt = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && dt(e, t)
                    }(i, e);
                    var t, r, a, l = pt(i);

                    function i() {
                        return mt(this, i), l.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.profileId,
                                r = e.capeStore,
                                a = e.onCapeAdded,
                                l = r.capes;
                            return l && l.length > 1 ? n.createElement("div", null, n.createElement("h2", {
                                className: "font-mc-ten border-bottom mb-4"
                            }, n.createElement(o.T, null, "Change your cape - PC/MAC")), n.createElement("p", null, n.createElement(o.T, null, "Capes are special rewards players can unlock through different events, campaigns and other happy happenings. Here you can choose between the capes you currently own:")), t ? n.createElement(ut, {
                                profileId: t,
                                capeStore: r,
                                onCapeAdded: a
                            }) : null) : null
                        }
                    }]) && ft(t.prototype, r), a && ft(t, a), i
                }(n.Component);
            bt = gt([k.Pi], bt);
            var Et = (0, g.ZF)("div", "border border-width-3 border-black-10 rounded"),
                wt = function(e) {
                    var t = e.children;
                    return n.createElement(Et, {
                        className: "h-100 p-4"
                    }, n.createElement(g.JX, {
                        size: 12
                    }, n.createElement(pe, {
                        className: "mb-4"
                    })), t)
                },
                At = function(e) {
                    var t = e.rewards,
                        r = e.onRewardSelected;
                    return n.createElement(n.Fragment, null, t.map((function(e) {
                        return n.createElement(g.hZ, {
                            load: function() {
                                return be(e.textureUrl)
                            },
                            key: e.id
                        }, (function(t, a) {
                            return n.createElement(g.JX, {
                                size: 12,
                                sm: 6,
                                className: "text-center pb-3"
                            }, n.createElement(wt, {
                                "data-role": "reward-item"
                            }, n.createElement(g.zx, {
                                size: "sm",
                                colorVariant: "primary",
                                onClick: function(t) {
                                    return r(t, {
                                        reward: e,
                                        image: a
                                    })
                                },
                                disabled: !t
                            }, n.createElement(o.T, null, "Open chest"))))
                        }))
                    })))
                },
                Ct = function(e) {
                    var t = e.rewards,
                        r = e.rewardStore,
                        a = e.profileId;
                    return n.createElement(n.Fragment, null, t.map((function(e, t) {
                        return n.createElement(g.JX, {
                            size: 12,
                            sm: 6,
                            className: "text-center pb-3",
                            key: t
                        }, n.createElement(wt, {
                            "data-role": "reward-item"
                        }, n.createElement(g.vB, {
                            initialTime: e.availableAt - Date.now(),
                            onStop: function() {
                                r.fetchRewards(a)
                            }
                        }, (function(e) {
                            return n.createElement(g.IT, {
                                time: e
                            })
                        }))))
                    })))
                };

            function kt(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }
            var St = (0, h.Pi)((function(e) {
                    var t, r, a = e.rewardStore,
                        l = e.profileId,
                        i = e.onRewardClaimed,
                        c = a.upcomingRewards,
                        s = a.claimableRewards,
                        u = a.claimReward,
                        m = a.claimFailed,
                        f = a.setClaimFailed;
                    return s || c ? s && !s.length && c && !c.length ? null : n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "mb-4",
                        "data-testid": "rewards"
                    }, n.createElement("h2", {
                        className: "font-mc-ten border-bottom mb-3",
                        id: "rewards"
                    }, n.createElement(o.T, null, "Rewards")), m && n.createElement(g.bZ, {
                        colorVariant: "danger",
                        className: "alert-fixed",
                        dismissible: !0,
                        "data-role": "claim-failed",
                        onDismiss: function() {
                            f(!1)
                        }
                    }, n.createElement("p", null, n.createElement(o.T, null, "Oops! Something went wrong and we couldn't claim your reward. Please try again later."))), n.createElement(g.X2, null, s && s.length ? n.createElement(At, {
                        rewards: s,
                        onRewardSelected: (t = regeneratorRuntime.mark((function e(t, r) {
                            var n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.currentTarget, e.next = 3, u(r.reward.id, l);
                                    case 3:
                                        if (a = e.sent, f(!a), a) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        i(n, r);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), r = function() {
                            var e = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = t.apply(e, r);

                                function l(e) {
                                    kt(o, n, a, l, i, "next", e)
                                }

                                function i(e) {
                                    kt(o, n, a, l, i, "throw", e)
                                }
                                l(void 0)
                            }))
                        }, function(e, t) {
                            return r.apply(this, arguments)
                        })
                    }) : null, c && c.length ? n.createElement(Ct, {
                        rewards: c,
                        rewardStore: a,
                        profileId: l
                    }) : null))) : null
                })),
                xt = r(2815);

            function Ot(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Rt(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Rt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var It = function(e) {
                    var t, r, n = e.clientWidth;
                    return function(e, t, r) {
                        return Math.min(Math.max(e, t), r)
                    }(Math.round((r = 15) + (30 - r) * (n - (t = 320)) / (600 - t)), 15, 30)
                },
                jt = function(e) {
                    var t = e.image,
                        r = e.animationDelay,
                        a = e.closing,
                        o = Ot(n.useState(It(document.body)), 2),
                        l = o[0],
                        i = o[1];
                    n.useEffect((function() {
                        var e = function() {
                            i(It(document.body))
                        };
                        return window.addEventListener("resize", e),
                            function() {
                                window.removeEventListener("resize", e)
                            }
                    }), []);
                    var c = (0, xt.q_)({
                        config: {
                            friction: 15,
                            tension: 400
                        },
                        delay: a ? 0 : .9 * r,
                        from: {
                            transform: "translateY(120vh)"
                        },
                        reverse: a,
                        transform: "translateY(0vh)"
                    });
                    return n.createElement("div", {
                        className: "position-relative"
                    }, n.createElement(xt.q.div, {
                        className: "mb-5 d-flex justify-content-center",
                        style: c
                    }, n.createElement(g.wQ, {
                        image: t,
                        crop: {
                            x: 1,
                            y: 1,
                            width: 10,
                            height: 16
                        },
                        scale: l
                    })))
                };

            function Tt(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Pt = function(e) {
                    var t = e.closing,
                        r = e.animationDelay,
                        a = Tt(e, ["closing", "animationDelay"]),
                        o = (0, xt.q_)({
                            config: {
                                friction: 20,
                                tension: 500
                            },
                            delay: t ? .2 : r,
                            from: {
                                transform: "scale(0)",
                                opacity: 0
                            },
                            opacity: 1,
                            reverse: t,
                            transform: "scale(1)"
                        });
                    return n.createElement(xt.q.div, {
                        className: "d-flex justify-content-center",
                        style: o
                    }, n.createElement(Nt, Object.assign({}, a)))
                },
                Nt = function(e) {
                    var t = e.cape,
                        r = e.onClose,
                        a = e.onEquip;
                    return n.createElement("div", {
                        className: "w-100 position-relative bg-black-50 text-center p-4"
                    }, n.createElement("div", {
                        className: "tile-category"
                    }, n.createElement("div", {
                        className: "tile-category__text font-mc-five h4",
                        style: {
                            fontSize: ".8rem"
                        }
                    }, n.createElement(o.T, null, "You've got the"))), n.createElement("h3", {
                        className: "h1 font-mc-ten my-2"
                    }, t.alias), n.createElement(g.zx, {
                        className: "m-2",
                        colorVariant: "primary",
                        size: "sm",
                        onClick: function() {
                            return a(t)
                        }
                    }, n.createElement(o.T, null, "Equip")), n.createElement(g.zx, {
                        className: "m-2",
                        colorVariant: "light",
                        size: "sm",
                        onClick: r,
                        variant: "outline"
                    }, n.createElement(o.T, null, "Close")))
                };

            function Mt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Dt(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Dt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Dt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Bt = function(e) {
                var t = e.animationDelay,
                    r = e.onClose,
                    a = e.onEquip,
                    l = e.reward,
                    i = e.image,
                    c = (e.i18n, Mt(n.useState(!1), 2)),
                    s = c[0],
                    u = c[1],
                    m = n.useRef(null),
                    f = function() {
                        u(!0), setTimeout((function() {
                            r()
                        }), .8 * t), setTimeout((function() {
                            u(!1)
                        }), 2 * t)
                    };
                n.useEffect((function() {
                    m.current && m.current.focus()
                }), [l]);
                var d = (0, o.useTranslation)().t;
                return l && n.createElement("div", {
                    className: "bg-wool-dark h-100"
                }, n.createElement("div", {
                    className: "p-4 text-right position-absolute w-100"
                }, n.createElement(g.zx, {
                    onClick: f,
                    colorVariant: "secondary",
                    ref: m,
                    shape: "hexagon",
                    "aria-label": d("Close")
                }, n.createElement(g.JO, {
                    name: "pixel-close",
                    size: "2x"
                }))), n.createElement(g.W2, {
                    className: "h-100"
                }, n.createElement(g.X2, {
                    justifyContent: "center",
                    alignItems: "center",
                    className: "h-100"
                }, n.createElement(g.JX, {
                    size: 12,
                    md: 10,
                    lg: 8
                }, n.createElement(jt, {
                    animationDelay: t,
                    image: i,
                    closing: s
                }), n.createElement(Pt, {
                    animationDelay: t,
                    cape: l,
                    onClose: f,
                    onEquip: a,
                    closing: s
                })))))
            };

            function Qt(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Lt(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Qt(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Qt(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function zt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ft(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ft(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ft(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Ht = 400,
                Ut = function(e) {
                    var t, r = e.capeStore,
                        a = e.rewardStore,
                        l = e.profileId,
                        i = e.capeStoreMojang,
                        c = zt((0, n.useState)(null), 2),
                        s = c[0],
                        u = c[1],
                        m = zt((0, n.useState)({
                            image: null,
                            reward: null
                        }), 2),
                        f = m[0],
                        d = m[1],
                        p = (0, o.useTranslation)().t;
                    return (0, h.SZ)((function() {
                        return a && (t = a.showRewardsAlert), n.createElement(g.FC, {
                            render: function(e, o, c) {
                                var m, h = e.hidden,
                                    v = e.triggerElem;
                                return n.createElement(n.Fragment, null, t && n.createElement(ve, {
                                    onDismiss: a.onAlertDismiss
                                }), n.createElement($e, null), n.createElement(et, null), n.createElement(bt, {
                                    capeStore: r,
                                    profileId: l,
                                    onCapeAdded: function(e) {
                                        u(e)
                                    }
                                }), n.createElement(St, {
                                    rewardStore: a,
                                    profileId: l,
                                    onRewardClaimed: (m = Lt(regeneratorRuntime.mark((function e(t, r) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    d(r), o(t), setTimeout(Lt(regeneratorRuntime.mark((function e() {
                                                        var t;
                                                        return regeneratorRuntime.wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return a.fetchRewards(l), e.next = 3, i.fetchCapes(l);
                                                                case 3:
                                                                    t = i.capes.find((function(e) {
                                                                        return e.textureId === r.reward.textureId
                                                                    })), i.setLastAddedCape(t);
                                                                case 5:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    }))), Ht);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    }))), function(e, t) {
                                        return m.apply(this, arguments)
                                    })
                                }), n.createElement(g.Dy, {
                                    show: !h,
                                    mask: g.KD,
                                    transitionDuration: Ht,
                                    backgroundColor: "black",
                                    textColor: "white",
                                    maskProps: {
                                        triggerElem: s || v
                                    },
                                    label: p("Claim cape")
                                }, n.createElement(Bt, {
                                    animationDelay: 480,
                                    reward: f.reward,
                                    image: f.image,
                                    onClose: function() {
                                        c(), setTimeout((function() {
                                            d({
                                                reward: null,
                                                image: null
                                            }), u(null)
                                        }), 880.0000000000001)
                                    },
                                    onEquip: function(e) {
                                        var t = i.getCapeByTexture(e.textureId);
                                        i.selectCape(t.id), i.save(l, t), c(), setTimeout((function() {
                                            d({
                                                reward: null,
                                                image: null
                                            }), u(null)
                                        }), 880.0000000000001)
                                    }
                                })))
                            }
                        })
                    }))
                };

            function Vt(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Gt(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Vt(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Vt(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Yt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Zt(e) {
                return (Zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var Xt = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Zt(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Jt = {
                    alias: "No cape",
                    deleted: !1,
                    id: "no-cape",
                    profileId: "",
                    selected: !1,
                    textureId: "",
                    type: "",
                    url: null,
                    visible: !0
                },
                qt = function() {
                    function e(t) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.http = t, this.selectCape = function(e) {
                            r.capes.forEach((function(t) {
                                return t.selected = t.id === e
                            }))
                        }, this.getCapeByTexture = function(e) {
                            return r.capes.find((function(t) {
                                return t.textureId === e
                            }))
                        }, this.save = function() {
                            var e = Gt(regeneratorRuntime.mark((function e(t, n) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.post("/user/profile/".concat(t, "/cape/").concat(n.id));
                                        case 2:
                                            (0, C.z)("cape saved", r.postSaveOrDelete);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.purge = function() {
                            var e = Gt(regeneratorRuntime.mark((function e(t) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.delete("/user/profile/".concat(t, "/cape"));
                                        case 2:
                                            (0, C.z)("cape deleted", r.postSaveOrDelete);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.redeem = function() {
                            var e = Gt(regeneratorRuntime.mark((function e(t, n) {
                                var a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.post("user/profile/".concat(t, "/capetokens/code/").concat(n));
                                        case 2:
                                            a = e.sent, r.redeemed = a && a.ok, r.redeemError = !a.ok;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.fetchCapes = function() {
                            var e = Gt(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r.loading = !0, e.next = 3, r.http.getJson("user/profile/".concat(t, "/cape"));
                                        case 3:
                                            if ((n = e.sent) && !n.error) {
                                                e.next = 7;
                                                break
                                            }
                                            return r.capes = [], e.abrupt("return");
                                        case 7:
                                            r.capes = n.sort((function(e, t) {
                                                return e.alias < t.alias ? -1 : e.alias > t.alias ? 1 : 0
                                            })), r.updateCapeProtocol(), r.capes.unshift(Jt), r.capes.find((function(e) {
                                                return e.selected
                                            })) || (r.capes.find((function(e) {
                                                return e.id === Jt.id
                                            })).selected = !0), (0, C.z)("capes fetched", (function() {
                                                r.loading = !1
                                            }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.postSaveOrDelete = function() {
                            r.saved = !0, r.timeoutId && clearTimeout(r.timeoutId), r.timeoutId = window.setTimeout((function() {
                                r.saved = !1
                            }), 2e3)
                        }, this.updateCapeProtocol = function() {
                            r.capes.forEach((function(e) {
                                e.url = Se(e.url)
                            }))
                        }
                    }
                    var t, r, n;
                    return t = e, (r = [{
                        key: "setLastAddedCape",
                        value: function(e) {
                            this.lastAddedCape = e
                        }
                    }, {
                        key: "selectedCape",
                        get: function() {
                            return this.capes.find((function(e) {
                                return e.selected
                            }))
                        }
                    }]) && Yt(t.prototype, r), n && Yt(t, n), e
                }();
            Xt([C.LO], qt.prototype, "capes", void 0), Xt([C.LO], qt.prototype, "lastAddedCape", void 0), Xt([C.LO], qt.prototype, "loading", void 0), Xt([C.LO], qt.prototype, "saved", void 0), Xt([C.LO], qt.prototype, "redeemError", void 0), Xt([C.LO], qt.prototype, "redeemed", void 0), Xt([C.aD], qt.prototype, "setLastAddedCape", null), Xt([C.Fl], qt.prototype, "selectedCape", null), Xt([C.aD], qt.prototype, "selectCape", void 0), Xt([C.aD], qt.prototype, "getCapeByTexture", void 0), Xt([C.aD], qt.prototype, "save", void 0), Xt([C.aD], qt.prototype, "purge", void 0), Xt([C.aD], qt.prototype, "redeem", void 0), Xt([C.aD], qt.prototype, "fetchCapes", void 0), Xt([C.aD], qt.prototype, "postSaveOrDelete", void 0), Xt([C.aD], qt.prototype, "updateCapeProtocol", void 0);
            var Kt = new qt(v.uW);

            function Wt(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function _t(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Wt(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Wt(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function $t(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function er(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function tr(e) {
                return (tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var rr = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : tr(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                nr = "savedClaimableRewards",
                ar = function() {
                    function e(t) {
                        var r = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.localStorage;
                        $t(this, e), this.http = t, this.claimFailed = !1, this.onAlertDismiss = function() {
                            var e = JSON.stringify(r.claimableRewards);
                            r.setSavedClaimableRewards(e), r.storage.setItem(nr, e)
                        }, this.fetchRewards = function() {
                            var e = _t(regeneratorRuntime.mark((function e(t) {
                                var n, a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.get("user/profile/".concat(t, "/rewards"));
                                        case 2:
                                            if ((n = e.sent).ok) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.next = 7, n.json();
                                        case 7:
                                            a = e.sent, r.claimableRewards = a.rewards, r.upcomingRewards = a.upcomingRewards;
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.claimReward = function() {
                            var e = _t(regeneratorRuntime.mark((function e(t, n) {
                                var a, o;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.http.put("user/profile/".concat(n, "/rewards"), {
                                                rewards: [t]
                                            }, {
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                }
                                            });
                                        case 2:
                                            if (!(a = e.sent).ok) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, a.json();
                                        case 6:
                                            return o = e.sent[0], e.abrupt("return", o.successful);
                                        case 8:
                                            return e.abrupt("return", !1);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.setClaimFailed = function(e) {
                            r.claimFailed = e
                        }, this.setSavedClaimableRewards = function(e) {
                            r.savedClaimableRewards = e
                        }, this.storage = n, this.setSavedClaimableRewards(this.storage.getItem(nr))
                    }
                    var t, r, n;
                    return t = e, (r = [{
                        key: "showRewardsAlert",
                        get: function() {
                            return !(!this.claimableRewards || !this.claimableRewards.length) && JSON.stringify(this.claimableRewards) !== this.savedClaimableRewards
                        }
                    }]) && er(t.prototype, r), n && er(t, n), e
                }();
            rr([C.LO], ar.prototype, "savedClaimableRewards", void 0), rr([C.LO], ar.prototype, "claimableRewards", void 0), rr([C.LO], ar.prototype, "upcomingRewards", void 0), rr([C.LO], ar.prototype, "claimFailed", void 0), rr([C.Fl], ar.prototype, "showRewardsAlert", null), rr([C.aD], ar.prototype, "fetchRewards", void 0), rr([C.aD], ar.prototype, "claimReward", void 0), rr([C.aD], ar.prototype, "setClaimFailed", void 0), rr([C.aD], ar.prototype, "setSavedClaimableRewards", void 0);
            var or, lr = new ar(v.uW),
                ir = "/skin",
                cr = function(e) {
                    var t = e.profileId,
                        r = e.isMsa,
                        o = (0, a.Tx)().log;
                    return (0, n.useEffect)((function() {
                        t && (o && o.pageView("skin"), !r && Kt.fetchCapes(t))
                    }), [o, t]), t ? n.createElement(Ut, {
                        capeStore: De,
                        rewardStore: lr,
                        profileId: t,
                        capeStoreMojang: Kt
                    }) : null
                };

            function sr(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function ur(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            sr(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            sr(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function mr(e) {
                return {
                    fetchRealms: (n = ur(regeneratorRuntime.mark((function t(r) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.get("profile/".concat(r));
                                case 3:
                                    if (!(n = t.sent).ok) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7, n.json();
                                case 7:
                                    return a = t.sent, t.abrupt("return", {
                                        data: a,
                                        ok: !0,
                                        error: !1
                                    });
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    return t.prev = 11, t.t0 = t.catch(0), t.abrupt("return", {
                                        data: void 0,
                                        ok: !1,
                                        error: !0
                                    });
                                case 14:
                                    return t.abrupt("return", {
                                        data: void 0,
                                        ok: !1,
                                        error: !1
                                    });
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 11]
                        ])
                    }))), function(e) {
                        return n.apply(this, arguments)
                    }),
                    getTrialInfo: (r = ur(regeneratorRuntime.mark((function t(r) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.get("profile/".concat(r, "/trial/"));
                                case 3:
                                    if (!(n = t.sent).ok) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 7, n.json();
                                case 7:
                                    return a = t.sent, t.abrupt("return", {
                                        canStart: a.canStart,
                                        ok: !0,
                                        error: !1
                                    });
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    return t.prev = 11, t.t0 = t.catch(0), t.abrupt("return", {
                                        canStart: !1,
                                        ok: !1,
                                        error: !0
                                    });
                                case 14:
                                    return t.abrupt("return", {
                                        canStart: !1,
                                        ok: !1,
                                        error: !1
                                    });
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 11]
                        ])
                    }))), function(e) {
                        return r.apply(this, arguments)
                    }),
                    startTrial: (t = ur(regeneratorRuntime.mark((function t(r) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.put("profile/".concat(r, "/trial/"));
                                case 3:
                                    return n = t.sent, t.next = 6, n.json();
                                case 6:
                                    if (a = t.sent, !n.ok) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        data: {
                                            started: a.started
                                        },
                                        ok: !0,
                                        error: !1
                                    });
                                case 11:
                                    if (403 !== n.status) {
                                        t.next = 15;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        data: {
                                            started: !1,
                                            reason: or.NOT_ELIGIBLE
                                        },
                                        ok: !1,
                                        error: !1
                                    });
                                case 15:
                                    if (400 !== n.status) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.abrupt("return", {
                                        data: {
                                            started: !1,
                                            reason: or.NO_CC_STORED
                                        },
                                        ok: !1,
                                        error: !1
                                    });
                                case 19:
                                    return t.abrupt("return", {
                                        data: {
                                            started: !1,
                                            reason: a.reason
                                        },
                                        ok: !1,
                                        error: !1
                                    });
                                case 20:
                                    t.next = 25;
                                    break;
                                case 22:
                                    return t.prev = 22, t.t0 = t.catch(0), t.abrupt("return", {
                                        data: {
                                            started: !1
                                        },
                                        ok: !1,
                                        error: !0
                                    });
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 22]
                        ])
                    }))), function(e) {
                        return t.apply(this, arguments)
                    })
                };
                var t, r, n
            }! function(e) {
                e[e.NO_CC_STORED = 1] = "NO_CC_STORED", e[e.NOT_ELIGIBLE = 2] = "NOT_ELIGIBLE", e[e.UNKNOWN = 3] = "UNKNOWN"
            }(or || (or = {}));
            var fr = r(1321),
                dr = "Bearer ".concat((0, p.LP)()),
                pr = new fr.K("".concat(d["endpoint.minecraftServices"], "realms/"), {
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        Authorization: dr,
                        Accept: "application/json"
                    },
                    mode: "cors",
                    redirect: "follow"
                });

            function hr(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function vr(e) {
                return (vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var yr = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : vr(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                gr = Symbol("realmsStoreSymbol"),
                br = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.api = t, this.fetchingRealms = !0, this.networkError = !1, this.fetchRealms = function() {
                        var e, t = (e = regeneratorRuntime.mark((function e(t) {
                            var n, a, o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.fetchingRealms = !0, e.next = 3, r.api.fetchRealms(t);
                                    case 3:
                                        n = e.sent, a = n.data, o = n.ok, l = n.error, r.networkError = l, o && (r.realms = a.filter((function(e) {
                                            return "DELETED" !== e.state
                                        }))), r.fetchingRealms = !1;
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function l(e) {
                                    hr(o, n, a, l, i, "next", e)
                                }

                                function i(e) {
                                    hr(o, n, a, l, i, "throw", e)
                                }
                                l(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                };
            yr([C.LO], br.prototype, "realms", void 0), yr([C.LO], br.prototype, "fetchingRealms", void 0), yr([C.LO], br.prototype, "error", void 0), yr([C.LO], br.prototype, "networkError", void 0), yr([C.aD], br.prototype, "fetchRealms", void 0);
            var Er = new br(mr(pr)),
                wr = function(e) {
                    var t = e.plan;
                    return t.subscription ? n.createElement(o.T, {
                        placeholders: [t.price]
                    }, "%1$s / month") : n.createElement("span", null, t.price)
                };

            function Ar(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Cr = function(e) {
                    var t = e.children,
                        r = Ar(e, ["children"]);
                    return n.createElement(g.aT, Object.assign({
                        block: !0,
                        label: n.createElement(o.T, {
                            "data-aem-contentname": "Realms EULA agreement link",
                            isHTML: !0,
                            placeholders: [d["url.realmsEulaUrl"], d["url.privacyPolicyUrl"]],
                            domPurifyConfig: {
                                ADD_ATTR: ["target"]
                            }
                        }, 'I have read and agree to the\n          <a href="%1$s" target="_blank">Minecraft Realms End User License Agreement</a>\n          and\n          <a href="%2$s" target="_blank">Privacy Policy</a>'),
                        labelClassName: "text-center",
                        a11yHelp: n.createElement(o.T, null, "Please check the checkbox above and agree to our terms to submit this form")
                    }, r), t)
                },
                kr = function() {
                    return n.createElement("div", {
                        className: "text-smaller mt-4"
                    }, n.createElement(g.nv, null, "*", " ", n.createElement(o.T, {
                        "data-aem-contentname": "Go to Profile from Realms link",
                        isHTML: !0,
                        placeholders: [d["url.profile"]]
                    }, "Your subscription continues to be charged at the then-current regular price (subject to change) plus applicable taxes unless cancelled. Cancel anytime; see <a href='%1$s'>profile</a>. If your subscription is inactive for more than 18 months, your Realms data will be deleted from the server.")), n.createElement(g.nv, null, "**", " ", n.createElement(o.T, null, "If your subscription is inactive for more than 18 months, your Realms data will be deleted from the server.")))
                };

            function Sr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function xr(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sr(Object(r), !0).forEach((function(t) {
                        Or(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sr(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Or(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Rr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ir(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ir(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ir(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function jr(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Tr = function(e) {
                    var t = e.selectedPlan,
                        r = e.selectedRealm,
                        l = e.profileId,
                        i = e.checkoutUrl,
                        c = e.currentLang,
                        s = e.isMsa,
                        u = jr(e, ["selectedPlan", "selectedRealm", "profileId", "checkoutUrl", "currentLang", "isMsa"]),
                        m = (0, a.Tx)().log,
                        f = Rr(n.useState(!1), 2),
                        p = f[0],
                        h = f[1],
                        v = Rr((0, g.PV)(!1, !1, 1e3), 2),
                        y = v[0],
                        b = v[1],
                        E = new URL(i, window.location.origin),
                        w = new URLSearchParams(E.search);
                    return w.append("lang", c), E.search = w.toString(), n.createElement("form", Object.assign({
                        action: E.toString(),
                        method: "post",
                        "data-testid": "RealmsCheckoutFormForm",
                        onSubmit: function(e) {
                            p ? m && m.event("Realms", "".concat(t.variantId), "Checkout") : (e.preventDefault(), b(!0))
                        }
                    }, u), n.createElement("input", {
                        "data-testid": "RealmsCheckoutForAccountType",
                        name: "account_type",
                        value: s ? "msa" : "mja",
                        type: "hidden"
                    }), n.createElement("input", {
                        "data-aem-contentname": "Realms Checkout Form",
                        "data-testid": "RealmsCheckoutFormData",
                        type: "hidden",
                        name: "data",
                        value: JSON.stringify(xr({
                            profileId: l,
                            items: [{
                                variantId: t.variantId
                            }]
                        }, {
                            subscriptionId: r
                        }))
                    }), n.createElement("input", {
                        type: "hidden",
                        name: "callback_url",
                        "data-testid": "RealmsCheckoutForCallbackUrl",
                        value: d["url.orderSummary"]
                    }), n.createElement("input", {
                        type: "hidden",
                        name: "restart_url",
                        "data-testid": "RealmsCheckoutForRestartUrl",
                        value: d["url.restartUrl"]
                    }), n.createElement(g.X2, {
                        justifyContent: "center"
                    }, n.createElement(g.JX, {
                        size: 12,
                        sm: 10,
                        md: 8,
                        lg: 9
                    }, n.createElement(Cr, {
                        name: "acceptTerms",
                        type: "submit",
                        accepted: p,
                        setAccepted: h,
                        alertUser: y,
                        block: !0
                    }, n.createElement("div", null, n.createElement("div", {
                        className: "text-small"
                    }, n.createElement(o.T, null, "Check out:")), n.createElement("div", {
                        className: "h3 mb-0"
                    }, t.displayName), n.createElement("div", {
                        className: "text-small"
                    }, n.createElement(wr, {
                        plan: t
                    })))))), n.createElement(g.X2, null, n.createElement(g.JX, null, n.createElement(kr, null))))
                },
                Pr = function(e) {
                    var t = e.realm,
                        r = e.selectedRealmId,
                        a = e.onChange,
                        l = e.disabled,
                        i = void 0 !== l && l,
                        c = t.id,
                        s = t.mayExtend,
                        u = t.daysLeft,
                        m = t.name;
                    return n.createElement("div", {
                        className: "my-2"
                    }, n.createElement(g.Y8, {
                        "data-aem-contentname": "Realms Select Extend Radio",
                        "data-testid": "realmsSelectRadio",
                        name: "selectRealm",
                        id: "Realm-".concat(c),
                        checked: r === c,
                        onChange: function() {
                            return a(c)
                        },
                        disabled: i,
                        labelClassName: "d-flex align-items-center",
                        radioLabelClassName: "w-100 ml-1",
                        label: u < 0 ? n.createElement(o.T, {
                            placeholders: [m]
                        }, "Extend %1$s (has expired)") : s ? n.createElement(o.T, {
                            placeholders: [m, u]
                        }, "Extend %1$s (expires in %2$s days)") : n.createElement(o.T, {
                            placeholders: [m, u]
                        }, "Extend %1$s (You can not extend this realm, expires in %2$s days)")
                    }))
                };

            function Nr(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Mr = function(e) {
                var t = e.realms,
                    r = e.selectedRealmId,
                    a = e.onChange,
                    l = e.disabled,
                    i = void 0 !== l && l,
                    c = Nr(e, ["realms", "selectedRealmId", "onChange", "disabled"]),
                    s = t ? t.filter((function(e) {
                        return !e.paymentIsActive
                    })) : [];
                return n.useLayoutEffect((function() {
                    0 !== s.length && (s.filter((function(e) {
                        return e.mayExtend
                    })).length > 0 || a(void 0))
                }), [t, s, a]), s.length > 0 ? n.createElement("div", Object.assign({
                    className: "mb-5"
                }, c), n.createElement("h2", {
                    className: "font-mc-ten text-600"
                }, n.createElement(o.T, null, "Choose realm")), n.createElement(g.nv, null, n.createElement(o.T, null, "What do you want to do with your new subscription?")), n.createElement("div", {
                    className: "my-2"
                }, n.createElement(g.Y8, {
                    "data-aem-contentname": "Realms Select New",
                    "data-testid": "realmsSelectRadioNew",
                    name: "selectRealm",
                    id: "NewRealm",
                    checked: void 0 === r,
                    onChange: function() {
                        return a(void 0)
                    },
                    labelClassName: "d-flex align-items-center",
                    radioLabelClassName: "w-100 ml-1",
                    label: n.createElement(o.T, null, "Create a new realm"),
                    disabled: i
                })), s.map((function(e) {
                    var t = e.name,
                        o = e.id,
                        l = e.mayExtend,
                        c = e.daysLeft;
                    return n.createElement(Pr, {
                        "data-aem-contentname": "Realms Select Existing",
                        "data-testid": "realmsSelectRadio".concat(o),
                        key: o,
                        realm: {
                            name: t,
                            id: o,
                            daysLeft: c,
                            mayExtend: l
                        },
                        selectedRealmId: r,
                        onChange: a,
                        disabled: i || !l
                    })
                }))) : n.createElement(g.nv, {
                    "data-testid": "NewRealmMessage"
                }, n.createElement(o.T, null, "You are about to create a new Realm"))
            };

            function Dr(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Br = function(e) {
                    var t = e.plan;
                    return t.discount ? n.createElement("strong", {
                        className: "ml-2"
                    }, n.createElement(o.T, {
                        placeholders: [t.discount]
                    }, "(%1$s off!)")) : null
                },
                Qr = function(e) {
                    var t = e.plan,
                        r = e.onChange,
                        a = Dr(e, ["plan", "onChange"]);
                    return n.createElement(g.Y8, Object.assign({
                        "data-aem-contentname": "Realms Select Plan",
                        "data-testid": "RealmsPlanItemRadio",
                        name: "Plan",
                        id: t.variantId,
                        onChange: function() {
                            return r(t)
                        },
                        className: "d-block mb-3",
                        labelClassName: "d-flex align-items-center",
                        radioLabelClassName: "w-100",
                        label: n.createElement("div", {
                            className: "ml-2 w-100"
                        }, n.createElement("div", {
                            "data-testid": "RealmsPlanItemName"
                        }, t.displayName), n.createElement("div", {
                            className: "d-flex justify-content-between"
                        }, n.createElement(wr, {
                            plan: t
                        }), n.createElement(Br, {
                            plan: t
                        })))
                    }, a))
                };

            function Lr(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var zr = function(e) {
                    var t = e.children,
                        r = e.selected,
                        a = e.order,
                        o = e.orderMd,
                        l = e.position,
                        i = e.colSizeMd,
                        c = void 0 === i ? 6 : i,
                        s = Lr(e, ["children", "selected", "order", "orderMd", "position", "colSizeMd"]);
                    return n.createElement(g.JX, Object.assign({
                        size: 12,
                        md: c,
                        className: "".concat("top" === l ? "pt-3 " : "", "order-").concat(a, " order-md-").concat(o, " border border-width-2 rounded-").concat(l, " border-").concat("top" === l ? "bottom" : "top", "-0 ").concat(r ? "border-primary bg-200" : "border-white")
                    }, s), t)
                },
                Fr = function(e) {
                    var t = e.selected,
                        r = e.heading,
                        a = e.orders,
                        o = e.ordersMd,
                        l = e.plans,
                        i = e.selectedPlan,
                        c = e.onChange,
                        s = e.footnote,
                        u = e.colSizeMd,
                        m = void 0 === u ? 6 : u;
                    return n.createElement(n.Fragment, null, n.createElement(zr, {
                        "data-testid": "RealmsPlanListHeadingCol",
                        colSizeMd: m,
                        order: a[0],
                        orderMd: o[0],
                        selected: t,
                        position: "top"
                    }, n.createElement(g.nv, {
                        "data-testid": "RealmsPlanListHeading"
                    }, r, s && " ".concat(s))), n.createElement(zr, {
                        "data-testid": "RealmsPlanListItemsCol",
                        colSizeMd: m,
                        order: a[1],
                        orderMd: o[1],
                        selected: t,
                        position: "bottom"
                    }, l.map((function(e, t) {
                        return n.createElement(Qr, {
                            "data-testid": "RealmsPlanListItem",
                            key: t,
                            plan: e,
                            checked: i.variantId === e.variantId,
                            onChange: c
                        })
                    }))))
                };

            function Hr(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Ur = function(e) {
                    var t = e.selectedPlan,
                        r = e.onChange,
                        a = e.plans,
                        l = Hr(e, ["selectedPlan", "onChange", "plans"]),
                        i = a.filter((function(e) {
                            return e.subscription
                        })),
                        c = a.filter((function(e) {
                            return !e.subscription
                        })),
                        s = i.length > 0 && c.length > 0;
                    return n.createElement("div", Object.assign({
                        className: "mb-5"
                    }, l), n.createElement("h2", {
                        className: "font-mc-ten text-600"
                    }, n.createElement(o.T, null, "Choose plan")), n.createElement(g.nv, null, n.createElement(o.T, null, "Realms for Minecraft: Java Edition, select your plan below.")), n.createElement(g.X2, {
                        className: "mx-0"
                    }, i.length > 0 ? n.createElement(Fr, {
                        orders: [1, 2],
                        ordersMd: [1, 3],
                        colSizeMd: s ? 6 : 12,
                        selected: t.subscription,
                        heading: n.createElement(o.T, {
                            isHTML: !0
                        }, "<strong>Monthly charge</strong> - automatically extended, can be canceled at any time"),
                        onChange: r,
                        plans: i,
                        selectedPlan: t,
                        footnote: "*"
                    }) : null, c.length > 0 ? n.createElement(Fr, {
                        orders: [3, 4],
                        ordersMd: [2, 3],
                        colSizeMd: s ? 6 : 12,
                        selected: !t.subscription,
                        heading: n.createElement(o.T, {
                            isHTML: !0
                        }, "<strong>One time charge</strong> - can be manually extended"),
                        onChange: r,
                        plans: c,
                        selectedPlan: t,
                        footnote: "**"
                    }) : null))
                },
                Vr = function(e) {
                    return !(e && 0 !== e.length && e.some((function(e) {
                        return "UNINITIALIZED" === e.state
                    })))
                },
                Gr = function(e) {
                    var t = e.realms,
                        r = e.children;
                    return Vr(t) ? n.createElement(n.Fragment, null, r) : n.createElement(n.Fragment, null, n.createElement(g.nv, null, n.createElement(o.T, null, "You have an uninitialized Realms subscription and therefore you can not get another one. Please start the Minecraft client to create your world.")), n.createElement(g.nv, null, n.createElement(y.Link, {
                        to: Zn
                    }, n.createElement(o.T, null, "See your Realms"))))
                };

            function Yr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Zr(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zr(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Zr(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Xr = function(e) {
                    var t = e.profileId,
                        r = e.plans,
                        a = e.subscriptionId,
                        l = e.selectedVariantId,
                        i = (0, p.Ir)().isMsa,
                        c = (0, v.oR)(gr),
                        s = r.find((function(e) {
                            return e.variantId === l
                        })) || r.find((function(e) {
                            return "desktop_realms_30_days_recurring" === e.variantId
                        })) || r[0],
                        u = Yr(n.useState(s), 2),
                        m = u[0],
                        f = u[1],
                        y = Yr(n.useState(a || void 0), 2),
                        b = y[0],
                        E = y[1];
                    return n.useEffect((function() {
                        t && c.fetchRealms(t)
                    }), [c, t]), (0, h.SZ)((function() {
                        var e = c.fetchingRealms,
                            r = c.realms;
                        return e ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : n.createElement(Gr, {
                            realms: r
                        }, n.createElement(Mr, {
                            "data-testid": "RealmsPlanViewRealmsSelect",
                            realms: r,
                            selectedRealmId: b,
                            onChange: E
                        }), n.createElement(Ur, {
                            "data-testid": "RealmsPlanViewPlanSelect",
                            selectedPlan: m,
                            onChange: f,
                            plans: d["realms.plans"]
                        }), n.createElement(Tr, {
                            "data-testid": "RealmsPlanViewCheckoutForm",
                            selectedPlan: m,
                            selectedRealm: b,
                            profileId: t,
                            checkoutUrl: d["endpoint.checkoutUrl"],
                            currentLang: d.language,
                            isMsa: i
                        }))
                    }))
                },
                Jr = "/realms/select-plan",
                qr = function(e) {
                    var t = e.plans,
                        r = e.subscriptionId,
                        l = e.profileId,
                        i = e.selectedVariantId,
                        c = (0, a.Tx)().log;
                    (0, v.oR)(gr);
                    return n.useEffect((function() {
                        c && c.pageView(Jr)
                    }), [c]), (0, h.SZ)((function() {
                        return n.createElement(n.Fragment, null, n.createElement("h1", {
                            className: "font-mc-ten border-bottom mb-4"
                        }, n.createElement(o.T, null, "Get Realms")), n.createElement(Xr, {
                            profileId: l,
                            plans: t,
                            subscriptionId: r,
                            selectedVariantId: i
                        }))
                    }))
                },
                Kr = function() {
                    var e = (0, a.Tx)().log;
                    return (0, h.SZ)((function() {
                        return n.createElement(n.Fragment, null, n.createElement(y.Link, {
                            to: Jr,
                            className: "btn btn-primary btn-lg",
                            onClick: function() {
                                e && e.event("Realms", "Buy link", "Start Realms")
                            }
                        }, n.createElement(o.T, null, "Buy a Realms subscription")))
                    }))
                };

            function Wr(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function _r(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Wr(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Wr(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function $r(e) {
                return ($r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var en = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : $r(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                tn = Symbol("realmsTrialsStoreSymbol"),
                rn = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.api = t, this.fetchingTrial = !0, this.networkError = !1, this.trial = function() {
                        var e = _r(regeneratorRuntime.mark((function e(t) {
                            var n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.setFetchingtTrial(!0), e.next = 3, r.api.getTrialInfo(t);
                                    case 3:
                                        n = e.sent, a = n.canStart, r.setCanStart(a), r.setFetchingtTrial(!1);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.startTrial = function() {
                        var e = _r(regeneratorRuntime.mark((function e(t) {
                            var n, a, o;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.api.startTrial(t);
                                    case 2:
                                        n = e.sent, a = n.data, o = n.error, r.setNetworkError(o), r.setTrialStarted(a.started), r.setErrorCode(a.reason && a.reason);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.clearTrialStatus = function(e) {
                        r.setNetworkError(!1), r.trial(e), r.setTrialStarted(void 0), r.setErrorCode(void 0)
                    }, this.setNetworkError = function(e) {
                        r.networkError = e
                    }, this.setErrorCode = function(e) {
                        r.reason = e
                    }, this.setCanStart = function(e) {
                        r.canStart = e
                    }, this.setFetchingtTrial = function(e) {
                        r.fetchingTrial = e
                    }, this.setTrialStarted = function(e) {
                        r.trialStarted = e
                    }
                };
            en([C.LO], rn.prototype, "trialStarted", void 0), en([C.LO], rn.prototype, "canStart", void 0), en([C.LO], rn.prototype, "fetchingTrial", void 0), en([C.LO], rn.prototype, "networkError", void 0), en([C.LO], rn.prototype, "reason", void 0), en([C.aD], rn.prototype, "setNetworkError", void 0), en([C.aD], rn.prototype, "setErrorCode", void 0), en([C.aD], rn.prototype, "setCanStart", void 0), en([C.aD], rn.prototype, "setFetchingtTrial", void 0), en([C.aD], rn.prototype, "setTrialStarted", void 0);
            var nn = new rn(mr(pr));

            function an(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function on(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            an(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            an(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function ln(e, t) {
                return {
                    getCards: (n = on(regeneratorRuntime.mark((function r() {
                        var n, a;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, t.getToken();
                                case 2:
                                    return n = r.sent, r.prev = 3, r.next = 6, e.get("creditcards", {
                                        headers: {
                                            Authorization: "Bearer ".concat(n || "")
                                        }
                                    });
                                case 6:
                                    a = r.sent, r.next = 12;
                                    break;
                                case 9:
                                    return r.prev = 9, r.t0 = r.catch(3), r.abrupt("return", {
                                        data: [],
                                        error: !0
                                    });
                                case 12:
                                    if (a.ok) {
                                        r.next = 14;
                                        break
                                    }
                                    return r.abrupt("return", {
                                        data: [],
                                        error: !1
                                    });
                                case 14:
                                    return r.next = 16, a.json();
                                case 16:
                                    return r.t1 = r.sent, r.abrupt("return", {
                                        data: r.t1,
                                        error: !1
                                    });
                                case 18:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [3, 9]
                        ])
                    }))), function() {
                        return n.apply(this, arguments)
                    }),
                    deleteCard: (r = on(regeneratorRuntime.mark((function r(n, a) {
                        var o;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return r.next = 2, t.getToken();
                                case 2:
                                    if (o = r.sent, r.prev = 3, !a) {
                                        r.next = 9;
                                        break
                                    }
                                    return r.next = 7, e.delete("creditcards");
                                case 7:
                                    r.next = 11;
                                    break;
                                case 9:
                                    return r.next = 11, e.delete("creditcards/".concat(n), {
                                        headers: {
                                            Authorization: "Bearer ".concat(o || "")
                                        }
                                    });
                                case 11:
                                    r.next = 16;
                                    break;
                                case 13:
                                    return r.prev = 13, r.t0 = r.catch(3), r.abrupt("return", {
                                        error: !0
                                    });
                                case 16:
                                    return r.abrupt("return", {
                                        error: !1
                                    });
                                case 17:
                                case "end":
                                    return r.stop()
                            }
                        }), r, null, [
                            [3, 13]
                        ])
                    }))), function(e, t) {
                        return r.apply(this, arguments)
                    })
                };
                var r, n
            }

            function cn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function sn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? cn(Object(r), !0).forEach((function(t) {
                        un(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cn(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function un(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function mn(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function fn(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            mn(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            mn(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function dn(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function pn(e) {
                return (pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var hn = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : pn(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                vn = Symbol("billingInfoStoreSymbol"),
                yn = function() {
                    function e(t) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.api = t, this.fetchingCards = !0, this.error = !1, this.deleteMarkedCards = function() {
                            var e = fn(regeneratorRuntime.mark((function e(t) {
                                var n;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r.cards.filter((function(e) {
                                                return !0 === e.removed
                                            })), e.next = 3, Promise.all(n.map((function(e) {
                                                return r._deleteCard(e.id, t)
                                            })));
                                        case 3:
                                            return e.next = 5, r._fetchCards();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), this.unmarkCardsForRemoval = function() {
                            r._setCards(r.cards.map((function(e) {
                                return sn(sn({}, e), {}, {
                                    removed: !1
                                })
                            })))
                        }, this.markCardForRemoval = function(e) {
                            r._setCards(r.cards.map((function(t) {
                                return sn(sn({}, t), {}, {
                                    removed: t.id === e
                                })
                            })))
                        }, this._setError = function(e) {
                            r.error = e
                        }, this._setFetchingCards = function(e) {
                            r.fetchingCards = e
                        }, this._setCards = function(e) {
                            r.cards = e
                        }
                    }
                    var t, r, n, a, o, l;
                    return t = e, (r = [{
                        key: "getCards",
                        value: (l = fn(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.cards) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, this._fetchCards();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "_fetchCards",
                        value: (o = fn(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this._setFetchingCards(!0), this._setError(!1), e.next = 4, this.api.getCards();
                                    case 4:
                                        t = e.sent, this._setCards(t.data.length ? t.data.sort((function(e, t) {
                                            return e.createdAt < t.createdAt ? 1 : -1
                                        })) : t.data), this._setError(t.error), this._setFetchingCards(!1);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "_deleteCard",
                        value: (a = fn(regeneratorRuntime.mark((function e(t, r) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.api.deleteCard(t, r);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return a.apply(this, arguments)
                        })
                    }]) && dn(t.prototype, r), n && dn(t, n), e
                }();
            hn([C.LO], yn.prototype, "cards", void 0), hn([C.LO], yn.prototype, "fetchingCards", void 0), hn([C.LO], yn.prototype, "error", void 0), hn([C.aD], yn.prototype, "_setError", void 0), hn([C.aD], yn.prototype, "_setFetchingCards", void 0), hn([C.aD], yn.prototype, "_setCards", void 0);
            var gn = new yn(ln(v.uW, p.nP)),
                bn = new yn(ln(v.Zf, p.nP));

            function En(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return wn(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wn(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function wn(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var An = function(e) {
                    var t = e.handleStartTrial,
                        r = En(n.useState(!1), 2),
                        a = r[0],
                        l = r[1],
                        i = En((0, g.PV)(!1, !1, 1e3), 2),
                        c = i[0],
                        s = i[1],
                        u = (0, p.Ir)().isMsa;
                    return n.createElement("form", {
                        onSubmit: function(e) {
                            e.preventDefault(), a ? u ? t() : (document.getElementById("Modal").style.display = "block", document.getElementById("Modal").style.background = "rgba(0,0,0, 0.8)") : s(!0)
                        }
                    }, n.createElement(Cr, {
                        "data-aem-contentname": "Realms trial button",
                        name: "acceptTermsTrial",
                        type: "submit",
                        size: "lg",
                        accepted: a,
                        setAccepted: l,
                        alertUser: c,
                        "data-testid": "realms-trial-button",
                        block: !0
                    }, n.createElement(o.T, null, "Start Realms Trial")))
                },
                Cn = function(e) {
                    var t = function() {
                        document.getElementById("Modal").style.display = "none"
                    };
                    return (0, h.SZ)((function() {
                        return n.createElement("div", {
                            className: "modal",
                            id: "Modal",
                            tabIndex: -1,
                            "aria-labelledby": "ModalLabel",
                            "aria-modal": "true",
                            role: "dialog"
                        }, n.createElement("div", {
                            className: "modal-dialog modal-dialog-centered",
                            role: "document"
                        }, n.createElement("div", {
                            className: "modal-content"
                        }, n.createElement("div", {
                            className: "modal-header"
                        }, n.createElement("h1", {
                            className: "font-mc-ten mt-3"
                        }, e.header), e.showClose && n.createElement("button", {
                            type: "button",
                            className: "close",
                            "data-dismiss": "modal",
                            "aria-label": "Close",
                            onClick: t
                        }, n.createElement("span", {
                            "aria-hidden": "true"
                        }, "×"))), n.createElement("div", {
                            className: ""
                        }, e.content), n.createElement("div", {
                            className: "m-5"
                        }, n.createElement(g.Qj, {
                            "data-aem-contentname": e.ctaText,
                            colorVariant: "primary",
                            href: e.ctaHref,
                            block: !0
                        }, e.ctaText)))))
                    }))
                },
                kn = function(e) {
                    var t = e.cards,
                        r = e.handleStartTrial,
                        a = e.subscriptionPrice,
                        l = e.isMsa,
                        i = (0, o.useTranslation)().t;
                    return (0, h.SZ)((function() {
                        return n.createElement(n.Fragment, null, n.createElement(Cn, {
                            header: i("It’s time to move!"),
                            content: i("You need to move your Minecraft account to a Microsoft account to be able to make purchases and manage your billing information."),
                            ctaText: i("Move your account"),
                            ctaHref: d["url.profile"],
                            showClose: !1
                        }), n.createElement("ul", {
                            "data-testid": "realms-trial-info",
                            className: "list-unstyled"
                        }, n.createElement("li", {
                            className: "my-2"
                        }, n.createElement(g.JO, {
                            name: "pixel-check",
                            className: "mr-2"
                        }), n.createElement(o.T, null, "You won’t be charged for the free trial.")), n.createElement("li", {
                            className: "my-2"
                        }, n.createElement(g.JO, {
                            name: "pixel-check",
                            className: "mr-2"
                        }), n.createElement(o.T, {
                            placeholders: [a]
                        }, "After the free trial ends, your subscription will renew at  %1$s per month unless canceled within 30 days.")), n.createElement("li", {
                            className: "my-2"
                        }, n.createElement(g.JO, {
                            name: "pixel-check",
                            className: "mr-2"
                        }), n.createElement(o.T, null, "We will send you a receipt after the first payment has been processed.")), n.createElement("li", {
                            className: "my-2"
                        }, n.createElement(g.JO, {
                            name: "pixel-check",
                            className: "mr-2"
                        }), n.createElement(o.T, null, "If you cancel your subscription, your Realm and your data will be available if you re-subscribe for up to 18 months."))), t && t[0] ? n.createElement(n.Fragment, null, n.createElement(g.X2, null, n.createElement(g.JX, null, n.createElement(g.bZ, {
                            colorVariant: "light",
                            className: "my-4"
                        }, n.createElement(g.nv, {
                            align: "center",
                            className: "font-weight-bold my-3",
                            "data-testid": "realms-trial-use-cc"
                        }, n.createElement(o.T, {
                            placeholders: [t[0].last4],
                            isHTML: !0
                        }, "We will use the card ending in <span class='font-mc-ten lead text-purple'>%1$s</span> to charge you when your trial is over."))))), n.createElement(g.X2, {
                            justifyContent: "center"
                        }, n.createElement(g.JX, {
                            size: 12,
                            sm: 10,
                            md: 8,
                            lg: 9
                        }, n.createElement(An, {
                            handleStartTrial: r
                        }))), n.createElement(g.X2, {
                            justifyContent: "center"
                        }, n.createElement(g.nv, {
                            className: "text-small m-3 mt-4"
                        }, n.createElement(o.T, {
                            "data-aem-contentname": "Go to Profile Realms",
                            isHTML: !0,
                            placeholders: ["".concat(d["url.profile"], "/realms")]
                        }, "After the free trial period, your subscription continues to be charged at the then-current regular price (subject to change) plus applicable taxes unless cancelled. Cancel anytime; see <a href='%1$s'>profile</a>. If your subscription is inactive for more than 18 months, your Realms data will be deleted from the server.")))) : n.createElement(n.Fragment, null, n.createElement(g.X2, null, n.createElement(g.JX, null, n.createElement(g.bZ, {
                            colorVariant: "light",
                            className: "my-4"
                        }, n.createElement(g.nv, {
                            align: "center",
                            className: "font-weight-bold my-3",
                            "data-testid": "realms-trial-add-cc"
                        }, n.createElement(o.T, null, "Since we don’t have your credit card stored please add it using the button below."))))), n.createElement(g.X2, {
                            justifyContent: "center"
                        }, n.createElement(g.JX, {
                            size: 12,
                            sm: 10,
                            md: 8,
                            lg: 9
                        }, n.createElement(g.Qj, {
                            "data-aem-contentname": "Add credit card link button",
                            href: "".concat(d["url.realmsTrialCC"], "/?account_type=").concat(l ? "msa" : "mja", "&callback_url=").concat(d["url.profile"]).concat(In),
                            colorVariant: "primary",
                            size: "lg",
                            block: !0,
                            "data-testid": "add-credit-card"
                        }, n.createElement(o.T, null, "Add credit card"))))))
                    }))
                },
                Sn = r(1031),
                xn = function(e) {
                    var t = e.canStart,
                        r = e.networkError,
                        a = e.reason,
                        l = e.isMsa;
                    return t && a !== or.NOT_ELIGIBLE ? r ? n.createElement("div", {
                        className: "text-center bg-white p-4 border border-width-3",
                        "data-testid": "realms-trial-network-error"
                    }, n.createElement(g.nv, null, n.createElement(o.T, null, "You seem to be offline.")), n.createElement(y.Link, {
                        to: Zn,
                        className: "btn btn-primary"
                    }, n.createElement(o.T, null, "Retry"))) : a === or.NO_CC_STORED ? n.createElement(g.bZ, {
                        colorVariant: "danger"
                    }, n.createElement(g.nv, null, n.createElement(o.T, null, "Oops! We need your credit card to start your Realms Trial!"), " ", n.createElement("a", {
                        "data-aem-contentname": "Add credit card from Realms link",
                        href: "".concat(d["url.realmsTrialCC"], "/?account_type=").concat(l ? "msa" : "mja", "&callback_url=").concat(d["url.profile"]).concat(In)
                    }, n.createElement(o.T, null, "Add credit card")))) : a === or.UNKNOWN ? n.createElement(g.bZ, {
                        colorVariant: "danger"
                    }, n.createElement(o.T, null, "Oops! Something went wrong and we couldn't start your trial!")) : null : n.createElement(g.bZ, {
                        colorVariant: "danger"
                    }, n.createElement(g.nv, null, n.createElement(o.T, null, "You are not eligible to start a Realms Trial.")))
                };

            function On(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Rn(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            On(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            On(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var In = "/realms/trial",
                jn = function(e) {
                    var t = e.profileId,
                        r = e.isMsa,
                        l = (0, a.Tx)().log,
                        i = (0, v.oR)(tn),
                        c = (0, v.oR)(vn),
                        s = d["realms.plans"].find((function(e) {
                            return "desktop_realms_30_days_recurring" === e.variantId
                        })).price;
                    n.useEffect((function() {
                        function e() {
                            return (e = Rn(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, i.trial(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [i, t]), n.useEffect((function() {
                        function e() {
                            return (e = Rn(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, c.getCards();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }! function() {
                            e.apply(this, arguments)
                        }()
                    }), [c]);
                    var u = function() {
                        var e = Rn(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l && l.event("Realms", "Trial button", "Start Realms"), e.next = 3, i.startTrial(t);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return (0, h.SZ)((function() {
                        var e = i.networkError,
                            t = i.trialStarted,
                            a = i.reason,
                            l = i.canStart,
                            m = i.fetchingTrial,
                            f = c.fetchingCards,
                            d = c.cards;
                        return m || f ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : t ? n.createElement(Sn.l_, {
                            to: Zn
                        }) : l ? n.createElement(g.W2, null, n.createElement("h1", {
                            className: "font-mc-ten border-bottom mb-4"
                        }, "Realms Trial"), n.createElement(xn, {
                            networkError: e,
                            canStart: l,
                            reason: a,
                            isMsa: r
                        }), n.createElement(kn, {
                            cards: d,
                            subscriptionPrice: s,
                            handleStartTrial: u,
                            isMsa: r
                        })) : null
                    }))
                };

            function Tn(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Pn(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Tn(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Tn(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            var Nn = function(e) {
                var t = e.profileId,
                    r = (0, o.useTranslation)().t,
                    l = (0, v.oR)(tn),
                    i = (0, a.Tx)().log,
                    c = (0, p.Ir)().isMsa;
                n.useEffect((function() {
                    function e() {
                        return (e = Pn(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, l.trial(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }), [l, t]);
                var s = function() {
                    document.getElementById("Modal").style.display = "block", document.getElementById("Modal").style.background = "rgba(0,0,0, 0.8)"
                };
                return (0, h.SZ)((function() {
                    var e = l.fetchingTrial,
                        t = l.canStart;
                    return n.createElement("div", {
                        className: "w-75 mx-auto"
                    }, n.createElement("h1", {
                        className: "font-mc-ten border-bottom mb-4"
                    }, n.createElement(o.T, null, "Realms Trial")), n.createElement(g.JO, {
                        name: "realms",
                        className: "w-100 d-block mx-auto my-4",
                        style: {
                            height: 60
                        }
                    }), n.createElement(g.nv, {
                        align: "center"
                    }, n.createElement(o.T, null, "Minecraft Realms is a subscription that gives you access to your own personal server with up to 10 simultaneous players and great community content. It comes with loads of minigames and plenty of custom worlds. Only the owner of the Realm needs to pay, friends always play for free!")), n.createElement("div", {
                        className: "text-center mb-5"
                    }, n.createElement("a", {
                        href: d["url.realmsMarketingPage"],
                        className: "arrow-link d-inline-block",
                        "data-testid": "more-about-realms-link"
                    }, n.createElement(g.JO, {
                        name: "pixel-arrow-right",
                        style: {
                            marginTop: -1
                        },
                        innerClassName: "animation-bounce--right animation-run-4-times"
                    }), n.createElement(o.T, null, "Learn more about Realms"))), n.createElement("div", {
                        className: "text-center mt-5"
                    }, !e && t && c ? n.createElement(n.Fragment, null, n.createElement(y.Link, {
                        to: In,
                        className: "btn btn-primary btn-lg",
                        "data-testid": "try-realms-for-free-link"
                    }, n.createElement(o.T, null, "Try Realms for free")), n.createElement("span", {
                        className: "d-block my-3"
                    }, n.createElement(o.T, null, "or")), n.createElement(y.Link, {
                        to: Jr,
                        onClick: function() {
                            i && i.event("Realms", "Buy link", "Start Realms")
                        },
                        "data-testid": "buy-realms-link"
                    }, n.createElement(o.T, null, "Buy a Realms subscription"))) : null, e || !t || c ? null : n.createElement(n.Fragment, null, n.createElement("button", {
                        className: "btn btn-primary btn-lg",
                        onClick: s
                    }, n.createElement(o.T, null, "Try Realms for free")), n.createElement("span", {
                        className: "d-block my-3"
                    }, n.createElement(o.T, null, "or")), n.createElement(y.Link, {
                        to: Jr,
                        onClick: function() {
                            i && i.event("Realms", "Buy link", "Start Realms")
                        },
                        "data-testid": "buy-realms-link"
                    }, n.createElement(o.T, null, "Buy a Realms subscription")), n.createElement(Cn, {
                        header: r("It’s time to move!"),
                        content: r("You need to move your Minecraft account to a Microsoft account to be able to make purchases and manage your billing information."),
                        ctaText: r("Move your account"),
                        ctaHref: d["url.profile"],
                        showClose: !0
                    })), !e && !t && n.createElement(Kr, null)))
                }))
            };

            function Mn(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Dn(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Mn(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Mn(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function Bn(e) {
                return (Bn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var Qn = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : Bn(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Ln = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.http = t, this.hasError = !1, this.pause = function() {
                        var e = Dn(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.http.put("subscription/".concat(t, "/pause"));
                                    case 2:
                                        e.sent.ok ? r.status = "Paused" : r.hasError = !0;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.resume = function() {
                        var e = Dn(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.http.put("subscription/".concat(t, "/resume"));
                                    case 2:
                                        e.sent.ok ? r.status = "Resumed" : r.hasError = !0;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                };
            Qn([C.LO], Ln.prototype, "hasError", void 0), Qn([C.LO], Ln.prototype, "status", void 0), Qn([C.aD], Ln.prototype, "pause", void 0), Qn([C.aD], Ln.prototype, "resume", void 0);
            var zn = new Ln(pr),
                Fn = function(e) {
                    var t = e.realm,
                        r = e.logRealmsClick,
                        a = e.subscriptionStore,
                        l = e.billingInfoStore,
                        i = (0, o.useTranslation)().t,
                        c = t.name,
                        s = t.paymentIsActive,
                        u = t.lastPaymentMillis,
                        m = t.nextPaymentMillis,
                        f = t.recurringPaymentId;
                    return n.useEffect((function() {
                        l.getCards()
                    }), [l]), (0, h.SZ)((function() {
                        var e = l.cards,
                            p = l.fetchingCards;
                        return n.createElement("tr", {
                            style: {
                                height: "60px"
                            }
                        }, n.createElement("td", {
                            className: "align-middle"
                        }, n.createElement("span", {
                            className: "d-inline-block text-truncate",
                            style: {
                                maxWidth: "130px"
                            }
                        }, c)), n.createElement("td", {
                            className: "align-middle"
                        }, t.trial ? n.createElement(o.T, null, "Trial") : n.createElement(g.PS, {
                            timestamp: u,
                            locales: d.locale
                        })), n.createElement("td", {
                            className: "align-middle"
                        }, s ? n.createElement(g.PS, {
                            timestamp: m,
                            locales: d.locale
                        }) : n.createElement(o.T, null, "Canceled")), n.createElement("td", {
                            className: "text-right align-middle",
                            "data-testid": "subscription-action"
                        }, s ? n.createElement(g.RT, {
                            triggerButtonText: t.trial ? i("Cancel") : i("Pause"),
                            confirmButton: {
                                label: t.trial ? i("Cancel Trial") : i("Yes, pause"),
                                onClick: function() {
                                    return function(e) {
                                        r && r("Pause subscription"), a.pause(e)
                                    }(f)
                                }
                            },
                            cancelButton: {
                                label: i("Cancel")
                            }
                        }) : !p && e && e.some((function(e) {
                            return e.storedInVault
                        })) && n.createElement(g.RT, {
                            triggerButtonText: i("Reactivate"),
                            confirmButton: {
                                label: i("Yes, reactivate"),
                                onClick: function() {
                                    return function(e) {
                                        r && r("Reactivate subscription"), a.resume(e)
                                    }(f)
                                }
                            },
                            cancelButton: {
                                label: i("Cancel")
                            }
                        })))
                    }))
                },
                Hn = function(e) {
                    var t = e.subscriptions,
                        r = e.logRealmsClick,
                        a = e.subscriptionStore,
                        l = e.billingInfoStore;
                    return n.useEffect((function() {
                        l.getCards()
                    }), [l]), (0, h.SZ)((function() {
                        var e = a.hasError;
                        return n.createElement(n.Fragment, null, n.createElement("div", {
                            className: "table-responsive my-4"
                        }, n.createElement("h2", {
                            className: "font-mc-ten mb-1 text-600"
                        }, n.createElement(o.T, null, "Recurring Payments")), e && n.createElement(g.bZ, {
                            colorVariant: "danger",
                            "data-testid": "update-subscription-error"
                        }, n.createElement(o.T, null, "Oops, something went wrong and we couldn't update your subscription. Please try again later!")), n.createElement("table", {
                            className: "table"
                        }, n.createElement("thead", null, n.createElement("tr", null, n.createElement("th", null, n.createElement(o.T, null, "Name")), n.createElement("th", null, n.createElement(o.T, null, "Last payment")), n.createElement("th", null, n.createElement(o.T, null, "Next payment")), n.createElement("th", {
                            className: "text-right"
                        }, n.createElement(o.T, null, "Action")))), n.createElement("tbody", null, t.map((function(e) {
                            return n.createElement(Fn, {
                                key: e.id,
                                realm: e,
                                logRealmsClick: r,
                                billingInfoStore: l,
                                subscriptionStore: a
                            })
                        }))))))
                    }))
                },
                Un = function(e) {
                    var t = e.realms,
                        r = e.profileId,
                        a = e.logRealmsClick;
                    return n.createElement("div", {
                        className: "table-responsive my-4"
                    }, n.createElement("h1", {
                        className: "font-mc-ten mb-1 text-600 h2"
                    }, n.createElement(o.T, null, "All my Realms")), n.createElement("table", {
                        className: "table"
                    }, n.createElement("thead", null, n.createElement("tr", null, n.createElement("th", null, n.createElement(o.T, null, "Name")), n.createElement("th", null, n.createElement(o.T, null, "State")), n.createElement("th", {
                        className: "text-right"
                    }, n.createElement(o.T, null, "Days remaining")))), n.createElement("tbody", null, t.map((function(e, t) {
                        return n.createElement("tr", {
                            key: t,
                            "data-testid": e.name
                        }, n.createElement("td", null, e.name), n.createElement("td", null, e.state), n.createElement("td", {
                            className: "text-right"
                        }, e.daysLeft < 0 ? 0 : e.daysLeft, !e.hasPayment && e.mayExtend && n.createElement("span", null, "(", n.createElement(y.Link, {
                            to: {
                                pathname: "/realms/select-plan",
                                search: "?subscriptionId=".concat(e.id, "&profileId=").concat(r)
                            },
                            onClick: function() {
                                return a && a("Extend consumable link")
                            }
                        }, n.createElement(o.T, null, "Extend")), ")")))
                    })))))
                },
                Vn = function(e) {
                    var t = e.profileId,
                        r = e.realmsTokenStore,
                        a = e.products;
                    return (0, h.SZ)((function() {
                        var e = r.tokens;
                        return e.length >= 1 ? n.createElement("div", {
                            className: "my-4"
                        }, n.createElement("h2", {
                            className: "font-mc-ten mb-1 text-600"
                        }, n.createElement(o.T, null, "Unactivated subscriptions")), n.createElement("p", null, n.createElement(o.T, null, "The following subscriptions are waiting to be activated:")), n.createElement(g.X2, null, e.map((function(e, r) {
                            var o = new URLSearchParams({
                                    profileId: t,
                                    token: e.idAsString
                                }),
                                l = a.find((function(t) {
                                    return t.variantId === e.productVariantId
                                }));
                            return n.createElement(g.JX, {
                                key: r,
                                size: 12,
                                md: 6
                            }, n.createElement("div", {
                                className: "text-center border-200 border p-3 mb-4",
                                "data-testid": e.idAsString
                            }, n.createElement(g.nv, null, l ? l.displayName : e.productVariantId), n.createElement(y.Link, {
                                to: {
                                    pathname: "/realms/activate",
                                    search: "?".concat(o)
                                }
                            }, "Activate")))
                        })))) : null
                    }))
                },
                Gn = function(e) {
                    var t = e.subscriptions,
                        r = e.profileId,
                        l = e.allRealms,
                        i = e.realmsTokenStore,
                        c = e.billingInfoStore,
                        s = (0, a.Tx)().log,
                        u = function(e) {
                            s && s.event("Realms", "".concat(e), "Manage Realms")
                        };
                    return n.createElement(n.Fragment, null, Vr(l) ? n.createElement(g.nv, {
                        "data-testid": "start-realms-helper"
                    }, n.createElement(o.T, null, "To access Realms start Minecraft as you normally would and select Minecraft Realms from the first in-game screen.")) : n.createElement(g.bZ, {
                        colorVariant: "warning",
                        "data-testid": "uninit-realm"
                    }, n.createElement(o.T, {
                        isHTML: !0
                    }, "To initialize your <strong>uninitialized Realm</strong> start Minecraft as you normally would and select Minecraft Realms from the first in-game screen. We will guide you from there.")), l.length >= 1 && n.createElement(Un, {
                        profileId: r,
                        realms: l,
                        logRealmsClick: u
                    }), t.length >= 1 && n.createElement(Hn, {
                        subscriptionStore: zn,
                        subscriptions: t,
                        logRealmsClick: u,
                        billingInfoStore: c
                    }), n.createElement(Vn, {
                        profileId: r,
                        realmsTokenStore: i,
                        products: d["realms.plans"]
                    }), Vr(l) && n.createElement("div", {
                        className: "w-50 my-5 mx-auto"
                    }, n.createElement(y.Link, {
                        to: "/realms/select-plan",
                        className: "btn btn-primary"
                    }, n.createElement(o.T, null, "Buy a new Realms subscription"))), n.createElement(g.nv, {
                        fontStyle: "italic",
                        align: "center",
                        className: "mt-3"
                    }, n.createElement(o.T, {
                        isHTML: !0
                    }, "<strong>Hint!</strong> Log into Minecraft to administrate your Minecraft Realms world")))
                },
                Yn = function(e) {
                    var t = e.profileId,
                        r = e.subscriptionStatus,
                        a = e.realmsTokenStore,
                        l = e.billingInfoStore,
                        i = (0, v.oR)(gr);
                    return n.useEffect((function() {
                        t && (i.fetchRealms(t), a.fetchTokens())
                    }), [t, i, a, r]), (0, h.SZ)((function() {
                        var e = i.realms,
                            r = i.networkError,
                            c = i.fetchingRealms,
                            s = a.tokens,
                            u = a.fetchingTokens,
                            m = e && e.filter((function(e) {
                                return e.hasPayment
                            }));
                        return r ? n.createElement("div", {
                            className: "text-center bg-white p-4 border border-width-3",
                            "data-testid": "realms-network-error"
                        }, n.createElement(g.nv, null, n.createElement(o.T, null, "You seem to be offline, press reload to try again.")), n.createElement(g.zx, {
                            colorVariant: "primary",
                            onClick: function() {
                                return i.fetchRealms(t)
                            },
                            disabled: c
                        }, n.createElement(o.T, null, "Reload"))) : c || u ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : n.createElement(n.Fragment, null, 0 === e.length && 0 === s.length ? n.createElement(Nn, {
                            profileId: t
                        }) : n.createElement(Gn, {
                            subscriptions: m,
                            profileId: t,
                            allRealms: e,
                            realmsTokenStore: a,
                            billingInfoStore: l
                        }))
                    }))
                },
                Zn = "/realms",
                Xn = function(e) {
                    var t = e.profileId,
                        r = e.realmsTokenStore,
                        o = e.billingInfoStore,
                        l = (0, a.Tx)().log;
                    return n.useEffect((function() {
                        l && l.pageView("realms")
                    }), [l]), (0, h.SZ)((function() {
                        var e = zn.status;
                        return n.createElement(n.Fragment, null, n.createElement(Yn, {
                            profileId: t,
                            subscriptionStatus: e,
                            realmsTokenStore: r,
                            billingInfoStore: o
                        }))
                    }))
                };

            function Jn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function qn(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Jn(Object(r), !0).forEach((function(t) {
                        Kn(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jn(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Kn(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Wn(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var _n = function(e) {
                var t = e.children,
                    r = e.bgColor,
                    a = e.style,
                    o = e.textColor,
                    l = void 0 === o ? "dark" : o,
                    i = Wn(e, ["children", "bgColor", "style", "textColor"]);
                return n.createElement("div", Object.assign({}, i, {
                    className: "text-".concat(l, " d-inline-flex flex-column justify-content-center rounded position-relative"),
                    style: qn({
                        height: 140,
                        width: 222,
                        boxShadow: "0 4px 0 0 rgba(0, 0, 0, 0.15)",
                        backgroundColor: r
                    }, a)
                }), t)
            };

            function $n(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ea(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $n(Object(r), !0).forEach((function(t) {
                        ta(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $n(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function ta(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var ra = function(e) {
                    var t = e.open,
                        r = e.id,
                        a = e.onRemove,
                        l = e.isMsa,
                        i = JSON.parse(sessionStorage.getItem("forcedMigrationEnabled"));
                    return n.createElement("div", {
                        className: "mx-auto position-relative"
                    }, n.createElement("div", {
                        "data-testid": "CreditCardMenuContainer",
                        className: "mb-0 d-flex px-2 justify-content-around align-items-center position-absolute w-100",
                        role: "region",
                        style: ea({
                            top: 0,
                            transition: ".3s",
                            backgroundColor: "#333",
                            overflow: "hidden"
                        }, {
                            height: t ? 52 : 0,
                            boxShadow: t ? "0 4px 0 0 rgba(0, 0, 0, 0.15)" : "0 0 0 0 rgba(0, 0, 0, 0)",
                            visibility: t ? "visible" : "hidden"
                        })
                    }, n.createElement(n.Fragment, null, n.createElement(g.Qj, {
                        "data-testid": "CreditCardMenuEditButton",
                        href: "".concat(d["url.billingInfoEditCard"]).concat(l ? "&account_type=msa" : "", "&callback_url=").concat(i ? d["url.forcedBillingInfoPath"] : d["url.profile"] + ba),
                        size: "sm",
                        variant: "link",
                        className: "text-smaller text-nowrap text-white",
                        tabIndex: t ? 0 : -1
                    }, n.createElement("span", {
                        "aria-hidden": "true"
                    }, n.createElement(o.T, null, "Edit")), n.createElement("span", {
                        className: "sr-only"
                    }, n.createElement(o.T, null, "Edit this card"))), n.createElement(g.zx, {
                        "data-testid": "CreditCardMenuRemoveButton",
                        size: "sm",
                        variant: "link",
                        className: "text-smaller text-nowrap text-white",
                        onClick: function() {
                            a(r)
                        }
                    }, n.createElement("span", {
                        "aria-hidden": "true"
                    }, n.createElement(o.T, null, "Remove")), n.createElement("span", {
                        className: "sr-only"
                    }, n.createElement(o.T, null, "Remove this card"))))))
                },
                na = function(e) {
                    var t = e.children;
                    return n.createElement("div", {
                        className: "mx-1 letter-spacing-1"
                    }, t)
                },
                aa = function(e) {
                    var t = e.paymentInfo,
                        r = e.last4;
                    return n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "mx-2 px-1 text-smaller text-left",
                        "aria-hidden": "true"
                    }, n.createElement(o.T, null, "Card number")), n.createElement("div", {
                        className: "mx-2 d-flex font-mc-ten",
                        "aria-hidden": "true"
                    }, t && 16 === t.length ? t.match(/.{1,4}/g).map((function(e, t) {
                        return n.createElement(na, {
                            key: t
                        }, e)
                    })) : n.createElement(n.Fragment, null, n.createElement(na, null, "************ ", r))))
                };
            var oa = function(e) {
                var t = e.createdAt,
                    r = e.billingAddress,
                    a = e.locale;
                return n.createElement("div", {
                    className: "text-small p-2 mx-auto"
                }, n.createElement("div", {
                    className: "d-flex justify-content-between"
                }, n.createElement("span", null, n.createElement(o.T, null, "Stored")), n.createElement("span", null, n.createElement(g.PS, {
                    timestamp: t,
                    locales: a
                }))), r && n.createElement("div", {
                    className: "d-flex justify-content-between"
                }, n.createElement("span", null, n.createElement(o.T, null, "Billing address")), n.createElement("span", null, r.countryCode, " ", r.postalCode)))
            };

            function la() {
                return {
                    backgroundColor: "#444",
                    width: 0,
                    logo: null
                }
            }

            function ia(e) {
                return /Visa/.test(e) && {
                    backgroundColor: "#1a1f71",
                    width: 50,
                    logo: n.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 498 160.816"
                    }, n.createElement("path", {
                        d: "M258.5536,52.412c-.2841,22.4012,19.9637,34.9028,35.2169,42.3349,15.6719,7.6266,20.9357,12.5166,20.8758,19.3356-.12,10.438-12.5016,15.0438-24.0911,15.2232-20.2178.3141-31.9717-5.4582-41.318-9.8248l-7.2826,34.08c9.3762,4.3217,26.7379,8.09,44.7426,8.2546,42.26,0,69.91-20.8609,70.06-53.2065.1644-41.0489-56.78-43.3219-56.3917-61.6705.1346-5.5629,5.4433-11.5,17.0775-13.01,5.7573-.7626,21.6534-1.3458,39.6732,6.9536l7.0733-32.9736A107.8482,107.8482,0,0,0,326.5349,1c-39.7778,0-67.7567,21.145-67.9811,51.412M432.1554,3.8411a18.34,18.34,0,0,0-17.1224,11.41l-60.37,144.1421h42.23l8.4042-23.2236h51.6064l4.875,23.2236H499L466.52,3.8411H432.1556m5.9068,42.0209L450.25,104.2726H416.8725l21.19-58.4106M207.3512,3.8411,174.0635,159.3932h40.2413L247.5775,3.8411H207.3511m-59.5321,0L105.9326,109.7159,88.99,19.6924C87.0009,9.6433,79.15,3.8411,70.4318,3.8411H1.9572L1,8.3573c14.0568,3.0506,30.0277,7.97,39.703,13.2343,5.9217,3.2151,7.6117,6.0265,9.5556,13.668L82.35,159.3932H124.88l65.2-155.5521h-42.26",
                        transform: "translate(-1.0002 -0.9999)",
                        fill: "#fff"
                    }))
                }
            }

            function ca(e) {
                return /MasterCard/.test(e) && {
                    backgroundColor: "#000000",
                    width: 40,
                    logo: n.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 131.39 86.9"
                    }, n.createElement("rect", {
                        x: "48.37",
                        y: "15.14",
                        width: "34.66",
                        height: "56.61",
                        fill: "#ff5f00"
                    }), n.createElement("path", {
                        d: "M51.94,43.45a35.94,35.94,0,0,1,13.75-28.3,36,36,0,1,0,0,56.61A35.94,35.94,0,0,1,51.94,43.45Z",
                        fill: "#eb001b"
                    }), n.createElement("path", {
                        d: "M120.5,65.76V64.6H121v-.24h-1.19v.24h.47v1.16Zm2.31,0v-1.4h-.36l-.42,1-.42-1h-.36v1.4h.26V64.7l.39.91h.27l.39-.91v1.06Z",
                        fill: "#f79e1b"
                    }), n.createElement("path", {
                        d: "M123.94,43.45a36,36,0,0,1-58.25,28.3,36,36,0,0,0,0-56.61,36,36,0,0,1,58.25,28.3Z",
                        fill: "#f79e1b"
                    }))
                }
            }

            function sa(e) {
                return /American Express/.test(e) && {
                    backgroundColor: "#006fcf",
                    width: 35,
                    logo: n.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 45 45"
                    }, n.createElement("g", {
                        fill: "none"
                    }, n.createElement("path", {
                        d: "M44.9 24.32V.02H0v44.9h44.9v-13.1c-.1 0 0-7.5 0-7.5",
                        fill: "#006FCF"
                    }), n.createElement("path", {
                        d: "M39.4 21.82h3.4v-7.9h-3.7v1.1l-.7-1.1h-3.2v1.4l-.6-1.4h-5.9c-.2 0-.4.1-.6.1-.2 0-.3.1-.5.2s-.3.1-.5.2v-.5H10.2l-.5 1.3-.5-1.3h-4v1.4l-.6-1.4H1.4L0 17.32v4.5h2.3l.4-1.1h.8l.4 1.1h17.6v-1l.7 1h4.9v-.6c.1.1.3.1.4.2.1.1.3.1.4.2.2.1.4.1.6.1h3.6l.4-1.1h.8l.4 1.1h4.9v-1l.8 1.1zm5.5 10v-7.4H17.4l-.7 1-.7-1H8v7.9h8l.7-1 .7 1h5v-1.7h-.2c.7 0 1.3-.1 1.8-.3v2.1h3.6v-1l.7 1h14.9c.6-.2 1.2-.3 1.7-.6z",
                        fill: "#FFF"
                    }), n.createElement("path", {
                        d: "M43.2 29.92h-2.7v1.1h2.6c1.1 0 1.8-.7 1.8-1.7s-.6-1.5-1.6-1.5h-1.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.3l.5-1.1h-2.7c-1.1 0-1.8.7-1.8 1.6 0 1 .6 1.5 1.6 1.5h1.2c.3 0 .5.2.5.5.1.4-.1.6-.5.6zm-4.9 0h-2.7v1.1h2.6c1.1 0 1.8-.7 1.8-1.7s-.6-1.5-1.6-1.5h-1.2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2.3l.5-1.1h-2.7c-1.1 0-1.8.7-1.8 1.6 0 1 .6 1.5 1.6 1.5h1.2c.3 0 .5.2.5.5.1.4-.2.6-.5.6zm-3.5-3.2v-1.1h-4.2v5.3h4.2v-1.1h-3v-1.1h2.9v-1.1h-2.9v-1h3v.1zm-6.8 0c.5 0 .7.3.7.6s-.2.6-.7.6h-1.5v-1.3l1.5.1zm-1.5 2.3h.6l1.6 1.9h1.5l-1.8-2c.9-.2 1.4-.8 1.4-1.6 0-1-.7-1.7-1.8-1.7h-2.8v5.3h1.2l.1-1.9zm-3.2-1.6c0 .4-.2.7-.7.7H21v-1.4h1.5c.5 0 .8.3.8.7zm-3.5-1.8v5.3H21v-1.8h1.6c1.1 0 1.9-.7 1.9-1.8 0-1-.7-1.8-1.8-1.8l-2.9.1zm-1.8 5.3h1.5l-2.1-2.7 2.1-2.6H18l-1.3 1.7-1.3-1.7h-1.5l2.1 2.6-2.1 2.6h1.5l1.3-1.7 1.3 1.8zm-4.5-4.2v-1.1H9.3v5.3h4.2v-1.1h-3v-1.1h2.9v-1.1h-2.9v-1h3v.1zm24.3-9.4l2.1 3.2h1.5v-5.3h-1.2v3.5l-.3-.5-1.9-3h-1.6v5.3h1.2v-3.6l.2.4zm-5.2-.1l.4-1.1.4 1.1.5 1.2h-1.8l.5-1.2zm2.1 3.3H36l-2.3-5.3h-1.6l-2.3 5.3h1.3l.5-1.1h2.6l.5 1.1zm-5.6 0l.5-1.1h-.3c-.9 0-1.4-.6-1.4-1.5v-.1c0-.9.5-1.5 1.4-1.5h1.3v-1.1h-1.4c-1.6 0-2.5 1.1-2.5 2.6v.1c0 1.6.9 2.6 2.4 2.6zm-4.5 0h1.2v-5.2h-1.2v5.2zm-2.6-4.2c.5 0 .7.3.7.6s-.2.6-.7.6h-1.5v-1.3l1.5.1zm-1.5 2.3h.6l1.6 1.9h1.5l-1.8-2c.9-.2 1.4-.8 1.4-1.6 0-1-.7-1.7-1.8-1.7h-2.8v5.3h1.2l.1-1.9zm-2.2-2.3v-1.1h-4.2v5.3h4.2v-1.1h-3v-1.1h2.9v-1.1h-2.9v-1h3v.1zm-9.1 4.2h1.1l1.5-4.3v4.3H13v-5.3h-2l-1.2 3.6-1.2-3.6h-2v5.3h1.2v-4.3l1.4 4.3zm-6.5-3.3l.4-1.1.4 1.1.5 1.2H2.2l.5-1.2zm2.1 3.3h1.3l-2.3-5.3H2.3L0 20.52h1.3l.5-1.1h2.6l.4 1.1z",
                        fill: "#006FCF"
                    })))
                }
            }

            function ua(e) {
                return /Discover/.test(e) && {
                    backgroundColor: "#C44B12",
                    width: 60,
                    logo: n.createElement("svg", {
                        id: "svg2",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 126.8518 21.3577"
                    }, n.createElement("path", {
                        id: "path22",
                        d: "M10.3214,15.5405c-1.23,1.1109-2.8283,1.5955-5.3582,1.5955H3.9124V3.8621H4.9632c2.53,0,4.0651.4527,5.3582,1.6234A6.7594,6.7594,0,0,1,12.49,10.4827,6.8872,6.8872,0,0,1,10.3214,15.5405ZM5.7475.4611H0V20.5343H5.7172A10.4482,10.4482,0,0,0,12.88,18.217a10.0725,10.0725,0,0,0,3.6439-7.7054c0-5.9239-4.426-10.05-10.7759-10.05",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path24",
                        d: "M18.3251,20.5343h3.9155V.4611H18.3251Z",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path26",
                        d: "M31.8145,8.1639c-2.35-.8694-3.04-1.4428-3.04-2.5274,0-1.2642,1.2292-2.2249,2.9169-2.2249a4.0484,4.0484,0,0,1,3.1575,1.6257l2.0485-2.6827A8.7828,8.7828,0,0,0,30.9992.1291c-3.5514,0-6.26,2.4665-6.26,5.7518,0,2.7655,1.2614,4.1814,4.9388,5.5048a15.6247,15.6247,0,0,1,2.7065,1.1432,2.4036,2.4036,0,0,1,1.1741,2.077,2.8613,2.8613,0,0,1-3.04,2.8315A4.6311,4.6311,0,0,1,26.2448,14.76l-2.53,2.4355a7.8015,7.8015,0,0,0,6.95,3.8217c4.0691,0,6.9233-2.7054,6.9233-6.5914,0-3.1893-1.32-4.6329-5.7736-6.262",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path28",
                        d: "M38.8234,10.5116A10.3947,10.3947,0,0,0,49.4187,20.9869a10.8257,10.8257,0,0,0,4.909-1.17V15.208a6.261,6.261,0,0,1-4.7271,2.1985,6.56,6.56,0,0,1-6.7421-6.9238,6.6727,6.6727,0,0,1,6.56-6.8942,6.5612,6.5612,0,0,1,4.909,2.2587V1.24A9.997,9.997,0,0,0,49.5111.0073,10.5561,10.5561,0,0,0,38.8234,10.5116",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path30",
                        d: "M85.373,13.9443,80.02.4611H75.7427l8.5182,20.5882H86.368L95.04.4611H90.7956L85.373,13.9443",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path32",
                        d: "M96.8106,20.5343h11.1041V17.136h-7.1919V11.7177h6.9266v-3.4h-6.9266V3.8621h7.1919V.4611H96.8106V20.5343",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path34",
                        d: "M115.5623,9.7025h-1.1438v-6.08h1.2056c2.4385,0,3.7642,1.0216,3.7642,2.9752C119.3883,8.6161,118.0626,9.7025,115.5623,9.7025Zm7.8554-3.3153c0-3.758-2.5888-5.9261-7.1042-5.9261h-5.8058V20.5343h3.9108V12.4706h.5105l5.42,8.0637h4.8152l-6.3191-8.4566a5.3374,5.3374,0,0,0,4.5729-5.69",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path36",
                        d: "M125.1746,1.4563h-.0711V.9952h.0755c.2084,0,.3163.075.3163.2269C125.4953,1.3782,125.386,1.4563,125.1746,1.4563Zm.7419-.2407c0-.3518-.2422-.5442-.6678-.5442h-.5665V2.4358h.4213V1.7515l.4938.6843h.514l-.58-.7276a.4845.4845,0,0,0,.3853-.4926",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        id: "path38",
                        d: "M125.3278,2.8135a1.2433,1.2433,0,0,1-1.2258-1.2612,1.2225,1.2225,0,1,1,2.4436,0A1.2428,1.2428,0,0,1,125.3278,2.8135ZM125.3335.012A1.5383,1.5383,0,1,0,126.8518,1.55,1.5294,1.5294,0,0,0,125.3335.012",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }), n.createElement("path", {
                        d: "M55.72,10.6456v-.0065a10.6788,10.6788,0,0,1,21.3576,0v.0065a10.6788,10.6788,0,0,1-21.3576,0",
                        transform: "translate(0 0.0365)",
                        fill: "#fff"
                    }))
                }
            }

            function ma(e) {
                return /Maestro/.test(e) && {
                    backgroundColor: "#000000",
                    width: 45,
                    logo: n.createElement("svg", {
                        viewBox: "0 0 168.32 106.44",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.createElement("path", {
                        d: "m0 0h168.32v106.44h-168.32z"
                    }), n.createElement("path", {
                        d: "m373 350.32v-6a3.55 3.55 0 0 0 -3.75-3.79 3.7 3.7 0 0 0 -3.36 1.7 3.51 3.51 0 0 0 -3.16-1.7 3.16 3.16 0 0 0 -2.8 1.42v-1.18h-2.08v9.55h2.1v-5.32a2.23 2.23 0 0 1 2.34-2.54c1.38 0 2.08.9 2.08 2.52v5.31h2.1v-5.29a2.25 2.25 0 0 1 2.34-2.54c1.42 0 2.1.9 2.1 2.52v5.31zm11.7-4.77v-4.77h-2.1v1.16a3.62 3.62 0 0 0 -3-1.4 5 5 0 0 0 0 10 3.62 3.62 0 0 0 3-1.4v1.16h2.08zm-7.73 0a2.89 2.89 0 1 1 2.9 3.06 2.86 2.86 0 0 1 -2.92-3.06zm52.17-5a5.38 5.38 0 0 1 2 .38 5 5 0 0 1 1.66 1.07 4.84 4.84 0 0 1 1.08 1.59 5.3 5.3 0 0 1 0 4 4.83 4.83 0 0 1 -1.08 1.59 5 5 0 0 1 -1.63 1.06 5.66 5.66 0 0 1 -4.1 0 4.94 4.94 0 0 1 -1.62-1.06 4.88 4.88 0 0 1 -1.07-1.59 5.31 5.31 0 0 1 0-4 4.88 4.88 0 0 1 1.07-1.59 4.94 4.94 0 0 1 1.62-1.06 5.38 5.38 0 0 1 2.05-.41zm0 2a3.1 3.1 0 0 0 -1.19.22 2.81 2.81 0 0 0 -.95.63 2.93 2.93 0 0 0 -.63 1 3.47 3.47 0 0 0 0 2.48 2.92 2.92 0 0 0 .63 1 2.8 2.8 0 0 0 .95.63 3.25 3.25 0 0 0 2.37 0 2.86 2.86 0 0 0 1-.63 2.89 2.89 0 0 0 .63-1 3.47 3.47 0 0 0 0-2.48 2.9 2.9 0 0 0 -.63-1 2.86 2.86 0 0 0 -1-.63 3.1 3.1 0 0 0 -1.2-.28zm-33.14 3c0-3-1.86-5-4.53-5a5 5 0 0 0 .14 10 5.8 5.8 0 0 0 3.91-1.34l-1-1.54a4.55 4.55 0 0 1 -2.78 1 2.65 2.65 0 0 1 -2.86-2.34h7.09c.03-.24.03-.5.03-.78zm-7.11-.84a2.46 2.46 0 0 1 2.54-2.32 2.37 2.37 0 0 1 2.42 2.32zm15.86-1.5a6.15 6.15 0 0 0 -3-.82c-1.14 0-1.82.42-1.82 1.12s.72.82 1.62.94l1 .14c2.08.3 3.34 1.18 3.34 2.86s-1.6 3.12-4.35 3.12a6.89 6.89 0 0 1 -4.13-1.24l1-1.62a5.09 5.09 0 0 0 3.18 1c1.42 0 2.18-.42 2.18-1.16 0-.54-.54-.84-1.68-1l-1-.14c-2.14-.3-3.3-1.26-3.3-2.82 0-1.9 1.56-3.06 4-3.06a7.14 7.14 0 0 1 3.89 1zm10-.54h-3.39v4.33c0 1 .34 1.6 1.38 1.6a3.84 3.84 0 0 0 1.84-.54l.6 1.78a4.88 4.88 0 0 1 -2.6.74c-2.46 0-3.32-1.32-3.32-3.54v-4.35h-1.94v-1.9h1.94v-2.9h2.1v2.9h3.39zm7.19-2.14a4.43 4.43 0 0 1 1.48.26l-.64 2a3.38 3.38 0 0 0 -1.3-.24c-1.36 0-2 .88-2 2.46v5.35h-2.08v-9.55h2.06v1.16a2.82 2.82 0 0 1 2.52-1.4zm14.38 8.39a1 1 0 0 1 .38.07 1 1 0 0 1 .31.2 1 1 0 0 1 .21.3.93.93 0 0 1 0 .74 1 1 0 0 1 -.21.3 1 1 0 0 1 -.31.2.94.94 0 0 1 -.38.08 1 1 0 0 1 -.9-.58.94.94 0 0 1 0-.74 1 1 0 0 1 .21-.3 1 1 0 0 1 .31-.2 1 1 0 0 1 .33-.06zm0 1.69a.71.71 0 0 0 .29-.06.75.75 0 0 0 .23-.16.74.74 0 0 0 -.23-1.2.72.72 0 0 0 -.29-.06.75.75 0 0 0 -.29.06.73.73 0 0 0 -.24.16.74.74 0 0 0 0 1 .74.74 0 0 0 .53.22zm.06-1.19a.4.4 0 0 1 .26.08.25.25 0 0 1 .09.21.24.24 0 0 1 -.07.18.35.35 0 0 1 -.21.09l.29.33h-.23l-.27-.33h-.09v.33h-.19v-.88zm-.22.17v.24h.22a.21.21 0 0 0 .12 0 .1.1 0 0 0 0-.09.1.1 0 0 0 0-.09.21.21 0 0 0 -.12 0z",
                        fill: "#fff",
                        transform: "translate(-311.84 -252.78)"
                    }), n.createElement("path", {
                        d: "m68.41 15.14h31.5v56.61h-31.5z",
                        fill: "#7673c0"
                    }), n.createElement("g", {
                        transform: "translate(-311.84 -252.78)"
                    }, n.createElement("path", {
                        d: "m382.25 296.22a35.94 35.94 0 0 1 13.75-28.3 36 36 0 1 0 0 56.61 35.94 35.94 0 0 1 -13.75-28.31z",
                        fill: "#eb001b"
                    }), n.createElement("path", {
                        d: "m450.81 318.53v-1.16h.47v-.24h-1.19v.24h.47v1.16zm2.31 0v-1.4h-.36l-.42 1-.42-1h-.36v1.4h.26v-1.05l.39.91h.27l.39-.91v1.06z",
                        fill: "#00a1df"
                    }), n.createElement("path", {
                        d: "m454.25 296.22a36 36 0 0 1 -58.25 28.3 36 36 0 0 0 0-56.61 36 36 0 0 1 58.25 28.3z",
                        fill: "#00a1df"
                    })))
                }
            }

            function fa(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function da(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? fa(Object(r), !0).forEach((function(t) {
                        pa(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fa(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function pa(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var ha = function(e) {
                var t = e.billingAddress,
                    r = e.cardType,
                    a = e.createdAt,
                    l = e.id,
                    i = e.last4,
                    c = e.onClick,
                    s = e.paymentInfo,
                    u = e.selected,
                    m = e.onRemove,
                    f = e.removed,
                    d = e.locale,
                    p = e.isMsa,
                    h = function(e, t) {
                        var r = n.useRef();
                        return n.useEffect((function() {
                            var n = function(n) {
                                !r.current.contains(n.target) && e && t()
                            };
                            return document.addEventListener("mousedown", n),
                                function() {
                                    document.removeEventListener("mousedown", n)
                                }
                        }), [t, r, e]), r
                    }(u, (function() {
                        return c(null)
                    })),
                    v = u && !f,
                    y = function(e) {
                        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [ia, ca, ma, sa, ua, la]).map((function(t) {
                            return t(e)
                        })).filter((function(e) {
                            return e
                        }))[0]
                    }(r);
                return n.createElement("div", {
                    ref: h,
                    className: "mx-auto",
                    style: {
                        width: 222
                    }
                }, n.createElement(_n, {
                    "data-aem-contentname": "Select credit card component",
                    onClick: function() {
                        return c(v ? null : l)
                    },
                    onKeyDown: function(e) {
                        " " === e.key && (e.preventDefault(), c(v ? null : l)), "Escape" === e.key && c(null)
                    },
                    tabIndex: 0,
                    role: "button",
                    "aria-expanded": v,
                    bgColor: y.backgroundColor,
                    textColor: "light",
                    className: "",
                    style: da({
                        transition: ".3s",
                        zIndex: 1,
                        opacity: f ? .5 : 1,
                        cursor: "pointer",
                        boxShadow: f ? "none" : ["0 0 0 ".concat(v ? "4px" : "0", " ").concat(y.backgroundColor), "0 4px 0 ".concat(v ? "4px" : "0", " rgba(0, 0, 0, 0.15)")].join(",")
                    }, {
                        outline: v ? "none" : void 0
                    }),
                    onMouseDown: function(e) {
                        return e.target.style.outline = "none"
                    }
                }, n.createElement(n.Fragment, null, !v && n.createElement("div", {
                    className: "sr-only"
                }, n.createElement(o.T, {
                    placeholders: [i]
                }, "Saved card ending with %1$s. Expand to edit or remove this stored credit card.")), n.createElement(aa, {
                    paymentInfo: s,
                    last4: i
                }), n.createElement("div", {
                    className: "position-absolute",
                    style: {
                        bottom: 10,
                        right: 10,
                        width: y.width
                    }
                }, y.logo))), n.createElement(ra, {
                    open: v,
                    id: l,
                    onRemove: m,
                    isMsa: p
                }), n.createElement(oa, {
                    createdAt: a,
                    billingAddress: t,
                    locale: d
                }))
            };

            function va(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ya(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ya(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ya(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ga = function(e) {
                    var t = e.cards,
                        r = e.onRemove,
                        a = e.onDelete,
                        l = e.onDeleteCancel,
                        i = e.locale,
                        c = e.isMsa,
                        s = va(n.useState(null), 2),
                        u = s[0],
                        m = s[1],
                        f = t && t.length > 0;
                    return n.createElement("div", {
                        "data-testid": "BillingInfoView"
                    }, f ? n.createElement(g.nv, null, n.createElement(o.T, null, "Click your card below to edit or remove it")) : null, n.createElement(g.X2, {
                        className: "mb-3 bg-100 no-gutters"
                    }, f ? t.map((function(e, t) {
                        return n.createElement(g.JX, {
                            size: 12,
                            md: 6,
                            key: t,
                            className: "p-3 text-center"
                        }, n.createElement(ha, Object.assign({}, e, {
                            onClick: m,
                            selected: u === e.id,
                            onRemove: r,
                            locale: i,
                            isMsa: c
                        })))
                    })) : n.createElement(g.JX, {
                        size: 12,
                        md: 6,
                        className: "p-3 text-center"
                    }, n.createElement(_n, {
                        bgColor: "#dddddd"
                    }, n.createElement("a", {
                        className: "text-center text-dark d-flex justify-content-center align-items-center flex-column",
                        href: "".concat(d["url.billingInfoAddCard"], "/?account_type=").concat(c ? "msa" : "mja", "&callback_url=").concat(d["url.profile"]).concat(ba),
                        "data-testid": "add-card-link"
                    }, n.createElement(g.JO, {
                        name: "line-expand",
                        size: "2x",
                        className: "d-inline-block"
                    }), n.createElement("div", null, n.createElement(o.T, null, "Add new card")))))), t.filter((function(e) {
                        return e.removed
                    })).length > 0 && n.createElement(g.bZ, {
                        "data-testid": "BillingInfoViewRemoveAlert",
                        colorVariant: "warning"
                    }, n.createElement(o.T, null, "Removing this card will cancel your ongoing subscriptions, are you sure you want to proceed?"), n.createElement("div", {
                        className: "text-right"
                    }, n.createElement(g.zx, {
                        onClick: function(e) {
                            return a(c)
                        },
                        "data-testid": "alert-yes-button",
                        "data-aem-contentname": "Remove Card button"
                    }, n.createElement(o.T, null, "Yes")), " ", n.createElement(g.zx, {
                        "data-aem-contentname": "Remove Card Cancel button",
                        "data-testid": "alert-cancel-button",
                        onClick: l
                    }, n.createElement(o.T, null, "No, cancel")))))
                },
                ba = "/billing-info",
                Ea = function(e) {
                    var t = e.store,
                        r = e.locale,
                        l = e.isMsa,
                        i = (0, a.Tx)().log;
                    return n.useEffect((function() {
                        t.getCards(), i && i.pageView("billing-info")
                    }), [t, i]), (0, h.SZ)((function() {
                        var e = t.fetchingCards,
                            a = t.error,
                            i = t.cards,
                            c = t.markCardForRemoval,
                            s = t.unmarkCardsForRemoval,
                            u = t.deleteMarkedCards;
                        return n.createElement("div", {
                            "data-testid": "BillingInfoPage"
                        }, n.createElement("h1", {
                            className: "font-mc-ten border-bottom mb-4"
                        }, n.createElement(o.T, null, "Billing information")), n.createElement(g.nv, null, n.createElement(o.T, null, "For your convenience you can save your payment information."), " ", n.createElement("a", {
                            "data-aem-contentname": "Save card article link",
                            href: "https://help.mojang.com/customer/portal/articles/1168829",
                            "data-testid": "learn-about-card-link"
                        }, n.createElement(o.T, null, "Learn more about saved cards here"))), e ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : a ? n.createElement(g.bZ, {
                            "data-testid": "BillingInfoPageError",
                            colorVariant: "danger"
                        }, n.createElement(o.T, null, "We are sorry but there was an error loading your credit card information, please try again later.")) : n.createElement(ga, {
                            isMsa: l,
                            cards: i,
                            locale: r,
                            onDelete: u,
                            onDeleteCancel: s,
                            onRemove: c
                        }))
                    }))
                },
                wa = r(9534),
                Aa = function(e) {
                    var t = e.contentRef,
                        r = (0, o.useTranslation)().t,
                        a = (0, p.Ir)().isMsa,
                        l = [{
                            props: {
                                to: "/",
                                exact: !0
                            },
                            text: r("Profile")
                        }, {
                            props: {
                                to: ir
                            },
                            text: r("Skin")
                        }, {
                            props: {
                                to: Zn
                            },
                            text: "Realms"
                        }, {
                            props: {
                                to: ba
                            },
                            text: r("Billing info")
                        }];
                    a && l.push({
                        props: {
                            to: wa.CL
                        },
                        text: r("Redeem")
                    });
                    var i = function() {
                        if ("safari" !== (0, fe.KC)()) {
                            var e = window.scrollX,
                                r = window.scrollY;
                            t.current.focus(), window.scrollTo(e, r)
                        }
                    };
                    return n.createElement("nav", {
                        className: "nav nav-pills flex-lg-column my-0",
                        "aria-label": "Profile Options"
                    }, l.map((function(e, t) {
                        var r = e.text,
                            a = e.props;
                        return n.createElement(y.NavLink, Object.assign({
                            "data-aem-contentname": "NavLink to ".concat(r),
                            key: t,
                            role: "button",
                            className: "nav-link text-break",
                            onClick: i
                        }, a), r)
                    })))
                },
                Ca = r(5004),
                ka = function(e) {
                    var t = e.search,
                        r = (0, v.oR)(Ye),
                        a = new URLSearchParams(t),
                        o = (0, Ca.sanitizeUrl)(a.get("url")),
                        l = a.get("model");
                    return o && r.setRemoteSkin(o), l && r.selectModel(l), n.createElement(Sn.l_, {
                        to: ir
                    })
                };

            function Sa(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function xa(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Sa(Object(r), !0).forEach((function(t) {
                        Oa(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sa(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Oa(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function Ra(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Ia(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function l(e) {
                            Ra(o, n, a, l, i, "next", e)
                        }

                        function i(e) {
                            Ra(o, n, a, l, i, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }

            function ja(e) {
                return (ja = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var Ta = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : ja(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                Pa = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.http = t, this.tokens = [], this.fetchingTokens = !0, this.fetchTokens = Ia(regeneratorRuntime.mark((function e() {
                        var t, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r.fetchingTokens = !0, e.next = 3, r.http.get("token");
                                case 3:
                                    return t = e.sent, e.next = 6, t.json();
                                case 6:
                                    n = e.sent, t.ok && (r.tokens = n), r.fetchingTokens = !1;
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), this.redeemToken = function() {
                        var e = Ia(regeneratorRuntime.mark((function e(t, n, a) {
                            var o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = a ? {
                                            subscriptionId: a
                                        } : void 0, e.next = 3, r.http.put("token/".concat(n, "/redeem/"), xa({}, o), {
                                            headers: {
                                                "Content-Type": "application/json",
                                                "x-minecraft-follow-me": "Minecraft"
                                            }
                                        });
                                    case 3:
                                        return l = e.sent, e.abrupt("return", l.ok);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, r, n) {
                            return e.apply(this, arguments)
                        }
                    }(), this.getTokensByProfile = function(e) {
                        return r.tokens.filter((function(t) {
                            return void 0 === t.redeemingProfileId || t.redeemingProfileId === e
                        }))
                    }
                };
            Ta([C.LO], Pa.prototype, "tokens", void 0), Ta([C.LO], Pa.prototype, "fetchingTokens", void 0);
            var Na = new Pa(pr);

            function Ma(e, t, r, n, a, o, l) {
                try {
                    var i = e[o](l),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function Da(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ba(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ba(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ba(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Qa = function(e) {
                    var t = e.realms,
                        r = e.token,
                        a = e.redeemToken,
                        l = e.profileId,
                        i = e.tokenId,
                        c = Da(n.useState(!1), 2),
                        s = c[0],
                        u = c[1],
                        m = Da((0, g.PV)(!1, !1, 1e3), 2),
                        f = m[0],
                        d = m[1],
                        p = Da(n.useState(r.subscriptionId), 2),
                        h = p[0],
                        v = p[1],
                        y = Da(n.useState(!1), 2),
                        b = y[0],
                        E = y[1],
                        w = Da(n.useState(!1), 2),
                        A = w[0],
                        C = w[1],
                        k = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e(t) {
                                var r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, a(l, i, t);
                                        case 2:
                                            r = e.sent, E(r), C(!r);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    r = arguments;
                                return new Promise((function(n, a) {
                                    var o = e.apply(t, r);

                                    function l(e) {
                                        Ma(o, n, a, l, i, "next", e)
                                    }

                                    function i(e) {
                                        Ma(o, n, a, l, i, "throw", e)
                                    }
                                    l(void 0)
                                }))
                            });
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        S = !r.subscriptionId,
                        x = t.find((function(e) {
                            return e.id === r.subscriptionId
                        })),
                        O = !r.subscriptionId || x.mayExtend,
                        R = !!r.subscriptionId && x.hasPayment,
                        I = t.some((function(e) {
                            return h === e.id
                        }));
                    return b ? n.createElement(g.bZ, {
                        colorVariant: "success",
                        "data-testid": "success"
                    }, "You have successfully activated your token!") : A ? n.createElement(g.bZ, {
                        colorVariant: "danger",
                        "data-testid": "error"
                    }, "Oops! Something went wrong when activating your token. Please try again later!") : R ? n.createElement(g.nv, null, n.createElement(o.T, null, "You can't activate this token right now since you already have a recurring payment on this realm.")) : n.createElement(Gr, {
                        realms: t
                    }, n.createElement(Mr, {
                        realms: t,
                        selectedRealmId: I ? h : void 0,
                        onChange: v,
                        disabled: !S
                    }), O ? n.createElement(Cr, {
                        name: "acceptTerms",
                        accepted: s,
                        setAccepted: u,
                        alertUser: f,
                        onClick: function(e) {
                            s ? k(r.subscriptionId ? null : h) : (e.preventDefault(), d(!0))
                        },
                        block: !0
                    }, n.createElement(o.T, null, "Activate")) : n.createElement(g.nv, null, n.createElement(o.T, null, "You can't activate this token right now since you have more than 180 days active already.")))
                },
                La = function(e) {
                    var t = e.tokens,
                        r = e.tokenId,
                        a = e.replace,
                        o = e.children;
                    return t.some((function(e) {
                        return e.idAsString === r
                    })) ? n.createElement(n.Fragment, null, o) : (a(Zn), null)
                },
                za = function(e) {
                    var t = e.children,
                        r = e.profileId,
                        a = e.replace;
                    return r ? n.createElement(n.Fragment, null, t) : (a(Zn), null)
                },
                Fa = function(e) {
                    var t = e.tokenId,
                        r = e.profileId,
                        a = e.history,
                        o = e.realmsTokenStore,
                        l = (0, v.oR)(gr);
                    return n.useEffect((function() {
                        l.fetchRealms(r), o.fetchTokens()
                    }), [r, l, o]), (0, h.SZ)((function() {
                        var e = l.realms,
                            i = l.fetchingRealms,
                            c = o.tokens,
                            s = o.fetchingTokens,
                            u = o.getTokensByProfile;
                        return n.createElement(n.Fragment, null, i || s ? n.createElement(g.aN, {
                            "data-testid": "loader"
                        }) : n.createElement(n.Fragment, null, n.createElement(La, {
                            tokens: c,
                            tokenId: t,
                            replace: a.replace
                        }, n.createElement(Qa, {
                            realms: e,
                            redeemToken: o.redeemToken,
                            token: u(r).find((function(e) {
                                return e.idAsString === t
                            })),
                            tokenId: t,
                            profileId: r
                        }))))
                    }))
                },
                Ha = function(e) {
                    var t = e.profileId,
                        r = e.tokenId,
                        a = e.history,
                        l = e.realmsTokenStore;
                    return n.createElement(za, {
                        profileId: t,
                        replace: a.replace
                    }, n.createElement("h1", {
                        className: "font-mc-ten border-bottom mb-4"
                    }, n.createElement(o.T, null, "Activate Realms subscription")), n.createElement(Fa, {
                        history: a,
                        profileId: t,
                        tokenId: r,
                        realmsTokenStore: l
                    }))
                },
                Ua = function() {
                    return n.createElement("div", {
                        className: "container",
                        "data-testid": "not-found-page"
                    }, n.createElement("div", {
                        className: "row justify-content-center"
                    }, n.createElement("div", {
                        id: "error404",
                        className: "col-md-10 col-lg-8"
                    }, n.createElement("h1", null, n.createElement(o.T, null, "We’re sorry")), n.createElement("p", null, n.createElement(o.T, null, "We can’t find the page you’re looking for.")))))
                },
                Va = function() {
                    var e = (0, o.useTranslation)().t;
                    return (0, p.Ph)() ? n.createElement(n.Fragment, null, n.createElement("h2", {
                        className: "font-mc-ten border-bottom mb-0"
                    }, n.createElement(o.T, null, "Account information")), n.createElement("div", {
                        className: "py-3 border-bottom"
                    }, n.createElement(w, {
                        label: e("Xbox gamertag")
                    }, (0, p.Ph)()))) : null
                };

            function Ga(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ya(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ya(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ya(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var Za = function(e) {
                    var t = e.profile,
                        r = Ga(n.useState(!1), 2),
                        a = r[0],
                        l = r[1],
                        c = (0, o.useTranslation)().t,
                        s = (0, v.oR)(v.sw);
                    return n.createElement("div", {
                        className: "mb-3"
                    }, n.createElement("h1", {
                        className: "font-mc-ten border-bottom mb-0 h2"
                    }, n.createElement(o.T, null, "Minecraft Profile")), n.createElement("div", {
                        className: "py-3 ".concat(a ? "" : "border-bottom")
                    }, t ? n.createElement(n.Fragment, null, n.createElement(w, {
                        label: c("Profile Name")
                    }, n.createElement("span", {
                        "data-testid": "profile_name"
                    }, t.name), n.createElement(g.zx, {
                        variant: "link",
                        className: "ml-auto",
                        "aria-label": c("Change profile name"),
                        "aria-expanded": !!a,
                        onClick: function() {
                            return l(!a)
                        }
                    }, n.createElement(o.T, null, "Change"))), n.createElement("div", {
                        className: a ? "border" : ""
                    }, n.createElement(g.M0, {
                        expanded: a
                    }, (function(e) {
                        var t = e.updateHeight,
                            r = e.ref;
                        return n.createElement("div", {
                            className: "p-4",
                            ref: r
                        }, n.createElement("h3", {
                            className: "font-mc-ten"
                        }, n.createElement(o.T, null, "Change profile name")), s.state.nameDetails && n.createElement(ce, {
                            updateHeight: t
                        }))
                    })))) : n.createElement(w, {
                        label: c("Profile Name")
                    }, n.createElement("span", {
                        "data-testid": "profile_name"
                    }, n.createElement(o.T, null, "Unknown")), n.createElement(g.zx, {
                        variant: "link",
                        className: "ml-auto",
                        "aria-label": c("Set up profile"),
                        onClick: function() {
                            return window.location.href = i.Di["url.setUpProfile"]
                        }
                    }, n.createElement(o.T, null, "Set up profile")))))
                },
                Xa = r(2578),
                Ja = function() {
                    var e = (0, v.oR)(v.sw),
                        t = (0, Xa.mu)(),
                        r = t.isMinecraftJavaAvailable,
                        a = t.fetching;
                    return (0, h.SZ)((function() {
                        var t = e.state,
                            l = t.profile,
                            i = t.fetching;
                        return n.createElement(n.Fragment, null, n.createElement(fe.Me, null), !a && !l && r && n.createElement(g.bZ, {
                            colorVariant: "warning"
                        }, n.createElement(o.T, {
                            placeholders: [d["url.setUpProfile"]],
                            isHTML: !0
                        }, "It seems like you didn't set up your Minecraft profile yet. <a href='%1$s'>Let's set it up now!</a>")), a || i ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : n.createElement(n.Fragment, null, r ? n.createElement(Za, {
                            profile: l
                        }) : n.createElement(fe.dq, null), n.createElement(Va, null), n.createElement(g.X2, {
                            justifyContent: "center",
                            className: "p-3"
                        }, n.createElement(g.Qj, {
                            colorVariant: "warning",
                            className: "btn-block",
                            href: "".concat(d["url.changeAccountSettings"])
                        }, n.createElement(o.T, null, "Change account settings"), " ", n.createElement("span", {
                            className: "d-none d-md-block"
                        }, n.createElement(o.T, null, "on microsoft.com"))))))
                    }))
                },
                qa = function() {
                    var e = (0, Xa.mu)(),
                        t = e.isMinecraftJavaAvailable,
                        r = e.fetching;
                    return (0, h.SZ)((function() {
                        return r ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : t ? n.createElement(g.bZ, {
                            colorVariant: "warning"
                        }, n.createElement(o.T, {
                            placeholders: [d["url.setUpProfile"]],
                            isHTML: !0
                        }, "It seems like you didn't set up your Minecraft profile yet. <a href='%1$s'>Let's set it up now!</a>")) : n.createElement(g.bZ, {
                            colorVariant: "info"
                        }, n.createElement(o.T, {
                            placeholders: [d["url.buyMinecraftJavaEdition"]],
                            isHTML: !0
                        }, "Looks like you don't own Minecraft yet! <a href='%1$s'>Buy the game here!</a>"))
                    }))
                };

            function Ka(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var Wa = function(e) {
                    var t = e.children,
                        r = e.profileId,
                        a = e.isMsa;
                    Ka(e, ["children", "profileId", "isMsa"]);
                    return r ? n.createElement(n.Fragment, null, t) : a ? n.createElement(qa, null) : n.createElement(g.bZ, {
                        colorVariant: "info"
                    }, n.createElement(o.T, {
                        placeholders: [d["url.buyMinecraftJavaEdition"]],
                        isHTML: !0
                    }, "Looks like you don't own Minecraft yet! <a href='%1$s'>Buy the game here!</a>"))
                },
                _a = function(e) {
                    var t = e.profileId,
                        r = (0, p.Ir)().isMsa;
                    return n.createElement(Sn.rs, null, n.createElement(Sn.AW, {
                        exact: !0,
                        path: "/",
                        render: function() {
                            return r ? n.createElement(Ja, null) : n.createElement(de, null)
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: ir,
                        render: function() {
                            return n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(v.n7, {
                                stores: [
                                    [Ye, qe.getInstance()]
                                ]
                            }, n.createElement(cr, {
                                profileId: t,
                                isMsa: r
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        path: "/skin/remote",
                        render: function(e) {
                            var a = e.location;
                            return n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(v.n7, {
                                stores: [
                                    [Ye, qe.getInstance()]
                                ]
                            }, n.createElement(ka, {
                                search: a.search
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        path: xo.path,
                        render: function(e) {
                            var a = e.match;
                            return n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(xo, {
                                match: a,
                                profileId: t,
                                isMsa: r
                            }))
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: Zn,
                        render: function() {
                            return n.createElement(v.n7, {
                                stores: [
                                    [gr, Er],
                                    [tn, nn]
                                ]
                            }, n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(Xn, {
                                profileId: t,
                                realmsTokenStore: Na,
                                billingInfoStore: r ? bn : gn
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: In,
                        render: function() {
                            return n.createElement(v.n7, {
                                stores: [
                                    [tn, nn],
                                    [vn, r ? bn : gn]
                                ]
                            }, n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(jn, {
                                profileId: t,
                                isMsa: r
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: Jr,
                        render: function(e) {
                            var a = e.location,
                                o = d["realms.plans"],
                                l = new URLSearchParams(a.search),
                                i = l.get("subscriptionId"),
                                c = l.get("selectedPlan");
                            return n.createElement(v.n7, {
                                stores: [
                                    [gr, Er]
                                ]
                            }, n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(qr, {
                                plans: o,
                                subscriptionId: i,
                                profileId: t,
                                selectedVariantId: c
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: "/realms/activate",
                        render: function(e) {
                            var a = e.location,
                                o = e.history,
                                l = new URLSearchParams(a.search).get("token");
                            return n.createElement(v.n7, {
                                stores: [
                                    [gr, Er]
                                ]
                            }, n.createElement(Wa, {
                                profileId: t,
                                isMsa: r
                            }, n.createElement(Ha, {
                                realmsTokenStore: Na,
                                profileId: t,
                                tokenId: l,
                                history: o
                            })))
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: ba,
                        render: function() {
                            return n.createElement(Ea, {
                                isMsa: r,
                                store: r ? bn : gn,
                                locale: d.locale
                            })
                        }
                    }), n.createElement(Sn.AW, {
                        exact: !0,
                        path: wa.CL,
                        render: function() {
                            return n.createElement(wa.q9, {
                                isMsa: r
                            })
                        }
                    }), n.createElement(Sn.AW, {
                        path: "/",
                        render: function() {
                            return n.createElement(Ua, null)
                        }
                    }))
                },
                $a = r(6250),
                eo = function(e) {
                    var t = e.fetching,
                        r = e.profileId,
                        a = e.error,
                        l = n.useRef(null);
                    return (0, n.useEffect)((function() {
                        r && (0, $a.s5)()
                    }), [r]), n.createElement(y.BrowserRouter, {
                        basename: "/".concat(d.language, "/profile")
                    }, n.createElement(g.X2, null, n.createElement(g.JX, {
                        size: 12,
                        lg: 3,
                        className: "bg-200"
                    }, n.createElement("div", {
                        className: "page-section page-section--first pb-0",
                        "data-testid": "profile-view"
                    }, n.createElement(Aa, {
                        contentRef: l
                    }))), n.createElement(g.JX, {
                        size: 12,
                        lg: 9,
                        className: "bg-white"
                    }, n.createElement("div", {
                        className: "page-section page-section--first site-content--hide-footer px-md-5 outline-hide",
                        ref: l,
                        tabIndex: -1
                    }, t && n.createElement(g.aN, null, n.createElement(o.T, null, "Loading....")), a && n.createElement(g.Xg, null, n.createElement("div", {
                        className: "text-center bg-white py-4"
                    }, n.createElement(g.nv, null, n.createElement(o.T, null, "Something went wrong... press reload to try again.")), n.createElement(g.zx, {
                        colorVariant: "primary",
                        onClick: function() {
                            return location.reload()
                        }
                    }, n.createElement(o.T, null, "Reload")))), !t && !a && n.createElement(_a, {
                        profileId: r
                    })))))
                };
            var to = function(e) {
                    ! function(e) {
                        if (null == e) throw new TypeError("Cannot destructure undefined")
                    }(e);
                    var t = (0, v.oR)(v.sw),
                        r = (0, v.oR)(v.mR);
                    return (0, h.SZ)((function() {
                        var e = t.state,
                            a = e.fetching,
                            l = e.profile,
                            i = e.error,
                            c = e.forced,
                            s = r.state.userDetails;
                        return null != s ? !s.legacyUser && null != c && c.rollout ? n.createElement(n.Fragment, null, n.createElement(fe.EK, null)) : s.legacyUser ? n.createElement(n.Fragment, null, n.createElement(fe.qU, null)) : n.createElement(eo, {
                            error: i,
                            fetching: a,
                            profileId: l ? l.id : ""
                        }) : n.createElement(g.Si, null, n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")))
                    }))
                },
                ro = r(5934),
                no = r(4807),
                ao = function(e) {
                    var t = e.retry,
                        r = e.validating;
                    return n.createElement(g.Xg, null, n.createElement("div", {
                        className: "text-center bg-white py-4"
                    }, n.createElement(g.nv, null, n.createElement(o.T, null, "You seem to be offline, press reload to try again.")), n.createElement(g.zx, {
                        colorVariant: "primary",
                        onClick: t,
                        disabled: r
                    }, n.createElement(o.T, null, "Reload"))))
                };

            function oo() {
                return (oo = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var lo = function(e) {
                var t = oo({}, e),
                    r = (0, v.oR)(v.sw),
                    a = (0, v.oR)(ro.wc),
                    l = a.state.fetching;
                return (0, h.SZ)((function() {
                    return r.state.fetching ? n.createElement(g.l2, null, n.createElement(o.T, null, "Loading profile")) : n.createElement(ro.BV, {
                        secure: function() {
                            return n.createElement(to, Object.assign({}, t))
                        },
                        insecure: function() {
                            return d["enable.asq"] ? n.createElement(no.I, null) : n.createElement("p", null, "Answer the sequrity questions and reload the page to view your profile.")
                        },
                        offline: function() {
                            return n.createElement(ao, {
                                retry: function() {
                                    return a.fetchSecureLocation()
                                },
                                validating: l
                            })
                        }
                    })
                }))
            };
            var io = function(e) {
                ! function(e) {
                    if (null == e) throw new TypeError("Cannot destructure undefined")
                }(e);
                var t = (0, v.oR)(v.sw),
                    r = (0, Xa.mu)(),
                    a = r.fetching,
                    o = r.httpError,
                    l = (0, p.Ir)().isChildMsa,
                    c = i.Di.nonEssentialCookies;
                return (0, h.SZ)((function() {
                    l && i.Di.deleteNonEssentialCookie && document.cookie.split(";").forEach((function(e) {
                        var t = e.split("=")[0].trim();
                        c.includes(t) && (document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
                    }));
                    var e = t.state,
                        r = e.fetching,
                        s = e.profile,
                        u = e.error;
                    return n.createElement(eo, {
                        error: u || o,
                        fetching: a || r,
                        profileId: s ? s.id : ""
                    })
                }))
            };

            function co(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var so = function() {
                    return n.createElement(g.l2, null, n.createElement(o.T, null, "Validating access token..."))
                },
                uo = function() {
                    return n.createElement(g.l2, null, n.createElement(o.T, null, "Not logged in, sending you to login page!"))
                },
                mo = function(e) {
                    var t = e.postLogoutFn,
                        r = co(e, ["postLogoutFn"]),
                        a = (0, p.Ir)(),
                        o = a.validating,
                        l = a.valid,
                        i = a.error,
                        c = a.retry,
                        s = a.isMsa;
                    return n.useEffect((function() {
                        if (!o && !l) {
                            var e = window.location,
                                r = e.pathname,
                                n = e.search,
                                a = e.hash;
                            t("".concat(r).concat(n).concat(a))
                        }
                    }), [t, o, l]), o ? n.createElement(so, null) : i ? n.createElement(ao, {
                        retry: c,
                        validating: o
                    }) : l && s ? n.createElement(Xa._B, null, n.createElement(v.n7, {
                        stores: [
                            [v.sw, v.Yk.getInstance()],
                            [ae, le()],
                            [Z, J]
                        ]
                    }, n.createElement(io, Object.assign({}, r)))) : l && !s ? n.createElement(v.n7, {
                        stores: [
                            [v.mR, v._c.getInstance()],
                            [v.sw, v.Yk.getInstance()],
                            [ro.wc, ro.eU.getInstance()],
                            [ae, le()],
                            [Z, J]
                        ]
                    }, n.createElement(lo, Object.assign({}, r))) : n.createElement(uo, null)
                };

            function fo(e, t) {
                if (null == e) return {};
                var r, n, a = function(e, t) {
                    if (null == e) return {};
                    var r, n, a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var po = function(e) {
                    var t = e.postLogoutFn,
                        r = fo(e, ["postLogoutFn"]),
                        i = d.translationPath,
                        c = d.language,
                        s = d.telemetryFn,
                        u = (0, l.t)(i, c);
                    return u && n.createElement(a.P2, {
                        telemetryFn: s,
                        name: "profile"
                    }, n.createElement(o.TranslationProvider, {
                        translation: u
                    }, n.createElement(p.hz, null, n.createElement(mo, Object.assign({
                        postLogoutFn: t
                    }, r)))))
                },
                ho = function(e) {
                    var t = e.skinPath;
                    return n.createElement(n.Fragment, null, n.createElement(g.bZ, {
                        colorVariant: "danger",
                        "data-testid": "cape-redeem-error"
                    }, n.createElement(o.T, null, "Something went wrong when trying to redeem your cape!"), n.createElement("br", null), n.createElement(o.T, null, "The cape you are trying to redeem might already have been taken.")), n.createElement(g.nv, null, n.createElement(o.T, {
                        "data-aem-contentname": "Cape Redeem Error link",
                        placeholders: [t],
                        isHTML: !0
                    }, "Go <a href='%1$s' >here</a> to see if the cape has been redeemed by you.")))
                },
                vo = function(e) {
                    var t = e.skinPath;
                    return n.createElement(n.Fragment, null, n.createElement(g.bZ, {
                        colorVariant: "success",
                        className: "mb-4",
                        "data-testid": "cape-redeem-success"
                    }, n.createElement(o.T, null, "You have successfully redeemed your new awesome cape!")), n.createElement(g.nv, null, n.createElement(o.T, {
                        "data-aem-contentname": "Cape redeem success link",
                        placeholders: [t],
                        isHTML: !0
                    }, 'Go <a href="%1$s">here</a> to change your current cape.')))
                },
                yo = (0, Sn.EN)((function(e) {
                    var t = e.capeStoreMojang,
                        r = e.capeCode,
                        a = e.profileId,
                        l = e.history.createHref({
                            pathname: ir
                        });
                    return (0, h.SZ)((function() {
                        return t.redeemError ? n.createElement(ho, {
                            skinPath: l
                        }) : t.redeemed ? n.createElement(vo, {
                            skinPath: l
                        }) : n.createElement(n.Fragment, null, n.createElement(g.nv, null, n.createElement(o.T, {
                            placeholders: [r],
                            isHTML: !0
                        }, "To redeem your cape with the code <em>%1$s</em> click the button below.")), n.createElement(g.zx, {
                            "data-aem-contentname": "Cape code redeem button",
                            colorVariant: "primary",
                            onClick: function() {
                                console.log("clicked"), t.redeem(a, r)
                            }
                        }, n.createElement(o.T, null, "Redeem Cape")))
                    }))
                }));

            function go(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function bo(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Eo(e, t) {
                return (Eo = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function wo(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = Co(e);
                    if (t) {
                        var a = Co(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return Ao(this, r)
                }
            }

            function Ao(e, t) {
                return !t || "object" !== ko(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function Co(e) {
                return (Co = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function ko(e) {
                return (ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var So = function(e, t, r, n) {
                    var a, o = arguments.length,
                        l = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : ko(Reflect)) && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (l = (o < 3 ? a(l) : o > 3 ? a(t, r, l) : a(t, r)) || l);
                    return o > 3 && l && Object.defineProperty(t, r, l), l
                },
                xo = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Eo(e, t)
                    }(i, e);
                    var t, r, a, l = wo(i);

                    function i() {
                        return go(this, i), l.apply(this, arguments)
                    }
                    return t = i, (r = [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.match,
                                r = e.profileId,
                                a = e.isMsa,
                                l = t.params.capeCode;
                            return r && !a ? n.createElement("div", null, n.createElement("h1", {
                                className: "font-mc-ten border-bottom mb-4"
                            }, n.createElement(o.T, null, "Redeem cape")), n.createElement(yo, {
                                capeCode: l,
                                capeStoreMojang: Kt,
                                profileId: r
                            })) : n.createElement(Ua, null)
                        }
                    }]) && bo(t.prototype, r), a && bo(t, a), i
                }(n.Component);

            function Oo(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var l, i = e[Symbol.iterator](); !(n = (l = i.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ro(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ro(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Ro(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            xo.path = "/redeemCape/:capeCode", xo = So([k.Pi], xo);
            var Io = function(e) {
                    var t = e.cards,
                        r = e.onRemove,
                        a = e.onDelete,
                        l = e.onDeleteCancel,
                        i = e.locale,
                        c = e.isMsa,
                        s = Oo(n.useState(null), 2),
                        u = s[0],
                        m = s[1],
                        f = t && t.length > 0;
                    return n.createElement("div", {
                        "data-testid": "ForcedMigrationBillingInfoView"
                    }, f ? n.createElement(g.X2, {
                        className: "no-gutters bg-white"
                    }, n.createElement(g.JX, {
                        size: 12,
                        md: 8,
                        className: "ml-5 pl-4 p-3 mob-pl-16 mob-pr-16 mob-ml-0 fm-card-wrapper"
                    }, n.createElement("div", {
                        className: "ml-5 pl-5 mob-ml-0 mob-pl-0 mob-pr-0"
                    }, n.createElement(g.nv, {
                        className: "mx-auto"
                    }, n.createElement(o.T, null, "Click your card below to edit or remove it"))))) : null, n.createElement(g.X2, {
                        className: "bg-100 no-gutters"
                    }, f ? t.map((function(e, t) {
                        return n.createElement(g.JX, {
                            size: 12,
                            md: 6,
                            key: t,
                            className: "p-4 pl-5 mob-pl-16"
                        }, n.createElement(ha, Object.assign({}, e, {
                            onClick: m,
                            selected: u === e.id,
                            onRemove: r,
                            locale: i,
                            isMsa: c
                        })))
                    })) : n.createElement(g.JX, {
                        size: 12,
                        md: 6,
                        className: "ml-4 p-4 pl-5 mob-pl-24 mob-ml-0 fm-add-card-wrapper"
                    }, n.createElement("div", {
                        className: "ml-5 pl-5 mob-ml-0 mob-pl-0 mob-text-align-center fm-add-card"
                    }, n.createElement(_n, {
                        bgColor: "#dddddd"
                    }, n.createElement("a", {
                        className: "text-center text-dark d-flex justify-content-center align-items-center flex-column",
                        href: "".concat(d["url.billingInfoAddCard"], "/?account_type=").concat(c ? "msa" : "mja", "&callback_url=").concat(d["url.forcedBillingInfoPath"]),
                        "data-testid": "forced-migration-add-card-link"
                    }, n.createElement(g.JO, {
                        name: "line-expand",
                        size: "2x",
                        className: "d-inline-block"
                    }), n.createElement("div", null, n.createElement(o.T, null, "Add new card"))))))), t.filter((function(e) {
                        return e.removed
                    })).length > 0 && n.createElement(g.bZ, {
                        "data-testid": "ForcedMigrationBillingInfoViewRemoveAlert",
                        colorVariant: "warning"
                    }, n.createElement(o.T, null, "Removing this card will cancel your ongoing subscriptions, are you sure you want to proceed?"), n.createElement("div", {
                        className: "text-right"
                    }, n.createElement(g.zx, {
                        onClick: function(e) {
                            return a(c)
                        },
                        "data-testid": "alert-yes-button",
                        "data-aem-contentname": "Remove Card button"
                    }, n.createElement(o.T, null, "Yes")), " ", n.createElement(g.zx, {
                        "data-aem-contentname": "Remove Card Cancel button",
                        "data-testid": "alert-cancel-button",
                        onClick: l
                    }, n.createElement(o.T, null, "No, cancel")))), n.createElement(g.X2, {
                        className: "bg-100 no-gutters"
                    }, n.createElement(g.JX, {
                        size: 12,
                        md: 5,
                        sm: 12,
                        className: "ml-5 pl-4 p-3 mob-ml-0 mob-pl-16"
                    }, n.createElement("div", {
                        className: "ml-5 pl-5 mb-5 pb-4 mob-ml-0 mob-pl-0 btn-return-wrapper"
                    }, n.createElement(g.Qj, {
                        colorVariant: "primary",
                        href: d["url.profile"],
                        block: !0
                    }, n.createElement(o.T, null, "Return to profile"))))))
                },
                jo = function(e) {
                    var t = e.store,
                        r = e.locale,
                        l = e.isMsa,
                        i = (0, a.Tx)().log;
                    return n.useEffect((function() {
                        t.getCards(), i && i.pageView("billing-info")
                    }), [t, i]), (0, h.SZ)((function() {
                        var e = t.fetchingCards,
                            a = t.error,
                            i = t.cards,
                            c = t.markCardForRemoval,
                            s = t.unmarkCardsForRemoval,
                            u = t.deleteMarkedCards;
                        return n.createElement("div", {
                            "data-testid": "BillingInfoPage",
                            className: "forced-billing-info-page"
                        }, n.createElement(g.X2, {
                            className: "bg-white no-gutters"
                        }, n.createElement(g.JX, {
                            size: 12,
                            md: 8,
                            className: "ml-5 pl-4 p-3 mob-ml-0 mob-pl-16"
                        }, n.createElement("h1", {
                            className: "font-mc-ten mb-4 ml-5 mt-3 pl-5 mob-pl-0 mob-ml-0"
                        }, n.createElement(o.T, null, "Billing information")), n.createElement(g.nv, {
                            className: "ml-5 pl-5 mob-pl-0 mob-ml-0"
                        }, n.createElement(o.T, null, "For your convenience you can save your payment information."), " ", n.createElement("a", {
                            "data-aem-contentname": "Save card article link",
                            href: "https://help.mojang.com/customer/portal/articles/1168829",
                            "data-testid": "learn-about-card-link"
                        }, n.createElement(o.T, null, "Learn more about saved cards here"))))), e ? n.createElement(g.aN, null, n.createElement(o.T, null, "Loading...")) : a ? n.createElement(g.bZ, {
                            "data-testid": "ForcedMigrationBillingInfoPageError",
                            colorVariant: "danger"
                        }, n.createElement(o.T, null, "We are sorry but there was an error loading your credit card information, please try again later.")) : n.createElement(Io, {
                            isMsa: l,
                            cards: i,
                            locale: r,
                            onDelete: u,
                            onDeleteCancel: s,
                            onRemove: c
                        }))
                    }))
                };
            var To = function(e) {
                ! function(e) {
                    if (null == e) throw new TypeError("Cannot destructure undefined")
                }(e);
                var t = d.translationPath,
                    r = d.language,
                    i = d.telemetryFn,
                    c = (0, l.t)(t, r),
                    s = (0, p.Ir)().isMsa;
                return c && n.createElement(o.TranslationProvider, {
                    translation: c
                }, n.createElement(a.P2, {
                    telemetryFn: i,
                    name: "ForcedBillingInfo"
                }, n.createElement(p.hz, null, n.createElement(jo, {
                    isMsa: s,
                    store: s ? bn : gn,
                    locale: d.locale
                }))))
            }
        },
        5004: function(e) {
            "use strict";
            var t = /^(%20|\s)*(javascript|data)/im,
                r = /[^\x20-\x7E]/gim,
                n = /^([^:]+):/gm,
                a = [".", "/"];
            e.exports = {
                sanitizeUrl: function(e) {
                    if (!e) return "about:blank";
                    var o, l, i = e.replace(r, "").trim();
                    return function(e) {
                        return a.indexOf(e[0]) > -1
                    }(i) ? i : (l = i.match(n)) ? (o = l[0], t.test(o) ? "about:blank" : i) : "about:blank"
                }
            }
        }
    }
]);
//# sourceMappingURL=@mojang~yggdrasilWebProfile.chunk.3e64b2a60f63c6fde740.js.map