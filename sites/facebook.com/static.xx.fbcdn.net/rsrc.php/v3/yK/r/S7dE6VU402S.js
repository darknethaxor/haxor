if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("EventListenerImplForCacheStorage", ["cr:1351741"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1351741")
}), 98);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isValidAsyncSignalURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    var g, h, i;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        i || (i = new(b("Promise"))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = i.then(function() {
            return new(b("Promise"))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                j = b("memoize")(function() {
                    (h || (h = b("ErrorGuard"))).applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, j()
            }, j));
            this.timeout && setTimeout(j, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("AsyncTypedRequest", ["AsyncRequest"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            b = a.call(this, b) || this;
            b.setReplaceTransportMarkers();
            return b
        }
        var c = b.prototype;
        c.promisePayload = function(b) {
            return a.prototype.promisePayload.call(this, b)
        };
        c.setPayloadHandler = function(b) {
            a.prototype.setPayloadHandler.call(this, b);
            return this
        };
        return b
    }(c("AsyncRequest"));
    g["default"] = a
}), 98);
__d("ContextualLayerUpdateOnScroll", ["Event"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this._layer = a
        }
        var b = a.prototype;
        b.enable = function() {
            this._subscriptions = [this._layer.subscribe("show", this._attachScrollListener.bind(this)), this._layer.subscribe("hide", this._removeScrollListener.bind(this))]
        };
        b.disable = function() {
            while (this._subscriptions.length) this._subscriptions.pop().unsubscribe()
        };
        b._attachScrollListener = function() {
            var a = this,
                b = this._layer.getContextScrollParent(),
                d = this._layer.getInsertScrollParent();
            if (this._listener != null || b === d) return;
            this._listener = c("Event").listen(b, "scroll", function() {
                a._layer.updatePosition()
            })
        };
        b._removeScrollListener = function() {
            this._listener && this._listener.remove(), this._listener = null
        };
        return a
    }();
    Object.assign(a.prototype, {
        _subscriptions: []
    });
    g["default"] = a
}), 98);
__d("QuicklingRefreshOverheadUtil", ["QuicklingConfig", "WebStorage", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = null,
        j = 1e4;
    a = {
        onQuicklingStart: function() {
            i = (g || (g = b("performanceAbsoluteNow")))()
        },
        onQuicklingVersionMatch: function() {
            i = null
        },
        onQuicklingRefreshStart: function() {
            if (!b("QuicklingConfig").logRefreshOverhead || i === null) return;
            var a = (h || (h = b("WebStorage"))).getSessionStorage();
            if (!a) return;
            a.setItem("quickling_refresh_overhead", ((g || (g = b("performanceAbsoluteNow")))() - i).toString());
            a.setItem("quickling_refresh_start", Date.now().toString())
        },
        getOverhead: function(a) {
            if (!b("QuicklingConfig").logRefreshOverhead) return null;
            var c = (h || (h = b("WebStorage"))).getSessionStorageForRead();
            if (!c) return null;
            var d = c.getItem("quickling_refresh_start");
            if (d == null) return null;
            if (a - parseInt(d, 10) > j) return null;
            a = c.getItem("quickling_refresh_overhead");
            return a != null ? parseFloat(a) : null
        }
    };
    e.exports = a
}), null);
__d("CacheStorage", ["ErrorGuard", "EventListenerImplForCacheStorage", "ExecutionEnvironment", "FBJSON", "WebStorage", "emptyFunction", "err", "killswitch"], (function(a, b, c, d, e, f, g) {
    var h = "_@_",
        i = "3b",
        j = "CacheStorageVersion",
        k = {
            length: 0,
            getItem: c("emptyFunction"),
            setItem: c("emptyFunction"),
            clear: c("emptyFunction"),
            removeItem: c("emptyFunction"),
            key: c("emptyFunction")
        };
    a = function() {
        function a(a) {
            this._store = a
        }
        var b = a.prototype;
        b.getStore = function() {
            return this._store
        };
        b.keys = function() {
            var a = [];
            for (var b = 0; b < this._store.length; b++) {
                var c = this._store.key(b);
                c != null && a.push(c)
            }
            return a
        };
        b.get = function(a) {
            return this._store.getItem(a)
        };
        b.set = function(a, b) {
            this._store.setItem(a, b)
        };
        b.remove = function(a) {
            this._store.removeItem(a)
        };
        b.clear = function() {
            this._store.clear()
        };
        b.clearWithPrefix = function(a) {
            a = a || "";
            var b = this.keys();
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d != null && d.startsWith(a) && this.remove(d)
            }
        };
        return a
    }();
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            return a.call(this, (b = c("WebStorage").getLocalStorage()) != null ? b : k) || this
        }
        b.available = function() {
            return !!c("WebStorage").getLocalStorage()
        };
        return b
    }(a);
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            return a.call(this, (b = c("WebStorage").getSessionStorage()) != null ? b : k) || this
        }
        b.available = function() {
            return !!c("WebStorage").getSessionStorage()
        };
        return b
    }(a);
    var l = function() {
            function a() {
                this._store = {}
            }
            var b = a.prototype;
            b.getStore = function() {
                return this._store
            };
            b.keys = function() {
                return Object.keys(this._store)
            };
            b.get = function(a) {
                return this._store[a] === void 0 ? null : this._store[a]
            };
            b.set = function(a, b) {
                this._store[a] = b
            };
            b.remove = function(a) {
                a in this._store && delete this._store[a]
            };
            b.clear = function() {
                this._store = {}
            };
            b.clearWithPrefix = function(a) {
                a = a || "";
                var b = this.keys();
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.startsWith(a) && this.remove(d)
                }
            };
            a.available = function() {
                return !0
            };
            return a
        }(),
        m = {
            memory: l,
            localstorage: b,
            sessionstorage: e
        };
    g = function() {
        function a(a, b) {
            this._changeCallbacks = [];
            this._key_prefix = "_cs_";
            this._exception = null;
            b && (this._key_prefix = b);
            a === "AUTO" || !a ? b = "memory" : b = a;
            b && (!m[b] || !m[b].available() ? (c("ExecutionEnvironment").canUseDOM, this._backend = new l()) : this._backend = new m[b]());
            a = this.useBrowserStorage();
            a && c("EventListenerImplForCacheStorage").listen(window, "storage", this._onBrowserValueChanged.bind(this));
            b = a ? this._backend.getStore().getItem(j) : this._backend.getStore()[j];
            b !== i && (c("killswitch")("CACHE_STORAGE_MODULE_CLEAR_OWN_KEYS") ? this.clear() : this.clearOwnKeys())
        }
        var b = a.prototype;
        b.useBrowserStorage = function() {
            return this._backend.getStore() === c("WebStorage").getLocalStorage() || this._backend.getStore() === c("WebStorage").getSessionStorage()
        };
        b.addValueChangeCallback = function(a) {
            var b = this;
            this._changeCallbacks.push(a);
            return {
                remove: function() {
                    b._changeCallbacks.slice(b._changeCallbacks.indexOf(a), 1)
                }
            }
        };
        b._onBrowserValueChanged = function(a) {
            this._changeCallbacks && String(a.key).startsWith(this._key_prefix) && this._changeCallbacks.forEach(function(b) {
                b(a.key, a.oldValue, a.newValue)
            })
        };
        b.keys = function() {
            var a = this,
                b = [];
            c("ErrorGuard").guard(function() {
                if (a._backend) {
                    var c = a._backend.keys(),
                        d = a._key_prefix.length;
                    for (var e = 0; e < c.length; e++) c[e].substr(0, d) == a._key_prefix && b.push(c[e].substr(d))
                }
            }, {
                name: "CacheStorage"
            })();
            return b
        };
        b.set = function(b, e, f) {
            if (this._backend) {
                if (this.useBrowserStorage() && a._persistentWritesDisabled) {
                    this._exception = c("err")("writes disabled");
                    return !1
                }
                var g;
                typeof e === "string" ? g = h + e : !f ? (g = {
                    __t: Date.now(),
                    __v: e
                }, g = d("FBJSON").stringify(g)) : g = d("FBJSON").stringify(e);
                f = this._backend;
                e = this._key_prefix + b;
                b = !0;
                var i = null;
                while (b) try {
                    i = null, f.set(e, g), b = !1
                } catch (a) {
                    i = a;
                    var j = f.keys().length;
                    this._evictCacheEntries();
                    b = f.keys().length < j
                }
                if (i !== null) {
                    this._exception = i;
                    return !1
                } else {
                    this._exception = null;
                    return !0
                }
            }
            this._exception = c("err")("no back end");
            return !1
        };
        b.getLastSetExceptionMessage = function() {
            return this._exception ? this._exception.message : null
        };
        b.getLastSetException = function() {
            return this._exception
        };
        b.getStorageKeyCount = function() {
            var a = this._backend;
            return a ? a.keys().length : 0
        };
        b._evictCacheEntries = function() {
            var b = [],
                c = this._backend;
            c.keys().forEach(function(e) {
                if (e === j) return;
                var g = c.get(e);
                if (g === void 0) {
                    c.remove(e);
                    return
                }
                if (a._hasMagicPrefix(g)) return;
                try {
                    g = d("FBJSON").parse(g, f.id)
                } catch (a) {
                    c.remove(e);
                    return
                }
                g && g.__t !== void 0 && g.__v !== void 0 && b.push([e, g.__t])
            });
            b.sort(function(a, b) {
                return a[1] - b[1]
            });
            for (var e = 0; e < Math.ceil(b.length / 2); e++) c.remove(b[e][0])
        };
        b.get = function(b, e) {
            var g;
            if (this._backend) {
                c("ErrorGuard").applyWithGuard(function() {
                    g = this._backend.get(this._key_prefix + b)
                }, this, [], {
                    onError: function() {
                        g = null
                    },
                    name: "CacheStorage:get"
                });
                if (g != null)
                    if (a._hasMagicPrefix(g)) g = g.substr(h.length);
                    else try {
                        g = d("FBJSON").parse(g, f.id), g && g.__t !== void 0 && g.__v !== void 0 && (g = g.__v)
                    } catch (a) {
                        g = void 0
                    } else g = void 0
            }
            g === void 0 && e !== void 0 && (g = e, this.set(b, g));
            return g
        };
        b.remove = function(a) {
            this._backend && c("ErrorGuard").applyWithGuard(this._backend.remove, this._backend, [this._key_prefix + a], {
                name: "CacheStorage:remove"
            })
        };
        b._setVersion = function() {
            var a = this;
            c("ErrorGuard").applyWithGuard(function() {
                a.useBrowserStorage() ? a._backend.getStore().setItem(j, i) : a._backend.getStore()[j] = i
            }, this, [], {
                name: "CacheStorage:setVersion"
            })
        };
        b.clear = function() {
            this._backend && (c("ErrorGuard").applyWithGuard(this._backend.clear, this._backend, [], {
                name: "CacheStorage:clear"
            }), this._setVersion())
        };
        b.clearOwnKeys = function() {
            this._backend && (c("ErrorGuard").applyWithGuard(this._backend.clearWithPrefix, this._backend, [this._key_prefix], {
                name: "CacheStorage:clearOwnKeys"
            }), this._setVersion())
        };
        a.getAllStorageTypes = function() {
            return Object.keys(m)
        };
        a._hasMagicPrefix = function(a) {
            return a.substr(0, h.length) === h
        };
        a.disablePersistentWrites = function() {
            a._persistentWritesDisabled = !0
        };
        return a
    }();
    g._persistentWritesDisabled = !1;
    f.exports = g
}), 34);