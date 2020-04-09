function t(t, e, o) {
    return e in t ? Object.defineProperty(t, e, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = o, t;
}

var e;

module.exports = (e = {
    refreshUrl: "https://toutiao.eastday.com/toutiao_h5/RefreshJP",
    pullUpUrl: "http://123.59.62.164/toutiao_h5/NextJP",
    pullDownUrl: "https://toutiao.eastday.com/toutiao_h5/pulldown",
    nrecommendurl: "https://dfttdetail.037201.com/newsmore_h5detail/newspool",
    videoDataUrl: "https://vdh5socket.dftoutiao.com/videoh5/getvideos",
    vrecommendurl: "https://vdh5socket.037201.com/videoh5/morevideos",
    detailsDataUrl: "https://wxnewscode.dftoutiao.com/weixinQRcode/newsInfoForApplets",
    activeLogUrl: "http://123.59.60.170/getwapdata/data",
    showLogUrl: "https://xcxact.dftoutiao.com/getwapdata/advshow",
    clickLogUrl: "https://xcxact.dftoutiao.com/getwapdata/partner",
    programCode: "http://106.75.35.140/wxsa_receiveFormId/login",
    programFormid: "http://106.75.35.140/wxsa_receiveFormId/receiveFormId",
    isMegPush: "http://106.75.35.140/wxsa_receiveFormId/pushstatus",
    userIntegral: "https://test-wechat-program.dftoutiao.com",
    dspListUrl: "http://106.75.98.65/partner/list",
    dspDetailUrl: "http://106.75.98.65/partner/detail",
    userLogin: "https://test-wechat-program.dftoutiao.com/login/login_with_code",
    userRegister: "https://test-wechat-program.dftoutiao.com/login/register",
    userRegAdd: "https://test-wechat-program.dftoutiao.com/task_finish/reg",
    phoneNumber: "https://test-wechat-program.dftoutiao.com/login/bind_phone",
    userGoldCoin: "https://test-wechat-program.dftoutiao.com/wallet/get_list_bonus",
    userSmallChange: "https://test-wechat-program.dftoutiao.com/wallet/get_list_wallet",
    userShare: "https://test-wechat-program.dftoutiao.com/task_finish/share",
    userSign: "https://test-wechat-program.dftoutiao.com/sign/index"
}, t(e, "userSign", "https://test-wechat-program.dftoutiao.com/sign/index"), t(e, "userSignAdd", "https://test-wechat-program.dftoutiao.com/sign/do_finish"), 
t(e, "userGetTotal", "https://test-wechat-program.dftoutiao.com/wallet/get_total"), 
t(e, "userGetModalTotal", "https://wallet.dftoutiao.com/get_balance/index"), t(e, "get_invite_code", "https://test-wechat-program.dftoutiao.com/invite_code/get_invite_code"), 
t(e, "treasure_boxInit", "https://test-wechat-program.dftoutiao.com/treasure_box/init"), 
t(e, "treasure_boxOpen", "https://test-wechat-program.dftoutiao.com/treasure_box/open"), 
t(e, "userPosition", "https://position.dftoutiao.com/position/get"), t(e, "newLog", "http://123.59.60.170/appstatistics/appact"), 
e);