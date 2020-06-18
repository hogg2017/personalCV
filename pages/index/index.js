//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentPage:'cv'
  },
  //事件处理函数
  NavChange: function(e) {
    let currentPage = e.currentTarget.dataset.cur
    this.setData({
      currentPage
    })
    console.log('currentpage',currentPage)

  },
  onLoad: function () {

  },
})
