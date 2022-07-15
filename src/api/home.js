import request from '@/utils/request'
// import store from '@/store'
// 首页轮播图
export const Lubt = () => {
  return request({
    method: 'GET',
    url: '/home/swiper'
  })
}
// 租房小组
export const ZuF = () => {
  return request({
    method: 'GET',
    url: '/home/groups'
  })
}
