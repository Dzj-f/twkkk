function t() {
    try {
        var t = wx.getSystemInfoSync();
        return {
            brand: t.brand,
            model: t.model,
            pixelRatio: t.pixelRatio,
            screenWidth: t.windowWidth,
            screenHeight: t.windowHeight,
            windowWidth: t.windowWidth,
            windowHeight: t.windowHeight,
            statusBarHeight: t.statusBarHeight,
            language: t.language,
            system: t.system,
            version: t.version,
            platform: t.platform,
            fontSizeSetting: t.fontSizeSetting,
            SDKVersion: t.SDKVersion
        };
    } catch (t) {
        return {};
    }
}

function e(t) {
    try {
        return Date.parse(t.replace(/-/g, "/"));
    } catch (t) {
        return !1;
    }
}

function n(t, e) {
    return r(a(t), e);
}

function a(t) {
    return new Date(t);
}

function r(t, e) {
    var n = (t.getMonth() + 1).toString(), a = t.getDate().toString(), r = t.getHours().toString(), o = t.getMinutes().toString(), i = (n = n.length > 1 ? n : "0" + n) + "-" + (a = a.length > 1 ? a : "0" + a) + " " + (r = r.length > 1 ? r : "0" + r) + ":" + (o = o.length > 1 ? o : "0" + o);
    return e && (i = i.replace(/-/g, e)), i;
}

function o(t) {
    var e = wx.createAnimation({
        duration: 100,
        timingFunction: "ease"
    });
    t.animation = e, t.setData({
        animationData: e.export()
    });
    var n = !0;
    setInterval(function() {
        n ? (t.animation.translateY(-7).step(), n = !n) : (t.animation.translateY(0).step(), 
        n = !n), t.setData({
            animationData: t.animation.export()
        });
    }.bind(t), 200);
}

function i(t) {
    var e = wx.createAnimation({
        duration: 1e3,
        timingFunction: "ease"
    });
    t.animation = e, t.animation.opacity(1).step(), t.setData({
        animationData1: e.export()
    }), setTimeout(function() {
        t.animation.opacity(0).step(), t.setData({
            animationData1: t.animation.export(),
            addDesktopShow: !1
        });
    }.bind(t), 5e3);
}

