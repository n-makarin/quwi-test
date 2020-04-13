import axios from 'axios'

const BASE_URL = 'https://api.quwi.com/v2/'

async function login ({ email, password }) {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}auth/login`,
    data: {
      email,
      password
    }
  })
}

async function getProjectList (token) {
  return await axios({
    method: 'GET',
    url: `${BASE_URL}projects-manage/index`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

async function editProject (project, userId, token) {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}projects-manage/update?id=${project.id}`,
    data: {
      name: project.name,
      is_active: project.is_active,
      position: project.position,
      id_users_add: userId,
      is_owner_watcher: project.is_owner_watcher
    },

    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export {
  login,
  getProjectList,
  editProject
}
