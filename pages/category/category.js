const app = getApp();
Page({
  data: {
    commodities: [
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
      {
        name: '日晒瑰夏',
        price: 288,
        image: '/static/images/red-orange-medium.jpeg',
      },
      {
        name: '日晒瑰夏',
        price: 288,
        image: '/static/images/red-orange-medium.jpeg',
      },
      {
        name: '埃塞尔比亚 挂耳咖啡',
        price: 188,
        image: '/static/images/orange-medium.jpeg',
      },
    ],
  },
  onLoad() {
    this.getGoodsData();
  },
  getGoodsData() {
    wx.request({
      url: 'https://forkify-api.herokuapp.com/api/v2/recipes',
      data: {
        search: 'pizza',
        key: '85e3249f-7e51-407e-ab2f-be2ce4403661',
      },
      header: {
        'content-type': 'application/json',
      },
      success(res) {
        console.log(res.data);
      },
    });
  },
});
