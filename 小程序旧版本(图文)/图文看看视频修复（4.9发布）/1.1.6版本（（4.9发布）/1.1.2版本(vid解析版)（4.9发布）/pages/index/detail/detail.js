
function e(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}

var t, a = getApp(), o = require("../../../43B42803AE98379C25D24004B805D701.js"),
i = require("../../../97666232AE98379CF1000A354A55D701.js"), n = (require("../../../064CB2C6AE98379C602ADAC15295D701.js"),
  require("../../../F269C481AE98379C940FAC8602D5D701.js")), s = require("../../../D5BBCF63AE98379CB3DDA76462E5D701.js"), d = (n.getSystemInfo(),
    require("../../../B16BB640AE98379CD70DDE47E0F5D701.js"));
// 激励广告
let videoAd = null
//插屏广告
let interstitialAd = null
//计数下拉几次（第一部分）
var counterzj = 0;
var counterbf = 0;
Page({
  data: {
    type:"",
    dataA: [],
    a1: "",
    a2: "",
    // 初始化激励视频，视频静音，要将muted调成true
    videoAdshow: true,
    muted: "",
    // 插屏广告
    videochapinshow: true,
    videochapintime: "3",
    videoList: [],
    videotitle: "",
    //激励广告
    timejigg: "12",
    jigg: false,
    // 控制分享按钮3秒后显示
    timesharebtn: "3",
    sharebtnshow: false,
    // 控制分享按钮是否渲染
    share: false,
    sharebtn: {
      sharetitle: "【点击播放】频戳中你的泪点没有？赶紧点进来看看吧！",
      shareimgurl: "/image/tjfm/1.19.jpg",
      sharepath: "pages/index/index"
    }
  },

  //第一个计时器，计数下滑次数：第二部分
  addzj() { return counterzj += 1; },
  //  第二个计时器，第二部分
  add() { return counterbf += 1; },
  onLoad: function (e) {
    let _this = this
 
    console.log(e)
    var url = decodeURIComponent(e.url)
    var title = decodeURIComponent(e.title)

    _this.setData({
      type:e.type
    })

   
     //采集外部视频

      var t = this, n = e.qid, s = e.scene ? decodeURIComponent(e.scene) : "";
      if (s) {
        var d = s.split("@");
        n = d[2], this.setData({
          urlid: "",
          disposeid: d[0],
          loginid: d[1],
          plan: d[3] || "null",
          from: d[4] || ""
        });
      } else {
        var r = e.url, c = e.ac, l = e.f, g = e.type;
        this.setData({
          urlid: r || "",
          type: g || "",
          loginid: c || "",
          from: l || "",
          urlPath: "/pages/video/vdetails/vdetails?url=" + r + "&type=" + g + "&f=" + l
        });
      }
      // _this.loadVideo()

        var chuan = {
          video_link: url,
          topic: title
        }
        // console.log("传过来",chuan)
       
        var e = this, t = this.data, a = t.urlid, n = t.loginid, d = t.disposeid, r = t.type;
        // console.log("初始化", e)
        o.Video.loadRecommendVideo({
          type: r,
          urlid: a,
          disposeid: d
        }).then(function (t) {
          // console.log(t.data)
          // console.log("传过来",chuan)
          t.data.splice(1, 0, chuan); 
          // console.log(t.data) 
          e.setData({
            //初始化的10条数据
            videoList: t.data
          });
          
        })
        // console.log(_this.videoList)
 
    // 1、定时控制分享按钮定时显示  --------------------
    var interval = setInterval(function () {
      var timenew = _this.data.timesharebtn - 1
      _this.setData({
        timesharebtn: timenew
      })
      if (_this.data.timesharebtn == 0) {
        clearInterval(interval)
        _this.setData({
          //如果time的值为0时，按钮就可以显示了
          sharebtnshow: true,
        })
      }
    }, 1000)


    // 2、定时控制插屏广告------------------------ 
    var intervalchaping = setInterval(function () {
      var timenew = _this.data.videochapintime - 1
      _this.setData({
        videochapintime: timenew
      })
      if (_this.data.videochapintime == 0) {
        clearInterval(interval)
        _this.setData({
          //如果time的值为0时，按钮就可以显示了
          videochapinshow: true,
        })
      }
    }, 1000)

    // 3、定时控制激励广告----------------------
    var interval = setInterval(function () {
      var timenew = _this.data.timejigg - 1
      _this.setData({
        timejigg: timenew
      })
      if (_this.data.timejigg == 0) {
        _this.setData({
          jlgg: true,
        })
      }
    }, 1000)


    // 4、初始化插屏广告，在有需要的地方调用-------------------
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-2e5889cc81ad01d0'
      })
      interstitialAd.onLoad(() => {
        console.log('插屏 广告加载成功')
      })
      interstitialAd.onError((err) => {
        console.log('插屏 广告加载失败', err)
      })
      interstitialAd.onClose((res) => {
        console.log('关闭插屏广告', res)
      })
    }


    // 9、控制分享按钮是否显示----------
    _this.openShare()
    // 10、从后台读取自定义分享封面-----
    wx.request({
      url: "https://www.otvllat.cn/api/Fengmian",
      method: "GET",
      success: function (res) {
        if (res.data.length >= 1) {
          // console.log("yyyyy" + res.data[0].fmimage + res.data[0].title)
          // console.log("yyyyy" + res.data[0])

          var newsharebtn = {
            sharetitle: res.data[0].title,
            shareimgurl: res.data[0].fmimage,
            sharepath: res.data[0].path
          }
          // console.log(newsharebtn)
          // 将自定义封面图片和标题赋值给sharebtn
          _this.setData({
            sharebtn: newsharebtn
          })
          //  _this.openShare()
        }
      }
    })

  },
  onShow: function () {
    let _this = this
  
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      console.log("调用插屏广告+show")
      interstitialAd.show().catch((err) => {
        console.error("调用插屏广告错误" + err)
      })
    }

    // 在适合的场景显示插屏广告，定时调用
    // var videochapin = _this.data.videochapinshow
    // if (interstitialAd) {
    //   if (_this.data.videochapinshow) {
    //     console.log("调用插屏广告")
    //     interstitialAd.show().catch((err) => {
    //       console.error(err)
    //     })
    //   }
    // }


  },

  onReachBottom: function () {
  
  },
  onReady: function () { console.log("onReady") },

  onPlay(e) { },
  onPause(e) {// console.log('pause', e.detail.activeId)
  },
  onEnded(e) { },
  onError(e) { console.log(e, "播放出错") },
  onWaiting(e) { },
  onTimeUpdate(e) {//  console.log(e, "播放进度变化")
  },
  onProgress(e) { },
  //视频元数据加载完成时触发
  onLoadedMetaData(e) {// console.log('LoadedMetaData', e)
  },
  //监听上下滑动
  change(e) {
    

    console.log(e, "监听")
    // let a = e.detail.activeId
    let _this = this
    var addbf = _this.add()
    // console.log(addbf)

    // 计数下滑次数：第三部分
    var zj = _this.addzj()
    console.log("打印下滑次数" + zj)

    zj = null
    console.log("回收后" + zj)


    //滑动视频追加轮播视频数据,初始化的时候有10条数据，每次固定是请求15条，这里设置下滑5次请求一次------------------
    if(addbf%5==0){
        var t = this;
      console.log("下滑", this.data.type)
        o.Video.loadVideoByPullUp({
          channel: this.data.type,
          startkey: this.data.startkey,
          idx: this.data.idx,
          pgnum: this.data.pgNum + 1
        }).then(function (a) {
          console.log(a.data)
          t.setData({
            // videoList: t.data.videoList.concat(a.data),
            // videoList: a.data(t.data.videoList.concat),
            videoList: a.data,
            startkey: a.endkey,
            pgNum: t.data.pgNum + 1,
            idx: t.data.idx + a.data.length
          });
          console.log(t.data.videoList)
        });
     }
 
   
    // 调用插屏广告，addbf为3、5、7的时候调用----------------------------------------
    if (interstitialAd) {
      console.log('判断是否有插屏广告' + addbf)
      if (addbf % 2 == 1) {
        console.log("调用插屏广告")
        interstitialAd.show().catch((err) => {
          console.error("调用插屏广告错误" + err)
        })
      }
    }
  },
  // 控制是否显示分享
  openShare() {
    let _this = this
    wx.request({
      url: "https://www.otvllat.cn/api/Shares",
      method: "GET",
      success: function (res) {
        // console.log("yyyyy"+res.data[0].share)
        if (res.data[0].share) {
          _this.setData({
            share: res.data[0].share
          })
        }
      }
    })
  },

  // 小程序分享
  onShareAppMessage: function (res) {
    let _this = this
    if (res.from === 'button') {
    }
    if (_this.data.sharebtn.sharetitle) {
      return {
        title: _this.data.sharebtn.sharetitle,
        path: _this.data.sharebtn.sharepath,
        imageUrl: _this.data.sharebtn.shareimgurl,
        // desc: '自定义内容',
      }
    }
  },

  //采集外部视频,方法在初始化时调用----------
  loadVideo: function () {
    var url = t.url
    var title = t.title
    console.log(title)
    // var chuan = {
    //   video_link: url,
    //   topic: title
    // }
    // console.log("初始化",t.type)
    var e = this, t = this.data, a = t.urlid, n = t.loginid, d = t.disposeid, r = t.type;
    o.Video.loadRecommendVideo({
      type: r,
      urlid: a,
      disposeid: d
    }).then(function (t) {
      // console.log(t.data)
      // console.log(chuan)
      // t.data.splice(1, 0, chuan);  
      e.setData({
        //初始化的10条数据
        videoList: t.data
      });
    }), s.userOneId.call(this);
  },



})



