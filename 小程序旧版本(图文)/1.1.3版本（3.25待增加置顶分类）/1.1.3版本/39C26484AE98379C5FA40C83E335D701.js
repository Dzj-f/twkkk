function e(e) {
    for (var t = e || [], n = 0; n < t.length; n++) t[n].date = r.formatDateTime(t[n].date), 
    t[n].urlpv = r.getSpecialCountStr(t[n].urlpv), t[n].comment_count = r.getSpecialCountStr(t[n].comment_count), 
    t[n].zd && i.cacheZdnews(t[n].url);
    return t;
}

var t = require("EB52C4B5AE98379C8D34ACB22945D701.js"), n = require("064CB2C6AE98379C602ADAC15295D701.js"), r = require("F269C481AE98379C940FAC8602D5D701.js"), i = require("97666232AE98379CF1000A354A55D701.js"), d = r.getUserId(), o = r.getSystemInfo();

module.exports = {
    loadNews: function() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "toutiao";
        return t.req(n.refreshUrl, {
            type: r,
            recgid: d,
            qid: getApp().qid,
            picnewsnum: 1,
            readhistory: i.getReadUrl(),
            zdnews: i.getZdnews() || "",
            idx: 0,
            pgnum: 1,
            os: o.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadNewsByPullDown: function(r) {
        var u = r.channel, s = r.startkey, a = r.lastkey, c = r.pgnum, p = r.idx;
        return t.req(n.pullDownUrl, {
            type: u,
            startkey: s,
            lastkey: a,
            pgnum: c || -1,
            zdnews: i.getZdnews() || "",
            idx: "" + (p || 0),
            readhistory: i.getReadUrl(),
            recgid: d,
            qid: getApp().qid,
            os: o.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadNewsByPullUp: function(r) {
        var u = r.channel, s = r.startkey, a = r.pgnum, c = r.idx;
        return t.req(n.pullUpUrl, {
            type: u,
            startkey: s,
            newsnum: 20,
            qid: getApp().qid,
            readhistory: i.getReadUrl(),
            idx: c || 1,
            recgid: d,
            pgnum: a,
            os: o.system
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    loadDetailsPageData: function(e) {
        var i = e.urlid, d = void 0 === i ? "" : i, o = e.accid, u = e.disposeid, s = e.hasqrcode, a = void 0 === s ? 0 : s;
        return t.req(n.detailsDataUrl, {
            url: d,
            accid: o,
            disposeid: u,
            qid: getApp().qid,
            hasQRcode: a
        }).then(function(e) {
            for (var t = e.page ? e.page : {}, n = e.imgUrl || "", i = t.content ? t.content : [], d = 0; d < i.length; d++) i[d].sentence && (i[d].sentence = r.delHtmlTag(i[d].sentence));
            return t.ewm = n, t;
        });
    },
    loadRecommendNews: function(r) {
        var i = r.type, u = r.ishot, s = r.recommendtype, a = r.urlid, c = r.disposeid;
        return t.req(n.nrecommendurl, {
            type: i || "",
            qid: getApp().qid,
            uid: d,
            ishot: u || 0,
            recommendtype: s || -1,
            url: a,
            disposeid: c,
            os: o.system,
            pgnum: 1,
            newsnum: 10,
            htps: 1
        }).then(function(t) {
            return t.data = e(t.data), t;
        });
    },
    getOpenid: function(e) {
        var r = e.code;
        return t.req(n.programCode, {
            code: r || ""
        }).then(function(e) {
            return e;
        });
    },
    postOpenId: function(e) {
        var r = e.openid, i = e.formid;
        return t.req(n.programFormid, {
            openid: r || "",
            formid: i || ""
        }).then(function(e) {
            return e;
        });
    },
    isMegPush: function(e) {
        var r = e.openid, i = e.pushstat;
        return t.req(n.isMegPush, {
            openid: r || "",
            pushstat: i || "0"
        }).then(function(e) {
            return e;
        });
    },
    getPosition: function() {
        return t.req(n.userPosition).then(function(e) {
            return e;
        });
    }
};