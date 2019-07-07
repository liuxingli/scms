<template>
  <div class="dashboard-container">
    <div class="dashboard-text"> {{ $t("dashboard.title") }}</div>
    <el-form id="deviceinf" ref="deviceinf" :model="form" label-width="200px" size="middle">
      <el-form-item :label="$t('cpe.id_modelname')" prop="id_modelname">
        <el-input v-model="form.id_modelname" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_manufacturer')" prop="id_manufacturer">
        <el-input v-model="form.id_manufacturer" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_oui')" prop="id_oui">
        <el-input v-model="form.id_oui" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_serialnumber')" prop="id_serialnumber">
        <el-input v-model="form.id_serialnumber" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_productclass')" prop="id_productclass">
        <el-input v-model="form.id_productclass" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_hardwarever')" prop="id_hardwarever">
        <el-input v-model="form.id_hardwarever" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_softwarever')" prop="id_softwarever">
        <el-input v-model="form.id_softwarever" />
      </el-form-item>
      <el-form-item :label="$t('cpe.id_platform')" prop="id_platform">
        <el-input v-model="form.id_platform" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getparameters } from '@/api/cpe'

export default {
  name: 'Dashboard',

  data: function() {
    return {
      loading: true,
      form: {
        id_modelname: '',
        id_manufacturer: '',
        id_oui: '',
        id_serialnumber: '',
        id_productclass: '',
        id_hardwarever: '',
        id_softwarever: '',
        id_platform: ''
      }
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
