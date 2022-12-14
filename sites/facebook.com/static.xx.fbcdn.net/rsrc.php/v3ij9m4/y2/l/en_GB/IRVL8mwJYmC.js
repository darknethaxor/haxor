if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
}

__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    a = {
        invoke: function(a, c) {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var b = a.prototype;
        b.getRequest = function() {
            return this.request
        };
        b.getPayload = function() {
            return this.payload
        };
        b.toError = function() {
            this.error !== 0 || h(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        b.getError = function() {
            return this.error
        };
        b.getErrorSummary = function() {
            return this.errorSummary
        };
        b.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        b.getErrorDescription = function() {
            return this.errorDescription
        };
        b.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (c("HTML").isHTML(a)) {
                var b = new(c("HTML"))(a);
                return b.getRootNode().textContent
            }
            return a.toString()
        };
        b.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        b.isSilent = function() {
            return !!this.silentError
        };
        b.isTransient = function() {
            return !!this.transientError
        };
        b.isBlockedAction = function() {
            return !!this.blockedAction
        };
        b.getResponseHeader = function(a) {
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(b) {
            try {
                !b.silentError ? a.verboseErrorHandler(b) : c("FBLogger")("async_response").catching(b.toError()).warn("default error handler called")
            } catch (a) {
                alert(b)
            }
        };
        a.verboseErrorHandler = function(a, b) {
            c("Bootloader").loadModules(["ExceptionDialog"], function(c) {
                return c.showAsyncError(a, b)
            }, "AsyncResponse")
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        delim: "/*<!-- fetch-stream -->*/"
    })
}), null);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("FetchStreamTransport", ["ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows", "regeneratorRuntime"], (function $module_FetchStreamTransport(global, require, importDefault, importNamespace, requireLazy, module, exports) {
    var instance_count = 0,
        FetchStreamTransport = function(_ref) {
            babelHelpers.inheritsLoose(FetchStreamTransport, _ref);

            function FetchStreamTransport(uri) {
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _ref.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(importDefault("URI"))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                var _this = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(importDefault("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(importDefault("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            importDefault("nullthrows")(_this.$FetchStreamTransport6)(function() {
                                                if (first && nextData.startsWith("<")) {
                                                    importDefault("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this.$FetchStreamTransport5 = !0 : _this.$FetchStreamTransport6 = importDefault("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                var _this2 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this2.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(importDefault("mixin")(importDefault("ArbiterMixin")));
    exports["default"] = FetchStreamTransport
}), 98);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        return {
            summary: "HTTP Error",
            description: "Unknown HTTP error #" + a
        }
    }
    b = {
        get: a,
        getAll: c("emptyFunction").thatReturns(new Map())
    };
    d = b;
    g["default"] = d
}), 98);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    var g, h = {},
        i = 2,
        j = "jsonp",
        k = "iframe";

    function l(a) {
        delete h[a]
    }
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(c, a);

        function c(b, c) {
            var d;
            d = a.call(this) || this;
            d._type = b;
            d._uri = c;
            d._hasResponse = !1;
            h[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var d = c.prototype;
        d.getID = function() {
            return this._id || (this._id = i++)
        };
        d.hasFinished = function() {
            return !(this.getID() in h)
        };
        d.getRequestURI = function() {
            return new(g || (g = b("URI")))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        d.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        d.send = function() {
            var a = this;
            this._type === j ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: a.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }, 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString());
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        d.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        d.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            l(this.getID());
            this.inform("abort")
        };
        d._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        d._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        c.respond = function(a, b, c) {
            var d = h[a];
            d && (d._hasResponse = !0, c || l(a), d._type == k && (typeof b === "string" ? b = JSON.parse(b) : b = JSON.parse(JSON.stringify(b))), d.handleResponse(b))
        };
        return c
    }(b("mixin")(b("ArbiterMixin")));
    a.respond = b("TimeSlice").guard(a.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = a
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "Arbiter", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "DTSG", "DTSG_ASYNC", "Deferred", "Env", "ErrorGuard", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "HasteResponse", "JSCC", "PHPQuerySerializer", "Parent", "Promise", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "fb-error", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "isBulletinDotComURI", "isEmpty", "isFacebookURI", "isInternalFBURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "performanceAbsoluteNow", "promiseDone", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, importDefault, importNamespace, requireLazy, module, exports, errorCode, fbt, invariant) {
    "use strict";
    var nineteenSecInMs = 19e3,
        INTERNAL_SERVER_ERROR = 500,
        NO_NETWORK_CONNECTION = 1006,
        NETWORK_ERROR = 1004,
        ABORTED_DUE_TO_PAGE_TRANSITION = 1010,
        WARNING_ERROR_CODES = new Set([INTERNAL_SERVER_ERROR, ABORTED_DUE_TO_PAGE_TRANSITION, NETWORK_ERROR, NO_NETWORK_CONNECTION]);

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || importDefault("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id,
        ignore_id_update = !1;
    importDefault("Arbiter").subscribe("page_transition", function(_, message) {
        !ignore_id_update ? id_threshold = message.id : ignore_id_update = !1
    });
    var JSON_HIJACKING_SHIELD = "for (;;);",
        JSON_HIJACKING_SHIELD_LEN = JSON_HIJACKING_SHIELD.length,
        AsyncRequest = function() {
            function AsyncRequest(uri) {
                var _this = this;
                this._allowIrrelevantRequests = !1;
                this._delayPreDisplayJS = !1;
                this._shouldReplaceTransportMarkers = !1;
                this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                    var error = asyncResponse.getError();
                    _this.clearStatusIndicator();
                    if (!_this._isRelevant() || error === ABORTED_DUE_TO_PAGE_TRANSITION) {
                        _this.abort();
                        return
                    }
                    if (_this._isServerDialogErrorCode(error)) {
                        var is_confirmation = error == 1357008 || error == 1357007;
                        _this.interceptHandler(asyncResponse);
                        error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                    } else if (_this.initialHandler(asyncResponse) !== !1) {
                        importDefault("clearTimeout")(_this.timer);
                        try {
                            errorHandler(asyncResponse)
                        } catch (e) {
                            _this.finallyHandler(asyncResponse);
                            throw e
                        }
                        _this.finallyHandler(asyncResponse)
                    }
                };
                this._onStateChange = function() {
                    var transport = _this.transport;
                    if (!transport) return;
                    try {
                        AsyncRequest._inflightCount--;
                        importNamespace("ResourceTimingsStore").measureResponseReceived(importDefault("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                        try {
                            transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"), importDefault("fb-error").ErrorXFBDebug.add(_this._xFbServer))
                        } catch (_unused2) {}
                        if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                        else if (importNamespace("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                        else if (importDefault("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                            _this.remainingRetries--;
                            delete _this.transport;
                            _this.send(!0);
                            return
                        } else _this._invokeErrorHandler();
                        _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                    } catch (exception) {
                        if (hasUnloaded()) return;
                        delete _this.transport;
                        _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || importDefault("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                    }
                };
                this.continuation = importDefault("TimeSlice").getPlaceholderReusableContinuation();
                this.transport = null;
                this.method = "POST";
                this.uri = "";
                this.timeout = null;
                this.timer = null;
                this.initialHandler = importDefault("emptyFunction");
                this.handler = null;
                this.uploadProgressHandler = null;
                this.errorHandler = importDefault("AsyncResponse").defaultErrorHandler;
                this.transportErrorHandler = null;
                this.timeoutHandler = null;
                this.interceptHandler = importDefault("emptyFunction");
                this.finallyHandler = importDefault("emptyFunction");
                this.abortHandler = importDefault("emptyFunction");
                this.serverDialogCancelHandler = null;
                this.relativeTo = null;
                this.statusElement = null;
                this.statusClass = "";
                this.data = {};
                this.headers = {};
                this.file = null;
                this.context = {};
                this.readOnly = !1;
                this.writeRequiredParams = [];
                this.remainingRetries = 0;
                this.userActionID = "-";
                this.resourceTimingStoreUID = importNamespace("ResourceTimingsStore").getUID(importDefault("ResourceTypes").XHR, uri != null ? uri.toString() : "");
                this.flushedResponseTextParseIndex = 0;
                this.option = {
                    asynchronous_DEPRECATED: !0,
                    suppressErrorHandlerWarning: !1,
                    suppressEvaluation: !1,
                    suppressErrorAlerts: !1,
                    retries: 0,
                    jsonp: !1,
                    bundle: !1,
                    useIframeTransport: !1,
                    handleErrorAfterUnload: !1,
                    useFetchWithIframeFallback: !1
                };
                this.transportErrorHandler = importDefault("bind")(this, "errorHandler");
                uri !== void 0 && this.setURI(uri);
                this.setAllowCrossPageTransition(importDefault("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
            }
            var _proto = AsyncRequest.prototype;
            _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
                this.clearStatusIndicator();
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                    return
                }
                if (this.initialHandler(asyncResponse) === !1) return;
                importDefault("clearTimeout")(this.timer);
                if (asyncResponse.jscc_map) {
                    var jsccMap = importNamespace("JSCC").parse(asyncResponse.jscc_map);
                    importNamespace("JSCC").init(jsccMap)
                }
                var suppress_js, handler = this.getHandler();
                if (handler) try {
                    suppress_js = this._shouldSuppressJS(handler(asyncResponse))
                } catch (e) {
                    asyncResponse.is_last && this.finallyHandler(asyncResponse);
                    throw e
                }
                suppress_js || this._handleJSResponse(asyncResponse);
                asyncResponse.is_last && this.finallyHandler(asyncResponse)
            };
            _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
                return handler_return_value === AsyncRequest.suppressOnloadToken
            };
            _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
                var _displayStarted = !1,
                    preDisplayPromises = [],
                    registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                        if (_displayStarted) {
                            importDefault("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                            return function() {}
                        }
                        var timeoutId, deferrable = new(importDefault("Deferred"))();
                        preDisplayPromises.push(deferrable.getPromise());
                        return importDefault("TimeSlice").guard(function() {
                            timeoutId && importDefault("clearTimeout")(timeoutId), deferrable.resolve()
                        }, "AsyncRequestDisplayBlockingEvent", {
                            propagationType: importDefault("TimeSlice").PropagationType.EXECUTION
                        })
                    };
                serverJS.handle(preDisplayJSMods, {
                    bigPipeContext: {
                        registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                    }
                });
                _displayStarted = !0;
                return preDisplayPromises
            };
            _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
                return domOps && domOps.length ? domOps.some(function(op) {
                    return op[0] === "eval"
                }) : !1
            };
            _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
                var relativeTo = this.getRelativeTo(),
                    domOps = asyncResponse.domops,
                    dtsgToken = asyncResponse.dtsgToken,
                    dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                    jsMods = asyncResponse.jsmods,
                    serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
                savedServerJSInstance && savedServerJSInstance instanceof importDefault("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(importDefault("ServerJS"))();
                serverJS.setRelativeTo(relativeTo);
                if (jsMods) {
                    var preDisplayJSMods = {
                        define: jsMods.define,
                        instances: jsMods.instances,
                        markup: jsMods.markup
                    };
                    delete jsMods.define;
                    delete jsMods.instances;
                    delete jsMods.markup;
                    this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                    serverJS.handle(preDisplayJSMods)
                }
                var parsedUri = new(importDefault("URI"))(this.uri);
                (!parsedUri.getDomain() && !parsedUri.getProtocol() || document.location.origin === parsedUri.getOrigin()) && (dtsgToken && importNamespace("DTSG").setToken(dtsgToken), dtsgAsyncGetToken && importNamespace("DTSG_ASYNC").setToken(dtsgAsyncGetToken));
                domOps && importDefault("ErrorGuard").applyWithGuard(function() {
                    return importNamespace("AsyncDOM").invoke(domOps, relativeTo)
                }, null, [], {
                    errorType: "warn"
                });
                jsMods && serverJS.handle(jsMods);
                this._handleJSRegisters(asyncResponse, "onload");
                this._handleJSRegisters(asyncResponse, "onafterload")
            };
            _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
                var registers = asyncResponse[phase];
                if (registers)
                    for (var ii = 0; ii < registers.length; ii++) importDefault("ErrorGuard").applyWithGuard(new Function(registers[ii]), this, [])
            };
            _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
                var _this2 = this;
                if (typeof interpreted.redirect !== "undefined") {
                    importDefault("setTimeout")(function() {
                        _this2.setURI(interpreted.redirect, !0).send()
                    }, 0);
                    return
                }
                if (interpreted.bootloadOnly !== void 0) {
                    var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                        _loop = function _loop() {
                            if (_isArray) {
                                if (_i >= _iterator.length) return "break";
                                _ref = _iterator[_i++]
                            } else {
                                _i = _iterator.next();
                                if (_i.done) return "break";
                                _ref = _i.value
                            }
                            var rsrcs = _ref;
                            importDefault("TimeSlice").guard(function() {
                                importDefault("Bootloader").loadPredictedResourceMap(rsrcs)
                            }, "Bootloader.loadPredictedResourceMap", {
                                root: !0
                            })()
                        };
                    for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var _ref, _ret = _loop();
                        if (_ret === "break") break
                    }
                    return
                }
                if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === importDefault("emptyFunction") && this.finallyHandler === importDefault("emptyFunction")) return;
                var response = interpreted.asyncResponse;
                if (typeof response !== "undefined") {
                    var _response$hsrp, _response$allResource;
                    if (!this._isRelevant()) {
                        this._invokeErrorHandler(ABORTED_DUE_TO_PAGE_TRANSITION);
                        return
                    }
                    response.inlinejs && importDefault("evalGlobal")(response.inlinejs);
                    response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                    importNamespace("HasteResponse").handleSRPayload((_response$hsrp = response.hsrp) != null ? _response$hsrp : {});
                    var dispatch, arbiter_event;
                    if (response.getError() && !response.getErrorIsWarning()) {
                        var handler = this.getErrorHandler().bind(this);
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchErrorResponse, {
                            name: "AsyncRequest#_dispatchErrorResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response, handler);
                        arbiter_event = "error"
                    } else {
                        dispatch = importDefault("ErrorGuard").guard(this._dispatchResponse.bind(this), {
                            name: "AsyncRequest#_dispatchResponse for " + this.getURI()
                        });
                        dispatch = dispatch.bind(this, response);
                        arbiter_event = "response";
                        var domOps = response.domops;
                        if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !importDefault("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                            var jsMods = response.jsmods,
                                preDisplayJSMods = {
                                    define: jsMods.define,
                                    instances: jsMods.instances,
                                    markup: jsMods.markup
                                };
                            delete jsMods.define;
                            delete jsMods.instances;
                            delete jsMods.markup;
                            preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                            delete jsMods.pre_display_requires;
                            var serverJS = new(importDefault("ServerJS"))();
                            serverJS.setRelativeTo(this.getRelativeTo());
                            response.savedServerJSInstance = serverJS;
                            var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                            if (preDisplayPromises && preDisplayPromises.length) {
                                var realDispatch = dispatch;
                                dispatch = function dispatch() {
                                    importDefault("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                                }
                            }
                        }
                    }
                    var ts = importDefault("performanceAbsoluteNow")();
                    dispatch = importDefault("executeAfter")(dispatch, function() {
                        importDefault("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                            request: _this2,
                            response: response,
                            ts: ts
                        })
                    });
                    this.preBootloadHandler && this.preBootloadHandler(response);
                    importDefault("Bootloader").loadResources((_response$allResource = response.allResources) != null ? _response$allResource : [], {
                        onAll: importDefault("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                            importDefault("setTimeout")(dispatch, 0)
                        }
                    }, this.getURI())
                } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
            };
            _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
                var _this3 = this,
                    transport = this.transport;
                if (!transport) return;
                var error;
                if (this.responseText === "") error = 1002;
                else if (this._requestAborted) error = 1011;
                else {
                    try {
                        error = explicitError || transport.status || NETWORK_ERROR
                    } catch (_unused3) {
                        error = 1005
                    }!1 === navigator.onLine && (error = NO_NETWORK_CONNECTION)
                }
                var desc, summary, silent = !0;
                if (error === NO_NETWORK_CONNECTION) summary = fbt._( /*FBT_CALL*/ "No network connection" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Your browser appears to be offline. Please check your Internet connection and try again." /*FBT_CALL*/ );
                else if (error >= 300 && error <= 399) {
                    summary = fbt._( /*FBT_CALL*/ "Redirection" /*FBT_CALL*/ );
                    desc = fbt._( /*FBT_CALL*/ "Your access to Facebook was redirected or blocked by a third party at this time. Please contact your ISP or reload." /*FBT_CALL*/ );
                    var location = transport.getResponseHeader("Location");
                    location && importDefault("goURI")(location, !0);
                    silent = !0
                } else summary = fbt._( /*FBT_CALL*/ "Oops!" /*FBT_CALL*/ ), desc = fbt._( /*FBT_CALL*/ "Something went wrong. We're working on getting this fixed as soon as we can. You may be able to try again." /*FBT_CALL*/ );
                var async_response = new(importDefault("AsyncResponse"))(this, transport);
                Object.assign(async_response, {
                    error: error,
                    errorSummary: summary,
                    errorDescription: desc,
                    silentError: silent
                });
                importDefault("setTimeout")(function() {
                    importDefault("Arbiter").inform("AsyncRequest/error", {
                        request: _this3,
                        response: async_response
                    })
                }, 0);
                if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
                if (!this.transportErrorHandler) {
                    importDefault("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                    return
                }
                var error_handler = this.getTransportErrorHandler().bind(this);
                !(this.getOption("suppressErrorAlerts") || WARNING_ERROR_CODES.has(error)) ? importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): WARNING_ERROR_CODES.has(error) && importDefault("FBLogger")("asyncresponse").addToCategoryKey(String(error)).warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
                importDefault("ErrorGuard").applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
            };
            _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
                return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
            };
            _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
                var _this4 = this,
                    payload = async_response.getPayload();
                importDefault("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                    QuickSandSolver.solveAndSendRequestBack(_this4, payload)
                }, "AsyncRequest")
            };
            _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
                var _this5 = this;
                allow_get === void 0 && (allow_get = !1);
                var payload = async_response.getPayload();
                if (payload.__dialog !== void 0) {
                    this._displayServerLegacyDialog(async_response, is_confirmation);
                    return
                }
                var json = payload.__dialogx;
                new(importDefault("ServerJS"))().handle(json);
                importDefault("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                    ConfirmationDialog.setupConfirmation(async_response, _this5, allow_get)
                }, "AsyncRequest")
            };
            _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
                var _this6 = this,
                    model = async_response.getPayload().__dialog;
                if (importDefault("gkx")("708253")) {
                    var _ref2, _async_response$reque;
                    importDefault("FBLogger")("comet_infra").addMetadata("COMET_INFRA", "ERROR_CODE", async_response.getError().toString()).addMetadata("COMET_INFRA", "ERROR_URL", (_ref2 = (_async_response$reque = async_response.request) == null ? void 0 : _async_response$reque.getURI()) != null ? _ref2 : "unknown").mustfix("AsyncRequest._displayServerLegacyDialog called in Comet")
                }
                importDefault("Bootloader").loadModules(["Dialog"], function(Dialog) {
                    var dialog = new Dialog(model);
                    is_confirmation && dialog.setHandler(_this6._displayConfirmationHandler.bind(_this6, dialog));
                    dialog.setCancelHandler(function() {
                        var handler = _this6.getServerDialogCancelHandler();
                        try {
                            handler && handler(async_response)
                        } catch (e) {
                            throw e
                        } finally {
                            _this6.finallyHandler(async_response)
                        }
                    }).setCausalElement(_this6.relativeTo).show()
                }, "AsyncRequest")
            };
            _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
                this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
            };
            _proto.setJSONPTransport = function setJSONPTransport(transport) {
                transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
            };
            _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
                var transport = this.transport;
                if (!transport) return;
                data.bootloadOnly || (this.is_first = this.is_first === void 0);
                var interpreted = this._interpretResponse(data);
                interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
                this.invokeResponseHandler(interpreted);
                transport.hasFinished() && delete this.transport
            };
            _proto._handleJSONPAbort = function _handleJSONPAbort() {
                this._invokeErrorHandler(), delete this.transport
            };
            _proto._handleXHRResponse = function _handleXHRResponse(transport) {
                var interpreted;
                if (this.getOption("suppressEvaluation")) interpreted = {
                    asyncResponse: new(importDefault("AsyncResponse"))(this, transport)
                };
                else try {
                    this._handleFlushedResponse();
                    var text = transport.responseText;
                    text = this._filterOutFlushedText(text);
                    var safe_text = this._unshieldResponseText(text),
                        _response;
                    try {
                        _response = JSON.parse(safe_text)
                    } catch (error) {
                        _response = eval("(" + safe_text + ")"), importDefault("FBLogger")("async_request").catching(error).warn("JSON.parse encountered an exception, fallback to eval. Endpoint: " + new(importDefault("URI"))(this.uri).getPath())
                    }
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, importDefault("FBLogger")("async_request").catching(error).warn("Failed to handle response")
                }
                this.invokeResponseHandler(interpreted)
            };
            _proto._handleFlushedResponse = function _handleFlushedResponse() {
                var flushedResponseHandler = this.flushedResponseHandler,
                    transport = this.transport;
                if (flushedResponseHandler && transport) {
                    var jsonShieldIndex = transport.responseText.indexOf(JSON_HIJACKING_SHIELD),
                        flushedTextEndIndex = jsonShieldIndex === -1 ? transport.responseText.length : jsonShieldIndex;
                    flushedResponseHandler(transport.responseText.substring(this.flushedResponseTextParseIndex, flushedTextEndIndex));
                    this.flushedResponseTextParseIndex = flushedTextEndIndex
                }
            };
            _proto._unshieldResponseText = function _unshieldResponseText(text) {
                if (text.length <= JSON_HIJACKING_SHIELD_LEN) throw new Error("Response too short on async");
                var offset = 0;
                while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
                offset && text.substring(offset, offset + JSON_HIJACKING_SHIELD_LEN) == JSON_HIJACKING_SHIELD;
                return text.substring(offset + JSON_HIJACKING_SHIELD_LEN)
            };
            _proto._filterOutFlushedText = function _filterOutFlushedText(text) {
                if (!this.flushedResponseHandler) return text;
                var index = text.indexOf(JSON_HIJACKING_SHIELD);
                return index < 0 ? text : text.substr(index)
            };
            _proto._interpretResponse = function _interpretResponse(response) {
                if (response.redirect) return {
                    redirect: response.redirect
                };
                if (response.bootloadOnly) return {
                    bootloadOnly: response.bootloadOnly
                };
                var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
                this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && importDefault("replaceTransportMarkers")({
                    relativeTo: this.getRelativeTo(),
                    bigPipeContext: null
                }, response.payload);
                var r = new(importDefault("AsyncResponse"))(this);
                if (response.__ar != 1) importDefault("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
                else {
                    Object.assign(r, response);
                    var transport = this.transport;
                    transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
                }
                return {
                    asyncResponse: r
                }
            };
            _proto._isMultiplexable = function _isMultiplexable() {
                if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                    return !1
                }
                if (!importDefault("isFacebookURI")(new(importDefault("URI"))(this.uri))) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                    return !1
                }
                if (!this.getOption("asynchronous_DEPRECATED")) {
                    importDefault("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                    return !1
                }
                return !0
            };
            _proto.handleResponse = function handleResponse(response) {
                var interpreted = this._interpretResponse(response);
                this.invokeResponseHandler(interpreted)
            };
            _proto.setMethod = function setMethod(m) {
                this.method = m.toString().toUpperCase();
                return this
            };
            _proto.getMethod = function getMethod() {
                return this.method
            };
            _proto.setData = function setData(obj) {
                this.data = obj;
                return this
            };
            _proto.setRequestHeader = function setRequestHeader(name, value) {
                this.headers[name] = value;
                return this
            };
            _proto.setRawData = function setRawData(raw_data) {
                this.rawData = raw_data;
                return this
            };
            _proto.getData = function getData() {
                return this.data
            };
            _proto.setContextData = function setContextData(key, value, enabled) {
                enabled = enabled === void 0 ? !0 : enabled;
                enabled && (this.context["_log_" + key] = value);
                return this
            };
            _proto._setUserActionID = function _setUserActionID() {
                this.userActionID = (importNamespace("SessionName").getName() || "-") + "/-"
            };
            _proto.setURI = function setURI(uri, throwOnInvalid) {
                throwOnInvalid === void 0 && (throwOnInvalid = !1);
                typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && importDefault("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
                var uri_obj = new(importDefault("URI"))(uri);
                if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !importDefault("isFacebookURI")(uri_obj)) {
                    throwOnInvalid && invariant(0, 45284);
                    return this
                }
                if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) {
                    throwOnInvalid && invariant(0, 45285);
                    return this
                }
                this._setUserActionID();
                if (!uri || uri_obj.isEmpty()) {
                    importDefault("FBLogger")("async_request").mustfix("URI cannot be empty");
                    return this
                }
                this.uri = importNamespace("ZeroRewrites").rewriteURI(uri_obj);
                return this
            };
            _proto.getURI = function getURI() {
                return this.uri.toString()
            };
            _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
                shouldDelayJS === void 0 && (shouldDelayJS = !0);
                this._delayPreDisplayJS = shouldDelayJS;
                return this
            };
            _proto.setInitialHandler = function setInitialHandler(fn) {
                this.initialHandler = fn;
                return this
            };
            _proto.setPayloadHandler = function setPayloadHandler(fn) {
                this.setHandler(function(response) {
                    fn(response.payload)
                });
                return this
            };
            _proto.setHandler = function setHandler(fn) {
                validateResponseHandler(fn) && (this.handler = fn);
                return this
            };
            _proto.setFlushedResponseHandler = function setFlushedResponseHandler(fn) {
                validateResponseHandler(fn) && (this.flushedResponseHandler = fn);
                return this
            };
            _proto.getHandler = function getHandler() {
                return this.handler || importDefault("emptyFunction")
            };
            _proto.setProgressHandler = function setProgressHandler(fn) {
                validateResponseHandler(fn) && (this.progressHandler = fn);
                return this
            };
            _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
                validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
                return this
            };
            _proto.setErrorHandler = function setErrorHandler(fn) {
                validateResponseHandler(fn) && (this.errorHandler = fn);
                return this
            };
            _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
                this.transportErrorHandler = fn;
                return this
            };
            _proto.getErrorHandler = function getErrorHandler() {
                return this.errorHandler || importDefault("emptyFunction")
            };
            _proto.getTransportErrorHandler = function getTransportErrorHandler() {
                return this.transportErrorHandler || importDefault("emptyFunction")
            };
            _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
                validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
                return this
            };
            _proto.resetTimeout = function resetTimeout(timeout) {
                if (!(this.timeoutHandler === null))
                    if (timeout === null) this.timeout = null, importDefault("clearTimeout")(this.timer), this.timer = null;
                    else {
                        var clear_on_quickling_event = !this._allowCrossPageTransition;
                        this.timeout = timeout;
                        importDefault("clearTimeout")(this.timer);
                        clear_on_quickling_event ? this.timer = importDefault("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = importDefault("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                    }
                return this
            };
            _proto._handleTimeout = function _handleTimeout() {
                var _this7 = this;
                this.continuation.last(function() {
                    _this7._requestTimeout = !0;
                    var func = _this7.timeoutHandler;
                    _this7.abandon();
                    func && func(_this7);
                    importDefault("setTimeout")(function() {
                        importDefault("Arbiter").inform("AsyncRequest/timeout", {
                            request: _this7
                        })
                    }, 0)
                })
            };
            _proto.setNewSerial = function setNewSerial() {
                this.id = ++last_id;
                return this
            };
            _proto.setInterceptHandler = function setInterceptHandler(fn) {
                this.interceptHandler = fn;
                return this
            };
            _proto.setFinallyHandler = function setFinallyHandler(fn) {
                this.finallyHandler = fn;
                return this
            };
            _proto.setAbortHandler = function setAbortHandler(fn) {
                this.abortHandler = fn;
                return this
            };
            _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
                return this.serverDialogCancelHandler
            };
            _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
                this.serverDialogCancelHandler = fn;
                return this
            };
            _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
                this.preBootloadHandler = fn;
                return this
            };
            _proto.setReadOnly = function setReadOnly(readOnly) {
                typeof readOnly !== "boolean" || (this.readOnly = readOnly);
                return this
            };
            _proto.getReadOnly = function getReadOnly() {
                return this.readOnly
            };
            _proto.setRelativeTo = function setRelativeTo(element) {
                this.relativeTo = element;
                return this
            };
            _proto.getRelativeTo = function getRelativeTo() {
                return this.relativeTo
            };
            _proto.setStatusClass = function setStatusClass(c) {
                this.statusClass = c;
                return this
            };
            _proto.setStatusElement = function setStatusElement(element) {
                this.statusElement = element;
                return this
            };
            _proto.getStatusElement = function getStatusElement() {
                return importDefault("ge")(this.statusElement)
            };
            _proto._isRelevant = function _isRelevant() {
                if (this._allowCrossPageTransition) return !0;
                return !this.id ? !0 : this.id > id_threshold
            };
            _proto.clearStatusIndicator = function clearStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").removeClass(statusElem, "async_saving"), importNamespace("CSS").removeClass(statusElem, this.statusClass))
            };
            _proto.addStatusIndicator = function addStatusIndicator() {
                var statusElem = this.getStatusElement();
                statusElem && (importNamespace("CSS").addClass(statusElem, "async_saving"), importNamespace("CSS").addClass(statusElem, this.statusClass))
            };
            _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
                return this.writeRequiredParams.every(function(param) {
                    this.data[param] = this.data[param] || importDefault("Env")[param] || (importDefault("ge")(param) || {}).value;
                    return this.data[param] !== void 0 ? !0 : !1
                }, this)
            };
            _proto.setOption = function setOption(opt, v) {
                typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
                return this
            };
            _proto.getOption = function getOption(opt) {
                typeof this.option[opt] === "undefined";
                return this.option[opt]
            };
            _proto.abort = function abort() {
                var _this8 = this;
                this.continuation.last(function() {
                    var transport = _this8.transport;
                    if (transport) {
                        var old_handler = _this8.getTransportErrorHandler();
                        _this8.setOption("suppressErrorAlerts", !0);
                        _this8.setTransportErrorHandler(importDefault("emptyFunction"));
                        _this8._requestAborted = !0;
                        transport.abort();
                        _this8.setTransportErrorHandler(old_handler)
                    }
                    _this8.abortHandler();
                    AsyncMultiplex.unschedule(_this8)
                })
            };
            _proto.abandon = function abandon() {
                var _this9 = this;
                this.continuation.last(function() {
                    importDefault("clearTimeout")(_this9.timer);
                    _this9.setOption("suppressErrorAlerts", !0).setHandler(importDefault("emptyFunction")).setErrorHandler(importDefault("emptyFunction")).setTransportErrorHandler(importDefault("emptyFunction")).setProgressHandler(importDefault("emptyFunction")).setUploadProgressHandler(importDefault("emptyFunction"));
                    var transport = _this9.transport;
                    transport && (_this9._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                    _this9.abortHandler();
                    AsyncMultiplex.unschedule(_this9)
                })
            };
            _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
                var setNectarModuleData = this.setNectarModuleData;
                setNectarModuleData && setNectarModuleData.call(this, elem);
                return this
            };
            _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
                this._allowCrossPageTransition = !!allow;
                this.timer && this.resetTimeout(this.timeout);
                return this
            };
            _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
                return this._allowIrrelevantRequests
            };
            _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
                this._allowIrrelevantRequests = allowIrrelevantRequests;
                return this
            };
            _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
                this._allowCrossOrigin = allow;
                return this
            };
            _proto.setAllowCredentials = function setAllowCredentials(allow) {
                this._allowCredentials = allow;
                return this
            };
            _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
                this._isBackgroundRequest = isBackgroundRequest;
                return this
            };
            _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
                value === void 0 && (value = !0);
                this._shouldReplaceTransportMarkers = value;
                return this
            };
            _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
                var _this10 = this;
                this.send();
                return function() {
                    return _this10.abort()
                }
            };
            _proto.send = function send(isRetry) {
                var _this11 = this;
                isRetry = isRetry || !1;
                if (!this.uri) return !1;
                this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
                this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
                (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
                this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
                if (!this.getReadOnly()) {
                    this.specifiesWriteRequiredParams();
                    if (this.method != "POST") return !1
                }
                if (document.location.search.toString().includes(this.uri.toString())) return !1;
                if (this.uri.toString().includes("/../") || this.uri.toString().includes("\\../") || this.uri.toString().includes("/..\\") || this.uri.toString().includes("\\..\\")) return !1;
                Object.assign(this.data, importDefault("getAsyncParams")(this.method));
                importDefault("isEmpty")(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
                importDefault("Env").force_param && Object.assign(this.data, importDefault("Env").force_param);
                this._setUserActionID();
                if (this.getOption("bundle") && this._isMultiplexable()) {
                    AsyncMultiplex.schedule(this);
                    return !0
                }
                this.setNewSerial();
                this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                    __sjax: 1
                });
                importDefault("Arbiter").inform("AsyncRequest/send", {
                    request: this,
                    ts: importDefault("performanceAbsoluteNow")()
                });
                var uri_str, query;
                this.method == "GET" && this.uri.addQueryData({
                    fb_dtsg_ag: importNamespace("DTSG_ASYNC").getToken()
                });
                this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                    __a: 1
                }), uri_str = this.uri.toString(), query = importNamespace("PHPQuerySerializer").serialize(this.data));
                if (this.transport) return !1;
                if (this.getOption("useFetchWithIframeFallback")) try {
                    var _transport = new(importDefault("FetchStreamTransport"))(this.uri);
                    this.setJSONPTransport(_transport);
                    this._markRequestSent();
                    _transport.send();
                    this.setOption("useIframeTransport", !1);
                    return !0
                } catch (_unused4) {
                    this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
                }
                if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                    requireLazy(["JSONPTransport"], function(JSONPTransport) {
                        var transport = new JSONPTransport(_this11.getOption("jsonp") ? "jsonp" : "iframe", _this11.uri);
                        _this11.setJSONPTransport(transport);
                        _this11._markRequestSent();
                        transport.send()
                    });
                    return !0
                }
                this.flushedResponseHandler && (this.flushedResponseTextParseIndex = 0);
                var transport = importNamespace("ZeroRewrites").getTransportBuilderForURI(this.uri)();
                if (!transport) return !1;
                this.schedule("AsyncRequest.send");
                transport.onreadystatechange = function() {
                    var _transport = _this11.transport;
                    _transport && _transport.readyState >= 2 && _transport.readyState <= 3 && _this11._handleFlushedResponse();
                    transport.readyState === 4 && _this11.continuation.last(_this11._onStateChange)
                };
                this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    _this11.continuation(function() {
                        _this11.progressHandler && _this11.progressHandler.apply(_this11, args)
                    })
                });
                this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    _this11.continuation(function() {
                        _this11.uploadProgressHandler && _this11.uploadProgressHandler.apply(_this11, args)
                    })
                });
                isRetry || (this.remainingRetries = this.getOption("retries"));
                this.transport = transport;
                try {
                    transport.open(this.method, uri_str, importDefault("gkx")("1857581") ? !0 : this.getOption("asynchronous_DEPRECATED"))
                } catch (exception) {
                    return !1
                }
                if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                    if (!supportsCrossOrigin(transport)) return !1;
                    this._canSendCredentials() && (transport.withCredentials = !0)
                }
                this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
                var asyncHeaders = importDefault("getAsyncHeaders")(this.uri);
                Object.keys(asyncHeaders).forEach(function(name) {
                    transport && transport.setRequestHeader(name, asyncHeaders[name])
                });
                importDefault("Arbiter").inform("AsyncRequest/will_send", {
                    request: this
                });
                if (transport)
                    for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
                this.addStatusIndicator();
                this._markRequestSent();
                transport.send(query);
                this.timeout !== null && this.resetTimeout(this.timeout);
                AsyncRequest._inflightCount++;
                return !0
            };
            _proto.schedule = function schedule(name) {
                this.continuation = importDefault("TimeSlice").getReusableContinuation(name)
            };
            _proto._canSendCredentials = function _canSendCredentials() {
                if (this._allowCredentials === !1) return !1;
                var uri = new(importDefault("URI"))(this.uri);
                return importDefault("isBulletinDotComURI")(uri) || importDefault("isFacebookURI")(uri) || importDefault("isInternalFBURI")(uri) || importDefault("isMessengerDotComURI")(uri) || importDefault("isWorkplaceDotComURI")(uri)
            };
            _proto._markRequestSent = function _markRequestSent() {
                var fullURI = new(importDefault("URI"))(this.getURI()).getQualifiedURI().toString();
                importNamespace("ResourceTimingsStore").updateURI(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
                importNamespace("ResourceTimingsStore").annotate(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
                importNamespace("ResourceTimingsStore").measureRequestSent(importDefault("ResourceTypes").XHR, this.resourceTimingStoreUID)
            };
            _proto.promisePayload = function promisePayload(isRetry) {
                return this.exec().then(function(response) {
                    return response.payload
                }, function(response) {
                    throw response.toError()
                })
            };
            _proto.exec = function exec(isRetry) {
                var _this12 = this;
                if (this.getHandler() !== importDefault("emptyFunction") || this.getErrorHandler() !== importDefault("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
                return new(require("Promise"))(function(resolve, reject) {
                    _this12.setHandler(resolve).setErrorHandler(reject).send(isRetry)
                })
            };
            AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
                var method = "GET",
                    readonly = !0,
                    data = {};
                (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(importDefault("URI"))(href), data = href.getQueryData(), href.setQueryData({})));
                var status_elem = importNamespace("Parent").byClass(elem, "stat_elem") || elem;
                if (status_elem && importNamespace("CSS").hasClass(status_elem, "async_saving")) return !1;
                var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
                elem && (async.setHandler(function(response) {
                    importDefault("Event").fire(elem, "success", {
                        response: response
                    })
                }), async.setErrorHandler(function(response) {
                    importDefault("Event").fire(elem, "error", {
                        response: response
                    }) !== !1 && importDefault("AsyncResponse").defaultErrorHandler(response)
                }));
                if (status_elem instanceof HTMLElement) {
                    async.setStatusElement(status_elem);
                    var status_class = status_elem.getAttribute("data-status-class");
                    status_class && async.setStatusClass(status_class)
                }
                async.send();
                return !1
            };
            AsyncRequest.post = function post(href, data) {
                new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
                return !1
            };
            AsyncRequest.postStatic = function postStatic(href, data) {
                AsyncRequest.post(href, data)
            };
            AsyncRequest.getLastID = function getLastID() {
                return last_id
            };
            AsyncRequest.ignoreUpdate = function ignoreUpdate() {
                ignore_id_update = !0
            };
            AsyncRequest.getInflightCount = function getInflightCount() {
                return this._inflightCount
            };
            return AsyncRequest
        }();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), importNamespace("PHPQuerySerializer").serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                var _this13 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    var request = _this13._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this13._wrapperRequest && (request.id = _this13._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), importDefault("TimeSlice").guard(function() {
                    importDefault("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: importDefault("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    exports["default"] = AsyncRequest
}), 98);
__d("XLynxAsyncCallbackControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/si/linkclick/ajax_callback/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("FBLynxLogging", ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
        new(c("AsyncRequest"))(b).setData({
            lynx_uri: a
        }).setErrorHandler(function(a) {
            a = a.getError();
            d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.fail." + a)
        }).setTransportErrorHandler(function(a) {
            a = a.getError();
            d("ODS").bumpEntityKey(3861, "linkshim", "click_log.post.transport_fail." + a)
        }).send()
    }
    g.log = a
}), 98);
__d("FBLynxBase", ["$", "FBLynxLogging", "LinkshimHandlerConfig", "URI", "isLinkshimURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function h(a) {
        if (!b("isLinkshimURI")(a)) return null;
        a = a.getQueryData().u;
        return !a ? null : a
    }
    var i = {
        logAsyncClick: function(a) {
            i.swapLinkWithUnshimmedLink(a);
            a = a.getAttribute("data-lynx-uri");
            if (!a) return;
            b("FBLynxLogging").log(a)
        },
        originReferrerPolicyClick: function(a) {
            var c = b("$")("meta_referrer");
            c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
            i.logAsyncClick(a);
            setTimeout(function() {
                c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy
            }, 100)
        },
        swapLinkWithUnshimmedLink: function(a) {
            var c = a.href,
                d = h(new(g || (g = b("URI")))(c));
            if (!d) return;
            a.setAttribute("data-lynx-uri", c);
            a.href = d
        },
        revertSwapIfLynxURIPresent: function(a) {
            var b = a.getAttribute("data-lynx-uri");
            if (!b) return;
            a.removeAttribute("data-lynx-uri");
            a.href = b
        }
    };
    e.exports = i
}), null);
__d("FBLynx", ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = (g || (g = b("URI"))).goURIOnWindow,
        i = {
            alreadySetup: !1,
            setupDelegation: function(a) {
                a === void 0 && (a = !1);
                if (!document.documentElement) return;
                if (document.body == null) {
                    if (a) return;
                    window.setTimeout(function() {
                        i.setupDelegation(!0)
                    }, 100);
                    return
                }
                if (i.alreadySetup) return;
                i.alreadySetup = !0;
                var c = function(a) {
                    var c = i.getMaybeLynxLink(a.target);
                    if (!c) return;
                    var d = c[0];
                    c = c[1];
                    var e = c,
                        f = new(g || (g = b("URI")))(c.href),
                        j;
                    if (b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && (c.dataset && c.dataset.attributes)) {
                        j = b("Base64").decodeObject(c.dataset.attributes);
                        if (j && j.open_link) {
                            var k;
                            for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                            k = c.cloneNode(!0);
                            k.href = f.toString();
                            e = k
                        }
                    }
                    switch (d) {
                        case "async":
                        case "asynclazy":
                            b("FBLynxBase").logAsyncClick(e);
                            break;
                        case "origin":
                            b("FBLynxBase").originReferrerPolicyClick(e);
                            break;
                        case "hover":
                            i.hoverClick(e);
                            break
                    }
                    b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && j && j.open_link && (a.preventDefault(), h(f, window.open("", e.target), !0))
                };
                b("Event").listen(document.body, "click", c);
                b("LinkshimHandlerConfig").middle_click_requires_event && b("Event").listen(document.body, "mouseup", function(a) {
                    a.button == 1 && c(a)
                });
                b("Event").listen(document.body, "mouseover", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "asynclazy":
                        case "origin":
                        case "hover":
                            i.mouseover(a);
                            break
                    }
                });
                b("Event").listen(document.body, "contextmenu", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "hover":
                        case "origin":
                            i.contextmenu(a);
                            break;
                        case "asynclazy":
                            break
                    }
                })
            },
            getMaybeLynxLink: function(a) {
                a = b("Parent").byAttribute(a, "data-lynx-mode");
                if (a instanceof HTMLAnchorElement) {
                    var c = a.getAttribute("data-lynx-mode");
                    switch (c) {
                        case "async":
                        case "asynclazy":
                        case "hover":
                        case "origin":
                            return [c, a];
                        default:
                            return null
                    }
                }
                return null
            },
            hoverClick: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            },
            mouseover: function(a) {
                b("FBLynxBase").swapLinkWithUnshimmedLink(a)
            },
            contextmenu: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            }
        };
    e.exports = i
}), null);
__d("XAsyncRequest", ["AsyncRequest"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            var b = this;
            this.setAllowCrossPageTransition = function(a) {
                b.$1.setAllowCrossPageTransition(a);
                return b
            };
            this.$1 = new(c("AsyncRequest"))(a)
        }
        var b = a.prototype;
        b.setURI = function(a) {
            this.$1.setURI(a);
            return this
        };
        b.setOption = function(a, b) {
            this.$1.setOption(a, b);
            return this
        };
        b.setMethod = function(a) {
            this.$1.setMethod(a);
            return this
        };
        b.setData = function(a) {
            this.$1.setData(a);
            return this
        };
        b.setHandler = function(a) {
            this.$1.setHandler(a);
            return this
        };
        b.setPayloadHandler = function(a) {
            this.setHandler(function(b) {
                return a(b.payload)
            });
            return this
        };
        b.setErrorHandler = function(a) {
            this.$1.setErrorHandler(a);
            return this
        };
        b.send = function() {
            this.$1.send();
            return this
        };
        b.abort = function() {
            this.$1.abort()
        };
        b.setReadOnly = function(a) {
            this.$1.setReadOnly(a);
            return this
        };
        b.setAllowCrossOrigin = function(a) {
            this.$1.setAllowCrossOrigin(a);
            return this
        };
        b.setAllowCredentials = function(a) {
            this.$1.setAllowCredentials(a);
            return this
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("CSTXCookieRecordConsentControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/cookie/consent/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("MaybeSymbol", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = a.Symbol ? a.Symbol : null;
    c = b;
    f["default"] = c
}), 66);
__d("URLSearchParams", ["MaybeSymbol"], (function(a, b, c, d, e, f, g) {
    var h = /\+/g,
        i = /[!\'()*]/g,
        j = /%20/g,
        k = c("MaybeSymbol") ? c("MaybeSymbol").iterator : null;

    function l(a) {
        return encodeURIComponent(a).replace(j, "+").replace(i, function(a) {
            return "%" + a.charCodeAt(0).toString(16)
        })
    }

    function m(a) {
        return decodeURIComponent((a = a) != null ? a : "").replace(h, " ")
    }

    function n(a) {
        var b = a.slice(0),
            c = {
                next: function() {
                    var a = b.length,
                        c = b.shift();
                    return {
                        done: c === void 0 && a <= 0,
                        value: c
                    }
                }
            };
        k && (c[k] = function() {
            return c
        });
        return c
    }
    a = function() {
        function a(a) {
            a === void 0 && (a = "");
            a = a;
            a[0] === "?" && (a = a.substr(1));
            this.$1 = a.length ? a.split("&").map(function(a) {
                a = a.split("=");
                var b = a[0];
                a = a[1];
                return [m(b), m(a)]
            }) : []
        }
        var b = a.prototype;
        b.append = function(a, b) {
            this.$1.push([a, String(b)])
        };
        b["delete"] = function(a) {
            for (var b = 0; b < this.$1.length; b++) this.$1[b][0] === a && (this.$1.splice(b, 1), b--)
        };
        b.entries = function() {
            if (k) return this.$1[k]();
            var a = this.$1.slice(0);
            return n(a)
        };
        b.get = function(a) {
            for (var b = 0, c = this.$1.length; b < c; b++)
                if (this.$1[b][0] === a) return this.$1[b][1];
            return null
        };
        b.getAll = function(a) {
            var b = [];
            for (var c = 0, d = this.$1.length; c < d; c++) this.$1[c][0] === a && b.push(this.$1[c][1]);
            return b
        };
        b.has = function(a) {
            for (var b = 0, c = this.$1.length; b < c; b++)
                if (this.$1[b][0] === a) return !0;
            return !1
        };
        b.keys = function() {
            var a = this.$1.map(function(a) {
                var b = a[0];
                a[1];
                return b
            });
            return k ? a[k]() : n(a)
        };
        b.set = function(a, b) {
            var c = !1;
            for (var d = 0; d < this.$1.length; d++) this.$1[d][0] === a && (c ? (this.$1.splice(d, 1), d--) : (this.$1[d][1] = String(b), c = !0));
            c || this.$1.push([a, String(b)])
        };
        b.toString = function() {
            return this.$1.map(function(a) {
                var b = a[0];
                a = a[1];
                return l(b) + "=" + l(a)
            }).join("&")
        };
        b.values = function() {
            var a = this.$1.map(function(a) {
                a[0];
                a = a[1];
                return a
            });
            return k ? a[k]() : n(a)
        };
        b[k] = function() {
            return this.entries()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DeferredCookie", ["CSTXCookieRecordConsentControllerRouteBuilder", "Cookie", "CookieConsent", "SubscriptionList", "URLSearchParams", "cr:1069930", "cr:1083116", "cr:1083117", "flattenPHPQueryData", "killswitch", "nullthrows", "promiseDone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
        i = !1,
        j = new Map(),
        k = {
            addToQueue: function(a, b, d, e, f, g, i) {
                if (c("CookieConsent").hasConsent(1)) {
                    f ? c("Cookie").setWithoutChecksIfFirstPartyContext(a, b, d, e, i) : c("Cookie").setWithoutChecks(a, b, d, e, i);
                    return
                }
                if (h.has(a)) return;
                h.set(a, {
                    name: a,
                    value: b,
                    nMilliSecs: d,
                    path: e,
                    firstPartyOnly: f,
                    secure: i
                })
            },
            flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT: function() {
                h.forEach(function(a, b) {
                    a.firstPartyOnly ? c("Cookie").setWithoutChecksIfFirstPartyContext(a.name, a.value, a.nMilliSecs, a.path, a.secure) : c("Cookie").setWithoutChecks(a.name, a.value, a.nMilliSecs, a.path, a.secure)
                });
                if (c("killswitch")("DEFERREDCOOKIE_EMPTY_COOKIES_BEFORE_CALLBACK")) {
                    c("CookieConsent").setConsented();
                    for (var a = j, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var e;
                        if (b) {
                            if (d >= a.length) break;
                            e = a[d++]
                        } else {
                            d = a.next();
                            if (d.done) break;
                            e = d.value
                        }
                        e = e;
                        e[1].fireCallbacks()
                    }
                    h.clear()
                } else {
                    h.clear();
                    c("CookieConsent").setConsented();
                    for (var e = j, d = Array.isArray(e), b = 0, e = d ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        if (d) {
                            if (b >= e.length) break;
                            a = e[b++]
                        } else {
                            b = e.next();
                            if (b.done) break;
                            a = b.value
                        }
                        a = a;
                        a[1].fireCallbacks()
                    }
                }
            },
            flushAllCookiesINTERNALONLY: function(a, d, e, f, g) {
                a === void 0 && (a = !1);
                e === void 0 && (e = !1);
                f === void 0 && (f = !1);
                k.flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT();
                var h = {
                    accept_only_essential: f
                };
                d != null && (d = Object.fromEntries(d), h = {
                    optouts: d,
                    accept_only_essential: f
                });
                d = c("flattenPHPQueryData")(h);
                if (!i) {
                    f = c("CSTXCookieRecordConsentControllerRouteBuilder").buildUri({});
                    h = new(c("URLSearchParams"))(location.search).get("ig_3p_controls");
                    if (h === "on") {
                        h = f.addQueryParam("ig_3p_controls", "on");
                        f = (h = h) != null ? h : f
                    }
                    i = !0;
                    var j = function() {
                        g && g();
                        a && location.reload();
                        if (e) {
                            var b = document.getElementsByTagName("iframe");
                            b.length > 0 && location.reload()
                        }
                    };
                    b("cr:1069930") != null ? c("promiseDone")(b("cr:1069930")(f.toString(), {
                        data: d,
                        method: "POST"
                    }), function() {
                        return j()
                    }, function(a) {
                        b("cr:1083117") && b("cr:1083117")("Cookie consent has not been set successfully: " + a.errorMsg, "comet_infra")
                    }) : b("cr:1083116") != null && new(b("cr:1083116"))(f.toString()).setData(d).setHandler(function() {
                        return j()
                    }).send()
                }
            },
            registerCallbackOnCookieFlush: function(a, b) {
                c("CookieConsent").hasConsent(a) ? b() : (j.has(a) || j.set(a, new(c("SubscriptionList"))()), c("nullthrows")(j.get(a)).add(b))
            },
            canEmbedThirdPartyPixel: function() {
                return c("CookieConsent").isCookiesBlocked() || !c("CookieConsent").hasConsent(2) ? !1 : h.size === 0
            }
        };
    a = k;
    g["default"] = a
}), 98);
__d("ClientServiceWorkerMessage", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = b, this.$3 = c
        }
        var b = a.prototype;
        b.sendViaController = function() {
            if (!navigator.serviceWorker || !navigator.serviceWorker.controller) return;
            var a = new self.MessageChannel();
            this.$3 && (a.port1.onmessage = this.$3);
            navigator.serviceWorker.controller.postMessage({
                command: this.$1,
                data: this.$2
            }, [a.port2])
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("getContextualParent", ["ge"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        b === void 0 && (b = !1);
        var d = !1;
        a = a;
        do {
            if (a instanceof Element) {
                var e = a.getAttribute("data-ownerid");
                if (e) {
                    a = c("ge")(e);
                    d = !0;
                    continue
                }
            }
            a = a.parentNode
        } while (b && a && !d);
        return a
    }
    g["default"] = a
}), 98);