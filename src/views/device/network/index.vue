<template>
  <div class="network-container">
    <div class="network-text">{{ $t('network.networkhint') }}</div>

    <br>
    <el-tabs v-model="activeName" type="border-card">
      <el-tab-pane :label="$t('network.iptitle0')" name="eth0" :disabled="eth0disable">
        <br>
        <el-form ref="eth0form" :inline="true" size="mini" :model="eth0form">
          <el-form-item :label="$t('network.name')" prop="name">
            <el-input v-model="eth0form.name" :disabled="true" />
          </el-form-item>
          <el-form-item :label="$t('network.macaddr')" prop="macaddr">
            <el-input v-model="eth0form.macaddr" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="saveeth0info">{{ $t('global.save') }}</el-button>
          </el-form-item>
        </el-form>

        <br>
        <div class="network-text">{{ $t('network.iptbltitle1') }}</div>
        <vxe-toolbar :setting="{storage: false}">
          <template v-slot:buttons>
            <el-button type="primary" size="mini" @click="inserteth0ipEvent">{{ $t('global.add') }}</el-button>
            <el-button type="primary" size="mini" @click="removeeth0ipEvent">{{ $t('global.remove') }}</el-button>
            <el-button type="primary" size="mini" @click="saveeth0ipEvent">{{ $t('global.save') }}</el-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="eth0iptbl"
          border
          fit
          highlight-current-row
          size="mini"
          class="vxe-table-element"
          :data.sync="eth0ipData"
          :edit-config="{trigger: 'click', mode: 'row'}"
        >
          <vxe-table-column field="enable" title="Enable" min-width="60" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="mtu" title="MTU" min-width="80" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="ipaddr" title="IP Address" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="subnetmask" title="Subnet Mask" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="defaultgateway" title="Default Gateway" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="addressingtype" title="Address Type" min-width="100" :edit-render="{name: 'ElSelect',options: ipaddroptlist}" />
          <vxe-table-column field="vlanid" title="VLAN ID" min-width="100" :edit-render="{name: 'ElInput'}" />
          <template v-slot:empty>
            <span style="color: red;">{{ $t('global.empty') }}</span>
          </template>
        </vxe-table>

        <br>
        <br>
        <div class="network-text">{{ $t('network.routebltitle1') }}</div>
        <vxe-toolbar :setting="{storage: false}">
          <template v-slot:buttons>
            <el-button type="primary" size="mini" @click="inserteth0routeEvent">{{ $t('global.add') }}</el-button>
            <el-button type="primary" size="mini" @click="removeeth0routeEvent">{{ $t('global.remove') }}</el-button>
            <el-button type="primary" size="mini" @click="saveeth0routeEvent">{{ $t('global.save') }}</el-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="eth0routetbl"
          border
          fit
          highlight-current-row
          size="mini"
          class="vxe-table-element"
          :data.sync="eth0routeData"
          :edit-config="{trigger: 'click', mode: 'row'}"
        >
          <vxe-table-column field="enable" title="Enable" min-width="80" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="staticroute" title="Static Route" min-width="120" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="destipaddr" title="'Dest IP Address" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="destsubnetmask" title="Dest Subnet Mask" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="gatewayip" title="Gateway IP Address" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="origin" title="Origin" min-width="80" :edit-render="{name: 'ElSelect',options: originoptlist}" />
          <template v-slot:empty>
            <span style="color: red;">{{ $t('global.empty') }}</span>
          </template>
        </vxe-table>
        <br>
        <br>
      </el-tab-pane>

      <el-tab-pane :label="$t('network.iptitle1')" name="eth1" :disabled="eth1disable">
        <br>
        <el-form ref="eth1form" :inline="true" size="mini" :model="eth1form">
          <el-form-item :label="$t('network.name')" prop="name">
            <el-input v-model="eth1form.name" :disabled="true" />
          </el-form-item>
          <el-form-item :label="$t('network.macaddr')" prop="macaddr">
            <el-input v-model="eth1form.macaddr" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini" @click="saveeth1info">{{ $t('global.save') }}</el-button>
          </el-form-item>
        </el-form>

        <br>
        <div class="network-text">{{ $t('network.iptbltitle1') }}</div>
        <vxe-toolbar :setting="{storage: false}">
          <template v-slot:buttons>
            <el-button type="primary" size="mini" @click="inserteth1ipEvent">{{ $t('global.add') }}</el-button>
            <el-button type="primary" size="mini" @click="removeeth1ipEvent">{{ $t('global.remove') }}</el-button>
            <el-button type="primary" size="mini" @click="saveeth1ipEvent">{{ $t('global.save') }}</el-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="eth1iptbl"
          border
          fit
          highlight-current-row
          size="mini"
          class="vxe-table-element"
          :data.sync="eth1ipData"
          :edit-config="{trigger: 'click', mode: 'row'}"
        >
          <vxe-table-column field="enable" title="Enable" min-width="80" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="mtu" title="MTU" min-width="70" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="ipaddr" title="IP Address" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="subnetmask" title="Subnet Mask" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="defaultgateway" title="Default Gateway" min-width="140" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="addressingtype" title="Address Type" min-width="140" :edit-render="{name: 'ElSelect',options: ipaddroptlist}" />
          <vxe-table-column field="vlanid" title="VLAN ID" min-width="90" :edit-render="{name: 'ElInput'}" />
          <template v-slot:empty>
            <span style="color: red;">{{ $t('global.empty') }}</span>
          </template>
        </vxe-table>

        <br>
        <br>
        <div class="network-text">{{ $t('network.routebltitle1') }}</div>
        <vxe-toolbar :setting="{storage: false}">
          <template v-slot:buttons>
            <el-button type="primary" size="mini" @click="inserteth1routeEvent">{{ $t('global.add') }}</el-button>
            <el-button type="primary" size="mini" @click="removeeth1routeEvent">{{ $t('global.remove') }}</el-button>
            <el-button type="primary" size="mini" @click="saveeth1routeEvent">{{ $t('global.save') }}</el-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="eth1routetbl"
          border
          fit
          highlight-current-row
          size="mini"
          class="vxe-table-element"
          :data.sync="eth1routeData"
          :edit-config="{trigger: 'click', mode: 'row'}"
        >
          <vxe-table-column field="enable" title="Enable" min-width="80" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="staticroute" title="Static Route" min-width="120" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="destipaddr" title="'Dest IP Address" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="destsubnetmask" title="Dest Subnet Mask" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="gatewayip" title="Gateway IP Address" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="origin" title="Origin" min-width="80" :edit-render="{name: 'ElSelect',options: originoptlist}" />
          <template v-slot:empty>
            <span style="color: red;">{{ $t('global.empty') }}</span>
          </template>
        </vxe-table>
      </el-tab-pane>

      <el-tab-pane :label="$t('network.dnstitle')" name="dns">
        <vxe-toolbar :setting="{storage: false}">
          <template v-slot:buttons>
            <el-button type="primary" size="mini" @click="insertdnsEvent">{{ $t('global.add') }}</el-button>
            <el-button type="primary" size="mini" @click="removdnsEvent">{{ $t('global.remove') }}</el-button>
            <el-button type="primary" size="mini" @click="savednsEvent">{{ $t('global.save') }}</el-button>
          </template>
        </vxe-toolbar>

        <vxe-table
          ref="dnstbl"
          border
          fit
          highlight-current-row
          size="mini"
          class="vxe-table-element"
          :data.sync="dnstableData"
          :edit-config="{trigger: 'click', mode: 'cell',activeMethod: activeCellMethod}"
        >
          <vxe-table-column field="enable" title="Enable" min-width="80" :edit-render="{name: 'ElSwitch',type: 'visible'}" />
          <vxe-table-column field="dnsserver" title="'DNS Server" min-width="160" :edit-render="{name: 'ElInput'}" />
          <vxe-table-column field="type" title="Type" min-width="160" :edit-render="{name: 'ElSelect',options: dnsoptlist}" />
          <template v-slot:empty>
            <span style="color: red;">{{ $t('global.empty') }}</span>
          </template>
        </vxe-table>
        <br>
        <br>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getparameters, setparameters, deleteobject, addobject } from '@/api/cpe'
