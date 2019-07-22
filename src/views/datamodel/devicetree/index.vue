<template>
  <div class="devicetree-container">
    <div class="devicetree-title">{{ $t('tree.devicetreetitle') }}</div>
    <Split style="height: 800px;border-style: solid">
      <SplitArea :size="55" :min-size="300">
        <el-form :inline="true" :model="operform">
          <el-form-item :label="$t('tree.subtreedepth')">
            <el-input-number v-model="operform.subtreedepth" size="mini" :min="1" :max="6" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="mini" @click="expandall">{{ $t('tree.expandall') }}</el-button>
            <el-button type="primary" size="mini" @click="collapseall">{{ $t('tree.CollapseAll') }}</el-button>
          </el-form-item>

          <el-form-item>
            <el-input v-model="operform.filterText" size="mini" :placeholder=" $t('tree.searchplaceholder')" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="mini" @click="Search">{{ $t('tree.search') }}</el-button>
            <el-button type="primary" size="mini" @click="Clearsearch">{{ $t('tree.clearsearch') }}</el-button>
          </el-form-item>
        </el-form>

        <el-tree
          ref="mytree"
          :data="treedata"
          :props="props"
          node-key="path"
          accordion
          highlight-current
          :filter-node-method="filterNode"
          expand-on-click-node
          :empty-text="$t('tree.emptytext')"
          @current-change="handleCurrentNodeChange"
          @node-click="handleNodeClick"
        />
      </SplitArea>

      <SplitArea :size="45" :min-size="300">
        <div class="devicetree-text">{{ $t('tree.nodedetail') }}</div>
        <el-col :span="22">
          <el-form id="treedetail" ref="detailform" :model="detailform" label-width="270px" size="small">
            <el-form-item :label="$t('tree.path')" prop="path">
              <el-input v-model="detailform.path" />
            </el-form-item>

            <el-form-item :label="$t('tree.type')" prop="type">
              <el-input v-model="detailform.type" />
            </el-form-item>

            <div v-if="detailform.leaf">
              <el-form-item :label="$t('tree.range')" prop="range">
                <el-input v-model="detailform.range" />
              </el-form-item>

              <div v-if="detailform.writeable">
                <el-form-item :label="$t('tree.value')" prop="val">
                  <el-col :span="10">
                    <el-input v-model="detailform.val" />
                  </el-col>
                  <el-col :span="12" :offset="1">
                    <el-button type="primary" :disabled="submitpermission" size="small" @click="submitdetailForm">{{ $t('global.submit') }}</el-button>
                  </el-col>
                </el-form-item>
              </div>
              <div v-else>
                <el-form-item :label="$t('tree.value')" prop="val">
                  <el-input v-model="detailform.val" />
                </el-form-item>
              </div>
            </div>
            <div v-else>
              <div v-if="detailform.type === 'multi'">
                <el-form-item :label="$t('tree.maxinstance')">
                  <el-col :span="10">
                    <el-input v-model="detailform.max" />
                  </el-col>
                  <div v-if="detailform.writeable && detailform.loaded">
                    <el-col :span="12" :offset="1">
                      <el-button type="primary" :disabled="submitpermission" size="small" @click="addobject(detailform.path)">{{ $t('tree.addobj') }}</el-button>
                    </el-col>
                  </div>
                </el-form-item>
              </div>

              <div v-if="detailform.type === 'instance'">
                <el-form-item :label="$t('tree.instancenum')">
                  <el-input v-model="detailform.instNum" />
                </el-form-item>
              </div>

              <br>
              <div class="devicetree-text">{{ $t('tree.children') }}</div>
              <el-form-item v-for="(item,key) in detailform.children" :key="key" :label="item.name">
                <div v-if="item.leaf">
                  <el-input v-model="item.val" />
                </div>
                <div v-else>
                  <div v-if="item.type === 'instance' && detailform.writeable">
                    <el-col :span="10">
                      <el-input v-model="item.type" />
                    </el-col>
                    <el-col :span="12" :offset="1">
                      <el-button type="primary" :disabled="submitpermission" size="small" @click="deleteobject(item.path)">{{ $t('tree.deleteobj') }}</el-button>
                    </el-col>
                  </div>
                  <div v-else>
                    <el-input v-model="item.type" />
                  </div>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </el-col>
      </SplitArea>
    </Split>
  </div>
</template>

<script>
import { getdbtree, setparametervalues, deleteobject } from '@/api/cpe'
import checkPermission from '@/utils/permission'

