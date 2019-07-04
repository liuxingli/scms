<template>
  <div id="user">
    <el-row class="line-display">
      <el-col :span="6" :offset="1">
        <div class="grid-content" style="margin-top:30px;">
          <!-- Create new user -->
          <el-button type="primary" style="float:left;" size="small" @click="dialogCreateVisible = true"> {{ $t("permission.createuser") }}</el-button>
          <!-- User List-->
          <el-col :span="6" style="height:20px;" />
          <el-table
            v-loading="loading"
            :data="users"
            stripe
            element-loading-text="Loading..."
            style="width: 100%;margin-top:20px;"
            @selection-change="tableSelectionChange"
          >
            <el-table-column
              prop="username"
              :label="$t('permission.username')"
              width="100"
            />
            <el-table-column
              prop="roles"
              :label="$t('permission.role')"
              width="100"
            />
            <el-table-column
              :label="$t('permission.operation')"
              width="200"
            >
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="setCurrent(scope.row)"
                >{{ $t("permission.edit") }}</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="removeUser(scope.row)"
                >{{ $t("permission.delete") }}</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style=" width:100%; ovflow:hidden; height:40px;" />
        </div>
      </el-col>
    </el-row>

    <!-- Create new user begin-->
    <el-dialog width="30%" :visible.sync="dialogCreateVisible" :title="$t('permission.createuser')" :close-on-click-modal="false" :close-on-press-escape="false" @close="reset">
      <el-form id="#create" ref="create" :model="create" :rules="rules" label-width="100px">
        <el-form-item :label="$t('permission.username')" prop="username">
          <el-input v-model="create.username" />
        </el-form-item>
        <el-form-item :label="$t('permission.password')" prop="password">
          <el-input v-model="create.password" type="password" show-password="true" auto-complete="off" />
        </el-form-item>
        <el-form-item :label="$t('permission.newpassword')" prop="checkPass">
          <el-input v-model="create.checkPass" type="password" show-password="true" />
        </el-form-item>
        <el-form-item :label="$t('permission.role')" prop="roles">
          <el-select v-model="create.roles" :placeholder="$t('permission.roleplaceholder')">
            <el-option :label="$t('permission.admin')" value="admin" />
            <el-option :label="$t('permission.operator')" value="operator" />
            <el-option :label="$t('permission.guest')" value="guest" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCreateVisible = false">{{ $t('global.cancel') }}</el-button>
        <el-button type="primary" :loading="createLoading" @click="createUser">{{ $t('global.submit') }}</el-button>
      </div>
    </el-dialog>

    <!-- Modify user begin-->
    <el-dialog width="30%" :visible.sync="dialogUpdateVisible" :title="$t('permission.modifyuser')" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form id="#update" ref="update" :model="update" :rules="modifyrules" label-width="100px">
        <el-form-item :label="$t('permission.username')" prop="name">
          <el-input v-model="update.username" :disabled="true" />
        </el-form-item>
        <el-form-item :label="$t('permission.newpassword')" prop="password">
          <el-input v-model="update.password" type="password" show-password="true" auto-complete="off" />
        </el-form-item>
        <el-form-item :label="$t('permission.confirmpassword')" prop="checkPass">
          <el-input v-model="update.checkPass" type="password" show-password="true" />
        </el-form-item>
        <el-form-item :label="$t('permission.role')" prop="roles">
          <el-select v-model="update.roles" :placeholder="$t('permission.roleplaceholder')">
            <el-option :label="$t('permission.admin')" value="admin" />
            <el-option :label="$t('permission.operator')" value="operator" />
            <el-option :label="$t('permission.guest')" value="guest" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUpdateVisible = false">{{ $t('global.cancel') }}</el-button>
        <el-button type="primary" :loading="updateLoading" @click="updateUser">{{ $t('global.submit') }}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { adduser, modifyuser, deleteuser, queryusers } from '@/api/user'

