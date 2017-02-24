import Vue from 'vue'
import Vuex from 'vuex'
import requests from './modules/requests'
import session from './modules/session'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    requests,
    session
  },
  strict: true
})
