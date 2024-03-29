import Mock from 'mockjs'

const usermap = new Map([
  ['admin-token', { roles: ['admin'], username: 'admin', password: '111111', status: 'enabled', passwordexpire: '6' }],
  ['operator-token', { roles: ['operator'], username: 'operator', password: '111111', status: 'locked' }],
  ['guest-token', { roles: ['guest'], username: 'guest', password: '111111', status: 'enabled' }]
])

export default [
  // user login
  {
    url: '/action/user_login',
    type: 'post',
    response: config => {
      const { username, password } = config.body

      let tokenstr = ''
      for (const [key, value] of usermap) {
        if ((value.username === username) && (value.password === password)) {
          tokenstr = key
          break
        }
      }

      if (tokenstr.length > 0) {
        return {
          code: 20000,
          data: { token: tokenstr }
        }
      } else {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
    }
  },

  // get user info
  {
    url: '/action/user_getuserinfo',
    type: 'post',
    response: config => {
      const { username } = config.body

      let token = ''
      for (const [key, value] of usermap) {
        if (value.username === username) {
          token = key
          break
        }
      }

      // mock error
      if (usermap.has(token)) {
        return {
          code: 20000,
          data: usermap.get(token)
        }
      } else {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }
    }
  },

  // update password
  {
    url: '/action/user_updatepassword',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // user logout
  {
    url: '/action/user_logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        message: 'success'
      }
    }
  },

  // adduser
  {
    url: '/action/user_adduser',
    type: 'post',
    response: config => {
      const { username, password, roles, status } = config.body

      let userexist = false
      for (const value of usermap.values()) {
        if (value.username === username) {
          userexist = true
          break
        }
      }

      if (userexist) {
        return {
          code: 60205,
          message: 'Account already exist.'
        }
      } else {
        // add user to user map
        const addtoken = Mock.Random.id()
        usermap.set(addtoken, { roles: roles, username: username, password: password, status: status })

        return {
          code: 20000,
          message: 'success'
        }
      }
    }
  },

  // modifyuser
  {
    url: '/action/user_modifyuser',
    type: 'post',
    response: config => {
      const { username, password, roles, status } = config.body

      let userexist = false
      let token = ''
      for (const [key, value] of usermap) {
        if (value.username === username) {
          userexist = true
          token = key
          break
        }
      }

      if (!userexist) {
        return {
          code: 60205,
          message: 'Account does not exist.'
        }
      } else {
        // update user to user map
        usermap.set(token, { roles: roles, username: username, password: password, status: status })

        return {
          code: 20000,
          message: 'success'
        }
      }
    }
  },

  // deleteyuser
  {
    url: '/action/user_deleteuser',
    type: 'post',
    response: config => {
      const { username } = config.body

      let userexist = false
      let token = ''
      for (const [key, value] of usermap) {
        if (value.username === username) {
          userexist = true
          token = key
          break
        }
      }

      if (!userexist) {
        return {
          code: 60205,
          message: 'Account does not exist.'
        }
      } else {
        // delete user from user map
        usermap.delete(token)

        return {
          code: 20000,
          message: 'success'
        }
      }
    }
  },

  // queryusers
  {
    url: '/action/user_queryusers',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: [...usermap.values()]
      }
    }
  },

  // getauthcfg
  {
    url: '/action/user_getauthcfg',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: {
          sessionlife: '1800',
          loginattempnum: '5',
          passwordlocktime: '60',
          passwordresuse: '3',
          passwordlifedays: '3',
          passwordgracedays: '5',
          passwordminlen: '6',
          passwordcomplexity: '3'
        }
      }
    }
  },

  // saveauthcfg
  {
    url: '/action/user_saveauthcfg',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  }

]
