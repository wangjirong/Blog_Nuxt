import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    isLogin: false
  },
  getters: {
    getLoginState: (state) => state.isLogin
  },
  mutations: {
    setLoginState: (state, isLogin) => {
      if (isLogin) state.user = isLogin;
      else state.isLogin = false
    }
  },
  actions: {

    SetLoginState: ({
      commit
    }, isLogin) => commit('setLoginState', isLogin)

  }
})
export default store
