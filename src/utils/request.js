// 引入axios
import axios from 'axios'
// 配置默认配置
const request = axios.create({
  baseURL: 'http://liufusong.top:8080',
  timeout: 3000
})
export default request
