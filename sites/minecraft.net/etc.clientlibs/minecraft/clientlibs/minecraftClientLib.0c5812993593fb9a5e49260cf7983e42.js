! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function(e) {
            return null != e && e === e.window
        },
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1",
        k = function(e, t) {
            return new k.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + $),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[k] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    A(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [S, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        N = k.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) {
        return e
    }

    function I(e) {
        throw e
    }

    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return k.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < k.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = k.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(k(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) {
        return t.toUpperCase()
    }

    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                k.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) {
            return k.contains(e.ownerDocument, e)
        },
        ae = {
            composed: !0
        };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    });
    var se = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
        },
        ue = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return k.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, {
                    value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(R) || [""]).length;
                while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l), t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne), !1
            },
            trigger: function() {
                return De(this, e), !0
            },
            delegateType: t
        }
    }), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), a
            },
            scrollboxSize: function() {
                return e(), i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ke = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e, t, n, r, i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                    return tt(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick())
    }

    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }), rt = Date.now()
    }

    function ft(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, {
                    specialEasing: {},
                    easing: k.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() {
                    for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r])
                })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }), k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function() {
        it || (it = !0, lt())
    }, k.fx.stop = function() {
        it = null
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) {
        return (e.match(R) || []).join(" ")
    }

    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, xt(this)))
            });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, xt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = bt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        }, y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) {
            e.stopPropagation()
        };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) {
            r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = k("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
        var r, i, o
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || ie
            })
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k
    }, e || (C.jQuery = C.$ = k), k
});
! function(n) {
    var i = {};

    function r(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.m = n, r.c = i, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}({
    "./client/index.js": function(e, t, n) {
        "use strict";
        n("./node_modules/bootstrap/dist/js/bootstrap.js")
    },
    "./node_modules/bootstrap/dist/js/bootstrap.js": function(e, t, n) {
        ! function(e, m, d) {
            "use strict";

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }

            function o(e, t, n) {
                if (t) i(e.prototype, t);
                if (n) i(e, n);
                return e
            }

            function r(e, t, n) {
                if (t in e) {
                    Object.defineProperty(e, t, {
                        value: n,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    })
                } else {
                    e[t] = n
                }
                return e
            }

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    if (e) i = i.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    });
                    n.push.apply(n, i)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e] != null ? arguments[e] : {};
                    if (e % 2) {
                        s(Object(n), true).forEach(function(e) {
                            r(t, e, n[e])
                        })
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    } else {
                        s(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        })
                    }
                }
                return t
            }

            function n(e, t) {
                e.prototype = Object.create(t.prototype);
                e.prototype.constructor = e;
                e.__proto__ = t
            }
            m = m && m.hasOwnProperty("default") ? m["default"] : m, d = d && d.hasOwnProperty("default") ? d["default"] : d;
            var l = "transitionend",
                u = 1e6,
                c = 1e3;

            function f(e) {
                return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
            }

            function t() {
                return {
                    bindType: l,
                    delegateType: l,
                    handle: function e(t) {
                        if (m(t.target).is(this)) {
                            return t.handleObj.handler.apply(this, arguments)
                        }
                        return undefined
                    }
                }
            }

            function h(e) {
                var t = this;
                var n = false;
                m(this).one(v.TRANSITION_END, function() {
                    n = true
                });
                setTimeout(function() {
                    if (!n) {
                        v.triggerTransitionEnd(t)
                    }
                }, e);
                return this
            }

            function p() {
                m.fn.emulateTransitionEnd = h;
                m.event.special[v.TRANSITION_END] = t()
            }
            var v = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function e(t) {
                    do {
                        t += ~~(Math.random() * u)
                    } while (document.getElementById(t));
                    return t
                },
                getSelectorFromElement: function e(t) {
                    var n = t.getAttribute("data-target");
                    if (!n || n === "#") {
                        var i = t.getAttribute("href");
                        n = i && i !== "#" ? i.trim() : ""
                    }
                    try {
                        return document.querySelector(n) ? n : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function e(t) {
                    if (!t) {
                        return 0
                    }
                    var n = m(t).css("transition-duration");
                    var i = m(t).css("transition-delay");
                    var r = parseFloat(n);
                    var o = parseFloat(i);
                    if (!r && !o) {
                        return 0
                    }
                    n = n.split(",")[0];
                    i = i.split(",")[0];
                    return (parseFloat(n) + parseFloat(i)) * c
                },
                reflow: function e(t) {
                    return t.offsetHeight
                },
                triggerTransitionEnd: function e(t) {
                    m(t).trigger(l)
                },
                supportsTransitionEnd: function e() {
                    return Boolean(l)
                },
                isElement: function e(t) {
                    return (t[0] || t).nodeType
                },
                typeCheckConfig: function e(t, n, i) {
                    for (var r in i) {
                        if (Object.prototype.hasOwnProperty.call(i, r)) {
                            var o = i[r];
                            var s = n[r];
                            var a = s && v.isElement(s) ? "element" : f(s);
                            if (!new RegExp(o).test(a)) {
                                throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + a + '" ') + ('but expected type "' + o + '".'))
                            }
                        }
                    }
                },
                findShadowRoot: function e(t) {
                    if (!document.documentElement.attachShadow) {
                        return null
                    }
                    if (typeof t.getRootNode === "function") {
                        var n = t.getRootNode();
                        return n instanceof ShadowRoot ? n : null
                    }
                    if (t instanceof ShadowRoot) {
                        return t
                    }
                    if (!t.parentNode) {
                        return null
                    }
                    return v.findShadowRoot(t.parentNode)
                },
                jQueryDetection: function e() {
                    if (typeof m === "undefined") {
                        throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.")
                    }
                    var t = m.fn.jquery.split(" ")[0].split(".");
                    var n = 1;
                    var i = 2;
                    var r = 9;
                    var o = 1;
                    var s = 4;
                    if (t[0] < i && t[1] < r || t[0] === n && t[1] === r && t[2] < o || t[0] >= s) {
                        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                    }
                }
            };
            v.jQueryDetection(), p();
            var g = "alert",
                y = "4.4.1",
                _ = "bs.alert",
                E = "." + _,
                T = ".data-api",
                b = m.fn[g],
                C = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                w = {
                    CLOSE: "close" + E,
                    CLOSED: "closed" + E,
                    CLICK_DATA_API: "click" + E + T
                },
                S = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                A = function() {
                    function i(e) {
                        this._element = e
                    }
                    var e = i.prototype;
                    e.close = function e(t) {
                        var n = this._element;
                        if (t) {
                            n = this._getRootElement(t)
                        }
                        var i = this._triggerCloseEvent(n);
                        if (i.isDefaultPrevented()) {
                            return
                        }
                        this._removeElement(n)
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, _);
                        this._element = null
                    };
                    e._getRootElement = function e(t) {
                        var n = v.getSelectorFromElement(t);
                        var i = false;
                        if (n) {
                            i = document.querySelector(n)
                        }
                        if (!i) {
                            i = m(t).closest("." + S.ALERT)[0]
                        }
                        return i
                    };
                    e._triggerCloseEvent = function e(t) {
                        var n = m.Event(w.CLOSE);
                        m(t).trigger(n);
                        return n
                    };
                    e._removeElement = function e(t) {
                        var n = this;
                        m(t).removeClass(S.SHOW);
                        if (!m(t).hasClass(S.FADE)) {
                            this._destroyElement(t);
                            return
                        }
                        var i = v.getTransitionDurationFromElement(t);
                        m(t).one(v.TRANSITION_END, function(e) {
                            return n._destroyElement(t, e)
                        }).emulateTransitionEnd(i)
                    };
                    e._destroyElement = function e(t) {
                        m(t).detach().trigger(w.CLOSED).remove()
                    };
                    i._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this);
                            var t = e.data(_);
                            if (!t) {
                                t = new i(this);
                                e.data(_, t)
                            }
                            if (n === "close") {
                                t[n](this)
                            }
                        })
                    };
                    i._handleDismiss = function e(t) {
                        return function(e) {
                            if (e) {
                                e.preventDefault()
                            }
                            t.close(this)
                        }
                    };
                    o(i, null, [{
                        key: "VERSION",
                        get: function e() {
                            return y
                        }
                    }]);
                    return i
                }();
            m(document).on(w.CLICK_DATA_API, C.DISMISS, A._handleDismiss(new A)), m.fn[g] = A._jQueryInterface, m.fn[g].Constructor = A, m.fn[g].noConflict = function() {
                m.fn[g] = b;
                return A._jQueryInterface
            };
            var D = "button",
                x = "4.4.1",
                O = "bs.button",
                I = "." + O,
                N = ".data-api",
                L = m.fn[D],
                k = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                P = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLES: '[data-toggle="buttons"]',
                    DATA_TOGGLE: '[data-toggle="button"]',
                    DATA_TOGGLES_BUTTONS: '[data-toggle="buttons"] .btn',
                    INPUT: 'input:not([type="hidden"])',
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                H = {
                    CLICK_DATA_API: "click" + I + N,
                    FOCUS_BLUR_DATA_API: "focus" + I + N + " " + ("blur" + I + N),
                    LOAD_DATA_API: "load" + I + N
                },
                j = function() {
                    function n(e) {
                        this._element = e
                    }
                    var e = n.prototype;
                    e.toggle = function e() {
                        var t = true;
                        var n = true;
                        var i = m(this._element).closest(P.DATA_TOGGLES)[0];
                        if (i) {
                            var r = this._element.querySelector(P.INPUT);
                            if (r) {
                                if (r.type === "radio") {
                                    if (r.checked && this._element.classList.contains(k.ACTIVE)) {
                                        t = false
                                    } else {
                                        var o = i.querySelector(P.ACTIVE);
                                        if (o) {
                                            m(o).removeClass(k.ACTIVE)
                                        }
                                    }
                                } else if (r.type === "checkbox") {
                                    if (this._element.tagName === "LABEL" && r.checked === this._element.classList.contains(k.ACTIVE)) {
                                        t = false
                                    }
                                } else {
                                    t = false
                                }
                                if (t) {
                                    r.checked = !this._element.classList.contains(k.ACTIVE);
                                    m(r).trigger("change")
                                }
                                r.focus();
                                n = false
                            }
                        }
                        if (!(this._element.hasAttribute("disabled") || this._element.classList.contains("disabled"))) {
                            if (n) {
                                this._element.setAttribute("aria-pressed", !this._element.classList.contains(k.ACTIVE))
                            }
                            if (t) {
                                m(this._element).toggleClass(k.ACTIVE)
                            }
                        }
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, O);
                        this._element = null
                    };
                    n._jQueryInterface = function e(t) {
                        return this.each(function() {
                            var e = m(this).data(O);
                            if (!e) {
                                e = new n(this);
                                m(this).data(O, e)
                            }
                            if (t === "toggle") {
                                e[t]()
                            }
                        })
                    };
                    o(n, null, [{
                        key: "VERSION",
                        get: function e() {
                            return x
                        }
                    }]);
                    return n
                }();
            m(document).on(H.CLICK_DATA_API, P.DATA_TOGGLE_CARROT, function(e) {
                var t = e.target;
                if (!m(t).hasClass(k.BUTTON)) {
                    t = m(t).closest(P.BUTTON)[0]
                }
                if (!t || t.hasAttribute("disabled") || t.classList.contains("disabled")) {
                    e.preventDefault()
                } else {
                    var n = t.querySelector(P.INPUT);
                    if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) {
                        e.preventDefault();
                        return
                    }
                    j._jQueryInterface.call(m(t), "toggle")
                }
            }).on(H.FOCUS_BLUR_DATA_API, P.DATA_TOGGLE_CARROT, function(e) {
                var t = m(e.target).closest(P.BUTTON)[0];
                m(t).toggleClass(k.FOCUS, /^focus(in)?$/.test(e.type))
            }), m(window).on(H.LOAD_DATA_API, function() {
                var e = [].slice.call(document.querySelectorAll(P.DATA_TOGGLES_BUTTONS));
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = e[t];
                    var r = i.querySelector(P.INPUT);
                    if (r.checked || r.hasAttribute("checked")) {
                        i.classList.add(k.ACTIVE)
                    } else {
                        i.classList.remove(k.ACTIVE)
                    }
                }
                e = [].slice.call(document.querySelectorAll(P.DATA_TOGGLE));
                for (var o = 0, s = e.length; o < s; o++) {
                    var a = e[o];
                    if (a.getAttribute("aria-pressed") === "true") {
                        a.classList.add(k.ACTIVE)
                    } else {
                        a.classList.remove(k.ACTIVE)
                    }
                }
            }), m.fn[D] = j._jQueryInterface, m.fn[D].Constructor = j, m.fn[D].noConflict = function() {
                m.fn[D] = L;
                return j._jQueryInterface
            };
            var R = "carousel",
                M = "4.4.1",
                W = "bs.carousel",
                F = "." + W,
                q = ".data-api",
                U = m.fn[R],
                B = 37,
                V = 39,
                G = 500,
                K = 40,
                Q = {
                    interval: 5e3,
                    keyboard: true,
                    slide: false,
                    pause: "hover",
                    wrap: true,
                    touch: true
                },
                $ = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                    touch: "boolean"
                },
                X = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                Y = {
                    SLIDE: "slide" + F,
                    SLID: "slid" + F,
                    KEYDOWN: "keydown" + F,
                    MOUSEENTER: "mouseenter" + F,
                    MOUSELEAVE: "mouseleave" + F,
                    TOUCHSTART: "touchstart" + F,
                    TOUCHMOVE: "touchmove" + F,
                    TOUCHEND: "touchend" + F,
                    POINTERDOWN: "pointerdown" + F,
                    POINTERUP: "pointerup" + F,
                    DRAG_START: "dragstart" + F,
                    LOAD_DATA_API: "load" + F + q,
                    CLICK_DATA_API: "click" + F + q
                },
                z = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item",
                    POINTER_EVENT: "pointer-event"
                },
                J = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    ITEM_IMG: ".carousel-item img",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                Z = {
                    TOUCH: "touch",
                    PEN: "pen"
                },
                ee = function() {
                    function s(e, t) {
                        this._items = null;
                        this._interval = null;
                        this._activeElement = null;
                        this._isPaused = false;
                        this._isSliding = false;
                        this.touchTimeout = null;
                        this.touchStartX = 0;
                        this.touchDeltaX = 0;
                        this._config = this._getConfig(t);
                        this._element = e;
                        this._indicatorsElement = this._element.querySelector(J.INDICATORS);
                        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
                        this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                        this._addEventListeners()
                    }
                    var e = s.prototype;
                    e.next = function e() {
                        if (!this._isSliding) {
                            this._slide(X.NEXT)
                        }
                    };
                    e.nextWhenVisible = function e() {
                        if (!document.hidden && m(this._element).is(":visible") && m(this._element).css("visibility") !== "hidden") {
                            this.next()
                        }
                    };
                    e.prev = function e() {
                        if (!this._isSliding) {
                            this._slide(X.PREV)
                        }
                    };
                    e.pause = function e(t) {
                        if (!t) {
                            this._isPaused = true
                        }
                        if (this._element.querySelector(J.NEXT_PREV)) {
                            v.triggerTransitionEnd(this._element);
                            this.cycle(true)
                        }
                        clearInterval(this._interval);
                        this._interval = null
                    };
                    e.cycle = function e(t) {
                        if (!t) {
                            this._isPaused = false
                        }
                        if (this._interval) {
                            clearInterval(this._interval);
                            this._interval = null
                        }
                        if (this._config.interval && !this._isPaused) {
                            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)
                        }
                    };
                    e.to = function e(t) {
                        var n = this;
                        this._activeElement = this._element.querySelector(J.ACTIVE_ITEM);
                        var i = this._getItemIndex(this._activeElement);
                        if (t > this._items.length - 1 || t < 0) {
                            return
                        }
                        if (this._isSliding) {
                            m(this._element).one(Y.SLID, function() {
                                return n.to(t)
                            });
                            return
                        }
                        if (i === t) {
                            this.pause();
                            this.cycle();
                            return
                        }
                        var r = t > i ? X.NEXT : X.PREV;
                        this._slide(r, this._items[t])
                    };
                    e.dispose = function e() {
                        m(this._element).off(F);
                        m.removeData(this._element, W);
                        this._items = null;
                        this._config = null;
                        this._element = null;
                        this._interval = null;
                        this._isPaused = null;
                        this._isSliding = null;
                        this._activeElement = null;
                        this._indicatorsElement = null
                    };
                    e._getConfig = function e(t) {
                        t = a({}, Q, {}, t);
                        v.typeCheckConfig(R, t, $);
                        return t
                    };
                    e._handleSwipe = function e() {
                        var t = Math.abs(this.touchDeltaX);
                        if (t <= K) {
                            return
                        }
                        var n = t / this.touchDeltaX;
                        this.touchDeltaX = 0;
                        if (n > 0) {
                            this.prev()
                        }
                        if (n < 0) {
                            this.next()
                        }
                    };
                    e._addEventListeners = function e() {
                        var t = this;
                        if (this._config.keyboard) {
                            m(this._element).on(Y.KEYDOWN, function(e) {
                                return t._keydown(e)
                            })
                        }
                        if (this._config.pause === "hover") {
                            m(this._element).on(Y.MOUSEENTER, function(e) {
                                return t.pause(e)
                            }).on(Y.MOUSELEAVE, function(e) {
                                return t.cycle(e)
                            })
                        }
                        if (this._config.touch) {
                            this._addTouchEventListeners()
                        }
                    };
                    e._addTouchEventListeners = function e() {
                        var n = this;
                        if (!this._touchSupported) {
                            return
                        }
                        var t = function e(t) {
                            if (n._pointerEvent && Z[t.originalEvent.pointerType.toUpperCase()]) {
                                n.touchStartX = t.originalEvent.clientX
                            } else if (!n._pointerEvent) {
                                n.touchStartX = t.originalEvent.touches[0].clientX
                            }
                        };
                        var i = function e(t) {
                            if (t.originalEvent.touches && t.originalEvent.touches.length > 1) {
                                n.touchDeltaX = 0
                            } else {
                                n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                            }
                        };
                        var r = function e(t) {
                            if (n._pointerEvent && Z[t.originalEvent.pointerType.toUpperCase()]) {
                                n.touchDeltaX = t.originalEvent.clientX - n.touchStartX
                            }
                            n._handleSwipe();
                            if (n._config.pause === "hover") {
                                n.pause();
                                if (n.touchTimeout) {
                                    clearTimeout(n.touchTimeout)
                                }
                                n.touchTimeout = setTimeout(function(e) {
                                    return n.cycle(e)
                                }, G + n._config.interval)
                            }
                        };
                        m(this._element.querySelectorAll(J.ITEM_IMG)).on(Y.DRAG_START, function(e) {
                            return e.preventDefault()
                        });
                        if (this._pointerEvent) {
                            m(this._element).on(Y.POINTERDOWN, function(e) {
                                return t(e)
                            });
                            m(this._element).on(Y.POINTERUP, function(e) {
                                return r(e)
                            });
                            this._element.classList.add(z.POINTER_EVENT)
                        } else {
                            m(this._element).on(Y.TOUCHSTART, function(e) {
                                return t(e)
                            });
                            m(this._element).on(Y.TOUCHMOVE, function(e) {
                                return i(e)
                            });
                            m(this._element).on(Y.TOUCHEND, function(e) {
                                return r(e)
                            })
                        }
                    };
                    e._keydown = function e(t) {
                        if (/input|textarea/i.test(t.target.tagName)) {
                            return
                        }
                        switch (t.which) {
                            case B:
                                t.preventDefault();
                                this.prev();
                                break;
                            case V:
                                t.preventDefault();
                                this.next();
                                break
                        }
                    };
                    e._getItemIndex = function e(t) {
                        this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(J.ITEM)) : [];
                        return this._items.indexOf(t)
                    };
                    e._getItemByDirection = function e(t, n) {
                        var i = t === X.NEXT;
                        var r = t === X.PREV;
                        var o = this._getItemIndex(n);
                        var s = this._items.length - 1;
                        var a = r && o === 0 || i && o === s;
                        if (a && !this._config.wrap) {
                            return n
                        }
                        var l = t === X.PREV ? -1 : 1;
                        var u = (o + l) % this._items.length;
                        return u === -1 ? this._items[this._items.length - 1] : this._items[u]
                    };
                    e._triggerSlideEvent = function e(t, n) {
                        var i = this._getItemIndex(t);
                        var r = this._getItemIndex(this._element.querySelector(J.ACTIVE_ITEM));
                        var o = m.Event(Y.SLIDE, {
                            relatedTarget: t,
                            direction: n,
                            from: r,
                            to: i
                        });
                        m(this._element).trigger(o);
                        return o
                    };
                    e._setActiveIndicatorElement = function e(t) {
                        if (this._indicatorsElement) {
                            var n = [].slice.call(this._indicatorsElement.querySelectorAll(J.ACTIVE));
                            m(n).removeClass(z.ACTIVE);
                            var i = this._indicatorsElement.children[this._getItemIndex(t)];
                            if (i) {
                                m(i).addClass(z.ACTIVE)
                            }
                        }
                    };
                    e._slide = function e(t, n) {
                        var i = this;
                        var r = this._element.querySelector(J.ACTIVE_ITEM);
                        var o = this._getItemIndex(r);
                        var s = n || r && this._getItemByDirection(t, r);
                        var a = this._getItemIndex(s);
                        var l = Boolean(this._interval);
                        var u;
                        var c;
                        var f;
                        if (t === X.NEXT) {
                            u = z.LEFT;
                            c = z.NEXT;
                            f = X.LEFT
                        } else {
                            u = z.RIGHT;
                            c = z.PREV;
                            f = X.RIGHT
                        }
                        if (s && m(s).hasClass(z.ACTIVE)) {
                            this._isSliding = false;
                            return
                        }
                        var d = this._triggerSlideEvent(s, f);
                        if (d.isDefaultPrevented()) {
                            return
                        }
                        if (!r || !s) {
                            return
                        }
                        this._isSliding = true;
                        if (l) {
                            this.pause()
                        }
                        this._setActiveIndicatorElement(s);
                        var h = m.Event(Y.SLID, {
                            relatedTarget: s,
                            direction: f,
                            from: o,
                            to: a
                        });
                        if (m(this._element).hasClass(z.SLIDE)) {
                            m(s).addClass(c);
                            v.reflow(s);
                            m(r).addClass(u);
                            m(s).addClass(u);
                            var p = parseInt(s.getAttribute("data-interval"), 10);
                            if (p) {
                                this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                                this._config.interval = p
                            } else {
                                this._config.interval = this._config.defaultInterval || this._config.interval
                            }
                            var g = v.getTransitionDurationFromElement(r);
                            m(r).one(v.TRANSITION_END, function() {
                                m(s).removeClass(u + " " + c).addClass(z.ACTIVE);
                                m(r).removeClass(z.ACTIVE + " " + c + " " + u);
                                i._isSliding = false;
                                setTimeout(function() {
                                    return m(i._element).trigger(h)
                                }, 0)
                            }).emulateTransitionEnd(g)
                        } else {
                            m(r).removeClass(z.ACTIVE);
                            m(s).addClass(z.ACTIVE);
                            this._isSliding = false;
                            m(this._element).trigger(h)
                        }
                        if (l) {
                            this.cycle()
                        }
                    };
                    s._jQueryInterface = function e(i) {
                        return this.each(function() {
                            var e = m(this).data(W);
                            var t = a({}, Q, {}, m(this).data());
                            if (typeof i === "object") {
                                t = a({}, t, {}, i)
                            }
                            var n = typeof i === "string" ? i : t.slide;
                            if (!e) {
                                e = new s(this, t);
                                m(this).data(W, e)
                            }
                            if (typeof i === "number") {
                                e.to(i)
                            } else if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n]()
                            } else if (t.interval && t.ride) {
                                e.pause();
                                e.cycle()
                            }
                        })
                    };
                    s._dataApiClickHandler = function e(t) {
                        var n = v.getSelectorFromElement(this);
                        if (!n) {
                            return
                        }
                        var i = m(n)[0];
                        if (!i || !m(i).hasClass(z.CAROUSEL)) {
                            return
                        }
                        var r = a({}, m(i).data(), {}, m(this).data());
                        var o = this.getAttribute("data-slide-to");
                        if (o) {
                            r.interval = false
                        }
                        s._jQueryInterface.call(m(i), r);
                        if (o) {
                            m(i).data(W).to(o)
                        }
                        t.preventDefault()
                    };
                    o(s, null, [{
                        key: "VERSION",
                        get: function e() {
                            return M
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return Q
                        }
                    }]);
                    return s
                }();
            m(document).on(Y.CLICK_DATA_API, J.DATA_SLIDE, ee._dataApiClickHandler), m(window).on(Y.LOAD_DATA_API, function() {
                var e = [].slice.call(document.querySelectorAll(J.DATA_RIDE));
                for (var t = 0, n = e.length; t < n; t++) {
                    var i = m(e[t]);
                    ee._jQueryInterface.call(i, i.data())
                }
            }), m.fn[R] = ee._jQueryInterface, m.fn[R].Constructor = ee, m.fn[R].noConflict = function() {
                m.fn[R] = U;
                return ee._jQueryInterface
            };
            var te = "collapse",
                ne = "4.4.1",
                ie = "bs.collapse",
                re = "." + ie,
                oe = ".data-api",
                se = m.fn[te],
                ae = {
                    toggle: true,
                    parent: ""
                },
                le = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                ue = {
                    SHOW: "show" + re,
                    SHOWN: "shown" + re,
                    HIDE: "hide" + re,
                    HIDDEN: "hidden" + re,
                    CLICK_DATA_API: "click" + re + oe
                },
                ce = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                fe = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                de = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                he = function() {
                    function c(t, e) {
                        this._isTransitioning = false;
                        this._element = t;
                        this._config = this._getConfig(e);
                        this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                        var n = [].slice.call(document.querySelectorAll(de.DATA_TOGGLE));
                        for (var i = 0, r = n.length; i < r; i++) {
                            var o = n[i];
                            var s = v.getSelectorFromElement(o);
                            var a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                                return e === t
                            });
                            if (s !== null && a.length > 0) {
                                this._selector = s;
                                this._triggerArray.push(o)
                            }
                        }
                        this._parent = this._config.parent ? this._getParent() : null;
                        if (!this._config.parent) {
                            this._addAriaAndCollapsedClass(this._element, this._triggerArray)
                        }
                        if (this._config.toggle) {
                            this.toggle()
                        }
                    }
                    var e = c.prototype;
                    e.toggle = function e() {
                        if (m(this._element).hasClass(ce.SHOW)) {
                            this.hide()
                        } else {
                            this.show()
                        }
                    };
                    e.show = function e() {
                        var t = this;
                        if (this._isTransitioning || m(this._element).hasClass(ce.SHOW)) {
                            return
                        }
                        var n;
                        var i;
                        if (this._parent) {
                            n = [].slice.call(this._parent.querySelectorAll(de.ACTIVES)).filter(function(e) {
                                if (typeof t._config.parent === "string") {
                                    return e.getAttribute("data-parent") === t._config.parent
                                }
                                return e.classList.contains(ce.COLLAPSE)
                            });
                            if (n.length === 0) {
                                n = null
                            }
                        }
                        if (n) {
                            i = m(n).not(this._selector).data(ie);
                            if (i && i._isTransitioning) {
                                return
                            }
                        }
                        var r = m.Event(ue.SHOW);
                        m(this._element).trigger(r);
                        if (r.isDefaultPrevented()) {
                            return
                        }
                        if (n) {
                            c._jQueryInterface.call(m(n).not(this._selector), "hide");
                            if (!i) {
                                m(n).data(ie, null)
                            }
                        }
                        var o = this._getDimension();
                        m(this._element).removeClass(ce.COLLAPSE).addClass(ce.COLLAPSING);
                        this._element.style[o] = 0;
                        if (this._triggerArray.length) {
                            m(this._triggerArray).removeClass(ce.COLLAPSED).attr("aria-expanded", true)
                        }
                        this.setTransitioning(true);
                        var s = function e() {
                            m(t._element).removeClass(ce.COLLAPSING).addClass(ce.COLLAPSE).addClass(ce.SHOW);
                            t._element.style[o] = "";
                            t.setTransitioning(false);
                            m(t._element).trigger(ue.SHOWN)
                        };
                        var a = o[0].toUpperCase() + o.slice(1);
                        var l = "scroll" + a;
                        var u = v.getTransitionDurationFromElement(this._element);
                        m(this._element).one(v.TRANSITION_END, s).emulateTransitionEnd(u);
                        this._element.style[o] = this._element[l] + "px"
                    };
                    e.hide = function e() {
                        var t = this;
                        if (this._isTransitioning || !m(this._element).hasClass(ce.SHOW)) {
                            return
                        }
                        var n = m.Event(ue.HIDE);
                        m(this._element).trigger(n);
                        if (n.isDefaultPrevented()) {
                            return
                        }
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px";
                        v.reflow(this._element);
                        m(this._element).addClass(ce.COLLAPSING).removeClass(ce.COLLAPSE).removeClass(ce.SHOW);
                        var r = this._triggerArray.length;
                        if (r > 0) {
                            for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o];
                                var a = v.getSelectorFromElement(s);
                                if (a !== null) {
                                    var l = m([].slice.call(document.querySelectorAll(a)));
                                    if (!l.hasClass(ce.SHOW)) {
                                        m(s).addClass(ce.COLLAPSED).attr("aria-expanded", false)
                                    }
                                }
                            }
                        }
                        this.setTransitioning(true);
                        var u = function e() {
                            t.setTransitioning(false);
                            m(t._element).removeClass(ce.COLLAPSING).addClass(ce.COLLAPSE).trigger(ue.HIDDEN)
                        };
                        this._element.style[i] = "";
                        var c = v.getTransitionDurationFromElement(this._element);
                        m(this._element).one(v.TRANSITION_END, u).emulateTransitionEnd(c)
                    };
                    e.setTransitioning = function e(t) {
                        this._isTransitioning = t
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, ie);
                        this._config = null;
                        this._parent = null;
                        this._element = null;
                        this._triggerArray = null;
                        this._isTransitioning = null
                    };
                    e._getConfig = function e(t) {
                        t = a({}, ae, {}, t);
                        t.toggle = Boolean(t.toggle);
                        v.typeCheckConfig(te, t, le);
                        return t
                    };
                    e._getDimension = function e() {
                        var t = m(this._element).hasClass(fe.WIDTH);
                        return t ? fe.WIDTH : fe.HEIGHT
                    };
                    e._getParent = function e() {
                        var n = this;
                        var t;
                        if (v.isElement(this._config.parent)) {
                            t = this._config.parent;
                            if (typeof this._config.parent.jquery !== "undefined") {
                                t = this._config.parent[0]
                            }
                        } else {
                            t = document.querySelector(this._config.parent)
                        }
                        var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        var r = [].slice.call(t.querySelectorAll(i));
                        m(r).each(function(e, t) {
                            n._addAriaAndCollapsedClass(c._getTargetFromElement(t), [t])
                        });
                        return t
                    };
                    e._addAriaAndCollapsedClass = function e(t, n) {
                        var i = m(t).hasClass(ce.SHOW);
                        if (n.length) {
                            m(n).toggleClass(ce.COLLAPSED, !i).attr("aria-expanded", i)
                        }
                    };
                    c._getTargetFromElement = function e(t) {
                        var n = v.getSelectorFromElement(t);
                        return n ? document.querySelector(n) : null
                    };
                    c._jQueryInterface = function e(i) {
                        return this.each(function() {
                            var e = m(this);
                            var t = e.data(ie);
                            var n = a({}, ae, {}, e.data(), {}, typeof i === "object" && i ? i : {});
                            if (!t && n.toggle && /show|hide/.test(i)) {
                                n.toggle = false
                            }
                            if (!t) {
                                t = new c(this, n);
                                e.data(ie, t)
                            }
                            if (typeof i === "string") {
                                if (typeof t[i] === "undefined") {
                                    throw new TypeError('No method named "' + i + '"')
                                }
                                t[i]()
                            }
                        })
                    };
                    o(c, null, [{
                        key: "VERSION",
                        get: function e() {
                            return ne
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return ae
                        }
                    }]);
                    return c
                }();
            m(document).on(ue.CLICK_DATA_API, de.DATA_TOGGLE, function(e) {
                if (e.currentTarget.tagName === "A") {
                    e.preventDefault()
                }
                var i = m(this);
                var t = v.getSelectorFromElement(this);
                var n = [].slice.call(document.querySelectorAll(t));
                m(n).each(function() {
                    var e = m(this);
                    var t = e.data(ie);
                    var n = t ? "toggle" : i.data();
                    he._jQueryInterface.call(e, n)
                })
            }), m.fn[te] = he._jQueryInterface, m.fn[te].Constructor = he, m.fn[te].noConflict = function() {
                m.fn[te] = se;
                return he._jQueryInterface
            };
            var pe = "dropdown",
                ge = "4.4.1",
                me = "bs.dropdown",
                ve = "." + me,
                ye = ".data-api",
                _e = m.fn[pe],
                Ee = 27,
                Te = 32,
                be = 9,
                Ce = 38,
                we = 40,
                Se = 3,
                Ae = new RegExp(Ce + "|" + we + "|" + Ee),
                De = {
                    HIDE: "hide" + ve,
                    HIDDEN: "hidden" + ve,
                    SHOW: "show" + ve,
                    SHOWN: "shown" + ve,
                    CLICK: "click" + ve,
                    CLICK_DATA_API: "click" + ve + ye,
                    KEYDOWN_DATA_API: "keydown" + ve + ye,
                    KEYUP_DATA_API: "keyup" + ve + ye
                },
                xe = {
                    DISABLED: "disabled",
                    SHOW: "show",
                    DROPUP: "dropup",
                    DROPRIGHT: "dropright",
                    DROPLEFT: "dropleft",
                    MENURIGHT: "dropdown-menu-right",
                    MENULEFT: "dropdown-menu-left",
                    POSITION_STATIC: "position-static"
                },
                Oe = {
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    MENU: ".dropdown-menu",
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                },
                Ie = {
                    TOP: "top-start",
                    TOPEND: "top-end",
                    BOTTOM: "bottom-start",
                    BOTTOMEND: "bottom-end",
                    RIGHT: "right-start",
                    RIGHTEND: "right-end",
                    LEFT: "left-start",
                    LEFTEND: "left-end"
                },
                Ne = {
                    offset: 0,
                    flip: true,
                    boundary: "scrollParent",
                    reference: "toggle",
                    display: "dynamic",
                    popperConfig: null
                },
                Le = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                    reference: "(string|element)",
                    display: "string",
                    popperConfig: "(null|object)"
                },
                ke = function() {
                    function c(e, t) {
                        this._element = e;
                        this._popper = null;
                        this._config = this._getConfig(t);
                        this._menu = this._getMenuElement();
                        this._inNavbar = this._detectNavbar();
                        this._addEventListeners()
                    }
                    var e = c.prototype;
                    e.toggle = function e() {
                        if (this._element.disabled || m(this._element).hasClass(xe.DISABLED)) {
                            return
                        }
                        var t = m(this._menu).hasClass(xe.SHOW);
                        c._clearMenus();
                        if (t) {
                            return
                        }
                        this.show(true)
                    };
                    e.show = function e(t) {
                        if (t === void 0) {
                            t = false
                        }
                        if (this._element.disabled || m(this._element).hasClass(xe.DISABLED) || m(this._menu).hasClass(xe.SHOW)) {
                            return
                        }
                        var n = {
                            relatedTarget: this._element
                        };
                        var i = m.Event(De.SHOW, n);
                        var r = c._getParentFromElement(this._element);
                        m(r).trigger(i);
                        if (i.isDefaultPrevented()) {
                            return
                        }
                        if (!this._inNavbar && t) {
                            if (typeof d === "undefined") {
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)")
                            }
                            var o = this._element;
                            if (this._config.reference === "parent") {
                                o = r
                            } else if (v.isElement(this._config.reference)) {
                                o = this._config.reference;
                                if (typeof this._config.reference.jquery !== "undefined") {
                                    o = this._config.reference[0]
                                }
                            }
                            if (this._config.boundary !== "scrollParent") {
                                m(r).addClass(xe.POSITION_STATIC)
                            }
                            this._popper = new d(o, this._menu, this._getPopperConfig())
                        }
                        if ("ontouchstart" in document.documentElement && m(r).closest(Oe.NAVBAR_NAV).length === 0) {
                            m(document.body).children().on("mouseover", null, m.noop)
                        }
                        this._element.focus();
                        this._element.setAttribute("aria-expanded", true);
                        m(this._menu).toggleClass(xe.SHOW);
                        m(r).toggleClass(xe.SHOW).trigger(m.Event(De.SHOWN, n))
                    };
                    e.hide = function e() {
                        if (this._element.disabled || m(this._element).hasClass(xe.DISABLED) || !m(this._menu).hasClass(xe.SHOW)) {
                            return
                        }
                        var t = {
                            relatedTarget: this._element
                        };
                        var n = m.Event(De.HIDE, t);
                        var i = c._getParentFromElement(this._element);
                        m(i).trigger(n);
                        if (n.isDefaultPrevented()) {
                            return
                        }
                        if (this._popper) {
                            this._popper.destroy()
                        }
                        m(this._menu).toggleClass(xe.SHOW);
                        m(i).toggleClass(xe.SHOW).trigger(m.Event(De.HIDDEN, t))
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, me);
                        m(this._element).off(ve);
                        this._element = null;
                        this._menu = null;
                        if (this._popper !== null) {
                            this._popper.destroy();
                            this._popper = null
                        }
                    };
                    e.update = function e() {
                        this._inNavbar = this._detectNavbar();
                        if (this._popper !== null) {
                            this._popper.scheduleUpdate()
                        }
                    };
                    e._addEventListeners = function e() {
                        var t = this;
                        m(this._element).on(De.CLICK, function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            t.toggle()
                        })
                    };
                    e._getConfig = function e(t) {
                        t = a({}, this.constructor.Default, {}, m(this._element).data(), {}, t);
                        v.typeCheckConfig(pe, t, this.constructor.DefaultType);
                        return t
                    };
                    e._getMenuElement = function e() {
                        if (!this._menu) {
                            var t = c._getParentFromElement(this._element);
                            if (t) {
                                this._menu = t.querySelector(Oe.MENU)
                            }
                        }
                        return this._menu
                    };
                    e._getPlacement = function e() {
                        var t = m(this._element.parentNode);
                        var n = Ie.BOTTOM;
                        if (t.hasClass(xe.DROPUP)) {
                            n = Ie.TOP;
                            if (m(this._menu).hasClass(xe.MENURIGHT)) {
                                n = Ie.TOPEND
                            }
                        } else if (t.hasClass(xe.DROPRIGHT)) {
                            n = Ie.RIGHT
                        } else if (t.hasClass(xe.DROPLEFT)) {
                            n = Ie.LEFT
                        } else if (m(this._menu).hasClass(xe.MENURIGHT)) {
                            n = Ie.BOTTOMEND
                        }
                        return n
                    };
                    e._detectNavbar = function e() {
                        return m(this._element).closest(".navbar").length > 0
                    };
                    e._getOffset = function e() {
                        var t = this;
                        var n = {};
                        if (typeof this._config.offset === "function") {
                            n.fn = function(e) {
                                e.offsets = a({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {});
                                return e
                            }
                        } else {
                            n.offset = this._config.offset
                        }
                        return n
                    };
                    e._getPopperConfig = function e() {
                        var t = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        if (this._config.display === "static") {
                            t.modifiers.applyStyle = {
                                enabled: false
                            }
                        }
                        return a({}, t, {}, this._config.popperConfig)
                    };
                    c._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this).data(me);
                            var t = typeof n === "object" ? n : null;
                            if (!e) {
                                e = new c(this, t);
                                m(this).data(me, e)
                            }
                            if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n]()
                            }
                        })
                    };
                    c._clearMenus = function e(t) {
                        if (t && (t.which === Se || t.type === "keyup" && t.which !== be)) {
                            return
                        }
                        var n = [].slice.call(document.querySelectorAll(Oe.DATA_TOGGLE));
                        for (var i = 0, r = n.length; i < r; i++) {
                            var o = c._getParentFromElement(n[i]);
                            var s = m(n[i]).data(me);
                            var a = {
                                relatedTarget: n[i]
                            };
                            if (t && t.type === "click") {
                                a.clickEvent = t
                            }
                            if (!s) {
                                continue
                            }
                            var l = s._menu;
                            if (!m(o).hasClass(xe.SHOW)) {
                                continue
                            }
                            if (t && (t.type === "click" && /input|textarea/i.test(t.target.tagName) || t.type === "keyup" && t.which === be) && m.contains(o, t.target)) {
                                continue
                            }
                            var u = m.Event(De.HIDE, a);
                            m(o).trigger(u);
                            if (u.isDefaultPrevented()) {
                                continue
                            }
                            if ("ontouchstart" in document.documentElement) {
                                m(document.body).children().off("mouseover", null, m.noop)
                            }
                            n[i].setAttribute("aria-expanded", "false");
                            if (s._popper) {
                                s._popper.destroy()
                            }
                            m(l).removeClass(xe.SHOW);
                            m(o).removeClass(xe.SHOW).trigger(m.Event(De.HIDDEN, a))
                        }
                    };
                    c._getParentFromElement = function e(t) {
                        var n;
                        var i = v.getSelectorFromElement(t);
                        if (i) {
                            n = document.querySelector(i)
                        }
                        return n || t.parentNode
                    };
                    c._dataApiKeydownHandler = function e(t) {
                        if (/input|textarea/i.test(t.target.tagName) ? t.which === Te || t.which !== Ee && (t.which !== we && t.which !== Ce || m(t.target).closest(Oe.MENU).length) : !Ae.test(t.which)) {
                            return
                        }
                        t.preventDefault();
                        t.stopPropagation();
                        if (this.disabled || m(this).hasClass(xe.DISABLED)) {
                            return
                        }
                        var n = c._getParentFromElement(this);
                        var i = m(n).hasClass(xe.SHOW);
                        if (!i && t.which === Ee) {
                            return
                        }
                        if (!i || i && (t.which === Ee || t.which === Te)) {
                            if (t.which === Ee) {
                                var r = n.querySelector(Oe.DATA_TOGGLE);
                                m(r).trigger("focus")
                            }
                            m(this).trigger("click");
                            return
                        }
                        var o = [].slice.call(n.querySelectorAll(Oe.VISIBLE_ITEMS)).filter(function(e) {
                            return m(e).is(":visible")
                        });
                        if (o.length === 0) {
                            return
                        }
                        var s = o.indexOf(t.target);
                        if (t.which === Ce && s > 0) {
                            s--
                        }
                        if (t.which === we && s < o.length - 1) {
                            s++
                        }
                        if (s < 0) {
                            s = 0
                        }
                        o[s].focus()
                    };
                    o(c, null, [{
                        key: "VERSION",
                        get: function e() {
                            return ge
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return Ne
                        }
                    }, {
                        key: "DefaultType",
                        get: function e() {
                            return Le
                        }
                    }]);
                    return c
                }();
            m(document).on(De.KEYDOWN_DATA_API, Oe.DATA_TOGGLE, ke._dataApiKeydownHandler).on(De.KEYDOWN_DATA_API, Oe.MENU, ke._dataApiKeydownHandler).on(De.CLICK_DATA_API + " " + De.KEYUP_DATA_API, ke._clearMenus).on(De.CLICK_DATA_API, Oe.DATA_TOGGLE, function(e) {
                e.preventDefault();
                e.stopPropagation();
                ke._jQueryInterface.call(m(this), "toggle")
            }).on(De.CLICK_DATA_API, Oe.FORM_CHILD, function(e) {
                e.stopPropagation()
            }), m.fn[pe] = ke._jQueryInterface, m.fn[pe].Constructor = ke, m.fn[pe].noConflict = function() {
                m.fn[pe] = _e;
                return ke._jQueryInterface
            };
            var Pe = "modal",
                He = "4.4.1",
                je = "bs.modal",
                Re = "." + je,
                Me = ".data-api",
                We = m.fn[Pe],
                Fe = 27,
                qe = {
                    backdrop: true,
                    keyboard: true,
                    focus: true,
                    show: true
                },
                Ue = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                Be = {
                    HIDE: "hide" + Re,
                    HIDE_PREVENTED: "hidePrevented" + Re,
                    HIDDEN: "hidden" + Re,
                    SHOW: "show" + Re,
                    SHOWN: "shown" + Re,
                    FOCUSIN: "focusin" + Re,
                    RESIZE: "resize" + Re,
                    CLICK_DISMISS: "click.dismiss" + Re,
                    KEYDOWN_DISMISS: "keydown.dismiss" + Re,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + Re,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Re,
                    CLICK_DATA_API: "click" + Re + Me
                },
                Ve = {
                    SCROLLABLE: "modal-dialog-scrollable",
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show",
                    STATIC: "modal-static"
                },
                Ge = {
                    DIALOG: ".modal-dialog",
                    MODAL_BODY: ".modal-body",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top"
                },
                Ke = function() {
                    function r(e, t) {
                        this._config = this._getConfig(t);
                        this._element = e;
                        this._dialog = e.querySelector(Ge.DIALOG);
                        this._backdrop = null;
                        this._isShown = false;
                        this._isBodyOverflowing = false;
                        this._ignoreBackdropClick = false;
                        this._isTransitioning = false;
                        this._scrollbarWidth = 0
                    }
                    var e = r.prototype;
                    e.toggle = function e(t) {
                        return this._isShown ? this.hide() : this.show(t)
                    };
                    e.show = function e(t) {
                        var n = this;
                        if (this._isShown || this._isTransitioning) {
                            return
                        }
                        if (m(this._element).hasClass(Ve.FADE)) {
                            this._isTransitioning = true
                        }
                        var i = m.Event(Be.SHOW, {
                            relatedTarget: t
                        });
                        m(this._element).trigger(i);
                        if (this._isShown || i.isDefaultPrevented()) {
                            return
                        }
                        this._isShown = true;
                        this._checkScrollbar();
                        this._setScrollbar();
                        this._adjustDialog();
                        this._setEscapeEvent();
                        this._setResizeEvent();
                        m(this._element).on(Be.CLICK_DISMISS, Ge.DATA_DISMISS, function(e) {
                            return n.hide(e)
                        });
                        m(this._dialog).on(Be.MOUSEDOWN_DISMISS, function() {
                            m(n._element).one(Be.MOUSEUP_DISMISS, function(e) {
                                if (m(e.target).is(n._element)) {
                                    n._ignoreBackdropClick = true
                                }
                            })
                        });
                        this._showBackdrop(function() {
                            return n._showElement(t)
                        })
                    };
                    e.hide = function e(t) {
                        var n = this;
                        if (t) {
                            t.preventDefault()
                        }
                        if (!this._isShown || this._isTransitioning) {
                            return
                        }
                        var i = m.Event(Be.HIDE);
                        m(this._element).trigger(i);
                        if (!this._isShown || i.isDefaultPrevented()) {
                            return
                        }
                        this._isShown = false;
                        var r = m(this._element).hasClass(Ve.FADE);
                        if (r) {
                            this._isTransitioning = true
                        }
                        this._setEscapeEvent();
                        this._setResizeEvent();
                        m(document).off(Be.FOCUSIN);
                        m(this._element).removeClass(Ve.SHOW);
                        m(this._element).off(Be.CLICK_DISMISS);
                        m(this._dialog).off(Be.MOUSEDOWN_DISMISS);
                        if (r) {
                            var o = v.getTransitionDurationFromElement(this._element);
                            m(this._element).one(v.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else {
                            this._hideModal()
                        }
                    };
                    e.dispose = function e() {
                        [window, this._element, this._dialog].forEach(function(e) {
                            return m(e).off(Re)
                        });
                        m(document).off(Be.FOCUSIN);
                        m.removeData(this._element, je);
                        this._config = null;
                        this._element = null;
                        this._dialog = null;
                        this._backdrop = null;
                        this._isShown = null;
                        this._isBodyOverflowing = null;
                        this._ignoreBackdropClick = null;
                        this._isTransitioning = null;
                        this._scrollbarWidth = null
                    };
                    e.handleUpdate = function e() {
                        this._adjustDialog()
                    };
                    e._getConfig = function e(t) {
                        t = a({}, qe, {}, t);
                        v.typeCheckConfig(Pe, t, Ue);
                        return t
                    };
                    e._triggerBackdropTransition = function e() {
                        var t = this;
                        if (this._config.backdrop === "static") {
                            var n = m.Event(Be.HIDE_PREVENTED);
                            m(this._element).trigger(n);
                            if (n.defaultPrevented) {
                                return
                            }
                            this._element.classList.add(Ve.STATIC);
                            var i = v.getTransitionDurationFromElement(this._element);
                            m(this._element).one(v.TRANSITION_END, function() {
                                t._element.classList.remove(Ve.STATIC)
                            }).emulateTransitionEnd(i);
                            this._element.focus()
                        } else {
                            this.hide()
                        }
                    };
                    e._showElement = function e(t) {
                        var n = this;
                        var i = m(this._element).hasClass(Ve.FADE);
                        var r = this._dialog ? this._dialog.querySelector(Ge.MODAL_BODY) : null;
                        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
                            document.body.appendChild(this._element)
                        }
                        this._element.style.display = "block";
                        this._element.removeAttribute("aria-hidden");
                        this._element.setAttribute("aria-modal", true);
                        if (m(this._dialog).hasClass(Ve.SCROLLABLE) && r) {
                            r.scrollTop = 0
                        } else {
                            this._element.scrollTop = 0
                        }
                        if (i) {
                            v.reflow(this._element)
                        }
                        m(this._element).addClass(Ve.SHOW);
                        if (this._config.focus) {
                            this._enforceFocus()
                        }
                        var o = m.Event(Be.SHOWN, {
                            relatedTarget: t
                        });
                        var s = function e() {
                            if (n._config.focus) {
                                n._element.focus()
                            }
                            n._isTransitioning = false;
                            m(n._element).trigger(o)
                        };
                        if (i) {
                            var a = v.getTransitionDurationFromElement(this._dialog);
                            m(this._dialog).one(v.TRANSITION_END, s).emulateTransitionEnd(a)
                        } else {
                            s()
                        }
                    };
                    e._enforceFocus = function e() {
                        var t = this;
                        m(document).off(Be.FOCUSIN).on(Be.FOCUSIN, function(e) {
                            if (document !== e.target && t._element !== e.target && m(t._element).has(e.target).length === 0) {
                                t._element.focus()
                            }
                        })
                    };
                    e._setEscapeEvent = function e() {
                        var t = this;
                        if (this._isShown && this._config.keyboard) {
                            m(this._element).on(Be.KEYDOWN_DISMISS, function(e) {
                                if (e.which === Fe) {
                                    t._triggerBackdropTransition()
                                }
                            })
                        } else if (!this._isShown) {
                            m(this._element).off(Be.KEYDOWN_DISMISS)
                        }
                    };
                    e._setResizeEvent = function e() {
                        var t = this;
                        if (this._isShown) {
                            m(window).on(Be.RESIZE, function(e) {
                                return t.handleUpdate(e)
                            })
                        } else {
                            m(window).off(Be.RESIZE)
                        }
                    };
                    e._hideModal = function e() {
                        var t = this;
                        this._element.style.display = "none";
                        this._element.setAttribute("aria-hidden", true);
                        this._element.removeAttribute("aria-modal");
                        this._isTransitioning = false;
                        this._showBackdrop(function() {
                            m(document.body).removeClass(Ve.OPEN);
                            t._resetAdjustments();
                            t._resetScrollbar();
                            m(t._element).trigger(Be.HIDDEN)
                        })
                    };
                    e._removeBackdrop = function e() {
                        if (this._backdrop) {
                            m(this._backdrop).remove();
                            this._backdrop = null
                        }
                    };
                    e._showBackdrop = function e(t) {
                        var n = this;
                        var i = m(this._element).hasClass(Ve.FADE) ? Ve.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            this._backdrop = document.createElement("div");
                            this._backdrop.className = Ve.BACKDROP;
                            if (i) {
                                this._backdrop.classList.add(i)
                            }
                            m(this._backdrop).appendTo(document.body);
                            m(this._element).on(Be.CLICK_DISMISS, function(e) {
                                if (n._ignoreBackdropClick) {
                                    n._ignoreBackdropClick = false;
                                    return
                                }
                                if (e.target !== e.currentTarget) {
                                    return
                                }
                                n._triggerBackdropTransition()
                            });
                            if (i) {
                                v.reflow(this._backdrop)
                            }
                            m(this._backdrop).addClass(Ve.SHOW);
                            if (!t) {
                                return
                            }
                            if (!i) {
                                t();
                                return
                            }
                            var r = v.getTransitionDurationFromElement(this._backdrop);
                            m(this._backdrop).one(v.TRANSITION_END, t).emulateTransitionEnd(r)
                        } else if (!this._isShown && this._backdrop) {
                            m(this._backdrop).removeClass(Ve.SHOW);
                            var o = function e() {
                                n._removeBackdrop();
                                if (t) {
                                    t()
                                }
                            };
                            if (m(this._element).hasClass(Ve.FADE)) {
                                var s = v.getTransitionDurationFromElement(this._backdrop);
                                m(this._backdrop).one(v.TRANSITION_END, o).emulateTransitionEnd(s)
                            } else {
                                o()
                            }
                        } else if (t) {
                            t()
                        }
                    };
                    e._adjustDialog = function e() {
                        var t = this._element.scrollHeight > document.documentElement.clientHeight;
                        if (!this._isBodyOverflowing && t) {
                            this._element.style.paddingLeft = this._scrollbarWidth + "px"
                        }
                        if (this._isBodyOverflowing && !t) {
                            this._element.style.paddingRight = this._scrollbarWidth + "px"
                        }
                    };
                    e._resetAdjustments = function e() {
                        this._element.style.paddingLeft = "";
                        this._element.style.paddingRight = ""
                    };
                    e._checkScrollbar = function e() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth;
                        this._scrollbarWidth = this._getScrollbarWidth()
                    };
                    e._setScrollbar = function e() {
                        var r = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(Ge.FIXED_CONTENT));
                            var n = [].slice.call(document.querySelectorAll(Ge.STICKY_CONTENT));
                            m(t).each(function(e, t) {
                                var n = t.style.paddingRight;
                                var i = m(t).css("padding-right");
                                m(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                            });
                            m(n).each(function(e, t) {
                                var n = t.style.marginRight;
                                var i = m(t).css("margin-right");
                                m(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight;
                            var o = m(document.body).css("padding-right");
                            m(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                        }
                        m(document.body).addClass(Ve.OPEN)
                    };
                    e._resetScrollbar = function e() {
                        var t = [].slice.call(document.querySelectorAll(Ge.FIXED_CONTENT));
                        m(t).each(function(e, t) {
                            var n = m(t).data("padding-right");
                            m(t).removeData("padding-right");
                            t.style.paddingRight = n ? n : ""
                        });
                        var n = [].slice.call(document.querySelectorAll("" + Ge.STICKY_CONTENT));
                        m(n).each(function(e, t) {
                            var n = m(t).data("margin-right");
                            if (typeof n !== "undefined") {
                                m(t).css("margin-right", n).removeData("margin-right")
                            }
                        });
                        var i = m(document.body).data("padding-right");
                        m(document.body).removeData("padding-right");
                        document.body.style.paddingRight = i ? i : ""
                    };
                    e._getScrollbarWidth = function e() {
                        var t = document.createElement("div");
                        t.className = Ve.SCROLLBAR_MEASURER;
                        document.body.appendChild(t);
                        var n = t.getBoundingClientRect().width - t.clientWidth;
                        document.body.removeChild(t);
                        return n
                    };
                    r._jQueryInterface = function e(n, i) {
                        return this.each(function() {
                            var e = m(this).data(je);
                            var t = a({}, qe, {}, m(this).data(), {}, typeof n === "object" && n ? n : {});
                            if (!e) {
                                e = new r(this, t);
                                m(this).data(je, e)
                            }
                            if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n](i)
                            } else if (t.show) {
                                e.show(i)
                            }
                        })
                    };
                    o(r, null, [{
                        key: "VERSION",
                        get: function e() {
                            return He
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return qe
                        }
                    }]);
                    return r
                }();
            m(document).on(Be.CLICK_DATA_API, Ge.DATA_TOGGLE, function(e) {
                var t = this;
                var n;
                var i = v.getSelectorFromElement(this);
                if (i) {
                    n = document.querySelector(i)
                }
                var r = m(n).data(je) ? "toggle" : a({}, m(n).data(), {}, m(this).data());
                if (this.tagName === "A" || this.tagName === "AREA") {
                    e.preventDefault()
                }
                var o = m(n).one(Be.SHOW, function(e) {
                    if (e.isDefaultPrevented()) {
                        return
                    }
                    o.one(Be.HIDDEN, function() {
                        if (m(t).is(":visible")) {
                            t.focus()
                        }
                    })
                });
                Ke._jQueryInterface.call(m(n), r, this)
            }), m.fn[Pe] = Ke._jQueryInterface, m.fn[Pe].Constructor = Ke, m.fn[Pe].noConflict = function() {
                m.fn[Pe] = We;
                return Ke._jQueryInterface
            };
            var Qe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                $e, Xe = {
                    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                    a: ["target", "href", "title", "rel"],
                    area: [],
                    b: [],
                    br: [],
                    col: [],
                    code: [],
                    div: [],
                    em: [],
                    hr: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    i: [],
                    img: ["src", "alt", "title", "width", "height"],
                    li: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    small: [],
                    span: [],
                    sub: [],
                    sup: [],
                    strong: [],
                    u: [],
                    ul: []
                },
                Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                ze = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

            function Je(e, t) {
                var n = e.nodeName.toLowerCase();
                if (t.indexOf(n) !== -1) {
                    if (Qe.indexOf(n) !== -1) {
                        return Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(ze))
                    }
                    return true
                }
                var i = t.filter(function(e) {
                    return e instanceof RegExp
                });
                for (var r = 0, o = i.length; r < o; r++) {
                    if (n.match(i[r])) {
                        return true
                    }
                }
                return false
            }

            function Ze(e, a, t) {
                if (e.length === 0) {
                    return e
                }
                if (t && typeof t === "function") {
                    return t(e)
                }
                var n = new window.DOMParser;
                var i = n.parseFromString(e, "text/html");
                var l = Object.keys(a);
                var u = [].slice.call(i.body.querySelectorAll("*"));
                var r = function e(t, n) {
                    var i = u[t];
                    var r = i.nodeName.toLowerCase();
                    if (l.indexOf(i.nodeName.toLowerCase()) === -1) {
                        i.parentNode.removeChild(i);
                        return "continue"
                    }
                    var o = [].slice.call(i.attributes);
                    var s = [].concat(a["*"] || [], a[r] || []);
                    o.forEach(function(e) {
                        if (!Je(e, s)) {
                            i.removeAttribute(e.nodeName)
                        }
                    })
                };
                for (var o = 0, s = u.length; o < s; o++) {
                    var c = r(o);
                    if (c === "continue") continue
                }
                return i.body.innerHTML
            }
            var et = "tooltip",
                tt = "4.4.1",
                nt = "bs.tooltip",
                it = "." + nt,
                rt = m.fn[et],
                ot = "bs-tooltip",
                st = new RegExp("(^|\\s)" + ot + "\\S+", "g"),
                at = ["sanitize", "whiteList", "sanitizeFn"],
                lt = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string|function)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)",
                    boundary: "(string|element)",
                    sanitize: "boolean",
                    sanitizeFn: "(null|function)",
                    whiteList: "object",
                    popperConfig: "(null|object)"
                },
                ut = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                ct = {
                    animation: true,
                    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: false,
                    selector: false,
                    placement: "top",
                    offset: 0,
                    container: false,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                    sanitize: true,
                    sanitizeFn: null,
                    whiteList: Xe,
                    popperConfig: null
                },
                ft = {
                    SHOW: "show",
                    OUT: "out"
                },
                dt = {
                    HIDE: "hide" + it,
                    HIDDEN: "hidden" + it,
                    SHOW: "show" + it,
                    SHOWN: "shown" + it,
                    INSERTED: "inserted" + it,
                    CLICK: "click" + it,
                    FOCUSIN: "focusin" + it,
                    FOCUSOUT: "focusout" + it,
                    MOUSEENTER: "mouseenter" + it,
                    MOUSELEAVE: "mouseleave" + it
                },
                ht = {
                    FADE: "fade",
                    SHOW: "show"
                },
                pt = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner",
                    ARROW: ".arrow"
                },
                gt = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                mt = function() {
                    function i(e, t) {
                        if (typeof d === "undefined") {
                            throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)")
                        }
                        this._isEnabled = true;
                        this._timeout = 0;
                        this._hoverState = "";
                        this._activeTrigger = {};
                        this._popper = null;
                        this.element = e;
                        this.config = this._getConfig(t);
                        this.tip = null;
                        this._setListeners()
                    }
                    var e = i.prototype;
                    e.enable = function e() {
                        this._isEnabled = true
                    };
                    e.disable = function e() {
                        this._isEnabled = false
                    };
                    e.toggleEnabled = function e() {
                        this._isEnabled = !this._isEnabled
                    };
                    e.toggle = function e(t) {
                        if (!this._isEnabled) {
                            return
                        }
                        if (t) {
                            var n = this.constructor.DATA_KEY;
                            var i = m(t.currentTarget).data(n);
                            if (!i) {
                                i = new this.constructor(t.currentTarget, this._getDelegateConfig());
                                m(t.currentTarget).data(n, i)
                            }
                            i._activeTrigger.click = !i._activeTrigger.click;
                            if (i._isWithActiveTrigger()) {
                                i._enter(null, i)
                            } else {
                                i._leave(null, i)
                            }
                        } else {
                            if (m(this.getTipElement()).hasClass(ht.SHOW)) {
                                this._leave(null, this);
                                return
                            }
                            this._enter(null, this)
                        }
                    };
                    e.dispose = function e() {
                        clearTimeout(this._timeout);
                        m.removeData(this.element, this.constructor.DATA_KEY);
                        m(this.element).off(this.constructor.EVENT_KEY);
                        m(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler);
                        if (this.tip) {
                            m(this.tip).remove()
                        }
                        this._isEnabled = null;
                        this._timeout = null;
                        this._hoverState = null;
                        this._activeTrigger = null;
                        if (this._popper) {
                            this._popper.destroy()
                        }
                        this._popper = null;
                        this.element = null;
                        this.config = null;
                        this.tip = null
                    };
                    e.show = function e() {
                        var n = this;
                        if (m(this.element).css("display") === "none") {
                            throw new Error("Please use show on visible elements")
                        }
                        var t = m.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            m(this.element).trigger(t);
                            var i = v.findShadowRoot(this.element);
                            var r = m.contains(i !== null ? i : this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !r) {
                                return
                            }
                            var o = this.getTipElement();
                            var s = v.getUID(this.constructor.NAME);
                            o.setAttribute("id", s);
                            this.element.setAttribute("aria-describedby", s);
                            this.setContent();
                            if (this.config.animation) {
                                m(o).addClass(ht.FADE)
                            }
                            var a = typeof this.config.placement === "function" ? this.config.placement.call(this, o, this.element) : this.config.placement;
                            var l = this._getAttachment(a);
                            this.addAttachmentClass(l);
                            var u = this._getContainer();
                            m(o).data(this.constructor.DATA_KEY, this);
                            if (!m.contains(this.element.ownerDocument.documentElement, this.tip)) {
                                m(o).appendTo(u)
                            }
                            m(this.element).trigger(this.constructor.Event.INSERTED);
                            this._popper = new d(this.element, o, this._getPopperConfig(l));
                            m(o).addClass(ht.SHOW);
                            if ("ontouchstart" in document.documentElement) {
                                m(document.body).children().on("mouseover", null, m.noop)
                            }
                            var c = function e() {
                                if (n.config.animation) {
                                    n._fixTransition()
                                }
                                var t = n._hoverState;
                                n._hoverState = null;
                                m(n.element).trigger(n.constructor.Event.SHOWN);
                                if (t === ft.OUT) {
                                    n._leave(null, n)
                                }
                            };
                            if (m(this.tip).hasClass(ht.FADE)) {
                                var f = v.getTransitionDurationFromElement(this.tip);
                                m(this.tip).one(v.TRANSITION_END, c).emulateTransitionEnd(f)
                            } else {
                                c()
                            }
                        }
                    };
                    e.hide = function e(t) {
                        var n = this;
                        var i = this.getTipElement();
                        var r = m.Event(this.constructor.Event.HIDE);
                        var o = function e() {
                            if (n._hoverState !== ft.SHOW && i.parentNode) {
                                i.parentNode.removeChild(i)
                            }
                            n._cleanTipClass();
                            n.element.removeAttribute("aria-describedby");
                            m(n.element).trigger(n.constructor.Event.HIDDEN);
                            if (n._popper !== null) {
                                n._popper.destroy()
                            }
                            if (t) {
                                t()
                            }
                        };
                        m(this.element).trigger(r);
                        if (r.isDefaultPrevented()) {
                            return
                        }
                        m(i).removeClass(ht.SHOW);
                        if ("ontouchstart" in document.documentElement) {
                            m(document.body).children().off("mouseover", null, m.noop)
                        }
                        this._activeTrigger[gt.CLICK] = false;
                        this._activeTrigger[gt.FOCUS] = false;
                        this._activeTrigger[gt.HOVER] = false;
                        if (m(this.tip).hasClass(ht.FADE)) {
                            var s = v.getTransitionDurationFromElement(i);
                            m(i).one(v.TRANSITION_END, o).emulateTransitionEnd(s)
                        } else {
                            o()
                        }
                        this._hoverState = ""
                    };
                    e.update = function e() {
                        if (this._popper !== null) {
                            this._popper.scheduleUpdate()
                        }
                    };
                    e.isWithContent = function e() {
                        return Boolean(this.getTitle())
                    };
                    e.addAttachmentClass = function e(t) {
                        m(this.getTipElement()).addClass(ot + "-" + t)
                    };
                    e.getTipElement = function e() {
                        this.tip = this.tip || m(this.config.template)[0];
                        return this.tip
                    };
                    e.setContent = function e() {
                        var t = this.getTipElement();
                        this.setElementContent(m(t.querySelectorAll(pt.TOOLTIP_INNER)), this.getTitle());
                        m(t).removeClass(ht.FADE + " " + ht.SHOW)
                    };
                    e.setElementContent = function e(t, n) {
                        if (typeof n === "object" && (n.nodeType || n.jquery)) {
                            if (this.config.html) {
                                if (!m(n).parent().is(t)) {
                                    t.empty().append(n)
                                }
                            } else {
                                t.text(m(n).text())
                            }
                            return
                        }
                        if (this.config.html) {
                            if (this.config.sanitize) {
                                n = Ze(n, this.config.whiteList, this.config.sanitizeFn)
                            }
                            t.html(n)
                        } else {
                            t.text(n)
                        }
                    };
                    e.getTitle = function e() {
                        var t = this.element.getAttribute("data-original-title");
                        if (!t) {
                            t = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title
                        }
                        return t
                    };
                    e._getPopperConfig = function e(t) {
                        var n = this;
                        var i = {
                            placement: t,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {
                                    behavior: this.config.fallbackPlacement
                                },
                                arrow: {
                                    element: pt.ARROW
                                },
                                preventOverflow: {
                                    boundariesElement: this.config.boundary
                                }
                            },
                            onCreate: function e(t) {
                                if (t.originalPlacement !== t.placement) {
                                    n._handlePopperPlacementChange(t)
                                }
                            },
                            onUpdate: function e(t) {
                                return n._handlePopperPlacementChange(t)
                            }
                        };
                        return a({}, i, {}, this.config.popperConfig)
                    };
                    e._getOffset = function e() {
                        var t = this;
                        var n = {};
                        if (typeof this.config.offset === "function") {
                            n.fn = function(e) {
                                e.offsets = a({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {});
                                return e
                            }
                        } else {
                            n.offset = this.config.offset
                        }
                        return n
                    };
                    e._getContainer = function e() {
                        if (this.config.container === false) {
                            return document.body
                        }
                        if (v.isElement(this.config.container)) {
                            return m(this.config.container)
                        }
                        return m(document).find(this.config.container)
                    };
                    e._getAttachment = function e(t) {
                        return ut[t.toUpperCase()]
                    };
                    e._setListeners = function e() {
                        var i = this;
                        var t = this.config.trigger.split(" ");
                        t.forEach(function(e) {
                            if (e === "click") {
                                m(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                                    return i.toggle(e)
                                })
                            } else if (e !== gt.MANUAL) {
                                var t = e === gt.HOVER ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN;
                                var n = e === gt.HOVER ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                                m(i.element).on(t, i.config.selector, function(e) {
                                    return i._enter(e)
                                }).on(n, i.config.selector, function(e) {
                                    return i._leave(e)
                                })
                            }
                        });
                        this._hideModalHandler = function() {
                            if (i.element) {
                                i.hide()
                            }
                        };
                        m(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler);
                        if (this.config.selector) {
                            this.config = a({}, this.config, {
                                trigger: "manual",
                                selector: ""
                            })
                        } else {
                            this._fixTitle()
                        }
                    };
                    e._fixTitle = function e() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        if (this.element.getAttribute("title") || t !== "string") {
                            this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                            this.element.setAttribute("title", "")
                        }
                    };
                    e._enter = function e(t, n) {
                        var i = this.constructor.DATA_KEY;
                        n = n || m(t.currentTarget).data(i);
                        if (!n) {
                            n = new this.constructor(t.currentTarget, this._getDelegateConfig());
                            m(t.currentTarget).data(i, n)
                        }
                        if (t) {
                            n._activeTrigger[t.type === "focusin" ? gt.FOCUS : gt.HOVER] = true
                        }
                        if (m(n.getTipElement()).hasClass(ht.SHOW) || n._hoverState === ft.SHOW) {
                            n._hoverState = ft.SHOW;
                            return
                        }
                        clearTimeout(n._timeout);
                        n._hoverState = ft.SHOW;
                        if (!n.config.delay || !n.config.delay.show) {
                            n.show();
                            return
                        }
                        n._timeout = setTimeout(function() {
                            if (n._hoverState === ft.SHOW) {
                                n.show()
                            }
                        }, n.config.delay.show)
                    };
                    e._leave = function e(t, n) {
                        var i = this.constructor.DATA_KEY;
                        n = n || m(t.currentTarget).data(i);
                        if (!n) {
                            n = new this.constructor(t.currentTarget, this._getDelegateConfig());
                            m(t.currentTarget).data(i, n)
                        }
                        if (t) {
                            n._activeTrigger[t.type === "focusout" ? gt.FOCUS : gt.HOVER] = false
                        }
                        if (n._isWithActiveTrigger()) {
                            return
                        }
                        clearTimeout(n._timeout);
                        n._hoverState = ft.OUT;
                        if (!n.config.delay || !n.config.delay.hide) {
                            n.hide();
                            return
                        }
                        n._timeout = setTimeout(function() {
                            if (n._hoverState === ft.OUT) {
                                n.hide()
                            }
                        }, n.config.delay.hide)
                    };
                    e._isWithActiveTrigger = function e() {
                        for (var t in this._activeTrigger) {
                            if (this._activeTrigger[t]) {
                                return true
                            }
                        }
                        return false
                    };
                    e._getConfig = function e(t) {
                        var n = m(this.element).data();
                        Object.keys(n).forEach(function(e) {
                            if (at.indexOf(e) !== -1) {
                                delete n[e]
                            }
                        });
                        t = a({}, this.constructor.Default, {}, n, {}, typeof t === "object" && t ? t : {});
                        if (typeof t.delay === "number") {
                            t.delay = {
                                show: t.delay,
                                hide: t.delay
                            }
                        }
                        if (typeof t.title === "number") {
                            t.title = t.title.toString()
                        }
                        if (typeof t.content === "number") {
                            t.content = t.content.toString()
                        }
                        v.typeCheckConfig(et, t, this.constructor.DefaultType);
                        if (t.sanitize) {
                            t.template = Ze(t.template, t.whiteList, t.sanitizeFn)
                        }
                        return t
                    };
                    e._getDelegateConfig = function e() {
                        var t = {};
                        if (this.config) {
                            for (var n in this.config) {
                                if (this.constructor.Default[n] !== this.config[n]) {
                                    t[n] = this.config[n]
                                }
                            }
                        }
                        return t
                    };
                    e._cleanTipClass = function e() {
                        var t = m(this.getTipElement());
                        var n = t.attr("class").match(st);
                        if (n !== null && n.length) {
                            t.removeClass(n.join(""))
                        }
                    };
                    e._handlePopperPlacementChange = function e(t) {
                        var n = t.instance;
                        this.tip = n.popper;
                        this._cleanTipClass();
                        this.addAttachmentClass(this._getAttachment(t.placement))
                    };
                    e._fixTransition = function e() {
                        var t = this.getTipElement();
                        var n = this.config.animation;
                        if (t.getAttribute("x-placement") !== null) {
                            return
                        }
                        m(t).removeClass(ht.FADE);
                        this.config.animation = false;
                        this.hide();
                        this.show();
                        this.config.animation = n
                    };
                    i._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this).data(nt);
                            var t = typeof n === "object" && n;
                            if (!e && /dispose|hide/.test(n)) {
                                return
                            }
                            if (!e) {
                                e = new i(this, t);
                                m(this).data(nt, e)
                            }
                            if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n]()
                            }
                        })
                    };
                    o(i, null, [{
                        key: "VERSION",
                        get: function e() {
                            return tt
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return ct
                        }
                    }, {
                        key: "NAME",
                        get: function e() {
                            return et
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function e() {
                            return nt
                        }
                    }, {
                        key: "Event",
                        get: function e() {
                            return dt
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function e() {
                            return it
                        }
                    }, {
                        key: "DefaultType",
                        get: function e() {
                            return lt
                        }
                    }]);
                    return i
                }();
            m.fn[et] = mt._jQueryInterface, m.fn[et].Constructor = mt, m.fn[et].noConflict = function() {
                m.fn[et] = rt;
                return mt._jQueryInterface
            };
            var vt = "popover",
                yt = "4.4.1",
                _t = "bs.popover",
                Et = "." + _t,
                Tt = m.fn[vt],
                bt = "bs-popover",
                Ct = new RegExp("(^|\\s)" + bt + "\\S+", "g"),
                wt = a({}, mt.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
                }),
                St = a({}, mt.DefaultType, {
                    content: "(string|element|function)"
                }),
                At = {
                    FADE: "fade",
                    SHOW: "show"
                },
                Dt = {
                    TITLE: ".popover-header",
                    CONTENT: ".popover-body"
                },
                xt = {
                    HIDE: "hide" + Et,
                    HIDDEN: "hidden" + Et,
                    SHOW: "show" + Et,
                    SHOWN: "shown" + Et,
                    INSERTED: "inserted" + Et,
                    CLICK: "click" + Et,
                    FOCUSIN: "focusin" + Et,
                    FOCUSOUT: "focusout" + Et,
                    MOUSEENTER: "mouseenter" + Et,
                    MOUSELEAVE: "mouseleave" + Et
                },
                Ot = function(e) {
                    n(i, e);

                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    var t = i.prototype;
                    t.isWithContent = function e() {
                        return this.getTitle() || this._getContent()
                    };
                    t.addAttachmentClass = function e(t) {
                        m(this.getTipElement()).addClass(bt + "-" + t)
                    };
                    t.getTipElement = function e() {
                        this.tip = this.tip || m(this.config.template)[0];
                        return this.tip
                    };
                    t.setContent = function e() {
                        var t = m(this.getTipElement());
                        this.setElementContent(t.find(Dt.TITLE), this.getTitle());
                        var n = this._getContent();
                        if (typeof n === "function") {
                            n = n.call(this.element)
                        }
                        this.setElementContent(t.find(Dt.CONTENT), n);
                        t.removeClass(At.FADE + " " + At.SHOW)
                    };
                    t._getContent = function e() {
                        return this.element.getAttribute("data-content") || this.config.content
                    };
                    t._cleanTipClass = function e() {
                        var t = m(this.getTipElement());
                        var n = t.attr("class").match(Ct);
                        if (n !== null && n.length > 0) {
                            t.removeClass(n.join(""))
                        }
                    };
                    i._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this).data(_t);
                            var t = typeof n === "object" ? n : null;
                            if (!e && /dispose|hide/.test(n)) {
                                return
                            }
                            if (!e) {
                                e = new i(this, t);
                                m(this).data(_t, e)
                            }
                            if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n]()
                            }
                        })
                    };
                    o(i, null, [{
                        key: "VERSION",
                        get: function e() {
                            return yt
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return wt
                        }
                    }, {
                        key: "NAME",
                        get: function e() {
                            return vt
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function e() {
                            return _t
                        }
                    }, {
                        key: "Event",
                        get: function e() {
                            return xt
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function e() {
                            return Et
                        }
                    }, {
                        key: "DefaultType",
                        get: function e() {
                            return St
                        }
                    }]);
                    return i
                }(mt);
            m.fn[vt] = Ot._jQueryInterface, m.fn[vt].Constructor = Ot, m.fn[vt].noConflict = function() {
                m.fn[vt] = Tt;
                return Ot._jQueryInterface
            };
            var It = "scrollspy",
                Nt = "4.4.1",
                Lt = "bs.scrollspy",
                kt = "." + Lt,
                Pt = ".data-api",
                Ht = m.fn[It],
                jt = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                Rt = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                Mt = {
                    ACTIVATE: "activate" + kt,
                    SCROLL: "scroll" + kt,
                    LOAD_DATA_API: "load" + kt + Pt
                },
                Wt = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active"
                },
                Ft = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                qt = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                Ut = function() {
                    function i(e, t) {
                        var n = this;
                        this._element = e;
                        this._scrollElement = e.tagName === "BODY" ? window : e;
                        this._config = this._getConfig(t);
                        this._selector = this._config.target + " " + Ft.NAV_LINKS + "," + (this._config.target + " " + Ft.LIST_ITEMS + ",") + (this._config.target + " " + Ft.DROPDOWN_ITEMS);
                        this._offsets = [];
                        this._targets = [];
                        this._activeTarget = null;
                        this._scrollHeight = 0;
                        m(this._scrollElement).on(Mt.SCROLL, function(e) {
                            return n._process(e)
                        });
                        this.refresh();
                        this._process()
                    }
                    var e = i.prototype;
                    e.refresh = function e() {
                        var t = this;
                        var n = this._scrollElement === this._scrollElement.window ? qt.OFFSET : qt.POSITION;
                        var r = this._config.method === "auto" ? n : this._config.method;
                        var o = r === qt.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [];
                        this._targets = [];
                        this._scrollHeight = this._getScrollHeight();
                        var i = [].slice.call(document.querySelectorAll(this._selector));
                        i.map(function(e) {
                            var t;
                            var n = v.getSelectorFromElement(e);
                            if (n) {
                                t = document.querySelector(n)
                            }
                            if (t) {
                                var i = t.getBoundingClientRect();
                                if (i.width || i.height) {
                                    return [m(t)[r]().top + o, n]
                                }
                            }
                            return null
                        }).filter(function(e) {
                            return e
                        }).sort(function(e, t) {
                            return e[0] - t[0]
                        }).forEach(function(e) {
                            t._offsets.push(e[0]);
                            t._targets.push(e[1])
                        })
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, Lt);
                        m(this._scrollElement).off(kt);
                        this._element = null;
                        this._scrollElement = null;
                        this._config = null;
                        this._selector = null;
                        this._offsets = null;
                        this._targets = null;
                        this._activeTarget = null;
                        this._scrollHeight = null
                    };
                    e._getConfig = function e(t) {
                        t = a({}, jt, {}, typeof t === "object" && t ? t : {});
                        if (typeof t.target !== "string") {
                            var n = m(t.target).attr("id");
                            if (!n) {
                                n = v.getUID(It);
                                m(t.target).attr("id", n)
                            }
                            t.target = "#" + n
                        }
                        v.typeCheckConfig(It, t, Rt);
                        return t
                    };
                    e._getScrollTop = function e() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    };
                    e._getScrollHeight = function e() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    };
                    e._getOffsetHeight = function e() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    };
                    e._process = function e() {
                        var t = this._getScrollTop() + this._config.offset;
                        var n = this._getScrollHeight();
                        var i = this._config.offset + n - this._getOffsetHeight();
                        if (this._scrollHeight !== n) {
                            this.refresh()
                        }
                        if (t >= i) {
                            var r = this._targets[this._targets.length - 1];
                            if (this._activeTarget !== r) {
                                this._activate(r)
                            }
                            return
                        }
                        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
                            this._activeTarget = null;
                            this._clear();
                            return
                        }
                        var o = this._offsets.length;
                        for (var s = o; s--;) {
                            var a = this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (typeof this._offsets[s + 1] === "undefined" || t < this._offsets[s + 1]);
                            if (a) {
                                this._activate(this._targets[s])
                            }
                        }
                    };
                    e._activate = function e(t) {
                        this._activeTarget = t;
                        this._clear();
                        var n = this._selector.split(",").map(function(e) {
                            return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                        });
                        var i = m([].slice.call(document.querySelectorAll(n.join(","))));
                        if (i.hasClass(Wt.DROPDOWN_ITEM)) {
                            i.closest(Ft.DROPDOWN).find(Ft.DROPDOWN_TOGGLE).addClass(Wt.ACTIVE);
                            i.addClass(Wt.ACTIVE)
                        } else {
                            i.addClass(Wt.ACTIVE);
                            i.parents(Ft.NAV_LIST_GROUP).prev(Ft.NAV_LINKS + ", " + Ft.LIST_ITEMS).addClass(Wt.ACTIVE);
                            i.parents(Ft.NAV_LIST_GROUP).prev(Ft.NAV_ITEMS).children(Ft.NAV_LINKS).addClass(Wt.ACTIVE)
                        }
                        m(this._scrollElement).trigger(Mt.ACTIVATE, {
                            relatedTarget: t
                        })
                    };
                    e._clear = function e() {
                        [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                            return e.classList.contains(Wt.ACTIVE)
                        }).forEach(function(e) {
                            return e.classList.remove(Wt.ACTIVE)
                        })
                    };
                    i._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this).data(Lt);
                            var t = typeof n === "object" && n;
                            if (!e) {
                                e = new i(this, t);
                                m(this).data(Lt, e)
                            }
                            if (typeof n === "string") {
                                if (typeof e[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                e[n]()
                            }
                        })
                    };
                    o(i, null, [{
                        key: "VERSION",
                        get: function e() {
                            return Nt
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return jt
                        }
                    }]);
                    return i
                }();
            m(window).on(Mt.LOAD_DATA_API, function() {
                var e = [].slice.call(document.querySelectorAll(Ft.DATA_SPY));
                var t = e.length;
                for (var n = t; n--;) {
                    var i = m(e[n]);
                    Ut._jQueryInterface.call(i, i.data())
                }
            }), m.fn[It] = Ut._jQueryInterface, m.fn[It].Constructor = Ut, m.fn[It].noConflict = function() {
                m.fn[It] = Ht;
                return Ut._jQueryInterface
            };
            var Bt = "tab",
                Vt = "4.4.1",
                Gt = "bs.tab",
                Kt = "." + Gt,
                Qt = ".data-api",
                $t = m.fn[Bt],
                Xt = {
                    HIDE: "hide" + Kt,
                    HIDDEN: "hidden" + Kt,
                    SHOW: "show" + Kt,
                    SHOWN: "shown" + Kt,
                    CLICK_DATA_API: "click" + Kt + Qt
                },
                Yt = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                zt = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                Jt = function() {
                    function i(e) {
                        this._element = e
                    }
                    var e = i.prototype;
                    e.show = function e() {
                        var i = this;
                        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && m(this._element).hasClass(Yt.ACTIVE) || m(this._element).hasClass(Yt.DISABLED)) {
                            return
                        }
                        var t;
                        var r;
                        var n = m(this._element).closest(zt.NAV_LIST_GROUP)[0];
                        var o = v.getSelectorFromElement(this._element);
                        if (n) {
                            var s = n.nodeName === "UL" || n.nodeName === "OL" ? zt.ACTIVE_UL : zt.ACTIVE;
                            r = m.makeArray(m(n).find(s));
                            r = r[r.length - 1]
                        }
                        var a = m.Event(Xt.HIDE, {
                            relatedTarget: this._element
                        });
                        var l = m.Event(Xt.SHOW, {
                            relatedTarget: r
                        });
                        if (r) {
                            m(r).trigger(a)
                        }
                        m(this._element).trigger(l);
                        if (l.isDefaultPrevented() || a.isDefaultPrevented()) {
                            return
                        }
                        if (o) {
                            t = document.querySelector(o)
                        }
                        this._activate(this._element, n);
                        var u = function e() {
                            var t = m.Event(Xt.HIDDEN, {
                                relatedTarget: i._element
                            });
                            var n = m.Event(Xt.SHOWN, {
                                relatedTarget: r
                            });
                            m(r).trigger(t);
                            m(i._element).trigger(n)
                        };
                        if (t) {
                            this._activate(t, t.parentNode, u)
                        } else {
                            u()
                        }
                    };
                    e.dispose = function e() {
                        m.removeData(this._element, Gt);
                        this._element = null
                    };
                    e._activate = function e(t, n, i) {
                        var r = this;
                        var o = n && (n.nodeName === "UL" || n.nodeName === "OL") ? m(n).find(zt.ACTIVE_UL) : m(n).children(zt.ACTIVE);
                        var s = o[0];
                        var a = i && s && m(s).hasClass(Yt.FADE);
                        var l = function e() {
                            return r._transitionComplete(t, s, i)
                        };
                        if (s && a) {
                            var u = v.getTransitionDurationFromElement(s);
                            m(s).removeClass(Yt.SHOW).one(v.TRANSITION_END, l).emulateTransitionEnd(u)
                        } else {
                            l()
                        }
                    };
                    e._transitionComplete = function e(t, n, i) {
                        if (n) {
                            m(n).removeClass(Yt.ACTIVE);
                            var r = m(n.parentNode).find(zt.DROPDOWN_ACTIVE_CHILD)[0];
                            if (r) {
                                m(r).removeClass(Yt.ACTIVE)
                            }
                            if (n.getAttribute("role") === "tab") {
                                n.setAttribute("aria-selected", false)
                            }
                        }
                        m(t).addClass(Yt.ACTIVE);
                        if (t.getAttribute("role") === "tab") {
                            t.setAttribute("aria-selected", true)
                        }
                        v.reflow(t);
                        if (t.classList.contains(Yt.FADE)) {
                            t.classList.add(Yt.SHOW)
                        }
                        if (t.parentNode && m(t.parentNode).hasClass(Yt.DROPDOWN_MENU)) {
                            var o = m(t).closest(zt.DROPDOWN)[0];
                            if (o) {
                                var s = [].slice.call(o.querySelectorAll(zt.DROPDOWN_TOGGLE));
                                m(s).addClass(Yt.ACTIVE)
                            }
                            t.setAttribute("aria-expanded", true)
                        }
                        if (i) {
                            i()
                        }
                    };
                    i._jQueryInterface = function e(n) {
                        return this.each(function() {
                            var e = m(this);
                            var t = e.data(Gt);
                            if (!t) {
                                t = new i(this);
                                e.data(Gt, t)
                            }
                            if (typeof n === "string") {
                                if (typeof t[n] === "undefined") {
                                    throw new TypeError('No method named "' + n + '"')
                                }
                                t[n]()
                            }
                        })
                    };
                    o(i, null, [{
                        key: "VERSION",
                        get: function e() {
                            return Vt
                        }
                    }]);
                    return i
                }();
            m(document).on(Xt.CLICK_DATA_API, zt.DATA_TOGGLE, function(e) {
                e.preventDefault();
                Jt._jQueryInterface.call(m(this), "show")
            }), m.fn[Bt] = Jt._jQueryInterface, m.fn[Bt].Constructor = Jt, m.fn[Bt].noConflict = function() {
                m.fn[Bt] = $t;
                return Jt._jQueryInterface
            };
            var Zt = "toast",
                en = "4.4.1",
                tn = "bs.toast",
                nn = "." + tn,
                rn = m.fn[Zt],
                on = {
                    CLICK_DISMISS: "click.dismiss" + nn,
                    HIDE: "hide" + nn,
                    HIDDEN: "hidden" + nn,
                    SHOW: "show" + nn,
                    SHOWN: "shown" + nn
                },
                sn = {
                    FADE: "fade",
                    HIDE: "hide",
                    SHOW: "show",
                    SHOWING: "showing"
                },
                an = {
                    animation: "boolean",
                    autohide: "boolean",
                    delay: "number"
                },
                ln = {
                    animation: true,
                    autohide: true,
                    delay: 500
                },
                un = {
                    DATA_DISMISS: '[data-dismiss="toast"]'
                },
                cn = function() {
                    function r(e, t) {
                        this._element = e;
                        this._config = this._getConfig(t);
                        this._timeout = null;
                        this._setListeners()
                    }
                    var e = r.prototype;
                    e.show = function e() {
                        var t = this;
                        var n = m.Event(on.SHOW);
                        m(this._element).trigger(n);
                        if (n.isDefaultPrevented()) {
                            return
                        }
                        if (this._config.animation) {
                            this._element.classList.add(sn.FADE)
                        }
                        var i = function e() {
                            t._element.classList.remove(sn.SHOWING);
                            t._element.classList.add(sn.SHOW);
                            m(t._element).trigger(on.SHOWN);
                            if (t._config.autohide) {
                                t._timeout = setTimeout(function() {
                                    t.hide()
                                }, t._config.delay)
                            }
                        };
                        this._element.classList.remove(sn.HIDE);
                        v.reflow(this._element);
                        this._element.classList.add(sn.SHOWING);
                        if (this._config.animation) {
                            var r = v.getTransitionDurationFromElement(this._element);
                            m(this._element).one(v.TRANSITION_END, i).emulateTransitionEnd(r)
                        } else {
                            i()
                        }
                    };
                    e.hide = function e() {
                        if (!this._element.classList.contains(sn.SHOW)) {
                            return
                        }
                        var t = m.Event(on.HIDE);
                        m(this._element).trigger(t);
                        if (t.isDefaultPrevented()) {
                            return
                        }
                        this._close()
                    };
                    e.dispose = function e() {
                        clearTimeout(this._timeout);
                        this._timeout = null;
                        if (this._element.classList.contains(sn.SHOW)) {
                            this._element.classList.remove(sn.SHOW)
                        }
                        m(this._element).off(on.CLICK_DISMISS);
                        m.removeData(this._element, tn);
                        this._element = null;
                        this._config = null
                    };
                    e._getConfig = function e(t) {
                        t = a({}, ln, {}, m(this._element).data(), {}, typeof t === "object" && t ? t : {});
                        v.typeCheckConfig(Zt, t, this.constructor.DefaultType);
                        return t
                    };
                    e._setListeners = function e() {
                        var t = this;
                        m(this._element).on(on.CLICK_DISMISS, un.DATA_DISMISS, function() {
                            return t.hide()
                        })
                    };
                    e._close = function e() {
                        var t = this;
                        var n = function e() {
                            t._element.classList.add(sn.HIDE);
                            m(t._element).trigger(on.HIDDEN)
                        };
                        this._element.classList.remove(sn.SHOW);
                        if (this._config.animation) {
                            var i = v.getTransitionDurationFromElement(this._element);
                            m(this._element).one(v.TRANSITION_END, n).emulateTransitionEnd(i)
                        } else {
                            n()
                        }
                    };
                    r._jQueryInterface = function e(i) {
                        return this.each(function() {
                            var e = m(this);
                            var t = e.data(tn);
                            var n = typeof i === "object" && i;
                            if (!t) {
                                t = new r(this, n);
                                e.data(tn, t)
                            }
                            if (typeof i === "string") {
                                if (typeof t[i] === "undefined") {
                                    throw new TypeError('No method named "' + i + '"')
                                }
                                t[i](this)
                            }
                        })
                    };
                    o(r, null, [{
                        key: "VERSION",
                        get: function e() {
                            return en
                        }
                    }, {
                        key: "DefaultType",
                        get: function e() {
                            return an
                        }
                    }, {
                        key: "Default",
                        get: function e() {
                            return ln
                        }
                    }]);
                    return r
                }();
            m.fn[Zt] = cn._jQueryInterface, m.fn[Zt].Constructor = cn, m.fn[Zt].noConflict = function() {
                m.fn[Zt] = rn;
                return cn._jQueryInterface
            }, e.Alert = A, e.Button = j, e.Carousel = ee, e.Collapse = he, e.Dropdown = ke, e.Modal = Ke, e.Popover = Ot, e.Scrollspy = Ut, e.Tab = Jt, e.Toast = cn, e.Tooltip = mt, e.Util = v, Object.defineProperty(e, "__esModule", {
                value: true
            })
        }(t, n("./node_modules/jquery/dist/jquery.js"), n("./node_modules/popper.js/dist/esm/popper.js"))
    },
    "./node_modules/jquery/dist/jquery.js": function(an, ln, e) {
        var un;
        ! function(e, t) {
            "use strict";
            "object" == typeof an && "object" == typeof an.exports ? an.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }("undefined" != typeof window ? window : this, function(C, e) {
            "use strict";

            function g(e) {
                return null != e && e === e.window
            }
            var t = [],
                w = C.document,
                i = Object.getPrototypeOf,
                a = t.slice,
                m = t.concat,
                l = t.push,
                r = t.indexOf,
                n = {},
                o = n.toString,
                v = n.hasOwnProperty,
                s = v.toString,
                u = s.call(Object),
                y = {},
                _ = function(e) {
                    return "function" == typeof e && "number" != typeof e.nodeType
                },
                c = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function E(e, t, n) {
                var i, r, o = (n = n || w).createElement("script");
                if (o.text = e, t)
                    for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o)
            }

            function T(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
            }
            var S = function(e, t) {
                    return new S.fn.init(e, t)
                },
                f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function d(e) {
                var t = !!e && "length" in e && e.length,
                    n = T(e);
                return !_(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
            }
            S.fn = S.prototype = {
                jquery: "3.4.1",
                constructor: S,
                length: 0,
                toArray: function() {
                    return a.call(this)
                },
                get: function(e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = S.merge(this.constructor(), e);
                    return t.prevObject = this, t
                },
                each: function(e) {
                    return S.each(this, e)
                },
                map: function(n) {
                    return this.pushStack(S.map(this, function(e, t) {
                        return n.call(e, t, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(a.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: t.sort,
                splice: t.splice
            }, S.extend = S.fn.extend = function() {
                var e, t, n, i, r, o, s = arguments[0] || {},
                    a = 1,
                    l = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || _(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                    if (null != (e = arguments[a]))
                        for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (S.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || S.isPlainObject(n) ? n : {}, r = !1, s[t] = S.extend(u, o, i)) : void 0 !== i && (s[t] = i));
                return s
            }, S.extend({
                expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    return !(!e || "[object Object]" !== o.call(e)) && (!(t = i(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && s.call(n) === u)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                globalEval: function(e, t) {
                    E(e, {
                        nonce: t && t.nonce
                    })
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (d(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(f, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (d(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : r.call(t, e, n)
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r, o = 0,
                        s = [];
                    if (d(e))
                        for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                    else
                        for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                    return m.apply([], s)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
            var h = function(n) {
                function f(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }

                function r() {
                    b()
                }
                var e, h, E, o, s, p, d, g, T, l, u, b, C, a, w, m, c, v, y, S = "sizzle" + 1 * new Date,
                    _ = n.document,
                    A = 0,
                    i = 0,
                    D = le(),
                    x = le(),
                    O = le(),
                    I = le(),
                    N = function(e, t) {
                        return e === t && (u = !0), 0
                    },
                    L = {}.hasOwnProperty,
                    t = [],
                    k = t.pop,
                    P = t.push,
                    H = t.push,
                    j = t.slice,
                    R = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    W = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    q = "\\[" + W + "*(" + F + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + W + "*\\]",
                    U = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    B = new RegExp(W + "+", "g"),
                    V = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
                    G = new RegExp("^" + W + "*," + W + "*"),
                    K = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
                    Q = new RegExp(W + "|>"),
                    $ = new RegExp(U),
                    X = new RegExp("^" + F + "$"),
                    Y = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + U),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
                    },
                    z = /HTML$/i,
                    J = /^(?:input|select|textarea|button)$/i,
                    Z = /^h\d$/i,
                    ee = /^[^{]+\{\s*\[native \w/,
                    te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ne = /[+~]/,
                    ie = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"),
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    se = Ee(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    H.apply(t = j.call(_.childNodes), _.childNodes), t[_.childNodes.length].nodeType
                } catch (e) {
                    H = {
                        apply: t.length ? function(e, t) {
                            P.apply(e, j.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(t, e, n, i) {
                    var r, o, s, a, l, u, c, f = e && e.ownerDocument,
                        d = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                    if (!i && ((e ? e.ownerDocument || e : _) !== C && b(e), e = e || C, w)) {
                        if (11 !== d && (l = te.exec(t)))
                            if (r = l[1]) {
                                if (9 === d) {
                                    if (!(s = e.getElementById(r))) return n;
                                    if (s.id === r) return n.push(s), n
                                } else if (f && (s = f.getElementById(r)) && y(e, s) && s.id === r) return n.push(s), n
                            } else {
                                if (l[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                                if ((r = l[3]) && h.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(r)), n
                            }
                        if (h.qsa && !I[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                            if (c = t, f = e, 1 === d && Q.test(t)) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(re, oe) : e.setAttribute("id", a = S), o = (u = p(t)).length; o--;) u[o] = "#" + a + " " + _e(u[o]);
                                c = u.join(","), f = ne.test(t) && ve(e.parentNode) || e
                            }
                            try {
                                return H.apply(n, f.querySelectorAll(c)), n
                            } catch (e) {
                                I(t, !0)
                            } finally {
                                a === S && e.removeAttribute("id")
                            }
                        }
                    }
                    return g(t.replace(V, "$1"), e, n, i)
                }

                function le() {
                    var i = [];
                    return function e(t, n) {
                        return i.push(t + " ") > E.cacheLength && delete e[i.shift()], e[t + " "] = n
                    }
                }

                function ue(e) {
                    return e[S] = !0, e
                }

                function ce(e) {
                    var t = C.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function fe(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) E.attrHandle[n[i]] = t
                }

                function de(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function he(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pe(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }

                function ge(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function me(s) {
                    return ue(function(o) {
                        return o = +o, ue(function(e, t) {
                            for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in h = ae.support = {}, s = ae.isXML = function(e) {
                        var t = e.namespaceURI,
                            n = (e.ownerDocument || e).documentElement;
                        return !z.test(t || n && n.nodeName || "HTML")
                    }, b = ae.setDocument = function(e) {
                        var t, n, i = e ? e.ownerDocument || e : _;
                        return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, w = !s(C), _ !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", r, !1) : n.attachEvent && n.attachEvent("onunload", r)), h.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), h.getElementsByTagName = ce(function(e) {
                            return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                        }), h.getElementsByClassName = ee.test(C.getElementsByClassName), h.getById = ce(function(e) {
                            return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                        }), h.getById ? (E.filter.ID = function(e) {
                            var t = e.replace(ie, f);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, E.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && w) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }) : (E.filter.ID = function(e) {
                            var n = e.replace(ie, f);
                            return function(e) {
                                var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }, E.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && w) {
                                var n, i, r, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), E.find.TAG = h.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" !== e) return o;
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, E.find.CLASS = h.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && w) return t.getElementsByClassName(e)
                        }, c = [], m = [], (h.qsa = ee.test(C.querySelectorAll)) && (ce(function(e) {
                            a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + S + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || m.push(".#.+[+~]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (h.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                            h.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), c.push("!=", U)
                        }), m = m.length && new RegExp(m.join("|")), c = c.length && new RegExp(c.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                i = t && t.parentNode;
                            return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, N = t ? function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === _ && y(_, e) ? -1 : t === C || t.ownerDocument === _ && y(_, t) ? 1 : l ? R(l, e) - R(l, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!r || !o) return e === C ? -1 : t === C ? 1 : r ? -1 : o ? 1 : l ? R(l, e) - R(l, t) : 0;
                            if (r === o) return de(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? de(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
                        }), C
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if ((e.ownerDocument || e) !== C && b(e), h.matchesSelector && w && !I[t + " "] && (!c || !c.test(t)) && (!m || !m.test(t))) try {
                            var n = v.call(e, t);
                            if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            I(t, !0)
                        }
                        return 0 < ae(t, C, null, [e]).length
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) !== C && b(e), y(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) !== C && b(e);
                        var n = E.attrHandle[t.toLowerCase()],
                            i = n && L.call(E.attrHandle, t.toLowerCase()) ? n(e, t, !w) : void 0;
                        return void 0 !== i ? i : h.attributes || !w ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            r = 0;
                        if (u = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(N), u) {
                            for (; t = e[r++];) t === e[r] && (i = n.push(r));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return l = null, e
                    }, o = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += o(t);
                        return n
                    }, (E = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: Y,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ie, f).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = D[e + " "];
                                return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && D(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(n, i, r) {
                                return function(e) {
                                    var t = ae.attr(e, n);
                                    return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(B, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
                                }
                            },
                            CHILD: function(p, e, t, g, m) {
                                var v = "nth" !== p.slice(0, 3),
                                    y = "last" !== p.slice(-4),
                                    _ = "of-type" === e;
                                return 1 === g && 0 === m ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, n) {
                                    var i, r, o, s, a, l, u = v != y ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        f = _ && e.nodeName.toLowerCase(),
                                        d = !n && !_,
                                        h = !1;
                                    if (c) {
                                        if (v) {
                                            for (; u;) {
                                                for (s = e; s = s[u];)
                                                    if (_ ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                                l = u = "only" === p && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [y ? c.firstChild : c.lastChild], y && d) {
                                            for (h = (a = (i = (r = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++h && s === e) {
                                                    r[p] = [A, a, h];
                                                    break
                                                }
                                        } else if (d && (h = a = (i = (r = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === A && i[1]), !1 === h)
                                            for (;
                                                (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((_ ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((r = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [A, h]), s !== e)););
                                        return (h -= m) === g || h % g == 0 && 0 <= h / g
                                    }
                                }
                            },
                            PSEUDO: function(e, o) {
                                var t, s = E.pseudos[e] || E.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o], E.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                                    for (var n, i = s(e, o), r = i.length; r--;) e[n = R(e, i[r])] = !(t[n] = i[r])
                                }) : function(e) {
                                    return s(e, 0, t)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: ue(function(e) {
                                var i = [],
                                    r = [],
                                    a = d(e.replace(V, "$1"));
                                return a[S] ? ue(function(e, t, n, i) {
                                    for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                                }) : function(e, t, n) {
                                    return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                                }
                            }),
                            has: ue(function(t) {
                                return function(e) {
                                    return 0 < ae(t, e).length
                                }
                            }),
                            contains: ue(function(t) {
                                return t = t.replace(ie, f),
                                    function(e) {
                                        return -1 < (e.textContent || o(e)).indexOf(t)
                                    }
                            }),
                            lang: ue(function(n) {
                                return X.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = w ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === a
                            },
                            focus: function(e) {
                                return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: ge(!1),
                            disabled: ge(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !E.pseudos.empty(e)
                            },
                            header: function(e) {
                                return Z.test(e.nodeName)
                            },
                            input: function(e) {
                                return J.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                var t;
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                            },
                            first: me(function() {
                                return [0]
                            }),
                            last: me(function(e, t) {
                                return [t - 1]
                            }),
                            eq: me(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: me(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: me(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: me(function(e, t, n) {
                                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                return e
                            }),
                            gt: me(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = E.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) E.pseudos[e] = he(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) E.pseudos[e] = pe(e);

                function ye() {}

                function _e(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function Ee(a, e, t) {
                    var l = e.dir,
                        u = e.next,
                        c = u || l,
                        f = t && "parentNode" === c,
                        d = i++;
                    return e.first ? function(e, t, n) {
                        for (; e = e[l];)
                            if (1 === e.nodeType || f) return a(e, t, n);
                        return !1
                    } : function(e, t, n) {
                        var i, r, o, s = [A, d];
                        if (n) {
                            for (; e = e[l];)
                                if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                        } else
                            for (; e = e[l];)
                                if (1 === e.nodeType || f)
                                    if (r = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[l] || e;
                                    else {
                                        if ((i = r[c]) && i[0] === A && i[1] === d) return s[2] = i[2];
                                        if ((r[c] = s)[2] = a(e, t, n)) return !0
                                    } return !1
                    }
                }

                function Te(r) {
                    return 1 < r.length ? function(e, t, n) {
                        for (var i = r.length; i--;)
                            if (!r[i](e, t, n)) return !1;
                        return !0
                    } : r[0]
                }

                function be(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                    return s
                }

                function Ce(h, p, g, m, v, e) {
                    return m && !m[S] && (m = Ce(m)), v && !v[S] && (v = Ce(v, e)), ue(function(e, t, n, i) {
                        var r, o, s, a = [],
                            l = [],
                            u = t.length,
                            c = e || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                return n
                            }(p || "*", n.nodeType ? [n] : n, []),
                            f = !h || !e && p ? c : be(c, a, h, n, i),
                            d = g ? v || (e ? h : u || m) ? [] : t : f;
                        if (g && g(f, d, n, i), m)
                            for (r = be(d, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (d[l[o]] = !(f[l[o]] = s));
                        if (e) {
                            if (v || h) {
                                if (v) {
                                    for (r = [], o = d.length; o--;)(s = d[o]) && r.push(f[o] = s);
                                    v(null, d = [], r, i)
                                }
                                for (o = d.length; o--;)(s = d[o]) && -1 < (r = v ? R(e, s) : a[o]) && (e[r] = !(t[r] = s))
                            }
                        } else d = be(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : H.apply(t, d)
                    })
                }

                function we(e) {
                    for (var r, t, n, i = e.length, o = E.relative[e[0].type], s = o || E.relative[" "], a = o ? 1 : 0, l = Ee(function(e) {
                            return e === r
                        }, s, !0), u = Ee(function(e) {
                            return -1 < R(r, e)
                        }, s, !0), c = [function(e, t, n) {
                            var i = !o && (n || t !== T) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                            return r = null, i
                        }]; a < i; a++)
                        if (t = E.relative[e[a].type]) c = [Ee(Te(c), t)];
                        else {
                            if ((t = E.filter[e[a].type].apply(null, e[a].matches))[S]) {
                                for (n = ++a; n < i && !E.relative[e[n].type]; n++);
                                return Ce(1 < a && Te(c), 1 < a && _e(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(V, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && _e(e))
                            }
                            c.push(t)
                        }
                    return Te(c)
                }

                function Se(m, v) {
                    function e(e, t, n, i, r) {
                        var o, s, a, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = T,
                            h = e || _ && E.find.TAG("*", r),
                            p = A += null == d ? 1 : Math.random() || .1,
                            g = h.length;
                        for (r && (T = t === C || t || r); u !== g && null != (o = h[u]); u++) {
                            if (_ && o) {
                                for (s = 0, t || o.ownerDocument === C || (b(o), n = !w); a = m[s++];)
                                    if (a(o, t || C, n)) {
                                        i.push(o);
                                        break
                                    }
                                r && (A = p)
                            }
                            y && ((o = !a && o) && l--, e && c.push(o))
                        }
                        if (l += u, y && u !== l) {
                            for (s = 0; a = v[s++];) a(c, f, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || f[u] || (f[u] = k.call(i));
                                f = be(f)
                            }
                            H.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(i)
                        }
                        return r && (A = p, T = d), c
                    }
                    var y = 0 < v.length,
                        _ = 0 < m.length;
                    return y ? ue(e) : e
                }
                return ye.prototype = E.filters = E.pseudos, E.setFilters = new ye, p = ae.tokenize = function(e, t) {
                    var n, i, r, o, s, a, l, u = x[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, a = [], l = E.preFilter; s;) {
                        for (o in n && !(i = G.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = K.exec(s)) && (n = i.shift(), r.push({
                                value: n,
                                type: i[0].replace(V, " ")
                            }), s = s.slice(n.length)), E.filter) !(i = Y[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                            value: n,
                            type: o,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ae.error(e) : x(e, a).slice(0)
                }, d = ae.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = O[e + " "];
                    if (!o) {
                        for (n = (t = t || p(e)).length; n--;)(o = we(t[n]))[S] ? i.push(o) : r.push(o);
                        (o = O(e, Se(r, i))).selector = e
                    }
                    return o
                }, g = ae.select = function(e, t, n, i) {
                    var r, o, s, a, l, u = "function" == typeof e && e,
                        c = !i && p(e = u.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && w && E.relative[o[1].type]) {
                            if (!(t = (E.find.ID(s.matches[0].replace(ie, f), t) || [])[0])) return n;
                            u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = Y.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !E.relative[a = s.type]);)
                            if ((l = E.find[a]) && (i = l(s.matches[0].replace(ie, f), ne.test(o[0].type) && ve(t.parentNode) || t))) {
                                if (o.splice(r, 1), !(e = i.length && _e(o))) return H.apply(n, i), n;
                                break
                            }
                    }
                    return (u || d(e, c))(i, t, !w, n, !t || ne.test(e) && ve(t.parentNode) || t), n
                }, h.sortStable = S.split("").sort(N).join("") === S, h.detectDuplicates = !!u, b(), h.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || fe("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), h.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || fe("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || fe(M, function(e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), ae
            }(C);
            S.find = h, S.expr = h.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = h.uniqueSort, S.text = h.getText, S.isXMLDoc = h.isXML, S.contains = h.contains, S.escapeSelector = h.escape;

            function p(e, t, n) {
                for (var i = [], r = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (r && S(e).is(n)) break;
                        i.push(e)
                    }
                return i
            }

            function b(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
            var A = S.expr.match.needsContext;

            function D(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var x = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function O(e, n, i) {
                return _(n) ? S.grep(e, function(e, t) {
                    return !!n.call(e, t, e) !== i
                }) : n.nodeType ? S.grep(e, function(e) {
                    return e === n !== i
                }) : "string" != typeof n ? S.grep(e, function(e) {
                    return -1 < r.call(n, e) !== i
                }) : S.filter(n, e, i)
            }
            S.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }, S.fn.extend({
                find: function(e) {
                    var t, n, i = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (S.contains(r[t], this)) return !0
                    }));
                    for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, r[t], n);
                    return 1 < i ? S.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(O(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(O(this, e || [], !0))
                },
                is: function(e) {
                    return !!O(this, "string" == typeof e && A.test(e) ? S(e) : e || [], !1).length
                }
            });
            var I, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (S.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || I, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : _(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : w, !0)), x.test(i[1]) && S.isPlainObject(t))
                        for (i in t) _(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return (r = w.getElementById(i[2])) && (this[0] = r, this.length = 1), this
            }).prototype = S.fn, I = S(w);
            var L = /^(?:parents|prev(?:Until|All))/,
                k = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function P(e, t) {
                for (;
                    (e = e[t]) && 1 !== e.nodeType;);
                return e
            }
            S.fn.extend({
                has: function(e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter(function() {
                        for (var e = 0; e < n; e++)
                            if (S.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, i = 0,
                        r = this.length,
                        o = [],
                        s = "string" != typeof e && S(e);
                    if (!A.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break
                                }
                    return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? r.call(S(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), S.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return p(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return p(e, "parentNode", n)
                },
                next: function(e) {
                    return P(e, "nextSibling")
                },
                prev: function(e) {
                    return P(e, "previousSibling")
                },
                nextAll: function(e) {
                    return p(e, "nextSibling")
                },
                prevAll: function(e) {
                    return p(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return p(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return p(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return b((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return b(e.firstChild)
                },
                contents: function(e) {
                    return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
                }
            }, function(i, r) {
                S.fn[i] = function(e, t) {
                    var n = S.map(this, r, e);
                    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (k[i] || S.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n)
                }
            });
            var H = /[^\x20\t\r\n\f]+/g;

            function j(e) {
                return e
            }

            function R(e) {
                throw e
            }

            function M(e, t, n, i) {
                var r;
                try {
                    e && _(r = e.promise) ? r.call(e).done(t).fail(n) : e && _(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                } catch (e) {
                    n.apply(void 0, [e])
                }
            }
            S.Callbacks = function(i) {
                var e, n;
                i = "string" == typeof i ? (e = i, n = {}, S.each(e.match(H) || [], function(e, t) {
                    n[t] = !0
                }), n) : S.extend({}, i);

                function r() {
                    for (a = a || i.once, s = o = !0; u.length; c = -1)
                        for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
                    i.memory || (t = !1), o = !1, a && (l = t ? [] : "")
                }
                var o, t, s, a, l = [],
                    u = [],
                    c = -1,
                    f = {
                        add: function() {
                            return l && (t && !o && (c = l.length - 1, u.push(t)), function n(e) {
                                S.each(e, function(e, t) {
                                    _(t) ? i.unique && f.has(t) || l.push(t) : t && t.length && "string" !== T(t) && n(t)
                                })
                            }(arguments), t && !o && r()), this
                        },
                        remove: function() {
                            return S.each(arguments, function(e, t) {
                                for (var n; - 1 < (n = S.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                            }), this
                        },
                        has: function(e) {
                            return e ? -1 < S.inArray(e, l) : 0 < l.length
                        },
                        empty: function() {
                            return l = l && [], this
                        },
                        disable: function() {
                            return a = u = [], l = t = "", this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return a = u = [], t || o || (l = t = ""), this
                        },
                        locked: function() {
                            return !!a
                        },
                        fireWith: function(e, t) {
                            return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || r()), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!s
                        }
                    };
                return f
            }, S.extend({
                Deferred: function(e) {
                    var o = [
                            ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                            ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                        ],
                        r = "pending",
                        s = {
                            state: function() {
                                return r
                            },
                            always: function() {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function(e) {
                                return s.then(null, e)
                            },
                            pipe: function() {
                                var r = arguments;
                                return S.Deferred(function(i) {
                                    S.each(o, function(e, t) {
                                        var n = _(r[t[4]]) && r[t[4]];
                                        a[t[1]](function() {
                                            var e = n && n.apply(this, arguments);
                                            e && _(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                        })
                                    }), r = null
                                }).promise()
                            },
                            then: function(t, n, i) {
                                var l = 0;

                                function u(r, o, s, a) {
                                    return function() {
                                        function e() {
                                            var e, t;
                                            if (!(r < l)) {
                                                if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                t = e && ("object" == typeof e || "function" == typeof e) && e.then, _(t) ? a ? t.call(e, u(l, o, j, a), u(l, o, R, a)) : (l++, t.call(e, u(l, o, j, a), u(l, o, R, a), u(l, o, j, o.notifyWith))) : (s !== j && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                            }
                                        }
                                        var n = this,
                                            i = arguments,
                                            t = a ? e : function() {
                                                try {
                                                    e()
                                                } catch (e) {
                                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== R && (n = void 0, i = [e]), o.rejectWith(n, i))
                                                }
                                            };
                                        r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                                    }
                                }
                                return S.Deferred(function(e) {
                                    o[0][3].add(u(0, e, _(i) ? i : j, e.notifyWith)), o[1][3].add(u(0, e, _(t) ? t : j)), o[2][3].add(u(0, e, _(n) ? n : R))
                                }).promise()
                            },
                            promise: function(e) {
                                return null != e ? S.extend(e, s) : s
                            }
                        },
                        a = {};
                    return S.each(o, function(e, t) {
                        var n = t[2],
                            i = t[5];
                        s[t[1]] = n.add, i && n.add(function() {
                            r = i
                        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[t[0] + "With"] = n.fireWith
                    }), s.promise(a), e && e.call(a, a), a
                },
                when: function(e) {
                    function t(t) {
                        return function(e) {
                            r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(r, o)
                        }
                    }
                    var n = arguments.length,
                        i = n,
                        r = Array(i),
                        o = a.call(arguments),
                        s = S.Deferred();
                    if (n <= 1 && (M(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || _(o[i] && o[i].then))) return s.then();
                    for (; i--;) M(o[i], t(i), s.reject);
                    return s.promise()
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            S.Deferred.exceptionHook = function(e, t) {
                C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
            }, S.readyException = function(e) {
                C.setTimeout(function() {
                    throw e
                })
            };
            var F = S.Deferred();

            function q() {
                w.removeEventListener("DOMContentLoaded", q), C.removeEventListener("load", q), S.ready()
            }
            S.fn.ready = function(e) {
                return F.then(e).catch(function(e) {
                    S.readyException(e)
                }), this
            }, S.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(w, [S])
                }
            }), S.ready.then = F.then, "complete" === w.readyState || "loading" !== w.readyState && !w.documentElement.doScroll ? C.setTimeout(S.ready) : (w.addEventListener("DOMContentLoaded", q), C.addEventListener("load", q));
            var U = function(e, t, n, i, r, o, s) {
                    var a = 0,
                        l = e.length,
                        u = null == n;
                    if ("object" === T(n))
                        for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
                    else if (void 0 !== i && (r = !0, _(i) || (s = !0), u && (t = s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                            return u.call(S(e), n)
                        })), t))
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
                },
                B = /^-ms-/,
                V = /-([a-z])/g;

            function G(e, t) {
                return t.toUpperCase()
            }

            function K(e) {
                return e.replace(B, "ms-").replace(V, G)
            }

            function Q(e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
            }

            function $() {
                this.expando = S.expando + $.uid++
            }
            $.uid = 1, $.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    return t || (t = {}, Q(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))), t
                },
                set: function(e, t, n) {
                    var i, r = this.cache(e);
                    if ("string" == typeof t) r[K(t)] = n;
                    else
                        for (i in t) r[K(i)] = t[i];
                    return r
                },
                get: function(e, t) {
                    return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
                },
                access: function(e, t, n) {
                    return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (void 0 !== i) {
                        if (void 0 !== t) {
                            n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(H) || []).length;
                            for (; n--;) delete i[t[n]]
                        }
                        void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return void 0 !== t && !S.isEmptyObject(t)
                }
            };
            var X = new $,
                Y = new $,
                z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                J = /[A-Z]/g;

            function Z(e, t, n) {
                var i, r;
                if (void 0 === n && 1 === e.nodeType)
                    if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : z.test(r) ? JSON.parse(r) : r)
                        } catch (e) {}
                        Y.set(e, t, n)
                    } else n = void 0;
                return n
            }
            S.extend({
                hasData: function(e) {
                    return Y.hasData(e) || X.hasData(e)
                },
                data: function(e, t, n) {
                    return Y.access(e, t, n)
                },
                removeData: function(e, t) {
                    Y.remove(e, t)
                },
                _data: function(e, t, n) {
                    return X.access(e, t, n)
                },
                _removeData: function(e, t) {
                    X.remove(e, t)
                }
            }), S.fn.extend({
                data: function(n, e) {
                    var t, i, r, o = this[0],
                        s = o && o.attributes;
                    if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                        Y.set(this, n)
                    }) : U(this, function(e) {
                        var t;
                        if (o && void 0 === e) return void 0 !== (t = Y.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                        this.each(function() {
                            Y.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                    if (this.length && (r = Y.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
                        for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = K(i.slice(5)), Z(o, i, r[i]));
                        X.set(o, "hasDataAttrs", !0)
                    }
                    return r
                },
                removeData: function(e) {
                    return this.each(function() {
                        Y.remove(this, e)
                    })
                }
            }), S.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = X.get(e, t), n && (!i || Array.isArray(n) ? i = X.access(e, t, S.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = S.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = S._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                        S.dequeue(e, t)
                    }, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return X.get(e, n) || X.access(e, n, {
                        empty: S.Callbacks("once memory").add(function() {
                            X.remove(e, [t + "queue", n])
                        })
                    })
                }
            }), S.fn.extend({
                queue: function(t, n) {
                    var e = 2;
                    return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = S.queue(this, t, n);
                        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        S.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    function n() {
                        --r || o.resolveWith(s, [s])
                    }
                    var i, r = 1,
                        o = S.Deferred(),
                        s = this,
                        a = this.length;
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = X.get(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                    return n(), o.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ne = ["Top", "Right", "Bottom", "Left"],
                ie = w.documentElement,
                re = function(e) {
                    return S.contains(e.ownerDocument, e)
                },
                oe = {
                    composed: !0
                };
            ie.getRootNode && (re = function(e) {
                return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
            });

            function se(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
                return r
            }
            var ae = function(e, t) {
                return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === S.css(e, "display")
            };

            function le(e, t, n, i) {
                var r, o, s = 20,
                    a = i ? function() {
                        return i.cur()
                    } : function() {
                        return S.css(e, t, "")
                    },
                    l = a(),
                    u = n && n[3] || (S.cssNumber[t] ? "" : "px"),
                    c = e.nodeType && (S.cssNumber[t] || "px" !== u && +l) && te.exec(S.css(e, t));
                if (c && c[3] !== u) {
                    for (l /= 2, u = u || c[3], c = +l || 1; s--;) S.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                    c *= 2, S.style(e, t, c + u), n = n || []
                }
                return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
            }
            var ue = {};

            function ce(e, t) {
                for (var n, i, r, o, s, a, l, u = [], c = 0, f = e.length; c < f; c++)(i = e[c]).style && (n = i.style.display, t ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ae(i) && (u[c] = (l = s = o = void 0, s = (r = i).ownerDocument, a = r.nodeName, (l = ue[a]) || (o = s.body.appendChild(s.createElement(a)), l = S.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ue[a] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));
                for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
                return e
            }
            S.fn.extend({
                show: function() {
                    return ce(this, !0)
                },
                hide: function() {
                    return ce(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        ae(this) ? S(this).show() : S(this).hide()
                    })
                }
            });
            var fe = /^(?:checkbox|radio)$/i,
                de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                he = /^$|^module$|\/(?:java|ecma)script/i,
                pe = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ge(e, t) {
                var n;
                return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? S.merge([e], n) : n
            }

            function me(e, t) {
                for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"))
            }
            pe.optgroup = pe.option, pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td;
            var ve, ye, _e = /<|&#?\w+;/;

            function Ee(e, t, n, i, r) {
                for (var o, s, a, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === T(o)) S.merge(d, o.nodeType ? [o] : o);
                        else if (_e.test(o)) {
                    for (s = s || f.appendChild(t.createElement("div")), a = (de.exec(o) || ["", ""])[1].toLowerCase(), l = pe[a] || pe._default, s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                    S.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
                } else d.push(t.createTextNode(o));
                for (f.textContent = "", h = 0; o = d[h++];)
                    if (i && -1 < S.inArray(o, i)) r && r.push(o);
                    else if (u = re(o), s = ge(f.appendChild(o), "script"), u && me(s), n)
                    for (c = 0; o = s[c++];) he.test(o.type || "") && n.push(o);
                return f
            }
            ve = w.createDocumentFragment().appendChild(w.createElement("div")), (ye = w.createElement("input")).setAttribute("type", "radio"), ye.setAttribute("checked", "checked"), ye.setAttribute("name", "t"), ve.appendChild(ye), y.checkClone = ve.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ve.cloneNode(!0).lastChild.defaultValue;
            var Te = /^key/,
                be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Ce = /^([^.]*)(?:\.(.+)|)/;

            function we() {
                return !0
            }

            function Se() {
                return !1
            }

            function Ae(e, t) {
                return e === function() {
                    try {
                        return w.activeElement
                    } catch (e) {}
                }() == ("focus" === t)
            }

            function De(e, t, n, i, r, o) {
                var s, a;
                if ("object" == typeof t) {
                    for (a in "string" != typeof n && (i = i || n, n = void 0), t) De(e, a, n, i, t[a], o);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
                else if (!r) return e;
                return 1 === o && (s = r, (r = function(e) {
                    return S().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = S.guid++)), e.each(function() {
                    S.event.add(this, t, r, i, n)
                })
            }

            function xe(e, r, o) {
                o ? (X.set(e, r, !1), S.event.add(e, r, {
                    namespace: !1,
                    handler: function(e) {
                        var t, n, i = X.get(this, r);
                        if (1 & e.isTrigger && this[r]) {
                            if (i.length)(S.event.special[r] || {}).delegateType && e.stopPropagation();
                            else if (i = a.call(arguments), X.set(this, r, i), t = o(this, r), this[r](), i !== (n = X.get(this, r)) || t ? X.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                        } else i.length && (X.set(this, r, {
                            value: S.event.trigger(S.extend(i[0], S.Event.prototype), i.slice(1), this)
                        }), e.stopImmediatePropagation())
                    }
                })) : void 0 === X.get(e, r) && S.event.add(e, r, we)
            }
            S.event = {
                global: {},
                add: function(t, e, n, i, r) {
                    var o, s, a, l, u, c, f, d, h, p, g, m = X.get(t);
                    if (m)
                        for (n.handler && (n = (o = n).handler, r = o.selector), r && S.find.matchesSelector(ie, r), n.guid || (n.guid = S.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                                return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                            }), u = (e = (e || "").match(H) || [""]).length; u--;) h = g = (a = Ce.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = S.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = S.event.special[h] || {}, c = S.extend({
                            type: h,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), S.event.global[h] = !0)
                },
                remove: function(e, t, n, i, r) {
                    var o, s, a, l, u, c, f, d, h, p, g, m = X.hasData(e) && X.get(e);
                    if (m && (l = m.events)) {
                        for (u = (t = (t || "").match(H) || [""]).length; u--;)
                            if (h = g = (a = Ce.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                                for (f = S.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                                s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || S.removeEvent(e, h, m.handle), delete l[h])
                            } else
                                for (h in l) S.event.remove(e, h + t[u], n, i, !0);
                        S.isEmptyObject(l) && X.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, r, o, s, a = S.event.fix(e),
                        l = new Array(arguments.length),
                        u = (X.get(this, "events") || {})[a.type] || [],
                        c = S.event.special[a.type] || {};
                    for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                    if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                        for (s = S.event.handlers.call(this, a, u), t = 0;
                            (r = s[t++]) && !a.isPropagationStopped();)
                            for (a.currentTarget = r.elem, n = 0;
                                (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== o.namespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, a), a.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, o, s, a = [],
                        l = t.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; u !== this; u = u.parentNode || this)
                            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < S(r, this).index(u) : S.find(r, this, null, [u]).length), s[r] && o.push(i);
                                o.length && a.push({
                                    elem: u,
                                    handlers: o
                                })
                            }
                    return u = this, l < t.length && a.push({
                        elem: u,
                        handlers: t.slice(l)
                    }), a
                },
                addProp: function(t, e) {
                    Object.defineProperty(S.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: _(e) ? function() {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[S.expando] ? e : new S.Event(e)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && D(t, "input") && xe(t, "click", we), !1
                        },
                        trigger: function(e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && D(t, "input") && xe(t, "click"), !0
                        },
                        _default: function(e) {
                            var t = e.target;
                            return fe.test(t.type) && t.click && D(t, "input") && X.get(t, "click") || D(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                }
            }, S.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }, S.Event = function(e, t) {
                if (!(this instanceof S.Event)) return new S.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
            }, S.Event.prototype = {
                constructor: S.Event,
                isDefaultPrevented: Se,
                isPropagationStopped: Se,
                isImmediatePropagationStopped: Se,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, S.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                    var t = e.button;
                    return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
            }, S.event.addProp), S.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                S.event.special[e] = {
                    setup: function() {
                        return xe(this, e, Ae), !1
                    },
                    trigger: function() {
                        return xe(this, e), !0
                    },
                    delegateType: t
                }
            }), S.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, r) {
                S.event.special[e] = {
                    delegateType: r,
                    bindType: r,
                    handle: function(e) {
                        var t, n = e.relatedTarget,
                            i = e.handleObj;
                        return n && (n === this || S.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                    }
                }
            }), S.fn.extend({
                on: function(e, t, n, i) {
                    return De(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return De(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                        S.event.remove(this, e, n, t)
                    });
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
            });
            var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ie = /<script|<style|<link/i,
                Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function ke(e, t) {
                return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
            }

            function Pe(e) {
                return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
            }

            function He(e) {
                return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
            }

            function je(e, t) {
                var n, i, r, o, s, a, l, u;
                if (1 === t.nodeType) {
                    if (X.hasData(e) && (o = X.access(e), s = X.set(t, o), u = o.events))
                        for (r in delete s.handle, s.events = {}, u)
                            for (n = 0, i = u[r].length; n < i; n++) S.event.add(t, r, u[r][n]);
                    Y.hasData(e) && (a = Y.access(e), l = S.extend({}, a), Y.set(t, l))
                }
            }

            function Re(n, i, r, o) {
                i = m.apply([], i);
                var e, t, s, a, l, u, c = 0,
                    f = n.length,
                    d = f - 1,
                    h = i[0],
                    p = _(h);
                if (p || 1 < f && "string" == typeof h && !y.checkClone && Ne.test(h)) return n.each(function(e) {
                    var t = n.eq(e);
                    p && (i[0] = h.call(this, e, t.html())), Re(t, i, r, o)
                });
                if (f && (t = (e = Ee(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                    for (a = (s = S.map(ge(e, "script"), Pe)).length; c < f; c++) l = e, c !== d && (l = S.clone(l, !0, !0), a && S.merge(s, ge(l, "script"))), r.call(n[c], l, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, S.map(s, He), c = 0; c < a; c++) l = s[c], he.test(l.type || "") && !X.access(l, "globalEval") && S.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? S._evalUrl && !l.noModule && S._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }) : E(l.textContent.replace(Le, ""), l, u))
                }
                return n
            }

            function Me(e, t, n) {
                for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(ge(i)), i.parentNode && (n && re(i) && me(ge(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            S.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Oe, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                        f = re(e);
                    if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                        for (s = ge(c), i = 0, r = (o = ge(e)).length; i < r; i++) a = o[i], l = s[i], "input" === (u = l.nodeName.toLowerCase()) && fe.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
                    if (t)
                        if (n)
                            for (o = o || ge(e), s = s || ge(c), i = 0, r = o.length; i < r; i++) je(o[i], s[i]);
                        else je(e, c);
                    return 0 < (s = ge(c, "script")).length && me(s, !f && ge(e, "script")), c
                },
                cleanData: function(e) {
                    for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if (t = n[X.expando]) {
                                if (t.events)
                                    for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                                n[X.expando] = void 0
                            }
                            n[Y.expando] && (n[Y.expando] = void 0)
                        }
                }
            }), S.fn.extend({
                detach: function(e) {
                    return Me(this, e, !0)
                },
                remove: function(e) {
                    return Me(this, e)
                },
                text: function(e) {
                    return U(this, function(e) {
                        return void 0 === e ? S.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Re(this, arguments, function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
                    })
                },
                prepend: function() {
                    return Re(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = ke(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Re(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ge(e, !1)), e.textContent = "");
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function() {
                        return S.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return U(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ie.test(e) && !pe[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = S.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ge(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var n = [];
                    return Re(this, arguments, function(e) {
                        var t = this.parentNode;
                        S.inArray(this, n) < 0 && (S.cleanData(ge(this)), t && t.replaceChild(e, this))
                    }, n)
                }
            }), S.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, s) {
                S.fn[e] = function(e) {
                    for (var t, n = [], i = S(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), S(i[o])[s](t), l.apply(n, t.get());
                    return this.pushStack(n)
                }
            });
            var We, Fe, qe, Ue, Be, Ve, Ge, Ke = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                Qe = function(e) {
                    var t = e.ownerDocument.defaultView;
                    return t && t.opener || (t = C), t.getComputedStyle(e)
                },
                $e = new RegExp(ne.join("|"), "i");

            function Xe() {
                if (Ge) {
                    Ve.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ge.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Ve).appendChild(Ge);
                    var e = C.getComputedStyle(Ge);
                    We = "1%" !== e.top, Be = 12 === Ye(e.marginLeft), Ge.style.right = "60%", Ue = 36 === Ye(e.right), Fe = 36 === Ye(e.width), Ge.style.position = "absolute", qe = 12 === Ye(Ge.offsetWidth / 3), ie.removeChild(Ve), Ge = null
                }
            }

            function Ye(e) {
                return Math.round(parseFloat(e))
            }

            function ze(e, t, n) {
                var i, r, o, s, a = e.style;
                return (n = n || Qe(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = S.style(e, t)), !y.pixelBoxStyles() && Ke.test(s) && $e.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
            }

            function Je(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            Ve = w.createElement("div"), (Ge = w.createElement("div")).style && (Ge.style.backgroundClip = "content-box", Ge.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ge.style.backgroundClip, S.extend(y, {
                boxSizingReliable: function() {
                    return Xe(), Fe
                },
                pixelBoxStyles: function() {
                    return Xe(), Ue
                },
                pixelPosition: function() {
                    return Xe(), We
                },
                reliableMarginLeft: function() {
                    return Xe(), Be
                },
                scrollboxSize: function() {
                    return Xe(), qe
                }
            }));
            var Ze = ["Webkit", "Moz", "ms"],
                et = w.createElement("div").style,
                tt = {};

            function nt(e) {
                var t = S.cssProps[e] || tt[e];
                return t || (e in et ? e : tt[e] = function(e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;)
                        if ((e = Ze[n] + t) in et) return e
                }(e) || e)
            }
            var it = /^(none|table(?!-c[ea]).+)/,
                rt = /^--/,
                ot = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                st = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function at(e, t, n) {
                var i = te.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }

            function lt(e, t, n, i, r, o) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2) "margin" === n && (l += S.css(e, n + ne[s], !0, r)), i ? ("content" === n && (l -= S.css(e, "padding" + ne[s], !0, r)), "margin" !== n && (l -= S.css(e, "border" + ne[s] + "Width", !0, r))) : (l += S.css(e, "padding" + ne[s], !0, r), "padding" !== n ? l += S.css(e, "border" + ne[s] + "Width", !0, r) : a += S.css(e, "border" + ne[s] + "Width", !0, r));
                return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
            }

            function ut(e, t, n) {
                var i = Qe(e),
                    r = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    o = r,
                    s = ze(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Ke.test(s)) {
                    if (!n) return s;
                    s = "auto"
                }
                return (!y.boxSizingReliable() && r || "auto" === s || !parseFloat(s) && "inline" === S.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === S.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + lt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
            }

            function ct(e, t, n, i, r) {
                return new ct.prototype.init(e, t, n, i, r)
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = ze(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, o, s, a = K(t),
                            l = rt.test(t),
                            u = e.style;
                        if (l || (t = nt(a)), s = S.cssHooks[t] || S.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                        "string" === (o = typeof n) && (r = te.exec(n)) && r[1] && (n = le(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (S.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                    }
                },
                css: function(e, t, n, i) {
                    var r, o, s, a = K(t);
                    return rt.test(t) || (t = nt(a)), (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = ze(e, t, i)), "normal" === r && t in st && (r = st[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                }
            }), S.each(["height", "width"], function(e, l) {
                S.cssHooks[l] = {
                    get: function(e, t, n) {
                        if (t) return !it.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, l, n) : se(e, ot, function() {
                            return ut(e, l, n)
                        })
                    },
                    set: function(e, t, n) {
                        var i, r = Qe(e),
                            o = !y.scrollboxSize() && "absolute" === r.position,
                            s = (o || n) && "border-box" === S.css(e, "boxSizing", !1, r),
                            a = n ? lt(e, l, n, s, r) : 0;
                        return s && o && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(r[l]) - lt(e, l, "border", !1, r) - .5)), a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[l] = t, t = S.css(e, l)), at(0, t, a)
                    }
                }
            }), S.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(ze(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
            }), S.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(r, o) {
                S.cssHooks[r + o] = {
                    expand: function(e) {
                        for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
                        return n
                    }
                }, "margin" !== r && (S.cssHooks[r + o].set = at)
            }), S.fn.extend({
                css: function(e, t) {
                    return U(this, function(e, t, n) {
                        var i, r, o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Qe(e), r = t.length; s < r; s++) o[t[s]] = S.css(e, t[s], !1, i);
                            return o
                        }
                        return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                    }, e, t, 1 < arguments.length)
                }
            }), ((S.Tween = ct).prototype = {
                constructor: ct,
                init: function(e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (S.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ct.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ct.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ct.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ct.propHooks._default.set(this), this
                }
            }).init.prototype = ct.prototype, (ct.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[nt(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }).scrollTop = ct.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, S.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, S.fx = ct.prototype.init, S.fx.step = {};
            var ft, dt, ht, pt, gt = /^(?:toggle|show|hide)$/,
                mt = /queueHooks$/;

            function vt() {
                dt && (!1 === w.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(vt) : C.setTimeout(vt, S.fx.interval), S.fx.tick())
            }

            function yt() {
                return C.setTimeout(function() {
                    ft = void 0
                }), ft = Date.now()
            }

            function _t(e, t) {
                var n, i = 0,
                    r = {
                        height: e
                    };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function Et(e, t, n) {
                for (var i, r = (Tt.tweeners[t] || []).concat(Tt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                    if (i = r[o].call(n, t, e)) return i
            }

            function Tt(o, e, t) {
                var n, s, i = 0,
                    r = Tt.prefilters.length,
                    a = S.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (s) return !1;
                        for (var e = ft || yt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
                        return a.notifyWith(o, [u, n, t]), n < 1 && r ? t : (r || a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u]), !1)
                    },
                    u = a.promise({
                        elem: o,
                        props: S.extend({}, e),
                        opts: S.extend(!0, {
                            specialEasing: {},
                            easing: S.easing._default
                        }, t),
                        originalProperties: e,
                        originalOptions: t,
                        startTime: ft || yt(),
                        duration: t.duration,
                        tweens: [],
                        createTween: function(e, t) {
                            var n = S.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                            return u.tweens.push(n), n
                        },
                        stop: function(e) {
                            var t = 0,
                                n = e ? u.tweens.length : 0;
                            if (s) return this;
                            for (s = !0; t < n; t++) u.tweens[t].run(1);
                            return e ? (a.notifyWith(o, [u, 1, 0]), a.resolveWith(o, [u, e])) : a.rejectWith(o, [u, e]), this
                        }
                    }),
                    c = u.props;
                for (! function(e, t) {
                        var n, i, r, o, s;
                        for (n in e)
                            if (r = t[i = K(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = S.cssHooks[i]) && "expand" in s)
                                for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                            else t[i] = r
                    }(c, u.opts.specialEasing); i < r; i++)
                    if (n = Tt.prefilters[i].call(u, o, c, u.opts)) return _(n.stop) && (S._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
                return S.map(c, Et, u), _(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), S.fx.timer(S.extend(l, {
                    elem: o,
                    anim: u,
                    queue: u.opts.queue
                })), u
            }
            S.Animation = S.extend(Tt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return le(n.elem, e, te.exec(t), n), n
                    }]
                },
                tweener: function(e, t) {
                    for (var n, i = 0, r = (e = _(e) ? (t = e, ["*"]) : e.match(H)).length; i < r; i++) n = e[i], Tt.tweeners[n] = Tt.tweeners[n] || [], Tt.tweeners[n].unshift(t)
                },
                prefilters: [function(e, t, n) {
                    var i, r, o, s, a, l, u, c, f = "width" in t || "height" in t,
                        d = this,
                        h = {},
                        p = e.style,
                        g = e.nodeType && ae(e),
                        m = X.get(e, "fxshow");
                    for (i in n.queue || (null == (s = S._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                            s.unqueued || a()
                        }), s.unqueued++, d.always(function() {
                            d.always(function() {
                                s.unqueued--, S.queue(e, "fx").length || s.empty.fire()
                            })
                        })), t)
                        if (r = t[i], gt.test(r)) {
                            if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                if ("show" !== r || !m || void 0 === m[i]) continue;
                                g = !0
                            }
                            h[i] = m && m[i] || S.style(e, i)
                        }
                    if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                        for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = X.get(e, "display")), "none" === (c = S.css(e, "display")) && (u ? c = u : (ce([e], !0), u = e.style.display || u, c = S.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === S.css(e, "float") && (l || (d.done(function() {
                                p.display = u
                            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                            })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(e, "fxshow", {
                            display: u
                        }), o && (m.hidden = !g), g && ce([e], !0), d.done(function() {
                            for (i in g || ce([e]), X.remove(e, "fxshow"), h) S.style(e, i, h[i])
                        })), l = Et(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(e, t) {
                    t ? Tt.prefilters.unshift(e) : Tt.prefilters.push(e)
                }
            }), S.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? S.extend({}, e) : {
                    complete: n || !n && t || _(e) && e,
                    duration: e,
                    easing: n && t || t && !_(t) && t
                };
                return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    _(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue)
                }, i
            }, S.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(ae).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(t, e, n, i) {
                    function r() {
                        var e = Tt(this, S.extend({}, t), s);
                        (o || X.get(this, "finish")) && e.stop(!0)
                    }
                    var o = S.isEmptyObject(t),
                        s = S.speed(e, n, i);
                    return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(r, e, o) {
                    function s(e) {
                        var t = e.stop;
                        delete e.stop, t(o)
                    }
                    return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = S.timers,
                            i = X.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i) i[t] && i[t].stop && mt.test(t) && s(i[t]);
                        for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                        !e && o || S.dequeue(this, r)
                    })
                },
                finish: function(s) {
                    return !1 !== s && (s = s || "fx"), this.each(function() {
                        var e, t = X.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = S.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, S.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
                }
            }), S.each(["toggle", "show", "hide"], function(e, i) {
                var r = S.fn[i];
                S.fn[i] = function(e, t, n) {
                    return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(_t(i, !0), e, t, n)
                }
            }), S.each({
                slideDown: _t("show"),
                slideUp: _t("hide"),
                slideToggle: _t("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, i) {
                S.fn[e] = function(e, t, n) {
                    return this.animate(i, e, t, n)
                }
            }), S.timers = [], S.fx.tick = function() {
                var e, t = 0,
                    n = S.timers;
                for (ft = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                n.length || S.fx.stop(), ft = void 0
            }, S.fx.timer = function(e) {
                S.timers.push(e), S.fx.start()
            }, S.fx.interval = 13, S.fx.start = function() {
                dt || (dt = !0, vt())
            }, S.fx.stop = function() {
                dt = null
            }, S.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, S.fn.delay = function(i, e) {
                return i = S.fx && S.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, i);
                    t.stop = function() {
                        C.clearTimeout(n)
                    }
                })
            }, ht = w.createElement("input"), pt = w.createElement("select").appendChild(w.createElement("option")), ht.type = "checkbox", y.checkOn = "" !== ht.value, y.optSelected = pt.selected, (ht = w.createElement("input")).value = "t", ht.type = "radio", y.radioValue = "t" === ht.value;
            var bt, Ct = S.expr.attrHandle;
            S.fn.extend({
                attr: function(e, t) {
                    return U(this, S.attr, e, t, 1 < arguments.length)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        S.removeAttr(this, e)
                    })
                }
            }), S.extend({
                attr: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? bt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = S.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && "radio" === t && D(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0,
                        r = t && t.match(H);
                    if (r && 1 === e.nodeType)
                        for (; n = r[i++];) e.removeAttribute(n)
                }
            }), bt = {
                set: function(e, t, n) {
                    return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
                }
            }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var s = Ct[t] || S.find.attr;
                Ct[t] = function(e, t, n) {
                    var i, r, o = t.toLowerCase();
                    return n || (r = Ct[o], Ct[o] = i, i = null != s(e, t, n) ? o : null, Ct[o] = r), i
                }
            });
            var wt = /^(?:input|select|textarea|button)$/i,
                St = /^(?:a|area)$/i;

            function At(e) {
                return (e.match(H) || []).join(" ")
            }

            function Dt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }

            function xt(e) {
                return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
            }
            S.fn.extend({
                prop: function(e, t) {
                    return U(this, S.prop, e, t, 1 < arguments.length)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[S.propFix[e] || e]
                    })
                }
            }), S.extend({
                prop: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, r = S.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = S.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : wt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (S.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                S.propFix[this.toLowerCase()] = this
            }), S.fn.extend({
                addClass: function(t) {
                    var e, n, i, r, o, s, a, l = 0;
                    if (_(t)) return this.each(function(e) {
                        S(this).addClass(t.call(this, e, Dt(this)))
                    });
                    if ((e = xt(t)).length)
                        for (; n = this[l++];)
                            if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                                for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                r !== (a = At(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                removeClass: function(t) {
                    var e, n, i, r, o, s, a, l = 0;
                    if (_(t)) return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, Dt(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = xt(t)).length)
                        for (; n = this[l++];)
                            if (r = Dt(n), i = 1 === n.nodeType && " " + At(r) + " ") {
                                for (s = 0; o = e[s++];)
                                    for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
                                r !== (a = At(i)) && n.setAttribute("class", a)
                            }
                    return this
                },
                toggleClass: function(r, t) {
                    var o = typeof r,
                        s = "string" == o || Array.isArray(r);
                    return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : _(r) ? this.each(function(e) {
                        S(this).toggleClass(r.call(this, e, Dt(this), t), t)
                    }) : this.each(function() {
                        var e, t, n, i;
                        if (s)
                            for (t = 0, n = S(this), i = xt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                        else void 0 !== r && "boolean" != o || ((e = Dt(this)) && X.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : X.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && -1 < (" " + At(Dt(n)) + " ").indexOf(t)) return !0;
                    return !1
                }
            });
            var Ot = /\r/g;
            S.fn.extend({
                val: function(n) {
                    var i, e, r, t = this[0];
                    return arguments.length ? (r = _(n), this.each(function(e) {
                        var t;
                        1 === this.nodeType && (null == (t = r ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                            return null == e ? "" : e + ""
                        })), (i = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
                    })) : t ? (i = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(Ot, "") : null == e ? "" : e : void 0
                }
            }), S.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = S.find.attr(e, "value");
                            return null != t ? t : At(S.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, r = e.options,
                                o = e.selectedIndex,
                                s = "select-one" === e.type,
                                a = s ? null : [],
                                l = s ? o + 1 : r.length;
                            for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                    if (t = S(n).val(), s) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, o = S.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), S.each(["radio", "checkbox"], function() {
                S.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
                    }
                }, y.checkOn || (S.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }), y.focusin = "onfocusin" in C;

            function It(e) {
                e.stopPropagation()
            }
            var Nt = /^(?:focusinfocus|focusoutblur)$/;
            S.extend(S.event, {
                trigger: function(e, t, n, i) {
                    var r, o, s, a, l, u, c, f, d = [n || w],
                        h = v.call(e, "type") ? e.type : e,
                        p = v.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (o = f = s = n = n || w, 3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(h + S.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[S.expando] ? e : new S.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                        if (!i && !c.noBubble && !g(n)) {
                            for (a = c.delegateType || h, Nt.test(a + h) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                            s === (n.ownerDocument || w) && d.push(s.defaultView || s.parentWindow || C)
                        }
                        for (r = 0;
                            (o = d[r++]) && !e.isPropagationStopped();) f = o, e.type = 1 < r ? a : c.bindType || h, (u = (X.get(o, "events") || {})[e.type] && X.get(o, "handle")) && u.apply(o, t), (u = l && o[l]) && u.apply && Q(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
                        return e.type = h, i || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), t) || !Q(n) || l && _(n[h]) && !g(n) && ((s = n[l]) && (n[l] = null), S.event.triggered = h, e.isPropagationStopped() && f.addEventListener(h, It), n[h](), e.isPropagationStopped() && f.removeEventListener(h, It), S.event.triggered = void 0, s && (n[l] = s)), e.result
                    }
                },
                simulate: function(e, t, n) {
                    var i = S.extend(new S.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    S.event.trigger(i, null, t)
                }
            }), S.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        S.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return S.event.trigger(e, t, n, !0)
                }
            }), y.focusin || S.each({
                focus: "focusin",
                blur: "focusout"
            }, function(n, i) {
                function r(e) {
                    S.event.simulate(i, e.target, S.event.fix(e))
                }
                S.event.special[i] = {
                    setup: function() {
                        var e = this.ownerDocument || this,
                            t = X.access(e, i);
                        t || e.addEventListener(n, r, !0), X.access(e, i, (t || 0) + 1)
                    },
                    teardown: function() {
                        var e = this.ownerDocument || this,
                            t = X.access(e, i) - 1;
                        t ? X.access(e, i, t) : (e.removeEventListener(n, r, !0), X.remove(e, i))
                    }
                }
            });
            var Lt = C.location,
                kt = Date.now(),
                Pt = /\?/;
            S.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = (new C.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {
                    t = void 0
                }
                return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
            };
            var Ht = /\[\]$/,
                jt = /\r?\n/g,
                Rt = /^(?:submit|button|image|reset|file)$/i,
                Mt = /^(?:input|select|textarea|keygen)/i;

            function Wt(n, e, i, r) {
                var t;
                if (Array.isArray(e)) S.each(e, function(e, t) {
                    i || Ht.test(n) ? r(n, t) : Wt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
                });
                else if (i || "object" !== T(e)) r(n, e);
                else
                    for (t in e) Wt(n + "[" + t + "]", e[t], i, r)
            }
            S.param = function(e, t) {
                function n(e, t) {
                    var n = _(t) ? t() : t;
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                }
                var i, r = [];
                if (null == e) return "";
                if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
                    n(this.name, this.value)
                });
                else
                    for (i in e) Wt(i, e[i], t, n);
                return r.join("&")
            }, S.fn.extend({
                serialize: function() {
                    return S.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = S.prop(this, "elements");
                        return e ? S.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !S(this).is(":disabled") && Mt.test(this.nodeName) && !Rt.test(e) && (this.checked || !fe.test(e))
                    }).map(function(e, t) {
                        var n = S(this).val();
                        return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(jt, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(jt, "\r\n")
                        }
                    }).get()
                }
            });
            var Ft = /%20/g,
                qt = /#.*$/,
                Ut = /([?&])_=[^&]*/,
                Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Vt = /^(?:GET|HEAD)$/,
                Gt = /^\/\//,
                Kt = {},
                Qt = {},
                $t = "*/".concat("*"),
                Xt = w.createElement("a");

            function Yt(o) {
                return function(e, t) {
                    "string" != typeof e && (t = e, e = "*");
                    var n, i = 0,
                        r = e.toLowerCase().match(H) || [];
                    if (_(t))
                        for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
                }
            }

            function zt(t, r, o, s) {
                var a = {},
                    l = t === Qt;

                function u(e) {
                    var i;
                    return a[e] = !0, S.each(t[e] || [], function(e, t) {
                        var n = t(r, o, s);
                        return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
                    }), i
                }
                return u(r.dataTypes[0]) || !a["*"] && u("*")
            }

            function Jt(e, t) {
                var n, i, r = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
                return i && S.extend(!0, e, i), e
            }
            Xt.href = Lt.href, S.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Lt.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Lt.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": $t,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": S.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e)
                },
                ajaxPrefilter: Yt(Kt),
                ajaxTransport: Yt(Qt),
                ajax: function(e, t) {
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var c, f, d, n, h, i, p, g, r, o, m = S.ajaxSetup({}, t),
                        v = m.context || m,
                        y = m.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                        _ = S.Deferred(),
                        E = S.Callbacks("once memory"),
                        T = m.statusCode || {},
                        s = {},
                        a = {},
                        l = "canceled",
                        b = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (p) {
                                    if (!n)
                                        for (n = {}; t = Bt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                    t = n[e.toLowerCase() + " "]
                                }
                                return null == t ? null : t.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return p ? d : null
                            },
                            setRequestHeader: function(e, t) {
                                return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return null == p && (m.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (p) b.always(e[b.status]);
                                    else
                                        for (t in e) T[t] = [T[t], e[t]];
                                return this
                            },
                            abort: function(e) {
                                var t = e || l;
                                return c && c.abort(t), u(0, t), this
                            }
                        };
                    if (_.promise(b), m.url = ((e || m.url || Lt.href) + "").replace(Gt, Lt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(H) || [""], null == m.crossDomain) {
                        i = w.createElement("a");
                        try {
                            i.href = m.url, i.href = i.href, m.crossDomain = Xt.protocol + "//" + Xt.host != i.protocol + "//" + i.host
                        } catch (e) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), zt(Kt, m, t, b), p) return b;
                    for (r in (g = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Vt.test(m.type), f = m.url.replace(qt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ft, "+")) : (o = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += (Pt.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Ut, "$1"), o = (Pt.test(f) ? "&" : "?") + "_=" + kt++ + o), m.url = f + o), m.ifModified && (S.lastModified[f] && b.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && b.setRequestHeader("If-None-Match", S.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && b.setRequestHeader("Content-Type", m.contentType), b.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : m.accepts["*"]), m.headers) b.setRequestHeader(r, m.headers[r]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(v, b, m) || p)) return b.abort();
                    if (l = "abort", E.add(m.complete), b.done(m.success), b.fail(m.error), c = zt(Qt, m, t, b)) {
                        if (b.readyState = 1, g && y.trigger("ajaxSend", [b, m]), p) return b;
                        m.async && 0 < m.timeout && (h = C.setTimeout(function() {
                            b.abort("timeout")
                        }, m.timeout));
                        try {
                            p = !1, c.send(s, u)
                        } catch (e) {
                            if (p) throw e;
                            u(-1, e)
                        }
                    } else u(-1, "No Transport");

                    function u(e, t, n, i) {
                        var r, o, s, a, l, u = t;
                        p || (p = !0, h && C.clearTimeout(h), c = void 0, d = i || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                            for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (i)
                                for (r in a)
                                    if (a[r] && a[r].test(i)) {
                                        l.unshift(r);
                                        break
                                    }
                            if (l[0] in n) o = l[0];
                            else {
                                for (r in n) {
                                    if (!l[0] || e.converters[r + " " + l[0]]) {
                                        o = r;
                                        break
                                    }
                                    s = s || r
                                }
                                o = o || s
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(m, b, n)), a = function(e, t, n, i) {
                            var r, o, s, a, l, u = {},
                                c = e.dataTypes.slice();
                            if (c[1])
                                for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                            for (o = c.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (r in u)
                                        if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws) t = s(t);
                                    else try {
                                        t = s(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: s ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(m, a, b, r), r ? (m.ifModified && ((l = b.getResponseHeader("Last-Modified")) && (S.lastModified[f] = l), (l = b.getResponseHeader("etag")) && (S.etag[f] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = a.state, o = a.data, r = !(s = a.error))) : (s = u, !e && u || (u = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || u) + "", r ? _.resolveWith(v, [o, u, b]) : _.rejectWith(v, [b, u, s]), b.statusCode(T), T = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, m, r ? o : s]), E.fireWith(v, [b, u]), g && (y.trigger("ajaxComplete", [b, m]), --S.active || S.event.trigger("ajaxStop")))
                    }
                    return b
                },
                getJSON: function(e, t, n) {
                    return S.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return S.get(e, void 0, t, "script")
                }
            }), S.each(["get", "post"], function(e, r) {
                S[r] = function(e, t, n, i) {
                    return _(t) && (i = i || n, n = t, t = void 0), S.ajax(S.extend({
                        url: e,
                        type: r,
                        dataType: i,
                        data: t,
                        success: n
                    }, S.isPlainObject(e) && e))
                }
            }), S._evalUrl = function(e, t) {
                return S.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        S.globalEval(e, t)
                    }
                })
            }, S.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return this[0] && (_(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                        return e
                    }).append(this)), this
                },
                wrapInner: function(n) {
                    return _(n) ? this.each(function(e) {
                        S(this).wrapInner(n.call(this, e))
                    }) : this.each(function() {
                        var e = S(this),
                            t = e.contents();
                        t.length ? t.wrapAll(n) : e.append(n)
                    })
                },
                wrap: function(t) {
                    var n = _(t);
                    return this.each(function(e) {
                        S(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function(e) {
                    return this.parent(e).not("body").each(function() {
                        S(this).replaceWith(this.childNodes)
                    }), this
                }
            }), S.expr.pseudos.hidden = function(e) {
                return !S.expr.pseudos.visible(e)
            }, S.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }, S.ajaxSettings.xhr = function() {
                try {
                    return new C.XMLHttpRequest
                } catch (e) {}
            };
            var Zt = {
                    0: 200,
                    1223: 204
                },
                en = S.ajaxSettings.xhr();
            y.cors = !!en && "withCredentials" in en, y.ajax = en = !!en, S.ajaxTransport(function(r) {
                var o, s;
                if (y.cors || en && !r.crossDomain) return {
                    send: function(e, t) {
                        var n, i = r.xhr();
                        if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Zt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                            4 === i.readyState && C.setTimeout(function() {
                                o && s()
                            })
                        }, o = o("abort");
                        try {
                            i.send(r.hasContent && r.data || null)
                        } catch (e) {
                            if (o) throw e
                        }
                    },
                    abort: function() {
                        o && o()
                    }
                }
            }), S.ajaxPrefilter(function(e) {
                e.crossDomain && (e.contents.script = !1)
            }), S.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return S.globalEval(e), e
                    }
                }
            }), S.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
            }), S.ajaxTransport("script", function(n) {
                var i, r;
                if (n.crossDomain || n.scriptAttrs) return {
                    send: function(e, t) {
                        i = S("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", r = function(e) {
                            i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                        }), w.head.appendChild(i[0])
                    },
                    abort: function() {
                        r && r()
                    }
                }
            });
            var tn, nn = [],
                rn = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = nn.pop() || S.expando + "_" + kt++;
                    return this[e] = !0, e
                }
            }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
                var i, r, o, s = !1 !== e.jsonp && (rn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && rn.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = _(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(rn, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                    return o || S.error(i + " was not called"), o[0]
                }, e.dataTypes[0] = "json", r = C[i], C[i] = function() {
                    o = arguments
                }, n.always(function() {
                    void 0 === r ? S(C).removeProp(i) : C[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, nn.push(i)), o && _(r) && r(o[0]), o = r = void 0
                }), "script"
            }), y.createHTMLDocument = ((tn = w.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), S.parseHTML = function(e, t, n) {
                return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = w.implementation.createHTMLDocument("")).createElement("base")).href = w.location.href, t.head.appendChild(i)) : t = w), o = !n && [], (r = x.exec(e)) ? [t.createElement(r[1])] : (r = Ee([e], t, o), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
                var i, r, o
            }, S.fn.load = function(e, t, n) {
                var i, r, o, s = this,
                    a = e.indexOf(" ");
                return -1 < a && (i = At(e.slice(a)), e = e.slice(0, a)), _(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && S.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments, s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }), this
            }, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                S.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), S.expr.pseudos.animated = function(t) {
                return S.grep(S.timers, function(e) {
                    return t === e.elem
                }).length
            }, S.offset = {
                setOffset: function(e, t, n) {
                    var i, r, o, s, a, l, u = S.css(e, "position"),
                        c = S(e),
                        f = {};
                    "static" === u && (e.style.position = "relative"), a = c.offset(), o = S.css(e, "top"), l = S.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(o) || 0, parseFloat(l) || 0), _(t) && (t = t.call(e, n, S.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f)
                }
            }, S.fn.extend({
                offset: function(t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                        S.offset.setOffset(this, t, e)
                    });
                    var e, n, i = this[0];
                    return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n, i = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position");) e = e.parentNode;
                            e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0), r.left += S.css(e, "borderLeftWidth", !0))
                        }
                        return {
                            top: t.top - r.top - S.css(i, "marginTop", !0),
                            left: t.left - r.left - S.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
                        return e || ie
                    })
                }
            }), S.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, r) {
                var o = "pageYOffset" === r;
                S.fn[t] = function(e) {
                    return U(this, function(e, t, n) {
                        var i;
                        if (g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
                        i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
                    }, t, e, arguments.length)
                }
            }), S.each(["top", "left"], function(e, n) {
                S.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
                    if (t) return t = ze(e, n), Ke.test(t) ? S(e).position()[n] + "px" : t
                })
            }), S.each({
                Height: "height",
                Width: "width"
            }, function(s, a) {
                S.each({
                    padding: "inner" + s,
                    content: a,
                    "": "outer" + s
                }, function(i, o) {
                    S.fn[o] = function(e, t) {
                        var n = arguments.length && (i || "boolean" != typeof e),
                            r = i || (!0 === e || !0 === t ? "margin" : "border");
                        return U(this, function(e, t, n) {
                            var i;
                            return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
                        }, a, n ? e : void 0, n)
                    }
                })
            }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
                S.fn[n] = function(e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
                }
            }), S.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), S.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), S.proxy = function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (n = e[t], t = e, e = n), _(e)) return i = a.call(arguments, 2), (r = function() {
                    return e.apply(t || this, i.concat(a.call(arguments)))
                }).guid = e.guid = e.guid || S.guid++, r
            }, S.holdReady = function(e) {
                e ? S.readyWait++ : S.ready(!0)
            }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = D, S.isFunction = _, S.isWindow = g, S.camelCase = K, S.type = T, S.now = Date.now, S.isNumeric = function(e) {
                var t = S.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            }, void 0 === (un = function() {
                return S
            }.apply(ln, [])) || (an.exports = un);
            var on = C.jQuery,
                sn = C.$;
            return S.noConflict = function(e) {
                return C.$ === S && (C.$ = sn), e && C.jQuery === S && (C.jQuery = on), S
            }, e || (C.jQuery = C.$ = S), S
        })
    },
    "./node_modules/popper.js/dist/esm/popper.js": function(e, ee, t) {
        "use strict";
        t.r(ee),
            function(e) {
                for (var t = "undefined" != typeof window && "undefined" != typeof document, n = ["Edge", "Trident", "Firefox"], i = 0, r = 0; r < n.length; r += 1)
                    if (t && 0 <= navigator.userAgent.indexOf(n[r])) {
                        i = 1;
                        break
                    }
                var o = t && window.Promise ? function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then(function() {
                            t = !1, e()
                        }))
                    }
                } : function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout(function() {
                            t = !1, e()
                        }, i))
                    }
                };

                function s(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }

                function E(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function h(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }

                function g(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var t = E(e),
                        n = t.overflow,
                        i = t.overflowX,
                        r = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + r + i) ? e : g(h(e))
                }
                var a = t && !(!window.MSInputMethodContext || !document.documentMode),
                    l = t && /MSIE 10/.test(navigator.userAgent);

                function m(e) {
                    return 11 === e ? a : 10 === e ? l : a || l
                }

                function y(e) {
                    if (!e) return document.documentElement;
                    for (var t = m(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === E(n, "position") ? y(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function c(e) {
                    return null !== e.parentNode ? c(e.parentNode) : e
                }

                function p(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? e : t,
                        r = n ? t : e,
                        o = document.createRange();
                    o.setStart(i, 0), o.setEnd(r, 0);
                    var s, a, l = o.commonAncestorContainer;
                    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && y(s.firstElementChild) !== s ? y(l) : l;
                    var u = c(e);
                    return u.host ? p(u.host, t) : p(e, c(t).host)
                }

                function v(e, t) {
                    var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
                        i = e.nodeName;
                    if ("BODY" !== i && "HTML" !== i) return e[n];
                    var r = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || r)[n]
                }

                function f(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        i = "Left" == n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
                }

                function u(e, t, n, i) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], m(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
                }

                function _() {
                    var e = document.body,
                        t = document.documentElement,
                        n = m(10) && getComputedStyle(t);
                    return {
                        height: u("Height", e, t, n),
                        width: u("Width", e, t, n)
                    }
                }
                var d = function(e, t, n) {
                    return t && T(e.prototype, t), n && T(e, n), e
                };

                function T(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }

                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

                function w(e) {
                    return C({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }

                function S(e) {
                    var t = {};
                    try {
                        if (m(10)) {
                            t = e.getBoundingClientRect();
                            var n = v(e, "top"),
                                i = v(e, "left");
                            t.top += n, t.left += i, t.bottom += n, t.right += i
                        } else t = e.getBoundingClientRect()
                    } catch (e) {}
                    var r = {
                            left: t.left,
                            top: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        },
                        o = "HTML" === e.nodeName ? _() : {},
                        s = o.width || e.clientWidth || r.right - r.left,
                        a = o.height || e.clientHeight || r.bottom - r.top,
                        l = e.offsetWidth - s,
                        u = e.offsetHeight - a;
                    if (l || u) {
                        var c = E(e);
                        l -= f(c, "x"), u -= f(c, "y"), r.width -= l, r.height -= u
                    }
                    return w(r)
                }

                function A(e, t, n) {
                    var i = 2 < arguments.length && void 0 !== n && n,
                        r = m(10),
                        o = "HTML" === t.nodeName,
                        s = S(e),
                        a = S(t),
                        l = g(e),
                        u = E(t),
                        c = parseFloat(u.borderTopWidth, 10),
                        f = parseFloat(u.borderLeftWidth, 10);
                    i && "HTML" === t.nodeName && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                    var d = w({
                        top: s.top - a.top - c,
                        left: s.left - a.left - f,
                        width: s.width,
                        height: s.height
                    });
                    if (d.marginTop = 0, d.marginLeft = 0, !r && o) {
                        var h = parseFloat(u.marginTop, 10),
                            p = parseFloat(u.marginLeft, 10);
                        d.top -= c - h, d.bottom -= c - h, d.left -= f - p, d.right -= f - p, d.marginTop = h, d.marginLeft = p
                    }
                    return (r && !i ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (d = function(e, t, n) {
                        var i = 2 < arguments.length && void 0 !== n && n,
                            r = v(t, "top"),
                            o = v(t, "left"),
                            s = i ? -1 : 1;
                        return e.top += r * s, e.bottom += r * s, e.left += o * s, e.right += o * s, e
                    }(d, t)), d
                }

                function D(e) {
                    if (!e || !e.parentElement || m()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === E(t, "transform");) t = t.parentElement;
                    return t || document.documentElement
                }

                function x(e, t, n, i, r) {
                    var o = 4 < arguments.length && void 0 !== r && r,
                        s = {
                            top: 0,
                            left: 0
                        },
                        a = o ? D(e) : p(e, t);
                    if ("viewport" === i) s = function(e, t) {
                        var n = 1 < arguments.length && void 0 !== t && t,
                            i = e.ownerDocument.documentElement,
                            r = A(e, i),
                            o = Math.max(i.clientWidth, window.innerWidth || 0),
                            s = Math.max(i.clientHeight, window.innerHeight || 0),
                            a = n ? 0 : v(i),
                            l = n ? 0 : v(i, "left");
                        return w({
                            top: a - r.top + r.marginTop,
                            left: l - r.left + r.marginLeft,
                            width: o,
                            height: s
                        })
                    }(a, o);
                    else {
                        var l = void 0;
                        "scrollParent" === i ? "BODY" === (l = g(h(t))).nodeName && (l = e.ownerDocument.documentElement) : l = "window" === i ? e.ownerDocument.documentElement : i;
                        var u = A(l, a, o);
                        if ("HTML" !== l.nodeName || function e(t) {
                                var n = t.nodeName;
                                return "BODY" !== n && "HTML" !== n && ("fixed" === E(t, "position") || e(h(t)))
                            }(a)) s = u;
                        else {
                            var c = _(),
                                f = c.height,
                                d = c.width;
                            s.top += u.top - u.marginTop, s.bottom = f + u.top, s.left += u.left - u.marginLeft, s.right = d + u.left
                        }
                    }
                    return s.left += n, s.top += n, s.right -= n, s.bottom -= n, s
                }

                function O(e, t, i, n, r, o) {
                    var s = 5 < arguments.length && void 0 !== o ? o : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var a = x(i, n, s, r),
                        l = {
                            top: {
                                width: a.width,
                                height: t.top - a.top
                            },
                            right: {
                                width: a.right - t.right,
                                height: a.height
                            },
                            bottom: {
                                width: a.width,
                                height: a.bottom - t.bottom
                            },
                            left: {
                                width: t.left - a.left,
                                height: a.height
                            }
                        },
                        u = Object.keys(l).map(function(e) {
                            return C({
                                key: e
                            }, l[e], {
                                area: (t = l[e]).width * t.height
                            });
                            var t
                        }).sort(function(e, t) {
                            return t.area - e.area
                        }),
                        c = u.filter(function(e) {
                            var t = e.width,
                                n = e.height;
                            return t >= i.clientWidth && n >= i.clientHeight
                        }),
                        f = 0 < c.length ? c[0].key : u[0].key,
                        d = e.split("-")[1];
                    return f + (d ? "-" + d : "")
                }

                function I(e, t, n, i) {
                    var r = 3 < arguments.length && void 0 !== i ? i : null;
                    return A(n, r ? D(t) : p(t, n), r)
                }

                function N(e) {
                    var t = getComputedStyle(e),
                        n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
                        i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
                    return {
                        width: e.offsetWidth + i,
                        height: e.offsetHeight + n
                    }
                }

                function L(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, function(e) {
                        return t[e]
                    })
                }

                function k(e, t, n) {
                    n = n.split("-")[0];
                    var i = N(e),
                        r = {
                            width: i.width,
                            height: i.height
                        },
                        o = -1 !== ["right", "left"].indexOf(n),
                        s = o ? "top" : "left",
                        a = o ? "left" : "top",
                        l = o ? "height" : "width",
                        u = o ? "width" : "height";
                    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[L(a)], r
                }

                function P(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function H(e, n, t) {
                    return (void 0 === t ? e : e.slice(0, function(e, t, n) {
                        if (Array.prototype.findIndex) return e.findIndex(function(e) {
                            return e[t] === n
                        });
                        var i = P(e, function(e) {
                            return e[t] === n
                        });
                        return e.indexOf(i)
                    }(e, "name", t))).forEach(function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var t = e.function || e.fn;
                        e.enabled && s(t) && (n.offsets.popper = w(n.offsets.popper), n.offsets.reference = w(n.offsets.reference), n = t(n, e))
                    }), n
                }

                function j(e, n) {
                    return e.some(function(e) {
                        var t = e.name;
                        return e.enabled && t === n
                    })
                }

                function R(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = r ? "" + r + n : e;
                        if (void 0 !== document.body.style[o]) return o
                    }
                    return null
                }

                function M(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function W(e, t, n, i) {
                    n.updateBound = i, M(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var r = g(e);
                    return function e(t, n, i, r) {
                        var o = "BODY" === t.nodeName,
                            s = o ? t.ownerDocument.defaultView : t;
                        s.addEventListener(n, i, {
                            passive: !0
                        }), o || e(g(s.parentNode), n, i, r), r.push(s)
                    }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                }

                function F() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, M(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }

                function q(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function U(n, i) {
                    Object.keys(i).forEach(function(e) {
                        var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && q(i[e]) && (t = "px"), n.style[e] = i[e] + t
                    })
                }

                function B(e, t, n) {
                    var i = P(e, function(e) {
                            return e.name === t
                        }),
                        r = !!i && e.some(function(e) {
                            return e.name === n && e.enabled && e.order < i.order
                        });
                    if (!r) {
                        var o = "`" + t + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                    }
                    return r
                }
                var V = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    G = V.slice(3);

                function K(e, t) {
                    var n = 1 < arguments.length && void 0 !== t && t,
                        i = G.indexOf(e),
                        r = G.slice(i + 1).concat(G.slice(0, i));
                    return n ? r.reverse() : r
                }
                var Q = "flip",
                    $ = "clockwise",
                    X = "counterclockwise";

                function Y(e, r, o, t) {
                    var s = [0, 0],
                        a = -1 !== ["right", "left"].indexOf(t),
                        n = e.split(/(\+|\-)/).map(function(e) {
                            return e.trim()
                        }),
                        i = n.indexOf(P(n, function(e) {
                            return -1 !== e.search(/,|\s/)
                        }));
                    n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                    var l = /\s*,\s*|\s+/,
                        u = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
                    return (u = u.map(function(e, t) {
                        var n = (1 === t ? !a : a) ? "height" : "width",
                            i = !1;
                        return e.reduce(function(e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
                        }, []).map(function(e) {
                            return function(e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    s = r[2];
                                if (!o) return e;
                                if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? o : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                var a = void 0;
                                switch (s) {
                                    case "%p":
                                        a = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        a = i
                                }
                                return w(a)[t] / 100 * o
                            }(e, n, r, o)
                        })
                    })).forEach(function(n, i) {
                        n.forEach(function(e, t) {
                            q(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
                        })
                    }), s
                }
                var z = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        i = t.split("-")[1];
                                    if (i) {
                                        var r = e.offsets,
                                            o = r.reference,
                                            s = r.popper,
                                            a = -1 !== ["bottom", "top"].indexOf(n),
                                            l = a ? "left" : "top",
                                            u = a ? "width" : "height",
                                            c = {
                                                start: b({}, l, o[l]),
                                                end: b({}, l, o[l] + o[u] - s[u])
                                            };
                                        e.offsets.popper = C({}, s, c[i])
                                    }
                                    return e
                                }
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.offset,
                                        i = e.placement,
                                        r = e.offsets,
                                        o = r.popper,
                                        s = r.reference,
                                        a = i.split("-")[0],
                                        l = void 0;
                                    return l = q(+n) ? [+n, 0] : Y(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                                },
                                offset: 0
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function(e, i) {
                                    var t = i.boundariesElement || y(e.instance.popper);
                                    e.instance.reference === t && (t = y(t));
                                    var n = R("transform"),
                                        r = e.instance.popper.style,
                                        o = r.top,
                                        s = r.left,
                                        a = r[n];
                                    r.top = "", r.left = "", r[n] = "";
                                    var l = x(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                                    r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                                    var u = i.priority,
                                        c = e.offsets.popper,
                                        f = {
                                            primary: function(e) {
                                                var t = c[e];
                                                return c[e] < l[e] && !i.escapeWithReference && (t = Math.max(c[e], l[e])), b({}, e, t)
                                            },
                                            secondary: function(e) {
                                                var t = "right" === e ? "left" : "top",
                                                    n = c[t];
                                                return c[e] > l[e] && !i.escapeWithReference && (n = Math.min(c[t], l[e] - ("right" === e ? c.width : c.height))), b({}, t, n)
                                            }
                                        };
                                    return u.forEach(function(e) {
                                        var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                        c = C({}, c, f[t](e))
                                    }), e.offsets.popper = c, e
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent"
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function(e) {
                                    var t = e.offsets,
                                        n = t.popper,
                                        i = t.reference,
                                        r = e.placement.split("-")[0],
                                        o = Math.floor,
                                        s = -1 !== ["top", "bottom"].indexOf(r),
                                        a = s ? "right" : "bottom",
                                        l = s ? "left" : "top",
                                        u = s ? "width" : "height";
                                    return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                                }
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n;
                                    if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                    var i = t.element;
                                    if ("string" == typeof i) {
                                        if (!(i = e.instance.popper.querySelector(i))) return e
                                    } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                    var r = e.placement.split("-")[0],
                                        o = e.offsets,
                                        s = o.popper,
                                        a = o.reference,
                                        l = -1 !== ["left", "right"].indexOf(r),
                                        u = l ? "height" : "width",
                                        c = l ? "Top" : "Left",
                                        f = c.toLowerCase(),
                                        d = l ? "left" : "top",
                                        h = l ? "bottom" : "right",
                                        p = N(i)[u];
                                    a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = w(e.offsets.popper);
                                    var g = a[f] + a[u] / 2 - p / 2,
                                        m = E(e.instance.popper),
                                        v = parseFloat(m["margin" + c], 10),
                                        y = parseFloat(m["border" + c + "Width"], 10),
                                        _ = g - e.offsets.popper[f] - v - y;
                                    return _ = Math.max(Math.min(s[u] - p, _), 0), e.arrowElement = i, e.offsets.arrow = (b(n = {}, f, Math.round(_)), b(n, d, ""), n), e
                                },
                                element: "[x-arrow]"
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function(p, g) {
                                    if (j(p.instance.modifiers, "inner")) return p;
                                    if (p.flipped && p.placement === p.originalPlacement) return p;
                                    var m = x(p.instance.popper, p.instance.reference, g.padding, g.boundariesElement, p.positionFixed),
                                        v = p.placement.split("-")[0],
                                        y = L(v),
                                        _ = p.placement.split("-")[1] || "",
                                        E = [];
                                    switch (g.behavior) {
                                        case Q:
                                            E = [v, y];
                                            break;
                                        case $:
                                            E = K(v);
                                            break;
                                        case X:
                                            E = K(v, !0);
                                            break;
                                        default:
                                            E = g.behavior
                                    }
                                    return E.forEach(function(e, t) {
                                        if (v !== e || E.length === t + 1) return p;
                                        v = p.placement.split("-")[0], y = L(v);
                                        var n, i = p.offsets.popper,
                                            r = p.offsets.reference,
                                            o = Math.floor,
                                            s = "left" === v && o(i.right) > o(r.left) || "right" === v && o(i.left) < o(r.right) || "top" === v && o(i.bottom) > o(r.top) || "bottom" === v && o(i.top) < o(r.bottom),
                                            a = o(i.left) < o(m.left),
                                            l = o(i.right) > o(m.right),
                                            u = o(i.top) < o(m.top),
                                            c = o(i.bottom) > o(m.bottom),
                                            f = "left" === v && a || "right" === v && l || "top" === v && u || "bottom" === v && c,
                                            d = -1 !== ["top", "bottom"].indexOf(v),
                                            h = !!g.flipVariations && (d && "start" === _ && a || d && "end" === _ && l || !d && "start" === _ && u || !d && "end" === _ && c);
                                        (s || f || h) && (p.flipped = !0, (s || f) && (v = E[t + 1]), h && (_ = "end" === (n = _) ? "start" : "start" === n ? "end" : n), p.placement = v + (_ ? "-" + _ : ""), p.offsets.popper = C({}, p.offsets.popper, k(p.instance.popper, p.offsets.reference, p.placement)), p = H(p.instance.modifiers, p, "flip"))
                                    }), p
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport"
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function(e) {
                                    var t = e.placement,
                                        n = t.split("-")[0],
                                        i = e.offsets,
                                        r = i.popper,
                                        o = i.reference,
                                        s = -1 !== ["left", "right"].indexOf(n),
                                        a = -1 === ["top", "left"].indexOf(n);
                                    return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = w(r), e
                                }
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function(e) {
                                    if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                    var t = e.offsets.reference,
                                        n = P(e.instance.modifiers, function(e) {
                                            return "preventOverflow" === e.name
                                        }).boundaries;
                                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                        if (!0 === e.hide) return e;
                                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                    } else {
                                        if (!1 === e.hide) return e;
                                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                    }
                                    return e
                                }
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function(e, t) {
                                    var n = t.x,
                                        i = t.y,
                                        r = e.offsets.popper,
                                        o = P(e.instance.modifiers, function(e) {
                                            return "applyStyle" === e.name
                                        }).gpuAcceleration;
                                    void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                    var s = void 0 !== o ? o : t.gpuAcceleration,
                                        a = S(y(e.instance.popper)),
                                        l = {
                                            position: r.position
                                        },
                                        u = {
                                            left: Math.floor(r.left),
                                            top: Math.round(r.top),
                                            bottom: Math.round(r.bottom),
                                            right: Math.floor(r.right)
                                        },
                                        c = "bottom" === n ? "top" : "bottom",
                                        f = "right" === i ? "left" : "right",
                                        d = R("transform"),
                                        h = void 0,
                                        p = void 0;
                                    if (p = "bottom" == c ? -a.height + u.bottom : u.top, h = "right" == f ? -a.width + u.right : u.left, s && d) l[d] = "translate3d(" + h + "px, " + p + "px, 0)", l[c] = 0, l[f] = 0, l.willChange = "transform";
                                    else {
                                        var g = "bottom" == c ? -1 : 1,
                                            m = "right" == f ? -1 : 1;
                                        l[c] = p * g, l[f] = h * m, l.willChange = c + ", " + f
                                    }
                                    var v = {
                                        "x-placement": e.placement
                                    };
                                    return e.attributes = C({}, v, e.attributes), e.styles = C({}, l, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right"
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function(e) {
                                    var t, n;
                                    return U(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                                        !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                    }), e.arrowElement && Object.keys(e.arrowStyles).length && U(e.arrowElement, e.arrowStyles), e
                                },
                                onLoad: function(e, t, n, i, r) {
                                    var o = I(r, t, e, n.positionFixed),
                                        s = O(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                    return t.setAttribute("x-placement", s), U(t, {
                                        position: n.positionFixed ? "fixed" : "absolute"
                                    }), n
                                },
                                gpuAcceleration: void 0
                            }
                        }
                    },
                    J = (d(Z, [{
                        key: "update",
                        value: function() {
                            return function() {
                                if (!this.state.isDestroyed) {
                                    var e = {
                                        instance: this,
                                        styles: {},
                                        arrowStyles: {},
                                        attributes: {},
                                        flipped: !1,
                                        offsets: {}
                                    };
                                    e.offsets.reference = I(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = k(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = H(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                                }
                            }.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return function() {
                                return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[R("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                            }.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return function() {
                                this.state.eventsEnabled || (this.state = W(this.reference, this.options, this.state, this.scheduleUpdate))
                            }.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return F.call(this)
                        }
                    }]), Z);

                function Z(e, t) {
                    var n = this,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, Z), this.scheduleUpdate = function() {
                        return requestAnimationFrame(n.update)
                    }, this.update = o(this.update.bind(this)), this.options = C({}, Z.Defaults, i), this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(C({}, Z.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                        n.options.modifiers[e] = C({}, Z.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                    }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                        return C({
                            name: e
                        }, n.options.modifiers[e])
                    }).sort(function(e, t) {
                        return e.order - t.order
                    }), this.modifiers.forEach(function(e) {
                        e.enabled && s(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                    }), this.update();
                    var r = this.options.eventsEnabled;
                    r && this.enableEventListeners(), this.state.eventsEnabled = r
                }
                J.Utils = ("undefined" != typeof window ? window : e).PopperUtils, J.placements = V, J.Defaults = z, ee.default = J
            }.call(this, t("./node_modules/webpack/buildin/global.js"))
    },
    "./node_modules/webpack/buildin/global.js": function(S6, T6) {
        var U6;
        U6 = function() {
            return this
        }();
        try {
            U6 = U6 || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (U6 = window)
        }
        S6.exports = U6
    },
    0: function(e, t, n) {
        e.exports = n("./client/index.js")
    }
});