if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("EventListenerImplForBlue", ["Event", "TimeSlice", "emptyFunction", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function h(a, b, d, e) {
        var f = c("TimeSlice").guard(d, "EventListener capture " + b);
        if (a.addEventListener) {
            a.addEventListener(b, f, e);
            return {
                remove: function() {
                    a.removeEventListener(b, f, e)
                }
            }
        } else return {
            remove: c("emptyFunction")
        }
    }
    a = {
        listen: function(a, b, d) {
            return c("Event").listen(a, b, d)
        },
        capture: function(a, b, c) {
            return h(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                passive: d,
                capture: !0
            })
        },
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                passive: d,
                capture: !1
            })
        },
        registerDefault: function(a, b) {
            var d, e = c("Event").listen(document.documentElement, a, f, c("Event").Priority._BUBBLE);

            function f() {
                g(), d = c("Event").listen(document, a, b), c("setImmediateAcrossTransitions")(g)
            }

            function g() {
                d && d.remove(), d = null
            }
            return {
                remove: function() {
                    g(), e && e.remove(), e = null
                }
            }
        },
        suppress: function(a) {
            c("Event").kill(a)
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("BanzaiConsts", [], (function(a, b, c, d, e, f) {
    a = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        BASIC: "basic",
        VITAL: "vital",
        BASIC_WAIT: 6e4,
        BASIC_WAIT_COMET: 2e3,
        VITAL_WAIT: 1e3,
        BATCH_SIZE_LIMIT: 64e3,
        EXPIRY: 864e5,
        BATCH_TIMEOUT: 1e4,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4,
        POST_READY: 0,
        POST_INFLIGHT: 1,
        POST_SENT: 2
    };
    b = a;
    f["default"] = b
}), 66);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData", "gkx"], (function(a, b, c, d, e, f) {
    var g, h = {
        getID: function() {
            return (g || (g = b("CurrentUserInitialData"))).USER_ID
        },
        getAccountID: function() {
            return (g || (g = b("CurrentUserInitialData"))).ACCOUNT_ID
        },
        getPossiblyNonFacebookUserID: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).NON_FACEBOOK_USER_ID) != null ? a : this.getID()
        },
        getEIMU: function() {
            var a;
            return (a = (g || (g = b("CurrentUserInitialData"))).IG_USER_EIMU) != null ? a : "0"
        },
        getEmployeeWorkUserID: function() {
            return (g || (g = b("CurrentUserInitialData"))).WORK_USER_ID
        },
        getName: function() {
            return (g || (g = b("CurrentUserInitialData"))).NAME
        },
        getShortName: function() {
            return (g || (g = b("CurrentUserInitialData"))).SHORT_NAME
        },
        isLoggedIn: function() {
            if (b("gkx")("3959")) return h.getPossiblyNonFacebookUserID() !== "0";
            else return (g || (g = b("CurrentUserInitialData"))).USER_ID !== "0"
        },
        isLoggedInNow: function() {
            var a;
            if (!h.isLoggedIn()) return !1;
            if ((g || (g = b("CurrentUserInitialData"))).IS_INTERN_SITE) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).IS_WORK_USER || (g || (g = b("CurrentUserInitialData"))).IS_WORK_MESSENGER_CALL_GUEST_USER) return !0;
            if ((g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != null && (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID != "") return (g || (g = b("CurrentUserInitialData"))).ORIGINAL_USER_ID === b("Cookie").get("c_user");
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_DOMAIN === !0 ? (g || (g = b("CurrentUserInitialData"))).USER_ID == b("Cookie").get("c_user") : (g || (g = b("CurrentUserInitialData"))).USER_ID === ((a = b("Cookie").get("i_user")) != null ? a : b("Cookie").get("c_user"))
        },
        isEmployee: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_EMPLOYEE
        },
        isTestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_TEST_USER
        },
        hasWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_WORK_USER
        },
        isGray: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_GRAY
        },
        isUnderage: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        },
        isMessengerCallGuestUser: function() {
            return !!(g || (g = b("CurrentUserInitialData"))).IS_MESSENGER_CALL_GUEST_USER
        },
        isBusinessPersonAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_BUSINESS_PERSON_ACCOUNT
        },
        hasSecondaryBusinessPerson: function() {
            return (g || (g = b("CurrentUserInitialData"))).HAS_SECONDARY_BUSINESS_PERSON
        },
        getAppID: function() {
            return (g || (g = b("CurrentUserInitialData"))).APP_ID
        },
        isFacebookWorkAccount: function() {
            return (g || (g = b("CurrentUserInitialData"))).IS_FACEBOOK_WORK_ACCOUNT
        }
    };
    e.exports = h
}), null);
__d("BanzaiUtils", ["BanzaiConsts", "CurrentUser", "FBLogger", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = {
        canSend: function(a) {
            return a[2] >= (g || (g = b("performanceAbsoluteNow")))() - (h || (h = b("BanzaiConsts"))).EXPIRY
        },
        filterPost: function(a, c, d, e) {
            if (e.overlimit) return !0;
            if (!e.sendMinimumOnePost && a[4] + e.currentSize > (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT) return !0;
            var f = a.__meta;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_SENT || !i.canSend(a)) return !1;
            if (f.status != null && f.status >= (h || (h = b("BanzaiConsts"))).POST_INFLIGHT) return !0;
            var g = f.compress != null ? f.compress : !0,
                j = (f.webSessionId != null ? f.webSessionId : "null") + (f.userID != null ? f.userID : "null") + (f.appID != null ? f.appID : "null") + (g ? "compress" : ""),
                k = e.wadMap.get(j);
            k || (k = {
                app_id: f.appID,
                needs_compression: g,
                posts: [],
                user: f.userID,
                webSessionId: f.webSessionId
            }, e.wadMap.set(j, k), c.push(k));
            f.status = (h || (h = b("BanzaiConsts"))).POST_INFLIGHT;
            Array.isArray(k.posts) ? k.posts.push(a) : b("FBLogger")("banzai").mustfix("Posts were a string instead of array");
            d.push(a);
            e.currentSize += a[4];
            e.currentSize >= (h || (h = b("BanzaiConsts"))).BATCH_SIZE_LIMIT && (e.overlimit = !0);
            return e.keepRetryable && Boolean(f.retry)
        },
        resetPostStatus: function(a) {
            a.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY
        },
        retryPost: function(a, c, d) {
            var e = a;
            e.__meta.status = (h || (h = b("BanzaiConsts"))).POST_READY;
            e[3] = (e[3] || 0) + 1;
            e.__meta.retry !== !0 && c >= 400 && c < 600 && d.push(a)
        },
        wrapData: function(a, c, d, e, f) {
            d = [a, c, d, 0, (a = f) != null ? a : c ? JSON.stringify(c).length : 0];
            d.__meta = {
                appID: b("CurrentUser").getAppID(),
                retry: e === !0,
                status: (h || (h = b("BanzaiConsts"))).POST_READY,
                userID: b("CurrentUser").getPossiblyNonFacebookUserID(),
                webSessionId: b("WebSession").getId()
            };
            return d
        }
    };
    e.exports = i
}), null);
__d("cancelIdleCallback", ["cr:692209"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:692209")
}), 98);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f, g) {
    var h = [],
        i = 0,
        j = 0,
        k = -1,
        l = !1,
        m = 1e3 / 60,
        n = 2;

    function o(a) {
        return a
    }

    function p(a) {
        return a
    }

    function b(b, c) {
        var d = j++;
        h[d] = b;
        r();
        if (c != null && c.timeout > 0) {
            var e = o(d);
            a.setTimeout(function() {
                return x(e)
            }, c.timeout)
        }
        return o(d)
    }

    function q(a) {
        a = p(a);
        h[a] = null
    }

    function r() {
        l || (l = !0, c("requestAnimationFramePolyfill")(function(a) {
            l = !1, t(c("performanceNow")() - a)
        }))
    }

    function s(a) {
        var b = m - n;
        if (a < b) return b - a;
        a = a % m;
        if (a > b || a < n) return 0;
        else return b - a
    }

    function t(a) {
        var b = c("performanceNow")();
        if (b > k) {
            a = s(a);
            if (a > 0) {
                b = b + a;
                w(b);
                k = b
            }
        }
        u() && r()
    }

    function u() {
        return i < h.length
    }

    function v() {
        while (u()) {
            var a = h[i];
            i++;
            if (a) return a
        }
        return null
    }

    function w(a) {
        var b;
        while (c("performanceNow")() < a && (b = v())) b(new y(a))
    }

    function x(a) {
        var b = p(a);
        b = h[b];
        b && (q(a), b(new y(null)))
    }
    var y = function() {
        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var b = a.prototype;
        b.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var b = c("performanceNow")();
                if (b < a) return a - b
            }
            return 0
        };
        return a
    }();
    g.requestIdleCallback = b;
    g.cancelIdleCallback = q
}), 98);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimeSlice"], (function(a, b, c, d, e, f, g) {
    var h = a.requestIdleCallback || d("IdleCallbackImplementation").requestIdleCallback;

    function b(b, d) {
        b = c("TimeSlice").guard(b, "requestIdleCallback", {
            propagationType: c("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        return h.call(a, b, d)
    }
    g["default"] = b
}), 98);
__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = new Map();

    function b(a, b) {
        if (h) {
            var d = c("setTimeoutAcrossTransitions")(function() {
                var b = c("requestIdleCallbackAcrossTransitions")(function() {
                    a(), i["delete"](b)
                });
                i.set(d, b)
            }, b);
            return d
        } else return c("setTimeoutAcrossTransitions")(a, b)
    }

    function d(a) {
        c("clearTimeout")(a), i.has(a) && (c("cancelIdleCallback")(c("nullthrows")(i.get(a))), i["delete"](a))
    }
    c("NavigationMetrics").addRetroactiveListener(c("NavigationMetrics").Events.EVENT_OCCURRED, function(b, c) {
        c.event === "all_pagelets_loaded" && (h = !!a.requestIdleCallback)
    });
    g.start = b;
    g.clear = d
}), 98);
__d("BanzaiStorage", ["BanzaiConsts", "BanzaiUtils", "CurrentUser", "FBJSON", "SetIdleTimeoutAcrossTransitions", "WebSession", "WebStorage", "WebStorageMutex", "isInIframe", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = "bz:",
        k = b("isInIframe")(),
        l, m = !1,
        n = null;

    function o() {
        var a = "check_quota";
        try {
            var b = p();
            if (!b) return !1;
            b.setItem(a, a);
            b.removeItem(a);
            return !0
        } catch (a) {
            return !1
        }
    }

    function p() {
        m || (m = !0, l = (g || (g = b("WebStorage"))).getLocalStorage());
        return l
    }
    a = {
        flush: function(a) {
            if (k) return;
            var c = p();
            if (c) {
                n == null && (n = parseInt(c.getItem((h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH), 10));
                var d = n && (i || (i = b("performanceAbsoluteNow")))() - n >= (h || (h = b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;
                d && a();
                (d || !n) && (n = (i || (i = b("performanceAbsoluteNow")))(), (g || (g = b("WebStorage"))).setItemGuarded(c, (h || (h = b("BanzaiConsts"))).LAST_STORAGE_FLUSH, n.toString()))
            }
        },
        restore: function(a) {
            if (k) return;
            var c = p();
            if (!c) return;
            var d = function(d) {
                var e = [];
                for (var f = 0; f < c.length; f++) {
                    var g = c.key(f);
                    typeof g === "string" && g.indexOf(j) === 0 && g.indexOf("bz:__") !== 0 && e.push(g)
                }
                e.forEach(function(d) {
                    var e = c.getItem(d);
                    c.removeItem(d);
                    if (e == null || e === "") return;
                    d = b("FBJSON").parse(e);
                    d.forEach(function(c) {
                        if (!c) return;
                        var d = c.__meta = c.pop(),
                            e = b("BanzaiUtils").canSend(c);
                        if (!e) return;
                        e = b("CurrentUser").getPossiblyNonFacebookUserID();
                        (d.userID === e || e === "0") && (b("BanzaiUtils").resetPostStatus(c), a(c))
                    })
                });
                d && d.unlock()
            };
            o() ? new(b("WebStorageMutex"))("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0)
        },
        store: function(a) {
            if (k) return;
            var c = p(),
                d = a.filter(function(a) {
                    return a.__meta.status !== (h || (h = b("BanzaiConsts"))).POST_SENT
                });
            if (!c || d.length <= 0) return;
            d = d.map(function(a) {
                return [a[0], a[1], a[2], a[3] || 0, a[4], a.__meta]
            });
            a.splice(0, a.length);
            (g || (g = b("WebStorage"))).setItemGuarded(c, j + b("WebSession").getId() + "." + (i || (i = b("performanceAbsoluteNow")))(), b("FBJSON").stringify(d))
        }
    };
    e.exports = a
}), null);
__d("BanzaiAdapter", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], (function(a, b, c, d, e, f, g, h) {
    var i = [],
        j = new(c("Arbiter"))(),
        k = c("isInIframe")(),
        l = "/ajax/bz",
        m = "POST",
        n = {
            config: c("BanzaiConfig"),
            useBeacon: !0,
            getEndPointUrl: function(a) {
                a = c("getAsyncParams")(m);
                a = c("QueryString").appendToUrl(l, a);
                a.length <= 2e3 || h(0, 21850, a);
                return a
            },
            getStorage: function() {
                return c("BanzaiStorage")
            },
            getTopLevel: function() {
                return k && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                j.inform(a)
            },
            subscribe: function(a, b) {
                return j.subscribe(a, b)
            },
            wrapInTimeSlice: function(a, b) {
                return c("TimeSlice").guard(function() {
                    a()
                }, b, {
                    propagationType: c("TimeSlice").PropagationType.ORPHAN
                })
            },
            cleanup: function() {
                var a = i;
                i = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            preferredCompressionMethod: c("once")(function() {
                return "snappy_base64"
            }),
            readyToSend: function() {
                return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, b, e, f) {
                var g = n.getEndPointUrl(!1);
                g = d("ZeroRewrites").rewriteURI(new(c("URI"))(g));
                var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
                h.open(m, g.toString(), !0);
                h.onreadystatechange = function() {
                    if (h.readyState >= 4) {
                        var a = i.indexOf(h);
                        a >= 0 && i.splice(a, 1);
                        try {
                            a = h.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (b && b(), f || n.inform(c("BanzaiConsts").OK)) : (e && e(a), f || n.inform(c("BanzaiConsts").ERROR))
                    }
                };
                i.push(h);
                h.send(a, !1)
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                d("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                d("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    a = n;
    g["default"] = a
}), 98);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f, g) {
    var h = (c = a.cancelIdleCallback) != null ? c : d("IdleCallbackImplementation").cancelIdleCallback;

    function b(a) {
        h(a)
    }
    g["default"] = b
}), 98);
__d("React.classic", ["cr:1292365"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1292365")
}), null);
__d("ReactCurrentDispatcher_DO_NOT_USE_IT_WILL_BREAK", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        current: null
    };
    e.exports = a
}), null);
__d("ReactCurrentDispatcher", ["ReactCurrentDispatcher_DO_NOT_USE_IT_WILL_BREAK"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("ReactCurrentDispatcher_DO_NOT_USE_IT_WILL_BREAK")
}), null);
__d("ReactDOM.classic", ["cr:1344485"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1344485")
}), null);
__d("ReactDOM.classic.prod-or-profiling", ["cr:1344486"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1344486")
}), null);
__d("ReactDOM.classic.prod", ["cr:1344487"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1344487")
}), null);
__d("ReactFeatureFlags", ["TrustedTypesConfig", "gkx", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    c = {
        enableTrustedTypesIntegration: b("TrustedTypesConfig").useTrustedTypes,
        enableEagerRootListeners: !0,
        enableComponentStackLocations: !0,
        enableSyncDefaultUpdates: !0,
        enableFilterEmptyStringAttributesDOM: (a = b("gkx"))("1399218"),
        disableInputAttributeSyncing: a("729631"),
        disableOnScrollBubbling: !0,
        warnAboutShorthandPropertyCollision: a("1281505"),
        disableSchedulerTimeoutBasedOnReactExpirationTime: a("1291023"),
        warnAboutSpreadingKeyToJSX: a("1294182"),
        enableLegacyFBSupport: a("1401060"),
        disableHiddenPropDeprioritization: a("1485055"),
        enableFormEventDelegation: a("1597642"),
        skipUnmountedBoundaries: a("1722014"),
        disableSchedulerTimeoutInWorkLoop: a("1695831"),
        enableStrictEffects: a("1742795"),
        enableUseRefAccessWarning: a("1778302"),
        disableNativeComponentFrames: a("1848749"),
        enableTransitionEntanglement: a("1906871"),
        enableSyncMicroTasks: a("1985945"),
        enableSuspenseLayoutEffectSemantics: a("1646"),
        enableSchedulingProfiler: a("1596063"),
        enableSchedulingProfilerComponentStacks: a("1647260"),
        enableProfilerNestedUpdateScheduledHook: a("1840809"),
        enableUpdaterTracking: a("12"),
        enableClientRenderFallbackOnHydrationMismatch: a("3521"),
        enableLazyContextPropagation: b("qex")._("644") === !0,
        enableCapturePhaseSelectiveHydrationWithoutDiscreteEventReplay: b("qex")._("647") === !0
    };
    e.exports = c
}), null);
__d("React-prod.classic", ["ReactCurrentDispatcher", "ReactCurrentOwner", "ReactFeatureFlags"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = 60103,
        j = 60106;
    f.Fragment = 60107;
    f.StrictMode = 60108;
    f.Profiler = 60114;
    var k = 60109,
        l = 60110,
        m = 60112;
    f.Suspense = 60113;
    f.unstable_SuspenseList = 60120;
    var n = 60115,
        o = 60116;
    f.unstable_Scope = 60119;
    f.unstable_DebugTracingMode = 60129;
    f.unstable_Offscreen = 60130;
    f.unstable_LegacyHidden = 60131;
    f.unstable_Cache = 60132;
    var p = 60134,
        q = 60135;
    if ("function" === typeof Symbol && Symbol["for"]) {
        var r = Symbol["for"];
        i = r("react.element");
        j = r("react.portal");
        f.Fragment = r("react.fragment");
        f.StrictMode = r("react.strict_mode");
        f.Profiler = r("react.profiler");
        k = r("react.provider");
        l = r("react.context");
        m = r("react.forward_ref");
        f.Suspense = r("react.suspense");
        f.unstable_SuspenseList = r("react.suspense_list");
        n = r("react.memo");
        o = r("react.lazy");
        f.unstable_Scope = r("react.scope");
        f.unstable_DebugTracingMode = r("react.debug_trace_mode");
        f.unstable_Offscreen = r("react.offscreen");
        f.unstable_LegacyHidden = r("react.legacy_hidden");
        f.unstable_Cache = r("react.cache");
        p = r("react.server_context");
        q = r("react.default_value")
    }
    var s = "function" === typeof Symbol && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator");

    function t(a) {
        if (null === a || "object" !== typeof a) return null;
        a = s && a[s] || a["@@iterator"];
        return "function" === typeof a ? a : null
    }
    var u = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        v = Object.assign,
        w = {};

    function a(a, b, c) {
        this.props = a, this.context = b, this.refs = w, this.updater = c || u
    }
    a.prototype.isReactComponent = {};
    a.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState")
    };
    a.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate")
    };

    function c() {}
    c.prototype = a.prototype;

    function d(a, b, c) {
        this.props = a, this.context = b, this.refs = w, this.updater = c || u
    }
    r = d.prototype = new c();
    r.constructor = d;
    v(r, a.prototype);
    r.isPureReactComponent = !0;
    var x = Array.isArray;
    b("ReactFeatureFlags");
    var y = Object.prototype.hasOwnProperty,
        z = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function A(a, c, d) {
        var e, f = {},
            h = null,
            j = null;
        if (null != c)
            for (e in void 0 !== c.ref && (j = c.ref), void 0 !== c.key && (h = "" + c.key), c) y.call(c, e) && !Object.prototype.hasOwnProperty.call(z, e) && (f[e] = c[e]);
        var k = arguments.length - 2;
        if (1 === k) f.children = d;
        else if (1 < k) {
            for (var l = Array(k), m = 0; m < k; m++) l[m] = arguments[m + 2];
            f.children = l
        }
        if (a && a.defaultProps)
            for (e in k = a.defaultProps, k) void 0 === f[e] && (f[e] = k[e]);
        return {
            $$typeof: i,
            type: a,
            key: h,
            ref: j,
            props: f,
            _owner: (g || (g = b("ReactCurrentOwner"))).current
        }
    }

    function B(a, b) {
        return {
            $$typeof: i,
            type: a.type,
            key: b,
            ref: a.ref,
            props: a.props,
            _owner: a._owner
        }
    }

    function C(a) {
        return "object" === typeof a && null !== a && a.$$typeof === i
    }

    function D(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + a.replace(/[=:]/g, function(a) {
            return b[a]
        })
    }
    var E = /\/+/g;

    function F(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? D("" + a.key) : b.toString(36)
    }

    function G(a, b, c, d, e) {
        var f = typeof a;
        ("undefined" === f || "boolean" === f) && (a = null);
        var g = !1;
        if (null === a) g = !0;
        else switch (f) {
            case "string":
            case "number":
                g = !0;
                break;
            case "object":
                switch (a.$$typeof) {
                    case i:
                    case j:
                        g = !0
                }
        }
        if (g) return g = a, e = e(g), a = "" === d ? "." + F(g, 0) : d, x(e) ? (c = "", null != a && (c = a.replace(E, "$&/") + "/"), G(e, b, c, "", function(a) {
            return a
        })) : null != e && (C(e) && (e = B(e, c + (!e.key || g && g.key === e.key ? "" : ("" + e.key).replace(E, "$&/") + "/") + a)), b.push(e)), 1;
        g = 0;
        d = "" === d ? "." : d + ":";
        if (x(a))
            for (var h = 0; h < a.length; h++) {
                f = a[h];
                var k = d + F(f, h);
                g += G(f, b, c, k, e)
            } else if (k = t(a), "function" === typeof k)
                for (a = k.call(a), h = 0; !(f = a.next()).done;) f = f.value, k = d + F(f, h++), g += G(f, b, c, k, e);
            else if ("object" === f) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return g
    }

    function H(a, b, c) {
        if (null == a) return a;
        var d = [],
            e = 0;
        G(a, d, "", "", function(a) {
            return b.call(c, a, e++)
        });
        return d
    }

    function I(a) {
        if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(function(b) {
                (0 === a._status || -1 === a._status) && (a._status = 1, a._result = b)
            }, function(b) {
                (0 === a._status || -1 === a._status) && (a._status = 2, a._result = b)
            }); - 1 === a._status && (a._status = 0, a._result = b)
        }
        if (1 === a._status) return a._result["default"];
        throw a._result
    }

    function e() {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useTransition()
    }

    function J(a) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useDeferredValue(a)
    }

    function K(a, c, d) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useMutableSource(a, c, d)
    }
    var L = {
        transition: null
    };
    c = {
        ReactCurrentDispatcher: h || (h = b("ReactCurrentDispatcher")),
        ReactCurrentBatchConfig: L,
        ReactCurrentOwner: g || (g = b("ReactCurrentOwner")),
        ContextRegistry: {}
    };
    var M = c.ContextRegistry;

    function N(a, b) {
        return {
            _getVersion: b,
            _source: a,
            _workInProgressVersionPrimary: null,
            _workInProgressVersionSecondary: null
        }
    }

    function O(a) {
        var b = L.transition;
        L.transition = {};
        try {
            a()
        } finally {
            L.transition = b
        }
    }
    var P = c.ReactCurrentOwner,
        Q = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function R(a, b, c) {
        var d = {},
            e = null,
            f = null;
        void 0 !== c && (e = "" + c);
        void 0 !== b.key && (e = "" + b.key);
        void 0 !== b.ref && (f = b.ref);
        for (c in b) y.call(b, c) && !Object.prototype.hasOwnProperty.call(Q, c) && (d[c] = b[c]);
        if (a && a.defaultProps)
            for (c in b = a.defaultProps, b) void 0 === d[c] && (d[c] = b[c]);
        return {
            $$typeof: i,
            type: a,
            key: e,
            ref: f,
            props: d,
            _owner: P.current
        }
    }
    f.Children = {
        map: H,
        forEach: function(a, b, c) {
            H(a, function() {
                b.apply(this, arguments)
            }, c)
        },
        count: function(a) {
            var b = 0;
            H(a, function() {
                b++
            });
            return b
        },
        toArray: function(a) {
            return H(a, function(a) {
                return a
            }) || []
        },
        only: function(a) {
            if (!C(a)) throw Error("React.Children.only expected to receive a single React element child.");
            return a
        }
    };
    f.Component = a;
    f.PureComponent = d;
    f.SuspenseList = f.unstable_SuspenseList;
    f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c;
    f.cloneElement = function(a, c, d) {
        if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
        var e = v({}, a.props),
            f = a.key,
            h = a.ref,
            j = a._owner;
        if (null != c) {
            void 0 !== c.ref && (h = c.ref, j = (g || (g = b("ReactCurrentOwner"))).current);
            void 0 !== c.key && (f = "" + c.key);
            if (a.type && a.type.defaultProps) var k = a.type.defaultProps;
            for (l in c) y.call(c, l) && !Object.prototype.hasOwnProperty.call(z, l) && (e[l] = void 0 === c[l] && void 0 !== k ? k[l] : c[l])
        }
        var l = arguments.length - 2;
        if (1 === l) e.children = d;
        else if (1 < l) {
            k = Array(l);
            for (var m = 0; m < l; m++) k[m] = arguments[m + 2];
            e.children = k
        }
        return {
            $$typeof: i,
            type: a.type,
            key: f,
            ref: h,
            props: e,
            _owner: j
        }
    };
    f.createContext = function(a) {
        a = {
            $$typeof: l,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        };
        a.Provider = {
            $$typeof: k,
            _context: a
        };
        return a.Consumer = a
    };
    f.createElement = A;
    f.createFactory = function(a) {
        var b = A.bind(null, a);
        b.type = a;
        return b
    };
    f.createMutableSource = N;
    f.createRef = function() {
        return {
            current: null
        }
    };
    f.createServerContext = function(a, b) {
        var c = !0;
        if (!M[a]) {
            c = !1;
            var d = {
                $$typeof: p,
                _currentValue: b,
                _currentValue2: b,
                _defaultValue: b,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _globalName: a
            };
            d.Provider = {
                $$typeof: k,
                _context: d
            };
            M[a] = d
        }
        d = M[a];
        if (d._defaultValue === q) d._defaultValue = b, d._currentValue === q && (d._currentValue = b), d._currentValue2 === q && (d._currentValue2 = b);
        else if (c) throw Error("ServerContext: " + a + " already defined");
        return d
    };
    f.forwardRef = function(a) {
        return {
            $$typeof: m,
            render: a
        }
    };
    f.isValidElement = C;
    f.jsx = R;
    f.jsxDEV = void 0;
    f.jsxs = R;
    f.lazy = function(a) {
        return {
            $$typeof: o,
            _payload: {
                _status: -1,
                _result: a
            },
            _init: I
        }
    };
    f.memo = function(a, b) {
        return {
            $$typeof: n,
            type: a,
            compare: void 0 === b ? null : b
        }
    };
    f.startTransition = O;
    f.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    };
    f.unstable_createMutableSource = N;
    f.unstable_getCacheForType = function(a) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.getCacheForType(a)
    };
    f.unstable_getCacheSignal = function() {
        return (h || (h = b("ReactCurrentDispatcher"))).current.getCacheSignal()
    };
    f.unstable_startTransition = O;
    f.unstable_useCacheRefresh = function() {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useCacheRefresh()
    };
    f.unstable_useDeferredValue = J;
    f.unstable_useMutableSource = K;
    f.unstable_useTransition = e;
    f.useCallback = function(a, c) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useCallback(a, c)
    };
    f.useContext = function(a) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useContext(a)
    };
    f.useDebugValue = function() {};
    f.useDeferredValue = J;
    f.useEffect = function(a, c) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useEffect(a, c)
    };
    f.useId = function() {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useId()
    };
    f.useImperativeHandle = function(a, c, d) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useImperativeHandle(a, c, d)
    };
    f.useInsertionEffect = function(a, c) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useInsertionEffect(a, c)
    };
    f.useLayoutEffect = function(a, c) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useLayoutEffect(a, c)
    };
    f.useMemo = function(a, c) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useMemo(a, c)
    };
    f.useMutableSource = K;
    f.useReducer = function(a, c, d) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useReducer(a, c, d)
    };
    f.useRef = function(a) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useRef(a)
    };
    f.useState = function(a) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useState(a)
    };
    f.useSyncExternalStore = function(a, c, d) {
        return (h || (h = b("ReactCurrentDispatcher"))).current.useSyncExternalStore(a, c, d)
    };
    f.useTransition = e;
    f.version = "18.0.0-rc.3-52c20e5ab-20220322"
}), null);
/**
 * License: https://www.facebook.com/legal/license/WRsJ32R7YJG/
 */
