import api from '@/api'

export default {
  namespaced: true,
  state: {
    user_id: null
  },
  mutations: {
    establishment (state, session) {
      state.user_id = session.user.id
    },
    destruction (state) {
      state.user_id = null
    }
  },
  getters: {
    authenticated (state) {
      return state.user_id != null
    },
    username (state, getters, rootState, rootGetters) {
      var user = rootGetters['cache/user'](state.user_id)
      return user != null ? user.username : null
    }
  },
  actions: {
    restore ({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        api.get('/session')
          .then(response => {
            dispatch('cache/user', response.data.user, { root: true })
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(error => {
            resolve(error.response)
            if (error.response.status == null) {
              reject(error)
            }
          })
      })
    },
    signin ({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        api.post('/session', data)
          .then(response => {
            dispatch('cache/user', response.data.user, { root: true })
            commit('establishment', response.data)
            resolve(response)
          })
          .catch(reject)
      })
    },
    signout ({ commit }) {
      return new Promise((resolve, reject) => {
        api.delete('/session')
          .then(response => {
            commit('destruction')
            resolve(response)
          })
          .catch(reject)
      })
    },
    signup ({ commit, dispatch }, data) {
      return new Promise((resolve, reject) => {
        api.post('/users/', data)
          .then(response => {
            api.post('/session', data)
              .then(response => {
                dispatch('cache/user', response.data.user, { root: true })
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
