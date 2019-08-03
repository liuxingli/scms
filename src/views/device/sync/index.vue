<template>
  <div class="sync-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="$t('sync.synctitle')" name="sync">
        <el-form id="sync" ref="syncform" :model="syncform" :rules="rules" label-width="250px" size="small">
          <el-form-item :label="$t('cpe.id_currentsyncmode')" prop="id_currentsyncmode">
            <el-input v-model="syncform.id_currentsyncmode" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncstatus')" prop="id_syncstatus">
            <el-input v-model="syncform.id_syncstatus" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncsucctime')" prop="id_syncsucctime">
            <el-input v-model="syncform.id_syncsucctime" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncswitchflg')" prop="id_syncswitchflg">
            <el-switch
              v-model="syncform.id_syncswitchflg"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncmode1')" prop="id_syncmode1">
            <el-select v-model="syncform.id_syncmode1">
              <el-option
                v-for="item in sync_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncmode2')" prop="id_syncmode2">
            <el-select v-model="syncform.id_syncmode2">
              <el-option
                v-for="item in sync_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncmode3')" prop="id_syncmode3">
            <el-select v-model="syncform.id_syncmode3">
              <el-option
                v-for="item in sync_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_syncfailhandling')" prop="id_syncfailhandling">
            <el-select v-model="syncform.id_syncfailhandling">
              <el-option
                v-for="item in handling_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <div v-if="qualplatform">
            <el-form-item :label="$t('cpe.id_frameshift')" prop="id_frameshift">
              <el-input v-model="syncform.id_frameshift" />
            </el-form-item>
          </div>
          <div v-else>
            <el-form-item :label="$t('cpe.id_timingcorroffset')" prop="id_timingcorroffset">
              <el-input v-model="syncform.id_timingcorroffset" />
            </el-form-item>
          </div>

          <el-button type="primary" :disabled="submitpermission" class="sync-text" @click="submitsyncForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('sync.gpstitle')" name="gps">
        <el-form id="gps" ref="gpsform" :model="gpsform" :rules="rules" label-width="250px" size="small">
          <el-form-item :label="$t('cpe.id_gpsequipped')" prop="id_gpsequipped">
            <el-input v-model="gpsform.id_gpsequipped" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpsscanstatus')" prop="id_gpsscanstatus">
            <el-input v-model="gpsform.id_gpsscanstatus" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpserrinfo')" prop="id_gpserrinfo">
            <el-input v-model="gpsform.id_gpserrinfo" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpslastscantime')" prop="id_gpslastscantime">
            <el-input v-model="gpsform.id_gpslastscantime" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpslastsucctime')" prop="id_gpslastsucctime">
            <el-input v-model="gpsform.id_gpslastsucctime" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpsfix')" prop="id_gpsfix">
            <el-input v-model="gpsform.id_gpsfix" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpslatitude')" prop="id_gpslatitude">
            <el-input v-model="gpsform.id_gpslatitude" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpslongitude')" prop="id_gpslongitude">
            <el-input v-model="gpsform.id_gpslongitude" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpselevation')" prop="id_gpselevation">
            <el-input v-model="gpsform.id_gpselevation" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpsstatellites')" prop="id_gpsstatellites">
            <el-input v-model="gpsform.id_gpsstatellites" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpsstability')" prop="id_gpsstability">
            <el-input v-model="gpsform.id_gpsstability" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_gpspostuncertain')" prop="id_gpspostuncertain">
            <el-input v-model="gpsform.id_gpspostuncertain" :disabled="true" />
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('sync.ptptitle')" name="ptp">
        <el-form id="ptp" ref="ptpform" :model="ptpform" :rules="rules" label-width="200px" size="small">
          <div v-if="qualplatform">
            <el-form-item :label="$t('cpe.id_ptp_qual_status')" prop="id_ptp_qual_status">
              <el-input v-model="ptpform.id_ptp_qual_status" :disabled="true" />
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_qual_transport')" prop="id_ptp_qual_transport">
              <el-select v-model="ptpform.id_ptp_qual_transport">
                <el-option
                  v-for="item in qual_transport_options"
                  :key="item.value"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_qual_role')" prop="id_ptp_qual_role">
              <el-select v-model="ptpform.id_ptp_qual_role">
                <el-option
                  v-for="item in role_options"
                  :key="item.value"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_qual_secgw')" prop="id_ptp_qual_secgw">
              <el-input v-model="ptpform.id_ptp_qual_secgw" />
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_qual_master')" prop="id_ptp_qual_master">
              <el-input v-model="ptpform.id_ptp_qual_master" />
            </el-form-item>

          </div>
          <div v-else>
            <el-form-item :label="$t('cpe.id_ptp_brcm_status')" prop="id_ptp_brcm_status">
              <el-input v-model="ptpform.id_ptp_brcm_status" />
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_brcm_transport')" prop="id_ptp_brcm_transport">
              <el-select v-model="ptpform.id_ptp_brcm_transport">
                <el-option
                  v-for="item in bcm_transport_options"
                  :key="item.value"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_brcm_role')" prop="id_ptp_brcm_role">
              <el-select v-model="ptpform.id_ptp_brcm_role">
                <el-option
                  v-for="item in role_options"
                  :key="item.value"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_brcm_secgw')" prop="id_ptp_brcm_secgw">
              <el-input v-model="ptpform.id_ptp_brcm_secgw" />
            </el-form-item>

            <el-form-item :label="$t('cpe.id_ptp_brcm_master')" prop="id_ptp_brcm_master">
              <el-input v-model="ptpform.id_ptp_brcm_master" />
            </el-form-item>
          </div>

          <el-button type="primary" :disabled="submitpermission" class="sync-text" @click="submitptpForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('sync.sniffertitle')" name="sniffer">
        <el-form id="sniffer" ref="snifferform" :model="snifferform" :rules="rules" label-width="250px" size="small">
          <el-form-item :label="$t('cpe.id_nl_checkrsp')" prop="id_nl_checkrsp">
            <el-switch
              v-model="snifferform.id_nl_checkrsp"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_checkbw')" prop="id_nl_checkbw">
            <el-switch
              v-model="snifferform.id_nl_checkbw"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_donorbwthreshold')" prop="id_nl_donorbwthreshold">
            <el-select v-model="snifferform.id_nl_donorbwthreshold">
              <el-option
                v-for="item in band_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_donorrsrpthreshold')" prop="id_nl_donorrsrpthreshold">
            <el-input v-model="snifferform.id_nl_donorrsrpthreshold" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_earfcndllist')" prop="id_nl_earfcndllist">
            <el-input v-model="snifferform.id_nl_earfcndllist" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_successrat')" prop="id_nl_successrat">
            <el-input v-model="snifferform.id_nl_successrat" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_successearfcn')" prop="id_nl_successearfcn">
            <el-input v-model="snifferform.id_nl_successearfcn" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_nl_sucesspci')" prop="id_nl_sucesspci">
            <el-input v-model="snifferform.id_nl_sucesspci" :disabled="true" />
          </el-form-item>
          <el-button type="primary" :disabled="submitpermission" class="sync-text" @click="submitsnifferForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('sync.timetitle')" name="time">
        <el-form id="time" ref="timeform" :model="timeform" :rules="rules" label-width="200px" size="small">
          <el-form-item :label="$t('cpe.id_time_ntpstatus')" prop="id_time_ntpstatus">
            <el-input v-model="timeform.id_time_ntpstatus" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_ntpserver1')" prop="id_time_ntpserver1">
            <el-input v-model="timeform.id_time_ntpserver1" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_ntpserver2')" prop="id_time_ntpserver2">
            <el-input v-model="timeform.id_time_ntpserver2" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_ntpserver3')" prop="id_time_ntpserver3">
            <el-input v-model="timeform.id_time_ntpserver3" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_ntpserver4')" prop="id_time_ntpserver4">
            <el-input v-model="timeform.id_time_ntpserver4" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_ntpserver5')" prop="id_time_ntpserver5">
            <el-input v-model="timeform.id_time_ntpserver5" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_secgw')" prop="id_time_secgw">
            <el-input v-model="timeform.id_time_secgw" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_timezone')" prop="id_time_timezone">
            <el-input v-model="timeform.id_time_timezone" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_time_currentsystem')" prop="id_time_currentsystem">
            <el-input v-model="timeform.id_time_currentsystem" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="sync-text" @click="submittimeForm">{{ $t('global.submit') }}</el-button>
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
  name: 'Sync',

  data: function() {
    const validatecandfreqlist = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[0:262143]'))
      }

      const strs = value.split(/[.]|,/)
      let checkresult = true
      for (var str of strs) {
        const n = Math.floor(Number(str))
        if (n === Infinity && String(n) !== str || n < 0 || n > 262143) {
          checkresult = false
        }
      }

      if (!checkresult) {
        callback(new Error('valid range:[0:262143]'))
      } else {
        callback()
      }
    }

    const validatersrp = (rule, value, callback) => {
      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < -60 || n > 50) {
        callback(new Error('valid range::[-60:50]'))
      } else {
        callback()
      }
    }

    return {
      loading: true,
      activeName: 'sync',
      submitpermission: !checkPermission(['admin', 'operator']),
      qualplatform: false,

      syncform: {
        id_currentsyncmode: '',
        id_syncstatus: '',
        id_syncsucctime: '',
        id_syncswitchflg: '',
        id_syncmode1: '',
        id_syncmode2: '',
        id_syncmode3: '',
        id_syncfailhandling: '',
        id_timingcorroffset: '',
        id_frameshift: ''
      },

      gpsform: {
        id_gpsequipped: '',
        id_gpsscanstatus: '',
        id_gpserrinfo: '',
        id_gpslastscantime: '',
        id_gpslastsucctime: '',
        id_gpsfix: '',
        id_gpslatitude: '',
        id_gpslongitude: '',
        id_gpselevation: '',
        id_gpsstatellites: '',
        id_gpsstability: '',
        id_gpspostuncertain: ''
      },

      ptpform: {
        id_ptp_brcm_status: '',
        id_ptp_brcm_transport: '',
        id_ptp_brcm_role: '',
        id_ptp_brcm_secgw: '',
        id_ptp_brcm_master: '',
        id_ptp_qual_status: '',
        id_ptp_qual_transport: '',
        id_ptp_qual_role: '',
        id_ptp_qual_secgw: '',
        id_ptp_qual_master: ''
      },

      snifferform: {
        id_nl_checkrsp: '',
        id_nl_checkbw: '',
        id_nl_donorbwthreshold: '',
        id_nl_donorrsrpthreshold: '',
        id_nl_earfcndllist: '',
        id_nl_successrat: '',
        id_nl_successearfcn: '',
        id_nl_sucesspci: ''
      },

      timeform: {
        id_time_ntpstatus: '',
        id_time_ntpserver1: '',
        id_time_ntpserver2: '',
        id_time_ntpserver3: '',
        id_time_ntpserver4: '',
        id_time_ntpserver5: '',
        id_time_secgw: '',
        id_time_timezone: '',
        id_time_currentsystem: ''
      },

      platform: {
        id_platform: ''
      },

      rules: {
        id_ptp_brcm_secgw: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_ptp_brcm_master: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_ptp_qual_secgw: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_ptp_qual_master: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_nl_donorrsrpthreshold: [{
          validator: validatersrp, trigger: 'blur'
        }],

        id_nl_earfcndllist: [{
          validator: validatecandfreqlist, trigger: 'blur'
        }],

        id_time_ntpserver1: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_time_ntpserver2: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_time_ntpserver3: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_time_ntpserver4: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_time_ntpserver5: [{
          validator: isvalidateURL, trigger: 'blur'
        }],

        id_time_secgw: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }]
      },

      bcm_transport_options: [{
        value: 'Ethernet'
      }, {
        value: 'UDPv4'
      }, {
        value: 'UDPv6'
      }],

      qual_transport_options: [{
        value: 'NONE'
      }, {
        value: 'Ethernet'
      }, {
        value: 'UDP'
      }],

      role_options: [{
        value: 'MASTER'
      }, {
        value: 'SLAVE'
      }],

      handling_options: [{
        value: 'Ignore'
      }, {
        value: 'Restart'
      }, {
        value: 'Reboot'
      }],

      band_options: [{
        value: '6'
      }, {
        value: '15'
      }, {
        value: '25'
      }, {
        value: '50'
      }, {
        value: '75'
      }, {
        value: '100'
      }],

      sync_options: [{
        value: 'GNSS'
      }, {
        value: 'IEEE1588V2'
      }, {
        value: '1588ACR'
      }, {
        value: 'Sniffer'
      }, {
        value: 'Freedom'
      }]
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true

      const ret1 = await getparameters(this.syncform)
      const ret2 = await getparameters(this.gpsform)
      const ret3 = await getparameters(this.ptpform)
      const ret4 = await getparameters(this.snifferform)
      const ret5 = await getparameters(this.timeform)
      const ret6 = await getparameters(this.platform)

      if (!ret1 || !ret2 || !ret3 || !ret4 || !ret5 || !ret6) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      this.qualplatform = (this.platform.id_platform.toLowerCase().indexOf('brcm') === -1)
      this.syncform.id_syncswitchflg = convertBoolean(this.syncform.id_syncswitchflg)
      this.snifferform.id_nl_checkrsp = convertBoolean(this.snifferform.id_nl_checkrsp)
      this.snifferform.id_nl_checkbw = convertBoolean(this.snifferform.id_nl_checkbw)
      this.loading = false
    },

    submitsyncForm() {
      this.$refs.syncform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          submitform.id_syncswitchflg = this.syncform.id_syncswitchflg
          submitform.id_syncmode1 = this.syncform.id_syncmode1
          submitform.id_syncmode2 = this.syncform.id_syncmode2
          submitform.id_syncmode3 = this.syncform.id_syncmode3
          submitform.id_syncfailhandling = this.syncform.id_syncfailhandling
          submitform.id_timingcorroffset = this.syncform.id_timingcorroffset
          submitform.id_frameshift = this.syncform.id_frameshift

          if (setparameters(submitform)) {
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

    submitptpForm() {
      this.$refs.ptpform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          if (this.qualplatform) {
            submitform.id_ptp_qual_transport = this.ptpform.id_ptp_qual_transport
            submitform.id_ptp_qual_role = this.ptpform.id_ptp_qual_role
            submitform.id_ptp_qual_secgw = this.ptpform.id_ptp_qual_secgw
            submitform.id_ptp_qual_master = this.ptpform.id_ptp_qual_master
          } else {
            submitform.id_ptp_brcm_transport = this.ptpform.id_ptp_brcm_transport
            submitform.id_ptp_brcm_role = this.ptpform.id_ptp_brcm_role
            submitform.id_ptp_brcm_secgw = this.ptpform.id_ptp_brcm_secgw
            submitform.id_ptp_brcm_master = this.ptpform.id_ptp_brcm_master
          }

          if (setparameters(submitform)) {
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

    submitsnifferForm() {
      this.$refs.snifferform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          submitform.id_nl_checkrsp = this.snifferform.id_nl_checkrsp
          submitform.id_nl_checkbw = this.snifferform.id_nl_checkbw
          submitform.id_nl_donorbwthreshold = this.snifferform.id_nl_donorbwthreshold
          submitform.id_nl_donorrsrpthreshold = this.snifferform.id_nl_donorrsrpthreshold
          submitform.id_nl_earfcndllist = this.snifferform.id_nl_earfcndllist

          if (setparameters(submitform)) {
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

    submittimeForm() {
      this.$refs.timeform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          submitform.id_time_ntpserver1 = this.timeform.id_time_ntpserver1
          submitform.id_time_ntpserver2 = this.timeform.id_time_ntpserver2
          submitform.id_time_ntpserver3 = this.timeform.id_time_ntpserver3
          submitform.id_time_ntpserver4 = this.timeform.id_time_ntpserver4
          submitform.id_time_ntpserver5 = this.timeform.id_time_ntpserver5
          submitform.id_time_secgw = this.timeform.id_time_secgw
          submitform.id_time_timezone = this.timeform.id_time_timezone
          submitform.id_time_currentsystem = this.timeform.id_time_currentsystem

          if (setparameters(submitform)) {
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
.sync {
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
