<template>
  <div class="upgrade-container">
    <div class="upgrade-text">{{ $t('upgrade.tip') }}</div>
    <div class="upgrade-text">{{ $t('upgrade.note') }}</div>
    <br>
    <div class="upgrade-title">{{ $t('upgrade.verinfo') }}</div>
    <el-form id="deviceinf" ref="deviceinf" :model="form" label-width="180px" size="middle">
      <el-form-item :label="$t('cpe.id_softwarever')" prop="id_softwarever">
        <el-input v-model="form.id_softwarever" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_platform')" prop="id_platform">
        <el-input v-model="form.id_platform" />
      </el-form-item>
    </el-form>

    <br>
    <div class="upgrade-title">{{ $t('upgrade.upgradetitle') }}</div>
    <el-upload
      ref="uploadfirmware"
      class="upload-demo"
      :multiple="false"
      action="http://127.0.0.1:8080/doc/upload"
      :http-request="customUpload"
      :on-success="handleSuccess"
      :file-list="firmwarefileList"
      :auto-upload="false"
      :limit="1"
    >
      <el-button slot="trigger" style="margin-left: 40px;" size="middle" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
      <span> ==></span>
      <el-button style="margin-left: 10px;" size="middle" type="success" :disabled="submitpermission" @click="submitUploadfimware">{{ $t('global.uploadfile') }}</el-button>
      <span> ==></span>
      <el-button style="margin-left: 10px;" size="middle" type="warning" :disabled="submitpermission" @click="submitupgrade">{{ $t('upgrade.upgrade') }}</el-button>
    </el-upload>

    <br>
    <br>
    <div class="upgrade-title">{{ $t('upgrade.upgradeStatus') }}</div>
    <el-steps style="margin-left: 35px;" :space="300" :active="activestep" process-status="processstatus" finish-status="success">
      <el-step :title="$t('upgrade.statusupload')" />
      <el-step :title="$t('upgrade.statusupgrading')" />
      <el-step :title="$t('upgrade.statusreboot')" />
      <el-step :title="$t('upgrade.statuscomplete')" />
    </el-steps>
  </div>
</template>

<script>
import { getparameters, uploadfile, upgrade, queryupgradestatus } from '@/api/cpe'
import checkPermission from '@/utils/permission'

export default {
  name: 'Factory',

  data: function() {
    return {
      loading: true,
      firmwarefilename: '',
      firmwarefileList: [],
      activestep: 0,
      processstatus: 'wait',
      form: {
        id_softwarever: '',
        id_platform: ''
      },
      timerid: '',
      querycount: 0,
      submitpermission: !checkPermission(['admin', 'operator'])
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true
      const ret = await getparameters(this.form)
      if (!ret) {
        this.$message.error(this.$t('global.fetchfail'))
      }

      this.loading = false
    },

    async getupgradestatus() {
      queryupgradestatus().then(response => {
        console.log(response)
        // check status
        const status = response.data.status
        if (status === 'complete') {
          this.activestep = 3
          this.processstatus = 'success'
          clearInterval(this.timerid)
        } else if (status === 'fail') {
          this.processstatus = 'error'
          clearInterval(this.timerid)
          this.$message.error(this.$t('global.upgradefail') + ': Device return fail')
        } else {
          this.querycount++
          if (this.querycount++ > 180) {
            this.processstatus = 'error'
            clearInterval(this.timerid)
            console.log('upgrade timeout ')
            this.$message.error(this.$t('global.upgradefail') + ': upgrade timeout')
          }
        }
      }, err => { // response
        // assume device enter reboot
        console.log('error in getupgradestatus ' + err)
        this.activestep = 2
        this.processstatus = 'process'
      })
    },

    customUpload(file) {
      uploadfile(file, 'firmware').then(response => {
        console.log(response)
      }, err => {
        console.log('error in upload file ' + err)
        this.processstatus = 'error'
        this.$message.error(this.$t('global.upgradefail'))
      })
    },

    handleSuccess(res, file) {
      this.firmwarefilename = file.name
      this.activestep = 1
      this.processstatus = 'process'
    },

    submitUploadfimware() {
      this.$refs.uploadfirmware.submit()
      this.activestep = 0
      this.processstatus = 'process'
    },

    submitupgrade() {
      upgrade(this.firmwarefilename).then(() => {
        // query progress
        this.querycount = 0
        this.timerid = setInterval(function() { this.getupgradestatus() }, 10000)
      }, err => {
        console.log('error in upgrade ' + err)
        this.$message.error(this.$t('global.upgradefail'))
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.upgrade {
  &-container {
    margin: 50px;
    width: 38%;
  }
  &-title {
    font-size: 25px;
    line-height: 25px;
    margin:15px 5px 25px 15px;
  }
  &-text {
    font-size: 16px;
    line-height: 15px;
    margin:5px 5px 5px 10px;
  }
}
</style>
