if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("throttle", ["TimeSlice", "TimeSliceInteractionSV", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return h(a, b, d, c("setTimeout"), !1)
    }
    Object.assign(a, {
        acrossTransitions: function(a, b, d) {
            return h(a, b, d, c("setTimeoutAcrossTransitions"), !1)
        },
        withBlocking: function(a, b, d) {
            return h(a, b, d, c("setTimeout"), !0)
        },
        acrossTransitionsWithBlocking: function(a, b, d) {
            return h(a, b, d, c("setTimeoutAcrossTransitions"), !0)
        }
    });

    function h(a, b, d, e, f) {
        var g = b == null ? 100 : b,
            h, i = null,
            j = 0,
            k = null,
            l = [],
            m = c("TimeSlice").guard(function() {
                j = Date.now();
                if (i) {
                    var b = function(b) {
                            a.apply(h, b)
                        }.bind(null, i),
                        c = l.length;
                    while (--c >= 0) b = l[c].bind(null, b);
                    l = [];
                    b();
                    i = null;
                    k = e(m, g)
                } else k = null
            }, "throttle_" + g + "_ms", {
                propagationType: c("TimeSlice").PropagationType.EXECUTION,
                registerCallStack: !0
            });
        m.__SMmeta = a.__SMmeta;
        return function() {
            c("TimeSliceInteractionSV").ref_counting_fix && l.push(c("TimeSlice").getGuardedContinuation("throttleWithContinuation"));
            for (var a = arguments.length, b = new Array(a), n = 0; n < a; n++) b[n] = arguments[n];
            i = b;
            h = this;
            d !== void 0 && (h = d);
            (k === null || Date.now() - j > g) && (f === !0 ? m() : k = e(m, 0))
        }
    }
    b = a;
    g["default"] = b
}), 98);
__d("React", ["cr:1108857", "cr:1294158", "gkx"], (function(a, b, c, d, e, f) {
    var g = b("cr:1294158").useSyncExternalStore;

    function a(a, b, c) {
        return g(b, c)
    }
    b("gkx")("4166") && (b("cr:1294158").useMutableSource = a, b("cr:1294158").unstable_useMutableSource = a);
    e.exports = b("cr:1294158")
}), null);
/**
 * License: https://www.facebook.com/legal/license/V9vdYColc4k/
 */
