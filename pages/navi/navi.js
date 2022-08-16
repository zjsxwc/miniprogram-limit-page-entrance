// pages/navi/navi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("navi onLoad",options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getValidPrevIndexPage();
    console.log("navi onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },


  getValidPrevIndexPage(){
    let ps = getCurrentPages();
    let isValid = (ps.length >= 2) && ("pages/index/index" === ps[ps.length - 2].route);
    if (!isValid) {
      wx.navigateTo({
        url: "../index/index"
      });
      return;
    }
    console.log("valid");
    return ps[ps.length - 2];
  },

  bindtoback() {
    let prevPage = this.getValidPrevIndexPage();
    prevPage.setData({error: "hhhhh"});
    wx.navigateBack({delta:1});
  }

})