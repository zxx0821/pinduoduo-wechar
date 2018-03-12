var goodslist = require('../../function/goodslist.js')
Page({
  data: {
    goods: [
      {
        goodsId: "0",
        platformId: "1",
        title: "6人团-纯棉加绒加厚保暖背心吊带",
        imgUrl: [
          "http://img.alicdn.com/imgextra/i3/1649624448/TB2c5BIuXXXXXXfXpXXXXXXXXXX_!!1649624448.jpg",
          'http://img.alicdn.com/imgextra/i3/1649624448/TB296NJuXXXXXXLXpXXXXXXXXXX_!!1649624448.jpg',
          'http://img.alicdn.com/imgextra/i4/1649624448/TB20WjIaGe5V1BjSszeXXc3zXXa_!!1649624448.jpg'
        ],
        detailText: "人的肩膀处于肺尖部位，对外界环境比较敏感，容易受凉。加上生活中，睡觉时肩膀盖不严，易受冻，尤其是老人和坐月子的女性。给肩膀一个温暖的保护，远离生病！默认发圆通、中通、EMS快递",
        endTime: "13",
        groupPrice: "10.20",
        oddPrice: "68.00",
        discount: "5.9",
        groupSize: "6人团",
        goodsFrom: "淘宝",
        fromPrice: "36.00"
      }
    ]
  },
  onLoad: function () {
    this.setData({
      goods: goodslist.listItems
    })
    console.log(goodslist.listItems)
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})