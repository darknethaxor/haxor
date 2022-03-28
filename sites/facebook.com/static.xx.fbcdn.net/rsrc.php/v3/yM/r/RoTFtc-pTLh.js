if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
    f["default"] = a
}), 66);
__d("isBulletinDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)bulletin\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("routeBuilderUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.split("/");
        return a.filter(function(a) {
            return a !== ""
        }).map(function(a) {
            var b = a.split(/{|}/);
            if (b.length < 3) return {
                isToken: !1,
                part: a
            };
            else {
                a = b[0];
                var c = b[1];
                b = b[2];
                var d = c[0] === "?",
                    e = c[d ? 1 : 0] === "*";
                c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
                return {
                    isToken: !0,
                    optional: d,
                    prefix: a,
                    suffix: b,
                    token: c
                }
            }
        })
    }
    f.getPathParts = a
}), 66);
__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";

    function a(a, b, e, f, g) {
        g === void 0 && (g = !1);
        var i = d("routeBuilderUtils").getPathParts(a);

        function j(j) {
            try {
                var k = f != null ? babelHelpers["extends"]({}, f, j) : j,
                    l = {};
                j = "";
                var m = !1;
                j = i.reduce(function(a, c) {
                    if (!c.isToken) return a + "/" + c.part;
                    else {
                        var d, e = c.optional,
                            f = c.prefix,
                            g = c.suffix;
                        c = c.token;
                        if (e && m) return a;
                        d = (d = k[c]) != null ? d : b[c];
                        if (d == null && e) {
                            m = !0;
                            return a
                        }
                        if (d == null) throw new Error("Missing required template parameter: " + c);
                        if (d === "") throw new Error("Required template parameter is an empty string: " + c);
                        l[c] = !0;
                        return a + "/" + f + d + g
                    }
                }, "");
                a.slice(-1) === "/" && (j += "/");
                j === "" && (j = "/");
                var n = d("ConstUriUtils").getUri(j);
                for (var o in k) {
                    var p = k[o];
                    !l[o] && p != null && n != null && (e != null && e.has(o) ? p !== !1 && (n = n.addQueryParam(o, null)) : n = n.addQueryParam(o, p))
                }
                return [n, j]
            } catch (b) {
                p = b == null ? void 0 : b.message;
                o = c("FBLogger")("JSRouteBuilder").blameToPreviousFrame();
                g && (o = o.blameToPreviousFrame());
                o.mustfix("Failed building URI for base path: %s message: %s", a, p);
                return [null, h]
            }
        }
        return {
            buildUri: function(a) {
                a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
                if (a == null) throw new Error("Not even the fallback URL parsed validly!");
                return a
            },
            buildUriNullable: function(a) {
                return j(a)[0]
            },
            buildURLStringDEPRECATED: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            },
            buildURL: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            }
        }
    }
    g["default"] = a
}), 98);
__d("isLinkshimURI", ["isBulletinDotComURI", "isFacebookURI", "isMessengerDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.getPath();
        return (b === "/l.php" || b.indexOf("/si/ajax/l/") === 0 || b.indexOf("/l/") === 0 || b.indexOf("l/") === 0) && (c("isFacebookURI")(a) || c("isMessengerDotComURI")(a) || c("isBulletinDotComURI")(a)) ? !0 : !1
    }
    g["default"] = a
}), 98);