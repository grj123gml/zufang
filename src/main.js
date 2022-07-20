import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import '@/assets/iconfont/iconfont.css'
import '@/assets/fonts/iconfont.css'
// 引入flexible 动态设置 REM 基准值
import 'amfe-flexible/index.min.js'

import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'YOUR_APP_KEY'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
