<template>
  <div class="exportdb-container">
    <div class="exportdb-title">{{ $t('db.exportldbfile') }}</div>
    <el-form id="dump" ref="dumpcalifilelist" :model="exportdbform" label-width="150px" size="mini">
      <el-form-item v-for="item in exportdbform.dbfilelist" :key="item" :label="item">
        <el-button type="primary" :disabled="submitpermission" class="debug-dump" @click="downloadclick(item)">{{ $t('global.exportfile') }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { filedownload } from '@/api/cpe'
import checkPermission from '@/utils/permission'

export default {
  name: 'Exportdb',

  data: function() {
    return {
      loading: true,

      exportdbform: {
        dbfilelist: ['Device.xml', 'Internal.xml', 'SON_DM.xml']
      },
      submitpermission: !checkPermission(['admin', 'operator'])
    }
  },

  methods: {
    // Filetype: 'calibration', 'pdr','pacalibration','logo','firmware',
    //      'operatordefault','device','internal','son','cndata','log'
    downloadclick(filename) {
      let type = 'device'
      if (filename === 'Internal.xml') {
        type = 'internal'
      } else if (filename === 'SON_DM.xml') {
        type = 'son'
      }

      if (!filedownload(type, filename)) {
        this.$message.error(this.$t('global.filedownloadfail'))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.exportdb {
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
