import request from '@/utils/request'
// 获取用户信息
export const getUserInfo = (params) => {
  return request({
    method: 'GET',
    url: '/user',
    params
  })
}
