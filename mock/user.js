import Mock from 'mockjs'

const usermap = new Map([
  ['admin-token', { roles: ['admin'], username: 'admin', password: '111111' }],
  ['operator-token', { roles: ['operator'], username: 'operator', password: '111111' }],
  ['guest-token', { roles: ['guest'], username: 'guest', password: '111111' }]
])

export default [
  // user login
  {
    url: '/user/login',
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
    url: '/user/info',
    type: 'post',
    response: config => {
      const { token } = config.body

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

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  // adduser
  {
    url: '/user/add',
    type: 'post',
    response: config => {
      const { username, password, roles } = config.body

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
        usermap.set(addtoken, { roles: roles, username: username, password: password })

        return {
          code: 20000,
          data: 'success'
        }
      }
    }
  },

  // modifyuser
  {
    url: '/user/modify',
    type: 'post',
    response: config => {
      const { username, password, roles } = config.body

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
        usermap.set(token, { roles: roles, username: username, password: password })

        return {
          code: 20000,
          data: 'success'
        }
      }
    }
  },

  // deleteyuser
  {
    url: '/user/delete',
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
          data: 'success'
        }
      }
    }
  },

  // queryusers
  {
    url: '/user/query',
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
    url: '/user/getauthcfg',
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
    url: '/user/saveauthcfg',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  }

]
