// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnText: '微信登录'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onGotUserInfo (e) {
    console.log(e)
    if(e.detail.userInfo){
      wx.setStorageSync('userInfo', JSON.stringify(e.detail.userInfo))
      // login(res.detail.userInfo)
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '简单的信任，是你我俩故事的开始',
        showCancel: false
      })
        .then(ModalRes => {
          if(ModalRes.confirm){
            this.setData({
              btnText: '重新授权登录'
            })
          }
        })
    }
  },
  goToIndex () {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  }
})