import Vue from 'vue'
import Vuex from 'vuex'
import routes from '../router/alias'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTree: [...routes],
  },
  mutationss: {},
  actions: {},
})