import api from '@/api'

export default {
  namespaced: true,
  state: {
    ids: []
  },
  mutations: {
    ids (state, ids) {
      state.ids = ids
    },
    id (state, id) {
      state.ids.unshift(id)
    },
    purge (state, id) {
      var index = state.ids.indexOf(id)
      if (~index) {
        state.ids.splice(index, 1)
      }
    }
  },
  getters: {
    posts (state, getters) {
      return state.ids.map(id => getters.getPostById(id))
    },
    getPostById (state, getters, rootState, rootGetters) {
      return id => rootGetters['cache/post'](id)
    }
  },
  actions: {
    get ({ commit, dispatch }, id) {
      return new Promise((resolve, reject) => {
        api.get('/posts/' + (id || ''))
          .then(response => {
            if (id != null) {
              dispatch('cache/posts', [response.data], { root: true })
            } else {
              dispatch('cache/posts', response.data, { root: true })
              commit('ids', response.data.map(post => post.id))
            }
            resolve(response)
          })
          .catch(reject)
      })
    },
    post ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.post('/posts/', post)
          .then(response => {
            dispatch('cache/posts', [response.data], { root: true })
            commit('id', response.data.id)
            resolve(response)
          })
          .catch(reject)
      })
    },
    patch ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.patch('/posts/' + post.id, post)
          .then(response => {
            dispatch('cache/posts', [response.data], { root: true })
            resolve(response)
          })
          .catch(reject)
      })
    },
    'delete' ({ commit, dispatch }, post) {
      return new Promise((resolve, reject) => {
        api.delete('/posts/' + post.id)
          .then(response => {
            commit('purge', post.id)
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}