import checkPermission from '@/utils/permission'
import { convertNum2Boolean } from '@/utils/checkrules'

export default {
  name: 'Network',

  data: function() {
    return {
      loading: true,
      activeName: 'eth0',
      submitpermission: !checkPermission(['admin', 'operator']),

      ipaddroptlist: [
        { 'label': 'DHCP', 'value': 'DHCP' },
        { 'label': 'IKEv2', 'value': 'IKEv2' },
        { 'label': 'AutoIP', 'value': 'AutoIP' },
        { 'label': 'IPCP', 'value': 'IPCP' },
        { 'label': 'Static', 'value': 'Static' }],

      originoptlist: [
        { 'label': 'DHCPv4', 'value': 'DHCPv4' },
        { 'label': 'OSPF', 'value': 'OSPF' },
        { 'label': 'IPCP', 'value': 'IPCP' },
        { 'label': 'RIP', 'value': 'RIP' },
        { 'label': 'Static', 'value': 'Static' }],

      dnsoptlist: [
        { 'label': 'DHCP', 'value': 'DHCP' },
        { 'label': 'DHCPv4', 'value': 'DHCPv4' },
        { 'label': 'DHCPv6', 'value': 'DHCPv6' },
        { 'label': 'RouterAdvertisement', 'value': 'RouterAdvertisement' },
        { 'label': 'IPCP', 'value': 'IPCP' },
        { 'label': 'Static', 'value': 'Static' }],

      eth0form: {
        instid: null,
        name: null,
        enable: null,
        macaddr: null,
        vlan: null
      },
      eth1form: {
        instid: null,
        name: null,
        enable: null,
        macaddr: null,
        vlan: null
      },

      // data for table
      eth0ipData: [],
      eth0routeData: [],
      eth1ipData: [],
      eth1routeData: [],
      dnstableData: []
    }
  },

  computed: {
    eth0disable() {
      return !this.eth0form.enable
    },

    eth1disable() {
      return !this.eth1form.enable
    }
  },

  mounted: function() {
    this.getvalues()
  },

  methods: {
    async getvalues() {
      this.loading = true

      const ethdata = { data: [{ path: 'Device.Ethernet.' }] }
      const interfacedata = { data: [{ path: 'Device.IP.Interface.' }] }
      const routedata = { data: [{ path: 'Device.Routing.Router.' }] }
      const dnsdata = { data: [{ path: 'Device.DNS.Client.Server.' }] }

      const ret1 = await getparameters(ethdata, false)
      const ret2 = await getparameters(interfacedata, false)
      const ret3 = await getparameters(routedata, false)
      const ret4 = await getparameters(dnsdata, false)
      if (!ret1 || !ret2 || !ret3 || !ret4) {
        this.$message.error(this.$t('global.fetchfail'))
        this.loading = false
        return
      }

      // parse the ethdata
      if (this.parseeth(ethdata) === false) {
        this.$message.error(this.$t('network.etherr'))
        this.loading = false
        return
      }

      this.parseip(interfacedata)
      this.parseroute(routedata)
      this.parsedns(dnsdata)
      this.loading = false
    },

    async saveipvalues(insertrecords, removedrecords, updaterecords, ethform) {
      // Get ipdata
      let ipdata = this.eth0ipData
      if (ethform.instid !== this.eth0form.instid) {
        ipdata = this.eth1ipData
      }

      // process removed records firstly
      // Device.IP.Interface.1.IPv4Address.1.Enable
      for (const item of removedrecords.values()) {
        // delete IP entry
        const path = 'Device.IP.Interface.' + item.instid_if + '.'
        deleteobject(path).then(() => {
          // remove item from ipdata
          ipdata.splice(ipdata.findIndex((value, index, arr) => {
            return value.instid_if === item.instid_if
          }), 1)
        }, err => {
          this.$message.error(this.$t('global.deleteobjfail') + err)
          return
        })

        // delete vlan entry if exist
        // example: Device.Ethernet.VLANTermination.1.VLANID
        if (item.instid_vl !== undefined) {
          const path = 'Device.Ethernet.VLANTermination.' + item.instid_vl + '.'
          deleteobject(path).then(() => {
          }, err => {
            this.$message.error(this.$t('global.deleteobjfail') + err)
            return
          })
        }
      }

      // process updated records
      for (const item of updaterecords.values()) {
        const commpath = 'Device.IP.Interface.' + item.instid_if + '.IPv4Address.' + item.instid_ip + '.'
        const mtupath = 'Device.IP.Interface.' + item.instid_if + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: mtupath + 'MaxMTUSize', value: item.mtu },
           { path: commpath + 'IPAddress', value: item.ipaddr },
           { path: commpath + 'SubnetMask', value: item.subnetmask },
           { path: commpath + 'DefaultGateway', value: item.defaultgateway },
           { path: commpath + 'AddressingType', value: item.addressingtype }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }

        // update VLANID info
        if (item.instid_vl !== undefined) {
          if (!item.vlanid) { // vlan removed
            const vlanobjpath = 'Device.Ethernet.VLANTermination.' + item.instid_vl + '.'
            deleteobject(vlanobjpath).then(() => {
            }, err => {
              this.$message.error(this.$t('global.deleteobjfail') + err)
              return
            })

            item.instid_vl = undefined
            item.vlanid = ''

            // re-set lower layers of ipv4 addr
            const lowerlayerspath = 'Device.IP.Interface.' + item.instid_if + '.LowerLayers'
            const lowerlayersvalue = 'Device.Ethernet.Link.' + ethform.instid + '.'
            const ipv4addrlowlayers = { data: [{ path: lowerlayerspath, value: lowerlayersvalue }] }

            if (!setparameters(ipv4addrlowlayers, false)) {
              this.$message.error(this.$t('global.submitfail'))
              return
            }
          } else { // vlanid changed
            const vlanpath = 'Device.Ethernet.VLANTermination.' + item.instid_vl + '.'
            const parameters = { data: [{ path: vlanpath + 'VLANID', value: item.vlanid }] }

            if (!setparameters(parameters, false)) {
              this.$message.error(this.$t('global.submitfail'))
              return
            }
          }
        } else if ((item.vlanid !== undefined) && (item.vlanid !== '')) { // add VLAN to interface
          // add VLAN object
          const vlanojbpath = [{ path: 'Device.Ethernet.VLANTermination.' }]
          const vlanres = await addobject(vlanojbpath)
          if (vlanres.code !== 20000) {
            this.$message.error(this.$t('global.addobjfail'))
            return
          }
          const vlaninsid = vlanres.data.instancenumber
          item.instid_vl = vlaninsid

          // set vlan object
          const commvlanpath = 'Device.Ethernet.VLANTermination.' + vlaninsid + '.'
          const vlanparameters = { data:
         [{ path: commvlanpath + 'Enable', value: '1' },
           { path: commvlanpath + 'Name', value: ethform.name },
           { path: commvlanpath + 'LowerLayers', value: 'Device.Ethernet.Link.' + ethform.instid + '.' },
           { path: commvlanpath + 'VLANID', value: item.vlanid }] }

          if (!setparameters(vlanparameters, false)) {
            this.$message.error(this.$t('global.submitfail'))
            return
          }

          // re-set lower layers of ipv4 addr
          const lowerlayerspath = 'Device.IP.Interface.' + item.instid_if + '.LowerLayers'
          const lowerlayersvalue = 'Device.Ethernet.VLANTermination.' + vlaninsid + '.'
          const ipv4addrlowlayers = { data: [{ path: lowerlayerspath, value: lowerlayersvalue }] }

          if (!setparameters(ipv4addrlowlayers, false)) {
            this.$message.error(this.$t('global.submitfail'))
            return
          }
        }
      }

      // process insert records
      for (const item of insertrecords.values()) {
        // add interface object firstly
        const ojbpath = [{ path: 'Device.IP.Interface.' }]
        const res = await addobject(ojbpath)
        if (res.code !== 20000) {
          this.$message.error(this.$t('global.addobjfail'))
          return
        }
        const if_id = res.data.instancenumber

        // set object
        const commpath = 'Device.IP.Interface.' + if_id + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: '1' },
           { path: commpath + 'IPv4Enable', value: '1' },
           { path: commpath + 'IPv6Enable', value: '0' },
           { path: commpath + 'LowerLayers', value: 'Device.Ethernet.Link.' + ethform.instid + '.' },
           { path: commpath + 'MaxMTUSize', value: item.mtu },
           { path: commpath + 'Type', value: 'Normal' }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }

        // add ipv4 addr object firstly
        const ipv4addrojbpath = [{ path: 'Device.IP.Interface.' + if_id + '.IPv4Address.' }]
        const ipv4addrres = await addobject(ipv4addrojbpath)
        if (ipv4addrres.code !== 20000) {
          this.$message.error(this.$t('global.addobjfail'))
          return
        }
        const ipv4addrid = ipv4addrres.data.instancenumber

        // set ipv4 addr object
        const commipv4addrpath = 'Device.IP.Interface.' + if_id + '.IPv4Address.' + ipv4addrid + '.'
        const ipv4addrparameters = { data:
         [{ path: commipv4addrpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: commipv4addrpath + 'IPAddress', value: item.ipaddr },
           { path: commipv4addrpath + 'SubnetMask', value: item.subnetmask },
           { path: commipv4addrpath + 'DefaultGateway', value: item.defaultgateway },
           { path: commipv4addrpath + 'AddressingType', value: item.addressingtype }] }

        if (!setparameters(ipv4addrparameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }

        // set vlan if exist
        if ((item.vlanid !== undefined) && (item.vlanid !== '')) {
          // add VLAN object
          const vlanojbpath = [{ path: 'Device.Ethernet.VLANTermination.' }]
          const vlanres = await addobject(vlanojbpath)
          if (vlanres.code !== 20000) {
            this.$message.error(this.$t('global.addobjfail'))
            return
          }
          const vlaninsid = vlanres.data.instancenumber
          item.instid_vl = vlaninsid

          // set vlan object
          const commvlanpath = 'Device.Ethernet.VLANTermination.' + vlaninsid + '.'
          const vlanparameters = { data:
         [{ path: commvlanpath + 'Enable', value: '1' },
           { path: commvlanpath + 'LowerLayers', value: 'Device.Ethernet.Link.' + ethform.instid + '.' },
           { path: commvlanpath + 'VLANID', value: item.vlanid }] }

          if (!setparameters(vlanparameters, false)) {
            this.$message.error(this.$t('global.submitfail'))
            return
          }

          // re-set lower layers of ipv4 addr
          const lowerlayerspath = 'Device.IP.Interface.' + if_id + '.LowerLayers'
          const lowerlayersvalue = 'Device.Ethernet.VLANTermination.' + vlaninsid + '.'
          const ipv4addrlowlayers = { data: [{ path: lowerlayerspath, value: lowerlayersvalue }] }
          if (!setparameters(ipv4addrlowlayers, false)) {
            this.$message.error(this.$t('global.submitfail'))
            return
          }
        }

        // add item to ipData
        const newipitem = {}
        newipitem.enable = item.enable
        newipitem.ipaddr = item.ipaddr
        newipitem.subnetmask = item.subnetmask
        newipitem.defaultgateway = item.defaultgateway
        newipitem.addressingtype = item.addressingtype
        newipitem.mtu = item.mtu
        newipitem.vlanid = item.vlanid
        newipitem.instid_vl = item.instid_vl
        newipitem.instid_if = if_id
        newipitem.instid_ip = ipv4addrid

        ipdata.push(newipitem)
      }

      this.$message.success(this.$t('global.submitsuccess'))
    },

    async saveroutevalues(insertrecords, removedrecords, updaterecords, ethform) {
      // Get routedata
      let routedata = this.eth0routeData
      if (ethform.instid !== this.eth0form.instid) {
        routedata = this.eth1routeData
      }

      // process removed records firstly
      // Device.Routing.Router.1.IPv4Forwarding.1.Enable
      for (const item of removedrecords.values()) {
        const path = 'Device.Routing.Router.' + item.instid_route + '.'
        deleteobject(path).then(() => {
          // remove item from dnstableData
          routedata.splice(routedata.findIndex((value, index, arr) => {
            return value.instid_route === item.instid_route
          }), 1)
        }, err => {
          this.$message.error(this.$t('global.deleteobjfail') + err)
          return
        })
      }

      // process updated records
      for (const item of updaterecords.values()) {
        const commpath = 'Device.DNS.Client.Server.' + item.instid_route + '.IPv4Forwarding.' + item.instid_v4fw + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: commpath + 'StaticRoute', value: item.staticroute ? '1' : '0' },
           { path: commpath + 'DestIPAddress', value: item.destipaddr },
           { path: commpath + 'DestSubnetMask', value: item.destsubnetmask },
           { path: commpath + 'GatewayIPAddress', value: item.gatewayip },
           { path: commpath + 'Origin', value: item.origin }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }
      }

      // process insert records
      for (const item of insertrecords.values()) {
        // add router object firstly
        const ojbpath = [{ path: 'Device.Routing.Router.' }]
        const res = await addobject(ojbpath)
        if (res.code !== 20000) {
          this.$message.error(this.$t('global.addobjfail'))
          return
        }
        const routeid = res.data.instancenumber

        // add forwarding object firstly
        const fwojbpath = [{ path: 'Device.Routing.Router.' + routeid + '.IPv4Forwarding.' }]
        const fwres = await addobject(fwojbpath)
        if (fwres.code !== 20000) {
          this.$message.error(this.$t('global.addobjfail'))
          return
        }
        const fwid = fwres.data.instancenumber

        // set object
        const commpath = 'Device.Routing.Router.' + routeid + '.IPv4Forwarding.' + fwid + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: commpath + 'StaticRoute', value: item.staticroute ? '1' : '0' },
           { path: commpath + 'DestIPAddress', value: item.destipaddr },
           { path: commpath + 'DestSubnetMask', value: item.destsubnetmask },
           { path: commpath + 'GatewayIPAddress', value: item.gatewayip },
           { path: commpath + 'Interface', value: 'Device.IP.Interface.' + ethform.instid + '.' },
           { path: commpath + 'Origin', value: item.origin }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }

        // add item to dnstableData
        const newrouteitem = {}
        newrouteitem.enable = item.enable
        newrouteitem.staticroute = item.staticroute
        newrouteitem.destipaddr = item.destipaddr
        newrouteitem.destsubnetmask = item.destsubnetmask
        newrouteitem.gatewayip = item.gatewayip
        newrouteitem.origin = item.origin
        newrouteitem.instid_if = ethform.instid
        newrouteitem.instid_route = routeid
        newrouteitem.instid_v4fw = fwid

        routedata.push(newrouteitem)
      }

      this.$message.success(this.$t('global.submitsuccess'))
    },

    async savednsvalues(insertrecords, removedrecords, updaterecords) {
      // process remove records firstly
      for (const item of removedrecords.values()) {
        const path = 'Device.DNS.Client.Server.' + item.instid + '.'
        deleteobject(path).then(() => {
          // remove item from dnstableData
          this.dnstableData.splice(this.dnstableData.findIndex((value, index, arr) => {
            return value.instid === item.instid
          }), 1)
        }, err => {
          this.$message.error(this.$t('global.deleteobjfail') + err)
          return
        })
      }

      // process updated records
      for (const item of updaterecords.values()) {
        const commpath = 'Device.DNS.Client.Server.' + item.instid + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: commpath + 'DNSServer', value: item.dnsserver },
           { path: commpath + 'Type', value: item.type }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }
      }

      // process insert records
      for (const item of insertrecords.values()) {
        // add object firstly
        const ojbpath = [{ path: 'Device.DNS.Client.Server.' }]
        const res = await addobject(ojbpath)
        if (res.code !== 20000) {
          this.$message.error(this.$t('global.addobjfail'))
          return
        }

        // set object
        const commpath = 'Device.DNS.Client.Server.' + res.data.instancenumber + '.'
        const parameters = { data:
         [{ path: commpath + 'Enable', value: item.enable ? '1' : '0' },
           { path: commpath + 'DNSServer', value: item.dnsserver },
           { path: commpath + 'Type', value: item.type }] }

        if (!setparameters(parameters, false)) {
          this.$message.error(this.$t('global.submitfail'))
          return
        }

        // add item to dnstableData
        const newdnsitem = {}
        newdnsitem.enable = item.enable
        newdnsitem.dnsserver = item.dnsserver
        newdnsitem.type = item.type
        newdnsitem.instid = res.data.instancenumber

        this.dnstableData.push(newdnsitem)
      }

      this.$message.success(this.$t('global.submitsuccess'))
    },

    // Type of dns server is not editable
    activeCellMethod({ column, columnIndex }) {
      return columnIndex !== 2
    },

    parseeth(ethdata) {
      // parse the eth data
      this.eth0form.instid = 'empty'
      this.eth0form.vlan = []
      this.eth1form.instid = 'empty'
      this.eth1form.vlan = []
      const vlanmap = new Map()

      for (const item of ethdata.data) {
        const pathstr = item.path.split('.')

        if (pathstr.length === 5) {
          if (pathstr[2] === 'Link') {
            let ethtmp = null
            const instid = pathstr[3]
            if (this.eth0form.instid === instid) {
              ethtmp = this.eth0form
            } else if (this.eth1form.instid === instid) {
              ethtmp = this.eth1form
            } else if (this.eth0form.instid === 'empty') {
              ethtmp = this.eth0form
              this.eth0form.instid = instid
            } else if (this.eth1form.instid === 'empty') {
              ethtmp = this.eth1form
              this.eth1form.instid = instid
            }
            if (ethtmp == null) continue

            if (pathstr[4] === 'Name') {
              ethtmp.name = item.value
            } else if (pathstr[4] === 'MACAddress') {
              ethtmp.macaddr = item.value
            } else if (pathstr[4] === 'Enable') {
              ethtmp.enable = convertNum2Boolean(item.value)
            }
          }

          if (pathstr[2] === 'VLANTermination') {
            const instid = pathstr[3]
            let vlanobj = {}
            if (vlanmap.has(instid)) {
              vlanobj = vlanmap.get(instid)
            } else {
              vlanmap.set(instid, vlanobj)
            }

            if (pathstr[4] === 'Enable') {
              vlanobj.enable = convertNum2Boolean(item.value)
            } else if (pathstr[4] === 'Name') {
              vlanobj.name = item.value
            } else if (pathstr[4] === 'VLANID') {
              vlanobj.vlanid = item.value
              vlanobj.instid = pathstr[3]
            }
          }
        }
      }

      if (this.eth0form.instid === 'empty' && this.eth1form.instid === 'empty') return false

      // set vlan id of every eth
      for (const [key, value] of vlanmap.entries()) {
        const vlanitem = { instid: key, vlanid: value.vlanid }
        if (value.name === this.eth0form.name) {
          this.eth0form.vlan.push(vlanitem)
        } else if (value.name === this.eth1form.name) {
          this.eth1form.vlan.push(vlanitem)
        }
      }
      return true
    },

    parseip(ipdata) {
      const mtumap = new Map()
      const namemap = new Map()
      const typemap = new Map()
      const ipmap = new Map()
      const vlanmap = new Map()

      for (const item of ipdata.data) {
        const pathstr = item.path.split('.')
        if (pathstr[2] === 'Interface') {
          if ((pathstr.length === 5) && (pathstr[4] === 'MaxMTUSize')) {
          // example: Device.IP.Interface.2.MaxMTUSize = 1500
            mtumap.set(pathstr[3], item.value) // map from interfache instid to mtusiz
          } else if ((pathstr.length === 5) && (pathstr[4] === 'LowerLayers')) {
          // example: Device.IP.Interface.2.LowerLayers = Device.Ethernet.VLANTermination.1.
            const valtoken = item.value.split('.')
            if (valtoken[2] === 'VLANTermination') {
              vlanmap.set(pathstr[3], valtoken[valtoken.length - 2]) // map interface instance id 2 to vlan instance id 1
            }
          } else if ((pathstr.length === 5) && (pathstr[4] === 'Name')) {
          // example: Device.IP.Interface.2.Name = eth1.6
            namemap.set(pathstr[3], item.value) // map from interfache instid to name
          } else if ((pathstr.length === 5) && (pathstr[4] === 'Type')) {
          // example: Device.IP.Interface.2.Type = Normal
            typemap.set(pathstr[3], item.value) // map from instid to type
          } else if ((pathstr.length === 7) && (pathstr[4] === 'IPv4Address')) {
            // example: Device.IP.Interface.1.IPv4Address.1.IPAddress
            const instid_combine = pathstr[3] + ':' + pathstr[5]
            let ipv4 = {}
            if (ipmap.has(instid_combine)) {
              ipv4 = ipmap.get(instid_combine)
            } else {
              ipmap.set(instid_combine, ipv4)
              ipv4.instid_if = pathstr[3]
              ipv4.instid_ip = pathstr[5]
            }

            if (pathstr[6] === 'Enable') {
              ipv4.enable = convertNum2Boolean(item.value)
            } else if (pathstr[6] === 'IPAddress') {
              ipv4.ipaddr = item.value
            } else if (pathstr[6] === 'SubnetMask') {
              ipv4.subnetmask = item.value
            } else if (pathstr[6] === 'DefaultGateway') {
              ipv4.defaultgateway = item.value
            } else if (pathstr[6] === 'AddressingType') {
              ipv4.addressingtype = item.value
            }
          }
        }
      }

      // Set eth0ipData and eth1ipData based on maps
      for (const ipitem of ipmap.values()) {
        const type = typemap.get(ipitem.instid_if)
        if (type !== 'Normal') { // Process normal IP only, skip tunnel ip
          continue
        }

        // set MTU size
        ipitem.mtu = mtumap.get(ipitem.instid_if)
        ipitem.vlanid = ''

        // check it's name to decide it belongs to eth0 or eth1
        if (namemap.has(ipitem.instid_if)) {
          const name = namemap.get(ipitem.instid_if)

          // name maybe in the format: eth1.4
          if (name.indexOf(this.eth0form.name) !== -1) {
            this.eth0ipData.push(ipitem)
            // set vlan id of item
            if (vlanmap.has(ipitem.instid_if)) {
              const instid = vlanmap.get(ipitem.instid_if)
              for (const vlanitem of this.eth0form.vlan) {
                if (vlanitem.instid === instid) {
                  ipitem.vlanid = vlanitem.vlanid
                  ipitem.instid_vl = vlanitem.instid
                }
              }
            }
          } else if (name.indexOf(this.eth1form.name) !== -1) {
            this.eth1ipData.push(ipitem)

            // set vlan id of item
            if (vlanmap.has(ipitem.instid_if)) {
              const instid = vlanmap.get(ipitem.instid_if)
              for (const vlanitem of this.eth1form.vlan) {
                if (vlanitem.instid === instid) {
                  ipitem.vlanid = vlanitem.vlanid
                  ipitem.instid_vl = vlanitem.instid
                }
              }
            }
          }
        }
      }
    },

    parseroute(routedata) {
      const routemap = new Map()

      for (const item of routedata.data) {
        // example: Device.Routing.Router.1.IPv4Forwarding.1.Enable
        const pathstr = item.path.split('.')
        if (pathstr.length === 7 && pathstr[4] === 'IPv4Forwarding') {
          const instid_combine = pathstr[3] + ':' + pathstr[5]
          let ipv4route = {}
          if (routemap.has(instid_combine)) {
            ipv4route = routemap.get(instid_combine)
          } else {
            routemap.set(instid_combine, ipv4route)
            ipv4route.instid_route = pathstr[3]
            ipv4route.instid_v4fw = pathstr[5]
          }

          if (pathstr[6] === 'Enable') {
            ipv4route.enable = convertNum2Boolean(item.value)
          } else if (pathstr[6] === 'StaticRoute') {
            ipv4route.staticroute = convertNum2Boolean(item.value)
          } else if (pathstr[6] === 'DestIPAddress') {
            ipv4route.destipaddr = item.value
          } else if (pathstr[6] === 'DestSubnetMask') {
            ipv4route.destsubnetmask = item.value
          } else if (pathstr[6] === 'GatewayIPAddress') {
            ipv4route.gatewayip = item.value
          } else if (pathstr[6] === 'Interface') {
            // example: Device.Routing.Router.IPv4Forwarding.Interface = Device.IP.Interface.1.
            const valtoken = item.value.split('.')
            ipv4route.instid_if = valtoken[valtoken.length - 2]
          } else if (pathstr[6] === 'Origin') {
            ipv4route.origin = item.value
          }
        }
      }

      // assign rout data to eth0/1 form
      for (const routeitem of routemap.values()) {
        // check it's name to decide it belongs to eth0 or eth1
        if (routeitem.instid_if === this.eth0form.instid) {
          this.eth0routeData.push(routeitem)
        } else if (routeitem.instid_if === this.eth1form.instid) {
          this.eth1routeData.push(routeitem)
        }
      }
    },

    parsedns(dnsdata) {
      const dnsmap = new Map()

      for (const item of dnsdata.data) {
        // example: Device.DNS.Client.Server.1.Enable
        const pathstr = item.path.split('.')
        if (pathstr.length === 6 && pathstr[3] === 'Server') {
          let dns = {}
          if (dnsmap.has(pathstr[4])) {
            dns = dnsmap.get(pathstr[4])
          } else {
            dnsmap.set(pathstr[4], dns)
            dns.instid = pathstr[4]
          }

          if (pathstr[5] === 'Enable') {
            dns.enable = convertNum2Boolean(item.value)
          } else if (pathstr[5] === 'DNSServer') {
            dns.dnsserver = item.value
          } else if (pathstr[5] === 'Type') {
            dns.type = item.value
          }
        }
      }

      // assign dns data to dnstable
      for (const item of dnsmap.values()) {
        this.dnstableData.push(item)
      }
    },

    saveeth0info() {
      // save mac address of eth0 to link
      const pathstr = 'Device.Ethernet.Link.' + this.eth0form.instid + '.MACAddress'
      const parameters = { data: [{ path: pathstr, value: this.eth0form.macaddr }] }

      // save mac address of eth0 to interface?
      setparameters(parameters, false)
    },

    inserteth0ipEvent() {
      const record = {
        enable: true,
        mtu: '1500',
        ipaddr: '192.168.0.101',
        subnetmask: '255.255.255.0',
        defaultgateway: '',
        addressingtype: 'Static',
        vlanid: ''
      }
      this.$refs.eth0iptbl.insertAt(record, -1).then(({ row }) => this.$refs.eth0iptbl.setActiveRow(row))
    },

    removeeth0ipEvent() {
      const currow = this.$refs.eth0iptbl.getCurrentRow()
      this.$refs.eth0iptbl.remove(currow)
    },

    saveeth0ipEvent() {
      // only one IP without VLAN is allowed
      const { fullData } = this.$refs.eth0iptbl.getTableData()
      let counter = 0
      for (const item of fullData.values()) {
        if (!item.vlanid) {
          counter = counter + 1
        }
      }
      if (counter > 1) {
        this.$message.error(this.$t('network.iperr'))
        return
      }
      const { insertRecords, removeRecords, updateRecords } = this.$refs.eth0iptbl.getRecordset()
      const formdata = this.eth0form
      this.saveipvalues(insertRecords, removeRecords, updateRecords, formdata)
      this.$refs.eth0iptbl.reloadData(this.eth0ipData)
    },

    inserteth0routeEvent() {
      const record = {
        enable: true,
        staticroute: false,
        ipaddr: '192.168.0.101',
        destipaddr: '192.168.0.100',
        destsubnetmask: '255.255.255.0',
        gatewayip: '192.168.3.1',
        origin: 'Static'
      }
      this.$refs.eth0routetbl.insertAt(record, -1).then(({ row }) => this.$refs.eth0routetbl.setActiveRow(row))
    },

    removeeth0routeEvent() {
      const currow = this.$refs.eth0routetbl.getCurrentRow()
      this.$refs.eth0routetbl.remove(currow)
    },

    saveeth0routeEvent() {
      const insertrecords = this.$refs.eth0routetbl.getInsertRecords()
      const removedrecords = this.$refs.eth0routetbl.getRemoveRecords()
      const updaterecords = this.$refs.eth0routetbl.getUpdateRecords()
      const ethform = this.eth0form

      this.saveroutevalues(insertrecords, removedrecords, updaterecords, ethform)
      this.$refs.eth0routetbl.reloadData(this.eth0routeData)
    },

    saveeth1info() {
      // save mac address of eth1 to link
      const pathstr = 'Device.Ethernet.Link.' + this.eth1form.instid + '.MACAddress'
      const parameters = { data: [{ path: pathstr, value: this.eth1form.macaddr }] }

      // save mac address of eth0 to interface?
      setparameters(parameters, false)
    },

    inserteth1ipEvent() {
      const record = {
        enable: true,
        mtu: '1500',
        ipaddr: '192.168.0.101',
        subnetmask: '255.255.255.0',
        defaultgateway: '',
        addressingtype: 'Static',
        vlanid: ''
      }
      this.$refs.eth1iptbl.insertAt(record, -1).then(({ row }) => this.$refs.eth1iptbl.setActiveRow(row))
    },

    removeeth1ipEvent() {
      const currow = this.$refs.eth1iptbl.getCurrentRow()
      this.$refs.eth1iptbl.remove(currow)
    },

    saveeth1ipEvent() {
      // only one IP without VLAN is allowed
      const { fullData } = this.$refs.eth1iptbl.getTableData()
      let counter = 0
      for (const item of fullData.values()) {
        if (!item.vlanid) {
          counter = counter + 1
        }
      }
      if (counter > 1) {
        this.$message.error(this.$t('network.iperr'))
        return
      }

      const { insertRecords, removeRecords, updateRecords } = this.$refs.eth1iptbl.getRecordset()
      const formdata = this.eth1form
      this.saveipvalues(insertRecords, removeRecords, updateRecords, formdata)
      this.$refs.eth1iptbl.reloadData(this.eth1ipData)
    },

    inserteth1routeEvent() {
      const record = {
        enable: true,
        staticroute: false,
        ipaddr: '192.168.0.101',
        destipaddr: '192.168.0.100',
        destsubnetmask: '255.255.255.0',
        gatewayip: '192.168.3.1',
        origin: 'Static'
      }
      this.$refs.eth1routetbl.insertAt(record, -1).then(({ row }) => this.$refs.eth1routetbl.setActiveRow(row))
    },

    removeeth1routeEvent() {
      const currow = this.$refs.eth1routetbl.getCurrentRow()
      this.$refs.eth1routetbl.remove(currow)
    },

    saveeth1routeEvent() {
      const insertrecords = this.$refs.eth1routetbl.getInsertRecords()
      const removedrecords = this.$refs.eth1routetbl.getRemoveRecords()
      const updaterecords = this.$refs.eth1routetbl.getUpdateRecords()
      const ethform = this.eth1form

      this.saveroutevalues(insertrecords, removedrecords, updaterecords, ethform)
      this.$refs.eth1routetbl.reloadData(this.eth1routeData)
    },

    insertdnsEvent() {
      const record = {
        enable: true,
        dnsserver: '192.168.0.101',
        type: 'Static'
      }
      this.$refs.dnstbl.insertAt(record, -1).then(({ row }) => this.$refs.dnstbl.setActiveRow(row))
    },

    removdnsEvent() {
      const currow = this.$refs.dnstbl.getCurrentRow()
      this.$refs.dnstbl.remove(currow)
    },

    savednsEvent() {
      const insertrecords = this.$refs.dnstbl.getInsertRecords()
      const removedrecords = this.$refs.dnstbl.getRemoveRecords()
      const updaterecords = this.$refs.dnstbl.getUpdateRecords()

      this.savednsvalues(insertrecords, removedrecords, updaterecords)
      this.$refs.dnstbl.reloadData(this.dnstableData)
    }

  }
}
</script>

<style lang="scss" scoped>
.network {
  &-container {
    margin: 50px;
    width: 70%;
  }
  &-text {
    font-size: 15px;
    line-height: 10px;
    margin:10px 5px 5px 0px;
  }
}
</style>
