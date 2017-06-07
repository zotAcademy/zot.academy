import Vue from 'vue'

const models = {
  post: {
    user: 'user',
    in_reply_to_post: 'post'
  },
  user: {}
}

const pluralify = str => str + 's'
const isPlural = str => /s$/.test(str)

export default {
  namespaced: true,
  state: {
    ...(() => {
      var state = {}

      Object.keys(models).forEach(model => {
        state[pluralify(model)] = {}
      })

      return state
    })()
  },
  getters: {
    ...(() => {
      var getters = {}

      Object.keys(models).forEach(model => {
        getters[model] = (state, getters) => (id) => {
          if (id == null) return

          var data = state[pluralify(model)][id]

          if (data != null) {
            data = Object.assign({}, data)

            var include = models[model]
            if (include != null) {
              Object.keys(include).forEach(key => {
                var association = include[key]

                if (data[key] != null) {
                  if (isPlural(key)) {
                    data[key] = data[key].map(entry => getters[association](entry.id))
                  } else {
                    data[key] = getters[association](data[key].id)
                  }
                }
              })
            }
          }

          return data
        }
      })

      return getters
    })()
  },
  mutations: {
    ...(() => {
      var mutations = {}

      Object.keys(models).forEach(model => {
        mutations[model] = (state, entry) => {
          if (typeof entry !== 'number') {
            if (state[pluralify(model)][entry.id]) {
              entry = Object.assign(state[pluralify(model)][entry.id], entry)
            }
            Vue.set(state[pluralify(model)], entry.id, entry)
          } else {
            Vue.set(state[pluralify(model)], entry, null)
          }
        }
      })

      return mutations
    })()
  },
  actions: {
    ...(() => {
      var actions = {}

      Object.keys(models).forEach(model => {
        actions[model] = ({ commit, dispatch }, data) => {
          if (typeof data !== 'number') {
            var include = models[model]

            if (include != null) {
              Object.keys(include).forEach(key => {
                var association = include[key]

                if (data[key] != null) {
                  dispatch((isPlural(key) ? pluralify(association) : association), data[key])

                  if (isPlural(key)) {
                    data[key] = data[key].map(entry => {
                      return { id: entry.id }
                    })
                  } else {
                    data[key] = { id: data[key].id }
                  }
                }
              })
            }
          }

          commit(model, data)
        }

        actions[pluralify(model)] = ({ dispatch }, data) => {
          data.forEach(entry => {
            dispatch(model, entry)
          })
        }
      })

      return actions
    })()
  }
}
