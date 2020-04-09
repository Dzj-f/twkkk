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

  //计数下滑次数：第二部分
 addzj() { return counterzj += 1; },
 onLoad: function (e) {
  let _this = this   
   var a =[]
   var mytitle = ["标题1", "标题2", "标题3", "标题4"]
   var aaaa =[]
   console.log("haha-----"+e.haha)
   console.log("haha--经过转码的---" + decodeURIComponent(e.haha))
   var haha = decodeURIComponent(e.haha)
   var title = decodeURIComponent(e.videotitle)


            //初始化轮播视频数据
          wx.request({
            url: "https://www.otvllat.cn/api/Article?lim=6&sk=0",
            method: "GET",
            success: function (res) {             
              console.log("打印轮播数据"+res.data[1].videourl) 
              // var myurl = res.data.map(item => {return item.videourl})
              var mytitle = res.data.map(item => item.title)
              console.log("打印mytitle" + mytitle)
         
         

      //  解析传过来的播放地址1------
        var vid1
        var matchReg1
        var str1
        // 外交新闻
        // var strMatch1 = "https://v.qq.com/x/page/n306757nfox.html";
        //  var strMatch1 = "https://v.qq.com/txp/iframe/player.html?vid=n306757nfox"
        var strMatch1 = res.data[0].videourl;

              if (strMatch1.includes("vid=")) {
                vid1 = takeParam1(strMatch1, "vid");

              }
              //此函数为获取url中指定参数的函数
              function takeParam1(url, key) {

                var a = url;
                var b = key;
                try {
                  var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
                  return reg.exec(a).toString().split("=")[1];
                } catch (e) {
                  console.log(e);
                  console.log("正则表达式取参数值错误" + key);
                }
                return "";
              }

        wx.request({
          url: "https://vv.video.qq.com/getinfo?vids=" + vid1 + "&platform=101001&charge=0&otype=json",
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
            aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
            // console.log("打印aaaa0" + aaaa[0].url)
          },
        }) 
        

        
      //  解析传过来的播放地址2------
        var vid2
        var matchReg2
        var str2
        //航拍
        // var strMatch2 = "https://v.qq.com/x/page/r30681zyp3m.html";
        //var strMatch2 = "https://v.qq.com/txp/iframe/player.html?vid=r30681zyp3m"
        var strMatch2 = res.data[1].videourl;

       
              if (strMatch2.includes("vid=")) {
                vid2 = takeParam2(strMatch2, "vid");

              }
              //此函数为获取url中指定参数的函数
              function takeParam2(url, key) {

                var a = url;
                var b = key;
                try {
                  var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
                  return reg.exec(a).toString().split("=")[1];
                } catch (e) {
                  console.log(e);
                  console.log("正则表达式取参数值错误" + key);
                }
                return "";
              }

        wx.request({
          url: "https://vv.video.qq.com/getinfo?vids=" + vid2 + "&platform=101001&charge=0&otype=json",
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
            aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
        
           
          },
        }) 
        

            //  解析传过来的播放地址3-----------------
            var vid3
            var matchReg3
            var str3
            // 小汤山
            // var strMatch3 = "https://v.qq.com/x/page/u3057ohj7g3.html";
            //var strMatch3 = "https://v.qq.com/txp/iframe/player.html?vid=u3057ohj7g3"
            var strMatch3 = res.data[2].videourl;

              if (strMatch3.includes("vid=")) {
                vid3 = takeParam3(strMatch3, "vid");

              }
              //此函数为获取url中指定参数的函数
              function takeParam3(url, key) {

                var a = url;
                var b = key;
                try {
                  var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
                  return reg.exec(a).toString().split("=")[1];
                } catch (e) {
                  console.log(e);
                  console.log("正则表达式取参数值错误" + key);
                }
                return "";
              }

            wx.request({
              url: "https://vv.video.qq.com/getinfo?vids=" + vid3 + "&platform=101001&charge=0&otype=json",
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
            var vid4
            var matchReg4
            var str4
            //逃犯
            // var strMatch4 = "https://v.qq.com/x/page/a0942viov1b.htm";
            //var strMatch4 = "https://v.qq.com/txp/iframe/player.html?vid=a0942viov1b"
            var strMatch4 = res.data[3].videourl;

              if (strMatch4.includes("vid=")) {
                var vid4 = takeParam4(strMatch4, "vid");

              }
              //此函数为获取url中指定参数的函数
              function takeParam4(url, key) {

                var a = url;
                var b = key;
                try {
                  var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
                  return reg.exec(a).toString().split("=")[1];
                } catch (e) {
                  console.log(e);
                  console.log("正则表达式取参数值错误" + key);
                }
                return "";
              }

            wx.request({
              url: "https://vv.video.qq.com/getinfo?vids=" + vid4 + "&platform=101001&charge=0&otype=json",
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
            var vid5
            var matchReg5
            var str5
            //逃犯
            // var strMatch5 = "https://v.qq.com/x/page/a0942viov1b.htm";
            //var strMatch5 = "https://v.qq.com/txp/iframe/player.html?vid=a0942viov1b"
            var strMatch5 = res.data[4].videourl;

              if (strMatch5.includes("vid=")) {
                var vid5 = takeParam5(strMatch5, "vid");

              }
              //此函数为获取url中指定参数的函数
              function takeParam5(url, key) {

                var a = url;
                var b = key;
                try {
                  var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
                  return reg.exec(a).toString().split("=")[1];
                } catch (e) {
                  console.log(e);
                  console.log("正则表达式取参数值错误" + key);
                }
                return "";
              }

            wx.request({
              url: "https://vv.video.qq.com/getinfo?vids=" + vid5 + "&platform=101001&charge=0&otype=json",
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

                a.splice(5, 0, a1);
                a.splice(1,0,haha)
                mytitle.splice(1,0,title)
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
            console.log("接收经过转码的的视频地址：" + decodeURIComponent(e.videourl)) 
            // console.log("接收的视频标题："+e.videotitle) 
            console.log("接收经过转码的的视频标题：" + decodeURIComponent(e.videotitle)) 
            
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
   var urls = ['z0033z0vdsg', 'p093535nyoz', 'f0939id6ue1','q0931otfmza', 'g3005w296cu','m30483qfjrw']
            // var list = [
            //   {
            //     url: 'z0033z0vdsg',
            //     id:1,
            //   },
            //   {
            //     url: 'p093535nyoz',
            //     id:2,
            //   },
            //   {
            //     url: 'f0939id6ue1',
            //     id:3,
            //   },
            //   {
            //     url: 'q0931otfmza',
            //     id:4,
            //   },
            //  ]

            // var urls = [
            //   {
            //     videourl:'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/2dbe7eca5285890794073052281/447nYOh5H2IA.mp4',
            //     title:'标题一',
            //   },
            //   {
            //     videourl: 'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/30287db75285890794073167278/WVQpwkgnb9EA.mp4', 
            //     title: '标题二',
            //   },
            //   {
            //     videourl: 'http://1252076676.vod2.myqcloud.com/d7eee309vodgzp1252076676/302875785285890794073167099/HhGL7OJObiYA.mp4',
            //     title: '标题三',
            //   }
            // ]

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


        //  9、从后台读取自定义分享封面-----
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
        // 10、控制分享按钮是否显示----------
        _this.openShare()

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

    // 计数下滑次数：第三部分
    var zj =  _this.addzj()
    console.log("打印下滑次数"+zj)

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
    var a =[]
    // var sk = zj * 6
    // var lim =  6
    var sk 
    var lim 
    var videoLength 
    if(zj==1){
      sk = zj * 6
      lim = zj * 1
    }else{     
      sk = 5 + zj
      lim = 1
    }
    console.log(sk,lim)


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
        console.log("数据长度"+videoLength)

        // //  解析传过来的播放地址1------
        // var vid1
        // var matchReg1
        // var str1
        // // 外交新闻
        // // var strMatch1 = "https://v.qq.com/x/page/n306757nfox.html";
        // //  var strMatch1 = "https://v.qq.com/txp/iframe/player.html?vid=n306757nfox"
        // var strMatch1 = res.data[0].videourl;

        // if (strMatch1.includes("vid=")) {
        //   vid1 = takeParam1(strMatch1, "vid");

        // }
        // //此函数为获取url中指定参数的函数
        // function takeParam1(url, key) {

        //   var a = url;
        //   var b = key;
        //   try {
        //     var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        //     return reg.exec(a).toString().split("=")[1];
        //   } catch (e) {
        //     console.log(e);
        //     console.log("正则表达式取参数值错误" + key);
        //   }
        //   return "";
        // }

        // wx.request({
        //   url: "https://vv.video.qq.com/getinfo?vids=" + vid1 + "&platform=101001&charge=0&otype=json",
        //   method: 'get',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   success: (res) => {
        //     var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        //     var dataJson1 = dataJson.replace(/;qwe/, '');
        //     var data = JSON.parse(dataJson1);
        //     var url = data.vl.vi[0].ul.ui[0].url
        //     // var url2 = url.replace(/http/, "https"); //把'http'替换为https
        //     var fu = data.vl.vi[0].fn
        //     var fvkey = data.vl.vi[0].fvkey
        //     var a1 = url + fu + '?vkey=' + fvkey
        //     console.log("播放地址1哈哈:" + a1)

        //     a.splice(0, 0, a1);
        //     aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
        //     // console.log("打印aaaa0" + aaaa[0].url)
        //   },
        // })



        // //  解析传过来的播放地址2------
        // var vid2
        // var matchReg2
        // var str2
        // //航拍
        // // var strMatch2 = "https://v.qq.com/x/page/r30681zyp3m.html";
        // //var strMatch2 = "https://v.qq.com/txp/iframe/player.html?vid=r30681zyp3m"
        // var strMatch2 = res.data[1].videourl;


        // if (strMatch2.includes("vid=")) {
        //   vid2 = takeParam2(strMatch2, "vid");

        // }
        // //此函数为获取url中指定参数的函数
        // function takeParam2(url, key) {

        //   var a = url;
        //   var b = key;
        //   try {
        //     var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        //     return reg.exec(a).toString().split("=")[1];
        //   } catch (e) {
        //     console.log(e);
        //     console.log("正则表达式取参数值错误" + key);
        //   }
        //   return "";
        // }

        // wx.request({
        //   url: "https://vv.video.qq.com/getinfo?vids=" + vid2 + "&platform=101001&charge=0&otype=json",
        //   method: 'get',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   success: (res) => {
        //     var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        //     var dataJson1 = dataJson.replace(/;qwe/, '');
        //     var data = JSON.parse(dataJson1);
        //     var url = data.vl.vi[0].ul.ui[0].url
        //     // var url2 = url.replace(/http/, "https"); //把'http'替换为https
        //     var fu = data.vl.vi[0].fn
        //     var fvkey = data.vl.vi[0].fvkey
        //     var a1 = url + fu + '?vkey=' + fvkey
        //     console.log("播放地址2哈哈:" + a1)

        //     a.splice(1, 0, a1);
        //     aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))


        //   },
        // })


        // //  解析传过来的播放地址3-----------------
        // var vid3
        // var matchReg3
        // var str3
        // // 小汤山
        // // var strMatch3 = "https://v.qq.com/x/page/u3057ohj7g3.html";
        // //var strMatch3 = "https://v.qq.com/txp/iframe/player.html?vid=u3057ohj7g3"
        // var strMatch3 = res.data[2].videourl;

        // if (strMatch3.includes("vid=")) {
        //   vid3 = takeParam3(strMatch3, "vid");

        // }
        // //此函数为获取url中指定参数的函数
        // function takeParam3(url, key) {

        //   var a = url;
        //   var b = key;
        //   try {
        //     var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        //     return reg.exec(a).toString().split("=")[1];
        //   } catch (e) {
        //     console.log(e);
        //     console.log("正则表达式取参数值错误" + key);
        //   }
        //   return "";
        // }

        // wx.request({
        //   url: "https://vv.video.qq.com/getinfo?vids=" + vid3 + "&platform=101001&charge=0&otype=json",
        //   method: 'get',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   success: (res) => {
        //     var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        //     var dataJson1 = dataJson.replace(/;qwe/, '');
        //     var data = JSON.parse(dataJson1);
        //     var url = data.vl.vi[0].ul.ui[0].url
        //     // var url2 = url.replace(/http/, "https"); //把'http'替换为https
        //     var fu = data.vl.vi[0].fn
        //     var fvkey = data.vl.vi[0].fvkey
        //     var a1 = url + fu + '?vkey=' + fvkey
        //     console.log("播放地址3哈哈:" + a1)

        //     a.splice(2, 0, a1);



        //   },
        // })


        // //  解析传过来的播放地址4-----------------
        // var vid4
        // var matchReg4
        // var str4
        // //逃犯
        // // var strMatch4 = "https://v.qq.com/x/page/a0942viov1b.htm";
        // //var strMatch4 = "https://v.qq.com/txp/iframe/player.html?vid=a0942viov1b"
        // var strMatch4 = res.data[3].videourl;

        // if (strMatch4.includes("vid=")) {
        //   var vid4 = takeParam4(strMatch4, "vid");

        // }
        // //此函数为获取url中指定参数的函数
        // function takeParam4(url, key) {

        //   var a = url;
        //   var b = key;
        //   try {
        //     var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        //     return reg.exec(a).toString().split("=")[1];
        //   } catch (e) {
        //     console.log(e);
        //     console.log("正则表达式取参数值错误" + key);
        //   }
        //   return "";
        // }

        // wx.request({
        //   url: "https://vv.video.qq.com/getinfo?vids=" + vid4 + "&platform=101001&charge=0&otype=json",
        //   method: 'get',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   success: (res) => {
        //     var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        //     var dataJson1 = dataJson.replace(/;qwe/, '');
        //     var data = JSON.parse(dataJson1);
        //     var url = data.vl.vi[0].ul.ui[0].url
        //     // var url2 = url.replace(/http/, "https"); //把'http'替换为https
        //     var fu = data.vl.vi[0].fn
        //     var fvkey = data.vl.vi[0].fvkey
        //     var a1 = url + fu + '?vkey=' + fvkey
        //     console.log("播放地址4哈哈:" + a1)

        //     a.splice(3, 0, a1);

        //   },
        // })



        // //  解析传过来的播放地址5-----------------
        // var vid5
        // var matchReg5
        // var str5
        // //逃犯
        // // var strMatch5 = "https://v.qq.com/x/page/a0942viov1b.htm";
        // //var strMatch5 = "https://v.qq.com/txp/iframe/player.html?vid=a0942viov1b"
        // var strMatch5 = res.data[4].videourl;

        // if (strMatch5.includes("vid=")) {
        //   var vid5 = takeParam5(strMatch5, "vid");

        // }
        // //此函数为获取url中指定参数的函数
        // function takeParam5(url, key) {

        //   var a = url;
        //   var b = key;
        //   try {
        //     var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
        //     return reg.exec(a).toString().split("=")[1];
        //   } catch (e) {
        //     console.log(e);
        //     console.log("正则表达式取参数值错误" + key);
        //   }
        //   return "";
        // }

        // wx.request({
        //   url: "https://vv.video.qq.com/getinfo?vids=" + vid5 + "&platform=101001&charge=0&otype=json",
        //   method: 'get',
        //   header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   success: (res) => {
        //     var dataJson = res.data.replace(/QZOutputJson=/, '') + "qwe";
        //     var dataJson1 = dataJson.replace(/;qwe/, '');
        //     var data = JSON.parse(dataJson1);
        //     var url = data.vl.vi[0].ul.ui[0].url
        //     // var url2 = url.replace(/http/, "https"); //把'http'替换为https
        //     var fu = data.vl.vi[0].fn
        //     var fvkey = data.vl.vi[0].fvkey
        //     var a1 = url + fu + '?vkey=' + fvkey
        //     console.log("播放地址5哈哈:" + a1)

        //     a.splice(4, 0, a1);
        //     // aaaa = a.map((videourl, index) => ({ id: index + 1, videourl }))
        //     // aaaa = a.map((videourl, i) => ({ videourl, title: mytitle[i] }));
         
        //   },
        // }) 


        //  解析传过来的播放地址6-----------------
        var vid6
        var matchReg6
        var str6
        //逃犯
        // var strMatch6 = "https://v.qq.com/x/page/a0942viov1b.htm";
        //var strMatch6 = "https://v.qq.com/txp/iframe/player.html?vid=a0942viov1b"
        var strMatch6 = res.data[0].videourl;

        if (strMatch6.includes("vid=")) {
          var vid6 = takeParam6(strMatch6, "vid");

        }
        //此函数为获取url中指定参数的函数
        function takeParam6(url, key) {

          var a = url;
          var b = key;
          try {
            var reg = new RegExp(b + "=[0-9a-zA-z-_]{0,}");
            return reg.exec(a).toString().split("=")[1];
          } catch (e) {
            console.log(e);
            console.log("正则表达式取参数值错误" + key);
          }
          return "";
        }

        wx.request({
          url: "https://vv.video.qq.com/getinfo?vids=" + vid6 + "&platform=101001&charge=0&otype=json",
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

            a.splice(0, 0, a1);
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
              videoList: newlist
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


          }
        })



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



