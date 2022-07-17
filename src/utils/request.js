// 引入axios
import axios from 'axios'
import store from '@/store'
// 配置默认配置
const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
  // timeout: 3000
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  // 请求发起会经过这里
  if (user) {
    // console.log(`Bearer ${token}`)
    config.headers.Authorization = `${user}`
  }
  return config
},
function (error) {
  // 请求还没有发出去就出错了
  return Promise.reject(error)
})
export default request
