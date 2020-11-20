/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.3
 *
 * Copyright 2018 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!(function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t();
    }
})(function () {
    return (function o(r, s, l) {
        function u(e, t) {
            if (!s[e]) {
                if (!r[e]) {
                    var i = "function" == typeof require && require;
                    if (!t && i) return i(e, !0);
                    if (d) return d(e, !0);
                    var n = new Error("Cannot find module '" + e + "'");
                    throw ((n.code = "MODULE_NOT_FOUND"), n);
                }
                var a = (s[e] = { exports: {} });
                r[e][0].call(
                    a.exports,
                    function (t) {
                        return u(r[e][1][t] || t);
                    },
                    a,
                    a.exports,
                    o,
                    r,
                    s,
                    l
                );
            }
            return s[e].exports;
        }
        for (var d = "function" == typeof require && require, t = 0; t < l.length; t++) u(l[t]);
        return u;
    })(
        {
            1: [function (t, e, i) { }, {}],
            2: [
                function (t, e, i) {
                    var o = t(6);
                    function n(t) {
                        if (t) {
                            var e = [0, 0, 0],
                                i = 1,
                                n = t.match(/^#([a-fA-F0-9]{3})$/i);
                            if (n) {
                                n = n[1];
                                for (var a = 0; a < e.length; a++) e[a] = parseInt(n[a] + n[a], 16);
                            } else if ((n = t.match(/^#([a-fA-F0-9]{6})$/i))) {
                                n = n[1];
                                for (a = 0; a < e.length; a++) e[a] = parseInt(n.slice(2 * a, 2 * a + 2), 16);
                            } else if ((n = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i))) {
                                for (a = 0; a < e.length; a++) e[a] = parseInt(n[a + 1]);
                                i = parseFloat(n[4]);
                            } else if ((n = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i))) {
                                for (a = 0; a < e.length; a++) e[a] = Math.round(2.55 * parseFloat(n[a + 1]));
                                i = parseFloat(n[4]);
                            } else if ((n = t.match(/(\w+)/))) {
                                if ("transparent" == n[1]) return [0, 0, 0, 0];
                                if (!(e = o[n[1]])) return;
                            }
                            for (a = 0; a < e.length; a++) e[a] = d(e[a], 0, 255);
                            return (i = i || 0 == i ? d(i, 0, 1) : 1), (e[3] = i), e;
                        }
                    }
                    function a(t) {
                        if (t) {
                            var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var i = parseFloat(e[4]);
                                return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
                            }
                        }
                    }
                    function r(t) {
                        if (t) {
                            var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                            if (e) {
                                var i = parseFloat(e[4]);
                                return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)];
                            }
                        }
                    }
                    function s(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
                    }
                    function l(t, e) {
                        return "rgba(" + Math.round((t[0] / 255) * 100) + "%, " + Math.round((t[1] / 255) * 100) + "%, " + Math.round((t[2] / 255) * 100) + "%, " + (e || t[3] || 1) + ")";
                    }
                    function u(t, e) {
                        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
                    }
                    function d(t, e, i) {
                        return Math.min(Math.max(e, t), i);
                    }
                    function c(t) {
                        var e = t.toString(16).toUpperCase();
                        return e.length < 2 ? "0" + e : e;
                    }
                    e.exports = {
                        getRgba: n,
                        getHsla: a,
                        getRgb: function (t) {
                            var e = n(t);
                            return e && e.slice(0, 3);
                        },
                        getHsl: function (t) {
                            var e = a(t);
                            return e && e.slice(0, 3);
                        },
                        getHwb: r,
                        getAlpha: function (t) {
                            var e = n(t);
                            {
                                if (e) return e[3];
                                if ((e = a(t))) return e[3];
                                if ((e = r(t))) return e[3];
                            }
                        },
                        hexString: function (t) {
                            return "#" + c(t[0]) + c(t[1]) + c(t[2]);
                        },
                        rgbString: function (t, e) {
                            if (e < 1 || (t[3] && t[3] < 1)) return s(t, e);
                            return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
                        },
                        rgbaString: s,
                        percentString: function (t, e) {
                            if (e < 1 || (t[3] && t[3] < 1)) return l(t, e);
                            var i = Math.round((t[0] / 255) * 100),
                                n = Math.round((t[1] / 255) * 100),
                                a = Math.round((t[2] / 255) * 100);
                            return "rgb(" + i + "%, " + n + "%, " + a + "%)";
                        },
                        percentaString: l,
                        hslString: function (t, e) {
                            if (e < 1 || (t[3] && t[3] < 1)) return u(t, e);
                            return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
                        },
                        hslaString: u,
                        hwbString: function (t, e) {
                            void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                            return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
                        },
                        keyword: function (t) {
                            return h[t.slice(0, 3)];
                        },
                    };
                    var h = {};
                    for (var f in o) h[o[f]] = f;
                },
                { 6: 6 },
            ],
            3: [
                function (t, e, i) {
                    var d = t(5),
                        n = t(2),
                        r = function (t) {
                            return t instanceof r
                                ? t
                                : this instanceof r
                                    ? ((this.valid = !1),
                                        (this.values = { rgb: [0, 0, 0], hsl: [0, 0, 0], hsv: [0, 0, 0], hwb: [0, 0, 0], cmyk: [0, 0, 0, 0], alpha: 1 }),
                                        void ("string" == typeof t
                                            ? (e = n.getRgba(t))
                                                ? this.setValues("rgb", e)
                                                : (e = n.getHsla(t))
                                                    ? this.setValues("hsl", e)
                                                    : (e = n.getHwb(t)) && this.setValues("hwb", e)
                                            : "object" == typeof t &&
                                            (void 0 !== (e = t).r || void 0 !== e.red
                                                ? this.setValues("rgb", e)
                                                : void 0 !== e.l || void 0 !== e.lightness
                                                    ? this.setValues("hsl", e)
                                                    : void 0 !== e.v || void 0 !== e.value
                                                        ? this.setValues("hsv", e)
                                                        : void 0 !== e.w || void 0 !== e.whiteness
                                                            ? this.setValues("hwb", e)
                                                            : (void 0 === e.c && void 0 === e.cyan) || this.setValues("cmyk", e))))
                                    : new r(t);
                            var e;
                        };
                    (r.prototype = {
                        isValid: function () {
                            return this.valid;
                        },
                        rgb: function () {
                            return this.setSpace("rgb", arguments);
                        },
                        hsl: function () {
                            return this.setSpace("hsl", arguments);
                        },
                        hsv: function () {
                            return this.setSpace("hsv", arguments);
                        },
                        hwb: function () {
                            return this.setSpace("hwb", arguments);
                        },
                        cmyk: function () {
                            return this.setSpace("cmyk", arguments);
                        },
                        rgbArray: function () {
                            return this.values.rgb;
                        },
                        hslArray: function () {
                            return this.values.hsl;
                        },
                        hsvArray: function () {
                            return this.values.hsv;
                        },
                        hwbArray: function () {
                            var t = this.values;
                            return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
                        },
                        cmykArray: function () {
                            return this.values.cmyk;
                        },
                        rgbaArray: function () {
                            var t = this.values;
                            return t.rgb.concat([t.alpha]);
                        },
                        hslaArray: function () {
                            var t = this.values;
                            return t.hsl.concat([t.alpha]);
                        },
                        alpha: function (t) {
                            return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
                        },
                        red: function (t) {
                            return this.setChannel("rgb", 0, t);
                        },
                        green: function (t) {
                            return this.setChannel("rgb", 1, t);
                        },
                        blue: function (t) {
                            return this.setChannel("rgb", 2, t);
                        },
                        hue: function (t) {
                            return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
                        },
                        saturation: function (t) {
                            return this.setChannel("hsl", 1, t);
                        },
                        lightness: function (t) {
                            return this.setChannel("hsl", 2, t);
                        },
                        saturationv: function (t) {
                            return this.setChannel("hsv", 1, t);
                        },
                        whiteness: function (t) {
                            return this.setChannel("hwb", 1, t);
                        },
                        blackness: function (t) {
                            return this.setChannel("hwb", 2, t);
                        },
                        value: function (t) {
                            return this.setChannel("hsv", 2, t);
                        },
                        cyan: function (t) {
                            return this.setChannel("cmyk", 0, t);
                        },
                        magenta: function (t) {
                            return this.setChannel("cmyk", 1, t);
                        },
                        yellow: function (t) {
                            return this.setChannel("cmyk", 2, t);
                        },
                        black: function (t) {
                            return this.setChannel("cmyk", 3, t);
                        },
                        hexString: function () {
                            return n.hexString(this.values.rgb);
                        },
                        rgbString: function () {
                            return n.rgbString(this.values.rgb, this.values.alpha);
                        },
                        rgbaString: function () {
                            return n.rgbaString(this.values.rgb, this.values.alpha);
                        },
                        percentString: function () {
                            return n.percentString(this.values.rgb, this.values.alpha);
                        },
                        hslString: function () {
                            return n.hslString(this.values.hsl, this.values.alpha);
                        },
                        hslaString: function () {
                            return n.hslaString(this.values.hsl, this.values.alpha);
                        },
                        hwbString: function () {
                            return n.hwbString(this.values.hwb, this.values.alpha);
                        },
                        keyword: function () {
                            return n.keyword(this.values.rgb, this.values.alpha);
                        },
                        rgbNumber: function () {
                            var t = this.values.rgb;
                            return (t[0] << 16) | (t[1] << 8) | t[2];
                        },
                        luminosity: function () {
                            for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                                var n = t[i] / 255;
                                e[i] = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
                            }
                            return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
                        },
                        contrast: function (t) {
                            var e = this.luminosity(),
                                i = t.luminosity();
                            return i < e ? (e + 0.05) / (i + 0.05) : (i + 0.05) / (e + 0.05);
                        },
                        level: function (t) {
                            var e = this.contrast(t);
                            return 7.1 <= e ? "AAA" : 4.5 <= e ? "AA" : "";
                        },
                        dark: function () {
                            var t = this.values.rgb;
                            return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
                        },
                        light: function () {
                            return !this.dark();
                        },
                        negate: function () {
                            for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                            return this.setValues("rgb", t), this;
                        },
                        lighten: function (t) {
                            var e = this.values.hsl;
                            return (e[2] += e[2] * t), this.setValues("hsl", e), this;
                        },
                        darken: function (t) {
                            var e = this.values.hsl;
                            return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
                        },
                        saturate: function (t) {
                            var e = this.values.hsl;
                            return (e[1] += e[1] * t), this.setValues("hsl", e), this;
                        },
                        desaturate: function (t) {
                            var e = this.values.hsl;
                            return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
                        },
                        whiten: function (t) {
                            var e = this.values.hwb;
                            return (e[1] += e[1] * t), this.setValues("hwb", e), this;
                        },
                        blacken: function (t) {
                            var e = this.values.hwb;
                            return (e[2] += e[2] * t), this.setValues("hwb", e), this;
                        },
                        greyscale: function () {
                            var t = this.values.rgb,
                                e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
                            return this.setValues("rgb", [e, e, e]), this;
                        },
                        clearer: function (t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e - e * t), this;
                        },
                        opaquer: function (t) {
                            var e = this.values.alpha;
                            return this.setValues("alpha", e + e * t), this;
                        },
                        rotate: function (t) {
                            var e = this.values.hsl,
                                i = (e[0] + t) % 360;
                            return (e[0] = i < 0 ? 360 + i : i), this.setValues("hsl", e), this;
                        },
                        mix: function (t, e) {
                            var i = this,
                                n = t,
                                a = void 0 === e ? 0.5 : e,
                                o = 2 * a - 1,
                                r = i.alpha() - n.alpha(),
                                s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
                                l = 1 - s;
                            return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a));
                        },
                        toJSON: function () {
                            return this.rgb();
                        },
                        clone: function () {
                            var t,
                                e,
                                i = new r(),
                                n = this.values,
                                a = i.values;
                            for (var o in n) n.hasOwnProperty(o) && ((t = n[o]), "[object Array]" === (e = {}.toString.call(t)) ? (a[o] = t.slice(0)) : "[object Number]" === e ? (a[o] = t) : console.error("unexpected color value:", t));
                            return i;
                        },
                    }),
                        (r.prototype.spaces = {
                            rgb: ["red", "green", "blue"],
                            hsl: ["hue", "saturation", "lightness"],
                            hsv: ["hue", "saturation", "value"],
                            hwb: ["hue", "whiteness", "blackness"],
                            cmyk: ["cyan", "magenta", "yellow", "black"],
                        }),
                        (r.prototype.maxes = { rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100] }),
                        (r.prototype.getValues = function (t) {
                            for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                            return 1 !== e.alpha && (i.a = e.alpha), i;
                        }),
                        (r.prototype.setValues = function (t, e) {
                            var i,
                                n,
                                a = this.values,
                                o = this.spaces,
                                r = this.maxes,
                                s = 1;
                            if (((this.valid = !0), "alpha" === t)) s = e;
                            else if (e.length) (a[t] = e.slice(0, t.length)), (s = e[t.length]);
                            else if (void 0 !== e[t.charAt(0)]) {
                                for (i = 0; i < t.length; i++) a[t][i] = e[t.charAt(i)];
                                s = e.a;
                            } else if (void 0 !== e[o[t][0]]) {
                                var l = o[t];
                                for (i = 0; i < t.length; i++) a[t][i] = e[l[i]];
                                s = e.alpha;
                            }
                            if (((a.alpha = Math.max(0, Math.min(1, void 0 === s ? a.alpha : s))), "alpha" === t)) return !1;
                            for (i = 0; i < t.length; i++) (n = Math.max(0, Math.min(r[t][i], a[t][i]))), (a[t][i] = Math.round(n));
                            for (var u in o) u !== t && (a[u] = d[t][u](a[t]));
                            return !0;
                        }),
                        (r.prototype.setSpace = function (t, e) {
                            var i = e[0];
                            return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this);
                        }),
                        (r.prototype.setChannel = function (t, e, i) {
                            var n = this.values[t];
                            return void 0 === i ? n[e] : (i === n[e] || ((n[e] = i), this.setValues(t, n)), this);
                        }),
                        "undefined" != typeof window && (window.Color = r),
                        (e.exports = r);
                },
                { 2: 2, 5: 5 },
            ],
            4: [
                function (t, e, i) {
                    function a(t) {
                        var e,
                            i,
                            n = t[0] / 255,
                            a = t[1] / 255,
                            o = t[2] / 255,
                            r = Math.min(n, a, o),
                            s = Math.max(n, a, o),
                            l = s - r;
                        return (
                            s == r ? (e = 0) : n == s ? (e = (a - o) / l) : a == s ? (e = 2 + (o - n) / l) : o == s && (e = 4 + (n - a) / l),
                            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                            (i = (r + s) / 2),
                            [e, 100 * (s == r ? 0 : i <= 0.5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
                        );
                    }
                    function n(t) {
                        var e,
                            i,
                            n = t[0],
                            a = t[1],
                            o = t[2],
                            r = Math.min(n, a, o),
                            s = Math.max(n, a, o),
                            l = s - r;
                        return (
                            (i = 0 == s ? 0 : ((l / s) * 1e3) / 10),
                            s == r ? (e = 0) : n == s ? (e = (a - o) / l) : a == s ? (e = 2 + (o - n) / l) : o == s && (e = 4 + (n - a) / l),
                            (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                            [e, i, ((s / 255) * 1e3) / 10]
                        );
                    }
                    function o(t) {
                        var e = t[0],
                            i = t[1],
                            n = t[2];
                        return [a(t)[0], 100 * ((1 / 255) * Math.min(e, Math.min(i, n))), 100 * (n = 1 - (1 / 255) * Math.max(e, Math.max(i, n)))];
                    }
                    function s(t) {
                        var e,
                            i = t[0] / 255,
                            n = t[1] / 255,
                            a = t[2] / 255;
                        return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e];
                    }
                    function l(t) {
                        return S[JSON.stringify(t)];
                    }
                    function u(t) {
                        var e = t[0] / 255,
                            i = t[1] / 255,
                            n = t[2] / 255;
                        return [
                            100 *
                            (0.4124 * (e = 0.04045 < e ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92) +
                                0.3576 * (i = 0.04045 < i ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92) +
                                0.1805 * (n = 0.04045 < n ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92)),
                            100 * (0.2126 * e + 0.7152 * i + 0.0722 * n),
                            100 * (0.0193 * e + 0.1192 * i + 0.9505 * n),
                        ];
                    }
                    function d(t) {
                        var e = u(t),
                            i = e[0],
                            n = e[1],
                            a = e[2];
                        return (
                            (n /= 100),
                            (a /= 108.883),
                            (i = 0.008856 < (i /= 95.047) ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116),
                            [116 * (n = 0.008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = 0.008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
                        );
                    }
                    function c(t) {
                        var e,
                            i,
                            n,
                            a,
                            o,
                            r = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100;
                        if (0 == s) return [(o = 255 * l), o, o];
                        (e = 2 * l - (i = l < 0.5 ? l * (1 + s) : l + s - l * s)), (a = [0, 0, 0]);
                        for (var u = 0; u < 3; u++) (n = r + (1 / 3) * -(u - 1)) < 0 && n++, 1 < n && n--, (o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e), (a[u] = 255 * o);
                        return a;
                    }
                    function h(t) {
                        var e = t[0] / 60,
                            i = t[1] / 100,
                            n = t[2] / 100,
                            a = Math.floor(e) % 6,
                            o = e - Math.floor(e),
                            r = 255 * n * (1 - i),
                            s = 255 * n * (1 - i * o),
                            l = 255 * n * (1 - i * (1 - o));
                        n *= 255;
                        switch (a) {
                            case 0:
                                return [n, l, r];
                            case 1:
                                return [s, n, r];
                            case 2:
                                return [r, n, l];
                            case 3:
                                return [r, s, n];
                            case 4:
                                return [l, r, n];
                            case 5:
                                return [n, r, s];
                        }
                    }
                    function f(t) {
                        var e,
                            i,
                            n,
                            a,
                            o = t[0] / 360,
                            s = t[1] / 100,
                            l = t[2] / 100,
                            u = s + l;
                        switch ((1 < u && ((s /= u), (l /= u)), (n = 6 * o - (e = Math.floor(6 * o))), 0 != (1 & e) && (n = 1 - n), (a = s + n * ((i = 1 - l) - s)), e)) {
                            default:
                            case 6:
                            case 0:
                                (r = i), (g = a), (b = s);
                                break;
                            case 1:
                                (r = a), (g = i), (b = s);
                                break;
                            case 2:
                                (r = s), (g = i), (b = a);
                                break;
                            case 3:
                                (r = s), (g = a), (b = i);
                                break;
                            case 4:
                                (r = a), (g = s), (b = i);
                                break;
                            case 5:
                                (r = i), (g = s), (b = a);
                        }
                        return [255 * r, 255 * g, 255 * b];
                    }
                    function p(t) {
                        var e = t[0] / 100,
                            i = t[1] / 100,
                            n = t[2] / 100,
                            a = t[3] / 100;
                        return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))];
                    }
                    function m(t) {
                        var e,
                            i,
                            n,
                            a = t[0] / 100,
                            o = t[1] / 100,
                            r = t[2] / 100;
                        return (
                            (i = -0.9689 * a + 1.8758 * o + 0.0415 * r),
                            (n = 0.0557 * a + -0.204 * o + 1.057 * r),
                            (e = 0.0031308 < (e = 3.2406 * a + -1.5372 * o + -0.4986 * r) ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055 : (e *= 12.92)),
                            (i = 0.0031308 < i ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055 : (i *= 12.92)),
                            (n = 0.0031308 < n ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : (n *= 12.92)),
                            [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
                        );
                    }
                    function v(t) {
                        var e = t[0],
                            i = t[1],
                            n = t[2];
                        return (
                            (i /= 100),
                            (n /= 108.883),
                            (e = 0.008856 < (e /= 95.047) ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116),
                            [116 * (i = 0.008856 < i ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = 0.008856 < n ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
                        );
                    }
                    function x(t) {
                        var e,
                            i,
                            n,
                            a,
                            o = t[0],
                            r = t[1],
                            s = t[2];
                        return (
                            (a = o <= 8 ? ((i = (100 * o) / 903.3) / 100) * 7.787 + 16 / 116 : ((i = 100 * Math.pow((o + 16) / 116, 3)), Math.pow(i / 100, 1 / 3))),
                            [
                                (e = e / 95.047 <= 0.008856 ? (e = (95.047 * (r / 500 + a - 16 / 116)) / 7.787) : 95.047 * Math.pow(r / 500 + a, 3)),
                                i,
                                (n = n / 108.883 <= 0.008859 ? (n = (108.883 * (a - s / 200 - 16 / 116)) / 7.787) : 108.883 * Math.pow(a - s / 200, 3)),
                            ]
                        );
                    }
                    function y(t) {
                        var e,
                            i = t[0],
                            n = t[1],
                            a = t[2];
                        return (e = (360 * Math.atan2(a, n)) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e];
                    }
                    function k(t) {
                        return m(x(t));
                    }
                    function M(t) {
                        var e,
                            i = t[0],
                            n = t[1];
                        return (e = (t[2] / 360) * 2 * Math.PI), [i, n * Math.cos(e), n * Math.sin(e)];
                    }
                    function w(t) {
                        return C[t];
                    }
                    e.exports = {
                        rgb2hsl: a,
                        rgb2hsv: n,
                        rgb2hwb: o,
                        rgb2cmyk: s,
                        rgb2keyword: l,
                        rgb2xyz: u,
                        rgb2lab: d,
                        rgb2lch: function (t) {
                            return y(d(t));
                        },
                        hsl2rgb: c,
                        hsl2hsv: function (t) {
                            var e = t[0],
                                i = t[1] / 100,
                                n = t[2] / 100;
                            return 0 !== n ? [e, 100 * ((2 * (i *= (n *= 2) <= 1 ? n : 2 - n)) / (n + i)), 100 * ((n + i) / 2)] : [0, 0, 0];
                        },
                        hsl2hwb: function (t) {
                            return o(c(t));
                        },
                        hsl2cmyk: function (t) {
                            return s(c(t));
                        },
                        hsl2keyword: function (t) {
                            return l(c(t));
                        },
                        hsv2rgb: h,
                        hsv2hsl: function (t) {
                            var e,
                                i,
                                n = t[0],
                                a = t[1] / 100,
                                o = t[2] / 100;
                            return (e = a * o), [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)];
                        },
                        hsv2hwb: function (t) {
                            return o(h(t));
                        },
                        hsv2cmyk: function (t) {
                            return s(h(t));
                        },
                        hsv2keyword: function (t) {
                            return l(h(t));
                        },
                        hwb2rgb: f,
                        hwb2hsl: function (t) {
                            return a(f(t));
                        },
                        hwb2hsv: function (t) {
                            return n(f(t));
                        },
                        hwb2cmyk: function (t) {
                            return s(f(t));
                        },
                        hwb2keyword: function (t) {
                            return l(f(t));
                        },
                        cmyk2rgb: p,
                        cmyk2hsl: function (t) {
                            return a(p(t));
                        },
                        cmyk2hsv: function (t) {
                            return n(p(t));
                        },
                        cmyk2hwb: function (t) {
                            return o(p(t));
                        },
                        cmyk2keyword: function (t) {
                            return l(p(t));
                        },
                        keyword2rgb: w,
                        keyword2hsl: function (t) {
                            return a(w(t));
                        },
                        keyword2hsv: function (t) {
                            return n(w(t));
                        },
                        keyword2hwb: function (t) {
                            return o(w(t));
                        },
                        keyword2cmyk: function (t) {
                            return s(w(t));
                        },
                        keyword2lab: function (t) {
                            return d(w(t));
                        },
                        keyword2xyz: function (t) {
                            return u(w(t));
                        },
                        xyz2rgb: m,
                        xyz2lab: v,
                        xyz2lch: function (t) {
                            return y(v(t));
                        },
                        lab2xyz: x,
                        lab2rgb: k,
                        lab2lch: y,
                        lch2lab: M,
                        lch2xyz: function (t) {
                            return x(M(t));
                        },
                        lch2rgb: function (t) {
                            return k(M(t));
                        },
                    };
                    var C = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    },
                        S = {};
                    for (var _ in C) S[JSON.stringify(C[_])] = _;
                },
                {},
            ],
            5: [
                function (t, e, i) {
                    var a = t(4),
                        o = function () {
                            return new u();
                        };
                    for (var n in a) {
                        o[n + "Raw"] = (function (e) {
                            return function (t) {
                                return "number" == typeof t && (t = Array.prototype.slice.call(arguments)), a[e](t);
                            };
                        })(n);
                        var r = /(\w+)2(\w+)/.exec(n),
                            s = r[1],
                            l = r[2];
                        (o[s] = o[s] || {})[l] = o[n] = (function (n) {
                            return function (t) {
                                "number" == typeof t && (t = Array.prototype.slice.call(arguments));
                                var e = a[n](t);
                                if ("string" == typeof e || void 0 === e) return e;
                                for (var i = 0; i < e.length; i++) e[i] = Math.round(e[i]);
                                return e;
                            };
                        })(n);
                    }
                    var u = function () {
                        this.convs = {};
                    };
                    (u.prototype.routeSpace = function (t, e) {
                        var i = e[0];
                        return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i));
                    }),
                        (u.prototype.setValues = function (t, e) {
                            return (this.space = t), (this.convs = {}), (this.convs[t] = e), this;
                        }),
                        (u.prototype.getValues = function (t) {
                            var e = this.convs[t];
                            if (!e) {
                                var i = this.space,
                                    n = this.convs[i];
                                (e = o[i][t](n)), (this.convs[t] = e);
                            }
                            return e;
                        }),
                        ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (e) {
                            u.prototype[e] = function (t) {
                                return this.routeSpace(e, arguments);
                            };
                        }),
                        (e.exports = o);
                },
                { 4: 4 },
            ],
            6: [
                function (t, e, i) {
                    "use strict";
                    e.exports = {
                        aliceblue: [240, 248, 255],
                        antiquewhite: [250, 235, 215],
                        aqua: [0, 255, 255],
                        aquamarine: [127, 255, 212],
                        azure: [240, 255, 255],
                        beige: [245, 245, 220],
                        bisque: [255, 228, 196],
                        black: [0, 0, 0],
                        blanchedalmond: [255, 235, 205],
                        blue: [0, 0, 255],
                        blueviolet: [138, 43, 226],
                        brown: [165, 42, 42],
                        burlywood: [222, 184, 135],
                        cadetblue: [95, 158, 160],
                        chartreuse: [127, 255, 0],
                        chocolate: [210, 105, 30],
                        coral: [255, 127, 80],
                        cornflowerblue: [100, 149, 237],
                        cornsilk: [255, 248, 220],
                        crimson: [220, 20, 60],
                        cyan: [0, 255, 255],
                        darkblue: [0, 0, 139],
                        darkcyan: [0, 139, 139],
                        darkgoldenrod: [184, 134, 11],
                        darkgray: [169, 169, 169],
                        darkgreen: [0, 100, 0],
                        darkgrey: [169, 169, 169],
                        darkkhaki: [189, 183, 107],
                        darkmagenta: [139, 0, 139],
                        darkolivegreen: [85, 107, 47],
                        darkorange: [255, 140, 0],
                        darkorchid: [153, 50, 204],
                        darkred: [139, 0, 0],
                        darksalmon: [233, 150, 122],
                        darkseagreen: [143, 188, 143],
                        darkslateblue: [72, 61, 139],
                        darkslategray: [47, 79, 79],
                        darkslategrey: [47, 79, 79],
                        darkturquoise: [0, 206, 209],
                        darkviolet: [148, 0, 211],
                        deeppink: [255, 20, 147],
                        deepskyblue: [0, 191, 255],
                        dimgray: [105, 105, 105],
                        dimgrey: [105, 105, 105],
                        dodgerblue: [30, 144, 255],
                        firebrick: [178, 34, 34],
                        floralwhite: [255, 250, 240],
                        forestgreen: [34, 139, 34],
                        fuchsia: [255, 0, 255],
                        gainsboro: [220, 220, 220],
                        ghostwhite: [248, 248, 255],
                        gold: [255, 215, 0],
                        goldenrod: [218, 165, 32],
                        gray: [128, 128, 128],
                        green: [0, 128, 0],
                        greenyellow: [173, 255, 47],
                        grey: [128, 128, 128],
                        honeydew: [240, 255, 240],
                        hotpink: [255, 105, 180],
                        indianred: [205, 92, 92],
                        indigo: [75, 0, 130],
                        ivory: [255, 255, 240],
                        khaki: [240, 230, 140],
                        lavender: [230, 230, 250],
                        lavenderblush: [255, 240, 245],
                        lawngreen: [124, 252, 0],
                        lemonchiffon: [255, 250, 205],
                        lightblue: [173, 216, 230],
                        lightcoral: [240, 128, 128],
                        lightcyan: [224, 255, 255],
                        lightgoldenrodyellow: [250, 250, 210],
                        lightgray: [211, 211, 211],
                        lightgreen: [144, 238, 144],
                        lightgrey: [211, 211, 211],
                        lightpink: [255, 182, 193],
                        lightsalmon: [255, 160, 122],
                        lightseagreen: [32, 178, 170],
                        lightskyblue: [135, 206, 250],
                        lightslategray: [119, 136, 153],
                        lightslategrey: [119, 136, 153],
                        lightsteelblue: [176, 196, 222],
                        lightyellow: [255, 255, 224],
                        lime: [0, 255, 0],
                        limegreen: [50, 205, 50],
                        linen: [250, 240, 230],
                        magenta: [255, 0, 255],
                        maroon: [128, 0, 0],
                        mediumaquamarine: [102, 205, 170],
                        mediumblue: [0, 0, 205],
                        mediumorchid: [186, 85, 211],
                        mediumpurple: [147, 112, 219],
                        mediumseagreen: [60, 179, 113],
                        mediumslateblue: [123, 104, 238],
                        mediumspringgreen: [0, 250, 154],
                        mediumturquoise: [72, 209, 204],
                        mediumvioletred: [199, 21, 133],
                        midnightblue: [25, 25, 112],
                        mintcream: [245, 255, 250],
                        mistyrose: [255, 228, 225],
                        moccasin: [255, 228, 181],
                        navajowhite: [255, 222, 173],
                        navy: [0, 0, 128],
                        oldlace: [253, 245, 230],
                        olive: [128, 128, 0],
                        olivedrab: [107, 142, 35],
                        orange: [255, 165, 0],
                        orangered: [255, 69, 0],
                        orchid: [218, 112, 214],
                        palegoldenrod: [238, 232, 170],
                        palegreen: [152, 251, 152],
                        paleturquoise: [175, 238, 238],
                        palevioletred: [219, 112, 147],
                        papayawhip: [255, 239, 213],
                        peachpuff: [255, 218, 185],
                        peru: [205, 133, 63],
                        pink: [255, 192, 203],
                        plum: [221, 160, 221],
                        powderblue: [176, 224, 230],
                        purple: [128, 0, 128],
                        rebeccapurple: [102, 51, 153],
                        red: [255, 0, 0],
                        rosybrown: [188, 143, 143],
                        royalblue: [65, 105, 225],
                        saddlebrown: [139, 69, 19],
                        salmon: [250, 128, 114],
                        sandybrown: [244, 164, 96],
                        seagreen: [46, 139, 87],
                        seashell: [255, 245, 238],
                        sienna: [160, 82, 45],
                        silver: [192, 192, 192],
                        skyblue: [135, 206, 235],
                        slateblue: [106, 90, 205],
                        slategray: [112, 128, 144],
                        slategrey: [112, 128, 144],
                        snow: [255, 250, 250],
                        springgreen: [0, 255, 127],
                        steelblue: [70, 130, 180],
                        tan: [210, 180, 140],
                        teal: [0, 128, 128],
                        thistle: [216, 191, 216],
                        tomato: [255, 99, 71],
                        turquoise: [64, 224, 208],
                        violet: [238, 130, 238],
                        wheat: [245, 222, 179],
                        white: [255, 255, 255],
                        whitesmoke: [245, 245, 245],
                        yellow: [255, 255, 0],
                        yellowgreen: [154, 205, 50],
                    };
                },
                {},
            ],
            7: [
                function (t, e, i) {
                    var n = t(30)();
                    (n.helpers = t(46)),
                        t(28)(n),
                        (n.Animation = t(22)),
                        (n.animationService = t(23)),
                        (n.defaults = t(26)),
                        (n.Element = t(27)),
                        (n.elements = t(41)),
                        (n.Interaction = t(29)),
                        (n.layouts = t(31)),
                        (n.platform = t(49)),
                        (n.plugins = t(32)),
                        (n.Scale = t(33)),
                        (n.scaleService = t(34)),
                        (n.Ticks = t(35)),
                        (n.Tooltip = t(36)),
                        t(24)(n),
                        t(25)(n),
                        t(56)(n),
                        t(54)(n),
                        t(55)(n),
                        t(57)(n),
                        t(58)(n),
                        t(59)(n),
                        t(15)(n),
                        t(16)(n),
                        t(17)(n),
                        t(18)(n),
                        t(19)(n),
                        t(20)(n),
                        t(21)(n),
                        t(8)(n),
                        t(9)(n),
                        t(10)(n),
                        t(11)(n),
                        t(12)(n),
                        t(13)(n),
                        t(14)(n);
                    var a = t(50);
                    for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
                    n.platform.initialize(),
                        (e.exports = n),
                        "undefined" != typeof window && (window.Chart = n),
                        (n.Legend = a.legend._element),
                        (n.Title = a.title._element),
                        (n.pluginService = n.plugins),
                        (n.PluginBase = n.Element.extend({})),
                        (n.canvasHelpers = n.helpers.canvas),
                        (n.layoutService = n.layouts);
                },
                {
                    10: 10,
                    11: 11,
                    12: 12,
                    13: 13,
                    14: 14,
                    15: 15,
                    16: 16,
                    17: 17,
                    18: 18,
                    19: 19,
                    20: 20,
                    21: 21,
                    22: 22,
                    23: 23,
                    24: 24,
                    25: 25,
                    26: 26,
                    27: 27,
                    28: 28,
                    29: 29,
                    30: 30,
                    31: 31,
                    32: 32,
                    33: 33,
                    34: 34,
                    35: 35,
                    36: 36,
                    41: 41,
                    46: 46,
                    49: 49,
                    50: 50,
                    54: 54,
                    55: 55,
                    56: 56,
                    57: 57,
                    58: 58,
                    59: 59,
                    8: 8,
                    9: 9,
                },
            ],
            8: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Bar = function (t, e) {
                            return (e.type = "bar"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            9: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Bubble = function (t, e) {
                            return (e.type = "bubble"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            10: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Doughnut = function (t, e) {
                            return (e.type = "doughnut"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            11: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Line = function (t, e) {
                            return (e.type = "line"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            12: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.PolarArea = function (t, e) {
                            return (e.type = "polarArea"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            13: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Radar = function (t, e) {
                            return (e.type = "radar"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            14: [
                function (t, e, i) {
                    "use strict";
                    e.exports = function (i) {
                        i.Scatter = function (t, e) {
                            return (e.type = "scatter"), new i(t, e);
                        };
                    };
                },
                {},
            ],
            15: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        S = t(46);
                    n._set("bar", { hover: { mode: "label" }, scales: { xAxes: [{ type: "category", categoryPercentage: 0.8, barPercentage: 0.9, offset: !0, gridLines: { offsetGridLines: !0 } }], yAxes: [{ type: "linear" }] } }),
                        n._set("horizontalBar", {
                            hover: { mode: "index", axis: "y" },
                            scales: { xAxes: [{ type: "linear", position: "bottom" }], yAxes: [{ position: "left", type: "category", categoryPercentage: 0.8, barPercentage: 0.9, offset: !0, gridLines: { offsetGridLines: !0 } }] },
                            elements: { rectangle: { borderSkipped: "left" } },
                            tooltips: {
                                callbacks: {
                                    title: function (t, e) {
                                        var i = "";
                                        return 0 < t.length && (t[0].yLabel ? (i = t[0].yLabel) : 0 < e.labels.length && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i;
                                    },
                                    label: function (t, e) {
                                        return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
                                    },
                                },
                                mode: "index",
                                axis: "y",
                            },
                        }),
                        (e.exports = function (e) {
                            (e.controllers.bar = e.DatasetController.extend({
                                dataElementType: a.Rectangle,
                                initialize: function () {
                                    var t;
                                    e.DatasetController.prototype.initialize.apply(this, arguments), ((t = this.getMeta()).stack = this.getDataset().stack), (t.bar = !0);
                                },
                                update: function (t) {
                                    var e,
                                        i,
                                        n = this.getMeta().data;
                                    for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t);
                                },
                                updateElement: function (t, e, i) {
                                    var n = this,
                                        a = n.chart,
                                        o = n.getMeta(),
                                        r = n.getDataset(),
                                        s = t.custom || {},
                                        l = a.options.elements.rectangle;
                                    (t._xScale = n.getScaleForId(o.xAxisID)),
                                        (t._yScale = n.getScaleForId(o.yAxisID)),
                                        (t._datasetIndex = n.index),
                                        (t._index = e),
                                        (t._model = {
                                            datasetLabel: r.label,
                                            label: a.data.labels[e],
                                            borderSkipped: s.borderSkipped ? s.borderSkipped : l.borderSkipped,
                                            backgroundColor: s.backgroundColor ? s.backgroundColor : S.valueAtIndexOrDefault(r.backgroundColor, e, l.backgroundColor),
                                            borderColor: s.borderColor ? s.borderColor : S.valueAtIndexOrDefault(r.borderColor, e, l.borderColor),
                                            borderWidth: s.borderWidth ? s.borderWidth : S.valueAtIndexOrDefault(r.borderWidth, e, l.borderWidth),
                                        }),
                                        n.updateElementGeometry(t, e, i),
                                        t.pivot();
                                },
                                updateElementGeometry: function (t, e, i) {
                                    var n = this,
                                        a = t._model,
                                        o = n.getValueScale(),
                                        r = o.getBasePixel(),
                                        s = o.isHorizontal(),
                                        l = n._ruler || n.getRuler(),
                                        u = n.calculateBarValuePixels(n.index, e),
                                        d = n.calculateBarIndexPixels(n.index, e, l);
                                    (a.horizontal = s), (a.base = i ? r : u.base), (a.x = s ? (i ? r : u.head) : d.center), (a.y = s ? d.center : i ? r : u.head), (a.height = s ? d.size : void 0), (a.width = s ? void 0 : d.size);
                                },
                                getValueScaleId: function () {
                                    return this.getMeta().yAxisID;
                                },
                                getIndexScaleId: function () {
                                    return this.getMeta().xAxisID;
                                },
                                getValueScale: function () {
                                    return this.getScaleForId(this.getValueScaleId());
                                },
                                getIndexScale: function () {
                                    return this.getScaleForId(this.getIndexScaleId());
                                },
                                _getStacks: function (t) {
                                    var e,
                                        i,
                                        n = this.chart,
                                        a = this.getIndexScale().options.stacked,
                                        o = void 0 === t ? n.data.datasets.length : t + 1,
                                        r = [];
                                    for (e = 0; e < o; ++e)
                                        (i = n.getDatasetMeta(e)).bar &&
                                            n.isDatasetVisible(e) &&
                                            (!1 === a || (!0 === a && -1 === r.indexOf(i.stack)) || (void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack)))) &&
                                            r.push(i.stack);
                                    return r;
                                },
                                getStackCount: function () {
                                    return this._getStacks().length;
                                },
                                getStackIndex: function (t, e) {
                                    var i = this._getStacks(t),
                                        n = void 0 !== e ? i.indexOf(e) : -1;
                                    return -1 === n ? i.length - 1 : n;
                                },
                                getRuler: function () {
                                    var t,
                                        e,
                                        i = this.getIndexScale(),
                                        n = this.getStackCount(),
                                        a = this.index,
                                        o = i.isHorizontal(),
                                        r = o ? i.left : i.top,
                                        s = r + (o ? i.width : i.height),
                                        l = [];
                                    for (t = 0, e = this.getMeta().data.length; t < e; ++t) l.push(i.getPixelForValue(null, t, a));
                                    return {
                                        min: S.isNullOrUndef(i.options.barThickness)
                                            ? (function (t, e) {
                                                var i,
                                                    n,
                                                    a,
                                                    o,
                                                    r = t.isHorizontal() ? t.width : t.height,
                                                    s = t.getTicks();
                                                for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]);
                                                for (a = 0, o = s.length; a < o; ++a) (n = t.getPixelForTick(a)), (r = 0 < a ? Math.min(r, n - i) : r), (i = n);
                                                return r;
                                            })(i, l)
                                            : -1,
                                        pixels: l,
                                        start: r,
                                        end: s,
                                        stackCount: n,
                                        scale: i,
                                    };
                                },
                                calculateBarValuePixels: function (t, e) {
                                    var i,
                                        n,
                                        a,
                                        o,
                                        r,
                                        s,
                                        l = this.chart,
                                        u = this.getMeta(),
                                        d = this.getValueScale(),
                                        c = l.data.datasets,
                                        h = d.getRightValue(c[t].data[e]),
                                        f = d.options.stacked,
                                        g = u.stack,
                                        p = 0;
                                    if (f || (void 0 === f && void 0 !== g))
                                        for (i = 0; i < t; ++i)
                                            (n = l.getDatasetMeta(i)).bar &&
                                                n.stack === g &&
                                                n.controller.getValueScaleId() === d.id &&
                                                l.isDatasetVisible(i) &&
                                                ((a = d.getRightValue(c[i].data[e])), ((h < 0 && a < 0) || (0 <= h && 0 < a)) && (p += a));
                                    return (o = d.getPixelForValue(p)), { size: (s = ((r = d.getPixelForValue(p + h)) - o) / 2), base: o, head: r, center: r + s / 2 };
                                },
                                calculateBarIndexPixels: function (t, e, i) {
                                    var n,
                                        a,
                                        o,
                                        r,
                                        s,
                                        l,
                                        u,
                                        d,
                                        c,
                                        h,
                                        f,
                                        g,
                                        p,
                                        m,
                                        v,
                                        b,
                                        x,
                                        y = i.scale.options,
                                        k =
                                            "flex" === y.barThickness
                                                ? ((c = e),
                                                    (f = y),
                                                    (p = (h = i).pixels),
                                                    (m = p[c]),
                                                    (v = 0 < c ? p[c - 1] : null),
                                                    (b = c < p.length - 1 ? p[c + 1] : null),
                                                    (x = f.categoryPercentage),
                                                    null === v && (v = m - (null === b ? h.end - m : b - m)),
                                                    null === b && (b = m + m - v),
                                                    (g = m - ((m - v) / 2) * x),
                                                    { chunk: (((b - v) / 2) * x) / h.stackCount, ratio: f.barPercentage, start: g })
                                                : ((n = e),
                                                    (a = i),
                                                    (l = (o = y).barThickness),
                                                    (u = a.stackCount),
                                                    (d = a.pixels[n]),
                                                    (s = S.isNullOrUndef(l) ? ((r = a.min * o.categoryPercentage), o.barPercentage) : ((r = l * u), 1)),
                                                    { chunk: r / u, ratio: s, start: d - r / 2 }),
                                        M = this.getStackIndex(t, this.getMeta().stack),
                                        w = k.start + k.chunk * M + k.chunk / 2,
                                        C = Math.min(S.valueOrDefault(y.maxBarThickness, 1 / 0), k.chunk * k.ratio);
                                    return { base: w - C / 2, head: w + C / 2, center: w, size: C };
                                },
                                draw: function () {
                                    var t = this.chart,
                                        e = this.getValueScale(),
                                        i = this.getMeta().data,
                                        n = this.getDataset(),
                                        a = i.length,
                                        o = 0;
                                    for (S.canvas.clipArea(t.ctx, t.chartArea); o < a; ++o) isNaN(e.getRightValue(n.data[o])) || i[o].draw();
                                    S.canvas.unclipArea(t.ctx);
                                },
                            })),
                                (e.controllers.horizontalBar = e.controllers.bar.extend({
                                    getValueScaleId: function () {
                                        return this.getMeta().xAxisID;
                                    },
                                    getIndexScaleId: function () {
                                        return this.getMeta().yAxisID;
                                    },
                                }));
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            16: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        g = t(46);
                    n._set("bubble", {
                        hover: { mode: "single" },
                        scales: { xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }], yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }] },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (t, e) {
                                    var i = e.datasets[t.datasetIndex].label || "",
                                        n = e.datasets[t.datasetIndex].data[t.index];
                                    return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")";
                                },
                            },
                        },
                    }),
                        (e.exports = function (t) {
                            t.controllers.bubble = t.DatasetController.extend({
                                dataElementType: a.Point,
                                update: function (i) {
                                    var n = this,
                                        t = n.getMeta().data;
                                    g.each(t, function (t, e) {
                                        n.updateElement(t, e, i);
                                    });
                                },
                                updateElement: function (t, e, i) {
                                    var n = this,
                                        a = n.getMeta(),
                                        o = t.custom || {},
                                        r = n.getScaleForId(a.xAxisID),
                                        s = n.getScaleForId(a.yAxisID),
                                        l = n._resolveElementOptions(t, e),
                                        u = n.getDataset().data[e],
                                        d = n.index,
                                        c = i ? r.getPixelForDecimal(0.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                                        h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                                    (t._xScale = r),
                                        (t._yScale = s),
                                        (t._options = l),
                                        (t._datasetIndex = d),
                                        (t._index = e),
                                        (t._model = {
                                            backgroundColor: l.backgroundColor,
                                            borderColor: l.borderColor,
                                            borderWidth: l.borderWidth,
                                            hitRadius: l.hitRadius,
                                            pointStyle: l.pointStyle,
                                            rotation: l.rotation,
                                            radius: i ? 0 : l.radius,
                                            skip: o.skip || isNaN(c) || isNaN(h),
                                            x: c,
                                            y: h,
                                        }),
                                        t.pivot();
                                },
                                setHoverStyle: function (t) {
                                    var e = t._model,
                                        i = t._options;
                                    (t.$previousStyle = { backgroundColor: e.backgroundColor, borderColor: e.borderColor, borderWidth: e.borderWidth, radius: e.radius }),
                                        (e.backgroundColor = g.valueOrDefault(i.hoverBackgroundColor, g.getHoverColor(i.backgroundColor))),
                                        (e.borderColor = g.valueOrDefault(i.hoverBorderColor, g.getHoverColor(i.borderColor))),
                                        (e.borderWidth = g.valueOrDefault(i.hoverBorderWidth, i.borderWidth)),
                                        (e.radius = i.radius + i.hoverRadius);
                                },
                                _resolveElementOptions: function (t, e) {
                                    var i,
                                        n,
                                        a,
                                        o = this.chart,
                                        r = o.data.datasets[this.index],
                                        s = t.custom || {},
                                        l = o.options.elements.point,
                                        u = g.options.resolve,
                                        d = r.data[e],
                                        c = {},
                                        h = { chart: o, dataIndex: e, dataset: r, datasetIndex: this.index },
                                        f = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle", "rotation"];
                                    for (i = 0, n = f.length; i < n; ++i) c[(a = f[i])] = u([s[a], r[a], l[a]], h, e);
                                    return (c.radius = u([s.radius, d ? d.r : void 0, r.radius, l.radius], h, e)), c;
                                },
                            });
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            17: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        A = t(46);
                    n._set("doughnut", {
                        animation: { animateRotate: !0, animateScale: !1 },
                        hover: { mode: "single" },
                        legendCallback: function (t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                a = i.labels;
                            if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                            return e.push("</ul>"), e.join("");
                        },
                        legend: {
                            labels: {
                                generateLabels: function (l) {
                                    var u = l.data;
                                    return u.labels.length && u.datasets.length
                                        ? u.labels.map(function (t, e) {
                                            var i = l.getDatasetMeta(0),
                                                n = u.datasets[0],
                                                a = i.data[e],
                                                o = (a && a.custom) || {},
                                                r = A.valueAtIndexOrDefault,
                                                s = l.options.elements.arc;
                                            return {
                                                text: t,
                                                fillStyle: o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, e, s.backgroundColor),
                                                strokeStyle: o.borderColor ? o.borderColor : r(n.borderColor, e, s.borderColor),
                                                lineWidth: o.borderWidth ? o.borderWidth : r(n.borderWidth, e, s.borderWidth),
                                                hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                                index: e,
                                            };
                                        })
                                        : [];
                                },
                            },
                            onClick: function (t, e) {
                                var i,
                                    n,
                                    a,
                                    o = e.index,
                                    r = this.chart;
                                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                                r.update();
                            },
                        },
                        cutoutPercentage: 50,
                        rotation: -0.5 * Math.PI,
                        circumference: 2 * Math.PI,
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (t, e) {
                                    var i = e.labels[t.index],
                                        n = ": " + e.datasets[t.datasetIndex].data[t.index];
                                    return A.isArray(i) ? ((i = i.slice())[0] += n) : (i += n), i;
                                },
                            },
                        },
                    }),
                        n._set("pie", A.clone(n.doughnut)),
                        n._set("pie", { cutoutPercentage: 0 }),
                        (e.exports = function (t) {
                            t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                                dataElementType: a.Arc,
                                linkScales: A.noop,
                                getRingIndex: function (t) {
                                    for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                                    return e;
                                },
                                update: function (i) {
                                    var n = this,
                                        t = n.chart,
                                        e = t.chartArea,
                                        a = t.options,
                                        o = a.elements.arc,
                                        r = e.right - e.left - o.borderWidth,
                                        s = e.bottom - e.top - o.borderWidth,
                                        l = Math.min(r, s),
                                        u = { x: 0, y: 0 },
                                        d = n.getMeta(),
                                        c = a.cutoutPercentage,
                                        h = a.circumference;
                                    if (h < 2 * Math.PI) {
                                        var f = a.rotation % (2 * Math.PI),
                                            g = (f += 2 * Math.PI * (f >= Math.PI ? -1 : f < -Math.PI ? 1 : 0)) + h,
                                            p = Math.cos(f),
                                            m = Math.sin(f),
                                            v = Math.cos(g),
                                            b = Math.sin(g),
                                            x = (f <= 0 && 0 <= g) || (f <= 2 * Math.PI && 2 * Math.PI <= g),
                                            y = (f <= 0.5 * Math.PI && 0.5 * Math.PI <= g) || (f <= 2.5 * Math.PI && 2.5 * Math.PI <= g),
                                            k = (f <= -Math.PI && -Math.PI <= g) || (f <= Math.PI && Math.PI <= g),
                                            M = (f <= 0.5 * -Math.PI && 0.5 * -Math.PI <= g) || (f <= 1.5 * Math.PI && 1.5 * Math.PI <= g),
                                            w = c / 100,
                                            C = k ? -1 : Math.min(p * (p < 0 ? 1 : w), v * (v < 0 ? 1 : w)),
                                            S = M ? -1 : Math.min(m * (m < 0 ? 1 : w), b * (b < 0 ? 1 : w)),
                                            _ = x ? 1 : Math.max(p * (0 < p ? 1 : w), v * (0 < v ? 1 : w)),
                                            D = y ? 1 : Math.max(m * (0 < m ? 1 : w), b * (0 < b ? 1 : w)),
                                            P = 0.5 * (_ - C),
                                            I = 0.5 * (D - S);
                                        (l = Math.min(r / P, s / I)), (u = { x: -0.5 * (_ + C), y: -0.5 * (D + S) });
                                    }
                                    (t.borderWidth = n.getMaxBorderWidth(d.data)),
                                        (t.outerRadius = Math.max((l - t.borderWidth) / 2, 0)),
                                        (t.innerRadius = Math.max(c ? (t.outerRadius / 100) * c : 0, 0)),
                                        (t.radiusLength = (t.outerRadius - t.innerRadius) / t.getVisibleDatasetCount()),
                                        (t.offsetX = u.x * t.outerRadius),
                                        (t.offsetY = u.y * t.outerRadius),
                                        (d.total = n.calculateTotal()),
                                        (n.outerRadius = t.outerRadius - t.radiusLength * n.getRingIndex(n.index)),
                                        (n.innerRadius = Math.max(n.outerRadius - t.radiusLength, 0)),
                                        A.each(d.data, function (t, e) {
                                            n.updateElement(t, e, i);
                                        });
                                },
                                updateElement: function (t, e, i) {
                                    var n = this,
                                        a = n.chart,
                                        o = a.chartArea,
                                        r = a.options,
                                        s = r.animation,
                                        l = (o.left + o.right) / 2,
                                        u = (o.top + o.bottom) / 2,
                                        d = r.rotation,
                                        c = r.rotation,
                                        h = n.getDataset(),
                                        f = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(h.data[e]) * (r.circumference / (2 * Math.PI)),
                                        g = i && s.animateScale ? 0 : n.innerRadius,
                                        p = i && s.animateScale ? 0 : n.outerRadius,
                                        m = A.valueAtIndexOrDefault;
                                    A.extend(t, {
                                        _datasetIndex: n.index,
                                        _index: e,
                                        _model: { x: l + a.offsetX, y: u + a.offsetY, startAngle: d, endAngle: c, circumference: f, outerRadius: p, innerRadius: g, label: m(h.label, e, a.data.labels[e]) },
                                    });
                                    var v = t._model,
                                        b = t.custom || {},
                                        x = A.valueAtIndexOrDefault,
                                        y = this.chart.options.elements.arc;
                                    (v.backgroundColor = b.backgroundColor ? b.backgroundColor : x(h.backgroundColor, e, y.backgroundColor)),
                                        (v.borderColor = b.borderColor ? b.borderColor : x(h.borderColor, e, y.borderColor)),
                                        (v.borderWidth = b.borderWidth ? b.borderWidth : x(h.borderWidth, e, y.borderWidth)),
                                        (i && s.animateRotate) || ((v.startAngle = 0 === e ? r.rotation : n.getMeta().data[e - 1]._model.endAngle), (v.endAngle = v.startAngle + v.circumference)),
                                        t.pivot();
                                },
                                calculateTotal: function () {
                                    var i,
                                        n = this.getDataset(),
                                        t = this.getMeta(),
                                        a = 0;
                                    return (
                                        A.each(t.data, function (t, e) {
                                            (i = n.data[e]), isNaN(i) || t.hidden || (a += Math.abs(i));
                                        }),
                                        a
                                    );
                                },
                                calculateCircumference: function (t) {
                                    var e = this.getMeta().total;
                                    return 0 < e && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0;
                                },
                                getMaxBorderWidth: function (t) {
                                    for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++)
                                        n = (n = n < (e = t[r]._model ? t[r]._model.borderWidth : 0) ? e : n) < (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) ? i : n;
                                    return n;
                                },
                            });
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            18: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        g = t(46);
                    n._set("line", { showLines: !0, spanGaps: !1, hover: { mode: "label" }, scales: { xAxes: [{ type: "category", id: "x-axis-0" }], yAxes: [{ type: "linear", id: "y-axis-0" }] } }),
                        (e.exports = function (t) {
                            function f(t, e) {
                                return g.valueOrDefault(t.showLine, e.showLines);
                            }
                            t.controllers.line = t.DatasetController.extend({
                                datasetElementType: a.Line,
                                dataElementType: a.Point,
                                update: function (t) {
                                    var e,
                                        i,
                                        n,
                                        a = this,
                                        o = a.getMeta(),
                                        r = o.dataset,
                                        s = o.data || [],
                                        l = a.chart.options,
                                        u = l.elements.line,
                                        d = a.getScaleForId(o.yAxisID),
                                        c = a.getDataset(),
                                        h = f(c, l);
                                    for (
                                        h &&
                                        ((n = r.custom || {}),
                                            void 0 !== c.tension && void 0 === c.lineTension && (c.lineTension = c.tension),
                                            (r._scale = d),
                                            (r._datasetIndex = a.index),
                                            (r._children = s),
                                            (r._model = {
                                                spanGaps: c.spanGaps ? c.spanGaps : l.spanGaps,
                                                tension: n.tension ? n.tension : g.valueOrDefault(c.lineTension, u.tension),
                                                backgroundColor: n.backgroundColor ? n.backgroundColor : c.backgroundColor || u.backgroundColor,
                                                borderWidth: n.borderWidth ? n.borderWidth : c.borderWidth || u.borderWidth,
                                                borderColor: n.borderColor ? n.borderColor : c.borderColor || u.borderColor,
                                                borderCapStyle: n.borderCapStyle ? n.borderCapStyle : c.borderCapStyle || u.borderCapStyle,
                                                borderDash: n.borderDash ? n.borderDash : c.borderDash || u.borderDash,
                                                borderDashOffset: n.borderDashOffset ? n.borderDashOffset : c.borderDashOffset || u.borderDashOffset,
                                                borderJoinStyle: n.borderJoinStyle ? n.borderJoinStyle : c.borderJoinStyle || u.borderJoinStyle,
                                                fill: n.fill ? n.fill : void 0 !== c.fill ? c.fill : u.fill,
                                                steppedLine: n.steppedLine ? n.steppedLine : g.valueOrDefault(c.steppedLine, u.stepped),
                                                cubicInterpolationMode: n.cubicInterpolationMode ? n.cubicInterpolationMode : g.valueOrDefault(c.cubicInterpolationMode, u.cubicInterpolationMode),
                                            }),
                                            r.pivot()),
                                        e = 0,
                                        i = s.length;
                                        e < i;
                                        ++e
                                    )
                                        a.updateElement(s[e], e, t);
                                    for (h && 0 !== r._model.tension && a.updateBezierControlPoints(), e = 0, i = s.length; e < i; ++e) s[e].pivot();
                                },
                                getPointBackgroundColor: function (t, e) {
                                    var i = this.chart.options.elements.point.backgroundColor,
                                        n = this.getDataset(),
                                        a = t.custom || {};
                                    return a.backgroundColor ? (i = a.backgroundColor) : n.pointBackgroundColor ? (i = g.valueAtIndexOrDefault(n.pointBackgroundColor, e, i)) : n.backgroundColor && (i = n.backgroundColor), i;
                                },
                                getPointBorderColor: function (t, e) {
                                    var i = this.chart.options.elements.point.borderColor,
                                        n = this.getDataset(),
                                        a = t.custom || {};
                                    return a.borderColor ? (i = a.borderColor) : n.pointBorderColor ? (i = g.valueAtIndexOrDefault(n.pointBorderColor, e, i)) : n.borderColor && (i = n.borderColor), i;
                                },
                                getPointBorderWidth: function (t, e) {
                                    var i = this.chart.options.elements.point.borderWidth,
                                        n = this.getDataset(),
                                        a = t.custom || {};
                                    return (
                                        isNaN(a.borderWidth)
                                            ? !isNaN(n.pointBorderWidth) || g.isArray(n.pointBorderWidth)
                                                ? (i = g.valueAtIndexOrDefault(n.pointBorderWidth, e, i))
                                                : isNaN(n.borderWidth) || (i = n.borderWidth)
                                            : (i = a.borderWidth),
                                        i
                                    );
                                },
                                getPointRotation: function (t, e) {
                                    var i = this.chart.options.elements.point.rotation,
                                        n = this.getDataset(),
                                        a = t.custom || {};
                                    return isNaN(a.rotation) ? (isNaN(n.pointRotation) && !g.isArray(n.pointRotation)) || (i = g.valueAtIndexOrDefault(n.pointRotation, e, i)) : (i = a.rotation), i;
                                },
                                updateElement: function (t, e, i) {
                                    var n,
                                        a,
                                        o = this,
                                        r = o.getMeta(),
                                        s = t.custom || {},
                                        l = o.getDataset(),
                                        u = o.index,
                                        d = l.data[e],
                                        c = o.getScaleForId(r.yAxisID),
                                        h = o.getScaleForId(r.xAxisID),
                                        f = o.chart.options.elements.point;
                                    void 0 !== l.radius && void 0 === l.pointRadius && (l.pointRadius = l.radius),
                                        void 0 !== l.hitRadius && void 0 === l.pointHitRadius && (l.pointHitRadius = l.hitRadius),
                                        (n = h.getPixelForValue("object" == typeof d ? d : NaN, e, u)),
                                        (a = i ? c.getBasePixel() : o.calculatePointY(d, e, u)),
                                        (t._xScale = h),
                                        (t._yScale = c),
                                        (t._datasetIndex = u),
                                        (t._index = e),
                                        (t._model = {
                                            x: n,
                                            y: a,
                                            skip: s.skip || isNaN(n) || isNaN(a),
                                            radius: s.radius || g.valueAtIndexOrDefault(l.pointRadius, e, f.radius),
                                            pointStyle: s.pointStyle || g.valueAtIndexOrDefault(l.pointStyle, e, f.pointStyle),
                                            rotation: o.getPointRotation(t, e),
                                            backgroundColor: o.getPointBackgroundColor(t, e),
                                            borderColor: o.getPointBorderColor(t, e),
                                            borderWidth: o.getPointBorderWidth(t, e),
                                            tension: r.dataset._model ? r.dataset._model.tension : 0,
                                            steppedLine: !!r.dataset._model && r.dataset._model.steppedLine,
                                            hitRadius: s.hitRadius || g.valueAtIndexOrDefault(l.pointHitRadius, e, f.hitRadius),
                                        });
                                },
                                calculatePointY: function (t, e, i) {
                                    var n,
                                        a,
                                        o,
                                        r = this.chart,
                                        s = this.getMeta(),
                                        l = this.getScaleForId(s.yAxisID),
                                        u = 0,
                                        d = 0;
                                    if (l.options.stacked) {
                                        for (n = 0; n < i; n++)
                                            if (((a = r.data.datasets[n]), "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n))) {
                                                var c = Number(l.getRightValue(a.data[e]));
                                                c < 0 ? (d += c || 0) : (u += c || 0);
                                            }
                                        var h = Number(l.getRightValue(t));
                                        return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h);
                                    }
                                    return l.getPixelForValue(t);
                                },
                                updateBezierControlPoints: function () {
                                    var t,
                                        e,
                                        i,
                                        n,
                                        a = this.getMeta(),
                                        o = this.chart.chartArea,
                                        r = a.data || [];
                                    function s(t, e, i) {
                                        return Math.max(Math.min(t, i), e);
                                    }
                                    if (
                                        (a.dataset._model.spanGaps &&
                                            (r = r.filter(function (t) {
                                                return !t._model.skip;
                                            })),
                                            "monotone" === a.dataset._model.cubicInterpolationMode)
                                    )
                                        g.splineCurveMonotone(r);
                                    else
                                        for (t = 0, e = r.length; t < e; ++t)
                                            (i = r[t]._model),
                                                (n = g.splineCurve(g.previousItem(r, t)._model, i, g.nextItem(r, t)._model, a.dataset._model.tension)),
                                                (i.controlPointPreviousX = n.previous.x),
                                                (i.controlPointPreviousY = n.previous.y),
                                                (i.controlPointNextX = n.next.x),
                                                (i.controlPointNextY = n.next.y);
                                    if (this.chart.options.elements.line.capBezierPoints)
                                        for (t = 0, e = r.length; t < e; ++t)
                                            ((i = r[t]._model).controlPointPreviousX = s(i.controlPointPreviousX, o.left, o.right)),
                                                (i.controlPointPreviousY = s(i.controlPointPreviousY, o.top, o.bottom)),
                                                (i.controlPointNextX = s(i.controlPointNextX, o.left, o.right)),
                                                (i.controlPointNextY = s(i.controlPointNextY, o.top, o.bottom));
                                },
                                draw: function () {
                                    var t,
                                        e = this.chart,
                                        i = this.getMeta(),
                                        n = i.data || [],
                                        a = e.chartArea,
                                        o = n.length,
                                        r = 0;
                                    for (
                                        f(this.getDataset(), e.options) &&
                                        ((t = (i.dataset._model.borderWidth || 0) / 2), g.canvas.clipArea(e.ctx, { left: a.left, right: a.right, top: a.top - t, bottom: a.bottom + t }), i.dataset.draw(), g.canvas.unclipArea(e.ctx));
                                        r < o;
                                        ++r
                                    )
                                        n[r].draw(a);
                                },
                                setHoverStyle: function (t) {
                                    var e = this.chart.data.datasets[t._datasetIndex],
                                        i = t._index,
                                        n = t.custom || {},
                                        a = t._model;
                                    (t.$previousStyle = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderWidth: a.borderWidth, radius: a.radius }),
                                        (a.backgroundColor = n.hoverBackgroundColor || g.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, g.getHoverColor(a.backgroundColor))),
                                        (a.borderColor = n.hoverBorderColor || g.valueAtIndexOrDefault(e.pointHoverBorderColor, i, g.getHoverColor(a.borderColor))),
                                        (a.borderWidth = n.hoverBorderWidth || g.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)),
                                        (a.radius = n.hoverRadius || g.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius));
                                },
                            });
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            19: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        k = t(46);
                    n._set("polarArea", {
                        scale: { type: "radialLinear", angleLines: { display: !1 }, gridLines: { circular: !0 }, pointLabels: { display: !1 }, ticks: { beginAtZero: !0 } },
                        animation: { animateRotate: !0, animateScale: !0 },
                        startAngle: -0.5 * Math.PI,
                        legendCallback: function (t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            var i = t.data,
                                n = i.datasets,
                                a = i.labels;
                            if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                            return e.push("</ul>"), e.join("");
                        },
                        legend: {
                            labels: {
                                generateLabels: function (s) {
                                    var l = s.data;
                                    return l.labels.length && l.datasets.length
                                        ? l.labels.map(function (t, e) {
                                            var i = s.getDatasetMeta(0),
                                                n = l.datasets[0],
                                                a = i.data[e].custom || {},
                                                o = k.valueAtIndexOrDefault,
                                                r = s.options.elements.arc;
                                            return {
                                                text: t,
                                                fillStyle: a.backgroundColor ? a.backgroundColor : o(n.backgroundColor, e, r.backgroundColor),
                                                strokeStyle: a.borderColor ? a.borderColor : o(n.borderColor, e, r.borderColor),
                                                lineWidth: a.borderWidth ? a.borderWidth : o(n.borderWidth, e, r.borderWidth),
                                                hidden: isNaN(n.data[e]) || i.data[e].hidden,
                                                index: e,
                                            };
                                        })
                                        : [];
                                },
                            },
                            onClick: function (t, e) {
                                var i,
                                    n,
                                    a,
                                    o = e.index,
                                    r = this.chart;
                                for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                                r.update();
                            },
                        },
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (t, e) {
                                    return e.labels[t.index] + ": " + t.yLabel;
                                },
                            },
                        },
                    }),
                        (e.exports = function (t) {
                            t.controllers.polarArea = t.DatasetController.extend({
                                dataElementType: a.Arc,
                                linkScales: k.noop,
                                update: function (i) {
                                    var t,
                                        e,
                                        n,
                                        a = this,
                                        o = a.getDataset(),
                                        r = a.getMeta(),
                                        s = a.chart.options.startAngle || 0,
                                        l = (a._starts = []),
                                        u = (a._angles = []);
                                    for (a._updateRadius(), r.count = a.countVisibleElements(), t = 0, e = o.data.length; t < e; t++) (l[t] = s), (n = a._computeAngle(t)), (s += u[t] = n);
                                    k.each(r.data, function (t, e) {
                                        a.updateElement(t, e, i);
                                    });
                                },
                                _updateRadius: function () {
                                    var t = this,
                                        e = t.chart,
                                        i = e.chartArea,
                                        n = e.options,
                                        a = n.elements.arc,
                                        o = Math.min(i.right - i.left, i.bottom - i.top);
                                    (e.outerRadius = Math.max((o - a.borderWidth / 2) / 2, 0)),
                                        (e.innerRadius = Math.max(n.cutoutPercentage ? (e.outerRadius / 100) * n.cutoutPercentage : 1, 0)),
                                        (e.radiusLength = (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
                                        (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
                                        (t.innerRadius = t.outerRadius - e.radiusLength);
                                },
                                updateElement: function (t, e, i) {
                                    var n = this,
                                        a = n.chart,
                                        o = n.getDataset(),
                                        r = a.options,
                                        s = r.animation,
                                        l = a.scale,
                                        u = a.data.labels,
                                        d = l.xCenter,
                                        c = l.yCenter,
                                        h = r.startAngle,
                                        f = t.hidden ? 0 : l.getDistanceFromCenterForValue(o.data[e]),
                                        g = n._starts[e],
                                        p = g + (t.hidden ? 0 : n._angles[e]),
                                        m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(o.data[e]);
                                    k.extend(t, {
                                        _datasetIndex: n.index,
                                        _index: e,
                                        _scale: l,
                                        _model: { x: d, y: c, innerRadius: 0, outerRadius: i ? m : f, startAngle: i && s.animateRotate ? h : g, endAngle: i && s.animateRotate ? h : p, label: k.valueAtIndexOrDefault(u, e, u[e]) },
                                    });
                                    var v = this.chart.options.elements.arc,
                                        b = t.custom || {},
                                        x = k.valueAtIndexOrDefault,
                                        y = t._model;
                                    (y.backgroundColor = b.backgroundColor ? b.backgroundColor : x(o.backgroundColor, e, v.backgroundColor)),
                                        (y.borderColor = b.borderColor ? b.borderColor : x(o.borderColor, e, v.borderColor)),
                                        (y.borderWidth = b.borderWidth ? b.borderWidth : x(o.borderWidth, e, v.borderWidth)),
                                        t.pivot();
                                },
                                countVisibleElements: function () {
                                    var i = this.getDataset(),
                                        t = this.getMeta(),
                                        n = 0;
                                    return (
                                        k.each(t.data, function (t, e) {
                                            isNaN(i.data[e]) || t.hidden || n++;
                                        }),
                                        n
                                    );
                                },
                                _computeAngle: function (t) {
                                    var e = this,
                                        i = this.getMeta().count,
                                        n = e.getDataset(),
                                        a = e.getMeta();
                                    if (isNaN(n.data[t]) || a.data[t].hidden) return 0;
                                    var o = { chart: e.chart, dataIndex: t, dataset: n, datasetIndex: e.index };
                                    return k.options.resolve([e.chart.options.elements.arc.angle, (2 * Math.PI) / i], o, t);
                                },
                            });
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            20: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(41),
                        u = t(46);
                    n._set("radar", { scale: { type: "radialLinear" }, elements: { line: { tension: 0 } } }),
                        (e.exports = function (t) {
                            t.controllers.radar = t.DatasetController.extend({
                                datasetElementType: a.Line,
                                dataElementType: a.Point,
                                linkScales: u.noop,
                                update: function (i) {
                                    var n = this,
                                        t = n.getMeta(),
                                        e = t.dataset,
                                        a = t.data,
                                        o = e.custom || {},
                                        r = n.getDataset(),
                                        s = n.chart.options.elements.line,
                                        l = n.chart.scale;
                                    void 0 !== r.tension && void 0 === r.lineTension && (r.lineTension = r.tension),
                                        u.extend(t.dataset, {
                                            _datasetIndex: n.index,
                                            _scale: l,
                                            _children: a,
                                            _loop: !0,
                                            _model: {
                                                tension: o.tension ? o.tension : u.valueOrDefault(r.lineTension, s.tension),
                                                backgroundColor: o.backgroundColor ? o.backgroundColor : r.backgroundColor || s.backgroundColor,
                                                borderWidth: o.borderWidth ? o.borderWidth : r.borderWidth || s.borderWidth,
                                                borderColor: o.borderColor ? o.borderColor : r.borderColor || s.borderColor,
                                                fill: o.fill ? o.fill : void 0 !== r.fill ? r.fill : s.fill,
                                                borderCapStyle: o.borderCapStyle ? o.borderCapStyle : r.borderCapStyle || s.borderCapStyle,
                                                borderDash: o.borderDash ? o.borderDash : r.borderDash || s.borderDash,
                                                borderDashOffset: o.borderDashOffset ? o.borderDashOffset : r.borderDashOffset || s.borderDashOffset,
                                                borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : r.borderJoinStyle || s.borderJoinStyle,
                                            },
                                        }),
                                        t.dataset.pivot(),
                                        u.each(
                                            a,
                                            function (t, e) {
                                                n.updateElement(t, e, i);
                                            },
                                            n
                                        ),
                                        n.updateBezierControlPoints();
                                },
                                updateElement: function (t, e, i) {
                                    var n = this,
                                        a = t.custom || {},
                                        o = n.getDataset(),
                                        r = n.chart.scale,
                                        s = n.chart.options.elements.point,
                                        l = r.getPointPositionForValue(e, o.data[e]);
                                    void 0 !== o.radius && void 0 === o.pointRadius && (o.pointRadius = o.radius),
                                        void 0 !== o.hitRadius && void 0 === o.pointHitRadius && (o.pointHitRadius = o.hitRadius),
                                        u.extend(t, {
                                            _datasetIndex: n.index,
                                            _index: e,
                                            _scale: r,
                                            _model: {
                                                x: i ? r.xCenter : l.x,
                                                y: i ? r.yCenter : l.y,
                                                tension: a.tension ? a.tension : u.valueOrDefault(o.lineTension, n.chart.options.elements.line.tension),
                                                radius: a.radius ? a.radius : u.valueAtIndexOrDefault(o.pointRadius, e, s.radius),
                                                backgroundColor: a.backgroundColor ? a.backgroundColor : u.valueAtIndexOrDefault(o.pointBackgroundColor, e, s.backgroundColor),
                                                borderColor: a.borderColor ? a.borderColor : u.valueAtIndexOrDefault(o.pointBorderColor, e, s.borderColor),
                                                borderWidth: a.borderWidth ? a.borderWidth : u.valueAtIndexOrDefault(o.pointBorderWidth, e, s.borderWidth),
                                                pointStyle: a.pointStyle ? a.pointStyle : u.valueAtIndexOrDefault(o.pointStyle, e, s.pointStyle),
                                                rotation: a.rotation ? a.rotation : u.valueAtIndexOrDefault(o.pointRotation, e, s.rotation),
                                                hitRadius: a.hitRadius ? a.hitRadius : u.valueAtIndexOrDefault(o.pointHitRadius, e, s.hitRadius),
                                            },
                                        }),
                                        (t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y));
                                },
                                updateBezierControlPoints: function () {
                                    var a = this.chart.chartArea,
                                        o = this.getMeta();
                                    u.each(o.data, function (t, e) {
                                        var i = t._model,
                                            n = u.splineCurve(u.previousItem(o.data, e, !0)._model, i, u.nextItem(o.data, e, !0)._model, i.tension);
                                        (i.controlPointPreviousX = Math.max(Math.min(n.previous.x, a.right), a.left)),
                                            (i.controlPointPreviousY = Math.max(Math.min(n.previous.y, a.bottom), a.top)),
                                            (i.controlPointNextX = Math.max(Math.min(n.next.x, a.right), a.left)),
                                            (i.controlPointNextY = Math.max(Math.min(n.next.y, a.bottom), a.top)),
                                            t.pivot();
                                    });
                                },
                                setHoverStyle: function (t) {
                                    var e = this.chart.data.datasets[t._datasetIndex],
                                        i = t.custom || {},
                                        n = t._index,
                                        a = t._model;
                                    (t.$previousStyle = { backgroundColor: a.backgroundColor, borderColor: a.borderColor, borderWidth: a.borderWidth, radius: a.radius }),
                                        (a.radius = i.hoverRadius ? i.hoverRadius : u.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius)),
                                        (a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : u.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, u.getHoverColor(a.backgroundColor))),
                                        (a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : u.valueAtIndexOrDefault(e.pointHoverBorderColor, n, u.getHoverColor(a.borderColor))),
                                        (a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : u.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth));
                                },
                            });
                        });
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            21: [
                function (t, e, i) {
                    "use strict";
                    t(26)._set("scatter", {
                        hover: { mode: "single" },
                        scales: { xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }], yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }] },
                        showLines: !1,
                        tooltips: {
                            callbacks: {
                                title: function () {
                                    return "";
                                },
                                label: function (t) {
                                    return "(" + t.xLabel + ", " + t.yLabel + ")";
                                },
                            },
                        },
                    }),
                        (e.exports = function (t) {
                            t.controllers.scatter = t.controllers.line;
                        });
                },
                { 26: 26 },
            ],
            22: [
                function (t, e, i) {
                    "use strict";
                    var n = t(27);
                    i = e.exports = n.extend({ chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null });
                    Object.defineProperty(i.prototype, "animationObject", {
                        get: function () {
                            return this;
                        },
                    }),
                        Object.defineProperty(i.prototype, "chartInstance", {
                            get: function () {
                                return this.chart;
                            },
                            set: function (t) {
                                this.chart = t;
                            },
                        });
                },
                { 27: 27 },
            ],
            23: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        o = t(46);
                    n._set("global", { animation: { duration: 1e3, easing: "easeOutQuart", onProgress: o.noop, onComplete: o.noop } }),
                        (e.exports = {
                            frameDuration: 17,
                            animations: [],
                            dropFrames: 0,
                            request: null,
                            addAnimation: function (t, e, i, n) {
                                var a,
                                    o,
                                    r = this.animations;
                                for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) if (r[a].chart === t) return void (r[a] = e);
                                r.push(e), 1 === r.length && this.requestAnimationFrame();
                            },
                            cancelAnimation: function (e) {
                                var t = o.findIndex(this.animations, function (t) {
                                    return t.chart === e;
                                });
                                -1 !== t && (this.animations.splice(t, 1), (e.animating = !1));
                            },
                            requestAnimationFrame: function () {
                                var t = this;
                                null === t.request &&
                                    (t.request = o.requestAnimFrame.call(window, function () {
                                        (t.request = null), t.startDigest();
                                    }));
                            },
                            startDigest: function () {
                                var t = this,
                                    e = Date.now(),
                                    i = 0;
                                1 < t.dropFrames && ((i = Math.floor(t.dropFrames)), (t.dropFrames = t.dropFrames % 1)), t.advance(1 + i);
                                var n = Date.now();
                                (t.dropFrames += (n - e) / t.frameDuration), 0 < t.animations.length && t.requestAnimationFrame();
                            },
                            advance: function (t) {
                                for (var e, i, n = this.animations, a = 0; a < n.length;)
                                    (i = (e = n[a]).chart),
                                        (e.currentStep = (e.currentStep || 0) + t),
                                        (e.currentStep = Math.min(e.currentStep, e.numSteps)),
                                        o.callback(e.render, [i, e], i),
                                        o.callback(e.onAnimationProgress, [e], i),
                                        e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), (i.animating = !1), n.splice(a, 1)) : ++a;
                            },
                        });
                },
                { 26: 26, 46: 46 },
            ],
            24: [
                function (t, e, i) {
                    "use strict";
                    var s = t(22),
                        l = t(23),
                        c = t(26),
                        h = t(46),
                        a = t(29),
                        o = t(31),
                        f = t(49),
                        g = t(32),
                        p = t(34),
                        n = t(36);
                    e.exports = function (u) {
                        function d(t) {
                            return "top" === t || "bottom" === t;
                        }
                        (u.types = {}),
                            (u.instances = {}),
                            (u.controllers = {}),
                            h.extend(u.prototype, {
                                construct: function (t, e) {
                                    var i,
                                        n,
                                        a = this;
                                    ((n = (i = (i = e) || {}).data = i.data || {}).datasets = n.datasets || []), (n.labels = n.labels || []), (i.options = h.configMerge(c.global, c[i.type], i.options || {})), (e = i);
                                    var o = f.acquireContext(t, e),
                                        r = o && o.canvas,
                                        s = r && r.height,
                                        l = r && r.width;
                                    (a.id = h.uid()),
                                        (a.ctx = o),
                                        (a.canvas = r),
                                        (a.config = e),
                                        (a.width = l),
                                        (a.height = s),
                                        (a.aspectRatio = s ? l / s : null),
                                        (a.options = e.options),
                                        (a._bufferedRender = !1),
                                        ((a.chart = a).controller = a),
                                        (u.instances[a.id] = a),
                                        Object.defineProperty(a, "data", {
                                            get: function () {
                                                return a.config.data;
                                            },
                                            set: function (t) {
                                                a.config.data = t;
                                            },
                                        }),
                                        o && r ? (a.initialize(), a.update()) : console.error("Failed to create chart: can't acquire context from the given item");
                                },
                                initialize: function () {
                                    var t = this;
                                    return (
                                        g.notify(t, "beforeInit"),
                                        h.retinaScale(t, t.options.devicePixelRatio),
                                        t.bindEvents(),
                                        t.options.responsive && t.resize(!0),
                                        t.ensureScalesHaveIDs(),
                                        t.buildOrUpdateScales(),
                                        t.initToolTip(),
                                        g.notify(t, "afterInit"),
                                        t
                                    );
                                },
                                clear: function () {
                                    return h.canvas.clear(this), this;
                                },
                                stop: function () {
                                    return l.cancelAnimation(this), this;
                                },
                                resize: function (t) {
                                    var e = this,
                                        i = e.options,
                                        n = e.canvas,
                                        a = (i.maintainAspectRatio && e.aspectRatio) || null,
                                        o = Math.max(0, Math.floor(h.getMaximumWidth(n))),
                                        r = Math.max(0, Math.floor(a ? o / a : h.getMaximumHeight(n)));
                                    if ((e.width !== o || e.height !== r) && ((n.width = e.width = o), (n.height = e.height = r), (n.style.width = o + "px"), (n.style.height = r + "px"), h.retinaScale(e, i.devicePixelRatio), !t)) {
                                        var s = { width: o, height: r };
                                        g.notify(e, "resize", [s]), e.options.onResize && e.options.onResize(e, s), e.stop(), e.update({ duration: e.options.responsiveAnimationDuration });
                                    }
                                },
                                ensureScalesHaveIDs: function () {
                                    var t = this.options,
                                        e = t.scales || {},
                                        i = t.scale;
                                    h.each(e.xAxes, function (t, e) {
                                        t.id = t.id || "x-axis-" + e;
                                    }),
                                        h.each(e.yAxes, function (t, e) {
                                            t.id = t.id || "y-axis-" + e;
                                        }),
                                        i && (i.id = i.id || "scale");
                                },
                                buildOrUpdateScales: function () {
                                    var r = this,
                                        t = r.options,
                                        s = r.scales || {},
                                        e = [],
                                        l = Object.keys(s).reduce(function (t, e) {
                                            return (t[e] = !1), t;
                                        }, {});
                                    t.scales &&
                                        (e = e.concat(
                                            (t.scales.xAxes || []).map(function (t) {
                                                return { options: t, dtype: "category", dposition: "bottom" };
                                            }),
                                            (t.scales.yAxes || []).map(function (t) {
                                                return { options: t, dtype: "linear", dposition: "left" };
                                            })
                                        )),
                                        t.scale && e.push({ options: t.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea" }),
                                        h.each(e, function (t) {
                                            var e = t.options,
                                                i = e.id,
                                                n = h.valueOrDefault(e.type, t.dtype);
                                            d(e.position) !== d(t.dposition) && (e.position = t.dposition), (l[i] = !0);
                                            var a = null;
                                            if (i in s && s[i].type === n) ((a = s[i]).options = e), (a.ctx = r.ctx), (a.chart = r);
                                            else {
                                                var o = p.getScaleConstructor(n);
                                                if (!o) return;
                                                (a = new o({ id: i, type: n, options: e, ctx: r.ctx, chart: r })), (s[a.id] = a);
                                            }
                                            a.mergeTicksOptions(), t.isDefault && (r.scale = a);
                                        }),
                                        h.each(l, function (t, e) {
                                            t || delete s[e];
                                        }),
                                        (r.scales = s),
                                        p.addScalesToLayout(this);
                                },
                                buildOrUpdateControllers: function () {
                                    var o = this,
                                        r = [],
                                        s = [];
                                    return (
                                        h.each(
                                            o.data.datasets,
                                            function (t, e) {
                                                var i = o.getDatasetMeta(e),
                                                    n = t.type || o.config.type;
                                                if ((i.type && i.type !== n && (o.destroyDatasetMeta(e), (i = o.getDatasetMeta(e))), (i.type = n), r.push(i.type), i.controller)) i.controller.updateIndex(e), i.controller.linkScales();
                                                else {
                                                    var a = u.controllers[i.type];
                                                    if (void 0 === a) throw new Error('"' + i.type + '" is not a chart type.');
                                                    (i.controller = new a(o, e)), s.push(i.controller);
                                                }
                                            },
                                            o
                                        ),
                                        s
                                    );
                                },
                                resetElements: function () {
                                    var i = this;
                                    h.each(
                                        i.data.datasets,
                                        function (t, e) {
                                            i.getDatasetMeta(e).controller.reset();
                                        },
                                        i
                                    );
                                },
                                reset: function () {
                                    this.resetElements(), this.tooltip.initialize();
                                },
                                update: function (t) {
                                    var e,
                                        i,
                                        n = this;
                                    if (
                                        ((t && "object" == typeof t) || (t = { duration: t, lazy: arguments[1] }),
                                            (i = (e = n).options),
                                            h.each(e.scales, function (t) {
                                                o.removeBox(e, t);
                                            }),
                                            (i = h.configMerge(u.defaults.global, u.defaults[e.config.type], i)),
                                            (e.options = e.config.options = i),
                                            e.ensureScalesHaveIDs(),
                                            e.buildOrUpdateScales(),
                                            (e.tooltip._options = i.tooltips),
                                            e.tooltip.initialize(),
                                            g._invalidate(n),
                                            !1 !== g.notify(n, "beforeUpdate"))
                                    ) {
                                        n.tooltip._data = n.data;
                                        var a = n.buildOrUpdateControllers();
                                        h.each(
                                            n.data.datasets,
                                            function (t, e) {
                                                n.getDatasetMeta(e).controller.buildOrUpdateElements();
                                            },
                                            n
                                        ),
                                            n.updateLayout(),
                                            n.options.animation &&
                                            n.options.animation.duration &&
                                            h.each(a, function (t) {
                                                t.reset();
                                            }),
                                            n.updateDatasets(),
                                            n.tooltip.initialize(),
                                            (n.lastActive = []),
                                            g.notify(n, "afterUpdate"),
                                            n._bufferedRender ? (n._bufferedRequest = { duration: t.duration, easing: t.easing, lazy: t.lazy }) : n.render(t);
                                    }
                                },
                                updateLayout: function () {
                                    !1 !== g.notify(this, "beforeLayout") && (o.update(this, this.width, this.height), g.notify(this, "afterScaleUpdate"), g.notify(this, "afterLayout"));
                                },
                                updateDatasets: function () {
                                    if (!1 !== g.notify(this, "beforeDatasetsUpdate")) {
                                        for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                                        g.notify(this, "afterDatasetsUpdate");
                                    }
                                },
                                updateDataset: function (t) {
                                    var e = this.getDatasetMeta(t),
                                        i = { meta: e, index: t };
                                    !1 !== g.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), g.notify(this, "afterDatasetUpdate", [i]));
                                },
                                render: function (t) {
                                    var e = this;
                                    (t && "object" == typeof t) || (t = { duration: t, lazy: arguments[1] });
                                    var i = t.duration,
                                        n = t.lazy;
                                    if (!1 !== g.notify(e, "beforeRender")) {
                                        var a = e.options.animation,
                                            o = function (t) {
                                                g.notify(e, "afterRender"), h.callback(a && a.onComplete, [t], e);
                                            };
                                        if (a && ((void 0 !== i && 0 !== i) || (void 0 === i && 0 !== a.duration))) {
                                            var r = new s({
                                                numSteps: (i || a.duration) / 16.66,
                                                easing: t.easing || a.easing,
                                                render: function (t, e) {
                                                    var i = h.easing.effects[e.easing],
                                                        n = e.currentStep,
                                                        a = n / e.numSteps;
                                                    t.draw(i(a), a, n);
                                                },
                                                onAnimationProgress: a.onProgress,
                                                onAnimationComplete: o,
                                            });
                                            l.addAnimation(e, r, i, n);
                                        } else e.draw(), o(new s({ numSteps: 0, chart: e }));
                                        return e;
                                    }
                                },
                                draw: function (t) {
                                    var e = this;
                                    e.clear(),
                                        h.isNullOrUndef(t) && (t = 1),
                                        e.transition(t),
                                        e.width <= 0 ||
                                        e.height <= 0 ||
                                        (!1 !== g.notify(e, "beforeDraw", [t]) &&
                                            (h.each(
                                                e.boxes,
                                                function (t) {
                                                    t.draw(e.chartArea);
                                                },
                                                e
                                            ),
                                                e.scale && e.scale.draw(),
                                                e.drawDatasets(t),
                                                e._drawTooltip(t),
                                                g.notify(e, "afterDraw", [t])));
                                },
                                transition: function (t) {
                                    for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                                    this.tooltip.transition(t);
                                },
                                drawDatasets: function (t) {
                                    var e = this;
                                    if (!1 !== g.notify(e, "beforeDatasetsDraw", [t])) {
                                        for (var i = (e.data.datasets || []).length - 1; 0 <= i; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                                        g.notify(e, "afterDatasetsDraw", [t]);
                                    }
                                },
                                drawDataset: function (t, e) {
                                    var i = this.getDatasetMeta(t),
                                        n = { meta: i, index: t, easingValue: e };
                                    !1 !== g.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), g.notify(this, "afterDatasetDraw", [n]));
                                },
                                _drawTooltip: function (t) {
                                    var e = this.tooltip,
                                        i = { tooltip: e, easingValue: t };
                                    !1 !== g.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), g.notify(this, "afterTooltipDraw", [i]));
                                },
                                getElementAtEvent: function (t) {
                                    return a.modes.single(this, t);
                                },
                                getElementsAtEvent: function (t) {
                                    return a.modes.label(this, t, { intersect: !0 });
                                },
                                getElementsAtXAxis: function (t) {
                                    return a.modes["x-axis"](this, t, { intersect: !0 });
                                },
                                getElementsAtEventForMode: function (t, e, i) {
                                    var n = a.modes[e];
                                    return "function" == typeof n ? n(this, t, i) : [];
                                },
                                getDatasetAtEvent: function (t) {
                                    return a.modes.dataset(this, t, { intersect: !0 });
                                },
                                getDatasetMeta: function (t) {
                                    var e = this.data.datasets[t];
                                    e._meta || (e._meta = {});
                                    var i = e._meta[this.id];
                                    return i || (i = e._meta[this.id] = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null }), i;
                                },
                                getVisibleDatasetCount: function () {
                                    for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                                    return t;
                                },
                                isDatasetVisible: function (t) {
                                    var e = this.getDatasetMeta(t);
                                    return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
                                },
                                generateLegend: function () {
                                    return this.options.legendCallback(this);
                                },
                                destroyDatasetMeta: function (t) {
                                    var e = this.id,
                                        i = this.data.datasets[t],
                                        n = i._meta && i._meta[e];
                                    n && (n.controller.destroy(), delete i._meta[e]);
                                },
                                destroy: function () {
                                    var t,
                                        e,
                                        i = this,
                                        n = i.canvas;
                                    for (i.stop(), t = 0, e = i.data.datasets.length; t < e; ++t) i.destroyDatasetMeta(t);
                                    n && (i.unbindEvents(), h.canvas.clear(i), f.releaseContext(i.ctx), (i.canvas = null), (i.ctx = null)), g.notify(i, "destroy"), delete u.instances[i.id];
                                },
                                toBase64Image: function () {
                                    return this.canvas.toDataURL.apply(this.canvas, arguments);
                                },
                                initToolTip: function () {
                                    var t = this;
                                    t.tooltip = new n({ _chart: t, _chartInstance: t, _data: t.data, _options: t.options.tooltips }, t);
                                },
                                bindEvents: function () {
                                    var e = this,
                                        i = (e._listeners = {}),
                                        n = function () {
                                            e.eventHandler.apply(e, arguments);
                                        };
                                    h.each(e.options.events, function (t) {
                                        f.addEventListener(e, t, n), (i[t] = n);
                                    }),
                                        e.options.responsive &&
                                        ((n = function () {
                                            e.resize();
                                        }),
                                            f.addEventListener(e, "resize", n),
                                            (i.resize = n));
                                },
                                unbindEvents: function () {
                                    var i = this,
                                        t = i._listeners;
                                    t &&
                                        (delete i._listeners,
                                            h.each(t, function (t, e) {
                                                f.removeEventListener(i, e, t);
                                            }));
                                },
                                updateHoverStyle: function (t, e, i) {
                                    var n,
                                        a,
                                        o,
                                        r = i ? "setHoverStyle" : "removeHoverStyle";
                                    for (a = 0, o = t.length; a < o; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n);
                                },
                                eventHandler: function (t) {
                                    var e = this,
                                        i = e.tooltip;
                                    if (!1 !== g.notify(e, "beforeEvent", [t])) {
                                        (e._bufferedRender = !0), (e._bufferedRequest = null);
                                        var n = e.handleEvent(t);
                                        i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), g.notify(e, "afterEvent", [t]);
                                        var a = e._bufferedRequest;
                                        return a ? e.render(a) : n && !e.animating && (e.stop(), e.render({ duration: e.options.hover.animationDuration, lazy: !0 })), (e._bufferedRender = !1), (e._bufferedRequest = null), e;
                                    }
                                },
                                handleEvent: function (t) {
                                    var e,
                                        i = this,
                                        n = i.options || {},
                                        a = n.hover;
                                    return (
                                        (i.lastActive = i.lastActive || []),
                                        "mouseout" === t.type ? (i.active = []) : (i.active = i.getElementsAtEventForMode(t, a.mode, a)),
                                        h.callback(n.onHover || n.hover.onHover, [t.native, i.active], i),
                                        ("mouseup" !== t.type && "click" !== t.type) || (n.onClick && n.onClick.call(i, t.native, i.active)),
                                        i.lastActive.length && i.updateHoverStyle(i.lastActive, a.mode, !1),
                                        i.active.length && a.mode && i.updateHoverStyle(i.active, a.mode, !0),
                                        (e = !h.arrayEquals(i.active, i.lastActive)),
                                        (i.lastActive = i.active),
                                        e
                                    );
                                },
                            }),
                            (u.Controller = u);
                    };
                },
                { 22: 22, 23: 23, 26: 26, 29: 29, 31: 31, 32: 32, 34: 34, 36: 36, 46: 46, 49: 49 },
            ],
            25: [
                function (t, e, i) {
                    "use strict";
                    var s = t(46);
                    e.exports = function (t) {
                        var o = ["push", "pop", "shift", "splice", "unshift"];
                        function r(e, t) {
                            var i = e._chartjs;
                            if (i) {
                                var n = i.listeners,
                                    a = n.indexOf(t);
                                -1 !== a && n.splice(a, 1),
                                    0 < n.length ||
                                    (o.forEach(function (t) {
                                        delete e[t];
                                    }),
                                        delete e._chartjs);
                            }
                        }
                        (t.DatasetController = function (t, e) {
                            this.initialize(t, e);
                        }),
                            s.extend(t.DatasetController.prototype, {
                                datasetElementType: null,
                                dataElementType: null,
                                initialize: function (t, e) {
                                    (this.chart = t), (this.index = e), this.linkScales(), this.addElements();
                                },
                                updateIndex: function (t) {
                                    this.index = t;
                                },
                                linkScales: function () {
                                    var t = this,
                                        e = t.getMeta(),
                                        i = t.getDataset();
                                    (null !== e.xAxisID && e.xAxisID in t.chart.scales) || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id),
                                        (null !== e.yAxisID && e.yAxisID in t.chart.scales) || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id);
                                },
                                getDataset: function () {
                                    return this.chart.data.datasets[this.index];
                                },
                                getMeta: function () {
                                    return this.chart.getDatasetMeta(this.index);
                                },
                                getScaleForId: function (t) {
                                    return this.chart.scales[t];
                                },
                                reset: function () {
                                    this.update(!0);
                                },
                                destroy: function () {
                                    this._data && r(this._data, this);
                                },
                                createMetaDataset: function () {
                                    var t = this.datasetElementType;
                                    return t && new t({ _chart: this.chart, _datasetIndex: this.index });
                                },
                                createMetaData: function (t) {
                                    var e = this.dataElementType;
                                    return e && new e({ _chart: this.chart, _datasetIndex: this.index, _index: t });
                                },
                                addElements: function () {
                                    var t,
                                        e,
                                        i = this.getMeta(),
                                        n = this.getDataset().data || [],
                                        a = i.data;
                                    for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                                    i.dataset = i.dataset || this.createMetaDataset();
                                },
                                addElementAndReset: function (t) {
                                    var e = this.createMetaData(t);
                                    this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
                                },
                                buildOrUpdateElements: function () {
                                    var a,
                                        t,
                                        e = this,
                                        i = e.getDataset(),
                                        n = i.data || (i.data = []);
                                    e._data !== n &&
                                        (e._data && r(e._data, e),
                                            (t = e),
                                            (a = n)._chartjs
                                                ? a._chartjs.listeners.push(t)
                                                : (Object.defineProperty(a, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [t] } }),
                                                    o.forEach(function (t) {
                                                        var i = "onData" + t.charAt(0).toUpperCase() + t.slice(1),
                                                            n = a[t];
                                                        Object.defineProperty(a, t, {
                                                            configurable: !0,
                                                            enumerable: !1,
                                                            value: function () {
                                                                var e = Array.prototype.slice.call(arguments),
                                                                    t = n.apply(this, e);
                                                                return (
                                                                    s.each(a._chartjs.listeners, function (t) {
                                                                        "function" == typeof t[i] && t[i].apply(t, e);
                                                                    }),
                                                                    t
                                                                );
                                                            },
                                                        });
                                                    })),
                                            (e._data = n)),
                                        e.resyncElements();
                                },
                                update: s.noop,
                                transition: function (t) {
                                    for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                                    e.dataset && e.dataset.transition(t);
                                },
                                draw: function () {
                                    var t = this.getMeta(),
                                        e = t.data || [],
                                        i = e.length,
                                        n = 0;
                                    for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw();
                                },
                                removeHoverStyle: function (t) {
                                    s.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
                                },
                                setHoverStyle: function (t) {
                                    var e = this.chart.data.datasets[t._datasetIndex],
                                        i = t._index,
                                        n = t.custom || {},
                                        a = s.valueAtIndexOrDefault,
                                        o = s.getHoverColor,
                                        r = t._model;
                                    (t.$previousStyle = { backgroundColor: r.backgroundColor, borderColor: r.borderColor, borderWidth: r.borderWidth }),
                                        (r.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : a(e.hoverBackgroundColor, i, o(r.backgroundColor))),
                                        (r.borderColor = n.hoverBorderColor ? n.hoverBorderColor : a(e.hoverBorderColor, i, o(r.borderColor))),
                                        (r.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : a(e.hoverBorderWidth, i, r.borderWidth));
                                },
                                resyncElements: function () {
                                    var t = this.getMeta(),
                                        e = this.getDataset().data,
                                        i = t.data.length,
                                        n = e.length;
                                    n < i ? t.data.splice(n, i - n) : i < n && this.insertElements(i, n - i);
                                },
                                insertElements: function (t, e) {
                                    for (var i = 0; i < e; ++i) this.addElementAndReset(t + i);
                                },
                                onDataPush: function () {
                                    this.insertElements(this.getDataset().data.length - 1, arguments.length);
                                },
                                onDataPop: function () {
                                    this.getMeta().data.pop();
                                },
                                onDataShift: function () {
                                    this.getMeta().data.shift();
                                },
                                onDataSplice: function (t, e) {
                                    this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
                                },
                                onDataUnshift: function () {
                                    this.insertElements(0, arguments.length);
                                },
                            }),
                            (t.DatasetController.extend = s.inherits);
                    };
                },
                { 46: 46 },
            ],
            26: [
                function (t, e, i) {
                    "use strict";
                    var n = t(46);
                    e.exports = {
                        _set: function (t, e) {
                            return n.merge(this[t] || (this[t] = {}), e);
                        },
                    };
                },
                { 46: 46 },
            ],
            27: [
                function (t, e, i) {
                    "use strict";
                    var g = t(3),
                        n = t(46);
                    var a = function (t) {
                        n.extend(this, t), this.initialize.apply(this, arguments);
                    };
                    n.extend(a.prototype, {
                        initialize: function () {
                            this.hidden = !1;
                        },
                        pivot: function () {
                            var t = this;
                            return t._view || (t._view = n.clone(t._model)), (t._start = {}), t;
                        },
                        transition: function (t) {
                            var e = this,
                                i = e._model,
                                n = e._start,
                                a = e._view;
                            return (
                                i && 1 !== t
                                    ? (a || (a = e._view = {}),
                                        n || (n = e._start = {}),
                                        (function (t, e, i, n) {
                                            var a,
                                                o,
                                                r,
                                                s,
                                                l,
                                                u,
                                                d,
                                                c,
                                                h,
                                                f = Object.keys(i);
                                            for (a = 0, o = f.length; a < o; ++a)
                                                if (((u = i[(r = f[a])]), e.hasOwnProperty(r) || (e[r] = u), (s = e[r]) !== u && "_" !== r[0])) {
                                                    if ((t.hasOwnProperty(r) || (t[r] = s), (d = typeof u) == typeof (l = t[r])))
                                                        if ("string" === d) {
                                                            if ((c = g(l)).valid && (h = g(u)).valid) {
                                                                e[r] = h.mix(c, n).rgbString();
                                                                continue;
                                                            }
                                                        } else if ("number" === d && isFinite(l) && isFinite(u)) {
                                                            e[r] = l + (u - l) * n;
                                                            continue;
                                                        }
                                                    e[r] = u;
                                                }
                                        })(n, a, i, t))
                                    : ((e._view = i), (e._start = null)),
                                e
                            );
                        },
                        tooltipPosition: function () {
                            return { x: this._model.x, y: this._model.y };
                        },
                        hasValue: function () {
                            return n.isNumber(this._model.x) && n.isNumber(this._model.y);
                        },
                    }),
                        (a.extend = n.inherits),
                        (e.exports = a);
                },
                { 3: 3, 46: 46 },
            ],
            28: [
                function (t, e, i) {
                    "use strict";
                    var n = t(3),
                        a = t(26),
                        g = t(46),
                        l = t(34);
                    e.exports = function () {
                        function d(t, e, i) {
                            var n;
                            return "string" == typeof t ? ((n = parseInt(t, 10)), -1 !== t.indexOf("%") && (n = (n / 100) * e.parentNode[i])) : (n = t), n;
                        }
                        function c(t) {
                            return null != t && "none" !== t;
                        }
                        function e(t, e, i) {
                            var n = document.defaultView,
                                a = g._getParentNode(t),
                                o = n.getComputedStyle(t)[e],
                                r = n.getComputedStyle(a)[e],
                                s = c(o),
                                l = c(r),
                                u = Number.POSITIVE_INFINITY;
                            return s || l ? Math.min(s ? d(o, t, i) : u, l ? d(r, a, i) : u) : "none";
                        }
                        (g.configMerge = function () {
                            return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                                merger: function (t, e, i, n) {
                                    var a = e[t] || {},
                                        o = i[t];
                                    "scales" === t ? (e[t] = g.scaleMerge(a, o)) : "scale" === t ? (e[t] = g.merge(a, [l.getScaleDefaults(o.type), o])) : g._merger(t, e, i, n);
                                },
                            });
                        }),
                            (g.scaleMerge = function () {
                                return g.merge(g.clone(arguments[0]), [].slice.call(arguments, 1), {
                                    merger: function (t, e, i, n) {
                                        if ("xAxes" === t || "yAxes" === t) {
                                            var a,
                                                o,
                                                r,
                                                s = i[t].length;
                                            for (e[t] || (e[t] = []), a = 0; a < s; ++a)
                                                (r = i[t][a]),
                                                    (o = g.valueOrDefault(r.type, "xAxes" === t ? "category" : "linear")),
                                                    a >= e[t].length && e[t].push({}),
                                                    !e[t][a].type || (r.type && r.type !== e[t][a].type) ? g.merge(e[t][a], [l.getScaleDefaults(o), r]) : g.merge(e[t][a], r);
                                        } else g._merger(t, e, i, n);
                                    },
                                });
                            }),
                            (g.where = function (t, e) {
                                if (g.isArray(t) && Array.prototype.filter) return t.filter(e);
                                var i = [];
                                return (
                                    g.each(t, function (t) {
                                        e(t) && i.push(t);
                                    }),
                                    i
                                );
                            }),
                            (g.findIndex = Array.prototype.findIndex
                                ? function (t, e, i) {
                                    return t.findIndex(e, i);
                                }
                                : function (t, e, i) {
                                    i = void 0 === i ? t : i;
                                    for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;
                                    return -1;
                                }),
                            (g.findNextWhere = function (t, e, i) {
                                g.isNullOrUndef(i) && (i = -1);
                                for (var n = i + 1; n < t.length; n++) {
                                    var a = t[n];
                                    if (e(a)) return a;
                                }
                            }),
                            (g.findPreviousWhere = function (t, e, i) {
                                g.isNullOrUndef(i) && (i = t.length);
                                for (var n = i - 1; 0 <= n; n--) {
                                    var a = t[n];
                                    if (e(a)) return a;
                                }
                            }),
                            (g.isNumber = function (t) {
                                return !isNaN(parseFloat(t)) && isFinite(t);
                            }),
                            (g.almostEquals = function (t, e, i) {
                                return Math.abs(t - e) < i;
                            }),
                            (g.almostWhole = function (t, e) {
                                var i = Math.round(t);
                                return i - e < t && t < i + e;
                            }),
                            (g.max = function (t) {
                                return t.reduce(function (t, e) {
                                    return isNaN(e) ? t : Math.max(t, e);
                                }, Number.NEGATIVE_INFINITY);
                            }),
                            (g.min = function (t) {
                                return t.reduce(function (t, e) {
                                    return isNaN(e) ? t : Math.min(t, e);
                                }, Number.POSITIVE_INFINITY);
                            }),
                            (g.sign = Math.sign
                                ? function (t) {
                                    return Math.sign(t);
                                }
                                : function (t) {
                                    return 0 === (t = +t) || isNaN(t) ? t : 0 < t ? 1 : -1;
                                }),
                            (g.log10 = Math.log10
                                ? function (t) {
                                    return Math.log10(t);
                                }
                                : function (t) {
                                    var e = Math.log(t) * Math.LOG10E,
                                        i = Math.round(e);
                                    return t === Math.pow(10, i) ? i : e;
                                }),
                            (g.toRadians = function (t) {
                                return t * (Math.PI / 180);
                            }),
                            (g.toDegrees = function (t) {
                                return t * (180 / Math.PI);
                            }),
                            (g.getAngleFromPoint = function (t, e) {
                                var i = e.x - t.x,
                                    n = e.y - t.y,
                                    a = Math.sqrt(i * i + n * n),
                                    o = Math.atan2(n, i);
                                return o < -0.5 * Math.PI && (o += 2 * Math.PI), { angle: o, distance: a };
                            }),
                            (g.distanceBetweenPoints = function (t, e) {
                                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
                            }),
                            (g.aliasPixel = function (t) {
                                return t % 2 == 0 ? 0 : 0.5;
                            }),
                            (g.splineCurve = function (t, e, i, n) {
                                var a = t.skip ? e : t,
                                    o = e,
                                    r = i.skip ? e : i,
                                    s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                                    l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                                    u = s / (s + l),
                                    d = l / (s + l),
                                    c = n * (u = isNaN(u) ? 0 : u),
                                    h = n * (d = isNaN(d) ? 0 : d);
                                return { previous: { x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y) }, next: { x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y) } };
                            }),
                            (g.EPSILON = Number.EPSILON || 1e-14),
                            (g.splineCurveMonotone = function (t) {
                                var e,
                                    i,
                                    n,
                                    a,
                                    o,
                                    r,
                                    s,
                                    l,
                                    u,
                                    d = (t || []).map(function (t) {
                                        return { model: t._model, deltaK: 0, mK: 0 };
                                    }),
                                    c = d.length;
                                for (e = 0; e < c; ++e)
                                    if (!(n = d[e]).model.skip) {
                                        if (((i = 0 < e ? d[e - 1] : null), (a = e < c - 1 ? d[e + 1] : null) && !a.model.skip)) {
                                            var h = a.model.x - n.model.x;
                                            n.deltaK = 0 !== h ? (a.model.y - n.model.y) / h : 0;
                                        }
                                        !i || i.model.skip ? (n.mK = n.deltaK) : !a || a.model.skip ? (n.mK = i.deltaK) : this.sign(i.deltaK) !== this.sign(n.deltaK) ? (n.mK = 0) : (n.mK = (i.deltaK + n.deltaK) / 2);
                                    }
                                for (e = 0; e < c - 1; ++e)
                                    (n = d[e]),
                                        (a = d[e + 1]),
                                        n.model.skip ||
                                        a.model.skip ||
                                        (g.almostEquals(n.deltaK, 0, this.EPSILON)
                                            ? (n.mK = a.mK = 0)
                                            : ((o = n.mK / n.deltaK), (r = a.mK / n.deltaK), (l = Math.pow(o, 2) + Math.pow(r, 2)) <= 9 || ((s = 3 / Math.sqrt(l)), (n.mK = o * s * n.deltaK), (a.mK = r * s * n.deltaK))));
                                for (e = 0; e < c; ++e)
                                    (n = d[e]).model.skip ||
                                        ((i = 0 < e ? d[e - 1] : null),
                                            (a = e < c - 1 ? d[e + 1] : null),
                                            i && !i.model.skip && ((u = (n.model.x - i.model.x) / 3), (n.model.controlPointPreviousX = n.model.x - u), (n.model.controlPointPreviousY = n.model.y - u * n.mK)),
                                            a && !a.model.skip && ((u = (a.model.x - n.model.x) / 3), (n.model.controlPointNextX = n.model.x + u), (n.model.controlPointNextY = n.model.y + u * n.mK)));
                            }),
                            (g.nextItem = function (t, e, i) {
                                return i ? (e >= t.length - 1 ? t[0] : t[e + 1]) : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
                            }),
                            (g.previousItem = function (t, e, i) {
                                return i ? (e <= 0 ? t[t.length - 1] : t[e - 1]) : e <= 0 ? t[0] : t[e - 1];
                            }),
                            (g.niceNum = function (t, e) {
                                var i = Math.floor(g.log10(t)),
                                    n = t / Math.pow(10, i);
                                return (e ? (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i);
                            }),
                            (g.requestAnimFrame =
                                "undefined" == typeof window
                                    ? function (t) {
                                        t();
                                    }
                                    : window.requestAnimationFrame ||
                                    window.webkitRequestAnimationFrame ||
                                    window.mozRequestAnimationFrame ||
                                    window.oRequestAnimationFrame ||
                                    window.msRequestAnimationFrame ||
                                    function (t) {
                                        return window.setTimeout(t, 1e3 / 60);
                                    }),
                            (g.getRelativePosition = function (t, e) {
                                var i,
                                    n,
                                    a = t.originalEvent || t,
                                    o = t.target || t.srcElement,
                                    r = o.getBoundingClientRect(),
                                    s = a.touches;
                                n = s && 0 < s.length ? ((i = s[0].clientX), s[0].clientY) : ((i = a.clientX), a.clientY);
                                var l = parseFloat(g.getStyle(o, "padding-left")),
                                    u = parseFloat(g.getStyle(o, "padding-top")),
                                    d = parseFloat(g.getStyle(o, "padding-right")),
                                    c = parseFloat(g.getStyle(o, "padding-bottom")),
                                    h = r.right - r.left - l - d,
                                    f = r.bottom - r.top - u - c;
                                return { x: (i = Math.round((((i - r.left - l) / h) * o.width) / e.currentDevicePixelRatio)), y: (n = Math.round((((n - r.top - u) / f) * o.height) / e.currentDevicePixelRatio)) };
                            }),
                            (g.getConstraintWidth = function (t) {
                                return e(t, "max-width", "clientWidth");
                            }),
                            (g.getConstraintHeight = function (t) {
                                return e(t, "max-height", "clientHeight");
                            }),
                            (g._calculatePadding = function (t, e, i) {
                                return -1 < (e = g.getStyle(t, e)).indexOf("%") ? i / parseInt(e, 10) : parseInt(e, 10);
                            }),
                            (g._getParentNode = function (t) {
                                var e = t.parentNode;
                                return e && e.host && (e = e.host), e;
                            }),
                            (g.getMaximumWidth = function (t) {
                                var e = g._getParentNode(t);
                                if (!e) return t.clientWidth;
                                var i = e.clientWidth,
                                    n = i - g._calculatePadding(e, "padding-left", i) - g._calculatePadding(e, "padding-right", i),
                                    a = g.getConstraintWidth(t);
                                return isNaN(a) ? n : Math.min(n, a);
                            }),
                            (g.getMaximumHeight = function (t) {
                                var e = g._getParentNode(t);
                                if (!e) return t.clientHeight;
                                var i = e.clientHeight,
                                    n = i - g._calculatePadding(e, "padding-top", i) - g._calculatePadding(e, "padding-bottom", i),
                                    a = g.getConstraintHeight(t);
                                return isNaN(a) ? n : Math.min(n, a);
                            }),
                            (g.getStyle = function (t, e) {
                                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
                            }),
                            (g.retinaScale = function (t, e) {
                                var i = (t.currentDevicePixelRatio = e || ("undefined" != typeof window && window.devicePixelRatio) || 1);
                                if (1 !== i) {
                                    var n = t.canvas,
                                        a = t.height,
                                        o = t.width;
                                    (n.height = a * i), (n.width = o * i), t.ctx.scale(i, i), n.style.height || n.style.width || ((n.style.height = a + "px"), (n.style.width = o + "px"));
                                }
                            }),
                            (g.fontString = function (t, e, i) {
                                return e + " " + t + "px " + i;
                            }),
                            (g.longestText = function (e, t, i, n) {
                                var a = ((n = n || {}).data = n.data || {}),
                                    o = (n.garbageCollect = n.garbageCollect || []);
                                n.font !== t && ((a = n.data = {}), (o = n.garbageCollect = []), (n.font = t)), (e.font = t);
                                var r = 0;
                                g.each(i, function (t) {
                                    null != t && !0 !== g.isArray(t)
                                        ? (r = g.measureText(e, a, o, r, t))
                                        : g.isArray(t) &&
                                        g.each(t, function (t) {
                                            null == t || g.isArray(t) || (r = g.measureText(e, a, o, r, t));
                                        });
                                });
                                var s = o.length / 2;
                                if (s > i.length) {
                                    for (var l = 0; l < s; l++) delete a[o[l]];
                                    o.splice(0, s);
                                }
                                return r;
                            }),
                            (g.measureText = function (t, e, i, n, a) {
                                var o = e[a];
                                return o || ((o = e[a] = t.measureText(a).width), i.push(a)), n < o && (n = o), n;
                            }),
                            (g.numberOfLabelLines = function (t) {
                                var e = 1;
                                return (
                                    g.each(t, function (t) {
                                        g.isArray(t) && t.length > e && (e = t.length);
                                    }),
                                    e
                                );
                            }),
                            (g.color = n
                                ? function (t) {
                                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t);
                                }
                                : function (t) {
                                    return console.error("Color.js not found!"), t;
                                }),
                            (g.getHoverColor = function (t) {
                                return t instanceof CanvasPattern ? t : g.color(t).saturate(0.5).darken(0.1).rgbString();
                            });
                    };
                },
                { 26: 26, 3: 3, 34: 34, 46: 46 },
            ],
            29: [
                function (t, e, i) {
                    "use strict";
                    var n = t(46);
                    function s(t, e) {
                        return t.native ? { x: t.x, y: t.y } : n.getRelativePosition(t, e);
                    }
                    function l(t, e) {
                        var i, n, a, o, r;
                        for (n = 0, o = t.data.datasets.length; n < o; ++n)
                            if (t.isDatasetVisible(n))
                                for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                                    var s = i.data[a];
                                    s._view.skip || e(s);
                                }
                    }
                    function u(t, e) {
                        var i = [];
                        return (
                            l(t, function (t) {
                                t.inRange(e.x, e.y) && i.push(t);
                            }),
                            i
                        );
                    }
                    function d(t, n, a, o) {
                        var r = Number.POSITIVE_INFINITY,
                            s = [];
                        return (
                            l(t, function (t) {
                                if (!a || t.inRange(n.x, n.y)) {
                                    var e = t.getCenterPoint(),
                                        i = o(n, e);
                                    i < r ? ((s = [t]), (r = i)) : i === r && s.push(t);
                                }
                            }),
                            s
                        );
                    }
                    function c(t) {
                        var a = -1 !== t.indexOf("x"),
                            o = -1 !== t.indexOf("y");
                        return function (t, e) {
                            var i = a ? Math.abs(t.x - e.x) : 0,
                                n = o ? Math.abs(t.y - e.y) : 0;
                            return Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2));
                        };
                    }
                    function a(n, t, e) {
                        var i = s(t, n);
                        e.axis = e.axis || "x";
                        var a = c(e.axis),
                            o = e.intersect ? u(n, i) : d(n, i, !1, a),
                            r = [];
                        return o.length
                            ? (n.data.datasets.forEach(function (t, e) {
                                if (n.isDatasetVisible(e)) {
                                    var i = n.getDatasetMeta(e).data[o[0]._index];
                                    i && !i._view.skip && r.push(i);
                                }
                            }),
                                r)
                            : [];
                    }
                    e.exports = {
                        modes: {
                            single: function (t, e) {
                                var i = s(e, t),
                                    n = [];
                                return (
                                    l(t, function (t) {
                                        if (t.inRange(i.x, i.y)) return n.push(t), n;
                                    }),
                                    n.slice(0, 1)
                                );
                            },
                            label: a,
                            index: a,
                            dataset: function (t, e, i) {
                                var n = s(e, t);
                                i.axis = i.axis || "xy";
                                var a = c(i.axis),
                                    o = i.intersect ? u(t, n) : d(t, n, !1, a);
                                return 0 < o.length && (o = t.getDatasetMeta(o[0]._datasetIndex).data), o;
                            },
                            "x-axis": function (t, e) {
                                return a(t, e, { intersect: !1 });
                            },
                            point: function (t, e) {
                                return u(t, s(e, t));
                            },
                            nearest: function (t, e, i) {
                                var n = s(e, t);
                                i.axis = i.axis || "xy";
                                var a = c(i.axis),
                                    o = d(t, n, i.intersect, a);
                                return (
                                    1 < o.length &&
                                    o.sort(function (t, e) {
                                        var i = t.getArea() - e.getArea();
                                        return 0 === i && (i = t._datasetIndex - e._datasetIndex), i;
                                    }),
                                    o.slice(0, 1)
                                );
                            },
                            x: function (t, e, i) {
                                var n = s(e, t),
                                    a = [],
                                    o = !1;
                                return (
                                    l(t, function (t) {
                                        t.inXRange(n.x) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
                                    }),
                                    i.intersect && !o && (a = []),
                                    a
                                );
                            },
                            y: function (t, e, i) {
                                var n = s(e, t),
                                    a = [],
                                    o = !1;
                                return (
                                    l(t, function (t) {
                                        t.inYRange(n.y) && a.push(t), t.inRange(n.x, n.y) && (o = !0);
                                    }),
                                    i.intersect && !o && (a = []),
                                    a
                                );
                            },
                        },
                    };
                },
                { 46: 46 },
            ],
            30: [
                function (t, e, i) {
                    "use strict";
                    t(26)._set("global", {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: { onHover: null, mode: "nearest", intersect: !0, animationDuration: 400 },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
                    }),
                        (e.exports = function () {
                            var t = function (t, e) {
                                return this.construct(t, e), this;
                            };
                            return (t.Chart = t);
                        });
                },
                { 26: 26 },
            ],
            31: [
                function (t, e, i) {
                    "use strict";
                    var B = t(46);
                    function W(t, e) {
                        return B.where(t, function (t) {
                            return t.position === e;
                        });
                    }
                    function V(t, a) {
                        t.forEach(function (t, e) {
                            return (t._tmpIndex_ = e), t;
                        }),
                            t.sort(function (t, e) {
                                var i = a ? e : t,
                                    n = a ? t : e;
                                return i.weight === n.weight ? i._tmpIndex_ - n._tmpIndex_ : i.weight - n.weight;
                            }),
                            t.forEach(function (t) {
                                delete t._tmpIndex_;
                            });
                    }
                    e.exports = {
                        defaults: {},
                        addBox: function (t, e) {
                            t.boxes || (t.boxes = []), (e.fullWidth = e.fullWidth || !1), (e.position = e.position || "top"), (e.weight = e.weight || 0), t.boxes.push(e);
                        },
                        removeBox: function (t, e) {
                            var i = t.boxes ? t.boxes.indexOf(e) : -1;
                            -1 !== i && t.boxes.splice(i, 1);
                        },
                        configure: function (t, e, i) {
                            for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) (n = a[r]), i.hasOwnProperty(n) && (e[n] = i[n]);
                        },
                        update: function (e, i, t) {
                            if (e) {
                                var n = e.options.layout || {},
                                    a = B.options.toPadding(n.padding),
                                    o = a.left,
                                    r = a.right,
                                    s = a.top,
                                    l = a.bottom,
                                    u = W(e.boxes, "left"),
                                    d = W(e.boxes, "right"),
                                    c = W(e.boxes, "top"),
                                    h = W(e.boxes, "bottom"),
                                    f = W(e.boxes, "chartArea");
                                V(u, !0), V(d, !1), V(c, !0), V(h, !1);
                                var g = i - o - r,
                                    p = t - s - l,
                                    m = p / 2,
                                    v = (i - g / 2) / (u.length + d.length),
                                    b = (t - m) / (c.length + h.length),
                                    x = g,
                                    y = p,
                                    k = [];
                                B.each(u.concat(d, c, h), function (t) {
                                    var e,
                                        i = t.isHorizontal();
                                    i ? ((e = t.update(t.fullWidth ? g : x, b)), (y -= e.height)) : ((e = t.update(v, y)), (x -= e.width)), k.push({ horizontal: i, minSize: e, box: t });
                                });
                                var M = 0,
                                    w = 0,
                                    C = 0,
                                    S = 0;
                                B.each(c.concat(h), function (t) {
                                    if (t.getPadding) {
                                        var e = t.getPadding();
                                        (M = Math.max(M, e.left)), (w = Math.max(w, e.right));
                                    }
                                }),
                                    B.each(u.concat(d), function (t) {
                                        if (t.getPadding) {
                                            var e = t.getPadding();
                                            (C = Math.max(C, e.top)), (S = Math.max(S, e.bottom));
                                        }
                                    });
                                var _ = o,
                                    D = r,
                                    P = s,
                                    I = l;
                                B.each(u.concat(d), z),
                                    B.each(u, function (t) {
                                        _ += t.width;
                                    }),
                                    B.each(d, function (t) {
                                        D += t.width;
                                    }),
                                    B.each(c.concat(h), z),
                                    B.each(c, function (t) {
                                        P += t.height;
                                    }),
                                    B.each(h, function (t) {
                                        I += t.height;
                                    }),
                                    B.each(u.concat(d), function (e) {
                                        var t = B.findNextWhere(k, function (t) {
                                            return t.box === e;
                                        }),
                                            i = { left: 0, right: 0, top: P, bottom: I };
                                        t && e.update(t.minSize.width, y, i);
                                    }),
                                    (_ = o),
                                    (D = r),
                                    (P = s),
                                    (I = l),
                                    B.each(u, function (t) {
                                        _ += t.width;
                                    }),
                                    B.each(d, function (t) {
                                        D += t.width;
                                    }),
                                    B.each(c, function (t) {
                                        P += t.height;
                                    }),
                                    B.each(h, function (t) {
                                        I += t.height;
                                    });
                                var A = Math.max(M - _, 0);
                                (_ += A), (D += Math.max(w - D, 0));
                                var T = Math.max(C - P, 0);
                                (P += T), (I += Math.max(S - I, 0));
                                var F = t - P - I,
                                    O = i - _ - D;
                                (O === x && F === y) ||
                                    (B.each(u, function (t) {
                                        t.height = F;
                                    }),
                                        B.each(d, function (t) {
                                            t.height = F;
                                        }),
                                        B.each(c, function (t) {
                                            t.fullWidth || (t.width = O);
                                        }),
                                        B.each(h, function (t) {
                                            t.fullWidth || (t.width = O);
                                        }),
                                        (y = F),
                                        (x = O));
                                var R = o + A,
                                    L = s + T;
                                B.each(u.concat(c), N),
                                    (R += x),
                                    (L += y),
                                    B.each(d, N),
                                    B.each(h, N),
                                    (e.chartArea = { left: _, top: P, right: _ + x, bottom: P + y }),
                                    B.each(f, function (t) {
                                        (t.left = e.chartArea.left), (t.top = e.chartArea.top), (t.right = e.chartArea.right), (t.bottom = e.chartArea.bottom), t.update(x, y);
                                    });
                            }
                            function z(e) {
                                var t = B.findNextWhere(k, function (t) {
                                    return t.box === e;
                                });
                                if (t)
                                    if (e.isHorizontal()) {
                                        var i = { left: Math.max(_, M), right: Math.max(D, w), top: 0, bottom: 0 };
                                        e.update(e.fullWidth ? g : x, p / 2, i);
                                    } else e.update(t.minSize.width, y);
                            }
                            function N(t) {
                                t.isHorizontal()
                                    ? ((t.left = t.fullWidth ? o : _), (t.right = t.fullWidth ? i - r : _ + x), (t.top = L), (t.bottom = L + t.height), (L = t.bottom))
                                    : ((t.left = R), (t.right = R + t.width), (t.top = P), (t.bottom = P + y), (R = t.right));
                            }
                        },
                    };
                },
                { 46: 46 },
            ],
            32: [
                function (t, e, i) {
                    "use strict";
                    var r = t(26),
                        s = t(46);
                    r._set("global", { plugins: {} }),
                        (e.exports = {
                            _plugins: [],
                            _cacheId: 0,
                            register: function (t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function (t) {
                                    -1 === e.indexOf(t) && e.push(t);
                                }),
                                    this._cacheId++;
                            },
                            unregister: function (t) {
                                var i = this._plugins;
                                [].concat(t).forEach(function (t) {
                                    var e = i.indexOf(t);
                                    -1 !== e && i.splice(e, 1);
                                }),
                                    this._cacheId++;
                            },
                            clear: function () {
                                (this._plugins = []), this._cacheId++;
                            },
                            count: function () {
                                return this._plugins.length;
                            },
                            getAll: function () {
                                return this._plugins;
                            },
                            notify: function (t, e, i) {
                                var n,
                                    a,
                                    o,
                                    r,
                                    s,
                                    l = this.descriptors(t),
                                    u = l.length;
                                for (n = 0; n < u; ++n) if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                                return !0;
                            },
                            descriptors: function (t) {
                                var e = t.$plugins || (t.$plugins = {});
                                if (e.id === this._cacheId) return e.descriptors;
                                var n = [],
                                    a = [],
                                    i = (t && t.config) || {},
                                    o = (i.options && i.options.plugins) || {};
                                return (
                                    this._plugins.concat(i.plugins || []).forEach(function (t) {
                                        if (-1 === n.indexOf(t)) {
                                            var e = t.id,
                                                i = o[e];
                                            !1 !== i && (!0 === i && (i = s.clone(r.global.plugins[e])), n.push(t), a.push({ plugin: t, options: i || {} }));
                                        }
                                    }),
                                    (e.descriptors = a),
                                    (e.id = this._cacheId),
                                    a
                                );
                            },
                            _invalidate: function (t) {
                                delete t.$plugins;
                            },
                        });
                },
                { 26: 26, 46: 46 },
            ],
            33: [
                function (t, e, i) {
                    "use strict";
                    var y = t(26),
                        n = t(27),
                        H = t(46),
                        a = t(35);
                    function k(t) {
                        var e,
                            i,
                            n = [];
                        for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                        return n;
                    }
                    function j(t, e, i) {
                        var n = t.getPixelForTick(e);
                        return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n;
                    }
                    function M(t, e, i) {
                        return H.isArray(e) ? H.longestText(t, i, e) : t.measureText(e).width;
                    }
                    function w(t) {
                        var e = H.valueOrDefault,
                            i = y.global,
                            n = e(t.fontSize, i.defaultFontSize),
                            a = e(t.fontStyle, i.defaultFontStyle),
                            o = e(t.fontFamily, i.defaultFontFamily);
                        return { size: n, style: a, family: o, font: H.fontString(n, a, o) };
                    }
                    function C(t) {
                        return H.options.toLineHeight(H.valueOrDefault(t.lineHeight, 1.2), H.valueOrDefault(t.fontSize, y.global.defaultFontSize));
                    }
                    y._set("scale", {
                        display: !0,
                        position: "left",
                        offset: !1,
                        gridLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1,
                            drawBorder: !0,
                            drawOnChartArea: !0,
                            drawTicks: !0,
                            tickMarkLength: 10,
                            zeroLineWidth: 1,
                            zeroLineColor: "rgba(0,0,0,0.25)",
                            zeroLineBorderDash: [],
                            zeroLineBorderDashOffset: 0,
                            offsetGridLines: !1,
                            borderDash: [],
                            borderDashOffset: 0,
                        },
                        scaleLabel: { display: !1, labelString: "", lineHeight: 1.2, padding: { top: 4, bottom: 4 } },
                        ticks: { beginAtZero: !1, minRotation: 0, maxRotation: 50, mirror: !1, padding: 0, reverse: !1, display: !0, autoSkip: !0, autoSkipPadding: 0, labelOffset: 0, callback: a.formatters.values, minor: {}, major: {} },
                    }),
                        (e.exports = n.extend({
                            getPadding: function () {
                                return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 };
                            },
                            getTicks: function () {
                                return this._ticks;
                            },
                            mergeTicksOptions: function () {
                                var t = this.options.ticks;
                                for (var e in (!1 === t.minor && (t.minor = { display: !1 }), !1 === t.major && (t.major = { display: !1 }), t))
                                    "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
                            },
                            beforeUpdate: function () {
                                H.callback(this.options.beforeUpdate, [this]);
                            },
                            update: function (t, e, i) {
                                var n,
                                    a,
                                    o,
                                    r,
                                    s,
                                    l,
                                    u = this;
                                for (
                                    u.beforeUpdate(),
                                    u.maxWidth = t,
                                    u.maxHeight = e,
                                    u.margins = H.extend({ left: 0, right: 0, top: 0, bottom: 0 }, i),
                                    u.longestTextCache = u.longestTextCache || {},
                                    u.beforeSetDimensions(),
                                    u.setDimensions(),
                                    u.afterSetDimensions(),
                                    u.beforeDataLimits(),
                                    u.determineDataLimits(),
                                    u.afterDataLimits(),
                                    u.beforeBuildTicks(),
                                    s = u.buildTicks() || [],
                                    u.afterBuildTicks(),
                                    u.beforeTickToLabelConversion(),
                                    o = u.convertTicksToLabels(s) || u.ticks,
                                    u.afterTickToLabelConversion(),
                                    n = 0,
                                    a = (u.ticks = o).length;
                                    n < a;
                                    ++n
                                )
                                    (r = o[n]), (l = s[n]) ? (l.label = r) : s.push((l = { label: r, major: !1 }));
                                return (u._ticks = s), u.beforeCalculateTickRotation(), u.calculateTickRotation(), u.afterCalculateTickRotation(), u.beforeFit(), u.fit(), u.afterFit(), u.afterUpdate(), u.minSize;
                            },
                            afterUpdate: function () {
                                H.callback(this.options.afterUpdate, [this]);
                            },
                            beforeSetDimensions: function () {
                                H.callback(this.options.beforeSetDimensions, [this]);
                            },
                            setDimensions: function () {
                                var t = this;
                                t.isHorizontal() ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                                    (t.paddingLeft = 0),
                                    (t.paddingTop = 0),
                                    (t.paddingRight = 0),
                                    (t.paddingBottom = 0);
                            },
                            afterSetDimensions: function () {
                                H.callback(this.options.afterSetDimensions, [this]);
                            },
                            beforeDataLimits: function () {
                                H.callback(this.options.beforeDataLimits, [this]);
                            },
                            determineDataLimits: H.noop,
                            afterDataLimits: function () {
                                H.callback(this.options.afterDataLimits, [this]);
                            },
                            beforeBuildTicks: function () {
                                H.callback(this.options.beforeBuildTicks, [this]);
                            },
                            buildTicks: H.noop,
                            afterBuildTicks: function () {
                                H.callback(this.options.afterBuildTicks, [this]);
                            },
                            beforeTickToLabelConversion: function () {
                                H.callback(this.options.beforeTickToLabelConversion, [this]);
                            },
                            convertTicksToLabels: function () {
                                var t = this.options.ticks;
                                this.ticks = this.ticks.map(t.userCallback || t.callback, this);
                            },
                            afterTickToLabelConversion: function () {
                                H.callback(this.options.afterTickToLabelConversion, [this]);
                            },
                            beforeCalculateTickRotation: function () {
                                H.callback(this.options.beforeCalculateTickRotation, [this]);
                            },
                            calculateTickRotation: function () {
                                var t = this,
                                    e = t.ctx,
                                    i = t.options.ticks,
                                    n = k(t._ticks),
                                    a = w(i);
                                e.font = a.font;
                                var o = i.minRotation || 0;
                                if (n.length && t.options.display && t.isHorizontal())
                                    for (var r, s = H.longestText(e, a.font, n, t.longestTextCache), l = s, u = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; u < l && o < i.maxRotation;) {
                                        var d = H.toRadians(o);
                                        if (((r = Math.cos(d)), Math.sin(d) * s > t.maxHeight)) {
                                            o--;
                                            break;
                                        }
                                        o++, (l = r * s);
                                    }
                                t.labelRotation = o;
                            },
                            afterCalculateTickRotation: function () {
                                H.callback(this.options.afterCalculateTickRotation, [this]);
                            },
                            beforeFit: function () {
                                H.callback(this.options.beforeFit, [this]);
                            },
                            fit: function () {
                                var t = this,
                                    e = (t.minSize = { width: 0, height: 0 }),
                                    i = k(t._ticks),
                                    n = t.options,
                                    a = n.ticks,
                                    o = n.scaleLabel,
                                    r = n.gridLines,
                                    s = n.display,
                                    l = t.isHorizontal(),
                                    u = w(a),
                                    d = n.gridLines.tickMarkLength;
                                if (((e.width = l ? (t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth) : s && r.drawTicks ? d : 0), (e.height = l ? (s && r.drawTicks ? d : 0) : t.maxHeight), o.display && s)) {
                                    var c = C(o) + H.options.toPadding(o.padding).height;
                                    l ? (e.height += c) : (e.width += c);
                                }
                                if (a.display && s) {
                                    var h = H.longestText(t.ctx, u.font, i, t.longestTextCache),
                                        f = H.numberOfLabelLines(i),
                                        g = 0.5 * u.size,
                                        p = t.options.ticks.padding;
                                    if (l) {
                                        t.longestLabelWidth = h;
                                        var m = H.toRadians(t.labelRotation),
                                            v = Math.cos(m),
                                            b = Math.sin(m) * h + u.size * f + g * (f - 1) + g;
                                        (e.height = Math.min(t.maxHeight, e.height + b + p)), (t.ctx.font = u.font);
                                        var x = M(t.ctx, i[0], u.font),
                                            y = M(t.ctx, i[i.length - 1], u.font);
                                        0 !== t.labelRotation
                                            ? ((t.paddingLeft = "bottom" === n.position ? v * x + 3 : v * g + 3), (t.paddingRight = "bottom" === n.position ? v * g + 3 : v * y + 3))
                                            : ((t.paddingLeft = x / 2 + 3), (t.paddingRight = y / 2 + 3));
                                    } else a.mirror ? (h = 0) : (h += p + g), (e.width = Math.min(t.maxWidth, e.width + h)), (t.paddingTop = u.size / 2), (t.paddingBottom = u.size / 2);
                                }
                                t.handleMargins(), (t.width = e.width), (t.height = e.height);
                            },
                            handleMargins: function () {
                                var t = this;
                                t.margins &&
                                    ((t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0)),
                                        (t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0)),
                                        (t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0)),
                                        (t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0)));
                            },
                            afterFit: function () {
                                H.callback(this.options.afterFit, [this]);
                            },
                            isHorizontal: function () {
                                return "top" === this.options.position || "bottom" === this.options.position;
                            },
                            isFullWidth: function () {
                                return this.options.fullWidth;
                            },
                            getRightValue: function (t) {
                                if (H.isNullOrUndef(t)) return NaN;
                                if ("number" == typeof t && !isFinite(t)) return NaN;
                                if (t)
                                    if (this.isHorizontal()) {
                                        if (void 0 !== t.x) return this.getRightValue(t.x);
                                    } else if (void 0 !== t.y) return this.getRightValue(t.y);
                                return t;
                            },
                            getLabelForIndex: H.noop,
                            getPixelForValue: H.noop,
                            getValueForPixel: H.noop,
                            getPixelForTick: function (t) {
                                var e = this,
                                    i = e.options.offset;
                                if (e.isHorizontal()) {
                                    var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                        a = n * t + e.paddingLeft;
                                    i && (a += n / 2);
                                    var o = e.left + Math.round(a);
                                    return (o += e.isFullWidth() ? e.margins.left : 0);
                                }
                                var r = e.height - (e.paddingTop + e.paddingBottom);
                                return e.top + t * (r / (e._ticks.length - 1));
                            },
                            getPixelForDecimal: function (t) {
                                var e = this;
                                if (e.isHorizontal()) {
                                    var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                        n = e.left + Math.round(i);
                                    return (n += e.isFullWidth() ? e.margins.left : 0);
                                }
                                return e.top + t * e.height;
                            },
                            getBasePixel: function () {
                                return this.getPixelForValue(this.getBaseValue());
                            },
                            getBaseValue: function () {
                                var t = this.min,
                                    e = this.max;
                                return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0;
                            },
                            _autoSkip: function (t) {
                                var e,
                                    i,
                                    n,
                                    a,
                                    o = this,
                                    r = o.isHorizontal(),
                                    s = o.options.ticks.minor,
                                    l = t.length,
                                    u = H.toRadians(o.labelRotation),
                                    d = Math.cos(u),
                                    c = o.longestLabelWidth * d,
                                    h = [];
                                for (
                                    s.maxTicksLimit && (a = s.maxTicksLimit),
                                    r &&
                                    ((e = !1),
                                        (c + s.autoSkipPadding) * l > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor(((c + s.autoSkipPadding) * l) / (o.width - (o.paddingLeft + o.paddingRight)))),
                                        a && a < l && (e = Math.max(e, Math.floor(l / a)))),
                                    i = 0;
                                    i < l;
                                    i++
                                )
                                    (n = t[i]), ((1 < e && 0 < i % e) || (i % e == 0 && l <= i + e)) && i !== l - 1 && delete n.label, h.push(n);
                                return h;
                            },
                            draw: function (S) {
                                var _ = this,
                                    D = _.options;
                                if (D.display) {
                                    var r = _.ctx,
                                        P = y.global,
                                        I = D.ticks.minor,
                                        t = D.ticks.major || I,
                                        A = D.gridLines,
                                        e = D.scaleLabel,
                                        T = 0 !== _.labelRotation,
                                        F = _.isHorizontal(),
                                        O = I.autoSkip ? _._autoSkip(_.getTicks()) : _.getTicks(),
                                        s = H.valueOrDefault(I.fontColor, P.defaultFontColor),
                                        l = w(I),
                                        u = H.valueOrDefault(t.fontColor, P.defaultFontColor),
                                        d = w(t),
                                        R = A.drawTicks ? A.tickMarkLength : 0,
                                        i = H.valueOrDefault(e.fontColor, P.defaultFontColor),
                                        n = w(e),
                                        a = H.options.toPadding(e.padding),
                                        L = H.toRadians(_.labelRotation),
                                        z = [],
                                        N = _.options.gridLines.lineWidth,
                                        B = "right" === D.position ? _.left : _.right - N - R,
                                        W = "right" === D.position ? _.left + R : _.right,
                                        V = "bottom" === D.position ? _.top + N : _.bottom - R - N,
                                        E = "bottom" === D.position ? _.top + N + R : _.bottom + N;
                                    if (
                                        (H.each(O, function (t, e) {
                                            if (!H.isNullOrUndef(t.label)) {
                                                var i,
                                                    n,
                                                    a,
                                                    o,
                                                    r,
                                                    s,
                                                    l,
                                                    u,
                                                    d,
                                                    c,
                                                    h,
                                                    f,
                                                    g,
                                                    p,
                                                    m = t.label;
                                                o =
                                                    e === _.zeroLineIndex && D.offset === A.offsetGridLines
                                                        ? ((i = A.zeroLineWidth), (n = A.zeroLineColor), (a = A.zeroLineBorderDash), A.zeroLineBorderDashOffset)
                                                        : ((i = H.valueAtIndexOrDefault(A.lineWidth, e)),
                                                            (n = H.valueAtIndexOrDefault(A.color, e)),
                                                            (a = H.valueOrDefault(A.borderDash, P.borderDash)),
                                                            H.valueOrDefault(A.borderDashOffset, P.borderDashOffset));
                                                var v = "middle",
                                                    b = "middle",
                                                    x = I.padding;
                                                if (F) {
                                                    var y = R + x;
                                                    p = "bottom" === D.position ? ((b = T ? "middle" : "top"), (v = T ? "right" : "center"), _.top + y) : ((b = T ? "middle" : "bottom"), (v = T ? "left" : "center"), _.bottom - y);
                                                    var k = j(_, e, A.offsetGridLines && 1 < O.length);
                                                    k < _.left && (n = "rgba(0,0,0,0)"), (k += H.aliasPixel(i)), (g = _.getPixelForTick(e) + I.labelOffset), (r = l = d = h = k), (s = V), (u = E), (c = S.top), (f = S.bottom + N);
                                                } else {
                                                    var M,
                                                        w = "left" === D.position;
                                                    (M = I.mirror ? ((v = w ? "left" : "right"), x) : ((v = w ? "right" : "left"), R + x)), (g = w ? _.right - M : _.left + M);
                                                    var C = j(_, e, A.offsetGridLines && 1 < O.length);
                                                    C < _.top && (n = "rgba(0,0,0,0)"), (C += H.aliasPixel(i)), (p = _.getPixelForTick(e) + I.labelOffset), (r = B), (l = W), (d = S.left), (h = S.right + N), (s = u = c = f = C);
                                                }
                                                z.push({
                                                    tx1: r,
                                                    ty1: s,
                                                    tx2: l,
                                                    ty2: u,
                                                    x1: d,
                                                    y1: c,
                                                    x2: h,
                                                    y2: f,
                                                    labelX: g,
                                                    labelY: p,
                                                    glWidth: i,
                                                    glColor: n,
                                                    glBorderDash: a,
                                                    glBorderDashOffset: o,
                                                    rotation: -1 * L,
                                                    label: m,
                                                    major: t.major,
                                                    textBaseline: b,
                                                    textAlign: v,
                                                });
                                            }
                                        }),
                                            H.each(z, function (t) {
                                                if (
                                                    (A.display &&
                                                        (r.save(),
                                                            (r.lineWidth = t.glWidth),
                                                            (r.strokeStyle = t.glColor),
                                                            r.setLineDash && (r.setLineDash(t.glBorderDash), (r.lineDashOffset = t.glBorderDashOffset)),
                                                            r.beginPath(),
                                                            A.drawTicks && (r.moveTo(t.tx1, t.ty1), r.lineTo(t.tx2, t.ty2)),
                                                            A.drawOnChartArea && (r.moveTo(t.x1, t.y1), r.lineTo(t.x2, t.y2)),
                                                            r.stroke(),
                                                            r.restore()),
                                                        I.display)
                                                ) {
                                                    r.save(),
                                                        r.translate(t.labelX, t.labelY),
                                                        r.rotate(t.rotation),
                                                        (r.font = t.major ? d.font : l.font),
                                                        (r.fillStyle = t.major ? u : s),
                                                        (r.textBaseline = t.textBaseline),
                                                        (r.textAlign = t.textAlign);
                                                    var e = t.label;
                                                    if (H.isArray(e)) for (var i = e.length, n = 1.5 * l.size, a = _.isHorizontal() ? 0 : (-n * (i - 1)) / 2, o = 0; o < i; ++o) r.fillText("" + e[o], 0, a), (a += n);
                                                    else r.fillText(e, 0, 0);
                                                    r.restore();
                                                }
                                            }),
                                            e.display)
                                    ) {
                                        var o,
                                            c,
                                            h = 0,
                                            f = C(e) / 2;
                                        if (F) (o = _.left + (_.right - _.left) / 2), (c = "bottom" === D.position ? _.bottom - f - a.bottom : _.top + f + a.top);
                                        else {
                                            var g = "left" === D.position;
                                            (o = g ? _.left + f + a.top : _.right - f - a.top), (c = _.top + (_.bottom - _.top) / 2), (h = g ? -0.5 * Math.PI : 0.5 * Math.PI);
                                        }
                                        r.save(), r.translate(o, c), r.rotate(h), (r.textAlign = "center"), (r.textBaseline = "middle"), (r.fillStyle = i), (r.font = n.font), r.fillText(e.labelString, 0, 0), r.restore();
                                    }
                                    if (A.drawBorder) {
                                        (r.lineWidth = H.valueAtIndexOrDefault(A.lineWidth, 0)), (r.strokeStyle = H.valueAtIndexOrDefault(A.color, 0));
                                        var p = _.left,
                                            m = _.right + N,
                                            v = _.top,
                                            b = _.bottom + N,
                                            x = H.aliasPixel(r.lineWidth);
                                        F ? ((v = b = "top" === D.position ? _.bottom : _.top), (v += x), (b += x)) : ((p = m = "left" === D.position ? _.right : _.left), (p += x), (m += x)),
                                            r.beginPath(),
                                            r.moveTo(p, v),
                                            r.lineTo(m, b),
                                            r.stroke();
                                    }
                                }
                            },
                        }));
                },
                { 26: 26, 27: 27, 35: 35, 46: 46 },
            ],
            34: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(46),
                        o = t(31);
                    e.exports = {
                        constructors: {},
                        defaults: {},
                        registerScaleType: function (t, e, i) {
                            (this.constructors[t] = e), (this.defaults[t] = a.clone(i));
                        },
                        getScaleConstructor: function (t) {
                            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
                        },
                        getScaleDefaults: function (t) {
                            return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {};
                        },
                        updateScaleDefaults: function (t, e) {
                            this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e));
                        },
                        addScalesToLayout: function (e) {
                            a.each(e.scales, function (t) {
                                (t.fullWidth = t.options.fullWidth), (t.position = t.options.position), (t.weight = t.options.weight), o.addBox(e, t);
                            });
                        },
                    };
                },
                { 26: 26, 31: 31, 46: 46 },
            ],
            35: [
                function (t, e, i) {
                    "use strict";
                    var l = t(46);
                    e.exports = {
                        formatters: {
                            values: function (t) {
                                return l.isArray(t) ? t : "" + t;
                            },
                            linear: function (t, e, i) {
                                var n = 3 < i.length ? i[2] - i[1] : i[1] - i[0];
                                1 < Math.abs(n) && t !== Math.floor(t) && (n = t - Math.floor(t));
                                var a = l.log10(Math.abs(n)),
                                    o = "";
                                if (0 !== t)
                                    if (Math.max(Math.abs(i[0]), Math.abs(i[i.length - 1])) < 1e-4) {
                                        var r = l.log10(Math.abs(t));
                                        o = t.toExponential(Math.floor(r) - Math.floor(a));
                                    } else {
                                        var s = -1 * Math.floor(a);
                                        (s = Math.max(Math.min(s, 20), 0)), (o = t.toFixed(s));
                                    }
                                else o = "0";
                                return o;
                            },
                            logarithmic: function (t, e, i) {
                                var n = t / Math.pow(10, Math.floor(l.log10(t)));
                                return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === e || e === i.length - 1 ? t.toExponential() : "";
                            },
                        },
                    };
                },
                { 46: 46 },
            ],
            36: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(27),
                        R = t(46);
                    n._set("global", {
                        tooltips: {
                            enabled: !0,
                            custom: null,
                            mode: "nearest",
                            position: "average",
                            intersect: !0,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            titleFontStyle: "bold",
                            titleSpacing: 2,
                            titleMarginBottom: 6,
                            titleFontColor: "#fff",
                            titleAlign: "left",
                            bodySpacing: 2,
                            bodyFontColor: "#fff",
                            bodyAlign: "left",
                            footerFontStyle: "bold",
                            footerSpacing: 2,
                            footerMarginTop: 6,
                            footerFontColor: "#fff",
                            footerAlign: "left",
                            yPadding: 6,
                            xPadding: 6,
                            caretPadding: 2,
                            caretSize: 5,
                            cornerRadius: 6,
                            multiKeyBackground: "#fff",
                            displayColors: !0,
                            borderColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            callbacks: {
                                beforeTitle: R.noop,
                                title: function (t, e) {
                                    var i = "",
                                        n = e.labels,
                                        a = n ? n.length : 0;
                                    if (0 < t.length) {
                                        var o = t[0];
                                        o.xLabel ? (i = o.xLabel) : 0 < a && o.index < a && (i = n[o.index]);
                                    }
                                    return i;
                                },
                                afterTitle: R.noop,
                                beforeBody: R.noop,
                                beforeLabel: R.noop,
                                label: function (t, e) {
                                    var i = e.datasets[t.datasetIndex].label || "";
                                    return i && (i += ": "), (i += t.yLabel);
                                },
                                labelColor: function (t, e) {
                                    var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                                    return { borderColor: i.borderColor, backgroundColor: i.backgroundColor };
                                },
                                labelTextColor: function () {
                                    return this._options.bodyFontColor;
                                },
                                afterLabel: R.noop,
                                afterBody: R.noop,
                                beforeFooter: R.noop,
                                footer: R.noop,
                                afterFooter: R.noop,
                            },
                        },
                    });
                    var L = {
                        average: function (t) {
                            if (!t.length) return !1;
                            var e,
                                i,
                                n = 0,
                                a = 0,
                                o = 0;
                            for (e = 0, i = t.length; e < i; ++e) {
                                var r = t[e];
                                if (r && r.hasValue()) {
                                    var s = r.tooltipPosition();
                                    (n += s.x), (a += s.y), ++o;
                                }
                            }
                            return { x: Math.round(n / o), y: Math.round(a / o) };
                        },
                        nearest: function (t, e) {
                            var i,
                                n,
                                a,
                                o = e.x,
                                r = e.y,
                                s = Number.POSITIVE_INFINITY;
                            for (i = 0, n = t.length; i < n; ++i) {
                                var l = t[i];
                                if (l && l.hasValue()) {
                                    var u = l.getCenterPoint(),
                                        d = R.distanceBetweenPoints(e, u);
                                    d < s && ((s = d), (a = l));
                                }
                            }
                            if (a) {
                                var c = a.tooltipPosition();
                                (o = c.x), (r = c.y);
                            }
                            return { x: o, y: r };
                        },
                    };
                    function h(t, e) {
                        var i = R.color(t);
                        return i.alpha(e * i.alpha()).rgbaString();
                    }
                    function r(t, e) {
                        return e && (R.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
                    }
                    function s(t) {
                        return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t;
                    }
                    function z(t) {
                        var e = n.global,
                            i = R.valueOrDefault;
                        return {
                            xPadding: t.xPadding,
                            yPadding: t.yPadding,
                            xAlign: t.xAlign,
                            yAlign: t.yAlign,
                            bodyFontColor: t.bodyFontColor,
                            _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                            _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                            _bodyAlign: t.bodyAlign,
                            bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                            bodySpacing: t.bodySpacing,
                            titleFontColor: t.titleFontColor,
                            _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                            _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                            titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                            _titleAlign: t.titleAlign,
                            titleSpacing: t.titleSpacing,
                            titleMarginBottom: t.titleMarginBottom,
                            footerFontColor: t.footerFontColor,
                            _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                            _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                            footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                            _footerAlign: t.footerAlign,
                            footerSpacing: t.footerSpacing,
                            footerMarginTop: t.footerMarginTop,
                            caretSize: t.caretSize,
                            cornerRadius: t.cornerRadius,
                            backgroundColor: t.backgroundColor,
                            opacity: 0,
                            legendColorBackground: t.multiKeyBackground,
                            displayColors: t.displayColors,
                            borderColor: t.borderColor,
                            borderWidth: t.borderWidth,
                        };
                    }
                    function o(t) {
                        return r([], s(t));
                    }
                    (e.exports = a.extend({
                        initialize: function () {
                            (this._model = z(this._options)), (this._lastActive = []);
                        },
                        getTitle: function () {
                            var t = this._options.callbacks,
                                e = t.beforeTitle.apply(this, arguments),
                                i = t.title.apply(this, arguments),
                                n = t.afterTitle.apply(this, arguments),
                                a = [];
                            return (a = r((a = r((a = r(a, s(e))), s(i))), s(n)));
                        },
                        getBeforeBody: function () {
                            return o(this._options.callbacks.beforeBody.apply(this, arguments));
                        },
                        getBody: function (t, i) {
                            var n = this,
                                a = n._options.callbacks,
                                o = [];
                            return (
                                R.each(t, function (t) {
                                    var e = { before: [], lines: [], after: [] };
                                    r(e.before, s(a.beforeLabel.call(n, t, i))), r(e.lines, a.label.call(n, t, i)), r(e.after, s(a.afterLabel.call(n, t, i))), o.push(e);
                                }),
                                o
                            );
                        },
                        getAfterBody: function () {
                            return o(this._options.callbacks.afterBody.apply(this, arguments));
                        },
                        getFooter: function () {
                            var t = this._options.callbacks,
                                e = t.beforeFooter.apply(this, arguments),
                                i = t.footer.apply(this, arguments),
                                n = t.afterFooter.apply(this, arguments),
                                a = [];
                            return (a = r((a = r((a = r(a, s(e))), s(i))), s(n)));
                        },
                        update: function (t) {
                            var e,
                                i,
                                n,
                                a,
                                o,
                                r,
                                s,
                                l,
                                u,
                                d,
                                c,
                                h,
                                f,
                                g,
                                p,
                                m,
                                v,
                                b,
                                x,
                                y,
                                k = this,
                                M = k._options,
                                w = k._model,
                                C = (k._model = z(M)),
                                S = k._active,
                                _ = k._data,
                                D = { xAlign: w.xAlign, yAlign: w.yAlign },
                                P = { x: w.x, y: w.y },
                                I = { width: w.width, height: w.height },
                                A = { x: w.caretX, y: w.caretY };
                            if (S.length) {
                                C.opacity = 1;
                                var T = [],
                                    F = [];
                                A = L[M.position].call(k, S, k._eventPosition);
                                var O = [];
                                for (e = 0, i = S.length; e < i; ++e)
                                    O.push(
                                        ((m = S[e]),
                                            (b = v = void 0),
                                            (v = m._xScale),
                                            (b = m._yScale || m._scale),
                                            (x = m._index),
                                            (y = m._datasetIndex),
                                            { xLabel: v ? v.getLabelForIndex(x, y) : "", yLabel: b ? b.getLabelForIndex(x, y) : "", index: x, datasetIndex: y, x: m._model.x, y: m._model.y })
                                    );
                                M.filter &&
                                    (O = O.filter(function (t) {
                                        return M.filter(t, _);
                                    })),
                                    M.itemSort &&
                                    (O = O.sort(function (t, e) {
                                        return M.itemSort(t, e, _);
                                    })),
                                    R.each(O, function (t) {
                                        T.push(M.callbacks.labelColor.call(k, t, k._chart)), F.push(M.callbacks.labelTextColor.call(k, t, k._chart));
                                    }),
                                    (C.title = k.getTitle(O, _)),
                                    (C.beforeBody = k.getBeforeBody(O, _)),
                                    (C.body = k.getBody(O, _)),
                                    (C.afterBody = k.getAfterBody(O, _)),
                                    (C.footer = k.getFooter(O, _)),
                                    (C.x = Math.round(A.x)),
                                    (C.y = Math.round(A.y)),
                                    (C.caretPadding = M.caretPadding),
                                    (C.labelColors = T),
                                    (C.labelTextColors = F),
                                    (C.dataPoints = O),
                                    (D = (function (t, e) {
                                        var i,
                                            n,
                                            a,
                                            o,
                                            r,
                                            s = t._model,
                                            l = t._chart,
                                            u = t._chart.chartArea,
                                            d = "center",
                                            c = "center";
                                        s.y < e.height ? (c = "top") : s.y > l.height - e.height && (c = "bottom");
                                        var h = (u.left + u.right) / 2,
                                            f = (u.top + u.bottom) / 2;
                                        (n =
                                            "center" === c
                                                ? ((i = function (t) {
                                                    return t <= h;
                                                }),
                                                    function (t) {
                                                        return h < t;
                                                    })
                                                : ((i = function (t) {
                                                    return t <= e.width / 2;
                                                }),
                                                    function (t) {
                                                        return t >= l.width - e.width / 2;
                                                    })),
                                            (a = function (t) {
                                                return t + e.width + s.caretSize + s.caretPadding > l.width;
                                            }),
                                            (o = function (t) {
                                                return t - e.width - s.caretSize - s.caretPadding < 0;
                                            }),
                                            (r = function (t) {
                                                return t <= f ? "top" : "bottom";
                                            }),
                                            i(s.x) ? ((d = "left"), a(s.x) && ((d = "center"), (c = r(s.y)))) : n(s.x) && ((d = "right"), o(s.x) && ((d = "center"), (c = r(s.y))));
                                        var g = t._options;
                                        return { xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : c };
                                    })(
                                        this,
                                        (I = (function (t, e) {
                                            var i = t._chart.ctx,
                                                n = 2 * e.yPadding,
                                                a = 0,
                                                o = e.body,
                                                r = o.reduce(function (t, e) {
                                                    return t + e.before.length + e.lines.length + e.after.length;
                                                }, 0);
                                            r += e.beforeBody.length + e.afterBody.length;
                                            var s = e.title.length,
                                                l = e.footer.length,
                                                u = e.titleFontSize,
                                                d = e.bodyFontSize,
                                                c = e.footerFontSize;
                                            (n += s * u),
                                                (n += s ? (s - 1) * e.titleSpacing : 0),
                                                (n += s ? e.titleMarginBottom : 0),
                                                (n += r * d),
                                                (n += r ? (r - 1) * e.bodySpacing : 0),
                                                (n += l ? e.footerMarginTop : 0),
                                                (n += l * c),
                                                (n += l ? (l - 1) * e.footerSpacing : 0);
                                            var h = 0,
                                                f = function (t) {
                                                    a = Math.max(a, i.measureText(t).width + h);
                                                };
                                            return (
                                                (i.font = R.fontString(u, e._titleFontStyle, e._titleFontFamily)),
                                                R.each(e.title, f),
                                                (i.font = R.fontString(d, e._bodyFontStyle, e._bodyFontFamily)),
                                                R.each(e.beforeBody.concat(e.afterBody), f),
                                                (h = e.displayColors ? d + 2 : 0),
                                                R.each(o, function (t) {
                                                    R.each(t.before, f), R.each(t.lines, f), R.each(t.after, f);
                                                }),
                                                (h = 0),
                                                (i.font = R.fontString(c, e._footerFontStyle, e._footerFontFamily)),
                                                R.each(e.footer, f),
                                                { width: (a += 2 * e.xPadding), height: n }
                                            );
                                        })(this, C))
                                    )),
                                    (n = C),
                                    (a = I),
                                    (o = D),
                                    (r = k._chart),
                                    (s = n.x),
                                    (l = n.y),
                                    (u = n.caretSize),
                                    (d = n.caretPadding),
                                    (c = n.cornerRadius),
                                    (h = o.xAlign),
                                    (f = o.yAlign),
                                    (g = u + d),
                                    (p = c + d),
                                    "right" === h ? (s -= a.width) : "center" === h && ((s -= a.width / 2) + a.width > r.width && (s = r.width - a.width), s < 0 && (s = 0)),
                                    "top" === f ? (l += g) : (l -= "bottom" === f ? a.height + g : a.height / 2),
                                    "center" === f ? ("left" === h ? (s += g) : "right" === h && (s -= g)) : "left" === h ? (s -= p) : "right" === h && (s += p),
                                    (P = { x: s, y: l });
                            } else C.opacity = 0;
                            return (
                                (C.xAlign = D.xAlign), (C.yAlign = D.yAlign), (C.x = P.x), (C.y = P.y), (C.width = I.width), (C.height = I.height), (C.caretX = A.x), (C.caretY = A.y), (k._model = C), t && M.custom && M.custom.call(k, C), k
                            );
                        },
                        drawCaret: function (t, e) {
                            var i = this._chart.ctx,
                                n = this._view,
                                a = this.getCaretPosition(t, e, n);
                            i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3);
                        },
                        getCaretPosition: function (t, e, i) {
                            var n,
                                a,
                                o,
                                r,
                                s,
                                l,
                                u = i.caretSize,
                                d = i.cornerRadius,
                                c = i.xAlign,
                                h = i.yAlign,
                                f = t.x,
                                g = t.y,
                                p = e.width,
                                m = e.height;
                            if ("center" === h) (s = g + m / 2), (l = "left" === c ? ((a = (n = f) - u), (o = n), (r = s + u), s - u) : ((a = (n = f + p) + u), (o = n), (r = s - u), s + u));
                            else if (((o = ((n = "left" === c ? (a = f + d + u) - u : "right" === c ? (a = f + p - d - u) - u : (a = i.caretX) - u), a + u)), "top" === h)) (s = (r = g) - u), (l = r);
                            else {
                                (s = (r = g + m) + u), (l = r);
                                var v = o;
                                (o = n), (n = v);
                            }
                            return { x1: n, x2: a, x3: o, y1: r, y2: s, y3: l };
                        },
                        drawTitle: function (t, e, i, n) {
                            var a = e.title;
                            if (a.length) {
                                (i.textAlign = e._titleAlign), (i.textBaseline = "top");
                                var o,
                                    r,
                                    s = e.titleFontSize,
                                    l = e.titleSpacing;
                                for (i.fillStyle = h(e.titleFontColor, n), i.font = R.fontString(s, e._titleFontStyle, e._titleFontFamily), o = 0, r = a.length; o < r; ++o)
                                    i.fillText(a[o], t.x, t.y), (t.y += s + l), o + 1 === a.length && (t.y += e.titleMarginBottom - l);
                            }
                        },
                        drawBody: function (n, a, o, r) {
                            var s = a.bodyFontSize,
                                e = a.bodySpacing,
                                t = a.body;
                            (o.textAlign = a._bodyAlign), (o.textBaseline = "top"), (o.font = R.fontString(s, a._bodyFontStyle, a._bodyFontFamily));
                            var i = 0,
                                l = function (t) {
                                    o.fillText(t, n.x + i, n.y), (n.y += s + e);
                                };
                            (o.fillStyle = h(a.bodyFontColor, r)), R.each(a.beforeBody, l);
                            var u = a.displayColors;
                            (i = u ? s + 2 : 0),
                                R.each(t, function (t, e) {
                                    var i = h(a.labelTextColors[e], r);
                                    (o.fillStyle = i),
                                        R.each(t.before, l),
                                        R.each(t.lines, function (t) {
                                            u &&
                                                ((o.fillStyle = h(a.legendColorBackground, r)),
                                                    o.fillRect(n.x, n.y, s, s),
                                                    (o.lineWidth = 1),
                                                    (o.strokeStyle = h(a.labelColors[e].borderColor, r)),
                                                    o.strokeRect(n.x, n.y, s, s),
                                                    (o.fillStyle = h(a.labelColors[e].backgroundColor, r)),
                                                    o.fillRect(n.x + 1, n.y + 1, s - 2, s - 2),
                                                    (o.fillStyle = i)),
                                                l(t);
                                        }),
                                        R.each(t.after, l);
                                }),
                                (i = 0),
                                R.each(a.afterBody, l),
                                (n.y -= e);
                        },
                        drawFooter: function (e, i, n, t) {
                            var a = i.footer;
                            a.length &&
                                ((e.y += i.footerMarginTop),
                                    (n.textAlign = i._footerAlign),
                                    (n.textBaseline = "top"),
                                    (n.fillStyle = h(i.footerFontColor, t)),
                                    (n.font = R.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily)),
                                    R.each(a, function (t) {
                                        n.fillText(t, e.x, e.y), (e.y += i.footerFontSize + i.footerSpacing);
                                    }));
                        },
                        drawBackground: function (t, e, i, n, a) {
                            (i.fillStyle = h(e.backgroundColor, a)), (i.strokeStyle = h(e.borderColor, a)), (i.lineWidth = e.borderWidth);
                            var o = e.xAlign,
                                r = e.yAlign,
                                s = t.x,
                                l = t.y,
                                u = n.width,
                                d = n.height,
                                c = e.cornerRadius;
                            i.beginPath(),
                                i.moveTo(s + c, l),
                                "top" === r && this.drawCaret(t, n),
                                i.lineTo(s + u - c, l),
                                i.quadraticCurveTo(s + u, l, s + u, l + c),
                                "center" === r && "right" === o && this.drawCaret(t, n),
                                i.lineTo(s + u, l + d - c),
                                i.quadraticCurveTo(s + u, l + d, s + u - c, l + d),
                                "bottom" === r && this.drawCaret(t, n),
                                i.lineTo(s + c, l + d),
                                i.quadraticCurveTo(s, l + d, s, l + d - c),
                                "center" === r && "left" === o && this.drawCaret(t, n),
                                i.lineTo(s, l + c),
                                i.quadraticCurveTo(s, l, s + c, l),
                                i.closePath(),
                                i.fill(),
                                0 < e.borderWidth && i.stroke();
                        },
                        draw: function () {
                            var t = this._chart.ctx,
                                e = this._view;
                            if (0 !== e.opacity) {
                                var i = { width: e.width, height: e.height },
                                    n = { x: e.x, y: e.y },
                                    a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                                    o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                                this._options.enabled && o && (this.drawBackground(n, e, t, i, a), (n.x += e.xPadding), (n.y += e.yPadding), this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a));
                            }
                        },
                        handleEvent: function (t) {
                            var e,
                                i = this,
                                n = i._options;
                            return (
                                (i._lastActive = i._lastActive || []),
                                "mouseout" === t.type ? (i._active = []) : (i._active = i._chart.getElementsAtEventForMode(t, n.mode, n)),
                                (e = !R.arrayEquals(i._active, i._lastActive)) && ((i._lastActive = i._active), (n.enabled || n.custom) && ((i._eventPosition = { x: t.x, y: t.y }), i.update(!0), i.pivot())),
                                e
                            );
                        },
                    })).positioners = L;
                },
                { 26: 26, 27: 27, 46: 46 },
            ],
            37: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(27),
                        d = t(46);
                    n._set("global", { elements: { arc: { backgroundColor: n.global.defaultColor, borderColor: "#fff", borderWidth: 2 } } }),
                        (e.exports = a.extend({
                            inLabelRange: function (t) {
                                var e = this._view;
                                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
                            },
                            inRange: function (t, e) {
                                var i = this._view;
                                if (i) {
                                    for (var n = d.getAngleFromPoint(i, { x: t, y: e }), a = n.angle, o = n.distance, r = i.startAngle, s = i.endAngle; s < r;) s += 2 * Math.PI;
                                    for (; s < a;) a -= 2 * Math.PI;
                                    for (; a < r;) a += 2 * Math.PI;
                                    var l = r <= a && a <= s,
                                        u = o >= i.innerRadius && o <= i.outerRadius;
                                    return l && u;
                                }
                                return !1;
                            },
                            getCenterPoint: function () {
                                var t = this._view,
                                    e = (t.startAngle + t.endAngle) / 2,
                                    i = (t.innerRadius + t.outerRadius) / 2;
                                return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
                            },
                            getArea: function () {
                                var t = this._view;
                                return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
                            },
                            tooltipPosition: function () {
                                var t = this._view,
                                    e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                                    i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                                return { x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i };
                            },
                            draw: function () {
                                var t = this._chart.ctx,
                                    e = this._view,
                                    i = e.startAngle,
                                    n = e.endAngle;
                                t.beginPath(),
                                    t.arc(e.x, e.y, e.outerRadius, i, n),
                                    t.arc(e.x, e.y, e.innerRadius, n, i, !0),
                                    t.closePath(),
                                    (t.strokeStyle = e.borderColor),
                                    (t.lineWidth = e.borderWidth),
                                    (t.fillStyle = e.backgroundColor),
                                    t.fill(),
                                    (t.lineJoin = "bevel"),
                                    e.borderWidth && t.stroke();
                            },
                        }));
                },
                { 26: 26, 27: 27, 46: 46 },
            ],
            38: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(27),
                        d = t(46),
                        c = n.global;
                    n._set("global", {
                        elements: {
                            line: {
                                tension: 0.4,
                                backgroundColor: c.defaultColor,
                                borderWidth: 3,
                                borderColor: c.defaultColor,
                                borderCapStyle: "butt",
                                borderDash: [],
                                borderDashOffset: 0,
                                borderJoinStyle: "miter",
                                capBezierPoints: !0,
                                fill: !0,
                            },
                        },
                    }),
                        (e.exports = a.extend({
                            draw: function () {
                                var t,
                                    e,
                                    i,
                                    n,
                                    a = this._view,
                                    o = this._chart.ctx,
                                    r = a.spanGaps,
                                    s = this._children.slice(),
                                    l = c.elements.line,
                                    u = -1;
                                for (
                                    this._loop && s.length && s.push(s[0]),
                                    o.save(),
                                    o.lineCap = a.borderCapStyle || l.borderCapStyle,
                                    o.setLineDash && o.setLineDash(a.borderDash || l.borderDash),
                                    o.lineDashOffset = a.borderDashOffset || l.borderDashOffset,
                                    o.lineJoin = a.borderJoinStyle || l.borderJoinStyle,
                                    o.lineWidth = a.borderWidth || l.borderWidth,
                                    o.strokeStyle = a.borderColor || c.defaultColor,
                                    o.beginPath(),
                                    u = -1,
                                    t = 0;
                                    t < s.length;
                                    ++t
                                )
                                    (e = s[t]),
                                        (i = d.previousItem(s, t)),
                                        (n = e._view),
                                        0 === t ? n.skip || (o.moveTo(n.x, n.y), (u = t)) : ((i = -1 === u ? i : s[u]), n.skip || ((u !== t - 1 && !r) || -1 === u ? o.moveTo(n.x, n.y) : d.canvas.lineTo(o, i._view, e._view), (u = t)));
                                o.stroke(), o.restore();
                            },
                        }));
                },
                { 26: 26, 27: 27, 46: 46 },
            ],
            39: [
                function (t, e, i) {
                    "use strict";
                    var u = t(26),
                        n = t(27),
                        d = t(46),
                        c = u.global.defaultColor;
                    function a(t) {
                        var e = this._view;
                        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
                    }
                    u._set("global", { elements: { point: { radius: 3, pointStyle: "circle", backgroundColor: c, borderColor: c, borderWidth: 1, hitRadius: 1, hoverRadius: 4, hoverBorderWidth: 1 } } }),
                        (e.exports = n.extend({
                            inRange: function (t, e) {
                                var i = this._view;
                                return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2);
                            },
                            inLabelRange: a,
                            inXRange: a,
                            inYRange: function (t) {
                                var e = this._view;
                                return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
                            },
                            getCenterPoint: function () {
                                var t = this._view;
                                return { x: t.x, y: t.y };
                            },
                            getArea: function () {
                                return Math.PI * Math.pow(this._view.radius, 2);
                            },
                            tooltipPosition: function () {
                                var t = this._view;
                                return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
                            },
                            draw: function (t) {
                                var e = this._view,
                                    i = this._model,
                                    n = this._chart.ctx,
                                    a = e.pointStyle,
                                    o = e.rotation,
                                    r = e.radius,
                                    s = e.x,
                                    l = e.y;
                                e.skip ||
                                    ((void 0 === t || (i.x >= t.left && 1.01 * t.right >= i.x && i.y >= t.top && 1.01 * t.bottom >= i.y)) &&
                                        ((n.strokeStyle = e.borderColor || c),
                                            (n.lineWidth = d.valueOrDefault(e.borderWidth, u.global.elements.point.borderWidth)),
                                            (n.fillStyle = e.backgroundColor || c),
                                            d.canvas.drawPoint(n, a, r, s, l, o)));
                            },
                        }));
                },
                { 26: 26, 27: 27, 46: 46 },
            ],
            40: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        a = t(27);
                    function l(t) {
                        return void 0 !== t._view.width;
                    }
                    function o(t) {
                        var e,
                            i,
                            n,
                            a,
                            o = t._view;
                        if (l(t)) {
                            var r = o.width / 2;
                            (e = o.x - r), (i = o.x + r), (n = Math.min(o.y, o.base)), (a = Math.max(o.y, o.base));
                        } else {
                            var s = o.height / 2;
                            (e = Math.min(o.x, o.base)), (i = Math.max(o.x, o.base)), (n = o.y - s), (a = o.y + s);
                        }
                        return { left: e, top: n, right: i, bottom: a };
                    }
                    n._set("global", { elements: { rectangle: { backgroundColor: n.global.defaultColor, borderColor: n.global.defaultColor, borderSkipped: "bottom", borderWidth: 0 } } }),
                        (e.exports = a.extend({
                            draw: function () {
                                var t,
                                    e,
                                    i,
                                    n,
                                    a,
                                    o,
                                    r,
                                    s = this._chart.ctx,
                                    l = this._view,
                                    u = l.borderWidth;
                                if (
                                    ((r = l.horizontal
                                        ? ((t = l.base), (e = l.x), (i = l.y - l.height / 2), (n = l.y + l.height / 2), (a = t < e ? 1 : -1), (o = 1), l.borderSkipped || "left")
                                        : ((t = l.x - l.width / 2), (e = l.x + l.width / 2), (a = 1), (o = (i = l.y) < (n = l.base) ? 1 : -1), l.borderSkipped || "bottom")),
                                        u)
                                ) {
                                    var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                                        c = (u = d < u ? d : u) / 2,
                                        h = t + ("left" !== r ? c * a : 0),
                                        f = e + ("right" !== r ? -c * a : 0),
                                        g = i + ("top" !== r ? c * o : 0),
                                        p = n + ("bottom" !== r ? -c * o : 0);
                                    h !== f && ((i = g), (n = p)), g !== p && ((t = h), (e = f));
                                }
                                s.beginPath(), (s.fillStyle = l.backgroundColor), (s.strokeStyle = l.borderColor), (s.lineWidth = u);
                                var m = [
                                    [t, n],
                                    [t, i],
                                    [e, i],
                                    [e, n],
                                ],
                                    v = ["bottom", "left", "top", "right"].indexOf(r, 0);
                                function b(t) {
                                    return m[(v + t) % 4];
                                }
                                -1 === v && (v = 0);
                                var x = b(0);
                                s.moveTo(x[0], x[1]);
                                for (var y = 1; y < 4; y++) (x = b(y)), s.lineTo(x[0], x[1]);
                                s.fill(), u && s.stroke();
                            },
                            height: function () {
                                var t = this._view;
                                return t.base - t.y;
                            },
                            inRange: function (t, e) {
                                var i = !1;
                                if (this._view) {
                                    var n = o(this);
                                    i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom;
                                }
                                return i;
                            },
                            inLabelRange: function (t, e) {
                                if (!this._view) return !1;
                                var i = o(this);
                                return l(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom;
                            },
                            inXRange: function (t) {
                                var e = o(this);
                                return t >= e.left && t <= e.right;
                            },
                            inYRange: function (t) {
                                var e = o(this);
                                return t >= e.top && t <= e.bottom;
                            },
                            getCenterPoint: function () {
                                var t,
                                    e,
                                    i = this._view;
                                return (e = l(this) ? ((t = i.x), (i.y + i.base) / 2) : ((t = (i.x + i.base) / 2), i.y)), { x: t, y: e };
                            },
                            getArea: function () {
                                var t = this._view;
                                return t.width * Math.abs(t.y - t.base);
                            },
                            tooltipPosition: function () {
                                var t = this._view;
                                return { x: t.x, y: t.y };
                            },
                        }));
                },
                { 26: 26, 27: 27 },
            ],
            41: [
                function (t, e, i) {
                    "use strict";
                    (e.exports = {}), (e.exports.Arc = t(37)), (e.exports.Line = t(38)), (e.exports.Point = t(39)), (e.exports.Rectangle = t(40));
                },
                { 37: 37, 38: 38, 39: 39, 40: 40 },
            ],
            42: [
                function (t, e, i) {
                    "use strict";
                    var n = t(43);
                    i = e.exports = {
                        clear: function (t) {
                            t.ctx.clearRect(0, 0, t.width, t.height);
                        },
                        roundedRect: function (t, e, i, n, a, o) {
                            if (o) {
                                var r = Math.min(o, a / 2 - 1e-7, n / 2 - 1e-7);
                                t.moveTo(e + r, i),
                                    t.lineTo(e + n - r, i),
                                    t.arcTo(e + n, i, e + n, i + r, r),
                                    t.lineTo(e + n, i + a - r),
                                    t.arcTo(e + n, i + a, e + n - r, i + a, r),
                                    t.lineTo(e + r, i + a),
                                    t.arcTo(e, i + a, e, i + a - r, r),
                                    t.lineTo(e, i + r),
                                    t.arcTo(e, i, e + r, i, r),
                                    t.closePath(),
                                    t.moveTo(e, i);
                            } else t.rect(e, i, n, a);
                        },
                        drawPoint: function (t, e, i, n, a, o) {
                            var r, s, l, u, d, c;
                            if (((o = o || 0), !e || "object" != typeof e || ("[object HTMLImageElement]" !== (r = e.toString()) && "[object HTMLCanvasElement]" !== r))) {
                                if (!(isNaN(i) || i <= 0)) {
                                    switch ((t.save(), t.translate(n, a), t.rotate((o * Math.PI) / 180), t.beginPath(), e)) {
                                        default:
                                            t.arc(0, 0, i, 0, 2 * Math.PI), t.closePath();
                                            break;
                                        case "triangle":
                                            (d = ((s = (3 * i) / Math.sqrt(3)) * Math.sqrt(3)) / 2), t.moveTo(-s / 2, d / 3), t.lineTo(s / 2, d / 3), t.lineTo(0, (-2 * d) / 3), t.closePath();
                                            break;
                                        case "rect":
                                            (c = (1 / Math.SQRT2) * i), t.rect(-c, -c, 2 * c, 2 * c);
                                            break;
                                        case "rectRounded":
                                            var h = i / Math.SQRT2,
                                                f = -h,
                                                g = -h,
                                                p = Math.SQRT2 * i;
                                            this.roundedRect(t, f, g, p, p, 0.425 * i);
                                            break;
                                        case "rectRot":
                                            (c = (1 / Math.SQRT2) * i), t.moveTo(-c, 0), t.lineTo(0, c), t.lineTo(c, 0), t.lineTo(0, -c), t.closePath();
                                            break;
                                        case "cross":
                                            t.moveTo(0, i), t.lineTo(0, -i), t.moveTo(-i, 0), t.lineTo(i, 0);
                                            break;
                                        case "crossRot":
                                            (l = Math.cos(Math.PI / 4) * i), (u = Math.sin(Math.PI / 4) * i), t.moveTo(-l, -u), t.lineTo(l, u), t.moveTo(-l, u), t.lineTo(l, -u);
                                            break;
                                        case "star":
                                            t.moveTo(0, i),
                                                t.lineTo(0, -i),
                                                t.moveTo(-i, 0),
                                                t.lineTo(i, 0),
                                                (l = Math.cos(Math.PI / 4) * i),
                                                (u = Math.sin(Math.PI / 4) * i),
                                                t.moveTo(-l, -u),
                                                t.lineTo(l, u),
                                                t.moveTo(-l, u),
                                                t.lineTo(l, -u);
                                            break;
                                        case "line":
                                            t.moveTo(-i, 0), t.lineTo(i, 0);
                                            break;
                                        case "dash":
                                            t.moveTo(0, 0), t.lineTo(i, 0);
                                    }
                                    t.fill(), t.stroke(), t.restore();
                                }
                            } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height);
                        },
                        clipArea: function (t, e) {
                            t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
                        },
                        unclipArea: function (t) {
                            t.restore();
                        },
                        lineTo: function (t, e, i, n) {
                            if (i.steppedLine) return ("after" === i.steppedLine && !n) || ("after" !== i.steppedLine && n) ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                            i.tension
                                ? t.bezierCurveTo(
                                    n ? e.controlPointPreviousX : e.controlPointNextX,
                                    n ? e.controlPointPreviousY : e.controlPointNextY,
                                    n ? i.controlPointNextX : i.controlPointPreviousX,
                                    n ? i.controlPointNextY : i.controlPointPreviousY,
                                    i.x,
                                    i.y
                                )
                                : t.lineTo(i.x, i.y);
                        },
                    };
                    (n.clear = i.clear),
                        (n.drawRoundedRectangle = function (t) {
                            t.beginPath(), i.roundedRect.apply(i, arguments);
                        });
                },
                { 43: 43 },
            ],
            43: [
                function (t, e, i) {
                    "use strict";
                    var n,
                        d = {
                            noop: function () { },
                            uid:
                                ((n = 0),
                                    function () {
                                        return n++;
                                    }),
                            isNullOrUndef: function (t) {
                                return null == t;
                            },
                            isArray: Array.isArray
                                ? Array.isArray
                                : function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(t);
                                },
                            isObject: function (t) {
                                return null !== t && "[object Object]" === Object.prototype.toString.call(t);
                            },
                            valueOrDefault: function (t, e) {
                                return void 0 === t ? e : t;
                            },
                            valueAtIndexOrDefault: function (t, e, i) {
                                return d.valueOrDefault(d.isArray(t) ? t[e] : t, i);
                            },
                            callback: function (t, e, i) {
                                if (t && "function" == typeof t.call) return t.apply(i, e);
                            },
                            each: function (t, e, i, n) {
                                var a, o, r;
                                if (d.isArray(t))
                                    if (((o = t.length), n)) for (a = o - 1; 0 <= a; a--) e.call(i, t[a], a);
                                    else for (a = 0; a < o; a++) e.call(i, t[a], a);
                                else if (d.isObject(t)) for (o = (r = Object.keys(t)).length, a = 0; a < o; a++) e.call(i, t[r[a]], r[a]);
                            },
                            arrayEquals: function (t, e) {
                                var i, n, a, o;
                                if (!t || !e || t.length !== e.length) return !1;
                                for (i = 0, n = t.length; i < n; ++i)
                                    if (((a = t[i]), (o = e[i]), a instanceof Array && o instanceof Array)) {
                                        if (!d.arrayEquals(a, o)) return !1;
                                    } else if (a !== o) return !1;
                                return !0;
                            },
                            clone: function (t) {
                                if (d.isArray(t)) return t.map(d.clone);
                                if (d.isObject(t)) {
                                    for (var e = {}, i = Object.keys(t), n = i.length, a = 0; a < n; ++a) e[i[a]] = d.clone(t[i[a]]);
                                    return e;
                                }
                                return t;
                            },
                            _merger: function (t, e, i, n) {
                                var a = e[t],
                                    o = i[t];
                                d.isObject(a) && d.isObject(o) ? d.merge(a, o, n) : (e[t] = d.clone(o));
                            },
                            _mergerIf: function (t, e, i) {
                                var n = e[t],
                                    a = i[t];
                                d.isObject(n) && d.isObject(a) ? d.mergeIf(n, a) : e.hasOwnProperty(t) || (e[t] = d.clone(a));
                            },
                            merge: function (t, e, i) {
                                var n,
                                    a,
                                    o,
                                    r,
                                    s,
                                    l = d.isArray(e) ? e : [e],
                                    u = l.length;
                                if (!d.isObject(t)) return t;
                                for (n = (i = i || {}).merger || d._merger, a = 0; a < u; ++a) if (((e = l[a]), d.isObject(e))) for (s = 0, r = (o = Object.keys(e)).length; s < r; ++s) n(o[s], t, e, i);
                                return t;
                            },
                            mergeIf: function (t, e) {
                                return d.merge(t, e, { merger: d._mergerIf });
                            },
                            extend: function (i) {
                                for (
                                    var t = function (t, e) {
                                        i[e] = t;
                                    },
                                    e = 1,
                                    n = arguments.length;
                                    e < n;
                                    ++e
                                )
                                    d.each(arguments[e], t);
                                return i;
                            },
                            inherits: function (t) {
                                var e = this,
                                    i =
                                        t && t.hasOwnProperty("constructor")
                                            ? t.constructor
                                            : function () {
                                                return e.apply(this, arguments);
                                            },
                                    n = function () {
                                        this.constructor = i;
                                    };
                                return (n.prototype = e.prototype), (i.prototype = new n()), (i.extend = d.inherits), t && d.extend(i.prototype, t), (i.__super__ = e.prototype), i;
                            },
                        };
                    ((e.exports = d).callCallback = d.callback),
                        (d.indexOf = function (t, e, i) {
                            return Array.prototype.indexOf.call(t, e, i);
                        }),
                        (d.getValueOrDefault = d.valueOrDefault),
                        (d.getValueAtIndexOrDefault = d.valueAtIndexOrDefault);
                },
                {},
            ],
            44: [
                function (t, e, i) {
                    "use strict";
                    var n = t(43),
                        a = {
                            linear: function (t) {
                                return t;
                            },
                            easeInQuad: function (t) {
                                return t * t;
                            },
                            easeOutQuad: function (t) {
                                return -t * (t - 2);
                            },
                            easeInOutQuad: function (t) {
                                return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
                            },
                            easeInCubic: function (t) {
                                return t * t * t;
                            },
                            easeOutCubic: function (t) {
                                return (t -= 1) * t * t + 1;
                            },
                            easeInOutCubic: function (t) {
                                return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
                            },
                            easeInQuart: function (t) {
                                return t * t * t * t;
                            },
                            easeOutQuart: function (t) {
                                return -((t -= 1) * t * t * t - 1);
                            },
                            easeInOutQuart: function (t) {
                                return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
                            },
                            easeInQuint: function (t) {
                                return t * t * t * t * t;
                            },
                            easeOutQuint: function (t) {
                                return (t -= 1) * t * t * t * t + 1;
                            },
                            easeInOutQuint: function (t) {
                                return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
                            },
                            easeInSine: function (t) {
                                return 1 - Math.cos(t * (Math.PI / 2));
                            },
                            easeOutSine: function (t) {
                                return Math.sin(t * (Math.PI / 2));
                            },
                            easeInOutSine: function (t) {
                                return -0.5 * (Math.cos(Math.PI * t) - 1);
                            },
                            easeInExpo: function (t) {
                                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
                            },
                            easeOutExpo: function (t) {
                                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                            },
                            easeInOutExpo: function (t) {
                                return 0 === t ? 0 : 1 === t ? 1 : (t /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t));
                            },
                            easeInCirc: function (t) {
                                return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1);
                            },
                            easeOutCirc: function (t) {
                                return Math.sqrt(1 - (t -= 1) * t);
                            },
                            easeInOutCirc: function (t) {
                                return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                            },
                            easeInElastic: function (t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = 0.3), (e = n < 1 ? ((n = 1), i / 4) : (i / (2 * Math.PI)) * Math.asin(1 / n)), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i));
                            },
                            easeOutElastic: function (t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t ? 0 : 1 === t ? 1 : (i || (i = 0.3), (e = n < 1 ? ((n = 1), i / 4) : (i / (2 * Math.PI)) * Math.asin(1 / n)), n * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / i) + 1);
                            },
                            easeInOutElastic: function (t) {
                                var e = 1.70158,
                                    i = 0,
                                    n = 1;
                                return 0 === t
                                    ? 0
                                    : 2 == (t /= 0.5)
                                        ? 1
                                        : (i || (i = 0.45),
                                            (e = n < 1 ? ((n = 1), i / 4) : (i / (2 * Math.PI)) * Math.asin(1 / n)),
                                            t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i) * -0.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / i) * 0.5 + 1);
                            },
                            easeInBack: function (t) {
                                return t * t * (2.70158 * t - 1.70158);
                            },
                            easeOutBack: function (t) {
                                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1;
                            },
                            easeInOutBack: function (t) {
                                var e = 1.70158;
                                return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                            },
                            easeInBounce: function (t) {
                                return 1 - a.easeOutBounce(1 - t);
                            },
                            easeOutBounce: function (t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                            },
                            easeInOutBounce: function (t) {
                                return t < 0.5 ? 0.5 * a.easeInBounce(2 * t) : 0.5 * a.easeOutBounce(2 * t - 1) + 0.5;
                            },
                        };
                    (e.exports = { effects: a }), (n.easingEffects = a);
                },
                { 43: 43 },
            ],
            45: [
                function (t, e, i) {
                    "use strict";
                    var r = t(43);
                    e.exports = {
                        toLineHeight: function (t, e) {
                            var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                            if (!i || "normal" === i[1]) return 1.2 * e;
                            switch (((t = +i[2]), i[3])) {
                                case "px":
                                    return t;
                                case "%":
                                    t /= 100;
                            }
                            return e * t;
                        },
                        toPadding: function (t) {
                            var e, i, n, a;
                            return r.isObject(t) ? ((e = +t.top || 0), (i = +t.right || 0), (n = +t.bottom || 0), (a = +t.left || 0)) : (e = i = n = a = +t || 0), { top: e, right: i, bottom: n, left: a, height: e + n, width: a + i };
                        },
                        resolve: function (t, e, i) {
                            var n, a, o;
                            for (n = 0, a = t.length; n < a; ++n) if (void 0 !== (o = t[n]) && (void 0 !== e && "function" == typeof o && (o = o(e)), void 0 !== i && r.isArray(o) && (o = o[i]), void 0 !== o)) return o;
                        },
                    };
                },
                { 43: 43 },
            ],
            46: [
                function (t, e, i) {
                    "use strict";
                    (e.exports = t(43)), (e.exports.easing = t(44)), (e.exports.canvas = t(42)), (e.exports.options = t(45));
                },
                { 42: 42, 43: 43, 44: 44, 45: 45 },
            ],
            47: [
                function (t, e, i) {
                    e.exports = {
                        acquireContext: function (t) {
                            return t && t.canvas && (t = t.canvas), (t && t.getContext("2d")) || null;
                        },
                    };
                },
                {},
            ],
            48: [
                function (t, e, i) {
                    "use strict";
                    var f = t(46),
                        g = "$chartjs",
                        p = "chartjs-",
                        m = p + "render-monitor",
                        v = p + "render-animation",
                        b = ["animationstart", "webkitAnimationStart"],
                        s = {
                            touchstart: "mousedown",
                            touchmove: "mousemove",
                            touchend: "mouseup",
                            pointerenter: "mouseenter",
                            pointerdown: "mousedown",
                            pointermove: "mousemove",
                            pointerup: "mouseup",
                            pointerleave: "mouseout",
                            pointerout: "mouseout",
                        };
                    function l(t, e) {
                        var i = f.getStyle(t, e),
                            n = i && i.match(/^(\d+)(\.\d+)?px$/);
                        return n ? Number(n[1]) : void 0;
                    }
                    var n = !!(function () {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function () {
                                    t = !0;
                                },
                            });
                            window.addEventListener("e", null, e);
                        } catch (t) { }
                        return t;
                    })() && { passive: !0 };
                    function x(t, e, i) {
                        t.addEventListener(e, i, n);
                    }
                    function r(t, e, i) {
                        t.removeEventListener(e, i, n);
                    }
                    function y(t, e, i, n, a) {
                        return { type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null };
                    }
                    function a(e, t, i) {
                        var n,
                            a,
                            o,
                            r,
                            s,
                            l,
                            u,
                            d,
                            c = e[g] || (e[g] = {}),
                            h = (c.resizer = (function (t) {
                                var e = document.createElement("div"),
                                    i = p + "size-monitor",
                                    n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                                (e.style.cssText = n),
                                    (e.className = i),
                                    (e.innerHTML =
                                        '<div class="' +
                                        i +
                                        '-expand" style="' +
                                        n +
                                        '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' +
                                        i +
                                        '-shrink" style="' +
                                        n +
                                        '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>');
                                var a = e.childNodes[0],
                                    o = e.childNodes[1];
                                e._reset = function () {
                                    (a.scrollLeft = 1e6), (a.scrollTop = 1e6), (o.scrollLeft = 1e6), (o.scrollTop = 1e6);
                                };
                                var r = function () {
                                    e._reset(), t();
                                };
                                return x(a, "scroll", r.bind(a, "expand")), x(o, "scroll", r.bind(o, "shrink")), e;
                            })(
                                ((o = !(n = function () {
                                    if (c.resizer) return t(y("resize", i));
                                })),
                                    (r = []),
                                    function () {
                                        (r = Array.prototype.slice.call(arguments)),
                                            (a = a || this),
                                            o ||
                                            ((o = !0),
                                                f.requestAnimFrame.call(window, function () {
                                                    (o = !1), n.apply(a, r);
                                                }));
                                    })
                            ));
                        (l = function () {
                            if (c.resizer) {
                                var t = e.parentNode;
                                t && t !== h.parentNode && t.insertBefore(h, t.firstChild), h._reset();
                            }
                        }),
                            (u = (s = e)[g] || (s[g] = {})),
                            (d = u.renderProxy = function (t) {
                                t.animationName === v && l();
                            }),
                            f.each(b, function (t) {
                                x(s, t, d);
                            }),
                            (u.reflow = !!s.offsetParent),
                            s.classList.add(m);
                    }
                    function o(t) {
                        var e,
                            i,
                            n,
                            a = t[g] || {},
                            o = a.resizer;
                        delete a.resizer,
                            (i = (e = t)[g] || {}),
                            (n = i.renderProxy) &&
                            (f.each(b, function (t) {
                                r(e, t, n);
                            }),
                                delete i.renderProxy),
                            e.classList.remove(m),
                            o && o.parentNode && o.parentNode.removeChild(o);
                    }
                    (e.exports = {
                        _enabled: "undefined" != typeof window && "undefined" != typeof document,
                        initialize: function () {
                            var t,
                                e,
                                i,
                                n = "from{opacity:0.99}to{opacity:1}";
                            (e = "@-webkit-keyframes " + v + "{" + n + "}@keyframes " + v + "{" + n + "}." + m + "{-webkit-animation:" + v + " 0.001s;animation:" + v + " 0.001s;}"),
                                (i = (t = this)._style || document.createElement("style")),
                                t._style || ((e = "/* Chart.js */\n" + e), (t._style = i).setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)),
                                i.appendChild(document.createTextNode(e));
                        },
                        acquireContext: function (t, e) {
                            "string" == typeof t ? (t = document.getElementById(t)) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                            var i = t && t.getContext && t.getContext("2d");
                            return i && i.canvas === t
                                ? ((function (t, e) {
                                    var i = t.style,
                                        n = t.getAttribute("height"),
                                        a = t.getAttribute("width");
                                    if (((t[g] = { initial: { height: n, width: a, style: { display: i.display, height: i.height, width: i.width } } }), (i.display = i.display || "block"), null === a || "" === a)) {
                                        var o = l(t, "width");
                                        void 0 !== o && (t.width = o);
                                    }
                                    if (null === n || "" === n)
                                        if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                                        else {
                                            var r = l(t, "height");
                                            void 0 !== o && (t.height = r);
                                        }
                                })(t, e),
                                    i)
                                : null;
                        },
                        releaseContext: function (t) {
                            var i = t.canvas;
                            if (i[g]) {
                                var n = i[g].initial;
                                ["height", "width"].forEach(function (t) {
                                    var e = n[t];
                                    f.isNullOrUndef(e) ? i.removeAttribute(t) : i.setAttribute(t, e);
                                }),
                                    f.each(n.style || {}, function (t, e) {
                                        i.style[e] = t;
                                    }),
                                    (i.width = i.width),
                                    delete i[g];
                            }
                        },
                        addEventListener: function (o, t, r) {
                            var e = o.canvas;
                            if ("resize" !== t) {
                                var i = r[g] || (r[g] = {});
                                x(
                                    e,
                                    t,
                                    ((i.proxies || (i.proxies = {}))[o.id + "_" + t] = function (t) {
                                        var e, i, n, a;
                                        r(((i = o), (n = s[(e = t).type] || e.type), (a = f.getRelativePosition(e, i)), y(n, i, a.x, a.y, e)));
                                    })
                                );
                            } else a(e, r, o);
                        },
                        removeEventListener: function (t, e, i) {
                            var n = t.canvas;
                            if ("resize" !== e) {
                                var a = ((i[g] || {}).proxies || {})[t.id + "_" + e];
                                a && r(n, e, a);
                            } else o(n);
                        },
                    }),
                        (f.addEvent = x),
                        (f.removeEvent = r);
                },
                { 46: 46 },
            ],
            49: [
                function (t, e, i) {
                    "use strict";
                    var n = t(46),
                        a = t(47),
                        o = t(48),
                        r = o._enabled ? o : a;
                    e.exports = n.extend({ initialize: function () { }, acquireContext: function () { }, releaseContext: function () { }, addEventListener: function () { }, removeEventListener: function () { } }, r);
                },
                { 46: 46, 47: 47, 48: 48 },
            ],
            50: [
                function (t, e, i) {
                    "use strict";
                    (e.exports = {}), (e.exports.filler = t(51)), (e.exports.legend = t(52)), (e.exports.title = t(53));
                },
                { 51: 51, 52: 52, 53: 53 },
            ],
            51: [
                function (t, e, i) {
                    "use strict";
                    var u = t(26),
                        h = t(41),
                        d = t(46);
                    u._set("global", { plugins: { filler: { propagate: !0 } } });
                    var f = {
                        dataset: function (t) {
                            var e = t.fill,
                                i = t.chart,
                                n = i.getDatasetMeta(e),
                                a = (n && i.isDatasetVisible(e) && n.dataset._children) || [],
                                o = a.length || 0;
                            return o
                                ? function (t, e) {
                                    return (e < o && a[e]._view) || null;
                                }
                                : null;
                        },
                        boundary: function (t) {
                            var e = t.boundary,
                                i = e ? e.x : null,
                                n = e ? e.y : null;
                            return function (t) {
                                return { x: null === i ? t.x : i, y: null === n ? t.y : n };
                            };
                        },
                    };
                    function g(t, e, i) {
                        var n,
                            a = t._model || {},
                            o = a.fill;
                        if ((void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o)) return !1;
                        if (!0 === o) return "origin";
                        if (((n = parseFloat(o, 10)), isFinite(n) && Math.floor(n) === n)) return ("-" !== o[0] && "+" !== o[0]) || (n = e + n), !(n === e || n < 0 || i <= n) && n;
                        switch (o) {
                            case "bottom":
                                return "start";
                            case "top":
                                return "end";
                            case "zero":
                                return "origin";
                            case "origin":
                            case "start":
                            case "end":
                                return o;
                            default:
                                return !1;
                        }
                    }
                    function p(t) {
                        var e,
                            i = t.el._model || {},
                            n = t.el._scale || {},
                            a = t.fill,
                            o = null;
                        if (isFinite(a)) return null;
                        if (
                            ("start" === a
                                ? (o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom)
                                : "end" === a
                                    ? (o = void 0 === i.scaleTop ? n.top : i.scaleTop)
                                    : void 0 !== i.scaleZero
                                        ? (o = i.scaleZero)
                                        : n.getBasePosition
                                            ? (o = n.getBasePosition())
                                            : n.getBasePixel && (o = n.getBasePixel()),
                                null != o)
                        ) {
                            if (void 0 !== o.x && void 0 !== o.y) return o;
                            if ("number" == typeof o && isFinite(o)) return { x: (e = n.isHorizontal()) ? o : null, y: e ? null : o };
                        }
                        return null;
                    }
                    function m(t, e, i) {
                        var n,
                            a = t[e].fill,
                            o = [e];
                        if (!i) return a;
                        for (; !1 !== a && -1 === o.indexOf(a);) {
                            if (!isFinite(a)) return a;
                            if (!(n = t[a])) return !1;
                            if (n.visible) return a;
                            o.push(a), (a = n.fill);
                        }
                        return !1;
                    }
                    function x(t) {
                        return t && !t.skip;
                    }
                    function y(t, e, i, n, a) {
                        var o;
                        if (n && a) {
                            for (t.moveTo(e[0].x, e[0].y), o = 1; o < n; ++o) d.canvas.lineTo(t, e[o - 1], e[o]);
                            for (t.lineTo(i[a - 1].x, i[a - 1].y), o = a - 1; 0 < o; --o) d.canvas.lineTo(t, i[o], i[o - 1], !0);
                        }
                    }
                    e.exports = {
                        id: "filler",
                        afterDatasetsUpdate: function (t, e) {
                            var i,
                                n,
                                a,
                                o,
                                r,
                                s,
                                l,
                                u = (t.data.datasets || []).length,
                                d = e.propagate,
                                c = [];
                            for (n = 0; n < u; ++n)
                                (o = null), (a = (i = t.getDatasetMeta(n)).dataset) && a._model && a instanceof h.Line && (o = { visible: t.isDatasetVisible(n), fill: g(a, n, u), chart: t, el: a }), (i.$filler = o), c.push(o);
                            for (n = 0; n < u; ++n) (o = c[n]) && ((o.fill = m(c, n, d)), (o.boundary = p(o)), (o.mapper = ((l = void 0), (s = (r = o).fill), !(l = "dataset") === s ? null : (isFinite(s) || (l = "boundary"), f[l](r)))));
                        },
                        beforeDatasetDraw: function (t, e) {
                            var i = e.meta.$filler;
                            if (i) {
                                var n = t.ctx,
                                    a = i.el,
                                    o = a._view,
                                    r = a._children || [],
                                    s = i.mapper,
                                    l = o.backgroundColor || u.global.defaultColor;
                                s &&
                                    l &&
                                    r.length &&
                                    (d.canvas.clipArea(n, t.chartArea),
                                        (function (t, e, i, n, a, o) {
                                            var r,
                                                s,
                                                l,
                                                u,
                                                d,
                                                c,
                                                h,
                                                f = e.length,
                                                g = n.spanGaps,
                                                p = [],
                                                m = [],
                                                v = 0,
                                                b = 0;
                                            for (t.beginPath(), r = 0, s = f + !!o; r < s; ++r)
                                                (d = i((u = e[(l = r % f)]._view), l, n)),
                                                    (c = x(u)),
                                                    (h = x(d)),
                                                    c && h ? ((v = p.push(u)), (b = m.push(d))) : v && b && (g ? (c && p.push(u), h && m.push(d)) : (y(t, p, m, v, b), (v = b = 0), (p = []), (m = [])));
                                            y(t, p, m, v, b), t.closePath(), (t.fillStyle = a), t.fill();
                                        })(n, r, s, o, l, a._loop),
                                        d.canvas.unclipArea(n));
                            }
                        },
                    };
                },
                { 26: 26, 41: 41, 46: 46 },
            ],
            52: [
                function (t, e, i) {
                    "use strict";
                    var _ = t(26),
                        n = t(27),
                        D = t(46),
                        a = t(31),
                        o = D.noop;
                    function P(t, e) {
                        return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
                    }
                    _._set("global", {
                        legend: {
                            display: !0,
                            position: "top",
                            fullWidth: !0,
                            reverse: !1,
                            weight: 1e3,
                            onClick: function (t, e) {
                                var i = e.datasetIndex,
                                    n = this.chart,
                                    a = n.getDatasetMeta(i);
                                (a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null), n.update();
                            },
                            onHover: null,
                            labels: {
                                boxWidth: 40,
                                padding: 10,
                                generateLabels: function (i) {
                                    var t = i.data;
                                    return D.isArray(t.datasets)
                                        ? t.datasets.map(function (t, e) {
                                            return {
                                                text: t.label,
                                                fillStyle: D.isArray(t.backgroundColor) ? t.backgroundColor[0] : t.backgroundColor,
                                                hidden: !i.isDatasetVisible(e),
                                                lineCap: t.borderCapStyle,
                                                lineDash: t.borderDash,
                                                lineDashOffset: t.borderDashOffset,
                                                lineJoin: t.borderJoinStyle,
                                                lineWidth: t.borderWidth,
                                                strokeStyle: t.borderColor,
                                                pointStyle: t.pointStyle,
                                                datasetIndex: e,
                                            };
                                        }, this)
                                        : [];
                                },
                            },
                        },
                        legendCallback: function (t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var i = 0; i < t.data.datasets.length; i++)
                                e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                            return e.push("</ul>"), e.join("");
                        },
                    });
                    var r = n.extend({
                        initialize: function (t) {
                            D.extend(this, t), (this.legendHitBoxes = []), (this.doughnutMode = !1);
                        },
                        beforeUpdate: o,
                        update: function (t, e, i) {
                            var n = this;
                            return (
                                n.beforeUpdate(),
                                (n.maxWidth = t),
                                (n.maxHeight = e),
                                (n.margins = i),
                                n.beforeSetDimensions(),
                                n.setDimensions(),
                                n.afterSetDimensions(),
                                n.beforeBuildLabels(),
                                n.buildLabels(),
                                n.afterBuildLabels(),
                                n.beforeFit(),
                                n.fit(),
                                n.afterFit(),
                                n.afterUpdate(),
                                n.minSize
                            );
                        },
                        afterUpdate: o,
                        beforeSetDimensions: o,
                        setDimensions: function () {
                            var t = this;
                            t.isHorizontal() ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                                (t.paddingLeft = 0),
                                (t.paddingTop = 0),
                                (t.paddingRight = 0),
                                (t.paddingBottom = 0),
                                (t.minSize = { width: 0, height: 0 });
                        },
                        afterSetDimensions: o,
                        beforeBuildLabels: o,
                        buildLabels: function () {
                            var e = this,
                                i = e.options.labels || {},
                                t = D.callback(i.generateLabels, [e.chart], e) || [];
                            i.filter &&
                                (t = t.filter(function (t) {
                                    return i.filter(t, e.chart.data);
                                })),
                                e.options.reverse && t.reverse(),
                                (e.legendItems = t);
                        },
                        afterBuildLabels: o,
                        beforeFit: o,
                        fit: function () {
                            var n = this,
                                t = n.options,
                                a = t.labels,
                                e = t.display,
                                o = n.ctx,
                                i = _.global,
                                r = D.valueOrDefault,
                                s = r(a.fontSize, i.defaultFontSize),
                                l = r(a.fontStyle, i.defaultFontStyle),
                                u = r(a.fontFamily, i.defaultFontFamily),
                                d = D.fontString(s, l, u),
                                c = (n.legendHitBoxes = []),
                                h = n.minSize,
                                f = n.isHorizontal();
                            if (((h.height = f ? ((h.width = n.maxWidth), e ? 10 : 0) : ((h.width = e ? 10 : 0), n.maxHeight)), e))
                                if (((o.font = d), f)) {
                                    var g = (n.lineWidths = [0]),
                                        p = n.legendItems.length ? s + a.padding : 0;
                                    (o.textAlign = "left"),
                                        (o.textBaseline = "top"),
                                        D.each(n.legendItems, function (t, e) {
                                            var i = P(a, s) + s / 2 + o.measureText(t.text).width;
                                            g[g.length - 1] + i + a.padding >= n.width && ((p += s + a.padding), (g[g.length] = n.left)), (c[e] = { left: 0, top: 0, width: i, height: s }), (g[g.length - 1] += i + a.padding);
                                        }),
                                        (h.height += p);
                                } else {
                                    var m = a.padding,
                                        v = (n.columnWidths = []),
                                        b = a.padding,
                                        x = 0,
                                        y = 0,
                                        k = s + m;
                                    D.each(n.legendItems, function (t, e) {
                                        var i = P(a, s) + s / 2 + o.measureText(t.text).width;
                                        y + k > h.height && ((b += x + a.padding), v.push(x), (y = x = 0)), (x = Math.max(x, i)), (y += k), (c[e] = { left: 0, top: 0, width: i, height: s });
                                    }),
                                        (b += x),
                                        v.push(x),
                                        (h.width += b);
                                }
                            (n.width = h.width), (n.height = h.height);
                        },
                        afterFit: o,
                        isHorizontal: function () {
                            return "top" === this.options.position || "bottom" === this.options.position;
                        },
                        draw: function () {
                            var c = this,
                                h = c.options,
                                f = h.labels,
                                g = _.global,
                                p = g.elements.line,
                                m = c.width,
                                v = c.lineWidths;
                            if (h.display) {
                                var b,
                                    x = c.ctx,
                                    y = D.valueOrDefault,
                                    t = y(f.fontColor, g.defaultFontColor),
                                    k = y(f.fontSize, g.defaultFontSize),
                                    e = y(f.fontStyle, g.defaultFontStyle),
                                    i = y(f.fontFamily, g.defaultFontFamily),
                                    n = D.fontString(k, e, i);
                                (x.textAlign = "left"), (x.textBaseline = "middle"), (x.lineWidth = 0.5), (x.strokeStyle = t), (x.fillStyle = t), (x.font = n);
                                var M = P(f, k),
                                    w = c.legendHitBoxes,
                                    C = c.isHorizontal();
                                b = C ? { x: c.left + (m - v[0]) / 2, y: c.top + f.padding, line: 0 } : { x: c.left + f.padding, y: c.top + f.padding, line: 0 };
                                var S = k + f.padding;
                                D.each(c.legendItems, function (t, e) {
                                    var i,
                                        n,
                                        a,
                                        o,
                                        r,
                                        s = x.measureText(t.text).width,
                                        l = M + k / 2 + s,
                                        u = b.x,
                                        d = b.y;
                                    C ? m <= u + l && ((d = b.y += S), b.line++, (u = b.x = c.left + (m - v[b.line]) / 2)) : d + S > c.bottom && ((u = b.x = u + c.columnWidths[b.line] + f.padding), (d = b.y = c.top + f.padding), b.line++),
                                        (function (t, e, i) {
                                            if (!(isNaN(M) || M <= 0)) {
                                                x.save(),
                                                    (x.fillStyle = y(i.fillStyle, g.defaultColor)),
                                                    (x.lineCap = y(i.lineCap, p.borderCapStyle)),
                                                    (x.lineDashOffset = y(i.lineDashOffset, p.borderDashOffset)),
                                                    (x.lineJoin = y(i.lineJoin, p.borderJoinStyle)),
                                                    (x.lineWidth = y(i.lineWidth, p.borderWidth)),
                                                    (x.strokeStyle = y(i.strokeStyle, g.defaultColor));
                                                var n = 0 === y(i.lineWidth, p.borderWidth);
                                                if ((x.setLineDash && x.setLineDash(y(i.lineDash, p.borderDash)), h.labels && h.labels.usePointStyle)) {
                                                    var a = (k * Math.SQRT2) / 2,
                                                        o = a / Math.SQRT2,
                                                        r = t + o,
                                                        s = e + o;
                                                    D.canvas.drawPoint(x, i.pointStyle, a, r, s);
                                                } else n || x.strokeRect(t, e, M, k), x.fillRect(t, e, M, k);
                                                x.restore();
                                            }
                                        })(u, d, t),
                                        (w[e].left = u),
                                        (w[e].top = d),
                                        (i = t),
                                        (n = s),
                                        (o = M + (a = k / 2) + u),
                                        (r = d + a),
                                        x.fillText(i.text, o, r),
                                        i.hidden && (x.beginPath(), (x.lineWidth = 2), x.moveTo(o, r), x.lineTo(o + n, r), x.stroke()),
                                        C ? (b.x += l + f.padding) : (b.y += S);
                                });
                            }
                        },
                        handleEvent: function (t) {
                            var e = this,
                                i = e.options,
                                n = "mouseup" === t.type ? "click" : t.type,
                                a = !1;
                            if ("mousemove" === n) {
                                if (!i.onHover) return;
                            } else {
                                if ("click" !== n) return;
                                if (!i.onClick) return;
                            }
                            var o = t.x,
                                r = t.y;
                            if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                                for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                    var u = s[l];
                                    if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                        if ("click" === n) {
                                            i.onClick.call(e, t.native, e.legendItems[l]), (a = !0);
                                            break;
                                        }
                                        if ("mousemove" === n) {
                                            i.onHover.call(e, t.native, e.legendItems[l]), (a = !0);
                                            break;
                                        }
                                    }
                                }
                            return a;
                        },
                    });
                    function s(t, e) {
                        var i = new r({ ctx: t.ctx, options: e, chart: t });
                        a.configure(t, i, e), a.addBox(t, i), (t.legend = i);
                    }
                    e.exports = {
                        id: "legend",
                        _element: r,
                        beforeInit: function (t) {
                            var e = t.options.legend;
                            e && s(t, e);
                        },
                        beforeUpdate: function (t) {
                            var e = t.options.legend,
                                i = t.legend;
                            e ? (D.mergeIf(e, _.global.legend), i ? (a.configure(t, i, e), (i.options = e)) : s(t, e)) : i && (a.removeBox(t, i), delete t.legend);
                        },
                        afterEvent: function (t, e) {
                            var i = t.legend;
                            i && i.handleEvent(e);
                        },
                    };
                },
                { 26: 26, 27: 27, 31: 31, 46: 46 },
            ],
            53: [
                function (t, e, i) {
                    "use strict";
                    var M = t(26),
                        n = t(27),
                        w = t(46),
                        a = t(31),
                        o = w.noop;
                    M._set("global", { title: { display: !1, fontStyle: "bold", fullWidth: !0, lineHeight: 1.2, padding: 10, position: "top", text: "", weight: 2e3 } });
                    var r = n.extend({
                        initialize: function (t) {
                            w.extend(this, t), (this.legendHitBoxes = []);
                        },
                        beforeUpdate: o,
                        update: function (t, e, i) {
                            var n = this;
                            return (
                                n.beforeUpdate(),
                                (n.maxWidth = t),
                                (n.maxHeight = e),
                                (n.margins = i),
                                n.beforeSetDimensions(),
                                n.setDimensions(),
                                n.afterSetDimensions(),
                                n.beforeBuildLabels(),
                                n.buildLabels(),
                                n.afterBuildLabels(),
                                n.beforeFit(),
                                n.fit(),
                                n.afterFit(),
                                n.afterUpdate(),
                                n.minSize
                            );
                        },
                        afterUpdate: o,
                        beforeSetDimensions: o,
                        setDimensions: function () {
                            var t = this;
                            t.isHorizontal() ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width)) : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
                                (t.paddingLeft = 0),
                                (t.paddingTop = 0),
                                (t.paddingRight = 0),
                                (t.paddingBottom = 0),
                                (t.minSize = { width: 0, height: 0 });
                        },
                        afterSetDimensions: o,
                        beforeBuildLabels: o,
                        buildLabels: o,
                        afterBuildLabels: o,
                        beforeFit: o,
                        fit: function () {
                            var t = this,
                                e = w.valueOrDefault,
                                i = t.options,
                                n = i.display,
                                a = e(i.fontSize, M.global.defaultFontSize),
                                o = t.minSize,
                                r = w.isArray(i.text) ? i.text.length : 1,
                                s = w.options.toLineHeight(i.lineHeight, a),
                                l = n ? r * s + 2 * i.padding : 0;
                            t.isHorizontal() ? ((o.width = t.maxWidth), (o.height = l)) : ((o.width = l), (o.height = t.maxHeight)), (t.width = o.width), (t.height = o.height);
                        },
                        afterFit: o,
                        isHorizontal: function () {
                            var t = this.options.position;
                            return "top" === t || "bottom" === t;
                        },
                        draw: function () {
                            var t = this,
                                e = t.ctx,
                                i = w.valueOrDefault,
                                n = t.options,
                                a = M.global;
                            if (n.display) {
                                var o,
                                    r,
                                    s,
                                    l = i(n.fontSize, a.defaultFontSize),
                                    u = i(n.fontStyle, a.defaultFontStyle),
                                    d = i(n.fontFamily, a.defaultFontFamily),
                                    c = w.fontString(l, u, d),
                                    h = w.options.toLineHeight(n.lineHeight, l),
                                    f = h / 2 + n.padding,
                                    g = 0,
                                    p = t.top,
                                    m = t.left,
                                    v = t.bottom,
                                    b = t.right;
                                (e.fillStyle = i(n.fontColor, a.defaultFontColor)),
                                    (e.font = c),
                                    t.isHorizontal()
                                        ? ((r = m + (b - m) / 2), (s = p + f), (o = b - m))
                                        : ((r = "left" === n.position ? m + f : b - f), (s = p + (v - p) / 2), (o = v - p), (g = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
                                    e.save(),
                                    e.translate(r, s),
                                    e.rotate(g),
                                    (e.textAlign = "center"),
                                    (e.textBaseline = "middle");
                                var x = n.text;
                                if (w.isArray(x)) for (var y = 0, k = 0; k < x.length; ++k) e.fillText(x[k], 0, y, o), (y += h);
                                else e.fillText(x, 0, 0, o);
                                e.restore();
                            }
                        },
                    });
                    function s(t, e) {
                        var i = new r({ ctx: t.ctx, options: e, chart: t });
                        a.configure(t, i, e), a.addBox(t, i), (t.titleBlock = i);
                    }
                    e.exports = {
                        id: "title",
                        _element: r,
                        beforeInit: function (t) {
                            var e = t.options.title;
                            e && s(t, e);
                        },
                        beforeUpdate: function (t) {
                            var e = t.options.title,
                                i = t.titleBlock;
                            e ? (w.mergeIf(e, M.global.title), i ? (a.configure(t, i, e), (i.options = e)) : s(t, e)) : i && (a.removeBox(t, i), delete t.titleBlock);
                        },
                    };
                },
                { 26: 26, 27: 27, 31: 31, 46: 46 },
            ],
            54: [
                function (t, e, i) {
                    "use strict";
                    var n = t(33),
                        a = t(34);
                    e.exports = function () {
                        var t = n.extend({
                            getLabels: function () {
                                var t = this.chart.data;
                                return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
                            },
                            determineDataLimits: function () {
                                var t,
                                    e = this,
                                    i = e.getLabels();
                                (e.minIndex = 0),
                                    (e.maxIndex = i.length - 1),
                                    void 0 !== e.options.ticks.min && ((t = i.indexOf(e.options.ticks.min)), (e.minIndex = -1 !== t ? t : e.minIndex)),
                                    void 0 !== e.options.ticks.max && ((t = i.indexOf(e.options.ticks.max)), (e.maxIndex = -1 !== t ? t : e.maxIndex)),
                                    (e.min = i[e.minIndex]),
                                    (e.max = i[e.maxIndex]);
                            },
                            buildTicks: function () {
                                var t = this,
                                    e = t.getLabels();
                                t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
                            },
                            getLabelForIndex: function (t, e) {
                                var i = this,
                                    n = i.chart.data,
                                    a = i.isHorizontal();
                                return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex];
                            },
                            getPixelForValue: function (t, e) {
                                var i,
                                    n = this,
                                    a = n.options.offset,
                                    o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                                if ((null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || (void 0 !== t && isNaN(e)))) {
                                    t = i || t;
                                    var r = n.getLabels().indexOf(t);
                                    e = -1 !== r ? r : e;
                                }
                                if (n.isHorizontal()) {
                                    var s = n.width / o,
                                        l = s * (e - n.minIndex);
                                    return a && (l += s / 2), n.left + Math.round(l);
                                }
                                var u = n.height / o,
                                    d = u * (e - n.minIndex);
                                return a && (d += u / 2), n.top + Math.round(d);
                            },
                            getPixelForTick: function (t) {
                                return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
                            },
                            getValueForPixel: function (t) {
                                var e = this,
                                    i = e.options.offset,
                                    n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                    a = e.isHorizontal(),
                                    o = (a ? e.width : e.height) / n;
                                return (t -= a ? e.left : e.top), i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
                            },
                            getBasePixel: function () {
                                return this.bottom;
                            },
                        });
                        a.registerScaleType("category", t, { position: "bottom" });
                    };
                },
                { 33: 33, 34: 34 },
            ],
            55: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        c = t(46),
                        a = t(34),
                        o = t(35);
                    e.exports = function (t) {
                        var e = { position: "left", ticks: { callback: o.formatters.linear } },
                            i = t.LinearScaleBase.extend({
                                determineDataLimits: function () {
                                    var r = this,
                                        s = r.options,
                                        l = r.chart,
                                        t = l.data.datasets,
                                        e = r.isHorizontal();
                                    function u(t) {
                                        return e ? t.xAxisID === r.id : t.yAxisID === r.id;
                                    }
                                    (r.min = null), (r.max = null);
                                    var n = s.stacked;
                                    if (
                                        (void 0 === n &&
                                            c.each(t, function (t, e) {
                                                if (!n) {
                                                    var i = l.getDatasetMeta(e);
                                                    l.isDatasetVisible(e) && u(i) && void 0 !== i.stack && (n = !0);
                                                }
                                            }),
                                            s.stacked || n)
                                    ) {
                                        var d = {};
                                        c.each(t, function (t, e) {
                                            var n = l.getDatasetMeta(e),
                                                i = [n.type, void 0 === s.stacked && void 0 === n.stack ? e : "", n.stack].join(".");
                                            void 0 === d[i] && (d[i] = { positiveValues: [], negativeValues: [] });
                                            var a = d[i].positiveValues,
                                                o = d[i].negativeValues;
                                            l.isDatasetVisible(e) &&
                                                u(n) &&
                                                c.each(t.data, function (t, e) {
                                                    var i = +r.getRightValue(t);
                                                    isNaN(i) || n.data[e].hidden || ((a[e] = a[e] || 0), (o[e] = o[e] || 0), s.relativePoints ? (a[e] = 100) : i < 0 ? (o[e] += i) : (a[e] += i));
                                                });
                                        }),
                                            c.each(d, function (t) {
                                                var e = t.positiveValues.concat(t.negativeValues),
                                                    i = c.min(e),
                                                    n = c.max(e);
                                                (r.min = null === r.min ? i : Math.min(r.min, i)), (r.max = null === r.max ? n : Math.max(r.max, n));
                                            });
                                    } else
                                        c.each(t, function (t, e) {
                                            var n = l.getDatasetMeta(e);
                                            l.isDatasetVisible(e) &&
                                                u(n) &&
                                                c.each(t.data, function (t, e) {
                                                    var i = +r.getRightValue(t);
                                                    isNaN(i) || n.data[e].hidden || (null === r.min ? (r.min = i) : i < r.min && (r.min = i), null === r.max ? (r.max = i) : i > r.max && (r.max = i));
                                                });
                                        });
                                    (r.min = isFinite(r.min) && !isNaN(r.min) ? r.min : 0), (r.max = isFinite(r.max) && !isNaN(r.max) ? r.max : 1), this.handleTickRangeOptions();
                                },
                                getTickLimit: function () {
                                    var t,
                                        e = this.options.ticks;
                                    if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                                    else {
                                        var i = c.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                        t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)));
                                    }
                                    return t;
                                },
                                handleDirectionalChanges: function () {
                                    this.isHorizontal() || this.ticks.reverse();
                                },
                                getLabelForIndex: function (t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t]);
                                },
                                getPixelForValue: function (t) {
                                    var e = this,
                                        i = e.start,
                                        n = +e.getRightValue(t),
                                        a = e.end - i;
                                    return e.isHorizontal() ? e.left + (e.width / a) * (n - i) : e.bottom - (e.height / a) * (n - i);
                                },
                                getValueForPixel: function (t) {
                                    var e = this,
                                        i = e.isHorizontal(),
                                        n = i ? e.width : e.height,
                                        a = (i ? t - e.left : e.bottom - t) / n;
                                    return e.start + (e.end - e.start) * a;
                                },
                                getPixelForTick: function (t) {
                                    return this.getPixelForValue(this.ticksAsNumbers[t]);
                                },
                            });
                        a.registerScaleType("linear", i, e);
                    };
                },
                { 26: 26, 34: 34, 35: 35, 46: 46 },
            ],
            56: [
                function (t, e, i) {
                    "use strict";
                    var c = t(46),
                        n = t(33);
                    e.exports = function (t) {
                        var e = c.noop;
                        t.LinearScaleBase = n.extend({
                            getRightValue: function (t) {
                                return "string" == typeof t ? +t : n.prototype.getRightValue.call(this, t);
                            },
                            handleTickRangeOptions: function () {
                                var t = this,
                                    e = t.options.ticks;
                                if (e.beginAtZero) {
                                    var i = c.sign(t.min),
                                        n = c.sign(t.max);
                                    i < 0 && n < 0 ? (t.max = 0) : 0 < i && 0 < n && (t.min = 0);
                                }
                                var a = void 0 !== e.min || void 0 !== e.suggestedMin,
                                    o = void 0 !== e.max || void 0 !== e.suggestedMax;
                                void 0 !== e.min ? (t.min = e.min) : void 0 !== e.suggestedMin && (null === t.min ? (t.min = e.suggestedMin) : (t.min = Math.min(t.min, e.suggestedMin))),
                                    void 0 !== e.max ? (t.max = e.max) : void 0 !== e.suggestedMax && (null === t.max ? (t.max = e.suggestedMax) : (t.max = Math.max(t.max, e.suggestedMax))),
                                    a !== o && t.min >= t.max && (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
                                    t.min === t.max && (t.max++, e.beginAtZero || t.min--);
                            },
                            getTickLimit: e,
                            handleDirectionalChanges: e,
                            buildTicks: function () {
                                var t = this,
                                    e = t.options.ticks,
                                    i = t.getTickLimit(),
                                    n = { maxTicks: (i = Math.max(2, i)), min: e.min, max: e.max, precision: e.precision, stepSize: c.valueOrDefault(e.fixedStepSize, e.stepSize) },
                                    a = (t.ticks = (function (t, e) {
                                        var i,
                                            n,
                                            a,
                                            o = [];
                                        if (t.stepSize && 0 < t.stepSize) a = t.stepSize;
                                        else {
                                            var r = c.niceNum(e.max - e.min, !1);
                                            (a = c.niceNum(r / (t.maxTicks - 1), !0)), void 0 !== (n = t.precision) && ((i = Math.pow(10, n)), (a = Math.ceil(a * i) / i));
                                        }
                                        var s = Math.floor(e.min / a) * a,
                                            l = Math.ceil(e.max / a) * a;
                                        c.isNullOrUndef(t.min) || c.isNullOrUndef(t.max) || !t.stepSize || (c.almostWhole((t.max - t.min) / t.stepSize, a / 1e3) && ((s = t.min), (l = t.max)));
                                        var u = (l - s) / a;
                                        (u = c.almostEquals(u, Math.round(u), a / 1e3) ? Math.round(u) : Math.ceil(u)),
                                            a < (n = 1) && ((n = Math.pow(10, 1 - Math.floor(c.log10(a)))), (s = Math.round(s * n) / n), (l = Math.round(l * n) / n)),
                                            o.push(void 0 !== t.min ? t.min : s);
                                        for (var d = 1; d < u; ++d) o.push(Math.round((s + d * a) * n) / n);
                                        return o.push(void 0 !== t.max ? t.max : l), o;
                                    })(n, t));
                                t.handleDirectionalChanges(), (t.max = c.max(a)), (t.min = c.min(a)), e.reverse ? (a.reverse(), (t.start = t.max), (t.end = t.min)) : ((t.start = t.min), (t.end = t.max));
                            },
                            convertTicksToLabels: function () {
                                var t = this;
                                (t.ticksAsNumbers = t.ticks.slice()), (t.zeroLineIndex = t.ticks.indexOf(0)), n.prototype.convertTicksToLabels.call(t);
                            },
                        });
                    };
                },
                { 33: 33, 46: 46 },
            ],
            57: [
                function (t, e, i) {
                    "use strict";
                    var h = t(46),
                        n = t(33),
                        a = t(34),
                        o = t(35);
                    e.exports = function (c) {
                        var t = { position: "left", ticks: { callback: o.formatters.logarithmic } },
                            e = n.extend({
                                determineDataLimits: function () {
                                    var r = this,
                                        i = r.options,
                                        s = r.chart,
                                        t = s.data.datasets,
                                        e = r.isHorizontal();
                                    function l(t) {
                                        return e ? t.xAxisID === r.id : t.yAxisID === r.id;
                                    }
                                    (r.min = null), (r.max = null), (r.minNotZero = null);
                                    var n = i.stacked;
                                    if (
                                        (void 0 === n &&
                                            h.each(t, function (t, e) {
                                                if (!n) {
                                                    var i = s.getDatasetMeta(e);
                                                    s.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (n = !0);
                                                }
                                            }),
                                            i.stacked || n)
                                    ) {
                                        var u = {};
                                        h.each(t, function (t, e) {
                                            var a = s.getDatasetMeta(e),
                                                o = [a.type, void 0 === i.stacked && void 0 === a.stack ? e : "", a.stack].join(".");
                                            s.isDatasetVisible(e) &&
                                                l(a) &&
                                                (void 0 === u[o] && (u[o] = []),
                                                    h.each(t.data, function (t, e) {
                                                        var i = u[o],
                                                            n = +r.getRightValue(t);
                                                        isNaN(n) || a.data[e].hidden || n < 0 || ((i[e] = i[e] || 0), (i[e] += n));
                                                    }));
                                        }),
                                            h.each(u, function (t) {
                                                if (0 < t.length) {
                                                    var e = h.min(t),
                                                        i = h.max(t);
                                                    (r.min = null === r.min ? e : Math.min(r.min, e)), (r.max = null === r.max ? i : Math.max(r.max, i));
                                                }
                                            });
                                    } else
                                        h.each(t, function (t, e) {
                                            var n = s.getDatasetMeta(e);
                                            s.isDatasetVisible(e) &&
                                                l(n) &&
                                                h.each(t.data, function (t, e) {
                                                    var i = +r.getRightValue(t);
                                                    isNaN(i) ||
                                                        n.data[e].hidden ||
                                                        i < 0 ||
                                                        (null === r.min ? (r.min = i) : i < r.min && (r.min = i),
                                                            null === r.max ? (r.max = i) : i > r.max && (r.max = i),
                                                            0 !== i && (null === r.minNotZero || i < r.minNotZero) && (r.minNotZero = i));
                                                });
                                        });
                                    this.handleTickRangeOptions();
                                },
                                handleTickRangeOptions: function () {
                                    var t = this,
                                        e = t.options.ticks,
                                        i = h.valueOrDefault;
                                    (t.min = i(e.min, t.min)),
                                        (t.max = i(e.max, t.max)),
                                        t.min === t.max && (0 !== t.min && null !== t.min ? ((t.min = Math.pow(10, Math.floor(h.log10(t.min)) - 1)), (t.max = Math.pow(10, Math.floor(h.log10(t.max)) + 1))) : ((t.min = 1), (t.max = 10))),
                                        null === t.min && (t.min = Math.pow(10, Math.floor(h.log10(t.max)) - 1)),
                                        null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(h.log10(t.min)) + 1) : 10),
                                        null === t.minNotZero && (0 < t.min ? (t.minNotZero = t.min) : t.max < 1 ? (t.minNotZero = Math.pow(10, Math.floor(h.log10(t.max)))) : (t.minNotZero = 1));
                                },
                                buildTicks: function () {
                                    var t = this,
                                        e = t.options.ticks,
                                        i = !t.isHorizontal(),
                                        n = { min: e.min, max: e.max },
                                        a = (t.ticks = (function (t, e) {
                                            var i,
                                                n,
                                                a = [],
                                                o = h.valueOrDefault,
                                                r = o(t.min, Math.pow(10, Math.floor(h.log10(e.min)))),
                                                s = Math.floor(h.log10(e.max)),
                                                l = Math.ceil(e.max / Math.pow(10, s));
                                            0 === r
                                                ? ((i = Math.floor(h.log10(e.minNotZero))), (n = Math.floor(e.minNotZero / Math.pow(10, i))), a.push(r), (r = n * Math.pow(10, i)))
                                                : ((i = Math.floor(h.log10(r))), (n = Math.floor(r / Math.pow(10, i))));
                                            for (var u = i < 0 ? Math.pow(10, Math.abs(i)) : 1; a.push(r), 10 == ++n && ((n = 1), (u = 0 <= ++i ? 1 : u)), (r = Math.round(n * Math.pow(10, i) * u) / u), i < s || (i === s && n < l););
                                            var d = o(t.max, r);
                                            return a.push(d), a;
                                        })(n, t));
                                    (t.max = h.max(a)), (t.min = h.min(a)), e.reverse ? ((i = !i), (t.start = t.max), (t.end = t.min)) : ((t.start = t.min), (t.end = t.max)), i && a.reverse();
                                },
                                convertTicksToLabels: function () {
                                    (this.tickValues = this.ticks.slice()), n.prototype.convertTicksToLabels.call(this);
                                },
                                getLabelForIndex: function (t, e) {
                                    return +this.getRightValue(this.chart.data.datasets[e].data[t]);
                                },
                                getPixelForTick: function (t) {
                                    return this.getPixelForValue(this.tickValues[t]);
                                },
                                _getFirstTickValue: function (t) {
                                    var e = Math.floor(h.log10(t));
                                    return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
                                },
                                getPixelForValue: function (t) {
                                    var e,
                                        i,
                                        n,
                                        a,
                                        o,
                                        r = this,
                                        s = r.options.ticks.reverse,
                                        l = h.log10,
                                        u = r._getFirstTickValue(r.minNotZero),
                                        d = 0;
                                    return (
                                        (t = +r.getRightValue(t)),
                                        (o = s ? ((n = r.end), (a = r.start), -1) : ((n = r.start), (a = r.end), 1)),
                                        (i = r.isHorizontal() ? ((e = r.width), s ? r.right : r.left) : ((e = r.height), (o *= -1), s ? r.top : r.bottom)),
                                        t !== n && (0 === n && ((e -= d = h.getValueOrDefault(r.options.ticks.fontSize, c.defaults.global.defaultFontSize)), (n = u)), 0 !== t && (d += (e / (l(a) - l(n))) * (l(t) - l(n))), (i += o * d)),
                                        i
                                    );
                                },
                                getValueForPixel: function (t) {
                                    var e,
                                        i,
                                        n,
                                        a,
                                        o = this,
                                        r = o.options.ticks.reverse,
                                        s = h.log10,
                                        l = o._getFirstTickValue(o.minNotZero);
                                    if (((n = r ? ((i = o.end), o.start) : ((i = o.start), o.end)), (a = o.isHorizontal() ? ((e = o.width), r ? o.right - t : t - o.left) : ((e = o.height), r ? t - o.top : o.bottom - t)) !== i)) {
                                        if (0 === i) {
                                            var u = h.getValueOrDefault(o.options.ticks.fontSize, c.defaults.global.defaultFontSize);
                                            (a -= u), (e -= u), (i = l);
                                        }
                                        (a *= s(n) - s(i)), (a /= e), (a = Math.pow(10, s(i) + a));
                                    }
                                    return a;
                                },
                            });
                        a.registerScaleType("logarithmic", e, t);
                    };
                },
                { 33: 33, 34: 34, 35: 35, 46: 46 },
            ],
            58: [
                function (t, e, i) {
                    "use strict";
                    var n = t(26),
                        k = t(46),
                        a = t(34),
                        o = t(35);
                    e.exports = function (e) {
                        var v = n.global,
                            t = {
                                display: !0,
                                animate: !0,
                                position: "chartArea",
                                angleLines: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1 },
                                gridLines: { circular: !1 },
                                ticks: { showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: o.formatters.linear },
                                pointLabels: {
                                    display: !0,
                                    fontSize: 10,
                                    callback: function (t) {
                                        return t;
                                    },
                                },
                            };
                        function b(t) {
                            var e = t.options;
                            return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
                        }
                        function x(t) {
                            var e = t.options.pointLabels,
                                i = k.valueOrDefault(e.fontSize, v.defaultFontSize),
                                n = k.valueOrDefault(e.fontStyle, v.defaultFontStyle),
                                a = k.valueOrDefault(e.fontFamily, v.defaultFontFamily);
                            return { size: i, style: n, family: a, font: k.fontString(i, n, a) };
                        }
                        function m(t, e, i, n, a) {
                            return t === n || t === a ? { start: e - i / 2, end: e + i / 2 } : t < n || a < t ? { start: e - i - 5, end: e } : { start: e, end: e + i + 5 };
                        }
                        function y(t, e, i, n) {
                            if (k.isArray(e)) for (var a = i.y, o = 1.5 * n, r = 0; r < e.length; ++r) t.fillText(e[r], i.x, a), (a += o);
                            else t.fillText(e, i.x, i.y);
                        }
                        function s(t) {
                            return k.isNumber(t) ? t : 0;
                        }
                        var i = e.LinearScaleBase.extend({
                            setDimensions: function () {
                                var t = this,
                                    e = t.options,
                                    i = e.ticks;
                                (t.width = t.maxWidth), (t.height = t.maxHeight), (t.xCenter = Math.round(t.width / 2)), (t.yCenter = Math.round(t.height / 2));
                                var n = k.min([t.height, t.width]),
                                    a = k.valueOrDefault(i.fontSize, v.defaultFontSize);
                                t.drawingArea = e.display ? n / 2 - (a / 2 + i.backdropPaddingY) : n / 2;
                            },
                            determineDataLimits: function () {
                                var a = this,
                                    i = a.chart,
                                    o = Number.POSITIVE_INFINITY,
                                    r = Number.NEGATIVE_INFINITY;
                                k.each(i.data.datasets, function (t, e) {
                                    if (i.isDatasetVisible(e)) {
                                        var n = i.getDatasetMeta(e);
                                        k.each(t.data, function (t, e) {
                                            var i = +a.getRightValue(t);
                                            isNaN(i) || n.data[e].hidden || ((o = Math.min(i, o)), (r = Math.max(i, r)));
                                        });
                                    }
                                }),
                                    (a.min = o === Number.POSITIVE_INFINITY ? 0 : o),
                                    (a.max = r === Number.NEGATIVE_INFINITY ? 0 : r),
                                    a.handleTickRangeOptions();
                            },
                            getTickLimit: function () {
                                var t = this.options.ticks,
                                    e = k.valueOrDefault(t.fontSize, v.defaultFontSize);
                                return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
                            },
                            convertTicksToLabels: function () {
                                var t = this;
                                e.LinearScaleBase.prototype.convertTicksToLabels.call(t), (t.pointLabels = t.chart.data.labels.map(t.options.pointLabels.callback, t));
                            },
                            getLabelForIndex: function (t, e) {
                                return +this.getRightValue(this.chart.data.datasets[e].data[t]);
                            },
                            fit: function () {
                                var t, e;
                                this.options.pointLabels.display
                                    ? (function (t) {
                                        var e,
                                            i,
                                            n,
                                            a = x(t),
                                            o = Math.min(t.height / 2, t.width / 2),
                                            r = { r: t.width, l: 0, t: t.height, b: 0 },
                                            s = {};
                                        (t.ctx.font = a.font), (t._pointLabelSizes = []);
                                        var l,
                                            u,
                                            d,
                                            c = b(t);
                                        for (e = 0; e < c; e++) {
                                            (n = t.getPointPosition(e, o)),
                                                (l = t.ctx),
                                                (u = a.size),
                                                (d = t.pointLabels[e] || ""),
                                                (i = k.isArray(d) ? { w: k.longestText(l, l.font, d), h: d.length * u + 1.5 * (d.length - 1) * u } : { w: l.measureText(d).width, h: u }),
                                                (t._pointLabelSizes[e] = i);
                                            var h = t.getIndexAngle(e),
                                                f = k.toDegrees(h) % 360,
                                                g = m(f, n.x, i.w, 0, 180),
                                                p = m(f, n.y, i.h, 90, 270);
                                            g.start < r.l && ((r.l = g.start), (s.l = h)), g.end > r.r && ((r.r = g.end), (s.r = h)), p.start < r.t && ((r.t = p.start), (s.t = h)), p.end > r.b && ((r.b = p.end), (s.b = h));
                                        }
                                        t.setReductions(o, r, s);
                                    })(this)
                                    : ((t = this), (e = Math.min(t.height / 2, t.width / 2)), (t.drawingArea = Math.round(e)), t.setCenterPoint(0, 0, 0, 0));
                            },
                            setReductions: function (t, e, i) {
                                var n = e.l / Math.sin(i.l),
                                    a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                                    o = -e.t / Math.cos(i.t),
                                    r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                                (n = s(n)), (a = s(a)), (o = s(o)), (r = s(r)), (this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2))), this.setCenterPoint(n, a, o, r);
                            },
                            setCenterPoint: function (t, e, i, n) {
                                var a = this,
                                    o = a.width - e - a.drawingArea,
                                    r = t + a.drawingArea,
                                    s = i + a.drawingArea,
                                    l = a.height - n - a.drawingArea;
                                (a.xCenter = Math.round((r + o) / 2 + a.left)), (a.yCenter = Math.round((s + l) / 2 + a.top));
                            },
                            getIndexAngle: function (t) {
                                return t * ((2 * Math.PI) / b(this)) + ((this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2) / 360;
                            },
                            getDistanceFromCenterForValue: function (t) {
                                var e = this;
                                if (null === t) return 0;
                                var i = e.drawingArea / (e.max - e.min);
                                return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i;
                            },
                            getPointPosition: function (t, e) {
                                var i = this.getIndexAngle(t) - Math.PI / 2;
                                return { x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter };
                            },
                            getPointPositionForValue: function (t, e) {
                                return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
                            },
                            getBasePosition: function () {
                                var t = this.min,
                                    e = this.max;
                                return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0);
                            },
                            draw: function () {
                                var o = this,
                                    t = o.options,
                                    r = t.gridLines,
                                    s = t.ticks,
                                    l = k.valueOrDefault;
                                if (t.display) {
                                    var u = o.ctx,
                                        d = this.getIndexAngle(0),
                                        c = l(s.fontSize, v.defaultFontSize),
                                        e = l(s.fontStyle, v.defaultFontStyle),
                                        i = l(s.fontFamily, v.defaultFontFamily),
                                        h = k.fontString(c, e, i);
                                    k.each(o.ticks, function (t, e) {
                                        if (0 < e || s.reverse) {
                                            var i = o.getDistanceFromCenterForValue(o.ticksAsNumbers[e]);
                                            if (
                                                (r.display &&
                                                    0 !== e &&
                                                    (function (t, e, i, n) {
                                                        var a = t.ctx;
                                                        if (((a.strokeStyle = k.valueAtIndexOrDefault(e.color, n - 1)), (a.lineWidth = k.valueAtIndexOrDefault(e.lineWidth, n - 1)), t.options.gridLines.circular))
                                                            a.beginPath(), a.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                                        else {
                                                            var o = b(t);
                                                            if (0 === o) return;
                                                            a.beginPath();
                                                            var r = t.getPointPosition(0, i);
                                                            a.moveTo(r.x, r.y);
                                                            for (var s = 1; s < o; s++) (r = t.getPointPosition(s, i)), a.lineTo(r.x, r.y);
                                                            a.closePath(), a.stroke();
                                                        }
                                                    })(o, r, i, e),
                                                    s.display)
                                            ) {
                                                var n = l(s.fontColor, v.defaultFontColor);
                                                if (((u.font = h), u.save(), u.translate(o.xCenter, o.yCenter), u.rotate(d), s.showLabelBackdrop)) {
                                                    var a = u.measureText(t).width;
                                                    (u.fillStyle = s.backdropColor), u.fillRect(-a / 2 - s.backdropPaddingX, -i - c / 2 - s.backdropPaddingY, a + 2 * s.backdropPaddingX, c + 2 * s.backdropPaddingY);
                                                }
                                                (u.textAlign = "center"), (u.textBaseline = "middle"), (u.fillStyle = n), u.fillText(t, 0, -i), u.restore();
                                            }
                                        }
                                    }),
                                        (t.angleLines.display || t.pointLabels.display) &&
                                        (function (t) {
                                            var e = t.ctx,
                                                i = t.options,
                                                n = i.angleLines,
                                                a = i.pointLabels;
                                            (e.lineWidth = n.lineWidth), (e.strokeStyle = n.color);
                                            var o,
                                                r,
                                                s,
                                                l,
                                                u = t.getDistanceFromCenterForValue(i.ticks.reverse ? t.min : t.max),
                                                d = x(t);
                                            e.textBaseline = "top";
                                            for (var c = b(t) - 1; 0 <= c; c--) {
                                                if (n.display) {
                                                    var h = t.getPointPosition(c, u);
                                                    e.beginPath(), e.moveTo(t.xCenter, t.yCenter), e.lineTo(h.x, h.y), e.stroke(), e.closePath();
                                                }
                                                if (a.display) {
                                                    var f = t.getPointPosition(c, u + 5),
                                                        g = k.valueAtIndexOrDefault(a.fontColor, c, v.defaultFontColor);
                                                    (e.font = d.font), (e.fillStyle = g);
                                                    var p = t.getIndexAngle(c),
                                                        m = k.toDegrees(p);
                                                    (e.textAlign = 0 === (l = m) || 180 === l ? "center" : l < 180 ? "left" : "right"),
                                                        (o = m),
                                                        (r = t._pointLabelSizes[c]),
                                                        (s = f),
                                                        90 === o || 270 === o ? (s.y -= r.h / 2) : (270 < o || o < 90) && (s.y -= r.h),
                                                        y(e, t.pointLabels[c] || "", f, d.size);
                                                }
                                            }
                                        })(o);
                                }
                            },
                        });
                        a.registerScaleType("radialLinear", i, t);
                    };
                },
                { 26: 26, 34: 34, 35: 35, 46: 46 },
            ],
            59: [
                function (t, e, i) {
                    "use strict";
                    var x = t(1);
                    x = "function" == typeof x ? x : window.moment;
                    var r = t(26),
                        m = t(46),
                        n = t(33),
                        a = t(34),
                        p = Number.MIN_SAFE_INTEGER || -9007199254740991,
                        v = Number.MAX_SAFE_INTEGER || 9007199254740991,
                        y = {
                            millisecond: { common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500] },
                            second: { common: !0, size: 1e3, steps: [1, 2, 5, 10, 15, 30] },
                            minute: { common: !0, size: 6e4, steps: [1, 2, 5, 10, 15, 30] },
                            hour: { common: !0, size: 36e5, steps: [1, 2, 3, 6, 12] },
                            day: { common: !0, size: 864e5, steps: [1, 2, 5] },
                            week: { common: !1, size: 6048e5, steps: [1, 2, 3, 4] },
                            month: { common: !0, size: 2628e6, steps: [1, 2, 3] },
                            quarter: { common: !1, size: 7884e6, steps: [1, 2, 3, 4] },
                            year: { common: !0, size: 3154e7 },
                        },
                        k = Object.keys(y);
                    function b(t, e) {
                        return t - e;
                    }
                    function M(t) {
                        var e,
                            i,
                            n,
                            a = {},
                            o = [];
                        for (e = 0, i = t.length; e < i; ++e) a[(n = t[e])] || ((a[n] = !0), o.push(n));
                        return o;
                    }
                    function w(t, e, i, n) {
                        var a = (function (t, e, i) {
                            for (var n, a, o, r = 0, s = t.length - 1; 0 <= r && r <= s;) {
                                if (((a = t[(n = (r + s) >> 1) - 1] || null), (o = t[n]), !a)) return { lo: null, hi: o };
                                if (o[e] < i) r = n + 1;
                                else {
                                    if (!(a[e] > i)) return { lo: a, hi: o };
                                    s = n - 1;
                                }
                            }
                            return { lo: o, hi: null };
                        })(t, e, i),
                            o = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
                            r = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
                            s = r[e] - o[e],
                            l = s ? (i - o[e]) / s : 0,
                            u = (r[n] - o[n]) * l;
                        return o[n] + u;
                    }
                    function C(t, e) {
                        var i = e.parser,
                            n = e.parser || e.format;
                        return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof n ? x(t, n) : (t instanceof x || (t = x(t)), t.isValid() ? t : "function" == typeof n ? n(t) : t);
                    }
                    function S(t, e) {
                        if (m.isNullOrUndef(t)) return null;
                        var i = e.options.time,
                            n = C(e.getRightValue(t), i);
                        return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null;
                    }
                    function _(t) {
                        for (var e = k.indexOf(t) + 1, i = k.length; e < i; ++e) if (y[k[e]].common) return k[e];
                    }
                    function D(t, e, i, n) {
                        var a,
                            o = n.time,
                            r =
                                o.unit ||
                                (function (t, e, i, n) {
                                    var a,
                                        o,
                                        r,
                                        s = k.length;
                                    for (a = k.indexOf(t); a < s - 1; ++a) if (((r = (o = y[k[a]]).steps ? o.steps[o.steps.length - 1] : v), o.common && Math.ceil((i - e) / (r * o.size)) <= n)) return k[a];
                                    return k[s - 1];
                                })(o.minUnit, t, e, i),
                            s = _(r),
                            l = m.valueOrDefault(o.stepSize, o.unitStepSize),
                            u = "week" === r && o.isoWeekday,
                            d = n.ticks.major.enabled,
                            c = y[r],
                            h = x(t),
                            f = x(e),
                            g = [];
                        for (
                            l ||
                            (l = (function (t, e, i, n) {
                                var a,
                                    o,
                                    r,
                                    s = e - t,
                                    l = y[i],
                                    u = l.size,
                                    d = l.steps;
                                if (!d) return Math.ceil(s / (n * u));
                                for (a = 0, o = d.length; a < o && ((r = d[a]), !(Math.ceil(s / (u * r)) <= n)); ++a);
                                return r;
                            })(t, e, r, i)),
                            u && ((h = h.isoWeekday(u)), (f = f.isoWeekday(u))),
                            h = h.startOf(u ? "day" : r),
                            (f = f.startOf(u ? "day" : r)) < e && f.add(1, r),
                            a = x(h),
                            d && s && !u && !o.round && (a.startOf(s), a.add(~~((h - a) / (c.size * l)) * l, r));
                            a < f;
                            a.add(l, r)
                        )
                            g.push(+a);
                        return g.push(+a), g;
                    }
                    e.exports = function () {
                        var t = n.extend({
                            initialize: function () {
                                if (!x) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                                this.mergeTicksOptions(), n.prototype.initialize.call(this);
                            },
                            update: function () {
                                var t = this.options;
                                return t.time && t.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), n.prototype.update.apply(this, arguments);
                            },
                            getRightValue: function (t) {
                                return t && void 0 !== t.t && (t = t.t), n.prototype.getRightValue.call(this, t);
                            },
                            determineDataLimits: function () {
                                var t,
                                    e,
                                    i,
                                    n,
                                    a,
                                    o,
                                    r = this,
                                    s = r.chart,
                                    l = r.options.time,
                                    u = l.unit || "day",
                                    d = v,
                                    c = p,
                                    h = [],
                                    f = [],
                                    g = [];
                                for (t = 0, i = s.data.labels.length; t < i; ++t) g.push(S(s.data.labels[t], r));
                                for (t = 0, i = (s.data.datasets || []).length; t < i; ++t)
                                    if (s.isDatasetVisible(t))
                                        if (((a = s.data.datasets[t].data), m.isObject(a[0]))) for (f[t] = [], e = 0, n = a.length; e < n; ++e) (o = S(a[e], r)), h.push(o), (f[t][e] = o);
                                        else h.push.apply(h, g), (f[t] = g.slice(0));
                                    else f[t] = [];
                                g.length && ((g = M(g).sort(b)), (d = Math.min(d, g[0])), (c = Math.max(c, g[g.length - 1]))),
                                    h.length && ((h = M(h).sort(b)), (d = Math.min(d, h[0])), (c = Math.max(c, h[h.length - 1]))),
                                    (d = S(l.min, r) || d),
                                    (c = S(l.max, r) || c),
                                    (d = d === v ? +x().startOf(u) : d),
                                    (c = c === p ? +x().endOf(u) + 1 : c),
                                    (r.min = Math.min(d, c)),
                                    (r.max = Math.max(d + 1, c)),
                                    (r._horizontal = r.isHorizontal()),
                                    (r._table = []),
                                    (r._timestamps = { data: h, datasets: f, labels: g });
                            },
                            buildTicks: function () {
                                var t,
                                    e,
                                    i,
                                    n,
                                    a,
                                    o,
                                    r,
                                    s,
                                    l,
                                    u,
                                    d,
                                    c,
                                    h = this,
                                    f = h.min,
                                    g = h.max,
                                    p = h.options,
                                    m = p.time,
                                    v = [],
                                    b = [];
                                switch (p.ticks.source) {
                                    case "data":
                                        v = h._timestamps.data;
                                        break;
                                    case "labels":
                                        v = h._timestamps.labels;
                                        break;
                                    case "auto":
                                    default:
                                        v = D(f, g, h.getLabelCapacity(f), p);
                                }
                                for ("ticks" === p.bounds && v.length && ((f = v[0]), (g = v[v.length - 1])), f = S(m.min, h) || f, g = S(m.max, h) || g, t = 0, e = v.length; t < e; ++t) f <= (i = v[t]) && i <= g && b.push(i);
                                return (
                                    (h.min = f),
                                    (h.max = g),
                                    (h._unit =
                                        m.unit ||
                                        (function (t, e, i, n) {
                                            var a,
                                                o,
                                                r = x.duration(x(n).diff(x(i)));
                                            for (a = k.length - 1; a >= k.indexOf(e); a--) if (((o = k[a]), y[o].common && r.as(o) >= t.length)) return o;
                                            return k[e ? k.indexOf(e) : 0];
                                        })(b, m.minUnit, h.min, h.max)),
                                    (h._majorUnit = _(h._unit)),
                                    (h._table = (function (t, e, i, n) {
                                        if ("linear" === n || !t.length)
                                            return [
                                                { time: e, pos: 0 },
                                                { time: i, pos: 1 },
                                            ];
                                        var a,
                                            o,
                                            r,
                                            s,
                                            l,
                                            u = [],
                                            d = [e];
                                        for (a = 0, o = t.length; a < o; ++a) e < (s = t[a]) && s < i && d.push(s);
                                        for (d.push(i), a = 0, o = d.length; a < o; ++a) (l = d[a + 1]), (r = d[a - 1]), (s = d[a]), (void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s) || u.push({ time: s, pos: a / (o - 1) });
                                        return u;
                                    })(h._timestamps.data, f, g, p.distribution)),
                                    (h._offsets =
                                        ((n = h._table),
                                            (a = b),
                                            (o = f),
                                            (r = g),
                                            (c = d = 0),
                                            (s = p).offset &&
                                            a.length &&
                                            (s.time.min || ((l = 1 < a.length ? a[1] : r), (u = a[0]), (d = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2)),
                                                s.time.max || ((l = a[a.length - 1]), (u = 1 < a.length ? a[a.length - 2] : o), (c = (w(n, "time", l, "pos") - w(n, "time", u, "pos")) / 2))),
                                            { left: d, right: c })),
                                    (h._labelFormat = (function (t, e) {
                                        var i,
                                            n,
                                            a,
                                            o = t.length;
                                        for (i = 0; i < o; i++) {
                                            if (0 !== (n = C(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                            (0 === n.second() && 0 === n.minute() && 0 === n.hour()) || (a = !0);
                                        }
                                        return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY";
                                    })(h._timestamps.data, m)),
                                    (function (t, e) {
                                        var i,
                                            n,
                                            a,
                                            o,
                                            r = [];
                                        for (i = 0, n = t.length; i < n; ++i) (a = t[i]), (o = !!e && a === +x(a).startOf(e)), r.push({ value: a, major: o });
                                        return r;
                                    })(b, h._majorUnit)
                                );
                            },
                            getLabelForIndex: function (t, e) {
                                var i = this.chart.data,
                                    n = this.options.time,
                                    a = i.labels && t < i.labels.length ? i.labels[t] : "",
                                    o = i.datasets[e].data[t];
                                return m.isObject(o) && (a = this.getRightValue(o)), n.tooltipFormat ? C(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : C(a, n).format(this._labelFormat);
                            },
                            tickFormatFunction: function (t, e, i, n) {
                                var a = this.options,
                                    o = t.valueOf(),
                                    r = a.time.displayFormats,
                                    s = r[this._unit],
                                    l = this._majorUnit,
                                    u = r[l],
                                    d = t.clone().startOf(l).valueOf(),
                                    c = a.ticks.major,
                                    h = c.enabled && l && u && o === d,
                                    f = t.format(n || (h ? u : s)),
                                    g = h ? c : a.ticks.minor,
                                    p = m.valueOrDefault(g.callback, g.userCallback);
                                return p ? p(f, e, i) : f;
                            },
                            convertTicksToLabels: function (t) {
                                var e,
                                    i,
                                    n = [];
                                for (e = 0, i = t.length; e < i; ++e) n.push(this.tickFormatFunction(x(t[e].value), e, t));
                                return n;
                            },
                            getPixelForOffset: function (t) {
                                var e = this,
                                    i = e._horizontal ? e.width : e.height,
                                    n = e._horizontal ? e.left : e.top,
                                    a = w(e._table, "time", t, "pos");
                                return n + (i * (e._offsets.left + a)) / (e._offsets.left + 1 + e._offsets.right);
                            },
                            getPixelForValue: function (t, e, i) {
                                var n = null;
                                if ((void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = S(t, this)), null !== n)) return this.getPixelForOffset(n);
                            },
                            getPixelForTick: function (t) {
                                var e = this.getTicks();
                                return 0 <= t && t < e.length ? this.getPixelForOffset(e[t].value) : null;
                            },
                            getValueForPixel: function (t) {
                                var e = this,
                                    i = e._horizontal ? e.width : e.height,
                                    n = e._horizontal ? e.left : e.top,
                                    a = (i ? (t - n) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                                    o = w(e._table, "pos", a, "time");
                                return x(o);
                            },
                            getLabelWidth: function (t) {
                                var e = this.options.ticks,
                                    i = this.ctx.measureText(t).width,
                                    n = m.toRadians(e.maxRotation),
                                    a = Math.cos(n),
                                    o = Math.sin(n);
                                return i * a + m.valueOrDefault(e.fontSize, r.global.defaultFontSize) * o;
                            },
                            getLabelCapacity: function (t) {
                                var e = this.options.time.displayFormats.millisecond,
                                    i = this.tickFormatFunction(x(t), 0, [], e),
                                    n = this.getLabelWidth(i),
                                    a = this.isHorizontal() ? this.width : this.height,
                                    o = Math.floor(a / n);
                                return 0 < o ? o : 1;
                            },
                        });
                        a.registerScaleType("time", t, {
                            position: "bottom",
                            distribution: "linear",
                            bounds: "data",
                            time: {
                                parser: !1,
                                format: !1,
                                unit: !1,
                                round: !1,
                                displayFormat: !1,
                                isoWeekday: !1,
                                minUnit: "millisecond",
                                displayFormats: { millisecond: "h:mm:ss.SSS a", second: "h:mm:ss a", minute: "h:mm a", hour: "hA", day: "MMM D", week: "ll", month: "MMM YYYY", quarter: "[Q]Q - YYYY", year: "YYYY" },
                            },
                            ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } },
                        });
                    };
                },
                { 1: 1, 26: 26, 33: 33, 34: 34, 46: 46 },
            ],
        },
        {},
        [7]
    )(7);
});
