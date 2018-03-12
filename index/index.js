//index.js
//获取应用实例
var util = require('../../utils/util.js')
var app = getApp()
Page({  
  data: {  
    hidden:false,
    navbar: ['首页', '服装', '水果', '生活'],  
    currentTab: 0,
    slider: [],  
    swiperCurrent: 0,  
    autoplay:'auto',
    interval:3000,
    duration:500,
    arrayone:[{
      src:'../../images/clock_fill.png',
      text:'限时秒杀'
    },{
      src:'../../images/shoppingpink.png',
      text:'品牌清仓'
    }, {
      src:'../../images/shirt.png',
      text:'爱逛街'
    },{
      src:'../../images/service_fill.png',
      text:'9.9特卖'
    }],
     arraytwo:[{
      src:'../../images/tegater.png',
      text:'聚划算'
    },{
      src:'../../images/water.png',
      text:'饮品达人'
    },
    {
      src:'../../images/phone.png',
      text:'手机充值'
    },{
      src:'../../images/transaction_fill.png',
      text:'手机充值'
    }]
  },  
  onLoad: function () {  
    var that = this;  
//网络访问，获取轮播图的图片  
    util.getRecommend(function(data){  
      that.setData({  
        slider: data.data.slider  
      })  
    });   
  }, 
   //轮播图的切换事件  
  swiperChange: function(e){  
//只要把切换后当前的index传给<swiper>组件的current属性即可  
    this.setData({  
      swiperCurrent: e.detail.current  
    })  
  }, 
   //点击指示点切换 
   //点击指示点切换  
  chuangEvent: function(e){  
    this.setData({  
      swiperCurrent: e.currentTarget.id  
    })  
  } ,
  navbarTap: function(e){  
    this.setData({  
      currentTab: e.currentTarget.dataset.idx  
    })  
  },
  tobind:function(){
    wx.navigateTo({
      url: '../goodsdetail/goodsdetail?id=1',
      success: function(res){
        console.log('aaaaaa')
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
    wx.showNavigationBarLoading() //在标题栏中显示加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  } 
  
}) 