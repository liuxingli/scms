<template>
  <div class="importdb-container">
    <div class="importdb-title">{{ $t('db.importldbfile') }}</div>

    <el-upload
      ref="uploaddb"
      class="upload-demo"
      :multiple="false"
      action="http://127.0.0.1:8080/doc/upload"
      :http-request="customUploaddb"
      :file-list="dbfileList"
      :auto-upload="false"
      :limit="1"
    >
      <span> ==></span>
      <el-select v-model="value" style="margin-left: 10px;" :placeholder="$t('db.importldbtype')">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

      <el-button slot="trigger" style="margin-left: 10px;" size="middle" type="primary" :disabled="submitpermission">{{ $t('global.selectfile') }}</el-button>
      <span> ==></span>
      <el-button style="margin-left: 10px;" size="middle" type="success" :disabled="submitpermission" @click="submitUploaddb">{{ $t('global.uploadfile') }}</el-button>
    </el-upload>

    <br>
    <br>
    <br>
    <br>
    <div class="importdb-title">{{ $t('db.removedefultfile') }}</div>
    <el-form id="removedbfile" ref="removefilesform" style="margin-left: 10px;" :model="removefilesform" label-width="130px" size="middle">
      <el-form-item v-for="item in removefilesform.removefilelist" :key="item" :label="item">
        <el-button type="primary" style="margin-left: 30px;" :disabled="submitpermission" class="debug-dump" @click="removeclick(item)">{{ $t('db.removefile') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { uploadfile } from '@/api/cpe'
import checkPermission from '@/utils/permission'

export default {
  name: 'Importdb',

  data: function() {
    return {
      loading: true,
      dbfileList: [],
      submitpermission: !checkPermission(['admin', 'operator']),
      removefilesform: {
        removefilelist: ['Device.xml.hardware', 'Internal.xml.hardware']
      },

      options: [{
        value: 'device',
        label: 'Device DB file'
      }, {
        value: 'operatordefault',
        label: 'Operator default file'
      }, {
        value: 'internal',
        label: 'Internal DB file'
      }, {
        value: 'son',
        label: 'SON DB file'
      }, {
        value: 'cndata',
        label: 'CnData DB file'
      }],
      value: ''
    }
  },

  methods: {
    customUploaddb(file) {
      uploadfile(file, this.value).then(response => {
        console.log(response)
      })
    },

    submitUploaddb() {
      this.$refs.uploaddb.submit()
    }
  }
}
</script>

<style lang="scss" scoped>
.importdb {
  &-container {
    margin: 50px;
    width: 40%;
  }
  &-title {
    font-size: 20px;
    line-height: 25px;
    margin:30px 5px 20px 10px;
  }
  &-text {
    font-size: 15px;
    line-height: 15px;
    margin:20px 5px 20px 20px;
  }
}
</style>
