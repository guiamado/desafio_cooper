import Vue from 'vue';
import Vuex from 'vuex';
import componentes from './views';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: false,
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    componentes,
  },
});
