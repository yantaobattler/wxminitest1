// pages/map/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.119655,
    longitude: 117.220268
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
    this.mapCtx = wx.createMapContext('myMap')
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


  getlocation: function(){
    var that = this;
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                altitude: true,
                success(res) {
                  that.setData({
                    latitude: res.latitude,
                    longitude: res.longitude
                  })
                }
              })
            }
          })
        }else{
          wx.getLocation({
            altitude: true,
            success(res) {
              that.setData({
                latitude: res.latitude,
                longitude: res.longitude
              })
            }
          })
        }
      }
    })
    console.log(that.data)
    this.mapCtx.moveToLocation()
  }
})