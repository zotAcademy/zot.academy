export default {
  directives: {
    routerify (el, binding, vnode) {
      [].slice.call(el.getElementsByTagName('a')).forEach(a => {
        if (a.host === document.location.host) {
          a.onclick = event => {
            event.preventDefault()
            vnode.context.$router.push(a.pathname + a.search + a.hash)
          }
        }
      })
    }
  }
}
