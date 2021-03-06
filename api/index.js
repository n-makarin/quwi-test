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

async function logout (token) {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}auth/logout`,
    headers: {
      Authorization: `Bearer ${token}`
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

async function editProject (project, token) {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}projects-manage/update?id=${project.id}`,
    data: {
      name: project.name
    },

    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export {
  login,
  logout,
  getProjectList,
  editProject
}
