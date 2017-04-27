import api from '@/api'

export default {
  namespaced: true,
  state: {
    userId: null,
    user: null
  },
  mutations: {
    establishment (state, session) {
      state.user = session.user
      state.userId = session.user.id
    },
    destruction (state) {
      state.user = null
      state.userId = null
    }
  },
  actions: {
    restore ({ commit }) {
      return new Promise((resolve, reject) => {
        api.get('/session')
          .then(response => {
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(resolve)
      })
    },
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.post('/session', data)
          .then(response => {
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    },
    logout ({ commit }) {
      return new Promise((resolve, reject) => {
        api.delete('/session')
          .then(response => {
            commit('destruction')
            resolve(response)
          })
          .catch(reject)
      })
    },
    signup ({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.post('/users/', data)
          .then(response => {
            api.post('/session', data)
              .then(response => {
                commit('establishment', response.data)
                resolve(response)
              })
              .catch(reject)
          })
          .catch(reject)
      })
    }
  }
}
