import api from '@/api'

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: null
  },
  mutations: {
    establishment (state, session) {
      state.isAuthenticated = true
      state.user = session
    },
    destruction (state) {
      state.isAuthenticated = false
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
          .catch(reject)
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
