import request from '@/utils/request'

/**
  login request data example :
  {
    url: '/action/login',
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
    url: '/action/login',
    method: 'post',
    data
  })
}

/**
  getinfo request data example :
  {
    url: '/action/getuserinfo',
    method: 'get',
    data: 'admin-token'
  }

  getinfo response data example(success,psswordhint is optional) :
  {
    code: 20000,
    data: {
      roles: ['admin'],
      username: 'admin',
      passwordexpire: '7'
    }
  }
 */
export function getInfo(token) {
  return request({
    url: '/action/getuserinfo',
    method: 'post',
    data: { token }
  })
}

/**
  updatepassword request data example :
  {
    url: '/action/updatepassword',
    method: 'get',
    data: 'newpassword@123'
  }

  updatepassword response data example(success) :
  {
    code: 20000,
  }

  updatepassword response data example(success) :
  {
    code: 20001,
    message: 'Password should include at least 3 kinds of (uppercase,lowercase,number,symbol) and with minimum length 6'
  }
 */
export function updatepassword(newpassword) {
  return request({
    url: '/action/updatepassword',
    method: 'post',
    data: newpassword
  })
}

/**
  logout request data example :
  {
    url: '/action/logout',
    method: 'post',
  }

  logout response data example(success) :
  {
    code: 20000,
    data: 'success'
  }
 */
export function logout() {
  return request({
    url: '/action/logout',
    method: 'post'
  })
}

/**
  adduser request data example :
  {
    url: '/action/adduser',
    method: 'post',
    data: {
      username: 'admin',
      password: '123456',
      roles: ['admin'],
      status: 'enabled'
    }
  }
*/
export function adduser(data) {
  return request({
    url: '/action/adduser',
    method: 'post',
    data
  })
}

/**
  modifyuser request data example :
  password field is optional, if it is not included in data, it means no change
  {
    url: '/action/modifyuser',
    method: 'put',
    data:{
        username: 'admin',
        password: '123456',
        roles: ['admin'],
        status: 'enabled'
    }
  }
*/
export function modifyuser(data) {
  return request({
    url: '/action/modifyuser',
    method: 'post',
    data
  })
}

/**
  deleteuser request data example :
  {
    url: '/action/deleteuser',
    method: 'put',
    data:{
        username: 'admin'
    }
  }
*/
export function deleteuser(data) {
  return request({
    url: '/action/deleteuser',
    method: 'post',
    data
  })
}

/**
  queryusers request data example :
  {
    url: '/action/queryusers',
    method: 'post',
  }

  queryuser response data example :
  {
    code: 20000,
    data:
    [{ roles: ['admin'], username: 'admin', status: 'enabled' },
     { roles: ['operator'], username: 'operator', status: 'disabled' },
     { roles: ['guest'], username: 'guest', status: 'disabled' }]
  }
*/
export function queryusers() {
  return request({
    url: '/action/queryusers',
    method: 'post'
  })
}

/**
  query auth config :
  {
    url: '/action/getauthcfg',
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
    url: '/action/getauthcfg',
    method: 'post'
  })
}

/**
  save auth config :
  {
    url: '/action/saveauthcfg',
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
    url: '/action/saveauthcfg',
    method: 'post',
    data
  })
}
