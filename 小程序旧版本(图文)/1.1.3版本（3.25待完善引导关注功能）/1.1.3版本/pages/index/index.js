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
    containermarginTop:"202rpx",
    duihuashow:true,
    cpgg:true,
    page:0,
    // 控制插屏广告
    tcshow:true,   //初始化定义show为true
    time: 15,        //定义时间为15秒
    //控制头部提醒
    tixing:true,
    first_id: 0,//用于判断是否是当前选中的  
    noticemove: 0,  //开始是上拉对话框是隐藏的，需要的时候把noticemove设置为1就可以了
    notice: false,
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
      {"id": 3,"goods_name": "祝福"
      },
      {"id": 4,"goods_name": "健康"
      },
      {"id": 5,"goods_name": "妙招"
      },
      {"id": 6,"goods_name": "精彩"
      },
      {"id": 7,"goods_name": "歌舞"
      },
      {"id": 8,"goods_name": "人生"
      },
      
    ],
   
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
      case 1: 
         //  2、搞笑页追加    
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleGaoxiao",
            data: { lim: 6, sk: skgx },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListGaoxiao: addlist
              })
            }
          });
        break;
      case 2: 
        // 3、祝福页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleZhufu",
            data: { lim: 6, sk: skzf },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListZhufu: addlist
              })
            }
          });
        break;
      case 3: 
         // 4、健康页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleJiankang",
            data: { lim: 6, sk: skjk },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListJiankang: addlist
              })
            }
          });
        break;
      case 4: 
        // 5、妙招页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleMiaozhao",
            data: { lim: 6, sk: skmz },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListMiaozhao: addlist
              })
            }
          });
        break;
      case 5:
        // 6、精彩页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleJingcai",
            data: { lim: 6, sk: skjc, },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListJingcai: addlist
              })
            }
          });
        break;
      case 6: 
        // 7、歌舞页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleGewu",
            data: { lim: 6, sk: skgw },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListGewu: addlist
              })
            }
          });
        break;
      case 7: 
        // 8、人生页追加
          wx.request({
            url: "https://www.otvllat.cn/api/ArticleRensheng",
            data: { lim: 6, sk: skrs },
            method: "GET",
            success: function (res) {
              // console.log(res.data)
              let oldlist = that.data.myVideoList
              let newlist = res.data
              let addlist = oldlist.concat(newlist)
              // console.log(addlist)
              that.setData({
                myVideoListRensheng: addlist
              })
            }
          });
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
        case 1: x = this.listGaoxiao();
          break;
        case 2: x = this.listZhufu();
          break;
        case 3: x = this.listJiankang();
          break;
        case 4: x = this.listMiaozhao();
          break;
        case 5: x = this.listJingcai();
          break;
        case 6: x = this.listGewu();
          break;
        case 7: x = this.listRensheng();
          break;
      }     
    },

    // 点击视频去详情页------------------
   goDetail(e){
     var url = e.currentTarget.dataset.videourl     
     var title = e.currentTarget.dataset.videotitle  
     wx.navigateTo({
      //  encodeURIComponent转码，加这个是因为小程序传链接时会根据长度或者问号等因素截断，导致下一页接收参数不完整
       url: '/example/video-swiper/video-swiper?videourl=' + encodeURIComponent(url) + '&videotitle='+title
      //  url: '/pages/index/detail/detail?videourl=' + encodeURIComponent(url)

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
    // 2、初始化视频列表搞笑----------------------------
  listGaoxiao(){
        let that = this     
        wx.request({
          url: "https://www.otvllat.cn/api/ArticleGaoxiao",
          data: { lim: 6, sk: 0, },
          method: "GET",
          success: function (res) {
            // console.log(res.data)
            that.setData({
              myVideoListGaoxiao:res.data
            })
            
          }
        })            
      },
    // 3、初始化视频列表祝福----------------------------
  listZhufu(){
      let that = this    
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleZhufu",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          that.setData({
            myVideoListZhufu:res.data
          })        
        }
      })             
    },
    // 4、初始化视频列表健康----------------------------
  listJiankang(){
      let that = this
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleJiankang",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          that.setData({
            myVideoListJiankang:res.data
          })        
        }
      })             
    },
    // 5、初始化视频列表妙招----------------------------
  listMiaozhao(){
      let that = this  
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleMiaozhao",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          console.log(res.data)
          that.setData({
            myVideoListMiaozhao:res.data
          })   
        }
      })            
    },
   //6、 初始化视频列表精彩----------------------------
  listJingcai(){
      let that = this 
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleJingcai",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          that.setData({
            myVideoListJingcai:res.data
          })      
        }
      })          
    },
    //7、 初始化视频列表歌舞----------------------------
  listGewu(){
      let that = this   
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleGewu",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          that.setData({
            myVideoListGewu:res.data
          })         
        }
      })
    },
    //8、 初始化视频列表人生----------------------------
  listRensheng(){
      let that = this
      wx.request({
        url: "https://www.otvllat.cn/api/ArticleRensheng",
        data: { lim: 6, sk: 0, },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          that.setData({
            myVideoListRensheng:res.data
          })        
        }
      })              
    }, 
    // 头部点击显示对话框
    duihua(){
      let _this = this
      if (_this.data.duihuashow) {
        _this.setData({
          // notice是控制对话框显隐的，duihuashow:false是控制对话框出现过一次之后就不能在出现了，noticemove: 1是对话框弹出的动画
          noticemove: 1,
          notice: true,
          duihuashow: false
        })
      }else{
        console.log('提醒对话框已经出现过，点击时应该自动关闭头部提醒')
        _this.tixingclose()
      }
     
    },
  //  关闭顶部提示框
   tixingclose(){
     console.log("关闭顶部提示框")
     let _this = this
     _this.setData({
       tixing:false,
       containermarginTop:"102rpx"
     })
  },
  //换一批
  huanyipi(){
    console.log('换一批')
    let _this = this
    if (_this.data.duihuashow) {
      // _this.duihuakuang()
      _this.setData({
        // notice是控制对话框显隐的，duihuashow:false是控制对话框出现过一次之后就不能在出现了，noticemove: 1是对话框弹出的动画
        noticemove: 1,      
        notice: true,
        duihuashow: false,
      })
    }else{
      console.log('已经出现过提示框，这里发送刷新请求了')   
      wx.request({
        url: "https://www.otvllat.cn/api/Article",
        data: { lim: 6, sk: 6 },
        method: "GET",
        success: function (res) {
          // console.log(res.data)
          let oldlist = _this.data.myVideoList
          let newlist = res.data
          let addlist = newlist.concat(oldlist)
          // console.log(addlist)
          _this.setData({
            myVideoList: addlist
          })
        }
      });
    }  
  },

  // 对话框
  // duihuakuang(){
  //   let  _this =this
  //   if (_this.data.duihuashow) {
  //     _this.setData({
  //       // notice是控制对话框显隐的，duihuashow:false是控制对话框出现过一次之后就不能在出现了
  //       noticemove: 1,
  //       duihuashow: false
  //     })
  //   }
  // },
  //关闭对话
  // duihuaclose(){
  //   let _this =this
  //   console.log('关闭对话框')
  //   _this.setData({
  //      noticemove: 2,
  //   }) 
  // },
  //对话允许
  duihuayunxu(e){
    let _this = this
    console.log('关闭对话框--允许' + e)
    _this.setData({
      noticemove: 2,
    }) 
  },
  //对话取消
  duihuaquxiao(e){
    let _this = this
    console.log('关闭对话框——取消' + e)
    _this.setData({
      noticemove: 2,
    }) 
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
  



})
