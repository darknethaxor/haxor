if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    });
    f["default"] = a
}), 66);
__d("isContentEditable", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a;
        while (a instanceof HTMLElement) {
            if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
            a = a.parentElement
        }
        return !1
    }
    f["default"] = a
}), 66);
__d("isElementInteractive", ["isContentEditable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
        i = new Set(["button", "checkbox", "radio", "submit"]);

    function a(a) {
        if (!a instanceof HTMLElement) return !1;
        var b = c("isContentEditable")(a),
            d = h.has(a.nodeName);
        a = a instanceof HTMLInputElement && i.has(a.type);
        return (b || d) && !a
    }
    g["default"] = a
}), 98);
__d("getOrCreateDOMID", ["uniqueID"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a.id || (a.id = c("uniqueID")());
        return a.id
    }
    g["default"] = a
}), 98);
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = !1;

    function j(a, b) {
        if (h[a]) {
            b = h[a].indexOf(b);
            b >= 0 && h[a].splice(b, 1);
            h[a].length === 0 && delete h[a]
        }
    }

    function k(a) {
        var b = a.getTarget();
        if (h[b.id] && h[b.id].length > 0) {
            var c = a.type === "focusin" || a.type === "focus";
            h[b.id].forEach(function(a) {
                a(c)
            })
        }
    }

    function l() {
        if (i) return;
        c("Event").listen(document.documentElement, "focusout", k);
        c("Event").listen(document.documentElement, "focusin", k);
        i = !0
    }

    function a(a, b) {
        l();
        var e = c("getOrCreateDOMID")(a);
        h[e] || (h[e] = []);
        h[e].push(b);
        var f = !1;

        function g() {
            f || (j(e, b), i && (i.remove(), i = null), f = !0)
        }
        var i = d("Run").onLeave(function() {
            c("ge")(e) || g()
        });
        return {
            remove: function() {
                g()
            }
        }
    }
    g.listen = a
}), 98);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = null;

    function j() {
        i || (i = c("Event").listen(window, "blur", function() {
            h = null, k()
        }))
    }

    function k() {
        i && (i.remove(), i = null)
    }

    function a(a) {
        h = c("Event").getKeyCode(a), j()
    }

    function b() {
        h = null, k()
    }
    if (d("ExecutionEnvironment").canUseDOM) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", b, !0);
            else if (d.attachEvent) {
            d = d.attachEvent;
            d("onkeydown", a);
            d("onkeyup", b)
        }
    }

    function e() {
        return !!h
    }

    function f() {
        return h
    }
    g.isKeyDown = e;
    g.getKeyDownCode = f
}), 98);
__d("getElementText", ["isElementNode", "isTextNode"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function a(a) {
        if (c("isTextNode")(a)) return a.data;
        else if (c("isElementNode")(a)) {
            if (h === null) {
                var b = document.createElement("div");
                h = b.textContent != null ? "textContent" : "innerText"
            }
            return a[h]
        } else return ""
    }
    g["default"] = a
}), 98);
__d("isStringNullOrEmpty", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a == null || a === ""
    }
    f["default"] = a
}), 66);
__d("tooltipPropsFor", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (!a) return {};
        a = {
            "data-tooltip-content": a,
            "data-hover": "tooltip"
        };
        b && (a["data-tooltip-position"] = b);
        c && (a["data-tooltip-alignh"] = c);
        return a
    }
    f["default"] = a
}), 66);
__d("TooltipData", ["DOM", "DataStore", "FBLogger", "URI", "getElementText", "ifRequired", "isStringNullOrEmpty", "isTextNode", "killswitch", "tooltipPropsFor"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        var c = a.getAttribute("data-tooltip-delay");
        c = c ? parseInt(c, 10) || 1e3 : 0;
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) return babelHelpers["extends"]({
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction")
        }, b("DataStore").get(a, "tooltip"));
        else {
            var d;
            d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
            var e = d.content;
            d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
            var f = a.getAttribute("data-tooltip-content");
            !b("isStringNullOrEmpty")(e) && !b("isStringNullOrEmpty")(f) && b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore', a.getAttribute("data-tooltip-content"));
            return babelHelpers["extends"]({
                className: a.getAttribute("data-tooltip-root-class"),
                delay: c,
                position: a.getAttribute("data-tooltip-position") || "above",
                alignH: a.getAttribute("data-tooltip-alignh") || "left",
                offsetY: a.getAttribute("data-tooltip-offsety") || 0,
                suppress: !1,
                overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
                persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
                textDirection: a.getAttribute("data-tooltip-text-direction"),
                content: (a = (c = f) != null ? c : e) != null ? a : null
            }, d)
        }
    }

    function i(a, c) {
        var d = h(a);
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) b("DataStore").set(a, "tooltip", {
            content: c.content || d.content,
            position: c.position || d.position,
            alignH: c.alignH || d.alignH,
            suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
            overflowDisplay: c.overflowDisplay || d.overflowDisplay,
            persistOnClick: c.persistOnClick || d.persistOnClick
        });
        else {
            !b("isStringNullOrEmpty")(c.content) && !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) && b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid', a.getAttribute("data-tooltip-content"));
            b("DataStore").set(a, "tooltip", {
                content: c.content || ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
                position: c.position || d.position,
                alignH: c.alignH || d.alignH,
                suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
                overflowDisplay: c.overflowDisplay || d.overflowDisplay,
                persistOnClick: c.persistOnClick || d.persistOnClick
            })
        }
    }

    function j(a, b) {
        i(a, b), a.setAttribute("data-hover", "tooltip")
    }

    function k(a, b) {}
    var l = {
        remove: function(a, c) {
            c = c === void 0 ? {} : c;
            c = c.onlyCleanupDataStore;
            c = c === void 0 ? !1 : c;
            b("DataStore").remove(a, "tooltip");
            c || (a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.hide()
            }))
        },
        set: function(a, c, d, e) {
            k(a, c);
            if (c instanceof(g || (g = b("URI")))) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.fetchIfNecessary(a)
            });
            else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) {
                var f = l._store({
                    context: a,
                    content: c,
                    position: d,
                    alignH: e
                });
                typeof f.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(f.content)) : a.setAttribute("data-tooltip-content", f.content);
                l.refreshIfActive(a)
            } else a.removeAttribute("data-tooltip-content"), l._store({
                context: a,
                content: c,
                position: d,
                alignH: e
            }), l.refreshIfActive(a)
        },
        refreshIfActive: function(a) {
            b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.show(a)
            })
        },
        _store: function(a) {
            var c = a.context,
                d = a.content,
                e = a.position;
            a = a.alignH;
            k(c, d);
            b("isTextNode")(d) && (d = b("getElementText")(d));
            var f = !1;
            typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
            a = {
                alignH: a,
                content: d,
                position: e,
                suppress: f
            };
            j(c, a);
            return a
        },
        propsFor: b("tooltipPropsFor"),
        enableDisplayOnOverflow: function(a) {
            a.removeAttribute("data-tooltip-display"), j(a, {
                overflowDisplay: !0
            })
        },
        enablePersistOnClick: function(a) {
            a.removeAttribute("data-pitloot-persistOnClick"), j(a, {
                persistOnClick: !0
            })
        },
        suppress: function(a, b) {
            i(a, {
                suppress: b
            })
        },
        _get: h
    };
    e.exports = l
}), null);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        b === void 0 && (b = !1);
        if (a) {
            var e = c("ifRequired")("VirtualCursorStatus", function(a) {
                return a.isVirtualCursorTriggered()
            }, function() {
                return !1
            });
            b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a)
        }
    }

    function i(a) {
        if (a) {
            d("CSS").addClass(a, "_5f0v");
            var b = c("Event").listen(a, "blur", function() {
                a && d("CSS").removeClass(a, "_5f0v"), b.remove()
            });
            d("TooltipData").suppress(a, !0);
            k(a);
            d("TooltipData").suppress(a, !1)
        }
    }

    function b(a, b) {
        d("CSS").addClass(a, "_5f0v");
        return d("FocusEvent").listen(a, function() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return j.apply(void 0, [a, b].concat(d))
        })
    }

    function j(a, b, e) {
        d("CSS").addClass(a, "_5f0v");
        a = c("ifRequired")("FocusRing", function(a) {
            return a.usingKeyboardNavigation()
        }, function() {
            return !0
        });
        e = e && a;
        d("CSS").conditionClass(b, "_3oxt", e);
        d("CSS").conditionClass(b, "_16jm", e)
    }

    function k(a) {
        try {
            a.tabIndex = a.tabIndex, a.focus()
        } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = j
}), 98);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            NUMPAD_ADD: [43],
            NUMPAD_SUBSTRACT: [45],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            "`": [192],
            "[": [219],
            "]": [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            "-": [189],
            "=": [187],
            FORWARD_SLASH: [191]
        },
        j = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
    b = function() {
        function a() {
            var a = this;
            this.handlers = {};
            ["keyup", "keydown", "keypress"].forEach(function(b) {
                return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b))
            })
        }
        var b = a.prototype;
        b.mapKey = function(a) {
            a = a;
            if (/^[0-9]$/.test(a + "")) {
                typeof a !== "number" && (a = a.charCodeAt(0) - 48);
                return [48 + a, 96 + a]
            }
            a += "";
            var b = i[a.toUpperCase()];
            return b ? b : [a.toUpperCase().charCodeAt(0)]
        };
        b.onkeyevent = function(a, b) {
            var d = b;
            d = c("Event").$E(d);
            b = this.handlers[d.keyCode] || this.handlers[d.which];
            if (b)
                for (var e = 0; e < b.length; e++) {
                    var f = b[e].callback,
                        g = b[e].filter;
                    try {
                        if (!g || g(d, a)) {
                            g = function() {
                                var b = f(d, a),
                                    e = d.which || d.keyCode;
                                c("Bootloader").loadModules(["KeyEventTypedLogger"], function(a) {
                                    new a().setAction("key_shortcut").setKey(d.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", d.isTrusted).log()
                                }, "KeyEventController");
                                if (b === !1) return {
                                    v: c("Event").kill(d)
                                }
                            }();
                            if (typeof g === "object") return g.v
                        }
                    } catch (a) {}
                }
            return !0
        };
        b.resetHandlers = function() {
            for (var a in this.handlers)
                if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
                    var b = this.handlers[a].filter(function(a) {
                        return a.preserve()
                    });
                    b.length ? this.handlers[a] = b : delete this.handlers[a]
                }
        };
        a.getInstance = function() {
            return h || (h = new a())
        };
        a.defaultFilter = function(b, d) {
            b = c("Event").$E(b);
            return a.filterEventTypes(b, d) && a.filterEventTargets(b, d) && a.filterEventModifiers(b, d)
        };
        a.filterEventTypes = function(a, b) {
            return b === "onkeydown" ? !0 : !1
        };
        a.filterEventTargets = function(a, b) {
            b = a.getTarget();
            return !c("isElementInteractive")(b) || a.keyCode in j && (d("DOMQuery").isNodeOfType(b, ["input", "textarea"]) && b.value.length === 0 || c("isContentEditable")(b) && c("getElementText")(b).length === 0)
        };
        a.filterEventModifiers = function(a, b) {
            return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0
        };
        a.registerKeyAcrossTransitions = function(b, d, e, f) {
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            return a.registerKey(b, d, e, f, c("emptyFunction").thatReturnsTrue)
        };
        a.registerKey = function(b, e, f, g, h) {
            f === void 0 && (f = a.defaultFilter);
            g === void 0 && (g = !1);
            h === void 0 && (h = c("emptyFunction").thatReturnsFalse);
            b = b;
            var i = a.getInstance(),
                j = b == null ? [] : i.mapKey(b);
            c("isEmpty")(i.handlers) && d("Run").onLeave(i.resetHandlers.bind(i));
            var k = {};
            for (var l = 0; l < j.length; l++) {
                b = "" + j[l];
                (!i.handlers[b] || g) && (i.handlers[b] = []);
                var m = {
                    callback: e,
                    filter: f,
                    preserve: h
                };
                k[b] = m;
                i.handlers[b].push(m)
            }
            return {
                remove: function() {
                    for (var a in k) {
                        if (i.handlers[a] && i.handlers[a].length) {
                            var b = i.handlers[a].indexOf(k[a]);
                            b >= 0 && i.handlers[a].splice(b, 1)
                        }
                        delete k[a]
                    }
                }
            }
        };
        return a
    }();
    g["default"] = b
}), 98);
__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
    f["default"] = a
}), 66);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h = null;

    function a() {
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    f["default"] = a
}), 66);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
    f["default"] = a
}), 66);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return a == null ? "" : String(a)
    }

    function a(a, b) {
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return h(d.getPropertyValue(c("hyphenate")(b)));
            if (b === "display") return "none"
        }
        return a.currentStyle ? b === "float" ? h(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : h(a.currentStyle[c("camelize")(b)]) : h(a.style && a.style[c("camelize")(b)])
    }
    g["default"] = a
}), 98);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        a = o.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var j = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function k(a) {
        var b = {};
        a.replace(j, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function l(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function m(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function n(a, b, d) {
        switch (c("hyphenate")(b)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && h(0, 11849, a, b, d);
            default:
                isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
                break
        }
    }
    var o = {
        set: function(a, b, d) {
            n("Style.set", b, d);
            if (a == null) return;
            a = a.style;
            switch (b) {
                case "opacity":
                    c("getOpacityStyleName")() === "filter" ? a.filter = m(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[c("camelize")(b)] = d
                    } catch (a) {
                        throw c("err")('Style.set: "%s" argument is invalid: %s', b, d)
                    }
            }
        },
        apply: function(a, b) {
            var d;
            for (d in b) n("Style.apply", d, b[d]);
            "opacity" in b && c("getOpacityStyleName")() === "filter" && (b.filter = m(b.opacity), delete b.opacity);
            var e = k(a.style.cssText);
            for (d in b) {
                var f = b[d];
                delete b[d];
                var g = c("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                b[g] = f
            }
            Object.assign(e, b);
            a.style.cssText = l(e)
        },
        get: c("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(o.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (c("getOpacityStyleName")() === "filter") {
                var b = o.get(a, "filter");
                if (b) {
                    b = /(\d+(?:\.\d+)?)/.exec(b);
                    if (b) return parseFloat(b.pop()) / 100
                }
            }
            return o.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (c("containsNode")(document.body, a)) {
                if (o.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = o;
    g["default"] = a
}), 98);
__d("Style", ["$", "StyleCore"], (function(a, b, c, d, e, f, g) {
    a = babelHelpers["extends"]({}, c("StyleCore"), {
        get: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").get(a, b)
        },
        getFloat: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").getFloat(a, b)
        }
    });
    b = a;
    g["default"] = b
}), 98);
__d("csx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
    f["default"] = a
}), 66);
__d("BlueBar", ["csx", "CSS", "DOMQuery", "Style", "ge"], (function(a, b, c, d, e, f, g, h) {
    var i = document,
        j = {};

    function k(a) {
        return d("DOMQuery").scry(i, a)[0]
    }

    function l(a, b) {
        return j[a] ? j[a] : j[a] = k(b)
    }

    function a() {
        i = c("ge")("blueBarDOMInspector") || document, j = {}
    }

    function b() {
        var a = n();
        return !a ? !1 : d("CSS").matchesSelector(a, "._5rmj") || c("Style").isFixed(a)
    }

    function m() {
        return l("bar", "div._1s4v")
    }

    function e() {
        return l("navRoot", "div._cx4") || m()
    }

    function n() {
        return l("maybeFixedRoot", "div._26aw")
    }

    function f() {
        return l("maybeFixedRootLoggedOut", "div._1pmx")
    }

    function h() {
        return l("maybeFixedRootLogin", "div._53jh")
    }
    a();
    g.hasFixedBlueBar = b;
    g.getBar = m;
    g.getNavRoot = e;
    g.getMaybeFixedRoot = n;
    g.getLoggedOutRoot = f;
    g.getNewLoggedOutRoot = h
}), 98);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        a.setAttribute("data-ownerid", c("getOrCreateDOMID")(b))
    }

    function b(a, b) {
        b = b;
        while (b) {
            if (c("containsNode")(a, b)) return !0;
            b = h(b)
        }
        return !1
    }

    function h(a) {
        a = a;
        var b;
        while (a) {
            if (a.getAttribute && (b = a.getAttribute("data-ownerid"))) return c("ge")(b);
            a = a.parentNode
        }
        return null
    }

    function e(a, b) {
        a = a;
        var e;
        while (a && !d("CSS").hasClass(a, b)) a.getAttribute && (e = a.getAttribute("data-ownerid")) ? a = c("ge")(e) : a = a.parentNode;
        return a
    }
    g.register = a;
    g.containsIncludingLayers = b;
    g.getContext = h;
    g.parentByClass = e
}), 98);
__d("TabbableElements", ["Style"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (a.tabIndex < 0) return !1;
        if (a.tabIndex > 0 || a.tabIndex === 0 && a.getAttribute("tabIndex") !== null) return !0;
        var b = a;
        switch (a.tagName) {
            case "A":
                a = b;
                return !!a.href && a.rel != "ignore";
            case "INPUT":
                a = b;
                return a.type != "hidden" && a.type != "file" && !a.disabled;
            case "BUTTON":
            case "SELECT":
            case "TEXTAREA":
                a = b;
                return !a.disabled
        }
        return !1
    }

    function i(a) {
        a = a;
        while (a && a !== document && c("Style").get(a, "visibility") != "hidden" && c("Style").get(a, "display") != "none") a = a.parentNode;
        return a === document
    }

    function a(a) {
        return Array.from(a.getElementsByTagName("*")).filter(j)
    }

    function b(a) {
        return Array.from(a.getElementsByTagName("*")).find(j)
    }

    function d(a) {
        a = Array.from(a.getElementsByTagName("*"));
        for (var b = a.length - 1; b >= 0; b--)
            if (j(a[b])) return a[b];
        return null
    }

    function j(a) {
        return h(a) && i(a)
    }

    function e(a) {
        return i(a)
    }
    g.find = a;
    g.findFirst = b;
    g.findLast = d;
    g.isTabbable = j;
    g.isVisible = e
}), 98);
__d("setImmediate", ["TimeSlice", "TimerStorage", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b, d = function() {
            c("TimerStorage").unset(c("TimerStorage").IMMEDIATE, b);
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        c("TimeSlice").copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
        b = c("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
        c("TimerStorage").set(c("TimerStorage").IMMEDIATE, b);
        return b
    }
    g["default"] = a
}), 98);
__d("BehaviorsMixin", [], (function(a, b, c, d, e, f) {
    var g = function() {
            function a(a) {
                this.$1 = a, this.$2 = !1
            }
            var b = a.prototype;
            b.enable = function() {
                this.$2 || (this.$2 = !0, this.$1.enable())
            };
            b.disable = function() {
                this.$2 && (this.$2 = !1, this.$1.disable())
            };
            return a
        }(),
        h = 1;

    function i(a) {
        a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
        return a.__BEHAVIOR_ID
    }
    a = {
        enableBehavior: function(a) {
            this._behaviors || (this._behaviors = {});
            var b = i(a);
            this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
            this._behaviors[b].enable();
            return this
        },
        disableBehavior: function(a) {
            if (this._behaviors) {
                a = i(a);
                this._behaviors[a] && this._behaviors[a].disable()
            }
            return this
        },
        enableBehaviors: function(a) {
            a.forEach(this.enableBehavior, this);
            return this
        },
        destroyBehaviors: function() {
            if (this._behaviors) {
                for (var a in this._behaviors) this._behaviors[a].disable();
                this._behaviors = {}
            }
        },
        hasBehavior: function(a) {
            return this._behaviors && i(a) in this._behaviors
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("isValidReactElement", [], (function(a, b, c, d, e, f) {
    var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function a(a) {
        return !!(typeof a === "object" && a !== null && a.$$typeof === g)
    }
    f["default"] = a
}), 66);
__d("BootloadedReact", ["Bootloader", "isValidReactElement"], (function(a, b, c, d, e, f) {
    var g = function(a) {
        b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact")
    };
    a = {
        isValidElement: function(a) {
            return b("isValidReactElement")(a)
        },
        render: function(a, b, c) {
            g(function(d) {
                d.render(a, b, function() {
                    c && c(this)
                })
            })
        },
        unmountComponentAtNode: function(a, b) {
            g(function(c) {
                c.unmountComponentAtNode(a), b && b()
            })
        }
    };
    e.exports = a
}), null);
__d("Layer", ["invariant", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "CSS", "ContextualThing", "DOM", "DataStore", "Event", "FBLogger", "HTML", "KeyEventController", "KeyStatus", "Parent", "Style", "ge", "isNode", "mixin", "removeFromArray", "setImmediate"], (function(a, b, c, d, e, f, g, h) {
    b("KeyStatus");
    var i = [],
        j = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a(a, d) {
                var e;
                e = b.call(this) || this;
                e._config = a || {};
                if (d) {
                    e._configure(e._config, d);
                    a = e._config.addedBehaviors || [];
                    e.enableBehaviors(e._getDefaultBehaviors().concat(a))
                } else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
                return e
            }
            var e = a.prototype;
            e.init = function(a) {
                this._configure(this._config, a);
                a = this._config.addedBehaviors || [];
                this.enableBehaviors(this._getDefaultBehaviors().concat(a));
                this._initialized = !0;
                return this
            };
            e._configure = function(a, b) {
                var e = this;
                if (b) {
                    var f = c("isNode")(b),
                        g = typeof b === "string" || c("HTML").isHTML(b);
                    this.containsReactComponent = d("BootloadedReact").isValidElement(b);
                    !f && !g && !this.containsReactComponent && c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
                    if (g) b = c("HTML")(b).getRootNode();
                    else if (this.containsReactComponent) {
                        f = document.createElement("div");
                        var h = !0;
                        d("BootloadedReact").render(b, f, function() {
                            e.inform("reactshow"), h || e.updatePosition()
                        });
                        h = !1;
                        b = this._reactContainer = f
                    }
                }
                this._root = this._buildWrapper(a, b);
                a.attributes && c("DOM").setAttributes(this._root, a.attributes);
                a.classNames && a.classNames.forEach(d("CSS").addClass.bind(null, this._root));
                d("CSS").addClass(this._root, "uiLayer");
                a.causalElement && (this._causalElement = c("ge")(a.causalElement));
                a.permanent && (this._permanent = a.permanent);
                a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
                d("DataStore").set(this._root, "layer", this)
            };
            e._getDefaultBehaviors = function() {
                return []
            };
            e.getCausalElement = function() {
                return this._causalElement
            };
            e.setCausalElement = function(a) {
                this._causalElement = a;
                return this
            };
            e.getInsertParent = function() {
                return this._insertParent || document.body
            };
            e.getRoot = function() {
                this._root || (this._destroyed ? c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
                return this._root
            };
            e.getContentRoot = function() {
                return this.getRoot()
            };
            e._buildWrapper = function(a, b) {
                return b
            };
            e.setInsertParent = function(a) {
                a && (this._shown && a !== this.getInsertParent() && (c("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
                return this
            };
            e.showAfterDelay = function(a) {
                window.setTimeout(this.show.bind(this), a)
            };
            e.show = function() {
                var b = this;
                if (this._shown) return this;
                var e = this.getRoot();
                e != null || h(0, 5142);
                this.inform("beforeshow");
                c("Style").set(e, "visibility", "hidden");
                c("Style").set(e, "overflow", "hidden");
                d("CSS").show(e);
                c("DOM").appendContent(this.getInsertParent(), e);
                this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function() {
                    b._shown && i.push(b)
                }, 0)) : d("CSS").hide(e);
                c("Style").set(e, "visibility", "");
                c("Style").set(e, "overflow", "");
                c("Style").set(e, "opacity", "1");
                this.inform("aftershow");
                return this
            };
            e.hide = function(a) {
                if (this._isStrictlyControlled) {
                    this._shown && this.inform("runhide", a);
                    return this
                }
                return this._hide()
            };
            e._hide = function() {
                if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
                this._hiding = !0;
                this.inform("starthide") !== !1 && this.finishHide();
                return this
            };
            e.conditionShow = function(a) {
                return a ? this.show() : this._hide()
            };
            e.finishHide = function() {
                if (this._shown) {
                    this._permanent || c("removeFromArray")(i, this);
                    this._hiding = !1;
                    this._shown = !1;
                    var b = this.getRoot();
                    b != null || h(0, 5143);
                    d("CSS").hide(b);
                    this.inform("hide");
                    a.inform("hide", this)
                }
            };
            e.isShown = function() {
                return this._shown
            };
            e.updatePosition = function() {
                return !0
            };
            e.destroy = function() {
                this.containsReactComponent && d("BootloadedReact").unmountComponentAtNode(this._reactContainer);
                this.finishHide();
                var b = this.getRoot();
                c("DOM").remove(b);
                this.destroyBehaviors();
                this.inform("destroy");
                a.inform("destroy", this);
                d("DataStore").remove(b, "layer");
                this._root = this._causalElement = null;
                this._destroyed = !0
            };
            a.init = function(a, b) {
                a.init(b)
            };
            a.initAndShow = function(a, b) {
                a.init(b).show()
            };
            a.show = function(a) {
                a.show()
            };
            a.showAfterDelay = function(a, b) {
                a.showAfterDelay(b)
            };
            a.getTopmostLayer = function() {
                return i[i.length - 1]
            };
            a.informBlur = function(a) {
                k = null;
                l = null;
                var b = i.length;
                if (!b) return;
                while (b--) {
                    var c = i[b],
                        e = c.getContentRoot();
                    e != null || h(0, 5144);
                    if (d("ContextualThing").containsIncludingLayers(e, a)) return;
                    if (c.inform("blur", {
                            target: a
                        }) === !1 || c.isShown()) return
                }
            };
            return a
        }(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(j, c("ArbiterMixin"));
    Object.assign(j.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null
    });
    c("Event").listen(document.documentElement, "keydown", function(a) {
        if (c("KeyEventController").filterEventTargets(a, "keydown"))
            for (var b = i.length - 1; b >= 0; b--)
                if (i[b].inform("key", a) === !1) return !1;
        return !0
    }, c("Event").Priority.URGENT);
    var k;
    c("Event").listen(document.documentElement, "mousedown", function(a) {
        k = a.getTarget()
    });
    var l;
    c("Event").listen(document.documentElement, "mouseup", function(a) {
        l = a.getTarget(), c("setImmediate")(function() {
            k = null, l = null
        })
    });
    c("Event").listen(document.documentElement, "click", function(a) {
        var b = k,
            e = l;
        k = null;
        l = null;
        var f = i.length;
        if (!f) return;
        f = a.getTarget();
        if (f !== e || f !== b) return;
        if (!c("DOM").contains(document.documentElement, f)) return;
        if (f.offsetWidth != null && !f.offsetWidth) return;
        if (d("Parent").byClass(f, "generic_dialog")) return;
        j.informBlur(f)
    });
    g["default"] = j
}), 98);
__d("CometVisualCompletionConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "data-visualcompletion";
    b = "HeroTracing";
    c = "InteractionTracing";
    d = "ignore";
    e = "ignore-dynamic";
    var g = "ignore-late-mutation",
        h = "loading-state",
        i = "media-vc-image",
        j = "css-img";
    f.ATTRIBUTE_NAME = a;
    f.HERO_TRACING_HOLD = b;
    f.INTERACTION_TRACING_HOLD = c;
    f.IGNORE = d;
    f.IGNORE_DYNAMIC = e;
    f.IGNORE_LATE_MUTATION = g;
    f.LOADING_STATE = h;
    f.MEDIA_VC_IMAGE = i;
    f.CSS_IMG = j
}), 66);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a ? a.offsetHeight : 0;
        a = a ? a.offsetWidth : 0;
        return {
            height: b,
            width: a
        }
    }

    function b(a) {
        a = c("getDocumentScrollElement")(a);
        var b = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return {
            width: b,
            height: a
        }
    }

    function d(a, b, d, e, f) {
        var g;
        switch (b) {
            case "left":
            case "right":
            case "top":
            case "bottom":
                g = [b];
                break;
            case "width":
                g = ["left", "right"];
                break;
            case "height":
                g = ["top", "bottom"];
                break;
            default:
                throw Error("Invalid plane: " + b)
        }
        b = function(b, d) {
            var e = 0;
            for (var f = 0; f < g.length; f++) e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
            return e
        };
        return (d ? b("padding", "") : 0) + (e ? b("border", "-width") : 0) + (f ? b("margin", "") : 0)
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d
}), 98);
__d("ViewportBounds", ["Arbiter", "ArbiterMixin", "BlueBar", "ExecutionEnvironment", "PageEvents", "Vector", "emptyFunction", "removeFromArray"], (function(a, b, c, d, e, f) {
    var g = {
        top: [],
        right: [],
        bottom: [],
        left: []
    };

    function a(a) {
        return function() {
            return g[a].reduce(function(a, b) {
                return Math.max(a, b.getSize())
            }, 0)
        }
    }

    function c(a, b) {
        return function(c) {
            return new h(a, c, b)
        }
    }
    var h = function() {
        "use strict";

        function a(a, c, d) {
            d === void 0 && (d = !1), this.getSide = b("emptyFunction").thatReturns(a), this.getSize = function() {
                return typeof c === "function" ? c() : c
            }, this.isPersistent = b("emptyFunction").thatReturns(d), g[a].push(this), i.inform("change")
        }
        var c = a.prototype;
        c.remove = function() {
            b("removeFromArray")(g[this.getSide()], this), i.inform("change")
        };
        return a
    }();
    b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONUNLOAD, function() {
        ["top", "right", "bottom", "left"].forEach(function(a) {
            a = g[a];
            for (var b = a.length - 1; b >= 0; b--) {
                var c = a[b];
                c.isPersistent() || c.remove()
            }
        })
    });
    var i = babelHelpers["extends"]({}, b("ArbiterMixin"), {
        getTop: a("top"),
        getRight: a("right"),
        getBottom: a("bottom"),
        getLeft: a("left"),
        getElementPosition: function(a) {
            a = b("Vector").getElementPosition(a);
            a.y -= i.getTop();
            return a
        },
        addTop: c("top"),
        addRight: c("right"),
        addBottom: c("bottom"),
        addLeft: c("left"),
        addPersistentTop: c("top", !0),
        addPersistentRight: c("right", !0),
        addPersistentBottom: c("bottom", !0),
        addPersistentLeft: c("left", !0)
    });
    i.addPersistentTop(function() {
        if (b("ExecutionEnvironment").canUseDOM && b("BlueBar").hasFixedBlueBar()) {
            var a = b("BlueBar").getMaybeFixedRoot();
            return a ? a.offsetHeight : 0
        }
        return 0
    });
    e.exports = i
}), null);
__d("isAsyncScrollQuery", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function a() {
        h === null && (h = c("UserAgent").isPlatform("Mac OS X >= 10.8") && c("UserAgent").isBrowser("Safari >= 6.0"));
        return h
    }
    g["default"] = a
}), 98);
__d("ScrollAwareDOM", ["ArbiterMixin", "CSS", "DOM", "DOMDimensions", "HTML", "Vector", "ViewportBounds", "getDocumentScrollElement", "getElementPosition", "getViewportDimensions", "isAsyncScrollQuery", "isNode"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return function() {
            var c = arguments;
            k.monitor(arguments[a], function() {
                b.apply(null, c)
            })
        }
    }

    function h(a) {
        a instanceof Array || (a = [a]);
        for (var b = 0; b < a.length; b++) {
            var d = c("HTML").replaceJSONWrapper(a[b]);
            if (d instanceof c("HTML")) return d.getRootNode();
            else if (c("isNode")(d)) return d
        }
        return null
    }

    function i(a) {
        return c("getElementPosition")(a).y > c("ViewportBounds").getTop()
    }

    function j(a) {
        a = c("getElementPosition")(a).y + d("DOMDimensions").getElementDimensions(a).height;
        var b = c("getViewportDimensions")().height - c("ViewportBounds").getBottom();
        return a >= b
    }
    var k = babelHelpers["extends"]({
        monitor: function(a, b) {
            if (c("isAsyncScrollQuery")()) return b();
            a = h(a);
            if (a) {
                var d = !!a.offsetParent;
                if (d && (i(a) || j(a))) return b();
                var e = c("Vector").getDocumentDimensions(),
                    f = b();
                if (d || a.offsetParent && !i(a)) {
                    d = c("Vector").getDocumentDimensions().sub(e);
                    e = {
                        delta: d,
                        target: a
                    };
                    k.inform("scroll", e) !== !1 && d.scrollElementBy(c("getDocumentScrollElement")())
                }
                return f
            } else return b()
        },
        replace: function(a, b) {
            var e = h(b);
            (!e || d("CSS").hasClass(e, "hidden_elem")) && (e = a);
            return k.monitor(e, function() {
                c("DOM").replace(a, b)
            })
        },
        prependContent: a(1, c("DOM").prependContent),
        insertAfter: a(1, c("DOM").insertAfter),
        insertBefore: a(1, c("DOM").insertBefore),
        setContent: a(0, c("DOM").setContent),
        appendContent: a(1, c("DOM").appendContent),
        remove: a(0, c("DOM").remove),
        empty: a(0, c("DOM").empty)
    }, c("ArbiterMixin"));
    b = k;
    g["default"] = b
}), 98);
__d("debounceAcrossTransitions", ["debounce"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return c("debounce")(a, b, d, !0)
    }
    g["default"] = a
}), 98);
__d("ModalLayer", ["csx", "cx", "Arbiter", "ArbiterMixin", "CSS", "CometVisualCompletionConstants", "DOM", "DOMDimensions", "DOMQuery", "DataStore", "Event", "Scroll", "ScrollAwareDOM", "Style", "UserAgent", "Vector", "debounceAcrossTransitions", "ge", "getDocumentScrollElement", "isAsyncScrollQuery", "removeFromArray", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h, i) {
    var j = [],
        k = null,
        l = null,
        m = null;

    function n() {
        m || (m = d("DOMQuery").scry(document.body, "._li")[0] || c("ge")("FB4BResponsiveMain"));
        return m
    }

    function o(a) {
        var b = {
                position: c("Vector").getScrollPosition(),
                listener: void 0
            },
            e = a.offsetTop - b.position.y;
        d("CSS").addClass(a, "_31e");
        n().id !== "FB4BResponsiveMain" && c("Style").set(a, "top", e + "px");
        c("Arbiter").inform("reflow");
        b.listener = c("ScrollAwareDOM").subscribe("scroll", function(e, f) {
            if (d("DOMQuery").contains(a, f.target)) {
                e = a.offsetTop - f.delta.y;
                c("Style").set(a, "top", e + "px");
                b.position = b.position.add(f.delta);
                return !1
            }
            return !0
        });
        d("DataStore").set(a, "ModalLayerData", b)
    }

    function p(a, b) {
        var e = d("DataStore").get(a, "ModalLayerData");
        if (e) {
            var f = function() {
                d("CSS").removeClass(a, "_31e");
                c("Style").set(a, "top", "");
                if (b) {
                    var f = c("getDocumentScrollElement")();
                    d("Scroll").setTop(f, e.position.y);
                    d("Scroll").getTop(f) !== e.position.y && (d("Scroll").setTop(f, e.position.y + 1), d("Scroll").setTop(f, e.position.y))
                }
                c("Arbiter").inform("reflow");
                e.listener.unsubscribe();
                e.listener = null;
                d("DataStore").remove(a, "ModalLayerData")
            };
            if (b && c("isAsyncScrollQuery")()) {
                var g = c("DOM").create("div", {
                    className: "_42w"
                });
                c("Style").set(g, "height", a.offsetHeight + "px");
                c("DOM").appendContent(document.body, g);
                var h = c("getDocumentScrollElement")();
                d("Scroll").setTop(h, e.position.y);
                b = !1;
                c("setTimeout")(function() {
                    f(), c("DOM").remove(g)
                }, 0)
            } else f()
        }
    }

    function q() {
        var a = n();
        a != null && !d("CSS").matchesSelector(a, "._31e") && o(a)
    }

    function r() {
        j.length || p(n(), !0)
    }

    function s() {
        var a = j.length;
        while (a--) {
            var b = j[a],
                c = b.getLayerRoot();
            if (c) {
                t(c, 0);
                b = b.getLayerContentRoot();
                if (b) {
                    b = b.offsetWidth + d("DOMDimensions").measureElementBox(b, "width", !1, !1, !0);
                    t(c, b)
                }
            }
        }
    }

    function t(a, b) {
        c("Style").set(a, "min-width", b + (b ? "px" : ""))
    }
    a = function() {
        function a(a) {
            this._layer = a, this._enabled = !1
        }
        var b = a.prototype;
        b.enable = function() {
            var a = this;
            if (!n()) return;
            this._subscription = this._layer.subscribe(["show", "hide"], function(b) {
                b == "show" ? a._addModal() : a._removeModal()
            });
            this._layer.isShown() && this._addModal();
            this._enabled = !0
        };
        b.disable = function() {
            if (!n()) return;
            this._subscription && this._subscription.unsubscribe();
            this._layer.isShown() && this._removeModal();
            this._enabled = !1
        };
        b._addModal = function() {
            var b = this.getLayerRoot();
            d("CSS").addClass(b, "_3qw");
            this._wash = c("DOM").create("div", {
                className: "_3ixn"
            });
            c("DOM").prependContent(b, this._wash);
            b && this._layer._config.ignoreVC && b.setAttribute(d("CometVisualCompletionConstants").ATTRIBUTE_NAME, d("CometVisualCompletionConstants").IGNORE);
            b = j[j.length - 1];
            b ? o(b.getLayerRoot()) : q();
            b = c("getDocumentScrollElement")();
            d("Scroll").setTop(b, 0);
            if (!j.length) {
                b = c("debounceAcrossTransitions")(s, 100);
                k = c("Event").listen(window, "resize", b);
                l = c("Arbiter").subscribe("reflow", b)
            }
            j.push(this);
            a.inform("show", this);
            c("setTimeout")(s, 0)
        };
        b._removeModal = function() {
            var b = this,
                e = this.getLayerRoot();
            d("CSS").removeClass(e, "_3qw");
            c("DOM").remove(this._wash);
            this._wash = null;
            t(e, 0);
            var f = this === j[j.length - 1];
            c("removeFromArray")(j, this);
            j.length || (k && k.remove(), k = null, l && l.unsubscribe(), l = null);
            var g;
            c("UserAgent").isBrowser("Safari") && (e = c("Event").listen(document.documentElement, "mousewheel", c("Event").prevent), g = e.remove.bind(e));
            c("setTimeoutAcrossTransitions")(function() {
                var d = j[j.length - 1];
                d ? (p(d.getLayerRoot(), f), a.inform("show", d)) : (r(), a.inform("hide", b));
                j.length && c("setTimeout")(s, 0);
                c("UserAgent").isBrowser("Safari") && c("setTimeout")(function() {
                    g()
                }, 0)
            }, 200)
        };
        b.getLayerRoot = function() {
            return this._enabled ? this._layer.getRoot() : null
        };
        b.getLayerContentRoot = function() {
            return this._enabled ? this._layer.getContentRoot() : null
        };
        a.getTopmostModalLayer = function() {
            return j[j.length - 1]
        };
        return a
    }();
    Object.assign(a, c("ArbiterMixin"));
    g["default"] = a
}), 98);
__d("DOMScroll", ["Arbiter", "DOM", "DOMQuery", "Vector", "ViewportBounds", "emptyFunction", "ge", "isAsyncScrollQuery", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation").__setRef("DOMScroll"),
        h = {
            SCROLL: "dom-scroll",
            _scrolling: !1,
            _scrollingFinishedTimeout: null,
            getScrollState: function() {
                var a = b("Vector").getViewportDimensions(),
                    c = b("Vector").getDocumentDimensions(),
                    d = c.x > a.x;
                c = c.y > a.y;
                d += 0;
                c += 0;
                return new(b("Vector"))(d, c)
            },
            _scrollbarSize: null,
            _initScrollbarSize: function() {
                var a = b("DOM").create("p");
                a.style.width = "100%";
                a.style.height = "200px";
                var c = b("DOM").create("div");
                c.style.position = "absolute";
                c.style.top = "0px";
                c.style.left = "0px";
                c.style.visibility = "hidden";
                c.style.width = "200px";
                c.style.height = "150px";
                c.style.overflow = "hidden";
                c.appendChild(a);
                b("nullthrows")(document.body).appendChild(c);
                var d = a.offsetWidth;
                c.style.overflow = "scroll";
                a = a.offsetWidth;
                d == a && (a = c.clientWidth);
                b("nullthrows")(document.body).removeChild(c);
                h._scrollbarSize = d - a
            },
            getScrollbarSize: function() {
                h._scrollbarSize === null && h._initScrollbarSize();
                return b("nullthrows")(h._scrollbarSize)
            },
            scrollTo: function(a, c, d, e, f, i) {
                var j, k = 0;
                c == null || c === !0 ? k = 750 : typeof c === "number" ? k = c : parseInt(c, 10) && (k = parseInt(c, 10));
                b("isAsyncScrollQuery")() && (k = 0);
                if (a instanceof b("Vector")) c = a;
                else {
                    var l = b("Vector").getScrollPosition().x;
                    a = b("Vector").getElementPosition(b("ge")(a)).y;
                    c = new(b("Vector"))(l, a, "document");
                    e || (c.y -= b("ViewportBounds").getTop() / (d ? 2 : 1))
                }
                d ? c.y -= b("Vector").getViewportDimensions().y / 2 : e && (c.y -= b("Vector").getViewportDimensions().y, c.y += e);
                f && (c.y -= f);
                c = c.convertTo("document");
                if (k)
                    if ("scrollBehavior" in b("nullthrows")(document.documentElement).style && k === 750 && !i) try {
                        window.scrollTo({
                            left: c.x,
                            top: c.y,
                            behavior: "smooth"
                        })
                    } catch (a) {
                        window.scrollTo(c.x, c.y)
                    } else {
                        l = g.getModuleIfRequired();
                        if (l != null) {
                            h._setScrollingForDuration(k);
                            var m = new l(b("nullthrows")(document.body)).to("scrollTop", c.y).to("scrollLeft", c.x).ease(l.ease.end).duration(k).ondone(i).go();
                            j = function() {
                                m.stop()
                            }
                        } else window.scrollTo(c.x, c.y), i && i()
                    } else window.scrollTo(c.x, c.y), i && i();
                b("Arbiter").inform(h.SCROLL);
                return j || b("emptyFunction")
            },
            scrollToID: function(a) {
                h.scrollTo(a)
            },
            ensureVisible: function(a, c, d, e, f) {
                var g = b("Vector").getScrollPosition().x;
                a = h._getBounds(a, c, d);
                c = a[0];
                d = a[1];
                var i = a[2];
                a = a[3];
                i < c ? h.scrollTo(new(b("Vector"))(g, i, "document"), e, !1, 0, 0, f) : a > d ? i - (a - d) < c ? h.scrollTo(new(b("Vector"))(g, i, "document"), e, !1, 0, 0, f) : h.scrollTo(new(b("Vector"))(g, a, "document"), e, !1, 1, 0, f) : f && f()
            },
            isCurrentlyVisible: function(a, b, c) {
                a = h._getBounds(a, b, c);
                b = a[0];
                c = a[1];
                var d = a[2];
                a = a[3];
                return d >= b && a <= c
            },
            _getBounds: function(a, c, d) {
                d == null && (d = 10);
                a = b("ge")(a);
                c && (a = b("DOMQuery").find(a, c));
                c = b("Vector").getScrollPosition().y;
                var e = c + b("Vector").getViewportDimensions().y,
                    f = b("Vector").getElementPosition(a).y;
                a = f + b("Vector").getElementDimensions(a).y;
                f -= b("ViewportBounds").getTop();
                f -= d;
                a += d;
                return [c, e, f, a]
            },
            scrollToTop: function(a) {
                var c = b("Vector").getScrollPosition();
                h.scrollTo(new(b("Vector"))(c.x, 0, "document"), a !== !1)
            },
            currentlyScrolling: function() {
                return h._scrolling
            },
            _setScrollingForDuration: function(a) {
                h._scrolling = !0, h._scrollingFinishedTimeout && (clearTimeout(h._scrollingFinishedTimeout), h._scrollingFinishedTimeout = null), h._scrollingFinishedTimeout = setTimeout(function() {
                    h._scrolling = !1, h._scrollingFinishedTimeout = null
                }, a)
            }
        };
    e.exports = h
}), null);
__d("keyMirror", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = {};
        if (!(a instanceof Object && !Array.isArray(a))) throw c("unrecoverableViolation")("keyMirror(...): Argument must be an object.", "comet_infra");
        for (var d in a) {
            if (!Object.prototype.hasOwnProperty.call(a, d)) continue;
            b[d] = d
        }
        return b
    }
    g["default"] = a
}), 98);
__d("PageHooks", ["Arbiter", "ErrorUtils", "InitialJSLoader", "PageEvents"], (function(a, b, c, d, e, f) {
    var g;
    f = {
        DOMREADY_HOOK: "domreadyhooks",
        ONLOAD_HOOK: "onloadhooks"
    };

    function h() {
        var c = a.CavalryLogger;
        !window.domready && c && c.getInstance().setTimeStamp("t_prehooks");
        k(l.DOMREADY_HOOK);
        !window.domready && c && c.getInstance().setTimeStamp("t_hooks");
        window.domready = !0;
        b("Arbiter").inform("uipage_onload", !0, "state")
    }

    function i() {
        k(l.ONLOAD_HOOK), window.loaded = !0
    }

    function j(a, c) {
        return (g || (g = b("ErrorUtils"))).applyWithGuard(a, null, null, function(a) {
            a.event_type = c, a.category = "runhook"
        }, "PageHooks:" + c)
    }

    function k(a) {
        var b = a == "onbeforeleavehooks" || a == "onbeforeunloadhooks";
        do {
            var c = window[a];
            if (!c) break;
            b || (window[a] = null);
            for (var d = 0; d < c.length; d++) {
                var e = j(c[d], a);
                if (b && e) return e
            }
        } while (!b && window[a])
    }

    function c() {
        window.domready || (window.domready = !0, k("onloadhooks")), window.loaded || (window.loaded = !0, k("onafterloadhooks"))
    }

    function d() {
        var a, c;
        (a = b("Arbiter")).registerCallback(h, [(c = b("PageEvents")).BIGPIPE_DOMREADY, b("InitialJSLoader").INITIAL_JS_READY]);
        a.registerCallback(i, [c.BIGPIPE_DOMREADY, c.BIGPIPE_ONLOAD, b("InitialJSLoader").INITIAL_JS_READY]);
        a.subscribe(c.NATIVE_ONBEFOREUNLOAD, function(a, b) {
            b.warn = k("onbeforeleavehooks") || k("onbeforeunloadhooks"), b.warn || (window.domready = !1, window.loaded = !1)
        }, "new");
        a.subscribe(c.NATIVE_ONUNLOAD, function(a, b) {
            k("onunloadhooks"), k("onafterunloadhooks")
        }, "new")
    }
    var l = babelHelpers["extends"]({
        _domreadyHook: h,
        _onloadHook: i,
        runHook: j,
        runHooks: k,
        keepWindowSetAsLoaded: c
    }, f);
    d();
    a.PageHooks = e.exports = l
}), null);
__d("DOMControl", ["$", "DataStore"], (function(a, b, c, d, e, f) {
    a = function() {
        "use strict";

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return !/\S/.test(a || "")
    }

    function i(a) {
        return h(a.value)
    }

    function a(a) {
        return i(a) ? "" : a.value
    }

    function b(a) {
        return a.value
    }

    function e(a, b) {
        a.value = b || "";
        b = c("DOMControl").getInstance(a);
        b && b.resetHeight && b.resetHeight()
    }

    function f(a, b) {
        b || (b = ""), a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
    }

    function j(a) {
        a.value = "", a.style.height = ""
    }

    function k(a, b) {
        d("CSS").conditionClass(a, "enter_submit", b)
    }

    function l(a) {
        return d("CSS").hasClass(a, "enter_submit")
    }

    function m(a, b) {
        b > 0 ? a.setAttribute("maxlength", b.toString()) : a.removeAttribute("maxlength")
    }
    g.isWhiteSpaceOnly = h;
    g.isEmpty = i;
    g.getValue = a;
    g.getValueRaw = b;
    g.setValue = e;
    g.setPlaceholder = f;
    g.reset = j;
    g.setSubmitOnEnter = k;
    g.getSubmitOnEnter = l;
    g.setMaxLength = m
}), 98);
__d("Form", ["DOM", "DOMQuery", "DTSG", "DTSGUtils", "DataStore", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    var g, h, i = "FileList" in window,
        j = "FormData" in window;

    function k(a) {
        var c = {};
        (g || (g = b("PHPQuerySerializer"))).serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = (h || (h = b("URI"))).decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? (h || (h = b("URI"))).decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var l = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            l.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : l.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            l.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            l.getElements(a).forEach(function(a) {
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (i) {
                        f = a.files;
                        for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            if (!j) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) l.forEachValue(a, c, function(a, b, c) {
                    d.append(b, c)
                });
                else {
                    c = k(a);
                    for (var a in c) c[a] == null ? d.append(a, "") : d.append(a, c[a])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            l.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                l._serializeHelper(c, b, d)
            });
            return l._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : l._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            for (var b in a) a[b] instanceof Object && (a[b] = l._serializeFix(a[b]));
            b = Object.keys(a);
            if (b.length === 0 || b.some(isNaN)) return a;
            b.sort(function(a, b) {
                return a - b
            });
            var c = 0,
                d = b.every(function(a) {
                    return +a === c++
                });
            return d ? b.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            e === void 0 && (e = !0);
            a = new(h || (h = b("URI")))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var i = window.open("about:blank", d);
                        i === void 0 || (i.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                i = b("DTSG").getToken();
                i && (c.fb_dtsg = i, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(i)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !i && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            l.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            e === void 0 && (e = !1);
            d = d || {};
            a = k(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = l.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = l
}), null);
__d("XReferer", ["Base64", "Cookie", "FBJSON", "URI", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        if (!d) {
            c("Cookie").set("x-referer", "");
            return
        }
        a != null && (a = i(a));
        b != null && (b = i(b));
        var e = window.location.pathname + window.location.search;
        d = c("URI").getRequestURI();
        var f = d.getSubdomain();
        b != null && h(b, e, f);
        a != null && c("setTimeoutAcrossTransitions")(function() {
            a != null && h(a, e, f)
        }, 0)
    }

    function h(a, b, e) {
        a = {
            r: a,
            h: b,
            s: e
        };
        b = c("Base64").encode(d("FBJSON").stringify(a));
        c("Cookie").set("x-referer", b)
    }

    function i(a) {
        var b = 1024;
        a && a.length > b && (a = a.substring(0, b) + "...");
        return a
    }
    g.update = a;
    g._setCookie = h;
    g.truncatePath = i
}), 98);
__d("goOrReplace", ["Env", "URI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        b = new(c("URI"))(b);
        c("Env").isCQuick && c("isFacebookURI")(b) && b.addQueryData({
            cquick: c("Env").iframeKey,
            cquick_token: c("Env").iframeToken,
            ctarget: c("Env").iframeTarget
        });
        b = b.toString();
        d ? a.replace(b) : a.href == b ? a.reload() : a.href = b
    }
    g["default"] = a
}), 98);
__d("HistoryManager", ["Env", "Event", "SprinkleConfig", "URI", "UserAgent_DEPRECATED", "XReferer", "emptyFunction", "gkx", "goOrReplace", "isInIframe", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h, i = {
        history: null,
        current: 0,
        fragment: null,
        isInitialized: function() {
            return !!i._initialized
        },
        init: function() {
            if (!(g || (g = b("Env"))).ALLOW_TRANSITION_IN_IFRAME && b("isInIframe")()) return;
            if (i._initialized) return i;
            var a = new(h || (h = b("URI")))(window.location.href),
                c = a.getFragment() || "";
            c.charAt(0) === "!" && (c = c.substr(1), a.setFragment(c));
            Object.assign(i, {
                _initialized: !0,
                fragment: c,
                orig_fragment: c,
                history: [a],
                callbacks: [],
                lastChanged: Date.now(),
                canonical: new h("#"),
                user: 0,
                enabled: !0,
                debug: b("emptyFunction")
            });
            if (window.history && window.history.pushState) {
                this.lastURI = document.URL;
                c = new(h || (h = b("URI")))(this.lastURI);
                a = c.getQueryData();
                a.__md__ = void 0;
                a.__xts__ = void 0;
                a.fb_dtsg_ag = void 0;
                a[b("SprinkleConfig").param_name] = void 0;
                this.lastURI = c.setQueryData(a).toString();
                try {
                    window.history.state && b("gkx")("819236") ? window.history.replaceState(window.history.state, null, this.lastURI) : window.history.replaceState(this.lastURI, null, this.lastURI)
                } catch (a) {
                    if (!(a.number === -2147467259)) throw a
                }
                b("Event").listen(window, "popstate", function(a) {
                    var c = a && a.state && typeof a.state === "string";
                    c && i.lastURI != a.state && (i.lastURI = document.URL, i.lastChanged = Date.now(), i.notify(new(h || (h = b("URI")))(a.state).getUnqualifiedURI().toString()))
                });
                (b("UserAgent_DEPRECATED").webkit() < 534 || b("UserAgent_DEPRECATED").chrome() <= 13) && (b("setIntervalAcrossTransitions")(i.checkURI, 42), i._updateRefererURI(this.lastURI));
                return i
            }
            i._updateRefererURI(h.getRequestURI(!1));
            if (b("UserAgent_DEPRECATED").webkit() < 500 || b("UserAgent_DEPRECATED").firefox() < 2) {
                i.enabled = !1;
                return i
            }
            "onhashchange" in window ? b("Event").listen(window, "hashchange", function() {
                window.setTimeout(i.checkURI.bind(i), 0)
            }) : b("setIntervalAcrossTransitions")(i.checkURI, 42);
            return i
        },
        registerURIHandler: function(a) {
            i.callbacks.push(a);
            return i
        },
        setCanonicalLocation: function(a) {
            i.canonical = new(h || (h = b("URI")))(a);
            return i
        },
        notify: function(a) {
            a == i.orig_fragment && (a = i.canonical.getFragment());
            for (var b = 0; b < i.callbacks.length; b++) try {
                if (i.callbacks[b](a)) return !0
            } catch (a) {}
            return !1
        },
        checkURI: function() {
            if (Date.now() - i.lastChanged < 400) return;
            if (window.history && window.history.pushState) {
                var a = new(h || (h = b("URI")))(document.URL).removeQueryData("ref").toString(),
                    c = new h(i.lastURI).removeQueryData("ref").toString();
                a != c && (i.lastChanged = Date.now(), i.lastURI = a, b("UserAgent_DEPRECATED").webkit() < 534 && i._updateRefererURI(a), i.notify(new(h || (h = b("URI")))(a).getUnqualifiedURI().toString()));
                return
            }
            if (b("UserAgent_DEPRECATED").webkit() && window.history.length == 200) {
                i.warned || (i.warned = !0);
                return
            }
            c = new(h || (h = b("URI")))(window.location.href).getFragment();
            c.charAt(0) == "!" && (c = c.substr(1));
            c = c.replace(/%23/g, "#");
            if (c != i.fragment.replace(/%23/g, "#")) {
                i.debug([c, " vs ", i.fragment, "whl: ", window.history.length, "QHL: ", i.history.length].join(" "));
                for (var a = i.history.length - 1; a >= 0; --a)
                    if (i.history[a].getFragment().replace(/%23/g, "#") == c) break;
                ++i.user;
                a >= 0 ? i.go(a - i.current) : i.go("#" + c);
                --i.user
            }
        },
        _updateRefererURI: function(a) {
            a instanceof(h || (h = b("URI"))) && (a = a.toString()), b("XReferer").update(a, null, !0)
        },
        go: function(a, c, d) {
            if (window.history && window.history.pushState) {
                c || typeof a === "number";
                var e = new(h || (h = b("URI")))(a).removeQueryData(["ref", "messaging_source", "ajaxpipe_fetch_stream", "fb_dtsg_ag", b("SprinkleConfig").param_name]).toString();
                i.lastChanged = Date.now();
                this.lastURI = e;
                d ? window.history.replaceState(a, null, e) : window.history.pushState(a, null, e);
                b("UserAgent_DEPRECATED").webkit() < 534 && i._updateRefererURI(a);
                return !1
            }
            i.debug("go: " + a);
            c === void 0 && (c = !0);
            if (!i.enabled && !c) return !1;
            if (typeof a === "number") {
                if (!a) return !1;
                e = a + i.current;
                var f = Math.max(0, Math.min(i.history.length - 1, e));
                i.current = f;
                e = i.history[f].getFragment() || i.orig_fragment;
                e = new(h || (h = b("URI")))(e).removeQueryData("ref").getUnqualifiedURI().toString();
                i.fragment = e;
                i.lastChanged = Date.now();
                i.user || b("goOrReplace")(window.location, window.location.href.split("#")[0] + "#!" + e, d);
                c && i.notify(e);
                i._updateRefererURI(e);
                return !1
            }
            a = new(h || (h = b("URI")))(a);
            a.getDomain() == new(h || (h = b("URI")))(window.location.href).getDomain() && (a = new(h || (h = b("URI")))("#" + a.getUnqualifiedURI()));
            f = i.history[i.current].getFragment();
            e = a.getFragment();
            if (e == f || f == i.orig_fragment && e == i.canonical.getFragment()) {
                c && i.notify(e);
                i._updateRefererURI(e);
                return !1
            }
            d && i.current--;
            f = i.history.length - i.current - 1;
            i.history.splice(i.current + 1, f);
            i.history.push(new h(a));
            return i.go(1, c, d)
        },
        getCurrentFragment: function() {
            var a = (h || (h = b("URI"))).getRequestURI(!1).getFragment();
            return a == i.orig_fragment ? i.canonical.getFragment() : a
        }
    };
    e.exports = i
}), null);
__d("LinkController", ["DataStore", "Event", "Parent", "removeFromArray", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = "@@LinkController",
        i = [],
        j = [];

    function a(a) {
        i.push(a);
        return {
            remove: function() {
                return c("removeFromArray")(i, a)
            }
        }
    }

    function b(a) {
        j.push(a);
        return {
            remove: function() {
                return c("removeFromArray")(j, a)
            }
        }
    }

    function e(a) {
        a = a.getTarget();
        var b = d("Parent").byTag(a, "a");
        if (!(b instanceof HTMLAnchorElement)) return;
        var e = l(b);
        if (e == null || e.trim() === "" || n(a) || d("DataStore").get(b, h) || e.endsWith("#")) return;
        a = c("Event").listen(b, "click", function(a) {
            c("trackReferrer")(b, e), !b.rel && (!b.target || b.target === "_self") && !m(a) && k(b, a)
        });
        d("DataStore").set(b, h, a)
    }

    function k(a, b) {
        i.concat(j).every(function(c) {
            if (c(a, b) === !1) {
                b.prevent();
                return !1
            }
            return !0
        })
    }

    function l(a) {
        if (a && !a.rel) {
            a = a.getAttribute("href");
            if (a != null) {
                var b = a.match(/^(\w+):/);
                if (!b || b[1].match(/^http/i)) return a
            }
        }
        return null
    }

    function m(a) {
        return a.getModifiers().any || a.which != null && a.which !== 1
    }

    function n(a) {
        return a.nodeName === "INPUT" && a.type === "file"
    }
    c("Event").listen(document.documentElement, "mousedown", e, c("Event").Priority.URGENT);
    c("Event").listen(document.documentElement, "keydown", e, c("Event").Priority.URGENT);
    g.registerHandler = a;
    g.registerFallbackHandler = b
}), 98);
__d("PageTransitionPriorities", [], (function(a, b, c, d, e, f) {
    a = 5;
    b = a + 1;
    c = b + 1;
    f.DEFAULT = a;
    f.LEFT_NAV = b;
    f.SOCIAL_SEARCH_DIALOG = c
}), 66);
__d("LayerHideSources", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BLUR: "blur",
        ESCAPE: "escape",
        LAYER_CANCEL_BUTTON: "layerCancelButton",
        LAYER_HIDE_BUTTON: "layerHideButton",
        TRANSITION: "transition"
    });
    b = a;
    f["default"] = b
}), 66);
__d("LayerHideOnEscape", ["Event", "Keys", "LayerHideSources"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._subscription = this._layer.subscribe("key", this.handle.bind(this))
        };
        b.disable = function() {
            this._subscription != null && this._subscription.unsubscribe(), this._subscription = null
        };
        b.handle = function(a, b) {
            if (c("Event").getKeyCode(b) === c("Keys").ESC) {
                this._layer.hide(c("LayerHideSources").ESCAPE);
                return !1
            }
            return void 0
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscription: null
    });
    g["default"] = a
}), 98);
__d("computeRelativeURI", ["URI", "isEmpty", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (!b) return a;
        if (b.charAt(0) == "/") return b;
        var c = a.split("/").slice(0, -1);
        c[0] !== "";
        b.split("/").forEach(function(a) {
            a === "." || (a === ".." ? c.length > 1 && (c = c.slice(0, -1)) : c.push(a))
        });
        return c.join("/")
    }

    function a(a, b) {
        var d = new(c("URI"))(),
            e = new(c("URI"))(a),
            f = new(c("URI"))(b);
        if (f.getDomain() && !c("isFacebookURI")(f)) return b;
        var g = e;
        a = ["Protocol", "Domain", "Port", "Path", "QueryData", "Fragment"];
        a.forEach(function(a) {
            var b = a === "Path" && g === e;
            b && d.setPath(h(e.getPath(), f.getPath()));
            c("isEmpty")(f["get" + a]()) || (g = f);
            b || d["set" + a](g["get" + a]())
        });
        return d
    }
    g["default"] = a
}), 98);
__d("getReferrerURI", ["ErrorGuard", "URI", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function b() {
        if (a.PageTransitions && a.PageTransitions.isInitialized()) return a.PageTransitions.getReferrerURI();
        else {
            var b = c("ErrorGuard").applyWithGuard(function(a) {
                return c("URI").tryParseURI(a)
            }, null, [document.referrer]);
            return b && c("isFacebookURI")(b) ? b : null
        }
    }
    g["default"] = b
}), 98);
__d("PageTransitionsRegistrar", ["invariant", "DOMQuery", "Form", "LinkController", "PageTransitionPriorities", "Parent", "URI", "computeRelativeURI", "getReferrerURI", "goURI", "requireDeferred", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g, h) {
    var i = c("requireDeferred")("PageTransitions").__setRef("PageTransitionsRegistrar");
    c("setTimeout")(function() {
        i.onReady(function(a) {
            a && a._init && a._init()
        })
    }, 0);
    var j = [],
        k = [];
    e = {
        DELAY_HISTORY: "delay_history_PTR",
        registerHandler: function(a, b) {
            a != null || h(0, 5202), b = b || d("PageTransitionPriorities").DEFAULT, j[b] || (j[b] = []), j[b].push(a)
        },
        removeHandler: function(a, b) {
            b = b || d("PageTransitionPriorities").DEFAULT;
            var c = -1;
            j[b] && (c = j[b].indexOf(a));
            c > -1 && j[b].splice(c, 1)
        },
        registerCompletionCallback: function(a) {
            k.push(a)
        },
        getMostRecentURI: n,
        getReferrerURI: c("getReferrerURI"),
        _getTransitionHandlers: function() {
            return j
        },
        _getCompletionCallbacks: function() {
            return k
        },
        _resetCompletionCallbacks: function() {
            k = []
        },
        __onClick: e,
        __onSubmit: f
    };
    var l = null;

    function b(a) {
        l = a, c("setTimeoutAcrossTransitions")(function() {
            l = null
        }, 0)
    }

    function e(a) {
        if (l) {
            if (!a.isDefaultPrevented()) {
                m(l);
                var b = l.getAttribute("href");
                b && c("goURI")(b)
            }
            a.kill()
        }
    }

    function m(a) {
        var b = a.getAttribute("href") || "",
            d = c("computeRelativeURI")(n().getQualifiedURI().toString(), b).toString();
        b != d && a.setAttribute("href", d)
    }

    function f(a, b) {
        b = b;
        var e = a.getTarget();
        if (d("Form").getAttribute(e, "rel") || d("Form").getAttribute(e, "target")) return;
        var f = new(c("URI"))(d("Form").getAttribute(e, "action"));
        f = c("computeRelativeURI")(n().toString(), f.toString());
        e.setAttribute("action", f.toString());
        if ((d("Form").getAttribute(e, "method") || "GET").toUpperCase() == "GET") {
            e = d("Form").serialize(e);
            b && (d("DOMQuery").isNodeOfType(b, "input") && b.type === "submit" || (b = d("Parent").byTag(b, "button"))) && b.name && (e[b.name] = b.value);
            typeof f === "string" && (f = new(c("URI"))(f));
            c("goURI")(f.addQueryData(e));
            a.kill()
        }
    }
    d("LinkController").registerFallbackHandler(b);

    function n() {
        if (a.PageTransitions && a.PageTransitions.isInitialized()) return a.PageTransitions.getMostRecentURI();
        else {
            var b = c("URI").getRequestURI(!1);
            b = b.getUnqualifiedURI();
            var d = new(c("URI"))(b).setFragment(""),
                e = b.getFragment();
            e.charAt(0) === "!" && d.toString() === e.substr(1) && (b = d);
            return b
        }
    }
    f = e;
    g["default"] = f
}), 98);
__d("escapeJSQuotes", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return typeof a === "undefined" || a == null || !a.valueOf() ? "" : a.toString().replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\"/g, "\\x22").replace(/\'/g, "\\'").replace(/</g, "\\x3c").replace(/>/g, "\\x3e").replace(/&/g, "\\x26")
    }
    f["default"] = a
}), 66);
__d("PageTransitionsBlue", ["fbt", "invariant", "Arbiter", "BlueCompatBroker", "BlueCompatRouter", "Bootloader", "DOMQuery", "DOMScroll", "Env", "ErrorGuard", "Event", "FbtResultBase", "HistoryManager", "LayerHideOnEscape", "PageHooks", "PageTransitionsConfig", "PageTransitionsRegistrar", "ScriptPath", "URI", "Vector", "areEqual", "clickRefAction", "escapeJSQuotes", "ge", "gkx", "goOrReplace", "isFacebookURI", "isInIframe", "react", "setTimeout"], (function(a, b, c, d, e, f, g, h, i) {
    var j = d("react"),
        k = ["cquick", "ctarget", "cquick_token", "mh_", "killabyte", "tfc_", "tfi_"],
        l = {};

    function m(a, b) {
        a && (l[a.getUnqualifiedURI().toString()] = b)
    }

    function n(a) {
        return l[a.getUnqualifiedURI().toString()]
    }

    function o(a) {
        delete l[a.getUnqualifiedURI().toString()]
    }

    function p() {
        var a = {};
        window.location.search.slice(1).split("&").forEach(function(b) {
            b = b.split("=");
            var c = b[0];
            b = b[1];
            b = b === void 0 ? null : b;
            k.some(function(a) {
                return c.startsWith(a)
            }) && (a[c] = b)
        });
        return a
    }
    var q = null,
        r = !1,
        s = new(c("URI"))(""),
        t = null,
        u = new(c("URI"))(),
        v = null,
        w = !1,
        x = !1,
        y = !1,
        z = {
            isInitialized: function() {
                return r
            },
            init: function() {
                z._init()
            },
            _init: function() {
                if (c("isInIframe")()) return !1;
                if (r) return !0;
                var a = c("PageTransitionsRegistrar").getMostRecentURI();
                q = a;
                s = a;
                t = null;
                u = a;
                var b = c("ErrorGuard").applyWithGuard(function(a) {
                    return c("URI").tryParseURI(a)
                }, null, [document.referrer]);
                v = document.referrer && b && c("isFacebookURI")(b) ? b : null;
                r = !0;
                b = c("URI").getRequestURI(!1);
                b.getFragment().startsWith("/") ? b = b.getFragment() : b = a.toString();
                c("HistoryManager").init().setCanonicalLocation("#" + b).registerURIHandler(z._historyManagerHandler);
                c("Event").listen(window, "scroll", function() {
                    w || m(q, c("Vector").getScrollPosition())
                });
                return !0
            },
            registerHandler: c("PageTransitionsRegistrar").registerHandler,
            removeHandler: c("PageTransitionsRegistrar").removeHandler,
            getCurrentURI: function(a) {
                a === void 0 && (a = !1);
                z._init();
                return !q && !a ? new(c("URI"))(s) : new(c("URI"))(q)
            },
            isTransitioning: function() {
                z._init();
                return !q
            },
            getNextURI: function() {
                z._init();
                return u
            },
            getNextReferrerURI: function() {
                z._init();
                return t
            },
            getReferrerURI: function() {
                z._init();
                return v
            },
            getMostRecentURI: function() {
                z._init();
                return new(c("URI"))(s)
            },
            go: function(a, b) {
                b === void 0 && (b = !1);
                if (c("BlueCompatRouter").goFragment(a)) {
                    var d = new(c("URI"))(a);
                    if (z.restoreScrollPosition(d)) {
                        q = s = d;
                        return
                    }
                }
                if (c("BlueCompatRouter").go(a, b)) return;
                z.goBase(a, b)
            },
            goBase: function(a, b) {
                b === void 0 && (b = !1);
                z._init();
                var d = p(),
                    e = new(c("URI"))(a).removeQueryData("quickling").addQueryData(d).getQualifiedURI();
                o(e);
                b || c("clickRefAction")("uri", {
                    href: e.toString()
                }, null, "INDIRECT");
                z._loadPage(e, b, function(a) {
                    a ? c("HistoryManager").go(e.toString(), !1, b) : c("goOrReplace")(window.location, e, b)
                })
            },
            _historyManagerHandler: function(a) {
                if (a.charAt(0) != "/") return !1;
                c("clickRefAction")("h", {
                    href: a
                });
                d("ScriptPath").getClickPointInfo() || d("ScriptPath").setClickPointInfo({
                    click: "back"
                });
                z._loadPage(new(c("URI"))(a), !0, function(b) {
                    b || c("goOrReplace")(window.location, a, !0)
                });
                return !0
            },
            _loadPage: function(a, b, e) {
                if (new(c("URI"))(a).getFragment() && c("areEqual")(new(c("URI"))(a).setFragment("").getQualifiedURI(), new(c("URI"))(q).setFragment("").getQualifiedURI())) {
                    c("Arbiter").inform("pre_page_fragment_transition", {
                        from: new(c("URI"))(q).getFragment(),
                        to: new(c("URI"))(a).getFragment()
                    });
                    if (z.restoreScrollPosition(a)) {
                        q = s = a;
                        c("Arbiter").inform("page_fragment_transition", {
                            fragment: new(c("URI"))(a).getFragment()
                        });
                        return
                    }
                }
                var f;
                q && (f = n(q));
                var g = function() {
                        f && q && m(q, f);
                        t = z.getMostRecentURI();
                        q = null;
                        u = a;
                        f && d("DOMScroll").scrollTo(f, !1);
                        w = !0;
                        var g = z._handleTransition(a, b);
                        e && (g === c("PageTransitionsRegistrar").DELAY_HISTORY ? c("setTimeout")(function() {
                            return e && e(g)
                        }, 0) : e(g))
                    },
                    h = u;
                u = a;
                var i = c("PageHooks").runHooks("onbeforeleavehooks");
                u = h;
                i ? z._warnBeforeLeaving(i, g) : g()
            },
            _handleTransition: function(b, d) {
                window.onbeforeleavehooks = void 0;
                if (x || !b.isSameOrigin()) return !1;
                var e = c("PageTransitionsConfig").reloadOnBootloadError && z._hasBootloadErrors();
                if (e) return !1;
                var f;
                e = a.AsyncRequest;
                e && (f = e.getLastID());
                c("Arbiter").inform("pre_page_transition", {
                    from: z.getMostRecentURI(),
                    to: b
                });
                e = c("PageTransitionsRegistrar")._getTransitionHandlers();
                for (var g = e.length - 1; g >= 0; --g) {
                    var h = e[g];
                    if (!h) continue;
                    for (var i = h.length - 1; i >= 0; --i) {
                        var j = h[i](b, d);
                        if (j === !0 || j === c("PageTransitionsRegistrar").DELAY_HISTORY) {
                            var k = {
                                sender: z,
                                uri: b,
                                id: f
                            };
                            try {
                                c("Arbiter").inform("page_transition", k)
                            } catch (a) {}
                            return j
                        } else h.splice(i, 1)
                    }
                }
                return !1
            },
            disableTransitions: function() {
                x = !0
            },
            disableScrollAnimation: function() {
                y = !0
            },
            _hasBootloadErrors: function() {
                return c("Bootloader").getErrorCount() > 0
            },
            unifyURI: function() {
                z._init(), q = s = u, v = t
            },
            transitionComplete: function(a) {
                a === void 0 && (a = !1);
                z._init();
                w = !1;
                z._executeCompletionCallbacks();
                z.unifyURI();
                a || q && z.restoreScrollPosition(q);
                try {
                    document.activeElement && document.activeElement.nodeName === "A" && document.activeElement.blur()
                } catch (a) {}
            },
            _executeCompletionCallbacks: function() {
                var a = c("PageTransitionsRegistrar")._getCompletionCallbacks();
                a.length > 0 && (c("PageTransitionsRegistrar")._resetCompletionCallbacks(), a.forEach(function(a) {
                    return a()
                }))
            },
            registerCompletionCallback: c("PageTransitionsRegistrar").registerCompletionCallback,
            rewriteCurrentURI: function(a, b) {
                z._init();
                var d = c("PageTransitionsRegistrar")._getTransitionHandlers(),
                    e = d.length || 1,
                    f = !1;
                c("PageTransitionsRegistrar").registerHandler(function() {
                    if (a && a.toString() == z.getMostRecentURI().getUnqualifiedURI().toString()) {
                        z.transitionComplete();
                        return !0
                    }
                    f = !0
                }, e);
                z.go(b, !0);
                d.length === e + 1 && d[e].length === (f ? 0 : 1) || i(0, 1302);
                d.length = e
            },
            _warnBeforeLeaving: function(a, b) {
                c("Bootloader").loadModules(["DialogX", "XUIDialogTitle.react", "XUIDialogBody.react", "XUIDialogButton.react", "XUIDialogFooter.react", "XUIGrayText.react"], function(d, e, f, g, i, k) {
                    var l = typeof a === "string" || a instanceof String || a instanceof c("FbtResultBase") ? {
                        body: a,
                        highlightStay: !1,
                        leaveButtonText: h._( /*FBT_CALL*/ "Leave this Page" /*FBT_CALL*/ ),
                        showCloseButton: !1,
                        stayButtonText: h._( /*FBT_CALL*/ "Stay on This Page" /*FBT_CALL*/ ),
                        title: h._( /*FBT_CALL*/ "Leave page?" /*FBT_CALL*/ )
                    } : a;
                    e = j.jsx(e, {
                        showCloseButton: l.showCloseButton,
                        children: l.title
                    });
                    g = l.highlightStay ? [j.jsx(g, {
                        action: "confirm",
                        label: l.leaveButtonText
                    }, "confirm"), j.jsx(g, {
                        action: "cancel",
                        use: "confirm",
                        label: l.stayButtonText,
                        className: "autofocus"
                    }, "cancel")] : [j.jsx(g, {
                        action: "cancel",
                        label: l.stayButtonText
                    }, "cancel"), j.jsx(g, {
                        action: "confirm",
                        use: "confirm",
                        label: l.leaveButtonText,
                        className: "autofocus"
                    }, "confirm")];
                    var m = new d({
                        width: 450,
                        addedBehaviors: [c("LayerHideOnEscape")]
                    }, j.jsxs("div", {
                        children: [e, j.jsx(f, {
                            children: j.jsx(k, {
                                shade: "medium",
                                size: "medium",
                                children: l.body
                            })
                        }), j.jsx(i, {
                            children: g
                        })]
                    }));
                    m.subscribe("confirm", function() {
                        m.hide(), b()
                    });
                    m.show()
                }, "PageTransitionsBlue")
            },
            restoreScrollPosition: function(a) {
                var b = n(a);
                if (b) {
                    d("DOMScroll").scrollTo(b, !1);
                    return !0
                }

                function e(a) {
                    if (!a) return null;
                    var b = "a[name='" + c("escapeJSQuotes")(a) + "']";
                    return d("DOMQuery").scry(document.body, b)[0] || c("ge")(a)
                }
                b = e(new(c("URI"))(a).getFragment());
                if (b) {
                    e = !y;
                    d("DOMScroll").scrollTo(b, e);
                    return !0
                }
                return !1
            }
        };
    !c("gkx")("524") && c("Env").isCQuick && (d("BlueCompatBroker").init(), d("BlueCompatBroker").register("transitionpage", function(b) {
        b = new(c("URI"))(d("BlueCompatBroker").getMessageEventString(b, "uri"));
        var e = new(c("URI"))(window.location.href);
        b.removeQueryData("ctarget");
        e.removeQueryData("ctarget");
        if (e.toString() === b.toString()) return;
        e = a.AsyncRequest;
        e && e.ignoreUpdate();
        z.goBase(b, !1)
    }));
    b = z;
    a.PageTransitions = z;
    g["default"] = b
}), 98);
__d("TabIsolation", ["Event", "Focus", "Keys", "TabbableElements", "containsNode"], (function(a, b, c, d, e, f, g) {
    var h = [],
        i = 0;
    a = function() {
        function a(a) {
            var b = this;
            this.enable = function() {
                b.disable(), h.unshift(b.$2), b.$1 = c("Event").listen(window, "keydown", function(a) {
                    h[0] === b.$2 && b.$4(a)
                }, c("Event").Priority.URGENT)
            };
            this.disable = function() {
                if (b.$1) {
                    var a = h.indexOf(b.$2);
                    a > -1 && h.splice(a, 1);
                    b.$1.remove();
                    b.$1 = null
                }
            };
            this.$3 = a;
            this.$1 = null;
            this.$2 = i++
        }
        var b = a.prototype;
        b.$4 = function(a) {
            if (c("Event").getKeyCode(a) !== c("Keys").TAB) return;
            var b = a.getTarget();
            if (!b) return;
            var e = d("TabbableElements").find(this.$3),
                f = e[0];
            e = e[e.length - 1];
            var g = a.getModifiers();
            g = g.shift;
            g && b === f ? (a.preventDefault(), d("Focus").set(e)) : (!g && b === e || !c("containsNode")(this.$3, b)) && (a.preventDefault(), d("Focus").set(f))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("LayerHideOnTransition", ["LayerHideSources", "PageTransitionsRegistrar"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            var b = this;
            this._handler = function(a) {
                b._enabled && b.isTransitionRelevant(a) && b._layer.hide(c("LayerHideSources").TRANSITION), b._subscribe()
            };
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._enabled = !0, this._subscribed || setTimeout(this._subscribe.bind(this), 0)
        };
        b.disable = function() {
            this._enabled = !1, c("PageTransitionsRegistrar").removeHandler(this._handler)
        };
        b.isTransitionRelevant = function(a) {
            return !0
        };
        b._subscribe = function() {
            c("PageTransitionsRegistrar").registerHandler(this._handler), this._subscribed = !0
        };
        return a
    }();
    Object.assign(a.prototype, {
        _enabled: !1,
        _subscribed: !1
    });
    g["default"] = a
}), 98);
__d("LayerTabIsolation", ["TabIsolation"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this._layer = a, this._tabIsolation = null, this._subscriptions = null
        }
        var b = a.prototype;
        b.enable = function() {
            var a = this._layer.getRoot();
            if (a == null) return;
            a = new(c("TabIsolation"))(a);
            this._tabIsolation = a;
            this._subscriptions = [this._layer.subscribe("show", a.enable.bind(a)), this._layer.subscribe("hide", a.disable.bind(a))]
        };
        b.disable = function() {
            while (this._subscriptions && this._subscriptions.length) this._subscriptions.pop().unsubscribe();
            this._tabIsolation && this._tabIsolation.disable();
            this._tabIsolation = null
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscriptions: []
    });
    g["default"] = a
}), 98);