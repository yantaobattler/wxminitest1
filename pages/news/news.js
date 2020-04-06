// pages/news/news.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    news: {
      news_top:[
        {
          id: 'news_top1',
          topic: '置顶新闻的标题1',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583391876719&di=7f1cdd8118755c5f456067d1df471aa4&imgtype=0&src=http%3A%2F%2Fhimg2.huanqiu.com%2Fattachment2010%2F2013%2F0723%2F20130723084238314.jpg'
        },
        {
          id: 'news_top2',
          topic: '置顶新闻的标题2',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583390333348&di=11446666be5826871455de772895a219&imgtype=0&src=http%3A%2F%2Falicliimg.clewm.net%2F616%2F430%2F1430616%2F14816268477569dd17f6a2efa964c51fd803fce7dfb2e1481626829.jpg'
        },
        {
          id: 'news_top3',
          topic: '置顶新闻的标题3',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583390352607&di=2e3333f0a6b0b4257abcd905d02d0f09&imgtype=0&src=http%3A%2F%2Fimages.quanjing.com%2Feast003%2Fhigh%2Feast-ep-a51-2809980.jpg'
        }
      ],
      news_list: [
        {
          id: 'news1',
          topic: '新闻1的标题',
          short: '六个字的简介',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583325120663&di=0c0a4dba59efb27676f0009d028fc92e&imgtype=0&src=http%3A%2F%2Fimg49.nipic.com%2F20131031%2F2708164_190243540151_1.jpg',
          order: '1'
        },
        {
          id: 'news2',
          topic: '新闻2的标题',
          short: '这是一个十个字的简介',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583325120663&di=0c0a4dba59efb27676f0009d028fc92e&imgtype=0&src=http%3A%2F%2Fimg49.nipic.com%2F20131031%2F2708164_190243540151_1.jpg',
          order: '2'
        },
        {
          id: 'news3',
          topic: '新闻3的标题',
          short: '这是个四十个字的简介这是个四十个字的简介这是个四十个字的简介这是个四十个字的简介',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583325120663&di=0c0a4dba59efb27676f0009d028fc92e&imgtype=0&src=http%3A%2F%2Fimg49.nipic.com%2F20131031%2F2708164_190243540151_1.jpg',
          order: '3'
        }
      ]
    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: '', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log("success")
        console.log(res.data)
        this.setData({
        })
      },
      fail(res) {
        console.log("fail")
      }
    })


    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var swiperH = winWid * 3 / 4 + "px"
    this.setData({
      height: swiperH　　　　　　　　//设置高度
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


  swipertapfunc: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: 'news_detail?id=' + e.currentTarget.dataset.id
    })
  }



})