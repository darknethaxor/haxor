function throttledEvent(e, t) {
    let o;
    window.addEventListener(e, () => {
        o && window.clearTimeout(o), o = window.setTimeout((function() {
            o = null, "function" == typeof t && t()
        }), 250)
    })
}

function changeToggleMobileMenuIcon() {
    const e = document.querySelector(".mc-globalhead__mobilecontrols-trigger"),
        t = e.classList.contains("mc-globalhead__mobilecontrols-trigger-active"),
        o = e.classList.contains("mc-globalhead__mobilecontrols-trigger-dungeons"),
        n = "/content/dam/games/minecraft/logos/",
        a = e.children[0];
    t || o ? o ? !t && o ? a.style.content = "url(" + n + "hamburger-dungeons-icon.png)" : o && (a.style.content = "url(" + n + "hamburger-dungeons-closeicon.png)") : a.setAttribute("src", n + "hamburger-closeicon.png") : a.setAttribute("src", n + "hamburger-icon.png")
}

function buildMsaLogoutUrl() {
    var e, t;
    return window.sharedEnvConfig ? (e = window.sharedEnvConfig["endpoint.msaOAuthUrl"], t = generateRedirectURL(window.sharedEnvConfig["endpoint.xboxOAuthUrl"])) : (e = "https://login.live.com/oauth20_logout.srf", t = generateRedirectURL("https://sisu.xboxlive.com/connect/oauth/XboxLive/")), e + "?client_id=" + (window.msaUtilsConfig ? window.msaUtilsConfig.xboxMSAClientId : "ca634a9a-f102-4033-b081-3a4393a6f65d") + "&redirect_uri=" + t
}

function generateRedirectURL(e) {
    const t = getEnvironmentParam(window.location.search);
    var o;
    if (window.sharedEnvConfig) o = encodeURIComponent(window.sharedEnvConfig["url.xboxLogoutReturnUrl"] + t);
    else {
        var n = window.location.pathname.split("/");
        o = window.location.origin + "/" + n[1]
    }
    return encodeURIComponent(e + "signout?" + ("state=logout&ru=" + o))
}

function getEnvironmentParam(e, t) {
    const o = new RegExp(/\?.+/g),
        n = o.test(e) || o.test(t) ? "&env=" : "?env=";
    return window.msaUtilsConfig && "undefined" !== window.msaUtilsConfig.environmentName && "" !== window.msaUtilsConfig.environmentName ? n + window.msaUtilsConfig.environmentName : ""
}

function clearCookies(e, t, o) {
    for (index = 0; index < e.length; index++) document.cookie = e[index] + "=; expires=" + new Date(0).toUTCString() + "; domain=" + t + "; path=" + o
}

