// pages/itsm/itsm_new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,

    formData: {
      text: "",
      date: "2020-01-01"
    },
    rules: [{
      name: 'topic',
      rules: { required: true, message: '标题必填' },
    }, {
      name: 'text',
      rules: { required: true, message: '内容必填' },
    }]
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

  submitForm() {
    this.selectComponent('#form').validate((valid, errors) => {
      console.log('valid', valid, errors)
      if (!valid) {
        const firstError = Object.keys(errors)
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          })
        }
      } else {
        wx.showToast({
          title: '提交成功'
        })
        console.log(this.data.formData)
      }
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      [`formData.date`]: e.detail.value
    })
    console.log(this.data.formData)
  },
  bindTextAreaBlur(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.text`]: e.detail.value
    })
    console.log(this.data.formData)
  },
  formInputChange(e) {
    const { field } = e.currentTarget.dataset
    this.setData({
      [`formData.${field}`]: e.detail.value
    })
    console.log(this.data.formData)
  }
})