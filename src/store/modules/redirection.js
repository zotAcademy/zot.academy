export default {
  namespaced: true,
  state: {
    to: null
  },
  mutations: {
    stash (state, to) {
      state.to = to
    },
    pop (state) {
      state.to = null
    }
  },
  actions: {
    stash ({ commit }, to) {
      commit('stash', to)
    },
    pop ({ commit, state }) {
      return new Promise((resolve, reject) => {
        var to = state.to
        if (to != null) {
          commit('pop')
          resolve(to)
        } else {
          reject(new Error())
        }
      })
    }
  }
}
