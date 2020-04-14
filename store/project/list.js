import * as api from '~/api/index'

export const state = () => ({
  data: []
})

export const mutations = {
  SET_DATA (state, data) {
    state.data = data
  }
}

export const actions = {
  async get ({ commit }, token) {
    const response = await api.getProjectList(token)
      .catch((err) => {
        console.log(err)
      })
    if (!response || response.status !== 200) { return }
    commit('SET_DATA', response.data.projects)
  },
  edit ({ commit, getters }, project) {
    const localData = getters.data
    localData.forEach((projectItem, index) => {
      if (projectItem.id !== project.id) { return }
      localData[index] = project
    })
    commit('SET_DATA', localData)
  }
}

export const getters = {
  data: state => state.data
}
