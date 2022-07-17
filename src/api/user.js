import request from '@/utils/request'
// 获取用户信息
export const getUserInfo = (params) => {
  return request({
    method: 'GET',
    url: '/user',
    params
  })
}
// 查看收藏列表
export const shocList = (token) => {
  return request({
    method: 'GET',
    url: '/user/favorites',
    // params: {
    //   token
    // }
    headers: {
      // 注意：该接口需要授权才能访问
      Authorization: token
    }
  })
}
// 查看已发布房源列表(房屋管理)
export const fbuList = (token) => {
  return request({
    method: 'GET',
    url: '/user/houses',
    headers: {
      // 注意：该接口需要授权才能访问
      Authorization: token
    }
  })
}
// 房屋是否收藏
export const shoc = (id) => {
  return request({
    method: 'GET',
    url: '/user/favorites/' + id + ''
  })
}
// 添加收藏
export const addSc = (id) => {
  return request({
    method: 'POST',
    url: '/user/favorites/' + id + ''
  })
}
// 删除收藏
export const deleteSc = (id) => {
  return request({
    method: 'DELETE',
    url: '/user/favorites/' + id + ''
  })
}
