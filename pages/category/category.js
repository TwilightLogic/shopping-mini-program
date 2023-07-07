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
    ],
  },
  onLoad() {
    console.log(this.data.height);
  },
});
