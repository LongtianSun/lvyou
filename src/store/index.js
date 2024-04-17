import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj
    }
  },
  actions: {
  },
  modules: {
  }
})
