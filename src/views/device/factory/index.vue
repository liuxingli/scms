<template>
  <div class="factory-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="$t('factory.calibrationtitle')" name="calibration">
        <div class="factory-title">{{ $t('global.importfile') }}</div>

        <div class="factory-text">{{ $t('factory.calibrationfile') }}</div>
        <el-upload
          ref="uploadcali"
          class="upload-demo"
          :multiple="false"
          action="http://127.0.0.1:8080/doc/upload"
          :http-request="customUploadcali"
          :file-list="calfileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" style="margin-left: 45px;" size="small" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" :disabled="submitpermission" @click="submitUploadcali">{{ $t('global.importfile') }}</el-button>
        </el-upload>

        <div class="factory-text">{{ $t('factory.pdrfile') }}</div>
        <el-upload
          ref="uploadpdr"
          class="upload-demo"
          :multiple="false"
          action="http://127.0.0.1:8080/doc/upload"
          :http-request="customUploadpdr"
          :file-list="dprfileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" style="margin-left: 45px;" size="small" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" :disabled="submitpermission" @click="submitUploadpdr">{{ $t('global.importfile') }}</el-button>
        </el-upload>

        <div class="factory-text">{{ $t('factory.pacalifile') }}</div>
        <el-upload
          ref="uploadpacali"
          class="upload-demo"
          :multiple="false"
          action="http://127.0.0.1:8080/doc/upload"
          :http-request="customUploadpacali"
          :file-list="pacalfileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" style="margin-left: 45px;" size="small" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" :disabled="submitpermission" @click="submitUploadpacali">{{ $t('global.importfile') }}</el-button>
        </el-upload>

        <div class="factory-title">{{ $t('global.exportfile') }}</div>
        <el-form id="dump" ref="dumpcalifilelist" :model="dumpcaliform" label-width="150px" size="mini">
          <el-form-item v-for="item in dumpcaliform.dumpcalifilelist" :key="item" :label="item">
            <el-button type="primary" :disabled="submitpermission" class="debug-dump" @click="downloadclick(item)">{{ $t('global.exportfile') }}</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>

      <el-tab-pane :label="$t('factory.vendorlogotitle')" name="vendorlogo">
        <div class="factory-title">{{ $t('global.importfile') }}</div>
        <div class="factory-text">{{ $t('factory.logofile') }}</div>
        <el-upload
          ref="uploadlogo"
          class="upload-demo"
          :multiple="false"
          action="http://127.0.0.1:8080/doc/upload"
          :http-request="customUploadlogo"
          :file-list="logofileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" style="margin-left: 45px;" size="small" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" :disabled="submitpermission" @click="submitUploadlogo">{{ $t('global.importfile') }}</el-button>
        </el-upload>

        <div class="factory-title">{{ $t('global.exportfile') }}</div>
        <el-form id="dump" ref="dumplogofilelist" :model="dumplogoform" label-width="150px" size="mini">
          <el-form-item v-for="item in dumplogoform.dumplogofilelist" :key="item" :label="item">
            <el-button type="primary" :disabled="submitpermission" class="debug-dump" @click="downloadclick(item)">{{ $t('global.exportfile') }}</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { filedownload, uploadfile } from '@/api/cpe'
import checkPermission from '@/utils/permission'

export default {
  name: 'Factory',

  data: function() {
    return {
      loading: true,
      activeName: 'calibration',
      calfileList: [],
      dprfileList: [],
      pacalfileList: [],
      logofileList: [],

      dumpcaliform: {
        dumpcalifilelist: ['rfCalData.bin', 'pdr_amendment.tgz', 'pa_calibration.txt']
      },
      dumplogoform: {
        dumplogofilelist: ['logo.png']
      },
      submitpermission: !checkPermission(['admin', 'operator'])

    }
  },

  methods: {
    customUploadcali(file) {
      uploadfile(file, 'calibration').then(response => {
        console.log(response)
      })
    },
    customUploadpdr(file) {
      uploadfile(file, 'pdr').then(response => {
        console.log(response)
      })
    },
    customUploadpacali(file) {
      uploadfile(file, 'pacalibration').then(response => {
        console.log(response)
      })
    },
    customUploadlogo(file) {
      uploadfile(file, 'logo').then(response => {
        console.log(response)
      })
    },

    submitUploadcali() {
      this.$refs.uploadcali.submit()
    },
    submitUploadpdr() {
      this.$refs.uploadpdr.submit()
    },
    submitUploadpacali() {
      this.$refs.uploadpacali.submit()
    },
    submitUploadlogo() {
      this.$refs.uploadlogo.submit()
    },

    // Filetype: 'calibration', 'pdr','pacalibration','logo','firmware',
    //      'operatordefault','device','internal','son','cndata','log'
    downloadclick(filename) {
      let type = 'calibration'
      if (filename === 'pdr_amendment.tgz') {
        type = 'pdr'
      } else if (filename === 'pa_calibration.txt') {
        type = 'pacalibration'
      } else if (filename === 'logo.png') {
        type = 'logo'
      }

      if (!filedownload(type, filename)) {
        this.$message.error(this.$t('global.filedownloadfail'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.factory {
  &-container {
    margin: 50px;
    width: 20%;
  }
  &-title {
    font-size: 20px;
    line-height: 25px;
    margin:30px 5px 15px 150px;
  }
  &-text {
    font-size: 15px;
    line-height: 15px;
    margin:20px 5px 5px 20px;
  }
}
</style>
