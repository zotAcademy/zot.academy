import Vue from 'vue'
import Vuex from 'vuex'
import requests from './modules/requests'
import session from './modules/session'
import redirection from './modules/redirection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    requests,
    session,
    redirection
  },
  strict: true
})
