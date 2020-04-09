
const order = ['demo1', 'demo2', 'demo3']

Page({
  onShareAppMessage() {
    return {
      
     
    }
  },

  data: {
    toView: 'green',
    width: "100vh",
    height: "100vh",
    vid: "q3058h9sqhz",
    videoList: [   
    ]
  
  },
   
   onLoad:function(e){

     let _this = this
     console.log(e.videourl,"进入详情页 ")


     var urls = [
      //  {
      //    url: 'k3065ftxa2j',
      //    txv1: 'txv14'
      //  },
      //  {
      //    url: 'c3069alff7t',
      //    txv1: 'txv15'
      //  },
      //  {
      //    url: 't3035flep1f',
      //    txv1:'txv11'
      //  },
      //  {
      //    url: 'w09302iz1rh',
      //    txv1: 'txv12'
      //  },
       {
         url: 'q0932m4s4ht',
         txv1: 'txv13'
       },
      
       {
         url: 'n093067xvi2',
         txv1: 'txv16'
       },
       {
         url: 'l3035om3msz',
         txv1: 'txv17'

       },
       {
         url: 's0933y2ay7h',
         txv1: 'txv18'

       },

      //  {
      //    url: 'a0933gruijl',
      //  },
      //  {
      //    url: 'd0933kygbfn',
      //  },
      //  {
      //    url: 'h3030jgkg4h',
      //  },
      //  {
      //    url: 'c30719tg5ew'
      //  },
      //  {
      //    url: 'q3058h9sqhz'
      //  },
     ]

     var dd = { url: e.videourl}


    //  if (e.videourl) {
    //    console.log("追加一条数据")
    //   //  urls.splice(0, 0, dd);
    //    console.log(urls)

    //    _this.setData({
    //      videoList: urls
    //    })
    //  }

     _this.setData({
       videoList: urls
     })

     
     
   },






  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e,'lower')
  },

  scroll(e) {
    console.log(e.detail.scrollTop,"scroll")
    let top = e.detail.scrollTop
    if(top>200){
      console.log("滚动大于200rpx")
    }
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },


  

  // tap() {
  //   for (let i = 0; i < order.length; ++i) {
  //     if (order[i] === this.data.toView) {
  //       this.setData({
  //         toView: order[i + 1],
  //         scrollTop: (i + 1) * 200
  //       })
  //       break
  //     }
  //   }
  // }
})