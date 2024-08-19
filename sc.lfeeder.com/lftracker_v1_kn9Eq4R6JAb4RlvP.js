! function() {
    "use strict";

    function c(n) {
        var e = U();
        return e[n] = e[n] || {
            id: n,
            plugins: {},
            getPlugins: function() {
                var n, e = [];
                for (n in this.plugins) e.push(this.plugins[n]);
                return e
            },
            autoTrackingInitialized: !1
        }, e[n]
    }

    function P(n, e) {
        n = c(n);
        return n.plugins[e] = n.plugins[e] || {}, n.plugins[e]
    }

    function U() {
        var n = h();
        return n.r = n.r || {}, n.r
    }
    d() && (window.ldfdr.registerTracker = function(n, e, t, r, i, o, a) {
        return (n = c(n)).track = e, n.identify = t, n.pageview = r, n.getClientId = i, n.acceptCookie = o, n.rejectCookie = a, n
    }, window.ldfdr.setTrackerOption = function(n, e, t, r) {
        c(n)[e] = void 0 !== r ? r : t
    }, window.ldfdr.registerPlugin = function(n, e, t) {
        var r = c(n),
            i = P(n, e);
        i.init = function() {
            try {
                t()
            } catch (n) {
                console.error("Error during plugin initialization", i, n)
            }
        }, r.pluginsInitialized && i.init()
    }, window.ldfdr.registerPluginConfig = function(n, e, t, r) {
        P(n, e).config = void 0 !== r ? r : t
    });
    var n, e, j, m = "kn9Eq4R6JAb4RlvP",
        J = "2.63.0",
        G = "_lfa_debug_settings",
        F = ["cookieDomain", "enableAutoTracking", "trackingCookieDurationDays"];
    if ("undefined" != typeof window && void 0 !== window.ldfdr) {
        window.ldfdr = window.ldfdr || {}, window.ldfdr.cfg = window.ldfdr.cfg || {};
        var t = function() {
                var n = I(G) || "{}";
                try {
                    return JSON.parse(n)
                } catch (n) {
                    return {}
                }
            }(),
            r = (n = window.ldfdr, e = m, j = J, t = t, n.setTrackerOption(e, "lfaCookieEnabled", !0, t.enableCookie), n.setTrackerOption(e, "consentManagementEnabled", !1, t.enableCm), n.setTrackerOption(e, "useSendBeaconApi", !1, t.useBeacon), n.setTrackerOption(e, "autoTrackingMode", "spa", t.atMode), n.setTrackerOption(e, "foreignCookieSettings", {
                "intercom": "^intercom-id-.*",
                "hubspot": "^hubspotutk$"
            }), n.setTrackerOption(e, "crossDomainLinking", {
                "enabled": false
            }), n.setTrackerOption(e, "useDualStackEndpoint", !1, t.useDs), n.setTrackerOption(e, "trackingCookieDurationDays", 365), n.setTrackerOption(e, "gtagInjectionEnabled", !0, t.gtagInjectionEnabled), n.setTrackerOption(e, "version", j), n.registerPluginConfig(e, "file-downloads", {
                filesEnabled: !0,
                filesToMatch: /(\.pdf|\.doc|\.docx|\.xls|\.xlsx|\.ppt|\.pptx|\.key|\.txt|\.dmg|\.exe)(\?|$)/
            }), n.registerPluginConfig(e, "form-tracking", {
                formTrackingMode: "all_but_excluded",
                fields: [{
                    "nameRegex": "email",
                    "type": "email",
                    "lfProperty": "email"
                }, {
                    "nameRegex": "email",
                    "type": "text",
                    "lfProperty": "email"
                }, {
                    "nameRegex": "first_name",
                    "type": "text",
                    "lfProperty": "first_name"
                }, {
                    "nameRegex": "firstname",
                    "type": "text",
                    "lfProperty": "first_name"
                }, {
                    "nameRegex": "last_name",
                    "type": "text",
                    "lfProperty": "last_name"
                }, {
                    "nameRegex": "lastname",
                    "type": "text",
                    "lfProperty": "last_name"
                }, {
                    "nameRegex": "mobilephone",
                    "type": "text",
                    "lfProperty": "phone"
                }, {
                    "nameRegex": "phone",
                    "type": "tel",
                    "lfProperty": "phone"
                }, {
                    "nameRegex": "phone",
                    "type": "text",
                    "lfProperty": "phone"
                }],
                excluded: []
            }, t.trackForms), n.registerPluginConfig(e, "yt-playback", {
                ytPlaybackTrackingEnabled: !0
            }, t.trackYt), n.registerPluginConfig(e, "vimeo-playback", {
                vimeoPlaybackTrackingEnabled: !0
            }, t.trackVimeo), n.registerPluginConfig(e, "intercom-tracking", {
                intercomTrackingEnabled: !1
            }, t.trackIntercom), n.registerPluginConfig(e, "discover", {
                jsConnectorConfigs: []
            }), n.registerPluginConfig(e, "spa-tracking", {}), n.registerPluginConfig(e, "ga-connector", {
                gaConnectorSettings: []
            }), window.ldfdr),
            B = m;
        r._q = r._q || [];
        for (var z = 0; z < r._q.length; z++) {
            var W, i = r._q[z];
            "cfg" === i[0] && (4 != i.length ? console.warn("* [leadfeeder] invalid 'cfg' command", i) : (W = i[1], -1 == F.indexOf(W) ? console.warn("* [leadfeeder] unsupported 'cfg' command", i) : i[3] === B && r.setTrackerOption(B, W, i[2])))
        }
    }
    var q = "__discoverLoadEventEmitted",
        K = {
            get: function(n) {
                return window[n]
            },
            set: function(n, e) {
                window[e] = n
            },
            clear: function(n) {
                this.set(null, n)
            }
        };

    function V(r, i) {
        var o, n, e, a;
        if (!r[q]) return o = window.location.hostname, n = window.location.pathname, e = r.paths, a = function(n) {
            return n === x || n[n.length - 1] !== x ? n : n.slice(0, -1)
        }(a = "" === n ? x : n), e.some(function(n) {
            return e = o, t = a, n = function(n) {
                return n.split(/\/(.*)/).filter(function(n) {
                    return "" !== n
                })
            }(n = n), r = n[0], n = x + (2 <= n.length ? n[1] : ""), r === e && (n === t || (r = t, 0 <= (e = n).indexOf("*") && 0 === r.indexOf(e.replace("/*", "").replace("*", ""))) || e === x);
            var e, t, r
        }) ? void _n(r.api_key, function(n) {
            var e, t;
            n = n, e = r.js_object_name, 200 !== n.meta.status && 404 !== n.meta.status || K.set(n, e), t = r.event_name, window.dataLayer = window.dataLayer || [], window.dataLayer.some(function(n) {
                return n.event === t
            }) || (window[q] = !0, window.dataLayer.push({
                event: t
            })), r[q] = !0, i()
        }) : i()
    }
    d() && h().registerPlugin(m, "discover", function() {
        var n = h().getTracker(m).plugins.discover.config;
        (n = n).jsConnectorConfigs && 0 !== n.jsConnectorConfigs.length && Ae(n.jsConnectorConfigs.map(function(e) {
            return function(n) {
                V(e, n)
            }
        }), 0)
    }), d() && h().registerPlugin(m, "file-downloads", function() {
        var o = h().getTracker(m),
            i = o.plugins["file-downloads"].config;

        function a(r) {
            function i() {
                var n, e, t;
                r.removeEventListener("click", i), pn(), o.track((e = function(n) {
                    var n = n.replace(/https?\:\/\//, "").split("/"),
                        e = n[n.length - 1].replace(/[\?&].*/, "");
                    return 1 != n.length && e ? e : null
                }((n = r).href), t = window.location.href, {
                    eventType: "file-download",
                    properties: {
                        url: function(n, e) {
                            return "/" == n.href.charAt(0) ? function(n) {
                                return "/" == n.charAt(n.length - 1) ? n.substr(0, n.length - 1) : n
                            }(e) + n.href : n.href
                        }(n, t),
                        filename: e
                    },
                    pageUrl: t,
                    pageTitle: e
                }))
            }
            r.addEventListener("click", i)
        }

        function n() {
            for (var n = document.getElementsByTagName("a"), e = 0; e < n.length; e++) {
                var t, r = n[e];
                !(r.getAttribute("href") + "").match(i.filesToMatch) || r.getAttribute(t = "data-lf-fd-inspected-" + m) || (r.setAttribute(t, "true"), a(r))
            }
        }
        i.filesEnabled && (n(), M(n))
    }), d() && h().registerPlugin(m, "form-tracking", function() {
        var n, e, t, r = 500,
            u = ["button", "hidden", "image", "password", "reset", "submit"],
            i = 0,
            o = h().getTracker(m),
            f = (n = o.plugins["form-tracking"].config, e = (n.fields || []).map(function(n) {
                return {
                    nameRegex: new RegExp(n.nameRegex, "i"),
                    type: n.type,
                    lfProperty: n.lfProperty
                }
            }), t = (n.excluded || []).map(function(n) {
                var e, t = {};
                for (e in n) t[e] = new RegExp(n[e], "i");
                return t
            }), {
                formTrackingMode: n.formTrackingMode,
                fields: e,
                excluded: t
            });

        function a(n) {
            g(n.target, "submit-event")
        }

        function c(n) {
            var e;
            return n ? (e = n.type, n = n.tagName.toLowerCase(), "submit" === e ? "submit-button" : "button" === e || "button" === n ? "normal-button" : null) : null
        }

        function s(n) {
            var e, n = n.target,
                t = c(n) || c(n.parentElement);
            t && -1 == (e = ((e = n).innerText || e.value || "").toLowerCase()).indexOf("prev") && -1 == e.indexOf("next") && (e = n.form || n.closest("form")) && g(e, t)
        }

        function l(n, e) {
            return !(!n || !e || !(e = n.match(e)) || n !== e[0])
        }

        function d(r) {
            var i = window.location.href;
            return f.excluded.some(function(n) {
                return l(i, n.pageUrl) || function(n, e) {
                    if (e.inputName)
                        for (var t = n.elements, r = 0; r < t.length; r++)
                            if (l(t[r].name, e.inputName)) return !0;
                    return !1
                }(r, n) || l(r.id, n.formId) || (e = r, !!(t = n).formClass && e.className.split(/\s+/).some(function(n) {
                    return l(n, t.formClass)
                }));
                var e, t
            })
        }

        function g(n, e) {
            if (!(d(n) || i + r >= (new Date).getTime())) {
                var t = function(n) {
                    for (var e = {}, t = n.elements, r = f.fields ? f.fields.filter(function(n) {
                            return !!n.lfProperty
                        }) : [], i = 0; i < t.length; i++) {
                        var o = t[i],
                            a = o.name,
                            c = !!o.style && "none" == o.style.display;
                        !a || 0 <= u.indexOf(o.type) || c || (e[a] = {
                            name: a,
                            type: o.type
                        }, function(n) {
                            return "text" === (n = n.type) || "email" === n || !n
                        }(o) && Re(o.value) && (e[a].suggestedLfProperty = "email"), function(e) {
                            switch (f.formTrackingMode) {
                                case "configured_fields":
                                    return f.fields.some(function(n) {
                                        return p(e, n)
                                    });
                                case "all_but_excluded":
                                    return 1;
                                default:
                                    return
                            }
                        }(o) && (e[a].value = o.value, c = function(n, e) {
                            for (var t = 0; t < e.length; t++) {
                                var r = e[t];
                                if (p(n, r)) return r.lfProperty
                            }
                            return null
                        }(o, r)) && (e[a].lfProperty = c))
                    }
                    return Se(e)
                }(n);
                if (t && 0 != t.length) {
                    i = (new Date).getTime(), pn();
                    try {
                        o.track(function(n, e, t) {
                            var e = {
                                    formTrackingMode: f.formTrackingMode,
                                    formEventType: e
                                },
                                r = n.getAttribute("id"),
                                i = n.getAttribute("class"),
                                n = n.getAttribute("action");
                            r && (e.formId = r);
                            i && (e.formClass = i);
                            n && (e.formAction = n);
                            t && (e.inputFields = t);
                            return {
                                eventType: "form-submit",
                                properties: e
                            }
                        }(n, e, t), function() {})
                    } catch (n) {}
                }
            }
        }

        function p(n, e) {
            return (!e.type || e.type === n.type) && n.name.match(e.nameRegex)
        }

        function w(n) {
            try {
                n.contentDocument && (n.contentDocument.addEventListener("submit", a), n.contentDocument.addEventListener("click", s, !0))
            } catch (n) {}
        }

        function v() {
            for (var n = document.getElementsByTagName("iframe"), e = 0; e < n.length; e++) ! function(n) {
                var e = "data-lf-form-tracking-inspected-" + m;
                n.getAttribute(e) || (n.setAttribute(e, "true"), w(n), n.addEventListener("load", function() {
                    w(n)
                }))
            }(n[e])
        }
        switch (f.formTrackingMode) {
            case "disabled":
                return;
            case "metadata":
            case "configured_fields":
            case "all_but_excluded":
                return document.addEventListener("submit", a), document.addEventListener("click", s, !0), v(), void M(v);
            default:
                return
        }
    });
    var Y = null,
        $ = "__gaConnectorEventsEmitted",
        X = "LFcompanyData",
        H = "LFvisitorInfo";

    function Z(n) {
        -1 === window[$].indexOf(n) && window[$].push(n)
    }

    function Q(o, a) {
        setTimeout(function() {
            var n, e, t;
            n = o.ga_id, e = function(i) {
                if (!i) return a();
                _n(o.api_key, function(n) {
                    var e, t, r, n = Cn(n.data, o.mappings);
                    e = i, t = o.ga_id, n = n, r = s(window), null !== n && (r((e = e.get("name")) + ".set", n), r(e + ".send", {
                        hitType: "event",
                        eventCategory: H,
                        eventAction: X,
                        nonInteraction: !0
                    }), Z(t)), a()
                })
            }, t = n.toLowerCase(), s(window)(function() {
                if (void 0 === s(window).getAll) return e(null);
                var n = s(window).getAll().filter(function(n) {
                    return n.get("trackingId").toLowerCase() == t
                })[0];
                e(n)
            })
        }, 100)
    }

    function nn(n, e) {
        e = e || [], window.dataLayer = window.dataLayer || e, window.gtag = function() {
            window.dataLayer.push(arguments)
        }, window.gtag("js", new Date), window.gtag("config", n, {
            send_page_view: !1
        })
    }

    function en(n, e) {
        var t, r, i;
        t = "https://www.googletagmanager.com/gtag/js?id=" + n, r = function() {
            nn(n), e()
        }, (i = document.createElement("script")).type = "text/javascript", i.src = t, i.onload = function() {
            r && r()
        }, document.getElementsByTagName("head")[0].appendChild(i)
    }

    function tn(i, o) {
        function n() {
            _n(i.api_key, function(n) {
                var e, t, r, n = Cn(n.data, i.mappings);
                e = i.ga_id, n = n, r = En(window), null !== n && ((t = JSON.parse(JSON.stringify(n))).user_properties = n, t.event_category = H, t.non_interaction = !0, t.send_to = e, r("event", X, t), Z(e)), o()
            })
        }
        var e, t, r, a;
        En(window) ? (t = i.ga_id, r = n, a = o, ((e = f(window)) && e[t] ? r : a)()) : !0 !== N().gtagInjectionEnabled ? (e = i.ga_id, t = n, r = o, ((a = (a = f(window)) && a[e]) ? (nn(e, a.dataLayer), t) : r)()) : en(i.ga_id, n)
    }

    function rn(n) {
        (s(window) || En(window) || f(window)) && (clearInterval(Y), Ae(n.map(function(t) {
            return function(n) {
                var e;
                n = n, On((e = t).ga_id) ? tn(e, n) : s(window) ? Q(e, n) : n()
            }
        }), 0))
    }
    window[$] = [], d() && h().registerPlugin(m, "ga-connector", function() {
        var n, e = h().getTracker(m).plugins["ga-connector"].config;
        (n = e).gaConnectorSettings && 0 !== n.gaConnectorSettings.length && (Y = setInterval(function() {
            rn(n.gaConnectorSettings)
        }, 300), setTimeout(function() {
            clearInterval(Y)
        }, 1e4))
    }), d() && h().registerPlugin(m, "intercom-tracking", function() {
        var n, e, t, r, i, o, a = h().getTracker(m);

        function c() {
            clearInterval(i), n() ? clearTimeout(o) : (e *= t, i = setInterval(c, e))
        }
        a.plugins["intercom-tracking"].config.intercomTrackingEnabled && (n = function() {
            return void 0 !== window.Intercom && window.Intercom.booted && (window.Intercom("update", {
                lfClientId: a.getClientId()
            }), 1)
        }, e = e || 100, t = t || 1.5, r = r || 15e3, o = setTimeout(function() {
            clearInterval(i)
        }, r), i = setInterval(c, e))
    });
    var on = null,
        an = null;

    function u(e, t, r) {
        setTimeout(function() {
            r && (on = an);
            var n = {
                pageUrl: an = t
            };
            on && (n.referrer = on), e.pageview(n)
        }, 0)
    }

    function cn(n) {
        var i, o, a, c;
        window.history && (i = n, o = window.history, a = o.pushState, o.pushState = function(n, e, t) {
            var r = a.apply(o, arguments);
            return u(i, window.location.href, !0), r
        }, c = o.replaceState, o.replaceState = function(n, e, t) {
            var r = c.apply(o, arguments);
            return u(i, window.location.href, !1), r
        }, window.addEventListener("popstate", function() {
            u(n, window.location.href, !0)
        }), window.addEventListener("hashchange", function() {
            u(n, window.location.href, !0)
        }))
    }

    function un(n) {
        return n.src.replace("/?", "?").split("/").pop().split("?")[0]
    }

    function fn(n, e, t) {
        e = {
            method: e
        }, t && (e.value = t), t = JSON.stringify(e);
        n.contentWindow.postMessage(t, "*")
    }

    function sn(n) {
        return (R(n.src, "http://player.vimeo.com") || R(n.src, "https://player.vimeo.com")) && !!un(n)
    }

    function ln(n) {
        sn(n) && (fn(n, "addEventListener", "play"), fn(n, "getVideoTitle", ""))
    }

    function dn() {
        var n = document.getElementsByTagName("iframe");
        if (n.length)
            for (var e = 0; e < n.length; e++) {
                var t = n[e],
                    r = "data-lf-vimeo-playback-inspected-" + m;
                t.getAttribute(r) || (t.setAttribute(r, "true"), ln(t), t.addEventListener("load", function() {
                    ln(t)
                }))
            }
    }
    d() && h().registerPlugin(m, "spa-tracking", function() {
        var n = h().getTracker(m);
        n = n, an = window.location.href, "spa" === n.autoTrackingMode && cn(n)
    }), d() && h().registerPlugin(m, "vimeo-playback", function() {
        var e, t = h().getTracker(m);

        function r(n) {
            return e[n] || (e[n] = {
                src: n,
                tracked: !1,
                videoData: null
            }), e[n]
        }

        function i(n) {
            var e = r(n.src);
            e.tracked || (e.tracked = !0, n = "https://vimeo.com/" + un(n), t.track({
                eventType: "video-start",
                properties: {
                    videoUrl: n,
                    videoTitle: e.title
                }
            }))
        }

        function n(n) {
            if (!/^https?:\/\/player.vimeo.com/.test(n.origin)) return !1;
            var e = function(e) {
                    try {
                        return JSON.parse(e.data)
                    } catch (n) {
                        return e.data
                    }
                }(n),
                t = function(n) {
                    for (var e = document.getElementsByTagName("iframe"), t = 0; t < e.length; t++)
                        if (n.source === e[t].contentWindow) return e[t];
                    return null
                }(n);
            if (null == t) return !1;
            switch (e.event) {
                case "ready":
                    ln(t);
                    break;
                case "play":
                    i(t)
            }
            "getVideoTitle" == e.method && (r(t.src).title = e.value, -1 !== t.src.indexOf("autoplay=1")) && i(t)
        }
        t.plugins["vimeo-playback"].config.vimeoPlaybackTrackingEnabled && window.postMessage && (e = {}, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n, !1), dn(), M(dn))
    }), d() && h().registerPlugin(m, "yt-playback", function() {
        var o, e, i, a, t = h().getTracker(m);

        function n() {
            var n = document.getElementsByTagName("iframe");
            if (n.length) {
                i || (window.addEventListener("message", function(n) {
                    if (-1 !== ["https://www.youtube.com", "https://www.youtube-nocookie.com"].indexOf(n.origin) && void 0 !== n.data) {
                        var e, t = n;
                        try {
                            e = JSON.parse(t.data)
                        } catch (t) {
                            return
                        }
                        var r = function(n, e) {
                            if (o[n]) return o[n];
                            for (var t = document.getElementsByTagName("iframe"), r = 0; r < t.length; r++) {
                                var i = t[r];
                                if (i.contentWindow === e.source || i.contentDocument && i.contentDocument.defaultView === e.source) return o[n] = i
                            }
                            return null
                        }(e.id, t);
                        if (null !== r) switch (e.event) {
                            case "initialDelivery":
                                ! function(n, e) {
                                    e = f(e.src);
                                    n.info && n.info.videoData && !e.videoData && (e.videoData = n.info.videoData)
                                }(e, r);
                                break;
                            case "onStateChange":
                                ! function(n, e) {
                                    -1 === n.info && u(e)
                                }(e, r)
                        }
                    }
                }), i = !0);
                for (var e = 0; e < n.length; e++) {
                    var t = n[e],
                        r = "data-lf-yt-playback-inspected-" + m;
                    t.getAttribute(r) || (t.setAttribute(r, "true"), c(t, r = ++a + 1e3), t.addEventListener("load", function(n, e) {
                        return function() {
                            c(n, e)
                        }
                    }(t, r)))
                }
            }
        }

        function c(n, e) {
            if (function(n) {
                    return R(n.src, "https://www.youtube.com/embed/") || R(n.src, "https://www.youtube-nocookie.com/embed/")
                }(t = n) && function(n) {
                    return s(n)
                }(t) && -1 === t.src.indexOf("enablejsapi=0")) {
                var t, r;
                if (-1 === n.src.indexOf("autoplay=1")) return -1 === n.src.indexOf("enablejsapi") ? (r = -1 === (t = n).src.indexOf("?") ? "?" : "&", r = (r += "enablejsapi=1") + "&origin=" + window.location.origin, t.src = t.src + r) : (t = n, r = e, void(("undefined" == typeof YT || "function" == typeof YT.get && t.id && void 0 === YT.get(t.id)) && (l(o[r] = t, {
                    event: "listening",
                    id: r,
                    channel: "widget"
                }), l(t, {
                    event: "command",
                    func: "addEventListener",
                    args: ["onStateChange"],
                    id: r,
                    channel: "widget"
                }))));
                u(n)
            }
        }

        function u(n) {
            var e = f(n.src);
            e.tracked || (e.tracked = !0, n = "https://www.youtube.com/watch?v=" + s(n), t.track({
                eventType: "video-start",
                properties: {
                    videoUrl: n,
                    videoTitle: function(n) {
                        if (n) return n.title
                    }(e.videoData)
                }
            }))
        }

        function f(n) {
            return e[n] || (e[n] = {
                src: n,
                tracked: !1,
                videoData: null
            }), e[n]
        }

        function s(n) {
            return n.src.split("/")[4].split("?")[0]
        }

        function l(n, e) {
            e = JSON.stringify(e);
            n.contentWindow.postMessage(e, "*")
        }
        t.plugins["yt-playback"].config.ytPlaybackTrackingEnabled && window.postMessage && (o = {}, i = !(e = {}), a = 0, n(), M(n))
    });
    var gn = 250;

    function pn() {
        var n;
        n = (new Date).getTime() + gn, h().suppressUnloadUntil = n
    }

    function wn() {
        var n = new Date,
            e = h().suppressUnloadUntil;
        if (!(e < n.getTime()))
            for (; e >= n.getTime(); 0) n = new Date
    }!d() || "suppressUnloadUntil" in h() || (h().suppressUnloadUntil = 0, window.addEventListener("beforeunload", wn, !1));
    var vn, mn = "_lfa",
        hn = 5;

    function kn(n) {
        n.crossDomainLinking.enabled && n.lfaCookieEnabled && (vn = window.location.href, document.addEventListener("mousedown", function(n) {
            var e;
            (n = function(n) {
                var e, t = 0;
                do {
                    if (function(n) {
                            return n && (n = String(n.nodeName).toLowerCase(), -1 !== ["a", "area"].indexOf(n))
                        }(n)) return n
                } while (e = n.parentNode, e = (n = e) ? n.parentNode : null, t++, null !== e && t < 100);
                return null
            }(n = n.target)) && function(n) {
                var e = n.getAttribute("href");
                if (!e) return;
                if (_e(e = String(e))) {
                    var t = n.hostname,
                        r = document.location.hostname,
                        i = N().crossDomainLinking.allowedDomains;
                    if (!bn(t, r))
                        for (var o = 0; o < i.length; o++)
                            if (!bn(r, i[o]) && bn(t, i[o])) return 1
                }
                return
            }(n) && (e = (n = n).getAttribute("href"), n.setAttribute("href", function(n) {
                n = Ie(n, mn);
                var e = function() {
                    var n = N().getClientId(),
                        e = String(Tn());
                    return n + "-" + e
                }();
                return be(n, mn, e)
            }(e)))
        }))
    }

    function yn() {
        if (N().crossDomainLinking.enabled) {
            var n = vn;
            if (n = Ce(n, mn)) {
                n = function(n) {
                    if (47 === n.length && /^LF\d\.\d\.[0-9a-z]{16}\.\d{13}-\d{10}$/.test(n)) {
                        var n = n.split("-"),
                            e = n[0],
                            n = parseInt(n[1]),
                            t = Tn();
                        if (!(Math.abs(t - n) > hn)) return e
                    }
                }(n = String(n));
                if (n) return n
            }
        }
    }

    function Tn() {
        return Math.floor((new Date).getTime() / 1e3)
    }

    function bn(n, e) {
        n = n.toLowerCase(), e = e.toLowerCase();
        for (var t = n.split("."), r = e.split("."), i = 1; i <= r.length; i++)
            if (r[r.length - i] !== t[t.length - i]) return;
        return 1
    }
    var o = {
        key: "__lf_discover",
        softRefresh: 18e5,
        ttl: 864e6,
        storedAt: null,
        get: function() {
            if (_()) {
                var n = window.localStorage.getItem(this.key);
                if (null !== n) {
                    var e = null;
                    try {
                        e = JSON.parse(n), this.storedAt = e.storedAt, delete e.storedAt
                    } catch (n) {
                        if (n instanceof SyntaxError) return;
                        throw n
                    }
                    return e
                }
            }
        },
        set: function(n) {
            _() && (n.storedAt = Date.now(), window.localStorage.setItem(this.key, JSON.stringify(n)), delete n.storedAt)
        },
        clear: function() {
            _() && (this.storedAt = null, window.localStorage.removeItem(this.key))
        },
        isExpired: function() {
            return null === this.storedAt || void 0 === this.storedAt || Date.now() >= this.storedAt + this.ttl
        },
        isSoftExpired: function() {
            return null === this.storedAt || void 0 === this.storedAt || Date.now() >= this.storedAt + this.softRefresh
        }
    };

    function In(n) {
        200 !== n.meta.status && 404 !== n.meta.status || o.set(n)
    }

    function a(n, e) {
        var t = new XMLHttpRequest;
        t.open("GET", n, !0), t.onload = function() {
            var n;
            200 === this.status && (n = function(n) {
                try {
                    return JSON.parse(n)
                } catch (n) {
                    if (n instanceof SyntaxError) return {
                        meta: {
                            status: 404
                        }
                    };
                    throw n
                }
            }(this.response), e(n))
        }, t.send()
    }

    function Cn(r, n) {
        var e, i;
        return n && r && (e = "attribute", n.map(function(n) {
            return Oe(n, e)
        }).map(function(n) {
            return Oe(r, n)
        }).some(function(n) {
            return null != n && "" !== n
        })) ? (i = {}, n.forEach(function(n) {
            var e = Oe(r, n.attribute),
                t = n.dimension;
            i[t] = e || n.fallback_value
        }), i) : null
    }

    function _n(n, e) {
        var n = "https://cs.lf-discover.com/companies/?api_key=" + n,
            t = Ce(window.location.href, "_lf_discover_demo"),
            r = ("" !== t && (n = be(n, "demo", t)), o.get());
        "" !== t ? a(n, function(n) {
            e(n)
        }) : null == r ? a(n, function(n) {
            In(n), e(n)
        }) : o.isExpired() ? (o.clear(), a(n, function(n) {
            In(n), e(n)
        })) : o.isSoftExpired() ? (e(r), a(n, function(n) {
            In(n)
        })) : e(r)
    }

    function En(n) {
        return n.gtag || null
    }

    function f(n) {
        return n.google_tag_manager || {}
    }

    function s(n, e) {
        return (e = n.GoogleAnalyticsObject || "ga") && n[e] ? n[e] : null
    }

    function Sn(n) {
        return n._gat || null
    }

    function l(n, e, t) {
        void 0 !== n && -1 === e.indexOf(n) && (t && "object" == typeof n && "string" == typeof n.vtp_trackingId ? e.push(n.vtp_trackingId) : e.push(n))
    }

    function On(n) {
        return /^G-[A-Z0-9]*/.test(n)
    }

    function Nn() {
        for (var n = 0, e = [], t = (window.dataLayer || []).filter(function(n) {
                return n && "config" == n[0]
            }).map(function(n) {
                return n[1]
            }), r = Object.keys(f(window)).filter(On), n = 0; n < t.length; n++) l(t[n], e);
        for (n = 0; n < r.length; n++) l(r[n], e);
        return e
    }

    function An() {
        var n, e = {
            clientIds: [],
            trackingIds: [],
            measurementIds: Nn()
        };
        if (null !== s(window))
            for (var t = window, r = e, i = !(t = s(t)) || "function" != typeof t.getAll ? [] : t.getAll(), o = 0; o < i.length; o++) l(i[o].get("clientId"), r.clientIds), l(i[o].get("trackingId"), r.trackingIds);
        else
            for (var t = window, a = e, c = !(t = Sn(t)) || "function" != typeof t._getTrackers ? [] : t._getTrackers(), u = 0; u < c.length; u++) l(c[u]._getAccount(), a.trackingIds, !0);
        return e.clientIds.length || (n = function() {
            var n = I("_ga");
            if (n) {
                n = n.split(".");
                if (!(n.length < 2)) return n[n.length - 2] + "." + n[n.length - 1]
            }
        }()) && e.clientIds.push(n), e
    }

    function h() {
        return "undefined" == typeof window ? null : window.ldfdr
    }

    function d() {
        return "undefined" != typeof window && void 0 !== window.ldfdr
    }

    function g(e) {
        var n = Se(U());
        return Ee(e) ? n.map(function(n) {
            return e(n)
        }) : n
    }
    window.ldfdr.getTracker = function(n, e) {
        return n = U()[n] || null, Ee(e) ? e(n) : n
    }, window.ldfdr.getAll = g, window.ldfdr.track = function(e) {
        g(function(n) {
            n.track(e)
        })
    }, window.ldfdr.identify = function(e) {
        g(function(n) {
            n.identify(e)
        })
    }, window.ldfdr.pageview = function(e) {
        g(function(n) {
            n.pageview(e)
        })
    }, window.ldfdr.acceptCookie = function(e) {
        return g(function(n) {
            return n.acceptCookie(e)
        }).some(function(n) {
            return !0 === n
        })
    }, window.ldfdr.rejectCookie = function(e) {
        return g(function(n) {
            return n.rejectCookie(e)
        }).some(function(n) {
            return !0 === n
        })
    }, window.ldfdr.setDebugSettings = function(n) {
        Pn(G, JSON.stringify(n), 36e5)
    };
    var Dn, p = "none",
        w = "basic",
        v = "all",
        Ln = [p, w, v],
        xn = "__lfaCmClientId",
        k = "_lfa",
        y = "LF1.1",
        T = "_lfa_consent";

    function Rn() {
        Jn(Gn()), Jn(k), Mn(k), Jn(T), Mn(T)
    }

    function Mn(n) {
        if (I(n)) {
            var e = window.ldfdr.cfg.cookieDomain;
            if (e) Kn(n, e);
            else
                for (var t = Wn().reverse(), r = 0; r < t.length; r++)
                    if (Kn(n, e = t[r]), !I(n)) return
        }
    }

    function Pn(n, e, t) {
        var r = window.ldfdr.cfg.cookieDomain || Dn;
        if (r) C(n, e, t, "/", r);
        else
            for (var i = Wn(), o = 0; o < i.length; o++)
                if (C(n, e, t, "/", r = i[o]), Un(r) && I(n) === e) return void(Dn = r)
    }

    function Un(n) {
        var e = "_lfa_test_cookie_stored",
            t = (new Date).getTime().toString() + "-" + Math.random().toString(),
            t = (C(e, t, 1e3, "/", n), I(e) === t);
        return Kn(e, n), t
    }

    function jn(n, e, t) {
        Pn(n, e, t), _() && (window.localStorage.setItem(n, e), (n = new Date).setTime(n.getTime() + t), window.localStorage.setItem(Gn(), n.toISOString()))
    }

    function Jn(n) {
        _() && window.localStorage.removeItem(n)
    }

    function Gn() {
        return k + "_expiry"
    }

    function Fn() {
        return function() {
            var n = I(k);
            if (n) {
                if (!R(n, y)) {
                    var e = function(n) {
                        var e;
                        try {
                            e = function(n) {
                                return n && (n = function(n) {
                                    try {
                                        return decodeURIComponent(window.atob(n).split("").map(function(n) {
                                            return "%" + ("00" + n.charCodeAt(0).toString(16)).slice(-2)
                                        }).join(""))
                                    } catch (n) {
                                        return 0
                                    }
                                }(n)) ? JSON.parse(n) : 0
                            }(n)
                        } catch (n) {
                            return 0
                        }
                        return e ? Se(e)[0] : 0
                    }(n);
                    if (e) return e
                }
                return n
            }
        }() || function() {
            if (!_()) return 0;
            var n = window.localStorage.getItem(k);
            if (null == n) return 0;
            var e = window.localStorage.getItem(Gn());
            null != e && (new Date).toISOString() > e && (n = 0);
            return n
        }()
    }

    function b() {
        var n = I(T);
        return (n = !n && _() ? window.localStorage.getItem(T) : n) ? "true" === n ? v : -1 == Ln.indexOf(n) ? null : n : null
    }

    function I(n) {
        n = new RegExp("(^|;)[ ]*" + n + "=([^;]*)").exec(document.cookie);
        return n ? window.decodeURIComponent(n[2]) : 0
    }

    function Bn(n, e) {
        return n && R(n, y) || (n = qn(Ne())), jn(k, n, e), n
    }

    function zn(n, e) {
        return -1 == Ln.indexOf(n) ? b() : (jn(T, n, e), n)
    }

    function Wn(n) {
        var n = n || document.location.hostname,
            e = (n = 0 === n.indexOf("www.") ? n.substring(4) : n).split(".");
        if (4 === e.length) {
            n = e[e.length - 1];
            if (parseInt(n, 10) == n) return ["none"]
        }
        for (var t = [], r = e.length - 2; 0 <= r; r--) t.push(e.slice(r).join("."));
        return t.push("none"), t
    }

    function qn(n) {
        return y + "." + n + "." + (new Date).getTime()
    }

    function Kn(n, e) {
        C(n, "", -3600, "/", e)
    }

    function C(n, e, t, r, i, o) {
        var a;
        t && (a = new Date).setTime(a.getTime() + t), document.cookie = n + "=" + window.encodeURIComponent(e) + (t ? ";expires=" + a.toGMTString() : "") + ";path=" + (r || "/") + (i && "none" !== i ? ";domain=" + i : "") + (o ? ";secure" : "") + ";SameSite=Lax"
    }

    function Vn() {
        return Un(null)
    }

    function _() {
        try {
            return window.localStorage
        } catch (n) {}
    }
    var E, Yn = 1e3,
        $n = /^0_([0-9a-f]+)-([0-9a-f]+)-([0-9]*)$/,
        S = null,
        O = [],
        Xn = null,
        Hn = {
            success: !1
        },
        Zn = 0;

    function N() {
        return h().getTracker(m)
    }

    function Qn() {
        var n = N(),
            e = n.foreignCookieSettings,
            t = [];
        if (e && ge(n))
            for (var r = function() {
                    for (var n = document.cookie.split(";"), e = {}, t = 0; t < n.length; t++) {
                        var r = n[t].split("=");
                        e[(r[0] + "").trim()] = unescape(r.slice(1).join("="))
                    }
                    return e
                }(), i = Object.keys(r), o = Object.keys(e), a = 0; a < o.length; a++)
                for (var c = o[a], u = e[c], f = 0; f < i.length; f++) {
                    var s = i[f];
                    s.match(u) && (s = r[s], t.push({
                        type: c,
                        value: s
                    }))
                }
        return t
    }

    function ne() {
        return yn() || Fn()
    }

    function ee(n) {
        if (null === S && (S = b()), !te(n) || !Vn()) return !1;
        if (!A(n)) return S !== p;
        switch (S) {
            case v:
            case w:
                return !0;
            default:
                return !1
        }
    }

    function te(n) {
        return !0 === n.lfaCookieEnabled
    }

    function A(n) {
        return !0 === n.consentManagementEnabled
    }

    function re() {
        return !0 === N().useDualStackEndpoint
    }

    function ie(n, e) {
        e = e || {};
        var t = An(),
            r = e.eventType || "tracking-event",
            i = N();
        return {
            gaTrackingIds: t.trackingIds,
            gaMeasurementIds: t.measurementIds,
            gaClientIds: t.clientIds,
            context: function(n, e) {
                var t = n.referrer || document.referrer;
                "form-submit" === e && (t = "");
                return {
                    library: {
                        name: "lftracker",
                        version: J
                    },
                    pageUrl: function(n) {
                        if (ge(N())) return n;
                        return null === Ce(n, "utm_term").match($n) ? n : Ie(n, "utm_term")
                    }(oe(n)),
                    pageTitle: n.pageTitle || document.title,
                    referrer: t
                }
            }(e, r),
            event: r,
            clientEventId: Ne(),
            scriptId: m,
            cookiesEnabled: ee(i),
            consentLevel: S || p,
            anonymizeIp: !1,
            lfClientId: n,
            foreignCookies: Qn(),
            properties: e.properties || {},
            autoTrackingEnabled: !1 !== i.enableAutoTracking,
            autoTrackingMode: i.autoTrackingMode
        }
    }

    function oe(n) {
        return n.pageUrl || window.location.href
    }

    function ae(n, e, t) {
        n = n + "?sid=" + encodeURIComponent(e.scriptId), e = De(JSON.stringify(e)), n = navigator.sendBeacon(n, e);
        D(t, {
            success: n
        })
    }

    function ce(n, e, t) {
        var n = n + "?sid=" + encodeURIComponent(e.scriptId),
            e = De(JSON.stringify(e)),
            r = document.createElement("img");
        r.width = 1, r.height = 1, r.src = n + "&data=" + e, r.onload = function() {
            D(t, {
                success: !0
            })
        }, r.onerror = function() {
            D(t, {
                success: !1
            })
        }
    }

    function ue() {
        var n = null,
            e = N().trackingCookieDurationDays;
        return n = e ? 24 * e * 60 * 60 * 1e3 : n
    }

    function fe() {
        var n;
        return ee(N()) ? Bn(ne(), ue()) : (Fn() && setTimeout(se, 1e3), A(N()) && S !== p ? (window[xn] || (n = qn(Ne()) + ".CM", window[xn] = n), window[xn]) : y + "." + Ne() + ".NC")
    }

    function se() {
        !Fn() || ! function() {
            for (var n = 0, e = h().getAll(); n < e.length; n++)
                if (ee(e[n])) return;
            return 1
        }() || Rn()
    }

    function le(n) {
        var e, t, r = N(),
            i = (void 0 === r.gaInitRetries && (r.gaInitRetries = 0), 1 <= r.gaInitRetries);
        return e = window, null !== (t = s(e)) && "function" == typeof t && "function" == typeof t.getAll || null !== (t = Sn(e)) && "object" == typeof t && "function" == typeof t._getTrackers || i ? n() : (setTimeout(function() {
            return le(n)
        }, 100 * Math.pow(2, r.gaInitRetries)), void(r.gaInitRetries += 1))
    }

    function de(e, t) {
        ! function(n) {
            switch (n) {
                case "form-submit":
                case "identify":
                    return ge(N());
                default:
                    return 1
            }
        }((e = e || {}).eventType) ? O.push({
            args: e,
            doneCallback: t
        }): le(function() {
            var n = ie(ve(), e);
            !0 === N().useSendBeaconApi && navigator && navigator.sendBeacon ? (ae("https://tr-rc.lfeeder.com", n, t), re() && ae("https://tr2.lfeeder.com", n)) : (ce("https://tr-rc.lfeeder.com", n, t), re() && ce("https://tr2.lfeeder.com", n))
        })
    }

    function ge(n) {
        return !(!ee(n) || A(n) && S !== v)
    }

    function pe(n, e) {
        var t, r = (n = n || {}).email;
        Re(r) && (t = n.firstName, n = n.lastName, r = {
            email: r
        }, t && "string" == typeof t && (r.firstName = t), n && "string" == typeof n && (r.lastName = n), de({
            eventType: "identify",
            properties: r
        }, e))
    }

    function we(n, e) {
        var n = function(n) {
                var e = {
                    eventType: "tracking-event"
                };
                (n = n || {}).pageUrl && (e.pageUrl = n.pageUrl);
                n.pageTitle && (e.pageTitle = n.pageTitle);
                n.referrer && (e.referrer = n.referrer);
                return e
            }(n),
            t = oe(n);
        (t = !_e(t) && R(t, "/") ? window.location.protocol + "//" + window.location.host + t : t) === Xn && Zn + Yn >= (new Date).getTime() ? D(e, Hn) : (Xn = t, Zn = (new Date).getTime(), Hn = {
            success: !0
        }, de(n, function(n) {
            D(e, Hn = n)
        }))
    }

    function D(n, e) {
        Ee(n) && n(e)
    }

    function ve() {
        return n = fe, E = E || n();
        var n
    }

    function me(n) {
        var e = N();
        if (ke(e)) {
            var n = n = void 0 === n ? v : n,
                t = e;
            switch (n) {
                case v:
                    return function(n) {
                        ye(v), n.track({
                            eventType: "consent"
                        });
                        for (var e = 0; e < O.length; e++) {
                            var t = O[e];
                            de(t.args, t.doneCallback)
                        }
                        return O = [], !0
                    }(t);
                case w:
                    return function(n) {
                        return ye(w), n.track({
                            eventType: "consent"
                        }), O = [], !0
                    }(t)
            }
            console.warn("* [leadfeeder] invalid consent level", n)
        }
        return !1
    }

    function he() {
        var n = N();
        return !!ke(n) && (E = void 0, Xn = S = null, Hn = {
            success: !(O = [])
        }, Zn = 0, Rn(), S = zn(p, ue()), n.track({
            eventType: "consent"
        }), !0)
    }

    function ke(n) {
        return Vn() && !(!te(n = n) || !A(n))
    }

    function ye(n) {
        var e = ue();
        E = S !== n && b() !== n ? (Le(E, ".NC") && (E = void 0), S = zn(n, e), Bn(ve(), e)) : (S = b(), ne())
    }

    function Te() {
        for (var n, e = h().registerTracker(m, de, pe, we, ve, me, he), t = e, r = t.getPlugins(), i = 0; i < r.length; i++) {
            var o = r[i];
            o.initialized || o.init(), o.initialized = !0
        }
        return t.pluginsInitialized = !0, kn(e), !0 === A(e) && null !== (S = b()) && zn(S, ue()), t = e, (n = document.createEvent("Event")).tracker = t, n.initEvent("ldfdr.trackerReady", !0, !1), document.dispatchEvent(n), e
    }

    function be(n, e, t) {
        t = t || "";
        var r = (n = String(n)).indexOf("#"),
            i = n.length,
            o = n.substr(0, r = -1 === r ? i : r),
            n = n.substr(r, i - r);
        return -1 === o.indexOf("?") ? o += "?" : Le(o, "?") || (o += "&"), o + window.encodeURIComponent(e) + "=" + window.encodeURIComponent(t) + n
    }

    function Ie(n, e) {
        if (-1 === (n = String(n)).indexOf("?" + e) && -1 === n.indexOf("&" + e)) return n;
        var t = n.indexOf("?");
        if (-1 === t) return n;
        var r = n.substr(t + 1),
            n = n.substr(0, t);
        if (r) {
            for (var t = "", i = r.indexOf("#"), o = (-1 !== i && (t = r.substr(i + 1), r = r.substr(0, i)), r.split("&")), a = o.length - 1; 0 <= a; a--) o[a].split("=")[0] === e && o.splice(a, 1);
            i = o.join("&");
            i && (n = n + "?" + i), t && (n += "#" + t)
        }
        return n
    }

    function Ce(e, n) {
        n = new RegExp("[\\?&#]" + n + "=([^&#]*)").exec(e);
        if (!n) return "";
        e = n[1];
        try {
            return window.decodeURIComponent(e)
        } catch (n) {
            return unescape(e)
        }
    }

    function _e(n) {
        return R(n, "//") || R(n, "http://") || R(n, "https://")
    }
    var L, x = "/";

    function Ee(n) {
        return "function" == typeof n
    }

    function Se(n) {
        if (Object.values) return Object.values(n);
        var e, t = [];
        for (e in n) "string" == typeof e && n.propertyIsEnumerable(e) && t.push(n[e]);
        return t
    }

    function Oe(n, e) {
        for (var t = e.split("."); n && t.length && (n = n[t.shift()]););
        return n
    }

    function Ne() {
        return function(n) {
            function e(n, e) {
                return n << e | n >>> 32 - e
            }

            function t(n) {
                for (var e = "", t = 7; 0 <= t; t--) e += (n >>> 4 * t & 15).toString(16);
                return e
            }
            var r, i, o, a, c, u, f, s, l, d, g = [],
                p = 1732584193,
                w = 4023233417,
                v = 2562383102,
                m = 271733878,
                h = 3285377520,
                k = [];
            for (n = function(n) {
                    return unescape(window.encodeURIComponent(n))
                }(n), d = n.length, i = 0; i < d - 3; i += 4) o = n.charCodeAt(i) << 24 | n.charCodeAt(i + 1) << 16 | n.charCodeAt(i + 2) << 8 | n.charCodeAt(i + 3), k.push(o);
            switch (3 & d) {
                case 0:
                    i = 2147483648;
                    break;
                case 1:
                    i = n.charCodeAt(d - 1) << 24 | 8388608;
                    break;
                case 2:
                    i = n.charCodeAt(d - 2) << 24 | n.charCodeAt(d - 1) << 16 | 32768;
                    break;
                case 3:
                    i = n.charCodeAt(d - 3) << 24 | n.charCodeAt(d - 2) << 16 | n.charCodeAt(d - 1) << 8 | 128
            }
            k.push(i);
            for (; 14 != (15 & k.length);) k.push(0);
            for (k.push(d >>> 29), k.push(d << 3 & 4294967295), r = 0; r < k.length; r += 16) {
                for (i = 0; i < 16; i++) g[i] = k[r + i];
                for (i = 16; i <= 79; i++) g[i] = e(g[i - 3] ^ g[i - 8] ^ g[i - 14] ^ g[i - 16], 1);
                for (a = p, c = w, u = v, f = m, s = h, i = 0; i <= 19; i++) l = e(a, 5) + (c & u | ~c & f) + s + g[i] + 1518500249 & 4294967295, s = f, f = u, u = e(c, 30), c = a, a = l;
                for (i = 20; i <= 39; i++) l = e(a, 5) + (c ^ u ^ f) + s + g[i] + 1859775393 & 4294967295, s = f, f = u, u = e(c, 30), c = a, a = l;
                for (i = 40; i <= 59; i++) l = e(a, 5) + (c & u | c & f | u & f) + s + g[i] + 2400959708 & 4294967295, s = f, f = u, u = e(c, 30), c = a, a = l;
                for (i = 60; i <= 79; i++) l = e(a, 5) + (c ^ u ^ f) + s + g[i] + 3395469782 & 4294967295, s = f, f = u, u = e(c, 30), c = a, a = l;
                p = p + a & 4294967295, w = w + c & 4294967295, v = v + u & 4294967295, m = m + f & 4294967295, h = h + s & 4294967295
            }
            return (l = t(p) + t(w) + t(v) + t(m) + t(h)).toLowerCase()
        }("" + (new Date).getTime() + Math.random()).slice(0, 16)
    }

    function Ae(n, e) {
        e != n.length && n[e](function() {
            Ae(n, e + 1)
        })
    }

    function De(n) {
        return window.btoa(encodeURIComponent(n).replace(/%([0-9A-F]{2})/g, function(n, e) {
            return String.fromCharCode("0x" + e)
        }))
    }

    function R(n, e) {
        return !!n && n.substring(0, e.length) === e
    }

    function Le(n, e) {
        return -1 !== (n = String(n)).indexOf(e, n.length - e.length)
    }

    function xe(t, r, i) {
        function o() {
            s = !1 === i.leading ? 0 : (new Date).getTime(), a = null, f = t.apply(c, u), a || (c = u = null)
        }

        function n() {
            var n = (new Date).getTime(),
                e = (s || !1 !== i.leading || (s = n), r - (n - s));
            return c = this, u = arguments, e <= 0 || r < e ? (a && (clearTimeout(a), a = null), s = n, f = t.apply(c, u), a || (c = u = null)) : a || !1 === i.trailing || (a = setTimeout(o, e)), f
        }
        var a, c, u, f, s = 0;
        i = i || {};
        return n.cancel = function() {
            clearTimeout(a), s = 0, a = c = u = null
        }, n
    }

    function Re(n) {
        return "string" == typeof n && n.match(/^[^@\s]+@([^@\s]+\.)+[^@\W]+$/)
    }

    function M(n, e) {
        e = e ? e++ : 1, !window.MutationObserver || 10 <= e || (document.body ? new MutationObserver(xe(n, 100, {
            leading: !1
        })).observe(document.body, {
            childList: !0,
            subtree: !0
        }) : setTimeout(M.bind(null, n, e), 100))
    }
    d() && (location.href, "disabled" === (L = Te()).autoTrackingMode || "on_script_load" === L.autoTrackingMode && !1 === L.enableAutoTracking || L.pageview({}, function() {
        L.autoTrackingInitialized = !0
    }))
}();