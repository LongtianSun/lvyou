import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, obj) {
      state.userInfo = obj
      this.commit('saveUserInfo')
    },
    saveUserInfo(state) {
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    setToken(state, token) {
      state.token = token
      this.commit('saveToken')
    },
    saveToken(state) {
      localStorage.setItem('token', state.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
