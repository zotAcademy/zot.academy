import Vue from 'vue'
import api from '@/api'

export default {
  namespaced: true,
  state: {
    cache: {},
    ids: []
  },
  mutations: {
    cache (state, posts) {
      posts.forEach(post => {
        if (state.cache[post.id]) {
          Vue.set(state.cache, post.id, Object.assign(state.cache[post.id], post))
        } else {
          Vue.set(state.cache, post.id, post)
        }
      })
    },
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
    posts (state) {
      return state.ids.map(id => state.cache[id])
    },
    getPostById (state, getters) {
      return (id) => state.cache[id]
    }
  },
  actions: {
    get ({ commit }, id) {
      return new Promise((resolve, reject) => {
        api.get('/posts/' + (id || ''))
          .then(response => {
            if (id == null) {
              commit('cache', response.data)
              commit('ids', response.data.map(post => post.id))
            } else {
              commit('cache', [response.data])
            }
            resolve(response)
          })
          .catch(reject)
      })
    },
    post ({ commit }, post) {
      return new Promise((resolve, reject) => {
        api.post('/posts/', post)
          .then(response => {
            commit('cache', [response.data])
            commit('id', response.data.id)
            resolve(response)
          })
          .catch(reject)
      })
    },
    patch ({ commit }, post) {
      return new Promise((resolve, reject) => {
        api.patch('/posts/' + post.id, post)
          .then(response => {
            commit('cache', [response.data])
            resolve(response)
          })
          .catch(reject)
      })
    },
    'delete' ({ commit }, post) {
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
