if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("DataAttributeUtils", ["DataStore"], (function(a, b, c, d, e, f) {
    var g = [];

    function h(a, b) {
        a = a;
        while (a) {
            if (b(a)) return a;
            a = a.parentNode
        }
        return null
    }

    function i(a, b) {
        a = h(a, function(a) {
            return a instanceof Element && !!a.getAttribute(b)
        });
        return a instanceof Element ? a : null
    }
    var j = {
            LEGACY_CLICK_TRACKING_ATTRIBUTE: "data-ft",
            CLICK_TRACKING_DATASTORE_KEY: "data-ft",
            ENABLE_STORE_CLICK_TRACKING: "data-fte",
            IMPRESSION_TRACKING_CONFIG_ATTRIBUTE: "data-xt-vimp",
            IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY: "data-xt-vimp",
            REMOVE_LEGACY_TRACKING: "data-ftr",
            getDataAttribute: function(a, b) {
                return k[b] ? k[b](a) : a.getAttribute(b)
            },
            setDataAttribute: function(a, b, c) {
                return l[b] ? l[b](a, c) : a.setAttribute(b, c)
            },
            getDataFt: function(a) {
                if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
                    var c = b("DataStore").get(a, j.CLICK_TRACKING_DATASTORE_KEY);
                    c || (c = j.moveClickTrackingToDataStore(a, a.getAttribute(j.REMOVE_LEGACY_TRACKING)));
                    return c
                }
                return a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE)
            },
            setDataFt: function(a, c) {
                if (a.getAttribute(j.ENABLE_STORE_CLICK_TRACKING)) {
                    b("DataStore").set(a, j.CLICK_TRACKING_DATASTORE_KEY, c);
                    return
                }
                a.setAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE, c)
            },
            moveXTVimp: function(a) {
                j.moveAttributeToDataStore(a, j.IMPRESSION_TRACKING_CONFIG_ATTRIBUTE, j.IMPRESSION_TRACKING_CONFIG_DATASTORE_KEY), g.push(a.id)
            },
            getXTrackableElements: function() {
                var a = g.map(function(a) {
                        return document.getElementById(a)
                    }).filter(function(a) {
                        return !!a
                    }),
                    b = document.querySelectorAll("[data-xt-vimp]");
                for (var c = 0; c < b.length; c++) a.push(b[c]);
                return a
            },
            getDataAttributeGeneric: function(a, c, d) {
                d = b("DataStore").get(a, d);
                return d !== void 0 ? d : a.getAttribute(c)
            },
            moveAttributeToDataStore: function(a, c, d) {
                var e = a.getAttribute(c);
                e && (b("DataStore").set(a, d, e), a.removeAttribute(c))
            },
            moveClickTrackingToDataStore: function(a, c) {
                var d = a.getAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE);
                d && (b("DataStore").set(a, j.CLICK_TRACKING_DATASTORE_KEY, d), c && a.removeAttribute(j.LEGACY_CLICK_TRACKING_ATTRIBUTE));
                return d
            },
            getClickTrackingParent: function(a) {
                a = i(a, j.LEGACY_CLICK_TRACKING_ATTRIBUTE) || i(a, j.ENABLE_STORE_CLICK_TRACKING);
                return a
            },
            getClickTrackingElements: function(a) {
                return a.querySelectorAll("[" + j.LEGACY_CLICK_TRACKING_ATTRIBUTE + "], [" + j.ENABLE_STORE_CLICK_TRACKING + "]")
            },
            getParentByAttributeOrDataStoreKey: function(a, c, d) {
                while (a && (!a.getAttribute || !a.getAttribute(c)) && b("DataStore").get(a, d) === void 0) a = a.parentNode;
                return a
            }
        },
        k = {
            "data-ft": j.getDataFt,
            "data-xt-vimp": function(a) {
                return j.getDataAttributeGeneric(a, "data-xt-vimp", "data-xt-vimp")
            },
            "data-ad": function(a) {
                return j.getDataAttributeGeneric(a, "data-ad", "data-ad")
            },
            "data-xt": function(a) {
                return j.getDataAttributeGeneric(a, "data-xt", "data-xt")
            }
        },
        l = {
            "data-ft": j.setDataFt,
            "data-xt": function(a, c) {
                b("DataStore").set(a, "data-xt", c)
            }
        };
    e.exports = j
}), null);
__d("collectDataAttributes", ["DataAttributeUtils", "getContextualParent"], (function(a, b, c, d, e, f) {
    var g = "normal";

    function a(a, c, d) {
        var e = {},
            f = [],
            h = c.length,
            i;
        for (i = 0; i < h; ++i) e[c[i]] = {}, f.push("data-" + c[i]);
        if (d) {
            e[g] = {};
            for (i = 0; i < (d || []).length; ++i) f.push(d[i])
        }
        d = {
            tn: "",
            "tn-debug": ","
        };
        a = a;
        while (a) {
            if (a.getAttribute)
                for (i = 0; i < f.length; ++i) {
                    var j = f[i],
                        k = b("DataAttributeUtils").getDataAttribute(a, j);
                    if (k) {
                        if (i >= h) {
                            e[g][j] === void 0 && (e[g][j] = k);
                            continue
                        }
                        j = JSON.parse(k);
                        for (var k in j) d[k] !== void 0 ? (e[c[i]][k] === void 0 && (e[c[i]][k] = []), e[c[i]][k].push(j[k])) : e[c[i]][k] === void 0 && (e[c[i]][k] = j[k])
                    }
                }
            a = b("getContextualParent")(a)
        }
        for (var k in e)
            for (var j in d) e[k][j] !== void 0 && (e[k][j] = e[k][j].join(d[j]));
        return e
    }
    e.exports = a
}), null);