import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      config: {},
      user: {},
      searchtext: '',
  },
  mutations: {
      setconfig(state, c) {
          state.config = c
      },
      setuser(state, u) {
          state.user = u
          state.user.timemodified = Date.now()
      },
      setsearchtext(state, search) {
          state.searchtext = search
      }
  },
  actions: {
  },
  modules: {
  }
})
