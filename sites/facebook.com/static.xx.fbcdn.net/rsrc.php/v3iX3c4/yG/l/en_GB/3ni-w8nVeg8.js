if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("DetectBrokenProxyCache", ["AsyncSignal", "Cookie", "URI"], (function(a, b, c, d, e, f) {
    var g;

    function a(a, c) {
        var d = b("Cookie").get(c);
        if (d != a && d != null && a != "0") {
            c = {
                c: "si_detect_broken_proxy_cache",
                m: c + " " + a + " " + d
            };
            a = new(g || (g = b("URI")))("/platform/scribe_endpoint.php").getQualifiedURI().toString();
            new(b("AsyncSignal"))(a, c).send()
        }
    }
    e.exports = {
        run: a
    }
}), null);
__d("ClickRefUtils", ["DataAttributeUtils"], (function(a, b, c, d, e, f) {
    var g = {
        get_intern_ref: function(a) {
            if (a) {
                var b = {
                    profile_minifeed: 1,
                    gb_content_and_toolbar: 1,
                    gb_muffin_area: 1,
                    ego: 1,
                    bookmarks_menu: 1,
                    jewelBoxNotif: 1,
                    jewelNotif: 1,
                    BeeperBox: 1,
                    searchBarClickRef: 1
                };
                for (var a = a; a && a != document.body; a = a.parentNode) {
                    if (!a.id || typeof a.id !== "string") continue;
                    if (a.id.substr(0, 8) == "pagelet_") return a.id.substr(8);
                    if (a.id.substr(0, 8) == "box_app_") return a.id;
                    if (b[a.id]) return a.id
                }
            }
            return "-"
        },
        get_href: function(a) {
            a = a.getAttribute && (a.getAttribute("ajaxify") || a.getAttribute("data-endpoint")) || a.action || a.href || a.name;
            return typeof a === "string" ? a : null
        },
        should_report: function(a, c) {
            if (c == "FORCE") return !0;
            return c == "INDIRECT" ? !1 : a && (g.get_href(a) || a.getAttribute && b("DataAttributeUtils").getDataFt(a))
        }
    };
    e.exports = g
}), null);
__d("ClickRefLogger", ["Arbiter", "Banzai", "ClickRefUtils", "ScriptPath", "SessionName", "Vector", "collectDataAttributes", "ge", "pageID"], (function(a, b, c, d, e, f) {
    var g = {
        delay: 0,
        retry: !0
    };

    function h(a) {
        if (!b("ge")("content")) return [0, 0, 0, 0];
        a = b("Vector").getEventPosition(a);
        return [a.x, a.y, 0, 0]
    }

    function i(c, d, e, f) {
        var g = "r",
            i = [0, 0, 0, 0],
            j, k;
        if (e) {
            j = e.type;
            j == "click" && b("ge")("content") && (i = h(e));
            var l = 0;
            e.ctrlKey && (l += 1);
            e.shiftKey && (l += 2);
            e.altKey && (l += 4);
            e.metaKey && (l += 8);
            l && (j += l)
        }
        d && (k = b("ClickRefUtils").get_href(d));
        l = b("collectDataAttributes")(e ? e.target || e.srcElement : d, ["ft", "gt"]);
        Object.assign(l.ft, f.ft);
        Object.assign(l.gt, f.gt);
        typeof l.ft.ei === "string" && delete l.ft.ei;
        e && e.which && (l.ft.click_type = e.which === 1 ? "left" : e.which === 2 ? "middle" : "right");
        f = [c.ue_ts, c.ue_count, k || "-", c.context, j || "-", b("ClickRefUtils").get_intern_ref(d), g, a.URI ? a.URI.getRequestURI(!0, !0).getUnqualifiedURI().toString() : location.pathname + location.search + location.hash, l].concat(i).concat(b("pageID")).concat(b("ScriptPath").getTopViewEndpoint());
        return f
    }
    b("Arbiter").subscribe("ClickRefAction/new", function(a, c) {
        if (b("ClickRefUtils").should_report(c.node, c.mode)) {
            a = i(c.cfa, c.node, c.event, c.extra_data);
            c = [b("SessionName").getName(), Date.now(), "act"];
            b("Banzai").post("click_ref_logger", Array.prototype.concat(c, a), g)
        }
    });
    b("Arbiter").subscribe("ClickRefAction/contextmenu", function(a, c) {
        if (b("ClickRefUtils").should_report(c.node, c.mode)) {
            a = i(c.cfa, c.node, c.event, c.extra_data);
            c = [b("SessionName").getName(), Date.now(), "act"];
            b("Banzai").post("click_ref_logger", Array.prototype.concat(c, a), g)
        }
    })
}), null);
__d("DimensionTracking", ["Cookie", "Event", "debounce", "getViewportDimensions", "isInIframe"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a = c("getViewportDimensions")();
        c("Cookie").set("wd", a.width + "x" + a.height)
    }
    c("isInIframe")() || (setTimeout(a, 100), c("Event").listen(window, "resize", c("debounce")(a, 250)), c("Event").listen(window, "focus", a))
}), 34);
__d("StringTransformations", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        unicodeEscape: function(a) {
            return a.replace(/[^A-Za-z0-9\-\.\:\_\$\/\+\=]/g, function(a) {
                a = a.charCodeAt(0).toString(16);
                return "\\u" + ("0000" + a.toUpperCase()).slice(-4)
            })
        },
        unicodeUnescape: function(a) {
            return a.replace(/(\\u[0-9A-Fa-f]{4})/g, function(a) {
                return String.fromCharCode(parseInt(a.slice(2), 16))
            })
        }
    };
    f["default"] = a
}), 66);
__d("TimeSpentArray", ["Banzai", "TimeSlice", "clearTimeout", "pageID", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 2,
        i = h * 32,
        j, k, l, m, n, o, p, q, r, s, t = {},
        u;

    function v() {
        return {
            timeoutDelayMap: t,
            nextDelay: u,
            timeoutInSeconds: m
        }
    }

    function w() {
        if (j) {
            var a = Date.now();
            a > o && (q = Math.min(i, Math.ceil(a / 1e3 - n)));
            a = B();
            a && j(a, u)
        }
        A()
    }

    function x() {
        y(), l = c("setTimeoutAcrossTransitions")(c("TimeSlice").guard(w, "TimeSpentArray Timeout", {
            propagationType: c("TimeSlice").PropagationType.ORPHAN
        }), m * 1e3)
    }

    function y() {
        l && (c("clearTimeout")(l), l = null)
    }

    function z(a) {
        n = a;
        o = n * 1e3;
        p = [1];
        for (var a = 1; a < h; a++) p.push(0);
        q = 1;
        r += 1;
        s += 1;
        a = s.toString() + "_delay";
        u = t[a];
        u === void 0 && (u = t.delay);
        a = s.toString() + "_timeout";
        a = t[a];
        a === void 0 && (a = t.timeout);
        a = Math.min(a, i);
        m = a || i;
        x()
    }

    function A() {
        y(), p = null
    }

    function B() {
        return !p ? null : {
            tos_id: c("pageID"),
            start_time: n,
            tos_array: p.slice(0),
            tos_len: q,
            tos_seq: s,
            tos_cum: r
        }
    }

    function C(a) {
        if (a >= o && a - o < 1e3) return;
        k && k(a);
        D(Math.floor(a / 1e3))
    }

    function D(a) {
        var b = a - n;
        (b < 0 || b >= i) && w();
        !p ? z(a) : (p[b >> 5] |= 1 << (b & 31), q = b + 1, r += 1, o = a * 1e3)
    }

    function a(a, b, d, e) {
        r = 0, s = -1, j = a, k = e, typeof b === "object" && b !== null ? t = b : t = {}, z(Math.floor((d === void 0 || d === null || d === 0 ? Date.now() : d) / 1e3)), c("Banzai").subscribe(c("Banzai").SHUTDOWN, w)
    }

    function b(a) {
        C(a)
    }

    function d() {
        return B()
    }

    function e() {
        w()
    }

    function f() {
        A()
    }

    function E() {
        return v()
    }
    g.init = a;
    g.update = b;
    g.get = d;
    g.ship = e;
    g.reset = f;
    g.testState = E
}), 98);
__d("TimeSpentImmediateActiveSecondsLogger", ["cr:844180"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:844180")
}), 98);
__d("WebTimeSpentBitArrayFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1829320");
    c = b("FalcoLoggerInternal").create("web_time_spent_bit_array", a);
    e.exports = c
}), null);
__d("TimeSpentBitArrayLogger", ["Arbiter", "Env", "LogHistory", "ODS", "TimeSpentArray", "TimeSpentConfig", "TimeSpentImmediateActiveSecondsLogger", "UserActivity", "WebSession", "WebTimeSpentBitArrayFalcoEvent", "cr:1187159", "isInIframe"], (function(a, b, c, d, e, f, g) {
    var h, i = "";

    function j(a) {
        a = k();
        a !== i && (b("TimeSpentArray").ship(), i = a)
    }

    function k() {
        b("WebSession").extend();
        return b("WebSession").getId()
    }

    function l(a, d) {
        a.sid_raw = i, b("Arbiter").inform("timespent/tosbitdataposted", babelHelpers["extends"]({}, a)), c("WebTimeSpentBitArrayFalcoEvent").logImmediately(function() {
            return {
                sid_raw: a.sid_raw,
                start_time: a.start_time,
                tos_array: a.tos_array,
                tos_cum: a.tos_cum,
                tos_id: a.tos_id,
                tos_len: a.tos_len,
                tos_seq: a.tos_seq
            }
        })
    }
    f.exports = {
        init: function(a) {
            if (b("isInIframe")() && !(h || (h = b("Env"))).isCQuick) return;
            if ((h || (h = b("Env"))).isCQuick) {
                b("cr:1187159") != null ? b("UserActivity").subscribe(function(a, c) {
                    b("cr:1187159").sendMessage({
                        compatAction: "update_time_spent_bit_array_from_boc",
                        eventTimeInMs: c.last_inform
                    })
                }) : b("ODS").bumpEntityKey(223, "core_metrics.time_spent.www", "blue_on_comet_without_compat_broker");
                return
            }
            i = k();
            b("UserActivity").subscribe(function(a, c) {
                a = c.last_inform;
                b("TimeSpentArray").update(a);
                b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a)
            });
            a = Date.now();
            b("TimeSpentArray").init(l, b("TimeSpentConfig"), a, j);
            b("TimeSpentImmediateActiveSecondsLogger").maybeReportActiveSecond(a);
            b("ODS").bumpEntityKey(2966, "ms.time_spent.qa.www", "time_spent.bits.js_initialized")
        }
    }
}), 34);
__d("Chromedome", ["fbt"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        if (top !== window || document.domain == null || !/(^|\.)facebook\.(com|sg)$/.test(document.domain)) return;
        a = h._( /*FBT_CALL*/ "Stop!" /*FBT_CALL*/ );
        var b = h._( /*FBT_CALL*/ "This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account." /*FBT_CALL*/ ),
            c = h._( /*FBT_CALL*/ "See {url} for more information." /*FBT_CALL*/ , [h._param("url", "https://www.facebook.com/selfxss")]);
        if (window.chrome || window.safari) {
            var d = "font-family:helvetica; font-size:20px; ";
            [
                [a, d + "font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],
                [b, d],
                [c, d],
                ["", ""]
            ].map(function(a) {
                window.setTimeout(console.log.bind(console, "\n%c" + a[0].toString(), a[1]))
            })
        } else {
            a = ["", " .d8888b.  888                       888", "d88P  Y88b 888                       888", "Y88b.      888                       888", ' "Y888b.   888888  .d88b.  88888b.   888', '    "Y88b. 888    d88""88b 888 "88b  888', '      "888 888    888  888 888  888  Y8P', "Y88b  d88P Y88b.  Y88..88P 888 d88P", ' "Y8888P"   "Y888  "Y88P"  88888P"   888', "                           888", "                           888", "                           888"];
            d = ("" + b.toString()).match(/.{35}.+?\s+|.+$/g);
            if (d != null) {
                b = Math.floor(Math.max(0, (a.length - d.length) / 2));
                for (var e = 0; e < a.length || e < d.length; e++) {
                    var f = a[e];
                    a[e] = f + new Array(45 - f.length).join(" ") + (d[e - b] || "")
                }
            }
            console.log("\n\n\n" + a.join("\n") + "\n\n" + c.toString() + "\n");
            return
        }
    }
    g.start = a
}), 98);
__d("NavigationClickPointHandler", ["Event", "ScriptPath", "collectDataAttributes"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        var b = null,
            d = c("collectDataAttributes")(a, ["ft"], ["href", "data-click"]),
            e = d.normal.href;
        if (!e || e === "#") return !1;
        e = d.normal["data-click"];
        b === null && e && (b = {
            click: e
        });
        e = d.ft.tn;
        b === null && e && (b = {
            tn: e
        });
        if (b === null && a.getAttribute) {
            d = a.getAttribute("class");
            d != null && (b = {
                "class": d
            })
        }
        return b
    }

    function a(a) {
        a = a.target || a.srcElement;
        a = h(a);
        typeof a != "boolean" && d("ScriptPath").setClickPointInfo(a)
    }
    document.documentElement !== null && c("Event").listen(document.documentElement, {
        click: a
    });
    g.getClickPointInfo = h
}), 98);
__d("WebPerfDeviceInfoLogFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1871697");
    c = b("FalcoLoggerInternal").create("web_perf_device_info_log", a);
    e.exports = c
}), null);
__d("XDeviceClassRealtimeController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/web_perf/get_perf_level/", {})
}), null);
__d("WebDevicePerfInfoLogging", ["AsyncTypedRequest", "JSScheduler", "Promise", "WebDevicePerfInfoData", "WebPerfDeviceInfoLogFalcoEvent", "XDeviceClassRealtimeController", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = document.createElement("canvas");
        b = b.getContext("webgl") || b.getContext("experimental-webgl");
        if (!b) return;
        var c = b.getExtension("WEBGL_debug_renderer_info");
        if (!c) return;
        var d = b.getParameter(c.UNMASKED_RENDERER_WEBGL);
        b = b.getParameter(c.UNMASKED_VENDOR_WEBGL);
        a.gpu_vendor = b;
        a.gpu_renderer = d
    }

    function i() {
        var a = window.navigator,
            b = {};
        a && a.hardwareConcurrency !== void 0 && (b.cpu_cores = a.hardwareConcurrency);
        a && a.deviceMemory !== void 0 && (b.ram = a.deviceMemory);
        c("WebDevicePerfInfoData").needsFullUpdate && h(b);
        return b
    }

    function j() {
        var a = i();
        c("WebPerfDeviceInfoLogFalcoEvent").log(function() {
            var b;
            return {
                cpu_cores: (b = a.cpu_cores) != null ? b : null,
                ram: (b = a.ram) != null ? b : null,
                gpu_renderer: (b = a.gpu_renderer) != null ? b : null,
                gpu_vendor: (b = a.gpu_vendor) != null ? b : null
            }
        })
    }

    function k() {
        var a, d;
        return b("regeneratorRuntime").async(function(e) {
            while (1) switch (e.prev = e.next) {
                case 0:
                    a = i();
                    e.next = 3;
                    return b("regeneratorRuntime").awrap(new(c("AsyncTypedRequest"))(c("XDeviceClassRealtimeController").getURIBuilder().getURI()).setData(a).promisePayload());
                case 3:
                    d = e.sent;
                    return e.abrupt("return", d.devicePerfClassLevel);
                case 5:
                case "end":
                    return e.stop()
            }
        }, null, this)
    }

    function a() {
        (c("WebDevicePerfInfoData").needsFullUpdate || c("WebDevicePerfInfoData").needsPartialUpdate) && d("JSScheduler").scheduleSpeculativeCallback(j)
    }

    function e() {
        return new(b("Promise"))(function(a, b) {
            c("WebDevicePerfInfoData").needsFullUpdate || c("WebDevicePerfInfoData").needsPartialUpdate ? d("JSScheduler").scheduleSpeculativeCallback(function() {
                k().then(a)["catch"](b)
            }) : b()
        })
    }
    g.doLog = a;
    g.doLogPromise = e
}), 98);
__d("WebStorageMonster", ["AsyncRequest", "CacheStorage", "Event", "ExecutionEnvironment", "NetworkStatus", "StringTransformations", "UserActivity", "WebStorage", "WebStorageMonsterLoggingURI", "ifRequired", "isEmpty", "killswitch", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e4,
        i = 5,
        j = !1;

    function k(a) {
        var b = {};
        for (var d in a) {
            var e = a.getItem(d),
                f = c("StringTransformations").unicodeEscape(d);
            typeof e === "string" && (b[f] = e.length)
        }
        return b
    }

    function l(a) {
        var b = c("WebStorage").getLocalStorage();
        if (!b || a == null || !a.keys) return;
        o._getLocalStorageKeys().forEach(function(c) {
            a.keys.includes(c) && b.removeItem(c)
        })
    }

    function m(a) {
        var b = c("WebStorage").getLocalStorage();
        b && o._getLocalStorageKeys().forEach(function(c) {
            a.some(function(a) {
                return new RegExp(a).test(c)
            }) || b.removeItem(c)
        })
    }

    function n(a, b) {
        a === void 0 && (a = !1);
        b === void 0 && (b = h);
        if (c("UserActivity").isActive(b)) {
            var d = Math.max(h, Math.floor(b / i));
            c("setTimeoutAcrossTransitions")(function() {
                n(a, d)
            }, d)
        } else {
            o.cleanNow(a);
            var e = !c("killswitch")("WEB_STORAGE_MONSTER_DONT_RESCHEDULE_ON_RUN");
            if (e) {
                var f = b * i;
                c("setTimeoutAcrossTransitions")(function() {
                    n(a, f)
                }, f)
            }
        }
    }
    var o = {
        registerLogoutForm: function(a, b) {
            c("Event").listen(a, "submit", function(a) {
                o.cleanOnLogout(b)
            })
        },
        schedule: function(a) {
            a === void 0 && (a = !1);
            if (j || !c("ExecutionEnvironment").isInBrowser) return;
            j = !0;
            n(a)
        },
        cleanNow: function(a) {
            a === void 0 && (a = !1);
            var b = Date.now(),
                d = {},
                e = c("WebStorage").getLocalStorage();
            e && (d.local_storage = k(e));
            e = c("WebStorage").getSessionStorage();
            e && (d.session_storage = k(e));
            e = !c("isEmpty")(d);
            var f = Date.now();
            d.logtime = f - b;
            if (e) {
                var g, h = c("WebStorageMonsterLoggingURI").uri;
                if (h === null) return null;
                var i = function() {
                    new(c("AsyncRequest"))(h).setData(d).setHandler(function(b) {
                        b = b.getPayload();
                        b && b.keys && (b.keys = b.keys.map(c("StringTransformations").unicodeUnescape));
                        a || l(b);
                        c("NetworkStatus").reportSuccess()
                    }).setErrorHandler(function() {
                        c("NetworkStatus").reportError()
                    }).setOption("retries", 2).send()
                };
                if (c("NetworkStatus").isOnline()) i();
                else {
                    f = function(a) {
                        a = a.online;
                        a && (i(), g.remove())
                    };
                    g = c("NetworkStatus").onChange(f)
                }
            }
        },
        cleanOnLogout: function(a) {
            c("CacheStorage").disablePersistentWrites();
            c("ifRequired")("AsyncStorage", function(a) {
                a.disablePersistentWrites()
            });
            a ? m(a) : m([]);
            a = c("WebStorage").getSessionStorage();
            a && a.clear();
            c("ifRequired")("AsyncStorage", function(a) {
                a.clear(function() {})
            })
        },
        _getLocalStorageKeys: function() {
            var a = c("WebStorage").getLocalStorage();
            return a ? Object.keys(a) : []
        }
    };
    a = o;
    g["default"] = a
}), 98);
__d("ArtillerySegment", ["invariant", "performanceAbsoluteNow"], (function(a, b, c, d, e, f, g, h) {
    var i = 0;
    a = function() {
        function a(a) {
            a || h(0, 1496), "category" in a && "description" in a || h(0, 3138, JSON.stringify(a)), this.$1 = !1, this.$2 = babelHelpers["extends"]({}, a, {
                id: (i++).toString(36)
            }), this.$3 = []
        }
        var b = a.prototype;
        b.getID = function() {
            return this.$2.id
        };
        b.begin = function() {
            this.$2.begin = c("performanceAbsoluteNow")();
            return this
        };
        b.end = function() {
            this.$2.end = c("performanceAbsoluteNow")();
            return this
        };
        b.appendChild = function() {
            var a = this;
            this.$1 && h(0, 37302, this.$2.description);
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            c.forEach(function(b) {
                a.$3.push(b.getID())
            });
            return this
        };
        b.setPosted = function() {
            this.$1 = !0;
            return this
        };
        b.getPostData = function() {
            return babelHelpers["extends"]({}, this.$2, {
                id: this.$2.id,
                children: this.$3.slice()
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ArtillerySequence", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    var i = 0;
    a = function() {
        function a(a) {
            a || h(0, 1496), "description" in a || h(0, 1497, JSON.stringify(a)), this.$1 = !1, this.$2 = babelHelpers["extends"]({}, a, {
                id: (i++).toString(36)
            }), this.$3 = []
        }
        var b = a.prototype;
        b.getID = function() {
            return this.$2.id
        };
        b.addSegment = function() {
            var a = this;
            this.$1 && h(0, 37342, this.$2.description);
            for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
            c.forEach(function(b) {
                a.$3.push(b.getID())
            });
            return this
        };
        b.setPosted = function() {
            this.$1 = !0;
            return this
        };
        b.getPostData = function() {
            return babelHelpers["extends"]({}, this.$2, {
                id: this.$2.id,
                segments: this.$3.slice()
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ArtilleryTrace", ["invariant", "ArtillerySegment", "ArtillerySequence"], (function(a, b, c, d, e, f, g, h) {
    a = function() {
        function a() {
            this.$1 = !1, this.$3 = void 0, this.$4 = {}, this.$5 = {}, this.$6 = [], this.$7 = [], this.$8 = {}, this.$9 = [], this.$10 = null
        }
        var b = a.prototype;
        b.createSequence = function(a) {
            this.$1 && h(0, 4917);
            a = new(c("ArtillerySequence"))(a);
            this.$6.push(a);
            return a
        };
        b.createSegment = function(a) {
            this.$1 && h(0, 4918);
            a = new(c("ArtillerySegment"))(a);
            this.$7.push(a);
            return a
        };
        b.markSegment = function(a, b) {
            this.$1 && h(0, 4919);
            this.$8[b] = a.getID();
            return this
        };
        b.connectTrace = function(a, b) {
            this.$1 && h(0, 4919);
            b = b || this.$2;
            b || h(0, 4920);
            this.$9.push({
                segment: a.getID(),
                trace: b
            });
            return this
        };
        b.setID = function(a, b) {
            !this.$2 && !this.$3 || h(0, 4921);
            this.$2 = a;
            this.$3 = b;
            return this
        };
        b.getID = function() {
            return this.$2
        };
        b.getArtillery2ID = function() {
            return this.$3
        };
        b.addProperty = function(a, b) {
            this.$4[a] = b;
            return this
        };
        b.addTagset = function(a, b) {
            this.$5[a] = b;
            return this
        };
        b.addActivePolicies = function(a) {
            this.addTagset("active_policies", a);
            this.addTagset("policy", a);
            return this
        };
        b.getProperty = function(a) {
            return this.$4[a]
        };
        b.getTagset = function(a) {
            return this.$5[a]
        };
        b.getActivePolicies = function() {
            return this.getTagset("active_policies")
        };
        b.post = function() {
            this.$1 && h(0, 37290, this.$2);
            this.$1 = !0;
            var a = this.$10;
            a && a({
                id: this.$2,
                artillery2Id: this.$3,
                properties: this.$4,
                tagsets: this.$5,
                sequences: this.$6.map(function(a) {
                    return a.setPosted().getPostData()
                }),
                segments: this.$7.map(function(a) {
                    return a.setPosted().getPostData()
                }),
                marks: babelHelpers["extends"]({}, this.$8),
                connections: this.$9.slice()
            })
        };
        b.setOnPost = function(a) {
            this.$10 && h(0, 4923);
            this.$10 = a;
            return this
        };
        b.isPosted = function() {
            return this.$1
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("ServiceWorkerRegistration", ["BrowserPaymentHandlerConfig", "ClientServiceWorkerMessage", "EventListener", "Promise", "Run", "promiseDone"], (function(a, b, c, d, e, f) {
    var g = !!navigator.serviceWorker,
        h = {},
        i = {
            name: "Facebook Pay",
            method: self.location.origin + "/pay"
        };

    function j(a) {
        if (!b("BrowserPaymentHandlerConfig").enabled) return;
        (a = a.paymentManager) == null ? void 0 : (a = a.instruments) == null ? void 0 : a.set("Facebook", i)
    }

    function k() {
        var a = navigator.serviceWorker;
        if (!g || !a) throw new Error("serviceWorker is not supported in this browser");
        return a
    }
    var l = {
        isSupported: function() {
            return g
        },
        registerWorkerIfUnregisteredAfterDD: function(a) {
            b("Run").onAfterLoad(function() {
                l.registerWorkerIfUnregistered(a)
            })
        },
        registerWorkerIfUnregistered: function(a) {
            if (h[a]) return h[a];
            var c = k(),
                d = h[a] = new(b("Promise"))(function(d, e) {
                    b("promiseDone")(l.getWorkerRegistration(a), function(f) {
                        if (!f) {
                            var g = b("EventListener").listen(window, "message", function(a) {
                                (a == null ? void 0 : (a = a.data) == null ? void 0 : a.command) === "ServiceWorkerInstallError" && e()
                            });
                            b("promiseDone")(b("Promise").resolve(c.register(a, {
                                updateViaCache: "all"
                            })), function() {
                                g.remove(), b("promiseDone")(b("Promise").resolve(c.ready), d)
                            })
                        } else d(f)
                    })
                });
            b("promiseDone")(d, function(b) {
                h[a] = null, j(b)
            });
            return d
        },
        unregisterControllingWorker: function() {
            return new(b("Promise"))(function(a, c) {
                c = new(b("ClientServiceWorkerMessage"))("unregister", {}, function() {
                    a(!0)
                });
                c.sendViaController()
            })
        },
        getWorkerRegistration: function(a) {
            var b = k();
            return b.getRegistration(a)
        },
        isAWorkerActivated: function() {
            return !navigator.serviceWorker || !navigator.serviceWorker.getRegistration ? b("Promise").resolve(!1) : navigator.serviceWorker.getRegistration().then(function(a) {
                return !!(a && a.active)
            })
        }
    };
    e.exports = l
}), null);
__d("Artillery", ["invariant", "ArtilleryTrace", "Banzai", "ClientServiceWorkerMessage", "Run", "ServiceWorkerRegistration", "forEachObject", "mixInEventEmitter", "performance"], (function(a, b, c, d, e, f, g, h) {
    var i = !1,
        j = !1,
        k = [],
        l, m, n, o = {},
        p = {},
        q = !1,
        r = !1;

    function s() {
        if (i) return;
        i = !0;
        c("Banzai").subscribe(c("Banzai").SHUTDOWN, function() {
            u._postAll()
        })
    }

    function t() {
        m = null, l = null, p = {}, o = {}, n = null, r = !1
    }
    var u = {
        isEnabled: function() {
            return j
        },
        createTrace: function() {
            s();
            var a = new(c("ArtilleryTrace"))();
            a.setOnPost(function(a) {
                u.emitAndHold("posttrace", a)
            });
            k.push(a);
            return a
        },
        getPageTrace: function() {
            l || h(0, 4261);
            if (n) return n;
            var a = u.createTrace().setID(l, m);
            c("forEachObject")(o, function(b, c, d) {
                a.addProperty(c, b)
            });
            c("forEachObject")(p, function(b, c, d) {
                a.addTagset(c, b)
            });
            n = a;
            return a
        },
        setPageProperties: function(a) {
            o = a
        },
        addPageTagset: function(a, b) {
            n == null ? p[a] = b : n.addTagset(a, b)
        },
        setActivePolicies: function(a) {
            u.addPageTagset("active_policies", a), u.addPageTagset("policy", a)
        },
        getPageActivePolicies: function() {
            return u.getPageTagset("active_policies")
        },
        enableLogServiceWorker: function() {
            c("ServiceWorkerRegistration").isSupported() && (q = !0)
        },
        getPageProperty: function(a) {
            if (n == null) return o[a];
            else return n.getProperty(a)
        },
        getPageTagset: function(a) {
            if (n == null) return p[a];
            else return n.getTagset(a)
        },
        enable: function() {
            j = !0, r || (d("Run").onLeave(t), r = !0)
        },
        disable: function() {
            j = !1
        },
        setPageTraceID: function(a, b) {
            if (l === a && m === b) return;
            !l && !m || h(0, 4262);
            l = a;
            m = b;
            if (q && c("performance") && c("performance").timing && c("performance").timing.navigationStart) {
                a = new(c("ClientServiceWorkerMessage"))("asw-sendStartupData", {
                    traceID: m,
                    windowStart: c("performance").timing.navigationStart
                }, null);
                a.sendViaController()
            }
        },
        addPiggyback: function(a, b) {
            window.CavalryLogger && window.CavalryLogger.getInstance().addPiggyback(a, b)
        },
        _postAll: function() {
            k.forEach(function(a) {
                return !a.isPosted() && a.post()
            })
        }
    };
    c("mixInEventEmitter")(u, {
        posttrace: !0
    });
    a = u;
    g["default"] = a
}), 98);
__d("WebBlueTimeSpentNavigationFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1829319");
    c = b("FalcoLoggerInternal").create("web_blue_time_spent_navigation", a);
    e.exports = c
}), null);
__d("WebImmediateActiveSecondsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1843988");
    c = b("FalcoLoggerInternal").create("web_immediate_active_seconds", a);
    e.exports = c
}), null);
__d("NavigationMetricsEnumJS", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NAVIGATION_START: "navigationStart",
        UNLOAD_EVENT_START: "unloadEventStart",
        UNLOAD_EVENT_END: "unloadEventEnd",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        CONNECT_END: "connectEnd",
        SECURE_CONNECTION_START: "secureConnectionStart",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd",
        DOM_LOADING: "domLoading",
        DOM_INTERACTIVE: "domInteractive",
        DOM_CONTENT_LOADED_EVENT_START: "domContentLoadedEventStart",
        DOM_CONTENT_LOADED_EVENT_END: "domContentLoadedEventEnd",
        DOM_COMPLETE: "domComplete",
        LOAD_EVENT_START: "loadEventStart",
        LOAD_EVENT_END: "loadEventEnd"
    });
    f["default"] = a
}), 66);
__d("ResourceTimingMetricsEnumJS", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        START_TIME: "startTime",
        REDIRECT_START: "redirectStart",
        REDIRECT_END: "redirectEnd",
        FETCH_START: "fetchStart",
        DOMAIN_LOOKUP_START: "domainLookupStart",
        DOMAIN_LOOKUP_END: "domainLookupEnd",
        CONNECT_START: "connectStart",
        SECURE_CONNECTION_START: "secureConnectionStart",
        CONNECT_END: "connectEnd",
        REQUEST_START: "requestStart",
        RESPONSE_START: "responseStart",
        RESPONSE_END: "responseEnd"
    });
    f["default"] = a
}), 66);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "JSResource", "ODS", "PersistedQueue", "Queue", "WebSession", "performanceAbsoluteNow", "promiseDone", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5 * 1024,
        i = 60 * 1e3,
        j = 1e3,
        k = "falco:",
        l = new(c("Queue"))(),
        m = 5e3,
        n = 6e4,
        o = c("uuid")(),
        p = "ods_web_batch",
        q = [],
        r = 0,
        s, t = !1,
        u = !1,
        v = !1,
        w = !0,
        x = !1,
        y = Date.now() - n,
        z = 1;

    function A(a, b) {
        H(b.item.name, "js.br.add_to_batch", 1, !0);
        var c = b.item.extra.length;
        r + c > h && (clearTimeout(s), B());
        q.push([a, b]);
        r += c
    }

    function B() {
        var a;
        s = null;
        t = !1;
        var b = q;
        F("js.br.send_batch", b.map(function(a) {
            return a[1].item
        }));
        if (!x && ((a = c("AnalyticsCoreData").enable_fallback_for_br) != null ? a : !1)) {
            G("js.br.init_not_complete.log", b.length);
            a = function() {
                var a = b[d],
                    c = a[0],
                    e = a[1];
                I.log([e.item], function(a) {
                    return c.markItem(e, a)
                })
            };
            for (var d = 0; d < b.length; d++) a()
        } else l.enqueue(function(a) {
            return a.log(b.map(function(a) {
                return a[1].item
            }), function(a) {
                if (!a) {
                    G("js.br.banzai_fallback", b.length);
                    var c = function() {
                        var c = b[d],
                            a = c[0],
                            e = c[1];
                        I.log([e.item], function(b) {
                            return a.markItem(e, b)
                        })
                    };
                    for (var d = 0; d < b.length; d++) c();
                    return
                }
                for (var c = 0; c < b.length; c++) {
                    var e = b[c],
                        f = e[0];
                    e = e[1];
                    H(e.item.name, "js.br.success_callback.batch.send_batch", 1, !0);
                    f.markItem(e, a)
                }
            })
        });
        q = [];
        r = 0
    }

    function C(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3
                }
            })
        }
    }

    function D(a) {
        return Object.freeze({
            deviceId: c("AnalyticsCoreData").device_id,
            sessionId: a,
            appId: c("AnalyticsCoreData").app_id,
            pushPhase: c("AnalyticsCoreData").push_phase
        })
    }

    function E(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f, g = a[e];
            H(g.name, "js.banzai.posting_event", 1, !1);
            f = (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = c("AnalyticsCoreData").device_id, f.s = d("WebSession").getId(), f.t = g.time, f);
            g.privacyContext && (f.p = g.privacyContext);
            c("Banzai").post(k + g.name, f, b)
        }
        F("planes.banzai.write_to_transport", a)
    }

    function F(a, b) {
        var c = 0;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e.name !== p && (c += 1)
        }
        c > 0 && G(a, c)
    }

    function G(a, b) {
        var e, f = "falco.fabric.www." + c("AnalyticsCoreData").push_phase;
        ((e = c("AnalyticsCoreData").enable_fallback_for_br) != null ? e : !1) && (f += ".br_fallback_enabled");
        d("ODS").bumpEntityKey(1344, f, a, b)
    }

    function H(a, b, c, e) {
        if (a === p) return !1;
        d("ODS").bumpEntityKey(1344, "falco.event." + a, b, c);
        e && G(b, c);
        return !0
    }
    var I = {
        log: function(a, b) {
            F("js.banzai.post.log", a), E(a, c("Banzai").BASIC), b(!0)
        },
        logImmediately: function(a, b) {
            F("js.banzai.post.log_immediately", a), E(a, c("Banzai").VITAL), b(!0)
        },
        logCritical: function(a, b) {
            F("js.banzai.post.log_critical", a), E(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function J(a) {
        var b = K(a, "banzai_data_loss", "log"),
            d = K(a, "banzai_data_loss", "logImmediately"),
            e = K(a, "banzai_data_loss", "logCritical"),
            f = K(a, "bladerunner_data_loss", "");
        G("js.br_data_loss.posted." + a, 1);
        if (x && w) try {
            l.enqueue(function(b) {
                return b.log([f], function(b) {
                    if (!b) {
                        G("js.br.transport_failure." + a, 1);
                        I.logCritical([f], function(b) {
                            G("js.br.failure_fallback_success_callback." + a, 1)
                        });
                        return
                    }
                    G("js.br.success_callback." + a, 1)
                })
            })
        } catch (b) {
            G("js.br.error_enqueueing." + a, 1), I.logCritical([f], function(b) {
                G("js.br.enqueuing_fallback_success_callback." + a, 1)
            })
        } else w || G("js.br.failed." + a, 1), x || G("js.br.init_not_complete." + a, 1), I.logCritical([f], function(b) {
            G("js.br.init_fallback_success_callback." + a, 1)
        });
        E([b], c("Banzai").BASIC);
        E([d], c("Banzai").VITAL);
        E([e], {
            signal: !0,
            retry: !0
        })
    }

    function K(a, b, d) {
        return {
            name: b,
            time: c("performanceAbsoluteNow")(),
            policy: {
                r: 1
            },
            extra: JSON.stringify({
                event_index: a,
                falco_js_connection_id: o,
                logging_mode: d
            })
        }
    }

    function L() {
        y + m < Date.now() && (J(z), y = Date.now(), z++)
    }

    function M() {
        window.setTimeout(function() {
            L(), z <= 40 && M()
        }, n)
    }

    function N() {
        if (u) return;
        c("JSResource").loadAll([c("JSResource")("TransportSelectingClientSingleton").__setRef("FalcoLoggerTransports"), c("JSResource")("RequestStreamCommonRequestStreamCommonTypes").__setRef("FalcoLoggerTransports")], function(a, b) {
            var e = b.FlowStatus,
                f;
            b = {
                onTermination: function(a) {
                    a.message === "Stream closed" ? (l.stop(!0), u = !1) : (w = !1, l.start(function(a) {
                        return a(I)
                    }))
                },
                onFlowStatus: function(a) {
                    a === e.Started && l.start(function(a) {
                        return a({
                            log: function(b, a) {
                                F("planes.bladerunner.write_to_transport", b);
                                var d = JSON.stringify(C(b));
                                f ? c("AnalyticsCoreData").enable_ack ? c("promiseDone")(f.amendWithAck(d), function() {
                                    F("planes.bladerunner.ack_received", b), a(!0)
                                }, function() {
                                    F("planes.bladerunner.ack_failure", b), a(!1)
                                }) : (f.amendWithoutAck(d), F("planes.bladerunner.write_without_ack", b)) : (F("planes.bladerunner.request_stream_null", b), a(!1))
                            },
                            logImmediately: function(b, a) {
                                this.log(b, a)
                            },
                            logCritical: function(b, a) {
                                this.log(b, a)
                            }
                        })
                    })
                }
            };
            c("promiseDone")(a.requestStream({
                method: "Falco"
            }, JSON.stringify(D(d("WebSession").getId())), b, {
                requestId: ""
            }).then(function(a) {
                f = a, x = !0
            })["catch"](function(a) {
                l.stop(!0), u = !1
            }))
        });
        u = !0
    }

    function O(a) {
        return c("AnalyticsCoreData").enable_bladerunner && w && a.s === 1
    }

    function a() {
        if (v) return;
        v = !0;
        c("PersistedQueue").setHandler("falco_queue_log", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                O(b.item.policy) ? (H(b.item.name, "js.use_bladerunner.log", 1, !0), N(), s == null && (s = setTimeout(B, i)), A(a, b)) : (H(b.item.name, "js.use_banzai.log", 1, !0), I.log([b.item], function(c) {
                    return a.markItem(b, c)
                }))
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_immediately", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                O(b.item.policy) ? (H(b.item.name, "js.use_bladerunner.log_immediately", 1, !0), N(), (s == null || !t) && (clearTimeout(s), s = setTimeout(B, j), t = !0), A(a, b)) : (H(b.item.name, "js.use_banzai.log_immediately", 1, !0), I.logImmediately([b.item], function(c) {
                    return a.markItem(b, c)
                }))
            })(b)
        });
        c("PersistedQueue").setHandler("falco_queue_critical", function(a) {
            var b;
            while (b = a.dequeueItem())(function(b) {
                var d = b.item;
                if (O(d.policy)) {
                    var e;
                    H(d.name, "js.use_bladerunner.log_critical", 1, !0);
                    N();
                    !x && ((e = c("AnalyticsCoreData").enable_fallback_for_br) != null ? e : !1) ? (H(d.name, "js.br.init_not_complete.logCritical", 1, !0), I.logCritical([d], function(c) {
                        return a.markItem(b, c)
                    })) : l.enqueue(function(c) {
                        return c.logCritical([d], function(c) {
                            if (!c) {
                                G("js.br.banzai_fallback.critical", 1);
                                I.logCritical([d], function(c) {
                                    return a.markItem(b, c)
                                });
                                return
                            }
                            H(b.item.name, "js.br.success_callback.batch.critical", 1, !0);
                            a.markItem(b, c)
                        })
                    })
                } else H(d.name, "js.use_banzai.log_critical", 1, !0), I.logCritical([d], function(c) {
                    return a.markItem(b, c)
                })
            })(b)
        });
        c("AnalyticsCoreData").enable_dataloss_timer && (N(), L(), M())
    }
    g.attach = a
}), 98);
__d("ScriptPathLogger", ["Banzai", "LogHistory", "ScriptPath", "URI", "WebBlueTimeSpentNavigationFalcoEvent", "WebSession", "isInIframe"], (function(a, b, c, d, e, f, g) {
    "use strict";
    f = "script_path_change";
    var h = {
            scriptPath: null,
            categoryToken: null,
            extraData: {}
        },
        i = !1,
        j = "imp_id";

    function k(a) {
        var b = c("URI").getNextURI ? c("URI").getNextURI() : new(c("URI"))(window.location.href),
            d = b.getQueryData();
        b = b.getPath();
        b.endsWith("/") && (b = b.substr(0, b.length - 1));
        d.comment_id && (a.extra_data = babelHelpers["extends"]({}, a.extra_data, {
            graphql_comment_id: d.comment_id
        }));
        var e = l(b, d);
        if (e) {
            a.content_id = e;
            return
        }
        e = m(b);
        if (e !== "") {
            a.dest_topic_feed = e;
            return
        }
        if (n(b)) {
            e = d.queue_id;
            e && (a.dest_srt_queue_id = e);
            b = d.job_in_review;
            b && (a.dest_srt_reviewing_job_id = b);
            return
        }
    }

    function l(a, b) {
        if (b.story_fbid) return b.story_fbid;
        if (b.fbid) return b.fbid;
        if (b.view === "permalink" && b.id) return b.id;
        b = /\/(posts|videos|notes|groups\/.*\/permalink)\//;
        var c = /^[0-9]+$/;
        if (b.test(a)) {
            b = a.split("/");
            a = b[b.length - 1];
            if (c.test(a)) return a
        }
        return ""
    }

    function m(a) {
        if (!a || a.search("/feed/topics/") == -1) return "";
        a = a.split("/");
        return a[a.length - 1]
    }

    function n(a) {
        return !!a && a.search("/intern/review/") !== -1
    }

    function o(a, b, e, f) {
        d("WebSession").extend();
        if (!i || c("isInIframe")()) return;
        var g = {
            source_path: a.scriptPath,
            source_token: a.categoryToken,
            dest_path: b.scriptPath,
            dest_token: b.categoryToken,
            impression_id: b.extraData ? b.extraData.imp_id : null,
            cause: e,
            sid_raw: d("WebSession").getId()
        };
        e = e === "unload";
        e || k(g);
        if (f != null) {
            var h = f.snowlift_content_id;
            !e && h != null && (g.content_id = h, delete f.snowlift_content_id);
            g.extra_data = babelHelpers["extends"]({}, g.extra_data, f)
        }
        a.scriptPath === null && (g.referrer = document.referrer);
        e = d("ScriptPath").getClickPointInfo();
        e && (g.click_point_info = e);
        if (a.extraData)
            for (var h in a.extraData) h != j && (g["source_" + h] = a.extraData[h]);
        if (b.extraData)
            for (var f in b.extraData) f != j && (g["dest_" + f] = b.extraData[f]);
        a.topViewEndpoint && (g.source_endpoint = a.topViewEndpoint);
        b.topViewEndpoint && (g.dest_endpoint = b.topViewEndpoint);
        a.restored && (g.source_restored = !0);
        c("WebBlueTimeSpentNavigationFalcoEvent").logImmediately(function() {
            return {
                json_data: JSON.stringify(g)
            }
        });
        d("ScriptPath").setClickPointInfo(null)
    }

    function p() {
        o(d("ScriptPath").getSourcePageInfo() || h, d("ScriptPath").getPageInfo() || h, "load")
    }

    function q(a, b, c) {
        o(a, b, "transition", c)
    }

    function a() {
        o(d("ScriptPath").getPageInfo() || h, h, "unload"), d("ScriptPath").shutdown()
    }
    var r = d("ScriptPath").subscribe(function(a) {
        if (i) {
            var b = a.source,
                c = a.dest,
                d = a.cause;
            a = a.extraData;
            d ? o(b || h, c || h, d, a) : b ? q(b, c || h, a) : p()
        }
    });
    c("Banzai").subscribe(c("Banzai").SHUTDOWN, a);

    function b() {
        i = !0, d("ScriptPath").getPageInfo() && p()
    }

    function e() {
        i = !1, r.remove()
    }
    g.BANZAI_LOGGING_ROUTE = f;
    g.startLogging = b;
    g.stopLogging = e
}), 98);
__d("ImageTimingHelper", ["Arbiter", "BigPipe", "URI"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {};

    function j(a) {
        var c = a.lid,
            d = a.pagelet,
            e = a.images,
            f = a.timeslice,
            j = a.ts,
            k = h[c];
        k || (k = h[c] = []);
        e.forEach(function(a) {
            try {
                var c = new(g || (g = b("URI")))(a);
                a = c.setFragment("").toString()
            } catch (a) {
                return
            }
            if (i[a]) return;
            i[a] = !0;
            k.push({
                pagelet: d,
                timeslice: f,
                ts: j,
                uri: a
            })
        })
    }
    b("Arbiter").subscribe(b("BigPipe").Events.init, function(a, b) {
        b.lid && b.lid !== "0" && b.arbiter.subscribe("images_displayed", function(a, b) {
            j(b)
        })
    });
    b("Arbiter").subscribe("MRenderingScheduler/images_displayed", function(a, b) {
        j(b)
    });
    e.exports.getImageTimings = function(a) {
        return h[a] || []
    }
}), null);
__d("NavigationTimingHelper", ["NavigationMetricsEnumJS", "forEachObject", "performance"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        var d = {};
        c("forEachObject")(c("NavigationMetricsEnumJS"), function(c) {
            var e = b[c];
            e && (d[c] = e + a)
        });
        return d
    }

    function a(a) {
        if (!a || !c("performance").timing || !c("performance").getEntriesByName) return void 0;
        a = c("performance").getEntriesByName(a);
        return a.length === 0 ? void 0 : h(c("performance").timing.navigationStart, a[0])
    }

    function i() {
        if (!c("performance").timing || !c("performance").getEntriesByType) return {};
        var a = c("performance").getEntriesByType("navigation");
        return !a.length ? {} : h(c("performance").timing.navigationStart, a[0])
    }

    function b() {
        if (!c("performance").timing) return void 0;
        var a = babelHelpers["extends"]({}, h(0, c("performance").timing), i());
        return h(0, a)
    }
    g.getAsyncRequestTimings = a;
    g.getPerformanceNavigationTiming = i;
    g.getNavTimings = b
}), 98);
__d("PageletEventsHelper", ["Arbiter", "PageletEventConstsJS"], (function(a, b, c, d, e, f, g) {
    var h = "BigPipe/init",
        i = "MRenderingScheduler/init",
        j = "pagelet_event",
        k = "phase_begin",
        l = {},
        m = [],
        n = !1;

    function o() {
        return {
            pagelets: {},
            categories: {},
            phase_start: {},
            display_resources: {},
            all_resources: {}
        }
    }

    function p(a, b, c, d) {
        l[d] == void 0 && (l[d] = o()), l[d].pagelets[b] == void 0 && (l[d].pagelets[b] = {}), l[d].pagelets[b][a] = c
    }

    function q(a) {
        a.subscribe(j, function(a, b) {
            var d = b.event,
                e = b.ts;
            a = b.id;
            var f = b.lid,
                g = b.phase,
                h = b.categories,
                i = b.allResources;
            b = b.displayResources;
            p(d, a, e, f);
            var j = l[f],
                k = j.pagelets[a];
            d === c("PageletEventConstsJS").ARRIVE_END && (k.phase = g, j.all_resources[a] = i, j.display_resources[a] = b);
            (d === c("PageletEventConstsJS").ONLOAD_END || d === c("PageletEventConstsJS").DISPLAY_END) && h && h.forEach(function(a) {
                j.categories[a] == void 0 && (j.categories[a] = {}), j.categories[a][d] = e
            });
            for (var k = 0, g = m.length; k < g; k++) m[k](a, d, e, f)
        }), a.subscribe(k, function(a, b) {
            l[b.lid].phase_start[b.phase] = b.ts
        })
    }

    function a() {
        if (n) return;
        c("Arbiter").subscribe(h, function(a, b) {
            a = b.lid;
            b = b.arbiter;
            l[a] = o();
            q(b)
        });
        c("Arbiter").subscribe(i, function(a, b) {
            a = b.lid;
            b = b.arbiter;
            l[a] = o();
            q(b)
        });
        n = !0
    }

    function b(a) {
        return l[a] ? JSON.parse(JSON.stringify(l[a])) : null
    }

    function d(a) {
        m.push(a);
        return {
            remove: function() {
                m.splice(m.indexOf(a), 1)
            }
        }
    }
    g.init = a;
    g.getMetrics = b;
    g.subscribeToPageletEvents = d
}), 98);
__d("ResourceTimingBootloaderHelper", ["Bootloader", "ResourceTimingMetricsEnumJS", "ResourceTimingsStore", "ResourceTypes", "URI", "forEachObject", "performance"], (function(a, b, c, d, e, f) {
    var g, h, i = 500,
        j = [],
        k = {},
        l = {},
        m = new Map(),
        n = [".mp4", ".m4v", ".mpd", "m4a"],
        o = new Set(["bootload", "js_exec", "start_bootload", "tag_bootload"]);

    function p(a) {
        for (var b = 0; b < n.length; b++) {
            var c = n[b];
            if (a.endsWith(c)) return !0
        }
        return !1
    }

    function q(a) {
        var c = new Map();
        b("ResourceTimingsStore").getMapFor(a).forEach(function(a) {
            if (a.requestSent != null) {
                var b = c.get(a.uri);
                b != null ? b.push(a) : c.set(a.uri, [a])
            }
        });
        c.forEach(function(a) {
            return a.sort(function(a, b) {
                return a.requestSent - b.requestSent
            })
        });
        return c
    }

    function r(a, b, c, d) {
        var e = a.get(b);
        if (e == null) {
            var f = b.indexOf("?");
            if (f !== -1) {
                b = b.substring(0, f);
                e = a.get(b)
            }
        }
        if (e != null)
            for (var f = 0; f < e.length; f++) {
                a = e[f];
                b = a.requestSent;
                a = a.responseReceived;
                if ((c == null || b != null && b <= c) && (d == null || a != null && a >= d)) return e.splice(f, 1)[0]
            }
        return null
    }

    function s(a, c, d, e, f, h, i) {
        if (!(g || (g = b("performance"))).timing || !(g || (g = b("performance"))).getEntriesByType) return null;
        var j = (g || (g = b("performance"))).timing.navigationStart;
        e = Array.from(g.getEntriesByType("resource"));
        e = e.filter(function(a) {
            return a.duration >= 0 && a.startTime != null && a.startTime + j > c && (f == null || a.responseEnd == null || a.responseEnd + j < f)
        });
        e.sort(function(a, b) {
            return a.startTime - b.startTime
        });
        var k = e.length,
            n = 0,
            o = 0,
            s = 0,
            w = 0,
            x = 0,
            y = q(b("ResourceTypes").XHR),
            z = q(b("ResourceTypes").CSS),
            A = q(b("ResourceTypes").JS);
        for (var B = 0; B < e.length; B++) {
            var C = e[B],
                D = "",
                E = "",
                F = void 0,
                G = C.initiatorType;
            switch (G) {
                case "css":
                case "link":
                case "script":
                    G = b("ResourceTimingsStore").parseMakeHasteURL(C.name);
                    if (!G) continue;
                    var H = G[0];
                    G = G[1];
                    if (G === "css" || G === "js") {
                        var I = G === "css" ? z : A;
                        F = r(I, C.name, C.startTime + j, C.responseEnd + j);
                        if (F != null && i) {
                            E = G;
                            D = F.uid;
                            break
                        } else {
                            E = G;
                            G = (I = m.get(C.name)) != null ? I : s++;
                            D = G + "_" + H
                        }
                    } else {
                        I = v(C.name);
                        G = I[0];
                        E = I[1];
                        D = o++ + "_" + G
                    }
                    break;
                case "img":
                    D = o++ + "_" + t(C.name);
                    E = "img";
                    break;
                case "iframe":
                    D = w++ + "_" + t(C.name) + u(C.name);
                    E = "iframe";
                    break;
                case "xmlhttprequest":
                    if (h) {
                        H = t(C.name);
                        I = u(C.name);
                        if (p(I)) {
                            D = x++ + "_" + H + I;
                            E = "video";
                            break
                        } else {
                            F = r(y, C.name, C.startTime + j, C.responseEnd + j);
                            if (F != null) {
                                E = b("ResourceTypes").XHR;
                                D = F.uid;
                                break
                            }
                        }
                    }
                default:
                    continue
            }
            G = {};
            H = Object.keys(b("ResourceTimingMetricsEnumJS"));
            for (var I = 0; I < H.length; I++) {
                var J = b("ResourceTimingMetricsEnumJS")[H[I]],
                    K = C[J];
                K && (G[J] = K + (g || (g = b("performance"))).timing.navigationStart)
            }
            if (F != null) {
                J = F;
                K = J.requestSent;
                I = J.responseReceived;
                if (c != null && K != null && K < c || f != null && I != null && I > f) continue;
                G.requestSent = K;
                G.responseReceived = I
            }
            G.type = E;
            G.desc = D;
            if (F != null && (E === b("ResourceTypes").JS || E === b("ResourceTypes").CSS || E === b("ResourceTypes").XHR)) {
                H = b("ResourceTimingsStore").getAnnotationsFor(E, F.uid);
                H != null && (G.annotations = H)
            }
            E == "img" && Object.prototype.hasOwnProperty.call(d, C.name) && (G.pagelet = d[C.name]);
            G.transferSize = C.transferSize;
            G.encodedBodySize = C.encodedBodySize;
            a[C.name] == void 0 && (a[C.name] = []);
            n++;
            a[C.name].push(G)
        }
        return i ? {
            numValidEntries: k,
            numSuccessfulMetrics: n
        } : null
    }

    function t(a) {
        a = new(h || (h = b("URI")))(a).getDomain();
        return a
    }

    function u(a) {
        a = new(h || (h = b("URI")))(a).getPath();
        return a
    }

    function v(a) {
        return [t(a), "img"]
    }

    function w(a) {
        var b = Object.keys(a).filter(function(a) {
            return a.startsWith("start_bootload/")
        }).sort(function(b, c) {
            return a[b] - a[c]
        }).map(function(a) {
            return a.substring(a.indexOf("/") + 1)
        });
        b.forEach(function(b) {
            return o.forEach(function(c) {
                c = c + "/" + b;
                a[c] != null && (k[c] = a[c])
            })
        });
        j = j.concat(b);
        if (j.length > i) {
            b = j.splice(0, j.length - i);
            b.forEach(function(a) {
                return o.forEach(function(b) {
                    k[b + "/" + a] && delete k[b + "/" + a]
                })
            })
        }
    }
    a = {
        addPastBootloaderMetricsToResourceTimings: function(c, d) {
            c === void 0 && (c = {});
            d === void 0 && (d = {});
            var a = b("Bootloader").getURLToHashMap();
            b("forEachObject")(c, function(b, c) {
                var e = a.get(c);
                if (!e) return;
                var f = new Map();
                f.set("bootloader_hash", e);
                o.forEach(function(a) {
                    var b = a + "/" + e;
                    b = d[b] || k[b];
                    b != null && f.set(a, b)
                });
                f.size > 0 && b.forEach(function(a) {
                    if (a.requestSent || a.responseReceived) return;
                    f.forEach(function(b, c) {
                        return a[c] = b
                    })
                })
            })
        },
        mergeBootloaderMetricsAndResourceTimings: function(a, c, d) {
            a === void 0 && (a = {});
            c === void 0 && (c = {});
            d === void 0 && (d = !0);
            m.size === 0 && (m = b("Bootloader").getURLToHashMap());
            var e = new Map();
            for (var f = m, g = Array.isArray(f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (g) {
                    if (h >= f.length) break;
                    i = f[h++]
                } else {
                    h = f.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                var j = i[0];
                i = i[1];
                e.set(j, i)
            }
            var k = [];
            b("forEachObject")(c, function(b, c) {
                var d = c.indexOf("/");
                if (d === -1) return;
                var f = c.substring(0, d);
                if (!o.has(f)) return;
                k.push(c);
                var g = c.substring(d + 1);
                c = e.get(g);
                if (!c) {
                    c = g;
                    g = m.get(c);
                    if (!g) return
                }
                c.startsWith("data:") && (c = "inlined resource: " + g);
                a[c] == null && (a[c] = [{}]);
                a[c].forEach(function(a) {
                    a.bootloader_hash = g, a[f] = b
                })
            });
            d || (w(c), k.forEach(function(a) {
                return delete c[a]
            }));
            return a
        },
        getLastTTIAndE2EImageResponseEnds: function(a, c, d) {
            var e = {
                TTI: a,
                E2E: c
            };
            if (!(g || (g = b("performance"))).timing) return e;
            var f = d.filter(function(b) {
                    return b.ts <= a
                }).map(function(a) {
                    return a.uri
                }).reduce(function(b, a) {
                    b[a] = !0;
                    return b
                }, {}),
                h = d.map(function(a) {
                    return a.uri
                }).reduce(function(b, a) {
                    b[a] = !0;
                    return b
                }, {});
            for (var i in l) l[i].forEach(function(a) {
                a.type === "img" && (f[i] && (e.TTI = Math.max(e.TTI, a.responseEnd)), h[i] && (e.E2E = Math.max(e.E2E, a.responseEnd)))
            });
            return e
        },
        getMetrics: function(a, c, d, e, f, g) {
            c === void 0 && (c = {});
            l = {};
            m.size === 0 && (m = b("Bootloader").getURLToHashMap());
            a = s(l, a, c, d, e, f, g);
            return {
                data: l,
                diagnostics: a
            }
        }
    };
    e.exports = a
}), null);
__d("PerfXFlusher", ["invariant", "Banzai"], (function(a, b, c, d, e, f, g) {
    var h = "perfx_custom_logger_endpoint",
        i = ["perfx_page", "perfx_page_type", "lid"];

    function j(a) {
        i.forEach(function(b) {
            return g(b in a, 'PerfXFlusher: Field "%s" missing in the PerfX payload', b)
        })
    }
    a = {
        flush: function(a) {
            j(a), b("Banzai").post(h, a, {
                signal: !0
            })
        },
        registerToSendWithBeacon: function(a) {
            b("Banzai").subscribe(b("Banzai").SHUTDOWN, function() {
                var c = a();
                c.length && b("Banzai").post(h, c, {
                    delay: b("Banzai").VITAL_WAIT
                })
            })
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("pageLoadedViaSWCache", [], (function(a, b, c, d, e, f) {
    function a() {
        return self.__SW_CACHE__ === 1
    }
    f["default"] = a
}), 66);
__d("PerfXLogger", ["DataAttributeUtils", "NavigationMetrics", "NavigationTimingHelper", "ODS", "PerfXFlusher", "PerfXSharedFields", "QuicklingRefreshOverheadUtil", "VisibilityListener", "forEachObject", "pageLoadedViaSWCache", "performanceAbsoluteNow", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = {},
        j = 65 * 1e3,
        k = ["e2e", "tti", "all_pagelets_displayed", "all_pagelets_loaded", "artillery_disable_time"],
        l = {},
        m = {
            _listenersSetUp: !1,
            _uploadEarly: !1,
            _alreadyUploadedEarly: !1,
            _setupListeners: function() {
                if (m._listenersSetUp) return;
                m._subscribeToNavigationMetrics();
                b("PerfXFlusher").registerToSendWithBeacon(function() {
                    var a = [];
                    b("forEachObject")(h, function(b, c) {
                        if (!h[c].sent) {
                            b = m.getPayload(c, "unload fired");
                            b != null && a.push(b)
                        }
                    });
                    h = {};
                    return a
                });
                m._listenersSetUp = !0
            },
            _init: function(a) {
                var b = a.lid;
                if (b == null) return;
                m._alreadyUploadedEarly = !1;
                m._uploadEarly = !!a.upload_perfx_early;
                delete a.upload_perfx_early;
                var c = i[b] || [];
                delete i[b];
                if (a.sw_controlled_tags) {
                    if (navigator.serviceWorker && navigator.serviceWorker.controller)
                        for (var d = 0; d < a.sw_controlled_tags.length; d++) c.push(a.sw_controlled_tags[d]);
                    delete a.sw_controlled_tags
                }
                h[b] = babelHelpers["extends"]({
                    tags: new Set(c),
                    sent: !1
                }, a);
                m._registerTimeoutSendback(b);
                m._setupListeners()
            },
            initWithNavigationMetricsLID: function(a, c) {
                var d = b("NavigationMetrics").getFullPageLoadLid();
                if (!d) return;
                m._init(babelHelpers["extends"]({}, c, {
                    lid: d
                }));
                if (a && a.always)
                    for (var c = 0; c < a.always.length; c++) m.addTag(d, a.always[c]);
                if (a && a.swCache && b("pageLoadedViaSWCache")())
                    for (var c = 0; c < a.swCache.length; c++) m.addTag(d, a.swCache[c])
            },
            init: function(a, b) {
                b != null && a.lid != null && (l[a.lid] = b), m._init(a)
            },
            addTag: function(a, c) {
                m._alreadyUploadedEarly && b("ODS").bumpEntityKey(2966, "PerfXLateTag", c);
                var d = h[a];
                if (d) {
                    d.tags.add(c);
                    return
                }
                i[a] || (i[a] = []);
                i[a].push(c)
            },
            addTagWithNavigationMetricsLID: function(a) {
                m._alreadyUploadedEarly && b("ODS").bumpEntityKey(2966, "PerfXLateTag", a);
                var c = b("NavigationMetrics").getFullPageLoadLid();
                if (!c) return;
                m.addTag(c, a)
            },
            _registerTimeoutSendback: function(a) {
                var c = m._getFetchStart(a),
                    d = j;
                c != null && (d -= (g || (g = b("performanceAbsoluteNow")))() - c);
                b("setTimeoutAcrossTransitions")(function() {
                    return m._uploadPayload(a, "sendback time out")
                }, d)
            },
            _subscribeToNavigationMetrics: function() {
                var a;
                (a = b("NavigationMetrics")).addRetroactiveListener(a.Events.EVENT_OCCURRED, function(a, b) {
                    if (!(a in h)) return;
                    k.includes(b.event) && Object.prototype.hasOwnProperty.call(b, "timestamp") && b.timestamp != null && (h[a][b.event] = b.timestamp);
                    b.event === "all_pagelets_displayed" && m._uploadEarly && (k.forEach(function(c) {
                        Object.prototype.hasOwnProperty.call(b, c) && b[c] != null && (h[a][c] = b[c])
                    }), m._uploadPayload(a), m._alreadyUploadedEarly = !0)
                });
                a.addRetroactiveListener(a.Events.NAVIGATION_DONE, function(a, b) {
                    var c = b.serverLID;
                    if (!(c in h)) return;
                    k.forEach(function(a) {
                        Object.prototype.hasOwnProperty.call(b, a) && b[a] != null && (h[c][a] = b[a])
                    });
                    m._uploadPayload(c)
                })
            },
            _getPayloadWithOffset: function(a, c, d) {
                a = h[a];
                if (a == null) return null;
                var e = Object.assign({}, a),
                    f = document.querySelector('[id^="hyperfeed_story_id"]');
                if (f) {
                    f = JSON.parse(b("DataAttributeUtils").getDataFt(f));
                    f && (e.mf_query_id = f.qid)
                }
                e.tags = Array.from(a.tags);
                m._adjustValues(e, c);
                e.fetch_start = c;
                if (e.perfx_page_type === "normal") {
                    f = b("NavigationTimingHelper").getNavTimings();
                    f != null && f.navigationStart != null && (e.nav_to_fetch = c - f.navigationStart);
                    a = b("QuicklingRefreshOverheadUtil").getOverhead(c);
                    a !== null && (e.quickling_refresh_overhead = a)
                }
                d != null && (e.sendback_reason = d);
                b("PerfXSharedFields").addCommonValues(e);
                b("VisibilityListener").supported() && e.fetch_start && e.all_pagelets_displayed && e.tti && e.e2e && (e.tab_hidden_time_dd = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.all_pagelets_displayed), e.tab_hidden_time_tti = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.tti), e.tab_hidden_time_e2e = b("VisibilityListener").getHiddenTime(e.fetch_start, e.fetch_start + e.e2e));
                window && window.location && window.location.pathname && (e.request_uri = window.location.pathname);
                delete e.sent;
                return e
            },
            _uploadPayload: function(a, c) {
                if (h[a] != null && !h[a].sent) {
                    c = m.getPayload(a, c);
                    c != null && (b("PerfXFlusher").flush(c), h[a].sent = !0)
                }
            },
            getPayload: function(a, b) {
                return m._getPayloadWithOffset(a, m._getFetchStart(a), b)
            },
            _getFetchStart: function(a) {
                if (!(a in h)) return null;
                var c = h[a].perfx_page_type;
                if (c == "quickling")
                    if (!(a in l)) return null;
                    else c = b("NavigationTimingHelper").getAsyncRequestTimings(l[a]);
                else c = b("NavigationTimingHelper").getNavTimings();
                return !c || !c.fetchStart ? null : c.fetchStart
            },
            _adjustValues: function(a, b) {
                k.forEach(function(c) {
                    Object.prototype.hasOwnProperty.call(a, c) && (a[c] -= b)
                })
            }
        };
    e.exports = m
}), null);
__d("ServiceWorkerURLCleaner", [], (function(a, b, c, d, e, f) {
    var g = /sw_fnr_id=\d+&?/,
        h = /fnr_t=\d+&?/,
        i = !1,
        j = !1;

    function a() {
        if (i) return j;
        i = !0;
        if (location.search && g.test(location.search)) {
            j = !0;
            if (history !== void 0 && typeof history.replaceState === "function") {
                var a = location.toString().replace(g, "").replace(h, "").replace(/\?$/, "");
                history.replaceState({}, document.title, a)
            }
        }
        return j
    }
    f.removeRedirectID = a
}), 66);
__d("TimeSpentImmediateActiveSecondsLoggerBlue", ["ImmediateActiveSecondsConfig", "ScriptPath", "WebImmediateActiveSecondsFalcoEvent"], (function(a, b, c, d, e, f, g) {
    var h = 0;

    function i(a) {
        if (c("ImmediateActiveSecondsConfig").sampling_rate <= 0) return !1;
        a = Math.floor(a / 1e3) % c("ImmediateActiveSecondsConfig").sampling_rate;
        return a === c("ImmediateActiveSecondsConfig").ias_bucket
    }

    function a(a) {
        if (a >= h && a - h < 1e3) return;
        i(a) && c("WebImmediateActiveSecondsFalcoEvent").logImmediately(function() {
            return {
                activity_time_ms: a,
                last_activity_time_ms: h,
                script_path: c("ScriptPath").getTopViewEndpoint()
            }
        });
        h = Math.floor(a / 1e3) * 1e3
    }
    f.exports = {
        maybeReportActiveSecond: a
    }
}), 34);