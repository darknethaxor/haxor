(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [25], {
        4807: function(e, r, t) {
            "use strict";
            t.d(r, {
                I: function() {
                    return Xe
                }
            });
            var n = t(8709),
                u = t(7656),
                a = t(6089),
                i = t(6418),
                c = t(9474);

            function o(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function s(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? o(Object(t), !0).forEach((function(r) {
                        f(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function f(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }
            var l = s({
                    translationPath: c.iZ,
                    "url.resetSecurityQuestions": c.iZ,
                    "url.supportCenter": c.iZ
                }, c.gZ),
                p = s(s(s({}, l), c.Di), window.answerSecurityQuestionsConfig),
                d = (0, c.Gu)(p, "answerSecurityQuestionsConfig"),
                m = t(2374),
                v = t(7431);

            function b(e, r, t, n, u, a, i) {
                try {
                    var c = e[a](i),
                        o = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? r(o) : Promise.resolve(o).then(n, u)
            }

            function h(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, u) {
                        var a = e.apply(r, t);

                        function i(e) {
                            b(a, n, u, i, c, "next", e)
                        }

                        function c(e) {
                            b(a, n, u, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }
            var g = t(7503),
                y = t(5934);

            function w(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function O(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? w(Object(t), !0).forEach((function(r) {
                        x(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function x(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function k(e, r, t, n, u, a, i) {
                try {
                    var c = e[a](i),
                        o = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? r(o) : Promise.resolve(o).then(n, u)
            }

            function E(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, u) {
                        var a = e.apply(r, t);

                        function i(e) {
                            k(a, n, u, i, c, "next", e)
                        }

                        function c(e) {
                            k(a, n, u, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function S(e, r) {
                for (var t = 0; t < r.length; t++) {
                    var n = r[t];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function j(e) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var C = function(e, r, t, n) {
                    var u, a = arguments.length,
                        i = a < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
                    if ("object" === ("undefined" == typeof Reflect ? "undefined" : j(Reflect)) && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, r, t, n);
                    else
                        for (var c = e.length - 1; c >= 0; c--)(u = e[c]) && (i = (a < 3 ? u(i) : a > 3 ? u(r, t, i) : u(r, t)) || i);
                    return a > 3 && i && Object.defineProperty(r, t, i), i
                },
                P = Symbol("answerSecurityQuestionsStoreSymbol"),
                R = function() {
                    function e(r, t) {
                        var n = this;
                        ! function(e, r) {
                            if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.api = r, this.secureLocationStore = t, this.state = {
                            challenges: null,
                            securityChallengeError: {
                                error: !1,
                                errorMessage: null
                            },
                            fetchingChallenges: !1,
                            ok: !1,
                            submittingAnswers: !1
                        }, this.fetchChallenges = E(regeneratorRuntime.mark((function e() {
                            var r, t, u, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!n.state.fetchingChallenges) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return n.setState({
                                            fetchingChallenges: !0
                                        }), e.next = 5, n.api.fetchChallenges();
                                    case 5:
                                        r = e.sent, t = r.data, u = r.ok, a = r.securityChallengeError, n.setState({
                                            fetchingChallenges: !1,
                                            ok: u,
                                            challenges: t,
                                            securityChallengeError: a
                                        }), a.error && n.secureLocationStore.fetchSecureLocation();
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), this.submitChallengeAnswers = function() {
                            var e = E(regeneratorRuntime.mark((function e(r) {
                                var t, u, a, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n.setState({
                                                submittingAnswers: !0
                                            }), e.next = 3, n.api.submitChallengeResponse(r);
                                        case 3:
                                            t = e.sent, u = t.data, a = t.ok, i = t.securityChallengeError, n.setState({
                                                securityChallengeError: {
                                                    error: i.error,
                                                    errorMessage: u ? u.errorMessage : null
                                                },
                                                submittingAnswers: !1,
                                                ok: a
                                            }), (a || i.error) && n.secureLocationStore.fetchSecureLocation();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }(), this.setState = function(e) {
                            n.state = O(O({}, n.state), e)
                        }, this.fetchChallenges()
                    }
                    var r, t, n;
                    return r = e, n = [{
                        key: "getInstance",
                        value: function() {
                            return e.instance || (e.instance = new e(function(e) {
                                var r, t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v.nP;
                                return {
                                    fetchChallenges: (t = h(regeneratorRuntime.mark((function r() {
                                        var t, u;
                                        return regeneratorRuntime.wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return r.next = 2, n.getToken();
                                                case 2:
                                                    return t = r.sent, r.prev = 3, r.next = 6, e.get("user/security/challenges", {
                                                        headers: {
                                                            Authorization: "Bearer ".concat(t || "")
                                                        }
                                                    });
                                                case 6:
                                                    if (!(u = r.sent).ok) {
                                                        r.next = 13;
                                                        break
                                                    }
                                                    return r.next = 10, u.json();
                                                case 10:
                                                    return r.t0 = r.sent, r.t1 = {
                                                        error: !1,
                                                        errorMessage: null
                                                    }, r.abrupt("return", {
                                                        data: r.t0,
                                                        securityChallengeError: r.t1,
                                                        ok: !0
                                                    });
                                                case 13:
                                                    r.next = 18;
                                                    break;
                                                case 15:
                                                    return r.prev = 15, r.t2 = r.catch(3), r.abrupt("return", {
                                                        data: null,
                                                        ok: !1,
                                                        securityChallengeError: {
                                                            error: !0,
                                                            errorMessage: null
                                                        }
                                                    });
                                                case 18:
                                                    return r.abrupt("return", {
                                                        data: null,
                                                        ok: !1,
                                                        securityChallengeError: {
                                                            error: !1,
                                                            errorMessage: null
                                                        }
                                                    });
                                                case 19:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r, null, [
                                            [3, 15]
                                        ])
                                    }))), function() {
                                        return t.apply(this, arguments)
                                    }),
                                    submitChallengeResponse: (r = h(regeneratorRuntime.mark((function r(t) {
                                        var u, a;
                                        return regeneratorRuntime.wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    return r.next = 2, n.getToken();
                                                case 2:
                                                    return u = r.sent, r.prev = 3, r.next = 6, e.post("user/security/location", JSON.stringify(t), {
                                                        headers: {
                                                            Authorization: "Bearer ".concat(u || ""),
                                                            "Content-Type": "application/json"
                                                        }
                                                    });
                                                case 6:
                                                    if (204 !== (a = r.sent).status) {
                                                        r.next = 11;
                                                        break
                                                    }
                                                    return r.abrupt("return", {
                                                        data: null,
                                                        ok: !0,
                                                        securityChallengeError: {
                                                            error: !1,
                                                            errorMessage: null
                                                        }
                                                    });
                                                case 11:
                                                    return r.next = 13, a.json();
                                                case 13:
                                                    return r.t0 = r.sent, r.t1 = {
                                                        error: !1,
                                                        errorMessage: null
                                                    }, r.abrupt("return", {
                                                        data: r.t0,
                                                        ok: !1,
                                                        securityChallengeError: r.t1
                                                    });
                                                case 16:
                                                    r.next = 21;
                                                    break;
                                                case 18:
                                                    return r.prev = 18, r.t2 = r.catch(3), r.abrupt("return", {
                                                        data: null,
                                                        ok: !1,
                                                        securityChallengeError: {
                                                            error: !0,
                                                            errorMessage: null
                                                        }
                                                    });
                                                case 21:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r, null, [
                                            [3, 18]
                                        ])
                                    }))), function(e) {
                                        return r.apply(this, arguments)
                                    })
                                }
                            }(g.uW), y.eU.getInstance())), e.instance
                        }
                    }], (t = null) && S(r.prototype, t), n && S(r, n), e
                }();
            C([m.LO], R.prototype, "state", void 0), C([m.aD], R.prototype, "setState", void 0);
            var T = t(5487),
                L = t(16);

            function M(e, r, t, n, u, a, i) {
                try {
                    var c = e[a](i),
                        o = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? r(o) : Promise.resolve(o).then(n, u)
            }

            function A(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, u) {
                        var a = e.apply(r, t);

                        function i(e) {
                            M(a, n, u, i, c, "next", e)
                        }

                        function c(e) {
                            M(a, n, u, i, c, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function V(e) {
                return function(e) {
                    if (Array.isArray(e)) return N(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || I(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function q(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var t = [],
                        n = !0,
                        u = !1,
                        a = void 0;
                    try {
                        for (var i, c = e[Symbol.iterator](); !(n = (i = c.next()).done) && (t.push(i.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        u = !0, a = e
                    } finally {
                        try {
                            n || null == c.return || c.return()
                        } finally {
                            if (u) throw a
                        }
                    }
                    return t
                }(e, r) || I(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, r) {
                if (e) {
                    if ("string" == typeof e) return N(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? N(e, r) : void 0
                }
            }

            function N(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var F = function(e) {
                    return "checkbox" === e
                },
                Z = "onBlur",
                B = "onChange",
                W = "onSubmit",
                Q = "radio",
                $ = "required",
                U = "pattern",
                _ = "undefined",
                H = "blur",
                G = "change",
                J = "input";

            function K(e) {
                var r = e.field,
                    t = e.validateAndStateUpdate,
                    n = e.isRadio,
                    u = r.ref;
                u.addEventListener && (u.addEventListener(F(u.type) || n ? G : J, t), u.addEventListener(H, t))
            }
            var Y = function(e) {
                    return void 0 === e
                },
                X = function(e) {
                    return null === e || Y(e)
                },
                ee = function(e) {
                    return Array.isArray(e)
                },
                re = function(e) {
                    return !X(e) && !ee(e) && "object" === z(e)
                },
                te = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                ne = /^\w*$/,
                ue = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                ae = /\\(\\)?/g,
                ie = /^(?:0|[1-9]\d*)$/;

            function ce(e) {
                return ie.test(e) && e > -1
            }

            function oe(e, r, t) {
                for (var n, u = -1, a = function(e) {
                        return !ee(e) && (ne.test(e) || !te.test(e))
                    }(r) ? [r] : (n = [], r.replace(ue, (function(e, r, t, u) {
                        n.push(t ? u.replace(ae, "$1") : r || e)
                    })), n), i = a.length, c = i - 1; ++u < i;) {
                    var o = a[u],
                        s = t;
                    if (u !== c) {
                        var f = e[o];
                        s = re(f) || ee(f) ? f : ce(a[u + 1]) ? [] : {}
                    }
                    e[o] = s, e = e[o]
                }
                return e
            }
            var se = function(e) {
                    return Object.entries(e).reduce((function(e, r) {
                        var t = q(r, 2),
                            n = t[0],
                            u = t[1];
                        return n.match(/\[.+\]/gi) || n.indexOf(".") > 0 ? (oe(e, n, u), e) : Object.assign(Object.assign({}, e), D({}, n, u))
                    }), {})
                },
                fe = function(e, r) {
                    e.removeEventListener && (e.removeEventListener(J, r), e.removeEventListener(G, r), e.removeEventListener(H, r))
                },
                le = function(e) {
                    return e === Q
                };

            function pe(e) {
                return !e || e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE && pe(e.parentNode)
            }

            function de(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (t) {
                    var u = t.ref,
                        a = t.mutationWatcher,
                        i = t.options;
                    if (u && u.type) {
                        var c = u.name,
                            o = u.type;
                        le(o) && i ? (i.forEach((function(e, t) {
                            var u = e.ref;
                            (i[t] && pe(u) || n) && (fe(i[t], r), (i[t].mutationWatcher || {
                                disconnect: function() {}
                            }).disconnect(), i.splice(t, 1))
                        })), i.length || delete e[c]) : (pe(u) || n) && (fe(u, r), a && a.disconnect(), delete e[c])
                    }
                }
            }
            var me = {
                    isValid: !1,
                    value: ""
                },
                ve = function(e) {
                    return ee(e) ? e.reduce((function(e, r) {
                        var t = r.ref,
                            n = t.checked,
                            u = t.value;
                        return n ? {
                            isValid: !0,
                            value: u
                        } : e
                    }), me) : me
                },
                be = function(e) {
                    return "select-multiple" === e
                };

            function he(e, r) {
                var t = r.type,
                    n = r.name,
                    u = r.options,
                    a = r.checked,
                    i = r.value,
                    c = r.files;
                if ("file" === t) return c;
                if (le(t)) {
                    var o = e[n];
                    return o ? ve(o.options).value : ""
                }
                return be(t) ? function(e) {
                    return V(e).filter((function(e) {
                        return e.selected
                    })).map((function(e) {
                        return e.value
                    }))
                }(u) : F(t) ? !!a && (!r.attributes || !r.attributes.value || (!(!Y(i) && "" !== i) || i)) : i
            }
            var ge = function(e) {
                    return Object.values(e).reduce((function(r, t) {
                        var n = t.ref,
                            u = t.ref.name;
                        return Object.assign(Object.assign({}, r), D({}, u, he(e, n)))
                    }), {})
                },
                ye = function(e) {
                    return re(e) && 0 === Object.keys(e).length
                },
                we = function(e, r, t) {
                    return re(e) && e.type === r && e.message === t
                };

            function Oe(e) {
                var r = e.errors,
                    t = e.name,
                    n = e.error,
                    u = e.validFields,
                    a = e.fieldsWithValidation,
                    i = e.schemaErrors,
                    c = ye(n),
                    o = ye(r),
                    s = n[t],
                    f = r[t];
                return !(c && u.has(t) || f && f.isManual) && (!!(o !== c || !o && !f || c && a.has(t) && !u.has(t) || !Y(i) && ye(i) !== o) || s && !we(f, s.type, s.message))
            }
            var xe = function(e) {
                    return e instanceof RegExp
                },
                ke = function(e) {
                    return {
                        value: re(e) && !xe(e) ? e.value : e,
                        message: re(e) && !xe(e) ? e.message : ""
                    }
                },
                Ee = function(e) {
                    return "string" == typeof e
                },
                Se = function(e, r, t) {
                    e && Ee(t) && r.setCustomValidity(t)
                },
                je = function(e) {
                    return "function" == typeof e
                },
                Ce = function(e) {
                    return "boolean" == typeof e
                };

            function Pe(e, r, t) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "validate",
                    u = Ee(e);
                if (u || Ce(e) && !e) {
                    var a = u ? e : "",
                        i = {
                            type: n,
                            message: a,
                            ref: r
                        };
                    return t(a), i
                }
            }
            var Re = function() {
                    var e = A(regeneratorRuntime.mark((function e(r, t, n) {
                        var u, a, i, c, o, s, f, l, p, d, m, v, b, h, g, y, w, O, x, k, E, S, j, C, P, R, T, L, M, V, D, I, N, z, Z, B, W, _, H, G, J, K, Y, ee, te, ne, ue;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (u = r.ref, a = r.ref, i = a.type, c = a.value, o = a.name, s = a.checked, f = r.options, l = r.required, p = r.maxLength, d = r.minLength, m = r.min, v = r.max, b = r.pattern, h = r.validate, g = {}, y = le(i), w = F(i), O = Se.bind(null, n, u), x = o, !l || !(w && !s || !w && !y && "" === c || y && !ve(t[x].options).isValid || i !== Q && X(c))) {
                                        e.next = 10;
                                        break
                                    }
                                    return g[x] = {
                                        type: $,
                                        message: Ee(l) ? l : "",
                                        ref: y ? t[x].options[0].ref : u
                                    }, O(l), e.abrupt("return", g);
                                case 10:
                                    if (X(m) && X(v)) {
                                        e.next = 19;
                                        break
                                    }
                                    if (S = ke(v), j = S.value, C = S.message, P = ke(m), R = P.value, T = P.message, "number" === i ? (L = parseFloat(c), X(j) || (k = L > j), X(R) || (E = L < R)) : (Ee(j) && (k = new Date(c) > new Date(j)), Ee(R) && (E = new Date(c) < new Date(R))), !k && !E) {
                                        e.next = 19;
                                        break
                                    }
                                    return M = k ? C : T, g[x] = {
                                        type: k ? "max" : "min",
                                        message: M,
                                        ref: u
                                    }, O(M), e.abrupt("return", g);
                                case 19:
                                    if (!p && !d || !Ee(c)) {
                                        e.next = 30;
                                        break
                                    }
                                    if (V = ke(p), D = V.value, I = V.message, N = ke(d), z = N.value, Z = N.message, B = c.toString().length, _ = d && B < z, !(W = p && B > D) && !_) {
                                        e.next = 30;
                                        break
                                    }
                                    return H = W ? I : Z, g[x] = {
                                        type: W ? "maxLength" : "minLength",
                                        message: H,
                                        ref: u
                                    }, O(H), e.abrupt("return", g);
                                case 30:
                                    if (!b) {
                                        e.next = 36;
                                        break
                                    }
                                    if (G = ke(b), J = G.value, K = G.message, !xe(J) || J.test(c)) {
                                        e.next = 36;
                                        break
                                    }
                                    return g[x] = {
                                        type: U,
                                        message: K,
                                        ref: u
                                    }, O(K), e.abrupt("return", g);
                                case 36:
                                    if (!h) {
                                        e.next = 56;
                                        break
                                    }
                                    if (Y = he(t, u), ee = y && f ? f[0].ref : u, !je(h)) {
                                        e.next = 49;
                                        break
                                    }
                                    return e.next = 42, h(Y);
                                case 42:
                                    if (te = e.sent, !(ne = Pe(te, ee, O))) {
                                        e.next = 47;
                                        break
                                    }
                                    return g[x] = ne, e.abrupt("return", g);
                                case 47:
                                    e.next = 56;
                                    break;
                                case 49:
                                    if (!re(h)) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.next = 52, new Promise((function(e) {
                                        var r = Object.entries(h);
                                        r.reduce(function() {
                                            var t = A(regeneratorRuntime.mark((function t(n, u, a) {
                                                var i, c, o, s, f, l;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return i = q(u, 2), c = i[0], o = i[1], t.t0 = ye, t.next = 4, n;
                                                        case 4:
                                                            if (t.t1 = t.sent, (0, t.t0)(t.t1)) {
                                                                t.next = 7;
                                                                break
                                                            }
                                                            return t.abrupt("return", e(n));
                                                        case 7:
                                                            if (s = r.length - 1 === a, !je(o)) {
                                                                t.next = 15;
                                                                break
                                                            }
                                                            return t.next = 11, o(Y);
                                                        case 11:
                                                            if (f = t.sent, !(l = Pe(f, ee, O, c))) {
                                                                t.next = 15;
                                                                break
                                                            }
                                                            return t.abrupt("return", s ? e(l) : l);
                                                        case 15:
                                                            return t.abrupt("return", s ? e(n) : n);
                                                        case 16:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, r, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }(), {})
                                    }));
                                case 52:
                                    if (ue = e.sent, ye(ue)) {
                                        e.next = 56;
                                        break
                                    }
                                    return g[x] = Object.assign({
                                        ref: ee
                                    }, ue), e.abrupt("return", g);
                                case 56:
                                    return n && u.setCustomValidity(""), e.abrupt("return", g);
                                case 58:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r, t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Te = function(e) {
                    return e.inner.length ? e.inner.reduce((function(e, r) {
                        var t = r.path,
                            n = r.message,
                            u = r.type;
                        return Object.assign(Object.assign({}, e), D({}, t, {
                            message: n,
                            ref: {},
                            type: u
                        }))
                    }), {}) : D({}, e.path, {
                        message: e.message,
                        ref: {},
                        type: e.type
                    })
                };

            function Le(e, r, t) {
                return Me.apply(this, arguments)
            }

            function Me() {
                return (Me = A(regeneratorRuntime.mark((function e(r, t, n) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, r.validate(n, t);
                            case 3:
                                return e.t0 = e.sent, e.t1 = {}, e.abrupt("return", {
                                    result: e.t0,
                                    fieldErrors: e.t1
                                });
                            case 8:
                                return e.prev = 8, e.t2 = e.catch(0), e.abrupt("return", {
                                    result: {},
                                    fieldErrors: Te(e.t2)
                                });
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 8]
                    ])
                })))).apply(this, arguments)
            }

            function Ae(e, r) {
                Object.entries(r).forEach((function(r) {
                    var t = q(r, 2),
                        n = t[0],
                        u = t[1];
                    n === U && xe(u) ? e[n] = u.source : e[n] = n === $ || u
                }))
            }
            var Ve = function(e, r, t) {
                    var n = String.prototype.split.call(r, /[,[\].]+?/).filter(Boolean).reduce((function(e, r) {
                        return null != e ? e[r] : e
                    }), e);
                    return void 0 === n || n === e ? t : n
                },
                De = function(e, r, t) {
                    return Y(e[r]) ? Ve(e, r, t) : e[r]
                };

            function qe(e) {
                return e.reduce((function(e, r) {
                    return e.concat(ee(r) ? qe(r) : r)
                }), [])
            }
            var Ie = function e(r, t) {
                    return ee(t) ? t.map((function(t, n) {
                        var u = "".concat(r, "[").concat(n, "]");
                        return ee(t) ? e(u, t) : re(t) ? Object.entries(t).map((function(r) {
                            var t = q(r, 2),
                                n = t[0],
                                a = t[1];
                            return Ee(a) ? "".concat(u, ".").concat(n) : e("".concat(u, ".").concat(n), a)
                        })) : u
                    })) : Object.entries(t).map((function(t) {
                        var n = q(t, 2),
                            u = n[0],
                            a = n[1];
                        return Ee(a) ? "".concat(r, ".").concat(u) : e(r, a)
                    }))
                },
                Ne = function(e, r) {
                    return qe(Ie(e, r))
                },
                ze = function(e, r, t) {
                    if (!ye(e)) {
                        if (!Y(e[r])) return t.add(r), e[r];
                        var n = Ve(se(e), r);
                        return Y(n) || Ne(r, n).forEach((function(e) {
                            return t.add(e)
                        })), n
                    }
                },
                Fe = function(e, r) {
                    return Object.entries(e).reduce((function(e, t) {
                        var n = q(t, 2),
                            u = n[0],
                            a = n[1];
                        return r.some((function(e) {
                            return e === u
                        })) ? e : Object.assign(Object.assign({}, e), D({}, u, a))
                    }), {})
                };

            function Ze(e, r) {
                var t = new MutationObserver((function() {
                    pe(e) && (t.disconnect(), r())
                }));
                return t.observe(window.document, {
                    childList: !0,
                    subtree: !0
                }), t
            }
            var Be = function(e) {
                    return {
                        isOnSubmit: !e || e === W,
                        isOnBlur: e === Z,
                        isOnChange: e === B
                    }
                },
                We = function(e, r) {
                    return Object.entries(e).reduce((function(e, t) {
                        var n = q(t, 2),
                            u = n[0],
                            a = n[1];
                        return Object.assign(Object.assign({}, e), r.includes(u) ? D({}, u, a) : null)
                    }), {})
                },
                Qe = n.useRef,
                $e = n.useState,
                Ue = n.useCallback,
                _e = n.useEffect;
            var He = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.mode,
                    t = void 0 === r ? W : r,
                    n = e.reValidateMode,
                    u = void 0 === n ? B : n,
                    a = e.validationSchema,
                    i = e.defaultValues,
                    c = void 0 === i ? {} : i,
                    o = e.validationFields,
                    s = e.nativeValidation,
                    f = e.submitFocusError,
                    l = void 0 === f || f,
                    p = e.validationSchemaOption,
                    d = void 0 === p ? {
                        abortEarly: !1
                    } : p,
                    m = Qe({}),
                    v = Qe({}),
                    b = Qe({}),
                    h = Qe(new Set),
                    g = Qe(new Set),
                    y = Qe(new Set),
                    w = Qe(new Set),
                    O = Qe(new Set),
                    x = Qe({}),
                    k = Qe(!1),
                    E = Qe(!1),
                    S = Qe(!1),
                    j = Qe(!1),
                    C = Qe(0),
                    P = Qe(!1),
                    R = Qe(!1),
                    T = Qe(o),
                    L = Qe(),
                    M = $e(),
                    I = q(M, 2),
                    N = I[1],
                    Z = Qe(Be(t)).current,
                    $ = Z.isOnBlur,
                    U = Z.isOnSubmit,
                    G = ("undefined" == typeof window ? "undefined" : z(window)) === _,
                    J = !G && "Proxy" in window,
                    te = Qe({
                        dirty: !J,
                        isSubmitted: U,
                        submitCount: !J,
                        touched: !J,
                        isSubmitting: !J,
                        isValid: !J
                    }),
                    ne = Qe(Be(u)).current,
                    ue = ne.isOnBlur,
                    ae = ne.isOnSubmit,
                    ie = Qe(d);
                T.current = o;
                var ce = function(e) {
                        return Object.assign(Object.assign({}, v.current), e)
                    },
                    oe = Ue((function(e, r) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        ye(r) ? (delete v.current[e], (w.current.has(e) || a) && O.current.add(e)) : O.current.delete(e), t && N({})
                    }), [a]),
                    fe = Ue((function(e, r) {
                        var t = m.current[e];
                        if (!t) return !1;
                        var n = t.ref,
                            u = n.type,
                            a = t.options,
                            i = ("undefined" == typeof document ? "undefined" : z(document)) !== _ && !G && !Y(window.HTMLElement) && n instanceof window.HTMLElement && X(r) ? "" : r;
                        return le(u) && a ? a.forEach((function(e) {
                            var r = e.ref;
                            return r.checked = r.value === i
                        })) : be(u) ? V(n.options).forEach((function(e) {
                            return e.selected = i.includes(e.value)
                        })) : n[F(u) ? "checked" : "value"] = i, u
                    }), [G]),
                    pe = function(e) {
                        if (!m.current[e]) return !1;
                        var r = x.current[e] !== he(m.current, m.current[e].ref),
                            t = y.current.has(e) !== r;
                        return r ? y.current.add(e) : y.current.delete(e), j.current = !!y.current.size, t && te.current.dirty
                    },
                    me = Ue((function(e, r) {
                        var t = fe(e, r);
                        (pe(e) || t || !h.current.has(e) && te.current.touched) && (h.current.add(e), N({}))
                    }), [fe]),
                    ve = Ue(function() {
                        var e = A(regeneratorRuntime.mark((function e(r) {
                            var t, n, u, a, i, c = arguments;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r.name, n = r.value, u = !(c.length > 1 && void 0 !== c[1]) || c[1], a = m.current[t]) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 5:
                                        return Y(n) || me(t, n), e.next = 8, Re(a, m.current);
                                    case 8:
                                        return i = e.sent, v.current = ce(i), oe(t, i, u), e.abrupt("return", ye(i));
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }(), [oe, me]),
                    xe = Ue(Le.bind(null, a, ie.current), [a]),
                    ke = Ue(function() {
                        var e = A(regeneratorRuntime.mark((function e(r) {
                            var t, n, u, a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, xe(se(ge(m.current)));
                                    case 2:
                                        return t = e.sent, n = t.fieldErrors, u = ee(r) ? r.map((function(e) {
                                            return e.name
                                        })) : [r.name], a = u.filter((function(e) {
                                            return !n[e]
                                        })), b.current = n, R.current = !0, v.current = Fe(ce(Object.entries(n).filter((function(e) {
                                            var r = q(e, 1)[0];
                                            return u.includes(r)
                                        })).reduce((function(e, r) {
                                            var t = q(r, 2),
                                                n = t[0],
                                                u = t[1];
                                            return Object.assign(Object.assign({}, e), D({}, n, u))
                                        }), {})), a), N({}), e.abrupt("return", ye(v.current));
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }(), [xe]),
                    Se = Ue(function() {
                        var e = A(regeneratorRuntime.mark((function e(r) {
                            var t, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r || Object.keys(m.current).map((function(e) {
                                                return {
                                                    name: e
                                                }
                                            })), !a) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return", ke(t));
                                    case 3:
                                        if (!ee(t)) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 6, Promise.all(t.map(function() {
                                            var e = A(regeneratorRuntime.mark((function e(r) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, ve(r, !1);
                                                        case 2:
                                                            return e.abrupt("return", e.sent);
                                                        case 3:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(r) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 6:
                                        return n = e.sent, N({}), e.abrupt("return", n.every(Boolean));
                                    case 9:
                                        return e.next = 11, ve(t);
                                    case 11:
                                        return e.abrupt("return", e.sent);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }(), [ke, ve, a]),
                    je = Ue((function(e, r) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        me(e, r);
                        var n = E.current || g.current.has(e);
                        if (t) return Se({
                            name: e
                        });
                        n && N({})
                    }), [me, Se]);
                L.current = L.current ? L.current : function() {
                    var e = A(regeneratorRuntime.mark((function e(r) {
                        var t, n, u, i, c, o, f, l, p, d, y, x, k;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.type, n = r.target, u = n ? n.name : "", !ee(T.current) || T.current.includes(u)) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (i = m.current, c = v.current, o = i[u]) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    if (l = t === H, p = U && !S.current || $ && !l && !c[u] || ue && !l && c[u] || ae && c[u], d = pe(u), y = E.current || g.current.has(u) || d, l && !h.current.has(u) && te.current.touched && (h.current.add(u), y = !0), !p) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return", y ? N({}) : void 0);
                                case 16:
                                    if (!a) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.next = 19, xe(se(ge(i)));
                                case 19:
                                    x = e.sent, k = x.fieldErrors, b.current = k, R.current = !0, f = k[u] ? D({}, u, k[u]) : {}, e.next = 29;
                                    break;
                                case 26:
                                    return e.next = 28, Re(o, i, s);
                                case 28:
                                    f = e.sent;
                                case 29:
                                    if (!Oe({
                                            errors: c,
                                            error: f,
                                            name: u,
                                            validFields: O.current,
                                            fieldsWithValidation: w.current,
                                            schemaErrors: R.current ? b.current : void 0
                                        })) {
                                        e.next = 34;
                                        break
                                    }
                                    return v.current = ce(f), oe(u, f), e.abrupt("return");
                                case 34:
                                    y && N({});
                                case 35:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }();
                var Ce = function(e) {
                        delete v.current[e], delete m.current[e], delete x.current[e], [h, y, w, O, g].forEach((function(r) {
                            return r.current.delete(e)
                        }))
                    },
                    Pe = Ue((function(e, r) {
                        e && (de(m.current, L.current, e, r), Ce(e.ref.name))
                    }), []);

                function Te(e) {
                    Y(e) ? v.current = {} : (ee(e) ? e : [e]).forEach((function(e) {
                        return delete v.current[e]
                    })), N({})
                }
                var Me = function(e, r, t, n) {
                    var u = v.current;
                    we(u[e], r, t) || (u[e] = {
                        type: r,
                        message: t,
                        ref: n,
                        isManual: !0
                    }, N({}))
                };

                function Ve(e, r) {
                    var t = ge(m.current),
                        n = g.current;
                    if (Ee(e)) {
                        var u = ze(t, e, n);
                        return Y(u) ? Y(r) ? De(c, e) : r : u
                    }
                    return ee(e) ? e.reduce((function(e, u) {
                        var a = De(c, u);
                        if (ye(m.current) && re(r)) a = r[u];
                        else {
                            var i = ze(t, u, n);
                            Y(i) || (a = i)
                        }
                        return Object.assign(Object.assign({}, e), D({}, u, a))
                    }), {}) : (E.current = !0, !ye(t) && t || r || c)
                }

                function qe(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!e.name) return console.warn("Missing name on ref", e);
                    var t = e.name,
                        n = e.type,
                        u = e.value,
                        i = t,
                        f = Object.assign({
                            ref: e
                        }, r),
                        l = m.current,
                        p = le(n),
                        d = l[i],
                        v = p ? d && ee(d.options) && d.options.find((function(e) {
                            var r = e.ref;
                            return u === r.value
                        })) : d;
                    if (!v) {
                        if (n) {
                            var h = Ze(e, (function() {
                                return Pe(f)
                            }));
                            d = p ? Object.assign({
                                options: [].concat(V(d && d.options ? d.options : []), [{
                                    ref: e,
                                    mutationWatcher: h
                                }]),
                                ref: {
                                    type: Q,
                                    name: t
                                }
                            }, r) : Object.assign(Object.assign({}, f), {
                                mutationWatcher: h
                            })
                        } else d = f;
                        if (l[i] = d, !ye(c)) {
                            var g = De(c, t);
                            Y(g) || fe(t, g)
                        }
                        if (r && !ye(r) && (o && !o.includes(t) || w.current.add(t), !U && te.current.isValid && (a ? (R.current = !0, xe(se(ge(l))).then((function(e) {
                                var r = e.fieldErrors;
                                b.current = r, ye(b.current) && N({})
                            }))) : Re(d, l).then((function(e) {
                                ye(e) && O.current.add(t), O.current.size === w.current.size && N({})
                            })))), x.current[i] || (x.current[i] = he(l, d.ref)), n) {
                            var y = p && d.options ? d.options[d.options.length - 1] : d;
                            U && ae || (s && r ? Ae(e, r) : K({
                                field: y,
                                isRadio: p,
                                validateAndStateUpdate: L.current
                            }))
                        }
                    }
                }

                function Ie(e, r) {
                    if (("undefined" == typeof window ? "undefined" : z(window)) !== _ && e)
                        if (r && Ee(r.name)) qe({
                            name: r.name
                        }, r);
                        else {
                            if (!re(e) || !r && !("name" in e)) return function(r) {
                                return r && qe(r, e)
                            };
                            qe(e, r)
                        }
                }

                function Ne(e) {
                    ye(m.current) || (ee(e) ? e : [e]).forEach((function(e) {
                        return Pe(m.current[e], !0)
                    }))
                }
                var He = function(e) {
                        return function() {
                            var r = A(regeneratorRuntime.mark((function r(t) {
                                var n, u, i, c, f, p, d, h;
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (t && (t.preventDefault(), t.persist()), i = m.current, c = o ? o.map((function(e) {
                                                    return m.current[e]
                                                })) : Object.values(i), te.current.isSubmitting && (P.current = !0, N({})), !a) {
                                                r.next = 14;
                                                break
                                            }
                                            return u = ge(i), r.next = 8, xe(se(u));
                                        case 8:
                                            f = r.sent, b.current = f.fieldErrors, n = f.fieldErrors, u = f.result, r.next = 21;
                                            break;
                                        case 14:
                                            return r.next = 16, c.reduce(function() {
                                                var e = A(regeneratorRuntime.mark((function e(r, t) {
                                                    var n, u, a, c;
                                                    return regeneratorRuntime.wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                if (t) {
                                                                    e.next = 2;
                                                                    break
                                                                }
                                                                return e.abrupt("return", r);
                                                            case 2:
                                                                return e.next = 4, r;
                                                            case 4:
                                                                if (n = e.sent, u = t.ref, a = t.ref.name, i[a]) {
                                                                    e.next = 8;
                                                                    break
                                                                }
                                                                return e.abrupt("return", Promise.resolve(n));
                                                            case 8:
                                                                return e.next = 10, Re(t, i, s);
                                                            case 10:
                                                                if (!(c = e.sent)[a]) {
                                                                    e.next = 15;
                                                                    break
                                                                }
                                                                return n.errors = Object.assign(Object.assign({}, n.errors), c), O.current.delete(a), e.abrupt("return", Promise.resolve(n));
                                                            case 15:
                                                                return w.current.has(a) && O.current.add(a), n.values[a] = he(i, u), e.abrupt("return", Promise.resolve(n));
                                                            case 18:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(r, t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), Promise.resolve({
                                                errors: {},
                                                values: {}
                                            }));
                                        case 16:
                                            p = r.sent, d = p.errors, h = p.values, n = d, u = h;
                                        case 21:
                                            if (!ye(n)) {
                                                r.next = 27;
                                                break
                                            }
                                            return v.current = {}, r.next = 25, e(se(u), t);
                                        case 25:
                                            r.next = 29;
                                            break;
                                        case 27:
                                            l && Object.keys(n).reduce((function(e, r) {
                                                var t = i[r];
                                                return t && t.ref.focus && e ? (t.ref.focus(), !1) : e
                                            }), !0), v.current = n;
                                        case 29:
                                            if (!k.current) {
                                                r.next = 31;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 31:
                                            S.current = !0, P.current = !1, C.current = C.current + 1, N({});
                                        case 35:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })));
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }()
                    },
                    Ge = function() {
                        v.current = {}, x.current = {}, b.current = {}, h.current = new Set, g.current = new Set, y.current = new Set, w.current = new Set, O.current = new Set, E.current = !1, S.current = !1, j.current = !1, R.current = !1, C.current = 0
                    },
                    Je = Ue((function(e) {
                        for (var r = Object.entries(m.current), t = 0, n = r; t < n.length; t++) {
                            var u = q(n[t], 2)[1];
                            if (u && u.ref && u.ref.closest) try {
                                u.ref.closest("form").reset();
                                break
                            } catch (e) {}
                        }
                        Ge(), e && (r.forEach((function(r) {
                            var t = q(r, 1)[0];
                            return fe(t, De(e, t))
                        })), x.current = Object.assign({}, e)), N({})
                    }), [fe]),
                    Ke = function(e) {
                        var r = ge(m.current),
                            t = ye(r) ? c : r;
                        return e && e.nest ? se(t) : t
                    };
                _e((function() {
                    return function() {
                        k.current = !0, m.current && Object.values(m.current).forEach((function(e) {
                            return Pe(e, !0)
                        }))
                    }
                }), [Pe]);
                var Ye = Object.assign({
                    dirty: j.current,
                    isSubmitted: S.current,
                    submitCount: C.current,
                    touched: V(h.current),
                    isSubmitting: P.current
                }, U ? {
                    isValid: S.current && ye(v.current)
                } : {
                    isValid: a ? R.current && ye(b.current) : w.current.size ? !ye(m.current) && O.current.size >= w.current.size : !ye(m.current)
                });
                return {
                    register: Ue(Ie, []),
                    unregister: Ue(Ne, [Pe]),
                    handleSubmit: He,
                    watch: Ve,
                    reset: Je,
                    clearError: Te,
                    setError: Me,
                    setValue: je,
                    triggerValidation: Se,
                    getValues: Ke,
                    errors: o ? We(v.current, o) : v.current,
                    formState: J ? new Proxy(Ye, {
                        get: function(e, r) {
                            return r in e ? (te.current[r] = !0, e[r]) : {}
                        }
                    }) : Ye
                }
            }
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            ;

            function Ge(e, r, t, n, u, a, i) {
                try {
                    var c = e[a](i),
                        o = c.value
                } catch (e) {
                    return void t(e)
                }
                c.done ? r(o) : Promise.resolve(o).then(n, u)
            }
            var Je = function() {
                    var e = (0, g.oR)(P),
                        r = He(),
                        t = r.handleSubmit,
                        u = r.register,
                        i = r.errors,
                        c = r.triggerValidation,
                        o = (0, a.useTranslation)().t,
                        s = function() {
                            var e, r = (e = regeneratorRuntime.mark((function e(r) {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, c([{
                                                name: r
                                            }]);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })), function() {
                                var r = this,
                                    t = arguments;
                                return new Promise((function(n, u) {
                                    var a = e.apply(r, t);

                                    function i(e) {
                                        Ge(a, n, u, i, c, "next", e)
                                    }

                                    function c(e) {
                                        Ge(a, n, u, i, c, "throw", e)
                                    }
                                    i(void 0)
                                }))
                            });
                            return function(e) {
                                return r.apply(this, arguments)
                            }
                        }(),
                        f = e.state.challenges,
                        l = function(r) {
                            var t = f.map((function(e) {
                                return {
                                    id: Number(e.answer.id),
                                    answer: r[e.answer.id]
                                }
                            }));
                            e.submitChallengeAnswers(t)
                        };
                    return (0, T.SZ)((function() {
                        var r = e.state.submittingAnswers;
                        return n.createElement(n.Fragment, null, n.createElement("form", {
                            onSubmit: t(l),
                            "data-testid": "security-questions-form"
                        }, f.map((function(e, r) {
                            return n.createElement("div", {
                                className: "form-group",
                                key: e.question.id
                            }, n.createElement("label", {
                                htmlFor: e.answer.id
                            }, e.question.question), n.createElement(L.II, {
                                name: e.answer.id,
                                onChange: function(e) {
                                    return s(e.target.name)
                                },
                                inputProps: {
                                    required: !0,
                                    "data-testid": "security-question-form-input"
                                },
                                inputRef: u({
                                    required: o("You need to provide an answer to this question")
                                }),
                                error: i[e.answer.id],
                                errorId: e.answer.id
                            }))
                        })), n.createElement("div", {
                            className: "form-group"
                        }, n.createElement(L.zx, {
                            "data-aem-contentname": "Submit security answers button",
                            className: "btn btn-block btn-primary btn-lg my-2",
                            type: "submit",
                            disabled: r
                        }, n.createElement(a.T, null, r ? "Verifying identity..." : "Verify identity")))))
                    }))
                },
                Ke = function() {
                    var e = (0, g.oR)(P);
                    return (0, T.SZ)((function() {
                        var r = e.state,
                            t = r.securityChallengeError,
                            u = r.ok;
                        return n.createElement(n.Fragment, null, n.createElement(L.Rx, {
                            className: "text-center mb-3",
                            "data-testid": "security-questions-view"
                        }, n.createElement(L.Zb, {
                            bgColor: "white",
                            className: "p-sm-5 p-4"
                        }, n.createElement(L.eW, null, n.createElement(L.ll, null, n.createElement(a.T, null, "Confirm your identity")), n.createElement(L.nv, null, n.createElement(a.T, null, "Since you are accessing this page from this device (or location) for the first time we need you to confirm your identity before you can continue. This is to make sure that your account isn't used without your authorization.")), n.createElement(L.nv, {
                            className: "lead"
                        }, n.createElement(a.T, null, "Please answer your security questions below.")), !u && t && t.errorMessage && n.createElement(L.bZ, {
                            colorVariant: "danger",
                            "data-testid": "answer-security-questions-error"
                        }, n.createElement(a.T, null, t.errorMessage)), n.createElement(Je, null), n.createElement("h4", null, n.createElement(a.T, null, "Clueless?")), n.createElement(L.SK, null, n.createElement(a.T, {
                            placeholders: [d["url.resetSecurityQuestions"], d["url.supportCenter"]],
                            isHTML: !0
                        }, "If you don't remember the answers to these questions and have access to email address tied to this account you can <a href='%1$s'> request to reset your security questions</a> otherwise you need to get in touch with customer support through our <a href='%2$s'>Support Center</a>"))))))
                    }))
                },
                Ye = function() {
                    var e = (0, u.Tx)().log,
                        r = (0, g.oR)(P);
                    return n.useEffect((function() {
                        e && e.event("answerSecurityQuestions", "", "")
                    })), (0, T.SZ)((function() {
                        var e = r.state,
                            t = e.fetchingChallenges,
                            u = e.challenges;
                        return !t && u && u.length > 0 ? n.createElement(Ke, null) : n.createElement(L.l2, null, n.createElement(a.T, null, "Loading security questions"))
                    }))
                },
                Xe = function() {
                    var e = d.translationPath,
                        r = d.language,
                        t = d.telemetryFn,
                        c = (0, i.t)(e, r);
                    return c && n.createElement(a.TranslationProvider, {
                        translation: c
                    }, n.createElement(u.P2, {
                        telemetryFn: t,
                        name: "answerSecurityQuestions"
                    }, n.createElement(g.n7, {
                        stores: [
                            [P, R.getInstance()]
                        ]
                    }, n.createElement(Ye, null))))
                }
        }
    }
]);
//# sourceMappingURL=@mojang~answerSecurityQuestions.chunk.7e66f13794e54d07409a.js.map