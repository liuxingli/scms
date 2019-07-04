
const devicevalues = new Map([
  ['Device.DeviceInfo.ManufacturerOUI', 'D837BE'],
  ['Device.DeviceInfo.ModelName', 'PICO Cell'],
  ['Device.DeviceInfo.Manufacturer', 'Dalian Gongjin'],
  ['Device.DeviceInfo.SerialNumber', '229465200002'],
  ['Device.DeviceInfo.ProductClass', 'ENB-F02004-B01'],
  ['Device.DeviceInfo.HardwareVersion', 'v1.0'],
  ['Device.DeviceInfo.SoftwareVersion', 'V1.0.0'],
  ['Device.DeviceInfo.HardwarePlatform', 'FSM9055.PX.3.0.2(r2.2@135110.2),FSM9055.DV.3.0.2(r2.2)'],

  ['Device.ManagementServer.URL', 'http://192.168.0.100'],
  ['Device.ManagementServer.Username', 'admin'],
  ['Device.ManagementServer.Password', 'password']
])

export default [
  {
    url: '/cpe/setparametervalues',
    type: 'post',
    response: config => {
      const inputdata = config.body.data
      for (const dataitem of inputdata) {
        devicevalues.set(dataitem.path, dataitem.value)
      }
      return {
        code: 20000
      }
    }
  },

  {
    url: '/cpe/getparametervalues',
    type: 'post',
    response: config => {
      let errflg = false
      const retdata = []
      const inputdata = config.body
      for (const dataitem of inputdata) {
        if (devicevalues.has(dataitem.path)) { // get value
          retdata.push({ path: dataitem.path, value: devicevalues.get(dataitem.path) })
        } else { // unsupport value
          errflg = true
          break
        }
      }

      if (errflg) {
        return {
          code: 20001,
          message: 'unsupport data path'
        }
      } else {
        return {
          code: 20000,
          data: retdata
        }
      }
    }
  },

  {
    url: '/cpe/reboot',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/cpe/factoryreset',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/cpe/ping',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  }

]
