export default {
  namespaced: true,
  state: {
    component: null,
    payload: null
  },
  mutations: {
    hide (state) {
      state.component = null
      state.payload = null
    },
    show (state, payload) {
      if (payload && payload.component) {
        state.component = payload.component
        if (payload.payload) {
          state.payload = payload.payload
        } else {
          state.payload = payload
        }
      } else {
        state.component = payload
      }
    }
  }
}
