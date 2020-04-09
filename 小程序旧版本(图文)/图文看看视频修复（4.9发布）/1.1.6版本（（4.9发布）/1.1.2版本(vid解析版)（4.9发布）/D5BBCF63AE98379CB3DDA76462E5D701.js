var e = require("43B42803AE98379C25D24004B805D701.js");

module.exports = {
    userOneId: function() {
        wx.getStorageSync("userOneId") ? this.setData({
            userModal: !1
        }) : this.setData({
            userModal: !0
        });
    },
    authorization: function() {
        e.News.postOpenId({
            openid: wx.getStorageSync("storageOpenId"),
            formid: this.data.formid
        }).then(function(e) {});
    }
};