function t(t, o, e) {
    return o in t ? Object.defineProperty(t, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = e, t;
}

var o;

module.exports = (o = {
    refreshUrl: "https://toutiao.eastday.com/toutiao_h5/RefreshJP",
    pullUpUrl: "https://toutiao.eastday.com/toutiao_h5/NextJP",
    pullDownUrl: "https://toutiao.eastday.com/toutiao_h5/pulldown",
    nrecommendurl: "https://dfttdetail.037201.com/newsmore_h5detail/newspool",
    videoDataUrl: "https://vdh5socket.dftoutiao.com/videoh5/getvideos",
    vrecommendurl: "https://vdh5socket.037201.com/videoh5/morevideos",
    detailsDataUrl: "https://wxnewscode.dftoutiao.com/weixinQRcode/newsInfoForApplets",
    activeLogUrl: "https://wapactlog.dftoutiao.com/getwapdata/data",
    showLogUrl: "https://xcxact.dftoutiao.com/getwapdata/advshow",
    clickLogUrl: "https://xcxact.dftoutiao.com/getwapdata/partner",
    shareLogUrl: "https://tj.dftoutiao.com/appstatistics/share",
    programCode: "https://wxnewscode.dftoutiao.com/wxsa_receiveFormId/login",
    programFormid: "https://wxnewscode.dftoutiao.com/wxsa_receiveFormId/receiveFormId",
    isMegPush: "https://wxnewscode.dftoutiao.com/wxsa_receiveFormId/pushstatus",
    userIntegral: "https://wechat-program.dftoutiao.com",
    dspListUrl: "https://softwords.dftoutiao.com/partner/list",
    dspDetailUrl: "https://softwordsdetail.dftoutiao.com/partner/detail",
    userLogin: "https://wechat-program.dftoutiao.com/login/login_with_code",
    userRegister: "https://wechat-program.dftoutiao.com/login/register",
    userRegAdd: "https://wechat-program.dftoutiao.com/task_finish/reg",
    phoneNumber: "https://wechat-program.dftoutiao.com/login/bind_phone",
    userGoldCoin: "https://wechat-program.dftoutiao.com/wallet/get_list_bonus",
    userSmallChange: "https://wechat-program.dftoutiao.com/wallet/get_list_wallet",
    userShare: "https://wechat-program.dftoutiao.com/task_finish/share",
    userSign: "https://wechat-program.dftoutiao.com/sign/index"
}, t(o, "userSign", "https://wechat-program.dftoutiao.com/sign/index"), t(o, "userSignAdd", "https://wechat-program.dftoutiao.com/sign/do_finish"), 
t(o, "userGetTotal", "https://wechat-program.dftoutiao.com/wallet/get_total"), t(o, "userGetModalTotal", "https://wallet.dftoutiao.com/get_balance/index"), 
t(o, "get_invite_code", "https://wechat-program.dftoutiao.com/invite_code/get_invite_code"), 
t(o, "treasure_boxInit", "https://wechat-program.dftoutiao.com/treasure_box/init"), 
t(o, "treasure_boxOpen", "https://wechat-program.dftoutiao.com/treasure_box/open"), 
t(o, "userPosition", "https://position.dftoutiao.com/position/get"), t(o, "newLog", "https://stinvi.dftoutiao.com/appstatistics/appact"), 
o);