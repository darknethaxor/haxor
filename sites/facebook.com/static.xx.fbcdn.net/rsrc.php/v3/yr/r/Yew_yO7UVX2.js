if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("CometEventListener", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d, e) {
        if (a.addEventListener) {
            a.addEventListener(b, d, e);
            return {
                remove: function() {
                    a.removeEventListener(b, d, e)
                }
            }
        } else throw c("unrecoverableViolation")('Attempted to listen to eventType "' + b + '" on a target that does not have addEventListener.', "comet_ui")
    }
    a = {
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !1,
                passive: d
            })
        },
        capture: function(a, b, c) {
            return h(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !0,
                passive: d
            })
        },
        listen: function(a, b, c) {
            return h(a, b, c, !1)
        },
        registerDefault: function(a, b) {
            throw c("unrecoverableViolation")("EventListener.registerDefault is not implemented.", "comet_ui")
        },
        suppress: function(a) {
            a.preventDefault(), a.stopPropagation()
        }
    };
    g["default"] = a
}), 98);
__d("ghlInternalBumpODSKey", ["ODS"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        return d("ODS").bumpEntityKey(2966, "feed_ads", a + "." + b)
    }
    g["default"] = a
}), 98);