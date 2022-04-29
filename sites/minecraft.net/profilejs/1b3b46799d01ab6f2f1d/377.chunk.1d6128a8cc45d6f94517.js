(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [377], {
        4541: function(e, t, r) {
            "use strict";

            function n(e, t, r, n, i, o, a) {
                try {
                    var s = e[o](a),
                        l = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, i)
            }
            var i;

            function o(e) {
                return {
                    loginWithXbox: (t = regeneratorRuntime.mark((function t(r) {
                        var n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, e.post("authentication/login_with_xbox", {
                                        identityToken: r,
                                        ensureLegacyEnabled: !0
                                    });
                                case 3:
                                    return n = t.sent, t.t0 = n.ok, t.next = 7, n.json();
                                case 7:
                                    return t.t1 = t.sent, t.abrupt("return", {
                                        ok: t.t0,
                                        error: !1,
                                        data: t.t1
                                    });
                                case 11:
                                    return t.prev = 11, t.t2 = t.catch(0), t.abrupt("return", {
                                        ok: !1,
                                        error: !0,
                                        data: null
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 11]
                        ])
                    })), r = function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(i, o) {
                            var a = t.apply(e, r);

                            function s(e) {
                                n(a, i, o, s, l, "next", e)
                            }

                            function l(e) {
                                n(a, i, o, s, l, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function(e) {
                        return r.apply(this, arguments)
                    })
                };
                var t, r
            }
            r.d(t, {
                    e: function() {
                        return o
                    }
                }),
                function(e) {
                    e[e.RegularError = 0] = "RegularError", e[e.NetworkError = 1] = "NetworkError"
                }(i || (i = {}))
        },
        3795: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = r(1321),
                i = r(1917),
                o = new n.K(i.N["endpoint.minecraftServices"], {
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    mode: "cors",
                    redirect: "follow"
                })
        },
        1849: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return o
                }
            });
            var n = r(3795);

            function i(e, t, r, n, i, o, a) {
                try {
                    var s = e[o](a),
                        l = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(l) : Promise.resolve(l).then(n, i)
            }
            var o = function() {
                var e, t = (e = regeneratorRuntime.mark((function e(t) {
                    var r;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, n.Z.get("entitlements", {
                                    headers: {
                                        Authorization: "Bearer ".concat(t)
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
                })), function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            i(a, n, o, s, l, "next", e)
                        }

                        function l(e) {
                            i(a, n, o, s, l, "throw", e)
                        }
                        s(void 0)
                    }))
                });
                return function(e) {
                    return t.apply(this, arguments)
                }
            }()
        },
        2846: function(e, t, r) {
            "use strict";
            r.d(t, {
                K: function() {
                    return f
                }
            });
            var n = r(1917),
                i = r(7569),
                o = r(7431),
                a = (0, i.GX)((0, i.E$)(window.location.hash) || ""),
                s = n.N["url.xboxLiveUrl"],
                l = n.N["url.plafabXboxLiveUrl"],
                c = n.N["url.marketplaceMinecraft"],
                u = n.N["url.pocketRelamsMinecraft"],
                p = (0, i.WR)(a || []);

            function f(e, t) {
                o.nP.setToken({
                    user: {
                        id: t,
                        username: p
                    },
                    accessToken: e,
                    clientToken: "",
                    availableProfiles: []
                }), localStorage.setItem("XboxXBLToken", (0, i.vJ)(s, a)), localStorage.setItem("PlayFabXBLToken", (0, i.vJ)(l, a)), localStorage.setItem("MarketplaceXBLToken", (0, i.vJ)(c, a)), localStorage.setItem("RealmsXBLToken", (0, i.vJ)(u, a))
            }
        },
        4115: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    r = decodeURIComponent(atob(t).split("").map((function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""));
                return JSON.parse(r)
            }
            r.d(t, {
                $: function() {
                    return n
                }
            })
        },
        6433: function(e, t, r) {
            var n, i, o;

            function a(e) {
                return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
            o = function() {
                "use strict";
                var e = Object.hasOwnProperty,
                    t = Object.setPrototypeOf,
                    r = Object.isFrozen,
                    n = Object.getPrototypeOf,
                    i = Object.getOwnPropertyDescriptor,
                    o = Object.freeze,
                    s = Object.seal,
                    l = Object.create,
                    c = "undefined" != typeof Reflect && Reflect,
                    u = c.apply,
                    p = c.construct;
                u || (u = function(e, t, r) {
                    return e.apply(t, r)
                }), o || (o = function(e) {
                    return e
                }), s || (s = function(e) {
                    return e
                }), p || (p = function(e, t) {
                    return new(Function.prototype.bind.apply(e, [null].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                            return r
                        }
                        return Array.from(e)
                    }(t))))
                });
                var f, d = E(Array.prototype.forEach),
                    h = E(Array.prototype.pop),
                    m = E(Array.prototype.push),
                    b = E(String.prototype.toLowerCase),
                    g = E(String.prototype.match),
                    y = E(String.prototype.replace),
                    v = E(String.prototype.indexOf),
                    x = E(String.prototype.trim),
                    S = E(RegExp.prototype.test),
                    w = (f = TypeError, function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return p(f, t)
                    });

                function E(e) {
                    return function(t) {
                        for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        return u(e, t, n)
                    }
                }

                function k(e, n) {
                    t && t(e, null);
                    for (var i = n.length; i--;) {
                        var o = n[i];
                        if ("string" == typeof o) {
                            var a = b(o);
                            a !== o && (r(n) || (n[i] = a), o = a)
                        }
                        e[o] = !0
                    }
                    return e
                }

                function O(t) {
                    var r = l(null),
                        n = void 0;
                    for (n in t) u(e, t, [n]) && (r[n] = t[n]);
                    return r
                }

                function _(e, t) {
                    for (; null !== e;) {
                        var r = i(e, t);
                        if (r) {
                            if (r.get) return E(r.get);
                            if ("function" == typeof r.value) return E(r.value)
                        }
                        e = n(e)
                    }
                    return null
                }
                var T = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                    A = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                    P = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                    M = o(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                    R = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
                    F = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                    N = o(["#text"]),
                    C = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns"]),
                    I = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                    L = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                    j = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                    D = s(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
                    B = s(/<%[\s\S]*|[\s\S]*%>/gm),
                    W = s(/^data-[\-\w.\u00B7-\uFFFF]/),
                    $ = s(/^aria-[\-\w]+$/),
                    U = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                    G = s(/^(?:\w+script|data):/i),
                    z = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                    H = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(e) {
                        return a(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : a(e)
                    };

                function X(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }
                var K = function() {
                        return "undefined" == typeof window ? null : window
                    },
                    V = function(e, t) {
                        if ("object" !== (void 0 === e ? "undefined" : H(e)) || "function" != typeof e.createPolicy) return null;
                        var r = null,
                            n = "data-tt-policy-suffix";
                        t.currentScript && t.currentScript.hasAttribute(n) && (r = t.currentScript.getAttribute(n));
                        var i = "dompurify" + (r ? "#" + r : "");
                        try {
                            return e.createPolicy(i, {
                                createHTML: function(e) {
                                    return e
                                }
                            })
                        } catch (e) {
                            return console.warn("TrustedTypes policy " + i + " could not be created."), null
                        }
                    };
                return function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K(),
                        r = function(t) {
                            return e(t)
                        };
                    if (r.version = "2.2.6", r.removed = [], !t || !t.document || 9 !== t.document.nodeType) return r.isSupported = !1, r;
                    var n = t.document,
                        i = t.document,
                        a = t.DocumentFragment,
                        s = t.HTMLTemplateElement,
                        l = t.Node,
                        c = t.Element,
                        u = t.NodeFilter,
                        p = t.NamedNodeMap,
                        f = void 0 === p ? t.NamedNodeMap || t.MozNamedAttrMap : p,
                        E = t.Text,
                        q = t.Comment,
                        J = t.DOMParser,
                        Y = t.trustedTypes,
                        Z = c.prototype,
                        Q = _(Z, "cloneNode"),
                        ee = _(Z, "nextSibling"),
                        te = _(Z, "childNodes"),
                        re = _(Z, "parentNode");
                    if ("function" == typeof s) {
                        var ne = i.createElement("template");
                        ne.content && ne.content.ownerDocument && (i = ne.content.ownerDocument)
                    }
                    var ie = V(Y, n),
                        oe = ie && je ? ie.createHTML("") : "",
                        ae = i,
                        se = ae.implementation,
                        le = ae.createNodeIterator,
                        ce = ae.getElementsByTagName,
                        ue = ae.createDocumentFragment,
                        pe = n.importNode,
                        fe = {};
                    try {
                        fe = O(i).documentMode ? i.documentMode : {}
                    } catch (e) {}
                    var de = {};
                    r.isSupported = se && void 0 !== se.createHTMLDocument && 9 !== fe;
                    var he = D,
                        me = B,
                        be = W,
                        ge = $,
                        ye = G,
                        ve = z,
                        xe = U,
                        Se = null,
                        we = k({}, [].concat(X(T), X(A), X(P), X(R), X(N))),
                        Ee = null,
                        ke = k({}, [].concat(X(C), X(I), X(L), X(j))),
                        Oe = null,
                        _e = null,
                        Te = !0,
                        Ae = !0,
                        Pe = !1,
                        Me = !1,
                        Re = !1,
                        Fe = !1,
                        Ne = !1,
                        Ce = !1,
                        Ie = !1,
                        Le = !0,
                        je = !1,
                        De = !0,
                        Be = !0,
                        We = !1,
                        $e = {},
                        Ue = k({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
                        Ge = null,
                        ze = k({}, ["audio", "video", "img", "source", "image", "track"]),
                        He = null,
                        Xe = k({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
                        Ke = null,
                        Ve = i.createElement("form"),
                        qe = function(e) {
                            Ke && Ke === e || (e && "object" === (void 0 === e ? "undefined" : H(e)) || (e = {}), e = O(e), Se = "ALLOWED_TAGS" in e ? k({}, e.ALLOWED_TAGS) : we, Ee = "ALLOWED_ATTR" in e ? k({}, e.ALLOWED_ATTR) : ke, He = "ADD_URI_SAFE_ATTR" in e ? k(O(Xe), e.ADD_URI_SAFE_ATTR) : Xe, Ge = "ADD_DATA_URI_TAGS" in e ? k(O(ze), e.ADD_DATA_URI_TAGS) : ze, Oe = "FORBID_TAGS" in e ? k({}, e.FORBID_TAGS) : {}, _e = "FORBID_ATTR" in e ? k({}, e.FORBID_ATTR) : {}, $e = "USE_PROFILES" in e && e.USE_PROFILES, Te = !1 !== e.ALLOW_ARIA_ATTR, Ae = !1 !== e.ALLOW_DATA_ATTR, Pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Me = e.SAFE_FOR_TEMPLATES || !1, Re = e.WHOLE_DOCUMENT || !1, Ce = e.RETURN_DOM || !1, Ie = e.RETURN_DOM_FRAGMENT || !1, Le = !1 !== e.RETURN_DOM_IMPORT, je = e.RETURN_TRUSTED_TYPE || !1, Ne = e.FORCE_BODY || !1, De = !1 !== e.SANITIZE_DOM, Be = !1 !== e.KEEP_CONTENT, We = e.IN_PLACE || !1, xe = e.ALLOWED_URI_REGEXP || xe, Me && (Ae = !1), Ie && (Ce = !0), $e && (Se = k({}, [].concat(X(N))), Ee = [], !0 === $e.html && (k(Se, T), k(Ee, C)), !0 === $e.svg && (k(Se, A), k(Ee, I), k(Ee, j)), !0 === $e.svgFilters && (k(Se, P), k(Ee, I), k(Ee, j)), !0 === $e.mathMl && (k(Se, R), k(Ee, L), k(Ee, j))), e.ADD_TAGS && (Se === we && (Se = O(Se)), k(Se, e.ADD_TAGS)), e.ADD_ATTR && (Ee === ke && (Ee = O(Ee)), k(Ee, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && k(He, e.ADD_URI_SAFE_ATTR), Be && (Se["#text"] = !0), Re && k(Se, ["html", "head", "body"]), Se.table && (k(Se, ["tbody"]), delete Oe.tbody), o && o(e), Ke = e)
                        },
                        Je = k({}, ["mi", "mo", "mn", "ms", "mtext"]),
                        Ye = k({}, ["foreignobject", "desc", "title", "annotation-xml"]),
                        Ze = k({}, A);
                    k(Ze, P), k(Ze, M);
                    var Qe = k({}, R);
                    k(Qe, F);
                    var et = "http://www.w3.org/1998/Math/MathML",
                        tt = "http://www.w3.org/2000/svg",
                        rt = "http://www.w3.org/1999/xhtml",
                        nt = function(e) {
                            var t = re(e);
                            t && t.tagName || (t = {
                                namespaceURI: rt,
                                tagName: "template"
                            });
                            var r = b(e.tagName),
                                n = b(t.tagName);
                            if (e.namespaceURI === tt) return t.namespaceURI === rt ? "svg" === r : t.namespaceURI === et ? "svg" === r && ("annotation-xml" === n || Je[n]) : Boolean(Ze[r]);
                            if (e.namespaceURI === et) return t.namespaceURI === rt ? "math" === r : t.namespaceURI === tt ? "math" === r && Ye[n] : Boolean(Qe[r]);
                            if (e.namespaceURI === rt) {
                                if (t.namespaceURI === tt && !Ye[n]) return !1;
                                if (t.namespaceURI === et && !Je[n]) return !1;
                                var i = k({}, ["title", "style", "font", "a", "script"]);
                                return !Qe[r] && (i[r] || !Ze[r])
                            }
                            return !1
                        },
                        it = function(e) {
                            m(r.removed, {
                                element: e
                            });
                            try {
                                e.parentNode.removeChild(e)
                            } catch (t) {
                                try {
                                    e.outerHTML = oe
                                } catch (t) {
                                    e.remove()
                                }
                            }
                        },
                        ot = function(e, t) {
                            try {
                                m(r.removed, {
                                    attribute: t.getAttributeNode(e),
                                    from: t
                                })
                            } catch (e) {
                                m(r.removed, {
                                    attribute: null,
                                    from: t
                                })
                            }
                            t.removeAttribute(e)
                        },
                        at = function(e) {
                            var t = void 0,
                                r = void 0;
                            if (Ne) e = "<remove></remove>" + e;
                            else {
                                var n = g(e, /^[\r\n\t ]+/);
                                r = n && n[0]
                            }
                            var o = ie ? ie.createHTML(e) : e;
                            try {
                                t = (new J).parseFromString(o, "text/html")
                            } catch (e) {}
                            if (!t || !t.documentElement) {
                                var a = (t = se.createHTMLDocument("")).body;
                                a.parentNode.removeChild(a.parentNode.firstElementChild), a.outerHTML = o
                            }
                            return e && r && t.body.insertBefore(i.createTextNode(r), t.body.childNodes[0] || null), ce.call(t, Re ? "html" : "body")[0]
                        },
                        st = function(e) {
                            return le.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, (function() {
                                return u.FILTER_ACCEPT
                            }), !1)
                        },
                        lt = function(e) {
                            return !(e instanceof E || e instanceof q || "string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof f && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore)
                        },
                        ct = function(e) {
                            return "object" === (void 0 === l ? "undefined" : H(l)) ? e instanceof l : e && "object" === (void 0 === e ? "undefined" : H(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
                        },
                        ut = function(e, t, n) {
                            de[e] && d(de[e], (function(e) {
                                e.call(r, t, n, Ke)
                            }))
                        },
                        pt = function(e) {
                            var t = void 0;
                            if (ut("beforeSanitizeElements", e, null), lt(e)) return it(e), !0;
                            if (g(e.nodeName, /[\u0080-\uFFFF]/)) return it(e), !0;
                            var n = b(e.nodeName);
                            if (ut("uponSanitizeElement", e, {
                                    tagName: n,
                                    allowedTags: Se
                                }), !ct(e.firstElementChild) && (!ct(e.content) || !ct(e.content.firstElementChild)) && S(/<[/\w]/g, e.innerHTML) && S(/<[/\w]/g, e.textContent)) return it(e), !0;
                            if (!Se[n] || Oe[n]) {
                                if (Be && !Ue[n])
                                    for (var i = re(e), o = te(e), a = o.length - 1; a >= 0; --a) i.insertBefore(Q(o[a], !0), ee(e));
                                return it(e), !0
                            }
                            return e instanceof c && !nt(e) ? (it(e), !0) : "noscript" !== n && "noembed" !== n || !S(/<\/no(script|embed)/i, e.innerHTML) ? (Me && 3 === e.nodeType && (t = e.textContent, t = y(t, he, " "), t = y(t, me, " "), e.textContent !== t && (m(r.removed, {
                                element: e.cloneNode()
                            }), e.textContent = t)), ut("afterSanitizeElements", e, null), !1) : (it(e), !0)
                        },
                        ft = function(e, t, r) {
                            if (De && ("id" === t || "name" === t) && (r in i || r in Ve)) return !1;
                            if (Ae && S(be, t));
                            else if (Te && S(ge, t));
                            else {
                                if (!Ee[t] || _e[t]) return !1;
                                if (He[t]);
                                else if (S(xe, y(r, ve, "")));
                                else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== v(r, "data:") || !Ge[e])
                                    if (Pe && !S(ye, y(r, ve, "")));
                                    else if (r) return !1
                            }
                            return !0
                        },
                        dt = function(e) {
                            var t = void 0,
                                n = void 0,
                                i = void 0,
                                o = void 0;
                            ut("beforeSanitizeAttributes", e, null);
                            var a = e.attributes;
                            if (a) {
                                var s = {
                                    attrName: "",
                                    attrValue: "",
                                    keepAttr: !0,
                                    allowedAttributes: Ee
                                };
                                for (o = a.length; o--;) {
                                    var l = t = a[o],
                                        c = l.name,
                                        u = l.namespaceURI;
                                    if (n = x(t.value), i = b(c), s.attrName = i, s.attrValue = n, s.keepAttr = !0, s.forceKeepAttr = void 0, ut("uponSanitizeAttribute", e, s), n = s.attrValue, !s.forceKeepAttr && (ot(c, e), s.keepAttr))
                                        if (S(/\/>/i, n)) ot(c, e);
                                        else {
                                            Me && (n = y(n, he, " "), n = y(n, me, " "));
                                            var p = e.nodeName.toLowerCase();
                                            if (ft(p, i, n)) try {
                                                u ? e.setAttributeNS(u, c, n) : e.setAttribute(c, n), h(r.removed)
                                            } catch (e) {}
                                        }
                                }
                                ut("afterSanitizeAttributes", e, null)
                            }
                        },
                        ht = function e(t) {
                            var r = void 0,
                                n = st(t);
                            for (ut("beforeSanitizeShadowDOM", t, null); r = n.nextNode();) ut("uponSanitizeShadowNode", r, null), pt(r) || (r.content instanceof a && e(r.content), dt(r));
                            ut("afterSanitizeShadowDOM", t, null)
                        };
                    return r.sanitize = function(e, i) {
                        var o = void 0,
                            s = void 0,
                            c = void 0,
                            u = void 0,
                            p = void 0;
                        if (e || (e = "\x3c!--\x3e"), "string" != typeof e && !ct(e)) {
                            if ("function" != typeof e.toString) throw w("toString is not a function");
                            if ("string" != typeof(e = e.toString())) throw w("dirty is not a string, aborting")
                        }
                        if (!r.isSupported) {
                            if ("object" === H(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
                                if ("string" == typeof e) return t.toStaticHTML(e);
                                if (ct(e)) return t.toStaticHTML(e.outerHTML)
                            }
                            return e
                        }
                        if (Fe || qe(i), r.removed = [], "string" == typeof e && (We = !1), We);
                        else if (e instanceof l) 1 === (s = (o = at("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? o = s : o.appendChild(s);
                        else {
                            if (!Ce && !Me && !Re && -1 === e.indexOf("<")) return ie && je ? ie.createHTML(e) : e;
                            if (!(o = at(e))) return Ce ? null : oe
                        }
                        o && Ne && it(o.firstChild);
                        for (var f = st(We ? e : o); c = f.nextNode();) 3 === c.nodeType && c === u || pt(c) || (c.content instanceof a && ht(c.content), dt(c), u = c);
                        if (u = null, We) return e;
                        if (Ce) {
                            if (Ie)
                                for (p = ue.call(o.ownerDocument); o.firstChild;) p.appendChild(o.firstChild);
                            else p = o;
                            return Le && (p = pe.call(n, p, !0)), p
                        }
                        var d = Re ? o.outerHTML : o.innerHTML;
                        return Me && (d = y(d, he, " "), d = y(d, me, " ")), ie && je ? ie.createHTML(d) : d
                    }, r.setConfig = function(e) {
                        qe(e), Fe = !0
                    }, r.clearConfig = function() {
                        Ke = null, Fe = !1
                    }, r.isValidAttribute = function(e, t, r) {
                        Ke || qe({});
                        var n = b(e),
                            i = b(t);
                        return ft(n, i, r)
                    }, r.addHook = function(e, t) {
                        "function" == typeof t && (de[e] = de[e] || [], m(de[e], t))
                    }, r.removeHook = function(e) {
                        de[e] && h(de[e])
                    }, r.removeHooks = function(e) {
                        de[e] && (de[e] = [])
                    }, r.removeAllHooks = function() {
                        de = {}
                    }, r
                }()
            }, "object" === a(t) ? e.exports = o() : void 0 === (i = "function" == typeof(n = o) ? n.call(t, r, t, e) : n) || (e.exports = i)
        },
        2463: function() {
            "inert" in HTMLElement.prototype || (Object.defineProperty(HTMLElement.prototype, "inert", {
                enumerable: !0,
                get: function() {
                    return this.hasAttribute("inert")
                },
                set: function(e) {
                    e ? this.setAttribute("inert", "") : this.removeAttribute("inert")
                }
            }), window.addEventListener("load", (function() {
                function e(e) {
                    for (; e && e !== document.documentElement;) {
                        if (e.hasAttribute("inert")) return e;
                        e = e.parentElement
                    }
                    return null
                }

                function t(e) {
                    var t = e.path;
                    return t && t[0] || e.target
                }

                function r(e) {
                    e.path[e.path.length - 1] !== window && (n(t(e)), e.preventDefault(), e.stopPropagation())
                }

                function n(t) {
                    var r = e(t);
                    if (r) {
                        if (document.hasFocus() && 0 !== s) {
                            var n = (l || document).activeElement;
                            if (function(e) {
                                    var t = null;
                                    try {
                                        t = new KeyboardEvent("keydown", {
                                            keyCode: 9,
                                            which: 9,
                                            key: "Tab",
                                            code: "Tab",
                                            keyIdentifier: "U+0009",
                                            shiftKey: !!e,
                                            bubbles: !0
                                        })
                                    } catch (r) {
                                        try {
                                            (t = document.createEvent("KeyboardEvent")).initKeyboardEvent("keydown", !0, !0, window, "Tab", 0, e ? "Shift" : "", !1, "en")
                                        } catch (e) {}
                                    }
                                    if (t) {
                                        try {
                                            Object.defineProperty(t, "keyCode", {
                                                value: 9
                                            })
                                        } catch (e) {}
                                        document.dispatchEvent(t)
                                    }
                                }(0 > s), n != (l || document).activeElement) return;
                            var i, o = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
                                acceptNode: function(e) {
                                    return !e || !e.focus || 0 > e.tabIndex ? NodeFilter.FILTER_SKIP : r.contains(e) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                }
                            });
                            for (o.currentNode = r, o = (-1 === Math.sign(s) ? o.previousNode : o.nextNode).bind(o); i = o();)
                                if (i.focus(), (l || document).activeElement !== n) return
                        }
                        t.blur()
                    }
                }
                var i, o;
                i = "/*[inert]*/*[inert]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}", (o = document.createElement("style")).type = "text/css", o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), document.body.appendChild(o);
                var a = function(e) {
                    return null
                };
                window.ShadowRoot && (a = function(e) {
                    for (; e && e !== document.documentElement;) {
                        if (e instanceof window.ShadowRoot) return e;
                        e = e.parentNode
                    }
                    return null
                });
                var s = 0;
                document.addEventListener("keydown", (function(e) {
                    s = 9 === e.keyCode ? e.shiftKey ? -1 : 1 : 0
                })), document.addEventListener("mousedown", (function(e) {
                    s = 0
                }));
                var l = null;
                document.body.addEventListener("focus", (function(e) {
                    var i = t(e);
                    if ((e = i == e.target ? null : a(i)) != l) {
                        if (l) {
                            if (!(l instanceof window.ShadowRoot)) throw Error("not shadow root: " + l);
                            l.removeEventListener("focusin", r, !0)
                        }
                        e && e.addEventListener("focusin", r, !0), l = e
                    }
                    n(i)
                }), !0), document.addEventListener("click", (function(r) {
                    e(t(r)) && (r.preventDefault(), r.stopPropagation())
                }), !0)
            })))
        },
        3736: function(e, t) {
            /**
             * @preserve jed.js https://github.com/SlexAxton/Jed
             */
            ! function(r, n) {
                var i = Array.prototype,
                    o = Object.prototype,
                    a = i.slice,
                    s = o.hasOwnProperty,
                    l = i.forEach,
                    c = {},
                    u = {
                        forEach: function(e, t, r) {
                            var n, i, o;
                            if (null !== e)
                                if (l && e.forEach === l) e.forEach(t, r);
                                else if (e.length === +e.length) {
                                for (n = 0, i = e.length; n < i; n++)
                                    if (n in e && t.call(r, e[n], n, e) === c) return
                            } else
                                for (o in e)
                                    if (s.call(e, o) && t.call(r, e[o], o, e) === c) return
                        },
                        extend: function(e) {
                            return this.forEach(a.call(arguments, 1), (function(t) {
                                for (var r in t) e[r] = t[r]
                            })), e
                        }
                    },
                    p = function(e) {
                        if (this.defaults = {
                                locale_data: {
                                    messages: {
                                        "": {
                                            domain: "messages",
                                            lang: "en",
                                            plural_forms: "nplurals=2; plural=(n != 1);"
                                        }
                                    }
                                },
                                domain: "messages",
                                debug: !1
                            }, this.options = u.extend({}, this.defaults, e), this.textdomain(this.options.domain), e.domain && !this.options.locale_data[this.options.domain]) throw new Error("Text domain set to non-existent domain: `" + e.domain + "`")
                    };

                function f(e) {
                    return p.PF.compile(e || "nplurals=2; plural=(n != 1);")
                }

                function d(e, t) {
                    this._key = e, this._i18n = t
                }
                p.context_delimiter = String.fromCharCode(4), u.extend(d.prototype, {
                    onDomain: function(e) {
                        return this._domain = e, this
                    },
                    withContext: function(e) {
                        return this._context = e, this
                    },
                    ifPlural: function(e, t) {
                        return this._val = e, this._pkey = t, this
                    },
                    fetch: function(e) {
                        return "[object Array]" != {}.toString.call(e) && (e = [].slice.call(arguments, 0)), (e && e.length ? p.sprintf : function(e) {
                            return e
                        })(this._i18n.dcnpgettext(this._domain, this._context, this._key, this._pkey, this._val), e)
                    }
                }), u.extend(p.prototype, {
                    translate: function(e) {
                        return new d(e, this)
                    },
                    textdomain: function(e) {
                        if (!e) return this._textdomain;
                        this._textdomain = e
                    },
                    gettext: function(e) {
                        return this.dcnpgettext.call(this, n, n, e)
                    },
                    dgettext: function(e, t) {
                        return this.dcnpgettext.call(this, e, n, t)
                    },
                    dcgettext: function(e, t) {
                        return this.dcnpgettext.call(this, e, n, t)
                    },
                    ngettext: function(e, t, r) {
                        return this.dcnpgettext.call(this, n, n, e, t, r)
                    },
                    dngettext: function(e, t, r, i) {
                        return this.dcnpgettext.call(this, e, n, t, r, i)
                    },
                    dcngettext: function(e, t, r, i) {
                        return this.dcnpgettext.call(this, e, n, t, r, i)
                    },
                    pgettext: function(e, t) {
                        return this.dcnpgettext.call(this, n, e, t)
                    },
                    dpgettext: function(e, t, r) {
                        return this.dcnpgettext.call(this, e, t, r)
                    },
                    dcpgettext: function(e, t, r) {
                        return this.dcnpgettext.call(this, e, t, r)
                    },
                    npgettext: function(e, t, r, i) {
                        return this.dcnpgettext.call(this, n, e, t, r, i)
                    },
                    dnpgettext: function(e, t, r, n, i) {
                        return this.dcnpgettext.call(this, e, t, r, n, i)
                    },
                    dcnpgettext: function(e, t, r, n, i) {
                        var o;
                        if (n = n || r, e = e || this._textdomain, !this.options) return (o = new p).dcnpgettext.call(o, void 0, void 0, r, n, i);
                        if (!this.options.locale_data) throw new Error("No locale data provided.");
                        if (!this.options.locale_data[e]) throw new Error("Domain `" + e + "` was not found.");
                        if (!this.options.locale_data[e][""]) throw new Error("No locale meta information provided.");
                        if (!r) throw new Error("No translation key found.");
                        var a, s, l, c = t ? t + p.context_delimiter + r : r,
                            u = this.options.locale_data,
                            d = u[e],
                            h = (u.messages || this.defaults.locale_data.messages)[""],
                            m = d[""].plural_forms || d[""]["Plural-Forms"] || d[""]["plural-forms"] || h.plural_forms || h["Plural-Forms"] || h["plural-forms"];
                        if (void 0 === i) l = 0;
                        else {
                            if ("number" != typeof i && (i = parseInt(i, 10), isNaN(i))) throw new Error("The number that was passed in is not a number.");
                            l = f(m)(i)
                        }
                        if (!d) throw new Error("No domain named `" + e + "` could be found.");
                        return !(a = d[c]) || l > a.length ? (this.options.missing_key_callback && this.options.missing_key_callback(c, e), s = [r, n], !0 === this.options.debug && console.log(s[f(m)(i)]), s[f()(i)]) : (s = a[l]) || (s = [r, n])[f()(i)]
                    }
                });
                var h, m, b = function() {
                        function e(e) {
                            return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                        }

                        function t(e, t) {
                            for (var r = []; t > 0; r[--t] = e);
                            return r.join("")
                        }
                        var r = function e() {
                            return e.cache.hasOwnProperty(arguments[0]) || (e.cache[arguments[0]] = e.parse(arguments[0])), e.format.call(null, e.cache[arguments[0]], arguments)
                        };
                        return r.format = function(r, n) {
                            var i, o, a, s, l, c, u, p = 1,
                                f = r.length,
                                d = "",
                                h = [];
                            for (o = 0; o < f; o++)
                                if ("string" === (d = e(r[o]))) h.push(r[o]);
                                else if ("array" === d) {
                                if ((s = r[o])[2])
                                    for (i = n[p], a = 0; a < s[2].length; a++) {
                                        if (!i.hasOwnProperty(s[2][a])) throw b('[sprintf] property "%s" does not exist', s[2][a]);
                                        i = i[s[2][a]]
                                    } else i = s[1] ? n[s[1]] : n[p++];
                                if (/[^s]/.test(s[8]) && "number" != e(i)) throw b("[sprintf] expecting number but found %s", e(i));
                                switch (null == i && (i = ""), s[8]) {
                                    case "b":
                                        i = i.toString(2);
                                        break;
                                    case "c":
                                        i = String.fromCharCode(i);
                                        break;
                                    case "d":
                                        i = parseInt(i, 10);
                                        break;
                                    case "e":
                                        i = s[7] ? i.toExponential(s[7]) : i.toExponential();
                                        break;
                                    case "f":
                                        i = s[7] ? parseFloat(i).toFixed(s[7]) : parseFloat(i);
                                        break;
                                    case "o":
                                        i = i.toString(8);
                                        break;
                                    case "s":
                                        i = (i = String(i)) && s[7] ? i.substring(0, s[7]) : i;
                                        break;
                                    case "u":
                                        i = Math.abs(i);
                                        break;
                                    case "x":
                                        i = i.toString(16);
                                        break;
                                    case "X":
                                        i = i.toString(16).toUpperCase()
                                }
                                i = /[def]/.test(s[8]) && s[3] && i >= 0 ? "+" + i : i, c = s[4] ? "0" == s[4] ? "0" : s[4].charAt(1) : " ", u = s[6] - String(i).length, l = s[6] ? t(c, u) : "", h.push(s[5] ? i + l : l + i)
                            }
                            return h.join("")
                        }, r.cache = {}, r.parse = function(e) {
                            for (var t = e, r = [], n = [], i = 0; t;) {
                                if (null !== (r = /^[^\x25]+/.exec(t))) n.push(r[0]);
                                else if (null !== (r = /^\x25{2}/.exec(t))) n.push("%");
                                else {
                                    if (null === (r = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))) throw "[sprintf] huh?";
                                    if (r[2]) {
                                        i |= 1;
                                        var o = [],
                                            a = r[2],
                                            s = [];
                                        if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(a))) throw "[sprintf] huh?";
                                        for (o.push(s[1]);
                                            "" !== (a = a.substring(s[0].length));)
                                            if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(a))) o.push(s[1]);
                                            else {
                                                if (null === (s = /^\[(\d+)\]/.exec(a))) throw "[sprintf] huh?";
                                                o.push(s[1])
                                            }
                                        r[2] = o
                                    } else i |= 2;
                                    if (3 === i) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                                    n.push(r)
                                }
                                t = t.substring(r[0].length)
                            }
                            return n
                        }, r
                    }(),
                    g = function(e, t) {
                        return t.unshift(e), b.apply(null, t)
                    };
                p.parse_plural = function(e, t) {
                    return e = e.replace(/n/g, t), p.parse_expression(e)
                }, p.sprintf = function(e, t) {
                    return "[object Array]" == {}.toString.call(t) ? g(e, [].slice.call(t)) : b.apply(this, [].slice.call(arguments))
                }, p.prototype.sprintf = function() {
                    return p.sprintf.apply(this, arguments)
                }, (p.PF = {}).parse = function(e) {
                    var t = p.PF.extractPluralExpr(e);
                    return p.PF.parser.parse.call(p.PF.parser, t)
                }, p.PF.compile = function(e) {
                    var t = p.PF.parse(e);
                    return function(e) {
                        return !0 === (r = p.PF.interpreter(t)(e)) ? 1 : r || 0;
                        var r
                    }
                }, p.PF.interpreter = function(e) {
                    return function(t) {
                        switch (e.type) {
                            case "GROUP":
                                return p.PF.interpreter(e.expr)(t);
                            case "TERNARY":
                                return p.PF.interpreter(e.expr)(t) ? p.PF.interpreter(e.truthy)(t) : p.PF.interpreter(e.falsey)(t);
                            case "OR":
                                return p.PF.interpreter(e.left)(t) || p.PF.interpreter(e.right)(t);
                            case "AND":
                                return p.PF.interpreter(e.left)(t) && p.PF.interpreter(e.right)(t);
                            case "LT":
                                return p.PF.interpreter(e.left)(t) < p.PF.interpreter(e.right)(t);
                            case "GT":
                                return p.PF.interpreter(e.left)(t) > p.PF.interpreter(e.right)(t);
                            case "LTE":
                                return p.PF.interpreter(e.left)(t) <= p.PF.interpreter(e.right)(t);
                            case "GTE":
                                return p.PF.interpreter(e.left)(t) >= p.PF.interpreter(e.right)(t);
                            case "EQ":
                                return p.PF.interpreter(e.left)(t) == p.PF.interpreter(e.right)(t);
                            case "NEQ":
                                return p.PF.interpreter(e.left)(t) != p.PF.interpreter(e.right)(t);
                            case "MOD":
                                return p.PF.interpreter(e.left)(t) % p.PF.interpreter(e.right)(t);
                            case "VAR":
                                return t;
                            case "NUM":
                                return e.val;
                            default:
                                throw new Error("Invalid Token found.")
                        }
                    }
                }, p.PF.extractPluralExpr = function(e) {
                    e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), /;\s*$/.test(e) || (e = e.concat(";"));
                    var t, r = /nplurals\=(\d+);/,
                        n = e.match(r);
                    if (!(n.length > 1)) throw new Error("nplurals not found in plural_forms string: " + e);
                    if (n[1], !((t = (e = e.replace(r, "")).match(/plural\=(.*);/)) && t.length > 1)) throw new Error("`plural` expression not found: " + e);
                    return t[1]
                }, p.PF.parser = (h = {
                    trace: function() {},
                    yy: {},
                    symbols_: {
                        error: 2,
                        expressions: 3,
                        e: 4,
                        EOF: 5,
                        "?": 6,
                        ":": 7,
                        "||": 8,
                        "&&": 9,
                        "<": 10,
                        "<=": 11,
                        ">": 12,
                        ">=": 13,
                        "!=": 14,
                        "==": 15,
                        "%": 16,
                        "(": 17,
                        ")": 18,
                        n: 19,
                        NUMBER: 20,
                        $accept: 0,
                        $end: 1
                    },
                    terminals_: {
                        2: "error",
                        5: "EOF",
                        6: "?",
                        7: ":",
                        8: "||",
                        9: "&&",
                        10: "<",
                        11: "<=",
                        12: ">",
                        13: ">=",
                        14: "!=",
                        15: "==",
                        16: "%",
                        17: "(",
                        18: ")",
                        19: "n",
                        20: "NUMBER"
                    },
                    productions_: [0, [3, 2],
                        [4, 5],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 3],
                        [4, 1],
                        [4, 1]
                    ],
                    performAction: function(e, t, r, n, i, o, a) {
                        var s = o.length - 1;
                        switch (i) {
                            case 1:
                                return {
                                    type: "GROUP",
                                    expr: o[s - 1]
                                };
                            case 2:
                                this.$ = {
                                    type: "TERNARY",
                                    expr: o[s - 4],
                                    truthy: o[s - 2],
                                    falsey: o[s]
                                };
                                break;
                            case 3:
                                this.$ = {
                                    type: "OR",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 4:
                                this.$ = {
                                    type: "AND",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 5:
                                this.$ = {
                                    type: "LT",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 6:
                                this.$ = {
                                    type: "LTE",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 7:
                                this.$ = {
                                    type: "GT",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 8:
                                this.$ = {
                                    type: "GTE",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 9:
                                this.$ = {
                                    type: "NEQ",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 10:
                                this.$ = {
                                    type: "EQ",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 11:
                                this.$ = {
                                    type: "MOD",
                                    left: o[s - 2],
                                    right: o[s]
                                };
                                break;
                            case 12:
                                this.$ = {
                                    type: "GROUP",
                                    expr: o[s - 1]
                                };
                                break;
                            case 13:
                                this.$ = {
                                    type: "VAR"
                                };
                                break;
                            case 14:
                                this.$ = {
                                    type: "NUM",
                                    val: Number(e)
                                }
                        }
                    },
                    table: [{
                        3: 1,
                        4: 2,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        1: [3]
                    }, {
                        5: [1, 6],
                        6: [1, 7],
                        8: [1, 8],
                        9: [1, 9],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16]
                    }, {
                        4: 17,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        5: [2, 13],
                        6: [2, 13],
                        7: [2, 13],
                        8: [2, 13],
                        9: [2, 13],
                        10: [2, 13],
                        11: [2, 13],
                        12: [2, 13],
                        13: [2, 13],
                        14: [2, 13],
                        15: [2, 13],
                        16: [2, 13],
                        18: [2, 13]
                    }, {
                        5: [2, 14],
                        6: [2, 14],
                        7: [2, 14],
                        8: [2, 14],
                        9: [2, 14],
                        10: [2, 14],
                        11: [2, 14],
                        12: [2, 14],
                        13: [2, 14],
                        14: [2, 14],
                        15: [2, 14],
                        16: [2, 14],
                        18: [2, 14]
                    }, {
                        1: [2, 1]
                    }, {
                        4: 18,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 19,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 20,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 21,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 22,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 23,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 24,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 25,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 26,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        4: 27,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        6: [1, 7],
                        8: [1, 8],
                        9: [1, 9],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16],
                        18: [1, 28]
                    }, {
                        6: [1, 7],
                        7: [1, 29],
                        8: [1, 8],
                        9: [1, 9],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16]
                    }, {
                        5: [2, 3],
                        6: [2, 3],
                        7: [2, 3],
                        8: [2, 3],
                        9: [1, 9],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16],
                        18: [2, 3]
                    }, {
                        5: [2, 4],
                        6: [2, 4],
                        7: [2, 4],
                        8: [2, 4],
                        9: [2, 4],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16],
                        18: [2, 4]
                    }, {
                        5: [2, 5],
                        6: [2, 5],
                        7: [2, 5],
                        8: [2, 5],
                        9: [2, 5],
                        10: [2, 5],
                        11: [2, 5],
                        12: [2, 5],
                        13: [2, 5],
                        14: [2, 5],
                        15: [2, 5],
                        16: [1, 16],
                        18: [2, 5]
                    }, {
                        5: [2, 6],
                        6: [2, 6],
                        7: [2, 6],
                        8: [2, 6],
                        9: [2, 6],
                        10: [2, 6],
                        11: [2, 6],
                        12: [2, 6],
                        13: [2, 6],
                        14: [2, 6],
                        15: [2, 6],
                        16: [1, 16],
                        18: [2, 6]
                    }, {
                        5: [2, 7],
                        6: [2, 7],
                        7: [2, 7],
                        8: [2, 7],
                        9: [2, 7],
                        10: [2, 7],
                        11: [2, 7],
                        12: [2, 7],
                        13: [2, 7],
                        14: [2, 7],
                        15: [2, 7],
                        16: [1, 16],
                        18: [2, 7]
                    }, {
                        5: [2, 8],
                        6: [2, 8],
                        7: [2, 8],
                        8: [2, 8],
                        9: [2, 8],
                        10: [2, 8],
                        11: [2, 8],
                        12: [2, 8],
                        13: [2, 8],
                        14: [2, 8],
                        15: [2, 8],
                        16: [1, 16],
                        18: [2, 8]
                    }, {
                        5: [2, 9],
                        6: [2, 9],
                        7: [2, 9],
                        8: [2, 9],
                        9: [2, 9],
                        10: [2, 9],
                        11: [2, 9],
                        12: [2, 9],
                        13: [2, 9],
                        14: [2, 9],
                        15: [2, 9],
                        16: [1, 16],
                        18: [2, 9]
                    }, {
                        5: [2, 10],
                        6: [2, 10],
                        7: [2, 10],
                        8: [2, 10],
                        9: [2, 10],
                        10: [2, 10],
                        11: [2, 10],
                        12: [2, 10],
                        13: [2, 10],
                        14: [2, 10],
                        15: [2, 10],
                        16: [1, 16],
                        18: [2, 10]
                    }, {
                        5: [2, 11],
                        6: [2, 11],
                        7: [2, 11],
                        8: [2, 11],
                        9: [2, 11],
                        10: [2, 11],
                        11: [2, 11],
                        12: [2, 11],
                        13: [2, 11],
                        14: [2, 11],
                        15: [2, 11],
                        16: [2, 11],
                        18: [2, 11]
                    }, {
                        5: [2, 12],
                        6: [2, 12],
                        7: [2, 12],
                        8: [2, 12],
                        9: [2, 12],
                        10: [2, 12],
                        11: [2, 12],
                        12: [2, 12],
                        13: [2, 12],
                        14: [2, 12],
                        15: [2, 12],
                        16: [2, 12],
                        18: [2, 12]
                    }, {
                        4: 30,
                        17: [1, 3],
                        19: [1, 4],
                        20: [1, 5]
                    }, {
                        5: [2, 2],
                        6: [1, 7],
                        7: [2, 2],
                        8: [1, 8],
                        9: [1, 9],
                        10: [1, 10],
                        11: [1, 11],
                        12: [1, 12],
                        13: [1, 13],
                        14: [1, 14],
                        15: [1, 15],
                        16: [1, 16],
                        18: [2, 2]
                    }],
                    defaultActions: {
                        6: [2, 1]
                    },
                    parseError: function(e, t) {
                        throw new Error(e)
                    },
                    parse: function(e) {
                        var t = this,
                            r = [0],
                            n = [null],
                            i = [],
                            o = this.table,
                            a = "",
                            s = 0,
                            l = 0,
                            c = 0;
                        this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
                        var u = this.lexer.yylloc;

                        function p() {
                            var e;
                            return "number" != typeof(e = t.lexer.lex() || 1) && (e = t.symbols_[e] || e), e
                        }
                        i.push(u), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                        for (var f, d, h, m, b, g, y, v, x, S, w = {};;) {
                            if (h = r[r.length - 1], this.defaultActions[h] ? m = this.defaultActions[h] : (null == f && (f = p()), m = o[h] && o[h][f]), void 0 === m || !m.length || !m[0]) {
                                if (!c) {
                                    for (g in x = [], o[h]) this.terminals_[g] && g > 2 && x.push("'" + this.terminals_[g] + "'");
                                    var E = "";
                                    E = this.lexer.showPosition ? "Parse error on line " + (s + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + x.join(", ") + ", got '" + this.terminals_[f] + "'" : "Parse error on line " + (s + 1) + ": Unexpected " + (1 == f ? "end of input" : "'" + (this.terminals_[f] || f) + "'"), this.parseError(E, {
                                        text: this.lexer.match,
                                        token: this.terminals_[f] || f,
                                        line: this.lexer.yylineno,
                                        loc: u,
                                        expected: x
                                    })
                                }
                                if (3 == c) {
                                    if (1 == f) throw new Error(E || "Parsing halted.");
                                    l = this.lexer.yyleng, a = this.lexer.yytext, s = this.lexer.yylineno, u = this.lexer.yylloc, f = p()
                                }
                                for (; !(2..toString() in o[h]);) {
                                    if (0 == h) throw new Error(E || "Parsing halted.");
                                    S = 1, r.length = r.length - 2 * S, n.length = n.length - S, i.length = i.length - S, h = r[r.length - 1]
                                }
                                d = f, f = 2, m = o[h = r[r.length - 1]] && o[h][2], c = 3
                            }
                            if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + h + ", token: " + f);
                            switch (m[0]) {
                                case 1:
                                    r.push(f), n.push(this.lexer.yytext), i.push(this.lexer.yylloc), r.push(m[1]), f = null, d ? (f = d, d = null) : (l = this.lexer.yyleng, a = this.lexer.yytext, s = this.lexer.yylineno, u = this.lexer.yylloc, c > 0 && c--);
                                    break;
                                case 2:
                                    if (y = this.productions_[m[1]][1], w.$ = n[n.length - y], w._$ = {
                                            first_line: i[i.length - (y || 1)].first_line,
                                            last_line: i[i.length - 1].last_line,
                                            first_column: i[i.length - (y || 1)].first_column,
                                            last_column: i[i.length - 1].last_column
                                        }, void 0 !== (b = this.performAction.call(w, a, l, s, this.yy, m[1], n, i))) return b;
                                    y && (r = r.slice(0, -1 * y * 2), n = n.slice(0, -1 * y), i = i.slice(0, -1 * y)), r.push(this.productions_[m[1]][0]), n.push(w.$), i.push(w._$), v = o[r[r.length - 2]][r[r.length - 1]], r.push(v);
                                    break;
                                case 3:
                                    return !0
                            }
                        }
                        return !0
                    }
                }, m = function() {
                    var e = {
                        EOF: 1,
                        parseError: function(e, t) {
                            if (!this.yy.parseError) throw new Error(e);
                            this.yy.parseError(e, t)
                        },
                        setInput: function(e) {
                            return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                first_line: 1,
                                first_column: 0,
                                last_line: 1,
                                last_column: 0
                            }, this
                        },
                        input: function() {
                            var e = this._input[0];
                            return this.yytext += e, this.yyleng++, this.match += e, this.matched += e, e.match(/\n/) && this.yylineno++, this._input = this._input.slice(1), e
                        },
                        unput: function(e) {
                            return this._input = e + this._input, this
                        },
                        more: function() {
                            return this._more = !0, this
                        },
                        pastInput: function() {
                            var e = this.matched.substr(0, this.matched.length - this.match.length);
                            return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                        },
                        upcomingInput: function() {
                            var e = this.match;
                            return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                        },
                        showPosition: function() {
                            var e = this.pastInput(),
                                t = new Array(e.length + 1).join("-");
                            return e + this.upcomingInput() + "\n" + t + "^"
                        },
                        next: function() {
                            if (this.done) return this.EOF;
                            var e, t;
                            this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
                            for (var r = this._currentRules(), n = 0; n < r.length; n++)
                                if (e = this._input.match(this.rules[r[n]])) return (t = e[0].match(/\n.*/g)) && (this.yylineno += t.length), this.yylloc = {
                                    first_line: this.yylloc.last_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.last_column,
                                    last_column: t ? t[t.length - 1].length - 1 : this.yylloc.last_column + e[0].length
                                }, this.yytext += e[0], this.match += e[0], this.matches = e, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(e[0].length), this.matched += e[0], this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]) || void 0;
                            if ("" === this._input) return this.EOF;
                            this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                text: "",
                                token: null,
                                line: this.yylineno
                            })
                        },
                        lex: function() {
                            var e = this.next();
                            return void 0 !== e ? e : this.lex()
                        },
                        begin: function(e) {
                            this.conditionStack.push(e)
                        },
                        popState: function() {
                            return this.conditionStack.pop()
                        },
                        _currentRules: function() {
                            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                        },
                        topState: function() {
                            return this.conditionStack[this.conditionStack.length - 2]
                        },
                        pushState: function(e) {
                            this.begin(e)
                        },
                        performAction: function(e, t, r, n) {
                            switch (r) {
                                case 0:
                                    break;
                                case 1:
                                    return 20;
                                case 2:
                                    return 19;
                                case 3:
                                    return 8;
                                case 4:
                                    return 9;
                                case 5:
                                    return 6;
                                case 6:
                                    return 7;
                                case 7:
                                    return 11;
                                case 8:
                                    return 13;
                                case 9:
                                    return 10;
                                case 10:
                                    return 12;
                                case 11:
                                    return 14;
                                case 12:
                                    return 15;
                                case 13:
                                    return 16;
                                case 14:
                                    return 17;
                                case 15:
                                    return 18;
                                case 16:
                                    return 5;
                                case 17:
                                    return "INVALID"
                            }
                        },
                        rules: [/^\s+/, /^[0-9]+(\.[0-9]+)?\b/, /^n\b/, /^\|\|/, /^&&/, /^\?/, /^:/, /^<=/, /^>=/, /^</, /^>/, /^!=/, /^==/, /^%/, /^\(/, /^\)/, /^$/, /^./],
                        conditions: {
                            INITIAL: {
                                rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                                inclusive: !0
                            }
                        }
                    };
                    return e
                }(), h.lexer = m, h), e.exports && (t = e.exports = p), t.Jed = p
            }()
        },
        3103: function(e) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var t = Object.getOwnPropertySymbols,
                r = Object.prototype.hasOwnProperty,
                n = Object.prototype.propertyIsEnumerable;

            function i(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                            return t[e]
                        })).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (e) {
                    return !1
                }
            }() ? Object.assign : function(e, o) {
                for (var a, s, l = i(e), c = 1; c < arguments.length; c++) {
                    for (var u in a = Object(arguments[c])) r.call(a, u) && (l[u] = a[u]);
                    if (t) {
                        s = t(a);
                        for (var p = 0; p < s.length; p++) n.call(a, s[p]) && (l[s[p]] = a[s[p]])
                    }
                }
                return l
            }
        },
        7654: function(e, t, r) {
            var n;

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            /*!
             * Platform.js v1.3.6
             * Copyright 2014-2020 Benjamin Tan
             * Copyright 2011-2013 John-David Dalton
             * Available under MIT license
             */
            e = r.nmd(e),
                function() {
                    "use strict";
                    var o = {
                            function: !0,
                            object: !0
                        },
                        a = o["undefined" == typeof window ? "undefined" : i(window)] && window || this,
                        s = o[i(t)] && t,
                        l = o[i(e)] && e && !e.nodeType && e,
                        c = s && l && "object" == (void 0 === r.g ? "undefined" : i(r.g)) && r.g;
                    !c || c.global !== c && c.window !== c && c.self !== c || (a = c);
                    var u = Math.pow(2, 53) - 1,
                        p = /\bOpera/,
                        f = Object.prototype,
                        d = f.hasOwnProperty,
                        h = f.toString;

                    function m(e) {
                        return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                    }

                    function b(e) {
                        return e = S(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : m(e)
                    }

                    function g(e, t) {
                        for (var r in e) d.call(e, r) && t(e[r], r, e)
                    }

                    function y(e) {
                        return null == e ? m(e) : h.call(e).slice(8, -1)
                    }

                    function v(e) {
                        return String(e).replace(/([ -])(?!$)/g, "$1?")
                    }

                    function x(e, t) {
                        var r = null;
                        return function(e, t) {
                            var r = -1,
                                n = e ? e.length : 0;
                            if ("number" == typeof n && n > -1 && n <= u)
                                for (; ++r < n;) t(e[r], r, e);
                            else g(e, t)
                        }(e, (function(n, i) {
                            r = t(r, n, i, e)
                        })), r
                    }

                    function S(e) {
                        return String(e).replace(/^ +| +$/g, "")
                    }
                    var w = function e(t) {
                        var r = a,
                            n = t && "object" == i(t) && "String" != y(t);
                        n && (r = t, t = null);
                        var o = r.navigator || {},
                            s = o.userAgent || "";
                        t || (t = s);
                        var l, c, u, f, d, m = n ? !!o.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(h.toString()),
                            w = "Object",
                            E = n ? w : "ScriptBridgingProxyObject",
                            k = n ? w : "Environment",
                            O = n && r.java ? "JavaPackage" : y(r.java),
                            _ = n ? w : "RuntimeObject",
                            T = /\bJava/.test(O) && r.java,
                            A = T && y(r.environment) == k,
                            P = T ? "a" : "α",
                            M = T ? "b" : "β",
                            R = r.document || {},
                            F = r.operamini || r.opera,
                            N = p.test(N = n && F ? F["[[Class]]"] : y(F)) ? N : F = null,
                            C = t,
                            I = [],
                            L = null,
                            j = t == s,
                            D = j && F && "function" == typeof F.version && F.version(),
                            B = x([{
                                label: "EdgeHTML",
                                pattern: "Edge"
                            }, "Trident", {
                                label: "WebKit",
                                pattern: "AppleWebKit"
                            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, r) {
                                return e || RegExp("\\b" + (r.pattern || v(r)) + "\\b", "i").exec(t) && (r.label || r)
                            })),
                            W = function(e) {
                                return x(e, (function(e, r) {
                                    return e || RegExp("\\b" + (r.pattern || v(r)) + "\\b", "i").exec(t) && (r.label || r)
                                }))
                            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                                label: "Microsoft Edge",
                                pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                                label: "Samsung Internet",
                                pattern: "SamsungBrowser"
                            }, "SeaMonkey", {
                                label: "Silk",
                                pattern: "(?:Cloud9|Silk-Accelerated)"
                            }, "Sleipnir", "SlimBrowser", {
                                label: "SRWare Iron",
                                pattern: "Iron"
                            }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                                label: "Yandex Browser",
                                pattern: "YaBrowser"
                            }, {
                                label: "UC Browser",
                                pattern: "UCBrowser"
                            }, "Opera Mini", {
                                label: "Opera Mini",
                                pattern: "OPiOS"
                            }, "Opera", {
                                label: "Opera",
                                pattern: "OPR"
                            }, "Chromium", "Chrome", {
                                label: "Chrome",
                                pattern: "(?:HeadlessChrome)"
                            }, {
                                label: "Chrome Mobile",
                                pattern: "(?:CriOS|CrMo)"
                            }, {
                                label: "Firefox",
                                pattern: "(?:Firefox|Minefield)"
                            }, {
                                label: "Firefox for iOS",
                                pattern: "FxiOS"
                            }, {
                                label: "IE",
                                pattern: "IEMobile"
                            }, {
                                label: "IE",
                                pattern: "MSIE"
                            }, "Safari"]),
                            $ = z([{
                                label: "BlackBerry",
                                pattern: "BB10"
                            }, "BlackBerry", {
                                label: "Galaxy S",
                                pattern: "GT-I9000"
                            }, {
                                label: "Galaxy S2",
                                pattern: "GT-I9100"
                            }, {
                                label: "Galaxy S3",
                                pattern: "GT-I9300"
                            }, {
                                label: "Galaxy S4",
                                pattern: "GT-I9500"
                            }, {
                                label: "Galaxy S5",
                                pattern: "SM-G900"
                            }, {
                                label: "Galaxy S6",
                                pattern: "SM-G920"
                            }, {
                                label: "Galaxy S6 Edge",
                                pattern: "SM-G925"
                            }, {
                                label: "Galaxy S7",
                                pattern: "SM-G930"
                            }, {
                                label: "Galaxy S7 Edge",
                                pattern: "SM-G935"
                            }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                                label: "Kindle Fire",
                                pattern: "(?:Cloud9|Silk-Accelerated)"
                            }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                                label: "Wii U",
                                pattern: "WiiU"
                            }, "Wii", "Xbox One", {
                                label: "Xbox 360",
                                pattern: "Xbox"
                            }, "Xoom"]),
                            U = function(e) {
                                return x(e, (function(e, r, n) {
                                    return e || (r[$] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec($)] || RegExp("\\b" + v(n) + "(?:\\b|\\w*\\d)", "i").exec(t)) && n
                                }))
                            }({
                                Apple: {
                                    iPad: 1,
                                    iPhone: 1,
                                    iPod: 1
                                },
                                Alcatel: {},
                                Archos: {},
                                Amazon: {
                                    Kindle: 1,
                                    "Kindle Fire": 1
                                },
                                Asus: {
                                    Transformer: 1
                                },
                                "Barnes & Noble": {
                                    Nook: 1
                                },
                                BlackBerry: {
                                    PlayBook: 1
                                },
                                Google: {
                                    "Google TV": 1,
                                    Nexus: 1
                                },
                                HP: {
                                    TouchPad: 1
                                },
                                HTC: {},
                                Huawei: {},
                                Lenovo: {},
                                LG: {},
                                Microsoft: {
                                    Xbox: 1,
                                    "Xbox One": 1
                                },
                                Motorola: {
                                    Xoom: 1
                                },
                                Nintendo: {
                                    "Wii U": 1,
                                    Wii: 1
                                },
                                Nokia: {
                                    Lumia: 1
                                },
                                Oppo: {},
                                Samsung: {
                                    "Galaxy S": 1,
                                    "Galaxy S2": 1,
                                    "Galaxy S3": 1,
                                    "Galaxy S4": 1
                                },
                                Sony: {
                                    PlayStation: 1,
                                    "PlayStation Vita": 1
                                },
                                Xiaomi: {
                                    Mi: 1,
                                    Redmi: 1
                                }
                            }),
                            G = function(e) {
                                return x(e, (function(e, r) {
                                    var n = r.pattern || v(r);
                                    return !e && (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, r) {
                                        var n = {
                                            "10.0": "10",
                                            6.4: "10 Technical Preview",
                                            6.3: "8.1",
                                            6.2: "8",
                                            6.1: "Server 2008 R2 / 7",
                                            "6.0": "Server 2008 / Vista",
                                            5.2: "Server 2003 / XP 64-bit",
                                            5.1: "XP",
                                            5.01: "2000 SP1",
                                            "5.0": "2000",
                                            "4.0": "NT",
                                            "4.90": "ME"
                                        };
                                        return t && r && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (n = n[/[\d.]+$/.exec(e)]) && (e = "Windows " + n), e = String(e), t && r && (e = e.replace(RegExp(t, "i"), r)), b(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                                    }(e, n, r.label || r)), e
                                }))
                            }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                                label: "Chrome OS",
                                pattern: "CrOS"
                            }, "Debian", {
                                label: "DragonFly BSD",
                                pattern: "DragonFly"
                            }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                        function z(e) {
                            return x(e, (function(e, r) {
                                var n = r.pattern || v(r);
                                return !e && (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(r.label && !RegExp(n, "i").test(r.label) ? r.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), r = r.label || r, e = b(e[0].replace(RegExp(n, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                            }))
                        }

                        function H(e) {
                            return x(e, (function(e, r) {
                                return e || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                            }))
                        }
                        if (B && (B = [B]), /\bAndroid\b/.test(G) && !$ && (l = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && ($ = S(l[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), U && !$ ? $ = z([U]) : U && $ && ($ = $.replace(RegExp("^(" + v(U) + ")[-_.\\s]", "i"), U + " ").replace(RegExp("^(" + v(U) + ")[-_.]?(\\w)", "i"), U + " $2")), (l = /\bGoogle TV\b/.exec($)) && ($ = l[0]), /\bSimulator\b/i.test(t) && ($ = ($ ? $ + " " : "") + "Simulator"), "Opera Mini" == W && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == W && /\blike iPhone OS\b/.test(t) ? (U = (l = e(t.replace(/like iPhone OS/, ""))).manufacturer, $ = l.product) : /^iP/.test($) ? (W || (W = "Safari"), G = "iOS" + ((l = / OS ([\d_]+)/i.exec(t)) ? " " + l[1].replace(/_/g, ".") : "")) : "Konqueror" == W && /^Linux\b/i.test(G) ? G = "Kubuntu" : U && "Google" != U && (/Chrome/.test(W) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test($)) || /\bAndroid\b/.test(G) && /^Chrome/.test(W) && /\bVersion\//i.test(t) ? (W = "Android Browser", G = /\bAndroid\b/.test(G) ? G : "Android") : "Silk" == W ? (/\bMobi/i.test(t) || (G = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "UC Browser" == W && /\bUCWEB\b/.test(t) ? I.push("speed mode") : "PaleMoon" == W && (l = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + l[1]) : "Firefox" == W && (l = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (G || (G = "Firefox OS"), $ || ($ = l[1])) : !W || (l = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(W)) ? (W && !$ && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(l + "/") + 8)) && (W = null), (l = $ || U || G) && ($ || U || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(G)) && (W = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(G) ? G : l) + " Browser")) : "Electron" == W && (l = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + l), D || (D = H(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", v(W), "(?:Firefox|Minefield|NetFront)"])), (l = ("iCab" == B && parseFloat(D) > 3 ? "WebKit" : /\bOpera\b/.test(W) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(t) && ("Mac OS" == G ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(W) && "NetFront") && (B = [l]), "IE" == W && (l = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (W += " Mobile", G = "Windows Phone " + (/\+$/.test(l) ? l : l + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (W = "IE Mobile", G = "Windows Phone 8.x", I.unshift("desktop mode"), D || (D = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != W && "Trident" == B && (l = /\brv:([\d.]+)/.exec(t)) && (W && I.push("identifying as " + W + (D ? " " + D : "")), W = "IE", D = l[1]), j) {
                            if (f = "global", d = null != (u = r) ? i(u[f]) : "number", /^(?:boolean|number|string|undefined)$/.test(d) || "object" == d && !u[f]) y(l = r.runtime) == E ? (W = "Adobe AIR", G = l.flash.system.Capabilities.os) : y(l = r.phantom) == _ ? (W = "PhantomJS", D = (l = l.version || null) && l.major + "." + l.minor + "." + l.patch) : "number" == typeof R.documentMode && (l = /\bTrident\/(\d+)/i.exec(t)) ? (D = [D, R.documentMode], (l = +l[1] + 4) != D[1] && (I.push("IE " + D[1] + " mode"), B && (B[1] = ""), D[1] = l), D = "IE" == W ? String(D[1].toFixed(1)) : D[0]) : "number" == typeof R.documentMode && /^(?:Chrome|Firefox)\b/.test(W) && (I.push("masking as " + W + " " + D), W = "IE", D = "11.0", B = ["Trident"], G = "Windows");
                            else if (T && (C = (l = T.lang.System).getProperty("os.arch"), G = G || l.getProperty("os.name") + " " + l.getProperty("os.version")), A) {
                                try {
                                    D = r.require("ringo/engine").version.join("."), W = "RingoJS"
                                } catch (e) {
                                    (l = r.system) && l.global.system == r.system && (W = "Narwhal", G || (G = l[0].os || null))
                                }
                                W || (W = "Rhino")
                            } else "object" == i(r.process) && !r.process.browser && (l = r.process) && ("object" == i(l.versions) && ("string" == typeof l.versions.electron ? (I.push("Node " + l.versions.node), W = "Electron", D = l.versions.electron) : "string" == typeof l.versions.nw && (I.push("Chromium " + D, "Node " + l.versions.node), W = "NW.js", D = l.versions.nw)), W || (W = "Node.js", C = l.arch, G = l.platform, D = (D = /[\d.]+/.exec(l.version)) ? D[0] : null));
                            G = G && b(G)
                        }
                        if (D && (l = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(D) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (j && o.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (L = /b/i.test(l) ? "beta" : "alpha", D = D.replace(RegExp(l + "\\+?$"), "") + ("beta" == L ? M : P) + (/\d+\+?/.exec(l) || "")), "Fennec" == W || "Firefox" == W && /\b(?:Android|Firefox OS|KaiOS)\b/.test(G)) W = "Firefox Mobile";
                        else if ("Maxthon" == W && D) D = D.replace(/\.[\d.]+/, ".x");
                        else if (/\bXbox\b/i.test($)) "Xbox 360" == $ && (G = null), "Xbox 360" == $ && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
                        else if (!/^(?:Chrome|IE|Opera)$/.test(W) && (!W || $ || /Browser|Mobi/.test(W)) || "Windows CE" != G && !/Mobi/i.test(t))
                            if ("IE" == W && j) try {
                                null === r.external && I.unshift("platform preview")
                            } catch (e) {
                                I.unshift("embedded")
                            } else(/\bBlackBerry\b/.test($) || /\bBB10\b/.test(t)) && (l = (RegExp($.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || D) ? (G = ((l = [l, /BB10/.test(t)])[1] ? ($ = null, U = "BlackBerry") : "Device Software") + " " + l[0], D = null) : this != g && "Wii" != $ && (j && F || /Opera/.test(W) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == W && /\bOS X (?:\d+\.){2,}/.test(G) || "IE" == W && (G && !/^Win/.test(G) && D > 5.5 || /\bWindows XP\b/.test(G) && D > 8 || 8 == D && !/\bTrident\b/.test(t))) && !p.test(l = e.call(g, t.replace(p, "") + ";")) && l.name && (l = "ing as " + l.name + ((l = l.version) ? " " + l : ""), p.test(W) ? (/\bIE\b/.test(l) && "Mac OS" == G && (G = null), l = "identify" + l) : (l = "mask" + l, W = N ? b(N.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(l) && (G = null), j || (D = null)), B = ["Presto"], I.push(l));
                            else W += " Mobile";
                        (l = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (l = [parseFloat(l.replace(/\.(\d)$/, ".0$1")), l], "Safari" == W && "+" == l[1].slice(-1) ? (W = "WebKit Nightly", L = "alpha", D = l[1].slice(0, -1)) : D != l[1] && D != (l[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (D = null), l[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == l[0] && 537.36 == l[2] && parseFloat(l[1]) >= 28 && "WebKit" == B && (B = ["Blink"]), j && (m || l[1]) ? (B && (B[1] = "like Chrome"), l = l[1] || ((l = l[0]) < 530 ? 1 : l < 532 ? 2 : l < 532.05 ? 3 : l < 533 ? 4 : l < 534.03 ? 5 : l < 534.07 ? 6 : l < 534.1 ? 7 : l < 534.13 ? 8 : l < 534.16 ? 9 : l < 534.24 ? 10 : l < 534.3 ? 11 : l < 535.01 ? 12 : l < 535.02 ? "13+" : l < 535.07 ? 15 : l < 535.11 ? 16 : l < 535.19 ? 17 : l < 536.05 ? 18 : l < 536.1 ? 19 : l < 537.01 ? 20 : l < 537.11 ? "21+" : l < 537.13 ? 23 : l < 537.18 ? 24 : l < 537.24 ? 25 : l < 537.36 ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"), l = (l = l[0]) < 400 ? 1 : l < 500 ? 2 : l < 526 ? 3 : l < 533 ? 4 : l < 534 ? "4+" : l < 535 ? 5 : l < 537 ? 6 : l < 538 ? 7 : l < 601 ? 8 : l < 602 ? 9 : l < 604 ? 10 : l < 606 ? 11 : l < 608 ? 12 : "12"), B && (B[1] += " " + (l += "number" == typeof l ? ".x" : /[.+]/.test(l) ? "" : "+")), "Safari" == W && (!D || parseInt(D) > 45) ? D = l : "Chrome" == W && /\bHeadlessChrome/i.test(t) && I.unshift("headless")), "Opera" == W && (l = /\bzbov|zvav$/.exec(G)) ? (W += " ", I.unshift("desktop mode"), "zvav" == l ? (W += "Mini", D = null) : W += "Mobile", G = G.replace(RegExp(" *" + l + "$"), "")) : "Safari" == W && /\bChrome\b/.exec(B && B[1]) ? (I.unshift("desktop mode"), W = "Chrome Mobile", D = null, /\bOS X\b/.test(G) ? (U = "Apple", G = "iOS 4.3+") : G = null) : /\bSRWare Iron\b/.test(W) && !D && (D = H("Chrome")), D && 0 == D.indexOf(l = /[\d.]+$/.exec(G)) && t.indexOf("/" + l + "-") > -1 && (G = S(G.replace(l, ""))), G && -1 != G.indexOf(W) && !RegExp(W + " OS").test(G) && (G = G.replace(RegExp(" *" + v(W) + " *"), "")), B && !/\b(?:Avant|Nook)\b/.test(W) && (/Browser|Lunascape|Maxthon/.test(W) || "Safari" != W && /^iOS/.test(G) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(W) && B[1]) && (l = B[B.length - 1]) && I.push(l), I.length && (I = ["(" + I.join("; ") + ")"]), U && $ && $.indexOf(U) < 0 && I.push("on " + U), $ && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + $), G && (l = / ([\d.+]+)$/.exec(G), c = l && "/" == G.charAt(G.length - l[0].length - 1), G = {
                            architecture: 32,
                            family: l && !c ? G.replace(l[0], "") : G,
                            version: l ? l[1] : null,
                            toString: function() {
                                var e = this.version;
                                return this.family + (e && !c ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                            }
                        }), (l = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(C)) && !/\bi686\b/i.test(C) ? (G && (G.architecture = 64, G.family = G.family.replace(RegExp(" *" + l), "")), W && (/\bWOW64\b/i.test(t) || j && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : G && /^OS X/.test(G.family) && "Chrome" == W && parseFloat(D) >= 39 && (G.architecture = 64), t || (t = null);
                        var X = {};
                        return X.description = t, X.layout = B && B[0], X.manufacturer = U, X.name = W, X.prerelease = L, X.product = $, X.ua = t, X.version = W && D, X.os = G || {
                            architecture: null,
                            family: null,
                            version: null,
                            toString: function() {
                                return "null"
                            }
                        }, X.parse = e, X.toString = function() {
                            return this.description || ""
                        }, X.version && I.unshift(D), X.name && I.unshift(W), G && W && (G != String(G).split(" ")[0] || G != W.split(" ")[0] && !$) && I.push($ ? "(" + G + ")" : "on " + G), I.length && (X.description = I.join(" ")), X
                    }();
                    "object" == i(r.amdO) && r.amdO ? (a.platform = w, void 0 === (n = function() {
                        return w
                    }.call(t, r, t, e)) || (e.exports = n)) : s && l ? g(w, (function(e, t) {
                        s[t] = e
                    })) : a.platform = w
                }.call(this)
        },
        3731: function(e, t, r) {
            "use strict";
            var n = this && this.__rest || function(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]])
                }
                return r
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(8709);
            t.default = function(e) {
                var t = e.src,
                    r = e.checkForExisting,
                    a = void 0 !== r && r,
                    s = n(e, ["src", "checkForExisting"]),
                    l = i.useState(Boolean(t)),
                    c = l[0],
                    u = l[1],
                    p = i.useState(null),
                    f = p[0],
                    d = p[1];
                return i.useEffect((function() {
                    if (o && t) {
                        if (a)
                            if (document.querySelectorAll('script[src="' + t + '"]').length > 0) return void u(!1);
                        var e = document.createElement("script");
                        e.setAttribute("src", t), Object.keys(s).forEach((function(t) {
                            void 0 === e[t] ? e.setAttribute(t, s[t]) : e[t] = s[t]
                        }));
                        var r = function() {
                                u(!1)
                            },
                            n = function(e) {
                                d(e)
                            };
                        return e.addEventListener("load", r), e.addEventListener("error", n), document.body.appendChild(e),
                            function() {
                                e.removeEventListener("load", r), e.removeEventListener("error", n)
                            }
                    }
                }), [t]), [c, f]
            };
            var o = "undefined" != typeof window && void 0 !== window.document
        }
    }
]);
//# sourceMappingURL=377.chunk.1d6128a8cc45d6f94517.js.map