import Vue from 'vue'
import Vuex from 'vuex'
import requests from './modules/requests'
import session from './modules/session'
import redirection from './modules/redirection'
import question from './modules/question'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    requests,
    session,
    redirection,
    question
  },
  strict: true
})
