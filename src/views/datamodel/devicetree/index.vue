<template>
  <div class="devicetree-container">
    <div class="devicetree-title">{{ $t('tree.devicetreetitle') }}</div>

    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      highlight-current="true"
      expand-on-click-node="true"
    />
  </div>
</template>

<script>
import { getdbtree } from '@/api/cpe'

export default {
  name: 'Devicetree',

  data: function() {
    return {
      loading: true,
      props: {
        label: 'name',
        children: 'children',
        isLeaf: 'leaf'
      }
    }
  },

  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{
          name: 'Device',
          path: 'Device.',
          type: 'object', // Object,string,unsignedInt,multi,dateTime,boolean,int,instance
          cType: 'STRUCT', // STRUCT,INT8[],UINT32,BOOL8,UINT16,DATE_TIME_T,CM_HOST_NAME_OR_IP_ADDR_T,UINT32_ENUM,UINT32_BITMAP
          range: '',
          writeable: false,
          val: '',
          leaf: false,
          children: []
        }])
      } else {
        // Get child from device
        const query = { isinternal: false, path: node.data.path, depth: 1 }
        getdbtree(query).then((res) => {
          console.log('get tree:' + res)
          // extract childre from res
          if (res.code === 20000) {
            const childstr = res.data.val
            const children = []
            for (const item of childstr) {
              const child = {}
              child.path = item.meta.path
              const namearr = child.path.split('.')
              if (namearr[namearr.length - 1] === '') {
                child.name = namearr[namearr.length - 2]
                child.leaf = false
              } else {
                child.name = namearr[namearr.length - 1]
                child.leaf = true
              }

              child.type = item.meta.type
              child.ctype = item.meta.cType
              child.range = item.meta.range
              child.val = item.val
              child.writeable = (item.flag & 0x2) !== 0x2
              child.children = []
              children.push(child)
            }
            resolve(children)
          }
        }, err => {
          console.log('error in loadNode ' + err)
        })

        resolve()
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.devicetree {
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