__d("react-0.0.0", ["React"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a && typeof a === "object" && "default" in a ? a["default"] : a
    }
    var g = a(b("React"));
    d = {};
    var h = {
        exports: d
    };

    function i() {
        h.exports = g
    }
    var j = !1;

    function k() {
        j || (j = !0, i());
        return h.exports
    }

    function c(a) {
        switch (a) {
            case void 0:
                return k()
        }
    }
    e.exports = c
}), null);
__d("react", ["react-0.0.0"], (function(a, b, c, d, e, f) {
    e.exports = b("react-0.0.0")()
}), null);
__d("ReactDOMLegacy_DEPRECATED", ["cr:1108857", "cr:1294246"], (function(a, b, c, d, e, f, g) {
    g.createPortal = b("cr:1294246").createPortal, g.findDOMNode = b("cr:1294246").findDOMNode, g.flushSync = b("cr:1294246").flushSync, g.hydrate = b("cr:1294246").hydrate, g.render = b("cr:1294246").render, g.unmountComponentAtNode = b("cr:1294246").unmountComponentAtNode, g.unstable_batchedUpdates = b("cr:1294246").unstable_batchedUpdates, g.unstable_renderSubtreeIntoContainer = b("cr:1294246").unstable_renderSubtreeIntoContainer, g.version = b("cr:1294246").version, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b("cr:1294246").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
}), 98);
__d("ReactDOM", ["ReactDOMLegacy_DEPRECATED"], (function(a, b, c, d, e, f) {
    Object.keys(importNamespace("ReactDOMLegacy_DEPRECATED")).forEach(function(a) {
        if (a === "default" || a === "__esModule") return;
        f[a] = importNamespace("ReactDOMLegacy_DEPRECATED")[a]
    })
}), null);
__d("warning", ["WebDriverConfig", "cr:1105154", "cr:11202", "cr:2682"], (function(a, b, c, d, e, f, g) {
    a = b("cr:2682");
    c = a;
    g["default"] = c
}), 98);
__d("PerfFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1744178");
    c = b("FalcoLoggerInternal").create("perf", a);
    e.exports = c
}), null);
__d("QPLEvent", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.i
    }

    function b(a) {
        return (a = a.r) != null ? a : 0
    }

    function c(a) {
        return (a = a.m) != null ? a : 1
    }
    f.getMarkerId = a;
    f.getSampleRate = b;
    f.getSamplingMethod = c
}), 66);
__d("QPLTimestamp", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        if (a === 0) return "0";
        a = a.toFixed(6).split(".", 2);
        var b = a[0];
        a = a[1];
        return b === "0" ? a.replace(/^0+/, "") : b + a
    }

    function a(a, b) {
        b = b - a;
        return g(b)
    }
    f.timestampToSerializedNanoseconds = g;
    f.calculateDurationAsNanoseconds = a
}), 66);
__d("crc32", [], (function(a, b, c, d, e, f) {
    function b(a) {
        var b = -1;
        for (var c = 0, d = a.length; c < d; c++) b = b >>> 8 ^ g[(b ^ a.charCodeAt(c)) & 255];
        return ~b
    }
    var g = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117];
    a.Int32Array !== void 0 && (g = new Int32Array(g));
    f["default"] = b
}), 66);
__d("QPLUtils", ["crc32"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        return c("crc32")(a) >>> 0
    }

    function a(a) {
        return a != null ? h(a) : 0
    }
    g.unsignedCrc32 = h;
    g.deriveInstanceKey = a
}), 98);
__d("QuickPerformanceLoggerTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 1;
    b = 3;
    f.EVENT_BASED_SAMPLING = a;
    f.USER_BASED_SAMPLING = b
}), 66);
__d("QPLCore", ["QPLEvent", "QPLTimestamp", "QPLUtils", "QuickPerformanceLoggerTypes", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, c, d) {
        var e = b[a];
        if (!e || Object.entries(e).length === 0) return null;
        var f = {};
        Object.keys(e).forEach(function(a) {
            var b = e[a];
            b === null || b === void 0 || b.length === 0 ? delete e[a] : d ? f[a] = d(b) : f[a] = b
        });
        return b = {}, b[a] = Object.assign({}, c && c[a], f), b
    }

    function i(a, b) {
        if (a == null) return b;
        var c = Object.assign({}, b, h("string", a, b), h("int", a, b, Math.trunc), h("double", a, b), h("bool", a, b), h("string_array", a, b), h("int_array", a, b, function(a) {
            return a.map(Math.trunc)
        }), h("double_array", a, b), h("bool_array", a, b));
        Object.keys(c).forEach(function(a) {
            var b = c[a];
            (b === null || b === void 0 || Object.entries(b).length === 0) && delete c[a]
        });
        return Object.entries(c).length !== 0 ? c : null
    }

    function j(a, b) {
        var c = {};
        b.trackedForLoss === !0 && (c.tracked_for_loss = !0);
        typeof b.absoluteTimeOrigin === "number" && (c.absolute_time_origin_ns = d("QPLTimestamp").timestampToSerializedNanoseconds(b.absoluteTimeOrigin));
        b = babelHelpers["extends"]({}, a, c);
        return b
    }

    function k(a, b) {
        if (!b) return a;
        var c = {};
        b.string && (c.annotations = b.string);
        b["int"] && (c.annotations_int = b["int"]);
        b["double"] && (c.annotations_double = b["double"]);
        b.bool && (c.annotations_bool = b.bool);
        b.string_array && (c.annotations_string_array = b.string_array);
        b.int_array && (c.annotations_int_array = b.int_array);
        b.double_array && (c.annotations_double_array = b.double_array);
        b.bool_array && (c.annotations_bool_array = b.bool_array);
        return babelHelpers["extends"]({}, a, c)
    }
    var l = new Map([
        [d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING, "random_sampling"],
        [d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING, "per_user"]
    ]);

    function m(a, b) {
        if (a === 0) return !1;
        if (a <= 1) return !0;
        return typeof b === "string" ? d("QPLUtils").unsignedCrc32(b) % a === 0 : Math.random() * a <= 1
    }
    a = function() {
        function a(a) {
            this.$2 = 1;
            this.$3 = 100;
            this.$4 = new Map();
            this.$5 = new Map();
            this.$6 = null;
            this.$8 = new Map();
            this.activeMarkers = new Map();
            this.$1 = a;
            this.$7 = a.logger;
            this.$5 = (a = a.listenersWithMarker) != null ? a : new Map()
        }
        var b = a.prototype;
        b.getMarker = function(a, b) {
            a = this.$9(d("QPLEvent").getMarkerId(a));
            if (!a) return null;
            a = a.get(b);
            return !a ? null : a
        };
        b.$9 = function(a) {
            return this.activeMarkers.get(a)
        };
        b.addMarker = function(a, b, c) {
            var d = this.activeMarkers.get(a);
            d || (d = new Map(), this.activeMarkers.set(a, d));
            d.set(b, c)
        };
        b.deleteMarker = function(a, b) {
            (a = this.activeMarkers.get(a)) == null ? void 0 : a["delete"](b)
        };
        b.markerStart = function(a, b, c, e) {
            b === void 0 && (b = 0);
            c === void 0 && (c = this.currentTimestamp());
            e = e === void 0 ? {} : e;
            var f = e.cancelExisting;
            f = f === void 0 ? !1 : f;
            var g = e.cancelOnUnload;
            g = g === void 0 ? !1 : g;
            var h = e.trackedForLoss;
            h = h === void 0 ? !1 : h;
            var i = e.type;
            i = i === void 0 ? 1 : i;
            var j = e.samplingBasis;
            j = j === void 0 ? null : j;
            e = e.qplInternalDoNotUseAbsoluteTimeOrigin;
            var k = this.getMarker(a, b);
            if (k) {
                k = Math.round(c - k.timestamp);
                this.$7.warn("Duplicate QPL event: " + d("QPLEvent").getMarkerId(a) + " & instanceKey: " + b + " & ms between flows starting: " + k);
                f && (this.$7.warn("Cancelling duplicate QPL markerId: " + d("QPLEvent").getMarkerId(a) + " & instanceKey: " + b + " & ms between flows starting: " + k), this.markerAnnotate(a, {
                    string: {
                        cancel_type: "DUPLICATE_EVENT"
                    },
                    "int": {
                        time_between_flows_ms: k
                    }
                }, {
                    instanceKey: b
                }), this.markerEnd(a, 4, b, c))
            }
            f = this.$10(a, j);
            k = f[0];
            j = f[1];
            f = f[2];
            var l = {
                event: a,
                passesSampling: k,
                timestamp: c,
                sampleRate: j,
                samplingMethod: f,
                points: [],
                cancelOnUnload: g,
                trackedForLoss: h,
                type: i
            };
            typeof e === "number" && (l.absoluteTimeOrigin = e);
            this.$4.forEach(function(d) {
                d.onMarkerStart && d.onMarkerStart(a, b, c)
            });
            this.$5.forEach(function(d) {
                d.onMarkerStartWithMarker(a, b, c, l)
            });
            k && this.addMarker(d("QPLEvent").getMarkerId(a), b, l);
            k && h === !0 && this.$11({
                marker_id: 27787271,
                action_id: 0,
                sample_rate: 1,
                annotations_int: {
                    tracked_marker_id: d("QPLEvent").getMarkerId(a)
                },
                marker_type: 1
            });
            k && this.$4.forEach(function(d) {
                d.onMarkerStarted && d.onMarkerStarted(a, b, c)
            })
        };
        b.markerAnnotate = function(a, b, c) {
            c = c === void 0 ? {} : c;
            c = c.instanceKey;
            var d = c === void 0 ? 0 : c;
            this.$4.forEach(function(c) {
                Object.keys(b).forEach(function(e) {
                    var f = b[e];
                    if (!f) return;
                    Object.keys(f).forEach(function(b) {
                        c.onAnnotation && c.onAnnotation(a, d, b, f[b])
                    })
                })
            });
            c = this.getMarker(a, d);
            if (!c) return;
            c.annotations = i(b, c.annotations)
        };
        b.markerPoint = function(a, b, c) {
            c = c === void 0 ? {} : c;
            var d = c.instanceKey,
                e = d === void 0 ? 0 : d,
                f = c.data;
            d = c.timestamp;
            var g = d === void 0 ? this.currentTimestamp() : d;
            this.$4.forEach(function(c) {
                if (c.onMarkerPoint) {
                    c.onMarkerPoint(a, e, b, f == null ? void 0 : (c = f.string) == null ? void 0 : c.__key, g)
                }
            });
            c = this.getMarker(a, e);
            if (!c) return;
            d = {
                name: b,
                timeSinceStart: Math.trunc(g - c.timestamp)
            };
            var h = i(f);
            h && (d.data = h);
            c.points.push(d)
        };
        b.markerEnd = function(a, b, c, e) {
            c === void 0 && (c = 0);
            e === void 0 && (e = this.currentTimestamp());
            var f = this.getMarker(a, c),
                g = f ? e - f.timestamp : 0;
            this.$4.forEach(function(d) {
                var f = {
                    durationMs: g
                };
                d.onMarkerEnd && d.onMarkerEnd(b, a, c, e, f)
            });
            if (!f) return;
            if (f.passesSampling) {
                if (f.timestampIsApproximate !== !0) {
                    var h = {
                        marker_id: d("QPLEvent").getMarkerId(a),
                        action_id: b,
                        instance_id: c,
                        sample_rate: f.sampleRate,
                        method: l.get(f.samplingMethod),
                        duration_ns: d("QPLTimestamp").calculateDurationAsNanoseconds(f.timestamp, e),
                        points: f.points,
                        metadata: {
                            application_analytics: {
                                time_since_qpl_module_init: e - this.$1.moduleLoadTimestamp
                            }
                        },
                        marker_type: f.type,
                        flags: 1,
                        unique_marker_id_debug_only: f.uniqueMarkerDebugId
                    };
                    h = k(h, f.annotations);
                    h = j(h, f);
                    this.$11(h)
                }
                this.$6 === d("QPLEvent").getMarkerId(a) && this.$1.onDebuggingIdEnded && this.$1.onDebuggingIdEnded()
            }
            this.deleteMarker(d("QPLEvent").getMarkerId(a), c)
        };
        b.markerDrop = function(a, b) {
            b === void 0 && (b = 0);
            this.deleteMarker(d("QPLEvent").getMarkerId(a), b);
            var c = this.currentTimestamp();
            this.$4.forEach(function(d) {
                d.onMarkerDrop && d.onMarkerDrop(a, b, c)
            })
        };
        b.markEvent = function(a, b, c, e) {
            var f;
            e = e === void 0 ? {} : e;
            var g = e.timestamp;
            g = g === void 0 ? this.currentTimestamp() : g;
            e = e.annotations;
            if ((f = this.$1.quickLogConfigHelper) == null ? void 0 : f.isKillswitchOn()) return;
            f = this.$10(a);
            var h = f[0],
                j = f[1];
            f = f[2];
            if (!h) return;
            h = i(typeof e === "function" ? e() : e);
            e = {
                marker_id: d("QPLEvent").getMarkerId(a),
                action_id: 0,
                instance_id: 0,
                sample_rate: j,
                method: l.get(f),
                da_type: b,
                da_level: c,
                metadata: {
                    application_analytics: {
                        time_since_qpl_module_init: g - this.$1.moduleLoadTimestamp
                    }
                },
                marker_type: 1,
                flags: 1
            };
            this.$11(k(e, h))
        };
        b.dropAllMarkers = function() {
            this.activeMarkers.clear()
        };
        b.setAlwaysOnSampleRate = function(a, b) {
            this.$8.set(a, b)
        };
        b.setDefaultSampleRate = function(a) {
            this.$3 = a
        };
        b.currentTimestamp = function() {
            return this.$1.performanceNow()
        };
        b.enableDebug = function(a) {
            this.$6 = a
        };
        b.disableDebug = function() {
            this.$6 = null
        };
        b.addListener = function(a) {
            var b = this,
                c = this.$2++;
            this.$4.set(c, a);
            return {
                dispose: function() {
                    b.$4["delete"](c)
                }
            }
        };
        b.$10 = function(a, b) {
            if (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents() || this.$6 === d("QPLEvent").getMarkerId(a)) return [!0, 1, d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING];
            var c = d("QPLEvent").getSampleRate(a),
                e = d("QPLEvent").getSamplingMethod(a);
            if (this.$8.get(a) == null && c !== 0 && e === d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING) {
                var f;
                return [!0, (f = c) != null ? f : 1, d("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING]
            }
            f = (a = (f = this.$8.get(a)) != null ? f : c) != null ? a : this.$3;
            a = (c = e) != null ? c : d("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;
            e = m(f, b);
            return [e, f, a]
        };
        b.$11 = function(a) {
            var b = this.$1.decorateEventBeforeUpload ? this.$1.decorateEventBeforeUpload(a) : a;
            this.$1.sendEvent(a, b)
        };
        b.getActiveMarkerIds = function(a) {
            var b = a.type,
                c = new Set();
            this.activeMarkers.forEach(function(a, d) {
                a.forEach(function(a) {
                    if (a.type === b) {
                        c.add(d);
                        return
                    }
                })
            });
            return Array.from(c)
        };
        b.forEachMarkerInstance = function(a, b) {
            a = this.$9(a);
            if (!a) return;
            for (var a = a.entries(), c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                b(f, e.event)
            }
        };
        b.markerLogDebugPoints = function(a, b) {
            b = b === void 0 ? {} : b;
            b = b.instanceKey;
            b = b === void 0 ? 0 : b;
            var e = d("QPLEvent").getMarkerId(a);
            a = this.getMarker(a, b);
            if (!a) return;
            var f = c("uuid")();
            this.$7.debug("markerLogDebugPoints", "Set unique marker to log debug points, ID: " + f + " " + ("for marker " + e + ", instanceKey=" + b.toString()));
            a.uniqueMarkerDebugId = f
        };
        return a
    }();
    a.normalizeAnnotations = i;
    g["default"] = a
}), 98);
__d("DateConsts", [], (function(a, b, c, d, e, f) {
    var g = 1e3;
    c = 60;
    d = 60;
    e = 24;
    var h = 7,
        i = 12,
        j = 1e3,
        k = 30.43,
        l = 4.333,
        m = 365.242,
        n = c * d,
        o = n * e,
        p = o * h,
        q = o * m,
        r = g * c,
        s = r * d,
        t = g * o,
        u = t * h,
        v = t * m,
        w = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
    Object.freeze(w);

    function a(a, b) {
        return new Date(a, b, 0).getDate()
    }

    function b() {
        return Date.now() / g
    }
    var x = {
        instantRange: {
            since: -864e10,
            until: 864e10 + 1
        }
    };
    f.MS_PER_SEC = g;
    f.SEC_PER_MIN = c;
    f.MIN_PER_HOUR = d;
    f.HOUR_PER_DAY = e;
    f.DAYS_PER_WEEK = h;
    f.MONTHS_PER_YEAR = i;
    f.US_PER_MS = j;
    f.AVG_DAYS_PER_MONTH = k;
    f.AVG_WEEKS_PER_MONTH = l;
    f.AVG_DAYS_PER_YEAR = m;
    f.SEC_PER_HOUR = n;
    f.SEC_PER_DAY = o;
    f.SEC_PER_WEEK = p;
    f.SEC_PER_YEAR = q;
    f.MS_PER_MIN = r;
    f.MS_PER_HOUR = s;
    f.MS_PER_DAY = t;
    f.MS_PER_WEEK = u;
    f.MS_PER_YEAR = v;
    f.DAYS = w;
    f.getDaysInMonth = a;
    f.getCurrentTimeInSeconds = b;
    f["private"] = x
}), 66);
__d("USIDFlag", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        HTTP_HEADER_SESSION: "HH",
        LOCAL_STORAGE_FAILURE: "LSF",
        SERVER_GENERATED_SESSION: "SGS",
        SERVER_PARSE_FAILURE: "SPF",
        SESSION_STORAGE_FAILURE: "SSF",
        UNKNOWN_VERSION_FAILURE: "UVF",
        UNKOWN_DATA_FAILURE: "UDF"
    });
    c = a;
    f["default"] = c
}), 66);
__d("USIDUtils", ["Cookie", "Random", "WebStorage"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 4294967295,
        i = 36,
        j = "usidt",
        k = "usida",
        l = 1,
        m = 6;

    function a() {
        var a = [];
        c("WebStorage").isLocalStorageQuotaExceeded() && a.push("LSF");
        c("WebStorage").isSessionStorageQuotaExceeded() && a.push("SSF");
        return a
    }

    function n(a) {
        var b = Math.floor(Date.now() / 1e3),
            c = Math.floor(d("Random").random() * h);
        a = a + Number(b & h).toString(i) + c.toString(i);
        return a
    }

    function o(a, b, c) {
        if (a == null) return {
            ver: l,
            id: n(c)
        };
        a = a.getItem(b);
        if (a == null) return {
            ver: l,
            id: n(c)
        };
        b = JSON.parse(a);
        return b.ver !== l ? {
            ver: l,
            id: n(c)
        } : b
    }

    function p(a, b, d) {
        if (a == null) return;
        c("WebStorage").setItemGuarded(a, b, JSON.stringify(d))
    }

    function q(a, b) {
        if (c("Cookie") == null) return {
            ver: l,
            id: n(b)
        };
        a = c("Cookie").get(a);
        if (a == null || a == "") return {
            ver: l,
            id: n(b)
        };
        var d;
        try {
            d = JSON.parse(a)
        } catch (b) {
            d = JSON.parse(atob(a))
        }
        return d.ver !== l ? {
            ver: l,
            id: n(b)
        } : d
    }

    function r(a, b) {
        if (c("Cookie") == null) return;
        c("Cookie").set(a, btoa(JSON.stringify(b)))
    }

    function b() {
        var a = o(c("WebStorage").getSessionStorageForRead(), j, "T");
        return a.id
    }

    function e(a) {
        p(c("WebStorage").getSessionStorage(), j, {
            ver: l,
            id: a
        })
    }

    function s() {
        var a, b = q(k, "A");
        return {
            id: b.id,
            time: (a = b.time) != null ? a : 0,
            startTime: (a = b.startTime) != null ? a : 0
        }
    }

    function f(a) {
        r(k, {
            ver: l,
            id: a.id,
            time: a.time
        });
        var b = s();
        return b.id === a.id && b.time === a.time
    }
    g.VERSION = m;
    g.getFlags = a;
    g.generateId = n;
    g.getExistingTabId = b;
    g.writeTabId = e;
    g.getExistingActivityInfo = s;
    g.writeActivityInfo = f
}), 98);
__d("USIDCore", ["DateConsts", "USIDUtils", "asyncParams"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 30,
        i = d("DateConsts").MIN_PER_HOUR * 5,
        j = 2,
        k = "__usid";

    function l() {
        return Math.floor(Date.now() / d("DateConsts").MS_PER_SEC)
    }
    a = function() {
        function a(a, b, c, e, f, g) {
            this.$1 = a;
            this.$2 = b;
            this.$3 = c;
            this.$8 = e;
            this.$9 = f;
            this.$4 = g.activityTrigger;
            this.$5 = ((b = g.activityTimeoutInMin) != null ? b : h) * 60;
            this.$6 = ((c = g.activityMaxTimeInMin) != null ? c : i) * 60;
            this.$7 = ((e = g.activityCacheTimeoutInMin) != null ? e : j) * 60;
            this.$10 = 0;
            d("USIDUtils").writeTabId(a);
            this.triggerActivity()
        }
        var b = a.prototype;
        b.getFlags = function() {
            return this.$9
        };
        b.getRequestVersion = function() {
            return this.$8
        };
        b.getSessionVersion = function() {
            return d("USIDUtils").VERSION
        };
        b.getTabId = function() {
            return this.$1
        };
        b.getPageId = function() {
            return this.$2
        };
        b.getTransitionId = function() {
            return this.$3
        };
        b.getActivityId = function() {
            var a = this.$11();
            return a.id
        };
        b.getActivityTimeOut = function() {
            var a = d("USIDUtils").getExistingActivityInfo(),
                b = l();
            return this.$5 - (b - a.time)
        };
        b.getActivityMaxTime = function() {
            var a = d("USIDUtils").getExistingActivityInfo(),
                b = l();
            return this.$6 - (b - a.startTime)
        };
        b.getSessionID = function() {
            return this.getTabId() + ":" + this.getPageId() + ":" + this.getTransitionId() + "-" + this.getActivityId()
        };
        b.serializeForRequest = function() {
            this.$4 === "request" && this.triggerActivity();
            return this.$12()
        };
        b.$12 = function() {
            var a = this.getSessionVersion(),
                b = this.getSessionID(),
                c = this.getRequestVersion(),
                d = this.getFlags().join(",");
            return a + "-" + b + "-RV=" + c + ":F=" + d
        };
        b.contextData = function() {
            return {
                usid_override: this.serializeForRequest()
            }
        };
        b.$11 = function() {
            var a = d("USIDUtils").getExistingActivityInfo(),
                b = this.$13(a);
            b && this.$14(a);
            return a
        };
        b.$14 = function(a) {
            a = d("USIDUtils").writeActivityInfo(a);
            a && d("asyncParams").add(k, this.$12())
        };
        b.$13 = function(a) {
            var b = l();
            if (b - a.time > this.$5) {
                a.id = d("USIDUtils").generateId("A");
                a.time = b;
                a.startTime = b;
                return !0
            }
            return !1
        };
        b.triggerActivity = function() {
            var a = l();
            if (a - this.$10 > this.$7) {
                var b = this.$11();
                b.time = a;
                this.$14(b);
                this.$10 = a
            }
        };
        b.nextTransition = function() {
            this.triggerActivity(), this.$3++
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("USID", ["USIDCore", "USIDMetadata", "USIDUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = function(a) {
            if (h != null) return h;
            var b = d("USIDUtils").getExistingTabId(),
                e = c("USIDMetadata").page_id,
                f = c("USIDMetadata").transition_id,
                g = c("USIDMetadata").version,
                i = d("USIDUtils").getFlags();
            h = new(c("USIDCore"))(b, e, f, g, i, a);
            return h
        };
    a = function() {
        return i({
            activityTrigger: "request"
        })
    };
    b = {
        init: i,
        get: a
    };
    g["default"] = b
}), 98);
__d("QuickPerformanceLogger", ["Arbiter", "Bootloader", "Env", "FBLogger", "PerfFalcoEvent", "PerfXSharedFields", "Promise", "QPLCore", "QPLEvent", "Run", "USID", "WebStorage", "cr:1984081", "cr:686", "gkx", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j, k = b("QPLEvent").getMarkerId;

    function l(a) {
        var c = b("PerfXSharedFields").getCommonData();
        c = {
            memory_stats: {
                total_mem: c.ram_gb != null ? c.ram_gb * 1073741824 : null
            },
            network_stats: {
                downlink_megabits: c.downlink_megabits,
                network_subtype: c.effective_connection_type,
                rtt_ms: c.rtt_ms
            },
            sitedata_info: {
                client_push_phase: c.client_push_phase,
                client_revision: c.client_revision,
                server_revision: c.server_revision
            },
            locale_info: {
                locale: c.locale,
                isRTL: c.isRTL
            }
        };
        b("gkx")("1224637") && (c.workplace_info = {
            is_gemini: b("gkx")("1217157")
        });
        if (b("gkx")("3752") && typeof window.__sapienzMetadataCallback__ === "function") {
            var d = window.__sapienzMetadataCallback__();
            c.sapienz = {
                request_id: String(d.requestId),
                config_name: String(d.configName)
            }
        }
        b("gkx")("4075") && (c.usid = {
            usid_override: b("USID").get().serializeForRequest()
        });
        return babelHelpers["extends"]({}, a, {
            metadata: babelHelpers["extends"]({}, a.metadata, c)
        })
    }

    function m(a, b, c) {
        return {
            i: a,
            m: c,
            r: b
        }
    }

    function n(a, c) {
        return new(b("Promise"))(function() {
            var d = c || a;
            typeof window.__je2e_recordQPLMarker === "function" && window.__je2e_recordQPLMarker(d);
            (g || (g = b("Env"))).enable_qplinspector === !0 && b("Bootloader").loadModules(["QPLInspector"], function(a) {
                a.appendLog(d)
            }, "QuickPerformanceLogger");
            b("gkx")("1554827") || b("gkx")("708253") || b("gkx")("3831") ? b("PerfFalcoEvent").logImmediately(function() {
                return d
            }) : b("gkx")("2772") ? b("PerfFalcoEvent").logCritical(function() {
                return d
            }) : b("PerfFalcoEvent").log(function() {
                return d
            })
        })
    }

    function o() {
        return (g || (g = b("Env"))).enable_qplinspector === !0 || typeof window.__je2e_recordQPLMarker === "function" || b("gkx")("1738486")
    }

    function p() {
        b("Arbiter").inform("qpl_debugger_finished")
    }
    var q = (h || (h = b("performanceAbsoluteNow")))();
    typeof window.__je2e_felabsTracePlugin_setQplInit === "function" && window.__je2e_felabsTracePlugin_setQplInit((i || (i = b("performanceNow")))());
    var r = {
            debug: function(a, b, c) {},
            warn: function(a) {
                b("FBLogger")("qpl").blameToPreviousDirectory().warn(a)
            }
        },
        s = "qpl";
    a = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c;
            c = a.call(this, {
                decorateEventBeforeUpload: l,
                unsampleAllEvents: o,
                onDebuggingIdEnded: p,
                performanceNow: h || (h = b("performanceAbsoluteNow")),
                moduleLoadTimestamp: q,
                logger: r,
                sendEvent: n
            }) || this;
            var d = b("gkx")("2772") ? b("Run").onBeforeUnload : b("Run").onUnload;
            d(function() {
                c.$QuickPerformanceLogger1(), c.$QuickPerformanceLogger2(706, {
                    respectUnloadPolicy: !0,
                    timestamp: c.currentTimestamp()
                })
            });
            c.$QuickPerformanceLogger3();
            c.initQplFlipperPlugin();
            c.initQplSapienzPlugin();
            return c
        }
        var d = c.prototype;
        d.$QuickPerformanceLogger3 = function() {
            var a = this,
                c = (j || (j = b("WebStorage"))).getSessionStorageForRead();
            if (!c) {
                this.$QuickPerformanceLogger4("_loadSavedState", "sessionStorage is not available");
                return
            }
            var d = c.getItem(s);
            if (d == null) return;
            c.removeItem(s);
            c = JSON.parse(d);
            if (c == null) {
                this.$QuickPerformanceLogger4("_loadSavedState", "Saved state failed to deserialize");
                return
            }
            if (c.markers == null || c.markers.length === 0) {
                this.$QuickPerformanceLogger4("_loadSavedState", "No saved markers found");
                return
            }
            c.markers.forEach(function(b) {
                var c = b[0],
                    d = b[1];
                b = b[2];
                a.addMarker(c, d, b);
                a.$QuickPerformanceLogger4("_loadSavedState", "Marker " + c + " (instanceKey: " + d + ") resumed")
            })
        };
        d.$QuickPerformanceLogger1 = function() {
            var a = this,
                c = [];
            this.activeMarkers.forEach(function(a, b) {
                a.forEach(function(a, d) {
                    a.resumeAfterNavigation === !0 && (delete a.resumeAfterNavigation, c.push([b, d, a]))
                })
            });
            if (c.length > 0) {
                var d = {
                        markers: c
                    },
                    e = (j || (j = b("WebStorage"))).getSessionStorage();
                e = j.setItemGuarded(e, s, JSON.stringify(d));
                e && (c.forEach(function(b) {
                    var c = b[0],
                        d = b[1];
                    b = b[2];
                    c = m(c, b.sampleRate, b.samplingMethod);
                    a.markerEnd(c, 96, d)
                }), this.$QuickPerformanceLogger4("_storeSavedState", "Failed to store saved state: " + e.message), b("FBLogger")("qpl").catching(e).warn("Failed to store QPL state: " + JSON.stringify(d, null, 2)));
                c.forEach(function(b) {
                    var c = b[0];
                    b = b[1];
                    a.deleteMarker(c, b)
                })
            }
        };
        d.markerStoreBeforeNavigation = function(a, b) {
            b = b === void 0 ? {} : b;
            b = b.instanceKey;
            b = b === void 0 ? 0 : b;
            var c = k(a);
            a = this.getMarker(a, b);
            if (!a) {
                this.$QuickPerformanceLogger4("markerStoreBeforeNavigation", "Failed to set marker to store on page unload. Could not find marker " + c + ", instancekey=" + b);
                return
            }
            a.resumeAfterNavigation = !0;
            this.$QuickPerformanceLogger4("markerStoreBeforeNavigation", "Set marker " + c + " to store on page unload, instancekey=" + b)
        };
        d.markerStartFromNavStart = function(a, c, d) {
            c === void 0 && (c = 0);
            d = d === void 0 ? {} : d;
            var e = d.cancelExisting;
            e = e === void 0 ? !1 : e;
            var f = d.cancelOnUnload;
            f = f === void 0 ? !1 : f;
            var g = d.trackedForLoss;
            g = g === void 0 ? !1 : g;
            var h = d.type;
            h = h === void 0 ? 1 : h;
            d = d.qplInternalDoNotUseConvertToTimeOnServer;
            var i = b("performanceNavigationStart")();
            d = typeof d === "function" ? d(i) : void 0;
            this.markerStart(a, c, i, {
                cancelExisting: e,
                cancelOnUnload: f,
                trackedForLoss: g,
                type: h,
                qplInternalDoNotUseAbsoluteTimeOrigin: d
            });
            if (b("performanceNavigationStart").isPolyfilled) {
                i = this.getMarker(a, c);
                i && (i.timestampIsApproximate = !0)
            }
        };
        d.$QuickPerformanceLogger2 = function(a, b) {
            var c = this;
            b = b === void 0 ? {} : b;
            var d = b.timestamp,
                e = b.respectUnloadPolicy;
            this.activeMarkers.forEach(function(b, f) {
                b.forEach(function(b, g) {
                    if (!e || b.cancelOnUnload === !0) {
                        b = m(f, b.sampleRate, b.samplingMethod);
                        c.markerEnd(b, a, g, d)
                    }
                })
            })
        };
        d.$QuickPerformanceLogger4 = function(a, b, c) {
            r.debug(a, b, c)
        };
        d.initQplFlipperPlugin = function() {
            b("cr:686") != null && this.addListener(b("cr:686").qplFlipperPlugin.listener())
        };
        d.initQplSapienzPlugin = function() {
            b("cr:1984081") != null && this.addListener(b("cr:1984081").getQplSapienzListener())
        };
        return c
    }(b("QPLCore"));
    c = new a();
    e.exports = c
}), null);
__d("useLayoutEffect_SAFE_FOR_SSR", ["ExecutionEnvironment", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.useEffect;
    c = a.useLayoutEffect;
    e = d("ExecutionEnvironment").canUseDOM ? c : b;
    f = e;
    g["default"] = f
}), 98);
__d("ReactCurrentOwner", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        current: null
    };
    e.exports = a
}), null);