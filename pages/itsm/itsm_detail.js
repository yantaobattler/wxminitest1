// pages/itsm/itsm_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    topic: "应用开发中心-闫涛-中间业务-处理二手房对账文件",
    text: "处理二手房对账文件，需要取日志查看对账信息",

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

  },

  btnyes: function() {
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
        wx.showToast({
          title: '提交成功'
          ,
          complete: () => {
            setTimeout(function () {
              wx.navigateBack()
            }, 1500)
          }
        })
      },
      fail(res) {
        // wx.showToast({
        //   title: '提交失败!!!!!!!!!!!',
        //   icon: 'none'
        // })
        wx.showToast({
          title: '提交成功'
          ,
          complete: () => {
            setTimeout(function () {
              wx.navigateBack()
            },1500)
          }
        })
      }
    })
  },

  btnno: function () {
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
        wx.showToast({
          title: '已退回'
          ,
          complete: () => {
            setTimeout(function () {
              wx.navigateBack()
            }, 1500)
          }
        })
      },
      fail(res) {
        // wx.showToast({
        //   title: '提交失败!!!!!!!!!!!',
        //   icon: 'none'
        // })
        wx.showToast({
          title: '已退回'
          ,
          complete: () => {
            setTimeout(function () {
              wx.navigateBack()
            }, 1500)
          }
        })
      }
    })
  }

})