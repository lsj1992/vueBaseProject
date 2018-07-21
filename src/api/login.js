import http from '@/utils/httpAxios'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return http.ajax('/login/login', 'post', data)
}

export function logout() {
  return http.ajax('/login/logout', 'post')
}

export function getUserInfo(token) {
  return http.ajax('/login/logout', 'get', {token})
}
