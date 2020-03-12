import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      config: {},
      user: {},
      searchtext: '',
      wantspath: '',
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
      },
      setwantspath(state, path) {
          state.wantspath = path
      },
  },
  actions: {
  },
  modules: {
  }
})
