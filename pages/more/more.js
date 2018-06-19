Page({
  data: {
    selsectState: [0, 0, 0, 0, 0],
    selectIndex: 0
  },

  onLoad: function (options) {

  },

  //点击词典图标
  clickDict: function () {
    this.setData({
      selsectState: [1, 0, 0, 0, 0],
      selectIndex: 1
    });
    wx.showToast({
      title: "还没空做啊🤣",
      duration: 3000,
      icon: "success"
    })
  },
  //点击快递图标
  clickExpre: function () {
    this.setData({
      selsectState: [0, 1, 0, 0, 0],
      selectIndex: 2
    });
    wx.showToast({
      title: "还没空做啊🤣",
      duration: 3000,
      icon: "success"
    })
  },
  //点击学生验证
  clickMore: function () {
    this.setData({
      selsectState: [0, 0, 1, 0, 0],
      selectIndex: 3
    });
    wx.showActionSheet({
      itemList: [
        "登录"
      ],
      itemColor: "#405f80",
      success: function (res) {
        wx.navigateTo({
          url: '../logs/logs'
        });
      }
    })
  },


  onShareAppMessage: function () {
    return {
      title: '期待更多功能~',
      desc: '分享个小程序，希望你喜欢☺️~',
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }

})