export default {
  name: 'Devicetree',

  data: function() {
    return {
      loading: true,
      props: {
        label: 'name',
        children: 'children',
        isLeaf: 'leaf'
      },
      submitpermission: !checkPermission(['admin', 'operator']),

      // Init data includes root node only, other nodes added by click
      treedata: [{
        name: 'Device',
        path: 'Device.',
        type: 'object', // Object,string,unsignedInt,multi,dateTime,boolean,int,instance
        cType: 'STRUCT', // STRUCT,INT8[],UINT32,BOOL8,UINT16,DATE_TIME_T,CM_HOST_NAME_OR_IP_ADDR_T,UINT32_ENUM,UINT32_BITMAP
        range: '',
        instNum: 0, // for instance type only
        max: 0, // for multi type only
        writeable: false,
        val: '',
        leaf: false,
        loaded: false,
        children: []
      }],

      operform: {
        subtreedepth: 1,
        filterText: ''
      },

      detailform: {
        name: '',
        path: '',
        type: '', // Object,string,unsignedInt,multi,dateTime,boolean,int,instance
        cType: '', // STRUCT,INT8[],UINT32,BOOL8,UINT16,DATE_TIME_T,CM_HOST_NAME_OR_IP_ADDR_T,UINT32_ENUM,UINT32_BITMAP
        range: '',
        instNum: 1, // for instance type only
        max: 1, // for multi type only
        writeable: false,
        val: '',
        leaf: false,
        children: []
      },

      currentnodekey: ''
    }
  },

  methods: {
    getChildrenRecursively(childstr) {
      const children = []
      for (const item of childstr) {
        const child = {}
        child.path = item.meta.path
        child.type = item.meta.type
        child.ctype = item.meta.cType
        child.range = item.meta.range
        child.instNum = item.meta.instNum
        child.max = item.meta.max
        child.val = item.val
        child.writeable = (item.flag & 0x2) === 0x2

        child.children = []
        const namearr = child.path.split('.')
        if (namearr[namearr.length - 1] === '') {
          child.name = namearr[namearr.length - 2]
          child.leaf = false
          if (item.val !== null) {
            child.children = this.getChildrenRecursively(item.val)
            child.loaded = true
          } else {
            child.loaded = false
          }
        } else {
          child.name = namearr[namearr.length - 1]
          child.leaf = true
        }

        children.push(child)
      }
      return children
    },

    refereshnode(node) {
      node.data.loaded = false
      // Get child from device
      const query = { isinternal: false, path: node.data.path, depth: this.operform.subtreedepth }
      getdbtree(query).then((res) => {
        // extract childre from res
        if (res.code === 20000) {
          const childstr = res.data.val
          const children = this.getChildrenRecursively(childstr)
          if (children.length > 0) {
            node.data.loaded = true
            this.$set(node.data, 'children', children)
            this.$refs.mytree.updateKeyChildren(node.data.path, children)
            setTimeout(() => {
              node.expanded = true
            }, 100)
          }
        }
      }, err => {
        console.log('error in refereshnode ' + err)
      })
    },

    handleNodeClick(data, node) {
      // try to load data from server and insert children node to current node
      if (!data.loaded && !data.leaf) {
        this.refereshnode(node)
      }
    },

    handleCurrentNodeChange(data, node) {
      this.detailform = data
      this.currentnodekey = this.$refs.mytree.getCurrentKey()
    },

    filterNode(value, data) {
      if (!value) return true
      return data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    },

    Search() {
      this.expandall()
      this.$refs.mytree.filter(this.operform.filterText)
    },

    Clearsearch() {
      this.operform.filterText = ''
      this.$refs.mytree.filter(this.operform.filterText)
      this.$refs.mytree.setCurrentKey(this.currentnodekey)
    },

    expandall() {
      for (let i = 0; i < this.$refs['mytree'].store._getAllNodes().length; i++) {
        this.$refs['mytree'].store._getAllNodes()[i].expanded = true
      }
    },

    collapseall() {
      for (let i = 0; i < this.$refs['mytree'].store._getAllNodes().length; i++) {
        this.$refs['mytree'].store._getAllNodes()[i].expanded = false
      }
    },

    submitdetailForm() {
      this.$refs.detailform.validate((valid) => {
        if (valid) {
          this.loading = true

          // Update the writeable elements only
          const updateparam = { path: this.detailform.path, value: this.detailform.value }
          const setparams = []
          setparams.push(updateparam)
          setparametervalues(setparams).then(() => {
            this.$message.success(this.$t('global.submitsuccess'))
          }, err => {
            this.$message.error(this.$t('global.submitfail') + err)
          })
          this.loading = false
        } else {
          return false
        }
      })
    },

    deleteobject(path) {
      this.loading = true
      deleteobject(path).then(() => {
        const optnode = this.$refs.mytree.getNode(this.currentnodekey)
        this.refereshnode(optnode)
        this.$message.success(this.$t('global.deleteobjsuccess'))
      }, err => {
        this.$message.error(this.$t('global.deleteobjfail') + err)
      })
      this.loading = false
    }

  }
}
</script>

<style lang="scss" scoped>
.devicetree {
  &-container {
    margin: 50px;
    width: 95%;
  }
  &-title {
    font-size: 15px;
    line-height: 25px;
    margin:30px 5px 20px 10px;
  }
  &-text {
    font-size: 15px;
    line-height: 15px;
    margin:20px 5px 20px 5px;
  }
}
</style>
