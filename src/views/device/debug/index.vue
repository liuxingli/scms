<template>
  <div class="debug-container">
    <el-tabs v-model="activeName" type="border-card">

      <el-tab-pane :label="$t('debug.logsrvtitle')" name="logserver">
        <el-form id="logserver" ref="logserverform" :model="logserverform" :rules="rules" label-width="250px" size="mini">
          <el-form-item :label="$t('cpe.id_logsrv_connpolicy')" prop="id_logsrv_connpolicy">
            <el-radio-group v-model="logserverform.id_logsrv_connpolicy">
              <el-radio label="Always">Always</el-radio>
              <el-radio label="ConfigChanged">ConfigChanged</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_serverip')" prop="id_logsrv_serverip">
            <el-input v-model="logserverform.id_logsrv_serverip" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_localinterface')" prop="id_logsrv_localinterface">
            <el-input v-model="logserverform.id_logsrv_localinterface" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_cpuhport')" prop="id_logsrv_cpuhport">
            <el-input v-model="logserverform.id_logsrv_cpuhport" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_cpulport')" prop="id_logsrv_cpulport">
            <el-input v-model="logserverform.id_logsrv_cpulport" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_cpuhlogpath')" prop="id_logsrv_cpuhlogpath">
            <el-input v-model="logserverform.id_logsrv_cpuhlogpath" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_logsrv_cpullogpath')" prop="id_logsrv_cpullogpath">
            <el-input v-model="logserverform.id_logsrv_cpullogpath" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="debug-text" @click="submitlogserverForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('debug.devicelogtitle')" name="devicelog">
        <el-form id="devicelog" ref="devicelogform" :model="devicelogform" :rules="rules" label-width="250px" size="mini">
          <el-form-item :label="$t('cpe.id_devicelog_uploadurl')" prop="id_devicelog_uploadurl">
            <el-input v-model="devicelogform.id_devicelog_uploadurl" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_devicelog_username')" prop="id_devicelog_username">
            <el-input v-model="devicelogform.id_devicelog_username" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_devicelog_password')" prop="id_devicelog_password">
            <el-input v-model="devicelogform.id_devicelog_password" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_devicelog_periodicflg')" prop="id_devicelog_periodicflg">
            <el-switch
              v-model="devicelogform.id_devicelog_periodicflg"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_devicelog_interval')" prop="id_devicelog_interval">
            <el-input v-model="devicelogform.id_devicelog_interval" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="debug-text" @click="submitdeviceForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('debug.uploadtitle')" name="upload">
        <el-form id="upload" ref="uploadform" :model="uploadform" :rules="rules" label-width="250px" size="mini">
          <el-form-item :label="$t('cpe.id_upload_enable')" prop="id_upload_enable">
            <el-switch
              v-model="uploadform.id_upload_enable"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_url')" prop="id_upload_url">
            <el-input v-model="uploadform.id_upload_url" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_username')" prop="id_upload_username">
            <el-input v-model="uploadform.id_upload_username" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_password')" prop="id_upload_password">
            <el-input v-model="uploadform.id_upload_password" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_periodic')" prop="id_upload_periodic">
            <el-checkbox v-model="peirodicuploadflg">VendorTraces</el-checkbox>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_maxexceed')" prop="id_upload_maxexceed">
            <el-checkbox v-model="maxexceedflg">DeviceLog</el-checkbox>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_alarm')" prop="id_upload_alarm">
            <el-checkbox-group v-model="alarmarray">
              <el-checkbox label="KernelLog" />
              <el-checkbox label="CpulKernelLog" />
            </el-checkbox-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_upload_poweron')" prop="id_upload_poweron">
            <el-checkbox-group v-model="poweronarray">
              <el-checkbox label="DeviceLog" />
              <el-checkbox label="VendorTraces" />
              <el-checkbox label="CoreDumps" />
              <el-checkbox label="Tcpdump" />
              <el-checkbox label="CpulKernelLog" />
              <el-checkbox label="TmpFileList" />
              <el-checkbox label="VarLog" />
              <el-checkbox label="FsmLog" />
              <el-checkbox label="ContinuousLogging" />
              <el-checkbox label="StrongwanLog" />
            </el-checkbox-group>
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="debug-text" @click="submituploadForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('debug.dumptitle')" name="dump">
        <el-form id="dump" ref="dumpfilelist" :model="dumpfileform" :rules="rules" label-width="250px" size="mini">
          <el-form-item v-for="item in dumpfileform.dumpfilelist" :key="item" :label="item">
            <el-button type="primary" :disabled="submitpermission" class="debug-dump" @click="downloadclick(item)">Export</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getparameters, setparameters, getlogdumpfilelist, downloadfile } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { isvalidateipv4v6, convertBoolean, isvalidateURL } from '@/utils/checkrules'

