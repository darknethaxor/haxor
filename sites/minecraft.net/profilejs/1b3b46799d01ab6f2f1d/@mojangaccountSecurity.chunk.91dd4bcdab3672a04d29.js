(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [722], {
        638: function(e, t, r) {
            "use strict";
            r.d(t, {
                J: function() {
                    return le
                }
            });
            var n = r(8709),
                a = r(6418),
                o = r(9474);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        l(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var u = c({
                    translationPath: o.iZ,
                    "url.accountMigrationFAQ": o.iZ,
                    "url.forgotEmail": o.iZ,
                    "url.securityView": o.iZ
                }, o.gZ),
                s = c(c(c({}, u), o.Di), window.accountSecurityConfig),
                m = (0, o.Gu)(s, "accountSecurityConfig"),
                f = r(7656),
                p = r(6089),
                d = r(7431),
                y = r(16),
                b = r(2374),
                v = r(7503);

            function h(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function g(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function i(e) {
                            h(o, n, a, i, c, "next", e)
                        }

                        function c(e) {
                            h(o, n, a, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function E() {
                var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v.Zf;
                return {
                    getSecurityCode: (t = g(regeneratorRuntime.mark((function e(t) {
                        var n, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = {
                                        emailAddress: "" != t ? t : (0, d.Ph)()
                                    }, e.next = 4, r.post("twofactorauth/migration/otp", JSON.stringify(n), {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 4:
                                    if (!(a = e.sent).ok) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.t0 = a.ok, e.next = 9, a.json();
                                case 9:
                                    return e.t1 = e.sent, e.abrupt("return", {
                                        ok: e.t0,
                                        data: e.t1,
                                        error: !1
                                    });
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    return e.prev = 13, e.t2 = e.catch(0), e.abrupt("return", {
                                        ok: !1,
                                        error: !0,
                                        data: null
                                    });
                                case 16:
                                    return e.abrupt("return", {
                                        ok: !1,
                                        error: !1,
                                        data: null
                                    });
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    }))), function(e) {
                        return t.apply(this, arguments)
                    }),
                    submitSecurityCode: (e = g(regeneratorRuntime.mark((function e(t, n) {
                        var a, o, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, a = t.replace(/\s/g, ""), o = {
                                        otp: a
                                    }, e.next = 5, r.post("twofactorauth/migration/otp/".concat(n, "/verify"), JSON.stringify(o), {
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 5:
                                    if (204 !== (i = e.sent).status) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        ok: i.ok,
                                        error: !1
                                    });
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", {
                                        ok: !1,
                                        error: !0
                                    });
                                case 13:
                                    return e.abrupt("return", {
                                        ok: !1,
                                        error: !1
                                    });
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    }))), function(t, r) {
                        return e.apply(this, arguments)
                    })
                }
            }

            function w(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(r), !0).forEach((function(t) {
                        k(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function k(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function O(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
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
                        i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : P(Reflect)) && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                    else
                        for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
                    return o > 3 && i && Object.defineProperty(t, r, i), i
                },
                C = Symbol("accountSecurityStoreSymbol"),
                x = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.api = t, this.state = {
                        ok: !1,
                        error: !1,
                        networkError: !1,
                        data: null,
                        hashedEmail: ""
                    }, this.sendEmail = function() {
                        var e, t = (e = regeneratorRuntime.mark((function e(t) {
                            var n, a, o, i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.setState({
                                            error: !1,
                                            networkError: !1
                                        }), e.next = 3, r.api.getSecurityCode(t);
                                    case 3:
                                        n = e.sent, a = n.data, o = n.error, i = n.ok, r.setState({
                                            networkError: o,
                                            error: !i,
                                            ok: i,
                                            data: a
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    O(o, n, a, i, c, "next", e)
                                }

                                function c(e) {
                                    O(o, n, a, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), this.setState = function(e) {
                        r.state = S(S({}, r.state), e)
                    }
                };
            j([b.LO], x.prototype, "state", void 0), j([b.aD], x.prototype, "setState", void 0);
            var T = new x(E());

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach((function(t) {
                        A(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function A(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function I(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var L = function(e, t, r, n) {
                    var a, o = arguments.length,
                        i = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : D(Reflect)) && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
                    else
                        for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, r, i) : a(t, r)) || i);
                    return o > 3 && i && Object.defineProperty(t, r, i), i
                },
                F = Symbol("accountSecurityFormStoreSymbol"),
                V = function e(t) {
                    var r = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.api = t, this.state = {
                        ok: !1,
                        error: !1,
                        networkError: !1,
                        isValidCode: !1,
                        submittingSecurityCode: !1
                    }, this.submitCode = function() {
                        var e, t = (e = regeneratorRuntime.mark((function e(t, n) {
                            var a, o, i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r.setState({
                                            error: !1,
                                            networkError: !1,
                                            submittingSecurityCode: !0
                                        }), e.next = 3, r.api.submitSecurityCode(t.trim(), n);
                                    case 3:
                                        a = e.sent, o = a.error, (i = a.ok) && localStorage.setItem("otpId", n), r.setState({
                                            isValidCode: i,
                                            networkError: o,
                                            submittingSecurityCode: !1,
                                            error: !i
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    I(o, n, a, i, c, "next", e)
                                }

                                function c(e) {
                                    I(o, n, a, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e, r) {
                            return t.apply(this, arguments)
                        }
                    }(), this.setState = function(e) {
                        r.state = R(R({}, r.state), e)
                    }
                };
            L([b.LO], V.prototype, "state", void 0), L([b.aD], V.prototype, "setState", void 0);
            var Z = new V(E()),
                M = r(5487),
                Q = r(8369),
                G = r(9928);

            function B(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
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
                        for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Y(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var q = function(e) {
                var t = e.onSubmit,
                    r = e.isValidCode,
                    a = e.submittingSecurityCode,
                    o = W(n.useState(!1), 2),
                    i = o[0],
                    c = o[1],
                    l = n.useCallback((function(e) {
                        var t = e.keyCode;
                        c(8 === t || 46 === t)
                    }), []),
                    u = (0, G.cI)(),
                    s = u.handleSubmit,
                    m = u.register,
                    f = u.errors,
                    d = W(n.useState(""), 2),
                    b = d[0],
                    v = d[1];
                n.useEffect((function() {
                    return document.addEventListener("keydown", l),
                        function() {
                            document.removeEventListener("keydown", l)
                        }
                }), []);
                (0, p.useTranslation)().t;
                var h = function() {
                    var e, t = (e = regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    v(i ? t : t.replace(/\W/gi, "").replace(/(.{3})/g, "$1 "));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })), function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(n, a) {
                            var o = e.apply(t, r);

                            function i(e) {
                                B(o, n, a, i, c, "next", e)
                            }

                            function c(e) {
                                B(o, n, a, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    });
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }();
                return (0, M.SZ)((function() {
                    return n.createElement("form", {
                        onSubmit: s(t)
                    }, n.createElement("div", {
                        className: "form-group pb-2 mb-3 mb-sm-3",
                        "data-testid": "code-form"
                    }, n.createElement(y.Qy, {
                        display: "block",
                        className: "text-black",
                        align: "left",
                        htmlFor: "securityCode"
                    }, n.createElement(p.T, null, "Confirmation code")), n.createElement(y.II, {
                        name: "securityCode",
                        onChange: function(e) {
                            return h(e.target.value)
                        },
                        value: b,
                        inputProps: {
                            required: !0,
                            "aria-describedby": "securityCodeError",
                            "data-testid": "security-code-input",
                            placeholder: "000 000 0"
                        },
                        inputRef: m({
                            required: !1
                        }),
                        error: f.securityCode,
                        errorId: "securityCodeError"
                    }), r && "" !== b && n.createElement(y.nv, {
                        color: "danger",
                        align: "left",
                        className: "mb-0 mt-2"
                    }, n.createElement(p.T, null, "Invalid code. Please re-enter and try again")), r && "" === b && n.createElement(y.nv, {
                        color: "danger",
                        align: "left",
                        className: "mb-0 mt-2"
                    }, n.createElement(p.T, null, "Security code is required"))), n.createElement(y.zx, {
                        colorVariant: "primary",
                        className: "btn-block",
                        type: "submit",
                        "data-testid": "accountSecuritySubmitButton",
                        disabled: a
                    }, n.createElement(p.T, null, "Submit and start migration")))
                }))
            };
            var $ = function(e) {
                return function(e) {
                    if (null == e) throw new TypeError("Cannot destructure undefined")
                }(e), (0, M.SZ)((function() {
                    return n.createElement(y.Rx, {
                        className: "text-center",
                        "data-testid": "account-security-view"
                    }, n.createElement(y.Zb, {
                        bgColor: "white",
                        className: "px-3 px-sm-4 py-4"
                    }, n.createElement(y.eW, null, n.createElement("h1", {
                        className: "font-mc-ten mb-5"
                    }, n.createElement(p.T, null, "Please try again")), n.createElement(y.SK, {
                        className: "text-left m-4 p-xl-1"
                    }, n.createElement(p.T, null, "You waited too long, so the request timed out. Please go back and request a new confirmation code.")), n.createElement(y.Qj, {
                        "data-aem-contentname": "Profile linkbutton",
                        href: m["url.securityView"],
                        colorVariant: "secondary",
                        className: "btn-block mt-3 mb-5"
                    }, n.createElement(p.T, null, "Go back")))))
                }))
            };

            function K(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return z(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var J = function(e) {
                var t = e.load,
                    r = e.ProfileName,
                    a = e.otpId,
                    o = e.email,
                    i = (0, v.oR)(F),
                    c = (0, v.oR)(C),
                    l = _((0, n.useState)(!1), 2),
                    u = l[0],
                    s = l[1],
                    f = _((0, n.useState)(0), 2),
                    d = f[0],
                    b = f[1],
                    h = _((0, n.useState)(!1), 2),
                    g = h[0],
                    E = h[1],
                    w = function() {
                        var e, t = (e = regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        i.submitCode(t.securityCode, a);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })), function() {
                            var t = this,
                                r = arguments;
                            return new Promise((function(n, a) {
                                var o = e.apply(t, r);

                                function i(e) {
                                    K(o, n, a, i, c, "next", e)
                                }

                                function c(e) {
                                    K(o, n, a, i, c, "throw", e)
                                }
                                i(void 0)
                            }))
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }();
                n.useEffect((function() {
                    setTimeout((function() {
                        E(!0)
                    }), 6e5)
                }), []);
                return (0, M.SZ)((function() {
                    var e = i.state,
                        a = e.error,
                        l = e.isValidCode,
                        f = e.submittingSecurityCode,
                        v = c.state.ok;
                    return l ? n.createElement(Q.MY, {
                        profileName: r,
                        load: t
                    }) : g ? n.createElement($, null) : n.createElement(y.Rx, {
                        className: "text-center",
                        "data-testid": "account-security-view"
                    }, n.createElement(y.Zb, {
                        bgColor: "white",
                        className: "px-3 px-sm-4 py-4"
                    }, n.createElement(y.eW, null, n.createElement("h1", {
                        className: "font-mc-ten"
                    }, n.createElement(p.T, null, "Enter Your Code")), n.createElement(y.SK, {
                        className: "text-left"
                    }, n.createElement(p.T, null, "We just sent you an email with a seven-character confirmation code. Please enter it below.")), n.createElement(q, {
                        onSubmit: w,
                        isValidCode: a,
                        submittingSecurityCode: f
                    }), n.createElement(y.Qj, {
                        "data-aem-contentname": "Profile linkbutton",
                        href: m["url.profile"],
                        colorVariant: "secondary",
                        className: "btn-block mt-3"
                    }, n.createElement(p.T, null, "Go back to profile")), n.createElement(y.nv, {
                        align: "left",
                        className: "mb-0 mt-3"
                    }, n.createElement(p.T, null, "Didn't get your code?"), " ", n.createElement("button", {
                        className: "btn btn-link",
                        "data-aem-contentname": "Re-send email",
                        "data-testid": "re-send-email",
                        onClick: function() {
                            return b(d + 1), s(!0), void c.sendEmail(o)
                        }
                    }, n.createElement(p.T, null, "Resend email"))), u && v && d < 3 && n.createElement("p", {
                        role: "alert",
                        className: "mb-0 mt-2 alert alert-success"
                    }, n.createElement(p.T, null, "We've dispatched a new verification e-mail to your inbox.")), u && !v && n.createElement("p", {
                        className: "alert alert-danger",
                        role: "alert"
                    }, "Error while resending e-mail. Please try again later."), u && v && d >= 3 && n.createElement("p", {
                        className: "alert alert-danger",
                        role: "alert"
                    }, n.createElement(p.T, null, "You have requested 3 new emails, in some cases it may take up to 20 minutes for your provider to fetch emails. Please be patient, and remember to check your spam folder. ")))))
                }))
            };

            function U(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
            }
            var H = function(e) {
                    var t = e.upsellAvailabilityStore,
                        r = void 0 === t ? Q.Es : t;
                    n.useEffect((function() {
                        r.fetchAvailability()
                    }), [r]);
                    var a = (0, p.useTranslation)().t,
                        o = (0, v.oR)(C),
                        i = (0, v.oR)(v.sw),
                        c = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            o.sendEmail("");
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    r = arguments;
                                return new Promise((function(n, a) {
                                    var o = e.apply(t, r);

                                    function i(e) {
                                        U(o, n, a, i, c, "next", e)
                                    }

                                    function c(e) {
                                        U(o, n, a, i, c, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return (0, M.SZ)((function() {
                        var e = r.state,
                            t = e.fetching,
                            l = e.available,
                            u = e.error,
                            s = o.state,
                            f = s.ok,
                            d = s.error,
                            b = s.networkError,
                            v = s.data,
                            h = i.state,
                            g = h.profile,
                            E = h.fetching;
                        return t || E ? n.createElement(y.Si, null, n.createElement(y.aN, null, n.createElement(p.T, null, "Loading..."))) : l ? f ? n.createElement(J, {
                            load: !0,
                            ProfileName: g ? g.name : "",
                            otpId: null == v ? void 0 : v.otpId
                        }) : d || b || u ? n.createElement(Q.o6, {
                            "data-aem-contentname": "ErrorView buttons",
                            headingText: a("Ohhh no...."),
                            bodyText: n.createElement(p.T, {
                                placeholders: [m["url.supportCenter"]],
                                isHTML: !0
                            }, "Something went wrong... Please try again or <a href='%1$s'>contact support</a> if the problem persists."),
                            primaryButtonLabel: a("TRY AGAIN"),
                            onClick: c,
                            secondaryButtonLabel: a("GO BACK TO PROFILE"),
                            redirectUrl: m["url.profile"]
                        }) : n.createElement(n.Fragment, null, n.createElement(y.Zb, {
                            bgColor: "white",
                            className: "p-sm-4 p-4",
                            "data-testid": "account-security-info-page"
                        }, n.createElement(y.eW, {
                            className: "text-center"
                        }, n.createElement("h1", {
                            className: "font-mc-ten"
                        }, n.createElement(p.T, null, "Let’s Make sure it’s really you")), n.createElement(y.SK, {
                            className: "text-left"
                        }, n.createElement(p.T, null, "Before we migrate your account, we’ll need to verify your email by sending a confirmation code.")), n.createElement(y.zx, {
                            colorVariant: "primary",
                            block: !0,
                            className: "mb-2 d-md-block",
                            onClick: c
                        }, n.createElement(p.T, null, "Get Code")), n.createElement(y.Qj, {
                            href: m["url.profile"],
                            colorVariant: "secondary",
                            block: !0,
                            className: "mb-2"
                        }, n.createElement(p.T, null, "Go back to profile"))))) : (window.location.replace(m["url.profile"]), null)
                    }))
                },
                X = function() {
                    return n.createElement(n.Fragment, null, n.createElement("div", {
                        className: "text-right"
                    }, n.createElement("a", {
                        href: m["url.forgotEmail"],
                        "data-testid": "forgot-email-link"
                    }, n.createElement(p.T, null, "Forgot your email? Contact us")), "  ", n.createElement(y.JO, {
                        name: "line-vector-export"
                    })))
                };

            function ee(e, t, r, n, a, o, i) {
                try {
                    var c = e[o](i),
                        l = c.value
                } catch (e) {
                    return void r(e)
                }
                c.done ? t(l) : Promise.resolve(l).then(n, a)
            }

            function te(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        a = !0, o = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return re(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return re(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function re(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            var ne = function(e) {
                    var t = e.upsellAvailabilityStore,
                        r = void 0 === t ? Q.Es : t;
                    n.useEffect((function() {
                        r.fetchAvailability()
                    }), [r]);
                    var a = (0, p.useTranslation)().t,
                        o = (0, v.oR)(C),
                        i = (0, v.oR)(v.sw),
                        c = te(n.useState(""), 2),
                        l = c[0],
                        u = c[1],
                        s = te(n.useState(!1), 2),
                        f = s[0],
                        d = s[1],
                        b = function() {
                            var e, t = (e = regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            "" != l ? (d(!1), o.sendEmail(l)) : d(!0);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var t = this,
                                    r = arguments;
                                return new Promise((function(n, a) {
                                    var o = e.apply(t, r);

                                    function i(e) {
                                        ee(o, n, a, i, c, "next", e)
                                    }

                                    function c(e) {
                                        ee(o, n, a, i, c, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }();
                    return (0, M.SZ)((function() {
                        var e = r.state,
                            t = e.fetching,
                            c = e.available,
                            s = e.error,
                            d = o.state,
                            v = d.ok,
                            h = d.error,
                            g = d.networkError,
                            E = d.data,
                            w = i.state,
                            S = w.profile,
                            k = w.fetching;
                        return t || k ? n.createElement(y.Si, null, n.createElement(y.aN, null, n.createElement(p.T, null, "Loading..."))) : c ? v ? n.createElement(J, {
                            load: !0,
                            ProfileName: S ? S.name : "",
                            otpId: null == E ? void 0 : E.otpId,
                            email: l
                        }) : n.createElement(n.Fragment, null, n.createElement(y.Zb, {
                            bgColor: "white",
                            className: "p-sm-4 p-4",
                            "data-testid": "account-security-info-page"
                        }, n.createElement(y.eW, {
                            className: "text-center"
                        }, n.createElement("h1", {
                            className: "font-mc-ten"
                        }, n.createElement(p.T, null, "Let’s Make sure it’s really you")), n.createElement(y.SK, {
                            className: "text-left text-small"
                        }, n.createElement(p.T, null, "Before we migrate your account, we’ll need to verify your email by sending a confirmation code. Please enter the email you used when you created your account.")), n.createElement("div", {
                            className: "form-group pb-2 mb-3 mb-sm-3",
                            "data-testid": "code-form"
                        }, n.createElement(y.Qy, {
                            display: "block",
                            className: "text-black",
                            align: "left",
                            htmlFor: "securityCode"
                        }, n.createElement(p.T, null, "Verify Email")), n.createElement("input", {
                            name: "email",
                            value: l,
                            onChange: function(e) {
                                return u(e.target.value)
                            },
                            "aria-label": a("Email"),
                            className: f || h || g || s ? "form-control border-danger" : "form-control"
                        }), (f || h || g || s) && n.createElement(y.nv, {
                            color: "danger",
                            align: "left",
                            className: "mb-0 mt-2"
                        }, n.createElement(p.T, null, "Invalid email or username")), n.createElement(X, null)), n.createElement(y.zx, {
                            colorVariant: "primary",
                            block: !0,
                            className: "mb-2 d-md-block",
                            onClick: b
                        }, n.createElement(p.T, null, "Get Code")), n.createElement(y.Qj, {
                            href: m["url.profile"],
                            colorVariant: "secondary",
                            block: !0,
                            className: "mb-2"
                        }, n.createElement(p.T, null, "Go back to profile")), n.createElement("div", {
                            className: "mt-2 text-black mb-0 p-sm-2 p-2 center"
                        }, n.createElement(p.T, {
                            "data-aem-contentname": "FAQ Link",
                            placeholders: [m["url.accountMigrationFAQ"]],
                            isHTML: !0
                        }, "Having an issue? <a href='%1$s'> Check out our FAQ!</a>"))))) : (window.location.replace(m["url.profile"]), null)
                    }))
                },
                ae = function() {
                    (0, p.useTranslation)().t;
                    var e = (0, v.oR)(v.mR);
                    return (0, M.SZ)((function() {
                        var t = e.state.userDetails;
                        return null != t ? t.hashed ? n.createElement(ne, null) : n.createElement(H, null) : n.createElement(y.Si, null, n.createElement(y.aN, null, n.createElement(p.T, null, "Loading...")))
                    }))
                },
                oe = function() {
                    return n.createElement(y.Si, null, n.createElement(y.aN, null, n.createElement(p.T, null, "Validating access token...")))
                },
                ie = function() {
                    return n.createElement(y.Si, null, n.createElement(y.aN, null, n.createElement(p.T, null, "Not logged in, sending you to login page!")))
                },
                ce = function(e) {
                    var t = e.postLogoutFn,
                        r = (0, d.Ir)(),
                        a = r.validating,
                        o = r.valid,
                        i = r.error,
                        c = r.retry,
                        l = (0, p.useTranslation)().t;
                    return n.useEffect((function() {
                        if (!a && !o) {
                            var e = window.location,
                                r = e.pathname,
                                n = e.search,
                                i = e.hash;
                            t("".concat(r).concat(n).concat(i))
                        }
                    }), [t, a, o]), a ? n.createElement(oe, null) : i ? n.createElement(y.B6, {
                        retry: c,
                        validating: a,
                        buttonLable: l("Reload"),
                        offlineMessage: l("You seem to be offline, press reload to try again.")
                    }) : o ? n.createElement(v.n7, {
                        stores: [
                            [C, T],
                            [F, Z],
                            [v.sw, v.Yk.getInstance()],
                            [v.mR, v._c.getInstance()]
                        ]
                    }, n.createElement(ae, null)) : n.createElement(ie, null)
                },
                le = function(e) {
                    var t = e.postLogoutFn,
                        r = m.translationPath,
                        o = m.language,
                        i = m.telemetryFn,
                        c = (0, a.t)(r, o);
                    return c && n.createElement(p.TranslationProvider, {
                        translation: c
                    }, n.createElement(f.P2, {
                        telemetryFn: i,
                        name: "accountSecurityInfo"
                    }, n.createElement(d.hz, null, n.createElement(ce, {
                        postLogoutFn: t
                    }))))
                }
        }
    }
]);
//# sourceMappingURL=@mojang~accountSecurity.chunk.91dd4bcdab3672a04d29.js.map