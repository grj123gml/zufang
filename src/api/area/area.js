import request from '@/utils/request'
// 获取城市列表数据
export const CityList = (level) => {
  return request({
    method: 'GET',
    url: '/area/city' + level + ''
  })
}
// 获取热门城市列表
export const HotCity = () => {
  return request({
    method: 'GET',
    url: '/area/hot'
  })
}
