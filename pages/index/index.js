Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 发请求获取真实数据，行业动态列表
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      success:res => {
        // 修改数据中的时间 将时间戳修改成日常时间
        res.data.forEach(item=>{
          // php后台传来的时间戳是以秒（9位数）为单位 js中时间戳也毫秒为单位
          // 1s=1000ms
          var time = item.posttime * 1000
          var d = new Date(time)
          // 下面的+1是我自己改的 为了让数据看着新
          var year = d.getFullYear() + 1
          // 0-11月 三元运算符为了给小于10的月份前面+个“0”
          var month = (d.getMonth() + 1) < 10 ? "0"+(d.getMonth() + 1) : (d.getMonth() + 1)
          // getDay（）返回的是一周的第几天
          var day = d.getDate()<10 ? '0'+d.getDate() : d.getDate()
          var posttime = year + "-" + month + "-" + day
          item.posttime = posttime
        })
        this.setData({
          dataList:res.data
        })
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