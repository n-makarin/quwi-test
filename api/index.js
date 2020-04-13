import axios from 'axios'

const BASE_URL = 'https://api.quwi.com/v2/'

async function login ({ email, password }) {
  await axios({
    method: 'POST',
    url: `${BASE_URL}auth/login`,
    data: {
      email,
      password
    }
  })
}

export { login }
