if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("ResetScrollOnUnload", ["Run"], (function(a, b, c, d, e, f, g) {
    function a() {
        d("Run").onUnload(function() {
            window.history.scrollRestoration = "manual"
        })
    }

    function b(a) {
        d("Run").onUnload(function() {
            window.history.scrollRestoration = "manual", a.style.opacity = "0", window.scrollTo(0, 0)
        })
    }
    g.disableScrollRestoration = a;
    g.init = b
}), 98);
__d("LoggedOutSwitchingLocaleTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LoggedOutSwitchingLocaleLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setIndex = function(a) {
            this.$1.index = a;
            return this
        };
        c.setNewLocale = function(a) {
            this.$1.new_locale = a;
            return this
        };
        c.setOldLocale = function(a) {
            this.$1.old_locale = a;
            return this
        };
        c.setReferrer = function(a) {
            this.$1.referrer = a;
            return this
        };
        return a
    }();
    c = {
        index: !0,
        new_locale: !0,
        old_locale: !0,
        referrer: !0
    };
    f["default"] = a
}), 66);
__d("NavigationMenubarInteractionsTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:NavigationMenubarInteractionsLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setAction = function(a) {
            this.$1.action = a;
            return this
        };
        c.setTargetItem = function(a) {
            this.$1.target_item = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        action: !0,
        target_item: !0
    };
    f["default"] = a
}), 66);
__d("KeyboardActivityTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:KeyboardActivityLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setKey = function(a) {
            this.$1.key = a;
            return this
        };
        return a
    }();
    c = {
        duration: !0,
        key: !0
    };
    f["default"] = a
}), 66);
__d("KeyboardActivityLogger", ["Event", "KeyboardActivityTypedLogger", "Keys", "isElementInteractive"], (function(a, b, c, d, e, f, g) {
    b = ["tab", "right", "left", "up", "down", "enter"];
    var h = b.reduce(function(a, b) {
            a[b] = {
                count: 0,
                startTS: 0
            };
            return a
        }, {}),
        i = 20;

    function a() {
        document.addEventListener("keydown", j)
    }

    function j(a) {
        var b = a.getTarget();
        if (c("isElementInteractive")(b)) return;
        switch (c("Event").getKeyCode(a)) {
            case c("Keys").TAB:
                k("tab");
                break;
            case c("Keys").RIGHT:
                k("right");
                break;
            case c("Keys").LEFT:
                k("left");
                break;
            case c("Keys").UP:
                k("up");
                break;
            case c("Keys").DOWN:
                k("down");
                break;
            case c("Keys").RETURN:
                k("enter");
                break
        }
    }

    function k(a) {
        var b = h[a];
        b.count++;
        b.startTS === 0 && (b.startTS = Date.now());
        b.count === i && (l(a), b.count = 0, b.startTS = 0)
    }

    function l(a) {
        var b = h[a];
        b = Date.now() - b.startTS;
        new(c("KeyboardActivityTypedLogger"))().setKey(a).setDuration(b).log()
    }
    g.init = a;
    g._listenForKey = j;
    g._checkKeyActivity = k;
    g._log = l
}), 98);
__d("DOMTraverser", ["DOM"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (a.previousElementSibling) {
            var b = a.previousElementSibling;
            while (b.lastElementChild !== null) b = b.lastElementChild;
            return b
        }
        return a.parentElement
    }

    function i(a) {
        if (a.firstElementChild) return a.firstElementChild;
        if (a.nextElementSibling) return a.nextElementSibling;
        a = a.parentElement;
        while (a != null) {
            if (a.nextElementSibling) return a.nextElementSibling;
            a = a.parentElement
        }
        return null
    }

    function a(a, b, c) {
        if (b === a) return null;
        b = h(b);
        while (b != null) {
            if (b instanceof HTMLElement && c(b)) return b;
            if (b === a) return null;
            b = h(b)
        }
        return null
    }

    function b(a, b, d) {
        b = i(b);
        while (b != null) {
            if (a && !c("DOM").contains(a, b)) return null;
            if (b instanceof HTMLElement && d(b)) return b;
            b = i(b)
        }
        return null
    }
    g.previousNode = h;
    g.nextNode = i;
    g.previousFilteredNode = a;
    g.nextFilteredNode = b
}), 98);
__d("XBasicFBNuxDismissController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/dismiss_fbnux/", {
        nux_id: {
            type: "Int",
            required: !0
        }
    })
}), null);
__d("XBasicFBNuxViewController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/megaphone/view_fbnux/", {
        nux_id: {
            type: "Int",
            required: !0
        }
    })
}), null);
__d("BasicFBNux", ["AsyncRequest", "XBasicFBNuxDismissController", "XBasicFBNuxViewController"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        a.subscribe("hide", function() {
            return h(b)
        })
    }

    function b(a) {
        a = c("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id", a).getURI();
        new(c("AsyncRequest"))().setURI(a).send()
    }

    function h(a) {
        a = c("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id", a).getURI();
        new(c("AsyncRequest"))().setURI(a).send()
    }
    g.subscribeHide = a;
    g.onView = b;
    g.onDismiss = h
}), 98);
__d("ChatQuietLinks", ["DOM", "DataStore", "Event", "Parent", "UserAgent_DEPRECATED", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        silenceLinks: function(a) {
            h(a, this.removeEmptyHrefs.bind(this))
        },
        nukeLinks: function(a) {
            h(a, this.removeAllHrefs.bind(this))
        },
        removeEmptyHrefs: function(a) {
            i(a, function(a) {
                return !a || a === "#"
            })
        },
        removeAllHrefs: function(a) {
            i(a)
        }
    };

    function h(a, c) {
        if (!a) return;
        var d = !!b("UserAgent_DEPRECATED").chrome(),
            e = !!b("UserAgent_DEPRECATED").chrome() || b("UserAgent_DEPRECATED").ie() >= 9 || b("UserAgent_DEPRECATED").firefox() >= 4;
        if (g[b("getOrCreateDOMID")(a)]) return;
        g[b("getOrCreateDOMID")(a)] = !0;
        if (!e) return;
        if (!d) {
            c && c(a);
            return
        }
        b("Event").listen(a, "mouseover", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            if (a) {
                var c = a.getAttribute("href");
                j(c) && (b("DataStore").set(a, "stashedHref", a.getAttribute("href")), a.removeAttribute("href"))
            }
        });
        b("Event").listen(a, "mouseout", function(a) {
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").remove(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        });
        b("Event").listen(a, "mousedown", function(a) {
            if (!a.isDefaultRequested()) return !0;
            a = b("Parent").byTag(a.getTarget(), "a");
            var c = a && b("DataStore").get(a, "stashedHref");
            j(c) && a.setAttribute("href", c)
        })
    }

    function i(a, c) {
        a = b("DOM").scry(a, "a");
        c && (a = a.filter(function(a) {
            return c(a.getAttribute("href"))
        }));
        a.forEach(function(a) {
            a.removeAttribute("href"), a.tabIndex || a.setAttribute("tabindex", 0)
        })
    }

    function j(a) {
        return a && a !== "#"
    }
    e.exports = a
}), null);
__d("Toggler", ["csx", "invariant", "$", "Arbiter", "ArbiterMixin", "CSS", "ContextualThing", "DOM", "DataStore", "Event", "Focus", "Keys", "Parent", "TabbableElements", "TimeSlice", "createArrayFromMixed", "emptyFunction", "ge", "getContextualParent", "getObjectValues", "killswitch", "mixin", "queryThenMutateDOM", "setImmediate"], (function(a, b, c, d, e, f, g, h, i) {
    var j = [],
        k, l = !1;

    function m() {
        l || (l = !0, c("setImmediate")(function() {
            l = !1
        }))
    }
    var n = function() {
            n = c("emptyFunction"), c("Event").listen(document.documentElement, "click", function(a) {
                if (l) return;
                var b = a.getTarget();
                j.forEach(function(a) {
                    a.clickedTarget = b, a.active && !a.sticky && !d("ContextualThing").containsIncludingLayers(a.getActive(), b) && !a.inTargetFlyout(b) && a.inActiveDialog() && !a.isIgnoredByModalLayer(b) && a.hide()
                })
            }, c("Event").Priority.URGENT)
        },
        o = function(e) {
            babelHelpers.inheritsLoose(b, e);

            function b() {
                var a;
                a = e.call(this) || this;
                a.active = null;
                a.togglers = {};
                a.setSticky(!1);
                j.push(babelHelpers.assertThisInitialized(a));
                a.subscribe(["show", "hide"], b.inform.bind(b));
                return n() || babelHelpers.assertThisInitialized(a)
            }
            var f = b.prototype;
            f.focusFirstTabbableDescendant = function(a, b) {
                if (!c("killswitch")("TOGGLER_FAST_SHOW")) {
                    b.$Toggler2 && b.$Toggler2.cancel();
                    var e = null;
                    b.$Toggler2 = c("queryThenMutateDOM")(function() {
                        var b = a.querySelector(".uiToggleFlyout");
                        b && (e = d("TabbableElements").findFirst(b) || b)
                    }, function() {
                        delete b.$Toggler2, e && (e.tabIndex == null && (e.tabIndex = -1), d("Focus").setWithoutOutline(e))
                    })
                } else {
                    var f = a.querySelector(".uiToggleFlyout");
                    if (f) {
                        f = d("TabbableElements").find(f)[0] || f;
                        f.tabIndex == null && (f.tabIndex = -1);
                        d("Focus").setWithoutOutline(f)
                    }
                }
            };
            f.show = function(a) {
                var b = p(this, a),
                    e = b.active;
                if (a !== e) {
                    e && b.hide();
                    b.active = a;
                    d("CSS").addClass(a, "openToggler");
                    e = c("DOM").scry(a, 'a[rel="toggle"]');
                    e.length > 0 && e[0].getAttribute("data-target") && d("CSS").removeClass(c("$")(e[0].getAttribute("data-target")), "toggleTargetClosed");
                    this.focusFirstTabbableDescendant(a, b);
                    e.length > 0 && (c("DOM").appendContent(a, b.getToggler("next")), c("DOM").prependContent(a, b.getToggler("prev")));
                    c("Event").listen(a, "keydown", function(d) {
                        if (c("Event").getKeyCode(d) === c("Keys").ESC && b.isShown()) {
                            var e = c("DOM").scry(a, 'a[rel="toggle"]')[0];
                            e && e.focus();
                            b.hide();
                            d.kill()
                        }
                    });
                    a.getAttribute("data-toggle-wc") && (b.__continuation = c("TimeSlice").getGuardedContinuation("Toggler.show inform"));
                    b.inform("show", b, "state")
                }
            };
            f.hide = function(a) {
                var b = p(this, a);
                b.$Toggler2 && b.$Toggler2.cancel();
                var e = b.active;
                if (e && (!a || a === e)) {
                    d("CSS").removeClass(e, "openToggler");
                    a = c("DOM").scry(e, 'a[rel="toggle"]');
                    a.length > 0 && a[0].getAttribute("data-target") && d("CSS").addClass(c("$")(a[0].getAttribute("data-target")), "toggleTargetClosed");
                    c("getObjectValues")(b.togglers).forEach(c("DOM").remove);
                    e.getAttribute("data-toggle-wc") && (b.__continuation = c("TimeSlice").getGuardedContinuation("Toggler.hide inform"));
                    b.inform("hide", b, "state");
                    b.active = null
                }
            };
            f.toggle = function(a) {
                var b = p(this, a);
                b.active === a ? b.hide() : b.show(a);
                m()
            };
            f.getActive = function() {
                return p(this).active
            };
            f.isShown = function() {
                return p(this).active && d("CSS").hasClass(p(this).active, "openToggler")
            };
            b.isNodeShown = function(a) {
                return d("CSS").hasClass(a, "openToggler")
            };
            f.inTargetFlyout = function(a) {
                var b = q(this.getActive());
                return Boolean(b && d("ContextualThing").containsIncludingLayers(b, a))
            };
            f.inActiveDialog = function() {
                var b = a.Dialog && a.Dialog.getCurrent();
                return !b || c("DOM").contains(b.getRoot(), this.getActive())
            };
            f.isIgnoredByModalLayer = function(a) {
                a = !!d("Parent").bySelector(a, "._3qw");
                var b = !!d("Parent").bySelector(this.getActive(), "._3qw");
                return a && !b
            };
            f.getToggler = function(a) {
                var b = p(this);
                b.togglers[a] || (b.togglers[a] = c("DOM").create("button", {
                    className: "hideToggler",
                    onfocus: function() {
                        var a = c("DOM").scry(b.active, 'a[rel="toggle"]')[0];
                        a && a.focus();
                        b.hide()
                    },
                    style: {
                        right: a === "next" ? "0" : ""
                    }
                }), b.togglers[a].setAttribute("type", "button"));
                return this.togglers[a]
            };
            f.setSticky = function(a) {
                var b = p(this);
                a = a !== !1;
                a !== b.sticky && (b.sticky = a, a ? b.$Toggler1 && b.$Toggler1.unsubscribe() : b.$Toggler1 = c("Arbiter").subscribe("pre_page_transition", b.hide.bind(b, null)));
                return b
            };
            f.setPrePageTransitionCallback = function(a) {
                var b = p(this);
                b.$Toggler1 && b.$Toggler1.unsubscribe();
                b.$Toggler1 = c("Arbiter").subscribe("pre_page_transition", a)
            };
            b.bootstrap = function(a) {
                a = a.parentNode;
                a != null || i(0, 3354);
                var c = b.getInstance(a);
                c != null || i(0, 3355);
                c.toggle(a)
            };
            b.createInstance = function(a) {
                var c = new b().setSticky(!0);
                d("DataStore").set(a, "toggler", c);
                return c
            };
            b.destroyInstance = function(a) {
                var b = d("DataStore").get(a, "toggler");
                b && b.$Toggler2 && b.$Toggler2.cancel();
                d("DataStore").remove(a, "toggler")
            };
            b.getInstance = function(a) {
                a = a;
                while (a) {
                    var e = d("DataStore").get(a, "toggler");
                    if (e) return e;
                    if (a instanceof Element)
                        if (d("CSS").hasClass(a, "uiToggleContext")) return b.createInstance(a);
                        else if (!c("killswitch")("JEWEL_TOGGLER_INSTANCE_FIXES") && d("CSS").hasClass(a, "uiToggleFlyout")) return b.createInstance(a).setSticky(!1);
                    a = c("getContextualParent")(a)
                }
                return k = k || new b()
            };
            b.listen = function(a, d, e) {
                return b.subscribe(c("createArrayFromMixed")(a), function(a, b) {
                    if (b.getActive() === d) {
                        if (b.__continuation) {
                            var c = b.__continuation;
                            delete b.__continuation;
                            return c(function() {
                                return e(a, b)
                            })
                        }
                        return e(a, b)
                    }
                })
            };
            return b
        }(c("mixin")(c("ArbiterMixin")));
    Object.assign(o, o.prototype, c("ArbiterMixin"));
    Object.assign(o, {
        subscribe: function(a) {
            return function(b, d) {
                b = c("createArrayFromMixed")(b);
                b.includes("show") && j.forEach(function(a) {
                    a.getActive() && setTimeout(d.bind(null, "show", a), 0)
                });
                return a(b, d)
            }
        }(o.subscribe.bind(o))
    });

    function p(a, b) {
        return a instanceof o ? a : o.getInstance(b)
    }

    function q(a) {
        a = c("DOM").scry(a, 'a[rel="toggle"]');
        return a.length > 0 && a[0].getAttribute("data-target") ? c("ge")(a[0].getAttribute("data-target")) : null
    }
    g["default"] = o
}), 98);
__d("isKeyActivation", ["Keys"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = 0,
            d = a.charCode;
        a = a.keyCode;
        d != null && d !== 0 ? b = d : a != null && a !== 0 && (b = a);
        return [c("Keys").RETURN, c("Keys").SPACE].includes(b)
    }
    g["default"] = a
}), 98);
__d("shield", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        if (typeof a !== "function") throw new TypeError("shield expects a function as the first argument");
        return function() {
            return a.apply(b, d)
        }
    }
    f["default"] = a
}), 66);
__d("Dock", ["csx", "ArbiterMixin", "BlueBar", "CSS", "ChatQuietLinks", "DOM", "DataStore", "Event", "Parent", "Scroll", "Style", "Toggler", "Vector", "emptyFunction", "isKeyActivation", "shield"], (function(a, b, c, d, e, f, g) {
    function c() {}
    Object.assign(c, b("ArbiterMixin"), {
        MIN_HEIGHT: 140,
        INITIAL_FLYOUT_HEIGHT_OFFSET: 10,
        init: function(a) {
            var c = this;
            this.init = b("emptyFunction");
            this.rootEl = a;
            this.calculateViewportDimensions();
            b("ChatQuietLinks").removeEmptyHrefs(this.rootEl);
            b("Event").listen(a, "click", this._onClick.bind(this));
            var d = a.querySelector(".fbNubButton");
            d && b("Event").listen(d, "keypress", this._onKeyPress.bind(this));
            b("Event").listen(window, "resize", this._onWindowResize.bind(this));
            b("Toggler").subscribe(["show", "hide"], function(d, e) {
                e = e.getActive();
                if (!b("DOM").contains(a, e)) return;
                if (b("CSS").hasClass(e, "fbNub")) c.notifyNub(e, d), d === "show" && c._resizeNubFlyout(e);
                else {
                    e = b("Parent").byClass(e, "fbNubFlyout");
                    e && b("CSS").conditionClass(e, "menuOpened", d === "show")
                }
            });
            this.inform("init", {}, "persistent")
        },
        calculateViewportDimensions: function() {
            return this.viewportDimensions = b("Vector").getViewportDimensions()
        },
        getFlyoutHeightOffset: function() {
            if (this.flyoutHeightOffset) return this.flyoutHeightOffset;
            this.flyoutHeightOffset = this.INITIAL_FLYOUT_HEIGHT_OFFSET + b("Vector").getElementDimensions(this.rootEl).y;
            var a = b("BlueBar").getBar();
            if (a) {
                var c = b("Style").isFixed(a) ? "viewport" : "document";
                this.flyoutHeightOffset += b("Vector").getElementPosition(a, c).y + b("Vector").getElementDimensions(a).y
            }
            return this.flyoutHeightOffset
        },
        toggle: function(a) {
            var c = this._findFlyout(a);
            if (!c) return;
            this.subscribe("init", function() {
                b("Toggler").toggle(a)
            })
        },
        show: function(a) {
            this.subscribe("init", function() {
                b("Toggler").show(a)
            })
        },
        showNub: function(a) {
            b("CSS").show(a)
        },
        hide: function(a) {
            this.subscribe("init", function() {
                var c = b("Toggler").getInstance(a);
                b("DOM").contains(a, c.getActive()) && c.hide()
            })
        },
        hideNub: function(a) {
            b("CSS").hide(a), this.hide(a)
        },
        setUseMaxHeight: function(a, c) {
            b("CSS").conditionClass(a, "maxHeight", c !== !1), this._resizeNubFlyout(a)
        },
        _resizeNubFlyout: function(a) {
            var c = this,
                d = this._findFlyout(a);
            if (!d || b("CSS").hasClass(a, "placeholder") || !(b("CSS").hasClass(a, "openToggler") || b("CSS").hasClass(a, "opened"))) return;
            var e = b("DOM").find(d, "div.fbNubFlyoutOuter"),
                f = b("DOM").find(e, "div.fbNubFlyoutInner"),
                g = b("DOM").find(f, "div.fbNubFlyoutBody"),
                h = b("CSS").hasClass(a, "canBeCompactTab"),
                i = b("Scroll").getTop(g),
                j = g.offsetHeight;
            b("Style").set(g, "height", "auto");
            var k = b("Vector").getElementDimensions(d),
                l = b("Vector").getElementDimensions(g),
                m = this.getMaxFlyoutHeight(a);
            b("Style").set(d, "max-height", m + "px");
            b("Style").set(e, "max-height", m + "px");
            k = b("Vector").getElementDimensions(d);
            e = b("Vector").getElementDimensions(f);
            m = e.y - l.y;
            f = k.y - m;
            e = parseInt(g.style.height || g.clientHeight, 10);
            e = f !== e;
            k.y > m && e && !h && b("Style").set(g, "height", f + "px");
            b("CSS").removeClass(d, "swapDirection");
            var n = b("Vector").getElementPosition(d).x;
            b("CSS").conditionClass(d, "swapDirection", function() {
                if (n < 0) return !0;
                return !k || !c.viewportDimensions ? !1 : n + k.x > c.viewportDimensions.x
            }());
            e && i + j >= l.y ? b("Scroll").setTop(g, g.scrollHeight) : b("Scroll").setTop(g, i);
            this.notifyNub(a, "resize")
        },
        getMaxFlyoutHeight: function(a) {
            a = this._findFlyout(a);
            var c = b("Vector").getElementPosition(a, "viewport");
            a = b("Vector").getElementDimensions(a);
            if (!this.viewportDimensions || !c) return 0;
            c = Math.max(this.MIN_HEIGHT, this.viewportDimensions.y - this.getFlyoutHeightOffset()) - (this.viewportDimensions.y - c.y - a.y);
            return Math.max(c, 0)
        },
        resizeAllFlyouts: function() {
            var a = this._getAllNubs(),
                b = a.length;
            while (b--) this._resizeNubFlyout(a[b])
        },
        _getAllNubs: function() {
            if (!this.rootEl) return [];
            var a = b("DOM").scry(this.rootEl, "div._50-v.openToggler:not(._s0f)");
            return a.concat(b("DOM").scry(this.rootEl, "div._50-v.opened:not(._s0f)"))
        },
        _onKeyPress: function(a) {
            var c = a.getTarget();
            c = b("Parent").byClass(c, "fbNub");
            b("isKeyActivation")(a) && c && this.toggle(c)
        },
        _onClick: function(a) {
            a = a.getTarget();
            var c = b("Parent").byClass(a, "fbNub");
            if (c) {
                b("Parent").byClass(a, "adsNubFlyoutCloseButton") && this.hide(c);
                if (b("Parent").byClass(a, "fbNubFlyoutTitlebar")) {
                    var d = b("Parent").byTag(a, "a");
                    a = a.nodeName == "INPUT" && a.getAttribute("type") == "submit";
                    if (!d && !a) {
                        this.hide(c);
                        return !1
                    }
                }
                this.notifyNub(c, "click")
            }
        },
        _onWindowResize: function(a) {
            this.calculateViewportDimensions(), this.resizeAllFlyouts()
        },
        _findFlyout: function(a) {
            return b("CSS").hasClass(a, "fbNubFlyout") ? a : b("DOM").scry(a, "div.fbNubFlyout")[0] || null
        },
        registerNubController: function(a, c) {
            b("DataStore").set(a, "dock:nub:controller", c), c.subscribe("nub/button/content-changed", b("shield")(this.inform, this, "resize", a)), c.subscribe("nub/flyout/content-changed", b("shield")(this._resizeNubFlyout, this, a))
        },
        unregisterNubController: function(a) {
            b("DataStore").remove(a, "dock:nub:controller")
        },
        notifyNub: function(a, c, d) {
            a = b("DataStore").get(a, "dock:nub:controller");
            a && a.inform(c, d)
        }
    });
    e.exports = a.Dock || c
}), null);
__d("KeyboardShortcutToken", ["KeyEventController"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, c) {
            this.$1 = !0, this.key = a, this.handler = b, this.filter = c.filter, this.persistOnTransition = c.persistOnTransition, this.shortcutInfo = c.shortcutInfo, this.register()
        }
        var b = a.prototype;
        b.register = function() {
            var a = this;
            if (!this.$1) return;
            this.token = c("KeyEventController").registerKey(this.key, this.handler, this.filter, !1, function() {
                return a.persistOnTransition
            })
        };
        b.remove = function() {
            this.token.remove(), this.$1 = !1
        };
        b.unregister = function() {
            this.token.remove()
        };
        b.isActive = function() {
            return this.$1
        };
        b.getKey = function() {
            return this.key
        };
        b.getShortcutInfo = function() {
            return this.shortcutInfo
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("NavigationMessage", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NAVIGATION_BEGIN: "NavigationMessage/navigationBegin",
        NAVIGATION_SELECT: "NavigationMessage/navigationSelect",
        NAVIGATION_FIRST_RESPONSE: "NavigationMessage/navigationFirstResponse",
        NAVIGATION_COMPLETED: "NavigationMessage/navigationCompleted",
        NAVIGATION_FAILED: "NavigationMessage/navigationFailed",
        NAVIGATION_COUNT_UPDATE: "NavigationMessage/navigationCount",
        NAVIGATION_FAVORITE_UPDATE: "NavigationMessage/navigationFavoriteUpdate",
        NAVIGATION_ITEM_REMOVED: "NavigationMessage/navigationItemRemoved",
        NAVIGATION_ITEM_HIDDEN: "NavigationMessage/navigationItemHidden",
        INTERNAL_LOADING_BEGIN: "NavigationMessage/internalLoadingBegin",
        INTERNAL_LOADING_COMPLETED: "NavigationMessage/internalLoadingCompleted"
    });
    f["default"] = a
}), 66);
__d("PageTransitions", ["cr:917439"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:917439")
}), 98);
__d("translateKey", ["fbt", "invariant"], (function(a, b, c, d, e, f, g, h, i) {
    var j = {
        alt: h._( /*FBT_CALL*/ "alt" /*FBT_CALL*/ ),
        enter: h._( /*FBT_CALL*/ "enter" /*FBT_CALL*/ ),
        "delete": h._( /*FBT_CALL*/ "delete" /*FBT_CALL*/ ),
        shift: h._( /*FBT_CALL*/ "shift" /*FBT_CALL*/ ),
        opt: h._( /*FBT_CALL*/ "opt" /*FBT_CALL*/ ),
        ctrl: h._( /*FBT_CALL*/ "ctrl" /*FBT_CALL*/ ),
        cmd: h._( /*FBT_CALL*/ "cmd" /*FBT_CALL*/ ),
        esc: h._( /*FBT_CALL*/ "esc" /*FBT_CALL*/ ),
        tab: h._( /*FBT_CALL*/ "tab" /*FBT_CALL*/ ),
        up: h._( /*FBT_CALL*/ "up" /*FBT_CALL*/ ),
        down: h._( /*FBT_CALL*/ "down" /*FBT_CALL*/ ),
        right: h._( /*FBT_CALL*/ "right" /*FBT_CALL*/ ),
        left: h._( /*FBT_CALL*/ "left" /*FBT_CALL*/ ),
        page_up: h._( /*FBT_CALL*/ "page up" /*FBT_CALL*/ ),
        page_down: h._( /*FBT_CALL*/ "page down" /*FBT_CALL*/ ),
        home: h._( /*FBT_CALL*/ "home" /*FBT_CALL*/ ),
        end: h._( /*FBT_CALL*/ "end" /*FBT_CALL*/ )
    };

    function a(a) {
        if (Object.prototype.hasOwnProperty.call(j, a)) return j[a];
        a.length === 1 || i(0, 2507);
        return a
    }
    g["default"] = a
}), 98);
__d("KeyboardShortcuts", ["csx", "cx", "fbt", "Arbiter", "BasicFBNux", "CSS", "Dock", "KeyEventController", "KeyboardShortcutToken", "Layer", "ModalLayer", "NavigationMessage", "PageTransitions", "Run", "emptyFunction", "translateKey"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        _arbiter: null,
        _hasTriggeredShortcut: !1,
        _flyoutNub: null,
        _nubNux: null,
        _nubNuxID: null,
        _tokenLayers: [],
        showInfo: c("emptyFunction"),
        register: function(a, b, d) {
            var e = d ? d : {};
            d = function(a, c) {
                b.call(k, a, c), e.allowDefault || a.prevent(), k._hasTriggeredShortcut || k._handleFirstShortcutTriggered()
            };
            var f = e.baseFilters || [c("KeyEventController").defaultFilter],
                g = function(a, b) {
                    for (var c = f, d = Array.isArray(c), g = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (d) {
                            if (g >= c.length) break;
                            h = c[g++]
                        } else {
                            g = c.next();
                            if (g.done) break;
                            h = g.value
                        }
                        h = h;
                        if (!h(a, b)) return !1
                    }
                    return !e.filter || e.filter(a, b)
                };
            a = new(c("KeyboardShortcutToken"))(a, d, {
                filter: g,
                persistOnTransition: e.persistOnTransition,
                shortcutInfo: e.shortcutInfo
            });
            k._tokenLayers.length || k._tokenLayers.push([]);
            k._tokenLayers[k._tokenLayers.length - 1].push(a);
            k.inform("token_added");
            return a
        },
        init: function() {
            k._cleanup = k._cleanup.bind(k), d("Run").onLeave(k._cleanup), c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN, k._cleanup), c("Layer").subscribe("show", function(a, b) {
                b.hasBehavior(c("ModalLayer")) && k.pushLayer()
            }), c("Layer").subscribe("hide", function(a, b) {
                b.hasBehavior(c("ModalLayer")) && k.popLayer()
            }), k.register("SLASH", function() {
                var a = k._getFlyoutNub();
                a && c("Dock").toggle(a)
            }, {
                filter: function(a, b) {
                    return a.getModifiers().shift
                },
                persistOnTransition: !0,
                shortcutInfo: {
                    displayKeys: [c("translateKey")("?")],
                    description: j._( /*FBT_CALL*/ "Show this help dialogue" /*FBT_CALL*/ )
                }
            })
        },
        _cleanup: function() {
            var a = [];
            k._tokenLayers.forEach(function(b) {
                var c = [];
                b.forEach(function(a) {
                    a.isActive() && c.push(a)
                });
                c.length && a.push(c)
            });
            k._tokenLayers = a;
            k.inform("cleanup");
            c("PageTransitions").registerCompletionCallback(function() {
                d("Run").onLeave(k._cleanup), c("Arbiter").subscribe(c("NavigationMessage").NAVIGATION_BEGIN, k._cleanup)
            })
        },
        pushLayer: function() {
            var a = k._getTopLayer();
            a && a.forEach(function(a) {
                a.unregister()
            });
            k._tokenLayers.push([])
        },
        popLayer: function() {
            if (k._tokenLayers.length === 0) return;
            var a = k._tokenLayers.pop();
            a.forEach(function(a) {
                a.remove()
            });
            a = k._getTopLayer();
            a && a.forEach(function(a) {
                a.register()
            })
        },
        _getTopLayer: function() {
            return !k._tokenLayers.length ? null : k._tokenLayers[k._tokenLayers.length - 1]
        },
        _getBaseLayer: function() {
            return !k._tokenLayers.length ? null : k._tokenLayers[0]
        },
        getShortcutInfos: function() {
            var a = [],
                b = k._getBaseLayer();
            b && b.forEach(function(b) {
                var c = b.getShortcutInfo();
                b.isActive() && c != null && a.push(c)
            });
            return a
        },
        _getArbiterInstance: function() {
            k._arbiter || (k._arbiter = new(c("Arbiter"))());
            return k._arbiter
        },
        inform: function(a, b, c) {
            return k._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return k._getArbiterInstance().subscribe(a, b, c)
        },
        unsubscribe: function(a) {
            k._getArbiterInstance().unsubscribe(a)
        },
        _handleFirstShortcutTriggered: function() {
            k._hasTriggeredShortcut = !0;
            var a = k._getFlyoutNub();
            a && (d("CSS").removeClass(a, "_ur5"), k._nubNux && k._nubNuxID && (k._nubNux.show(), d("BasicFBNux").onView(k._nubNuxID), k._nubNux.subscribe("hide", d("BasicFBNux").onDismiss.bind(k, k._nubNuxID))))
        },
        _getFlyoutNub: function() {
            k._flyoutNub || (k._flyoutNub = document.querySelector("#pagelet_dock ._rz3"));
            return k._flyoutNub
        },
        showShortcutFlyout: function() {
            k._hasTriggeredShortcut || k._handleFirstShortcutTriggered();
            var a = k._getFlyoutNub();
            a && c("Dock").show(a)
        },
        hasFlyoutToShow: function() {
            return k._getFlyoutNub() != null && k.getShortcutInfos().length > 0
        },
        initNUXEvent: function(a, b) {
            k._nubNux = a, k._nubNuxID = b
        }
    };
    k.init();
    a = k;
    g["default"] = a
}), 98);
__d("PopoverMenuInterface", ["ArbiterMixin", "emptyFunction", "mixin"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.done = function() {
            this.inform("done")
        };
        return b
    }(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
        getRoot: c = b("emptyFunction"),
        onShow: c,
        onHide: c,
        focusAnItem: c.thatReturnsFalse,
        blur: c,
        handleKeydown: c.thatReturnsFalse,
        destroy: c
    });
    e.exports = a
}), null);
__d("CSSFade", ["cx", "invariant", "CSS", "DataStore", "Event", "Style", "requestAnimationFrameAcrossTransitions"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "css-fade-animation",
        j = "css-show-animation",
        k = "CSSFade_hide",
        l = "CSSFade_show";
    a = document.createElement("div").animate !== void 0;
    var m = {
        cancel: function() {}
    };

    function n(a, c) {
        a != null || h(0, 5875);
        a = b("DataStore").get(a, c);
        a && a.cancel();
        return a
    }

    function o(a, b, c) {
        a = ((a = a) != null ? (a = a.style) != null ? a.animation : a : a) || "";
        b = b + "s " + c;
        a.length > 5 && (b = a.slice(0, -1) + (", " + b));
        return b
    }

    function p(a, b) {
        a = ((a = a) != null ? (a = a.style) != null ? a.animation : a : a) || "";
        a = a.split(",");
        var c = a.findIndex(function(a) {
            return a.indexOf(b) > -1
        });
        c !== -1 && a.splice(c, 1);
        return a.join(",")
    }
    c = {
        show: function(a, c) {
            c === void 0 && (c = {});
            var d = c.duration != null ? c.duration / 1e3 : .3;
            n(a, i);
            n(a, j);
            b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
            b("requestAnimationFrameAcrossTransitions")(function() {
                a.style.animation = o(a, d, l)
            });
            var e = b("Event").listen(a, "animationend", function() {
                    c.callback && c.callback(), a.style.animation = p(a, l)
                }),
                f = {
                    cancel: function() {
                        a.style.animation = p(a, l), e.remove(), f.cancel = function() {}
                    }
                };
            b("DataStore").set(a, j, f);
            return f
        },
        hide: function(a, c) {
            c === void 0 && (c = {});
            var d = function() {
                b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem"), c.callback && c.callback(), a.style.animation = p(a, k)
            };
            if (c.simple) {
                d();
                return m
            }
            var e = c.duration != null ? c.duration / 1e3 : .3;
            n(a, j);
            n(a, i);
            b("requestAnimationFrameAcrossTransitions")(function() {
                a.style.animation = o(a, e, k)
            });
            var f = b("Event").listen(a, "animationend", d),
                g = {
                    cancel: function() {
                        a.style.animation = p(a, k), f.remove(), g.cancel = function() {}
                    }
                };
            b("DataStore").set(a, i, g);
            return g
        }
    };
    d = {
        show: function(a, c) {
            c === void 0 && (c = {});
            var d = c.duration != null ? c.duration : 300;
            n(a, i);
            n(a, j);
            b("CSS").removeClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
            b("Style").set(a, "opacity", "1");
            var e = c.peekStateFade ? "0.6" : "0";
            e = a.animate([{
                opacity: e
            }, {
                opacity: "1.0"
            }], {
                duration: d
            });
            c.callback && (e.onfinish = c.callback);
            b("DataStore").set(a, j, e);
            return e
        },
        hide: function(a, c) {
            c === void 0 && (c = {});
            var d = c.duration != null ? c.duration : 300;
            n(a, j);
            if (c.simple === !0) {
                b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem");
                return m
            } else {
                n(a, i);
                b("Style").set(a, "opacity", "0");
                var e = c.peekStateFade ? "0.4" : "0";
                e = a.animate([{
                    opacity: "1.0"
                }, {
                    opacity: e
                }], {
                    duration: d
                });
                e.onfinish = function() {
                    b("CSS").addClass(a, c.invisible ? "invisible_elem" : "hidden_elem"), c.callback && c.callback()
                };
                b("DataStore").set(a, i, e);
                return e
            }
        }
    };
    e.exports = a ? d : c
}), null);
__d("SimpleDrag", ["ArbiterMixin", "Event", "SubscriptionsHandler", "UserAgent_DEPRECATED", "Vector", "emptyFunction"], (function(a, b, c, d, e, f) {
    function a(a) {
        this.minDragDistance = 0, this._subscriptions = new(b("SubscriptionsHandler"))(), this._subscriptions.addSubscriptions(b("Event").listen(a, "mousedown", this._start.bind(this)))
    }
    Object.assign(a.prototype, b("ArbiterMixin"), {
        setMinDragDistance: function(a) {
            this.minDragDistance = a
        },
        destroy: function() {
            this._subscriptions.release()
        },
        _start: function(a) {
            var c = this,
                d = !1,
                e = !0,
                f = null;
            this.inform("mousedown", a) && (e = !1);
            if (this.minDragDistance) f = b("Vector").getEventPosition(a);
            else {
                d = !0;
                var g = this.inform("start", a);
                if (g === !0) e = !1;
                else if (g === !1) {
                    d = !1;
                    return
                }
            }
            g = b("UserAgent_DEPRECATED").ie() < 9 ? document.documentElement : window;
            var h = b("Event").listen(g, {
                selectstart: e ? b("Event").prevent : b("emptyFunction"),
                mousemove: function(a) {
                    if (!d) {
                        var e = b("Vector").getEventPosition(a);
                        if (f.distanceTo(e) < c.minDragDistance) return;
                        d = !0;
                        if (c.inform("start", a) === !1) {
                            d = !1;
                            return
                        }
                    }
                    c.inform("update", a)
                },
                mouseup: function(a) {
                    for (var b in h) h[b].remove();
                    d ? c.inform("end", a) : c.inform("click", a)
                }
            });
            e && a.prevent()
        }
    });
    e.exports = a
}), null);
__d("firstx", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a) {
        for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var d;
            if (b) {
                if (c >= a.length) break;
                d = a[c++]
            } else {
                c = a.next();
                if (c.done) break;
                d = c.value
            }
            d = d;
            return d
        }
        h(0, 1145)
    }
    g["default"] = a
}), 98);
__d("getScrollableAreaContainingNode", ["DataStore", "Parent"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = b("Parent").byClass(a, "uiScrollableArea");
        return a ? b("DataStore").get(a, "ScrollableArea") : null
    }
    e.exports = a
}), null);
__d("ScrollableArea", ["ArbiterMixin", "BrowserSupport", "CSS", "CSSFade", "DOM", "DOMScroll", "DataStore", "Deferred", "Event", "FocusEvent", "Run", "Scroll", "SimpleDrag", "Style", "SubscriptionsHandler", "TimeSlice", "UserAgent_DEPRECATED", "Vector", "clearTimeout", "createCancelableFunction", "emptyFunction", "firstx", "getScrollableAreaContainingNode", "mixin", "promiseDone", "queryThenMutateDOM", "requireDeferred", "setTimeoutAcrossTransitions", "throttle"], (function(a, b, c, d, e, f) {
    var g = b("requireDeferred")("Animation").__setRef("ScrollableArea"),
        h = 12;
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            var e;
            e = a.call(this) || this;
            e.adjustGripper = function() {
                var a = function() {
                    b("queryThenMutateDOM")(function() {
                        return e._needsGripper()
                    }, function(a) {
                        a && (b("Style").set(e._gripper, "height", e._gripperHeight + "px"), e._slideGripper())
                    }), e._throttledShowGripperAndShadows()
                };
                a = b("TimeSlice").guard(a, "ScrollableArea adjustGripper", {
                    propagationType: b("TimeSlice").PropagationType.ORPHAN
                });
                a();
                return babelHelpers.assertThisInitialized(e)
            };
            e._computeHeights = function() {
                e._containerHeight = e._elem.clientHeight, e._contentHeight = e._content.offsetHeight, e._trackHeight = e._track.offsetHeight, e._gripperHeight = Math.max(e._containerHeight / e._contentHeight * e._trackHeight, h)
            };
            e._showGripperAndShadows = function() {
                b("queryThenMutateDOM")(function() {
                    return {
                        needsGripper: e._needsGripper(),
                        top: b("Scroll").getTop(e._wrap) > 0,
                        isScrolledToBottom: e.isScrolledToBottom()
                    }
                }, function(a) {
                    var c = a.needsGripper,
                        d = a.top;
                    a = a.isScrolledToBottom;
                    b("CSS").conditionShow(e._gripper, c);
                    b("CSS").conditionClass(e._elem, "contentBefore", d);
                    b("CSS").conditionClass(e._elem, "contentAfter", !a)
                })
            };
            e._respondMouseMove = function() {
                if (!e._mouseOver || e._isFocussed) return;
                var a = e._options.fade !== !1,
                    c = e._mousePos,
                    d = b("Vector").getElementPosition(e._track).x,
                    f = b("Vector").getElementDimensions(e._track).x;
                d = Math.abs(d + f / 2 - c.x);
                f = b("BrowserSupport").hasPointerEvents() && d <= 10;
                f && !e._trackIsHovered ? (e._trackIsHovered = !0, b("CSS").addClass(e._elem, "uiScrollableAreaTrackOver"), e.throttledAdjustGripper()) : !f && e._trackIsHovered && (e._trackIsHovered = !1, b("CSS").removeClass(e._elem, "uiScrollableAreaTrackOver"));
                a && (d < 25 ? e.showScrollbar({
                    hideAfterDelay: !1
                }) : !e._options.no_fade_on_hover && !e._isFocussed && e.hideScrollbar({
                    hideAfterDelay: !0,
                    shouldFade: !0
                }))
            };
            if (!c) return babelHelpers.assertThisInitialized(e);
            d = d || {};
            e._elem = c;
            e._wrap = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaWrap"));
            e._body = b("firstx")(b("DOM").scry(e._wrap, "div.uiScrollableAreaBody"));
            e._content = b("firstx")(b("DOM").scry(e._body, "div.uiScrollableAreaContent"));
            e._track = b("firstx")(b("DOM").scry(c, "div.uiScrollableAreaTrack"));
            e._trackIsHovered = !1;
            e._isFocussed = !1;
            e._gripper = b("firstx")(b("DOM").scry(e._track, "div.uiScrollableAreaGripper"));
            e._options = d;
            e._throttledComputeHeights = b("throttle").withBlocking(e._computeHeights, 250, babelHelpers.assertThisInitialized(e));
            e.throttledAdjustGripper = b("throttle").withBlocking(e.adjustGripper, 250, babelHelpers.assertThisInitialized(e));
            e.throttledAdjustGripper = b("TimeSlice").guard(e.throttledAdjustGripper, "ScrollableArea throttledAdjustGripper", {
                propagationType: b("TimeSlice").PropagationType.ORPHAN
            });
            e._throttledShowGripperAndShadows = b("throttle").withBlocking(e._showGripperAndShadows, 250, babelHelpers.assertThisInitialized(e));
            e._throttledRespondMouseMove = b("throttle")(e._respondMouseMove, 250, babelHelpers.assertThisInitialized(e));
            b("setTimeoutAcrossTransitions")(e.adjustGripper.bind(babelHelpers.assertThisInitialized(e)), 0);
            e._listeners = new(b("SubscriptionsHandler"))();
            e._listeners.addSubscriptions(b("Event").listen(e._wrap, "scroll", e._handleScroll.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mousemove", e._handleMouseMove.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(e._track, "click", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
            b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", e._handleClickOnTrack.bind(babelHelpers.assertThisInitialized(e))));
            if (d.fade !== !1) {
                var f;
                (f = e._listeners).addSubscriptions.apply(f, [b("Event").listen(c, "mouseenter", e._handleMouseEnter.bind(babelHelpers.assertThisInitialized(e))), b("Event").listen(c, "mouseleave", e._handleMouseLeave.bind(babelHelpers.assertThisInitialized(e)))].concat(e._attachFocusListeners(e._wrap)))
            } else b("BrowserSupport").hasPointerEvents() && e._listeners.addSubscriptions(b("Event").listen(c, "mouseleave", function() {
                e._isFocussed || (e._trackIsHovered = !1, b("CSS").removeClass(c, "uiScrollableAreaTrackOver"))
            }));
            (b("UserAgent_DEPRECATED").webkit() || b("UserAgent_DEPRECATED").chrome()) && e._listeners.addSubscriptions(b("Event").listen(c, "mousedown", function() {
                var a = b("Event").listen(window, "mouseup", function() {
                    b("Scroll").getLeft(c) && b("Scroll").setLeft(c, 0), a.remove()
                })
            }));
            e._drag = e.initDrag();
            b("DataStore").set(e._elem, "ScrollableArea", babelHelpers.assertThisInitialized(e));
            d.persistent || (e._destroy = b("createCancelableFunction")(e._destroy.bind(babelHelpers.assertThisInitialized(e))), b("Run").onLeave(e._destroy));
            d.shadow !== !1 && b("CSS").addClass(e._elem, "uiScrollableAreaWithShadow");
            return e
        }
        var d = c.prototype;
        d.getContentHeight = function() {
            return this._contentHeight
        };
        d.getElement = function() {
            return this._elem
        };
        d.initDrag = function() {
            var a = this,
                c = b("BrowserSupport").hasPointerEvents(),
                d = new(b("SimpleDrag"))(c ? this._elem : this._gripper);
            d.subscribe("start", function(e, f) {
                if (!(f.which && f.which === 1 || f.button && f.button === 1)) return !1;
                e = b("Vector").getEventPosition(f, "viewport");
                if (c) {
                    var g = a._gripper.getBoundingClientRect();
                    if (e.x < g.left || e.x > g.right || e.y < g.top || e.y > g.bottom) return !1
                }
                f.stopPropagation();
                a.inform("grip_start");
                var h = e.y,
                    i = a._gripper.offsetTop;
                b("CSS").addClass(a._elem, "uiScrollableAreaDragging");
                var j = d.subscribe("update", function(c, d) {
                        c = b("Vector").getEventPosition(d, "viewport").y - h;
                        a._throttledComputeHeights();
                        d = a._contentHeight - a._containerHeight;
                        c = i + c;
                        var e = a._trackHeight - a._gripperHeight;
                        c = Math.max(Math.min(c, e), 0);
                        c = c / e * d;
                        b("Scroll").setTop(a._wrap, c)
                    }),
                    k = d.subscribe("end", function() {
                        d.unsubscribe(j), d.unsubscribe(k), b("CSS").removeClass(a._elem, "uiScrollableAreaDragging"), a.inform("grip_end")
                    });
                return void 0
            });
            return d
        };
        d._attachFocusListeners = function(a) {
            var c = this,
                d;
            return [b("FocusEvent").listen(a, function(a) {
                d && (d.reject(), d = null), a ? (d = new(b("Deferred"))(), b("promiseDone")(d.getPromise(), function() {
                    c._isFocussed = !0, c._trackIsHovered = !0, b("queryThenMutateDOM")(null, function() {
                        b("CSS").addClass(c._elem, "uiScrollableAreaTrackOver")
                    }), c.showScrollbar({
                        hideAfterDelay: !1
                    }), d = null
                }, function() {
                    d = null
                })) : (c._isFocussed = !1, c._mouseOver ? c._respondMouseMove() : (b("queryThenMutateDOM")(null, function() {
                    b("CSS").removeClass(c._elem, "uiScrollableAreaTrackOver")
                }), c.hideScrollbar({
                    hideAfterDelay: !1,
                    shouldFade: !1
                })))
            }), b("Event").listen(document.documentElement, "keyup", function(a) {
                d && d.resolve()
            })]
        };
        d._needsGripper = function() {
            this._throttledComputeHeights();
            return this._gripperHeight < this._trackHeight
        };
        d._slideGripper = function() {
            var a = this;
            b("queryThenMutateDOM")(function() {
                return b("Scroll").getTop(a._wrap) / (a._contentHeight - a._containerHeight) * (a._trackHeight - a._gripperHeight)
            }, function(c) {
                b("Style").set(a._gripper, "top", c + "px")
            })
        };
        d.destroy = function() {
            this._destroy(), this._destroy.cancel && this._destroy.cancel()
        };
        d._destroy = function() {
            this._listeners && this._listeners.release(), this._elem && b("DataStore").remove(this._elem, "ScrollableArea"), this._drag && this._drag.destroy()
        };
        d._handleClickOnTrack = function(a) {
            var c = b("Vector").getEventPosition(a, "viewport"),
                d = this._gripper.getBoundingClientRect();
            c.x < d.right && c.x > d.left && (c.y < d.top ? this.setScrollTop(this.getScrollTop() - this._elem.clientHeight) : c.y > d.bottom && this.setScrollTop(this.getScrollTop() + this._elem.clientHeight), a.kill())
        };
        d._handleMouseMove = function(a) {
            var c = this._options.fade !== !1;
            (b("BrowserSupport").hasPointerEvents() || c) && (this._mousePos = b("Vector").getEventPosition(a), this._throttledRespondMouseMove())
        };
        d._handleScroll = function(a) {
            this._needsGripper() && this._slideGripper(), this.throttledAdjustGripper(), this._options.fade !== !1 && !this._isFocussed && this.showScrollbar({
                hideAfterDelay: !0
            }), this.inform("scroll")
        };
        d._handleMouseLeave = function(a) {
            this._mouseOver = !1, this._mousePos = b("Vector").getEventPosition(a), this._isFocussed || this.hideScrollbar({
                hideAfterDelay: !0,
                shouldFade: !0
            })
        };
        d._handleMouseEnter = function(a) {
            this._mouseOver = !0, this._mousePos = b("Vector").getEventPosition(a), this._isFocussed || this.showScrollbar({
                hideAfterDelay: !0
            })
        };
        d.hideScrollbar = function(a) {
            var c = this,
                d = a.hideAfterDelay,
                e = a.shouldFade;
            if (this._hideTimeout || !this._scrollbarVisible) return this;
            var f = function() {
                c._scrollbarVisible = !1, b("CSSFade").hide(c._track, {
                    simple: !e,
                    invisible: b("CSS").hasClass(c._track, "invisible_elem")
                })
            };
            d ? this._hideTimeout = b("setTimeoutAcrossTransitions")(function() {
                c._hideTimeout = null, f()
            }, 750) : f();
            return this
        };
        d.pageDown = function(a, b) {
            this._scrollPage(1, a, b)
        };
        d.pageUp = function(a, b) {
            this._scrollPage(-1, a, b)
        };
        d._scrollPage = function(a, b, c) {
            a = a * this._containerHeight;
            var d = this.getScrollHeight() - this._containerHeight;
            d = Math.max(0, Math.min(d, this.getScrollTop() + a));
            this.setScrollTop(d, b, c)
        };
        d.resize = function() {
            this._body.style.width && (this._body.style.width = "");
            var a = b("DOMScroll").getScrollbarSize();
            a > 0 && b("Style").set(this._body, "margin-right", -a + "px");
            return this
        };
        d.showScrollbar = function(a) {
            var c = this,
                d = a.hideAfterDelay;
            this._hideTimeout && (b("clearTimeout")(this._hideTimeout), this._hideTimeout = null);
            if (this._scrollbarVisible) return this;
            this._scrollbarVisible = !0;
            b("queryThenMutateDOM")(null, function() {
                b("CSSFade").show(c._track, {
                    duration: 0,
                    invisible: b("CSS").hasClass(c._track, "invisible_elem")
                }), c.throttledAdjustGripper(), d && c.hideScrollbar({
                    hideAfterDelay: !0,
                    shouldFade: !c._options.no_fade_on_hover
                })
            });
            return this
        };
        d.distanceToBottom = function() {
            this._computeHeights();
            var a = Math.round(b("Scroll").getTop(this._wrap));
            return this._contentHeight - (a + this._containerHeight)
        };
        d.isScrolledToBottom = function() {
            return this.distanceToBottom() <= 0
        };
        d.isScrolledToTop = function() {
            return b("Scroll").getTop(this._wrap) === 0
        };
        d.scrollToBottom = function(a, b) {
            this.setScrollTop(this._wrap.scrollHeight, a, b)
        };
        d.scrollToTop = function(a, b) {
            this.setScrollTop(0, a, b)
        };
        d.scrollIntoView = function(a, c, d) {
            var e = this._wrap.clientHeight,
                f = a.offsetHeight,
                g = b("Scroll").getTop(this._wrap),
                h = g + e;
            a = this.getScrollOffsetForElement(a);
            var i = a + f;
            if (a < g || e < f) return this.setScrollTop(a, c, {
                callback: d
            });
            else if (i > h) return this.setScrollTop(g + (i - h), c, {
                callback: d
            });
            d && d();
            return b("emptyFunction")
        };
        d.getScrollOffsetForElement = function(a) {
            var b = 0;
            while (a != null && a !== this._wrap) b += a.offsetTop, a = a.offsetParent;
            return b
        };
        d.scrollElemToTop = function(a, b, c) {
            this.setScrollTop(a.offsetTop, b, {
                callback: c
            })
        };
        d.poke = function() {
            var a, c = (a = b("Scroll")).getTop(this._wrap);
            a.setTop(this._wrap, a.getTop(this._wrap) + 1);
            a.setTop(this._wrap, a.getTop(this._wrap) - 1);
            a.setTop(this._wrap, c);
            if (this._isFocussed) return this;
            else return this.showScrollbar({
                hideAfterDelay: !1
            })
        };
        d.getClientHeight = function() {
            return this._wrap.clientHeight
        };
        d.getScrollTop = function() {
            return b("Scroll").getTop(this._wrap)
        };
        d.getScrollHeight = function() {
            return this._wrap.scrollHeight
        };
        d.setScrollTop = function(a, b, c) {
            c === void 0 && (c = {});
            var d;
            if (b !== !1) {
                b = g.getModuleIfRequired();
                b != null ? d = this._animatedSetScrollTop(b, a, c) : this._simpleSetScrollTop(a, c)
            } else this._simpleSetScrollTop(a, c);
            return function() {
                d && d.stop(), d = null
            }
        };
        d._simpleSetScrollTop = function(a, c) {
            b("Scroll").setTop(this._wrap, a), c.callback && c.callback()
        };
        d._animatedSetScrollTop = function(a, b, c) {
            this._scrollTopAnimation && this._scrollTopAnimation.stop();
            var d = c.duration || 250,
                e = c.ease || a.ease.end;
            this._scrollTopAnimation = new a(this._wrap).to("scrollTop", b).ease(e).duration(d).ondone(c.callback).go();
            return this._scrollTopAnimation
        };
        c.renderDOM = function() {
            var a, c = (a = b("DOM")).create("div", {
                    className: "uiScrollableAreaContent"
                }),
                d = a.create("div", {
                    className: "uiScrollableAreaBody"
                }, c),
                e = a.create("div", {
                    className: "uiScrollableAreaWrap scrollable"
                }, d);
            a = a.create("div", {
                className: "uiScrollableArea native"
            }, e);
            return {
                root: a,
                wrap: e,
                body: d,
                content: c
            }
        };
        c.fromNative = function(a, d) {
            if (!b("CSS").hasClass(a, "uiScrollableArea") || !b("CSS").hasClass(a, "native")) return void 0;
            d = d || {};
            b("CSS").removeClass(a, "native");
            var e = b("DOM").create("div", {
                className: "uiScrollableAreaTrack"
            }, b("DOM").create("div", {
                className: "uiScrollableAreaGripper"
            }));
            d.fade !== !1 ? (b("CSS").addClass(a, "fade"), b("CSS").addClass(e, "hidden_elem")) : b("CSS").addClass(a, "nofade");
            d.tabIndex != null ? (b("DOM").setAttributes(e, {
                tabIndex: d.tabIndex
            }), b("DOM").prependContent(a, e)) : b("DOM").appendContent(a, e);
            e = new c(a, d);
            e.resize();
            return e
        };
        c.getInstance = function(a) {
            return b("getScrollableAreaContainingNode")(a)
        };
        c.poke = function(a) {
            a = c.getInstance(a);
            a && a.poke()
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    e.exports = a
}), null);
__d("Menu", ["cx", "BehaviorsMixin", "CSS", "DOM", "DataStore", "Event", "Keys", "Parent", "PopoverMenuInterface", "ScrollableArea", "Style", "SubscriptionsHandler", "UserAgent", "debounce"], (function(a, b, c, d, e, f, g, h) {
    var i = 500;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(d, e) {
            var f;
            f = a.call(this) || this;
            f._items = [];
            f._keysSoFar = "";
            f._items = d.map(b.buildItemFromData);
            f._config = e || {};
            f._theme = e.theme || {};
            f._subscriptions = new(c("SubscriptionsHandler"))();
            f._clearKeysSoFarAfterDelay = c("debounce")(function() {
                f._keysSoFar = ""
            }, i);
            return f
        }
        b.buildItemFromData = function(a) {
            if (a.ctor) return new a.ctor(a);
            else return new a.type(a.props)
        };
        var e = b.prototype;
        e.addItem = function(a) {
            this._addItem(a)
        };
        e.addItemBefore = function(a, b) {
            this._addItem(a, b, !1)
        };
        e.addItemAfter = function(a, b) {
            this._addItem(a, b, !0)
        };
        e._addItem = function(a, b, c) {
            var d = this._items.indexOf(a);
            if (d >= 0) {
                var e = c ? -1 : 1;
                if (this._items[d + e] == b) return;
                this._items.splice(d, 1)
            }
            if (b) {
                d = this._items.indexOf(b);
                if (d < 0) throw new Error("reference item must already be in the menu");
                c && d++;
                this._items.splice(d, 0, a)
            } else this._items.push(a);
            this._root && this._insertItem(a, b, c)
        };
        e.removeItem = function(a) {
            var b = this._items.indexOf(a);
            if (b < 0) return;
            this._items.splice(b, 1);
            this._root && c("DOM").remove(a.getRoot())
        };
        e.forEachItem = function(a) {
            this._items.forEach(a)
        };
        e.getFocusedItem = function() {
            return this._focused
        };
        e.getItemAt = function(a) {
            return this._items[a] || null
        };
        e.getRoot = function() {
            this._root || this._render();
            return this._root
        };
        e.onShow = function() {
            this._config.maxheight && (!this._scrollableArea ? this._scrollableArea = c("ScrollableArea").fromNative(this._scrollableElems.root, {
                fade: !0
            }) : this._scrollableArea.resize()), this.inform("show")
        };
        e.onHide = function() {
            this.blur(), this.inform("hide")
        };
        e.focusAnItem = function(a) {
            return this._attemptFocus(a || 0, 1)
        };
        e.blur = function() {
            if (this._focused) {
                var a = this._focused;
                this._focused.blur();
                this._focused = null;
                this.inform("blur", {
                    item: a
                })
            }
        };
        e.handleKeydown = function(a, b) {
            if (!this._items.length) return !1;
            var d = this._items.indexOf(this._focused);
            switch (a) {
                case c("Keys").UP:
                case c("Keys").DOWN:
                    var e = a === c("Keys").UP,
                        f = e ? -1 : 1;
                    e = e ? this._items.length - 1 : 0;
                    return d === -1 ? this._attemptFocus(e, f) : this._attemptFocus(d + f, f);
                case c("Keys").HOME:
                    return this._attemptFocus(0, 1);
                case c("Keys").END:
                    return this._attemptFocus(this._items.length - 1, -1);
                case c("Keys").SPACE:
                    if (this._items.indexOf(this._focused) !== -1) {
                        this._handleItemClick(this._focused, b);
                        return !0
                    }
                    return !1;
                case c("Keys").RIGHT:
                case c("Keys").LEFT:
                case c("Keys").INSERT:
                case c("Keys").DELETE:
                    return !1;
                default:
                    e = this._findItemToFocus(a, d);
                    return !!(e && this._focusItem(e))
            }
        };
        e._findItemToFocus = function(a, b) {
            a = String.fromCharCode(a).toLowerCase();
            this._keysSoFar || (this._searchIndex = b, this._itemToFocus = this._focused || this._items[0]);
            this._keysSoFar += a;
            this._clearKeysSoFarAfterDelay();
            b = this._findMatchInRange(this._searchIndex + 1, this._items.length);
            b || (b = this._findMatchInRange(0, this._searchIndex));
            this._itemToFocus = b || this._itemToFocus;
            return this._itemToFocus
        };
        e._findMatchInRange = function(a, b) {
            for (var a = a; a < b; a++) {
                var c = this._items[a].getLabel();
                if (c && c.toString().toLowerCase().indexOf(this._keysSoFar) === 0) return this._items[a]
            }
            return null
        };
        e._render = function() {
            this._ul = c("DOM").create("ul", {
                className: "_54nf"
            });
            this._ul.setAttribute("role", "menu");
            this._items.forEach(function(a) {
                this._insertItem(a, null)
            }, this);
            this._subscriptions.addSubscriptions(c("Event").listen(this._ul, "click", this._handleClick.bind(this)), c("Event").listen(this._ul, "mouseover", this._handleMouseOver.bind(this)), c("Event").listen(this._ul, "mouseout", this._handleMouseOut.bind(this)));
            var a = this._ul;
            this._config.maxheight && (this._scrollableElems = c("ScrollableArea").renderDOM(), c("DOM").setContent(this._scrollableElems.content, this._ul), a = this._scrollableElems.root, c("Style").set(this._scrollableElems.wrap, "max-height", this._config.maxheight + "px"));
            var b = "_54nq" + (this._config.className ? " " + this._config.className : "") + (this._theme.className ? " " + this._theme.className : "");
            this._root = c("DOM").create("div", {
                className: b
            }, c("DOM").create("div", {
                className: "_54ng"
            }, a));
            this._config.id && this._root.setAttribute("id", this._config.id);
            this._config.testid && this._root.setAttribute("data-testid", this._config.testid);
            this._config.behaviors && this.enableBehaviors(this._config.behaviors);
            this.inform("rendered", this._root)
        };
        e._needsDefaultBehavior = function(a) {
            if (a.isDefaultRequested && a.isDefaultRequested()) {
                a = d("Parent").byTag(a.getTarget(), "a");
                a = a && a.getAttribute("href");
                return a && a[0] !== "#"
            }
            return !1
        };
        e._handleClick = function(a) {
            if (a.getTarget() === this._ul && c("UserAgent").isBrowser("IE")) {
                a.stop();
                return
            }
            if (!this._needsDefaultBehavior(a)) {
                var b = this._getItemInstance(a.getTarget());
                if (b) return this._handleItemClick(b, a)
            }
        };
        e._handleItemClick = function(a, b) {
            this.inform("itemclick", {
                item: a,
                event: b
            });
            a.shouldCloseOnClick() && a.hasAction() && this.done();
            return a.handleClick(b)
        };
        e._handleMouseOver = function(a) {
            a = this._getItemInstance(a.getTarget());
            a && this._focusItem(a, !0)
        };
        e._handleMouseOut = function(a) {
            a = this._getItemInstance(a.getTarget());
            a && this._focused === a && this.blur()
        };
        e._insertItem = function(a, b, e) {
            var f = a.getRoot();
            d("CSS").addClass(f, "__MenuItem");
            d("DataStore").set(f, "MenuItem", a);
            if (b) {
                a = e ? c("DOM").insertAfter : c("DOM").insertBefore;
                a(b.getRoot(), f)
            } else c("DOM").appendContent(this._ul, f)
        };
        e._attemptFocus = function(a, b) {
            var c = this._items.length;
            if ((a < 0 || a >= c) && !this._focused) return !1;
            a = (c + a % c) % c;
            c = this.getItemAt(a);
            return c === this._focused || this._focusItem(c) ? !0 : this._attemptFocus(a + b, b)
        };
        e._focusItem = function(a, b) {
            if (a && a.focus(b) !== !1) {
                this._focused !== a && (this.blur(), this._focused = a, this.inform("focus", {
                    item: a,
                    from_mouse_over: b
                }));
                return !0
            }
            return !1
        };
        e._getItemInstance = function(a) {
            a = d("Parent").byClass(a, "__MenuItem");
            return a ? d("DataStore").get(a, "MenuItem") : null
        };
        e.destroy = function() {
            this._items.forEach(function(a) {
                var b = a.getRoot();
                d("DataStore").remove(b, "MenuItem");
                a.destroy()
            }), this._subscriptions.release(), this.destroyBehaviors()
        };
        return b
    }(c("PopoverMenuInterface"));
    Object.assign(a.prototype, c("BehaviorsMixin"), {
        _focused: null,
        _root: null
    });
    g["default"] = a
}), 98);
__d("MenuItemInterface", ["emptyFunction", "react"], (function(a, b, c, d, e, f) {
    var g;
    a = g || b("react");
    c = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getRoot = function() {
            this._root || (this._root = this.render());
            return this._root
        };
        return b
    }(a.Component);
    Object.assign(c.prototype, {
        _root: null,
        render: b("emptyFunction"),
        getAccessKey: b("emptyFunction"),
        getLabel: b("emptyFunction"),
        hasAction: b("emptyFunction").thatReturnsFalse,
        focus: b("emptyFunction").thatReturnsFalse,
        blur: b("emptyFunction").thatReturnsFalse,
        onShow: b("emptyFunction").thatReturnsFalse,
        handleClick: b("emptyFunction").thatReturnsFalse,
        shouldCloseOnClick: b("emptyFunction").thatReturnsTrue,
        destroy: b("emptyFunction")
    });
    e.exports = c
}), null);
__d("MenuItemBase", ["cx", "DOM", "HTML", "MenuItemInterface"], (function(a, b, c, d, e, f, g, h) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c._ARIARole = "menuitem";
            c._data = babelHelpers["extends"]({}, b);
            return c
        }
        var d = b.prototype;
        d.render = function() {
            var a = "_54ni";
            this._data.className && (a += " " + this._data.className);
            a = {
                className: a,
                role: "presentation",
                "data-testid": void 0
            };
            Object.assign(a, this.__getAttributesFromData());
            delete a["data-testid"];
            return c("DOM").create("li", a, this._renderItemContent())
        };
        d._renderItemContent = function() {
            return c("HTML")(this._data.markup).getNodes()
        };
        d.__getAttributesFromData = function() {
            var a = {};
            for (var b in this._data)(b.indexOf("data-") === 0 || b.indexOf("aria-") === 0) && (a[b] = this._data[b]);
            return a
        };
        return b
    }(c("MenuItemInterface"));
    g["default"] = a
}), 98);
__d("MenuItem", ["cx", "CSS", "DOM", "MenuItemBase", "ReactDOM", "emptyFunction", "joinClasses", "react"], (function(a, b, c, d, e, f, g) {
    var h, i = h || b("react"),
        j = ["href", "rel", "ajaxify", "target", "accesskey"];

    function k(a, c) {
        var d = {};
        j.forEach(function(a) {
            c[a] && (d[a] = c[a])
        });
        b("DOM").setAttributes(a, d)
    }

    function l(a) {
        j.forEach(function(b) {
            a.removeAttribute(b)
        })
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b) {
            b = a.call(this, b) || this;
            b._disabled = !!b._data.disabled;
            b._onclickHandler = b._data.onclick || b._data.onClick;
            return b
        }
        var d = c.prototype;
        d.getValue = function() {
            return this._data.value
        };
        d.getLabel = function() {
            return this._data.label
        };
        d.getLink = function() {
            return this._data.href
        };
        d.getAccessKey = function() {
            var a = this.getLabel();
            return a && a.charAt(0)
        };
        d.focus = function(a) {
            if (this.isDisabled() || !this._root.offsetParent || !this.hasAction() || this.isHoverDisabled()) return !1;
            b("CSS").addClass(this._root, "_54ne");
            b("CSS").addClass(this._root, "selected");
            a || this._anchor.focus()
        };
        d.blur = function() {
            b("CSS").removeClass(this._root, "_54ne"), b("CSS").removeClass(this._root, "selected")
        };
        d.handleClick = function(a) {
            if (this.isDisabled()) return !1;
            return typeof this._onclickHandler === "function" ? this._onclickHandler(a) : !0
        };
        d.setOnClickHandler = function(a) {
            this._onclickHandler = a
        };
        d._renderItemContent = function() {
            this._anchor = b("DOM").create(this._data.renderas === "label" ? "label" : "a", {
                className: "_54nc" + (this._data.icon ? " _54nu" : "")
            });
            if (this._data.children) {
                var a = null;
                this._data.icon && (a = i.cloneElement(this._data.icon, {
                    className: b("joinClasses")(this._data.icon.props.className, "mrs")
                }));
                b("ReactDOM").render(i.jsx(i.Suspense, {
                    fallback: null,
                    children: i.jsxs("span", {
                        children: [a, i.jsx("span", {
                            className: "_54nh",
                            children: this._data.children
                        })]
                    })
                }), this._anchor);
                this._data.label = this._anchor.innerText || this._anchor.textContent
            } else {
                a = b("DOM").create("span", null, b("DOM").create("span", {
                    className: "_54nh"
                }, this._data.markup || this._data.label));
                this._data.icon && b("DOM").prependContent(a, this._data.icon);
                b("DOM").setContent(this._anchor, a)
            }
            this._data.href || (this._data.href = "#");
            this.isDisabled() || k(this._anchor, this._data);
            b("DOM").setAttributes(this._anchor, this.__getAttributesFromData());
            this._anchor.setAttribute("role", this._ARIARole);
            a = this._data.title;
            a && this._anchor.setAttribute("title", a);
            return this._anchor
        };
        d.isDisabled = function() {
            return this._disabled
        };
        d.isHoverDisabled = function() {
            return this._data.hoverdisabled
        };
        d.enable = function() {
            this._root && (k(this._anchor, this._data), b("CSS").removeClass(this._root, "_5arm")), this._disabled = !1
        };
        d.disable = function() {
            this._root && (l(this._anchor), b("CSS").addClass(this._root, "_5arm")), this._disabled = !0
        };
        d.render = function() {
            var c = a.prototype.render.call(this);
            this._disabled && b("CSS").addClass(c, "_5arm");
            return c
        };
        d.destroy = function() {
            this._anchor && b("ReactDOM").unmountComponentAtNode(this._anchor)
        };
        return c
    }(b("MenuItemBase"));
    Object.assign(a.prototype, {
        hasAction: b("emptyFunction").thatReturnsTrue
    });
    e.exports = a
}), null);
__d("RTLKeys", ["Keys", "Locale"], (function(a, b, c, d, e, f, g) {
    var h = null;

    function i() {
        h === null && (h = d("Locale").isRTL());
        return h
    }
    a = babelHelpers.objectWithoutPropertiesLoose(c("Keys"), ["RIGHT", "LEFT"]);
    var j = babelHelpers["extends"]({}, a, {
        REAL_RIGHT: c("Keys").RIGHT,
        REAL_LEFT: c("Keys").LEFT,
        getLeft: function() {
            return i() ? j.REAL_RIGHT : j.REAL_LEFT
        },
        getRight: function() {
            return i() ? j.REAL_LEFT : j.REAL_RIGHT
        }
    });
    b = j;
    g["default"] = b
}), 98);
__d("NavigationAssistantController", ["csx", "cx", "fbt", "Arbiter", "AsyncRequest", "CSS", "DOM", "DOMEventListener", "DOMQuery", "DOMTraverser", "Event", "Focus", "KeyEventController", "KeyboardShortcuts", "Menu", "MenuItem", "NavigationMenubarInteractionsTypedLogger", "PageTransitions", "RTLKeys", "TabbableElements", "cr:1039", "cr:1041", "cr:1048", "debounce", "ge", "getActiveElement", "getOrCreateDOMID", "gkx", "setImmediate", "setTimeout"], (function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = ["main", "banner", "search", "navigation", "region", "complementary", "form", "contentinfo"],
        l = {
            main: function(a) {
                return a ? j._( /*FBT_CALL*/ "Main: {section name}" /*FBT_CALL*/ , [j._param("section name", a)]) : j._( /*FBT_CALL*/ "Main section" /*FBT_CALL*/ )
            },
            banner: function(a) {
                return j._( /*FBT_CALL*/ "{section name} banner" /*FBT_CALL*/ , [j._param("section name", a)])
            },
            search: function(a) {
                return j._( /*FBT_CALL*/ "Search {section name}" /*FBT_CALL*/ , [j._param("section name", a)])
            },
            navigation: function(a) {
                return a ? j._( /*FBT_CALL*/ "Navigate {section name}" /*FBT_CALL*/ , [j._param("section name", a)]) : j._( /*FBT_CALL*/ "Navigation" /*FBT_CALL*/ )
            },
            region: function(a) {
                return a
            },
            complementary: function(a) {
                return a ? a : j._( /*FBT_CALL*/ "Complementary information" /*FBT_CALL*/ )
            },
            form: function(a) {
                return j._( /*FBT_CALL*/ "{section name} form" /*FBT_CALL*/ , [j._param("section name", a)])
            },
            contentinfo: function(a) {
                return j._( /*FBT_CALL*/ "{section name} footer" /*FBT_CALL*/ , [j._param("section name", a)])
            }
        },
        m = 500,
        n = {
            init: function(a, b, e, f, g, h, i) {
                i === void 0 && (i = !1);
                n._banner = a;
                n._menubar = b;
                n._sectionsMenu = e;
                n._accessibilityMenu = f;
                n._globalMenu = g;
                n._shouldSetDefaultMainRole = i;
                n._shortcutMenuItem = n._accessibilityMenu && n._accessibilityMenu.getItemAt(0);
                n._menubarMenus = [{
                    menu: n._sectionsMenu,
                    logName: "page_sections"
                }];
                n._accessibilityMenu && n._menubarMenus.push({
                    menu: n._accessibilityMenu,
                    logName: "accessibility"
                });
                n._globalMenu && n._menubarMenus.push({
                    menu: n._globalMenu,
                    logName: "global"
                });
                document.body && d("CSS").addClass(document.body, "hasAXNavMenubar");
                n._hasBanner = document.body && d("CSS").hasClass(document.body, "hasBanner");
                n._shown = !1;
                n._items = [];
                n._hotKeyTrigger = null;
                n._menubarMenuItems = d("DOMQuery").scry(n._menubar, '[role="button"]');
                n._menubarMenuItems.forEach(function(a) {
                    a.setAttribute("role", "menuitem")
                });
                n._activeItem = n._menubarMenuItems[0];
                n._activeItemIndex = 0;
                if (h != null)
                    for (var a in h) Object.prototype.hasOwnProperty.call(h, a) && h[a] != null && h[a].disableTypeaheadActivation();
                n._setupEvents();
                n._keysSoFar = "";
                n._clearKeysSoFarAfterDelay = c("debounce")(function() {
                    n._keysSoFar = ""
                }, m);
                n._handlePageLoad()
            },
            _setupEvents: function() {
                n._menubarMenuItems[0].addEventListener("focus", n._showMenubar.bind(n)), n._menubar.addEventListener("keydown", n._checkHide.bind(n)), n._menubar.addEventListener("keyup", n._checkMenuSwitch.bind(n)), n._menubarMenus.forEach(function(a) {
                    a.menu.subscribe("show", n._menuShown.bind(n, a)), a.menu.subscribe("hide", n._menuHidden.bind(n, a)), a.menu.subscribe("done", n._checkBlur.bind(n)), a.menu.getRoot().addEventListener("keyup", n._checkMenuSwitch.bind(n))
                }), d("DOMEventListener").add(document, "click", n._checkClickBlur.bind(n)), n._sectionsMenu.subscribe("focus", n._highlightFocused.bind(n)), n._sectionsMenu.subscribe("blur", n._unhighlightFocused.bind(n)), n._accessibilityMenu && n._accessibilityMenu.subscribe("itemclick", n._checkShortcutsShow.bind(n)), n._globalMenu && n._globalMenu.subscribe("itemclick", n._globalMenuPress.bind(n)), c("gkx")("677762") && (d("DOMEventListener").add(document, "keydown", n._checkHotKey.bind(n)), d("DOMEventListener").add(document, "keypress", n._trackHotKeyPress.bind(n)), d("DOMEventListener").add(document, "keyup", n._unsetHotKey.bind(n)))
            },
            _globalMenuPress: function(a, c) {
                n._checkLogEvent(a, c);
                if (b("cr:1048") != null && b("cr:1041") != null && b("cr:1039") != null) {
                    a = null;
                    switch ((c = c.item) == null ? void 0 : (c = c._data) == null ? void 0 : c.value) {
                        case "newsfeed":
                            a = {
                                entityKey: b("cr:1041").forFeed(),
                                appTabId: b("cr:1039").HOME
                            };
                            break;
                        case "notifications":
                            a = {
                                entityKey: b("cr:1041").forNotif(),
                                appTabId: b("cr:1039").NOTIFICATIONS
                            };
                            break;
                        case "messenger":
                            a = {
                                entityKey: b("cr:1041").forChat(),
                                appTabId: b("cr:1039").CHATS
                            };
                            break;
                        case "admin-panel":
                            a = {
                                entityKey: b("cr:1041").forAdminPanelSection(),
                                appTabId: b("cr:1039").ADMIN_PANEL
                            };
                            break
                    }
                    a != null && (b("cr:1048").setActiveEntityKey(a.entityKey), b("cr:1048").selectAppTabID(a.appTabId))
                }
            },
            _checkHide: function(a) {
                a = c("Event").getKeyCode(a);
                if (a === c("RTLKeys").ESC) {
                    n._hideMenubar();
                    n._returnFocus();
                    return
                }
                a === c("RTLKeys").TAB && c("setImmediate")(function() {
                    n._hideMenubar()
                })
            },
            _returnFocus: function() {
                if (n._hotKeyTrigger) d("Focus").set(n._hotKeyTrigger, !0), n._hotKeyTrigger = null;
                else {
                    var a = n._banner.nextElementSibling;
                    d("TabbableElements").isTabbable(a) || (a = d("DOMTraverser").nextFilteredNode(document.body, a, d("TabbableElements").isTabbable));
                    d("Focus").set(a)
                }
            },
            _setActiveItem: function(a) {
                if (a < 0 || a >= n._menubarMenuItems.length) return;
                n._activeItem.setAttribute("tabindex", "-1");
                n._activeItem = n._menubarMenuItems[a];
                n._activeItemIndex = a;
                n._activeItem.setAttribute("tabindex", "0")
            },
            _checkMenuSwitch: function(a) {
                a = c("Event").getKeyCode(a);
                var b = n._menubarMenus.length,
                    e = n._activeItemIndex;
                switch (a) {
                    case c("RTLKeys").getLeft():
                        e = n._activeItemIndex === 0 ? b - 1 : n._activeItemIndex - 1;
                        break;
                    case c("RTLKeys").getRight():
                        e = n._activeItemIndex === b - 1 ? 0 : n._activeItemIndex + 1;
                        break;
                    default:
                        e = n._findItemToFocus(a);
                        if (e < 0) return !1
                }
                n._isShowingMenu && n._isShowingMenu.done();
                n._setActiveItem(e);
                c("setTimeout")(function() {
                    d("Focus").set(n._activeItem, !0)
                }, 0);
                return !0
            },
            _findItemToFocus: function(a) {
                if (n._isShowingMenu) return -1;
                a = String.fromCharCode(a).toLowerCase();
                n._keysSoFar || (n._searchIndex = n._activeItemIndex);
                n._keysSoFar += a;
                n._clearKeysSoFarAfterDelay();
                a = n._findMatchInRange(n._searchIndex + 1, n._menubarMenuItems.length);
                a < 0 && (a = n._findMatchInRange(0, n._searchIndex));
                return a < 0 ? n._searchIndex : a
            },
            _findMatchInRange: function(a, b) {
                for (var a = a; a < b; a++) {
                    var c = n._menubarMenuItems[a].innerText;
                    if (c.toLowerCase().indexOf(n._keysSoFar) === 0) return a
                }
                return -1
            },
            _menuShown: function(a) {
                n._ignoreBlur = !0, n._isShowingMenu = a.menu, n._logEvent("menu_shown", a.logName)
            },
            _menuHidden: function(a) {
                n._ignoreBlur = !1, n._isShowingMenu === a.menu && (n._isShowingMenu = null)
            },
            _checkClickBlur: function() {
                n._ignoreBlur || n._checkBlur()
            },
            _checkBlur: function() {
                var a = c("getActiveElement")();
                n._shown && a && !c("DOM").contains(n._menubar, a) && !n._ignoreBlur && c("setImmediate")(function() {
                    n._hideMenubar()
                });
                n._highlighted && (d("CSS").removeClass(n._highlighted, "_1toc"), n._highlighted = null)
            },
            _highlightFocused: function(a, b) {
                n._highlighted && d("CSS").removeClass(n._highlighted, "_1toc"), n._highlighted = c("ge")(b.item.getValue()), n._highlighted && d("CSS").addClass(n._highlighted, "_1toc")
            },
            _unhighlightFocused: function(a, b) {
                n._highlighted && d("CSS").removeClass(n._highlighted, "_1toc")
            },
            _checkHotKey: function(a) {
                var b = c("Event").getKeyCode(a),
                    e = a.altKey;
                if (!c("KeyEventController").filterEventTargets(a, "keydown")) return;
                if (b === c("RTLKeys").FORWARD_SLASH && e) {
                    b = c("getActiveElement")();
                    n._listenHotKeyPress = !0;
                    if (n._shown) {
                        n._menubarMenus.forEach(function(a) {
                            a.menu.done()
                        });
                        c("setTimeout")(function() {
                            n._returnFocus(), n._hideMenubar()
                        }, 0);
                        return
                    }
                    if (b && n._isInDialog(b)) return;
                    n._hotKeyTrigger = b;
                    n._showMenubar();
                    d("Focus").set(n._activeItem, !0);
                    n._logEvent("hotkey_triggered", "menubar");
                    return
                }
                n._listenHotKeyPress = !1;
                n._shown && n._checkHide(a)
            },
            _unsetHotKey: function(a) {
                n._listenHotKeyPress = !1
            },
            _trackHotKeyPress: function(a) {
                if (n._listenHotKeyPress) {
                    a = c("Event").getKeyCode(a);
                    n._logEvent("hotkey_char", "" + a)
                }
            },
            _handlePageLoad: function() {
                n._validateMainSection(), n._setupSectionsMenu(), n._setupAccessibilityMenu(), c("PageTransitions").registerCompletionCallback(function() {
                    n._handlePageLoad()
                })
            },
            _validateMainSection: function() {
                if (!n._shouldSetDefaultMainRole) return;
                var a = document.getElementById("content");
                if (!a) return;
                var b = d("DOMQuery").scry(a, '[role="main"]'),
                    c = a.getAttribute("role") === "main";
                b.length && c ? a.setAttribute("role", "") : !b.length && !c && a.setAttribute("role", "main")
            },
            _isInDialog: function(a) {
                a = a;
                while (a && a !== document && a.getAttribute("role") !== "dialog") a = a.parentNode;
                return a !== document
            },
            _hideMenubar: function() {
                if (!n._shown) return;
                n._shown = !1;
                c("KeyboardShortcuts").popLayer();
                d("CSS").addClass(n._banner, "_1toe");
                n._setActiveItem(0);
                !n._hasBanner && document.body && d("CSS").removeClass(document.body, "hasBanner");
                c("setTimeout")(function() {
                    c("Event").fire(window, "scroll")
                }, 350)
            },
            _showMenubar: function() {
                if (n._shown) return;
                n._shown = !0;
                n._ignoreBlur = !1;
                n._validateMainSection();
                n._setupSectionsMenu();
                n._setupAccessibilityMenu();
                c("KeyboardShortcuts").pushLayer();
                n._banner.nextElementSibling && d("CSS").matchesSelector(n._banner.nextElementSibling, "._73y_") ? d("CSS").addClass(n._banner, "_1tof") : d("CSS").removeClass(n._banner, "_1tof");
                d("CSS").removeClass(n._banner, "_1toe");
                !n._hasBanner && document.body && d("CSS").addClass(document.body, "hasBanner");
                c("setTimeout")(function() {
                    c("Event").fire(window, "scroll"), c("Arbiter").inform("banner/shown", null, "state")
                }, 50);
                n._logEvent("shown", "menubar")
            },
            _addMenuItem: function(a, b, e) {
                b = c("Menu").buildItemFromData({
                    ctor: c("MenuItem"),
                    label: a,
                    selected: !1,
                    value: b,
                    onclick: function(b) {
                        c("setTimeout")(function() {
                            d("Focus").set(c("ge")(e), !0), n._hideMenubar()
                        }, 0), n._logEvent("selected_item", a), n._ignoreBlur = !1
                    }
                });
                n._sectionsMenu.addItem(b);
                n._items.push(b)
            },
            _getLandmarkSections: function(a) {
                var b = [],
                    c = [];
                a.forEach(function(a) {
                    var d = a.getAttribute("role");
                    d === "main" ? b.push(a) : k.indexOf(d) > -1 && c.push(a)
                });
                return b.concat(c)
            },
            _computeElementLabel: function(a, b, c) {
                var d = a.getAttribute("id");
                c = c || [];
                var e = c.includes(d);
                !e && d && c.push(d);
                d = a.getAttribute("aria-labelledby");
                if (!e && d) {
                    e = d.split(" ");
                    var f = "";
                    e.forEach(function(a) {
                        a = document.getElementById(a);
                        if (!a) return;
                        f += n._computeElementLabel(a, !1, c)
                    });
                    return f
                }
                d = a.getAttribute("aria-label");
                if (d) return d;
                return b ? "" : a.innerText ? a.innerText.substring(0, 100) : ""
            },
            _addSectionItems: function(a) {
                a.forEach(function(a) {
                    if (!d("TabbableElements").isVisible(a) || !a.offsetHeight || !a.offsetWidth) return;
                    var b = a.getAttribute("role");
                    if (!b || !Object.prototype.hasOwnProperty.call(l, b)) return;
                    var e = l[b](n._computeElementLabel(a, !0)),
                        f = a;
                    if (b === "search" || b === "region" || b === "form") {
                        b = d("DOMQuery").scry(a, ".navigationFocus");
                        b.length && (f = b[0], !d("TabbableElements").isTabbable(f) && d("TabbableElements").find(f).length && (f = d("TabbableElements").find(f)[0]))
                    }
                    e && n._addMenuItem(e, c("getOrCreateDOMID")(a), c("getOrCreateDOMID")(f))
                })
            },
            _setupSectionsMenu: function() {
                var a = d("DOMQuery").scry(document.body, "[role]");
                a = n._getLandmarkSections(a);
                n._cleanupSectionsMenu();
                n._addSectionItems(a)
            },
            _cleanupSectionsMenu: function() {
                while (n._items.length) n._sectionsMenu.removeItem(n._items.pop())
            },
            _setupAccessibilityMenu: function() {
                if (!n._accessibilityMenu) return;
                if (c("KeyboardShortcuts").hasFlyoutToShow()) {
                    var a = n._accessibilityMenu.getItemAt(0);
                    a !== n._shortcutMenuItem && n._accessibilityMenu.addItemBefore(n._shortcutMenuItem, a)
                } else n._accessibilityMenu.removeItem(n._shortcutMenuItem)
            },
            _logEvent: function(a, b) {
                new(c("NavigationMenubarInteractionsTypedLogger"))().setAction(a).setTargetItem(b).log()
            },
            _checkShortcutsShow: function(a, b) {
                b.item.getValue() === "key_shortcuts" && (n._ignoreBlur = !1, n._hideMenubar(), c("setTimeout")(function() {
                    c("KeyboardShortcuts").showShortcutFlyout()
                }, 0)), n._logEvent("selected_item_ax", b.item.getValue())
            },
            _checkLogEvent: function(a, b) {
                a = b.item.getValue();
                n._logEvent("selected_item_global", a);
                n._ignoreBlur = !1
            },
            _getHelpDialogRequest: function() {
                if (!n._dialogRequest) n._dialogRequest = new(c("AsyncRequest"))("/ajax/keyboard_shortcuts"), n._dialogRequest.setReadOnly(!0);
                else if (n._dialogRequest.transport) return null;
                return n._dialogRequest
            }
        };
    a = n;
    g["default"] = a
}), 98);
__d("ContextualLayerAlignmentEnum", ["keyMirror", "objectValues", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
        left: null,
        center: null,
        right: null
    });
    b = c("objectValues")(a);
    d = c("prop-types").oneOf(b);
    e = babelHelpers["extends"]({}, a, {
        values: b,
        propType: d
    });
    g["default"] = e
}), 98);
__d("ContextualLayerPositionEnum", ["keyMirror", "objectValues", "prop-types"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
        above: null,
        below: null,
        left: null,
        right: null
    });
    b = c("objectValues")(a);
    d = c("prop-types").oneOf(b);
    e = babelHelpers["extends"]({}, a, {
        values: b,
        propType: d
    });
    g["default"] = e
}), 98);
__d("ErrorMessageConsole", ["ErrorPubSub", "cr:1458113"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (a.type !== "fatal") return;
        b("cr:1458113") && b("cr:1458113").showErrorDialog(a)
    }
    var h = !1;

    function d() {
        if (h) return;
        h = !0;
        c("ErrorPubSub").addListener(i)
    }

    function i(a) {
        if (a.type !== "fatal") return;
        b("cr:1458113") && b("cr:1458113").showErrorDialog(a)
    }
    g.addError = a;
    g.listenForUncaughtErrors = d
}), 98);
__d("XIntlAccountSetLocaleAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/intl/ajax/save_locale/", {
        loc: {
            type: "String"
        },
        href: {
            type: "String"
        },
        index: {
            type: "Int"
        },
        ref: {
            type: "String"
        },
        ls_ref: {
            type: "Enum",
            defaultValue: "unknown",
            enumType: 1
        },
        should_redirect: {
            type: "Bool",
            defaultValue: !0
        }
    })
}), null);
__d("XIntlSaveXModeAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/ajax/intl/save_xmode/", {})
}), null);
__d("IntlUtils", ["invariant", "AsyncRequest", "Cookie", "LoggedOutSwitchingLocaleTypedLogger", "ReloadPage", "XIntlAccountSetLocaleAsyncController", "XIntlSaveXModeAsyncController", "goURI"], (function(a, b, c, d, e, f, g, h) {
    var i = c("XIntlSaveXModeAsyncController").getURIBuilder().getURI();

    function a(a) {
        new(c("AsyncRequest"))().setURI(i).setData({
            xmode: a
        }).setHandler(function() {
            d("ReloadPage").now()
        }).send()
    }

    function b(a) {
        return a.replace(new RegExp("\xa0", "g"), "&nbsp;")
    }

    function e(a) {
        return a.replace(new RegExp("&nbsp;", "g"), "\xa0")
    }

    function f(a) {
        new(c("AsyncRequest"))().setURI(i).setData({
            amode: a,
            app: !1
        }).setHandler(function() {
            d("ReloadPage").now()
        }).send()
    }

    function j(a) {
        new(c("AsyncRequest"))().setURI(i).setData({
            rmode: a
        }).setHandler(function() {
            d("ReloadPage").now()
        }).send()
    }

    function k(a) {
        new(c("AsyncRequest"))().setURI(i).setData({
            string_manager_mode: a
        }).setHandler(function() {
            d("ReloadPage").now()
        }).send()
    }

    function l(a, b, e, f) {
        f = e;
        f || (a != null || h(0, 19476), f = a.options[a.selectedIndex].value);
        e = c("XIntlAccountSetLocaleAsyncController").getURIBuilder().getURI();
        new(c("AsyncRequest"))().setURI(e).setData({
            loc: f,
            ref: b,
            should_redirect: !1
        }).setHandler(function(a) {
            d("ReloadPage").now()
        }).send()
    }

    function m(a) {
        var b = "lh",
            d = c("Cookie").get(b),
            e = [],
            f = 5;
        if (d != null && d != "") {
            e = d.split(",");
            e.push(a);
            for (var d = 0; d < e.length - 1; d++) e[d] == e[d + 1] && e.splice(d, 1);
            e.length >= f && e.slice(1, f)
        } else e.push(a);
        c("Cookie").set(b, e.toString())
    }

    function n(a, b, d, e, f) {
        e === void 0 && (e = "unknown"), f === void 0 && (f = null), c("Cookie").setWithoutCheckingUserConsent_DANGEROUS("locale", a), m(a), new(c("LoggedOutSwitchingLocaleTypedLogger"))().setNewLocale(a).setOldLocale(b).setIndex(f).setReferrer(e).log(), c("goURI")(d)
    }
    g.setXmode = a;
    g.encodeSpecialCharsForXController = b;
    g.decodeSpecialCharsFromXController = e;
    g.setAmode = f;
    g.setRmode = j;
    g.setSmode = k;
    g.setLocale = l;
    g.appendCookieLocaleHistory = m;
    g.setCookieLocale = n
}), 98);
__d("legacy:intl-base", ["IntlUtils"], (function(a, b, c, d, e, f, g) {
    a.intl_set_string_manager_mode = d("IntlUtils").setSmode, a.intl_set_xmode = d("IntlUtils").setXmode, a.intl_set_amode = d("IntlUtils").setAmode, a.intl_set_rmode = d("IntlUtils").setRmode, a.intl_set_locale = d("IntlUtils").setLocale
}), 35);
__d("legacy:onload-action", ["PageHooks"], (function(a, b, c, d, e, f) {
    a._domreadyHook = (c = b("PageHooks"))._domreadyHook;
    a._onloadHook = c._onloadHook;
    a.runHook = c.runHook;
    a.runHooks = c.runHooks;
    a.keep_window_set_as_loaded = c.keepWindowSetAsLoaded
}), 3);
__d("FlipDirection", ["DOM", "Input", "Style"], (function(a, b, c, d, e, f) {
    a = {
        setDirection: function(a, c, d) {
            c === void 0 && (c = 5);
            d === void 0 && (d = !1);
            var e = b("DOM").isNodeOfType(a, "input") && a.type == "text",
                f = b("DOM").isNodeOfType(a, "textarea");
            if (!(e || f) || a.getAttribute("data-prevent-auto-flip")) return;
            e = b("Input").getValue(a);
            f = a.style && a.style.direction;
            if (!f || d) {
                f = 0;
                d = !0;
                for (var g = 0; g < e.length; g++) {
                    var h = e.charCodeAt(g);
                    if (h >= 48) {
                        d && (d = !1, f++);
                        if (h >= 1470 && h <= 1920) {
                            b("Style").set(a, "direction", "rtl");
                            a.setAttribute("dir", "rtl");
                            return
                        }
                        if (f == c) {
                            b("Style").set(a, "direction", "ltr");
                            a.setAttribute("dir", "ltr");
                            return
                        }
                    } else d = !0
                }
            } else e.length === 0 && (b("Style").set(a, "direction", ""), a.removeAttribute("dir"))
        }
    };
    e.exports = a
}), null);
__d("FlipDirectionOnKeypress", ["Event", "FlipDirection"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        a = a.getTarget();
        d("FlipDirection").setDirection(a)
    };
    c("Event").listen(document.documentElement, {
        keyup: a,
        input: a
    })
}), 34);
__d("Nectar", ["Env", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        a.nctr || (a.nctr = {})
    }

    function i(a) {
        if ((g || (g = b("Env"))).module || !a) return (g || (g = b("Env"))).module;
        var c = {
                fbpage_fan_confirm: !0,
                photos_snowlift: !0
            },
            d;
        while (a && a.getAttribute) {
            var e = a.getAttribute("id");
            if (e != null && e.startsWith("pagelet_")) return e;
            !d && c[e] && (d = e);
            a = b("getContextualParent")(a)
        }
        return d
    }
    a = {
        addModuleData: function(a, b) {
            b = i(b);
            b && (h(a), a.nctr._mod = b)
        }
    };
    e.exports = a
}), null);
__d("ARIA", ["DOM", "emptyFunction", "ge", "getOrCreateDOMID", "joinClasses"], (function(a, b, c, d, e, f, g) {
    var h, i, j = function() {
        h = c("ge")("ariaAssertiveAlert"), h || (h = c("DOM").create("div", {
            id: "ariaAssertiveAlert",
            className: c("joinClasses")("accessible_elem", "accessible_elem_offset"),
            "aria-live": "assertive"
        }), c("DOM").appendContent(document.body, h)), i = c("ge")("ariaPoliteAlert"), i || (i = h.cloneNode(!1), i.setAttribute("id", "ariaPoliteAlert"), i.setAttribute("aria-live", "polite"), c("DOM").appendContent(document.body, i)), j = c("emptyFunction")
    };

    function k(a, b) {
        j();
        b = b ? h : i;
        c("DOM").setContent(b, a)
    }

    function a(a) {
        for (var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1; e < b; e++) d[e - 1] = arguments[e];
        var f = d.map(function(a) {
            return c("getOrCreateDOMID")(a)
        }).join(" ");
        a.setAttribute("aria-controls", f)
    }

    function b(a) {
        for (var b = arguments.length, d = new Array(b > 1 ? b - 1 : 0), e = 1; e < b; e++) d[e - 1] = arguments[e];
        var f = d.map(function(a) {
            return c("getOrCreateDOMID")(a)
        }).join(" ");
        a.setAttribute("aria-describedby", f)
    }

    function d(a, b) {
        a.setAttribute("aria-owns", c("getOrCreateDOMID")(b))
    }

    function e(a, b) {
        b = c("getOrCreateDOMID")(b);
        a.setAttribute("aria-controls", b);
        a.setAttribute("aria-haspopup", "true");
        b = a.getAttribute("role") || "";
        b && a.setAttribute("role", b)
    }

    function f(a) {
        k(a, !0)
    }

    function l(a) {
        k(a, !1)
    }
    g.controls = a;
    g.describedBy = b;
    g.owns = d;
    g.setPopup = e;
    g.announce = f;
    g.notify = l
}), 98);
__d("AsyncRequestNectarLogging", ["AsyncRequest", "Nectar"], (function(a, b, c, d, e, f, g) {
    Object.assign(c("AsyncRequest").prototype, {
        setNectarModuleData: function(a) {
            this.method == "POST" && d("Nectar").addModuleData(this.data, a)
        }
    })
}), 34);
__d("VirtualCursorStatus", ["Event", "UserAgent", "emptyFunction", "setImmediate"], (function(a, b, c, d, e, f) {
    var g = null,
        h = null;

    function i() {
        h || (h = b("Event").listen(window, "blur", function() {
            g = null, j()
        }))
    }

    function j() {
        h && (h.remove(), h = null)
    }

    function a(a) {
        g = a.keyCode, i()
    }

    function c() {
        g = null, j()
    }
    if (typeof window !== "undefined" && window.document && window.document.createElement) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", c, !0);
            else if (d.attachEvent) {
            f = d.attachEvent;
            f("onkeydown", a);
            f("onkeyup", c)
        }
    }
    var k = {
            isKeyDown: function() {
                return !!g
            },
            getKeyDownCode: function() {
                return g
            }
        },
        l = !1,
        m = !1,
        n = null,
        o = !1;

    function p(a) {
        var c = new Set(),
            d = k.isKeyDown(),
            e = a.clientX,
            f = a.clientY,
            g = a.isPrimary,
            h = a.isTrusted,
            i = a.offsetX,
            j = a.offsetY,
            n = a.pointerType,
            o = a.mozInputSource,
            p = a.WEBKIT_FORCE_AT_MOUSE_DOWN,
            q = a.webkitForce;
        a = a.target;
        var r = a.clientWidth;
        a = a.clientHeight;
        e === 0 && f === 0 && i >= 0 && j >= 0 && m && h && o == null && c.add("Chrome");
        l && m && !d && q != null && q < p && i === 0 && j === 0 && o == null && c.add("Safari-edge");
        e === 0 && f === 0 && i < 0 && j < 0 && m && o == null && c.add("Safari-old");
        !l && !m && d && g === !1 && h && n === "" && e === 0 && f === 0 && i === 0 && j === 0 && o == null;
        !l && !m && !d && h && b("UserAgent").isBrowser("IE >= 10") && o == null && (e < 0 && f < 0 ? c.add("IE") : (i < 0 || i > r) && (j < 0 || j > a) && c.add("MSIE"));
        o === 0 && h && c.add("Firefox");
        return c
    }

    function q() {
        l = !0, b("setImmediate")(function() {
            l = !1
        })
    }

    function r() {
        m = !0, b("setImmediate")(function() {
            m = !1
        })
    }

    function s(a, c) {
        n === null && (n = p(a));
        o = n.size > 0;
        a = a.target.getAttribute("data-accessibilityid") === "virtual_cursor_trigger";
        c(o, n, a);
        b("setImmediate")(function() {
            o = !1, n = null
        })
    }
    d = {
        isVirtualCursorTriggered: function() {
            return o
        },
        add: function(a, c) {
            c === void 0 && (c = b("emptyFunction"));
            var d = function(a) {
                return s(a, c)
            };
            a.addEventListener("click", d);
            var e = b("Event").listen(a, "mousedown", q),
                f = b("Event").listen(a, "mouseup", r);
            return {
                remove: function() {
                    a.removeEventListener("click", d), e.remove(), f.remove()
                }
            }
        }
    };
    e.exports = d
}), null);
__d("FocusRing", ["cx", "CSS", "Event", "KeyEventController", "Keys", "VirtualCursorStatus", "emptyFunction"], (function(a, b, c, d, e, f, g, h) {
    var i = ["mousedown", "mouseup"],
        j = [c("Keys").UP, c("Keys").RIGHT, c("Keys").DOWN, c("Keys").LEFT, c("Keys").TAB, c("Keys").RETURN, c("Keys").SPACE, c("Keys").ESC];

    function a() {
        if (n) return;
        o = !1;
        k();
        m();
        document.body && d("CSS").addClass(document.body, "_19_u");
        n = !0
    }

    function b() {
        return o
    }

    function k() {
        document.documentElement && d("VirtualCursorStatus").add(document.documentElement, s)
    }

    function l() {
        q = i.map(function(a) {
            return c("Event").listen(document.documentElement, a, p)
        })
    }

    function m() {
        w = c("Event").listen(document.documentElement, "keydown", t)
    }
    var n = !1,
        o = !0;

    function p() {
        v()
    }
    var q = i.map(function(a) {
        return {
            remove: c("emptyFunction")
        }
    });

    function r() {
        q.forEach(function(a) {
            return a.remove()
        })
    }

    function s(a) {
        a && u()
    }

    function t(a) {
        j.indexOf(c("Event").getKeyCode(a)) > -1 && c("KeyEventController").filterEventTargets(a, "keydown") && u()
    }

    function u() {
        w.remove(), l(), o = !0, document.body && d("CSS").removeClass(document.body, "_19_u")
    }

    function v() {
        r(), m(), o = !1, document.body && d("CSS").addClass(document.body, "_19_u")
    }
    var w = {
        remove: c("emptyFunction")
    };
    ({
        remove: c("emptyFunction")
    });
    g.KEY_CODES = j;
    g.init = a;
    g.usingKeyboardNavigation = b;
    g._attachVirtualCursorListener = k;
    g._attachMouseListeners = l;
    g._attachKeyDownListener = m;
    g._onMouseEvent = p;
    g._removeMouseListeners = r;
    g._onClick = s;
    g._onKeyDown = t;
    g._showFocusRing = u;
    g._hideFocusRing = v
}), 98);
__d("FullScreen", ["ArbiterMixin", "CSS", "Event", "Keys", "UserAgent", "UserAgent_DEPRECATED", "mixin", "throttle"], (function(a, b, c, d, e, f, g) {
    var h = {},
        i = !1;

    function j(a) {
        c("Event").getKeyCode(a) === c("Keys").ESC && a.stopPropagation()
    }

    function k() {
        i || (document.addEventListener("keydown", j, !0), i = !0)
    }

    function l() {
        i && (document.removeEventListener("keydown", j, !0), i = !1)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = c = a.call.apply(a, [this].concat(f)) || this, c.onChange = function() {
                var a = c.isFullScreen(),
                    b = document.body;
                b && d("CSS").conditionClass(b, "fullScreen", a);
                c.inform("changed");
                a || l()
            }, b) || babelHelpers.assertThisInitialized(c)
        }
        var e = b.prototype;
        e.listenForEvent = function(a) {
            var b = c("throttle")(this.onChange, 0, this);
            h[a.id] || (h[a.id] = !0, c("Event").listen(a, {
                webkitfullscreenchange: b,
                mozfullscreenchange: b,
                MSFullscreenChange: b,
                fullscreenchange: b
            }))
        };
        e.enableFullScreen = function(a) {
            this.listenForEvent(a);
            a = a;
            if (a.webkitRequestFullScreen) d("UserAgent_DEPRECATED").chrome() ? a.webkitRequestFullScreen == null ? void 0 : a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen == null ? void 0 : a.webkitRequestFullScreen();
            else if (a.mozRequestFullScreen) a.mozRequestFullScreen();
            else if (a.msRequestFullscreen) k(), a.msRequestFullscreen == null ? void 0 : a.msRequestFullscreen();
            else if (a.requestFullScreen) a.requestFullScreen == null ? void 0 : a.requestFullScreen();
            else return !1;
            return !0
        };
        e.disableFullScreen = function() {
            var a = document;
            if (a.webkitCancelFullScreen) a.webkitCancelFullScreen();
            else if (a.mozCancelFullScreen) a.mozCancelFullScreen();
            else if (a.msExitFullscreen) a.msExitFullscreen();
            else if (a.cancelFullScreen) a.cancelFullScreen();
            else if (a.exitFullScreen) a.exitFullScreen();
            else return !1;
            return !0
        };
        e.isFullScreen = function() {
            var a = document;
            return Boolean(a.webkitIsFullScreen || a.fullScreen || a.mozFullScreen || a.msFullscreenElement)
        };
        e.toggleFullScreen = function(a) {
            if (this.isFullScreen()) {
                this.disableFullScreen();
                return !1
            } else return this.enableFullScreen(a)
        };
        e.isSupportedWithKeyboardInput = function() {
            return this.isSupported() && !c("UserAgent").isBrowser("Safari")
        };
        e.isSupported = function() {
            var a = document,
                b = a.webkitFullscreenEnabled || a.mozFullScreenEnabled || a.msFullscreenEnabled || a.fullscreenEnabled;
            return Boolean(b || a.webkitCancelFullScreen || a.mozCancelFullScreen || a.msExitFullscreen || a.cancelFullScreen || a.exitFullScreen)
        };
        return b
    }(c("mixin")(c("ArbiterMixin")));
    b = new a();
    e = c("throttle")(b.onChange, 0, b);
    c("Event").listen(document, {
        webkitfullscreenchange: e,
        mozfullscreenchange: e,
        MSFullscreenChange: e,
        fullscreenchange: e
    });
    f = b;
    g["default"] = f
}), 98);
__d("curry", ["bind"], (function(a, b, c, d, e, f, g) {
    a = c("bind")(null, c("bind"), null);
    b = a;
    g["default"] = b
}), 98);
__d("ParameterizedPopover", ["invariant", "ArbiterMixin", "CSS", "DataStore", "Event", "Focus", "KeyStatus", "Keys", "LayerHideOnEscape", "SubscriptionsHandler", "Toggler", "curry", "mixin"], (function(a, b, c, d, e, f, g) {
    b("Toggler").subscribe(["show", "hide"], function(a, c) {
        c = c.getActive();
        c != null || g(0, 4839);
        c = b("DataStore").get(c, "Popover");
        c && (a === "show" ? c.showLayer() : c.hideLayer())
    });
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c, d, e) {
            var f;
            f = a.call(this) || this;
            typeof b === "string" && typeof c === "string" ? window.setTimeout(function() {
                var a = document.getElementById(b),
                    g = document.getElementById(c);
                f.construct(a, g, d, e)
            }) : f.construct(b, c, d, e);
            return f
        }
        var d = c.prototype;
        d.construct = function(a, c, d, e) {
            this._root = a, this._triggerElem = c, this._behaviors = d, this._config = e || {}, this._disabled = !!this._config.disabled, this._listeners = new(b("SubscriptionsHandler"))(), this._disabled || ((c.nodeName !== "A" || c.rel == null || c.rel.indexOf("toggle") < 0) && this._setupClickListener(), this._setupKeyListener(), this._setupFocusListener(), this._setupBlurListener()), c.setAttribute("role", "button"), b("DataStore").set(a, "Popover", this), b("Toggler").getActive() === a && this.showLayer()
        };
        d.ensureInit = function() {
            this._layer || this._init()
        };
        d.showLayer = function() {
            if (this._disabled) return;
            this.ensureInit();
            this._layer.show();
            b("Toggler").show(this._root);
            b("CSS").addClass(this._root, "selected");
            this.inform("show")
        };
        d.getContentRoot = function() {
            return this._root
        };
        d.getLayer = function() {
            this.ensureInit();
            return this._layer
        };
        d.hideLayer = function() {
            this.ensureInit(), this._layer.hide()
        };
        d.isShown = function() {
            return this._layer && this._layer.isShown()
        };
        d.setLayerContent = function(a) {
            this.ensureInit(), this._layer.setContent && this._layer.setContent(a)
        };
        d._init = function() {
            var a = this._config.layer;
            a.enableBehaviors([b("LayerHideOnEscape")]);
            b("Toggler").createInstance(a.getRoot()).setSticky(!1);
            a.subscribe("hide", this._onLayerHide.bind(this));
            this._behaviors && a.enableBehaviors(this._behaviors);
            this._layer = a;
            this.inform("init", null, "persistent")
        };
        d._onLayerHide = function() {
            b("Toggler").hide(this._root), b("CSS").removeClass(this._root, "selected"), this.inform("hide"), b("KeyStatus").getKeyDownCode() === b("Keys").ESC && b("Focus").set(this._triggerElem)
        };
        d.enable = function() {
            if (!this._disabled) return;
            this._listeners.engage();
            this._setupClickListener();
            this._setupKeyListener();
            this._setupFocusListener();
            this._setupBlurListener();
            this._disabled = !1
        };
        d.disable = function() {
            if (this._disabled) return;
            this.isShown() && this.hideLayer();
            this._listeners.release();
            this._triggerElem.getAttribute("rel") === "toggle" && this._triggerElem.removeAttribute("rel");
            this._disabled = !0
        };
        d._setupClickListener = function() {
            this._listeners.addSubscriptions(b("Event").listen(this._triggerElem, "click", b("curry")(b("Toggler").bootstrap, this._triggerElem)))
        };
        d._setupKeyListener = function() {
            this._listeners.addSubscriptions(b("Event").listen(this._triggerElem, "keydown", this._handleKeyEvent.bind(this)))
        };
        d._setupFocusListener = function() {
            this._listeners.addSubscriptions(b("Event").listen(this._triggerElem, "focus", this._handleFocusEvent.bind(this)))
        };
        d._setupBlurListener = function() {
            this._listeners.addSubscriptions(b("Event").listen(this._triggerElem, "blur", this._handleBlurEvent.bind(this)))
        };
        d._handleKeyEvent = function(a) {
            if (a.getModifiers().any) return;
            var c = b("Event").getKeyCode(a);
            switch (c) {
                case b("Keys").DOWN:
                case b("Keys").UP:
                    if (this._config.disableArrowKeyActivation) return;
                    this.isShown() || b("Toggler").bootstrap(this._triggerElem);
                    break;
                case b("Keys").RETURN:
                    if (!this._config.enableActivationOnEnter) return;
                    this.isShown() || b("Toggler").bootstrap(this._triggerElem);
                    break;
                case b("Keys").SPACE:
                    b("Toggler").bootstrap(this._triggerElem);
                    break;
                default:
                    return
            }
            a.prevent()
        };
        d._handleFocusEvent = function(a) {
            b("CSS").addClass(this._root, "focused")
        };
        d._handleBlurEvent = function(a) {
            b("CSS").removeClass(this._root, "focused")
        };
        d.destroy = function() {
            this.disable(), b("DataStore").remove(this._root, "Popover")
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    Object.assign(a.prototype, {
        _layer: null
    });
    e.exports = a
}), null);
__d("SVGChecker", [], (function(a, b, c, d, e, f) {
    e.exports = {
        isSVG: function(a) {
            return !!a.ownerSVGElement || a.tagName.toLowerCase() === "svg"
        },
        isDisplayed: function(a) {
            try {
                a = a.getBBox();
                if (a && (a.height === 0 || a.width === 0)) return !1
            } catch (a) {
                return !1
            }
            return !0
        }
    }
}), null);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("getOverlayZIndex", ["Style"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b = b;
        a = a;
        b = b || document.body;
        var d = [];
        while (a && a !== b) d.push(a), a = a.parentNode;
        if (a !== b) return 0;
        for (var a = d.length - 1; a >= 0; a--) {
            b = d[a];
            if (c("Style").get(b, "position") != "static") {
                b = parseInt(c("Style").get(b, "z-index"), 10);
                if (!isNaN(b)) return b
            }
        }
        return 0
    }
    g["default"] = a
}), 98);
__d("ContextualLayer", ["invariant", "ARIA", "Arbiter", "Bootloader", "CSS", "ContextualLayerAlignmentEnum", "ContextualLayerPositionEnum", "ContextualThing", "DOM", "DataStore", "Event", "Layer", "Locale", "Parent", "Rect", "SVGChecker", "Scroll", "Style", "Vector", "containsNode", "cr:971473", "emptyFunction", "getOffsetParent", "getOrCreateDOMID", "getOverlayZIndex", "getOwnObjectValues", "gkx", "isElementNode", "killswitch", "removeFromArray", "throttle"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return a.getPosition() === "left" || a.isVertical() && a.getAlignment() === "right"
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d._configure = function(b, c) {
            b.dialogRole !== "dialog" && (this._dialogRole = b.dialogRole), b.shouldSetARIAProperties === !1 && (this._shouldSetARIAProperties = b.shouldSetARIAProperties), b.label && (this._label = b.label), b.labelledBy && (this._labelledBy = b.labelledBy), a.prototype._configure.call(this, b, c), b.context ? this.setContext(b.context) : b.contextID ? this._setContextID(b.contextID) : b.contextSelector && (this._setContextSelector(b.contextSelector), this._setARIAProperties()), this.setPosition(b.position), this.setAlignment(b.alignment), this.setOffsetX(b.offsetX), this.setOffsetY(b.offsetY), this.setArrowDimensions(b.arrowDimensions), this._content = c
        };
        d._getDefaultBehaviors = function() {
            var d = c.getDefaultBehaviorsAsObject();
            return a.prototype._getDefaultBehaviors.call(this).concat(b("getOwnObjectValues")(d))
        };
        d._buildWrapper = function(a, c) {
            this._contentWrapper = b("DOM").create("div", {
                className: "uiContextualLayer"
            }, c);
            this._dialogRole && this._contentWrapper.setAttribute("role", this._dialogRole);
            this._labelledBy ? this._contentWrapper.setAttribute("aria-labelledby", this._labelledBy) : this._label && this._contentWrapper.setAttribute("aria-label", this._label);
            this._dialogRole === "alert" && this._contentWrapper.setAttribute("aria-atomic", "true");
            return b("DOM").create("div", {
                className: "uiContextualLayerPositioner",
                "data-testid": a["data-testid"]
            }, this._contentWrapper)
        };
        d.getInsertParent = function() {
            var c = this._insertParent;
            if (!c) {
                var d = this.getContext();
                d && (c = b("Parent").byClass(d, "uiContextualLayerParent"))
            }
            return c || a.prototype.getInsertParent.call(this)
        };
        d.setContent = function(a) {
            this._content = a;
            b("DOM").setContent(this._contentWrapper, this._content);
            this._shown && this.updatePosition();
            return this
        };
        d.setContext = function(a) {
            return this.setContextWithBounds(a, null)
        };
        d.setContextWithBounds = function(a, c) {
            if (this._contextNode === a && c && this._contextBounds && c.isEqualTo(this._contextBounds)) return this;
            this._contextNode = a;
            var d = c && this._contextBounds && c.t === this._contextBounds.t && c.r === this._contextBounds.r && c.b === this._contextBounds.b && c.l === this._contextBounds.l;
            if (d) return this;
            this._contextBounds = c || null;
            this._contextSelector = "#" + b("getOrCreateDOMID")(a);
            this._contextScrollParent = null;
            this._shown && (b("ContextualThing").register(this.getRoot(), this._contextNode), this.updatePosition());
            this._setParentSubscription();
            this._setARIAProperties();
            return this
        };
        d.shouldSetARIAProperties = function(a) {
            this._shouldSetARIAProperties = a;
            return this
        };
        d._setARIAProperties = function() {
            var a = this;
            if (!this._shouldSetARIAProperties) return this;
            this._dialogRole === "dialog" ? b("ARIA").setPopup(this.getCausalElement(), this.getRoot()) : this._dialogRole === "region" && b("Bootloader").loadModules(["ContextualLayerInlineTabOrder"], function(b) {
                a.hasBehavior(b) || a.enableBehavior(b)
            }, "ContextualLayer");
            return this
        };
        d._setContextID = function(a) {
            this._contextSelector = "#" + a, this._contextNode = null
        };
        d._setContextSelector = function(a) {
            this._contextSelector = a, this._contextNode = null
        };
        d.getCausalElement = function() {
            return a.prototype.getCausalElement.call(this) || this.getContext()
        };
        d._setParentSubscription = function() {
            var a = this.getContext(),
                c = null;
            while (a != null) {
                c = b("DataStore").get(a, "layer");
                if (c && typeof c === "object") break;
                a = a.parentNode
            }
            if (c === this._parentLayer) return;
            this._parentLayer && this._parentSubscription && (this._parentLayer.unsubscribe(this._parentSubscription), this._parentSubscription = null);
            c && (this._parentSubscription = c.subscribe("hide", this.hide.bind(this)));
            this._parentLayer = c
        };
        d.setPosition = function(a) {
            this.getOrientation().setDefaultPosition(a) && (this._shown && this.updatePosition());
            return this
        };
        d.setAlignment = function(a) {
            this.getOrientation().setDefaultAlignment(a) && (this._shown && this.updatePosition());
            return this
        };
        d.setOffsetX = function(a) {
            this.getOrientation().setDefaultOffsetX(a) && (this._shown && this.updatePosition());
            return this
        };
        d.setArrowDimensions = function(a) {
            a && this.getOrientation().setArrowOffset(a.offset) && (this._shown && this.updatePosition());
            return this
        };
        d.setOffsetY = function(a) {
            this.getOrientation().setDefaultOffsetY(a) && (this._shown && this.updatePosition());
            return this
        };
        d.getPosition = function() {
            return this.getOrientation().getPosition()
        };
        d.getOrientation = function() {
            this._orientation || (this._orientation = new l());
            return this._orientation
        };
        d.getContentRoot = function() {
            return this._contentWrapper
        };
        d.getContent = function() {
            return this._content
        };
        d.getContext = function() {
            this._contextNode || (this._contextSelector != null || g(0, 11711), this._contextNode = b("DOM").find(document, this._contextSelector));
            return this._contextNode
        };
        d.getContextBounds = function(a) {
            if (this._contextBounds) return this._contextBounds.convertTo(a);
            var c = this.getContext();
            return b("Rect").newFromVectors(b("Vector").getElementPosition(c, a), b("Vector").getElementDimensions(c))
        };
        d.getContextScrollParent = function() {
            !this._contextScrollParent ? this._contextScrollParent = b("Style").getScrollParent(this.getContext()) : b("isElementNode")(this._contextScrollParent) && !b("containsNode")(document.documentElement, this._contextScrollParent) && (this._contextScrollParent = b("Style").getScrollParent(this.getContext()));
            return this._contextScrollParent
        };
        d.setInsertParent = function(b) {
            this._insertScrollParent = null;
            return a.prototype.setInsertParent.call(this, b)
        };
        d.getInsertScrollParent = function() {
            this._insertScrollParent || (this._insertScrollParent = b("Style").getScrollParent(this.getInsertParent()));
            return this._insertScrollParent
        };
        d.show = function() {
            var c = this;
            if (this._shown) return this;
            a.prototype.show.call(this);
            b("Arbiter").inform("contextualLayer/toggle", {
                show: !0,
                contentRoot: this.getRoot()
            });
            this._shown && (b("ContextualThing").register(this.getRoot(), this.getContext()), i.push(this), this._resizeListener = this._resizeListener || b("Event").listen(window, "resize", b("throttle")(function() {
                c._shown && c.updatePosition()
            })));
            return this
        };
        d.finishHide = function() {
            b("removeFromArray")(i, this);
            this._resizeListener && this._resizeListener.remove();
            this._resizeListener = null;
            this._insertScrollParent = null;
            b("Arbiter").inform("contextualLayer/toggle", {
                show: !1,
                contentRoot: this.getRoot()
            });
            return a.prototype.finishHide.call(this)
        };
        d.isFixed = function() {
            return b("Style").isFixed(this.getContext()) && !b("Style").isFixed(this.getInsertParent())
        };
        d.updatePosition = function() {
            var a = this.getContext();
            if (!a) return !1;
            var c = this.isFixed();
            if (!c && !(a.offsetParent || b("SVGChecker").isSVG(a) && b("SVGChecker").isDisplayed(a))) return !1;
            var d = this.getRoot(),
                e = !b("killswitch")("CONTEXTUAL_POSITIONING_MOBILE_FIX"),
                f = e ? b("Vector").getLayoutViewportDimensions().x : b("Vector").getViewportDimensions().x;
            b("Style").set(d, "width", f + "px");
            var g = this.getOrientation();
            this.inform("adjust", g.reset());
            if (!g.isValid()) return !1;
            this._updateWrapperPosition(g);
            this._updateWrapperClass(g);
            b("CSS").conditionClass(d, "uiContextualLayerPositionerFixed", c);
            var i = c ? "viewport" : "document",
                j = c ? document.documentElement : b("getOffsetParent")(d);
            if (c && e) c = new(b("Vector"))(0, 0), e = f;
            else if (j === document.documentElement) c = new(b("Vector"))(0, 0), e = document.documentElement.clientWidth;
            else if (!d.offsetParent) return !1;
            else c = b("Vector").getElementPosition(j, i), e = j.offsetWidth, j !== document.body && (c = c.sub(new(b("Vector"))(b("Scroll").getLeft(j), b("Scroll").getTop(j))));
            f = this.getContextBounds(i);
            j = f.l - c.x;
            i = f.t - c.y;
            c = f.h();
            f = f.w();
            var k = b("Locale").isRTL();
            g.getPosition() === "below" && (i += c);
            (g.getPosition() === "right" || g.isVertical() && g.getAlignment() === "right") != k && (j += f);
            c = g.getOffsetX();
            g.isVertical() && g.getAlignment() === "center" && (c += (f - this.getContentRoot().offsetWidth) / 2);
            k && (c *= -1);
            f = "left";
            j = Math.floor(j + c);
            h(g) !== k && (f = "right", j = e - j);
            b("Style").set(d, f, j + "px");
            b("Style").set(d, f === "left" ? "right" : "left", "");
            c = this.getInsertScrollParent();
            k = 0;
            c !== window ? (e = c.clientWidth, k = b("Vector").getElementPosition(c).x) : e = document.documentElement.clientWidth;
            j = b("Vector").getElementPosition(d).x - k;
            c = 0;
            k = window.devicePixelRatio !== Math.round(window.devicePixelRatio);
            c = k ? 1 : 0;
            b("gkx")("1908135") && (c = 1);
            f === "left" && e - j > 0 ? b("Style").set(d, "width", e - j - c + "px") : f === "right" && j + d.offsetWidth > 0 ? b("Style").set(d, "width", j + d.offsetWidth - c + "px") : b("Style").set(d, "width", "");
            b("Style").set(d, "top", i + g.getOffsetY() + "px");
            k = b("getOverlayZIndex")(a, this.getInsertParent());
            b("Style").set(d, "z-index", k > 200 ? k : "");
            this.inform("reposition", g);
            return !0
        };
        d._updateWrapperPosition = function(a) {
            var c = a.getPosition() === "above";
            b("Style").set(this._contentWrapper, "bottom", c ? "0" : null);
            c = b("Locale").isRTL() ? "left" : "right";
            a = h(a);
            b("Style").set(this._contentWrapper, c, a ? "0" : null)
        };
        d._updateWrapperClass = function(a) {
            a = a.getClassName();
            if (a === this._orientationClass) return;
            this._orientationClass && b("CSS").removeClass(this._contentWrapper, this._orientationClass);
            this._orientationClass = a;
            b("CSS").addClass(this._contentWrapper, a)
        };
        d.simulateOrientation = function(a, c) {
            a = a.getClassName();
            if (a === this._orientationClass) return c();
            else {
                this._orientationClass && b("CSS").removeClass(this._contentWrapper, this._orientationClass);
                b("CSS").addClass(this._contentWrapper, a);
                c = c();
                b("CSS").removeClass(this._contentWrapper, a);
                this._orientationClass && b("CSS").addClass(this._contentWrapper, this._orientationClass);
                return c
            }
        };
        d.destroy = function() {
            a.prototype.destroy.call(this);
            this._contentWrapper = null;
            this._content = null;
            return this
        };
        d.getArrowDimensions = function() {
            return this._config.arrowDimensions || {
                offset: 0,
                length: 0
            }
        };
        c.getDefaultBehaviorsAsObject = function() {
            return b("cr:971473") == null ? {} : {
                LayerHideOnTransition: b("cr:971473")
            }
        };
        return c
    }(b("Layer"));
    var i = [];
    b("Arbiter").subscribe("reflow", function() {
        i.forEach(function(a) {
            a.updatePosition() === !1 && a.hide()
        })
    });
    Object.assign(a.prototype, {
        _contentWrapper: null,
        _content: null,
        _contextNode: null,
        _contextBounds: null,
        _contextSelector: null,
        _dialogRole: "dialog",
        _label: null,
        _labelledBy: [],
        _parentLayer: null,
        _parentSubscription: null,
        _orientation: null,
        _orientationClass: null,
        _shouldSetARIAProperties: !0
    });
    var j = b("emptyFunction").thatReturnsArgument,
        k = b("emptyFunction").thatReturnsArgument,
        l = function() {
            "use strict";

            function a() {
                this._default = {
                    _position: "above",
                    _alignment: "left",
                    _offsetX: 0,
                    _offsetY: 0,
                    _valid: !0,
                    _preferMoreContentShownRect: !1
                }, this.reset()
            }
            var b = a.prototype;
            b.setPosition = function(a) {
                this._position = j(a);
                return this
            };
            b.setAlignment = function(a) {
                this._alignment = k(a);
                return this
            };
            b.getOppositePosition = function() {
                return a.OPPOSITE[this.getPosition()]
            };
            b.invalidate = function() {
                this._valid = !1;
                return this
            };
            b.getPosition = function() {
                return this._position || "above"
            };
            b.getAlignment = function() {
                return this._alignment || "left"
            };
            b.getOffsetX = function() {
                var a = this._offsetX || 0;
                !this.isVertical() ? this._default._position !== this._position && (a *= -1) : this._default._alignment !== this._alignment && (a *= -1);
                return a
            };
            b.getOffsetY = function() {
                var a = this._offsetY || 0;
                this.isVertical() && this._default._position !== this._position && (a *= -1);
                return a
            };
            b.getClassName = function() {
                var a = this.getAlignment(),
                    b = this.getPosition();
                if (b === "below")
                    if (a === "left") return "uiContextualLayerBelowLeft";
                    else if (a === "right") return "uiContextualLayerBelowRight";
                else return "uiContextualLayerBelowCenter";
                else if (b === "above")
                    if (a === "left") return "uiContextualLayerAboveLeft";
                    else if (a === "right") return "uiContextualLayerAboveRight";
                else return "uiContextualLayerAboveCenter";
                else if (b === "left") return "uiContextualLayerLeft";
                else return "uiContextualLayerRight"
            };
            b.isValid = function() {
                return this._valid
            };
            b.isVertical = function() {
                return this.getPosition() === "above" || this.getPosition() === "below"
            };
            b.reset = function() {
                Object.assign(this, this._default);
                return this
            };
            b.setDefaultPosition = function(a) {
                var b = this._default._position;
                this._default._position = j(a);
                return b !== a
            };
            b.setDefaultAlignment = function(a) {
                var b = this._default._alignment;
                this._default._alignment = k(a);
                return b !== a
            };
            b.setDefaultOffsetX = function(a) {
                var b = this._default._offsetX;
                this._default._offsetX = a;
                return b !== a
            };
            b.setArrowOffset = function(a) {
                var b = this._default._arrowOffset;
                this._default._arrowOffset = a;
                return b !== a
            };
            b.getArrowOffset = function() {
                return this._default._arrowOffset || 0
            };
            b.setDefaultOffsetY = function(a) {
                var b = this._default._offsetY;
                this._default._offsetY = a;
                return b !== a
            };
            b.setPreferMoreContentShownRect = function(a) {
                var b = this._default._preferMoreContentShownRect;
                this._default._preferMoreContentShownRect = a;
                return b !== a
            };
            b.getPreferMoreContentShownRect = function() {
                return this._default._preferMoreContentShownRect
            };
            return a
        }();
    l.OPPOSITE = {
        above: "below",
        below: "above",
        left: "right",
        right: "left"
    };
    e.exports = a
}), null);
__d("ContextualLayerHideOnScroll", ["Event", "setTimeout"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._subscriptions = [this._layer.subscribe("contextchange", this._handleContextChange.bind(this)), this._layer.subscribe("show", this.attach.bind(this)), this._layer.subscribe("hide", this.detach.bind(this))]
        };
        b.disable = function() {
            while (this._subscriptions.length) this._subscriptions.pop().unsubscribe();
            this.detach()
        };
        b.attach = function() {
            var a = this;
            if (this._listener) return;
            var b = this._layer.getContextScrollParent();
            if (b === window) return;
            c("setTimeout")(function() {
                a._listener = c("Event").listen(b, "scroll", function() {
                    a._layer.hide()
                })
            })
        };
        b.detach = function() {
            this._listener && this._listener.remove(), this._listener = null
        };
        b._handleContextChange = function() {
            this.detach(), this._layer.isShown() && this.attach()
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscriptions: []
    });
    g["default"] = a
}), 98);
__d("Popover", ["ContextualLayer", "ContextualLayerHideOnScroll", "DOM", "ParameterizedPopover"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d._init = function() {
            var b = new(c("ContextualLayer"))({
                context: this._triggerElem,
                position: "below",
                arrowDimensions: {
                    offset: 12,
                    length: 16
                },
                "data-testid": this._config["data-testid"]
            }, c("DOM").create("div"));
            this._config.shouldDisableHideOnScroll || b.enableBehaviors([c("ContextualLayerHideOnScroll")]);
            this._config.layer = b;
            this._config.alignh && b.setAlignment(this._config.alignh);
            this._config.layer_content && b.setContent(this._config.layer_content);
            this._config.position && b.setPosition(this._config.position);
            this._config.arrowDimensions && b.setArrowDimensions(this._config.arrowDimensions);
            a.prototype._init.call(this)
        };
        d.destroy = function() {
            a.prototype.destroy.call(this), this._layer && this._layer.destroy()
        };
        return b
    }(c("ParameterizedPopover"));
    g["default"] = a
}), 98);
__d("PopoverMenu", ["ARIA", "ArbiterMixin", "BehaviorsMixin", "Event", "Focus", "KeyStatus", "Keys", "SubscriptionsHandler", "VirtualCursorStatus", "mixin", "setTimeout"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g) {
            var h;
            h = a.call(this) || this;
            h._popover = b;
            h._triggerElem = e;
            h._getInitialMenu = typeof f !== "function" ? function() {
                return f
            } : f;
            h._subscriptions = new(c("SubscriptionsHandler"))();
            h._subscriptions.addSubscriptions(b.subscribe("init", h._onLayerInit.bind(babelHelpers.assertThisInitialized(h))), b.subscribe("show", h._onPopoverShow.bind(babelHelpers.assertThisInitialized(h))), b.subscribe("hide", h._onPopoverHide.bind(babelHelpers.assertThisInitialized(h))), c("Event").listen(h._triggerElem, "keydown", h._handleKeyEventOnTrigger.bind(babelHelpers.assertThisInitialized(h))), d("VirtualCursorStatus").add(h._triggerElem, h._checkInitialFocus.bind(babelHelpers.assertThisInitialized(h))));
            g && h.enableBehaviors(g);
            return h
        }
        var e = b.prototype;
        e.getContentRoot = function() {
            return this._popover.getContentRoot()
        };
        e.setMenu = function(a) {
            this._menu && this._menu !== a && this._menu.destroy();
            this._menu = a;
            var b = a.getRoot();
            this._popover.setLayerContent(b);
            a.subscribe("done", this._onMenuDone.bind(this));
            this._popoverShown && this._menu.onShow();
            d("ARIA").controls(this._triggerElem, b);
            this.inform("setMenu", null, "persistent")
        };
        e.setInitialFocus = function(a, b) {
            b && a.focusAnItem()
        };
        e.getPopover = function() {
            return this._popover
        };
        e.getTriggerElem = function() {
            return this._triggerElem
        };
        e.getInitialMenu = function() {
            return this._getInitialMenu()
        };
        e.getMenu = function() {
            return this._menu
        };
        e._onLayerInit = function() {
            this._menu || this.setMenu(this._getInitialMenu()), this._popover.getLayer().subscribe("key", this._handleKeyEvent.bind(this))
        };
        e._onPopoverShow = function() {
            this._menu && this._menu.onShow(), this._checkInitialFocus(), this._popoverShown = !0
        };
        e._checkInitialFocus = function() {
            var a = d("KeyStatus").isKeyDown() || d("VirtualCursorStatus").isVirtualCursorTriggered();
            this._menu && this.setInitialFocus(this._menu, a)
        };
        e._onPopoverHide = function() {
            this._menu && this._menu.onHide(), this._popoverShown = !1
        };
        e._handleKeyEvent = function(a, b) {
            if (b.target === this._triggerElem) return;
            a = c("Event").getKeyCode(b);
            if (a === c("Keys").TAB) {
                this._popover.hideLayer();
                d("Focus").set(this._triggerElem);
                return
            }
            if (b.getModifiers().any) return;
            switch (a) {
                case c("Keys").RETURN:
                    this.getMenu().getFocusedItem() || this.inform("returnWithoutFocusedItem");
                    return;
                default:
                    if (a === c("Keys").SPACE && b.target.type === "file") return;
                    this._menu.handleKeydown(a, b) === !1 && (this._menu.blur(), this._menu.handleKeydown(a, b));
                    break
            }
            b.prevent()
        };
        e._handleKeyEventOnTrigger = function(a) {
            if (this._isTypeaheadActivationDisabled) return;
            var b = c("Event").getKeyCode(a),
                e = String.fromCharCode(b).toLowerCase();
            /^\w$/.test(e) && (this._popover.showLayer(), this._menu.blur(), this._menu.handleKeydown(b, a) === !1 && (this._popover.hideLayer(), d("Focus").set(this._triggerElem)))
        };
        e.disableTypeaheadActivation = function() {
            this._isTypeaheadActivationDisabled = !0
        };
        e.enableTypeaheadActivation = function() {
            this._isTypeaheadActivationDisabled = !1
        };
        e._onMenuDone = function(a) {
            var b = this;
            c("setTimeout")(function() {
                b._popover.hideLayer(), d("Focus").set(b._triggerElem)
            }, 0)
        };
        e.enable = function() {
            this._popover.enable()
        };
        e.disable = function() {
            this._popover.disable()
        };
        e.destroy = function() {
            this._subscriptions.release(), this._popover.destroy(), this._getInitialMenu().destroy(), this._menu && this._menu.destroy()
        };
        return b
    }(c("mixin")(c("ArbiterMixin"), c("BehaviorsMixin")));
    Object.assign(a.prototype, {
        _popoverShown: !1
    });
    g["default"] = a
}), 98);
__d("SelectableMenuUtils", [], (function(a, b, c, d, e, f) {
    a = {
        doesItemSupportSelect: function(a) {
            return g(a)
        },
        isSelected: function(a) {
            return g(a) && a.isSelected()
        }
    };

    function g(a) {
        return a.select && a.deselect && a.isSelected
    }
    e.exports = a
}), null);
__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        cookieName: "dpr"
    })
}), null);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = !1,
        j = !1;

    function k() {
        return window.devicePixelRatio || 1
    }

    function l() {
        c("Cookie").set(c("PixelRatioConst").cookieName, String(k()))
    }

    function m() {
        c("Cookie").clear(c("PixelRatioConst").cookieName)
    }

    function n() {
        if (i) return;
        i = !0;
        j && m();
        k() !== d("WebPixelRatio").get() && l()
    }

    function a(a) {
        a && (j = !0);
        if (h) return;
        h = !0;
        "onpagehide" in window && d("DOMEventListener").add(window, "pagehide", n);
        d("Run").onBeforeUnload(n, !1)
    }
    g.startDetecting = a
}), 98);
__d("UITinyViewportAction", ["Arbiter", "ArbiterMixin", "CSS", "Event", "FullScreen", "getDocumentScrollElement", "queryThenMutateDOM", "throttle"], (function(a, b, c, d, e, f) {
    var g = document.documentElement,
        h, i, j, k, l = !1,
        m = !1,
        n = !1,
        o = {
            init: function(a) {
                a = b("throttle")(function() {
                    if (b("FullScreen").isFullScreen()) return;
                    b("queryThenMutateDOM")(function() {
                        k = k || b("getDocumentScrollElement")(), i = g.clientWidth < k.scrollWidth - 1, j = g.clientHeight < 400, h = j || i
                    }, function() {
                        if (h !== l || i !== m || j !== n) {
                            var a;
                            (a = b("CSS")).conditionClass(g, "tinyViewport", h);
                            a.conditionClass(g, "tinyWidth", i);
                            a.conditionClass(g, "tinyHeight", j);
                            a.conditionClass(g, "canHaveFixedElements", !h);
                            o.inform("change", h);
                            b("Arbiter").inform("tinyViewport/change", {
                                tiny: h,
                                tinyWidth: i,
                                tinyHeight: j
                            }, "state");
                            l = h;
                            m = i;
                            n = j
                        }
                    }, "TinyViewport")
                });
                a();
                b("Arbiter").subscribe("quickling/response", a);
                b("Event").listen(window, "resize", a);
                b("FullScreen").subscribe("changed", a)
            },
            isTiny: function() {
                return h
            },
            isTinyWidth: function() {
                return i
            },
            isTinyHeight: function() {
                return j
            }
        };
    Object.assign(o, b("ArbiterMixin"));
    e.exports = o
}), null);
__d("MenuSelectableItem", ["cx", "CSS", "DOM", "MenuItem"], (function(a, b, c, d, e, f, g, h) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b._selected = !1;
            b._ARIARole = "menuitemcheckbox";
            b._selected = !!b._data.selected;
            return b
        }
        var e = b.prototype;
        e.getIcon = function() {
            return this._data.icon
        };
        e.setIcon = function(a) {
            c("DOM").replace(this._data.icon, a), this._data.icon = a
        };
        e.isSelected = function() {
            return this._selected
        };
        e.select = function() {
            if (this.isDisabled()) return !1;
            d("CSS").addClass(this._root, "_54nd");
            this._anchor.setAttribute("aria-checked", "true");
            this._selected = !0
        };
        e.deselect = function() {
            d("CSS").removeClass(this._root, "_54nd"), this._anchor.setAttribute("aria-checked", "false"), this._selected = !1
        };
        e.render = function() {
            var b = a.prototype.render.call(this);
            this._data.selected && (d("CSS").addClass(b, "_54nd"), this._anchor.setAttribute("aria-checked", "true"));
            return b
        };
        return b
    }(c("MenuItem"));
    g["default"] = a
}), 98);
__d("SelectableMenu", ["Menu", "SelectableMenuUtils", "createArrayFromMixed"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.focusAnItem = function() {
            for (var c = 0; c < this._items.length; c++)
                if (b("SelectableMenuUtils").isSelected(this._items[c]) && this._focusItem(this._items[c]) !== !1) return !0;
            return a.prototype.focusAnItem.call(this)
        };
        d.setValue = function(a) {
            this._root || this._render();
            var c = b("createArrayFromMixed")(a);
            this._items.forEach(function(a) {
                b("SelectableMenuUtils").doesItemSupportSelect(a) && (c.includes(a.getValue()) ? a.select() : b("SelectableMenuUtils").isSelected(a) && a.deselect())
            });
            this.inform("change", this.getSelection())
        };
        d._handleItemClick = function(c, d) {
            if (!b("SelectableMenuUtils").doesItemSupportSelect(c)) return a.prototype._handleItemClick.call(this, c, d);
            var e = this.inform("itemclick", {
                item: c,
                event: d
            });
            if (e) return;
            if (this._config.multiple) {
                e = b("SelectableMenuUtils").isSelected(c) ? c.deselect() : c.select();
                e !== !1 && this.inform("change", this.getSelection());
                this._config.closeOnSelectWithMultiple && this.done()
            } else b("SelectableMenuUtils").isSelected(c) || c.select() !== !1 && (this._items.forEach(function(a) {
                b("SelectableMenuUtils").isSelected(a) && a !== c && a.deselect()
            }), this.inform("change", this.getSelection())), this.done();
            return c.handleClick(d)
        };
        d.getSelection = function() {
            var a = [];
            this._items.forEach(function(c) {
                b("SelectableMenuUtils").isSelected(c) && a.push({
                    label: c.getLabel(),
                    value: c.getValue(),
                    item: c
                })
            });
            this._config.multiple || (a = a[0]);
            return a
        };
        return c
    }(b("Menu"));
    e.exports = a
}), null);
__d("Button", ["csx", "cx", "invariant", "CSS", "DOM", "DataStore", "Event", "Parent", "emptyFunction", "isNode"], (function(a, b, c, d, e, f, g, h, i, j) {
    var k = "uiButtonDisabled",
        l = "uiButtonDepressed",
        m = "_42fr",
        n = "_42fs",
        o = "button:blocker",
        p = "href",
        q = "ajaxify";

    function r(a, b) {
        var e = d("DataStore").get(a, o);
        b ? e && (e.remove(), d("DataStore").remove(a, o)) : e || d("DataStore").set(a, o, c("Event").listen(a, "click", c("emptyFunction").thatReturnsFalse, c("Event").Priority.URGENT))
    }

    function s(a) {
        a = d("Parent").byClass(a, "uiButton") || d("Parent").bySelector(a, "._42ft");
        if (!a) throw new Error("invalid use case");
        return a
    }

    function t(a) {
        return c("DOM").isNodeOfType(a, "a")
    }

    function u(a) {
        return c("DOM").isNodeOfType(a, "button")
    }

    function v(a) {
        return d("CSS").matchesSelector(a, "._42ft")
    }
    var w = {
        getInputElement: function(a) {
            a = s(a);
            if (t(a)) throw new Error("invalid use case");
            if (u(a)) {
                a instanceof HTMLButtonElement || j(0, 21261);
                return a
            }
            return c("DOM").find(a, "input")
        },
        isEnabled: function(a) {
            return !(d("CSS").hasClass(s(a), k) || d("CSS").hasClass(s(a), m))
        },
        setEnabled: function(a, b) {
            a = s(a);
            var c = v(a) ? m : k;
            d("CSS").conditionClass(a, c, !b);
            if (t(a)) {
                c = a.getAttribute("href");
                var e = a.getAttribute("ajaxify"),
                    f = d("DataStore").get(a, p, "#"),
                    g = d("DataStore").get(a, q);
                b ? (c || a.setAttribute("href", f), !e && g && a.setAttribute("ajaxify", g), a.removeAttribute("tabIndex")) : (c && c !== f && d("DataStore").set(a, p, c), e && e !== g && d("DataStore").set(a, q, e), a.removeAttribute("href"), a.removeAttribute("ajaxify"), a.setAttribute("tabIndex", "-1"));
                r(a, b)
            } else {
                f = w.getInputElement(a);
                f.disabled = !b;
                r(f, b)
            }
        },
        setDepressed: function(a, b) {
            a = s(a);
            var c = v(a) ? n : l;
            d("CSS").conditionClass(a, c, b)
        },
        isDepressed: function(a) {
            a = s(a);
            var b = v(a) ? n : l;
            return d("CSS").hasClass(a, b)
        },
        setLabel: function(a, b) {
            a = s(a);
            if (v(a)) {
                var e = [];
                b && e.push(b);
                var f = c("DOM").scry(a, ".img");
                for (var g = 0; g < f.length; g++) {
                    var h = f[g],
                        i = h.parentNode;
                    i.classList && (i.classList.contains("_4o_3") || i.classList.contains("_-xe")) ? a.firstChild === i ? e.unshift(i) : e.push(i) : a.firstChild == h ? e.unshift(h) : e.push(h)
                }
                c("DOM").setContent(a, e)
            } else if (t(a)) {
                i = c("DOM").find(a, "span.uiButtonText");
                c("DOM").setContent(i, b)
            } else w.getInputElement(a).value = b;
            h = v(a) ? "_42fv" : "uiButtonNoText";
            d("CSS").conditionClass(a, h, !b)
        },
        getIcon: function(a) {
            a = s(a);
            return c("DOM").scry(a, ".img")[0]
        },
        setIcon: function(a, b) {
            if (b && !c("isNode")(b)) return;
            var e = w.getIcon(a);
            if (!b) {
                e && c("DOM").remove(e);
                return
            }
            d("CSS").addClass(b, "customimg");
            e != b && (e ? c("DOM").replace(e, b) : c("DOM").prependContent(s(a), b))
        }
    };
    a = w;
    g["default"] = a
}), 98);
__d("XUIMenuTheme", ["cx"], (function(a, b, c, d, e, f, g) {
    e.exports = {
        className: "_558b"
    }
}), null);
__d("XUIMenuWithSquareCorner", ["cx", "CSS"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.enable = function() {
            d("CSS").addClass(this.$1.getRoot(), "_2n_z")
        };
        b.disable = function() {
            d("CSS").removeClass(this.$1.getRoot(), "_2n_z")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("LayerBounds", ["Locale", "Rect", "ViewportBounds", "containsNode", "ge", "getOverlayZIndex"], (function(a, b, c, d, e, f) {
    a = {
        getViewportRectForContext: function(a) {
            var c = b("ge")("globalContainer");
            c = c && b("containsNode")(c, a) || b("getOverlayZIndex")(a) < 300;
            a = b("Rect").getViewportWithoutScrollbarsBounds();
            c && (a.t += b("ViewportBounds").getTop(), b("Locale").isRTL() ? (a.r -= b("ViewportBounds").getLeft(), a.l += b("ViewportBounds").getRight()) : (a.r -= b("ViewportBounds").getRight(), a.l += b("ViewportBounds").getLeft()));
            return a
        }
    };
    e.exports = a
}), null);
__d("ContextualLayerDimensions", ["LayerBounds", "Locale", "Rect", "Vector"], (function(a, b, c, d, e, f) {
    a = {
        getViewportRect: function(a) {
            return b("LayerBounds").getViewportRectForContext(a.getContext())
        },
        getLayerRect: function(a, c) {
            var d = a.getContextBounds("viewport"),
                e = a.simulateOrientation(c, function() {
                    return b("Vector").getElementDimensions(a.getContentRoot())
                }),
                f = d.t + c.getOffsetY();
            c.getPosition() === "above" ? f -= e.y : c.getPosition() === "below" && (f += d.b - d.t);
            var g = d.l + c.getOffsetX();
            d = d.r - d.l;
            if (c.isVertical()) {
                var h = c.getAlignment();
                h === "center" ? g += (d - e.x) / 2 : h === "right" !== b("Locale").isRTL() ? g += d - e.x + c.getArrowOffset() : g -= c.getArrowOffset()
            } else c.getPosition() === "right" !== b("Locale").isRTL() ? g += d : g -= e.x;
            return new(b("Rect"))(f, g + e.x, f + e.y, g, "viewport")
        }
    };
    e.exports = a
}), null);
__d("ContextualLayerAutoFlip", ["ContextualLayerAlignmentEnum", "ContextualLayerDimensions", "DOMDimensions", "Rect", "Vector", "getDocumentScrollElement"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        b = new(c("Rect"))(b).convertTo(a.domain);
        var d = Math.max(a.l, b.l);
        a = Math.min(a.r, b.r);
        return Math.max(a - d, 0)
    }
    a = function() {
        function a(a) {
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._subscription = this._layer.subscribe("adjust", this._adjustOrientation.bind(this)), this._layer.isShown() && this._layer.updatePosition()
        };
        b.disable = function() {
            this._subscription && (this._subscription.unsubscribe(), this._subscription = null), this._layer.isShown() && this._layer.updatePosition()
        };
        b._adjustOrientation = function(a, b) {
            a = this.getValidPositions(b);
            if (!a.length) {
                b.invalidate();
                return
            }
            var e = d("ContextualLayerDimensions").getViewportRect(this._layer),
                f = this._getValidAlignments(b),
                g, i, j;
            for (g = 0; g < f.length; g++) {
                b.setAlignment(f[g]);
                for (i = 0; i < a.length; i++) {
                    b.setPosition(a[i]);
                    j = d("ContextualLayerDimensions").getLayerRect(this._layer, b);
                    if (e.contains(j)) return
                }
            }
            var k = -1;
            if (b.getPreferMoreContentShownRect()) {
                var l = d("DOMDimensions").getDocumentDimensions(),
                    m = new(c("Rect"))(e).convertTo("document"),
                    n = 99999;
                for (i = 0; i < a.length; i++) {
                    b.setPosition(a[i]);
                    j = d("ContextualLayerDimensions").getLayerRect(this._layer, b);
                    var o = new(c("Rect"))(j).convertTo("document");
                    if (o.l >= 0 && o.r <= l.width && o.t >= 43 && o.b <= l.height) {
                        var p = m.l - o.l,
                            q = o.r - m.r,
                            r = m.t - o.t;
                        o = o.b - m.b;
                        p = (p > 0 ? p : 0) + (q > 0 ? q : 0) + (r > 0 ? r : 0) + (o > 0 ? o : 0);
                        p < n && (k = i, n = p)
                    }
                }
            }
            this.__setBestPosition(k, b, a);
            q = 0;
            r = 0;
            for (g = 0; g < f.length; g++) b.setAlignment(f[g]), j = d("ContextualLayerDimensions").getLayerRect(this._layer, b), o = h(e, j), o > r && (r = o, q = g);
            b.setAlignment(f[q])
        };
        b.__setBestPosition = function(a, b, c) {
            a >= 0 ? b.setPosition(c[a]) : b.setPosition(c.includes("below") ? "below" : c[0])
        };
        b.getValidPositions = function(a) {
            var b = [a.getPosition(), a.getOppositePosition()],
                d = this._layer.getContextScrollParent();
            if (d === window || d === c("getDocumentScrollElement")()) return b;
            var e = this._layer.getContext(),
                f = c("Vector").getElementPosition(d, "viewport").y,
                g = c("Vector").getElementPosition(e, "viewport").y;
            if (a.isVertical()) return b.filter(function(a) {
                if (a === "above") return g >= f;
                else {
                    a = f + d.offsetHeight;
                    var b = g + e.offsetHeight;
                    return b <= a
                }
            });
            else {
                a = f + d.offsetHeight;
                if (g >= f && g + e.offsetHeight <= a) return b;
                else return []
            }
        };
        b._getValidAlignments = function(a) {
            var b = Array.from(c("ContextualLayerAlignmentEnum").values);
            a = a.getAlignment();
            var d = b.indexOf(a);
            d > 0 && (b.splice(d, 1), b.unshift(a));
            return b
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscription: null
    });
    g["default"] = a
}), 98);
__d("abstractMethod", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b) {
        h(0, 1537, a, b)
    }
    g["default"] = a
}), 98);
__d("AbstractContextualDialogArrowBehavior", ["cx", "CSS", "DOM", "Locale", "Style", "Vector", "abstractMethod"], (function(a, b, c, d, e, f, g) {
    var h = {
            bottom: "_53ik",
            top: "_53il",
            right: "_53im",
            left: "_53in"
        },
        i = {
            above: "bottom",
            below: "top",
            left: "right",
            right: "left"
        };
    a = function() {
        "use strict";

        function a(a) {
            this.__layer = this._layer = a
        }
        var c = a.prototype;
        c.enable = function() {
            this._subscription = this._layer.subscribe(["adjust", "reposition"], this._handle.bind(this))
        };
        c.disable = function() {
            this._subscription.unsubscribe(), this._subscription = null
        };
        c.__getArrow = function() {
            return b("abstractMethod")("AbstractContextualDialogArrowBehavior", "__getArrow")
        };
        c._handle = function(a, b) {
            a === "adjust" ? this._repositionArrow(b) : this._repositionRoot(b)
        };
        c._repositionRoot = function(a) {
            var c = a.getAlignment();
            if (c == "center") return;
            var d = this._layer.getRoot(),
                e = this._layer.getContext();
            a = a.isVertical();
            var f = this._layer.getArrowDimensions(),
                g = f.offset;
            f = f.length;
            e = b("Vector").getElementDimensions(e);
            e = a ? e.x : e.y;
            if (e >= f + g * 2) return;
            f = f / 2 + g;
            g = e / 2;
            e = parseInt(f - g, 10);
            if (a) {
                f = null;
                c == "left" ? f = b("Locale").isRTL() ? "right" : "left" : f = b("Locale").isRTL() ? "left" : "right";
                g = parseInt(b("Style").get(d, f), 10);
                b("Style").set(d, f, g - e + "px")
            } else {
                a = parseInt(b("Style").get(d, "top"), 10);
                b("Style").set(d, "top", a - e + "px")
            }
        };
        c._repositionArrow = function(c) {
            var d = this._layer.getContentRoot(),
                e = c.getPosition(),
                f = i[e];
            for (var g in h) b("CSS").conditionClass(d, h[g], f === g);
            if (e == "none") return;
            this._arrow || (this._arrow = this.__getArrow());
            b("DOM").contains(d, this._arrow) || b("DOM").appendContent(d, this._arrow);
            b("Style").set(this._arrow, "top", "");
            b("Style").set(this._arrow, "left", "");
            b("Style").set(this._arrow, "right", "");
            b("Style").set(this._arrow, "margin", "");
            f = a.getOffsetPercent(c);
            g = a.getOffset(c, f, this._layer);
            e = a.getOffsetSide(c);
            b("Style").set(this._arrow, e, f + "%");
            b("Style").set(this._arrow, "margin-" + e, g + "px")
        };
        a.getOffsetPercent = function(a) {
            var b = a.getAlignment();
            a = a.getPosition();
            if (a == "above" || a == "below")
                if (b == "center") return 50;
                else if (b == "right") return 100;
            return 0
        };
        a.getOffsetSide = function(a) {
            a = a.isVertical();
            return a ? b("Locale").isRTL() ? "right" : "left" : "top"
        };
        a.getOffset = function(a, b, c) {
            c = c.getArrowDimensions();
            var d = c.offset;
            c = c.length;
            a = a.getAlignment();
            d = a == "center" ? 0 : d;
            d += c * b / 100;
            a != "left" && (d *= -1);
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("flattenArray", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        g(a, b);
        return b
    }

    function g(a, b) {
        var c = a.length,
            d = 0;
        while (c--) {
            var e = a[d++];
            Array.isArray(e) ? g(e, b) : b.push(e)
        }
    }
    f["default"] = a
}), 66);
__d("JSXDOM", ["DOM", "FbtResultBase", "flattenArray"], (function(a, b, c, d, e, f) {
    a = ["a", "blockquote", "br", "button", "canvas", "checkbox", "dd", "div", "dl", "dt", "em", "form", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "i", "iframe", "img", "input", "label", "li", "option", "p", "pre", "select", "span", "strong", "table", "tbody", "thead", "td", "textarea", "th", "tr", "ul", "video"];
    var g = {};
    a.forEach(function(a) {
        var c = function(c, d) {
            arguments.length > 2 && (d = Array.prototype.slice.call(arguments, 1));
            !d && c && (d = c.children, delete c.children);
            d && (d = Array.isArray(d) ? d : [d], d = d.map(function(a) {
                return a instanceof b("FbtResultBase") ? a.flattenToArray() : a
            }), d = b("flattenArray")(d));
            return b("DOM").create(a, c, d)
        };
        g[a] = c
    });
    e.exports = g
}), null);
__d("ContextualDialogArrow", ["cx", "AbstractContextualDialogArrowBehavior", "CSS", "JSXDOM"], (function(a, b, c, d, e, f, g, h) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var e = b.prototype;
        e.__getArrow = function() {
            return c("JSXDOM").i({
                className: "_53io"
            })
        };
        e.enable = function() {
            a.prototype.enable.call(this);
            var b = this.__layer.getContentRoot();
            d("CSS").addClass(b, "_5v-0")
        };
        e.disable = function() {
            a.prototype.disable.call(this);
            var b = this.__layer.getContentRoot();
            d("CSS").removeClass(b, "_5v-0")
        };
        return b
    }(c("AbstractContextualDialogArrowBehavior"));
    g["default"] = a
}), 98);
__d("AccessibilityWebAssistiveTechTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setIndicatedBrowsers = function(a) {
            this.$1.indicated_browsers = b("GeneratedLoggerUtils").serializeVector(a);
            return this
        };
        c.setIsVirtualCursorAction = function(a) {
            this.$1.is_virtual_cursor_action = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        indicated_browsers: !0,
        is_virtual_cursor_action: !0
    };
    f["default"] = a
}), 66);
__d("AccessibilityWebVirtualCursorClickLogger", ["AccessibilityWebAssistiveTechTypedLogger", "VirtualCursorStatus"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        a.forEach(function(a) {
            d("VirtualCursorStatus").add(a, h)
        })
    }

    function h(a, b, d) {
        d === void 0 && (d = !1), a && new(c("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(b).setIsVirtualCursorAction(d).log()
    }
    g.init = a;
    g._log = h
}), 98);
__d("VisualCompletionInst", ["VisibilityListener", "getElementRect", "gkx", "performance", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = /url\(.*(http.*)\)/gi,
        j = 1,
        k = 0;
    a = function() {
        function a(a) {
            this.$4 = 0, this.$8 = 0, this.$9 = 0, this.$10 = 0, this.markerPoints = new Map(), this.annotations = new Map(), this.$5 = new Map(), this.$3 = new Map(), this.$1 = [], this.$2 = [], this.$7 = 0, this.$11 = a, this.$6 = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        var c = a.prototype;
        c.addMarkerPoint = function(a, b) {
            this.markerPoints.set(a, b)
        };
        c.addNavigationTiming = function() {
            var a = ((g || (g = b("performance"))) == null ? void 0 : (g || (g = b("performance"))).timing) || {};
            for (var c in a) typeof a[c] === "number" && a[c] >= this.$4 && this.addMarkerPoint(c, a[c] - this.$4)
        };
        c.calculate = function(a, c, d) {
            var e = this;
            if (!this.$11.size) return null;
            k++;
            var f = (h || (h = b("performanceAbsoluteNow")))();
            this.$4 = a;
            this.$7 = 0;
            this.$9 = 0;
            this.$10 = 0;
            this.setResourceTimingMap();
            this.setViewportSize();
            this.initTree();
            this.getImages();
            b("gkx")("676838") && this.getBackgroundImages();
            this.$8 = this.traverseTree(this.$1, this.$6.width * this.$6.height);
            var g = {
                annotations: this.annotations,
                viewport: this.$6,
                totalPixels: this.$8,
                paintedPixels: this.$9,
                bgNum: 0,
                imgNum: 0,
                compNum: 0,
                bgPixels: 0,
                imgPixels: 0,
                compPixels: 0,
                elements: this.$2,
                calcLatency: 0,
                bgChecked: this.$7,
                bgCheckLatency: this.$10,
                markerPoints: this.markerPoints,
                speedIndex: 0,
                startTime: a,
                visuallyComplete: 0,
                scrollY: window.scrollY,
                navSequence: k,
                pageType: c,
                page: d
            };
            this.$2.length && (this.$2 = this.$2.sort(function(a, b) {
                return b.latency - a.latency
            }), g.visuallyComplete = this.$2[0].latency, this.addMarkerPoint("FP", this.$2[this.$2.length - 1].latency), this.$2.forEach(function(a) {
                !e.markerPoints.has("vcWithoutImage") && a.type === "component" && e.addMarkerPoint("vcWithoutImage", a.latency);
                g.speedIndex += a.pixels / e.$9 * a.latency;
                switch (a.type) {
                    case "component":
                        g.compNum++;
                        g.compPixels += a.pixels;
                        break;
                    case "img":
                        g.imgNum++;
                        g.imgPixels += a.pixels;
                        break;
                    case "bg":
                        g.bgNum++;
                        g.bgPixels += a.pixels;
                        break
                }
            }));
            g.calcLatency = h() - f;
            this.logPixelProgress();
            this.setMetadata(g);
            k === 1 && this.addNavigationTiming();
            return g
        };
        c.findParent = function(a) {
            a = a.parentElement;
            while (a) {
                var b = a.getAttribute("data-veid");
                if (b != null && b !== "" && this.$3.has(b)) return this.$3.get(b);
                a = a.parentElement
            }
            return null
        };
        c.getBackgroundImages = function() {
            var a = this,
                c = (h || (h = b("performanceAbsoluteNow")))();
            this.$1.forEach(function(c) {
                c = c.element.querySelectorAll(":not(img)");
                Array.prototype.forEach.call(c, function(c) {
                    var d = a.findParent(c);
                    if (!d) return;
                    var e = a.getRectangle(c, d.rectangle),
                        f = a.getPixels(e);
                    if (!f) return;
                    var h = a.trimHash(a.getStyleBackground(c));
                    if (h != null && h !== "") {
                        var i = a.$5.get(h);
                        if (i != null) {
                            c = {
                                veid: String(j++),
                                element: c,
                                rectangle: e,
                                pixels: f,
                                children: [],
                                parent: d,
                                type: "bg",
                                latency: i + (g || (g = b("performance"))).timing.navigationStart - a.$4,
                                timestamp: i + g.timing.navigationStart,
                                url: h
                            };
                            d.children.push(c)
                        }
                    }
                })
            });
            this.$10 = h() - c
        };
        c.getImages = function() {
            var a = this,
                c = document.querySelectorAll("img");
            Array.prototype.forEach.call(c, function(c) {
                var d = a.findParent(c);
                if (!d) return;
                var e = a.getRectangle(c, d.rectangle);
                if (c.parentElement) {
                    var f = a.getRectangle(c.parentElement, d.rectangle);
                    e = a.getRectIntersection(e, f)
                }
                f = a.getPixels(e);
                if (!f) return;
                var h = a.trimHash(c.getAttribute("src"));
                if (h != null && h !== "" && a.$5.has(h)) {
                    var i = a.$5.get(h);
                    if (i != null) {
                        c = {
                            veid: String(j++),
                            element: c,
                            rectangle: e,
                            pixels: f,
                            children: [],
                            parent: d,
                            type: "img",
                            latency: i + (g || (g = b("performance"))).timing.navigationStart - a.$4,
                            timestamp: i + g.timing.navigationStart,
                            url: h
                        };
                        d.children.push(c)
                    }
                }
            })
        };
        c.getPixels = function(a) {
            return (a.right - a.left) * (a.bottom - a.top)
        };
        c.getRectangle = function(a, c) {
            a = b("getElementRect")(a);
            return this.getRectIntersection(a, c)
        };
        c.getRectIntersection = function(a, b) {
            return {
                top: Math.min(Math.max(a.top, b.top), b.bottom),
                bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
                left: Math.min(Math.max(a.left, b.left), b.right),
                right: Math.max(Math.min(a.right, b.right), b.left)
            }
        };
        c.getStyleBackground = function(a) {
            if (typeof window.getComputedStyle !== "function") return null;
            this.$7++;
            a = window.getComputedStyle(a);
            var b = a["background-image"];
            if (a.visibility !== "hidden" && b && b !== "none") {
                i.lastIndex = 0;
                a = i.exec(b);
                if (a && a.length > 1) return a[1].replace('"', "")
            }
            return null
        };
        c.logPixelProgress = function() {
            var a = this,
                b = new Map([
                    ["vc98", .02],
                    ["vc95", .05]
                ]),
                c = 0,
                d = 0,
                e = function(e) {
                    var f = a.$2[e];
                    c += f.pixels;
                    if (b.size === 0) return "break";
                    b.forEach(function(b, d) {
                        !a.markerPoints.has(d) && c / a.$9 >= b && a.addMarkerPoint(d, f.latency)
                    });
                    f.type === "component" && (d += f.pixels, f.children.forEach(function(a) {
                        a.type !== "component" && (d += a.pixels)
                    }), b.forEach(function(c, e) {
                        !a.markerPoints.has(e + "WithoutImage") && d / a.$9 >= c && (a.addMarkerPoint(e + "WithoutImage", f.latency), b["delete"](e))
                    }))
                };
            for (var f = 0; f < this.$2.length; f++) {
                var g = e(f);
                if (g === "break") break
            }
        };
        c.initTree = function() {
            var a = this,
                b = {
                    top: 0,
                    left: 0,
                    bottom: this.$6.height,
                    right: this.$6.width
                };
            this.$11.forEach(function(c) {
                var d = c[0],
                    e = c[1];
                c = c[2];
                var f = a.getRectangle(e, b);
                if (a.getPixels(f) === 0) e.removeAttribute("data-veid"), a.$11["delete"](d);
                else {
                    e = {
                        veid: d,
                        element: e,
                        rectangle: f,
                        pixels: a.getPixels(f),
                        children: [],
                        parent: null,
                        type: "component",
                        latency: c - a.$4,
                        timestamp: c
                    };
                    a.$3.set(d, e)
                }
            });
            this.$3.forEach(function(b) {
                var c = a.findParent(b.element);
                c ? (b.rectangle = a.getRectIntersection(b.rectangle, c.rectangle), b.pixels = a.getPixels(b.rectangle), c.children.push(b), b.parent = c) : (a.$1.forEach(function(c) {
                    c = a.getRectIntersection(b.rectangle, c.rectangle);
                    a.getPixels(c) > 0 && (b.rectangle.top = c.bottom, b.pixels = a.getPixels(b.rectangle))
                }), a.$1.push(b))
            })
        };
        c.setMetadata = function(a) {
            var c = b("VisibilityListener").getHiddenTime(a.startTime, a.startTime + a.visuallyComplete);
            c = c != null && c > 0 ? 1 : 0;
            this.annotations.set("height", a.viewport.height);
            this.annotations.set("width", a.viewport.width);
            this.annotations.set("page", a.page);
            this.annotations.set("scrollY", a.scrollY);
            this.annotations.set("overhead", a.calcLatency);
            this.annotations.set("navSequence", a.navSequence);
            this.annotations.set("hidden", c);
            a.navSequence === 1 && (g || (g = b("performance"))) && (g || (g = b("performance"))).timing && ((g || (g = b("performance"))).timing.responseStart && this.addMarkerPoint("TTFB", (g || (g = b("performance"))).timing.responseStart - a.startTime));
            a.speedIndex > 0 && this.addMarkerPoint("speedIndex", a.speedIndex)
        };
        c.setResourceTimingMap = function() {
            var a = this;
            if (window.performance && typeof window.performance.getEntriesByType === "function") {
                var b = window.performance.getEntriesByType("resource");
                b.forEach(function(b) {
                    var c = a.trimHash(b.name);
                    c != null && c !== "" && a.$5.set(c, b.responseEnd)
                })
            }
        };
        c.setViewportSize = function() {
            this.$6 = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        };
        c.traverseTree = function(a, b) {
            var c = this,
                d = b,
                e = 0;
            a.sort(function(a, b) {
                return b.timestamp - a.timestamp
            }).forEach(function(a) {
                a.pixels = Math.min(d, a.pixels), e += a.pixels, d -= a.pixels, a.pixels -= c.traverseTree(a.children, a.pixels), a.timestamp > c.$4 && (a.type !== "component" && a.parent && a.parent.timestamp > a.timestamp && (a.latency = a.parent.latency), c.$9 += a.pixels, c.$2.push(a))
            });
            return e
        };
        c.trimHash = function(a) {
            return a != null && a !== "" && a.indexOf("#") >= 0 ? a.substring(0, a.indexOf("#")) : a
        };
        return a
    }();
    e.exports = a
}), null);
__d("VisualCompletionQPL", ["QuickPerformanceLogger", "qpl"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        c("QuickPerformanceLogger").markerStartFromNavStart(c("qpl")._(27983875, "7758")), a.markerPoints.forEach(function(b, d) {
            c("QuickPerformanceLogger").markerPoint(c("qpl")._(27983875, "7758"), d, {
                timestamp: b + a.startTime
            })
        }), a.annotations.forEach(function(a, b) {
            if (typeof a === "number") {
                var d;
                c("QuickPerformanceLogger").markerAnnotate(c("qpl")._(27983875, "7758"), {
                    "int": (d = {}, d[b] = a, d)
                })
            } else {
                c("QuickPerformanceLogger").markerAnnotate(c("qpl")._(27983875, "7758"), {
                    string: (d = {}, d[b] = a, d)
                })
            }
        }), c("QuickPerformanceLogger").markerEnd(c("qpl")._(27983875, "7758"), 2, 0, a.visuallyComplete + a.startTime)
    }
    g.log = a
}), 98);
__d("VisualCompletion", ["csx", "NavigationMetrics", "VisualCompletionInst", "VisualCompletionQPL"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = !1,
        j, k = [],
        l = new Set(),
        m = new Map(),
        n = 1;

    function o(a, b) {
        if (!a) return;
        var c = "vc_" + n++,
            d = a.getAttribute("data-veid");
        d != null && d !== "" && m["delete"](d);
        a.setAttribute("data-veid", c);
        m.set(c, [c, a, b])
    }

    function p() {
        k.forEach(function(a) {
            a(j)
        }), j && d("VisualCompletionQPL").log(j)
    }

    function a(a, b, c) {
        i || q();
        b && b.forEach(function(a) {
            o(a, c)
        });
        if (a === "first_response") {
            if (l.has(a)) return;
            b = document.getElementById("pagelet_bluebar");
            if (b != null) {
                b = b.querySelector("._2s1y");
                b && o(b, c)
            }
            l.add(a)
        } else if (a === "pagelet_sidebar") {
            if (l.has(a)) return;
            b = document.getElementById("pagelet_sidebar");
            if (b != null) {
                b = b.querySelector("._51x_");
                b && o(b, c)
            }
            l.add(a)
        }
    }

    function b() {
        return j
    }

    function q() {
        c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.NAVIGATION_DONE, function(a, b) {
            if (b.pageType !== "normal" && b.pageType !== "quickling") return;
            a = new(c("VisualCompletionInst"))(m);
            j = a.calculate(b.start, b.pageType, b.page);
            p()
        }), i = !0
    }

    function e(a) {
        k.push(a)
    }

    function f(a) {
        k = k.filter(function(b) {
            return b !== a
        })
    }
    g.addElements = a;
    g.getReport = b;
    g.init = q;
    g.subscribe = e;
    g.unsubscribe = f
}), 98);
__d("VisualCompletionGating", ["cr:729414"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:729414")
}), 98);
__d("FbtLogging", ["cr:1094907"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1094907") == null ? void 0 : b("cr:1094907").logImpression;
    g.logImpression = a
}), 98);
__d("IntlQtEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1848815");
    c = b("FalcoLoggerInternal").create("intl_qt_event", a);
    e.exports = c
}), null);
__d("Animation", ["BrowserSupport", "CSS", "DOM", "DataStore", "Style", "clearInterval", "clearTimeout", "getVendorPrefixedName", "requestAnimationFrame", "setIntervalAcrossTransitions", "setTimeoutAcrossTransitions", "shield"], (function(a, b, c, d, e, f) {
    var g = b("requestAnimationFrame"),
        h = [],
        i;

    function j(b) {
        if (a == this) return new j(b);
        else this.obj = b, this._reset_state(), this.queue = [], this.last_attr = null, this.unit = "px", this.behaviorOverrides = {
            ignoreUserScroll: !1
        }
    }

    function k(a) {
        if (b("BrowserSupport").hasCSS3DTransforms()) return n(a);
        else return m(a)
    }

    function l(a) {
        return a.toFixed(8)
    }

    function m(a) {
        a = [a[0], a[4], a[1], a[5], a[12], a[13]];
        return "matrix(" + a.map(l).join(",") + ")"
    }

    function n(a) {
        return "matrix3d(" + a.map(l).join(",") + ")"
    }

    function o(a, b) {
        a || (a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        var c = [];
        for (var d = 0; d < 4; d++)
            for (var e = 0; e < 4; e++) {
                var f = 0;
                for (var g = 0; g < 4; g++) f += a[d * 4 + g] * b[g * 4 + e];
                c[d * 4 + e] = f
            }
        return c
    }
    var p = 0;
    j.prototype._reset_state = function() {
        this.state = {
            attrs: {},
            duration: 500
        }
    };
    j.prototype.stop = function() {
        this._reset_state();
        this.queue = [];
        return this
    };
    j.prototype._build_container = function() {
        if (this.container_div) {
            this._refresh_container();
            return
        }
        if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
            this.container_div = this.obj.firstChild;
            this.container_div.__animation_refs++;
            this._refresh_container();
            return
        }
        var a = document.createElement("div");
        a.style.padding = "0px";
        a.style.margin = "0px";
        a.style.border = "0px";
        a.__animation_refs = 1;
        var b = this.obj.childNodes;
        while (b.length) a.appendChild(b[0]);
        this.obj.appendChild(a);
        this._orig_overflow = this.obj.style.overflow;
        this.obj.style.overflow = "hidden";
        this.container_div = a;
        this._refresh_container()
    };
    j.prototype._refresh_container = function() {
        this.container_div.style.height = "auto", this.container_div.style.width = "auto", this.container_div.style.height = this.container_div.offsetHeight + this.unit, this.container_div.style.width = this.container_div.offsetWidth + this.unit
    };
    j.prototype._destroy_container = function() {
        if (!this.container_div) return;
        if (!--this.container_div.__animation_refs) {
            var a = this.container_div.childNodes;
            while (a.length) this.obj.appendChild(a[0]);
            this.obj.removeChild(this.container_div)
        }
        this.container_div = null;
        this.obj.style.overflow = this._orig_overflow
    };
    var q = 1,
        r = 2,
        s = 3;
    j.prototype._attr = function(a, b, c) {
        a = a.replace(/-[a-z]/gi, function(a) {
            return a.substring(1).toUpperCase()
        });
        var d = !1;
        switch (a) {
            case "background":
                this._attr("backgroundColor", b, c);
                return this;
            case "backgroundColor":
            case "borderColor":
            case "color":
                b = w(b);
                break;
            case "opacity":
                b = parseFloat(b, 10);
                break;
            case "height":
            case "width":
                b == "auto" ? d = !0 : b = parseInt(b, 10);
                break;
            case "borderWidth":
            case "lineHeight":
            case "fontSize":
            case "margin":
            case "marginBottom":
            case "marginLeft":
            case "marginRight":
            case "marginTop":
            case "padding":
            case "paddingBottom":
            case "paddingLeft":
            case "paddingRight":
            case "paddingTop":
            case "bottom":
            case "left":
            case "right":
            case "top":
            case "scrollTop":
            case "scrollLeft":
                b = parseInt(b, 10);
                break;
            case "rotateX":
            case "rotateY":
            case "rotateZ":
                b = parseInt(b, 10) * Math.PI / 180;
                break;
            case "translateX":
            case "translateY":
            case "translateZ":
            case "scaleX":
            case "scaleY":
            case "scaleZ":
                b = parseFloat(b, 10);
                break;
            case "rotate3d":
                this._attr("rotateX", b[0], c);
                this._attr("rotateY", b[1], c);
                this._attr("rotateZ", b[2], c);
                return this;
            case "rotate":
                this._attr("rotateZ", b, c);
                return this;
            case "scale3d":
                this._attr("scaleZ", b[2], c);
            case "scale":
                this._attr("scaleX", b[0], c);
                this._attr("scaleY", b[1], c);
                return this;
            case "translate3d":
                this._attr("translateZ", b[2], c);
            case "translate":
                this._attr("translateX", b[0], c);
                this._attr("translateY", b[1], c);
                return this;
            default:
                throw new Error(a + " is not a supported attribute!")
        }
        this.state.attrs[a] === void 0 && (this.state.attrs[a] = {});
        d && (this.state.attrs[a].auto = !0);
        switch (c) {
            case s:
                this.state.attrs[a].start = b;
                break;
            case r:
                this.state.attrs[a].by = !0;
            case q:
                this.state.attrs[a].value = b;
                break
        }
    };

    function t(a) {
        var c, d = parseInt((c = b("Style")).get(a, "paddingLeft"), 10),
            e = parseInt(c.get(a, "paddingRight"), 10),
            f = parseInt(c.get(a, "borderLeftWidth"), 10);
        c = parseInt(c.get(a, "borderRightWidth"), 10);
        return a.offsetWidth - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
    }

    function u(a) {
        var c, d = parseInt((c = b("Style")).get(a, "paddingTop"), 10),
            e = parseInt(c.get(a, "paddingBottom"), 10),
            f = parseInt(c.get(a, "borderTopWidth"), 10);
        c = parseInt(c.get(a, "borderBottomWidth"), 10);
        return a.offsetHeight - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
    }
    j.prototype.setUnit = function(a) {
        this.unit = a;
        return this
    };
    j.prototype.to = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, q) : (this._attr(a, b, q), this.last_attr = a);
        return this
    };
    j.prototype.by = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, r) : (this._attr(a, b, r), this.last_attr = a);
        return this
    };
    j.prototype.from = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, s) : (this._attr(a, b, s), this.last_attr = a);
        return this
    };
    j.prototype.duration = function(a) {
        this.state.duration = a ? a : 0;
        return this
    };
    j.prototype.checkpoint = function(a, b) {
        a === void 0 && (a = 1);
        this.state.checkpoint = a;
        this.queue.push(this.state);
        this._reset_state();
        this.state.checkpointcb = b;
        return this
    };
    j.prototype.blind = function() {
        this.state.blind = !0;
        return this
    };
    j.prototype.hide = function() {
        this.state.hide = !0;
        return this
    };
    j.prototype.show = function() {
        this.state.show = !0;
        return this
    };
    j.prototype.ease = function(a) {
        this.state.ease = a;
        return this
    };
    j.prototype.CSSAnimation = function(a) {
        var b = {
            duration: this.state.duration
        };
        this.state.ondone && (b.callback = this.state.ondone);
        a(this.obj, b)
    };
    j.prototype.go = function() {
        var a = Date.now();
        this.queue.push(this.state);
        for (var b = 0; b < this.queue.length; b++) this.queue[b].start = a - p, this.queue[b].checkpoint && (a += this.queue[b].checkpoint * this.queue[b].duration);
        x(this);
        return this
    };
    j.prototype._show = function() {
        b("CSS").show(this.obj)
    };
    j.prototype._hide = function() {
        b("CSS").hide(this.obj)
    };
    j.prototype.overrideBehavior = function(a) {
        this.behaviorOverrides = babelHelpers["extends"]({}, this.behaviorOverrides, a);
        return this
    };
    j.prototype._frame = function(c) {
        var d = !0,
            e = !1,
            f;

        function g(a) {
            return document.documentElement[a] || document.body[a]
        }

        function h(a, b) {
            return a === document.body ? g(b) : a[b]
        }

        function i(a, b) {
            return b.lastScrollTop !== void 0 && b.lastScrollTop !== h(a.obj, "scrollTop") || b.lastScrollLeft !== void 0 && b.lastScrollLeft !== h(a.obj, "scrollLeft")
        }

        function j(a, b) {
            b.lastScrollTop = h(a.obj, "scrollTop"), b.lastScrollLeft = h(a.obj, "scrollLeft")
        }
        for (var l = 0; l < this.queue.length; l++) {
            var m = this.queue[l];
            if (m.start > c) {
                d = !1;
                continue
            }
            m.checkpointcb && (this._callback(m.checkpointcb, c - m.start), m.checkpointcb = null);
            if (m.started === void 0) {
                m.show && this._show();
                for (var n in m.attrs) {
                    if (m.attrs[n].start !== void 0) continue;
                    switch (n) {
                        case "backgroundColor":
                        case "borderColor":
                        case "color":
                            f = w(b("Style").get(this.obj, n == "borderColor" ? "borderLeftColor" : n));
                            m.attrs[n].by && (m.attrs[n].value[0] = Math.min(255, Math.max(0, m.attrs[n].value[0] + f[0])), m.attrs[n].value[1] = Math.min(255, Math.max(0, m.attrs[n].value[1] + f[1])), m.attrs[n].value[2] = Math.min(255, Math.max(0, m.attrs[n].value[2] + f[2])));
                            break;
                        case "opacity":
                            f = b("Style").getOpacity(this.obj);
                            m.attrs[n].by && (m.attrs[n].value = Math.min(1, Math.max(0, m.attrs[n].value + f)));
                            break;
                        case "height":
                            f = u(this.obj);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "width":
                            f = t(this.obj);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "scrollLeft":
                        case "scrollTop":
                            f = h(this.obj, n);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            j(this, m);
                            break;
                        case "rotateX":
                        case "rotateY":
                        case "rotateZ":
                        case "translateX":
                        case "translateY":
                        case "translateZ":
                            f = b("DataStore").get(this.obj, n, 0);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "scaleX":
                        case "scaleY":
                        case "scaleZ":
                            f = b("DataStore").get(this.obj, n, 1);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        default:
                            f = parseInt(b("Style").get(this.obj, n), 10) || 0;
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break
                    }
                    m.attrs[n].start = f
                }
                if (m.attrs.height && m.attrs.height.auto || m.attrs.width && m.attrs.width.auto) {
                    this._destroy_container();
                    for (var n in {
                            height: 1,
                            width: 1,
                            fontSize: 1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            paddingLeft: 1,
                            paddingRight: 1,
                            paddingTop: 1,
                            paddingBottom: 1
                        }) m.attrs[n] && (this.obj.style[n] = m.attrs[n].value + (typeof m.attrs[n].value === "number" ? this.unit : ""));
                    m.attrs.height && m.attrs.height.auto && (m.attrs.height.value = u(this.obj));
                    m.attrs.width && m.attrs.width.auto && (m.attrs.width.value = t(this.obj))
                }
                m.started = !0;
                m.blind && this._build_container()
            }
            var p = (c - m.start) / m.duration;
            p >= 1 ? (p = 1, m.hide && this._hide()) : d = !1;
            var q = m.ease ? m.ease(p) : p;
            !e && p != 1 && m.blind && (e = !0);
            for (var n in m.attrs) switch (n) {
                case "backgroundColor":
                case "borderColor":
                case "color":
                    m.attrs[n].start[3] != m.attrs[n].value[3] ? this.obj.style[n] = "rgba(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + "," + v(q, m.attrs[n].start[3], m.attrs[n].value[3], !1) + ")" : this.obj.style[n] = "rgb(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + ")";
                    break;
                case "opacity":
                    b("Style").set(this.obj, "opacity", v(q, m.attrs[n].start, m.attrs[n].value));
                    break;
                case "height":
                case "width":
                    this.obj.style[n] = q == 1 && m.attrs[n].auto ? "auto" : v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
                    break;
                case "scrollLeft":
                case "scrollTop":
                    var r = this.obj === document.body;
                    if (!this.behaviorOverrides.ignoreUserScroll && i(this, m)) delete m.attrs.scrollTop, delete m.attrs.scrollLeft;
                    else {
                        var s = v(q, m.attrs[n].start, m.attrs[n].value, !0);
                        !r ? this.obj[n] = s : n == "scrollLeft" ? a.scrollTo(s, g("scrollTop")) : a.scrollTo(g("scrollLeft"), s);
                        j(this, m)
                    }
                    break;
                case "translateX":
                case "translateY":
                case "translateZ":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "scaleX":
                case "scaleY":
                case "scaleZ":
                    b("DataStore").set(this.obj, n, v(q, m.attrs[n].start, m.attrs[n].value, !1));
                    break;
                default:
                    this.obj.style[n] = v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
                    break
            }
            r = null;
            s = b("DataStore").get(this.obj, "translateX", 0);
            n = b("DataStore").get(this.obj, "translateY", 0);
            q = b("DataStore").get(this.obj, "translateZ", 0);
            (s || n || q) && (r = o(r, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s, n, q, 1]));
            s = b("DataStore").get(this.obj, "scaleX", 1);
            n = b("DataStore").get(this.obj, "scaleY", 1);
            q = b("DataStore").get(this.obj, "scaleZ", 1);
            (s - 1 || n - 1 || q - 1) && (r = o(r, [s, 0, 0, 0, 0, n, 0, 0, 0, 0, q, 0, 0, 0, 0, 1]));
            s = b("DataStore").get(this.obj, "rotateX", 0);
            s && (r = o(r, [1, 0, 0, 0, 0, Math.cos(s), Math.sin(-s), 0, 0, Math.sin(s), Math.cos(s), 0, 0, 0, 0, 1]));
            n = b("DataStore").get(this.obj, "rotateY", 0);
            n && (r = o(r, [Math.cos(n), 0, Math.sin(n), 0, 0, 1, 0, 0, Math.sin(-n), 0, Math.cos(n), 0, 0, 0, 0, 1]));
            q = b("DataStore").get(this.obj, "rotateZ", 0);
            q && (r = o(r, [Math.cos(q), Math.sin(-q), 0, 0, Math.sin(q), Math.cos(q), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
            s = b("getVendorPrefixedName")("transform");
            if (s)
                if (r) {
                    n = k(r);
                    b("Style").set(this.obj, s, n)
                } else d && b("Style").set(this.obj, s, null);
            p == 1 && (this.queue.splice(l--, 1), this._callback(m.ondone, c - m.start - m.duration))
        }!e && this.container_div && this._destroy_container();
        return !d
    };
    j.prototype.ondone = function(a) {
        this.state.ondone = a;
        return this
    };
    j.prototype._callback = function(a, b) {
        a && (p = b, a.call(this), p = 0)
    };

    function v(a, b, c, d) {
        return (d ? parseInt : parseFloat)((c - b) * a + b, 10)
    }

    function w(a) {
        var b = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);
        if (b) return [parseInt(b[1].length == 1 ? b[1] + b[1] : b[1], 16), parseInt(b[2].length == 1 ? b[2] + b[2] : b[2], 16), parseInt(b[3].length == 1 ? b[3] + b[3] : b[3], 16), 1];
        else {
            b = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(a);
            if (b) return [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10), b[4] ? parseFloat(b[4]) : 1];
            else if (a == "transparent") return [255, 255, 255, 0];
            else throw new Error("Named color attributes are not supported.")
        }
    }

    function x(a) {
        h.push(a), h.length === 1 && (g ? g(z) : i = b("setIntervalAcrossTransitions")(z, 20)), g && y(), z(Date.now(), !0)
    }

    function y() {
        if (!g) throw new Error("Ending timer only valid with requestAnimationFrame");
        var a = 0;
        for (var c = 0; c < h.length; c++) {
            var d = h[c];
            for (var e = 0; e < d.queue.length; e++) {
                var f = d.queue[e].start + d.queue[e].duration;
                f > a && (a = f)
            }
        }
        i && (b("clearTimeout")(i), i = null);
        f = Date.now();
        a > f && (i = b("setTimeoutAcrossTransitions")(b("shield")(z), a - f))
    }

    function z(a, c) {
        a = Date.now();
        for (var c = c === !0 ? h.length - 1 : 0; c < h.length; c++) try {
            h[c]._frame(a) || h.splice(c--, 1)
        } catch (a) {
            h.splice(c--, 1)
        }
        h.length === 0 ? i && (g ? b("clearTimeout")(i) : b("clearInterval")(i), i = null) : g && g(z)
    }
    j.ease = {};
    j.ease.begin = function(a) {
        return Math.sin(Math.PI / 2 * (a - 1)) + 1
    };
    j.ease.end = function(a) {
        return Math.sin(.5 * Math.PI * a)
    };
    j.ease.both = function(a) {
        return .5 * Math.sin(Math.PI * (a - .5)) + .5
    };
    j.prependInsert = function(a, c) {
        j.insert(a, c, b("DOM").prependContent)
    };
    j.appendInsert = function(a, c) {
        j.insert(a, c, b("DOM").appendContent)
    };
    j.insert = function(a, c, d) {
        b("Style").set(c, "opacity", 0), d(a, c), new j(c).from("opacity", 0).to("opacity", 1).duration(400).go()
    };
    e.exports = j
}), null);
__d("object-assign", [], (function(a, b, c, d, e, f) {
    e.exports = Object.assign
}), null);
__d("BanzaiLogger", ["Banzai"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        return {
            log: function(b, d) {
                c("Banzai").post("logger:" + b, d, a)
            },
            create: h
        }
    }
    a = h();
    b = a;
    g["default"] = b
}), 98);