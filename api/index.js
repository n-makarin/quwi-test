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

export {
  login,
  getProjectList
}
