import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = () => new Vuex.Store({
  state: {
    user: {}
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
