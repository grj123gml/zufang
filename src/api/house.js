import request from '@/utils/request'
// 查询房屋具体信息
export const getFw = (id) => {
  return request({
    method: 'GET',
    url: '/houses/' + id + ''
  })
}
// 发布房源
export const deployHouse = () => {
  return request({
    url: '/houses/params'
  })
}
