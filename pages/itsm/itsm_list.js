// pages/itsm/itsm_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itsmlist: [
      {
        topic: "应用开发中心-闫涛-中间业务-处理二手房对账文件",
        text: "处理二手房对账文件，需要取日志查看对账信息",
        id: "itsm1"
      },
      {
        topic: "应用开发中心-冯姗-中间业务-查看社保日志",
        text: "查看社保日志",
        id: "itsm2"
      },
      {
        topic: "应用开发中心-景昱-中间业务-清理空间",
        text: "服务器空间98%，需要进行清理",
        id: "itsm3"
      }
    ]
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
    var self = this;
    wx.request({
      url: 'http://39.107.236.31:8080/itsm/select',
      header: {
        'content-type': 'application/json', // 默认值
        'charset': 'utf-8'
      },
      success(res) {
        console.log("success")
        console.log(res.data)
        self.setData({
          itsmlist: res.data.data
        })
      },
      fail(res) {
        console.log("fail")
        console.log(res.data)
        wx.showToast({
          icon: 'none',
          title: '列表加载失败!!'
        })
      }
    })

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