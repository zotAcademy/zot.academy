import api from '@/api'

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    establishment (state, session) {
      state.user = session.user
    },
    destruction (state) {
      state.user = null
    }
  },
  actions: {
    restore ({ commit }) {
      return new Promise(function (resolve, reject) {
        api.get('/session')
          .then(function (response) {
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(resolve)
      })
    },
    login ({ commit }, data) {
      return new Promise(function (resolve, reject) {
        api.post('/session', data)
          .then(function (response) {
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    },
    logout ({ commit }) {
      return new Promise(function (resolve, reject) {
        api.delete('/session')
          .then(function (response) {
            commit('destruction')
            resolve(response)
          })
          .catch(reject)
      })
    },
    signup ({ commit }, data) {
      return new Promise(function (resolve, reject) {
        api.post('/users/', data)
          .then(function (response) {
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}
