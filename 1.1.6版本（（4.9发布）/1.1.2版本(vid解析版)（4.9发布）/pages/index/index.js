var t = getApp(), a = require("../../97666232AE98379CF1000A354A55D701.js"), e = require("../../43B42803AE98379C25D24004B805D701.js")
const app = getApp()

// counter用来做分页的，计数下滑次数：第一部分
var countertj = 0;
var countergx = 0;
var counterzf = 0;
var counterjk = 0;
var countermz = 0;
var counterjc = 0;
var countergw = 0;
var counterrs = 0;
// 插屏广告,第一部分
let interstitialAd = null

Page({
  data: {
    type: "vgaoxiao",
    cpgg:true,
    page:0,
    // 控制插屏广告
    tcshow:true,   //初始化定义show为true
    time: 15,        //定义时间为15秒
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    //导航栏---------------------
    first_names: [
      {"id": 1,"goods_name": "推荐"
      },
      {"id": 2,"goods_name": "搞笑"
      },
      {"id": 3,"goods_name": "小品"
      },
      {"id": 4,"goods_name": "亲子"
      },
      {"id": 5,"goods_name": "拍客"
      },
      {"id": 6,"goods_name": "资讯"
      },
      {"id": 7,"goods_name": "生活"
      },
      {"id": 8,"goods_name": "纪录片"
      },
      
    ],
    first_id: 0,//用于判断是否是当前选中的  
   
    // 1、视频列表推荐
   myVideoList:[
          // {
          //   id: 1,
          //   // auth: "张三",
          //   title: "这个视频没火我难受 ",
          //   fmimage: "/image/tjfm/1.22.jpg",
          //   videourl: "t3035flep1f"
          // },
        ] ,
    // 2、视频列表搞笑
    myVideoListGaoxiao:[],
    // 3、视频列表祝福
    myVideoListZhufu:[],
    // 4、视频列表健康
    myVideoListJiankang:[],
    // 5、视频列表妙招
    myVideoListMiaozhao:[],
    // 6、视频列表精彩
    myVideoListJingcai:[],
    // 7、视频列表歌舞
    myVideoListGewu:[ ],
    // 8、视频列表人生
    myVideoListRensheng:[],

  },


  // 生命周期------初始化页面--------------------
  onLoad: function () { 


    // 初始化视频数据的方法
    this.listTuijian()
    
    // 初始化插屏广告，在有需要的地方调用，第二部分
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

      // 定时控制插屏广告
      // var interval = setInterval(function () {
      //   var timenew = this.data.timecpgg - 1
      //   this.setData({
      //     timecpgg: timenew
      //   })
      //   if (this.data.timecpgg == 0) {
      //     this.setData({
      //       cpgg: true,          //如果time的值为0时，将data里面show的值改为true,图片就可以显示了
      //       timejigg: 12
      //     })
      //   }
      // }, 1000)



    // 在适合的场景显示插屏广告
    // if (interstitialAd) {
    //   if (this.data.cpgg) {
    //     console.log("cpgggggggg")
    //     interstitialAd.show().catch((err) => {
    //       console.error(err)
    //     })
    //   }
    // }
   
   

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  //生命周期-----监听页面变化------------
  onShow: function () {
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      console.log("调用插屏广告")
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }


    // 弹窗广告
      //  var that = this
      //   var interval = setInterval(function () {
      //     var timenew = that.data.time - 1
      //     that.setData({
      //       time: timenew
      //     })
      //     if (that.data.time == 0) {
      //       // clearInterval(interval)
      //       that.setData({
      //         tcshow: true,          //如果time的值为0时，将data里面show的值改为true,图片就可以显示了
      //         time:15
      //       })
      //     }
      //   }, 1000)
      
        // setInterval(function () { 
        //   that.setData({
        //       tcshow: true          //如果time的值为0时，将data里面show的值改为true,图片就可以显示了
        //   })
        //  }, 10000)
  },
  
  // 设置定时器，用于分页下拉触底分页请求数据--------------
  //计数下滑次数：第二部分
  addtj() {return countertj += 1;},
  addzf() {return counterzf += 1;},
  addgx() {return countergx += 1;},
  addjk() {return counterjk += 1;},
  addmz() {return countermz += 1;},
  addjc() {return counterjc += 1;},
  addgw() {return countergw += 1;},
  addrs() {return counterrs += 1;},

  // 下拉刷新触发函数--------------------------
  onPullDownRefresh: function () {
    console.log("下拉刷新")
    //  在当前路由下拉触底追加相对应的数据-----
    let that = this

    var page = that.data.page
    switch (page) {
      case 0:
        //  1、推荐页下拉刷新   
        wx.request({
          url: "https://www.otvllat.cn/api/Article",
          data: { lim: 6, sk: 6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoList
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoList: addlist
            })
          }
        });
        break;
      case 1:
        //  2、搞笑页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleGaoxiao",
          data: { lim: 6, sk:6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListGaoxiao
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListGaoxiao: addlist
            })
          }
        });
        
        break;
      case 2:
        // 3、祝福页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleZhufu",
          data: { lim: 6, sk: 6},
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListZhufu
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListZhufu: addlist
            })
          }
        });
        break;
      case 3:
        // 4、健康页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleJiankang",
          data: { lim: 6, sk: 6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListJiankang
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListJiankang: addlist
            })
          }
        });
        break;
      case 4:
        // 5、妙招页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleMiaozhao",
          data: { lim: 6, sk: 6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListMiaozhao
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListMiaozhao: addlist
            })
          }
        });
        break;
      case 5:
        // 6、精彩页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleJingcai",
          data: { lim: 6, sk: 6, },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListJingcai
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListJingcai: addlist
            })
          }
        });
        break;
      case 6:
        // 7、歌舞页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleGewu",
          data: { lim: 6, sk: 6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListGewu
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListGewu: addlist
            })
          }
        });
        break;
      case 7:
        // 8、人生页下拉刷新
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleRensheng",
          data: { lim: 6, sk: 6 },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            let oldlist = that.data.myVideoListRensheng
            let newlist = res.data
            let addlist = newlist.concat(oldlist)
            // console.log(addlist)
            that.setData({
              myVideoListRensheng: addlist
            })
          }
        });
        break;
    }   
  },

  // 下拉到底触发函数--------------------------
  onReachBottom: function () {
    console.log('到底了！')
    let that = this
    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      if (that.data.tcshow){
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      } 
    }
    // 追加数据
   
    // console.log("data"+that.data.tcshow)
    

    // 计数下滑次数：第三部分
    var dtj = that.addtj()
    var dgx = that.addgx()
    var dzf = that.addzf()
    var djk = that.addjk()
    var dmz = that.addmz()
    var djc = that.addjc()
    var dgw = that.addgw()
    var drs = that.addrs()
     
    // console.log("当前页："+that.data.page)
    var page = that.data.page

  // 1、 推荐页----追加-------------- 
      var sktj = dtj * 6
      var skgx = dgx * 6
      var skzh = dzf * 6
      var skjk = djk * 6
      var skmz = dmz * 6
      var skjc = djc * 6
      var skgw = dgw * 6
      var skrs = drs * 6

    //  在当前路由下拉触底追加相对应的数据-----
    switch (page) {
      case 0:  
        //  1、推荐页追加    
          wx.request({
            url: "https://www.otvllat.cn/api/Article",
            data: { lim: 6, sk: sktj },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoList: addlist
              })
            }
          }) ;    
        break;
      case 1: this.zhuijia()  //  2、搞笑页追加
          break;
      case 2: this.zhuijia()  // 3、祝福页追加   
          break;
      case 3: this.zhuijia()   // 4、健康页追加
          break;
      case 4: this.zhuijia()   // 5、妙招页追加
        break;
      case 5: this.zhuijia()   // 6、精彩页追加
        break;  
      case 6: this.zhuijia()   // 7、歌舞页追加
        break;
      case 7: this.zhuijia()   // 8、人生页追加
        break;
    }     
  
  },
  

  //  导航栏切换路由------------------------------
    navClick: function (e) {
        var that = this;
        var index = e.currentTarget.dataset.index;//获取当前点击的元素下标
        console.log(index);
        that.setData({
          first_id: index,
          page:index
        })


    //  当切换到当前路由下才加载

      switch (index) {
        case 0: 
          that.listTuijian()
          break;
        case 1: 
          that.setData({
            type:"vgaoxiao"
          })
          that.shuju();
          break;
        case 2:
          that.setData({
            type: "vxiangsheng"
          })
          that.shuju();
          break;
        case 3: 
          that.setData({
            type: "vqinzi"
          })
          that.shuju();
          break;
        case 4: 
          that.setData({
            type: "vpaike"
          })
          that.shuju();
          break;
        case 5: 
          that.setData({
            type: "vzixun"
          })
          that.shuju()
          break;
        case 6: 
          that.setData({
            type: "vshenghuo"
          })
          that.shuju()
          break;
        case 7: 
          that.setData({
            type: "vjilupian"
          })
          that.shuju()
          break;
      }     
    },

    // 点击视频去详情页------------------
   goDetail(e){
    //  videourl 现在是vid形式的,将vid传过去播放页解析
     var videourl = e.currentTarget.dataset.videourl     
     var title = e.currentTarget.dataset.videotitle
     var vid = e.currentTarget.dataset.videourl  
    //  var haha

     wx.navigateTo({
       //  encodeURIComponent转码，加这个是因为小程序传链接时会根据长度或者问号等因素截断，导致下一页接收参数不完整
       url: '/example/video-swiper/video-swiper?videourl=' + encodeURIComponent(videourl) + '&videotitle=' + encodeURIComponent(title)

     })
   
   },
   

    // 1、初始化视频列表推荐----------------------------
  listTuijian(){
    let that = this   
      wx.request({
        url: "https://www.otvllat.cn/api/Article",
        data:{lim:6,sk:0,},
        method: "GET",
        success: function (res) {
          that.setData({
            myVideoList:res.data
          })
          
        }
      })          
    },
   


    // 封装请求外部数据公用方法------------------
    shuju(){
      // var type = "vxiangsheng" 
      var t = this;
      return this.setData({
        loading: !0
      }), new Promise(function (a) {
        e.Video.loadDataForVideo(t.data.type).then(function (e) {
          console.log(e.data)
          t.setData({
            // myVideoListMiaozhao: e.data,
            myVideoList: e.data,
            startkey: e.endkey,
            pgNum: 1,
            idx: e.data.length + 1
          }), a();
        }).catch(function (a) {
          t.setData({
            loading: !1
          });
        });
      }); 
    },


    //封装下拉触底追加数据
    zhuijia(){
      var that = this
      console.log("触底")
      e.Video.loadVideoByPullUp({
        channel: that.data.type,
        startkey: this.data.startkey,
        idx: this.data.idx,
        pgnum: this.data.pgNum + 1
      }).then(function (a) {
        // console.log("新请求的" + JSON.stringify(a.data))
        var data = JSON.stringify(a.data)
        var gaoxiaolist = JSON.stringify(that.data.myVideoListGaoxiao)
        console.log('请求成功')

        that.setData({
          myVideoList: that.data.myVideoList.concat(a.data),
          // videoList: a.data(t.data.myVideoListGaoxiao.concat),
          // myVideoListGaoxiao: a.data,
          startkey: a.endkey,
          pgNum: that.data.pgNum + 1,
          idx: that.data.idx + a.data.length
        });
        console.log("搞笑列表" + JSON.stringify(that.data.myVideoListGaoxiao))
      })
    },

      //采集视频的详情页---------
      bindVideoTap(t) {
        var e = t.currentTarget.dataset, o = e.url, n = e.type, i = o.substring(o.lastIndexOf("/") + 1, o.length - 5);
        // console.log(e.src+e.title)
        var src = (encodeURIComponent(e.src))
        var title = (encodeURIComponent(e.title))
        
        // 将视频的播放地址，标题，类型传过去
        a.cacheReadUrlForVideo(i), wx.navigateTo({
          // url: "detail/detail?url=" + i + "&type=" + n + "&f=" + n
          url: "detail/detail?url=" + src + "&title=" + title + "&type=" + n
        });
      },
  

})
