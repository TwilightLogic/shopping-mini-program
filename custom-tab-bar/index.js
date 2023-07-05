Component({
  data: {
    selected: 0,
    color: "#e67e22",
    selectedColor: "#e67e22",
    list: [{
      "pagePath": "pages/home/home",
      "text": "首页",
      "iconPath": "../static/images/home-outline.png",
      "selectedIconPath": "../static/images/home.png"
    },
    {
      "pagePath": "pages/shopcart/shopcart",
      "text": "购物车",
      "iconPath": "../static/images/cart-outline.png",
      "selectedIconPath": "../static/images/cart.png"
    },
    {
      "pagePath": "pages/order/order",
      "text": "订单",
      "iconPath": "../static/images/list-outline.png",
      "selectedIconPath": "../static/images/list.png"
    },
    {
      "pagePath": "pages/my/my",
      "text": "我的",
      "iconPath": "../static/images/person-outline.png",
      "selectedIconPath": "../static/images/person.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})