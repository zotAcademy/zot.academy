import octicons from 'octicons'

export default {
  namespaced: true,
  state: {
    ...octicons
  },
  getters: {
    ...(() => {
      var getters = {}
      Object.keys(octicons).forEach((key) => {
        getters[key] = (state) => state[key].toSVG
      })
      return getters
    })()
  }
}
