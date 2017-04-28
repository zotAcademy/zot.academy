export default {
  namespaced: true,
  state: {
    response: null
  },
  mutations: {
    throw (state, error) {
      state.response = error.response
    },
    catch (state) {
      state.response = null
    }
  }
}
