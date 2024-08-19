(() => {
    var e = {
            102: e => {
                window,
                e.exports = function(e) {
                    var t = {};

                    function i(s) {
                        if (t[s]) return t[s].exports;
                        var n = t[s] = {
                            i: s,
                            l: !1,
                            exports: {}
                        };
                        return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
                    }
                    return i.m = e, i.c = t, i.d = function(e, t, s) {
                        i.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: s
                        })
                    }, i.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, i.t = function(e, t) {
                        if (1 & t && (e = i(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var s = Object.create(null);
                        if (i.r(s), Object.defineProperty(s, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var n in e) i.d(s, n, function(t) {
                                return e[t]
                            }.bind(null, n));
                        return s
                    }, i.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return i.d(t, "a", t), t
                    }, i.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, i.p = "", i(i.s = 0)
                }([function(e, t, i) {
                    "use strict";
                    i.r(t), i.d(t, "default", (function() {
                        return y
                    }));

                    function s(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                        }
                    }
                    var n = new(function() {
                            function e() {
                                ! function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), this.positions = {
                                    top: 0,
                                    bottom: 0,
                                    height: 0
                                }
                            }
                            var t, i;
                            return t = e, (i = [{
                                key: "setViewportTop",
                                value: function(e) {
                                    return this.positions.top = e ? e.scrollTop : window.pageYOffset, this.positions
                                }
                            }, {
                                key: "setViewportBottom",
                                value: function() {
                                    return this.positions.bottom = this.positions.top + this.positions.height, this.positions
                                }
                            }, {
                                key: "setViewportAll",
                                value: function(e) {
                                    return this.positions.top = e ? e.scrollTop : window.pageYOffset, this.positions.height = e ? e.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions
                                }
                            }]) && s(t.prototype, i), e
                        }()),
                        o = function(e) {
                            return NodeList.prototype.isPrototypeOf(e) || HTMLCollection.prototype.isPrototypeOf(e) ? Array.from(e) : "string" == typeof e || e instanceof String ? document.querySelectorAll(e) : [e]
                        },
                        a = function() {
                            for (var e, t = "transform webkitTransform mozTransform oTransform msTransform".split(" "), i = 0; void 0 === e;) e = void 0 !== document.createElement("div").style[t[i]] ? t[i] : void 0, i += 1;
                            return e
                        }();

                    function r(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                        return s
                    }

                    function l(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                        }
                    }
                    var d = function() {
                        function e(t, i) {
                            var s = this;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.element = t, this.elementContainer = t, this.settings = i, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null,
                                function(e) {
                                    return "img" !== e.tagName.toLowerCase() && "picture" !== e.tagName.toLowerCase() || !!e && !!e.complete && (void 0 === e.naturalWidth || 0 !== e.naturalWidth)
                                }(t) ? this.init() : this.element.addEventListener("load", (function() {
                                    setTimeout((function() {
                                        s.init(!0)
                                    }), 50)
                                }))
                        }
                        var t, i;
                        return t = e, (i = [{
                            key: "init",
                            value: function(e) {
                                var t = this;
                                this.isInit || (e && (this.rangeMax = null), this.element.closest(".simpleParallax") || (!1 === this.settings.overflow && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout((function() {
                                    t.setTransitionCSS(), t.elementContainer.classList.add("simple-parallax-initialized")
                                }), 10) : this.elementContainer.classList.add("simple-parallax-initialized"), this.isInit = !0))
                            }
                        }, {
                            key: "wrapElement",
                            value: function() {
                                var e = this.element.closest("picture") || this.element,
                                    t = this.customWrapper || document.createElement("div");
                                t.classList.add("simpleParallax"), t.style.overflow = "hidden", this.customWrapper || (e.parentNode.insertBefore(t, e), t.appendChild(e)), this.elementContainer = t
                            }
                        }, {
                            key: "unWrapElement",
                            value: function() {
                                var e = this.elementContainer;
                                this.customWrapper ? (e.classList.remove("simpleParallax"), e.style.overflow = "") : e.replaceWith.apply(e, function(e) {
                                    return function(e) {
                                        if (Array.isArray(e)) return r(e)
                                    }(e) || function(e) {
                                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                                    }(e) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return r(e, t);
                                            var i = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? r(e, t) : void 0
                                        }
                                    }(e) || function() {
                                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }(e.childNodes))
                            }
                        }, {
                            key: "setTransformCSS",
                            value: function() {
                                !1 === this.settings.overflow && (this.element.style[a] = "scale(".concat(this.settings.scale, ")")), this.element.style.willChange = "transform"
                            }
                        }, {
                            key: "setTransitionCSS",
                            value: function() {
                                this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition)
                            }
                        }, {
                            key: "unSetStyle",
                            value: function() {
                                this.element.style.willChange = "", this.element.style[a] = "", this.element.style.transition = ""
                            }
                        }, {
                            key: "getElementOffset",
                            value: function() {
                                var e = this.elementContainer.getBoundingClientRect();
                                if (this.elementHeight = e.height, this.elementTop = e.top + n.positions.top, this.settings.customContainer) {
                                    var t = this.settings.customContainer.getBoundingClientRect();
                                    this.elementTop = e.top - t.top + n.positions.top
                                }
                                this.elementBottom = this.elementHeight + this.elementTop
                            }
                        }, {
                            key: "buildThresholdList",
                            value: function() {
                                for (var e = [], t = 1; t <= this.elementHeight; t++) {
                                    var i = t / this.elementHeight;
                                    e.push(i)
                                }
                                return e
                            }
                        }, {
                            key: "intersectionObserver",
                            value: function() {
                                var e = {
                                    root: null,
                                    threshold: this.buildThresholdList()
                                };
                                this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), e), this.observer.observe(this.element)
                            }
                        }, {
                            key: "intersectionObserverCallback",
                            value: function(e) {
                                var t = this;
                                e.forEach((function(e) {
                                    e.isIntersecting ? t.isVisible = !0 : t.isVisible = !1
                                }))
                            }
                        }, {
                            key: "checkIfVisible",
                            value: function() {
                                return this.elementBottom > n.positions.top && this.elementTop < n.positions.bottom
                            }
                        }, {
                            key: "getRangeMax",
                            value: function() {
                                var e = this.element.clientHeight;
                                this.rangeMax = e * this.settings.scale - e
                            }
                        }, {
                            key: "getTranslateValue",
                            value: function() {
                                var e = ((n.positions.bottom - this.elementTop) / ((n.positions.height + this.elementHeight) / 100)).toFixed(1);
                                return e = Math.min(100, Math.max(0, e)), 0 !== this.settings.maxTransition && e > this.settings.maxTransition && (e = this.settings.maxTransition), this.oldPercentage !== e && (this.rangeMax || this.getRangeMax(), this.translateValue = (e / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue !== this.translateValue && (this.oldPercentage = e, this.oldTranslateValue = this.translateValue, !0))
                            }
                        }, {
                            key: "animate",
                            value: function() {
                                var e, t = 0,
                                    i = 0;
                                (this.settings.orientation.includes("left") || this.settings.orientation.includes("right")) && (i = "".concat(this.settings.orientation.includes("left") ? -1 * this.translateValue : this.translateValue, "px")), (this.settings.orientation.includes("up") || this.settings.orientation.includes("down")) && (t = "".concat(this.settings.orientation.includes("up") ? -1 * this.translateValue : this.translateValue, "px")), e = !1 === this.settings.overflow ? "translate3d(".concat(i, ", ").concat(t, ", 0) scale(").concat(this.settings.scale, ")") : "translate3d(".concat(i, ", ").concat(t, ", 0)"), this.element.style[a] = e
                            }
                        }]) && l(t.prototype, i), e
                    }();

                    function c(e) {
                        return function(e) {
                            if (Array.isArray(e)) return u(e)
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                        }(e) || h(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function h(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var i = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? u(e, t) : void 0
                        }
                    }

                    function u(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                        return s
                    }

                    function p(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var s = t[i];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                        }
                    }
                    var g, m, f = !1,
                        v = [],
                        y = function() {
                            function e(t, i) {
                                if (function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e), t && Element.prototype.closest && "IntersectionObserver" in window) {
                                    if (this.elements = o(t), this.defaults = {
                                            delay: 0,
                                            orientation: "up",
                                            scale: 1.3,
                                            overflow: !1,
                                            transition: "cubic-bezier(0,0,0,1)",
                                            customContainer: "",
                                            customWrapper: "",
                                            maxTransition: 0
                                        }, this.settings = Object.assign(this.defaults, i), this.settings.customContainer) {
                                        var s = function(e, t) {
                                            return function(e) {
                                                if (Array.isArray(e)) return e
                                            }(e) || function(e, t) {
                                                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                                    var i = [],
                                                        s = !0,
                                                        n = !1,
                                                        o = void 0;
                                                    try {
                                                        for (var a, r = e[Symbol.iterator](); !(s = (a = r.next()).done) && (i.push(a.value), !t || i.length !== t); s = !0);
                                                    } catch (e) {
                                                        n = !0, o = e
                                                    } finally {
                                                        try {
                                                            s || null == r.return || r.return()
                                                        } finally {
                                                            if (n) throw o
                                                        }
                                                    }
                                                    return i
                                                }
                                            }(e, t) || h(e, t) || function() {
                                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }()
                                        }(o(this.settings.customContainer), 1);
                                        this.customContainer = s[0]
                                    }
                                    this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init()
                                }
                            }
                            var t, i;
                            return t = e, (i = [{
                                key: "init",
                                value: function() {
                                    var e = this;
                                    n.setViewportAll(this.customContainer), v = [].concat(c(this.elements.map((function(t) {
                                        return new d(t, e.settings)
                                    }))), c(v)), f || (this.proceedRequestAnimationFrame(), window.addEventListener("resize", this.resizeIsDone), f = !0)
                                }
                            }, {
                                key: "resizeIsDone",
                                value: function() {
                                    clearTimeout(m), m = setTimeout(this.refresh, 200)
                                }
                            }, {
                                key: "proceedRequestAnimationFrame",
                                value: function() {
                                    var e = this;
                                    n.setViewportTop(this.customContainer), this.lastPosition !== n.positions.top ? (n.setViewportBottom(), v.forEach((function(t) {
                                        e.proceedElement(t)
                                    })), g = window.requestAnimationFrame(this.proceedRequestAnimationFrame), this.lastPosition = n.positions.top) : g = window.requestAnimationFrame(this.proceedRequestAnimationFrame)
                                }
                            }, {
                                key: "proceedElement",
                                value: function(e) {
                                    (this.customContainer ? e.checkIfVisible() : e.isVisible) && e.getTranslateValue() && e.animate()
                                }
                            }, {
                                key: "refresh",
                                value: function() {
                                    n.setViewportAll(this.customContainer), v.forEach((function(e) {
                                        e.getElementOffset(), e.getRangeMax()
                                    })), this.lastPosition = -1
                                }
                            }, {
                                key: "destroy",
                                value: function() {
                                    var e = this,
                                        t = [];
                                    v = v.filter((function(i) {
                                        return e.elements.includes(i.element) ? (t.push(i), !1) : i
                                    })), t.forEach((function(t) {
                                        t.unSetStyle(), !1 === e.settings.overflow && t.unWrapElement()
                                    })), v.length || (window.cancelAnimationFrame(g), window.removeEventListener("resize", this.refresh), f = !1)
                                }
                            }]) && p(t.prototype, i), e
                        }()
                }]).default
            }
        },
        t = {};

    function i(s) {
        var n = t[s];
        if (void 0 !== n) return n.exports;
        var o = t[s] = {
            exports: {}
        };
        return e[s](o, o.exports, i), o.exports
    }
    i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var s in t) i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e;
        i.g.importScripts && (e = i.g.location + "");
        var t = i.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var s = t.getElementsByTagName("script");
            s.length && (e = s[s.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), i.p = e
    })(), (() => {
        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(i = {}, s = {}) {
            Object.keys(s).forEach((n => {
                void 0 === i[n] ? i[n] = s[n] : e(s[n]) && e(i[n]) && Object.keys(s[n]).length > 0 && t(i[n], s[n])
            }))
        }
        const s = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };

        function n() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, s), e
        }
        const o = {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function a() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, o), e
        }
        class r extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function l(e = []) {
            const t = [];
            return e.forEach((e => {
                Array.isArray(e) ? t.push(...l(e)) : t.push(e)
            })), t
        }

        function d(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function c(e, t) {
            const i = a(),
                s = n();
            let o = [];
            if (!t && e instanceof r) return e;
            if (!e) return new r(o);
            if ("string" == typeof e) {
                const i = e.trim();
                if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                    let e = "div";
                    0 === i.indexOf("<li") && (e = "ul"), 0 === i.indexOf("<tr") && (e = "tbody"), 0 !== i.indexOf("<td") && 0 !== i.indexOf("<th") || (e = "tr"), 0 === i.indexOf("<tbody") && (e = "table"), 0 === i.indexOf("<option") && (e = "select");
                    const t = s.createElement(e);
                    t.innerHTML = i;
                    for (let e = 0; e < t.childNodes.length; e += 1) o.push(t.childNodes[e])
                } else o = function(e, t) {
                    if ("string" != typeof e) return [e];
                    const i = [],
                        s = t.querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                    return i
                }(e.trim(), t || s)
            } else if (e.nodeType || e === i || e === s) o.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof r) return e;
                o = e
            }
            return new r(function(e) {
                const t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(o))
        }
        c.fn = r.prototype;
        const h = "resize scroll".split(" ");

        function u(e) {
            return function(...t) {
                if (void 0 === t[0]) {
                    for (let t = 0; t < this.length; t += 1) h.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : c(this[t]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }
        u("click"), u("blur"), u("focus"), u("focusin"), u("focusout"), u("keyup"), u("keydown"), u("keypress"), u("submit"), u("change"), u("mousedown"), u("mousemove"), u("mouseup"), u("mouseenter"), u("mouseleave"), u("mouseout"), u("mouseover"), u("touchstart"), u("touchend"), u("touchmove"), u("resize"), u("scroll");
        const p = {
            addClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.add(...t)
                })), this
            },
            removeClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return this.forEach((e => {
                    e.classList.remove(...t)
                })), this
            },
            hasClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                return d(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
            },
            toggleClass: function(...e) {
                const t = l(e.map((e => e.split(" "))));
                this.forEach((e => {
                    t.forEach((t => {
                        e.classList.toggle(t)
                    }))
                }))
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else
                        for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function(...e) {
                let [t, i, s, n] = e;

                function o(e) {
                    const t = e.target;
                    if (!t) return;
                    const n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), c(t).is(i)) s.apply(t, n);
                    else {
                        const e = c(t).parents();
                        for (let t = 0; t < e.length; t += 1) c(e[t]).is(i) && s.apply(e[t], n)
                    }
                }

                function a(e) {
                    const t = e && e.target && e.target.dom7EventData || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
                }
                "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                const r = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (i)
                        for (l = 0; l < r.length; l += 1) {
                            const e = r[l];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                                listener: s,
                                proxyListener: o
                            }), t.addEventListener(e, o, n)
                        } else
                            for (l = 0; l < r.length; l += 1) {
                                const e = r[l];
                                t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                    listener: s,
                                    proxyListener: a
                                }), t.addEventListener(e, a, n)
                            }
                }
                return this
            },
            off: function(...e) {
                let [t, i, s, n] = e;
                "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
                const o = t.split(" ");
                for (let e = 0; e < o.length; e += 1) {
                    const t = o[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const o = this[e];
                        let a;
                        if (!i && o.dom7Listeners ? a = o.dom7Listeners[t] : i && o.dom7LiveListeners && (a = o.dom7LiveListeners[t]), a && a.length)
                            for (let e = a.length - 1; e >= 0; e -= 1) {
                                const i = a[e];
                                s && i.listener === s || s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (o.removeEventListener(t, i.proxyListener, n), a.splice(e, 1)) : s || (o.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                const t = a(),
                    i = e[0].split(" "),
                    s = e[1];
                for (let n = 0; n < i.length; n += 1) {
                    const o = i[n];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i];
                        if (t.CustomEvent) {
                            const i = new t.CustomEvent(o, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            });
                            n.dom7EventData = e.filter(((e, t) => t > 0)), n.dispatchEvent(i), n.dom7EventData = [], delete n.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                const t = this;
                return e && t.on("transitionend", (function i(s) {
                    s.target === this && (e.call(this, s), t.off("transitionend", i))
                })), this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                const e = a();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    const e = a(),
                        t = n(),
                        i = this[0],
                        s = i.getBoundingClientRect(),
                        o = t.body,
                        r = i.clientTop || o.clientTop || 0,
                        l = i.clientLeft || o.clientLeft || 0,
                        d = i === e ? e.scrollY : i.scrollTop,
                        c = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: s.top + d - r,
                        left: s.left + c - l
                    }
                }
                return null
            },
            css: function(e, t) {
                const i = a();
                let s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            for (const t in e) this[s].style[t] = e[t];
                        return this
                    }
                    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                return e ? (this.forEach(((t, i) => {
                    e.apply(t, [t, i])
                })), this) : this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(e) {
                const t = a(),
                    i = n(),
                    s = this[0];
                let o, l;
                if (!s || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (s.matches) return s.matches(e);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector) return s.msMatchesSelector(e);
                    for (o = c(e), l = 0; l < o.length; l += 1)
                        if (o[l] === s) return !0;
                    return !1
                }
                if (e === i) return s === i;
                if (e === t) return s === t;
                if (e.nodeType || e instanceof r) {
                    for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                        if (o[l] === s) return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return c([]);
                if (e < 0) {
                    const i = t + e;
                    return c(i < 0 ? [] : [this[i]])
                }
                return c([this[e]])
            },
            append: function(...e) {
                let t;
                const i = n();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const s = i.createElement("div");
                            for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                        } else if (t instanceof r)
                        for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
                    else this[e].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                const t = n();
                let i, s;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        const n = t.createElement("div");
                        for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(n.childNodes[s], this[i].childNodes[0])
                    } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]);
                else this[i].insertBefore(e, this[i].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && c(this[0].nextElementSibling).is(e) ? c([this[0].nextElementSibling]) : c([]) : this[0].nextElementSibling ? c([this[0].nextElementSibling]) : c([]) : c([])
            },
            nextAll: function(e) {
                const t = [];
                let i = this[0];
                if (!i) return c([]);
                for (; i.nextElementSibling;) {
                    const s = i.nextElementSibling;
                    e ? c(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return c(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e ? t.previousElementSibling && c(t.previousElementSibling).is(e) ? c([t.previousElementSibling]) : c([]) : t.previousElementSibling ? c([t.previousElementSibling]) : c([])
                }
                return c([])
            },
            prevAll: function(e) {
                const t = [];
                let i = this[0];
                if (!i) return c([]);
                for (; i.previousElementSibling;) {
                    const s = i.previousElementSibling;
                    e ? c(s).is(e) && t.push(s) : t.push(s), i = s
                }
                return c(t)
            },
            parent: function(e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? c(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return c(t)
            },
            parents: function(e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s;) e ? c(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                }
                return c(t)
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) t.push(s[e])
                }
                return c(t)
            },
            children: function(e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].children;
                    for (let i = 0; i < s.length; i += 1) e && !c(s[i]).is(e) || t.push(s[i])
                }
                return c(t)
            },
            filter: function(e) {
                return c(d(this, e))
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        Object.keys(p).forEach((e => {
            Object.defineProperty(c.fn, e, {
                value: p[e],
                writable: !0
            })
        }));
        const g = c;

        function m(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function f() {
            return Date.now()
        }

        function v(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function y(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
        }

        function b() {
            const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != s && !y(s)) {
                    const i = Object.keys(Object(s)).filter((e => t.indexOf(e) < 0));
                    for (let t = 0, n = i.length; t < n; t += 1) {
                        const n = i[t],
                            o = Object.getOwnPropertyDescriptor(s, n);
                        void 0 !== o && o.enumerable && (v(e[n]) && v(s[n]) ? s[n].__swiper__ ? e[n] = s[n] : b(e[n], s[n]) : !v(e[n]) && v(s[n]) ? (e[n] = {}, s[n].__swiper__ ? e[n] = s[n] : b(e[n], s[n])) : e[n] = s[n])
                    }
                }
            }
            return e
        }

        function w(e, t, i) {
            e.style.setProperty(t, i)
        }

        function C(e) {
            let {
                swiper: t,
                targetPosition: i,
                side: s
            } = e;
            const n = a(),
                o = -t.translate;
            let r, l = null;
            const d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
            const c = i > o ? "next" : "prev",
                h = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    r = (new Date).getTime(), null === l && (l = r);
                    const e = Math.max(Math.min((r - l) / d, 1), 0),
                        a = .5 - Math.cos(e * Math.PI) / 2;
                    let c = o + a * (i - o);
                    if (h(c, i) && (c = i), t.wrapperEl.scrollTo({
                            [s]: c
                        }), h(c, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [s]: c
                        })
                    })), void n.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = n.requestAnimationFrame(u)
                };
            u()
        }
        let S, x, T;

        function E() {
            return S || (S = function() {
                const e = a(),
                    t = n();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            const i = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (e) {}
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), S
        }
        const M = {
                on(e, t, i) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" != typeof t) return s;
                    const n = i ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
                    })), s
                },
                once(e, t, i) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" != typeof t) return s;

                    function n() {
                        s.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
                        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        t.apply(s, o)
                    }
                    return n.__emitterProxy = t, s.on(e, n, i)
                },
                onAny(e, t) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" != typeof e) return i;
                    const s = t ? "unshift" : "push";
                    return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const i = t.eventsAnyListeners.indexOf(e);
                    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t
                },
                off(e, t) {
                    const i = this;
                    return !i.eventsListeners || i.destroyed ? i : i.eventsListeners ? (e.split(" ").forEach((e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach(((s, n) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(n, 1)
                        }))
                    })), i) : i
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, i, s;
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return "string" == typeof o[0] || Array.isArray(o[0]) ? (t = o[0], i = o.slice(1, o.length), s = e) : (t = o[0].events, i = o[0].data, s = o[0].context || e), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(s, [t, ...i])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(s, i)
                        }))
                    })), e
                }
            },
            I = {
                updateSize: function() {
                    const e = this;
                    let t, i;
                    const s = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left") || 0, 10) - parseInt(s.css("padding-right") || 0, 10), i = i - parseInt(s.css("padding-top") || 0, 10) - parseInt(s.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), Object.assign(e, {
                        width: t,
                        height: i,
                        size: e.isHorizontal() ? t : i
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t(i)) || 0)
                    }
                    const s = e.params,
                        {
                            $wrapperEl: n,
                            size: o,
                            rtlTranslate: a,
                            wrongRTL: r
                        } = e,
                        l = e.virtual && s.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        c = n.children(`.${e.params.slideClass}`),
                        h = l ? e.virtual.slides.length : c.length;
                    let u = [];
                    const p = [],
                        g = [];
                    let m = s.slidesOffsetBefore;
                    "function" == typeof m && (m = s.slidesOffsetBefore.call(e));
                    let f = s.slidesOffsetAfter;
                    "function" == typeof f && (f = s.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        y = e.slidesGrid.length;
                    let b = s.spaceBetween,
                        C = -m,
                        S = 0,
                        x = 0;
                    if (void 0 === o) return;
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * o), e.virtualSize = -b, a ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), s.centeredSlides && s.cssMode && (w(e.wrapperEl, "--swiper-centered-offset-before", ""), w(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const T = s.grid && s.grid.rows > 1 && e.grid;
                    let E;
                    T && e.grid.initSlides(h);
                    const M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
                    for (let n = 0; n < h; n += 1) {
                        E = 0;
                        const a = c.eq(n);
                        if (T && e.grid.updateSlide(n, a, h, t), "none" !== a.css("display")) {
                            if ("auto" === s.slidesPerView) {
                                M && (c[n].style[t("width")] = "");
                                const o = getComputedStyle(a[0]),
                                    r = a[0].style.transform,
                                    l = a[0].style.webkitTransform;
                                if (r && (a[0].style.transform = "none"), l && (a[0].style.webkitTransform = "none"), s.roundLengths) E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                                else {
                                    const e = i(o, "width"),
                                        t = i(o, "padding-left"),
                                        s = i(o, "padding-right"),
                                        n = i(o, "margin-left"),
                                        r = i(o, "margin-right"),
                                        l = o.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) E = e + n + r;
                                    else {
                                        const {
                                            clientWidth: i,
                                            offsetWidth: o
                                        } = a[0];
                                        E = e + t + s + n + r + (o - i)
                                    }
                                }
                                r && (a[0].style.transform = r), l && (a[0].style.webkitTransform = l), s.roundLengths && (E = Math.floor(E))
                            } else E = (o - (s.slidesPerView - 1) * b) / s.slidesPerView, s.roundLengths && (E = Math.floor(E)), c[n] && (c[n].style[t("width")] = `${E}px`);
                            c[n] && (c[n].swiperSlideSize = E), g.push(E), s.centeredSlides ? (C = C + E / 2 + S / 2 + b, 0 === S && 0 !== n && (C = C - o / 2 - b), 0 === n && (C = C - o / 2 - b), Math.abs(C) < .001 && (C = 0), s.roundLengths && (C = Math.floor(C)), x % s.slidesPerGroup == 0 && u.push(C), p.push(C)) : (s.roundLengths && (C = Math.floor(C)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && u.push(C), p.push(C), C = C + E + b), e.virtualSize += E + b, S = E, x += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, o) + f, a && r && ("slide" === s.effect || "coverflow" === s.effect) && n.css({
                            width: `${e.virtualSize+s.spaceBetween}px`
                        }), s.setWrapperSize && n.css({
                            [t("width")]: `${e.virtualSize+s.spaceBetween}px`
                        }), T && e.grid.updateWrapperSize(E, u, t), !s.centeredSlides) {
                        const t = [];
                        for (let i = 0; i < u.length; i += 1) {
                            let n = u[i];
                            s.roundLengths && (n = Math.floor(n)), u[i] <= e.virtualSize - o && t.push(n)
                        }
                        u = t, Math.floor(e.virtualSize - o) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - o)
                    }
                    if (0 === u.length && (u = [0]), 0 !== s.spaceBetween) {
                        const i = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !s.cssMode || t !== c.length - 1)).css({
                            [i]: `${b}px`
                        })
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        g.forEach((t => {
                            e += t + (s.spaceBetween ? s.spaceBetween : 0)
                        })), e -= s.spaceBetween;
                        const t = e - o;
                        u = u.map((e => e < 0 ? -m : e > t ? t + f : e))
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (g.forEach((t => {
                                e += t + (s.spaceBetween ? s.spaceBetween : 0)
                            })), e -= s.spaceBetween, e < o) {
                            const t = (o - e) / 2;
                            u.forEach(((e, i) => {
                                u[i] = e - t
                            })), p.forEach(((e, i) => {
                                p[i] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: p,
                            slidesSizesGrid: g
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        w(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), w(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            i = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + i))
                    }
                    if (h !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                        const t = `${s.containerModifierClass}backface-hidden`,
                            i = e.$el.hasClass(t);
                        h <= s.maxBackfaceHiddenSlides ? i || e.$el.addClass(t) : i && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        i = [],
                        s = t.virtual && t.params.virtual.enabled;
                    let n, o = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => s ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                            i.push(e)
                        }));
                        else
                            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                                const e = t.activeIndex + n;
                                if (e > t.slides.length && !s) break;
                                i.push(a(e))
                            } else i.push(a(t.activeIndex));
                    for (n = 0; n < i.length; n += 1)
                        if (void 0 !== i[n]) {
                            const e = i[n].offsetHeight;
                            o = e > o ? e : o
                        }(o || 0 === o) && t.$wrapperEl.css("height", `${o}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        i = t.params,
                        {
                            slides: s,
                            rtlTranslate: n,
                            snapGrid: o
                        } = t;
                    if (0 === s.length) return;
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    n && (a = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < s.length; e += 1) {
                        const r = s[e];
                        let l = r.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (l -= s[0].swiperSlideOffset);
                        const d = (a + (i.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + i.spaceBetween),
                            c = (a - o[0] + (i.centeredSlides ? t.minTranslate() : 0) - l) / (r.swiperSlideSize + i.spaceBetween),
                            h = -(a - l),
                            u = h + t.slidesSizesGrid[e];
                        (h >= 0 && h < t.size - 1 || u > 1 && u <= t.size || h <= 0 && u >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass)), r.progress = n ? -d : d, r.originalProgress = n ? -c : c
                    }
                    t.visibleSlides = g(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if (void 0 === e) {
                        const i = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * i || 0
                    }
                    const i = t.params,
                        s = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: n,
                        isBeginning: o,
                        isEnd: a
                    } = t;
                    const r = o,
                        l = a;
                    0 === s ? (n = 0, o = !0, a = !0) : (n = (e - t.minTranslate()) / s, o = n <= 0, a = n >= 1), Object.assign(t, {
                        progress: n,
                        isBeginning: o,
                        isEnd: a
                    }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), o && !r && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (r && !o || l && !a) && t.emit("fromEdge"), t.emit("progress", n)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: i,
                            $wrapperEl: s,
                            activeIndex: n,
                            realIndex: o
                        } = e,
                        a = e.virtual && i.virtual.enabled;
                    let r;
                    t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), r = a ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), r.addClass(i.slideActiveClass), i.loop && (r.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(i.slideDuplicateActiveClass));
                    let l = r.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && (l = t.eq(0), l.addClass(i.slideNextClass));
                    let d = r.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === d.length && (d = t.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        i = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: s,
                            snapGrid: n,
                            params: o,
                            activeIndex: a,
                            realIndex: r,
                            snapIndex: l
                        } = t;
                    let d, c = e;
                    if (void 0 === c) {
                        for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? c = e : i >= s[e] && i < s[e + 1] && (c = e + 1) : i >= s[e] && (c = e);
                        o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if (n.indexOf(i) >= 0) d = n.indexOf(i);
                    else {
                        const e = Math.min(o.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / o.slidesPerGroup)
                    }
                    if (d >= n.length && (d = n.length - 1), c === a) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const h = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: h,
                        previousIndex: a,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), r !== h && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        i = t.params,
                        s = g(e).closest(`.${i.slideClass}`)[0];
                    let n, o = !1;
                    if (s)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === s) {
                                o = !0, n = e;
                                break
                            }
                    if (!s || !o) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = n, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };

        function $(e) {
            let {
                swiper: t,
                runCallbacks: i,
                direction: s,
                step: n
            } = e;
            const {
                activeIndex: o,
                previousIndex: a
            } = t;
            let r = s;
            if (r || (r = o > a ? "next" : o < a ? "prev" : "reset"), t.emit(`transition${n}`), i && o !== a) {
                if ("reset" === r) return void t.emit(`slideResetTransition${n}`);
                t.emit(`slideChangeTransition${n}`), "next" === r ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
            }
        }
        const L = {
            slideTo: function(e, t, i, s, n) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const o = this;
                let a = e;
                a < 0 && (a = 0);
                const {
                    params: r,
                    snapGrid: l,
                    slidesGrid: d,
                    previousIndex: c,
                    activeIndex: h,
                    rtlTranslate: u,
                    wrapperEl: p,
                    enabled: g
                } = o;
                if (o.animating && r.preventInteractionOnTransition || !g && !s && !n) return !1;
                const m = Math.min(o.params.slidesPerGroupSkip, a);
                let f = m + Math.floor((a - m) / o.params.slidesPerGroup);
                f >= l.length && (f = l.length - 1), (h || r.initialSlide || 0) === (c || 0) && i && o.emit("beforeSlideChangeStart");
                const v = -l[f];
                if (o.updateProgress(v), r.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * v),
                            i = Math.floor(100 * d[e]),
                            s = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= i && t < s - (s - i) / 2 ? a = e : t >= i && t < s && (a = e + 1) : t >= i && (a = e)
                    }
                if (o.initialized && a !== h) {
                    if (!o.allowSlideNext && v < o.translate && v < o.minTranslate()) return !1;
                    if (!o.allowSlidePrev && v > o.translate && v > o.maxTranslate() && (h || 0) !== a) return !1
                }
                let y;
                if (y = a > h ? "next" : a < h ? "prev" : "reset", u && -v === o.translate || !u && v === o.translate) return o.updateActiveIndex(a), r.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== r.effect && o.setTranslate(v), "reset" !== y && (o.transitionStart(i, y), o.transitionEnd(i, y)), !1;
                if (r.cssMode) {
                    const e = o.isHorizontal(),
                        i = u ? v : -v;
                    if (0 === t) {
                        const t = o.virtual && o.params.virtual.enabled;
                        t && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), p[e ? "scrollLeft" : "scrollTop"] = i, t && requestAnimationFrame((() => {
                            o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
                        }))
                    } else {
                        if (!o.support.smoothScroll) return C({
                            swiper: o,
                            targetPosition: i,
                            side: e ? "left" : "top"
                        }), !0;
                        p.scrollTo({
                            [e ? "left" : "top"]: i,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return o.setTransition(t), o.setTranslate(v), o.updateActiveIndex(a), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, s), o.transitionStart(i, y), 0 === t ? o.transitionEnd(i, y) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                    o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(i, y))
                }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
            },
            slideToLoop: function(e, t, i, s) {
                if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const n = this;
                let o = e;
                return n.params.loop && (o += n.loopedSlides), n.slideTo(o, t, i, s)
            },
            slideNext: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this,
                    {
                        animating: n,
                        enabled: o,
                        params: a
                    } = s;
                if (!o) return s;
                let r = a.slidesPerGroup;
                "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (r = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : r;
                if (a.loop) {
                    if (n && a.loopPreventsSlide) return !1;
                    s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                }
                return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + l, e, t, i)
            },
            slidePrev: function(e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                const s = this,
                    {
                        params: n,
                        animating: o,
                        snapGrid: a,
                        slidesGrid: r,
                        rtlTranslate: l,
                        enabled: d
                    } = s;
                if (!d) return s;
                if (n.loop) {
                    if (o && n.loopPreventsSlide) return !1;
                    s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                }

                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const h = c(l ? s.translate : -s.translate),
                    u = a.map((e => c(e)));
                let p = a[u.indexOf(h) - 1];
                if (void 0 === p && n.cssMode) {
                    let e;
                    a.forEach(((t, i) => {
                        h >= t && (e = i)
                    })), void 0 !== e && (p = a[e > 0 ? e - 1 : e])
                }
                let g = 0;
                if (void 0 !== p && (g = r.indexOf(p), g < 0 && (g = s.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (g = g - s.slidesPerViewDynamic("previous", !0) + 1, g = Math.max(g, 0))), n.rewind && s.isBeginning) {
                    const n = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                    return s.slideTo(n, e, t, i)
                }
                return s.slideTo(g, e, t, i)
            },
            slideReset: function(e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            },
            slideToClosest: function(e, t, i, s) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
                const n = this;
                let o = n.activeIndex;
                const a = Math.min(n.params.slidesPerGroupSkip, o),
                    r = a + Math.floor((o - a) / n.params.slidesPerGroup),
                    l = n.rtlTranslate ? n.translate : -n.translate;
                if (l >= n.snapGrid[r]) {
                    const e = n.snapGrid[r];
                    l - e > (n.snapGrid[r + 1] - e) * s && (o += n.params.slidesPerGroup)
                } else {
                    const e = n.snapGrid[r - 1];
                    l - e <= (n.snapGrid[r] - e) * s && (o -= n.params.slidesPerGroup)
                }
                return o = Math.max(o, 0), o = Math.min(o, n.slidesGrid.length - 1), n.slideTo(o, e, t, i)
            },
            slideToClickedSlide: function() {
                const e = this,
                    {
                        params: t,
                        $wrapperEl: i
                    } = e,
                    s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let n, o = e.clickedIndex;
                if (t.loop) {
                    if (e.animating) return;
                    n = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? o < e.loopedSlides - s / 2 || o > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), o = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
                        e.slideTo(o)
                    }))) : e.slideTo(o) : o > e.slides.length - s ? (e.loopFix(), o = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), m((() => {
                        e.slideTo(o)
                    }))) : e.slideTo(o)
                } else e.slideTo(o)
            }
        };

        function k(e) {
            const t = this,
                i = n(),
                s = a(),
                o = t.touchEventsData,
                {
                    params: r,
                    touches: l,
                    enabled: d
                } = t;
            if (!d) return;
            if (t.animating && r.preventInteractionOnTransition) return;
            !t.animating && r.cssMode && r.loop && t.loopFix();
            let c = e;
            c.originalEvent && (c = c.originalEvent);
            let h = g(c.target);
            if ("wrapper" === r.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
            if (o.isTouchEvent = "touchstart" === c.type, !o.isTouchEvent && "which" in c && 3 === c.which) return;
            if (!o.isTouchEvent && "button" in c && c.button > 0) return;
            if (o.isTouched && o.isMoved) return;
            r.noSwipingClass && "" !== r.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (h = g(e.path[0]));
            const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                p = !(!c.target || !c.target.shadowRoot);
            if (r.noSwiping && (p ? function(e, t) {
                    return void 0 === t && (t = this),
                        function t(i) {
                            if (!i || i === n() || i === a()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            const s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                }(u, h[0]) : h.closest(u)[0])) return void(t.allowClick = !0);
            if (r.swipeHandler && !h.closest(r.swipeHandler)[0]) return;
            l.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, l.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
            const m = l.currentX,
                v = l.currentY,
                y = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
            if (y && (m <= b || m >= s.innerWidth - b)) {
                if ("prevent" !== y) return;
                e.preventDefault()
            }
            if (Object.assign(o, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = m, l.startY = v, o.touchStartTime = f(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (o.allowThresholdMove = !1), "touchstart" !== c.type) {
                let e = !0;
                h.is(o.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (o.isTouched = !1)), i.activeElement && g(i.activeElement).is(o.focusableElements) && i.activeElement !== h[0] && i.activeElement.blur();
                const s = e && t.allowTouchMove && r.touchStartPreventDefault;
                !r.touchStartForcePreventDefault && !s || h[0].isContentEditable || c.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
        }

        function O(e) {
            const t = n(),
                i = this,
                s = i.touchEventsData,
                {
                    params: o,
                    touches: a,
                    rtlTranslate: r,
                    enabled: l
                } = i;
            if (!l) return;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", d));
            if (s.isTouchEvent && "touchmove" !== d.type) return;
            const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                h = "touchmove" === d.type ? c.pageX : d.pageX,
                u = "touchmove" === d.type ? c.pageY : d.pageY;
            if (d.preventedByNestedSwiper) return a.startX = h, void(a.startY = u);
            if (!i.allowTouchMove) return g(d.target).is(s.focusableElements) || (i.allowClick = !1), void(s.isTouched && (Object.assign(a, {
                startX: h,
                startY: u,
                currentX: h,
                currentY: u
            }), s.touchStartTime = f()));
            if (s.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                if (i.isVertical()) {
                    if (u < a.startY && i.translate <= i.maxTranslate() || u > a.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                } else if (h < a.startX && i.translate <= i.maxTranslate() || h > a.startX && i.translate >= i.minTranslate()) return;
            if (s.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(s.focusableElements)) return s.isMoved = !0, void(i.allowClick = !1);
            if (s.allowTouchCallbacks && i.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
            a.currentX = h, a.currentY = u;
            const p = a.currentX - a.startX,
                m = a.currentY - a.startY;
            if (i.params.threshold && Math.sqrt(p ** 2 + m ** 2) < i.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let e;
                i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : p * p + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(p)) / Math.PI, s.isScrolling = i.isHorizontal() ? e > o.touchAngle : 90 - e > o.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", d), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
            if (!s.startMoving) return;
            i.allowClick = !1, !o.cssMode && d.cancelable && d.preventDefault(), o.touchMoveStopPropagation && !o.nested && d.stopPropagation(), s.isMoved || (o.loop && !o.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !o.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", d)), i.emit("sliderMove", d), s.isMoved = !0;
            let v = i.isHorizontal() ? p : m;
            a.diff = v, v *= o.touchRatio, r && (v = -v), i.swipeDirection = v > 0 ? "prev" : "next", s.currentTranslate = v + s.startTranslate;
            let y = !0,
                b = o.resistanceRatio;
            if (o.touchReleaseOnEdges && (b = 0), v > 0 && s.currentTranslate > i.minTranslate() ? (y = !1, o.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** b)) : v < 0 && s.currentTranslate < i.maxTranslate() && (y = !1, o.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** b)), y && (d.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), o.threshold > 0) {
                if (!(Math.abs(v) > o.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void(a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
            }
            o.followFinger && !o.cssMode && ((o.freeMode && o.freeMode.enabled && i.freeMode || o.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && o.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
        }

        function P(e) {
            const t = this,
                i = t.touchEventsData,
                {
                    params: s,
                    touches: n,
                    rtlTranslate: o,
                    slidesGrid: a,
                    enabled: r
                } = t;
            if (!r) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            const d = f(),
                c = d - i.touchStartTime;
            if (t.allowClick) {
                const e = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (i.lastClickTime = f(), m((() => {
                    t.destroyed || (t.allowClick = !0)
                })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            let h;
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? o ? t.translate : -t.translate : -i.currentTranslate, s.cssMode) return;
            if (t.params.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: h
            });
            let u = 0,
                p = t.slidesSizesGrid[0];
            for (let e = 0; e < a.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== a[e + t] ? h >= a[e] && h < a[e + t] && (u = e, p = a[e + t] - a[e]) : h >= a[e] && (u = e, p = a[a.length - 1] - a[a.length - 2])
            }
            let g = null,
                v = null;
            s.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
            const y = (h - a[u]) / p,
                b = u < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (y >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : u + b) : t.slideTo(u)), "prev" === t.swipeDirection && (y > 1 - s.longSwipesRatio ? t.slideTo(u + b) : null !== v && y < 0 && Math.abs(y) > s.longSwipesRatio ? t.slideTo(v) : t.slideTo(u))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation || l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : u + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : u)) : l.target === t.navigation.nextEl ? t.slideTo(u + b) : t.slideTo(u)
            }
        }

        function z() {
            const e = this,
                {
                    params: t,
                    el: i
                } = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const {
                allowSlideNext: s,
                allowSlidePrev: n,
                snapGrid: o
            } = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && o !== e.snapGrid && e.checkOverflow()
        }

        function A(e) {
            const t = this;
            t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function D() {
            const e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: i,
                    enabled: s
                } = e;
            if (!s) return;
            let n;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            const o = e.maxTranslate() - e.minTranslate();
            n = 0 === o ? 0 : (e.translate - e.minTranslate()) / o, n !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
        let B = !1;

        function G() {}
        const V = (e, t) => {
                const i = n(),
                    {
                        params: s,
                        touchEvents: o,
                        el: a,
                        wrapperEl: r,
                        device: l,
                        support: d
                    } = e,
                    c = !!s.nested,
                    h = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== o.start || !d.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    a[h](o.start, e.onTouchStart, t), a[h](o.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), a[h](o.end, e.onTouchEnd, t), o.cancel && a[h](o.cancel, e.onTouchEnd, t)
                } else a[h](o.start, e.onTouchStart, !1), i[h](o.move, e.onTouchMove, c), i[h](o.end, e.onTouchEnd, !1);
                (s.preventClicks || s.preventClicksPropagation) && a[h]("click", e.onClick, !0), s.cssMode && r[h]("scroll", e.onScroll), s.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", z, !0) : e[u]("observerUpdate", z, !0)
            },
            N = {
                attachEvents: function() {
                    const e = this,
                        t = n(),
                        {
                            params: i,
                            support: s
                        } = e;
                    e.onTouchStart = k.bind(e), e.onTouchMove = O.bind(e), e.onTouchEnd = P.bind(e), i.cssMode && (e.onScroll = D.bind(e)), e.onClick = A.bind(e), s.touch && !B && (t.addEventListener("touchstart", G), B = !0), V(e, "on")
                },
                detachEvents: function() {
                    V(this, "off")
                }
            },
            H = (e, t) => e.grid && t.grid && t.grid.rows > 1,
            X = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: i,
                            rtl: s,
                            $el: n,
                            device: o,
                            support: a
                        } = e,
                        r = function(e, t) {
                            const i = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((s => {
                                    e[s] && i.push(t + s)
                                })) : "string" == typeof e && i.push(t + e)
                            })), i
                        }(["initialized", i.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": e.params.freeMode && i.freeMode.enabled
                        }, {
                            autoheight: i.autoHeight
                        }, {
                            rtl: s
                        }, {
                            grid: i.grid && i.grid.rows > 1
                        }, {
                            "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill
                        }, {
                            android: o.android
                        }, {
                            ios: o.ios
                        }, {
                            "css-mode": i.cssMode
                        }, {
                            centered: i.cssMode && i.centeredSlides
                        }, {
                            "watch-progress": i.watchSlidesProgress
                        }], i.containerModifierClass);
                    t.push(...r), n.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            _ = {
                loadImage: function(e, t, i, s, n, o) {
                    const r = a();
                    let l;

                    function d() {
                        o && o()
                    }
                    g(e).parent("picture")[0] || e.complete && n ? d() : t ? (l = new r.Image, l.onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        const s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            },
            j = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

        function F(e, t) {
            return function(i) {
                void 0 === i && (i = {});
                const s = Object.keys(i)[0],
                    n = i[s];
                "object" == typeof n && null !== n ? (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 && !0 === e[s] && (e[s] = {
                    auto: !0
                }), s in e && "enabled" in n ? (!0 === e[s] && (e[s] = {
                    enabled: !0
                }), "object" != typeof e[s] || "enabled" in e[s] || (e[s].enabled = !0), e[s] || (e[s] = {
                    enabled: !1
                }), b(t, i)) : b(t, i)) : b(t, i)
            }
        }
        const W = {
                eventsEmitter: M,
                update: I,
                translate: {
                    getTranslate: function(e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        const {
                            params: t,
                            rtlTranslate: i,
                            translate: s,
                            $wrapperEl: n
                        } = this;
                        if (t.virtualTranslate) return i ? -s : s;
                        if (t.cssMode) return s;
                        let o = function(e, t) {
                            void 0 === t && (t = "x");
                            const i = a();
                            let s, n, o;
                            const r = function(e) {
                                const t = a();
                                let i;
                                return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
                            }(e);
                            return i.WebKitCSSMatrix ? (n = r.transform || r.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), o = new i.WebKitCSSMatrix("none" === n ? "" : n)) : (o = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = o.toString().split(",")), "x" === t && (n = i.WebKitCSSMatrix ? o.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (n = i.WebKitCSSMatrix ? o.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), n || 0
                        }(n[0], e);
                        return i && (o = -o), o || 0
                    },
                    setTranslate: function(e, t) {
                        const i = this,
                            {
                                rtlTranslate: s,
                                params: n,
                                $wrapperEl: o,
                                wrapperEl: a,
                                progress: r
                            } = i;
                        let l, d = 0,
                            c = 0;
                        i.isHorizontal() ? d = s ? -e : e : c = e, n.roundLengths && (d = Math.floor(d), c = Math.floor(c)), n.cssMode ? a[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -c : n.virtualTranslate || o.transform(`translate3d(${d}px, ${c}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? d : c;
                        const h = i.maxTranslate() - i.minTranslate();
                        l = 0 === h ? 0 : (e - i.minTranslate()) / h, l !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    },
                    translateTo: function(e, t, i, s, n) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                        const o = this,
                            {
                                params: a,
                                wrapperEl: r
                            } = o;
                        if (o.animating && a.preventInteractionOnTransition) return !1;
                        const l = o.minTranslate(),
                            d = o.maxTranslate();
                        let c;
                        if (c = s && e > l ? l : s && e < d ? d : e, o.updateProgress(c), a.cssMode) {
                            const e = o.isHorizontal();
                            if (0 === t) r[e ? "scrollLeft" : "scrollTop"] = -c;
                            else {
                                if (!o.support.smoothScroll) return C({
                                    swiper: o,
                                    targetPosition: -c,
                                    side: e ? "left" : "top"
                                }), !0;
                                r.scrollTo({
                                    [e ? "left" : "top"]: -c,
                                    behavior: "smooth"
                                })
                            }
                            return !0
                        }
                        return 0 === t ? (o.setTransition(0), o.setTranslate(c), i && (o.emit("beforeTransitionStart", t, n), o.emit("transitionEnd"))) : (o.setTransition(t), o.setTranslate(c), i && (o.emit("beforeTransitionStart", t, n), o.emit("transitionStart")), o.animating || (o.animating = !0, o.onTranslateToWrapperTransitionEnd || (o.onTranslateToWrapperTransitionEnd = function(e) {
                            o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd), o.onTranslateToWrapperTransitionEnd = null, delete o.onTranslateToWrapperTransitionEnd, i && o.emit("transitionEnd"))
                        }), o.$wrapperEl[0].addEventListener("transitionend", o.onTranslateToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onTranslateToWrapperTransitionEnd))), !0
                    }
                },
                transition: {
                    setTransition: function(e, t) {
                        const i = this;
                        i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        const i = this,
                            {
                                params: s
                            } = i;
                        s.cssMode || (s.autoHeight && i.updateAutoHeight(), $({
                            swiper: i,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        const i = this,
                            {
                                params: s
                            } = i;
                        i.animating = !1, s.cssMode || (i.setTransition(0), $({
                            swiper: i,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: L,
                loop: {
                    loopCreate: function() {
                        const e = this,
                            t = n(),
                            {
                                params: i,
                                $wrapperEl: s
                            } = e,
                            o = s.children().length > 0 ? g(s.children()[0].parentNode) : s;
                        o.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                        let a = o.children(`.${i.slideClass}`);
                        if (i.loopFillGroupWithBlank) {
                            const e = i.slidesPerGroup - a.length % i.slidesPerGroup;
                            if (e !== i.slidesPerGroup) {
                                for (let s = 0; s < e; s += 1) {
                                    const e = g(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                    o.append(e)
                                }
                                a = o.children(`.${i.slideClass}`)
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                        const r = [],
                            l = [];
                        a.each(((e, t) => {
                            g(e).attr("data-swiper-slide-index", t)
                        }));
                        for (let t = 0; t < e.loopedSlides; t += 1) {
                            const e = t - Math.floor(t / a.length) * a.length;
                            l.push(a.eq(e)[0]), r.unshift(a.eq(a.length - e - 1)[0])
                        }
                        for (let e = 0; e < l.length; e += 1) o.append(g(l[e].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (let e = r.length - 1; e >= 0; e -= 1) o.prepend(g(r[e].cloneNode(!0)).addClass(i.slideDuplicateClass))
                    },
                    loopFix: function() {
                        const e = this;
                        e.emit("beforeLoopFix");
                        const {
                            activeIndex: t,
                            slides: i,
                            loopedSlides: s,
                            allowSlidePrev: n,
                            allowSlideNext: o,
                            snapGrid: a,
                            rtlTranslate: r
                        } = e;
                        let l;
                        e.allowSlidePrev = !0, e.allowSlideNext = !0;
                        const d = -a[t] - e.getTranslate();
                        t < s ? (l = i.length - 3 * s + t, l += s, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((r ? -e.translate : e.translate) - d)) : t >= i.length - s && (l = -i.length + t + s, l += s, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((r ? -e.translate : e.translate) - d)), e.allowSlidePrev = n, e.allowSlideNext = o, e.emit("loopFix")
                    },
                    loopDestroy: function() {
                        const {
                            $wrapperEl: e,
                            params: t,
                            slides: i
                        } = this;
                        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                    }
                },
                grabCursor: {
                    setGrabCursor: function(e) {
                        const t = this;
                        if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                        const i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                        i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab"
                    },
                    unsetGrabCursor: function() {
                        const e = this;
                        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                    }
                },
                events: N,
                breakpoints: {
                    setBreakpoint: function() {
                        const e = this,
                            {
                                activeIndex: t,
                                initialized: i,
                                loopedSlides: s = 0,
                                params: n,
                                $el: o
                            } = e,
                            a = n.breakpoints;
                        if (!a || a && 0 === Object.keys(a).length) return;
                        const r = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                        if (!r || e.currentBreakpoint === r) return;
                        const l = (r in a ? a[r] : void 0) || e.originalParams,
                            d = H(e, n),
                            c = H(e, l),
                            h = n.enabled;
                        d && !c ? (o.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (o.addClass(`${n.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === n.grid.fill) && o.addClass(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                            const i = n[t] && n[t].enabled,
                                s = l[t] && l[t].enabled;
                            i && !s && e[t].disable(), !i && s && e[t].enable()
                        }));
                        const u = l.direction && l.direction !== n.direction,
                            p = n.loop && (l.slidesPerView !== n.slidesPerView || u);
                        u && i && e.changeDirection(), b(e.params, l);
                        const g = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), h && !g ? e.disable() : !h && g && e.enable(), e.currentBreakpoint = r, e.emit("_beforeBreakpoint", l), p && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    },
                    getBreakpoint: function(e, t, i) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                        let s = !1;
                        const n = a(),
                            o = "window" === t ? n.innerHeight : i.clientHeight,
                            r = Object.keys(e).map((e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    const t = parseFloat(e.substr(1));
                                    return {
                                        value: o * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            }));
                        r.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                        for (let e = 0; e < r.length; e += 1) {
                            const {
                                point: o,
                                value: a
                            } = r[e];
                            "window" === t ? n.matchMedia(`(min-width: ${a}px)`).matches && (s = o) : a <= i.clientWidth && (s = o)
                        }
                        return s || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        const e = this,
                            {
                                isLocked: t,
                                params: i
                            } = e,
                            {
                                slidesOffsetBefore: s
                            } = i;
                        if (s) {
                            const t = e.slides.length - 1,
                                i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                            e.isLocked = e.size > i
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: X,
                images: _
            },
            Y = {};
        class R {
            constructor() {
                let e, t;
                for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = b({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
                    const e = [];
                    return g(t.el).each((i => {
                        const s = b({}, t, {
                            el: i
                        });
                        e.push(new R(s))
                    })), e
                }
                const o = this;
                var r;
                o.__swiper__ = !0, o.support = E(), o.device = (void 0 === (r = {
                    userAgent: t.userAgent
                }) && (r = {}), x || (x = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const i = E(),
                        s = a(),
                        n = s.navigator.platform,
                        o = t || s.navigator.userAgent,
                        r = {
                            ios: !1,
                            android: !1
                        },
                        l = s.screen.width,
                        d = s.screen.height,
                        c = o.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let h = o.match(/(iPad).*OS\s([\d_]+)/);
                    const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        g = "Win32" === n;
                    let m = "MacIntel" === n;
                    return !h && m && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && (h = o.match(/(Version)\/([\d.]+)/), h || (h = [0, 1, "13_0_0"]), m = !1), c && !g && (r.os = "android", r.android = !0), (h || p || u) && (r.os = "ios", r.ios = !0), r
                }(r)), x), o.browser = (T || (T = function() {
                    const e = a();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), T), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = [...o.__modules__], t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
                const l = {};
                o.modules.forEach((e => {
                    e({
                        swiper: o,
                        extendParams: F(t, l),
                        on: o.on.bind(o),
                        once: o.once.bind(o),
                        off: o.off.bind(o),
                        emit: o.emit.bind(o)
                    })
                }));
                const d = b({}, j, l);
                return o.params = b({}, d, Y, t), o.originalParams = b({}, o.params), o.passedParams = b({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach((e => {
                    o.on(e, o.params.on[e])
                })), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = g, Object.assign(o, {
                    enabled: o.params.enabled,
                    el: e,
                    classNames: [],
                    slides: g(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === o.params.direction,
                    isVertical: () => "vertical" === o.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: o.params.allowSlideNext,
                    allowSlidePrev: o.params.allowSlidePrev,
                    touchEvents: function() {
                        const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return o.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, o.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: o.params.focusableElements,
                        lastClickTime: f(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: o.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), o.emit("_swiper"), o.params.init && o.init(), o
            }
            enable() {
                const e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                const e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                const i = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = i.minTranslate(),
                    n = (i.maxTranslate() - s) * e + s;
                i.translateTo(n, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses()
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                const t = this;
                return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((i => {
                    const s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }), e.emit("_slideClass", i, s)
                })), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                const {
                    params: i,
                    slides: s,
                    slidesGrid: n,
                    slidesSizesGrid: o,
                    size: a,
                    activeIndex: r
                } = this;
                let l = 1;
                if (i.centeredSlides) {
                    let e, t = s[r].swiperSlideSize;
                    for (let i = r + 1; i < s.length; i += 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > a && (e = !0));
                    for (let i = r - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, l += 1, t > a && (e = !0))
                } else if ("current" === e)
                    for (let e = r + 1; e < s.length; e += 1)(t ? n[e] + o[e] - n[r] < a : n[e] - n[r] < a) && (l += 1);
                else
                    for (let e = r - 1; e >= 0; e -= 1) n[r] - n[e] < a && (l += 1);
                return l
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const {
                    snapGrid: t,
                    params: i
                } = e;

                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let n;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || s()), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                const i = this,
                    s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each((t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                })), i.emit("changeDirection"), t && i.update()), i
            }
            changeLanguageDirection(e) {
                const t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const i = g(e || t.params.el);
                if (!(e = i[0])) return !1;
                e.swiper = t;
                const s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                let o = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = g(e.shadowRoot.querySelector(s()));
                        return t.children = e => i.children(e), t
                    }
                    return i.children ? i.children(s()) : g(i).children(s())
                })();
                if (0 === o.length && t.params.createElements) {
                    const e = n().createElement("div");
                    o = g(e), e.className = t.params.wrapperClass, i.append(e), i.children(`.${t.params.slideClass}`).each((e => {
                        o.append(e)
                    }))
                }
                return Object.assign(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: o,
                    wrapperEl: o[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === o.css("display")
                }), !0
            }
            init(e) {
                const t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                const i = this,
                    {
                        params: s,
                        $el: n,
                        $wrapperEl: o,
                        slides: a
                    } = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), o.removeAttr("style"), a && a.length && a.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((e => {
                    i.off(e)
                })), !1 !== e && (i.$el[0].swiper = null, function(e) {
                    const t = e;
                    Object.keys(t).forEach((e => {
                        try {
                            t[e] = null
                        } catch (e) {}
                        try {
                            delete t[e]
                        } catch (e) {}
                    }))
                }(i)), i.destroyed = !0), null
            }
            static extendDefaults(e) {
                b(Y, e)
            }
            static get extendedDefaults() {
                return Y
            }
            static get defaults() {
                return j
            }
            static installModule(e) {
                R.prototype.__modules__ || (R.prototype.__modules__ = []);
                const t = R.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach((e => R.installModule(e))), R) : (R.installModule(e), R)
            }
        }
        Object.keys(W).forEach((e => {
            Object.keys(W[e]).forEach((t => {
                R.prototype[t] = W[e][t]
            }))
        })), R.use([function(e) {
            let {
                swiper: t,
                on: i,
                emit: s
            } = e;
            const n = a();
            let o = null,
                r = null;
            const l = () => {
                    t && !t.destroyed && t.initialized && (s("beforeResize"), s("resize"))
                },
                d = () => {
                    t && !t.destroyed && t.initialized && s("orientationchange")
                };
            i("init", (() => {
                t.params.resizeObserver && void 0 !== n.ResizeObserver ? t && !t.destroyed && t.initialized && (o = new ResizeObserver((e => {
                    r = n.requestAnimationFrame((() => {
                        const {
                            width: i,
                            height: s
                        } = t;
                        let n = i,
                            o = s;
                        e.forEach((e => {
                            let {
                                contentBoxSize: i,
                                contentRect: s,
                                target: a
                            } = e;
                            a && a !== t.el || (n = s ? s.width : (i[0] || i).inlineSize, o = s ? s.height : (i[0] || i).blockSize)
                        })), n === i && o === s || l()
                    }))
                })), o.observe(t.el)) : (n.addEventListener("resize", l), n.addEventListener("orientationchange", d))
            })), i("destroy", (() => {
                r && n.cancelAnimationFrame(r), o && o.unobserve && t.el && (o.unobserve(t.el), o = null), n.removeEventListener("resize", l), n.removeEventListener("orientationchange", d)
            }))
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: n
            } = e;
            const o = [],
                r = a(),
                l = function(e, t) {
                    void 0 === t && (t = {});
                    const i = new(r.MutationObserver || r.WebkitMutationObserver)((e => {
                        if (1 === e.length) return void n("observerUpdate", e[0]);
                        const t = function() {
                            n("observerUpdate", e[0])
                        };
                        r.requestAnimationFrame ? r.requestAnimationFrame(t) : r.setTimeout(t, 0)
                    }));
                    i.observe(e, {
                        attributes: void 0 === t.attributes || t.attributes,
                        childList: void 0 === t.childList || t.childList,
                        characterData: void 0 === t.characterData || t.characterData
                    }), o.push(i)
                };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), s("init", (() => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        const e = t.$el.parents();
                        for (let t = 0; t < e.length; t += 1) l(e[t])
                    }
                    l(t.$el[0], {
                        childList: t.params.observeSlideChildren
                    }), l(t.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            })), s("destroy", (() => {
                o.forEach((e => {
                    e.disconnect()
                })), o.splice(0, o.length)
            }))
        }]);
        const q = R;

        function Z(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: o
            } = e;
            const r = n(),
                l = a();

            function d(e) {
                if (!t.enabled) return;
                const {
                    rtlTranslate: i
                } = t;
                let s = e;
                s.originalEvent && (s = s.originalEvent);
                const n = s.keyCode || s.charCode,
                    a = t.params.keyboard.pageUpDown,
                    d = a && 33 === n,
                    c = a && 34 === n,
                    h = 37 === n,
                    u = 39 === n,
                    p = 38 === n,
                    g = 40 === n;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && g || c)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && h || t.isVertical() && p || d)) return !1;
                if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || r.activeElement && r.activeElement.nodeName && ("input" === r.activeElement.nodeName.toLowerCase() || "textarea" === r.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || h || u || p || g)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        const s = t.$el,
                            n = s[0].clientWidth,
                            o = s[0].clientHeight,
                            a = l.innerWidth,
                            r = l.innerHeight,
                            d = t.$el.offset();
                        i && (d.left -= t.$el[0].scrollLeft);
                        const c = [
                            [d.left, d.top],
                            [d.left + n, d.top],
                            [d.left, d.top + o],
                            [d.left + n, d.top + o]
                        ];
                        for (let t = 0; t < c.length; t += 1) {
                            const i = c[t];
                            if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= r) {
                                if (0 === i[0] && 0 === i[1]) continue;
                                e = !0
                            }
                        }
                        if (!e) return
                    }
                    t.isHorizontal() ? ((d || c || h || u) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), ((c || u) && !i || (d || h) && i) && t.slideNext(), ((d || h) && !i || (c || u) && i) && t.slidePrev()) : ((d || c || p || g) && (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (c || g) && t.slideNext(), (d || p) && t.slidePrev()), o("keyPress", n)
                }
            }

            function c() {
                t.keyboard.enabled || (g(r).on("keydown", d), t.keyboard.enabled = !0)
            }

            function h() {
                t.keyboard.enabled && (g(r).off("keydown", d), t.keyboard.enabled = !1)
            }
            t.keyboard = {
                enabled: !1
            }, i({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s("init", (() => {
                t.params.keyboard.enabled && c()
            })), s("destroy", (() => {
                t.keyboard.enabled && h()
            })), Object.assign(t.keyboard, {
                enable: c,
                disable: h
            })
        }

        function U(e, t, i, s) {
            const o = n();
            return e.params.createElements && Object.keys(s).forEach((n => {
                if (!i[n] && !0 === i.auto) {
                    let a = e.$el.children(`.${s[n]}`)[0];
                    a || (a = o.createElement("div"), a.className = s[n], e.$el.append(a)), i[n] = a, t[n] = a
                }
            })), i
        }

        function K(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: n
            } = e;

            function o(e) {
                let i;
                return e && (i = g(e), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i
            }

            function a(e, i) {
                const s = t.params.navigation;
                e && e.length > 0 && (e[i ? "addClass" : "removeClass"](s.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](s.lockClass))
            }

            function r() {
                if (t.params.loop) return;
                const {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                a(i, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"))
            }

            function d(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"))
            }

            function c() {
                const e = t.params.navigation;
                if (t.params.navigation = U(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                const i = o(e.nextEl),
                    s = o(e.prevEl);
                i && i.length > 0 && i.on("click", d), s && s.length > 0 && s.on("click", l), Object.assign(t.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                }), t.enabled || (i && i.addClass(e.lockClass), s && s.addClass(e.lockClass))
            }

            function h() {
                const {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(t.params.navigation.disabledClass))
            }
            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, s("init", (() => {
                !1 === t.params.navigation.enabled ? u() : (c(), r())
            })), s("toEdge fromEdge lock unlock", (() => {
                r()
            })), s("destroy", (() => {
                h()
            })), s("enable disable", (() => {
                const {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
            })), s("click", ((e, i) => {
                const {
                    $nextEl: s,
                    $prevEl: o
                } = t.navigation, a = i.target;
                if (t.params.navigation.hideOnClick && !g(a).is(o) && !g(a).is(s)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                    let e;
                    s ? e = s.hasClass(t.params.navigation.hiddenClass) : o && (e = o.hasClass(t.params.navigation.hiddenClass)), n(!0 === e ? "navigationShow" : "navigationHide"), s && s.toggleClass(t.params.navigation.hiddenClass), o && o.toggleClass(t.params.navigation.hiddenClass)
                }
            }));
            const u = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), h()
            };
            Object.assign(t.navigation, {
                enable: () => {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), r()
                },
                disable: u,
                update: r,
                init: c,
                destroy: h
            })
        }

        function Q(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
        }

        function J(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: n
            } = e;
            const o = "swiper-pagination";
            let a;
            i({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${o}-bullet`,
                    bulletActiveClass: `${o}-bullet-active`,
                    modifierClass: `${o}-`,
                    currentClass: `${o}-current`,
                    totalClass: `${o}-total`,
                    hiddenClass: `${o}-hidden`,
                    progressbarFillClass: `${o}-progressbar-fill`,
                    progressbarOppositeClass: `${o}-progressbar-opposite`,
                    clickableClass: `${o}-clickable`,
                    lockClass: `${o}-lock`,
                    horizontalClass: `${o}-horizontal`,
                    verticalClass: `${o}-vertical`,
                    paginationDisabledClass: `${o}-disabled`
                }
            }), t.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let r = 0;

            function l() {
                return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
            }

            function d(e, i) {
                const {
                    bulletActiveClass: s
                } = t.params.pagination;
                e[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
            }

            function c() {
                const e = t.rtl,
                    i = t.params.pagination;
                if (l()) return;
                const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    o = t.pagination.$el;
                let c;
                const h = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? (c = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), c > s - 1 - 2 * t.loopedSlides && (c -= s - 2 * t.loopedSlides), c > h - 1 && (c -= h), c < 0 && "bullets" !== t.params.paginationType && (c = h + c)) : c = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    const s = t.pagination.bullets;
                    let n, l, h;
                    if (i.dynamicBullets && (a = s.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), o.css(t.isHorizontal() ? "width" : "height", a * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (r += c - (t.previousIndex - t.loopedSlides || 0), r > i.dynamicMainBullets - 1 ? r = i.dynamicMainBullets - 1 : r < 0 && (r = 0)), n = Math.max(c - r, 0), l = n + (Math.min(s.length, i.dynamicMainBullets) - 1), h = (l + n) / 2), s.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${i.bulletActiveClass}${e}`)).join(" ")), o.length > 1) s.each((e => {
                        const t = g(e),
                            s = t.index();
                        s === c && t.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= n && s <= l && t.addClass(`${i.bulletActiveClass}-main`), s === n && d(t, "prev"), s === l && d(t, "next"))
                    }));
                    else {
                        const e = s.eq(c),
                            o = e.index();
                        if (e.addClass(i.bulletActiveClass), i.dynamicBullets) {
                            const e = s.eq(n),
                                a = s.eq(l);
                            for (let e = n; e <= l; e += 1) s.eq(e).addClass(`${i.bulletActiveClass}-main`);
                            if (t.params.loop)
                                if (o >= s.length) {
                                    for (let e = i.dynamicMainBullets; e >= 0; e -= 1) s.eq(s.length - e).addClass(`${i.bulletActiveClass}-main`);
                                    s.eq(s.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                                } else d(e, "prev"), d(a, "next");
                            else d(e, "prev"), d(a, "next")
                        }
                    }
                    if (i.dynamicBullets) {
                        const n = Math.min(s.length, i.dynamicMainBullets + 4),
                            o = (a * n - a) / 2 - h * a,
                            r = e ? "right" : "left";
                        s.css(t.isHorizontal() ? r : "top", `${o}px`)
                    }
                }
                if ("fraction" === i.type && (o.find(Q(i.currentClass)).text(i.formatFractionCurrent(c + 1)), o.find(Q(i.totalClass)).text(i.formatFractionTotal(h))), "progressbar" === i.type) {
                    let e;
                    e = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const s = (c + 1) / h;
                    let n = 1,
                        a = 1;
                    "horizontal" === e ? n = s : a = s, o.find(Q(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`).transition(t.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (o.html(i.renderCustom(t, c + 1, h)), n("paginationRender", o[0])) : n("paginationUpdate", o[0]), t.params.watchOverflow && t.enabled && o[t.isLocked ? "addClass" : "removeClass"](i.lockClass)
            }

            function h() {
                const e = t.params.pagination;
                if (l()) return;
                const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    s = t.pagination.$el;
                let o = "";
                if ("bullets" === e.type) {
                    let n = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && n > i && (n = i);
                    for (let i = 0; i < n; i += 1) e.renderBullet ? o += e.renderBullet.call(t, i, e.bulletClass) : o += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                    s.html(o), t.pagination.bullets = s.find(Q(e.bulletClass))
                }
                "fraction" === e.type && (o = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, s.html(o)), "progressbar" === e.type && (o = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, s.html(o)), "custom" !== e.type && n("paginationRender", t.pagination.$el[0])
            }

            function u() {
                t.params.pagination = U(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                const e = t.params.pagination;
                if (!e.el) return;
                let i = g(e.el);
                0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el), i.length > 1 && (i = i.filter((e => g(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), r = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", Q(e.bulletClass), (function(e) {
                    e.preventDefault();
                    let i = g(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                })), Object.assign(t.pagination, {
                    $el: i,
                    el: i[0]
                }), t.enabled || i.addClass(e.lockClass))
            }

            function p() {
                const e = t.params.pagination;
                if (l()) return;
                const i = t.pagination.$el;
                i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", Q(e.bulletClass))
            }
            s("init", (() => {
                !1 === t.params.pagination.enabled ? m() : (u(), h(), c())
            })), s("activeIndexChange", (() => {
                (t.params.loop || void 0 === t.snapIndex) && c()
            })), s("snapIndexChange", (() => {
                t.params.loop || c()
            })), s("slidesLengthChange", (() => {
                t.params.loop && (h(), c())
            })), s("snapGridLengthChange", (() => {
                t.params.loop || (h(), c())
            })), s("destroy", (() => {
                p()
            })), s("enable disable", (() => {
                const {
                    $el: e
                } = t.pagination;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
            })), s("lock unlock", (() => {
                c()
            })), s("click", ((e, i) => {
                const s = i.target,
                    {
                        $el: o
                    } = t.pagination;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && o && o.length > 0 && !g(s).hasClass(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                    const e = o.hasClass(t.params.pagination.hiddenClass);
                    n(!0 === e ? "paginationShow" : "paginationHide"), o.toggleClass(t.params.pagination.hiddenClass)
                }
            }));
            const m = () => {
                t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), p()
            };
            Object.assign(t.pagination, {
                enable: () => {
                    t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), u(), h(), c()
                },
                disable: m,
                render: h,
                update: c,
                init: u,
                destroy: p
            })
        }

        function ee(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: n
            } = e;
            i({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), t.lazy = {};
            let o = !1,
                r = !1;

            function l(e, i) {
                void 0 === i && (i = !0);
                const s = t.params.lazy;
                if (void 0 === e) return;
                if (0 === t.slides.length) return;
                const o = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                    a = o.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
                !o.hasClass(s.elementClass) || o.hasClass(s.loadedClass) || o.hasClass(s.loadingClass) || a.push(o[0]), 0 !== a.length && a.each((e => {
                    const a = g(e);
                    a.addClass(s.loadingClass);
                    const r = a.attr("data-background"),
                        d = a.attr("data-src"),
                        c = a.attr("data-srcset"),
                        h = a.attr("data-sizes"),
                        u = a.parent("picture");
                    t.loadImage(a[0], d || r, c, h, !1, (() => {
                        if (null != t && t && (!t || t.params) && !t.destroyed) {
                            if (r ? (a.css("background-image", `url("${r}")`), a.removeAttr("data-background")) : (c && (a.attr("srcset", c), a.removeAttr("data-srcset")), h && (a.attr("sizes", h), a.removeAttr("data-sizes")), u.length && u.children("source").each((e => {
                                    const t = g(e);
                                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                })), d && (a.attr("src", d), a.removeAttr("data-src"))), a.addClass(s.loadedClass).removeClass(s.loadingClass), o.find(`.${s.preloaderClass}`).remove(), t.params.loop && i) {
                                const e = o.attr("data-swiper-slide-index");
                                o.hasClass(t.params.slideDuplicateClass) ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                            n("lazyImageReady", o[0], a[0]), t.params.autoHeight && t.updateAutoHeight()
                        }
                    })), n("lazyImageLoad", o[0], a[0])
                }))
            }

            function d() {
                const {
                    $wrapperEl: e,
                    params: i,
                    slides: s,
                    activeIndex: n
                } = t, o = t.virtual && i.virtual.enabled, a = i.lazy;
                let d = i.slidesPerView;

                function c(t) {
                    if (o) {
                        if (e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                    } else if (s[t]) return !0;
                    return !1
                }

                function h(e) {
                    return o ? g(e).attr("data-swiper-slide-index") : g(e).index()
                }
                if ("auto" === d && (d = 0), r || (r = !0), t.params.watchSlidesProgress) e.children(`.${i.slideVisibleClass}`).each((e => {
                    l(o ? g(e).attr("data-swiper-slide-index") : g(e).index())
                }));
                else if (d > 1)
                    for (let e = n; e < n + d; e += 1) c(e) && l(e);
                else l(n);
                if (a.loadPrevNext)
                    if (d > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
                        const e = a.loadPrevNextAmount,
                            t = Math.ceil(d),
                            i = Math.min(n + t + Math.max(e, t), s.length),
                            o = Math.max(n - Math.max(t, e), 0);
                        for (let e = n + t; e < i; e += 1) c(e) && l(e);
                        for (let e = o; e < n; e += 1) c(e) && l(e)
                    } else {
                        const t = e.children(`.${i.slideNextClass}`);
                        t.length > 0 && l(h(t));
                        const s = e.children(`.${i.slidePrevClass}`);
                        s.length > 0 && l(h(s))
                    }
            }

            function c() {
                const e = a();
                if (!t || t.destroyed) return;
                const i = t.params.lazy.scrollingElement ? g(t.params.lazy.scrollingElement) : g(e),
                    s = i[0] === e,
                    n = s ? e.innerWidth : i[0].offsetWidth,
                    r = s ? e.innerHeight : i[0].offsetHeight,
                    l = t.$el.offset(),
                    {
                        rtlTranslate: h
                    } = t;
                let u = !1;
                h && (l.left -= t.$el[0].scrollLeft);
                const p = [
                    [l.left, l.top],
                    [l.left + t.width, l.top],
                    [l.left, l.top + t.height],
                    [l.left + t.width, l.top + t.height]
                ];
                for (let e = 0; e < p.length; e += 1) {
                    const t = p[e];
                    if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= r) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        u = !0
                    }
                }
                const m = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                u ? (d(), i.off("scroll", c, m)) : o || (o = !0, i.on("scroll", c, m))
            }
            s("beforeInit", (() => {
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
            })), s("init", (() => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : d())
            })), s("scroll", (() => {
                t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && d()
            })), s("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? c() : d())
            })), s("transitionStart", (() => {
                t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !r) && (t.params.lazy.checkInView ? c() : d())
            })), s("transitionEnd", (() => {
                t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? c() : d())
            })), s("slideChange", (() => {
                const {
                    lazy: e,
                    cssMode: i,
                    watchSlidesProgress: s,
                    touchReleaseOnEdges: n,
                    resistanceRatio: o
                } = t.params;
                e.enabled && (i || s && (n || 0 === o)) && d()
            })), s("destroy", (() => {
                t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
            })), Object.assign(t.lazy, {
                load: d,
                loadInSlide: l
            })
        }

        function te(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            });
            let n = null;

            function o(e) {
                const t = n;
                0 !== t.length && (t.html(""), t.html(e))
            }

            function a(e) {
                e.attr("tabIndex", "0")
            }

            function r(e) {
                e.attr("tabIndex", "-1")
            }

            function l(e, t) {
                e.attr("role", t)
            }

            function d(e, t) {
                e.attr("aria-roledescription", t)
            }

            function c(e, t) {
                e.attr("aria-label", t)
            }

            function h(e) {
                e.attr("aria-disabled", !0)
            }

            function u(e) {
                e.attr("aria-disabled", !1)
            }

            function p(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const i = t.params.a11y,
                    s = g(e.target);
                t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? o(i.lastSlideMessage) : o(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? o(i.firstSlideMessage) : o(i.prevSlideMessage)), t.pagination && s.is(Q(t.params.pagination.bulletClass)) && s[0].click()
            }

            function m() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function f() {
                return m() && t.params.pagination.clickable
            }
            const v = (e, t, i) => {
                    a(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", p)), c(e, i),
                        function(e, t) {
                            e.attr("aria-controls", t)
                        }(e, t)
                },
                y = e => {
                    const i = e.target.closest(`.${t.params.slideClass}`);
                    if (!i || !t.slides.includes(i)) return;
                    const s = t.slides.indexOf(i) === t.activeIndex,
                        n = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
                    s || n || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(i), 0))
                },
                b = () => {
                    const e = t.params.a11y;
                    e.itemRoleDescriptionMessage && d(g(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(g(t.slides), e.slideRole);
                    const i = t.params.loop ? t.slides.filter((e => !e.classList.contains(t.params.slideDuplicateClass))).length : t.slides.length;
                    e.slideLabelMessage && t.slides.each(((s, n) => {
                        const o = g(s),
                            a = t.params.loop ? parseInt(o.attr("data-swiper-slide-index"), 10) : n;
                        c(o, e.slideLabelMessage.replace(/\{\{index\}\}/, a + 1).replace(/\{\{slidesLength\}\}/, i))
                    }))
                };
            s("beforeInit", (() => {
                n = g(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            })), s("afterInit", (() => {
                t.params.a11y.enabled && (() => {
                    const e = t.params.a11y;
                    t.$el.append(n);
                    const i = t.$el;
                    e.containerRoleDescriptionMessage && d(i, e.containerRoleDescriptionMessage), e.containerMessage && c(i, e.containerMessage);
                    const s = t.$wrapperEl,
                        o = e.id || s.attr("id") || `swiper-wrapper-${a=16,void 0===a&&(a=16),"x".repeat(a).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;
                    var a;
                    const r = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
                    var l;
                    let h, u;
                    l = o, s.attr("id", l),
                        function(e, t) {
                            e.attr("aria-live", t)
                        }(s, r), b(), t.navigation && t.navigation.$nextEl && (h = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), h && h.length && v(h, o, e.nextSlideMessage), u && u.length && v(u, o, e.prevSlideMessage), f() && t.pagination.$el.on("keydown", Q(t.params.pagination.bulletClass), p), t.$el.on("focus", y, !0)
                })()
            })), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
                t.params.a11y.enabled && b()
            })), s("fromEdge toEdge afterInit lock unlock", (() => {
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    const {
                        $nextEl: e,
                        $prevEl: i
                    } = t.navigation;
                    i && i.length > 0 && (t.isBeginning ? (h(i), r(i)) : (u(i), a(i))), e && e.length > 0 && (t.isEnd ? (h(e), r(e)) : (u(e), a(e)))
                }()
            })), s("paginationUpdate", (() => {
                t.params.a11y.enabled && function() {
                    const e = t.params.a11y;
                    m() && t.pagination.bullets.each((i => {
                        const s = g(i);
                        t.params.pagination.clickable && (a(s), t.params.pagination.renderBullet || (l(s, "button"), c(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1)))), s.is(`.${t.params.pagination.bulletActiveClass}`) ? s.attr("aria-current", "true") : s.removeAttr("aria-current")
                    }))
                }()
            })), s("destroy", (() => {
                t.params.a11y.enabled && function() {
                    let e, i;
                    n && n.length > 0 && n.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && e.off("keydown", p), i && i.off("keydown", p), f() && t.pagination.$el.off("keydown", Q(t.params.pagination.bulletClass), p), t.$el.off("focus", y, !0)
                }()
            }))
        }

        function ie(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let n = !1,
                o = {};
            const r = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                l = e => {
                    const t = a();
                    let i;
                    i = e ? new URL(e) : t.location;
                    const s = i.pathname.slice(1).split("/").filter((e => "" !== e)),
                        n = s.length;
                    return {
                        key: s[n - 2],
                        value: s[n - 1]
                    }
                },
                d = (e, i) => {
                    const s = a();
                    if (!n || !t.params.history.enabled) return;
                    let o;
                    o = t.params.url ? new URL(t.params.url) : s.location;
                    const l = t.slides.eq(i);
                    let d = r(l.attr("data-history"));
                    if (t.params.history.root.length > 0) {
                        let i = t.params.history.root;
                        "/" === i[i.length - 1] && (i = i.slice(0, i.length - 1)), d = `${i}/${e}/${d}`
                    } else o.pathname.includes(e) || (d = `${e}/${d}`);
                    t.params.history.keepQuery && (d += o.search);
                    const c = s.history.state;
                    c && c.value === d || (t.params.history.replaceState ? s.history.replaceState({
                        value: d
                    }, null, d) : s.history.pushState({
                        value: d
                    }, null, d))
                },
                c = (e, i, s) => {
                    if (i)
                        for (let n = 0, o = t.slides.length; n < o; n += 1) {
                            const o = t.slides.eq(n);
                            if (r(o.attr("data-history")) === i && !o.hasClass(t.params.slideDuplicateClass)) {
                                const i = o.index();
                                t.slideTo(i, e, s)
                            }
                        } else t.slideTo(0, e, s)
                },
                h = () => {
                    o = l(t.params.url), c(t.params.speed, o.value, !1)
                };
            s("init", (() => {
                t.params.history.enabled && (() => {
                    const e = a();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                        n = !0, o = l(t.params.url), (o.key || o.value) && (c(0, o.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", h))
                    }
                })()
            })), s("destroy", (() => {
                t.params.history.enabled && (() => {
                    const e = a();
                    t.params.history.replaceState || e.removeEventListener("popstate", h)
                })()
            })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
                n && d(t.params.history.key, t.activeIndex)
            })), s("slideChange", (() => {
                n && t.params.cssMode && d(t.params.history.key, t.activeIndex)
            }))
        }

        function se(e) {
            let {
                swiper: t,
                extendParams: i,
                emit: s,
                on: o
            } = e, r = !1;
            const l = n(),
                d = a();
            i({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const c = () => {
                    s("hashChange");
                    const e = l.location.hash.replace("#", "");
                    if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                        const i = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                        if (void 0 === i) return;
                        t.slideTo(i)
                    }
                },
                h = () => {
                    if (r && t.params.hashNavigation.enabled)
                        if (t.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), s("hashSet");
                        else {
                            const e = t.slides.eq(t.activeIndex),
                                i = e.attr("data-hash") || e.attr("data-history");
                            l.location.hash = i || "", s("hashSet")
                        }
                };
            o("init", (() => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    r = !0;
                    const e = l.location.hash.replace("#", "");
                    if (e) {
                        const i = 0;
                        for (let s = 0, n = t.slides.length; s < n; s += 1) {
                            const n = t.slides.eq(s);
                            if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(t.params.slideDuplicateClass)) {
                                const e = n.index();
                                t.slideTo(e, i, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                    t.params.hashNavigation.watchState && g(d).on("hashchange", c)
                })()
            })), o("destroy", (() => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && g(d).off("hashchange", c)
            })), o("transitionEnd _freeModeNoMomentumRelease", (() => {
                r && h()
            })), o("slideChange", (() => {
                r && t.params.cssMode && h()
            }))
        }

        function ne(e) {
            let t, {
                swiper: i,
                extendParams: s,
                on: o,
                emit: a
            } = e;

            function r() {
                if (!i.size) return i.autoplay.running = !1, void(i.autoplay.paused = !1);
                const e = i.slides.eq(i.activeIndex);
                let s = i.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (s = e.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(t), t = m((() => {
                    let e;
                    i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? d() : (e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), a("autoplay")) : (e = i.slidePrev(i.params.speed, !0, !0), a("autoplay")) : i.params.loop ? (i.loopFix(), e = i.slideNext(i.params.speed, !0, !0), a("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? d() : (e = i.slideTo(0, i.params.speed, !0, !0), a("autoplay")) : (e = i.slideNext(i.params.speed, !0, !0), a("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === e) && r()
                }), s)
            }

            function l() {
                return void 0 === t && !i.autoplay.running && (i.autoplay.running = !0, a("autoplayStart"), r(), !0)
            }

            function d() {
                return !!i.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), i.autoplay.running = !1, a("autoplayStop"), !0)
            }

            function c(e) {
                i.autoplay.running && (i.autoplay.paused || (t && clearTimeout(t), i.autoplay.paused = !0, 0 !== e && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                    i.$wrapperEl[0].addEventListener(e, u)
                })) : (i.autoplay.paused = !1, r())))
            }

            function h() {
                const e = n();
                "hidden" === e.visibilityState && i.autoplay.running && c(), "visible" === e.visibilityState && i.autoplay.paused && (r(), i.autoplay.paused = !1)
            }

            function u(e) {
                i && !i.destroyed && i.$wrapperEl && e.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                    i.$wrapperEl[0].removeEventListener(e, u)
                })), i.autoplay.paused = !1, i.autoplay.running ? r() : d())
            }

            function p() {
                i.params.autoplay.disableOnInteraction ? d() : (a("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                    i.$wrapperEl[0].removeEventListener(e, u)
                }))
            }

            function g() {
                i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, a("autoplayResume"), r())
            }
            i.autoplay = {
                running: !1,
                paused: !1
            }, s({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), o("init", (() => {
                i.params.autoplay.enabled && (l(), n().addEventListener("visibilitychange", h), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", p), i.$el.on("mouseleave", g)))
            })), o("beforeTransitionStart", ((e, t, s) => {
                i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : d())
            })), o("sliderFirstMove", (() => {
                i.autoplay.running && (i.params.autoplay.disableOnInteraction ? d() : c())
            })), o("touchEnd", (() => {
                i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && r()
            })), o("destroy", (() => {
                i.$el.off("mouseenter", p), i.$el.off("mouseleave", g), i.autoplay.running && d(), n().removeEventListener("visibilitychange", h)
            })), Object.assign(i.autoplay, {
                pause: c,
                run: r,
                start: l,
                stop: d
            })
        }

        function oe(e) {
            const {
                effect: t,
                swiper: i,
                on: s,
                setTranslate: n,
                setTransition: o,
                overwriteParams: a,
                perspective: r,
                recreateShadows: l,
                getEffectParams: d
            } = e;
            let c;
            s("beforeInit", (() => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`), r && r() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                const e = a ? a() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e)
            })), s("setTranslate", (() => {
                i.params.effect === t && n()
            })), s("setTransition", ((e, s) => {
                i.params.effect === t && o(s)
            })), s("transitionEnd", (() => {
                if (i.params.effect === t && l) {
                    if (!d || !d().slideShadows) return;
                    i.slides.each((e => {
                        i.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    })), l()
                }
            })), s("virtualUpdate", (() => {
                i.params.effect === t && (i.slides.length || (c = !0), requestAnimationFrame((() => {
                    c && i.slides && i.slides.length && (n(), c = !1)
                })))
            }))
        }

        function ae(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        function re(e) {
            let {
                swiper: t,
                duration: i,
                transformEl: s,
                allSlides: n
            } = e;
            const {
                slides: o,
                activeIndex: a,
                $wrapperEl: r
            } = t;
            if (t.params.virtualTranslate && 0 !== i) {
                let e, i = !1;
                e = n ? s ? o.find(s) : o : s ? o.eq(a).find(s) : o.eq(a), e.transitionEnd((() => {
                    if (i) return;
                    if (!t || t.destroyed) return;
                    i = !0, t.animating = !1;
                    const e = ["webkitTransitionEnd", "transitionend"];
                    for (let t = 0; t < e.length; t += 1) r.trigger(e[t])
                }))
            }
        }

        function le(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), oe({
                effect: "fade",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e
                    } = t, i = t.params.fadeEffect;
                    for (let s = 0; s < e.length; s += 1) {
                        const e = t.slides.eq(s);
                        let n = -e[0].swiperSlideOffset;
                        t.params.virtualTranslate || (n -= t.translate);
                        let o = 0;
                        t.isHorizontal() || (o = n, n = 0);
                        const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                        ae(i, e).css({
                            opacity: a
                        }).transform(`translate3d(${n}px, ${o}px, 0px)`)
                    }
                },
                setTransition: e => {
                    const {
                        transformEl: i
                    } = t.params.fadeEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e), re({
                        swiper: t,
                        duration: e,
                        transformEl: i,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }

        function de(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            const n = (e, t, i) => {
                let s = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    n = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === s.length && (s = g(`<div class="swiper-slide-shadow-${i?"left":"top"}"></div>`), e.append(s)), 0 === n.length && (n = g(`<div class="swiper-slide-shadow-${i?"right":"bottom"}"></div>`), e.append(n)), s.length && (s[0].style.opacity = Math.max(-t, 0)), n.length && (n[0].style.opacity = Math.max(t, 0))
            };
            oe({
                effect: "cube",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        $el: e,
                        $wrapperEl: i,
                        slides: s,
                        width: o,
                        height: a,
                        rtlTranslate: r,
                        size: l,
                        browser: d
                    } = t, c = t.params.cubeEffect, h = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
                    let p, m = 0;
                    c.shadow && (h ? (p = i.find(".swiper-cube-shadow"), 0 === p.length && (p = g('<div class="swiper-cube-shadow"></div>'), i.append(p)), p.css({
                        height: `${o}px`
                    })) : (p = e.find(".swiper-cube-shadow"), 0 === p.length && (p = g('<div class="swiper-cube-shadow"></div>'), e.append(p))));
                    for (let e = 0; e < s.length; e += 1) {
                        const t = s.eq(e);
                        let i = e;
                        u && (i = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let o = 90 * i,
                            a = Math.floor(o / 360);
                        r && (o = -o, a = Math.floor(-o / 360));
                        const d = Math.max(Math.min(t[0].progress, 1), -1);
                        let p = 0,
                            g = 0,
                            f = 0;
                        i % 4 == 0 ? (p = 4 * -a * l, f = 0) : (i - 1) % 4 == 0 ? (p = 0, f = 4 * -a * l) : (i - 2) % 4 == 0 ? (p = l + 4 * a * l, f = l) : (i - 3) % 4 == 0 && (p = -l, f = 3 * l + 4 * l * a), r && (p = -p), h || (g = p, p = 0);
                        const v = `rotateX(${h?0:-o}deg) rotateY(${h?o:0}deg) translate3d(${p}px, ${g}px, ${f}px)`;
                        d <= 1 && d > -1 && (m = 90 * i + 90 * d, r && (m = 90 * -i - 90 * d)), t.transform(v), c.slideShadows && n(t, d, h)
                    }
                    if (i.css({
                            "-webkit-transform-origin": `50% 50% -${l/2}px`,
                            "transform-origin": `50% 50% -${l/2}px`
                        }), c.shadow)
                        if (h) p.transform(`translate3d(0px, ${o/2+c.shadowOffset}px, ${-o/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                        else {
                            const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                                t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                                i = c.shadowScale,
                                s = c.shadowScale / t,
                                n = c.shadowOffset;
                            p.transform(`scale3d(${i}, 1, ${s}) translate3d(0px, ${a/2+n}px, ${-a/2/s}px) rotateX(-90deg)`)
                        }
                    const f = d.isSafari || d.isWebView ? -l / 2 : 0;
                    i.transform(`translate3d(0px,0,${f}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`), i[0].style.setProperty("--swiper-cube-translate-z", `${f}px`)
                },
                setTransition: e => {
                    const {
                        $el: i,
                        slides: s
                    } = t;
                    s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
                },
                recreateShadows: () => {
                    const e = t.isHorizontal();
                    t.slides.each((t => {
                        const i = Math.max(Math.min(t.progress, 1), -1);
                        n(g(t), i, e)
                    }))
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }

        function ce(e, t, i) {
            const s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
                n = e.transformEl ? t.find(e.transformEl) : t;
            let o = n.children(`.${s}`);
            return o.length || (o = g(`<div class="swiper-slide-shadow${i?`-${i}`:""}"></div>`), n.append(o)), o
        }

        function he(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            });
            const n = (e, i, s) => {
                let n = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    o = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === n.length && (n = ce(s, e, t.isHorizontal() ? "left" : "top")), 0 === o.length && (o = ce(s, e, t.isHorizontal() ? "right" : "bottom")), n.length && (n[0].style.opacity = Math.max(-i, 0)), o.length && (o[0].style.opacity = Math.max(i, 0))
            };
            oe({
                effect: "flip",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e,
                        rtlTranslate: i
                    } = t, s = t.params.flipEffect;
                    for (let o = 0; o < e.length; o += 1) {
                        const a = e.eq(o);
                        let r = a[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(a[0].progress, 1), -1));
                        const l = a[0].swiperSlideOffset;
                        let d = -180 * r,
                            c = 0,
                            h = t.params.cssMode ? -l - t.translate : -l,
                            u = 0;
                        t.isHorizontal() ? i && (d = -d) : (u = h, h = 0, c = -d, d = 0), a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, s.slideShadows && n(a, r, s);
                        const p = `translate3d(${h}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                        ae(s, a).transform(p)
                    }
                },
                setTransition: e => {
                    const {
                        transformEl: i
                    } = t.params.flipEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), re({
                        swiper: t,
                        duration: e,
                        transformEl: i
                    })
                },
                recreateShadows: () => {
                    const e = t.params.flipEffect;
                    t.slides.each((i => {
                        const s = g(i);
                        let o = s[0].progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(i.progress, 1), -1)), n(s, o, e)
                    }))
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }

        function ue(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), oe({
                effect: "coverflow",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        width: e,
                        height: i,
                        slides: s,
                        slidesSizesGrid: n
                    } = t, o = t.params.coverflowEffect, a = t.isHorizontal(), r = t.translate, l = a ? e / 2 - r : i / 2 - r, d = a ? o.rotate : -o.rotate, c = o.depth;
                    for (let e = 0, t = s.length; e < t; e += 1) {
                        const t = s.eq(e),
                            i = n[e],
                            r = (l - t[0].swiperSlideOffset - i / 2) / i,
                            h = "function" == typeof o.modifier ? o.modifier(r) : r * o.modifier;
                        let u = a ? d * h : 0,
                            p = a ? 0 : d * h,
                            g = -c * Math.abs(h),
                            m = o.stretch;
                        "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(o.stretch) / 100 * i);
                        let f = a ? 0 : m * h,
                            v = a ? m * h : 0,
                            y = 1 - (1 - o.scale) * Math.abs(h);
                        Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(g) < .001 && (g = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(y) < .001 && (y = 0);
                        const b = `translate3d(${v}px,${f}px,${g}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${y})`;
                        if (ae(o, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(h)), o.slideShadows) {
                            let e = a ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                i = a ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = ce(o, t, a ? "left" : "top")), 0 === i.length && (i = ce(o, t, a ? "right" : "bottom")), e.length && (e[0].style.opacity = h > 0 ? h : 0), i.length && (i[0].style.opacity = -h > 0 ? -h : 0)
                        }
                    }
                },
                setTransition: e => {
                    const {
                        transformEl: i
                    } = t.params.coverflowEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0
                })
            })
        }

        function pe(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s
            } = e;
            i({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null,
                    rotate: !0
                }
            }), oe({
                effect: "cards",
                swiper: t,
                on: s,
                setTranslate: () => {
                    const {
                        slides: e,
                        activeIndex: i
                    } = t, s = t.params.cardsEffect, {
                        startTranslate: n,
                        isTouched: o
                    } = t.touchEventsData, a = t.translate;
                    for (let r = 0; r < e.length; r += 1) {
                        const l = e.eq(r),
                            d = l[0].progress,
                            c = Math.min(Math.max(d, -4), 4);
                        let h = l[0].swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (h -= e[0].swiperSlideOffset);
                        let u = t.params.cssMode ? -h - t.translate : -h,
                            p = 0;
                        const g = -100 * Math.abs(c);
                        let m = 1,
                            f = -2 * c,
                            v = 8 - .75 * Math.abs(c);
                        const y = t.virtual && t.params.virtual.enabled ? t.virtual.from + r : r,
                            b = (y === i || y === i - 1) && c > 0 && c < 1 && (o || t.params.cssMode) && a < n,
                            w = (y === i || y === i + 1) && c < 0 && c > -1 && (o || t.params.cssMode) && a > n;
                        if (b || w) {
                            const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                            f += -28 * c * e, m += -.5 * e, v += 96 * e, p = -25 * e * Math.abs(c) + "%"
                        }
                        if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                            const e = p;
                            p = u, u = e
                        }
                        const C = c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                            S = `\n        translate3d(${u}, ${p}, ${g}px)\n        rotateZ(${s.rotate?f:0}deg)\n        scale(${C})\n      `;
                        if (s.slideShadows) {
                            let e = l.find(".swiper-slide-shadow");
                            0 === e.length && (e = ce(s, l)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                        }
                        l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length, ae(s, l).transform(S)
                    }
                },
                setTransition: e => {
                    const {
                        transformEl: i
                    } = t.params.cardsEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), re({
                        swiper: t,
                        duration: e,
                        transformEl: i
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }
        var ge = i(102),
            me = i.n(ge),
            fe = function() {
                return fe = Object.assign || function(e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                        for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, fe.apply(this, arguments)
            },
            ve = function() {
                function e(e) {
                    return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"], this.selector = this._getSelector(e), this.firstElement = this._getFirstEl(), this
                }
                return e.generateUUID = function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16)
                    }))
                }, e.prototype._getSelector = function(e, t) {
                    return void 0 === t && (t = document), "string" != typeof e ? e : (t = t || document, "#" === e.substring(0, 1) ? t.querySelector(e) : t.querySelectorAll(e))
                }, e.prototype._each = function(e) {
                    return this.selector ? (void 0 !== this.selector.length ? [].forEach.call(this.selector, e) : e(this.selector, 0), this) : this
                }, e.prototype._setCssVendorPrefix = function(e, t, i) {
                    var s = t.replace(/-([a-z])/gi, (function(e, t) {
                        return t.toUpperCase()
                    })); - 1 !== this.cssVenderPrefixes.indexOf(s) ? (e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i, e.style["webkit" + s] = i, e.style["moz" + s] = i, e.style["ms" + s] = i, e.style["o" + s] = i) : e.style[s] = i
                }, e.prototype._getFirstEl = function() {
                    return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector
                }, e.prototype.isEventMatched = function(e, t) {
                    var i = t.split(".");
                    return e.split(".").filter((function(e) {
                        return e
                    })).every((function(e) {
                        return -1 !== i.indexOf(e)
                    }))
                }, e.prototype.attr = function(e, t) {
                    return void 0 === t ? this.firstElement ? this.firstElement.getAttribute(e) : "" : (this._each((function(i) {
                        i.setAttribute(e, t)
                    })), this)
                }, e.prototype.find = function(e) {
                    return ye(this._getSelector(e, this.selector))
                }, e.prototype.first = function() {
                    return this.selector && void 0 !== this.selector.length ? ye(this.selector[0]) : ye(this.selector)
                }, e.prototype.eq = function(e) {
                    return ye(this.selector[e])
                }, e.prototype.parent = function() {
                    return ye(this.selector.parentElement)
                }, e.prototype.get = function() {
                    return this._getFirstEl()
                }, e.prototype.removeAttr = function(e) {
                    var t = e.split(" ");
                    return this._each((function(e) {
                        t.forEach((function(t) {
                            return e.removeAttribute(t)
                        }))
                    })), this
                }, e.prototype.wrap = function(e) {
                    if (!this.firstElement) return this;
                    var t = document.createElement("div");
                    return t.className = e, this.firstElement.parentNode.insertBefore(t, this.firstElement), this.firstElement.parentNode.removeChild(this.firstElement), t.appendChild(this.firstElement), this
                }, e.prototype.addClass = function(e) {
                    return void 0 === e && (e = ""), this._each((function(t) {
                        e.split(" ").forEach((function(e) {
                            e && t.classList.add(e)
                        }))
                    })), this
                }, e.prototype.removeClass = function(e) {
                    return this._each((function(t) {
                        e.split(" ").forEach((function(e) {
                            e && t.classList.remove(e)
                        }))
                    })), this
                }, e.prototype.hasClass = function(e) {
                    return !!this.firstElement && this.firstElement.classList.contains(e)
                }, e.prototype.hasAttribute = function(e) {
                    return !!this.firstElement && this.firstElement.hasAttribute(e)
                }, e.prototype.toggleClass = function(e) {
                    return this.firstElement ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this) : this
                }, e.prototype.css = function(e, t) {
                    var i = this;
                    return this._each((function(s) {
                        i._setCssVendorPrefix(s, e, t)
                    })), this
                }, e.prototype.on = function(t, i) {
                    var s = this;
                    return this.selector ? (t.split(" ").forEach((function(t) {
                        Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []), e.eventListeners[t].push(i), s.selector.addEventListener(t.split(".")[0], i)
                    })), this) : this
                }, e.prototype.once = function(e, t) {
                    var i = this;
                    return this.on(e, (function() {
                        i.off(e), t(e)
                    })), this
                }, e.prototype.off = function(t) {
                    var i = this;
                    return this.selector ? (Object.keys(e.eventListeners).forEach((function(s) {
                        i.isEventMatched(t, s) && (e.eventListeners[s].forEach((function(e) {
                            i.selector.removeEventListener(s.split(".")[0], e)
                        })), e.eventListeners[s] = [])
                    })), this) : this
                }, e.prototype.trigger = function(e, t) {
                    if (!this.firstElement) return this;
                    var i = new CustomEvent(e.split(".")[0], {
                        detail: t || null
                    });
                    return this.firstElement.dispatchEvent(i), this
                }, e.prototype.load = function(e) {
                    var t = this;
                    return fetch(e).then((function(e) {
                        t.selector.innerHTML = e
                    })), this
                }, e.prototype.html = function(e) {
                    return void 0 === e ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each((function(t) {
                        t.innerHTML = e
                    })), this)
                }, e.prototype.append = function(e) {
                    return this._each((function(t) {
                        "string" == typeof e ? t.insertAdjacentHTML("beforeend", e) : t.appendChild(e)
                    })), this
                }, e.prototype.prepend = function(e) {
                    return this._each((function(t) {
                        t.insertAdjacentHTML("afterbegin", e)
                    })), this
                }, e.prototype.remove = function() {
                    return this._each((function(e) {
                        e.parentNode.removeChild(e)
                    })), this
                }, e.prototype.empty = function() {
                    return this._each((function(e) {
                        e.innerHTML = ""
                    })), this
                }, e.prototype.scrollTop = function(e) {
                    return void 0 !== e ? (document.body.scrollTop = e, document.documentElement.scrollTop = e, this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }, e.prototype.scrollLeft = function(e) {
                    return void 0 !== e ? (document.body.scrollLeft = e, document.documentElement.scrollLeft = e, this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
                }, e.prototype.offset = function() {
                    if (!this.firstElement) return {
                        left: 0,
                        top: 0
                    };
                    var e = this.firstElement.getBoundingClientRect(),
                        t = ye("body").style().marginLeft;
                    return {
                        left: e.left - parseFloat(t) + this.scrollLeft(),
                        top: e.top + this.scrollTop()
                    }
                }, e.prototype.style = function() {
                    return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
                }, e.prototype.width = function() {
                    var e = this.style();
                    return this.firstElement.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
                }, e.prototype.height = function() {
                    var e = this.style();
                    return this.firstElement.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom)
                }, e.eventListeners = {}, e
            }();

        function ye(e) {
            return function() {
                if ("function" == typeof window.CustomEvent) return !1;
                window.CustomEvent = function(e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                }
            }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), new ve(e)
        }
        var be = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];

        function we(e) {
            return "href" === e ? "src" : e = (e = (e = e.replace("data-", "")).charAt(0).toLowerCase() + e.slice(1)).replace(/-([a-z])/g, (function(e) {
                return e[1].toUpperCase()
            }))
        }
        var Ce = function(e, t, i, s) {
                void 0 === i && (i = 0);
                var n = ye(e).attr("data-lg-size") || s;
                if (n) {
                    var o = n.split(",");
                    if (o[1])
                        for (var a = window.innerWidth, r = 0; r < o.length; r++) {
                            var l = o[r];
                            if (parseInt(l.split("-")[2], 10) > a) {
                                n = l;
                                break
                            }
                            r === o.length - 1 && (n = l)
                        }
                    var d = n.split("-"),
                        c = parseInt(d[0], 10),
                        h = parseInt(d[1], 10),
                        u = t.width(),
                        p = t.height() - i,
                        g = Math.min(u, c),
                        m = Math.min(p, h),
                        f = Math.min(g / c, m / h);
                    return {
                        width: c * f,
                        height: h * f
                    }
                }
            },
            Se = function(e, t, i, s, n) {
                if (n) {
                    var o = ye(e).find("img").first();
                    if (o.get()) {
                        var a = t.get().getBoundingClientRect(),
                            r = a.width,
                            l = t.height() - (i + s),
                            d = o.width(),
                            c = o.height(),
                            h = o.style(),
                            u = (r - d) / 2 - o.offset().left + (parseFloat(h.paddingLeft) || 0) + (parseFloat(h.borderLeft) || 0) + ye(window).scrollLeft() + a.left,
                            p = (l - c) / 2 - o.offset().top + (parseFloat(h.paddingTop) || 0) + (parseFloat(h.borderTop) || 0) + ye(window).scrollTop() + i;
                        return "translate3d(" + (u *= -1) + "px, " + (p *= -1) + "px, 0) scale3d(" + d / n.width + ", " + c / n.height + ", 1)"
                    }
                }
            },
            xe = function(e, t, i, s, n, o) {
                var a = "<img " + i + " " + (s ? 'srcset="' + s + '"' : "") + "  " + (n ? 'sizes="' + n + '"' : "") + ' class="lg-object lg-image" data-index="' + e + '" src="' + t + '" />',
                    r = "";
                return o && (r = ("string" == typeof o ? JSON.parse(o) : o).map((function(e) {
                    var t = "";
                    return Object.keys(e).forEach((function(i) {
                        t += " " + i + '="' + e[i] + '"'
                    })), "<source " + t + "></source>"
                }))), "" + r + a
            },
            Te = {
                mode: "lg-slide",
                easing: "ease",
                speed: 400,
                licenseKey: "0000-0000-000-0000",
                height: "100%",
                width: "100%",
                addClass: "",
                startClass: "lg-start-zoom",
                backdropDuration: 300,
                container: "",
                startAnimationDuration: 400,
                zoomFromOrigin: !0,
                hideBarsDelay: 0,
                showBarsAfter: 1e4,
                slideDelay: 0,
                supportLegacyBrowser: !0,
                allowMediaOverlap: !1,
                videoMaxSize: "1280-720",
                loadYouTubePoster: !0,
                defaultCaptionHeight: 0,
                ariaLabelledby: "",
                ariaDescribedby: "",
                closable: !0,
                swipeToClose: !0,
                closeOnTap: !0,
                showCloseIcon: !0,
                showMaximizeIcon: !1,
                loop: !0,
                escKey: !0,
                keyPress: !0,
                controls: !0,
                slideEndAnimation: !0,
                hideControlOnEnd: !1,
                mousewheel: !1,
                getCaptionFromTitleOrAlt: !0,
                appendSubHtmlTo: ".lg-sub-html",
                subHtmlSelectorRelative: !1,
                preload: 2,
                numberOfSlideItemsInDom: 10,
                selector: "",
                selectWithin: "",
                nextHtml: "",
                prevHtml: "",
                index: 0,
                iframeWidth: "100%",
                iframeHeight: "100%",
                iframeMaxWidth: "100%",
                iframeMaxHeight: "100%",
                download: !0,
                counter: !0,
                appendCounterTo: ".lg-toolbar",
                swipeThreshold: 50,
                enableSwipe: !0,
                enableDrag: !0,
                dynamic: !1,
                dynamicEl: [],
                extraProps: [],
                exThumbImage: "",
                isMobile: void 0,
                mobileSettings: {
                    controls: !1,
                    showCloseIcon: !1,
                    download: !1
                },
                plugins: []
            },
            Ee = "lgUpdateSlides",
            Me = "lgPosterClick",
            Ie = "lgBeforeNextSlide",
            $e = "lgBeforePrevSlide",
            Le = 0,
            ke = function() {
                function e(e, t) {
                    if (this.lgOpened = !1, this.index = 0, this.plugins = [], this.lGalleryOn = !1, this.lgBusy = !1, this.currentItemsInDom = [], this.prevScrollTop = 0, this.isDummyImageRemoved = !1, this.dragOrSwipeEnabled = !1, this.mediaContainerPosition = {
                            top: 0,
                            bottom: 0
                        }, !e) return this;
                    if (Le++, this.lgId = Le, this.el = e, this.LGel = ye(e), this.generateSettings(t), this.buildModules(), this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return this.galleryItems = this.getItems(), this.normalizeSettings(), this.init(), this.validateLicense(), this
                }
                return e.prototype.generateSettings = function(e) {
                    if (this.settings = fe(fe({}, Te), e), this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                        var t = fe(fe({}, this.settings.mobileSettings), this.settings.mobileSettings);
                        this.settings = fe(fe({}, this.settings), t)
                    }
                }, e.prototype.normalizeSettings = function() {
                    this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1), this.settings.closable || (this.settings.swipeToClose = !1), this.zoomFromOrigin = this.settings.zoomFromOrigin, this.settings.dynamic && (this.zoomFromOrigin = !1), this.settings.container || (this.settings.container = document.body), this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
                }, e.prototype.init = function() {
                    var e = this;
                    this.addSlideVideoInfo(this.galleryItems), this.buildStructure(), this.LGel.trigger("lgInit", {
                        instance: this
                    }), this.settings.keyPress && this.keyPress(), setTimeout((function() {
                        e.enableDrag(), e.enableSwipe(), e.triggerPosterClick()
                    }), 50), this.arrow(), this.settings.mousewheel && this.mousewheel(), this.settings.dynamic || this.openGalleryOnItemClick()
                }, e.prototype.openGalleryOnItemClick = function() {
                    for (var e = this, t = function(t) {
                            var s = i.items[t],
                                n = ye(s),
                                o = ve.generateUUID();
                            n.attr("data-lg-id", o).on("click.lgcustom-item-" + o, (function(i) {
                                i.preventDefault();
                                var n = e.settings.index || t;
                                e.openGallery(n, s)
                            }))
                        }, i = this, s = 0; s < this.items.length; s++) t(s)
                }, e.prototype.buildModules = function() {
                    var e = this;
                    this.settings.plugins.forEach((function(t) {
                        e.plugins.push(new t(e, ye))
                    }))
                }, e.prototype.validateLicense = function() {
                    this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
                }, e.prototype.getSlideItem = function(e) {
                    return ye(this.getSlideItemId(e))
                }, e.prototype.getSlideItemId = function(e) {
                    return "#lg-item-" + this.lgId + "-" + e
                }, e.prototype.getIdName = function(e) {
                    return e + "-" + this.lgId
                }, e.prototype.getElementById = function(e) {
                    return ye("#" + this.getIdName(e))
                }, e.prototype.manageSingleSlideClassName = function() {
                    this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
                }, e.prototype.buildStructure = function() {
                    var e = this;
                    if (!this.$container || !this.$container.get()) {
                        var t = "",
                            i = "";
                        this.settings.controls && (t = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="Previous slide" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="Next slide" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"), ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                        var s = "";
                        this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                        var n = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "",
                            o = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "",
                            a = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : ""),
                            r = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="Close gallery" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "",
                            l = this.settings.showMaximizeIcon ? '<button type="button" aria-label="Toggle maximize" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "",
                            d = '\n        <div class="' + a + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + n + " " + o + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + s + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + t + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + l + "\n                    " + r + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                        ye(this.settings.container).css("position", "relative").append(d), this.outer = this.getElementById("lg-outer"), this.$lgComponents = this.getElementById("lg-components"), this.$backdrop = this.getElementById("lg-backdrop"), this.$container = this.getElementById("lg-container"), this.$inner = this.getElementById("lg-inner"), this.$content = this.getElementById("lg-content"), this.$toolbar = this.getElementById("lg-toolbar"), this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                        var c = this.settings.mode + " ";
                        this.manageSingleSlideClassName(), this.settings.enableDrag && (c += "lg-grab "), this.outer.addClass(c), this.$inner.css("transition-timing-function", this.settings.easing), this.$inner.css("transition-duration", this.settings.speed + "ms"), this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="Download" download class="lg-download lg-icon"></a>'), this.counter(), ye(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                            e.refreshOnResize()
                        })), this.hideBars(), this.manageCloseGallery(), this.toggleMaximize(), this.initModules()
                    }
                }, e.prototype.refreshOnResize = function() {
                    if (this.lgOpened) {
                        var e = this.galleryItems[this.index].__slideVideoInfo;
                        this.mediaContainerPosition = this.getMediaContainerPosition();
                        var t = this.mediaContainerPosition,
                            i = t.top,
                            s = t.bottom;
                        if (this.currentImageSize = Ce(this.items[this.index], this.outer, i + s, e && this.settings.videoMaxSize), e && this.resizeVideoSlide(this.index, this.currentImageSize), this.zoomFromOrigin && !this.isDummyImageRemoved) {
                            var n = this.getDummyImgStyles(this.currentImageSize);
                            this.outer.find(".lg-current .lg-dummy-img").first().attr("style", n)
                        }
                        this.LGel.trigger("lgContainerResize")
                    }
                }, e.prototype.resizeVideoSlide = function(e, t) {
                    var i = this.getVideoContStyle(t);
                    this.getSlideItem(e).find(".lg-video-cont").attr("style", i)
                }, e.prototype.updateSlides = function(e, t) {
                    if (this.index > e.length - 1 && (this.index = e.length - 1), 1 === e.length && (this.index = 0), e.length) {
                        var i = this.galleryItems[t].src;
                        this.galleryItems = e, this.updateControls(), this.$inner.empty(), this.currentItemsInDom = [];
                        var s = 0;
                        this.galleryItems.some((function(e, t) {
                            return e.src === i && (s = t, !0)
                        })), this.currentItemsInDom = this.organizeSlideItems(s, -1), this.loadContent(s, !0), this.getSlideItem(s).addClass("lg-current"), this.index = s, this.updateCurrentCounter(s), this.LGel.trigger(Ee)
                    } else this.closeGallery()
                }, e.prototype.getItems = function() {
                    if (this.items = [], this.settings.dynamic) return this.settings.dynamicEl || [];
                    if ("this" === this.settings.selector) this.items.push(this.el);
                    else if (this.settings.selector)
                        if ("string" == typeof this.settings.selector)
                            if (this.settings.selectWithin) {
                                var e = ye(this.settings.selectWithin);
                                this.items = e.find(this.settings.selector).get()
                            } else this.items = this.el.querySelectorAll(this.settings.selector);
                    else this.items = this.settings.selector;
                    else this.items = this.el.children;
                    return t = this.items, i = this.settings.extraProps, s = this.settings.getCaptionFromTitleOrAlt, n = this.settings.exThumbImage, o = [], a = function() {
                        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                        var s = Array(e),
                            n = 0;
                        for (t = 0; t < i; t++)
                            for (var o = arguments[t], a = 0, r = o.length; a < r; a++, n++) s[n] = o[a];
                        return s
                    }(be, i), [].forEach.call(t, (function(e) {
                        for (var t = {}, i = 0; i < e.attributes.length; i++) {
                            var r = e.attributes[i];
                            if (r.specified) {
                                var l = we(r.name),
                                    d = "";
                                a.indexOf(l) > -1 && (d = l), d && (t[d] = r.value)
                            }
                        }
                        var c = ye(e),
                            h = c.find("img").first().attr("alt"),
                            u = c.attr("title"),
                            p = n ? c.attr(n) : c.find("img").first().attr("src");
                        t.thumb = p, s && !t.subHtml && (t.subHtml = u || h || ""), t.alt = h || u || "", o.push(t)
                    })), o;
                    var t, i, s, n, o, a
                }, e.prototype.openGallery = function(e, t) {
                    var i = this;
                    if (void 0 === e && (e = this.settings.index), !this.lgOpened) {
                        this.lgOpened = !0, this.outer.get().focus(), this.outer.removeClass("lg-hide-items"), this.$container.addClass("lg-show");
                        var s = this.getItemsToBeInsertedToDom(e, e);
                        this.currentItemsInDom = s;
                        var n = "";
                        s.forEach((function(e) {
                            n = n + '<div id="' + e + '" class="lg-item"></div>'
                        })), this.$inner.append(n), this.addHtml(e);
                        var o = "";
                        this.mediaContainerPosition = this.getMediaContainerPosition();
                        var a = this.mediaContainerPosition,
                            r = a.top,
                            l = a.bottom;
                        this.settings.allowMediaOverlap || this.setMediaContainerPosition(r, l);
                        var d = this.galleryItems[e].__slideVideoInfo;
                        this.zoomFromOrigin && t && (this.currentImageSize = Ce(t, this.outer, r + l, d && this.settings.videoMaxSize), o = Se(t, this.outer, r, l, this.currentImageSize)), this.zoomFromOrigin && o || (this.outer.addClass(this.settings.startClass), this.getSlideItem(e).removeClass("lg-complete"));
                        var c = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                        setTimeout((function() {
                            i.outer.addClass("lg-components-open")
                        }), c), this.index = e, this.LGel.trigger("lgBeforeOpen"), this.getSlideItem(e).addClass("lg-current"), this.lGalleryOn = !1, this.prevScrollTop = ye(window).scrollTop(), setTimeout((function() {
                            if (i.zoomFromOrigin && o) {
                                var t = i.getSlideItem(e);
                                t.css("transform", o), setTimeout((function() {
                                    t.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"), i.outer.addClass("lg-zoom-from-image")
                                })), setTimeout((function() {
                                    t.css("transform", "translate3d(0, 0, 0)")
                                }), 100)
                            }
                            setTimeout((function() {
                                i.$backdrop.addClass("in"), i.$container.addClass("lg-show-in")
                            }), 10), i.zoomFromOrigin && o || setTimeout((function() {
                                i.outer.addClass("lg-visible")
                            }), i.settings.backdropDuration), i.slide(e, !1, !1, !1), i.LGel.trigger("lgAfterOpen")
                        })), document.body === this.settings.container && ye("html").addClass("lg-on")
                    }
                }, e.prototype.getMediaContainerPosition = function() {
                    if (this.settings.allowMediaOverlap) return {
                        top: 0,
                        bottom: 0
                    };
                    var e = this.$toolbar.get().clientHeight || 0,
                        t = this.outer.find(".lg-components .lg-sub-html").get(),
                        i = this.settings.defaultCaptionHeight || t && t.clientHeight || 0,
                        s = this.outer.find(".lg-thumb-outer").get();
                    return {
                        top: e,
                        bottom: (s ? s.clientHeight : 0) + i
                    }
                }, e.prototype.setMediaContainerPosition = function(e, t) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0), this.$content.css("top", e + "px").css("bottom", t + "px")
                }, e.prototype.hideBars = function() {
                    var e = this;
                    setTimeout((function() {
                        e.outer.removeClass("lg-hide-items"), e.settings.hideBarsDelay > 0 && (e.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            e.outer.removeClass("lg-hide-items"), clearTimeout(e.hideBarTimeout), e.hideBarTimeout = setTimeout((function() {
                                e.outer.addClass("lg-hide-items")
                            }), e.settings.hideBarsDelay)
                        })), e.outer.trigger("mousemove.lg"))
                    }), this.settings.showBarsAfter)
                }, e.prototype.initPictureFill = function(e) {
                    if (this.settings.supportLegacyBrowser) try {
                        picturefill({
                            elements: [e.get()]
                        })
                    } catch (e) {
                        console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
                    }
                }, e.prototype.counter = function() {
                    if (this.settings.counter) {
                        var e = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                        this.outer.find(this.settings.appendCounterTo).append(e)
                    }
                }, e.prototype.addHtml = function(e) {
                    var t, i;
                    if (this.galleryItems[e].subHtmlUrl ? i = this.galleryItems[e].subHtmlUrl : t = this.galleryItems[e].subHtml, !i)
                        if (t) {
                            var s = t.substring(0, 1);
                            "." !== s && "#" !== s || (t = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? ye(this.items).eq(e).find(t).first().html() : ye(t).first().html())
                        } else t = "";
                    if (".lg-item" !== this.settings.appendSubHtmlTo) i ? this.outer.find(".lg-sub-html").load(i) : this.outer.find(".lg-sub-html").html(t);
                    else {
                        var n = ye(this.getSlideItemId(e));
                        i ? n.load(i) : n.append('<div class="lg-sub-html">' + t + "</div>")
                    }
                    null != t && ("" === t ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")), this.LGel.trigger("lgAfterAppendSubHtml", {
                        index: e
                    })
                }, e.prototype.preload = function(e) {
                    for (var t = 1; t <= this.settings.preload && !(t >= this.galleryItems.length - e); t++) this.loadContent(e + t, !1);
                    for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++) this.loadContent(e - i, !1)
                }, e.prototype.getDummyImgStyles = function(e) {
                    return e ? "width:" + e.width + "px;\n                margin-left: -" + e.width / 2 + "px;\n                margin-top: -" + e.height / 2 + "px;\n                height:" + e.height + "px" : ""
                }, e.prototype.getVideoContStyle = function(e) {
                    return e ? "width:" + e.width + "px;\n                height:" + e.height + "px" : ""
                }, e.prototype.getDummyImageContent = function(e, t, i) {
                    var s;
                    if (this.settings.dynamic || (s = ye(this.items).eq(t)), s) {
                        var n;
                        if (!(n = this.settings.exThumbImage ? s.attr(this.settings.exThumbImage) : s.find("img").first().attr("src"))) return "";
                        var o = "<img " + i + ' style="' + this.getDummyImgStyles(this.currentImageSize) + '" class="lg-dummy-img" src="' + n + '" />';
                        return e.addClass("lg-first-slide"), this.outer.addClass("lg-first-slide-loading"), o
                    }
                    return ""
                }, e.prototype.setImgMarkup = function(e, t, i) {
                    var s = this.galleryItems[i],
                        n = s.alt,
                        o = s.srcset,
                        a = s.sizes,
                        r = s.sources,
                        l = n ? 'alt="' + n + '"' : "",
                        d = '<picture class="lg-img-wrap"> ' + (this.isFirstSlideWithZoomAnimation() ? this.getDummyImageContent(t, i, l) : xe(i, e, l, o, a, r)) + "</picture>";
                    t.prepend(d)
                }, e.prototype.onSlideObjectLoad = function(e, t, i, s) {
                    var n, o = e.find(".lg-object").first();
                    (n = o.get()) && n.complete && 0 !== n.naturalWidth || t ? i() : (o.on("load.lg error.lg", (function() {
                        i && i()
                    })), o.on("error.lg", (function() {
                        s && s()
                    })))
                }, e.prototype.onLgObjectLoad = function(e, t, i, s, n, o) {
                    var a = this;
                    this.onSlideObjectLoad(e, o, (function() {
                        a.triggerSlideItemLoad(e, t, i, s, n)
                    }), (function() {
                        e.addClass("lg-complete lg-complete_"), e.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')
                    }))
                }, e.prototype.triggerSlideItemLoad = function(e, t, i, s, n) {
                    var o = this,
                        a = this.galleryItems[t],
                        r = n && "video" === this.getSlideType(a) && !a.poster ? s : 0;
                    setTimeout((function() {
                        e.addClass("lg-complete lg-complete_"), o.LGel.trigger("lgSlideItemLoad", {
                            index: t,
                            delay: i || 0,
                            isFirstSlide: n
                        })
                    }), r)
                }, e.prototype.isFirstSlideWithZoomAnimation = function() {
                    return !(this.lGalleryOn || !this.zoomFromOrigin || !this.currentImageSize)
                }, e.prototype.addSlideVideoInfo = function(e) {
                    var t = this;
                    e.forEach((function(e, i) {
                        e.__slideVideoInfo = function(e, t, i) {
                            if (!e) return t ? {
                                html5: !0
                            } : void console.error("lightGallery :- data-src is not provided on slide item " + (i + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                            var s = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),
                                n = e.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),
                                o = e.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                            return s ? {
                                youtube: s
                            } : n ? {
                                vimeo: n
                            } : o ? {
                                wistia: o
                            } : void 0
                        }(e.src, !!e.video, i), e.__slideVideoInfo && t.settings.loadYouTubePoster && !e.poster && e.__slideVideoInfo.youtube && (e.poster = "//img.youtube.com/vi/" + e.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
                    }))
                }, e.prototype.loadContent = function(e, t) {
                    var i = this,
                        s = this.galleryItems[e],
                        n = ye(this.getSlideItemId(e)),
                        o = s.poster,
                        a = s.srcset,
                        r = s.sizes,
                        l = s.sources,
                        d = s.src,
                        c = s.video,
                        h = c && "string" == typeof c ? JSON.parse(c) : c;
                    if (s.responsive) {
                        var u = s.responsive.split(",");
                        d = function(e) {
                            for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
                                var o = e[n].split(" ");
                                "" === o[0] && o.splice(0, 1), i.push(o[0]), t.push(o[1])
                            }
                            for (var a = window.innerWidth, r = 0; r < t.length; r++)
                                if (parseInt(t[r], 10) > a) {
                                    s = i[r];
                                    break
                                }
                            return s
                        }(u) || d
                    }
                    var p = s.__slideVideoInfo,
                        g = "",
                        m = !!s.iframe,
                        f = !this.lGalleryOn,
                        v = 0;
                    if (f && (v = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10), !n.hasClass("lg-loaded")) {
                        if (p) {
                            var y = this.mediaContainerPosition,
                                b = y.top,
                                w = y.bottom,
                                C = Ce(this.items[e], this.outer, b + w, p && this.settings.videoMaxSize);
                            g = this.getVideoContStyle(C)
                        }
                        if (m) {
                            var S = function(e, t, i, s, n, o) {
                                return '<div class="lg-video-cont lg-has-iframe" style="width:' + e + "; max-width:" + i + "; height: " + t + "; max-height:" + s + '">\n                    <iframe class="lg-object" frameborder="0" ' + (o ? 'title="' + o + '"' : "") + ' src="' + n + '"  allowfullscreen="true"></iframe>\n                </div>'
                            }(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, d, s.iframeTitle);
                            n.prepend(S)
                        } else if (o) {
                            var x = "";
                            f && this.zoomFromOrigin && this.currentImageSize && (x = this.getDummyImageContent(n, e, "")), S = function(e, t, i, s) {
                                return '<div class="lg-video-cont ' + (s && s.youtube ? "lg-has-youtube" : s && s.vimeo ? "lg-has-vimeo" : "lg-has-html5") + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (t || "") + '\n            <img class="lg-object lg-video-poster" src="' + e + '" />\n        </div>'
                            }(o, x || "", g, p), n.prepend(S)
                        } else if (p) S = '<div class="lg-video-cont " style="' + g + '"></div>', n.prepend(S);
                        else if (this.setImgMarkup(d, n, e), a || l) {
                            var T = n.find(".lg-object");
                            this.initPictureFill(T)
                        }(o || p) && this.LGel.trigger("lgHasVideo", {
                            index: e,
                            src: d,
                            html5Video: h,
                            hasPoster: !!o
                        }), this.LGel.trigger("lgAfterAppendSlide", {
                            index: e
                        }), this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(e)
                    }
                    var E = 0;
                    v && !ye(document.body).hasClass("lg-from-hash") && (E = v), this.isFirstSlideWithZoomAnimation() && (setTimeout((function() {
                        n.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
                    }), this.settings.startAnimationDuration + 100), n.hasClass("lg-loaded") || setTimeout((function() {
                        if ("image" === i.getSlideType(s) && (n.find(".lg-img-wrap").append(xe(e, d, "", a, r, s.sources)), a || l)) {
                            var t = n.find(".lg-object");
                            i.initPictureFill(t)
                        }("image" === i.getSlideType(s) || "video" === i.getSlideType(s) && o) && (i.onLgObjectLoad(n, e, v, E, !0, !1), i.onSlideObjectLoad(n, !(!p || !p.html5 || o), (function() {
                            i.loadContentOnFirstSlideLoad(e, n, E)
                        }), (function() {
                            i.loadContentOnFirstSlideLoad(e, n, E)
                        })))
                    }), this.settings.startAnimationDuration + 100)), n.addClass("lg-loaded"), this.isFirstSlideWithZoomAnimation() && ("video" !== this.getSlideType(s) || o) || this.onLgObjectLoad(n, e, v, E, f, !(!p || !p.html5 || o)), this.zoomFromOrigin && this.currentImageSize || !n.hasClass("lg-complete_") || this.lGalleryOn || setTimeout((function() {
                        n.addClass("lg-complete")
                    }), this.settings.backdropDuration), this.lGalleryOn = !0, !0 === t && (n.hasClass("lg-complete_") ? this.preload(e) : n.find(".lg-object").first().on("load.lg error.lg", (function() {
                        i.preload(e)
                    })))
                }, e.prototype.loadContentOnFirstSlideLoad = function(e, t, i) {
                    var s = this;
                    setTimeout((function() {
                        t.find(".lg-dummy-img").remove(), t.removeClass("lg-first-slide"), s.outer.removeClass("lg-first-slide-loading"), s.isDummyImageRemoved = !0, s.preload(e)
                    }), i + 300)
                }, e.prototype.getItemsToBeInsertedToDom = function(e, t, i) {
                    var s = this;
                    void 0 === i && (i = 0);
                    var n = [],
                        o = Math.max(i, 3);
                    o = Math.min(o, this.galleryItems.length);
                    var a = "lg-item-" + this.lgId + "-" + t;
                    if (this.galleryItems.length <= 3) return this.galleryItems.forEach((function(e, t) {
                        n.push("lg-item-" + s.lgId + "-" + t)
                    })), n;
                    if (e < (this.galleryItems.length - 1) / 2) {
                        for (var r = e; r > e - o / 2 && r >= 0; r--) n.push("lg-item-" + this.lgId + "-" + r);
                        var l = n.length;
                        for (r = 0; r < o - l; r++) n.push("lg-item-" + this.lgId + "-" + (e + r + 1))
                    } else {
                        for (r = e; r <= this.galleryItems.length - 1 && r < e + o / 2; r++) n.push("lg-item-" + this.lgId + "-" + r);
                        for (l = n.length, r = 0; r < o - l; r++) n.push("lg-item-" + this.lgId + "-" + (e - r - 1))
                    }
                    return this.settings.loop && (e === this.galleryItems.length - 1 ? n.push("lg-item-" + this.lgId + "-0") : 0 === e && n.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))), -1 === n.indexOf(a) && n.push("lg-item-" + this.lgId + "-" + t), n
                }, e.prototype.organizeSlideItems = function(e, t) {
                    var i = this,
                        s = this.getItemsToBeInsertedToDom(e, t, this.settings.numberOfSlideItemsInDom);
                    return s.forEach((function(e) {
                        -1 === i.currentItemsInDom.indexOf(e) && i.$inner.append('<div id="' + e + '" class="lg-item"></div>')
                    })), this.currentItemsInDom.forEach((function(e) {
                        -1 === s.indexOf(e) && ye("#" + e).remove()
                    })), s
                }, e.prototype.getPreviousSlideIndex = function() {
                    var e = 0;
                    try {
                        var t = this.outer.find(".lg-current").first().attr("id");
                        e = parseInt(t.split("-")[3]) || 0
                    } catch (t) {
                        e = 0
                    }
                    return e
                }, e.prototype.setDownloadValue = function(e) {
                    if (this.settings.download) {
                        var t = this.galleryItems[e];
                        if (!1 === t.downloadUrl || "false" === t.downloadUrl) this.outer.addClass("lg-hide-download");
                        else {
                            var i = this.getElementById("lg-download");
                            this.outer.removeClass("lg-hide-download"), i.attr("href", t.downloadUrl || t.src), t.download && i.attr("download", t.download)
                        }
                    }
                }, e.prototype.makeSlideAnimation = function(e, t, i) {
                    var s = this;
                    this.lGalleryOn && i.addClass("lg-slide-progress"), setTimeout((function() {
                        s.outer.addClass("lg-no-trans"), s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide")) : (t.addClass("lg-next-slide"), i.addClass("lg-prev-slide")), setTimeout((function() {
                            s.outer.find(".lg-item").removeClass("lg-current"), t.addClass("lg-current"), s.outer.removeClass("lg-no-trans")
                        }), 50)
                    }), this.lGalleryOn ? this.settings.slideDelay : 0)
                }, e.prototype.slide = function(e, t, i, s) {
                    var n = this,
                        o = this.getPreviousSlideIndex();
                    if (this.currentItemsInDom = this.organizeSlideItems(e, o), !this.lGalleryOn || o !== e) {
                        var a = this.galleryItems.length;
                        if (!this.lgBusy) {
                            this.settings.counter && this.updateCurrentCounter(e);
                            var r = this.getSlideItem(e),
                                l = this.getSlideItem(o),
                                d = this.galleryItems[e],
                                c = d.__slideVideoInfo;
                            if (this.outer.attr("data-lg-slide-type", this.getSlideType(d)), this.setDownloadValue(e), c) {
                                var h = this.mediaContainerPosition,
                                    u = h.top,
                                    p = h.bottom,
                                    g = Ce(this.items[e], this.outer, u + p, c && this.settings.videoMaxSize);
                                this.resizeVideoSlide(e, g)
                            }
                            if (this.LGel.trigger("lgBeforeSlide", {
                                    prevIndex: o,
                                    index: e,
                                    fromTouch: !!t,
                                    fromThumb: !!i
                                }), this.lgBusy = !0, clearTimeout(this.hideBarTimeout), this.arrowDisable(e), s || (e < o ? s = "prev" : e > o && (s = "next")), t) {
                                this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                                var m = void 0,
                                    f = void 0;
                                a > 2 ? (m = e - 1, f = e + 1, (0 === e && o === a - 1 || e === a - 1 && 0 === o) && (f = 0, m = a - 1)) : (m = 0, f = 1), "prev" === s ? this.getSlideItem(f).addClass("lg-next-slide") : this.getSlideItem(m).addClass("lg-prev-slide"), r.addClass("lg-current")
                            } else this.makeSlideAnimation(s, r, l);
                            this.lGalleryOn ? setTimeout((function() {
                                n.loadContent(e, !0), ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e)
                            }), this.settings.speed + 50 + (t ? 0 : this.settings.slideDelay)) : this.loadContent(e, !0), setTimeout((function() {
                                n.lgBusy = !1, l.removeClass("lg-slide-progress"), n.LGel.trigger("lgAfterSlide", {
                                    prevIndex: o,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: i
                                })
                            }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (t ? 0 : this.settings.slideDelay))
                        }
                        this.index = e
                    }
                }, e.prototype.updateCurrentCounter = function(e) {
                    this.getElementById("lg-counter-current").html(e + 1 + "")
                }, e.prototype.updateCounterTotal = function() {
                    this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
                }, e.prototype.getSlideType = function(e) {
                    return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image"
                }, e.prototype.touchMove = function(e, t, i) {
                    var s = t.pageX - e.pageX,
                        n = t.pageY - e.pageY,
                        o = !1;
                    if (this.swipeDirection ? o = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal", o = !0) : Math.abs(n) > 15 && (this.swipeDirection = "vertical", o = !0), o) {
                        var a = this.getSlideItem(this.index);
                        if ("horizontal" === this.swipeDirection) {
                            null == i || i.preventDefault(), this.outer.addClass("lg-dragging"), this.setTranslate(a, s, 0);
                            var r = a.get().offsetWidth,
                                l = 15 * r / 100 - Math.abs(10 * s / 100);
                            this.setTranslate(this.outer.find(".lg-prev-slide").first(), -r + s - l, 0), this.setTranslate(this.outer.find(".lg-next-slide").first(), r + s + l, 0)
                        } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) {
                            null == i || i.preventDefault(), this.$container.addClass("lg-dragging-vertical");
                            var d = 1 - Math.abs(n) / window.innerHeight;
                            this.$backdrop.css("opacity", d);
                            var c = 1 - Math.abs(n) / (2 * window.innerWidth);
                            this.setTranslate(a, 0, n, c, c), Math.abs(n) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
                        }
                    }
                }, e.prototype.touchEnd = function(e, t, i) {
                    var s, n = this;
                    "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"), setTimeout((function() {
                        n.$container.removeClass("lg-dragging-vertical"), n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                        var o = !0;
                        if ("horizontal" === n.swipeDirection) {
                            s = e.pageX - t.pageX;
                            var a = Math.abs(e.pageX - t.pageX);
                            s < 0 && a > n.settings.swipeThreshold ? (n.goToNextSlide(!0), o = !1) : s > 0 && a > n.settings.swipeThreshold && (n.goToPrevSlide(!0), o = !1)
                        } else if ("vertical" === n.swipeDirection) {
                            if (s = Math.abs(e.pageY - t.pageY), n.settings.closable && n.settings.swipeToClose && s > 100) return void n.closeGallery();
                            n.$backdrop.css("opacity", 1)
                        }
                        if (n.outer.find(".lg-item").removeAttr("style"), o && Math.abs(e.pageX - t.pageX) < 5) {
                            var r = ye(i.target);
                            n.isPosterElement(r) && n.LGel.trigger(Me)
                        }
                        n.swipeDirection = void 0
                    })), setTimeout((function() {
                        n.outer.hasClass("lg-dragging") || "lg-slide" === n.settings.mode || n.outer.removeClass("lg-slide")
                    }), this.settings.speed + 100)
                }, e.prototype.enableSwipe = function() {
                    var e = this,
                        t = {},
                        i = {},
                        s = !1,
                        n = !1;
                    this.settings.enableSwipe && (this.$inner.on("touchstart.lg", (function(i) {
                        e.dragOrSwipeEnabled = !0;
                        var s = e.getSlideItem(e.index);
                        !ye(i.target).hasClass("lg-item") && !s.get().contains(i.target) || e.outer.hasClass("lg-zoomed") || e.lgBusy || 1 !== i.targetTouches.length || (n = !0, e.touchAction = "swipe", e.manageSwipeClass(), t = {
                            pageX: i.targetTouches[0].pageX,
                            pageY: i.targetTouches[0].pageY
                        })
                    })), this.$inner.on("touchmove.lg", (function(o) {
                        n && "swipe" === e.touchAction && 1 === o.targetTouches.length && (i = {
                            pageX: o.targetTouches[0].pageX,
                            pageY: o.targetTouches[0].pageY
                        }, e.touchMove(t, i, o), s = !0)
                    })), this.$inner.on("touchend.lg", (function(o) {
                        if ("swipe" === e.touchAction) {
                            if (s) s = !1, e.touchEnd(i, t, o);
                            else if (n) {
                                var a = ye(o.target);
                                e.isPosterElement(a) && e.LGel.trigger(Me)
                            }
                            e.touchAction = void 0, n = !1
                        }
                    })))
                }, e.prototype.enableDrag = function() {
                    var e = this,
                        t = {},
                        i = {},
                        s = !1,
                        n = !1;
                    this.settings.enableDrag && (this.outer.on("mousedown.lg", (function(i) {
                        e.dragOrSwipeEnabled = !0;
                        var n = e.getSlideItem(e.index);
                        (ye(i.target).hasClass("lg-item") || n.get().contains(i.target)) && (e.outer.hasClass("lg-zoomed") || e.lgBusy || (i.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = {
                            pageX: i.pageX,
                            pageY: i.pageY
                        }, s = !0, e.outer.get().scrollLeft += 1, e.outer.get().scrollLeft -= 1, e.outer.removeClass("lg-grab").addClass("lg-grabbing"), e.LGel.trigger("lgDragStart"))))
                    })), ye(window).on("mousemove.lg.global" + this.lgId, (function(o) {
                        s && e.lgOpened && (n = !0, i = {
                            pageX: o.pageX,
                            pageY: o.pageY
                        }, e.touchMove(t, i), e.LGel.trigger("lgDragMove"))
                    })), ye(window).on("mouseup.lg.global" + this.lgId, (function(o) {
                        if (e.lgOpened) {
                            var a = ye(o.target);
                            n ? (n = !1, e.touchEnd(i, t, o), e.LGel.trigger("lgDragEnd")) : e.isPosterElement(a) && e.LGel.trigger(Me), s && (s = !1, e.outer.removeClass("lg-grabbing").addClass("lg-grab"))
                        }
                    })))
                }, e.prototype.triggerPosterClick = function() {
                    var e = this;
                    this.$inner.on("click.lg", (function(t) {
                        !e.dragOrSwipeEnabled && e.isPosterElement(ye(t.target)) && e.LGel.trigger(Me)
                    }))
                }, e.prototype.manageSwipeClass = function() {
                    var e = this.index + 1,
                        t = this.index - 1;
                    this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? t = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (e = 0)), this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"), this.getSlideItem(e).addClass("lg-next-slide")
                }, e.prototype.goToNextSlide = function(e) {
                    var t = this,
                        i = this.settings.loop;
                    e && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++, this.LGel.trigger(Ie, {
                        index: this.index
                    }), this.slide(this.index, !!e, !1, "next")) : i ? (this.index = 0, this.LGel.trigger(Ie, {
                        index: this.index
                    }), this.slide(this.index, !!e, !1, "next")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-right-end"), setTimeout((function() {
                        t.outer.removeClass("lg-right-end")
                    }), 400)))
                }, e.prototype.goToPrevSlide = function(e) {
                    var t = this,
                        i = this.settings.loop;
                    e && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index > 0 ? (this.index--, this.LGel.trigger($e, {
                        index: this.index,
                        fromTouch: e
                    }), this.slide(this.index, !!e, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1, this.LGel.trigger($e, {
                        index: this.index,
                        fromTouch: e
                    }), this.slide(this.index, !!e, !1, "prev")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-left-end"), setTimeout((function() {
                        t.outer.removeClass("lg-left-end")
                    }), 400)))
                }, e.prototype.keyPress = function() {
                    var e = this;
                    ye(window).on("keydown.lg.global" + this.lgId, (function(t) {
                        e.lgOpened && !0 === e.settings.escKey && 27 === t.keyCode && (t.preventDefault(), e.settings.allowMediaOverlap && e.outer.hasClass("lg-can-toggle") && e.outer.hasClass("lg-components-open") ? e.outer.removeClass("lg-components-open") : e.closeGallery()), e.lgOpened && e.galleryItems.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                    }))
                }, e.prototype.arrow = function() {
                    var e = this;
                    this.getElementById("lg-prev").on("click.lg", (function() {
                        e.goToPrevSlide()
                    })), this.getElementById("lg-next").on("click.lg", (function() {
                        e.goToNextSlide()
                    }))
                }, e.prototype.arrowDisable = function(e) {
                    if (!this.settings.loop && this.settings.hideControlOnEnd) {
                        var t = this.getElementById("lg-prev"),
                            i = this.getElementById("lg-next");
                        e + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"), 0 === e ? t.attr("disabled", "disabled").addClass("disabled") : t.removeAttr("disabled").removeClass("disabled")
                    }
                }, e.prototype.setTranslate = function(e, t, i, s, n) {
                    void 0 === s && (s = 1), void 0 === n && (n = 1), e.css("transform", "translate3d(" + t + "px, " + i + "px, 0px) scale3d(" + s + ", " + n + ", 1)")
                }, e.prototype.mousewheel = function() {
                    var e = this,
                        t = 0;
                    this.outer.on("wheel.lg", (function(i) {
                        if (i.deltaY && !(e.galleryItems.length < 2)) {
                            i.preventDefault();
                            var s = (new Date).getTime();
                            s - t < 1e3 || (t = s, i.deltaY > 0 ? e.goToNextSlide() : i.deltaY < 0 && e.goToPrevSlide())
                        }
                    }))
                }, e.prototype.isSlideElement = function(e) {
                    return e.hasClass("lg-outer") || e.hasClass("lg-item") || e.hasClass("lg-img-wrap")
                }, e.prototype.isPosterElement = function(e) {
                    var t = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                    return e.hasClass("lg-video-poster") || e.hasClass("lg-video-play-button") || t && t.contains(e.get())
                }, e.prototype.toggleMaximize = function() {
                    var e = this;
                    this.getElementById("lg-maximize").on("click.lg", (function() {
                        e.$container.toggleClass("lg-inline"), e.refreshOnResize()
                    }))
                }, e.prototype.invalidateItems = function() {
                    for (var e = 0; e < this.items.length; e++) {
                        var t = ye(this.items[e]);
                        t.off("click.lgcustom-item-" + t.attr("data-lg-id"))
                    }
                }, e.prototype.manageCloseGallery = function() {
                    var e = this;
                    if (this.settings.closable) {
                        var t = !1;
                        this.getElementById("lg-close").on("click.lg", (function() {
                            e.closeGallery()
                        })), this.settings.closeOnTap && (this.outer.on("mousedown.lg", (function(i) {
                            var s = ye(i.target);
                            t = !!e.isSlideElement(s)
                        })), this.outer.on("mousemove.lg", (function() {
                            t = !1
                        })), this.outer.on("mouseup.lg", (function(i) {
                            var s = ye(i.target);
                            e.isSlideElement(s) && t && (e.outer.hasClass("lg-dragging") || e.closeGallery())
                        })))
                    }
                }, e.prototype.closeGallery = function(e) {
                    var t = this;
                    if (!this.lgOpened || !this.settings.closable && !e) return 0;
                    this.LGel.trigger("lgBeforeClose"), ye(window).scrollTop(this.prevScrollTop);
                    var i, s = this.items[this.index];
                    if (this.zoomFromOrigin && s) {
                        var n = this.mediaContainerPosition,
                            o = n.top,
                            a = n.bottom,
                            r = this.galleryItems[this.index],
                            l = r.__slideVideoInfo,
                            d = r.poster,
                            c = Ce(s, this.outer, o + a, l && d && this.settings.videoMaxSize);
                        i = Se(s, this.outer, o, a, c)
                    }
                    this.zoomFromOrigin && i ? (this.outer.addClass("lg-closing lg-zoom-from-image"), this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", i)) : (this.outer.addClass("lg-hide-items"), this.outer.removeClass("lg-zoom-from-image")), this.destroyModules(), this.lGalleryOn = !1, this.isDummyImageRemoved = !1, this.zoomFromOrigin = this.settings.zoomFromOrigin, clearTimeout(this.hideBarTimeout), this.hideBarTimeout = !1, ye("html").removeClass("lg-on"), this.outer.removeClass("lg-visible lg-components-open"), this.$backdrop.removeClass("in").css("opacity", 0);
                    var h = this.zoomFromOrigin && i ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                    return this.$container.removeClass("lg-show-in"), setTimeout((function() {
                        t.zoomFromOrigin && i && t.outer.removeClass("lg-zoom-from-image"), t.$container.removeClass("lg-show"), t.$backdrop.removeAttr("style").css("transition-duration", t.settings.backdropDuration + "ms"), t.outer.removeClass("lg-closing " + t.settings.startClass), t.getSlideItem(t.index).removeClass("lg-start-end-progress"), t.$inner.empty(), t.lgOpened && t.LGel.trigger("lgAfterClose", {
                            instance: t
                        }), t.outer.get() && t.outer.get().blur(), t.lgOpened = !1
                    }), h + 100), h + 100
                }, e.prototype.initModules = function() {
                    this.plugins.forEach((function(e) {
                        try {
                            e.init()
                        } catch (e) {
                            console.warn("lightGallery:- make sure lightGallery module is properly initiated")
                        }
                    }))
                }, e.prototype.destroyModules = function(e) {
                    this.plugins.forEach((function(t) {
                        try {
                            e ? t.destroy() : t.closeGallery && t.closeGallery()
                        } catch (e) {
                            console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
                        }
                    }))
                }, e.prototype.refresh = function(e) {
                    this.settings.dynamic || this.invalidateItems(), this.galleryItems = e || this.getItems(), this.updateControls(), this.openGalleryOnItemClick(), this.LGel.trigger(Ee)
                }, e.prototype.updateControls = function() {
                    this.addSlideVideoInfo(this.galleryItems), this.updateCounterTotal(), this.manageSingleSlideClassName()
                }, e.prototype.destroy = function() {
                    var e = this,
                        t = this.closeGallery(!0);
                    return setTimeout((function() {
                        e.destroyModules(!0), e.settings.dynamic || e.invalidateItems(), ye(window).off(".lg.global" + e.lgId), e.LGel.off(".lg"), e.$container.remove()
                    }), t), t
                }, e
            }();
        var Oe = function() {
                return Oe = Object.assign || function(e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                        for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, Oe.apply(this, arguments)
            },
            Pe = {
                thumbnail: !0,
                animateThumb: !0,
                currentPagerPosition: "middle",
                alignThumbnails: "middle",
                thumbWidth: 100,
                thumbHeight: "80px",
                thumbMargin: 5,
                appendThumbnailsTo: ".lg-components",
                toggleThumb: !1,
                enableThumbDrag: !0,
                enableThumbSwipe: !0,
                thumbnailSwipeThreshold: 10,
                loadYouTubeThumbnail: !0,
                youTubeThumbSize: 1
            },
            ze = function() {
                function e(e, t) {
                    return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = !1, this.core = e, this.$LG = t, this
                }
                return e.prototype.init = function() {
                    this.settings = Oe(Oe({}, Pe), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toggleThumbBar(), this.thumbKeyPress())
                }, e.prototype.build = function() {
                    var e = this;
                    this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", (function(t) {
                        var i = e.$LG(t.target);
                        i.hasAttribute("data-lg-item-id") && setTimeout((function() {
                            if (e.thumbClickable && !e.core.lgBusy) {
                                var t = parseInt(i.attr("data-lg-item-id"));
                                e.core.slide(t, !1, !0, !1)
                            }
                        }), 50)
                    })), this.core.LGel.on("lgBeforeSlide.thumb", (function(t) {
                        var i = t.detail.index;
                        e.animateThumb(i)
                    })), this.core.LGel.on("lgBeforeOpen.thumb", (function() {
                        e.thumbOuterWidth = e.core.outer.get().offsetWidth
                    })), this.core.LGel.on("lgUpdateSlides.thumb", (function() {
                        e.rebuildThumbnails()
                    })), this.core.LGel.on("lgContainerResize.thumb", (function() {
                        e.core.lgOpened && setTimeout((function() {
                            e.thumbOuterWidth = e.core.outer.get().offsetWidth, e.animateThumb(e.core.index), e.thumbOuterWidth = e.core.outer.get().offsetWidth
                        }), 50)
                    }))
                }, e.prototype.setThumbMarkup = function() {
                    var e = "lg-thumb-outer ";
                    this.settings.alignThumbnails && (e += "lg-thumb-align-" + this.settings.alignThumbnails);
                    var t = '<div class="' + e + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                    this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(t) : this.core.outer.append(t), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems)
                }, e.prototype.enableThumbDrag = function() {
                    var e = this,
                        t = {
                            cords: {
                                startX: 0,
                                endX: 0
                            },
                            isMoved: !1,
                            newTranslateX: 0,
                            startTime: new Date,
                            endTime: new Date,
                            touchMoveTime: 0
                        },
                        i = !1;
                    this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", (function(s) {
                        e.thumbTotalWidth > e.thumbOuterWidth && (s.preventDefault(), t.cords.startX = s.pageX, t.startTime = new Date, e.thumbClickable = !1, i = !0, e.core.outer.get().scrollLeft += 1, e.core.outer.get().scrollLeft -= 1, e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
                    })), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, (function(s) {
                        e.core.lgOpened && i && (t.cords.endX = s.pageX, t = e.onThumbTouchMove(t))
                    })), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, (function() {
                        e.core.lgOpened && (t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0, i && (i = !1, e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))
                    }))
                }, e.prototype.enableThumbSwipe = function() {
                    var e = this,
                        t = {
                            cords: {
                                startX: 0,
                                endX: 0
                            },
                            isMoved: !1,
                            newTranslateX: 0,
                            startTime: new Date,
                            endTime: new Date,
                            touchMoveTime: 0
                        };
                    this.$lgThumb.on("touchstart.lg", (function(i) {
                        e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t.cords.startX = i.targetTouches[0].pageX, e.thumbClickable = !1, t.startTime = new Date)
                    })), this.$lgThumb.on("touchmove.lg", (function(i) {
                        e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t.cords.endX = i.targetTouches[0].pageX, t = e.onThumbTouchMove(t))
                    })), this.$lgThumb.on("touchend.lg", (function() {
                        t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0
                    }))
                }, e.prototype.rebuildThumbnails = function() {
                    var e = this;
                    this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout((function() {
                        e.thumbTotalWidth = e.core.galleryItems.length * (e.settings.thumbWidth + e.settings.thumbMargin), e.$lgThumb.css("width", e.thumbTotalWidth + "px"), e.$lgThumb.empty(), e.setThumbItemHtml(e.core.galleryItems), e.animateThumb(e.core.index)
                    }), 50), setTimeout((function() {
                        e.$thumbOuter.removeClass("lg-rebuilding-thumbnails")
                    }), 200)
                }, e.prototype.setTranslate = function(e) {
                    this.$lgThumb.css("transform", "translate3d(-" + e + "px, 0px, 0px)")
                }, e.prototype.getPossibleTransformX = function(e) {
                    return e > this.thumbTotalWidth - this.thumbOuterWidth && (e = this.thumbTotalWidth - this.thumbOuterWidth), e < 0 && (e = 0), e
                }, e.prototype.animateThumb = function(e) {
                    if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) {
                        var t = 0;
                        switch (this.settings.currentPagerPosition) {
                            case "left":
                                t = 0;
                                break;
                            case "middle":
                                t = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                                break;
                            case "right":
                                t = this.thumbOuterWidth - this.settings.thumbWidth
                        }
                        this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * e - 1 - t, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX)
                    }
                }, e.prototype.onThumbTouchMove = function(e) {
                    return e.newTranslateX = this.translateX, e.isMoved = !0, e.touchMoveTime = (new Date).valueOf(), e.newTranslateX -= e.cords.endX - e.cords.startX, e.newTranslateX = this.getPossibleTransformX(e.newTranslateX), this.setTranslate(e.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), e
                }, e.prototype.onThumbTouchEnd = function(e) {
                    e.isMoved = !1, e.endTime = new Date, this.$thumbOuter.removeClass("lg-dragging");
                    var t = e.endTime.valueOf() - e.startTime.valueOf(),
                        i = e.cords.endX - e.cords.startX,
                        s = Math.abs(i) / t;
                    return s > .15 && e.endTime.valueOf() - e.touchMoveTime < 30 ? ((s += 1) > 2 && (s += 1), s += s * (Math.abs(i) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s - 1, 2) + "settings"), i *= s, this.translateX = this.getPossibleTransformX(this.translateX - i), this.setTranslate(this.translateX)) : this.translateX = e.newTranslateX, Math.abs(e.cords.endX - e.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0), e
                }, e.prototype.getThumbHtml = function(e, t) {
                    var i, s = this.core.galleryItems[t].__slideVideoInfo || {};
                    return i = s.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + s.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : e, '<div data-lg-item-id="' + t + '" class="lg-thumb-item ' + (t === this.core.index ? " active" : "") + '" \n        style="width:' + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + 'px;">\n            <img data-lg-item-id="' + t + '" src="' + i + '" />\n        </div>'
                }, e.prototype.getThumbItemHtml = function(e) {
                    for (var t = "", i = 0; i < e.length; i++) t += this.getThumbHtml(e[i].thumb, i);
                    return t
                }, e.prototype.setThumbItemHtml = function(e) {
                    var t = this.getThumbItemHtml(e);
                    this.$lgThumb.html(t)
                }, e.prototype.setAnimateThumbStyles = function() {
                    this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb")
                }, e.prototype.manageActiveClassOnSlideChange = function() {
                    var e = this;
                    this.core.LGel.on("lgBeforeSlide.thumb", (function(t) {
                        var i = e.core.outer.find(".lg-thumb-item"),
                            s = t.detail.index;
                        i.removeClass("active"), i.eq(s).addClass("active")
                    }))
                }, e.prototype.toggleThumbBar = function() {
                    var e = this;
                    this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", (function() {
                        e.core.outer.toggleClass("lg-components-open")
                    })))
                }, e.prototype.thumbKeyPress = function() {
                    var e = this;
                    this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, (function(t) {
                        e.core.lgOpened && e.settings.toggleThumb && (38 === t.keyCode ? (t.preventDefault(), e.core.outer.addClass("lg-components-open")) : 40 === t.keyCode && (t.preventDefault(), e.core.outer.removeClass("lg-components-open")))
                    }))
                }, e.prototype.destroy = function() {
                    this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb"))
                }, e
            }();
        const Ae = ze;
        var De = function() {
                return De = Object.assign || function(e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                        for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, De.apply(this, arguments)
            },
            Be = {
                scale: 1,
                zoom: !0,
                actualSize: !0,
                showZoomInOutIcons: !1,
                actualSizeIcons: {
                    zoomIn: "lg-zoom-in",
                    zoomOut: "lg-zoom-out"
                },
                enableZoomAfter: 300
            },
            Ge = function() {
                function e(e, t) {
                    return this.core = e, this.$LG = t, this.settings = De(De({}, Be), this.core.settings), this
                }
                return e.prototype.buildTemplates = function() {
                    var e = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="Zoom in" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="Zoom out" class="lg-zoom-out lg-icon"></button>' : "";
                    this.settings.actualSize && (e += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="View actual size" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'), this.core.outer.addClass("lg-use-transition-for-zoom"), this.core.$toolbar.first().append(e)
                }, e.prototype.enableZoom = function(e) {
                    var t = this,
                        i = this.settings.enableZoomAfter + e.detail.delay;
                    this.$LG("body").first().hasClass("lg-from-hash") && e.detail.delay ? i = 0 : this.$LG("body").first().removeClass("lg-from-hash"), this.zoomableTimeout = setTimeout((function() {
                        t.isImageSlide() && (t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"), e.detail.index === t.core.index && t.setZoomEssentials())
                    }), i + 30)
                }, e.prototype.enableZoomOnSlideItemLoad = function() {
                    this.core.LGel.on("lgSlideItemLoad.zoom", this.enableZoom.bind(this))
                }, e.prototype.getModifier = function(e, t, i) {
                    var s = e;
                    e = Math.abs(e);
                    var n = this.getCurrentTransform(i);
                    if (!n) return 1;
                    var o = 1;
                    if ("X" === t) {
                        var a = Math.sign(parseFloat(n[0]));
                        0 === e || 180 === e ? o = 1 : 90 === e && (o = -90 === s && 1 === a || 90 === s && -1 === a ? -1 : 1), o *= a
                    } else {
                        var r = Math.sign(parseFloat(n[3]));
                        if (0 === e || 180 === e) o = 1;
                        else if (90 === e) {
                            var l = parseFloat(n[1]),
                                d = parseFloat(n[2]);
                            o = Math.sign(l * d * s * r)
                        }
                        o *= r
                    }
                    return o
                }, e.prototype.getImageSize = function(e, t, i) {
                    return 90 === Math.abs(t) && (i = "x" === i ? "y" : "x"), e[{
                        y: "offsetHeight",
                        x: "offsetWidth"
                    }[i]]
                }, e.prototype.getDragCords = function(e, t) {
                    return 90 === t ? {
                        x: e.pageY,
                        y: e.pageX
                    } : {
                        x: e.pageX,
                        y: e.pageY
                    }
                }, e.prototype.getSwipeCords = function(e, t) {
                    var i = e.targetTouches[0].pageX,
                        s = e.targetTouches[0].pageY;
                    return 90 === t ? {
                        x: s,
                        y: i
                    } : {
                        x: i,
                        y: s
                    }
                }, e.prototype.getDragAllowedAxises = function(e, t) {
                    t = t || this.scale || 1;
                    var i = this.imageYSize * t > this.containerRect.height,
                        s = this.imageXSize * t > this.containerRect.width;
                    return 90 === e ? {
                        allowX: i,
                        allowY: s
                    } : {
                        allowX: s,
                        allowY: i
                    }
                }, e.prototype.getCurrentTransform = function(e) {
                    if (e) {
                        var t = window.getComputedStyle(e, null),
                            i = t.getPropertyValue("-webkit-transform") || t.getPropertyValue("-moz-transform") || t.getPropertyValue("-ms-transform") || t.getPropertyValue("-o-transform") || t.getPropertyValue("transform") || "none";
                        return "none" !== i ? i.split("(")[1].split(")")[0].split(",") : void 0
                    }
                }, e.prototype.getCurrentRotation = function(e) {
                    if (!e) return 0;
                    var t = this.getCurrentTransform(e);
                    return t ? Math.round(Math.atan2(parseFloat(t[1]), parseFloat(t[0])) * (180 / Math.PI)) : 0
                }, e.prototype.setZoomEssentials = function() {
                    var e = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
                        t = this.core.getSlideItem(this.core.index).find(".lg-img-rotate").first().get();
                    this.rotateValue = this.getCurrentRotation(t), this.imageYSize = this.getImageSize(e.get(), this.rotateValue, "y"), this.imageXSize = this.getImageSize(e.get(), this.rotateValue, "x"), this.containerRect = this.core.outer.get().getBoundingClientRect(), this.modifierX = this.getModifier(this.rotateValue, "X", t), this.modifierY = this.getModifier(this.rotateValue, "Y", t)
                }, e.prototype.zoomImage = function(e) {
                    var t, i, s = (this.containerRect.width - this.imageXSize) / 2 + this.containerRect.left,
                        n = this.core.mediaContainerPosition,
                        o = n.top,
                        a = n.bottom,
                        r = Math.abs(o - a) / 2,
                        l = (this.containerRect.height - this.imageYSize - r * this.modifierX) / 2 + this.scrollTop + this.containerRect.top;
                    1 === e && (this.positionChanged = !1);
                    var d = this.getDragAllowedAxises(Math.abs(this.rotateValue), e),
                        c = d.allowY,
                        h = d.allowX;
                    this.positionChanged && (t = this.left / (this.scale - 1), i = this.top / (this.scale - 1), this.pageX = Math.abs(t) + s, this.pageY = Math.abs(i) + l, this.positionChanged = !1);
                    var u = this.getPossibleSwipeDragCords(this.rotateValue, e),
                        p = (e - 1) * (s - this.pageX),
                        g = (e - 1) * (l - this.pageY);
                    h ? this.isBeyondPossibleLeft(p, u.minX) ? p = u.minX : this.isBeyondPossibleRight(p, u.maxX) && (p = u.maxX) : e > 1 && (p < u.minX ? p = u.minX : p > u.maxX && (p = u.maxX)), c ? this.isBeyondPossibleTop(g, u.minY) ? g = u.minY : this.isBeyondPossibleBottom(g, u.maxY) && (g = u.maxY) : e > 1 && (g < u.minY ? g = u.minY : g > u.maxY && (g = u.maxY)), this.setZoomStyles({
                        x: p,
                        y: g,
                        scale: e
                    })
                }, e.prototype.setZoomStyles = function(e) {
                    var t = this.core.getSlideItem(this.core.index).find(".lg-image").first(),
                        i = this.core.outer.find(".lg-current .lg-dummy-img").first(),
                        s = t.parent();
                    this.scale = e.scale, t.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)"), i.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)");
                    var n = "translate3d(" + e.x + "px, " + e.y + "px, 0)";
                    s.css("transform", n), this.left = e.x, this.top = e.y
                }, e.prototype.setActualSize = function(e, t) {
                    var i = this;
                    if (this.isImageSlide() && !this.core.outer.hasClass("lg-first-slide-loading")) {
                        var s = this.getCurrentImageActualSizeScale();
                        this.core.outer.hasClass("lg-zoomed") ? this.scale = 1 : this.scale = this.getScale(s), this.setPageCords(t), this.beginZoom(this.scale), this.zoomImage(this.scale), setTimeout((function() {
                            i.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
                        }), 10)
                    }
                }, e.prototype.getNaturalWidth = function(e) {
                    var t = this.core.getSlideItem(e).find(".lg-image").first(),
                        i = this.core.galleryItems[e].width;
                    return i ? parseFloat(i) : t.get().naturalWidth
                }, e.prototype.getActualSizeScale = function(e, t) {
                    return e > t ? e / t || 2 : 1
                }, e.prototype.getCurrentImageActualSizeScale = function() {
                    var e = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,
                        t = this.getNaturalWidth(this.core.index) || e;
                    return this.getActualSizeScale(t, e)
                }, e.prototype.getPageCords = function(e) {
                    var t = {};
                    if (e) t.x = e.pageX || e.targetTouches[0].pageX, t.y = e.pageY || e.targetTouches[0].pageY;
                    else {
                        var i = this.core.outer.get().getBoundingClientRect();
                        t.x = i.width / 2 + i.left, t.y = i.height / 2 + this.scrollTop + i.top
                    }
                    return t
                }, e.prototype.setPageCords = function(e) {
                    var t = this.getPageCords(e);
                    this.pageX = t.x, this.pageY = t.y
                }, e.prototype.beginZoom = function(e) {
                    return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e > 1 ? (this.core.outer.addClass("lg-zoomed"), this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)) : this.resetZoom(), e > 1
                }, e.prototype.getScale = function(e) {
                    var t = this.getCurrentImageActualSizeScale();
                    return e < 1 ? e = 1 : e > t && (e = t), e
                }, e.prototype.init = function() {
                    var e = this;
                    if (this.settings.zoom) {
                        this.buildTemplates(), this.enableZoomOnSlideItemLoad();
                        var t = null;
                        this.core.outer.on("dblclick.lg", (function(t) {
                            e.$LG(t.target).hasClass("lg-image") && e.setActualSize(e.core.index, t)
                        })), this.core.outer.on("touchstart.lg", (function(i) {
                            var s = e.$LG(i.target);
                            1 === i.targetTouches.length && s.hasClass("lg-image") && (t ? (clearTimeout(t), t = null, i.preventDefault(), e.setActualSize(e.core.index, i)) : t = setTimeout((function() {
                                t = null
                            }), 300))
                        })), this.core.LGel.on("lgContainerResize.zoom lgRotateRight.zoom lgRotateLeft.zoom lgFlipHorizontal.zoom lgFlipVertical.zoom", (function() {
                            e.core.lgOpened && e.isImageSlide() && (e.setPageCords(), e.setZoomEssentials(), e.zoomImage(e.scale))
                        })), this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, (function() {
                            e.core.lgOpened && (e.scrollTop = e.$LG(window).scrollTop())
                        })), this.core.getElementById("lg-zoom-out").on("click.lg", (function() {
                            e.core.outer.find(".lg-current .lg-image").get() && (e.scale -= e.settings.scale, e.scale = e.getScale(e.scale), e.beginZoom(e.scale), e.zoomImage(e.scale))
                        })), this.core.getElementById("lg-zoom-in").on("click.lg", (function() {
                            e.zoomIn()
                        })), this.core.getElementById("lg-actual-size").on("click.lg", (function() {
                            e.setActualSize(e.core.index)
                        })), this.core.LGel.on("lgBeforeOpen.zoom", (function() {
                            e.core.outer.find(".lg-item").removeClass("lg-zoomable")
                        })), this.core.LGel.on("lgAfterOpen.zoom", (function() {
                            e.scrollTop = e.$LG(window).scrollTop(), e.pageX = e.core.outer.width() / 2, e.pageY = e.core.outer.height() / 2 + e.scrollTop, e.scale = 1
                        })), this.core.LGel.on("lgAfterSlide.zoom", (function(t) {
                            var i = t.detail.prevIndex;
                            e.scale = 1, e.positionChanged = !1, e.resetZoom(i), e.isImageSlide() && e.setZoomEssentials()
                        })), this.zoomDrag(), this.pinchZoom(), this.zoomSwipe(), this.zoomableTimeout = !1, this.positionChanged = !1
                    }
                }, e.prototype.zoomIn = function(e) {
                    this.isImageSlide() && (e ? this.scale = e : this.scale += this.settings.scale, this.scale = this.getScale(this.scale), this.beginZoom(this.scale), this.zoomImage(this.scale))
                }, e.prototype.resetZoom = function(e) {
                    this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
                    var t = this.core.getElementById("lg-actual-size"),
                        i = this.core.getSlideItem(void 0 !== e ? e : this.core.index);
                    t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn), i.find(".lg-img-wrap").first().removeAttr("style"), i.find(".lg-image").first().removeAttr("style"), this.scale = 1, this.left = 0, this.top = 0, this.setPageCords()
                }, e.prototype.getTouchDistance = function(e) {
                    return Math.sqrt((e.targetTouches[0].pageX - e.targetTouches[1].pageX) * (e.targetTouches[0].pageX - e.targetTouches[1].pageX) + (e.targetTouches[0].pageY - e.targetTouches[1].pageY) * (e.targetTouches[0].pageY - e.targetTouches[1].pageY))
                }, e.prototype.pinchZoom = function() {
                    var e = this,
                        t = 0,
                        i = !1,
                        s = 1,
                        n = this.core.getSlideItem(this.core.index);
                    this.core.$inner.on("touchstart.lg", (function(i) {
                        n = e.core.getSlideItem(e.core.index), e.isImageSlide() && (2 !== i.targetTouches.length || e.core.outer.hasClass("lg-first-slide-loading") || !e.$LG(i.target).hasClass("lg-item") && !n.get().contains(i.target) || (s = e.scale || 1, e.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e.core.touchAction = "pinch", t = e.getTouchDistance(i)))
                    })), this.core.$inner.on("touchmove.lg", (function(o) {
                        if (2 === o.targetTouches.length && "pinch" === e.core.touchAction && (e.$LG(o.target).hasClass("lg-item") || n.get().contains(o.target))) {
                            o.preventDefault();
                            var a = e.getTouchDistance(o),
                                r = t - a;
                            !i && Math.abs(r) > 5 && (i = !0), i && (e.scale = Math.max(1, s + .008 * -r), e.zoomImage(e.scale))
                        }
                    })), this.core.$inner.on("touchend.lg", (function(s) {
                        "pinch" === e.core.touchAction && (e.$LG(s.target).hasClass("lg-item") || n.get().contains(s.target)) && (i = !1, t = 0, e.scale <= 1 ? e.resetZoom() : (e.scale = e.getScale(e.scale), e.zoomImage(e.scale), e.core.outer.addClass("lg-zoomed")), e.core.touchAction = void 0)
                    }))
                }, e.prototype.touchendZoom = function(e, t, i, s, n, o) {
                    var a = t.x - e.x,
                        r = t.y - e.y,
                        l = Math.abs(a) / n + 1,
                        d = Math.abs(r) / n + 1;
                    l > 2 && (l += 1), d > 2 && (d += 1), a *= l, r *= d;
                    var c = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),
                        h = {};
                    h.x = this.left + a * this.modifierX, h.y = this.top + r * this.modifierY;
                    var u = this.getPossibleSwipeDragCords(o);
                    (Math.abs(a) > 15 || Math.abs(r) > 15) && (s && (this.isBeyondPossibleTop(h.y, u.minY) ? h.y = u.minY : this.isBeyondPossibleBottom(h.y, u.maxY) && (h.y = u.maxY)), i && (this.isBeyondPossibleLeft(h.x, u.minX) ? h.x = u.minX : this.isBeyondPossibleRight(h.x, u.maxX) && (h.x = u.maxX)), s ? this.top = h.y : h.y = this.top, i ? this.left = h.x : h.x = this.left, this.setZoomSwipeStyles(c, h), this.positionChanged = !0)
                }, e.prototype.getZoomSwipeCords = function(e, t, i, s, n) {
                    var o = {};
                    if (s) {
                        if (o.y = this.top + (t.y - e.y) * this.modifierY, this.isBeyondPossibleTop(o.y, n.minY)) {
                            var a = n.minY - o.y;
                            o.y = n.minY - a / 6
                        } else if (this.isBeyondPossibleBottom(o.y, n.maxY)) {
                            var r = o.y - n.maxY;
                            o.y = n.maxY + r / 6
                        }
                    } else o.y = this.top;
                    if (i) {
                        if (o.x = this.left + (t.x - e.x) * this.modifierX, this.isBeyondPossibleLeft(o.x, n.minX)) {
                            var l = n.minX - o.x;
                            o.x = n.minX - l / 6
                        } else if (this.isBeyondPossibleRight(o.x, n.maxX)) {
                            var d = o.x - n.maxX;
                            o.x = n.maxX + d / 6
                        }
                    } else o.x = this.left;
                    return o
                }, e.prototype.isBeyondPossibleLeft = function(e, t) {
                    return e >= t
                }, e.prototype.isBeyondPossibleRight = function(e, t) {
                    return e <= t
                }, e.prototype.isBeyondPossibleTop = function(e, t) {
                    return e >= t
                }, e.prototype.isBeyondPossibleBottom = function(e, t) {
                    return e <= t
                }, e.prototype.isImageSlide = function() {
                    var e = this.core.galleryItems[this.core.index];
                    return "image" === this.core.getSlideType(e)
                }, e.prototype.getPossibleSwipeDragCords = function(e, t) {
                    var i = t || this.scale || 1,
                        s = Math.abs(i),
                        n = this.core.mediaContainerPosition,
                        o = n.top,
                        a = n.bottom,
                        r = Math.abs(o - a) / 2,
                        l = (this.imageYSize - this.containerRect.height) / 2 + r * this.modifierX,
                        d = this.containerRect.height - this.imageYSize * s + l,
                        c = (this.imageXSize - this.containerRect.width) / 2,
                        h = this.containerRect.width - this.imageXSize * s + c,
                        u = {
                            minY: l,
                            maxY: d,
                            minX: c,
                            maxX: h
                        };
                    return 90 === Math.abs(e) && (u = {
                        minY: c,
                        maxY: h,
                        minX: l,
                        maxX: d
                    }), u
                }, e.prototype.setZoomSwipeStyles = function(e, t) {
                    e.css("transform", "translate3d(" + t.x + "px, " + t.y + "px, 0)")
                }, e.prototype.zoomSwipe = function() {
                    var e, t, i = this,
                        s = {},
                        n = {},
                        o = !1,
                        a = !1,
                        r = !1,
                        l = new Date,
                        d = (new Date, this.core.getSlideItem(this.core.index));
                    this.core.$inner.on("touchstart.lg", (function(n) {
                        if (i.isImageSlide() && (d = i.core.getSlideItem(i.core.index), (i.$LG(n.target).hasClass("lg-item") || d.get().contains(n.target)) && 1 === n.targetTouches.length && i.core.outer.hasClass("lg-zoomed"))) {
                            n.preventDefault(), l = new Date, i.core.touchAction = "zoomSwipe", t = i.core.getSlideItem(i.core.index).find(".lg-img-wrap").first();
                            var o = i.getDragAllowedAxises(Math.abs(i.rotateValue));
                            r = o.allowY, ((a = o.allowX) || r) && (s = i.getSwipeCords(n, Math.abs(i.rotateValue))), e = i.getPossibleSwipeDragCords(i.rotateValue), i.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")
                        }
                    })), this.core.$inner.on("touchmove.lg", (function(l) {
                        if (1 === l.targetTouches.length && "zoomSwipe" === i.core.touchAction && (i.$LG(l.target).hasClass("lg-item") || d.get().contains(l.target))) {
                            l.preventDefault(), i.core.touchAction = "zoomSwipe", n = i.getSwipeCords(l, Math.abs(i.rotateValue));
                            var c = i.getZoomSwipeCords(s, n, a, r, e);
                            (Math.abs(n.x - s.x) > 15 || Math.abs(n.y - s.y) > 15) && (o = !0, i.setZoomSwipeStyles(t, c))
                        }
                    })), this.core.$inner.on("touchend.lg", (function(e) {
                        if ("zoomSwipe" === i.core.touchAction && (i.$LG(e.target).hasClass("lg-item") || d.get().contains(e.target))) {
                            if (i.core.touchAction = void 0, i.core.outer.removeClass("lg-zoom-dragging"), !o) return;
                            o = !1;
                            var t = (new Date).valueOf() - l.valueOf();
                            i.touchendZoom(s, n, a, r, t, i.rotateValue)
                        }
                    }))
                }, e.prototype.zoomDrag = function() {
                    var e, t, i, s, n = this,
                        o = {},
                        a = {},
                        r = !1,
                        l = !1,
                        d = !1,
                        c = !1;
                    this.core.outer.on("mousedown.lg.zoom", (function(t) {
                        if (n.isImageSlide()) {
                            var a = n.core.getSlideItem(n.core.index);
                            if (n.$LG(t.target).hasClass("lg-item") || a.get().contains(t.target)) {
                                e = new Date, s = n.core.getSlideItem(n.core.index).find(".lg-img-wrap").first();
                                var l = n.getDragAllowedAxises(Math.abs(n.rotateValue));
                                c = l.allowY, d = l.allowX, n.core.outer.hasClass("lg-zoomed") && n.$LG(t.target).hasClass("lg-object") && (d || c) && (t.preventDefault(), o = n.getDragCords(t, Math.abs(n.rotateValue)), i = n.getPossibleSwipeDragCords(n.rotateValue), r = !0, n.core.outer.get().scrollLeft += 1, n.core.outer.get().scrollLeft -= 1, n.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))
                            }
                        }
                    })), this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, (function(e) {
                        if (r) {
                            l = !0, a = n.getDragCords(e, Math.abs(n.rotateValue));
                            var t = n.getZoomSwipeCords(o, a, d, c, i);
                            n.setZoomSwipeStyles(s, t)
                        }
                    })), this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, (function(i) {
                        if (r) {
                            if (t = new Date, r = !1, n.core.outer.removeClass("lg-zoom-dragging"), l && (o.x !== a.x || o.y !== a.y)) {
                                a = n.getDragCords(i, Math.abs(n.rotateValue));
                                var s = t.valueOf() - e.valueOf();
                                n.touchendZoom(o, a, d, c, s, n.rotateValue)
                            }
                            l = !1
                        }
                        n.core.outer.removeClass("lg-grabbing").addClass("lg-grab")
                    }))
                }, e.prototype.closeGallery = function() {
                    this.resetZoom()
                }, e.prototype.destroy = function() {
                    this.$LG(window).off(".lg.zoom.global" + this.core.lgId), this.core.LGel.off(".lg.zoom"), this.core.LGel.off(".zoom"), clearTimeout(this.zoomableTimeout), this.zoomableTimeout = !1
                }, e
            }();
        const Ve = Ge;
        var Ne = function() {
                return Ne = Object.assign || function(e) {
                    for (var t, i = 1, s = arguments.length; i < s; i++)
                        for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }, Ne.apply(this, arguments)
            },
            He = {
                autoplayFirstVideo: !0,
                youTubePlayerParams: !1,
                vimeoPlayerParams: !1,
                wistiaPlayerParams: !1,
                gotoNextSlideOnVideoEnd: !0,
                autoplayVideoOnSlide: !1,
                videojs: !1,
                videojsOptions: {}
            },
            Xe = function(e) {
                return Object.keys(e).map((function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                })).join("&")
            };
        const _e = function() {
            function e(e) {
                return this.core = e, this.settings = Ne(Ne({}, He), this.core.settings), this
            }
            return e.prototype.init = function() {
                var e = this;
                this.core.LGel.on("lgHasVideo.video", this.onHasVideo.bind(this)), this.core.LGel.on("lgPosterClick.video", (function() {
                    var t = e.core.getSlideItem(e.core.index);
                    e.loadVideoOnPosterClick(t)
                })), this.core.LGel.on("lgSlideItemLoad.video", this.onSlideItemLoad.bind(this)), this.core.LGel.on("lgBeforeSlide.video", this.onBeforeSlide.bind(this)), this.core.LGel.on("lgAfterSlide.video", this.onAfterSlide.bind(this))
            }, e.prototype.onSlideItemLoad = function(e) {
                var t = this,
                    i = e.detail,
                    s = i.isFirstSlide,
                    n = i.index;
                this.settings.autoplayFirstVideo && s && n === this.core.index && setTimeout((function() {
                    t.loadAndPlayVideo(n)
                }), 200), !s && this.settings.autoplayVideoOnSlide && n === this.core.index && this.loadAndPlayVideo(n)
            }, e.prototype.onHasVideo = function(e) {
                var t = e.detail,
                    i = t.index,
                    s = t.src,
                    n = t.html5Video;
                t.hasPoster || (this.appendVideos(this.core.getSlideItem(i), {
                    src: s,
                    addClass: "lg-object",
                    index: i,
                    html5Video: n
                }), this.gotoNextSlideOnVideoEnd(s, i))
            }, e.prototype.onBeforeSlide = function(e) {
                if (this.core.lGalleryOn) {
                    var t = e.detail.prevIndex;
                    this.pauseVideo(t)
                }
            }, e.prototype.onAfterSlide = function(e) {
                var t = this,
                    i = e.detail,
                    s = i.index,
                    n = i.prevIndex,
                    o = this.core.getSlideItem(s);
                this.settings.autoplayVideoOnSlide && s !== n && o.hasClass("lg-complete") && setTimeout((function() {
                    t.loadAndPlayVideo(s)
                }), 100)
            }, e.prototype.loadAndPlayVideo = function(e) {
                var t = this.core.getSlideItem(e);
                this.core.galleryItems[e].poster ? this.loadVideoOnPosterClick(t, !0) : this.playVideo(e)
            }, e.prototype.playVideo = function(e) {
                this.controlVideo(e, "play")
            }, e.prototype.pauseVideo = function(e) {
                this.controlVideo(e, "pause")
            }, e.prototype.getVideoHtml = function(e, t, i, s) {
                var n = "",
                    o = this.core.galleryItems[i].__slideVideoInfo || {},
                    a = this.core.galleryItems[i],
                    r = a.title || a.alt;
                r = r ? 'title="' + r + '"' : "";
                var l = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
                if (o.youtube) {
                    var d = "lg-youtube" + i,
                        c = "?" + (o.youtube[2] ? o.youtube[2] + "&" : "") + "wmode=opaque&autoplay=0&mute=1&enablejsapi=1" + (this.settings.youTubePlayerParams ? "&" + Xe(this.settings.youTubePlayerParams) : "");
                    n = '<iframe allow="autoplay" id=' + d + ' class="lg-video-object lg-youtube ' + t + '" ' + r + ' src="//www.youtube.com/embed/' + (o.youtube[1] + c) + '" ' + l + "></iframe>"
                } else if (o.vimeo) d = "lg-vimeo" + i, c = function(e, t) {
                    if (!t || !t.vimeo) return "";
                    var i = t.vimeo[2] || "";
                    return i = "?" == i[0] ? "&" + i.slice(1) : i || "", "?autoplay=0&muted=1" + (e ? "&" + Xe(e) : "") + i
                }(this.settings.vimeoPlayerParams, o), n = '<iframe allow="autoplay" id=' + d + ' class="lg-video-object lg-vimeo ' + t + '" ' + r + ' src="//player.vimeo.com/video/' + (o.vimeo[1] + c) + '" ' + l + "></iframe>";
                else if (o.wistia) {
                    var h = "lg-wistia" + i;
                    c = (c = Xe(this.settings.wistiaPlayerParams)) ? "?" + c : "", n = '<iframe allow="autoplay" id="' + h + '" src="//fast.wistia.net/embed/iframe/' + (o.wistia[4] + c) + '" ' + r + ' class="wistia_embed lg-video-object lg-wistia ' + t + '" name="wistia_embed" ' + l + "></iframe>"
                } else if (o.html5) {
                    for (var u = "", p = 0; p < s.source.length; p++) u += '<source src="' + s.source[p].src + '" type="' + s.source[p].type + '">';
                    if (s.tracks) {
                        var g = function(e) {
                            var t = "",
                                i = s.tracks[e];
                            Object.keys(i || {}).forEach((function(e) {
                                t += e + '="' + i[e] + '" '
                            })), u += "<track " + t + ">"
                        };
                        for (p = 0; p < s.tracks.length; p++) g(p)
                    }
                    var m = "",
                        f = s.attributes || {};
                    Object.keys(f || {}).forEach((function(e) {
                        m += e + '="' + f[e] + '" '
                    })), n = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs ? "video-js" : "") + '" ' + m + ">\n                " + u + "\n                Your browser does not support HTML5 video.\n            </video>"
                }
                return n
            }, e.prototype.appendVideos = function(e, t) {
                var i, s = this.getVideoHtml(t.src, t.addClass, t.index, t.html5Video);
                e.find(".lg-video-cont").append(s);
                var n = e.find(".lg-video-object").first();
                if (t.html5Video && n.on("mousedown.lg.video", (function(e) {
                        e.stopPropagation()
                    })), this.settings.videojs && (null === (i = this.core.galleryItems[t.index].__slideVideoInfo) || void 0 === i ? void 0 : i.html5)) try {
                    return videojs(n.get(), this.settings.videojsOptions)
                } catch (e) {
                    console.error("lightGallery:- Make sure you have included videojs")
                }
            }, e.prototype.gotoNextSlideOnVideoEnd = function(e, t) {
                var i = this,
                    s = this.core.getSlideItem(t).find(".lg-video-object").first(),
                    n = this.core.galleryItems[t].__slideVideoInfo || {};
                if (this.settings.gotoNextSlideOnVideoEnd)
                    if (n.html5) s.on("ended", (function() {
                        i.core.goToNextSlide()
                    }));
                    else if (n.vimeo) try {
                    new Vimeo.Player(s.get()).on("ended", (function() {
                        i.core.goToNextSlide()
                    }))
                } catch (e) {
                    console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")
                } else if (n.wistia) try {
                    window._wq = window._wq || [], window._wq.push({
                        id: s.attr("id"),
                        onReady: function(e) {
                            e.bind("end", (function() {
                                i.core.goToNextSlide()
                            }))
                        }
                    })
                } catch (e) {
                    console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")
                }
            }, e.prototype.controlVideo = function(e, t) {
                var i = this.core.getSlideItem(e).find(".lg-video-object").first(),
                    s = this.core.galleryItems[e].__slideVideoInfo || {};
                if (i.get())
                    if (s.youtube) try {
                        i.get().contentWindow.postMessage('{"event":"command","func":"' + t + 'Video","args":""}', "*")
                    } catch (e) {
                        console.error("lightGallery:- " + e)
                    } else if (s.vimeo) try {
                        new Vimeo.Player(i.get())[t]()
                    } catch (e) {
                        console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js")
                    } else if (s.html5)
                        if (this.settings.videojs) try {
                            videojs(i.get())[t]()
                        } catch (e) {
                            console.error("lightGallery:- Make sure you have included videojs")
                        } else i.get()[t]();
                        else if (s.wistia) try {
                    window._wq = window._wq || [], window._wq.push({
                        id: i.attr("id"),
                        onReady: function(e) {
                            e[t]()
                        }
                    })
                } catch (e) {
                    console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js")
                }
            }, e.prototype.loadVideoOnPosterClick = function(e, t) {
                var i = this;
                if (e.hasClass("lg-video-loaded")) t && this.playVideo(this.core.index);
                else if (e.hasClass("lg-has-video")) this.playVideo(this.core.index);
                else {
                    e.addClass("lg-has-video");
                    var s = void 0,
                        n = this.core.galleryItems[this.core.index].src,
                        o = this.core.galleryItems[this.core.index].video;
                    o && (s = "string" == typeof o ? JSON.parse(o) : o);
                    var a = this.appendVideos(e, {
                        src: n,
                        addClass: "",
                        index: this.core.index,
                        html5Video: s
                    });
                    this.gotoNextSlideOnVideoEnd(n, this.core.index);
                    var r = e.find(".lg-object").first().get();
                    e.find(".lg-video-cont").first().append(r), e.addClass("lg-video-loading"), a && a.ready((function() {
                        a.on("loadedmetadata", (function() {
                            i.onVideoLoadAfterPosterClick(e, i.core.index)
                        }))
                    })), e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", (function() {
                        setTimeout((function() {
                            i.onVideoLoadAfterPosterClick(e, i.core.index)
                        }), 50)
                    }))
                }
            }, e.prototype.onVideoLoadAfterPosterClick = function(e, t) {
                e.addClass("lg-video-loaded"), this.playVideo(t)
            }, e.prototype.destroy = function() {
                this.core.LGel.off(".lg.video"), this.core.LGel.off(".video")
            }, e
        }();
        i.p;
        class je {
            constructor(e) {
                return this.el = e, this.domSwiper = this.el.querySelector(".swiper"), this.swiperSettings = JSON.parse(this.domSwiper.dataset.settings), this.domSlides = this.el.querySelectorAll(".swiper-wrapper .wp-block-eedee-block-gutenslide:not(.swiper-slide-duplicate)"), this.damping = .5, this.isMouseOnLeft = !0, this.isLeftArrowVisible = !1, this.isRightArrowVisible = !1, this.leftArrow = this.el.querySelector(".eedee-gutenslider-prev"), this.rightArrow = this.el.querySelector(".eedee-gutenslider-next"), this.gsBreakpoints = [600, 960], this.gsMediaQueries = [window.matchMedia(`(max-width: ${this.gsBreakpoints[0]}px)`), window.matchMedia(`(min-width: ${this.gsBreakpoints[0]+1}px) and (max-width: ${this.gsBreakpoints[1]}px)`), window.matchMedia(`(min-width: ${this.gsBreakpoints[1]+1}px)`)], this.overlayBgColor = getComputedStyle(this.el).getPropertyValue("--gutenslider-lightgallery-bg"), this.fontColor = getComputedStyle(this.el).getPropertyValue("--gutenslider-lightgallery-font"), this.lgTransition = this.el.dataset.lgTransition || "lg-slide", this.initSwiper = this.initSwiper.bind(this), this.destroy = this.destroy.bind(this), this.onLgAfterSlide = this.onLgAfterSlide.bind(this), this.onLgBeforeClose = this.onLgBeforeClose.bind(this), this.onLgBeforeOpen = this.onLgBeforeOpen.bind(this), this.addMediaQueryListeners = this.addMediaQueryListeners.bind(this), this.gsHandleBreakpoint = this.gsHandleBreakpoint.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.onMouseLeave = this.onMouseLeave.bind(this), this.onClick = this.onClick.bind(this), this.init(), this
            }
            init() {
                this.addMediaQueryListeners(), this.updateDom(), window.matchMedia && window.matchMedia("(pointer:fine)").matches && window.matchMedia("(hover:hover)").matches && this.initArrowsFollowMouse(), this.gsHandleBreakpoint(), this.initLg(), this.initPremium()
            }
            addMediaQueryListeners() {
                for (let e = 0; e < this.gsMediaQueries.length; e++) try {
                    this.gsMediaQueries[e].addEventListener("change", this.gsHandleBreakpoint)
                } catch (t) {
                    t instanceof TypeError ? this.gsMediaQueries[e].addListener((e => this.gsHandleBreakpoint)) : console.error(t)
                }
            }
            destroy() {
                return this.swiperInstance && this.swiperInstance.destroy(!0, !0), this
            }
            initArrowsFollowMouse() {
                this.swiperSettings.arrowsFollowMouse && (this.raf(), this.el.classList.contains("is-full") ? (document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseenter", this.onMouseEnter), document.addEventListener("mouseleave", this.onMouseLeave), document.addEventListener("click", this.onClick), this.mouseX = 0, this.mouseY = 0, this.dMouseX = 0, this.dMouseY = 0, document.body.style.cursor = "none") : (this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseenter", this.onMouseEnter), this.el.addEventListener("mouseleave", this.onMouseLeave), this.el.addEventListener("click", this.onClick), this.el.style.cursor = "none"), this.leftArrow.style.pointerEvents = "none", this.rightArrow.style.pointerEvents = "none", this.leftArrow.style.transition = "opacity 0.5s", this.rightArrow.style.transition = "opacity 0.5s", this.leftArrow.style.top = 0, this.leftArrow.style.left = 0, this.rightArrow.style.top = 0, this.rightArrow.style.left = 0, Object.assign(this.swiperSettings, {
                    allowTouchMove: !1
                }))
            }
            updateArrows() {
                const e = this.dMouseY - this.leftArrow.clientHeight / 2 + "px",
                    t = this.dMouseX - this.leftArrow.clientWidth / 2 + "px",
                    i = this.dMouseY - this.rightArrow.clientHeight / 2 + "px",
                    s = this.dMouseX - this.rightArrow.clientWidth / 2 + "px";
                this.leftArrow.style.transform = `translate3d(${t},${e},0)`, this.rightArrow.style.transform = `translate3d(${s},${i},0)`
            }
            raf() {
                void 0 !== this.dMouseX && void 0 !== this.dMouseY && (this.dMouseX -= (this.dMouseX - this.mouseX) * this.damping, this.dMouseY -= (this.dMouseY - this.mouseY) * this.damping), this.updateArrows(), window.requestAnimationFrame(this.raf.bind(this))
            }
            gsHandleBreakpoint() {
                let e = "";
                this.gsMediaQueries[0].matches ? e = "" : this.gsMediaQueries[1].matches ? e = "settingsMd" : this.gsMediaQueries[2].matches && (e = "settingsLg");
                const t = "" !== e ? this.swiperSettings[e] : {};
                Object.assign(this.swiperSettings, t), this.initSwiper()
            }
            onMouseMove(e) {
                const t = this.el.getBoundingClientRect();
                this.mouseX = e.clientX - t.left, this.mouseY = e.clientY - t.top, this.mouseX > t.width / 2 ? (this.isMouseOnLeft = !1, this.leftArrow.classList.remove("ed-active"), this.rightArrow.classList.add("ed-active")) : (this.isMouseOnLeft = !0, this.leftArrow.classList.add("ed-active"), this.rightArrow.classList.remove("ed-active")), e.target.classList && e.target.classList.contains("swiper-pagination-bullet") || "A" === e.target.tagName || "BUTTON" === e.target.tagName ? (this.leftArrow.style.opacity = 0, this.rightArrow.style.opacity = 0) : (this.leftArrow.style.opacity = 1, this.rightArrow.style.opacity = 1)
            }
            onClick() {
                this.isMouseOnLeft && "0" !== this.leftArrow.style.opacity ? this.swiperInstance && this.swiperInstance.slidePrev() : this.isMouseOnLeft || "0" === this.rightArrow.style.opacity || this.swiperInstance && this.swiperInstance.slideNext()
            }
            onMouseEnter(e) {
                this.mouseY = e.offsetY, this.mouseX = e.offsetX, this.dMouseX = e.offsetX, this.dMouseY = e.offsetY, this.leftArrow.style.opacity = 1, this.rightArrow.style.opacity = 1
            }
            onMouseLeave() {
                this.leftArrow.style.opacity = 0, this.rightArrow.style.opacity = 0
            }
            initSwiper() {
                return this.swiperSettings.autoHeight ? (this.el.classList.add("adaptive-height"), this.el.classList.remove("fixed-height")) : (this.el.classList.remove("adaptive-height"), this.el.classList.add("fixed-height")), "auto" === this.swiperSettings.slidesPerView ? (this.el.classList.remove("slides-number"), this.el.classList.add("slides-auto")) : (this.el.classList.add("slides-number"), this.el.classList.remove("slides-auto")), this.swiperInstance && this.swiperInstance.destroy(!0, !0), this.swiperInstance = new q(this.domSwiper, { ...this.swiperSettings,
                    modules: [K, J, ue, de, le, he, pe, te, ne, ee, Z, ie, se],
                    preloadImages: !1,
                    watchSlidesProgress: !0,
                    watchSlidesVisibility: !0,
                    lazy: {
                        enabled: !0,
                        loadPrevNext: !0,
                        loadPrevNextAmount: 2,
                        loadOnTransitionStart: !0
                    }
                }), [...document.querySelectorAll(".eedee-gutenslider-nav svg, .eedee-gutenslider-nav #bg, .eedee-gutenslider-nav .bg, .eedee-gutenslider-nav #arrow, .eedee-gutenslider-nav .arrow")].forEach((e => {
                    e.style.transition = "fill 0.3s, stroke 0.3s, background 0.3s, transform 0.5s"
                })), this.swiperInstance
            }
            updateDom() {
                const e = this.el.querySelectorAll(".wp-block-eedee-block-gutenslide");
                let t = 0;
                const i = this.el.dataset.hash ? this.el.dataset.hash : this.el.id;
                [...e].forEach((function(e, s) {
                    if ((e.classList.contains("ed-bg-image") || e.classList.contains("ed-bg-vidoe")) && (e.dataset.lgImageIdx = t, t++, e.classList.contains("ed-bg-video"))) {
                        const t = e.querySelector(".eedee-background-div video");
                        e.style.width = `${t.width}px`
                    }
                    void 0 !== typeof e.dataset.hash && "" !== e.dataset.hash || (e.dataset.hash = `${i}-${s+1}`)
                }))
            }
            initLg() {
                if (!this.swiperSettings.hasLg) return;
                const e = [...this.domSlides].reduce(((e, t) => {
                    let i;
                    if (t.classList.contains("ed-bg-image")) {
                        const e = t.querySelector(".eedee-background-div img");
                        i = {
                            src: e.src,
                            thumb: e.src,
                            alt: e.alt,
                            srcset: e.srcset
                        }
                    } else {
                        if (!t.classList.contains("ed-bg-video")) return e; {
                            const e = t.querySelector(".eedee-background-div video"),
                                s = e.hasAttribute("poster") && "" !== e.getAttribute("poster") ? e.poster : eedeeGutenslider.pluginsUrl + "/build/images/video_poster_placeholder.jpg";
                            i = {
                                size: `${e.dataset.width}-${e.dataset.height}`,
                                video: {
                                    source: [{
                                        src: e.src,
                                        type: e.getAttribute("type"),
                                        alt: e.alt
                                    }],
                                    attributes: {
                                        controls: !0
                                    }
                                },
                                poster: s,
                                thumb: s
                            }, e.hasAttribute("loop") && (i.video.attributes.loop = "")
                        }
                    }
                    const s = t.querySelector("img, video");
                    let n = "";
                    this.swiperSettings.lgTitle && ("title" === this.swiperSettings.lgTitle && (n = void 0 === s.dataset.title ? "" : s.dataset.title), "alt" === this.swiperSettings.lgTitle && (n = void 0 === s.dataset.alt ? "" : s.alt));
                    let o = "";
                    return this.swiperSettings.lgCaption && ("caption" === this.swiperSettings.lgCaption && (o = void 0 === s.dataset.caption ? "" : s.dataset.caption), "description" === this.swiperSettings.lgCaption && (o = void 0 === s.dataset.description ? "" : s.dataset.description), "alt" === this.swiperSettings.lgCaption && (o = void 0 === s.dataset.alt ? "" : s.alt)), i = { ...i,
                        subHtml: `<h4>${n}</h4><p>${o}</p>`
                    }, e.push(i), e
                }), []);
                var t, i;
                this.lightGallery = (t = this.el, i = {
                    licenseKey: "1234-4232-1231-3111",
                    plugins: this.swiperSettings.lgThumbnails ? [Ve, Ae, _e] : [Ve, _e],
                    dynamic: !0,
                    dynamicEl: e,
                    mode: this.lgTransition,
                    container: document.body,
                    addClass: "gs-lightgallery",
                    download: !1,
                    hideBarsDelay: 2e3,
                    loop: Boolean(this.swiperSettings.loop),
                    counter: Boolean(this.swiperSettings.hasLgCounter),
                    autoplayFirstVideo: !1
                }, new ke(t, i)), this.el.addEventListener("lgAfterSlide", this.onLgAfterSlide), this.el.addEventListener("lgBeforeOpen", this.onLgBeforeOpen), this.el.addEventListener("lgBeforeClose", this.onLgBeforeClose), [...this.el.querySelectorAll(".wp-block-eedee-block-gutenslide")].map(((e, t) => {
                    (e.classList.contains("ed-bg-image") || e.classList.contains("ed-bg-video")) && null === e.querySelector(".slide-link") && e.addEventListener("click", (() => {
                        const t = parseInt(e.dataset.lgImageIdx);
                        this.lightGallery.openGallery(t || 0), this.lightGallery.$backdrop.firstElement.style.backgroundColor = this.overlayBgColor ? this.overlayBgColor : "#fff", this.lightGallery.$container.firstElement.style.setProperty("--gutenslider-lightgallery-font", this.fontColor)
                    }))
                }))
            }
            onLgBeforeOpen(e) {
                this.swiperSettings.autoplay && this.swiperInstance.autoplay.stop()
            }
            onLgBeforeClose(e) {
                this.swiperSettings.autoplay && setTimeout((() => {
                    this.swiperInstance && this.swiperInstance.autoplay.start()
                }), 1e3)
            }
            onLgAfterSlide(e) {
                const {
                    index: t
                } = e.detail;
                if (void 0 !== t) {
                    const e = this.el.querySelector(`[data-lg-image-idx="${t}"]`),
                        i = e && e.dataset.swiperSlideIndex;
                    this.swiperSettings.loop ? this.swiperInstance && this.swiperInstance.slideToLoop(parseInt(i)) : this.swiperInstance && this.swiperInstance.slideTo(parseInt(i))
                }
            }
            initPremium() {
                void 0 !== typeof me() && document.querySelectorAll(".wp-block-eedee-block-gutenslider.has-parallax").forEach((function(e) {
                    const t = e.dataset.parallaxDirection || "top",
                        i = e.dataset.parallaxAmount || 1.3,
                        s = e.querySelectorAll(".eedee-background-div img");
                    new(me())(s, {
                        scale: i,
                        orientation: t
                    })
                }))
            }
        }
        var Fe;
        Fe = function() {
            [...document.querySelectorAll(".wp-block-eedee-block-gutenslider")].forEach((function(e) {
                e.gutenslider = new je(e)
            }))
        }, "undefined" != typeof document && ("complete" !== document.readyState && "interactive" !== document.readyState ? document.addEventListener("DOMContentLoaded", Fe) : Fe())
    })()
})();