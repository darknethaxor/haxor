if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("setInterval", ["cr:896461"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:896461")
}), 98);
__d("ActorURIConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PARAMETER_ACTOR: "av",
        ENCRYPTED_PARAMETER_ACTOR: "eav"
    })
}), null);
__d("ActorURI", ["ActorURIConfig", "URI"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return new(c("URI"))(a).addQueryData(c("ActorURIConfig").PARAMETER_ACTOR, b)
    }
    g.create = a;
    g.PARAMETER_ACTOR = c("ActorURIConfig").PARAMETER_ACTOR
}), 98);
__d("JSResource", ["JSResourceReference"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function i(a, b) {
        h[a] = b
    }

    function j(a) {
        return h[a]
    }

    function a(a) {
        a = a;
        var b = j(a);
        if (b) return b;
        b = new(c("JSResourceReference"))(a);
        i(a, b);
        return b
    }
    a.Reference = c("JSResourceReference");
    a.loadAll = c("JSResourceReference").loadAll;
    g["default"] = a
}), 98);
__d("setIntervalBlue", ["TimerStorage", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
        var g = c("setIntervalAcrossTransitions").apply(void 0, [a, b].concat(e));
        c("TimerStorage").set(c("TimerStorage").INTERVAL, g);
        return g
    }
    g["default"] = a
}), 98);
__d("JSScheduler", ["SchedulerFb-Internals_DO_NOT_USE", "qex"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
            unstable_Immediate: (c = b("SchedulerFb-Internals_DO_NOT_USE")).unstable_ImmediatePriority,
            unstable_UserBlocking: c.unstable_UserBlockingPriority,
            unstable_Normal: c.unstable_NormalPriority,
            unstable_Low: c.unstable_LowPriority,
            unstable_Idle: c.unstable_IdlePriority
        },
        h = !1,
        i = c.unstable_scheduleCallback,
        j = c.unstable_cancelCallback;
    a.__fbNativeSetTimeout || a.setTimeout;
    a.__fbNativeClearTimeout || a.clearTimeout;
    var k = {
        priorities: g,
        shouldYield: b("SchedulerFb-Internals_DO_NOT_USE").unstable_shouldYield,
        getCurrentPriorityLevel: b("SchedulerFb-Internals_DO_NOT_USE").unstable_getCurrentPriorityLevel,
        runWithPriority: b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,
        runWithPriority_DO_NOT_USE: b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority,
        defer: function(a) {
            var b = k.getCurrentPriorityLevel();
            return i(b, a)
        },
        getCallbackScheduler: function() {
            var a = k.getCurrentPriorityLevel();
            return function(b) {
                return i(a, b)
            }
        },
        getUserBlockingRunAtCurrentPriCallbackScheduler_DO_NOT_USE: function() {
            var a = k.getCurrentPriorityLevel();
            return function(c) {
                return i(g.unstable_UserBlocking, function() {
                    b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(a, c)
                })
            }
        },
        deferUserBlockingRunAtCurrentPri_DO_NOT_USE: function(a) {
            var c = k.getCurrentPriorityLevel();
            return i(g.unstable_UserBlocking, function() {
                b("SchedulerFb-Internals_DO_NOT_USE").unstable_runWithPriority(c, a)
            })
        },
        scheduleImmediatePriCallback: function(a) {
            return i(g.unstable_Immediate, a)
        },
        scheduleUserBlockingPriCallback: function(a) {
            return i(g.unstable_UserBlocking, a)
        },
        scheduleNormalPriCallback: function(a) {
            return i(g.unstable_Normal, a)
        },
        scheduleLoggingPriCallback: function(a) {
            return i(g.unstable_Low, a)
        },
        scheduleSpeculativeCallback: function(a) {
            return i(g.unstable_Idle, a)
        },
        cancelCallback: function(a) {
            j(a)
        },
        scheduleDelayedCallback_DO_NOT_USE: function(a, b, c) {
            a = i(a, c, {
                delay: b
            });
            return a
        },
        cancelDelayedCallback_DO_NOT_USE: function(a) {
            a = a;
            return j(a)
        },
        startEventProfiling: function() {
            var a;
            a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.startLoggingProfilingEvents;
            typeof a == "function" && a()
        },
        stopEventProfiling: function() {
            var a;
            a = (a = b("SchedulerFb-Internals_DO_NOT_USE").unstable_Profiling) == null ? void 0 : a.stopLoggingProfilingEvents;
            return typeof a == "function" ? a() : null
        },
        makeSchedulerGlobalEntry: function(c, d) {
            var e;
            c === void 0 && (c = null);
            d === void 0 && (d = !1);
            c !== null && c !== void 0 && ((e = b("qex")._("661")) != null ? e : !0) && b("SchedulerFb-Internals_DO_NOT_USE").unstable_forceFrameRate(c);
            d && k.startEventProfiling();
            a.ScheduleJSWork = function(a) {
                return function() {
                    for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
                    h ? a.apply(void 0, c) : k.deferUserBlockingRunAtCurrentPri_DO_NOT_USE(function() {
                        h = !0;
                        try {
                            a.apply(void 0, c)
                        } finally {
                            h = !1
                        }
                    })
                }
            }
        }
    };
    e.exports = k
}), null);