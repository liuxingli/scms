<template>
  <div class="acs-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="$t('acs.servertitle')" name="hems">
        <el-form id="acsserver" ref="hemsform" :model="hemsform" :rules="rules" label-width="200px" size="small">
          <el-form-item :label="$t('cpe.id_hemsurl')" prop="id_hemsurl">
            <el-input v-model="hemsform.id_hemsurl" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_hemsuser')" prop="id_hemsuser">
            <el-input v-model="hemsform.id_hemsuser" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_hemspassword')" prop="id_hemspassword">
            <el-input v-model="hemsform.id_hemspassword" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_secgwaddr')" prop="id_secgwaddr">
            <el-input v-model="hemsform.id_secgwaddr" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_perinformflg')" prop="id_perinformflg">
            <el-switch
              v-model="hemsform.id_perinformflg"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_perinforminterv')" prop="id_perinforminterv">
            <el-input v-model.number="hemsform.id_perinforminterv" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="acs-text" @click="submithemsForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('acs.clienttitle')" name="cpe">
        <el-form id="cpe" ref="cpeform" :model="cpeform" :rules="rules" label-width="250px" size="small">
          <el-form-item :label="$t('cpe.id_cpeconnurl')" prop="id_cpeconnurl">
            <el-input v-model="cpeform.id_cpeconnurl" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cpeconnauthflg')" prop="id_cpeconnauthflg">
            <el-switch
              v-model="cpeform.id_cpeconnauthflg"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cpeconnuser')" prop="id_cpeconnuser">
            <el-input v-model="cpeform.id_cpeconnuser" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cpeconnpassword')" prop="id_cpeconnpassword">
            <el-input v-model="cpeform.id_cpeconnpassword" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="acs-text" @click="submitcpeForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('acs.securitytitle')" name="security">
        <el-form id="security" ref="securityform" :model="securityform" :rules="rules" label-width="200px" size="small">
          <el-form-item :label="$t('cpe.id_cpeconntlsver')" prop="id_cpeconntlsver">
            <el-select v-model="securityform.id_cpeconntlsver">
              <el-option
                v-for="item in tls_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="acs-text" @click="submitsecurityForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getparameters, setparameters } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { isvalidateipv4v6, isvalidateURL, convertBoolean } from '@/utils/checkrules'

export default {
  name: 'Acs',

  data: function() {
    const validatePeriod = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error('Please input number'))
      } else {
        if ((value < 1) || (value > 2147483647)) {
          callback(new Error('Valid Range:[1,2147483647] '))
        } else {
          callback()
        }
      }
    }

    return {
      loading: true,
      activeName: 'hems',
      submitpermission: !checkPermission(['admin', 'operator']),

      hemsform: {
        id_hemsurl: '',
        id_hemsuser: '',
        id_hemspassword: '',
        id_secgwaddr: '',
        id_perinformflg: '',
        id_perinforminterv: ''
      },

      cpeform: {
        id_cpeconnurl: '',
        id_cpeconnauthflg: '',
        id_cpeconnuser: '',
        id_cpeconnpassword: ''
      },

      securityform: {
        id_cpeconntlsver: ''
      },

      rules: {
        id_hemsurl: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_secgwaddr: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_perinforminterv: [{
          validator: validatePeriod, trigger: 'blur'
        }]
      },

      tls_options: [{
        value: 'None'
      }, {
        value: 'TLS_v1'
      }, {
        value: 'TLS_v1_1'
      }, {
        value: 'TLS_v1_2'
      }]
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true

      const ret1 = await getparameters(this.hemsform)
      const ret2 = await getparameters(this.cpeform)
      const ret3 = await getparameters(this.securityform)

      if (!ret1 || !ret2 || !ret3) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      this.hemsform.id_perinformflg = convertBoolean(this.hemsform.id_perinformflg)
      this.cpeform.id_cpeconnauthflg = convertBoolean(this.cpeform.id_cpeconnauthflg)
      this.loading = false
    },

    submithemsForm() {
      this.$refs.hemsform.validate((valid) => {
        if (valid) {
          this.loading = true
          if (setparameters(this.hemsform)) {
            this.$message.success(this.$t('global.submitsuccess'))
          } else {
            this.$message.error(this.$t('global.submitfail'))
          }
          this.loading = true
        } else {
          return false
        }
      })
    },

    submitcpeForm() {
      this.$refs.cpeform.validate((valid) => {
        if (valid) {
          this.loading = true
          if (setparameters(this.cpeform)) {
            this.$message.success(this.$t('global.submitsuccess'))
          } else {
            this.$message.error(this.$t('global.submitfail'))
          }
          this.loading = true
        } else {
          return false
        }
      })
    },

    submitsecurityForm() {
      this.$refs.securityform.validate((valid) => {
        if (valid) {
          this.loading = true
          if (setparameters(this.securityform)) {
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
.acs {
  &-container {
    margin: 50px;
    width: 40%;
  }
  &-text {
    font-size: 15px;
    line-height: 10px;
    margin:10px 5px 15px 250px;
  }
}
</style>
