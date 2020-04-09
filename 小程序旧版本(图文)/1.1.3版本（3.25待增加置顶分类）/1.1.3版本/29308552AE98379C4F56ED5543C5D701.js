module.exports = new function() {
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.encode = function(o) {
        var e, a, n, c, h, C, d, i = "", f = 0;
        for (o = t(o); f < o.length; ) c = (e = o.charCodeAt(f++)) >> 2, h = (3 & e) << 4 | (a = o.charCodeAt(f++)) >> 4, 
        C = (15 & a) << 2 | (n = o.charCodeAt(f++)) >> 6, d = 63 & n, isNaN(a) ? C = d = 64 : isNaN(n) && (d = 64), 
        i = i + r.charAt(c) + r.charAt(h) + r.charAt(C) + r.charAt(d);
        return i;
    }, this.decode = function(t) {
        var e, a, n, c, h, C, d = "", i = 0;
        for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); i < t.length; ) e = r.indexOf(t.charAt(i++)) << 2 | (c = r.indexOf(t.charAt(i++))) >> 4, 
        a = (15 & c) << 4 | (h = r.indexOf(t.charAt(i++))) >> 2, n = (3 & h) << 6 | (C = r.indexOf(t.charAt(i++))), 
        d += String.fromCharCode(e), 64 != h && (d += String.fromCharCode(a)), 64 != C && (d += String.fromCharCode(n));
        return d = o(d);
    };
    var t = function(r) {
        r = r.replace(/\r\n/g, "\n");
        for (var t = "", o = 0; o < r.length; o++) {
            var e = r.charCodeAt(o);
            e < 128 ? t += String.fromCharCode(e) : e > 127 && e < 2048 ? (t += String.fromCharCode(e >> 6 | 192), 
            t += String.fromCharCode(63 & e | 128)) : (t += String.fromCharCode(e >> 12 | 224), 
            t += String.fromCharCode(e >> 6 & 63 | 128), t += String.fromCharCode(63 & e | 128));
        }
        return t;
    }, o = function(r) {
        for (var t = "", o = 0, e = c1 = c2 = 0; o < r.length; ) (e = r.charCodeAt(o)) < 128 ? (t += String.fromCharCode(e), 
        o++) : e > 191 && e < 224 ? (c2 = r.charCodeAt(o + 1), t += String.fromCharCode((31 & e) << 6 | 63 & c2), 
        o += 2) : (c2 = r.charCodeAt(o + 1), c3 = r.charCodeAt(o + 2), t += String.fromCharCode((15 & e) << 12 | (63 & c2) << 6 | 63 & c3), 
        o += 3);
        return t;
    };
}();