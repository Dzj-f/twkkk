// 激励广告
let videoAd = null
//插屏广告
let interstitialAd = null
//计数下拉几次（第一部分）
var counterbf = 0;
Page({
  data: {
    // 初始化激励视频，视频静音，要将muted调成true
    videoAdshow:true,
    muted:"",
    // 插屏广告
    videochapinshow:true,
    videochapintime:"3",
    videoList:[],
    videotitle:"3333",
    //激励广告
    timejigg:"12",
    jigg:false,
    // 控制分享按钮3秒后显示
    timesharebtn:"3",
    sharebtnshow:false,
    // 控制分享按钮是否渲染
    share:false,
    sharebtn:{
      sharetitle: "",
      shareimgurl: "",
      sharepath: ""
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


      // 定时控制插屏广告 
        var intervalchaping = setInterval(function () {
          var timenew = _this.data.videochapintime - 1
        _this.setData({
          videochapintime: timenew
        })
          if (_this.data.videochapintime == 0) {
          clearInterval(interval)
          _this.setData({
            videochapinshow: true,          //如果time的值为0时，按钮就可以显示了
          })
        }
      }, 1000)

        // 定时控制激励广告
        var interval = setInterval(function () {
          var timenew = _this.data.timejigg- 1
        _this.setData({
          timejigg: timenew
        })
          if (_this.data.timejigg == 0) {
          _this.setData({
            jlgg: true,        
          })
        }
      }, 1000)

         


      // 初始化插屏广告，在有需要的地方调用-------------------
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


      // // 在页面onLoad回调事件中创建激励视频广告实例------------------
      // if (wx.createRewardedVideoAd) {
      //   videoAd = wx.createRewardedVideoAd({
      //     adUnitId: 'adunit-1af84ed0a77a061d'
      //   })
      //   videoAd.onLoad(() => { console.log('激励广告加载成功')})
      //   videoAd.onError((err) => { { console.log('激励广告加载失败') }})
      //   videoAd.onClose((res) => {
      //     console.log("关闭激励广告")
      //     _this.setData({
      //       //  将视频静音muted关掉，muted: true表示静音开启
      //       muted: ""
      //     })
      //     })
      // }


   // 定时控制分享按钮定时显示  
  //  var interval = setInterval(function () {
  //    // 在适合的场景显示激励广告    
  //    if (videoAd) {
  //      videoAd.show().catch(() => {
  //        // 失败重试
  //        videoAd.load()
  //          .then(() => videoAd.show())
  //          .catch(err => {
  //            console.log('激励视频 广告显示失败')
  //          })
  //      })
  //    }
  //  }, 1000)


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
             sharebtn: newsharebtn,
            //  videotitle: res.data[0].title
           })
          //  _this.openShare()
         }
         
        }
      })

       _this.openShare()
          // 控制分享按钮是否显示
          
          console.log("接收的视频地址1：" + e.videourl )
          console.log("接收的标题1：" + e.videotitle)
          console.log("接收的视频地址11：" + decodeURIComponent(e.videourl) )
          console.log("接收的标题11：" + decodeURIComponent(e.videotitle))
            
          if (e.videourl && e.videotitle){
            var videourl = decodeURIComponent(e.videourl);
            var videotitle = decodeURIComponent(e.videotitle)
             console.log("接收的视频地址2：" + videourl + "接收的视频标题2："+videotitle)
             var addvideo={
               videourl: videourl,
               title: videotitle
             }
           }         
            _this.setData({
                  videotitle:videotitle
            })

       

    //  var urls = ['c30719tg5ew', 'q3058h9sqhz', 'q3058h9sqhz']
            // var urls = [
            //   'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/2.mp4',
            //   'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/1.mp4', 
            //   'https://xiaohuihui-1258009340.cos.ap-guangzhou.myqcloud.com/3.mp4']

            var urls = [
              {
                videourl:'https://ship-1301656639.cos.ap-chengdu.myqcloud.com/%E8%A7%86%E9%A2%91/__%E8%83%86%E5%AD%90%E5%A4%A7%E7%9A%84%E7%82%B9%E5%BC%80%E7%9C%8B%E7%9C%8B__%E7%9C%9F%E7%8E%B0%E5%AE%9E__.mp4',
                title:'标题一',
              },
              {
                videourl: 'https://ship-1301656639.cos.ap-chengdu.myqcloud.com/%E8%A7%86%E9%A2%91/12%E5%B2%81%E5%B0%91%E5%A5%B3%E5%87%BA%E8%91%AC%20%E5%85%A8%E6%9D%91%E4%BA%BA%E9%83%BD%E7%9C%8B%E5%93%AD!.mp4', 
                title: '标题二',
              },
              {
                videourl: 'https://ship-1301656639.cos.ap-chengdu.myqcloud.com/%E8%A7%86%E9%A2%91/%F0%9F%94%B4%E3%80%8A%2013%E5%B2%81%E5%BD%93%E5%A6%88%20%E3%80%8B%F0%9F%94%B4%E7%9C%8B%E5%93%AD%E4%BA%86%F0%9F%94%B4.mp4',
                title: '标题三',
              }
            ]

          //初始化轮播视频数据
          wx.request({
            url: "https://www.otvllat.cn/api/Article",
            method: "GET",
            success: function (res) {             
              // var vid = res.data.map(item=>item.videourl)
              // urls= vid
              console.log(res.data)
              urls = res.data

              console.log("追加一个对象"+addvideo)

              // console.log(urls)      
              if (urls.length > 3 && addvideo ){                   
                      console.log("追加一条数据")
                       urls.splice(1, 0, addvideo);                  
                      // var list = urls.map((url, index) => ({ id: index + 1, url }))                                    
                      _this.setData({
                        videoList: urls
                      })
                    }else{
                       console.log("追加一条数据失败")
                      // var list = urls.map((url, index) => ({ id: index + 1, url }))                             
                      _this.setData({
                        videoList: urls
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
    // if(videoAd){
    //   if (_this.data.videoAdshow){
    //   }
    //   videoAd.show().catch(() => {
    //     // 失败重试
    //     videoAd.load()
    //       .then(() => videoAd.show())
    //       .catch(err => {
    //         console.log('激励视频 广告显示失败')
    //       })
    //   })
    // }


    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      console.log("调用插屏广告+show")
      interstitialAd.show().catch((err) => {
        console.error("调用插屏广告错误"+err)
      })
    }


    // 在适合的场景显示插屏广告
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
  onReady:function(){console.log("onReady")},


  add() { return counterbf += 1; },
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
    //  console.log(e, "播放进度变化")
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
    // let a = e.detail.activeId
    let _this = this
    var addbf = _this.add()
    console.log(addbf)
    // 用户触发视频后，每播放三个视频显示一条激励视频广告，一开始播放的是第二个，所以a%3 ==2就是5,8,11，表示隔三个
    // if (videoAd) {
    // if (a%3 ==2 ) {
      // // 当激励视频广告弹出时，将muted值变为true，将视频调为静音，muted传值给子组件控制视频的静音
      // _this.setData({
      //   muted:true
      // })
      // videoAd.show().catch(() => {
      //   // 失败重试
      //   videoAd.load()
      //     .then(() => videoAd.show())
      //     .catch(err => {
      //       console.log('激励视频 广告显示失败')
      //     })
      // })
    // }
      // 调用激励视频的方法一，方法二卸载组件里
    //  if (videoAd) {
    //   // 当激励视频广告弹出时，将muted值变为true，将视频调为静音，muted传值给子组件控制视频的静音
    //   //  下滑三个视频出一次激励视频
    //    console.log('调用激励广告')
    //    if(addbf%3==0){
    //      _this.setData({
    //        muted: true
    //      })
    //      console.log('广告出现，视频静音')
    //      videoAd.show().catch(() => {
    //        // 失败重试
    //        videoAd.load()
    //          .then(() => videoAd.show())
    //          .catch(err => {
    //            console.log('激励视频 广告显示失败')
    //          })
    //      })
    //   }     
    // 

        // 调用插屏广告
        if (interstitialAd) {
          console.log('判断是否有插屏广告' + addbf)
          // if (addbf%2 == 0) {
          console.log("调用插屏广告")
          interstitialAd.show().catch((err) => {
            console.error("调用插屏广告错误" + err)
          })
        // }
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

     //小程序分享
      onShareAppMessage: function (res) {
       let _this = this
        if (res.from === 'button') {
        }
        if (_this.data.sharebtn.sharetitle){
          return {
            title: _this.data.sharebtn.sharetitle,
            path: _this.data.sharebtn.sharepath,
            imageUrl: _this.data.sharebtn.shareimgurl,
            desc: _this.data.videotitle,
          }
        }else{
          // return {
          //   desc: '自定义desc',
          //   title: _this.data.videotitle
          // }
        }
     },
    //   onShareAppMessage: function (res) {
    //     console.log(res)
    //     let _this = this
    //     let videotitle = _this.data.videotitle
        
    //     // if (res.from === 'button') {
    //     // }       
    //     //   return {
    //     //     desc: '自定义desc',
    //     //     title: videotitle
    //     // }
    //  }



})



