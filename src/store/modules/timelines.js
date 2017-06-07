import Vue from 'vue'
import api from '@/api'

export default {
  namespaced: true,
  state: {
    timelines: {}
  },
  mutations: {
    cache (state, { timeline, ids }) {
      Vue.set(state.timelines, timeline, ids)
    }
  },
  getters: {
    getPosts (state, getters) {
      return timeline => (state.timelines[timeline] || []).map(id => getters.getPostById(id)).filter(entry => entry != null)
    },
    getPostById (state, getters, rootState, rootGetters) {
      return id => rootGetters['cache/post'](id)
    }
  },
  actions: {
    get ({ commit, dispatch }, timeline) {
      return new Promise((resolve, reject) => {
        api.get(timeline)
          .then(response => {
            dispatch('cache/posts', response.data, { root: true })
            commit('cache', {
              timeline,
              ids: response.data.map(post => post.id)
            })
            resolve(response)
          })
          .catch(reject)
      })
    }
  }
}