__d("SnappyCompress", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return typeof process === "object" && (typeof process.versions === "object" && typeof process.versions.node !== "undefined") ? !0 : !1
    }

    function h(a) {
        return a instanceof Uint8Array && (!g() || !Buffer.isBuffer(a))
    }

    function i(a) {
        return a instanceof ArrayBuffer
    }

    function j(a) {
        return !g() ? !1 : Buffer.isBuffer(a)
    }
    var k = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";

    function a(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new A(a);
        var d = a.readUncompressedLength();
        if (d === -1) throw new Error("Invalid Snappy bitstream");
        if (b) {
            b = new Uint8Array(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        } else if (c) {
            b = new ArrayBuffer(d);
            c = new Uint8Array(b);
            if (!a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream")
        } else {
            b = Buffer.alloc(d);
            if (!a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
        }
        return b
    }

    function b(a) {
        if (!h(a) && !i(a) && !j(a)) throw new TypeError(k);
        var b = !1,
            c = !1;
        h(a) ? b = !0 : i(a) && (c = !0, a = new Uint8Array(a));
        a = new x(a);
        var d = a.maxCompressedLength(),
            e, f, g;
        b ? (e = new Uint8Array(d), g = a.compressToBuffer(e)) : c ? (e = new ArrayBuffer(d), f = new Uint8Array(e), g = a.compressToBuffer(f)) : (e = Buffer.alloc(d), g = a.compressToBuffer(e));
        if (!e.slice) {
            f = new Uint8Array(Array.prototype.slice.call(e, 0, g));
            if (b) return f;
            else if (c) return f.buffer;
            else throw new Error("not implemented")
        }
        return e.slice(0, g)
    }
    c = 16;
    var l = 1 << c,
        m = 14,
        n = new Array(m + 1);

    function o(a, b) {
        return a * 506832829 >>> b
    }

    function p(a, b) {
        return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
    }

    function q(a, b, c) {
        return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
    }

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function s(a, b, c, d, e) {
        c <= 60 ? (d[e] = c - 1 << 2, e += 1) : c < 256 ? (d[e] = 60 << 2, d[e + 1] = c - 1, e += 2) : (d[e] = 61 << 2, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3);
        r(a, b, d, e, c);
        return e + c
    }

    function t(a, b, c, d) {
        if (d < 12 && c < 2048) {
            a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5);
            a[b + 1] = c & 255;
            return b + 2
        } else {
            a[b] = 2 + (d - 1 << 2);
            a[b + 1] = c & 255;
            a[b + 2] = c >>> 8;
            return b + 3
        }
    }

    function u(a, b, c, d) {
        while (d >= 68) b = t(a, b, c, 64), d -= 64;
        d > 64 && (b = t(a, b, c, 60), d -= 60);
        return t(a, b, c, d)
    }

    function v(a, b, c, d, e) {
        var f = 1;
        while (1 << f <= c && f <= m) f += 1;
        f -= 1;
        var g = 32 - f;
        typeof n[f] === "undefined" && (n[f] = new Uint16Array(1 << f));
        f = n[f];
        var h;
        for (h = 0; h < f.length; h++) f[h] = 0;
        h = b + c;
        var i = b,
            j = b,
            k, l, r, t, v, w = !0,
            x = 15;
        if (c >= x) {
            c = h - x;
            b += 1;
            x = o(p(a, b), g);
            while (w) {
                t = 32;
                l = b;
                do {
                    b = l;
                    k = x;
                    v = t >>> 5;
                    t += 1;
                    l = b + v;
                    if (b > c) {
                        w = !1;
                        break
                    }
                    x = o(p(a, l), g);
                    r = i + f[k];
                    f[k] = b - i
                } while (!q(a, b, r));
                if (!w) break;
                e = s(a, j, b - j, d, e);
                do {
                    v = b;
                    k = 4;
                    while (b + k < h && a[b + k] === a[r + k]) k += 1;
                    b += k;
                    l = v - r;
                    e = u(d, e, l, k);
                    j = b;
                    if (b >= c) {
                        w = !1;
                        break
                    }
                    t = o(p(a, b - 1), g);
                    f[t] = b - 1 - i;
                    v = o(p(a, b), g);
                    r = i + f[v];
                    f[v] = b - i
                } while (q(a, b, r));
                if (!w) break;
                b += 1;
                x = o(p(a, b), g)
            }
        }
        j < h && (e = s(a, j, h - j, d, e));
        return e
    }

    function w(a, b, c) {
        do b[c] = a & 127, a = a >>> 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
        return c
    }

    function x(a) {
        this.array = a
    }
    x.prototype.maxCompressedLength = function() {
        var a = this.array.length;
        return 32 + a + Math.floor(a / 6)
    };
    x.prototype.compressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = 0,
            e = 0,
            f;
        e = w(c, a, e);
        while (d < c) f = Math.min(c - d, l), e = v(b, d, f, a, e), d += f;
        return e
    };
    var y = [0, 255, 65535, 16777215, 4294967295];

    function r(a, b, c, d, e) {
        var f;
        for (f = 0; f < e; f++) c[d + f] = a[b + f]
    }

    function z(a, b, c, d) {
        var e;
        for (e = 0; e < d; e++) a[b + e] = a[b - c + e]
    }

    function A(a) {
        this.array = a, this.pos = 0
    }
    A.prototype.readUncompressedLength = function() {
        var a = 0,
            b = 0,
            c, d;
        while (b < 32 && this.pos < this.array.length) {
            c = this.array[this.pos];
            this.pos += 1;
            d = c & 127;
            if (d << b >>> b !== d) return -1;
            a |= d << b;
            if (c < 128) return a;
            b += 7
        }
        return -1
    };
    A.prototype.uncompressToBuffer = function(a) {
        var b = this.array,
            c = b.length,
            d = this.pos,
            e = 0,
            f, g, h, i;
        while (d < b.length) {
            f = b[d];
            d += 1;
            if ((f & 3) === 0) {
                g = (f >>> 2) + 1;
                if (g > 60) {
                    if (d + 3 >= c) return !1;
                    h = g - 60;
                    g = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                    g = (g & y[h]) + 1;
                    d += h
                }
                if (d + g > c) return !1;
                r(b, d, a, e, g);
                d += g;
                e += g
            } else {
                switch (f & 3) {
                    case 1:
                        g = (f >>> 2 & 7) + 4;
                        i = b[d] + (f >>> 5 << 8);
                        d += 1;
                        break;
                    case 2:
                        if (d + 1 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8);
                        d += 2;
                        break;
                    case 3:
                        if (d + 3 >= c) return !1;
                        g = (f >>> 2) + 1;
                        i = b[d] + (b[d + 1] << 8) + (b[d + 2] << 16) + (b[d + 3] << 24);
                        d += 4;
                        break;
                    default:
                        break
                }
                if (i === 0 || i > e) return !1;
                z(a, e, i, g);
                e += g
            }
        }
        return !0
    };
    e.exports.uncompress = a;
    e.exports.compress = b
}), null);
__d("SnappyCompressUtil", ["SnappyCompress"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        compressUint8ArrayToSnappy: function(c) {
            if (c == null) return null;
            var d = null;
            try {
                d = b("SnappyCompress").compress(c)
            } catch (a) {
                return null
            }
            c = "";
            for (var e = 0; e < d.length; e++) c += String.fromCharCode(d[e]);
            return a.btoa(c)
        },
        compressStringToSnappy: function(b) {
            if (a.Uint8Array === void 0 || a.btoa === void 0) return null;
            var c = new a.Uint8Array(b.length);
            for (var d = 0; d < b.length; d++) {
                var e = b.charCodeAt(d);
                if (e > 127) return null;
                c[d] = e
            }
            return g.compressUint8ArrayToSnappy(c)
        },
        compressStringToSnappyBinary: function(c) {
            if (a.Uint8Array === void 0) return null;
            var d = null;
            if (a.TextEncoder !== void 0) d = new TextEncoder().encode(c);
            else {
                d = new a.Uint8Array(c.length);
                for (var e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (f > 127) return null;
                    d[e] = f
                }
            }
            f = null;
            try {
                f = b("SnappyCompress").compress(d)
            } catch (a) {
                return null
            }
            return f
        }
    };
    e.exports = g
}), null);
__d("BanzaiCompressionUtils", ["FBLogger", "Promise", "SnappyCompressUtil", "once", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("once")(function() {
            if (a.CompressionStream == null) return !1;
            if (a.Response == null) return !1;
            try {
                new a.CompressionStream("deflate")
            } catch (a) {
                return !1
            }
            return !0
        }),
        i = {
            compressWad: function(a, c) {
                if (a.needs_compression !== !0) {
                    delete a.needs_compression;
                    return
                }
                if (c === "deflate") {
                    i.compressWad(a, "snappy");
                    return
                }
                var d = (g || (g = b("performanceNow")))(),
                    e = JSON.stringify(a.posts),
                    f;
                switch (c) {
                    case "snappy":
                        f = b("SnappyCompressUtil").compressStringToSnappyBinary(e);
                        break;
                    case "snappy_base64":
                        f = b("SnappyCompressUtil").compressStringToSnappy(e);
                        break;
                    default:
                        break
                }
                f != null && f.length < e.length ? (a.posts = f, a.compression = c, a.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - d), a.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", a.snappy_ms)) : a.compression = "";
                delete a.needs_compression
            },
            compressWadAsync: function(c, d) {
                if (d !== "deflate") {
                    i.compressWad(c, "snappy");
                    return b("Promise").resolve()
                }
                if (!h()) return i.compressWadAsync(c, "snappy");
                var e = (g || (g = b("performanceNow")))(),
                    f = JSON.stringify(c.posts),
                    j = new Response(f).body;
                if (!j) {
                    c.compression = "";
                    delete c.needs_compression;
                    return b("Promise").resolve()
                }
                j = j.pipeThrough(new a.CompressionStream("deflate"));
                return new Response(j).arrayBuffer().then(function(a) {
                    a.byteLength < f.length ? (c.posts = new Uint8Array(a), c.compression = d, c.snappy_ms = Math.ceil((g || (g = b("performanceNow")))() - e), c.snappy_ms < 0 && b("FBLogger")("BanzaiCompressionUtils").warn("Expected positive snappy_ms but got %s", c.snappy_ms)) : c.compression = "", delete c.needs_compression
                })["catch"](function() {
                    c.compression = "", delete c.needs_compression
                })
            },
            outOfBandsPosts: function(a) {
                var b = 0,
                    c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d],
                        f = e.compression === "snappy" || e.compression === "deflate";
                    if (f) {
                        f = new Blob([e.posts], {
                            type: "application/octet-stream"
                        });
                        e.posts = String(b);
                        c["post_" + String(b)] = f;
                        b++
                    }
                }
                return c
            }
        };
    e.exports = i
}), null);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l = [],
        m = null,
        n = {
            _clearPostBuffer: function() {
                l = []
            },
            _gatherWadsAndPostsFromBuffer: function(a, c, d, e, f) {
                var g = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: f,
                    wadMap: new Map()
                };
                d = e.filter(function(d, e) {
                    return b("BanzaiUtils").filterPost(d, a, c, g)
                });
                g.overlimit && d.length && n._schedule(0);
                return d
            },
            _getEventTime: function() {
                return (g || (g = b("performanceAbsoluteNow")))()
            },
            _getWebSessionId: function() {
                return b("WebSession").getId()
            },
            _getPostBuffer: function() {
                return l
            },
            _getUserId: function() {
                return b("CurrentUser").getPossiblyNonFacebookUserID()
            },
            _getAppId: function() {
                return b("CurrentUser").getAppID()
            },
            _initialize: function() {
                b("ExecutionEnvironment").canUseDOM && (n.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                    n._getPostBuffer().length > 0 && (n._tryToSendViaBeacon() || n._store(!1))
                }), n.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                    n._tryToSendViaBeacon() || n._restore(!1)
                })) : n.adapter.setHooks(n), n.adapter.setUnloadHook(n), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                    if (c.pageType !== "normal") return;
                    n._restore(!1);
                    b("NavigationMetrics").removeCurrentListener()
                }))
            },
            _sendBeacon: function(b, c) {
                return a.navigator.sendBeacon(b, c)
            },
            _prepForTransit: function(a) {
                var c = new FormData();
                c.append("ts", String(Date.now()));
                var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(d).forEach(function(a) {
                    c.append(a, d[a])
                });
                c.append("q", JSON.stringify(a));
                return c
            },
            _prepWadForTransit: function(a) {
                b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod())
            },
            _processCallbacksAndSendViaBeacon: function() {
                var a = [],
                    c = [],
                    d = [];
                n._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                if (c.length > 0) {
                    c[0].send_method = "beacon";
                    c.map(n._prepWadForTransit);
                    d = n._prepForTransit(c);
                    a = b("BanzaiAdapter").getEndPointUrl(!0);
                    c = n._sendBeacon(a, d);
                    c || b("FBLogger")("banzai").warn("Error sending beacon")
                }
            },
            _restore: function(a) {
                a = b("BanzaiAdapter").getStorage();
                var c = function(a) {
                    l.push(a)
                };
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                n._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT)
            },
            _schedule: function(a) {
                var c = n._getEventTime() + a;
                if (!k || c < k) {
                    k = c;
                    b("SetIdleTimeoutAcrossTransitions").clear(j);
                    j = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(n._sendWithCallbacks, "Banzai.send"), a);
                    return !0
                }
                return !1
            },
            _sendWithCallbacks: function(a, c) {
                k = null;
                n._schedule(n.BASIC.delay);
                if (!b("BanzaiAdapter").readyToSend()) {
                    c && c();
                    return
                }
                if (n.isEnabled("flush_storage_periodically")) {
                    var d = b("BanzaiAdapter").getStorage(),
                        e = function() {
                            n._restore(!1)
                        };
                    (h || (h = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e])
                }
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SEND);
                d = [];
                var f = [];
                l = n._gatherWadsAndPostsFromBuffer(d, f, !0, l, !0);
                if (d.length <= 0) {
                    b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).OK);
                    a && a();
                    return
                }
                d[0].trigger = m;
                m = null;
                d[0].send_method = "ajax";
                d.map(n._prepWadForTransit);
                b("BanzaiAdapter").send(n._prepForTransit(d), function() {
                    f.forEach(function(a) {
                        a = a;
                        a.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT;
                        a.__meta.callback && a.__meta.callback()
                    }), a && a()
                }, function(a) {
                    f.forEach(function(c) {
                        b("BanzaiUtils").retryPost(c, a, l)
                    }), c && c()
                })
            },
            _store: function(a) {
                a = b("BanzaiAdapter").getStorage();
                (h || (h = b("ErrorGuard"))).applyWithGuard(a.store, a, [l])
            },
            _testState: function() {
                return {
                    postBuffer: l,
                    triggerRoute: m
                }
            },
            _tryToSendViaBeacon: function() {
                if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
                var a = [],
                    c = [];
                l = n._gatherWadsAndPostsFromBuffer(a, c, !1, l, !1);
                if (a.length <= 0) return !1;
                a[0].send_method = "beacon";
                a.map(n._prepWadForTransit);
                a = n._prepForTransit(a);
                var d = b("BanzaiAdapter").getEndPointUrl(!0);
                d = n._sendBeacon(d, a);
                if (!d) {
                    c.forEach(function(a) {
                        l.push(a)
                    });
                    return !1
                }
                return !0
            },
            _unload: function() {
                if (b("BanzaiAdapter").config.disabled) return;
                navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && n._processCallbacksAndSendViaBeacon();
                b("BanzaiAdapter").cleanup();
                b("BanzaiAdapter").inform((i || (i = b("BanzaiConsts"))).SHUTDOWN);
                l.length > 0 && ((!n.adapter.useBeacon || !n._tryToSendViaBeacon()) && n._store(!1))
            },
            BASIC: {
                delay: b("BanzaiAdapter").config.MAX_WAIT || (i || (i = b("BanzaiConsts"))).BASIC_WAIT
            },
            BASIC_WAIT: (i || (i = b("BanzaiConsts"))).BASIC_WAIT,
            ERROR: i.ERROR,
            OK: i.OK,
            SEND: i.SEND,
            SHUTDOWN: i.SHUTDOWN,
            VITAL: {
                delay: b("BanzaiAdapter").config.MIN_WAIT || (i || (i = b("BanzaiConsts"))).VITAL_WAIT
            },
            VITAL_WAIT: i.VITAL_WAIT,
            adapter: b("BanzaiAdapter"),
            canUseNavigatorBeacon: function() {
                return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())
            },
            flush: function(a, c) {
                b("SetIdleTimeoutAcrossTransitions").clear(j), n._sendWithCallbacks(a, c)
            },
            isEnabled: function(a) {
                return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled)
            },
            post: function(a, c, d) {
                a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                b("BanzaiLazyQueue").flushQueue().forEach(function(a) {
                    return n.post.apply(n, a)
                });
                var e = a.split(":");
                if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
                    b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return
                }
                var f = "";
                try {
                    var g;
                    f = (g = JSON.stringify(c)) != null ? g : ""
                } catch (c) {
                    b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
                    return
                }
                var h = d == null ? void 0 : d.retry;
                if (b("BanzaiAdapter").config.disabled) return;
                if (!b("ExecutionEnvironment").canUseDOM && !b("ExecutionEnvironment").isInWorker) return;
                var j = n.adapter.getTopLevel();
                if (j) {
                    var k;
                    try {
                        k = j.require("Banzai")
                    } catch (a) {
                        k = null
                    }
                    if (k) {
                        k.post.apply(k, arguments);
                        return
                    }
                }
                var o = b("BanzaiAdapter").config.blacklist;
                if (o && (o.indexOf && (typeof o.indexOf == "function" && o.indexOf(a) != -1))) return;
                var p = f.length,
                    q = b("BanzaiUtils").wrapData(a, c, n._getEventTime(), h, p),
                    r = q;
                (d == null ? void 0 : d.callback) && (r.__meta.callback = d == null ? void 0 : d.callback);
                (d == null ? void 0 : d.compress) != null && (r.__meta.compress = d == null ? void 0 : d.compress);
                var s = d == null ? void 0 : d.delay;
                s == null && (s = (i || (i = b("BanzaiConsts"))).BASIC_WAIT);
                if (d == null ? void 0 : d.signal) {
                    r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_INFLIGHT;
                    var t = [{
                        user: n._getUserId(),
                        webSessionId: n._getWebSessionId(),
                        app_id: n._getAppId(),
                        posts: [q],
                        trigger: a
                    }];
                    b("BanzaiAdapter").send(n._prepForTransit(t), function() {
                        r.__meta.status = (i || (i = b("BanzaiConsts"))).POST_SENT, r.__meta.callback && r.__meta.callback()
                    }, function(a) {
                        b("BanzaiUtils").retryPost(q, a, l)
                    }, !0);
                    if (!h) return
                }
                l.push(q);
                (n._schedule(s) || !m) && (m = a)
            },
            subscribe: b("BanzaiAdapter").subscribe
        };
    n._initialize();
    e.exports = n
}), null);