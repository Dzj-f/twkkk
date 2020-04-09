module.exports = {
    req: function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET";
        return new Promise(function(n, s) {
            wx.request({
                url: t,
                data: e,
                method: r,
                success: function(t) {
                    try {
                        var e = t.data;
                        "string" == typeof e && /^null.+/.test(e) ? (e = e.substring(5, e.length - 1), n(JSON.parse(e))) : (e = "string" == typeof e ? JSON.parse(e) : e, 
                        n(e)), wx.hideToast();
                    } catch (t) {
                        s(t);
                    }
                },
                error: function(t) {
                    s(t);
                }
            });
        });
    }
};