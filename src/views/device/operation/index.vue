<template>
  <div class="operation-container">
    <el-form id="operation" ref="operationform" :model="operationform" label-width="200px" size="small">
      <el-form-item :label="$t('cpe.id_hwwatchdog_enable')" prop="id_hwwatchdog_enable">
        <el-col :span="8">
          <el-switch
            v-model="operationform.id_hwwatchdog_enable"
            :active-text="$t('global.switchon')"
            :inactive-text="$t('global.switchoff')"
            active-value="1"
            inactive-value="0"
          />
        </el-col>
        <el-col :span="6" :offset="1">
          <el-button type="primary" style="width: 100%;" :disabled="submitpermission" @click="submitoperationForm">{{ $t('global.submit') }}</el-button>
        </el-col>
      </el-form-item>

      <el-form-item :label="$t('operation.pingtitle')">
        <el-col :span="8">
          <el-input v-model="pingdstaddr" placeholder="Input remote IP" />
        </el-col>
        <el-col :span="6" :offset="1">
          <el-button type="primary" style="width: 100%;" :disabled="submitpermission" @click="submitPing">Ping</el-button>
        </el-col>
      </el-form-item>

      <el-form-item :label="$t('operation.reboot')">
        <el-col :span="8" />
        <el-col :span="8">
          <el-button type="primary" style="width: 100%;" :disabled="submitpermission" @click="submitReboot">{{ $t('operation.reboot') }}</el-button>
        </el-col>
      </el-form-item>

      <el-form-item :label="$t('operation.factoryreboot')">
        <el-col :span="8" />
        <el-col :span="8">
          <el-button type="primary" style="width: 100%;" :disabled="submitpermission" @click="submitFactoryreset"> {{ $t('operation.factoryreboot') }}</el-button>
        </el-col>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { getparameters, setparameters, ping, reboot, factoryreset } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { convertBoolean } from '@/utils/checkrules'

export default {
  name: 'Acs',

  data: function() {
    return {
      loading: true,
      pingdstaddr: '',
      submitpermission: !checkPermission(['admin', 'operator']),

      operationform: {
        id_hwwatchdog_enable: ''
      }
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true

      const ret1 = await getparameters(this.operationform)
      if (!ret1) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      this.operationform.id_hwwatchdog_enable = convertBoolean(this.operationform.id_hwwatchdog_enable)
      this.loading = false
    },

    submitoperationForm() {
      if (setparameters(this.operationform)) {
        this.$message.success(this.$t('global.submitsuccess'))
      } else {
        this.$message.error(this.$t('global.submitfail'))
      }
    },

    submitPing() {
      ping(this.pingdstaddr).then(response => {
        if (response.code === 20000) {
          this.$message.success(this.$t('operation.pingsuccess'))
        } else {
          this.$message.error(this.$t('operation.pingfail') + response.message)
        }
      }, err => {
        this.$message.error(this.$t('operation.pingfail') + err)
      })
    },

    submitReboot() {
      reboot().then(response => {
        this.$message.success(this.$t('operation.rebootsuccess'))
      }, err => {
        this.$message.error(this.$t('operation.rebootfail') + err)
      })
    },

    submitFactoryreset() {
      factoryreset().then(response => {
        this.$message.success(this.$t('operation.factoryrebootsuccess'))
      }, err => {
        this.$message.error(this.$t('operation.factoryrebootfail') + err)
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.operation {
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
