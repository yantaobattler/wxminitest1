// pages/news/news_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    imageUrl1: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583324815211&di=9d6028e95db8a9631da1c7b8872673d0&imgtype=0&src=http%3A%2F%2Fblog.img.cnfol.com%2Fimages%2F3d%2Fd7%2F5790306%2F201701111013223637.gif",
    imageUrl2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583325120663&di=0c0a4dba59efb27676f0009d028fc92e&imgtype=0&src=http%3A%2F%2Fimg49.nipic.com%2F20131031%2F2708164_190243540151_1.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,

    })

    wx.request({
      url: '', 
      data: {
        id: this.data.id,
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(res.data)
      }
    })


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

  }
})