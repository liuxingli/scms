<template>
  <div class="security-container">
    <el-form id="security" ref="securityform" :model="securityform" :rules="rules" label-width="400px" size="small">
      <el-form-item :label="$t('security.sessionlife')" prop="sessionlife">
        <el-input v-model="securityform.sessionlife" />
      </el-form-item>

      <el-form-item :label="$t('security.loginattempnum')" prop="loginattempnum">
        <el-input v-model="securityform.loginattempnum" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordlocktime')" prop="passwordlocktime">
        <el-input v-model="securityform.passwordlocktime" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordresuse')" prop="passwordresuse">
        <el-input v-model="securityform.passwordresuse" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordlifedays')" prop="passwordlifedays">
        <el-input v-model="securityform.passwordlifedays" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordgracedays')" prop="passwordgracedays">
        <el-input v-model="securityform.passwordgracedays" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordminlen')" prop="passwordminlen">
        <el-input v-model="securityform.passwordminlen" />
      </el-form-item>

      <el-form-item :label="$t('security.passwordcomplexity')" prop="passwordcomplexity">
        <el-input v-model="securityform.passwordcomplexity" />
      </el-form-item>

      <el-button type="primary" class="security-text" @click="submitsecurityForm">{{ $t('global.submit') }}</el-button>
    </el-form>
  </div>
</template>

<script>
import { getauthcfg, saveauthcfg } from '@/api/user'

export default {
  name: 'Security',

  data: function() {
    const checksessionlife = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[60:65535]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 60 || n > 65535) {
        callback(new Error('valid range::[60:65635]'))
      } else {
        callback()
      }
    }

    const checkloginmax = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[3:8]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 3 || n > 8) {
        callback(new Error('valid range::[3:8]'))
      } else {
        callback()
      }
    }

    const checklocktime = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[30:65535]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 30 || n > 65535) {
        callback(new Error('valid range::[30:65535]'))
      } else {
        callback()
      }
    }

    const checkreuse = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[0:3]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 0 || n > 3) {
        callback(new Error('valid range::[0:3]'))
      } else {
        callback()
      }
    }

    const checkpwlife = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[3:65535]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 3 || n > 65535) {
        callback(new Error('valid range::[3:65535'))
      } else {
        callback()
      }
    }

    const checkpwminlen = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[6:18]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 6 || n > 18) {
        callback(new Error('valid range::[6:18'))
      } else {
        callback()
      }
    }

    const checkpwcomplexity = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[1:4]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 1 || n > 4) {
        callback(new Error('valid range::[1:4'))
      } else {
        callback()
      }
    }

    return {
      loading: true,

      securityform: {
        sessionlife: '',
        loginattempnum: '',
        passwordlocktime: '',
        passwordresuse: '',
        passwordlifedays: '',
        passwordgracedays: '',
        passwordminlen: '',
        passwordcomplexity: ''
      },

      rules: {
        sessionlife: [
          { required: true, message: 'Mandatory' },
          { validator: checksessionlife, trigger: 'blur' }
        ],

        loginattempnum: [
          { required: true, message: 'Mandatory' },
          { validator: checkloginmax, trigger: 'blur' }
        ],

        passwordlocktime: [
          { required: true, message: 'Mandatory' },
          { validator: checklocktime, trigger: 'blur' }
        ],

        passwordresuse: [
          { required: true, message: 'Mandatory' },
          { validator: checkreuse, trigger: 'blur' }
        ],

        passwordlifedays: [
          { required: true, message: 'Mandatory' },
          { validator: checkpwlife, trigger: 'blur' }
        ],

        passwordgracedays: [
          { required: true, message: 'Mandatory' },
          { validator: checkpwlife, trigger: 'blur' }
        ],

        passwordminlen: [
          { required: true, message: 'Mandatory' },
          { validator: checkpwminlen, trigger: 'blur' }
        ],

        passwordcomplexity: [
          { required: true, message: 'Mandatory' },
          { validator: checkpwcomplexity, trigger: 'blur' }
        ]
      }
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    getvalues() {
      this.loading = true
      getauthcfg().then(res => {
        this.securityform = res.data
        this.loading = false
        console.log(res)
      }, err => {
        this.$message.error(this.$t('global.fetchfail'))
        console.log(err)
      })
    },

    submitsecurityForm() {
      this.$refs.securityform.validate((valid) => {
        if (valid) {
          saveauthcfg(this.securityform).then(res => {
            this.$message.success(this.$t('global.submitsuccess'))
            console.log(res)
          }, err => {
            this.$message.error(this.$t('global.submitfail'))
            console.log(err)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.security {
  &-container {
    margin: 50px;
    width: 40%;
  }
  &-text {
    font-size: 20px;
    line-height: 25px;
    margin:10px 5px 15px 350px;
  }
}
</style>
