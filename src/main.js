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
  if (!(store.state.session.user && store.state.session.user.id)) {
    if (to.matched.some(record => record.meta.auth)) {
      store.dispatch('redirection/stash', to)
      return next({
        path: '/signin'
      })
    }
    if ((to.name === 'signin' && from.name !== 'signup') || (to.name === 'signup' && from.name !== 'signin')) {
      store.dispatch('redirection/stash', from)
    }
  } else {
    if (to.name === 'signin' || to.name === 'signup') {
      return next(from)
    }
  }

  store.commit('error/catch')
  next()
})
