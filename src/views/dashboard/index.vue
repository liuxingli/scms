<template>
  <div class="dashboard-container">
    <div class="dashboard-text"> {{ $t("dashboard.title") }}</div>
    <el-form id="deviceinf" ref="deviceinf" :model="form" label-width="200px" size="middle">
      <el-form-item :label="$t('cpe.id_modelname')" prop="modelname">
        <el-input v-model="form.modelname" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_manufacturer')" prop="manufacturer">
        <el-input v-model="form.manufacturer" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_oui')" prop="oui">
        <el-input v-model="form.oui" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_serialnumber')" prop="serialnumber">
        <el-input v-model="form.serialnumber" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_productclass')" prop="productclass">
        <el-input v-model="form.productclass" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_hardwarever')" prop="hardwarever">
        <el-input v-model="form.hardwarever" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_softwarever')" prop="softwarever">
        <el-input v-model="form.softwarever" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_platform')" prop="platform">
        <el-input v-model="form.platform" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { setoui, getdatapath2id, getparametervalues } from '@/api/cpe'

export default {
  name: 'Dashboard',

  data: function() {
    return {
      loading: true,
      form: {
        modelname: '',
        manufacturer: '',
        oui: '',
        serialnumber: '',
        productclass: '',
        hardwarever: '',
        softwarever: '',
        platform: ''
      }
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    getvalues() {
      this.loading = true
      const getparams = [
        'id_oui',
        'id_modelname',
        'id_manufacturer',
        'id_serialnumber',
        'id_productclass',
        'id_hardwarever',
        'id_softwarever',
        'id_platform'
      ]
      getparametervalues(getparams).then(res => {
        const retdata = getdatapath2id(res.data)
        this.form.modelname = retdata.id_modelname
        this.form.manufacturer = retdata.id_manufacturer
        this.form.oui = retdata.id_oui
        this.form.serialnumber = retdata.id_serialnumber
        this.form.productclass = retdata.id_productclass
        this.form.hardwarever = retdata.id_hardwarever
        this.form.softwarever = retdata.id_softwarever
        this.form.platform = retdata.id_platform
        this.loading = false
        setoui(this.form.oui)
      }, err => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    width: 40%;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    margin: 30px;
  }
}
</style>
