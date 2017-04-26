import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

store.dispatch('session/restore').then(function () {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
})

router.beforeEach(function (to, from, next) {
  if ((to.path === '/login' || to.path === '/signup') && from.path !== '/login' && from.path !== '/signup') {
    store.dispatch('redirection/stash', from)
  }
  next()
})
