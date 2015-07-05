 /**
* This file is part of Qunee for HTML5.
* Copyright (c) 2015 by qunee.com
**/
window.Q = function(t, i, n) {
    "use strict";
    function e(t, i, n) {
        if (t[Ah]()) {
            var s = t._f5 || t[Nh]();
            if (s) {
                s = s._j0 || s;
                for (var h = 0, r = s[zh]; r > h; h++)
                    if (i[Bh](n, s[h]) === !1 || e(s[h], i, n) === !1)
                        return !1;
                return !0
            }
        }
    }
    function s(t) {
        if (!t[Ah]())
            return t instanceof uR ? t : null;
        for (var i, n = t._f5._j0, e = n[zh] - 1; e >= 0; ) {
            if (i = n[e], i = s(i))
                return i;
            e--
        }
        return null
    }
    function h(t, i, n, e) {
        return e ? r(t, i, n) : f(t, i, n)
    }
    function r(t, i, n) {
        t = t._j0 || t;
        for (var e, s = 0, h = t[zh]; h > s; s++)
            if (e = t[s], e[Ah]() && !r(e[Dh], i, n) || i[Bh](n, e) === !1)
                return !1;
        return !0
    }
    function f(t, i, n) {
        t = t._j0 || t;
        for (var e, s = 0, h = t[zh]; h > s; s++)
            if (e = t[s], i[Bh](n, e) === !1 || e[Ah]() && !f(e[Dh], i, n))
                return !1;
        return !0
    }
    function a(t, i, n, e) {
        return e ? _(t, i, n) : c(t, i, n)
    }
    function _(t, i, n) {
        t = t._j0 || t;
        for (var e, s = t[zh], h = s - 1; h >= 0; h--)
            if (e = t[h], e[Ah]() && !_(e[Dh], i, n) || i[Bh](n, e) === !1)
                return !1;
        return !0
    }
    function c(t, i, n) {
        t = t._j0 || t;
        for (var e, s = t[zh], h = s - 1; h >= 0; h--)
            if (e = t[h], i[Bh](n, e) === !1 || e[Ah]() && !c(e[Dh], i, n))
                return !1;
        return !0
    }
    function u(t, i, n) {
        for (var e, s = (t._j0 || t)[qh](0); s[zh]; ) {
            e = s[0], s = s[Rh](1);
            var h = i[Bh](n, e);
            if (h === !1)
                return !1;
            if (e[Ah]()) {
                var r = e[Dh];
                r = r._j0 || r, s = s[Lh](r)
            }
        }
        return !0
    }
    function o(t, i, n) {
        for (var e, s = (t._j0 || t)[qh](0); s[zh]; ) {
            e = s[s[zh] - 1], s = s[Rh](0, s[zh] - 1);
            var h = i[Bh](n, e);
            if (h === !1)
                return !1;
            if (e[Ah]()) {
                var r = e[Dh];
                r = r._j0 || r, s = s[Lh](r)
            }
        }
        return !0
    }
    function d(t, i) {
        function n(t, n) {
            for (var e = t[zh], s = n[zh], h = e + s, r = new Array(h), f = 0, a = 0, _ = 0; h > _; )
                r[_++] = f === e ? n[a++] : a === s || i(t[f], n[a]) <= 0 ? t[f++] : n[a++];
            return r
        }
        function e(t) {
            var i = t[zh], s = Math[Gh](i / 2);
            return 1 >= i ? t : n(e(t[qh](0, s)), e(t[qh](s)))
        }
        return e(t)
    }
    function l(t, i, n, e) {
        t instanceof mB && (t = t._j0);
        for (var s = 0, h = (t._j0 || t)[zh]; h > s; s++) {
            var r = i[Bh](n, t[s], s, e);
            if (r === !1)
                return !1
        }
        return !0
    }
    function b(t, i, n) {
        for (var e = t instanceof mB, s = t._j0 || t, h = 0, r = s[zh]; r > h; h++) {
            var f = s[h];
            i[Bh](n, f) && (e ? t[Yh](f) : t[Rh](h, 1), h--, r--)
        }
    }
    function v(t, i, n, e) {
        t instanceof mB && (t = t._j0);
        for (var s = (t._j0 || t)[zh] - 1; s >= 0; s--) {
            var h = i[Bh](n, t[s], s, e);
            if (h === !1)
                return !1
        }
        return !0
    }
    function y(t) {
        if (t[Hh] instanceof Function)
            return t[Hh](!0);
        var i, n = [];
        return l(t, function(t) {
            i = t && t[Hh] instanceof Function ? t[Hh]() : t, n[Xh](i)
        }, this), n
    }
    function x(t, i, e) {
        e === n || 0 > e ? t[Xh](i) : t[Rh](e, 0, i)
    }
    function g(t, i) {
        var n = t[Wh](i);
        return 0 > n || n >= t[zh] ? !1 : t[Rh](n, 1)
    }
    function m(t, i) {
        var n = !1;
        return l(t, function(t) {
            return i == t ? (n = !0, !1) : void 0
        }), n
    }
    function w(t, i, n) {
        return i instanceof Object ? t = L(i, t) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
    }
    function k(i, n) {
        return n && (i = L(n, i)), t[Vh](i)
    }
    function p(t, i) {
        return t[Uh] = i, t
    }
    function j(t, i) {
        if (!t.hasOwnProperty(Qh)) {
            var n = t[Jh](Zh);
            if (!n)
                return p(t, i);
            for (var e = n[Kh](tr), s = 0, h = e[zh]; h > s; s++)
                if (e[s] == i)
                    return;
            return n += tr + i, p(t, n)
        }
        t[Qh][ir](i)
    }
    function M(t, i) {
        if (!t.hasOwnProperty(Qh)) {
            var n = t[Jh](Zh);
            if (!n || !n[Wh](i))
                return;
            for (var e = "", s = n[Kh](tr), h = 0, r = s[zh]; r > h; h++)
                s[h] != i && (e += s[h] + tr);
            return p(t, e)
        }
        t[Qh][Yh](i)
    }
    function E(t) {
        return t instanceof Number || nr == typeof t
    }
    function S(t) {
        return t !== n && (t instanceof String || er == typeof t)
    }
    function P(t) {
        return t !== n && (t instanceof Boolean || sr == typeof t)
    }
    function I(t) {
        return Array[hr](t)
    }
    function C(i) {
        i || (i = t[rr]), i[fr] ? i[fr]() : i[ar] = !1
    }
    function T(i) {
        i || (i = t[rr]), i[_r] ? i[_r]() : i[cr] || (i[cr] = !0)
    }
    function O(t) {
        C(t), T(t)
    }
    function $(t) {
        return Math[ur](Math[or]() * t)
    }
    function F() {
        return Math[or]() >= .5
    }
    function A(t, i) {
        var n = t;
        for (var e in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(e), h = i.__lookupSetter__(e);
                s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
            } else
                n[e] = i[e];
        return n
    }
    function N(t, i, n) {
        if (!(t instanceof Function))
            throw new Error("subclass must be type of Function");
        var e = null;
        dr == typeof i && (e = i, i = t, t = function() {
            i[lr](this, arguments)
        });
        var s = t[br], h = function() {
        };
        return h[br] = i[br], t[br] = new h, t[vr] = i[br], t[vr].constructor = i, A(t[br], s), e && A(t[br], e), n && A(t[br], n), t[br][Zh] = t, t
    }
    function z(t, i, n) {
        return B(t, i, "constructor", n)
    }
    function B(t, i, n, e) {
        var s = i[vr];
        if (s) {
            var h = s[n];
            return h ? h[lr](t, e) : void 0
        }
    }
    function D(t) {
        return t[yr](4)
    }
    function q(t) {
        delete t[xr], delete t[gr]
    }
    function R(t, i) {
        t[i] && (q(t[i]), delete t[i])
    }
    function L(t, i) {
        var n = function() {
            return n[gr][lr](n[xr], arguments)
        };
        return n[gr] = i, n[xr] = t, n
    }
    function G(t, i) {
        return t == i
    }
    function Y(t, i, e, s, h) {
        if (s)
            return void Object[mr](t, i, {value: e,enumerable: !0});
        var r = {configurable: !0,enumerable: !0}, f = wr + i;
        e !== n && (t[f] = e), r[kr] = function() {
            return this[f]
        }, r[pr] = function(t) {
            var n = this[f];
            if (G(n, t))
                return !1;
            var e = new DB(this, i, t, n);
            return this[jr](e) ? (this[f] = t, h && h[Bh](this, t, n), this[Mr](e), !0) : !1
        }, Object[mr](t, i, r)
    }
    function H(t, i) {
        for (var n = 0, e = i[zh]; e > n; n++) {
            var s = i[n];
            Y(t, s[Er] || s, s[Sr] || s[Pr], s[Ir], s[Cr])
        }
    }
    function X(t) {
        if (t && t > 0 && 1 > t) {
            var i = Math[ur](16777215 * Math[or]());
            return Tr + (i >> 16 & 255) + Or + (i >> 8 & 255) + Or + (255 & i) + Or + t[yr](2) + $r
        }
        return U(Math[ur](16777215 * Math[or]()))
    }
    function W(t) {
        return t > 0 ? Math[ur](t) : Math[Gh](t)
    }
    function V(t) {
        return t > 0 ? Math[Gh](t) : Math[ur](t)
    }
    function U(t) {
        return 16777216 > t ? Fr + (Ar + t.toString(16))[qh](-6) : Tr + (t >> 16 & 255) + Or + (t >> 8 & 255) + Or + (255 & t) + Or + ((t >> 24 & 255) / 255)[yr](2) + $r
    }
    function Q(t, i, n) {
        dr != typeof n || n.hasOwnProperty(Nr) || (n[Nr] = !0), Object[mr](t, i, n)
    }
    function J(t, i) {
        for (var n in i)
            if (zr != n[0]) {
                var e = i[n];
                dr != typeof e || e.hasOwnProperty(Nr) || (e[Nr] = !0)
            }
        Object[Br](t, i)
    }
    function Z(i, n) {
        n || (n = t);
        for (var e = i[Kh](Dr), s = 0, h = e[zh]; h > s; s++) {
            var r = e[s];
            n = n[r]
        }
        return n
    }
    function K(t) {
        return t instanceof MouseEvent || t instanceof Object && t[qr] !== n
    }
    function ti(t) {
        console[Rr](t)
    }
    function ii(t) {
        console[Lr](t)
    }
    function ni(t) {
        console[Gr](t)
    }
    function ei(t, i, n) {
        var e, s, h;
        0 == t._na ? (e = -1, h = 0, s = i) : 0 == t._nb ? (e = 0, h = 1, s = n) : (e = -1 / t._na, s = (t._na - e) * i + t._n8, h = 1);
        var r = new MB;
        return r._na = e, r._n8 = s, r._nb = h, r._n3 = i, r._n5 = n, r._ld = Math[Yr](e, h), r._nbos = Math[Hr](r._ld), r._sin = Math[Xr](r._ld), r
    }
    function si(t, i, n, e, s) {
        var h, r;
        i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
        var f, a;
        if (!h)
            return a = 0 > r ? t.y : t[Wr], {x: i,y: a};
        if (!r)
            return f = 0 > h ? t.x : t[Vr], {x: f,y: n};
        var _ = (n - s) / (i - e), c = n - _ * i, u = 0 > h ? i - t.x : i - t[Vr], o = 0 > r ? n - t.y : n - t[Wr];
        return Math[Ur](_) >= Math[Ur](o / u) ? (a = 0 > r ? t.y : t[Wr], f = (a - c) / _) : (f = 0 > h ? t.x : t[Vr], a = _ * f + c), {x: f,y: a}
    }
    function hi(t, i, n, e, s, h, r, f) {
        return 0 >= r || 0 >= f || 0 >= n || 0 >= e ? !1 : (r += s, f += h, n += t, e += i, (s > r || r > t) && (h > f || f > i) && (t > n || n > s) && (i > e || e > h))
    }
    function ri(t, i, n, e, s, h) {
        return s >= t && t + n >= s && h >= i && i + e >= h
    }
    function fi(t, i, n, e, s, h, r, f) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + f
    }
    function ai(t, i, e) {
        if (!t)
            return {x: 0,y: 0};
        if (t.x !== n)
            return {x: t.x,y: t.y};
        var s, h, r = t[Qr], f = t[Jr];
        switch (r) {
            case CB:
                s = 0;
                break;
            case OB:
                s = i;
                break;
            default:
                s = i / 2
        }
        switch (f) {
            case $B:
                h = 0;
                break;
            case AB:
                h = e;
                break;
            default:
                h = e / 2
        }
        return {x: s,y: h}
    }
    function _i(t, i, n) {
        t[Dh][ir](i, n), t[Zr](i, n)
    }
    function ci(t, i) {
        t._f5 && (t._f5[Yh](i), t[Kr](i))
    }
    function ui(t) {
        return t[tf](/^-ms-/, nf)[tf](/-([\da-z])/gi, function(t, i) {
            return i[ef]()
        })
    }
    function oi(t, i) {
        var n = t[sf];
        if (!n)
            return !1;
        var e, s;
        for (e in i)
            i.hasOwnProperty(e) && (s = nD(e)) && (n[s] = i[e]);
        return t
    }
    function di(t, i, n) {
        (i = nD(i)) && (t[sf][i] = n)
    }
    function li(t, i) {
        return tD ? tD[hf] ? void tD[hf](t + rf + i + ff, 0) : void (tD[af] && tD[af](t, i, 0)) : !1
    }
    function bi(i, n) {
        i[qr] && (i = i[_f] && i[_f][zh] ? i[_f][0] : i[qr][0]);
        var e = n[cf](), s = i[uf] || 0, h = i[of] || 0;
        return oB && cB && (t[df] && s == i[lf] && (s -= t[df]), t[bf] && h == i[vf] && (h -= t[bf])), {x: s - e[yf],y: h - e[xf]}
    }
    function vi(t, i) {
        return this[wr + i] = sD(t, i, function(t) {
            return mi[Bh](this, t, i)
        }, !1, this)
    }
    function yi(t) {
        var i = this;
        return t[gf] = function() {
            return i._l4[mf](t)
        }, t[wf] = function() {
            return i._l4[kf](t)
        }, t
    }
    function xi(t) {
        this.__nbancelClick || (this.__nblickEvent = t, this.__nblickTime ? this.__nblickTime++ : (this.__nblickTime = 1, setTimeout(L(this, function() {
            if (this.__nblickEvent) {
                var t = this.__nblickTime;
                this.__nblickTime = 0, 1 == t ? this._i1(this.__nblickEvent, pf) : t > 1 && this._i1(this.__nblickEvent, jf), this.__nblickEvent = null
            }
        }), xB[Mf])))
    }
    function gi(t) {
        if (t[qr]) {
            for (var i = t[qr], n = [], e = 0, s = i[zh]; s > e; e++) {
                var h = i[e];
                n[Xh]({pageX: h[lf],pageY: h[vf],clientX: h[uf],clientY: h[of]})
            }
            return {timeStamp: t[Ef],touches: n,scale: t[Sf]}
        }
        return {timeStamp: t[Ef],x: t[uf],y: t[of]}
    }
    function mi(t, i) {
        switch (t = yi[Bh](this, t), i) {
            case "touchstart":
                if (t[qr][zh] >= 2)
                    return this._9h = gi(t), this._d1[Pf](), void this._1m();
            case "mousedown":
                if (O(t), this._i1(t, If), this._d3 = t, this._9h = gi(t), t[Cf] || (this.__onLongPressFunction ? this.__longPressTimer && this._1m() : this.__onLongPressFunction = L(this, function() {
                    this.__longPressTimer = null, this._d3 && (this.__nbancelClick = !0, this._i1(this._d3, Tf))
                }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, xB[Of]), this.__nbancelClick = !1), oB)
                    return;
                return void (aD._nburrentInteractionSupport = this);
            case "touchend":
                if (!this._d3)
                    return;
                if (t[qr][zh])
                    return void (this._9h = gi(t));
                t[Ef] - this._d3[Ef] < 200 && xi[Bh](this, this._d3);
            case "touchcancel":
                if (!this._d3)
                    return;
                this._moving && (delete this._moving, this._i2(t));
            case "mouseup":
                return void this._dj(t);
            case "click":
                return void xi[Bh](this, t);
            case "mousewheel":
            case "DOMMouseScroll":
                return t[$f] = t[Ff] || -t[Af], this._i1(t, Nf);
            case "touchmove":
                var n = t[qr][zh];
                return this._moving || (this._moving = !0, 1 == n && this._di()), void this._j6(t)
        }
        return this._i1(t, zf + i)
    }
    function wi(t, i) {
        var n = wr + i;
        hD(t, i, this[n]), R(this, n)
    }
    function ki(i) {
        l(rD, function(t) {
            vi[Bh](this, i, t)
        }, this), oB || aD._nac || (aD._nac = !0, sD(t, Bf, function(t) {
            if (aD._nburrentInteractionSupport) {
                O(t);
                var i = aD._nburrentInteractionSupport;
                if (!aD._dragging) {
                    if (i._d3) {
                        var n = i._d3[Df] - t[Df], e = i._d3[qf] - t[qf];
                        if (4 > n * n + e * e)
                            return
                    }
                    aD._dragging = !0, i._di()
                }
                i._j6(t)
            }
        }, !0), sD(t, Rf, function(t) {
            var i = aD._nburrentInteractionSupport;
            delete aD._nburrentInteractionSupport, aD._dragging && (delete aD._dragging, C(t), t = yi[Bh](i, t), i._i2(t), i._dj(t))
        }, !0))
    }
    function pi(t) {
        l(rD, function(i) {
            wi[Bh](this, t, i)
        }, this), oB || (aD._nburrentInteractionSupport == this && (delete aD._dragging, delete aD._nburrentInteractionSupport), this._1m(), delete this._d3, delete this._9h)
    }
    function ji(t, i, n) {
        this._m7 = t, this._d1 = new Ei, ki[Bh](this, t), i && (this._listener = i), this._l7 = n
    }
    function Mi(t) {
        return uB && t[Lf] || !uB && t[Gf]
    }
    function Ei() {
        this[Yf] = []
    }
    function Si(t, i, n, e, s) {
        Ii(t, function(e) {
            if (i) {
                var s = e[Hf];
                if (!s)
                    return void (n || wD)(Xf + t + Wf);
                i(s)
            }
        }, n, e, s)
    }
    function Pi(t, i, n, e, s) {
        Ii(t, function(e) {
            if (i) {
                var s = e[Vf];
                if (!s)
                    return void (n || wD)(Xf + t + Uf);
                try {
                    s = JSON[Qf](s)
                } catch (h) {
                    return void (n || wD)(h)
                }
                i(s)
            }
        }, n, e, s)
    }
    function Ii(t, i, n, e, s) {
        try {
            var h = new XMLHttpRequest, r = encodeURI(t);
            if (s !== !1) {
                var f;
                f = r[Wh](Jf) > 0 ? "&" : Jf, r += f + Zf + Date[Kf]()
            }
            h[ta](ia, r), h[na] = function() {
                return 4 == h[ea] ? h[sa] && 200 != h[sa] ? void (n || wD)(Xf + t + ha) : void (i && i(h)) : void 0
            }, h[ra](e)
        } catch (a) {
            (n || wD)(Xf + t + ha, a)
        }
    }
    function hi(t, i, n, e, s, h, r, f) {
        return 0 >= r || 0 >= f || 0 >= n || 0 >= e ? !1 : (r += s, f += h, n += t, e += i, (s > r || r > t) && (h > f || f > i) && (t > n || n > s) && (i > e || e > h))
    }
    function fi(t, i, n, e, s, h, r, f) {
        return s >= t && h >= i && t + n >= s + r && i + e >= h + f
    }
    function Ci(t, i, n) {
        return t instanceof Object && t.x ? Oi(t, i, 0, 0) : Ti(t, i, n, 0, 0)
    }
    function Ti(t, i, n, e, s) {
        var h = Math[Xr](n), r = Math[Hr](n), f = t - e, a = i - s;
        return t = f * r - a * h + e, i = f * h + a * r + s, new pB(t, i, n)
    }
    function Oi(t, i, n, e) {
        n = n || 0, e = e || 0;
        var s = Math[Xr](i), h = Math[Hr](i), r = t.x - n, f = t.y - e;
        return t.x = r * h - f * s + n, t.y = r * s + f * h + e, t
    }
    function $i(t, i, n) {
        return Fi(t, i, n, 0, 0)
    }
    function Fi(t, i, n, e, s) {
        var h = Ti(t.x, t.y, i, e, s), r = Ci(t.x + t[fa], t.y, i, e, s), f = Ci(t.x + t[fa], t.y + t[aa], i, e, s), a = Ci(t.x, t.y + t[aa], i, e, s);
        return n ? n[Pf]() : n = new SB, n[_a](h), n[_a](r), n[_a](f), n[_a](a), n
    }
    function Ai(t, i) {
        var n = this[ca] || 1;
        this[sf][fa] = t + ua, this[sf][aa] = i + ua, this[fa] = t * n, this[aa] = i * n
    }
    function Ni() {
        this[oa][fa] = this[oa][fa]
    }
    function zi(t) {
        var i = t[da] || t[la] || t[ba] || t[va] || t[ya] || 1;
        return jD / i
    }
    function Bi(t, n, e) {
        var s = i[xa](oa);
        if (s.g = s[ga](ma), t !== !0 && !e)
            return t && n && (s[fa] = t, s[aa] = n), s;
        var h = s.g;
        return h[ca] = s[ca] = zi(h), s[wa] = Ai, h._ki = Ni, t && n && s[wa](t, n), s
    }
    function Di(t, i, e) {
        if (t === n || null === t)
            return {width: 0,height: 0};
        var s = qi();
        e = e || xB[ka], s[pa] != e && (s[pa] = e);
        for (var h = i * xB[ja], r = 0, f = 0, a = t[Kh](Ma), _ = 0, c = a[zh]; c > _; _++) {
            var u = a[_];
            r = Math[Ea](s[Sa](u)[fa], r), f += h
        }
        return {width: r,height: f}
    }
    function qi(t, i) {
        return MD || (MD = Bi()), t && i && (MD[fa] = t, MD[aa] = i), MD.g
    }
    function Ri(t) {
        return Math[Rr](t + Math[Pa](t * t + 1))
    }
    function Li(t, i) {
        i = i || t(1);
        var n = 1 / i, e = .5 * n, s = Math[Ia](1, i / 100);
        return function(h) {
            if (0 >= h)
                return 0;
            if (h >= i)
                return 1;
            for (var r = h * n, f = 0; f++ < 10; ) {
                var a = t(r), _ = h - a;
                if (Math[Ur](_) <= s)
                    return r;
                r += _ * e
            }
            return r
        }
    }
    function Gi(t, i, n) {
        var e = 1 - t, s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4], h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
        if (n) {
            var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0], f = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {x: s,y: h,rotate: Math[Yr](f, r)}
        }
        return {t: t,x: s,y: h}
    }
    function Yi(t, i, n) {
        var e = t - 2 * i + n;
        return 0 != e ? (t - i) / e : -1
    }
    function Hi(t, i) {
        i[ir](t[4], t[5]);
        var n = Yi(t[0], t[2], t[4]);
        if (n > 0 && 1 > n) {
            var e = Gi(n, t);
            i[ir](e.x, e.y)
        }
        var s = Yi(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var e = Gi(s, t);
            i[ir](e.x, e.y)
        }
        return i
    }
    function Xi(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0], n = t[1], e = t[4], s = t[5], h = Math[Pa](ED(i, n, e, s));
            return function(t) {
                return h * t
            }
        }
        var r = t[0], f = t[2], a = t[4], _ = r - 2 * f + a, c = 2 * f - 2 * r;
        r = t[1], f = t[3], a = t[5];
        var u = r - 2 * f + a, o = 2 * f - 2 * r, d = 4 * (_ * _ + u * u), l = 4 * (_ * c + u * o), b = c * c + o * o, h = 4 * d * b - l * l, v = 1 / h, y = .125 * Math[Ca](d, -1.5), x = 2 * Math[Pa](d), g = (h * Ri(l / Math[Pa](h)) + 2 * Math[Pa](d) * l * Math[Pa](b)) * y;
        return function(t) {
            var i = l + 2 * t * d, n = i / Math[Pa](h), e = i * i * v;
            return (h * Math[Rr](n + Math[Pa](e + 1)) + x * i * Math[Pa](b + t * l + t * t * d)) * y - g
        }
    }
    function Wi(t, i, n) {
        var e = 1 - t, s = i[0], h = i[2], r = i[4], f = i[6], a = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + f * t * t * t;
        if (n)
            var _ = 3 * t * t * f + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
        s = i[1], h = i[3], r = i[5], f = i[7];
        var c = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + f * t * t * t;
        if (n) {
            var u = 3 * t * t * f + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
            return {x: a,y: c,rotate: Math[Yr](u, _)}
        }
        return {x: a,y: c}
    }
    function Vi(t, i, n, e) {
        var s = -t + 3 * i - 3 * n + e;
        if (0 == s)
            return [(t - i) / (2 * n - 4 * i + 2 * t)];
        var h = 2 * t - 4 * i + 2 * n, r = i - t, f = h * h - 4 * s * r;
        return 0 > f ? void 0 : 0 == f ? [-h / (2 * s)] : (f = Math[Pa](f), [(f - h) / (2 * s), (-f - h) / (2 * s)])
    }
    function Ui(t, i) {
        i[ir](t[6], t[7]);
        var n = Vi(t[0], t[2], t[4], t[6]);
        if (n)
            for (var e = 0; e < n[zh]; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Wi(s, t);
                    i[ir](h.x, h.y)
                }
            }
        if (n = Vi(t[1], t[3], t[5], t[7]))
            for (var e = 0; e < n[zh]; e++) {
                var s = n[e];
                if (!(0 >= s || s >= 1)) {
                    var h = Wi(s, t);
                    i[ir](h.x, h.y)
                }
            }
    }
    function Qi(t) {
        var i = {x: t[0],y: t[1]}, n = {x: t[2],y: t[3]}, e = {x: t[4],y: t[5]}, s = {x: t[6],y: t[7]}, h = i.x - 0, r = i.y - 0, f = n.x - 0, a = n.y - 0, _ = e.x - 0, c = e.y - 0, u = s.x - 0, o = s.y - 0, d = 3 * (-h + 3 * f - 3 * _ + u), l = 6 * (h - 2 * f + _), b = 3 * (-h + f), v = 3 * (-r + 3 * a - 3 * c + o), y = 6 * (r - 2 * a + c), x = 3 * (-r + a), g = function(t) {
            var i = d * t * t + l * t + b, n = v * t * t + y * t + x;
            return Math[Pa](i * i + n * n)
        }, m = (g(0) + 4 * g(.5) + g(1)) / 6;
        return m
    }
    function Ji(t, i) {
        function n(t, i, n, e) {
            var s = -t + 3 * i - 3 * n + e, h = 2 * t - 4 * i + 2 * n, r = i - t;
            return function(t) {
                return 3 * (s * t * t + h * t + r)
            }
        }
        function e(t, i) {
            var n = s(t), e = h(t);
            return Math[Pa](n * n + e * e) * i
        }
        var s = n(t[0], t[2], t[4], t[6]), h = n(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var r = 1 / i;
        return function(t) {
            if (!t)
                return 0;
            for (var i, n = 0, s = 0; ; ) {
                if (i = n + r, i >= t)
                    return s += e(n, i - n);
                s += e(n, r), n = i
            }
        }
    }
    function Zi(t, i, n) {
        return ED(i, n, t.cx, t.cy) <= t._squareR + SD
    }
    function Ki(t, i, n, e) {
        return n = n || tn(t, i), new nn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
    }
    function tn(t, i) {
        return jB(t.x, t.y, i.x, i.y)
    }
    function nn(t, i, n, e, s, h, r) {
        this.cx = t, this.cy = i, this.r = n, this._squareR = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this._otherPoint = r
    }
    function en(t, i, n, e) {
        this.cx = t, this.cy = i, this[fa] = n, this[aa] = e
    }
    function sn(t) {
        var i = t[0], n = t[1], e = t[2], s = nn._jrCircle(i, n, e);
        return rn(t, i, n, e, s)
    }
    function hn(t, i) {
        i = i || fn(t);
        for (var n, e = i[fa] / i[aa], s = [], h = t[zh], r = 0; h > r; r++)
            n = t[r], s[Xh]({x: n.x,y: n.y * e});
        var f = sn(s);
        return f ? new en(f.cx, f.cy / e, 2 * f.r, 2 * f.r / e) : void 0
    }
    function rn(t, i, n, e, s) {
        for (var h, r, f = t[zh], a = s._squareR, _ = 0; f > _; _++)
            if (h = t[_], h != i && h != n && h != e) {
                var c = ED(s.cx, s.cy, h.x, h.y);
                c - SD > a && (a = c, r = h)
            }
        if (!r)
            return s;
        var u, o = nn._jrCircle(r, i, n), d = nn._jrCircle(r, i, e), l = nn._jrCircle(r, e, n);
        return Zi(o, e.x, e.y) && (u = o), Zi(d, n.x, n.y) && (!u || u.r > d.r) && (u = d), Zi(l, i.x, i.y) && (!u || u.r > l.r) && (u = l), i = u.p1, n = u.p2, e = u.p3 || u._otherPoint, rn(t, i, n, e, u)
    }
    function fn(t) {
        for (var i, n = t[zh], e = new SB, s = 0; n > s; s++)
            i = t[s], e[ir](i.x, i.y);
        return e
    }
    function an(t, i, n, e, s) {
        this._6f && this[Ta]();
        var h = s ? this[Oa](s) : this[$a], r = n / h[fa], f = t - r * h.x, a = e / h[aa], _ = i - a * h.y, c = this._f6, u = [];
        return l(c, function(t) {
            var i = t[Hh](), n = i[Yf];
            if (n && n[zh]) {
                for (var e = n[zh], s = [], h = 0; e > h; h++) {
                    var c = n[h];
                    h++;
                    var o = n[h];
                    c = r * c + f, o = a * o + _, s[Xh](c), s[Xh](o)
                }
                i[Yf] = s
            }
            u[Xh](i)
        }, this), new sq(u)
    }
    function _n(t, i, n, e, s, h) {
        if (s = s || 0, n = n || 0, !s && !h)
            return !1;
        if (!e) {
            var r = this[Oa](s);
            if (!r[Fa](t, i, n))
                return !1
        }
        var f = Math[Aa](2 * n) || 1, a = qi(f, f), _ = (a[oa], -t + n), c = -i + n;
        if (a[Na](1, 0, 0, 1, _, c), !a[za]) {
            this._lr(a), s && a[Ba](), h && a[Da]();
            for (var u = a[qa](0, 0, f, f)[Ra], o = u[zh] / 4; o > 0; ) {
                if (u[4 * o - 1] > eq)
                    return !0;
                --o
            }
            return !1
        }
        return a[La] = (s || 0) + 2 * n, this._lr(a), s && a[za](n, n) ? !0 : h ? a[Ga](n, n) : !1
    }
    function cn(t, i, n) {
        if (!this._it)
            return null;
        var e = this._f6;
        if (e[zh] < 2)
            return null;
        n === !1 && (t += this._it);
        var s = e[0];
        if (0 >= t)
            return As(s[Yf][0], s[Yf][1], e[1][Yf][0], e[1][Yf][1], t, i);
        if (t >= this._it) {
            s = e[e[zh] - 1];
            var h, r, f = s[Yf], a = f[zh], _ = f[a - 2], c = f[a - 1];
            if (a >= 4)
                h = f[a - 4], r = f[a - 3];
            else {
                s = e[e[zh] - 2];
                var u = s[Ya];
                h = u.x, r = u.y
            }
            return As(_, c, _ + _ - h, c + c - r, t - this._it, i)
        }
        for (var o, d = 0, l = 1, a = e[zh]; a > l; l++)
            if (o = e[l], o._it) {
                if (!(d + o._it < t)) {
                    var b, u = s[Ya];
                    if (o[Ha] == tq) {
                        var v = o[Yf];
                        b = un(t - d, o, u.x, u.y, v[0], v[1], v[2], v[3], o._r)
                    } else {
                        if (!o._lf)
                            return As(u.x, u.y, o[Yf][0], o[Yf][1], t - d, i);
                        var y = Li(o._lf, o._it)(t - d), v = o[Yf];
                        b = o[Ha] == KD && 6 == v[zh] ? Wi(y, [u.x, u.y][Lh](v), !0) : Gi(y, [u.x, u.y][Lh](v), !0)
                    }
                    return i && (b.x -= i * Math[Xr](b[Xa] || 0), b.y += i * Math[Hr](b[Xa] || 0)), b
                }
                d += o._it, s = o
            } else
                s = o
    }
    function un(t, i, n, e, s, h, r, f) {
        if (t <= i._l1)
            return As(n, e, s, h, t);
        if (t >= i._it)
            return t -= i._it, As(i._p2x, i._p2y, r, f, t);
        if (t -= i._l1, i._o) {
            var a = t / i._r;
            i._CCW && (a = -a);
            var _ = Ti(i._p1x, i._p1y, a, i._o.x, i._o.y);
            return _[Xa] += i._na1 || 0, _[Xa] += Math.PI, _
        }
        return As(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }
    function ei(t, i, n) {
        var e, s, h;
        0 == t._na ? (e = -1, h = 0, s = i) : 0 == t._nb ? (e = 0, h = 1, s = n) : (e = -1 / t._na, s = (t._na - e) * i + t._n8, h = 1);
        var r = new MB;
        return r._na = e, r._n8 = s, r._nb = h, r._n3 = i, r._n5 = n, r
    }
    function on(t) {
        return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
    }
    function dn(t, i, n, e, s, h, r, f) {
        var a = jB(i, n, e, s), _ = jB(e, s, h, r);
        if (!a || !_)
            return t._d = 0, t._r = 0, t._l1 = a, t._l2 = _, t._it = 0;
        var c = bn(e, s, i, n), u = bn(e, s, h, r);
        t._na1 = c, t._na2 = u;
        var o = c - u;
        o = on(o), o > Math.PI && (o = 2 * Math.PI - o, t._CCW = !0);
        var d = Math.PI - o, l = Math[Wa](o / 2), b = f / l, v = Math[Ia](a, _);
        b > v && (b = v, f = l * b);
        var y, x = e + Math[Hr](c) * b, g = s + Math[Xr](c) * b, m = e + Math[Hr](u) * b, w = s + Math[Xr](u) * b, k = new MB(i, n, e, s), p = new MB(e, s, h, r), j = ei(k, x, g), M = ei(p, m, w), E = j._3l(M), S = Math[Yr](g - E.y, x - E.x), P = Math[Yr](w - E.y, m - E.x);
        y = t._CCW ? P : S;
        for (var I, C = 0; 4 > C; ) {
            var T = C * wB;
            if (on(T - y) <= d) {
                var O, $;
                if (I ? I++ : I = 1, 0 == C ? (O = E.x + f, $ = E.y) : 1 == C ? (O = E.x, $ = E.y + f) : 2 == C ? (O = E.x - f, $ = E.y) : (O = E.x, $ = E.y - f), t[Va + I] = {x: O,y: $}, 2 == I)
                    break
            }
            C++
        }
        return t._p1x = x, t._p1y = g, t._p2x = m, t._p2y = w, t._o = E, t._d = b, t._r = f, t._l1 = a - b, t._l2 = _ - b, t._it = t._l1 + d * f
    }
    function ln(t, i, n, e, s, h, r) {
        var f = bn(n, e, t, i), a = bn(n, e, s, h), _ = f - a;
        return r ? _ : (0 > _ && (_ = -_), _ > Math.PI && (_ -= Math.PI), _)
    }
    function bn(t, i, n, e) {
        return Math[Yr](e - i, n - t)
    }
    function vn(t) {
        var i = ID[Ua](t);
        if (i)
            return i[1];
        var n = t[Qa](Dr);
        return n >= 0 && n < t[zh] - 1 ? t[Ja](n + 1) : void 0
    }
    function yn(t) {
        if (!t)
            return null;
        if (t instanceof sq)
            return ND;
        if (t[Za] instanceof Function)
            return AD;
        if (S(t)) {
            var i = vn(t);
            if (i) {
                if (!sB && CD[Ka](i))
                    return FD;
                if (TD[Ka](i))
                    return $D
            }
            return OD
        }
    }
    function xn(t, i, n) {
        if (this._lm = yn(t), !this._lm)
            throw new Error("the image format is not supported", t);
        this._ln = t, this._nae = i, this._8z = n, this[fa] = i || xB[t_], this[aa] = n || xB[i_], this._j1 = {}
    }
    function gn(t, i, n, e) {
        return i ? (qD[t] = new xn(i, n, e), t) : void delete qD[t]
    }
    function mn(t) {
        if (t._k4)
            return t._k4;
        var i = S(t);
        if (!i && !t[Er])
            return t._k4 = new xn(t);
        var n = t[Er] || t;
        return n in qD ? qD[n] : qD[n] = new xn(t)
    }
    function wn(t) {
        return t in qD
    }
    function kn(t, i, n) {
        n = n || {};
        var e = t[Oa](n[La]);
        if (!e[fa] || !e[aa])
            return !1;
        var s = i[ga](ma), h = i[ca] || 1, r = n[n_] || e_, f = /full/i[Ka](r), a = /uniform/i[Ka](r), _ = 1, c = 1;
        if (f) {
            var u = i[fa], o = i[aa], d = n[s_], l = 0, b = 0;
            if (d) {
                var v, y, x, g;
                E(d) ? v = y = x = g = d : (v = d[xf] || 0, y = d[Wr] || 0, x = d[yf] || 0, g = d[Vr] || 0), u -= x + g, o -= v + y, l += x, b += v
            }
            _ = u / e[fa], c = o / e[aa], a && (_ > c ? (l += (u - c * e[fa]) / 2, _ = c) : c > _ && (b += (o - _ * e[aa]) / 2, c = _)), (l || b) && s[h_](l, b)
        }
        s[h_](-e.x * _, -e.y * c), t[Za](s, h, n, _, c, !0)
    }
    function pn(t, i, n) {
        var e = mn(t);
        return e ? (e[Ta](), (e._lm == FD || e._6j()) && e._nal(function(t) {
            t[r_] && (this[fa] = this[fa], kn(t[r_], this, n))
        }, i), void kn(e, i, n)) : (kD[Gr](f_ + t), !1)
    }
    function jn(t) {
        var i = t[fa], n = t[aa];
        try {
            var e = t.g[qa](0, 0, i, n), s = e[Ra];
            return Mn(s, i, n)
        } catch (h) {
            kD[Gr](h)
        }
    }
    function Mn(t, i) {
        var n, e, s, h, r, f = t[zh], a = 0, _ = 0;
        for (r = 0; f > r; r += 4)
            if (t[r + 3] > 0) {
                n = (r + 4) / i / 4 | 0;
                break
            }
        for (r = f - 4; r >= 0; r -= 4)
            if (t[r + 3] > 0) {
                e = (r + 4) / i / 4 | 0;
                break
            }
        for (a = 0; i > a; a++) {
            for (_ = n; e > _; _++)
                if (t[_ * i * 4 + 4 * a + 3] > 0) {
                    s = a;
                    break
                }
            if (s >= 0)
                break
        }
        for (a = i - 1; a >= 0; a--) {
            for (_ = n; e > _; _++)
                if (t[_ * i * 4 + 4 * a + 3] > 0) {
                    h = a;
                    break
                }
            if (h >= 0)
                break
        }
        var c, u, o, d = [], l = [];
        for (a = s; h >= a; a++)
            for (o = [], d[Xh](o), _ = n; e >= _; _++)
                r = 4 * (_ * i + a), c = t[r + 3], c ? (u = {a: c,r: t[r],g: t[r + 1],b: t[r + 2]}, o[Xh](u), l[Xh](u.r), l[Xh](u.g), l[Xh](u.b), l[Xh](u.a)) : (o[Xh](null), l[Xh](0), l[Xh](0), l[Xh](0), l[Xh](0));
        return d._x = s, d._y = n, d._width = h - s + 1, d._height = e - n + 1, d._j8 = new SB(s, n, d._width, d._height), d._pixelSize = d._width * d._height, d
    }
    function En(t, i, n, e, s) {
        if (s = 1 | s, !s || 1 > s) {
            var h = t[n];
            return h ? h[e] : !1
        }
        var r = e - s, f = n - s;
        0 > r && (r = 0), 0 > f && (f = 0);
        var a = n + s, _ = e + s;
        for (a > i[fa] && (a = i[fa]), _ > i[aa] && (_ = i[aa]); a > f; ) {
            for (; _ > r; ) {
                if (t[f][r])
                    return !0;
                r++
            }
            f++
        }
        return !1
    }
    function Sn(t) {
        if (Fr == t[0]) {
            if (t = t[Ja](1), 3 == t[zh])
                t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
            else if (6 != t[zh])
                return;
            return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }
        if (/^rgb/i[Ka](t)) {
            var i = t[Wh](a_), n = t[Wh]($r);
            if (0 > i || i > n)
                return;
            if (t = t[Ja](i + 1, n), t = t[Kh](Or), t[zh] < 3)
                return;
            var e = parseInt(t[0]), s = parseInt(t[1]), h = parseInt(t[2]), r = 3 == t[zh] ? 255 : parseInt(t[3]);
            return [e, s, h, r]
        }
    }
    function Pn(t, i, n) {
        return n || (n = xB[__]), n == pD[c_] ? t * i : n == pD[u_] ? Math[Ia](t, i) : n == pD[o_] ? 1 - (1 - i) / t : n == pD[d_] ? t + i - 1 : n == pD[l_] ? Math[Ea](t, i) : n == pD[b_] ? t + i - t * i : i
    }
    function In(t, i, n) {
        var e = Sn(i), s = t.g[qa](0, 0, t[fa], t[aa]), h = s[Ra];
        if (n instanceof Function)
            h = n(t, h, e) || h;
        else {
            var r = e[0] / 255, f = e[1] / 255, a = e[2] / 255;
            if (n == pD[v_])
                for (var _ = 0, c = h[zh]; c > _; _ += 4) {
                    var u = 77 * h[_] + 151 * h[_ + 1] + 28 * h[_ + 2] >> 8;
                    h[_] = u * r | 0, h[_ + 1] = u * f | 0, h[_ + 2] = u * a | 0
                }
            else
                for (var _ = 0, c = h[zh]; c > _; _ += 4)
                    h[_] = 255 * Pn(r, h[_] / 255, n) | 0, h[_ + 1] = 255 * Pn(f, h[_ + 1] / 255, n) | 0, h[_ + 2] = 255 * Pn(a, h[_ + 2] / 255, n) | 0
        }
        var t = Bi(t[fa], t[aa]);
        return t.g[y_](s, 0, 0), t
    }
    function Cn(t, i, n, e) {
        return Tn(t - n, i - n, 2 * n, 2 * n, e)
    }
    function Tn(t, i, n, e, s) {
        n = Math[Aa](n) || 1, e = Math[Aa](e) || 1;
        var h = qi(n, e);
        h[Na](1, 0, 0, 1, -t, -i), s[Za](h);
        for (var r = h[qa](0, 0, n, e)[Ra], f = r[zh] / 4; f-- > 0; )
            if (r[4 * f - 1] > eq)
                return !0;
        return !1
    }
    function On(t, i, n, e, s, h) {
        t -= s.$x, i -= s.$y;
        var r = s._fi[x_](t, i, n, e);
        if (!r)
            return !1;
        t = r.x * h, i = r.y * h, n = r[fa] * h, e = r[aa] * h, n = Math[Aa](n) || 1, e = Math[Aa](e) || 1;
        var f = qi(), a = f[oa];
        a[fa] < n || a[aa] < e ? (a[fa] = n, a[aa] = e) : (f[Na](1, 0, 0, 1, 0, 0), f[g_](0, 0, n, e)), f[Na](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), f[Sf](h, h), s._je(f, 1);
        for (var _ = f[qa](0, 0, n, e)[Ra], c = _[zh] / 4; c-- > 0; )
            if (_[4 * c - 1] > eq)
                return !0;
        return !1
    }
    function $n(t, i, n, e, s, h, r, f, a) {
        if (ri(t, i, n, e, f, a))
            return null;
        var _, c, u, o = new nq(JD, [t + n - s, i]), d = new nq(ZD, [t + n, i, t + n, i + h]), l = new nq(JD, [t + n, i + e - h]), b = new nq(ZD, [t + n, i + e, t + n - s, i + e]), v = new nq(JD, [t + s, i + e]), y = new nq(ZD, [t, i + e, t, i + e - h]), x = new nq(JD, [t, i + h]), g = new nq(ZD, [t, i, t + s, i]), m = (new nq(iq), [o, d, l, b, v, y, x, g]), w = new SB(t + s, i + h, n - s - s, e - h - h);
        t > f ? (_ = CB, u = 5) : f > t + n ? (_ = OB, u = 1) : (_ = TB, u = 0), i > a ? (c = $B, _ == CB && (u = 7)) : a > i + e ? (c = AB, _ == OB ? u = 3 : _ == TB && (u = 4)) : (c = FB, _ == CB ? u = 6 : _ == OB && (u = 2));
        var k = Dn(u, t, i, n, e, s, h, r, f, a, w), p = k[0], j = k[1], M = new sq, E = M._f6;
        E[Xh](new nq(QD, [p.x, p.y])), E[Xh](new nq(JD, [f, a])), E[Xh](new nq(JD, [j.x, j.y])), j._mf && (E[Xh](j._mf), j._mfNO++);
        for (var S = j._mfNO % 8, P = p._mfNO; E[Xh](m[S]), ++S, S %= 8, S != P; )
            ;
        return p._mf && E[Xh](p._mf), M[m_](), M
    }
    function Fn(t, i, e, s, h, r, f, a, _, c, u, o, d, l) {
        var b = new MB(o, d, e, s), v = new MB(i[0], i[1], i[4], i[5]), y = v._3l(b, u), x = y[0], g = y[1];
        if (x._rest !== n) {
            x._mfNO = (t - 1) % 8, g._mfNO = (t + 1) % 8;
            var m = x._rest;
            7 == t ? (x.y = r + c + Math[Ia](l[aa], m), g.x = h + _ + Math[Ia](l[fa], m)) : 5 == t ? (x.x = h + _ + Math[Ia](l[fa], m), g.y = r + a - c - Math[Ia](l[aa], m)) : 3 == t ? (x.y = r + a - c - Math[Ia](l[aa], m), g.x = h + f - _ - Math[Ia](l[fa], m)) : 1 == t && (x.x = h + f - _ - Math[Ia](l[fa], m), g.y = r + c + Math[Ia](l[aa], m))
        } else {
            b._mr(b._n3, b._n5, x.x, x.y), x = b._$g(i), b._mr(b._n3, b._n5, g.x, g.y), g = b._$g(i);
            var w = qn(i, [x, g]), k = w[0], p = w[2];
            x._mfNO = t, g._mfNO = t, x._mf = new nq(ZD, k[qh](2)), g._mf = new nq(ZD, p[qh](2))
        }
        return [x, g]
    }
    function An(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (a - f >= i + h)
            c = {y: n,x: a - f}, c._mfNO = 0;
        else {
            c = {y: n + r,x: Math[Ea](i, a - f)};
            var o = [i, n + r, i, n, i + h, n], d = new MB(a, _, c.x, c.y);
            if (c = d._$g(o)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = qn(o, [c]);
                l = l[0], l && (c._mf = new nq(ZD, l[qh](2))), c._mfNO = 7
            } else
                c = {y: n,x: i + h}, c._mfNO = 0
        }
        if (i + e - h >= a + f)
            u = {y: n,x: a + f}, u._mfNO = 0;
        else {
            u = {y: n + r,x: Math[Ia](i + e, a + f)};
            var b = [i + e - h, n, i + e, n, i + e, n + r], d = new MB(a, _, u.x, u.y);
            if (u = d._$g(b)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = qn(b, [u]);
                l && l[l[zh] - 1] && (u._mf = new nq(ZD, l[l[zh] - 1][qh](2))), u._mfNO = 1
            } else
                u = {y: n,x: i + e - h}, u._mfNO = 0
        }
        return [c, u]
    }
    function Nn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (_ - f >= n + r)
            c = {x: i + e,y: _ - f}, c._mfNO = 2;
        else {
            c = {x: i + e - h,y: Math[Ea](n, _ - f)};
            var o = [i + e - h, n, i + e, n, i + e, n + r], d = new MB(a, _, c.x, c.y);
            if (c = d._$g(o)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = qn(o, [c]);
                l = l[0], l && (c._mf = new nq(ZD, l[qh](2))), c._mfNO = 1
            } else
                c = {x: i + e,y: n + r}, c._mfNO = 2
        }
        if (n + s - r >= _ + f)
            u = {x: i + e,y: _ + f}, u._mfNO = 2;
        else {
            u = {x: i + e - h,y: Math[Ia](n + s, _ + f)};
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new MB(a, _, u.x, u.y);
            if (u = d._$g(b)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = qn(b, [u]);
                l[1] && (u._mf = new nq(ZD, l[1][qh](2))), u._mfNO = 3
            } else
                u = {x: i + e,y: n + s - r}, u._mfNO = 2
        }
        return [c, u]
    }
    function zn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (a - f >= i + h)
            u = {y: n + s,x: a - f}, u._mfNO = 4;
        else {
            u = {y: n + s - r,x: Math[Ea](i, a - f)};
            var o = [i + h, n + s, i, n + s, i, n + s - r], d = new MB(a, _, u.x, u.y);
            if (u = d._$g(o)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = qn(o, [u]);
                l = l[l[zh] - 1], l && (u._mf = new nq(ZD, l[qh](2))), u._mfNO = 5
            } else
                u = {y: n + s,x: i + h}, u._mfNO = 4
        }
        if (i + e - h >= a + f)
            c = {y: n + s,x: a + f}, c._mfNO = 4;
        else {
            c = {y: n + s - r,x: Math[Ia](i + e, a + f)};
            var b = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = new MB(a, _, c.x, c.y);
            if (c = d._$g(b)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = qn(b, [c]);
                l[0] && (c._mf = new nq(ZD, l[0][qh](2))), c._mfNO = 3
            } else
                c = {y: n + s,x: i + e - h}, c._mfNO = 4
        }
        return [c, u]
    }
    function Bn(t, i, n, e, s, h, r, f, a, _) {
        var c, u;
        if (_ - f >= n + r)
            u = {x: i,y: _ - f}, u._mfNO = 6;
        else {
            u = {x: i + h,y: Math[Ea](n, _ - f)};
            var o = [i, n + r, i, n, i + h, n], d = new MB(a, _, u.x, u.y);
            if (u = d._$g(o)) {
                I(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
                var l = qn(o, [u]);
                l = l[l[zh] - 1], l && (u._mf = new nq(ZD, l[qh](2)))
            } else
                u = {x: i,y: n + r};
            u._mfNO = 7
        }
        if (n + s - r >= _ + f)
            c = {x: i,y: _ + f}, c._mfNO = 6;
        else {
            c = {x: i + h,y: Math[Ia](n + s, _ + f)};
            var b = [i + h, n + s, i, n + s, i, n + s - r], d = new MB(a, _, c.x, c.y);
            if (c = d._$g(b)) {
                I(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
                var l = qn(b, [c]);
                l[0] && (c._mf = new nq(ZD, l[0][qh](2))), c._mfNO = 5
            } else
                c = {x: i,y: n + s - r}, c._mfNO = 6
        }
        return [c, u]
    }
    function Dn(t, i, n, e, s, h, r, f, a, _, c) {
        var u = f / 2;
        switch (t) {
            case 7:
                var o = [i, n + r, i, n, i + h, n], d = i + h, l = n + r;
                return Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 5:
                return o = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 3:
                return o = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 1:
                return o = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Fn(t, o, d, l, i, n, e, s, h, r, f, a, _, c);
            case 0:
                return An(t, i, n, e, s, h, r, u, a, _, c);
            case 2:
                return Nn(t, i, n, e, s, h, r, u, a, _, c);
            case 4:
                return zn(t, i, n, e, s, h, r, u, a, _, c);
            case 6:
                return Bn(t, i, n, e, s, h, r, u, a, _, c)
        }
    }
    function qn(t, i) {
        for (var e, s, h, r, f, a, _ = t[0], c = t[1], u = t[2], o = t[3], d = t[4], l = t[5], b = [], v = 0; v < i[zh]; v++)
            f = i[v], a = f.t, 0 != a && 1 != a ? (e = _ + (u - _) * a, s = c + (o - c) * a, h = u + (d - u) * a, r = o + (l - o) * a, b[Xh]([_, c, e, s, f.x, f.y]), _ = f.x, c = f.y, u = h, o = r) : b[Xh](null);
        return h !== n && b[Xh]([f.x, f.y, h, r, d, l]), b
    }
    function Rn(t) {
        return this[w_] && this._na4 && (t.x -= this._na4.x, t.y -= this._na4.y), this[k_] && Oi(t, this[k_]), t.x += this[p_] || 0, t.y += this[j_] || 0, this[M_] && this[E_] ? Oi(t, this[E_]) : t
    }
    function Ln(t) {
        return this[M_] && this[E_] && Oi(t, -this[E_]), t.x -= this[p_] || 0, t.y -= this[j_] || 0, this[k_] && Oi(t, -this[k_]), this[w_] && this._na4 && (t.x += this._na4.x, t.y += this._na4.y), t
    }
    function Gn() {
        var t = this[S_];
        this[S_] && (this[S_] = !1, this[P_] = !0, this._82[I_](this._j8), this[C_] && this._82[T_](this[C_]), this[O_] && this._82[T_](this[O_]));
        var i = this._$q();
        if (i)
            var n = this[$_] && this[F_];
        return this[P_] && this[w_] && (this[P_] = !1, n && (t = !0), this._na4 = ai(this[A_], this._82[fa], this._82[aa]), this._na4.x += this._82.x, this._na4.y += this._82.y), i ? (t && (this._n8ackgroundGradientInvalidateFlag = !0, Yn[Bh](this, n)), this._n8ackgroundGradientInvalidateFlag && (this._n8ackgroundGradientInvalidateFlag = !1, this._n8ackgroundGradient = this[N_] && this._mhShape && this._mhShape[$a] ? this[N_][z_](this._mhShape[$a]) : null), t) : (this.__lpPointer = !1, t)
    }
    function Yn(t) {
        var i = this._82.x + this[O_] / 2, n = this._82.y + this[O_] / 2, e = this._82[fa] - this[O_], s = this._82[aa] - this[O_], h = 0, r = 0;
        if (this[B_] && (E(this[B_]) ? h = r = this[B_] : (h = this[B_].x || 0, r = this[B_].y || 0), h = Math[Ia](h, e / 2), r = Math[Ia](r, s / 2)), t && (this._pointerX = this._na4.x - this[p_] + this[D_], this._pointerY = this._na4.y - this[j_] + this[q_], !this._82[Fa](this._pointerX, this._pointerY))) {
            var f = new rq(i, n, e, s, h, r, this[F_], this._pointerX, this._pointerY);
            return this._mhShape = f._mf, this._mhShape[$a][pr](i, n, e, s), void (this.__lpPointer = !0)
        }
        this._mhShape && this._mhShape[Pf](), this._mhShape = dR[R_](i, n, e, s, h, r, this._mhShape), this._mhShape[$a][pr](i, n, e, s)
    }
    function Hn(t, i, n, e) {
        return e && (t[fa] < 0 || t[aa] < 0) ? (t.x = i, t.y = n, void (t[fa] = t[aa] = 0)) : (i < t.x ? (t[fa] += t.x - i, t.x = i) : i > t.x + t[fa] && (t[fa] = i - t.x), void (n < t.y ? (t[aa] += t.y - n, t.y = n) : n > t.y + t[aa] && (t[aa] = n - t.y)))
    }
    function Xn(t, i, e) {
        var s, h = t[L_], r = t[G_] === n ? this[G_] : t[G_];
        return this[Y_] instanceof sq && r ? (s = PD._naz(h, this[Y_], this[La], i, e), s.x *= this._ja, s.y *= this._jc) : (s = ai(h, this._82[fa], this._82[aa]), s.x += this._82.x, s.y += this._82.y), Rn[Bh](this, s)
    }
    function Wn(t, i) {
        if (i)
            if (i._82[H_]())
                t.$x = i.$x, t.$y = i.$y;
            else {
                var n = Xn[Bh](i, t);
                t.$x = n.x, t.$y = n.y, t._hostRotate = n[Xa]
            }
        else
            t.$x = 0, t.$y = 0;
        t[X_] && _q[Bh](t)
    }
    function Vn(t) {
        if (t[W_] === n) {
            var i, e;
            if (t[V_])
                i = t[U_], e = t[V_];
            else {
                var s;
                if (t[Q_] !== n)
                    s = Q_;
                else {
                    if (t[J_] === n)
                        return !1;
                    s = J_
                }
                e = function(t) {
                    this[s] = t
                }, i = function() {
                    return this[s]
                }
            }
            Q(t, W_, {get: function() {
                    return i[Bh](this)
                },set: function(t) {
                    e[Bh](this, t)
                }})
        }
        if (t[Z_] === n) {
            var h;
            if (t[K_] !== n)
                h = K_;
            else {
                if (t[tc] === n)
                    return;
                h = tc
            }
            Q(t, Z_, {get: function() {
                    return this[h]
                },set: function(t) {
                    this[h] = t
                }})
        }
    }
    function Un(t, i, n, e, s) {
        var h, r, f, a, _, c, u, o, d = function(t) {
            return function(i) {
                t(i)
            }
        }, l = function() {
            r = null, f = null, a = _, _ = null, c = null
        }, b = function(t) {
            h = t, u || (u = Bi()), u[fa] = h[fa], u[aa] = h[aa], i[fa] = h[fa], i[aa] = h[aa]
        }, v = function(t) {
            y(), l(), r = t[ic] ? t[nc] : null, f = 10 * t[ec], _ = t[sc]
        }, y = function() {
            if (c) {
                var t = c[qa](0, 0, h[fa], h[aa]), n = {data: t,_pixels: Mn(t[Ra], h[fa], h[aa]),delay: f};
                s[Bh](i, n)
            }
        }, x = function(t) {
            c || (c = u[ga](ma));
            var i = t[hc] ? t[rc] : h[fc], n = c[qa](t[ac], t[_c], t[fa], t[aa]);
            t[cc][uc](function(t, e) {
                r !== t ? (n[Ra][4 * e + 0] = i[t][0], n[Ra][4 * e + 1] = i[t][1], n[Ra][4 * e + 2] = i[t][2], n[Ra][4 * e + 3] = 255) : (2 === a || 3 === a) && (n[Ra][4 * e + 3] = 0)
            }), c[g_](0, 0, h[fa], h[aa]), c[y_](n, t[ac], t[_c])
        }, g = function() {
        }, m = {hdr: d(b),gce: d(v),com: d(g),app: {NETSCAPE: d(g)},img: d(x, !0),eof: function() {
                y(), n[Bh](i)
            }}, w = new XMLHttpRequest;
        sB || w[oc]("text/plain; charset=x-user-defined"), w[dc] = function() {
            o = new lq(w[Vf]);
            try {
                vq(o, m)
            } catch (t) {
                e[Bh](i, Qf)
            }
        }, w[lc] = function() {
            e[Bh](i, bc)
        }, w[ta](ia, t, !0), w[ra]()
    }
    function Qn(t) {
        var i = [49, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 49, 46, 56, 10, 49, 52, 50, 49, 52, 54, 57, 56, 56, 48, 51, 52, 56, 10, 10, 48, 10];
        return i[uc](function(n, e) {
            i[e] = t(n)
        }), i[vc]("")
    }
    function Jn(t, i) {
        try {
            if (null == t || t[zh] < 8)
                return;
            if (null == i || i[zh] <= 0)
                return;
            for (var n = "", e = 0; e < i[zh]; e++)
                n += i[yc](e).toString();
            var s = Math[ur](n[zh] / 5), h = parseInt(n[xc](s) + n[xc](2 * s) + n[xc](3 * s) + n[xc](4 * s) + n[xc](5 * s)), r = Math[Aa](i[zh] / 2), f = Math[Ca](2, 31) - 1, a = parseInt(t[Ja](t[zh] - 8, t[zh]), 16);
            for (t = t[Ja](0, t[zh] - 8), n += a; n[zh] > 10; )
                n = (parseInt(n[Ja](0, 10)) + parseInt(n[Ja](10, n[zh]))).toString();
            n = (h * n + r) % f;
            for (var _ = "", c = "", e = 0; e < t[zh]; e += 2)
                _ = parseInt(parseInt(t[Ja](e, e + 2), 16) ^ Math[ur](n / f * 255)), c += String[gc](_), n = (h * n + r) % f;
            return 0 | c[0] ? Wq = kq[mc + Mq + wc](c) : null
        } catch (u) {
        }
    }
    function Zn() {
        var t = xq;
        if (!t)
            return void (Kq = !0);
        Xq = t;
        var i;
        t = t[Kh](Or);
        for (var n = 0; n < t[zh] && (i = Jn(t[n], mq), !(i && i[Kh](Ma)[zh] >= 8)); )
            1 == t[zh] && (i = Jn(t[n], kc)), n++;
        if (!i || i[Kh](Ma)[zh] < 8)
            return Qq = !0, "" === mq || mq == pc + Iq + jc + Cq + Mc || mq == Ec + Pq + Sc ? (Jq = eR, Kq = !1, iR = !1, void (Hq = !1)) : (Jq = eR, void (Kq = !0));
        Hq = i[Kh](Ma);
        var e = Hq[3];
        if (e != DL)
            return Qq = !0, void (iR = !0);
        Kq = !1, iR = !1;
        var s = Hq[0];
        (Pc == s || Ic == s) && (Qq = !1);
        var h = Hq[5];
        Zq = h;
        var r = Hq[6];
        Jq = r
    }
    function Kn() {
        var t = Xq;
        if (t) {
            var i;
            t = t[Kh](Or);
            for (var n = 0; n < t[zh] && (i = sR(t[n], mq), !(i && i[Kh](Ma)[zh] >= 8)); )
                1 == t[zh] && (i = sR(t[n], kc)), n++;
            if (i[Kh](Ma)[zh] >= 8)
                return void (tR = !1)
        }
        //return "" === mq || mq == pc + Iq + jc + Cq + Mc || mq == Ec + Pq + Sc ? void (tR = !1) : void (tR = !0)
	return 1 ? void (tR = !1) : void (tR = !0)
    }
    function te() {
        if (Qq) {
            var t = eh[Aq + Ha]._je, i = Uq;
            eh[Aq + Ha]._je = function() {
                t[lr](this, arguments), i[Bh](this._nb5, this.g)
            };
            var n = as[Aq + Ha]._fn;
            as[Aq + Ha]._fn = function(t) {
                n[lr](this, arguments), i[Bh](this, t)
            }
        }
    }
    function ie() {
        if (Zq !== !0 && Zq) {
            var t = Zq[Kh](Dr);
            if (3 != t[zh])
                return void (bR[br]._je = null);
            var i = parseInt(t[0]), n = parseInt(t[1]), e = parseInt(t[2]), s = 3, h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
            gq > h && (bR[br]._je = null)
        }
    }
    function ne() {
        var t = 0 | Jq;
        t && (mB[Aq + Ha]._kx = function(i, e) {
            var s = i.id;
            return s === n || this[Cc](s) ? !1 : this._j0[zh] > t ? !1 : (x(this._j0, i, e), this._lu[s] = i, i)
        })
    }
    function ee() {
        Kq && (mB[Aq + Ha]._kx = mB[Aq + Ha]._fb)
    }
    function se() {
        tR && (as[Aq + Ha]._jq = null)
    }
    function he() {
        nR && (_s[br]._jh = _s[br]._63)
    }
    function re() {
        iR && (NR[Aq + Ha]._jq = null)
    }
    function fe() {
        Hq === n && (as[Aq + Ha]._jq = null)
    }
    function ae(t) {
        return t[Tc] ? (t = t[Tc], t._dg ? t._dg : t._fv === !1 ? t : null) : null
    }
    function _e(t, i, n) {
        if (n = n || i[Oc], n == t)
            return !1;
        var e = t[$c](n);
        return e || (e = new PL(t, n), t._linkedNodes[n.id] = e), e._hs(i, t)
    }
    function ce(t, i, n) {
        if (n = n || i[Oc], n == t)
            return !1;
        var e = t[$c](n);
        return e ? e._n8x(i, t) : void 0
    }
    function ue(t, i, e) {
        return e === n && (e = i[Oc]), e != t ? (t._7v || (t._7v = new mB), t._7v[ir](i) === !1 ? !1 : void t._8w++) : void 0
    }
    function oe(t, i, n) {
        return t._7v && t._7v[Yh](i) !== !1 ? (t._8w--, void ce(t, i, n)) : !1
    }
    function de(t, i) {
        return i[Fc] != t ? (t._92 || (t._92 = new mB), t._92[ir](i) === !1 ? !1 : void t._nag++) : void 0
    }
    function le(t, i) {
        return t._92 && t._92[Yh](i) !== !1 ? (t._nag--, void ce(i[Fc], i, t)) : !1
    }
    function be(t, i) {
        if (i === n && (i = t instanceof cR), i) {
            if (t[Ac]())
                return null;
            var e = be(t[Nc], !1);
            if (t[zc]())
                return e;
            for (var s = be(t.to, !1); null != e && null != s; ) {
                if (e == s)
                    return e;
                if (e[Bc](s))
                    return s;
                if (s[Bc](e))
                    return e;
                e = be(e, !1), s = be(s, !1)
            }
            return null
        }
        for (var h = t[Tc]; null != h; ) {
            if (h._hn())
                return h;
            h = h[Tc]
        }
        return null
    }
    function ve(t, i, n) {
        t._hn() && t[Ah]() && t[Dh][uc](function(t) {
            t instanceof uR && i[ir](t) && ve(t, i, n)
        }, this), t[Dc]() && t._dl[uc](function(t) {
            (null == n || n[qc](t)) && i[ir](t) && ve(t, i, n)
        })
    }
    function ye(t, i) {
        i[Tc] ? i[Tc][Rc](i, i[Tc][Lc] - 1) : t[Gc][Yc](i, t[Gc][zh] - 1)
    }
    function xe(t, i) {
        if (i instanceof cR)
            return void (i[Ac]() || me(t, i));
        for (ye(t, i); i = i[Tc]; )
            ye(t, i)
    }
    function ge(t, i) {
        if (i instanceof cR)
            return void (i[Ac]() || me(t, i));
        for (ye(t, i); i = i[Tc]; )
            ye(t, i)
    }
    function me(t, i) {
        var n = i[Fc];
        if (i[zc]())
            ye(t, n);
        else {
            var e = i[Oc];
            ye(t, n), ye(t, e)
        }
    }
    function we(t, i) {
        return t._8w++, t._f4 ? (i._hp = t._hk, t._hk._hq = i, void (t._hk = i)) : (t._f4 = i, void (t._hk = i))
    }
    function ke(t, i) {
        t._8w--, t._hk == i && (t._hk = i._hp), i._hp ? i._hp._hq = i._hq : t._f4 = i._hq, i._hq && (i._hq._hp = i._hp), i._hp = null, i._hq = null, ce(t, i, i[Hc])
    }
    function pe(t, i) {
        return t._nag++, t._hj ? (i._iy = t._iv, t._iv._iz = i, void (t._iv = i)) : (t._hj = i, void (t._iv = i))
    }
    function je(t, i) {
        t._nag--, t._iv == i && (t._iv = i._iy), i._iy ? i._iy._iz = i._iz : t._hj = i._iz, i._iz && (i._iz._iy = i._iy), i._iy = null, i._iz = null
    }
    function Me(t, i) {
        return i = i || new mB, t[Xc](function(t) {
            i[ir]({id: t.id,edge: t,fromAgent: t[Wc]._dg,toAgent: t[Hc]._dg})
        }), t[Vc](function(t) {
            t instanceof uR && Me(t, i)
        }), i
    }
    function Ee(t, i, n) {
        return Pe(t, i, n) === !1 ? !1 : Se(t, i, n)
    }
    function Se(t, i, n) {
        if (t._f4)
            for (var e = t._f4; e; ) {
                if (i[Bh](n, e) === !1)
                    return !1;
                e = e._hq
            }
    }
    function Pe(t, i, n) {
        if (t._hj)
            for (var e = t._hj; e; ) {
                if (i[Bh](n, e) === !1)
                    return !1;
                e = e._iz
            }
    }
    function Ie(t, i, e, s, h, r, f) {
        return r || f ? (r = r || 0, f = f === n ? r : f || 0, r = Math[Ia](r, s / 2), f = Math[Ia](f, h / 2), t[Uc](i + r, e), t[Qc](i + s - r, e), t[Jc](i + s, e, i + s, e + f), t[Qc](i + s, e + h - f), t[Jc](i + s, e + h, i + s - r, e + h), t[Qc](i + r, e + h), t[Jc](i, e + h, i, e + h - f), t[Qc](i, e + f), t[Jc](i, e, i + r, e), t[m_](), t) : (t[Uc](i, e), t[Qc](i + s, e), t[Qc](i + s, e + h), t[Qc](i, e + h), t[m_](), t)
    }
    function Ce(t, i) {
        var n = i.r || 1, e = i.cx || 0, s = i.cy || 0, h = n * Math[Wa](Math.PI / 8), r = n * Math[Xr](Math.PI / 4);
        t[Uc](e + n, s), t[Jc](e + n, s + h, e + r, s + r), t[Jc](e + h, s + n, e, s + n), t[Jc](e - h, s + n, e - r, s + r), t[Jc](e - n, s + h, e - n, s), t[Jc](e - n, s - h, e - r, s - r), t[Jc](e - h, s - n, e, s - n), t[Jc](e + h, s - n, e + r, s - r), t[Jc](e + n, s - h, e + n, s)
    }
    function Te(t, i, n, e, s) {
        i instanceof en && (e = i[fa], s = i[aa], n = i.cy - s / 2, i = i.cx - e / 2);
        var h = .5522848, r = e / 2 * h, f = s / 2 * h, a = i + e, _ = n + s, c = i + e / 2, u = n + s / 2;
        return t[Uc](i, u), t[Zc](i, u - f, c - r, n, c, n), t[Zc](c + r, n, a, u - f, a, u), t[Zc](a, u + f, c + r, _, c, _), t[Zc](c - r, _, i, u + f, i, u), t
    }
    function Oe(t, i, n, e, s) {
        var h = 2 * e, r = 2 * s, f = i + e / 2, a = n + s / 2;
        return t[Uc](f - h / 4, a - r / 12), t[Qc](i + .306 * e, n + .579 * s), t[Qc](f - h / 6, a + r / 4), t[Qc](i + e / 2, n + .733 * s), t[Qc](f + h / 6, a + r / 4), t[Qc](i + .693 * e, n + .579 * s), t[Qc](f + h / 4, a - r / 12), t[Qc](i + .611 * e, n + .332 * s), t[Qc](f + 0, a - r / 4), t[Qc](i + .388 * e, n + .332 * s), t[m_](), t
    }
    function $e(t, i, n, e, s) {
        return t[Uc](i, n), t[Qc](i + e, n + s / 2), t[Qc](i, n + s), t[m_](), t
    }
    function Fe(t, i, n, e, s) {
        return t[Uc](i, n + s / 2), t[Qc](i + e / 2, n), t[Qc](i + e, n + s / 2), t[Qc](i + e / 2, n + s), t[m_](), t
    }
    function Ae(t, i, n, e, s, h) {
        return t[Uc](i, n), t[Qc](i + e, n + s / 2), t[Qc](i, n + s), h || (t[Qc](i + .25 * e, n + s / 2), t[m_]()), t
    }
    function Ne(t, i, n, e, s) {
        if (!t || 3 > t)
            throw new Error("edge number must greater than 2");
        t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
        for (var h, r, f = 0, a = 2 * Math.PI / t, _ = new sq; t > f; )
            h = i + e * Math[Hr](s), r = n + e * Math[Xr](s), f ? _[Qc](h, r) : _[Uc](h, r), ++f, s += a;
        return _[m_](), _
    }
    function ze() {
        var t = new sq;
        return t[Uc](75, 40), t[Zc](75, 37, 70, 25, 50, 25), t[Zc](20, 25, 20, 62.5, 20, 62.5), t[Zc](20, 80, 40, 102, 75, 120), t[Zc](110, 102, 130, 80, 130, 62.5), t[Zc](130, 62.5, 130, 25, 100, 25), t[Zc](85, 25, 75, 37, 75, 40), t
    }
    function Be() {
        var t = new sq;
        return t[Uc](20, 0), t[Qc](80, 0), t[Qc](100, 100), t[Qc](0, 100), t[m_](), t
    }
    function De() {
        var t = new sq;
        return t[Uc](100, 0), t[Qc](100, 80), t[Qc](0, 100), t[Qc](0, 20), t[m_](), t
    }
    function qe() {
        var t = new sq;
        return t[Uc](20, 0), t[Qc](100, 0), t[Qc](80, 100), t[Qc](0, 100), t[m_](), t
    }
    function Re() {
        var t = new sq;
        return t[Uc](43, 23), t[Qc](28, 10), t[Qc](37, 2), t[Qc](63, 31), t[Qc](37, 59), t[Qc](28, 52), t[Qc](44, 38), t[Qc](3, 38), t[Qc](3, 23), t[m_](), t
    }
    function Le() {
        var t = new sq;
        return t[Uc](1, 8), t[Qc](7, 2), t[Qc](32, 26), t[Qc](7, 50), t[Qc](1, 44), t[Qc](18, 26), t[m_](), t[Uc](27, 8), t[Qc](33, 2), t[Qc](57, 26), t[Qc](33, 50), t[Qc](27, 44), t[Qc](44, 26), t[m_](), t
    }
    function Ge() {
        var t = new sq;
        return t[Uc](0, 15), t[Qc](23, 15), t[Qc](23, 1), t[Qc](47, 23), t[Qc](23, 43), t[Qc](23, 29), t[Qc](0, 29), t[m_](), t
    }
    function Ye() {
        var t = new sq;
        return t[Uc](0, 21), t[Qc](30, 21), t[Qc](19, 0), t[Qc](25, 0), t[Qc](47, 25), t[Qc](25, 48), t[Qc](19, 48), t[Qc](30, 28), t[Qc](0, 28), t[m_](), t
    }
    function He() {
        var t = new sq;
        return t[Uc](0, 0), t[Qc](34, 24), t[Qc](0, 48), t[Qc](14, 24), t[m_](), t
    }
    function Xe() {
        var t = new sq;
        return t[Uc](20, 0), t[Qc](34, 14), t[Qc](20, 28), t[Qc](22, 18), t[Qc](1, 25), t[Qc](10, 14), t[Qc](1, 3), t[Qc](22, 10), t[m_](), t
    }
    function We() {
        var t = new sq;
        return t[Uc](4, 18), t[Qc](45, 18), t[Qc](37, 4), t[Qc](83, 25), t[Qc](37, 46), t[Qc](45, 32), t[Qc](4, 32), t[m_](), t
    }
    function Ve() {
        var t = new sq;
        return t[Uc](17, 11), t[Qc](27, 11), t[Qc](42, 27), t[Qc](27, 42), t[Qc](17, 42), t[Qc](28, 30), t[Qc](4, 30), t[Qc](4, 23), t[Qc](28, 23), t[m_](), t
    }
    function Ue() {
        dR[Kc](pD[tu], Te(new sq, 0, 0, 100, 100)), dR[Kc](pD[iu], Ie(new sq, 0, 0, 100, 100)), dR[Kc](pD[nu], Ie(new sq, 0, 0, 100, 100, 20, 20)), dR[Kc](pD[eu], Oe(new sq, 0, 0, 100, 100)), dR[Kc](pD[su], $e(new sq, 0, 0, 100, 100)), dR[Kc](pD[hu], Ne(5)), dR[Kc](pD[ru], Ne(6)), dR[Kc](pD[fu], Fe(new sq, 0, 0, 100, 100)), dR[Kc](pD[au], ze()), dR[Kc](pD[_u], Be()), dR[Kc](pD[cu], De()), dR[Kc](pD[uu], qe());
        var t = new sq;
        t[Uc](20, 0), t[Qc](40, 0), t[Qc](40, 20), t[Qc](60, 20), t[Qc](60, 40), t[Qc](40, 40), t[Qc](40, 60), t[Qc](20, 60), t[Qc](20, 40), t[Qc](0, 40), t[Qc](0, 20), t[Qc](20, 20), t[m_](), dR[Kc](pD[ou], t), dR[Kc](pD[du], Ae(new sq, 0, 0, 100, 100)), dR[Kc](pD[lu], Re()), dR[Kc](pD[bu], Le()), dR[Kc](pD[vu], Ge()), dR[Kc](pD[yu], Ye()), dR[Kc](pD[xu], He()), dR[Kc](pD[gu], Xe()), dR[Kc](pD[mu], We()), dR[Kc](pD[wu], Ve()), dR[Kc](pD[ku], Ae(new sq, 0, 0, 100, 100, !0))
    }
    function Qe() {
        z(this, Qe, arguments), this[pu] = !0
    }
    function Je() {
        z(this, Je), this._$u = new HB
    }
    function Ze() {
        if (this._fv === !0) {
            var t = this._7v, i = this._92;
            if (t)
                for (t = t._j0; t[zh]; ) {
                    var n = t[0];
                    oe(this, n, n[Oc])
                }
            if (i)
                for (i = i._j0; i[zh]; ) {
                    var n = i[0];
                    le(this, n, n[Fc])
                }
            return void this[Vc](function(t) {
                t._hn() && Ze[Bh](t)
            })
        }
        var e = Me(this);
        e[uc](function(t) {
            t = t[ju];
            var i = t[Wc], n = t[Hc], e = i[Bc](this), s = n[Bc](this);
            e && !s ? (ue(this, t), _e(this, t)) : s && !e && (de(this, t), _e(t[Fc], t, this))
        }, this)
    }
    function Ke() {
        z(this, Ke, arguments), this[Mu] = null
    }
    function ts(t, i, n, e) {
        return t[i] = n, e ? {get: function() {
                return this[i]
            },set: function(t) {
                if (t !== this[i]) {
                    this[i] = t, !this._nac, this._1h = !0;
                    for (var n = e[zh]; --n >= 0; )
                        this[e[n]] = !0
                }
            }} : {get: function() {
                return this[i]
            },set: function(t) {
                t !== this[i] && (this[i] = t)
            }}
    }
    function is(t, i) {
        var n = {}, e = {};
        for (var s in i) {
            var h = i[s];
            h[Eu] && h[Eu][uc](function(t, i, n) {
                n[i] = Su + t, e[t] = !0
            }), n[s] = ts(t, wr + s, h[Pr], h[Eu])
        }
        for (var r in e)
            t[Su + r] = !0;
        Object[Br](t, n)
    }
    function ns(t, i, n, e) {
        if (Array[hr](i))
            for (var s = i[zh]; --s >= 0; )
                ns(t, i[s], n, e);
        else {
            var h = i[Pu];
            if (h) {
                if (h instanceof bR || (h = t[h]), !h)
                    return
            } else
                h = t;
            if (e || (e = t[Iu](i[Cu], n)), i[Tu] && (h[i[Tu]] = e), i[Ou]) {
                var r = i[Ou];
                r instanceof Function || (r = t[r]), r instanceof Function && r[Bh](t, e, h)
            }
        }
    }
    function es() {
        vR[uc](function(t) {
            this[t] = {}
        }, this)
    }
    function ss(t, i, n, e) {
        return e == pD[$u] ? void (t[n] = i) : e == pD[Fu] ? void t[pr](n, i) : e == pD[Au] ? void t[Nu](n, i) : !1
    }
    function hs() {
        z(this, hs, arguments)
    }
    function rs() {
        z(this, rs, arguments)
    }
    function fs(t) {
        var i = Bi(!0);
        return Vn(i.g), i[zu] = function() {
            return !1
        }, t[Bu](i), oi(i, $R), i
    }
    function as(t) {
        this._mp = t, j(this._mp, Du), t[qu] = 0, this._j2 = fs(t), this[ca] = this._j2[ca] || 1, this._topCanvas = new eh(this, t), this._fw = [], this._na8 = new FR, this._k1 = new _s(this), this._mu = new mB;
        var i = this;
        this._mu._fb = function(t, n, e) {
            n[Ru]();
            var s = n[Lu];
            return n._hf && s && i._na8._mh(n.$x + n[Lu].x, n.$y + n[Lu].y, n[Lu][fa], n[Lu][aa]), mB[br]._fb[Bh](this, t, n, e)
        }, this._mu[Pf] = function() {
            return this[uc](function(t) {
                t[Ru]()
            }), mB[br][Pf][Bh](this)
        }, this._nbv = [], this._7u = {}, this._7t = new SB, this._85 = [], this._nbb()
    }
    function _s(t) {
        this._nb5 = t, this._k1 = new gB, this._k1[ca] = t[ca], this._7d = new SB
    }
    function cs(t, i, n, e) {
        var s = us(t, i, n, e), h = [];
        if (bs(t))
            os(s, i, n, h, e[Gu](yR[Yu]));
        else {
            Ms(t, i, n, h, s, e);
            var r = ds(t, e), f = r ? ms(t, s, i, n, e[Gu](yR[Hu])) : e[Gu](yR[Xu]);
            0 == f && (s = !s)
        }
        return h
    }
    function us(t, i, n) {
        if (null != t) {
            if (t == pD[Wu] || t == pD[Vu] || t == pD[Uu] || t == pD[Qu] || t == pD[Ju])
                return !0;
            if (t == pD[Zu] || t == pD[Ku] || t == pD[to] || t == pD[io] || t == pD[no])
                return !1
        }
        var e = xs(i, n), s = gs(i, n);
        return e >= s
    }
    function os(t, i, n, e, s) {
        t ? Cs(i, n, e, s) : Ts(i, n, e, s)
    }
    function ds(t, i) {
        return i[Gu](yR[eo])
    }
    function ls(t) {
        return null != t && (t == pD[io] || t == pD[Qu] || t == pD[no] || t == pD[Ju])
    }
    function bs(t) {
        return t && (t == pD[so] || t == pD[Wu] || t == pD[Zu])
    }
    function vs(t, i, n, e, s) {
        if (t == pD[Uu] || t == pD[to])
            return new pB(e.x + e[fa] / 2, e.y + e[aa] / 2);
        var h;
        if (ls(t)) {
            var r = Math[Ia](n.y, e.y), f = Math[Ia](n.x, e.x), a = Math[Ea](n[Wr], e[Wr]), _ = Math[Ea](n[Vr], e[Vr]);
            if (h = s[Gu](yR[Yu]), t == pD[io])
                return new pB((f + _) / 2, r - h);
            if (t == pD[Qu])
                return new pB(f - h, (r + a) / 2);
            if (t == pD[no])
                return new pB((f + _) / 2, a + h);
            if (t == pD[Ju])
                return new pB(_ + h, (r + a) / 2)
        }
        var c = ds(t, s);
        if (h = c ? ms(t, i, n, e, s[Gu](yR[Hu])) : s[Gu](yR[Xu]), h == Number[ho] || h == Number[ro])
            return new pB(e.x + e[fa] / 2, e.y + e[aa] / 2);
        if (0 == h)
            return new pB(n.x + n[fa] / 2, n.y + n[aa] / 2);
        if (i) {
            var u = n.x + n[Vr] < e.x + e[Vr];
            return new pB(ps(u, h, n.x, n[fa]), n.y + n[aa] / 2)
        }
        var o = n.y + n[Wr] < e.y + e[Wr];
        return new pB(n.x + n[fa] / 2, ps(o, h, n.y, n[aa]))
    }
    function ys(t, i, n, e) {
        var s = Math[Ea](i, e) - Math[Ia](t, n);
        return s - (i - t + e - n)
    }
    function xs(t, i) {
        var n = Math[Ea](t.x + t[fa], i.x + i[fa]) - Math[Ia](t.x, i.x);
        return n - t[fa] - i[fa]
    }
    function gs(t, i) {
        var n = Math[Ea](t.y + t[aa], i.y + i[aa]) - Math[Ia](t.y, i.y);
        return n - t[aa] - i[aa]
    }
    function ms(t, i, n, e, s) {
        var h = ws(s, i, n, e, null);
        return h * s
    }
    function ws(t, i, n, e) {
        return i ? ks(t, n.x, n[Vr], e.x, e[Vr]) : ks(t, n.y, n[Wr], e.y, e[Wr])
    }
    function ks(t, i, n, e, s) {
        var h = ys(i, n, e, s), r = e + s > i + n;
        if (h > 0) {
            if (1 == t)
                return h + (s - e) / 2;
            if (t >= 0 && 1 > t)
                return h;
            if (0 > t)
                return r ? e - i : n - s
        }
        return Math[Ur](r && t > 0 || !r && 0 > t ? n - s : i - e)
    }
    function ps(t, i, n, e) {
        return t == i > 0 ? n + e + Math[Ur](i) : n - Math[Ur](i)
    }
    function js(t, i) {
        var n = t[zh];
        if (!(3 > n)) {
            var e = i[Gu](yR[fo]);
            if (e != pD[ao]) {
                var s = i[Gu](yR[_o]), h = 0, r = 0;
                s && (E(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
                for (var f, a, _, c, u = t[0], o = t[1], d = null, l = 2; n > l; l++) {
                    var b = t[l], v = o.x - u.x, y = o.y - u.y, m = b.x - o.x, w = b.y - o.y, k = !v || v > -SD && SD > v, p = !y || y > -SD && SD > y, j = !m || m > -SD && SD > m, M = !w || w > -SD && SD > w, S = p;
                    (k && M || p && j) && (S ? (f = Math[Ia](2 == l ? Math[Ur](v) : Math[Ur](v) / 2, h), a = Math[Ia](l == n - 1 ? Math[Ur](w) : Math[Ur](w) / 2, r), _ = new pB(o.x - (v > 0 ? f : -f), o.y), c = new pB(o.x, o.y + (w > 0 ? a : -a))) : (f = Math[Ia](l == n - 1 ? Math[Ur](m) : Math[Ur](m) / 2, h), a = Math[Ia](2 == l ? Math[Ur](y) : Math[Ur](y) / 2, r), _ = new pB(o.x, o.y - (y > 0 ? a : -a)), c = new pB(o.x + (m > 0 ? f : -f), o.y)), g(t, o), l--, n--, (_.x != u.x || _.y != u.y) && (x(t, _, l), l++, n++), e == pD[co] ? (x(t, c, l), l++, n++) : e == pD[uo] && (x(t, [o, c], l), l++, n++)), u = o, o = b
                }
                null != d && c.x == o.x && c.y == o.y && g(t, o)
            }
        }
    }
    function Ms(t, i, n, e, s, h) {
        var r = h[Gu](yR[oo]), f = null == r;
        if (null != r) {
            var a = (new SB)[lo](i)[lo](n);
            a[bo](r) || (s = Es(r.x, r.y, a.y, a.x, a[Wr], a[Vr]))
        } else
            r = vs(t, s, i, n, h);
        s ? Is(i, n, r, e, f) : Ps(i, n, r, e, f)
    }
    function Es(t, i, n, e, s, h) {
        return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
    }
    function Ss(t, i, n) {
        return i >= t.x && i <= t[Vr] && n >= t.y && n <= t[Wr]
    }
    function Ps(t, i, n, e, s) {
        var h = Math[Ea](t.y, i.y), r = Math[Ia](t.y + t[aa], i.y + i[aa]), f = null != n ? n.y : r + (h - r) / 2, a = t.x + t[fa] / 2, _ = i.x + i[fa] / 2;
        if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[fa] && (a = n.x), n.x >= i.x && n.x <= i.x + i[fa] && (_ = n.x)), Ss(i, a, f) || Ss(t, a, f) || e[Xh](new pB(a, f)), Ss(i, _, f) || Ss(t, _, f) || e[Xh](new pB(_, f)), 0 == e[zh])
            if (null != n)
                Ss(i, n.x, f) || Ss(t, n.x, f) || e[Xh](new pB(n.x, f));
            else {
                var c = Math[Ea](t.x, i.x), u = Math[Ia](t.x + t[fa], i.x + i[fa]);
                e[Xh](new pB(c + (u - c) / 2, f))
            }
    }
    function Is(t, i, n, e, s) {
        var h = Math[Ea](t.x, i.x), r = Math[Ia](t.x + t[fa], i.x + i[fa]), f = null != n ? n.x : r + (h - r) / 2, a = t.y + t[aa] / 2, _ = i.y + i[aa] / 2;
        if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[aa] && (a = n.y), n.y >= i.y && n.y <= i.y + i[aa] && (_ = n.y)), Ss(i, f, a) || Ss(t, f, a) || e[Xh](new pB(f, a)), Ss(i, f, _) || Ss(t, f, _) || e[Xh](new pB(f, _)), 0 == e[zh])
            if (null != n)
                Ss(i, f, n.y) || Ss(t, f, n.y) || e[Xh](new pB(f, n.y));
            else {
                var c = Math[Ea](t.y, i.y), u = Math[Ia](t.y + t[aa], i.y + i[aa]);
                e[Xh](new pB(f, c + (u - c) / 2))
            }
    }
    function Cs(t, i, n, e) {
        var s = i.x + i[fa] < t.x, h = t.x + t[fa] < i.x, r = s ? t.x : t.x + t[fa], f = t.y + t[aa] / 2, a = h ? i.x : i.x + i[fa], _ = i.y + i[aa] / 2, c = e, u = s ? -c : c, o = new pB(r + u, f);
        u = h ? -c : c;
        var d = new pB(a + u, _);
        if (s == h) {
            var l = s ? Math[Ia](r, a) - e : Math[Ea](r, a) + e;
            n[Xh](new pB(l, f)), n[Xh](new pB(l, _))
        } else if (o.x < d.x == s) {
            var b = f + (_ - f) / 2;
            n[Xh](o), n[Xh](new pB(o.x, b)), n[Xh](new pB(d.x, b)), n[Xh](d)
        } else
            n[Xh](o), n[Xh](d)
    }
    function Ts(t, i, n, e) {
        var s = i.y + i[aa] < t.y, h = t.y + t[aa] < i.y, r = t.x + t[fa] / 2, f = s ? t.y : t.y + t[aa], a = i.x + i[fa] / 2, _ = h ? i.y : i.y + i[aa], c = e, u = s ? -c : c, o = new pB(r, f + u);
        u = h ? -c : c;
        var d = new pB(a, _ + u);
        if (s == h) {
            var l = s ? Math[Ia](f, _) - e : Math[Ea](f, _) + e;
            n[Xh](new pB(r, l)), n[Xh](new pB(a, l))
        } else if (o.y < d.y == s) {
            var b = r + (a - r) / 2;
            n[Xh](o), n[Xh](new pB(b, o.y)), n[Xh](new pB(b, d.y)), n[Xh](d)
        } else
            n[Xh](o), n[Xh](d)
    }
    function Os(t) {
        return t == pD[vo] || t == pD[Vu] || t == pD[Uu] || t == pD[Ku] || t == pD[to] || t == pD[io] || t == pD[Qu] || t == pD[no] || t == pD[Ju] || t == pD[so] || t == pD[Wu] || t == pD[Zu]
    }
    function $s(t, i) {
        var n, e;
        i && i[fa] && i[aa] ? (n = i[fa], e = i[aa]) : n = e = isNaN(i) ? xB[yo] : i;
        var s = dR[xo](t, -n, -e / 2, n, e);
        return s || (s = new sq, s[Uc](-n, -e / 2), s[Qc](0, 0), s[Qc](-n, e / 2)), s
    }
    function Fs(t, i) {
        var n = Math[Xr](i), e = Math[Hr](i), s = t.x, h = t.y;
        return t.x = s * e - h * n, t.y = s * n + h * e, t
    }
    function As(t, i, n, e, s, h) {
        var r = Math[Yr](e - i, n - t), f = new pB(s, h);
        return f[Xa] = r, Fs(f, r), f.x += t, f.y += i, f
    }
    function Ns(t, i, n, e, s) {
        i = si(e, i.x, i.y, n.x, n.y), n = si(s, n.x, n.y, i.x, i.y);
        var h = Math.PI / 2 + Math[Yr](n.y - i.y, n.x - i.x), r = t * Math[Hr](h), f = t * Math[Xr](h), a = n.x - i.x, _ = n.y - i.y, c = i.x + .25 * a, u = i.y + .25 * _, o = i.x + .75 * a, d = i.y + .75 * _;
        return [new nq(KD, [c + r, u + f, o + r, d + f])]
    }
    function zs(t, i, e) {
        if (x(t, new nq(QD, [i.x, i.y]), 0), e) {
            if (t[zh] > 1) {
                var s = t[t[zh] - 1];
                if (ZD == s[Ha] && (s[Yf][2] === n || null === s[Yf][2]))
                    return s[Yf][2] = e.x, void (s[Yf][3] = e.y);
                if (KD == s[Ha] && (s[Yf][4] === n || null === s[Yf][4]))
                    return s[Yf][4] = e.x, void (s[Yf][5] = e.y)
            }
            t[Xh](new nq(JD, [e.x, e.y]))
        }
    }
    function Bs(t, i, n, e, s, h, r, f) {
        return i[go]() ? void (n._f6 = i._9j[mo]()) : e == s ? void t[wo](n, e, h, r) : void t[ko](n, e, s, h, r, f)
    }
    function Ds(t, i, n, e, s) {
        var h = e == s, r = t[po][wf](e), f = h ? r : t[po][wf](s), a = i[jo], _ = r[Mo][Hh](), c = h ? _ : f[Mo][Hh](), u = i[go]();
        if (!h && !a && !u) {
            var o = e[pu], d = s[pu];
            if (o != d) {
                var l, b, v, y, x = i[Eo];
                o ? (l = r, b = _, v = f, y = c) : (l = f, b = c, v = r, y = _);
                var g = Hs(b, l, o, v, y, x);
                if (g && 2 == g[zh]) {
                    var m = g[0], w = g[1];
                    return n[Uc](m.x, m.y), w.x == m.x && w.y == m.y && (w.y += .01), n[Qc](w.x, w.y), void (n._6f = !0)
                }
            }
        }
        Bs(t, i, n, r, f, a, _, c), (!h || u) && qs(t, i, n, r, f, a, _, c), n._6f = !0
    }
    function qs(t, i, e, s, h, r, f, a) {
        var _ = e._f6, c = f[So], u = a[So];
        if (_[zh]) {
            var o = _[0], d = o[Po], l = _[_[zh] - 1], b = l[Ya];
            f[Io](d.x, d.y) && (o[Ha] == KD ? (c = d, d = {x: o[Yf][2],y: o[Yf][3]}, o[Yf] = o[Yf][qh](2), o[Ha] = ZD) : o[Ha] == ZD && (c = d, d = {x: o[Yf][0],y: o[Yf][1]}, o[Yf] = o[Yf][qh](2), o[Ha] = JD)), Rs(s, f, d, c, n, n);
            var v, y = l[Yf][zh], x = b.x === n || b.y === n;
            y >= 4 && (x || a[Io](b.x, b.y)) && (x || (u = b), v = !0, b = {x: l[Yf][y - 4],y: l[Yf][y - 3]}, a[Io](b.x, b.y) && (u = b, y >= 6 ? (b = {x: l[Yf][y - 6],y: l[Yf][y - 5]}, l[Yf] = l[Yf][qh](0, 4), l[Ha] = ZD) : 1 == _[zh] ? (b = {x: c.x,y: c.y}, l[Yf] = l[Yf][qh](0, 2), l[Ha] = JD) : (l = _[_[zh] - 2], b = l[Ya]))), Rs(h, a, b, u, n, n), v && (y = l[Yf][zh], l[Yf][y - 2] = u.x, l[Yf][y - 1] = u.y, u = null)
        } else {
            var g = Math[Yr](u.y - c.y, u.x - c.x), m = Math[Hr](g), w = Math[Xr](g);
            Rs(s, f, u, c, m, w), Rs(h, a, c, u, -m, -w)
        }
        zs(e._f6, c, u)
    }
    function Rs(t, i, e, s, h, r) {
        if (h === n) {
            var f = Math[Yr](e.y - s.y, e.x - s.x);
            h = Math[Hr](f), r = Math[Xr](f)
        }
        for (e = {x: e.x,y: e.y}, i[Io](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y)); ; ) {
            if (!i[Io](e.x, e.y))
                return s;
            if (t._hg(e.x - h, e.y - r)) {
                s.x = e.x - h / 4, s.y = e.y - r / 4;
                break
            }
            e.x -= h, e.y -= r
        }
        return s
    }
    function Ls(t, i, n, e, s, h, r, f) {
        if (i[go]())
            return i._9j;
        var a = i[jo];
        if (Os(a)) {
            var _ = cs(a, n, e, t, s, h);
            if (!_ || !_[zh])
                return null;
            x(_, r, 0), _[Xh](f), a != pD[so] && js(_, t);
            for (var c = [], u = _[zh], o = 1; u - 1 > o; o++) {
                var d = _[o];
                c[Xh](I(d) ? new nq(ZD, [d[0].x, d[0].y, d[1].x, d[1].y]) : new nq(JD, [d.x, d.y]))
            }
            return c
        }
        if (i[Co]) {
            var l = t._2j();
            if (!l)
                return;
            return Ns(l, r, f, n, e)
        }
    }
    function Gs(t, i, n) {
        var e = t[Gu](yR[To]), s = t._2j(), h = e + .2 * s, r = i.x + i[fa] - h, f = i.y, a = i.x + i[fa], _ = i.y + h;
        e += s;
        var c = .707, u = -.707, o = i.x + i[fa], d = i.y, l = o + c * e, b = d + u * e, v = {x: r,y: f}, y = {x: l,y: b}, x = {x: a,y: _}, g = v.x, m = y.x, w = x.x, k = v.y, p = y.y, j = x.y, M = ((j - k) * (p * p - k * k + m * m - g * g) + (p - k) * (k * k - j * j + g * g - w * w)) / (2 * (m - g) * (j - k) - 2 * (w - g) * (p - k)), E = ((w - g) * (m * m - g * g + p * p - k * k) + (m - g) * (g * g - w * w + k * k - j * j)) / (2 * (p - k) * (w - g) - 2 * (j - k) * (m - g)), h = Math[Pa]((g - M) * (g - M) + (k - E) * (k - E)), S = Math[Yr](v.y - E, v.x - M), P = Math[Yr](x.y - E, x.x - M), I = P - S;
        return 0 > I && (I += 2 * Math.PI), Ys(M, E, S, I, h, h, !0, n)
    }
    function Ys(t, i, n, e, s, h, r, f) {
        var a, _, c, u, o, d, l, b, v, y, x;
        if (Math[Ur](e) > 2 * Math.PI && (e = 2 * Math.PI), o = Math[Gh](Math[Ur](e) / (Math.PI / 4)), a = e / o, _ = a, c = n, o > 0) {
            d = t + Math[Hr](c) * s, l = i + Math[Xr](c) * h, moveTo ? f[Uc](d, l) : f[Qc](d, l);
            for (var g = 0; o > g; g++)
                c += _, u = c - _ / 2, b = t + Math[Hr](c) * s, v = i + Math[Xr](c) * h, y = t + Math[Hr](u) * (s / Math[Hr](_ / 2)), x = i + Math[Xr](u) * (h / Math[Hr](_ / 2)), f[Jc](y, x, b, v)
        }
    }
    function Hs(t, i, e, s, h, r) {
        var f = h.cx, a = h.cy, _ = f < t.x, c = f > t[Vr], u = a < t.y, o = a > t[Wr], d = t.cx, l = t.cy, b = _ || c, v = u || o, y = r === n || null === r;
        y && (r = Math[Yr](a - l, f - d), b || v || (r += Math.PI));
        var x = Math[Hr](r), g = Math[Xr](r), m = Ws(i, t, {x: f,y: a}, -x, -g);
        m || (r = Math[Yr](a - l, f - d), b || v || (r += Math.PI), x = Math[Hr](r), g = Math[Xr](r), m = Ws(i, t, {x: f,y: a}, -x, -g) || {x: d,y: l});
        var w = Ws(s, h, {x: m.x,y: m.y}, -m[Oo] || x, -m[$o] || g, !1) || {x: f,y: a};
        return e ? [m, w] : [w, m]
    }
    function Xs(t, i, n, e, s, h) {
        var r = i < t.x, f = i > t[Vr], a = n < t.y, _ = n > t[Wr];
        if (r && e > 0) {
            var c = t.x - i, u = n + c * s / e;
            if (u >= t.y && u <= t[Wr])
                return {x: t.x,y: u,perX: e,perY: s}
        }
        if (f && 0 > e) {
            var c = t[Vr] - i, u = n + c * s / e;
            if (u >= t.y && u <= t[Wr])
                return {x: t[Vr],y: u,perX: e,perY: s}
        }
        if (a && s > 0) {
            var o = t.y - n, d = i + o * e / s;
            if (d >= t.x && d <= t[Vr])
                return {x: d,y: t.y,perX: e,perY: s}
        }
        if (_ && 0 > s) {
            var o = t[Wr] - n, d = i + o * e / s;
            if (d >= t.x && d <= t[Vr])
                return {x: d,y: t[Wr],perX: e,perY: s}
        }
        return h !== !1 ? Xs(t, i, n, -e, -s, !1) : void 0
    }
    function Ws(t, i, n, e, s, h) {
        if (!i[Io](n.x, n.y)) {
            if (n = Xs(i, n.x, n.y, e, s, h), !n)
                return;
            return Vs(t, i, n, n[Oo], n[$o])
        }
        return h === !1 ? Vs(t, i, n, e, s) : Vs(t, i, {x: n.x,y: n.y,perX: e,perY: s}, e, s) || Vs(t, i, n, -e, -s)
    }
    function Vs(t, i, n, e, s) {
        for (; ; ) {
            if (!i[Io](n.x, n.y))
                return;
            if (t._hg(n.x + e, n.y + s))
                break;
            n.x += e, n.y += s
        }
        return n
    }
    function Us(t) {
        return wn(t) ? t : t[Fo](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = Z(t), t instanceof Object && t[Za] ? t : void 0)
    }
    function Qs(t) {
        for (var i = t[Tc]; i; ) {
            if (i[Ao])
                return i;
            i = i[Tc]
        }
        return null
    }
    function Js() {
        z(this, Js, arguments)
    }
    function Zs(t, n, e, s, h, r, f) {
        var a = i[xa](No);
        a[Uh] = zo, oi(a, DR), n && oi(a, n);
        var _ = i[xa](Bo);
        return r && (oB ? _[Do] = r : _[qo] = r), _[Er] = f, _[Ro] = e, oi(_, qR), h && oi(_, h), s && di(_, Lo, Go), a._img = _, a[Bu](_), t[Bu](a), a
    }
    function Ks(t, n) {
        this._navPane = i[xa](No), this._navPane[Uh] = Yo, oi(this._navPane, {"background-color": Ho,overflow: Xo,"float": yf,"user-select": Wo,position: Vo}), this._top = Zs(this._navPane, {width: Uo}, xB[Qo], !1, null, n, xf), this._left = Zs(this._navPane, {height: Uo}, xB[Jo], !1, RR, n, yf), this._right = Zs(this._navPane, {height: Uo,right: Zo}, xB[Jo], !0, RR, n, Vr), this._n8ottom = Zs(this._navPane, {width: Uo,bottom: Zo}, xB[Qo], !0, null, n, Wr), t[Bu](this._navPane)
    }
    function th(t, i) {
        this._nb5 = t;
        var n = function(i) {
            var n, e, s = i[Pu], h = s[Er];
            if (yf == h)
                n = 1;
            else if (Vr == h)
                n = -1;
            else if (xf == h)
                e = 1;
            else {
                if (Wr != h)
                    return;
                e = -1
            }
            oB && (s[Uh] = Ko, setTimeout(function() {
                s[Uh] = ""
            }, 100)), O(i), t._l4._9c(n, e)
        };
        Ks[Bh](this, i, n), this._3n(i[td], i[id])
    }
    function ih(t, i) {
        this._nb5 = t, this[nd](i, t)
    }
    function nh() {
        z(this, nh, arguments)
    }
    function eh(t, i) {
        this._nb5 = t, this._j2 = fs(i), this.g = this._j2.g, this._9x = new mB
    }
    function sh(t) {
        var i = t[ed], n = [];
        return t[sd][uc](function(i) {
            t[hd](i) && t[rd](i) && n[Xh](i)
        }), i[pr](n)
    }
    function hh(t, i, e, s) {
        s === n && (s = xB[fd]);
        var h = t[ad](i);
        return e ? t[_d](h.x, h.y, s) : t[cd](h.x, h.y, s)
    }
    function rh(t, i, n) {
        var e = t[$a];
        n = n || e, i = i || 1;
        var s = null;
        s && n[fa] * n[aa] * i * i > s && (i = Math[Pa](s / n[fa] / n[aa]));
        var h = Bi();
        h[fa] = n[fa] * i, h[aa] = n[aa] * i, t._8v._fn(h.g, i, n);
        var r = null;
        try {
            r = h[ud](od)
        } catch (f) {
            kD[Gr](f)
        }
        return {canvas: h,data: r,width: h[fa],height: h[aa]}
    }
    function fh(t) {
        this[po] = t, this[dd] = t[dd]
    }
    function ah(t, i) {
        this[ld] = t, this[bd] = i || vd
    }
    function _h() {
        z(this, _h, arguments)
    }
    function ch(t, i) {
        if (!t)
            return i;
        var e = {};
        for (var s in t)
            e[s] = t[s];
        for (var s in i)
            e[s] === n && (e[s] = i[s]);
        return e
    }
    function uh() {
        z(this, uh, arguments)
    }
    function oh() {
        z(this, oh, arguments)
    }
    function dh() {
        z(this, dh, arguments)
    }
    function lh() {
        z(this, lh, arguments)
    }
    function bh(i, n, e) {
        i += t[df], n += t[bf];
        var s = e[cf]();
        return {x: i + s[yf],y: n + s[xf]}
    }
    function vh(t, i, n) {
        var e = t[yd], s = t[xd];
        t[sf][yf] = i - e / 2 + ua, t[sf][xf] = n - s / 2 + ua
    }
    function yh(t) {
        var n = i[xa](oa), e = n[ga](ma), s = getComputedStyle(t, null), h = s[pa];
        h || (h = s[gd] + tr + s[md] + tr + s[wd]), e[pa] = h;
        var r = t[Pr], f = r[Kh](Ma), a = parseInt(s[md]), _ = 0, c = 0;
        return kD[uc](f, function(t) {
            var i = e[Sa](t)[fa];
            i > _ && (_ = i), c += 1.2 * a
        }), {width: _,height: c}
    }
    function xh(t, n) {
        if (t[kd](), nr == typeof t[pd] && nr == typeof t[jd]) {
            var e = t[Pr], s = t[pd];
            t[Pr] = e[qh](0, s) + n + e[qh](t[jd]), t[jd] = t[pd] = s + n[zh]
        } else if (Md != typeof i[Ed]) {
            var h = i[Ed][Sd]();
            h[Pd] = n, h[Id](!1), h[Cd]()
        }
    }
    function gh() {
    }
    function mh(t) {
        this[po] = t, this[dd] = t[dd], this[Td] = oB ? 8 : 5
    }
    function wh(t) {
        this[po] = t, this[dd] = t[dd], this[Td] = oB ? 8 : 4, this._rotateHandleLength = oB ? 30 : 20
    }
    function kh(t, i) {
        var n = new SB;
        return n[_a](Rn[Bh](t, {x: i.x,y: i.y})), n[_a](Rn[Bh](t, {x: i.x + i[fa],y: i.y})), n[_a](Rn[Bh](t, {x: i.x + i[fa],y: i.y + i[aa]})), n[_a](Rn[Bh](t, {x: i.x,y: i.y + i[aa]})), n
    }
    function ph(t) {
        t %= 2 * Math.PI;
        var i = Math[Aa](t / YR);
        return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : Od
    }
    function jh(n, e, s) {
        var h = i[$d], r = new kD[Fd](t[df], t[bf], h[td] - 2, h[id] - 2), f = n[yd], a = n[xd];
        e + f > r.x + r[fa] && (e = r.x + r[fa] - f), s + a > r.y + r[aa] && (s = r.y + r[aa] - a), e < r.x && (e = r.x), s < r.y && (s = r.y), n[sf][yf] = e + ua, n[sf][xf] = s + ua
    }
    function Mh(t, i, n, e, s) {
        this[r_] = t, this[Ha] = Ad, this[Nd] = i, this[rr] = n, this[Ra] = e, this[zd] = s
    }
    function Eh(t) {
        this._4s = {}, this._l4 = t, this._l4._1k[Bd](this._9e, this), this[Dd] = pD[qd]
    }
    function Sh(t) {
        return t >= 10 && 20 > t
    }
    function Ph(t) {
        return t == fL || t == cL
    }
    function Ih() {
        var t = {}, i = [], n = 0, e = {}, s = 0;
        this[po][uc](function(h) {
            if (this[Rd](h))
                if (h instanceof uR) {
                    var r = {node: h,id: h.id,x: h.x,y: h.y};
                    this[Ld] && this[Ld](h, r), t[h.id] = r, i[Xh](r), n++
                } else if (h instanceof cR && !h[zc]() && h[Fc] && h[Oc]) {
                    var r = {edge: h};
                    e[h.id] = r, s++
                }
        }, this);
        var h = {};
        for (var r in e) {
            var f = e[r], a = f[ju], _ = a[Fc], c = a[Oc], u = _.id + Gd + c.id, o = c.id + Gd + _.id;
            if (t[_.id] && t[c.id] && !h[u] && !h[o]) {
                var d = t[_.id], l = t[c.id];
                f[Nc] = d, f.to = l, h[u] = f, this[Yd] && this[Yd](a, f)
            } else
                delete e[r], s--
        }
        return {nodesArray: i,nodes: t,nodeCount: n,edges: e,edgeCount: s,minEnergy: this[Hd](n, s)}
    }
    function Ch(t) {
        this[po] = t, this[Xd] = {}
    }
    function Th() {
        z(this, Th, arguments)
    }
    function Oh(t, i, n, e, s) {
        e ? t[Xc](function(e) {
            var h = e[Wd](t);
            h != n && h._marker != s && i(h, t)
        }, this, !0) : t[Vd](function(e) {
            var h = e[Oc];
            h != n && h._marker != s && i(h, t)
        })
    }
    var $h = "c5aacf8d331d12e0c484c0312f1ac5458a4e1d65179b8e957a4aae16c79092204b4cde35672f3e50b65388102fc306534e86c979270b4e57948bd09dc92a9449b383c94a45c1b80df7d1edebbc7023f363e3bbc583ad58033a9d139dc8b59fc3f521153b871619fbea1d5ee9bc302132ac942d716ec0d140691ceea11e070ea46301df22624773750eb672076cd5d226486ec16fd60af02daca28fb73abaf49592392bf6294a9b772fb8d6873e006a064d25e3b9aaf1e13c7240d7e5f8923ff3d2b7a8e1d6df49a62cf8ba07603a4ec9a98d61d7b2e5baa4b041048057479d9cca39b4b7a24c001f78b194b50cc5c2b2bf7423ec05f16ef7e3ea40a1e5373d48eea61d21cf46e7d5676d211c5357e11c7a2233733d7a88e88a0949d880b2e9798cb9001816eff99d3610215ebff4166f941ed8e9b6dbfc9cddf8d2bbdaf6baf941679431a74f9009218808732001950ca56a0a0b7b684b75e3da687a6e0afec62efc4d81f58a188685a69b80884fb63e359edec512762a94f28ac8fd12257f3fb79cfaab8d7bc96f206b014b6457413b86a0c8f389f57d3ed449f7179355b5ca3e31ec8767b88fef4b259c28adf9e05b00642c6fec890ad0b26df1d0a05dd48fd6aef2e5bc79ccc590cef6adfa4245f513f8635c241dd8ba6dcb2241c7746a97dc023ad5d0d24c73bca7b578ff0342f853f8a61a2a349baa183187662070fa3e97c45bf815e54e013541a60c0654542b4303f9ade4a15a617f02ec7adcf2b41f75fdc87d3c2bfdadf65094ed468d825a7e5d119b39cc2a30146a8a755e1e7cdf09123d967ef54ec1dcbd2f41848cebf65b6e7aada1d93d339e2cab3e0f898f3e4c622fc10b35f80310b08d1570e8a58ba90f2af0b5f2e1f0a8e00882608bf1e6f51ee4308dfeeb93e39a1be4b4ac72de052af0575cc239dc6664f42cd57603aec9d685e390483c2d96df9432561c34df6cb6216ae16e42b5361298a43ff2f408fd55c4860eea24e8fc24b2295c203654fdc966cd38000618f0871d4d3377f71c3917cbbed83c63c93bde6b37b3822068ae77315eafdf5b1f3c5d7a9cbf6e60ee61bd74f8ce054cf7cc7f13f812555a8dad80f2c74674ec2f319835dfda801917a8b58bfcd8ae2e10d4b7bc8497cf2a6c34117691ef47b30d60f6632ed550179629c9d5c4496543308a3507a865d1766e4d99401688882495e1415e7b3a59babbe1c7ba9ef96ba89e53fb5f160fb64960ca99a353ba386c5a4d79e98105d243b95c8587671c4ad94a195a2b5223e0a918ccf1276a2da2e2621871da4f7214dec4dbbd27945e83591fad76eb5f2f3f476038072317aaecff318cca6c528e2018f4afb7d0356ad5decba83cf6f299c77c0f5fdb9bf0c7a15a73aca0e5c24ebe6790a9592379aceee487d36e0aec07371aabba69ae9ebc1c64e978f9749185cf1300777673f22f5d21b9d1c2b6af6dabaf74def9b10e4df0c7ea6c0cf6cca1e2178813843d117a54bad56d6480c9be0256ef75114b733d9a480f6c3d2aaeae090fd036bacca57a10e4b2e8939d03e2b19a98bba9296b5905a114c34a3cd18b558697883238c37dcd8a45845b791f57343a157d464bd52c4befa9763aff49aa65b4d45801823335abdb9b2250b0448dd40dcc291cf90e1f709ffb44bb596fe67622e030bd4e8d1a41722b933282dc140a50acc996ed0101f9f152701f60e5611c2b6ae4a2cfb9436e4f93443c386eecc82f380463f58d279417a7e074bde39ebbeba00d1d18717a4b92868b80f628f666fe5954626762a5c74f6fecc7c2510745c65495ee7ca5db04668318920f5d37f829eb4ff4dcc594ba6e7e3afbb17b4a4e78df067f2a79870d6041737ecb9975da608bbccbf2a7d919874a0cba88c09cc7c96b5efb9a0e6f7afa5a1f8b45b8b850f3ccabeef0b3b7d1ba11ad29e8944547c9b964f24cb087781a37c96074ad865a5a7bd480f7a012ec8447024a813d0f5c013191f1060b6dcacc04bef4af5355a927647814b8d6be8516e67d5b19073b73f4b36b1c1f665ff3bb077aec45cdf02e5e504665bcbc89bc6833005e5c23e950c40bb1e8df181845aab04347ac3ad1c49758d4363b474af60e4d7522802f56492657b8a43f7bc62b613e8d9254b406b9bd8dbbe43f4ed79cfd2a0e5c6c9a94d44e1653b72099377b6c4ac0d572d8a317b0a101a26082adce73ad5a6d0f025d521c79def0ca0c0efcada12a74b8e792d62ecb3371da6bd61e7eb9dffb443547e5f1982e6211e3d35902769b4e9a350427922a8579c1dccb5b4233719eca4e08dbf2d61030ad65b86ba72e13ce418df62f44f8f16d142210e99c21a667f1f3ab1b3485737af26f041d6197e1e5c5f818d74134bd868cfcf1e29a2635150a13ed59c4ea60aea57d45feb6bec7707f75a8bd6173bc3ceff7d8415e21ade53cb0c3350d1d8f6f4cdcb85c3d9ea8bb4d1af8403afdd5499804e35a6dc6b1848cd47252fdb36d6db1b9348c414ac2ad72635fa45ca7a606f7e59db5159eb4ca12d02cb36873669009367606b179ed6ec73be77d233ab365683a89bd66d3b8f33679c6d5669b7cbc3df1cc4b7e23f656e70788345eb6a69123fcc62f29fb80a7f2e648bc3076ef141c188c2bef01f2819bc956962559cc0da4bac0e075468d2a29c5d9ae060337490ac2319b51e39ad75cdcd977c23fc737efed7d4e2f84e7fb476f0810c1877f14555d78d2caa4e531c06f2d45fd30fe78a3c328a58624065f832abebbc1bacc7f2d7ea044d71c1538dbb73bfa4da07d8f4eb9d76225303e76f4f61c3e642884abc6a6ee61cef93bdde9110be7fccd51d632136cc458734eb21cdc8b5d037f888597f4a1844e95bad649a4e0f8024de80ba25109e17cbc52e0c1994e194f142a5a7ec327f34d369c1efc9ff0ba3a7b4b3f7ad4dd3cca6859d124d5f774802afd2195e8f2d81dc74cc5587683e9b8448ea3687cbe1ad2eaa40e0ac062aad23d96fd653d240a583949cb3c077cf2738aeb0556671fbc610eadabd356bb98353f3738bbe29eef1acb01ce3c6101c0cbf87cb7581862cf62fc241c0c6b9cc51cf430bdfbdec2232e5d700cbba45f4c32732d80e8cc3281d12333bd015194317a71b5c0630421c9569d8271c5dca31d63b6657f751123ca4bc91dd159c477e79b583558e783ad6f35a1ff5266515b7107c4c5ed453b6d89636e7687697116b68ff5c50ca607b4170196c9a4a4d7026ee0e37009bb065d2b50ee4fba2b12cf933135dac76de734744cfb2a9f103e1adf65b5298601a7df812ab9bf4c86241d57b547d737256a1f71b9ef92604dec10244bfe9550ed255aea9e180bf822972fae39b4c848565198bbe880c41e26d039c65d27ff7785fb7b3272447dc3e0b6a348935cc7ad19f0042b44636c0623a0a923b33e1de6bc2e4dc49193f100296a7fe40127b26776c1dcd9c33f185e107fa1aea7fbe4edbbb823e881c918f81191ca1f21c0c79e943d369339b8497f3bddb0d08da6a198d9eb2c87c3e17be9541c857e2c9463512a038dc9314855ad64e9cbf540c6bad152fdcf899969b71340f2e9ab5604cfdf2a79ffc7d24bb81b83202bcce42e8b45c1e3b43b1159958ac22067d1631ffbb59e2dde0d8b143fd7b622c7c6e271f3b5c2537431b41b5a588f5e7300da41cdf2e49991378138abf0023bf11158c12db619a319b60bc52a5fdcf5a076a038b42b7c786a9be8c7e9a01983c6765febdd0d5b7edbf7d55f674a7ab07b922ad37405ee930fd5a603613014aea0a396dd7763187ceadf193b2c0baf6fb5e8673b8f08e8f12435eb6655f36304daefd44dc2e009fe7344ea9c73768e00f7df17f511672f7ad97bfdd432ae93c04a5fda071fa253eb8cad935ddf7168a6f395d7448592008c2c0ee082d646060c26e6459ee16c5af1abd8b26658df5965195c55d9d40d9b6dc7958a7548b1dbbcf2339a0bc1c804299c8244129db96372e9212f564dcd2da398ec1638eb60bfa64165db584830335d93bfb3d81e67d9fa21aea30cc6c2cdf4ffeb662f34a842f72f55d24d300d5e7596922ffeb3f943027f902921ce09257b155b0be93165b0059ac6df28971d521b16f50bdb1343fc65dcbfa2fa596aee5695db2e2fae3ee07a637782d81de921fb26c0ee6484fbcb3712317da658dda87ea1025aad1d751b370a3f148d7893075981939fe075b3ef8f8cd7be10402a0c353573f2677db76def8b3b694eee7999ada786a331c733d30488fc3f48d2190b644d1c4e8cd49e5c314fbe7c0cea17028ced7926552415d5c57ff586f8618c8e8ddd706d207a530ceba7416610204ce71b8a9f1e880bcabe163d1d04217b271b32cb51334b3b56e4c28b293be557ec8285509238d4ac14bb6805051c0c7cadce3bed300650a5d2e860d2f208ac6a82c5fd9ea678c87000daed243820b284887581fa5c4578aa64a241dea40ad3039912216117cb38bc5cfae9553a97967af2c5e172aac41c6018218071e34eec68eb0a868d3bc6059dcd88864a424e3e210e30eb5234eb6a440b5feb07c2aba747aedb149529de5b16bdc6b8b3ef077851c8fcd534799b3b1196e4dafa213579229b868fa87eb5bf43af72f05a186c7f1b33412d114fcad8bcb1c5d978f0c15a2054593b7e88b08a10d404544f01ef1ffb65eb218ec67dcae22a8c728fe185fd9adb09c44880be415725503b6a3e21d01b8a51acf676ff1e3300805f0e472aadcac3f3efe494b9dcf0b19c079e0f717ae9005356d45c91e51a4b158b631171f2973dc6c9a592948b558a1f7e8b8b3226c2fa189c6b18eb76e749aec8d7a5f8692083570f165af8cf2c76cd00dbf23250fb339fc966ea72922833d3ed9de2b6109235fa1f15c76fe78181f1e50099ac818be97b40424aebfdb8c9bda0c5867b7026a709280a4fe472e6bdf095cd3b0c4583864cd6e8d3e9347eb04c0ea99bb3d476faf752c6dcb93bf82d59930928df39a1cd327571a0fb023cc5411f4a7812a24f3479d9e0a6134968e7f30449756230b73689681b6f77da37b4b63fb7b397e15b0ef97271702f098122b8bbe844d332270103f9588a74567e3eac97d909da7ccb97522d0160168d968d8ea59c2fed0ac00c3469c8f475b821be4be44b8d951f0574ee9f025c3655829d541f56a0567d24ce93f7fcbed450e967aa7f221a577c036daea7795d79547a1b3ac2716ea1d279cf6d18e8458f5b5d95057d0356908b311ca88e29546a2e72c62a4fe5ab51e38db6847ccf2fec1841adc55912823cfd59b15480c414680833be25a5cddd76a590738bce7e2b05d58d71f2d68af5ccea5e21205d0b2692eec23cdecbe74b0ed72e78481f7608aba9fb0797b20562dc6362b07d5c055cad24d2a6d7f07459ccb9e493094b6abce7205bfa41bcdb8a413639954e10691206aaa748b2258b3005776ee518268102bb0062e5c44bc989c09d2aee54744253c88a3810afb5e319b35329863f39970180a72c7f0a0ed32bcaead0a854e7de4f2a503a5b4f0165e52945910304282db3f5b65779bd6b7ee7f6bf1798150d2423587694cd842b43496646b1bb08305c1f6ec484461b24d3fc3f0fd141feb7382885c02dd8c22ab7f6bd835d3b6f2e6b1cd1566edc3abeb85e8175f41f41bf9f1cf0259848603b4185eed59f0f7a58f2aa902a910ee17d2de0f16615d2de3fe4fc2c404bc6351dd77ab280ffc217f86ea2aad61879317a84f9e011d8bd7dd23bfdd561bd657624459c6b1e9de8d7836ca992f12b661658ba485d3c677f4b6e4914e9930f20213f0196eabdf02d55b1ca114a5dc63e4f58ceb98f97d057b4458fe56284425683a577501299bb7af71dc95df11f031250aeb4868bec6290ab6d351c270f326d74a2a80c6a67b83818604167c88800f5b0fa676fd7d10ec1a868a2a22f298eb231f5eef6d0d808636091ff34c796f762b59d2ae949204f485c698a3ce43983ee26d42a387dd0b854d4b905f7d72466dfa90b99cb8c1de3bde566dcec54e6cbf3d876bfbe9bf2c2009ab5e8e86ea528d9e91a20f4e635fdb2b18802ac8506c3628a6fa0a6d732542d25aaf67050a74f66d50226b19ce6f0f1257b9de4c0824830c4ad8af67e7d8f0594bd94a061a7c92efd0d8c9d49994e8a8fde9fb4eaa8449a0e1e7d1f642333d008e4efc077c97f8eeaf525ae3d29ed7bd3fe3ee7f625c868b7ca7239e9522c7f27ff2d48ec485b4b63cf9aa6b53f5645053bce4f82cec20f39e4f5acb8fdb63e1dbb5453e46843d0234ee908ead7e5b26351dd9344dbf01ed283ceffc7bdef2f23f82709d40d0bd04b6e45f7cfc788e3430a89d7a8cda99b8fbbd8f73d0802f9bdf4836f3280b84825278838f8878a9129d63a251ee8ad69beea37526babee44b047588c358fcb4e38fbd1911e78441d0f73537785b02cd4e5fe8a71ec718b3068244ef0373022b26a6f7a1822e61a7674cfe8d54c428de62cd13cbbcd315df95fe0b35118b72eddbd0b7de05c60574d1b486fab6940d6b0a33c40122cd4fcad758ae7c315435c6f7adead905e0f03a6af34bb94db579dd3f7aad28f14944b4b3bb2b82124a356cb9678d6a4d7af2eeccf4e3b0282831ca57d68b70e44ebdbeeb1e3bad6b68fe324772957c97eb5dfb973c15b58234b8e6c4f599658824edbf47184ecd3ef0ce45ba19379892b2f67b45a2586ccf349d6071dfe88e19b7830ab223c3ceacee3c6420f9e433c8521bfff781de9050222b6de27bdf854c0e7ba9c4cc3fd8504e082999291f222ad3387ecb5fa919958c9231e7ca2819125bc19898b907bb131da8e513ea7893309ecb37b70d8de641ce8daa327df10b4264d4e2b82adf84127e8a5a590007ab9439c3ee72ed2c8e37533890801748fb16f11660267709c6192d9a6c88d8d5d43ba6374c4fce56449498a064a5ba6976a3b45bc9b63870521e25862257f4f7e4e129900b06269553b38d633457493a4f4bb128abf6361162eb3e8e49b86c0b9e55e5eaad124caa7f0655773c70eb1d5401ba3e5917fbf3f02e2d825d0e6b69281d2f4c141a5bc164249755cac368c1d9a9b2ac807fbb7b195700160667bd3cb6fb148d17ee189f4935864fdc930e78744db49d15eafe59b77dfbdf73c8f312e525071d53fbf9a49cd94221c463ff289d2c5efee830956273cd663201bd11648e7203f4eecccdba892a20d2732c72c5c1526d67a190fb0481360ee73a3f5d1b0103cda3d27c4c2ff616e02e1c9f770dca0e48a893517673185d807a536e011f480492824930d431147a69ea2e5ef2e2eab114c5c59431dc66eaa017d7aa08d9bd9f91e2dce7016edbbc3def01ae24396e5f4f55897956c8eff78a7f4f9e6efcef983c00bce82d0178b4e19e85df58c571f450ab365bf9aa5b427023852d0da163f01f067d58408629058192ac8710d363db2704d3b68fd1f5ea777e842656e739141b07e3e950f5a7f409524f8495d87c27ab92faf58291c93ebaf04b4ac6727a7c494c75fd91822ab496eabd8de33dba2fe6ff345297cd9eee7dada206506d85c8835e391d0c0515c9fb934766e050e465fe6b8d2072c83c84dc8d688781d30f128dca9b1c9fba38a8adf57ceccbe45d9a3ec18d29deffec6d80c4d4fd1b59971d156b4e10b74b7b8aa4cf6cf941f0a37aca1a6e0edd80b00d9b9788e3a0c1a5816d1969f026419b495aca1fe0e5665f6993edf383e8ab64cd095c8d462fa2d66252df65779ca45318c558c3321c09cce02d04164be4c010a20a95d7376213b8a78e93809c59ea7961ccf123bdac270dec72ce7bfd0364fb073ed0e49127d7d5f2df477008bbb17be8fcc99c968d9e4149b88119b7afc37ff60d53525f72f333e3aad859b6db1475fbb0065191c2c5b0f592c21527cf8e0f52b1b238d5694d4d7fd8cb991365e5005898031c644fab2f544bfcefcf280e700086364ed34b0ef1dadfe618a7e970a30b313ae1b1269327b324e22d4a8a36fe6ae172e3424ac0a678eca74584edeab2b01f2bfaf5878d57702fff7d7ac7a8c091cdb82fe9e447092bcb7521ea8aa56713cf75d39cbc828503de01910b3f266e77a64d7ffc84afd3d00819a8832ebe219188e933887f2e7a55ac7155dadd22ce29a6a19fc229595fd20f74450d42fe27c2d3badc2119907f9f0e5fac47f8700850d47a7715c9f13682044c73a618faa921572af119b9f7ebd79b0284faae0a58fd0b663b46b2f1d7cd785cda6d1e2eb97a06f4c1687d62e7521e494a9f27025b860ebc5c322a427134c23293306d41b8fe4971ce76e6bba45b1dc2870ab0f9721bf953183dbd07063e7fde3566e2301a44105708d25b2dca9a4023bca844c6e1dc511cd3d8e2b786f1b23e47dbe73d74bce97934e1a1ce6326b5862f030928c22685ec3c85c9b425d7ba511988c17c03e28e908186302a933e9b9b508affa265f089902f8f82974ce40d687085332d2403c8b253729bb2afdfe40b76881725cc975afa14bda1f568ec0529a28dc4020ec7070056eb2d892e8527689c5f25f2e882b736edb965d9ad1e6c5c3b51c5c76b810eef97788028bcecc2412db01368e51b87b0c56b8743552da5a89e281c17e043f03eaf5733ecc3ad19431ebda4b6d35a486f37dda01dc59903f415d6b67b659a67a8388778fb34b17094b9d3a991da132a8de5685466f345d6e0ea694d13db666000240a8d5490310c62451b2cdc279a6f5416bbf365b3f1a6fd1b0c161f4a4ccd07ec92827fdaf2785acb367d65cf5f429ba3e2d7747e27b6e31fbe7ce2c663d74dca8ddfca717e3c4d3d1ef7e04436e7b04df475a03398a0d238adcc569b499b39f500d208ac3ff698c571d18c63e274db294489ab9ce080153a008fb5bf6381b56f324249471f2189813c911d7401cdb960ff620ca8b9382967e2f317644a2c191938a69a2c0c2a008f7f507633d1208b903df7c98f2d4f111097ca577cde4d7df7aed2c93eb63f47a7aea4ef1d4e6bf39ff92886b5dced9ce616270e0f7e9542e1db9c127544ac4a4bb57357fbb8ad722d10f5ad6cb6e1e8eef4516c58ab7ed55829200d50a50f6783e7cf926ae565995e9557b047ce1d6c52eafe8fd728efbd6ac43bbf9d8a124deb167306d016d967ed623115f5e679b46df991a81b5949ada7c0cb2fbd108456ebcf7acbaa422f98f35a48a8fa56dfcd6af6715ee150d84f350f4dcc603eef8714024bc8984be4782f2f2403b9cc22a721ed273297cc99ec23f6f1e396a68700180c288837282b87f266cb8caa888b735a4fd9fbec25bd5f4acb81acd855d1e50d9879fbc70338cfa579d124d5f6228016ce6fb22f3915b863173d9dde22570a918488d465f1cc3429e4ec0ef37d1cfe6cb56ea68d68273d0b715fce1a334e4fcc15c26e2501298bac27111d4968463ab8a7df8934ae9fca946696a136ff0119c1a96821b253cbd6d31244882b234dfc7c0e138178a69c2427fd9aff5d7c54860ddc81587da305c13703a7abe281f4201433ccfbf765f110838c62b219413dcb6783ff99c5c57ce589bb8b877e51320bfcfda713d517770446ec60375835815d544693a8f0e762c84461da44403bd3cfd93b37ff47907e5eb79c4511349a809efbb0c49767d5235e3ab104c880f3667b72836743cf410e95f565f594be0bd5bc5b8492e9477860e67d80b59975fd4ebff6c91cd3f77cbcf3bb72e18a6f9be96d82dda1f730dbac790ca569add88a45f921b5d22af4070d17dbf261ba0975180e14bce3ccc52cc2ce1e9be2f06c5201c955b1baf6d54f5ca1106c2142a7275d8b03160947af422f07b9bf927da559e213b45aabc3d8163411b7a7919ba4762f080f936b5a838bc78572b5d83847aa768c7dae9cc91fae390735846fb61953b48040359b296643c08c3908d7282386e8aaf69e3cd097b89af10acc1bc3c66b75256f79effc8d51a0d286c965b53af003532cb493cbe4af29d84a310f8654097fb6bf24aa9979052ddf602489d189cb0f9e131511675ae521b7b1a9cbe45d9cb59ecc8dda7b31e99e8fbf7d93020ab301c7a7678665f9ce2d1c9f6897265c1c15a85f9f1c0eeb7342bff18d07088dcd199b6c10149911ed6c7806d484b39779d5774c1458ace64c707381fc3a3bef9fdfa96ef7a76b59bc53a20b8922596b6503cad204ad8c2e396700edaa69aef1070ad442273797c738f111e5093d7a0553adf4287e08dd2f0fdae23b5ff38d9cf56214c86d6d3cb06974d69d2b60412026fa4c0e30b442d9510334b18ca6b0aa3caa6da54e6fa540c0b218a4e01d92b21dd88244961aab4d45b6783767148197497aaf9ed074cb2fb1c64411e7ebb243066b77bc69ced17e1bb449fbf54a990af93bb46a4ee53074f9ea83fea8eee9737a24f5dc5d119dda60a2655c4bbe43a5b0df103dc73b9fbf0d28db9323ad38b907f3f03bf0653c8add6e4ac59dc48063cdfe5ae3954c28ea8f34011cad673b10e2cb4a51e2e0daf3b74fd0376b4e916df3d118498a7dfa16abd30be169607a0b3ad1a93f7a4c7d5d39cee0f760b174f00dd8b2b812b4fd7d300d6c2aac92b298ecada4a0ed55825e17d28d07fe90a971fdbaccd2bde7c0905cdc3ddb6e39fdc9561c98b4a3f9d844de0ba070d592ab349dee9fcfc8ac036ad6468d5eea4007ad2b22520ac5c0be90c7b2ca5b799b6f3465a49b614181d6c2f0bdf52a157209f91749751bfa2b1f447175b039f90d0ac23e01546511f9bded959dfa2e6bdc2975742c8c5f6484f871c5676d64aeab461bb766d902f4c6a6d257e50db78c024eba24b22af357322c5c8f25b304f0a46fb6a9a843044b310a70500bce91840a40eb4ea6a9f3d0b8ff91c73800da23ecf346865e73af25a9e481cf6c094ab742e3352aea69574916795cf26f2c9021ffa3b67c3c842b4be2b0544f55c7e3406704e88f59216eebb734f4a4477e1a45a703ca64dc9caf64b59da3764fa598c54e241a66bbfb5f9ec72dae2fce4d86f83c4ebd496caa96b25aa3eef1ce59f7078ed5266d61f5d189840df74604f4c8771c1aba5d560fd5b81495f556cb2b64505965c735cffa8a63584906980bccc5b5ec95d183a2ef9d18fcb40ead509a6cd8c25260ee3dc5dd6602e64301aebe65c74528f86b05b2b671499b87a2616f0c1b629d9fd7969d5a3a8518d0b563157a1e910db068f35d59dd0f6356d71d8260e588ef8a8004f2155f0c206aeb36d3c982c19c15023125f72a31e796f12aa4335895f0b0e0d9f0a584d99694ddfe336582997f7279802ea5131ea436332b6072b3506cd3ace52f0074043675db434c66377606981f519c11e43ea3ae57bcbe136aa5772e918481f55e21b6e97f594852d18b39b208ee95cefcacd0d3206db25b47603cdf14276ca63cc3e45074f3180ed5723dfedd35a6a99637063846a67218174a0c3f56cff318d3100c86d5e2d96e40488739e3aa3ed2a31ccad4086745504d58a0d130f3c10fa8b9b9597d7bfd29cd1f238bb28d42c070c19f19d81ddd3be1d346dd3fc7354b656eea097f5917e2ddba206f7d5b1bb387ccf04a7cac351f6d3c340492a598a4f294f1842f8654c3ab63794ce8df0529c979173972a4ab0ac49224d12cc67614c3d6f732d631c530e6638c4e33c982980f363bde7389f12ae15b38a90996565012e6cd8381f354d616541115da216581028c8875a9af33679e553feee349c93d1399ff66896d72a7a867999950e4e2b795dff2887c71420f53a0b43b5dae7bd41a19164502aab2e125517bf7425f83a5b4fa58f1171bebfe806d60439071f99fc4c6bc3eee4d9af890cbbe0947fce561edd18ecf5b789ed0f66d065e0ffc067fe130d136649fb3f79c03c324895058a2cdd5e4ed658c9edb777ba176c84b21cec2c6c69e49fd9aefeb4a13591a21a25a39e40dba66e359edca01b4fbc16b52f44faafd1edf0cd9bc612817849b5b9505fb2f36f43647baf77df16543bc70b4ff8764cdae4f224a892091d3d6a0d5fed5640a2bc87f76e86a116c91ce167e6a488603c5b9c312beb10aa55671ca40a4338de271e0dc0957ebb4d2dc6b2ddd5e04fffd07c0f6aeb9bd84914e3e87493c2f713578f8b7e0ad2f1b35f29b924348edef8f75ea462673002350dc6b9007849e28587038730ca071703c8725c60420f96519a791c6088afdfb993a42aa091315e40afbc295161730f1ed87b44aedda84241763a3470100e8f48eac28c6fcd9fa4ede33f05898b0dbcdb472d1f49775f7fb7788d3163dee8c186b4a4500b380f3fc59cb31a474e44e9cacea1552e4f09c173cbad83984785053e77d5dc6da1acc545b00652c34a71b49f68375da8f58b31538a7dd61715335dd50cd280c599d9cbb7e054fbbfd8fc24e722cde7e6e8649060f2192e0880581cb96efa39196298564b7e2699f9711f28503e66e649abd65fab207e691780f307784e7e816659d707dbf2e97f25b4a0c8e41ce7f36f8a4e80c0334dc62ebc16553af85bf576af8f554334a521153fdbf05f541ce5d1927c4e22924747a8f4c69fe2ac8001e9cf870dc9b7b0797c1f8748e8a77a83f19d24e583e08fdfb446650a4d504ae8bdb608a41d773373c96c6b488ed2a885ac3322a22bb65c103e7ac7432bea8eb6fc50b64725e1d1f4985b15416c86ed8f7a2d493b218addafbb92c64a7a819fc78fc85c5f4e1d724b15c98d8c7004a509dab44b3964a6360ba86afa43e67163bb5ed0e4c97c76de035a053975d9b11af43ab6cfd94dd38cdcfe2ffac285218814baf3ce6844f3466a0d6f56490e10256aa52e7d94ae7fc7da1fd86904dbc07ff4e03b4dee9e19b6dca570f1d51fedfc83aaa767b8ddfc12d236088832cc9e41a2795272e37b7dabf471d83fff62a3ea34ea89ad026f9ef06ef108243ad2e2adb2ca23d502ae5c542a571c93bb7e072ba23aa27408bd4204fbf6c462ad051580cc64af01312017e4a07eb78cd5ff574135baf370dc5ef212e09203272db72653464beaf0d6216b89c294a5933db1c20f5092299a3e272fed7e1f33ba37a50dc65282714beaefd2452644bc1c91fc4b01468f34215a221ef7bad434cc37b3e96082c568399d4787ee493355b6c6f09b710a9e132c3913222486ac1be2ab6a1503a7e30c8e02d21f890a87e1696440db8e73dfa58d84952894c4db3efa04bff3e6071a56589e5f54b6403b9a90ce7cda453b1da404b9bdef47e3d8420160e6899fea9403eba32f378b0450acf81d9ed18bfe045bf8c6da61378f229382a6ee3491c18a9e075a9bd80d2d1809ac96d8e05867d327eaa10a7e1c23e25ff1069e5fb01aff9cecdfee5faf4e7caa4ed0c0214f602b7adcd874568e57b2b5f7401170eb49c794ecec8df6ebeb0fd543e97ab75b2efa419aed6f6e5cfdeaad6a02db4fc2d73506e98331e8332b304b028bc5e0b6454331a0abc88eb23e57ff31347719821df5a230a133d71bfb1c0b1692e9b13155c06767ca886c20d2e02a12979d34b8ced4ad62130d7bfa422aea5b8f1b1387e2e2b83c3ab614f7cb0c3010671a320ac7bcedbed484ba8a420d0a3e438fe5a3b969636f0172467326498378a1100853d4644d15f1cf366596fe7597856096a8c90f7d3fdf84efdb3669fb3146fd77ea081702fa7de5d0ac998f99db39bc1dcc57ce7c0bcb1f9c2ca4cc7ed91da6bb238b9eb1de5ae6ef1bee269b2f41411140d57d722cd09a943349471890ab93b8abd6595dba31aa5247c48bd7d5663b559e3950f0cffc2cef13e0aa79d3f2d1adf1c6fda5d07d2bb2c1de9908540e53fb9d33593439bc45743c0f1645a5a2e08b96618b3a8c8a8c67fe0b5106974a69c9181f53435b07d9385c34df29e57b0c727c466df2469e016ce84d3e0e357c1f38ee85663dccc99d35de02414b9042608557e0917e8e927dc51175c78affbf9e482bc0ce831025101e2dce7c7e311fc54d2c0925705859453fe834ee539f5fe986cfc3b05c2cdb53a233f5ef5b4bedde582f53659b6dc6c2f46e74e994b569847f21a57fd3ae8991d06b46ca8add7eadad496eed88f3e7584376bc24cc35cfc6d426856dd9498abfd30a96d5959eb7776ea221fa02485a6c01559672e280c85c4d5c1937349cf00946967b76e787f9dacd2663b318bed64b4f7e38423fe79e556927a507c7b4f7afb933e7991283b08635a886409f2f496675373c97cf6e4c3e9b241bf4dfc604ff7aafd94fa735080989c270d8bf8711361acfad42b16eeccb13a80a03066c991deec64a4bf47425b5cfd6ec3ca4c14749b6c6398fac0d81f8d4225dee4ae4b6dc1c9596224cebe2a53e8fbdf31e5e0cba21157efc344068114f6695975a0661eda7c551d78451d2455dc9bec33968bcc81f4fcf16143aa5a634f47193234aef26fafed265bc29c9e8a7fc4df6a70b51fe73dc40d49f3767904964f80601be34566960c240f67e5894ffb6c9ac4d3be9b771127822bc0c2858de20cf662a728b54c015a0fd3ebb888cffe84bd6b04312477b2d5d26b3978b5820c98b19c116dd07a4e16583d917b02353531e187eda89f3370c4c496698cfe65b48e8163c5a568f1437e4a7ace7ba0b6fd2f220f72b4f20e837769954b9c0aeba37e8024632a02f8efedda2a7aa457d7d310ad467f6cd5bfb4e42d5260e12b7dc42ce5256e5ef23bd23af8622e321d713acefb1473ee13e92dfed1d39fbfe2966a7e43cd9a45ca7fc6dc150078e2c57823a4a6b0ef5a12f824f30aa9a2a040967064e13c1ada4dd5525327c7612558041412113a8bd40adaa0d4dfa0636360c665a0b080aee8f30e9bf2302219d4f8e7208b39947ced1559dd29032e440a5fefec8f7a8f969690158b0e38f7eba3249e73a1afe14d6ac08638d34924aeea921fea23addf896c71b26691fb7f521f1147120b5b4c31bd2a386e37b83157c82b9d3bdc44483529fff5b9956822c7c36639bc9762c47729f6d2f731caed80950e897c338584fd0f4f3dbc10e1b4fb5972e515ba8ef6a1d5b4597b86b477f7d8f09f63987b3250d0f367b26d287a3e61930836daae00dc936324ab6077c7b8c8984072937e1955af1b4ad17edcc5763342f23d651883d17c68c9ee7b321e8f4024f9fb5952186e5ad3804418c5a3a99c8f9bd5a2e22fb896fff1bf44725be4ad1cd375de3d9019c02cd8d22549aa10784d3a54b23365049f42d7550dc711e442ef9f120e184a2bb0795155846180d380627a2772e9d47f25344d27428d0b9b9fe9159f4def701ac7110a77534902a7356dca18527eaf3ca9cec4c53ff76ae460bb3d64affeafbfab637851a11e7f4c5bceb571de843e480270b1b5c7678c70fabdb3114c90bbd9bfdfdf70c61d7984cb7097d655b175e1d3fa1cb8ae53f212e35b9596f02f75e346a64ef2f3b86d5e40fb0a79b569fdd7390875451562cc22b81a7319b0a777363881e0242433c43b81c249bebe510ac4571c55fb834c06eca2a75f3f63a76eabd998e15c15765acd1daa7fa339d426f4b164b2e3a8c5c86c4bfc696dd2de499762c53c42cdcc6ab351bdc324310bddf0abb31d01f9628a77e29a8b6f84e443975b9bdc56fd43b0090e8436ae3bef411558762e23e787d54bafbe3a79d55be9549b10791c8b1e36b28c324e09312d38044b439843843503dcb56202db4de838352f8b9fcfab6a75f18c382777e970ea4e46077615e0affb4c4c6d1e9c8a50dd9d0fcd5c443a80c204b068755e24a21ff30d6c26bd15796c921279924149d84c4b84bcf69ac13c6ee9d9256d45805dabaf0af726194671d4f07c7db945b62203c732dd7a8bb607504db7acede16873fec225b02745cbc6125a047d301472519d6da1b58d8e1e7d48fb7377d81c202ac53c1dc3b5d8856863a91785b7874af84ab55d5c79b7a02035169d21e9011c4850a9693a83fd66a0d2af8459d9b12b7111d9aa1f5a23478bf481bd435b2293309000d43ca9be8b052be364dd7a813a642219e1bdb0485daa004adce9a7366c234ea2bf731cb5b11c8ecef39e84e7d845c3aab917d3e98655bf657b39eea0837d7108abaee486cf3680467335a236f9a8833cf96648af6ca44a60c94460975d09fbd36fe4a41e34f87800a846837621622a3670e2dc703baffae875cc9bae4f23cecc5b4b1cb6be1a1f37bde6a77a9a3072d01fbd8afdbc892b3940e7bdcb8e77ec05211ae26780c33d41fd587bb06800f725924dc6c877713d6047155983bb60e5a810848427a920b07a185f51e79f58a98b2d4aa20bf4638df8f866aab4e4531ef7c8705bd31b7bf0ae18f71b82bace45980326ae626914be2bf9c18e6b9b84659e5b4b5f0f1d3283b5c4ce437a76279e9c1ec3dc2e287b15dc0881a7823d722070866aac64e3bc95e66a6e3a3cfd73c14b9cc88bb82c5e0a92656354026cca2101ca42d8fa2568c982c901a212833206e118673f7b9e89622975d3203da48bde1e7c6599e19d72ee6cc6b96478fbefaf91923ead4f115b81ca462c27d953f766e175932b1990eeac46059ade2417912a8a70c90c705150d389fdd6dac854600d99812e712dbf8799ee42a2f78a187a25d76eed05fb238fb752eeaf05d245283eb0541fed3623ae7637455688098a52611ced1792e9d8e154a9a4fdc76b90759097a0b45bcc71f50af499eac885547209da0d570831c739ff692eb4dc13114428e051c4342d0fc5c9fbd7eb31ab6c45380d52cd2f888d56a11219734cfa36b06df241680eaa765286d0e25142a646844221750fa5413519237fcabcbfe3221b4baabd18fd3ec1411621c9bd709ac0f14aaa5701591bf4a4b51f52e1d9d261285e29c420ee3f52742397a702c67645080fb668aa5c39891e918b54a9a2ee6a238269e1fbd5e1e18276939105662bfb1c300ea37c1b2be5e4819c5649f177b6df7de0e145bf695f883aacd655fbfa5905c9dfa434cb4034986f6380432dcdd0ffec4c5a9d71db779d42eda81812bfc91a6ebd4cb058972aa004d5483231e0d9da62df879c385d71f7186db21f1f2e4a168699a4e634fbf438eb7e298bcd965670b14c1bf04ea5cbc", Fh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
    !function(t) {
        function i(t, i) {
            for (var n = "", e = 0; e < i.length; e++)
                n += i.charCodeAt(e).toString();
            var s = Math.floor(n.length / 5), h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)), r = Math.round(i.length / 2), f = Math.pow(2, 31) - 1, a = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), n += a; n.length > 10; )
                n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
            n = (h * n + r) % f;
            for (var _ = "", c = "", e = 0; e < t.length; e += 2)
                _ = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / f * 255)), c += String.fromCharCode(_), n = (h * n + r) % f;
            return c
        }
        t = i(t, "QUNEE"), Fh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
    }($h);
    var Ah = Fh[0] + Fh[1] + Fh[2], Nh = Fh[3] + Fh[1] + Fh[2], zh = Fh[4], Bh = Fh[5], Dh = Fh[6], qh = Fh[7], Rh = Fh[8], Lh = Fh[9], Gh = Fh[10], Yh = Fh[11], Hh = Fh[12], Xh = Fh[13], Wh = Fh[14] + Fh[15] + Fh[16], Vh = Fh[17] + Fh[18] + Fh[19] + Fh[20] + Fh[21], Uh = Fh[22] + Fh[23] + Fh[24], Qh = Fh[22] + Fh[25] + Fh[26], Jh = Fh[3] + Fh[18] + Fh[27], Zh = Fh[22], Kh = Fh[28], tr = Fh[29], ir = Fh[30], nr = Fh[31], er = Fh[32], sr = Fh[33], hr = Fh[34] + Fh[18] + Fh[35], rr = Fh[36], fr = Fh[37] + Fh[38] + Fh[39], ar = Fh[40] + Fh[41] + Fh[42], _r = Fh[43] + Fh[44] + Fh[45], cr = Fh[46] + Fh[47] + Fh[48], ur = Fh[49], or = Fh[50], dr = Fh[51], lr = Fh[52], br = Fh[53], vr = Fh[54], yr = Fh[55] + Fh[20] + Fh[56], xr = Fh[57], gr = Fh[58], mr = Fh[59] + Fh[44] + Fh[60], wr = Fh[61], kr = Fh[3], pr = Fh[62], jr = Fh[63] + Fh[64] + Fh[65], Mr = Fh[66] + Fh[64] + Fh[65], Er = Fh[67], Sr = Fh[68] + Fh[41] + Fh[42], Pr = Fh[69], Ir = Fh[70] + Fh[15] + Fh[71], Cr = Fh[66] + Fh[72] + Fh[73], Tr = Fh[74] + Fh[75], Or = Fh[76], $r = Fh[77], Fr = Fh[78], Ar = Fh[79], Nr = Fh[80], zr = Fh[81], Br = Fh[59] + Fh[44] + Fh[82], Dr = Fh[83], qr = Fh[84], Rr = Fh[85], Lr = Fh[86], Gr = Fh[87], Yr = Fh[88] + Fh[89], Hr = Fh[90], Xr = Fh[91], Wr = Fh[92], Vr = Fh[93], Ur = Fh[94], Qr = Fh[95] + Fh[44] + Fh[96], Jr = Fh[97] + Fh[44] + Fh[96], Zr = Fh[66] + Fh[1] + Fh[98] + Fh[18] + Fh[99], Kr = Fh[66] + Fh[1] + Fh[98] + Fh[100] + Fh[101], tf = Fh[102], nf = Fh[103] + Fh[104], ef = Fh[55] + Fh[105] + Fh[106] + Fh[1] + Fh[107], sf = Fh[108], hf = Fh[109] + Fh[100] + Fh[110], rf = Fh[111], ff = Fh[112], af = Fh[30] + Fh[100] + Fh[110], _f = Fh[113] + Fh[114] + Fh[115], cf = Fh[3] + Fh[47] + Fh[116] + Fh[1] + Fh[117] + Fh[100] + Fh[118], uf = Fh[119] + Fh[120], of = Fh[119] + Fh[121], df = Fh[122] + Fh[123] + Fh[124], lf = Fh[122] + Fh[120], bf = Fh[122] + Fh[125] + Fh[124], vf = Fh[122] + Fh[121], yf = Fh[126], xf = Fh[127], gf = Fh[3] + Fh[38] + Fh[128], mf = Fh[3] + Fh[64] + Fh[129] + Fh[47] + Fh[130] + Fh[131] + Fh[132] + Fh[64] + Fh[65], wf = Fh[3] + Fh[133], kf = Fh[3] + Fh[134] + Fh[130] + Fh[131] + Fh[132] + Fh[64] + Fh[65], pf = Fh[135], jf = Fh[136], Mf = Fh[137] + Fh[81] + Fh[138] + Fh[81] + Fh[139] + Fh[81] + Fh[140], Ef = Fh[141] + Fh[72] + Fh[142], Sf = Fh[143], Pf = Fh[144], If = Fh[145], Cf = Fh[146], Tf = Fh[147], Of = Fh[148] + Fh[81] + Fh[149] + Fh[81] + Fh[139], $f = Fh[150], Ff = Fh[151] + Fh[38] + Fh[152], Af = Fh[153], Nf = Fh[154], zf = Fh[66], Bf = Fh[155], Df = Fh[156] + Fh[120], qf = Fh[156] + Fh[121], Rf = Fh[157], Lf = Fh[158] + Fh[159] + Fh[160], Gf = Fh[161] + Fh[159] + Fh[160], Yf = Fh[162], Hf = Fh[163] + Fh[164], Xf = Fh[165], Wf = Fh[166] + Fh[164] + Fh[29] + Fh[167] + Fh[29] + Fh[87] + Fh[83], Vf = Fh[163] + Fh[114] + Fh[168], Uf = Fh[166] + Fh[169] + Fh[29] + Fh[167] + Fh[29] + Fh[87] + Fh[83], Qf = Fh[170], Jf = Fh[171], Zf = Fh[172] + Fh[141] + Fh[173], Kf = Fh[174], ta = Fh[175], ia = Fh[176], na = Fh[177], ea = Fh[178] + Fh[72] + Fh[179], sa = Fh[180], ha = Fh[166] + Fh[181] + Fh[29] + Fh[87], ra = Fh[182], fa = Fh[183], aa = Fh[184], _a = Fh[30] + Fh[44] + Fh[185], ca = Fh[186], ua = Fh[187], oa = Fh[188], da = Fh[189] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193], la = Fh[194] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193], ba = Fh[103] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193], va = Fh[195] + Fh[47] + Fh[190] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193], ya = Fh[196] + Fh[72] + Fh[191] + Fh[44] + Fh[192] + Fh[100] + Fh[193], xa = Fh[197] + Fh[64] + Fh[129], ga = Fh[3] + Fh[1] + Fh[198], ma = Fh[89] + Fh[199], wa = Fh[62] + Fh[72] + Fh[200], ka = Fh[201], pa = Fh[202], ja = Fh[203] + Fh[81] + Fh[204], Ma = Fh[205], Ea = Fh[206], Sa = Fh[207] + Fh[114] + Fh[168], Pa = Fh[208], Ia = Fh[209], Ca = Fh[210], Ta = Fh[211], Oa = Fh[3] + Fh[47] + Fh[212], $a = Fh[213], Fa = Fh[214] + Fh[44] + Fh[185], Aa = Fh[215], Na = Fh[62] + Fh[114] + Fh[216], za = Fh[34] + Fh[44] + Fh[185] + Fh[217] + Fh[218] + Fh[72] + Fh[219], Ba = Fh[220], Da = Fh[221], qa = Fh[3] + Fh[217] + Fh[222] + Fh[38] + Fh[128], Ra = Fh[223], La = Fh[224] + Fh[225] + Fh[226], Ga = Fh[34] + Fh[44] + Fh[185] + Fh[217] + Fh[218] + Fh[44] + Fh[227], Ya = Fh[228] + Fh[44] + Fh[185], Ha = Fh[229], Xa = Fh[230], Wa = Fh[231], Va = Fh[81] + Fh[218] + Fh[232] + Fh[233] + Fh[44] + Fh[185], Ua = Fh[234], Qa = Fh[228] + Fh[217] + Fh[235] + Fh[15] + Fh[16], Ja = Fh[236], Za = Fh[237], Ka = Fh[238], t_ = Fh[239] + Fh[81] + Fh[240], i_ = Fh[239] + Fh[81] + Fh[204], n_ = Fh[143] + Fh[131] + Fh[241], e_ = Fh[242] + Fh[83] + Fh[243], s_ = Fh[244], h_ = Fh[245], r_ = Fh[246], f_ = Fh[237] + Fh[29] + Fh[247] + Fh[29] + Fh[87] + Fh[248], a_ = Fh[75], __ = Fh[249] + Fh[81] + Fh[250], c_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[251], u_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[252], o_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[253] + Fh[81] + Fh[254], d_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[255] + Fh[81] + Fh[254], l_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[256], b_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[257], v_ = Fh[249] + Fh[81] + Fh[250] + Fh[81] + Fh[258], y_ = Fh[259] + Fh[217] + Fh[222] + Fh[38] + Fh[128], x_ = Fh[260], g_ = Fh[144] + Fh[100] + Fh[118], m_ = Fh[261] + Fh[44] + Fh[227], w_ = Fh[61] + Fh[262] + Fh[47] + Fh[130] + Fh[18] + Fh[263] + Fh[44] + Fh[185], k_ = Fh[61] + Fh[230], p_ = Fh[61] + Fh[264] + Fh[120], j_ = Fh[61] + Fh[264] + Fh[121], M_ = Fh[61] + Fh[265], E_ = Fh[266] + Fh[267] + Fh[100] + Fh[268], S_ = Fh[61] + Fh[269] + Fh[72] + Fh[200], P_ = Fh[61] + Fh[269] + Fh[18] + Fh[263] + Fh[44] + Fh[185], I_ = Fh[62] + Fh[47] + Fh[130] + Fh[100] + Fh[118], C_ = Fh[61] + Fh[244], T_ = Fh[270], O_ = Fh[61] + Fh[271], $_ = Fh[272] + Fh[44] + Fh[273], F_ = Fh[61] + Fh[274] + Fh[225] + Fh[226], A_ = Fh[61] + Fh[275] + Fh[44] + Fh[96], N_ = Fh[276] + Fh[277] + Fh[278], z_ = Fh[279] + Fh[277] + Fh[278], B_ = Fh[61] + Fh[271] + Fh[100] + Fh[280], D_ = Fh[61] + Fh[274] + Fh[120], q_ = Fh[61] + Fh[274] + Fh[121], R_ = Fh[3] + Fh[100] + Fh[118], L_ = Fh[281], G_ = Fh[262] + Fh[47] + Fh[130] + Fh[44] + Fh[227], Y_ = Fh[61] + Fh[223], H_ = Fh[34] + Fh[64] + Fh[282], X_ = Fh[61] + Fh[269] + Fh[100] + Fh[268], W_ = Fh[224] + Fh[38] + Fh[283], V_ = Fh[62] + Fh[25] + Fh[284] + Fh[38] + Fh[283], U_ = Fh[3] + Fh[25] + Fh[284] + Fh[38] + Fh[283], Q_ = Fh[194] + Fh[38] + Fh[283], J_ = Fh[189] + Fh[25] + Fh[284] + Fh[38] + Fh[283], Z_ = Fh[224] + Fh[38] + Fh[283] + Fh[15] + Fh[124], K_ = Fh[194] + Fh[38] + Fh[283] + Fh[15] + Fh[124], tc = Fh[189] + Fh[25] + Fh[284] + Fh[38] + Fh[283] + Fh[15] + Fh[124], ic = Fh[285] + Fh[277] + Fh[286], nc = Fh[285] + Fh[217] + Fh[235], ec = Fh[287] + Fh[114] + Fh[288], sc = Fh[289] + Fh[131] + Fh[290], hc = Fh[291] + Fh[20] + Fh[292], rc = Fh[291], fc = Fh[293], ac = Fh[126] + Fh[44] + Fh[294], _c = Fh[127] + Fh[44] + Fh[294], cc = Fh[295], uc = Fh[296] + Fh[64] + Fh[297], oc = Fh[298] + Fh[131] + Fh[288] + Fh[114] + Fh[299], dc = Fh[300], lc = Fh[301], bc = Fh[302], vc = Fh[303], yc = Fh[304] + Fh[1] + Fh[241] + Fh[18] + Fh[305], xc = Fh[304] + Fh[18] + Fh[305], gc = Fh[306] + Fh[1] + Fh[307] + Fh[1] + Fh[241], mc = Fh[308] + Fh[105], wc = Fh[309], kc = Fh[310], pc = Fh[311], jc = Fh[312], Mc = Fh[305], Ec = Fh[313], Sc = Fh[314] + Fh[83] + Fh[314] + Fh[83] + Fh[315], Pc = Fh[89], Ic = Fh[316], Cc = Fh[317] + Fh[47] + Fh[130] + Fh[217] + Fh[199], Tc = Fh[318], Oc = Fh[55] + Fh[18] + Fh[319], $c = Fh[3] + Fh[64] + Fh[320] + Fh[47] + Fh[321], Fc = Fh[306] + Fh[18] + Fh[319], Ac = Fh[34] + Fh[217] + Fh[322], Nc = Fh[306], zc = Fh[34] + Fh[25] + Fh[323], Bc = Fh[34] + Fh[38] + Fh[324] + Fh[15] + Fh[16], Dc = Fh[0] + Fh[20] + Fh[325], qc = Fh[326], Rc = Fh[62] + Fh[1] + Fh[98] + Fh[217] + Fh[235], Lc = Fh[6] + Fh[1] + Fh[327], Gc = Fh[328], Yc = Fh[62] + Fh[217] + Fh[235], Hc = Fh[61] + Fh[55], Xc = Fh[296] + Fh[64] + Fh[297] + Fh[64] + Fh[320], Wc = Fh[61] + Fh[306], Vc = Fh[296] + Fh[64] + Fh[297] + Fh[1] + Fh[98], Uc = Fh[329] + Fh[114] + Fh[195], Qc = Fh[224] + Fh[114] + Fh[195], Jc = Fh[330] + Fh[114] + Fh[195], Zc = Fh[331] + Fh[114] + Fh[195], Kc = Fh[332], tu = Fh[333] + Fh[81] + Fh[334], iu = Fh[333] + Fh[81] + Fh[335], nu = Fh[333] + Fh[81] + Fh[336], eu = Fh[333] + Fh[81] + Fh[337], su = Fh[333] + Fh[81] + Fh[338], hu = Fh[333] + Fh[81] + Fh[339], ru = Fh[333] + Fh[81] + Fh[340], fu = Fh[333] + Fh[81] + Fh[341], au = Fh[333] + Fh[81] + Fh[342], _u = Fh[333] + Fh[81] + Fh[343], cu = Fh[333] + Fh[81] + Fh[344], uu = Fh[333] + Fh[81] + Fh[345], ou = Fh[333] + Fh[81] + Fh[346], du = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[348], lu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[315], bu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[89], vu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[316], yu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[349], xu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[350], gu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[351], mu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[352], wu = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[232], ku = Fh[333] + Fh[81] + Fh[347] + Fh[81] + Fh[353], pu = Fh[354] + Fh[25] + Fh[355], ju = Fh[356], Mu = Fh[61] + Fh[247], Eu = Fh[211] + Fh[20] + Fh[357], Su = Fh[61] + Fh[269], Pu = Fh[358], Iu = Fh[3] + Fh[44] + Fh[60], Cu = Fh[359], Tu = Fh[360] + Fh[44] + Fh[60], Ou = Fh[361], $u = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[364], Fu = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[365], Au = Fh[362] + Fh[81] + Fh[363] + Fh[81] + Fh[366], Nu = Fh[62] + Fh[72] + Fh[367], zu = Fh[368], Bu = Fh[369] + Fh[1] + Fh[98], Du = Fh[370] + Fh[104] + Fh[277] + Fh[371], qu = Fh[372] + Fh[217] + Fh[235], Ru = Fh[373], Lu = Fh[374] + Fh[47] + Fh[212], Gu = Fh[3] + Fh[72] + Fh[367], Yu = Fh[375] + Fh[81] + Fh[376], Hu = Fh[375] + Fh[81] + Fh[377] + Fh[81] + Fh[378], Xu = Fh[375] + Fh[81] + Fh[377] + Fh[81] + Fh[379], Wu = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[380] + Fh[81] + Fh[381], Vu = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[382] + Fh[81] + Fh[381], Uu = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[381] + Fh[81] + Fh[383], Qu = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[376] + Fh[81] + Fh[384], Ju = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[376] + Fh[81] + Fh[385], Zu = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[380] + Fh[81] + Fh[383], Ku = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[382] + Fh[81] + Fh[383], to = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[383] + Fh[81] + Fh[381], io = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[376] + Fh[81] + Fh[386], no = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[376] + Fh[81] + Fh[387], eo = Fh[375] + Fh[81] + Fh[377] + Fh[81] + Fh[388] + Fh[81] + Fh[378], so = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[380], ho = Fh[389] + Fh[81] + Fh[390], ro = Fh[391] + Fh[81] + Fh[390], fo = Fh[375] + Fh[81] + Fh[392], ao = Fh[375] + Fh[81] + Fh[392] + Fh[81] + Fh[393], _o = Fh[375] + Fh[81] + Fh[392] + Fh[81] + Fh[394], co = Fh[375] + Fh[81] + Fh[392] + Fh[81] + Fh[395], uo = Fh[375] + Fh[81] + Fh[392] + Fh[81] + Fh[396], oo = Fh[375] + Fh[81] + Fh[397] + Fh[81] + Fh[398], lo = Fh[399], bo = Fh[214], vo = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[382], yo = Fh[347] + Fh[81] + Fh[400], xo = Fh[3] + Fh[72] + Fh[401], go = Fh[0] + Fh[44] + Fh[227] + Fh[72] + Fh[402], mo = Fh[55] + Fh[38] + Fh[403], wo = Fh[237] + Fh[25] + Fh[323] + Fh[64] + Fh[320], ko = Fh[237] + Fh[64] + Fh[320], po = Fh[404], jo = Fh[356] + Fh[114] + Fh[299], Mo = Fh[405] + Fh[47] + Fh[212], Eo = Fh[406], So = Fh[407], Po = Fh[408] + Fh[44] + Fh[185], Io = Fh[317], Co = Fh[61] + Fh[409] + Fh[64] + Fh[410], To = Fh[375] + Fh[81] + Fh[411] + Fh[81] + Fh[412], Oo = Fh[413] + Fh[120], $o = Fh[413] + Fh[121], Fo = Fh[414], Ao = Fh[415] + Fh[72] + Fh[416] + Fh[23] + Fh[417], No = Fh[418], zo = Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[23] + Fh[419] + Fh[104] + Fh[47] + Fh[420], Bo = Fh[421], Do = Fh[422], qo = Fh[423], Ro = Fh[424], Lo = Fh[425], Go = Fh[230] + Fh[75] + Fh[426] + Fh[427] + Fh[77], Yo = Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[23] + Fh[419], Ho = Fh[74] + Fh[75] + Fh[314] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[77], Xo = Fh[429], Wo = Fh[430], Vo = Fh[431], Uo = Fh[432] + Fh[433], Qo = Fh[434] + Fh[81] + Fh[239] + Fh[81] + Fh[386], Jo = Fh[434] + Fh[81] + Fh[239] + Fh[81] + Fh[384], Zo = Fh[314] + Fh[187], Ko = Fh[435], td = Fh[119] + Fh[225] + Fh[226], id = Fh[119] + Fh[436] + Fh[437], nd = Fh[438], ed = Fh[439] + Fh[131] + Fh[440], sd = Fh[404] + Fh[131] + Fh[440], hd = Fh[34] + Fh[41] + Fh[441], rd = Fh[34] + Fh[72] + Fh[442], fd = Fh[443] + Fh[81] + Fh[444], ad = Fh[445] + Fh[114] + Fh[195] + Fh[25] + Fh[446], _d = Fh[447] + Fh[217] + Fh[218], cd = Fh[447] + Fh[15] + Fh[448], ud = Fh[55] + Fh[38] + Fh[128] + Fh[449], od = Fh[247] + Fh[450] + Fh[451], dd = Fh[127] + Fh[1] + Fh[452], ld = Fh[453], bd = Fh[68] + Fh[1] + Fh[454], vd = Fh[68], yd = Fh[264] + Fh[225] + Fh[226], xd = Fh[264] + Fh[436] + Fh[437], gd = Fh[202] + Fh[72] + Fh[367], md = Fh[202] + Fh[72] + Fh[200], wd = Fh[202] + Fh[20] + Fh[455], kd = Fh[456], pd = Fh[439] + Fh[72] + Fh[457], jd = Fh[439] + Fh[64] + Fh[458], Md = Fh[459], Ed = Fh[439], Sd = Fh[197] + Fh[100] + Fh[460], Pd = Fh[461], Id = Fh[462], Cd = Fh[463], Td = Fh[464] + Fh[72] + Fh[200], Od = Fh[465] + Fh[104] + Fh[466], $d = Fh[467] + Fh[64] + Fh[129], Fd = Fh[100] + Fh[118], Ad = Fh[468], Nd = Fh[469], zd = Fh[470], Bd = Fh[30] + Fh[25] + Fh[471], Dd = Fh[472] + Fh[131] + Fh[241], qd = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[474], Rd = Fh[34] + Fh[25] + Fh[475], Ld = Fh[369] + Fh[23] + Fh[241] + Fh[217] + Fh[476], Gd = Fh[104], Yd = Fh[369] + Fh[64] + Fh[320] + Fh[217] + Fh[476], Hd = Fh[209] + Fh[64] + Fh[477] + Fh[20] + Fh[478], Xd = Fh[472] + Fh[131] + Fh[479] + Fh[23] + Fh[480], Wd = Fh[481] + Fh[23] + Fh[241], Vd = Fh[296] + Fh[64] + Fh[297] + Fh[15] + Fh[448] + Fh[64] + Fh[320], Ud = Fh[482], Qd = Fh[483] + Fh[18] + Fh[319], Jd = Fh[189] + Fh[100] + Fh[484] + Fh[18] + Fh[19] + Fh[20] + Fh[21], Zd = Fh[194] + Fh[100] + Fh[484] + Fh[18] + Fh[19] + Fh[20] + Fh[21], Kd = Fh[195] + Fh[100] + Fh[484] + Fh[18] + Fh[19] + Fh[20] + Fh[21], tl = Fh[103] + Fh[100] + Fh[484] + Fh[18] + Fh[19] + Fh[20] + Fh[21], il = Fh[62] + Fh[114] + Fh[485], nl = Fh[46] + Fh[18] + Fh[19] + Fh[20] + Fh[21], el = Fh[189] + Fh[1] + Fh[486] + Fh[18] + Fh[19] + Fh[20] + Fh[21], sl = Fh[194] + Fh[1] + Fh[486] + Fh[18] + Fh[19] + Fh[20] + Fh[21], hl = Fh[195] + Fh[1] + Fh[486] + Fh[18] + Fh[19] + Fh[20] + Fh[21], rl = Fh[103] + Fh[1] + Fh[486] + Fh[18] + Fh[19] + Fh[20] + Fh[21], fl = Fh[144] + Fh[114] + Fh[485], al = Fh[78] + Fh[487], _l = Fh[488], cl = Fh[201] + Fh[81] + Fh[366], ul = Fh[201] + Fh[81] + Fh[400], ol = Fh[187] + Fh[29], dl = Fh[201] + Fh[81] + Fh[489], ll = Fh[490] + Fh[75], bl = Fh[76] + Fh[314] + Fh[76] + Fh[314] + Fh[76], vl = Fh[3] + Fh[47] + Fh[130] + Fh[217] + Fh[235], yl = Fh[166] + Fh[491] + Fh[29] + Fh[492], xl = Fh[3] + Fh[47] + Fh[130] + Fh[217] + Fh[199], gl = Fh[11] + Fh[47] + Fh[130] + Fh[217] + Fh[199], ml = Fh[408] + Fh[1] + Fh[98], wl = Fh[408] + Fh[64] + Fh[129] + Fh[1] + Fh[98], kl = Fh[493] + Fh[114] + Fh[299], pl = Fh[494] + Fh[23] + Fh[24], jl = Fh[495] + Fh[72] + Fh[496], Ml = Fh[495] + Fh[64] + Fh[129] + Fh[72] + Fh[496], El = Fh[44] + Fh[185] + Fh[75], Sl = Fh[428], Pl = Fh[497], Il = Fh[23] + Fh[498] + Fh[23], Cl = Fh[72] + Fh[200] + Fh[75], Tl = Fh[214] + Fh[100] + Fh[118], Ol = Fh[30] + Fh[100] + Fh[118], $l = Fh[499] + Fh[81] + Fh[379], Fl = Fh[500], Al = Fh[501] + Fh[23] + Fh[24], Nl = Fh[502], zl = Fh[503], Bl = Fh[504], Dl = Fh[505], ql = Fh[506], Rl = Fh[384] + Fh[81] + Fh[386], Ll = Fh[384] + Fh[81] + Fh[507], Gl = Fh[384] + Fh[81] + Fh[387], Yl = Fh[508] + Fh[81] + Fh[386], Hl = Fh[508] + Fh[81] + Fh[507], Xl = Fh[508] + Fh[81] + Fh[387], Wl = Fh[385] + Fh[81] + Fh[386], Vl = Fh[385] + Fh[81] + Fh[507], Ul = Fh[385] + Fh[81] + Fh[387], Ql = Fh[509], Jl = Fh[510], Zl = Fh[246] + Fh[511], Kl = Fh[428] + Fh[229] + Fh[511], tb = Fh[428] + Fh[469] + Fh[511], ib = Fh[512] + Fh[41] + Fh[42], nb = Fh[359] + Fh[83] + Fh[513], eb = Fh[428] + Fh[359] + Fh[23] + Fh[24] + Fh[511], sb = Fh[428] + Fh[512] + Fh[41] + Fh[42] + Fh[511], hb = Fh[428] + Fh[69] + Fh[511], rb = Fh[359] + Fh[23] + Fh[24], fb = Fh[514] + Fh[217] + Fh[235], ab = Fh[512] + Fh[217] + Fh[235], _b = Fh[3] + Fh[1] + Fh[98] + Fh[217] + Fh[235], cb = Fh[515] + Fh[83] + Fh[30], ub = Fh[515] + Fh[83] + Fh[11], ob = Fh[515], db = Fh[515] + Fh[83] + Fh[14], lb = Fh[516], bb = Fh[517], vb = Fh[518], yb = Fh[519], xb = Fh[11] + Fh[25] + Fh[471], gb = Fh[520], mb = Fh[14], wb = Fh[428] + Fh[223] + Fh[511], kb = Fh[428] + Fh[14] + Fh[511], pb = Fh[428] + Fh[512] + Fh[217] + Fh[235] + Fh[511], jb = Fh[521] + Fh[81] + Fh[522], Mb = Fh[521] + Fh[81] + Fh[523], Eb = Fh[521] + Fh[81] + Fh[524], Sb = Fh[521] + Fh[81] + Fh[525] + Fh[81] + Fh[526], Pb = Fh[14] + Fh[83] + Fh[513], Ib = Fh[359] + Fh[114] + Fh[299], Cb = Fh[66] + Fh[44] + Fh[527] + Fh[1] + Fh[528], Tb = Fh[55] + Fh[1] + Fh[2], Ob = Fh[66] + Fh[1] + Fh[2] + Fh[1] + Fh[529], $b = Fh[3] + Fh[217] + Fh[199], Fb = Fh[81] + Fh[530], Ab = Fh[81] + Fh[531], Nb = Fh[532], zb = Fh[520] + Fh[1] + Fh[533] + Fh[38] + Fh[534], Bb = Fh[439] + Fh[1] + Fh[533] + Fh[38] + Fh[534], Db = Fh[223] + Fh[1] + Fh[533] + Fh[38] + Fh[534], qb = Fh[63] + Fh[38] + Fh[128] + Fh[44] + Fh[60] + Fh[1] + Fh[533], Rb = Fh[66] + Fh[38] + Fh[128] + Fh[44] + Fh[60] + Fh[1] + Fh[528], Lb = Fh[318] + Fh[1] + Fh[533] + Fh[38] + Fh[534], Gb = Fh[515] + Fh[217] + Fh[235] + Fh[1] + Fh[533] + Fh[38] + Fh[534], Yb = Fh[61] + Fh[328], Hb = Fh[535], Xb = Fh[3] + Fh[64] + Fh[536], Wb = Fh[11] + Fh[1] + Fh[98], Vb = Fh[223] + Fh[537], Ub = Fh[538], Qb = Fh[539], Jb = Fh[114] + Fh[216], Zb = Fh[55] + Fh[25] + Fh[540] + Fh[1] + Fh[107], Kb = Fh[197] + Fh[44] + Fh[541], tv = Fh[197] + Fh[114] + Fh[168] + Fh[23] + Fh[241], iv = Fh[461] + Fh[450] + Fh[542], nv = Fh[310] + Fh[104] + Fh[543], ev = Fh[544], sv = Fh[545], hv = Fh[546], rv = Fh[30] + Fh[64] + Fh[65] + Fh[25] + Fh[471], fv = Fh[11] + Fh[64] + Fh[65] + Fh[25] + Fh[471], av = Fh[547] + Fh[76] + Fh[548] + Fh[76] + Fh[549] + Fh[76] + Fh[550], _v = Fh[551] + Fh[132] + Fh[72] + Fh[552], cv = Fh[76] + Fh[553] + Fh[76] + Fh[157] + Fh[76] + Fh[554] + Fh[76] + Fh[155] + Fh[76] + Fh[555], uv = Fh[556], ov = Fh[557], dv = Fh[558], lv = Fh[3] + Fh[1] + Fh[559] + Fh[72] + Fh[560], bv = Fh[561], vv = Fh[562], yv = Fh[563], xv = Fh[66] + Fh[64] + Fh[129] + Fh[100] + Fh[564], gv = Fh[66] + Fh[1] + Fh[529], mv = Fh[565], wv = Fh[199] + Fh[72] + Fh[566], kv = Fh[567], pv = Fh[568] + Fh[1] + Fh[327], jv = Fh[569], Mv = Fh[104] + Fh[189] + Fh[104] + Fh[447] + Fh[104] + Fh[570], Ev = Fh[104] + Fh[189] + Fh[104] + Fh[447] + Fh[104] + Fh[571], Sv = Fh[104] + Fh[189] + Fh[104] + Fh[572], Pv = Fh[104] + Fh[189] + Fh[104] + Fh[573], Iv = Fh[104] + Fh[194] + Fh[104] + Fh[447] + Fh[104] + Fh[570], Cv = Fh[104] + Fh[194] + Fh[104] + Fh[447] + Fh[104] + Fh[571], Tv = Fh[104] + Fh[194] + Fh[104] + Fh[572], Ov = Fh[104] + Fh[194] + Fh[104] + Fh[573], $v = Fh[574], Fv = Fh[329], Av = Fh[575] + Fh[75] + Fh[223] + Fh[545] + Fh[247] + Fh[450] + Fh[576] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[314] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[588] + Fh[589] + Fh[16] + Fh[232] + Fh[450] + Fh[590] + Fh[586] + Fh[591] + Fh[506] + Fh[89] + Fh[592] + Fh[314] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[593] + Fh[590] + Fh[580] + Fh[594] + Fh[506] + Fh[595] + Fh[218] + Fh[596] + Fh[502] + Fh[597] + Fh[350] + Fh[598] + Fh[599] + Fh[600] + Fh[23] + Fh[601] + Fh[450] + Fh[44] + Fh[602] + Fh[44] + Fh[582] + Fh[131] + Fh[603] + Fh[604] + Fh[16] + Fh[605] + Fh[130] + Fh[606] + Fh[218] + Fh[450] + Fh[607] + Fh[608] + Fh[609] + Fh[610] + Fh[600] + Fh[18] + Fh[611] + Fh[277] + Fh[588] + Fh[120] + Fh[349] + Fh[612] + Fh[613] + Fh[614] + Fh[505] + Fh[615] + Fh[582] + Fh[315] + Fh[1] + Fh[616] + Fh[617] + Fh[502] + Fh[18] + Fh[315] + Fh[130] + Fh[18] + Fh[349] + Fh[618] + Fh[159] + Fh[586] + Fh[121] + Fh[582] + Fh[47] + Fh[619] + Fh[620] + Fh[621] + Fh[622] + Fh[623] + Fh[624] + Fh[588] + Fh[625] + Fh[588] + Fh[626] + Fh[232] + Fh[586] + Fh[450] + Fh[349] + Fh[627] + Fh[628] + Fh[629] + Fh[630] + Fh[350] + Fh[631] + Fh[632] + Fh[232] + Fh[29] + Fh[232] + Fh[76] + Fh[574], Nv = Fh[633] + Fh[15] + Fh[448], zv = Fh[633] + Fh[217] + Fh[218], Bv = Fh[81] + Fh[634], Dv = Fh[314] + Fh[83] + Fh[314], qv = Fh[34] + Fh[114] + Fh[635] + Fh[72] + Fh[636], Rv = Fh[34] + Fh[637], Lv = Fh[317] + Fh[100] + Fh[118], Gv = Fh[72] + Fh[200], Yv = Fh[44] + Fh[185], Hv = Fh[217] + Fh[638], Xv = Fh[64] + Fh[65], Wv = Fh[44] + Fh[60] + Fh[1] + Fh[533] + Fh[64] + Fh[65], Vv = Fh[25] + Fh[26] + Fh[64] + Fh[65], Uv = Fh[436] + Fh[639], Qv = Fh[38] + Fh[534], Jv = Fh[44] + Fh[96], Zv = Fh[38] + Fh[128], Kv = Fh[72] + Fh[640] + Fh[131] + Fh[440], ty = Fh[38] + Fh[128] + Fh[131] + Fh[440], iy = Fh[641] + Fh[471], ny = Fh[181] + Fh[449], ey = Fh[181] + Fh[164], sy = Fh[181] + Fh[169], hy = Fh[34] + Fh[131] + Fh[642] + Fh[159] + Fh[160], ry = Fh[643] + Fh[38] + Fh[644], fy = Fh[436] + Fh[283] + Fh[25] + Fh[26], ay = Fh[38] + Fh[645] + Fh[72] + Fh[636], _y = Fh[646], cy = Fh[647], uy = Fh[648], oy = Fh[30] + Fh[649] + Fh[110], dy = Fh[271] + Fh[83] + Fh[650], ly = Fh[271], by = Fh[651], vy = Fh[652], yy = Fh[652] + Fh[83] + Fh[436], xy = Fh[652] + Fh[83] + Fh[41], gy = Fh[653], my = Fh[653] + Fh[83] + Fh[436], wy = Fh[653] + Fh[83] + Fh[41], ky = Fh[653] + Fh[83] + Fh[436] + Fh[83] + Fh[41], py = Fh[653] + Fh[83] + Fh[41] + Fh[83] + Fh[436], jy = Fh[654] + Fh[83] + Fh[127], My = Fh[654] + Fh[83] + Fh[126], Ey = Fh[654] + Fh[83] + Fh[92], Sy = Fh[654] + Fh[83] + Fh[93], Py = Fh[655], Iy = Fh[656], Cy = Fh[650], Ty = Fh[657], Oy = Fh[658], $y = Fh[659], Fy = Fh[660], Ay = Fh[661], Ny = Fh[662], zy = Fh[663], By = Fh[664], Dy = Fh[665], qy = Fh[666], Ry = Fh[667], Ly = Fh[668], Gy = Fh[669], Yy = Fh[670], Hy = Fh[671] + Fh[83] + Fh[672], Xy = Fh[671] + Fh[83] + Fh[315], Wy = Fh[671] + Fh[83] + Fh[89], Vy = Fh[671] + Fh[83] + Fh[316], Uy = Fh[671] + Fh[83] + Fh[349], Qy = Fh[671] + Fh[83] + Fh[350], Jy = Fh[671] + Fh[83] + Fh[351], Zy = Fh[671] + Fh[83] + Fh[352], Ky = Fh[671] + Fh[83] + Fh[232], tx = Fh[671] + Fh[83] + Fh[175], ix = Fh[203] + Fh[81] + Fh[673] + Fh[81] + Fh[363] + Fh[81] + Fh[674], nx = Fh[675], ex = Fh[203] + Fh[81] + Fh[673] + Fh[81] + Fh[363] + Fh[81] + Fh[396], sx = Fh[203] + Fh[81] + Fh[673] + Fh[81] + Fh[363] + Fh[81] + Fh[676], hx = Fh[677], rx = Fh[203] + Fh[81] + Fh[678] + Fh[81] + Fh[363] + Fh[81] + Fh[395], fx = Fh[203] + Fh[81] + Fh[678] + Fh[81] + Fh[363] + Fh[81] + Fh[396], ax = Fh[203] + Fh[81] + Fh[678] + Fh[81] + Fh[363] + Fh[81] + Fh[679], _x = Fh[680], cx = Fh[681] + Fh[81] + Fh[363], ux = Fh[681] + Fh[81] + Fh[363] + Fh[81] + Fh[682], ox = Fh[681] + Fh[81] + Fh[683], dx = Fh[681] + Fh[81] + Fh[684], lx = Fh[681] + Fh[81] + Fh[682] + Fh[81] + Fh[685], bx = Fh[681] + Fh[81] + Fh[253], vx = Fh[684] + Fh[81] + Fh[394], yx = Fh[686] + Fh[81] + Fh[240], xx = Fh[137] + Fh[81] + Fh[687], gx = Fh[239] + Fh[81] + Fh[499] + Fh[81] + Fh[400], mx = Fh[688] + Fh[44] + Fh[192] + Fh[100] + Fh[193], wx = Fh[197] + Fh[1] + Fh[452], kx = Fh[264], px = Fh[689] + Fh[114] + Fh[195], jx = Fh[690] + Fh[1] + Fh[691] + Fh[114] + Fh[195], Mx = Fh[692] + Fh[1] + Fh[691] + Fh[114] + Fh[195], Ex = Fh[499] + Fh[81] + Fh[693] + Fh[81] + Fh[694], Sx = Fh[217] + Fh[222] + Fh[29] + Fh[181] + Fh[29] + Fh[87] + Fh[248], Px = Fh[695], Ix = Fh[237] + Fh[217] + Fh[222], Cx = Fh[696], Tx = Fh[221] + Fh[72] + Fh[367], Ox = Fh[78] + Fh[697], $x = Fh[698], Fx = Fh[461] + Fh[18] + Fh[699], Ax = Fh[461] + Fh[47] + Fh[700], Nx = Fh[701], zx = Fh[78] + Fh[702], Bx = Fh[488] + Fh[29], Dx = Fh[220] + Fh[72] + Fh[367], qx = Fh[78] + Fh[703], Rx = Fh[220] + Fh[114] + Fh[168], Lx = Fh[78] + Fh[704], Gx = Fh[221] + Fh[114] + Fh[168], Yx = Fh[705], Hx = Fh[651] + Fh[1] + Fh[706], Xx = Fh[651] + Fh[47] + Fh[707], Wx = Fh[651] + Fh[15] + Fh[124] + Fh[120], Vx = Fh[651] + Fh[15] + Fh[124] + Fh[121], Ux = Fh[25] + Fh[708] + Fh[709], Qx = Fh[710] + Fh[1] + Fh[706], Jx = Fh[64] + Fh[711] + Fh[709], Zx = Fh[710] + Fh[1] + Fh[706] + Fh[47] + Fh[712] + Fh[131] + Fh[241], Kx = Fh[206] + Fh[72] + Fh[566], tg = Fh[247], ig = Fh[181], ng = Fh[332] + Fh[217] + Fh[222], eg = Fh[0] + Fh[217] + Fh[222], sg = Fh[3] + Fh[18] + Fh[713] + Fh[217] + Fh[714], hg = Fh[715], rg = Fh[716], fg = Fh[717] + Fh[81] + Fh[363] + Fh[81] + Fh[718], ag = Fh[717] + Fh[81] + Fh[363] + Fh[81] + Fh[255], _g = Fh[197] + Fh[25] + Fh[719] + Fh[277] + Fh[278], cg = Fh[197] + Fh[100] + Fh[720] + Fh[277] + Fh[278], ug = Fh[30] + Fh[1] + Fh[706] + Fh[72] + Fh[127], og = Fh[255] + Fh[81] + Fh[717] + Fh[81] + Fh[383], dg = Fh[255] + Fh[81] + Fh[717] + Fh[81] + Fh[381], lg = Fh[718] + Fh[81] + Fh[717], bg = Fh[721] + Fh[81] + Fh[255] + Fh[81] + Fh[717], vg = Fh[721] + Fh[81] + Fh[255] + Fh[81] + Fh[717] + Fh[81] + Fh[383], yg = Fh[721] + Fh[81] + Fh[718] + Fh[81] + Fh[717], xg = Fh[616], gg = Fh[498], mg = Fh[613], wg = Fh[722] + Fh[81] + Fh[723] + Fh[81] + Fh[724], kg = Fh[722] + Fh[81] + Fh[203] + Fh[81] + Fh[724], pg = Fh[722] + Fh[81] + Fh[725] + Fh[81] + Fh[724], jg = Fh[722] + Fh[81] + Fh[726] + Fh[81] + Fh[724], Mg = Fh[722] + Fh[81] + Fh[727] + Fh[81] + Fh[724], Eg = Fh[722] + Fh[81] + Fh[728], Sg = Fh[34] + Fh[23] + Fh[729], Pg = Fh[44] + Fh[227] + Fh[72] + Fh[730], Ig = Fh[55] + Fh[169], Cg = Fh[439] + Fh[1] + Fh[706], Tg = Fh[439] + Fh[72] + Fh[731] + Fh[47] + Fh[707], Og = Fh[439] + Fh[72] + Fh[731] + Fh[15] + Fh[124] + Fh[120], $g = Fh[439] + Fh[72] + Fh[731] + Fh[15] + Fh[124] + Fh[121], Fg = Fh[681] + Fh[81] + Fh[363] + Fh[81] + Fh[684], Ag = Fh[439] + Fh[47] + Fh[732], Ng = Fh[224] + Fh[1] + Fh[733], zg = Fh[224] + Fh[734] + Fh[735], Bg = Fh[439] + Fh[114] + Fh[299], Dg = Fh[736] + Fh[72] + Fh[367], qg = Fh[736], Rg = Fh[221] + Fh[1] + Fh[706], Lg = Fh[221] + Fh[277] + Fh[278], Gg = Fh[737] + Fh[44] + Fh[227], Yg = Fh[738], Hg = Fh[739], Xg = Fh[740] + Fh[83] + Fh[741], Wg = Fh[742] + Fh[83] + Fh[741], Vg = Fh[743], Ug = Fh[156], Qg = Fh[744], Jg = Fh[74] + Fh[75] + Fh[314] + Fh[76] + Fh[314] + Fh[76] + Fh[314] + Fh[76] + Fh[314] + Fh[77], Zg = Fh[680] + Fh[25] + Fh[745], Kg = Fh[78] + Fh[315] + Fh[1] + Fh[351] + Fh[47] + Fh[590] + Fh[38], tm = Fh[78] + Fh[746], im = Fh[78] + Fh[747] + Fh[64] + Fh[232] + Fh[47], nm = Fh[78] + Fh[748] + Fh[47] + Fh[749], em = Fh[78] + Fh[748] + Fh[18] + Fh[750], sm = Fh[78] + Fh[751] + Fh[1] + Fh[752], hm = Fh[78] + Fh[753], rm = Fh[78] + Fh[315] + Fh[38] + Fh[351] + Fh[1] + Fh[590] + Fh[20], fm = Fh[78] + Fh[754] + Fh[47] + Fh[314], am = Fh[78] + Fh[755] + Fh[756], _m = Fh[78] + Fh[315] + Fh[20] + Fh[351] + Fh[757] + Fh[89], cm = Fh[78] + Fh[748] + Fh[18] + Fh[758], um = Fh[78] + Fh[759], om = Fh[78] + Fh[89] + Fh[600] + Fh[232] + Fh[760], dm = Fh[78] + Fh[761], lm = Fh[689], bm = Fh[78] + Fh[762] + Fh[38] + Fh[752], vm = Fh[78] + Fh[763], ym = Fh[78] + Fh[315] + Fh[20] + Fh[764] + Fh[18] + Fh[349], xm = Fh[78] + Fh[765] + Fh[766] + Fh[89], gm = Fh[78] + Fh[767] + Fh[768], mm = Fh[78] + Fh[315] + Fh[64] + Fh[351] + Fh[769] + Fh[314], wm = Fh[78] + Fh[770], km = Fh[78] + Fh[16] + Fh[352] + Fh[16] + Fh[232] + Fh[16] + Fh[232], pm = Fh[78] + Fh[351] + Fh[18] + Fh[771], jm = Fh[78] + Fh[349] + Fh[20] + Fh[349] + Fh[1] + Fh[349] + Fh[47], Mm = Fh[78] + Fh[772], Em = Fh[78] + Fh[773], Sm = Fh[78] + Fh[351] + Fh[20] + Fh[351] + Fh[64] + Fh[351] + Fh[20], Pm = Fh[78] + Fh[349] + Fh[1] + Fh[774], Im = Fh[78] + Fh[775], Cm = Fh[78] + Fh[352] + Fh[38] + Fh[352] + Fh[38] + Fh[352] + Fh[38], Tm = Fh[78] + Fh[776], Om = Fh[78] + Fh[777], $m = Fh[78] + Fh[778], Fm = Fh[78] + Fh[590] + Fh[64] + Fh[590] + Fh[38] + Fh[590] + Fh[38], Am = Fh[78] + Fh[18] + Fh[352] + Fh[18] + Fh[350] + Fh[18] + Fh[349], Nm = Fh[78] + Fh[18] + Fh[590] + Fh[18] + Fh[351] + Fh[18] + Fh[350], zm = Fh[78] + Fh[18] + Fh[352] + Fh[18] + Fh[349] + Fh[18] + Fh[316], Bm = Fh[78] + Fh[779], Dm = Fh[78] + Fh[64] + Fh[590] + Fh[780], qm = Fh[78] + Fh[590] + Fh[781] + Fh[314] + Fh[498] + Fh[314], Rm = Fh[78] + Fh[503] + Fh[590] + Fh[782], Lm = Fh[78] + Fh[316] + Fh[600] + Fh[316] + Fh[498] + Fh[783], Gm = Fh[78] + Fh[47] + Fh[89] + Fh[784], Ym = Fh[78] + Fh[89] + Fh[64] + Fh[232] + Fh[785], Hm = Fh[445] + Fh[18] + Fh[786], Xm = Fh[78] + Fh[787], Wm = Fh[78] + Fh[506] + Fh[350] + Fh[506] + Fh[350] + Fh[506] + Fh[351], Vm = Fh[370] + Fh[104], Um = Fh[287], Qm = Fh[788], Jm = Fh[789], Zm = Fh[790], Km = Fh[70] + Fh[47] + Fh[791], tw = Fh[70] + Fh[47] + Fh[792], iw = Fh[70], nw = Fh[70] + Fh[105] + Fh[793], ew = Fh[217] + Fh[322] + Fh[29] + Fh[794] + Fh[29] + Fh[795] + Fh[83], sw = Fh[796], hw = Fh[797], rw = Fh[798], fw = Fh[23] + Fh[799] + Fh[29] + Fh[498] + Fh[29] + Fh[798] + Fh[29] + Fh[800] + Fh[83], aw = Fh[293] + Fh[20] + Fh[292], _w = Fh[801], cw = Fh[740] + Fh[100] + Fh[802], uw = Fh[803], ow = Fh[293] + Fh[72] + Fh[200], dw = Fh[804] + Fh[1] + Fh[706], lw = Fh[805] + Fh[18] + Fh[806] + Fh[100] + Fh[193], bw = Fh[807], vw = Fh[808], yw = Fh[483] + Fh[217] + Fh[809], xw = Fh[810], gw = Fh[811], mw = Fh[812], ww = Fh[813], kw = Fh[814] + Fh[436] + Fh[815], pw = Fh[814] + Fh[38] + Fh[128], jw = Fh[816], Mw = Fh[817], Ew = Fh[818], Sw = Fh[819], Pw = Fh[820], Iw = Fh[819] + Fh[38] + Fh[128], Cw = Fh[821], Tw = Fh[822] + Fh[1] + Fh[241], Ow = Fh[823], $w = Fh[168] + Fh[114] + Fh[299], Fw = Fh[824], Aw = Fh[291] + Fh[72] + Fh[200], Nw = Fh[825] + Fh[131] + Fh[570] + Fh[1] + Fh[241] + Fh[72] + Fh[200], zw = Fh[826], Bw = Fh[168], Dw = Fh[827], qw = Fh[105] + Fh[828] + Fh[29] + Fh[829] + Fh[511] + Fh[314] + Fh[830], Rw = Fh[555], Lw = Fh[831], Gw = Fh[801] + Fh[159] + Fh[160], Yw = Fh[832] + Fh[159] + Fh[160], Hw = Fh[833] + Fh[1] + Fh[241], Xw = Fh[205] + Fh[41] + Fh[834] + Fh[248], Ww = Fh[835], Vw = Fh[205] + Fh[44] + Fh[836] + Fh[29] + Fh[38] + Fh[837] + Fh[248], Uw = Fh[838] + Fh[38] + Fh[837], Qw = Fh[839], Jw = Fh[840], Zw = Fh[16] + Fh[841] + Fh[506] + Fh[349] + Fh[600] + Fh[842] + Fh[843] + Fh[352] + Fh[498] + Fh[844] + Fh[600] + Fh[845] + Fh[503] + Fh[316] + Fh[846] + Fh[590] + Fh[847] + Fh[848] + Fh[506] + Fh[849] + Fh[199] + Fh[350] + Fh[850] + Fh[351] + Fh[506] + Fh[349] + Fh[16] + Fh[315] + Fh[600] + Fh[89] + Fh[851] + Fh[89] + Fh[16] + Fh[852] + Fh[506] + Fh[853] + Fh[16] + Fh[854] + Fh[506] + Fh[352] + Fh[855] + Fh[316] + Fh[856] + Fh[350] + Fh[857] + Fh[858] + Fh[859] + Fh[860] + Fh[503] + Fh[861] + Fh[856] + Fh[316] + Fh[503], Kw = Fh[205] + Fh[25] + Fh[862] + Fh[29] + Fh[55] + Fh[511], tk = Fh[863], ik = Fh[864], nk = Fh[865], ek = Fh[62] + Fh[114], sk = Fh[866], hk = Fh[352] + Fh[83], rk = Fh[867], fk = Fh[294], ak = Fh[868], _k = Fh[1] + Fh[452], ck = Fh[100] + Fh[869], uk = Fh[1] + Fh[870], ok = Fh[871], dk = Fh[872], lk = Fh[197], bk = Fh[873], vk = Fh[874], yk = Fh[875], xk = Fh[876], gk = Fh[877], mk = Fh[878], wk = Fh[485], kk = Fh[879], pk = Fh[880], jk = Fh[370] + Fh[881], Mk = Fh[29] + Fh[296] + Fh[29] + Fh[882] + Fh[350], Ek = Fh[883], Sk = Fh[884], Pk = Fh[885] + Fh[225] + Fh[886], Ik = Fh[887], Ck = Fh[888] + Fh[83] + Fh[889] + Fh[83] + Fh[315], Tk = Fh[318] + Fh[23] + Fh[241], Ok = Fh[72] + Fh[890], $k = Fh[891], Fk = Fh[64] + Fh[129], Ak = Fh[24], Nk = Fh[892], zk = Fh[893] + Fh[225] + Fh[886], Bk = Fh[38] + Fh[837], Dk = Fh[894], qk = Fh[168] + Fh[89] + Fh[38], Rk = Fh[502] + Fh[114] + Fh[168], Lk = Fh[61] + Fh[67], Gk = Fh[0] + Fh[64] + Fh[320], Yk = Fh[269] + Fh[41] + Fh[895], Hk = Fh[374], Xk = Fh[269], Wk = Fh[370] + Fh[83] + Fh[64] + Fh[129], Vk = Fh[374] + Fh[1] + Fh[896], Uk = Fh[613] + Fh[217] + Fh[235], Qk = Fh[259] + Fh[72] + Fh[897], Jk = Fh[898], Zk = Fh[370] + Fh[83] + Fh[64] + Fh[320], Kk = Fh[899], tp = Fh[409] + Fh[64] + Fh[410], ip = Fh[900] + Fh[83] + Fh[901], np = Fh[902] + Fh[44] + Fh[227] + Fh[1] + Fh[533], ep = Fh[55], sp = Fh[370] + Fh[104] + Fh[493], hp = Fh[61] + Fh[903], rp = Fh[0] + Fh[25] + Fh[904], fp = Fh[903], ap = Fh[267], _p = Fh[55] + Fh[20] + Fh[325], cp = Fh[370] + Fh[83] + Fh[23] + Fh[241], up = Fh[905] + Fh[83] + Fh[30], op = Fh[905] + Fh[83] + Fh[11], dp = Fh[906], lp = Fh[275] + Fh[44] + Fh[96], bp = Fh[61] + Fh[900], vp = Fh[907] + Fh[81] + Fh[908], yp = Fh[347] + Fh[81] + Fh[724], xp = Fh[370] + Fh[83] + Fh[72] + Fh[401] + Fh[23] + Fh[241], gp = Fh[900], mp = Fh[72] + Fh[401] + Fh[23] + Fh[241], wp = Fh[279], kp = Fh[370] + Fh[83] + Fh[47] + Fh[909], pp = Fh[47] + Fh[909], jp = Fh[50] + Fh[23] + Fh[241], Mp = Fh[472] + Fh[72] + Fh[416] + Fh[23] + Fh[417], Ep = Fh[910] + Fh[81] + Fh[363], Sp = Fh[910] + Fh[81] + Fh[363] + Fh[81] + Fh[335], Pp = Fh[910] + Fh[81] + Fh[911], Ip = Fh[910] + Fh[81] + Fh[912], Cp = Fh[910] + Fh[81] + Fh[913] + Fh[81] + Fh[400], Tp = Fh[269] + Fh[20] + Fh[292], Op = Fh[61] + Fh[914] + Fh[114] + Fh[299], $p = Fh[914], Fp = Fh[61] + Fh[209] + Fh[72] + Fh[200], Ap = Fh[915], Np = Fh[370] + Fh[83] + Fh[277] + Fh[916], zp = Fh[209] + Fh[72] + Fh[200], Bp = Fh[914] + Fh[114] + Fh[299], Dp = Fh[914] + Fh[217] + Fh[222], qp = Fh[277] + Fh[916], Rp = Fh[370] + Fh[83] + Fh[114] + Fh[168], Lp = Fh[114] + Fh[168], Gp = Fh[269] + Fh[38] + Fh[128], Yp = Fh[78] + Fh[917], Hp = Fh[61] + Fh[275] + Fh[44] + Fh[185], Xp = Fh[439] + Fh[47] + Fh[918] + Fh[1] + Fh[706], Wp = Fh[221] + Fh[100] + Fh[118], Vp = Fh[220] + Fh[100] + Fh[118], Up = Fh[919] + Fh[72] + Fh[640], Qp = Fh[920], Jp = Fh[919] + Fh[72] + Fh[640] + Fh[72] + Fh[897], Zp = Fh[264] + Fh[120], Kp = Fh[264] + Fh[121], tj = Fh[681] + Fh[81] + Fh[363] + Fh[81] + Fh[684] + Fh[81] + Fh[335], ij = Fh[271] + Fh[1] + Fh[706], nj = Fh[271] + Fh[25] + Fh[284] + Fh[38] + Fh[283], ej = Fh[271] + Fh[25] + Fh[284] + Fh[38] + Fh[283] + Fh[15] + Fh[124], sj = Fh[61] + Fh[276] + Fh[1] + Fh[706], hj = Fh[61] + Fh[269] + Fh[38] + Fh[128], rj = Fh[61] + Fh[276] + Fh[277] + Fh[278], fj = Fh[207], aj = Fh[211] + Fh[72] + Fh[200], _j = Fh[66] + Fh[47] + Fh[212] + Fh[1] + Fh[528], cj = Fh[61] + Fh[269] + Fh[25] + Fh[921], uj = Fh[61] + Fh[269] + Fh[41] + Fh[895], oj = Fh[61] + Fh[922], dj = Fh[61] + Fh[272] + Fh[64] + Fh[282], lj = Fh[923], bj = Fh[924] + Fh[41] + Fh[925], vj = Fh[66] + Fh[38] + Fh[128] + Fh[1] + Fh[528], yj = Fh[41] + Fh[895], xj = Fh[18] + Fh[263] + Fh[44] + Fh[185], gj = Fh[25] + Fh[921], mj = Fh[47] + Fh[918] + Fh[277] + Fh[278], wj = Fh[100] + Fh[268], kj = Fh[439] + Fh[83] + Fh[740], pj = Fh[439] + Fh[83] + Fh[271], jj = Fh[681] + Fh[81] + Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[120], Mj = Fh[681] + Fh[81] + Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[121], Ej = Fh[439] + Fh[83] + Fh[229], Sj = Fh[927] + Fh[81] + Fh[253], Pj = Fh[710] + Fh[83] + Fh[740], Ij = Fh[927] + Fh[81] + Fh[253] + Fh[81] + Fh[249] + Fh[81] + Fh[250], Cj = Fh[682] + Fh[81] + Fh[685], Tj = Fh[651] + Fh[83] + Fh[928], Oj = Fh[682] + Fh[81] + Fh[253], $j = Fh[651] + Fh[83] + Fh[740], Fj = Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[120], Aj = Fh[651] + Fh[83] + Fh[264] + Fh[83] + Fh[830], Nj = Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[121], zj = Fh[651] + Fh[83] + Fh[264] + Fh[83] + Fh[130], Bj = Fh[333] + Fh[81] + Fh[929], Dj = Fh[930] + Fh[83] + Fh[220], qj = Fh[333] + Fh[81] + Fh[929] + Fh[81] + Fh[366], Rj = Fh[930] + Fh[83] + Fh[220] + Fh[83] + Fh[108], Lj = Fh[333] + Fh[81] + Fh[203] + Fh[81] + Fh[931], Gj = Fh[930] + Fh[83] + Fh[224] + Fh[83] + Fh[932], Yj = Fh[333] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], Hj = Fh[333] + Fh[81] + Fh[933] + Fh[81] + Fh[253], Xj = Fh[930] + Fh[83] + Fh[221] + Fh[83] + Fh[740], Wj = Fh[333] + Fh[81] + Fh[933] + Fh[81] + Fh[717], Vj = Fh[930] + Fh[83] + Fh[221] + Fh[83] + Fh[934], Uj = Fh[333] + Fh[81] + Fh[935], Qj = Fh[930] + Fh[83] + Fh[736], Jj = Fh[333] + Fh[81] + Fh[935] + Fh[81] + Fh[366], Zj = Fh[930] + Fh[83] + Fh[736] + Fh[83] + Fh[108], Kj = Fh[203] + Fh[81] + Fh[673], tM = Fh[224] + Fh[83] + Fh[936], iM = Fh[203] + Fh[81] + Fh[678], nM = Fh[224] + Fh[83] + Fh[303], eM = Fh[937] + Fh[81] + Fh[388] + Fh[81] + Fh[938], sM = Fh[262] + Fh[83] + Fh[939] + Fh[83] + Fh[900], hM = Fh[940] + Fh[81] + Fh[253], rM = Fh[276] + Fh[83] + Fh[740], fM = Fh[940] + Fh[81] + Fh[717], aM = Fh[276] + Fh[83] + Fh[934], _M = Fh[684], cM = Fh[271] + Fh[83] + Fh[183], uM = Fh[684] + Fh[81] + Fh[253], oM = Fh[271] + Fh[83] + Fh[740], dM = Fh[684] + Fh[81] + Fh[203] + Fh[81] + Fh[931], lM = Fh[271] + Fh[83] + Fh[224] + Fh[83] + Fh[932], bM = Fh[684] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], vM = Fh[271] + Fh[83] + Fh[509], yM = Fh[911], xM = Fh[239] + Fh[81] + Fh[940] + Fh[81] + Fh[253], gM = Fh[239] + Fh[81] + Fh[940] + Fh[81] + Fh[717], mM = Fh[239] + Fh[81] + Fh[684], wM = Fh[247] + Fh[83] + Fh[271] + Fh[83] + Fh[183], kM = Fh[239] + Fh[81] + Fh[684] + Fh[81] + Fh[366], pM = Fh[239] + Fh[81] + Fh[684] + Fh[81] + Fh[253], jM = Fh[247] + Fh[83] + Fh[271] + Fh[83] + Fh[108], MM = Fh[239] + Fh[81] + Fh[684] + Fh[81] + Fh[203] + Fh[81] + Fh[931], EM = Fh[239] + Fh[81] + Fh[684] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], SM = Fh[239] + Fh[81] + Fh[394], PM = Fh[239] + Fh[81] + Fh[684] + Fh[81] + Fh[394], IM = Fh[247] + Fh[83] + Fh[509], CM = Fh[239] + Fh[81] + Fh[911], TM = Fh[247] + Fh[83] + Fh[244], OM = Fh[941] + Fh[81] + Fh[942], $M = Fh[823] + Fh[83] + Fh[230], FM = Fh[941] + Fh[81] + Fh[943], AM = Fh[823] + Fh[83] + Fh[281], NM = Fh[941] + Fh[81] + Fh[944] + Fh[81] + Fh[943], zM = Fh[941] + Fh[81] + Fh[253], BM = Fh[823] + Fh[83] + Fh[740], DM = Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[400], qM = Fh[823] + Fh[83] + Fh[202] + Fh[83] + Fh[906], RM = Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[489], LM = Fh[823] + Fh[83] + Fh[202] + Fh[83] + Fh[945], GM = Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[366], YM = Fh[823] + Fh[83] + Fh[202] + Fh[83] + Fh[108], HM = Fh[941] + Fh[81] + Fh[911], XM = Fh[823] + Fh[83] + Fh[244], WM = Fh[941] + Fh[81] + Fh[686] + Fh[81] + Fh[240], VM = Fh[823] + Fh[83] + Fh[274] + Fh[83] + Fh[183], UM = Fh[941] + Fh[81] + Fh[686], QM = Fh[823] + Fh[83] + Fh[274], JM = Fh[941] + Fh[81] + Fh[394], ZM = Fh[823] + Fh[83] + Fh[509], KM = Fh[941] + Fh[81] + Fh[926] + Fh[81] + Fh[120], tE = Fh[823] + Fh[83] + Fh[264] + Fh[83] + Fh[830], iE = Fh[941] + Fh[81] + Fh[926] + Fh[81] + Fh[121], nE = Fh[823] + Fh[83] + Fh[264] + Fh[83] + Fh[130], eE = Fh[941] + Fh[81] + Fh[400], sE = Fh[823] + Fh[83] + Fh[906], hE = Fh[941] + Fh[81] + Fh[946] + Fh[81] + Fh[943], rE = Fh[823] + Fh[83] + Fh[947] + Fh[83] + Fh[281], fE = Fh[941] + Fh[81] + Fh[684], aE = Fh[823] + Fh[83] + Fh[271], _E = Fh[941] + Fh[81] + Fh[684] + Fh[81] + Fh[366], cE = Fh[823] + Fh[83] + Fh[271] + Fh[83] + Fh[108], uE = Fh[941] + Fh[81] + Fh[940] + Fh[81] + Fh[253], oE = Fh[941] + Fh[81] + Fh[940] + Fh[81] + Fh[717], dE = Fh[941] + Fh[81] + Fh[948], lE = Fh[823] + Fh[83] + Fh[265], bE = Fh[941] + Fh[81] + Fh[682] + Fh[81] + Fh[685], vE = Fh[823] + Fh[83] + Fh[651] + Fh[83] + Fh[928], yE = Fh[941] + Fh[81] + Fh[682] + Fh[81] + Fh[253], xE = Fh[823] + Fh[83] + Fh[651] + Fh[83] + Fh[740], gE = Fh[941] + Fh[81] + Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[120], mE = Fh[941] + Fh[81] + Fh[682] + Fh[81] + Fh[926] + Fh[81] + Fh[121], wE = Fh[910] + Fh[81] + Fh[940] + Fh[81] + Fh[253], kE = Fh[910] + Fh[81] + Fh[940] + Fh[81] + Fh[717], pE = Fh[910] + Fh[81] + Fh[929], jE = Fh[914] + Fh[83] + Fh[220], ME = Fh[910] + Fh[81] + Fh[929] + Fh[81] + Fh[366], EE = Fh[914] + Fh[83] + Fh[220] + Fh[83] + Fh[740], SE = Fh[910] + Fh[81] + Fh[929] + Fh[81] + Fh[203] + Fh[81] + Fh[931], PE = Fh[910] + Fh[81] + Fh[929] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], IE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[942], CE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[943], TE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[944] + Fh[81] + Fh[943], OE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[253], $E = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[400], FE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[489], AE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[201] + Fh[81] + Fh[366], NE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[911], zE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[686] + Fh[81] + Fh[240], BE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[686], DE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[394], qE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[926] + Fh[81] + Fh[120], RE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[926] + Fh[81] + Fh[121], LE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[684], GE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[684] + Fh[81] + Fh[366], YE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[940] + Fh[81] + Fh[253], HE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[940] + Fh[81] + Fh[717], XE = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[941] + Fh[81] + Fh[948], WE = Fh[375] + Fh[81] + Fh[240], VE = Fh[356] + Fh[83] + Fh[183], UE = Fh[375] + Fh[81] + Fh[253], QE = Fh[356] + Fh[83] + Fh[740], JE = Fh[375] + Fh[81] + Fh[935], ZE = Fh[356] + Fh[83] + Fh[736], KE = Fh[375] + Fh[81] + Fh[935] + Fh[81] + Fh[366], tS = Fh[356] + Fh[83] + Fh[736] + Fh[83] + Fh[108], iS = Fh[375] + Fh[81] + Fh[203] + Fh[81] + Fh[931], nS = Fh[356] + Fh[83] + Fh[224] + Fh[83] + Fh[932], eS = Fh[375] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], sS = Fh[375] + Fh[81] + Fh[950] + Fh[81] + Fh[926], hS = Fh[356] + Fh[83] + Fh[306] + Fh[83] + Fh[264], rS = Fh[375] + Fh[81] + Fh[724] + Fh[81] + Fh[926], fS = Fh[356] + Fh[83] + Fh[55] + Fh[83] + Fh[264], aS = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[951], _S = Fh[356] + Fh[83] + Fh[409] + Fh[83] + Fh[952], cS = Fh[356] + Fh[83] + Fh[953] + Fh[83] + Fh[954], uS = Fh[356] + Fh[83] + Fh[654], oS = Fh[356] + Fh[83] + Fh[955] + Fh[83] + Fh[956], dS = Fh[356] + Fh[83] + Fh[28] + Fh[83] + Fh[957], lS = Fh[356] + Fh[83] + Fh[28] + Fh[83] + Fh[69], bS = Fh[356] + Fh[83] + Fh[958], vS = Fh[356] + Fh[83] + Fh[958] + Fh[83] + Fh[509], yS = Fh[347] + Fh[81] + Fh[950], xS = Fh[671] + Fh[83] + Fh[306], gS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[400], mS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[906], wS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[926], kS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[264], pS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[929], jS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[220], MS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[929] + Fh[81] + Fh[366], ES = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[935], SS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[736], PS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[935] + Fh[81] + Fh[366], IS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[203] + Fh[81] + Fh[931], CS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[224] + Fh[83] + Fh[932], TS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], OS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[933] + Fh[81] + Fh[253], $S = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[933] + Fh[81] + Fh[717], FS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[203] + Fh[81] + Fh[673], AS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[224] + Fh[83] + Fh[936], NS = Fh[347] + Fh[81] + Fh[950] + Fh[81] + Fh[203] + Fh[81] + Fh[678], zS = Fh[671] + Fh[83] + Fh[306] + Fh[83] + Fh[224] + Fh[83] + Fh[303], BS = Fh[671] + Fh[83] + Fh[55], DS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[400], qS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[906], RS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[926], LS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[264], GS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[929], YS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[220], HS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[929] + Fh[81] + Fh[366], XS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[935], WS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[736], VS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[935] + Fh[81] + Fh[366], US = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[203] + Fh[81] + Fh[931], QS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[224] + Fh[83] + Fh[932], JS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[203] + Fh[81] + Fh[931] + Fh[81] + Fh[926], ZS = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[933] + Fh[81] + Fh[253], KS = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[221] + Fh[83] + Fh[740], tP = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[933] + Fh[81] + Fh[717], iP = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[203] + Fh[81] + Fh[673], nP = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[224] + Fh[83] + Fh[936], eP = Fh[347] + Fh[81] + Fh[724] + Fh[81] + Fh[203] + Fh[81] + Fh[678], sP = Fh[671] + Fh[83] + Fh[55] + Fh[83] + Fh[224] + Fh[83] + Fh[303], hP = Fh[740], rP = Fh[276] + Fh[1] + Fh[706], fP = Fh[947] + Fh[44] + Fh[96], aP = Fh[274] + Fh[225] + Fh[226], _P = Fh[271] + Fh[100] + Fh[280], cP = Fh[265], uP = Fh[81] + Fh[959], oP = Fh[81] + Fh[960], dP = Fh[961] + Fh[47] + Fh[962], lP = Fh[81] + Fh[963], bP = Fh[930], vP = Fh[81] + Fh[349] + Fh[218], yP = Fh[306] + Fh[18] + Fh[964], xP = Fh[55] + Fh[18] + Fh[964], gP = Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[200], mP = Fh[306] + Fh[18] + Fh[964] + Fh[15] + Fh[124], wP = Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[219], kP = Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[219] + Fh[72] + Fh[367], pP = Fh[306] + Fh[18] + Fh[964] + Fh[15] + Fh[965], jP = Fh[306] + Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[1] + Fh[706], MP = Fh[306] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[38] + Fh[283], EP = Fh[306] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[734] + Fh[735], SP = Fh[306] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[1] + Fh[733], PP = Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[200], IP = Fh[55] + Fh[18] + Fh[964] + Fh[15] + Fh[124], CP = Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[219], TP = Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[219] + Fh[72] + Fh[367], OP = Fh[55] + Fh[18] + Fh[964] + Fh[15] + Fh[965], $P = Fh[55] + Fh[18] + Fh[964] + Fh[15] + Fh[965] + Fh[72] + Fh[367], FP = Fh[55] + Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[1] + Fh[706], AP = Fh[55] + Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[277] + Fh[278], NP = Fh[55] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[38] + Fh[283], zP = Fh[55] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[734] + Fh[735], BP = Fh[55] + Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[1] + Fh[733], DP = Fh[409] + Fh[25] + Fh[967], qP = Fh[269] + Fh[72] + Fh[401], RP = Fh[269] + Fh[1] + Fh[2] + Fh[217] + Fh[235], LP = Fh[269] + Fh[72] + Fh[200], GP = Fh[11] + Fh[47] + Fh[968], YP = Fh[66] + Fh[47] + Fh[968] + Fh[44] + Fh[60] + Fh[1] + Fh[533], HP = Fh[269] + Fh[100] + Fh[969], XP = Fh[30] + Fh[1] + Fh[98], WP = Fh[438] + Fh[25] + Fh[967], VP = Fh[438] + Fh[47] + Fh[968] + Fh[44] + Fh[82], UP = Fh[360] + Fh[44] + Fh[82], QP = Fh[30] + Fh[47] + Fh[968], JP = Fh[211] + Fh[1] + Fh[2], ZP = Fh[501], KP = Fh[61] + Fh[651] + Fh[15] + Fh[124] + Fh[120], tI = Fh[61] + Fh[439] + Fh[72] + Fh[731] + Fh[15] + Fh[124] + Fh[120], iI = Fh[61] + Fh[651] + Fh[15] + Fh[124] + Fh[121], nI = Fh[61] + Fh[439] + Fh[72] + Fh[731] + Fh[15] + Fh[124] + Fh[121], eI = Fh[61] + Fh[651] + Fh[47] + Fh[707], sI = Fh[61] + Fh[439] + Fh[72] + Fh[731] + Fh[47] + Fh[707], hI = Fh[61] + Fh[269] + Fh[47] + Fh[212], rI = Fh[405] + Fh[1] + Fh[528], fI = Fh[61] + Fh[710] + Fh[1] + Fh[706], aI = Fh[61] + Fh[710] + Fh[1] + Fh[706] + Fh[47] + Fh[712] + Fh[131] + Fh[241], _I = Fh[61] + Fh[651] + Fh[1] + Fh[706], cI = Fh[405], uI = Fh[61] + Fh[906], oI = Fh[61] + Fh[269] + Fh[72] + Fh[566], dI = Fh[62] + Fh[131] + Fh[970] + Fh[47] + Fh[212], lI = Fh[61] + Fh[269] + Fh[20] + Fh[966] + Fh[277] + Fh[278], bI = Fh[61] + Fh[221] + Fh[277] + Fh[278], vI = Fh[61] + Fh[224] + Fh[225] + Fh[226], yI = Fh[61] + Fh[221] + Fh[1] + Fh[706], xI = Fh[72] + Fh[566], gI = Fh[20] + Fh[966] + Fh[277] + Fh[278], mI = Fh[946] + Fh[81] + Fh[943], wI = Fh[61] + Fh[202] + Fh[72] + Fh[200], kI = Fh[61] + Fh[202], pI = Fh[20] + Fh[870], jI = Fh[61] + Fh[269] + Fh[20] + Fh[870], MI = Fh[61] + Fh[202] + Fh[72] + Fh[367], EI = Fh[61] + Fh[202] + Fh[20] + Fh[455], SI = Fh[900] + Fh[47] + Fh[212], PI = Fh[61] + Fh[269] + Fh[20] + Fh[971] + Fh[18] + Fh[964], II = Fh[61] + Fh[269] + Fh[114] + Fh[195] + Fh[18] + Fh[964], CI = Fh[61] + Fh[736], TI = Fh[211] + Fh[20] + Fh[971] + Fh[18] + Fh[964], OI = Fh[211] + Fh[114] + Fh[195] + Fh[18] + Fh[964], $I = Fh[61] + Fh[306] + Fh[18] + Fh[964], FI = Fh[61] + Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[401], AI = Fh[61] + Fh[306] + Fh[18] + Fh[964] + Fh[15] + Fh[124], NI = Fh[306] + Fh[18] + Fh[964] + Fh[25] + Fh[921], zI = Fh[3] + Fh[25] + Fh[921], BI = Fh[61] + Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[200], DI = Fh[306] + Fh[18] + Fh[964] + Fh[72] + Fh[897], qI = Fh[306] + Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[277] + Fh[278], RI = Fh[277] + Fh[278], LI = Fh[61] + Fh[55] + Fh[18] + Fh[964], GI = Fh[61] + Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[401], YI = Fh[61] + Fh[55] + Fh[18] + Fh[964] + Fh[15] + Fh[124], HI = Fh[55] + Fh[18] + Fh[964] + Fh[25] + Fh[921], XI = Fh[61] + Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[200], WI = Fh[55] + Fh[18] + Fh[964] + Fh[72] + Fh[897], VI = Fh[18] + Fh[964] + Fh[72] + Fh[219], UI = Fh[18] + Fh[964] + Fh[72] + Fh[219] + Fh[72] + Fh[367], QI = Fh[18] + Fh[964] + Fh[72] + Fh[897], JI = Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[38] + Fh[283], ZI = Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[38] + Fh[283] + Fh[15] + Fh[124], KI = Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[1] + Fh[706], tC = Fh[18] + Fh[964] + Fh[20] + Fh[966] + Fh[277] + Fh[278], iC = Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[1] + Fh[733], nC = Fh[18] + Fh[964] + Fh[25] + Fh[284] + Fh[734] + Fh[735], eC = Fh[18] + Fh[964] + Fh[15] + Fh[965], sC = Fh[18] + Fh[964] + Fh[15] + Fh[965] + Fh[72] + Fh[367], hC = Fh[237] + Fh[18] + Fh[964], rC = Fh[20] + Fh[971] + Fh[18] + Fh[964], fC = Fh[114] + Fh[195] + Fh[18] + Fh[964], aC = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[972], _C = Fh[34] + Fh[47] + Fh[321] + Fh[64] + Fh[410], cC = Fh[973] + Fh[47] + Fh[974], uC = Fh[3] + Fh[125] + Fh[124], oC = Fh[34] + Fh[44] + Fh[975] + Fh[15] + Fh[976], dC = Fh[3] + Fh[47] + Fh[321] + Fh[25] + Fh[967], lC = Fh[197] + Fh[47] + Fh[321] + Fh[25] + Fh[967], bC = Fh[977], vC = Fh[978] + Fh[64] + Fh[320], yC = Fh[979], xC = Fh[980] + Fh[64] + Fh[536], gC = Fh[211] + Fh[44] + Fh[981], mC = Fh[961] + Fh[47] + Fh[321] + Fh[25] + Fh[967], wC = Fh[237] + Fh[100] + Fh[982] + Fh[25] + Fh[284], kC = Fh[375] + Fh[81] + Fh[363] + Fh[81] + Fh[474], pC = Fh[314] + Fh[29] + Fh[314], jC = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371], MC = Fh[296] + Fh[64] + Fh[297] + Fh[100] + Fh[983], EC = Fh[314], SC = Fh[984] + Fh[18] + Fh[305] + Fh[1] + Fh[985], PC = Fh[374] + Fh[217] + Fh[199], IC = Fh[78] + Fh[986], CC = Fh[78] + Fh[987] + Fh[988] + Fh[350], TC = Fh[78] + Fh[989] + Fh[64] + Fh[314], OC = Fh[434] + Fh[81] + Fh[990], $C = Fh[991] + Fh[83] + Fh[992], FC = Fh[434] + Fh[81] + Fh[393], AC = Fh[991] + Fh[83] + Fh[430], NC = Fh[434] + Fh[81] + Fh[993], zC = Fh[991] + Fh[83] + Fh[146], BC = Fh[434] + Fh[81] + Fh[363], DC = Fh[3] + Fh[64] + Fh[129] + Fh[47] + Fh[130] + Fh[217] + Fh[199], qC = Fh[66] + Fh[44] + Fh[60] + Fh[1] + Fh[533], RC = Fh[81] + Fh[994], LC = Fh[296] + Fh[64] + Fh[297] + Fh[47] + Fh[130] + Fh[38] + Fh[995] + Fh[20] + Fh[996], GC = Fh[3] + Fh[217] + Fh[235] + Fh[47] + Fh[130] + Fh[217] + Fh[199], YC = Fh[133] + Fh[537], HC = Fh[166] + Fh[491] + Fh[29] + Fh[997], XC = Fh[62] + Fh[217] + Fh[235] + Fh[47] + Fh[998], WC = Fh[62] + Fh[217] + Fh[235] + Fh[18] + Fh[999], VC = Fh[1e3] + Fh[64] + Fh[1001], UC = Fh[922], QC = Fh[1002] + Fh[83] + Fh[213], JC = Fh[466], ZC = Fh[1003] + Fh[41] + Fh[1004], KC = Fh[1005], tT = Fh[1006], iT = Fh[43] + Fh[64] + Fh[65], nT = Fh[223] + Fh[114] + Fh[1007], eT = Fh[3] + Fh[38] + Fh[1008] + Fh[217] + Fh[476], sT = Fh[55] + Fh[25] + Fh[1009], hT = Fh[23] + Fh[241], rT = Fh[197] + Fh[114] + Fh[168], fT = Fh[197] + Fh[72] + Fh[401] + Fh[23] + Fh[241], aT = Fh[197] + Fh[277] + Fh[916], _T = Fh[197] + Fh[23] + Fh[241], cT = Fh[1010], uT = Fh[119] + Fh[44] + Fh[82], oT = Fh[543], dT = Fh[66] + Fh[64] + Fh[129] + Fh[1] + Fh[1011], lT = Fh[1012] + Fh[81] + Fh[1013], bT = Fh[66] + Fh[217] + Fh[1014] + Fh[64] + Fh[65], vT = Fh[1015], yT = Fh[1016], xT = Fh[1017], gT = Fh[1018], mT = Fh[245] + Fh[114] + Fh[195], wT = Fh[5] + Fh[25] + Fh[1019], kT = Fh[407] + Fh[114] + Fh[195], pT = Fh[209] + Fh[72] + Fh[566], jT = Fh[447] + Fh[18] + Fh[305], MT = Fh[143] + Fh[72] + Fh[1020], ET = Fh[1021] + Fh[120], ST = Fh[1021] + Fh[121], PT = Fh[1021] + Fh[114] + Fh[195], IT = Fh[1022], CT = Fh[1e3] + Fh[72] + Fh[1023], TT = Fh[1024] + Fh[72] + Fh[1023] + Fh[18] + Fh[713], OT = Fh[62] + Fh[25] + Fh[921], $T = Fh[34] + Fh[131] + Fh[1025], FT = Fh[30] + Fh[1] + Fh[1026] + Fh[217] + Fh[1014], AT = Fh[1027], NT = Fh[81] + Fh[1028], zT = Fh[1029] + Fh[882], BT = Fh[38] + Fh[1030] + Fh[29] + Fh[64] + Fh[1031] + Fh[248], DT = Fh[11] + Fh[72] + Fh[640], qT = Fh[1012] + Fh[81] + Fh[1032], RT = Fh[72] + Fh[401], LT = Fh[25] + Fh[284], GT = Fh[72] + Fh[897], YT = Fh[197] + Fh[64] + Fh[320], HT = Fh[64] + Fh[320], XT = Fh[356] + Fh[1033] + Fh[896], WT = Fh[468] + Fh[44] + Fh[82], VT = Fh[1034] + Fh[64] + Fh[1035], UT = Fh[66] + Fh[25] + Fh[967] + Fh[64] + Fh[1035], QT = Fh[1036] + Fh[64] + Fh[282] + Fh[25] + Fh[967], JT = Fh[269] + Fh[64] + Fh[129], ZT = Fh[25] + Fh[967] + Fh[29] + Fh[1] + Fh[1037] + Fh[165] + Fh[305] + Fh[29] + Fh[64] + Fh[282], KT = Fh[468] + Fh[131] + Fh[241], tO = Fh[1038], iO = Fh[359] + Fh[1] + Fh[533] + Fh[38] + Fh[534], nO = Fh[910] + Fh[81] + Fh[363] + Fh[81] + Fh[334], eO = Fh[910] + Fh[81] + Fh[363] + Fh[81] + Fh[658], sO = Fh[1039] + Fh[130], hO = Fh[223] + Fh[545] + Fh[247] + Fh[450] + Fh[451] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[314] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[588] + Fh[1040] + Fh[195] + Fh[1041] + Fh[979] + Fh[131] + Fh[1042] + Fh[591] + Fh[506] + Fh[89] + Fh[592] + Fh[314] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[593] + Fh[590] + Fh[580] + Fh[594] + Fh[506] + Fh[595] + Fh[218] + Fh[596] + Fh[502] + Fh[597] + Fh[350] + Fh[598] + Fh[1043] + Fh[1044] + Fh[1045] + Fh[600] + Fh[23] + Fh[1046] + Fh[41] + Fh[502] + Fh[315] + Fh[217] + Fh[1047] + Fh[315] + Fh[1048] + Fh[1049] + Fh[217] + Fh[1050] + Fh[1051] + Fh[450] + Fh[1052] + Fh[1053] + Fh[1054] + Fh[277] + Fh[316] + Fh[1055] + Fh[199] + Fh[1056] + Fh[1057] + Fh[38] + Fh[199] + Fh[47] + Fh[586] + Fh[1058] + Fh[450] + Fh[315] + Fh[1059] + Fh[305] + Fh[315] + Fh[1060] + Fh[314] + Fh[1061] + Fh[351] + Fh[64] + Fh[979] + Fh[1062] + Fh[351] + Fh[1063] + Fh[314] + Fh[580] + Fh[1064] + Fh[1065] + Fh[1066] + Fh[89] + Fh[16] + Fh[23] + Fh[749] + Fh[586] + Fh[89] + Fh[16] + Fh[121] + Fh[979] + Fh[498] + Fh[1067] + Fh[1068] + Fh[38] + Fh[1069] + Fh[232] + Fh[1070] + Fh[44] + Fh[590] + Fh[450] + Fh[351] + Fh[503] + Fh[1071] + Fh[607] + Fh[592] + Fh[89] + Fh[1072] + Fh[866] + Fh[1073] + Fh[1074] + Fh[1075] + Fh[582] + Fh[1076] + Fh[582] + Fh[38] + Fh[586] + Fh[352] + Fh[881] + Fh[351] + Fh[448] + Fh[352] + Fh[1077] + Fh[1078] + Fh[1079] + Fh[100] + Fh[352] + Fh[1080] + Fh[120] + Fh[316] + Fh[277] + Fh[498] + Fh[25] + Fh[316] + Fh[1081] + Fh[588] + Fh[370] + Fh[503] + Fh[315] + Fh[1082] + Fh[351] + Fh[621] + Fh[72] + Fh[588] + Fh[1083] + Fh[588] + Fh[1084] + Fh[1085] + Fh[277] + Fh[232] + Fh[1086] + Fh[498] + Fh[105] + Fh[502] + Fh[1087] + Fh[314] + Fh[1088] + Fh[305] + Fh[25] + Fh[580] + Fh[1089] + Fh[505] + Fh[370] + Fh[1090] + Fh[18] + Fh[1091] + Fh[1092] + Fh[352] + Fh[830] + Fh[1093] + Fh[315] + Fh[1094] + Fh[584] + Fh[450] + Fh[20] + Fh[1095] + Fh[316] + Fh[15] + Fh[351] + Fh[44] + Fh[1096] + Fh[1097] + Fh[351] + Fh[1098] + Fh[315] + Fh[588] + Fh[1099] + Fh[502] + Fh[1100] + Fh[130] + Fh[1101] + Fh[314] + Fh[582] + Fh[64] + Fh[843] + Fh[41] + Fh[1102] + Fh[1103] + Fh[504] + Fh[351] + Fh[979] + Fh[1104] + Fh[1105] + Fh[502] + Fh[1106] + Fh[1107] + Fh[1108] + Fh[120] + Fh[498] + Fh[315] + Fh[1109] + Fh[450] + Fh[1110] + Fh[315] + Fh[1111] + Fh[1112] + Fh[89] + Fh[1113] + Fh[1114] + Fh[1115] + Fh[352] + Fh[105] + Fh[502] + Fh[450] + Fh[1116] + Fh[352] + Fh[15] + Fh[1117] + Fh[1072] + Fh[1118] + Fh[159] + Fh[504] + Fh[217] + Fh[218] + Fh[592] + Fh[89] + Fh[41] + Fh[505] + Fh[734] + Fh[830] + Fh[979] + Fh[131] + Fh[503] + Fh[450] + Fh[588] + Fh[64] + Fh[16] + Fh[89] + Fh[41] + Fh[232] + Fh[979] + Fh[1119] + Fh[881] + Fh[89] + Fh[20] + Fh[1120] + Fh[225] + Fh[1121] + Fh[315] + Fh[1122] + Fh[1123] + Fh[1047] + Fh[1092] + Fh[349] + Fh[506] + Fh[25] + Fh[600] + Fh[351] + Fh[1124] + Fh[590] + Fh[588] + Fh[47] + Fh[316] + Fh[1125] + Fh[315] + Fh[120] + Fh[979] + Fh[18] + Fh[218] + Fh[314] + Fh[370] + Fh[979] + Fh[1126] + Fh[1127] + Fh[450] + Fh[314] + Fh[64] + Fh[218] + Fh[100] + Fh[1127] + Fh[41] + Fh[352] + Fh[1128] + Fh[352] + Fh[1129] + Fh[1130] + Fh[1131] + Fh[199] + Fh[18] + Fh[580] + Fh[1078] + Fh[600] + Fh[350] + Fh[38] + Fh[1132] + Fh[450] + Fh[1133] + Fh[734] + Fh[316] + Fh[588] + Fh[1134] + Fh[450] + Fh[277] + Fh[506] + Fh[232] + Fh[1135] + Fh[72] + Fh[450] + Fh[89] + Fh[1136] + Fh[131] + Fh[607] + Fh[159] + Fh[351] + Fh[450] + Fh[316] + Fh[131] + Fh[590] + Fh[1137] + Fh[1133] + Fh[1138] + Fh[1139] + Fh[277] + Fh[588] + Fh[314] + Fh[277] + Fh[315] + Fh[979] + Fh[1140] + Fh[352] + Fh[979] + Fh[350] + Fh[1141] + Fh[1142] + Fh[1143] + Fh[277] + Fh[1144] + Fh[1145] + Fh[505] + Fh[734] + Fh[1146] + Fh[225] + Fh[89] + Fh[23] + Fh[582] + Fh[315] + Fh[450] + Fh[588] + Fh[349] + Fh[450] + Fh[590] + Fh[1147] + Fh[1148] + Fh[38] + Fh[1149] + Fh[1129] + Fh[349] + Fh[1150] + Fh[503] + Fh[100] + Fh[580] + Fh[1151] + Fh[305] + Fh[350] + Fh[1144] + Fh[114] + Fh[1152] + Fh[979] + Fh[130] + Fh[1153] + Fh[232] + Fh[1154] + Fh[504] + Fh[1155] + Fh[616] + Fh[315] + Fh[416] + Fh[89] + Fh[450] + Fh[1156] + Fh[370] + Fh[504] + Fh[979] + Fh[1157] + Fh[370] + Fh[1127] + Fh[41] + Fh[1158] + Fh[351] + Fh[979] + Fh[1159] + Fh[41] + Fh[1160] + Fh[1161] + Fh[1162] + Fh[314] + Fh[1163] + Fh[1164] + Fh[41] + Fh[352] + Fh[582] + Fh[25] + Fh[1165] + Fh[232] + Fh[1144] + Fh[1166] + Fh[315] + Fh[600] + Fh[120] + Fh[502] + Fh[1167] + Fh[504] + Fh[89] + Fh[1168] + Fh[1169] + Fh[1170] + Fh[89] + Fh[23] + Fh[505] + Fh[1171] + Fh[616] + Fh[1172] + Fh[502] + Fh[979] + Fh[1173] + Fh[315] + Fh[1174] + Fh[305] + Fh[314] + Fh[1175] + Fh[436] + Fh[195] + Fh[23] + Fh[586] + Fh[120] + Fh[1047] + Fh[1176] + Fh[1177] + Fh[1178] + Fh[1047] + Fh[114] + Fh[1179] + Fh[232] + Fh[44] + Fh[1144] + Fh[20] + Fh[349] + Fh[1180] + Fh[1144] + Fh[277] + Fh[1181] + Fh[1182] + Fh[1183] + Fh[436] + Fh[1184] + Fh[1185] + Fh[305] + Fh[316] + Fh[120] + Fh[1186] + Fh[349] + Fh[225] + Fh[1127] + Fh[590] + Fh[15] + Fh[1127] + Fh[1187] + Fh[349] + Fh[1086] + Fh[352] + Fh[199] + Fh[316] + Fh[23] + Fh[130] + Fh[105] + Fh[580] + Fh[121] + Fh[505] + Fh[734] + Fh[316] + Fh[72] + Fh[1188] + Fh[159] + Fh[1127] + Fh[159] + Fh[1189] + Fh[592] + Fh[1190] + Fh[351] + Fh[1191] + Fh[979] + Fh[38] + Fh[1192] + Fh[1193] + Fh[498] + Fh[351] + Fh[159] + Fh[1194] + Fh[159] + Fh[232] + Fh[120] + Fh[580] + Fh[979] + Fh[436] + Fh[316] + Fh[218] + Fh[1195] + Fh[1196] + Fh[277] + Fh[314] + Fh[502] + Fh[277] + Fh[315] + Fh[504] + Fh[1] + Fh[600] + Fh[114] + Fh[130] + Fh[121] + Fh[830] + Fh[315] + Fh[502] + Fh[232] + Fh[1197] + Fh[120] + Fh[352] + Fh[1198] + Fh[349] + Fh[1] + Fh[582] + Fh[350] + Fh[72] + Fh[506] + Fh[436] + Fh[830] + Fh[232] + Fh[16] + Fh[38] + Fh[1199] + Fh[1200] + Fh[305] + Fh[121] + Fh[349] + Fh[613] + Fh[89] + Fh[277] + Fh[1201] + Fh[1202] + Fh[582] + Fh[20] + Fh[450] + Fh[130] + Fh[349] + Fh[881] + Fh[25] + Fh[1203] + Fh[225] + Fh[1204] + Fh[1205] + Fh[450] + Fh[498] + Fh[1206] + Fh[979] + Fh[1207] + Fh[232] + Fh[277] + Fh[195] + Fh[100] + Fh[1127] + Fh[314] + Fh[388] + Fh[616] + Fh[1208] + Fh[1209] + Fh[625] + Fh[195] + Fh[350] + Fh[1210] + Fh[350] + Fh[199] + Fh[1211] + Fh[505] + Fh[44] + Fh[349] + Fh[47] + Fh[1212] + Fh[1213] + Fh[979] + Fh[218] + Fh[315] + Fh[867] + Fh[1214] + Fh[1215] + Fh[316] + Fh[1216] + Fh[305] + Fh[131] + Fh[830] + Fh[1217] + Fh[351] + Fh[830] + Fh[64] + Fh[505] + Fh[15] + Fh[350] + Fh[15] + Fh[600] + Fh[1218] + Fh[613] + Fh[351] + Fh[199] + Fh[1219] + Fh[1220] + Fh[1221] + Fh[506] + Fh[225] + Fh[89] + Fh[1222] + Fh[316] + Fh[23] + Fh[607] + Fh[1223] + Fh[498] + Fh[1224] + Fh[881] + Fh[734] + Fh[607] + Fh[1225] + Fh[1226] + Fh[1227] + Fh[1228] + Fh[1229] + Fh[1230] + Fh[1231] + Fh[72] + Fh[314] + Fh[592] + Fh[590] + Fh[1232] + Fh[352] + Fh[1233] + Fh[1234] + Fh[351] + Fh[582] + Fh[1235] + Fh[218] + Fh[72] + Fh[350] + Fh[1236] + Fh[370] + Fh[502] + Fh[352] + Fh[1237] + Fh[15] + Fh[1238] + Fh[1239] + Fh[1127] + Fh[44] + Fh[199] + Fh[1240] + Fh[503] + Fh[1241] + Fh[18] + Fh[352] + Fh[881] + Fh[232] + Fh[498] + Fh[436] + Fh[504] + Fh[352] + Fh[277] + Fh[588] + Fh[38] + Fh[352] + Fh[600] + Fh[72] + Fh[1242] + Fh[351] + Fh[1243] + Fh[225] + Fh[498] + Fh[20] + Fh[314] + Fh[1144] + Fh[114] + Fh[590] + Fh[1127] + Fh[1244] + Fh[979] + Fh[503] + Fh[38] + Fh[590] + Fh[502] + Fh[352] + Fh[600] + Fh[1245] + Fh[607] + Fh[352] + Fh[979] + Fh[72] + Fh[1246] + Fh[1247] + Fh[64] + Fh[600] + Fh[351] + Fh[504] + Fh[1248] + Fh[316] + Fh[1249] + Fh[979] + Fh[1127] + Fh[316] + Fh[41] + Fh[1250] + Fh[352] + Fh[1251] + Fh[349] + Fh[47] + Fh[1144] + Fh[15] + Fh[351] + Fh[1252] + Fh[436] + Fh[1144] + Fh[1253] + Fh[613] + Fh[351] + Fh[305] + Fh[1254] + Fh[130] + Fh[89] + Fh[1255] + Fh[131] + Fh[582] + Fh[316] + Fh[1256] + Fh[616] + Fh[114] + Fh[1144] + Fh[1257] + Fh[314] + Fh[1133] + Fh[1258] + Fh[1259] + Fh[89] + Fh[1260] + Fh[979] + Fh[1261] + Fh[1262] + Fh[44] + Fh[350] + Fh[580] + Fh[232] + Fh[506] + Fh[120] + Fh[1263] + Fh[630] + Fh[350] + Fh[631] + Fh[173], rO = Fh[223] + Fh[545] + Fh[247] + Fh[450] + Fh[451] + Fh[577] + Fh[578] + Fh[579] + Fh[76] + Fh[580] + Fh[581] + Fh[582] + Fh[314] + Fh[583] + Fh[584] + Fh[585] + Fh[586] + Fh[587] + Fh[588] + Fh[1264] + Fh[588] + Fh[1265] + Fh[450] + Fh[100] + Fh[218] + Fh[979] + Fh[352] + Fh[591] + Fh[506] + Fh[89] + Fh[592] + Fh[314] + Fh[199] + Fh[89] + Fh[20] + Fh[130] + Fh[593] + Fh[590] + Fh[580] + Fh[594] + Fh[506] + Fh[595] + Fh[218] + Fh[596] + Fh[502] + Fh[597] + Fh[350] + Fh[598] + Fh[1043] + Fh[1266] + Fh[1045] + Fh[600] + Fh[23] + Fh[504] + Fh[1267] + Fh[1133] + Fh[979] + Fh[1268] + Fh[502] + Fh[1269] + Fh[1047] + Fh[232] + Fh[607] + Fh[1270] + Fh[588] + Fh[1271] + Fh[504] + Fh[1272] + Fh[586] + Fh[18] + Fh[580] + Fh[1273] + Fh[130] + Fh[314] + Fh[1274] + Fh[1263] + Fh[41] + Fh[1275] + Fh[370] + Fh[16] + Fh[314] + Fh[18] + Fh[979] + Fh[1] + Fh[1276] + Fh[1277] + Fh[498] + Fh[20] + Fh[502] + Fh[23] + Fh[881] + Fh[349] + Fh[1278] + Fh[305] + Fh[370] + Fh[616] + Fh[277] + Fh[1279] + Fh[1280] + Fh[588] + Fh[1281] + Fh[1047] + Fh[587] + Fh[305] + Fh[277] + Fh[89] + Fh[217] + Fh[505] + Fh[1282] + Fh[607] + Fh[590] + Fh[218] + Fh[89] + Fh[44] + Fh[503] + Fh[314] + Fh[1283] + Fh[1284] + Fh[316] + Fh[120] + Fh[607] + Fh[232] + Fh[15] + Fh[16] + Fh[23] + Fh[1285] + Fh[1286] + Fh[450] + Fh[199] + Fh[1287] + Fh[1288] + Fh[436] + Fh[1289] + Fh[121] + Fh[504] + Fh[20] + Fh[1290] + Fh[1291] + Fh[586] + Fh[349] + Fh[16] + Fh[979] + Fh[502] + Fh[105] + Fh[1292] + Fh[64] + Fh[1293] + Fh[232] + Fh[120] + Fh[218] + Fh[979] + Fh[130] + Fh[1294] + Fh[349] + Fh[881] + Fh[1295] + Fh[607] + Fh[1296] + Fh[830] + Fh[352] + Fh[1297] + Fh[20] + Fh[195] + Fh[316] + Fh[979] + Fh[1298] + Fh[1299] + Fh[450] + Fh[1300] + Fh[613] + Fh[1301] + Fh[1302] + Fh[450] + Fh[590] + Fh[1303] + Fh[1304] + Fh[450] + Fh[600] + Fh[18] + Fh[1305] + Fh[1274] + Fh[607] + Fh[1306] + Fh[504] + Fh[1307] + Fh[218] + Fh[277] + Fh[316] + Fh[506] + Fh[314] + Fh[1308] + Fh[314] + Fh[1309] + Fh[38] + Fh[352] + Fh[18] + Fh[1133] + Fh[450] + Fh[55] + Fh[436] + Fh[314] + Fh[1310] + Fh[1311] + Fh[979] + Fh[1312] + Fh[503] + Fh[350] + Fh[1313] + Fh[1133] + Fh[217] + Fh[504] + Fh[1314] + Fh[218] + Fh[18] + Fh[314] + Fh[1315] + Fh[1127] + Fh[1316] + Fh[1317] + Fh[1318] + Fh[582] + Fh[1319] + Fh[277] + Fh[841] + Fh[1320] + Fh[20] + Fh[1321] + Fh[277] + Fh[588] + Fh[1322] + Fh[1144] + Fh[1323] + Fh[232] + Fh[605] + Fh[1047] + Fh[316] + Fh[450] + Fh[232] + Fh[23] + Fh[1324] + Fh[1282] + Fh[979] + Fh[830] + Fh[64] + Fh[195] + Fh[315] + Fh[1325] + Fh[350] + Fh[1326] + Fh[1327] + Fh[20] + Fh[582] + Fh[351] + Fh[1328] + Fh[498] + Fh[592] + Fh[1024] + Fh[316] + Fh[979] + Fh[315] + Fh[159] + Fh[305] + Fh[41] + Fh[616] + Fh[120] + Fh[506] + Fh[352] + Fh[592] + Fh[1127] + Fh[316] + Fh[305] + Fh[314] + Fh[436] + Fh[130] + Fh[232] + Fh[592] + Fh[232] + Fh[1329] + Fh[18] + Fh[16] + Fh[225] + Fh[588] + Fh[1330] + Fh[1331] + Fh[1332] + Fh[1333] + Fh[1334] + Fh[89] + Fh[498] + Fh[370] + Fh[1335] + Fh[64] + Fh[315] + Fh[1336] + Fh[370] + Fh[1337] + Fh[370] + Fh[1338] + Fh[1339] + Fh[100] + Fh[498] + Fh[1340] + Fh[1047] + Fh[89] + Fh[505] + Fh[1322] + Fh[16] + Fh[590] + Fh[1341] + Fh[1342] + Fh[1343] + Fh[114] + Fh[1144] + Fh[18] + Fh[1344] + Fh[592] + Fh[580] + Fh[1345] + Fh[1346] + Fh[370] + Fh[1347] + Fh[370] + Fh[232] + Fh[505] + Fh[1348] + Fh[1349] + Fh[38] + Fh[1350] + Fh[18] + Fh[613] + Fh[1351] + Fh[580] + Fh[590] + Fh[120] + Fh[1133] + Fh[590] + Fh[100] + Fh[1047] + Fh[841] + Fh[498] + Fh[15] + Fh[350] + Fh[47] + Fh[758] + Fh[1127] + Fh[120] + Fh[588] + Fh[15] + Fh[600] + Fh[1352] + Fh[503] + Fh[734] + Fh[350] + Fh[1353] + Fh[616] + Fh[592] + Fh[315] + Fh[100] + Fh[607] + Fh[351] + Fh[15] + Fh[580] + Fh[105] + Fh[195] + Fh[1354] + Fh[506] + Fh[315] + Fh[1355] + Fh[1356] + Fh[351] + Fh[1357] + Fh[1358] + Fh[1359] + Fh[1360] + Fh[315] + Fh[1361] + Fh[217] + Fh[1144] + Fh[1362] + Fh[613] + Fh[1241] + Fh[217] + Fh[1363] + Fh[315] + Fh[586] + Fh[1] + Fh[1364] + Fh[121] + Fh[316] + Fh[586] + Fh[316] + Fh[121] + Fh[89] + Fh[607] + Fh[64] + Fh[1365] + Fh[352] + Fh[607] + Fh[1366] + Fh[1127] + Fh[131] + Fh[1367] + Fh[105] + Fh[503] + Fh[1285] + Fh[1368] + Fh[277] + Fh[616] + Fh[1369] + Fh[1370] + Fh[44] + Fh[1371] + Fh[979] + Fh[881] + Fh[225] + Fh[616] + Fh[313] + Fh[195] + Fh[734] + Fh[616] + Fh[277] + Fh[349] + Fh[277] + Fh[1372] + Fh[316] + Fh[120] + Fh[315] + Fh[114] + Fh[1373] + Fh[315] + Fh[130] + Fh[18] + Fh[351] + Fh[1374] + Fh[1124] + Fh[1375] + Fh[1376] + Fh[734] + Fh[16] + Fh[44] + Fh[349] + Fh[600] + Fh[131] + Fh[504] + Fh[1377] + Fh[352] + Fh[1] + Fh[349] + Fh[1] + Fh[315] + Fh[582] + Fh[131] + Fh[586] + Fh[1378] + Fh[613] + Fh[1379] + Fh[1380] + Fh[314] + Fh[582] + Fh[734] + Fh[305] + Fh[1381] + Fh[588] + Fh[1382] + Fh[582] + Fh[1383] + Fh[130] + Fh[1384] + Fh[607] + Fh[232] + Fh[1385] + Fh[752] + Fh[44] + Fh[130] + Fh[1075] + Fh[315] + Fh[72] + Fh[616] + Fh[105] + Fh[580] + Fh[590] + Fh[120] + Fh[1386] + Fh[1387] + Fh[199] + Fh[41] + Fh[1388] + Fh[1127] + Fh[314] + Fh[121] + Fh[315] + Fh[1389] + Fh[89] + Fh[1390] + Fh[349] + Fh[498] + Fh[41] + Fh[1391] + Fh[1392] + Fh[1201] + Fh[217] + Fh[316] + Fh[1393] + Fh[89] + Fh[1394] + Fh[352] + Fh[23] + Fh[504] + Fh[120] + Fh[218] + Fh[41] + Fh[351] + Fh[502] + Fh[1395] + Fh[89] + Fh[1396] + Fh[607] + Fh[350] + Fh[616] + Fh[23] + Fh[218] + Fh[232] + Fh[1047] + Fh[15] + Fh[1397] + Fh[1398] + Fh[1399] + Fh[25] + Fh[1400] + Fh[1401] + Fh[315] + Fh[18] + Fh[1402] + Fh[232] + Fh[1403] + Fh[1242] + Fh[351] + Fh[502] + Fh[20] + Fh[616] + Fh[23] + Fh[1404] + Fh[47] + Fh[450] + Fh[498] + Fh[44] + Fh[1405] + Fh[1406] + Fh[64] + Fh[16] + Fh[25] + Fh[1407] + Fh[89] + Fh[506] + Fh[1408] + Fh[1329] + Fh[450] + Fh[436] + Fh[979] + Fh[18] + Fh[218] + Fh[350] + Fh[1409] + Fh[23] + Fh[1144] + Fh[1410] + Fh[600] + Fh[159] + Fh[1047] + Fh[316] + Fh[1411] + Fh[590] + Fh[1412] + Fh[314] + Fh[1413] + Fh[450] + Fh[23] + Fh[616] + Fh[114] + Fh[1414] + Fh[450] + Fh[1415] + Fh[590] + Fh[505] + Fh[1416] + Fh[351] + Fh[498] + Fh[64] + Fh[607] + Fh[734] + Fh[498] + Fh[590] + Fh[1417] + Fh[105] + Fh[503] + Fh[314] + Fh[592] + Fh[602] + Fh[38] + Fh[586] + Fh[979] + Fh[25] + Fh[199] + Fh[131] + Fh[316] + Fh[1144] + Fh[89] + Fh[1144] + Fh[590] + Fh[502] + Fh[1418] + Fh[502] + Fh[1419] + Fh[349] + Fh[23] + Fh[352] + Fh[20] + Fh[1420] + Fh[1421] + Fh[350] + Fh[64] + Fh[1422] + Fh[734] + Fh[1423] + Fh[1424], fO = Fh[1425] + Fh[187], aO = Fh[1426] + Fh[29] + Fh[314] + Fh[83] + Fh[89] + Fh[1133] + Fh[29] + Fh[1427] + Fh[104] + Fh[570], _O = Fh[1428], cO = Fh[829], uO = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[23] + Fh[419] + Fh[29] + Fh[421], oO = Fh[1426] + Fh[545] + Fh[315] + Fh[577] + Fh[276] + Fh[104] + Fh[740] + Fh[511] + Fh[74] + Fh[75] + Fh[314] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[83] + Fh[350] + Fh[77], dO = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[23] + Fh[419], lO = Fh[1426] + Fh[545] + Fh[314] + Fh[577], bO = Fh[1429], vO = Fh[545] + Fh[1426] + Fh[29] + Fh[316] + Fh[1133] + Fh[29] + Fh[1430] + Fh[104] + Fh[692] + Fh[75] + Fh[314] + Fh[83] + Fh[232] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[83] + Fh[232] + Fh[428] + Fh[315] + Fh[77], yO = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[23] + Fh[419] + Fh[545] + Fh[435], xO = Fh[1426] + Fh[545] + Fh[315] + Fh[577], gO = Fh[545] + Fh[1426] + Fh[29] + Fh[314] + Fh[83] + Fh[316] + Fh[1133] + Fh[29] + Fh[742], mO = Fh[1431] + Fh[47] + Fh[212], wO = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[72] + Fh[552] + Fh[47] + Fh[1376], kO = Fh[281] + Fh[511] + Fh[431] + Fh[577] + Fh[538] + Fh[104] + Fh[1432] + Fh[511] + Fh[271] + Fh[104] + Fh[538] + Fh[577] + Fh[538] + Fh[104] + Fh[651] + Fh[1433] + Fh[703] + Fh[29] + Fh[314] + Fh[187] + Fh[29] + Fh[314] + Fh[187] + Fh[29] + Fh[315] + Fh[187] + Fh[1434] + Fh[276] + Fh[104] + Fh[740] + Fh[511] + Fh[74] + Fh[75] + Fh[1435] + Fh[76] + Fh[1435] + Fh[76] + Fh[1435] + Fh[76] + Fh[314] + Fh[83] + Fh[316] + Fh[1436] + Fh[271] + Fh[104] + Fh[509] + Fh[511] + Fh[349] + Fh[187] + Fh[577] + Fh[1437] + Fh[511] + Fh[315] + Fh[187] + Fh[577], pO = Fh[1437] + Fh[104] + Fh[92] + Fh[511] + Fh[232] + Fh[187] + Fh[577], jO = Fh[1437] + Fh[104] + Fh[93] + Fh[511] + Fh[232] + Fh[187] + Fh[577], MO = Fh[83] + Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[72] + Fh[552] + Fh[44] + Fh[1438], EO = Fh[545] + Fh[1426] + Fh[29] + Fh[316] + Fh[1133] + Fh[29] + Fh[1430] + Fh[104] + Fh[692] + Fh[75] + Fh[314] + Fh[83] + Fh[232] + Fh[428] + Fh[314] + Fh[428] + Fh[314] + Fh[83] + Fh[232] + Fh[428] + Fh[315] + Fh[1436], SO = Fh[370] + Fh[104] + Fh[277] + Fh[371] + Fh[104] + Fh[72] + Fh[552] + Fh[44] + Fh[1438], PO = Fh[34] + Fh[436], IO = Fh[415] + Fh[217] + Fh[1439], CO = Fh[47] + Fh[1440], TO = Fh[1441], OO = Fh[1442], $O = Fh[1443] + Fh[81] + Fh[1444], FO = Fh[1443] + Fh[81] + Fh[363], AO = Fh[1427] + Fh[15] + Fh[448], NO = Fh[1427] + Fh[15] + Fh[448] + Fh[72] + Fh[1445], zO = Fh[1446], BO = Fh[206] + Fh[114] + Fh[288], DO = Fh[1447] + Fh[114] + Fh[299], qO = Fh[473] + Fh[81] + Fh[1448] + Fh[81] + Fh[400] + Fh[81] + Fh[1449], RO = Fh[473] + Fh[81] + Fh[1448] + Fh[81] + Fh[400] + Fh[81] + Fh[1450], LO = Fh[473] + Fh[81] + Fh[942] + Fh[81] + Fh[1448] + Fh[81] + Fh[400] + Fh[81] + Fh[1449], GO = Fh[473] + Fh[81] + Fh[942] + Fh[81] + Fh[1448] + Fh[81] + Fh[400] + Fh[81] + Fh[1450], YO = Fh[1002], HO = Fh[11] + Fh[38] + Fh[1451], XO = Fh[30] + Fh[38] + Fh[1451], WO = Fh[924] + Fh[38] + Fh[1452], VO = Fh[1453], UO = Fh[100] + Fh[1454] + Fh[217] + Fh[1014], QO = Fh[237] + Fh[44] + Fh[185], JO = Fh[34] + Fh[1] + Fh[1455] + Fh[44] + Fh[227], ZO = Fh[108] + Fh[38] + Fh[1452], KO = Fh[3] + Fh[38] + Fh[39] + Fh[38] + Fh[1452] + Fh[72] + Fh[897], t$ = Fh[1034], i$ = Fh[197] + Fh[64] + Fh[320] + Fh[47] + Fh[130] + Fh[217] + Fh[1014], n$ = Fh[1456], e$ = Fh[472] + Fh[44] + Fh[185], s$ = Fh[1457], h$ = Fh[197] + Fh[72] + Fh[401] + Fh[47] + Fh[130] + Fh[217] + Fh[1014], r$ = Fh[1] + Fh[1458] + Fh[72] + Fh[401] + Fh[217] + Fh[1014], f$ = Fh[197] + Fh[25] + Fh[284] + Fh[47] + Fh[130] + Fh[217] + Fh[1014], a$ = Fh[1] + Fh[1458] + Fh[25] + Fh[284] + Fh[217] + Fh[1014], _$ = Fh[64] + Fh[320] + Fh[133], c$ = Fh[973] + Fh[25] + Fh[1459] + Fh[20] + Fh[971], u$ = Fh[973] + Fh[25] + Fh[1459] + Fh[114] + Fh[195], o$ = Fh[1] + Fh[1458] + Fh[72] + Fh[1460] + Fh[64] + Fh[320] + Fh[217] + Fh[1014], d$ = Fh[1461], l$ = Fh[370] + Fh[104] + Fh[25] + Fh[967] + Fh[64] + Fh[1462], b$ = Fh[1463] + Fh[1464] + Fh[1338] + Fh[64] + Fh[29] + Fh[315] + Fh[187], v$ = Fh[350] + Fh[187], y$ = Fh[538] + Fh[72] + Fh[731], x$ = Fh[1465], g$ = Fh[66] + Fh[41] + Fh[42] + Fh[1] + Fh[533], m$ = Fh[1466], w$ = Fh[46] + Fh[64] + Fh[1035], k$ = Fh[1467], p$ = Fh[43] + Fh[64] + Fh[1035], j$ = Fh[66] + Fh[72] + Fh[200] + Fh[1] + Fh[533], M$ = Fh[197] + Fh[882], E$ = Fh[43] + Fh[64] + Fh[1035] + Fh[225] + Fh[1468] + Fh[1] + Fh[1469] + Fh[15] + Fh[218] + Fh[225] + Fh[886], S$ = Fh[553], P$ = Fh[62] + Fh[114] + Fh[168], I$ = Fh[34] + Fh[64] + Fh[1470], C$ = Fh[25] + Fh[967] + Fh[64] + Fh[1462], T$ = Fh[823] + Fh[64] + Fh[1462], O$ = Fh[1471] + Fh[72] + Fh[416] + Fh[23] + Fh[417], $$ = Fh[415] + Fh[38] + Fh[1472] + Fh[1] + Fh[1469] + Fh[114] + Fh[195] + Fh[15] + Fh[1473], F$ = Fh[447] + Fh[114] + Fh[195] + Fh[15] + Fh[1473], A$ = Fh[34] + Fh[64] + Fh[1474], N$ = Fh[1475] + Fh[114] + Fh[1476], z$ = Fh[55] + Fh[1] + Fh[452], B$ = Fh[1034] + Fh[25] + Fh[967] + Fh[64] + Fh[1035], D$ = Fh[0] + Fh[64] + Fh[320] + Fh[47] + Fh[321], q$ = Fh[11] + Fh[72] + Fh[640] + Fh[47] + Fh[130] + Fh[217] + Fh[1014], R$ = Fh[1477] + Fh[217] + Fh[222], L$ = Fh[467], G$ = Fh[1478], Y$ = Fh[1477] + Fh[29] + Fh[247] + Fh[248], H$ = Fh[29] + Fh[830] + Fh[29], X$ = Fh[1479] + Fh[64] + Fh[1031], W$ = Fh[472] + Fh[38] + Fh[1480] + Fh[64] + Fh[129], V$ = Fh[34] + Fh[72] + Fh[1481], U$ = Fh[1012] + Fh[81] + Fh[723] + Fh[81] + Fh[1482], Q$ = Fh[63] + Fh[217] + Fh[1014] + Fh[64] + Fh[65], J$ = Fh[1012] + Fh[81] + Fh[1483], Z$ = Fh[329] + Fh[64] + Fh[1031], K$ = Fh[296] + Fh[64] + Fh[297] + Fh[100] + Fh[983] + Fh[41] + Fh[441] + Fh[133], tF = Fh[1484] + Fh[225] + Fh[1485], iF = Fh[1012] + Fh[81] + Fh[723] + Fh[81] + Fh[1486], nF = Fh[1487], eF = Fh[237] + Fh[25] + Fh[284] + Fh[217] + Fh[199], sF = Fh[237] + Fh[25] + Fh[284], hF = Fh[78] + Fh[1488], rF = Fh[900] + Fh[72] + Fh[402], fF = Fh[398] + Fh[81] + Fh[723] + Fh[81] + Fh[1482], aF = Fh[956], _F = Fh[901], cF = Fh[956] + Fh[217] + Fh[235], uF = Fh[398] + Fh[81] + Fh[1483], oF = Fh[398] + Fh[81] + Fh[723] + Fh[81] + Fh[1486], dF = Fh[681] + Fh[81] + Fh[1489] + Fh[81] + Fh[929], lF = Fh[681] + Fh[81] + Fh[1489] + Fh[81] + Fh[929] + Fh[81] + Fh[253], bF = Fh[681] + Fh[81] + Fh[1489] + Fh[81] + Fh[933] + Fh[81] + Fh[253], vF = Fh[296] + Fh[64] + Fh[297] + Fh[41] + Fh[441] + Fh[133], yF = Fh[1490] + Fh[104] + Fh[466], xF = Fh[1491] + Fh[104] + Fh[466], gF = Fh[1492] + Fh[104] + Fh[466], mF = Fh[74] + Fh[75] + Fh[314] + Fh[428] + Fh[1493] + Fh[428] + Fh[314] + Fh[428] + Fh[315] + Fh[77], wF = Fh[78] + Fh[1494] + Fh[314], kF = Fh[34] + Fh[100] + Fh[1495], pF = Fh[34] + Fh[100] + Fh[1496], jF = Fh[1497] + Fh[81] + Fh[1482], MF = Fh[1498] + Fh[47] + Fh[212], EF = Fh[1499], SF = Fh[1497] + Fh[81] + Fh[1486], PF = Fh[62] + Fh[72] + Fh[640], IF = Fh[182] + Fh[114] + Fh[195] + Fh[114] + Fh[1500], CF = Fh[463] + Fh[18] + Fh[713], TF = Fh[370] + Fh[104] + Fh[114] + Fh[1501], OF = Fh[542], $F = Fh[78] + Fh[1502], FF = Fh[315] + Fh[187] + Fh[29] + Fh[1463] + Fh[1464] + Fh[38] + Fh[590] + Fh[38] + Fh[590] + Fh[38] + Fh[590], AF = Fh[89] + Fh[187] + Fh[29] + Fh[349] + Fh[187], NF = Fh[3] + Fh[114] + Fh[1501], zF = Fh[1027] + Fh[114] + Fh[299], BF = Fh[1503] + Fh[1158] + Fh[1504], DF = Fh[461] + Fh[1] + Fh[1505], qF = Fh[1506], RF = Fh[197] + Fh[20] + Fh[478], LF = Fh[415] + Fh[114] + Fh[1501], GF = Fh[415] + Fh[225] + Fh[1507] + Fh[592] + Fh[1508], YF = Fh[1002] + Fh[83] + Fh[329] + Fh[83] + Fh[1034], HF = Fh[1002] + Fh[83] + Fh[1509], XF = Fh[1002] + Fh[83] + Fh[329] + Fh[83] + Fh[869], WF = Fh[1002] + Fh[83] + Fh[1510], VF = Fh[1002] + Fh[83] + Fh[1511], UF = Fh[956] + Fh[83] + Fh[329] + Fh[83] + Fh[1034], QF = Fh[956] + Fh[83] + Fh[1509], JF = Fh[956] + Fh[83] + Fh[329] + Fh[83] + Fh[869], ZF = Fh[466] + Fh[83] + Fh[1034], KF = Fh[1512], tA = Fh[466] + Fh[83] + Fh[869], iA = Fh[375] + Fh[81] + Fh[949], nA = Fh[356] + Fh[83] + Fh[409], eA = Fh[1513] + Fh[81] + Fh[1482], sA = Fh[463] + Fh[83] + Fh[1034], hA = Fh[1513] + Fh[81] + Fh[1514], rA = Fh[463] + Fh[83] + Fh[1515], fA = Fh[1513] + Fh[81] + Fh[1486], aA = Fh[463] + Fh[83] + Fh[869], _A = Fh[148] + Fh[81] + Fh[138], cA = Fh[1516] + Fh[83] + Fh[554], uA = Fh[472] + Fh[217] + Fh[1014] + Fh[131] + Fh[241], oA = Fh[3] + Fh[217] + Fh[1014] + Fh[217] + Fh[1517], dA = Fh[332] + Fh[217] + Fh[1518], lA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1519], bA = Fh[1520], vA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[681], yA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1521], xA = Fh[1522], gA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1523], mA = Fh[1524], wA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1525] + Fh[81] + Fh[1526] + Fh[81] + Fh[375], kA = Fh[197] + Fh[83] + Fh[1527] + Fh[83] + Fh[356], pA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1525] + Fh[81] + Fh[375], jA = Fh[197] + Fh[83] + Fh[356], MA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1525] + Fh[81] + Fh[333], EA = Fh[197] + Fh[83] + Fh[930], SA = Fh[473] + Fh[81] + Fh[250] + Fh[81] + Fh[1525] + Fh[81] + Fh[203], PA = Fh[197] + Fh[83] + Fh[224], IA = Fh[44] + Fh[1037] + Fh[217] + Fh[1014], CA = Fh[72] + Fh[640] + Fh[217] + Fh[1014], TA = Fh[131] + Fh[1528] + Fh[217] + Fh[1014], OA = Fh[225] + Fh[1507] + Fh[592] + Fh[1508] + Fh[217] + Fh[1014], $A = Fh[38] + Fh[1472] + Fh[1] + Fh[1469] + Fh[217] + Fh[1014], FA = Fh[64] + Fh[1529] + Fh[217] + Fh[1014], AA = Fh[114] + Fh[1501] + Fh[217] + Fh[1014], NA = Fh[100] + Fh[1530] + Fh[72] + Fh[640] + Fh[217] + Fh[1014], zA = Fh[44] + Fh[981] + Fh[217] + Fh[1014], BA = Fh[25] + Fh[1531], DA = Fh[3] + Fh[134] + Fh[212], qA = Fh[1532], RA = Fh[1533], LA = Fh[1534], GA = Fh[493], YA = Fh[939] + Fh[18] + Fh[1535], HA = Fh[3] + Fh[25] + Fh[355] + Fh[100] + Fh[1536], XA = Fh[1003] + Fh[25] + Fh[1537], WA = Fh[1538] + Fh[81] + Fh[385], VA = Fh[1538] + Fh[81] + Fh[384], UA = Fh[1538] + Fh[81] + Fh[508], QA = Fh[1538] + Fh[81] + Fh[387], JA = Fh[1538] + Fh[81] + Fh[386], ZA = Fh[1538] + Fh[81] + Fh[507], KA = Fh[1539], tN = Fh[1540] + Fh[83] + Fh[1541], iN = Fh[1539] + Fh[83] + Fh[586], nN = Fh[1539] + Fh[83] + Fh[1144], eN = Fh[937] + Fh[81] + Fh[363] + Fh[81] + Fh[1542], sN = Fh[937] + Fh[81] + Fh[363] + Fh[81] + Fh[1542] + Fh[81] + Fh[381], hN = Fh[937] + Fh[81] + Fh[363] + Fh[81] + Fh[1542] + Fh[81] + Fh[383], rN = Fh[937] + Fh[81] + Fh[363] + Fh[81] + Fh[1543] + Fh[81] + Fh[1544], fN = Fh[34] + Fh[436] + Fh[1545] + Fh[38] + Fh[1546], aN = Fh[68] + Fh[72] + Fh[200], _N = Fh[3] + Fh[23] + Fh[241] + Fh[72] + Fh[200], cN = Fh[318] + Fh[1] + Fh[2] + Fh[38] + Fh[1546], uN = Fh[586] + Fh[277] + Fh[733], oN = Fh[1144] + Fh[277] + Fh[733], dN = Fh[262] + Fh[114] + Fh[299], lN = Fh[1547], bN = Fh[1548], vN = Fh[924] + Fh[25] + Fh[355], yN = Fh[318] + Fh[47] + Fh[212], xN = Fh[81] + Fh[1549] + Fh[315], gN = Fh[81] + Fh[1550], mN = Fh[267] + Fh[1551], wN = Fh[267] + Fh[1086], kN = Fh[493] + Fh[120], pN = Fh[493] + Fh[121], jN = Fh[262] + Fh[100] + Fh[983], MN = Fh[262] + Fh[38] + Fh[403], EN = Fh[269] + Fh[25] + Fh[355] + Fh[38] + Fh[403], SN = Fh[1552], PN = Fh[43], IN = Fh[1553] + Fh[25] + Fh[355] + Fh[38] + Fh[403], CN = Fh[3] + Fh[131] + Fh[1554] + Fh[217] + Fh[1555], TN = Fh[493] + Fh[1] + Fh[327], ON = Fh[356] + Fh[1] + Fh[327], $N = Fh[1556], FN = Fh[1557], AN = Fh[141] + Fh[72] + Fh[1020], NN = Fh[34] + Fh[100] + Fh[1558], zN = Fh[952], BN = Fh[1034] + Fh[18] + Fh[1559], DN = Fh[47] + Fh[1560] + Fh[25] + Fh[1531], qN = Fh[1561], RN = Fh[1562], LN = Fh[243], GN = Fh[1563], YN = Fh[1564] + Fh[81] + Fh[1565] + Fh[81] + Fh[1566], HN = Fh[1564] + Fh[81] + Fh[1565] + Fh[81] + Fh[1567], XN = Fh[394] + Fh[81] + Fh[250] + Fh[81] + Fh[1568], WN = Fh[394] + Fh[81] + Fh[250] + Fh[81] + Fh[1569], VN = Fh[3] + Fh[277] + Fh[733], UN = Fh[1570], QN = Fh[406] + Fh[72] + Fh[1571], JN = Fh[3] + Fh[100] + Fh[280], ZN = Fh[509] + Fh[131] + Fh[241], KN = Fh[493] + Fh[315], tz = Fh[493] + Fh[89], iz = Fh[375] + Fh[81] + Fh[949] + Fh[81] + Fh[912], nz = Fh[1572], ez = Fh[569] + Fh[217] + Fh[1573], sz = Fh[1574], hz = Fh[1575], rz = Fh[1575] + Fh[120], fz = Fh[1575] + Fh[121], az = Fh[34] + Fh[217] + Fh[1576], _z = Fh[1553], cz = Fh[913] + Fh[81] + Fh[379], uz = Fh[1577], oz = Fh[1578], dz = Fh[262] + Fh[131] + Fh[1579], lz = Fh[262] + Fh[64] + Fh[1580], bz = Fh[1556] + Fh[18] + Fh[35], vz = Fh[1581], yz = Fh[1003], xz = Fh[209] + Fh[64] + Fh[477], gz = Fh[472] + Fh[64] + Fh[477], mz = Fh[72] + Fh[1582] + Fh[25] + Fh[1531], wz = Fh[512] + Fh[25] + Fh[1537], kz = Fh[0] + Fh[217] + Fh[218] + Fh[64] + Fh[320], pz = Fh[296] + Fh[64] + Fh[297] + Fh[47] + Fh[130] + Fh[114] + Fh[1583] + Fh[38] + Fh[995] + Fh[20] + Fh[996] + Fh[72] + Fh[1584], jz = Fh[296] + Fh[64] + Fh[297] + Fh[47] + Fh[130] + Fh[114] + Fh[1583] + Fh[47] + Fh[1585] + Fh[20] + Fh[996] + Fh[72] + Fh[1584], Mz = Fh[55] + Fh[1] + Fh[706], Ez = Fh[34] + Fh[1586], Sz = Fh[34] + Fh[15] + Fh[1587], Pz = Fh[34] + Fh[225] + Fh[1588], Iz = Fh[34] + Fh[277] + Fh[1589], Cz = Fh[34] + Fh[20] + Fh[1590], Tz = Fh[34] + Fh[72] + Fh[1591], Oz = Fh[34] + Fh[1] + Fh[1592], $z = Fh[34] + Fh[131] + Fh[1593], Fz = Fh[38] + Fh[39] + Fh[72] + Fh[897], Az = Fh[38] + Fh[1594], Nz = Fh[1] + Fh[1595], zz = Fh[277] + Fh[1596], Bz = Fh[277] + Fh[371], Dz = Fh[47] + Fh[107] + Fh[133], qz = Fh[64] + Fh[129] + Fh[133], Rz = Fh[23] + Fh[241] + Fh[133], Lz = Fh[25] + Fh[967] + Fh[133], Gz = Fh[217] + Fh[222] + Fh[133], Yz = Fh[72] + Fh[1597], Hz = Fh[44] + Fh[227], Xz = Fh[217] + Fh[1014] + Fh[64] + Fh[65], Wz = Fh[277] + Fh[371] + Fh[131] + Fh[440], Vz = Fh[64] + Fh[320] + Fh[47] + Fh[321], Uz = Fh[114] + Fh[1598] + Fh[25] + Fh[1531], Qz = Fh[370] + Fh[1599] + Fh[29] + Fh[296] + Fh[29] + Fh[882] + Fh[350], Jz = Fh[315] + Fh[83] + Fh[232], Zz = Fh[370] + Fh[1599] + Fh[248] + Fh[38] + Fh[1600] + Fh[29] + Fh[1] + Fh[1601] + Fh[29] + Fh[296] + Fh[29] + Fh[882] + Fh[350] + Fh[450] + Fh[1] + Fh[452], Kz = Fh[1134] + Fh[1451], tB = Fh[1602] + Fh[450] + Fh[315] + Fh[450] + Fh[1603], iB = 0;
    if (t[Ud]) {
        var nB = navigator[Qd], eB = /opera/i[Ka](nB), sB = !eB && /msie/i[Ka](nB), hB = /rv:11.0/i[Ka](nB);
        if (hB && (sB = !0), /msie\s[6,7,8]/i[Ka](nB))
            throw new Error("your browser is not supported");
        var rB = /webkit|khtml/i[Ka](nB), fB = !rB && /gecko/i[Ka](nB), aB = /firefox\//i[Ka](nB), _B = /Chrome\//i[Ka](nB), cB = !_B && /Safari\//i[Ka](nB), uB = /Macintosh;/i[Ka](nB), oB = i[$d].hasOwnProperty(Do), dB = /(iPad|iPhone|iPod)/g[Ka](nB), lB = /Android/g[Ka](nB), bB = nB[Fo](/AppleWebKit\/([0-9\.]*)/);
        if (bB && bB[zh] > 1)
            var vB = parseFloat(bB[1]);
        if (lB && (parseFloat(nB[Fo](/Android\s([0-9\.]*)/)[1]), vB && 534.3 >= vB))
            var yB = !0
    }
    t[Vh] || (t[Vh] = t[Jd] || t[Zd] || t[Kd] || t[tl] || function(i) {
        return t[il](function() {
            i()
        }, 1e3 / 60)
    }), t[nl] || (t[nl] = t[el] || t[sl] || t[hl] || t[rl] || function(i) {
        return t[fl](i)
    });
    var xB = {SELECTION_TOLERANCE: 2,DOUBLE_BUFFER: n,LABEL_COLOR: al};
    J(xB, {FONT_STYLE: {get: function() {
                return this._ee || (this._ee = _l)
            },set: function(t) {
                this._ee != t && (this._ee = t, this._fontChanged = !0)
            }},FONT_SIZE: {get: function() {
                return this._gx || (this._gx = 12)
            },set: function(t) {
                this._gx != t && (this._gx = t, this._fontChanged = !0)
            }},FONT_FAMILY: {get: function() {
                return this._da || (this._da = "Verdana,helvetica,arial,sans-serif")
            },set: function(t) {
                this._da != t && (this._da = t, this._fontChanged = !0)
            }},FONT: {get: function() {
                return (this._fontChanged || this._fontChanged === n) && (this._fontChanged = !1, this._font = this[cl] + tr + this[ul] + ol + this[dl]), this._font
            }}});
    var gB = function() {
    };
    gB[br] = {_mz: 0,_n1: 0,_ke: !0,_kk: 1,_fu: function(t, i, n) {
            var e = this._nb7(i), s = this._n8s(n), h = t * e, r = t * s;
            return this._9m(t, i - h, n - r)
        },_nb7: function(t) {
            return (t - this._mz) / this._kk
        },_n8s: function(t) {
            return (t - this._n1) / this._kk
        },_e4: function(t, i) {
            return this._9m(this._kk, this._mz + t, this._n1 + i)
        },_9m: function(t, i, n) {
            return this._kk == t && this._mz == i && this._n1 == n ? !1 : (this._ke && (1 != this[ca] || 2 != this[ca] ? (i = Math[Aa](i * this[ca]) / this[ca], n = Math[Aa](n * this[ca]) / this[ca]) : (i = Math[Aa](i), n = Math[Aa](n))), this._mz = i, this._n1 = n, this._kk = t, void (this._32 && this._32()))
        },_h2: function() {
            return {a: this._kk,b: 0,c: 0,d: this._kk,e: this._mz,f: this._n1}
        },toString: function() {
            return ll + D(this._kk) + bl + D(this._kk) + Or + D(this._mz) + Or + D(this._n1) + $r
        },_ha: function(t) {
            di(t, Lo, this.toString())
        }};
    var mB = function(t) {
        this._j0 = [], this._lu = {}, t && this[ir](t)
    };
    mB[br] = {_j0: null,_lu: null,get: function(t) {
            return this[vl](t)
        },getById: function(t) {
            return this._lu[t]
        },getByIndex: function(t) {
            return this._j0[t]
        },forEach: function(t, i, n) {
            return l(this._j0, t, i, n)
        },forEachReverse: function(t, i, n) {
            return v(this._j0, t, i, n)
        },size: function() {
            return this._j0[zh]
        },contains: function(t) {
            return this[Cc](t.id)
        },containsById: function(t) {
            return this._lu.hasOwnProperty(t)
        },setIndex: function(t, i) {
            var n = this._j0[Wh](t);
            if (0 > n)
                throw new Error(Xf + t.id + yl);
            return n == i ? !1 : (this._j0[Rh](n, 1), this._j0[Rh](i, 0, t), !0)
        },setIndexAfter: function(t, i) {
            var n = this._j0[Wh](t);
            if (0 > n)
                throw new Error(Xf + t.id + yl);
            return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._j0[Rh](n, 1), this._j0[Rh](i, 0, t), i)
        },setIndexBefore: function(t, i) {
            var n = this._j0[Wh](t);
            if (0 > n)
                throw new Error(Xf + t.id + yl);
            return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j0[Rh](n, 1), this._j0[Rh](i, 0, t), i)
        },indexOf: function(t) {
            return this._j0[Wh](t)
        },getIndexById: function(t) {
            var i = this[xl](t);
            return i ? this._j0[Wh](i) : -1
        },add: function(t, i) {
            return I(t) ? this._fq(t, i) : this._kx(t, i)
        },addFirst: function(t) {
            return this[ir](t, 0)
        },_fq: function(t, i) {
            if (0 == t[zh])
                return !1;
            var e = !1, s = i >= 0;
            t = t._j0 || t;
            for (var h = 0, r = t[zh]; r > h; h++) {
                var f = t[h];
                null !== f && f !== n && this._kx(f, i, !0) && (e = !0, s && i++)
            }
            return e
        },_kx: function(t, i) {
            var e = t.id;
            return e === n || this[Cc](e) ? !1 : (x(this._j0, t, i), this._lu[e] = t, t)
        },remove: function(t) {
            return I(t) ? this._nak(t) : t.id ? this._fb(t.id, t) : this[gl](t)
        },_nak: function(t) {
            if (0 == t[zh])
                return !1;
            var i = !1;
            t = t._j0 || t;
            for (var e = 0, s = t[zh]; s > e; e++) {
                var h = t[e];
                if (null !== h && h !== n) {
                    h.id === n && (h = this._lu[h]);
                    var r = h.id;
                    this._fb(r, h, !0) && (i = !0)
                }
            }
            return i
        },_fb: function(t, i) {
            return t !== n && this[Cc](t) ? ((null === i || i === n) && (i = this[xl](t)), delete this._lu[t], g(this._j0, i), !0) : !1
        },removeById: function(t) {
            var i = this._lu[t];
            return i ? this._fb(t, i) : !1
        },set: function(t) {
            if (!t || 0 == t)
                return void this[Pf]();
            if (this[H_]() || !I(t))
                return this[Pf](), this[ir](t);
            var i = [], n = {}, e = 0;
            if (l(t, function(t) {
                this._lu[t.id] ? (n[t.id] = t, e++) : i[Xh](t)
            }, this), e != this[zh]) {
                var s = [];
                this[uc](function(t) {
                    n[t.id] || s[Xh](t)
                }, this), s[zh] && this._nak(s)
            }
            return i[zh] && this._fq(i), !0
        },clear: function() {
            return this[H_]() ? !1 : (this._j0[zh] = 0, this._lu = {}, !0)
        },toDatas: function() {
            return this._j0[qh](0)
        },isEmpty: function() {
            return 0 == this._j0[zh]
        },valueOf: function() {
            return this._j0[zh]
        },clone: function(t) {
            var i = new mB;
            return i[ir](t ? y(this._j0) : this[mo]()), i
        }}, J(mB[br], {datas: {get: function() {
                return this._j0
            }},random: {get: function() {
                return this._j0 && this._j0[zh] ? this._j0[$(this._j0[zh])] : null
            }},length: {get: function() {
                return this._j0 ? this._j0[zh] : 0
            }}});
    var wB = (2 * Math.PI, .5 * Math.PI), kB = function(t, i) {
        i = i[ef]();
        for (var n = sB ? t[ml] : t[wl]; n && (1 != n[kl] || n[pl] && n[pl][ef]() != i); )
            n = sB ? n[jl] : n[Ml];
        return n && 1 == n[kl] && n[pl] && n[pl][ef]() == i ? n : null
    }, pB = function(t, i, n) {
        t instanceof pB && (i = t.y, t = t.x, n = t[Xa]), this[pr](t, i, n)
    }, jB = function(t, i, n, e) {
        var s = t - n, h = i - e;
        return Math[Pa](s * s + h * h)
    };
    pB[br] = {x: 0,y: 0,rotate: n,set: function(t, i, n) {
            this.x = t || 0, this.y = i || 0, this[Xa] = n || 0
        },negate: function() {
            this.x = -this.x, this.y = -this.y
        },offset: function(t, i) {
            this.x += t, this.y += i
        },equals: function(t) {
            return this.x == t.x && this.y == t.y
        },distanceTo: function(t) {
            return jB(this.x, this.y, t.x, t.y)
        },toString: function() {
            return El + this.x + Sl + this.y + $r
        },clone: function() {
            return new pB(this.x, this.y)
        }}, Object[mr](pB[br], Pl, {get: function() {
            return Math[Pa](this.x * this.x + this.y * this.y)
        }});
    var MB = function(t, i, e, s) {
        t !== n && this._mr(t, i, e, s)
    };
    MB[br] = {_n3: null,_n5: null,_n7: null,_n6: null,_na: null,_n8: null,_nb: 1,_mr: function(t, i, n, e) {
            this._n3 = t, this._n5 = i, this._n7 = n, this._n6 = e, t == n ? (this._na = -1, this._nb = 0, this._n8 = t) : (this._na = (i - e) / (t - n), this._n8 = i - this._na * t, this._nb = 1), this._ld = Math[Yr](this._n6 - this._n5, this._n7 - this._n3), this._nbos = Math[Hr](this._ld), this._sin = Math[Xr](this._ld)
        },_n8o: function(t) {
            return 0 == this._nb ? Number[Il] : this._na * t + this._n8
        },_n8l: function(t) {
            return 0 == this._na ? Number[Il] : (t - this._n8) / this._na
        },_$g: function(t) {
            var i, n, e, s, h, r = t[0], f = t[2], a = t[4], _ = t[1], c = t[3], u = t[5], o = this._na, d = this._n8, l = this._nb;
            if (0 == l ? (e = Math[Pa]((-o * o * r - o * d) * a + o * o * f * f + 2 * o * d * f - o * d * r), s = -o * f + o * r, h = o * a - 2 * o * f + o * r) : (e = Math[Pa]((-_ + o * r + d) * u + c * c + (-2 * o * f - 2 * d) * c + (o * a + d) * _ + (-o * o * r - o * d) * a + o * o * f * f + 2 * o * d * f - o * d * r), s = -c + _ + o * f - o * r, h = u - 2 * c + _ - o * a + 2 * o * f - o * r), 0 != h) {
                i = (e + s) / h, n = (-e + s) / h;
                var b, v;
                return i >= 0 && 1 >= i && (b = Gi(i, t)), n >= 0 && 1 >= n && (v = Gi(n, t)), b && v ? [b, v] : b ? b : v ? v : void 0
            }
        },_3l: function(t, i, n) {
            if (this._na == t._na || 0 == this._nb && 0 == t._nb)
                return null;
            var e, s;
            if (e = 0 == this._nb ? this._n8 : 0 == t._nb ? t._n8 : (t._n8 - this._n8) / (this._na - t._na), s = 0 == this._na ? this._n8 : 0 == t._na ? t._n8 : this._nb ? this._na * e + this._n8 : t._na * e + t._n8, !i)
                return {x: e,y: s};
            var h, r, f;
            if (n)
                h = -i / 2, r = -h;
            else {
                h = -jB(this._n3, this._n5, e, s), r = jB(this._n7, this._n6, e, s);
                var a = -h + r;
                if (a > i) {
                    var _ = i / a;
                    h *= _, r *= _
                } else
                    f = (i - a) / 2
            }
            var c = this._74(e, s, h), u = this._74(e, s, r);
            return f && (c._rest = f, u._rest = f), [c, u]
        },_74: function(t, i, n) {
            return 0 == this._nb ? {x: t,y: i + n} : {x: t + n * this._nbos,y: i + n * this._sin}
        }};
    var EB = function(t, i) {
        this[fa] = t, this[aa] = i
    };
    EB[br] = {width: 0,height: 0,isEmpty: function() {
            return this[fa] <= 0 || this[aa] <= 0
        },clone: function() {
            return new EB(this[fa], this[aa])
        },toString: function() {
            return Cl + this[fa] + Sl + this[aa] + $r
        }};
    var SB = function(t, i, e, s) {
        e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[fa] = e, this[aa] = s
    };
    SB[br] = {x: 0,y: 0,width: -1,height: -1,setByRect: function(t) {
            this.x = t.x || 0, this.y = t.y || 0, this[fa] = t[fa] || 0, this[aa] = t[aa] || 0
        },set: function(t, i, n, e) {
            this.x = t || 0, this.y = i || 0, this[fa] = n || 0, this[aa] = e || 0
        },offset: function(t, i) {
            this.x += t, this.y += i
        },contains: function(t, i) {
            return t instanceof SB ? fi(this.x, this.y, this[fa], this[aa], t.x, t.y, t[fa], t[aa]) : t >= this.x && t <= this.x + this[fa] && i >= this.y && i <= this.y + this[aa]
        },intersectsPoint: function(t, i, n) {
            return this[fa] <= 0 && this[aa] <= 0 ? !1 : n ? this[Tl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this[fa] && i >= this.y && i <= this.y + this[aa]
        },intersectsRect: function(t, i, n, e) {
            return hi(this.x, this.y, this[fa], this[aa], t, i, n, e)
        },intersects: function(t, i) {
            return t instanceof SB ? this[Tl](t.x, t.y, t[fa], t[aa]) : this[Fa](t, i)
        },intersection: function(t, i, n, e) {
            var s = this.x, h = this.y, r = s;
            r += this[fa];
            var f = h;
            f += this[aa];
            var a = t;
            a += n;
            var _ = i;
            return _ += e, t > s && (s = t), i > h && (h = i), r > a && (r = a), f > _ && (f = _), r -= s, f -= h, 0 > r || 0 > f ? null : new SB(s, h, r, f)
        },addPoint: function(t) {
            this[ir](t.x, t.y)
        },add: function(t, i) {
            if (t instanceof SB)
                return this[Ol](t.x, t.y, t[fa], t[aa]);
            if (t instanceof pB && (i = t.y, t = t.x), this[fa] < 0 || this[aa] < 0)
                return this.x = t, this.y = i, void (this[fa] = this[aa] = 0);
            var n = this.x, e = this.y, s = this[fa], h = this[aa];
            s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number[$l] && (s = Number[$l]), h > Number[$l] && (h = Number[$l]), this[pr](n, e, s, h)
        },addRect: function(t, i, n, e) {
            var s = this[fa], h = this[aa];
            (0 > s || 0 > h) && this[pr](t, i, n, e);
            var r = n, f = e;
            if (!(0 > r || 0 > f)) {
                var a = this.x, _ = this.y;
                s += a, h += _;
                var c = t, u = i;
                r += c, f += u, a > c && (a = c), _ > u && (_ = u), r > s && (s = r), f > h && (h = f), s -= a, h -= _, s > Number[$l] && (s = Number[$l]), h > Number[$l] && (h = Number[$l]), this[pr](a, _, s, h)
            }
        },grow: function(t, i, n, e) {
            return E(t) ? 1 == arguments[zh] ? e = i = n = t || 0 : 2 == arguments[zh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[yf] || 0, n = t[Wr] || 0, e = t[Vr] || 0, t = t[xf] || 0), this.x -= i, this.y -= t, this[fa] += i + e, this[aa] += t + n, this
        },isEmpty: function() {
            return this[fa] <= 0 && this[aa] <= 0
        },toString: function() {
            return this.x + Fl + this.y + Fl + this[fa] + Fl + this[aa]
        },union: function(t) {
            var i = this[fa], n = this[aa];
            if (0 > i || 0 > n)
                return new SB(t.x, t.y, t[fa], t[aa]);
            var e = t[fa], s = t[aa];
            if (0 > e || 0 > s)
                return new SB(this.x, this.y, this[fa], this[aa]);
            var h = this.x, r = this.y;
            i += h, n += r;
            var f = t.x, a = t.y;
            return e += f, s += a, h > f && (h = f), r > a && (r = a), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number[$l] && (i = Number[$l]), n > Number[$l] && (n = Number[$l]), new SB(h, r, i, n)
        },clear: function() {
            this[pr](0, 0, -1, -1)
        },equals: function(t) {
            return this.x == t.x && this.y == t.y && this[fa] == t[fa] && this[aa] == t[aa]
        },clone: function(t, i) {
            return new SB(this.x + (t || 0), this.y + (i || 0), this[fa], this[aa])
        },getIntersectionPoint: function(t, i, n, e) {
            return si(this, t, i, n, e)
        }}, N(SB, EB), J(SB[br], {bottom: {get: function() {
                return this.y + this[aa]
            }},right: {get: function() {
                return this.x + this[fa]
            }},cx: {get: function() {
                return this.x + this[fa] / 2
            }},cy: {get: function() {
                return this.y + this[aa] / 2
            }},center: {get: function() {
                return new pB(this.cx, this.cy)
            }}});
    var PB = function(t, i, n, e) {
        1 == arguments[zh] ? i = n = e = t : 2 == arguments[zh] && (n = t, e = i), this[pr](t, i, n, e)
    };
    PB[br] = {top: 0,bottom: 0,left: 0,right: 0,set: function(t, i, n, e) {
            this[xf] = t || 0, this[yf] = i || 0, this[Wr] = n || 0, this[Vr] = e || 0
        },clone: function() {
            return new PB(this[xf], this[yf], this[Wr], this[Vr])
        },equals: function(t) {
            return t && this[xf] == t[xf] && this[Wr] == t[Wr] && this[yf] == t[yf] && this[Vr] == t[Vr]
        }};
    var IB = function(t, i) {
        this[Qr] = t, this[Jr] = i
    };
    IB[br] = {verticalPosition: !1,horizontalPosition: !1,toString: function() {
            return (this[Qr] || "") + (this[Jr] || "")
        }}, Q(IB[br], Al, {get: function() {
            return (this[Qr] || "") + (this[Jr] || "")
        }});
    var CB = Nl, TB = zl, OB = Bl, $B = Mc, FB = Dl, AB = ql;
    IB[Rl] = new IB(CB, $B), IB[Ll] = new IB(CB, FB), IB[Gl] = new IB(CB, AB), IB[Yl] = new IB(TB, $B), IB[Hl] = new IB(TB, FB), IB[Xl] = new IB(TB, AB), IB[Wl] = new IB(OB, $B), IB[Vl] = new IB(OB, FB), IB[Ul] = new IB(OB, AB);
    var NB = [IB[Rl], IB[Ll], IB[Gl], IB[Yl], IB[Hl], IB[Xl], IB[Wl], IB[Vl], IB[Ul]];
    Q(IB, or, {get: function() {
            return NB[$(NB[zh])]
        }});
    var zB = function(t, i, n, e, s) {
        this[pr](t, i, n, e), this[Ql] = s
    };
    zB[br] = {radius: 0,classify: function(t, i, n, e) {
            return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
        },intersectsRect: function(t, i, n, e) {
            if (B(this, zB, Tl, arguments) === !1)
                return !1;
            var s = this.x, h = this.y, r = s + this[fa], f = h + this[aa], a = 2 * radius, _ = 2 * radius, c = Math[Ia](this[fa], Math[Ur](a)) / 2, u = Math[Ia](this[aa], Math[Ur](_)) / 2, o = this[Jl](t, s, r, c), d = this[Jl](t + n, s, r, c), l = this[Jl](i, h, f, u), b = this[Jl](i + e, h, f, u);
            return 2 == o || 2 == d || 2 == l || 2 == b ? !0 : 2 > o && d > 2 || 2 > l && b > 2 ? !0 : (t = 1 == d ? t = t + n - (s + c) : t -= r - c, i = 1 == b ? i = i + e - (h + u) : i -= f - u, t /= c, i /= u, 1 >= t * t + i * i)
        },intersectsPoint: function(t, i) {
            if (B(this, zB, Fa, arguments) === !1)
                return !1;
            var n = this.x, e = this.y, s = n + this[fa], h = e + this[aa];
            if (n > t || e > i || t >= s || i >= h)
                return !1;
            var r = 2 * radius, f = 2 * radius, a = Math[Ia](this[fa], Math[Ur](r)) / 2, _ = Math[Ia](this[aa], Math[Ur](f)) / 2;
            return t >= (n += a) && t < (n = s - a) ? !0 : i >= (e += _) && i < (e = h - _) ? !0 : (t = (t - n) / a, i = (i - e) / _, 1 >= t * t + i * i)
        },clone: function() {
            return new zB(this.x, this.y, this[fa], this[aa], this[Ql])
        }}, N(zB, SB);
    var BB = function(t, i, n, e) {
        this[r_] = t, this[Ha] = i, this[Nd] = n, this[Pr] = e
    };
    BB[br] = {source: null,type: null,kind: null,value: null,toString: function() {
            return Zl + this[r_] + Kl + this[Ha] + tb + this[Nd]
        }};
    var DB = function(t, i, n, e) {
        this[r_] = t, this[Nd] = i, this[ib] = e, this[Pr] = n
    };
    DB[br] = {type: nb,propertyType: null,toString: function() {
            return Zl + this[r_] + Kl + this[Ha] + eb + this[Nd] + sb + this[ib] + hb + this[Pr]
        }}, N(DB, BB), Q(DB[br], rb, {get: function() {
            return this[Nd]
        },set: function(t) {
            this[Nd] = t
        }});
    var qB = function(t, i, n) {
        this[r_] = t, this[ib] = t[Tc], this[Pr] = i, this[fb] = n, this[ib] && (this[ab] = this[ib][_b](t))
    };
    qB[br] = {kind: Tc}, N(qB, DB);
    var RB = function(t, i) {
        this[r_] = t, this[Pr] = i
    };
    RB[br][Nd] = cb, N(RB, DB);
    var LB = function(t, i) {
        this[r_] = t, this[Pr] = i
    };
    LB[br][Nd] = ub, N(LB, DB);
    var GB = function(t, i, n, e) {
        this[r_] = i, this[ib] = n, this[Pr] = e, this[Tc] = t, this[ob] = i, this[ab] = n, this[fb] = e
    };
    GB[br][Nd] = db, N(GB, DB);
    var YB = function() {
    };
    YB[br] = {listener: null,beforeEvent: function(t) {
            return null != this[lb] && this[lb][jr] ? this[lb][jr](t) : !0
        },onEvent: function(t) {
            null != this[lb] && this[lb][Mr] && this[lb][Mr](t)
        }};
    var HB = function() {
        z(this, HB, arguments), this[bb] = {}, this[vb] = []
    }, XB = function(t, i) {
        this[lb] = t, this[xr] = i, t instanceof Function ? this[Mr] = t : (this[Mr] = t[Mr], this[jr] = t[jr]), this[yb] = function(t) {
            return t && this[lb] == t[lb] && this[xr] == t[xr]
        }
    };
    XB[br] = {equals: function(t) {
            return t && this[lb] == t[lb] && this[xr] == t[xr]
        },destroy: function() {
            delete this[xr], delete this[lb]
        }}, HB[br] = {listeners: null,_n8g: function() {
            return this[vb] && this[vb][zh] > 0
        },_7g: function(t, i) {
            return t instanceof HB ? t : new XB(t, i)
        },_99: function(t, i) {
            if (t instanceof HB)
                return this[vb][Wh](t);
            for (var n = this[vb], e = 0, s = n[zh]; s > e; e++) {
                var h = n[e];
                if (h[lb] == t && h[xr] == i)
                    return e
            }
            return -1
        },contains: function(t, i) {
            return this._99(t, i) >= 0
        },addListener: function(t, i) {
            return this[Io](t, i) ? !1 : void this[vb][Xh](this._7g(t, i))
        },removeListener: function(t, i, n) {
            var e = this._99(t, i);
            if (e >= 0) {
                var s = this[vb][Rh](e, 1)[0];
                n || q(s)
            }
        },on: function(t, i) {
            this[Bd](t, i)
        },un: function(t, i, n) {
            this[xb](t, i, n)
        },onEvent: function(t) {
            return this[vb] ? void l(this[vb], function(i) {
                i[Mr] && (i[xr] ? i[Mr][Bh](i[xr], t) : i[Mr](t))
            }, this) : !1
        },beforeEvent: function(t) {
            return this[vb] ? l(this[vb], function(i) {
                return i[jr] ? i[xr] ? i[jr][Bh](i[xr], t) : i[jr](t) : !0
            }, this) : !0
        },_eh: function(t) {
            return this[jr](t) === !1 ? !1 : (this[Mr](t), !0)
        },clear: function() {
            this[vb] = []
        },destroy: function() {
            this[Pf]()
        }}, N(HB, YB);
    var WB = {onEvent: function() {
        },beforeEvent: function() {
        }}, VB = function(t, i, n, e, s) {
        this[r_] = t, this[Ha] = gb, this[Nd] = i, this[Ra] = n, this[mb] = e, this[ab] = s
    };
    VB[br] = {index: -1,oldIndex: -1,toString: function() {
            return Zl + this[r_] + Kl + this[Ha] + tb + this[Nd] + wb + this[Ra] + kb + this[mb] + pb + this[ab]
        }}, N(VB, BB), VB[jb] = ir, VB[Mb] = Yh, VB[Eb] = Pf, VB[Sb] = Pb;
    var UB = function() {
        this.id = ++iB, this._nb2 = {}
    };
    UB[br] = {_nb2: null,id: null,get: function(t) {
            return this._nb2[t]
        },set: function(t, i) {
            var n = this[kr](t);
            if (n === i)
                return !1;
            var e = new DB(this, t, i, n);
            return e[Ib] = pD[Fu], this._na5(t, i, e, this._nb2)
        },_na5: function(t, i, e, s) {
            return this[jr](e) === !1 ? !1 : (s || (s = this._nb2), i === n ? delete s[t] : s[t] = i, this[Mr](e), !0)
        },remove: function(t) {
            this[pr](t, null)
        },valueOf: function() {
            return this.id
        },toString: function() {
            return this.id
        },_dp: function(t, i) {
            if (i === n && (i = -1), this == t || t == this._jd)
                return !1;
            if (t && this == t._jd && !t._dp(null))
                return !1;
            var e = new qB(this, t, i);
            if (!this[jr](e))
                return !1;
            var s, h, r = this._jd;
            return t && (s = new RB(t, this), !t[jr](s)) ? !1 : null == r || (h = new LB(r, this), r[jr](h)) ? (this._jd = t, null != t && _i(t, this, i), null != r && ci(r, this), this[Mr](e), null != t && t[Mr](s), null != r && r[Mr](h), this[Cb](r, t), !0) : !1
        },addChild: function(t, i) {
            var n = t._dp(this, i);
            return n && this[Zr](t, i), n
        },onChildAdd: function() {
        },removeChild: function(t) {
            if (!this._f5 || !this._f5[Io](t))
                return !1;
            var i = t._dp(null);
            return this[Kr](t), i
        },onChildRemove: function() {
        },toChildren: function() {
            return this._f5 ? this._f5[mo]() : null
        },clearChildren: function() {
            if (this._f5 && this._f5[zh]) {
                var t = this[Tb]();
                l(t, function(t) {
                    t._dp(null)
                }, this), this[Ob](t)
            }
        },forEachChild: function(t, i) {
            return this[Ah]() ? this._f5[uc](t, i) : !1
        },onChildrenClear: function() {
        },getChildIndex: function(t) {
            return this._f5 && this._f5[zh] ? this._f5[Wh](t) : -1
        },setChildIndex: function(t, i) {
            if (!this._f5 || !this._f5[zh])
                return !1;
            var n = this._f5[Wh](t);
            if (0 > n || n == i)
                return !1;
            var e = new GB(this, t, n, i);
            return this[jr](e) === !1 ? !1 : (this._f5[Yh](t) && this._f5[ir](t, i), this[Mr](e), !0)
        },hasChildren: function() {
            return this._f5 && this._f5[zh] > 0
        },getChildAt: function(t) {
            return null == this._f5 ? null : this._f5._j0[t]
        },isDescendantOf: function(t) {
            if (!t[Ah]())
                return !1;
            for (var i = this[Tc]; null != i; ) {
                if (t == i)
                    return !0;
                i = i[Tc]
            }
            return !1
        },onParentChanged: function() {
        }}, N(UB, YB), J(UB[br], {childrenCount: {get: function() {
                return this._f5 ? this._f5[zh] : 0
            }},children: {get: function() {
                return this._f5 || (this._f5 = new mB), this._f5
            }},parent: {get: function() {
                return this._jd
            },set: function(t) {
                this._dp(t, -1)
            }},properties: {get: function() {
                return this._nb2
            },set: function(t) {
                this._nb2 != t && (this._nb2 = t)
            }}});
    var QB = function() {
        this._j0 = [], this._lu = {}, this._1k = new HB
    };
    QB[br] = {beforeEvent: function(t) {
            return null != this._1k && this._1k[jr] ? this._1k[jr](t) : !0
        },onEvent: function(t) {
            return this._1k instanceof Function ? void this._1k(t) : void (null != this._1k && this._1k[Mr] && this._1k[Mr](t))
        },_1k: null,setIndex: function(t, i) {
            if (!this[Io](t))
                throw new Error(Xf + t[$b]() + yl);
            var n = this[Wh](t);
            if (n == i)
                return !1;
            var e = new VB(this, VB[Sb], t, i, n);
            return this[jr](e) === !1 ? !1 : (this._j0[Yh](t) >= 0 && this._j0[ir](i, t), this[Mr](e), !0)
        },_fq: function(t, i) {
            if (0 == t[zh])
                return !1;
            var e = !1, s = i >= 0, h = new VB(this, VB[jb], t, i);
            if (this[jr](h) === !1)
                return !1;
            var r = [];
            t = t._j0 || t;
            for (var f = 0, a = t[zh]; a > f; f++) {
                var _ = t[f];
                null !== _ && _ !== n && this._kx(_, i, !0) && (r[Xh](_), e = !0, s && i++)
            }
            return h[Ra] = r, this[Mr](h), e
        },_kx: function(t, i, n) {
            if (this[qc](t) === !1)
                return !1;
            if (n)
                return B(this, QB, Fb, arguments);
            var e = new VB(this, VB[jb], t, i);
            return this[jr](e) === !1 ? !1 : B(this, QB, Fb, arguments) ? (this._km(t, e), t) : !1
        },_km: function(t, i) {
            this[Mr](i)
        },_nak: function(t) {
            if (0 == t[zh])
                return !1;
            var i = new VB(this, VB[Mb], t);
            if (this[jr](i) === !1)
                return !1;
            var e = [], s = !1;
            t = t._j0 || t;
            for (var h = 0, r = t[zh]; r > h; h++) {
                var f = t[h];
                if (null !== f && f !== n) {
                    var a = f.id || f;
                    f.id === n && (f = null), this._fb(a, f, !0) && (e[Xh](f), s = !0)
                }
            }
            return i[Ra] = e, this[Mr](i), s
        },_fb: function(t, i, n) {
            if (n)
                return B(this, QB, Ab, arguments);
            var e = new VB(this, VB[Mb], i);
            return this[jr](e) === !1 ? !1 : B(this, QB, Ab, arguments) ? (this[Mr](e), !0) : !1
        },clear: function() {
            if (this[H_]())
                return !1;
            var t = new VB(this, VB[Eb], this[mo]());
            return this[jr](t) === !1 ? !1 : B(this, QB, Pf) ? (this[Mr](t), !0) : !1
        },accept: function(t) {
            return this[Nb] && this[Nb](t) === !1 ? !1 : !0
        }}, N(QB, mB), Q(QB[br], zb, {get: function() {
            return this._1k
        }});
    var JB = function() {
        z(this, JB, arguments), this[Bb] = new HB, this._selectionModel = new ZB(this), this._selectionModel._1k = this[Bb], this[Db] = new HB, this[Db][Bd]({beforeEvent: this[qb],onEvent: this[Rb]}, this), this[Lb] = new HB, this[Gb] = new HB, this[Yb] = new mB;
        var t = this;
        this[Yb][Yc] = function(i, n) {
            if (!t[Yb][Io](i))
                throw new Error(Xf + i.id + yl);
            var e = t[Yb]._j0[Wh](i);
            if (e == n)
                return !1;
            t[Yb]._j0[Rh](e, 1), t[Yb]._j0[Rh](n, 0, i), t._nbbIndexFlag = !0;
            var s = new GB(t, i, e, n);
            return t._2f(s), !0
        }
    };
    JB[br] = {selectionModel: null,selectionChangeDispatcher: null,dataChangeDispatcher: null,parentChangeDispatcher: null,roots: null,_km: function(t, i) {
            t[lb] = this[Db], t[Tc] || this[Yb][ir](t), this[Mr](i)
        },_fb: function(t, i) {
            if (B(this, JB, Ab, arguments)) {
                if (i instanceof cR)
                    i[Hb]();
                else if (i instanceof uR) {
                    var n = i[Xb]();
                    this[Yh](n)
                }
                var e = i[Tc];
                return null == e ? this[Yb][Yh](i) : (e[Wb](i), e.__6f = !0), i[Ah]() && this[Yh](i[Tb]()), i[lb] = null, !0
            }
            return !1
        },_5a: function(t) {
            var i = t[r_];
            this[Io](i) && (null == i[Tc] ? this[Yb][ir](i) : null == t[ib] && this[Yb][Yh](i), this[Lb][Mr](t))
        },_2f: function(t) {
            this[Gb][Mr](t)
        },beforeDataPropertyChange: function(t) {
            return t instanceof qB ? this[Lb][jr](t) : !0
        },onDataPropertyChanged: function(t) {
            return t instanceof qB ? (this._nbbIndexFlag = !0, t[r_]._nbbIndexFlag = !0, void this._5a(t)) : void (t instanceof GB && (this._nbbIndexFlag = !0, t[r_]._nbbIndexFlag = !0, this._2f(t)))
        },toRoots: function() {
            return this[Yb][mo]()
        },_fz: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Yb];
            var e = i[Wh](t);
            if (0 > e)
                throw new Error(Vb + t + "' not exist in the box");
            return 0 == e ? n : i[vl](e - 1)
        },_fy: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Yb];
            var e = i[Wh](t);
            if (0 > e)
                throw new Error(Vb + t + "' not exist in the box");
            return e == i[zh] - 1 ? n ? this._fy(n) : null : i[vl](e + 1)
        },forEachByDepthFirst: function(t, i, n) {
            return this[Yb][zh] ? h(this[Yb], t, i, n) : !1
        },forEachByDepthFirstReverse: function(t, i, n) {
            return this[Yb][zh] ? a(this[Yb], t, i, n) : !1
        },forEachByBreadthFirst: function(t, i) {
            return this[Yb][zh] ? u(this[Yb], t, i) : !1
        },forEachByBreadthFirstReverse: function(t, i) {
            return this[Yb][zh] ? o(this[Yb], t, i) : !1
        },clear: function() {
            return B(this, JB, Pf) ? (this[Yb][Pf](), this[ed][Pf](), !0) : !1
        }}, N(JB, QB), J(JB[br], {selectionModel: {get: function() {
                return this._selectionModel
            }},roots: {get: function() {
                return this[Yb]
            }}});
    var ZB = function(t) {
        z(this, ZB), this[Ub] = t, this._n8oxChangeListener = {onEvent: function(t) {
                VB[Mb] == t[Nd] ? null != t[Ra] ? this[Yh](t[Ra]) : null != t[zd] && this[Yh](t[zd]) : VB[Eb] == t[Nd] && this[Pf]()
            }}, this[Ub][zb][Bd](this._n8oxChangeListener, this)
    };
    ZB[br] = {box: null,isSelected: function(t) {
            return this[Cc](t.id || t)
        },select: function(t) {
            return this[ir](t)
        },unselect: function(t) {
            return this[Yh](t)
        },reverseSelect: function(t) {
            return this[Io](t) ? this[Yh](t) : this[ir](t)
        },accept: function(t) {
            return this[Ub][Io](t)
        }}, N(ZB, QB);
    var KB = null, tD = null, iD = null, nD = function() {
        if (!i[xa])
            return function(t) {
                return t
            };
        var t = i[xa](No), e = t[sf], s = {};
        return function(t) {
            if (s[t])
                return s[t];
            var i = ui(t);
            return e[i] !== n || iD && e[i = ui(iD + i)] !== n ? (s[t] = i, i) : t
        }
    }(), eD = {};
    !function() {
        if (!i[Qb])
            return !1;
        for (var e = i[Qb], s = "Webkit Moz O ms Khtml"[Kh](tr), h = 0; h < s[zh]; h++)
            if (e[sf][s[h] + Jb] !== n) {
                iD = Gd + s[h][Zb]() + Gd;
                break
            }
        var r = i[xa](sf);
        t[Kb] || r[Bu](i[tv]("")), r[Qh] && (KB = !0), r[Ha] = iv, r.id = nv, e[Bu](r), tD = r[ev];
        var f, a;
        for (var _ in eD) {
            var c = eD[_];
            f = _, a = "";
            for (var u in c)
                a += nD(u) + sv + c[u] + hv;
            li(f, a)
        }
    }();
    var sD = function(t, i, n, e, s) {
        if (s) {
            var h = function(t) {
                h[gr][Bh](h[xr], t)
            };
            return h[xr] = s, h[gr] = n, t[rv](i, h, e), h
        }
        return t[rv](i, n, e), n
    }, hD = function(t, i, n) {
        t[fv](i, n)
    }, C = function(t) {
        t[fr] ? t[fr]() : t[ar] = !1
    }, T = function(t) {
        t[_r] ? t[_r]() : t[cr] || (t[cr] = !0)
    }, O = function(t) {
        C(t), T(t)
    };
    xB[Mf] = oB ? 500 : 300, xB[Of] = oB ? 1500 : 1e3;
    var rD;
    if (oB)
        rD = av[Kh](Or);
    else {
        var fD = Nf in t ? "mousewheel" : _v;
        rD = (fD + cv)[Kh](Or)
    }
    ji[br] = {_l7: null,_i0: function() {
            var t = this._m7;
            t && pi[Bh](this, t)
        },destroy: function() {
            this._i0()
        },_d3: null,_1m: function() {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        },_di: function() {
            this.__nbancelClick = !0, this._1m(), this._i1(this._d3, uv), this._d1[Pf]()
        },_d1: null,_71: function(t) {
            var i = this._9h;
            this._9h = gi(t), this._d1[ir](i, this._9h, t)
        },_j6: function(t) {
            this._71(t), this._i1(t, ov), t[qr] && t[qr][zh] > 1 && this._i1(t, dv)
        },_i2: function(t) {
            oB || this._71(t);
            var i = this._d1[lv]();
            i && (t.vx = i.x, t.vy = i.y), this._i1(t, bv), this._d1[Pf]()
        },_dj: function(t) {
            this._d3 && (this._1m(), this._i1(t, vv), this._d3 = null, this._9h = null)
        },_i1: function(t, i) {
            this._listener && this._listener[i] instanceof Function && this._listener[i][Bh](this._listener, t, this._l7 || this._m7)
        }};
    var aD = function(t) {
        this._l4 = t, z(this, aD, [t[yv]])
    };
    aD._nburrentInteractionSupport = null, aD[br] = {_4l: function(t) {
            this._4h(function(i) {
                i[xv] instanceof Function && i[xv](t, this._l4)
            })
        },_6v: function() {
            this._4h(function(t) {
                t[gv] instanceof Function && t[gv](this._l4)
            })
        },_i0: function() {
            this._1u && this._2n(this._1u), this._$j && this._2n(this._$j);
            var t = this._l4[yv];
            t && pi[Bh](this, t)
        },_l4: null,_1u: null,_$j: null,_6x: function(t) {
            return this._1u == t ? !1 : (this._1u && this._1u[zh] && this._2n(this._1u), void (this._1u = t))
        },_8: function(t) {
            this._$j || (this._$j = []), this._$j[Xh](t)
        },_4: function(t) {
            this._$j && 0 != this._$j[zh] && g(this._$j, t)
        },_i1: function(t, i, n) {
            this._l4[i] instanceof Function && this._l4[i][Bh](this._l4, t, n), this._1u && this._h7(t, i, this._1u, n), this._$j && this._h7(t, i, this._$j, n)
        },_4h: function(t) {
            this._1u && l(this._1u, t, this), this._$j && l(this._$j, t, this)
        },_h7: function(t, i, n, e) {
            if (!I(n))
                return void this._9z(t, i, n, e);
            for (var s = 0; s < n[zh]; s++) {
                var h = n[s];
                this._9z(t, i, h, e)
            }
        },_9z: function(t, i, n, e) {
            var s = n[i];
            s && s[Bh](n, t, this._l4, e)
        },_2z: function(t) {
            t[Ru] instanceof Function && t[Ru][Bh](t, this._l4)
        },_2n: function(t) {
            if (!I(t))
                return void this._2z(t);
            for (var i = 0; i < t[zh]; i++) {
                var n = t[i];
                n && this._2z(n)
            }
        }}, N(aD, ji), Ei[br] = {limitCount: 10,points: null,add: function(t, i, n) {
            var e = i[Ef] - t[Ef] || 1;
            n[mv] = e;
            var s, h;
            if (!n[qr])
                return s = i.x - t.x, h = i.y - t.y, n.dx = s, n.dy = h, void this._kx(s, h, e);
            var r = n[qr][zh];
            if (1 == r)
                s = n[qr][0][uf] - t[qr][0][uf], h = n[qr][0][of] - t[qr][0][of];
            else {
                for (var f, a, _, c = [], u = [], o = 0, d = 0, l = 0, b = 0, v = 0, y = 0, x = 0, r = t[qr][zh]; r > x; x++) {
                    f = t[qr][x];
                    var g = f[uf], m = f[of];
                    o += g, d += m, x && (v = Math[Ea](v, Math[Pa]((g - a) * (g - a) + (m - _) * (m - _)))), a = g, _ = m, c[Xh]({x: g,y: m})
                }
                o /= r, d /= r;
                for (var x = 0, r = n[qr][zh]; r > x; x++) {
                    f = n[qr][x];
                    var g = f[uf], m = f[of];
                    l += g, b += m, x && (y = Math[Ea](y, Math[Pa]((g - a) * (g - a) + (m - _) * (m - _)))), a = g, _ = m, u[Xh]({x: g,y: m})
                }
                if (l /= r, b /= r, s = l - o, h = b - d, v && y) {
                    var w = y / v;
                    n[Sf] && t[Sf] && (w = n[Sf] / t[Sf]), n[So] = {x: l,y: b,clientX: l,clientY: b}, n[wv] = w, n[kv] = t
                }
            }
            n.dx = s, n.dy = h, this._kx(s, h, e)
        },_kx: function(t, i, n) {
            var e = {interval: n,dx: t,dy: i};
            this[Yf][Rh](0, 0, e), this[Yf][zh] > this[pv] && this[Yf][jv]()
        },getCurrentSpeed: function() {
            if (!this[Yf][zh])
                return null;
            for (var t = 0, i = 0, n = 0, e = 0, s = this[Yf][zh]; s > e; e++) {
                var h = this[Yf][e], r = h[mv];
                if (r > 300)
                    break;
                if (t += h[mv], i += h.dx, n += h.dy, t > 500)
                    break
            }
            return 0 == t || 0 == i && 0 == n ? null : {x: i / t,y: n / t}
        },clear: function() {
            this[Yf] = []
        }};
    var _D, cD, uD, oD;
    rB ? (_D = Mv, cD = Ev, uD = Sv, oD = Pv) : fB ? (_D = Iv, cD = Cv, uD = Tv, oD = Ov) : (_D = $v, cD = $v, uD = vd, oD = Fv);
    var dD = Av, lD = Math.PI, bD = Math[Ca], vD = Math[Xr], yD = 1.70158, xD = {swing: function(t) {
            return -Math[Hr](t * lD) / 2 + .5
        },easeNone: function(t) {
            return t
        },easeIn: function(t) {
            return t * t
        },easeOut: function(t) {
            return (2 - t) * t
        },easeBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
        },easeInStrong: function(t) {
            return t * t * t * t
        },easeOutStrong: function(t) {
            return 1 - --t * t * t * t
        },easeBothStrong: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
        },elasticIn: function(t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : -(bD(2, 10 * (t -= 1)) * vD(2 * (t - n) * lD / i))
        },elasticOut: function(t) {
            var i = .3, n = i / 4;
            return 0 === t || 1 === t ? t : bD(2, -10 * t) * vD(2 * (t - n) * lD / i) + 1
        },elasticBoth: function(t) {
            var i = .45, n = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * bD(2, 10 * (t -= 1)) * vD(2 * (t - n) * lD / i) : bD(2, -10 * (t -= 1)) * vD(2 * (t - n) * lD / i) * .5 + 1
        },backIn: function(t) {
            return 1 === t && (t -= .001), t * t * ((yD + 1) * t - yD)
        },backOut: function(t) {
            return (t -= 1) * t * ((yD + 1) * t + yD) + 1
        },backBoth: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * (((yD *= 1.525) + 1) * t - yD) : .5 * ((t -= 2) * t * (((yD *= 1.525) + 1) * t + yD) + 2)
        },bounceIn: function(t) {
            return 1 - xD[Nv](1 - t)
        },bounceOut: function(t) {
            var i, n = 7.5625;
            return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
        },bounceBoth: function(t) {
            return .5 > t ? .5 * xD[zv](2 * t) : .5 * xD[Nv](2 * t - 1) + .5
        }}, gD = function(t) {
        this._js = t
    };
    gD[br] = {_js: null,_k6: function(t) {
            var i = Date[Kf]();
            this._lt();
            var n = this;
            this._requestID = requestAnimationFrame(function e() {
                var s = Date[Kf](), h = s - i;
                return !h || n._js && n._js(h) !== !1 ? (i = s, void (n._requestID = requestAnimationFrame(e))) : (n._lt(), void (t instanceof Function && t[Bh]()))
            })
        },_lt: function() {
            return this._requestID ? (t[nl](this._requestID), void delete this._requestID) : !1
        },_df: function() {
            return null != this._requestID
        }};
    var mD = function(t, i, n, e) {
        this._onStep = t, this._l7 = i || this, this._3v = e, n && n > 0 && (this._iq = n)
    };
    mD[br] = {_iq: 1e3,_3v: null,_dd: 0,_lt: function() {
            return this._dd = 0, this._d9 = 0, B(this, mD, Bv)
        },_d9: 0,_js: function(t) {
            if (this._dd += t, this._dd >= this._iq)
                return this._onStep[Bh](this._l7, 1, (1 - this._d9) * this._iq, t, this._iq), !1;
            var i = this._dd / this._iq;
            return this._3v && (i = this._3v(i)), this._onStep[Bh](this._l7, i, (i - this._d9) * this._iq, t, this._iq) === !1 ? !1 : void (this._d9 = i)
        }}, N(mD, gD);
    var wD = function(t) {
        ni(t)
    }, kD = {version: Dv,extend: N,doSuperConstructor: z,doSuper: B,createFunction: L,setClass: p,appendClass: j,removeClass: M,forEach: l,forEachReverse: v,isNumber: E,isString: S,isBoolean: P,isArray: I,eventPreventDefault: C,eventStopPropagation: T,stopEvent: O,callLater: w,nextFrame: k,forEachChild: e,forEachByDepthFirst: h,forEachByDepthFirstReverse: a,forEachByBreadthFirst: u,randomInt: $,randomBool: F,randomColor: X,addEventListener: sD,getFirstElementChildByTagName: kB};
    kD[qv] = oB, kD[Rv] = dB, kD[Fa] = ri, kD[Lv] = fi, kD[Fd] = SB, kD[Gv] = EB, kD[Yv] = pB, kD[Hv] = PB, kD[Xv] = BB, kD[Wv] = DB, kD[Vv] = VB, kD[Uv] = YB, kD[Qv] = HB, kD[Jv] = IB, kD[Zv] = UB, kD[Kv] = ZB, kD[ty] = JB, kD[iy] = WB, kD[ny] = Ii, kD[ey] = Si, kD[sy] = Pi, kD[hy] = Mi, kD[ry] = jB, kD[fy] = mB, kD[ay] = ji, kD[_y] = function(t) {
        alert(t)
    }, kD[cy] = function(t, i, n, e) {
        var s = prompt(t, i);
        return s != i && n ? n[Bh](e, s) : s
    }, kD[uy] = function(t, i, n) {
        var e = confirm(t);
        return e && i ? i[Bh](n) : e
    }, kD[oy] = li;
    var pD = {SELECTION_TYPE_BORDER_RECT: dy,SELECTION_TYPE_BORDER: ly,SELECTION_TYPE_SHADOW: by,NS_SVG: "http://www.w3.org/2000/svg",PROPERTY_TYPE_ACCESSOR: 0,PROPERTY_TYPE_STYLE: 1,PROPERTY_TYPE_CLIENT: 2,EDGE_TYPE_DEFAULT: null,EDGE_TYPE_ELBOW: vy,EDGE_TYPE_ELBOW_HORIZONTAL: yy,EDGE_TYPE_ELBOW_VERTICAL: xy,EDGE_TYPE_ORTHOGONAL: gy,EDGE_TYPE_ORTHOGONAL_HORIZONTAL: my,EDGE_TYPE_ORTHOGONAL_VERTICAL: wy,EDGE_TYPE_HORIZONTAL_VERTICAL: ky,EDGE_TYPE_VERTICAL_HORIZONTAL: py,EDGE_TYPE_EXTEND_TOP: jy,EDGE_TYPE_EXTEND_LEFT: My,EDGE_TYPE_EXTEND_BOTTOM: Ey,EDGE_TYPE_EXTEND_RIGHT: Sy,EDGE_TYPE_ZIGZAG: Py,EDGE_CORNER_NONE: Wo,EDGE_CORNER_ROUND: Aa,EDGE_CORNER_BEVEL: Iy,GROUP_TYPE_RECT: Cy,GROUP_TYPE_CIRCLE: Ty,GROUP_TYPE_ELLIPSE: Oy,SHAPE_CIRCLE: $y,SHAPE_RECT: Cy,SHAPE_ROUNDRECT: Fy,SHAPE_STAR: Ay,SHAPE_TRIANGLE: Ny,SHAPE_HEXAGON: zy,SHAPE_PENTAGON: By,SHAPE_TRAPEZIUM: Dy,SHAPE_RHOMBUS: qy,SHAPE_PARALLELOGRAM: Ry,SHAPE_HEART: Ly,SHAPE_DIAMOND: Gy,SHAPE_CROSS: Yy,SHAPE_ARROW_STANDARD: Hy,SHAPE_ARROW_1: Xy,SHAPE_ARROW_2: Wy,SHAPE_ARROW_3: Vy,SHAPE_ARROW_4: Uy,SHAPE_ARROW_5: Qy,SHAPE_ARROW_6: Jy,SHAPE_ARROW_7: Zy,SHAPE_ARROW_8: Ky,SHAPE_ARROW_OPEN: tx};
    pD[ix] = nx, pD[ex] = Aa, pD[sx] = hx, pD[rx] = Iy, pD[fx] = Aa, pD[ax] = _x, xB[cx] = pD[ux], xB[ox] = 3, xB[dx] = 2, xB[lx] = 7, xB[bx] = U(3422561023), xB[cx] = pD[ux], xB[vx] = 10, xB[yx] = 10, xB[xx] = n, xB[yo] = 10, xB[gx] = 200, xB[ja] = 1.2;
    var jD = t[mx] || 1;
    1 > jD && (jD = 1);
    var MD;
    kD[wx] = Bi;
    var ED = function(t, i, n, e) {
        var s = t - n, h = i - e;
        return s * s + h * h
    };
    nn[br] = {equals: function(t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }}, nn._jrCircle = function(t, i, n) {
        if (!n)
            return Ki(t, i);
        var e = ED(t.x, t.y, i.x, i.y), s = ED(t.x, t.y, n.x, n.y), h = ED(n.x, n.y, i.x, i.y);
        if (e + SD >= s + h)
            return Ki(t, i, 0, n);
        if (s + SD >= e + h)
            return Ki(t, n, 0, i);
        if (h + SD >= e + s)
            return Ki(i, n, 0, t);
        var r;
        Math[Ur](n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
        var f = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r), a = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (f - (i.x + n.x) / 2);
        return new nn(f, a, jB(f, a, t.x, t.y), t, i, n)
    };
    var SD = .01, PD = {_naz: function(t, i, e, s, h) {
            var r = 0, f = 0, a = i._it;
            if (e = e || 0, t.x === n) {
                var _ = t[Qr], c = t[Jr], u = !0;
                switch (_) {
                    case OB:
                        u = !1;
                        break;
                    case TB:
                        r += a / 2
                }
                switch (c) {
                    case $B:
                        f -= e / 2;
                        break;
                    case AB:
                        f += e / 2
                }
            } else
                r = t.x, f = t.y, Math[Ur](r) > 0 && Math[Ur](r) < 1 && (r *= a);
            h && null != s && (f += s.y, r += Math[Ur](s.x) < 1 ? s.x * a : s.x);
            var o = cn[Bh](i, r, f, u);
            return o ? (h || null == s || o[kx](s), o) : {x: 0,y: 0}
        },_lr: function(t, i) {
            var n = i[Ha], e = i[Yf];
            switch (n) {
                case tq:
                    t[px](e[0], e[1], e[2], e[3], i._r);
                    break;
                case QD:
                    t[Uc](e[0], e[1]);
                    break;
                case JD:
                    t[Qc](e[0], e[1]);
                    break;
                case ZD:
                    t[jx](e[0], e[1], e[2], e[3]);
                    break;
                case KD:
                    t[Mx](e[0], e[1], e[2], e[3], e[4], e[5]);
                    break;
                case iq:
                    t[m_]()
            }
        },_5t: function(t, i, n, e) {
            var s = i[Ha];
            if (s != QD && s != iq) {
                var h = n[Ya], r = i[Yf];
                switch (n[Ha] == QD && t[ir](h.x, h.y), s) {
                    case tq:
                        dn(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t[ir](r[0], r[1]), t[ir](i._p1x, i._p1y), t[ir](i._p2x, i._p2y), i._n8oundaryPoint1 && t[ir](i._n8oundaryPoint1.x, i._n8oundaryPoint1.y), i._n8oundaryPoint2 && t[ir](i._n8oundaryPoint2.x, i._n8oundaryPoint2.y);
                        break;
                    case JD:
                        t[ir](r[0], r[1]);
                        break;
                    case ZD:
                        Hi([h.x, h.y][Lh](r), t);
                        break;
                    case KD:
                        Ui([h.x, h.y][Lh](r), t);
                        break;
                    case iq:
                        e && t[ir](e[Yf][0], e[Yf][1])
                }
            }
        },_5y: function(t, i, n) {
            var e = t[Ha];
            if (e == QD)
                return 0;
            var s = i[Ya], h = t[Yf];
            switch (e == KD && 4 == h[zh] && (e = ZD), e) {
                case JD:
                    return jB(h[0], h[1], s.x, s.y);
                case tq:
                    return t._it;
                case ZD:
                    var r = Xi([s.x, s.y][Lh](h));
                    return t._lf = r, r(1);
                case KD:
                    var r = Ji([s.x, s.y][Lh](h));
                    return t._lf = r, r(1) || Qi([s.x, s.y][Lh](h));
                case iq:
                    if (s && n)
                        return t[Yf] = n[Yf], jB(n[Yf][0], n[Yf][1], s.x, s.y)
            }
            return 0
        }}, ID = /^data:image\/(\w+);base64,/i, CD = /^gif/i, TD = /^svg/i, OD = 10, $D = 11, FD = 12, AD = 20, ND = 30;
    xB[t_] = 50, xB[i_] = 30, xB[Ex] = 1e6;
    var zD = 1, BD = 2, DD = 3;
    xn[br] = {_jo: 0,_6f: !0,_k4: null,_j2: null,_ln: null,_lm: null,_nae: n,_8z: n,_6j: function() {
            return this._jo == zD
        },getBounds: function(t) {
            return this._lm == ND ? this._ln[Oa](t) : (this._6f && this._fd(), this)
        },validate: function() {
            this._6f && this._fd()
        },_fd: function() {
            if (this._6f = !1, this._lm == ND)
                return this._ln[Ta](), void this[I_](this._ln[$a]);
            if (this._lm == AD)
                return void this._90();
            if (this._jo != zD)
                try {
                    this._db()
                } catch (t) {
                    this._jo = DD, kD[Gr](t)
                }
        },_5i: function() {
            this._eh(), this._dispatcher[Pf](), delete this._dispatcher
        },_he: function(t) {
            this._jo = DD, kD[Gr](Sx + this._ln), this._pixels = null, this._j2 = null, this._k4 = null, t !== !1 && this._5i()
        },_db: function() {
            var t = this._ln;
            if (this._jo = zD, this._dispatcher = new HB, this._lm == FD) {
                for (var i in uq)
                    this[i] = uq[i];
                return void Un(this._ln, this, this._nbq, this._he, this._eg)
            }
            this._k4 || (this._k4 = new Image), this._k4[Ro] = t, this._k4[fa] ? (this._k4[dc] = this._k4[lc] = null, this._8r()) : (this._k4[dc] = this._8r[Px](this), this._k4[lc] = this._he[Px](this))
        },_8r: function() {
            this._jo = BD;
            var t = this._k4[fa], i = this._k4[aa];
            if (!t || !i)
                return void this._he();
            this[fa] = t, this[aa] = i;
            var n = this._el();
            n[fa] = t, n[aa] = i, n.g[Ix](this._k4, 0, 0, t, i), this._pixels = jn(n), this._5i()
        },_90: function() {
            var t = this._ln;
            if (!(t[Za] instanceof Function))
                return void this._he(!1);
            var i = t[fa] || xB[gx], n = t[aa] || xB[gx], e = this._el(), s = e.g;
            t[Za](s);
            var h = s[qa](0, 0, i, n), r = Mn(h[Ra], i, n);
            this.x = r._x, this.y = r._y, this[fa] = r._width, this[aa] = r._height, e[fa] = this[fa], e[aa] = this[aa], s[y_](h, -this.x, -this.y), this._pixels = r
        },_el: function() {
            return this._j2 || (this._j2 = Bi())
        },_6u: function(t, i, n, e, s, h) {
            i[Cx](), i[Cy](0, 0, e, s), i[Tx] = h || Ox, i[Da](), i[$x](), i[Fx] = So, i[Ax] = Nx, i[Tx] = zx;
            var r = 6 * (i[oa][ca] || 1);
            i[pa] = Bx + r + "px Verdana,helvetica,arial,sans-serif", i[Dx] = qx, i[La] = 1, i[Rx](t, e / 2 + .5, s / 2 + .5), i[Dx] = Lx, i[Rx](t, e / 2 - .5, s / 2 - .5), i[Gx](t, e / 2, s / 2), i[Yx]()
        },draw: function(t, i, n, e, s, h) {
            if (this[fa] && this[aa]) {
                i = i || 1, e = e || 1, s = s || 1;
                var r = this[fa] * e, f = this[aa] * s;
                if (h && n[Hx] && (t[Hx] = n[Hx], t[Xx] = (n[Xx] || 0) * i, t[Wx] = (n[Wx] || 0) * i, t[Vx] = (n[Vx] || 0) * i), this._jo == zD)
                    return this._6u(Ux, t, i, r, f, n[Qx]);
                if (this._jo == DD)
                    return this._6u(Jx, t, i, r, f, n[Qx]);
                if (this._lm == ND)
                    return t[Sf](e, s), void this._ln[Za](t, i, n);
                var a = this._f8(i, e, s);
                return a ? ((this.x || this.y) && t[h_](this.x * e, this.y * s), t[Sf](e / a[Sf], s / a[Sf]), void a._lr(t, n[Qx], n[Zx])) : void this._jq(t, i, e, s, this[fa] * e, this[aa] * s)
            }
        },_jq: function(t, i, n, e, s, h) {
            if (this._lm == AD)
                return 1 != n && 1 != e && t[Sf](n, e), void this._ln[Za](t);
            if (this._k4) {
                if (!aB)
                    return void t[Ix](this._k4, 0, 0, s, h);
                var n = i * s / this[fa], e = i * h / this[aa];
                t[Sf](1 / n, 1 / e), t[Ix](this._k4, 0, 0, s * n, h * e)
            }
        },_j1: null,_f8: function(t, i, n) {
            if (this._lm == OD || (t *= Math[Ea](i, n)) <= 1)
                return this._defaultCache || (this._defaultCache = this._f7(this._j2 || this._k4, 1)), this._defaultCache;
            var e = this._j1[Kx] || 0;
            if (t = Math[Gh](t), e >= t) {
                for (var s = t, h = this._j1[s]; !h && ++s <= e; )
                    h = this._j1[s];
                if (h)
                    return h
            }
            t % 2 && t++;
            var r = this[fa] * t, f = this[aa] * t;
            if (r * f > xB[Ex])
                return null;
            var a = Bi(r, f);
            return (this.x || this.y) && a.g[h_](-this.x * t, -this.y * t), this._jq(a.g, 1, t, t, r, f), this._f7(a, t)
        },_f7: function(t, i) {
            var n = new hq(t, i);
            return this._j1[i] = n, this._j1[Kx] = i, n
        },_hg: function(t, i, n) {
            if (this._lm == ND)
                return this._ln._hg[lr](this._ln, arguments);
            if (!(this._pixels || this._k4 && this._k4._pixels))
                return !0;
            var e = this._pixels || this._k4._pixels;
            return t -= e._j8.x, i -= e._j8.y, t = Math[Aa](t), i = Math[Aa](i), En(e, e._j8, t, i, n)
        },_eh: function() {
            this._dispatcher && this._dispatcher[Mr](new BB(this, tg, ig, this._k4))
        },_nal: function(t, i) {
            this._dispatcher && this._dispatcher[Bd](t, i)
        },_6l: function(t, i) {
            this._dispatcher && this._dispatcher[xb](t, i)
        },_n8u: function(t) {
            this._j1 = {}, (t || this[fa] * this[aa] > 1e5) && (this._k4 = null, this._j2 = null)
        }}, N(xn, SB);
    var qD = {};
    kD[Ix] = pn, kD[ng] = gn, kD[eg] = wn, kD[sg] = function() {
        var t = [];
        for (var i in qD)
            t[Xh](i);
        return t
    };
    var RD = function(t, i, n, e, s, h) {
        this[Ha] = t, this[hg] = i, this[rg] = n, this[Eo] = e || 0, this.tx = s || 0, this.ty = h || 0
    };
    pD[fg] = Bl, pD[ag] = Nl, RD[br] = {type: null,colors: null,positions: null,angle: null,tx: 0,ty: 0,position: IB[Hl],isEmpty: function() {
            return null == this[hg] || 0 == this[hg][zh]
        },_6m: function() {
            var t = this[hg][zh];
            if (1 == t)
                return [0];
            for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++)
                i[Xh](n * e);
            return this[rg] || (this[rg] = i), i
        },generatorGradient: function(t) {
            if (null == this[hg] || 0 == this[hg][zh])
                return null;
            var i, n = qi();
            if (this[Ha] == pD[ag]) {
                var e = this[Eo];
                e > Math.PI && (e -= Math.PI);
                var s;
                if (e <= Math.PI / 2) {
                    var h = Math[Yr](t[aa], t[fa]), r = Math[Pa](t[fa] * t[fa] + t[aa] * t[aa]), f = h - e;
                    s = Math[Hr](f) * r
                } else {
                    var h = Math[Yr](t[fa], t[aa]), r = Math[Pa](t[fa] * t[fa] + t[aa] * t[aa]), f = h - (e - Math.PI / 2);
                    s = Math[Hr](f) * r
                }
                var a = s / 2, _ = a * Math[Hr](e), c = a * Math[Xr](e), u = t.x + t[fa] / 2 - _, o = t.y + t[aa] / 2 - c, d = t.x + t[fa] / 2 + _, l = t.y + t[aa] / 2 + c;
                i = n[_g](u, o, d, l)
            } else {
                if (!(this[Ha] = pD[fg]))
                    return null;
                var b = ai(this[L_], t[fa], t[aa]);
                b.x += t.x, b.y += t.y, this.tx && (b.x += Math[Ur](this.tx) < 1 ? t[fa] * this.tx : this.tx), this.ty && (b.y += Math[Ur](this.ty) < 1 ? t[aa] * this.ty : this.ty);
                var v = jB(b.x, b.y, t.x, t.y);
                v = Math[Ea](v, jB(b.x, b.y, t.x, t.y + t[aa])), v = Math[Ea](v, jB(b.x, b.y, t.x + t[fa], t.y + t[aa])), v = Math[Ea](v, jB(b.x, b.y, t.x + t[fa], t.y)), i = n[cg](b.x, b.y, 0, b.x, b.y, v)
            }
            var y = this[hg], x = this[rg];
            x && x[zh] == y[zh] || (x = this._6m());
            for (var g = 0, m = y[zh]; m > g; g++)
                i[ug](x[g], y[g]);
            return i
        }};
    var LD = new RD(pD[ag], [U(2332033023), U(1154272460), U(1154272460), U(1442840575)], [.1, .3, .7, .9], Math.PI / 2), GD = new RD(pD[ag], [U(2332033023), U(1154272460), U(1154272460), U(1442840575)], [.1, .3, .7, .9], 0), YD = (new RD(pD[ag], [U(1154272460), U(1442840575)], [.1, .9], 0), new RD(pD[fg], [U(2298478591), U(1156509422), U(1720223880), U(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)), HD = [U(0), U(4294901760), U(4294967040), U(4278255360), U(4278250239), U(4278190992), U(4294901958), U(0)], XD = [0, .12, .28, .45, .6, .75, .8, 1], WD = new RD(pD[ag], HD, XD), VD = new RD(pD[ag], HD, XD, Math.PI / 2), UD = new RD(pD[fg], HD, XD);
    RD[og] = LD, RD[dg] = GD, RD[lg] = YD, RD[bg] = WD, RD[vg] = VD, RD[yg] = UD;
    var QD = Dl, JD = Nl, ZD = xg, KD = zl, tq = gg, iq = mg;
    pD[wg] = QD, pD[kg] = JD, pD[pg] = ZD, pD[jg] = KD, pD[Mg] = tq, pD[Eg] = iq;
    var nq = function(t, i) {
        this.id = ++iB, I(t) ? this[Yf] = t : (this[Ha] = t, this[Yf] = i)
    };
    nq[br] = {toJSON: function() {
            return {type: this[Ha],points: this[Yf]}
        },parseJSON: function(t) {
            this[Ha] = t[Ha], this[Yf] = t[Yf]
        },points: null,type: JD,clone: function() {
            return new nq(this[Ha], y(this[Yf]))
        },move: function(t, i) {
            if (this[Yf])
                for (var n = 0, e = this[Yf][zh]; e > n; n++) {
                    var s = this[Yf][n];
                    kD[Sg](s) && (this[Yf][n] += n % 2 == 0 ? t : i)
                }
        }}, J(nq[br], {lastPoint: {get: function() {
                return this[Ha] == tq ? {x: this._p2x,y: this._p2y} : {x: this[Yf][this[Yf][zh] - 2],y: this[Yf][this[Yf][zh] - 1]}
            }},firstPoint: {get: function() {
                return {x: this[Yf][0],y: this[Yf][1]}
            }}}), kD[Pg] = nq;
    var eq = 0, sq = function(t) {
        this[$a] = new SB, this._f6 = t || []
    };
    sq[br] = {toJSON: function() {
            var t = [];
            return this._f6[uc](function(i) {
                t[Xh](i[Ig]())
            }), t
        },parseJSON: function(t) {
            var i = this._f6;
            t[uc](function(t) {
                i[Xh](new nq(t[Ha], t[Yf]))
            })
        },clear: function() {
            this._f6[zh] = 0, this[$a][Pf](), this._it = 0, this._6f = !0
        },_dh: !0,_6o: function(t, i) {
            this._dh && 0 === this._f6[zh] && t != QD && this._f6[Xh](new nq(QD, [0, 0])), this._f6[Xh](new nq(t, i)), this._6f = !0
        },moveTo: function(t, i) {
            this._6o(QD, [t, i])
        },lineTo: function(t, i) {
            this._6o(JD, [t, i])
        },quadTo: function(t, i, n, e) {
            this._6o(ZD, [t, i, n, e])
        },curveTo: function(t, i, n, e, s, h) {
            this._6o(KD, [t, i, n, e, s, h])
        },arcTo: function(t, i, n, e, s) {
            this._6o(tq, [t, i, n, e, s])
        },closePath: function() {
            this._6o(iq)
        },_7r: function(t, i, n, e, s) {
            if (e[Cg]) {
                if (n == pD[ux]) {
                    if (!e[Tg])
                        return;
                    return t[Hx] = e[Cg], t[Xx] = e[Tg] * i, t[Wx] = (e[Og] || 0) * i, void (t[Vx] = (e[$g] || 0) * i)
                }
                if (n == pD[Fg]) {
                    if (!e[Ag])
                        return;
                    t[Dx] = e[Cg], t[La] = e[Ag] + (s[La] || 0), this._lr(t), t[Ba]()
                }
            }
        },_6f: !0,_f6: null,_it: 0,lineCap: nx,lineJoin: Aa,draw: function(t, i, n, e, s) {
            t[Ng] = n[Ng] || this[Ng], t[zg] = n[zg] || this[zg], e && (s || (s = n), this._7r(t, i, s[Bg], s, n)), n[Dg] && (this._lr(t), t[La] = n[La] + 2 * (n[qg] || 0), t[Dx] = n[Dg], t[Ba]()), t[La] = 0, this._lr(t), n[Rg] && (t[Tx] = n[Qx] || n[Rg], t[Da]()), n[Lg] && (t[Tx] = n._fillGradient || n[Lg], t[Da]()), n[La] && (t[La] = n[La], n[W_] && (t[W_] = n[W_], t[Z_] = n[Z_]), t[Dx] = n[Qx] || n[Dx], t[Ba](), t[W_] = [])
        },_lr: function(t) {
            t[Gg]();
            for (var i, n, e = 0, s = this._f6[zh]; s > e; e++)
                i = this._f6[e], PD._lr(t, i, n), n = i
        },validate: function() {
            if (this._6f = !1, this[$a][Pf](), this._it = 0, 0 != this._f6[zh])
                for (var t, i, n = this._f6, e = 1, s = n[0], h = s, r = n[zh]; r > e; e++)
                    t = n[e], t[Ha] == QD ? h = t : (PD._5t(this[$a], t, s, h), i = PD._5y(t, s, h), t._it = i, this._it += i), s = t
        },getBounds: function(t, i) {
            if (this._6f && this[Ta](), i = i || new SB, t) {
                var n = t / 2;
                i[pr](this[$a].x - n, this[$a].y - n, this[$a][fa] + t, this[$a][aa] + t)
            } else
                i[pr](this[$a].x, this[$a].y, this[$a][fa], this[$a][aa]);
            return i
        },_hg: function(t, i, n, e, s, h) {
            return _n[Bh](this, t, i, n, e, s, h)
        },_n8m: function() {
            return [][Lh](this._f6)
        },generator: function(t, i, n, e, s) {
            return an[Bh](this, t, i, n, e, s)
        },getLocation: function(t, i) {
            return cn[Bh](this, t, i || 0)
        }}, J(sq[br], {length: {get: function() {
                return this._6f && this[Ta](), this._it
            }},_empty: {get: function() {
                return 0 == this._f6[zh]
            }}}), pD[u_] = Yg, pD[c_] = Hg, pD[o_] = Xg, pD[d_] = Wg, pD[l_] = Vg, pD[b_] = Ug, pD[v_] = Qg, xB[__] = pD[d_];
    var hq = function(t, i, n) {
        this._j2 = t, this[Sf] = i || 1, t instanceof Image && (n = !1), this._hw = n
    };
    hq[br] = {scale: 1,_j2: null,_j1: null,_hw: !0,_lr: function(t, i, n) {
            if (!i || this._hw === !1)
                return void t[Ix](this._j2, 0, 0);
            this._j1 || (this._j1 = {});
            var e = i + n, s = this._j1[e];
            s || (s = In(this._j2, i, n), s || (this._hw = !1), this._j1[e] = s || this._j2), t[Ix](s, 0, 0)
        }};
    var rq = function(t, i, n, e, s, h, r, f, a) {
        this._mf = $n(t, i, n, e, s, h, r, f, a)
    }, fq = {server: {draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](40, 0), t[Qc](40, 40), t[Qc](0, 40), t[m_](), t[$x](), t[h_](0, 0), t[h_](0, 0), t[Sf](1, 1), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](6.75, 3.9033, 30.5914, 27.7447);
                i[ug](.0493, Kg), i[ug](.0689, tm), i[ug](.0939, im), i[ug](.129, nm), i[ug](.2266, em), i[ug](.2556, sm), i[ug](.2869, hm), i[ug](.3194, rm), i[ug](.3525, fm), i[ug](.3695, am), i[ug](.5025, _m), i[ug](.9212, cm), i[ug](1, um), t[Tx] = i, t[Gg](), t[Uc](25.677, 4.113), t[Mx](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[Mx](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t[Mx](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[Mx](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[Mx](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[Mx](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[Mx](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[Mx](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[Mx](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t[Mx](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[Mx](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t[Mx](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[Mx](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[Mx](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = om, t[Gg](), t[Uc](19.763, 6.645), t[Mx](20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[Mx](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[Mx](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[Mx](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t[Qc](21.398, 36.253), t[Mx](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[Mx](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[Mx](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[Mx](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[Qc](4.675, 37.877), t[Mx](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[Mx](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[Mx](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[Mx](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t[Qc](2.924, 8.431), t[Mx](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[Mx](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t[Mx](3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[Mx](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[Qc](19.763, 6.645), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Tx] = dm, t[Gg](), t[lm](12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = om, t[Gg](), t[lm](12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = dm, t[Gg](), t[Uc](19.377, 17.247), t[Mx](19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[Qc](5.882, 18.108999999999998), t[Mx](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[Qc](5.02, 11.144), t[Mx](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t[Qc](18.516, 10.281), t[Mx](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[Qc](19.377, 17.247), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = om, t[Gg](), t[Uc](18.536, 13.176), t[Mx](18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t[Qc](6.479, 13.794), t[Mx](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t[Qc](5.861, 11.84), t[Mx](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t[Qc](17.918, 11.221), t[Mx](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[Qc](18.535, 13.176), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = om, t[Gg](), t[Uc](18.536, 16.551), t[Mx](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[Qc](6.479, 17.168999999999997), t[Mx](6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t[Qc](5.861, 15.215999999999998), t[Mx](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t[Qc](17.918, 14.596999999999998), t[Mx](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[Qc](18.535, 16.551), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx]()
            }},exchanger2: {draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](40, 0), t[Qc](40, 40), t[Qc](0, 40), t[m_](), t[$x](), t[h_](0, 0), t[h_](0, 0), t[Sf](1, 1), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](.4102, 24.3613, 39.5898, 24.3613);
                i[ug](0, Kg), i[ug](.0788, em), i[ug](.2046, bm), i[ug](.3649, vm), i[ug](.5432, ym), i[ug](.6798, xm), i[ug](.7462, gm), i[ug](.8508, mm), i[ug](.98, sm), i[ug](1, wm), t[Tx] = i, t[Gg](), t[Uc](.41, 16.649), t[Mx](.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t[Mx](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[Mx](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[Mx](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[Mx](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[Mx](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t[Mx](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = om, t[Gg](), t[Uc](16.4, 25.185), t[Mx](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[Mx](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t[Mx](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t[Mx](11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[Mx](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[Mx](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[Mx](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[Mx](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t[Mx](23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t[Mx](13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](5.21, 21.754), t[Qc](8.188, 17.922), t[Qc](9.53, 18.75), t[Qc](15.956, 16.004), t[Qc](18.547, 17.523), t[Qc](12.074, 20.334), t[Qc](13.464, 21.204), t[Qc](5.21, 21.754), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](17.88, 14.61), t[Qc](9.85, 13.522), t[Qc](11.703, 12.757), t[Qc](7.436, 10.285), t[Qc](10.783, 8.942), t[Qc](15.091, 11.357), t[Qc](16.88, 10.614), t[Qc](17.88, 14.61), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](17.88, 14.61), t[Qc](9.85, 13.522), t[Qc](11.703, 12.757), t[Qc](7.436, 10.285), t[Qc](10.783, 8.942), t[Qc](15.091, 11.357), t[Qc](16.88, 10.614), t[Qc](17.88, 14.61), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](23.556, 15.339), t[Qc](20.93, 13.879), t[Qc](26.953, 11.304), t[Qc](25.559, 10.567), t[Qc](33.251, 9.909), t[Qc](31.087, 13.467), t[Qc](29.619, 12.703), t[Qc](23.556, 15.339), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](30.028, 23.383), t[Qc](24.821, 20.366), t[Qc](22.915, 21.227), t[Qc](21.669, 16.762), t[Qc](30.189, 17.942), t[Qc](28.33, 18.782), t[Qc](33.579, 21.725), t[Qc](30.028, 23.383), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](30.028, 23.383), t[Qc](24.821, 20.366), t[Qc](22.915, 21.227), t[Qc](21.669, 16.762), t[Qc](30.189, 17.942), t[Qc](28.33, 18.782), t[Qc](33.579, 21.725), t[Qc](30.028, 23.383), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Yx](), t[Yx](), t[Yx]()
            }},exchanger: {draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](40, 0), t[Qc](40, 40), t[Qc](0, 40), t[m_](), t[$x](), t[h_](0, 0), t[h_](0, 0), t[Sf](1, 1), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](.2095, 20.7588, 39.4941, 20.7588);
                i[ug](0, pm), i[ug](.0788, jm), i[ug](.352, Mm), i[ug](.6967, Em), i[ug](.8916, Sm), i[ug](.9557, Pm), i[ug](1, Im), t[Tx] = i, t[Gg](), t[Uc](39.449, 12.417), t[Qc](39.384, 9.424), t[Mx](39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[Mx](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[Mx](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[Mx](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t[Mx](8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[Mx](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t[Mx](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[Mx](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t[Qc](37.711, 30.316999999999997), t[Qc](39.281, 16.498999999999995), t[Mx](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t[Mx](39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](19.8052, 7.7949, 19.8052, 24.7632);
                i[ug](0, Cm), i[ug](.1455, Tm), i[ug](.2975, Om), i[ug](.4527, $m), i[ug](.6099, Fm), i[ug](.7687, Am), i[ug](.9268, Nm), i[ug](.9754, zm), i[ug](1, Bm), t[Tx] = i, t[Gg](), t[Uc](33.591, 24.763), t[Mx](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t[Mx](3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t[Mx](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[Mx](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[Mx](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t[Mx](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[Mx](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[Mx](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[Mx](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[Mx](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[Mx](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t[Mx](37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[Mx](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](10.427, 19.292), t[Qc](5.735, 16.452), t[Qc](12.58, 13.8), t[Qc](12.045, 15.07), t[Qc](20.482, 15.072), t[Qc](19.667, 17.887), t[Qc](11.029, 17.851), t[Qc](10.427, 19.292), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](13.041, 13.042), t[Qc](8.641, 10.73), t[Qc](14.82, 8.474), t[Qc](14.373, 9.537), t[Qc](22.102, 9.479), t[Qc](21.425, 11.816), t[Qc](13.54, 11.85), t[Qc](13.041, 13.042), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](29.787, 16.049), t[Qc](29.979, 14.704), t[Qc](21.51, 14.706), t[Qc](22.214, 12.147), t[Qc](30.486, 12.116), t[Qc](30.653, 10.926), t[Qc](36.141, 13.4), t[Qc](29.787, 16.049), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = km, t[Gg](), t[Uc](28.775, 23.14), t[Qc](29.011, 21.49), t[Qc](19.668, 21.405), t[Qc](20.523, 18.295), t[Qc](29.613, 18.338), t[Qc](29.815, 16.898), t[Qc](35.832, 19.964), t[Qc](28.775, 23.14), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx](), t[Yx]()
            }},cloud: {draw: function(t) {
                t[Cx](), t[Gg](), t[Uc](0, 0), t[Qc](90.75, 0), t[Qc](90.75, 62.125), t[Qc](0, 62.125), t[m_](), t[$x](), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx]();
                var i = t[_g](44.0054, 6.4116, 44.0054, 51.3674);
                i[ug](0, "rgba(159, 160, 160, 0.7)"), i[ug](.9726, Dm), t[Tx] = i, t[Gg](), t[Uc](57.07, 20.354), t[Mx](57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t[Mx](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[Mx](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t[Mx](18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[Mx](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[Mx](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t[Mx](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[Mx](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[Mx](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[Mx](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[Mx](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx]()
            }},node: {width: 60,height: 100,draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](40, 0), t[Qc](40, 40), t[Qc](0, 40), t[m_](), t[$x](), t[h_](0, 0), t[h_](0, 0), t[Sf](1, 1), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Tx] = qm, t[Gg](), t[Uc](13.948, 31.075), t[Qc](25.914, 31.075), t[jx](25.914, 31.075, 25.914, 31.075), t[Qc](25.914, 34.862), t[jx](25.914, 34.862, 25.914, 34.862), t[Qc](13.948, 34.862), t[jx](13.948, 34.862, 13.948, 34.862), t[Qc](13.948, 31.075), t[jx](13.948, 31.075, 13.948, 31.075), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](29.679, 35.972), t[Mx](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[Qc](11.456, 37.244), t[Mx](10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[Qc](10.183, 36.136), t[Mx](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[Qc](28.407, 34.863), t[Mx](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[Qc](29.678, 35.972), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](.196, 29.346), t[Mx](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[Qc](37.936, 31.075), t[Mx](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[Qc](39.665, 27.174), t[Qc](.196, 27.174), t[Qc](.196, 29.346), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Lm, t[Gg](), t[Uc](37.937, 3.884), t[Qc](1.926, 3.884), t[Mx](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[Qc](.19699999999999984, 27.12), t[Qc](39.666000000000004, 27.12), t[Qc](39.666000000000004, 5.615), t[Mx](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](6.9609, 2.9341, 32.9008, 28.874);
                i[ug](0, Gm), i[ug](1, Ym), t[Tx] = i, t[Gg](), t[Uc](35.788, 6.39), t[Qc](4.074, 6.39), t[Mx](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[Qc](2.702, 24.616), t[Qc](37.159, 24.616), t[Qc](37.159, 7.763), t[Mx](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx]()
            }},group: {draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](47.75, 0), t[Qc](47.75, 40), t[Qc](0, 40), t[m_](), t[$x](), t[h_](0, 0), t[h_](0, 0), t[Sf](1, 1), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Cx](), t[Tx] = qm, t[Gg](), t[Uc](10.447, 26.005), t[Qc](18.847, 26.005), t[jx](18.847, 26.005, 18.847, 26.005), t[Qc](18.847, 28.663), t[jx](18.847, 28.663, 18.847, 28.663), t[Qc](10.447, 28.663), t[jx](10.447, 28.663, 10.447, 28.663), t[Qc](10.447, 26.005), t[jx](10.447, 26.005, 10.447, 26.005), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](21.491, 29.443), t[Mx](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[Qc](8.698, 30.338), t[Mx](8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[Qc](7.8020000000000005, 29.557000000000002), t[Mx](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t[Qc](20.597, 28.662000000000003), t[Mx](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[Qc](21.491, 29.443), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](.789, 24.79), t[Mx](.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[Qc](27.289, 26.005), t[Mx](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[Qc](28.504, 23.267), t[Qc](.789, 23.267), t[Qc](.789, 24.79), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Lm, t[Gg](), t[Uc](27.289, 6.912), t[Qc](2.006, 6.912), t[Mx](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[Qc](.7889999999999997, 23.227), t[Qc](28.503999999999998, 23.227), t[Qc](28.503999999999998, 8.126), t[Mx](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](5.54, 6.2451, 23.7529, 24.458);
                i[ug](0, Gm), i[ug](1, Ym), t[Tx] = i, t[Gg](), t[Uc](25.78, 8.671), t[Qc](3.514, 8.671), t[Mx](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t[Qc](2.549, 21.466), t[Qc](26.743, 21.466), t[Qc](26.743, 9.636), t[Mx](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = qm, t[Gg](), t[Uc](27.053, 33.602), t[Qc](36.22, 33.602), t[jx](36.22, 33.602, 36.22, 33.602), t[Qc](36.22, 36.501), t[jx](36.22, 36.501, 36.22, 36.501), t[Qc](27.053, 36.501), t[jx](27.053, 36.501, 27.053, 36.501), t[Qc](27.053, 33.602), t[jx](27.053, 33.602, 27.053, 33.602), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](39.104, 37.352), t[Mx](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[Qc](25.143, 38.327), t[Mx](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[Qc](24.166, 37.477999999999994), t[Mx](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t[Qc](38.131, 36.501), t[Mx](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[Qc](39.105, 37.352), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Rm, t[Gg](), t[Uc](16.514, 32.275), t[Mx](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[Qc](45.433, 33.601), t[Mx](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[Qc](46.758, 30.607999999999997), t[Qc](16.514, 30.607999999999997), t[Qc](16.514, 32.275), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Lm, t[Gg](), t[Uc](45.433, 12.763), t[Qc](17.839, 12.763), t[Mx](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[Qc](16.514, 30.57), t[Qc](46.757999999999996, 30.57), t[Qc](46.757999999999996, 14.088), t[Mx](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx](), i = t[_g](21.6973, 12.0352, 41.5743, 31.9122), i[ug](0, Gm), i[ug](1, Ym), t[Tx] = i, t[Gg](), t[Uc](43.785, 14.683), t[Qc](19.486, 14.683), t[Mx](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t[Qc](18.433, 28.649), t[Qc](44.837, 28.649), t[Qc](44.837, 15.734), t[Mx](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Cx](), t[Hm] = .5, t[Gg](), t[Uc](23.709, 36.33), t[Qc](4.232, 36.33), t[Qc](4.232, 27.199), t[Qc](5.304, 27.199), t[Qc](5.304, 35.259), t[Qc](23.709, 35.259), t[Qc](23.709, 36.33), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx]()
            }},subnetwork: {draw: function(t) {
                t[Cx](), t[h_](0, 0), t[Gg](), t[Uc](0, 0), t[Qc](60.75, 0), t[Qc](60.75, 42.125), t[Qc](0, 42.125), t[m_](), t[$x](), t[h_](0, .26859504132231393), t[Sf](.6694214876033058, .6694214876033058), t[h_](0, 0), t[Dx] = Jg, t[Ng] = nx, t[zg] = _x, t[Zg] = 4, t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx]();
                var i = t[_g](43.6724, -2.7627, 43.6724, 59.3806);
                i[ug](0, "rgba(159, 160, 160, 0.7)"), i[ug](.9726, Dm), t[Tx] = i, t[Gg](), t[Uc](61.732, 16.509), t[Mx](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[Mx](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[Mx](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t[Mx](9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[Mx](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t[Mx](23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t[Mx](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[Mx](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[Mx](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[Mx](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t[Mx](85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Tx] = qm, t[Gg](), t[Uc](34.966, 44.287), t[Qc](45.112, 44.287), t[jx](45.112, 44.287, 45.112, 44.287), t[Qc](45.112, 47.497), t[jx](45.112, 47.497, 45.112, 47.497), t[Qc](34.966, 47.497), t[jx](34.966, 47.497, 34.966, 47.497), t[Qc](34.966, 44.287), t[jx](34.966, 44.287, 34.966, 44.287), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Xm, t[Gg](), t[Uc](48.306, 48.439), t[Mx](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t[Qc](32.854, 49.52), t[Mx](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t[Qc](31.771, 48.578), t[Mx](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[Qc](47.226, 47.497), t[Mx](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[Qc](48.306, 48.439), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Wm, t[Gg](), t[Uc](23.302, 42.82), t[Mx](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t[Qc](55.308, 44.287), t[Mx](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[Qc](56.775, 40.98), t[Qc](23.302, 40.98), t[Qc](23.302, 42.82), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Tx] = Lm, t[Gg](), t[Uc](55.307, 21.229), t[Qc](24.771, 21.229), t[Mx](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[Qc](23.301000000000002, 40.933), t[Qc](56.774, 40.933), t[Qc](56.774, 22.695), t[Mx](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Cx](), t[Cx](), t[Yx](), t[Cx](), t[Yx](), t[Yx](), t[Cx](), i = t[_g](29.04, 20.4219, 51.0363, 42.4181), i[ug](0, Gm), i[ug](1, Ym), t[Tx] = i, t[Gg](), t[Uc](53.485, 23.353), t[Qc](26.592, 23.353), t[Mx](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t[Qc](25.427, 38.807), t[Qc](54.647, 38.807), t[Qc](54.647, 24.517000000000003), t[Mx](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[m_](), t[Da](), t[Ba](), t[Yx](), t[Yx](), t[Yx]()
            }}};
    for (var aq in fq)
        gn(Vm + aq, fq[aq]);
    var _q = function() {
        this[X_] = !1;
        var t = this._fi;
        t[Pf]();
        var i = this._82.x + this[O_] / 2, n = this._82.y + this[O_] / 2, e = this._82[fa] - this[O_], s = this._82[aa] - this[O_], h = Rn[Bh](this, {x: i,y: n});
        Hn(t, h.x, h.y, !0), h = Rn[Bh](this, {x: i + e,y: n}), Hn(t, h.x, h.y), h = Rn[Bh](this, {x: i + e,y: n + s}), Hn(t, h.x, h.y), h = Rn[Bh](this, {x: i,y: n + s}), Hn(t, h.x, h.y), this.__lpPointer && (h = Rn[Bh](this, {x: this._pointerX,y: this._pointerY}), Hn(t, h.x, h.y)), this[O_] && t[T_](this[O_] / 2)
    }, cq = 20, uq = {_gm: !1,_jl: null,_nbr: 0,_l8: -1,_la: null,_eg: function(t) {
            this._jl || (this._jl = [], this._jo = BD), this._jl[Xh](t), this._dt(), this._k6()
        },_k6: function() {
            if (!this._la) {
                var t = this;
                this._la = setTimeout(function i() {
                    return t._dt() !== !1 ? void (t._la = setTimeout(i, t._gi())) : void delete t._la
                }, this._gi())
            }
        },_gi: function() {
            return Math[Ea](cq, this._jl[this._l8][Um])
        },_dt: function() {
            return this._f9(this._l8 + 1)
        },_f9: function(t) {
            if (this._gm)
                t %= this._nbr;
            else if (t >= this._jl[zh])
                return !1;
            if (this._l8 == t)
                return !1;
            this._l8 = t;
            var i = this._jl[this._l8], n = i._nbache;
            return n || (i._nbache = n = Bi(this[fa], this[aa]), n.g[y_](i[Ra], 0, 0), n._pixels = i._pixels), this._k4 = n, this[S_] = !0, this._eh()
        },_nbq: function() {
            return this._jl ? (this._gm = !0, this._nbr = this._jl[zh], 1 == this._nbr ? this._eh() : void this._k6()) : void this._he()
        },_lt: function() {
            this._la && (clearTimeout(this._la), delete this._la)
        },_eh: function() {
            var t = this._dispatcher[vb];
            if (!t || !t[zh])
                return !1;
            for (var i = new BB(this, tg, ig, this._k4), n = 0, e = t[zh]; e > n; n++) {
                var s = t[n];
                s[xr]._jd && s[xr]._jd._i0ed ? (t[Rh](n, 1), n--, e--) : s[Mr][Bh](s[xr], i)
            }
            return t[zh] > 0
        },_nal: function(t, i) {
            this._dispatcher[Bd](t, i), this._gm && !this._la && this._k6()
        },_6l: function(t, i) {
            this._dispatcher[xb](t, i), this._dispatcher._n8g() || this._lt()
        },_i0: function() {
            this._lt(), this._dispatcher[Pf]()
        },_f8: function() {
            var t = this._k4._n8ufferedImage;
            return t || (this._k4._n8ufferedImage = t = new hq(this._k4, 1)), t
        }}, oq = function(t) {
        return t[Qm](function(t, i) {
            return 2 * t + i
        }, 0)
    }, dq = function(t) {
        for (var i = [], n = 7; n >= 0; n--)
            i[Xh](!!(t & 1 << n));
        return i
    }, lq = function(t) {
        this[Ra] = t, this[Jm] = this[Ra][zh], this[Zm] = 0, this[Km] = function() {
            if (this[Zm] >= this[Ra][zh])
                throw new Error("Attempted to read past end of stream.");
            return 255 & t[yc](this[Zm]++)
        }, this[tw] = function(t) {
            for (var i = [], n = 0; t > n; n++)
                i[Xh](this[Km]());
            return i
        }, this[iw] = function(t) {
            for (var i = "", n = 0; t > n; n++)
                i += String[gc](this[Km]());
            return i
        }, this[nw] = function() {
            var t = this[tw](2);
            return (t[1] << 8) + t[0]
        }
    }, bq = function(t, i) {
        for (var n, e, s = 0, h = function(t) {
            for (var n = 0, e = 0; t > e; e++)
                i[yc](s >> 3) & 1 << (7 & s) && (n |= 1 << e), s++;
            return n
        }, r = [], f = 1 << t, a = f + 1, _ = t + 1, c = [], u = function() {
            c = [], _ = t + 1;
            for (var i = 0; f > i; i++)
                c[i] = [i];
            c[f] = [], c[a] = null
        }; ; )
            if (e = n, n = h(_), n !== f) {
                if (n === a)
                    break;
                if (n < c[zh])
                    e !== f && c[Xh](c[e][Lh](c[n][0]));
                else {
                    if (n !== c[zh])
                        throw new Error(ew);
                    c[Xh](c[e][Lh](c[e][0]))
                }
                r[Xh][lr](r, c[n]), c[zh] === 1 << _ && 12 > _ && _++
            } else
                u();
        return r
    }, vq = function(t, i) {
        i || (i = {});
        var n = function(i) {
            for (var n = [], e = 0; i > e; e++)
                n[Xh](t[tw](3));
            return n
        }, e = function() {
            var i, n;
            n = "";
            do
                i = t[Km](), n += t[iw](i);
            while (0 !== i);
            return n
        }, s = function() {
            var e = {};
            if (e[sw] = t[iw](3), e[hw] = t[iw](3), rw !== e[sw])
                throw new Error(fw);
            e[fa] = t[nw](), e[aa] = t[nw]();
            var s = dq(t[Km]());
            e[aw] = s[_w](), e[cw] = oq(s[Rh](0, 3)), e[uw] = s[_w](), e[ow] = oq(s[Rh](0, 3)), e[dw] = t[Km](), e[lw] = t[Km](), e[aw] && (e[fc] = n(1 << e[ow] + 1)), i[bw] && i[bw](e)
        }, h = function(n) {
            var s = function(n) {
                var e = (t[Km](), dq(t[Km]()));
                n[vw] = e[Rh](0, 3), n[sc] = oq(e[Rh](0, 3)), n[yw] = e[_w](), n[ic] = e[_w](), n[ec] = t[nw](), n[nc] = t[Km](), n[xw] = t[Km](), i[gw] && i[gw](n)
            }, h = function(t) {
                t[mw] = e(), i[ww] && i[ww](t)
            }, r = function(n) {
                t[Km](), n[kw] = t[tw](12), n[pw] = e(), i[jw] && i[jw](n)
            }, f = function(n) {
                var s = function(n) {
                    t[Km](), n[Mw] = t[Km](), n[Ew] = t[nw](), n[xw] = t[Km](), i[Sw] && i[Sw][Pw] && i[Sw][Pw](n)
                }, h = function(t) {
                    t[Iw] = e(), i[Sw] && i[Sw][t[Cw]] && i[Sw][t[Cw]](t)
                };
                switch (t[Km](), n[Cw] = t[iw](8), n[Tw] = t[iw](3), n[Cw]) {
                    case "NETSCAPE":
                        s(n);
                        break;
                    default:
                        h(n)
                }
            }, a = function(t) {
                t[Ra] = e(), i[Mw] && i[Mw](t)
            };
            switch (n[Ow] = t[Km](), n[Ow]) {
                case 249:
                    n[$w] = gw, s(n);
                    break;
                case 254:
                    n[$w] = ww, h(n);
                    break;
                case 1:
                    n[$w] = jw, r(n);
                    break;
                case 255:
                    n[$w] = Sw, f(n);
                    break;
                default:
                    n[$w] = Mw, a(n)
            }
        }, r = function(s) {
            var h = function(t, i) {
                for (var n = new Array(t[zh]), e = t[zh] / i, s = function(e, s) {
                    var h = t[qh](s * i, (s + 1) * i);
                    n[Rh][lr](n, [e * i, i][Lh](h))
                }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], f = 0, a = 0; 4 > a; a++)
                    for (var _ = h[a]; e > _; _ += r[a])
                        s(_, f), f++;
                return n
            };
            s[ac] = t[nw](), s[_c] = t[nw](), s[fa] = t[nw](), s[aa] = t[nw]();
            var r = dq(t[Km]());
            s[hc] = r[_w](), s[Fw] = r[_w](), s[uw] = r[_w](), s[vw] = r[Rh](0, 2), s[Aw] = oq(r[Rh](0, 3)), s[hc] && (s[rc] = n(1 << s[Aw] + 1)), s[Nw] = t[Km]();
            var f = e();
            s[cc] = bq(s[Nw], f), s[Fw] && (s[cc] = h(s[cc], s[fa])), i[Bo] && i[Bo](s)
        }, f = function() {
            var n = {};
            switch (n[zw] = t[Km](), String[gc](n[zw])) {
                case "!":
                    n[Ha] = Bw, h(n);
                    break;
                case ",":
                    n[Ha] = Bo, r(n);
                    break;
                case ";":
                    n[Ha] = Dw, i[Dw] && i[Dw](n);
                    break;
                default:
                    throw new Error(qw + n[zw].toString(16))
            }
            Dw !== n[Ha] && setTimeout(f, 0)
        }, a = function() {
            s(), setTimeout(f, 0)
        };
        a()
    }, yq = "";
    i[rv] && i[rv](Rw, function(t) {
        if (t[Lw] && t[Gw] && t[Yw] && 73 == t[Hw]) {
            var i = kD[Er] + Xw + kD[Ww] + Vw + kD[Uw] + Ma + kD[Qw] + Ma + kD[Jw] + yq;
            kD[_y](i)
        }
    }, !1);
    var xq = Zw;
    yq = Kw + decodeURIComponent("%20website%3A%20demo.qunee.com");
    var gq, mq, wq, kq = t, pq = tk, jq = ik, Mq = nk, Eq = ek, Sq = sk, Pq = hk, Iq = rk, Cq = fk, Tq = ak, Oq = _k, $q = ck, Fq = uk, Aq = ok, Nq = dk, zq = lk, Bq = bk, Dq = vk, qq = yk, Rq = xk, Lq = gk, Gq = mk, Yq = kq[Eq + wk];
    Yq && (mq = "127.0.0.1", Yq[Bh](kq, Zn, Bq), Yq[Bh](kq, Kn, Rq), Yq[Bh](kq, function() {
        Xq && Xq == xq && (nR = !1)
    }, Dq));
    var Hq, Xq, Wq, Vq = 111, Uq = function(t, i) {
        i || (i = jk + jq + Mk);
        try {
            wq[Bh](t, i, 6 * Vq, 1 * Vq)
        } catch (n) {
        }
    }, Qq = !0, Jq = !0, Zq = !0, Kq = !0, tR = !0, iR = !0, nR = !0, eR = oB ? 200 : 1024, sR = function(t, i) {
        return Jn ? Jn(t, i) || "" : void 0
    };
    if (i[xa]) {
        var hR = i[xa](Ek);
        hR[sf][Sk] = Wo, hR[dc] = function(t) {
            var i = t[Pu][Pk], n = mq;
            if ("" === n || Ik == n || Ck == n)
                return void this[Tk][Tk][Wb](this[Tk]);
            var e = i[Ok][gc];
            i[Eq + wk](function() {
                Qn(e) != Hq && (bR[br]._je = null)
            }, Rq), this[Tk][Tk][Wb](this[Tk])
        };
        var rR = i[xa](No);
        rR[sf][fa] = Zo, rR[sf][aa] = Zo, rR[sf][$k] = Xo, rR[Bu](hR), i[$d][Bu](rR)
    }
    if (i[zq + Fk]) {
        var fR = i[zq + Fk](Tq + Ak);
        fR[sf][Sk] = Wo, fR[dc] = function(t) {
            var i = Nk, n = t[Pu][i + zk];
            gq = n[Bk][Kf]();
            var e = n[Oq + $q + Dk + Fq + qk][Aq + Ha];
            wq = e[pq + Rk];
            var s = n[Eq + wk];
            s[Bh](kq, ee, Rq), s[Bh](kq, se, Lq), s[Bh](kq, re, Gq), s[Bh](kq, fe, Dq), s[Bh](kq, te, qq), s[Bh](kq, ne, Gq), s[Bh](kq, he, Rq), s[Bh](kq, ie, Rq), this[Tk][Tk][Wb](this[Tk])
        };
        var rR = i[xa](No);
        rR[sf][fa] = Zo, rR[sf][aa] = Zo, rR[sf][$k] = Xo, rR[Bu](fR), i[$d][Bu](rR)
    }
    var aR = function(t, i, n, e) {
        this[r_] = t, this[Nd] = i, this[ib] = e, this[Pr] = n
    };
    aR[br] = {propertyType: pD[Au]}, N(aR, DB);
    var _R = function(t) {
        this.id = ++iB, this._nb2 = {}, this._iw = {}, t && (this[Lk] = t)
    };
    _R[br] = {_iw: null,getStyle: function(t) {
            return this._iw[t]
        },setStyle: function(t, i) {
            var n = this._iw[t];
            return n === i || n && i && n[yb] && n[yb](i) ? !1 : this._na5(t, i, new aR(this, t, i, n), this._iw)
        },putStyles: function(t, i) {
            for (var n in t) {
                var e = t[n];
                i ? this._iw[n] = e : this[Nu](n, e)
            }
        },_$s: !0,invalidateVisibility: function(t) {
            this._$s = !0, t || (this instanceof uR && this[Gk]() && this[Xc](function(t) {
                t._$s = !0
            }), this._hn() && this[Ah]() && this[Vc](function(t) {
                t[Yk]()
            }))
        },onParentChanged: function() {
            this[Yk]()
        },_hn: function() {
            return !this._45 && this instanceof lR
        },invalidate: function() {
            this[Mr](new BB(this, Hk, Xk))
        },_nb4: null,addUI: function(t, i) {
            if (this._nb4 || (this._nb4 = new mB), this._nb4[Cc](t.id))
                return !1;
            var n = {id: t.id,ui: t,bindingProperties: i};
            this._nb4[ir](n);
            var e = new BB(this, Hk, ir, n);
            return this[Mr](e)
        },removeUI: function(t) {
            if (!this._nb4)
                return !1;
            var i = this._nb4[xl](t.id);
            return i ? (this._nb4[Yh](i), void this[Mr](new BB(this, Hk, Yh, i))) : !1
        },toString: function() {
            return this[Lk] || this.id
        },type: Wk,_45: !1}, N(_R, UB), H(_R[br], [Vk, Er, Uk]), J(_R[br], {enableSubNetwork: {get: function() {
                return this._45
            },set: function(t) {
                if (this._45 != t) {
                    var i = this._45;
                    this._45 = t, this instanceof uR && this._11(), this[Mr](new DB(this, Ao, t, i))
                }
            }},bindingUIs: {get: function() {
                return this._nb4
            }},styles: {get: function() {
                return this._iw
            },set: function(t) {
                if (this._iw != t) {
                    for (var i in this._iw)
                        i in t || (t[i] = n);
                    this[Qk](t), this._iw = t
                }
            }}});
    var cR = function(t, i, n) {
        this.id = ++iB, this._nb2 = {}, this._iw = {}, n && (this[Lk] = n), this[Wc] = t, this[Hc] = i, this[Jk]()
    };
    cR[br] = {$uiClass: hs,_iy: null,_hp: null,_iz: null,_hq: null,_ei: !1,type: Zk,otherNode: function(t) {
            return t == this[Nc] ? this.to : t == this.to ? this[Nc] : void 0
        },connect: function() {
            if (this._ei)
                return !1;
            if (!this[Wc] || !this[Hc])
                return !1;
            if (this._ei = !0, this[Wc] == this[Hc])
                return void this[Wc]._hm(this);
            pe(this[Hc], this), we(this[Wc], this), _e(this[Wc], this, this[Hc]);
            var t = this[Fc], i = this[Oc];
            if (t != i) {
                var n;
                this[Wc]._dg && (ue(t, this, i), n = !0), this[Hc]._dg && (de(i, this, t), n = !0), n && _e(t, this, i)
            }
        },disconnect: function() {
            if (!this._ei)
                return !1;
            if (this._ei = !1, this[Wc] == this[Hc])
                return void this[Wc]._nbt(this);
            ke(this[Wc], this), je(this[Hc], this), ce(this[Wc], this, this[Hc]);
            var t = this[Fc], i = this[Oc];
            if (t != i) {
                var n;
                this[Wc]._dg && (oe(t, this, i), n = !0), this[Hc]._dg && (le(i, this, t), n = !0), n && ce(t, this, i)
            }
        },isConnected: function() {
            return this._ei
        },isInvalid: function() {
            return !this[Wc] || !this[Hc]
        },isLooped: function() {
            return this[Wc] == this[Hc]
        },getEdgeBundle: function(t) {
            return t ? this._3f() : this[zc]() ? this[Wc]._47 : this[Wc][$c](this[Hc])
        },hasEdgeBundle: function() {
            var t = this[$c](!0);
            return t && t[Kk][zh] > 1
        },_3f: function() {
            var t = this[Fc], i = this[Oc];
            return t == i ? this[Wc]._dg || this[Hc]._dg ? null : this[Wc]._47 : this[Fc][$c](this[Oc])
        },_9j: null,hasPathSegments: function() {
            return this._9j && !this._9j[H_]()
        },isBundleEnabled: function() {
            return this[tp] && !this[go]()
        },firePathChange: function(t) {
            this[Mr](new DB(this, ip, t))
        },addPathSegement: function(t, i, n) {
            var e = new nq(i || JD, t);
            this._9j || (this._9j = new mB), this._9j[ir](e, n), this[np](e)
        },removePathSegementByIndex: function(t) {
            if (!this._9j)
                return !1;
            var i = this._9j[vl](t);
            i && (this._9j[Yh](i), this[np](i))
        },removePathSegement: function(t) {
            return this._9j ? (this._9j[Yh](t), void this[np](t)) : !1
        },movePathSegment: function(t, i, n) {
            if (!this._9j)
                return !1;
            if (t = t || 0, i = i || 0, kD[Sg](n)) {
                var e = this._9j[vl](n);
                return e ? (e[Fv](t, i), void this[np]()) : !1
            }
            l(function(n) {
                n[Fv](t, i)
            }), this[np]()
        }}, N(cR, _R), J(cR[br], {pathSegments: {get: function() {
                return this._9j
            },set: function(t) {
                this._9j = t, this[np]()
            }},from: {get: function() {
                return this[Wc]
            },set: function(t) {
                if (this[Wc] != t) {
                    var i = new DB(this, Nc, t, this[Wc]);
                    this[jr](i) !== !1 && (this[Hb](), this[Wc] = t, this[Jk](), this[Mr](i))
                }
            }},to: {get: function() {
                return this[Hc]
            },set: function(t) {
                if (this[Hc] != t) {
                    var i = new DB(this, ep, t, this[Hc]);
                    this[jr](i) !== !1 && (this[Hb](), this[Hc] = t, this[Jk](), this[Mr](i))
                }
            }},fromAgent: {get: function() {
                return this[Wc] ? this[Wc]._dg || this[Wc] : null
            }},toAgent: {get: function() {
                return this[Hc] ? this[Hc]._dg || this[Hc] : null
            }}}), H(cR[br], [jo, {name: tp,value: !0}, Eo]);
    var uR = function(t, i, n) {
        this.id = ++iB, this._nb2 = {}, this._iw = {}, t && (this[Lk] = t), this[Mu] = sp, this[A_] = IB[Hl], this[hp] = {x: i || 0,y: n || 0}, this._linkedNodes = {}
    };
    uR[br] = {$uiClass: rs,_dg: null,forEachEdge: function(t, i, n) {
            return !n && this._kd && this._kd[uc](t, i) === !1 ? !1 : Ee(this, t, i)
        },forEachOutEdge: function(t, i) {
            return Se(this, t, i)
        },forEachInEdge: function(t, i) {
            return Pe(this, t, i)
        },getEdges: function() {
            var t = [];
            return this[Xc](function(i) {
                t[Xh](i)
            }), t
        },_hj: null,_f4: null,_iv: null,_hk: null,_nag: 0,_8w: 0,hasInEdge: function() {
            return null != this._hj
        },hasOutEdge: function() {
            return null != this._f4
        },hasEdge: function() {
            return null != this._hj || null != this._f4 || this[rp]()
        },linkedWith: function(t) {
            return t[Nc] == this || t.to == this || t[Fc] == this || t[Oc] == this
        },hasEdgeWith: function(t) {
            var i = this[$c](t);
            return i && i[Kk][zh] > 0
        },_kd: null,_47: null,hasLoops: function() {
            return this._kd && this._kd[zh] > 0
        },_hm: function(t) {
            return this._kd || (this._kd = new mB, this._47 = new PL(this, this, this._kd)), this._47._hs(t)
        },_nbt: function(t) {
            return this._47 ? this._47._n8x(t) : void 0
        },getEdgeBundle: function(t) {
            return t == this ? this._47 : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },_6g: function() {
            return this._92 && this._92[zh]
        },_5c: function() {
            return this._7v && this._7v[zh]
        },_8x: function() {
            return this._6g() || this._5c()
        },_7v: null,_92: null,_n8k: function() {
            var t = this._dg, i = ae(this);
            if (t != i) {
                var n = Me(this);
                this._97(i), n[uc](function(t) {
                    var i = t[Fc], n = t[Oc], t = t[ju], e = t[Wc]._dg, s = t[Hc]._dg;
                    i != n && (i && oe(i, t, n || t[Hc]), n && le(n, t, i || t[Wc])), e != s && (e && ue(e, t, s || t[Hc]), s && de(s, t, e || t[Wc]), _e(e || t[Wc], t, s || t[Hc]))
                }, this)
            }
        },onParentChanged: function() {
            this[Yk](), this._n8k()
        },_7w: null,_11: function() {
            var t;
            if (this._45 ? t = null : (t = this._dg, t || this._fv !== !1 || (t = this)), this._7w == t)
                return !1;
            if (this._7w = t, this._f5 && this._f5._j0[zh])
                for (var i, n = this._f5._j0, e = 0, s = n[zh]; s > e; e++)
                    i = n[e], i instanceof uR && i._97(t)
        },setLocation: function(t, i) {
            if (this[hp] && this[hp].x == t && this[hp].y == i)
                return !1;
            var n = new DB(this, fp, this[hp], {x: t,y: i});
            return this[jr](n) === !1 ? !1 : (this[hp] ? (this[hp].x = t, this[hp].y = i) : this[hp] = new pB(t, i), this[Mr](n), !0)
        },_dl: null,addFollower: function(t) {
            return null == t ? !1 : t[ap] = this
        },removeFollower: function(t) {
            return this._dl && this._dl[Io](t) ? t[ap] = null : !1
        },hasFollowers: function() {
            return this._dl && !this._dl[H_]()
        },toFollowers: function() {
            return this[Dc]() ? this._dl[mo]() : null
        },clearFollowers: function() {
            this[Dc]() && (this[_p](), l(this[_p](), function(t) {
                t[ap] = null
            }))
        },getFollowerIndex: function(t) {
            return this._dl && this._dl[Io](t) ? this._dl[Wh](t) : -1
        },setFollowerIndex: function(t, i) {
            return this._dl && this._dl[Io](t) ? void this._dl[Yc](t, i) : -1
        },getFollowerCount: function() {
            return null == !this._dl ? 0 : this._dl[zh]
        },_95: function() {
            return this._dl ? this._dl : (this._dl = new mB, this._dl)
        },isFollow: function(t) {
            if (!t || !this._host)
                return !1;
            for (var i = this._host; i; ) {
                if (i == t)
                    return !0;
                i = i._host
            }
            return !1
        },_97: function(t) {
            return t == this._dg ? !1 : (this._dg = t, this[Yk](), void this._11())
        },type: cp}, N(uR, _R), J(uR[br], {loops: {get: function() {
                return this._kd
            }},edgeCount: {get: function() {
                return this._nag + this._8w
            }},agentNode: {get: function() {
                return this._dg || this
            }},host: {set: function(t) {
                if (this == t || t == this._host)
                    return !1;
                var i = new DB(this, ap, this._host, t);
                if (!1 === this[jr](i))
                    return !1;
                var n = null, e = null, s = this._host;
                if (null != t && (n = new DB(t, up, null, this), !1 === t[jr](n)))
                    return !1;
                if (null != s && (e = new DB(s, op, null, this), !1 === s[jr](e)))
                    return !1;
                if (this._host = t, null != t) {
                    var h = t._95();
                    h[ir](this)
                }
                if (null != s) {
                    var h = s._95();
                    h[Yh](this)
                }
                return this[Mr](i), null != t && t[Mr](n), null != s && s[Mr](e), !0
            },get: function() {
                return this._host
            }}}), H(uR[br], [fp, dp, tg, Xa, lp]), J(uR[br], {x: {get: function() {
                return this[fp].x
            },set: function(t) {
                t != this[fp].x && (this[fp] = new pB(t, this[fp].y))
            }},y: {get: function() {
                return this[fp].y
            },set: function(t) {
                t != this[fp].y && (this[fp] = new pB(this[fp].x, t))
            }}});
    var oR = function(t, i) {
        t instanceof sq && (i = t, t = n), z(this, oR, [t]), this[bp] = i || new sq, this[tg] = this[bp], this[lp] = null, this[Vk] = nh, xB[vp] || (xB[vp] = {}, xB[vp][yR[yp]] = !1), this[Qk](xB[vp])
    };
    oR[br] = {$uiClass: nh,type: xp,moveTo: function(t, i) {
            this[gp][Uc](t, i), this[np]()
        },lineTo: function(t, i) {
            this[gp][Qc](t, i), this[np]()
        },quadTo: function(t, i, n, e) {
            this[gp][Jc](t, i, n, e), this[np]()
        },curveTo: function(t, i, n, e, s, h) {
            this[gp][Zc](t, i, n, e, s, h), this[np]()
        },arcTo: function(t, i, n, e, s) {
            this[gp][px](t, i, n, e, s), this[np]()
        },closePath: function() {
            this[gp][m_](), this[np]()
        },clear: function() {
            this[gp][Pf](), this[np]()
        },firePathChange: function() {
            this[gp]._6f = !0, this[Mr](new DB(this, ip))
        }}, N(oR, uR), H(oR[br], [gp]), J(oR[br], {pathSegments: {get: function() {
                return this[gp]._f6
            }},length: {get: function() {
                return this[gp][zh]
            }}}), kD[mp] = oR;
    var dR = {_ju: {},register: function(t, i) {
            dR._ju[t] = i
        },getShape: function(t, i, e, s, h, r) {
            s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
            var f = dR._ju[t];
            return f ? f[wp] instanceof Function ? f[wp](i, e, s, h, r) : f : void 0
        },getRect: function(t, i, n, e, s, h, r) {
            return Ie(r || new sq, t, i, n, e, s, h)
        },getAllShapes: function(t, i, n, e, s) {
            var h = {};
            for (var r in dR._ju) {
                var f = dR[xo](r, t, i, n, e, s);
                f && (h[r] = f)
            }
            return h
        },createRegularShape: function(t, i, n, e, s) {
            return Ne(t, i, n, e, s)
        }};
    Ue(), Qe[br] = {type: kp}, N(Qe, oR), kD[pp] = Qe, Je[br] = {_g1: function(t) {
            var i, n = t._jd;
            i = n ? n._f5 : this[Yb];
            var e = i[Wh](t);
            if (0 > e)
                throw new Error(Vb + t + "' not exist in the box");
            for (; e >= 0; ) {
                if (0 == e)
                    return n instanceof uR ? n : null;
                e -= 1;
                var h = i[vl](e);
                if (h = s(h))
                    return h
            }
            return null
        },forEachNode: function(t, i) {
            this[uc](function(n) {
                return n instanceof uR && t[Bh](i, n) === !1 ? !1 : void 0
            })
        },_3x: null}, N(Je, JB), J(Je[br], {propertyChangeDispatcher: {get: function() {
                return this._$u
            }},randomNode: {get: function() {
                return this._l4Model[jp]
            }},currentSubNetwork: {get: function() {
                return this._3x
            },set: function(t) {
                if (t && !t[Ao] && (t = null), this._3x != t) {
                    var i = this._3x;
                    this._3x = t, this._$u[Mr](new DB(this, Mp, t, i))
                }
            }}}), xB[Ep] = pD[Sp], xB[Pp] = 5, xB[Ip] = !0, xB[Cp] = {width: 60,height: 60};
    var lR = function(t, i, e) {
        z(this, lR, arguments), (i === n || e === n) && (this[hp][Tp] = !0), this[Op] = xB[Ep], this[C_] = xB[Pp], this[Mu] = fq[$p], this[Fp] = xB[Cp], this[Ap] = xB[Ip]
    };
    lR[br] = {type: Np,$uiClass: Js,_na2: function() {
            return !this._fv && !this._dg
        },forEachOutEdge: function(t, i, n) {
            return Se(this, t, i) === !1 ? !1 : !n && this._na2() && this._7v ? this._7v[uc](t, i) : void 0
        },forEachInEdge: function(t, i, n) {
            return Pe(this, t, i) === !1 ? !1 : !n && this._na2() && this._92 ? this._92[uc](t, i) : void 0
        },forEachEdge: function(t, i, n) {
            return B(this, lR, Xc, arguments) === !1 ? !1 : n || n || !this._na2() ? void 0 : this._92 && this._92[uc](t, i) === !1 ? !1 : this._7v ? this._7v[uc](t, i) : void 0
        },hasInEdge: function(t) {
            return t ? null != this._hj : null != this._hj || this._6g()
        },hasOutEdge: function(t) {
            return t ? null != this._f4 : null != this._f4 || this._5c()
        },hasEdge: function(t) {
            return t ? null != this._hj || null != this._f4 : null != this._hj || null != this._f4 || this._8x()
        }}, N(lR, uR), J(lR[br], {expanded: {get: function() {
                return this._fv
            },set: function(t) {
                if (this._fv != t) {
                    var i = new DB(this, Ap, t, this._fv);
                    this[jr](i) !== !1 && (this._fv = t, this._11(), this[Mr](i), this._dg || Ze[Bh](this))
                }
            }}}), H(lR[br], [zp, Bp, s_, Dp]), kD[qp] = lR, Ke[br][Ha] = Rp, N(Ke, uR), kD[Lp] = Ke;
    var bR = function(t) {
        this._j8 = new SB, this._82 = new SB, this._fi = new SB, this.id = ++iB, t && (this[Ra] = t)
    };
    bR[br] = {invalidate: function() {
            this[Gp]()
        },_1h: !0,_j8: null,_82: null,_fi: null,_nac: !1,_ja: 1,_jc: 1,_hf: !0,_7y: 0,_6i: 0,_jd: null,_na4: null,borderColor: Yp,borderLineDash: null,borderLineDashOffset: null,syncSelection: !0,syncSelectionStyles: !0,_1b: function() {
            this[Hp] = ai(this[lp], this._7y, this._6i)
        },setMeasuredBounds: function(t, i, n, e) {
            return t instanceof Object && (n = t.x, e = t.y, i = t[aa], t = t[fa]), this._j8[fa] == t && this._j8[aa] == i && this._j8.x == n && this._j8.y == e ? !1 : void this._j8[pr](n || 0, e || 0, t || 0, i || 0)
        },initialize: function() {
        },measure: function() {
        },draw: function() {
        },_7r: function(t, i, n) {
            n[Bg] == pD[ux] ? (t[Hx] = n[Cg], t[Xx] = n[Tg] * i, t[Wx] = (n[Og] || 0) * i, t[Vx] = (n[$g] || 0) * i) : this._2g(t, i, n)
        },_2g: function(t, i, n) {
            var e = n[Ag] || 0;
            n[Xp] && (t[Tx] = n[Xp], t[Wp](this._82.x - e / 2, this._82.y - e / 2, this._82[fa] + e, this._82[aa] + e)), t[Dx] = n[Cg], t[La] = e, t[Vp](this._82.x - e / 2, this._82.y - e / 2, this._82[fa] + e, this._82[aa] + e)
        },_je: function(t, i, n, e) {
            if (!this._hf)
                return !1;
            if (this[Up] || (n = this[Qp]), (n && !this[Jp] || !e) && (e = this), t[Cx](), t[h_](this.$x, this.$y), this[M_] && this[E_] && t[Xa](this[E_]), (this[Zp] || this[Kp]) && t[h_](this[Zp], this[Kp]), this[k_] && t[Xa](this[k_]), this[w_] && this._na4 && t[h_](-this._na4.x, -this._na4.y), this[Hx] && (t[Hx] = this[Hx], t[Xx] = this[Xx] * i, t[Wx] = this[Wx] * i, t[Vx] = this[Vx] * i), n && e[Bg] == pD[tj] && (this._2g(t, i, e), n = !1), this._$q() && this._mhShape && !this._mhShape._empty) {
                this._mhShape[Ta]();
                var s = {lineWidth: this[O_],strokeStyle: this[ij],lineDash: this[nj],lineDashOffset: this[ej],fillColor: this[sj],fillGradient: this._n8ackgroundGradient,lineCap: nx,lineJoin: Aa};
                this._mhShape[Za](t, i, s, n, e), n = !1, t[Hx] = Jg
            }
            t[Gg](), this[Za](t, i, n, e), t[Yx]()
        },invalidateData: function() {
            this[hj] = !0, this._1h = !0
        },invalidateSize: function() {
            this[S_] = !0, this._1h = !0
        },invalidateRender: function() {
            this._1h = !0
        },_53: function() {
        },_$q: function() {
            return this[sj] || this[rj] || this[O_]
        },_4g: function() {
            return this[sj] || this[rj]
        },doValidate: function() {
            return this[hj] && (this[hj] = !1, this[fj]() !== !1 && (this[S_] = !0)), this[S_] && this[aj] && this[aj](), Gn[Bh](this) ? (this[X_] = !0, this[_j] && this[_j](), !0) : this[cj] ? (this[cj] = !1, !0) : void 0
        },validate: function() {
            var t = this._hf;
            return this[uj] && (this[uj] = !1, this._hf = this[oj], !this._hf || (this[Y_] || this[dj]) && this._53() !== !1 || (this._hf = !1), !this._hf) ? t : this._hf ? (this._1h = !1, this._nac || (this[lj](), this._nac = !0), this[bj]()) : t
        },_hg: function(t, i, n, e) {
            if (t -= this.$x, i -= this.$y, !this._fi[Fa](t, i, n))
                return !1;
            var s = Ln[Bh](this, {x: t,y: i});
            return t = s.x, i = s.y, !e && this._$q() && this._mhShape && this._mhShape._hg(t, i, n, !1, this[O_], this[sj] || this[rj]) ? !0 : this._dn ? this._dn(t, i, n) : this._j8[Fa](t, i, n)
        },onDataChanged: function() {
            this[hj] = !0, this._1h = !0, this[uj] = !0
        },getBounds: function() {
            var t = this._fi[Hh]();
            return t[kx](this.x, this.y), this[Tc] && (this[Tc][Xa] && $i(t, this[Tc][Xa], t), t[kx](this[Tc].x || 0, this[Tc].y || 0)), t
        },destroy: function() {
            this._i0ed = !0
        }}, J(bR[br], {data: {get: function() {
                return this[Y_]
            },set: function(t) {
                if (this[Y_] != t) {
                    var i = this[Y_];
                    this[Y_] = t, this[vj](t, i)
                }
            }},parent: {get: function() {
                return this._jd
            }}}), is(bR[br], {visible: {value: !0,validateFlags: [yj]},showEmpty: {validateFlags: [yj]},anchorPosition: {value: IB[Hl],validateFlags: [xj]},position: {value: IB[Hl],validateFlags: [gj]},offsetX: {value: 0,validateFlags: [gj]},offsetY: {value: 0,validateFlags: [gj]},layoutByAnchorPoint: {value: !0,validateFlags: [Gv, xj]},padding: {value: 0,validateFlags: [Gv]},border: {value: 0,validateFlags: [Gv]},borderRadius: {value: xB[vx]},showPointer: {value: !1,validateFlags: [Gv]},pointerX: {value: 0,validateFlags: [Gv]},pointerY: {value: 0,validateFlags: [Gv]},pointerWidth: {value: xB[yx]},backgroundColor: {validateFlags: [Gv]},backgroundGradient: {validateFlags: [Gv, mj]},selected: {value: !1,validateFlags: [Gv]},selectionBorder: {value: xB[dx],validateFlags: [Gv]},selectionShadowBlur: {value: xB[lx],validateFlags: [Gv]},selectionColor: {value: xB[bx],validateFlags: [Gv]},selectionType: {value: xB[cx],validateFlags: [Gv]},selectionShadowOffsetX: {value: 0,validateFlags: [Gv]},selectionShadowOffsetY: {value: 0,validateFlags: [Gv]},shadowBlur: {value: 0,validateFlags: [Gv]},shadowColor: {validateFlags: [Gv]},shadowOffsetX: {value: 0,validateFlags: [Gv]},shadowOffsetY: {value: 0,validateFlags: [Gv]},renderColorBlendMode: {},renderColor: {},x: {value: 0,validateFlags: [gj]},y: {value: 0,validateFlags: [gj]},rotatable: {value: !0,validateFlags: [wj, Gv]},rotate: {value: 0,validateFlags: [wj, Gv]},_hostRotate: {validateFlags: [wj]},lineWidth: {value: 0,validateFlags: [Zv]}});
    var vR = [pD[$u], pD[Au], pD[Fu]];
    es[br] = {removeBinding: function(t) {
            for (var i = vR[zh]; --i >= 0; ) {
                var n = vR[i], e = this[n];
                for (var s in e) {
                    var h = e[s];
                    Array[hr](h) ? (b(h, function(i) {
                        return i[Pu] == t
                    }, this), h[zh] || delete e[s]) : h[Pu] == t && delete e[s]
                }
            }
        },_21: function(t, i, n) {
            if (!n && (n = this[i[Ib] || pD[$u]], !n))
                return !1;
            var e = n[t];
            e ? (Array[hr](e) || (n[t] = e = [e]), e[Xh](i)) : n[t] = i
        },_2s: function(t, i, n, e, s, h) {
            t = t || pD[$u];
            var r = this[t];
            if (!r)
                return !1;
            var f = {property: i,propertyType: t,bindingProperty: e,target: n,callback: s,invalidateSize: h};
            this._21(i, f, r)
        },onBindingPropertyChange: function(t, i, n, e) {
            var s = this[n || pD[$u]];
            if (!s)
                return !1;
            var h = s[i];
            return h ? (t._1h = !0, ns(t, h, n, e), !0) : !1
        },initBindingProperties: function(t, i) {
            for (var e = vR[zh]; --e >= 0; ) {
                var s = vR[e], h = this[s];
                for (var r in h) {
                    var f = h[r];
                    if (f[Tu]) {
                        var a = f[Pu];
                        if (a) {
                            if (!(a instanceof bR || (a = t[a])))
                                continue
                        } else
                            a = t;
                        var _;
                        _ = i === !1 ? t[Iu](f[Cu], s) : s == pD[Au] ? t[po][Gu](t[Y_], f[Cu]) : t[Y_][f[Cu]], _ !== n && (a[f[Tu]] = _)
                    }
                }
            }
        }};
    var yR = {};
    yR[bx] = kj, yR[dx] = pj, yR[lx] = "selection.shadow.blur", yR[jj] = "selection.shadow.offset.x", yR[Mj] = "selection.shadow.offset.y", yR[cx] = Ej, yR[Sj] = Pj, yR[Ij] = "render.color.blend.mode", yR[Cj] = Tj, yR[Oj] = $j, yR[Fj] = Aj, yR[Nj] = zj, yR[Bj] = Dj, yR[qj] = Rj, yR[Lj] = Gj, yR[Yj] = "shape.line.dash.offset", yR[Hj] = Xj, yR[Wj] = Vj, yR[Uj] = Qj, yR[Jj] = Zj, yR[Kj] = tM, yR[iM] = nM, yR[eM] = sM, yR[hM] = rM, yR[fM] = aM, yR[_M] = cM, yR[uM] = oM, yR[dM] = lM, yR[bM] = "border.line.dash.offset", yR[vx] = vM, yR[yM] = s_, yR[xM] = "image.background.color", yR[gM] = "image.background.gradient", yR[mM] = wM, yR[kM] = yR[pM] = jM, yR[MM] = "image.border.line.dash", yR[EM] = "image.border.line.dash.offset", yR[SM] = yR[PM] = IM, yR[CM] = TM, yR[OM] = $M, yR[FM] = AM, yR[NM] = "label.anchor.position", yR[zM] = BM, yR[DM] = qM, yR[RM] = LM, yR[GM] = YM, yR[HM] = XM, yR[WM] = VM, yR[UM] = QM, yR[JM] = ZM, yR[KM] = tE, yR[iE] = nE, yR[eE] = sE, yR[hE] = rE, yR[fE] = aE, yR[_E] = cE, yR[uE] = "label.background.color", yR[oE] = "label.background.gradient", yR[dE] = lE, yR[bE] = vE, yR[yE] = xE, yR[gE] = "label.shadow.offset.x", yR[mE] = "label.shadow.offset.y", yR[wE] = "group.background.color", yR[kE] = "group.background.gradient", yR[pE] = jE, yR[ME] = EE, yR[SE] = "group.stroke.line.dash", yR[PE] = "group.stroke.line.dash.offset", yR[IE] = "edge.bundle.label.rotate", yR[CE] = "edge.bundle.label.position", yR[TE] = "edge.bundle.label.anchor.position", yR[OE] = "edge.bundle.label.color", yR[$E] = "edge.bundle.label.font.size", yR[FE] = "edge.bundle.label.font.family", yR[AE] = "edge.bundle.label.font.style", yR[NE] = "edge.bundle.label.padding", yR[zE] = "edge.bundle.label.pointer.width", yR[BE] = "edge.bundle.label.pointer", yR[DE] = "edge.bundle.label.radius", yR[qE] = "edge.bundle.label.offset.x", yR[RE] = "edge.bundle.label.offset.y", yR[LE] = "edge.bundle.label.border", yR[GE] = "edge.bundle.label.border.color", yR[YE] = "edge.bundle.label.background.color", yR[HE] = "edge.bundle.label.background.gradient", yR[XE] = "edge.bundle.label.rotatable", yR[WE] = VE, yR[UE] = QE, yR[JE] = ZE, yR[KE] = tS, yR[iS] = nS, yR[eS] = "edge.line.dash.offset", yR[sS] = hS, yR[rS] = fS, yR[aS] = _S, yR[To] = cS, yR[Yu] = uS, yR[oo] = oS, yR[eo] = "edge.split.by.percent", yR[Hu] = dS, yR[Xu] = lS, yR[fo] = bS, yR[_o] = vS, yR[yS] = xS, yR[gS] = mS, yR[wS] = kS, yR[pS] = jS, yR[MS] = "arrow.from.stroke.style", yR[ES] = SS, yR[PS] = "arrow.from.outline.style", yR[IS] = CS, yR[TS] = "arrow.from.line.dash.offset", yR[OS] = "arrow.from.fill.color", yR[$S] = "arrow.from.fill.gradient", yR[FS] = AS, yR[NS] = zS, yR[yp] = BS, yR[DS] = qS, yR[RS] = LS, yR[GS] = YS, yR[HS] = "arrow.to.stroke.style", yR[XS] = WS, yR[VS] = "arrow.to.outline.style", yR[US] = QS, yR[JS] = "arrow.to.line.dash.offset", yR[ZS] = KS, yR[tP] = "arrow.to.fill.gradient", yR[iP] = nP, yR[eP] = sP;
    var xR = new es, gR = pD[$u], mR = pD[Au], wR = !1;
    xR._2s(mR, yR[cx], null, Bg), xR._2s(mR, yR[dx], null, Ag), xR._2s(mR, yR[lx], null, Tg), xR._2s(mR, yR[bx], null, Cg), xR._2s(mR, yR[jj], null, "selectionShadowOffsetX"), xR._2s(mR, yR[Mj], null, "selectionShadowOffsetY"), xR._2s(gR, Er, Ow, Ra), xR._2s(mR, yR[FM], Ow, L_), xR._2s(mR, yR[NM], Ow, lp), xR._2s(mR, yR[zM], Ow, hP), xR._2s(mR, yR[DM], Ow, md), xR._2s(mR, yR[fE], Ow, ly), xR._2s(mR, yR[_E], Ow, ij), xR._2s(mR, yR[uE], Ow, rP), wR || (xR._2s(mR, yR[Cj], null, Xx), xR._2s(mR, yR[Oj], null, Hx), xR._2s(mR, yR[Fj], null, Wx), xR._2s(mR, yR[Nj], null, Vx), xR._2s(mR, yR[RM], Ow, wd), xR._2s(mR, yR[GM], Ow, gd), xR._2s(mR, yR[hE], Ow, fP), xR._2s(mR, yR[OM], Ow, Xa), xR._2s(mR, yR[HM], Ow, s_), xR._2s(mR, yR[WM], Ow, aP), xR._2s(mR, yR[UM], Ow, $_), xR._2s(mR, yR[JM], Ow, _P), xR._2s(mR, yR[KM], Ow, Zp), xR._2s(mR, yR[iE], Ow, Kp), xR._2s(mR, yR[dE], Ow, cP), xR._2s(mR, yR[oE], Ow, N_), xR._2s(mR, yR[eE], Ow, dp), xR._2s(mR, yR[bE], Ow, Xx), xR._2s(mR, yR[yE], Ow, Hx), xR._2s(mR, yR[gE], Ow, Wx), xR._2s(mR, yR[mE], Ow, Vx), xR._2s(mR, yR[Sj], null, Qx), xR._2s(mR, yR[Ij], null, Zx));
    var kR = new es;
    kR._2s(gR, fp), kR._2s(gR, lp, null, uP), kR._2s(gR, Xa, null, Xa), wR || (kR._2s(mR, yR[hM], null, rP), kR._2s(mR, yR[fM], null, N_), kR._2s(mR, yR[yM], null, s_), kR._2s(mR, yR[_M], null, ly), kR._2s(mR, yR[vx], null, _P), kR._2s(mR, yR[uM], null, ij), kR._2s(mR, yR[dM], null, nj), kR._2s(mR, yR[bM], null, ej)), kR._2s(gR, tg, tg, Ra, oP), kR._2s(gR, dp, tg, dp), kR._2s(mR, yR[Bj], tg, La), kR._2s(mR, yR[qj], tg, Dx), kR._2s(mR, yR[Hj], tg, Rg), wR || (kR._2s(mR, yR[Uj], tg, qg), kR._2s(mR, yR[Jj], tg, Dg), kR._2s(mR, yR[Wj], tg, Lg), kR._2s(mR, yR[Lj], tg, W_), kR._2s(mR, yR[Yj], tg, Z_), kR._2s(mR, yR[Kj], tg, Ng), kR._2s(mR, yR[iM], tg, zg), kR._2s(mR, yR[eM], tg, G_), kR._2s(mR, yR[xM], tg, rP), kR._2s(mR, yR[gM], tg, N_), kR._2s(mR, yR[CM], tg, s_), kR._2s(mR, yR[mM], tg, ly), kR._2s(mR, yR[PM], tg, _P), kR._2s(mR, yR[pM], tg, ij), kR._2s(mR, yR[MM], tg, nj), kR._2s(mR, yR[EM], tg, ej)), kR._2s(gR, Ap, null, null, dP), kR._2s(gR, Ao, null, null, dP);
    var pR = new es;
    pR._2s(gR, Bp, null, null, lP), pR._2s(gR, Dp, null, null, lP), pR._2s(gR, zp, null, null, lP), pR._2s(gR, s_, null, null, lP), pR._2s(mR, yR[wE], bP, Rg), pR._2s(mR, yR[kE], bP, Lg), pR._2s(mR, yR[pE], bP, La), pR._2s(mR, yR[ME], bP, Dx), pR._2s(mR, yR[SE], bP, W_), pR._2s(mR, yR[PE], bP, Z_);
    var jR = new es;
    jR._2s(gR, Nc, bP, null, vP), jR._2s(gR, ep, bP, null, vP), jR._2s(gR, jo, bP, null, vP), jR._2s(mR, yR[WE], bP, La), jR._2s(mR, yR[UE], bP, Dx), jR._2s(mR, yR[yS], bP, yP), jR._2s(mR, yR[yp], bP, xP), wR || (jR._2s(mR, yR[JE], bP, qg), jR._2s(mR, yR[KE], bP, Dg), jR._2s(mR, yR[iS], bP, W_), jR._2s(mR, yR[eS], bP, Z_), jR._2s(mR, yR[oo], bP, null, vP), jR._2s(mR, yR[sS], bP, null, vP), jR._2s(mR, yR[rS], bP, null, vP), jR._2s(mR, yR[Kj], bP, Ng), jR._2s(mR, yR[iM], bP, zg), jR._2s(gR, ip, null, null, vP, !0), jR._2s(gR, Eo, null, null, vP, !0), jR._2s(mR, yR[gS], bP, gP), jR._2s(mR, yR[wS], bP, mP), jR._2s(mR, yR[pS], bP, wP), jR._2s(mR, yR[MS], bP, kP), jR._2s(mR, yR[ES], bP, pP), jR._2s(mR, yR[PS], bP, "fromArrowOutlineStyle"), jR._2s(mR, yR[OS], bP, jP), jR._2s(mR, yR[$S], bP, "fromArrowFillGradient"), jR._2s(mR, yR[IS], bP, MP), jR._2s(mR, yR[TS], bP, "fromArrowLineDashOffset"), jR._2s(mR, yR[NS], bP, EP), jR._2s(mR, yR[FS], bP, SP), jR._2s(mR, yR[DS], bP, PP), jR._2s(mR, yR[RS], bP, IP), jR._2s(mR, yR[GS], bP, CP), jR._2s(mR, yR[HS], bP, TP), jR._2s(mR, yR[XS], bP, OP), jR._2s(mR, yR[VS], bP, $P), jR._2s(mR, yR[ZS], bP, FP), jR._2s(mR, yR[tP], bP, AP), jR._2s(mR, yR[US], bP, NP), jR._2s(mR, yR[JS], bP, "toArrowLineDashOffset"), jR._2s(mR, yR[eP], bP, zP), jR._2s(mR, yR[iP], bP, BP));
    var MR = new es;
    MR._2s(mR, yR[OE], DP, hP), MR._2s(mR, yR[CE], DP, L_), MR._2s(mR, yR[TE], DP, lp), MR._2s(mR, yR[$E], DP, md), MR._2s(mR, yR[XE], DP, cP), wR || (MR._2s(mR, yR[IE], DP, Xa), MR._2s(mR, yR[FE], DP, wd), MR._2s(mR, yR[AE], DP, gd), MR._2s(mR, yR[NE], DP, s_), MR._2s(mR, yR[zE], DP, aP), MR._2s(mR, yR[BE], DP, $_), MR._2s(mR, yR[DE], DP, _P), MR._2s(mR, yR[qE], DP, Zp), MR._2s(mR, yR[RE], DP, Kp), MR._2s(mR, yR[LE], DP, ly), MR._2s(mR, yR[GE], DP, ij), MR._2s(mR, yR[YE], DP, rP), MR._2s(mR, yR[HE], DP, N_));
    var ER = new es;
    ER._2s(gR, fp), ER._2s(mR, yR[hM], null, rP), ER._2s(mR, yR[fM], null, N_), ER._2s(mR, yR[yM], null, s_), ER._2s(mR, yR[_M], null, ly), ER._2s(mR, yR[vx], null, _P), ER._2s(mR, yR[uM], null, ij), ER._2s(mR, yR[dM], null, nj), ER._2s(mR, yR[bM], null, ej), ER._2s(gR, Xa, null, Xa), ER._2s(gR, ip, null, null, qP), ER._2s(gR, gp, tg, Ra), ER._2s(gR, dp, tg, dp), ER._2s(mR, yR[Bj], tg, La), ER._2s(mR, yR[qj], tg, Dx), ER._2s(mR, yR[Hj], tg, Rg), ER._2s(mR, yR[Wj], tg, Lg), wR || (ER._2s(mR, yR[Uj], tg, qg), ER._2s(mR, yR[Jj], tg, Dg), ER._2s(mR, yR[Lj], tg, W_), ER._2s(mR, yR[Yj], tg, Z_), ER._2s(mR, yR[Kj], tg, Ng), ER._2s(mR, yR[iM], tg, zg), ER._2s(mR, yR[eM], tg, G_), ER._2s(mR, yR[xM], tg, rP), ER._2s(mR, yR[gM], tg, N_), ER._2s(mR, yR[CM], tg, s_), ER._2s(mR, yR[mM], tg, ly), ER._2s(mR, yR[PM], tg, _P), ER._2s(mR, yR[pM], tg, ij), ER._2s(mR, yR[MM], tg, nj), ER._2s(mR, yR[EM], tg, ej), ER._2s(mR, yR[yS], tg, yP), ER._2s(mR, yR[gS], tg, gP), ER._2s(mR, yR[wS], tg, mP), ER._2s(mR, yR[pS], tg, wP), ER._2s(mR, yR[MS], tg, kP), ER._2s(mR, yR[OS], tg, jP), ER._2s(mR, yR[$S], tg, "fromArrowFillGradient"), ER._2s(mR, yR[IS], tg, MP), ER._2s(mR, yR[TS], tg, "fromArrowLineDashOffset"), ER._2s(mR, yR[NS], tg, EP), ER._2s(mR, yR[FS], tg, SP), ER._2s(mR, yR[DS], tg, PP), ER._2s(mR, yR[RS], tg, IP), ER._2s(mR, yR[yp], tg, xP), ER._2s(mR, yR[GS], tg, CP), ER._2s(mR, yR[HS], tg, TP), ER._2s(mR, yR[ZS], tg, FP), ER._2s(mR, yR[tP], tg, AP), ER._2s(mR, yR[US], tg, NP), ER._2s(mR, yR[JS], tg, "toArrowLineDashOffset"), ER._2s(mR, yR[eP], tg, zP), ER._2s(mR, yR[iP], tg, BP));
    var SR = function(t, i) {
        return t = t[Uk], i = i[Uk], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    }, PR = function(t, i) {
        this[Lu] = new SB, z(this, PR, arguments), this.id = this[Y_].id, this[po] = i, this._f5 = [], this._nbh = new es
    };
    PR[br] = {syncSelection: !1,graph: null,layoutByAnchorPoint: !1,_nbh: null,_f5: null,addChild: function(t, i) {
            t._jd = this, i !== n ? x(this._f5, t, i) : this._f5[Xh](t), this[RP](), this[LP]()
        },removeChild: function(t) {
            this._nbh[GP](t), t._jd = null, g(this._f5, t), this[LP]()
        },getProperty: function(t, i) {
            return i == pD[Au] ? this[po][Gu](this[Y_], t) : i == pD[Fu] ? this[Y_][kr](t) : this[Y_][t]
        },getStyle: function(t) {
            return this[po][Gu](this[Y_], t)
        },_$y: function(t, i, n) {
            var e = this._nbh[YP](this, t, i, n);
            return xR[YP](this, t, i, n) || e
        },onPropertyChange: function(t) {
            if (Uk == t[Nd])
                return this[HP](), !0;
            if (Hk == t[Ha]) {
                if (Xk == t[Nd])
                    return this[Xk](), !0;
                var i = t[Pr];
                return i && i.ui ? (ir == t[Nd] ? this._94(i) : Yh == t[Nd] && this[Wb](i.ui), !0) : !1
            }
            return this._$y(t[Nd], t[Ib] || gR, t[Pr])
        },label: null,initLabel: function() {
            var t = new CR;
            t[Er] = Ow, this[XP](t), this[Ow] = t
        },initialize: function() {
            this[WP](), this[Y_]._nb4 && this[Y_]._nb4[uc](this._94, this), xR[VP](this), this._nbh[VP](this, !1)
        },addBinding: function(t, i) {
            return i[Cu] ? (i[Pu] = t, void this._nbh._21(i[Cu], i)) : !1
        },_gc: function(t, i) {
            var n = this[Y_];
            if (!n._nb4)
                return !1;
            var e = n._nb4[xl](t.id);
            if (!e || !e[UP])
                return !1;
            var s = e[UP];
            if (I(s)) {
                var h = !1;
                return l(s, function(t) {
                    return Ra == t[Tu] ? (h = ss(n, i, t[Cu], t[Ib]), !1) : void 0
                }, this), h
            }
            return Ra == s[Tu] ? ss(n, i, s[Cu], s[Ib]) : !1
        },_94: function(t) {
            var i = t.ui;
            if (i) {
                var n = t[UP];
                n && (Array[hr](n) ? n[uc](function(t) {
                    this[QP](i, t)
                }, this) : this[QP](i, n)), this[XP](i)
            }
        },validate: function() {
            return this._nac || (this[lj](), this._nac = !0), this[bj]()
        },_$e: !0,invalidateChildrenIndex: function() {
            this._$e = !0
        },doValidate: function() {
            if (this._1h && (this._1h = !1, this[JP]() && (this[fj](), this[S_] = !0), this._$e && (this._$e = !1, _B ? this._f5 = d(this._f5, SR) : this._f5[ZP](SR))), Gn[Bh](this) && (this[X_] = !0), this[X_]) {
                _q[Bh](this), this[Lu][I_](this._fi);
                var t = Math[Ea](this[KP] || 0, this[tI] || 0), i = Math[Ea](this[iI] || 0, this[nI] || 0), n = Math[Ea](this[eI], this[sI]), e = n - t, s = n + t, h = n - i, r = n + i;
                return 0 > e && (e = 0), 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), this[Lu][T_](h, e, r, s), this[_j] && this[_j](), this[hI] = !0, !0
            }
        },validateChildren: function() {
            var t, i = this._n8ody, n = this[rI];
            i && (i[fI] = this[fI], i[aI] = this[aI], i[_I] = this[_I], i[eI] = this[eI], i[KP] = this[KP], i[iI] = this[iI]), this[rI] = !1, i && i._1h && (n = i[Ta]() || n, i.$x = 0, i.$y = 0, i[X_] && _q[Bh](i), t = !0);
            for (var e = 0, s = this._f5[zh]; s > e; e++) {
                var h = this._f5[e];
                h != i && (h._1h && h[Ta]() || n) && h._hf && (Wn(h, i, this), t || (t = !0))
            }
            return t
        },measure: function() {
            this._j8[Pf]();
            for (var t, i, n = 0, e = this._f5[zh]; e > n; n++)
                t = this._f5[n], t._hf && (i = t._fi, i[fa] <= 0 || i[aa] <= 0 || this._j8[Ol](t.$x + i.x, t.$y + i.y, i[fa], i[aa]))
        },draw: function(t, i, n) {
            for (var e, s = 0, h = this._f5[zh]; h > s; s++)
                e = this._f5[s], e._hf && e._je(t, i, n, this)
        },_dn: function(t, i, n) {
            if (n) {
                if (!this._j8[Tl](t - n, i - n, 2 * n, 2 * n))
                    return !1
            } else if (!this._j8[Fa](t, i))
                return !1;
            return this._5k(t, i, n)
        },_5k: function(t, i, n) {
            for (var e, s = this._f5[zh] - 1; s >= 0; s--)
                if (e = this._f5[s], e._hf && e._hg(t, i, n))
                    return e;
            return !1
        },destroy: function() {
            this._i0ed = !0;
            for (var t, i = this._f5[zh] - 1; i >= 0; i--)
                t = this._f5[i], t[Ru]()
        }}, N(PR, bR), J(PR[br], {renderColorBlendMode: {get: function() {
                return this[aI]
            },set: function(t) {
                this[aI] = t, this._1h = !0, this[cI] && (this[cI][Zx] = this[aI])
            }},renderColor: {get: function() {
                return this[fI]
            },set: function(t) {
                this[fI] = t, this._1h = !0, this[cI] && (this[cI][Qx] = this[fI])
            }},bodyBounds: {get: function() {
                if (this[hI]) {
                    this[hI] = !1;
                    var t, i = this[cI];
                    t = i && i._hf && !this._$q() ? i._fi[Hh]() : this._fi[Hh](), this[Xa] && $i(t, this[Xa], t), t.x += this.$x, t.y += this.$y, this._n8q = t
                }
                return this._n8q
            }},body: {get: function() {
                return this._n8ody
            },set: function(t) {
                t && this._n8ody != t && (this._n8ody = t, this[rI] = !0, this[LP]())
            }}});
    var IR = function() {
        z(this, IR, arguments)
    };
    IR[br] = {strokeStyle: Lx,lineWidth: 0,fillColor: null,fillGradient: null,_ja: 1,_jc: 1,outline: 0,onDataChanged: function(t) {
            B(this, IR, vj, arguments), this._k4 && this._8r && this._k4._6l(this._8r, this), t && this._nbe(t)
        },_nbe: function(t) {
            this._k4 = mn(t), this._k4[Ta](), (this._k4._lm == FD || this._k4._6j()) && (this._8r || (this._8r = function() {
                this[Gp](), this._jd && this._jd[po] && (this._jd[LP](), this._jd[po][Xk]())
            }), this._k4._nal(this._8r, this))
        },_k4: null,initialize: function() {
            this._nbe(this[Y_])
        },_53: function() {
            return this._k4 && this._k4[Za]
        },_9o: function(t) {
            if (!t || t[fa] <= 0 || t[aa] <= 0 || !this[uI] || !(this[dp] instanceof Object))
                return this._ja = 1, void (this._jc = 1);
            var i = this[dp][fa], e = this[dp][aa];
            if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e)
                return this._ja = 1, void (this._jc = 1);
            var s, h, r = t[fa], f = t[aa];
            i >= 0 && (s = i / r), e >= 0 && (h = e / f), 0 > i ? s = h : 0 > e && (h = s), this._ja = s, this._jc = h
        },validateSize: function() {
            if (this[oI]) {
                this[oI] = !1;
                var t = this._originalBounds;
                this._ja, this._jc, this._9o(t), this[dI](t[fa] * this._ja, t[aa] * this._jc, t.x * this._ja, t.y * this._jc)
            }
        },measure: function() {
            var t = this._k4[Oa](this[La] + this[qg]);
            return t ? (this[oI] = !0, void (this._originalBounds = t[Hh]())) : void this._j8[pr](0, 0, 0, 0)
        },onBoundsChanged: function() {
            this[lI] = !0
        },_1s: function() {
            this[lI] = !1, this._fillGradient = this[Lg] ? this[bI][z_](this._82) : null
        },draw: function(t, i, n, e) {
            if (this._ja && this._jc) {
                if (this[lI] && this._1s(), t[Cx](), this._k4._lm == ND)
                    return t[Sf](this._ja, this._jc), this._k4._ln[Za](t, i, this, n, e || this), void t[Yx]();
                n && this._7r(t, i, e), this._k4[Za](t, i, this, this._ja, this._jc), t[Yx]()
            }
        },_dn: function(t, i, n) {
            if (this._k4._hg) {
                t /= this._ja, i /= this._jc;
                var e = (this._ja + this._jc) / 2;
                return e > 1 && (n /= e, n = 0 | n), this._k4._ln instanceof sq ? this._k4._ln._hg(t, i, n, !0, this[vI], this[yI] || this[bI]) : this._k4._hg(t, i, n)
            }
            return !0
        },$invalidateScale: !0,$invalidateFillGradient: !0}, N(IR, bR), is(IR[br], {fillColor: {},size: {validateFlags: [Gv, xI]},fillGradient: {validateFlags: [gI]}}), J(IR[br], {originalBounds: {get: function() {
                return this._originalBounds
            }}}), xB[mI] = IB[Hl];
    var CR = function() {
        z(this, CR, arguments), this[hP] = xB[zM]
    };
    CR[br] = {color: xB[zM],showPointer: !0,fontSize: null,fontFamily: null,fontStyle: null,_fl: null,alignPosition: null,measure: function() {
            this[pa];
            var t = Di(this[Y_], this[wI] || xB[ul], this[kI]);
            if (this._fl = t, this[uI]) {
                var i = this[uI][fa] || 0, n = this[uI][aa] || 0;
                return this[dI](i > t[fa] ? i : t[fa], n > t[aa] ? n : t[aa])
            }
            return this[dI](t[fa], t[aa])
        },_dn: function(t, i, n) {
            return this[Y_] ? Cn(t, i, n, this) : !1
        },draw: function(t, i, n, e) {
            n && this._7r(t, i, e);
            var s = this[wI] || xB[ul];
            if (this[M_] && this[E_]) {
                var h = on(this[E_]);
                h > wB && 3 * wB > h && (t[h_](this._j8[fa] / 2, this._j8[aa] / 2), t[Xa](Math.PI), t[h_](-this._j8[fa] / 2, -this._j8[aa] / 2))
            }
            var r = this[fP] || xB[mI], f = r[Qr], a = r[Jr], _ = s * xB[ja], c = _ / 2;
            if (a != $B && this._fl[aa] < this._j8[aa]) {
                var u = this._j8[aa] - this._fl[aa];
                c += a == FB ? u / 2 : u
            }
            t[h_](0, c), t[pa] != this[kI] && (t[pa] = this[kI]), f == TB ? (t[Fx] = So, t[h_](this._j8[fa] / 2, 0)) : f == OB ? (t[Fx] = Vr, t[h_](this._j8[fa], 0)) : t[Fx] = yf, t[Ax] = Nx, t[Tx] = this[hP];
            for (var o = 0, d = this[Y_][Kh](Ma), l = 0, b = d[zh]; b > l; l++) {
                var v = d[l];
                t[Gx](v, 0, o), o += _
            }
        },_53: function() {
            return null != this[Y_] || this[uI]
        },$invalidateFont: !0}, N(CR, bR), is(CR[br], {size: {validateFlags: [Zv]},fontStyle: {validateFlags: [Zv, pI]},fontSize: {validateFlags: [Zv, pI]},fontFamily: {validateFlags: [Zv, pI]}}), J(CR[br], {font: {get: function() {
                return this[jI] && (this[jI] = !1, this[kI] = (this[MI] || xB[cl]) + tr + (this[wI] || xB[ul]) + ol + (this[EI] || xB[dl])), this[kI]
            }}});
    var TR = function(t) {
        t = t || new sq, this[SI] = new SB, z(this, TR, [t])
    };
    TR[br] = {layoutByPath: !0,layoutByAnchorPoint: !1,measure: function() {
            this[PI] = !0, this[II] = !0, this[Y_][Oa](this[vI] + this[CI], this[SI]), this[dI](this[SI])
        },validateSize: function() {
            if (this[PI] || this[II]) {
                var t = this[SI][Hh]();
                if (this[PI]) {
                    this[PI] = !1;
                    var i = this[TI]();
                    i && t[ir](i)
                }
                if (this[II]) {
                    this[II] = !1;
                    var i = this[OI]();
                    i && t[ir](i)
                }
                this[dI](t)
            }
        },validateFromArrow: function() {
            if (!this[Y_]._it || !this[$I])
                return void (this[FI] = null);
            var t = this[Y_], i = 0, n = 0, e = this[AI];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._it)), this[NI] = t[zI](i, n), this[NI][Xa] = Math.PI + this[NI][Xa] || 0, this[FI] = $s(this[$I], this[BI]);
            var s = this[FI][Oa](this[DI][La] + this[DI][qg]);
            return this[qI] instanceof kD[RI] ? this[DI]._fillGradient = this[qI][z_](s) : this[DI] && (this[DI]._fillGradient = null), Fi(s, this[NI][Xa], s, s[Vr], s.cy), s[kx](this[NI].x, this[NI].y), s
        },validateToArrow: function() {
            if (!this[Y_]._it || !this[LI])
                return void (this[GI] = null);
            var t = this[Y_], i = 0, n = 0, e = this[YI];
            e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._it), i += t._it, this[HI] = t[zI](i, n), this[GI] = $s(this[LI], this[XI]);
            var s = this[GI][Oa](this[WI][La] + this[WI][qg]);
            return this[AP] instanceof kD[RI] ? this[WI]._fillGradient = this[AP][z_](s) : this[WI] && (this[WI]._fillGradient = null), Fi(s, this[HI][Xa], s, s[Vr], s.cy), s[kx](this[HI].x, this[HI].y), s
        },_2l: function(t) {
            var i = t ? "from" : ep, e = this[i + VI];
            e === n && (e = this[vI]);
            var s = this[i + UI];
            s === n && (s = this[Dx]);
            var h = this[i + QI];
            h || (this[i + QI] = h = {}), h[La] = e, h[Dx] = s, h[W_] = this[i + JI], h[Z_] = this[i + ZI], h[Rg] = this[i + KI], h[Lg] = this[i + tC], h[Ng] = this[i + iC], h[zg] = this[i + nC], h[qg] = this[i + eC] || 0, h[Dg] = this[i + sC]
        },doValidate: function() {
            return this[$I] && this._2l(!0), this[LI] && this._2l(!1), B(this, TR, bj)
        },drawArrow: function(t, i, n, e) {
            if (this[$I] && this[FI]) {
                t[Cx]();
                var s = this[NI], h = s.x, r = s.y, f = s[Xa];
                t[h_](h, r), f && t[Xa](f), this[FI][Za](t, i, this[DI], n, e), t[Yx]()
            }
            if (this[LI] && this[GI]) {
                t[Cx]();
                var s = this[HI], h = s.x, r = s.y, f = s[Xa];
                t[h_](h, r), f && t[Xa](f), this[GI][Za](t, i, this[WI], n, e), t[Yx]()
            }
        },outlineStyle: null,outline: 0,onBoundsChanged: function() {
            this[lI] = !0
        },_1s: function() {
            this[lI] = !1, this._fillGradient = this[bI] ? this[bI][z_](this._82) : null
        },draw: function(t, i, n, e) {
            this[lI] && this._1s(), this[Y_][Za](t, i, this, n, e), this[hC](t, i, n, e)
        },_dn: function(t, i, n) {
            if (this[Y_]._hg(t, i, n, !0, this[vI] + this[CI], this[yI] || this[bI]))
                return !0;
            if (this[LI] && this[GI]) {
                var e = t - this[HI].x, s = i - this[HI].y;
                if (this[HI][Xa]) {
                    var h = Ci(e, s, -this[HI][Xa]);
                    e = h.x, s = h.y
                }
                var r = this[WI][Rg] || this[WI][Lg];
                if (this[GI]._hg(e, s, n, !0, this[WI][La], r))
                    return !0
            }
            if (this[$I] && this[FI]) {
                var e = t - this[NI].x, s = i - this[NI].y;
                if (this[NI][Xa]) {
                    var h = Ci(e, s, -this[NI][Xa]);
                    e = h.x, s = h.y
                }
                var r = this[DI][Rg] || this[DI][Lg];
                if (this[FI]._hg(e, s, n, !0, this[DI][La], r))
                    return !0
            }
            return !1
        },$fromArrowOutline: 0,$toArrowOutline: 0,$invalidateFillGradient: !0,$invalidateFromArrow: !0,$invalidateToArrow: !0}, N(TR, bR), is(TR[br], {fillColor: {},fillGradient: {validateFlags: [gI]},fromArrowOffset: {validateFlags: [rC, Gv]},fromArrowSize: {validateFlags: [rC, Gv]},fromArrow: {validateFlags: [rC, Gv]},fromArrowOutline: {validateFlags: [rC, Gv]},fromArrowStroke: {validateFlags: [rC, Gv]},toArrowOffset: {validateFlags: [fC, Gv]},toArrowSize: {validateFlags: [fC, Gv]},toArrow: {validateFlags: [fC, Gv]},toArrowOutline: {validateFlags: [fC, Gv]},toArrowStroke: {validateFlags: [fC, Gv]},outline: {value: 0,validateFlags: [Zv]}}), J(TR[br], {length: {get: function() {
                return this[Ra][zh]
            }}}), hs[br] = {shape: null,path: null,initialize: function() {
            B(this, hs, lj), this[gp] = new sq, this[gp]._dh = !1, this[bP] = new TR(this[gp]), this[XP](this[bP], 0), this._n8ody = this[bP], jR[VP](this)
        },_1z: !0,_5e: null,_$q: function() {
            return !1
        },_4g: function() {
            return !1
        },validatePoints: function() {
            this[bP][Gp]();
            var t = this[Y_], i = this[gp];
            i[Pf]();
            var n = t[Fc], e = t[Oc];
            n && e && Ds(this, t, i, n, e)
        },drawLoopedEdge: function(t, i, n, e) {
            Gs(this, e, t)
        },drawEdge: function(t, i, n, e, s, h) {
            var r = this[Gu](yR[sS]), f = this[Gu](yR[rS]);
            if (r && (s.x += r.x || 0, s.y += r.y || 0), f && (h.x += f.x || 0, h.y += f.y || 0), e == pD[aC]) {
                var a = s[So], _ = h[So], c = (a.x + _.x) / 2, u = (a.y + _.y) / 2, o = a.x - _.x, d = a.y - _.y, l = Math[Pa](o * o + d * d), b = Math[Yr](d, o);
                b += Math.PI / 6, l *= .04, l > 30 && (l = 30);
                var v = Math[Hr](b) * l, y = Math[Xr](b) * l;
                return t[Qc](c - y, u + v), void t[Qc](c + y, u - v)
            }
            var x = Ls(this, this[Ra], s, h, i, n, s[So], h[So]);
            x && (t._f6 = x)
        },_2j: function() {
            if (!this[Y_][_C]())
                return null;
            var t = this[po]._8v._8t(this[Y_]);
            if (!t || !t[cC](this[po]) || !t._fv)
                return null;
            var i = t[uC](this);
            return t[oC](this[Y_]) || (i = -i), i
        },checkBundleLabel: function() {
            var t = this[dC]();
            return t ? (this[DP] || this[lC](), this[DP]._hf = !0, void (this[DP][Ra] = t)) : void (this[DP] && (this[DP]._hf = !1, this[DP][Ra] = null))
        },createBundleLabel: function() {
            var t = new CR;
            t[bC] = !1, this[DP] = t, this[XP](this[DP]), MR[VP](this)
        },getBundleLabel: function() {
            var t = this[po]._8v._8t(this[Y_]);
            return t && t[vC] == this[Y_] ? yC + t[xC][zh] : null
        },doValidate: function() {
            return this._1z && (this._1z = !1, this[gC]()), this[mC](), B(this, hs, bj)
        },_4n: function() {
            this._1z = !0, this[LP]()
        },_$y: function(t, i, n) {
            var e = this._nbh[YP](this, t, i, n);
            return e = xR[YP](this, t, i, n) || e, this[DP] && this[DP][Y_] && (e = MR[YP](this, t, i, n) || e), jR[YP](this, t, i, n) || e
        }}, N(hs, PR), hs[wC] = function(t, i, n, e) {
        if (t[Uc](i.x, i.y), !e || e == pD[kC])
            return void t[Qc](n.x, n.y);
        if (e == pD[to])
            t[Qc](i.x, n.y);
        else if (e == pD[Uu])
            t[Qc](n.x, i.y);
        else if (0 == e[Wh](pD[vo])) {
            var s;
            s = e == pD[Vu] ? !0 : e == pD[Ku] ? !1 : Math[Ur](i.x - n.x) > Math[Ur](i.y - n.y);
            var h = (i.x + n.x) / 2, r = (i.y + n.y) / 2;
            s ? (t[Qc](h, i.y), t[Qc](h, n.y)) : (t[Qc](i.x, r), t[Qc](n.x, r))
        }
        t[Qc](n.x, n.y)
    }, J(hs[br], {length: {get: function() {
                return this[gp] ? this[gp][zh] : 0
            }}}), rs[br] = {_31: null,image: null,initialize: function() {
            B(this, rs, lj), this._nax(), kR[VP](this)
        },_nbe: function() {
            this[Ra][tg] ? this[tg] && (this[cI] = this[tg]) : this[Ow] && (this[cI] = this[Ow])
        },_nax: function() {
            this[tg] = new IR, this[XP](this[tg], 0), this._nbe()
        },doValidate: function() {
            this[cI] && (this instanceof Js && !this[Y_][Dp] && this._5x() ? this[cI][w_] = !1 : (this[cI][w_] = null != this._31, this[cI][lp] = this._31));
            var t = this[Y_][hp], i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[hI] = !0), this.$x = i, this.$y = n, PR[br][bj][Bh](this) || e
        },_$y: function(t, i, n) {
            var e = this._nbh[YP](this, t, i, n);
            return e = xR[YP](this, t, i, n) || e, kR[YP](this, t, i, n) || e
        }}, N(rs, PR);
    var OR = function(t, i) {
        return t = t[Y_][Uk] || 0, i = i[Y_][Uk] || 0, t - i
    }, $R = {position: Vo,"user-select": Wo,"transform-origin": pC,"-webkit-tap-highlight-color": Jg};
    li(jC, "text-align: left; outline: none;"), as[br] = {_kg: 1,_nbv: null,_7u: null,_7t: null,_$c: !0,_mu: null,_mp: null,_j2: null,_na8: null,_6f: !1,_nac: !1,_k1: null,_49: function(t, i) {
            for (var n = this._nbv, e = 0, s = n[zh]; s > e; e++)
                if (t[Bh](i, n[e]) === !1)
                    return !1
        },_ea: function(t, i) {
            this._mu[uc](t, i)
        },_$x: function(t, i) {
            for (var n = this._nbv, e = n[zh] - 1; e >= 0; e--)
                if (t[Bh](i, n[e]) === !1)
                    return !1
        },_4j: function(t, i) {
            this._mu[MC](t, i)
        },_3n: function(t, i) {
            this._7o && this._7o._3n && this._7o._3n(t, i)
        },_nbz: function() {
            oi(this._mp, {overflow: Xo,padding: EC}), this._k1._4w(), this._l4 && this._l4[SC] ? this._k1._es(0, 0) : this._k1._24 = !0
        },_4i: function() {
            return this._$c && (this._$c = !1, this._1r()), this._7t
        },_3i: function() {
            return this._k1._13 ? !1 : (this._k1._13 = !0, void this._nbb())
        },_nbb: function() {
            this._6f || (this._6f = !0, k(this._fd[Px](this)))
        },_n8e: function() {
            var t = !this._nac || 0 == this._mu[zh];
            this._nac || (this._nac = !0, this._nbz()), this._nan(t);
            var i = this._j2.g;
            if (this._mu[H_]())
                return i._ki(), this._topCanvas._je(), this._6f = !1, this._k1._jh(this, !0), void this._4i();
            if (this._k1._jh(this, this._na8._ml), this._jq) {
                var n = this._kk;
                i[oa][ca] && (n *= i[oa][ca]), this._jq(i, n, t)
            }
            this._na8._ki(), this._k1._7b(), this._topCanvas._je(), this._6f = !1
        },_fd: function() {
            this._6f && (this._i0ed || (this._nac && this._l4 && this._l4._$s && (this._l4._$s = !1, this._l4[uc](function(t) {
                t[Yk](!0)
            })), this._n8e(), this._26()))
        },_fw: null,_1d: function(t, i, n, e, s) {
            if (!n || !e)
                return void this._58();
            var h = this._nbv, r = this._7u;
            this._58(), this._fw[zh] = 0;
            var f, a = {}, _ = this._na8;
            s = s || _._ml;
            for (var c, u, o, d, l, b, v = this._mu._j0, y = t + n, x = i + e, g = 0, m = v[zh]; m > g; g++)
                if (b = v[g], l = b.__oldBounds, b.__oldBounds = null, b._hf)
                    if (d = b.__j8Changed, b.__j8Changed = !1, c = b[Lu], u = c.x + b.$x, o = c.y + b.$y, y > u && x > o && u + c[fa] > t && o + c[aa] > i) {
                        if (f = b[Y_][Uk], f in a || (a[f] = !0, this._fw[Xh](f || 0)), h[Xh](b), this._7u[b.id] = b, s)
                            continue;
                        l && (_._mh(l.x, l.y, l[fa], l[aa]), s = _._ml), d && (_._mh(u, o, c[fa], c[aa]), s = _._ml)
                    } else
                        !s && r[b.id] && l && (_._mh(l.x, l.y, l[fa], l[aa]), s = _._ml);
                else
                    !s && l && (_._mh(l.x, l.y, l[fa], l[aa]), s = _._ml)
        },_n8v: function(t) {
            var i = t[Y_].__hfChanged;
            return t[Y_].__hfChanged = !1, t._1h || t[Y_]._6f ? (t[Y_]._6f = !1, t._nac && (t.__oldBounds = {x: t.$x + t[Lu].x,y: t.$y + t[Lu].y,width: t[Lu][fa],height: t[Lu][aa]}), t.__j8Changed = t[Ta](), i || t.__j8Changed) : (i && t._nac && (t.__oldBounds = {x: t.$x + t[Lu].x,y: t.$y + t[Lu].y,width: t[Lu][fa],height: t[Lu][aa]}), i)
        },_jq: function(t, i, n, e) {
            e = e || this._k1._7d;
            var s = e.x, h = e.y, r = e[fa], f = e[aa];
            this._1d(s, h, r, f, n), this._4i(), this._fw[zh] && (_B ? (this._fw[ZP](), this._nbv = d(this._nbv, OR)) : this._nbv[ZP](OR)), this._im(t, i)
        },_im: function(t, i) {
            t[Cx](), this._na8._k3(t, this._j2, this._k1), this._k1._n8d(t);
            for (var n, e, s = this._nbv, h = 0, r = s[zh]; r > h; h++)
                n = s[h], e = n[Lu], (this._na8._ml || this._na8._e0(e.x + n.$x, e.y + n.$y, e[fa], e[aa])) && n._je(t, i);
            t[Yx]()
        },_fn: function(t, i, n) {
            t[Cx](), t[h_](-n.x * i, -n.y * i), t[Sf](i, i);
            var e, s, h = this._mu._j0[qh]();
            this._fw[zh] && (_B ? (this._fw[ZP](), h = d(h, OR)) : h[ZP](OR));
            for (var r = 0, f = h[zh]; f > r; r++)
                e = h[r], e._hf && (s = e[Lu], n[Tl](s.x + e.$x, s.y + e.$y, s[fa], s[aa]) && e._je(t, i));
            t[Yx]()
        },_17: function() {
        },_1r: function() {
            for (var t, i, n = this._mu._j0, e = new SB, s = n[zh] - 1; s >= 0; s--)
                t = n[s], t._hf && (i = t[Lu], e[Ol](t.$x + i.x, t.$y + i.y, i[fa], i[aa]));
            var h = this._7t;
            this._7t = e, e[yb](h) || this._17(h, e)
        },_nan: function() {
            for (var t, i = this._mu._j0, n = i[zh] - 1; n >= 0; n--)
                t = i[n], this._n8v(t) && !this._$c && (this._$c = !0)
        },_1q: function(t, i, n, e) {
            this._na8._ml || (t && (t > 0 && this._na8._mh(this._k1._7d.x, this._k1._7d.y, t / this._k1._kk, this._k1._9b / this._k1._kk), n + t < this._k1._naj && this._na8._mh(this._k1._7d.x + (n + t) / this._k1._kk, this._k1._7d.y, (this._k1._naj - n - t) / this._k1._kk, this._k1._9b / this._k1._kk)), i && (i > 0 && this._na8._mh(this._k1._7d.x, this._k1._7d.y, this._k1._naj / this._k1._kk, i / this._k1._kk), e + i < this._k1._9b && this._na8._mh(this._k1._7d.x, this._k1._7d.y + (e + i) / this._k1._kk, this._k1._naj / this._k1._kk, (this._k1._9b - e - i) / this._k1._kk)))
        },_e4: function(t, i) {
            this._nbb(), this._k1._e4(t, i)
        },_nad: function(t, i, n) {
            this._nbb(), this._k1._nad(t, i, n)
        },_8p: function() {
        },_fu: function(t, i, n) {
            return this._nac ? void (this._k1._fu(t, i, n) !== !1 && this._nbb()) : void (this._k1._kk = t)
        },_1i: function() {
            var t = this._4i();
            if (!t[H_]()) {
                var i = this._k1._naj / t[fa], n = this._k1._9b / t[aa], e = Math[Ia](i, n);
                return e = Math[Ea](this._h5, Math[Ia](this._h9, e)), {scale: e,cx: t.cx,cy: t.cy}
            }
        },_jz: function(t, i, n) {
            return this._k1._jz(t, i, n) === !1 ? !1 : void this._nbb()
        },_ii: function(t, i) {
            return this._k1._ii(t, i) === !1 ? !1 : void this._nbb()
        },_jy: function(t, i) {
            return this._k1._jy(t, i) === !1 ? !1 : void this._nbb()
        },_6r: function() {
            return this._k1._6rFlag ? !1 : (this._k1._6rFlag = !0, void this._nbb())
        },_58: function() {
            this._nbv[zh] = 0, this._7u = {}
        },_kt: function() {
            this._ki()
        },_i0: function() {
            this._ki(), this._i0ed = !0, this._6f = !1, this._topCanvas[Pf](), this._85[zh] = 0, this._7o && (this._7o._i0(), delete this._7o)
        },_ki: function() {
            this._nac = !1, this._$c = !0, this._mu[Pf](), this._58(), this._na8._ki(), this._nbb()
        },_8n: function(t, i, n, e) {
            var s = this._kk;
            return new SB(this._nb7(t), this._n8s(i), n / s, e / s)
        },_nb7: function(t) {
            return this._k1._nb7(t)
        },_n8s: function(t) {
            return this._k1._n8s(t)
        },_e6: function(t) {
            return this._k1._e6(t)
        },_e3: function(t) {
            return this._k1._e3(t)
        },_kr: function(t) {
            return this._mu[xl](t.id || t)
        },_$a: function(t) {
            var i = this._8f(t);
            return i.x = this._nb7(i.x), i.y = this._n8s(i.y), i
        },_fo: function(t, i) {
            return {x: this._e6(t),y: this._e3(i)}
        },_e2: function(t, i) {
            return {x: this._nb7(t),y: this._n8s(i)}
        },_8f: function(t) {
            return bi(t, this._mp)
        },_3h: function(t) {
            if (t[PC] !== n)
                return t[PC] ? this._mu[xl](t[PC]) : null;
            var i = Math[Aa](xB[ox] / this._k1._kk) || 1;
            this._j2[ca] && (i *= this._j2[ca]);
            for (var e, s = this._$a(t), h = s.x, r = s.y, f = this._nbv, a = f[zh] - 1; a >= 0; a--)
                if (e = f[a], e._hf && e._hg(h, r, i))
                    return t[PC] = e.id, e;
            t[PC] = null
        },_hg: function(t) {
            var i = this._3h(t);
            if (!i)
                return null;
            var n = Math[Aa](xB[ox] / this._k1._kk) || 1;
            this._j2[ca] && (n *= this._j2[ca]);
            var e = this._$a(t), s = e.x, h = e.y, r = i._hg(s, h, n, !0);
            return r instanceof bR ? r : i
        },_nav: function(t) {
            t.id !== n && (t = t.id);
            var i = this._mu[xl](t);
            return i ? new SB((i.$x || 0) + i[Lu].x, (i.$y || 0) + i[Lu].y, i[Lu][fa], i[Lu][aa]) : void 0
        },_85: null,_26: function() {
            if (!this._85[zh])
                return !1;
            var t = this._85;
            this._85 = [], l(t, function(t) {
                try {
                    t[Um] ? w(t[Bh], t[xr], t[Um]) : t[Bh][Bh](t[xr])
                } catch (i) {
                }
            }, this), this._fd()
        },callLater: function(t, i, n) {
            i && E(i) && (n = i, i = null);
            var e = this._85;
            e[Xh]({call: t,scope: i,delay: n}), this._6f || this._26()
        }}, J(as[br], {_7d: {get: function() {
                return this._k1._7d
            }},_eq: {get: function() {
                return this._k1._eq
            },set: function(t) {
                return !t || 1 > t ? !1 : void (this._k1._eq = t)
            }},_h9: {get: function() {
                return this._k1._h9
            },set: function(t) {
                return !t || 1 > t ? !1 : void (this._k1._h9 = t)
            }},_h5: {get: function() {
                return this._k1._h5
            },set: function(t) {
                return !t || 0 >= t ? !1 : void (this._k1._h5 = t)
            }},_kk: {get: function() {
                return this._k1._h4()
            },set: function(t) {
                this._fu(t)
            }},_mz: {get: function() {
                return this._k1._lh()
            }},_n1: {get: function() {
                return this._k1._li()
            }}}), _s[br] = {_nb5: null,_naj: 0,_9b: 0,_24: !0,_13: !0,_k1: null,_7d: null,_eq: 1.3,_h9: 10,_h5: .1,_kk: 1,_mz: 0,_n1: 0,_7b: function() {
            this._k1._ha(this._nb5._j2)
        },_4w: function() {
            return this._13 = !1, this._63(this._nb5._mp[td], this._nb5._mp[id])
        },_63: function(t, i) {
            return this._naj == t && this._9b == i ? !1 : (this._naj = t, this._9b = i, void this._nb5._3n(t, i))
        },_es: function(t, i, n) {
            n && (n = Math[Ea](this._h5, Math[Ia](this._h9, n)), this._kk = n), this._mz = this._naj / 2 - t * this._kk, this._n1 = this._9b / 2 - i * this._kk, this._24 = !0
        },_2t: function(t, i) {
            t = t || this._naj, i = i || this._9b, this._7d[pr](-this._mz / this._kk, -this._n1 / this._kk, t / this._kk, i / this._kk)
        },_jz: function(t, i, n) {
            return this._fu(this._66() * t, i, n)
        },_jy: function(t, i) {
            return this._fu(this._66() * this._eq, t, i)
        },_ii: function(t, i) {
            return this._fu(this._66() / this._eq, t, i)
        },_fu: function(t, i, e) {
            this._6rFlag = !1, t = Math[Ea](this._h5, Math[Ia](this._h9, t));
            var s = this._66();
            return i === n && (i = this._naj / 2, e = this._9b / 2), t != s && (this._24 = !0, this._nb5._8p(s, t)), this._k1._fu(t / this._kk, i, e)
        },_66: function() {
            return this._kk * this._k1._kk
        },_e4: function(t, i) {
            this._k1._e4(t, i)
        },_nad: function(t, i, n) {
            var e = this._lh(), s = this._li(), h = this._h4();
            return n && (n = Math[Ea](this._h5, Math[Ia](this._h9, n))), t != e || i != s || n && n != h ? (n && n != h ? (n /= this._kk, this._24 = !0) : n = this._k1._kk, t -= e * n, i -= s * n, this._k1._9m(n, t, i), this._nb5._32(e, s, h, arguments[0], arguments[1], arguments[2]), h != arguments[2] && this._nb5._8p(h, arguments[2]), !0) : !1
        },_6r: function() {
            this._6rFlag = !0
        },_h4: function() {
            return this._kk * this._k1._kk
        },_lh: function() {
            return this._mz * this._k1._kk + this._k1._mz
        },_li: function() {
            return this._n1 * this._k1._kk + this._k1._n1
        },_jh: function(t, i) {
            this._13 && this._4w();
            var n = t._j2, e = n[ca] || 1, s = n[td], h = n[id], r = this._naj != s, f = this._9b != h, a = r || f;
            a && t._topCanvas._j2[wa](this._naj, this._9b);
            var _ = this._mz, c = this._n1, u = this._kk;
            if (this._6rFlag) {
                this._6rFlag = !1;
                var o = t._1i();
                o && this._es(o.cx, o.cy, o[Sf])
            }
            if (this._24 || i || a)
                return this._24 = !1, this._kk *= this._k1._kk, this._mz = this._mz * this._k1._kk + this._k1._mz, this._n1 = this._n1 * this._k1._kk + this._k1._n1, this._k1._kk = 1, this._k1._mz = 0, this._k1._n1 = 0, a && n[wa](this._naj, this._9b), t._na8._ml = !0, this._2t(this._naj, this._9b), void ((_ != this._mz || c != this._n1 || u != this._kk) && (t._32(_, c, u, this._mz, this._n1, this._kk), u != this._kk && t._8p(u, this._kk)));
            var d = this._k1._mz, l = this._k1._n1;
            if (d || l) {
                this._k1._mz = 0, this._k1._n1 = 0, this._mz += d, this._n1 += l, this._2t(s, h);
                var b = n.g;
                if (cB)
                    try {
                        var v = b[qa](0, 0, n[fa], n[aa]);
                        b[y_](v, d * e, l * e)
                    } catch (y) {
                        this._e8(b, n, d * e, l * e)
                    }
                else
                    this._e8(b, n, d * e, l * e);
                t._1q(d, l, s, h), t._32(_, c, u, this._mz, this._n1, this._kk)
            }
        },_e8: function(t, n, e, s) {
            var h = this._n8ackCanvas;
            h || (h = this._n8ackCanvas = i[xa](oa), h.g = h[ga](ma)), h[fa] = n[fa], h[aa] = n[aa], h.g[Ix](n, e, s), t._ki(), t[Ix](h, 0, 0)
        },_n8d: function(t) {
            1 != t[oa][ca] && t[Sf](t[oa][ca], t[oa][ca]), t[h_](this._mz, this._n1), t[Sf](this._kk, this._kk)
        },_nb7: function(t) {
            return (t - this._mz) / this._kk
        },_n8s: function(t) {
            return (t - this._n1) / this._kk
        },_e6: function(t) {
            return t * this._kk + this._mz
        },_e3: function(t) {
            return t * this._kk + this._n1
        }};
    var FR = function() {
        this._ge = [], this._j8 = new SB
    };
    FR[br] = {_g3: 20,_ge: null,_ml: !1,_j8: null,_ki: function() {
            this._ml = !1, this._ge[zh] = 0, this._j8[Pf]()
        },_io: function() {
            return this._ml || this._ge[zh] > 0
        },_mh: function(t, i, n, e) {
            this._ml || 0 >= n || 0 >= e || (this._ge[Xh]({x: t,y: i,width: n,height: e}), this._j8[Ol](t, i, n, e))
        },_gz: function(t) {
            this._mh(t.x, t.y, t[fa], t[aa])
        },_e0: function(t, i, n, e) {
            if (!this._j8[Tl](t, i, n, e))
                return !1;
            if (yB || this._ge[zh] >= this._g3)
                return !0;
            for (var s, h = 0, r = this._ge[zh]; r > h; h++)
                if (s = this._ge[h], hi(t, i, n, e, s.x, s.y, s[fa], s[aa]))
                    return !0;
            return !1
        },_k3: function(t, i, n) {
            if (this._ml)
                return t[Na](1, 0, 0, 1, 0, 0), void t[g_](0, 0, i[fa], i[aa]);
            t[Gg]();
            var e, s, h, r, f = n._kk, a = this._ge, _ = i[ca] || 1;
            if (yB || a[zh] >= this._g3)
                return e = n._e6(this._j8.x) * _, s = n._e3(this._j8.y) * _, h = V(e + this._j8[fa] * f * _) - (e = W(e)), r = V(s + this._j8[aa] * f * _) - (s = W(s)), t[g_](e, s, h, r), t[Cy](e, s, h, r), void t[$x]();
            for (var c, u = 0, o = a[zh]; o > u; u++)
                c = a[u], e = n._e6(c.x) * _, s = n._e3(c.y) * _, h = V(e + c[fa] * f * _) - (e = W(e)), r = V(s + c[aa] * f * _) - (s = W(s)), t[g_](e, s, h, r), t[Cy](e, s, h, r);
            t[$x]()
        }};
    var AR = {};
    AR[yR[bx]] = xB[bx], AR[yR[dx]] = xB[dx], AR[yR[lx]] = xB[lx], AR[yR[cx]] = pD[ux], AR[yR[jj]] = 2, AR[yR[Mj]] = 2, AR[yR[zM]] = xB[zM], AR[yR[FM]] = IB[Xl], AR[yR[NM]] = IB[Yl], AR[yR[HM]] = new PB(0, 2), AR[yR[WM]] = 8, AR[yR[JM]] = 8, AR[yR[UM]] = !0, AR[yR[fE]] = 0, AR[yR[_E]] = Lx, AR[yR[dE]] = !0, AR[yR[uE]] = null, AR[yR[oE]] = null, AR[yR[UE]] = IC, AR[yR[WE]] = 1.5, AR[yR[wE]] = U(3438210798), AR[yR[pE]] = 1, AR[yR[ME]] = Lx, AR[yR[yp]] = !0, AR[yR[gS]] = xB[yo], AR[yR[DS]] = xB[yo], AR[yR[To]] = 10, AR[yR[_o]] = 8, AR[yR[fo]] = pD[uo], AR[yR[eo]] = !0, AR[yR[Yu]] = 20, AR[yR[Hu]] = .5, AR[yR[Xu]] = 20, AR[yR[aS]] = 20, AR[yR[TE]] = IB[Xl], AR[yR[CE]] = IB[Yl], AR[yR[OE]] = CC, AR[yR[Bj]] = 1, AR[yR[qj]] = TC, AR[yR[Ij]] = xB[__], pD[OC] = $C, pD[FC] = AC, pD[NC] = zC, xB[BC] = pD[OC];
    var NR = function(t, n) {
        this._l4 = t, S(n) && (n = i[DC](n)), n && n[pl] || (n = i[xa](No)), z(this, NR, [n]), this._l4._$u[Bd](this._10, this), this._l4._5[Bd](this._1t, this), this._l4._1k[Bd](this._9e, this), this._l4._15[Bd](this._72, this), this._l4._$l[Bd](this._3b, this), this._l4._$o[Bd](this._3z, this), this._n84 = {}, this._41(xB[BC], !0)
    };
    NR[br] = {_9: null,_3z: function(t) {
            var i = t[r_], n = t[Ra];
            if (n)
                if (this._nac) {
                    var e, s;
                    if (I(n))
                        for (var h = 0, r = n[zh]; r > h; h++)
                            s = n[h].id, e = this._mu[xl](s), e && (e[Qp] = i[Cc](s), e[HP]());
                    else {
                        if (s = n.id, e = this._mu[xl](s), !e)
                            return;
                        e[Qp] = i[Cc](s), e[HP]()
                    }
                    this._nbb()
                } else {
                    this._9 || (this._9 = {});
                    var e, s;
                    if (I(n))
                        for (var h = 0, r = n[zh]; r > h; h++)
                            s = n[h].id, this._9[s] = !0;
                    else
                        s = n.id, this._9[s] = !0
                }
        },_l4: null,_d7: function(t) {
            var i = t[Vk];
            return i ? new i(t, this._l4) : void 0
        },_10: function() {
        },_1t: function(t) {
            if (!this._nac)
                return !1;
            var i = t[r_], n = t[Nd];
            Ao == n && this._l4[Yk](), Vk == n ? (this._mu[gl](i.id), this._km(i)) : Ap == n && i._hn() && t[Pr] && this._62(i);
            var e = this._mu[xl](i.id);
            e && e._nac && e[qC](t) && this._nbb()
        },_3k: function(t) {
            var i = this._kr(t);
            i && (i[Gp](), this._nbb())
        },_9e: function(t) {
            if (!this._nac)
                return !1;
            switch (this._$c = !0, t[Nd]) {
                case VB[jb]:
                    this._km(t[Ra]);
                    break;
                case VB[Mb]:
                    this._f3(t[Ra]);
                    break;
                case VB[Eb]:
                    this._il(t[Ra])
            }
        },_ki: function() {
            this._n84 = {}, B(this, NR, RC)
        },_n84: null,_km: function(t) {
            var i = this._d7(t);
            i && (this._mu[ir](i), this._nac && (this._n84[t.id] = t), this._nbb())
        },_f3: function(t) {
            if (kD[hr](t)) {
                for (var i, n = [], e = 0, s = t[zh]; s > e; e++)
                    i = t[e].id, n[Xh](i), delete this._n84[i];
                t = n
            } else
                t = t.id, delete this._n84[t];
            this._mu[Yh](t) && this._nbb()
        },_il: function() {
            this._ki()
        },_72: function(t) {
            return this._nac ? void (t[r_] instanceof uR && !this._n84[t[r_].id] && (t[ib] && (this._3k(t[ib]), t[ib].__6f = !0), t[Pr] && (this._3k(t[Pr]), t[Pr].__6f = !0), this._62(t[r_]))) : !1
        },_3b: function(t) {
            return this._nac ? void (t[r_] instanceof uR && !this._n84[t[r_].id] && this._62(t[r_])) : !1
        },_nan: function(t) {
            return t ? this._$w() : void this._9g()
        },_3a: function(t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[$c](!0);
                i ? i._fd(this._l4) : t._edgeBundleInvalidateFlag = !1
            }
        },_$w: function() {
            var t, i = (this._l4, this._l4[sd]), n = this._mu, e = [], s = 1;
            if (i[LC](function(i) {
                return i instanceof cR ? (this._3a(i), void e[Xh](i)) : (t = this._d7(i), void (t && (n[ir](t), t._hf = this._dx(i, !1, !0), i.__l8 = s++)))
            }, this), n[zh])
                for (var h = n._j0, s = h[zh] - 1; s >= 0; s--)
                    t = h[s], t._hf && this._3o(t, t[Y_]);
            for (var r, s = 0, f = e[zh]; f > s; s++)
                if (r = e[s], t = this._d7(r))
                    if (t._hf = this._dx(r, !0, !0), t._hf) {
                        this._3o(t, r, !0), n[ir](t);
                        var a = r[Fc], _ = r[Oc], c = a.__l8 || 0;
                        a != _ && (c = Math[Ea](c, _.__l8 || 0)), r.__l8 = c
                    } else
                        n[ir](t);
            if (e[zh] && n._j0[ZP](function(t, i) {
                return t[Y_].__l8 - i[Y_].__l8
            }), this._9) {
                var u = i[ed];
                for (var o in this._9)
                    if (u[Cc](o)) {
                        var t = n[xl](o);
                        t && (t[Qp] = !0)
                    }
                this._9 = null
            }
        },_9g: function() {
            for (var t in this._n84) {
                var i = this._n84[t];
                i instanceof uR ? this._62(i) : this._60(i)
            }
            this._n84 = {};
            for (var n, e, s, h = this._mu._j0, r = [], f = h[zh] - 1; f >= 0; f--)
                n = h[f], e = n[Y_], s = e instanceof cR, s && this._3a(e), n._hf = this._dx(e, s), n._hf ? s ? r[Xh](n) : this._3o(n, e) && !this._$c && (this._$c = !0) : e.__hfChanged && n._nac && (n.__oldBounds = {x: n.$x + n[Lu].x,y: n.$y + n[Lu].y,width: n[Lu][fa],height: n[Lu][aa]});
            if (r[zh])
                for (var f = 0, a = r[zh]; a > f; f++)
                    n = r[f], this._3o(n, n[Y_]) && !this._$c && (this._$c = !0)
        },_3o: function(t, i, e) {
            if (e || e === n && i instanceof cR)
                return i.__4n && (i.__4n = !1, t._4n()), this._n8v(t);
            if (i.__6f && i._hn() && (t._51(), i.__6f = !1), this._n8v(t)) {
                var s = this._4f(i);
                return s && (s.__6f = !0), i[Gk]() && i[Xc](function(t) {
                    t.__4n = !0
                }, this), !0
            }
        },_38: function(t, i) {
            var n = t[Fc], e = t[Oc], s = i[GC](n.id);
            if (n == e)
                return s;
            var h = i[GC](e.id);
            return Math[Ea](s, h)
        },_37: function(t, i) {
            var n = this[sd]._g1(t);
            return n ? i[GC](n.id) : 0
        },_62: function(t) {
            var i = this._mu, n = i[xl](t.id);
            if (!n)
                throw new Error(YC + t[Er] + HC);
            var s = this._37(t, i), h = [n];
            t[Ah]() && e(t, function(t) {
                t instanceof uR && (n = i[xl](t.id), n && h[Xh](n))
            }, this), this._4d(i, s, h)
        },_60: function(t) {
            var i = this._mu[xl](t.id);
            if (i) {
                var n = this._38(t, this._mu);
                this._mu[XC](i, n)
            }
        },_4d: function(t, i, n) {
            function e(t) {
                s[ir](t)
            }
            var s = new mB;
            l(n, function(n) {
                i = t[WC](n, i), n[Y_][Xc](e)
            }, this), 0 != s[zh] && s[uc](this._60, this)
        },_8t: function(t) {
            return t[$c](!0)
        },_5v: function(t) {
            if (!t[_C]())
                return !1;
            var i = t[$c](!0);
            i && i[VC]() !== !1 && this._nbb()
        },_4f: function(t) {
            var i = be(t);
            return i && i[Ap] ? i : null
        },_fa: function(t) {
            return be(t)
        },_2u: function(t, i, n) {
            t._$s = !1;
            var e = t._hf;
            t._hf = this._53(t, i), n || t._hf == e || (t.__hfChanged = !0)
        },_53: function(t, i) {
            return this._42(t, i) ? !this._l4._hfFilter || this._l4._hfFilter(t) !== !1 : !1
        },_dx: function(t, i, n) {
            return t._$s && this._2u(t, i, n), t._hf
        },_9k: function(t) {
            return !this._l4._3x || this._l4._3x == Qs(t)
        },_42: function(t, i) {
            if (t[UC] === !1)
                return !1;
            if (i === n && (i = t instanceof cR), !i) {
                if (this._l4._3x) {
                    if (!t[Bc](this._l4._3x))
                        return !1
                } else if (Qs(t))
                    return !1;
                return !t._dg
            }
            var e = t[Fc], s = t[Oc];
            if (!e || !s)
                return !1;
            if (e == s && !t[zc]())
                return !1;
            if (t[_C]()) {
                var h = t[$c](!0);
                if (h && !h._dx(t))
                    return !1
            }
            var r = this._dx(e, !1), f = this._dx(s, !1);
            return r && f ? !0 : !1
        },_7p: null,_7o: null,_41: function(t, i) {
            return i || t != this._7p ? (this._7p = t, this._7o && (this._7o._i0(), delete this._7o), t == pD[OC] ? void (this._7o = new ih(this, this._mp)) : t == pD[NC] ? void (this._7o = new th(this, this._mp)) : void 0) : !1
        },_32: function(t, i, n, e, s, h) {
            this._l4._4e(new DB(this._l4, Lo, {tx: e,ty: s,scale: h}, {tx: t,ty: i,scale: n})), this._5n()
        },_8p: function(t, i) {
            this._l4._4e(new DB(this._l4, Sf, i, t))
        },_5n: function() {
            this._7o && this._7o._jh(), this._l4._4e(new DB(this._l4, $a))
        },_17: function(t, i) {
            this._l4._4e(new DB(this._l4, QC, i, t)), this._5n()
        }}, N(NR, as), J(NR[br], {graphModel: {get: function() {
                return this._l4._l4Model
            }}});
    var zR = function(i, n) {
        this._$u = new HB, this._$u.on(function(t) {
            Mp == t[Nd] && this[Yk]()
        }, this), this._1k = new HB, this._1k[Bd](function(t) {
            !this[Mp] || t[Nd] != VB[Eb] && t[Nd] != VB[Mb] || this[sd][Io](this[Mp]) || (this[Mp] = null)
        }, this), this._5 = new HB, this._15 = new HB, this._$l = new HB, this._$o = new HB, this[sd] = n || new Je, this._8v = new NR(this, i), this._3d = new Eh(this), this._1f = new HB, this._onresize = sD(t, JC, function() {
            this[ZC]()
        }, !1, this), this._8v._mp[KC] = this[KC][Px](this), this._8v._mp[tT] = this[tT][Px](this)
    };
    zR[br] = {originAtCenter: !0,editable: !1,ondragover: function(t) {
            this[bC] && kD[iT](t)
        },getDropInfo: function(t, i) {
            var n = null;
            if (i)
                try {
                    n = JSON[Qf](i)
                } catch (e) {
                }
            return n
        },ondrop: function(t) {
            if (this[bC]) {
                var i, n, e, s, h = t[nT], r = h[gf](Pd), f = this[eT](t, r);
                if (f ? (i = f[tg], n = f[Ha], e = f[Ow], s = f[Dp]) : (i = h[gf](tg), n = h[gf](Ha), e = h[gf](Ow), s = h[gf](Dp)), i || e) {
                    kD[iT](t);
                    var a = this[ad](t);
                    a = this[sT](a.x, a.y);
                    var _;
                    if (n && hT != n ? Lp == n ? _ = this[rT](e, a.x, a.y) : mp == n ? _ = this[fT](e, a.x, a.y) : qp == n ? (_ = this[aT](e, a.x, a.y), s && (s = Us(s), s && (_[Dp] = s))) : (n = Z(n), n instanceof Function && n[br] instanceof uR && (_ = new n, _[Er] = e, _[fp] = new pB(a.x, a.y), this._l4Model[ir](_))) : _ = this[_T](e, a.x, a.y), _) {
                        if (i && (i = Us(i), i && (_[tg] = i)), t[Gw]) {
                            var c = this[mf](t);
                            (c[Ao] || c instanceof lR) && (_[Tc] = c)
                        }
                        if (f[cT])
                            for (var u in f[cT])
                                _[u] = f[cT][u];
                        if (f[uT])
                            for (var u in f[uT])
                                _[pr](u, f[uT][u]);
                        if (f[oT] && _[Qk](f[oT]), this[dT](_, t, f) === !1)
                            return !1;
                        var o = new Mh(this, Mh[lT], t, _);
                        return this[bT](o), _
                    }
                }
            }
        },enableDoubleClickToOverview: !0,_8v: null,_$u: null,_1k: null,_5: null,_$o: null,_15: null,_$l: null,_1n: function(t) {
            return this._$u[jr](t)
        },_4e: function(t) {
            this._$u[Mr](t)
        },isVisible: function(t) {
            return this._8v._dx(t)
        },isMovable: function(t) {
            return t instanceof uR && t[vT] !== !1
        },isSelectable: function(t) {
            return t[yT] !== !1
        },isEditable: function(t) {
            return t[bC] !== !1
        },isRotatable: function(t) {
            return t[cP] !== !1
        },isResizable: function(t) {
            return t[xT] !== !1
        },canLinkFrom: function(t) {
            return t[gT] !== !1
        },canLinkTo: function(t) {
            return t[gT] !== !1
        },createNode: function(t, i, n) {
            var e = new uR(t, i, n);
            return this._l4Model[ir](e), e
        },createText: function(t, i, n) {
            var e = new Ke(t, i, n);
            return this._l4Model[ir](e), e
        },createShapeNode: function(t, i, n, e) {
            E(i) && (e = n, n = i, i = null);
            var s = new oR(t, i);
            return s[hp] = new pB(n, e), this._l4Model[ir](s), s
        },createGroup: function(t, i, n) {
            var e = new lR(t, i, n);
            return this._l4Model[ir](e), e
        },createEdge: function(t, i, n) {
            if (t instanceof uR) {
                var e = n;
                n = i, i = t, t = e
            }
            var s = new cR(i, n);
            return t && (s[Lk] = t), this._l4Model[ir](s), s
        },addElement: function(t) {
            this._l4Model[ir](t)
        },removeElement: function(t) {
            this._l4Model[Yh](t)
        },clear: function() {
            this._l4Model[Pf]()
        },getStyle: function(t, i) {
            var e = t._iw[i];
            return e !== n ? e : this._iw && (e = this._iw[i], e !== n) ? e : AR[i]
        },translate: function(t, i, n) {
            return n ? this[mT](this.tx + t, this.ty + i, this[Sf], n) : this._8v._e4(t, i)
        },translateTo: function(t, i, n, e) {
            if (e) {
                var s = this._6b();
                return s._lg(t, i, n, e)
            }
            return this._8v._nad(t, i, n)
        },centerTo: function(t, i, n, e) {
            return (!n || 0 >= n) && (n = this[Sf]), this[mT](this[fa] / 2 - t * n, this[aa] / 2 - i * n, n, e)
        },moveToCenter: function(t, i) {
            this[wT](function() {
                var n = this[$a];
                this[kT](n.cx, n.cy, t, i)
            }, this)
        },zoomToOverview: function(t) {
            return t ? this[wT](function() {
                var i = this._8v._1i();
                i && this[kT](i.cx, i.cy, i[Sf], t)
            }, this) : void this._8v._6r()
        },zoomAt: function(t, i, e, s) {
            if (s === n && (s = xB[fd]), i === n && (i = this[fa] / 2), i = i || 0, e === n && (e = this[aa] / 2), e = e || 0, s) {
                var h = this[Sf];
                return t = h * t, t >= this[Kx] || t <= this[pT] ? !1 : (i = t * (this.tx - i) / h + i, e = t * (this.ty - e) / h + e, this[mT](i, e, t, s))
            }
            return this._8v._jz(t, i, e)
        },zoomOut: function(t, i, n) {
            return this[jT](1 / this[MT], t, i, n)
        },zoomIn: function(t, i, n) {
            return this[jT](this[MT], t, i, n)
        },_6b: function() {
            return this._panAnimation || (this._panAnimation = new GR(this)), this._panAnimation
        },enableInertia: !0,_9c: function(t, i) {
            var n = this._6b();
            return n._gb(t || 0, i || 0)
        },getUI: function(t) {
            return K(t) ? this._8v._3h(t) : this._8v._kr(t)
        },getUIByMouseEvent: function(t) {
            return this._8v._3h(t)
        },hitTest: function(t) {
            return this._8v._hg(t)
        },globalToLocal: function(t) {
            return this._8v._8f(t)
        },toCanvas: function(t, i) {
            return this._8v._fo(t, i)
        },toLogical: function(t, i) {
            return K(t) ? this._8v._$a(t) : this._8v._e2(t, i)
        },getElementByMouseEvent: function(t) {
            var i = this._8v._3h(t);
            return i ? i[Y_] : void 0
        },getElement: function(t) {
            if (K(t)) {
                var i = this._8v._3h(t);
                return i ? i[Y_] : null
            }
            return this._l4Model[xl](t)
        },invalidate: function() {
            this._8v._nbb()
        },invalidateUI: function(t) {
            t[Xk](), this[Xk]()
        },invalidateElement: function(t) {
            this._8v._3k(t)
        },getUIBounds: function(t) {
            return this._8v._nav(t)
        },forEachVisibleUI: function(t, i) {
            return this._8v._49(t, i)
        },forEachReverseVisibleUI: function(t, i) {
            return this._8v._$x(t, i)
        },forEachUI: function(t, i) {
            return this._8v._ea(t, i)
        },forEachReverseUI: function(t, i) {
            return this._8v._4j(t, i)
        },forEach: function(t, i) {
            return this._l4Model[uc](t, i)
        },getElementByName: function(t) {
            var i;
            return this._l4Model[uc](function(n) {
                return n[Er] == t ? (i = n, !1) : void 0
            }), i
        },focus: function(i) {
            if (i) {
                var n = t[ET] || t[df], e = t[ST] || t[bf];
                return this[yv][kd](), void t[PT](n, e)
            }
            this[yv][kd]()
        },callLater: function(t, i, n) {
            this._8v[wT](t, i, n)
        },exportImage: function(t, i) {
            return rh(this, t, i)
        },setSelection: function(t) {
            return this._l4Model._selectionModel[pr](t)
        },select: function(t) {
            return this._l4Model._selectionModel[Cd](t)
        },unselect: function(t) {
            return this._l4Model._selectionModel[IT](t)
        },reverseSelect: function(t) {
            return this._l4Model._selectionModel[CT](t)
        },selectAll: function() {
            sh(this)
        },unSelectAll: function() {
            this[ed][Pf]()
        },unselectAll: function() {
            this[TT]()
        },isSelected: function(t) {
            return this._l4Model._selectionModel[Io](t)
        },sendToTop: function(t) {
            xe(this._l4Model, t)
        },sendToBottom: function(t) {
            ge(this._l4Model, t)
        },moveElements: function(t, i, n) {
            var e = [], s = new mB;
            return l(t, function(t) {
                t instanceof uR ? e[Xh](t) : t instanceof cR && s[ir](t)
            }), this._er(e, i, n, s)
        },_er: function(t, i, n, e) {
            if (0 == i && 0 == n || 0 == t[zh] && 0 == e[zh])
                return !1;
            if (0 != t[zh]) {
                var s = this._4p(t);
                e = this._4o(s, e), l(s, function(t) {
                    var e = t[hp];
                    e ? t[OT](e.x + i, e.y + n) : t[OT](i, n)
                })
            }
            return !0
        },_4o: function(t, i) {
            return i
        },_4p: function(t) {
            var i = new mB;
            return l(t, function(t) {
                !this[$T](t), i[ir](t), ve(t, i, this._movableFilter)
            }, this), i
        },reverseExpanded: function(t) {
            return this._8v._5v(t)
        },_3d: null,_1f: null,beforeInteractionEvent: function(t) {
            return this._1f[jr](t)
        },onInteractionEvent: function(t) {
            this._1f[Mr](t)
        },addCustomInteraction: function(t) {
            this._3d[FT](t)
        },enableWheelZoom: !0,enableTooltip: !0,getTooltip: function(t) {
            return t[AT] || t[Er]
        },updateViewport: function() {
            this._8v._3i()
        },destroy: function() {
            this._4e(new DB(this, Ru, !0, this._i0ed)), this._i0ed = !0, hD(t, JC, this._onresize), R(this, NT), this._3d[Ru](), this[sd] = new Je;
            var i = this[yv];
            this._8v._i0(), i && (i[zT] = "")
        },onPropertyChange: function(t, i, n) {
            this._$u[Bd](function(e) {
                e[Nd] == t && i[Bh](n, e)
            })
        },removeSelection: function() {
            var t = this[ed]._j0;
            return t && 0 != t[zh] ? (t = t[qh](), this._l4Model[Yh](t), t) : !1
        },removeSelectionByInteraction: function(t) {
            var i = this[ed][zd];
            return i && 0 != i[zh] ? void kD[uy](BT + i[zh], function() {
                var i = this[DT]();
                if (i) {
                    var n = new Mh(this, Mh[qT], t, i);
                    this[bT](n)
                }
            }, this) : !1
        },createShapeByInteraction: function(t, i, n, e) {
            var s = new sq(i);
            i[zh] > 2 && s[m_]();
            var h = this[fT](RT, s, n, e);
            this[dT](h, t);
            var r = new Mh(this, Mh[lT], t, h);
            return this[bT](r), h
        },createLineByInteraction: function(t, i, n, e) {
            var s = new sq(i), h = this[fT](LT, s, n, e);
            h[Nu](kD[GT][Hj], null), h[Nu](kD[GT][Wj], null), h[Nu](kD[GT][eM], !0), this[dT](h, t);
            var r = new Mh(this, Mh[lT], t, h);
            return this[bT](r), h
        },createEdgeByInteraction: function(t, i, n, e) {
            var s = this[YT](HT, t, i);
            if (e)
                s._9j = e;
            else {
                var h = this[XT], r = this[jo];
                this[WT] && (h = this[WT][Vk] || h, r = this[WT][jo] || r), h && (s[Vk] = h), r && (s[jo] = r)
            }
            this[dT](s, n);
            var f = new Mh(this, Mh[lT], n, s);
            return this[bT](f), s
        },onElementCreated: function(t) {
            !t[Tc] && this[Mp] && (t[Tc] = this[Mp])
        },allowEmptyLabel: !1,startLabelEdit: function(t, i, n, e) {
            var s = this;
            n[VT](e.x, e.y, i[Ra], this[Gu](t, yR[DM]), function(n) {
                return s[UT](t, i, n, i[Tc])
            })
        },onLabelEdit: function(t, i, n, e) {
            return n || this[QT] ? void (Ow == i[Er] ? t[Er] = n : e._gc(i, n) === !1 && (i[Ra] = n, this[JT](t))) : (kD[_y](ZT), !1)
        },setInteractionMode: function(t, i) {
            this[KT] = t, this[WT] = i
        },upSubNetwork: function() {
            return this._3x ? this[Mp] = Qs(this._3x) : !1
        },_$s: !1,invalidateVisibility: function() {
            this._$s = !0, this[Xk]()
        }}, J(zR[br], {center: {get: function() {
                return this[sT](this[yv][td] / 2, this[yv][id] / 2)
            }},visibleFilter: {get: function() {
                return this._hfFilter
            },set: function(t) {
                this._hfFilter = t, this[Xk]()
            }},topCanvas: {get: function() {
                return this._8v._topCanvas
            }},propertyChangeDispatcher: {get: function() {
                return this._$u
            }},listChangeDispatcher: {get: function() {
                return this._1k
            }},dataPropertyChangeDispatcher: {get: function() {
                return this._5
            }},selectionChangeDispatcher: {get: function() {
                return this._$o
            }},parentChangeDispatcher: {get: function() {
                return this._15
            }},childIndexChangeDispatcher: {get: function() {
                return this._$l
            }},bounds: {get: function() {
                return this._8v._4i()
            }},interactionDispatcher: {get: function() {
                return this._1f
            }},cursor: {set: function(t) {
                this[yv][sf][tO] = t || this._3d[bd]
            },get: function() {
                return this[yv][sf][tO]
            }},interactionMode: {get: function() {
                return this._3d._nburrentMode
            },set: function(t) {
                this._3d[Dd] = t
            }},scaleStep: {get: function() {
                return this._8v._eq
            },set: function(t) {
                this._8v._eq = t
            }},maxScale: {get: function() {
                return this._8v._h9
            },set: function(t) {
                this._8v._h9 = t
            }},minScale: {get: function() {
                return this._8v._h5
            },set: function(t) {
                this._8v._h5 = t
            }},scale: {get: function() {
                return this._8v._kk
            },set: function(t) {
                return this._8v._kk = t
            }},tx: {get: function() {
                return this._8v._mz
            }},ty: {get: function() {
                return this._8v._n1
            }},styles: {get: function() {
                return this._iw
            },set: function(t) {
                this._iw = t
            }},selectionModel: {get: function() {
                return this._l4Model._selectionModel
            }},graphModel: {get: function() {
                return this._l4Model
            },set: function(t) {
                if (this._l4Model == t)
                    return !1;
                var i = this._l4Model, n = new DB(this, sd, i, t);
                return this._1n(n) === !1 ? !1 : (null != i && (i[iO][xb](this._$u, this), i[zb][xb](this._1k, this), i[Db][xb](this._5, this), i[Lb][xb](this._15, this), i[Gb][xb](this._$l, this), i[Bb][xb](this._$o, this)), this._l4Model = t, this._l4Model && (this._l4Model[iO][Bd](this._$u, this), this._l4Model[zb][Bd](this._1k, this), this._l4Model[Db][Bd](this._5, this), this._l4Model[Lb][Bd](this._15, this), this._l4Model[Gb][Bd](this._$l, this), this._l4Model[Bb][Bd](this._$o, this)), this._8v && this._8v._kt(), void this._4e(n))
            }},count: {get: function() {
                return this._l4Model[zh]
            }},width: {get: function() {
                return this[yv][td]
            }},height: {get: function() {
                return this[yv][id]
            }},viewportBounds: {get: function() {
                return this._8v._7d
            }},html: {get: function() {
                return this._8v._mp
            }},navigationType: {get: function() {
                return this._8v._7p
            },set: function(t) {
                this._8v._41(t)
            }},_3x: {get: function() {
                return this._l4Model._3x
            }},currentSubNetwork: {get: function() {
                return this._l4Model[Mp]
            },set: function(t) {
                this._l4Model[Mp] = t
            }}}), Js[br] = {initialize: function() {
            B(this, Js, lj), this[dP]()
        },_n8j: function() {
            this._mf = new sq, this[bP] = new IR(this._mf), this[bP][G_] = !1, this[XP](this[bP], 0), this[cI] = this[bP]
        },checkBody: function() {
            return this._5x() ? (this._2o = !0, this[bP] ? (this[bP][UC] = !0, this[cI] = this[bP]) : (this._n8j(), pR[VP](this)), void (this[tg] && (this[tg][UC] = !1))) : (this[tg] ? (this[tg][UC] = !0, this[cI] = this[tg]) : this._nax(), void (this[bP] && (this[bP][UC] = !1)))
        },_5x: function() {
            return this[Y_]._hn() && this[Y_][Ap]
        },_mf: null,_2o: !0,_51: function() {
            this._1h = !0, this._2o = !0
        },doValidate: function() {
            if (this._2o && this._5x()) {
                if (this._2o = !1, this[bP][Gp](), this[Y_][Dp]) {
                    this[bP][Ra] = this[Y_][Dp];
                    var t = this._22();
                    return this[bP][Zp] = t.x + t[fa] / 2, this[bP][Kp] = t.y + t[aa] / 2, this[bP][dp] = {width: t[fa],height: t[aa]}, rs[br][bj][Bh](this)
                }
                this[bP][Zp] = 0, this[bP][Kp] = 0;
                var i = this._80(this[Y_][Bp]);
                this._mf[Pf](), i instanceof SB ? Ie(this._mf, i.x, i.y, i[fa], i[aa], i.rx, i.ry) : i instanceof nn ? Ce(this._mf, i) : i instanceof en && Te(this._mf, i), this._mf._6f = !0, this[bP][Gp]()
            }
            return rs[br][bj][Bh](this)
        },_77: function(t, i, n) {
            switch (t) {
                case pD[nO]:
                    return new nn(0, 0, Math[Ea](i, n) / 2);
                case pD[eO]:
                    return new en(0, 0, i, n);
                default:
                    return new SB(-i / 2, -n / 2, i, n)
            }
        },_22: function() {
            return this._80(null)
        },_80: function(t) {
            var i = this[Ra], n = i[s_], e = i[zp], s = 60, h = 60;
            if (e && (s = e[fa], h = e[aa]), !i[Ah]())
                return this._77(t, s, h);
            var r, f = this[Y_]._f5._j0;
            (t == pD[nO] || t == pD[eO]) && (r = []);
            for (var a, _, c, u, o = new SB, d = 0, l = f[zh]; l > d; d++) {
                var b = f[d];
                if (this[po][hd](b)) {
                    var v = this[po][wf](b);
                    v && (a = v.$x + v._fi.x, _ = v.$y + v._fi.y, c = v._fi[fa], u = v._fi[aa], o[Ol](a, _, c, u), r && (r[Xh]({x: a,y: _}), r[Xh]({x: a + c,y: _}), r[Xh]({x: a + c,y: _ + u}), r[Xh]({x: a,y: _ + u})))
                }
            }
            n && o[T_](n);
            var y = this[Y_][hp];
            y ? y[Tp] && (y[Tp] = !1, y.x = o.cx, y.y = o.cy) : y = this[Y_][hp] = {x: o.cx,y: o.cy};
            var x, g = y.x, m = y.y;
            if (t == pD[nO]) {
                x = sn(r), x.cx -= g, x.cy -= m;
                var w = Math[Ea](s, h) / 2;
                return x.r < w && (x.cx += w - x.r, x.cy += w - x.r, x.r = w), x
            }
            return t == pD[eO] ? (x = hn(r, o), x.cx -= g, x.cy -= m, x[fa] < s && (x.cx += (s - x[fa]) / 2, x[fa] = s), x[aa] < h && (x.cy += (h - x[aa]) / 2, x[aa] = h), x) : (x = o, o[fa] < s && (o[fa] = s), o[aa] < h && (o[aa] = h), o[kx](-g, -m), x)
        },_$y: function(t, i, n) {
            if (!this._5x())
                return B(this, Js, sO, arguments);
            var e = this._nbh[YP](this, t, i, n);
            return e = xR[YP](this, t, i, n) || e, e = kR[YP](this, t, i, n) || e, pR[YP](this, t, i, n) || e
        }}, N(Js, rs);
    var BR = {draw: function() {
        }};
    xB[Jo] = hO, xB[Qo] = rO;
    var DR = {position: Vo,"text-align": So}, qR = {padding: fO,transition: aO}, RR = {position: _O,display: cO};
    li(uO, "opacity:0.7;vertical-align:middle;"), li(".Q-Graph-Nav img:hover,img.hover", oO), oB || (li(dO, lO + nD(bO) + vO), li(yO, xO + nD(bO) + gO)), th[br] = {_nbi: function(t, i) {
            return t._hf == i ? !1 : (t._hf = i, void (t[sf][Sk] = i ? "block" : Wo))
        },_3n: function(t, i) {
            var n = i / 2 - this._left._img[id] / 2 + ua;
            this._left._img[sf][xf] = n, this._right._img[sf][xf] = n, this._navPane[sf][fa] = t + ua, this._navPane[sf][aa] = i + ua
        },_9t: function(t, i, n, e) {
            this._nbi(this._top, t), this._nbi(this._left, i), this._nbi(this._n8ottom, n), this._nbi(this._right, e)
        },_i0: function() {
            var t = this._navPane[Tk];
            t && t[Wb](this._navPane)
        },_jh: function() {
            var t = this._nb5._l4;
            if (t) {
                var i = t[$a];
                if (i[H_]())
                    return void this._9t(!1, !1, !1, !1);
                var n = t[mO], e = n.y > i.y + 1, s = n.x > i.x + 1, h = n[Wr] < i[Wr] - 1, r = n[Vr] < i[Vr] - 1;
                this._9t(e, s, h, r)
            }
        }};
    var LR = 8;
    li(wO, kO), li(".Q-Graph-ScrollBar:hover", "background-color: #7E7E7E;" + nD(bO) + ": background-color 0.2s linear;"), li(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), li(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), li(".Q-Graph-ScrollBar--V.Both", pO), li(".Q-Graph-ScrollBar--H.Both", jO), oB || (li(MO, lO + nD(bO) + EO), li(".Q-Graph:hover .Q-Graph-ScrollPane", xO + nD(bO) + ":opacity 0.3s linear;")), ih[br] = {_i0: function() {
            this._verticalDragSupport._i0(), this._horizontalDragSupport._i0(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._m7[Tk] && this._m7[Tk][Wb](this._m7)
        },_m7: null,_nam: null,_8l: null,init: function(t) {
            var n = i[xa](No);
            n[Uh] = SO, oi(n, {width: Uo,height: Uo,position: _O});
            var e = i[xa](No);
            e[Uh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
            var s = i[xa](No);
            s[Uh] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n[Bu](e), n[Bu](s), t[Bu](n), this._m7 = n, this._8l = s, this._nam = e, s[PO] = !0;
            var h = this, r = {ondrag: function(t, i) {
                    var n = h._nb5._l4;
                    if (n) {
                        var e = i[PO], s = e ? t.dx : t.dy;
                        if (s && i[Sf]) {
                            var r = n[Sf] / i[Sf];
                            e ? n[h_](-r * s, 0) : n[h_](0, -r * s), kD[iT](t)
                        }
                    }
                },enddrag: function(t, i) {
                    var n = h._nb5._l4;
                    if (n && n[IO]) {
                        var e = i[PO], s = e ? t.vx : t.vy;
                        if (Math[Ur](s) > .1) {
                            var r = n[Sf] / i[Sf];
                            s *= r, e ? n._9c(-s, 0) : n._9c(0, -s)
                        }
                    }
                }};
            this._verticalDragSupport = new ji(e, r), this._horizontalDragSupport = new ji(s, r)
        },_jh: function() {
            var t = this._nb5._l4;
            if (t) {
                var i = t[$a];
                if (i[H_]())
                    return this._4u(!1), void this._4y(!1);
                var n = t[mO], e = t[fa], s = t[aa], h = t[Sf], r = 1 / h, f = n.x > i.x + r || n[Vr] < i[Vr] - r, a = n.y > i.y + r || n[Wr] < i[Wr] - r, _ = f && a;
                _ ? (j(this._nam, CO), j(this._8l, CO)) : (M(this._nam, CO), M(this._8l, CO)), this._4u(f, n, i, _ ? e - LR : e), this._4y(a, n, i, _ ? s - LR : s)
            }
        },_4u: function(t, i, n, e) {
            if (!t)
                return this._8l[sf][Sk] = Wo, void (this._8l[Sf] = 0);
            var s = Math[Ia](i.x, n.x), h = Math[Ea](i[Vr], n[Vr]), r = h - s, f = e / r;
            this._8l[Sf] = f, this._8l[sf][yf] = parseInt((i.x - s) * f) + ua, this._8l[sf][Vr] = parseInt((h - i[Vr]) * f) + ua, this._8l[sf][Sk] = ""
        },_4y: function(t, i, n, e) {
            if (!t)
                return this._nam[sf][Sk] = Wo, void (this._nam[Sf] = 0);
            var s = Math[Ia](i.y, n.y), h = Math[Ea](i[Wr], n[Wr]), r = h - s, f = e / r;
            this._nam[Sf] = f, this._nam[sf][xf] = parseInt((i.y - s) * f) + ua, this._nam[sf][Wr] = parseInt((h - i[Wr]) * f) + ua, this._nam[sf][Sk] = ""
        }}, nh[br] = {shape: null,initialize: function() {
            B(this, nh, lj), this._nax(), ER[VP](this)
        },_nax: function() {
            this[tg] = new TR(this[Y_][gp]), this[XP](this[tg], 0), this[cI] = this[tg]
        },invalidateShape: function() {
            this[tg][Gp](), this[HP]()
        },_$y: function(t, i, n) {
            var e = this._nbh[YP](this, t, i, n);
            return e = xR[YP](this, t, i, n) || e, ER[YP](this, t, i, n) || e
        },doValidate: function() {
            this[cI] && (this[cI][w_] = null != this._31, this[cI][lp] = this._31);
            var t = this[Y_][hp], i = 0, n = 0;
            t && (i = t.x, n = t.y);
            var e = this.$x != i || this.$y != n;
            return e && (this[hI] = !0), this.$x = i, this.$y = n, PR[br][bj][Bh](this) || e
        }}, N(nh, PR), J(nh[br], {length: {get: function() {
                return this[Ra][zh]
            }}}), eh[br] = {_lp: function() {
            this._j2[sf][TO] = UC
        },_jx: function() {
            this._j2[sf][TO] = Xo
        },clear: function() {
            this._9x[Pf](), this._nbb()
        },contains: function(t) {
            return t instanceof Object && t.id && (t = t.id), this._9x[Cc](t)
        },addDrawable: function(t, i) {
            if (i) {
                var n = {id: ++iB,drawable: t,scope: i};
                return this._9x[ir](n), n
            }
            return t.id || (t.id = ++iB), this._9x[ir](t), t
        },removeDrawable: function(t) {
            return t.id ? void this._9x[Yh](t) : this._9x[gl](t)
        },_9x: null,invalidate: function() {
            this._nbb()
        },_nbb: function() {
            this._nb5._6f || this._je()
        },_je: function() {
            di(this._j2, Lo, "");
            var t = this._nb5._kk, i = this.g;
            i[Na](1, 0, 0, 1, 0, 0), i[g_](0, 0, this._j2[fa], this._j2[aa]), i[Cx](), this._nb5._k1._n8d(i);
            for (var n = this._9x._j0, e = 0, s = n[zh]; s > e; e++)
                i[Cx](), i[Gg](), this._h0(i, n[e], t), i[Yx]();
            i[Yx]()
        },_h0: function(t, i, n) {
            return i instanceof Function ? void i(t, n) : void (i[OO] instanceof Function && i[xr] && i[OO][Bh](i[xr], t, n))
        }}, xB[fd] = !0;
    var GR = function(t) {
        this._l4 = t
    };
    xB[$O] = 600, xB[FO] = xD[AO], GR[br] = {_l4: null,_na: .001,_ek: null,_nbn: function(t) {
            return t > 1 ? 1 : -1 > t ? -1 : t
        },_gb: function(t, i) {
            t *= .6, i *= .6, t = this._nbn(t), i = this._nbn(i), this._lt();
            var n = Math[Pa](t * t + i * i);
            if (.01 > n)
                return !1;
            var e = Math[Ia](xB[$O], n / this._na);
            this._speedX = t, this._speedY = i, this._naX = t / e, this._naY = i / e, this._ek = new mD(this._5m, this, e, xD[NO]), this._ek._k6()
        },_5m: function(t, i) {
            if (0 != t) {
                var n = this._speedX * i - .5 * this._naX * i * i, e = this._speedY * i - .5 * this._naY * i * i;
                this._speedX -= this._naX * i, this._speedY -= this._naY * i, this._l4[h_](n, e)
            }
        },_lt: function() {
            this._ek && this._ek._lt()
        },_id: function(t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t, n = this._fromTY + (this._toTY - this._fromTY) * t, e = this._fromScale + (this._toScale - this._fromScale) * t;
            this._l4[mT](i, n, e)
        },_lg: function(t, i, n, e) {
            var s = this._l4, h = s[Sf];
            if (0 >= n && (n = h), this._lt(), t != s.tx || i != s.ty || n != h) {
                var r, f, a;
                e instanceof Object && (r = e[zO], f = e[BO], a = e[DO]);
                var _ = s.tx, c = s.ty;
                if (!r) {
                    var u = jB(t, i, _, c);
                    if (r = u / 2, n != h) {
                        var o = n > h ? n / h : h / n;
                        r = Math[Ea](r, 50 * o)
                    }
                }
                f = f || xB[$O], a = a || xB[FO], r = Math[Ia](f, r), this._fromTX = _, this._fromTY = c, this._fromScale = h, this._toTX = t, this._toTY = i, this._toScale = n, this._ek = new mD(this._id, this, r, a), this._ek._k6()
            }
        }}, xB[qO] = 8, xB[RO] = 4, xB[LO] = 30, xB[GO] = 20;
    var YR = Math.PI / 4;
    fh[br] = {onElementRemoved: function(t, i) {
            this[YO] && (t == this[YO] || I(t) && m(t, this[YO])) && this[Ru](i)
        },onClear: function(t) {
            this[YO] && this[Ru](t)
        },destroy: function() {
            delete this[YO], this[HO]()
        },invalidate: function() {
            this[dd][Xk]()
        },removeDrawable: function() {
            this._goId && (this[dd][HO](this._goId), delete this._goId, this[Xk]())
        },addDrawable: function() {
            this._goId || (this._goId = this[dd][XO](this[WO], this).id, this[Xk]())
        },doDraw: function() {
        },escapable: !0,onkeydown: function(t, i) {
            this[VO] && 27 == t[Hw] && (O(t), this[Ru](i))
        }}, kD[UO] = wh, ah[br] = {defaultCursor: vd,getInteractionInstances: function(t) {
            if (!this[ld])
                return null;
            for (var i = [], n = 0, e = this[ld][zh]; e > n; n++) {
                var s = this[ld][n];
                s instanceof Function ? i[Xh](new s(t)) : s instanceof Object && i[Xh](s)
            }
            return i
        }}, _h[br] = {_dr: null,_jf: null,destroy: function() {
            B(this, _h, Ru, arguments), delete this._jf, delete this._9h, delete this._dr
        },doDraw: function(t) {
            var i = this[Yf];
            i && (i[uc](function(i) {
                this[QO](t, i)
            }, this), this[JO] && t[m_](), this[ZO](t))
        },styleDraw: function(t) {
            var i = ch(this[po][WT], this[KO]());
            i[La] && (t[La] = i[La], i[Ng] && (t[Ng] = i[Ng]), i[zg] && (t[zg] = i[zg]), i[W_] && (t[W_] = i[W_], t[Z_] = i[Z_] || 0), t[Dx] = i[Dx], t[Ba]()), i[Tx] && (t[Tx] = i[Tx], t[Da]())
        },drawPoint: function(t, i, n) {
            if (n)
                return void t[Uc](i.x, i.y);
            if (kD[hr](i)) {
                var e = i[0], s = i[1];
                t[jx](e.x, e.y, s.x, s.y)
            } else
                t[Qc](i.x, i.y)
        },_g6: function(t) {
            this._jf || (this._jf = [], this[XO]()), this._jf[Xh](t), this[Xk]()
        }}, J(_h[br], {currentPoint: {get: function() {
                return this._9h
            },set: function(t) {
                this._9h = t, this[Xk]()
            }},points: {get: function() {
                return this._9h && this._jf && this._jf[zh] ? this._jf[Lh](this._9h) : void 0
            }}}), N(_h, fh), uh[br] = {destroy: function() {
            B(this, uh, Ru, arguments), delete this._k6Time, delete this[t$]
        },doDraw: function(t, i) {
            return this._jf ? this._jf[zh] <= 1 ? lh[br][WO][Bh](this, t, i) : void B(this, uh, WO, arguments) : void 0
        },ondblclick: function(t, i) {
            this[Ru](i)
        },finish: function(t, i, n) {
            if (this._k6Time && Date[Kf]() - this._k6Time < 200)
                return void this[Ru](i);
            var e;
            this._jf && this._jf[zh] >= 2 && (this._jf[_w](), e = new mB, l(this._jf, function(t) {
                if (kD[hr](t)) {
                    var i = t[0], n = t[1];
                    e[ir](new nq(pD[pg], [i.x, i.y, n.x, n.y]))
                } else
                    e[ir](new nq(pD[kg], [t.x, t.y]))
            }, this)), i[i$](this[t$], n, t, e), this[Ru](i)
        },onstart: function(t, i) {
            var n = t[gf](), e = n instanceof uR;
            return this[t$] ? e ? void this[n$](t, i, n) : void this._g6(i[sT](t)) : void (e && (this[t$] = n, this._k6Time = Date[Kf](), this._g6(i[sT](t))))
        },onmousemove: function(t, i) {
            this[t$] && (this[e$] = i[sT](t))
        },startdrag: function(t) {
            this[t$] && (t[s$] = !0)
        },ondrag: function(t, i) {
            this[t$] && (this[e$] = i[sT](t))
        },enddrag: function(t, i) {
            if (this[t$]) {
                var n = t[gf]();
                n instanceof uR && this[n$](t, i, n)
            }
        },getDefaultDrawStyles: function() {
            return {lineWidth: AR[yR[WE]],strokeStyle: AR[yR[UE]]}
        }}, N(uh, _h), oh[br] = {getDefaultDrawStyles: function() {
            return {lineWidth: AR[yR[Bj]],strokeStyle: AR[yR[qj]],fillStyle: AR[yR[Hj]]}
        },finish: function(t, i) {
            if (this._jf && this._jf[zh]) {
                var n = this._jf, e = 0, s = 0, h = 0;
                n[uc](function(t) {
                    return kD[hr](t) ? void t[uc](function() {
                        e += t.x, s += t.y, h++
                    }) : (e += t.x, s += t.y, void h++)
                }), e /= h, s /= h;
                var r = [];
                n[uc](function(t, i) {
                    if (0 == i)
                        return void r[Xh](new nq(pD[wg], [t.x - e, t.y - s]));
                    if (kD[hr](t)) {
                        var n = t[0], h = t[1];
                        r[Xh](new nq(pD[pg], [n.x - e, n.y - s, h.x - e, h.y - s]))
                    } else
                        r[Xh](new nq(pD[kg], [t.x - e, t.y - s]))
                }), this[xa](t, r, e, s), this[Ru](i)
            }
        },startdrag: function(t) {
            t[s$] = !0
        },createElement: function(t, i, n, e) {
            return this[po][h$](t, i, n, e)
        },onstart: function(t, i) {
            var n = i[sT](t);
            this._dr = n, this._g6(n)
        },onmousemove: function(t, i) {
            this._dr && (this[e$] = i[sT](t))
        },ondblclick: function(t, i) {
            if (this._dr) {
                if (this._jf[zh] < 3)
                    return void this[Ru](i);
                delete this._jf[this._jf[zh] - 1], this[n$](t, i)
            }
        },isClosePath: !0}, N(oh, _h), kD[r$] = oh, dh[br] = {isClosePath: !1,createElement: function(t, i, n, e) {
            return this[po][f$](t, i, n, e)
        },getDefaultDrawStyles: function() {
            return {lineWidth: AR[yR[Bj]],strokeStyle: AR[yR[qj]]}
        }}, N(dh, oh), kD[a$] = dh, lh[br] = {destroy: function(t) {
            B(this, lh, Ru, arguments), t[tO] = "", this[t$] = null
        },doDraw: function(t) {
            if (this[t$] && this[e$]) {
                var i, n;
                this[po][WT] && (i = this[po][WT][Vk], n = this[po][WT][jo]), i = i || this[po][XT] || kD[_$], n = n || this[po][jo];
                var e = i[wC] || kD[_$][wC], s = this[po][wf](this[t$]);
                s && s[Mo] && (s = s[Mo][So], e(t, s, this[e$], n), this[ZO](t))
            }
        },canLinkFrom: function(t, i) {
            return t instanceof uR && i[c$](t)
        },canLinkTo: function(t, i) {
            return t instanceof uR && i[u$](t, this[t$])
        },startdrag: function(t, i) {
            var n = t[gf]();
            this[c$](n, i) && (t[s$] = !0, this[t$] = n, i[tO] = $v, this[XO]())
        },ondrag: function(t, i) {
            this[t$] && (kD[iT](t), this[e$] = i[sT](t), this[Xk]())
        },enddrag: function(t, i) {
            if (this[t$]) {
                this[Xk]();
                var n = t[gf]();
                this[u$](n, i) && i[i$](this[t$], n, t), this[Ru](i)
            }
        },getDefaultDrawStyles: function() {
            return {lineWidth: AR[yR[WE]],strokeStyle: AR[yR[UE]]}
        }}, N(lh, _h), kD[o$] = lh, gh[br] = {html: null,createHTML: function() {
            var t = i[xa](d$);
            t[Uh] = l$, t[sf][L_] = Vo, t[sf][Fx] = So, t[sf][ly] = b$, t[sf][s_] = v$, t[sf][y$] = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[sf][Sk] = Wo;
            var n = this;
            return t[x$] = function(t) {
                n[g$](t)
            }, t[m$] = function(t) {
                return 27 == t[Hw] ? void n[w$]() : void 0
            }, t[k$] = function(i) {
                if (13 == i[Hw]) {
                    if (i[fr](), i[Yw])
                        return xh(t, Ma), void n[g$](i);
                    n[p$]()
                }
            }, i[cI][Bu](t), t
        },setText: function(t, i) {
            this[yv][Pr] = t || "", i && (this[yv][sf][md] = i), this[yv][Cd](), this[j$](this[yv])
        },onSizeChange: function(t) {
            var i = (t[yd], t[xd], yh(t));
            return t[sf][fa] = i[fa] + 30 + ua, t[sf][aa] = i[aa] + 10 + ua, i
        },onValueChange: function(t) {
            var i = t[Pu];
            this[j$](i), i[sf][yf] = i.x - i[yd] / 2 + ua
        },startEdit: function(i, n, e, s, h) {
            if (this[yv] || (this[yv] = this[M$]()), !this[E$]) {
                var r = this;
                this[E$] = function(t) {
                    t[Pu] != r[yv] && r[w$]()
                }
            }
            t[rv](S$, this[E$], !0), this[Ou] = h, this[yv].x = i, this[yv].y = n, this[yv][sf][Sk] = cO, this[P$](e, s || 10), vh(this[yv], i, n), this[yv][kd]()
        },isEditing: function() {
            return Wo != this[yv][sf][Sk]
        },cancelEdit: function() {
            this[p$](!0)
        },stopEdit: function(i) {
            if (this[I$]()) {
                t[fv](S$, this[E$]);
                var n = this[yv][Pr];
                if (!i && this[Ou] && this[Ou](n) === !1)
                    return !1;
                this[yv][sf][Sk] = Wo, this[yv][Pr] = null, this[Ou] = null
            }
        },destroy: function() {
            this[yv] && i[cI][Wb](this[yv])
        }}, kD[C$] = gh;
    var HR = function(t) {
        this[po] = t
    };
    HR[br] = {destroy: function(t) {
            t[T$] && (t[T$][Ru](), delete t[T$])
        },ondblclick: function(t, i) {
            var n = t[gf]();
            if (!n)
                return i[Mp] ? void i[O$]() : void (i[$$] && i[F$](xB[fd]));
            if (i[bC] && i[A$](n)) {
                var e = i[N$](t);
                if (e instanceof CR && e[bC] !== !1) {
                    var s = i[T$];
                    s || (i[T$] = s = new gh);
                    var h = e[Oa]();
                    return h = i[z$](h.x + h[fa] / 2, h.y + h[aa] / 2), h = bh(h.x, h.y, i[yv]), void i[B$](n, e, s, h)
                }
            }
            var r = n instanceof lR, f = n instanceof cR && n[D$]();
            return n._45 && (Mi(t) || !r && !f) ? void (i[Mp] = n) : r ? void (n[Ap] = !n[Ap]) : f ? void this[po][VC](n) : void 0
        }};
    var XR = function(t) {
        this[po] = t
    };
    XR[br] = {onkeydown: function(t, i) {
            if (i[bC]) {
                var n = t[Hw];
                if (8 == n || 46 == n || 127 == n)
                    return i[q$](t), void C(t);
                if (Mi(t)) {
                    if (67 == n)
                        ;
                    else if (86 == n)
                        ;
                    else if (90 == n)
                        ;
                    else if (89 != n)
                        return;
                    C(t)
                }
            }
        }};
    var WR = function(t) {
        this[po] = t
    };
    WR[br] = {onkeydown: function(i, n) {
            if (i[Lf] && 83 == i[Hw]) {
                var e = n[R$](n[Sf], n[mO]), s = t[ta](), h = s[L$];
                h[G$] = Y$ + e[fa] + H$ + e[aa];
                var r = h[xa](Bo);
                r[Ro] = e[Ra], h[cI][Bu](r), C(i)
            }
        }};
    var VR = function(t) {
        this[po] = t
    };
    VR[br] = {destroy: function() {
            delete this[X$], delete this[W$]
        },_2d: function(t) {
            var i = new mB;
            return t[ed][uc](function(n) {
                t[$T](n) && t[hd](n) && i[ir](n)
            }, this), i
        },onstart: function(t, i) {
            this[W$] && this[Ru](i)
        },startdrag: function(t, i) {
            if (!t[s$]) {
                var n = t[gf]();
                if (!n || !i[V$](n) || !i[$T](n))
                    return void this[Ru](i);
                t[s$] = !0, this[W$] = n, this[X$] = this._2d(i);
                var e = new Mh(i, Mh[U$], t, this[W$], this[X$][zd]);
                return i[Q$](e) === !1 ? void this[Ru](i) : void i[bT](e)
            }
        },ondrag: function(t, i) {
            if (this[W$]) {
                O(t);
                var n = t.dx, e = t.dy, s = i[Sf];
                n /= s, e /= s;
                var h = new Mh(i, Mh[J$], t, this[W$], this[X$][zd]);
                i[Z$](this[X$][zd], n, e), i[bT](h)
            }
        },enddrag: function(t, i) {
            if (this[W$]) {
                if (this[X$] && this[X$][zh]) {
                    if (t[Gw]) {
                        var n, e = i[sT](t), s = e.x, h = e.y;
                        i[K$](function(t) {
                            var i = t[Ra];
                            if (!this[X$][Io](i) && t[Lu][Fa](s - t.x, h - t.y)) {
                                if (i instanceof kD[HT]) {
                                    if (!i[Ao] || !t._hg(s, h, 1))
                                        return;
                                    for (var e = this[X$][zh]; e-- > 0; ) {
                                        var r = this[X$][kr](e);
                                        if (r instanceof kD[hT] && r[tF](i))
                                            return
                                    }
                                    return n = i, !1
                                }
                                return (i[Ao] || i._hn() && i[Ap]) && (n = i), !1
                            }
                        }, this), n && this[X$][uc](function(t) {
                            for (var i = t[Tc]; i; ) {
                                if (this[X$][Io](i))
                                    return;
                                i = i[Tc]
                            }
                            t[Tc] = n
                        }, this)
                    }
                    var r = new Mh(i, Mh[iF], t, this[W$], this[X$][zd]);
                    i[bT](r)
                }
                this[Ru](i)
            }
        },onpinch: function(t, i) {
            this[W$] && this[bv](t, i)
        },step: 1,onkeydown: function(t, i) {
            if (Mi(t)) {
                var n, e;
                if (37 == t[Hw] ? n = -1 : 39 == t[Hw] ? n = 1 : 38 == t[Hw] ? e = -1 : 40 == t[Hw] && (e = 1), n || e) {
                    var s = this._2d(i)[zd];
                    if (0 != s[zh]) {
                        C(t), n = n || 0, e = e || 0;
                        var h = this[nF] / i[Sf], r = new Mh(i, Mh[iF], t, null, s);
                        i[Z$](s, n * h, e * h), i[bT](r)
                    }
                }
            }
        }};
    var UR = function(t) {
        this[po] = t
    };
    UR[br] = {onkeydown: function(t, i) {
            Mi(t) || (37 == t[Hw] ? (this._5p(i, 1, 0), C(t)) : 39 == t[Hw] ? (this._5p(i, -1, 0), C(t)) : 38 == t[Hw] ? (this._5p(i, 0, 1), C(t)) : 40 == t[Hw] && (this._5p(i, 0, -1), C(t)))
        },_5p: function(t, i, n) {
            t._9c(i, n)
        },onstart: function(t, i) {
            this._k6 && this[Ru](i)
        },_k6: !1,startdrag: function(t, i) {
            t[s$] || (t[s$] = !0, this._k6 = !0, i[tO] = oD)
        },ondrag: function(t, i) {
            this._k6 && (O(t), i[h_](t.dx || 0, t.dy || 0))
        },enddrag: function(t, i) {
            if (this._k6) {
                if (i[IO] !== !1) {
                    var n = t.vx, e = t.vy;
                    (Math[Ur](n) > .1 || Math[Ur](e) > .1) && i._9c(n, e)
                }
                this[Ru](i)
            }
        },onpinch: function(t, i) {
            this._k6 = !0;
            var n = t[wv];
            if (n && 1 != n) {
                var e = i[ad](t[So]);
                i[jT](n, e.x, e.y)
            }
        },destroy: function(t) {
            this._k6 = !1, t[tO] = null
        }}, mh[br] = {onElementRemoved: function(t, i) {
            this[YO] && (t == this[YO] || I(t) && m(t, this[YO])) && this[Ru](i)
        },onClear: function(t) {
            this[YO] && this[Ru](t)
        },destroy: function(t) {
            t[tO] = null, this[YO] && delete this[YO]._editting, delete this[YO], delete this._9j, delete this._9h, delete this._nbanEdit, this._6z()
        },_6z: function() {
            this[eF] && (this[dd][HO](this[eF]), delete this[eF], this[dd][Xk]())
        },_naw: function() {
            this[eF] && this[dd][Io](this[eF]) || (this[eF] = this[dd][XO](this[sF], this).id, this[dd][Xk]())
        },_9j: null,_64: function(t) {
            this._9j = t, this[Xk]()
        },_en: function(t, i, n, e) {
            t[Gg](), t[lm](i, n, this[Td] / e, 0, 2 * Math.PI, !1), t[La] = 1 / e, t[W_] = [], t[Dx] = zx, t[Tx] = "rgba(255, 255, 0, 0.8)", t[Ba](), t[Da]()
        },_go: function(t, i, n, e) {
            e ? t[Uc](i, n) : t[Qc](i, n)
        },drawLine: function(t, i) {
            if (this._9j && this._9j[zh]) {
                t[Cx]();
                var n = this[YO] instanceof oR;
                n && (t[h_](this[YO].x, this[YO].y), this[YO][Xa] && t[Xa](this[YO][Xa]));
                var e, s = [];
                t[Gg](), l(this._9j, function(i) {
                    if (i[Ha] != pD[Eg])
                        for (var n = 0, h = i[Yf]; n + 1 < h[zh]; ) {
                            var r = h[n], f = h[n + 1], a = {x: r,y: f};
                            s[Xh](a), this._go(t, a.x, a.y, null == e), e = a, n += 2
                        }
                }, this), t[La] = 1 / i, t[W_] = [2 / i, 3 / i], t[Dx] = hF, t[Ba](), l(s, function(n) {
                    this._en(t, n.x, n.y, i)
                }, this), t[Yx]()
            }
        },invalidate: function() {
            this[dd][Xk]()
        },_3q: function(t, i) {
            this[YO] = t, t._editting = !0, this._nbanEdit = !0, this._64(i)
        },_6a: function(t, i) {
            if (i[A$](t)) {
                var n = t[rF];
                if (n && 0 != n[zh])
                    return n
            }
        },_ik: function(t, i) {
            t -= this[YO].x, i -= this[YO].y;
            var n = {x: t,y: i};
            return this[YO][Xa] && Fs(n, -this[YO][Xa]), n
        },ondblclick: function(t, i) {
            if (!i[bC])
                return void (this[YO] && this[Ru](i));
            var n = t[gf]();
            if (!n || n == this[YO] || n._editting)
                return void this[Ru](i);
            var e = this._6a(n, i);
            return e ? (this._naw(), void this._3q(n, e)) : void (this[YO] && this[Ru](i))
        },onstart: function(t, i) {
            if (!i[bC])
                return void (this[YO] && this[Ru](i));
            if (!t[s$]) {
                var n = t[gf]();
                if (n == this[YO])
                    return void (this[YO] && this._naw());
                if (this[YO] && this._gs(t, i))
                    return void (t[s$] = !0);
                if (this[YO])
                    return void this[Ru](i);
                if (n instanceof cR) {
                    var e = this._6a(n, i);
                    if (!e)
                        return void (this[YO] && this[Ru](i));
                    this._naw(), this._3q(n, e)
                }
            }
        },onrelease: function() {
            this[YO] && (this._nbanEdit = !0)
        },_9h: null,_gs: function(t, i) {
            var n = i[sT](t);
            this[YO] instanceof oR && (n = this._ik(n.x, n.y));
            var e, s = i[Sf], h = this[Td] / s;
            return l(this._9j, function(t, i) {
                for (var s = 0, r = t[Yf]; s + 1 < r[zh]; ) {
                    var f = r[s], a = r[s + 1], _ = jB(n.x, n.y, f, a);
                    if (h > _)
                        return e = {segment: t,index: i,pointIndex: s}, !1;
                    s += 2
                }
            }, this), e
        },startdrag: function(t, i) {
            if (this[YO] && this._nbanEdit && (this._9h = this._gs(t, i), this._9h)) {
                this._6z(), t[s$] = !0;
                var n = new Mh(i, Mh[fF], t, this[YO]);
                n[aF] = this._9h, i[bT](n)
            }
        },ondrag: function(t, i) {
            if (this[YO] && this._9h) {
                var n = t.dx, e = t.dy, s = i[Sf];
                if (n /= s, e /= s, this[YO][Xa]) {
                    var h = {x: n,y: e};
                    Fs(h, -this[YO][Xa]), n = h.x, e = h.y
                }
                var r = this._9h[_F], f = this._9h[cF];
                r[Yf][f] += n, r[Yf][f + 1] += e, this[YO][np]();
                var a = new Mh(i, Mh[uF], t, this[YO]);
                a[aF] = this._9h, i[bT](a)
            }
        },enddrag: function(t, i) {
            if (this[YO] && this._9h) {
                this._naw();
                var n = new Mh(i, Mh[oF], t, this[YO]);
                n[aF] = this._9h, i[bT](n)
            }
        }}, xB[dF] = 1, xB[lF] = U(3724541951), xB[bF] = U(1430753245);
    var QR = function(t) {
        this[po] = t, this[dd] = t._8v._topCanvas
    };
    QR[br] = {onstart: function(t, i) {
            this._k6 && this[Ru](i)
        },startdrag: function(t, i) {
            t[s$] || (t[s$] = !0, this._k6 = i[sT](t), i[tO] = $v, this._12Id = this[dd][XO](this._12, this).id)
        },ondrag: function(t, i) {
            this._k6 && (O(t), this._end = i[sT](t), this[Xk]())
        },enddrag: function(t, i) {
            this._k6 && (this._fd(), this[Ru](i))
        },onpinch: function(t, i) {
            this._k6 && this[bv](t, i)
        },_12: function(t, i) {
            t[Dx] = xB[lF], t[Tx] = xB[bF], t[La] = xB[dF] / i;
            var n = this._k6.x, e = this._k6.y;
            t[Cy](n, e, this._end.x - n, this._end.y - e), t[Da](), t[Ba]()
        },invalidate: function() {
            return this[Tp] ? void this[dd][Xk]() : (this[Tp] = !0, void w(this._fd, this, 100))
        },_fd: function() {
            if (this[Tp] = !1, !this._k6)
                return void this[dd][Xk]();
            var t = Math[Ia](this._k6.x, this._end.x), i = Math[Ia](this._k6.y, this._end.y), n = Math[Ur](this._k6.x - this._end.x), e = Math[Ur](this._k6.y - this._end.y);
            if (!n || !e)
                return void this[po][ed][Pf]();
            var s, h = [], r = this[po][Sf];
            this[po][vF](function(f) {
                f._hf && this[po][rd](f[Y_]) && (s = f._fi, (fi(t, i, n, e, s.x + f._x, s.y + f._y, s[fa], s[aa]) || On(t, i, n, e, f, r)) && h[Xh](f[Y_]))
            }, this), this[po][ed][pr](h), this[dd][Xk]()
        },destroy: function(t) {
            this._k6 = null, t[tO] = null, this._12Id && (this[dd][HO](this._12Id), delete this._12Id, this[dd][Xk]())
        }};
    var YR = Math.PI / 4;
    wh[br] = {_ey: !1,_f0: !1,onElementRemoved: function(t, i) {
            this[YO] && (t == this[YO] || I(t) && m(t, this[YO])) && this[Ru](i)
        },onClear: function(t) {
            this[YO] && this[Ru](t)
        },ondblclick: function(t, i) {
            this[YO] && this[Ru](i)
        },destroy: function(t) {
            t[tO] = null, delete this[YO], delete this._n8q, delete this._n8ody, delete this._9h, delete this._nbanEdit, delete this._jf, delete this._rotatePoint, delete this._f0, delete this._ey, delete this._insets, this._6z()
        },_6z: function() {
            this._goId && (this[dd][HO](this._goId), delete this._goId, this[dd][Xk]())
        },_naw: function() {
            this._goId && this[dd][Io](this._goId) || (this._goId = this[dd][XO](this._go, this).id, this[dd][Xk]())
        },_n8q: null,_jf: null,_8b: function(t) {
            this._n8q = t;
            var i = this._n8q.x, n = this._n8q.y, e = this._n8q[fa], s = this._n8q[aa];
            if (this._f0) {
                var h = [];
                h[Xh]({x: i,y: n,p: IB[Rl],cursor: yF,rotate: 5 * YR}), h[Xh]({x: i + e / 2,y: n,p: IB[Yl],cursor: xF,rotate: 6 * YR}), h[Xh]({x: i + e,y: n,p: IB[Wl],cursor: Od,rotate: 7 * YR}), h[Xh]({x: i,y: n + s / 2,p: IB[Ll],cursor: gF,rotate: 4 * YR}), h[Xh]({x: i + e,y: n + s / 2,p: IB[Vl],cursor: gF,rotate: 0}), h[Xh]({x: i,y: n + s,p: IB[Gl],cursor: Od,rotate: 3 * YR}), h[Xh]({x: i + e / 2,y: n + s,p: IB[Xl],cursor: xF,rotate: 2 * YR}), h[Xh]({x: i + e,y: n + s,p: IB[Ul],cursor: yF,rotate: YR}), this._jf = h
            }
            this._rotatePoint = this._ey ? {x: i + e / 2,y: n,cursor: dD} : null, this._nbb()
        },_en: function(t, i, n, e) {
            t[Gg]();
            var s = (this[Td] - 1) / e;
            t[Cy](i - s, n - s, 2 * s, 2 * s), t[La] = 1 / e, t[W_] = [], t[Dx] = zx, t[Tx] = "rgba(255, 255, 255, 0.8)", t[Ba](), t[Da]()
        },_5g: function(t, i, n, e, s, h) {
            s = s || this[Td], h = h || mF, t[Gg](), s /= e, t[lm](i, n, s, 0, 2 * Math.PI, !1), t[La] = 1 / e, t[W_] = [], t[Dx] = zx, t[Tx] = h, t[Ba](), t[Da]()
        },_ik: function(t, i) {
            t -= this[YO].x, i -= this[YO].y;
            var n = {x: t,y: i};
            return this[YO][Xa] && Fs(n, -this[YO][Xa]), n
        },_go: function(t, i) {
            if (this._n8q) {
                if (t[Cx](), t[h_](this[YO].x, this[YO].y), this[YO][Xa] && t[Xa](this[YO][Xa]), this._rotatePoint) {
                    this._5g(t, 0, 0, i, 3, wF);
                    var n = this._rotatePoint.x, e = this._rotatePoint.y - this._rotateHandleLength / i;
                    t[Gg](), t[Uc](n, this._rotatePoint.y), t[Qc](n, e), t[La] = 1 / i, t[Dx] = hF, t[Ba](), this._5g(t, n, e, i)
                }
                if (this._jf) {
                    var s = this._n8q.x, h = this._n8q.y, r = this._n8q[fa], f = this._n8q[aa];
                    t[Gg](), t[Cy](s, h, r, f), t[La] = 1 / i, t[W_] = [2 / i, 3 / i], t[Dx] = hF, t[Ba](), l(this._jf, function(n) {
                        this._en(t, n.x, n.y, i)
                    }, this)
                }
                t[Yx]()
            }
        },_nbb: function() {
            this[dd][Xk]()
        },_3q: function(t, i, n, e) {
            this[YO] = t, this._naw();
            var s = i[wf](t);
            this._n8ody = s[cI], this._f0 = n, this._ey = e, this._9p()
        },_9p: function() {
            var t = kh(this._n8ody, this._n8ody._j8), i = kh(this._n8ody, this._n8ody._82);
            this._insets = new PB(t.y - i.y, t.x - i.x, i[Wr] - t[Wr], i[Vr] - t[Vr]), this._8b(i)
        },_nay: function(t, i) {
            return (!t._hn() || !t[Ap]) && i[kF](t)
        },_n80: function(t, i) {
            return (!t._hn() || !t[Ap]) && i[pF](t)
        },_nbo: function(t, i) {
            return t instanceof uR && i[A$](t)
        },onstart: function(t, i) {
            if (!i[bC])
                return void (this[YO] && this[Ru](i));
            if (!t[s$]) {
                var n = i[wf](t), e = t[gf]();
                if (e != this[YO]) {
                    if (this[YO]) {
                        if (this._gs(t, i))
                            return void (t[s$] = !0);
                        this[Ru](i)
                    }
                    if (e && !e._editting && this._nbo(e, i)) {
                        var s = this._nay(e, i, n), h = this._n80(e, i, n);
                        (s || h) && this._3q(e, i, s, h)
                    }
                }
            }
        },onrelease: function(t, i) {
            this[YO] && (this._nbanEdit = !0, this._naw(), i[wT](function() {
                this._9p()
            }, this))
        },_9h: null,_gs: function(t, i) {
            var n = i[sT](t);
            n = this._ik(n.x, n.y);
            var e = i[Sf], s = this[Td] / e;
            if (this._rotatePoint) {
                var h = this._rotatePoint.x, r = this._rotatePoint.y - this._rotateHandleLength / e;
                if (jB(n.x, n.y, h, r) < s)
                    return this._rotatePoint
            }
            if (this._jf && this._jf[zh]) {
                var f;
                return l(this._jf, function(t) {
                    return jB(n.x, n.y, t.x, t.y) < s ? (f = t, !1) : void 0
                }, this), f
            }
        },onmousemove: function(t, i) {
            if (this[YO]) {
                var n = this._gs(t, i);
                if (!n)
                    return void (i[tO] = null);
                if (n != this._rotatePoint && this[YO][Xa]) {
                    var e = n[Xa] + this[YO][Xa];
                    return void (i[tO] = ph(e))
                }
                i[tO] = n[tO]
            }
        },startdrag: function(t, i) {
            if (this[YO] && (this._6z(), this._nbanEdit && (this._9h = this._gs(t, i), this._9h))) {
                if (t[s$] = !0, this._9h == this._rotatePoint)
                    return this._9h[t$] = i[sT](t), void (this._9h[Xa] = this[YO][Xa] || 0);
                var n = new Mh(i, Mh[jF], t, this[YO]);
                n[aF] = this._9h, i[bT](n)
            }
        },_7a: function(t, i, n, e, s, h) {
            var r = this._n8q, f = r.x, a = r.y, _ = r[fa], c = r[aa];
            if (h) {
                var u = e != _;
                u ? s = e * c / _ : e = s * _ / c
            }
            var o = t[gp]._f6, d = e / _, l = s / c, b = -f * d + i, v = -a * l + n;
            o[uc](function(t) {
                if (t[Ha] != pD[Eg]) {
                    var e = t[Yf];
                    if (e && e[zh])
                        for (var s = 0, h = e[zh]; h > s; s += 2) {
                            var r = e[s], _ = e[s + 1];
                            e[s] = (r - f) * d + i - b, e[s + 1] = (_ - a) * l + n - v
                        }
                }
            }), this._n8q[pr](i - b, n - v, e, s), t[OT](t.x + b, t.y + v), t[np]()
        },_4m: function(t, i, n, e, s) {
            if (this[YO] instanceof oR)
                return this._7a(this[YO], t, i, n, e, s);
            var h = this._n8ody instanceof CR;
            if (!h && s) {
                var r = this._n8q, f = this._n8ody[MF], a = n != r[fa];
                a ? e = n * f[aa] / f[fa] : n = e * f[fa] / f[aa]
            }
            var _ = this[YO][lp], c = new EB(n - this._insets[yf] - this._insets[Vr], e - this._insets[xf] - this._insets[Wr]);
            if (c[fa] < 1 && (n = this._insets[yf] + this._insets[Vr] + 1, c[fa] = 1), c[aa] < 1 && (e = this._insets[xf] + this._insets[Wr] + 1, c[aa] = 1), h ? this[YO][Nu](yR[eE], c) : this[YO][dp] = c, _) {
                var u = ai(_, n, e), o = u.x + t - (this._n8ody[Zp] || 0), d = u.y + i - (this._n8ody[Kp] || 0);
                if (this._n8q[pr](t - o, i - d, n, e), this[YO][Xa]) {
                    var u = Fs({x: o,y: d}, this[YO][Xa]);
                    o = u.x, d = u.y
                }
                this[YO].x += o, this[YO].y += d
            } else {
                var o = this._n8q.x * n / this._n8q[fa] - t, d = this._n8q.y * e / this._n8q[aa] - i;
                if (this._n8q[pr](t + o, i + d, n, e), this[YO][Xa]) {
                    var u = Fs({x: o,y: d}, this[YO][Xa]);
                    o = u.x, d = u.y
                }
                this[YO].x -= o, this[YO].y -= d
            }
        },ondrag: function(t, i) {
            if (this[YO] && this._9h) {
                if (this._9h == this._rotatePoint) {
                    var n = i[sT](t), e = ln(n.x, n.y, this[YO].x, this[YO].y, this._9h[t$].x, this._9h[t$].y, !0);
                    return e += this._9h[Xa] || 0, t[Gw] && (e = Math[Aa](e / Math.PI * 4) * Math.PI / 4), void (this[YO][Xa] = e % (2 * Math.PI))
                }
                var s = t.dx, h = t.dy, r = i[Sf];
                if (s /= r, h /= r, this[YO][Xa]) {
                    var n = {x: s,y: h};
                    Fs(n, -this[YO][Xa]), s = n.x, h = n.y
                }
                var f = this._9h.p, a = this._n8q, _ = a.x, c = a.y, u = a[fa], o = a[aa];
                f[Qr] == CB ? s >= u ? (_ += u, u = s - u || 1) : (_ += s, u -= s) : f[Qr] == OB && (-s >= u ? (u = -s - u || 1, _ -= u) : u += s), f[Jr] == $B ? h >= o ? (c += o, o = h - o || 1) : (c += h, o -= h) : f[Jr] == AB && (-h >= o ? (o = -h - o || 1, c -= o) : o += h), this._4m(_, c, u, o, t[Gw]);
                var d = new Mh(i, Mh[EF], t, this[YO]);
                d[aF] = this._9h, i[bT](d)
            }
        },enddrag: function(t, i) {
            if (this[YO] && this._9h && this._9h != this._rotatePoint) {
                var n = new Mh(i, Mh[SF], t, this[YO]);
                n[aF] = this._9h, i[bT](n)
            }
        }}, kD[UO] = wh;
    var JR = function(t) {
        this[po] = t
    };
    JR[br] = {onstart: function(t, i) {
            if (!t[s$]) {
                oB || sB || i[kd](!0);
                var n = t[gf]();
                return n && !i[rd](n) && (n = null), n && Mi(t) ? void i[CT](n) : void (n && i[ed][V$](n) || (n ? (i[PF](n), i[IF](n)) : i[PF](null)))
            }
        },onkeydown: function(t, i) {
            return 27 == t[Hw] ? void i[TT]() : void (Mi(t) && 65 == t[Hw] && (i[CF](), C(t)))
        }};
    var ZR = 0, KR = 15, tL = function(t) {
        this[po] = t
    };
    tL[br] = {_n87: {},_n89: null,_n8a: function() {
            delete this._initTimer, this._n87[Ra] && (this._n89 = i[xa](No), this._n89[Uh] = TF, kD[OF](this._n89, {"background-color": $F,overflow: Xo,"box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",color: Lx,"pointer-events": Wo,border: FF,padding: AF,display: cO,position: Vo}), i[cI][Bu](this._n89), this._nb9(this[po], this._n87[Ra]))
        },_nb9: function(t, i) {
            var n = t[NF](i), e = Pd == i[zF];
            n && !e && (n = n[tf](/\n/g, BF)), e ? this._n89[DF] = n || "" : this._n89[zT] = n || "";
            var s = this._n87[qF][lf] + ZR, h = this._n87[qF][vf] + KR;
            jh(this._n89, s, h), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._deleteTimer = setTimeout(kD[RF](this, this._89), 3e3)
        },_89: function() {
            delete this._deleteTimer, this._n89 && this._n89[Tk] && this._n89[Tk][Wb](this._n89), delete this._n89, this._n87 = {}
        },_f1: function(t, i, n, e) {
            return this._n89 ? void this._nb9(e, t) : void (this._initTimer = setTimeout(kD[RF](this, this._n8a), 1e3))
        },onstart: function(t, i) {
            this[Ru](i)
        },onmousemove: function(t, i) {
            if (i[LF]) {
                var n = t[gf]();
                if (this._n87[qF] = t, this._n87[Ra] != n && (this._n87[Ra] = n, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), n)) {
                    var e = i[NF](n);
                    e && this._f1(n, e, t, i)
                }
            }
        },destroy: function() {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer), this._n89 && this._89()
        }};
    var iL = function(t) {
        this[po] = t
    };
    iL[br] = {onmousewheel: function(t, i) {
            if (i[GF] !== !1) {
                if (i._scaling)
                    return void C(t);
                i._scaling = !0, w(function() {
                    delete i._scaling
                }, this, 100), hh(i, t, t[$f] > 0) !== !1 && C(t)
            }
        }};
    var nL = function(t) {
        this[po] = t
    };
    nL[br] = {onclick: function(t, i) {
            hh(i, t, !Mi(t))
        }};
    var eL = function(t) {
        this[po] = t
    };
    eL[br] = {onclick: function(t, i) {
            hh(i, t, Mi(t))
        }}, N(Mh, BB), Mh[U$] = YF, Mh[J$] = HF, Mh[iF] = XF, Mh[lT] = WF, Mh[qT] = VF, Mh[fF] = UF, Mh[uF] = QF, Mh[oF] = JF, Mh[jF] = ZF, Mh[EF] = KF, Mh[SF] = tA, Mh[iA] = nA, Mh[eA] = sA, Mh[hA] = rA, Mh[fA] = aA, Mh[_A] = cA, Eh[br] = {_9e: function(t) {
            if (this._interactionSupport)
                switch (t[Nd]) {
                    case VB[Mb]:
                        this._interactionSupport._4l(t[Ra]);
                        break;
                    case VB[Eb]:
                        this._interactionSupport._6v(t[Ra])
                }
        },destroy: function() {
            delete this._l4, delete this._4s, this._interactionSupport && (this._interactionSupport._i0(), delete this._interactionSupport)
        },_l4: null,_4s: null,defaultMode: null,_hc: function(t, i, n) {
            this._4s[t] = new ah(i, n), t == this[Dd] && this._interactionSupport._6x(i)
        },addCustomInteraction: function(t) {
            this._interactionSupport._8(t)
        },_mw: function(t) {
            var i = this._4s[t];
            return i ? i : sL[t]
        }}, J(Eh[br], {defaultCursor: {get: function() {
                return this[uA] ? this[uA][bd] : void 0
            }},currentMode: {get: function() {
                return this._nburrentMode
            },set: function(t) {
                this._nburrentMode != t && (this._interactionSupport || (this._interactionSupport = new aD(this._l4)), this._nburrentMode = t, this[uA] = this._mw(this._nburrentMode), this._l4[tO] = this[bd], this._interactionSupport._6x(this[uA] ? this[uA][oA](this._l4) : []))
            }}});
    var sL = {};
    xB[dA] = function(t, i, n) {
        var e = new ah(i, n);
        sL[t] = e
    }, pD[lA] = bA, pD[qd] = vd, pD[vA] = Ed, pD[yA] = xA, pD[gA] = mA, pD[wA] = kA, pD[pA] = jA, pD[MA] = EA, pD[SA] = PA, xB[dA](pD[lA], [JR, UR, iL, WR, HR, tL]), xB[dA](pD[wA], [XR, lh, JR, UR, iL, WR, tL]), xB[dA](pD[pA], [XR, uh, JR, UR, iL, WR, tL]), xB[dA](pD[MA], [XR, oh, JR, UR, iL, WR, tL]), xB[dA](pD[SA], [dh, JR, UR, iL, WR, tL]), xB[dA](pD[qd], [XR, wh, mh, JR, VR, UR, iL, WR, HR, tL]), xB[dA](pD[vA], [XR, wh, mh, JR, VR, QR, UR, iL, WR, HR, tL]), xB[dA](pD[yA], [iL, WR, nL], _D), xB[dA](pD[gA], [iL, WR, eL], cD), kD[IA] = UR, kD[CA] = JR, kD[TA] = VR, kD[OA] = iL, kD[$A] = HR, kD[FA] = WR, kD[AA] = tL, kD[NA] = QR, kD[zA] = mh;
    var hL = function(t) {
        this[po] = t
    };
    kD[BA] = hL, hL[br] = {getNodeBounds: function(t) {
            return this[po][DA](t)
        },isLayoutable: function(t) {
            return t[qA] !== !1
        },getLayoutResult: function() {
        },updateLocations: function(t, i, n, e, s) {
            if (i === !0) {
                if (this[RA] || (this[RA] = new OL), n && (this[RA][zO] = n), e && (this[RA][DO] = e), this[RA][LA] = t, s) {
                    var h = s, r = this;
                    s = function() {
                        h[Bh](r, t)
                    }
                }
                return void this[RA][t$](s)
            }
            for (var f in t) {
                var a = t[f], _ = a[GA];
                _[OT](a.x, a.y)
            }
            s && s[Bh](this, t)
        },_ff: function(t) {
            var i, n, e, s = null;
            t && (i = t[YA], s = t[Ou], n = t[zO], e = t[DO]);
            var h = this[HA](t);
            return h ? (this[XA](h, i, n, e, s), h) : !1
        },doLayout: function(t, i) {
            return this[po] && i !== !0 ? void this[po][wT](function() {
                this._ff(t)
            }, this) : this._ff(t)
        }};
    var rL = 11, fL = 12, aL = 13, _L = 21, cL = 22, uL = 23;
    pD[WA] = rL, pD[VA] = fL, pD[UA] = aL, pD[QA] = _L, pD[JA] = cL, pD[ZA] = uL;
    var oL = KA, dL = tN, lL = iN, bL = nN;
    pD[eN] = oL, pD[sN] = lL, pD[hN] = bL, pD[rN] = dL, kD[fN] = Sh;
    var vL = function(t) {
        this[po] = t
    };
    vL[br] = {hGap: 50,vGap: 50,parentChildrenDirection: _L,layoutType: oL,defaultSize: {width: 50,height: 60},getNodeSize: function(t) {
            if (this[po]._8v._nac) {
                var i = this[po][wf](t);
                if (i)
                    return i._fi
            }
            return t[tg] && t[tg][$a] ? {width: t[tg][$a][fa],height: t[tg][$a][aa]} : this[aN]
        },_nbd: function(t, i) {
            if (this[Rd](t)) {
                var n = this[_N](t), e = t.id, s = (t[cN], i ? this._9q[i.id] : this._n8b);
                this._9q[e] = new yL(t[uN] || this[uN], t[oN] || this[oN], t[dN] || this[dN], t[cN], s, t, n[fa], n[aa])
            }
        },_9q: null,_n8b: null,_ki: function() {
            this._9q = null, this._n8b = null
        },getLayoutResult: function(t) {
            var i, n, e, s, h = this[po];
            t instanceof Object && (i = t.x, n = t.y, h = t[lN] || this[po], e = t[$a], s = t[bN]), this._9q = {}, this._n8b = new yL, this._n8b._mr(this[uN], this[oN], this[cN], this[dN]);
            var r = {}, f = AL(h, this._nbd, this, !1, s);
            return f && (this._n8b._ff(i || 0, n || 0, r), e && e[pr](this._n8b.x, this._n8b.y, this._n8b[fa], this._n8b[aa])), this._ki(), r
        },doLayout: function(t, i) {
            if (E(t)) {
                var n = t, e = 0;
                E(i) && (e = i), t = {x: n,y: e}, i = !0
            }
            return B(this, vL, vN, [t, i])
        }}, N(vL, hL);
    var yL = function(t, i, n, e, s, h, r, f) {
        this._mc = t || 0, this._mb = i || 0, this[dN] = n, this[cN] = e, this[yN] = s, s && s._gh(this), this[GA] = h, this._dz = r, this._nb1 = f
    };
    yL[br] = {_mr: function(t, i, n, e) {
            this._mc = t, this._mb = i, this[cN] = n, this[dN] = e
        },_8a: function() {
            this._f5 = []
        },_mc: 0,_mb: 0,_f5: null,_dz: 0,_nb1: 0,layoutType: null,parentChildrenDirection: null,_gh: function(t) {
            this._f5 || (this._f5 = []), this._f5[Xh](t)
        },_n8z: function(t, i, n, e) {
            var s = new SB;
            return n(this._f5, function(n) {
                n._3p(t, i), s[ir](n), e ? t += n[fa] + this._mc : i += n[aa] + this._mb
            }, this), s
        },_8d: function(t, i, n, e, s) {
            var h, r = e ? this._mc : this._mb, f = e ? this._mb : this._mc, a = e ? "width" : aa, _ = e ? "height" : fa, c = e ? "_dz" : xN, u = e ? "_nb1" : gN, o = e ? "hostDX" : mN, d = e ? "hostDY" : wN, b = new SB, v = 0, y = 0, x = [], g = 0, m = 0;
            n(this._f5, function(n) {
                var s = m >= y;
                n._inheritedParentChildrenDirection = s ? e ? fL : cL : e ? rL : _L, n._3p(t, i), s ? (x[Xh](n), v = Math[Ea](v, n[a]), y += n[_] + f) : (h || (h = []), h[Xh](n), g = Math[Ea](g, n[a]), m += n[_] + f)
            }, this), y -= f, m -= f;
            var w = Math[Ea](y, m), k = r, p = 0;
            this[GA] && (s && (k += this[c] + r, w > this[u] ? this[d] = (w - this[u]) / 2 : p = (this[u] - w) / 2), this[o] = v + k / 2 - this[c] / 2);
            var j = 0, M = p;
            return l(x, function(t) {
                e ? t[kx](v - t[a], M) : t[kx](M, v - t[a]), M += f + t[_], b[ir](t)
            }, this), h ? (M = p, j = v + k, l(h, function(t) {
                e ? t[kx](j, M) : t[kx](M, j), M += f + t[_], b[ir](t)
            }, this), b) : b
        },offset: function(t, i) {
            this.x += t, this.y += i, this[kN] += t, this[pN] += i, this._6y(t, i)
        },_nau: function(t, i) {
            return 2 * this.cx - t - i - t
        },_nas: function(t, i) {
            return 2 * this.cy - t - i - t
        },_m9: function(t) {
            if (this._f5 && 0 != this._f5[zh]) {
                if (t)
                    return this[GA] && (this[kN] += this._nau(this[kN], this._dz)), void l(this._f5, function(t) {
                        t[kx](this._nau(t.x, t[fa]), 0)
                    }, this);
                this[GA] && (this[pN] += this._nas(this[pN], this._nb1)), l(this._f5, function(t) {
                    t[kx](0, this._nas(t.y, t[aa]))
                }, this)
            }
        },_6y: function(t, i) {
            this._f5 && l(this._f5, function(n) {
                n[kx](t, i)
            }, this)
        },_3p: function(t, i) {
            return this.x = t || 0, this.y = i || 0, this._f5 && 0 != this._f5[zh] ? void this._1y(this.x, this.y, this[dN]) : void (this[GA] && (this[fa] = this._dz, this[aa] = this._nb1, this[kN] = this.x, this[pN] = this.y))
        },_73: function(t) {
            this[GA] && (t[this[GA].id] = {node: this[GA],x: this[kN] + this._dz / 2,y: this[pN] + this._nb1 / 2,left: this[kN],top: this[pN],width: this._dz,height: this._nb1}), this._f5 && l(this._f5, function(i) {
                i._73(t)
            }, this)
        },_ff: function(t, i, n) {
            this._3p(t, i), this._73(n)
        },_1y: function(t, i, e) {
            var s, h = t, r = i;
            !this[cN] && this[yN] && (this[cN] = this._inheritedParentChildrenDirection || this[yN][cN]);
            var f = this[cN], a = Sh(f);
            if (this[GA]) {
                s = f == aL || f == uL;
                var _ = Ph(f);
                s || (a ? t += this._dz + this._mc : i += this._nb1 + this._mb)
            }
            var c, u = this[GA] && this[GA][jN] ? v : l;
            if (e == dL)
                c = this._8d(t, i, u, !a, s);
            else {
                var o;
                o = e == oL ? !a : e == lL, c = this._n8z(t, i, u, o, s)
            }
            var d = 0, b = 0;
            c && !c[H_]() && (d = c[fa], b = c[aa], this[ir](c)), this[GA] && (this[kN] = h, this[pN] = r, this[wN] !== n || this[mN] !== n ? (this[kN] += this[wN] || 0, this[pN] += this[mN] || 0) : a ? this[pN] += b / 2 - this._nb1 / 2 : this[kN] += d / 2 - this._dz / 2, this[Ol](this[kN], this[pN], this._dz, this._nb1), _ && this._m9(a))
        },node: null,uiBounds: null}, N(yL, SB), Ch[br] = {layoutDatas: null,isMovable: function(t) {
            return !this[Xd][t.id]
        },_7e: !1,_3t: function() {
            this._7e = !0, this[po]._1k[Bd](this._9y, this), this[po]._1f[Bd](this._2a, this)
        },_1o: function() {
            this._7e = !1, this[po]._1k[xb](this._9y, this), this[po]._1f[xb](this._2a, this)
        },invalidateFlag: !0,invalidateLayoutDatas: function() {
            this[Tp] = !0
        },resetLayoutDatas: function() {
            return this[Tp] = !1, this[MN] = Ih[Bh](this)
        },_2a: function(t) {
            Mh[U$] == t[Nd] ? (this[Xd] = {}, t[zd][uc](function(t) {
                this[Xd][t.id] = t
            }, this)) : Mh[iF] == t[Nd] && (this[Xd] = {})
        },_9y: function() {
            this[EN]()
        },isRunning: function() {
            return this[SN] && this[SN]._df()
        },getLayoutResult: function() {
            this[PN](), this[IN]();
            for (var t = this[CN](this[MN][TN] || 0, this[MN][ON] || 0), i = 0; t > i && this[nF](!1) !== !1; i++)
                ;
            var n = this[MN][$N];
            return this[FN](), n
        },_lk: function() {
            return !1
        },step: function(t) {
            if (t === !1)
                return this._lk(this[AN]);
            (this[Tp] || !this[MN]) && this[IN]();
            var i = this._lk(t), n = this[MN][$N];
            for (var e in n) {
                var s = n[e], h = s[GA];
                this[$T](h) ? h[OT](s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
            }
            return i
        },onstop: function() {
            delete this[MN]
        },start: function(t) {
            if (this[NN]())
                return !1;
            this._7e || this._3t(), this._jsr || (this._jsr = L(this, function(t) {
                return this[nF](t)
            })), this[EN](), this[SN] = new gD(this._jsr);
            var i = this;
            return this[SN]._k6(function() {
                i[FN](), t && t()
            }), !0
        },stop: function() {
            this[SN] && (this[SN]._lt(), this[FN]())
        },getMaxIterations: function(t) {
            return Math[Ia](1e3, 3 * t + 10)
        },minEnergyFunction: function(t, i) {
            return 10 + Math[Ca](t + i, 1.4)
        },resetGraph: function() {
            this._7e || this._3t(), this[IN]()
        },destroy: function() {
            this[PN](), this._1o()
        }}, N(Ch, hL);
    var xL = function(t, i, n, e) {
        this[po] = t, E(i) && (this[Ql] = i), E(n) && (this[zN] = n), E(e) && (this[BN] = e)
    };
    kD[DN] = xL;
    var gL = qN, mL = RN, wL = LN, kL = GN;
    pD[YN] = gL, pD[HN] = mL, pD[XN] = wL, pD[WN] = kL, xL[br] = {angleSpacing: gL,radiusMode: kL,gap: 4,radius: 50,startAngle: 0,_9q: null,_n8b: null,_ki: function() {
            this._9q = null, this._n8b = null
        },getLayoutResult: function(t) {
            var i, n = 0, e = 0, s = this[po];
            t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[lN] || this[po], i = t[$a]), this._9q = {}, this._n8b = new ML(this);
            var h = {}, r = NL(s, this._nbd, this);
            return r && (this._n8b._f5 && 1 == this._n8b._f5[zh] && (this._n8b = this._n8b._f5[0]), this._n8b._ep(!0), this._n8b._6c(n, e, this[BN], h, i)), this._ki(), h
        },_nbd: function(t, i) {
            if (this[Rd](t)) {
                var n = i ? this._9q[i.id] : this._n8b;
                this._9q[t.id] = new ML(this, t, n)
            }
        },defaultSize: 40,getRadius: function() {
            return this[Ql]
        },getNodeSize: function(t) {
            if (this[po]._8v._nac) {
                var i = this[po][wf](t);
                if (i)
                    return (i._fi[fa] + i._fi[aa]) / 2
            }
            return this[aN]
        },getGap: function() {
            return this[zN]
        },_36: function(t, i, n) {
            return this[_N](t, i, n) + this[VN](t, i, n)
        }};
    var pL = function(t) {
        var i, n = this._f5[zh], e = 0, s = 0;
        if (l(this._f5, function(t) {
            var n = t._ep();
            1 > n && (n = 1), s += n, n > e && (e = n, i = t)
        }, this), n > 1) {
            var h = 0, r = {}, f = s / n / 3;
            s = 0, l(this._f5, function(t) {
                var i = t._m3;
                f > i && (i = f), r[t.id] = i, s += i
            }, this);
            var a = EL / s;
            l(this._f5, function(i, n) {
                var e = r[i.id], s = e * a;
                0 === n && (h = t ? -s / 2 : -s), i._ld = h + s / 2, i._lf = s, h += s
            }, this)
        }
        return [e, i._lf]
    }, jL = function(t) {
        var i = this._8u, n = 2 * Math.PI / i, e = 0, s = t ? 0 : i > 1 ? -n / 2 : 0;
        return l(this._f5, function(t) {
            t._ld = s % EL, s += n, t._lf = n;
            var i = t._ep();
            i > e && (e = i)
        }, this), [e, n]
    }, ML = function(t, i, n) {
        this[UN] = t, i && (this._md = i, this.id = i.id), n && (n._gh(this), n._m1 = !1, this._lc = n._lc + 1)
    }, EL = 2 * Math.PI;
    ML[br] = {_lf: 0,_ld: 0,_k2: 0,_eu: 0,_nbf: 0,_lc: 0,_m1: !0,_m3: 0,_fr: 0,_f5: null,_md: null,_gh: function(t) {
            this._f5 || (this._f5 = []), this._f5[Xh](t), t[Tc] = this
        },_gg: function(t) {
            if (this._ld = (this._ld + t) % EL, this._f5) {
                var i = this._f5[zh];
                if (1 == i)
                    return void this._f5[0]._gg(this._ld);
                t = this._ld + Math.PI, l(this._f5, function(i) {
                    i._gg(t)
                }, this)
            }
        },_8u: 0,_78: function(t) {
            return this._md && (this._fr = this[UN]._36(this._md, this._lc, this._m1) / 2), this._f5 ? (this._fr, this._8u = this._f5[zh], this._8u <= 2 || this[UN][QN] == mL ? jL[Bh](this, t) : pL[Bh](this, t)) : null
        },_ep: function(t) {
            var i = this._78(t);
            if (!i)
                return this._m3 = this._fr;
            var n = i[0], e = i[1], s = this[UN][JN](this._md, this._lc);
            if (s < this._fr && (s = this._fr), this._eu = s, this._fr + n > s && (s = this._fr + n), n && this._8u > 1 && e < Math.PI) {
                var h = n / Math[Xr](e / 2);
                h > s && (s = h)
            }
            return this._k2 = s, this._m3 = s + n, this._md && this._f5 && this[UN][ZN] == kL && l(this._f5, function(t) {
                var i = t._m3;
                1 == t._8u && (i /= 2);
                var n = this._fr + i, e = t._lf;
                if (e && e < Math.PI) {
                    var s = Math[Xr](e / 2), h = i / s;
                    h > i && (i = h)
                }
                n > i && (i = n), t._nbf = i
            }, this), (!this._md || t) && this._gg(0), this._m3
        },_6c: function(t, i, n, e, s) {
            if (this._md && (e[this._md.id] = {x: t,y: i,node: this._md}, s && s[Ol](t - this._fr / 2, i - this._fr / 2, this._fr, this._fr)), this._f5) {
                if (!this._md && 1 == this._f5[zh])
                    return void this._f5[0]._6c(t, i, n, e, s);
                n = n || 0;
                var h = this._k2, r = this._eu;
                l(this._f5, function(f) {
                    var a = h;
                    f._nbf && (a = Math[Ea](r, f._nbf));
                    var _ = f._ld + n, c = t + a * Math[Hr](_), u = i + a * Math[Xr](_);
                    f._6c(c, u, n, e, s)
                }, this)
            }
        }}, N(xL, hL);
    var SL = function() {
        z(this, SL, arguments)
    };
    N(SL, Th);
    var PL = function(t, i) {
        this[KN] = t, this[tz] = i, t == i ? (this[zc] = !0, this._l1 = t._kd) : this._l1 = new mB, this._8j = [], this._fv = xB[iz]
    };
    xB[iz] = !0, PL[br] = {node1: null,node2: null,_l1: null,_fv: xB[iz],_8j: null,_fs: null,agentEdge: null,_nar: function(t, i, n) {
            this._l1[uc](function(e) {
                return n && e[Wc] != n && e[Fc] != n ? void 0 : t[Bh](i, e)
            })
        },_56: 0,_55: 0,_hs: function(t, i) {
            return this._l1[ir](t) === !1 ? !1 : (i == this[KN] ? this._56++ : this._55++, this._nac ? void this._19(t) : void (this._nac = !0))
        },_n8x: function(t, i) {
            return this._l1[Yh](t) === !1 ? !1 : (i == this[KN] ? this._56-- : this._55--, this._nbbBindableFlag = !0, this._6f = !0, void this._l1[uc](function(t) {
                t._edgeBundleInvalidateFlag = !0, t.__4n = !0
            }, this))
        },_19: function(t) {
            this._nbbBindableFlag = !0, this._6f = !0, t._edgeBundleInvalidateFlag = !0, t.__4n = !0
        },_nbb: function() {
            this._6f || (this._6f = !0, this._l1[uc](function(t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },isEmpty: function() {
            return this._l1[H_]()
        },isPositiveOrder: function(t) {
            return this[KN] == t[Wc] || this[KN] == t[Fc]
        },canBind: function(t) {
            return t && this._6f && this._fd(t), this._l1[zh] > 1 && this._8j[zh] > 1
        },_hu: function(t) {
            return this._8j[Wh](t)
        },getYOffset: function(t) {
            return this._fs[t.id]
        },_50: function(t) {
            if (!this[cC]())
                return void (this._fs = {});
            var i = {}, n = this._8j[zh];
            if (!(2 > n)) {
                var e = 0, s = this._8j[0];
                i[s.id] = 0;
                for (var h = 1; n > h; h++) {
                    s = this._8j[h];
                    var r = t[Gu](s, yR[aS]) || AR[yR[aS]];
                    e += r, i[s.id] = e
                }
                if (!this[zc])
                    for (var f = e / 2, h = 0; n > h; h++)
                        s = this._8j[h], i[s.id] -= f;
                this._fs = i
            }
        },_n86: function(t) {
            return this._fv == t ? !1 : (this._fv = t, this._nbb(), !0)
        },reverseExpanded: function() {
            return this._n86(!this._fv)
        },_1g: function() {
            this._nbbBindableFlag = !1, this._8j[zh] = 0;
            var t;
            this._l1[uc](function(i) {
                if (i[_C]()) {
                    if (!this[oC](i))
                        return t || (t = []), void t[Xh](i);
                    this._8j[Xh](i)
                }
            }, this), t && (this._8j = t[Lh](this._8j))
        },_dx: function(t) {
            return t == this[vC] || !this[cC]() || this._fv
        },_fd: function(t) {
            this._6f = !1, this._l1[uc](function(t) {
                t._edgeBundleInvalidateFlag = !1
            }), this._nbbBindableFlag && this._1g();
            var i = this._fv, n = this[cC](), e = !n || i;
            l(this._8j, function(t) {
                t._$s = !0, t._hfInBundle = e, e && (t.__4n = !0)
            }, this), e ? this[vC] = null : (this[vC] = this._8j[0], this[vC]._hfInBundle = !0, this[vC].__4n = !0), e && this._50(t)
        }}, J(PL[br], {bindableEdges: {get: function() {
                return this._8j
            }},edges: {get: function() {
                return this._l1._j0
            }},expanded: {get: function() {
                return this._fv
            },set: function(t) {
                return this._fv == t ? !1 : (this._fv = t, void this._nbb())
            }}});
    var IL = function() {
        function t(t, i) {
            this[GA] = t, this[cI] = i
        }
        function i() {
            this[nz] = [], this[ez] = 0
        }
        var n = -1e6, e = .8;
        i[br] = {isEmpty: function() {
                return 0 === this[ez]
            },push: function(i, n) {
                var e = this[nz][this[ez]];
                e ? (e[GA] = i, e[cI] = n) : this[nz][this[ez]] = new t(i, n), ++this[ez]
            },pop: function() {
                return this[ez] > 0 ? this[nz][--this[ez]] : void 0
            },reset: function() {
                this[ez] = 0
            }};
        var s = [], h = new i, r = function() {
            this[cI] = null, this[sz] = [], this[hz] = 0, this[rz] = 0, this[fz] = 0, this[yf] = 0, this[xf] = 0, this[Wr] = 0, this[Vr] = 0, this[az] = !1
        }, f = [], a = 0, _ = function() {
            var t;
            return f[a] ? (t = f[a], t[sz][0] = null, t[sz][1] = null, t[sz][2] = null, t[sz][3] = null, t[cI] = null, t[hz] = t[rz] = t[fz] = 0, t[yf] = t[Vr] = t[xf] = t[Wr] = 0, t[az] = !1) : (t = new r, f[a] = t), ++a, t
        }, c = _(), u = function(t, i) {
            var n = Math[Ur](t.x - i.x), e = Math[Ur](t.y - i.y);
            return 1e-8 > n && 1e-8 > e
        }, o = function(t) {
            for (h[_z](), h[Xh](c, t); !h[H_](); ) {
                var i = h[jv](), n = i[GA], e = i[cI];
                if (n[az]) {
                    var s = e.x, r = e.y;
                    n[hz] = n[hz] + e[hz], n[rz] = n[rz] + e[hz] * s, n[fz] = n[fz] + e[hz] * r;
                    var f = 0, a = n[yf], o = (n[Vr] + a) / 2, d = n[xf], l = (n[Wr] + d) / 2;
                    if (s > o) {
                        f += 1;
                        var b = a;
                        a = o, o += o - b
                    }
                    if (r > l) {
                        f += 2;
                        var v = d;
                        d = l, l += l - v
                    }
                    var y = n[sz][f];
                    y || (y = _(), y[yf] = a, y[xf] = d, y[Vr] = o, y[Wr] = l, n[sz][f] = y), h[Xh](y, e)
                } else if (n[cI]) {
                    var x = n[cI];
                    if (n[cI] = null, n[az] = !0, u(x, e)) {
                        if (n[Vr] - n[yf] < 1e-8)
                            return;
                        do {
                            var g = Math[or](), m = (n[Vr] - n[yf]) * g, w = (n[Wr] - n[xf]) * g;
                            x.x = n[yf] + m, x.y = n[xf] + w
                        } while (u(x, e))
                    }
                    h[Xh](n, x), h[Xh](n, e)
                } else
                    n[cI] = e
            }
        }, d = function(t) {
            var i, h, r, f, a = s, _ = 1, u = 0, o = 1;
            for (a[0] = c; _; ) {
                var d = a[u], l = d[cI];
                _ -= 1, u += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, f = Math[Pa](h * h + r * r), 0 === f && (h = (Math[or]() - .5) / 50, r = (Math[or]() - .5) / 50, f = Math[Pa](h * h + r * r)), i = n * l[hz] * t[hz] / (f * f), -1e3 > i && (i = -1e3), i /= f, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[rz] / d[hz] - t.x, r = d[fz] / d[hz] - t.y, f = Math[Pa](h * h + r * r), 0 === f && (h = (Math[or]() - .5) / 50, r = (Math[or]() - .5) / 50, f = Math[Pa](h * h + r * r)), (d[Vr] - d[yf]) / f < e ? (i = n * d[hz] * t[hz] / (f * f), -1e3 > i && (i = -1e3), i /= f, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[sz][0] && (a[o] = d[sz][0], _ += 1, o += 1), d[sz][1] && (a[o] = d[sz][1], _ += 1, o += 1), d[sz][2] && (a[o] = d[sz][2], _ += 1, o += 1), d[sz][3] && (a[o] = d[sz][3], _ += 1, o += 1)))
            }
        }, l = function(t, i) {
            n = i;
            var e, s = Number[$l], h = Number[$l], r = Number[cz], f = Number[cz], u = t, d = u[zh];
            for (e = d; e--; ) {
                var l = u[e].x, b = u[e].y;
                s > l && (s = l), l > r && (r = l), h > b && (h = b), b > f && (f = b)
            }
            var v = r - s, y = f - h;
            for (v > y ? f = h + v : r = s + y, a = 0, c = _(), c[yf] = s, c[Vr] = r, c[xf] = h, c[Wr] = f, e = d; e--; )
                o(u[e], c)
        };
        return {init: l,update: d}
    }, CL = function(t) {
        t.fx -= t.x * this[uz], t.fy -= t.y * this[uz]
    }, TL = function(t) {
        if (0 != t.k) {
            var i = this._d5, n = t[Nc], e = t.to, s = e.x - n.x, h = e.y - n.y, r = s * s + h * h, f = Math[Pa](r) || .1, a = (f - i) * t.k * this[oz];
            a /= f;
            var _ = a * s, c = a * h;
            e.fx -= _, e.fy -= c, n.fx += _, n.fy += c
        }
    };
    Th[br] = {appendNodeInfo: function(t, i) {
            i[hz] = t[dz] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
        },appendEdgeInfo: function(t, i) {
            i.k = t[lz] || 1
        },setMass: function(t, i) {
            t[dz] = i, this[MN] && this[MN][$N] && (t = this[MN][$N][t.id], t && (t[hz] = i))
        },setElasticity: function(t, i) {
            t[lz] = i, this[MN] && this[MN][Kk] && (t = this[MN][Kk][t.id], t && (t.k = i))
        },_d5: 50,_ih: .5,timeStep: .15,repulsion: 50,attractive: .1,elastic: 3,_lo: 1e3,_jv: function(t) {
            return this._lo + .3 * (t - this._lo)
        },_lk: function(t, i) {
            var n = (Date[Kf](), this[MN][$N]);
            for (var e in n) {
                var s = n[e];
                i && (s.x += Math[or]() - .5, s.y += Math[or]() - .5), CL[Bh](this, s)
            }
            var h = this._nbodyForce;
            h || (h = this._nbodyForce = IL()), h[nd](this[MN][bz], -this[vz] * this[vz] * this[vz]);
            for (var e in n)
                h[yz](n[e]);
            if (this[oz]) {
                var r = this[MN][Kk];
                for (var e in r)
                    TL[Bh](this, r[e])
            }
            return this._lj(t)
        },_lj: function(t) {
            var i = this[MN][xz], n = (this[MN][gz], this[MN][$N]), t = this[AN], e = 0, s = this._ih;
            for (var h in n) {
                var r = n[h], f = r.fx / r[hz], a = r.fy / r[hz], _ = r.vx += f * t, c = r.vy += a * t;
                r.x += _ * t, r.y += c * t, i > e && (e += 2 * (_ * _ + c * c)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
            }
            return this[MN][gz] = e, e >= i
        }}, N(Th, Ch), kD[mz] = Th;
    var OL = function(t) {
        this[LA] = t
    };
    OL[br] = {oldLocations: null,_ec: null,duration: 700,animationType: xD[NO],_6d: function(t) {
            if (this._ec = t, this[wz] = {}, t)
                for (var i in t) {
                    var n = t[i], e = n[GA];
                    this[wz][i] = {x: e.x,y: e.y}
                }
        },setLocation: function(t, i, n) {
            t[OT](i, n)
        },forEach: function(t, i) {
            for (var n in this[LA]) {
                var e = this[wz][n], s = this[LA][n];
                t[Bh](i, e, s)
            }
        },_jj: function(t) {
            this[uc](function(i, n) {
                var e = n[GA], s = i.x + (n.x - i.x) * t, h = i.y + (n.y - i.y) * t;
                this[OT](e, s, h)
            }, this)
        },stop: function() {
            this._nanimate && this._nanimate._lt()
        },start: function(t) {
            this._nanimate ? (this._nanimate._lt(), this._nanimate._iq = this[zO], this._nanimate._ekType = this[DO], this._nanimate._onfinish = this._onfinish) : this._nanimate = new mD(this._jj, this, this[zO], this[DO]), this._nanimate._k6(t)
        }}, J(OL[br], {locations: {get: function() {
                return this._ec
            },set: function(t) {
                this._ec != t && this._6d(t)
            }}});
    var $L = function(t) {
        var i = new mB;
        return t[uc](function(t) {
            t instanceof uR && (t[kz]() || i[ir](t._dg || t))
        }), i
    }, FL = function(t, i, n, e, s, h) {
        if (i instanceof UB)
            return t(i, n, e, s, h), i;
        if (i instanceof zR) {
            var r = new mB;
            i._l4Model[uc](function(t) {
                return i[hd](t) ? t._hn() && t._fv && t[Ah]() ? void (t[hp] && (t[hp][Tp] = !1)) : void r[ir](t) : void 0
            }), i = r
        }
        var i = $L(i);
        return l(i, function(i) {
            t(i, n, e, s, h)
        }), i
    }, AL = function(t, i, n, e, s) {
        return FL(zL, t, i, n, e, s)
    }, NL = function(t, i, n, e, s) {
        return FL(BL, t, i, n, e, s)
    };
    Je[br][pz] = function(t, i, n, e) {
        AL(this, t, i, n, e)
    }, Je[br][jz] = function(t, i, n, e) {
        NL(this, t, i, n, e)
    };
    var zL = function(t, i, n, e, s) {
        function h(t, i, n, e, s, r, f, a) {
            t._marker = r, e || i[Bh](n, t, a, f), Oh(t, function(a) {
                h(a, i, n, e, s, r, f + 1, t)
            }, a, s, r), e && i[Bh](n, t, a, f)
        }
        h(t, i, n, e, s, {}, 0)
    }, BL = function(t, i, n, e, s) {
        function h(t, i, n, e, s, r, f) {
            var a, _ = t[zh];
            t[uc](function(t, h) {
                var c = t.v;
                c._marker = r, e || i[Bh](n, c, t._from, f, h, _), Oh(c, function(t) {
                    a || (a = []), t._marker = r, a[Xh]({v: t,_from: c})
                }, c, s, r)
            }), a && h(a, i, n, e, s, r, f + 1), e && t[uc](function(t, e) {
                i[Bh](n, t.v, t._from, f, e, _)
            })
        }
        h([{v: t}], i, n, e, s, {}, 0)
    };
    kD[Mz] = U, kD[Rr] = ti, kD[Gr] = function(t) {
        console[Gr](t)
    }, kD[Lr] = ii, kD[Ez] = sB, kD[Sz] = eB, kD[Pz] = rB, kD[Iz] = fB, kD[Cz] = aB, kD[Tz] = cB, kD[Oz] = _B, kD[$z] = uB, kD[Fz] = AR, kD[Az] = xB, kD[GT] = yR, kD[Nz] = pD, kD[zz] = fq, kD[Bz] = zR, kD[Dz] = bR, kD[qz] = PR, kD[Rz] = rs, kD[_$] = hs, kD[Lz] = CR, kD[Gz] = IR, kD[Yz] = dR, kD[Hz] = sq, kD[RI] = RD, kD[Xz] = Mh, kD[Fk] = _R, kD[hT] = uR, kD[HT] = cR, kD[Wz] = Je, kD[Vz] = PL, kD[Uz] = vL, kD[Er] = Qz;
    var DL = Jz;
    return kD[Ww] = Jz, kD[Qw] = Zz, kD[Jw] = "Copyright © 2014 Qunee.com", kD[OF] = oi, kD[Kz] = BR, ti = function() {
    }, kD[Uw] = tB, kD
}(window, document);
