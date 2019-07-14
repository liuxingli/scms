import request from '@/utils/request'

/**
  login request data example :
  {
    url: '/user/login',
    method: 'post',
    data: {
      username: 'admin'
      password: '123456'
    }
  }

  login response data example(success) :
  {
    code: 20000,
    data: 'thisisatokenexample'
  }

  login response data example(fail, code != 20000 and message indicate the err msg) :
     50008: Illegal token
     50012: Other clients logged in
     50014: Token expired
  The fail message is same for all the APIs
  {
    code: 50008,
    message: 'Login failed, unable to get user details.'
  }
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
  getinfo request data example :
  {
    url: '/user/info',
    method: 'get',
    data: 'admin-token'
  }

  getinfo response data example(success) :
  {
    code: 20000,
    data: {
      roles: ['admin'],
      username: 'admin'
    }
  }
 */
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'post',
    data: { token }
  })
}

/**
  getinfo request data example :
  {
    url: '/user/logout',
    method: 'post',
  }

  getinfo response data example(success) :
  {
    code: 20000,
    data: 'success'
  }
 */
export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

/**
  adduser request data example :
  {
    url: '/user/add',
    method: 'post',
    data: {
      username: 'admin',
      password: '123456',
      roles: ['admin']
    }
  }
*/
export function adduser(data) {
  return request({
    url: '/user/add',
    method: 'post',
    data
  })
}

/**
  modifyuser request data example :
  {
    url: '/user/modify',
    method: 'put',
    data:{
        username: 'admin',
        password: '123456',
        roles: ['admin']
    }
  }
*/
export function modifyuser(data) {
  return request({
    url: '/user/modify',
    method: 'post',
    data
  })
}

/**
  deleteuser request data example :
  {
    url: '/user/delete',
    method: 'put',
    data:{
        username: 'admin'
    }
  }
*/
export function deleteuser(data) {
  return request({
    url: '/user/delete',
    method: 'post',
    data
  })
}

/**
  queryusers request data example :
  {
    url: '/user/query',
    method: 'post',
  }

  queryuser response data example :
  {
    code: 20000,
    data:
    [{ roles: ['admin'], username: 'admin', password: '111111' },
     { roles: ['operator'], username: 'operator', password: '111111' },
     { roles: ['guest'], username: 'guest', password: '111111' }]
  }
*/
export function queryusers() {
  return request({
    url: '/user/query',
    method: 'post'
  })
}

/**
  query auth config :
  {
    url: '/user/getauthcfg',
    method: 'post',
  }

  getauthcfg response data example :
  {
    code: 20000,
    data: { sessionlife: '1800',
            loginattempnum: '5',
            passwordlocktime: '5',
            passwordresuse: '5',
            passwordlifedays: '3',
            passwordgracedays: '5',
            passwordminlen: '6',
            passwordcomplexity: '3'
          }
  }
*/
export function getauthcfg() {
  return request({
    url: '/user/getauthcfg',
    method: 'post'
  })
}

/**
  save auth config :
  {
    url: '/user/saveauthcfg',
    method: 'post',
    data: { sessionlife: '1800',
            loginattempnum: '5',
            passwordlocktime: '5',
            passwordresuse: '5',
            passwordlifedays: '3',
            passwordgracedays: '5',
            passwordminlen: '6',
            passwordcomplexity: '3'
          }
  }

  save auth config response data example :
  {
    code: 20000
  }
*/
export function saveauthcfg(data) {
  return request({
    url: '/user/saveauthcfg',
    method: 'post',
    data
  })
}
