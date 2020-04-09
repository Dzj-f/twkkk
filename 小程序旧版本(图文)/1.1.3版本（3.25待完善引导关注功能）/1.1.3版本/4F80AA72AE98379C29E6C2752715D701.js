function e(e) {
    wx.request({
        url: e,
        header: {
            "Content-Type": "application/json"
        },
        success: function(e) {},
        error: function() {
            console.error("_dspLog日志错误::", arguments);
        }
    });
}

var o = require("064CB2C6AE98379C602ADAC15295D701.js"), t = require("F269C481AE98379C940FAC8602D5D701.js"), r = require("29308552AE98379C4F56ED5543C5D701.js"), i = t.getSystemInfo(), n = t.getUserId(), s = o.softtype, d = o.softname, p = o.apptypeid, a = "null";

console.log("SYSINFO>>>", i), module.exports = {
    sendActiveLog: function(e) {
        wx.request({
            url: o.activeLogUrl,
            header: {
                "Content-Type": "application/json"
            },
            data: {
                qid: getApp().qid,
                uid: n,
                softtype: s,
                softname: d,
                newstype: e.newsType || a,
                from: e.from || a,
                to: e.to || a,
                os_type: i.system || a,
                browser_type: i.platform,
                pixel: i.windowWidth + "*" + i.windowHeight,
                fr_url: e.referer || a,
                loginid: e.loginid || a,
                plan: e.plan || a,
                ime: e.ime || a,
                idx: e.idx || a,
                ishot: e.ishot || a,
                ver: e.ver || a,
                appqid: e.appqid || a,
                ttloginid: e.ttloginid || a,
                apptypeid: p,
                appver: i.version,
                recommendtype: e.recommendtype || a,
                ispush: e.ispush || a
            },
            success: function(e) {},
            error: function() {
                console.error("active日志错误::", arguments);
            }
        });
    },
    sendShowLog: function(e) {
        var t = e.advid, r = e.advurl, c = e.referer, l = e.loginid, u = e.ime;
        wx.request({
            url: o.showLogUrl,
            header: {
                "Content-Type": "application/json"
            },
            data: {
                qid: getApp().qid,
                uid: n,
                softtype: s,
                softname: d,
                newstype: "ad",
                adv: t || a,
                advurl: r || a,
                os_type: i.system || a,
                browser_type: i.platform,
                pixel: i.windowWidth + "*" + i.windowHeight,
                fr_url: c || a,
                loginid: l || a,
                apptypeid: p,
                ime: u || a
            },
            success: function(e) {},
            error: function() {
                console.error("sendShowLog日志错误::", arguments);
            }
        });
    },
    sendClickLog: function(e) {
        var t = e.advid, r = e.advurl, c = e.referer, l = e.loginid, u = e.ime, f = e.Uid;
        wx.request({
            url: o.clickLogUrl,
            header: {
                "Content-Type": "application/json"
            },
            data: {
                qid: getApp().qid,
                uid: f || n,
                softtype: s,
                softname: d,
                newstype: "ad",
                adv: t || a,
                advurl: r || a,
                os_type: i.system || a,
                browser_type: i.platform,
                pixel: i.windowWidth + "*" + i.windowHeight,
                fr_url: c || a,
                loginid: l || a,
                apptypeid: p,
                ime: u || a
            },
            success: function(e) {},
            error: function() {
                console.error("sendClickLog日志错误::", arguments);
            }
        });
    },
    sendDspShowLog: function(o) {
        e(o);
    },
    sendDspClickLog: function(o) {
        e(o);
    },
    sendInviewLog: function(o) {
        e(o);
    },
    sendShareLog: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = {
            uid: n,
            qid: getApp().qid,
            SoftName: d,
            SoftID: s,
            SoftVer: i.version || a,
            os: i.system.split(" ")[0] || a,
            os_version: i.system.split(" ")[1] || a,
            accountid: wx.getStorageSync("accid") || a,
            accountname: a,
            platform: "wechat",
            newstype: e.newstype || a,
            newsurl: e.newsurl || a,
            AndroidId: a,
            AppVer: a,
            cprurl: a,
            ufr: a,
            shareurl: e.shareurl || a,
            sharefrom: e.sharefrom || a
        }, p = "";
        for (var c in t) t.hasOwnProperty(c) && (p += t[c], p += "\t");
        wx.request({
            url: o.shareLogUrl,
            header: {
                "Content-Type": "application/json"
            },
            data: {
                code: r.encode(p)
            },
            success: function(e) {},
            error: function() {
                console.error("sendShareLog日志错误::", arguments);
            }
        });
    },
    sendNewLog: function(e) {
        var t = e.actentryid, r = (e.advurl, e.referer), c = e.loginid, l = (e.ime, e.type), u = void 0 === l ? "show" : l, f = e.acttype, y = void 0 === f ? "page" : f;
        wx.request({
            url: o.newLog,
            header: {
                "Content-Type": "application/json"
            },
            data: {
                uid: n,
                from: a,
                softname: d,
                softtype: s,
                appqid: a,
                ttaccid: a,
                thisurl: r || a,
                actentryid: t,
                actid: "dftt_xcx",
                materialid: a,
                type: u,
                loginid: c || a,
                apptypeid: p,
                ver: i.version || a,
                os: i.system || a,
                appver: a,
                deviceid: a,
                acttype: y,
                plan: a,
                qid: getApp().qid
            },
            success: function(e) {},
            error: function() {
                console.error("sendShowLog日志错误::", arguments);
            }
        });
    }
};