module.exports = {
    getUserId: function() {
        try {
            var t = wx.getStorageSync("USER_ID");
            return t || (t = +new Date() + Math.random().toString(10).substring(2, 6), wx.setStorageSync("USER_ID", t)), 
            t;
        } catch (t) {}
    },
    getSystemInfo: t,
    delHtmlTag: function(t) {
        return (t = t.replace(/<\/?[^>]*>/gim, "")).replace(/(^\s+)|(\s+$)/g, "").replace(/&nbsp;/g, "");
    },
    formatDateTime: function(t) {
        var a = e(t);
        if (!a) return !1;
        var r = new Date().getTime(), o = Number(r - a);
        if (o >= 864e5) {
            var i = o / 864e5;
            return i > 2 ? n(a) : i > 1 ? "前天" : "昨天";
        }
        return o >= 36e5 ? Math.floor(o / 36e5) + "小时前" : o >= 6e4 ? Math.floor(o / 6e4) + "分钟前" : "最新";
    },
    timestampToTime: function(t, e) {
        if (!t) return "00:00";
        var n = new Date(Number(t)), a = n.getHours().toString(), r = n.getMinutes().toString(), o = (a = a.length > 1 ? a : "0" + a) + ":" + (r = r.length > 1 ? r : "0" + r);
        return e && (o = o.replace(/:/g, e)), o;
    },
    msToTime: function(t, e) {
        if (!t) return "00:00";
        var n = Math.floor(t / 1e3), a = Math.floor(n / 60), r = n % 60;
        a = a < 10 ? "0" + a : a, r = r < 10 ? "0" + r : r;
        var o = a.toString() + ":" + r.toString();
        return e && (o = o.replace(/:/g, e)), o;
    },
    dislocateArr: function(t) {
        return t.sort(function() {
            return .5 - Math.random();
        });
    },
    getSpecialCountStr: function(t) {
        return "string" != typeof t && "number" != typeof t ? t : (t = parseInt(t, 10)) > 9999 ? Math.ceil(t / 1e4) + "万" : "" + t;
    },
    stringify: function(t) {
        return t ? Object.keys(t).map(function(e) {
            var n = t[e];
            return void 0 === n ? "" : encodeURI(e) + "=" + encodeURI(n);
        }).filter(function(t) {
            return t.length > 0;
        }).join("&") : "";
    },
    parse: function(t) {
        if (void 0 === t || "" === t) return {};
        var e = {};
        return t.split("&").map(function(t) {
            e[t.split("=")[0]] = t.split("=")[1] || "";
        }), e;
    },
    getRect: function(t) {
        return new Promise(function(e, n) {
            wx.createSelectorQuery ? wx.createSelectorQuery().select(t).boundingClientRect(function(t) {
                e(t);
            }).exec() : e({});
        });
    },
    getAllRects: function(t) {
        return new Promise(function(e, n) {
            wx.createSelectorQuery().selectAll(t).boundingClientRect(function(t) {
                e(t);
            }).exec();
        });
    },
    showLoading: function() {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 3e3
        });
    },
    userAuthor: function() {
        return new Promise(function(t, e) {
            wx.getSetting({
                success: function(n) {
                    n.authSetting["scope.userInfo"] ? wx.getUserInfo({
                        success: function(e) {
                            t(e);
                        }
                    }) : e(n);
                }
            });
        });
    },
    openProgram: function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        setTimeout(function() {
            wx.navigateToMiniProgram({
                appId: t,
                path: e || "",
                extraData: {},
                envVersion: "release",
                success: function(t) {
                    n && n();
                }
            });
        }, 800);
    },
    today: function(t) {
        var e = new Date(), n = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate();
        return a < 10 && (a = "0" + a), r < 10 && (r = "0" + r), n + a + r;
    },
    remindAndroid: function(e, n) {
        var a = t().platform;
        if (e.setData({
            platform: a
        }), wx.getStorageSync("desktopStayTimes")) {
            var r = wx.getStorageSync("desktopStayTimes");
            e.data.desktopTimer = setInterval(function() {
                r++, wx.setStorageSync("desktopStayTimes", r);
            }, 1e3);
        } else e.data.desktopTimer = setInterval(function() {
            n.globalData.stayTimes++, wx.setStorageSync("desktopStayTimes", n.globalData.stayTimes);
        }, 1e3);
        1 == wx.getStorageSync("desktopShowTimes") ? e.data.desktopTimeout = setTimeout(function() {
            e.setData({
                addDesktopShow: !0
            }), i(e), clearInterval(e.data.desktopTimer), wx.removeStorageSync("desktopStayTimes"), 
            wx.setStorageSync("desktopShowTimes", 3);
        }, 1e3 * (60 - wx.getStorageSync("desktopStayTimes"))) : 2 == wx.getStorageSync("desktopShowTimes") ? e.data.desktopTimeout = setTimeout(function() {
            e.setData({
                addDesktopShow: !0
            }), i(e), clearInterval(e.data.desktopTimer), wx.setStorageSync("desktopShowTimes", 4), 
            wx.removeStorageSync("desktopStayTimes");
        }, 1e3 * (100 - wx.getStorageSync("desktopStayTimes"))) : clearInterval(e.data.desktopTimer), 
        o(e);
    },
    compareVersion: function(t, e) {
        t = t.split("."), e = e.split(".");
        for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
        for (;e.length < n; ) e.push("0");
        for (var a = 0; a < n; a++) {
            var r = parseInt(t[a]), o = parseInt(e[a]);
            if (r > o) return 1;
            if (r < o) return -1;
        }
        return 0;
    }
};