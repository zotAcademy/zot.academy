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
      return new Promise(function (resolve, reject) {
        api.get('/questions/' + id)
          .then(function (response) {
            commit('set', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    },
    post ({ commit }, data) {
      return new Promise(function (resolve, reject) {
        api.post('/questions/', data)
          .then(function (response) {
            commit('set', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}