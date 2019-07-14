<template>
  <div class="cell-container">
    <el-tabs v-model="activeName" type="border-card">

      <el-tab-pane :label="$t('cell.commontitle')" name="common">
        <el-form id="common" ref="commonform" :model="commonform" :rules="rules" label-width="300px" size="mini">
          <el-form-item :label="$t('cpe.id_adminstate')" prop="id_adminstate">
            <el-switch
              v-model="commonform.id_adminstate"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_privatenwflg')" prop="id_privatenwflg">
            <el-switch
              v-model="commonform.id_privatenwflg"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_duplexmode')" prop="id_duplexmode">
            <el-radio-group v-model="commonform.id_duplexmode">
              <el-radio label="FDDMode">FDDMode</el-radio>
              <el-radio label="TDDMode">TDDMode</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_enbtype')" prop="id_enbtype">
            <el-radio-group v-model="commonform.id_enbtype">
              <el-radio label="0">MARCO_ENB</el-radio>
              <el-radio label="1">HOME_ENB</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_plmnid')" prop="id_plmnid">
            <el-input v-model="commonform.id_plmnid" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_tac')" prop="id_tac">
            <el-input v-model="commonform.id_tac" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_secgwserver')" prop="id_secgwserver">
            <el-input v-model="commonform.id_secgwserver" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_s1siglinksrv')" prop="id_s1siglinksrv">
            <el-input v-model="commonform.id_s1siglinksrv" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_s1retrymaxnum')" prop="id_s1retrymaxnum">
            <el-input v-model.number="commonform.id_s1retrymaxnum" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_s1status')" prop="id_s1status">
            <el-input v-model.number="commonform.id_s1status" :disabled="true" />
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="cell-text" @click="submitcommonForm">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('cell.cell1title')" name="cell1">
        <el-form id="cell1" ref="cell1form" :model="cell1form" :rules="rules" label-width="300px" size="mini">
          <el-form-item :label="$t('cpe.id_cell1_cellid')" prop="id_cell1_cellid">
            <el-input v-model="cell1form.id_cell1_cellid" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_opState')" prop="id_cell1_opState">
            <el-switch
              v-model="cell1form.id_cell1_opState"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
              :disabled="true"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_connuenum')" prop="id_cell1_connuenum">
            <el-input v-model="cell1form.id_cell1_connuenum" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_voltenum')" prop="id_cell1_voltenum">
            <el-input v-model="cell1form.id_cell1_voltenum" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_candfreqlist')" prop="id_cell1_candfreqlist">
            <el-input v-model="cell1form.id_cell1_candfreqlist" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_freqdl')" prop="id_cell1_freqdl">
            <el-input v-model="cell1form.id_cell1_freqdl " :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_frequl')" prop="id_cell1_frequl">
            <el-input v-model="cell1form.id_cell1_frequl" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_band')" prop="id_cell1_band">
            <el-input v-model="cell1form.id_cell1_band" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_candpcilist')" prop="id_cell1_candpcilist">
            <el-input v-model="cell1form.id_cell1_candpcilist" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_pci')" prop="id_cell1_pci">
            <el-input v-model="cell1form.id_cell1_pci" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_dlbandwidth')" prop="id_cell1_dlbandwidth">
            <el-select v-model="cell1form.id_cell1_dlbandwidth">
              <el-option
                v-for="item in band_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_ulbandwidth')" prop="id_cell1_ulbandwidth">
            <el-select v-model="cell1form.id_cell1_ulbandwidth">
              <el-option
                v-for="item in band_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_referencesignalpower')" prop="id_cell1_referencesignalpower">
            <el-input v-model="cell1form.id_cell1_referencesignalpower" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_pagain')" prop="id_cell1_pagain">
            <el-input v-model="cell1form.id_cell1_pagain" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_subframepattern')" prop="id_cell1_subframepattern">
            <el-input-number v-model="cell1form.id_cell1_subframepattern" :min="0" :max="6" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_specialsubframepattern')" prop="id_cell1_specialsubframepattern">
            <el-input-number v-model="cell1form.id_cell1_specialsubframepattern" :min="0" :max="8" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_txantennacount')" prop="id_cell1_txantennacount">
            <el-radio-group v-model="cell1form.id_cell1_txantennacount">
              <el-radio label="1">1</el-radio>
              <el-radio label="2">2</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_rxantennacount')" prop="id_cell1_rxantennacount">
            <el-radio-group v-model="cell1form.id_cell1_rxantennacount">
              <el-radio label="1">1</el-radio>
              <el-radio label="2">2</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="cell-text" @click="submitcell1Form">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('cell.cell2title')" name="cell2" :disabled="cell2disable">
        <el-form id="cell2" ref="cell2form" :model="cell2form" :rules="rules" label-width="300px" size="mini">
          <el-form-item :label="$t('cpe.id_cell1_cellid')" prop="id_cell2_cellid">
            <el-input v-model="cell2form.id_cell2_cellid" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_opState')" prop="id_cell2_opState">
            <el-switch
              v-model="cell2form.id_cell2_opState"
              :active-text="$t('global.switchon')"
              :inactive-text="$t('global.switchoff')"
              active-value="1"
              inactive-value="0"
              :disabled="true"
            />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_connuenum')" prop="id_cell2_connuenum">
            <el-input v-model="cell2form.id_cell2_connuenum" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_voltenum')" prop="id_cell2_voltenum">
            <el-input v-model="cell2form.id_cell2_voltenum" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_candfreqlist')" prop="id_cell2_candfreqlist">
            <el-input v-model="cell2form.id_cell2_candfreqlist" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_freqdl')" prop="id_cell2_freqdl">
            <el-input v-model="cell2form.id_cell2_freqdl" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_frequl')" prop="id_cell2_frequl">
            <el-input v-model="cell2form.id_cell2_frequl" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_band')" prop="id_cell2_band">
            <el-input v-model="cell2form.id_cell2_band" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_candpcilist')" prop="id_cell2_candpcilist">
            <el-input v-model="cell2form.id_cell2_candpcilist" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_pci')" prop="id_cell2_pci">
            <el-input v-model="cell2form.id_cell2_pci" :disabled="true" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_dlbandwidth')" prop="id_cell2_dlbandwidth">
            <el-select v-model="cell2form.id_cell2_dlbandwidth">
              <el-option
                v-for="item in band_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_ulbandwidth')" prop="id_cell2_ulbandwidth">
            <el-select v-model="cell2form.id_cell2_ulbandwidth">
              <el-option
                v-for="item in band_options"
                :key="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_referencesignalpower')" prop="id_cell2_referencesignalpower">
            <el-input v-model="cell2form.id_cell2_referencesignalpower" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_pagain')" prop="id_cell2_pagain">
            <el-input v-model="cell2form.id_cell2_pagain" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_subframepattern')" prop="id_cell2_subframepattern">
            <el-input-number v-model="cell2form.id_cell2_subframepattern" :min="0" :max="6" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_specialsubframepattern')" prop="id_cell2_specialsubframepattern">
            <el-input-number v-model="cell2form.id_cell2_specialsubframepattern" :min="0" :max="8" />
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_txantennacount')" prop="id_cell2_txantennacount">
            <el-radio-group v-model="cell2form.id_cell2_txantennacount">
              <el-radio label="1">1</el-radio>
              <el-radio label="2">2</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('cpe.id_cell1_rxantennacount')" prop="id_cell2_rxantennacount">
            <el-radio-group v-model="cell2form.id_cell2_rxantennacount">
              <el-radio label="1">1</el-radio>
              <el-radio label="2">2</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-button type="primary" :disabled="submitpermission" class="cell-text" @click="submitcell2Form">{{ $t('global.submit') }}</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getparameters, setparameters } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { isvalidateipv4v6, convertBoolean } from '@/utils/checkrules'

