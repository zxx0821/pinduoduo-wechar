var goodslist = require('../../function/goodslist.js')
Page({
  data: {
    goodsli: {
    },
    showView:true,
    animation:'',
    num:0,
    collected:true,
    home:{
      icon:"../../images/startgray.png",
      text:"首页"
    },
    collect: [{
      icon: "../../images/lovegray.png",
      text: "收藏"
    }, {
      icon: "../../images/lovered.png",
      text: "已收藏"
    }
    ],
    service: {
      icon: "../../images/cp.png",
      text: "客服"
    },
    lonebuy: {
      icon: "￥35",
      text: "单独购买"
    },
    cheapbuy: {
      icon: "￥12.1",
      text: "一键拼单"
    },
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
    this.animation = wx.createAnimation({
       duration:500,
       timingFunction: 'linear',
       delay:100,
       transformOrigin: 'height 0',
       success:function(res){
         console.log(res)
       }
    })
    this.collected=true
  },
  onLoad:function(option){
    var goodsId = option.id;
    this.data.currentPostId  = goodsId;
    console.log(goodsId);
    var postsData = goodslist.listItems[goodsId];
    this.setData({
      goodsli: postsData
    })
    console.log(postsData)
    // 收藏
    var postsCollected = wx.getStorageSync('posts_Collected');
    if (postsCollected){
      var postCollected = postsCollected[goodsId]
      this.setData({
        collected: postCollected
      })
    }else{
      var postsCollected = {};
      postsCollected[goodsId] = false;
      wx.setStorageSync('posts_Collected', postsCollected)
    }
  },
  onShareAppMessage:function(){
  },
  onChangeShowState: function (val){
    var that = this
    that.setData({
      showView:(!that.data.showView),
      num:val
    })
    console.log(that.data.num)
  },
  tohome:function(){
    wx.navigateTo({
      url: '../../pages/index/index',
    })
  },
  onCollectedTap:function(event){
    
    var postsCollected = wx.getStorageSync('posts_Collected');
    console.log(postsCollected)
    var postCollected = postsCollected[this.data.currentPostId];
    console.log(postCollected)
    //收藏变成未收藏，未收藏变成收藏
    postCollected = !postCollected;
    console.log(postCollected)
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected);
  },
  showToast: function (postsCollected, postCollected) {
    //  更新文章是否的缓存值
    wx.setStorageSync('posts_Collected', postsCollected);
    // 更新数据绑定变量，从而实现切换图片
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功' : '取消成功',
      duration: 1000
    })
  },
})