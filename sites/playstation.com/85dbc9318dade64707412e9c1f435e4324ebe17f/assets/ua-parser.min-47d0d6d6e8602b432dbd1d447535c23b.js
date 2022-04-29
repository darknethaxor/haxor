(function(i, e) {
    "use strict"
    var o = "function",
        r = "undefined",
        a = "object",
        n = "string",
        t = "model",
        s = "name",
        b = "type",
        w = "vendor",
        l = "version",
        d = "architecture",
        u = "console",
        c = "mobile",
        p = "tablet",
        m = "smarttv",
        f = "wearable",
        h = "embedded",
        g = "Amazon",
        v = "Apple",
        x = "ASUS",
        k = "BlackBerry",
        y = "Firefox",
        _ = "Google",
        S = "Huawei",
        T = "LG",
        q = "Microsoft",
        z = "Motorola",
        N = "Opera",
        A = "Samsung",
        C = "Sony",
        O = "Xiaomi",
        E = "Zebra",
        U = "Facebook",
        j = function(i) {
            for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o]
            return e
        },
        B = function(i, e) {
            return typeof i === n && -1 !== R(e).indexOf(R(i))
        },
        R = function(i) {
            return i.toLowerCase()
        },
        M = function(i, e) {
            if (typeof i === n) return i = i.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof e === r ? i : i.substring(0, 255)
        },
        P = function(i, r) {
            for (var n, t, s, b, w, l, d = 0; d < r.length && !w;) {
                var u = r[d],
                    c = r[d + 1]
                for (n = t = 0; n < u.length && !w;)
                    if (w = u[n++].exec(i))
                        for (s = 0; s < c.length; s++) l = w[++t], typeof(b = c[s]) === a && b.length > 0 ? 2 === b.length ? typeof b[1] == o ? this[b[0]] = b[1].call(this, l) : this[b[0]] = b[1] : 3 === b.length ? typeof b[1] !== o || b[1].exec && b[1].test ? this[b[0]] = l ? l.replace(b[1], b[2]) : e : this[b[0]] = l ? b[1].call(this, l, b[2]) : e : 4 === b.length && (this[b[0]] = l ? b[3].call(this, l.replace(b[1], b[2])) : e) : this[b] = l || e
                d += 2
            }
        },
        V = function(i, o) {
            for (var r in o)
                if (typeof o[r] === a && o[r].length > 0) {
                    for (var n = 0; n < o[r].length; n++)
                        if (B(o[r][n], i)) return "?" === r ? e : r
                } else if (B(o[r], i)) return "?" === r ? e : r
            return i
        },
        F = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        D = {
            browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [l, [s, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [l, [s, "Edge"]],
                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                [s, l],
                [/opios[\/ ]+([\w\.]+)/i],
                [l, [s, "Opera Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [l, [s, N]],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                [s, l],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [l, [s, "UCBrowser"]],
                [/\bqbcore\/([\w\.]+)/i],
                [l, [s, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [l, [s, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [l, [s, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [l, [s, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [l, [s, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [
                    [s, /(.+)/, "$1 Secure Browser"], l
                ],
                [/\bfocus\/([\w\.]+)/i],
                [l, [s, "Firefox Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [l, [s, "Opera Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [l, [s, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [l, [s, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [l, [s, "Opera Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [l, [s, "MIUI Browser"]],
                [/fxios\/([-\w\.]+)/i],
                [l, [s, y]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [
                    [s, "360 Browser"]
                ],
                [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                [
                    [s, /(.+)/, "$1 Browser"], l
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [s, /_/g, " "], l
                ],
                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                [s, l],
                [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                [s],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [
                    [s, U], l
                ],
                [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                [s, l],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [l, [s, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [l, [s, "Chrome Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [
                    [s, "Chrome WebView"], l
                ],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [l, [s, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [s, l],
                [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                [l, [s, "Mobile Safari"]],
                [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                [l, s],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [s, [l, V, {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [s, l],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [
                    [s, "Netscape"], l
                ],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [l, [s, "Firefox Reality"]],
                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                [s, l]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [
                    [d, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    [d, R]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    [d, "ia32"]
                ],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [
                    [d, "arm64"]
                ],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [
                    [d, "armhf"]
                ],
                [/windows (ce|mobile); ppc;/i],
                [
                    [d, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [
                    [d, /ower/, "", R]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    [d, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                [
                    [d, R]
                ]
            ],
            device: [
                [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                [t, [w, A],
                    [b, p]
                ],
                [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                [t, [w, A],
                    [b, c]
                ],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [t, [w, v],
                    [b, c]
                ],
                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                [t, [w, v],
                    [b, p]
                ],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [t, [w, S],
                    [b, p]
                ],
                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],
                [t, [w, S],
                    [b, c]
                ],
                [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                [
                    [t, /_/g, " "],
                    [w, O],
                    [b, c]
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                    [t, /_/g, " "],
                    [w, O],
                    [b, p]
                ],
                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                [t, [w, "OPPO"],
                    [b, c]
                ],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [t, [w, "Vivo"],
                    [b, c]
                ],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [t, [w, "Realme"],
                    [b, c]
                ],
                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                [t, [w, z],
                    [b, c]
                ],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [t, [w, z],
                    [b, p]
                ],
                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                [t, [w, T],
                    [b, p]
                ],
                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                [t, [w, T],
                    [b, c]
                ],
                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                [t, [w, "Lenovo"],
                    [b, p]
                ],
                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                [
                    [t, /_/g, " "],
                    [w, "Nokia"],
                    [b, c]
                ],
                [/(pixel c)\b/i],
                [t, [w, _],
                    [b, p]
                ],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [t, [w, _],
                    [b, c]
                ],
                [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [t, [w, C],
                    [b, c]
                ],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                    [t, "Xperia Tablet"],
                    [w, C],
                    [b, p]
                ],
                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                [t, [w, "OnePlus"],
                    [b, c]
                ],
                [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                [t, [w, g],
                    [b, p]
                ],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                    [t, /(.+)/g, "Fire Phone $1"],
                    [w, g],
                    [b, c]
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [t, w, [b, p]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [t, [w, k],
                    [b, c]
                ],
                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                [t, [w, x],
                    [b, p]
                ],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [t, [w, x],
                    [b, c]
                ],
                [/(nexus 9)/i],
                [t, [w, "HTC"],
                    [b, p]
                ],
                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],
                [w, [t, /_/g, " "],
                    [b, c]
                ],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [t, [w, "Acer"],
                    [b, p]
                ],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [t, [w, "Meizu"],
                    [b, c]
                ],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [t, [w, "Sharp"],
                    [b, c]
                ],
                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                [w, t, [b, c]],
                [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                [w, t, [b, p]],
                [/(surface duo)/i],
                [t, [w, q],
                    [b, p]
                ],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [t, [w, "Fairphone"],
                    [b, c]
                ],
                [/(u304aa)/i],
                [t, [w, "AT&T"],
                    [b, c]
                ],
                [/\bsie-(\w*)/i],
                [t, [w, "Siemens"],
                    [b, c]
                ],
                [/\b(rct\w+) b/i],
                [t, [w, "RCA"],
                    [b, p]
                ],
                [/\b(venue[\d ]{2,7}) b/i],
                [t, [w, "Dell"],
                    [b, p]
                ],
                [/\b(q(?:mv|ta)\w+) b/i],
                [t, [w, "Verizon"],
                    [b, p]
                ],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [t, [w, "Barnes & Noble"],
                    [b, p]
                ],
                [/\b(tm\d{3}\w+) b/i],
                [t, [w, "NuVision"],
                    [b, p]
                ],
                [/\b(k88) b/i],
                [t, [w, "ZTE"],
                    [b, p]
                ],
                [/\b(nx\d{3}j) b/i],
                [t, [w, "ZTE"],
                    [b, c]
                ],
                [/\b(gen\d{3}) b.+49h/i],
                [t, [w, "Swiss"],
                    [b, c]
                ],
                [/\b(zur\d{3}) b/i],
                [t, [w, "Swiss"],
                    [b, p]
                ],
                [/\b((zeki)?tb.*\b) b/i],
                [t, [w, "Zeki"],
                    [b, p]
                ],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [
                    [w, "Dragon Touch"], t, [b, p]
                ],
                [/\b(ns-?\w{0,9}) b/i],
                [t, [w, "Insignia"],
                    [b, p]
                ],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [t, [w, "NextBook"],
                    [b, p]
                ],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [
                    [w, "Voice"], t, [b, c]
                ],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [
                    [w, "LvTel"], t, [b, c]
                ],
                [/\b(ph-1) /i],
                [t, [w, "Essential"],
                    [b, c]
                ],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [t, [w, "Envizen"],
                    [b, p]
                ],
                [/\b(trio[-\w\. ]+) b/i],
                [t, [w, "MachSpeed"],
                    [b, p]
                ],
                [/\btu_(1491) b/i],
                [t, [w, "Rotor"],
                    [b, p]
                ],
                [/(shield[\w ]+) b/i],
                [t, [w, "Nvidia"],
                    [b, p]
                ],
                [/(sprint) (\w+)/i],
                [w, t, [b, c]],
                [/(kin\.[onetw]{3})/i],
                [
                    [t, /\./g, " "],
                    [w, q],
                    [b, c]
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [t, [w, E],
                    [b, p]
                ],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [t, [w, E],
                    [b, c]
                ],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [w, t, [b, u]],
                [/droid.+; (shield) bui/i],
                [t, [w, "Nvidia"],
                    [b, u]
                ],
                [/(playstation [345portablevi]+)/i],
                [t, [w, C],
                    [b, u]
                ],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [t, [w, q],
                    [b, u]
                ],
                [/smart-tv.+(samsung)/i],
                [w, [b, m]],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [t, /^/, "SmartTV"],
                    [w, A],
                    [b, m]
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                    [w, T],
                    [b, m]
                ],
                [/(apple) ?tv/i],
                [w, [t, "Apple TV"],
                    [b, m]
                ],
                [/crkey/i],
                [
                    [t, "Chromecast"],
                    [w, _],
                    [b, m]
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [t, [w, g],
                    [b, m]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [t, [w, "Sharp"],
                    [b, m]
                ],
                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                [
                    [w, M],
                    [t, M],
                    [b, m]
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [
                    [b, m]
                ],
                [/((pebble))app/i],
                [w, t, [b, f]],
                [/droid.+; (glass) \d/i],
                [t, [w, _],
                    [b, f]
                ],
                [/droid.+; (wt63?0{2,3})\)/i],
                [t, [w, E],
                    [b, f]
                ],
                [/(quest( 2)?)/i],
                [t, [w, U],
                    [b, f]
                ],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [w, [b, h]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [t, [b, c]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [t, [b, p]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [
                    [b, p]
                ],
                [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                [
                    [b, c]
                ],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [t, [w, "Generic"]]
            ],
            engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [l, [s, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [l, [s, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                [s, l],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [l, s]
            ],
            os: [
                [/microsoft (windows) (vista|xp)/i],
                [s, l],
                [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                [s, [l, V, F]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                    [s, "Windows"],
                    [l, V, F]
                ],
                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                [
                    [l, /_/g, "."],
                    [s, "iOS"]
                ],
                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                [
                    [s, "Mac OS"],
                    [l, /_/g, "."]
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                [l, s],
                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                [s, l],
                [/\(bb(10);/i],
                [l, [s, k]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [l, [s, "Symbian"]],
                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                [l, [s, "Firefox OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [l, [s, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [l, [s, "Chromecast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [
                    [s, "Chromium OS"], l
                ],
                [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                [s, l],
                [/(sunos) ?([\w\.\d]*)/i],
                [
                    [s, "Solaris"], l
                ],
                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                [s, l]
            ]
        },
        I = function(o, t) {
            if (typeof o === a && (t = o, o = e), !(this instanceof I)) return new I(o, t).getResult()
            var s = o || (typeof i !== r && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                b = t ? function(i, e) {
                    var o = {}
                    for (var r in i) e[r] && e[r].length % 2 == 0 ? o[r] = e[r].concat(i[r]) : o[r] = i[r]
                    return o
                }(D, t) : D
            return this.getBrowser = function() {
                var i, o = {}
                return o.name = e, o.version = e, P.call(o, s, b.browser), o.major = typeof(i = o.version) === n ? i.replace(/[^\d\.]/g, "").split(".")[0] : e, o
            }, this.getCPU = function() {
                var i = {}
                return i.architecture = e, P.call(i, s, b.cpu), i
            }, this.getDevice = function() {
                var i = {}
                return i.vendor = e, i.model = e, i.type = e, P.call(i, s, b.device), i
            }, this.getEngine = function() {
                var i = {}
                return i.name = e, i.version = e, P.call(i, s, b.engine), i
            }, this.getOS = function() {
                var i = {}
                return i.name = e, i.version = e, P.call(i, s, b.os), i
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return s
            }, this.setUA = function(i) {
                return s = typeof i === n && i.length > 255 ? M(i, 255) : i, this
            }, this.setUA(s), this
        }
    I.VERSION = "0.7.31", I.BROWSER = j([s, l, "major"]), I.CPU = j([d]), I.DEVICE = j([t, w, b, u, c, m, p, f, h]), I.ENGINE = I.OS = j([s, l]), typeof exports !== r ? (typeof module !== r && module.exports && (exports = module.exports = I), exports.UAParser = I) : typeof define === o && define.amd ? define((function() {
        return I
    })) : typeof i !== r && (i.UAParser = I)
    var W = typeof i !== r && (i.jQuery || i.Zepto)
    if (W && !W.ua) {
        var G = new I
        W.ua = G.getResult(), W.ua.get = function() {
            return G.getUA()
        }, W.ua.set = function(i) {
            G.setUA(i)
            var e = G.getResult()
            for (var o in e) W.ua[o] = e[o]
        }
    }
})("object" == typeof window ? window : this)