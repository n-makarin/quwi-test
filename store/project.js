export const state = () => ({
  data: {}
})

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

export const actions = {
  set ({ commit }, project) {
    commit('SET_DATA', project)
  }
}

export const getters = {
  data: state => state.data
}
