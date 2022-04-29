var locale = document.querySelector("#mc-globalfooter__locale-container, #language-selector").getAttribute("data-aem-locale").toLowerCase();
if ("undefined" != typeof WcpConsent) {
    function GetConsentValues() {
        siteConsent.getConsent()
    }

    function onConsentChanged(e) {
        GetConsentValues()
    }

    function manageConsent() {
        siteConsent.manageConsent()
    }
    window.siteConsent = null, WcpConsent.init(locale, "cookie-banner", (function(e, t) {
        if (null != e) return error;
        siteConsent = t
    }), onConsentChanged), GetConsentValues(), window.siteConsent && (siteConsent.isConsentRequired || $(".manageConsent").remove())
}! function() {
    let e = document.querySelector(".mc-globalfooter"),
        t = e ? e.querySelector(".mc-globalfooter__localeselector-trigger") : null,
        n = e ? e.querySelector(".mc-globalfooter__locale-container") : null,
        o = !1,
        l = "mc-globalfooter__locale-container-active";

    function a(e) {
        e.preventDefault();
        let t = this.getAttribute("href"),
            n = i(t);
        document.cookie = "language_url=/" + n + "/; path=/; SameSite=None; Secure", window.location.assign(t)
    }

    function i(e) {
        const t = window.location.hostname,
            n = e.split(t);
        let o = "en-us";
        return o = n.length > 1 ? n[1].split("/")[1] : n[0].split("/")[1], o
    }

    function r() {
        t.setAttribute("aria-expanded", "false"), n.removeAttribute("style"), n.classList.remove(l), o = !1, t.setAttribute("aria-expanded", "false")
    }
    t && (t.addEventListener("click", (function() {
        o = !o, o ? (n.classList.add(l), t.setAttribute("aria-expanded", "true"), n.setAttribute("style", "height:" + n.scrollHeight + "px")) : o || (t.setAttribute("aria-expanded", "false"), n.removeAttribute("style"))
    }), !1), n.querySelectorAll("a").forEach(e => {
        e.addEventListener("click", a, !1)
    }), n.addEventListener("transitionend", (function() {
        captureAnimationEvent = setTimeout(() => {
            captureAnimationEvent = null, o ? (window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            }), n.querySelector("a:first-child").focus()) : n.classList.remove(l)
        }, 25)
    }), !1)), document.addEventListener("keydown", (function(e) {
        const n = document.getElementsByClassName("mc-globalfooter__locale-container-active"),
            o = document.querySelectorAll("#mc-globalfooter__locale-container>ul li:last-child a")[0],
            l = document.querySelectorAll(".mc-globalfooter__ms-branding-nav>ul li:first-child a")[0];
        "Escape" !== e.key && "Esc" !== e.key || !n.length || (e.preventDefault(), r(), t.focus()), "Tab" === e.key && document.activeElement === o && (e.preventDefault(), r(), l.focus())
    })), $(document).ready((function() {
        throttledEvent("resize", (function() {
            o && n.setAttribute("style", "height:" + n.querySelector("ul").scrollHeight + "px")
        }));
        let e = "",
            t = "en-us";
        document.querySelectorAll("div #mc-globalfooter__locale-container a").forEach(n => {
            e = n.href, t = i(e), n.setAttribute("lang", t)
        })
    })), "undefined" == typeof WcpConsent && $(".manageConsent").remove()
}();