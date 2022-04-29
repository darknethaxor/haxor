(self.webpackChunkminecraft_net_coreapps = self.webpackChunkminecraft_net_coreapps || []).push([
    [87], {
        6001: function(t, e, n) {
            "use strict";

            function r(t, e, n, r, o, i, a) {
                try {
                    var c = t[i](a),
                        s = c.value
                } catch (t) {
                    return void n(t)
                }
                c.done ? e(s) : Promise.resolve(s).then(r, o)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var a = t.apply(e, n);

                        function c(t) {
                            r(a, o, i, c, s, "next", t)
                        }

                        function s(t) {
                            r(a, o, i, c, s, "throw", t)
                        }
                        c(void 0)
                    }))
                }
            }

            function i(t) {
                return a.apply(this, arguments)
            }

            function a() {
                return (a = o(regeneratorRuntime.mark((function t(e) {
                    var n;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(n = e())) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return", n);
                            case 3:
                                if ("loading" !== document.readyState) {
                                    t.next = 6;
                                    break
                                }
                                return t.next = 6, new Promise((function(t) {
                                    return document.addEventListener("DOMContentLoaded", t, !1)
                                }));
                            case 6:
                                if (!(n = e())) {
                                    t.next = 9;
                                    break
                                }
                                return t.abrupt("return", n);
                            case 9:
                                throw new Error("failed to get DOM content");
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
            n.d(e, {
                I: function() {
                    return c
                },
                m: function() {
                    return s
                }
            });
            var c = function(t) {
                    return i((function() {
                        return document.getElementById(t)
                    })).catch((function(e) {
                        throw new Error('failed to get element by id "'.concat(t, '"'))
                    }))
                },
                s = function(t) {
                    return i((function() {
                        return document.querySelector(t)
                    })).catch((function(e) {
                        throw new Error('failed to find element with selector "'.concat(t, '"'))
                    }))
                }
        },
        2708: function(t, e, n) {
            "use strict";

            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        i(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                N: function() {
                    return V
                }
            });
            var a = document.getElementById("coreAppsEnv");
            if (a) {
                var c = a.getAttribute("data-currency");
                c && (window.sharedEnvConfig = o(o({}, window.sharedEnvConfig), {}, {
                    currency: c
                }));
                var s = a.getAttribute("data-realms-plans");
                if (s) {
                    var l = JSON.parse(s);
                    window.profileConfig = o(o({}, window.profileConfig), {}, i({}, "realms.plans", [{
                        variantId: "desktop_realms_180_days",
                        subscription: !1,
                        duration: 180,
                        discount: "20%",
                        displayName: "Realms 180 days",
                        quantity: 1,
                        price: l.desktop_realms_180_days
                    }, {
                        variantId: "desktop_realms_90_days",
                        subscription: !1,
                        duration: 90,
                        discount: "10%",
                        displayName: "Realms 90 days",
                        quantity: 1,
                        price: l.desktop_realms_90_days
                    }, {
                        variantId: "desktop_realms_30_days",
                        subscription: !1,
                        duration: 30,
                        discount: null,
                        displayName: "Realms 30 days",
                        quantity: 1,
                        price: l.desktop_realms_30_days
                    }, {
                        variantId: "desktop_realms_30_days_recurring",
                        subscription: !0,
                        duration: 30,
                        discount: "20%",
                        displayName: "Realms 30 days recurring",
                        quantity: 1,
                        price: l.desktop_realms_30_days_recurring
                    }]))
                }
            }
            a && a.getAttribute("data-env");
            var u = (window.sharedEnvConfig && window.sharedEnvConfig.language || document.documentElement.lang || "en-us").toLowerCase(),
                f = "zh-tw" === u ? "zh-hant" : "zh-cn" === u ? "zh-hans" : u,
                p = {
                    currency: "",
                    language: f,
                    locale: u,
                    "cookie.name": "bearer_token",
                    "cookie.options": {
                        domain: ".minecraft.net",
                        secure: !0
                    },
                    "enable.dungeonsPreorder": !1,
                    "enable.msaMigration": !0,
                    z: function(t, e) {
                        console.log("🔥", t, e)
                    },
                    "url.forgotPassword": location.origin + "/" + f + "/password/forgot/",
                    "url.homePage": location.origin + "/",
                    "url.login": location.origin + "/" + f + "/login",
                    "url.profile": location.origin + "/" + f + "/profile",
                    "cookie.entitlementState": "hasMcJavaEntitlement",
                    "enable.arkoseCaptcha": !1,
                    "endpoint.arkose": "https://minecraft-api.arkoselabs.com/",
                    msaStateLoginParam: "login",
                    "url.supportCenter": "https://help.mojang.com/",
                    "url.supportCenterforMSAMigration": "https://help.minecraft.net/hc/en-us/sections/360011399911-Migration-for-Minecraft-Java-Edition",
                    "minecraft.entitlements": ["product_minecraft", "game_minecraft"],
                    "url.xboxLogoutReturnUrl": location.origin + "/" + f,
                    "url.imageBaseUrl": n.p + "assets",
                    "url.accountMigrationFAQ": "https://help.minecraft.net/hc/en-us/articles/360050865492-Minecraft-Java-Edition-Account-MIgration-FAQ",
                    "url.forgotEmail": "https://help.minecraft.net/hc/en-us/requests/new",
                    titleId: "896928775",
                    sisuAppId: "1142970254",
                    deleteNonEssentialCookie: !1,
                    nonEssentialCookies: ["_cs_id", "_cs_cvars", "MicrosoftApplicationsTelemetryDeviceId", "at_check", "_cs_c"]
                },
                d = {
                    translationPath: n.p + "static/translations/account-nav-menu/<LOCALE>.json"
                },
                m = {
                    "url.securityView": "".concat(location.origin, "/").concat(f, "/account-security"),
                    translationPath: n.p + "static/translations/account-security/<LOCALE>.json"
                },
                g = {
                    translationPath: n.p + "static/translations/answer-security-questions/<LOCALE>.json"
                },
                w = {
                    translationPath: n.p + "static/translations/bundle/<LOCALE>.json"
                },
                h = {
                    relyingPartyKey: "rp://api.minecraftservices.com/",
                    xboxSisuTestParam: "",
                    "url.xboxLoginReturnUrl": location.origin + "/" + f + "/login",
                    "url.xboxRegisterReturnUrl": location.origin + "/" + f + "/login",
                    sisuCobrandId: "8058f65d-ce06-4c30-9559-473c9275a65d",
                    xboxMSAClientId: "ca634a9a-f102-4033-b081-3a4393a6f65d",
                    "url.xboxLiveUrl": "http://xboxlive.com",
                    "url.plafabXboxLiveUrl": "http://playfab.xboxlive.com/",
                    "url.marketplaceMinecraft": "http://mp.microsoft.com/",
                    "url.pocketRelamsMinecraft": "https://pocket.realms.minecraft.net/"
                },
                b = {
                    translationPath: n.p + "static/translations/buy-minecraft-login/<LOCALE>.json",
                    "endpoint.pdpUrl": location.origin + "/" + f + "/store/minecraft-java-edition",
                    variantId: "minecraft",
                    "url.purchaseReciept": location.origin + "/" + f + "/minecraft-java/setup/receipt/",
                    "url.xboxPurchaseLoginReturnUrl": "".concat(location.origin, "/").concat(f, "/store/minecraft-java-edition/buy")
                },
                y = {
                    countryCode: f
                },
                v = {
                    translationPath: n.p + "static/translations/login/<LOCALE>.json"
                },
                C = {
                    "url.postLogout": location.origin + "/" + f + "/",
                    translationPath: n.p + "static/translations/logout/<LOCALE>.json"
                },
                O = {
                    cobrandId: "fb937bf5-b9a1-4b61-b744-82f9a1adc248",
                    "url.securityView": "".concat(location.origin, "/").concat(f, "/account-security"),
                    "url.supportCenter": "https://help.mojang.com/",
                    "url.supportCenterforMSAMigration": "https://help.minecraft.net/hc/en-us/sections/360011399911-Migration-for-Minecraft-Java-Edition",
                    "url.windowsOsLauncher": "https://launcher.mojang.com/download/MinecraftInstaller.msi",
                    "url.windows1011OsLauncher": "https://launcher.mojang.com/download/MinecraftInstaller.exe",
                    "url.distributionLauncher": "https://www.minecraft.net/en-us/download/alternative",
                    "url.MacOsLauncher": "https://launcher.mojang.com/download/Minecraft.dmg",
                    "url.debianUbuntuLauncher": "https://launcher.mojang.com/download/Minecraft.deb",
                    "enable.staticUpsellView": !1,
                    "enable.accountSecurityView": !1,
                    "url.forcedBillingInfo": "".concat(location.origin, "/").concat(f, "/forced-billing-info"),
                    translationPath: n.p + "static/translations/msa-migration/<LOCALE>.json"
                },
                j = {
                    translationPath: n.p + "static/translations/msa-registration/<LOCALE>.json"
                },
                P = {
                    translationPath: n.p + "static/translations/order-summary/<LOCALE>.json"
                },
                k = {
                    translationPath: n.p + "static/translations/password-change/<LOCALE>.json"
                },
                L = {
                    "url.emailHelpArticle": "https://help.mojang.com/customer/portal/articles/542001",
                    "url.forgotPasswordHelpArticle": "https://help.minecraft.net/hc/en-us/articles/360035014051-Change-or-Forgot-Password",
                    translationPath: n.p + "static/translations/password-forgot/<LOCALE>.json"
                },
                E = {
                    translationPath: n.p + "static/translations/password-reset/<LOCALE>.json"
                },
                _ = {
                    "url.realmsEulaUrl": "https://account.mojang.com/documents/desktop_realms_terms",
                    "url.realmsMarketingPage": "https://aka.ms/MinecraftNetRealmsJava",
                    "url.privacyPolicyUrl": "https://go.microsoft.com/fwlink/?LinkId=521839",
                    "url.forcedBillingInfoPath": "".concat(location.origin, "/").concat(f, "/forced-billing-info"),
                    "asset.themeModelClassic": n.p + "static/theme/freyja/svg/shapes/shape-model-classic.svg",
                    "asset.themeModelSlim": n.p + "static/theme/freyja/svg/shapes/shape-model-slim.svg",
                    "enable.asq": !0,
                    translationPath: n.p + "static/translations/profile/<LOCALE>.json"
                },
                A = {
                    translationPath: n.p + "static/translations/profile-redeem-code/<LOCALE>.json",
                    "url.eula": "https://aka.ms/MinecraftEULA",
                    "minecraft.products": {
                        display_name: "MineCraft: Java Edition"
                    },
                    "url.minecraftRedeem": "".concat(location.origin, "/").concat(f, "/redeem"),
                    productVariant: "minecraft"
                },
                M = {
                    translationPath: n.p + "static/translations/set-profile-name/<LOCALE>.json"
                };

            function x(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? x(Object(n), !0).forEach((function(e) {
                        I(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function I(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var R = window.sharedEnvConfig = S(S({}, p), {}, {
                "endpoint.accountsService": "https://api.mojang.com/",
                "endpoint.authService": "https://authserver.mojang.com/",
                "endpoint.minecraftServices": "https://api.minecraftservices.com/",
                "endpoint.xboxAuthUrl": "https://sisu.xboxlive.com/connect/XboxLive/",
                "endpoint.xboxOAuthUrl": "https://sisu.xboxlive.com/connect/oauth/XboxLive/",
                "endpoint.msaOAuthUrl": "https://login.live.com/oauth20_logout.srf",
                "enable.arkoseCaptcha": !0,
                reCaptcha: {
                    sitekey: "6LfbsiMUAAAAAOu1nGK8InBaFrIk17dcbI0sqvzj"
                },
                arkose: {
                    publickey: "D39B0EE3-2973-4147-98EF-C92F93451E2D"
                },
                "url.buyMinecraft": "https://checkout.minecraft.net/" + f + "/store/minecraft/#buy",
                "url.migratePremiumAccount": "https://account.mojang.com/migrate",
                "url.register": "https://checkout.minecraft.net/" + f + "/store/minecraft/#register",
                "url.freeTrial": "https://www.minecraft.net/".concat(f, "/free-trial"),
                "url.buyMinecraftJavaEdition": "https://www.minecraft.net/".concat(f, "/store/minecraft-java-edition"),
                "url.changeAccountSettings": "https://account.microsoft.com/",
                "url.setUpProfile": "https://www.minecraft.net/".concat(f, "/set-profile-name/"),
                "url.orderSummary": "https://www.minecraft.net/".concat(f, "/order-summary"),
                "enable.forcedMigration": !0,
                "enable.newProfile": !1
            }, window.sharedEnvConfig);
            window.accountNavMenuConfig = S(S({}, d), {}, {
                "url.verifyEmail": "https://checkout.minecraft.net/store/minecraft/#verify"
            }, window.accountNavMenuConfig), window.accountSecurityConfig = S(S({}, m), window.accountSecurityConfig), window.answerSecurityQuestionsConfig = S(S({}, g), {}, {
                "url.resetSecurityQuestions": "https://account.mojang.com/me/changeSecretQuestions"
            }, window.answerSecurityQuestionsConfig);
            var U = S(S(S({}, R), w), {}, {
                whitelistedRedirectHosts: ["minecraft.net"],
                "url.redeem": "https://www.minecraft.net/".concat(f, "/redeem"),
                "enable.maintenanceView": !1
            }, window.bundleConfig);
            window.buyMinecraftLoginConfig = S(S({}, b), {}, {
                "url.checkoutUrl": "https://checkout.minecraft.net/"
            }, window.buyMinecraftLoginConfig), window.cartStoreConfig = S(S({}, y), window.cartStoreConfig), window.loginConfig = S(S({}, v), window.loginConfig), window.logoutConfig = S(S({}, C), window.logoutConfig), window.msaMigrationConfig = S(S({}, O), {}, {
                "url.xboxUpsellReturnUrl": "https://www.minecraft.net/" + f + "/link-accounts"
            }, window.msaMigrationConfig), window.msaRegistrationConfig = S(S({}, j), window.msaRegistrationConfig), window.orderSummaryConfig = S(S({}, P), window.orderSummaryConfig), window.passwordChangeConfig = S(S({}, k), window.passwordChangeConfig), window.passwordForgotConfig = S(S({}, L), window.passwordForgotConfig), window.msaUtilsConfig = S(S({}, h), {}, {
                environmentName: ""
            }, window.msaUtilsConfig), window.passwordResetConfig = S(S({}, E), window.passwordResetConfig), window.profileConfig = S(S({}, _), {}, {
                "endpoint.checkoutUrl": "https://checkout.minecraft.net/",
                "url.realmsTrialCC": "https://checkout.minecraft.net/".concat(f, "/realms-trial/"),
                "url.billingInfoAddCard": "https://checkout.minecraft.net/".concat(f, "/billing-info"),
                "url.billingInfoEditCard": "https://checkout.minecraft.net/".concat(f, "/billing-info?edit=true"),
                "url.billingInfoRemoveCard": "https://checkout.minecraft.net/".concat(f, "/billing-info?remove=true"),
                "url.restartUrl": "https://www.minecraft.net/".concat(f, "/profile/realms")
            }, window.profileConfig), window.profileRedeemCodeConfig = S(S({}, A), window.profileRedeemCodeConfig), window.setProfileNameConfig = S(S({}, M), window.setProfileNameConfig);
            var D = n(9474);

            function N(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(n), !0).forEach((function(e) {
                        F(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function F(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var J = q({
                    whitelistedRedirectHosts: [D.iZ],
                    translationPath: D.iZ,
                    "url.redeem": D.iZ,
                    "enable.maintenanceView": !1
                }, D.gZ),
                B = q(q(q({}, J), D.Di), U),
                V = (0, D.Gu)(B, "bundleConfig")
        }
    }
]);
//# sourceMappingURL=87.chunk.1271bc848ddeb4c3c51b.js.map