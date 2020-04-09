module.exports = {
    set: function(e, t, s) {
        var a = parseInt(Date.parse(new Date())) + 864e5 * s;
        wx.setStorageSync(e, t || a);
    }
};