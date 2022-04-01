if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("UserActivity", ["cr:1634616"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1634616")
}), null);
__d("UserActivityBlue", ["Arbiter", "Event", "isTruthy"], (function(a, b, c, d, e, f) {
    var g = 5e3,
        h = 500,
        i = -5,
        j = Date.now(),
        k = j,
        l = !1,
        m = Date.now(),
        n = document.hasFocus ? document.hasFocus() : !0,
        o = 0,
        p = Date.now(),
        q = -1,
        r = -1,
        s = !1,
        t = !1,
        u = {
            EVENT_INTERVAL_MS: h,
            subscribeOnce: function(a) {
                var b = u.subscribe(function(c, d) {
                    u.unsubscribe(b), a(d)
                });
                return b
            },
            subscribe: function(a) {
                return b("Arbiter").subscribe("useractivity/activity", a)
            },
            unsubscribe: function(a) {
                a.unsubscribe()
            },
            isActive: function(a) {
                return new Date() - j < (b("isTruthy")(a) ? a : g)
            },
            isOnTab: function() {
                return n
            },
            hasBeenInactive: function() {
                return l
            },
            resetActiveStatus: function() {
                n = !0, l = !1
            },
            getLastInActiveEnds: function() {
                return m
            },
            getLastActive: function() {
                return j
            },
            setIdleTime: function(a) {
                o = a
            },
            getLastLeaveTime: function() {
                return p
            },
            getLastInformTime: function() {
                return k
            },
            hasClicked: function() {
                return s
            },
            hasInteractedWithKeyboard: function() {
                return t
            },
            reset: function() {
                j = Date.now(), k = j, l = !1, m = Date.now(), n = document.hasFocus ? document.hasFocus() : !0, o = 0, p = Date.now(), q = -1, r = -1, s = !1, t = !1
            }
        };

    function v(a) {
        x(a, h)
    }

    function w(a) {
        x(a, 0)
    }

    function x(c, d) {
        d === void 0 && (d = 0);
        var e = a.KeyboardEvent,
            f = a.MouseEvent;
        if (f && c instanceof f) {
            if (/^mouse(enter|leave|move|out|over)$/.test(c.type) && c.pageX == q && c.pageY == r) return;
            q = c.pageX;
            r = c.pageY
        } else e && c instanceof e && (t = !0);
        (c.type === "click" || c.type === "dblclick" || c.type === "contextmenu") && (s = !0);
        j = Date.now();
        f = j - k;
        f > d ? (k = j, n || (p = j), f >= (o || g) && (l = !0, m = j), b("Arbiter").inform("useractivity/activity", {
            event: c,
            idleness: f,
            last_inform: k
        })) : f < i && (k = j)
    }

    function c(a) {
        n = !0, m = Date.now(), w(a)
    }

    function d(a) {
        n = !1, l = !0, p = Date.now()
    }
    b("Event").listen(window, "scroll", v);
    b("Event").listen(window, "focus", c);
    b("Event").listen(window, "blur", d);
    b("Event").listen(document.documentElement, {
        keydown: v,
        mouseover: v,
        mousemove: v,
        click: v
    }, void 0, void 0, {
        passive: !0
    });
    b("Arbiter").subscribe("Event/stop", function(a, b) {
        v(b.event)
    });
    e.exports = u
}), null);
__d("TrackingNodeConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = 58;
    b = 126;
    c = 69;
    d = 42;
    e = 47;
    var g = 6,
        h = 100,
        i = "__tn__";
    f.BASE_CODE_START = a;
    f.BASE_CODE_END = b;
    f.BASE_CODE_SIZE = c;
    f.PREFIX_CODE_START = d;
    f.PREFIX_CODE_END = e;
    f.PREFIX_CODE_SIZE = g;
    f.ENCODE_NUMBER_MAX = h;
    f.TN_URL_PARAM = i
}), 66);
__d("encodeTrackingNode", ["TrackingNodeConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var c = (a - 1) % d("TrackingNodeConstants").BASE_CODE_SIZE,
            e = parseInt((a - 1) / d("TrackingNodeConstants").BASE_CODE_SIZE, 10);
        if (a < 1 || e > d("TrackingNodeConstants").PREFIX_CODE_SIZE) throw Error("Invalid tracking node: " + a);
        a = "";
        e > 0 && (a += String.fromCharCode(e - 1 + d("TrackingNodeConstants").PREFIX_CODE_START));
        a += String.fromCharCode(c + d("TrackingNodeConstants").BASE_CODE_START);
        b !== void 0 && b > 0 && (b > 10 && (a += "#"), a += parseInt(Math.min(b, d("TrackingNodeConstants").ENCODE_NUMBER_MAX) - 1, 10));
        return a.replace("\\", "\\\\")
    }
    g["default"] = a
}), 98);