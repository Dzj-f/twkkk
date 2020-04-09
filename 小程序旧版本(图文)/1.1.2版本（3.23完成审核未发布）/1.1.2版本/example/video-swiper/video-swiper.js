// 激励广告
let videoAd = null
//插屏广告
let interstitialAd = null
Page({
  data: {
    // 初始化激励视频，视频静音，要将muted调成true
    videoAdshow:true,
    muted:"",
    videoList:[],
    videotitle:"",
    //激励广告
    timejigg:"12",
    jigg:false,
    // 控制分享按钮3秒后显示
    timesharebtn:"3",
    sharebtnshow:false,
    // 控制分享按钮是否渲染
    share:false,
    sharebtn:{
      sharetitle: "自定义标题",
      shareimgurl: "/image/tjfm/1.19.jpg",
      sharepath:"/pages/index/index"
    }     
  },

 onLoad: function (e) {
     let _this = this    
      // 定时控制分享按钮定时显示  
      var interval = setInterval(function () {
        var timenew = _this.data.timesharebtn - 1
        _this.setData({
          timesharebtn: timenew
        })
        if (_this.data.timesharebtn == 0) {
          clearInterval(interval)
          _this.setData({
            sharebtnshow: true,          //如果time的值为0时，按钮就可以显示了
          })
        }
      }, 1000)

      // 定时控制激励广告
    //   var interval = setInterval(function () {
    //     var timenew = _this.data.timejigg- 1
    //   _this.setData({
    //     timejigg: timenew
    //   })
    //     if (_this.data.timejigg == 0) {
    //     _this.setData({
    //       jlgg: true,          //如果time的值为0时，将data里面show的值改为true,图片就可以显示了
    //       timejigg:12
    //     })
    //   }
    // }, 1000)


      // 初始化插屏广告，在有需要的地方调用
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


   // 在页面onLoad回调事件中创建激励视频广告实例------------------
   if (wx.createRewardedVideoAd) {
     videoAd = wx.createRewardedVideoAd({
       adUnitId: 'adunit-1af84ed0a77a061d'
     })
     videoAd.onLoad(() => { })
     videoAd.onError((err) => { })
     videoAd.onClose((res) => {
       console.log("关闭激励广告")
       _this.setData({
        //  将视频静音muted关掉，muted: true表示静音开启
         muted: ""
       })
      })
   }


    //  从后台读取自定义分享封面
      wx.request({
        url: "https://www.otvllat.cn/api/Fengmian",
        method: "GET",
        success: function (res) {
         if(res.data.length>=1){
           console.log("yyyyy" + res.data[0].fmimage + res.data[0].title)
           console.log("yyyyy" + res.data[0])

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

       _this.openShare()
          // 控制分享按钮是否显示
        

            var videourl = decodeURIComponent(e.videourl);
            var videotitle = e.videotitle
            console.log(
              // "测试：" + e.videourl+e.videotitle
            )
              
            _this.setData({
                  videotitle:videotitle
            })

       

    //  var urls = ['c30719tg5ew', 'q3058h9sqhz', 'q3058h9sqhz']
   var urls = [
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/2.mp4',
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/1.mp4', 
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/3.mp4']

   var urlsTitle = [
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/2.mp4',
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/1.mp4', 
     'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/3.mp4']

          //初始化轮播视频数据
          wx.request({
            url: "https://www.otvllat.cn/api/Article",
            method: "GET",
            success: function (res) {             
              var vid = res.data.map(item=>item.videourl)
              urls= vid
              // console.log(urls)      
              if (urls.length > 3 && videourl){
                     
                      console.log("追加一条数据")
                      urls.splice(1, 0, videourl);
                     
                        var list = urls.map((url, index) => ({ id: index + 1, url }))
                        var listTitle = urlsTitle.map((title, index) => ({ id: index + 1, title }))
                      _this.setData({
                        videoList: list
                      })
                    }
             
            }
          })


        // var list = urls.map((url, index) => ({ id: index + 1, url }))
        // _this.setData({
        //   videoList: list
        // })

      },

  onShow: function () {
    let _this = this
    // console.log("data"+_this.data.videoAdshow)

     // 在适合的场景显示激励广告    
    if(videoAd){
      if (_this.data.videoAdshow){
      }
      videoAd.show().catch(() => {
        // 失败重试
        videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }


    // 在适合的场景显示插屏广告
    if (interstitialAd) {
        console.log("cpgggggggg")
        interstitialAd.show().catch((err) => {
          console.error(err)
        })
      }
  
  
  },
  onReady:function(){console.log("onReady")},
  //开始/继续播放时触发
  onPlay(e) { },
  //暂停播放时触发
  onPause(e) {
    // console.log('pause', e.detail.activeId)
  },
  //播放到末尾时触发
  onEnded(e) { },
//视频播放出错时触发
  onError(e) {
    console.log(e,"播放出错")
   },

//视频出现缓冲时触发
  onWaiting(e) {
    // console.log(e, "缓存出错")
   },
//播放进度变化时触发
  onTimeUpdate(e) {
     console.log(e.detail.activeId, "播放进度变化")
   },

//加载进度变化时触发，只支持一段加载
  onProgress(e) { },

  //视频元数据加载完成时触发
  onLoadedMetaData(e) {
    // console.log('LoadedMetaData', e)
  },
  //
  change(e){
    console.log(e,"监听")
    let a = e.detail.activeId
    let _this = this
    // 用户触发视频后，每播放三个视频显示一条激励视频广告，一开始播放的是第二个，所以a%3 ==2就是5,8,11，表示隔三个
    // if (videoAd) {
    if (a%3 ==2 ) {
      // 当激励视频广告弹出时，将muted值变为true，将视频调为静音，muted传值给子组件控制视频的静音
      _this.setData({
        muted:true
      })
      videoAd.show().catch(() => {
        // 失败重试
        videoAd.load()
          .then(() => videoAd.show())
          .catch(err => {
            console.log('激励视频 广告显示失败')
          })
      })
    }


  },
      // 控制是否显示分享
      openShare(){
        let _this = this
        wx.request({
          url: "https://www.otvllat.cn/api/Shares",
          method: "GET",
          success: function (res) {
            // console.log("yyyyy"+res.data[0].share)
            _this.setData({
              share: res.data[0].share
            })

          }
        })    
      },

    // 小程序分享
      onShareAppMessage: function (res) {
       let _this = this
        if (res.from === 'button') {
        }

        if (_this.data.sharebtn.sharetitle){
          return {
            title: _this.data.sharebtn.sharetitle,
            path: _this.data.sharebtn.sharepath,
            imageUrl: _this.data.sharebtn.shareimgurl,
            // desc: '自定义内容',

          }
        }
      


  }



  
  



})