export default {
  name: 'Acs',

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

    const validatecandpcilist = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[0:503]'))
      }

      const strs = value.split(/[.]|,/)
      let checkresult = true
      for (var str of strs) {
        const n = Math.floor(Number(str))
        if (n === Infinity && String(n) !== str || n < 0 || n > 503) {
          checkresult = false
        }
      }

      if (!checkresult) {
        callback(new Error('valid range:[0:503]'))
      } else {
        callback()
      }
    }

    const validaterefpower = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[-60:50]'))
      }

      const strs = value.split(/[.]|,/)
      let checkresult = true
      for (var str of strs) {
        const n = Math.floor(Number(str))
        if (n === Infinity && String(n) !== str || n < -60 || n > 50) {
          checkresult = false
        }
      }

      if (!checkresult) {
        callback(new Error('valid range::[-60:50]'))
      } else {
        callback()
      }
    }

    const validatePAGain = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[0:50]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 0 || n > 50) {
        callback(new Error('valid range::[0:50]'))
      } else {
        callback()
      }
    }

    const validateS1maxRetry = (rule, value, callback) => {
      if (!value) {
        callback(new Error('valid range:[0:65535]'))
      }

      const n = Math.floor(Number(value))
      if (n === Infinity && String(n) !== value || n < 0 || n > 65535) {
        callback(new Error('valid range::[0:65635]'))
      } else {
        callback()
      }
    }

    return {
      loading: true,
      activeName: 'common',
      submitpermission: !checkPermission(['admin', 'operator']),

      cellnum: {
        id_fapsrvnum: ''
      },

      commonform: {
        id_enbtype: '',
        id_adminstate: '',
        id_duplexmode: '',
        id_plmnid: '',
        id_tac: '',
        id_secgwserver: '',
        id_s1siglinksrv: '',
        id_privatenwflg: '',
        id_s1status: '',
        id_s1retrymaxnum: ''
      },

      cell1form: {
        id_cell1_cellid: '',
        id_cell1_opState: '',
        id_cell1_connuenum: '',
        id_cell1_voltenum: '',
        id_cell1_candfreqlist: '',
        id_cell1_freqdl: '',
        id_cell1_frequl: '',
        id_cell1_band: '',
        id_cell1_candpcilist: '',
        id_cell1_pci: '',
        id_cell1_dlbandwidth: '',
        id_cell1_ulbandwidth: '',
        id_cell1_referencesignalpower: '',
        id_cell1_pagain: '',
        id_cell1_subframepattern: '',
        id_cell1_specialsubframepattern: '',
        id_cell1_txantennacount: '',
        id_cell1_rxantennacount: ''
      },

      cell2form: {
        id_cell2_cellid: '',
        id_cell2_opState: '',
        id_cell2_connuenum: '',
        id_cell2_voltenum: '',
        id_cell2_candfreqlist: '',
        id_cell2_freqdl: '',
        id_cell2_frequl: '',
        id_cell2_band: '',
        id_cell2_candpcilist: '',
        id_cell2_pci: '',
        id_cell2_dlbandwidth: '',
        id_cell2_ulbandwidth: '',
        id_cell2_referencesignalpower: '',
        id_cell2_pagain: '',
        id_cell2_subframepattern: '',
        id_cell2_specialsubframepattern: '',
        id_cell2_txantennacount: '',
        id_cell2_rxantennacount: ''
      },

      rules: {
        id_secgwserver: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_s1siglinksrv: [{
          validator: isvalidateipv4v6, trigger: 'blur'
        }],

        id_s1retrymaxnum: [{
          validator: validateS1maxRetry, trigger: 'blur'
        }],

        id_cell1_candfreqlist: [{
          validator: validatecandfreqlist, trigger: 'blur'
        }],

        id_cell2_candfreqlist: [{
          validator: validatecandfreqlist, trigger: 'blur'
        }],

        id_cell1_candpcilist: [{
          validator: validatecandpcilist, trigger: 'blur'
        }],

        id_cell2_candpcilist: [{
          validator: validatecandpcilist, trigger: 'blur'
        }],

        id_cell1_referencesignalpower: [{
          validator: validaterefpower, trigger: 'blur'
        }],

        id_cell2_referencesignalpower: [{
          validator: validaterefpower, trigger: 'blur'
        }],

        id_cell1_pagain: [{
          validator: validatePAGain, trigger: 'blur'
        }],

        id_cell2_pagain: [{
          validator: validatePAGain, trigger: 'blur'
        }]
      },

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
      }]
    }
  },

  computed: {
    cell2disable() {
      return !(this.cellnum.id_fapsrvnum === '2')
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getcellnum() {
      getparameters(this.cellnum)
    },

    async getvalues() {
      this.loading = true

      // get cell number firstly
      const ret1 = await getparameters(this.commonform)
      const ret2 = await getparameters(this.cell1form)
      const ret3 = await getparameters(this.cellnum)
      let ret4 = true
      if (this.cellnum.id_fapsrvnum === '2') {
        ret4 = await getparameters(this.cell2form)
      }

      if (!ret1 || !ret2 || !ret3 || !ret4) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      // convert true-->1, false -> 0
      this.commonform.id_adminstate = convertBoolean(this.commonform.id_adminstate)
      this.commonform.id_privatenwflg = convertBoolean(this.commonform.id_privatenwflg)
      this.cell1form.id_cell1_opState = convertBoolean(this.cell1form.id_cell1_opState)
      this.cell2form.id_cell2_opState = convertBoolean(this.cell2form.id_cell2_opState)

      this.loading = false
    },

    submitcommonForm() {
      this.$refs.commonform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          submitform.id_enbtype = this.commonform.id_enbtype
          submitform.id_adminstate = this.commonform.id_adminstate
          submitform.id_duplexmode = this.commonform.id_duplexmode
          submitform.id_plmnid = this.commonform.id_plmnid
          submitform.id_tac = this.commonform.id_tac
          submitform.id_secgwserver = this.commonform.id_secgwserver
          submitform.id_s1siglinksrv = this.commonform.id_s1siglinksrv
          submitform.id_privatenwflg = this.commonform.id_privatenwflg
          submitform.id_s1retrymaxnum = this.commonform.id_s1retrymaxnum

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

    submitcell1Form() {
      this.$refs.cell1form.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const submitform = {}
          submitform.id_cell1_cellid = this.cell1form.id_cell1_cellid
          submitform.id_cell1_candfreqlist = this.cell1form.id_cell1_candfreqlist
          submitform.id_cell1_band = this.cell1form.id_cell1_band
          submitform.id_cell1_candpcilist = this.cell1form.id_cell1_candpcilist
          submitform.id_cell1_dlbandwidth = this.cell1form.id_cell1_dlbandwidth
          submitform.id_cell1_ulbandwidth = this.cell1form.id_cell1_ulbandwidth
          submitform.id_cell1_referencesignalpower = this.cell1form.id_cell1_referencesignalpower
          submitform.id_cell1_pagain = this.cell1form.id_cell1_pagain
          submitform.id_cell1_subframepattern = this.cell1form.id_cell1_subframepattern
          submitform.id_cell1_specialsubframepattern = this.cell1form.id_cell1_specialsubframepattern
          submitform.id_cell1_txantennacount = this.cell1form.id_cell1_txantennacount
          submitform.id_cell1_rxantennacount = this.cell1form.id_cell1_rxantennacount

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

    submitcell2Form() {
      this.$refs.cell2form.validate((valid) => {
        if (valid) {
          this.loading = true

          const submitform = {}
          submitform.id_cell2_cellid = this.cell2form.id_cell2_cellid
          submitform.id_cell2_candfreqlist = this.cell2form.id_cell2_candfreqlist
          submitform.id_cell2_band = this.cell2form.id_cell2_band
          submitform.id_cell2_candpcilist = this.cell2form.id_cell2_candpcilist
          submitform.id_cell2_dlbandwidth = this.cell2form.id_cell2_dlbandwidth
          submitform.id_cell2_ulbandwidth = this.cell2form.id_cell2_ulbandwidth
          submitform.id_cell2_referencesignalpower = this.cell2form.id_cell2_referencesignalpower
          submitform.id_cell2_pagain = this.cell2form.id_cell2_pagain
          submitform.id_cell2_subframepattern = this.cell2form.id_cell2_subframepattern
          submitform.id_cell2_specialsubframepattern = this.cell2form.id_cell2_specialsubframepattern
          submitform.id_cell2_txantennacount = this.cell2form.id_cell2_txantennacount
          submitform.id_cell2_rxantennacount = this.cell2form.id_cell2_rxantennacount

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
.cell {
  &-container {
    width: 40%;
    margin-left:40px;
    margin-top:5px;
    margin-bottom:-10px;
    line-height: 10px;
  }
  &-text {
    font-size: 20px;
    line-height: 10px;
    margin:5px 10px 5px 250px;
  }
}
</style>
