! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Logo = e() : t.Logo = e()
}(this, function() {
    return function(t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 6)
    }([function(t, e) {
        function n(t, e) {
            var n = t[1] || "",
                o = t[3];
            if (!o) return n;
            if (e && "function" == typeof btoa) {
                var r = i(o);
                return [n].concat(o.sources.map(function(t) {
                    return "/*# sourceURL=" + o.sourceRoot + t + " */"
                })).concat([r]).join("\n")
            }
            return [n].join("\n")
        }

        function i(t) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */"
        }
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var i = n(e, t);
                    return e[2] ? "@media " + e[2] + "{" + i + "}" : i
                }).join("")
            }, e.i = function(t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var M = t[o];
                    "number" == typeof M[0] && i[M[0]] || (n && !M[2] ? M[2] = n : n && (M[2] = "(" + M[2] + ") and (" + n + ")"), e.push(M))
                }
            }, e
        }
    }, function(t, e, n) {
        function i(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    o = c[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(s(i.parts[r], e))
                } else {
                    for (var M = [], r = 0; r < i.parts.length; r++) M.push(s(i.parts[r], e));
                    c[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: M
                    }
                }
            }
        }

        function o(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o],
                    M = e.base ? r[0] + e.base : r[0],
                    u = r[1],
                    a = r[2],
                    j = r[3],
                    s = {
                        css: u,
                        media: a,
                        sourceMap: j
                    };
                i[M] ? i[M].parts.push(s) : n.push(i[M] = {
                    id: M,
                    parts: [s]
                })
            }
            return n
        }

        function r(t, e) {
            var n = I(t.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = h[h.length - 1];
            if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), h.push(e);
            else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(e)
            }
        }

        function M(t) {
            if (null === t.parentNode) return !1;
            t.parentNode.removeChild(t);
            var e = h.indexOf(t);
            e >= 0 && h.splice(e, 1)
        }

        function u(t) {
            var e = document.createElement("style");
            return t.attrs.type = "text/css", j(e, t.attrs), r(t, e), e
        }

        function a(t) {
            var e = document.createElement("link");
            return t.attrs.type = "text/css", t.attrs.rel = "stylesheet", j(e, t.attrs), r(t, e), e
        }

        function j(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }

        function s(t, e) {
            var n, i, o, r;
            if (e.transform && t.css) {
                if (!(r = e.transform(t.css))) return function() {};
                t.css = r
            }
            if (e.singleton) {
                var j = l++;
                n = T || (T = u(e)), i = g.bind(null, n, j, !1), o = g.bind(null, n, j, !0)
            } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = a(e), i = N.bind(null, n, e), o = function() {
                M(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = u(e), i = D.bind(null, n), o = function() {
                M(n)
            });
            return i(t),
                function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        i(t = e)
                    } else o()
                }
        }

        function g(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet) t.styleSheet.cssText = z(e, o);
            else {
                var r = document.createTextNode(o),
                    M = t.childNodes;
                M[e] && t.removeChild(M[e]), M.length ? t.insertBefore(r, M[e]) : t.appendChild(r)
            }
        }

        function D(t, e) {
            var n = e.css,
                i = e.media;
            if (i && t.setAttribute("media", i), t.styleSheet) t.styleSheet.cssText = n;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(n))
            }
        }

        function N(t, e, n) {
            var i = n.css,
                o = n.sourceMap,
                r = void 0 === e.convertToAbsoluteUrls && o;
            (e.convertToAbsoluteUrls || r) && (i = y(i)), o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var M = new Blob([i], {
                    type: "text/css"
                }),
                u = t.href;
            t.href = URL.createObjectURL(M), u && URL.revokeObjectURL(u)
        }
        var c = {},
            L = function(t) {
                var e;
                return function() {
                    return void 0 === e && (e = t.apply(this, arguments)), e
                }
            }(function() {
                return window && document && document.all && !window.atob
            }),
            I = function(t) {
                var e = {};
                return function(n) {
                    return void 0 === e[n] && (e[n] = t.call(this, n)), e[n]
                }
            }(function(t) {
                return document.querySelector(t)
            }),
            T = null,
            l = 0,
            h = [],
            y = n(2);
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            e = e || {}, e.attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || (e.singleton = L()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
            var n = o(t, e);
            return i(n, e),
                function(t) {
                    for (var r = [], M = 0; M < n.length; M++) {
                        var u = n[M],
                            a = c[u.id];
                        a.refs--, r.push(a)
                    }
                    if (t) {
                        i(o(t, e), e)
                    }
                    for (var M = 0; M < r.length; M++) {
                        var a = r[M];
                        if (0 === a.refs) {
                            for (var j = 0; j < a.parts.length; j++) a.parts[j]();
                            delete c[a.id]
                        }
                    }
                }
        };
        var z = function() {
            var t = [];
            return function(e, n) {
                return t[e] = n, t.filter(Boolean).join("\n")
            }
        }()
    }, function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e) throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t) return t;
            var n = e.protocol + "//" + e.host,
                i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return t;
                var r;
                return r = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : i + o.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
            })
        }
    }, function(t, e, n) {
        var i, o;
        i = [n(4)], void 0 !== (o = function(t) {
            function e() {
                return "function" == typeof window.Tone
            }
            var n = t(256).random,
                i = function(t) {
                    this._silentThresh = .001, this._rms = 0, this._container = t, this._element = document.createElement("canvas"), this._element.id = "Canvas", t.appendChild(this._element), this._context = this._element.getContext("2d"), e() && (this._analyser = new Tone.Waveform(256), this._signal = (new Tone.Zero).connect(this._analyser), Tone.Master.connect(this._analyser)), e() && (this._boundLoop = this._loop.bind(this), this._loop()), this.resize()
                };
            return i.prototype.resize = function(t, i) {
                t = t || this._container.offsetWidth, i = i || this._container.offsetHeight, this._context.canvas.width = 2 * t, this._context.canvas.height = 2 * i, e() || this._drawBuffer(n, !0)
            }, i.prototype._loop = function() {
                requestAnimationFrame(this._boundLoop);
                var t = this._analyser.getValue();
                this._isSilent(t) ? this._drawBuffer(n, !0) : this._drawBuffer(t, !1)
            }, i.prototype._drawBuffer = function(t, e) {
                var n = this._context,
                    i = this._context.canvas.width,
                    o = this._context.canvas.height;
                margin = e ? this._scale(this._rms, 0, this._silentThresh, .2 * o, .5 * o) : .2 * o, n.clearRect(0, 0, i, o), n.beginPath();
                for (var r, M = 0, u = t.length; M < u; M++) {
                    var a = this._scale(M, 0, u - 1, 0, i),
                        j = this._scale(t[M], -1, 1, o - margin, margin);
                    0 === M ? (r = j, n.moveTo(a, j)) : n.lineTo(a, j)
                }
                n.lineTo(i, o), n.lineTo(0, o), n.lineTo(0, r), n.lineCap = "round", n.fillStyle = "#22DBC0", n.fill()
            }, i.prototype._isSilent = function(t) {
                for (var e = 0, n = 0; n < t.length; n++) e += Math.pow(t[n], 2);
                var i = Math.sqrt(e / t.length);
                return this._rms = Math.max(i, .9 * this._rms), this._rms < this._silentThresh
            }, i.prototype._scale = function(t, e, n, i, o) {
                return (t - e) / (n - e) * (o - i) + i
            }, i
        }.apply(e, i)) && (t.exports = o)
    }, function(t, e, n) {
        var i;
        void 0 !== (i = function() {
            return function(t) {
                var e, n = new Array(t),
                    i = new Array(t),
                    o = new Array(t),
                    r = new Array(t),
                    M = [n, o, r, i];
                for (e = 0; e < t; e++) n[e] = Math.sin(2 * Math.PI * e / t);
                for (e = 0; e < t; e++) o[e] = (e + t / 2) % t / t * 2 - 1;
                for (e = 0; e < t; e++) r[e] = e < t / 3 ? e / (t / 3) * 2 - 1 : e < 2 * t / 3 ? 2 * (1 - (e - t / 3) / (t / 3)) - 1 : (e - 2 * t / 3) / (t / 3) * 2 - 1;
                for (e = 0; e < t; e++) {
                    var u = t / 16;
                    i[e] = e < u ? -1 : e < t / 2 ? 1 : e < t - u ? -1 : 1
                }
                return {
                    sawtooth: o,
                    sine: n,
                    triangle: r,
                    square: i,
                    random: M[Math.floor(Math.random() * M.length)]
                }
            }
        }.call(e, n, e, t)) && (t.exports = i)
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAuMDA5NzY1NjI1IiBoZWlnaHQ9IjEzMS44ODQ3NjU2MjUiPjxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNTYuNDUgMjYuNDFMMzQuNDcgMjYuNDFMMzQuNDcgODkuNzlMMjUuNjggODkuNzlMMjUuNjggMjYuNDFMMy43MSAyNi40MUwzLjcxIDE4LjY5TDU2LjQ1IDE4LjY5TDU2LjQ1IDI2LjQxWiIvPjwvc3ZnPg=="
    }, function(t, e, n) {
        var i, o;
        i = [n(7), n(3), n(5)], void 0 !== (o = function(t, e, n) {
            var i = function(t) {
                if (!(this instanceof i)) return new i(t);
                for (var n in i.defaults) void 0 === t[n] && (t[n] = i.defaults[n]);
                this.element = document.createElement("div"), this.element.id = "TonejsLogo", "string" == typeof t.container ? document.querySelector(t.container).appendChild(this.element) : t.container instanceof Element && t.container.appendChild(this.element), this.logoContainer = document.createElement("div"), this.logoContainer.id = "LogoContainer", this.logoContainer.innerHTML = "<span id='T'></span><span id='one'></span><span id='js'></span>", this.element.appendChild(this.logoContainer), this.canvasContainer = document.createElement("div"), this.canvasContainer.id = "Canvas", this.logoContainer.appendChild(this.canvasContainer), this.analyser = new e(this.canvasContainer), this.link = document.createElement("a"), this.link.href = "https://tonejs.github.io", this.logoContainer.appendChild(this.link), this.resize(t.width, t.height)
            };
            return i.defaults = {
                container: "body",
                width: 300,
                height: 80
            }, i.prototype.resize = function(t, e) {
                return this.element.style.width = t + "px", this.element.style.height = e + "px", t = e / .3, this.logoContainer.style.width = t + "px", this.logoContainer.style.height = e + "px", this.canvasContainer.style.borderRadius = e / 50 + "px", this.canvasContainer.style.width = this.canvasContainer.offsetHeight + "px", this.canvasContainer.style.height = this.canvasContainer.offsetHeight + "px", this.analyser.resize(this.canvasContainer.offsetHeight, this.canvasContainer.offsetHeight), this
            }, i.prototype._draw = function() {
                requestAnimationFrame(this._draw.bind(this));
                var t = this.analyser.analyse();
                this._isSilent(t) ? this._drawBuffer(waveform, !0) : this._drawBuffer(t, !1)
            }, i.prototype._drawBuffer = function(t, e) {
                var n = this.context,
                    i = this.context.canvas.width,
                    o = this.context.canvas.height;
                margin = e ? this._scale(this._rms, 0, this._silentThresh, .2 * o, .5 * o) : .2 * o, n.clearRect(0, 0, i, o), n.beginPath();
                for (var r, M = 0, u = t.length; M < u; M++) {
                    var a = this._scale(M, 0, u - 1, 0, i),
                        j = this._scale(t[M], -1, 1, o - margin, margin);
                    0 === M ? (r = j, n.moveTo(a, j)) : n.lineTo(a, j)
                }
                n.lineTo(i, o), n.lineTo(0, o), n.lineTo(0, r), n.lineCap = "round", n.fillStyle = "#22DBC0", n.fill()
            }, i.prototype._isSilent = function(t) {
                for (var e = 0, n = 0; n < t.length; n++) e += Math.pow(t[n], 2);
                var i = Math.sqrt(e / t.length);
                return this._rms = Math.max(i, .9 * this._rms), this._rms < this._silentThresh
            }, i.prototype._scale = function(t, e, n, i, o) {
                return (t - e) / (n - e) * (o - i) + i
            }, i.prototype.dispose = function() {
                this.element.remove(), this.element = null, this.canvas.remove(), this.canvas = null, this.title.remove(), this.title = null, this.context = null, this.analyser.dispose(), this.analyser = null, this._signal.dispose(), this._signal = null
            }, i
        }.apply(e, i)) && (t.exports = o)
    }, function(t, e, n) {
        var i = n(8);
        "string" == typeof i && (i = [
            [t.i, i, ""]
        ]);
        var o = {};
        o.transform = void 0;
        n(1)(i, o);
        i.locals && (t.exports = i.locals)
    }, function(t, e, n) {
        e = t.exports = n(0)(void 0), e.push([t.i, "#TonejsLogo{position:relative}#TonejsLogo #LogoContainer{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:100%;width:100%;overflow:hidden;background-color:#000}#TonejsLogo #LogoContainer span{height:100%;width:100%;position:relative;display:inline-block;position:absolute}#TonejsLogo #LogoContainer #T{background:url(" + n(5) + ");background-repeat:no-repeat;background-size:auto 110%;left:0}#TonejsLogo #LogoContainer #one{background:url(" + n(9) + ");background-repeat:no-repeat;background-size:auto 110%;left:13%}#TonejsLogo #LogoContainer #js{background:url(" + n(10) + ");background-repeat:no-repeat;background-size:auto 110%;left:54%}#TonejsLogo #LogoContainer #Canvas{position:absolute;height:100%;top:0;border-radius:2%;right:0;background-color:#f734d7;z-index:-1}#TonejsLogo #LogoContainer a{z-index:2;cursor:pointer}#TonejsLogo #LogoContainer a,#TonejsLogoWaveform{position:absolute;width:100%;height:100%;top:0;left:0}", ""])
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgwLjAyOTI5Njg3NSIgaGVpZ2h0PSIxMzEuODg0NzY1NjI1Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTUuOTYgNjIuODhRNS45NiA1Ny4xNyA3LjYyIDUyLjI2UTkuMjggNDcuMzUgMTIuMzggNDMuNzRRMTUuNDggNDAuMTMgMTkuOTIgMzguMDVRMjQuMzcgMzUuOTggMjkuOTMgMzUuOThRMzUuNTUgMzUuOTggNDAuMDEgMzguMDVRNDQuNDggNDAuMTMgNDcuNTggNDMuNzRRNTAuNjggNDcuMzUgNTIuMzQgNTIuMjZRNTQuMDAgNTcuMTcgNTQuMDAgNjIuODhMNTQuMDAgNjMuOTZRNTQuMDAgNjkuNjcgNTIuMzQgNzQuNTVRNTAuNjggNzkuNDMgNDcuNTggODMuMDVRNDQuNDggODYuNjYgNDAuMDQgODguNzFRMzUuNjAgOTAuNzYgMzAuMDMgOTAuNzZRMjQuNDEgOTAuNzYgMTkuOTUgODguNzFRMTUuNDggODYuNjYgMTIuMzggODMuMDVROS4yOCA3OS40MyA3LjYyIDc0LjU1UTUuOTYgNjkuNjcgNS45NiA2My45Nkw1Ljk2IDYyLjg4TTE0Ljk5IDYzLjk2UTE0Ljk5IDY3Ljg2IDE1LjkyIDcxLjQwUTE2Ljg1IDc0Ljk0IDE4LjczIDc3LjYzUTIwLjYxIDgwLjMxIDIzLjQ0IDgxLjg4UTI2LjI3IDgzLjQ0IDMwLjAzIDgzLjQ0UTMzLjc0IDgzLjQ0IDM2LjU1IDgxLjg4UTM5LjM2IDgwLjMxIDQxLjI0IDc3LjYzUTQzLjEyIDc0Ljk0IDQ0LjA0IDcxLjQwUTQ0Ljk3IDY3Ljg2IDQ0Ljk3IDYzLjk2TDQ0Ljk3IDYyLjg4UTQ0Ljk3IDU5LjAyIDQ0LjAyIDU1LjQ4UTQzLjA3IDUxLjk0IDQxLjE5IDQ5LjI2UTM5LjMxIDQ2LjU3IDM2LjUwIDQ0Ljk5UTMzLjY5IDQzLjQwIDI5LjkzIDQzLjQwUTI2LjE3IDQzLjQwIDIzLjM5IDQ0Ljk5UTIwLjYxIDQ2LjU3IDE4LjczIDQ5LjI2UTE2Ljg1IDUxLjk0IDE1LjkyIDU1LjQ4UTE0Ljk5IDU5LjAyIDE0Ljk5IDYyLjg4TDE0Ljk5IDYzLjk2Wk03Ni42MSAzNi45NUw3Ny4yNSA0NC43N1E4MC4xMyA0MC42NiA4NC4zMyAzOC4zNFE4OC41MyAzNi4wMyA5My43MCAzNS45OFE5Ny44NSAzNS45OCAxMDEuMjUgMzcuMTVRMTA0LjY0IDM4LjMyIDEwNy4wMyA0MC44MVExMDkuNDIgNDMuMzAgMTEwLjcyIDQ3LjEzUTExMi4wMSA1MC45NyAxMTIuMDEgNTYuMjRMMTEyLjAxIDg5Ljc5TDEwMi45OCA4OS43OUwxMDIuOTggNTYuNDRRMTAyLjk4IDUyLjkyIDEwMi4yMCA1MC40OFExMDEuNDIgNDguMDQgOTkuODggNDYuNTJROTguMzQgNDUuMDEgOTYuMTIgNDQuMzNROTMuOTAgNDMuNjQgOTEuMDIgNDMuNjRRODYuNDcgNDMuNjQgODMuMDMgNDUuOTFRNzkuNTkgNDguMTggNzcuNTQgNTEuODlMNzcuNTQgODkuNzlMNjguNTEgODkuNzlMNjguNTEgMzYuOTVMNzYuNjEgMzYuOTVaTTE1MS44NiA5MC43NlExNDYuMjkgOTAuNzYgMTQxLjYzIDg4Ljg2UTEzNi45NiA4Ni45NSAxMzMuNjQgODMuNTRRMTMwLjMyIDgwLjEyIDEyOC40NyA3NS40M1ExMjYuNjEgNzAuNzQgMTI2LjYxIDY1LjIyTDEyNi42MSA2My4xN1ExMjYuNjEgNTYuNzggMTI4LjY2IDUxLjcyUTEzMC43MSA0Ni42NyAxMzQuMTEgNDMuMThRMTM3LjUwIDM5LjY5IDE0MS44MiAzNy44M1ExNDYuMTQgMzUuOTggMTUwLjY4IDM1Ljk4UTE1Ni40MCAzNS45OCAxNjAuNjcgMzcuOTVRMTY0Ljk0IDM5LjkzIDE2Ny43NyA0My40MlExNzAuNjEgNDYuOTEgMTcyLjAwIDUxLjY1UTE3My4zOSA1Ni4zOSAxNzMuMzkgNjEuOTBMMTczLjM5IDY1Ljk2TDEzNS42NCA2NS45NlExMzUuNzkgNjkuNTcgMTM3LjA0IDcyLjc0UTEzOC4yOCA3NS45MiAxNDAuNDUgNzguMjlRMTQyLjYzIDgwLjY1IDE0NS42NSA4Mi4wMlExNDguNjggODMuMzkgMTUyLjM0IDgzLjM5UTE1Ny4xOCA4My4zOSAxNjAuOTQgODEuNDRRMTY0LjcwIDc5LjQ4IDE2Ny4xOSA3Ni4yNkwxNzIuNzEgODAuNTZRMTcxLjM5IDgyLjU2IDE2OS40MSA4NC4zOVExNjcuNDMgODYuMjIgMTY0Ljg0IDg3LjY0UTE2Mi4yNiA4OS4wNSAxNTguOTggODkuOTFRMTU1LjcxIDkwLjc2IDE1MS44NiA5MC43Nk0xNTAuNjggNDMuNDBRMTQ3Ljk1IDQzLjQwIDE0NS41MSA0NC40MFExNDMuMDcgNDUuNDAgMTQxLjExIDQ3LjMzUTEzOS4xNiA0OS4yNiAxMzcuODIgNTIuMDdRMTM2LjQ3IDU0Ljg3IDEzNS45NCA1OC41NEwxNjQuMzYgNTguNTRMMTY0LjM2IDU3Ljg1UTE2NC4yMSA1NS4yMSAxNjMuMzUgNTIuNjNRMTYyLjUwIDUwLjA0IDE2MC44NCA0Ny45OVExNTkuMTggNDUuOTQgMTU2LjY3IDQ0LjY3UTE1NC4xNSA0My40MCAxNTAuNjggNDMuNDBaIi8+PC9zdmc+"
    }, function(t, e) {
        t.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgwLjAyOTI5Njg3NSIgaGVpZ2h0PSIxMzEuODg0NzY1NjI1Ij48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI0LjIyIDgzLjkzUTI0LjIyIDgyLjQ2IDI0LjY4IDgxLjE5UTI1LjE1IDc5LjkyIDI2LjAzIDc4Ljk3UTI2LjkwIDc4LjAyIDI4LjIyIDc3LjQ4UTI5LjU0IDc2Ljk0IDMxLjMwIDc2Ljk0UTMzLjA2IDc2Ljk0IDM0LjQwIDc3LjQ4UTM1Ljc0IDc4LjAyIDM2LjY1IDc4Ljk3UTM3LjU1IDc5LjkyIDM4LjAxIDgxLjE5UTM4LjQ4IDgyLjQ2IDM4LjQ4IDgzLjkzUTM4LjQ4IDg1LjM0IDM4LjAxIDg2LjU5UTM3LjU1IDg3LjgzIDM2LjY1IDg4Ljc2UTM1Ljc0IDg5LjY5IDM0LjQwIDkwLjIwUTMzLjA2IDkwLjcxIDMxLjMwIDkwLjcxUTI5LjU0IDkwLjcxIDI4LjIyIDkwLjIwUTI2LjkwIDg5LjY5IDI2LjAzIDg4Ljc2UTI1LjE1IDg3LjgzIDI0LjY4IDg2LjU5UTI0LjIyIDg1LjM0IDI0LjIyIDgzLjkzWk03NC42MSAzNi45NUwxMDEuMjcgMzYuOTVMMTAxLjI3IDkwLjEzUTEwMS4yNyA5NS4yMSA5OS44OCA5OS4xMVE5OC40OSAxMDMuMDIgOTUuODMgMTA1LjY4UTkzLjE2IDEwOC4zNCA4OS4zMyAxMDkuNzNRODUuNTAgMTExLjEyIDgwLjYyIDExMS4xMlE3Ny44MyAxMTEuMTIgNzUuNDIgMTEwLjk1UTczLjAwIDExMC43OCA3MC4zMSAxMTAuMjlMNzAuOTUgMTAyLjg3UTcxLjc4IDEwMy4wMiA3My4wNSAxMDMuMTRRNzQuMzIgMTAzLjI2IDc1LjYxIDEwMy4zM1E3Ni45MCAxMDMuNDEgNzguMTAgMTAzLjQzUTc5LjMwIDEwMy40NiA3OS45OCAxMDMuNDZRODIuNTIgMTAzLjQ2IDg0Ljc3IDEwMi44MFE4Ny4wMSAxMDIuMTQgODguNjcgMTAwLjU4UTkwLjMzIDk5LjAxIDkxLjI4IDk2LjQ1UTkyLjI0IDkzLjg5IDkyLjI0IDkwLjEzTDkyLjI0IDQ0LjgxTDc0LjYxIDQ0LjgxTDc0LjYxIDM2Ljk1TTkwLjk3IDIzLjA0UTkwLjk3IDIwLjg0IDkyLjI5IDE5LjMwUTkzLjYwIDE3Ljc2IDk2LjM0IDE3Ljc2UTk5LjA3IDE3Ljc2IDEwMC40NCAxOS4zMFExMDEuODEgMjAuODQgMTAxLjgxIDIzLjA0UTEwMS44MSAyNS4yMyAxMDAuNDQgMjYuNzJROTkuMDcgMjguMjEgOTYuMzQgMjguMjFROTMuNjAgMjguMjEgOTIuMjkgMjYuNzJROTAuOTcgMjUuMjMgOTAuOTcgMjMuMDRaTTE2My42MiA3NS43N1ExNjMuNjIgNzQuMTYgMTYyLjk5IDcyLjg3UTE2Mi4zNSA3MS41NyAxNjAuODQgNzAuNTBRMTU5LjMzIDY5LjQyIDE1Ni44NCA2OC41MlExNTQuMzUgNjcuNjIgMTUwLjYzIDY2Ljg4UTE0Ni4wOSA2NS45NiAxNDIuMzYgNjQuNjRRMTM4LjYyIDYzLjMyIDEzNS45NiA2MS40OVExMzMuMzAgNTkuNjYgMTMxLjg0IDU3LjE5UTEzMC4zNyA1NC43MyAxMzAuMzcgNTEuNDZRMTMwLjM3IDQ4LjIzIDEzMS44OCA0NS40MlExMzMuNDAgNDIuNjIgMTM2LjEzIDQwLjUyUTEzOC44NyAzOC40MiAxNDIuNjUgMzcuMjBRMTQ2LjQ0IDM1Ljk4IDE1MC45OCAzNS45OFExNTUuODYgMzUuOTggMTU5Ljc3IDM3LjI1UTE2My42NyAzOC41MiAxNjYuNDEgNDAuNzZRMTY5LjE0IDQzLjAxIDE3MC42MyA0Ni4wMVExNzIuMTIgNDkuMDEgMTcyLjEyIDUyLjQ4TDE2My4wOSA1Mi40OFExNjMuMDkgNTAuNzcgMTYyLjIxIDQ5LjE0UTE2MS4zMyA0Ny41MCAxNTkuNzcgNDYuMjNRMTU4LjIwIDQ0Ljk2IDE1NS45OCA0NC4xOFExNTMuNzYgNDMuNDAgMTUwLjk4IDQzLjQwUTE0OC4xMCA0My40MCAxNDUuOTIgNDQuMDNRMTQzLjc1IDQ0LjY3IDE0Mi4zMSA0NS43NFExNDAuODcgNDYuODIgMTQwLjE0IDQ4LjIzUTEzOS40MCA0OS42NSAxMzkuNDAgNTEuMTZRMTM5LjQwIDUyLjcyIDEzOS45OSA1My45NVExNDAuNTggNTUuMTcgMTQyLjAyIDU2LjE0UTE0My40NiA1Ny4xMiAxNDUuODcgNTcuOTBRMTQ4LjI5IDU4LjY4IDE1Mi4wMCA1OS40MVExNTYuODggNjAuNDQgMTYwLjc0IDYxLjc4UTE2NC42MCA2My4xMyAxNjcuMjQgNjUuMDBRMTY5Ljg3IDY2Ljg4IDE3MS4yNiA2OS4zOFExNzIuNjYgNzEuODcgMTcyLjY2IDc1LjE0UTE3Mi42NiA3OC42NSAxNzEuMDcgODEuNTNRMTY5LjQ4IDg0LjQxIDE2Ni42NSA4Ni40NlExNjMuODIgODguNTIgMTU5Ljg2IDg5LjY0UTE1NS45MSA5MC43NiAxNTEuMjIgOTAuNzZRMTQ1Ljg1IDkwLjc2IDE0MS42NSA4OS4zMlExMzcuNDUgODcuODggMTM0LjU1IDg1LjUxUTEzMS42NCA4My4xNCAxMzAuMTAgODAuMDJRMTI4LjU2IDc2Ljg5IDEyOC41NiA3My41M0wxMzcuNjAgNzMuNTNRMTM3Ljc5IDc2LjMxIDEzOS4wOSA3OC4yMVExNDAuMzggODAuMTIgMTQyLjMxIDgxLjI5UTE0NC4yNCA4Mi40NiAxNDYuNTggODIuOTVRMTQ4LjkzIDgzLjQ0IDE1MS4yMiA4My40NFExNTYuOTMgODMuNDQgMTYwLjI1IDgxLjM0UTE2My41NyA3OS4yNCAxNjMuNjIgNzUuNzdaIi8+PC9zdmc+"
    }])
});