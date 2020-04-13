const maxAge = {
  month: 60 * 60 * 24 * 30
}

const auth = {
  name: 'auth',
  maxAge: maxAge.month
}

const userId = {
  name: 'userId',
  maxAge: maxAge.month
}

const token = {
  name: 'token',
  maxAge: maxAge.month
}

export { auth, token, userId }
