(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [909], {
        6259: function(e, t, r) {
            "use strict";
            r.d(t, {
                X: function() {
                    return L
                }
            });
            var n = r(8709),
                a = r(9474);

            function o(e, t) {
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
                    t % 2 ? o(Object(r), !0).forEach((function(t) {
                        i(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var c = s({
                    translationPath: a.iZ
                }, a.gZ),
                u = s(s(s({}, c), a.Di), window.passwordChangeConfig),
                l = (0, a.Gu)(u, "passwordChangeConfig"),
                d = r(6089),
                f = r(7503),
                p = r(2374),
                h = new(r(1321).K)(l["endpoint.accountsService"], {
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: "cors",
                    redirect: "follow"
                }),
                m = r(7431);

            function b(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(r), !0).forEach((function(t) {
                        y(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function y(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function g(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function O(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var j = function(e, t, r, n) {
                    var a, o = arguments.length,
                        s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : P(Reflect)) && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n);
                    else
                        for (var i = e.length - 1; i >= 0; i--)(a = e[i]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, r, s) : a(t, r)) || s);
                    return o > 3 && s && Object.defineProperty(t, r, s), s
                },
                E = Symbol("passwordChangeStore"),
                S = function() {
                    function e(t, r) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window;
                        v(this, e), this.apiClient = t, this.session = r, this.win = n, this.state = {
                            success: !1,
                            error: null,
                            loading: !1
                        }
                    }
                    var t, r, n, a, o;
                    return t = e, (r = [{
                        key: "resetState",
                        value: function() {
                            this.setState({
                                success: !1,
                                error: null
                            })
                        }
                    }, {
                        key: "changePassword",
                        value: (a = regeneratorRuntime.mark((function e(t, r) {
                            var n, a, o, s = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.setState({
                                            loading: !0
                                        }), n = this.session.getToken(), e.next = 4, this.apiClient.put("users/password", {
                                            oldPassword: t,
                                            password: r
                                        }, {
                                            headers: {
                                                Authorization: "Bearer ".concat(n),
                                                "Content-Type": "application/json"
                                            }
                                        });
                                    case 4:
                                        if (!(a = e.sent).ok) {
                                            e.next = 11;
                                            break
                                        }
                                        this.setState({
                                            success: !0,
                                            error: null
                                        }), this.session.removeToken(), setTimeout((function() {
                                            return s.win.location.replace(l["url.login"])
                                        }), 800), e.next = 15;
                                        break;
                                    case 11:
                                        return e.next = 13, a.json();
                                    case 13:
                                        o = e.sent, this.setState({
                                            success: !1,
                                            error: o.errorMessage
                                        });
                                    case 15:
                                        return this.setState({
                                            loading: !1
                                        }), e.abrupt("return", a.ok);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), o = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    g(o, r, n, s, i, "next", e)
                                }

                                function i(e) {
                                    g(o, r, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function(e, t) {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "setState",
                        value: function(e) {
                            this.state = w(w({}, this.state), e)
                        }
                    }]) && O(t.prototype, r), n && O(t, n), e
                }();
            j([p.LO], S.prototype, "state", void 0), j([p.aD], S.prototype, "setState", null);
            var C = new S(h, m.nP),
                k = r(5487),
                A = r(9928),
                T = r(16),
                I = r(8722);

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
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
                    if ("string" == typeof e) return D(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var x = function(e) {
                var t = e.submitForm,
                    r = e.disabled,
                    a = e.apiErrorAlertId,
                    o = e.successAlertId,
                    s = e.apiError,
                    i = (0, d.useTranslation)().t,
                    c = (0, A.cI)(),
                    u = c.register,
                    l = c.trigger,
                    f = c.errors,
                    p = c.handleSubmit,
                    h = c.reset,
                    m = c.clearErrors,
                    b = (c.setError, R(n.useState(!1), 2)),
                    w = b[0],
                    y = b[1],
                    g = R(n.useState(!1), 2),
                    v = g[0],
                    O = g[1],
                    P = R(n.useState(), 2),
                    j = P[0],
                    E = P[1],
                    S = n.useRef();
                n.useEffect((function() {
                    s && S.current && (S.current.focus(), S.current.scrollIntoView({
                        block: "center",
                        inline: "center"
                    }))
                }), [s]);
                var C = {
                        hasDigit: i("1 digit"),
                        hasLowerCase: i("1 lowercase character"),
                        hasNonAlphanumeric: i("1 special character (!?€%&, etc)"),
                        hasUpperCase: i("1 uppercase character")
                    },
                    k = function(e) {
                        var t = {
                            hasDigit: (0, I.uf)(e),
                            hasNonAlphanumeric: (0, I._Z)(e),
                            hasLowerCase: (0, I.VV)(e),
                            hasUpperCase: (0, I.ny)(e)
                        };
                        return E(t), Object.values(t).filter((function(e) {
                            return e
                        })).length >= 2
                    },
                    D = w && v;
                return n.createElement("form", {
                    onSubmit: p((function(e) {
                        t(e), h(),
                            function(e) {
                                m(Object.keys(e)), E(null), y(!1), O(!1)
                            }(e)
                    }))
                }, n.createElement("div", {
                    className: "pt-2 pb-3"
                }, n.createElement(T.ZI, {
                    "data-aem-contentname": "Change Password Field",
                    name: "password",
                    onChange: function() {
                        l("password").then(y)
                    },
                    label: i("Old password"),
                    inputProps: {
                        required: !0,
                        "aria-invalid": !!f.password,
                        "data-testid": "PasswordChangeAppViewPasswordField"
                    },
                    buttonTitles: {
                        hide: i("Hide"),
                        show: i("Show")
                    },
                    inputRef: function(e) {
                        u(e, {
                            required: i("This field is required.")
                        }), S.current = e
                    },
                    errorId: "passwordError"
                }), n.createElement(T.cp, {
                    errorId: "passwordError",
                    error: f.password
                })), n.createElement("div", {
                    className: "pt-2 pb-5"
                }, n.createElement(T.ZI, {
                    "data-aem-contentname": "New Password Field",
                    name: "newPassword",
                    onChange: function(e) {
                        k(e.target.value), l("newPassword").then(O)
                    },
                    label: i("New password"),
                    errorId: "Length",
                    error: f.newPassword,
                    inputProps: {
                        required: !0,
                        "aria-invalid": !!f.newPassword,
                        "data-testid": "PasswordChangeAppViewNewPasswordField"
                    },
                    inputRef: u({
                        required: i("This field is required."),
                        minLength: {
                            value: 8,
                            message: i("Password must be at least 8 characters long!")
                        },
                        validate: k
                    }),
                    buttonTitles: {
                        hide: i("Hide"),
                        show: i("Show")
                    }
                })), n.createElement("div", {
                    className: "pb-3"
                }, n.createElement(I.th, {
                    label: i("You should fulfill at least two of these requirements:"),
                    fulfilledRules: j,
                    ruleLabels: C,
                    ariaRequirementLabel: {
                        fulfilled: i("Requirement fullfiled:"),
                        unfulfilled: i("The password should have:")
                    },
                    title: {
                        checked: i("Checked"),
                        unchecked: i("Unchecked")
                    }
                })), n.createElement("div", {
                    className: "mt-4 mb-1"
                }, n.createElement(T.zx, {
                    "data-testid": "PasswordChangeAppViewButton",
                    colorVariant: !D || r ? "disabled" : "primary",
                    "aria-disabled": !D || r,
                    type: "submit",
                    disabled: !D || r,
                    "aria-describedby": [a, o].filter((function(e) {
                        return e
                    })).join(" ")
                }, n.createElement(d.T, null, "Change password"))))
            };

            function N(e, t, r, n, a, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, a)
            }
            var V = function(e) {
                    e.accountId;
                    var t = e.layoutChanged,
                        r = (0, f.oR)(E);
                    n.useLayoutEffect((function() {
                        t()
                    }), [r.state]);
                    var a = function() {
                        var e, t = (e = regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.resetState(), e.next = 3, r.changePassword(t.password, t.newPassword);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function s(e) {
                                    N(o, n, a, s, i, "next", e)
                                }

                                function i(e) {
                                    N(o, n, a, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                    return (0, k.SZ)((function() {
                        var e = r.state,
                            o = e.error,
                            s = e.success,
                            i = e.loading,
                            c = "change-password-api-error",
                            u = "change-password-success";
                        return n.createElement(n.Fragment, null, n.createElement("h3", {
                            className: "font-mc-ten"
                        }, n.createElement(d.T, null, "Change password")), o && n.createElement(T.bZ, {
                            colorVariant: "danger",
                            id: c,
                            dismissible: !0,
                            onDismiss: t
                        }, o), s ? n.createElement(T.bZ, {
                            colorVariant: "primary",
                            id: u
                        }, n.createElement(d.T, null, "Great stuff! Your password is changed.")) : n.createElement("div", {
                            "data-testid": "PasswordChangeAppView"
                        }, n.createElement(x, {
                            submitForm: a,
                            disabled: i,
                            apiErrorAlertId: c,
                            successAlertId: u,
                            apiError: o
                        })))
                    }))
                },
                q = r(6418),
                L = function(e) {
                    var t = (0, q.t)(l.translationPath, l.language);
                    return t && n.createElement(d.TranslationProvider, {
                        translation: t || {}
                    }, n.createElement(f.n7, {
                        stores: [
                            [E, C]
                        ]
                    }, n.createElement(V, Object.assign({}, e))))
                }
        }
    }
]);
//# sourceMappingURL=@mojang~passwordChange.chunk.7cd91d7d499e76f68d6b.js.map