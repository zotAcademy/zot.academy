import Vue from 'vue'
import Vuex from 'vuex'
import octicons from './modules/octicons'
import requests from './modules/requests'
import session from './modules/session'
import redirection from './modules/redirection'
import error from './modules/error'
import modal from './modules/modal'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    octicons,
    requests,
    session,
    redirection,
    error,
    modal,
    posts
  },
  strict: true
})
