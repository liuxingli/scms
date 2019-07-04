<template>
  <div class="acs-container">
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="$t('acs.servertitle')" name="hems">
        <el-form id="acsinf" ref="acsinf" :model="hems" label-width="150px" size="small">
          <el-form-item :label="$t('cpe.id_modelname')" prop="modelname">
            <el-input v-model="hems.modelname" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_manufacturer')" prop="manufacturer">
            <el-input v-model="hems.manufacturer" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_oui')" prop="oui">
            <el-input v-model="hems.oui" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_serialnumber')" prop="serialnumber">
            <el-input v-model="hems.serialnumber" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_productclass')" prop="productclass">
            <el-input v-model="hems.productclass" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_hardwarever')" prop="hardwarever">
            <el-input v-model="hems.hardwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_softwarever')" prop="softwarever">
            <el-input v-model="hems.softwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_platform')" prop="platform">
            <el-input v-model="hems.platform" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('acs.Clienttitle')" name="cpe">
        <el-form id="acsinf" ref="acsinf" :model="hems" label-width="150px" size="small">
          <el-form-item :label="$t('cpe.id_modelname')" prop="modelname">
            <el-input v-model="hems.modelname" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_manufacturer')" prop="manufacturer">
            <el-input v-model="hems.manufacturer" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_oui')" prop="oui">
            <el-input v-model="hems.oui" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_serialnumber')" prop="serialnumber">
            <el-input v-model="hems.serialnumber" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_productclass')" prop="productclass">
            <el-input v-model="hems.productclass" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_hardwarever')" prop="hardwarever">
            <el-input v-model="hems.hardwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_softwarever')" prop="softwarever">
            <el-input v-model="hems.softwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_platform')" prop="platform">
            <el-input v-model="hems.platform" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane :label="$t('acs.Securitytitle')" name="security">
        <el-form id="acsinf" ref="acsinf" :model="hems" label-width="150px" size="small">
          <el-form-item :label="$t('cpe.id_modelname')" prop="modelname">
            <el-input v-model="hems.modelname" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_manufacturer')" prop="manufacturer">
            <el-input v-model="hems.manufacturer" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_oui')" prop="oui">
            <el-input v-model="hems.oui" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_serialnumber')" prop="serialnumber">
            <el-input v-model="hems.serialnumber" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_productclass')" prop="productclass">
            <el-input v-model="hems.productclass" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_hardwarever')" prop="hardwarever">
            <el-input v-model="hems.hardwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_softwarever')" prop="softwarever">
            <el-input v-model="hems.softwarever" />
          </el-form-item>
          <el-form-item :label="$t('cpe.id_platform')" prop="platform">
            <el-input v-model="hems.platform" />
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getdatapath2id, getparametervalues } from '@/api/cpe'

export default {
  name: 'Acs',

  data: function() {
    return {
      loading: true,
      activeName: 'hems',
      hems: {
        hemsurl: '',
        hemsuser: '',
        hemspassword: '',
        secgwaddr: '',
        perinformflg: '',
        perinforminterv: '',
        cpeconnurl: '',
        cpeconnauthflg: '',
        cpeconnuser: '',
        cpeconnpassword: '',
        cpeconntlsver: ''
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
        'id_hemsurl',
        'id_hemsuser',
        'id_hemspassword',
        'id_secgwaddr',
        'id_perinformflg',
        'id_perinforminterv',
        'id_cpeconnurl',
        'id_cpeconnauthflg',
        'id_cpeconnuser',
        'id_cpeconnpassword',
        'id_cpeconntlsver'
      ]
      getparametervalues(getparams).then(res => {
        const retdata = getdatapath2id(res.data)
        this.hems.hemsurl = retdata.id_hemsurl
        this.hems.hemsuser = retdata.id_hemsuser
        this.hems.hemspassword = retdata.id_hemspassword
        this.hems.secgwaddr = retdata.id_secgwaddr
        this.hems.perinformflg = retdata.id_perinformflg
        this.hems.perinforminterv = retdata.id_perinforminterv
        this.hems.cpeconnurl = retdata.id_cpeconnurl
        this.hems.cpeconnauthflg = retdata.id_cpeconnauthflg
        this.hems.cpeconnuser = retdata.id_cpeconnuser
        this.hems.cpeconnpassword = retdata.id_cpeconnpassword
        this.hems.cpeconntlsver = retdata.id_cpeconntlsver
        this.loading = false
      }, err => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.acs {
  &-container {
    margin: 50px;
    width: 40%;
  }
  &-text {
    font-size: 20px;
    line-height: 30px;
    margin: 50px;
  }
}
</style>