export default {
  name: '',
  data: function() {
    function isSimplePwd(s) {
      let ls = 0
      if (s.match(/([a-z])+/)) {
        ls++
      }
      if (s.match(/([0-9])+/)) {
        ls++
      }
      if (s.match(/([A-Z])+/)) {
        ls++
      }
      if (s.match(/[^a-zA-Z0-9]+/)) {
        ls++
      }
      return ls
    }

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('permission.reinputpassword')))
      } else if (value !== this.create.password) {
        callback(new Error(this.$t('permission.unmatchpassword')))
      } else if (isSimplePwd(value) < 3) {
        callback(new Error(this.$t('permission.weakpassword')))
      } else {
        callback()
      }
    }

    const validateChangePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('permission.reinputpassword')))
      } else if (value !== this.update.password) {
        callback(new Error(this.$t('permission.unmatchpassword')))
      } else if (isSimplePwd(value) < 3) {
        callback(new Error(this.$t('permission.weakpassword')))
      } else {
        callback()
      }
    }
    return {
      usernamelabel: this.$t('permission.username'),
      users: [],
      create: {
        username: '',
        roles: '',
        password: '',
        checkPass: ''
      },
      currentId: '',
      update: {
        username: '',
        roles: '',
        password: '',
        checkPass: ''
      },

      rules: {
        username: [{
          required: true,
          message: this.$t('permission.usernameplaceholder'),
          trigger: 'blur'
        }, {
          min: 5,
          max: 25,
          message: this.$t('permission.usernamelenhint')
        }],

        roles: [{
          required: true,
          message: this.$t('permission.roleplaceholder'),
          trigger: 'blur'
        }
        ],

        password: [{
          required: true,
          message: this.$t('permission.passwordplaceholder'),
          trigger: 'blur'
        }, {
          min: 6,
          max: 25,
          message: this.$t('permission.usernamelenhint')
        }],

        checkPass: [{
          required: true,
          message: this.$t('permission.reinputpassword'),
          trigger: 'blur'
        }, {
          validator: validatePass
        }]
      },
      modifyrules: {
        password: [{
          required: true,
          message: this.$t('permission.passwordplaceholder'),
          trigger: 'blur'
        }, {
          min: 6,
          max: 25,
          message: this.$t('permission.usernamelenhint')
        }],

        roles: [{
          required: true,
          message: this.$t('permission.roleplaceholder'),
          trigger: 'blur'
        }
        ],

        checkPass: [{
          required: true,
          message: this.$t('permission.reinputpassword'),
          trigger: 'blur'
        }, {
          validator: validateChangePass
        }]
      },
      loading: true,
      selected: [],
      dialogCreateVisible: false,
      dialogUpdateVisible: false,
      createLoading: false,
      updateLoading: false
    }
  },
  mounted: function() {
    this.getUsers()
  },
  methods: {
    tableSelectionChange(val) {
      this.selected = val
    },
    // Reset form
    reset() {
      this.$refs.create.resetFields()
    },
    setCurrent(user) {
      this.update.username = user.username
      this.update.roles = user.prolesone
      this.update.password = user.password
      this.dialogUpdateVisible = true
    },
    // Get User list
    getUsers() {
      this.loading = true
      queryusers().then(res => {
        this.users = res.data
        this.loading = false
        console.log(res)
      }, err => {
        console.log(err)
      })
    },
    // Create new user
    createUser() {
      this.$refs.create.validate((valid) => {
        if (valid) {
          this.createLoading = true
          const newuser = {}
          newuser.username = this.create.username
          newuser.password = this.create.password
          newuser.roles = []
          newuser.roles.push(this.create.roles)
          adduser(newuser).then(res => {
            this.$message.success(this.$t('permission.createusersuccess'))
            this.dialogCreateVisible = false
            this.createLoading = false
            this.reset()
            this.getUsers()
          }).catch((res) => {
            this.$message.error(res.message)
            this.createLoading = false
          })
        } else {
          return false
        }
      })
    },

    // Update user
    updateUser() {
      this.$refs.update.validate((valid) => {
        if (valid) {
          this.updateLoading = true
          const updateuser = {}
          updateuser.username = this.update.username
          updateuser.password = this.update.password
          updateuser.roles = []
          updateuser.roles.push(this.update.roles)
          modifyuser(updateuser).then(res => {
            this.$message.success(this.$t('permission.modifyusersuccess'))
            this.dialogUpdateVisible = false
            this.updateLoading = false
            this.getUsers()
          }).catch((res) => {
            this.$message.error(res.message)
            this.updateLoading = false
          })
        } else {
          return false
        }
      })
    },
    // Remove one user
    removeUser(user) {
      this.$confirm(this.$t('permission.deleteuserconfirm') + user.username + '?', '', {
        type: 'warning'
      }).then(() => {
        const username = { username: user.username }
        deleteuser(username).then(res => {
          this.$message.success(this.$t('permission.deleteusersuccess') + user.username + '!')
          this.getUsers()
          console.log(user.id)
        }).catch((res) => {
          this.$message.error(this.$t('permission.deleteuserfail'))
        })
      }).catch(() => {
        this.$message.info(this.$t('permission.operationcancel'))
      })
    }
  }
}
</script>
