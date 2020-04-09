function e(e) {
    for (var t = [], r = e || [], a = 0; a < r.length; a++) r[a].date = i.formatDateTime(r[a].date), 
    r[a].videoalltime = i.msToTime(r[a].videoalltime), r[a].urlpv = i.getSpecialCountStr(r[a].urlpv), 
    r[a].comment_count = i.getSpecialCountStr(r[a].comment_count), r[a].video_link && t.push(r[a]);
    return t;
}

var t = require("EB52C4B5AE98379C8D34ACB22945D701.js"), r = require("064CB2C6AE98379C602ADAC15295D701.js"), i = require("F269C481AE98379C940FAC8602D5D701.js"), a = require("97666232AE98379CF1000A354A55D701.js"), d = i.getUserId(), n = i.getSystemInfo();

module.exports = {
    loadDataForVideo: function(i) {
        return t.req(r.videoDataUrl, {
            type: i,
            startkey: "",
            recgid: d,
            qid: getApp().qid,
            domain: "eastday.com",
            readhistory: a.getReadUrlForVideo(),
            idx: 1,
            pgnum: 1,
            os: n.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadVideoByPullDown: function(i) {
        var o = i.channel, s = i.startkey, u = i.lastkey, c = i.pgnum, l = i.idx;
        return t.req(r.videoDataUrl, {
            type: o,
            startkey: s,
            lastkey: u || "",
            pgnum: c || -1,
            idx: "" + (l || 0),
            readhistory: a.getReadUrlForVideo(),
            recgid: d,
            qid: getApp().qid,
            os: n.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadVideoByPullUp: function(i) {
        var o = i.channel, s = i.startkey, u = i.idx, c = i.pgnum;
        return t.req(r.videoDataUrl, {
            type: o,
            startkey: s || "",
            recgid: d,
            qid: getApp().qid,
            domain: "eastday.com",
            readhistory: a.getReadUrlForVideo(),
            idx: u,
            pgnum: c,
            os: n.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadDetailsPageData: function(e) {
        var i = e.urlid, a = void 0 === i ? "" : i, d = e.accid, n = e.disposeid, o = e.hasqrcode, s = void 0 === o ? 0 : o;
        return t.req(r.detailsDataUrl, {
            url: a,
            accid: d,
            disposeid: n,
            qid: getApp().qid,
            hasQRcode: s
        }).then(function(e) {
            var t = e.page ? e.page : {};
            return t.content && t.content, t;
        });
    },
    loadRecommendVideo: function(i) {
        var a = i.type, o = i.urlid, s = void 0 === o ? "" : o, u = i.disposeid;
        return t.req(r.vrecommendurl, {
            type: a,
            recgid: d,
            qid: getApp().qid,
            domain: "eastday_videoh5",
            url: s,
            disposeid: u,
            softtype: r.softtype,
            softname: r.softname,
            os: n.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    isMegPush: function(e) {
        var i = e.openid, a = e.pushstat;
        return t.req(r.isMegPush, {
            openid: i || "",
            pushstat: a || "0"
        }).then(function(e) {
            return e;
        });
    }
};