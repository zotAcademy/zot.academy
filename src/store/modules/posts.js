import api from '@/api'

export default {
  namespaced: true,
  getters: {
    getPostById (state, getters, rootState, rootGetters) {
      return id => rootGetters['cache/post'](id)
    }
  },
  actions: {
    get ({ commit, dispatch }, id) {
      return new Promise((resolve, reject) => {
        api.get('/posts/' + id)
          .then(response => {
            dispatch('cache/post', response.data, { root: true })
            resolve(response)
          })
          .catch(reject)
      })
    },
    post ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.post('/posts/', post)
          .then(response => {
            dispatch('cache/post', response.data, { root: true })
            resolve(response)
          })
          .catch(reject)
      })
    },
    patch ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.patch('/posts/' + post.id, post)
          .then(response => {
            dispatch('cache/post', response.data, { root: true })
            resolve(response)
          })
          .catch(reject)
      })
    },
    'delete' ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.delete('/posts/' + post.id)
          .then(response => {
            dispatch('cache/post', response.data.id, { root: true })
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}