export default {
  name: 'Debug',

  data: function() {
    const validateInte = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[1:65535]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 1 || n > 65535) {
        callback(new Error('valid range::[1:65535]'))
      } else {
        callback()
      }
    }

    return {
      loading: true,
      activeName: 'logserver',
      submitpermission: !checkPermission(['admin', 'operator']),
      peirodicuploadflg: false,
      maxexceedflg: false,
      alarmarray: [],
      poweronarray: [],

      dumpfileform: {
        dumpfilelist: []
      },

      logserverform: {
        id_logsrv_connpolicy: '',
        id_logsrv_serverip: '',
        id_logsrv_localinterface: '',
        id_logsrv_cpuhport: '',
        id_logsrv_cpulport: '',
        id_logsrv_cpuhlogpath: '',
        id_logsrv_cpullogpath: ''
      },

      devicelogform: {
        id_devicelog_uploadurl: '',
        id_devicelog_username: '',
        id_devicelog_password: '',
        id_devicelog_periodicflg: '',
        id_devicelog_interval: ''
      },

      uploadform: {
        id_upload_enable: '',
        id_upload_url: '',
        id_upload_username: '',
        id_upload_password: '',
        id_upload_periodic: '',
        id_upload_maxexceed: '',
        id_upload_alarm: '',
        id_upload_poweron: ''
      },

      rules: {
        id_logsrv_serverip: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_devicelog_uploadurl: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_devicelog_interval: [{
          validator: validateInte, trigger: 'blur'
        }],

        id_upload_url: [{
          validator: isvalidateURL, trigger: 'blur'
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

      // get cell number firstly
      const ret1 = await getparameters(this.logserverform)
      const ret2 = await getparameters(this.devicelogform)
      const ret3 = await getparameters(this.uploadform)
      let ret4 = false

      // get dump file list
      const res = await getlogdumpfilelist()
      if (res.code === 20000) {
        ret4 = true
        this.dumpfileform.dumpfilelist = res.data
      }

      if (!ret1 || !ret2 || !ret3 || !ret4) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      // convert true-->1, false -> 0
      this.devicelogform.id_devicelog_periodicflg = convertBoolean(this.devicelogform.id_devicelog_periodicflg)
      this.uploadform.id_upload_enable = convertBoolean(this.uploadform.id_upload_enable)

      // check periodic upload flag
      this.peirodicuploadflg = (this.uploadform.id_upload_periodic.indexOf('VendorTraces') !== -1)
      this.maxexceedflg = (this.uploadform.id_upload_maxexceed.indexOf('DeviceLog') !== -1)
      this.alarmarray = this.uploadform.id_upload_alarm.split(',')
      this.poweronarray = this.uploadform.id_upload_poweron.split(',')

      this.loading = false
    },

    submitlogserverForm() {
      this.$refs.logserverform.validate((valid) => {
        if (valid) {
          this.loading = true

          if (setparameters(this.logserverform)) {
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

    submitdeviceForm() {
      this.$refs.devicelogform.validate((valid) => {
        if (valid) {
          this.loading = true

          if (setparameters(this.devicelogform)) {
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

    submituploadForm() {
      this.$refs.uploadform.validate((valid) => {
        if (valid) {
          this.loading = true

          // update uploadform
          this.uploadform.id_upload_periodic = this.peirodicuploadflg ? 'VendorTraces' : ''
          this.uploadform.id_upload_maxexceed = this.maxexceedflg ? 'DeviceLog' : ''
          this.uploadform.id_upload_alarm = this.alarmarray.join()
          this.uploadform.id_upload_poweron = this.poweronarray.join()

          if (setparameters(this.uploadform)) {
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

    downloadclick(filename) {
      if (!downloadfile('log', filename)) {
        this.$message.error(this.$t('global.filedownloadfail'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.debug {
  &-container {
    width: 40%;
    margin-left:40px;
    margin-top:20px;
    margin-bottom:-10px;
    line-height: 10px;
  }
  &-text {
    font-size: 20px;
    line-height: 10px;
    margin:5px 10px 5px 250px;
  }
  &-dump {
    font-size: 20px;
    line-height: 10px;
  }
}
</style>
