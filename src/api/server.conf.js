let nodeEnv = process.env.NODE_ENV
console.log('NODE_ENV:  ' + nodeEnv)
let baseHref = ''
if (nodeEnv === 'development') {
  baseHref = ''
} else if (nodeEnv === 'production') {
  baseHref = 'http://localhost:4000'
} else if (nodeEnv === 'testing') {
  baseHref = 'http://localhost:3000'
}

function resorve(path) {
  return baseHref + path
}

export default {
  apiHref: baseHref,
  // 基础api接口路径
  // apiHref: baseHref,
  /**
   *  用户接口
   *
   */
  // 登录
  uPostLogin: {
    url: resorve('/api/login'),
    method: 'POST'
  },
  // 登出
  u_post_log_out: {
    url: resorve('/api/logout'),
    method: 'POST'
  },
  // 获取用户信息
  uGetUserInfo: {
    url: resorve('/api/userInfo'),
    method: 'GET'
  },
  // 获取用户
  uGetUser: {
    url: resorve('/api/user'),
    method: 'GET'
  }
}
