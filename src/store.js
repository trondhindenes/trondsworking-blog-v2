import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cameFrom: ""
  },
  mutations: {
    updateCameFrom(state, data) {
      state.cameFrom = data
    }
  }
});
