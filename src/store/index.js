import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage'
Vue.use(Vuex)
const USER_TOKEK = 'USER_TOKEK'
export default new Vuex.Store({
  state: {
    user: getItem(USER_TOKEK) || {}
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
      // 把数据同步到本地存储
      setItem(USER_TOKEK, payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
