var e = require("064CB2C6AE98379C602ADAC15295D701.js"), r = require("EB52C4B5AE98379C8D34ACB22945D701.js");

module.exports = {
    userLogin: function(t) {
        var n = t.code;
        return r.req(e.userLogin, {
            code: n
        }).then(function(e) {
            return e;
        });
    },
    userRegister: function(t) {
        var n = t.code, u = t.encryptedData, o = t.iv, i = t.rawData, a = t.signature, c = t.invite_code, s = void 0 === c ? "" : c, l = t.master_accid, d = void 0 === l ? "" : l, f = t.from, v = void 0 === f ? "" : f;
        return r.req(e.userRegister, {
            code: n,
            encryptedData: u,
            iv: o,
            rawData: i,
            signature: a,
            invite_code: s,
            master_accid: d,
            from: v
        }).then(function(e) {
            return e;
        });
    },
    phoneNumber: function(t) {
        var n = t.ltToken, u = t.iv, o = t.encryptedData, i = t.source, a = t.code;
        return r.req(e.phoneNumber, {
            lt: n,
            iv: u,
            encryptedData: o,
            source: i,
            code: a
        }).then(function(e) {
            return e;
        });
    },
    userGoldCoin: function(t) {
        var n = t.ltToken, u = t.startstr;
        return r.req(e.userGoldCoin, {
            lt: n,
            startstr: u || ""
        }).then(function(e) {
            return e;
        });
    },
    userSmallChange: function(t) {
        var n = t.ltToken, u = t.startstr;
        return r.req(e.userSmallChange, {
            lt: n,
            startstr: u || ""
        }).then(function(e) {
            return e;
        });
    },
    userShare: function(t) {
        var n = t.ltToken;
        return r.req(e.userShare, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    userRegAdd: function(t) {
        var n = t.ltToken;
        return r.req(e.userRegAdd, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    userSign: function(t) {
        var n = t.ltToken;
        return r.req(e.userSign, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    userSignAdd: function(t) {
        var n = t.ltToken;
        return r.req(e.userSignAdd, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    userGetTotal: function(t) {
        var n = t.ltToken;
        return r.req(e.userGetTotal, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    get_invite_code: function(t) {
        var n = t.ltToken;
        return r.req(e.get_invite_code, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    treasure_boxInit: function(t) {
        var n = t.ltToken;
        return r.req(e.treasure_boxInit, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    treasure_boxOpen: function(t) {
        var n = t.ltToken;
        return r.req(e.treasure_boxOpen, {
            lt: n
        }).then(function(e) {
            return e;
        });
    },
    userModalTotal: function(t) {
        var n = t.ltToken;
        return r.req(e.userGetModalTotal, {
            lt: n
        }).then(function(e) {
            return e;
        });
    }
};