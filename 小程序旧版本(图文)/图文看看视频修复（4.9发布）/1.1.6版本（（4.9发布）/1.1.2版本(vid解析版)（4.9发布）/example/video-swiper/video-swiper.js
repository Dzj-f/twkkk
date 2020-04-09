// 激励广告
let videoAd = null
//插屏广告
let interstitialAd = null
//计数下拉几次（第一部分）
var counterzj = 0;
var counterbf = 0;
Page({
  data: {
    dataA:[],
    a1:"",
    a2:"",
    // 初始化激励视频，视频静音，要将muted调成true
    videoAdshow:true,
    muted:"",
    // 插屏广告
    videochapinshow:true,
    videochapintime:"3",
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
   var a =[]
   var mytitle = ["标题1", "标题2", "标题3", "标题4"]
   var aaaa =[]
  //  console.log("接收的视频标题：" + e.videotitle)
  //  console.log("接收的视频vid：" + e.videourl) 
   console.log("haha--首页传过来的vid转译后---" + decodeURIComponent(e.videourl))
   console.log("haha--首页传过来的title转译后---" + decodeURIComponent(e.videotitle))
  //  接收首页传过来的vid和title
   var vid = decodeURIComponent(e.videourl)
   var title = decodeURIComponent(e.videotitle)
  //  用来存播放页解析得到的播放地址
   var haha

      //  去空格，解析传过来的播放地址------------------------
      var baseUrl = "https://vv.video.qq.com/getinfo?vids=" + vid + "&platform=101001&charge=0&otype=json"
      var baseUrls = baseUrl.replace(/\s+/g, "")

      wx.request({
        url: baseUrls,
        method: 'get',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        success: (res) => {
          var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
          var dataJson1 = dataJson.replace(/;qwe/, '');
          var data = JSON.parse(dataJson1);
          var url = data.vl.vi[0].ul.ui[0].url
          // var url2 = url.replace(/http/, "https"); //把'http'替换为https
          var fu = data.vl.vi[0].fn
          var fvkey = data.vl.vi[0].fvkey
          var a1 = url + fu + '?vkey=' + fvkey
          console.log("播放页解析得到的播放地址:" + a1)
          haha = a1       
        },
      }) 


        //初始化轮播视频数据-------------------------------
      wx.request({
        url: "https://www.otvllat.cn/api/Article?lim=5&sk=0",
        method: "GET",
        success: function (res) {             
          // console.log("打印轮播数据"+res.data[1].videourl) 
          // var myurl = res.data.map(item => {return item.videourl})
          var mytitle = res.data.map(item => item.title)
          // console.log("打印mytitle" + mytitle)
         
         
      //  解析传过来的播放地址1---------------
        
          var vid1 = res.data[0].videourl;
          var baseUrl1 = "https://vv.video.qq.com/getinfo?vids=" + vid1 + "&platform=101001&charge=0&otype=json"
          var baseUrl11 = baseUrl1.replace(/\s+/g, "")

          wx.request({
            url: baseUrl11,
            method: 'get',
            header: {'Content-Type': 'application/x-www-form-urlencoded'},
            success: (res) => {
              var dataJson =res.data.replace(/QZOutputJson=/, '') + "qwe";
              var dataJson1 =dataJson.replace(/;qwe/, '');
              var data = JSON.parse(dataJson1);
              var url = data.vl.vi[0].ul.ui[0].url
              // var url2 = url.replace(/http/, "https"); //把'http'替换为https
              var fu = data.vl.vi[0].fn
              var fvkey = data.vl.vi[0].fvkey
              var a1 = url + fu + '?vkey=' + fvkey
              console.log("播放地址1哈哈:" + a1)

              a.splice(0, 0, a1);
              // aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
              // console.log("打印aaaa0" + aaaa[0].url)
            },
          }) 
          

          
      //  解析传过来的播放地址2------
       
        var vid2 = res.data[1].videourl;
        var baseUrl2 = "https://vv.video.qq.com/getinfo?vids=" + vid2 + "&platform=101001&charge=0&otype=json"
        var baseUrl22 = baseUrl2.replace(/\s+/g, "")

        // console.log("去空格之前"+baseUrl2)
        // console.log("去空格之后"+baseUrl22)

        wx.request({
          url: baseUrl22,
          method: 'get',
          header: {'Content-Type': 'application/x-www-form-urlencoded'},
          success: (res) => {
            var dataJson =res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 =dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址2哈哈:" + a1)

            a.splice(1, 0, a1);   
          
          },
        }) 
        

      //  解析传过来的播放地址3-----------------          
            var vid3 = res.data[2].videourl;

            var baseUrl3 = "https://vv.video.qq.com/getinfo?vids=" + vid3 + "&platform=101001&charge=0&otype=json"
            var baseUrl33 = baseUrl3.replace(/\s+/g, "")

            // console.log("去空格之前" + baseUrl3)
            // console.log("去空格之后" + baseUrl33)

            wx.request({
              url: baseUrl33,
              method: 'get',
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              success: (res) => {
                var dataJson =res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 =dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                var url = data.vl.vi[0].ul.ui[0].url
                // var url2 = url.replace(/http/, "https"); //把'http'替换为https
                var fu = data.vl.vi[0].fn
                var fvkey = data.vl.vi[0].fvkey
                var a1 = url + fu + '?vkey=' + fvkey
                console.log("播放地址3哈哈:" + a1)

                a.splice(2, 0, a1);     
           
              },
            }) 


      //  解析传过来的播放地址4-----------------
      
            var vid4 = res.data[3].videourl;

            var baseUrl4 = "https://vv.video.qq.com/getinfo?vids=" + vid4 + "&platform=101001&charge=0&otype=json"
            var baseUrl44 = baseUrl4.replace(/\s+/g, "")

            // console.log("去空格之前" + baseUrl3)
            // console.log("去空格之后" + baseUrl33)
      
            wx.request({
              url: baseUrl44,
              method: 'get',
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              success: (res) => {
                var dataJson =res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 =dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                var url = data.vl.vi[0].ul.ui[0].url
                // var url2 = url.replace(/http/, "https"); //把'http'替换为https
                var fu = data.vl.vi[0].fn
                var fvkey = data.vl.vi[0].fvkey
                var a1 = url + fu + '?vkey=' + fvkey
                console.log("播放地址4哈哈:" + a1)

                a.splice(3, 0, a1);
                             
              },
            }) 



      //  解析传过来的播放地址5-----------------
           
            var vid5 = res.data[4].videourl;
            var baseUrl5 = "https://vv.video.qq.com/getinfo?vids=" + vid5 + "&platform=101001&charge=0&otype=json"
            var baseUrl55 = baseUrl5.replace(/\s+/g, "")
            // console.log("去空格之前" + baseUrl5)
            // console.log("去空格之后" + baseUrl55)
           
            wx.request({
              url: baseUrl55,
              method: 'get',
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              success: (res) => {
                var dataJson =res.data.replace(/QZOutputJson=/, '') + "qwe";
                var dataJson1 =dataJson.replace(/;qwe/, '');
                var data = JSON.parse(dataJson1);
                var url = data.vl.vi[0].ul.ui[0].url
                // var url2 = url.replace(/http/, "https"); //把'http'替换为https
                var fu = data.vl.vi[0].fn
                var fvkey = data.vl.vi[0].fvkey
                var a1 = url + fu + '?vkey=' + fvkey
                console.log("播放地址5哈哈:" + a1)

                a.splice(4, 0, a1);

                // a.splice(1,0,haha)
                // mytitle.splice(1,0,title)
                if(e.videourl){
                  a.splice(1,0,haha)
                }
                if(e.videotitle){
                  mytitle.splice(1,0,title)
                }
            
                // aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
                aaaa = a.map((videourl, i) => ({ videourl, title: mytitle[i] }));
                // console.log("打印aaaa0" + aaaa[0].url)

                _this.setData({
                  videoList: aaaa
                })
                if (_this.data.videoList) {
                  console.log("打印data里dataA1---" + _this.data.videoList[0].videourl + _this.data.videoList[0].title)
                  console.log("打印data里dataA2---" + _this.data.videoList[1].videourl + _this.data.videoList[1].title)
                  console.log("打印data里dataA3----" + _this.data.videoList[2].videourl + _this.data.videoList[2].title)
                  console.log("打印data里dataA4----" + _this.data.videoList[3].videourl + _this.data.videoList[3].title)
                  console.log("打印data里dataA5----" + _this.data.videoList[4].videourl + _this.data.videoList[4].title)
                  console.log("打印data里dataA6----" + _this.data.videoList[5].videourl + _this.data.videoList[5].title)
                  console.log("打印data里dataA7----" + _this.data.videoList[6].videourl + _this.data.videoList[6].title)
                }
              },
            }) 

             //请求方法里的括号
            }
          })
                  
        


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


      // 5、初始化激励广告，在有需要的地方调用-------------------
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


      // 6、定时控制激励视频广告显示  -------
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
          
          
            // console.log("接收的视频地址："+e.videourl) 
            // console.log("接收经过转码的的视频地址：" + decodeURIComponent(e.videourl)) 
            // console.log("接收的视频标题："+e.videotitle) 
            // console.log("接收经过转码的的视频标题：" + decodeURIComponent(e.videotitle)) 
            
          //7、如果初始化时有传视频播放地址和视频标题进来，就插入播放列表，如果没有就播放默认的播放列表
          // if (e.videourl && e.videotitle){
          //   var videourl = decodeURIComponent(e.videourl);
          //   var videotitle =  decodeURIComponent(e.videotitle)
          //    var addvideo={
          //      videourl: videourl,
          //      title: videotitle
          //    }
          //  }                         
          //   _this.setData({
          //         videotitle:videotitle
          //   })
            // 张文宏，囤货，狗，新闻，查车,小孩
            // var urls = ['z0033z0vdsg', 'p093535nyoz', 'f0939id6ue1','q0931otfmza', 'g3005w296cu','m30483qfjrw']


          //8、初始化轮播视频数据
          // wx.request({
          //   url: "https://www.otvllat.cn/api/Article",
          //   method: "GET",
          //   success: function (res) {             
          //     // var vid = res.data.map(item=>item.videourl)
          //     // urls= vid
          //     console.log(res.data)
          //     urls = res.data

          //     console.log("追加一个对象"+addvideo)

          //     // console.log(urls)      
          //     if (urls.length > 3 && addvideo ){                   
          //             console.log("追加一条数据")
          //              urls.splice(1, 0, addvideo);                  
          //             // var list = urls.map((url, index) => ({ id: index + 1, url }))                                    
          //             _this.setData({
          //               videoList: urls
          //             })
          //           }else{
          //              console.log("追加一条数据失败")
          //             // var list = urls.map((url, index) => ({ id: index + 1, url }))                             
          //             _this.setData({
          //               videoList: urls
          //             })
          //           }            
          //   }
          // })

            // var list = urls.map((url, index) => ({ id: index + 1, url }))
            // _this.setData({
            //   videoList: list
            // })



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
    // console.log("data"+_this.data.videoAdshow)
    
    // 在适合的场景显示激励广告（备注：已经在子组件里调用了，这里不用了）    
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
onReady:function(){console.log("onReady")},

onPlay(e) { },
onPause(e) {// console.log('pause', e.detail.activeId)
},
onEnded(e) { },
onError(e) {console.log(e,"播放出错")},
onWaiting(e) {},
onTimeUpdate(e) {//  console.log(e, "播放进度变化")
},
onProgress(e) { },
//视频元数据加载完成时触发
onLoadedMetaData(e) {// console.log('LoadedMetaData', e)
},
//监听上下滑动
change(e){
    console.log(e,"监听")
    // let a = e.detail.activeId
    let _this = this
    var addbf = _this.add()
    // console.log(addbf)

    // 计数下滑次数：第三部分
    var zj = _this.addzj()
    console.log("打印下滑次数" + zj )
    
    
    //  if(zj>=20){
    //    zj = null
    //    console.log("回收后" + zj)
    //  }
     
 

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


    //滑动视频追加轮播视频数据------------------

    var mytitle = ["标题4", "标题5", "标题6"]
    var aaaa = []
    var a = []
    var sk = zj * 5
    var lim = 5
    // var sk 
    // var lim 
    var videoLength
    // if(zj==1){
    //   sk = zj * 6
    //   lim = zj * 1
    // }else{     
    //   sk = 5 + zj
    //   lim = 1
    // }
    console.log(sk, lim)


    wx.request({
      url: "https://www.otvllat.cn/api/Article",
      data: { lim: lim, sk: sk },
      method: "GET",
      success: function (res) {
        console.log("打印轮播数据" + res.data[0].videourl)
        // var myurl = res.data.map(item => {return item.videourl})
        var mytitle = res.data.map(item => item.title)
        console.log("打印mytitle" + mytitle)
        videoLength = res.data.length
        console.log("数据长度" + videoLength)

        //  解析传过来的播放地址1-------------

        var vid1 = res.data[0].videourl;
        var baseUrl1 = "https://vv.video.qq.com/getinfo?vids=" + vid1 + "&platform=101001&charge=0&otype=json"
        var baseUrl11 = baseUrl1.replace(/\s+/g, "")

        wx.request({
          url: baseUrl11,
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址1哈哈:" + a1)
            a.splice(0, 0, a1);           
          },
        })

        //  解析传过来的播放地址2-----------

        var vid2 = res.data[1].videourl;
        var baseUrl2 = "https://vv.video.qq.com/getinfo?vids=" + vid2 + "&platform=101001&charge=0&otype=json"
        var baseUrl22 = baseUrl2.replace(/\s+/g, "")

        wx.request({
          url: baseUrl22,
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址2哈哈:" + a1)

            a.splice(1, 0, a1);
          },
        })


        //  解析传过来的播放地址3-----------------

        var vid3 = res.data[2].videourl;
        var baseUrl3 = "https://vv.video.qq.com/getinfo?vids=" + vid3+ "&platform=101001&charge=0&otype=json"
        var baseUrl33 = baseUrl3.replace(/\s+/g, "")

        wx.request({
          url: baseUrl33,
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址3哈哈:" + a1)
            a.splice(2, 0, a1);
          },
        })


        //  解析传过来的播放地址4-----------------

        var vid4 = res.data[3].videourl;
        var baseUrl4 = "https://vv.video.qq.com/getinfo?vids=" + vid4 + "&platform=101001&charge=0&otype=json"
        var baseUrl44 = baseUrl4.replace(/\s+/g, "")

        wx.request({
          url: baseUrl44,
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址4哈哈:" + a1)
            a.splice(3, 0, a1);
          },
        })


        //  解析传过来的播放地址6-----------------
        var vid6 = res.data[4].videourl;
        var baseUrl6= "https://vv.video.qq.com/getinfo?vids=" + vid6 + "&platform=101001&charge=0&otype=json"
        var baseUrl66 = baseUrl6.replace(/\s+/g, "")

        wx.request({
          url: baseUrl66,
          method: 'get',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success: (res) => {
            var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
            var dataJson1 = dataJson.replace(/;qwe/, '');
            var data = JSON.parse(dataJson1);
            var url = data.vl.vi[0].ul.ui[0].url
            // var url2 = url.replace(/http/, "https"); //把'http'替换为https
            var fu = data.vl.vi[0].fn
            var fvkey = data.vl.vi[0].fvkey
            var a1 = url + fu + '?vkey=' + fvkey
            console.log("播放地址6哈哈:" + a1)

            a.splice(4, 0, a1);
            // aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
            aaaa = a.map((videourl, i) => ({ videourl, title: mytitle[i] }));
            // console.log("打印aaaa0" + aaaa[0].url)
            let oldlist = _this.data.videoList
            // console.log(_this.data.videoList[0])
            // console.log(oldlist)
            // console.log(aaaa[0])

            let newlist = aaaa.concat(oldlist)
            // console.log(newlist)
            _this.setData({
              videoList: aaaa
            })
            // if (_this.data.videoList) {
            //   console.log("打印data里dataA1---" + _this.data.videoList[0].videourl + _this.data.videoList[0].title)
            //   console.log("打印data里dataA2---" + _this.data.videoList[1].videourl + _this.data.videoList[1].title)
            //   console.log("打印data里dataA3----" + _this.data.videoList[2].videourl + _this.data.videoList[2].title)
            //   console.log("打印data里dataA4----" + _this.data.videoList[3].videourl + _this.data.videoList[3].title)
            //   console.log("打印data里dataA5----" + _this.data.videoList[4].videourl + _this.data.videoList[4].title)
            //   console.log("打印data里dataA6----" + _this.data.videoList[5].videourl + _this.data.videoList[5].title)
            // }
          },
        }) 


          }
        })

        // 调用插屏广告，addbf为3、5、7的时候调用----------------------------------------
        if (interstitialAd) {
          console.log('判断是否有插屏广告' + addbf)
          if (addbf%2 == 1) {
          console.log("调用插屏广告")
          interstitialAd.show().catch((err) => {
            console.error("调用插屏广告错误" + err)
          })
          }
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
            if (res.data[0].share){
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