function clearLocalStorage() {
    window.localStorage.removeItem("XboxXBLToken"), window.localStorage.removeItem("PlayFabXBLToken"), window.localStorage.removeItem("MarketplaceXBLToken"), window.localStorage.removeItem("RealmsXBLToken"), window.localStorage.removeItem("LoginType"), window.localStorage.removeItem("IsNewProfileEnabled"), window.localStorage.removeItem("entitlements")
}! function() {
    let e = document.querySelectorAll(".mc-globalhead__drop-container"),
        t = "mc-globalhead__drop-trigger",
        o = document.querySelectorAll(".mc-globalhead__drop-trigger"),
        n = "mc-globalhead__drop-nav",
        a = null;

    function l() {
        document.querySelectorAll(".mc-globalhead__drop-active").forEach(e => {
            e.querySelector(".mc-globalhead__drop-nav").removeAttribute("style"), e.classList.remove("mc-globalhead__drop-active")
        })
    }

    function i(e) {
        const o = this,
            i = "mc-globalhead__drop-active";
        if (!e || window.innerWidth <= 576) return !1;
        null !== a && clearTimeout(a);
        let c = e => {
            "" == e.style.height ? e.style.height = e.scrollHeight + "px" : e.removeAttribute("style")
        };
        a = setTimeout(() => {
            a = null, (() => {
                switch (!0) {
                    case "keydown" == e.type && o.classList.contains(i):
                        27 !== e.keyCode && "Escape" !== e.key || (c(o.querySelector("." + n)), o.classList.remove(i), o.querySelector("." + t).setAttribute("aria-expanded", "false"));
                        break;
                    case "mouseenter" == e.type && !o.classList.contains(i):
                        l(), c(o.querySelector("." + n)), o.classList.add(i), o.querySelector("." + t).setAttribute("aria-expanded", "true");
                        break;
                    case "mouseleave" == e.type && o.classList.contains(i):
                        c(o.querySelector("." + n)), o.classList.remove(i), o.querySelector("." + t).setAttribute("aria-expanded", "false");
                        break;
                    case "click" == e.type:
                        let a = o.parentNode.classList.contains(i);
                        a || l(), c(o.parentNode.querySelector("." + n)), o.parentNode.classList.toggle(i), o.setAttribute("aria-expanded", a ? "false" : "true");
                        break;
                    case "focusout" == e.type && o.classList.contains(i):
                        setTimeout((function() {
                            let e = document.activeElement.closest("ul");
                            (!e || e && !e.classList.contains(n)) && (c(o.querySelector("." + n)), o.classList.remove(i), o.querySelector("." + t).setAttribute("aria-expanded", "false"))
                        }), 1)
                }
            })()
        }, 25)
    }
    e && e.forEach(e => {
        e.addEventListener("mouseenter", i, !1), e.addEventListener("mouseleave", i, !1)
    }), o && o.forEach(e => {
        e.addEventListener("click", i, !1), e.parentNode.addEventListener("focusout", i, !1), e.parentNode.addEventListener("keydown", i, !1)
    }), window.addEventListener("click", (function(e) {
        !e.target.classList || e.target.classList.contains("mc-globalhead__drop-trigger") || e.target.parentNode.classList.contains("mc-globalhead__drop-trigger") || l()
    }), !1)
}(),
function() {
    let e = "mc-globalhead__navsection",
        t = document.querySelector("." + e),
        o = document.querySelector(".mc-globalhead__mobilecontrols .mc-globalhead__mobilecontrols-trigger"),
        n = !1,
        a = document.querySelector(".mc-globalhead__navsection"),
        l = null,
        i = "mc-globalhead__mobilemenu-active";

    function c(a) {
        const c = this,
            d = t.classList.contains(i);
        if (!a) return !1;
        switch (null !== l && clearTimeout(l), !0) {
            case "click" == a.type:
                d ? (r(!0), s(!1)) : !d && window.innerHeight - t.scrollHeight < 0 && s(!0), n = !d, c.classList.toggle("mc-globalhead__mobilecontrols-trigger-active"), $(".mc-globalheader__logo-link").attr("tabindex", d ? "0" : "-1"), c.setAttribute("aria-expanded", d ? "false" : "true"), t.classList.toggle(i);
                break;
            case "focusout" == a.type && d:
            case "keydown" == a.type && d:
                let l = () => {
                    r(!0), s(!1), n = !1, o.classList.remove("mc-globalhead__mobilecontrols-trigger-active"), o.setAttribute("aria-expanded", "false"), $(".mc-globalheader__logo-link").attr("tabindex", "0"), t.classList.remove(i), changeToggleMobileMenuIcon()
                };
                "keydown" != a.type || 27 !== a.keyCode && "Escape" !== a.key ? "focusout" == a.type && setTimeout((function() {
                    let t = document.activeElement.closest("section");
                    (!t || t && !t.classList.contains(e)) && l()
                }), 1) : (l(), $(".mc-globalhead__mobilecontrols-trigger").focus())
        }
    }

    function r(e) {
        e ? a.classList.remove("mc-globalhead__mobilemenu-animation-complete") : !e && a.classList.contains(i) && a.classList.add("mc-globalhead__mobilemenu-animation-complete")
    }

    function s(e) {
        let o = document.querySelector(".mc-globalhead"),
            n = document.querySelector(".mc-globalhead__mobilecontrols"),
            a = document.querySelector(".mc-globalhead__navcontainer-sticky"),
            l = a ? window.innerHeight - n.offsetHeight : window.innerHeight - o.offsetHeight,
            i = () => {
                t.removeAttribute("style"), t.classList.remove("mc-globalhead__navsection-scrollable")
            };
        if (window.innerWidth > 768) return i(), !1;
        e && l > 0 ? (t.setAttribute("style", "max-height:" + l + "px"), t.classList.add("mc-globalhead__navsection-scrollable")) : e || i()
    }
    o && (o.addEventListener("click", c, !1), a.addEventListener("focusout", c, !1), a.parentNode.addEventListener("keydown", c, !1), a.addEventListener("transitionend", (function() {
        l = setTimeout(() => {
            l = null, r()
        }, 25)
    }), !1), throttledEvent("resize", () => {
        n && s(!0)
    }), throttledEvent("scroll", () => {
        n && s(!0)
    }))
}(),
function(e) {
    const t = e("#mc-globalhead__drop-button-1");
    let o = document.querySelector(".mc-globalhead__navcontainer"),
        n = o.querySelector(".mc-globalhead__navsection"),
        a = o.offsetHeight,
        l = !1;

    function i() {
        let e = document.querySelector(".mc-globalhead__stickyplaceholder"),
            t = e ? e.getBoundingClientRect() : null,
            o = "mc-globalhead__navcontainer-sticky";
        t && t.top <= 0 && !l ? e.classList.add(o) : (t && t.top > 0 && e.classList.contains(o) || l) && e.classList.remove(o)
    }
    if (a && a > 0) {
        let e = document.createElement("div");
        e.classList.add("mc-globalhead__stickyplaceholder"), o.before(e)
    }

    function c() {
        setTimeout((function() {
            let o = e(window).width(),
                n = e(window).scrollTop(),
                a = 0;
            o <= 576 ? a = -1 : o >= 577 && o <= 992 ? a = n > 50 ? -1 : 0 : o > 993 && (a = 0), t.attr("tabindex", a)
        }), 100)
    }
    window.addEventListener("scroll", i), throttledEvent("resize", () => {
        ! function() {
            let e = o.offsetHeight / window.innerHeight * 100 >= 30,
                t = n.classList.contains("mc-globalhead__mobilemenu-active");
            o && e && !t ? (l = !0, i()) : l && !e && (l = !1, i())
        }()
    }), e(".mc-globalhead__drop-container").on("click", (function() {
        let e = t.attr("aria-haspopup");
        t.attr("aria-haspopup", "false" === e)
    })), e(window).scroll((function() {
        const t = e("#mc-globalhead__primaryheader");
        e(this).scrollTop() > 50 ? t.addClass("mc-globalhead__secondry ").removeClass("mc-globalhead__primary") : t.removeClass("mc-globalhead__secondry").addClass("mc-globalhead__primary"), c()
    })), window.addEventListener("orientationchange", () => {
        c()
    }), e(".mc-globalhead__mobilecontrols-trigger").click((function() {
        changeToggleMobileMenuIcon()
    }))
}(window.jQuery),
function(e) {
    let t = function(e) {
        let t = e + "=",
            o = decodeURIComponent(document.cookie).split(";");
        for (let e = 0; e < o.length; e++) {
            let n = o[e];
            for (;
                " " == n.charAt(0);) n = n.substring(1);
            if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
        }
        return ""
    }("session_username");
    const o = e(".mc-globalhead__nav-login-dropdown"),
        n = e(".mc-globalhead__nav-login");
    t ? (e("#mc-globalhead__nav-login-button-1").attr("aria-label", t).children(".mc-globalhead__drop-trigger-text").append(t), e("#mc-globalhead__nav-login-button-2").attr("aria-label", t).children(".mc-globalhead__drop-trigger-text").append(t), o.css({
        display: "block"
    }), n.css({
        display: "none"
    })) : (o.css({
        display: "none"
    }), n.css({
        display: "block"
    }))
}(window.jQuery), document.querySelectorAll(".mc-globalhead__logout").forEach(e => {
    e.addEventListener("click", e => {
        if (e.preventDefault(), window.sessionStorage.clear(), clearCookies(["access_token", "bearer_token", "session_username", "hasMcJavaEntitlement"], ".minecraft.net", "/"), "MSA" == window.localStorage.getItem("LoginType")) {
            const e = buildMsaLogoutUrl();
            clearLocalStorage(), window.location.href = e
        } else clearLocalStorage(), window.location.href = "/"
    })
}), document.querySelectorAll(".mc-globalhead__profile-link, #mc-globalfooter__profile-link-1, #mc-globalfooter__profile-link-2").forEach(e => {
    e.addEventListener("click", e => {
        e.preventDefault();
        const t = window.localStorage.getItem("IsNewProfileEnabled"),
            o = window.localStorage.getItem("LoginType");
        window.location.href = t && o && "true" === t && "MSA" === o ? "/msaprofile" : "/profile"
    })
});