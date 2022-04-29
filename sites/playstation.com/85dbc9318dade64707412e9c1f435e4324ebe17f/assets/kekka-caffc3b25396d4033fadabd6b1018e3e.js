"use strict"

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}
define("kekka/about/cam-site-map/controller", ["exports", "@ember/controller", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        cobrandingDataService: (0, n.inject)("cobrandingData"),
        modalService: (0, n.inject)("modal"),
        actions: {
            selectLink: function(e) {
                e.isExternal ? this.send("redirectViaConfirm", e) : this.send("redirectToApp", e)
            },
            redirectViaConfirm: function(e) {
                var t = this
                this.modalService.openModal("confirm", {
                    descriptionCaption: "msg_redirecting_general",
                    primaryCaption: "msg_sf_regcam_action_continue",
                    secondaryCaption: "msg_cancel_psn"
                }).then((function(n) {
                    if ("confirmed" === n.status) t.send("redirectToApp", e), n.closeModal()
                    else n.closeModal()
                }))
            },
            redirectToApp: function(e) {
                var t = e.isExternal,
                    n = e.uriKey,
                    i = e.uriBy,
                    r = e.entry,
                    a = "env" === i ? n : this.cobrandingDataService.get("dataList")[n],
                    o = {
                        entry: r
                    },
                    s = {
                        unhandledQueryParams: !0,
                        handledQueryParams: {
                            excludeKeys: ["account_type", "region", "unified_country", "unified_language", "entry", "unknown_country"]
                        }
                    }
                t ? this.send("openNewWindow", a, o, s) : this.send("redirectTo", {
                    redirectUri: a,
                    params: o,
                    options: s
                })
            }
        }
    })
    e.default = i
})), define("kekka/about/cam-site-map/route", ["exports", "@ember/routing/route", "@ember/service", "ember-copy", "hokkai/utils/string-utils", "kekka/config/environment"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = {
            ca: [{
                sectionTitle: "msg_account_psn",
                uriKey: "CA_CAM_SECURITY",
                uriBy: "env",
                links: [{
                    name: "msg_account_security_header",
                    entry: "security",
                    isExternal: !1,
                    items: ["msg_id_email_psn", "msg_pw", "msg_sf_regcam_sq_header", "msg_account_mobile_phones", "msg_account_feature_name_2sv", "msg_sign_out_devices"]
                }]
            }, {
                sectionTitle: "msg_other_settings",
                uriKey: "serviceCAMUrl",
                uriBy: "coBranding",
                links: [{
                    name: "msg_other_settings",
                    entry: "",
                    isExternal: !0,
                    items: []
                }]
            }],
            psn: [{
                sectionTitle: "msg_account_psn",
                uriKey: "PR_FAMILY_MANAGEMENT",
                uriBy: "env",
                links: [{
                    name: "msg_basic_account_information",
                    entry: "account_info",
                    isExternal: !1,
                    items: ["msg_name", "msg_language", "msg_residential_address"]
                }, {
                    name: "msg_account_security_header",
                    entry: "security",
                    buildTarget: [""],
                    isExternal: !1,
                    items: ["msg_id_email_psn", "msg_pw", "msg_sf_regcam_sq_header", "msg_account_mobile_phones", "msg_account_feature_name_2sv", "msg_sign_out_devices"]
                }, {
                    name: "msg_account_security_header",
                    uriKey: "CA_CAM_SECURITY",
                    uriBy: "env",
                    entry: "security",
                    buildTarget: ["pdr_ca"],
                    isExternal: !0,
                    items: ["msg_id_email_psn", "msg_pw", "msg_sf_regcam_sq_header", "msg_account_mobile_phones", "msg_account_feature_name_2sv", "msg_sign_out_devices"]
                }]
            }, {
                sectionTitle: "msg_psn",
                uriKey: "PR_FAMILY_MANAGEMENT",
                uriBy: "env",
                links: [{
                    name: "msg_profile",
                    entry: "psn_profile",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_psn_privacy_settings",
                    entry: "privacy_settings",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_family_management",
                    entry: "family_management",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_payment_management",
                    entry: "payment_management",
                    accountType: "master",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_sub_account_limit",
                    entry: "payment_management",
                    accountType: "sub",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_code_input_psn",
                    entry: "redeem_code",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_subscription",
                    entry: "subscription",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_transaction_history_psn",
                    entry: "transaction_history",
                    isExternal: !1,
                    items: []
                }]
            }, {
                sectionTitle: "msg_other_settings",
                uriKey: "PR_FAMILY_MANAGEMENT",
                uriBy: "env",
                links: [{
                    name: "msg_tpi_account_linking",
                    entry: "auth_apps_management",
                    accountType: "master",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_device_management",
                    entry: "device_management",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_bravia_settings",
                    entry: "pin",
                    isExternal: !1,
                    items: []
                }, {
                    name: "msg_notification_preferences",
                    entry: "communication",
                    accountType: "master",
                    isExternal: !1,
                    items: []
                }]
            }]
        },
        s = t.default.extend({
            countryResourceService: (0, n.inject)("country-resource"),
            model: function() {
                var e = this.appParamsService,
                    t = this.countryResourceService,
                    n = (0, i.copy)(o[a.default.APP.centralAuthServiceURL && e.get("isApplicationForDCIM") ? "ca" : "psn"], !0)
                return n.forEach((function(n) {
                    n.links = n.links.filter((function(i) {
                        return (!i.region || i.region === e.get("region")) && ((!i.accountType || i.accountType === e.get("accountType")) && (!(i.hasOwnProperty("buildTarget") && !i.buildTarget.includes(PdrIF.buildTarget() || "")) && (("auth_apps_management" !== i.entry || !0 === t.config.enable_account_link_in_cam) && (i.description = i.items.map((function(e) {
                            return (0, r.localizeString)(e)
                        })).join(", "), i.uriKey = i.uriKey || n.uriKey, i.uriBy = i.uriBy || n.uriBy, !0))))
                    }))
                })), n
            },
            setupController: function(e, t) {
                this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_site_map"), this.modelFor("about").set("headerTitle", "msg_site_map")
            }
        })
    e.default = s
})), define("kekka/about/cam-site-map/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "kqxkAq9A",
        block: '[[[10,"ul"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[33,2]],null]],null],null,[[[1,"        "],[10,"li"],[15,0,[52,[30,2],"separator-self"]],[12],[1,"\\n            "],[10,0],[14,0,"label description-small bold"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],[[30,1,["sectionTitle"]]],null]],[13],[1,"\\n            "],[10,"ul"],[14,0,"indented-text"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,1,["links"]]],null]],null],null,[[[1,"                    "],[10,"li"],[14,0,"separator-self small"],[12],[1,"\\n                        "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,6],null,[["action","param","isTextDescriptionTypeSmall","isRedirectLink","classNames"],[[28,[37,7],[[30,0],"selectLink"],null],[28,[37,8],null,[["uriKey","uriBy","entry","isExternal"],[[30,3,["uriKey"]],[30,3,["uriBy"]],[30,3,["entry"]],[30,3,["isExternal"]]]]],false,true,"with-suffix-icon"]],[["default"],[[[[1,"                                "],[1,[28,[35,5],[[30,3,["name"]]],null]],[1,"\\n"],[41,[30,3,["isExternal"]],[[[1,"                                    "],[10,0],[14,0,"external-icon"],[12],[13],[1,"\\n"]],[]],null]],[]]]]],[1,"                        "],[13],[1,"\\n"],[41,[30,3,["description"]],[[[1,"                            "],[10,0],[14,0,"label sub-message site-map"],[12],[1,"\\n                                "],[1,[30,3,["description"]]],[1,"\\n                            "],[13],[1,"\\n"]],[]],null],[1,"                    "],[13],[1,"\\n"]],[3]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[1,2]],null],[13],[1,"\\n"]],["sections","index","link"],false,["each","-track-array","model","if","appParamsService","pdr-loc","pdr-text-link","action","hash"]]',
        moduleName: "kekka/about/cam-site-map/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/about/index/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            openLink: function(e) {
                "siteMap" !== e.testId ? this.send("openNewWindow", e.url) : this.transitionToRoute("about.camSiteMap")
            }
        }
    })
    e.default = n
})), define("kekka/about/index/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return this.modelFor("about")
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_terms_to_site_map"), t.setProperties({
                headerTitle: null,
                href: null
            })
        }
    })
    e.default = n
})), define("kekka/about/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "z6FSBT7d",
        block: '[[[1,[28,[35,0],null,[["country","language","region","isSubAccount","action"],[[33,1,["country"]],[33,1,["language"]],[33,1,["region"]],[33,1,["isSubAccount"]],[28,[37,2],[[30,0],"openLink"],null]]]]],[1,"\\n"]],[],false,["pdr-legal-menu","model","action"]]',
        moduleName: "kekka/about/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/about/route", ["exports", "@ember/service", "@ember/routing/route", "@ember/object"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
            language: null,
            country: null,
            headerTitle: null,
            href: null
        }),
        a = n.default.extend({
            cobrandingDataService: (0, t.inject)("cobrandingData"),
            modalService: (0, t.inject)("modal"),
            activate: function() {
                this._super(), this.modalService.bindOutletRoute(this)
            },
            deactivate: function() {
                this._super(), this.modalService.unbindOutletRoute(this)
            },
            model: function(e, t) {
                var n = this.appParamsService,
                    i = this.localizationService,
                    a = n.get("region"),
                    o = n.get("isSubAccount"),
                    s = n.get("unifiedCountry"),
                    l = n.unifiedLanguage,
                    c = l.actualValue,
                    d = l.convertedValue,
                    u = l.isConverted,
                    p = d
                if (u && t.trigger(!1, "convertedLanguage", c, d), n.get("isAvailableCobrandingData") && n.get("isApplicationForDCIM") && n.get("hasRequestLocale")) {
                    var m = i.parseUnifiedLocale(n.get("requestLocale"))
                    m && (s = m.country, p = m.language)
                } else {
                    var g = i.translateUnifiedToNpLocale(p),
                        f = i.translateNpToUnifiedLocale("".concat(g.language, "_").concat(g.country))
                    f.country !== s && (s = f.country, p = f.language)
                }
                return i.updateStrings(p).then((function() {
                    return r.create({
                        region: a,
                        country: s,
                        language: p,
                        isSubAccount: o
                    })
                }))
            },
            afterModel: function(e) {
                var t = this.appParamsService
                if (t.get("isAvailableCobrandingData") && t.get("isApplicationForDCIM")) return this.cobrandingDataService.initialize(t.get("originClientId"), e.language)
            }
        })
    e.default = a
})), define("kekka/about/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "WHw4yyas",
        block: '[[[6,[39,0],null,[["country","language","locale"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[1,[28,[35,3],null,[["disabledBack","isCancelWithDialog","enabledCancel","locale"],[true,false,[33,4,["enabledCancel"]],[33,2,["currentLocale"]]]]]],[1,"\\n"],[41,[33,1,["headerTitle"]],[[[1,"        "],[10,0],[14,0,"columns fullscreen title"],[12],[1,"\\n            "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n            "],[10,0],[14,0,"fullscreen-maximum flex-fitting"],[12],[1,"\\n"],[6,[39,6],null,[["isSmall","disabledBack","autoBackControl","locale"],[true,false,true,[33,2,["currentLocale"]]]],[["default"],[[[[1,"                    "],[1,[28,[35,7],[[33,1,["headerTitle"]]],null]],[1,"\\n"]],[]]]]],[1,"            "],[13],[1,"\\n            "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[6,[39,8],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,9],null,[["classNames"],["rows fitting-parent"]],[["default"],[[[[1,"            "],[10,0],[15,0,[29,["separator-pagetop",[52,[51,[33,1,["headerTitle"]]]," about"]," row-unshrink"]]],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns fullscreen row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n                "],[10,0],[14,0,"page-items fullscreen-maximum flex-fitting"],[12],[1,"\\n                    "],[46,[28,[37,12],null,null],null,null,null],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n            "],[10,0],[15,0,[29,["separator-pagefooter",[52,[51,[33,1,["headerTitle"]]]," about"]," row-unshrink"]]],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[]]]]]],[],false,["kekka-layout","model","localizationService","kekka-sony-header","appParamsService","if","kekka-title-header","pdr-loc","pdr-main-content","kekka-scroller","unless","component","-outlet"]]',
        moduleName: "kekka/about/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "kekka/config/environment"], (function(e, t, n, i, r) {
    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t) {
        return s = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, s(e, t)
    }

    function l(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ("function" == typeof Proxy) return !0
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }()
        return function() {
            var n, i = u(e)
            if (t) {
                var r = u(this).constructor
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments)
            return c(this, n)
        }
    }

    function c(e, t) {
        if (t && ("object" === _typeof(t) || "function" == typeof t)) return t
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined")
        return d(e)
    }

    function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
    }

    function u(e) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, u(e)
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var m = function(e) {
        (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function")
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && s(e, t)
        })(m, e)
        var t, i, c, u = l(m)

        function m() {
            var e
            a(this, m)
            for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o]
            return p(d(e = u.call.apply(u, [this].concat(i))), "modulePrefix", r.default.modulePrefix), p(d(e), "podModulePrefix", r.default.podModulePrefix), p(d(e), "Resolver", n.default), p(d(e), "customEvents", {
                transitionend: "transitionend",
                transitionEnd: "transitionend",
                webkitTransitionEnd: "transitionend",
                MozTransitionEnd: "transitionend",
                mozTransitionEnd: "transitionend",
                oTransitionEnd: "transitionend",
                otransitionend: "transitionend"
            }), e
        }
        return t = m, (i = [{
            key: "ready",
            value: function() {
                var e = window.Pdr.GCT
                e.timings && (e.timeEnd("initialize"), e.time("initialTransition")), FastClick.attach(document.body)
            }
        }]) && o(t.prototype, i), c && o(t, c), Object.defineProperty(t, "prototype", {
            writable: !1
        }), m
    }(t.default)
    e.default = m, (0, i.default)(m, r.default.modulePrefix)
})), define("kekka/application/confirmation/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "OwduwDx0",
        block: '[[[1,[28,[35,0],null,[["descriptionCaption","secondaryCaption","primaryCaption","noSecondary","country","language","locale","cancelAction","cancelParam","confirmAction","confirmParam"],[[33,1,["model","descriptionCaption"]],[33,1,["model","secondaryCaption"]],[33,1,["model","primaryCaption"]],[33,1,["model","noSecondary"]],[33,2,["data","legalCountry","screenValue"]],[33,2,["data","language","screenValue"]],[33,3,["currentLocale"]],[33,1,["model","cancelAction"]],[33,1,["model","cancelParam"]],[33,1,["model","confirmAction"]],[33,1,["model","confirmParam"]]]]]],[1,"\\n"]],[],false,["kekka-confirmation-popup","modalService","model","localizationService"]]',
        moduleName: "kekka/application/confirmation/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/application/controller", ["exports", "@ember/debug", "@ember/object", "@ember/object/computed", "@ember/controller", "@ember/service", "hokkai/utils/string-utils", "kekka/services/app-interface"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = r.default.extend(s.QueryParamsMixin, {
        childrenPrivacyService: (0, a.inject)("children-privacy"),
        nonInteraction: !1,
        pageNameId: null,
        hideHeader: (0, i.and)("oskOpened", "appParamsService.isMobile"),
        isEnabledChildPrivacy: (0, i.readOnly)("childrenPrivacyService.isEnabledChildPrivacy"),
        regionForAbout: (0, i.readOnly)("childrenPrivacyService.region"),
        accountTypeForAbout: (0, i.readOnly)("childrenPrivacyService.accountType"),
        disableInteraction: function() {
            this.set("nonInteraction", !0)
        },
        enableInteraction: function() {
            this.set("nonInteraction", !1)
        },
        onLocaleChanged: (0, n.observer)("localizationService.currentLocale", (function() {
            this.updatePageTitle()
        })),
        updatePageTitle: (0, n.observer)("pageNameId", (function() {
            var e = this.get("appParamsService.isApplicationForDCIM")
            if (this.pageNameId) {
                var t
                this.pageNameIdUnlocalized ? (t = this.pageNameId, this.toggleProperty("pageNameIdUnlocalized")) : t = (0, o.localizeStringWithoutReplace)(this.pageNameId).toString()
                var n = e ? "msg_page_name_sony" : "msg_html_title_with_pagename"
                window.document.title = (0, o.localizeStringWithoutReplace)(n, t)
            } else {
                var i = e ? "msg_sony_name" : "msg_html_title_without_pagename"
                window.document.title = (0, o.localizeStringWithoutReplace)(i)
            }
        }))
    })
    e.default = l
})), define("kekka/application/implicit-flow/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "yL9NrmK2",
        block: '[[[1,[28,[35,0],null,[["iframeSrcURL","disableCancelButton","transparentBackground","disableLoadingIcon"],[[33,1,["model","iframeSrcURL"]],true,[33,1,["model","transparentBackground"]],[33,1,["model","disableLoadingIcon"]]]]]],[1,"\\n"]],[],false,["kekka-iframe-popup","modalService"]]',
        moduleName: "kekka/application/implicit-flow/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/application/password-gating/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "YNJBra+T",
        block: '[[[1,[28,[35,0],null,[["signinId","locale","signoutAction"],[[33,1,["model","signinId"]],[33,2,["currentLocale"]],[33,1,["model","signoutAction"]]]]]],[1,"\\n"]],[],false,["kekka-password-popup","modalService","localizationService"]]',
        moduleName: "kekka/application/password-gating/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/application/route", ["exports", "@ember/runloop", "@ember/application/deprecations", "@ember/debug", "@ember/polyfills", "@ember/service", "@ember/routing/route", "@ember/object", "ember"], (function(e, t, n, i, r, a, o, s, l) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = s.default.extend({
            onUnhandledCloseFunc: null
        }),
        d = o.default.extend({
            telemetryService: (0, a.inject)("telemetry"),
            appInterfaceService: (0, a.inject)("app-interface"),
            appParamsService: (0, a.inject)("app-params"),
            loadingService: (0, a.inject)("loading"),
            historyService: (0, a.inject)("history"),
            noticeService: (0, a.inject)("notice"),
            modalService: (0, a.inject)("modal"),
            setupService: (0, a.inject)("setup-service-config"),
            router: (0, a.inject)("router"),
            init: function() {
                var e = this
                this._super(), this.historyService.initialize()
                var t = this.modalService
                t.registerModal("confirm", "application/confirmation"), t.registerModal("passwordGating", "application/password-gating", {
                    notCloseOnError: !0
                }), t.registerModal("implicitFlow", "application/implicit-flow", {
                    notCloseOnError: !0,
                    unSendAnalyticTransitEvent: !0
                }), this.router.on("routeWillChange", (function(t) {
                    !t.isAborted && e._routeWillChange(t)
                }))
            },
            willDestroy: function() {
                this._super.apply(this, arguments)
                var e = this.modalService
                e.unregisterModal("confirm"), e.unregisterModal("passwordGating"), e.unregisterModal("implicitFlow")
            },
            beforeModel: function() {
                if (this.setupService.importFeatureConfig && "function" == typeof this.setupService.importFeatureConfig) return this.get("setupService").importFeatureConfig().catch((function() {}))
            },
            model: function() {
                return c.create()
            },
            _onUnhandledClose: function() {
                var e = this.controller.get("model.onUnhandledCloseFunc"),
                    t = this
                e ? e().catch((function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    t.send("onUnhandledClose", e.isReturnToPrevApp)
                })) : this.send("onUnhandledClose")
            },
            _routeWillChange: function(e) {
                var n = this,
                    i = e.targetName,
                    r = this.historyService,
                    a = this.modalService
                if (a.get("isOpened") ? "globalError" === i ? a.closeAllModal() : (a.closeModal(), a.get("enableTransitionOnCloseModal") ? r.willTransition(i, this, (function(t) {
                        e.abort(), r.preventTransition(), t && n.send("error", t)
                    })) : (e.abort(), r.preventTransition())) : "globalError" !== i && r.willTransition(i, this, (function(t) {
                        e.abort(), r.preventTransition(), t && n.send("error", t)
                    })), window.navigator.userAgent.match(/Edge/)) {
                    var o = "countermeasureEdge",
                        s = document.createElement("div")
                    s.id = o, s.style = "position: absolute; z-index: -1000;", document.body.appendChild(s), (0, t.next)((function() {
                        document.body.querySelector("#".concat(o)).remove()
                    }))
                }
            },
            actions: {
                error: function(e, t) {
                    if (!this.loadingService.handleError(e))
                        if (!0 === t) this.historyService.one("didChange", this, (function() {
                            this.send("error", e)
                        }))
                    else {
                        var n = function() {
                            n = null, this.controllerFor("application").enableInteraction(), this.appParamsService.storage.get("redirectParams") ? this.transitionTo("retryAuthorize") : this.get("appParamsService.routeForGlobalError") ? this.transitionTo(this.get("appParamsService.routeForGlobalError")) : this.transitionTo("globalError")
                        }
                        this.historyService.handleError(this, n), this.noticeService.setGlobalError(e, this, n)
                    }
                    return !1
                },
                back: function() {
                    this.historyService.back() || this.send("closeOnCancel")
                },
                backTo: function(e) {
                    var t = this.historyService
                    t.backTo(e) || (this.transitionTo(e), t.reset())
                },
                resetRouteHistory: function() {
                    this.historyService.reset()
                },
                closeOnSucceed: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    this.appInterfaceService.closeOnSucceed(this, (function() {
                        this.send("onUnhandledClose", e.isReturnToPrevApp)
                    }), e)
                },
                closeOnCancel: function(e) {
                    if (e) {
                        var t = this
                        this.modalService.openModal("confirm", {
                            descriptionCaption: e
                        }).then((function(e) {
                            e.closeModal && e.closeModal(), "confirmed" === e.status && t.send("closeOnCancel")
                        }))
                    } else this.appInterfaceService.closeOnCancel(this, this._onUnhandledClose)
                },
                closeOnError: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                    this.appInterfaceService.closeOnError(e, t, n, this, this._onUnhandledClose)
                },
                redirectTo: function(e) {
                    this.appInterfaceService.redirectTo(e)
                },
                openNewWindow: function(e, t, n) {
                    this.appInterfaceService.openNewWindow(e, t, n)
                },
                openAbout: function(e) {
                    var t = {
                        entry: "about",
                        region: this.controller.get("regionForAbout"),
                        account_type: this.controller.get("accountTypeForAbout"),
                        unified_country: e.country,
                        unified_language: e.language,
                        unknown_country: "".concat(e.unknownCountry),
                        PlatformPrivacyWs1: this.get("appParamsService.platformPrivacyWs1")
                    }
                    e.originClientId && (t.origin_client_id = e.originClientId), e.requestLocale && (t.request_locale = e.requestLocale), this.send("openNewWindow", null, t, {
                        useHashQuery: !0
                    })
                },
                onUnhandledClose: function(e) {
                    this.transitionTo("terminator.".concat(e ? "done" : "index"))
                },
                openModal: function(e, t, n) {
                    this.modalService.openModalRaw(t, null, {
                        controller: e.controller
                    }).then((function(e) {
                        e.closeModal && e.closeModal(), n && n()
                    }))
                },
                closeModal: function() {
                    this.modalService.closeModal()
                },
                sendAnalyticTransitEvent: function(e) {
                    this.telemetryService.sendTransitionEvent(e)
                },
                clearNotice: function() {
                    this.noticeService.clearGlobalError()
                },
                convertedLanguage: function(e, t) {
                    this._sendInfoEvent({
                        code: "CONVERSION",
                        message: JSON.stringify({
                            actualValue: e,
                            convertedValue: t
                        })
                    })
                },
                convertedDefaultLanguage: function(e, t) {
                    this._sendInfoEvent({
                        code: "DEFAULT_LANGUAGE",
                        message: JSON.stringify({
                            actualValue: e,
                            convertedValue: t
                        })
                    })
                }
            },
            _sendInfoEvent: function(e) {
                this.noticeService.trigger("error", e, null, "INFO")
            }
        })
    e.default = d
})), define("kekka/application/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "dkCAOvnM",
        block: '[[[6,[39,0],null,[["isOpenedModal","nonInteraction","oskOpened"],[[33,1,["isOpened"]],[33,2],[33,3]]],[["default"],[[[[1,"    "],[46,[28,[37,5],null,null],null,null,null],[1,"\\n"]],[]]]]]],[],false,["kekka-application","modalService","nonInteraction","oskOpened","component","-outlet"]]',
        moduleName: "kekka/application/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/kekka-2sv-phone-number-display/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        tagName: "div",
        classNames: ["rows", "rows-center"],
        attributeBindings: ["data-components"],
        "data-components": "kekka-2sv-phone-number-display",
        appParamsService: (0, t.inject)("app-params"),
        value: null,
        is2sv: !1
    })
    e.default = i
})), define("kekka/components/kekka-2sv-phone-number-display/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "3TrkyRDB",
        block: '[[[1,"\\n"],[10,0],[14,0,"bold description-regular theme-primary-black"],[12],[1,[28,[35,0],null,[["value"],[[33,1]]]]],[13],[1,"\\n"],[41,[33,3],[[[1,"    "],[10,0],[14,0,"row-unshrink separator-pageitems two-line-list"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns"],[12],[1,"\\n        "],[10,0],[14,0,"column-unshrink list-cam-selected-container grid-center"],[12],[1,"\\n            "],[10,0],[14,0,"icon-selected-small"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-icon column-unshrink"],[12],[13],[1,"\\n        "],[10,0],[14,0,"column-flex description-small check-item-text "],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],["msg_account_feature_name_2sv"],null]],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],[],false,["pdr-masked-text","value","if","is2sv","appParamsService","pdr-loc"]]',
        moduleName: "kekka/components/kekka-2sv-phone-number-display/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-application/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    function r(e) {
        e.target.blur()
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = i.default.extend({
        tagName: "div",
        attributeBindings: ["data-components", "tabindex"],
        "data-components": "kekka-application",
        classNames: ["l-fixed", "l-viewport", "prevent-rtl-rightalign"],
        classNameBindings: ["nonInteraction:unclickable", "isOpenedModal:is-modal-opened", "isNotEdge:noedge"],
        appInterfaceService: (0, n.inject)("app-interface"),
        appParamsService: (0, n.inject)("app-params"),
        tabindex: -1,
        _initialHeight: window.innerHeight,
        _resizeDetected: function() {
            var e = window.innerHeight
            0 === this.element.querySelectorAll("input:focus, select:focus").length && this.set("_initialHeight", e), this.set("oskOpened", e !== this._initialHeight)
        },
        didInsertElement: function() {
            this._super.apply(this, arguments), this.appInterfaceService.didRender(), window.onresize = this._resizeDetected.bind(this)
        },
        toggleViewFocusEvent: (0, t.observer)("nonInteraction", (function() {
            var e = this.element
            e && (this.nonInteraction ? e.addEventListener("focus", r, !0) : e.removeEventListener("focus", r, !0))
        })),
        init: function() {
            this._super(), this.focusToModalOrBlur = this.focusToModalOrBlur.bind(this)
        },
        focusToModalOrBlur: function(e) {
            var t = this.element.querySelector("#modalarea")
            t && t.contains(e.target) || this.modalService.focusToModal() || r(e)
        },
        modalService: (0, n.inject)("modal"),
        toggleFrameFocusEvent: (0, t.observer)("isOpenedModal", (function() {
            var e = this.element
            if (e) {
                var t = e.querySelector("#framepage")
                t && (this.isOpenedModal ? t.addEventListener("focus", this.focusToModalOrBlur, !0) : t.removeEventListener("focus", this.focusToModalOrBlur, !0))
            }
        })),
        isNotEdge: (0, t.computed)((function() {
            return !window.navigator.userAgent.match(/Edge/)
        }))
    })
    e.default = a
})), define("kekka/components/kekka-application/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "XJhbFEzu",
        block: '[[[18,1,null],[1,"\\n"],[41,[30,0,["appParamsService","isIE"]],[[[1,"    "],[10,"input"],[14,1,"focus-target-after-captcha"],[14,"tabindex","-1"],[15,"aria-label",[28,[37,2],["msg_recaptcha_text"],null]],[14,4,"text"],[12],[13],[1,"\\n"]],[]],null]],["&default"],false,["yield","if","pdr-loc-attr"]]',
        moduleName: "kekka/components/kekka-application/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-cam-phone-list/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "kekka-cam-phone-list",
        appParamsService: (0, t.inject)("app-params"),
        phoneList: null,
        selectPhoneAction: null,
        actions: {
            selectPhone: function(e) {
                this.sendAction("selectPhoneAction", this.phoneList[e].id)
            }
        }
    })
    e.default = i
})), define("kekka/components/kekka-cam-phone-list/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "7Euh5FS4",
        block: '[[[1,"\\n"],[41,[33,1],[[[1,"    "],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[33,1]],null]],null],null,[[[1,"            "],[1,[28,[35,4],null,[["listType","action","actionParam","model"],["listButton","selectPhone",[30,2],[28,[37,5],null,[["component","componentClass","componentParams","subTextClass","subText"],["pdr-masked-text","bold-text",[28,[37,5],null,[["value"],[[30,1,["phone"]]]]],[52,[30,1,["isMainAnd2svActivated"]],"list-thumbnail pdr-icon-selected-small check-item-text"],[52,[30,1,["isMainAnd2svActivated"]],"msg_account_feature_name_2sv"]]]]]]]],[1,"\\n"]],[1,2]],null],[1,"    "],[13],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"columns separator-horizontal-hairline bottom"],[12],[1,"\\n        "],[10,0],[14,0,"column-unshrink separator-pageitems beside narrow"],[12],[13],[1,"\\n        "],[10,0],[14,0,"column-flex list-cam-singleline grid-parent"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular empty"],[15,"dir",[33,6,["bidi"]]],[12],[1,"\\n                "],[1,[28,[35,7],["msg_no_mobile_phone"],null]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]]],[1,"\\n"],[10,0],[15,0,[29,["separator-pageitems ",[52,[51,[33,9]],"small"]]]],[12],[13],[1,"\\n"]],["phoneData","index"],false,["if","phoneList","each","-track-array","pdr-li","hash","appParamsService","pdr-loc","unless","isSinglePane"]]',
        moduleName: "kekka/components/kekka-cam-phone-list/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-confirmation-popup/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        modalService: (0, n.inject)("modal"),
        appParamsService: (0, n.inject)("app-params"),
        attributeBindings: ["data-components"],
        "data-components": "kekka-confirmation-popup",
        descriptionCaption: null,
        primaryCaption: null,
        secondaryCaption: null,
        confirmParam: null,
        cancelParam: null,
        country: null,
        language: null,
        locale: null,
        primary: (0, t.computed)("primaryCaption", (function() {
            return this.primaryCaption || "msg_yes"
        })),
        secondary: (0, t.computed)("secondaryCaption", (function() {
            return this.secondaryCaption || "msg_no"
        })),
        _buttonClassName: (0, t.computed)("noSecondary", (function() {
            return this.noSecondary ? "fitting-width" : "column-flex"
        })),
        actions: {
            confirm: function() {
                this.confirmAction ? this.sendAction("confirmAction", this.confirmParam) : this.modalService.closeModal("confirmed")
            },
            cancel: function() {
                this.cancelAction ? this.sendAction("cancelAction", this.cancelParam) : this.modalService.closeModal("cancel")
            }
        }
    })
    e.default = r
})), define("kekka/components/kekka-confirmation-popup/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "j8JhXLxA",
        block: '[[[6,[39,0],null,[["isDialog","isFixedHeight"],[true,false]],[["default"],[[[[6,[39,1],null,[["class"],["columns-center row-flex"]],[["default"],[[[[1,"        "],[10,0],[14,0,"page-items dialog-popup"],[12],[1,"\\n            "],[10,0],[14,0,"separator-pageitems dialog"],[12],[13],[1,"\\n"],[41,[33,3],[[[1,"                "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],[[33,3]],null]],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],[[[1,"                "],[18,1,null],[1,"\\n"]],[]]],[1,"            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n"],[41,[51,[33,8]],[[[1,"                    "],[1,[28,[35,9],null,[["caption","country","language","locale","action","class"],[[33,10],[33,11],[33,12],[33,13],"cancel",[33,14]]]]],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems beside column-unshrink"],[12],[13],[1,"\\n"]],[]],null],[1,"                "],[1,[28,[35,15],null,[["caption","country","language","locale","action","class","isLoading"],[[33,16],[33,11],[33,12],[33,13],"confirm",[33,14],[33,17]]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems dialog"],[12],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]]]]],[]]]]]],["&default"],false,["pdr-popup-frame","pdr-main-content","if","descriptionCaption","appParamsService","pdr-loc","yield","unless","noSecondary","pdr-secondary-button","secondary","country","language","locale","_buttonClassName","pdr-primary-button","primary","isLoading"]]',
        moduleName: "kekka/components/kekka-confirmation-popup/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-iframe-popup/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        modalService: (0, n.inject)("modal"),
        attributeBindings: ["data-components"],
        classNameBindings: ["backgroundClass"],
        classNames: ["modal", "scroller"],
        "data-components": "kekka-iframe-popup",
        appParamsService: (0, n.inject)("app-params"),
        locale: null,
        iframeSrcURL: "",
        disableCancelButton: !1,
        _loading: !0,
        backgroundClass: (0, t.computed)("transparentBackground", "appParamsService.isSinglePane", (function() {
            return this.transparentBackground ? null : this.get("appParamsService.isSinglePane") ? "theme-white" : "theme-dimmer"
        })),
        loadingIconClass: (0, t.computed)("disableLoadingIcon", "appParamsService.isSinglePane", (function() {
            return this.disableLoadingIcon ? null : this.get("appParamsService.isSinglePane") ? "is-page-loading" : "is-page-loading white"
        })),
        actions: {
            onHideIframe: function() {
                this.set("_loading", !0)
            },
            onShowIframe: function() {
                this.set("_loading", !1)
            },
            onSuccess: function(e) {
                this.modalService.closeModal("success", e)
            },
            onFail: function(e) {
                this.modalService.closeModal("fail", e)
            },
            onCancel: function(e) {
                this.modalService.closeModal("cancel", e)
            },
            onTimeout: function() {
                this.modalService.closeModal("timeout")
            }
        }
    })
    e.default = r
})), define("kekka/components/kekka-iframe-popup/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "pzqhtrUi",
        block: '[[[10,0],[15,0,[29,["rows fitting ",[52,[33,1],"page-iframe-show","page-iframe-hidden"]]]],[12],[1,"\\n"],[41,[51,[33,3]],[[[1,"        "],[11,0],[24,"role","button"],[24,0,"header-icon cancel icon-header-close"],[16,"title",[28,[37,4],["msg_close_vb"],null]],[16,"dir",[33,5,["bidi"]]],[4,[38,6],[[30,0],"onCancel"],null],[12],[13],[1,"\\n"]],[]],null],[1,"    "],[10,0],[14,0,"rows fitting"],[12],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-center is-align-center"],[12],[1,"\\n"],[41,[33,7],[[[1,"                "],[10,0],[15,0,[36,7]],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[15,0,[52,[33,1],"fitting page-iframe-hidden","fitting page-iframe-show"]],[12],[1,"\\n    "],[1,[28,[35,8],null,[["classNames","iframeSrcURL","iframeClassName","hideIframe","showIframe","success","fail","cancel","timeout"],["page-iframe-popup",[33,9],"page-iframe-popup","onHideIframe","onShowIframe","onSuccess","onFail","onCancel","onTimeout"]]]],[1,"\\n"],[13],[1,"\\n"]],[],false,["if","_loading","unless","disableCancelButton","pdr-loc-attr","appParamsService","action","loadingIconClass","kekka-iframe","iframeSrcURL"]]',
        moduleName: "kekka/components/kekka-iframe-popup/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-iframe/component", ["exports", "jquery", "@ember/runloop", "@ember/object", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = /^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/,
        o = r.default.extend({
            tagName: "iframe",
            classNameBindings: ["iframeClassName"],
            attributeBindings: ["data-components", "iframeSrcURL:src"],
            "data-components": "kekka-iframe",
            iframeSrcURL: "",
            iframeClassName: "page-iframe-hidden",
            hideIframe: null,
            showIframe: null,
            success: null,
            fail: null,
            cancel: null,
            timeout: null,
            _origin: "".concat(window.location.protocol, "//").concat(window.location.host),
            _iframeOrigin: (0, i.computed)("iframeSrcURL", (function() {
                var e = this.iframeSrcURL.match(a)
                return e ? e[1] : ""
            })),
            _timeoutTimer: null,
            _messageListener: function(e) {
                var t, i = this._timeoutTimer
                i && ((0, n.cancel)(i), this.set("_timeoutTimer", null))
                var r = e.originalEvent
                if (r && (r.origin === this._origin || r.origin === this._iframeOrigin)) {
                    var a = JSON.parse(r.data) || {}
                    if (t = a.event) switch (t) {
                        case "hideIframe":
                            this.sendAction("hideIframe")
                            break
                        case "showIframe":
                            this.sendAction("showIframe")
                            break
                        case "success":
                            this.sendAction("success", a)
                            break
                        case "fail":
                            this.sendAction("fail", a)
                            break
                        case "cancel":
                            this.sendAction("cancel", a)
                    }
                }
            },
            init: function() {
                this._super.apply(this, arguments), this._messageListener = this._messageListener.bind(this)
            },
            willInsertElement: function() {
                this._super.apply(this, arguments), (0, t.default)(window).on("message", this._messageListener), this.set("_timeoutTimer", (0, n.later)(this, (function() {
                    this.sendAction("timeout")
                }), 3e4))
            },
            willDestroyElement: function() {
                this._super.apply(this, arguments)
                var e = this._timeoutTimer
                e && ((0, n.cancel)(e), this.set("_timeoutTimer", null)), (0, t.default)(window).off("message", this._messageListener)
            }
        })
    e.default = o
})), define("kekka/components/kekka-layout-password-popup/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        tagName: "div",
        classNames: ["modal", "rows", "scroller", "theme-dimmer"],
        attributeBindings: ["data-components"],
        "data-components": "kekka-layout-password-popup",
        appParamsService: (0, t.inject)("app-params")
    })
    e.default = i
})), define("kekka/components/kekka-layout-password-popup/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "+WzSr5w4",
        block: '[[[41,[33,1,["isSinglePane"]],[[[1,"    "],[10,0],[14,0,"fitting rows"],[12],[1,"\\n        "],[18,1,null],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"rows row-flex l-base-panel-small unless-branding-message"],[12],[1,"\\n        "],[10,0],[14,0,"l-appcontents"],[12],[1,"\\n            "],[10,0],[14,0,"l-frame"],[12],[1,"\\n                "],[10,0],[14,0,"column-flex flex-min"],[12],[13],[1,"\\n                "],[10,0],[14,0,"l-framepage grid"],[12],[1,"\\n                    "],[10,0],[14,0,"l-frameroot"],[12],[1,"\\n                        "],[10,0],[14,0,"fitting rows"],[12],[1,"\\n                            "],[18,1,null],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"column-flex flex-min"],[12],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]]]],["&default"],false,["if","appParamsService","yield"]]',
        moduleName: "kekka/components/kekka-layout-password-popup/template.hbs",
        isStrictMode: !1
    })
    e.default = n
}))
define("kekka/components/kekka-layout/component", ["exports", "@ember/debug", "@ember/object/computed", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i, r, a) {
    var o, s, l, c, d
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var u = a.default.extend({
        country: null,
        language: null,
        locale: null,
        appParamsService: (0, r.inject)("app-params"),
        debugService: (0, r.inject)("debug"),
        noticeService: (0, r.inject)("notice"),
        tagName: "div",
        classNames: ["l-layout-wrapper", "display-table"],
        attributeBindings: ["data-components"],
        "data-components": "kekka-layout",
        keepPrevious: !1,
        keepPreviousPanelSize: !1,
        hasBackground: !1,
        basePanelClass: "l-base-panel-large",
        wallPaperImagePath: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/wallpaper.jpg",
        isVisibleWS1Header: !1,
        _hasWallpaper: (0, i.computed)("hasBackground", (function() {
            return this.hasBackground && !this.get("appParamsService.isModal")
        })),
        _consecutiveHasWallpaper: !1,
        _isAvailableWs1libHeader: (0, n.and)("country", "language", "locale", "appParamsService.isAvailableWs1libHeader"),
        init: function() {
            this.set("isWallpaperVisible", !1)
            var e = l
            this.keepPrevious ? (this.set("hasBackground", void 0 === s ? this.hasBackground : s), this.set("wallPaperImagePath", void 0 === c ? this.wallPaperImagePath : c), this.set("wallpaperLayout", void 0 === d ? this.wallpaperLayout : d)) : (s = this.hasBackground, c = this.wallPaperImagePath), this.keepPreviousPanelSize ? this.set("basePanelClass", void 0 === o ? this.basePanelClass : o) : o = this.basePanelClass, l = this._hasWallpaper, e && l && (this.set("_consecutiveHasWallpaper", !0), this.set("isWallpaperVisible", !0)), this._super()
        },
        didInsertElement: function() {
            var e = this
            if (this._super.apply(this, arguments), this._hasWallpaper)
                if (this.set("resizeListener", this.adjustWallpaper.bind(this)), window.addEventListener("resize", this.resizeListener, !1), this._consecutiveHasWallpaper) this.adjustWallpaper()
            else {
                var t = this.element.querySelector(".img-wallpaper")
                this.get("appParamsService.animationEnabled") && t.classList.add("wallpaper-animation"), t.addEventListener("load", (function() {
                    e.adjustWallpaper(), e.set("isWallpaperVisible", !0)
                }))
            }
        },
        willDestroyElement: function() {
            this._super.apply(this, arguments), window.removeEventListener("resize", this.resizeListener, !1)
        },
        adjustWallpaper: function() {
            var e = this.element.querySelector(".l-wallpaper"),
                t = e.clientWidth,
                n = e.clientHeight,
                i = this.element.querySelector(".img-wallpaper"),
                r = i.width,
                a = i.height
            this.wallpaperLayout && r >= t && a >= n || (d = t / r > n / a ? "portrait" : "landscape", this.set("wallpaperLayout", d))
        }
    })
    var p = u
    e.default = p
})), define("kekka/components/kekka-layout/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "YUCb4bBI",
        block: '[[[10,0],[14,0,"table-row"],[12],[1,"\\n    "],[10,0],[14,0,"table-row-content-wrapper"],[12],[1,"\\n        "],[1,[34,0]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"table-row-content-wrapper"],[12],[1,"\\n"],[41,[33,2],[[[1,"            "],[1,[28,[35,3],null,[["country","language","locale","isVisibleWS1Header"],[[33,4],[33,5],[33,6],[33,7]]]]],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"table-row full-height"],[12],[1,"\\n    "],[10,0],[14,0,"table-row-content-wrapper scrollable-content"],[12],[1,"\\n"],[41,[33,8],[[[1,"            "],[10,0],[15,0,[29,[[52,[33,9,["isModal"]],"modal","full"]," rows ",[36,10]]]],[12],[1,"\\n                "],[10,0],[14,0,"l-appcontents"],[12],[1,"\\n                    "],[10,0],[14,0,"l-frame"],[12],[1,"\\n"],[41,[33,11],[[[1,"                            "],[10,0],[14,0,"l-wallpaper"],[12],[1,"\\n                                "],[10,"img"],[15,"src",[36,12]],[15,0,[29,["img-wallpaper ",[36,13]," ",[52,[33,14],"is-wallpaper-visible"]]]],[14,"alt",""],[15,"dir",[33,9,["bidi"]]],[12],[13],[1,"\\n                            "],[13],[1,"\\n"]],[]],null],[1,"                        "],[10,0],[14,0,"separator-frame beside row-unshrink"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"column-flex flex-min"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"l-framepage grid"],[12],[1,"\\n                            "],[10,0],[14,0,"l-frameroot"],[12],[1,"\\n                                "],[10,0],[14,1,"framepage"],[14,0,"fitting rows"],[12],[1,"\\n                                    "],[18,1,null],[1,"\\n                                "],[13],[1,"\\n                                "],[10,0],[14,1,"modalarea"],[12],[1,"\\n"],[1,"                                    "],[46,[28,[37,17],["modal"],null],null,null,null],[1,"\\n                                "],[13],[1,"\\n"],[1,"                                "],[46,[28,[37,17],["debug"],null],null,null,null],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                        "],[10,0],[14,0,"column-flex flex-min"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"separator-frame beside row-unshrink"],[12],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],[[[1,"            "],[10,0],[14,1,"framepage"],[14,0,"fitting rows"],[12],[1,"\\n                "],[10,0],[14,0,"l-appcontents-without-background"],[12],[1,"\\n                    "],[18,1,null],[1,"\\n                    "],[10,0],[14,1,"modalarea"],[12],[1,"\\n"],[1,"                        "],[46,[28,[37,17],["modal"],null],null,null,null],[1,"\\n                    "],[13],[1,"\\n"],[1,"                    "],[46,[28,[37,17],["debug"],null],null,null,null],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n"],[13],[1,"\\n"]],["&default"],false,["pdr-skip-link","if","_isAvailableWs1libHeader","pdr-ws1lib-header","country","language","locale","isVisibleWS1Header","hasBackground","appParamsService","basePanelClass","_hasWallpaper","wallPaperImagePath","wallpaperLayout","isWallpaperVisible","yield","component","-outlet"]]',
        moduleName: "kekka/components/kekka-layout/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-password-popup/component", ["exports", "@ember/object", "@ember/object/computed", "@ember/service", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "kekka-password-popup",
        appParamsService: (0, i.inject)("app-params"),
        modalService: (0, i.inject)("modal"),
        noticeService: (0, i.inject)("notice"),
        signinId: null,
        locale: null,
        signoutAction: null,
        cancelAction: "closeOnCancel",
        isDisabled: (0, n.not)("model.isValid"),
        isError: !1,
        localErrorNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        init: function() {
            this._super.apply(this, arguments), this.set("model", {
                isValid: !1,
                password: null,
                signinId: this.signinId
            }), this.noticeService.clearGlobalError()
            var e = this.modalService.model.error || {},
                t = e.errorCodes
            if (t && t.length > 0) {
                for (var n = 0, i = t.length; n < i; ++n)
                    if ("AUTH_INVALID_PASSWORD" === t[n]) this.localErrorNotice.setError("msg_error_password_not_correct", "AUTH_INVALID_PASSWORD"), this.set("isError", !0)
            } else e.errorId && this.noticeService.setGlobalError(e)
        },
        actions: {
            signout: function() {
                this.signoutAction && this.sendAction("signoutAction")
            },
            confirm: function() {
                this.noticeService.clearGlobalError(), this.modalService.closeModal("success", {
                    password: this.get("model.password")
                })
            },
            closeOnCancel: function() {
                this.sendAction("cancelAction")
            }
        }
    })
    e.default = a
})), define("kekka/components/kekka-password-popup/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "6UbrBfTm",
        block: '[[[6,[39,0],null,null,[["default"],[[[[1,"    "],[1,[28,[35,1],null,[["disabledBack","locale","enabledCancel"],[true,[33,2],[33,3,["enabledCancel"]]]]]],[1,"\\n"],[6,[39,4],null,[["id","class"],["modalarea-kekka-main","row-flex"]],[["default"],[[[[6,[39,5],null,[["classNames","localErrorNotice"],["rows-between fitting-parent",[33,6]]],[["default"],[[[[1,"            "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n                "],[1,[28,[35,7],null,[["classNames","enabledOnModal","localErrorNotice"],["item-notice",true,[33,6]]]]],[1,"\\n                "],[10,0],[14,0,"separator-pagetop signin-entrance password-required theme-basebackground"],[12],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n                "],[10,0],[14,0,"page-items signin-entrance"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"grid-child description-regular info"],[15,"dir",[33,3,["bidi"]]],[12],[1,[28,[35,8],["msg_reenter_password_for_security"],null]],[13],[1,"\\n                    "],[13],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems signin-entrance with-message"],[12],[13],[1,"\\n                    "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,9],[[30,0],"confirm"],[["on"],["submit"]]],[12],[1,"\\n                        "],[1,[28,[35,10],null,[["signinIdTitle","passwordTitle","signinIdReadonly","signinIdPlaceholder","passwordPlaceholder","model","isError"],["msg_id_email_psn","msg_pw",true,"msg_id_email_psn","msg_pw",[33,11],[33,12]]]]],[1,"\\n                        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                            "],[1,[28,[35,13],null,[["caption","isDisabled","class","type"],["msg_sf_regcam_action_continue",[33,14],"fitting-width","submit"]]]],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"],[41,[33,3,["isVisibleSignOut"]],[[[1,"                        "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                            "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                                "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,16],null,[["action"],["signout"]],[["default"],[[[[1,"                                            "],[1,[28,[35,8],["msg_not_you"],null]],[1,"\\n"]],[]]]]],[1,"                                    "],[13],[1,"\\n                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n"]],[]],null],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n"],[1,"            "],[10,0],[14,0,"separator-pagefooter dialog row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[]]]]]],[],false,["kekka-layout-password-popup","kekka-sony-header","locale","appParamsService","pdr-main-content","kekka-scroller","localErrorNotice","pdr-notice","pdr-loc","action","pdr-signin-form","model","isError","pdr-primary-button","isDisabled","if","pdr-text-link"]]',
        moduleName: "kekka/components/kekka-password-popup/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-revalidate-password/component", ["exports", "@ember/object", "@ember/object/computed", "@ember/service", "@ember/utils", "@ember/component"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = a.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["l-appcontents-without-background", "theme-basebackground"],
        "data-components": "kekka-revalidate-password",
        appParamsService: (0, i.inject)("app-params"),
        noticeService: (0, i.inject)("notice"),
        signinId: null,
        locale: null,
        signoutAction: null,
        isLoading: !1,
        country: null,
        language: null,
        revalidateAction: null,
        openAboutAction: "openAbout",
        isDisabled: (0, n.not)("model.isValid"),
        isError: (0, t.computed)("localErrorNotice.updateTrigger", (function() {
            return (0, r.isPresent)(this.get("localErrorNotice.notifyStringId"))
        })),
        description: (0, t.computed)((function() {
            return this.descriptionStringId || "msg_reenter_password_for_security"
        })),
        localErrorNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        init: function() {
            this._super.apply(this, arguments), this.set("model", {
                isValid: !1,
                password: null,
                signinId: this.signinId
            })
        },
        actions: {
            signout: function() {
                this.signoutAction && this.sendAction("signoutAction")
            },
            confirm: function() {
                if (this.localErrorNotice.clearError(), this.noticeService.clearGlobalError(), this.revalidateAction) return this.revalidateAction(this.get("model.password"))
            },
            openAbout: function(e) {
                this.sendAction("openAboutAction", e)
            }
        }
    })
    e.default = o
})), define("kekka/components/kekka-revalidate-password/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "rN/AZqQf",
        block: '[[[6,[39,0],null,[["classNames","locale","country","language"],["rows fitting-parent",[33,1],[33,2],[33,3]]],[["default"],[[[[1,"    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["classNames","enabledOnModal","localErrorNotice"],["item-notice",true,[33,5]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pagetop signin-entrance password-required theme-basebackground"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n        "],[10,0],[14,0,"page-items signin-entrance"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n"],[1,"                "],[10,0],[14,0,"grid-child description-regular info"],[15,"dir",[33,6,["bidi"]]],[12],[1,[28,[35,7],[[33,8]],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems signin-entrance with-message"],[12],[13],[1,"\\n            "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,9],[[30,0],"confirm"],[["on"],["submit"]]],[12],[1,"\\n                "],[1,[28,[35,10],null,[["signinIdTitle","passwordTitle","signinIdReadonly","signinIdPlaceholder","passwordPlaceholder","model","isError","signinIdReadonlyInputHidden"],["msg_id_email_psn","msg_pw",true,"msg_id_email_psn","msg_pw",[33,11],[33,12],[33,13]]]]],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,14],null,[["caption","isDisabled","isLoading","class","type"],["msg_sf_regcam_action_continue",[33,15],[33,16],"item-button column-flex","submit"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                    "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                        "],[10,0],[14,0,"columns"],[15,"dir",[33,6,["bidi"]]],[12],[1,"\\n"],[6,[39,17],null,[["action"],["signout"]],[["default"],[[[[1,"                                "],[1,[28,[35,18],["msg_not_you"],null]],[1,"\\n"]],[]]]]],[1,"                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"    "],[10,0],[14,0,"separator-pagefooter dialog row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","locale","country","language","pdr-notice","localErrorNotice","appParamsService","pdr-loc","description","action","pdr-signin-form","model","isError","signinIdReadonlyInputHidden","pdr-primary-button","isDisabled","isLoading","pdr-text-link","loc"]]',
        moduleName: "kekka/components/kekka-revalidate-password/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-scroller/component", ["exports", "@ember/runloop", "@ember/service", "@ember/object", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
        tagName: "div",
        classNames: ["outline-top", "scroller"],
        classNameBindings: ["visible:scroller-visible:scroller-disabled", "scrollerHidden:scroller-hidden"],
        attributeBindings: ["data-components"],
        "data-components": "kekka-scroller",
        appParamsService: (0, n.inject)("app-params"),
        noticeService: (0, n.inject)("notice"),
        visible: !0,
        scrollerHidden: !1,
        enabledAutoScrollOnNotice: !0,
        localErrorNotice: null,
        localSuccessNotice: null,
        localInfoNotice: null,
        scrollMargin: 0,
        onscroll: null,
        init: function() {
            this._super.apply(this, arguments), this.noticeService
        },
        didInsertElement: function() {
            this._super.apply(this, arguments), this.onscroll && this.$().scroll(this.onscroll)
        },
        _visibleChanged: (0, i.observer)("enabledAutoScrollOnNotice", "visible", (function() {
            this.enabledAutoScrollOnNotice && this._scrollToTopOnNotice(!0)
        })),
        _updateTriggered: (0, i.observer)("enabledAutoScrollOnNotice", "noticeService.updateTrigger", "localErrorNotice.updateTrigger", "localSuccessNotice.updateTrigger", "localInfoNotice.updateTrigger", (function() {
            this.enabledAutoScrollOnNotice && this._scrollToTopOnNotice()
        })),
        _scrollToTopOnNotice: function(e) {
            if (this.element && this.visible && (this.get("noticeService.notifyStringId") || this.get("localErrorNotice.notifyStringId") || this.get("localSuccessNotice.notifyStringId") || this.get("localInfoNotice.notifyStringId"))) {
                var n = this.$()
                if (n.find('div[data-components="pdr-notice"]').length) {
                    var i = !e && this.get("appParamsService.animationEnabled");
                    (0, t.next)((function() {
                        i ? n.animate({
                            scrollTop: 0
                        }, "fast") : n.scrollTop(0)
                    }))
                }
            }
        },
        _scrollToTargetElement: (0, i.observer)("scrollToElement", (function() {
            var e = this,
                n = this.scrollToElement
            if (this.element && this.visible && n) {
                var i = this.$(),
                    r = i.scrollTop() - (i.offset().top - n.offset().top) + this.scrollMargin;
                (0, t.next)((function() {
                    e.get("appParamsService.animationEnabled") ? i.animate({
                        scrollTop: r
                    }, "fast") : i.scrollTop(r)
                })), this.set("scrollToElement", null)
            }
        }))
    })
    e.default = a
})), define("kekka/components/kekka-scroller/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "mTDZLYvA",
        block: '[[[18,1,null],[1,"\\n"]],["&default"],false,["yield"]]',
        moduleName: "kekka/components/kekka-scroller/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-sony-header/component", ["exports", "@ember/object", "@ember/service", "@ember/utils", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
            tagName: "div",
            classNames: ["theme-sonyheader", "row-unshrink"],
            attributeBindings: ["data-components"],
            "data-components": "kekka-sony-header",
            appParamsService: (0, n.inject)("app-params"),
            tabindex: 0,
            locale: null,
            backAction: null,
            defaultBackAction: "back",
            cancelAction: null,
            defaultCancelAction: "closeOnCancel",
            cancelDialogMessage: "",
            disabledBack: !1,
            enabledCancel: !1,
            autoBackControl: !1,
            init: function() {
                this._super.apply(this, arguments), this._historyChanged()
            },
            _historyChanged: (0, t.observer)("historyService.isBottom", (function() {
                var e = this.historyService
                e && this.autoBackControl && this.set("disabledBack", e.get("isBottom"))
            })),
            actions: {
                doBack: function() {
                    this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur(), this.backAction ? this.sendAction("backAction") : this.sendAction("defaultBackAction")
                },
                doCancel: function() {
                    this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur()
                    var e = this.cancelAction,
                        t = this.cancelDialogMessage "function" === (0, i.typeOf)(e) ? e(t) : (0, i.isEmpty)(e) ? this.sendAction("defaultCancelAction", t) : this.sendAction("cancelAction", t)
                }
            }
        }),
        o = a
    e.default = o
})), define("kekka/components/kekka-sony-header/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Y7dd9du9",
        block: '[[[10,0],[14,0,"in-header row-sonylogo icon-sonylogo"],[12],[1,"\\n"],[41,[51,[33,1]],[[[1,"        "],[11,"button"],[24,0,"header-icon back icon-header-back"],[16,"tabindex",[36,2]],[16,"title",[28,[37,3],["msg_back_psn"],null]],[16,"dir",[33,4,["bidi"]]],[24,4,"button"],[4,[38,5],[[30,0],"doBack"],null],[12],[13],[1,"\\n"]],[]],null],[41,[33,7],[[[1,"        "],[11,"button"],[24,0,"header-icon cancel icon-header-close"],[16,"tabindex",[36,2]],[16,"title",[28,[37,3],["msg_close_vb"],null]],[16,"dir",[33,4,["bidi"]]],[24,4,"button"],[4,[38,5],[[30,0],"doCancel"],null],[12],[13],[1,"\\n"]],[]],null],[41,[33,8],[[[1,"        "],[10,0],[14,0,"l-debugindicator"],[12],[1,"Debug Mode!"],[13],[1,"\\n"]],[]],null],[13],[1,"\\n"]],[],false,["unless","disabledBack","tabindex","pdr-loc-attr","appParamsService","action","if","enabledCancel","debugService"]]',
        moduleName: "kekka/components/kekka-sony-header/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/kekka-title-header/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        tagName: "div",
        classNames: ["header-title"],
        classNameBindings: ["isSmall:small", "disabledBack::wrapper-relative"],
        attributeBindings: ["data-components"],
        "data-components": "kekka-title-header",
        appParamsService: (0, n.inject)("app-params"),
        historyService: (0, n.inject)("history"),
        locale: null,
        title: null,
        backAction: null,
        defaultBackAction: "back",
        disabledBack: !0,
        autoBackControl: !1,
        allowBreakAllForTitle: !1,
        init: function() {
            this._super.apply(this, arguments), this._historyChanged()
        },
        _historyChanged: (0, t.observer)("historyService.isBottom", (function() {
            var e = this.historyService
            e && this.autoBackControl && this.set("disabledBack", e.get("isBottom"))
        })),
        actions: {
            doBack: function() {
                this.backAction ? this.sendAction("backAction") : this.sendAction("defaultBackAction")
            }
        }
    })
    e.default = r
})), define("kekka/components/kekka-title-header/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "CYOPlhjh",
        block: '[[[41,[51,[33,1]],[[[1,"    "],[10,0],[14,0,"header-title-button"],[12],[1,"\\n        "],[1,[28,[35,2],null,[["isDisableLoadingCaption","imageName","class","action"],[true,"back","columns","doBack"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[10,0],[15,0,[29,["header-title-text ",[52,[51,[33,1]],"with-button"]," ",[52,[33,4],"break-all"]]]],[15,"dir",[33,5,["bidi"]]],[12],[18,1,null],[13],[1,"\\n"]],["&default"],false,["unless","disabledBack","pdr-image-button","if","allowBreakAllForTitle","appParamsService","yield"]]',
        moduleName: "kekka/components/kekka-title-header/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/lf-get-outlet-state", ["exports", "liquid-fire/components/lf-get-outlet-state"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "measure", {
        enumerable: !0,
        get: function() {
            return t.measure
        }
    })
})), define("kekka/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-sync", ["exports", "liquid-fire/components/liquid-sync"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/components/pdr-2sv-method/component", ["exports", "@ember/component", "@ember/object/computed", "@ember/service", "@ember/utils"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = {
            AUTHENTICATOR: {
                descriptions: ["msg_2sv_auth_app_code"],
                image: "authenticator",
                maxlength: 6,
                placeholder: "msg_sce_enter_code",
                type: "text"
            },
            BACKUP_CODE: {
                descriptions: ["msg_enter_one_backup_code"],
                maxlength: 16,
                placeholder: "msg_sce_enter_code",
                type: "text"
            },
            SMS: {
                descriptions: ["msg_enter_verification_code_sent_mobile_number"],
                hasHairline: !0,
                image: "sms",
                maxlength: 16,
                placeholder: "msg_sce_enter_code",
                type: "text"
            },
            RBA_EMAIL: {
                descriptions: ["msg_sign_in_different_device", "msg_verification_code_sent_again_email", "msg_enter_code_verify"],
                hasHairline: !0,
                image: "verify-mail",
                maxlength: 16,
                placeholder: "msg_sce_enter_code",
                type: "text"
            },
            RBA_SMS: {
                descriptions: ["msg_sign_in_different_device", "msg_send_verify_code_mobile", "msg_enter_code_verify"],
                hasHairline: !0,
                image: "sms",
                maxlength: 16,
                placeholder: "msg_sce_enter_code",
                type: "text"
            }
        },
        o = t.default.extend({
            attributeBindings: ["data-components"],
            classNames: ["page-items", "same", "signin"],
            "data-components": "pdr-2sv-method",
            appParamsService: (0, i.inject)("app-params"),
            loadingService: (0, i.inject)("loading"),
            verificationMethod: null,
            model: null,
            isVerifyButtonDisabled: (0, n.empty)("model.value"),
            hasOptionalActions: (0, n.or)("resendCode", "troubleshoot"),
            init: function() {
                this._super.apply(this, arguments), this.setProperties(a[this.verificationMethod] || {})
            },
            actions: {
                resendCode: function() {
                    this._doAction(this.resendCode)
                },
                troubleshoot: function() {
                    this._doAction(this.troubleshoot)
                },
                verify: function() {
                    this._doAction(this.verify)
                }
            },
            _doAction: function(e) {
                (0, r.isNone)(e) || "function" !== (0, r.typeOf)(e) || e()
            }
        })
    e.default = o
})), define("kekka/components/pdr-2sv-method/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "9uPqP5jD",
        block: '[[[41,[33,1],[[[1,"    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n        "],[10,0],[15,"title",[28,[37,2],["msg_verify_your_identity"],null]],[15,0,[28,[37,3],["icon-2sv ",[33,1]],null]],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"]],[]],null],[42,[28,[37,5],[[28,[37,5],[[33,6]],null]],null],null,[[[1,"    "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,8],[[30,1]],null]],[13],[1,"\\n"]],[1]],null],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[1,[28,[35,9],null,[["title","isForceLtr","type","maxlength","placeholder","autocomplete","model","modelKey","ariaLabel"],[[33,10],true,[33,11],[33,12],[33,10],"one-time-code",[33,13],"value",[33,10]]]]],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"columns-center"],[12],[1,"\\n    "],[1,[28,[35,14],null,[["caption","action","isLoading","isDisabled","class"],["msg_sf_regcam_verify",[28,[37,15],[[30,0],"verify"],null],[33,16,["transiting","verify"]],[33,17],"fitting-width"]]]],[1,"\\n"],[13],[1,"\\n"],[41,[33,18],[[[1,"    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n"]],[]],null],[41,[33,19],[[[1,"    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n        "],[10,0],[14,0,"rows fitting-button"],[12],[1,"\\n"],[41,[33,20],[[[1,"                "],[10,0],[14,0,"label description-input-title"],[12],[1,[28,[35,8],["msg_resend_code_info"],null]],[13],[1,"\\n                "],[1,[28,[35,21],null,[["caption","action","isLoading","class"],["msg_account_cta_code_resend",[28,[37,15],[[30,0],"resendCode"],null],[33,16,["transiting","resendCode"]],"fitting-width"]]]],[1,"\\n"]],[]],null],[41,[33,22],[[[1,"                "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,23],null,[["action"],[[28,[37,15],[[30,0],"troubleshoot"],null]]],[["default"],[[[[1,"                            "],[1,[28,[35,8],["msg_troubleshoot_getting_code"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],["value"],false,["if","image","pdr-loc-attr","concat","each","-track-array","descriptions","appParamsService","pdr-loc","pdr-text-field","placeholder","type","maxlength","model","pdr-primary-button","action","loadingService","isVerifyButtonDisabled","hasHairline","hasOptionalActions","resendCode","pdr-secondary-button","troubleshoot","pdr-text-link"]]',
        moduleName: "kekka/components/pdr-2sv-method/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-activate-auth-app/component", ["exports", "@ember/component", "@ember/debug", "@ember/object", "@ember/service", "qrcode"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = "Sony",
        s = t.default.extend({
            attributeBindings: ["data-components"],
            "data-components": "pdr-activate-auth-app",
            appParamsService: (0, r.inject)("app-params"),
            secret: null,
            signinId: null,
            keyUri: (0, i.computed)("secret", "signinId", (function() {
                var e = this.secret,
                    t = this.signinId
                if (!e || !t) return ""
                var n = "".concat(o, ":").concat(t),
                    i = encodeURIComponent(n)
                return "otpauth://totp/".concat(i, "?secret=").concat(e, "&issuer=").concat(o)
            })),
            didInsertElement: function() {
                this._super.apply(this, arguments), a.default.toString(this.keyUri, {
                    type: "svg"
                }, (function(e, t) {
                    t && (document.getElementById("qr-code-container").innerHTML = t)
                }))
            }
        })
    e.default = s
})), define("kekka/components/pdr-activate-auth-app/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "4ILhIiYW",
        block: '[[[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_auth_app_scan_copy"],null]],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,1,"qr-code-container"],[14,0,"columns-center"],[12],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"label description-small break-all"],[14,"data-text","secret"],[15,"dir",[33,0,["bidi"]]],[12],[1,[30,0,["secret"]]],[13],[1,"\\n"]],[],false,["appParamsService","pdr-loc"]]',
        moduleName: "kekka/components/pdr-activate-auth-app/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-add-mobile-phone/component", ["exports", "@ember/service", "@ember/debug", "@ember/object", "@ember/component", "@ember/polyfills", "@ember/utils"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = "us",
        l = window.intlTelInputGlobals.getCountryData(),
        c = {
            NULL_VALUE: {
                stringId: ""
            },
            NULL_COUNTRY_CODE: {
                stringId: ""
            },
            NULL_TEL_INPUT: {
                stringId: ""
            },
            INVALID_CHARS: {
                stringId: "msg_mobile_number_invalid_chars"
            },
            NUMBER_TOO_LONG: {
                stringId: "msg_account_error_mobile_number_too_long"
            }
        },
        d = r.default.extend({
            attributeBindings: ["data-components"],
            "data-components": "pdr-add-mobile-phone",
            appParamsService: (0, t.inject)("app-params"),
            model: null,
            descriptionCaption: null,
            legalCaption: null,
            validation: null,
            phoneCountryCodeMap: null,
            errorNotifier: "error",
            defaultCountry: s,
            _maxValueLength: 255,
            _maxNumberLength: 14,
            mobilePhoneNumberTitleStringId: "msg_account_mobile_phone_number",
            _mergedReasonMap: (0, i.computed)("notAcceptedReasons", (function() {
                return (0, a.assign)({}, c, this.notAcceptedReasons)
            })),
            didInsertElement: function() {
                this._super.apply(this, arguments)
                var e = s,
                    t = (this.defaultCountry || s).toLowerCase()
                l.some((function(n) {
                    if (n.iso2 === t) return e = t, !0
                }))
                var n = this.element.querySelector("input")
                this._iti = window.intlTelInput(n, {
                    initialCountry: e,
                    preferredCountries: [e],
                    separateDialCode: !0
                }), this.set("countryChangeListener", this._onCountryChange.bind(this)), this.element.addEventListener("countrychange", this.countryChangeListener)
            },
            willDestroyElement: function() {
                this._iti.destroy(), this.element.removeEventListener("countrychange", this.countryChangeListener), this._super.apply(this, arguments)
            },
            _onCountryChange: function() {
                this._inputValidateCheck()
            },
            _getPhoneNumber: function(e, t) {
                var n = new RegExp("^\\+".concat(e))
                return t.replace(n, "").replace(/[^0-9]/g, "")
            },
            _splitNumber: function() {
                var e = this._iti.getSelectedCountryData(),
                    t = e.dialCode,
                    n = e.iso2
                if (t && t.length > 0) {
                    var i = this._getPhoneNumber(t, this.get("model.screenValue") || ""),
                        r = this.phoneCountryCodeMap
                    if (r && r.hasOwnProperty(n)) {
                        if (i && i.length > 0) {
                            var a = t + i
                            return {
                                countryCode: r[n],
                                number: a.substring(r[n].length)
                            }
                        }
                        return {
                            countryCode: r[n]
                        }
                    }
                    return {
                        countryCode: t,
                        number: i
                    }
                }
                return {}
            },
            _screenValueUpdated: (0, i.observer)("model.screenValue", (function() {
                var e = this.get("model.screenValue") || "",
                    t = e.replace(/^\+[0-9]{1,4}\s/, "")
                if (e === t) {
                    var n = this._iti.getSelectedCountryData().dialCode,
                        i = this._getPhoneNumber(n, e),
                        r = this._getPhoneNumber(n, this._iti.getNumber())
                    this._inputValidateCheck(r !== i)
                } else this.set("model.screenValue", t)
            })),
            _inputValidateCheck: function() {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                if (this._iti && e) {
                    var t = this._splitNumber(),
                        n = t.countryCode,
                        i = t.number
                    this.set("model.number", i), this.set("model.countryCode", n)
                    var r = this.get("model.screenValue") || "",
                        a = {
                            countryCode: n,
                            maxLength: this._maxNumberLength,
                            telInputValue: i
                        }
                    this.validation.validateProperty(r, a).catch((function() {}))
                }
            },
            _mobilePhoneNumberTitleId: (0, i.computed)("elementId", "mobilePhoneNumberTitleStringId", (function() {
                return "".concat(this.elementId, "_").concat(this.mobilePhoneNumberTitleStringId)
            })),
            actions: {
                doValidateProperty: function() {
                    this._inputValidateCheck()
                },
                error: function(e) {
                    var t = this.errorNotifier "function" === (0, o.typeOf)(t) ? t(e) : (0, o.isEmpty)(t) || this.sendAction("errorNotifier", e)
                }
            }
        })
    e.default = d
})), define("kekka/components/pdr-add-mobile-phone/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "YSUtyUew",
        block: '[[[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,2]],null]],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,3]],null]],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"label description-input-title"],[15,1,[36,4]],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,5]],null]],[13],[1,"\\n"],[1,[28,[35,6],null,[["type","title","isForceLtr","maxlength","placeholder","model","modelKey","validation","validateProperty","errorNotifier","notAcceptedReasons","ariaLabelledby","autocomplete"],["tel",[33,7],true,[33,8],"msg_enter_mobile_number",[33,9],"screenValue",[33,10],[28,[37,11],[[30,0],"doValidateProperty"],null],[28,[37,11],[[30,0],"error"],null],[33,12],[33,4],"tel"]]]],[1,"\\n"]],[],false,["appParamsService","pdr-loc","descriptionCaption","legalCaption","_mobilePhoneNumberTitleId","mobilePhoneNumberTitleStringId","pdr-text-field-v2","titleText","_maxValueLength","model","validation","action","_mergedReasonMap"]]',
        moduleName: "kekka/components/pdr-add-mobile-phone/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-backup-code/component", ["exports", "@ember/component", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-backup-code",
        appParamsService: (0, n.inject)("app-params"),
        backupCodes: [],
        fontSizeLarge: !1,
        hasVerticalLine: !1
    })
    e.default = i
}))
define("kekka/components/pdr-backup-code/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "l8Tlgd0x",
        block: '[[[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n"],[10,0],[15,0,[29,["separator-pageitems ",[52,[33,1,["isSinglePane"]],"small","middle"]]]],[12],[13],[1,"\\n"],[10,"ul"],[15,0,[52,[33,2],"columns multi-column-list"]],[12],[1,"\\n"],[42,[28,[37,4],[[28,[37,4],[[33,2]],null]],null],null,[[[1,"        "],[10,"li"],[15,0,[29,["label ",[52,[28,[37,5],[[33,6],true],null],"description-large","description-medium"]," two-column-item ",[52,[33,7],"vertical-line"]]]],[12],[10,1],[14,0,"bold"],[12],[1,[30,1,["code"]]],[13],[13],[1,"\\n"]],[1]],[[[1,"        "],[10,"li"],[12],[1,"\\n            "],[18,2,null],[1,"\\n        "],[13],[1,"\\n"]],[]]],[13],[1,"\\n"],[10,0],[15,0,[29,["separator-pageitems ",[52,[33,1,["isSinglePane"]],"small","middle"]]]],[12],[13],[1,"\\n"],[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n"]],["item","&default"],false,["if","appParamsService","backupCodes","each","-track-array","eq","fontSizeLarge","hasVerticalLine","yield"]]',
        moduleName: "kekka/components/pdr-backup-code/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-button/component", ["exports", "@ember/debug", "@ember/service", "@ember/utils", "@ember/string", "@ember/component"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = a.default.extend({
        attributeBindings: ["data-components"],
        classNameBindings: ["enableDefaultButtonStyle:button"],
        "data-components": "pdr-button",
        appParamsService: (0, n.inject)("app-params"),
        tabindex: 0,
        action: null,
        caption: null,
        isDisabled: !1,
        isLoading: !1,
        isDisableLoadingCaption: !1,
        param: null,
        enableDefaultButtonStyle: !0,
        loadingIconTitle: (0, r.loc)("msg_sr_loading"),
        onfocus: null,
        shouldBlur: !0,
        click: function() {
            var e = this.element.contains(document.activeElement)
            if (this.shouldBlur && e && document.activeElement.blur && document.activeElement.blur(), !this.isDisabled && !this.isLoading) {
                var t = this.action,
                    n = this.param "function" === (0, i.typeOf)(t) ? t(n) : (0, i.isEmpty)(t) || this.sendAction("action", n)
            }
        },
        actions: {
            _onfocus: function() {
                this.onfocus && this.onfocus()
            }
        }
    })
    e.default = o
})), define("kekka/components/pdr-ca-body/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        classNames: ["theme-basebackground"],
        attributeBindings: ["data-components"],
        "data-components": "pdr-ca-body",
        appParamsService: (0, t.inject)("app-params"),
        cobrandingDataService: (0, t.inject)("cobranding-data"),
        tabindex: 0,
        model: null,
        uLinkAction: null,
        learnMoreLinkAction: null,
        troubleshooterLinkAction: null,
        createNewAccountButtonAction: null,
        locale: null,
        isVisibleDescriptionAndLearn: !0,
        openAboutAction: "openAbout",
        actions: {
            uLink: function() {
                this.uLinkAction && this.sendAction("uLinkAction")
            },
            learnMore: function() {
                this.learnMoreLinkAction && this.sendAction("learnMoreLinkAction")
            },
            troubleshoot: function() {
                this.troubleshooterLinkAction && this.sendAction("troubleshooterLinkAction")
            },
            createAccount: function() {
                this.createNewAccountButtonAction && this.sendAction("createNewAccountButtonAction")
            },
            openAbout: function(e) {
                this.sendAction("openAboutAction", e)
            }
        }
    })
    e.default = i
})), define("kekka/components/pdr-ca-body/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "EGuJPLzp",
        block: '[[[6,[39,0],null,[["classNames","localInfoNotice","country","language","locale","openAboutAction","originClientId"],["rows-between fitting-parent",[33,1,["localInfoNotice"]],[33,1,["signin","country"]],[33,1,["signin","language"]],[33,2],"openAbout",[33,1,["signin","originClientId"]]]],[["default"],[[[[1,"    "],[10,0],[15,0,[29,["separator-pageitems with-service-logo-top row-unshrink ",[52,[33,4,["hasServiceLogoUrl"]],"by-cobranding-data"]]]],[12],[13],[1,"\\n"],[41,[51,[33,1,["isParentConsent"]]],[[[1,"        "],[1,[34,6]],[1,"\\n"]],[]],null],[1,"    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,7],null,[["classNames","localInfoNotice"],["item-notice",[33,1,["localInfoNotice"]]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems with-service-logo-bottom row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n        "],[10,0],[14,0,"page-items signin-entrance ca"],[12],[1,"\\n"],[41,[33,8],[[[1,"                "],[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-small"],[12],[1,"\\n"],[41,[33,1,["isParentConsent"]],[[[1,"                            "],[10,0],[14,"data-text","parentConsentDesc"],[15,"dir",[33,9,["bidi"]]],[12],[1,[28,[35,10],["msg_sign_in_parental_consent"],null]],[13],[1,"\\n"]],[]],[[[1,"                            "],[10,1],[14,"data-text","descriptionMsg"],[15,"dir",[33,9,["bidi"]]],[12],[1,[28,[35,11],["msg_central_auth_desc",[33,4,["dataList","serviceName"]]],[["unlocalized"],[true]]]],[13],[1," "],[11,"button"],[24,0,"learn-more"],[16,"tabindex",[36,12]],[16,"dir",[33,9,["bidi"]]],[24,4,"button"],[4,[38,13],[[30,0],"learnMore"],null],[12],[1,[28,[35,10],["msg_psp_upsell_learn_more"],null]],[13],[1,"\\n"]],[]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[41,[33,1,["isParentConsent"]],[[[1,"                "],[10,0],[14,0,"grid is-align-center row-unshrink"],[12],[1,"\\n                    "],[10,0],[14,0,"item-handover"],[12],[1,"\\n                        "],[10,"img"],[15,0,[29,["icon-handover ",[52,[33,9,["isPc"]],"pc","mobile"]]]],[15,"dir",[33,9,["bidi"]]],[14,"alt",""],[15,"src",[29,["85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/illust_child_to_parent_",[52,[33,9,["isPc"]],"pc","mobile"],".png"]]],[12],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[41,[33,1,["signinMsg"]],[[[1,"                "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n                "],[1,[28,[35,14],null,[["baseFontClass","dataText","messages","level"],["description-regular-text","signinMsg",[28,[37,15],[[33,1,["signinMsg","stringId"]]],null],[52,[33,1,["signinMsg","isWarn"]],"warning","info"]]]]],[1,"\\n"],[41,[33,1,["enabledUlink"]],[[[1,"                    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                            "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,16],null,[["action"],["uLink"]],[["default"],[[[[1,"                                        "],[1,[28,[35,10],["msg_link_this_account"],null]],[1,"\\n"]],[]]]]],[1,"                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"                "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n"]],[]],[[[41,[33,8],[[[1,"                "],[10,0],[14,0,"separator-pageitems with-message-link"],[12],[13],[1,"\\n            "]],[]],null]],[]]],[1,"            "],[18,1,null],[1,"\\n"],[41,[33,9,["isVisibleTroubleShoot"]],[[[41,[51,[33,9,["isMobile"]]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"]],[]],null],[1,"                "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                    "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                        "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,16],null,[["action"],["troubleshoot"]],[["default"],[[[[1,"                                    "],[1,[28,[35,10],["msg_troubleshoot_signin"],null]],[1,"\\n"]],[]]]]],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[1,"            "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[41,[33,9,["isVisibleAcLink"]],[[[41,[33,18],[[[1,"                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,19],null,[["caption","action","isLoading","class"],["msg_create_new_account","createAccount",[33,20],"fitting-width"]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null]],[]],null],[41,[33,9,["isMobile"]],[[[1,"                "],[10,0],[14,0,"separator-pagefooter signin-entrance ca row-unshrink"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"]],[]]]]]],["&default"],false,["pdr-scroller","model","locale","if","cobrandingDataService","unless","pdr-ca-logo","pdr-notice","isVisibleDescriptionAndLearn","appParamsService","pdr-loc","pdr-loc-fmt-v2","tabindex","action","pdr-validation-notice","array","pdr-text-link","yield","createNewAccountButtonAction","pdr-secondary-button","isVerifying"]]',
        moduleName: "kekka/components/pdr-ca-body/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-ca-logo/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        classNames: ["pdr-ca-logo"],
        attributeBindings: ["data-components"],
        "data-components": "pdr-ca-logo",
        appParamsService: (0, t.inject)("app-params")
    })
    e.default = i
})), define("kekka/components/pdr-ca-logo/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "jjpTN6Qq",
        block: '[[[41,[33,1,["serviceLogoUrl"]],[[[1,"    "],[10,0],[14,0,"grid is-align-center row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"item-logo-ca-parent"],[12],[1,"\\n            "],[1,[28,[35,2],null,[["class","imageClassName","imageSrc"],["item-logo-ca","icon-ca",[33,1,["serviceLogoUrl"]]]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],[],false,["if","appParamsService","pdr-img"]]',
        moduleName: "kekka/components/pdr-ca-logo/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-ca-revalidate-password/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        classNames: ["theme-basebackground"],
        attributeBindings: ["data-components"],
        "data-components": "pdr-ca-revalidate-password",
        appParamsService: (0, n.inject)("app-params"),
        cobrandingDataService: (0, n.inject)("cobranding-data"),
        noticeService: (0, n.inject)("notice"),
        loadingService: (0, n.inject)("loading"),
        model: null,
        locale: null,
        signoutAction: null,
        revalidateAction: null,
        openAboutAction: "openAbout",
        localErrorNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        actions: {
            openAbout: function(e) {
                this.sendAction("openAboutAction", e)
            },
            signout: function() {
                this.signoutAction && this.sendAction("signoutAction")
            },
            confirm: function() {
                if (this.localErrorNotice.clearError(), this.noticeService.clearGlobalError(), this.revalidateAction) return this.revalidateAction(this.get("model.signin.password"))
            }
        }
    })
    e.default = r
})), define("kekka/components/pdr-ca-revalidate-password/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "e7WXjWq3",
        block: '[[[6,[39,0],null,[["classNames","localInfoNotice","country","language","locale","openAboutAction","originClientId"],["rows-between fitting-parent",[33,1,["localInfoNotice"]],[33,1,["signin","country"]],[33,1,["signin","language"]],[33,2],"openAbout",[33,1,["signin","originClientId"]]]],[["default"],[[[[1,"    "],[10,0],[15,0,[29,["separator-pageitems with-service-logo-top ",[52,[33,4,["hasServiceLogoUrl"]],"by-cobranding-data"]]]],[12],[13],[1,"\\n    "],[1,[34,5]],[1,"\\n    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,6],null,[["classNames","localInfoNotice"],["item-notice",[33,1,["localInfoNotice"]]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems with-service-logo-bottom"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n        "],[10,0],[14,0,"page-items signin-entrance ca"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular info"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,8],["msg_reenter_password_for_security"],null]],[13],[1,"\\n            "],[13],[1,"\\n"],[41,[33,1,["signinMsg"]],[[[1,"                "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n                "],[1,[28,[35,9],null,[["baseFontClass","dataText","messages","level"],["description-regular-text","signinMsg",[28,[37,10],[[33,1,["signinMsg","stringId"]]],null],[52,[33,1,["signinMsg","isWarn"]],"warning","info"]]]]],[1,"\\n                "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n"]],[]],[[[1,"                "],[10,0],[14,0,"separator-pageitems with-message-link"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems signin-id-text-top"],[12],[13],[1,"\\n"]],[]]],[1,"            "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,11],[[30,0],"confirm"],[["on"],["submit"]]],[12],[1,"\\n                "],[10,0],[14,0,"wrapper-input-textfields"],[12],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,12],null,[["class","isError","model","passwordPlaceholder","passwordTitle","signinIdReadonlyInputHidden"],["fitting-button",[33,1,["signin","isError"]],[33,1,["signin"]],[33,1,["signin","passwordPlaceholder"]],[33,1,["signin","passwordTitle"]],true]]]],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,13],null,[["caption","isLoading","isDisabled","class","type"],["msg_sf_regcam_action_continue",[33,14,["transiting"]],[33,1,["signin","isDisabledSignInButton"]],"fitting-width","submit"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"],[41,[33,7,["isVisibleSignOut"]],[[[1,"                "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                    "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                        "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,15],null,[["action"],["signout"]],[["default"],[[[[1,"                                    "],[1,[28,[35,16],["msg_not_you"],null]],[1,"\\n"]],[]]]]],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n"]],[]],null],[41,[33,7,["isMobile"]],[[[1,"                "],[10,0],[14,0,"separator-pagefooter signin-entrance ca row-unshrink"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","locale","if","cobrandingDataService","pdr-ca-logo","pdr-notice","appParamsService","pdr-loc","pdr-validation-notice","array","action","pdr-signin-form","pdr-primary-button","loadingService","pdr-text-link","loc"]]',
        moduleName: "kekka/components/pdr-ca-revalidate-password/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-checkbox-v2/component", ["exports", "@ember/component", "@ember/object", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["checkbox-container"],
        "data-components": "pdr-checkbox-v2",
        appParamsService: (0, i.inject)("app-params"),
        caption: null,
        checkedDefault: !1,
        onchange: null,
        tabindex: 0,
        value: null,
        dataText: null,
        checkedValueMapping: {
            true: !0,
            false: !1
        },
        offLabel: "msg_checkbox_off",
        onLabel: "msg_checkbox_on",
        _auxiliaryInformation: (0, n.computed)("_currentValue", (function() {
            return this._currentValue ? this.onLabel : this.offLabel
        })),
        _imageClass: (0, n.computed)("_currentValue", (function() {
            return this._currentValue ? "is-checkbox-on" : "is-checkbox-off"
        })),
        didReceiveAttrs: function() {
            this._super.apply(this, arguments)
            var e = this.checkedDefault || this.value
            this.set("_currentValue", this.get("checkedValueMapping.true") === e)
        },
        click: function() {
            this.toggleProperty("_currentValue"), this.onchange && this.onchange(this.checkedValueMapping[this._currentValue])
        }
    })
    e.default = r
})), define("kekka/components/pdr-checkbox-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Ud4VnWfZ",
        block: '[[[10,0],[14,0,"contents"],[12],[1,"\\n    "],[10,"button"],[15,"tabindex",[36,0]],[15,"title",[28,[37,1],[[33,2]],null]],[15,0,[28,[37,3],["checkbox-icon ",[33,4]],null]],[14,4,"button"],[12],[13],[1,"\\n    "],[10,0],[14,0,"text-selectionitem"],[15,"data-text",[36,5]],[15,"dir",[33,6,["bidi"]]],[12],[1,[28,[35,7],[[33,8]],null]],[13],[1,"\\n"],[13],[1,"\\n"],[18,1,null],[1,"\\n"]],["&default"],false,["tabindex","pdr-loc-attr","_auxiliaryInformation","concat","_imageClass","dataText","appParamsService","pdr-loc","caption","yield"]]',
        moduleName: "kekka/components/pdr-checkbox-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-checkbox/component", ["exports", "@ember/object", "@ember/service", "@ember/utils", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["theme-checkbox", "action-effect", "container-checkbox"],
        "data-components": "pdr-checkbox",
        appParamsService: (0, n.inject)("app-params"),
        tabindex: 0,
        caption: null,
        value: null,
        checkedDefault: !1,
        dataText: "checkbox-message",
        checkedValueMapping: {
            true: !0,
            false: !1
        },
        offLabel: "msg_checkbox_off",
        onLabel: "msg_checkbox_on",
        _isChecked: !0,
        _auxiliaryInformation: (0, t.computed)("_isChecked", (function() {
            return this._isChecked ? this.onLabel : this.offLabel
        })),
        _imageClass: (0, t.computed)("_isChecked", (function() {
            return this._isChecked ? "is-checkbox-on" : "is-checkbox-off"
        })),
        _onValueChanged: (0, t.observer)("value", (function() {
            (0, i.isNone)(this.value) || this.value === this.checkedValueMapping[this._isChecked] || this.toggleProperty("_isChecked")
        })),
        init: function() {
            this._super.apply(this, arguments), this._setInternalValue()
        },
        click: function() {
            this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur(), this.toggleProperty("_isChecked"), this.set("value", this.checkedValueMapping[this._isChecked])
        },
        _setInternalValue: function() {
            var e = this.checkedDefault || this.value
            this.set("_isChecked", this.get("checkedValueMapping.true") === e)
        }
    })
    e.default = a
})), define("kekka/components/pdr-checkbox/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "QUCSX3Vw",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[15,"title",[28,[37,1],[[33,2]],null]],[15,0,[29,["checkbox-icon ",[36,3]]]],[14,4,"button"],[12],[13],[1,"\\n"],[10,0],[14,0,"text-selectionitem"],[15,"data-text",[36,4]],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],[[33,7]],null]],[13],[1,"\\n"]],[],false,["tabindex","pdr-loc-attr","_auxiliaryInformation","_imageClass","dataText","appParamsService","pdr-loc","caption"]]',
        moduleName: "kekka/components/pdr-checkbox/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-description-with-link/component", ["exports", "@ember/debug", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-description-with-link",
        appParamsService: (0, n.inject)("app-params"),
        appInterfaceService: (0, n.inject)("app-interface"),
        locale: null,
        description: null,
        descriptionClassName: null,
        linkText: null,
        link: null,
        actions: {
            openNewPage: function() {
                var e = this.link
                this.appInterfaceService.openNewWindow(e)
            }
        }
    })
    e.default = r
})), define("kekka/components/pdr-description-with-link/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "T5qV5ePC",
        block: '[[[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n    "],[10,0],[15,0,[29,["grid-child description-small ",[36,0]]]],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],[[33,3]],null]],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"    "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n        "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,4],null,[["action"],["openNewPage"]],[["default"],[[[[1,"                "],[1,[28,[35,2],[[33,5]],null]],[1,"\\n"]],[]]]]],[1,"        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["descriptionClassName","appParamsService","pdr-loc","description","pdr-text-link","linkText"]]',
        moduleName: "kekka/components/pdr-description-with-link/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-email-verification-v2/component", ["exports", "@ember/debug", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-email-verification-v2",
        appParamsService: (0, i.inject)("app-params"),
        model: null,
        alreadyVerifiedAction: null,
        isVerifying: !1,
        cancelAction: null,
        resendEmailAction: null,
        isResending: !1,
        changeSigninIdAction: null,
        confirmAction: null,
        doThisLaterAction: null,
        _resendEmailAction: (0, n.computed)("model.readonly", (function() {
            return this.get("model.readonly") ? "resendEmail" : "confirm"
        })),
        _resendEmailCaption: (0, n.computed)("model.readonly", (function() {
            return this.get("model.readonly") ? "msg_sf_regcam_ev_resend_email" : "msg_confirm_kakutei"
        })),
        _changeSigninIdCaption: (0, n.computed)("model.readonly", (function() {
            return this.get("model.readonly") ? "msg_sf_regcam_ev_change_id" : "msg_cancel_psn"
        })),
        _isDisabledButton: (0, n.computed)("model.{readonly,newSigninId,signinIdValidation.isValid}", (function() {
            return !(this.get("model.readonly") || this.get("model.currentSigninId") !== this.get("model.newSigninId") && this.get("model.signinIdValidation.isValid"))
        })),
        _isVisibleButton: (0, n.computed)("model.readonly", (function() {
            return !this.cancelAction || this.get("model.readonly")
        })),
        _signinIdTitleStringId: "msg_signin_id",
        _signinIdTitleId: (0, n.computed)("elementId", "_signinIdTitleStringId", (function() {
            return "".concat(this.elementId, "_").concat(this._signinIdTitleStringId)
        })),
        _paragraphOfDescription1: (0, n.computed)("country", (function() {
            return "CN" === this.country ? "msg_need_verify_add_id" : "msg_need_email_verification"
        })),
        _paragraphOfDescription2: (0, n.computed)("country", (function() {
            return "CN" === this.country ? "msg_verification_email_sent" : "msg_email_sent_verification_2"
        })),
        actions: {
            alreadyVerified: function() {
                this.alreadyVerifiedAction && this.sendAction("alreadyVerifiedAction")
            },
            cancel: function() {
                this.cancelAction && this.sendAction("cancelAction")
            },
            resendEmail: function() {
                this.resendEmailAction && this.sendAction("resendEmailAction")
            },
            changeSigninId: function() {
                this.changeSigninIdAction && this.sendAction("changeSigninIdAction")
            },
            confirm: function() {
                this.confirmAction && this.sendAction("confirmAction")
            },
            doThisLater: function() {
                this.doThisLaterAction && this.sendAction("doThisLaterAction")
            }
        }
    })
    e.default = a
})), define("kekka/components/pdr-email-verification-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "li1oq8Kx",
        block: '[[[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n    "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n        "],[10,0],[14,"data-text","email-sent-verification"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,2]],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n    "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"inline"],[14,"data-text","email-sent-verification"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n            "],[1,[28,[35,3],[[33,4],[33,5,["currentSigninId"]]],[["unlocalized","strong"],[true,true]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"columns-center"],[12],[1,"\\n    "],[1,[28,[35,6],null,[["caption","isLoading","action","class"],["msg_i_verified",[33,7],"alreadyVerified","fitting-width"]]]],[1,"\\n"],[13],[1,"\\n"],[41,[33,9],[[[1,"    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n        "],[1,[28,[35,10],null,[["caption","action","class"],["msg_cancel_psn","cancel","fitting-width"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n    "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_didnot_receive_email"],null]],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"grid-parent description-input-title"],[12],[1,"\\n    "],[10,0],[15,1,[36,11]],[14,0,"grid-child description-input-title"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,12]],null]],[13],[1,"\\n"],[13],[1,"\\n"],[8,[39,13],null,[["@readonly","@validation","@value","@ariaLabelledby","@onChangeSigninId"],[[30,0,["model","readonly"]],[30,0,["model","signinIdValidation"]],[30,0,["model","newSigninId"]],[30,0,["_signinIdTitleId"]],[28,[37,14],[[28,[37,15],[[30,0,["model","newSigninId"]]],null]],null]]],null],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"columns-center"],[12],[1,"\\n    "],[1,[28,[35,6],null,[["caption","isLoading","isDisabled","action","class"],[[33,16],[33,17],[33,18],[33,19],"fitting-width"]]]],[1,"\\n"],[13],[1,"\\n"],[41,[33,20],[[[1,"    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n        "],[1,[28,[35,10],null,[["caption","action","class"],[[33,21],"changeSigninId","fitting-width"]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],null],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,"ul"],[12],[1,"\\n    "],[10,"li"],[14,0,"grid-parent bullet-point"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child bullet-point-icon icon-checkitem"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-icon"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-child bullet-point-text checkitem"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_make_sure_signin_id_valid"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,"li"],[14,0,"grid-parent bullet-point"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child bullet-point-icon icon-checkitem"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-icon"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-child bullet-point-text checkitem"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_check_spam_folder"],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[41,[33,22],[[[1,"    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"        "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,23],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                    "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],[],false,["appParamsService","pdr-loc","_paragraphOfDescription1","pdr-loc-fmt","_paragraphOfDescription2","model","pdr-primary-button","isVerifying","if","cancelAction","pdr-secondary-button","_signinIdTitleId","_signinIdTitleStringId","pdr-signin-id-v2","fn","mut","_resendEmailCaption","isResending","_isDisabledButton","_resendEmailAction","_isVisibleButton","_changeSigninIdCaption","doThisLaterAction","pdr-text-link"]]',
        moduleName: "kekka/components/pdr-email-verification-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-image-button/component", ["exports", "kekka/components/pdr-button/component"], (function(e, t) {
    function n(e) {
        return function(e) {
            if (Array.isArray(e)) return i(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return i(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function i(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = {
            apple: {
                ariaLabel: "msg_goto_app_store",
                classNames: []
            },
            back: {
                ariaLabel: "msg_back_psn",
                classNames: ["secondary-button", "row-button", "text-button"]
            },
            google: {
                ariaLabel: "msg_goto_google_play",
                classNames: []
            },
            store: {
                ariaLabel: "msg_playstation_store",
                classNames: ["secondary-button", "row-button", "text-button"]
            },
            minus: {
                ariaLabel: "msg_sr_zoom_out",
                classNames: []
            },
            plus: {
                ariaLabel: "msg_sr_zoom_in",
                classNames: []
            }
        },
        a = t.default.extend({
            classNameBindings: ["caption::no-caption"],
            imageName: null,
            init: function() {
                this._super.apply(this, arguments)
                var e = this.imageName,
                    t = r[e] || {},
                    i = t.ariaLabel,
                    a = void 0 === i ? "" : i,
                    o = t.classNames,
                    s = void 0 === o ? [] : o
                this.setProperties({
                    ariaLabel: a,
                    buttonClass: ["image-button", e].concat(n(s)).join(" ")
                })
            }
        })
    e.default = a
})), define("kekka/components/pdr-image-button/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "IWGirTU5",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[15,"aria-label",[28,[37,1],[[33,2]],null]],[15,"disabled",[36,3]],[15,0,[29,[[36,4],[52,[33,6]," with-loading-blue"]," disabled-loading-caption"]]],[14,4,"button"],[12],[1,"\\n    "],[10,0],[14,0,"wrapper-centeralign"],[12],[1,"\\n        "],[10,0],[14,0,"button-image"],[12],[13],[1,"\\n        "],[10,0],[14,0,"caption"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,8],[[33,9]],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["tabindex","pdr-loc-attr","ariaLabel","isDisabled","buttonClass","if","isLoading","appParamsService","pdr-loc","caption"]]',
        moduleName: "kekka/components/pdr-image-button/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-image-view/component", ["exports", "@ember/component", "@ember/utils", "@ember/object"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        attributeBindings: ["data-components"],
        classNameBindings: ["iconSizeClass", "useDefaultProfile:default-profile"],
        "data-components": "pdr-image-view",
        imageUrl: null,
        iconSizeClass: null,
        useDefaultProfile: !0,
        init: function() {
            this._super.apply(this, arguments), this.properties && this.properties[0] && this.setProperties(this.properties[0])
        },
        _onChangeImageUrl: (0, i.observer)("imageUrl", (function() {
            var e = this.element,
                t = this.imageUrl
            if ((0, n.isEmpty)(t)) e.removeAttribute("style")
            else {
                var i = this.imageUrlParams
                i && (t = "".concat(t, "?").concat(i.join("&"))), e.setAttribute("style", "background-image: url(".concat(t, ");"))
            }
        })),
        didInsertElement: function() {
            this._super.apply(this, arguments), this._onChangeImageUrl()
        }
    }).reopenClass({
        positionalParams: "properties"
    })
    e.default = r
})), define("kekka/components/pdr-img/component", ["exports", "@ember/debug", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-img",
        appParamsService: (0, n.inject)("app-params"),
        imageAlt: "",
        imageClassName: null,
        imageSrc: null,
        didInsertElement: function() {
            var e = this
            this._super.apply(this, arguments)
            var t = new Image
            t.alt = this.imageAlt, t.className = this.imageClassName, t.dir = this.get("appParamsService.bidi"), t.onload = function() {
                e.element.appendChild(t)
            }, t.onerror = function() {}, t.src = this.imageSrc
        }
    })
    e.default = r
})), define("kekka/components/pdr-label-with-help/component", ["exports", "@ember/debug", "@ember/service", "@ember/component", "@ember/object/evented", "@ember/object", "@ember/array"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = a.default.extend(r.default).create(),
        l = i.default.extend({
            tagName: "div",
            attributeBindings: ["data-components"],
            classNames: ["label-help"],
            "data-components": "pdr-label-with-help",
            appParamsService: (0, n.inject)("app-params"),
            tabindex: 0,
            fieldTitle: null,
            notificationClass: null,
            titleClass: "description-input-title",
            isAbsolute: !1,
            centerize: !1,
            visible: !1,
            _helpDescription: (0, a.computed)("helpDescription", (function() {
                var e = this.helpDescription
                return (0, o.isArray)(e) ? e : [e]
            })),
            didInsertElement: function() {
                this._super.apply(this, arguments), s.on("close", this, "closeOnAbsolute")
            },
            willDestroyElement: function() {
                this._super.apply(this, arguments), s.off("close", this, "closeOnAbsolute")
            },
            closeOnAbsolute: function() {
                this.isAbsolute && this.set("visible", !1)
            },
            helpPart: {
                isHelpPart: !0
            },
            childPart: {
                isChildPart: !0
            },
            _labelId: (0, a.computed)("elementId", "fieldTitle", (function() {
                return "".concat(this.elementId, "_").concat(this.fieldTitle)
            })),
            actions: {
                switchHelpVisibility: function() {
                    this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur(), this.visible ? this.set("visible", !1) : (s.trigger("close"), this.set("visible", !0))
                }
            }
        })
    e.default = l
})), define("kekka/components/pdr-label-with-help/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "GTFvs2rd",
        block: '[[[10,0],[15,0,[52,[33,1],"columns columns-center"]],[12],[1,"\\n    "],[10,0],[15,0,[29,["grid-parent ",[36,2]]]],[12],[1,"\\n        "],[10,0],[15,0,[29,["grid-child ",[36,2]]]],[12],[1,"\\n            "],[10,1],[15,1,[36,3]],[15,"dir",[33,4,["bidi"]]],[14,0,"label-title"],[12],[1,[28,[35,5],[[33,6]],null]],[13],[1,"\\n            "],[11,"button"],[24,0,"label-help-icon"],[16,"tabindex",[36,7]],[16,"title",[28,[37,8],["msg_sf_regcam_ev_help"],null]],[16,"dir",[33,4,["bidi"]]],[24,4,"button"],[4,[38,9],[[30,0],"switchHelpVisibility"],null],[12],[1,"\\n                "],[10,0],[14,0,"label-help-triangle-spacer"],[12],[13],[1,"\\n"],[41,[33,10],[[[1,"                    "],[10,0],[14,0,"label-help-triangle"],[12],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[41,[33,10],[[[1,"    "],[10,0],[15,0,[29,["label-help-notification ",[36,11]," ",[52,[33,12],"label-help-notification-absolute"]]]],[12],[1,"\\n"],[41,[48,[30,2]],[[[1,"            "],[18,2,[[33,15]]],[1,"\\n"]],[]],[[[42,[28,[37,17],[[28,[37,17],[[33,18]],null]],null],null,[[[1,"                "],[10,0],[14,0,"label description-small"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],[[30,1]],null]],[13],[1,"\\n"]],[1]],null]],[]]],[1,"    "],[13],[1,"\\n"]],[]],null],[18,2,[[33,19],[33,3]]],[1,"\\n"]],["helpDescription","&default"],false,["if","centerize","titleClass","_labelId","appParamsService","pdr-loc","fieldTitle","tabindex","pdr-loc-attr","action","visible","notificationClass","isAbsolute","has-block","yield","helpPart","each","-track-array","_helpDescription","childPart"]]',
        moduleName: "kekka/components/pdr-label-with-help/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-legal-footer/component", ["exports", "@ember/component", "@ember/object", "@ember/object/computed", "@ember/service"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-legal-footer",
        aboutAdapterService: (0, r.inject)("about-adapter"),
        appParamsService: (0, r.inject)("app-params"),
        country: null,
        forceShowTermsPrivacy: !1,
        language: null,
        openAboutAction: function() {},
        _linkText: (0, n.computed)("_unknownCountry", (function() {
            return this._unknownCountry ? "msg_help_site_map" : "msg_terms_to_site_map"
        })),
        _originClientId: (0, i.or)("originClientId", "appParamsService.originClientId"),
        _requestLocale: (0, i.or)("requestLocale", "appParamsService.requestLocale"),
        _unknownCountry: (0, n.computed)("appParamsService.isPsnUser", "aboutAdapterService.isSignedIn", (function() {
            return !this.forceShowTermsPrivacy && this.appParamsService.isPsnUser && !this.aboutAdapterService.isSignedIn
        })),
        actions: {
            about: function(e) {
                this.openAboutAction(e)
            }
        }
    })
    e.default = a
})), define("kekka/components/pdr-legal-footer/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Us3IQI+L",
        block: '[[[41,[33,1,["isVisibleLegalLinks"]],[[[1,"    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n"],[6,[39,2],null,[["action","isTextDescriptionTypeFooter"],[[28,[37,3],[[30,0],"about",[28,[37,4],null,[["country","language","originClientId","requestLocale","unknownCountry"],[[33,5],[33,6],[33,7],[33,8],[33,9]]]]],null],true]],[["default"],[[[[1,"            "],[1,[28,[35,10],[[33,11]],null]],[1,"\\n"]],[]]]]],[1,"    "],[13],[1,"\\n"]],[]],null]],[],false,["if","appParamsService","pdr-text-link","action","hash","country","language","_originClientId","_requestLocale","_unknownCountry","pdr-loc","_linkText"]]',
        moduleName: "kekka/components/pdr-legal-footer/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-legal-links/component", ["exports", "@ember/component", "@ember/debug", "@ember/service", "@ember/utils", "kekka/services/legal-docs"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-legal-links",
        appParamsService: (0, i.inject)("app-params"),
        legalDocsService: (0, i.inject)("legal-docs"),
        region: null,
        country: null,
        language: null,
        displayLanguage: null,
        isSubAccount: !1,
        guideMessage: "msg_check_agree_conf",
        legalLinks: [],
        showWhatChanged: !1,
        onSelected: function() {},
        onError: function() {},
        _whatChangedLink: null,
        init: function() {
            this._super.apply(this, arguments), this._refresh()
        },
        _refresh: function() {
            var e = this,
                t = {
                    country: this.country,
                    region: this.region,
                    language: this.language,
                    displayLanguage: this.displayLanguage,
                    isSubAccount: this.isSubAccount
                }
            return this.legalDocsService.getDocList(t).then((function(n) {
                if (e.set("legalLinks", n), e.showWhatChanged) return e.legalDocsService.getWhatChanged(t).then((function(t) {
                    e.set("_whatChangedLink", t)
                }))
            }))
        },
        actions: {
            chooseLink: function(e) {
                var t = this,
                    n = e.testId,
                    i = e.url,
                    o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                (0, r.isEmpty)(i) ? o ? this._refresh().then((function() {
                    n === a.DOC_ID.WC ? t.send("chooseLink", t._whatChangedLink, !1) : t.send("chooseLink", t.legalLinks.findBy("testId", n), !1)
                })) : this.onError("SERVER_CONNECTION_TIMEOUT"): this.onSelected(i)
            }
        }
    })
    e.default = o
})), define("kekka/components/pdr-legal-links/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "j3JM5+xa",
        block: '[[[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,2]],null]],[13],[1,"\\n"],[41,[33,4],[[[6,[39,5],null,[["action","isTextDescriptionTypeSmall","isRedirectLink"],[[28,[37,6],[[30,0],"chooseLink",[33,7]],null],false,true]],[["default"],[[[[1,"        "],[1,[28,[35,1],[[33,7,["title"]]],null]],[1,"\\n"]],[]]]]]],[]],null],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,9],[[28,[37,9],[[33,10]],null]],null],null,[[[1,"        "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n"],[6,[39,5],null,[["action","isTextDescriptionTypeSmall","class"],[[28,[37,6],[[30,0],"chooseLink",[30,1]],null],false,"grid-child with-bullet-point"]],[["default"],[[[[1,"                "],[1,[28,[35,1],[[30,1,["title"]]],null]],[1,"\\n"]],[]]]]],[1,"        "],[13],[1,"\\n"]],[1]],null],[13],[1,"\\n"]],["link"],false,["appParamsService","pdr-loc","guideMessage","if","showWhatChanged","pdr-text-link","action","_whatChangedLink","each","-track-array","legalLinks"]]',
        moduleName: "kekka/components/pdr-legal-links/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-legal-menu/component", ["exports", "@ember/service", "@ember/component", "kekka/services/legal-docs"], (function(e, t, n, i) {
    function r(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? r(Object(n), !0).forEach((function(t) {
                o(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = n.default.extend({
        tagName: "ul",
        attributeBindings: ["data-components"],
        "data-components": "pdr-legal-menu",
        appParamsService: (0, t.inject)("app-params"),
        cobrandingDataService: (0, t.inject)("cobranding-data"),
        legalDocsService: (0, t.inject)("legal-docs"),
        region: null,
        country: null,
        language: null,
        isSubAccount: !1,
        action: function() {},
        init: function() {
            var e = this
            this._super.apply(this, arguments)
            var t = this.appParamsService,
                n = {
                    url: null,
                    testId: "siteMap",
                    title: "msg_site_map"
                },
                r = {
                    region: this.region,
                    country: this.country,
                    language: this.language,
                    isSubAccount: this.isSubAccount
                }
            if (!t.get("isAvailableCobrandingData") || t.get("isPsnUser")) {
                var o = {
                    url: "CS_HELP_PAGE",
                    testId: "help",
                    title: "msg_sf_regcam_ev_help"
                }
                this.legalDocsService.getDocList(r).then((function(t) {
                    var r = t.map((function(e) {
                        return e.testId === i.DOC_ID.TOS ? a(a({}, e), {}, {
                            title: "msg_terms_of_service"
                        }) : e
                    }))
                    e.set("_dataList", e._reduceAboutMenuList(r.concat([o, n])))
                }))
            } else this.set("_dataList", this._reduceAboutMenuList(this.cobrandingDataService.createAboutMenuList().concat(n)))
        },
        _reduceAboutMenuList: function(e) {
            var t = this
            return e.reduce((function(e, n) {
                return t.appParamsService.get("unknownCountry") && !["help", "siteMap"].includes(n.testId) || e.push(n), e
            }), [])
        },
        actions: {
            buttonAction: function(e) {
                this.action(e)
            }
        }
    })
    e.default = s
})), define("kekka/components/pdr-legal-menu/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "9et0q1OT",
        block: '[[[42,[28,[37,1],[[28,[37,1],[[33,2]],null]],null],null,[[[1,"    "],[1,[28,[35,3],null,[["model","actionParam","listType","action","listClass"],[[28,[37,4],null,[["mainText"],[[30,1,["title"]]]]],[30,1],"listButton","buttonAction","hide-drilldown"]]]],[1,"\\n"]],[1]],null],[18,2,null],[1,"\\n"]],["item","&default"],false,["each","-track-array","_dataList","pdr-li","hash","yield"]]',
        moduleName: "kekka/components/pdr-legal-menu/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-li-button-row/component", ["exports", "@ember/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        attributeBindings: ["data-components", "tabindex"],
        "data-components": "pdr-li-button-row",
        tagName: "button",
        classNameBindings: ["enabledDefaultStyle:pdr-list-button"],
        tabindex: 0,
        enabledDefaultStyle: !0
    })
    e.default = n
})), define("kekka/components/pdr-li-button-row/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "MQazscQg",
        block: '[[[10,0],[15,0,[29,["pdr-list-item ",[36,0]]]],[12],[1,"\\n    "],[18,1,null],[1,"\\n"],[13],[1,"\\n"]],["&default"],false,["rowClass","yield"]]',
        moduleName: "kekka/components/pdr-li-button-row/template.hbs",
        isStrictMode: !1
    })
    e.default = n
}))
define("kekka/components/pdr-li-row/component", ["exports", "@ember/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-li-row",
        classNames: ["pdr-list-item"],
        classNameBindings: ["rowClass"]
    })
    e.default = n
})), define("kekka/components/pdr-li-row/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "XWvPufWC",
        block: '[[[18,1,null],[1,"\\n"]],["&default"],false,["yield"]]',
        moduleName: "kekka/components/pdr-li-row/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-li/component", ["exports", "@ember/template", "@ember/polyfills", "@ember/array", "@ember/object", "@ember/object/computed", "@ember/service", "@ember/component", "@ember/utils"], (function(e, t, n, i, r, a, o, s, l) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = s.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-li",
        tagName: "li",
        appParamsService: (0, o.inject)("app-params"),
        listType: "list",
        action: null,
        actionParam: null,
        model: null,
        listClass: null,
        buttonProperties: null,
        enabledDrillDown: !0,
        _isListButton: (0, a.equal)("listType", "listButton"),
        _showDrillDownIcon: (0, a.and)("_isListButton", "enabledDrillDown"),
        listRowComponentName: (0, r.computed)("listType", (function() {
            switch (this.listType) {
                case "list":
                default:
                    return "pdr-li-row"
                case "listButton":
                    return "pdr-li-button-row"
            }
        })),
        _model: (0, r.computed)("model", (function() {
            return [].concat((0, i.A)(this.model)).map((function(e, i, r) {
                var a = [].concat(e.items || e).map((function(e) {
                    return (0, n.assign)({}, e, {
                        _imageStyle: (0, t.htmlSafe)(e.imageUrl ? 'background-image: url("'.concat(e.imageUrl, '");') : "")
                    })
                }))
                return (0, n.assign)({}, e, {
                    items: a,
                    isLastColumn: r.length - 1 === i
                })
            }))
        })),
        click: function() {
            this.send("listAction", this.actionParam)
        },
        actions: {
            listAction: function(e) {
                this._doAction(e, "listButton")
            },
            buttonAction: function(e) {
                this._doAction(e, "list")
            }
        },
        _doAction: function(e, t) {
            var n = this.action;
            (0, l.isNone)(n) || this.listType !== t || ("function" !== (0, l.typeOf)(n) ? this.sendAction("action", e) : n(e))
        }
    })
    e.default = c
})), define("kekka/components/pdr-li/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "7z551rWz",
        block: '[[[46,[33,1],null,[["rowClass","class","enabledDefaultStyle"],[[33,2],[33,3],[33,4]]],[["default"],[[[[42,[28,[37,6],[[28,[37,6],[[33,7]],null]],null],null,[[[1,"        "],[10,0],[15,0,[29,["pdr-list-column flex-width ",[30,1,["columnWrapClass"]]]]],[12],[1,"\\n            "],[10,0],[14,0,"pdr-list-item"],[12],[1,"\\n                "],[10,0],[15,0,[29,["pdr-list-column flex-width ",[30,1,["childColumnWrapClass"]]]]],[12],[1,"\\n"],[42,[28,[37,6],[[28,[37,6],[[30,1,["items"]]],null]],null],null,[[[1,"                        "],[10,0],[15,0,[29,["pdr-list-item inner-list-item ",[30,2,["itemWrapClass"]]]]],[15,5,[30,2,["_imageStyle"]]],[12],[1,"\\n                            "],[10,0],[15,0,[29,["pdr-list-column flex-width column-unshrink ",[30,2,["itemColumnClass"]]]]],[12],[1,"\\n"],[41,[30,2,["mainText"]],[[[1,"                                    "],[10,0],[14,0,"pdr-list-item"],[12],[1,"\\n                                        "],[10,0],[15,0,[29,["pdr-list-column main-text ",[30,2,["mainTextClass"]]]]],[15,"dir",[33,9,["bidi"]]],[12],[1,"\\n"],[41,[30,2,["mainTextUnlocalized"]],[[[1,"                                                "],[1,[30,2,["mainText"]]],[1,"\\n"]],[]],[[[1,"                                                "],[1,[28,[35,10],[[30,2,["mainText"]]],null]],[1,"\\n"]],[]]],[1,"                                        "],[13],[1,"\\n                                    "],[13],[1,"\\n"]],[]],null],[41,[30,2,["helpDescription"]],[[[1,"                                    "],[10,0],[14,0,"pdr-list-item"],[12],[1,"\\n                                        "],[10,0],[15,0,[29,["pdr-list-column main-text fitting-width ",[30,2,["mainTextClass"]]]]],[12],[1,"\\n                                            "],[1,[28,[35,11],null,[["fieldTitle","helpDescription","notificationClass","titleClass","isAbsolute"],[[30,2,["fieldTitle"]],[30,2,["helpDescription"]],[28,[37,12],[[52,[30,2,["isPopupLayout"]],"popup-cancellation-margin "],"hint-message"],null],"",[28,[37,13],[[28,[37,14],[[33,9,["isSinglePane"]],[30,2,["isPopupLayout"]]],null]],null]]]]],[1,"\\n                                        "],[13],[1,"\\n                                    "],[13],[1,"\\n"]],[]],null],[41,[30,2,["component"]],[[[1,"                                    "],[10,0],[14,0,"pdr-list-item"],[12],[1,"\\n                                        "],[10,0],[15,0,[29,["pdr-list-column main-text ",[30,2,["componentClass"]]]]],[12],[1,"\\n"],[46,[30,2,["component"]],[[30,2,["componentParams"]]],null,[["default"],[[[],[]]]]],[1,"                                        "],[13],[1,"\\n                                    "],[13],[1,"\\n"]],[]],null],[41,[30,2,["subText"]],[[[41,[30,2,["mainText"]],[[[1,"                                        "],[10,0],[14,0,"row-unshrink separator-pageitems two-line-list"],[12],[13],[1,"\\n"]],[]],null],[1,"                                    "],[10,0],[14,0,"pdr-list-item"],[12],[1,"\\n                                        "],[10,0],[15,0,[29,["pdr-list-column sub-text ",[30,2,["subTextClass"]]]]],[15,"dir",[33,9,["bidi"]]],[12],[1,"\\n"],[41,[30,2,["subTextUnlocalized"]],[[[1,"                                                "],[1,[30,2,["subText"]]],[1,"\\n"]],[]],[[[1,"                                                "],[1,[28,[35,10],[[30,2,["subText"]]],null]],[1,"\\n"]],[]]],[1,"                                        "],[13],[1,"\\n                                    "],[13],[1,"\\n"]],[]],null],[41,[30,2,["indicatorClass"]],[[[1,"                                    "],[10,0],[15,0,[30,2,["indicatorClass"]]],[14,"role","img"],[15,"aria-label",[28,[37,15],[[30,2,["indicatorAriaLabel"]]],null]],[12],[13],[1,"\\n"]],[]],null],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n"]],[2]],null],[1,"                "],[13],[1,"\\n"],[41,[30,1,["isLastColumn"]],[[[41,[33,16],[[[1,"                        "],[10,0],[15,0,[29,["pdr-list-column column-unshrink icon-drilldown ",[36,17]]]],[15,"title",[28,[37,15],["msg_select_vb"],null]],[12],[13],[1,"\\n"]],[]],null],[41,[33,18],[[[1,"                        "],[10,0],[15,0,[29,["pdr-list-column column-unshrink button-column ",[33,18,["buttonWrapClass"]]]]],[12],[1,"\\n                            "],[1,[28,[35,19],null,[["isLoading","locale","caption","isDisableLoadingCaption","action","class"],[[33,18,["isLoading"]],[33,18,["locale"]],[33,18,["caption"]],[33,18,["isDisableLoadingCaption"]],[28,[37,20],[[30,0],"buttonAction",[33,21]],null],[33,18,["class"]]]]]],[1,"\\n                        "],[13],[1,"\\n"]],[]],null]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[1]],null]],[]]]]]],["column","item"],false,["component","listRowComponentName","listClass","listButtonClass","enabledDefaultStyle","each","-track-array","_model","if","appParamsService","pdr-loc","pdr-label-with-help","concat","not","or","pdr-loc-attr","_showDrillDownIcon","drillDownClass","buttonProperties","pdr-secondary-button","action","actionParam"]]',
        moduleName: "kekka/components/pdr-li/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-main-content/component", ["exports", "@ember/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        attributeBindings: ["data-components", "role", "tabindex", "style"],
        "data-components": "pdr-main-content",
        tagName: "main",
        tabindex: -1,
        init: function() {
            this._super.apply(this, arguments), document.createElement("main") instanceof HTMLUnknownElement && this.setProperties({
                role: "main",
                tagName: "div"
            })
        }
    })
    e.default = n
})), define("kekka/components/pdr-main-content/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "czdoBrsL",
        block: '[[[18,1,null],[1,"\\n"]],["&default"],false,["yield"]]',
        moduleName: "kekka/components/pdr-main-content/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-masked-text/component", ["exports", "@ember/object", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-masked-text",
        classNames: ["columns", "is-align-center"],
        value: null,
        dataList: (0, t.computed)("value", (function() {
            var e = this.value
            if (e) {
                var t = e.split(""),
                    n = []
                return t.forEach((function(e) {
                    if ("*" === e) n.push({
                        asterisk: !0
                    })
                    else {
                        var t = n[n.length - 1]
                        t && !t.asterisk ? t.str += e : n.push({
                            asterisk: !1,
                            str: e
                        })
                    }
                })), n
            }
        })),
        init: function() {
            this._super.apply(this, arguments), this.properties && this.properties[0] && this.setProperties(this.properties[0])
        }
    }).reopenClass({
        positionalParams: "properties"
    })
    e.default = i
})), define("kekka/components/pdr-masked-text/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "O+YSAQKo",
        block: '[[[42,[28,[37,1],[[28,[37,1],[[33,2]],null]],null],null,[[[41,[30,1,["asterisk"]],[[[1,"        "],[10,0],[14,0,"icon-masked-text"],[12],[13],[1,"\\n"]],[]],[[[1,"        "],[10,1],[14,0,"masked-text"],[12],[1,[30,1,["str"]]],[13],[1,"\\n"]],[]]]],[1]],null]],["data"],false,["each","-track-array","dataList","if"]]',
        moduleName: "kekka/components/pdr-masked-text/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-nds-script/component", ["exports", "@ember/component", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-nds-script",
        ndsService: (0, n.inject)("nds"),
        placement: null,
        placementPage: null,
        init: function() {
            this._super.apply(this, arguments), this.ndsService.startNds(this.placement, this.placementPage)
        },
        willDestroyElement: function() {
            this._super.apply(this, arguments), this.ndsService.stopNds()
        }
    })
    e.default = i
})), define("kekka/components/pdr-notice/component", ["exports", "@ember/object", "@ember/service", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = {
            info: {
                noticeIconClass: "icon-information",
                noticeIconTitle: "msg_label_info",
                noticeFontClass: "theme-noticeinfo-font"
            },
            success: {
                noticeIconClass: "icon-success",
                noticeIconTitle: "msg_label_success",
                noticeFontClass: "theme-noticesuccess-font"
            },
            error: {
                noticeIconClass: "icon-caution",
                noticeIconTitle: "msg_label_error",
                noticeFontClass: "theme-noticeerror-font"
            }
        },
        a = i.default.extend({
            tagName: "div",
            classNames: ["row-notice"],
            classNameBindings: ["isVisible:isVisible"],
            attributeBindings: ["data-components"],
            "data-components": "pdr-notice",
            isVisible: !1,
            appParamsService: (0, n.inject)("app-params"),
            modalService: (0, n.inject)("modal"),
            localErrorNotice: null,
            localSuccessNotice: null,
            localInfoNotice: null,
            _contextType: "error",
            _contextTypeModel: (0, t.computed)("_contextType", (function() {
                return r[this._contextType] || {}
            })),
            _noticeIconClass: (0, t.computed)("_contextTypeModel", (function() {
                return this._contextTypeModel.noticeIconClass || ""
            })),
            _noticeIconTitle: (0, t.computed)("_contextTypeModel", (function() {
                return this._contextTypeModel.noticeIconTitle || ""
            })),
            _noticeFontClass: (0, t.computed)("_contextTypeModel", (function() {
                return this._contextTypeModel.noticeFontClass || ""
            })),
            notifyStringId: null,
            notifyStringArg: [],
            locale: null,
            enabledOnModal: !1,
            wrapClassNames: "",
            _wrapClass: (0, t.computed)("wrapClassNames", (function() {
                return "wrap-notice ".concat(this.wrapClassNames)
            })),
            init: function() {
                this._super.apply(this, arguments), this._update()
            },
            _update: (0, t.observer)("noticeService.updateTrigger", "localErrorNotice.updateTrigger", "localSuccessNotice.updateTrigger", "localInfoNotice.updateTrigger", (function() {
                var e, t, n = ""
                if (this.enabledOnModal || !this.get("modalService.isOpened")) {
                    if (this.noticeService && (e = this.noticeService.get("notifyStringId"), t = this.noticeService.get("notifyStringArg"), e && (n = "error")), !e) {
                        var i = this.localErrorNotice
                        i && (e = i.get("notifyStringId"), t = i.get("notifyStringArg"), n = "error")
                    }
                    if (!e) {
                        var r = this.localSuccessNotice
                        r && (e = r.get("notifyStringId"), t = r.get("notifyStringArg"), n = "success")
                    }
                    if (!e) {
                        var a = this.localInfoNotice
                        a && (e = a.get("notifyStringId"), t = a.get("notifyStringArg"), n = "info")
                    }
                }
                this.set("notifyStringId", e), this.set("notifyStringArg", t), this.set("_contextType", n), this.set("isVisible", !!e)
            }))
        })
    e.default = a
})), define("kekka/components/pdr-notice/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Yh+Mp3jR",
        block: '[[[10,0],[15,0,[36,0]],[12],[1,"\\n    "],[10,0],[14,0,"cell-notice top"],[12],[1,"\\n        "],[10,0],[15,0,[29,["notice-icon-base ",[36,1]]]],[15,"title",[28,[37,2],[[33,3]],null]],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"cell-notice middle"],[12],[1,"\\n        "],[10,0],[15,0,[29,["separator-notice text-notice text-margin ",[36,4]]]],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],[[33,7],[33,8]],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["_wrapClass","_noticeIconClass","pdr-loc-attr","_noticeIconTitle","_noticeFontClass","appParamsService","pdr-loc-fmt","notifyStringId","notifyStringArg"]]',
        moduleName: "kekka/components/pdr-notice/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-password-input/component", ["exports", "@ember/object", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        attributeBindings: ["data-components"],
        classNameBindings: ["isError:validate-error"],
        "data-components": "pdr-password-input",
        tabindex: 0,
        title: null,
        maxlength: 30,
        placeholder: null,
        model: null,
        modelKey: "screenValue",
        validation: null,
        validatorOptions: {},
        observableProperty: null,
        notAcceptedReasons: {},
        showPassword: !1,
        offLabel: "msg_password_display_off",
        onLabel: "msg_password_display_on",
        _auxiliaryInformation: (0, t.computed)("showPassword", (function() {
            return this.showPassword ? this.onLabel : this.offLabel
        })),
        _imageClass: (0, t.computed)("showPassword", (function() {
            return this.showPassword ? "disp-icon-on" : "disp-icon-off"
        })),
        _inputType: (0, t.computed)("showPassword", (function() {
            return this.showPassword ? "text" : "password"
        })),
        actions: {
            dispInputField: function() {
                this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur(), this.toggleProperty("showPassword")
            }
        }
    })
    e.default = i
})), define("kekka/components/pdr-password-input/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "wUILg162",
        block: '[[[6,[39,0],null,[["title","isForceLtr","type","maxlength","placeholder","autocomplete","model","modelKey","validation","validatorOptions","observableProperty","validateProperty","errorCallback","errorNotifier","notAcceptedReasons","ariaLabelledby","ariaLabel","name"],[[33,1],true,[33,2],[33,3],[33,4],[33,5],[33,6],[33,7],[33,8],[33,9],[33,10],[33,11],[33,12],[33,13],[33,14],[33,15],[33,16],[33,17]]],[["default"],[[[[1,"    "],[11,"button"],[16,"tabindex",[36,18]],[16,"title",[28,[37,19],[[33,20]],null]],[16,0,[29,["icon-disp-password ",[36,21]]]],[24,4,"button"],[4,[38,22],[[30,0],"dispInputField"],null],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-text-field-v2","title","_inputType","maxlength","placeholder","autocomplete","model","modelKey","validation","validatorOptions","observableProperty","validateProperty","errorCallback","errorNotifier","notAcceptedReasons","ariaLabelledby","ariaLabel","name","tabindex","pdr-loc-attr","_auxiliaryInformation","_imageClass","action"]]',
        moduleName: "kekka/components/pdr-password-input/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-popup-frame/component", ["exports", "@ember/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["modal", "rows", "scroller", "theme-dimmer"],
        "data-components": "pdr-popup-frame",
        isDialog: !1,
        isFixedHeight: !0,
        isSinglePane: !1
    })
    e.default = n
})), define("kekka/components/pdr-popup-frame/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "dzR7tbGq",
        block: '[[[41,[33,1],[[[1,"    "],[10,0],[14,0,"fitting rows theme-basebackground"],[12],[1,"\\n        "],[18,1,null],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[1,"    "],[10,0],[14,0,"separator-pagetop dialog row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"columns row-unshrink"],[12],[1,"\\n        "],[10,0],[15,0,[29,["separator-frame beside",[52,[33,3]," dialog"]," column-unshrink"]]],[12],[13],[1,"\\n        "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n        "],[10,0],[15,0,[29,["popup-frame",[52,[33,4]," fixed-popup-height"]," rows theme-basebackground"]]],[12],[1,"\\n            "],[18,1,null],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"column-flex"],[12],[13],[1,"\\n        "],[10,0],[15,0,[29,["separator-frame beside",[52,[33,3]," dialog"]," column-unshrink"]]],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter dialog row-unshrink"],[12],[13],[1,"\\n"]],[]]]],["&default"],false,["if","isSinglePane","yield","isDialog","isFixedHeight"]]',
        moduleName: "kekka/components/pdr-popup-frame/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-primary-button/component", ["exports", "kekka/components/pdr-button/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        type: "button"
    })
    e.default = n
})), define("kekka/components/pdr-primary-button/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "NGIpTThW",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[15,"disabled",[36,1]],[15,0,[29,["primary-button row-button text-button",[52,[33,3]," with-loading-white"],[52,[33,4]," disabled-loading-caption"]]]],[15,"title",[52,[33,3],[33,5]]],[15,"onfocus",[28,[37,6],[[30,0],"_onfocus"],null]],[15,4,[30,0,["type"]]],[12],[10,1],[15,"dir",[33,7,["bidi"]]],[14,0,"caption"],[12],[1,[28,[35,8],[[33,9]],null]],[13],[13],[1,"\\n"]],[],false,["tabindex","isDisabled","if","isLoading","isDisableLoadingCaption","loadingIconTitle","action","appParamsService","pdr-loc","caption"]]',
        moduleName: "kekka/components/pdr-primary-button/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-scroller/component", ["exports", "kekka/components/kekka-scroller/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        "data-components": "pdr-scroller",
        enabledLegalLinks: !0,
        upperPart: {
            isUpperPart: !0
        },
        lowerPart: {
            isLowerPart: !0
        },
        openAboutAction: "openAbout",
        actions: {
            openAbout: function(e) {
                this.sendAction("openAboutAction", e)
            }
        }
    })
    e.default = n
})), define("kekka/components/pdr-scroller/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "jrIN1QS8",
        block: '[[[41,[49,[30,1]],[[[1,"    "],[18,1,[[33,3]]],[1,"\\n"]],[]],[[[1,"    "],[18,1,null],[1,"\\n"]],[]]],[41,[33,4],[[[1,"    "],[1,[28,[35,5],null,[["classNames","country","forceShowTermsPrivacy","language","originClientId","requestLocale","openAboutAction"],["l-footer footer-in-scroller",[33,6],[33,7],[33,8],[33,9],[33,10],[28,[37,11],[[30,0],"openAbout"],null]]]]],[1,"\\n"]],[]],null],[41,[49,[30,1]],[[[1,"    "],[18,1,[[33,12]]],[1,"\\n"]],[]],null]],["&default"],false,["if","has-block-params","yield","upperPart","enabledLegalLinks","pdr-legal-footer","country","forceShowTermsPrivacy","language","originClientId","requestLocale","action","lowerPart"]]',
        moduleName: "kekka/components/pdr-scroller/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-secondary-button/component", ["exports", "kekka/components/pdr-button/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({})
    e.default = n
})), define("kekka/components/pdr-secondary-button/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "1+GDs6Wf",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[15,"disabled",[36,1]],[15,0,[29,["secondary-button row-button text-button",[52,[33,3]," with-loading-blue"],[52,[33,4]," disabled-loading-caption"]]]],[15,"title",[52,[33,3],[33,5]]],[15,"onfocus",[28,[37,6],[[30,0],"_onfocus"],null]],[14,4,"button"],[12],[10,1],[15,"dir",[33,7,["bidi"]]],[14,0,"caption"],[12],[1,[28,[35,8],[[33,9]],null]],[13],[13],[1,"\\n"]],[],false,["tabindex","isDisabled","if","isLoading","isDisableLoadingCaption","loadingIconTitle","action","appParamsService","pdr-loc","caption"]]',
        moduleName: "kekka/components/pdr-secondary-button/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-select-2sv-method/component", ["exports", "@ember/service", "@ember/component", "@ember/utils"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = n.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-select-2sv-method",
        appParamsService: (0, t.inject)("app-params"),
        setupServiceConfigService: (0, t.inject)("setup-service-config"),
        captionOfNotSetting: "msg_cancel_psn",
        init: function() {
            this._super.apply(this, arguments), this.set("_listModel", this.getListModel())
        },
        getListModel: function() {
            return [{
                enabled: !0,
                description: "msg_text_message",
                image: "sms",
                verificationMethod: "SMS"
            }, {
                enabled: this.setupServiceConfigService.config.enable_2sv_setup_with_authenticator,
                description: "msg_authenticator_app",
                image: "authenticator",
                verificationMethod: "AUTHENTICATOR"
            }].filterBy("enabled")
        },
        actions: {
            activate2sv: function(e) {
                this._doAction(this.activate, e)
            },
            cancel: function() {
                this._doAction(this.cancel)
            },
            learnMore: function() {
                this._doAction(this.learnMore)
            }
        },
        _doAction: function(e, t) {
            (0, i.isNone)(e) || "function" !== (0, i.typeOf)(e) || e(t)
        }
    })
    e.default = r
})), define("kekka/components/pdr-select-2sv-method/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "eC2AkMNX",
        block: '[[[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_protect_account_2sv"],null]],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,"ul"],[12],[1,"\\n"],[42,[28,[37,3],[[28,[37,3],[[33,4]],null]],null],null,[[[1,"        "],[1,[28,[35,5],null,[["action","actionParam","listClass","listType","model"],[[28,[37,6],[[30,0],"activate2sv"],null],[30,1,["verificationMethod"]],"fitting-left","listButton",[28,[37,7],[[28,[37,8],null,[["columnWrapClass","component","componentParams"],["fixed-width content-width no-margin","pdr-image-view",[28,[37,8],null,[["iconSizeClass","useDefaultProfile"],[[28,[37,9],["icon-2sv ",[30,1,["image"]]],null],false]]]]]],[28,[37,8],null,[["columnWrapClass","mainText"],["no-margin",[30,1,["description"]]]]]],null]]]]],[1,"\\n"]],[1]],null],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n"],[10,0],[14,0,"columns-center"],[12],[1,"\\n    "],[1,[28,[35,10],null,[["action","caption","class","isLoading"],[[28,[37,6],[[30,0],"cancel"],null],[33,11],"fitting-width",[33,12]]]]],[1,"\\n"],[13],[1,"\\n"],[41,[33,0,["isPsnUser"]],[[[1,"    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n    "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n        "],[1,[28,[35,1],["msg_2sv_how_to_signin_unsupported_devices"],null]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n        "],[1,[28,[35,1],["msg_2sv_unsupported_devices_notice"],null]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"legacy-device"],[12],[13],[1,"\\n"]],[]],null],[41,[33,14],[[[1,"    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"        "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,15],null,[["action"],[[28,[37,6],[[30,0],"learnMore"],null]]],[["default"],[[[[1,"                    "],[1,[28,[35,1],["msg_troubleshoot_see_2sv_description"],null]],[1,"\\n"]],[]]]]],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"]],[]],null]],["model"],false,["appParamsService","pdr-loc","each","-track-array","_listModel","pdr-li","action","array","hash","concat","pdr-secondary-button","captionOfNotSetting","isLoading","if","learnMore","pdr-text-link"]]',
        moduleName: "kekka/components/pdr-select-2sv-method/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-signin-form/component", ["exports", "@ember/component", "@ember/object", "@ember/object/computed"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        attributeBindings: ["data-components"],
        classNameBindings: ["isError:validate-error"],
        "data-components": "pdr-signin-form",
        signinIdTitle: null,
        passwordTitle: null,
        signinIdReadonly: !1,
        signinIdPlaceholder: null,
        passwordPlaceholder: null,
        model: null,
        signinIdReadonlyInputHidden: !1,
        _isValidSigninId: (0, i.notEmpty)("model.signinId"),
        _isValidPassword: (0, i.notEmpty)("model.password"),
        _isValid: (0, i.and)("_isValidSigninId", "_isValidPassword"),
        _isValidChange: (0, n.observer)("model.{signinId,password}", (function() {
            this.set("model.isValid", this._isValid)
        })),
        init: function() {
            this._super.apply(this, arguments), this._isValidChange()
        }
    })
    e.default = r
})), define("kekka/components/pdr-signin-form/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Y6Dn8ZBI",
        block: '[[[41,[33,1],[[[1,"    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n        "],[10,0],[14,0,"signin-id-text"],[12],[1,"\\n            "],[10,1],[14,0,"inline-break-all"],[12],[1,[33,2,["signinId"]]],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,"input"],[14,"tabindex","-1"],[14,0,"hidden"],[14,"autocomplete","email"],[15,2,[33,2,["signinId"]]],[14,4,"email"],[12],[13],[1,"\\n"]],[]],[[[1,"    "],[8,[39,3],null,[["@signinIdTitle","@readonly","@signinIdPlaceHolder","@value","@autocomplete","@onChangeSigninId"],[[30,0,["signinIdTitle"]],[30,0,["signinIdReadonly"]],[30,0,["signinIdPlaceholder"]],[30,0,["model","signinId"]],[52,[51,[30,0,["signinIdReadonly"]]],"email"],[28,[37,5],[[28,[37,6],[[30,0,["model","signinId"]]],null]],null]]],null],[1,"\\n"]],[]]],[1,[28,[35,7],null,[["class","title","placeholder","model","modelKey","ariaLabel","autocomplete"],[[52,[33,8],"hidden"],[33,9],[33,10],[33,2],"password",[33,10],"current-password"]]]],[1,"\\n"]],[],false,["if","signinIdReadonlyInputHidden","model","pdr-signin-id-v2","unless","fn","mut","pdr-password-input","passwordHidden","passwordTitle","passwordPlaceholder"]]',
        moduleName: "kekka/components/pdr-signin-form/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-signin-help/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["rows", "row-unshrink"],
        "data-components": "pdr-signin-help",
        appParamsService: (0, t.inject)("app-params")
    })
    e.default = i
})), define("kekka/components/pdr-signin-help/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "QVv+pLTl",
        block: '[[[10,0],[14,0,"page-items"],[12],[1,"\\n    "],[10,0],[14,0,"grid-parent description-medium"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-medium"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_signin_id_help"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,2],["msg_signin_id_help_desc1","msg_notification_email_address"],[["strong"],[true]]]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_signin_id_help_desc2_noref"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-medium"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-medium"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_help"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_help_desc1"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_help_desc2"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-medium"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-medium"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc1"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,"ul"],[12],[1,"\\n        "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc1_item1"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,2],["msg_password_reset_help_desc1_item2","msg_notification_email_address"],[["strong"],[true]]]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc1_item3"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc2"],null]],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc3"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc4_noref"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_password_reset_help_desc5_noref"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-medium"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-medium"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_further_help"],null]],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n        "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_further_help_desc1_noref"],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["appParamsService","pdr-loc","pdr-loc-fmt"]]',
        moduleName: "kekka/components/pdr-signin-help/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-signin-id-v2/component", ["exports", "@ember/component", "@ember/object"], (function(e, t, n) {
    function i(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? i(Object(n), !0).forEach((function(t) {
                a(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = {
            INVALID_FORMAT: {
                stringId: "msg_email_invalid"
            },
            NULL_VALUE: {
                stringId: ""
            }
        },
        s = t.default.extend({
            attributeBindings: ["data-components"],
            "data-components": "pdr-signin-id-v2",
            ariaLabelledby: null,
            readonly: !1,
            signinIdMaxLength: 63,
            signinIdPlaceHolder: "msg_email_address",
            signinIdTitle: "msg_email_address",
            notAcceptedReasons: {},
            value: null,
            autocomplete: "email",
            onChangeSigninId: function() {},
            _ariaLabel: (0, n.computed)("ariaLabelledby", "signinIdPlaceHolder", (function() {
                return this.ariaLabelledby ? null : this.signinIdPlaceHolder
            })),
            _autocomplete: (0, n.computed)("autocomplete", "readonly", (function() {
                return this.readonly ? null : this.autocomplete
            })),
            _nameAttr: (0, n.computed)("name", "readonly", (function() {
                return this.readonly ? null : this.name
            })),
            _notAcceptedReasons: (0, n.computed)("notAcceptedReasons", (function() {
                return r(r({}, o), this.notAcceptedReasons)
            }))
        })
    e.default = s
})), define("kekka/components/pdr-signin-id-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "5ranxV/F",
        block: '[[[8,[39,0],null,[["@ariaLabel","@ariaLabelledby","@isForceLtr","@maxlength","@placeholder","@readonly","@title","@type","@value","@onChangeValue","@notAcceptedReasons","@validation","@autocomplete","@name"],[[30,0,["_ariaLabel"]],[30,0,["ariaLabelledby"]],true,[30,0,["signinIdMaxLength"]],[30,0,["signinIdPlaceHolder"]],[30,0,["readonly"]],[30,0,["signinIdTitle"]],"email",[30,0,["value"]],[30,0,["onChangeSigninId"]],[30,0,["_notAcceptedReasons"]],[30,0,["validation"]],[30,0,["_autocomplete"]],[30,0,["_nameAttr"]]]],null],[1,"\\n"]],[],false,["pdr-text-field-with-validation"]]',
        moduleName: "kekka/components/pdr-signin-id-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-skip-link-button/component", ["exports", "kekka/components/pdr-button/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        classNames: ["fitting-button", "skip-link"],
        enableDefaultButtonStyle: !1
    })
    e.default = n
}))
define("kekka/components/pdr-skip-link-button/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "9Vm7adfr",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[14,0,"skip-link-button row-button text-button"],[14,4,"button"],[12],[10,1],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],[[33,3]],null]],[13],[13],[1,"\\n"]],[],false,["tabindex","appParamsService","pdr-loc","caption"]]',
        moduleName: "kekka/components/pdr-skip-link-button/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-skip-link/component", ["exports", "@ember/service", "@ember/component"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        tagName: "div",
        attributeBindings: ["data-components"],
        classNameBindings: ["isVisibleSkipLink:show"],
        classNames: ["columns-center"],
        "data-components": "pdr-skip-link",
        isVisibleSkipLink: !1,
        appParamsService: (0, t.inject)("app-params"),
        historyService: (0, t.inject)("history"),
        modalService: (0, t.inject)("modal"),
        init: function() {
            var e = this
            this._super.apply(this, arguments)
            var t = this.historyService
            t.on("didChange", (function() {
                e._refocusTop()
            }))
            var n = this.modalService
            n.on("didOpen", (function(t) {
                t || e._refocusTop()
            }))
        },
        _refocusTop: function() {
            document.body.querySelector('[data-components="kekka-application"]').focus()
        },
        actions: {
            skip: function() {
                var e = document.body.querySelectorAll('[data-components="pdr-main-content"]')
                e.length && e[e.length - 1].focus()
            },
            focusIn: function() {
                this.toggleProperty("isVisibleSkipLink")
            },
            focusOut: function() {
                this.toggleProperty("isVisibleSkipLink")
            }
        }
    })
    e.default = i
})), define("kekka/components/pdr-skip-link/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "U+fbVxKD",
        block: '[[[1,[28,[35,0],null,[["caption","action","focusIn","focusOut"],["msg_go_to_content","skip",[28,[37,1],[[30,0],"focusIn"],null],[28,[37,1],[[30,0],"focusOut"],null]]]]],[1,"\\n"]],[],false,["pdr-skip-link-button","action"]]',
        moduleName: "kekka/components/pdr-skip-link/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-terms-and-privacy/component", ["exports", "@ember/debug", "@ember/object", "@ember/service", "@ember/object/computed", "@ember/component", "hokkai/utils/string-utils"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = a.default.extend({
        attributeBindings: ["data-components", "data-text", "dir"],
        classNames: ["link-text", "default-color"],
        "data-components": "pdr-terms-and-privacy",
        "data-text": "legal-message",
        dir: (0, r.oneWay)("appParamsService.bidi"),
        appParamsService: (0, i.inject)("app-params"),
        tabindex: 0,
        locale: null,
        messageText: null,
        privacyAction: null,
        privacyCaption: null,
        termsAction: null,
        termsCaption: null,
        descriptionClassName: "description-regular",
        _legalMessages: (0, n.computed)("locale", (function() {
            var e = "split_message1",
                t = "split_message2",
                n = (0, o.localizeString)(this.messageText, [e, t]).toString().split(e),
                i = {}
            if (n && n.length > 1) {
                i.first = n[0]
                var r = n[1].split(t)
                r && r.length > 1 ? (i.middle = r[0], i.last = r[1]) : i.middle = n[1]
            }
            return i
        })),
        actions: {
            transitionToPrivacyPolicy: function() {
                this.sendAction("privacyAction")
            },
            transitionToTermsOfService: function() {
                this.sendAction("termsAction")
            }
        }
    })
    var l = s
    e.default = l
})), define("kekka/components/pdr-terms-and-privacy/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "D2iGg/PW",
        block: '[[[10,1],[15,0,[36,0]],[12],[2,[33,1,["first"]]],[13],[11,"button"],[16,0,[36,0]],[16,"tabindex",[36,2]],[16,"dir",[36,3]],[24,4,"button"],[4,[38,4],[[30,0],"transitionToTermsOfService"],null],[12],[1,[28,[35,5],[[33,6]],null]],[13],[10,1],[15,0,[36,0]],[12],[1,[33,1,["middle"]]],[13],[41,[33,8],[[[10,1],[14,0,"prevent-line-break"],[12],[11,"button"],[16,0,[36,0]],[16,"tabindex",[36,2]],[16,"dir",[36,3]],[24,4,"button"],[4,[38,4],[[30,0],"transitionToPrivacyPolicy"],null],[12],[1,[28,[35,5],[[33,8]],null]],[13],[10,1],[15,0,[36,0]],[12],[1,[33,1,["last"]]],[13],[13]],[]],null],[1,"\\n"]],[],false,["descriptionClassName","_legalMessages","tabindex","dir","action","pdr-loc","termsCaption","if","privacyCaption"]]',
        moduleName: "kekka/components/pdr-terms-and-privacy/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-field-v2/component", ["exports", "@ember/debug", "@ember/object", "@ember/object/computed", "@ember/service", "@ember/utils", "@ember/component"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = o.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-text-field-v2",
        appParamsService: (0, r.inject)("app-params"),
        tabindex: 0,
        title: null,
        isForceLtr: !1,
        type: "text",
        maxlength: null,
        readonly: !1,
        placeholder: null,
        model: null,
        modelKey: "screenValue",
        validation: null,
        validatorOptions: {},
        observableProperty: null,
        notAcceptedReasons: {},
        name: void 0,
        _errors: [],
        _name: (0, i.or)("name", "autocomplete"),
        _autocompleteDefaultValue: "off",
        _autocomplete: (0, i.or)("autocomplete", "_autocompleteDefaultValue"),
        _observableProperty: (0, n.observer)("observableProperty", (function() {
            var e = this.get("model.".concat(this.modelKey))
            this._validateProperty(e)
        })),
        _onError: (0, n.observer)("validation.error", (function() {
            var e = this.validation
            this.set("_errors", this._errorMessages(e))
        })),
        _errorMessages: function(e) {
            var t = this,
                n = e.error,
                i = []
            if (n.some((function(e) {
                    var n = [].concat(e.errorCodes)
                    return 0 === n.length || n.some((function(e) {
                        var n = t.notAcceptedReasons[e]
                        if (n) {
                            if ("" === n.stringId) return
                            var r = t.errorCallback
                            return (0, a.isNone)(r) || "function" !== (0, a.typeOf)(r) || r(n), void i.push(n.stringId)
                        }
                        return !0
                    }))
                })) && n.length) {
                var r = this.errorNotifier;
                (0, a.isNone)(r) || "function" !== (0, a.typeOf)(r) || r(n[0]), e.clearError()
            }
            return i
        },
        _validateProperty: function(e) {
            var t = this.validateProperty
            if ((0, a.isNone)(t) || "function" !== (0, a.typeOf)(t)) {
                var n = this.validation
                n && n.validateProperty(e, this.validatorOptions).catch((function(e) {}))
            } else t()
        },
        actions: {
            doInput: function(e) {
                var t = e.currentTarget.value
                this._validateProperty(t)
            }
        }
    })
    e.default = s
})), define("kekka/components/pdr-text-field-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "TGK3InpG",
        block: '[[[10,0],[15,0,[29,["textfield-input-wrapper",[52,[33,1]," validate-error"]]]],[12],[1,"\\n    "],[1,[28,[35,2],null,[["tabindex","title","class","dir","type","maxlength","readonly","placeholder","autocomplete","value","input","aria-labelledby","aria-label","name"],[[52,[33,3],"-1",[33,4]],[28,[37,5],[[33,6]],null],"textfield",[52,[33,7],"ltr",[33,8,["bidi"]]],[33,9],[33,10],[28,[33,3],null,null],[28,[37,5],[[33,11]],null],[33,12],[28,[37,13],[[28,[37,14],[[33,15],[33,16]],null]],null],[28,[37,17],[[30,0],"doInput"],null],[33,18],[28,[37,5],[[33,19]],null],[33,20]]]]],[1,"\\n"],[13],[1,"\\n"],[18,1,null],[1,"\\n"],[41,[33,1],[[[1,"    "],[1,[28,[35,22],null,[["messages"],[[33,1]]]]],[1,"\\n"]],[]],null]],["&default"],false,["if","_errors","input","readonly","tabindex","pdr-loc-attr","title","isForceLtr","appParamsService","type","maxlength","placeholder","_autocomplete","mut","get","model","modelKey","action","ariaLabelledby","ariaLabel","_name","yield","pdr-validation-notice"]]',
        moduleName: "kekka/components/pdr-text-field-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-field-v3/component", ["exports", "@ember/component", "@ember/debug", "@ember/object", "@ember/object/computed", "@ember/service"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = t.default.extend({
        attributeBindings: ["data-components"],
        classNames: ["textfield-input-wrapper"],
        "data-components": "pdr-text-field-v3",
        appParamsService: (0, a.inject)("app-params"),
        ariaLabel: null,
        ariaLabelledby: null,
        isForceLtr: !1,
        maxlength: null,
        placeholder: null,
        readonly: !1,
        tabindex: 0,
        title: null,
        type: "text",
        value: null,
        name: void 0,
        _name: (0, r.or)("name", "autocomplete"),
        _autocompleteDefaultValue: "off",
        _autocomplete: (0, r.or)("autocomplete", "_autocompleteDefaultValue"),
        onChangeValue: function() {},
        didReceiveAttrs: function() {
            this._super.apply(this, arguments), this._currentValue !== this.value && (this.set("_currentValue", this.value), this.onChangeValue(this._currentValue))
        },
        _dir: (0, i.computed)("isForceLtr", (function() {
            return this.isForceLtr ? "ltr" : this.get("appParamsService.bidi")
        })),
        _tabindex: (0, i.computed)("readonly", "tabindex", (function() {
            return this.readonly ? -1 : this.tabindex
        })),
        actions: {
            doInput: function(e) {
                var t = e.currentTarget.value
                this.onChangeValue(t)
            }
        }
    })
    e.default = o
})), define("kekka/components/pdr-text-field-v3/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "2Vz82ITi",
        block: '[[[8,[39,0],[[16,"tabindex",[30,0,["_tabindex"]]],[16,"title",[28,[37,1],[[30,0,["title"]]],null]],[24,0,"textfield"],[16,"aria-labelledby",[30,0,["ariaLabelledby"]]],[16,"dir",[30,0,["_dir"]]],[16,"aria-label",[28,[37,1],[[30,0,["ariaLabel"]]],null]],[16,"maxlength",[30,0,["maxlength"]]],[16,"readonly",[30,0,["readonly"]]],[16,"placeholder",[28,[37,1],[[30,0,["placeholder"]]],null]],[16,"autocomplete",[30,0,["_autocomplete"]]],[16,3,[30,0,["_name"]]],[4,[38,2],["input",[28,[37,3],[[30,0],"doInput"],null]],null]],[["@type","@value"],[[30,0,["type"]],[30,0,["_currentValue"]]]],null],[1,"\\n"]],[],false,["input","pdr-loc-attr","on","action"]]',
        moduleName: "kekka/components/pdr-text-field-v3/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-field-with-validation/component", ["exports", "@ember/debug", "@ember/object", "@ember/utils", "kekka/components/pdr-text-field-v3/component", "rsvp"], (function(e, t, n, i, r, a) {
    function o(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return s(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = r.default.extend({
        "data-components": "pdr-text-field-with-validation",
        notAcceptedReasons: {},
        validation: null,
        validatorOptions: {},
        init: function() {
            this._super.apply(this, arguments), this.set("classNames", null)
        },
        _errors: [],
        _onError: (0, n.observer)("validation.error", (function() {
            this.set("_errors", this._errorMessages(this.validation))
        })),
        _errorMessages: function(e) {
            var t = this,
                n = e.error,
                r = []
            if (n.some((function(e) {
                    var n = t.notAcceptedReasons,
                        i = o(e.errorCodes)
                    return 0 === i.length || i.some((function(e) {
                        var t = n[e]
                        if (!t) return !0 "" !== t.stringId && r.push(t.stringId)
                    }))
                })) && n.length) {
                var a = this.errorNotifier;
                (0, i.isNone)(a) || "function" !== (0, i.typeOf)(a) || a(n[0]), e.clearError()
            }
            return r
        },
        _validateProperty: function(e) {
            var t = this.validateProperty
            if (!(0, i.isNone)(t) && "function" === (0, i.typeOf)(t)) return t()
            var n = this.validation
            return n ? n.validateProperty(e, this.validatorOptions).catch((function(e) {})) : (0, a.resolve)()
        },
        actions: {
            doInput: function(e) {
                var t = this
                this._validateProperty(e).finally((function() {
                    t.onChangeValue(e)
                }))
            }
        }
    })
    e.default = l
})), define("kekka/components/pdr-text-field-with-validation/look-up-code/component", ["exports", "kekka/components/pdr-text-field-with-validation/component"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        "data-components": "pdr-text-field-with-validation::look-up-code"
    })
    e.default = n
})), define("kekka/components/pdr-text-field-with-validation/look-up-code/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "8jBYYmpY",
        block: '[[[10,0],[14,0,"columns"],[12],[1,"\\n    "],[8,[39,0],[[16,0,[29,["column-flex ",[52,[30,0,["_errors"]],"validate-error"]]]]],[["@ariaLabel","@ariaLabelledby","@autocomplete","@isForceLtr","@maxlength","@placeholder","@readonly","@tabindex","@title","@type","@value","@onChangeValue","@name"],[[30,0,["ariaLabel"]],[30,0,["ariaLabelledby"]],[30,0,["autocomplete"]],[30,0,["isForceLtr"]],[30,0,["maxlength"]],[30,0,["placeholder"]],[30,0,["readonly"]],[30,0,["tabindex"]],[30,0,["title"]],[30,0,["type"]],[30,0,["value"]],[28,[37,2],[[30,0],"doInput"],null],[30,0,["name"]]]],null],[1,"\\n    "],[1,[28,[35,3],null,[["isLoading","isDisabled","caption","action","param","classNames"],[[30,0,["isLoadingButton"]],[30,0,["isDisabledButton"]],[30,0,["buttonCaption"]],[30,0,["buttonAction"]],[30,0,["buttonParam"]],[30,0,["buttonClassNames"]]]]]],[1,"\\n"],[13],[1,"\\n"],[41,[30,0,["_errors"]],[[[1,"    "],[1,[28,[35,4],null,[["messages"],[[30,0,["_errors"]]]]]],[1,"\\n"]],[]],null]],[],false,["pdr-text-field-v3","if","action","pdr-secondary-button","pdr-validation-notice"]]',
        moduleName: "kekka/components/pdr-text-field-with-validation/look-up-code/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-field-with-validation/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "HCrPcMjG",
        block: '[[[8,[39,0],[[16,0,[52,[30,0,["_errors"]],"validate-error"]]],[["@ariaLabel","@ariaLabelledby","@autocomplete","@isForceLtr","@maxlength","@placeholder","@readonly","@tabindex","@title","@type","@value","@onChangeValue","@name"],[[30,0,["ariaLabel"]],[30,0,["ariaLabelledby"]],[30,0,["autocomplete"]],[30,0,["isForceLtr"]],[30,0,["maxlength"]],[30,0,["placeholder"]],[30,0,["readonly"]],[30,0,["tabindex"]],[30,0,["title"]],[30,0,["type"]],[30,0,["value"]],[28,[37,2],[[30,0],"doInput"],null],[30,0,["name"]]]],null],[1,"\\n"],[18,1,null],[1,"\\n"],[41,[30,0,["_errors"]],[[[1,"    "],[1,[28,[35,4],null,[["messages"],[[30,0,["_errors"]]]]]],[1,"\\n"]],[]],null]],["&default"],false,["pdr-text-field-v3","if","action","yield","pdr-validation-notice"]]',
        moduleName: "kekka/components/pdr-text-field-with-validation/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-field/component", ["exports", "@ember/service", "@ember/object/computed", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-text-field",
        appParamsService: (0, t.inject)("app-params"),
        tabindex: 0,
        isForceLtr: !1,
        type: "text",
        readonly: !1,
        modelKey: "screenValue",
        name: void 0,
        _name: (0, n.or)("name", "autocomplete"),
        _autocompleteDefaultValue: "off",
        _autocomplete: (0, n.or)("autocomplete", "_autocompleteDefaultValue"),
        errors: []
    })
    e.default = r
})), define("kekka/components/pdr-text-field/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "hu90MYtT",
        block: '[[[10,0],[15,0,[52,[48,[30,1]],"columns"]],[12],[1,"\\n    "],[10,0],[15,0,[29,["textfield-input-wrapper",[52,[48,[30,1]]," column-flex"],[52,[33,2]," validate-error"]]]],[12],[1,"\\n        "],[1,[28,[35,3],null,[["tabindex","title","class","dir","type","maxlength","readonly","placeholder","autocomplete","value","aria-labelledby","aria-label","name"],[[52,[33,4],"-1",[33,5]],[28,[37,6],[[33,7]],null],"textfield",[52,[33,8],"ltr",[33,9,["bidi"]]],[33,10],[33,11],[28,[33,4],null,null],[28,[37,6],[[33,12]],null],[33,13],[28,[37,14],[[28,[37,15],[[33,16],[33,17]],null]],null],[33,18],[28,[37,6],[[33,19]],null],[33,20]]]]],[1,"\\n    "],[13],[1,"\\n"],[41,[48,[30,1]],[[[1,"        "],[18,1,null],[1,"\\n"]],[]],null],[13],[1,"\\n"],[41,[33,2],[[[1,"    "],[1,[28,[35,22],null,[["messages"],[[33,2]]]]],[1,"\\n"]],[]],null]],["&default"],false,["if","has-block","errors","input","readonly","tabindex","pdr-loc-attr","title","isForceLtr","appParamsService","type","maxlength","placeholder","_autocomplete","mut","get","model","modelKey","ariaLabelledby","ariaLabel","_name","yield","pdr-validation-notice"]]',
        moduleName: "kekka/components/pdr-text-field/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-text-link/component", ["exports", "@ember/debug", "@ember/service", "@ember/utils", "@ember/object", "@ember/component"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = a.default.extend({
        tagName: "div",
        classNames: ["text-link"],
        attributeBindings: ["data-components"],
        "data-components": "pdr-text-link",
        appParamsService: (0, n.inject)("app-params"),
        tabindex: 0,
        isDisabled: !1,
        isTextDescriptionTypeFooter: !1,
        isTextDescriptionTypeSmall: !0,
        isRedirectLink: !1,
        _classeNames: (0, r.computed)("isTextDescriptionTypeFooter", "isTextDescriptionTypeSmall", "isRedirectLink", (function() {
            var e = []
            return e.push(this.isTextDescriptionTypeFooter ? "inline-text-footer" : ""), e.push(this.isTextDescriptionTypeSmall ? "inline-text-small" : "inline-text-regular"), e.push(this.isRedirectLink ? "underline" : ""), e.filter((function(e) {
                return e
            })).join(" ")
        })),
        click: function() {
            if (this.element.contains(document.activeElement) && document.activeElement.blur && document.activeElement.blur(), !this.isDisabled) {
                var e = this.action,
                    t = this.param "function" === (0, i.typeOf)(e) ? e(t) : (0, i.isEmpty)(e) || this.sendAction("action", t)
            }
        }
    })
    e.default = o
})), define("kekka/components/pdr-text-link/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Yt0AUYi8",
        block: '[[[10,"button"],[15,"tabindex",[36,0]],[15,"disabled",[36,1]],[15,0,[36,2]],[15,"dir",[33,3,["bidi"]]],[14,4,"button"],[12],[18,1,null],[13],[1,"\\n"]],["&default"],false,["tabindex","isDisabled","_classeNames","appParamsService","yield"]]',
        moduleName: "kekka/components/pdr-text-link/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-validation-notice/component", ["exports", "@ember/service", "@ember/object", "@ember/component"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = {
            info: {
                ariaLabel: "msg_label_info",
                iconClass: "icon-information"
            },
            warning: {
                ariaLabel: "msg_label_error",
                iconClass: "icon-caution"
            }
        },
        a = i.default.extend({
            attributeBindings: ["aria-atomic", "data-components", "role"],
            classNames: ["columns"],
            classNameBindings: ["baseFontClass"],
            "data-components": "pdr-validation-notice",
            appParamsService: (0, t.inject)("app-params"),
            baseFontClass: "description-small-text",
            dataText: "text-field-error",
            messages: [],
            level: "warning",
            iconClass: (0, n.computed)("level", (function() {
                var e = (r[this.level] || {}).iconClass
                return " ".concat(void 0 === e ? "" : e)
            })),
            ariaLabel: (0, n.computed)("level", (function() {
                var e = (r[this.level] || {}).ariaLabel
                return void 0 === e ? "" : e
            })),
            "aria-atomic": (0, n.computed)("level", (function() {
                return this.level ? "true" : null
            })),
            role: (0, n.computed)("level", (function() {
                return this.level ? "alert" : null
            }))
        })
    e.default = a
})), define("kekka/components/pdr-validation-notice/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Hg172XtC",
        block: '[[[41,[33,1],[[[1,"    "],[10,0],[15,0,[29,["column-unshrink icon-base",[36,2]]]],[14,"role","img"],[15,"aria-label",[28,[37,3],[[33,4]],null]],[12],[13],[1,"\\n"]],[]],null],[10,0],[15,0,[28,[37,5],["notice-message",[52,[51,[33,1]]," fitting-left"]],null]],[12],[1,"\\n"],[42,[28,[37,8],[[28,[37,8],[[33,9]],null]],null],null,[[[1,"        "],[10,0],[15,0,[36,1]],[15,"data-text",[36,10]],[15,"dir",[33,11,["bidi"]]],[12],[1,[28,[35,12],[[30,1]],null]],[13],[1,"\\n"]],[1]],null],[13],[1,"\\n"]],["message"],false,["if","level","iconClass","pdr-loc-attr","ariaLabel","concat","unless","each","-track-array","messages","dataText","appParamsService","pdr-loc"]]',
        moduleName: "kekka/components/pdr-validation-notice/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-verify-identity-code-v2/component", ["exports", "@ember/component", "@ember/object", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        attributeBindings: ["data-components"],
        "data-components": "pdr-verify-identity-code-v2",
        appParamsService: (0, i.inject)("app-params"),
        onResendVerificationCode: null,
        isLoading: !1,
        layoutType: "image",
        phoneNumber: null,
        resendCodeTitle: "msg_resend_code_info",
        enabledFittingButton: !1,
        value: null,
        onChangeValue: function() {},
        _verificationCodeTitleStringId: "msg_account_verification_code",
        _verificationCodeTitleId: (0, n.computed)("elementId", (function() {
            return "".concat(this.elementId, "_").concat(this._verificationCodeTitleStringId)
        }))
    })
    e.default = r
})), define("kekka/components/pdr-verify-identity-code-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "HxH0ZBQr",
        block: '[[[10,0],[14,0,"label description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_check_text_message_for_verification_code"],null]],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"label description-input-title"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],["msg_account_mobile_phone_number"],null]],[13],[1,"\\n"],[41,[28,[37,3],[[33,4],"image"],null],[[[1,"    "],[10,0],[14,0,"columns"],[12],[1,"\\n        "],[10,0],[14,0,"separator-pageitems beside narrow"],[12],[13],[1,"\\n        "],[1,[28,[35,5],null,[["class","value"],["list-cam-item",[33,6]]]]],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[41,[28,[37,3],[[33,4],"input"],null],[[[1,"    "],[1,[28,[35,7],null,[["isForceLtr","readonly","title","value"],[true,true,"msg_account_mobile_phone_number",[33,6]]]]],[1,"\\n"]],[]],null]],[]]],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[10,0],[14,0,"label description-input-title"],[15,1,[36,8]],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,9]],null]],[13],[1,"\\n"],[1,[28,[35,7],null,[["ariaLabelledby","isForceLtr","maxlength","title","value","onChangeValue","autocomplete"],[[33,8],true,16,[33,9],[33,10],[33,11],"one-time-code"]]]],[1,"\\n"],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"],[18,1,null],[1,"\\n"],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"],[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n"],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"],[10,0],[15,0,[28,[37,13],["rows",[52,[33,14]," is-align-center"]],null]],[12],[1,"\\n    "],[10,0],[15,0,[52,[33,14],"fitting-button"]],[12],[1,"\\n        "],[10,0],[14,0,"label description-input-title"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,1],[[33,15]],null]],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"],[10,0],[14,0,"columns-center"],[12],[1,"\\n    "],[1,[28,[35,16],null,[["action","caption","class","isLoading"],[[33,17],"msg_account_cta_code_resend","fitting-width",[33,18]]]]],[1,"\\n"],[13],[1,"\\n"]],["&default"],false,["appParamsService","pdr-loc","if","eq","layoutType","kekka-2sv-phone-number-display","phoneNumber","pdr-text-field-v3","_verificationCodeTitleId","_verificationCodeTitleStringId","value","onChangeValue","yield","concat","enabledFittingButton","resendCodeTitle","pdr-secondary-button","onResendVerificationCode","isLoading"]]',
        moduleName: "kekka/components/pdr-verify-identity-code-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/components/pdr-ws1lib-header/component", ["exports", "@ember/debug", "@ember/runloop", "@ember/object", "rsvp", "@ember/service", "@ember/component", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = o.default.extend({
        attributeBindings: ["data-components", "id"],
        "data-components": "pdr-ws1lib-header",
        id: "js-SIEWS1lib-header",
        analyticService: (0, a.inject)("analytic"),
        appParamsService: (0, a.inject)("app-params"),
        noticeService: (0, a.inject)("notice"),
        cobrandingDataService: (0, a.inject)("cobrandingData"),
        legalDocsService: (0, a.inject)("legal-docs"),
        country: null,
        language: null,
        locale: null,
        isVisibleWS1Header: !1,
        _ppUrl: null,
        init: function() {
            this._super.apply(this, arguments), this.country || this.set("analyticService.isPlatformPrivacyWs1Ready", !0), this.set("isVisibleWS1Header", !1), this._onChangeUpdateKey()
        },
        _onChangePlatformPrivacyLevel: (0, i.observer)("_platformPrivacyLevel", (function() {
            this.analyticService.updatePlatformPrivacyLevel(this._platformPrivacyLevel)
        })),
        _onChangeUpdateKey: (0, i.observer)("country", "language", "locale", (function() {
            var e = this
            PdrIF.waitForLoadSiews1lib((function() {
                (0, n.once)(e, e._onChanged)
            }))
        })),
        _onChanged: function() {
            var e = this
            this._hideWs1lib()
            var t = this._getPlatformPrivacyWs1(this.country)
            t ? this.country && this.set("_platformPrivacyLevel", t) : (this.set("_platformPrivacyLevel", null), this._showWs1lib().catch((function() {
                e.noticeService.setGlobalError("SERVER_CONNECTION_TIMEOUT"), e.set("_platformPrivacyLevel", "minimal")
            })))
        },
        _getPlatformPrivacyWs1: function(e) {
            var t = {
                country: e
            }
            this.get("appParamsService.isApplicationForDCIM") && (t.client_id = this.get("appParamsService.originClientId"))
            var n = window.SIEWS1lib ? window.SIEWS1lib.getPlatformPrivacyWs1(t) : "minimal"
            return n
        },
        _paramForWs1lib: function() {
            return this.get("appParamsService.isApplicationForDCIM") ? this._getParamWithDcimForWs1lib() : this._getParamWithPsnForWs1lib()
        },
        _getParamWithPsnForWs1lib: function() {
            return {
                country: this.country,
                language: this.locale,
                element: this.element,
                pp_url: this._ppUrl,
                domain: s.default.APP.siews1libDomain,
                disabled_fixed_top: !0,
                client_id: null
            }
        },
        _getParamWithDcimForWs1lib: function() {
            return {
                country: this.country,
                language: this.locale,
                element: this.element,
                pp_url: this._ppUrl,
                domain: s.default.APP.siews1libDomainCa,
                disabled_fixed_top: !0,
                client_id: this.get("appParamsService.originClientId")
            }
        },
        _showWs1lib: function() {
            var e = this,
                t = this.country,
                n = this.language
            return (this.get("appParamsService.isPsnUser") ? this.legalDocsService.getPrivacyPolicy({
                country: t,
                language: n
            }).then((function(e) {
                return e.url
            })) : (0, r.resolve)(this.get("cobrandingDataService.dataList.privacyUrl"))).then((function(t) {
                if (!t) return (0, r.reject)()
                e.set("_ppUrl", t)
                window.SIEWS1lib && window.SIEWS1lib.show(e._paramForWs1lib())
                e.set("isVisibleWS1Header", !0)
            }))
        },
        _hideWs1lib: function() {
            window.SIEWS1lib && (window.SIEWS1lib.hide(), this.set("isVisibleWS1Header", !1))
        }
    })
    e.default = l
})), define("kekka/email/controller", ["exports", "@ember/object", "@ember/service", "@ember/controller"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        application: (0, i.inject)(),
        noticeService: (0, n.inject)("notice"),
        localSuccessNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalSuccessNotice()
        })),
        localErrorNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        }))
    })
    e.default = r
})), define("kekka/email/route", ["exports", "@ember/object/computed", "@ember/object", "@ember/debug", "@ember/service", "@ember/routing/route", "@ember/runloop", "rsvp", "kekka/mixins/auth-redirect-params-for-cancel"], (function(e, t, n, i, r, a, o, s, l) {
    function c(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return d(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var u = "msg_account_created",
        p = "msg_another_email_sent",
        m = "msg_email_not_verified",
        g = a.default.extend(l.default, {
            allSignOutService: (0, r.inject)("all-sign-out"),
            cobrandingDataService: (0, r.inject)("cobranding-data"),
            countryResourceService: (0, r.inject)("country-resource"),
            evStatusService: (0, r.inject)("evStatus"),
            appParamsService: (0, r.inject)("app-params"),
            loadingService: (0, r.inject)("loading"),
            checkPersonalizationSettingsAdapterService: (0, r.inject)("check-personalization-settings-adapter"),
            recommend2svAdapter: (0, r.inject)("recommend-2sv-adapter"),
            setupServiceConfig: (0, r.inject)("setup-service-config"),
            tagManagerService: (0, r.inject)("tag-manager"),
            isFromSignIn: !1,
            activate: function() {
                this._super(), this.modalService.bindOutletRoute(this)
            },
            deactivate: function() {
                this._super(), this.modalService.unbindOutletRoute(this)
            },
            beforeModel: function() {
                var e = this
                this.evStatusService.initialize(), this.checkPersonalizationSettingsAdapterService.initialize(), this.modelFor("application").set("onUnhandledCloseFunc", (function() {
                    if (e.get("appParamsService.isAvailableCobrandingData")) {
                        var t = e.cobrandingDataService
                        return t.get("hasServiceHomePageUrl") ? (e.send("redirectTo", {
                            redirectUri: t.get("dataList.serviceHomePageUrl")
                        }), (0, s.resolve)()) : (0, s.reject)()
                    }
                    return e.get("appParamsService.hasAuthMandatoryParams") ? e.getAuthRedirectParamsForCancel(e.evStatusService).then((function(t) {
                        e.send("redirectTo", t)
                    })) : (0, s.reject)()
                }))
            },
            model: function() {
                var e = this.appParamsService,
                    t = e.storage.mandatoryEmailVerificationPageInfo,
                    n = e.hasRequestLocale,
                    i = e.initialLocale,
                    r = e.isAvailableCobrandingData && n
                return {
                    country: r ? i.country : t.country,
                    language: r ? i.language : t.language,
                    session: t,
                    backgroundImage: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/wallpaper.jpg"
                }
            },
            afterModel: function(e, t) {
                var n = this,
                    i = this.evStatusService,
                    r = this.appParamsService
                return this.countryResourceService.preloadResources(e.country, e.language, "EMAIL_VERIFICATION").then((function() {
                    return e.isTwoStepVerificationEnabled = n.countryResourceService.getResource("IS_TWO_STEP_VERIFICATION_ENABLED"), n.localizationService.updateStrings(e.language)
                })).then((function() {
                    return i.updateSession(e.session), i.getEmailVerificationStatus()
                })).then((function(t) {
                    var a = t.status
                    if (e.status = a, r.get("isAvailableCobrandingData")) {
                        n._needSendEVMail(a) && i.resendEmailVerification()
                        var o = n.cobrandingDataService
                        return o.initialize(r.get("originClientId"), e.language).then((function() {
                            o.get("hasSignOutUrl") && !r.get("isPsnUser") && n.allSignOutService.setSession(e.session), o.get("hasServiceBackgroundImage") && (e.backgroundImage = o.get("dataList.serviceBackgroundImage"))
                        }))
                    }
                })).catch((function(e) {
                    t.trigger(!1, "error", e, !0)
                }))
            },
            redirect: function(e, t) {
                var n = e.isTwoStepVerificationEnabled,
                    i = e.session,
                    r = e.status
                if (n && ("VERIFIED" === r || "EXEMPT" === r) && i && i.isFromCreateAccount) return this.appParamsService.storage.set("mandatoryRecommend2svPageInfo", i), void this.transitionTo("recommend2sv.entrance")
                var a = this.appParamsService;
                ("VERIFIED" === r || "EXEMPT" === r && !a.get("isApplicationForDCIM")) && this.npRuleRequired && (a.get("hasAuthMandatoryParams") ? t.trigger.apply(t, [!1, "authRedirect"].concat(Array.prototype.slice.call(arguments))) : t.trigger(!1, "closeOnSucceed", {}), t.abort()), this.noticeService.clearGlobalError()
            },
            setupController: function(e, t) {
                this._super.apply(this, arguments)
                var n = this.historyService.get("transitingRoute")
                this.noticeService.clearGlobalErrorOneTransition(), "email.verifyV2.index" === n ? e.get("localSuccessNotice").setSuccess(u).clearOneTransition() : e.get("localSuccessNotice").clearSuccess(), this.set("isFromSignIn", "email.verifyV2.authenticated" === n), this.send("resetRouteHistory")
            },
            _needSendEVMail: function(e) {
                var t = this.get("appParamsService.originClientId"),
                    n = this.get("setupServiceConfig.config.dont_send_ev_on_signin")
                return (!n || !n.includes(t)) && ("UNVERIFIED" === e || "EXEMPT" === e)
            },
            _redirectQueryOption: function() {
                var e = ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                return "always" === this.get("appParamsService.prompt") && e.push("prompt"), {
                    unhandledQueryParams: !0,
                    handledQueryParams: {
                        excludeKeys: e
                    }
                }
            },
            npRuleRequired: (0, t.reads)("appParamsService.isPsnUser"),
            _authRedirect: function(e, t) {
                var n = this.appParamsService,
                    i = {
                        redirectUri: "VERSA_OAUTH_AUTHORIZE",
                        options: this._redirectQueryOption()
                    },
                    r = e || this.controller.model
                if (r && "KR" === r.country && this.npRuleRequired) {
                    var a = n.get("toppingExcludedFromCreation")
                    a && a.length > 0 && (i.redirectUri = "PR_ACCOUNT_UPGRADE", i.params = {
                        pr_referer: "signin",
                        tp_street: a.indexOf("street") >= 0,
                        tp_psn: a.indexOf("psn") >= 0,
                        tp_social: a.indexOf("social") >= 0
                    })
                }
                this._triggeringChangesWithAction.call(t || this, "closeOnSucceed", i)
            },
            _triggeringChangesWithAction: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]
                this.isTransition ? this.trigger.apply(this, [!1, e].concat(n)) : this.send.apply(this, [e].concat(n))
            },
            _getAuthMethod: function() {
                var e = this.controller.get("model"),
                    t = e.isTwoStepVerificationEnabled,
                    n = e.session.isFromCreateAccount
                return t ? n ? (0, s.resolve)({
                    authMethod: ""
                }) : this.cobrandingDataService.get("enabledShow2SVSetup") && this.appParamsService.get("isAvailableCobrandingData") ? (this.recommend2svAdapter.initialize(), this.recommend2svAdapter.getAuthenticationMode()) : (0, s.reject)() : (0, s.reject)()
            },
            actions: {
                checkVerified: function() {
                    var e = this,
                        t = this.loadingService
                    t.beginTransition(!0, "verifying"), this.evStatusService.getEmailVerificationStatus().then((function(t) {
                        var n = t.status
                        switch (n) {
                            case "EXEMPT":
                            case "VERIFIED":
                                return e._getAuthMethod().then((function(t) {
                                    if ("TWO-STEP" === t.authMethod) return !0
                                    var n = e.controller.get("model"),
                                        i = n.country,
                                        r = n.language,
                                        a = n.session,
                                        o = a.isFromCreateAccount ? a : {
                                            country: i,
                                            language: r,
                                            signinId: a.signinId
                                        }
                                    e.appParamsService.storage.set("mandatoryRecommend2svPageInfo", o), e.transitionTo("recommend2sv.entrance")
                                })).catch((function(e) {
                                    return !0
                                }))
                            case "UNVERIFIED":
                                e.send("noticeVerificationFailed")
                                break
                            default:
                                e.send("noticeVerificationFailed", "UNEXPECTED_SERVER_ERROR")
                        }
                    })).then((function(t) {
                        t && (e.tagManagerService.fireDummyPageEvent(), e.get("appParamsService.hasAuthMandatoryParams") ? e.send("authRedirect") : e.send("closeOnSucceed"))
                    })).catch((function(n) {
                        t.abortTransition(), e.send("error", n)
                    })).finally((function() {
                        t.endTransition()
                    }))
                },
                noticeVerificationFailed: function(e) {
                    this.noticeService.clearGlobalError(), this.controller.get("localSuccessNotice").clearSuccess(), this.controller.get("localErrorNotice").setError(m, e).clearOneTransition()
                },
                noticeDidResendEmail: function() {
                    this.noticeService.clearGlobalError(), this.controller.get("localErrorNotice").clearError(), this.controller.get("localSuccessNotice").setSuccess(p).clearOneTransition()
                },
                doThisLater: function() {
                    var e = this,
                        t = this.appParamsService,
                        n = t.hasSupportScheme,
                        i = t.isPsnUser
                    if (!n) return i ? this.evStatusService.signout().then((function() {
                        e._authRedirect()
                    })) : void this.transitionTo("email.verifyV2.signout")
                    this.send("closeOnCancel")
                },
                redirectToSignOutUrl: function() {
                    var e, t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    e = n.isAllSignOut ? this.allSignOutService.allSignout() : this.evStatusService.signout()
                    var i = this.loadingService
                    i.beginTransition(!0, n.loadingFeedbackSpot), e.then((function() {
                        i.endTransition(), t.send("redirectTo", {
                            redirectUri: t.get("cobrandingDataService.dataList.signOutUrl")
                        })
                    })).catch((function(e) {
                        i.abortTransition(), t.send("error", e)
                    }))
                },
                error: function() {
                    return this.noticeService.clearGlobalErrorOneTransition(), !0
                },
                authRedirect: function(e, t) {
                    var n = arguments,
                        i = this
                    this.isFromSignIn && this.npRuleRequired ? this.checkPersonalizationSettingsAdapterService.needsForceUpgrade(this.appParamsService.appParams).then((function(e) {
                        if (e) return i.loadingService.endTransition(), void i._triggeringChangesWithAction.call(t || i, "redirectTo", {
                            redirectUri: "PR_ACCOUNT_UPGRADE",
                            params: {
                                entry: "upgrade_account",
                                pr_referer: "signin"
                            },
                            options: i._redirectQueryOption()
                        })
                        i._authRedirect.apply(i, c(n))
                    })).catch((function(e) {
                        i.send("error", e)
                    })) : this._authRedirect.apply(this, arguments)
                }
            }
        }),
        f = g
    e.default = f
})), define("kekka/email/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "0LsA7GSr",
        block: '[[[6,[39,0],null,[["country","language","locale","keepPrevious","hasBackground","wallPaperImagePath"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]],true,[33,3,["isPcTablet"]],[33,1,["backgroundImage"]]]],[["default"],[[[[1,"    "],[1,[28,[35,4],null,[["autoBackControl","enabledCancel","locale"],[true,[33,3,["enabledCancel"]],[33,2,["currentLocale"]]]]]],[1,"\\n    "],[6,[39,5],null,null,[["default"],[[[[1,[28,[35,6],[[33,7]],null]]],[]]]]],[1,"\\n"],[6,[39,8],null,[["id","class"],["kekka-main","wizard row-flex"]],[["default"],[[[[6,[39,9],null,[["classNames","localSuccessNotice","localErrorNotice","country","language","locale"],["rows fitting-parent",[33,10],[33,11],[33,1,["session","country"]],[33,1,["session","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"            "],[46,[28,[37,13],null,null],null,null,null],[1,"\\n"]],[]]]]]],[]]]]]],[]]]]]],[],false,["kekka-layout","model","localizationService","appParamsService","kekka-sony-header","kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","localSuccessNotice","localErrorNotice","component","-outlet"]]',
        moduleName: "kekka/email/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/email/verify-v2/authenticated/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({})
    e.default = n
})), define("kekka/email/verify-v2/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        email: (0, t.inject)()
    })
    e.default = n
})), define("kekka/email/verify-v2/route", ["exports", "@ember/object", "@ember/debug", "@ember/service", "@ember/routing/route", "kekka/services/arkose-labs"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = r.default.extend({
        arkoseLabsService: (0, i.inject)("arkose-labs"),
        cobrandingDataService: (0, i.inject)("cobranding-data"),
        evStatusService: (0, i.inject)("evStatus"),
        sessionService: (0, i.inject)("session"),
        setupServiceConfigService: (0, i.inject)("setup-service-config"),
        updateSigninIdAdapterService: (0, i.inject)("update-signin-id-adapter"),
        activate: function() {
            var e = this
            this._super()
            this.modalService.registerModal("signOutConfirmV2", "email/verify-v2/signout/confirm", {
                notCloseOnError: !0,
                unSendAnalyticTransitEvent: !0
            }), this.arkoseLabsService.loadScript(a.PUBLIC_KEY.ACCOUNT_UPDATE).catch((function(t) {
                e.send("error", t)
            }))
        },
        deactivate: function() {
            this._super(), this.modalService.unregisterModal("signOutConfirmV2")
        },
        beforeModel: function() {
            return this.updateSigninIdAdapterService.initialize()
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), t.verificationModel = {
                currentSigninId: t.session.signinId,
                newSigninId: t.session.signinId,
                readonly: !0,
                signinIdValidation: this.updateSigninIdAdapterService.createValidation("signinId")
            }
            var n = "CN" === t.country ? "msg_verifiy_email_id" : "msg_email_verified"
            e.set("email.headerTitle", n), this.controllerFor("application").set("pageNameId", n)
            var i = this.sessionService
            e.set("email.sessionService", i), i.set("signoutAction", "doThisLater"), i.setSession(t.session)
        },
        _setLocalErrorNotice: function(e) {
            var t = this.controller.get("email")
            this.send("clearNotice"), t.get("localErrorNotice").setError(e).clearOneTransition()
        },
        actions: {
            resendEmail: function() {
                var e = this,
                    t = this.loadingService
                t.beginTransition(!0, "resending"), this.evStatusService.resendEmailVerification().then((function(n) {
                    t.endTransition(), e.send("noticeDidResendEmail")
                })).catch((function(n) {
                    t.abortTransition(), e.send("error", n)
                }))
            },
            clearNotice: function() {
                var e = this.controller.get("email")
                return e.get("localErrorNotice").clearError(), e.get("localSuccessNotice").clearSuccess(), !0
            },
            confirm: function() {
                var e = this,
                    t = this.controller.get("model.verificationModel"),
                    n = this.loadingService
                n.beginTransition(!0, "resending"), this.sessionService.resetCaptcha()
                var i = this.get("appParamsService.isApplicationForDCIM"),
                    r = this.get("appParamsService.isAvailableCobrandingData"),
                    a = !0 === this.get("setupServiceConfigService.config.enable_auto_signin"),
                    o = i && r && a ? "CHANGE_SIGNIN_ID_WITH_AUTO_SIGNIN" : "CHANGE_SIGNIN_ID"
                this.updateSigninIdAdapterService.updateUserSigninId(t.newSigninId, !0, null, o).then((function() {
                    n.endTransition(), i && r && a ? e.send("authRedirectForChangeSigninId") : e.replaceWith("email.verifyV2.signinAgain")
                })).catch((function(t) {
                    if (n.abortTransition(), t) {
                        if (t.errorCodes && t.errorCodes.length > 0) {
                            if (t.errorCodes.indexOf("LOGINID_ALREADY_IN_USE") >= 0) return void e._setLocalErrorNotice("msg_error_change_email_uid")
                            if (t.errorCodes.indexOf("INVALID_EMAIL_ADDRESS") >= 0) return void e._setLocalErrorNotice("msg_email_invalid")
                        }
                        e.send("error", t)
                    }
                }))
            },
            toggleReadOnlyState: function() {
                this.toggleProperty("controller.model.verificationModel.readonly")
                var e = this.controller.get("model.verificationModel");
                (0, t.set)(e, "newSigninId", e.currentSigninId), this.send("clearNotice")
            },
            authRedirectForChangeSigninId: function(e) {
                var t = {
                    redirectUri: "VERSA_OAUTH_AUTHORIZE",
                    options: {
                        handledQueryParams: {
                            excludeKeys: ["error", "error_code", "error_description", "entry", "login_hint", "missing_mandatory_attributes"]
                        },
                        unhandledQueryParams: !0
                    },
                    params: e
                }
                this.send("closeOnSucceed", t)
            }
        }
    })
    e.default = o
})), define("kekka/email/verify-v2/signin-again/route", ["exports", "@ember/service", "@ember/routing/route", "kekka/helpers/pdr-loc-fmt"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = n.default.extend({
        cobrandingDataService: (0, t.inject)("cobranding-data"),
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.modalService.openModal("confirm", {
                descriptionCaption: (0, i.pdrLocFmt)(["msg_email_sent_verification_3", t.verificationModel.newSigninId], {
                    strong: !0
                }),
                primaryCaption: "msg_ok_psn",
                noSecondary: !0,
                confirmAction: "done"
            }, {
                keepModalOnTransition: !0
            }).then((function(e) {
                e.closeModal()
            }))
        },
        resetController: function(e, t) {
            t && this.modalService.closeModal("exit")
        },
        actions: {
            done: function() {
                var e = this.cobrandingDataService,
                    t = this.appParamsService,
                    n = t.hasSupportScheme,
                    i = t.isPsnUser,
                    r = t.loginHint
                if (this.set("modalService.enableTransitionOnCloseModal", !0), n) this.send("closeOnSucceed")
                else if (i) {
                    var a = {}
                    if (r) {
                        var o = this.modelFor("email")
                        a.login_hint = o.verificationModel.newSigninId
                    }
                    this.send("authRedirectForChangeSigninId", a)
                } else this.send("redirectTo", {
                    redirectUri: e.get("dataList.signOutUrl")
                })
            }
        }
    })
    e.default = r
})), define("kekka/email/verify-v2/signout/confirm/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "MzJzGxUW",
        block: '[[[6,[39,0],null,[["confirmAction","confirmParam","cancelAction","secondaryCaption","primaryCaption","isLoading"],[[33,1,["model","confirmAction"]],[33,1,["model","confirmParam"]],[33,1,["model","cancelAction"]],[33,1,["model","secondaryCaption"]],[33,1,["model","primaryCaption"]],[33,2,["transiting","confirm"]]]],[["default"],[[[[1,"    "],[1,[28,[35,3],null,[["value","caption","locale"],[[33,1,["model","confirmParam","isAllSignOut"]],[33,1,["model","caption"]],[33,4,["currentLocale"]]]]]],[1,"\\n"]],[]]]]]],[],false,["kekka-confirmation-popup","modalService","loadingService","pdr-checkbox","localizationService"]]',
        moduleName: "kekka/email/verify-v2/signout/confirm/template.hbs",
        isStrictMode: !1
    })
    e.default = n
}))
define("kekka/email/verify-v2/signout/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        model: function() {
            return {
                caption: "msg_sign_out_other_devices_2sv_on",
                confirmAction: "redirectToSignOutUrl",
                confirmParam: {
                    loadingFeedbackSpot: "confirm",
                    isAllSignOut: !0
                },
                primaryCaption: "msg_ok_psn",
                secondaryCaption: "msg_cancel_psn",
                cancelAction: "cancel"
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.modalService.openModal("signOutConfirmV2", t, {
                keepModalOnTransition: !0
            }).then((function(e) {
                e.closeModal()
            }))
        },
        resetController: function(e, t) {
            t && this.modalService.closeModal("exit")
        },
        actions: {
            cancel: function() {
                this.modalService.set("enableTransitionOnCloseModal", !0), this.send("back")
            }
        }
    })
    e.default = i
})), define("kekka/email/verify-v2/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "o95EHxwo",
        block: '[[[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,0],null,[["localSuccessNotice","localErrorNotice","classNames"],[[33,1,["localSuccessNotice"]],[33,1,["localErrorNotice"]],"item-notice"]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop longitudinal theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[1,[28,[35,2],null,[["model","alreadyVerifiedAction","isVerifying","resendEmailAction","isResending","changeSigninIdAction","confirmAction","doThisLaterAction","country"],[[33,3,["verificationModel"]],"checkVerified",[33,4,["transiting","verifying"]],"resendEmail",[33,4,["transiting","resending"]],"toggleReadOnlyState","confirm",[33,1,["sessionService","signoutAction"]],[33,3,["country"]]]]]],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n\\n"],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n"]],[],false,["pdr-notice","email","pdr-email-verification-v2","model","loadingService"]]',
        moduleName: "kekka/email/verify-v2/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/email/verify-v2/visited/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({})
    e.default = n
})), define("kekka/global-error/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        application: (0, t.inject)()
    })
    e.default = n
})), define("kekka/global-error/route", ["exports", "@ember/routing/route", "kekka/mixins/setup-language"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend(n.default, {
        activate: function() {
            this._super(), this.modalService.bindOutletRoute(this)
        },
        deactivate: function() {
            this._super(), this.modalService.unbindOutletRoute(this)
        },
        model: function(e, t) {
            var n = this.noticeService.get("latestErrorModel") || this.noticeService.setGlobalError("UNDEFINED_ERROR")
            return this.setInitialLanguage().then((function() {
                return n
            })).catch((function() {
                t.trigger(!1, "closeOnError", n.id, n.action, this.noticeService.latestErrorObject), t.abort()
            }))
        },
        setupController: function(e, t) {
            this.send("resetRouteHistory"), e.set("model", t), e.set("application.pageNameId", "msg_error")
        },
        actions: {
            closeOnCancel: function() {
                var e = this.get("controller.model")
                this.send("closeOnError", e.id, e.action, this.noticeService.latestErrorObject)
            },
            willTransition: function(e) {
                "terminator" !== e.targetName && (e.abort(), this.send("closeOnCancel"))
            }
        }
    })
    e.default = i
})), define("kekka/global-error/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "AevQ/yLf",
        block: '[[[6,[39,0],null,[["locale","keepPrevious","keepPreviousPanelSize","hasBackground"],[[33,1,["currentLocale"]],true,true,[33,2,["isModal"]]]],[["default"],[[[[1,"    "],[1,[28,[35,3],null,[["disabledBack","enabledCancel","locale"],[true,[33,2,["enabledCancel"]],[33,1,["currentLocale"]]]]]],[1,"\\n"],[6,[39,4],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,5],null,[["classNames"],["rows-between fitting-parent"]],[["default"],[[[[1,"            "],[10,0],[14,0,"separator-pagetop fatalerror row-unshrink"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n                "],[10,0],[14,0,"page-items row-flex fatalerror description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-parent"],[12],[1,"\\n                        "],[10,0],[14,0,"grid-parent"],[12],[1,"\\n                            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,2,["bidi"]]],[12],[1,[28,[35,6],[[33,7,["message"]]],null]],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pagefooter fatalerror row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[]]]]]],[],false,["kekka-layout","localizationService","appParamsService","kekka-sony-header","pdr-main-content","kekka-scroller","pdr-loc","model"]]',
        moduleName: "kekka/global-error/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "and", {
        enumerable: !0,
        get: function() {
            return t.and
        }
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/helpers/app-version", ["exports", "@ember/component/helper", "kekka/config/environment", "ember-cli-app-version/utils/regexp"], (function(e, t, n, i) {
    function r(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.default.APP.version,
            a = t.versionOnly || t.hideSha,
            o = t.shaOnly || t.hideVersion,
            s = null
        return a && (t.showExtended && (s = r.match(i.versionExtendedRegExp)), s || (s = r.match(i.versionRegExp))), o && (s = r.match(i.shaRegExp)), s ? s[0] : r
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.appVersion = r, e.default = void 0
    var a = (0, t.helper)(r)
    e.default = a
})), define("kekka/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "equal", {
        enumerable: !0,
        get: function() {
            return t.equal
        }
    })
})), define("kekka/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "gt", {
        enumerable: !0,
        get: function() {
            return t.gt
        }
    })
})), define("kekka/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "gte", {
        enumerable: !0,
        get: function() {
            return t.gte
        }
    })
})), define("kekka/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "isArray", {
        enumerable: !0,
        get: function() {
            return t.isArray
        }
    })
})), define("kekka/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "isEqual", {
        enumerable: !0,
        get: function() {
            return t.isEqual
        }
    })
})), define("kekka/helpers/lf-lock-model", ["exports", "liquid-fire/helpers/lf-lock-model"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "lfLockModel", {
        enumerable: !0,
        get: function() {
            return t.lfLockModel
        }
    })
})), define("kekka/helpers/lf-or", ["exports", "liquid-fire/helpers/lf-or"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "lfOr", {
        enumerable: !0,
        get: function() {
            return t.lfOr
        }
    })
})), define("kekka/helpers/loc-fmt-bold", ["exports", "@ember/component/helper", "@ember/template", "@ember/string", "ember"], (function(e, t, n, i, r) {
    function a(e, t) {
        var a = r.default.Handlebars.Utils.escapeExpression(e[0]),
            o = t.unlocalized ? r.default.Handlebars.Utils.escapeExpression(e[1]) : (0, i.loc)(r.default.Handlebars.Utils.escapeExpression(e[1]))
        return (0, n.htmlSafe)((0, i.loc)(a, '<span class="bold break-all">'.concat(o, "</span>")))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.locFmtBold = a
    var o = (0, t.helper)(a)
    e.default = o
})), define("kekka/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "lt", {
        enumerable: !0,
        get: function() {
            return t.lt
        }
    })
})), define("kekka/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "lte", {
        enumerable: !0,
        get: function() {
            return t.lte
        }
    })
})), define("kekka/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "notEqualHelper", {
        enumerable: !0,
        get: function() {
            return t.notEqualHelper
        }
    })
})), define("kekka/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "not", {
        enumerable: !0,
        get: function() {
            return t.not
        }
    })
})), define("kekka/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "or", {
        enumerable: !0,
        get: function() {
            return t.or
        }
    })
})), define("kekka/helpers/pdr-line-feed", ["exports", "@ember/component/helper", "@ember/template", "ember"], (function(e, t, n, i) {
    function r(e) {
        var t = i.default.Handlebars.Utils.escapeExpression(e[0])
        return (0, n.htmlSafe)(t.replace(/(\r\n|\n|\r)/gm, "<br>"))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLineFeed = r
    var a = (0, t.helper)(r)
    e.default = a
})), define("kekka/helpers/pdr-loc-attr", ["exports", "@ember/debug", "@ember/object", "@ember/service", "@ember/component/helper", "hokkai/utils/string-utils"], (function(e, t, n, i, r, a) {
    function o(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return s(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var i = t.length > 0 ? t[0] : null,
            r = t.length > 1 ? t.slice(1) : []
        if (r && r[0] && Array.isArray(r[0]) && (r = r[0]), i && Array.isArray(i)) {
            var s = i.length > 1 ? i.slice(1) : []
            r = [].concat(o(s), o(r)), i = i[0]
        }
        return (0, a.localizeStringWithoutReplace)(i, r)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocAttr = l
    var c = r.default.extend({
        localizationService: (0, i.inject)("localization"),
        onCurrentLocaleChanged: (0, n.observer)("localizationService.currentLocale", (function() {
            this.recompute()
        })),
        init: function() {
            this._super.apply(this, arguments), this.localizationService
        },
        compute: function() {
            return l.apply(void 0, arguments)
        }
    })
    var d = c
    e.default = d
})), define("kekka/helpers/pdr-loc-duration", ["exports", "@ember/component/helper", "ember", "kekka/utils/pdr-datetime-utils"], (function(e, t, n, i) {
    function r(e) {
        var t = n.default.Handlebars.Utils.escapeExpression(e[0])
        return (0, i.formatDuration)(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocDuration = r
    var a = (0, t.helper)(r)
    e.default = a
})), define("kekka/helpers/pdr-loc-fmt-v2", ["exports", "@ember/array", "@ember/debug", "@ember/object", "@ember/service", "@ember/component/helper", "@ember/string", "@ember/template", "@ember/polyfills", "ember"], (function(e, t, n, i, r, a, o, s, l, c) {
    function d(e) {
        return function(e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return u(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function p(e, n) {
        var i = c.default.Handlebars.Utils.escapeExpression(e[0]),
            r = Array.prototype.slice.call(e, 1).reduce((function(e, t) {
                return e.concat(t)
            }), []).map((function(e) {
                return "string" == typeof e ? (0, l.assign)({}, {
                    message: e
                }, n) : e || {}
            })),
            a = r.map((function(e, n) {
                var i, r = e.message,
                    a = e.breakAll,
                    s = e.unlocalized,
                    l = e.bold,
                    u = e.lineThrough,
                    p = e.classes,
                    m = e.strong,
                    g = e.linkAction,
                    f = c.default.Handlebars.Utils.escapeExpression(r),
                    h = s ? r : (0, o.loc)(f)
                if ("function" == typeof g) return "%@".concat(n)
                var v = (0, t.isArray)(p) ? d(p) : [p || ""]
                v.push(a ? "break-all" : "inline-break-all"), v.push(l ? "bold" : ""), v.push(u ? "line-through" : "")
                var _ = v.map((function(e) {
                        return c.default.Handlebars.Utils.escapeExpression(e)
                    })).filter((function(e) {
                        return e.length > 0
                    })).join(" "),
                    b = m ? "strong" : "span",
                    y = document.createElement(b)
                return (i = y.classList).add.apply(i, d(_.split(" "))), (s || f === h) && y.setAttribute("dir", "ltr"), y.appendChild(document.createTextNode(h)), y.outerHTML
            }))
        return (0, s.htmlSafe)((0, o.loc)(i, a).replace(/(\r\n|\n|\r)/gm, "<br>"))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocFmtV2 = p
    var m = a.default.extend({
        localizationService: (0, r.inject)("localization"),
        onCurrentLocaleChanged: (0, i.observer)("localizationService.currentLocale", (function() {
            this.recompute()
        })),
        init: function() {
            this._super.apply(this, arguments), this.localizationService
        },
        compute: function() {
            return p.apply(void 0, arguments)
        }
    })
    var g = m
    e.default = g
})), define("kekka/helpers/pdr-loc-fmt", ["exports", "@ember/array", "@ember/debug", "@ember/object", "@ember/service", "@ember/component/helper", "@ember/string", "@ember/template", "@ember/polyfills", "ember"], (function(e, t, n, i, r, a, o, s, l, c) {
    function d(e) {
        return function(e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return u(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function p(e, n) {
        var i = c.default.Handlebars.Utils.escapeExpression(e[0]),
            r = Array.prototype.slice.call(e, 1).reduce((function(e, t) {
                return e.concat(t)
            }), []).map((function(e) {
                return "string" == typeof e ? (0, l.assign)({}, {
                    message: e
                }, n) : e || {}
            })),
            a = r.map((function(e, n) {
                var i, r = e.message,
                    a = e.breakAll,
                    s = e.unlocalized,
                    l = e.bold,
                    u = e.lineThrough,
                    p = e.classes,
                    m = e.strong,
                    g = e.linkAction,
                    f = c.default.Handlebars.Utils.escapeExpression(r),
                    h = s ? f : (0, o.loc)(f)
                if ("function" == typeof g) return "%@".concat(n)
                var v = (0, t.isArray)(p) ? d(p) : [p || ""]
                v.push(a ? "break-all" : "inline-break-all"), v.push(l ? "bold" : ""), v.push(u ? "line-through" : "")
                var _ = v.map((function(e) {
                        return c.default.Handlebars.Utils.escapeExpression(e)
                    })).filter((function(e) {
                        return e.length > 0
                    })).join(" "),
                    b = m ? "strong" : "span",
                    y = document.createElement(b)
                return (i = y.classList).add.apply(i, d(_.split(" "))), f === h && y.setAttribute("dir", "ltr"), y.appendChild(document.createTextNode(h)), y.outerHTML
            }))
        return (0, s.htmlSafe)((0, o.loc)(i, a).replace(/(\r\n|\n|\r)/gm, "<br>"))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocFmt = p
    var m = a.default.extend({
        localizationService: (0, r.inject)("localization"),
        onCurrentLocaleChanged: (0, i.observer)("localizationService.currentLocale", (function() {
            this.recompute()
        })),
        init: function() {
            this._super.apply(this, arguments), this.localizationService
        },
        compute: function() {
            return p.apply(void 0, arguments)
        }
    })
    var g = m
    e.default = g
})), define("kekka/helpers/pdr-loc-playtime", ["exports", "@ember/component/helper", "kekka/utils/pdr-datetime-utils"], (function(e, t, n) {
    function i(e, t) {
        var i = t || {}
        return (0, n.formatPlaytime)(i.duration, i.wakeupTime, i.bedTime)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocPlaytime = i
    var r = (0, t.helper)(i)
    e.default = r
})), define("kekka/helpers/pdr-loc-time", ["exports", "@ember/component/helper", "ember", "kekka/utils/pdr-datetime-utils"], (function(e, t, n, i) {
    function r(e) {
        var t = n.default.Handlebars.Utils.escapeExpression(e[0])
        return (0, i.formatTime)(t)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.pdrLocTime = r
    var a = (0, t.helper)(r)
    e.default = a
})), define("kekka/helpers/pdr-loc", ["exports", "@ember/debug", "@ember/object", "@ember/service", "@ember/component/helper", "hokkai/utils/string-utils"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = r.default.extend({
        localizationService: (0, i.inject)("localization"),
        onCurrentLocaleChanged: (0, n.observer)("localizationService.currentLocale", (function() {
            this.recompute()
        })),
        init: function() {
            this._super.apply(this, arguments), this.localizationService
        },
        compute: function(e) {
            var t = e.length > 0 ? e[0] : null,
                n = e.length > 1 ? Array.prototype.slice.call(e, 1) : []
            if (n && n[0] && Array.isArray(n[0]) && (n = n[0]), t && Array.isArray(t)) {
                var i = t.length > 1 ? Array.prototype.slice.call(t, 1) : []
                n = n.concat(i), t = t[0]
            }
            return (0, a.localizeString)(t, n)
        }
    })
    var s = o
    e.default = s
}))

function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, _typeof(e)
}
define("kekka/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    }), Object.defineProperty(e, "xor", {
        enumerable: !0,
        get: function() {
            return t.xor
        }
    })
})), define("kekka/index-workaround", [], (function() {
    var e
    0 === (e = document.getElementsByTagName("html")[0]).offsetHeight ? (e.style.height = window.innerHeight + "px", e.className += " fitting-parent", window.addEventListener("resize", (function() {
        e.style.height = window.innerHeight + "px"
    }), !1)) : window.addEventListener("load", (function() {
        0 === e.offsetHeight && (e.style.height = window.innerHeight + "px", e.className += " fitting-parent", window.addEventListener("resize", (function() {
            e.style.height = window.innerHeight + "px"
        }), !1))
    }), !1)
})), define("kekka/index/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        beforeModel: function(e) {
            e.trigger(!1, "error", "NOSUCH_ROUTE_ERROR")
        }
    })
    e.default = n
})), define("kekka/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "kekka/config/environment"], (function(e, t, n) {
    var i, r
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n.default.APP && (i = n.default.APP.name, r = n.default.APP.version)
    var a = {
        name: "App Version",
        initialize: (0, t.default)(i, r)
    }
    e.default = a
})), define("kekka/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = {
        name: "container-debug-adapter",
        initialize: function() {
            var e = arguments[1] || arguments[0]
            e.register("container-debug-adapter:main", t.default)
        }
    }
    e.default = n
})), define("kekka/initializers/export-application-global", ["exports", "ember", "kekka/config/environment"], (function(e, t, n) {
    function i() {
        var e = arguments[1] || arguments[0]
        if (!1 !== n.default.exportApplicationGlobal) {
            var i
            if ("undefined" != typeof window) i = window
            else if ("undefined" != typeof global) i = global
            else {
                if ("undefined" == typeof self) return
                i = self
            }
            var r, a = n.default.exportApplicationGlobal
            r = "string" == typeof a ? a : t.default.String.classify(n.default.modulePrefix), i[r] || (i[r] = e, e.reopen({
                willDestroy: function() {
                    this._super.apply(this, arguments), delete i[r]
                }
            }))
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.initialize = i
    var r = {
        name: "export-application-global",
        initialize: i
    }
    e.default = r
})), define("kekka/initializers/inject-service", ["exports", "@ember/debug", "kekka/config/environment"], (function(e, t, n) {
    function i(e) {
        var t = window.location.hostname,
            i = /^id\.([a-zA-Z0-9-]+)\.sonyentertainmentnetwork\.com$/,
            r = /^my\.([a-zA-Z0-9-]+)\.account\.sony\.com$/,
            a = ""
        if (n.default.APP.devLine && "string" == typeof t && (a = i.test(t) ? i.exec(t)[1] : r.test(t) ? r.exec(t)[1] : n.default.APP.devLine || ""), "" !== a)
            for (var o in n.default.APP.lineName = a, n.default.APP) "string" == typeof n.default.APP[o] && n.default.APP[o].indexOf("{{line}}") >= 0 && (n.default.APP[o] = n.default.APP[o].replace(/{{line}}/, a))
        e.inject("service:modal", "noticeService", "service:notice"), e.inject("route", "noticeService", "service:notice"), e.inject("controller", "noticeService", "service:notice"), e.inject("component:pdr-notice", "noticeService", "service:notice"), e.inject("route", "localizationService", "service:localization"), e.inject("controller", "localizationService", "service:localization"), e.inject("component:kekka-slide-steps", "appParamsService", "service:app-params"), e.inject("route", "appParamsService", "service:app-params"), e.inject("controller", "appParamsService", "service:app-params"), e.inject("view:application", "appParamsService", "service:app-params"), e.inject("view:application", "appInterfaceService", "service:app-interface"), e.inject("route", "loadingService", "service:loading"), e.inject("controller", "loadingService", "service:loading"), e.inject("route", "modalService", "service:modal"), e.inject("controller", "modalService", "service:modal"), e.inject("service:notice", "historyService", "service:history"), e.inject("route", "historyService", "service:history"), e.inject("component:kekka-sony-header", "historyService", "service:history")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.initialize = i
    var r = {
        name: "inject-service",
        initialize: i
    }
    e.default = r
})), define("kekka/initializers/liquid-fire", ["exports", "liquid-fire/velocity-ext"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    e.default = {
        name: "liquid-fire",
        initialize: function() {}
    }
})), define("kekka/instance-initializers/setup-service", ["exports", "@ember/debug", "@ember/component/text-field", "ember", "hokkai/utils/error-object", "kekka/config/environment", "kekka/utils/promise-factory", "kekka/utils/url-utils"], (function(e, t, n, i, r, a, o, s) {
    function l(e) {
        var t = e.lookup("service:app-params")
        t.applyAuthVer()
        var n = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]
                this.isTransition ? this.trigger.apply(this, [!1, e].concat(n)) : this.send.apply(this, [e].concat(n))
            },
            l = e.lookup("service:history"),
            c = e.lookup("service:notice")
        i.default.onerror = function(t) {
            if (i.default.testing) throw t
            var a = r.HokkaiErrorObject.create().importErrorInfo(t)
            a.errorId = "UNEXPECTED_JS_ERROR", t.stack && (a.stack = t.stack)
            var o = e.lookup("service:router").currentRouteName,
                s = e.lookup("router:".concat(o))
            s || (s = e.lookup("route:application")), n.call(s, "error", a)
        }, e.lookup("service:loading").initialize({
            disableInteraction: function() {
                l.set("canBackTransition", !1), e.lookup("controller:application").disableInteraction()
            },
            enableInteraction: function() {
                l.set("canBackTransition", !0), e.lookup("controller:application").enableInteraction()
            }
        })
        var d = a.default.APP.authServiceURL;
        /\.playstation\.com$/.test(window.location.hostname) && (d = a.default.APP.authServiceURLonPlayStation)
        var u = e.lookup("service:setup-service-config"),
            p = {
                accountServiceUrl: a.default.APP.accountServiceURL,
                versaUserResourceServiceUrl: a.default.APP.versaUserResourceServiceURL,
                versaResourceServiceUrl: a.default.APP.versaResourceServiceURL,
                authServiceUrl: d,
                authV3ServiceUrl: a.default.APP.authV3ServiceURL,
                hashedAccountIdServiceUrl: a.default.APP.hashedAccountIdServiceURL,
                roadsterCanServiceUrl: a.default.APP.roadsterCanServiceURL,
                catalogServiceUrl: a.default.APP.catalogServiceURL,
                roadsterServiceAsmURL: a.default.APP.roadsterServiceAsmURL,
                regcamServiceURL: a.default.APP.regcamServiceURL,
                kamajiActivityUrl: a.default.APP.kamajiActivityURL,
                kamajiFileStoreUrl: a.default.APP.kamajiFileStoreURL,
                kamajiWalletURL: a.default.APP.kamajiWalletURL,
                privacyServiceUrl: a.default.APP.privacyServiceURL,
                gamelistServiceUrl: a.default.APP.gamelistServiceURL,
                whitelistsUrl: a.default.APP.whitelistsServiceURL,
                featureConfigUrl: a.default.APP.featureConfigURL,
                appinfoFeaturesURL: a.default.APP.appinfoFeaturesURL,
                privacySettingsServiceUrl: a.default.APP.privacySettingsServiceURL,
                templateServiceUrl: a.default.APP.templateServiceURL,
                gamelistV2ServiceUrl: a.default.APP.gamelistV2ServiceURL,
                privacySettingsV2ServiceUrl: a.default.APP.privacySettingsV2ServiceURL,
                templateV2ServiceUrl: a.default.APP.templateV2ServiceURL,
                verifiedAccountServiceUrl: a.default.APP.verifiedAccountServiceURL,
                socialNetworkServiceUrl: a.default.APP.socialNetworkServiceURL,
                korraWalletURL: a.default.APP.korraWalletURL,
                timeoutMsec: 15e3,
                promiseFactory: o.default,
                ajaxLibrary: XMLHttpRequest,
                clientLibrary: {
                    postMessage: window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sneiprlsif && window.webkit.messageHandlers.sneiprlsif.postMessage,
                    URL: window.URL
                },
                authClientId: a.default.APP.clientId,
                authClientSecret: a.default.APP.clientSecret,
                authClientId2: a.default.APP.clientId2,
                authClientSecret2: a.default.APP.clientSecret2,
                authClientId3: a.default.APP.clientId3,
                authClientSecret3: a.default.APP.clientSecret3,
                authClientId4: a.default.APP.clientId4,
                authClientSecret4: a.default.APP.clientSecret4,
                authClientId5: a.default.APP.clientId5,
                authClientSecret5: a.default.APP.clientSecret5,
                enableCALocale: t.get("isAvailableCobrandingData"),
                authClientId6: a.default.APP.clientId6,
                authClientSecret6: a.default.APP.clientSecret6,
                authClientId7: a.default.APP.clientId7,
                authClientSecret7: a.default.APP.clientSecret7,
                teamInvitationConfigURL: a.default.APP.teamInvitationConfigURL,
                iasServiceUrl: a.default.APP.iasServiceUrl,
                iasAccountServiceUrl: a.default.APP.iasAccountServiceURL,
                iasCoppaServiceUrl: a.default.APP.iasCoppaServiceURL,
                dmsServiceUrl: a.default.APP.dmsServiceUrl,
                drmServiceUrl: a.default.APP.drmServiceUrl,
                accountManagementUrl: a.default.APP.accountManagementURL,
                familyUrl: a.default.APP.familyURL,
                offlineAccountsUrl: a.default.APP.offlineAccountsURL,
                activityTrackingUrl: a.default.APP.activityTrackingURL,
                familyInvitationsUrl: a.default.APP.familyInvitationsURL,
                userConsentServiceUrl: a.default.APP.userConsentServiceURL,
                communicationRestrictionStatusUrl: a.default.APP.communicationRestrictionStatusUrl,
                restrictionsUrl: a.default.APP.restrictionsUrl,
                applicationPlatform: u.ApplicationPlatform.WEB,
                needsToAuthorizeCheck: !t.get("isApplicationForPdrCa"),
                basicProfileServiceURL: a.default.APP.basicProfileServiceURL
            }
        e.lookup("service:app-interface").isCentralAuthService() && (p.centralAuthServiceUrl = a.default.APP.centralAuthServiceURL), u.overrideServiceConfig(p), a.default.APP.scopeMapDefinition && u.setScopeGroupDefinitionMap(a.default.APP.scopeMapDefinition), u.setClearErrorHandler((function() {
            c.clearGlobalError()
        })), u.setUnhandledErrorHandler((function(t) {
            var i = e.lookup("service:router").currentRouteName,
                r = e.lookup("router:".concat(i))
            r || (r = e.lookup("route:application")), n.call(r, "error", t)
        })), a.default.APP.lineName ? u.setConfigCriteria({
            line: a.default.APP.lineName
        }) : a.default.APP.devLine && u.setConfigCriteria({
            line: a.default.APP.devLine
        })
        var m = location.search ? "?".concat((0, s.default)(location.search.substring(1), ["scope"])) : ""
        u.addAdditionalAuthHeaders({
            "X-Referer-Info": "".concat(location.protocol, "//").concat(location.host).concat(location.pathname).concat(m)
        }), a.default.APP.centralAuthServiceURL && t.get("isApplicationForDCIM") && (t.get("originClientId") ? u.addAdditionalHeaders({
            "X-Origin-ClientId": t.get("originClientId")
        }) : t.get("appParams.clientId") && (t.set("originClientId", t.get("appParams.clientId")), u.addAdditionalHeaders({
            "X-Origin-ClientId": t.get("appParams.clientId")
        })), t.get("cid") && u.addAdditionalHeaders({
            "X-CorrelationId": t.get("cid")
        })), t.get("duid") && u.addAdditionalAuthHeaders({
            DUID: t.get("duid")
        }), e.lookup("service:localization").initialize({
            enableCALocale: t.get("isAvailableCobrandingData")
        }), e.lookup("service:scope").initialize(e.lookup("service:app-interface").getCloudcarServices(), {
            lookupService: function(t) {
                return e.lookup(t)
            }
        }), e.lookup("service:analytic").initialize({
            sendAnalyticTransitEvent: function(t, i) {
                var r = e.lookup("service:router").currentRouteName,
                    a = e.lookup("router:".concat(r))
                a || (a = e.lookup("route:application")), n.call(a, "sendAnalyticTransitEvent", t, i)
            }
        })
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, e.initialize = l, n.default.reopen({
        attributeBindings: ["aria-labelledby", "aria-label", "aria-atomic"]
    })
    var c = {
        name: "setup-service",
        initialize: l
    }
    e.default = c
})), define("kekka/mixins/auth-redirect-params-for-cancel", ["exports", "rsvp", "@ember/object/mixin"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.create({
        getAuthRedirectParamsForCancel: function(e) {
            return e.signout().then((function() {
                return (0, t.resolve)({
                    redirectUri: "VERSA_OAUTH_AUTHORIZE",
                    params: {
                        prompt: "none"
                    },
                    options: {
                        unhandledQueryParams: !0,
                        handledQueryParams: {
                            excludeKeys: ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry", "prompt"]
                        }
                    }
                })
            }))
        }
    })
    e.default = i
})), define("kekka/mixins/loading-monitored-model", ["exports", "@ember/object/computed", "@ember/object/mixin", "rsvp", "@ember/object"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
            promises: [],
            activePromiseCount: 0,
            isLoading: (0, r.computed)("initialized", "activePromiseCount", (function() {
                return !this.initialized || this.activePromiseCount > 0
            })),
            init: function() {
                this._super.apply(this, arguments), this.set("initialized", !1), this.removeAllPromise()
            },
            addMonitoring: function(e) {
                var t = this
                return this.promises.push(e), this.incrementProperty("activePromiseCount"), e.finally((function() {
                    t.set("initialized", !0), t.decrementProperty("activePromiseCount")
                }))
            },
            waitForLoad: function() {
                var e = this
                return (0, i.all)(this.promises).finally((function() {
                    e.removeAllPromise()
                }))
            },
            removeAllPromise: function() {
                this.promises.length = 0
            }
        }),
        o = [],
        s = n.default.create({
            loadingMonitor: null,
            modelLoading: (0, t.bool)("loadingMonitor.isLoading"),
            init: function() {
                this._super.apply(this, arguments), this.set("loadingMonitor", a.create()), o.pushObject(this.loadingMonitor)
            },
            destroy: function() {
                o.removeObject(this.loadingMonitor)
            },
            getMonitor: function() {
                return this.loadingMonitor
            },
            hasMonitorWaitingFor: function() {
                return o.some((function(e) {
                    return e.activePromiseCount > 0
                }))
            },
            removeAllPromise: function() {
                return this.getMonitor().removeAllPromise()
            }
        })
    e.default = s
})), define("kekka/mixins/password-gated-model", ["exports", "rsvp", "@ember/object/computed", "@ember/service", "@ember/object/mixin", "@ember/runloop", "kekka/mixins/loading-monitored-model", "kekka/utils/handle-gated-scope-error"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = r.default.create(o.default, {
        sessionService: (0, i.inject)("session"),
        isModelLoadingWithScopeCheck: (0, n.or)("modelLoading", "isScopeChecking"),
        scopeCheckWithMonitoring: function(e, t) {
            var n = this.scopeCheck(e, t)
            return this.getMonitor().addMonitoring(n)
        },
        scopeCheck: function(e, t) {
            var n = this
            return this.sessionService.isPasswordGatingRequired().catch((function(i) {
                return n._handlePasswordGatingErrors(i, null, e, t)
            }))
        },
        _handlePasswordGatingErrors: function(e, n, i, r) {
            var a, o = this
            return (a = this.sessionService)._handlePasswordGatingErrors.apply(a, arguments).catch((function(e) {
                return o.sessionService.appParamsService.get("isApplicationForPdrCa") && (0, s.hasGatedScopeError)(e) && o.set("isScopeChecking", !0), (0, t.reject)(e)
            }))
        },
        _makePasswordGatable: function(e) {
            var t = this,
                n = function(e) {
                    return e.npsso = t.get("sessionService").session.npsso, e.errorCodes && (e.errorCodes = e.errorCodes.map((function(e) {
                        switch (e) {
                            case "AUTH_TOKEN_NOT_FOUND":
                            case "AUTH_TOKEN_EXPIRED":
                                return "AUTH_TOKEN_REQUIRED_WITH_SCOPES"
                            default:
                                return e
                        }
                    }))), e
                }
            return Array.isArray(e) ? e.map((function(e) {
                return n(e)
            })) : n(e)
        },
        _setUp: function() {
            for (var e = this, n = this.sessionService.session, i = this.sessionService.withPWGatedScopes, r = e.get("_setupServiceNames") || [], o = 0; o < r.length; o++) e.get(r[o]).setSession(n), e.get(r[o]).set("withPWGatedScopes", i)
            return e.didSetUp && "function" == typeof e.didSetUp ? e.didSetUp(n, i) : new t.Promise((function(t) {
                (0, a.next)((function() {
                    return t(e)
                }))
            }))
        }
    })
    e.default = l
})), define("kekka/mixins/setup-language", ["exports", "rsvp", "@ember/debug", "@ember/object/mixin"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.create({
        setInitialLanguage: function(e) {
            if (this.localizationService.currentLocale) return (0, t.resolve)()
            var n = e || this.get("appParamsService.initialLocale").language
            return this.localizationService.updateDefaultLocale(n).catch((function(e) {
                return (0, t.reject)("I18N_GET_ERROR")
            }))
        },
        setAccountLanguage: function(e) {
            var n = this
            return this.localizationService.currentLocale ? (0, t.resolve)() : e.getAccountModel(!0, !1, !0).then((function(e) {
                var t = e.data.language.value,
                    i = e.getAccountType()
                return n.appParamsService.set("accountType", i), n.localizationService.updateStrings(t)
            })).catch((function(e) {
                return e.errorId ? (0, t.reject)(e) : (0, t.reject)("I18N_GET_ERROR")
            }))
        },
        setInitialUnifiedLocale: function(e, n) {
            var i = this
            return this.localizationService.isAcceptableLocale(e, n) ? this.localizationService.updateStrings(n).then((function() {
                return (0, t.resolve)({
                    country: e,
                    language: n
                })
            })) : this.setInitialLanguage().then((function() {
                return (0, t.resolve)(i.get("appParamsService.initialLocale"))
            }))
        }
    })
    e.default = r
})), define("kekka/mixins/signin-utility", ["exports", "@ember/object/mixin", "@ember/service", "kekka/config/environment"], (function(e, t, n, i) {
    function r(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
            if (null == n) return
            var i, r, a = [],
                o = !0,
                s = !1
            try {
                for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
            } catch (l) {
                s = !0, r = l
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return a
        }(e, t) || o(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || o(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function o(e, t) {
        if (e) {
            if ("string" == typeof e) return s(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
        }
    }

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                d(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e) {
        for (var t = atob(e), n = "", i = 0, r = t.length - 1; i <= r; ++i) n += t[r - i]
        return atob(n).toString()
    }

    function p() {
        var e = new Uint32Array(4)
        return window.crypto && window.crypto.getRandomValues ? window.crypto.getRandomValues(e) : window.msCrypto && window.msCrypto.getRandomValues ? window.msCrypto.getRandomValues(e) : (e[0] = Date.now(), e[1] = Math.floor(4 * e[0]), e[2] = Math.floor(7 * e[1]), e[3] = Math.floor(9 * e[2])), "".concat(e[0].toString(16)).concat(e[1].toString(16)).concat(e[2].toString(16)).concat(e[3].toString(16))
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var m = t.default.create({
        appInterfaceService: (0, n.inject)("app-interface"),
        _getAuthRedirectParams: function(e) {
            var t = this,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = n.additionalQueries,
                a = n.serviceEntity,
                o = n.uri || null,
                s = this._getExcludeKeys(n),
                l = o
            n.excludeRedirectPdrUriQueryParameter || (l = this.appParamsService.createUri(o, r, {
                useHashQuery: !0,
                unhandledQueryParams: !0,
                handledQueryParams: {
                    excludeKeys: s
                }
            }))
            var c = function() {
                    var n = {
                        ui: "pr",
                        response_type: "token",
                        scope: e,
                        redirect_uri: l
                    }
                    return a && (n.service_entity = a), t.get("appParamsService.appParams.clientId") || (n.client_id = u(i.default.APP.clientId)), n
                },
                d = function() {
                    var n = {
                        ui: "pr",
                        response_type: "id_token token",
                        scope: e,
                        redirect_uri: l,
                        nonce: p()
                    }
                    return a && (n.service_entity = a), t.get("appParamsService.appParams.clientId") || (n.client_id = u(i.default.APP.clientId)), n
                }
            return {
                redirectUri: n.useV3Authorize ? "VERSA_OAUTH_AUTHORIZE_FOR_IMPLICIT_FLOW" : n.useOriginalAuthorize ? "VERSA_OAUTH_AUTHORIZE_ORG" : "VERSA_OAUTH_AUTHORIZE",
                params: n.useV3Authorize ? d() : c()
            }
        },
        getAccountLinkingAuthRedirectParams: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            t.useV3Authorize = this.appInterfaceService.isUseV3Authorize()
            var n = this._getAuthRedirectParams(e, t)
            n.params = c(c({}, n.params), this._getSignInRequiredParams(n)), n.params.client_id = u(i.default.APP.clientId)
            var r = "link_".concat(p()),
                a = this.appParamsService.state || "",
                o = a.split(",").filter((function(e) {
                    return !e.startsWith("link_")
                }))[0]
            return n.params.state = o && "".concat(o, ",").concat(r) || r, this.setCookie("link-state", r, 600), n
        },
        getUpgradeAuthRedirectParams: function(e, t) {
            var n = this._getAuthRedirectParams(e, t)
            n.params = c(c({}, n.params), this._getSignInRequiredParams(n)), n.params.client_id = u(i.default.APP.clientId), n.params.lgt = this.get("appParamsService.lgt"), delete n.params.service_entity
            var r = "upd_".concat(p()),
                a = (this.get("appParamsService.state") || "").split(",").filter((function(e) {
                    return !e.startsWith("upd_")
                }))[0]
            return n.params.state = a ? "".concat(a, ",").concat(r) : r, this.setCookie("upd-state", r, 600), n
        },
        getCamAuthRedirectParams: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            t.useV3Authorize = this.appInterfaceService.isUseV3Authorize()
            var n = this._getAuthRedirectParams(e, t)
            n.params = c(c({}, n.params), this._getSignInRequiredParams(n)), n.params.client_id = u(i.default.APP.clientId)
            var r = p()
            return n.params.state = r, this.setCookie("state", r, 600), n
        },
        getSignoutRedirectParamsWithCreateUri: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = this.appParamsService.createUri(e.uri || null, e.additionalQueries, {
                    handledQueryParams: {
                        excludeKeys: this._getExcludeKeys(e)
                    },
                    unhandledQueryParams: !0
                })
            return this.getSignoutRedirectParams(t)
        },
        getSignoutRedirectParams: function(e) {
            return {
                params: {
                    client_id: u(i.default.APP.clientId),
                    redirect_uri: e
                },
                redirectUri: "VERSA_OAUTH_SIGNOUT"
            }
        },
        _getExcludeKeys: function(e) {
            var t = e.additionalQueries,
                n = e.excludeKeys
            return ["access_token", "error", "error_code", "error_description", "expires_in", "gated", "id_token", "missing_mandatory_attributes", "npsso_token", "pr_referer", "prompt", "redirect_uri", "require_parent_signin", "signed_out", "signin_id", "state", "token_type"].concat(a(n || [])).filter((function(e) {
                return !t || !t[e]
            }))
        },
        _getSignInRequiredParams: function(e) {
            var t = e.params,
                n = {},
                i = this.appInterfaceService.getQueryParams()
            i.hasOwnProperty("animation") && (n.animation = i.animation), i.hasOwnProperty("device_base_font_size") && (n.device_base_font_size = i.device_base_font_size), i.hasOwnProperty("device_profile") && (n.device_profile = i.device_profile), i.hasOwnProperty("deviceID") && (n.deviceID = i.deviceID), i.hasOwnProperty("displayFooter") && (n.displayFooter = i.displayFooter), i.hasOwnProperty("duid") && (n.duid = i.duid), i.hasOwnProperty("elements_visibility") && (n.elements_visibility = i.elements_visibility), i.hasOwnProperty("hidePageElements") && (n.hidePageElements = i.hidePageElements), i.hasOwnProperty("layout_type") && (n.layout_type = i.layout_type), i.hasOwnProperty("origin_client_id") && (n.origin_client_id = i.origin_client_id), i.hasOwnProperty("PlatformPrivacyWs1") && (n.PlatformPrivacyWs1 = i.PlatformPrivacyWs1), i.hasOwnProperty("reportSuite") && (n.reportSuite = i.reportSuite), i.hasOwnProperty("request_locale") && (n.request_locale = i.request_locale), !t.service_entity && i.hasOwnProperty("service_entity") && (n.service_entity = i.service_entity), i.hasOwnProperty("smcid") && (n.smcid = i.smcid), i.hasOwnProperty("support_scheme") && (n.support_scheme = i.support_scheme), i.hasOwnProperty("enable_scheme_error_code") && (n.enable_scheme_error_code = i.enable_scheme_error_code)
            for (var a = 0, o = Object.entries(n); a < o.length; a++) {
                var s = r(o[a], 2),
                    l = s[0],
                    c = s[1]
                n[l] = decodeURIComponent(c)
            }
            return n
        },
        setCookie: function(e, t, n) {
            var i = document.domain.split("."),
                r = "".concat(i[i.length - 2], ".").concat(i[i.length - 1]),
                a = new Date
            a.setMinutes(a.getMinutes() + n)
            var o = encodeURI(t) + (null == n ? "" : ";expires=".concat(a.toUTCString(), "domain=.").concat(r, ";path=/"))
            document.cookie = "".concat(e, "=").concat(o)
        },
        removeCookie: function(e) {
            this.setCookie(e, "", -1)
        },
        getCookie: function(e) {
            var t, n, i, r = document.cookie.split(";")
            for (t = 0; t < r.length; t++)
                if (n = r[t].substr(0, r[t].indexOf("=")), i = r[t].substr(r[t].indexOf("=") + 1), (n = n.replace(/^\s+|\s+$/g, "")) === e) return decodeURI(i)
        }
    })
    e.default = m
})), define("kekka/no-def/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        beforeModel: function(e) {
            e.trigger(!1, "error", "NOSUCH_ROUTE_ERROR")
        }
    })
    e.default = n
})), define("kekka/recommend2sv/add-mobile-phone/controller", ["exports", "@ember/controller", "@ember/object", "@ember/array", "@ember/service"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default.extend({
        recommend2svAdapter: (0, r.inject)("recommend-2sv-adapter"),
        recommend2svController: (0, t.inject)("recommend2sv"),
        actions: {
            continue: function() {
                var e = this
                this.send("clearNotice")
                var t = this.model.recommend2svModel,
                    r = this.model.additionalPhoneData,
                    a = r.number,
                    o = r.countryCode,
                    s = this.recommend2svAdapter,
                    l = this.loadingService
                return l.beginTransition(!0, "continue"), s.addPhone(a, o, "mobile", !0).then((function(r) {
                    return s.getPhoneList().then((function(a) {
                        (0, n.set)(t, "mobilePhoneNumbers", (0, i.A)(a))
                        var o = t.mobilePhoneNumbers.findBy("id", r.phoneId)
                        o.ticketUuid = r.ticketUuid, (0, n.set)(t, "mobilePhoneNumber", o), e.send("sendAnalyticAddPhoneSuccessEvent"), e.send("transitionToVerifyMobileNumber")
                    }))
                })).catch((function(t) {
                    l.abortTransition(), t && e.model.validation.setError(t)
                }))
            },
            onError: function(e) {
                if (e) {
                    var t = e.errorCodes
                    if (t && t.length > 0)
                        for (var n = 0, i = t.length; n < i; ++n)
                            if ("MAXIMUM_NUMBER_OF_PHONES_REACHED_FOR_THIS_ACCOUNT" === t[n]) return this.recommend2svController.localErrorNoticeForSetupFailed.setError("msg_sf_error_server_transaction_failure_purchase_info", "MAXIMUM_NUMBER_OF_PHONES_REACHED_FOR_THIS_ACCOUNT"), void this.send("error", e)
                }
                this.send("setErrorForSetupFailed", e), this.send("error", e)
            }
        }
    })
    e.default = a
})), define("kekka/recommend2sv/add-mobile-phone/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        telemetryPhoneManipulationService: (0, n.inject)("telemetry-phone-manipulation"),
        telemetryTwoSVService: (0, n.inject)("telemetry-two-sv"),
        recommend2svAdapter: (0, n.inject)("recommend-2sv-adapter"),
        model: function() {
            var e = this.modelFor("recommend2sv"),
                t = (e.mobilePhoneNumber || {}).phone,
                n = void 0 === t ? null : t
            return {
                recommend2svModel: e,
                additionalPhoneData: {
                    screenValue: n,
                    number: n,
                    countryCode: null
                },
                validation: this.recommend2svAdapter.createPhoneNumberValidation(),
                notAcceptedReasons: {
                    INVALID_PHONE_COUNTRY_CODE: {
                        stringId: "msg_error_invalid_text_psn"
                    },
                    INVALID_PHONE_NUMBER_FORMAT: {
                        stringId: "msg_error_invalid_text_psn"
                    },
                    QUALIFIER_NOT_SUPPORTED: {
                        stringId: "msg_error_invalid_text_psn"
                    }
                }
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments)
            var n = t.recommend2svModel.onPhoneNumberCollection
            n && this.send("resetRouteHistory")
            var i = n ? "msg_account_mobile_phone" : "msg_account_feature_name_2sv"
            this.controllerFor("application").set("pageNameId", i), this.controllerFor("recommend2sv").set("headerTitle", i)
        },
        actions: {
            transitionToVerifyMobileNumber: function() {
                this.transitionTo("recommend2sv.verifyMobileNumber")
            },
            sendAnalyticTransitEvent: function(e) {
                var t = this.modelFor("recommend2sv")
                t.onPhoneNumberCollection ? this.telemetryPhoneManipulationService.sendAddPhoneStartEvent(t.getTelemetryPageData()) : this.telemetryTwoSVService.sendTwoSVAddPhoneStartEvent(e)
            },
            sendAnalyticAddPhoneSuccessEvent: function() {
                var e = this.modelFor("recommend2sv")
                e.onPhoneNumberCollection ? this.telemetryPhoneManipulationService.sendAddPhoneSuccessEvent(e.getTelemetryPageData()) : this.telemetryTwoSVService.sendTwoSVAddPhoneSuccessEvent()
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/add-mobile-phone/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "KUxtxi0q",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames"],["item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["model","defaultCountry","descriptionCaption","legalCaption","validation","notAcceptedReasons","phoneCountryCodeMap","errorNotifier"],[[33,1,["additionalPhoneData"]],[33,1,["recommend2svModel","country"]],[52,[33,1,["recommend2svModel","onPhoneNumberCollection"]],"msg_mobile_number_collection_description_1","msg_2sv_add_mobile_number_description"],[52,[33,1,["recommend2svModel","onPhoneNumberCollection"]],"msg_mobile_number_collection_description_2","msg_account_mobile_phone_legal"],[33,1,["validation"]],[33,1,["notAcceptedReasons"]],[33,1,["recommend2svModel","phoneCountryCodeMap"]],[28,[37,6],[[30,0],"onError"],null]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n"],[41,[33,1,["recommend2svModel","onPhoneNumberCollection"]],[[[1,"                "],[1,[28,[35,7],null,[["class","caption","action"],["column-flex","msg_skip","processingForTermination"]]]],[1,"\\n                "],[10,0],[14,0,"separator-pageitems beside narrow"],[12],[13],[1,"\\n"]],[]],null],[1,"            "],[1,[28,[35,8],null,[["class","caption","action","isLoading","isDisabled"],[[52,[33,1,["recommend2svModel","onPhoneNumberCollection"]],"column-flex","fitting-width"],"msg_sf_regcam_action_continue",[28,[37,6],[[30,0],"continue"],null],[33,9,["transiting","continue"]],[33,1,["validation","isNotValid"]]]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","pdr-add-mobile-phone","if","action","pdr-secondary-button","pdr-primary-button","loadingService"]]',
        moduleName: "kekka/recommend2sv/add-mobile-phone/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/auth-app/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            continue: function() {
                this.send("clearNotice"), this.send("transitionToVerifyAuthApp")
            }
        }
    })
    e.default = n
})), define("kekka/recommend2sv/auth-app/route", ["exports", "@ember/debug", "@ember/routing/route", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = n.default.extend({
        recommend2svAdapter: (0, i.inject)("recommend-2sv-adapter"),
        model: function() {
            return {
                recommend2svModel: this.modelFor("recommend2sv"),
                signinId: this.recommend2svAdapter.getSigninId()
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_account_feature_name_2sv"), this.controllerFor("recommend2sv").set("headerTitle", "msg_account_feature_name_2sv")
        },
        actions: {
            transitionToVerifyAuthApp: function() {
                this.transitionTo("recommend2sv.verifyAuthApp")
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/auth-app/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "1w9MDF+Q",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames"],["item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["secret","signinId"],[[33,1,["recommend2svModel","secret"]],[33,1,["signinId"]]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n            "],[1,[28,[35,5],null,[["caption","action","class"],["msg_sf_regcam_action_continue",[28,[37,6],[[30,0],"continue"],null],"fitting-width"]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","pdr-activate-auth-app","pdr-primary-button","action"]]',
        moduleName: "kekka/recommend2sv/auth-app/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/controller", ["exports", "@ember/controller", "@ember/object", "@ember/service", "rsvp"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = t.default.extend({
        recommend2svAdapter: (0, i.inject)("recommend-2sv-adapter"),
        onlineResourceService: (0, i.inject)("online-resource"),
        headerTitle: null,
        localSuccessNoticeForCompleted: (0, n.computed)((function() {
            return this.noticeService.createLocalSuccessNotice()
        })),
        localErrorNoticeForSetupFailed: (0, n.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        willTransitionToAddMobilePhone: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = t.doMobilePhoneNumberCollection,
                a = void 0 !== i && i
            return this.recommend2svAdapter.getPhoneList().then((function(t) {
                return a && t.length > 0 ? (0, r.reject)() : ((0, n.set)(e.model, "mobilePhoneNumbers", t), e.onlineResourceService.getPhoneCountryCodeMappings().then((function(t) {
                    (0, n.set)(e.model, "phoneCountryCodeMap", t)
                })))
            }))
        },
        actions: {
            doMobilePhoneNumberCollection: function() {
                var e = this
                this.willTransitionToAddMobilePhone({
                    doMobilePhoneNumberCollection: !0
                }).then((function() {
                    (0, n.set)(e.model, "onPhoneNumberCollection", !0), e.send("transitionToAddMobilePhone")
                })).catch((function(t) {
                    e.send("processingForTermination")
                }))
            }
        }
    })
    e.default = a
})), define("kekka/recommend2sv/entrance/controller", ["exports", "@ember/controller", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        recommend2svController: (0, t.inject)("recommend2sv"),
        recommend2svAdapter: (0, n.inject)("recommend-2sv-adapter"),
        actions: {
            setupWithTextMessage: function() {
                var e = this
                this.send("clearNotice"), this.model.loading.set("textMessage", !0), this.recommend2svController.willTransitionToAddMobilePhone().then((function() {
                    e.send("transitionToSetupWithTextMessage")
                })).catch((function(t) {
                    e.send("setErrorForSetupFailed", t), e.send("error", t)
                })).finally((function() {
                    e.model.loading.set("textMessage", !1)
                }))
            },
            setupWithAuthenticatorApp: function() {
                var e = this
                this.send("clearNotice"), this.model.loading.set("authenticator", !0), this.recommend2svAdapter.createAuthenticatorSecret(!0).then((function(t) {
                    var n = t.secret
                    e.set("model.recommend2svModel.secret", n), e.send("transitionToAuthApp")
                })).catch((function(t) {
                    e.send("setErrorForSetupFailed", t), e.send("error", t)
                })).finally((function() {
                    e.model.loading.set("authenticator", !1)
                }))
            },
            activate2sv: function(e) {
                switch (this.set("model.recommend2svModel.verificationMethod", e), e) {
                    case "AUTHENTICATOR":
                        this.send("setupWithAuthenticatorApp")
                        break
                    case "SMS":
                        this.send("setupWithTextMessage")
                }
            },
            skip: function() {
                this.send("clearNotice"), this.loadingService.beginTransition(!0, "skip"), this.recommend2svController.send("doMobilePhoneNumberCollection")
            },
            learnMore: function() {
                this.send("openNewWindow", "TWOSV_MK_PAGE")
            }
        }
    })
    e.default = i
})), define("kekka/recommend2sv/entrance/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        model: function() {
            return {
                recommend2svModel: this.modelFor("recommend2sv"),
                loading: this.loadingService.createLoadingMonitor()
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.send("resetRouteHistory"), this.controllerFor("application").set("pageNameId", "msg_account_feature_name_2sv"), this.controllerFor("recommend2sv").set("headerTitle", "msg_account_feature_name_2sv"), t.loading.observeUpdateing()
        },
        actions: {
            transitionToAuthApp: function() {
                this.transitionTo("recommend2sv.authApp")
            },
            transitionToSetupWithTextMessage: function() {
                0 !== this.controller.model.recommend2svModel.mobilePhoneNumbers.length ? this.transitionTo("recommend2sv.selectMobilePhone") : this.send("transitionToAddMobilePhone")
            }
        }
    })
    e.default = i
})), define("kekka/recommend2sv/entrance/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "B8AOV2Ln",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames"],["item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["activate","cancel","learnMore","captionOfNotSetting","isLoading"],[[28,[37,5],[[30,0],"activate2sv"],null],[28,[37,5],[[30,0],"skip"],null],[52,[33,7,["isPsnUser"]],[28,[37,5],[[30,0],"learnMore"],null]],"msg_skip",[33,8,["transiting","skip"]]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","pdr-select-2sv-method","action","if","appParamsService","loadingService"]]',
        moduleName: "kekka/recommend2sv/entrance/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/route", ["exports", "@ember/service", "@ember/routing/route", "@ember/debug", "rsvp", "@ember/object", "kekka/mixins/setup-language"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = n.default.extend(o.default, {
            phonesService: (0, t.inject)("phones"),
            telemetryService: (0, t.inject)("telemetry"),
            telemetryTwoSVService: (0, t.inject)("telemetry-two-sv"),
            onlineResourceService: (0, t.inject)("online-resource"),
            recommend2svAdapter: (0, t.inject)("recommend-2sv-adapter"),
            tagManagerService: (0, t.inject)("tag-manager"),
            checkPersonalizationSettingsAdapterService: (0, t.inject)("check-personalization-settings-adapter"),
            beforeModel: function() {
                this.onlineResourceService.initialize(), this.set("appParamsService.routeForGlobalError", "recommend2sv.setupFailed"), this.set("phonesService.withPWGatedScopes", !0), this.checkPersonalizationSettingsAdapterService.initialize(), this.recommend2svAdapter.initialize(), this.recommend2svAdapter.setBackupCodeServiceWithPWGatedScopes()
                var e = this.appParamsService.storage.get("mandatoryRecommend2svPageInfo")
                e && this.recommend2svAdapter.updateSession(e)
            },
            model: function() {
                var e = this,
                    t = this.get("recommend2svAdapter.authenticationModeService.session")
                return this.setInitialLanguage().then((function() {
                    return {
                        language: t.language,
                        country: t.country,
                        isFromCreateAccount: t.isFromCreateAccount,
                        onPhoneNumberCollection: !1,
                        phoneCountryCodeMap: null,
                        telemetryService: e.telemetryService,
                        getTelemetryPageData: function() {
                            var e = this.telemetryService.getCurrentRoute().split(".")
                            return e[0] = "mobileNumberCollection", this.telemetryService.createPageData(null, e.join("."))
                        }
                    }
                }))
            },
            setupController: function(e) {
                this._super.apply(this, arguments), this.controllerFor("application").set("isSigninLayout", !1), this.set("_isAnalyticFirstTransition", !0)
            },
            actions: {
                back: function() {
                    return this.send("clearNotice"), !0
                },
                transitionToAddMobilePhone: function() {
                    this.transitionTo("recommend2sv.addMobilePhone")
                },
                transitionToSetupCompleted: function() {
                    this.transitionTo("recommend2sv.setupCompleted")
                },
                clearNotice: function() {
                    return this.controller.localErrorNoticeForSetupFailed.clearError(), this.controller.localSuccessNoticeForCompleted.clearSuccess(), !0
                },
                setErrorForSetupFailed: function(e) {
                    this.send("clearNotice")
                    var t = [].concat(e),
                        n = t[0] && t[0].errorId,
                        i = {
                            UNDEFINED_ERROR: "msg_error",
                            NOSUCH_ROUTE_ERROR: "msg_error",
                            SESSION_EXPIRED: "msg_error_session_signout",
                            BAD_ARGUMENT_ERROR: "msg_error",
                            CONFIGURATION_ERROR: "msg_error",
                            CONTENT_NOT_FOUND: "msg_error",
                            CONFLICT_ERROR: "msg_error",
                            UNDER_MAINTENANCE: "msg_error_service_maintenance",
                            UNEXPECTED_SERVER_ERROR: "msg_error",
                            UNEXPECTED_JS_ERROR: "msg_error",
                            NOT_IMPLEMENTED: "msg_error"
                        }[n]
                    i ? this.controller.localErrorNoticeForSetupFailed.setError(i, n) : this.controller.localErrorNoticeForSetupFailed.setError("msg_sf_error_server_transaction_failure_purchase_info")
                },
                setSuccessForCompleted: function(e) {
                    this.send("clearNotice"), this.controller.localSuccessNoticeForCompleted.setSuccess(e)
                },
                processingForTermination: function() {
                    var e = this
                    this.tagManagerService.fireDummyPageEvent(), this.controller.get("model.isFromCreateAccount") ? this.send("_authRedirect") : this.checkPersonalizationSettingsAdapterService.needsForceUpgrade(this.appParamsService.appParams).then((function(t) {
                        if (t) return e.loadingService.abortTransition(), void e.send("redirectTo", {
                            redirectUri: "PR_ACCOUNT_UPGRADE",
                            params: {
                                entry: "upgrade_account",
                                pr_referer: "signin"
                            },
                            options: {
                                unhandledQueryParams: !0,
                                handledQueryParams: {
                                    excludeKeys: ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                                }
                            }
                        })
                        e.send("_authRedirect")
                    })).catch((function(t) {
                        e.send("error", t)
                    }))
                },
                _authRedirect: function() {
                    var e = this.appParamsService.get("hasAuthMandatoryParams") ? {
                        redirectUri: "VERSA_OAUTH_AUTHORIZE",
                        options: {
                            unhandledQueryParams: !0,
                            handledQueryParams: {
                                excludeKeys: ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                            }
                        }
                    } : {}
                    this.send("closeOnSucceed", e)
                },
                sendAnalyticTransitEvent: function(e) {
                    this._isAnalyticFirstTransition ? (this.telemetryTwoSVService.sendTwoSVActivateStartEvent(e), this.set("_isAnalyticFirstTransition", !1)) : this.telemetryTwoSVService.sendTwoSVTransitionEvent(e)
                }
            }
        }),
        l = s
    e.default = l
})), define("kekka/recommend2sv/select-mobile-phone/controller", ["exports", "@ember/controller", "@ember/object", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        recommend2svAdapter: (0, i.inject)("recommend-2sv-adapter"),
        actions: {
            verifyNumber: function(e) {
                var t = this
                this.send("clearNotice"), this.model.loading.set("verifyNumber", !0)
                var i = this.model.recommend2svModel
                this.recommend2svAdapter.requestVerificationCode(e).then((function(r) {
                    (0, n.set)(i, "mobilePhoneNumber", i.mobilePhoneNumbers.findBy("id", e)), (0, n.set)(i, "mobilePhoneNumber.ticketUuid", r.ticketId), t.send("transitionToVerifyMobileNumber")
                })).catch((function(e) {
                    t.send("setErrorForSetupFailed", e), t.send("error", e)
                })).finally((function() {
                    t.model.loading.set("verifyNumber", !1)
                }))
            },
            addMobilePhone: function() {
                this.send("transitionToAddMobilePhone")
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/select-mobile-phone/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        model: function() {
            var e = this.modelFor("recommend2sv")
            return {
                recommend2svModel: e,
                loading: this.loadingService.createLoadingMonitor(),
                addablePhone: e.mobilePhoneNumbers && e.mobilePhoneNumbers.length < 2
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_account_feature_name_2sv"), this.controllerFor("recommend2sv").set("headerTitle", "msg_account_feature_name_2sv"), t.loading.observeUpdateing()
        },
        actions: {
            transitionToVerifyMobileNumber: function() {
                this.transitionTo("recommend2sv.verifyMobileNumber")
            },
            transitionToAddMobilePhone: function() {
                return !0
            }
        }
    })
    e.default = i
})), define("kekka/recommend2sv/select-mobile-phone/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "OnA8ZIuF",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames"],["item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],["msg_2sv_select_mobile_phone_description"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n        "],[1,[28,[35,6],null,[["phoneList","selectPhoneAction","isSinglePane"],[[33,1,["recommend2svModel","mobilePhoneNumbers"]],"verifyNumber",true]]]],[1,"\\n"],[41,[33,1,["addablePhone"]],[[[1,"            "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n            "],[10,0],[14,0,"rows is-align-center"],[12],[1,"\\n                "],[1,[28,[35,8],null,[["country","language","locale","caption","action","class"],[[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]],"msg_account_add_mobile_phone",[28,[37,9],[[30,0],"addMobilePhone"],null],"fitting-width"]]]],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-loc","kekka-cam-phone-list","if","pdr-secondary-button","action"]]',
        moduleName: "kekka/recommend2sv/select-mobile-phone/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/setup-completed/controller", ["exports", "@ember/controller", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        recommend2svController: (0, t.inject)("recommend2sv"),
        recommend2svAdapter: (0, n.inject)("recommend-2sv-adapter"),
        actions: {
            done: function() {
                this.send("clearNotice"), this.loadingService.beginTransition(!0, "done"), "AUTHENTICATOR" !== this.get("model.recommend2svModel.verificationMethod") ? this.send("processingForTermination") : this.recommend2svController.send("doMobilePhoneNumberCollection")
            },
            reloadBackupCode: function() {
                var e = this,
                    t = this.loadingService
                this.send("clearNotice"), t.beginTransition(!0, "reloadBackupCode"), this.recommend2svAdapter.get2svBackupCodeList().then((function(n) {
                    var i = n.backup_codes
                    e.set("model.backupCodes", i), e.set("model.enabledOkButton", !1), t.endTransition()
                })).catch((function(n) {
                    t.abortTransition(), e.send("setErrorForSetupFailed", n), e.send("error", n)
                }))
            }
        }
    })
    e.default = i
}))
define("kekka/recommend2sv/setup-completed/route", ["exports", "@ember/service", "@ember/routing/route", "rsvp"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = n.default.extend({
        telemetryService: (0, t.inject)("telemetry"),
        telemetryTwoSVService: (0, t.inject)("telemetry-two-sv"),
        recommend2svAdapter: (0, t.inject)("recommend-2sv-adapter"),
        model: function() {
            var e = this.modelFor("recommend2sv")
            return (e.onPhoneNumberCollection ? (0, i.resolve)({
                backup_codes: []
            }) : this.recommend2svAdapter.get2svBackupCodeList()).then((function(t) {
                return {
                    backupCodes: t.backup_codes,
                    recommend2svModel: e,
                    enabledOkButton: e.onPhoneNumberCollection
                }
            })).catch((function() {
                return {
                    backupCodes: [],
                    recommend2svModel: e,
                    enabledOkButton: !0
                }
            }))
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.send("resetRouteHistory")
            var n = t.recommend2svModel.onPhoneNumberCollection,
                i = n ? "msg_account_mobile_phone" : "msg_account_feature_name_2sv"
            this.controllerFor("application").set("pageNameId", i), this.controllerFor("recommend2sv").set("headerTitle", i)
        },
        actions: {
            sendAnalyticTransitEvent: function(e) {
                var t = this.modelFor("recommend2sv")
                t.onPhoneNumberCollection ? this.telemetryService.sendTransitionEvent(t.getTelemetryPageData()) : this.telemetryTwoSVService.sendTwoSVTransitionEvent(e)
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/setup-completed/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "KwO8xxyy",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["localSuccessNotice","classNames"],[[33,4,["localSuccessNoticeForCompleted"]],"item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],[[52,[33,1,["recommend2svModel","onPhoneNumberCollection"]],"msg_mobile_number_collection_description_4","msg_change_security_setting_anytime"]],null]],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems small row-unshrink"],[12],[13],[1,"\\n"],[41,[51,[33,1,["recommend2svModel","onPhoneNumberCollection"]]],[[[1,"            "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],["msg_backup_codes_description"],null]],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems row-unshrink"],[12],[13],[1,"\\n"],[6,[39,9],null,[["backupCodes"],[[33,1,["backupCodes"]]]],[["default"],[[[[1,"                "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],["msg_not_display_backup_codes"],null]],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems row-unshrink"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,10],null,[["action","caption","class","isLoading"],[[28,[37,11],[[30,0],"reloadBackupCode"],null],"msg_reload","fitting-width",[33,12,["transiting","reloadBackupCode"]]]]]],[1,"\\n                "],[13],[1,"\\n"]],[]]]]],[41,[28,[37,13],[[28,[37,14],[[33,1,["backupCodes"]]],null]],null],[[[1,"                "],[10,0],[14,0,"separator-pageitems row-unshrink"],[12],[13],[1,"\\n                "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],["msg_record_screenshot_code"],null]],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems row-unshrink"],[12],[13],[1,"\\n                "],[1,[28,[35,15],null,[["caption","value","onchange"],["msg_recorded_backup_codes",[33,1,["enabledOkButton"]],[28,[37,16],[[28,[37,17],[[33,1,["enabledOkButton"]]],null]],null]]]]],[1,"\\n"]],[]],null],[1,"            "],[10,0],[14,0,"separator-pageitems small row-unshrink"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n            "],[1,[28,[35,18],null,[["action","caption","class","isLoading","isDisabled"],[[28,[37,11],[[30,0],"done"],null],"msg_ok_psn","fitting-width",[33,12,["transiting","done"]],[28,[37,13],[[33,1,["enabledOkButton"]]],null]]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","recommend2svController","appParamsService","pdr-loc","if","unless","pdr-backup-code","pdr-secondary-button","action","loadingService","not","is-empty","pdr-checkbox-v2","fn","mut","pdr-primary-button"]]',
        moduleName: "kekka/recommend2sv/setup-completed/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/setup-failed/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        recommend2svController: (0, t.inject)("recommend2sv"),
        actions: {
            done: function() {
                this.send("clearNotice"), this.loadingService.beginTransition(!0, "done"), this.send("processingForTermination")
            }
        }
    })
    e.default = n
})), define("kekka/recommend2sv/setup-failed/route", ["exports", "@ember/service", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        telemetryService: (0, t.inject)("telemetry"),
        telemetryTwoSVService: (0, t.inject)("telemetry-two-sv"),
        model: function() {
            return {
                recommend2svModel: this.modelFor("recommend2sv")
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.send("resetRouteHistory")
            var n = t.recommend2svModel.onPhoneNumberCollection,
                i = n ? "msg_account_mobile_phone" : "msg_account_feature_name_2sv"
            this.controllerFor("application").set("pageNameId", i), this.controllerFor("recommend2sv").set("headerTitle", i)
        },
        actions: {
            sendAnalyticTransitEvent: function(e) {
                var t = this.modelFor("recommend2sv")
                t.onPhoneNumberCollection ? this.telemetryService.sendTransitionEvent(t.getTelemetryPageData()) : this.telemetryTwoSVService.sendTwoSVTransitionEvent(e)
            }
        }
    })
    e.default = i
})), define("kekka/recommend2sv/setup-failed/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "lJ38jB5X",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["localErrorNotice","classNames"],[[33,4,["localErrorNoticeForSetupFailed"]],"item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],[[52,[33,1,["recommend2svModel","onPhoneNumberCollection"]],"msg_mobile_number_collection_description_4","msg_change_security_setting_anytime"]],null]],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n            "],[1,[28,[35,8],null,[["action","caption","class","isLoading"],[[28,[37,9],[[30,0],"done"],null],"msg_ok_psn","fitting-width",[33,10,["transiting","done"]]]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","recommend2svController","appParamsService","pdr-loc","if","pdr-primary-button","action","loadingService"]]',
        moduleName: "kekka/recommend2sv/setup-failed/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "cXsoubU2",
        block: '[[[6,[39,0],null,[["country","language","locale","hasBackground","keepPrevious"],[[30,0,["model","country"]],[30,0,["model","language"]],[33,1,["currentLocale"]],[33,2,["isPcTablet"]],true]],[["default"],[[[[1,"    "],[1,[28,[35,3],null,[["autoBackControl","enabledCancel"],[true,[33,2,["enabledCancel"]]]]]],[1,"\\n    "],[6,[39,4],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,5],[[30,0,["headerTitle"]]],null]]],[]]]]],[1,"\\n"],[6,[39,6],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[1,"        "],[46,[28,[37,8],null,null],null,null,null],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-layout","localizationService","appParamsService","kekka-sony-header","kekka-title-header","pdr-loc","pdr-main-content","component","-outlet"]]',
        moduleName: "kekka/recommend2sv/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/verify-auth-app/controller", ["exports", "@ember/controller", "@ember/service", "@ember/object"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        recommend2svAdapter: (0, n.inject)("recommend-2sv-adapter"),
        telemetryTwoSVService: (0, n.inject)("telemetry-two-sv"),
        localErrorNotice: (0, i.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        actions: {
            verify: function() {
                var e = this
                this.send("clearNotice"), this.localErrorNotice.clearError(), this.loadingService.beginTransition(!0, "verify"), this.recommend2svAdapter.getAccessTokenWithAuthenticatorCode(this.model.code).then((function(t) {
                    var n = t.access_token
                    return e.recommend2svAdapter.activateAuthenticator2sv(n)
                })).then((function() {
                    e.telemetryTwoSVService.sendTwoSVActivateSuccessEvent(), e.send("setSuccessForCompleted", "msg_2sv_activated"), e.send("transitionToSetupCompleted")
                })).catch((function(t) {
                    e.loadingService.abortTransition(), t && t.errorCodes && t.errorCodes.includes("INVALID_AUTHENTICATOR_CODE") ? e.localErrorNotice.setError("msg_error_verification_code_incorrect", "INVALID_AUTHENTICATOR_CODE").clearOneTransition() : (e.send("setErrorForSetupFailed", t), e.send("error", t))
                }))
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/verify-auth-app/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return {
                recommend2svModel: this.modelFor("recommend2sv"),
                code: null
            }
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_account_feature_name_2sv"), this.controllerFor("recommend2sv").set("headerTitle", "msg_account_feature_name_2sv")
        }
    })
    e.default = n
})), define("kekka/recommend2sv/verify-auth-app/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Dey3bKVa",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames","localErrorNotice"],["item-notice",[33,4]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,5,["bidi"]]],[12],[1,[28,[35,6],["msg_enter_auth_app_code"],null]],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n        "],[1,[28,[35,7],null,[["ariaLabel","isForceLtr","placeholder","maxlength","value","onChangeValue","title","type","autocomplete"],["msg_sce_enter_code",true,"msg_sce_enter_code",6,[33,1,["code"]],[28,[37,8],[[28,[37,9],[[33,1,["code"]]],null]],null],"msg_sce_enter_code","tel","one-time-code"]]]],[1,"\\n        "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n            "],[1,[28,[35,10],null,[["caption","action","class","isLoading","isDisabled"],["msg_sf_regcam_verify",[28,[37,11],[[30,0],"verify"],null],"fitting-width",[33,12,["transiting","verify"]],[28,[37,13],[[33,1,["code"]]],null]]]]],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","localErrorNotice","appParamsService","pdr-loc","pdr-text-field-v3","fn","mut","pdr-primary-button","action","loadingService","is-empty"]]',
        moduleName: "kekka/recommend2sv/verify-auth-app/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/recommend2sv/verify-mobile-number/controller", ["exports", "@ember/controller", "@ember/object", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        recommend2svAdapter: (0, i.inject)("recommend-2sv-adapter"),
        telemetryPhoneManipulationService: (0, i.inject)("telemetry-phone-manipulation"),
        telemetryTwoSVService: (0, i.inject)("telemetry-two-sv"),
        localErrorNotice: (0, n.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        localSuccessNotice: (0, n.computed)((function() {
            return this.noticeService.createLocalSuccessNotice()
        })),
        actions: {
            resendVerificationCode: function(e) {
                var t = this
                this.send("clearNotice"), this.loadingService.beginTransition(!0, "resendVerificationCode"), this.recommend2svAdapter.requestVerificationCode(e).then((function(e) {
                    t.loadingService.endTransition(), t.localSuccessNotice.setSuccess("msg_verification_code_sent_again"), (0, n.set)(t.model.recommend2svModel.mobilePhoneNumber, "ticketUuid", e.ticketId)
                })).catch((function(e) {
                    t.loadingService.abortTransition(), t.send("setErrorForSetupFailed", e), t.send("error", e)
                }))
            },
            verify: function() {
                var e = this
                this.send("clearNotice"), this.loadingService.beginTransition(!0, "verify")
                var t = this.model,
                    n = t.verificationCode,
                    i = t.verifyPhoneWith2svActivation,
                    r = t.recommend2svModel,
                    a = r.mobilePhoneNumber,
                    o = r.onPhoneNumberCollection
                this.recommend2svAdapter.verifyPhone(a, n, !0, i).then((function() {
                    o ? (e.telemetryPhoneManipulationService.sendVerifyPhoneSuccessEvent(r.getTelemetryPageData()), e.send("setSuccessForCompleted", "msg_mobile_number_collection_description_3")) : (e.telemetryTwoSVService.sendTwoSVVerifyPhoneSuccessEvent(), e.telemetryTwoSVService.sendTwoSVActivateSuccessEvent(), e.send("setSuccessForCompleted", "msg_2sv_activated")), e.send("transitionToSetupCompleted")
                })).catch((function(t) {
                    e.loadingService.abortTransition(), t && (e.send("setErrorForSetupFailed", t), e.send("error", t))
                }))
            }
        }
    })
    e.default = r
})), define("kekka/recommend2sv/verify-mobile-number/route", ["exports", "@ember/debug", "@ember/object/computed", "@ember/object", "@ember/object/evented", "@ember/service", "@ember/routing/route"], (function(e, t, n, i, r, a, o) {
    function s(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return
                    if ("string" == typeof e) return l(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    "Object" === n && e.constructor && (n = e.constructor.name)
                    if ("Map" === n || "Set" === n) return Array.from(e)
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n)
                var i = 0,
                    r = function() {}
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next()
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = o.default.extend({
            telemetryPhoneManipulationService: (0, a.inject)("telemetry-phone-manipulation"),
            telemetryTwoSVService: (0, a.inject)("telemetry-two-sv"),
            model: function() {
                var e = this.modelFor("recommend2sv")
                return {
                    recommend2svModel: e,
                    verificationCode: null,
                    verifyPhoneWith2svActivation: !e.onPhoneNumberCollection
                }
            },
            setupController: function(e, t) {
                this._super.apply(this, arguments)
                var n = t.recommend2svModel.onPhoneNumberCollection,
                    i = n ? "msg_account_mobile_phone" : "msg_account_feature_name_2sv"
                this.controllerFor("application").set("pageNameId", i), this.controllerFor("recommend2sv").set("headerTitle", i)
            },
            actions: {
                clearNotice: function() {
                    return this.controller.get("localErrorNotice").clearError(), this.controller.get("localSuccessNotice").clearSuccess(), !0
                },
                error: function(e) {
                    var t = e.errorCodes
                    if (t && t.length) {
                        var n, i = this.controller.get("localErrorNotice"),
                            r = s(t)
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var a = n.value
                                switch (a) {
                                    case "AUTH_TICKET_EXPIRED":
                                        return void i.setError("msg_error_verification_code_expired", a)
                                    case "AUTH_INVALID_VERIFICATION_CODE":
                                        return void i.setError("msg_error_verification_code_incorrect", a)
                                    case "ASSOCIATED_TO_NON_2SV_CAPABLE_DCIM":
                                        return void i.setError("msg_error_change_email_uid", a)
                                }
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                    }
                    return !0
                },
                sendAnalyticTransitEvent: function(e) {
                    var t = this.controller.get("model").recommend2svModel
                    t.onPhoneNumberCollection ? this.telemetryPhoneManipulationService.sendVerifyPhoneStartEvent(t.getTelemetryPageData()) : this.telemetryTwoSVService.sendTwoSVVerifyPhoneStartEvent(e)
                }
            }
        }),
        d = c
    e.default = d
})), define("kekka/recommend2sv/verify-mobile-number/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "zMdxRHOK",
        block: '[[[6,[39,0],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,1,["recommend2svModel","country"]],[33,1,["recommend2svModel","language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["localErrorNotice","localSuccessNotice","classNames"],[[33,4],[33,5],"item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n"],[6,[39,6],null,[["onResendVerificationCode","isLoading","phoneNumber","value","onChangeValue"],[[28,[37,7],[[30,0],"resendVerificationCode",[33,1,["recommend2svModel","mobilePhoneNumber","id"]]],null],[33,8,["transiting","resendVerificationCode"]],[33,1,["recommend2svModel","mobilePhoneNumber","phone"]],[33,1,["verificationCode"]],[28,[37,9],[[28,[37,10],[[33,1,["verificationCode"]]],null]],null]]],[["default"],[[[[1,"            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,11],null,[["action","caption","class","isDisabled","isLoading"],[[28,[37,7],[[30,0],"verify"],null],"msg_sf_regcam_verify","fitting-width",[28,[37,12],[[33,1,["verificationCode","length"]]],null],[33,8,["transiting","verify"]]]]]],[1,"\\n            "],[13],[1,"\\n"]],[]]]]],[1,"    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","localErrorNotice","localSuccessNotice","pdr-verify-identity-code-v2","action","loadingService","fn","mut","pdr-primary-button","not"]]',
        moduleName: "kekka/recommend2sv/verify-mobile-number/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/retry-authorize/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        application: (0, t.inject)()
    })
    e.default = n
})), define("kekka/retry-authorize/route", ["exports", "@ember/routing/route", "kekka/mixins/setup-language"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend(n.default, {
        activate: function() {
            this._super(), this.modalService.bindOutletRoute(this)
        },
        deactivate: function() {
            this._super(), this.modalService.unbindOutletRoute(this)
        },
        model: function() {
            var e = this.noticeService.get("latestErrorModel") || this.noticeService.setGlobalError("UNDEFINED_ERROR")
            return this.setInitialLanguage().then((function() {
                return e
            }))
        },
        setupController: function(e, t) {
            this.send("resetRouteHistory"), e.set("message", this.get("appParamsService.storage.message") || t.message), e.set("buttonCaption", "SESSION_EXPIRED" === t.id ? "msg_ok_psn" : "msg_retry"), e.set("model", t), e.set("application.pageNameId", "msg_error")
        },
        actions: {
            closeOnCancel: function() {
                var e = this.get("controller.model")
                this.send("closeOnError", e.id, e.action, this.noticeService.latestErrorObject)
            },
            redirectAuthorize: function() {
                var e = this.get("appParamsService.storage")
                this.loadingService.beginTransition(!0, "redirectAuthorize"), e.get("closeOnRetryAuthorize") ? this.send("closeOnCancel") : e.get("redirectParams") ? this.send("redirectTo", this.get("appParamsService.storage.redirectParams")) : this.send("error", "UNDEFINED_ERROR")
            }
        }
    })
    e.default = i
})), define("kekka/retry-authorize/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "H3+Pl96X",
        block: '[[[6,[39,0],null,[["locale","keepPrevious"],[[33,1,["currentLocale"]],true]],[["default"],[[[[1,"    "],[1,[28,[35,2],null,[["disabledBack","enabledCancel","locale"],[true,[33,3,["enabledCancel"]],[33,1,["currentLocale"]]]]]],[1,"\\n"],[6,[39,4],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,5],null,[["classNames"],["rows-between fitting-parent"]],[["default"],[[[[1,"            "],[10,0],[14,0,"separator-pagetop fatalerror row-unshrink"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n                "],[10,0],[14,0,"page-items row-flex fatalerror description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-parent"],[12],[1,"\\n                        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,3,["bidi"]]],[12],[1,"\\n                                "],[1,[28,[35,6],[[33,7]],null]],[1,"\\n                            "],[13],[1,"\\n                            "],[10,0],[14,0,"separator-pageitems retry-authrize"],[12],[13],[1,"\\n                            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                                "],[1,[28,[35,8],null,[["action","caption","isLoading","class","locale"],["redirectAuthorize",[33,9],[33,10,["transiting","redirectAuthorize"]],"fitting-width",[33,1,["currentLocale"]]]]]],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pagefooter fatalerror row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[]]]]]],[],false,["kekka-layout","localizationService","kekka-sony-header","appParamsService","pdr-main-content","kekka-scroller","pdr-loc","message","pdr-primary-button","buttonCaption","loadingService"]]',
        moduleName: "kekka/retry-authorize/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/router", ["exports", "@ember/routing/router", "kekka/config/environment"], (function(e, t, n) {
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
        return a = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, a(e, t)
    }

    function o(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ("function" == typeof Proxy) return !0
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }()
        return function() {
            var n, i = c(e)
            if (t) {
                var r = c(this).constructor
                n = Reflect.construct(i, arguments, r)
            } else n = i.apply(this, arguments)
            return s(this, n)
        }
    }

    function s(e, t) {
        if (t && ("object" === _typeof(t) || "function" == typeof t)) return t
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined")
        return l(e)
    }

    function l(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
    }

    function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var u = function(e) {
        (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function")
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t && a(e, t)
        })(p, e)
        var t, s, c, u = o(p)

        function p() {
            var e
            r(this, p)
            for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a]
            return d(l(e = u.call.apply(u, [this].concat(i))), "location", n.default.locationType), d(l(e), "rootURL", n.default.rootURL), e
        }
        return t = p, s && i(t.prototype, s), c && i(t, c), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }(t.default)
    e.default = u, u.map((function() {
        this.route("no-def", {
            path: "/*wildcard"
        }), PdrIF.forEachRoute(this, (function e(t) {
            t.subs ? this.route(t.name, t["@"], (function() {
                for (var n = t.subs, i = 0, r = n.length; i < r; ++i) e.call(this, n[i])
            })) : this.route(t.name, t["@"])
        }))
    }))
})), define("kekka/services/about-adapter", ["exports", "@ember/object", "@ember/service", "@ember/utils"], (function(e, t, n, i) {
    function r(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return a(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = n.default.extend({
        setupServices: [],
        setup: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
            this.set("setupServices", [].concat(r(this.setupServices), r(e)))
        },
        isSignedIn: (0, t.computed)("setupServices.@each.session.accessToken", (function() {
            return this.setupServices && this.setupServices.some((function(e) {
                var t = e.session
                return t && !(0, i.isNone)(t.accessToken)
            }))
        }))
    })
    e.default = o
})), define("kekka/services/all-sign-out", ["exports", "hokkai/services/all-sign-out"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/analytic", ["exports", "@ember/polyfills", "@ember/debug", "@ember/object", "@ember/object/evented", "@ember/service", "@sie/grand-central-telemetry", "@sie/grand-central-telemetry-events", "@sie/grand-central-telemetry-sbahn", "kekka/config/environment", "kekka/utils/clairvoyance-map", "kekka/utils/device-detection"], (function(e, t, n, i, r, a, o, s, l, c, d, u) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var p = null,
        m = null,
        g = 0,
        f = a.default.extend(r.default, {
            telemetryService: (0, a.inject)("telemetry"),
            appParamsService: (0, a.inject)("app-params"),
            appInterfaceService: (0, a.inject)("app-interface"),
            historyService: (0, a.inject)("history"),
            noticeService: (0, a.inject)("notice"),
            modalService: (0, a.inject)("modal"),
            localizationService: (0, a.inject)("localization"),
            isPlatformPrivacyWs1Ready: !1,
            isLoadTimeReady: !1,
            _isLoadedSiews1lib: !1,
            _sendTelemetryReady: (0, i.observer)("isPlatformPrivacyWs1Ready", "isLoadTimeReady", "_isLoadedSiews1lib", (function() {
                this.isPlatformPrivacyWs1Ready && this.isLoadTimeReady && this._isLoadedSiews1lib && (this._registerEvents(), this._sendInitialTelemetry())
            })),
            _registerEvents: function() {
                var e = this.telemetryService,
                    t = this.historyService,
                    n = this.appInterfaceService,
                    i = n.getAnalyticConfig()
                t.on("didChange", e, e.sendTransitEvent), i && i.transaction && n.one("close", (function(t) {
                    "success" === t && e.sendEndEvent()
                })), this.modalService.on("analyticTransitEvent", e, e.sendTransitEvent)
            },
            _sendInitialTelemetry: function() {
                var e = this.appInterfaceService.getAnalyticConfig(),
                    t = this.telemetryService,
                    n = t.getCurrentRoute()
                if (t.sendStartupEvent({
                        isApp: !!this.get("appParamsService.appContextPrefixForAA")
                    }), e && e.transaction ? t.sendStartEvent() : t.sendTransitEvent(n), m.timings) {
                    var i = t.getEntryRoute().split(".")[0],
                        r = n.split("."),
                        a = r.length > 1 ? "".concat(i, ":").concat(r.slice(1).join("_")) : r[0],
                        o = m.timings.load.startDate
                    if (g > 0) {
                        var s = m.timings,
                            l = window.performance.timing
                        s.response = {
                            startDate: o,
                            endDate: l.responseEnd
                        }
                        var c = Object.keys(s).filter((function(e) {
                                return s[e].startDate && s[e].endDate
                            })).map((function(e) {
                                var t = s[e]
                                return {
                                    name: e,
                                    startTime: t.startDate - o,
                                    duration: t.endDate - t.startDate
                                }
                            })),
                            d = window.navigator.userAgent,
                            p = (0, u.detectOS)(d),
                            f = (0, u.detectOSVersion)(p, d)
                        t.sendLoadTime({
                            time: new Date(o),
                            pageName: "".concat(t.get("namePrefix")).concat(a),
                            loadTime: g,
                            timings: c,
                            bootInfo: "".concat(p, " ").concat(f)
                        })
                    }
                }
            },
            updatePlatformPrivacyWs1Value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = !e,
                    n = this.appParamsService,
                    i = n.get("platformPrivacyWs1"),
                    r = null,
                    a = !1
                return i ? (r = i, a = !0) : window.SIEWS1lib ? n.get("isApplicationForDCIM") || (r = window.SIEWS1lib.getPlatformPrivacyWs1({
                    country: n.get("initialLocale.country")
                }) || "minimal") : (t && this.noticeService.setGlobalError("SERVER_CONNECTION_TIMEOUT"), r = "minimal", a = !0), t && this.updatePlatformPrivacyLevel(r, a), r
            },
            initialize: function(e) {
                var t = this
                this.get("appParamsService.platformPrivacyWs1") ? this.set("_isLoadedSiews1lib", !0) : PdrIF.waitForLoadSiews1lib((function() {
                    t.updatePlatformPrivacyWs1Value()
                    window.SIEWS1lib && window.SIEWS1lib.addEventListener("onChangedPlatformPrivacyWs1", (function e(n) {
                        t.updatePlatformPrivacyLevel(n), window.SIEWS1lib.removeEventListener("onChangedPlatformPrivacyWs1", e)
                    })), t.set("_isLoadedSiews1lib", !0)
                })), this._initialize(e)
            },
            _initialize: function(e) {
                var n = this,
                    i = this.telemetryService,
                    r = this.historyService,
                    a = this.appInterfaceService,
                    u = this.appParamsService,
                    f = this.localizationService
                m = window.Pdr.GCT
                var h = f.currentLocale,
                    v = h && "string" == typeof h ? h.replace(/-/, "_") : null,
                    _ = null
                c.default.APP.devLine ? -1 === ["localhost", "reverse-proxy"].indexOf(c.default.APP.lineName) && (_ = c.default.APP.lineName) : _ = "np"
                var b = c.default.APP.aaAccount
                u.get("reportSuite") && (b ? b += ",".concat(u.get("reportSuite")) : b = u.get("reportSuite"))
                var y = this.updatePlatformPrivacyWs1Value(!this._isLoadedSiews1lib),
                    k = {
                        env: {
                            psnAccountRegion: u.get("initialLocale.country"),
                            psnAccountLanguage: u.get("initialLocale.language"),
                            deviceId: "n/a",
                            visitorId: u.get("visitorId"),
                            appName: "pdr",
                            buildVersion: window.s_buildID || c.default.APP.buildId || "n/a",
                            deviceType: u.get("isMobile") ? o.DEVICES.MWEB : u.get("isFireTv") ? o.DEVICES.FIRE_TV : o.DEVICES.WEB,
                            charset: "utf-8",
                            platformPrivacyWs1: y,
                            signedIn: null
                        },
                        plugins: {
                            adobe: {
                                reportSuite: [b || "n/a"],
                                dryRun: !b
                            },
                            kamaji: {
                                env: _,
                                overrideDeviceType: c.default.APP.telemetryDeviceType,
                                dryRun: !_,
                                eventUrl: "https://eventcom.api.{{env}}.km.playstation.net/event/"
                            },
                            clairvoyance: {
                                env: _,
                                overrideDeviceType: c.default.APP.telemetryDeviceType,
                                eventUrl: "https://eventcom.api.{{env}}.km.playstation.net/event/clairvoyance/{{deviceType}}",
                                metricsMap: d.default.getMetricsMap(),
                                dryRun: !_
                            },
                            sbahn: {
                                env: _,
                                url: "https://sbahn-publish.{{env}}.api.playstation.com/v1/publish/{{publisherGroup}}/{{priorityLane}}/",
                                isProd: "np" === _,
                                dryRun: !_
                            }
                        },
                        events: {
                            Click: ["adobe"],
                            LoadTime: ["clairvoyance", "sbahn"],
                            PageView: ["adobe"],
                            UserFacingError: ["adobe", "kamaji"],
                            Startup: ["adobe", "kamaji", "sbahn"]
                        },
                        services: {
                            factories: {
                                "/plugin/sbahn": l.serviceFactory
                            }
                        },
                        logLevel: "OFF",
                        schema: {
                            enabled: !0,
                            overlays: [s.default.unifiedDefaultSchema]
                        }
                    }
                try {
                    p = new o.TelemetryService(k), v || p.setSignedOutState()
                } catch (S) {
                    0
                }
                i.initialize((0, t.assign)({
                    namePrefix: "".concat(u.get("appContextPrefixForAA") || "web", ":pdr:"),
                    getEntryRoute: function() {
                        return r.get("entryRoute")
                    },
                    getCurrentRoute: function() {
                        return r.get("currentRoute")
                    },
                    gctOption: {
                        gct: p,
                        smcId: this._getSmcidToGctOption(),
                        region: u.get("initialLocale.country"),
                        language: u.get("initialLocale.language")
                    },
                    coreFunctionalPaths: ["signin", "create"]
                }, e)), r.one("didChange", (function() {
                    m.timings && (m.timeEnd("initialTransition"), m.time("render"))
                })), this.noticeService.one("error", (function(e, t, i) {
                    n.isPlatformPrivacyWs1Ready || n.updatePlatformPrivacyLevel("minimal")
                    var r = n.telemetryService
                    r.sendErrorEvent(e, t, i), n.noticeService.on("error", r, r.sendErrorEvent)
                })), f.one("getStringStart", (function() {
                    return m.timings && m.time("getString")
                })), f.one("getStringEnd", (function() {
                    return m.timings && m.timeEnd("getString")
                })), a.one("didRender", (function() {
                    g = function() {
                        if (window.performance && "function" == typeof window.performance.now) {
                            var e = parseInt(window.performance.now(), 10)
                            return null === e || isNaN(e) ? (new Date).getTime() - m.timings.load.startDate : e
                        }
                    }(), m.timeEnd("render"), n.set("isLoadTimeReady", !0)
                }))
            },
            _getSmcidToGctOption: function() {
                var e = this.appInterfaceService.getAnalyticConfig(),
                    t = this.appParamsService,
                    n = t.smcId,
                    i = t.originClientId,
                    r = t.appParams.clientId
                return n || (e && e.insteadOf && e.insteadOf.clientIdToSmcid ? r : i)
            },
            updatePlatformPrivacyLevel: function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                if (!this.get("appParamsService.platformPrivacyWs1")) {
                    var n = e || "minimal"
                    p && (p.platformPrivacyLevel = n)
                }
                t && this.set("isPlatformPrivacyWs1Ready", !0)
            }
        })
    e.default = f
})), define("kekka/services/app-interface", ["exports", "@ember/runloop", "@ember/debug", "@ember/object/evented", "@ember/service", "@ember/object/mixin", "kekka/config/environment"], (function(e, t, n, i, r, a, o) {
    function s(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? s(Object(n), !0).forEach((function(t) {
                c(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.QueryParamsMixin = void 0
    var d = function() {
            var e = {
                CA: "CA",
                PSN: "PSN",
                CA_V3: "CA",
                PSN_V3: "PSN"
            }[o.default.APP.authStyle]
            return "CA" === e || "PSN" !== e && !!o.default.APP.centralAuthServiceURL
        },
        u = function() {
            return /CA_V3|PSN_V3/.test(o.default.APP.authStyle)
        },
        p = function() {
            return /\.playstation\.com$/.test(window.location.hostname) ? o.default.APP.authServiceURLonPlayStation : o.default.APP.authServiceURL
        },
        m = "".concat(d() ? "".concat(o.default.APP.centralAuthServiceURL, "/v1") : "".concat(p(), "/2.0"), "/oauth/authorize"),
        g = {
            v1: m,
            v3: o.default.APP.centralAuthServiceURL ? o.default.APP.caAuthzV3URL : o.default.APP.authzV3URL
        },
        f = {
            VERSA_OAUTH_AUTHORIZE: m,
            VERSA_OAUTH_AUTHORIZE_ORG: m,
            VERSA_OAUTH_AUTHORIZE_FOR_IMPLICIT_FLOW: u() ? "".concat(d() ? o.default.APP.centralAuthServiceURL : "".concat(p(), "/api"), "/authz/v3/oauth/authorize") : m,
            VERSA_OAUTH_SIGNOUT: "".concat(d() ? "".concat(o.default.APP.centralAuthServiceURL, "/v1") : "".concat(p(), "/2.0"), "/signout"),
            PR_ACCOUNT_CREATION: o.default.APP.prAccountCreationURL,
            PR_ACCOUNT_UPGRADE: o.default.APP.prAccountUpgradeURL,
            PR_SIGNIN: o.default.APP.prSigninURL,
            CS_HELP_PAGE: o.default.APP.prCsHelpPageURL,
            TWOSV_MK_PAGE: o.default.APP.prTwoSvMkPageURL,
            FAMILY_CS_QA_PAGE: o.default.APP.prFamilyCsQaPageURL,
            CS_COID_GAMES: o.default.APP.prCsCoidGamesURL,
            CS_COID_HELP: o.default.APP.prCsCoidHelpURL,
            PR_CAM_SECURITY: o.default.APP.prCamSecurityURL,
            PR_FORGOT_PASSWORD: o.default.APP.prForgotPasswordURL,
            PR_FAMILY_MANAGEMENT: o.default.APP.prFamilyManagementURL,
            PR_FAMILY_MANAGEMENT_FOR_PSN: o.default.APP.prFamilyManagementURLforPSN,
            PR_RETURN_TO_PREV_APP: o.default.APP.prReturnToPrevAppURL,
            PR_ACCOUNT_LINKING: o.default.APP.prAccountLinkingURL,
            ULINK_PAGE: o.default.APP.ulinkURL,
            UID_MK_PAGE: o.default.APP.uidMkPageURL,
            CA_ACCOUNT_CREATION: o.default.APP.prAccountCreationURLforCA,
            CA_CAM_SECURITY: o.default.APP.caCamSecurityURL,
            CA_CAM: o.default.APP.managementCaURLForTerminator,
            CA_CHANGE_SIGNINID: o.default.APP.caChangeSigninIDURL,
            CA_FORGOT_PASSWORD: o.default.APP.caForgotPasswordURL,
            PLAYSTATION_STORE: o.default.APP.playStationStoreURL,
            STORE_PSAPP_IOS: o.default.APP.storePSAppIOSURL,
            STORE_PSAPP_ANDROID: o.default.APP.storePSAppAndroidURL,
            IPIN_SITE: o.default.APP.iPinSiteURL,
            LEARN_MORE_PS5: o.default.APP.learnMorePS5URL,
            IDREAM_SKY_SITE: o.default.APP.iDreamSkySiteURL,
            NPPA_REVISED_ANTI_ADDICTION_CIRCULAR: o.default.APP.NPPARevisedAntiAddictionCircularURL,
            NPPA_ANTI_ADDICTION_CIRCULAR: o.default.APP.NPPAAntiAddictionCircularURL
        },
        h = PdrIF.queryParamKeys(),
        v = a.default.create(h.reduce((function(e, t) {
            return e[t] = PdrIF.queryParamDefault(t), e
        }), {
            queryParams: h
        }))
    e.QueryParamsMixin = v
    var _ = r.default.extend(i.default, {
        getQueryParam: function(e) {
            return PdrIF.queryParamParsed(e)
        },
        getQueryParams: function() {
            return l(l({}, PdrIF.handledQueryParams), PdrIF.unhandledQueryParams)
        },
        didRender: function() {
            PdrIF.didRender(), this.trigger("didRender")
        },
        isCentralAuthService: function() {
            return d()
        },
        isUseV3Authorize: function() {
            return u()
        },
        setAuthVer: function(e) {
            g[e] && g[e].length > 0 && (f.VERSA_OAUTH_AUTHORIZE = g[e])
        },
        createQueryParams: function(e, t) {
            return PdrIF.createQueryParams(e, t)
        },
        createUri: function(e, t, n) {
            return PdrIF.createUri(f[e] || e, t, n)
        },
        closeOnSucceed: function(e, n, i) {
            this.trigger("close", "success"), i && i.redirectUri && (i.redirectUri = f[i.redirectUri] || i.redirectUri), (0, t.next)(this, (function() {
                PdrIF.closeOnSucceed(e, n, i)
            }))
        },
        closeOnCancel: function(e, n) {
            this.trigger("close", "cancel"), (0, t.next)(this, (function() {
                PdrIF.closeOnCancel(e, n)
            }))
        },
        closeOnError: function(e, n, i, r, a) {
            this.trigger("close", "error", e), (0, t.next)(this, (function() {
                PdrIF.closeOnError(e, n, i, r, a)
            }))
        },
        redirectTo: function(e) {
            e.redirectUri = f[e.redirectUri] || e.redirectUri, (0, t.next)(this, (function() {
                PdrIF.redirectTo(e)
            }))
        },
        openNewWindow: function(e, t, n) {
            PdrIF.openNewWindow(f[e] || e, t, n)
        },
        getAnalyticConfig: function() {
            return PdrIF.getAnalyticConfig()
        },
        getCloudcarServices: function() {
            return PdrIF.getCloudcarServices()
        },
        getEntryPoint: function(e) {
            return PdrIF.getEntryPoint(e)
        },
        getUAParserInstance: function() {
            return PdrIF.getUAParserInstance()
        },
        setCompleteIPinCallback: function(e) {
            PdrIF._completeIPin = e
        }
    })
    e.default = _
})), define("kekka/services/app-params", ["exports", "@ember/debug", "@ember/object/computed", "@ember/object", "@ember/service", "@ember/utils", "ember", "hokkai/utils/language-utils", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s, l) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = {},
        d = r.default.extend({
            localizationService: (0, r.inject)("localization"),
            appInterfaceService: (0, r.inject)("app-interface"),
            init: function() {
                this._super(), this.set("storage", i.default.create())
            },
            storage: null,
            _setParam: function(e, t) {
                c[e] = t
            },
            _getParam: function(e) {
                return c.hasOwnProperty(e) ? c[e] : this.appInterfaceService.getQueryParam(e)
            },
            deviceBaseFontSize: (0, i.computed)((function() {
                return parseFloat(this._getParam("device_base_font_size"))
            })),
            entryPoint: (0, i.computed)((function() {
                return this._getParam("entry") || null
            })),
            featureName: (0, i.computed)((function() {
                return this._getParam("feature_name") || null
            })),
            getOnetimeEntry: function() {
                var e = this._getParam("onetime_entry")
                return this._setParam("onetime_entry", ""), e
            },
            idVerificationToken: (0, i.computed)((function() {
                return this._getParam("token") || null
            })),
            accessToken: (0, i.computed)((function() {
                return this._getParam("access_token") || null
            })),
            idToken: (0, i.computed)((function() {
                return this._getParam("id_token") || null
            })),
            applyAuthVer: function() {
                this.appInterfaceService.setAuthVer(this.authVer)
            },
            authVer: (0, i.computed)((function() {
                return this._getParam("auth_ver") || null
            })),
            npsso: (0, i.computed)((function() {
                var e = this._getParam("npsso_token")
                if (e)
                    for (var t = e.split(";"), n = 0; n < t.length; n++)
                        if (t[n]) {
                            var i = decodeURIComponent(t[n])
                            if (i.indexOf("=") > 0) {
                                var r = i.substring(0, i.indexOf("=")),
                                    a = i.substring(i.indexOf("=") + 1)
                                if ("npsso" === r) return a
                            }
                        }
                return null
            })),
            state: (0, i.computed)((function() {
                return this._getParam("state") || null
            })),
            lgt: (0, i.computed)((function() {
                return this._getParam("lgt") || null
            })),
            redirectUri: (0, i.computed)((function() {
                return this._getParam("redirect_uri") || null
            })),
            isMobile: (0, i.computed)((function() {
                var e = this._getParam("layout_type")
                return "mobile" === this._getParam("device_profile") || "popup" === e
            })),
            isPcTablet: (0, n.not)("isMobile"),
            isPc: (0, i.computed)((function() {
                return "pc" === this._getParam("device_profile") && !this.isMobile
            })),
            isFireTv: (0, i.computed)((function() {
                return "inapp_fireos" === this._getParam("app_context")
            })),
            isTablet: (0, i.computed)((function() {
                return "tablet" === this._getParam("device_profile") && !this.isMobile
            })),
            isModal: (0, i.computed)((function() {
                return "modal" === this._getParam("layout_type")
            })),
            isLayoutTypePSApp: (0, i.computed)((function() {
                return "psapp" === this._getParam("layout_type")
            })),
            isSinglePane: (0, i.computed)("isSinglePane", "isMobile", {
                get: function() {
                    var e = this._getParam("isSinglePane")
                    return "boolean" == typeof e ? e : this.isMobile
                },
                set: function(e, t) {
                    return this._setParam("isSinglePane", t), "boolean" == typeof t ? t : this.isMobile
                }
            }),
            deviceProfile: (0, i.computed)((function() {
                return this._getParam("device_profile")
            })),
            isFixedLocale: (0, i.computed)((function() {
                return !!this._getParam("fix_locale")
            })),
            requestCountry: (0, i.computed)("requestCountry", {
                get: function() {
                    return this._getParam("request_country")
                },
                set: function(e, t) {
                    return this._setParam("request_country", t), t
                }
            }),
            hasRequestLocale: (0, i.computed)((function() {
                return !!this._getParam("request_locale")
            })),
            requestLocale: (0, i.computed)((function() {
                return this._getParam("request_locale")
            })),
            initialLocale: (0, i.computed)((function() {
                if (this._getParam("fix_locale")) return {
                    language: this._getParam("fix_locale"),
                    country: this._getParam("fix_locale").split("_")[1]
                }
                var e = this._getParam("request_locale") || this._getParam("language")
                return e ? this.localizationService.parseUnifiedLocale(e) || this.localizationService.translateNpToUnifiedLocale(e) : this.localizationService.getDetectedLocale()
            })),
            unifiedCountry: (0, i.computed)((function() {
                return this._getParam("unified_country")
            })),
            unifiedLanguage: (0, i.computed)((function() {
                var e = this._getParam("unified_language"),
                    t = e.replace(/_/g, "-")
                return {
                    actualValue: e,
                    convertedValue: t,
                    isConverted: e !== t
                }
            })),
            sourcePageId: (0, i.computed)((function() {
                return this._getParam("src_page_id")
            })),
            animationEnabled: (0, i.computed)((function() {
                return "enable" === this._getParam("animation")
            })),
            hasSupportScheme: (0, i.computed)((function() {
                var e = this._getParam("support_scheme") || {},
                    t = e.scepsappint,
                    n = e.scepspcint,
                    i = e.sneiprls
                return t || n || i
            })),
            hasReturnLocation: (0, i.computed)((function() {
                return this.hasSupportScheme || this._getParam("redirect_uri")
            })),
            enabledCancel: (0, i.computed)((function() {
                return "popup" !== this._getParam("layout_type") && this.hasReturnLocation && "no_cancel" !== this._getParam("elements_visibility_upgrade")
            })),
            accountType: (0, i.computed)("accountType", {
                get: function() {
                    return this._getParam("accountType") || this._getParam("account_type")
                },
                set: function(e, t) {
                    return this._setParam("accountType", t), t
                }
            }),
            isSubAccount: (0, n.equal)("accountType", "sub"),
            isVisibleLegalLinks: (0, i.computed)((function() {
                return "none" !== this._getParam("displayFooter") && !this.isLayoutTypePSApp
            })),
            isStreetAddress: (0, i.computed)((function() {
                return this._getParam("missing_elements") ? this._getParam("missing_elements").split(",").indexOf("STREET_ADDRESS") >= 0 : !this._getParam("tp_console") && this._getParam("tp_street")
            })),
            isRealNameRequested: (0, i.computed)((function() {
                return !!this._getParam("missing_elements") && this._getParam("missing_elements").split(",").indexOf("REAL_NAME") >= 0
            })),
            missingElements: (0, i.computed)((function() {
                var e = this._getParam("missing_elements")
                return e ? e.split(",") : null
            })),
            toppings: (0, i.computed)((function() {
                return {
                    tp_console: this._getParam("tp_console"),
                    tp_street: this._getParam("tp_street"),
                    tp_psn: this._getParam("tp_psn"),
                    tp_social: this._getParam("tp_social")
                }
            })),
            toppingExcludedFromCreation: (0, i.computed)("toppingExcludedFromCreation", {
                get: function() {
                    return this._getParam("toppingExcludedFromCreation")
                },
                set: function(e, t) {
                    return this._setParam("toppingExcludedFromCreation", t), t
                }
            }),
            easySigninCode: (0, i.computed)("easySigninCode", {
                get: function() {
                    return this._getParam("easy_signin_code").substr(0, 12)
                },
                set: function(e, t) {
                    return this._setParam("easy_signin_code", t), t
                }
            }),
            psSigninCode: (0, i.computed)("psSigninCode", {
                get: function() {
                    return this._getParam("code").substr(0, 12)
                },
                set: function(e, t) {
                    return this._setParam("code", t), t
                }
            }),
            authError: (0, i.computed)((function() {
                return {
                    error_code: this._getParam("error_code"),
                    error_description: this._getParam("error_description"),
                    error: this._getParam("error"),
                    missingMandatoryAttributes: this._getParam("missing_mandatory_attributes")
                }
            })),
            appParams: (0, i.computed)((function() {
                var e = {
                        clientId: this._getParam("client_id"),
                        scope: this._getParam("scope")
                    },
                    t = this._getParam("service_entity")
                t && (e.serviceEntity = t)
                var n = this._getParam("origin_client_id")
                n && (e.originClientId = n)
                var i = this._getParam("redirect_uri")
                i && (e.redirectUri = i)
                var r = this._getParam("response_type")
                r && (e.responseType = r)
                var a = this._getParam("access_type")
                a && (e.accessType = a)
                var o = this._getParam("auth_ver")
                return o && (e.authVer = o), e
            })),
            prompt: (0, i.computed)((function() {
                return this._getParam("prompt")
            })),
            hasAuthMandatoryParams: (0, i.computed)((function() {
                return !!(this._getParam("client_id") && this._getParam("scope") && this._getParam("redirect_uri"))
            })),
            serviceEntity: (0, i.computed)((function() {
                return this._getParam("service_entity")
            })),
            isVisibleTroubleShoot: (0, i.computed)((function() {
                return !0 !== this._getParam("hidePageElements").troubleSigningInLink
            })),
            isVisibleResetPwLink: (0, i.computed)((function() {
                return !0 !== this._getParam("hidePageElements").forgotPasswordLink
            })),
            isVisibleAcLink: (0, i.computed)((function() {
                return !0 !== this._getParam("elements_visibility").no_aclink && !0 !== this._getParam("hidePageElements").noAccountSection
            })),
            isVisibleSignOut: (0, i.computed)((function() {
                return !this._getParam("elements_visibility").no_signout && !this.forceHideMenu
            })),
            forceHideMenu: (0, i.computed)((function() {
                return this._getParam("elements_visibility").no_menu
            })),
            isVisibleUpgradeDoThisLater: (0, i.computed)((function() {
                return "no_cancel" !== this._getParam("elements_visibility_upgrade")
            })),
            noSignOutUpgradeDoThisLater: (0, i.computed)((function() {
                return "no_signout" === this._getParam("upgrade_cancel_link")
            })),
            serviceLogo: (0, i.computed)((function() {
                var e, t = this._getParam("service_logo"),
                    n = this._getParam("service_logo_v2")
                return "none" === (e = null == n ? t : n) ? "" : e
            })),
            serviceLogoUrl: (0, i.computed)("serviceLogo", "caServiceLogoUrl", (function() {
                if (this.caServiceLogoUrl) return this.caServiceLogoUrl
                if (this.isPsnUser) {
                    return {
                        ps: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_playstation.png",
                        pmo: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_playmemories.png",
                        smarttennis: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_smart_tennis.png",
                        socialife: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_socialife.png",
                        tvsideview: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_tv_side_view.png"
                    }[this.serviceLogo]
                }
            })),
            caServiceLogoUrl: (0, i.computed)("caServiceLogoUrl", {
                get: function() {
                    return this._getParam("caServiceLogoUrl")
                },
                set: function(e, t) {
                    return this._setParam("caServiceLogoUrl", t), t
                }
            }),
            get isPsnUser() {
                if (!this.isApplicationForDCIM) return !0
                var e = this._getParam("isPsnUser")
                if ((0, a.isNone)(e)) throw new Error("E_DO_NOT_INIT")
                return e
            },
            updateIsPsnUser: function(e) {
                return this._setParam("isPsnUser", e), e
            },
            messageCode: (0, i.computed)((function() {
                return this._getParam("message_code")
            })),
            pr_referer: (0, i.computed)((function() {
                return this._getParam("pr_referer")
            })),
            isEVSkip: (0, i.computed)((function() {
                return this._getParam("noEVBlock")
            })),
            appContextPrefixForAA: (0, i.computed)((function() {
                return {
                    ios: "ios",
                    aos: "android",
                    fireos: "amazon"
                }[this._getParam("app_context").split("_")[1]]
            })),
            visitorId: (0, i.computed)((function() {
                return this._getParam("visitor_id")
            })),
            smcId: (0, i.computed)((function() {
                return this._getParam("smcid")
            })),
            ticketUuid: (0, i.computed)((function() {
                return this._getParam("ticket_uuid")
            })),
            hasAppModule: function(e) {
                return PdrIF.hasAppModule(e)
            },
            enabledStoreLink: (0, i.computed)((function() {
                return !1
            })),
            isApplicationForDCIM: (0, i.computed)((function() {
                return "ca" === PdrIF.buildTarget()
            })),
            isApplicationForPdrCa: (0, i.computed)((function() {
                return "pdr_ca" === PdrIF.buildTarget()
            })),
            isEntryFromDCIM: (0, n.notEmpty)("originClientId"),
            isAvailableCobrandingData: (0, i.computed)("isEntryFromDCIM", (function() {
                return !!l.default.APP.centralAuthServiceURL && this.isEntryFromDCIM
            })),
            createQueryParams: function(e, t) {
                return this.appInterfaceService.createQueryParams(e, t)
            },
            createUri: function(e, t, n) {
                return this.appInterfaceService.createUri(e, t, n)
            },
            bidi: (0, i.computed)("localizationService.currentLocale", (function() {
                return (0, s.isRTLLanguage)(this.get("localizationService.currentLocale")) ? "rtl" : "ltr"
            })),
            familyInvitationUuid: (0, i.computed)((function() {
                return this._getParam("family_invitation_uuid")
            })),
            signinId: (0, i.computed)((function() {
                return this._getParam("signin_id")
            })),
            loginHint: (0, i.computed)((function() {
                return this._getParam("login_hint")
            })),
            zipCode: (0, i.computed)((function() {
                return this._getParam("zip_code")
            })),
            reportSuite: (0, i.computed)((function() {
                return this._getParam("reportSuite")
            })),
            theme: (0, i.computed)((function() {
                return this._getParam("theme")
            })),
            originClientId: (0, i.computed)("originClientId", {
                get: function() {
                    return this._getParam("origin_client_id") || null
                },
                set: function(e, t) {
                    return this._setParam("origin_client_id", t), t
                }
            }),
            originDcimId: (0, i.computed)((function() {
                return this._getParam("origin_dcim_id")
            })),
            cid: (0, i.computed)((function() {
                return this._getParam("cid") || null
            })),
            platformPrivacyWs1: (0, i.computed)((function() {
                return this._getParam("PlatformPrivacyWs1")
            })),
            isAvailableWs1libHeader: (0, n.not)("platformPrivacyWs1"),
            duid: (0, i.computed)((function() {
                return this._getParam("duid") || null
            })),
            hasCreateAccountForChildMandatoryParams: (0, i.computed)("requestCountry", "dobString", (function() {
                return !!this.requestCountry && !!this.dobString
            })),
            dobString: (0, i.computed)((function() {
                return this._getParam("dob") || null
            })),
            dob: (0, i.computed)("dob", {
                get: function() {
                    if (this._getParam("dob")) {
                        var e = this._getParam("dob").split("-")
                        return {
                            year: e[0],
                            month: e[1],
                            day: e[2]
                        }
                    }
                    return null
                },
                set: function(e, t) {
                    return this._setParam("dob", t), t
                }
            }),
            requireParentSignin: (0, i.computed)((function() {
                return this._getParam("require_parent_signin")
            })),
            signedOut: (0, i.computed)((function() {
                return this._getParam("signed_out")
            })),
            redeemCode: (0, i.computed)((function() {
                return this._getParam("code")
            })),
            onlineId: (0, i.computed)((function() {
                return this._getParam("online_id")
            })),
            reservationId: (0, i.computed)((function() {
                return this._getParam("reservation_id")
            })),
            displayOldOid: (0, i.computed)((function() {
                return this._getParam("display_old_oid")
            })),
            paymentStatus: (0, i.computed)((function() {
                return this._getParam("payment_status")
            })),
            isIncluded: function(e) {
                var t = this.get("appParams.clientId")
                return e.some((function(e) {
                    if (e.indexOf(":") < 0) return e === t
                    var n = e.substring(0, e.indexOf(":"))
                    try {
                        var i = new RegExp(e.substring(e.indexOf(":") + 1), "i")
                        return n === t && i.test(window.navigator.userAgent)
                    } catch (r) {
                        return !1
                    }
                }))
            },
            isGated: (0, i.computed)((function() {
                return this._getParam("gated") || !1
            })),
            childAccountId: (0, i.computed)((function() {
                return this._getParam("child_account_id")
            })),
            returnWithDone: (0, i.computed)((function() {
                return this._getParam("return_with_done")
            })),
            returnParam: (0, i.computed)((function() {
                return this._getParam("return_param")
            })),
            noCaptcha: (0, i.computed)((function() {
                return "true" === this._getParam("no_captcha")
            })),
            hasNoCaptcha: (0, i.computed)((function() {
                return null !== this._getParam("no_captcha")
            })),
            region: (0, i.computed)((function() {
                return this._getParam("region")
            })),
            consentCanceled: (0, i.computed)((function() {
                return "true" === this._getParam("consent_canceled")
            })),
            consentCompleted: (0, i.computed)((function() {
                return this._getParam("consent_completed")
            })),
            authConfigForTransact: (0, i.computed)((function() {
                return this.isApplicationForPdrCa ? this.appInterfaceService.isCentralAuthService() ? "central" : "default" : "legacy"
            })),
            isCreateParentViaPPR: (0, i.computed)((function() {
                return "create_parent" === this._getParam("message_code_r2p")
            })),
            unknownCountry: (0, i.computed)((function() {
                return this._getParam("unknownCountry") || this._getParam("unknown_country")
            })),
            ticketExpiresOn: (0, i.computed)((function() {
                return this._getParam("ticket_expires_on")
            })),
            member: (0, i.computed)((function() {
                return this._getParam("member")
            })),
            ownBrowser: (0, i.computed)((function() {
                return this.appInterfaceService.getUAParserInstance().getBrowser()
            })),
            isIE: (0, n.equal)("ownBrowser.name", "IE"),
            enableSchemeErrorCode: (0, i.computed)((function() {
                return this._getParam("enable_scheme_error_code")
            })),
            isSafariOrInAppIOS: (0, i.computed)((function() {
                return ["Mobile Safari", "Safari"].includes(this.ownBrowser.name) || "inapp_ios" === this._getParam("app_context")
            })),
            isUpdatedAccount: (0, i.computed)((function() {
                return "true" === this._getParam("updated_account")
            })),
            disabledValkyrie: !0
        })
    var u = d
    e.default = u
})), define("kekka/services/arkose-labs", ["exports", "@ember/debug", "@ember/runloop", "@ember/service", "@ember/utils", "ember", "rsvp", "hokkai/utils/language-utils", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s, l) {
    function c(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
            if (null == n) return
            var i, r, a = [],
                o = !0,
                s = !1
            try {
                for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
            } catch (l) {
                s = !0, r = l
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return a
        }(e, t) || u(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d(e) {
        return function(e) {
            if (Array.isArray(e)) return p(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || u(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
        }
    }

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? m(Object(n), !0).forEach((function(t) {
                f(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.PUBLIC_KEY = void 0
    var h = "arkose:challenge",
        v = {
            ACCOUNT_CREATION: l.default.APP.arkoseLabsPublicKeyAccountCreation,
            ACCOUNT_UPDATE: l.default.APP.arkoseLabsPublicKeyAccountUpdate,
            PASSWORD_RECOVERY: l.default.APP.arkoseLabsPublicKeyPasswordRecovery,
            SIGN_IN: l.default.APP.arkoseLabsPublicKeySignIn
        }
    e.PUBLIC_KEY = v
    var _ = {
            captchaProvider: h,
            captchaProviderKey: "9111AFAA-345E-411A-B25D-1D41E74937F4",
            captchaResponse: "ddd7179-7406-4a9f-be4d-65bcf1052230"
        },
        b = i.default.extend({
            appParamsService: (0, i.inject)("app-params"),
            loadingService: (0, i.inject)("loading"),
            localizationService: (0, i.inject)("localization"),
            noticeService: (0, i.inject)("notice"),
            setupServiceConfig: (0, i.inject)("setup-service-config"),
            telemetryCaptchaService: (0, i.inject)("telemetry-captcha"),
            init: function() {
                this._super.apply(this, arguments), this._enforcement = {}, window.setupEnforcement = this._setupEnforcement.bind(this)
            },
            willDestroy: function() {
                delete window.setupEnforcement
            },
            doCaptcha: function(e) {
                var t = this._forceNoCaptchaTest || this.setupServiceConfig.get("config.dev_enable_magic_response_for_arkose_labs_captcha")
                return a.default.testing || !l.default.APP.isProduction && t ? (0, o.resolve)(_) : this._doCaptcha.apply(this, arguments)
            },
            setForceNoCaptchaTest: function(e) {
                this._forceNoCaptchaTest = e
            },
            _createSendData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                return g(g({}, e), {}, {
                    captchaProvider: h,
                    pubkey: this._publicKey.substr(0, 6)
                })
            },
            _doCaptcha: function(e) {
                var t = this,
                    i = this._enforcement[this._publicKey],
                    r = this._getCurrentLoading(),
                    a = (0, o.defer)(),
                    l = window.history.state,
                    c = (0, n.later)(this, (function() {
                        i.isError = !0, a.reject("SERVER_CONNECTION_TIMEOUT")
                    }), 3e4)
                return i.enforcement.setConfig({
                    data: {},
                    language: (0, s.getArkoseLabsLanguage)(this.localizationService.get("currentLocale"), e),
                    onCompleted: function(e) {
                        r && t.loadingService.beginTransition(r.blockInteraction, r.name), t.telemetryCaptchaService.sendConfirmCaptchaChallengeEvent(t._createSendData()), "function" == typeof window.history.replaceState && void 0 !== window.history.state && !window.history.state && l && (t.noticeService.trigger("error", {
                            code: "UNEXPECTED_HISTORY_STATE"
                        }, null, "INFO"), window.history.replaceState(l, null)), a.resolve({
                            captchaProvider: h,
                            captchaProviderKey: t._publicKey,
                            captchaResponse: e.token
                        })
                    },
                    onHide: function() {
                        t._setFocusable(!0), delete t._focusableElements, t.appParamsService.isIE && document.getElementById("focus-target-after-captcha").focus()
                    },
                    onReady: function() {
                        (0, n.cancel)(c), i.isLoaded = !0, i.enforcement.run()
                    },
                    onReset: function() {
                        i.isReset = !0
                    },
                    onShow: function() {},
                    onShown: function() {
                        r && t.loadingService.endTransition(), t.telemetryCaptchaService.sendCaptchaChallengeEvent(t._createSendData({
                            method: "shown"
                        })), t._focusableElements = d(document.querySelectorAll('[data-components="kekka-application"] [tabindex]:not([tabindex="-1"])')), t._setFocusable(!1), (0, n.cancel)(c)
                    },
                    onSuppress: function() {
                        t.telemetryCaptchaService.sendCaptchaChallengeEvent(t._createSendData({
                            method: "suppressed"
                        })), (0, n.cancel)(c)
                    }
                }), i.isError ? (i.isError = !1, i.enforcement.reset()) : i.isLoaded && (i.isReset ? (i.isReset = !1, i.enforcement.run()) : i.enforcement.reset()), a.promise
            },
            loadScript: function(e) {
                return this._publicKey = e, this._createArkoseScript().catch((function(e) {
                    return (0, o.reject)({
                        errorId: "NETWORK_ERROR",
                        forceFatal: !0
                    })
                }))
            },
            _createArkoseScript: function() {
                var e = (0, o.defer)()
                if (document.querySelector("script[src*='".concat(this._publicKey, "']"))) return e.resolve(), e.promise
                var t = document.createElement("script")
                return t.type = "text/javascript", t.src = "https://client-api.arkoselabs.com/v2/".concat(this._publicKey, "/api.js"), t.setAttribute("data-callback", "setupEnforcement"), t.async = !0, t.defer = !0, t.onerror = e.reject, t.onload = e.resolve, document.head.appendChild(t), e.promise
            },
            _getCurrentLoading: function() {
                var e = this.loadingService,
                    t = e.blockInteraction,
                    n = e.transiting
                if (!0 === n) return {
                    blockInteraction: t
                }
                if ("object" === (0, r.typeOf)(n))
                    for (var i = 0, a = Object.entries(n); i < a.length; i++) {
                        var o = c(a[i], 2),
                            s = o[0]
                        if (o[1]) return {
                            blockInteraction: t,
                            name: s
                        }
                    }
                return null
            },
            _setFocusable: function(e) {
                if (this._focusableElements) {
                    var t, n = function(e, t) {
                        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
                        if (!n) {
                            if (Array.isArray(e) || (n = u(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n)
                                var i = 0,
                                    r = function() {}
                                return {
                                    s: r,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: r
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, o = !0,
                            s = !1
                        return {
                            s: function() {
                                n = n.call(e)
                            },
                            n: function() {
                                var e = n.next()
                                return o = e.done, e
                            },
                            e: function(e) {
                                s = !0, a = e
                            },
                            f: function() {
                                try {
                                    o || null == n.return || n.return()
                                } finally {
                                    if (s) throw a
                                }
                            }
                        }
                    }(this._focusableElements)
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            t.value.tabIndex = e ? 0 : -1
                        }
                    } catch (i) {
                        n.e(i)
                    } finally {
                        n.f()
                    }
                }
            },
            _setupEnforcement: function(e) {
                this._enforcement[this._publicKey] = {
                    enforcement: e,
                    isError: !1,
                    isLoaded: !1,
                    isReset: !1
                }
            }
        }),
        y = b
    e.default = y
})), define("kekka/services/authentication-mode-v2", ["exports", "hokkai/services/authentication-mode-v2"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "SCOPES_METHOD", {
        enumerable: !0,
        get: function() {
            return t.SCOPES_METHOD
        }
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/backup-code", ["exports", "hokkai/services/backup-code"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "SCOPES_METHOD", {
        enumerable: !0,
        get: function() {
            return t.SCOPES_METHOD
        }
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/check-personalization-settings-adapter", ["exports", "@ember/debug", "@ember/service", "rsvp"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = n.default.extend({
        checkPersonalizationSettingsService: (0, n.inject)("check-personalization-settings"),
        noticeService: (0, n.inject)("notice"),
        initialize: function() {
            this.checkPersonalizationSettingsService.initialize()
        },
        needsForceUpgrade: function(e) {
            var t = this
            return this.checkPersonalizationSettingsService.needsForceUpgrade(e).then((function(n) {
                return t._createProfile(n, e.serviceEntity, t.checkPersonalizationSettingsService.session.language)
            }))
        },
        _createProfile: function(e, t, n) {
            var r = this
            return "urn:service-entity:psn" !== t ? (0, i.resolve)(e) : this.checkPersonalizationSettingsService.getBasicProfile().then((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.aboutMe,
                    i = e.etag,
                    a = e.exists,
                    o = e.languages
                if (!a) {
                    var s = [n]
                    return r.noticeService.sendErrorEvent({
                        error: new Error(JSON.stringify({
                            actualValue: o,
                            modifiedValue: s
                        }).replace(/\"/g, "")),
                        errorModel: {
                            code: "UNEXPECTED_PROFILE_STATE"
                        },
                        severity: "INFO"
                    }), r.checkPersonalizationSettingsService.putBasicProfile({
                        aboutMe: t,
                        etag: i,
                        languages: s
                    })
                }
            })).then((function() {
                return e
            })).catch((function(t) {
                return r.noticeService.sendErrorEvent({
                    error: t
                }), e
            }))
        }
    })
    e.default = r
})), define("kekka/services/check-personalization-settings", ["exports", "hokkai/services/check-personalization-settings"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/check-subaccount", ["exports", "hokkai/services/check-subaccount"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/children-privacy", ["exports", "@ember/object", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        checkSubaccountService: (0, n.inject)("check-subaccount"),
        countryResourceService: (0, n.inject)("country-resource"),
        isEnabledChildPrivacy: (0, t.computed)("checkSubaccountService.session.isSubAccount", (function() {
            var e = this.countryResourceService.getResource("REGION"),
                t = !!this.get("checkSubaccountService.session.isSubAccount")
            return "SCEE" === e && t
        })),
        accountType: (0, t.computed)("checkSubaccountService.session.isSubAccount", (function() {
            return !!this.get("checkSubaccountService.session.isSubAccount") ? "sub" : "master"
        })),
        get region() {
            return this.countryResourceService.getResource("REGION")
        },
        setSession: function() {
            var e;
            (e = this.checkSubaccountService).setSession.apply(e, arguments)
        }
    })
    e.default = i
})), define("kekka/services/cobranding-data", ["exports", "@ember/object/computed", "@ember/debug", "jquery", "rsvp", "@ember/runloop", "@ember/service", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = o.default.extend({
        setupService: (0, o.inject)("setup-service-config"),
        appParamsService: (0, o.inject)("app-params"),
        dataList: {},
        locale: null,
        initialize: function(e, t) {
            var n = this,
                o = this.dataList
            return Object.keys(o).length && this.locale === t ? (0, r.resolve)(o) : new r.Promise((function(r, l) {
                var c = n.appParamsService
                if (c.get("isAvailableCobrandingData")) {
                    c.updateIsPsnUser(null)
                    var d = s.default.APP.centralAuthServiceURL,
                        u = null; - 1 !== window.navigator.userAgent.toLowerCase().indexOf("trident/") && (u = {
                        _: Math.floor((new Date).getTime())
                    }), i.default.getJSON("".concat(d, "/v1/cobranding/clients/").concat(e, "/locales/").concat(t), u).then((0, a.bind)(n, (function(e) {
                        o = e.configurations.reduce((function(e, t) {
                            return e[t.name] = t.value, e
                        }), {}), n.set("dataList", o), n.set("locale", t), c.set("caServiceLogoUrl", o.serviceLogoUrl), !c.get("caServiceLogoUrl") && n.isNp && c.set("caServiceLogoUrl", "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/logo_playstation.png"), c.updateIsPsnUser(n.isNp), r(o)
                    })), (function(e) {
                        l(n.setupService.createHokkaiError("E_TIMEOUT"))
                    }))
                } else {
                    var p = new Error("E_BAD_ARGS")
                    l(p)
                }
            }))
        },
        createAboutMenuList: function() {
            var e = this.dataList,
                t = []
            return this.hasTosuaUrl && t.push({
                url: e.tosuaUrl,
                testId: "terms",
                title: "msg_terms_of_service"
            }), this.hasPrivacyUrl && t.push({
                url: e.privacyUrl,
                testId: "privacy",
                title: "msg_legal_caution_anchor_privacy"
            }), this.hasHelpUrl && t.push({
                url: e.helpUrl,
                testId: "help",
                title: "msg_sf_regcam_ev_help"
            }), t
        },
        enabledShow2SVSetup: (0, t.equal)("dataList.show2SVSetup", "true"),
        hasServiceHomePageUrl: (0, t.notEmpty)("dataList.serviceHomePageUrl"),
        hasServiceLogoUrl: (0, t.notEmpty)("dataList.serviceLogoUrl"),
        hasServiceBackgroundImage: (0, t.notEmpty)("dataList.serviceBackgroundImage"),
        hasServiceName: (0, t.notEmpty)("dataList.serviceName"),
        hasLearnMoreUrl: (0, t.notEmpty)("dataList.learnMoreUrl"),
        hasCreateAccountUrl: (0, t.notEmpty)("dataList.createAccountUrl"),
        hasTosuaUrl: (0, t.notEmpty)("dataList.tosuaUrl"),
        hasPrivacyUrl: (0, t.notEmpty)("dataList.privacyUrl"),
        hasHelpUrl: (0, t.notEmpty)("dataList.helpUrl"),
        hasTroubleSignInUrl: (0, t.notEmpty)("dataList.troubleSignInUrl"),
        hasServiceCAMUrl: (0, t.notEmpty)("dataList.serviceCAMUrl"),
        hasSignOutUrl: (0, t.notEmpty)("dataList.signOutUrl"),
        isNp: (0, t.equal)("dataList.isNp", "true"),
        isVisibleLearnMore: (0, t.or)("hasLearnMoreUrl", "isNp"),
        isVisibleSigninHelp: (0, t.or)("hasTroubleSignInUrl", "isNp")
    })
    e.default = l
})), define("kekka/services/country-resource", ["exports", "hokkai/services/country-resource", "kekka/config/environment"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        legalDocBaseURL: n.default.APP.legalDocBaseURL || ""
    })
    e.default = i
}))
define("kekka/services/debug", ["exports", "@ember/object/evented", "@ember/service", "jquery", "@ember/object", "@ember/debug", "ember"], (function(e, t, n, i, r, a, o) {
    var s
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = s || n.default.extend()
    e.default = l
})), define("kekka/services/ev-status", ["exports", "hokkai/services/ev-status"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/gating-checker", ["exports", "hokkai/services/gating-checker"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/gct", ["exports", "hokkai/services/gct"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/history", ["exports", "@ember/object/events", "@ember/object/evented", "@ember/service", "@ember/controller", "@ember/routing/route", "@ember/debug", "ember"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l, c, d, u, p, m, g = history.replaceState && void 0 !== history.state,
        f = {
            sendInfoTelemetry: function() {}
        }

    function h() {
        var e = window.location.hash.substring(1)
        var t = l._routerMicrolib.recognizer.recognize(e)
        return t[t.length - 1].handler
    }

    function v(e, t) {
        var n = !1
        if (u.length)
            if (!s.default.testing && g) {
                var i = window.history.state
                i && i.index === u[u.length - 1].index || (n = !0)
            } else window.location.hash !== u[u.length - 1].hash && (n = !0)
        n && !m && b(), c = {
            route: e,
            storage: {}
        }, t && (c[t] = !0), p && p()
    }

    function _(e, t) {
        for (var n = e.length - 1; n > 0; --n)
            if (t === e[n].hash) return n
        return -1
    }

    function b() {
        if (!s.default.testing && g) {
            var e = window.history.state
            e ? e.key === d ? window.history.go(u[u.length - 1].index - e.index) : (f.sendInfoTelemetry({
                code: "UNEXPECTED_HISTORY_STATE",
                stack: new Error("historyState: ".concat(e)).stack
            }), window.location.reload()) : (f.sendInfoTelemetry({
                code: "UNEXPECTED_HISTORY_STATE",
                stack: new Error("historyState: ".concat(e)).stack
            }), window.history.back())
        } else {
            var t, n = 0,
                i = window.location.hash;
            (n = (t = _(u, i)) >= 0 ? u.length - 1 - t : (t = _(u.removed, i)) >= 0 ? u.removed.length - 1 - t + u.length : -1) && window.history.go(n)
        }
    }

    function y() {
        var e = u.length - 1
        u.baseIndex += e
        var t = u.splice(0, e)
        s.default.testing || g || (u.removed = u.removed.concat(t))
    }
    a.default.reopen({
        transitionTo: function(e) {
            v(e), this._super.apply(this, arguments)
        },
        replaceWith: function(e) {
            v(e, "replace"), this._super.apply(this, arguments)
        }
    }), r.default.reopen({
        transitionToRoute: function(e) {
            v(e), this._super.apply(this, arguments)
        },
        replaceRoute: function(e) {
            v(e, "replace"), this._super.apply(this, arguments)
        }
    })
    var k = i.default.extend(n.default, {
        entryRoute: "",
        isBottom: !0,
        canBackTransition: !0,
        noticeService: (0, i.inject)("notice"),
        router: (0, i.inject)("router"),
        initialize: function() {
            var e = this
            l = this.router._router, f.sendInfoTelemetry = function(t) {
                e.noticeService.trigger("error", t, null, "INFO")
            }, d = Date.now(), (u = []).baseIndex = 0
            var t = window.navigator.userAgent
            m = -1 === t.indexOf("Safari") && /(iPhone|iPad|iPod|iPod touch);/.test(t), s.default.testing || g || (u.removed = []), this.set("entryRoute", h()), c = {
                route: this.entryRoute,
                storage: {}
            }
            var n = this
            p = function() {
                n.trigger("willChange")
            }, PdrIF.transitionAnimation = {
                type: "",
                onStart: function() {
                    e.trigger("startTransitionAnimation")
                },
                onComplete: function() {
                    e.trigger("completeTransitionAnimation")
                }
            }, this.router.on("routeDidChange", (function(t) {
                !t.isAborted && e._routeDidChange(t)
            }))
        },
        get length() {
            return u.length
        },
        get currentRoute() {
            return u.length ? u[u.length - 1].route : this.entryRoute
        },
        get transitingRoute() {
            return c && c.route
        },
        get currentRouteStorage() {
            return c ? c.storage : u.length ? u[u.length - 1].storage : null
        },
        reset: function() {
            c ? c.reset = !0 : y()
        },
        back: function() {
            return u.length > 1 ? (this.canBackTransition && (this.trigger("willChange"), (c = u[u.length - 2]).back = !0, window.history.back(), c.index !== window.history.state.index && f.sendInfoTelemetry({
                code: "UNEXPECTED_HISTORY_STATE_INDEX",
                stack: new Error("newTransition.index: ".concat(c.index, ", window.history.state.index: ").concat(window.history.state.index)).stack
            })), !0) : (f.sendInfoTelemetry({
                code: "UNEXPECTED_STACK_LENGTH",
                stack: new Error("stack.length: ".concat(u.length)).stack
            }), !1)
        },
        backTo: function(e) {
            if (e && u.length > 1) {
                var t, n = -1
                for (t = u.length - 1; t >= 0 && (++n, e !== u[t].route); --t);
                if (n && n < u.length && this.canBackTransition) {
                    for (v(u[u.length - 1 - n].route, "back"), t = 1; t < n; ++t) u.pop()
                    return window.history.go(-n), !0
                }
            }
            return !1
        },
        oneChange: function(e) {
            c ? c.oneChanges = (c.oneChange || []).concat(e) : this.one("didChange", e)
        },
        handleError: function(e, t) {
            c && (c = null), 0 === u.length && t && t.call(e)
        },
        willTransition: function(e, t, n) {
            if (s.default.testing || g || "index" !== e) c ? e !== c.route ? n.call(t, {
                errorId: "NOSUCH_ROUTE_ERROR"
            }) : c.back && !this.canBackTransition && n.call(t) : u.length >= 2 && e === u[u.length - 2].route && this.canBackTransition ? c = {
                route: e,
                back: !0,
                storage: u[u.length - 2].storage || {}
            } : n.call(t)
            else {
                var i = this.entryRoute
                n.call(t), t.replaceWith(i), c = {
                    route: i,
                    back: !0,
                    storage: u[0] && u[0].storage
                }
            }
        },
        preventTransition: function() {
            c ? c = null : b()
        },
        prepareTransition: function(e, t) {
            v(e, t)
        },
        _routeDidChange: function() {
            var e = this
            if (c) {
                var n = c.route,
                    i = h()
                if (n !== i && !m) return f.sendInfoTelemetry({
                    code: "UNEXPECTED_ROUTE",
                    stack: new Error("newRoute: ".concat(n, ", currentRoute: ").concat(i)).stack
                }), void window.location.reload()
                var r = c.oneChanges
                r && delete c.oneChanges
                var a = !1
                if (c.reset && (a = !0, delete c.reset), c.replace) {
                    var o = u.length > 0 ? u.length - 1 : 0
                    u[o] = c, delete c.replace
                } else c.back ? (PdrIF.transitionAnimation.type = "toBack", u.pop(), c = null) : (PdrIF.transitionAnimation.type = "toNext", u.push(c))
                a && y(), c && (c.index = u.baseIndex + u.length - 1, !s.default.testing && g ? window.history.replaceState({
                    key: d,
                    index: c.index
                }, c.route) : c.hash = window.location.hash, c = null), this.set("isBottom", u.length <= 1), this.trigger("didChange", n), r && r.forEach((function(t) {
                    e.one("didChange", t)
                }), this), (0, t.sendEvent)(this, "didChangeStack")
            }
        }
    })
    var S = k
    e.default = S
})), define("kekka/services/legal-docs", ["exports", "@ember/debug", "@ember/service", "@ember/utils", "ember-copy", "ember-fetch/errors", "fetch", "rsvp"], (function(e, t, n, i, r, a, o, s) {
    function l(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
            if (null == n) return
            var i, r, a = [],
                o = !0,
                s = !1
            try {
                for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
            } catch (l) {
                s = !0, r = l
            } finally {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw r
                }
            }
            return a
        }(e, t) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return c(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }

    function d(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function u(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? d(Object(n), !0).forEach((function(t) {
                p(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.DOC_ID = void 0
    var m = {
        CFPP: "cfpp",
        PP: "pp",
        SPLA: "spla",
        SUT: "sut",
        TOS: "tos",
        WC: "wc"
    }
    e.DOC_ID = m
    var g = {
            cfpp: {
                testId: m.CFPP,
                title: "msg_legal_caution_anchor_privacy",
                url: ""
            },
            pp: {
                testId: m.PP,
                title: "msg_legal_caution_anchor_privacy",
                url: ""
            },
            spla: {
                testId: m.SPLA,
                title: "msg_software_product_license_agreement",
                url: ""
            },
            sut: {
                testId: m.SUT,
                title: "msg_software_usage_terms",
                url: ""
            },
            tos: {
                testId: m.TOS,
                title: "msg_tosua_psn",
                url: ""
            },
            wc: {
                testId: m.WC,
                title: "msg_legal_what_changed",
                url: ""
            }
        },
        f = "".concat(m.TOS, ",").concat(m.PP, ",").concat(m.CFPP),
        h = {
            SCEA: "".concat(f, ",").concat(m.SPLA),
            SCEE: "".concat(f, ",").concat(m.SUT)
        },
        v = function(e) {
            return (h[e] || f).split(",")
        },
        _ = function(e) {
            return (0, o.default)("85dbc9318dade64707412e9c1f435e4324ebe17f/assets/docSpecs/".concat(e, ".json")).then((function(e) {
                return e.ok && e.json() || (0, s.resolve)()
            })).then((function(e) {
                return e
            })).catch((function(e) {
                return (0, a.isAbortError)(e), (0, s.resolve)()
            }))
        },
        b = n.default.extend({
            localizationService: (0, n.inject)("localization"),
            urlTable: null,
            getDocSpecUrl: function(e) {
                var t = this,
                    n = e.docId,
                    i = e.country,
                    r = e.language,
                    a = e.displayLanguage,
                    o = this._hasUrlTable() ? (0, s.resolve)() : this._getUrlTable(),
                    l = a || this.localizationService.translateUnifiedToCSI(r)
                return o.then((function() {
                    return t.urlTable[n] && t.urlTable[n][i] && t.urlTable[n][i][l] || ""
                }))
            },
            getDocList: function(e) {
                var t = e.region
                return this._getDocList(u(u({}, e), {}, {
                    docIds: v(t)
                }))
            },
            getWhatChanged: function(e) {
                return this._getDocList(u(u({}, e), {}, {
                    docIds: [m.WC]
                })).then((function(e) {
                    return e[0]
                }))
            },
            getPrivacyPolicy: function(e) {
                return this._getDocList(u(u({}, e), {}, {
                    docIds: [m.PP, m.CFPP]
                })).then((function(e) {
                    return e[0]
                }))
            },
            getTermsOfService: function(e) {
                return this._getDocList(u(u({}, e), {}, {
                    docIds: [m.TOS]
                })).then((function(e) {
                    return e[0]
                }))
            },
            _getDocList: function(e) {
                var t = this,
                    n = e.isSubAccount,
                    i = e.docIds
                return (this._hasUrlTable() ? (0, s.resolve)() : this._getUrlTable()).then((function() {
                    return (0, s.all)(i.filter((function(e) {
                        return g[e] && e !== (n ? m.PP : m.CFPP)
                    })).map((function(n) {
                        return t.getDocSpecUrl(u(u({}, e), {}, {
                            docId: n
                        })).then((function(e) {
                            var t = (0, r.copy)(g[n], !0)
                            return t.url = e, t
                        }))
                    })))
                }))
            },
            _getUrlTable: function() {
                var e = this,
                    t = Object.values(m)
                return (0, s.all)(t.map(_)).then((function(t) {
                    var n = l(t, 6),
                        i = n[0],
                        r = n[1],
                        a = n[2],
                        o = n[3],
                        s = n[4],
                        c = n[5]
                    e.urlTable = {
                        cfpp: i,
                        pp: r,
                        spla: a,
                        sut: o,
                        tos: s,
                        wc: c
                    }
                }))
            },
            _hasUrlTable: function() {
                return !(0, i.isNone)(this.urlTable) && !Object.entries(this.urlTable).find((function(e) {
                    var t = l(e, 2),
                        n = (t[0], t[1])
                    return (0, i.isNone)(n)
                }))
            }
        })
    e.default = b
})), define("kekka/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/loading", ["exports", "@ember/debug", "@ember/service", "rsvp", "@ember/object", "@ember/runloop"], (function(e, t, n, i, r, a) {
    var o, s

    function l() {
        o.disableInteraction()
    }

    function c() {
        o.enableInteraction()
    }

    function d() {
        s && ((0, a.cancel)(s), s = null)
    }

    function u() {
        d()
        var e = document.getElementById("loading")
        e.style.visibility = "hidden", s = (0, a.later)((function() {
            e.style.display = "none"
        }), 800)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var p = !0,
        m = null,
        g = !1,
        f = [],
        h = r.default.extend({
            init: function() {
                this._super.apply(this, arguments), this._loadingKeys = []
            },
            waitForLoad: function() {
                if (!this._promise) {
                    var e = this
                    this._promise = {}, this._promise.promise = new i.Promise((function(t, n) {
                        e._promise.resolve = t, e._promise.reject = n, f.push(e._promise), (0, a.next)(e, e._observer)
                    }))
                }
                return this._promise.promise
            },
            observeUpdateing: function() {
                m = this
            },
            setUnknownProperty: function(e, t) {
                if (!0 === t) this._loadingKeys.indexOf(e) < 0 && (m !== this || g || this._loadingKeys.length || (function() {
                    d()
                    var e = document.getElementById("loading")
                    e.style.visibility = "visible", e.style.display = ""
                }(), l()), this._loadingKeys.push(e))
                else {
                    var n = this._loadingKeys.indexOf(e)
                    n >= 0 && (this._loadingKeys.splice(n, 1), m !== this || this._loadingKeys.length || (u(), c())), (0, a.once)(this, this._observer)
                }
            },
            _observer: function() {
                this._promise && !this._loadingKeys.length && (f.splice(f.indexOf(this._promise), 1), this._promise.error ? this._promise.reject(this._promise.error) : this._promise.resolve(), delete this._promise)
            }
        }),
        v = n.default.extend({
            transiting: !1,
            blockingInteraction: !1,
            router: (0, n.inject)("router"),
            initialize: function(e) {
                var t = this
                o = e, this.router.on("routeDidChange", (function(e) {
                    !e.isAborted && t._routeDidChange(e)
                }))
            },
            _routeDidChange: function() {
                this.endTransition(), p && (p = !1, u())
            },
            actions: {
                startLoading: function(e, t) {
                    e.set(t, !0)
                },
                endLoading: function(e, t) {
                    e.set(t, !1)
                }
            },
            beginTransition: function(e, t) {
                var n = !0
                t && ((n = {})[t] = !0), this.set("transiting", n), g = !0, e && (this.set("blockInteraction", !0), l())
            },
            abortTransition: function() {
                this.endTransition()
            },
            endTransition: function() {
                this.blockInteraction && (c(), this.set("blockInteraction", !1)), g = !1, this.set("transiting", !1)
            },
            createLoadingMonitor: function() {
                return h.create()
            },
            handleError: function(e) {
                if (f.length) return f.forEach((function(t) {
                    t.error = (t.error || []).concat(e)
                })), !0
                this.transiting && this.abortTransition()
            }
        })
    e.default = v
})), define("kekka/services/localization", ["exports", "hokkai/services/localization"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/modal", ["exports", "rsvp", "@ember/debug", "@ember/object/evented", "@ember/service"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend(i.default, {
        isOpened: !1,
        model: null,
        enableTransitionOnCloseModal: null,
        keepModalOnTransition: !1,
        _outletRoute: null,
        init: function() {
            this._super.apply(this, arguments), this.set("_modalStack", []), this.set("_map", {})
        },
        bindOutletRoute: function(e) {
            return this.set("_outletRoute", e), this
        },
        registerModal: function(e, t, n) {
            var i = n && n.controller,
                r = n && n.notCloseOnError,
                a = n && n.unSendAnalyticTransitEvent,
                o = this._map
            return o[e] = {
                template: t,
                controller: i,
                notCloseOnError: r,
                unSendAnalyticTransitEvent: a
            }, this
        },
        openModal: function(e, t, n) {
            var i = this._map[e],
                r = n && n.enableTransitionOnCloseModal,
                a = n && n.keepModalOnTransition,
                o = n && n.shouldForeground
            return this.openModalRaw(i.template, t, {
                controller: n && n.controller || i.controller,
                notCloseOnError: i.notCloseOnError,
                enableTransitionOnCloseModal: r,
                keepModalOnTransition: a,
                unSendAnalyticTransitEvent: i.unSendAnalyticTransitEvent,
                shouldForeground: o
            })
        },
        openModalRaw: function(e, n, i) {
            var r, a = i && i.controller,
                o = i && i.notCloseOnError,
                s = i && i.enableTransitionOnCloseModal,
                l = i && i.keepModalOnTransition,
                c = i && i.shouldForeground,
                d = i && i.unSendAnalyticTransitEvent,
                u = this._outletRoute,
                p = this._modalStack
            if (p.length)
                for (var m = 0, g = p.length; m < g; ++m)
                    if ((r = p[m]).controller === a && r.template === e) return r.promise.instance
            if (c) try {
                this.noticeService.off("error", this, this._onError)
            } catch (f) {}
            return p.length && !c || (this.set("model", n || null), this.set("enableTransitionOnCloseModal", s), this.set("keepModalOnTransition", l), o || this.noticeService.on("error", this, this._onError), u.render(e, {
                into: u.routeName,
                outlet: "modal",
                controller: a || u.controller
            }), this.set("isOpened", !0), this.trigger("didOpen", !!n.iframeSrcURL || l), d || this.trigger("analyticTransitEvent", "".concat(u.routeName, "_").concat(e))), (r = {
                controller: a,
                template: e,
                model: n || null,
                promise: {},
                enableTransitionOnCloseModal: s,
                keepModalOnTransition: l,
                notCloseOnError: o
            }).promise.instance = new t.Promise((function(e) {
                r.promise.resolve = e
            })), c ? p.unshiftObject(r) : p.pushObject(r), r.promise.instance
        },
        closeModal: function(e, t) {
            if (e || !this.keepModalOnTransition) {
                var n, i = this,
                    r = this._outletRoute,
                    a = this._modalStack;
                (n = a.shift()) && n.promise.resolve({
                    status: e,
                    data: t,
                    closeModal: function() {
                        r.disconnectOutlet({
                            outlet: "modal",
                            parentView: r.routeName
                        })
                        try {
                            i.get("noticeService").off("error", i, i._onError)
                        } catch (d) {}
                        if (a.length) {
                            var e = a[0],
                                t = e.model,
                                n = e.enableTransitionOnCloseModal,
                                o = e.keepModalOnTransition,
                                s = e.notCloseOnError,
                                l = e.template,
                                c = e.controller
                            i.set("model", t), i.set("enableTransitionOnCloseModal", n), i.set("keepModalOnTransition", o), s || i.get("noticeService").on("error", i, i._onError), r.render(l, {
                                into: r.routeName,
                                outlet: "modal",
                                controller: c || r.controller
                            }), i.trigger("didOpen", !!t.iframeSrcURL || o)
                        } else i.set("isOpened", !1), i.set("model", null), i.set("enableTransitionOnCloseModal", null), i.set("keepModalOnTransition", !1)
                    }
                })
            }
        },
        closeAllModal: function() {
            for (var e, t = this._modalStack; t.length > 1;)(e = t.pop()).promise.resolve(e.model)
            this.closeModal()
        },
        _onError: function(e) {
            this.closeModal("error", e)
        },
        unregisterModal: function(e) {
            var t = this._map
            return delete t[e], this
        },
        unbindOutletRoute: function(e) {
            return this.set("_outletRoute", null), this
        },
        focusToModal: function() {
            var e = document.body.querySelectorAll('#modalarea [tabindex]:not([tabindex="-1"])')
            return !!e.length && (e[0].focus(), !0)
        }
    })
    e.default = a
})), define("kekka/services/nds", ["exports", "jquery", "@ember/service", "uuidv4", "kekka/config/environment"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = n.default.extend({
        ndsLibraryURL: r.default.APP.ndsLibraryURL,
        _ndsSessionId: null,
        getNdsSessionId: function() {
            return this._ndsSessionId || this.set("_ndsSessionId", (0, i.default)()), this._ndsSessionId
        },
        getWidgetModel: function() {
            var e = (0, t.default)('input[name="nds-pmd"]')[0]
            return {
                widgetData: e ? e.value : null,
                ndsSessionId: e ? this.getNdsSessionId() : null
            }
        },
        setConfig: function(e, t) {
            var n = window.ndsapi
            n.setSessionId(this.getNdsSessionId()), n.setPlacement(e), n.setPlacementPage(t)
        },
        initNds: function(e, t) {
            var n = this,
                i = function(e, t, n, i, r, a, o, s) {
                    (s = e.ndsapi || (e.ndsapi = {})).config = {
                        q: [],
                        ready: function(e) {
                            this.q.push(e)
                        }
                    }, a = t.createElement(n), o = t.getElementsByTagName(n)[0], a.src = i, o.parentNode.insertBefore(a, o), a.onload = function() {
                        s.load(i)
                    }
                }
            i(window, document, "script", this.ndsLibraryURL), window.ndsapi.config.ready((function() {
                n.startNds(e, t)
            }))
        },
        startNds: function(e, t) {
            var n = window.ndsapi
            n && n.clear && n.bindNewFields ? (this.setConfig(e, t), n.clear(), n.bindNewFields()) : this.initNds(e, t)
        },
        stopNds: function() {
            var e = window.ndsapi
            e && e.stop && e.stop()
        }
    })
    e.default = a
})), define("kekka/services/notice", ["exports", "ember-copy", "@ember/error", "@ember/object/evented", "@ember/service", "@ember/debug", "@ember/object"], (function(e, t, n, i, r, a, o) {
    function s(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return
                    if ("string" == typeof e) return l(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    "Object" === n && e.constructor && (n = e.constructor.name)
                    if ("Map" === n || "Set" === n) return Array.from(e)
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n)
                var i = 0,
                    r = function() {}
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next()
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = {
            UNDEFINED_ERROR: {
                id: "UNDEFINED_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            CONFIGURATION_ERROR: {
                id: "CONFIGURATION_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            NOSUCH_ROUTE_ERROR: {
                id: "NOSUCH_ROUTE_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "NO_ROUTE",
                vfid: "2",
                fatal: !0
            },
            SESSION_EXPIRED: {
                id: "SESSION_EXPIRED",
                title: "msg_error",
                message: "msg_error_session_signout",
                type: "SESS_EXP",
                vfid: "3",
                fatal: !0
            },
            NETWORK_ERROR: {
                id: "NETWORK_ERROR",
                title: "msg_error",
                message: "msg_sf_error_server_transaction_failure_purchase_info",
                type: "SERVER",
                vfid: "6",
                fatal: !1
            },
            DNS_ERROR: {
                id: "DNS_ERROR",
                title: "msg_error",
                message: "msg_error_connect_server_dns",
                type: "SERVER",
                vfid: "5",
                fatal: !1
            },
            INTERNAL_SERVER_ERROR: {
                id: "INTERNAL_SERVER_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "SERVER",
                vfid: "2",
                fatal: !0
            },
            BAD_GATEWAY: {
                id: "BAD_GATEWAY",
                title: "msg_error",
                message: "msg_error",
                type: "SERVER",
                vfid: "2",
                fatal: !0
            },
            UNDER_MAINTENANCE: {
                id: "UNDER_MAINTENANCE",
                title: "msg_error",
                message: "msg_error_service_maintenance",
                type: "MAINTE",
                vfid: "1",
                fatal: !0
            },
            UNEXPECTED_SERVER_ERROR: {
                id: "UNEXPECTED_SERVER_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            UNEXPECTED_JS_ERROR: {
                id: "UNEXPECTED_JS_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            SERVER_CONNECTION_TIMEOUT: {
                id: "SERVER_CONNECTION_TIMEOUT",
                title: "msg_error",
                message: "msg_error_server_connect_timeout",
                type: "TIMEOUT",
                vfid: "4",
                fatal: !1
            },
            SERVER_CONNECTION_SHORT_TIMEOUT: {
                id: "SERVER_CONNECTION_SHORT_TIMEOUT",
                title: "msg_error",
                message: "msg_error_server_connect_timeout",
                type: "TIMEOUT",
                vfid: "4",
                fatal: !1
            },
            RATE_LIMITED: {
                id: "RATE_LIMITED",
                title: "msg_error",
                message: "msg_error_too_many_access_attempts",
                type: "RATE_LIMITED",
                vfid: "7",
                fatal: !1
            },
            INPUT_CREATION_INVALID_PASSWORD: {
                id: "INPUT_CREATION_INVALID_PASSWORD",
                title: "msg_error",
                message: "msg_error_invalid_password_check_pls_psn",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_INVALID_POSTALCODE: {
                id: "INPUT_CREATION_INVALID_POSTALCODE",
                title: "msg_error",
                message: "msg_sf_regcam_postal_error",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_INVALID_ADDRESSES_POSTALCODE: {
                id: "INPUT_CREATION_INVALID_ADDRESSES_POSTALCODE",
                title: "msg_error",
                message: "msg_sf_regcam_postal_error",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_POSTALCODE_MISMATCH_ADDRESS: {
                id: "INPUT_CREATION_POSTALCODE_MISMATCH_ADDRESS",
                title: "msg_error",
                message: "msg_error_postal_code_mismatch",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_INVALID_CC_INFO: {
                id: "INPUT_CREATION_INVALID_CC_INFO",
                title: "msg_error",
                message: "msg_error_creditcard_invalid_check_pls_psn",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_EXPIRED_CC_INFO: {
                id: "INPUT_CREATION_EXPIRED_CC_INFO",
                title: "msg_error",
                message: "msg_error_credit_card_expired_use_other_psn",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_MAX_CC_EXCEEDED: {
                id: "INPUT_CREATION_MAX_CC_EXCEEDED",
                title: "msg_error",
                message: "msg_error_cannot_register_creditcard_max_account_psn",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_INVALID_PHONE_NUMBER: {
                id: "INPUT_CREATION_INVALID_PHONE_NUMBER",
                title: "msg_error",
                message: "msg_error_phone_number_invalid_length",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_INVALID_CPF_NUMBER: {
                id: "INPUT_CREATION_INVALID_CPF_NUMBER",
                title: "msg_error",
                message: "msg_error_cpf_number_invalid_length",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            INPUT_CREATION_DOB_GROUP0: {
                id: "INPUT_CREATION_DOB_GROUP0",
                title: "msg_error",
                message: "msg_error_create_subaccount_group0_family",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            ONLINEID_ALREADY_IN_USE: {
                id: "ONLINEID_ALREADY_IN_USE",
                title: "msg_error",
                message: "msg_online_id_error_not_available",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            LOGINID_ALREADY_IN_USE: {
                id: "LOGINID_ALREADY_IN_USE",
                title: "msg_error",
                message: "msg_error_signup_email_already_associated",
                type: "INPUT",
                vfid: "0",
                fatal: !1
            },
            NOT_IMPLEMENTED: {
                id: "NOT_IMPLEMENTED",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            I18N_GET_ERROR: {
                id: "I18N_GET_ERROR",
                title: "msg_error",
                message: "msg_error",
                type: "INTERNAL",
                vfid: "2",
                fatal: !0
            },
            DMS_DEACTIVATE_ALL_BLACKOUT: {
                id: "DMS_DEACTIVATE_ALL_BLACKOUT",
                title: "msg_error",
                message: "msg_deactivate_all_6_months",
                type: "SERVER",
                vfid: "0",
                fatal: !1
            }
        },
        d = o.default.extend({
            historyService: null,
            notifyStringId: null,
            notifyStringArg: [],
            updateTrigger: 0,
            clearOneTransition: function() {
                var e = this
                this.historyService.oneChange((function() {
                    e._clearNotice()
                }))
            },
            _setNotice: function(e) {
                this.set("notifyStringId", e), this.incrementProperty("updateTrigger")
            },
            _setNoticeArg: function(e) {
                this.set("notifyStringArg", e), this.incrementProperty("updateTrigger")
            },
            _clearNotice: function() {
                this.notifyStringId && (this.set("notifyStringId", null), this.incrementProperty("updateTrigger"))
            }
        }),
        u = d.extend({
            type: "LocalErrorNotice",
            noticeService: null,
            setError: function(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                if (this._setNotice(e), this.set("errorCode", t), i) {
                    var r = g(n),
                        a = f(r),
                        o = h(a, r)
                    this.noticeService.trigger("error", o, r ? r.sessionInfo : null)
                } else if (t) {
                    var l = h({
                        code: t
                    }, n || {})
                    this.noticeService.trigger("error", l, n ? n.sessionInfo : null)
                } else if (n && n.errorCodes && n.errorCodes.length) {
                    var c, d = s(n.errorCodes)
                    try {
                        for (d.s(); !(c = d.n()).done;) {
                            var u = c.value,
                                p = h({
                                    code: u
                                }, n)
                            this.noticeService.trigger("error", p, n.sessionInfo)
                        }
                    } catch (m) {
                        d.e(m)
                    } finally {
                        d.f()
                    }
                }
                return this
            },
            setErrorArg: function(e) {
                return this._setNoticeArg(e), this
            },
            clearError: function() {
                this._clearNotice(), this.set("errorCode", null)
            }
        }),
        p = d.extend({
            type: "LocalSuccessNotice",
            setSuccess: function(e) {
                return this._setNotice(e), this
            },
            setSuccessArg: function(e) {
                return this._setNoticeArg(e), this
            },
            clearSuccess: function() {
                this._clearNotice()
            }
        }),
        m = d.extend({
            type: "LocalInfoNotice",
            setInfo: function(e) {
                return this._setNotice(e), this
            },
            setInfoArg: function(e) {
                return this._setNoticeArg(e), this
            },
            clearInfo: function() {
                this._clearNotice()
            }
        }),
        g = function(e) {
            if (n.default, e instanceof Array) {
                var t = e.map((function(e) {
                        return e instanceof Object ? e : {
                            errorId: e
                        }
                    })),
                    i = t.filter((function(e) {
                        var t = c[e.errorId]
                        return !!t && t.fatal
                    }))
                return i.length || ((i = t.filter((function(e) {
                    return e.forceFatal
                }))).length || (i = t.filter((function(e) {
                    return !!c[e.errorId]
                }))).length) ? i[0] : t[0]
            }
            return e instanceof Object ? e : {
                errorId: e
            }
        },
        f = function(e) {
            var n = (0, t.copy)(c[e.errorId] || c.UNDEFINED_ERROR, !0)
            return e.errorDetails && e.errorDetails.bmpReference && (n.type = "".concat(n.type, "_bmp"), "CONFIGURATION_ERROR" === e.errorId && (n.fatal = !1)), e.action && (n.action = e.action), n
        },
        h = function(e, n) {
            var i = (0, t.copy)(e, !0)
            try {
                var r = {
                    webApiId: n.webApiId,
                    webApiCodes: n.webApiCodes
                }
                i.message = JSON.stringify(r).replace(/\"/g, "")
            } catch (a) {}
            return n.hasOwnProperty("forceFatal") && (i.forceFatal = n.forceFatal), n.stack && (i.stack = n.stack), i
        },
        v = function(e) {
            var t, n = (e instanceof Array ? e : e instanceof Object ? [e] : [{
                errorId: e
            }]).some((function(e) {
                return !(!(t = c[e.errorId]) || e.ignoreSetError) && (t.fatal || e.forceFatal)
            }))
            return {
                message: t && t.message,
                fatal: n
            }
        },
        _ = r.default.extend(i.default, {
            appParamsService: (0, r.inject)("app-params"),
            latestErrorModel: null,
            notifyStringId: null,
            updateTrigger: 0,
            init: function() {
                this._super()
            },
            setGlobalError: function(e, t, n) {
                var i = g(e)
                if (!i.ignoreSetError) {
                    var r = f(i)
                    this.set("latestErrorModel", r), this.appParamsService.enableSchemeErrorCode && this.set("latestErrorObject", i)
                    var a = h(r, i)
                    return this.trigger("error", a, i ? i.sessionInfo : null), r.fatal || i.forceFatal ? n && n.call(t, r) : (this.set("notifyStringId", r.message), this.incrementProperty("updateTrigger")), r
                }
            },
            clearGlobalError: function() {
                this.notifyStringId && (this.set("notifyStringId", null), this.incrementProperty("updateTrigger"))
            },
            clearGlobalErrorOneTransition: function() {
                var e = this
                this.historyService.oneChange((function() {
                    e.clearGlobalError()
                }))
            },
            createLocalErrorNotice: function() {
                return u.create({
                    noticeService: this,
                    historyService: this.historyService
                })
            },
            createLocalSuccessNotice: function() {
                return p.create({
                    historyService: this.historyService
                })
            },
            createLocalInfoNotice: function() {
                return m.create({
                    historyService: this.historyService
                })
            },
            sendErrorEvent: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.error,
                    n = e.errorModel,
                    i = e.severity,
                    r = t && g(t) || {},
                    a = n || f(r),
                    o = h(a, r)
                this.trigger("error", o, r.sessionInfo, i)
            }
        }).reopenClass({
            isFatal: function(e) {
                return v(e).fatal
            },
            getMessage: function(e) {
                return v(e).message
            },
            getTargetError: function(e) {
                return v(e)
            }
        })
    e.default = _
})), define("kekka/services/online-resource", ["exports", "hokkai/services/online-resource"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/phones", ["exports", "hokkai/services/phones"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/recommend-2sv-adapter", ["exports", "@ember/polyfills", "rsvp", "@ember/service", "hokkai/services/authentication-mode-v2", "hokkai/services/backup-code", "kekka/utils/validation-factory"], (function(e, t, n, i, r, a, o) {
    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return l(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return
            if ("string" == typeof e) return l(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            "Object" === n && e.constructor && (n = e.constructor.name)
            if ("Map" === n || "Set" === n) return Array.from(e)
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = i.default.extend({
        aboutAdapterService: (0, i.inject)("about-adapter"),
        authenticationModeService: (0, i.inject)("authentication-mode-v2"),
        phonesService: (0, i.inject)("phones"),
        backupCodeService: (0, i.inject)("backup-code"),
        initialize: function() {
            this.initialized || (this.aboutAdapterService.setup([this.authenticationModeService, this.phonesService, this.backupCodeService]), this.authenticationModeService.initialize(), this.phonesService.initialize(), this.backupCodeService.initialize(), this.initialized = !0)
        },
        updateSession: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = n ? e : (0, t.assign)({}, this.authenticationModeService.session, e)
            this.authenticationModeService.updateSession(i), this.phonesService.updateSession(i), this.backupCodeService.setSession(i)
        },
        _renewAccessToken: function() {
            var e = this,
                t = [].concat(s(this.phonesService.defaultScopeGroups), s(this.phonesService.extendedScopeGroups), s(this.authenticationModeService.getScopeGroups(r.SCOPES_METHOD.RECOMMEND_2SV)), s(this.backupCodeService.getScopeGroups(a.SCOPES_METHOD.RECOMMEND_2SV))).uniq()
            return this.authenticationModeService.getAccessToken(t).then((function(t) {
                e.updateSession({
                    accessToken: t
                })
            }))
        },
        _isRetryable: function(e) {
            var t = ["AUTH_TOKEN_NOT_FOUND", "AUTH_TOKEN_EXPIRED", "AUTH_TOKEN_INVALID"]
            return [].concat(e).every((function(e) {
                return e && e.errorCodes && e.errorCodes.every((function(e) {
                    return t.indexOf(e) > -1
                }))
            }))
        },
        getSigninId: function() {
            return this.authenticationModeService.session.signinId
        },
        getAuthenticationMode: function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return this._renewAccessToken().then((function(i) {
                return e.authenticationModeService.getAuthenticationMode().catch((function(i) {
                    return !t && e._isRetryable(i) ? e.getAuthenticationMode(!0) : (0, n.reject)(i)
                }))
            }))
        },
        getPhoneList: function() {
            return this.phonesService.getPhoneList()
        },
        addPhone: function(e, t, n) {
            return this.phonesService.addPhoneExec({
                phone: e,
                countryCode: t,
                qualifier: n,
                isMain: !0
            }).then((function(e) {
                return {
                    phoneId: /^\/api\/v1\/accounts\/me\/phones\/([0-9a-fA-F\-\%]{1,50})$/.exec(e.uri)[1],
                    ticketUuid: e.ticketId
                }
            }))
        },
        requestVerificationCode: function(e) {
            return this.phonesService.requestVerificationCode(e)
        },
        verifyPhone: function(e, t, n, i) {
            var r, a = this,
                o = e.ticketUuid,
                s = e.id
            return this.phonesService.verifyPhoneExec(o, s, t).then((function(t) {
                if (r = t, n && !e.isMain) return a.phonesService.setToMainPhoneExec(s)
            })).then((function() {
                if (i) return a.authenticationModeService.activate2sv(r)
            }))
        },
        createPhoneNumberValidation: function() {
            return o.default.create(this.phonesService.getValidator(), "phoneNumber")
        },
        createAuthenticatorSecret: function(e) {
            return this.authenticationModeService.createAuthenticatorSecret()
        },
        getAccessTokenWithAuthenticatorCode: function(e) {
            return this.authenticationModeService.getAccessTokenWithAuthenticatorCode(e)
        },
        activateAuthenticator2sv: function(e) {
            return this.authenticationModeService.activateAuthenticator2sv(e)
        },
        get2svBackupCodeList: function() {
            return this.backupCodeService.getBackupCodes()
        },
        setBackupCodeServiceWithPWGatedScopes: function() {
            return this.set("backupCodeService.withPWGatedScopes", !0)
        }
    })
    e.default = c
})), define("kekka/services/revalidate-password", ["exports", "hokkai/services/revalidate-password"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/scope", ["exports", "@ember/service"], (function(e, t) {
    var n, i, r, a, o, s
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = t.default.extend({
        initialize: function(e, t) {
            i = e, n = t,
                function() {
                    var e
                    r = [], o = [], s = []
                    for (var t = 0; t < i.length; ++t) {
                        for (var l = n.lookupService("service:".concat(i[t])), c = l.defaultScopeGroups || [], d = l.extendedScopeGroups || [], u = 0; u < c.length; ++u) o.indexOf(c[u]) < 0 && o.push(c[u]), s.indexOf(c[u]) < 0 && s.push(c[u])
                        for (var p = 0; p < d.length; ++p) s.indexOf(d[p]) < 0 && s.push(d[p]) !e && l._getScope && (e = l._getScope)
                    }
                    e && (r = e(o), a = e(s))
                }()
        },
        getScope: function() {
            return r
        },
        getFullScope: function() {
            return a
        },
        getScopeGroups: function() {
            return o
        },
        getFullScopeGroups: function() {
            return s
        }
    })
    e.default = l
})), define("kekka/services/session", ["exports", "@ember/runloop", "rsvp", "@ember/debug", "@ember/object", "@ember/service", "kekka/utils/error-utils", "kekka/mixins/signin-utility", "kekka/services/notice"], (function(e, t, n, i, r, a, o, s, l) {
    function c(e) {
        return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, c(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var d = a.default.extend(s.default, {
        modalService: (0, a.inject)("modal"),
        scopeService: (0, a.inject)("scope"),
        appParamsService: (0, a.inject)("app-params"),
        arkoseLabsService: (0, a.inject)("arkose-labs"),
        loadingService: (0, a.inject)("loading"),
        passwordGatingCheckService: (0, a.inject)("gating-checker"),
        oneTimeSession: {},
        getOneTimeSessionFor: function(e) {
            return this.oneTimeSession[e]
        },
        removeOneTimeSessionFor: function(e) {
            delete this.oneTimeSession[e]
        },
        initializeGatingChecker: function() {
            this.passwordGatingCheckService.setupScopes(this.scopeService.getScopeGroups(), this.scopeService.getFullScopeGroups()), this.passwordGatingCheckService.initialize()
            var e = this.appParamsService,
                t = e.get("isApplicationForPdrCa"),
                n = e.get("isGated")
            t && n && (this.set("passwordGatingCheckService.withPWGatedScopes", n), this.set("withPWGatedScopes", n))
        },
        lastGatingDateTime: -1,
        msecAuthenticationAge: (0, r.computed)((function() {
            return this.get("passwordGatingCheckService.config.dev_password_gating_error_after_msec") || 9e5
        })),
        isPasswordGatingRequired: function() {
            if (this.lastGatingDateTime < 0) {
                var e = this
                return this.passwordGatingCheckService._isPasswordGatingRequired().then((function() {
                    e.set("lastGatingDateTime", Date.now())
                }))
            }
            return Date.now() > this.lastGatingDateTime + this.msecAuthenticationAge ? this.passwordGatingCheckService._isPasswordGatingRequired() : (0, n.resolve)()
        },
        updateSSOWithPasswordGating: function(e) {
            var t = this
            return this.passwordGatingCheckService.updateSSOWithPasswordGating(e).then((function() {
                return (0, n.resolve)()
            })).catch((function(e) {
                return e.npsso && t.set("lastGatingDateTime", Date.now()), (0, n.reject)(e)
            }))
        },
        setSession: function(e) {
            this.passwordGatingCheckService.setSession(e), this.set("session", this.passwordGatingCheckService.session)
        },
        _getCurrentLoading: function() {
            var e = this.get("loadingService.blockInteraction"),
                t = this.get("loadingService.transiting")
            if (!0 === t) return {
                blockInteraction: e
            }
            if (t && "object" === c(t)) {
                for (var n in t)
                    if (t.hasOwnProperty(n) && !0 === t[n]) return {
                        blockInteraction: e,
                        name: n
                    }
                return null
            }
        },
        _getCurrentModal: function() {
            return {
                enableTransitionOnCloseModal: this.get("modalService.enableTransitionOnCloseModal")
            }
        },
        doPasswordGating: function(e, t) {
            var i = this._getCurrentLoading(),
                r = this._getCurrentModal(),
                a = this
            this.loadingService.abortTransition()
            var o = e.errorCodes
            if (o && o.length > 0)
                for (var s = 0, c = o.length; s < c; ++s) switch (o[s]) {
                    case "AUTH_PASSWORD_GATING_REQUIRED":
                    case "AUTH_TOKEN_REQUIRED_WITH_SCOPES":
                    case "AUTH_INVALID_PASSWORD":
                    case "AUTH_TOKEN_NOT_FOUND":
                    case "AUTH_TOKEN_EXPIRED":
                    case "AUTH_TOKEN_INVALID":
                        break
                    default:
                        return (0, n.reject)(e)
                } else if (l.default.isFatal(e)) return (0, n.reject)(e)
            return this.modalService.openModal("passwordGating", {
                signinId: this.session.signinId,
                error: e,
                signoutAction: this.signoutAction
            }, {
                enableTransitionOnCloseModal: t,
                shouldForeground: !0
            }).then((function(e) {
                switch (i && a.get("loadingService").beginTransition(i.blockInteraction, i.name), e.closeModal(), r && a.get("modalService").set("enableTransitionOnCloseModal", r.enableTransitionOnCloseModal), e.status) {
                    case "success":
                        return e.data
                    case "cancel":
                        return
                    case "error":
                        return (0, n.reject)(e.error)
                }
            }))
        },
        resetCaptcha: function() {
            this.passwordGatingCheckService.setProperties({
                captchaProvider: null,
                captchaProviderKey: null,
                captchaResponse: null
            })
        },
        doRecaptcha: function() {
            return this.passwordGatingCheckService.captchaResponse ? (0, n.resolve)({
                captchaProvider: this.passwordGatingCheckService.captchaProvider,
                captchaProviderKey: this.passwordGatingCheckService.captchaProviderKey,
                captchaResponse: this.passwordGatingCheckService.captchaResponse
            }) : this.arkoseLabsService.doCaptcha(this.get("session.country"))
        },
        doImplicitFlow: function(e, t, n, i, r) {
            var a = this.scopeService
            return this._doImplicitFlow(e, t || (i ? a.getScope() : a.getFullScope()), !r, n, i)
        },
        _doImplicitFlow: function(e, t, i, r, a) {
            var o = {
                    uri: "".concat(window.Pdr.baseURL, "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/implicit_complete.html"),
                    excludeRedirectPdrUriQueryParameter: !0
                },
                s = this.getCamAuthRedirectParams(t, o)
            s.params.prompt = "none"
            var l = this.appParamsService.createUri("VERSA_OAUTH_AUTHORIZE_FOR_IMPLICIT_FLOW", s.params, s.options),
                c = this._getCurrentLoading(),
                d = this._getCurrentModal(),
                u = this
            return this.loadingService.abortTransition(), this.modalService.openModal("implicitFlow", {
                iframeSrcURL: l,
                transparentBackground: !r,
                disableLoadingIcon: !r
            }, {
                shouldForeground: !0
            }).then((function(t) {
                switch (c && u.get("loadingService").beginTransition(c.blockInteraction, c.name), t.closeModal(), d && u.get("modalService").set("enableTransitionOnCloseModal", d.enableTransitionOnCloseModal), t.status) {
                    case "success":
                        var r = {
                            accessToken: t.data.access_token,
                            idToken: t.data.id_token
                        }
                        u.get("passwordGatingCheckService.config.dev_use_npsso_in_implicit_response") && t.data.npsso ? r.npsso = t.data.npsso : e && (r.npsso = e)
                        var o = []
                        if (i) {
                            u.set("passwordGatingCheckService.withPWGatedScopes", !a), u.set("withPWGatedScopes", !a), u.setSession(r)
                            var s = u.get("_observers")
                            if (s)
                                for (var l in s)
                                    if (s.hasOwnProperty(l)) {
                                        var p = s[l]
                                        o.push(p._setUp())
                                    }
                        }
                        return (0, n.all)(o).then((function() {
                            return (0, n.resolve)(r)
                        })).catch((function(e) {
                            return (0, n.reject)(e)
                        }))
                    case "fail":
                    case "error":
                        return (0, n.reject)(t.data || null)
                    case "timeout":
                        return (0, n.reject)(t.status)
                }
            }))
        },
        _handlePasswordGatingErrors: function(e, t, i, r, a) {
            if (!e) return (0, n.reject)(e)
            for (var o, s = e instanceof Array ? e : [e], l = !1, c = this.get("appParamsService.isApplicationForPdrCa"), d = 0; d < s.length; d++) {
                var u = s[d]
                if (u.errorCodes && u.errorCodes.length > 0 && u.errorCodes.indexOf("AUTH_PASSWORD_GATING_REQUIRED") >= 0) return c ? (0, n.reject)(e) : this._passwordGating(u, t, i, null, r, a)
                if (u.errorCodes && u.errorCodes.length > 0 && u.errorCodes.indexOf("AUTH_TOKEN_REQUIRED_WITH_CAPTCHA") >= 0) return this._renewAccessTokenWithCaptcha(u, t, i, null, r, a)
                if (u.errorCodes && u.errorCodes.length > 0 && u.errorCodes.indexOf("AUTH_TOKEN_REQUIRED_WITH_SCOPES") >= 0) return c ? (0, n.reject)(e) : this._renewAccessToken(t, u.npsso, u, i, r, !1, a)
                u.errorCodes && u.errorCodes.length > 0 && (u.errorCodes.indexOf("AUTH_TOKEN_NOT_FOUND") >= 0 || u.errorCodes.indexOf("AUTH_TOKEN_EXPIRED") >= 0 || u.errorCodes.indexOf("AUTH_TOKEN_INVALID") >= 0) && (l = !0, o = u)
            }
            return !c && l ? this._renewAccessToken(t, o.npsso, o, i, r, !this.withPWGatedScopes, a) : (0, n.reject)(e)
        },
        forcePasswordGating: function(e, t, n, i) {
            return this._handlePasswordGatingErrors(this.passwordGatingCheckService.createHokkaiError("E_UNAUTHORIZED", ["AUTH_PASSWORD_GATING_REQUIRED"]), e, t, n, i)
        },
        _passwordGating: function(e, i, r, a, o, s) {
            var l = this
            return this.doPasswordGating(a || e, r).then((function(c) {
                return c && c.password ? l.updateSSOWithPasswordGating(c.password).then((function(e) {
                    return e
                })).catch((function(c) {
                    return new n.Promise((function(n) {
                        (0, t.next)((function() {
                            c.errorCodes && c.errorCodes.indexOf("AUTH_TOKEN_REQUIRED_WITH_SCOPES") >= 0 ? e && e.errorCodes && e.errorCodes.indexOf("AUTH_TOKEN_REQUIRED_WITH_CAPTCHA") >= 0 ? n(l._renewAccessTokenWithCaptcha(e, i, r, a, o, s)) : n(l._renewAccessToken(i, c.npsso, e, r, o, !1, s)) : n(l._passwordGating(e, i, r, c, o, s))
                        }))
                    }))
                })) : (0, n.reject)()
            }))
        },
        _renewAccessTokenWithCaptcha: function(e, t, i, r, a, o) {
            var s = this
            return this.doRecaptcha().then((function(r) {
                if (!r) return (0, n.reject)()
                s.passwordGatingCheckService.setProperties({
                    captchaProvider: r.captchaProvider,
                    captchaProviderKey: r.captchaProviderKey,
                    captchaResponse: r.captchaResponse
                })
                var l = t && t.hasOwnProperty("captchaUseCase") ? t.captchaUseCase : "CHANGE_SIGNIN_ID"
                return s.passwordGatingCheckService.getAccessTokenWithCaptcha(s.session.signinId, l).then((function(e) {
                    return t && t.hasOwnProperty("oneTimeSessionKey") && (s.oneTimeSession[t.oneTimeSessionKey] = {
                        accessToken: e
                    }), t && t.hasOwnProperty("exec") && t.exec.retryContext && t.exec.retryFunction ? t.exec.retryFunction.apply(t.exec.retryContext, t.exec.retryArguments) : e
                })).catch((function(r) {
                    return r.errorCodes && r.errorCodes.length > 0 && r.errorCodes.indexOf("AUTH_PASSWORD_GATING_REQUIRED") >= 0 ? s.get("appParamsService.isApplicationForPdrCa") ? (0, n.reject)(r) : s._passwordGating(e, t, i, r, a, o) : r.errorCodes && r.errorCodes.length > 0 && r.errorCodes.indexOf("AUTH_CAPTCHA_INVALID_RESPONSE") >= 0 ? (s.resetCaptcha(), s._renewAccessTokenWithCaptcha(e, t, i, r, a, o)) : (0, n.reject)(r)
                }))
            }))
        },
        _renewAccessToken: function(e, t, i, r, a, s, l) {
            var c = this
            return this.doImplicitFlow(t, l, a, s, e && e.oneTimeSessionKey).then((function(t) {
                return e && e.hasOwnProperty("oneTimeSessionKey") && (c.get("oneTimeSession")[e.oneTimeSessionKey] = t), e && e.hasOwnProperty("exec") && e.exec.retryContext && e.exec.retryFunction ? e.exec.retryFunction.apply(e.exec.retryContext, e.exec.retryArguments) : t
            }), (function(t) {
                return t && t.error_code && ("4116" === t.error_code || 4116 === t.error_code) ? c._passwordGating(i, e, r, null, a, l) : "timeout" === t ? (0, n.reject)(c.get("passwordGatingCheckService").createHokkaiError("E_TIMEOUT")) : (0, n.reject)((0, o.default)(i, {
                    code: "E_UNAUTHORIZED"
                }))
            }))
        },
        _observers: {},
        addSessionUpdateObserver: function(e) {
            this._observers[e.modelName] = e
        },
        removeSessionUpdateObserver: function(e) {
            delete this._observers[e.modelName]
        }
    })
    e.default = d
})), define("kekka/services/setup-service-config", ["exports", "hokkai/services/setup-service-config"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/sign-in", ["exports", "hokkai/services/sign-in"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/sign-out", ["exports", "hokkai/services/sign-out"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/tag-manager", ["exports", "rsvp", "@ember/debug", "@ember/service", "hokkai/mixins/hokkai-telemetry-setting-manager", "hokkai/utils/object-utils", "fetch", "kekka/utils/url-utils"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = {},
        c = i.default.extend(r.default, {
            appParamsService: (0, i.inject)("app-params"),
            historyService: (0, i.inject)("history"),
            setupServiceConfig: (0, i.inject)("setup-service-config"),
            _tagManager: null,
            _loadStatus: "",
            init: function() {
                this._super.apply(this, arguments)
                var e = this.get("appParamsService.deviceProfile"),
                    n = "pc" === e ? "desktop" : e,
                    i = new TagManager.TagManagerService(document.referrer, n)
                window.Promise = t.Promise, window.fetch = "function" == typeof window.fetch ? window.fetch : o.fetch, window.Response = window.Response || o.Response, window.Request = window.Request || o.Request, window.Headers = window.Headers || o.Headers, this.historyService.on("didChange", (function() {
                    var e = "".concat(location.protocol, "//").concat(location.host).concat(location.pathname),
                        t = location.search ? "?".concat((0, s.default)(location.search.substring(1), ["login_hint", "signin_id"])) : ""
                    i.firePageTurnTag(e + t, {})
                })), this._tagManager = i
            },
            initialize: function() {
                var e = this._tagManager
                if (e) {
                    var t = this.appParamsService,
                        n = t.get("initialLocale")
                    l.country = n.country, l.language = n.language.split("-")[0], l.accountId = t.get("visitorId"), this._createIFrame(), e.setUserData(l).catch((function(e) {}))
                }
            },
            updateTelemetryInformation: function(e) {
                var t = this._tagManager
                if (t) {
                    if (!(0, a.isEmpty)(e.locale) && "string" == typeof e.locale) {
                        var n = e.locale.split("-")
                        l.country = n[n.length - 1], l.language = n[0], l.isSignedIn = !0
                    }
                    if (!(0, a.isEmpty)(e.language) && "string" == typeof e.language) {
                        var i = e.language.split("-")
                        l.country = i[i.length - 1], l.language = i[0], l.isSignedIn = !0
                    }(0, a.isEmpty)(e.visitorId) || "string" != typeof e.visitorId || (l.accountId = e.visitorId, l.isSignedIn = !0), t.setUserData(l).catch((function(e) {}))
                }
            },
            setOnlineId: function(e) {},
            fireDummyPageEvent: function() {
                var e = this._tagManager
                if (e) {
                    var t = "".concat(location.protocol, "//").concat(location.host).concat(location.pathname),
                        n = "/" === t[t.length - 1] ? "" : "/",
                        i = location.search ? "?".concat((0, s.default)(location.search.substring(1), ["login_hint", "signin_id"])) : ""
                    e.firePageTurnTag("".concat(t).concat(n, "_dummy/succeed").concat(i), {})
                }
            },
            _createIFrame: function() {
                var e = this,
                    t = this._tagManager,
                    n = this.get("setupServiceConfig.config.signal_tag_url")
                t && n && "loaded" !== this._loadStatus && t.createIFrame("".concat(window.Pdr.baseURL, "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/tagManager.html")).then((function() {
                    t.loadTags([{
                        src: n,
                        id: "SIGNAL"
                    }]).then((function() {
                        e._loadStatus = "loaded"
                    })).catch((function(e) {}))
                })).catch((function(e) {}))
            }
        })
    e.default = c
})), define("kekka/services/telemetry-captcha", ["exports", "hokkai/services/telemetry-captcha"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/telemetry-phone-manipulation", ["exports", "hokkai/services/telemetry-phone-manipulation"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/telemetry-two-sv", ["exports", "hokkai/services/telemetry-two-sv"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/telemetry", ["exports", "hokkai/services/telemetry"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/tosua-status", ["exports", "hokkai/services/tosua-status"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/services/unified-footer", ["exports", "@ember/object", "@ember/debug", "rsvp", "@ember/service", "kekka/config/environment"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = "unified-footer-script"

    function s() {
        return window.SNEIUnifiedFooter && window.SNEIUnifiedFooter.footerJSON && window.SNEIUnifiedFooter.footerJSON.legal && window.SNEIUnifiedFooter.footerJSON.legal.list
    }

    function l() {
        return window.SNEIUnifiedFooter && window.SNEIUnifiedFooter.footerJSON && window.SNEIUnifiedFooter.footerJSON.about && window.SNEIUnifiedFooter.footerJSON.about.list
    }

    function c() {
        return s() ? (window.SNEIUnifiedFooter.footerJSON.legal.list.some((function(t) {
            var n = t.id,
                i = t.link
            if ("footerLink_PSN" === n && (e = i), "footerLink_PrivacyPolicy" === n) return e = i, !0
        })), e) : ""
        var e
    }

    function d() {
        return l() ? (window.SNEIUnifiedFooter.footerJSON.about.list.forEach((function(t) {
            ["footerLink_Support", "footerLink_CustomerSupport", "footerLink_CAPrivacyPolicy"].indexOf(t.id) > -1 && (e = t.link), "footerLink_PSN" === t.id && (e || (e = t.link))
        })), e) : ""
        var e
    }

    function u() {
        if (!s() || !l()) return ""
        var e = {}
        return window.SNEIUnifiedFooter.footerJSON.legal.list.forEach((function(t) {
            switch (t.id) {
                case "footerLink_TermsOfService":
                    e.terms = {
                        mainText: "msg_terms_of_service",
                        href: t.link
                    }
                    break
                case "footerLink_PrivacyPolicy":
                    e.privacy = {
                        mainText: "msg_privacy_policy_psn",
                        href: t.link
                    }
                    break
                case "footerLink_PSN":
                    e.terms || (e.terms = {
                        mainText: "msg_terms_of_service",
                        href: t.link
                    }), e.privacy || (e.privacy = {
                        mainText: "msg_privacy_policy_psn",
                        href: t.link
                    })
            }
        })), window.SNEIUnifiedFooter.footerJSON.about.list.forEach((function(t) {
            ["footerLink_Support", "footerLink_CustomerSupport", "footerLink_CAPrivacyPolicy"].indexOf(t.id) > -1 && (e.help = {
                mainText: "msg_help",
                href: t.link
            }), "footerLink_PSN" === t.id && (e.help || (e.help = {
                mainText: "msg_help",
                href: t.link
            }))
        })), Object.keys(e).map((function(t) {
            return e[t].id = t, e[t]
        }))
    }
    var p = r.default.extend({
        localizationService: (0, r.inject)("localization"),
        _country: null,
        _language: null,
        init: function() {
            this._super.apply(this, arguments), this.set("_modelQueue", []), this.set("_endOfPromiseQueue", (0, i.resolve)())
        },
        willDestroy: function() {
            this.deleteUnifiedfooter()
        },
        deleteUnifiedfooter: function() {
            this.set("_country", null), this.set("_language", null), this.set("_modelQueue", []), this.set("_endOfPromiseQueue", (0, i.resolve)()), delete window.unifiedFooterLoaded, delete window.unifiedFooterRender, delete window.SNEIUnifiedFooter
            var e = document.getElementById(o)
            e && e.parentNode.removeChild(e)
        },
        getPrivacyPolicyLink: function(e, t) {
            return this._loadScript(e, t, c)
        },
        getHelpLink: function(e, t) {
            return this._loadScript(e, t, d)
        },
        getDataList: function(e, t) {
            return this._loadScript(e, t, u)
        },
        _legalLocale: function(e, t) {
            var n = this.localizationService.translateUnifiedToNpLocale(t)
            return "".concat(n.language, "-").concat(n.country.toLowerCase())
        },
        _loadScript: function(e, t, n) {
            var r = (0, i.defer)()
            return this._queueUp({
                deferred: r,
                country: e,
                language: t,
                execOnScriptLoaded: n
            }), r.promise
        },
        _queueUp: function(e) {
            this.set("_modelQueue", this._modelQueue.concat(e))
        },
        _onChangeLoadScriptDeferred: (0, t.observer)("_modelQueue", (function() {
            var e = this
            if (0 !== this._modelQueue.length) {
                var t = this._modelQueue.shift()
                t.wait = this._endOfPromiseQueue, this.set("_endOfPromiseQueue", t.deferred.promise), t.wait.then((function() {
                    e._loadUnifiedFooterScript(t.deferred, t.country, t.language, t.execOnScriptLoaded)
                }))
            }
        })),
        _loadUnifiedFooterScript: function(e, t, n, i) {
            var r = this
            if (this._country !== t || this._language !== n) {
                window.unifiedFooterLoaded = function() {
                    r._unifiedFooterLoaded(e, t, n, i)
                }, window.unifiedFooterRender = this._unifiedFooterRender.bind(this)
                var s = 1e4 * Math.floor((new Date).getTime() / 1e4),
                    l = document.getElementById(o)
                l && l.parentNode.removeChild(l)
                var c = document.createElement("script")
                c.setAttribute("id", o), c.setAttribute("src", "".concat(a.default.APP.unifiedFooterBaseURL, "/unifiedfooter/js/unifiedfooter.").concat(this._legalLocale(t, n), ".js?_=").concat(s)), c.setAttribute("defer", "true"), c.setAttribute("data-callback", "unifiedFooterLoaded"), c.setAttribute("data-onRender", "unifiedFooterRender"), c.setAttribute("data-useDefaultCss", "0"), c.setAttribute("data-displayCookieWarning", "0"), c.onerror = function() {
                    r._unifiedFooterLoadError(e)
                }, document.head.appendChild(c)
            } else this._unifiedFooterLoaded(e, t, n, i)
        },
        _unifiedFooterLoaded: function(e, t, n, i) {
            this.set("_country", t), this.set("_language", n), e.resolve(i())
        },
        _unifiedFooterRender: function() {},
        _unifiedFooterLoadError: function(e) {
            e.resolve()
        }
    })
    e.default = p
})), define("kekka/services/update-signin-id-adapter", ["exports", "@ember/service", "kekka/mixins/password-gated-model", "kekka/utils/validation-factory"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend(n.default, {
        sessionService: (0, t.inject)("session"),
        updateSigninIdService: (0, t.inject)("update-signin-id"),
        modelName: "updateSigninIdService",
        _setupServiceNames: ["updateSigninIdService"],
        changedSigninid: null,
        initialize: function() {
            return this._setUp()
        },
        createValidation: function(e) {
            return i.default.create(this.updateSigninIdService.getValidator(), e)
        },
        updateUserSigninId: function(e, t, n, i) {
            var r, a = this,
                o = arguments,
                s = "updateUserSigninId",
                l = this.sessionService,
                c = l.getOneTimeSessionFor(s)
            return c && (r = c.accessToken, l.removeOneTimeSessionFor(s)), this.set("changedSigninid", null), this.updateSigninIdService.updateUserSigninIdWithAccessToken(r, e).then((function() {
                a.set("changedSigninid", e)
            })).catch((function(e) {
                return "SESSION_EXPIRED" === e.errorId && (e.errorCodes = ["AUTH_TOKEN_REQUIRED_WITH_CAPTCHA"]), a._handlePasswordGatingErrors(e, {
                    exec: {
                        retryContext: a,
                        retryFunction: a.updateUserSigninId.bind(a),
                        retryArguments: o
                    },
                    captchaUseCase: i,
                    oneTimeSessionKey: s
                }, t, n)
            }))
        }
    })
    e.default = r
})), define("kekka/services/update-signin-id", ["exports", "hokkai/services/update-signin-id"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
}))
define("kekka/signin-rba/code/controller", ["exports", "@ember/controller", "@ember/object/computed", "@ember/service"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        appParamsService: (0, i.inject)("app-params"),
        loadingService: (0, i.inject)("loading"),
        signInService: (0, i.inject)("sign-in"),
        tagManagerService: (0, i.inject)("tag-manager"),
        telemetryService: (0, i.inject)("telemetry"),
        isVerifyButtonDisabled: (0, n.empty)("model.code.value"),
        actions: {
            resendCode: function() {
                this.send("resendRbaCode", this.model, this, "resendCode")
            },
            troubleshoot: function() {
                this.send("clearNotice")
                var e = this.get("model.transitionModel"),
                    t = e.modalModel,
                    n = e.transitionTo
                t ? this.send("contactCs", t) : n && this.transitionToRoute(n)
            },
            verify: function() {
                var e = this
                this.send("clearNotice")
                var t = this.model,
                    n = this.get("appParamsService.appParams"),
                    i = this.loadingService
                i.beginTransition(!0, "verify"), this.signInService.rbaCodeSignIn(t.ticketUuid, t.code.value.trim(), n).then((function() {
                    e.telemetryService.sendRbaVerifyCodeEvent(), e.tagManagerService.fireDummyPageEvent(), e.send("authRedirect")
                })).catch((function(t) {
                    e.send("signinError", t, e)
                })).finally((function() {
                    i.endTransition()
                }))
            }
        }
    })
    e.default = r
})), define("kekka/signin-rba/code/route", ["exports", "@ember/debug", "@ember/object", "@ember/polyfills", "@ember/routing/route", "@ember/runloop", "@ember/service", "rsvp"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = {
            EMAIL: {
                successMessage: "msg_verification_code_sent_again_email",
                transitionModel: {
                    modalModel: {
                        descriptionCaption: "msg_contact_cs",
                        primaryCaption: "msg_go_to_customer_support",
                        noSecondary: !0
                    }
                }
            },
            SMS: {
                successMessage: "msg_verification_code_sent_again",
                transitionModel: {
                    transitionTo: "signinRba.troubleshooter"
                }
            }
        },
        c = r.default.extend({
            modalService: (0, o.inject)("modal"),
            signInService: (0, o.inject)("sign-in"),
            model: function() {
                var e = this.modelFor("signinRba")
                return (0, i.assign)({
                    verificationMethod: "RBA_".concat(e.challengeMethod)
                }, e, l[e.challengeMethod] || {})
            },
            afterModel: function(e) {
                this.noticeService.clearGlobalErrorOneTransition()
            },
            setupController: function() {
                this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_sign_in"), (0, n.set)(this.modelFor("signinRba"), "headerTitle", null)
            },
            actions: {
                contactCs: function(e) {
                    var t = this
                    this.modalService.openModal("confirm", e).then((function(e) {
                        "confirmed" === e.status && t.send("gotoCs"), e.closeModal()
                    }))
                },
                localError: function(e) {
                    switch (e) {
                        case "AUTH_GCIM_ONLY_ACCOUNT":
                            this.controllerFor("signin").get("localErrorNotice").setError("msg_error_signin_email_uid", e)
                            break
                        case "AUTH_SUSPENDED_ACCOUNT":
                            this.controllerFor("signin").get("localErrorNotice").setError("msg_temp_susp_account", e)
                            break
                        case "AUTH_BANNED_ACCOUNT":
                            this.controllerFor("signin").get("localErrorNotice").setError("msg_temp_ban_account", e)
                            break
                        case "AUTH_INVALID_VERIFICATION_CODE":
                            return void this.controller.get("model.localErrorNotice").setError("msg_error_verification_code_incorrect", e)
                    }
                    this.send("gotoSignin")
                }
            }
        })
    var d = c
    e.default = d
})), define("kekka/signin-rba/code/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "t/4rhPMI",
        block: '[[[6,[39,0],null,[["classNames","localErrorNotice","localSuccessNotice","country","language","locale"],["rows row-flex flex-fitting",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]],[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames","localErrorNotice","localSuccessNotice"],["item-notice",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,4],null,[["verificationMethod","model","resendCode","troubleshoot","verify"],[[33,1,["verificationMethod"]],[33,1,["code"]],[28,[37,5],[[30,0],"resendCode"],null],[28,[37,5],[[30,0],"troubleshoot"],null],[28,[37,5],[[30,0],"verify"],null]]]]],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","pdr-2sv-method","action"]]',
        moduleName: "kekka/signin-rba/code/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin-rba/expired/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            ok: function() {
                this.send("gotoSignin")
            }
        }
    })
    e.default = n
})), define("kekka/signin-rba/expired/route", ["exports", "@ember/object", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        model: function() {
            return this.modelFor("signinRba")
        },
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_sign_in"), (0, t.set)(this.modelFor("signinRba"), "headerTitle", null), this.send("resetRouteHistory")
        }
    })
    e.default = i
})), define("kekka/signin-rba/expired/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "8m3Ym9O4",
        block: '[[[6,[39,0],null,[["classNames","localErrorNotice","localSuccessNotice","country","language","locale"],["rows row-flex flex-fitting",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]],[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames","localErrorNotice","localSuccessNotice"],["item-notice",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"page-items same signin"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],["msg_signed_out"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,6],null,[["caption","action","class"],["msg_ok_psn",[28,[37,7],[[30,0],"ok"],null],"fitting-width"]]]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-loc","pdr-primary-button","action"]]',
        moduleName: "kekka/signin-rba/expired/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin-rba/route", ["exports", "@ember/debug", "@ember/object", "@ember/routing/route", "@ember/service", "jquery", "kekka/config/environment", "kekka/mixins/auth-redirect-params-for-cancel", "kekka/mixins/setup-language"], (function(e, t, n, i, r, a, o, s, l) {
    function c(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return
                    if ("string" == typeof e) return d(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    "Object" === n && e.constructor && (n = e.constructor.name)
                    if ("Map" === n || "Set" === n) return Array.from(e)
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n)
                var i = 0,
                    r = function() {}
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next()
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var u = i.default.extend(l.default, s.default, {
        appParamsService: (0, r.inject)("app-params"),
        checkPersonalizationSettingsAdapterService: (0, r.inject)("check-personalization-settings-adapter"),
        cobrandingDataService: (0, r.inject)("cobranding-data"),
        evStatusService: (0, r.inject)("ev-status"),
        loadingService: (0, r.inject)("loading"),
        signInService: (0, r.inject)("sign-in"),
        tagManagerService: (0, r.inject)("tag-manager"),
        telemetryService: (0, r.inject)("telemetry"),
        beforeModel: function() {
            this.signInService.initialize(), this.evStatusService.initialize(), this.checkPersonalizationSettingsAdapterService.initialize()
        },
        model: function(e, t) {
            var n = this
            return this.setInitialLanguage().then((function() {
                var e = n.appParamsService,
                    i = n.noticeService,
                    r = e.initialLocale,
                    a = r.actualValue,
                    o = r.country,
                    s = r.isDefault,
                    l = r.language
                s && t.trigger(!1, "convertedDefaultLanguage", a, l)
                var c = e.get("storage.mandatoryRbaCodeVerificationPageInfo"),
                    d = c.challengeMethod,
                    u = c.signinId,
                    p = c.ticketUuid
                return {
                    code: {
                        value: null
                    },
                    country: o,
                    language: l,
                    localErrorNotice: i.createLocalErrorNotice(),
                    localSuccessNotice: i.createLocalSuccessNotice(),
                    challengeMethod: d,
                    signinId: u,
                    ticketUuid: p
                }
            }))
        },
        afterModel: function() {
            this.tagManagerService.initialize()
        },
        activate: function() {
            this._super(), this.modalService.bindOutletRoute(this)
        },
        deactivate: function() {
            this._super(), this.modalService.unbindOutletRoute(this)
        },
        actions: {
            authRedirect: function() {
                var e = this
                this.get("appParamsService.isPsnUser") ? this.checkPersonalizationSettingsAdapterService.needsForceUpgrade(this.appParamsService.appParams).then((function(t) {
                    if (t) return e.loadingService.endTransition(), void e.send("prRedirect", e, "PR_ACCOUNT_UPGRADE", {
                        entry: "upgrade_account",
                        pr_referer: "signin"
                    })
                    e.send("_authRedirect")
                })).catch((function(t) {
                    e.send("error", t)
                })) : this.send("_authRedirect")
            },
            _authRedirect: function() {
                this.send("closeOnSucceed", {
                    redirectUri: "VERSA_OAUTH_AUTHORIZE",
                    options: this._redirectQueryOption()
                })
            },
            prRedirect: function(e, t, n) {
                e.send("redirectTo", {
                    redirectUri: t,
                    params: n,
                    options: this._redirectQueryOption()
                })
            },
            signinError: function() {
                this._transitionToErrorHandler.apply(this, arguments)
            },
            localError: function() {},
            clearNotice: function() {
                var e = this.controller.get("model")
                return e.localErrorNotice.clearError(), e.localSuccessNotice.clearSuccess(), !0
            },
            gotoCs: function() {
                this.send("openNewWindow", this.get("appParamsService.isPsnUser") ? "CS_HELP_PAGE" : this.get("cobrandingDataService.dataList.troubleSignInUrl"))
            },
            gotoSignin: function() {
                this.get("appParamsService.isAvailableCobrandingData") ? this.replaceWith("signin.ca.signinId") : this.replaceWith("signin.entrance")
            },
            resendRbaCode: function(e, t, n) {
                var i, r = this,
                    a = this.signInService,
                    o = this.get("appParamsService.appParams")
                switch (e.challengeMethod) {
                    case "EMAIL":
                        i = a.resendRbaCodeByEmail(e.ticketUuid, null, o)
                        break
                    case "SMS":
                        i = a.resendRbaCodeBySMS(e.ticketUuid, null, o)
                        break
                    default:
                        return void this.send("error", "UNDEFINED_ERROR")
                }
                this.send("clearNotice")
                var s = this.loadingService
                s.beginTransition(!0, n), i.then((function() {
                    switch (n) {
                        case "resendCode":
                            r.telemetryService.sendRbaResendCodeEvent()
                            break
                        case "sendEmail":
                            r.telemetryService.sendRbaSendEmailEvent()
                    }
                    e.localSuccessNotice.setSuccess(e.successMessage).clearOneTransition()
                })).catch((function(e) {
                    r.send("signinError", e, t)
                })).finally((function() {
                    s.endTransition()
                }))
            }
        },
        _redirectQueryOption: function() {
            var e = ["entry", "error", "error_code", "error_description", "missing_mandatory_attributes"]
            return "always" === this.get("appParamsService.prompt") && e.push("prompt"), {
                handledQueryParams: {
                    excludeKeys: e
                },
                unhandledQueryParams: !0
            }
        },
        _transitionToErrorHandler: function(e, t) {
            var n = e.errorCodes
            if (n && n.length) {
                var i, r = c(n)
                try {
                    for (r.s(); !(i = r.n()).done;) {
                        switch (i.value) {
                            case "AUTH_INVALID_LOGIN":
                            case "MALFORMED_PARAMETER":
                                return
                            case "AUTH_SUSPENDED_ACCOUNT":
                                return void t.send("localError", "AUTH_SUSPENDED_ACCOUNT")
                            case "AUTH_BANNED_ACCOUNT":
                                return void t.send("localError", "AUTH_BANNED_ACCOUNT")
                            case "AUTH_EMAIL_VERIFICATION_REQUIRED":
                                return this._processTransitionToEmailVerification(t)
                            case "AUTH_PASSWORD_REQUIRED":
                                return void this.replaceWith("signin.forcePasswordReset")
                            case "AUTH_TOSUA_REACCEPT_REQUIRED":
                                return void this.replaceWith("signin.tosuaReacceptance.index")
                            case "AUTH_CAPTCHA_REQUIRED":
                                return void this.send("authRedirect")
                            case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB":
                            case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB_SUB":
                                return void this.replaceWith("signin.tosuaReacceptance.masterHelpNeeded")
                            case "AUTH_MISSING_POSTALCODE":
                            case "AUTH_MISSING_COMMUNICATIONNAME:FIRST":
                            case "AUTH_MISSING_COMMUNICATIONNAME:LAST":
                            case "AUTH_MISSING_ONLINEID":
                            case "AUTH_MISSING_CITY":
                                var a = this._addToppingsForUpgrade(n)
                                return a.entry = "upgrade_account", a.pr_referer = "signin", void t.send("prRedirect", t, "PR_ACCOUNT_UPGRADE", a)
                            case "AUTH_INVALID_VERIFICATION_CODE":
                                return void t.send("localError", "AUTH_INVALID_VERIFICATION_CODE")
                            case "AUTH_GCIM_ONLY_ACCOUNT":
                                return void t.send("localError", "AUTH_GCIM_ONLY_ACCOUNT")
                            case "AUTH_TICKET_EXPIRED":
                                return void this.replaceWith("signinRba.expired")
                            case "AUTH_CONSENT_REQUIRED":
                                return void t.send("prRedirect", t, "PR_ACCOUNT_LINKING", {
                                    entry: "account_linking"
                                })
                        }
                    }
                } catch (l) {
                    r.e(l)
                } finally {
                    r.f()
                }
            }
            if (e.errorDetails && e.errorDetails.response) {
                var o = e.errorDetails.response
                if (o.error_code) {
                    var s = {
                        error_code: o.error_code
                    }
                    o.error_description && (s.error_description = o.error_description), o.error && (s.error = o.error), e.action = {
                        addParams: s
                    }
                }
            }
            t.send("error", e)
        },
        _addToppingsForUpgrade: function(e) {
            var t = {
                AUTH_MISSING_POSTALCODE: "tp_psn",
                "AUTH_MISSING_COMMUNICATIONNAME:FIRST": "tp_psn",
                "AUTH_MISSING_COMMUNICATIONNAME:LAST": "tp_psn",
                AUTH_MISSING_ONLINEID: "tp_psn",
                AUTH_MISSING_CITY: "tp_psn"
            }
            return e.reduce((function(e, n) {
                var i = t[n]
                return i && !e[i] && (e[i] = !0), e
            }), {})
        },
        _processTransitionToEmailVerification: function(e) {
            var t = this,
                n = this.evStatusService
            return n.getUserInformation().then((function() {
                t.set("appParamsService.storage.mandatoryEmailVerificationPageInfo", n.get("session")), t.transitionTo("email.verifyV2.authenticated")
            })).catch((function(t) {
                e.send("error", t)
            }))
        }
    })
    var p = u
    e.default = p
})), define("kekka/signin-rba/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "ey9Lc2dX",
        block: '[[[6,[39,0],null,[["country","language","locale","hasBackground","basePanelClass","keepPrevious"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]],[33,3,["isPcTablet"]],"l-base-panel-small",true]],[["default"],[[[[1,"    "],[1,[28,[35,4],null,[["autoBackControl","isCancelWithDialog","enabledCancel"],[true,false,[33,3,["enabledCancel"]]]]]],[1,"\\n"],[41,[33,1,["headerTitle"]],[[[6,[39,6],null,[["isSmall"],[true]],[["default"],[[[[1,"            "],[1,[28,[35,7],[[33,1,["headerTitle"]]],null]],[1,"\\n"]],[]]]]]],[]],null],[6,[39,8],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[1,"        "],[46,[28,[37,10],null,null],null,null,null],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-layout","model","localizationService","appParamsService","kekka-sony-header","if","kekka-title-header","pdr-loc","pdr-main-content","component","-outlet"]]',
        moduleName: "kekka/signin-rba/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin-rba/troubleshooter/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            contactUs: function() {
                this.send("gotoCs")
            },
            sendEmail: function() {
                this.send("resendRbaCode", this.model, this, "sendEmail")
            }
        }
    })
    e.default = n
})), define("kekka/signin-rba/troubleshooter/route", ["exports", "@ember/object", "@ember/polyfills", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        model: function() {
            return (0, n.assign)({
                successMessage: "msg_verification_code_sent_again_email"
            }, this.modelFor("signinRba"))
        },
        afterModel: function(e) {
            e.challengeMethod = "EMAIL"
        },
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_troubleshoot_getting_code"), (0, t.set)(this.modelFor("signinRba"), "headerTitle", "msg_troubleshoot_getting_code")
        }
    })
    e.default = r
})), define("kekka/signin-rba/troubleshooter/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "g+2U2ixj",
        block: '[[[6,[39,0],null,[["classNames","localErrorNotice","localSuccessNotice","country","language","locale"],["rows row-flex flex-fitting",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]],[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]]]],[["default"],[[[[1,"    "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,3],null,[["classNames","localErrorNotice","localSuccessNotice"],["item-notice",[33,1,["localErrorNotice"]],[33,1,["localSuccessNotice"]]]]]],[1,"\\n        "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n        "],[10,0],[14,0,"page-items same signin"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],["msg_resend_code_email"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,4,["bidi"]]],[12],[10,1],[14,0,"inline-break-all"],[15,"dir",[33,4,["bidi"]]],[12],[1,[33,1,["signinId"]]],[13],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,6],null,[["caption","action","isLoading","class"],["msg_sf_regcam_ev_send_email",[28,[37,7],[[30,0],"sendEmail"],null],[33,8,["transiting","sendEmail"]],"fitting-width"]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                    "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                        "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,9],null,[["action"],[[28,[37,7],[[30,0],"contactUs"],null]]],[["default"],[[[[1,"                                "],[1,[28,[35,5],["msg_contact_us"],null]],[1,"\\n"]],[]]]]],[1,"                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n    "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[],false,["pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-loc","pdr-primary-button","action","loadingService","pdr-text-link"]]',
        moduleName: "kekka/signin-rba/troubleshooter/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/controller", ["exports", "@ember/object", "@ember/controller"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        isVisibleDescriptionAndLearn: (0, t.computed)("appParamsService.messageCode", (function() {
            return !/parent_note/.test(this.get("appParamsService.messageCode"))
        }))
    })
    e.default = i
})), define("kekka/signin/ca/force-password-reset/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_password_reset"), this.send("resetRouteHistory")
        },
        actions: {
            changePassword: function() {
                var e = this.controller.get("model.signin")
                this.send("openNewWindow", "CA_FORGOT_PASSWORD", {
                    unified_language: e.get("language"),
                    unified_country: e.get("country"),
                    origin_client_id: e.get("originClientId"),
                    PlatformPrivacyWs1: this.get("appParamsService.platformPrivacyWs1")
                }), this.replaceWith("signin.ca.signinId")
            },
            doThisLater: function() {
                this.replaceWith("signin.ca.signinId")
            }
        }
    })
    e.default = i
})), define("kekka/signin/ca/force-password-reset/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "VoWz4yju",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_password_reset"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","localInfoNotice","country","language","locale"],["rows fitting-parent",[33,4,["localInfoNotice"]],[33,4,["signin","country"]],[33,4,["signin","language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"rows page-items row-unshrink row-flex"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,"\\n                    "],[1,[28,[35,1],["msg_email_sent_account_lock_reset"],null]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,8],null,[["caption","action","isLoading","class","locale"],["msg_reset_pwd","changePassword",[33,9,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[1,"            "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,10],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                        "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-primary-button","loadingService","pdr-text-link"]]',
        moduleName: "kekka/signin/ca/force-password-reset/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/merge-conflict/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        cobrandingDataService: (0, n.inject)("cobranding-data"),
        model: function() {
            return this.modelFor("signin.ca")
        },
        setupController: function(e) {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_sign_in"), e.setProperties({
                learnMoreUrl: this.get("cobrandingDataService.dataList.learnMoreUrl")
            }), this.send("resetRouteHistory")
        },
        actions: {
            cancelAction: function() {
                if (!this.get("appParamsService.hasSupportScheme")) return !0
                this.send("openNewWindow", this.get("cobrandingDataService.dataList.serviceHomePageUrl")), this.send("authRedirect", !0, !0)
            }
        }
    })
    e.default = r
})), define("kekka/signin/ca/merge-conflict/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "lbwC+weX",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","localInfoNotice","country","language","locale"],["rows fitting-parent",[33,2,["localInfoNotice"]],[33,2,["signin","country"]],[33,2,["signin","language"]],[33,3,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,4],null,[["classNames","locale"],["item-notice",[33,3,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-small"],[15,"dir",[33,5,["bidi"]]],[12],[1,"\\n                        "],[1,[28,[35,6],["msg_error_non_merge_able_accounts_1",[33,2,["signin","signinId"]]],[["strong"],[true]]]],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                    "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                        "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,7],null,[["action","param"],["openNewWindow",[33,8]]],[["default"],[[[[1,"                                "],[1,[28,[35,9],["msg_psp_upsell_learn_more"],null]],[1,"\\n"]],[]]]]],[1,"                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                "],[1,[28,[35,10],null,[["locale","description","linkText","link"],[[33,3,["currentLocale"]],"msg_error_non_merge_able_accounts_2","msg_customer_support_label","CS_HELP_PAGE"]]]],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,11],null,[["class","caption","action"],["fitting-width","msg_ok_psn","cancelAction"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-loc-fmt","pdr-text-link","learnMoreUrl","pdr-loc","pdr-description-with-link","pdr-primary-button"]]',
        moduleName: "kekka/signin/ca/merge-conflict/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/redirect-confirmation/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = "msg_link_you_account",
        a = i.default.extend({
            cobrandingDataService: (0, n.inject)("cobranding-data"),
            setupController: function(e, t) {
                this._super.apply(this, arguments), e.set("headerTitle", r), this.controllerFor("application").set("pageNameId", r), t.set("learnMoreUrl", this.get("cobrandingDataService.dataList.learnMoreUrl")), this.send("resetRouteHistory")
            }
        })
    e.default = a
})), define("kekka/signin/ca/redirect-confirmation/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "ohviEJrh",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","localInfoNotice","country","language","locale"],["rows fitting-parent",[33,5,["localInfoNotice"]],[33,5,["signin","country"]],[33,5,["signin","language"]],[33,6,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,7],null,[["classNames","locale"],["item-notice",[33,6,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-small"],[15,"dir",[33,8,["bidi"]]],[12],[1,[28,[35,1],["msg_link_you_account_desc1"],null]],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                "],[1,[28,[35,9],null,[["description","linkText","link"],["msg_link_you_account_desc2","msg_psp_upsell_learn_more",[33,5,["learnMoreUrl"]]]]]],[1,"\\n                "],[10,0],[14,0,"separator-pageitems large"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-small"],[15,"dir",[33,8,["bidi"]]],[12],[1,[28,[35,1],["msg_link_you_account_desc4"],null]],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,10],null,[["class","caption","action"],["column-flex","msg_no","cancelAction"]]]],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems beside narrow"],[12],[13],[1,"\\n                    "],[1,[28,[35,11],null,[["class","caption","action"],["column-flex","msg_yes","openUlink"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-description-with-link","pdr-secondary-button","pdr-primary-button"]]',
        moduleName: "kekka/signin/ca/redirect-confirmation/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/revalidate-password/controller", ["exports", "kekka/signin/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/signin/ca/revalidate-password/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        noticeService: (0, n.inject)("notice"),
        revalidatePasswordService: (0, n.inject)("revalidate-password"),
        appParamsService: (0, n.inject)("app-params"),
        activate: function() {
            this.modelFor("signin").addObserver("password", this, this._isValidSignInObserver)
        },
        deactivate: function() {
            this.modelFor("signin").removeObserver("password", this, this._isValidSignInObserver)
        },
        model: function() {
            var e = this.modelFor("signin.ca")
            return e.set("signin.signinId", this.revalidatePasswordService.getSigninId()), e
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments), t.set("signin.password", null), t.set("signin.enabledCancel", !this.get("appParamsService.isVisibleSignOut")), this.controllerFor("application").set("pageNameId", "msg_sign_in")
        },
        resetController: function(e, t) {
            t && (this.controllerFor("signin").clearLocalNotice(), this.noticeService.clearGlobalError())
        },
        _isValidSignInObserver: function() {
            var e = this.modelFor("signin")
            e.set("isValid", !!e.get("signinId") && !!e.get("password"))
        },
        actions: {
            signout: function() {
                var e = this
                this.revalidatePasswordService.signout().then((function() {
                    e.send("authRedirect", !0, !0)
                })).catch((function(t) {
                    e.send("error", t)
                }))
            }
        }
    })
    e.default = r
})), define("kekka/signin/ca/revalidate-password/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "4UjT+Mrl",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[1,"    "],[1,[28,[35,1],null,[["model","locale","signoutAction","revalidateAction"],[[33,2],[33,3,["currentLocale"]],"signout",[28,[37,4],[[30,0],"revalidatePassword"],null]]]]],[1,"\\n"]],[]]]]]],[],false,["pdr-main-content","pdr-ca-revalidate-password","model","localizationService","action"]]',
        moduleName: "kekka/signin/ca/revalidate-password/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route", "@ember/object/computed", "@ember/object", "rsvp"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = a.default.extend({
            enabledUlink: (0, r.equal)("localErrorNotice.errorCode", "AUTH_GCIM_ONLY_ACCOUNT"),
            signinMsg: (0, a.computed)("localErrorNotice.updateTrigger", "localSuccessNotice.updateTrigger", (function() {
                var e = this.get("localErrorNotice.notifyStringId")
                if (e) return {
                    stringId: e,
                    isWarn: !0
                }
                var t = this.get("localSuccessNotice.notifyStringId")
                return t ? {
                    stringId: t,
                    isWarn: !1
                } : null
            }))
        }),
        l = i.default.extend({
            cobrandingDataService: (0, n.inject)("cobranding-data"),
            beforeModel: function() {
                var e = this
                this.modelFor("application").set("onUnhandledCloseFunc", (function() {
                    var t = e.cobrandingDataService
                    return t.get("hasServiceHomePageUrl") ? (e.send("redirectTo", {
                        redirectUri: t.get("dataList.serviceHomePageUrl")
                    }), (0, o.resolve)()) : (0, o.reject)()
                }))
            },
            model: function() {
                var e = this.controllerFor("signin")
                return s.create({
                    localErrorNotice: e.get("localErrorNotice"),
                    localInfoNotice: e.get("localInfoNotice"),
                    localSuccessNotice: e.get("localSuccessNotice"),
                    signin: this.modelFor("signin"),
                    isParentConsent: "parent_consent" === this.get("appParamsService.messageCode")
                })
            },
            afterModel: function(e) {
                var t = this.appParamsService,
                    n = t.appParams.clientId,
                    i = t.originClientId,
                    r = this.cobrandingDataService,
                    a = e.isParentConsent,
                    o = e.signin,
                    s = i || n
                return r.initialize(s, o.get("language")).then((function() {
                    r.get("hasServiceBackgroundImage") && o.set("backgroundImage", r.get("dataList.serviceBackgroundImage")), o.setProperties({
                        cancelAction: a ? "consentCancelAction" : "cancelAction",
                        enabledCancel: !0,
                        isCA: !0,
                        originClientId: s
                    })
                }))
            },
            actions: {
                troubleshoot: function() {
                    this.controllerFor("signin").clearLocalNotice(), this.transitionTo("signin.ca.troubleshooter.index")
                },
                openUlink: function() {
                    var e = this.appParamsService.createUri("VERSA_OAUTH_AUTHORIZE", null, {
                        unhandledQueryParams: !0,
                        handledQueryParams: {
                            excludeKeys: ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                        }
                    })
                    this.send("redirectTo", {
                        redirectUri: "ULINK_PAGE",
                        params: {
                            return_url: e
                        }
                    })
                },
                createAccount: function() {
                    var e = this.get("cobrandingDataService.dataList.createAccountUrl") || ""
                    this.get("appParamsService.isPsnUser") ? this.send("redirectToCreateAccount", e) : this.send("openNewWindow", e)
                },
                openLearnMore: function() {
                    this.send("openNewWindow", this.get("cobrandingDataService.dataList.learnMoreUrl") || "")
                },
                consentCancelAction: function() {
                    var e = this.get("appParamsService.redirectUri")
                    e ? this.send("redirectTo", {
                        redirectUri: e,
                        params: {
                            consent_canceled: !0
                        }
                    }) : this.send("error")
                },
                redirectSignOutUrl: function() {
                    var e = this.get("cobrandingDataService.dataList.signOutUrl")
                    e ? this.send("redirectTo", {
                        redirectUri: e
                    }) : this.send("error")
                }
            }
        })
    e.default = l
})), define("kekka/signin/ca/signin-id/controller", ["exports", "kekka/signin/ca/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/signin/ca/signin-id/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
            setupController: function(e, t) {
                this._super.apply(this, arguments), t.get("signin.loginHint") ? this.replaceWith("signin.ca.signinPassword") : (t.set("signin.password", null), this.controllerFor("application").set("pageNameId", "msg_sign_in"))
            },
            actions: {
                handleFormEvent: function() {
                    this.modelFor(this.routeName).get("signin.isDisabledNext") || this.get("loadingService.transiting") || (this.controllerFor("signin").clearLocalNotice(), this.noticeService.clearGlobalError(), this.transitionTo("signin.ca.signinPassword"))
                }
            }
        }),
        r = i
    e.default = r
})), define("kekka/signin/ca/signin-id/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "5V3tiJRf",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["model","uLinkAction","learnMoreLinkAction","troubleshooterLinkAction","createNewAccountButtonAction","locale","isVisibleDescriptionAndLearn"],[[33,2],"openUlink","openLearnMore","troubleshoot","createAccount",[33,3,["currentLocale"]],[33,4]]],[["default"],[[[[1,"        "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,5],[[30,0],"handleFormEvent"],[["on"],["submit"]]],[12],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,6],null,[["class","model","passwordHidden","signinIdPlaceholder","signinIdTitle"],["fitting-button",[33,2,["signin"]],true,[33,2,["signin","signinIdPlaceholder"]],[33,2,["signin","signinIdTitle"]]]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,7],null,[["caption","isLoading","isDisabled","class","type"],["msg_next",[33,8,["transiting"]],[33,2,["signin","isDisabledNext"]],"fitting-width","submit"]]]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[1,[28,[35,9],null,[["placement","placementPage"],["Login",1]]]],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-ca-body","model","localizationService","isVisibleDescriptionAndLearn","action","pdr-signin-form","pdr-primary-button","loadingService","pdr-nds-script"]]',
        moduleName: "kekka/signin/ca/signin-id/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/signin-password/controller", ["exports", "kekka/signin/ca/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/signin/ca/signin-password/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        arkoseLabsService: (0, n.inject)("arkose-labs"),
        historyService: (0, n.inject)("history"),
        noticeService: (0, n.inject)("notice"),
        setupServiceConfig: (0, n.inject)("setup-service-config"),
        signInService: (0, n.inject)("sign-in"),
        activate: function() {
            this.modelFor("signin").addObserver("password", this, this._isValidSignInObserver)
        },
        deactivate: function() {
            this.modelFor("signin").removeObserver("password", this, this._isValidSignInObserver)
        },
        model: function() {
            var e = {
                caModel: this.modelFor("signin.ca")
            }
            return e
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments)
            var n = this.historyService
            n.get("currentRouteStorage").signinId && t.caModel.set("signin.signinId", n.get("currentRouteStorage").signinId), n.get("currentRouteStorage").signinId = null, t.caModel.get("signin.signinId") ? (t.caModel.set("signin.password", null), this.controllerFor("application").set("pageNameId", "msg_sign_in")) : this.replaceWith("signin.ca.signinId")
        },
        resetController: function(e, t) {
            t && (this.controllerFor("signin").clearLocalNotice(), this.noticeService.clearGlobalError())
        },
        _isValidSignInObserver: function() {
            var e = this.modelFor("signin")
            e.set("isValid", !!e.get("signinId") && !!e.get("password"))
        },
        actions: {
            handleFormEvent: function() {
                var e = this,
                    t = this.modelFor(this.routeName)
                if (!t.caModel.get("signin.isDisabledSignIn") && !this.get("loadingService.transiting"))
                    if (this.get("appParamsService.loginHint") || (this.get("historyService.currentRouteStorage").signinId = t.caModel.get("signin.signinId")), t.caModel.get("signin.recaptchaEnabled") && t.caModel.signin.doCaptchaIfNeeded && !this.get("signInService.captchalessToken")) {
                        var n = this.modelFor("signin")
                        this.loadingService.beginTransition(!0), this.arkoseLabsService.doCaptcha(n.country).then((function(t) {
                            var i = t.captchaProvider,
                                r = t.captchaProviderKey,
                                a = t.captchaResponse
                            n.setProperties({
                                captchaProvider: i,
                                captchaProviderKey: r,
                                captchaResponse: a
                            }), n.get("isCaptchaAcceptable") ? e.send("doSignin") : n.set("isCaptchaAcceptable", !0)
                        })).catch((function(t) {
                            e.loadingService.abortTransition(), e.send("error", t)
                        }))
                    } else {
                        var i = this.modelFor("signin")
                        i.get("isCaptchaAcceptable") ? this.send("doSignin") : i.set("isCaptchaAcceptable", !0)
                    }
            }
        }
    })
    e.default = r
})), define("kekka/signin/ca/signin-password/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "M/MoOf+X",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["model","uLinkAction","learnMoreLinkAction","troubleshooterLinkAction","locale","isVisibleDescriptionAndLearn"],[[33,2,["caModel"]],"openUlink","openLearnMore","troubleshoot",[33,3,["currentLocale"]],[33,4]]],[["default"],[[[[41,[51,[33,2,["caModel","signinMsg"]]],[[[1,"            "],[10,0],[14,0,"separator-pageitems signin-id-text-top"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,6],[[30,0],"handleFormEvent"],[["on"],["submit"]]],[12],[1,"\\n            "],[10,0],[14,0,"wrapper-input-textfields"],[12],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,7],null,[["class","isError","model","passwordPlaceholder","passwordTitle","signinIdReadonlyInputHidden"],["fitting-button",[33,2,["caModel","signin","isError"]],[33,2,["caModel","signin"]],[33,2,["caModel","signin","passwordPlaceholder"]],[33,2,["caModel","signin","passwordTitle"]],true]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems minimum"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,8],null,[["caption","isLoading","isDisabled","class","type"],[[52,[33,2,["caModel","isParentConsent"]],"msg_sign_in_adult_account","msg_sign_in"],[33,10,["transiting"]],[33,2,["caModel","signin","isDisabledSignInButton"]],"fitting-width","submit"]]]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[1,[28,[35,11],null,[["placement","placementPage"],["Login",2]]]],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-ca-body","model","localizationService","isVisibleDescriptionAndLearn","unless","action","pdr-signin-form","pdr-primary-button","if","loadingService","pdr-nds-script"]]',
        moduleName: "kekka/signin/ca/signin-password/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "kHZDZwvx",
        block: '[[[46,[28,[37,1],null,null],null,null,null],[1,"\\n"]],[],false,["component","-outlet"]]',
        moduleName: "kekka/signin/ca/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/tosua-reacceptance/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        signin: (0, t.inject)()
    })
    e.default = n
}))
define("kekka/signin/ca/tosua-reacceptance/index/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            openLink: function(e) {
                this.send("openNewWindow", e)
            },
            onError: function(e) {
                this.send("error", e)
            }
        }
    })
    e.default = n
})), define("kekka/signin/ca/tosua-reacceptance/index/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_legal_important_title_siea")
        }
    })
    e.default = i
})), define("kekka/signin/ca/tosua-reacceptance/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Lx8pN6iV",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_legal_important_title_siea"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,4,["country"]],[33,4,["language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[1,[28,[35,7],null,[["region","country","language","showWhatChanged","onSelected","onError"],[[33,4,["region"]],[33,4,["country"]],[33,4,["language"]],true,[28,[37,8],[[30,0],"openLink"],null],[28,[37,8],[[30,0],"onError"],null]]]]],[1,"\\n"],[41,[51,[33,10,["isPc"]]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,11],null,[["caption","action","isLoading","class","locale"],["msg_i_agree","accept",[33,12,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                    "],[13],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,13],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                                    "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n\\n"],[41,[33,10,["isPc"]],[[[1,"            "],[10,0],[14,0,"row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"page-parent"],[12],[1,"\\n                    "],[10,0],[14,0,"page-items"],[12],[1,"\\n                        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                            "],[1,[28,[35,11],null,[["caption","action","isLoading","class","locale"],["msg_i_agree","accept",[33,12,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                        "],[13],[1,"\\n                        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                            "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,13],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                                        "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pagefooter large"],[12],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","pdr-legal-links","action","unless","appParamsService","pdr-primary-button","loadingService","pdr-text-link","if"]]',
        moduleName: "kekka/signin/ca/tosua-reacceptance/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/tosua-reacceptance/master-help-needed/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_signin_help")
        }
    })
    e.default = i
})), define("kekka/signin/ca/tosua-reacceptance/master-help-needed/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "tvizPQoL",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_signin_help"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,4,["country"]],[33,4,["language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,1],["msg_need_master_account_tosua_acceptance_family"],null]],[13],[1,"\\n                "],[13],[1,"\\n"],[41,[51,[33,7,["isPc"]]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,9],null,[["caption","action","isLoading","class","locale"],["msg_ok_psn","doThisLater",[33,10,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n\\n"],[41,[33,7,["isPc"]],[[[1,"            "],[10,0],[14,0,"row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"page-parent"],[12],[1,"\\n                    "],[10,0],[14,0,"page-items"],[12],[1,"\\n                        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                            "],[1,[28,[35,9],null,[["caption","action","isLoading","class","locale"],["msg_ok_psn","doThisLater",[33,10,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pagefooter large"],[12],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","unless","pdr-primary-button","loadingService","if"]]',
        moduleName: "kekka/signin/ca/tosua-reacceptance/master-help-needed/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/tosua-reacceptance/route", ["exports", "@ember/runloop", "@ember/debug", "rsvp", "@ember/service", "@ember/routing/route", "@ember/object"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = o.default.extend({
            language: null,
            country: null,
            region: null,
            tosuaVersion: null
        }),
        l = a.default.extend({
            countryResourceService: (0, r.inject)("countryResource"),
            tosuaStatusService: (0, r.inject)("tosuaStatus"),
            tagManagerService: (0, r.inject)("tag-manager"),
            unifiedFooterService: (0, r.inject)("unified-footer"),
            setupController: function(e, t) {
                var n = this.controller.get("signin.model")
                n && (n.set("language", t.get("language")), n.set("country", t.get("country"))), e.set("model", t), this.send("resetRouteHistory")
            },
            model: function() {
                this.tosuaStatusService.initialize()
                var e = this.get("appParamsService.initialLocale"),
                    t = this
                return t.get("tosuaStatusService").getUserInformation().then((function(n) {
                    return e.language = n.language, e.country = n.country, t.localizationService.updateStrings(e.language)
                })).then((function() {
                    return "KR" === e.country ? (0, i.reject)("NOT_IMPLEMENTED") : t.get("countryResourceService").preloadResources(e.country, e.language, "TOSUA_REACCEPTANCE")
                })).then((function() {
                    var n = t.get("countryResourceService").getResource("REGION"),
                        i = t.get("countryResourceService").getResource("TERMS_OF_SERVICE_RICH"),
                        r = null
                    return i && (r = i.version), s.create({
                        language: e.language,
                        country: e.country,
                        region: n,
                        tosuaVersion: r
                    })
                }))
            },
            actions: {
                accept: function() {
                    var e = this
                    this.noticeService.clearGlobalError(), this.loadingService.beginTransition(), this.tosuaStatusService.updateTosuaVersion(this.controller.get("model.tosuaVersion"), this.controller.get("model.language"), this.get("appParamsService.accessToken")).then((function() {
                        e.get("tagManagerService").fireDummyPageEvent()
                        var t = !!(e.appParamsService.get("state") || "").split(",").filter((function(e) {
                            return e.startsWith("upd_")
                        }))[0]
                        e.send("authRedirect", null, t)
                    })).catch((function(t) {
                        e.send("error", t)
                    })).finally((function() {
                        e.loadingService.endTransition()
                    }))
                },
                doThisLater: function() {
                    var e = this
                    this.tosuaStatusService.signout().then((function() {
                        e.send("closeOnCancel")
                    })).catch((function(t) {
                        e.send("error", t)
                    }))
                }
            }
        })
    var c = l
    e.default = c
})), define("kekka/signin/ca/tosua-reacceptance/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "DOZXX3TV",
        block: '[[[46,[28,[37,1],null,null],null,null,null],[1,"\\n"]],[],false,["component","-outlet"]]',
        moduleName: "kekka/signin/ca/tosua-reacceptance/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/troubleshooter/index/route", ["exports", "@ember/debug", "@ember/object", "@ember/service", "@ember/routing/route"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
        cobrandingDataService: (0, i.inject)("cobranding-data"),
        model: function() {
            return this.modelFor("signin.ca.troubleshooter")
        },
        setupController: function(e, t) {
            this._super.apply(this, arguments)
            var i = "msg_troubleshoot_signin"
            this.controllerFor("application").set("pageNameId", i), (0, n.set)(t, "headerTitle", i), e.set("cobrandingDataService", this.cobrandingDataService)
        },
        actions: {
            changePassword: function() {
                var e = this.controller.get("model.signinCaModel.signin"),
                    t = this.appParamsService.createUri("VERSA_OAUTH_AUTHORIZE", {
                        scope: this.get("appParamsService.appParams.scope")
                    }, {
                        unhandledQueryParams: !0,
                        handledQueryParams: {
                            excludeKeys: ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                        }
                    })
                this.send("openNewWindow", "CA_FORGOT_PASSWORD", {
                    unified_language: e.get("language"),
                    unified_country: e.get("country"),
                    origin_client_id: e.get("originClientId"),
                    PlatformPrivacyWs1: this.get("appParamsService.platformPrivacyWs1"),
                    redirect_uri: t
                })
            },
            signinHelp: function() {
                this.get("appParamsService.isPsnUser") ? this.transitionTo("signin.ca.troubleshooter.signinHelp") : this.send("openNewWindow", this.get("cobrandingDataService.dataList.troubleSignInUrl"))
            }
        }
    })
    e.default = a
})), define("kekka/signin/ca/troubleshooter/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "ZIt0oBsN",
        block: '[[[10,0],[14,0,"rows row-unshrink"],[12],[1,"\\n    "],[10,0],[14,0,"page-items"],[12],[1,"\\n"],[41,[33,1,["isVisibleResetPwLink"]],[[[1,"            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_forgot_password"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["changePassword",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_signin_change_your_password"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[33,1,["isVisibleAcLink"]],[[[1,"            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_no_account"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["createAccount",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_signin_create_new_account"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[41,[33,4,["isVisibleSigninHelp"]],[[[1,"            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_other"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["signinHelp",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_signin_get_help"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["if","appParamsService","pdr-loc","pdr-text-link","cobrandingDataService"]]',
        moduleName: "kekka/signin/ca/troubleshooter/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/troubleshooter/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return {
                signinCaModel: this.modelFor("signin.ca"),
                headerTitle: null
            }
        }
    })
    e.default = n
})), define("kekka/signin/ca/troubleshooter/signin-help/route", ["exports", "@ember/object", "@ember/debug", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        model: function() {
            return this.modelFor("signin.ca.troubleshooter")
        },
        setupController: function(e, n) {
            this._super.apply(this, arguments)
            var i = "msg_signin_help"
            this.controllerFor("application").set("pageNameId", i), (0, t.set)(n, "headerTitle", i)
        }
    })
    e.default = r
})), define("kekka/signin/ca/troubleshooter/signin-help/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "B8EG5AEu",
        block: '[[[1,[34,0]],[1,"\\n"]],[],false,["pdr-signin-help"]]',
        moduleName: "kekka/signin/ca/troubleshooter/signin-help/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/ca/troubleshooter/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "/fAt9649",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2,["headerTitle"]]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","localInfoNotice","country","language","locale"],["rows-between fitting-parent",[33,2,["signinCaModel","localInfoNotice"]],[33,2,["signinCaModel","signin","country"]],[33,2,["signinCaModel","signin","language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[46,[28,[37,8],null,null],null,null,null],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","model","pdr-main-content","pdr-scroller","localizationService","pdr-notice","component","-outlet"]]',
        moduleName: "kekka/signin/ca/troubleshooter/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/controller", ["exports", "@ember/object", "@ember/service", "@ember/controller", "@ember/utils"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = i.default.extend({
        application: (0, i.inject)(),
        noticeService: (0, n.inject)("notice"),
        revalidatePasswordService: (0, n.inject)("revalidate-password"),
        localSuccessNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalSuccessNotice()
        })),
        localErrorNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalErrorNotice()
        })),
        changeFrameStyle: (0, t.observer)("localErrorNotice.updateTrigger", (function() {
            this.model.set("isError", (0, r.isPresent)(this.get("localErrorNotice.notifyStringId")))
        })),
        localInfoNotice: (0, t.computed)((function() {
            return this.noticeService.createLocalInfoNotice()
        })),
        clearLocalNotice: function() {
            this.localErrorNotice.clearError(), this.localSuccessNotice.clearSuccess()
        },
        actions: {
            revalidatePassword: function(e) {
                var t = this,
                    n = this.loadingService
                return n.beginTransition(), this.revalidatePasswordService.revalidatePassword(e).then((function() {
                    t.send("authRedirect", !0)
                    var e = Date.now(),
                        n = function() {
                            e = Date.now()
                        },
                        i = setInterval((function() {
                            Date.now() - e >= 12e4 && (t.transitionToRoute("signin.signinSucceeded"), clearInterval(i), window.removeEventListener("click", n))
                        }), 1e3)
                    window.addEventListener("click", n)
                })).catch((function(e) {
                    t.send("_transitionToErrorHandler", e, !0, t) || n.endTransition()
                }))
            }
        }
    })
    e.default = a
})), define("kekka/signin/entrance/controller", ["exports", "@ember/object/computed", "@ember/object", "@ember/controller"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        application: (0, i.inject)(),
        signin: (0, i.inject)(),
        enabledUlink: (0, t.equal)("signin.localErrorNotice.errorCode", "AUTH_GCIM_ONLY_ACCOUNT"),
        isVisibleDescriptionAndLearn: (0, n.computed)("appParamsService.messageCode", (function() {
            return !/ulink_signin|parent_note/.test(this.get("appParamsService.messageCode"))
        })),
        signinMsg: (0, n.computed)("signin.{localErrorNotice,localSuccessNotice}.updateTrigger", (function() {
            var e = this.get("signin.localErrorNotice.notifyStringId")
            if (e) return {
                stringId: e,
                isWarn: !0
            }
            var t = this.get("signin.localSuccessNotice.notifyStringId")
            return t ? {
                stringId: t,
                isWarn: !1
            } : null
        }))
    })
    e.default = r
})), define("kekka/signin/entrance/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        arkoseLabsService: (0, n.inject)("arkose-labs"),
        loadingService: (0, n.inject)("loading"),
        signInService: (0, n.inject)("sign-in"),
        model: function() {
            return this.modelFor("signin")
        },
        setupController: function(e, t) {
            t.set("password", null), e.set("model", t), e.set("application.pageNameId", "msg_sign_in")
        },
        actions: {
            handleFormEvent: function() {
                var e = this
                if (!this.modelFor("signin").get("isDisabledSignInButton") && !this.get("loadingService.transiting")) {
                    var t = this.controller.model
                    t.get("recaptchaEnabled") && t.doCaptchaIfNeeded && !this.get("signInService.captchalessToken") ? (this.loadingService.beginTransition(!0), this.arkoseLabsService.doCaptcha(t.country).then((function(n) {
                        var i = n.captchaProvider,
                            r = n.captchaProviderKey,
                            a = n.captchaResponse
                        t.setProperties({
                            captchaProvider: i,
                            captchaProviderKey: r,
                            captchaResponse: a
                        }), t.get("isCaptchaAcceptable") ? e.send("doSignin") : t.set("isCaptchaAcceptable", !0)
                    })).catch((function(t) {
                        e.loadingService.abortTransition(), e.send("error", t)
                    }))) : t.get("isCaptchaAcceptable") ? this.send("doSignin") : t.set("isCaptchaAcceptable", !0)
                }
            },
            troubleshoot: function() {
                this.get("controller.signin").clearLocalNotice(), this.transitionTo("signin.troubleshooter.index")
            },
            openUlink: function() {
                this.send("openNewWindow", "ULINK_PAGE")
            }
        }
    })
    e.default = r
})), define("kekka/signin/entrance/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "4PamErBc",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","localInfoNotice","country","language","locale"],["rows-between fitting-parent",[33,2,["localInfoNotice"]],[33,3,["country"]],[33,3,["language"]],[33,4,["currentLocale"]]]],[["default"],[[[[41,[33,6,["serviceLogoUrl"]],[[[1,"            "],[10,0],[14,0,"grid is-align-center row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"item-logo"],[12],[1,"\\n                    "],[10,"img"],[15,"src",[33,6,["serviceLogoUrl"]]],[15,0,[29,["icon-signin ",[33,6,["serviceLogo"]]]]],[14,"alt",""],[15,"dir",[33,6,["bidi"]]],[12],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,7],null,[["classNames","localInfoNotice"],["item-notice",[33,2,["localInfoNotice"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop signin-entrance theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n            "],[10,0],[14,0,"page-items signin-entrance"],[12],[1,"\\n"],[41,[33,8],[[[1,"                    "],[1,[28,[35,9],null,[["description","linkText","link"],["msg_one_signin_to_sony_service","msg_psp_upsell_learn_more","UID_MK_PAGE"]]]],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems signin-entrance with-message"],[12],[13],[1,"\\n"]],[]],null],[41,[33,10],[[[1,"                    "],[1,[28,[35,11],null,[["baseFontClass","dataText","messages","level"],["description-regular-text","signinMsg",[28,[37,12],[[33,10,["stringId"]]],null],[52,[33,10,["isWarn"]],"warning","info"]]]]],[1,"\\n"],[41,[33,13],[[[1,"                        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                            "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,14],null,[["action","isTextDescriptionTypeSmall"],["openUlink",false]],[["default"],[[[[1,"                                        "],[1,[28,[35,15],["msg_link_this_account"],null]],[1,"\\n"]],[]]]]],[1,"                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n"]],[]],null],[1,"                    "],[10,0],[14,0,"separator-pageitems signin-entrance with-message"],[12],[13],[1,"\\n"]],[]],null],[1,"                "],[11,"form"],[24,"action","#"],[24,"novalidate",""],[4,[38,16],[[30,0],"handleFormEvent"],[["on"],["submit"]]],[12],[1,"\\n                    "],[1,[28,[35,17],null,[["signinIdTitle","passwordTitle","signinIdReadonly","signinIdPlaceholder","passwordPlaceholder","model","isError"],["msg_id_email_psn","msg_pw",[33,3,["signinIdReadonly"]],"msg_id_email_psn","msg_pw",[33,3],[33,3,["isError"]]]]]],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,18],null,[["caption","isLoading","isDisabled","class","type"],["msg_sign_in",[33,19,["transiting"]],[33,3,["isDisabledSignInButton"]],"fitting-width","submit"]]]],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[1,[28,[35,20],null,[["placement","placementPage"],["Login",1]]]],[1,"\\n"],[41,[33,6,["isVisibleTroubleShoot"]],[[[1,"                    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"item-linktext rows-center is-align-center"],[12],[1,"\\n                            "],[10,0],[14,0,"fitting-button"],[12],[1,"\\n                                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,14],null,[["action"],["troubleshoot"]],[["default"],[[[[1,"                                        "],[1,[28,[35,15],["msg_troubleshoot_signin"],null]],[1,"\\n"]],[]]]]],[1,"                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems signin-entrance"],[12],[13],[1,"\\n"]],[]]],[41,[33,6,["isVisibleAcLink"]],[[[1,"                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,21],null,[["caption","action","isLoading","class","locale"],["msg_create_new_account","createAccount",[33,22],"fitting-width",[33,4,["currentLocale"]]]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[41,[33,6,["isMobile"]],[[[1,"                    "],[10,0],[14,0,"separator-pagefooter signin-entrance row-unshrink"],[12],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n\\n"],[41,[33,6,["serviceLogo"]],[[[1,"            "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"]],[]],null]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","signin","model","localizationService","if","appParamsService","pdr-notice","isVisibleDescriptionAndLearn","pdr-description-with-link","signinMsg","pdr-validation-notice","array","enabledUlink","pdr-text-link","pdr-loc","action","pdr-signin-form","pdr-primary-button","loadingService","pdr-nds-script","pdr-secondary-button","isVerifying"]]',
        moduleName: "kekka/signin/entrance/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/force-password-reset/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        application: (0, t.inject)()
    })
    e.default = n
})), define("kekka/signin/force-password-reset/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        model: function() {
            var e = this.controllerFor("signin"),
                t = this.modelFor("signin")
            return {
                localInfoNotice: e.get("localInfoNotice"),
                signin: t
            }
        },
        setupController: function(e, t) {
            e.set("model", t), e.set("application.pageNameId", "msg_password_reset"), this.send("resetRouteHistory")
        },
        actions: {
            changePassword: function() {
                var e = this.localizationService.translateUnifiedToNpLocale(this.controller.get("model.signin.language"))
                this.send("openNewWindow", "PR_FORGOT_PASSWORD", {
                    request_locale: "".concat(e.language, "_").concat(e.country),
                    PlatformPrivacyWs1: this.get("appParamsService.platformPrivacyWs1")
                }), this.replaceWith("signin.entrance")
            },
            doThisLater: function() {
                this.replaceWith("signin.entrance")
            }
        }
    })
    e.default = i
})), define("kekka/signin/force-password-reset/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "AyANi5RY",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_password_reset"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","localInfoNotice","country","language","locale"],["rows fitting-parent",[33,4,["localInfoNotice"]],[33,4,["signin","country"]],[33,4,["signin","language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"rows page-items row-unshrink row-flex"],[12],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,"\\n                    "],[1,[28,[35,1],["msg_email_sent_account_lock_reset"],null]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                "],[1,[28,[35,8],null,[["caption","action","isLoading","class","locale"],["msg_reset_pwd","changePassword",[33,9,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[1,"            "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,10],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                        "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-primary-button","loadingService","pdr-text-link"]]',
        moduleName: "kekka/signin/force-password-reset/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/revalidate-password/controller", ["exports", "kekka/signin/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default
    e.default = n
})), define("kekka/signin/revalidate-password/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route", "@ember/object"], (function(e, t, n, i, r) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var a = r.default.extend({
            signinId: null
        }),
        o = i.default.extend({
            revalidatePasswordService: (0, n.inject)("revalidate-password"),
            model: function() {
                var e = this.modelFor("signin")
                return a.create({
                    signinId: this.revalidatePasswordService.getSigninId(),
                    localErrorNotice: this.controllerFor("signin").get("localErrorNotice"),
                    signin: e
                })
            },
            actions: {
                doThisLater: function() {
                    var e = this
                    this.revalidatePasswordService.signout().then((function() {
                        e.send("authRedirect", !0, !0)
                    })).catch((function(t) {
                        e.send("error", t)
                    }))
                }
            }
        })
    e.default = o
})), define("kekka/signin/revalidate-password/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "TFZ4vhsz",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[1,"    "],[1,[28,[35,1],null,[["signinId","locale","revalidateAction","signoutAction","isLoading","localErrorNotice","country","language","signinIdReadonlyInputHidden"],[[33,2,["signinId"]],[33,3,["currentLocale"]],[28,[37,4],[[30,0],"revalidatePassword"],null],"doThisLater",[33,5,["transiting"]],[33,2,["localErrorNotice"]],[33,2,["signin","country"]],[33,2,["signin","language"]],[33,2,["signin","isCA"]]]]]],[1,"\\n"]],[]]]]]],[],false,["pdr-main-content","kekka-revalidate-password","model","localizationService","action","loadingService"]]',
        moduleName: "kekka/signin/revalidate-password/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/route", ["exports", "@ember/runloop", "@ember/debug", "rsvp", "@ember/service", "@ember/routing/route", "@ember/object", "@ember/object/computed", "ember", "hokkai/utils/string-utils", "kekka/helpers/pdr-loc-fmt", "kekka/mixins/auth-redirect-params-for-cancel", "kekka/services/arkose-labs", "kekka/utils/error-utils", "kekka/mixins/setup-language", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s, l, c, d, u, p, m, g, f) {
    var h

    function v(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]
        if (!n) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return
                    if ("string" == typeof e) return _(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    "Object" === n && e.constructor && (n = e.constructor.name)
                    if ("Map" === n || "Set" === n) return Array.from(e)
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                n && (e = n)
                var i = 0,
                    r = function() {}
                return {
                    s: r,
                    n: function() {
                        return i >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[i++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: r
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a, o = !0,
            s = !1
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next()
                return o = e.done, e
            },
            e: function(e) {
                s = !0, a = e
            },
            f: function() {
                try {
                    o || null == n.return || n.return()
                } finally {
                    if (s) throw a
                }
            }
        }
    }

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length)
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n]
        return i
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var b = o.default.extend({
            language: null,
            country: null,
            signinId: null,
            password: null,
            enabledCancel: null,
            cancelAction: null,
            isValid: !1,
            captchaToken: null,
            captchaProvider: null,
            captchaProviderKey: null,
            captchaResponse: null,
            isCaptchaAcceptable: null,
            onCaptchaIsAcceptableUpdated: null,
            isDisabledSignInButton: (0, s.not)("isValid"),
            isDisabledNext: (0, s.empty)("signinId"),
            isDisabledSignIn: (0, o.computed)("signinId", "password", (function() {
                return !this.signinId || !this.password
            })),
            doCaptchaIfNeeded: (0, o.computed)("signinId", (function() {
                var e = this
                return !this.domains.some((function(t) {
                    return new RegExp(String.raw(h || (n = ["^.+@(?:[^.W_]+.)*", "$"], i = ["^.+@(?:[^\\.\\W_]+\\.)*", "$"], i || (i = n.slice(0)), h = Object.freeze(Object.defineProperties(n, {
                        raw: {
                            value: Object.freeze(i)
                        }
                    }))), t.replace(/[.]/g, "\\$&"))).test(e.signinId)
                    var n, i
                }))
            })),
            _onCaptchaIsAcceptableUpdated: (0, o.observer)("isCaptchaAcceptable", (function() {
                this.onCaptchaIsAcceptableUpdated(this.isCaptchaAcceptable)
            })),
            signinIdMaxLength: 63,
            signinIdPlaceholder: "msg_id_email_psn",
            signinIdTitle: "msg_id_email_psn",
            passwordPlaceholder: "msg_pw",
            passwordTitle: "msg_pw",
            isCA: !1,
            originClientId: null,
            backgroundImage: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/images/wallpaper.jpg"
        }),
        y = a.default.extend(g.default, u.default, {
            aboutAdapterService: (0, r.inject)("about-adapter"),
            appParamsService: (0, r.inject)("app-params"),
            arkoseLabsService: (0, r.inject)("arkose-labs"),
            countryResourceService: (0, r.inject)("country-resource"),
            modalService: (0, r.inject)("modal"),
            noticeService: (0, r.inject)("notice"),
            loadingService: (0, r.inject)("loading"),
            debugService: (0, r.inject)("debug"),
            signInService: (0, r.inject)("sign-in"),
            onlineResourceService: (0, r.inject)("online-resource"),
            evStatusService: (0, r.inject)("ev-status"),
            revalidatePasswordService: (0, r.inject)("revalidate-password"),
            setupServiceConfig: (0, r.inject)("setup-service-config"),
            tagManagerService: (0, r.inject)("tag-manager"),
            checkPersonalizationSettingsAdapterService: (0, r.inject)("check-personalization-settings-adapter"),
            telemetryService: (0, r.inject)("telemetry"),
            tosuaStatusService: (0, r.inject)("tosuaStatus"),
            ndsService: (0, r.inject)("nds"),
            activate: function() {
                this._super(), this.modalService.bindOutletRoute(this)
            },
            deactivate: function() {
                this._super(), this.modalService.unbindOutletRoute(this)
            },
            beforeModel: function(e) {
                var t = this,
                    n = this.signInService,
                    r = this.appParamsService
                r.get("isApplicationForDCIM") && f.default.APP.centralAuthServiceURL && "v3" === r.get("authVer") && n.overrideServiceConfig({
                    authV3ServiceUrl: f.default.APP.centralAuthServiceURL
                }), this.aboutAdapterService.setup([this.evStatusService, this.revalidatePasswordService, this.tosuaStatusService]), this.onlineResourceService.initialize(), n.initialize(), this.evStatusService.initialize(), this.get("appParamsService.isAvailableCobrandingData") && this.evStatusService.addScopeGroup("allSignout"), this.revalidatePasswordService.initialize(), this.checkPersonalizationSettingsAdapterService.initialize(), this.modelFor("application").set("onUnhandledCloseFunc", (function() {
                    return t.get("appParamsService.hasAuthMandatoryParams") ? t.getAuthRedirectParamsForCancel(n).then((function(e) {
                        t.send("redirectTo", e)
                    })) : (0, i.reject)()
                }))
                var a, o = this.get("appParamsService.authError")
                if (o.error_code) return a = n.translateAuthorizeError(o.error_code, o.missingMandatoryAttributes), o.error_description && (a.errorDetails.response.error_description = o.error_description), o.error && (a.errorDetails.response.error = o.error), this._transitionToErrorHandler(a, !1, e)
            },
            model: function(e, t) {
                var n = this.appParamsService.initialLocale,
                    i = n.actualValue,
                    r = n.country,
                    a = n.isDefault,
                    o = n.language
                a && t.trigger(!1, "convertedDefaultLanguage", i, o)
                var s = this
                return this.setInitialLanguage().then((function() {
                    var e = b.create({
                            cancelAction: "cancelAction",
                            language: o,
                            country: r,
                            enabledCancel: s.get("appParamsService.enabledCancel"),
                            onCaptchaIsAcceptableUpdated: function(e) {
                                e && s.send("doSignin")
                            },
                            signinId: s.get("appParamsService.signinId") || s.get("appParamsService.loginHint"),
                            loginHint: s.get("appParamsService.loginHint"),
                            signinIdReadonly: !!s.get("appParamsService.signinId"),
                            domains: s.signInService.get("config.domains_to_not_call_ec") || [],
                            isError: !1
                        }),
                        t = s.get("setupServiceConfig.config.restricted_sign_in_clients"),
                        n = !!(t && t.length > 0 && !0 === s.get("appParamsService").isIncluded(t)),
                        i = !!s.get("setupServiceConfig.config.restrict_all_clients"),
                        a = s.get("appParamsService.hasNoCaptcha"),
                        l = s.get("appParamsService.noCaptcha"),
                        c = !(!0 !== s.setupServiceConfig.get("config.ignore_no_captcha") && (a ? l : i || n))
                    return e.set("recaptchaEnabled", c), e
                }))
            },
            afterModel: function(e) {
                var t = this
                return this._super.apply(this, arguments), this.countryResourceService.preloadResources(e.get("country"), e.get("language"), "INIT_SIGNIN").then((function() {
                    t.tagManagerService.initialize()
                }))
            },
            storedMessage: null,
            setupController: function(e, t) {
                var n = this
                this._super.apply(this, arguments)
                var i = this.storedMessage
                i && (i.isWarn ? e.get("localErrorNotice").setError(i.msgId, i.errCode) : e.get("localSuccessNotice").setSuccess(i.msgId))
                var r = e.get("localInfoNotice")
                switch (this.get("appParamsService.messageCode")) {
                    case "parent_help":
                        r.setInfo("msg_signin_custom_error_code_family")
                        break
                    case "ulink_signin":
                        r.setInfo("msg_signin_for_ulink_desc")
                        break
                    case "parent_note":
                        r.setInfo((0, c.localizeStringWithoutReplace)("msg_need_family_manager_sign_in").toString())
                }
                t.recaptchaEnabled && this.arkoseLabsService.loadScript(p.PUBLIC_KEY.SIGN_IN).catch((function(e) {
                    n.send("error", e)
                }))
            },
            resetController: function(e, t, n) {
                t && e.set("model.isCaptchaAcceptable", !1)
            },
            resetCaptchaInfo: function() {
                this.signInService.setProperties({
                    captchaProvider: null,
                    captchaProviderKey: null,
                    captchaResponse: null
                })
            },
            _triggeringChangesWithAction: function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]
                this.isTransition ? this.trigger.apply(this, [!1, e].concat(n)) : this.send.apply(this, [e].concat(n))
            },
            actions: {
                createAccount: function() {
                    this.send("redirectToCreateAccount")
                },
                redirectToCreateAccount: function(e) {
                    var t = {
                        entry: "create_account"
                    }
                    this.get("appParamsService.authVer") && (t.auth_ver = this.get("appParamsService.authVer")), this.send("prRedirect", this, e || "PR_ACCOUNT_CREATION", t)
                },
                doSignin: function() {
                    var e = this,
                        n = this.loadingService,
                        i = this.get("appParamsService.appParams"),
                        r = this.modelFor("signin")
                    this.controller.clearLocalNotice(), this.noticeService.clearGlobalError()
                    var a = this.controller.get("model.signinId")
                    if (-1 === a.indexOf("@")) return this.get("controller.localErrorNotice").setError("msg_error_wrong_signin_id_pw"), void this.loadingService.abortTransition()
                    if (r.get("recaptchaEnabled")) {
                        if (!r.get("isCaptchaAcceptable")) return
                        this.signInService.setProperties({
                            captchaProvider: r.get("captchaProvider"),
                            captchaProviderKey: r.get("captchaProviderKey"),
                            captchaResponse: r.get("captchaResponse")
                        })
                    }
                    n.beginTransition(!0)
                    var o = this.ndsService.getWidgetModel()
                    this.signInService.signIn(r.get("signinId"), r.get("password"), i, o.widgetData, o.ndsSessionId).then((function() {
                        e.resetCaptchaInfo(), e.tagManagerService.fireDummyPageEvent(), e.telemetryService.sendSigninEvent(), setTimeout((function() {
                            e.send("authRedirect", !0)
                        }), !l.default.testing && 1e3)
                        var i = Date.now(),
                            r = function() {
                                i = Date.now()
                            },
                            a = setInterval((function() {
                                Date.now() - i >= 12e4 && ((0, t.run)((function() {
                                    n.endTransition(), e.transitionTo("signin.signinSucceeded")
                                })), clearInterval(a), window.removeEventListener("click", r))
                            }), 1e3)
                        window.addEventListener("click", r)
                    })).catch((function(t) {
                        e.resetCaptchaInfo(), r.set("password", null), setTimeout((function() {
                            e._transitionToErrorHandler(t, !0, e) || n.endTransition()
                        }), !l.default.testing && 2e3)
                    }))
                },
                authRedirect: function(e, t) {
                    var n = this,
                        i = this.appParamsService
                    t || !i.get("isPsnUser") ? this.send("_authRedirect", e) : this.checkPersonalizationSettingsAdapterService.needsForceUpgrade(this.appParamsService.appParams).then((function(t) {
                        if (t) {
                            var i = {
                                entry: "upgrade_account",
                                pr_referer: "signin"
                            }
                            return n.get("appParamsService.authVer") && (i.auth_ver = n.get("appParamsService.authVer")), void n.send("prRedirect", n, "PR_ACCOUNT_UPGRADE", i)
                        }
                        n.send("_authRedirect", e)
                    })).catch((function(e) {
                        n.send("error", e)
                    }))
                },
                _authRedirect: function(e) {
                    this.send("closeOnSucceed", {
                        redirectUri: "VERSA_OAUTH_AUTHORIZE",
                        preventInactivatingAppState: !!e,
                        options: this._redirectQueryOption
                    })
                },
                prRedirect: function(e, t, n) {
                    this._triggeringChangesWithAction.call(e, "redirectTo", {
                        redirectUri: t,
                        params: n,
                        options: this._redirectQueryOption
                    })
                },
                _transitionToErrorHandler: function() {
                    return this._transitionToErrorHandler.apply(this, arguments)
                },
                cancelAction: function() {
                    var e = this "parent_note" === this.get("appParamsService.messageCode") ? this.modalService.openModal("confirm", {
                        descriptionCaption: "msg_sure_you_want_to_cancel",
                        primaryCaption: "msg_yes",
                        secondaryCaption: "msg_no"
                    }).then((function(t) {
                        t.closeModal(), "confirmed" === t.status && e.send("closeOnCancel")
                    })) : this.send("closeOnCancel")
                },
                rbaHardBlock: function() {
                    var e = this
                    this.modalService.openModal("confirm", {
                        descriptionCaption: "msg_auth_error_pwd_reset",
                        noSecondary: !0,
                        primaryCaption: "msg_ok_psn"
                    }).then((function(t) {
                        t.closeModal(), "confirmed" === t.status && (e.get("appParamsService.isPsnUser") ? e.send("_authRedirect", !0) : e.send("redirectSignOutUrl"))
                    }))
                }
            },
            _redirectQueryOption: (0, o.computed)((function() {
                var e = ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
                return "always" === this.get("appParamsService.prompt") && e.push("prompt"), {
                    unhandledQueryParams: !0,
                    handledQueryParams: {
                        excludeKeys: e
                    }
                }
            })),
            _isBmpError: function(e) {
                return e.errorDetails && e.errorDetails.bmpReference
            },
            _transitionToErrorHandler: function(e, t, n) {
                var i = this,
                    r = e.errorCodes,
                    a = this.modelFor("signin")
                if (this._isBmpError(e)) this.get("controller.localErrorNotice").setError((0, d.pdrLocFmt)(["msg_error_server_connection_var", e.errorDetails.bmpReference]), "", e, !0)
                else {
                    if (r && r.length > 0) {
                        var o, s = v(r)
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var l = o.value
                                switch (l) {
                                    case "AUTH_CAPTCHA_REQUIRED":
                                        return void(t && (this.get("controller.localErrorNotice").setError("msg_error_wrong_signin_id_pw", l, e), a.get("recaptchaEnabled") || (a.set("recaptchaEnabled", !0), this.arkoseLabsService.loadScript(p.PUBLIC_KEY.SIGN_IN).catch((function(e) {
                                            i.send("error", e)
                                        })))))
                                    case "AUTH_CAPTCHA_INVALID_RESPONSE":
                                        return void this.noticeService.trigger("error", {
                                            code: l
                                        }, e.sessionInfo, "INFO")
                                    case "AUTH_INVALID_LOGIN":
                                    case "MALFORMED_PARAMETER":
                                        return void(t && this.get("controller.localErrorNotice").setError("msg_error_wrong_signin_id_pw", l, e))
                                    case "AUTH_INVALID_PASSWORD":
                                        return void(t && this.get("controller.localErrorNotice").setError("msg_error_password_not_correct", l, e))
                                    case "AUTH_GCIM_ONLY_ACCOUNT":
                                        return void(t && this.get("controller.localErrorNotice").setError("msg_error_signin_email_uid", l, e))
                                    case "AUTH_SUSPENDED_ACCOUNT":
                                        return void(t ? this.get("controller.localErrorNotice").setError("msg_temp_susp_account", l, e) : this.set("storedMessage", {
                                            msgId: "msg_temp_susp_account",
                                            isWarn: !0,
                                            errCode: "AUTH_SUSPENDED_ACCOUNT"
                                        }))
                                    case "AUTH_BANNED_ACCOUNT":
                                        return void(t ? this.get("controller.localErrorNotice").setError("msg_temp_ban_account", l, e) : this.set("storedMessage", {
                                            msgId: "msg_temp_ban_account",
                                            isWarn: !0,
                                            errCode: "AUTH_BANNED_ACCOUNT"
                                        }))
                                    case "AUTH_EMAIL_VERIFICATION_REQUIRED":
                                        return this._processTransitionToEmailVerification(t, n)
                                    case "AUTH_PASSWORD_REQUIRED":
                                        if (t) {
                                            var c = a.get("isCA") ? "ca." : ""
                                            this.transitionTo("signin.".concat(c, "forcePasswordReset"))
                                        }
                                        return
                                    case "AUTH_TOSUA_REACCEPT_REQUIRED":
                                        return void(this.get("appParamsService.isAvailableCobrandingData") ? this.transitionTo("signin.ca.tosuaReacceptance.index") : this.transitionTo("signin.tosuaReacceptance.index"))
                                    case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB":
                                    case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB_SUB":
                                        return void(this.get("appParamsService.isAvailableCobrandingData") ? this.transitionTo("signin.ca.tosuaReacceptance.masterHelpNeeded") : this.transitionTo("signin.tosuaReacceptance.masterHelpNeeded"))
                                    case "AUTH_MISSING_POSTALCODE":
                                    case "AUTH_MISSING_COMMUNICATIONNAME:FIRST":
                                    case "AUTH_MISSING_COMMUNICATIONNAME:LAST":
                                    case "AUTH_MISSING_ONLINEID":
                                    case "AUTH_MISSING_CITY":
                                        var u = this._addToppingsForUpgrade(e.errorCodes)
                                        return u.entry = "upgrade_account", u.pr_referer = "signin", this._triggeringChangesWithAction.call(n, "prRedirect", n, "PR_ACCOUNT_UPGRADE", u), void(t || n.abort())
                                    case "AUTH_AUTHENTICATOR_REQUIRED":
                                    case "AUTH_2SV_REQUIRED":
                                        return this.appParamsService.storage.set("mandatoryTwoStepVerificationPageInfo", {
                                            authenticationType: e.authentication_type,
                                            ticketUuid: e.ticket_uuid
                                        }), void this.transitionTo("signin2sv.code")
                                    case "AUTH_RBA_REQUIRED":
                                        return this.set("appParamsService.storage.mandatoryRbaCodeVerificationPageInfo", {
                                            challengeMethod: e.challenge_method,
                                            signinId: a.get("signinId"),
                                            ticketUuid: e.ticket_uuid
                                        }), void this.transitionTo("signinRba.code")
                                    case "AUTH_BLOCKED_ACCOUNT_BY_RBA":
                                        return this.noticeService.sendErrorEvent((0, m.reduceErrorObject)(e, l)), void this.send("rbaHardBlock")
                                    case "AUTH_PASSWORD_GATING_REQUIRED":
                                        return this._processShowRevalidatePassword(t)
                                    case "AUTH_MERGE_REQUIRED":
                                        return void this.transitionTo("signin.ca.redirectConfirmation")
                                    case "AUTH_MERGE_CONFLICT":
                                        return void this.transitionTo("signin.ca.mergeConflict")
                                    case "AUTH_CONSENT_REQUIRED":
                                        return this._triggeringChangesWithAction.call(n, "prRedirect", n, "PR_ACCOUNT_LINKING", {
                                            entry: "account_linking"
                                        }), void(t || n.abort())
                                }
                            }
                        } catch (h) {
                            s.e(h)
                        } finally {
                            s.f()
                        }
                    }
                    var g, f
                    e.errorDetails && e.errorDetails.response && (f = e.errorDetails.response).error_code && (g = {
                        error_code: f.error_code
                    }, f.error_description && (g.error_description = f.error_description), f.error && (g.error = f.error), e.action = {
                        addParams: g
                    }), this._triggeringChangesWithAction.call(n, "error", e)
                }
            },
            _addToppingsForUpgrade: function(e) {
                for (var t, n = {}, i = {
                        AUTH_MISSING_POSTALCODE: "tp_psn",
                        "AUTH_MISSING_COMMUNICATIONNAME:FIRST": "tp_psn",
                        "AUTH_MISSING_COMMUNICATIONNAME:LAST": "tp_psn",
                        AUTH_MISSING_ONLINEID: "tp_psn",
                        AUTH_MISSING_CITY: "tp_psn"
                    }, r = 0, a = e.length; r < a; r++)(t = i[e[r]]) && !n[t] && (n[t] = !0)
                return n
            },
            _processTransitionToEmailVerification: function(e, t) {
                var n = this,
                    i = this.evStatusService,
                    r = this.appParamsService
                return e ? i.getUserInformation().then((function() {
                    r.storage.set("mandatoryEmailVerificationPageInfo", i.session), n.transitionTo("email.verifyV2.authenticated")
                })).catch((function(e) {
                    n._triggeringChangesWithAction.call(t, "error", e)
                })) : i.getUserInformation().then((function() {
                    return r.storage.set("mandatoryEmailVerificationPageInfo", i.session), n.setInitialLanguage()
                })).then((function() {
                    n.transitionTo("email.verifyV2.authenticated")
                })).catch((function(e) {}))
            },
            _processShowRevalidatePassword: function() {
                var e = this
                return this.revalidatePasswordService.getUserInformation().then((function() {
                    return e.get("appParamsService.isAvailableCobrandingData") ? e.replaceWith("signin.ca.revalidatePassword") : e.replaceWith("signin.revalidatePassword")
                }))
            }
        })
    var k = y
    e.default = k
})), define("kekka/signin/signin-succeeded/route", ["exports", "@ember/service", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        tosuaStatusService: (0, t.inject)("tosua-status"),
        localizationService: (0, t.inject)("localization"),
        beforeModel: function() {
            var e = this.get("appParamsService.initialLocale"),
                t = this.tosuaStatusService,
                n = this.localizationService,
                i = this.modelFor("signin")
            return t.initialize(), t.getUserInformation().then((function(t) {
                return e.language = t.language, e.country = t.country, i.set("language", t.language), i.set("country", t.country), n.updateStrings(e.language)
            }))
        },
        setupController: function(e, t) {
            t.set("enabledCancel", !1), this.send("resetRouteHistory"), e.set("model", t)
        },
        actions: {
            willTransition: function(e) {
                e.abort()
            }
        }
    })
    e.default = i
})), define("kekka/signin/signin-succeeded/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "BoVzSjnf",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","country","language","locale"],["rows-between fitting-parent",[33,2,["country"]],[33,2,["language"]],[33,3,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"separator-pagetop signin-entrance success row-unshrink"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-flex signin-entrance"],[12],[1,"\\n                "],[10,0],[14,0,"icon-succeed"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child is-align-center theme-green-feedback"],[15,"dir",[33,4,["bidi"]]],[12],[1,[28,[35,5],["msg_signed_in_continue"],null]],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter signin-entrance row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","model","localizationService","appParamsService","pdr-loc"]]',
        moduleName: "kekka/signin/signin-succeeded/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "iMoh1sTJ",
        block: '[[[6,[39,0],null,[["country","language","locale","hasBackground","basePanelClass","wallPaperImagePath"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]],[33,3,["isPcTablet"]],"l-base-panel-small",[33,1,["backgroundImage"]]]],[["default"],[[[[1,"    "],[1,[28,[35,4],null,[["autoBackControl","isCancelWithDialog","enabledCancel","cancelAction","locale"],[true,false,[33,1,["enabledCancel"]],[33,1,["cancelAction"]],[33,2,["currentLocale"]]]]]],[1,"\\n    "],[46,[28,[37,6],null,null],null,null,null],[1,"\\n"]],[]]]]]],[],false,["kekka-layout","model","localizationService","appParamsService","kekka-sony-header","component","-outlet"]]',
        moduleName: "kekka/signin/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/tosua-reacceptance/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        signin: (0, t.inject)()
    })
    e.default = n
})), define("kekka/signin/tosua-reacceptance/index/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        actions: {
            openLink: function(e) {
                this.send("openNewWindow", e)
            },
            onError: function(e) {
                this.send("error", e)
            }
        }
    })
    e.default = n
})), define("kekka/signin/tosua-reacceptance/index/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_legal_important_title_siea")
        }
    })
    e.default = i
}))
define("kekka/signin/tosua-reacceptance/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "x0eJdtGc",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_legal_important_title_siea"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,4,["country"]],[33,4,["language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[1,[28,[35,7],null,[["region","country","language","showWhatChanged","onSelected","onError"],[[33,4,["region"]],[33,4,["country"]],[33,4,["language"]],true,[28,[37,8],[[30,0],"openLink"],null],[28,[37,8],[[30,0],"onError"],null]]]]],[1,"\\n"],[41,[51,[33,10,["isPc"]]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,11],null,[["caption","action","isLoading","class","locale"],["msg_i_agree","accept",[33,12,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                    "],[13],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,13],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                                    "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n\\n"],[41,[33,10,["isPc"]],[[[1,"            "],[10,0],[14,0,"row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"page-parent"],[12],[1,"\\n                    "],[10,0],[14,0,"page-items"],[12],[1,"\\n                        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                            "],[1,[28,[35,11],null,[["caption","action","isLoading","class","locale"],["msg_i_agree","accept",[33,12,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                        "],[13],[1,"\\n                        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                        "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                            "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,13],null,[["action"],["doThisLater"]],[["default"],[[[[1,"                                        "],[1,[28,[35,1],["msg_sf_fb_skip"],null]],[1,"\\n"]],[]]]]],[1,"                                "],[13],[1,"\\n                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pagefooter large"],[12],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","pdr-legal-links","action","unless","appParamsService","pdr-primary-button","loadingService","pdr-text-link","if"]]',
        moduleName: "kekka/signin/tosua-reacceptance/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/tosua-reacceptance/master-help-needed/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function() {
            this._super.apply(this, arguments), this.controllerFor("application").set("pageNameId", "msg_signin_help")
        }
    })
    e.default = i
})), define("kekka/signin/tosua-reacceptance/master-help-needed/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "jJPmjsx8",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],["msg_signin_help"],null]]],[]]]]],[1,"\\n"],[6,[39,2],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,3],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,4,["country"]],[33,4,["language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,1],["msg_need_master_account_tosua_acceptance_family"],null]],[13],[1,"\\n                "],[13],[1,"\\n"],[41,[51,[33,7,["isPc"]]],[[[1,"                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,9],null,[["caption","action","isLoading","class","locale"],["msg_ok_psn","doThisLater",[33,10,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n\\n"],[41,[33,7,["isPc"]],[[[1,"            "],[10,0],[14,0,"row-unshrink"],[12],[1,"\\n                "],[10,0],[14,0,"page-parent"],[12],[1,"\\n                    "],[10,0],[14,0,"page-items"],[12],[1,"\\n                        "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                            "],[1,[28,[35,9],null,[["caption","action","isLoading","class","locale"],["msg_ok_psn","doThisLater",[33,10,["transiting"]],"fitting-width",[33,5,["currentLocale"]]]]]],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pagefooter large"],[12],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","unless","pdr-primary-button","loadingService","if"]]',
        moduleName: "kekka/signin/tosua-reacceptance/master-help-needed/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/tosua-reacceptance/route", ["exports", "@ember/runloop", "@ember/debug", "rsvp", "@ember/service", "@ember/routing/route", "@ember/object"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = o.default.extend({
            language: null,
            country: null,
            region: null,
            tosuaVersion: null
        }),
        l = a.default.extend({
            countryResourceService: (0, r.inject)("countryResource"),
            tosuaStatusService: (0, r.inject)("tosuaStatus"),
            tagManagerService: (0, r.inject)("tag-manager"),
            unifiedFooterService: (0, r.inject)("unified-footer"),
            setupController: function(e, t) {
                var n = this.controller.get("signin.model")
                n && (n.set("language", t.get("language")), n.set("country", t.get("country"))), e.set("model", t), this.send("resetRouteHistory")
            },
            model: function() {
                this.tosuaStatusService.initialize()
                var e = this.get("appParamsService.initialLocale"),
                    t = this
                return t.get("tosuaStatusService").getUserInformation().then((function(n) {
                    return e.language = n.language, e.country = n.country, t.localizationService.updateStrings(e.language)
                })).then((function() {
                    return "KR" === e.country ? (0, i.reject)("NOT_IMPLEMENTED") : t.get("countryResourceService").preloadResources(e.country, e.language, "TOSUA_REACCEPTANCE")
                })).then((function() {
                    var n = t.get("countryResourceService").getResource("REGION"),
                        i = t.get("countryResourceService").getResource("TERMS_OF_SERVICE_RICH"),
                        r = null
                    return i && (r = i.version), s.create({
                        language: e.language,
                        country: e.country,
                        region: n,
                        tosuaVersion: r
                    })
                }))
            },
            actions: {
                accept: function() {
                    var e = this
                    this.noticeService.clearGlobalError(), this.loadingService.beginTransition(), this.tosuaStatusService.updateTosuaVersion(this.controller.get("model.tosuaVersion"), this.controller.get("model.language"), this.get("appParamsService.accessToken")).then((function() {
                        e.get("tagManagerService").fireDummyPageEvent()
                        var t = !!(e.appParamsService.get("state") || "").split(",").filter((function(e) {
                            return e.startsWith("upd_")
                        }))[0]
                        e.send("authRedirect", null, t)
                    })).catch((function(t) {
                        e.send("error", t)
                    })).finally((function() {
                        e.loadingService.endTransition()
                    }))
                },
                doThisLater: function() {
                    var e = this
                    this.tosuaStatusService.signout().then((function() {
                        e.send("closeOnCancel")
                    })).catch((function(t) {
                        e.send("error", t)
                    }))
                }
            }
        })
    var c = l
    e.default = c
})), define("kekka/signin/tosua-reacceptance/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "JwBFinji",
        block: '[[[46,[28,[37,1],null,null],null,null,null],[1,"\\n"]],[],false,["component","-outlet"]]',
        moduleName: "kekka/signin/tosua-reacceptance/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/troubleshooter/index/route", ["exports", "@ember/object", "@ember/debug", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        model: function() {
            return this.modelFor("signin.troubleshooter")
        },
        setupController: function(e, n) {
            var i = "msg_troubleshoot_signin";
            (0, t.set)(n, "headerTitle", i), e.set("model", n), this.controllerFor("application").set("pageNameId", i)
        },
        actions: {
            changePassword: function() {
                var e = this.localizationService.translateUnifiedToNpLocale(this.controller.get("model.signinModel.language"))
                this.send("openNewWindow", "PR_FORGOT_PASSWORD", {
                    request_locale: "".concat(e.language, "_").concat(e.country),
                    PlatformPrivacyWs1: this.get("appParamsService.platformPrivacyWs1")
                })
            },
            signinHelp: function() {
                this.transitionTo("signin.troubleshooter.signinHelp")
            }
        }
    })
    e.default = r
})), define("kekka/signin/troubleshooter/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "2bb4+G3C",
        block: '[[[10,0],[14,0,"rows row-unshrink page-parent"],[12],[1,"\\n    "],[10,0],[14,0,"page-items row-unshrink"],[12],[1,"\\n"],[41,[33,1,["isVisibleResetPwLink"]],[[[1,"            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_forgot_password"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["changePassword",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_signin_change_your_password"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"]],[]],null],[41,[33,1,["isVisibleAcLink"]],[[[1,"            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_no_account"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["createAccount",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_signin_create_new_account"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_other"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["signinHelp",false]],[["default"],[[[[1,"                        "],[1,[28,[35,2],["msg_troubleshoot_signin_get_help"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["if","appParamsService","pdr-loc","pdr-text-link"]]',
        moduleName: "kekka/signin/troubleshooter/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/troubleshooter/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return {
                signinModel: this.modelFor("signin"),
                headerTitle: null
            }
        }
    })
    e.default = n
})), define("kekka/signin/troubleshooter/signin-help/route", ["exports", "@ember/object", "@ember/debug", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        model: function() {
            return this.modelFor("signin.troubleshooter")
        },
        setupController: function(e, n) {
            var i = "msg_signin_help";
            (0, t.set)(n, "headerTitle", i), e.set("model", n), this.controllerFor("application").set("pageNameId", i)
        }
    })
    e.default = r
})), define("kekka/signin/troubleshooter/signin-help/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "15sH0ja4",
        block: '[[[1,[34,0]],[1,"\\n"]],[],false,["pdr-signin-help"]]',
        moduleName: "kekka/signin/troubleshooter/signin-help/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin/troubleshooter/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "0/3/qyqN",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2,["headerTitle"]]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,2,["signinModel","country"]],[33,2,["signinModel","language"]],[33,5,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,6],null,[["classNames","locale"],["item-notice",[33,5,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[46,[28,[37,8],null,null],null,null,null],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","model","pdr-main-content","pdr-scroller","localizationService","pdr-notice","component","-outlet"]]',
        moduleName: "kekka/signin/troubleshooter/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/backup-code-verified/route", ["exports", "@ember/runloop", "rsvp", "@ember/object", "@ember/debug", "@ember/service", "@ember/routing/route", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = o.default.extend({
        signInService: (0, a.inject)("sign-in"),
        tagManagerService: (0, a.inject)("tag-manager"),
        model: function() {
            return this.modelFor("signin2sv")
        },
        setupController: function(e, t) {
            var n = "msg_signin_with_backup_code",
                i = this.get("appParamsService.isAvailableCobrandingData") ? s.default.APP.caCamSecurityURL : s.default.APP.prCamSecurityURL
            e.setProperties({
                model: t,
                headerTitle: n,
                camSecurityUrl: i
            }), this.controllerFor("application").set("pageNameId", n), this.send("resetRouteHistory")
        },
        actions: {
            transitionTo2svSetting: function() {
                this.send("clearNotice")
                var e = this.get("appParamsService.isAvailableCobrandingData") ? "CA_CAM_SECURITY" : "PR_CAM_SECURITY",
                    t = {
                        unified_country: this.get("model.country"),
                        unified_language: this.get("model.language"),
                        origin_client_id: this.get("appParamsService.originClientId")
                    }
                this.send("prOpenNewWindow", this, e, t)
            },
            continue: function() {
                var e = this
                this.send("clearNotice")
                var t = this.loadingService
                t.beginTransition(!0, "continue"), this.authorizeCheck().then((function() {
                    e.tagManagerService.fireDummyPageEvent(), e.send("authRedirect")
                })).catch((function(n) {
                    e.send("signinError", n, !0, e), t.abortTransition()
                }))
            },
            localError: function(e) {
                this.transitionTo("signin.entrance")
            }
        },
        authorizeCheck: function() {
            var e = this.get("appParamsService.appParams"),
                t = this.controller.get("model.ssoToken")
            return this.signInService.authorizeCheck(t, e)
        }
    })
    var c = l
    e.default = c
})), define("kekka/signin2sv/backup-code-verified/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "Pi0SBjVl",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","country","language","locale"],["rows row-flex flex-fitting",[33,5,["country"]],[33,5,["language"]],[33,6,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,7],null,[["classNames"],["item-notice"]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop same theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n            "],[10,0],[14,0,"page-items same signin"],[12],[1,"\\n                "],[10,0],[14,0,"icon-easysignin done"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"grid-child is-align-center description-regular info"],[15,"dir",[33,8,["bidi"]]],[12],[1,[28,[35,1],["msg_backup_code_verified_and_signed_in"],null]],[13],[1,"\\n                "],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"rows is-align-center"],[12],[1,"\\n                    "],[1,[28,[35,9],null,[["caption","action","isLoading","class"],["msg_sf_regcam_action_continue","continue",[33,10,["transiting","continue"]],"fitting-width"]]]],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"separator-horizontal-hairline bottom fitting-width"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n                    "],[10,0],[14,0,"grid-parent description-small"],[12],[1,"\\n                        "],[10,0],[14,0,"grid-child description-small"],[15,"dir",[33,8,["bidi"]]],[12],[1,[28,[35,1],["msg_post_backup_code_suggestions"],null]],[13],[1,"\\n                    "],[13],[1,"\\n                    "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n                    "],[1,[28,[35,11],null,[["caption","action","class"],["msg_account_setting_2sv","transitionTo2svSetting","fitting-width"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","appParamsService","pdr-primary-button","loadingService","pdr-secondary-button"]]',
        moduleName: "kekka/signin2sv/backup-code-verified/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/backup-code/controller", ["exports", "@ember/controller", "@ember/service", "rsvp"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        signInService: (0, n.inject)("sign-in"),
        actions: {
            verify: function() {
                var e = this
                this.send("clearNotice")
                var t = this.model,
                    n = t.authenticationType,
                    r = t.ticketUuid,
                    a = t.backupCode.value.trim(),
                    o = this.loadingService
                o.beginTransition(!0, "verify")
                var s, l = this.signInService
                switch (n) {
                    case "authenticator_code":
                        s = l.authenticatorCodeVerify(r, a)
                        break
                    case "two_step":
                        s = l.twoStepVerify(r, a)
                        break
                    default:
                        s = (0, i.reject)("UNEXPECTED_JS_ERROR")
                }
                s.then((function(t) {
                    e.set("model.ssoToken", t), e.transitionToRoute("signin2sv.backupCodeVerified")
                })).catch((function(t) {
                    e.send("signinError", t, !0, e), o.abortTransition()
                }))
            }
        }
    })
    e.default = r
})), define("kekka/signin2sv/backup-code/route", ["exports", "@ember/runloop", "rsvp", "@ember/object", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = "msg_signin_with_backup_code",
        l = {
            AUTH_INVALID_VERIFICATION_CODE: "msg_error_backup_code_incorrect"
        },
        c = o.default.extend({
            model: function() {
                return this.modelFor("signin2sv")
            },
            setupController: function(e, t) {
                e.set("model", t), e.set("headerTitle", s), this.controllerFor("application").set("pageNameId", s)
            },
            actions: {
                localError: function(e) {
                    var t = l[e]
                    t ? this.controller.get("model.localErrorNotice").setError(t, e).clearOneTransition() : this.replaceWith("signin.entrance")
                }
            }
        })
    var d = c
    e.default = d
})), define("kekka/signin2sv/backup-code/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "mRopYLvf",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","localErrorNotice","country","language","locale"],["rows row-flex flex-fitting",[33,5,["localErrorNotice"]],[33,5,["country"]],[33,5,["language"]],[33,6,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,7],null,[["classNames","localErrorNotice"],["item-notice",[33,5,["localErrorNotice"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop same theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,8],null,[["verificationMethod","model","verify"],["BACKUP_CODE",[33,5,["backupCode"]],[28,[37,9],[[30,0],"verify"],null]]]]],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","pdr-2sv-method","action"]]',
        moduleName: "kekka/signin2sv/backup-code/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/code/controller", ["exports", "@ember/controller", "@ember/service", "rsvp"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = t.default.extend({
        appParamsService: (0, n.inject)("app-params"),
        loadingService: (0, n.inject)("loading"),
        signInService: (0, n.inject)("sign-in"),
        tagManagerService: (0, n.inject)("tag-manager"),
        actions: {
            resendCode: function() {
                var e = this
                this.send("clearNotice")
                var t = this.model,
                    n = t.localSuccessNotice,
                    i = t.ticketUuid,
                    r = this.loadingService
                r.beginTransition(!0, "resendCode"), this.signInService.resendTwoSVCode(i).then((function() {
                    n.setSuccess("msg_verification_code_sent_again").clearOneTransition()
                })).catch((function(t) {
                    e.send("signinError", t, !0, e)
                })).finally((function() {
                    r.endTransition()
                }))
            },
            troubleshoot: function() {
                this.send("transitionTo2svTroubleshooter")
            },
            verify: function() {
                var e = this
                this.send("clearNotice")
                var t = this.model,
                    n = t.authenticationType,
                    r = t.ticketUuid,
                    a = t.code.value.trim(),
                    o = this.get("appParamsService.appParams"),
                    s = this.loadingService
                s.beginTransition(!0, "verify")
                var l, c = this.signInService
                switch (n) {
                    case "authenticator_code":
                        l = c.authenticatorCodeSignIn(r, a, o)
                        break
                    case "two_step":
                        l = c.twoStepSignIn(r, a, o)
                        break
                    default:
                        l = (0, i.reject)("UNEXPECTED_JS_ERROR")
                }
                l.then((function() {
                    e.tagManagerService.fireDummyPageEvent(), e.send("authRedirect")
                })).catch((function(t) {
                    e.send("signinError", t, !0, e), s.abortTransition()
                }))
            }
        }
    })
    e.default = r
})), define("kekka/signin2sv/code/route", ["exports", "@ember/runloop", "rsvp", "@ember/object", "@ember/polyfills", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i, r, a, o, s) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var l = {
            AUTH_INVALID_VERIFICATION_CODE: "msg_error_verification_code_incorrect",
            didResendCode: "msg_verification_code_sent_again"
        },
        c = {
            authenticator_code: "AUTHENTICATOR",
            two_step: "SMS"
        },
        d = s.default.extend({
            model: function() {
                var e = this.modelFor("signin2sv")
                return (0, r.assign)({
                    verificationMethod: c[e.authenticationType]
                }, e)
            },
            setupController: function(e, t) {
                e.set("model", t), this.controllerFor("application").set("pageNameId", "msg_sign_in"), this.noticeService.clearGlobalErrorOneTransition()
            },
            actions: {
                transitionTo2svTroubleshooter: function() {
                    this.transitionTo("signin2sv.troubleshooter.index")
                },
                localError: function(e) {
                    var t = l[e]
                    if (t) this.controller.get("model.localErrorNotice").setError(t, e).clearOneTransition()
                    else {
                        switch (e) {
                            case "AUTH_GCIM_ONLY_ACCOUNT":
                                this.controllerFor("signin").get("localErrorNotice").setError("msg_error_signin_email_uid", e)
                                break
                            case "AUTH_SUSPENDED_ACCOUNT":
                                this.controllerFor("signin").get("localErrorNotice").setError("msg_temp_susp_account", e)
                                break
                            case "AUTH_BANNED_ACCOUNT":
                                this.controllerFor("signin").get("localErrorNotice").setError("msg_temp_ban_account", e)
                        }
                        this.get("appParamsService.isAvailableCobrandingData") ? this.replaceWith("signin.ca.signinId") : this.replaceWith("signin.entrance")
                    }
                }
            }
        })
    var u = d
    e.default = u
})), define("kekka/signin2sv/code/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "ZpWrwQ5Z",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","localSuccessNotice","localErrorNotice","country","language","locale"],["rows row-flex flex-fitting",[33,2,["localSuccessNotice"]],[33,2,["localErrorNotice"]],[33,2,["country"]],[33,2,["language"]],[33,3,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,4],null,[["classNames","localErrorNotice","localSuccessNotice"],["item-notice",[33,2,["localErrorNotice"]],[33,2,["localSuccessNotice"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop same theme-basebackground"],[12],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,5],null,[["verificationMethod","model","resendCode","troubleshoot","verify"],[[33,2,["verificationMethod"]],[33,2,["code"]],[52,[28,[37,7],[[33,2,["verificationMethod"]],"SMS"],null],[28,[37,8],[[30,0],"resendCode"],null]],[28,[37,8],[[30,0],"troubleshoot"],null],[28,[37,8],[[30,0],"verify"],null]]]]],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","pdr-2sv-method","if","eq","action"]]',
        moduleName: "kekka/signin2sv/code/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/expired/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = "msg_account_feature_name_2sv",
        r = n.default.extend({
            model: function() {
                return this.modelFor("signin2sv")
            },
            setupController: function(e, t) {
                e.set("model", t), e.set("headerTitle", i), this.controllerFor("application").set("pageNameId", i), this.send("resetRouteHistory")
            },
            actions: {
                ok: function() {
                    this.get("appParamsService.isAvailableCobrandingData") ? this.replaceWith("signin.ca.signinId") : this.replaceWith("signin.entrance")
                }
            }
        })
    e.default = r
})), define("kekka/signin2sv/expired/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "lQfmB91+",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","country","language","locale"],["rows row-flex flex-fitting",[33,5,["country"]],[33,5,["language"]],[33,6,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"separator-pagetop same theme-basebackground row-unshrink"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n            "],[10,0],[14,0,"page-items same signin"],[12],[1,"\\n                "],[10,0],[14,0,"label description-regular"],[15,"dir",[33,7,["bidi"]]],[12],[1,[28,[35,1],["msg_error_verification_code_expired_signin"],null]],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                    "],[1,[28,[35,8],null,[["caption","action","class"],["msg_ok_psn","ok","fitting-width"]]]],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","model","localizationService","appParamsService","pdr-primary-button"]]',
        moduleName: "kekka/signin2sv/expired/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/route", ["exports", "jquery", "@ember/debug", "@ember/service", "@ember/routing/route", "@ember/object", "kekka/mixins/setup-language", "kekka/mixins/auth-redirect-params-for-cancel", "kekka/config/environment"], (function(e, t, n, i, r, a, o, s, l) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var c = r.default.extend(o.default, s.default, {
        appParamsService: (0, i.inject)("app-params"),
        checkPersonalizationSettingsAdapterService: (0, i.inject)("check-personalization-settings-adapter"),
        cobrandingDataService: (0, i.inject)("cobranding-data"),
        evStatusService: (0, i.inject)("evStatus"),
        signInService: (0, i.inject)("sign-in"),
        tagManagerService: (0, i.inject)("tag-manager"),
        beforeModel: function() {
            this.controllerFor("application").set("isSigninLayout", !0), this.signInService.initialize(), this.evStatusService.initialize(), this.checkPersonalizationSettingsAdapterService.initialize()
        },
        model: function(e, t) {
            var n = this
            return this.setInitialLanguage().then((function() {
                var e = n.appParamsService,
                    i = n.noticeService,
                    r = e.initialLocale,
                    a = r.actualValue,
                    o = r.country,
                    s = r.isDefault,
                    l = r.language
                s && t.trigger(!1, "convertedDefaultLanguage", a, l)
                var c = e.get("storage.mandatoryTwoStepVerificationPageInfo"),
                    d = c.authenticationType,
                    u = c.ticketUuid
                return {
                    authenticationType: d,
                    backupCode: {
                        value: null
                    },
                    code: {
                        value: null
                    },
                    country: o,
                    language: l,
                    localErrorNotice: i.createLocalErrorNotice(),
                    localSuccessNotice: i.createLocalSuccessNotice(),
                    ssoToken: null,
                    ticketUuid: u
                }
            }))
        },
        afterModel: function() {
            this._super.apply(this, arguments), this.tagManagerService.initialize()
        },
        actions: {
            authRedirect: function(e) {
                var t = this
                this.get("appParamsService.isPsnUser") ? this.checkPersonalizationSettingsAdapterService.needsForceUpgrade(this.appParamsService.appParams).then((function(n) {
                    if (n) return t.loadingService.endTransition(), void t.send("prRedirect", t, "PR_ACCOUNT_UPGRADE", {
                        entry: "upgrade_account",
                        pr_referer: "signin"
                    })
                    t.send("_authRedirect", e)
                })).catch((function(e) {
                    t.send("error", e)
                })) : this.send("_authRedirect", e)
            },
            _authRedirect: function(e) {
                this.send("closeOnSucceed", {
                    redirectUri: "VERSA_OAUTH_AUTHORIZE",
                    options: this._redirectQueryOption(e)
                })
            },
            prRedirect: function(e, t, n) {
                e.send("redirectTo", {
                    redirectUri: t,
                    params: n,
                    options: this._redirectQueryOption()
                })
            },
            prOpenNewWindow: function(e, t, n) {
                e.send("openNewWindow", t, n, this._redirectQueryOption())
            },
            signinError: function(e, t, n) {
                this._transitionToErrorHandler(e, t, n)
            },
            localError: function() {
                return !1
            },
            clearNotice: function() {
                var e = this.controller.get("model")
                return e.localErrorNotice.clearError(), e.localSuccessNotice.clearSuccess(), !0
            }
        },
        _redirectQueryOption: function(e) {
            var t = ["error_code", "error", "error_description", "missing_mandatory_attributes", "entry"]
            return e || "always" !== this.get("appParamsService.prompt") || t.push("prompt"), {
                unhandledQueryParams: !0,
                handledQueryParams: {
                    excludeKeys: t
                }
            }
        },
        _transitionToErrorHandler: function(e, t, n) {
            var i, r, a = e.errorCodes
            if (a && a.length > 0)
                for (var o = 0, s = a.length; o < s; ++o) switch (e.errorCodes[o]) {
                    case "AUTH_INVALID_LOGIN":
                    case "MALFORMED_PARAMETER":
                        return
                    case "AUTH_SUSPENDED_ACCOUNT":
                        return void n.send("localError", "AUTH_SUSPENDED_ACCOUNT")
                    case "AUTH_BANNED_ACCOUNT":
                        return void n.send("localError", "AUTH_BANNED_ACCOUNT")
                    case "AUTH_EMAIL_VERIFICATION_REQUIRED":
                        return t ? this._processTransitionToEmailVerification(t, n) : void 0
                    case "AUTH_PASSWORD_REQUIRED":
                        return void(t && this.replaceWith("signin.forcePasswordReset"))
                    case "AUTH_TOSUA_REACCEPT_REQUIRED":
                        return void(t && this.replaceWith("signin.tosuaReacceptance.index"))
                    case "AUTH_CAPTCHA_REQUIRED":
                        return void this.send("authRedirect")
                    case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB":
                    case "AUTH_TOSUA_REACCEPT_REQUIRED_SUB_SUB":
                        return void(t && this.replaceWith("signin.tosuaReacceptance.masterHelpNeeded"))
                    case "AUTH_MISSING_POSTALCODE":
                    case "AUTH_MISSING_COMMUNICATIONNAME:FIRST":
                    case "AUTH_MISSING_COMMUNICATIONNAME:LAST":
                    case "AUTH_MISSING_ONLINEID":
                    case "AUTH_MISSING_CITY":
                        if (t) {
                            var l = this._addToppingsForUpgrade(e.errorCodes)
                            l.entry = "upgrade_account", l.pr_referer = "signin", n.send("prRedirect", n, "PR_ACCOUNT_UPGRADE", l), t || n.abort()
                        } else this.send("authRedirect")
                        return
                    case "AUTH_INVALID_VERIFICATION_CODE":
                        return void n.send("localError", "AUTH_INVALID_VERIFICATION_CODE")
                    case "AUTH_GCIM_ONLY_ACCOUNT":
                        return void n.send("localError", "AUTH_GCIM_ONLY_ACCOUNT")
                    case "AUTH_TICKET_EXPIRED":
                        return void this.replaceWith("signin2sv.expired")
                    case "AUTH_CONSENT_REQUIRED":
                        return void n.send("prRedirect", n, "PR_ACCOUNT_LINKING", {
                            entry: "account_linking"
                        })
                }
            e.errorDetails && e.errorDetails.response && (r = e.errorDetails.response).error_code && (i = {
                error_code: r.error_code
            }, r.error_description && (i.error_description = r.error_description), r.error && (i.error = r.error), e.action = {
                addParams: i
            }), n.send("error", e)
        },
        _addToppingsForUpgrade: function(e) {
            for (var t, n = {}, i = {
                    AUTH_MISSING_POSTALCODE: "tp_psn",
                    "AUTH_MISSING_COMMUNICATIONNAME:FIRST": "tp_psn",
                    "AUTH_MISSING_COMMUNICATIONNAME:LAST": "tp_psn",
                    AUTH_MISSING_ONLINEID: "tp_psn",
                    AUTH_MISSING_CITY: "tp_psn"
                }, r = 0, a = e.length; r < a; r++)(t = i[e[r]]) && !n[t] && (n[t] = !0)
            return n
        },
        _processTransitionToEmailVerification: function(e, t) {
            var n = this
            return e ? n.get("evStatusService").getUserInformation().then((function() {
                n.appParamsService.storage.set("mandatoryEmailVerificationPageInfo", n.get("evStatusService.session")), n.transitionTo("email.verifyV2.authenticated")
            })).catch((function(e) {
                t.send("error", e)
            })) : n.get("evStatusService").getUserInformation().then((function() {
                return n.appParamsService.storage.set("mandatoryEmailVerificationPageInfo", n.get("evStatusService.session")), n.setInitialLanguage()
            })).then((function() {
                n.transitionTo("email.verifyV2.authenticated")
            })).catch((function(e) {}))
        }
    })
    var d = c
    e.default = d
})), define("kekka/signin2sv/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "+sW/wwm6",
        block: '[[[6,[39,0],null,[["country","language","locale","hasBackground","basePanelClass","keepPrevious"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]],[33,3,["isPcTablet"]],"l-base-panel-small",true]],[["default"],[[[[1,"    "],[1,[28,[35,4],null,[["autoBackControl","isCancelWithDialog","enabledCancel","locale"],[true,false,[33,3,["enabledCancel"]],[33,2,["currentLocale"]]]]]],[1,"\\n    "],[46,[28,[37,6],null,null],null,null,null],[1,"\\n"]],[]]]]]],[],false,["kekka-layout","model","localizationService","appParamsService","kekka-sony-header","component","-outlet"]]',
        moduleName: "kekka/signin2sv/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/troubleshooter/another-device-access/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function(e, t) {
            var n = "msg_troubleshoot_security_settings_another_device"
            e.set("model", t), this.controllerFor("application").set("pageNameId", n), this.controllerFor("signin2sv.troubleshooter").set("headerTitle", n)
        },
        actions: {
            openCSPage: function() {
                this.send("openNewWindow", "TWOSV_MK_PAGE")
            }
        }
    })
    e.default = i
})), define("kekka/signin2sv/troubleshooter/another-device-access/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "INuYkz/+",
        block: '[[[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n    "],[10,0],[14,0,"page-items same row-flex theme-white signin"],[12],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n"],[41,[33,0,["isPsnUser"]],[[[1,"                    "],[1,[28,[35,2],["msg_2sv_another_device_access_desc1"],null]],[1,"\\n"]],[]],[[[1,"                    "],[1,[28,[35,2],["msg_2sv_another_device_access"],null]],[1,"\\n"]],[]]],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n                "],[1,[28,[35,2],["msg_2sv_another_device_access_desc2"],null]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n        "],[10,"ul"],[12],[1,"\\n            "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,2],["msg_2sv_another_device_access_next_action1"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,2],["msg_2sv_another_device_access_next_action2"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,"li"],[14,0,"grid-parent bullet-point point"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-icon icon-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-icon beside-point"],[12],[13],[1,"\\n                "],[10,0],[14,0,"grid-child bullet-point-text point"],[15,"dir",[33,0,["bidi"]]],[12],[1,[28,[35,2],["msg_2sv_another_device_access_next_action3"],null]],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n"],[41,[33,0,["isPsnUser"]],[[[1,"            "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action"],["openCSPage"]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_see_2sv_description"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["appParamsService","if","pdr-loc","pdr-text-link"]]',
        moduleName: "kekka/signin2sv/troubleshooter/another-device-access/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/troubleshooter/further-help/route", ["exports", "@ember/debug", "@ember/routing/route"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = n.default.extend({
        setupController: function(e, t) {
            var n = "msg_contact_us"
            e.set("model", t), this.controllerFor("application").set("pageNameId", n), this.controllerFor("signin2sv.troubleshooter").set("headerTitle", n)
        },
        actions: {
            openCSPage: function() {
                this.send("openNewWindow", "CS_HELP_PAGE")
            }
        }
    })
    e.default = i
})), define("kekka/signin2sv/troubleshooter/further-help/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "FVoFT3sl",
        block: '[[[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n    "],[10,0],[14,0,"page-items same row-flex theme-white signin"],[12],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,0,["bidi"]]],[12],[1,"\\n                "],[1,[28,[35,1],["msg_further_help_desc2_noref"],null]],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems small"],[12],[13],[1,"\\n        "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"            "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,2],null,[["action"],["openCSPage"]],[["default"],[[[[1,"                        "],[1,[28,[35,1],["msg_visit_customer_support_page"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["appParamsService","pdr-loc","pdr-text-link"]]',
        moduleName: "kekka/signin2sv/troubleshooter/further-help/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/troubleshooter/index/route", ["exports", "@ember/debug", "@ember/service", "@ember/routing/route"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
        cobrandingDataService: (0, n.inject)("cobranding-data"),
        setupController: function(e, t) {
            var n = "msg_account_feature_name_2sv"
            e.set("model", t), this.controllerFor("application").set("pageNameId", n), this.controllerFor("signin2sv.troubleshooter").set("headerTitle", n)
        },
        actions: {
            openMKPage: function() {
                this.send("openNewWindow", "TWOSV_MK_PAGE")
            },
            backupCode: function() {
                this.transitionTo("signin2sv.backupCode")
            },
            anotherDeviceAccess: function() {
                this.transitionTo("signin2sv.troubleshooter.anotherDeviceAccess")
            },
            other: function() {
                var e = this.get("appParamsService.isPsnUser")
                e ? this.transitionTo("signin2sv.troubleshooter.furtherHelp") : this.send("openNewWindow", this.get("cobrandingDataService.dataList.troubleSignInUrl"))
            }
        }
    })
    e.default = r
})), define("kekka/signin2sv/troubleshooter/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "BgfjmO8T",
        block: '[[[10,0],[14,0,"columns-center row-unshrink page-parent"],[12],[1,"\\n    "],[10,0],[14,0,"page-items same row-flex theme-white signin"],[12],[1,"\\n"],[41,[33,1,["isPsnUser"]],[[[1,"            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_whats_verification_code"],null]],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                    "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["openMKPage",false]],[["default"],[[[[1,"                            "],[1,[28,[35,2],["msg_troubleshoot_see_2sv_description"],null]],[1,"\\n"]],[]]]]],[1,"                    "],[13],[1,"\\n                "],[13],[1,"\\n            "],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-horizontal-hairline bottom"],[12],[13],[1,"\\n            "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n"]],[]],null],[1,"        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_having_backup_codes"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["backupCode",false]],[["default"],[[[[1,"                        "],[1,[28,[35,2],["msg_signin_with_backup_code"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_sign_in_another_device"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["anotherDeviceAccess",false]],[["default"],[[[[1,"                        "],[1,[28,[35,2],["msg_troubleshoot_security_settings_another_device"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"separator-pageitems middle"],[12],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[15,"dir",[33,1,["bidi"]]],[12],[1,[28,[35,2],["msg_troubleshoot_signin_other"],null]],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"grid-parent description-regular"],[12],[1,"\\n            "],[10,0],[14,0,"grid-child description-regular"],[12],[1,"\\n                "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,3],null,[["action","isTextDescriptionTypeSmall"],["other",false]],[["default"],[[[[1,"                        "],[1,[28,[35,2],["msg_contact_us"],null]],[1,"\\n"]],[]]]]],[1,"                "],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n    "],[13],[1,"\\n"],[13],[1,"\\n"]],[],false,["if","appParamsService","pdr-loc","pdr-text-link"]]',
        moduleName: "kekka/signin2sv/troubleshooter/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/signin2sv/troubleshooter/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return this.modelFor("signin2sv")
        }
    })
    e.default = n
}))
define("kekka/signin2sv/troubleshooter/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "x74ZETWo",
        block: '[[[6,[39,0],null,[["isSmall"],[true]],[["default"],[[[[1,[28,[35,1],[[33,2]],null]]],[]]]]],[1,"\\n"],[6,[39,3],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,4],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,5,["country"]],[33,5,["language"]],[33,6,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"theme-noticeback row-unshrink"],[12],[1,"\\n            "],[1,[28,[35,7],null,[["classNames","locale"],["item-notice",[33,6,["currentLocale"]]]]]],[1,"\\n            "],[10,0],[14,0,"separator-pagetop same theme-basebackground theme-white"],[12],[13],[1,"\\n        "],[13],[1,"\\n\\n        "],[46,[28,[37,9],null,null],null,null,null],[1,"\\n\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter large row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["kekka-title-header","pdr-loc","headerTitle","pdr-main-content","pdr-scroller","model","localizationService","pdr-notice","component","-outlet"]]',
        moduleName: "kekka/signin2sv/troubleshooter/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/terminator/controller", ["exports", "@ember/controller"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        application: (0, t.inject)()
    })
    e.default = n
})), define("kekka/terminator/done/route", ["exports", "@ember/service", "@ember/routing/route", "kekka/config/environment", "kekka/utils/deo", "kekka/mixins/signin-utility", "kekka/mixins/setup-language"], (function(e, t, n, i, r, a, o) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var s = n.default.extend(o.default, a.default, {
        signoutService: (0, t.inject)("sign-out"),
        appParamsService: (0, t.inject)("app-params"),
        beforeModel: function(e) {
            this.appParamsService.get("signedOut") && (e.trigger(!1, "redirectTo", {
                redirectUri: this.appParamsService.get("isCreateParentViaPPR") ? i.default.APP.managementCaURLForTerminator : "PR_FAMILY_MANAGEMENT",
                options: {
                    unhandledQueryParams: !0,
                    handledQueryParams: {
                        excludeKeys: ["entry", "error", "error_code", "error_description", "message_code_r2p", "missing_mandatory_attributes", "signed_out"]
                    }
                }
            }), e.abort())
        },
        model: function() {
            var e = this.appParamsService,
                t = this.signoutService
            t.setSession({
                accessToken: e.get("accessToken"),
                idToken: e.get("idToken")
            })
            var n, i = t.get("session")
            return n = i.language ? {
                language: i.language,
                country: i.country
            } : this.modelFor("terminator"), this.setInitialLanguage(n.language).then((function() {
                return n
            }))
        },
        setupController: function(e, t) {
            this.send("resetRouteHistory"), e.set("model", t), this.controllerFor("application").set("pageNameId", null)
        },
        getSignoutRedirectParams: function(e) {
            return {
                params: {
                    client_id: (0, r.default)(i.default.APP.clientId),
                    redirect_uri: e
                },
                redirectUri: this.appParamsService.get("isApplicationForPdrCa") || this.appParamsService.get("isCreateParentViaPPR") ? i.default.APP.caSignoutURLForTerminator : "VERSA_OAUTH_SIGNOUT"
            }
        },
        actions: {
            doSignout: function() {
                var e = {
                    additionalQueries: {
                        signed_out: "true"
                    },
                    uri: "PR_RETURN_TO_PREV_APP"
                }
                this.appParamsService.get("isApplicationForPdrCa") && (e.additionalQueries.message_code_r2p = "create_parent"), this.send("redirectTo", this.getSignoutRedirectParamsWithCreateUri(e))
            }
        }
    })
    e.default = s
})), define("kekka/terminator/done/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "RNfllcDK",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","country","language"],["rows fitting-parent",[33,2,["country"]],[33,2,["language"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink"],[12],[1,"\\n            "],[10,0],[14,0,"page-items terminator"],[12],[1,"\\n                "],[10,0],[14,0,"icon-succeed"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"label description-regular is-align-center info"],[15,"dir",[33,3,["bidi"]]],[12],[1,[28,[35,4],[[52,[28,[37,6],[[33,3,["hasAuthMandatoryParams"]],[33,3,["isCreateParentViaPPR"]]],null],"msg_account_created_continue","msg_continue_previous_app"]],null]],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n"],[41,[28,[37,6],[[33,3,["hasAuthMandatoryParams"]],[33,3,["isCreateParentViaPPR"]]],null],[[[1,"                    "],[10,0],[14,0,"columns-center"],[12],[1,"\\n                        "],[1,[28,[35,7],null,[["action","caption","class"],["doSignout","msg_ok_psn","fitting-width"]]]],[1,"\\n                    "],[13],[1,"\\n"]],[]],[[[1,"                    "],[10,0],[14,0,"rows"],[12],[1,"\\n"],[1,"                        "],[10,0],[14,0,"item-linktext rows-center"],[12],[1,"\\n                            "],[10,0],[14,0,"columns"],[12],[1,"\\n"],[6,[39,8],null,[["action"],["doSignout"]],[["default"],[[[[1,"                                    "],[1,[28,[35,4],["msg_sign_out"],null]],[1,"\\n"]],[]]]]],[1,"                            "],[13],[1,"\\n                        "],[13],[1,"\\n                    "],[13],[1,"\\n"]],[]]],[1,"            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","model","appParamsService","pdr-loc","if","and","pdr-primary-button","pdr-text-link"]]',
        moduleName: "kekka/terminator/done/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/terminator/index/route", ["exports", "@ember/routing/route"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = t.default.extend({
        model: function() {
            return this.modelFor("terminator")
        },
        setupController: function() {
            this._super.apply(this, arguments), this.send("resetRouteHistory"), this.controllerFor("application").set("pageNameId", null)
        },
        actions: {
            willTransition: function(e) {
                e.abort()
            }
        }
    })
    e.default = n
})), define("kekka/terminator/index/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "4CY3X1mY",
        block: '[[[6,[39,0],null,[["id","class"],["kekka-main","row-flex"]],[["default"],[[[[6,[39,1],null,[["classNames","country","language","locale"],["rows fitting-parent",[33,2,["country"]],[33,2,["language"]],[33,3,["currentLocale"]]]],[["default"],[[[[1,"        "],[10,0],[14,0,"separator-pagetop row-unshrink"],[12],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n        "],[10,0],[14,0,"columns-center row-unshrink page-parent entrance"],[12],[1,"\\n            "],[10,0],[14,0,"page-items row-flex"],[12],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n                "],[10,0],[14,0,"icon-create"],[12],[13],[1,"\\n                "],[10,0],[14,0,"separator-pageitems"],[12],[13],[1,"\\n            "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"row-flex"],[12],[13],[1,"\\n"],[1,"        "],[10,0],[14,0,"separator-pagefooter row-unshrink"],[12],[13],[1,"\\n"]],[]]]]]],[]]]]]],[],false,["pdr-main-content","pdr-scroller","model","localizationService"]]',
        moduleName: "kekka/terminator/index/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/terminator/route", ["exports", "@ember/routing/route", "@ember/service"], (function(e, t, n) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var i = t.default.extend({
        aboutAdapterService: (0, n.inject)("about-adapter"),
        signoutService: (0, n.inject)("sign-out"),
        activate: function() {
            this._super(), this.modalService.bindOutletRoute(this)
        },
        deactivate: function() {
            this._super(), this.modalService.unbindOutletRoute(this)
        },
        beforeModel: function() {
            this.aboutAdapterService.setup([this.signoutService])
        },
        model: function() {
            var e = this.get("appParamsService.initialLocale"),
                t = {
                    language: e.language,
                    country: e.country
                }
            return t
        }
    })
    e.default = i
})), define("kekka/terminator/template", ["exports", "@ember/template-factory"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = (0, t.createTemplateFactory)({
        id: "JNk946bw",
        block: '[[[6,[39,0],null,[["country","language","locale","keepPrevious","keepPreviousPanelSize"],[[33,1,["country"]],[33,1,["language"]],[33,2,["currentLocale"]],true,true]],[["default"],[[[[1,"    "],[1,[28,[35,3],null,[["autoBackControl","isCancelWithDialog","enabledCancel","locale"],[true,false,[33,4,["enabledCancel"]],[33,2,["currentLocale"]]]]]],[1,"\\n    "],[10,0],[14,0,"cancellation-margin theme-noticeback row-unshrink"],[12],[1,"\\n        "],[1,[28,[35,5],null,[["classNames"],["item-notice"]]]],[1,"\\n    "],[13],[1,"\\n    "],[46,[28,[37,7],null,null],null,null,null],[1,"\\n"]],[]]]]]],[],false,["kekka-layout","model","localizationService","kekka-sony-header","appParamsService","pdr-notice","component","-outlet"]]',
        moduleName: "kekka/terminator/template.hbs",
        isStrictMode: !1
    })
    e.default = n
})), define("kekka/transitions", ["exports"], (function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        this.transition(this.toRoute("cam.index"), this.use("slideIn", {
            duration: 300
        })), this.transition(this.hasClass("wizard"), this.use("wizardAnimation"))
    }
})), define("kekka/transitions/cross-fade", ["exports", "liquid-fire/transitions/cross-fade"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/default", ["exports", "liquid-fire/transitions/default"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/explode", ["exports", "liquid-fire/transitions/explode"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/fade", ["exports", "liquid-fire/transitions/fade"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/flex-grow", ["exports", "liquid-fire/transitions/flex-grow"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/fly-to", ["exports", "liquid-fire/transitions/fly-to"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/move-over", ["exports", "liquid-fire/transitions/move-over"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/scale", ["exports", "liquid-fire/transitions/scale"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/scroll-then", ["exports", "liquid-fire/transitions/scroll-then"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/slide-in", ["exports", "liquid-fire"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(e) {
        var n, i = this,
            r = {};
        (0, t.isAnimating)(this.oldElement, "moving-in") ? n = (0, t.finish)(this.oldElement, "moving-in"): ((0, t.stop)(this.oldElement), n = t.Promise.resolve())
        return this.oldElement.css("z-index", -1), n.then((function() {
            var n = function(e, t) {
                var n = []
                e.newElement && (n.push(parseInt(e.newElement.css(t), 10)), n.push(parseInt(e.newElement.parent().css(t), 10)))
                e.oldElement && (n.push(parseInt(e.oldElement.css(t), 10)), n.push(parseInt(e.oldElement.parent().css(t), 10)))
                return Math.max.apply(null, n)
            }(i, "width")
            return r.translateX = ["0px", "".concat(-1 * n, "px")], (0, t.animate)(i.newElement, r, e, "moving-in")
        }))
    }
})), define("kekka/transitions/to-down", ["exports", "liquid-fire/transitions/to-down"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/to-left", ["exports", "liquid-fire/transitions/to-left"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/to-right", ["exports", "liquid-fire/transitions/to-right"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/to-up", ["exports", "liquid-fire/transitions/to-up"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/wait", ["exports", "liquid-fire/transitions/wait"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return t.default
        }
    })
})), define("kekka/transitions/wizard-animation", ["exports", "liquid-fire"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            i = (e.margin, window.PdrIF.transitionAnimation)
        0 == n++ && i.onStart();
        (0, t.stop)(this.oldElement)
        var r, a = parseInt(this.newElement.css("width"), 10)
        switch (i.type) {
            case "toBack":
                r = [(0, t.animate)(this.oldElement, {
                    translateX: "".concat(a, "px"),
                    translateZ: "0px"
                }, {
                    duration: 500,
                    easing: [.25, .1, .25, 1]
                }), (0, t.animate)(this.newElement, {
                    opacity: [1, 0],
                    translateX: [0, "-400px"],
                    translateZ: "0px"
                }, {
                    duration: 500,
                    easing: [.25, .1, .25, 1]
                })]
                break
            case "toNext":
                r = [(0, t.animate)(this.oldElement, {
                    translateX: "-".concat(a, "px"),
                    translateZ: "0px"
                }, {
                    duration: 500,
                    easing: [.25, .1, .25, 1]
                }), (0, t.animate)(this.newElement, {
                    opacity: [1, 0],
                    translateX: [0, "400px"],
                    translateZ: "0px"
                }, {
                    duration: 500,
                    easing: [.25, .1, .25, 1]
                })]
                break
            default:
                this.newElement.css({
                    visibility: "",
                    opacity: 1
                }), r = []
        }
        return t.Promise.all(r).then((function() {
            0 == --n && i.onComplete()
        }))
    }
    var n = 0
})), define("kekka/utils/clairvoyance-map", ["exports"], (function(e) {
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = {
            "web:pdr": {
                "about:index": {
                    "timing:overall": 2585,
                    "timing:load": 4313,
                    "timing:initialize": 4314,
                    "timing:initialTransition": 4315,
                    "timing:render": 4316,
                    "timing:response": 4317,
                    "timing:getString": 4802
                },
                "avatar:index": {
                    "timing:overall": 3255,
                    "timing:load": 4341,
                    "timing:initialize": 4342,
                    "timing:initialTransition": 4343,
                    "timing:render": 4344,
                    "timing:response": 4345,
                    "timing:getString": 4805
                },
                cam: {
                    index: {
                        "timing:overall": 2588,
                        "timing:load": 4356,
                        "timing:initialize": 4357,
                        "timing:initialTransition": 4358,
                        "timing:render": 4359,
                        "timing:response": 4360,
                        "timing:getString": 4808
                    },
                    easySignin_code_enter: {
                        "timing:overall": 2591,
                        "timing:load": 4371,
                        "timing:initialize": 4372,
                        "timing:initialTransition": 4373,
                        "timing:render": 4374,
                        "timing:response": 4375,
                        "timing:getString": 4811
                    },
                    personalInfo_list_index: {
                        "timing:overall": 5491,
                        "timing:load": 5492,
                        "timing:initialize": 5493,
                        "timing:initialTransition": 5494,
                        "timing:render": 5495,
                        "timing:response": 5496,
                        "timing:getString": 5497
                    },
                    privacySettings_index: {
                        "timing:overall": 2594,
                        "timing:load": 4386,
                        "timing:initialize": 4387,
                        "timing:initialTransition": 4388,
                        "timing:render": 4389,
                        "timing:response": 4390,
                        "timing:getString": 4814
                    },
                    privacySettings_group_index: {
                        "timing:overall": 2597,
                        "timing:load": 4401,
                        "timing:initialize": 4402,
                        "timing:initialTransition": 4403,
                        "timing:render": 4404,
                        "timing:response": 4405,
                        "timing:getString": 4817
                    },
                    privacySettings_group_item: {
                        "timing:overall": 2600,
                        "timing:load": 4416,
                        "timing:initialize": 4417,
                        "timing:initialTransition": 4418,
                        "timing:render": 4419,
                        "timing:response": 4420,
                        "timing:getString": 4820
                    },
                    psnProfile_list_index: {
                        "timing:overall": 3258,
                        "timing:load": 4431,
                        "timing:initialize": 4432,
                        "timing:initialTransition": 4433,
                        "timing:render": 4434,
                        "timing:response": 4435,
                        "timing:getString": 4823
                    },
                    psnProfile_list_avatar_index: {
                        "timing:overall": 3261,
                        "timing:load": 4446,
                        "timing:initialize": 4447,
                        "timing:initialTransition": 4448,
                        "timing:render": 4449,
                        "timing:response": 4450,
                        "timing:getString": 4826
                    },
                    psnProfile_list_onlineId_paid: {
                        "timing:overall": 5380,
                        "timing:load": 5381,
                        "timing:initialize": 5382,
                        "timing:initialTransition": 5383,
                        "timing:render": 5384,
                        "timing:response": 5385,
                        "timing:getString": 5386
                    },
                    psnProfile_list_profilePicture_index: {
                        "timing:overall": 3264,
                        "timing:load": 4461,
                        "timing:initialize": 4462,
                        "timing:initialTransition": 4463,
                        "timing:render": 4464,
                        "timing:response": 4465,
                        "timing:getString": 4829
                    },
                    security_devicePassword_index: {
                        "timing:overall": 2609,
                        "timing:load": 4476,
                        "timing:initialize": 4477,
                        "timing:initialTransition": 4478,
                        "timing:render": 4479,
                        "timing:response": 4480,
                        "timing:getString": 4832
                    },
                    security_2svBackupCodes: {
                        "timing:overall": 2612,
                        "timing:load": 4491,
                        "timing:initialize": 4492,
                        "timing:initialTransition": 4493,
                        "timing:render": 4494,
                        "timing:response": 4495,
                        "timing:getString": 4835
                    },
                    security_list_index: {
                        "timing:overall": 2615,
                        "timing:load": 4506,
                        "timing:initialize": 4507,
                        "timing:initialTransition": 4508,
                        "timing:render": 4509,
                        "timing:response": 4510,
                        "timing:getString": 4838
                    },
                    security_list_credentials_password: {
                        "timing:overall": 5544,
                        "timing:load": 5543,
                        "timing:initialize": 5528,
                        "timing:initialTransition": 5545,
                        "timing:render": 5529,
                        "timing:response": 5546,
                        "timing:getString": 5547
                    },
                    security_list_credentials_changeSigninid: {
                        "timing:overall": 5557,
                        "timing:load": 5535,
                        "timing:initialize": 5558,
                        "timing:initialTransition": 5536,
                        "timing:render": 5559,
                        "timing:response": 5537,
                        "timing:getString": 5560
                    },
                    familyManagement_list_index: {
                        "timing:overall": 3907,
                        "timing:load": 4521,
                        "timing:initialize": 4522,
                        "timing:initialTransition": 4523,
                        "timing:render": 4524,
                        "timing:response": 4525,
                        "timing:getString": 4841
                    }
                },
                "create:wizard_entrance": {
                    "timing:overall": 2618,
                    "timing:load": 4536,
                    "timing:initialize": 4537,
                    "timing:initialTransition": 4538,
                    "timing:render": 4539,
                    "timing:response": 4540,
                    "timing:getString": 4844
                },
                "createAccountOC:index": {
                    "timing:overall": 3294,
                    "timing:load": 4551,
                    "timing:initialize": 4552,
                    "timing:initialTransition": 4553,
                    "timing:render": 4554,
                    "timing:response": 4555,
                    "timing:getString": 4847
                },
                "create2sv:entrance": {
                    "timing:overall": 2621,
                    "timing:load": 4566,
                    "timing:initialize": 4567,
                    "timing:initialTransition": 4568,
                    "timing:render": 4569,
                    "timing:response": 4570,
                    "timing:getString": 4850
                },
                privacy: {
                    index: {
                        "timing:overall": 2630,
                        "timing:load": 4596,
                        "timing:initialize": 4597,
                        "timing:initialTransition": 4598,
                        "timing:render": 4599,
                        "timing:response": 4600,
                        "timing:getString": 4856
                    },
                    connectingWithFriends_friendRequests: {
                        "timing:overall": 2633,
                        "timing:load": 4611,
                        "timing:initialize": 4612,
                        "timing:initialTransition": 4613,
                        "timing:render": 4614,
                        "timing:response": 4615,
                        "timing:getString": 4859
                    },
                    connectingWithFriends_search: {
                        "timing:overall": 2636,
                        "timing:load": 4626,
                        "timing:initialize": 4627,
                        "timing:initialTransition": 4628,
                        "timing:render": 4629,
                        "timing:response": 4630,
                        "timing:getString": 4862
                    }
                },
                "receiveFamilyInvitation:index": {
                    "timing:overall": 3252,
                    "timing:load": 4641,
                    "timing:initialize": 4642,
                    "timing:initialTransition": 4643,
                    "timing:render": 4644,
                    "timing:response": 4645,
                    "timing:getString": 4865
                },
                resetPassword: {
                    index: {
                        "timing:overall": 2639,
                        "timing:load": 4656,
                        "timing:initialize": 4657,
                        "timing:initialTransition": 4658,
                        "timing:render": 4659,
                        "timing:response": 4660,
                        "timing:getString": 4868
                    },
                    change: {
                        "timing:overall": 2642,
                        "timing:load": 4671,
                        "timing:initialize": 4672,
                        "timing:initialTransition": 4673,
                        "timing:render": 4674,
                        "timing:response": 4675,
                        "timing:getString": 4871
                    },
                    createNewPassword: {
                        "timing:overall": 2645,
                        "timing:load": 4686,
                        "timing:initialize": 4687,
                        "timing:initialTransition": 4688,
                        "timing:render": 4689,
                        "timing:response": 4690,
                        "timing:getString": 4874
                    }
                },
                signin: {
                    ca_signinId: {
                        "timing:overall": 4995,
                        "timing:load": 4996,
                        "timing:initialize": 4997,
                        "timing:initialTransition": 4998,
                        "timing:render": 4999,
                        "timing:response": 5e3,
                        "timing:getString": 5001
                    },
                    ca_signinPassword: {
                        "timing:overall": 5016,
                        "timing:load": 5017,
                        "timing:initialize": 5018,
                        "timing:initialTransition": 5019,
                        "timing:render": 5020,
                        "timing:response": 5021,
                        "timing:getString": 5022
                    },
                    entrance: {
                        timing: {
                            overall: 2651,
                            load: 4701,
                            initialize: 4702,
                            initialTransition: 4703,
                            render: 4704,
                            response: 4705,
                            getString: 4877
                        }
                    },
                    verify_authenticated: {
                        "timing:overall": 2624,
                        "timing:load": 4581,
                        "timing:initialize": 4582,
                        "timing:initialTransition": 4583,
                        "timing:render": 4584,
                        "timing:response": 4585,
                        "timing:getString": 4853
                    },
                    tosuaReacceptance_index: {
                        "timing:overall": 4918,
                        "timing:load": 4919,
                        "timing:initialize": 4920,
                        "timing:initialTransition": 4921,
                        "timing:render": 4922,
                        "timing:response": 4923,
                        "timing:getString": 4924
                    },
                    tosuaReacceptance_masterHelpNeeded: {
                        "timing:overall": 4939,
                        "timing:load": 4940,
                        "timing:initialize": 4941,
                        "timing:initialTransition": 4942,
                        "timing:render": 4943,
                        "timing:response": 4944,
                        "timing:getString": 4945
                    },
                    revalidatePassword: {
                        "timing:overall": 4960,
                        "timing:load": 4961,
                        "timing:initialize": 4962,
                        "timing:initialTransition": 4963,
                        "timing:render": 4964,
                        "timing:response": 4965,
                        "timing:getString": 4966
                    }
                },
                "signin2sv:code": {
                    "timing:overall": 2654,
                    "timing:load": 4716,
                    "timing:initialize": 4717,
                    "timing:initialTransition": 4718,
                    "timing:render": 4719,
                    "timing:response": 4720,
                    "timing:getString": 4880
                },
                "terminator:done": {
                    "timing:overall": 2667,
                    "timing:load": 4731,
                    "timing:initialize": 4732,
                    "timing:initialTransition": 4733,
                    "timing:render": 4734,
                    "timing:response": 4735,
                    "timing:getString": 4883
                },
                "upgrade:entrance": {
                    "timing:overall": 2660,
                    "timing:load": 4746,
                    "timing:initialize": 4747,
                    "timing:initialTransition": 4748,
                    "timing:render": 4749,
                    "timing:response": 4750,
                    "timing:getString": 4886
                },
                verifyEmail: {
                    index: {
                        "timing:overall": 2663,
                        "timing:load": 4761,
                        "timing:initialize": 4762,
                        "timing:initialTransition": 4763,
                        "timing:render": 4764,
                        "timing:response": 4765,
                        "timing:getString": 4889
                    }
                }
            },
            "android:pdr": {
                "about:index": {
                    "timing:overall": 2586,
                    "timing:load": 4331,
                    "timing:initialize": 4332,
                    "timing:initialTransition": 4333,
                    "timing:render": 4334,
                    "timing:response": 4335,
                    "timing:getString": 4803
                },
                "avatar:index": {
                    "timing:overall": 3256,
                    "timing:load": 4346,
                    "timing:initialize": 4347,
                    "timing:initialTransition": 4348,
                    "timing:render": 4349,
                    "timing:response": 4350,
                    "timing:getString": 4806
                },
                cam: {
                    index: {
                        "timing:overall": 2589,
                        "timing:load": 4361,
                        "timing:initialize": 4362,
                        "timing:initialTransition": 4363,
                        "timing:render": 4364,
                        "timing:response": 4365,
                        "timing:getString": 4809
                    },
                    easySignin_code_enter: {
                        "timing:overall": 2592,
                        "timing:load": 4376,
                        "timing:initialize": 4377,
                        "timing:initialTransition": 4378,
                        "timing:render": 4379,
                        "timing:response": 4380,
                        "timing:getString": 4812
                    },
                    personalInfo_list_index: {
                        "timing:overall": 5498,
                        "timing:load": 5499,
                        "timing:initialize": 5500,
                        "timing:initialTransition": 5501,
                        "timing:render": 5502,
                        "timing:response": 5503,
                        "timing:getString": 5504
                    },
                    privacySettings_index: {
                        "timing:overall": 2595,
                        "timing:load": 4391,
                        "timing:initialize": 4392,
                        "timing:initialTransition": 4393,
                        "timing:render": 4394,
                        "timing:response": 4395,
                        "timing:getString": 4815
                    },
                    privacySettings_group_index: {
                        "timing:overall": 2598,
                        "timing:load": 4406,
                        "timing:initialize": 4407,
                        "timing:initialTransition": 4408,
                        "timing:render": 4409,
                        "timing:response": 4410,
                        "timing:getString": 4818
                    },
                    privacySettings_group_item: {
                        "timing:overall": 2601,
                        "timing:load": 4421,
                        "timing:initialize": 4422,
                        "timing:initialTransition": 4423,
                        "timing:render": 4424,
                        "timing:response": 4425,
                        "timing:getString": 4821
                    },
                    psnProfile_list_index: {
                        "timing:overall": 3259,
                        "timing:load": 4436,
                        "timing:initialize": 4437,
                        "timing:initialTransition": 4438,
                        "timing:render": 4439,
                        "timing:response": 4440,
                        "timing:getString": 4824
                    },
                    psnProfile_list_avatar_index: {
                        "timing:overall": 3262,
                        "timing:load": 4451,
                        "timing:initialize": 4452,
                        "timing:initialTransition": 4453,
                        "timing:render": 4454,
                        "timing:response": 4455,
                        "timing:getString": 4827
                    },
                    psnProfile_list_onlineId_paid: {
                        "timing:overall": 5387,
                        "timing:load": 5388,
                        "timing:initialize": 5389,
                        "timing:initialTransition": 5390,
                        "timing:render": 5391,
                        "timing:response": 5392,
                        "timing:getString": 5393
                    },
                    psnProfile_list_profilePicture_index: {
                        "timing:overall": 3265,
                        "timing:load": 4466,
                        "timing:initialize": 4467,
                        "timing:initialTransition": 4468,
                        "timing:render": 4469,
                        "timing:response": 4470,
                        "timing:getString": 4830
                    },
                    security_devicePassword_index: {
                        "timing:overall": 2610,
                        "timing:load": 4481,
                        "timing:initialize": 4482,
                        "timing:initialTransition": 4483,
                        "timing:render": 4484,
                        "timing:response": 4485,
                        "timing:getString": 4833
                    },
                    security_2svBackupCodes: {
                        "timing:overall": 2613,
                        "timing:load": 4496,
                        "timing:initialize": 4497,
                        "timing:initialTransition": 4498,
                        "timing:render": 4499,
                        "timing:response": 4500,
                        "timing:getString": 4836
                    },
                    security_list_index: {
                        "timing:overall": 2616,
                        "timing:load": 4511,
                        "timing:initialize": 4512,
                        "timing:initialTransition": 4513,
                        "timing:render": 4514,
                        "timing:response": 4515,
                        "timing:getString": 4839
                    },
                    security_list_credentials_password: {
                        "timing:overall": 5548,
                        "timing:load": 5530,
                        "timing:initialize": 5549,
                        "timing:initialTransition": 5531,
                        "timing:render": 5550,
                        "timing:response": 5532,
                        "timing:getString": 5551
                    },
                    security_list_credentials_changeSigninid: {
                        "timing:overall": 5561,
                        "timing:load": 5562,
                        "timing:initialize": 5538,
                        "timing:initialTransition": 5563,
                        "timing:render": 5539,
                        "timing:response": 5564,
                        "timing:getString": 5565
                    },
                    familyManagement_list_index: {
                        "timing:overall": 3908,
                        "timing:load": 4526,
                        "timing:initialize": 4527,
                        "timing:initialTransition": 4528,
                        "timing:render": 4529,
                        "timing:response": 4530,
                        "timing:getString": 4842
                    }
                },
                "create:wizard_entrance": {
                    "timing:overall": 2619,
                    "timing:load": 4541,
                    "timing:initialize": 4542,
                    "timing:initialTransition": 4543,
                    "timing:render": 4544,
                    "timing:response": 4545,
                    "timing:getString": 4845
                },
                "createAccountOC:index": {
                    "timing:overall": 3295,
                    "timing:load": 4556,
                    "timing:initialize": 4557,
                    "timing:initialTransition": 4558,
                    "timing:render": 4559,
                    "timing:response": 4560,
                    "timing:getString": 4848
                },
                "create2sv:entrance": {
                    "timing:overall": 2622,
                    "timing:load": 4571,
                    "timing:initialize": 4572,
                    "timing:initialTransition": 4573,
                    "timing:render": 4574,
                    "timing:response": 4575,
                    "timing:getString": 4851
                },
                privacy: {
                    index: {
                        "timing:overall": 2631,
                        "timing:load": 4601,
                        "timing:initialize": 4602,
                        "timing:initialTransition": 4603,
                        "timing:render": 4604,
                        "timing:response": 4605,
                        "timing:getString": 4857
                    },
                    connectingWithFriends_friendRequests: {
                        "timing:overall": 2634,
                        "timing:load": 4616,
                        "timing:initialize": 4617,
                        "timing:initialTransition": 4618,
                        "timing:render": 4619,
                        "timing:response": 4620,
                        "timing:getString": 4860
                    },
                    connectingWithFriends_search: {
                        "timing:overall": 2637,
                        "timing:load": 4631,
                        "timing:initialize": 4632,
                        "timing:initialTransition": 4633,
                        "timing:render": 4634,
                        "timing:response": 4635,
                        "timing:getString": 4863
                    }
                },
                "receiveFamilyInvitation:index": {
                    "timing:overall": 3253,
                    "timing:load": 4646,
                    "timing:initialize": 4647,
                    "timing:initialTransition": 4648,
                    "timing:render": 4649,
                    "timing:response": 4650,
                    "timing:getString": 4866
                },
                resetPassword: {
                    index: {
                        "timing:overall": 2640,
                        "timing:load": 4661,
                        "timing:initialize": 4662,
                        "timing:initialTransition": 4663,
                        "timing:render": 4664,
                        "timing:response": 4665,
                        "timing:getString": 4869
                    },
                    change: {
                        "timing:overall": 2643,
                        "timing:load": 4676,
                        "timing:initialize": 4677,
                        "timing:initialTransition": 4678,
                        "timing:render": 4679,
                        "timing:response": 4680,
                        "timing:getString": 4872
                    },
                    createNewPassword: {
                        "timing:overall": 2646,
                        "timing:load": 4691,
                        "timing:initialize": 4692,
                        "timing:initialTransition": 4693,
                        "timing:render": 4694,
                        "timing:response": 4695,
                        "timing:getString": 4875
                    }
                },
                signin: {
                    ca_signinId: {
                        "timing:overall": 5002,
                        "timing:load": 5003,
                        "timing:initialize": 5004,
                        "timing:initialTransition": 5005,
                        "timing:render": 5006,
                        "timing:response": 5007,
                        "timing:getString": 5008
                    },
                    ca_signinPassword: {
                        "timing:overall": 5023,
                        "timing:load": 5024,
                        "timing:initialize": 5025,
                        "timing:initialTransition": 5026,
                        "timing:render": 5027,
                        "timing:response": 5028,
                        "timing:getString": 5029
                    },
                    entrance: {
                        "timing:overall": 2652,
                        "timing:load": 4706,
                        "timing:initialize": 4707,
                        "timing:initialTransition": 4708,
                        "timing:render": 4709,
                        "timing:response": 4710,
                        "timing:getString": 4878
                    },
                    verify_authenticated: {
                        "timing:overall": 2625,
                        "timing:load": 4586,
                        "timing:initialize": 4587,
                        "timing:initialTransition": 4588,
                        "timing:render": 4589,
                        "timing:response": 4590,
                        "timing:getString": 4854
                    },
                    tosuaReacceptance_index: {
                        "timing:overall": 4925,
                        "timing:load": 4926,
                        "timing:initialize": 4927,
                        "timing:initialTransition": 4928,
                        "timing:render": 4929,
                        "timing:response": 4930,
                        "timing:getString": 4931
                    },
                    tosuaReacceptance_masterHelpNeeded: {
                        "timing:overall": 4946,
                        "timing:load": 4947,
                        "timing:initialize": 4948,
                        "timing:initialTransition": 4949,
                        "timing:render": 4950,
                        "timing:response": 4951,
                        "timing:getString": 4952
                    },
                    revalidatePassword: {
                        "timing:overall": 4967,
                        "timing:load": 4968,
                        "timing:initialize": 4969,
                        "timing:initialTransition": 4970,
                        "timing:render": 4971,
                        "timing:response": 4972,
                        "timing:getString": 4973
                    }
                },
                "signin2sv:code": {
                    "timing:overall": 2655,
                    "timing:load": 4721,
                    "timing:initialize": 4722,
                    "timing:initialTransition": 4723,
                    "timing:render": 4724,
                    "timing:response": 4725,
                    "timing:getString": 4881
                },
                "terminator:done": {
                    "timing:overall": 2658,
                    "timing:load": 4736,
                    "timing:initialize": 4737,
                    "timing:initialTransition": 4738,
                    "timing:render": 4739,
                    "timing:response": 4740,
                    "timing:getString": 4884
                },
                "upgrade:entrance": {
                    "timing:overall": 2661,
                    "timing:load": 4751,
                    "timing:initialize": 4752,
                    "timing:initialTransition": 4753,
                    "timing:render": 4754,
                    "timing:response": 4755,
                    "timing:getString": 4887
                },
                verifyEmail: {
                    index: {
                        "timing:overall": 2664,
                        "timing:load": 4766,
                        "timing:initialize": 4767,
                        "timing:initialTransition": 4768,
                        "timing:render": 4769,
                        "timing:response": 4770,
                        "timing:getString": 4890
                    }
                }
            },
            "ios:pdr": {
                "about:index": {
                    "timing:overall": 2587,
                    "timing:load": 4336,
                    "timing:initialize": 4337,
                    "timing:initialTransition": 4338,
                    "timing:render": 4339,
                    "timing:response": 4340,
                    "timing:getString": 4804
                },
                "avatar:index": {
                    "timing:overall": 3257,
                    "timing:load": 4351,
                    "timing:initialize": 4352,
                    "timing:initialTransition": 4353,
                    "timing:render": 4354,
                    "timing:response": 4355,
                    "timing:getString": 4807
                },
                cam: {
                    index: {
                        "timing:overall": 2590,
                        "timing:load": 4366,
                        "timing:initialize": 4367,
                        "timing:initialTransition": 4368,
                        "timing:render": 4369,
                        "timing:response": 4370,
                        "timing:getString": 4810
                    },
                    easySignin_code_enter: {
                        "timing:overall": 2593,
                        "timing:load": 4381,
                        "timing:initialize": 4382,
                        "timing:initialTransition": 4383,
                        "timing:render": 4384,
                        "timing:response": 4385,
                        "timing:getString": 4813
                    },
                    personalInfo_list_index: {
                        "timing:overall": 5505,
                        "timing:load": 5506,
                        "timing:initialize": 5507,
                        "timing:initialTransition": 5508,
                        "timing:render": 5509,
                        "timing:response": 5510,
                        "timing:getString": 5511
                    },
                    privacySettings_index: {
                        "timing:overall": 2596,
                        "timing:load": 4396,
                        "timing:initialize": 4397,
                        "timing:initialTransition": 4398,
                        "timing:render": 4399,
                        "timing:response": 4400,
                        "timing:getString": 4816
                    },
                    privacySettings_group_index: {
                        "timing:overall": 2599,
                        "timing:load": 4411,
                        "timing:initialize": 4412,
                        "timing:initialTransition": 4413,
                        "timing:render": 4414,
                        "timing:response": 4415,
                        "timing:getString": 4819
                    },
                    privacySettings_group_item: {
                        "timing:overall": 2602,
                        "timing:load": 4426,
                        "timing:initialize": 4427,
                        "timing:initialTransition": 4428,
                        "timing:render": 4429,
                        "timing:response": 4430,
                        "timing:getString": 4822
                    },
                    psnProfile_list_index: {
                        "timing:overall": 3260,
                        "timing:load": 4441,
                        "timing:initialize": 4442,
                        "timing:initialTransition": 4443,
                        "timing:render": 4444,
                        "timing:response": 4445,
                        "timing:getString": 4825
                    },
                    psnProfile_list_avatar_index: {
                        "timing:overall": 3263,
                        "timing:load": 4456,
                        "timing:initialize": 4457,
                        "timing:initialTransition": 4458,
                        "timing:render": 4459,
                        "timing:response": 4460,
                        "timing:getString": 4828
                    },
                    psnProfile_list_onlineId_paid: {
                        "timing:overall": 5394,
                        "timing:load": 5395,
                        "timing:initialize": 5396,
                        "timing:initialTransition": 5397,
                        "timing:render": 5398,
                        "timing:response": 5399,
                        "timing:getString": 5400
                    },
                    psnProfile_list_profilePicture_index: {
                        "timing:overall": 3266,
                        "timing:load": 4471,
                        "timing:initialize": 4472,
                        "timing:initialTransition": 4473,
                        "timing:render": 4474,
                        "timing:response": 4475,
                        "timing:getString": 4831
                    },
                    security_devicePassword_index: {
                        "timing:overall": 2611,
                        "timing:load": 4486,
                        "timing:initialize": 4487,
                        "timing:initialTransition": 4488,
                        "timing:render": 4489,
                        "timing:response": 4490,
                        "timing:getString": 4834
                    },
                    security_2svBackupCodes: {
                        "timing:overall": 2614,
                        "timing:load": 4501,
                        "timing:initialize": 4502,
                        "timing:initialTransition": 4503,
                        "timing:render": 4504,
                        "timing:response": 4505,
                        "timing:getString": 4837
                    },
                    security_list_index: {
                        "timing:overall": 2617,
                        "timing:load": 4516,
                        "timing:initialize": 4517,
                        "timing:initialTransition": 4518,
                        "timing:render": 4519,
                        "timing:response": 4520,
                        "timing:getString": 4840
                    },
                    security_list_credentials_password: {
                        "timing:overall": 5552,
                        "timing:load": 5553,
                        "timing:initialize": 5533,
                        "timing:initialTransition": 5554,
                        "timing:render": 5534,
                        "timing:response": 5555,
                        "timing:getString": 5556
                    },
                    security_list_credentials_changeSigninid: {
                        "timing:overall": 5566,
                        "timing:load": 5540,
                        "timing:initialize": 5567,
                        "timing:initialTransition": 5541,
                        "timing:render": 5568,
                        "timing:response": 5542,
                        "timing:getString": 5569
                    },
                    familyManagement_list_index: {
                        "timing:overall": 3909,
                        "timing:load": 4531,
                        "timing:initialize": 4532,
                        "timing:initialTransition": 4533,
                        "timing:render": 4534,
                        "timing:response": 4535,
                        "timing:getString": 4843
                    }
                },
                "create:wizard_entrance": {
                    "timing:overall": 2620,
                    "timing:load": 4546,
                    "timing:initialize": 4547,
                    "timing:initialTransition": 4548,
                    "timing:render": 4549,
                    "timing:response": 4550,
                    "timing:getString": 4846
                },
                "createAccountOC:index": {
                    "timing:overall": 3296,
                    "timing:load": 4561,
                    "timing:initialize": 4562,
                    "timing:initialTransition": 4563,
                    "timing:render": 4564,
                    "timing:response": 4565,
                    "timing:getString": 4849
                },
                "create2sv:entrance": {
                    "timing:overall": 2623,
                    "timing:load": 4576,
                    "timing:initialize": 4577,
                    "timing:initialTransition": 4578,
                    "timing:render": 4579,
                    "timing:response": 4580,
                    "timing:getString": 4852
                },
                privacy: {
                    index: {
                        "timing:overall": 2632,
                        "timing:load": 4606,
                        "timing:initialize": 4607,
                        "timing:initialTransition": 4608,
                        "timing:render": 4609,
                        "timing:response": 4610,
                        "timing:getString": 4858
                    },
                    connectingWithFriends_friendRequests: {
                        "timing:overall": 2635,
                        "timing:load": 4621,
                        "timing:initialize": 4622,
                        "timing:initialTransition": 4623,
                        "timing:render": 4624,
                        "timing:response": 4625,
                        "timing:getString": 4861
                    },
                    connectingWithFriends_search: {
                        "timing:overall": 2638,
                        "timing:load": 4636,
                        "timing:initialize": 4637,
                        "timing:initialTransition": 4638,
                        "timing:render": 4639,
                        "timing:response": 4640,
                        "timing:getString": 4864
                    }
                },
                "receiveFamilyInvitation:index": {
                    "timing:overall": 3254,
                    "timing:load": 4651,
                    "timing:initialize": 4652,
                    "timing:initialTransition": 4653,
                    "timing:render": 4654,
                    "timing:response": 4655,
                    "timing:getString": 4867
                },
                resetPassword: {
                    index: {
                        "timing:overall": 2641,
                        "timing:load": 4666,
                        "timing:initialize": 4667,
                        "timing:initialTransition": 4668,
                        "timing:render": 4669,
                        "timing:response": 4670,
                        "timing:getString": 4870
                    },
                    change: {
                        "timing:overall": 2644,
                        "timing:load": 4681,
                        "timing:initialize": 4682,
                        "timing:initialTransition": 4683,
                        "timing:render": 4684,
                        "timing:response": 4685,
                        "timing:getString": 4873
                    },
                    createNewPassword: {
                        "timing:overall": 2647,
                        "timing:load": 4696,
                        "timing:initialize": 4697,
                        "timing:initialTransition": 4698,
                        "timing:render": 4699,
                        "timing:response": 4700,
                        "timing:getString": 4876
                    }
                },
                signin: {
                    ca_signinId: {
                        "timing:overall": 5009,
                        "timing:load": 5010,
                        "timing:initialize": 5011,
                        "timing:initialTransition": 5012,
                        "timing:render": 5013,
                        "timing:response": 5014,
                        "timing:getString": 5015
                    },
                    ca_signinPassword: {
                        "timing:overall": 5030,
                        "timing:load": 5031,
                        "timing:initialize": 5032,
                        "timing:initialTransition": 5033,
                        "timing:render": 5034,
                        "timing:response": 5035,
                        "timing:getString": 5036
                    },
                    entrance: {
                        "timing:overall": 2653,
                        "timing:load": 4711,
                        "timing:initialize": 4712,
                        "timing:initialTransition": 4713,
                        "timing:render": 4714,
                        "timing:response": 4715,
                        "timing:getString": 4879
                    },
                    verify_authenticated: {
                        "timing:overall": 2626,
                        "timing:load": 4591,
                        "timing:initialize": 4592,
                        "timing:initialTransition": 4593,
                        "timing:render": 4594,
                        "timing:response": 4595,
                        "timing:getString": 4855
                    },
                    tosuaReacceptance_index: {
                        "timing:overall": 4932,
                        "timing:load": 4933,
                        "timing:initialize": 4934,
                        "timing:initialTransition": 4935,
                        "timing:render": 4936,
                        "timing:response": 4937,
                        "timing:getString": 4938
                    },
                    tosuaReacceptance_masterHelpNeeded: {
                        "timing:overall": 4953,
                        "timing:load": 4954,
                        "timing:initialize": 4955,
                        "timing:initialTransition": 4956,
                        "timing:render": 4957,
                        "timing:response": 4958,
                        "timing:getString": 4959
                    },
                    revalidatePassword: {
                        "timing:overall": 4974,
                        "timing:load": 4975,
                        "timing:initialize": 4976,
                        "timing:initialTransition": 4977,
                        "timing:render": 4978,
                        "timing:response": 4979,
                        "timing:getString": 4980
                    }
                },
                "signin2sv:code": {
                    "timing:overall": 2656,
                    "timing:load": 4726,
                    "timing:initialize": 4727,
                    "timing:initialTransition": 4728,
                    "timing:render": 4729,
                    "timing:response": 4730,
                    "timing:getString": 4882
                },
                "terminator:done": {
                    "timing:overall": 2659,
                    "timing:load": 4741,
                    "timing:initialize": 4742,
                    "timing:initialTransition": 4743,
                    "timing:render": 4744,
                    "timing:response": 4745,
                    "timing:getString": 4885
                },
                "upgrade:entrance": {
                    "timing:overall": 2662,
                    "timing:load": 4756,
                    "timing:initialize": 4757,
                    "timing:initialTransition": 4758,
                    "timing:render": 4759,
                    "timing:response": 4760,
                    "timing:getString": 4888
                },
                verifyEmail: {
                    index: {
                        "timing:overall": 2665,
                        "timing:load": 4771,
                        "timing:initialize": 4772,
                        "timing:initialTransition": 4773,
                        "timing:render": 4774,
                        "timing:response": 4775,
                        "timing:getString": 4891
                    }
                }
            },
            "amazon:pdr": {
                "createAccountOcTv:index": {
                    "timing:overall": 5473,
                    "timing:load": 5474,
                    "timing:initialize": 5475,
                    "timing:initialTransition": 5476,
                    "timing:render": 5477,
                    "timing:response": 5478,
                    "timing:getString": 5479
                }
            }
        },
        i = {
            getMetricsMap: function() {
                var e = this,
                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n
                return Object.keys(i).reduce((function(n, r) {
                    if ("object" === t(i[r]) && i[r]) {
                        var a = e.getMetricsMap(i[r])
                        Object.keys(a).forEach((function(e) {
                            n["".concat(r, ":").concat(e)] = a[e]
                        }))
                    } else n[r] = i[r]
                    return n
                }), {})
            }
        }
    e.default = i
})), define("kekka/utils/deo", ["exports"], (function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(e) {
        for (var t = atob(e), n = "", i = 0, r = t.length - 1; i <= r; ++i) n += t[r - i]
        return atob(n).toString()
    }
})), define("kekka/utils/device-detection", ["exports"], (function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.detectOS = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent
        if (/Windows Phone/i.test(e)) return "Windows Phone"
        if (/Android/i.test(e)) return "Android"
        if (/iPad|iPhone|iPod/i.test(e)) return "iOS"
        if (/Windows/i.test(e)) return "Windows"
        if (/Mac OS X/.test(e)) return "Mac OS X"
        return "Others"
    }, e.detectOSVersion = function(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.navigator.userAgent
        switch (e) {
            case "Windows Phone":
                t = "Windows Phone (?:OS )?"
                break
            case "Android":
                t = "Android "
                break
            case "iOS":
                t = "OS "
                break
            case "Windows":
                t = "Windows (?:NT )?"
                break
            case "Mac OS X":
                t = "Mac OS X "
        }
        if (t) {
            var i = new RegExp("".concat(t, "([0-9._]+)"), "i").exec(n)
            if (i && i.length > 1) return i[1]
        }
        return "0.0.0"
    }, e.isAndroidLowerThanKitkat = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
            t = e.toLowerCase().match(/android\s([0-9\.]*)/)
        if (t) {
            var n = t[1]
            if (!n || parseFloat(n) < 4.4) return !0
        }
        return !1
    }, e.isAndroidLowerThanLollipop = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
            t = e.toLowerCase().match(/android\s([0-9\.]*)/)
        if (t) {
            var n = t[1]
            if (!n || parseFloat(n) < 5) return !0
        }
        return !1
    }
})), define("kekka/utils/error-utils", ["exports", "hokkai/utils/error-object"], (function(e, t) {
    function n(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {}
            t % 2 ? n(Object(i), !0).forEach((function(t) {
                r(e, t, i[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : n(Object(i)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
            }))
        }
        return e
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = n.code,
            a = n.additionalInfo,
            o = void 0 === a ? {} : a,
            s = arguments.length > 2 ? arguments[2] : void 0,
            l = e || {},
            c = l.errorId,
            d = t.HokkaiErrorObject.create().importErrorInfo(i(i({}, e), {}, {
                message: r,
                additionalInfo: o
            }), s)
        return !r && c && (d.errorId = c), d
    }, e.reduceErrorObject = function(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        return null === (n = e.errorCodes) || void 0 === n ? void 0 : n.reduce((function(n, r) {
            return r === t && i(i({}, n), {}, {
                error: e,
                errorModel: {
                    code: r
                }
            })
        }), r)
    }
})), define("kekka/utils/handle-gated-scope-error", ["exports", "@ember/array"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.hasGatedScopeError = function(e) {
        var t = [].concat(n, i)
        return r(e, t)
    }, e.isRequiredGatedScope = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
        return r(e, i) || t
    }
    var n = ["AUTH_INVALID_PASSWORD", "AUTH_TOKEN_NOT_FOUND", "AUTH_TOKEN_EXPIRED", "AUTH_TOKEN_INVALID"],
        i = ["AUTH_PASSWORD_GATING_REQUIRED", "AUTH_TOKEN_REQUIRED_WITH_SCOPES"],
        r = function(e, n) {
            return ((0, t.isArray)(e) ? e : [e]).some((function(e) {
                var i = e.errorCodes
                return (0, t.isArray)(i) && i.some((function(e) {
                    return n.includes(e)
                }))
            }))
        }
}))
define("kekka/utils/header-controller", ["exports", "@ember/runloop"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = {
            init: function(e, t, n, i, r) {
                return this._animationEnabled = t, this._scrollPos = 0, this._pos = 0, this._onTransitionend = n, this.updateElement(e, i, r), this
            },
            updateElement: function(e, t, n) {
                var i = this
                this._$elem && this._$elem.off("transitionend"), this._$elem = e, this._size = e.height(), this._showHeaderPosition = this._size - (t || this._size), this._itemRowSize = n, this._onTransitionend && this._$elem.on("transitionend", (function() {
                    i._size = e.height(), i._onTransitionend()
                }))
            },
            onResize: function(e) {
                this._size = this._$elem.height(), this._showHeaderPosition = this._size - (e || this._size)
            },
            onScroll: function(e, t) {
                var n = this._size,
                    i = Math.min(Math.max(this._pos + t, 0), n)
                t < 0 && i < this._showHeaderPosition && e + this._itemRowSize > this._size && (i = this._showHeaderPosition), this._scrollPos = e, i !== this._pos && this._setPos(i)
            },
            onEndScroll: function() {
                var e = this._pos
                e > 0 && e < this._size && (this._size < this._scrollPos ? e = this._size : e < this._scrollPos && (e = this._scrollPos), e !== this._pos && this._setPos(e, !0))
            },
            isHideHeader: function() {
                return this._pos > this._showHeaderPosition
            },
            resetPosition: function() {
                this._setPos(0, !0)
            },
            _setPos: function(e, n) {
                this._pos !== e ? (this._pos = e, n && this._animationEnabled ? this._$elem.css(i.get("transition"), "500ms -webkit-transform ease") : (this._$elem.css(i.get("transition"), ""), this._onTransitionend && (0, t.next)(this._onTransitionend)), this._$elem.css(i.get("transform"), "translate3d(0px,-".concat(e, "px,0)"))) : this._onTransitionend && this._onTransitionend()
            }
        },
        i = {
            get: function(e) {
                var t, n, i
                if (!this._cache[e])
                    for (t = document.body.style, n = 0, i = this._prefix.length; n < i; ++n)
                        if ("" === t[e.split("-").reduce((function(e, t) {
                                return e.length ? e + t.charAt(0).toUpperCase() + t.substring(1) : t
                            }), this._prefix[n].js)]) {
                            this._cache[e] = this._prefix[n].css + e
                            break
                        }
                return this._cache[e]
            },
            _prefix: [{
                js: "",
                css: ""
            }, {
                js: "Webkit",
                css: "-webkit-"
            }, {
                js: "Moz",
                css: "-moz-"
            }, {
                js: "ms",
                css: "-ms-"
            }, {
                js: "O",
                css: "-o-"
            }],
            _cache: {}
        },
        r = {
            create: function() {
                var e
                return (e = Object.create(n)).init.apply(e, arguments)
            }
        }
    e.default = r
})), define("kekka/utils/image-utils", ["exports", "rsvp"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function(e) {
        return new t.Promise((function(t, n) {
            window.loadImage(e, (function(e) {
                return e instanceof Event && "error" === e.type ? n(e) : t(e)
            }))
        })).then((function(n) {
            var i, r = function(e, t) {
                var n = e.naturalWidth / e.naturalHeight
                return n > 1 ? Math.floor(Math.sqrt(t / n)) : Math.floor(Math.sqrt(t * n))
            }(n, 2097152);
            (function() {
                if (/(iPhone|iPad|iPod|iPod touch);/.test(window.navigator.userAgent)) {
                    if (parseInt(navigator.appVersion.match(/OS (\d+)_/)[1], 10) < 8) return !0
                }
            })() ? (i = document.createElement("canvas"), new window.MegaPixImage(n).render(i, {
                maxWidth: r,
                maxHeight: r
            })) : i = window.loadImage.scale(n, {
                maxHeight: r,
                maxWidth: r,
                canvas: !0
            })
            return function(e, n) {
                return new t.Promise((function(t, i) {
                    window.loadImage.parseMetaData(n, (function(n) {
                        if (n instanceof Event && "error" === n.type) return i(n)
                        n.exif && (e = window.loadImage.scale(e, {
                            orientation: n.exif.get("Orientation"),
                            canvas: !0
                        })), t(e)
                    }))
                }))
            }(i, e)
        }))
    }
})), define("kekka/utils/local-storage-utils", ["exports"], (function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getLocal = function(e) {
        var t = localStorage["pdr-".concat(e)]
        if (t) {
            var n = JSON.parse(t)
            if (n.life) {
                var i = n.life.seconds
                if (i > 0 && n.life.saved + i < Math.round(Date.now() / 1e3)) return null
            }
            return n.data
        }
    }, e.putLocal = function(e, t, n) {
        localStorage["pdr-".concat(e)] = JSON.stringify({
            data: t,
            life: {
                saved: Math.round(Date.now() / 1e3),
                seconds: n || 0
            }
        })
    }, e.removeLocal = function(e) {
        localStorage.removeItem("pdr-".concat(e))
    }
})), define("kekka/utils/pdr-datetime-utils", ["exports", "@ember/utils", "hokkai/utils/string-utils", "hokkai/utils/datetime-utils"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.EXT_DATE_OPTION = void 0, e.formatDuration = o, e.formatPlaytime = function(e, i, r) {
        var s = !(0, t.isEmpty)(e) && e < 1440 ? o(e) : null,
            l = !(0, t.isEmpty)(i) && i > 0 ? a(i) : null,
            c = !(0, t.isEmpty)(r) && r < 1440 ? a(r) : null,
            d = [s, l, c].filter((function(e) {
                return e
            })),
            u = function() {
                switch (d.length) {
                    case 0:
                        return "msg_not_restrict"
                    case 1:
                        if ((0, t.isPresent)(s)) return "msg_play_time_duration_and_hours_0"
                        if ((0, t.isPresent)(l)) return "msg_play_time_duration_and_hours_6"
                        if ((0, t.isPresent)(c)) return "msg_play_time_duration_and_hours_5"
                        break
                    case 2:
                        if ((0, t.isEmpty)(s)) return "msg_play_time_duration_and_hours_4"
                        if ((0, t.isEmpty)(l)) return "msg_play_time_duration_and_hours_2"
                        if ((0, t.isEmpty)(c)) return "msg_play_time_duration_and_hours_3"
                        break
                    case 3:
                        return "msg_play_time_duration_and_hours_1"
                }
            }()
        return (0, n.localizeString)(u, d).toString()
    }, e.formatTime = a, e.getIntervalString = function(e, t) {
        var i = new Date,
            r = 6e4,
            a = 36e5,
            o = new Date(e),
            s = i - o,
            l = "",
            c = t
        if (c = (c = (c = c.replace(/dd/i, o.getDate())).replace(/MM/i, o.getMonth() + 1)).replace(/yyyy/i, o.getFullYear()), s < r) l = (0, n.localizeString)("msg_invitation_just_now").toString()
        else if (s < 12e4) l = (0, n.localizeString)("msg_invitation_one_minute_ago").toString()
        else if (s < a) {
            var d = Math.floor(s / r)
            l = (0, n.localizeString)("msg_invitation_variable_minutes_ago", d.toString()).toString()
        } else if (s < 72e5) l = (0, n.localizeString)("msg_invitation_one_hour_ago").toString()
        else if (s < 864e5) {
            var u = Math.floor(s / a)
            l = (0, n.localizeString)("msg_invitation_variable_hours_ago", u.toString()).toString()
        } else l = c
        return {
            requestSentDate: c,
            interval: l,
            intervalMillisecond: s
        }
    }
    var r = Object.freeze({
        timeFormat: 12,
        timeFormat12AM: "msg_am_variable",
        timeFormat12PM: "msg_pm_variable",
        timeSeparator: "msg_time_separator"
    })

    function a(e) {
        return new i.ExtDate(r).getTimeInDay(e)
    }

    function o(e) {
        var t = Math.floor(e / 60),
            i = e % 60
        return t > 0 ? i > 0 ? (0, n.localizeString)("msg_duration_hhmm", [t, i]).toString() : (0, n.localizeString)("msg_duration_hh", [t]).toString() : (0, n.localizeString)("msg_duration_mm", [i]).toString()
    }
    e.EXT_DATE_OPTION = r
})), define("kekka/utils/promise-factory", ["exports", "rsvp"], (function(e, t) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var n = {
        create: function(e, n) {
            return new t.Promise(e, n)
        },
        all: function(e) {
            return t.Promise.all(e)
        }
    }
    e.default = n
})), define("kekka/utils/settings-templates", ["exports", "@ember/array", "@ember/object", "@ember/string", "@ember/utils", "hokkai/utils/node-utils"], (function(e, t, n, i, r, a) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var o = ["default_value", "default_value_subaccount", "nodes", "resources"]

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function l(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t && (i = i.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2 ? l(Object(n), !0).forEach((function(t) {
                d(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e, t) {
        if (null == e) return {}
        var n, i, r = function(e, t) {
            if (null == e) return {}
            var n, i, r = {},
                a = Object.keys(e)
            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
        }(e, t)
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e)
            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }
    var p = {
            filterTree: function(e) {
                return a.default.filterTree(this, e)
            },
            getChangeValues: function() {
                var e = this,
                    t = []
                return a.default.traverseTree(this, (function(n) {
                    n.screenValue !== (n.get("selectedValue.key") || n.get("selectedValue")) && t.push({
                        itemName: n.feature_name,
                        itemValue: n.screenValue,
                        pageTitle: e.id
                    })
                })), t
            },
            getScreenValues: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.needsToBoolean,
                    n = void 0 !== t && t,
                    i = e.needsToLowercase,
                    r = void 0 === i || i,
                    o = []
                return a.default.traverseTree(this, (function(e) {
                    var t = "feature_name"
                    if (e.hasOwnProperty(t)) {
                        var i = e[t],
                            a = e.screenValue
                        o.push({
                            name: r ? i.toLowerCase() : i,
                            value: n ? "true" === a.toLowerCase() : a
                        })
                    }
                })), o
            },
            setScreenValues: function() {
                a.default.traverseTree(this, (function(e) {
                    e.isSetting && (e.screenValue = e.get("selectedValue.key") || e.get("selectedValue"))
                }))
            },
            setValues: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.needsToLowercase,
                    i = void 0 === n || n,
                    o = t.needsToString,
                    s = void 0 !== o && o
                a.default.traverseTree(this, (function(t) {
                    if (t.isSetting && !(0, r.isNone)(t.feature_name)) {
                        var n = t.feature_name,
                            a = e.findBy("name", i ? n.toLowerCase() : n)
                        t.value = a && (s ? a.value.toString() : a.value), t.screenValue = t.get("selectedValue.key") || t.get("selectedValue")
                    }
                }))
            },
            updateScreenValues: function() {
                a.default.traverseTree(this, (function(e) {
                    e.isSetting && e.set("value", e.screenValue)
                }))
            }
        },
        m = n.default.extend({
            selectedValue: (0, n.computed)("value", (function() {
                if (this.isSetting) {
                    if (this.hasAllowedValues) return this.allowed_values.findBy("key", this.value || this.defaultValue)
                    if (this.isCheckbox || this.isKillswitch) return this.value || this.defaultValue
                    var e = this.nodes.findBy("feature_name", this.feature_name)
                    return this.value || e && e.defaultValue
                }
            }))
        }),
        g = "category",
        f = ["setting"],
        h = function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = n.default_value,
                s = n.default_value_subaccount,
                l = n.nodes,
                h = n.resources,
                v = u(n, o),
                _ = (0, t.isArray)(v.allowed_values) && !!v.allowed_values.length,
                b = f.includes(v.layout),
                y = c(c(c({}, v), (0, r.isNone)(l) ? {} : p), {}, {
                    hasAllowedValues: _,
                    isCategory: v.layout === g,
                    isCheckbox: !(0, r.isNone)(v.checkbox_checked_value),
                    isKillswitch: !(0, r.isNone)(v.killswitch_checked_value),
                    isRadioButton: _ && v.allowed_values.every((function(e) {
                        return e.hasOwnProperty("description")
                    })),
                    isSetting: b,
                    isSettingContainer: b && v.additional_settings && !_
                })
            return (0, r.isNone)(a) || (y.defaultValue = i.isSubAccount ? s : a), (0, r.isNone)(l) || (y.nodes = l.map((function(t) {
                return e(t, i)
            }))), (0, r.isNone)(h) || (y.resourceMap = h.reduce((function(e, t) {
                return c(c({}, e), {}, d({}, t.id, t))
            }), {})), m.create(y)
        },
        v = function() {
            function e() {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e)
            }
            var t, n, r
            return t = e, r = [{
                key: "parseTemplate",
                value: function(e, t) {
                    return c(c({}, a.default.flattenTree(h.apply(void 0, arguments))), {}, {
                        getNode: function(e) {
                            return this[(0, i.decamelize)(e)]
                        }
                    })
                }
            }], (n = null) && s(t.prototype, n), r && s(t, r), Object.defineProperty(t, "prototype", {
                writable: !1
            }), e
        }()
    e.default = v
})), define("kekka/utils/url-utils", ["exports"], (function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e.split("&")
        return n.reduce((function(e, n) {
            var i = n.split("=")[0]
            return t.indexOf(i) > -1 ? e : (e ? "".concat(e, "&") : "") + n
        }), "")
    }
})), define("kekka/utils/validation-factory", ["exports", "rsvp", "@ember/object/computed", "@ember/object"], (function(e, t, n, i) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0
    var r = i.default.extend({
            validator: null,
            propertyName: null,
            isValid: !1,
            isNotValid: (0, n.not)("isValid"),
            error: [],
            setError: function(e) {
                this.set("isValid", !1), this.set("error", [].concat(e))
            },
            clearError: function() {
                this.set("isValid", !0), this.error.length > 0 && this.set("error", [])
            },
            validateProperty: function(e, n) {
                var i = this
                return this.validator.validateProperty(this.propertyName, e, n).then((function(e) {
                    return i.clearError(), e
                })).catch((function(e) {
                    return i.setError(e), (0, t.reject)(e)
                }))
            },
            verifyProperty: function(e, t) {
                var n = this
                return this.validator.verifyProperty(this.propertyName, e, t).then((function(e) {
                    return n.clearError(), e
                }))
            }
        }),
        a = {
            create: function(e, t) {
                return r.create({
                    validator: e,
                    propertyName: t
                })
            }
        }
    e.default = a
})), define("kekka/config/environment", [], (function() {
    var e = {
        default: {
            modulePrefix: "kekka",
            environment: "production",
            locationType: "hash",
            EmberENV: {
                I18N_COMPILE_WITHOUT_HANDLEBARS: !0,
                FEATURES: {
                    I18N_TRANSLATE_HELPER_SPAN: !1
                },
                _APPLICATION_TEMPLATE_WRAPPER: !1,
                _DEFAULT_ASYNC_OBSERVERS: !0,
                _JQUERY_INTEGRATION: !0,
                _TEMPLATE_ONLY_GLIMMER_COMPONENTS: !0
            },
            APP: {
                rootElement: "#ember-root",
                arkoseLabsPublicKeyAccountCreation: "5B50130F-E160-4D2A-BB1E-ABEC31A7AA9E",
                arkoseLabsPublicKeyAccountUpdate: "DCE65287-3F66-46A2-916B-551DA76809A7",
                arkoseLabsPublicKeyPasswordRecovery: "9869C2EE-434F-4116-A2E5-B6E1237239DA",
                arkoseLabsPublicKeySignIn: "7D857050-F609-4F6A-AF63-CD04DE665FFE",
                accountServiceURL: "https://accounts.api.playstation.com/api",
                versaResourceServiceURL: "https://secure.api.sonyentertainmentnetwork.com/3.0",
                versaUserResourceServiceURL: "https://secure.api.sonyentertainmentnetwork.com/3.0",
                authServiceURL: "https://auth.api.sonyentertainmentnetwork.com",
                authServiceURLonPlayStation: "https://id.auth.api.playstation.com",
                authV3ServiceURL: "https://ca.account.sony.com/api",
                centralAuthServiceURL: "https://ca.account.sony.com/api",
                hashedAccountIdServiceURL: "https://commerce.api.np.km.playstation.net/commerce/api",
                roadsterCanServiceURL: "https://web.np.playstation.com/api/cloudAssistedNavigation",
                catalogServiceURL: "https://web.np.playstation.com/api/catalog",
                roadsterServiceAsmURL: "https://asm.np.community.playstation.net",
                regcamServiceURL: "https://regcam.api.np.km.playstation.net/regcam/api",
                kamajiActivityURL: "https://activity.api.np.km.playstation.net/activity/api",
                kamajiFileStoreURL: "https://kfs.api.np.km.playstation.net/filestore/api",
                kamajiWalletURL: "https://kamajiwt.api.np.km.playstation.net/vl/api",
                privacyServiceURL: "https://privacysettings.api.playstation.com",
                gamelistServiceURL: "https://gamelist.api.playstation.com",
                whitelistsServiceURL: "https://accounts.api.playstation.com/api/whitelists",
                privacySettingsServiceURL: "https://privacysettings.api.playstation.com",
                templateServiceURL: "https://privacytemplate.api.playstation.com",
                templateServiceClientVersion: 9.5,
                gamelistV2ServiceURL: "https://web.np.playstation.com/api/gamelist",
                privacySettingsV2ServiceURL: "https://web.np.playstation.com/api/settings",
                templateV2ServiceURL: "https://privacytemplate.api.playstation.com/api/settingsTemplates",
                verifiedAccountServiceURL: "https://accounts.api.playstation.com/api/verifiedAccountManagement",
                socialNetworkServiceURL: "https://sn.api.np.km.playstation.net/socialnetwork/api",
                korraWalletURL: "https://wallets.api.playstation.com/api",
                prAccountCreationURL: "https://id.sonyentertainmentnetwork.com/create_account/",
                prAccountCreationURLforCA: "https://id.sonyentertainmentnetwork.com/id/create_account_ca/",
                prAccountUpgradeURL: "https://id.sonyentertainmentnetwork.com/id/upgrade_account_ca/",
                featureConfigURL: "https://id.sonyentertainmentnetwork.com/id/conf/v1/config_ca.json",
                appinfoFeaturesURL: "https://appinfo.dl.playstation.net/appinfo/np/features/features.json",
                prSigninURL: "https://my.account.sony.com/central/signin/",
                prForgotPasswordURL: "https://id.sonyentertainmentnetwork.com/id/reset_password/",
                teamInvitationConfigURL: "https://fswitch.dl.playstation.net/fswitch/np/v1/avengers/52e7a9c611cf119c5bedff91b3566cb681c139af/feature.json",
                iasServiceUrl: "https://ias.api.playstation.com",
                iasAccountServiceURL: "https://ias.api.playstation.com/api/accountsAggregation",
                iasCoppaServiceURL: "https://ias.api.playstation.com/api/coppaAggregation",
                dmsServiceUrl: "https://dms.api.playstation.com/api",
                drmServiceUrl: "https://dms.api.playstation.com/drm",
                accountManagementURL: "https://accounts.api.playstation.com/api/accountManagement",
                familyURL: "https://accounts.api.playstation.com/api/family",
                familyInvitationsURL: "https://accounts.api.playstation.com/api/familyInvitations",
                offlineAccountsURL: "https://accounts.api.playstation.com/api/offlineAccounts",
                activityTrackingURL: "https://accounts.api.playstation.com/api/activityTracking",
                communicationRestrictionStatusUrl: "https://web.np.playstation.com/api/communicationRestrictionStatus",
                restrictionsUrl: "https://web.np.playstation.com/api/restrictions",
                prCsHelpPageURL: "https://www.playstation.com/support/",
                prTwoSvMkPageURL: "https://www.playstation.com/playstation-network/two-step-verification/",
                prFamilyCsQaPageURL: "https://www.playstation.com/network/family",
                prCsCoidGamesURL: "https://www.playstation.com/onlineid/games",
                prCsCoidHelpURL: "https://www.playstation.com/onlineid/help",
                prCamSecurityURL: "https://id.sonyentertainmentnetwork.com/id/management/#/p/security",
                prFamilyManagementURL: "https://id.sonyentertainmentnetwork.com/id/management_ca/",
                prFamilyManagementURLforPSN: "https://id.sonyentertainmentnetwork.com/id/management/",
                prReturnToPrevAppURL: "https://id.sonyentertainmentnetwork.com/id/msg/return_to_prev_app/",
                prAccountLinkingURL: "https://id.sonyentertainmentnetwork.com/id/account_linking/",
                unifiedFooterBaseURL: "https://secure.cdn.us.playstation.com",
                ulinkURL: "https://link.account.sony.com",
                uidMkPageURL: "https://www.playstation.com/linking-accounts",
                clientId: "M01UTzRFRE9tTldOMlFETnRNak5rSldMaVoyTTAwU01rRkdOdEVtTmpKbU0xTUdP",
                clientSecret: "PT1nYzZoSFpZTjBRMm9VV0ZwbU5EdGtZ",
                clientId2: "eU1HWm1SV00yVVdaNElqWXRNR1pobFRMMGNETTAwaU5rQnpZdGNqTWtOVFk0VURN",
                clientSecret2: "PT1RYkJkR1d5VkdjMVluWU1aMU5FaDNj",
                clientId3: "PT13TXpNek16TXpN",
                clientSecret3: "PT13TXpNek16TXpN",
                clientId4: "PT1BTjBRRE4wUURO",
                clientSecret4: "PT1BTjBRRE4wUURO",
                clientId5: "PT1RTjFVVE4xVVRO",
                clientSecret5: "PT1RTjFVVE4xVVRO",
                clientId6: "MllHTWlKak4yWUdaNEVHTXRVak5oaFRMeUltTTAwU1ptSlROdEVETWlOV00wRWpN",
                clientSecret6: "PT1RZGtkMlpvbGpRRVZ6VTFvMFVVdDBa",
                clientId7: "PT13TjNjek4zY3pO",
                clientSecret7: "PT13TjNjek4zY3pO",
                version: "_APP_VERSION_",
                aaAccount: "snepdrglobal",
                aaLib: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/s_code.js",
                buildId: "central/signin_9dfa3802_1092_f51b85ff_0614c252",
                playStationStoreURL: "https://store.playstation.com",
                transactClientURL: "https://transact.playstation.com",
                scopeMapDefinition: {
                    signinId: ["openid:user_id"],
                    signinIdUpdate: [],
                    accountInformation: ["openid:user_id", "openid:online_id", "openid:ctry_code", "openid:lang"],
                    checkAgeGroup: ["openid:age"],
                    userInformation: ["openid:ctry_code", "openid:lang"],
                    emailVerificationCheck: ["user:account.email.create", "user:account.emailVerification.get"],
                    verifyAccount: ["user:account.email.create", "user:account.emailVerification.get", "user:account.emailVerification.update"],
                    tosuaReAcceptance: ["user:account.tosua.update"],
                    resetPassword: ["user:account.password.update"],
                    registerOnlineId: ["user:account.onlineId.update"],
                    getProfileName: ["user:account.communication.get"],
                    updateProfileName: ["user:account.communication.update", "user:account.communication.get"],
                    manageProfileName: ["user:account.communication.update.gated", "user:account.communication.get"],
                    updateProfileImage: ["kamaji:kfs_images.upload", "kamaji:kfs_images.get", "kamaji:kfs_images.delete", "user:account.communication.get", "user:account.communication.update"],
                    updateAddresses: ["user:account.address.create.gated", "user:account.address.update.gated", "user:account.address.get.gated"],
                    registerBillingInfo: ["versa:user_update_credit_cards"],
                    updatePrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update"],
                    checkSubAccount: ["openid:content_ctrl"],
                    sendUpdateSubAccountEvent: ["kamaji:activity_feed_set_feed_privacy"],
                    getPrivacySettingsFramework: ["kamaji:get_privacy_settings", "kamaji:activity_feed_get_feed_privacy", "kamaji:game_list"],
                    updatePrivacySettingsFramework: ["kamaji:set_privacy_settings.gated", "kamaji:activity_feed_set_feed_privacy"],
                    getPersonalizationSettings: ["kamaji:get_privacy_settings"],
                    updatePersonalizationSettings: ["kamaji:set_privacy_settings.gated"],
                    decideTemplateQueryParam: ["openid:user_id", "openid:ctry_code", "openid:lang", "openid:content_ctrl", "user:account.subaccounts.get", "user:verifiedAccount.get", "kamaji:account_link_user_link_account"],
                    managePrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update", "kamaji:activity_feed_get_feed_privacy", "kamaji:activity_feed_set_feed_privacy", "kamaji:game_list", "kamaji:get_privacy_settings", "kamaji:set_privacy_settings.gated", "openid:content_ctrl"],
                    setupPrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update", "kamaji:activity_feed_get_feed_privacy", "kamaji:activity_feed_set_feed_privacy", "kamaji:get_privacy_settings", "kamaji:set_privacy_settings.gated"],
                    hashedAccountId: ["kamaji:get_account_hash"],
                    devicePassword: ["oauth:manage_devicepasswords"],
                    easySignin: ["oauth:manage_device_usercodes"],
                    updateAvatarSettings: ["kamaji:get_internal_entitlements"],
                    createPhoneInformation: ["user:account.phone.create", "user:account.phone.main.update"],
                    managePhoneInformation: ["user:account.phone.create", "user:account.phone.masked.get", "user:account.phone.delete"],
                    getPhoneInformation: ["user:account.phone.masked.get"],
                    updateUserProfile: ["user:account.profile.get", "user:account.profile.update"],
                    sendPhoneVerificationCode: ["user:account.notification.create"],
                    updatePhoneInformation: ["user:account.phone.create", "user:account.phone.main.update", "user:account.phone.delete"],
                    getAuthenticationMode: ["user:account.authentication.mode.get"],
                    deactivate2SVAuthenticationMode: ["user:account.authentication.mode.update"],
                    enable2SVAuthenticationMode: ["user:account.authentication.mode.2sv.update"],
                    getTokenWithAuthenticatorCode: ["oauth:authorize_with_authenticator_code"],
                    createAuthenticatorSecret: ["user:account.authenticator.secret.post"],
                    verifyPhone: ["user:account.phone.verify"],
                    changePasswordUpdate: ["user:account.changepassword.update"],
                    changePinUpdate: ["user:account.pin.update.gated"],
                    updateSecurityAnswer: ["user:account.securityQuestionAnswer.update.strict_gated"],
                    allSignout: ["oauth:manage_user_auth_sessions", "openid:acct_uuid"],
                    canDeviceReset: ["can:context.user.get", "can:context.user.set"],
                    backupCode: ["oauth:manage_backup_codes", "openid:acct_id_str"],
                    manageFamilyMembers: ["pdr:cam.gated", "openid:acct_id_str"],
                    manageFamilyMembersSchedule: ["pdr:cam.gated"],
                    manageOfflineFamilyMembers: ["user:offline.account.role.update.gated", "user:offline.account.get.gated", "user:offline.account.update.gated"],
                    manageOfflineFamilyMembersSchedule: ["user:offline.account.parentalControls.scheduleBased.wakeupTime.update.gated", "user:offline.account.parentalControls.scheduleBased.bedTime.update.gated", "user:offline.account.parentalControls.scheduleBased.playTime.update.gated", "user:offline.account.parentalControls.scheduleBased.overrides.create.gated", "user:offline.account.parentalControls.scheduleBased.timezone.update.gated"],
                    getEmailVerificationStatus: ["user:account.emailVerification.get"],
                    getCoppaVerificationStatus: ["user:account.coppa.get"],
                    verifyCoppa: ["user:account.coppa.validate.gated"],
                    updateOfflineFamilyMember: ["user:offline.account.update.gated"],
                    subAccountDetails: ["user:account.subaccounts.get"],
                    verifiedAccount: ["user:verifiedAccount.get"],
                    manageSendInvitations: ["pdr:cam.gated"],
                    getAllReceivedInvitations: ["user:account.myinvitations.get.gated", "pdr:cam.gated"],
                    manageReceivedInvitation: ["user:account.familyinvitation.get.gated", "user:account.familyinvitationinvitee.update.gated"],
                    idMapper: ["user:account.identityMapper"],
                    updateGender: ["user:account.personal.get", "user:account.personal.update.gated"],
                    updateUserLanguage: ["user:account.languages.get", "user:account.language.update.gated"],
                    getKamajiWalletSettings: ["versa:user_get_wallet_settings"],
                    getKamajiPaymentInstruments: ["versa:user_get_payment_instruments"],
                    updateEmailVerificationStatus: ["user:account.emailVerificationStatus.update"],
                    getFamilyMembersPlayedTime: ["pdr:cam"],
                    getOfflineFamilyMembersPlayedTime: ["pdr:cam"],
                    manageWhitelists: ["pdr:cam.gated"],
                    getPaymentInstruments: ["wallets:instrument.get.gated"],
                    getWalletSettings: ["wallets:preference.get.gated"],
                    getOnlineIdEligibility: ["ias:account.onlineIdChange.get"],
                    getOnlineId: ["user:account.onlineId.get"],
                    updateOnlineId: ["ias:account.onlineIdChange.create.gated"],
                    getOnlineIdSuggestion: ["user:onlineIdSuggestion.get"],
                    koreanIPinData: ["user:account.korean.creation.request.get", "user:account.korean.creation.response.put"],
                    checkSubaccountGraduation: ["openid:ctry_code", "openid:content_ctrl", "openid:age"],
                    graduateSubaccount: ["pdr:cam"],
                    deviceManagement: ["device:get", "device:update", "device:activate", "openid:acct_id_str", "deviceManagement:devices.deactivateAll"],
                    getManageAddresses: ["user:account.address.get.gated"],
                    updateManageAddresses: ["user:account.address.update.gated"],
                    getManageCommunication: ["user:account.communication.get"],
                    updateManageCommunication: ["user:account.communication.update.gated"],
                    getManagePersonalGender: ["user:account.personal.get"],
                    updateManagePersonalGender: ["user:account.personal.update.gated"],
                    parentConsent: ["openid:ctry_code", "openid:lang", "user:account.familymembers.get", "user:account.familymembers.parental.consent.create"],
                    premiumService: ["digitalRightsManagement:premiumServices.update"],
                    psSignin: ["oauth:read_authn_ticket", "oauth:approve_authn_ticket", "oauth:reject_authn_ticket"],
                    getTokenWithStaticPassword: ["oauth:authorize_with_static_password"],
                    getRealName: ["user:account.realName.get"],
                    updateRealName: ["user:account.realName.update.gated"],
                    manageUserConsent: ["ucs:userConsents.get", "ucs:userConsents.revoke"],
                    getAvatarCatalog: ["avatar:user.system.get"],
                    basicProfile: ["user:basicProfile.get", "user:basicProfile.update"],
                    updateUsersAvatar: ["user:basicProfile.avatar.update"],
                    getRestrictions: ["user:account.communicationRestrictionStatus.get", "user:account.restrictions.get"]
                },
                caCamSecurityURL: "https://my.account.sony.com/central/management/?entry=security",
                caChangeSigninIDURL: "https://my.account.sony.com/central/management/?entry=change_signinid",
                caForgotPasswordURL: "https://my.account.sony.com/central/verification/?entry=reset_password",
                telemetryDeviceType: 245,
                storePSAppIOSURL: "https://itunes.apple.com/app/apple-store/id410896080?pt=104940801&ct=familyweb&mt=8",
                storePSAppAndroidURL: "https://play.google.com/store/apps/details?id=com.scee.psxandroid&referrer=utm_source%3Dpsn%26utm_medium%3Dpodracer%26utm_campaign%3Dfamilyweb",
                siews1libBaseURL: "https://id.sonyentertainmentnetwork.com/id/cm/siews1lib.js",
                siews1libDomain: "id.sonyentertainmentnetwork.com",
                siews1libDomainCa: "my.account.sony.com",
                vsfURL: "https://checkout.playstation.com/buynow",
                iPinSiteURL: "https://cert.vno.co.kr/ipin.cb",
                authzV3URL: "https://auth.api.sonyentertainmentnetwork.com/api/authz/v3/oauth/authorize",
                caAuthzV3URL: "https://ca.account.sony.com/api/authz/v3/oauth/authorize",
                caSignoutURLForTerminator: "https://ca.account.sony.com/api/v1/signout",
                managementCaURLForTerminator: "https://id.sonyentertainmentnetwork.com/id/management_ca/",
                ndsLibraryURL: "https://sky-srlc.account.sony.com/2.2/w/w-666234/sync/js/",
                learnMorePS5URL: "https://www.playstation.com/iac/",
                iDreamSkySiteURL: "https://idv.idreamsky.com/#/agreement",
                NPPARevisedAntiAddictionCircularURL: "http://www.nppa.gov.cn/nppa/contents/279/98792.shtml",
                NPPAAntiAddictionCircularURL: "http://www.nppa.gov.cn/nppa/contents/312/74539.shtml",
                userConsentServiceURL: "https://web.np.playstation.com/api/consent",
                basicProfileServiceURL: "https://web.np.playstation.com/api/basicProfile",
                isProduction: !0,
                name: "kekka"
            },
            exportApplicationGlobal: !1
        }
    }
    return Object.defineProperty(e, "__esModule", {
        value: !0
    }), e
})), runningTests || require("kekka/app").default.create({
    rootElement: "#ember-root",
    arkoseLabsPublicKeyAccountCreation: "5B50130F-E160-4D2A-BB1E-ABEC31A7AA9E",
    arkoseLabsPublicKeyAccountUpdate: "DCE65287-3F66-46A2-916B-551DA76809A7",
    arkoseLabsPublicKeyPasswordRecovery: "9869C2EE-434F-4116-A2E5-B6E1237239DA",
    arkoseLabsPublicKeySignIn: "7D857050-F609-4F6A-AF63-CD04DE665FFE",
    accountServiceURL: "https://accounts.api.playstation.com/api",
    versaResourceServiceURL: "https://secure.api.sonyentertainmentnetwork.com/3.0",
    versaUserResourceServiceURL: "https://secure.api.sonyentertainmentnetwork.com/3.0",
    authServiceURL: "https://auth.api.sonyentertainmentnetwork.com",
    authServiceURLonPlayStation: "https://id.auth.api.playstation.com",
    authV3ServiceURL: "https://ca.account.sony.com/api",
    centralAuthServiceURL: "https://ca.account.sony.com/api",
    hashedAccountIdServiceURL: "https://commerce.api.np.km.playstation.net/commerce/api",
    roadsterCanServiceURL: "https://web.np.playstation.com/api/cloudAssistedNavigation",
    catalogServiceURL: "https://web.np.playstation.com/api/catalog",
    roadsterServiceAsmURL: "https://asm.np.community.playstation.net",
    regcamServiceURL: "https://regcam.api.np.km.playstation.net/regcam/api",
    kamajiActivityURL: "https://activity.api.np.km.playstation.net/activity/api",
    kamajiFileStoreURL: "https://kfs.api.np.km.playstation.net/filestore/api",
    kamajiWalletURL: "https://kamajiwt.api.np.km.playstation.net/vl/api",
    privacyServiceURL: "https://privacysettings.api.playstation.com",
    gamelistServiceURL: "https://gamelist.api.playstation.com",
    whitelistsServiceURL: "https://accounts.api.playstation.com/api/whitelists",
    privacySettingsServiceURL: "https://privacysettings.api.playstation.com",
    templateServiceURL: "https://privacytemplate.api.playstation.com",
    templateServiceClientVersion: 9.5,
    gamelistV2ServiceURL: "https://web.np.playstation.com/api/gamelist",
    privacySettingsV2ServiceURL: "https://web.np.playstation.com/api/settings",
    templateV2ServiceURL: "https://privacytemplate.api.playstation.com/api/settingsTemplates",
    verifiedAccountServiceURL: "https://accounts.api.playstation.com/api/verifiedAccountManagement",
    socialNetworkServiceURL: "https://sn.api.np.km.playstation.net/socialnetwork/api",
    korraWalletURL: "https://wallets.api.playstation.com/api",
    prAccountCreationURL: "https://id.sonyentertainmentnetwork.com/create_account/",
    prAccountCreationURLforCA: "https://id.sonyentertainmentnetwork.com/id/create_account_ca/",
    prAccountUpgradeURL: "https://id.sonyentertainmentnetwork.com/id/upgrade_account_ca/",
    featureConfigURL: "https://id.sonyentertainmentnetwork.com/id/conf/v1/config_ca.json",
    appinfoFeaturesURL: "https://appinfo.dl.playstation.net/appinfo/np/features/features.json",
    prSigninURL: "https://my.account.sony.com/central/signin/",
    prForgotPasswordURL: "https://id.sonyentertainmentnetwork.com/id/reset_password/",
    teamInvitationConfigURL: "https://fswitch.dl.playstation.net/fswitch/np/v1/avengers/52e7a9c611cf119c5bedff91b3566cb681c139af/feature.json",
    iasServiceUrl: "https://ias.api.playstation.com",
    iasAccountServiceURL: "https://ias.api.playstation.com/api/accountsAggregation",
    iasCoppaServiceURL: "https://ias.api.playstation.com/api/coppaAggregation",
    dmsServiceUrl: "https://dms.api.playstation.com/api",
    drmServiceUrl: "https://dms.api.playstation.com/drm",
    accountManagementURL: "https://accounts.api.playstation.com/api/accountManagement",
    familyURL: "https://accounts.api.playstation.com/api/family",
    familyInvitationsURL: "https://accounts.api.playstation.com/api/familyInvitations",
    offlineAccountsURL: "https://accounts.api.playstation.com/api/offlineAccounts",
    activityTrackingURL: "https://accounts.api.playstation.com/api/activityTracking",
    communicationRestrictionStatusUrl: "https://web.np.playstation.com/api/communicationRestrictionStatus",
    restrictionsUrl: "https://web.np.playstation.com/api/restrictions",
    prCsHelpPageURL: "https://www.playstation.com/support/",
    prTwoSvMkPageURL: "https://www.playstation.com/playstation-network/two-step-verification/",
    prFamilyCsQaPageURL: "https://www.playstation.com/network/family",
    prCsCoidGamesURL: "https://www.playstation.com/onlineid/games",
    prCsCoidHelpURL: "https://www.playstation.com/onlineid/help",
    prCamSecurityURL: "https://id.sonyentertainmentnetwork.com/id/management/#/p/security",
    prFamilyManagementURL: "https://id.sonyentertainmentnetwork.com/id/management_ca/",
    prFamilyManagementURLforPSN: "https://id.sonyentertainmentnetwork.com/id/management/",
    prReturnToPrevAppURL: "https://id.sonyentertainmentnetwork.com/id/msg/return_to_prev_app/",
    prAccountLinkingURL: "https://id.sonyentertainmentnetwork.com/id/account_linking/",
    unifiedFooterBaseURL: "https://secure.cdn.us.playstation.com",
    ulinkURL: "https://link.account.sony.com",
    uidMkPageURL: "https://www.playstation.com/linking-accounts",
    clientId: "M01UTzRFRE9tTldOMlFETnRNak5rSldMaVoyTTAwU01rRkdOdEVtTmpKbU0xTUdP",
    clientSecret: "PT1nYzZoSFpZTjBRMm9VV0ZwbU5EdGtZ",
    clientId2: "eU1HWm1SV00yVVdaNElqWXRNR1pobFRMMGNETTAwaU5rQnpZdGNqTWtOVFk0VURN",
    clientSecret2: "PT1RYkJkR1d5VkdjMVluWU1aMU5FaDNj",
    clientId3: "PT13TXpNek16TXpN",
    clientSecret3: "PT13TXpNek16TXpN",
    clientId4: "PT1BTjBRRE4wUURO",
    clientSecret4: "PT1BTjBRRE4wUURO",
    clientId5: "PT1RTjFVVE4xVVRO",
    clientSecret5: "PT1RTjFVVE4xVVRO",
    clientId6: "MllHTWlKak4yWUdaNEVHTXRVak5oaFRMeUltTTAwU1ptSlROdEVETWlOV00wRWpN",
    clientSecret6: "PT1RZGtkMlpvbGpRRVZ6VTFvMFVVdDBa",
    clientId7: "PT13TjNjek4zY3pO",
    clientSecret7: "PT13TjNjek4zY3pO",
    version: "_APP_VERSION_",
    aaAccount: "snepdrglobal",
    aaLib: "85dbc9318dade64707412e9c1f435e4324ebe17f/assets/s_code.js",
    buildId: "central/signin_9dfa3802_1092_f51b85ff_0614c252",
    playStationStoreURL: "https://store.playstation.com",
    transactClientURL: "https://transact.playstation.com",
    scopeMapDefinition: {
        signinId: ["openid:user_id"],
        signinIdUpdate: [],
        accountInformation: ["openid:user_id", "openid:online_id", "openid:ctry_code", "openid:lang"],
        checkAgeGroup: ["openid:age"],
        userInformation: ["openid:ctry_code", "openid:lang"],
        emailVerificationCheck: ["user:account.email.create", "user:account.emailVerification.get"],
        verifyAccount: ["user:account.email.create", "user:account.emailVerification.get", "user:account.emailVerification.update"],
        tosuaReAcceptance: ["user:account.tosua.update"],
        resetPassword: ["user:account.password.update"],
        registerOnlineId: ["user:account.onlineId.update"],
        getProfileName: ["user:account.communication.get"],
        updateProfileName: ["user:account.communication.update", "user:account.communication.get"],
        manageProfileName: ["user:account.communication.update.gated", "user:account.communication.get"],
        updateProfileImage: ["kamaji:kfs_images.upload", "kamaji:kfs_images.get", "kamaji:kfs_images.delete", "user:account.communication.get", "user:account.communication.update"],
        updateAddresses: ["user:account.address.create.gated", "user:account.address.update.gated", "user:account.address.get.gated"],
        registerBillingInfo: ["versa:user_update_credit_cards"],
        updatePrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update"],
        checkSubAccount: ["openid:content_ctrl"],
        sendUpdateSubAccountEvent: ["kamaji:activity_feed_set_feed_privacy"],
        getPrivacySettingsFramework: ["kamaji:get_privacy_settings", "kamaji:activity_feed_get_feed_privacy", "kamaji:game_list"],
        updatePrivacySettingsFramework: ["kamaji:set_privacy_settings.gated", "kamaji:activity_feed_set_feed_privacy"],
        getPersonalizationSettings: ["kamaji:get_privacy_settings"],
        updatePersonalizationSettings: ["kamaji:set_privacy_settings.gated"],
        decideTemplateQueryParam: ["openid:user_id", "openid:ctry_code", "openid:lang", "openid:content_ctrl", "user:account.subaccounts.get", "user:verifiedAccount.get", "kamaji:account_link_user_link_account"],
        managePrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update", "kamaji:activity_feed_get_feed_privacy", "kamaji:activity_feed_set_feed_privacy", "kamaji:game_list", "kamaji:get_privacy_settings", "kamaji:set_privacy_settings.gated", "openid:content_ctrl"],
        setupPrivacySettings: ["user:account.settings.privacy.get", "user:account.settings.privacy.update", "kamaji:activity_feed_get_feed_privacy", "kamaji:activity_feed_set_feed_privacy", "kamaji:get_privacy_settings", "kamaji:set_privacy_settings.gated"],
        hashedAccountId: ["kamaji:get_account_hash"],
        devicePassword: ["oauth:manage_devicepasswords"],
        easySignin: ["oauth:manage_device_usercodes"],
        updateAvatarSettings: ["kamaji:get_internal_entitlements"],
        createPhoneInformation: ["user:account.phone.create", "user:account.phone.main.update"],
        managePhoneInformation: ["user:account.phone.create", "user:account.phone.masked.get", "user:account.phone.delete"],
        getPhoneInformation: ["user:account.phone.masked.get"],
        updateUserProfile: ["user:account.profile.get", "user:account.profile.update"],
        sendPhoneVerificationCode: ["user:account.notification.create"],
        updatePhoneInformation: ["user:account.phone.create", "user:account.phone.main.update", "user:account.phone.delete"],
        getAuthenticationMode: ["user:account.authentication.mode.get"],
        deactivate2SVAuthenticationMode: ["user:account.authentication.mode.update"],
        enable2SVAuthenticationMode: ["user:account.authentication.mode.2sv.update"],
        getTokenWithAuthenticatorCode: ["oauth:authorize_with_authenticator_code"],
        createAuthenticatorSecret: ["user:account.authenticator.secret.post"],
        verifyPhone: ["user:account.phone.verify"],
        changePasswordUpdate: ["user:account.changepassword.update"],
        changePinUpdate: ["user:account.pin.update.gated"],
        updateSecurityAnswer: ["user:account.securityQuestionAnswer.update.strict_gated"],
        allSignout: ["oauth:manage_user_auth_sessions", "openid:acct_uuid"],
        canDeviceReset: ["can:context.user.get", "can:context.user.set"],
        backupCode: ["oauth:manage_backup_codes", "openid:acct_id_str"],
        manageFamilyMembers: ["pdr:cam.gated", "openid:acct_id_str"],
        manageFamilyMembersSchedule: ["pdr:cam.gated"],
        manageOfflineFamilyMembers: ["user:offline.account.role.update.gated", "user:offline.account.get.gated", "user:offline.account.update.gated"],
        manageOfflineFamilyMembersSchedule: ["user:offline.account.parentalControls.scheduleBased.wakeupTime.update.gated", "user:offline.account.parentalControls.scheduleBased.bedTime.update.gated", "user:offline.account.parentalControls.scheduleBased.playTime.update.gated", "user:offline.account.parentalControls.scheduleBased.overrides.create.gated", "user:offline.account.parentalControls.scheduleBased.timezone.update.gated"],
        getEmailVerificationStatus: ["user:account.emailVerification.get"],
        getCoppaVerificationStatus: ["user:account.coppa.get"],
        verifyCoppa: ["user:account.coppa.validate.gated"],
        updateOfflineFamilyMember: ["user:offline.account.update.gated"],
        subAccountDetails: ["user:account.subaccounts.get"],
        verifiedAccount: ["user:verifiedAccount.get"],
        manageSendInvitations: ["pdr:cam.gated"],
        getAllReceivedInvitations: ["user:account.myinvitations.get.gated", "pdr:cam.gated"],
        manageReceivedInvitation: ["user:account.familyinvitation.get.gated", "user:account.familyinvitationinvitee.update.gated"],
        idMapper: ["user:account.identityMapper"],
        updateGender: ["user:account.personal.get", "user:account.personal.update.gated"],
        updateUserLanguage: ["user:account.languages.get", "user:account.language.update.gated"],
        getKamajiWalletSettings: ["versa:user_get_wallet_settings"],
        getKamajiPaymentInstruments: ["versa:user_get_payment_instruments"],
        updateEmailVerificationStatus: ["user:account.emailVerificationStatus.update"],
        getFamilyMembersPlayedTime: ["pdr:cam"],
        getOfflineFamilyMembersPlayedTime: ["pdr:cam"],
        manageWhitelists: ["pdr:cam.gated"],
        getPaymentInstruments: ["wallets:instrument.get.gated"],
        getWalletSettings: ["wallets:preference.get.gated"],
        getOnlineIdEligibility: ["ias:account.onlineIdChange.get"],
        getOnlineId: ["user:account.onlineId.get"],
        updateOnlineId: ["ias:account.onlineIdChange.create.gated"],
        getOnlineIdSuggestion: ["user:onlineIdSuggestion.get"],
        koreanIPinData: ["user:account.korean.creation.request.get", "user:account.korean.creation.response.put"],
        checkSubaccountGraduation: ["openid:ctry_code", "openid:content_ctrl", "openid:age"],
        graduateSubaccount: ["pdr:cam"],
        deviceManagement: ["device:get", "device:update", "device:activate", "openid:acct_id_str", "deviceManagement:devices.deactivateAll"],
        getManageAddresses: ["user:account.address.get.gated"],
        updateManageAddresses: ["user:account.address.update.gated"],
        getManageCommunication: ["user:account.communication.get"],
        updateManageCommunication: ["user:account.communication.update.gated"],
        getManagePersonalGender: ["user:account.personal.get"],
        updateManagePersonalGender: ["user:account.personal.update.gated"],
        parentConsent: ["openid:ctry_code", "openid:lang", "user:account.familymembers.get", "user:account.familymembers.parental.consent.create"],
        premiumService: ["digitalRightsManagement:premiumServices.update"],
        psSignin: ["oauth:read_authn_ticket", "oauth:approve_authn_ticket", "oauth:reject_authn_ticket"],
        getTokenWithStaticPassword: ["oauth:authorize_with_static_password"],
        getRealName: ["user:account.realName.get"],
        updateRealName: ["user:account.realName.update.gated"],
        manageUserConsent: ["ucs:userConsents.get", "ucs:userConsents.revoke"],
        getAvatarCatalog: ["avatar:user.system.get"],
        basicProfile: ["user:basicProfile.get", "user:basicProfile.update"],
        updateUsersAvatar: ["user:basicProfile.avatar.update"],
        getRestrictions: ["user:account.communicationRestrictionStatus.get", "user:account.restrictions.get"]
    },
    caCamSecurityURL: "https://my.account.sony.com/central/management/?entry=security",
    caChangeSigninIDURL: "https://my.account.sony.com/central/management/?entry=change_signinid",
    caForgotPasswordURL: "https://my.account.sony.com/central/verification/?entry=reset_password",
    telemetryDeviceType: 245,
    storePSAppIOSURL: "https://itunes.apple.com/app/apple-store/id410896080?pt=104940801&ct=familyweb&mt=8",
    storePSAppAndroidURL: "https://play.google.com/store/apps/details?id=com.scee.psxandroid&referrer=utm_source%3Dpsn%26utm_medium%3Dpodracer%26utm_campaign%3Dfamilyweb",
    siews1libBaseURL: "https://id.sonyentertainmentnetwork.com/id/cm/siews1lib.js",
    siews1libDomain: "id.sonyentertainmentnetwork.com",
    siews1libDomainCa: "my.account.sony.com",
    vsfURL: "https://checkout.playstation.com/buynow",
    iPinSiteURL: "https://cert.vno.co.kr/ipin.cb",
    authzV3URL: "https://auth.api.sonyentertainmentnetwork.com/api/authz/v3/oauth/authorize",
    caAuthzV3URL: "https://ca.account.sony.com/api/authz/v3/oauth/authorize",
    caSignoutURLForTerminator: "https://ca.account.sony.com/api/v1/signout",
    managementCaURLForTerminator: "https://id.sonyentertainmentnetwork.com/id/management_ca/",
    ndsLibraryURL: "https://sky-srlc.account.sony.com/2.2/w/w-666234/sync/js/",
    learnMorePS5URL: "https://www.playstation.com/iac/",
    iDreamSkySiteURL: "https://idv.idreamsky.com/#/agreement",
    NPPARevisedAntiAddictionCircularURL: "http://www.nppa.gov.cn/nppa/contents/279/98792.shtml",
    NPPAAntiAddictionCircularURL: "http://www.nppa.gov.cn/nppa/contents/312/74539.shtml",
    userConsentServiceURL: "https://web.np.playstation.com/api/consent",
    basicProfileServiceURL: "https://web.np.playstation.com/api/basicProfile",
    isProduction: !0,
    name: "kekka"
})