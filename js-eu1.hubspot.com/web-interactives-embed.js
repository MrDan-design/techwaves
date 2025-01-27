! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        e[s].call(n.exports, n, n.exports, i);
        n.l = !0;
        return n.exports
    }
    i.m = e;
    i.c = t;
    i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    };
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    i.t = function(e, t) {
        1 & t && (e = i(e));
        if (8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        i.r(s);
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    };
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        i.d(t, "a", t);
        return t
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "//static.hsappstatic.net/web-interactives-embed/static-2.1255/";
    i(i.s = 3)
}({
    3: function(e, t, i) {
        "use strict";
        i.r(t);
        const s = {
            RECEIVED_ANALYTICS: "HS_CTA_PARENT_RECEIVED_ANALYTICS",
            DEVICE_TYPE: "HS_CTA_PARENT_DEVICE_TYPE",
            PROXY_ANALYTICS_FN_CALLBACK: "HS_CTA_PARENT_PROXY_ANALYTICS_FN",
            INIT: "HS_CTA_PARENT_INIT",
            SHOWING_CTA: "HS_CTA_SHOWING_CTA",
            STARTED: "HS_CTA_STARTED",
            NAVIGATE_PAGE: "HS_CTA_NAVIGATE_PAGE",
            CLICK_EVENT: "HS_CTA_CLICK_EVENT",
            CLOSE_INTERACTIVE: "HS_CTA_CLOSE_INTERACTIVE",
            HAS_CLOSED: "HS_CTA_HAS_CLOSED",
            NEW_HEIGHT: "HS_CTA_NEW_HEIGHT",
            DISPLAY_CALL_TO_ACTION: "HS_DISPLAY_CALL_TO_ACTION",
            PROXY_ANALYTICS: "HS_CTA_PROXY_ANALYTICS",
            PROXY_ANALYTICS_FN: "HS_CTA_PROXY_ANALYTICS_FN",
            SEND_FORM_DEFINITION: "HS_SEND_FORM_DEFINITION",
            SEND_CTA_CONFIG: "HS_SEND_CTA_CONFIG",
            SEND_EMBED_CONTEXT: "HS_SEND_EMBED_CONTEXT",
            RECEIVE_FILTERED_STYLESHEETS: "RECEIVE_FILTERED_STYLESHEETS",
            SEND_STYLESHEETS: "SEND_STYLESHEETS",
            RENDER_RECAPTCHA: "RENDER_RECAPTCHA",
            EXECUTE_RECAPTCHA: "EXECUTE_RECAPTCHA",
            RESET_RECAPTCHA: "RESET_RECAPTCHA",
            RECAPTCHA_SUCCESS: "RECAPTCHA_SUCCESS",
            RECAPTCHA_EXPIRED: "RECAPTCHA_EXPIRED",
            TRIGGER_CTA: "HS_CTA_TRIGGER_CTA",
            CTA_FORM_SUBMITTED: "HS_CTA_FORM_SUBMITTED"
        };

        function n(e, t = {}) {
            for (const i in t) Object.hasOwnProperty.call(t, i) && (e.style[i] = t[i])
        }

        function o(...e) {
            if (window.location.search.indexOf("hs_debug_interactive") > -1 || window.location.host.includes("local.hsappstatic")) {
                console.log("[web-interactives-embed]", ...e);
                window.location.search.indexOf("hs_is_selenium") > -1 && console.log(...[...e].map(e => JSON.stringify(e)))
            }
        }
        class r {
            constructor() {
                this.listeners = new Map
            }
            on(e, t) {
                if (!this.listeners.has(e)) {
                    this.listeners.set(e, [t]);
                    return
                }
                const i = this.listeners.get(e);
                this.listeners.set(e, [...i, t])
            }
            off(e) {
                this.listeners.delete(e)
            }
            emit(e, t) {
                const i = this.listeners.get(e);
                i && i.length && i.forEach(e => e(t))
            }
            reset() {
                this.listeners = new Map
            }
        }

        function a() {
            return new r
        }
        const c = (...e) => {
            o("[GlobalIframeCommunication]", ...e)
        };
        class l {
            constructor() {
                this.iframeCommunicators = new Map;
                this.eventEmitter = a();
                this.reset = () => {
                    this.eventEmitter.reset();
                    this.iframeCommunicators = new Map
                }
            }
            registerHandler(e, t) {
                this.eventEmitter.on(e, t)
            }
            registerHandlers(e) {
                c("Registering handlers", e);
                Object.keys(e).forEach(t => {
                    const i = t,
                        s = e[i];
                    s && this.registerHandler(i, s)
                })
            }
            registerCommunicator(e, t) {
                c("Registering communicator", t);
                const i = this.iframeCommunicators.get(t) || [];
                this.iframeCommunicators.set(t, [...i, e])
            }
            removeCommunicator(e) {
                c("Removing Iframe Communicator from GlobalCommunication: ", e);
                this.iframeCommunicators.delete(e)
            }
            emit(e, t) {
                c("Emitting event", {
                    event: e,
                    messagePayload: t
                });
                this.eventEmitter.emit(e, t)
            }
            broadcast(e, t) {
                const i = this.iframeCommunicators.get(e);
                if (i) {
                    c("Broadcasting", i);
                    i.forEach(e => {
                        e.sendMessage(t)
                    })
                } else c("Cannot find communcators array, not broadcasting", e, t)
            }
            broadcastAll(e) {
                c("Broadcasting", e, "to all", this.iframeCommunicators);
                for (const [t, i] of this.iframeCommunicators) this.broadcast(t, e)
            }
        }
        var h = new l;

        function d() {
            return new MessageChannel
        }
        const u = (...e) => {
            o("[iframeCommunication]", ...e)
        };
        class m {
            constructor(e, t) {
                this.queue = [];
                this.initialised = !1;
                this.events = new Map;
                this.eventEmitter = a();
                this.handleMessage = e => {
                    if (!e.data || !e.data.type) return;
                    const {
                        type: t,
                        payload: i
                    } = e.data;
                    u("Handling message", {
                        type: t,
                        payload: i
                    });
                    this.eventEmitter.emit(t, i);
                    h.emit(t, Object.assign({}, i, {
                        id: this.id
                    }))
                };
                this.handleFrameLoaded = () => {
                    if (this.iframe.contentWindow) {
                        u("Iframe loaded", this.iframe);
                        this.iframe.contentWindow.postMessage({
                            type: s.INIT
                        }, "*", [this.channel.port2]);
                        this.initialised = !0;
                        this.flushQueue()
                    } else u("Content window not there, not loading")
                };
                this.iframe = e;
                this.id = t;
                this.channel = d();
                this.channel.port1.onmessage = this.handleMessage;
                this.iframe.addEventListener("load", this.handleFrameLoaded);
                u("Iframe communication set up", t, e)
            }
            sendMessage({
                type: e,
                payload: t
            }) {
                if (this.initialised) {
                    u("Posting message", {
                        type: e,
                        payload: t
                    });
                    this.channel.port1.postMessage({
                        type: e,
                        payload: t
                    })
                } else {
                    u("Queueing message", {
                        type: e,
                        payload: t
                    });
                    this.queue.push({
                        type: e,
                        payload: t
                    })
                }
            }
            registerHandler(e, t) {
                this.eventEmitter.off(e);
                this.eventEmitter.on(e, t)
            }
            registerHandlers(e) {
                u("Registering handlers in IframeCommunication", e);
                Object.keys(e).forEach(t => {
                    const i = t,
                        s = e[i];
                    s && this.registerHandler(i, s)
                })
            }
            removeHandler(e) {
                u("Removing handler", e);
                this.eventEmitter.off(e)
            }
            remove() {
                u("Removing frame communicator:", this.id);
                this.channel.port1.close();
                h.removeCommunicator(this.id)
            }
            flushQueue() {
                if (this.initialised) {
                    u("Flushing queue", this.queue);
                    this.queue.forEach(e => {
                        this.sendMessage(e)
                    })
                } else u("Not flushing queue, not initialised")
            }
        }

        function g(e, t) {
            u("Creating iframe communication");
            const i = new m(e, t);
            h.registerCommunicator(i, t);
            return i
        }

        function p(e) {
            const t = window.location.origin.startsWith("http:") ? "http://" : "https://";
            return e.startsWith(t) ? e : `${t}${e.replace(/http(s)?:\/\//,"")}`
        }

        function f(e) {
            e.style.border = "none";
            e.style.height = "100%";
            e.style.width = "100%";
            e.style.visibility = "hidden"
        }

        function v(e, t) {
            const i = document.createElement("iframe");
            i.src = p(e);
            Object.keys(t).forEach(e => {
                i.setAttribute(e, t[e])
            });
            f(i);
            return i
        }

        function C(e, t, i) {
            e.startsWith("http") || (e = "https://" + e);
            const s = new URL(e);
            s.searchParams.set(t, i);
            return s.href
        }

        function T(e, t) {
            e.startsWith("http") || (e = "https://" + e);
            if (0 === Object.keys(t).length) return e;
            const i = new URL(e);
            Object.keys(t).forEach(e => i.searchParams.set(e, t[e]));
            return i.href
        }

        function b(e, t) {
            return e.replace(/#.*$/, "") === t.replace(/#.*$/, "")
        }
        const y = (...e) => {
                o("[FrameComponent]", ...e)
            },
            E = () => {};
        class w {
            constructor({
                id: e,
                container: t,
                iframeSrc: i,
                resizeHeight: s,
                onFrameReady: n,
                useResponsiveStyling: o,
                extraAttributes: r = {}
            }) {
                this.onFrameReady = E;
                this.resizeHeight = !0;
                this.handleHeightChange = ({
                    height: e
                }) => {
                    if (!this.resizeHeight) return;
                    const t = e + 2 * parseInt(getComputedStyle(this.iframe).borderTopWidth, 10);
                    y("Handle height change", this.id, {
                        adjustedHeight: t,
                        height: e
                    });
                    this.setContainerStyle({
                        height: t + "px"
                    })
                };
                this.id = e;
                this.resizeHeight = s;
                if (o) {
                    y("Responsive styling is enabled", e);
                    i = C(i, "enableResponsiveStyles", "true")
                }
                this.iframe = v(i, r);
                this.container = t;
                this.iframeCommunicator = g(this.iframe, e);
                n && (this.onFrameReady = n);
                t.appendChild(this.iframe);
                this.registerHandlers()
            }
            registerHandlers() {
                this.iframeCommunicator.registerHandlers({
                    [s.STARTED]: this.onFrameReady,
                    [s.NEW_HEIGHT]: this.handleHeightChange
                })
            }
            setStyle(e) {
                y("Set style", this.id, e);
                n(this.iframe, e)
            }
            setShouldResize(e) {
                this.resizeHeight = e
            }
            setContainerStyle(e) {
                n(this.container, e)
            }
        }

        function S(e) {
            return new w(e)
        }
        class A {
            constructor(e, t) {
                this.listeners = new Set;
                this.batching = !1;
                this.queue = [];
                this.subscribe = e => {
                    this.listeners.add(e);
                    let t = () => {};
                    this.options && this.options.onSubscribe && (t = this.options.onSubscribe(e, this));
                    return () => {
                        this.listeners.delete(e);
                        t()
                    }
                };
                this.setState = e => {
                    const t = this.state;
                    this.options && this.options.updateFn ? this.state = this.options.updateFn(t)(e) : this.state = e(t);
                    if (this.state !== t) {
                        this.queue.push(() => {
                            this.listeners.forEach(e => e(this.state, t));
                            this.options && this.options.onUpdate && this.options.onUpdate(this.state, t)
                        });
                        this._flush()
                    }
                };
                this._flush = () => {
                    if (!this.batching) {
                        this.queue.forEach(e => e());
                        this.queue = []
                    }
                };
                this.batch = e => {
                    this.batching = !0;
                    e();
                    this.batching = !1;
                    this._flush()
                };
                this.state = e;
                this.options = t
            }
        }
        class I {
            constructor() {
                this.storage = []
            }
            enqueue(e) {
                this.storage.push(e)
            }
            dequeue() {
                return this.storage.shift()
            }
            peek() {
                return this.storage[0]
            }
            size() {
                return this.storage.length
            }
        }

        function M() {
            return new I
        }
        const O = "hubspotutk",
            P = "__hstc",
            _ = "__hssc",
            L = e => {
                const t = document.cookie.match(`(^|[^;]+)\\s*${e}\\s*=\\s*([^;]+)`);
                return t ? t.pop() : ""
            },
            F = () => L(O),
            R = () => L(P),
            N = () => L(_),
            k = (...e) => {
                o("[models/Analytics]", ...e)
            };
        class H {
            constructor() {
                this._handleFetchSucceded = e => {
                    this.store.setState(t => {
                        const i = {};
                        i.path = e.path;
                        i.referrerPath = e.referrerPath;
                        i.referrer = "";
                        i.analyticsPageId = e.pageId;
                        i.hsfp = e._getFingerprint();
                        i.canonicalUrl = e.canonicalUrl;
                        i.contentType = e.contentType;
                        i.pageId = H.getPageId() || e.pageId;
                        e.session && (i.hssc = e.session.get());
                        if (e.utk) {
                            i.hstc = e.utk.get();
                            i.hutk = e.utk.visitor
                        }
                        return Object.assign({}, t, i, {
                            isLoaded: !0
                        })
                    })
                };
                window._hsq = window._hsq || [];
                const e = {
                    isLoaded: !1,
                    pageUrl: window.location.href,
                    pageTitle: window.document.title,
                    referrer: window.document.referrer,
                    userAgent: window.navigator.userAgent,
                    hutk: F(),
                    hssc: N(),
                    hstc: R(),
                    pageId: H.getPageId()
                };
                this.store = new A(e);
                this.fetchAnalytics()
            }
            fetchAnalytics() {
                this._analyticsQueue.push(this._handleFetchSucceded)
            }
            subscribe(e) {
                return this.store.subscribe(e)
            }
            get analytics() {
                return this.store.state
            }
            track(e) {
                k("Tracking analytics", e);
                this._analyticsQueue.push(e)
            }
            get _analyticsQueue() {
                return window._hsq
            }
            static getPageId() {
                const e = window.hsVars;
                return e && e.analytics_page_id ? e.analytics_page_id : e && e.page_id ? e.page_id : null
            }
            static getLanguage() {
                const e = window.hsVars;
                return e && e.language ? e.language : null
            }
        }
        var D = new H;
        const B = (...e) => {
                o("[AnalyticsProxyController]", ...e)
            },
            V = ["trackFormView", "trackFormVisible", "trackFormInteraction"];
        class x {
            constructor({
                applicationController: e,
                analyticsStore: t
            }) {
                this.viewQueue = new Map;
                this.applicationController = e;
                this.analyticsStore = t;
                this.listenForAnalyticsUpdate();
                this.listenForProxyMessage()
            }
            listenForAnalyticsUpdate() {
                this.analyticsStore.subscribe((e, t) => {
                    !t.isLoaded && e.isLoaded && h.broadcastAll({
                        type: s.RECEIVED_ANALYTICS,
                        payload: e
                    })
                })
            }
            flushViewQueue(e) {
                const t = this.viewQueue.get(e) || [];
                for (const e of t) this.analyticsStore.track(e);
                this.viewQueue.delete(e)
            }
            handleFormView(e, t) {
                const i = this.applicationController.viewedStore;
                if (i && i.hasBeenViewed(e)) {
                    this.analyticsStore.track(t);
                    return
                }
                const s = this.viewQueue.get(e) || [];
                B("Adding form view to analytics queue", {
                    id: e,
                    analytics: t
                });
                this.viewQueue.set(e, [...s, t])
            }
            listenForProxyMessage() {
                h.registerHandlers({
                    [s.PROXY_ANALYTICS]: ({
                        analytics: e,
                        id: t
                    }) => {
                        x.isFormView(e) ? this.handleFormView(t, e) : this.analyticsStore.track(e)
                    }
                })
            }
            static isFormView(e) {
                const [t] = e;
                return V.includes(t)
            }
        }

        function $(e, t = !1) {
            !window.navigator.userAgent.includes("Firefox") && t ? window.open(e, "_blank", "noopener") : window.location.assign(e)
        }
        class U {
            constructor({
                applicationController: e
            }) {
                this.applicationController = e;
                this.listenForNavigation()
            }
            listenForNavigation() {
                h.registerHandlers({
                    [s.NAVIGATE_PAGE]: ({
                        url: e,
                        openNewTab: t,
                        id: i
                    }) => {
                        $(this.applicationController.getNavigationUrl({
                            url: e,
                            openNewTab: t
                        }, i), this.applicationController.getShouldOpenNewTab({
                            url: e,
                            openNewTab: t
                        }, i))
                    }
                })
            }
        }
        class G {
            constructor() {
                this.analyticsStore = D;
                this.analyticsProxyController = new x({
                    analyticsStore: this.analyticsStore,
                    applicationController: this
                });
                this.navigationProxyController = new U({
                    applicationController: this
                })
            }
            getNavigationUrl(e, t) {
                return e.url
            }
            getShouldOpenNewTab(e, t) {
                return e.openNewTab
            }
        }
        class j {
            constructor() {
                this.handleIntersection = e => {
                    e.forEach(e => {
                        if (e.isIntersecting) {
                            const t = e.target;
                            this.onElementAppear(t);
                            this.observedElements.delete(t);
                            this.observer.unobserve(t)
                        }
                    })
                };
                this.observer = new IntersectionObserver(this.handleIntersection, {
                    threshold: .5
                });
                this.observedElements = new Map
            }
            onElementAppear(e) {
                const t = this.observedElements.get(e);
                t && t(e)
            }
            observe(e, t) {
                if ((() => {
                        const t = e.getBoundingClientRect(),
                            i = window.innerHeight;
                        return t.bottom >= 0 && t.top < i
                    })()) t(e);
                else if (!this.observedElements.has(e)) {
                    this.observedElements.set(e, t);
                    this.observer.observe(e)
                }
            }
            unobserve(e) {
                if (this.observedElements.has(e)) {
                    this.observedElements.delete(e);
                    this.observer.unobserve(e)
                }
            }
        }

        function q() {
            return new j
        }

        function W(e, t) {
            const i = [...e].filter(([e, i]) => t(i, e));
            return new Map(i)
        }

        function z(e, t) {
            const i = [...e].sort(([e, i], [s, n]) => t(i, n));
            return new Map(i)
        }

        function Y(e, t) {
            const i = new Map(e);
            for (const [e, s] of t) i.set(e, s);
            return i
        }

        function Q(e) {
            const t = t => {
                "Escape" === t.key && e()
            };
            document.addEventListener("keydown", t);
            return () => {
                document.removeEventListener("keydown", t)
            }
        }

        function X(e, t) {
            let i, s = 0;
            return function() {
                const n = this,
                    o = arguments,
                    r = Date.now();
                if (r - s >= t) {
                    i && window.clearTimeout(i);
                    e.apply(n, o);
                    s = r
                } else i || (i = window.setTimeout(() => {
                    e.apply(n, o);
                    s = Date.now();
                    i = void 0
                }, t))
            }
        }
        const K = {
                BANNER: "BANNER",
                MODAL: "MODAL",
                SLIDE_IN: "SLIDE_IN",
                EMBEDDED: "EMBEDDED"
            },
            J = () => document.getElementById("hubspot-web-interactives-loader"),
            Z = (e, t) => {
                if (!t) return null;
                const i = t.getAttribute(e);
                return i || null
            },
            ee = e => {
                const t = Z("data-hsjs-portal", e);
                return t ? parseInt(t, 10) : null
            },
            te = e => {
                const t = Z("data-hsjs-env", e);
                return t || "prod"
            },
            ie = e => {
                const t = Z("data-hsjs-hublet", e);
                return t || "na1"
            },
            se = e => {
                const t = Z("data-hsjs-local", e);
                return !!t && "true" === t
            },
            ne = e => Z("src", e),
            oe = () => {
                const e = J();
                return e ? {
                    portalId: ee(e),
                    env: te(e),
                    hublet: ie(e),
                    isLocal: se(e),
                    src: ne(e)
                } : null
            },
            re = () => window,
            ae = ["previewInteractiveId", "preview_web_interactive", "preview_key", "_preview", "portalId", "hs_preview"];

        function ce() {
            const e = new URLSearchParams(re().location.search),
                t = {};
            e.forEach((e, i) => {
                ae.includes(i) || (t[i] = e)
            });
            return t
        }

        function le({
            contentId: e,
            portalId: t,
            env: i,
            hublet: s,
            useSameOrigin: n = !1
        }) {
            const o = "qa" === i ? "qa" : "",
                r = "na1" === s ? "" : "-" + s,
                a = document.location.protocol;
            return n ? `${window.location.origin}/hs-web-interactive-${t}-${e}` : `${a}//${t}.hs-sites${o}${r}.com/hs-web-interactive-${t}-${e}`
        }

        function he(e, t, i) {
            const s = re();
            let n = {};
            t.contactPreviewEmail && (n.email = t.contactPreviewEmail);
            const o = i.analytics && i.analytics.hutk;
            o && (n.utk = o);
            s.location.search.includes("hs_debug_interactive") && (n.hs_debug_interactive = "true");
            const r = ce();
            n = Object.assign({}, r, n);
            return T(e, n)
        }

        function de(e, t) {
            if (null == e) return {};
            var i, s, n = {},
                o = Object.keys(e);
            for (s = 0; s < o.length; s++) {
                i = o[s];
                t.indexOf(i) >= 0 || (n[i] = e[i])
            }
            return n
        }

        function ue(e, t) {
            t.hutk && e.searchParams.set("utk", "" + t.hutk);
            t.hstc && e.searchParams.set("__hstc", "" + t.hstc);
            t.hssc && e.searchParams.set("__hssc", "" + t.hssc);
            t.referrer && e.searchParams.set("referrer", "" + t.referrer);
            t.pageId && e.searchParams.set("contentId", t.pageId)
        }

        function me({
            contentIds: e,
            currentUrl: t,
            isPreview: i,
            portalId: s,
            env: n,
            hublet: o = "na1",
            versionId: r,
            analytics: a,
            extraParams: c,
            path: l
        }) {
            const h = "qa" === n ? "qa" : "";
            let d = "";
            d = window.location.search.includes("useLocalPublicService") ? "https://local.hubspotqa.com/web-interactives/public/v1/" + l : "na1" === o ? `https://cta-service-cms2.hubspot${h}.com/web-interactives/public/v1/${l}` : `https://cta-${o}.hubspot${h}.com/web-interactives/public/v1/${l}`;
            const u = new URL(d);
            i && u.searchParams.set("isPreview", "true");
            e && e.length && e.forEach(e => u.searchParams.append("contentIds", "" + e));
            s && u.searchParams.set("portalId", "" + s);
            t && !i && u.searchParams.set("currentUrl", t);
            r && u.searchParams.set("versionId", "" + r);
            a && !i && ue(u, a);
            c && Object.keys(c).forEach(e => u.searchParams.set(e, "" + c[e]));
            return u.href
        }
        const ge = ["previewScheduled", "templatePath", "isMobile"],
            pe = "embed/combinedConfigs",
            fe = "embed/templateConfig";

        function ve(e) {
            let {
                previewScheduled: t,
                templatePath: i,
                isMobile: s
            } = e, n = de(e, ge), o = "";
            o = i ? fe : pe;
            const r = {};
            t && (r.previewScheduled = "true");
            i && (r.templatePath = i);
            s && (r.isMobile = "true");
            return me(Object.assign({}, n, {
                extraParams: r,
                path: o
            }))
        }
        const Ce = {
                TOP: "TOP",
                BOTTOM: "BOTTOM",
                TOP_LEFT: "TOP_LEFT",
                TOP_RIGHT: "TOP_RIGHT",
                BOTTOM_LEFT: "BOTTOM_LEFT",
                BOTTOM_RIGHT: "BOTTOM_RIGHT"
            },
            Te = -1,
            be = (e, t = 1) => {
                if (!e) return {
                    r: null,
                    g: null,
                    b: null,
                    a: t
                };
                if (3 === (e = e.replace("#", "")).length) {
                    const t = e.split("").reduce((e, t) => e + t + t, "");
                    e = t
                }
                return {
                    r: parseInt(e.substring(0, 2), 16),
                    g: parseInt(e.substring(2, 4), 16),
                    b: parseInt(e.substring(4, 6), 16),
                    a: t
                }
            },
            ye = (e, t = 1) => {
                const i = be(e, t);
                return `rgba(${i.r}, ${i.g}, ${i.b}, ${i.a})`
            };
        class Ee {
            constructor() {
                this.fetchConfigs = () => {
                    const e = this.store.state.configRequest;
                    if (!e) return Promise.resolve(null);
                    const t = ve(e);
                    return this.fetch(t)
                };
                this.handleFetchFailed = () => {
                    this.store.setState(e => Object.assign({}, e, {
                        requestError: !0
                    }))
                };
                this.handleFetchSucceded = ({
                    sortedAudienceConfigs: e,
                    requestedConfigs: t
                }) => {
                    const i = structuredClone(this.configs);
                    e && e.length && e.forEach(e => i.set(e.contentModelId, e));
                    t && t.length && t.forEach(e => {
                        i.has(e.contentModelId) || i.set(e.contentModelId, e)
                    });
                    this.store.setState(e => Object.assign({}, e, {
                        configs: i,
                        isLoaded: !0
                    }))
                };
                this.handleTemplateSucceded = e => {
                    const t = Object.assign({}, e, {
                        contentModelId: Te
                    });
                    this.store.setState(e => Object.assign({}, e, {
                        templateConfig: t,
                        isLoaded: !0
                    }))
                };
                const e = {
                    configs: new Map,
                    configRequest: null,
                    requestError: !1,
                    isLoaded: !1
                };
                this.store = new A(e)
            }
            init(e) {
                this.store.setState(t => Object.assign({}, t, {
                    configRequest: e
                }));
                return this.fetchConfigs()
            }
            subscribe(e) {
                return this.store.subscribe(e)
            }
            get configs() {
                return this.store.state.configs
            }
            get isLoaded() {
                return this.store.state.isLoaded
            }
            get sortedConfigsWithSpecificty() {
                return z(this.configsWithAudience, (e, t) => t.specificity - e.specificity)
            }
            get configsWithAudience() {
                return W(this.configs, e => e.specificity > 0)
            }
            get overlayedConfigsWithNoAudience() {
                return W(this.overlayedConfigs, e => !e.specificity)
            }
            get overlayedConfigs() {
                return W(this.configs, e => e.containerType !== K.EMBEDDED)
            }
            get embeddedConfigs() {
                const e = W(this.configs, e => e.containerType === K.EMBEDDED);
                this.templateConfig && this.templateConfig.containerType === K.EMBEDDED && e.set(Te, this.templateConfig);
                return e
            }
            get templateConfig() {
                return this.store.state.templateConfig
            }
            get previewConfig() {
                const [e] = this.store.state.configs.values();
                return e
            }
            fetch(e) {
                return fetch(e).then(e => {
                    if (!e.ok) {
                        this.handleFetchFailed();
                        return Promise.resolve(null)
                    }
                    return e.json().then(e => {
                        e.templatePath ? this.handleTemplateSucceded(e) : this.handleFetchSucceded(e);
                        return e
                    }).catch(this.handleFetchFailed)
                }).catch(this.handleFetchFailed)
            }
            fetchConfigsWithIds(e) {
                const t = this.store.state.configRequest;
                if (!t) return;
                const i = ve(Object.assign({}, t, {
                    contentIds: e
                }));
                this.fetch(i)
            }
            static getStylesFromContainerStyles(e) {
                let t = e.width.value || 5,
                    i = e.height.value || 5;
                "px" === e.width.units && (t = Math.max(t, 5));
                "px" === e.height.units && (i = Math.max(i, 5));
                return {
                    width: `${t}${e.width.units}`,
                    height: `${i}${e.height.units}`
                }
            }
            static getStylesForIframe(e) {
                const t = {},
                    {
                        border: i,
                        borderRadius: s,
                        boxShadow: n
                    } = e;
                i && (t.border = `${i.width.value}${i.width.units} ${i.style} ${ye(i.color,i.opacity/100)}`);
                n && n.css && (t.boxShadow = n.css.split(":")[1]);
                s && (t.borderRadius = `${s.value}${s.units}`);
                return t
            }
            static isFloatingButtonLike(e) {
                return "isDismissable" in e && (e.containerType === K.SLIDE_IN && !e.isDismissable)
            }
            static isTopBannerLike(e) {
                return e.containerType === K.BANNER && e.containerStyles.position === Ce.TOP
            }
            static buildConfigRequest(e, t = [], i) {
                const {
                    isPreview: s,
                    currentUrl: n,
                    portalId: o,
                    env: r,
                    hublet: a,
                    isMobile: c,
                    templatePath: l,
                    versionId: h
                } = e;
                return {
                    contentIds: t,
                    currentUrl: n,
                    portalId: o,
                    env: r,
                    hublet: a,
                    analytics: Object.assign({}, i),
                    isMobile: c,
                    isPreview: s,
                    templatePath: l,
                    versionId: h
                }
            }
        }
        var we = new Ee;
        const Se = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            Ae = ["hs_preview", "preview_key"];
        class Ie {
            constructor() {
                this.portalId = 0;
                this.env = "";
                this.hublet = "na1";
                this.isLocal = !1;
                this.isMobile = !1;
                this.isLiveHSPage = !1;
                this.pageId = null;
                this.language = null;
                this.isPreview = !1;
                this.isScreenshot = !1;
                this.isTemplate = !1;
                this.previewScheduled = !1;
                this.enableResponsiveStyles = !1;
                this.isPreviewPage = !1;
                this.gates = [];
                this.win = re();
                this.currentUrl = this.win.location.href
            }
            init() {
                this._setEnvProps();
                this._setUrlProps()
            }
            getPageId() {
                return this.win.hsVars && this.win.hsVars.analytics_page_id ? this.win.hsVars.analytics_page_id : this.win.hsVars && this.win.hsVars.page_id ? this.win.hsVars.page_id : null
            }
            getLanguage() {
                const e = this.win.hsVars;
                return e && e.language ? e.language : null
            }
            _setEnvProps() {
                const e = oe();
                this.portalId = e.portalId;
                this.hublet = e.hublet;
                this.env = e.env;
                this.isLocal = e.isLocal;
                this.isMobile = Se();
                this.isPreviewPage = Ae.some(e => this.win.location.search.includes(e));
                this.pageId = this.getPageId();
                this.isLiveHSPage = Boolean(this.pageId);
                this.language = this.getLanguage()
            }
            isCosPreviewPage() {
                const e = this.win.location.toString();
                return /preview(-[^.]+)?\.hs-sites(qa)?(-[^.]+)?\.com/g.test(e) || /hubspotpreview(qa)?(-[^.]+)?/.test(e) || this.win.location.search.includes("hs_preview") || this.win.location.search.includes("preview_key")
            }
            isCos() {
                if (this.win.hsVars && this.win.hsVars.portal_id) return !0;
                return [...document.getElementsByTagName("meta")].some(e => "generator" === e.getAttribute("name") && "HubSpot" === e.getAttribute("content"))
            }
            _setUrlProps() {
                const e = new URLSearchParams(this.win.location.search);
                if (e.has("templatePath")) {
                    this.templatePath = e.get("templatePath");
                    this.isTemplate = !0
                }
                e.has("previewScheduled") && (this.previewScheduled = "true" === e.get("previewScheduled"));
                e.has("enableResponsiveStyles") && (this.enableResponsiveStyles = "true" === e.get("enableResponsiveStyles"));
                e.has("versionId") && (this.versionId = parseInt(e.get("versionId"), 10));
                if (e.has("screenshotBodyHeight")) {
                    this.screenshotBodyHeight = parseInt(e.get("screenshotBodyHeight"), 10);
                    this.isScreenshot = !0
                }
                if (e.has("publishedPreview")) {
                    this.isPreview = !0;
                    this.previewScheduled = !0;
                    this.versionId = -1
                }
                if (e.has("previewInteractiveId")) {
                    this.previewId = parseInt(e.get("previewInteractiveId"), 10);
                    this.isPreview = !0
                }
                this.isPreview && e.has("email") && (this.contactPreviewEmail = e.get("email"));
                this.currentUrl = this.win.location.href
            }
            setGates(e) {
                this.gates = e
            }
            isUngatedFor(e) {
                return this.gates.includes(e)
            }
            refresh() {
                this._setUrlProps()
            }
        }
        var Me = new Ie;
        class Oe {
            constructor() {
                this.markAsViewed = e => {
                    this.store.setState(t => Object.assign({}, t, {
                        viewed: new Set([...t.viewed, e])
                    }))
                };
                const e = {
                    viewed: new Set
                };
                this.store = new A(e)
            }
            subscribe(e) {
                this.store.subscribe(e)
            }
            hasBeenViewed(e) {
                return this.store.state.viewed.has(e)
            }
            get viewed() {
                return this.store.state.viewed
            }
        }

        function Pe() {
            return new Oe
        }
        const _e = "hs-cta-trigger-button",
            Le = "hs-cta-embed",
            Fe = "web-interactives-preview-wrapper";
        var Re = () => Array.from(document.getElementsByClassName(_e));
        var Ne = () => Array.from(document.getElementsByClassName(Le));
        const ke = () => {
                try {
                    return Array.from(document.querySelectorAll("a[href*='HS_DISPLAY_CALL_TO_ACTION'"))
                } catch (e) {
                    return []
                }
            },
            He = e => {
                const t = e.getAttribute("href");
                if (!t) return null;
                const i = /\(([^)]+)\)/.exec(t);
                if (!i) return null;
                const s = i[1];
                return s ? JSON.parse(s.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ').replaceAll("'", '"')).id : null
            };
        var De = e => {
            const t = Array.from(e.classList).filter(e => e.startsWith(_e) && e !== _e || e.startsWith(Le) && e !== Le).map(e => e.split("-").pop());
            let i = Number(t);
            if (Number.isNaN(i)) {
                const t = e.dataset.hubspotWrapperCtaId;
                i = Number(t)
            }
            return i
        };

        function Be(e) {
            return Number(e.dataset.hubspotWrapperCtaId)
        }

        function Ve() {
            return Array.from(document.querySelectorAll(".hs-web-interactive-inline[data-hubspot-wrapper-cta-id]"))
        }
        const xe = () => {
                const e = new Map,
                    t = new Map,
                    i = new Map,
                    s = new Set,
                    n = new Set,
                    o = new Set;
                Re().forEach(t => {
                    const i = De(t);
                    s.add(i);
                    const n = e.get(i);
                    n ? e.set(i, [...n, t]) : e.set(i, [t])
                });
                Ne().forEach(e => {
                    const i = De(e);
                    n.add(i);
                    const s = t.get(i);
                    s ? t.set(i, [...s, e]) : t.set(i, [e])
                });
                ke().forEach(t => {
                    const i = He(t);
                    if (!i) return;
                    s.add(i);
                    const n = e.get(i);
                    n ? e.set(i, [...n, t]) : e.set(i, [t])
                });
                Ve().forEach((e, t) => {
                    const s = Be(e);
                    if (!s) return;
                    e.id = `hs-interactive-container-${s}-${t}`;
                    o.add(s);
                    const n = i.get(s);
                    n ? i.set(s, [...n, e]) : i.set(s, [e])
                });
                const r = [...new Set([...s, ...n, ...o])];
                return {
                    clickTriggerButtons: e,
                    embedContainers: t,
                    nonFramedCTAContainers: i,
                    clickTriggerIds: s,
                    embedIds: n,
                    nonFramedIds: o,
                    uniqueIds: r
                }
            },
            $e = (e, t) => {
                const i = document.createElement("div");
                i.innerHTML = t;
                return i.firstElementChild
            };
        let Ue = {
                data: ""
            },
            Ge = e => {
                try {
                    let t = e ? e.querySelector("#_goober") : self._goober;
                    return t || (t = (e || document.head).appendChild(document.createElement("style")), t.innerHTML = " ", t.id = "_goober"), t.firstChild
                } catch (e) {}
                return Ue
            },
            je = /(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,
            qe = /\/\*.*?\*\/|\s{2,}|\n/gm,
            We = (e, t, i) => {
                let s = "",
                    n = "",
                    o = "";
                for (let r in e) {
                    let a = e[r];
                    if ("object" == typeof a) {
                        let e = t + " " + r;
                        /&/g.test(r) && (e = r.replace(/&/g, t)), "@" == r[0] && (e = t, "f" == r[1] && (e = r)), /@k/.test(r) ? n += r + "{" + We(a, "", "") + "}" : n += We(a, e, e == t ? r : i || "")
                    } else /^@i/.test(r) ? s = r + " " + a + ";" : o += We.p ? We.p(r.replace(/[A-Z]/g, "-$&").toLowerCase(), a) : r.replace(/[A-Z]/g, "-$&").toLowerCase() + ":" + a + ";"
                }
                if (o[0]) {
                    let e = t + "{" + o + "}";
                    return i ? n + i + "{" + e + "}" : s + e + n
                }
                return s + n
            },
            ze = {},
            Ye = (e, t, i, s) => {
                let n = e.toLowerCase ? e : function e(t) {
                        let i = "";
                        for (let s in t) "object" == typeof val ? i += s + e(t[s]) : i += s + t[s];
                        return i
                    }(e),
                    o = ze[n] || (ze[n] = ".go" + n.split("").reduce((e, t) => 101 * e + t.charCodeAt(0) >>> 0, 11));
                return ((e, t, i) => {
                    t.data.indexOf(e) < 0 && (t.data = i ? e + t.data : t.data + e)
                })(ze[o] || (ze[o] = We(e[0] ? (e => {
                    let t, i = [{}];
                    for (; t = je.exec(e.replace(qe, ""));) t[4] && i.shift(), t[3] ? i.unshift(i[0][t[3]] = i[0][t[3]] || {}) : t[4] || (i[0][t[1]] = t[2]);
                    return i[0]
                })(e) : e, i ? "" : o)), t, s), o.slice(1)
            },
            Qe = (e, t, i) => e.reduce((e, s, n) => {
                let o = t[n];
                if (o && o.call) {
                    let e = o(i),
                        t = e && e.props && e.props.className || /^go/.test(e) && e;
                    o = t ? "." + t : e && e.props ? "" : e
                }
                return e + s + (null == o ? "" : o)
            }, "");

        function Xe(e) {
            let t = this || {},
                i = e.call ? e(t.p) : e;
            return Ye(i.map ? Qe(i, [].slice.call(arguments, 1), t.p) : i, Ge(t.target), t.g, t.o)
        }
        Xe.bind({
            g: 1
        });
        const Ke = Xe(["position:fixed;display:block;width:100%;height:0px;margin:0px;padding:0px;overflow:visible;transform-style:preserve-3d;background:transparent;backface-visibility:hidden;pointer-events:none;left:0px;z-index:9998;"]),
            Je = Xe(["top:0px;z-index:9999;height:100%;width:100%;"]),
            Ze = Xe(["bottom:0px;"]),
            et = Xe(["position:fixed;z-index:9989;"]),
            tt = Xe(["left:0;bottom:0;"]),
            it = Xe(["right:0;bottom:0;"]),
            st = Xe(["left:0;top:0;"]),
            nt = Xe(["right:0;top:0;"]),
            ot = Xe(["position:relative;overflow:hidden;display:none;"]),
            rt = Xe(["display:block;"]),
            at = "hs-web-interactives-banner-style-element",
            ct = "hs-web-interactives-top-banner-open",
            lt = "hs-web-interactives-top-anchor",
            ht = "hs-web-interactives-top-push-anchor",
            dt = "hs-web-interactives-bottom-anchor",
            ut = "hs-web-interactives-floating-container",
            mt = "hs-web-interactives-floating-top-left-anchor",
            gt = "hs-web-interactives-floating-top-right-anchor",
            pt = "hs-web-interactives-floating-bottom-left-anchor",
            ft = "hs-web-interactives-floating-bottom-right-anchor",
            vt = e => `\n  .${ct} .hs-is-fixed-element {\n    translate: 0px ${e}px!important;\n  }\n`,
            Ct = () => `\n<div class="${Ke} ${Je}" id="${lt}"></div>\n<div class="${Ke} ${Ze}" id="${dt}"></div>\n<div id="${ut}">\n  <div id="${mt}" class="${et} ${st}" >\n  </div>\n  <div id="${gt}" class="${et} ${nt}">\n  </div>\n  <div id="${pt}" class="${et} ${tt}">\n  </div>\n  <div id="${ft}" class="${et} ${it}">\n  </div>\n</div>\n`;
        class Tt {
            constructor() {
                this.render();
                this.topPushAnchor = document.getElementById(ht);
                this.topAnchor = document.getElementById(lt);
                this.bottomAnchor = document.getElementById(dt);
                this.floatingAnchors = {
                    [Ce.TOP_LEFT]: document.getElementById(mt),
                    [Ce.TOP_RIGHT]: document.getElementById(gt),
                    [Ce.BOTTOM_LEFT]: document.getElementById(pt),
                    [Ce.BOTTOM_RIGHT]: document.getElementById(ft)
                };
                this.bottomRightFloatingButtonAnchor = this.floatingAnchors.BOTTOM_RIGHT
            }
            attachInteractiveOverlayToAnchor(e) {
                e.containerType !== K.MODAL ? e.isFloatingButtonLike ? this.attachFloatingButton(e) : e.containerType !== K.BANNER && e.containerType !== K.SLIDE_IN || this.attachBanner(e) : this.attachModal(e)
            }
            attachModal(e) {
                this.topAnchor.appendChild(e.container)
            }
            attachBanner(e) {
                e.position === Ce.BOTTOM || e.position === Ce.BOTTOM_LEFT || e.position === Ce.BOTTOM_RIGHT ? this.bottomAnchor.appendChild(e.container) : e.position !== Ce.TOP && e.position !== Ce.TOP_RIGHT && e.position !== Ce.TOP_LEFT || this.topAnchor.appendChild(e.container)
            }
            attachFloatingButton(e) {
                const t = this.floatingAnchors[e.position];
                t && t.appendChild(e.container)
            }
            addMarginForConversations(e) {
                this.bottomRightFloatingButtonAnchor.style.marginBottom = e + "px"
            }
            removeMarginForConversations() {
                this.bottomRightFloatingButtonAnchor.style.marginBottom = ""
            }
            insertPushBanner() {
                const e = document.createElement("div");
                e.id = ht;
                e.classList.add(ot);
                document.body.prepend(e)
            }
            showPushBanner(e) {
                this.topPushAnchor.style.height = e + "px";
                this.topPushAnchor.classList.add(rt);
                document.body.classList.add(ct);
                const t = document.createElement("style");
                t.id = at;
                t.innerHTML = vt(e);
                document.head.appendChild(t)
            }
            hidePushBanner() {
                this.topPushAnchor.style.height = "";
                this.topPushAnchor.classList.remove(rt);
                document.body.classList.remove(ct);
                const e = document.getElementById(at);
                e && document.head.removeChild(e)
            }
            render() {
                this.insertPushBanner();
                document.body.insertAdjacentHTML("beforeend", Ct())
            }
        }
        const bt = Xe(["position:absolute;pointer-events:none;width:101vw;height:101vh;background:rgba(0,0,0,0.7);opacity:0;z-index:-1;"]),
            yt = Xe(["z-index:99998;opacity:0.8;visibility:visible;pointer-events:all;cursor:pointer;"]),
            Et = Xe(["overflow:hidden;"]);
        class wt {
            constructor({
                parent: e,
                handleClick: t = (() => {})
            }) {
                this.disableBodyScroll = !1;
                this.overlay = document.createElement("div");
                this.overlay.id = "hs-interactives-modal-overlay";
                this.overlay.classList.add(bt);
                this.handleClick = t;
                this.render(e);
                this.listenForClick()
            }
            listenForClick() {
                this.overlay.addEventListener("click", this.handleClick)
            }
            enableDisableBodyScroll() {
                this.disableBodyScroll = !0
            }
            show() {
                this.overlay.classList.add(yt);
                this.disableBodyScroll && document.body.classList.add(Et)
            }
            hide() {
                this.overlay.classList.remove(yt);
                document.body.classList.remove(Et)
            }
            render(e) {
                e.appendChild(this.overlay)
            }
        }
        const St = {
                modalPosition: null,
                bannerPositions: {
                    TOP_LEFT: null,
                    TOP_RIGHT: null,
                    BOTTOM_LEFT: null,
                    BOTTOM_RIGHT: null,
                    BOTTOM: null,
                    TOP: null
                },
                floatingPositions: {
                    TOP_LEFT: null,
                    TOP_RIGHT: null,
                    BOTTOM_LEFT: null,
                    BOTTOM_RIGHT: null
                }
            },
            At = [Ce.TOP, Ce.TOP_LEFT, Ce.TOP_RIGHT],
            It = [Ce.BOTTOM, Ce.BOTTOM_LEFT, Ce.BOTTOM_RIGHT];
        class Mt {
            constructor({
                isMobile: e = !1
            }) {
                this.isMobile = !1;
                this.store = new A(St);
                this.isMobile = e
            }
            setPosistionFromConfig(e) {
                const {
                    contentModelId: t,
                    containerType: i,
                    containerStyles: {
                        position: s
                    }
                } = e, n = Ee.isFloatingButtonLike(e);
                i === K.MODAL ? this.setModalPosition(t) : i !== K.BANNER && !K.SLIDE_IN || n ? n && this.setFloatingPosition(s, t) : this.setBannerPosition(s, t)
            }
            get modalPosition() {
                return this.store.state.modalPosition
            }
            get bannerPositions() {
                return this.store.state.bannerPositions
            }
            get floatingPositions() {
                return this.store.state.floatingPositions
            }
            canBeInsertedIntoPosition(e) {
                return this.isMobile ? this.canBeInsertedIntoPositionMobile(e) : this.canBeInsertedIntoPositionDesktop(e)
            }
            canBeInsertedIntoPositionMobile(e) {
                const t = Ee.isFloatingButtonLike(e);
                return e.containerType === K.MODAL ? !this.modalPosition : e.containerType === K.BANNER || e.containerType === K.SLIDE_IN && !t ? Object.keys(this.bannerPositions).reduce((e, t) => e && !this.bannerPositions[t], !0) : !!t && Object.keys(this.floatingPositions).reduce((e, t) => e && !this.floatingPositions[t], !0)
            }
            canBeInsertedIntoPositionDesktop(e) {
                const t = Ee.isFloatingButtonLike(e);
                return e.containerType === K.MODAL ? !this.modalPosition : e.containerType === K.BANNER || e.containerType === K.SLIDE_IN && !t ? It.includes(e.containerStyles.position) ? !this.bannerPositions[Ce.BOTTOM] && !this.bannerPositions[Ce.BOTTOM_LEFT] && !this.bannerPositions[Ce.BOTTOM_RIGHT] : !!At.includes(e.containerStyles.position) && (!this.bannerPositions[Ce.TOP] && !this.bannerPositions[Ce.TOP_LEFT] && !this.bannerPositions[Ce.TOP_RIGHT]) : !!t && !this.floatingPositions[e.containerStyles.position]
            }
            setModalPosition(e) {
                this.store.setState(t => Object.assign({}, t, {
                    modalPosition: e
                }))
            }
            setBannerPosition(e, t) {
                this.store.setState(i => {
                    const s = i.bannerPositions;
                    return Object.assign({}, i, {
                        bannerPositions: Object.assign({}, s, {
                            [e]: t
                        })
                    })
                })
            }
            setFloatingPosition(e, t) {
                this.store.setState(i => {
                    const s = i.floatingPositions;
                    return Object.assign({}, i, {
                        floatingPositions: Object.assign({}, s, {
                            [e]: t
                        })
                    })
                })
            }
            getAllIds() {
                const e = [];
                "number" == typeof this.modalPosition && null !== this.modalPosition && e.push(this.modalPosition);
                for (const [t, i] of Object.entries(this.bannerPositions)) i && Number.isInteger(i) && e.push(i);
                for (const [t, i] of Object.entries(this.floatingPositions)) i && Number.isInteger(i) && e.push(i);
                return e
            }
            removeCTA(e) {
                this.modalPosition === e && this.store.setState(e => Object.assign({}, e, {
                    modalPosition: null
                }));
                for (const [t, i] of Object.entries(this.bannerPositions)) i === e && this.store.setState(e => Object.assign({}, e, {
                    bannerPositions: Object.assign({}, e.bannerPositions, {
                        [t]: null
                    })
                }));
                for (const [t, i] of Object.entries(this.floatingPositions)) i === e && this.store.setState(e => Object.assign({}, e, {
                    floatingPositions: Object.assign({}, e.floatingPositions, {
                        [t]: null
                    })
                }))
            }
        }

        function Ot(e) {
            return new Mt({
                isMobile: e
            })
        }
        const Pt = 6e4,
            _t = 1440 * Pt,
            Lt = 7 * _t,
            Ft = 4 * Lt,
            Rt = {
                REPEAT_ONCE: "REPEAT_ONCE",
                REPEAT_FOREVER: "REPEAT_FOREVER",
                ONCE_OFF: "ONCE_OFF"
            },
            Nt = {
                DAYS: "DAYS",
                MONTHS: "MONTHS",
                WEEKS: "WEEKS",
                MINUTES: "MINUTES"
            },
            kt = Object.freeze({
                DAYS: _t,
                MONTHS: Ft,
                WEEKS: Lt,
                MINUTES: Pt
            }),
            Ht = "WI_IGNORED",
            Dt = "WI_FREQUENCY",
            Bt = {
                frequency: Rt.REPEAT_ONCE,
                backoff: {
                    backoffTimeDuration: 2,
                    backoffTimeUnit: Nt.WEEKS
                }
            },
            Vt = e => {
                try {
                    if (!localStorage.getItem(`${Dt}_${e}`)) {
                        const t = localStorage.getItem(`${Ht}_${e}`);
                        if (!t) return !1;
                        return parseInt(t, 10) > Date.now() - 2 * kt.WEEKS
                    }
                    const t = JSON.parse(localStorage.getItem(`${Dt}_${e}`));
                    switch (t.frequency) {
                        case Rt.ONCE_OFF:
                            return !0;
                        case Rt.REPEAT_FOREVER:
                            return !1;
                        case Rt.REPEAT_ONCE:
                            {
                                const {
                                    timeSaved: e,
                                    backoffTimeDuration: i,
                                    backoffTimeUnit: s
                                } = t,
                                n = i * kt[s];
                                return e > Date.now() - n
                            }
                        default:
                            return !1
                    }
                } catch (e) {
                    return !1
                }
            },
            xt = (e, t) => {
                let i = t;
                i && i.frequency || (i = Bt);
                const {
                    frequency: s,
                    backoff: n
                } = i;
                try {
                    let t = {
                        frequency: s
                    };
                    n && (t = Object.assign({}, t, n, {
                        timeSaved: Date.now()
                    }));
                    localStorage.setItem(`${Dt}_${e}`, JSON.stringify(t))
                } catch (e) {
                    return
                }
            },
            $t = (e, {
                frequency: t,
                backoff: i
            }) => {
                try {
                    if (!t) return;
                    const s = `${Dt}_${e}`,
                        n = JSON.parse(localStorage.getItem(s));
                    if (!n) return;
                    if (n.frequency !== t) {
                        localStorage.removeItem(s);
                        return
                    }
                    if (!i || !n.backoffTimeDuration) return;
                    i.backoffTimeDuration === n.backoffTimeDuration && i.backoffTimeUnit === n.backoffTimeUnit || localStorage.removeItem(s)
                } catch (e) {
                    return
                }
            },
            Ut = Xe(["display:block !important;position:static !important;box-sizing:border-box !important;background:transparent !important;border:none;min-height:0px !important;max-height:none !important;margin:0px;padding:0px !important;height:100% !important;width:1px !important;max-width:100% !important;min-width:100% !important;"]);

        function Gt(e, t = {}) {
            o("Setting style on element", t, e);
            for (const i in t) Object.hasOwnProperty.call(t, i) && (e.style[i] = t[i])
        }
        const jt = "hs-cta-embed__loaded",
            qt = () => {};
        class Wt {
            constructor({
                src: e,
                contentId: t,
                containerStyle: i,
                configStyle: s,
                iframeStyle: n,
                containerType: o,
                isFloatingButtonLike: r,
                isTopBanner: a
            }) {
                this.onClose = qt;
                this.setDeferredPromise();
                this.container = document.createElement("div");
                this.contentId = t;
                this.container.id = "hs-overlay-cta-" + t;
                this.frameComponent = S({
                    container: this.container,
                    id: t,
                    iframeSrc: e,
                    onFrameReady: this.resolveFrameload,
                    resizeHeight: s.scaleHeightToFitContent || Boolean(s.isSingleModuleOnly),
                    useResponsiveStyling: s.useResponsiveStyling,
                    extraAttributes: {
                        "aria-label": "Popup CTA",
                        title: "Popup CTA",
                        allow: "autoplay; fullscreen;"
                    }
                });
                this.frameComponent.iframe.setAttribute("data-test-id", "interactive-frame");
                this.frameComponent.iframe.classList.add(Ut);
                this.containerStyle = i;
                this.iframeStyle = n;
                this.configStyle = s;
                this.containerType = o;
                this.position = s.position || null;
                this.isFloatingButtonLike = r;
                this.isTopBanner = a;
                this.applyStyleElements();
                this.render()
            }
            applyStyleElements() {
                this.frameComponent.setStyle(this.iframeStyle);
                Gt(this.container, this.containerStyle)
            }
            setDeferredPromise() {
                this.frameLoadPromise = new Promise(e => {
                    this.resolveFrameload = e
                })
            }
            open() {
                return this.frameLoadPromise.then(() => {
                    this.frameComponent.setStyle({
                        visibility: ""
                    });
                    this.container.classList.add(jt);
                    this.internalOpen()
                }).catch(() => {})
            }
            close() {}
            render() {}
            skipAnimation() {}
            setAnimationForClickTrigger() {}
            registerCloseHandler(e) {
                this.frameComponent.iframeCommunicator.registerHandlers({
                    [s.CLOSE_INTERACTIVE]: e
                })
            }
            internalOpen() {}
            remove() {
                this.frameComponent.iframeCommunicator.remove();
                this.container.remove()
            }
        }
        const zt = (...e) => {
                o("[overlays/Modal]", ...e)
            },
            Yt = Xe(["z-index:99999;visibility:hidden;position:absolute;inset:50vh auto auto 50%;transform:translate(-50%,-50%);left:50%;top:50%;opacity:0;pointer-events:none;max-height:95%;max-width:95%;"]),
            Qt = Xe(["pointer-events:auto !important;visibility:visible;opacity:1;transition:opacity 1s ease-in;"]),
            Xt = Xe(["transition:opacity 0.3s ease-in;"]);
        class Kt extends Wt {
            internalOpen() {
                this.container.classList.add(Qt);
                this.focusElement()
            }
            focusElement() {
                try {
                    this.frameComponent.iframe.focus()
                } catch (e) {
                    zt("Frame not defined", e)
                }
            }
            setAnimationForClickTrigger() {
                this.container.classList.add(Xt)
            }
            close() {
                this.container.classList.remove(Qt)
            }
            render() {
                this.frameComponent.iframe.setAttribute("role", "dialog");
                this.container.classList.add(Yt)
            }
        }
        const Jt = Xe(["pointer-events:auto !important;visibility:visible !important;max-height:95vh !important;transition:max-height 1s ease-in;"]),
            Zt = Xe(["z-index:9999;width:100%;max-height:0px;position:fixed;max-height:95%;visibility:hidden;"]),
            ei = Xe(["z-index:9999;width:100%;max-height:0px;position:fixed;max-height:95%;visibility:hidden;bottom:0px;"]),
            ti = {
                [Ce.TOP]: Zt,
                [Ce.BOTTOM]: ei
            };
        class ii extends Wt {
            internalOpen() {
                this.container.classList.add(Jt)
            }
            close() {
                this.container.classList.remove(Jt)
            }
            addPositionClass() {
                const {
                    position: e
                } = this.configStyle;
                this.container.classList.add(ti[e])
            }
            render() {
                this.addPositionClass();
                this.container.classList.add(Zt)
            }
        }
        const si = Xe(["visibility:hidden;"]),
            ni = Xe(["visibility:visible !important;"]);
        class oi extends Wt {
            internalOpen() {
                this.container.classList.add(ni)
            }
            close() {
                this.container.classList.remove(ni)
            }
            render() {
                this.container.classList.add(si)
            }
        }
        const ri = Xe(["pointer-events:auto !important;visibility:visible !important;max-height:95vh !important;transform:none !important;"]),
            ai = Xe(["z-index:9999;width:100%;max-height:0px;position:fixed;max-height:95%;visibility:hidden;transition:transform 0.5s cubic-bezier(0.31,-0.2,0.04,1.47);"]),
            ci = Xe(["z-index:9999;position:fixed;left:10px;top:10px;max-height:95vh !important;max-width:95%;visibility:hidden;"]),
            li = Xe(["z-index:9999;position:fixed;right:10px;top:10px;max-height:95vh !important;max-width:95%;visibility:hidden;"]),
            hi = Xe(["z-index:9999;position:fixed;left:10px;bottom:10px;max-height:95vh !important;max-width:95%;visibility:hidden;"]),
            di = Xe(["z-index:9999;position:fixed;right:10px;bottom:10px;max-height:95vh !important;max-width:95%;visibility:hidden;"]),
            ui = Xe(["transition:none !important;"]),
            mi = {
                [Ce.BOTTOM_RIGHT]: di,
                [Ce.BOTTOM_LEFT]: hi,
                [Ce.TOP_RIGHT]: li,
                [Ce.TOP_LEFT]: ci
            };
        class gi extends Wt {
            internalOpen() {
                this.container.classList.add(ri)
            }
            close() {
                this.container.classList.remove(ri)
            }
            skipAnimation() {
                this.container.classList.add(ui)
            }
            addPositionClass() {
                const {
                    position: e
                } = this.configStyle;
                this.container.classList.add(mi[e])
            }
            addOffset() {
                const e = this.containerStyle.width;
                if (!e) return;
                switch (this.configStyle.position) {
                    case Ce.BOTTOM_LEFT:
                    case Ce.TOP_LEFT:
                        this.container.style.transform = `translateX(-${e})`;
                        return;
                    case Ce.BOTTOM_RIGHT:
                    case Ce.TOP_RIGHT:
                        this.container.style.transform = `translateX(calc(100% + ${e}))`;
                        return
                }
            }
            render() {
                this.addPositionClass();
                this.addOffset();
                this.frameComponent.iframe.setAttribute("role", "dialog");
                this.container.classList.add(ai)
            }
        }

        function pi(e, t) {
            const i = Ee.isFloatingButtonLike(e),
                s = Ee.isTopBannerLike(e),
                n = {
                    src: t,
                    configStyle: e.containerStyles,
                    contentId: e.contentModelId,
                    containerType: e.containerType,
                    containerStyle: Ee.getStylesFromContainerStyles(e.containerStyles),
                    iframeStyle: Ee.getStylesForIframe(e.containerStyles),
                    isFloatingButtonLike: i,
                    isTopBanner: s
                };
            if (i) return new oi(n);
            switch (e.containerType) {
                case K.MODAL:
                    return new Kt(n);
                case K.BANNER:
                    return new ii(n);
                case K.SLIDE_IN:
                    return new gi(n);
                default:
                    return null
            }
        }

        function fi(e) {
            return e.button < 2
        }
        const vi = (...e) => {
                o("[ClickTrigger", ...e)
            },
            Ci = Xe(["cursor:pointer;"]);
        class Ti {
            constructor(e, t) {
                this.button = e;
                this.onClick = t;
                this.init();
                this.addA11yAttributes()
            }
            addA11yAttributes() {
                this.button.setAttribute("aria-haspopup", "dialog");
                this.button.setAttribute("tabindex", "0")
            }
            init() {
                vi("Setting up click trigger");
                this.button.removeAttribute("href");
                this.button.removeAttribute("target");
                this.button.classList.add(Ci);
                this.button.removeAttribute("href");
                this.button.removeAttribute("target");
                this.button.addEventListener("mouseup", e => {
                    vi("Mouse up on click trigger", e);
                    fi(e) && this.onClick()
                });
                this.button.addEventListener("keypress", e => {
                    if ("Enter" === e.key) {
                        vi("Enter on click trigger", e);
                        this.onClick()
                    }
                })
            }
        }
        class bi {
            constructor({
                onTrigger: e
            }) {
                this.isExitIntent = e => {
                    if (!e) return !1;
                    return !e.relatedTarget && e.clientY < 100
                };
                this.handleMouseOut = e => {
                    this.isExitIntent(e) && this.onTrigger(this)
                };
                this.onTrigger = e;
                this.setup()
            }
            setup() {
                document.addEventListener("mouseout", this.handleMouseOut)
            }
            remove() {
                document.removeEventListener("mouseout", this.handleMouseOut)
            }
        }
        const yi = 1e3,
            Ei = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"];
        class wi {
            constructor({
                onTrigger: e,
                value: t
            }) {
                this.resetTimer = () => {
                    this.timeout && clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => this.onTrigger(this), this.seconds)
                };
                this.onTrigger = e;
                this.seconds = t * yi;
                this.timeout = null;
                this.setup()
            }
            setup() {
                this.timeout = setTimeout(() => this.onTrigger(this), this.seconds);
                Ei.forEach(e => {
                    document.addEventListener(e, this.resetTimer)
                })
            }
            remove() {
                Ei.forEach(e => {
                    document.removeEventListener(e, this.resetTimer)
                });
                this.timeout && clearTimeout(this.timeout)
            }
        }

        function Si() {
            let e = !1;
            try {
                const t = {
                    get passive() {
                        e = !0
                    }
                };
                window.addEventListener("test", t, t);
                window.removeEventListener("test", t, t)
            } catch (t) {
                e = !1
            }
            return e
        }

        function Ai() {
            return Math.max(document.body.offsetHeight, document.body.scrollHeight)
        }

        function Ii() {
            return Math.max(window.innerHeight || 0, document.documentElement.clientHeight)
        }

        function Mi() {
            return document.body.scrollTop || document.documentElement.scrollTop
        }
        class Oi {
            constructor({
                onTrigger: e,
                value: t
            }) {
                this.handleScroll = () => {
                    const e = Ai() - Ii();
                    100 * Mi() / e >= this.scrollPercent && this.onTrigger(this)
                };
                this.onTrigger = e;
                this.scrollPercent = t;
                this.supportsPassiveScrolling = Si();
                this.setup()
            }
            setup() {
                this.supportsPassiveScrolling ? window.addEventListener("scroll", this.handleScroll, {
                    capture: !0,
                    passive: !0
                }) : window.addEventListener("scroll", this.handleScroll, !0)
            }
            remove() {
                this.supportsPassiveScrolling ? window.removeEventListener("scroll", this.handleScroll, {
                    capture: !0
                }) : window.removeEventListener("scroll", this.handleScroll, !0)
            }
        }
        const Pi = 1e3;

        function _i() {
            return document.timeline && document.timeline.currentTime ? document.timeline.currentTime : performance ? performance.now() : 0
        }
        class Li {
            constructor({
                onTrigger: e,
                value: t
            }) {
                this.onTrigger = e;
                const i = _i();
                this.ms = Math.max(t * Pi - i, 0);
                this.timeout = null;
                this.setup()
            }
            setup() {
                this.timeout = setTimeout(() => {
                    this.onTrigger(this)
                }, this.ms)
            }
            remove() {
                this.timeout && clearTimeout(this.timeout)
            }
        }

        function Fi(e, t) {
            const {
                showOnPageScroll: i,
                showOnExitIntent: s,
                showAfterDelay: n,
                showAfterInactivity: o,
                pageScrollPercentageTrigger: r,
                delayInSeconds: a,
                inactivityInSeconds: c
            } = e, l = [];
            i && l.push(new Oi({
                onTrigger: t,
                value: r || 0
            }));
            s && l.push(new bi({
                onTrigger: t
            }));
            n && l.push(new Li({
                onTrigger: t,
                value: a || 0
            }));
            o && l.push(new wi({
                onTrigger: t,
                value: c || 0
            }));
            return l
        }

        function Ri(e, t) {
            const i = new ResizeObserver(i => {
                for (const s of i) s.target === e && s.contentRect && t(s.contentRect.height, s.contentRect.height)
            });
            i.observe(e);
            return () => i.disconnect()
        }
        const Ni = "hubspot-messages-iframe-container",
            ki = () => {},
            Hi = 220,
            Di = 400,
            Bi = "userInteractedWithWidget";
        class Vi {
            constructor(e) {
                this.disconnectResizeObserver = ki;
                this.conversationsFrameContainer = null;
                this.handleConversationsReady = () => {
                    this.addConversationsEventListeners();
                    this.pollForConversationsRendered().then(() => {
                        this.conversationsFrameContainer = document.getElementById(Ni);
                        this.addConversationsStyleSheet();
                        this.listenForConversationsHeightChange();
                        this.setFloatingButtonOffset()
                    }).catch(() => {})
                };
                this.overlayContainer = e;
                this.listenForConversationsReady()
            }
            listenForConversationsReady() {
                window.HubSpotConversations ? this.handleConversationsReady() : window.hsConversationsOnReady && window.hsConversationsOnReady.length ? window.hsConversationsOnReady = [...window.hsConversationsOnReady, this.handleConversationsReady] : window.hsConversationsOnReady = [this.handleConversationsReady]
            }
            listenForConversationsHeightChange() {
                if (!this.conversationsFrameContainer) return;
                const e = Ri(this.conversationsFrameContainer, e => {
                    this.conversationsFrameContainer && e < Hi && this.setFloatingButtonOffset()
                });
                this.disconnectResizeObserver = e
            }
            addConversationsEventListeners() {
                window.HubSpotConversations && window.HubSpotConversations.on(Bi, () => {
                    Se() && this.removeConversationsStyleSheet()
                })
            }
            pollForConversationsRendered() {
                return new Promise(e => {
                    const t = setInterval(() => {
                        if (document.getElementById(Ni)) {
                            e();
                            clearInterval(t)
                        }
                    }, Di)
                })
            }
            setFloatingButtonOffset() {
                if (!this.overlayContainer || !this.conversationsFrameContainer) return;
                const e = this.conversationsFrameContainer.clientHeight;
                this.overlayContainer.addMarginForConversations(e)
            }
            addConversationsStyleSheet() {
                const e = document.createElement("style");
                e.id = "web-interactives-conversations-override";
                e.innerHTML = "#hubspot-messages-iframe-container { z-index: 9990!important; }";
                document.head.appendChild(e)
            }
            removeConversationsStyleSheet() {
                const e = document.getElementById("web-interactives-conversations-override");
                e && e.remove()
            }
        }

        function xi(e) {
            return new Vi(e)
        }
        class $i {
            constructor() {
                this.eventEmitter = a()
            }
            static getInstance() {
                $i.instance || ($i.instance = new $i);
                return $i.instance
            }
            emit(e, t) {
                this.eventEmitter.emit(e, t)
            }
            on(e, t) {
                this.eventEmitter.on(e, t)
            }
            off(e) {
                this.eventEmitter.off(e)
            }
        }
        const Ui = {
                REFRESH: "REFRESH",
                CLOSE: "CLOSE",
                CLOSE_ALL: "CLOSE_ALL",
                TRIGGER_OPEN: "TRIGGER_OPEN",
                REPLACED_INLINE_HTML: "REPLACED_INLINE_HTML"
            },
            Gi = h;
        class ji {
            constructor({
                configModel: e,
                environmentModel: t,
                analyticsModel: i,
                scheduledCTAsModel: n,
                handleView: o,
                scheduleCTA: r
            }) {
                this.triggerMap = new Map;
                this.shownModal = null;
                this.triggeredCTAFromCallback = null;
                this.clickTriggerComponentMap = new Map;
                this.interactiveComponentMap = new Map;
                this.conversationsController = null;
                this.eventManager = $i.getInstance();
                this.listenForKeypress = () => {
                    Q(() => {
                        this.shownModal && this.closeOverlay(this.shownModal)
                    })
                };
                this.sendAnalyticsToCTA = e => {
                    Gi.broadcast(e, {
                        type: s.RECEIVED_ANALYTICS,
                        payload: this.analyticsModel.analytics
                    })
                };
                this.handleTrigger = e => {
                    if (!Vt(e)) {
                        this.openOverlay(e);
                        for (const [t, i] of this.triggerMap) t === e && i.forEach(e => e.remove());
                        this.triggerMap.delete(e)
                    }
                };
                this.handleTriggerFromCTA = ({
                    triggerCTA: e,
                    id: t
                }) => {
                    this.interactiveComponentMap.has(t) && (this.interactiveComponentMap.has(e) ? this.shouldCloseCalloutCTA(t) && this.closeOverlay(t) : this.triggeredCTAFromCallback = [e, t]);
                    this.interactiveComponentMap.has(e) ? this.handleClickOpen(e) : this.scheduledCTAsModel.scheduledCTAs.has(e) || this.scheduleCTA(e)
                };
                this.handleClickOpen = e => {
                    this.openOverlay(e, !0)
                };
                this.handleOverlayClick = () => {
                    if (!Number.isInteger(this.shownModal)) return;
                    const e = this.configModel.configs.get(this.shownModal);
                    e && e.containerStyles.closeOnOverlayClick && this.closeOverlay(this.shownModal)
                };
                this.handlePageNavigation = ({
                    id: e,
                    openNewTab: t,
                    url: i
                }) => {
                    t || b(window.location.href, i) || this.shouldCloseCalloutCTA(e) && this.environmentModel.isUngatedFor("WebInteractives:CloseCTAOnNavigation") && this.shouldCloseCalloutCTA(e) && this.closeOverlay(e)
                };
                this.handleFormSubmission = ({
                    id: e
                }) => {
                    const t = this.configModel.configs.get(e);
                    t && t.shouldCloseOnFormSubmission && t.isDismissable && this.closeOverlay(e)
                };
                this.closeOverlay = e => {
                    const t = this.interactiveComponentMap.get(e);
                    if (t) {
                        t.isTopBanner && this.overlayedInteractivesContainer.hidePushBanner();
                        t.containerType === K.MODAL && this.overlay.hide();
                        t.close();
                        e === this.shownModal && (this.shownModal = null);
                        document.activeElement instanceof HTMLElement && document.activeElement.blur();
                        this.messageCTAClosed(e)
                    }
                };
                this.configModel = e;
                this.environmentModel = t;
                this.analyticsModel = i;
                this.scheduledCTAsModel = n;
                this.overlayedInteractivesContainer = null;
                this.overlay = null;
                this.handleView = o;
                this.scheduleCTA = r;
                this.listenToConfigUpdates();
                this.listenForOpenCTAMessage();
                this.listenForKeypress();
                this.registerMessageHandlers();
                this.triggerOpen = this.handleClickOpen
            }
            init({
                clickTriggerButtons: e
            }) {
                this.posistionsOccupied = Ot(this.environmentModel.isMobile);
                this.overlayedInteractivesContainer = new Tt;
                this.overlay = new wt({
                    parent: this.overlayedInteractivesContainer.topAnchor,
                    handleClick: this.handleOverlayClick
                });
                this.conversationsController = xi(this.overlayedInteractivesContainer);
                this.createClickTriggerComponents(e)
            }
            registerMessageHandlers() {
                Gi.registerHandlers({
                    [s.TRIGGER_CTA]: this.handleTriggerFromCTA,
                    [s.NAVIGATE_PAGE]: this.handlePageNavigation,
                    [s.CTA_FORM_SUBMITTED]: this.handleFormSubmission
                });
                this.eventManager.on(Ui.TRIGGER_OPEN, ({
                    id: e
                }) => this.handleClickOpen(e))
            }
            createClickTriggerComponents(e) {
                for (const [t, i] of e) i.forEach(e => {
                    const i = new Ti(e, () => this.handleClickOpen(t)),
                        s = this.clickTriggerComponentMap.get(t) || [];
                    this.clickTriggerComponentMap.set(t, [...s, i])
                })
            }
            createOverlayInteractiveFromAudience(e) {
                if (!this.shouldCreateInteractiveOverlay(e)) return !1;
                if (!this.createOverlayComponentAndSetOnMap(e)) return !1;
                this.posistionsOccupied.setPosistionFromConfig(e);
                const t = Fi(e.triggers, () => this.handleTrigger(e.contentModelId));
                this.triggerMap.set(e.contentModelId, t);
                return !0
            }
            createOverlayInteractivesWithAudience() {
                for (const [e, t] of this.configModel.sortedConfigsWithSpecificty) this.createOverlayInteractiveFromAudience(t)
            }
            createOverlayInteractivesWithNoAudience() {
                for (const [e, t] of this.configModel.overlayedConfigsWithNoAudience) {
                    if (this.interactiveComponentMap.has(e)) continue;
                    if (!this.createOverlayComponentAndSetOnMap(t)) return;
                    if (this.scheduledCTAsModel.scheduledCTAs.has(e)) {
                        this.openOverlay(e, !0);
                        this.scheduledCTAsModel.removeCTA(e)
                    }
                    this.sendAnalyticsToCTA(e)
                }
            }
            createTemplateOverlayInteractive() {
                this.createOverlayComponentAndSetOnMap(this.configModel.templateConfig)
            }
            createPreviewOverlayInteractive() {
                this.createOverlayComponentAndSetOnMap(this.configModel.previewConfig)
            }
            createOverlayComponentAndSetOnMap(e) {
                const t = pi(e, he(e.iframeSrc, this.environmentModel, this.analyticsModel));
                if (!t) return null;
                const i = e.contentModelId;
                if (this.triggeredCTAFromCallback) {
                    const [e] = this.triggeredCTAFromCallback;
                    i === e && t.skipAnimation()
                }
                this.interactiveComponentMap.set(i, t);
                this.overlayedInteractivesContainer.attachInteractiveOverlayToAnchor(t);
                t.registerCloseHandler(() => this.closeOverlay(e.contentModelId));
                return t
            }
            shouldCreateInteractiveOverlay(e) {
                return !(Vt(e.contentModelId) && !this.clickTriggerComponentMap.has(e.contentModelId)) && !!this.posistionsOccupied.canBeInsertedIntoPosition(e)
            }
            listenToConfigUpdates() {
                this.configModel.store.subscribe((e, t) => {
                    if (this.environmentModel.isPreview && 1 === e.configs.size) {
                        this.createPreviewOverlayInteractive();
                        requestAnimationFrame(() => {
                            this.configModel.previewConfig && this.openOverlay(this.configModel.previewConfig.contentModelId)
                        })
                    } else if (0 === t.configs.size && e.configs.size > 0) setTimeout(() => {
                        this.createOverlayInteractivesWithAudience();
                        this.createOverlayInteractivesWithNoAudience();
                        this.overlay && this.overlay.enableDisableBodyScroll()
                    });
                    else if (e.templateConfig) {
                        this.createTemplateOverlayInteractive();
                        requestAnimationFrame(() => {
                            this.openOverlay(Te)
                        })
                    } else {
                        e.configs.size > t.configs.size && this.createOverlayInteractivesWithNoAudience();
                        if (this.triggeredCTAFromCallback) {
                            const [t, i] = this.triggeredCTAFromCallback;
                            if (e.configs.has(t)) {
                                this.triggeredCTAFromCallback = null;
                                this.shouldCloseCalloutCTA(i) && this.closeOverlay(i)
                            }
                        }
                    }
                })
            }
            listenForOpenCTAMessage() {
                window.addEventListener("message", e => {
                    e && e.data && e.data.type === s.DISPLAY_CALL_TO_ACTION && this.openOverlay(e.data.id)
                })
            }
            openOverlay(e, t = !1) {
                const i = this.interactiveComponentMap.get(e);
                if (i) {
                    i.isTopBanner && this.overlayedInteractivesContainer.showPushBanner(i.container.clientHeight);
                    t && i.setAnimationForClickTrigger();
                    i.open().then(() => {
                        i.isTopBanner && this.overlayedInteractivesContainer.showPushBanner(i.container.clientHeight);
                        if (i.containerType === K.MODAL) {
                            this.shownModal = e;
                            this.overlay.show()
                        }
                        this.handleView(e);
                        Gi.broadcast(e, {
                            type: s.SHOWING_CTA,
                            payload: {}
                        })
                    }).catch(() => {})
                }
            }
            messageCTAClosed(e) {
                Gi.broadcast(e, {
                    type: s.HAS_CLOSED,
                    payload: {}
                })
            }
            shouldCloseCalloutCTA(e) {
                const t = this.configModel.configs.get(e);
                return !!t && t.isDismissable
            }
        }

        function qi(e) {
            return class extends e {
                constructor(e) {
                    super(e);
                    this.processConfigResponse = e => {
                        if (!e) return;
                        const t = e.sortedAudienceConfigs.map(e => e.contentModelId),
                            i = this.getShowingCTAIds(),
                            s = [];
                        for (const e of i) t.includes(e) || s.push(e);
                        this.handleRemovingCTAs(s);
                        const n = e.sortedAudienceConfigs.sort((e, t) => t.specificity - e.specificity);
                        this.createCTAsFromConfigs(n)
                    };
                    this.registerEventManagerEventHandlers()
                }
                registerEventManagerEventHandlers() {
                    this.eventManager.on(Ui.REFRESH, () => {
                        this.handleRefresh()
                    });
                    this.eventManager.on(Ui.CLOSE, ({
                        id: e
                    }) => this.closeOverlay(e));
                    this.eventManager.on(Ui.CLOSE_ALL, () => this.handleCloseAll())
                }
                handleCloseAll() {
                    this.getShowingCTAIds().forEach(e => this.closeOverlay(e))
                }
                handleRefresh() {
                    this.environmentModel.refresh();
                    return this.configModel.init(Ee.buildConfigRequest(this.environmentModel, [], this.analyticsModel.store.state)).then(this.processConfigResponse).catch(e => {})
                }
                getShowingCTAIds() {
                    return this.posistionsOccupied ? this.posistionsOccupied.getAllIds() : []
                }
                handleRemovingCTAs(e) {
                    for (const t of e) {
                        this.closeOverlay(t);
                        const e = this.interactiveComponentMap.get(t);
                        e && e.remove();
                        this.interactiveComponentMap.delete(t);
                        this.posistionsOccupied && this.posistionsOccupied.removeCTA(t);
                        for (const [e, i] of this.triggerMap) {
                            e === t && i.forEach(e => e.remove());
                            this.triggerMap.delete(t)
                        }
                    }
                }
                createCTAsFromConfigs(e) {
                    for (const t of e) this.createOverlayInteractiveFromAudience(t)
                }
            }
        }
        var Wi = qi(ji);
        const zi = "hs-cta-embed__loaded";
        class Yi {
            constructor({
                contentId: e,
                embedContainer: t,
                iframeSrc: i,
                useResponsiveStyling: s
            }) {
                this.listenForLoad();
                this.frameComponent = S({
                    id: e,
                    container: t,
                    iframeSrc: i,
                    resizeHeight: !0,
                    onFrameReady: this.resolveFrameload,
                    useResponsiveStyling: s,
                    extraAttributes: {
                        "aria-label": "Embedded CTA",
                        title: "Embedded CTA",
                        allow: "autoplay; fullscreen;"
                    }
                });
                this.frameComponent.iframe.setAttribute("data-test-id", "interactive-frame");
                this.frameComponent.iframe.classList.add(Ut);
                this.contentId = e;
                this.embedContainer = t
            }
            setStyles(e, t, i) {
                this.frameComponent.setShouldResize(i);
                n(this.embedContainer, e);
                this.frameComponent.setStyle(Object.assign({}, t));
                this.resolveConfig && this.resolveConfig()
            }
            showFrame() {
                this.frameComponent.setStyle({
                    visibility: ""
                })
            }
            listenForLoad() {
                const e = new Promise(e => {
                        this.resolveFrameload = e
                    }),
                    t = new Promise(e => {
                        this.resolveConfig = e
                    });
                Promise.all([e, t]).then(() => {
                    Array.from(this.embedContainer.children).forEach(e => {
                        e !== this.frameComponent.iframe && this.embedContainer.removeChild(e)
                    });
                    this.embedContainer.classList.add(zi);
                    this.showFrame()
                }).catch(() => {})
            }
        }
        class Qi {
            constructor({
                environmentModel: e,
                configStore: t,
                handleView: i,
                analyticsModel: s,
                scheduledCTAsModel: n
            }) {
                this.embeddedInteractives = new Map;
                this.elementObserver = q();
                this.styledComponentSet = new Set;
                this.flushScheduledCTAs = () => {
                    for (const e of this.scheduledCTAsModel.scheduledCTAs) {
                        const t = this.configStore.embeddedConfigs.get(e);
                        if (!t || t.isHTMLVersionOnly) continue;
                        if (!this.scheduledCTAsModel.elementsForEmbeddedCTAs.has(e)) continue;
                        this.scheduledCTAsModel.elementsForEmbeddedCTAs.get(e).forEach(t => {
                            this.createView(e, t)
                        });
                        this.handleView(e);
                        this.scheduledCTAsModel.removeCTA(e)
                    }
                };
                this.environmentModel = e;
                this.configStore = t;
                this.scheduledCTAsModel = n;
                this.handleView = i;
                this.analyticsModel = s
            }
            init({
                embedContainers: e
            }) {
                this.embedContainers = e;
                this.environmentModel.isPreview || this.environmentModel.isTemplate || this.createViews();
                this.listenForConfigs();
                this.listenForElementViews();
                this.listenForScheduledCTAs()
            }
            listenForScheduledCTAs() {
                this.scheduledCTAsModel.subscribe(this.flushScheduledCTAs)
            }
            listenForElementViews() {
                if (this.embedContainers)
                    for (const [e, t] of this.embedContainers)
                        for (const i of t) this.elementObserver.observe(i, () => this.handleView(e))
            }
            listenForConfigs() {
                this.configStore.configs.size > 0 ? this.setStylesOnContainer() : this.configStore.subscribe(() => {
                    this.scheduledCTAsModel.scheduledCTAs.size > 0 && this.flushScheduledCTAs();
                    if (this.configStore.embeddedConfigs.size > 0) {
                        (this.environmentModel.isPreview || this.environmentModel.isTemplate) && this.configStore.embeddedConfigs.size > 0 && this.createViews();
                        this.setStylesOnContainer()
                    }
                })
            }
            setStylesOnContainer() {
                for (const [e, t] of this.configStore.embeddedConfigs) {
                    const i = this.embeddedInteractives.get(e);
                    i && i.length && i.forEach(e => {
                        if (!this.styledComponentSet.has(e)) {
                            this.styledComponentSet.add(e);
                            e.setStyles(Ee.getStylesFromContainerStyles(t.containerStyles), Ee.getStylesForIframe(t.containerStyles), t.containerStyles.scaleHeightToFitContent || Boolean(t.containerStyles.isSingleModuleOnly))
                        }
                    })
                }
            }
            createViews() {
                for (const [e, t] of this.embedContainers) {
                    let i = "";
                    const s = this.configStore.embeddedConfigs.get(e);
                    i = s ? s.iframeSrc : le({
                        contentId: e,
                        portalId: this.environmentModel.portalId,
                        env: this.environmentModel.env,
                        hublet: this.environmentModel.hublet
                    });
                    i = he(i, this.environmentModel, this.analyticsModel);
                    const n = [];
                    t.forEach(t => {
                        const o = new Yi({
                            contentId: e,
                            embedContainer: t,
                            iframeSrc: i,
                            useResponsiveStyling: !!s && s.containerStyles.useResponsiveStyling
                        });
                        n.push(o)
                    });
                    this.embeddedInteractives.set(e, n)
                }
            }
            createView(e, t) {
                const i = this.configStore.embeddedConfigs.get(e);
                if (!i) return;
                const s = he(i.iframeSrc, this.environmentModel, this.analyticsModel),
                    n = new Yi({
                        contentId: e,
                        embedContainer: t,
                        iframeSrc: s,
                        useResponsiveStyling: i.containerStyles.useResponsiveStyling
                    }),
                    o = this.embeddedInteractives.get(e) || [];
                this.embeddedInteractives.set(e, [...o, n]);
                this.setStylesOnContainer()
            }
        }
        const Xi = "POP_OVER",
            Ki = "hsCta";
        class Ji {
            constructor({
                configStore: e,
                environmentModel: t
            }) {
                this.eventManager = $i.getInstance();
                this.ignoreCta = ({
                    id: e
                }) => {
                    if (this.environmentModel.isPreview) return;
                    const t = this.configStore.configs.get(e);
                    t && t.containerType !== K.EMBEDDED && xt(e, t.displayFrequency)
                };
                this.registerPopupPolice = ({
                    id: e
                }) => {
                    const t = this.configStore.configs.get(e);
                    t && t.containerType === K.MODAL && window._registerAvailablePopup && window._registerAvailablePopup(Ki, Xi)
                };
                this.configStore = e;
                this.environmentModel = t;
                this.registerHandlers();
                this.listenForConfigs()
            }
            registerHandlers() {
                Gi.registerHandlers({
                    [s.NAVIGATE_PAGE]: this.ignoreCta,
                    [s.CLOSE_INTERACTIVE]: this.ignoreCta,
                    [s.STARTED]: this.registerPopupPolice
                });
                this.eventManager.on(Ui.CLOSE, this.ignoreCta)
            }
            listenForConfigs() {
                this.configStore.subscribe((e, t) => {
                    if (e.configs.size !== t.configs.size)
                        for (const [t, i] of e.configs) i.displayFrequency && $t(t, i.displayFrequency)
                })
            }
        }

        function Zi(e) {
            return new Ji(e)
        }
        const es = Xe(["display:flex;justify-content:center;align-items:center;"]),
            ts = "interactive-ready";
        class is {
            constructor({
                environmentModel: e
            }) {
                this.environmentModel = e
            }
            init() {
                if (this.environmentModel.isPreview || this.environmentModel.isScreenshot || this.environmentModel.templatePath) {
                    this.bodyWrapper = document.getElementsByClassName(Fe)[0];
                    if (this.bodyWrapper) {
                        this.setupEmbedContainer();
                        this.setHeightForPreview();
                        this.listenForInteractiveLoaded()
                    }
                }
            }
            setupEmbedContainer() {
                this.bodyWrapper.classList.add(es);
                const e = this.environmentModel.previewId || 1;
                this.bodyWrapper.innerHTML = `\n      <div class="${Le} ${Le}-${e}">\n    `
            }
            setHeightForPreview() {
                this.bodyWrapper.style.height = "100vh"
            }
            listenForInteractiveLoaded() {
                Gi.registerHandlers({
                    [s.STARTED]: () => document.body.classList.add(ts)
                })
            }
        }

        function ss({
            environmentModel: e
        }) {
            return new is({
                environmentModel: e
            })
        }
        const ns = e => {
                let t = 1,
                    i = 0;
                for (; t > 0 && i !== e.length;) {
                    const s = e[i];
                    "{" === s ? t++ : "}" === s && t--;
                    i++;
                    if (i > e.length) return e.length
                }
                return i
            },
            os = e => window.matchMedia(e).matches,
            rs = e => e.includes("width") ? "@media (min-width: 0px)" : e,
            as = (e, t = os) => {
                let i = "",
                    s = e,
                    n = s.indexOf("@media");
                if (-1 === n) return !1;
                for (; n > 0;) {
                    i = `${i}${s.substring(0,n-1)}`;
                    s = s.substring(n);
                    const e = s.indexOf("{"),
                        o = s.substring(0, e);
                    s = s.substring(e + 1);
                    const r = ns(s);
                    if (t(o.replace("@media ", ""))) {
                        const e = s.substring(0, r - 1);
                        i = `${i}${rs(o)} { ${e} }`
                    }
                    s = s.substring(r + 1);
                    n = s.indexOf("@media")
                }
                return `${i}${s}`.trim()
            },
            cs = e => Object.keys(e).reduce((t, i) => {
                const s = as(e[i]);
                return s ? Object.assign({}, t, {
                    [i]: s
                }) : t
            }, {});
        var ls = (e, t) => {
            let i = 0;
            return (...s) => {
                i && clearTimeout(i);
                i = setTimeout(() => {
                    e(...s);
                    i = 0
                }, t)
            }
        };
        const hs = (...e) => {
            o("[ResponsiveController]", ...e)
        };
        class ds {
            constructor() {
                this.initialStylesheets = {}
            }
            init() {
                this.listenForStylesheetsHtml();
                const e = ls(() => Object.keys(this.initialStylesheets).forEach(e => this.handleProcessStylesheets(Number(e))), 100);
                window.addEventListener("resize", () => {
                    hs("Resizing, reprocessing stylesheets");
                    e()
                })
            }
            listenForStylesheetsHtml() {
                Gi.registerHandlers({
                    [s.SEND_STYLESHEETS]: e => {
                        this.initialStylesheets[e.id] = e.stylesheetsHtml;
                        this.handleProcessStylesheets(e.id)
                    }
                })
            }
            handleProcessStylesheets(e) {
                if (!this.initialStylesheets[e]) return;
                const t = cs(this.initialStylesheets[e]);
                Gi.broadcast(e || 1, {
                    type: s.RECEIVE_FILTERED_STYLESHEETS,
                    payload: {
                        stylesheets: t
                    }
                })
            }
        }

        function us() {
            return new ds
        }

        function ms(e, t) {
            return "https://perf{region}.hsforms{env}.com/embed/v3/counters.gif".replace("{region}", "-" + e).replace("{env}", "qa" === t ? "qa" : "")
        }
        const gs = {
            CONFIG_LOADED_SUCCESS: "config-loaded-success",
            CONFIG_LOADED_FAILURE: "config-loaded-failure",
            INTERACTIVE_SHOWN: "interactive-shown",
            INTERACTIVE_CLOSED: "interactive-closed",
            INTERACTIVE_NAVIGATED: "interactive-navigated",
            INLINE_INTERACTIVE_RENDER_SUCCESS: "inline-interactive-render-success",
            INLINE_INTERACTIVE_RENDER_FAIL: "inline-interactive-render-fail"
        };
        class ps {
            constructor({
                environmentModel: e,
                configStore: t
            }) {
                this.perfUrl = "";
                this.environmentModel = e;
                this.configStore = t;
                this.registerHandlers();
                this.listenToConfigStore()
            }
            init() {
                this.perfUrl = ms(this.environmentModel.hublet, this.environmentModel.env)
            }
            trackRender(e) {
                this.trackMetric(e ? gs.INLINE_INTERACTIVE_RENDER_SUCCESS : gs.INLINE_INTERACTIVE_RENDER_FAIL)
            }
            registerHandlers() {
                Gi.registerHandlers({
                    [s.STARTED]: () => this.trackMetric(gs.INTERACTIVE_SHOWN),
                    [s.CLOSE_INTERACTIVE]: () => this.trackMetric(gs.INTERACTIVE_CLOSED),
                    [s.NAVIGATE_PAGE]: () => this.trackMetric(gs.INTERACTIVE_NAVIGATED)
                })
            }
            listenToConfigStore() {
                this.configStore.subscribe(e => {
                    e.requestError ? this.trackMetric(gs.CONFIG_LOADED_FAILURE) : e.isLoaded && this.trackMetric(gs.CONFIG_LOADED_SUCCESS)
                })
            }
            trackMetric(e) {
                if (!this.perfUrl.length) return;
                const t = `${this.perfUrl}?key=${e}&value=1`;
                (new Image).src = t
            }
        }

        function fs(e) {
            return new ps(e)
        }
        const vs = (...e) => {
            o("[CTAAnalyticsController]", ...e)
        };

        function Cs({
            env: e,
            hublet: t
        }) {
            const i = "prod" === e ? "" : e;
            let s = "";
            s = "na1" !== t && t ? `https://cta-${t}.hubspot${i}.com/web-interactives/public/v1/track` : `https://cta-service-cms2.hubspot${i}.com/web-interactives/public/v1/track`;
            return s
        }
        class Ts {
            constructor({
                analyticsStore: e,
                configsStore: t,
                environmentModel: i,
                ctaViewedStore: s
            }) {
                this.timingMap = new Map;
                this.viewQueue = M();
                this.hasViewed = new Set;
                this.eventManager = $i.getInstance();
                this.baseUrl = "";
                this.trackView = ({
                    id: e
                }) => {
                    if (this.configStore.isLoaded) {
                        this.trackWithImage(e, "view");
                        this.timingMap.set(e, Date.now())
                    } else this.viewQueue.enqueue(e)
                };
                this.trackClose = ({
                    id: e
                }) => {
                    this.trackWithImage(e, "close")
                };
                this.trackTriggerClick = ({
                    id: e
                }) => {
                    this.trackNavigation({
                        id: e
                    }, !0)
                };
                this.trackNavigation = ({
                    id: e
                }, t = !1) => {
                    const i = this.configStore.configs.get(e);
                    if (!i) return;
                    const s = new URL(this.attachTrackingParamsToUrl(this.baseUrl + "/click", e));
                    (t || i.shouldUseJsTracking) && s.searchParams.set("beaconTrack", "true");
                    s.searchParams.has("beaconTrack") && ("sendBeacon" in navigator ? navigator.sendBeacon(s) : fetch(s, {
                        method: "POST",
                        keepalive: !0
                    }))
                };
                this.analyticsStore = e;
                this.configStore = t;
                this.environmentModel = i;
                this.ctaViewedStore = s
            }
            init() {
                this.baseUrl = Cs({
                    env: this.environmentModel.env,
                    hublet: this.environmentModel.hublet
                });
                if (!this.environmentModel.isPreview && !this.environmentModel.isTemplate) {
                    this.registerHandlers();
                    this.listenForStoreLoad();
                    this.listenForViewChange();
                    this.handleViews()
                }
            }
            registerHandlers() {
                Gi.registerHandlers({
                    [s.CLOSE_INTERACTIVE]: this.trackClose,
                    [s.NAVIGATE_PAGE]: this.trackNavigation,
                    [s.TRIGGER_CTA]: this.trackTriggerClick
                });
                this.eventManager.on(Ui.TRIGGER_OPEN, this.trackTriggerClick)
            }
            listenForStoreLoad() {
                this.configStore.subscribe((e, t) => {
                    e.isLoaded && !t.isLoaded && this.flushViewQueue()
                })
            }
            listenForViewChange() {
                this.ctaViewedStore.subscribe(() => {
                    this.handleViews()
                })
            }
            handleViews() {
                for (const e of this.ctaViewedStore.viewed)
                    if (!this.hasViewed.has(e)) {
                        this.trackView({
                            id: e
                        });
                        this.hasViewed.add(e)
                    }
            }
            flushViewQueue() {
                do {
                    const e = this.viewQueue.dequeue();
                    e && this.trackView({
                        id: e
                    })
                } while (this.viewQueue.peek())
            }
            trackWithImage(e, t) {
                vs("Tracking:", t, e);
                let i = `${this.baseUrl}/${t}`;
                i = this.attachTrackingParamsToUrl(i, e);
                (new Image).src = i
            }
            logTooLargeAnalytics() {
                vs("Logging url that will be truncated");
                const e = this.analyticsStore.analytics;
                if (!e) return;
                const t = JSON.stringify(Object.assign({}, e, {
                    portalId: this.environmentModel.portalId
                }));
                fetch(this.baseUrl + "/log", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: t
                })
            }
            attachTrackingParamsToUrl(e, t) {
                const i = new URL(e),
                    s = this.configStore.configs.get(t);
                if (!s) return i.href;
                i.searchParams.set("webInteractiveId", String(s.webInteractiveId));
                i.searchParams.set("containerType", s.containerType);
                i.searchParams.set("portalId", String(this.environmentModel.portalId));
                i.searchParams.set("audienceId", String(s.audienceId));
                s.campaignGuid && i.searchParams.set("campaignId", s.campaignGuid);
                const n = this.analyticsStore.analytics;
                n && Object.entries(n).forEach(([e, t]) => {
                    t && i.searchParams.set(e, String(t))
                });
                const o = this.timingMap.get(t);
                if (o) {
                    i.searchParams.set("timeStarted", String(o));
                    i.searchParams.set("timeFinished", String(Date.now()))
                }
                i.href.length;
                return i.href
            }
        }

        function bs(e) {
            return new Ts(e)
        }
        const ys = ["elementToEmbed"];
        class Es {
            constructor({
                configModel: e,
                customerCtaOptions: t,
                scheduleCTA: i
            }) {
                this.defferedPromiseMap = new Map;
                this.handleCtaLoad = ({
                    id: e
                }) => {
                    if (!this.defferedPromiseMap.has(e)) return;
                    this.defferedPromiseMap.get(e)(null);
                    this.defferedPromiseMap.delete(e)
                };
                this.handleNavigate = ({
                    id: e
                }) => {
                    const t = this.customerCtaOptions.options.get(e);
                    t && "function" == typeof t.onNavigate && t.onNavigate()
                };
                this.loadCta = e => new Promise((t, i) => {
                    e || i(new Error("Invalid options"));
                    const {
                        contentId: s,
                        options: n
                    } = e, {
                        elementToEmbed: o
                    } = n, r = de(n, ys);
                    s || i(new Error("Invalid options"));
                    this.scheduleCTA(s, Array.isArray(o) ? o : [o]);
                    Object.keys(r).length && this.customerCtaOptions.setOption(s, r);
                    this.defferedPromiseMap.set(s, t)
                });
                this.configModel = e;
                this.customerCtaOptions = t;
                this.scheduleCTA = i;
                window.hsCtasOnReady = window.hsCtasOnReady || [];
                this.attachToWindow();
                this.registerHandlers()
            }
            init() {
                this.flushOnReadyQueue()
            }
            registerHandlers() {
                Gi.registerHandlers({
                    [s.STARTED]: this.handleCtaLoad,
                    [s.NAVIGATE_PAGE]: this.handleNavigate
                })
            }
            attachToWindow() {
                window.__PRIVATE__HubspotCtaClient = {
                    loadCta: this.loadCta
                }
            }
            flushOnReadyQueue() {
                const e = window.hsCtasOnReady;
                for (; e.length;) {
                    const t = e.shift();
                    "function" == typeof t && t()
                }
                Object.defineProperty(window.hsCtasOnReady, "push", {
                    value: e => {
                        "function" == typeof e && e()
                    },
                    writable: !0
                })
            }
        }

        function ws(e) {
            return new Es(e)
        }
        const Ss = (...e) => {
            o("[NonFramedCTA]", ...e)
        };
        class As {
            constructor({
                cta: e,
                onNavigate: t,
                onView: i
            }) {
                this.removeEventListenerCallbacks = [];
                this.elementObserver = q();
                this.hasView = !1;
                this.id = "";
                this.cta = e;
                this.id = this.cta.id;
                this.onNavigate = t;
                this.onView = i;
                this.listenForAnchorClicks();
                this.listenForView()
            }
            getCtaInstance() {
                this.cta && this.cta.parentNode || (this.cta = document.getElementById(this.id));
                return this.cta
            }
            replaceCtaInstance(e) {
                Ss("Replacing html", e, this.id);
                const t = this.getCtaInstance();
                if (!t) return;
                const i = $e(t, e);
                this.removeExistingEventListeners();
                t.innerHTML = i.innerHTML;
                t.dataset.rendered = "true";
                this.reapplyEventListeners(t)
            }
            removeExistingEventListeners() {
                this.hasView || this.elementObserver.unobserve(this.cta);
                this.removeEventListenerCallbacks.forEach(e => e());
                this.removeEventListenerCallbacks = []
            }
            reapplyEventListeners(e) {
                this.id = e.id;
                this.cta = e;
                this.listenForAnchorClicks();
                this.hasView || this.listenForView()
            }
            listenForAnchorClicks() {
                const e = [...this.cta.querySelectorAll("a")];
                "A" === this.cta.tagName && e.push(this.cta);
                for (const t of e) {
                    const e = "_blank" === t.target,
                        i = e => {
                            e.preventDefault()
                        };
                    let s;
                    t.classList.contains("hs-cta-trigger-button") && (s = De(t));
                    const n = i => {
                            i.preventDefault();
                            fi(i) && this.onNavigate(t.href, e, s)
                        },
                        o = i => {
                            if ("Enter" === i.key) {
                                i.preventDefault();
                                this.onNavigate(t.href, e, s)
                            }
                        };
                    t.addEventListener("click", i);
                    t.addEventListener("mouseup", n);
                    t.addEventListener("keypress", o);
                    this.removeEventListenerCallbacks.push(() => {
                        t.removeEventListener("click", i);
                        t.removeEventListener("mouseup", n);
                        t.removeEventListener("keypress", o)
                    })
                }
            }
            listenForView() {
                this.elementObserver.observe(this.cta, () => {
                    this.onView();
                    this.hasView = !0;
                    this.elementObserver.unobserve(this.cta)
                })
            }
        }

        function Is(e) {
            return new As(e)
        }
        const Ms = (...e) => {
                o("[populateLinksWithTrackingParams]", ...e)
            },
            Os = ["currentUrl", "referrer", "canon", "canonicalUrl", "pageUrl", "contentType", "encryptedPayload", "pageId", "analyticsPageId", "hutk", "hstc", "hssc", "hsfp", "utk", "containerType", "webInteractiveId", "webInteractiveContentId", "audienceId", "campaignGuid", "userAgent", "timeStarted", "timeFinished", "redirectUrl", "skip", "includeInitial", "pageTitle", "contentGroupId", "portalId"],
            Ps = `https://${(new Date).getTime()}-dummy.com`,
            _s = (e, t) => {
                let i, s = !1;
                try {
                    i = new URL(e)
                } catch (t) {
                    Ms("[populateLinksWithTrackingParams]", "Checking for relative URL", e);
                    s = !0
                }
                if (s) try {
                    i = new URL(`${Ps}${e.startsWith("/"),""}${e}`)
                } catch (t) {
                    Ms("Could not parse url for link", t);
                    return e
                }
                Object.entries(t).forEach(([e, t]) => {
                    Os.includes(e) ? null != t && i.searchParams.set(e, String(t)) : Ms("Invalid analytics parameter passed", e)
                });
                const n = i.href;
                return s ? n.replace(Ps, "") : n
            };
        var Ls = (e, t = [...document.querySelectorAll(".hs-web-interactive a")]) => {
            t.length && t.forEach(t => {
                const i = t.getAttribute("href");
                i && !i.startsWith("javascript") && t.setAttribute("href", _s(i, e))
            })
        };
        const Fs = ["isHubspotPage"],
            Rs = "render/html";

        function Ns(e) {
            let {
                isHubspotPage: t
            } = e, i = de(e, Fs);
            const s = {};
            t && (s.isHubspotPage = "true");
            return me(Object.assign({}, i, {
                extraParams: s,
                path: Rs
            }))
        }
        class ks {
            constructor() {
                this.handleFetchFailed = () => {
                    this.store.setState(e => Object.assign({}, e, {
                        requestError: !0
                    }))
                };
                this.handleFetchSucceded = e => {
                    this.store.setState(t => Object.assign({}, t, {
                        renderedHtmlMap: Object.assign({}, t.renderedHtmlMap, {
                            htmlMap: e
                        }),
                        isLoaded: !0
                    }))
                };
                const e = {
                    renderedHtmlMap: {},
                    request: null,
                    requestError: !1,
                    isLoaded: !1
                };
                this.store = new A(e)
            }
            init(e) {
                this.store.setState(t => Object.assign({}, t, {
                    request: e
                }));
                return this.fetchEmbeddedHtml()
            }
            subscribe(e) {
                this.store.subscribe(e)
            }
            get renderedHtmlMap() {
                return this.store.state.renderedHtmlMap
            }
            get isLoaded() {
                return this.store.state.isLoaded
            }
            fetch(e) {
                return fetch(e).then(e => {
                    if (!e.ok) {
                        this.handleFetchFailed();
                        return Promise.resolve(null)
                    }
                    return e.json().then(e => {
                        this.handleFetchSucceded(e);
                        return e
                    }).catch(this.handleFetchFailed)
                }).catch(this.handleFetchFailed)
            }
            fetchEmbeddedHtml() {
                const e = this.store.state.request;
                if (!e) return Promise.resolve(null);
                const t = Ns(e);
                return this.fetch(t)
            }
        }
        var Hs = new ks;
        const Ds = (...e) => {
            o("[NonFramedCTAController", ...e)
        };
        class Bs {
            constructor({
                handleView: e,
                configStore: t,
                handleNavigation: i,
                analyticsStore: s,
                environmentModel: n,
                metricsController: o,
                scheduledCTAsModel: r
            }) {
                this.componentMap = new Map;
                this.eventManager = $i.getInstance();
                this.cleanupFuncs = [];
                this.flushScheduledCTAs = () => {
                    for (const e of this.scheduledCTAsModel.scheduledCTAs) {
                        const t = this.configStore.embeddedConfigs.get(e);
                        if (!t || !t.isHTMLVersionOnly) return;
                        if (!this.scheduledCTAsModel.elementsForEmbeddedCTAs.has(e)) return;
                        const i = this.scheduledCTAsModel.elementsForEmbeddedCTAs.get(e);
                        let s = this.nonFramedCTAContainers.get(e);
                        s || (s = []);
                        this.nonFramedCTAContainers.set(e, [...s, ...i]);
                        this.createViewsForElements(e, i);
                        this.requestHTML();
                        this.scheduledCTAsModel.removeCTA(e)
                    }
                };
                this.getAnchorsFromElements = e => {
                    let t = [];
                    e.forEach(e => {
                        "A" === e.tagName && (t = [...t, e]);
                        t = [...t, ...e.querySelectorAll("a")]
                    });
                    return t
                };
                this.handleView = e;
                this.handleNavigation = i;
                this.configStore = t;
                this.analyticsStore = s;
                this.environmentModel = n;
                this.renderedHtmlStore = Hs;
                this.metricsController = o;
                this.scheduledCTAsModel = r
            }
            init({
                nonFramedCTAContainers: e
            }) {
                this.nonFramedCTAContainers = e;
                e.size && this.requestHTML();
                this.listenForConfigs();
                this.listenForScheduledCTAs();
                this.environmentModel.isPreview || this.environmentModel.isPreviewPage || this.listenForAnalyticsUpdate()
            }
            listenForScheduledCTAs() {
                this.scheduledCTAsModel.subscribe(this.flushScheduledCTAs)
            }
            cleanup() {
                this.cleanupFuncs.forEach(e => e())
            }
            requestHTML() {
                const e = e => {
                        if (!e) return;
                        this.metricsController.trackRender(!0);
                        Object.keys(e).forEach(t => {
                            const i = Number(t),
                                s = e[i],
                                n = this.componentMap.get(i);
                            if (n) n.forEach(e => {
                                e.replaceCtaInstance(s)
                            });
                            else {
                                Ds("Views not created yet, just replacing existing elements");
                                const e = this.nonFramedCTAContainers.get(i);
                                e && e.length && e.forEach(e => {
                                    const t = $e(e, s);
                                    e.innerHTML = t.innerHTML;
                                    e.dataset.rendered = "true"
                                })
                            }
                            this.hydrateLinksWithAllData(i)
                        });
                        const t = Object.keys(e).map(Number);
                        this.eventManager.emit(Ui.REPLACED_INLINE_HTML, {
                            ids: t
                        })
                    },
                    {
                        isPreview: t,
                        currentUrl: i,
                        portalId: s,
                        env: n,
                        hublet: o,
                        versionId: r
                    } = this.environmentModel,
                    a = [...this.nonFramedCTAContainers.keys()].filter(e => !this.renderedHtmlStore.renderedHtmlMap[e]);
                if (!a.length) return;
                const c = {
                    contentIds: a,
                    currentUrl: i,
                    portalId: s,
                    env: n,
                    hublet: o,
                    analytics: this.analyticsStore.analytics,
                    isPreview: t,
                    versionId: r,
                    isHubspotPage: this.environmentModel.isCos()
                };
                Ds("Requesting HTML", c);
                this.renderedHtmlStore.init(c).then(e).catch(e => {
                    Ds("Failed getting HTML", e);
                    this.metricsController.trackRender(!1)
                })
            }
            createViewsForElements(e, t) {
                const i = [];
                let s = 0;
                for (const n of t) {
                    n.id = `hs-cta-${e}-${s++}`;
                    const o = Is({
                        cta: n,
                        onNavigate: (t, i, s) => {
                            s ? this.eventManager.emit(Ui.TRIGGER_OPEN, {
                                id: s
                            }) : this.handleNavigation(t, e, i)
                        },
                        onView: () => {
                            this.handleView(e)
                        }
                    });
                    i.push(o);
                    const r = this.configStore.configs.get(e);
                    if (r) {
                        const e = this.getAnchorsFromElements(t);
                        Ls({
                            webInteractiveId: r.webInteractiveId,
                            audienceId: r.audienceId,
                            containerType: r.containerType,
                            campaignId: r.campaignGuid,
                            pageUrl: this.environmentModel.currentUrl,
                            portalId: this.environmentModel.portalId
                        }, e)
                    }
                }
                const n = this.componentMap.get(e) || [];
                this.componentMap.set(e, [...n, ...i])
            }
            createViews() {
                for (const [e, t] of this.nonFramedCTAContainers) this.createViewsForElements(e, t)
            }
            hydrateLinksWithAllData(e) {
                let t = {};
                const i = this.configStore.configs.get(e);
                i && (t = {
                    webInteractiveId: i.webInteractiveId,
                    audienceId: i.audienceId,
                    containerType: i.containerType,
                    campaignId: i.campaignGuid,
                    pageUrl: this.environmentModel.currentUrl,
                    portalId: this.environmentModel.portalId
                });
                const s = this.analyticsStore.analytics;
                t = Object.assign({}, t, s);
                let n = [];
                for (const [, e] of this.nonFramedCTAContainers) n = [...n, ...this.getAnchorsFromElements(e)];
                Ls(t, n)
            }
            listenForConfigs() {
                this.cleanupFuncs.push(this.configStore.subscribe(() => {
                    this.scheduledCTAsModel.scheduledCTAs.size > 0 && this.flushScheduledCTAs();
                    this.createViews()
                }))
            }
            listenForAnalyticsUpdate() {
                const e = () => {
                    let e = [];
                    for (const [, t] of this.nonFramedCTAContainers) e = [...e, ...this.getAnchorsFromElements(t)];
                    Ls(this.analyticsStore.analytics, e)
                };
                this.analyticsStore.analytics.isLoaded ? e() : this.cleanupFuncs.push(this.analyticsStore.subscribe((t, i) => {
                    !i.isLoaded && t.isLoaded && e()
                }))
            }
        }

        function Vs(e) {
            return new Bs(e)
        }
        const xs = ["openInNewTab", "onNavigate"];
        class $s {
            constructor() {
                const e = {
                    options: new Map
                };
                this.store = new A(e)
            }
            subscribe(e) {
                this.store.subscribe(e)
            }
            setOption(e, t) {
                const {
                    openInNewTab: i,
                    onNavigate: s
                } = t;
                de(t, xs);
                this.store.setState(t => {
                    const n = structuredClone(t.options);
                    n.set(e, {
                        openInNewTab: i,
                        onNavigate: s
                    });
                    return Object.assign({}, t, {
                        options: n
                    })
                })
            }
            get options() {
                return this.store.state.options
            }
        }

        function Us() {
            return new $s
        }
        class Gs {
            constructor() {
                const e = {
                    scheduledCTAs: new Set,
                    elementsForEmbeddedCTAs: new Map
                };
                this.store = new A(e)
            }
            subscribe(e) {
                this.store.subscribe(e)
            }
            scheduleCTA(e) {
                this.store.setState(t => Object.assign({}, t, {
                    scheduledCTAs: new Set([...t.scheduledCTAs, e])
                }))
            }
            scheduleEmbeddedCTA(e, t) {
                this.store.setState(i => Object.assign({}, i, {
                    scheduledCTAs: new Set([...i.scheduledCTAs, e]),
                    elementsForEmbeddedCTAs: Y(i.elementsForEmbeddedCTAs, new Map([
                        [e, t]
                    ]))
                }))
            }
            removeCTA(e) {
                this.store.setState(t => {
                    const i = structuredClone(t.scheduledCTAs);
                    i.delete(e);
                    return Object.assign({}, t, {
                        scheduledCTAs: i,
                        elementsForEmbeddedCTAs: W(t.elementsForEmbeddedCTAs, (t, i) => i !== e)
                    })
                })
            }
            get scheduledCTAs() {
                return this.store.state.scheduledCTAs
            }
            get elementsForEmbeddedCTAs() {
                return this.store.state.elementsForEmbeddedCTAs
            }
        }

        function js() {
            return new Gs
        }
        const qs = {
                onCallToActionReady: "onCallToActionReady",
                onCallToActionViewed: "onCallToActionViewed",
                onCallToActionNavigated: "onCallToActionNavigated",
                onCallToActionFormSubmitted: "onCallToActionFormSubmitted",
                onCallToActionReplacedInlineHTML: "onCallToActionReplacedInlineHTML"
            },
            Ws = "hsCallsToActionCallback",
            zs = 1e3;
        class Ys {
            constructor({
                configModel: e
            }) {
                this.eventEmitter = a();
                this.eventManager = $i.getInstance();
                this.refresh = X(() => {
                    this.eventManager.emit(Ui.REFRESH, {})
                }, zs);
                this.configModel = e;
                window.hsCallsToActionsReady = window.hsCallsToActionsReady || [];
                this.registerHandlers()
            }
            init() {
                this.attachToWindow();
                this.flushOnReadyQueue()
            }
            handleView(e) {
                this.handleEventCall({
                    id: e
                }, qs.onCallToActionViewed)
            }
            closeAll() {
                this.eventManager.emit(Ui.CLOSE_ALL, {})
            }
            close(e) {
                this.eventManager.emit(Ui.CLOSE, {
                    id: e
                })
            }
            attachToWindow() {
                window.HubSpotCallsToActions = {
                    on: this.eventEmitter.on.bind(this.eventEmitter),
                    off: this.eventEmitter.off.bind(this.eventEmitter),
                    refresh: this.refresh,
                    closeAll: this.closeAll.bind(this),
                    close: this.close.bind(this)
                }
            }
            flushOnReadyQueue() {
                const e = window.hsCallsToActionsReady;
                for (; e.length;) {
                    const t = e.shift();
                    "function" == typeof t && t()
                }
                Object.defineProperty(window.hsCallsToActionsReady, "push", {
                    value: e => {
                        "function" == typeof e && e()
                    },
                    writable: !0
                })
            }
            handleEventCall(e, t) {
                this.eventEmitter.emit(t, e);
                window.postMessage({
                    type: Ws,
                    id: e.id,
                    eventName: t,
                    data: e
                })
            }
            registerHandlers() {
                Gi.registerHandlers({
                    [s.STARTED]: e => this.handleEventCall(e, qs.onCallToActionReady),
                    [s.NAVIGATE_PAGE]: e => this.handleEventCall(e, qs.onCallToActionNavigated),
                    [s.CTA_FORM_SUBMITTED]: e => this.handleEventCall(e, qs.onCallToActionFormSubmitted)
                });
                this.eventManager.on(Ui.REPLACED_INLINE_HTML, e => this.handleEventCall(e, qs.onCallToActionReplacedInlineHTML))
            }
        }

        function Qs(e) {
            return new Ys(e)
        }
        class Xs {
            constructor(e) {
                this.environmentModel = e.environmentModel;
                this.configStore = e.configsStore
            }
            init() {
                window.addEventListener("pageshow", e => {
                    e.persisted && this.shouldReloadPage() && window.location.reload()
                })
            }
            shouldReloadPage() {
                return this.environmentModel.isUngatedFor("WebInteractives:BFCacheReload") && this.configStore.configs.size > 0
            }
        }

        function Ks(e) {
            return new Xs(e)
        }
        const Js = (...e) => {
            o("[WebInteractiveApplicationContainer]", ...e)
        };

        function Zs(e) {
            const [t, i] = e.split("?");
            if (!i) return {
                location: t,
                queryParams: {}
            };
            return i.split("&").reduce((e, t) => {
                const [i, s] = t.split("=");
                return Object.assign({
                    [i]: s
                }, e)
            }, {})
        }
        class en extends G {
            constructor({
                configStore: e,
                environmentModel: t
            }) {
                super();
                this.scheduleCTA = (e, t) => {
                    t ? this.scheduledCTAs.scheduleEmbeddedCTA(e, t) : this.scheduledCTAs.scheduleCTA(e);
                    this.configStore.fetchConfigsWithIds([e])
                };
                this.handleView = e => {
                    this.viewedStore.markAsViewed(e);
                    this.analyticsProxyController.flushViewQueue(e);
                    this.thirdPartyApiController.handleView(e)
                };
                this.handleNavigation = (e, t, i = !1) => {
                    $(this.getNavigationUrl({
                        url: e,
                        openNewTab: i
                    }, t), i)
                };
                this.configStore = e;
                this.environmentModel = t;
                this.viewedStore = Pe();
                this.customerCTAOptions = Us();
                this.scheduledCTAs = js();
                this.overlayedInteractivesController = new Wi({
                    configModel: this.configStore,
                    environmentModel: t,
                    analyticsModel: this.analyticsStore,
                    scheduledCTAsModel: this.scheduledCTAs,
                    handleView: this.handleView,
                    scheduleCTA: this.scheduleCTA
                });
                this.embeddedInteractivesController = new Qi({
                    environmentModel: t,
                    configStore: e,
                    scheduledCTAsModel: this.scheduledCTAs,
                    analyticsModel: this.analyticsStore,
                    handleView: this.handleView
                });
                this.ignorerController = Zi({
                    configStore: e,
                    environmentModel: t
                });
                this.previewController = ss({
                    environmentModel: this.environmentModel
                });
                this.responsiveController = us();
                this.metricsController = fs({
                    environmentModel: this.environmentModel,
                    configStore: e
                });
                this.ctaAnalyticsController = bs({
                    configsStore: this.configStore,
                    analyticsStore: this.analyticsStore,
                    environmentModel: this.environmentModel,
                    ctaViewedStore: this.viewedStore
                });
                this.apiClientController = ws({
                    configModel: this.configStore,
                    customerCtaOptions: this.customerCTAOptions,
                    scheduleCTA: this.scheduleCTA
                });
                this.thirdPartyApiController = Qs({
                    configModel: this.configStore
                });
                this.nonFramedCTAController = Vs({
                    configStore: this.configStore,
                    handleView: this.handleView,
                    analyticsStore: this.analyticsStore,
                    handleNavigation: this.handleNavigation,
                    environmentModel: this.environmentModel,
                    metricsController: this.metricsController,
                    scheduledCTAsModel: this.scheduledCTAs
                });
                this.bfCacheController = Ks({
                    environmentModel: this.environmentModel,
                    configsStore: this.configStore
                });
                this.listenForConfigs()
            }
            init() {
                this.environmentModel.init();
                this.metricsController.init();
                this.previewController.init();
                this.responsiveController.init();
                this.parsedDomResults = xe();
                this.configStore.init(this._buildConfigRequest()).then(e => {
                    this.processConfigResponse(e)
                }).catch(e => {
                    Js("Error fetching configs", e)
                });
                this.embeddedInteractivesController.init({
                    embedContainers: this.parsedDomResults.embedContainers
                });
                this.nonFramedCTAController.init({
                    nonFramedCTAContainers: this.parsedDomResults.nonFramedCTAContainers
                });
                this.overlayedInteractivesController.init({
                    clickTriggerButtons: this.parsedDomResults.clickTriggerButtons
                });
                this.ctaAnalyticsController.init();
                this.apiClientController.init();
                this.thirdPartyApiController.init();
                this.bfCacheController.init()
            }
            _buildConfigRequest() {
                let e = [];
                const {
                    isPreview: t,
                    previewId: i
                } = this.environmentModel;
                e = t && i ? [i] : [...this.parsedDomResults.uniqueIds];
                return Ee.buildConfigRequest(this.environmentModel, e, this.analyticsStore.store.state)
            }
            getNavigationUrl({
                url: e
            }, t) {
                const i = new URL(e);
                if (!i.searchParams.has("encryptedPayload")) return e;
                const s = Zs(e),
                    n = this.configStore.configs.get(t);
                if (!n) return e;
                i.searchParams.set("webInteractiveId", String(n.webInteractiveId));
                i.searchParams.set("containerType", n.containerType);
                n.campaignGuid && i.searchParams.set("campaignId", n.campaignGuid);
                n.contentModelId && i.searchParams.set("webInteractiveContentId", String(n.contentModelId));
                n.audienceId && i.searchParams.set("audienceId", String(n.audienceId));
                this.analyticsStore.analytics.hutk && i.searchParams.set("hutk", this.analyticsStore.analytics.hutk);
                this.environmentModel.language && i.searchParams.set("hsLang", this.environmentModel.language);
                i.searchParams.delete("encryptedPayload");
                return decodeURIComponent(s.encryptedPayload) === s.encryptedPayload ? `${i.href}&encryptedPayload=${encodeURIComponent(s.encryptedPayload)}` : `${i.href}&encryptedPayload=${s.encryptedPayload}`
            }
            getShouldOpenNewTab(e, t) {
                if (!this.customerCTAOptions.options.has(t)) return e.openNewTab;
                return this.customerCTAOptions.options.get(t).openInNewTab || !1
            }
            listenForConfigs() {
                this.configStore.subscribe((e, t) => {
                    setTimeout(() => {
                        if (e.configs.size !== t.configs.size)
                            for (const [e, t] of this.configStore.configs) Gi.broadcast(e, {
                                type: s.SEND_CTA_CONFIG,
                                payload: Object.assign({
                                    portalId: this.environmentModel.portalId,
                                    pageUrl: this.environmentModel.currentUrl,
                                    pageTitle: document.title,
                                    gates: this.environmentModel.gates,
                                    pageId: this.environmentModel.pageId
                                }, t)
                            })
                    })
                })
            }
            processConfigResponse(e) {
                if (e && Array.isArray(e.gates)) {
                    Js("Retrieved Gates from config response", e.gates);
                    this.environmentModel.setGates(e.gates)
                }
            }
        }
        const tn = new en({
            configStore: we,
            environmentModel: Me
        });
        window.__hsWebInteractiveInstance = tn;
        var sn = tn;
        const nn = () => !(!window.disabledHsPopups || !(window.disabledHsPopups.indexOf("LEADFLOW") > -1 || window.disabledHsPopups.indexOf("CTAS") > -1)) || !!window.hsInEditor;

        function on() {
            document.querySelectorAll(".hs-cta-embed").forEach(e => {
                e.classList.add("hs-cta-embed__loaded");
                const t = e.querySelector(".hs-cta-loading-dot__container");
                t && t.remove();
                const i = e.querySelector(".hs-cta-embed__skeleton");
                i && i.remove()
            })
        }

        function rn() {
            on();
            new MutationObserver(e => {
                for (const t of e) "childList" === t.type && t.addedNodes.forEach(e => {
                    1 === e.nodeType && e instanceof HTMLElement && e.querySelector(".hs-cta-embed") && on()
                })
            }).observe(document.body, {
                childList: !0,
                subtree: !0
            })
        }
        const an = () => {
                if (nn()) {
                    if (window.hsInEditor) try {
                        rn()
                    } catch (e) {
                        console.error("Error marking cta embed preview as loaded", e)
                    }
                } else if (window.hubspot_web_interactives_running) console.error("duplicate instance of web interactives app exists");
                else {
                    sn.init();
                    window.hubspot_web_interactives_running = !0
                }
            },
            cn = () => {
                an();
                document.removeEventListener("DOMContentLoaded", cn)
            };
        "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", cn) : an()
    }
});