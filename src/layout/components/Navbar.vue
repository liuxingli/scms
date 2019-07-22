<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="right-menu-item hover-effect" trigger="click">
        <span class="el-dropdown-link">{{ name }} <i class="el-icon-arrow-down el-icon--right" /></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span style="display:block;" @click="dialogUpdateVisible = true">{{ $t('navbar.changepassword') }}</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <lang-select class="right-menu-item hover-effect" />
    </div>

    <el-dialog width="30%" :visible.sync="dialogUpdateVisible" :title="$t('navbar.changepasswordtitle')" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form id="#update" ref="update" :model="update" :rules="modifyrules" label-width="200px">
        <el-form-item :label="$t('permission.newpassword')" prop="password">
          <el-input v-model="update.password" type="password" show-password="true" auto-complete="off" />
        </el-form-item>

        <el-form-item :label="$t('permission.confirmpassword')" prop="checkPass">
          <el-input v-model="update.checkPass" type="password" show-password="true" />
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
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import LangSelect from '@/components/LangSelect'
import { updatepassword } from '@/api/user'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    LangSelect
  },

  data: function() {
    const validateChangePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('permission.reinputpassword')))
      } else if (value !== this.update.password) {
        callback(new Error(this.$t('permission.unmatchpassword')))
      } else {
        callback()
      }
    }

    return {
      update: {
        password: '',
        checkPass: ''
      },

      modifyrules: {
        password: [{
          required: true,
          message: this.$t('permission.passwordplaceholder'),
          trigger: 'blur'
        }, {
          min: 6,
          max: 18,
          message: this.$t('permission.passwordlenhint')
        }],

        checkPass: [{
          required: true,
          message: this.$t('permission.reinputpassword'),
          trigger: 'blur'
        }, {
          validator: validateChangePass
        }]
      },
      dialogUpdateVisible: false,
      updateLoading: false
    }
  },

  computed: {
    ...mapGetters([
      'name',
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },

    updateUser() {
      this.$refs.update.validate((valid) => {
        if (valid) {
          this.updateLoading = true
          updatepassword(this.update.password).then(res => {
            if (res.code === 20000) {
              this.$message.success(this.$t('permission.modifyusersuccess'))
              this.dialogUpdateVisible = false
              this.updateLoading = false
            } else {
              this.$message.error(res.message)
              this.updateLoading = false
            }
          }).catch((res) => {
            this.$message.error(res.message)
            this.updateLoading = false
          })
        } else {
          return false
        }
      })
    },

    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
  }
}
</style>
