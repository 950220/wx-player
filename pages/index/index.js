//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerOffset: '',
    height: ''
  },
 
  onLoad: function () {
    const data = wx.getMenuButtonBoundingClientRect()
    if (data) {
      this.setData({
        headerOffset: data.top + 'px',
        height: data.bottom - data.top + 'px'
      })
    }
  },

  goBack: function (e) {
    wx.navigateBack()
  }
})
