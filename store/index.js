import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    user: {
      _id:"1212",
      nickName:"艾瑞",
      avatar:"http://qzapp.qlogo.cn/qzapp/101862127/1F75CE8E2AF350BE33F265A379BF1B4C/50"
    }
  },
  getters: {
    getUser: (state) => state.user
  },
  mutations: {
    setUser: (state, user) => {
      if (user) state.user = user;
      else state.user = {}
    }
  },
  actions: {

    SetUser: ({
      commit
    }, user) => commit('setUser', user)

  }
})
export default store
