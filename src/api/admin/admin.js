import request from '@/utils/request'
// import store from '@/store'
// 用户登录
export const userLogin = (data) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  })
}
