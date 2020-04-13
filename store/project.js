import * as api from '~/api/index'

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
  },
  async edit ({ commit }, { project, userId, token }) {
    return await api.editProject(project, userId, token)
  }
}

export const getters = {
  data: state => state.data
}
