function e(e, r) {
    var u = r.type, a = r.urlid, p = r.adnum, o = r.pgnum, y = r.adtype, m = r.softname, l = r.site, f = r.readnewstype;
    return t.req(e, {
        type: u || "toutiao",
        qid: getApp().qid,
        uid: s,
        os: i.system,
        thisurl: a || "list",
        reqcount: 1,
        adnum: p || 1,
        pgnum: o || 1,
        adtype: y || "icon",
        dspver: "1.0.1",
        softtype: n.softtype,
        softname: m || n.softname,
        newstype: "ad",
        site: l || d,
        readnewstype: f || d,
        browser_type: i.platform,
        pixel: i.windowWidth + "*" + i.windowHeight,
        fr_url: a || d
    }).then(function(e) {
        return e;
    });
}

var t = require("EB52C4B5AE98379C8D34ACB22945D701.js"), n = require("064CB2C6AE98379C602ADAC15295D701.js"), r = require("F269C481AE98379C940FAC8602D5D701.js"), s = (require("97666232AE98379CF1000A354A55D701.js"), 
r.getUserId()), i = r.getSystemInfo(), d = "null";

module.exports = {
    loadForList: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.type, s = t.urlid, i = t.adnum, d = t.pgnum, u = t.adtype, a = t.softname, p = t.site, o = t.readnewstype;
        return e(n.dspListUrl, {
            type: r,
            urlid: s,
            adnum: i,
            pgnum: d,
            adtype: u,
            softname: a,
            site: p,
            readnewstype: o
        });
    },
    loadForDetail: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = t.type, s = t.urlid, i = t.adnum, d = t.pgnum, u = t.adtype, a = t.softname, p = t.site, o = t.readnewstype;
        return e(n.dspDetailUrl, {
            type: r,
            urlid: s,
            adnum: i,
            pgnum: d,
            adtype: u,
            softname: a,
            site: p,
            readnewstype: o
        });
    }
};