<template>
  <div class="pm-container">
    <el-form id="pm" ref="pmform" :model="pmform" :rules="rules" label-width="250px" size="small">
      <el-form-item :label="$t('cpe.id_pm_enable')" prop="id_pm_enable">
        <el-switch
          v-model="pmform.id_pm_enable"
          :active-text="$t('global.switchon')"
          :inactive-text="$t('global.switchoff')"
          active-value="1"
          inactive-value="0"
        />
      </el-form-item>

      <el-form-item :label="$t('cpe.id_pm_url')" prop="id_pm_url">
        <el-input v-model="pmform.id_pm_url" />
      </el-form-item>

      <el-form-item :label="$t('cpe.id_pm_username')" prop="id_pm_username">
        <el-input v-model="pmform.id_pm_username" />
      </el-form-item>

      <el-form-item :label="$t('cpe.id_pm_password')" prop="id_pm_password">
        <el-input v-model="pmform.id_pm_password" />
      </el-form-item>

      <el-form-item :label="$t('cpe.id_pm_interval')" prop="id_pm_interval">
        <el-input v-model.number="pmform.id_pm_interval" />
      </el-form-item>

      <el-button type="primary" :disabled="submitpermission" class="pm-text" @click="submitpmForm">{{ $t('global.submit') }}</el-button>
    </el-form>
  </div>
</template>

<script>
import { getparameters, setparameters } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { isvalidateURL, convertBoolean } from '@/utils/checkrules'

export default {
  name: 'Acs',

  data: function() {
    const validatePeriod = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error('Please input number,Range:[1,65535] '))
      } else {
        if ((value < 1) || (value > 65535)) {
          callback(new Error('Valid Range:[1,65535] '))
        } else {
          callback()
        }
      }
    }

    return {
      loading: true,
      submitpermission: !checkPermission(['admin', 'operator']),

      pmform: {
        id_pm_enable: '',
        id_pm_url: '',
        id_pm_username: '',
        id_pm_password: '',
        id_pm_interval: ''
      },

      rules: {
        id_pm_url: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_pm_interval: [{
          validator: validatePeriod, trigger: 'blur'
        }]
      }
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true

      const ret1 = await getparameters(this.pmform)
      if (!ret1) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      this.pmform.id_pm_enable = convertBoolean(this.pmform.id_pm_enable)
      this.loading = false
    },

    submitpmForm() {
      this.$refs.pmform.validate((valid) => {
        if (valid) {
          this.loading = true
          if (setparameters(this.pmform)) {
            this.$message.success(this.$t('global.submitsuccess'))
          } else {
            this.$message.error(this.$t('global.submitfail'))
          }
          this.loading = true
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pm {
  &-container {
    margin: 50px;
    width: 40%;
  }
  &-text {
    font-size: 20px;
    line-height: 25px;
    margin:10px 5px 15px 250px;
  }
}
</style>
