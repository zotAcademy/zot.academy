export default {
  namespaced: true,
  state: {
    component: null
  },
  mutations: {
    hide (state) {
      state.component = null
    },
    show (state, component) {
      state.component = component
    }
  }
}
