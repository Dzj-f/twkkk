module.exports = {
    cacheReadUrl: function(e) {
        try {
            var r = wx.getStorageSync("read_url_all");
            if (r) {
                for (r = r.split(","); r.length >= 5; ) r.shift();
                r.push(e), r = r.join(",");
            } else r = e;
            wx.setStorageSync("read_url_all", r);
        } catch (e) {
            console.error(e);
        }
    },
    getReadUrl: function() {
        try {
            return wx.getStorageSync("read_url_all");
        } catch (e) {
            console.error(e);
        }
    },
    cacheReadUrlForVideo: function(e) {
        try {
            var r = wx.getStorageSync("read_url_video");
            if (r) {
                for (r = r.split(","); r.length >= 5; ) r.shift();
                r.push(e), r = r.join(",");
            } else r = e;
            wx.setStorageSync("read_url_video", r);
        } catch (e) {
            console.error(e);
        }
    },
    getReadUrlForVideo: function() {
        try {
            return wx.getStorageSync("read_url_video");
        } catch (e) {
            console.error(e);
        }
    },
    cacheZdnews: function(e) {
        try {
            if (!e) return;
            var r = e.substring(e.lastIndexOf("/") + 1, e.indexOf(".html"));
            wx.setStorageSync("stick_news", r);
        } catch (e) {
            console.error(e);
        }
    },
    getZdnews: function() {
        try {
            return wx.getStorageSync("stick_news");
        } catch (e) {
            console.error(e);
        }
    },
    updateQid: function(e) {
        e && (getApp().qid = e);
    }
};