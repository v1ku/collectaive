import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
  },
  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
  actions: {},
  modules: {},
});
