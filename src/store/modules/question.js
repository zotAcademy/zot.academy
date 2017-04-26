import api from '@/api'

export default {
  namespaced: true,
  state: {
  },
  mutations: {
    set (state, data) {
      Object.assign(state, data)
    }
  },
  actions: {
    get ({ commit }, id) {
      return new Promise((resolve, reject) => {
        api.get('/questions/' + id)
          .then(response => {
            commit('set', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    },
    post ({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.post('/questions/', data)
          .then(response => {
            commit('set', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}
