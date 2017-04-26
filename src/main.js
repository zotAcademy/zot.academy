import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)

store.dispatch('session/restore').then(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
})

router.beforeEach((to, from, next) => {
  if (!store.state.session.user) {
    if (to.matched.some(record => record.meta.auth)) {
      store.dispatch('redirection/stash', to)
      return next({
        path: '/login'
      })
    }
  } else {
    if (to.name === 'login' || to.name === 'signup') {
      return next(false)
    }
  }
  next()
})
