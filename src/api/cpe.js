import request from '@/utils/request'

// the map from id to path
const idmap = new Map([
  ['id_oui', 'Device.DeviceInfo.ManufacturerOUI'],
  ['id_modelname', 'Device.DeviceInfo.ModelName'],
  ['id_manufacturer', 'Device.DeviceInfo.Manufacturer'],
  ['id_serialnumber', 'Device.DeviceInfo.SerialNumber'],
  ['id_productclass', 'Device.DeviceInfo.ProductClass'],
  ['id_hardwarever', 'Device.DeviceInfo.HardwareVersion'],
  ['id_softwarever', 'Device.DeviceInfo.SoftwareVersion'],
  ['id_platform', 'Device.DeviceInfo.HardwarePlatform'],

  ['id_hemsurl', 'Device.ManagementServer.URL'],
  ['id_hemsuser', 'Device.ManagementServer.Username'],
  ['id_hemspassword', 'Device.ManagementServer.Password'],
  ['id_secgwaddr', 'Device.ManagementServer.X_SecGWServer'],
  ['id_perinformflg', 'Device.ManagementServer.PeriodicInformEnable'],
  ['id_perinforminterv', 'Device.ManagementServer.PeriodicInformInterval'],
  ['id_cpeconnurl', 'Device.ManagementServer.ConnectionRequestURL'],
  ['id_cpeconnauthflg', 'Internal.Tr69c.Config.connectionRequestAuthentication'],
  ['id_cpeconnuser', 'Device.ManagementServer.ConnectionRequestUsername'],
  ['id_cpeconnpassword', 'Device.ManagementServer.ConnectionRequestPassword'],
  ['id_cpeconntlsver', 'Device.ManagementServer.X_TLSVersion']
])

let oui = ''

/* replace id with path and replace oui str
   the example of input data
   ['id_modelname','id_manufacturer','id_serialnumber']

   the output example
   [
     { path: 'Device.ManagementServer.URL'}，
     { path: 'Device.ManagementServer.Username'}，
     { path: 'Device.ManagementServer.Password'}
   ]
*/
function getdataid2path(data) {
  const newdata = []
  for (const dataitem of data) {
    if (idmap.has(dataitem)) {
      const pathstr = idmap.get(dataitem).replace(/.X_/g, '.X_' + oui)
      newdata.push({ path: pathstr })
    } else {
      console.log('undefined id: %s', dataitem)
    }
  }
  return newdata
}

/* replace path with id
   the example of input data
   [
     { path: 'Device.ManagementServer.URL', value : '192.168.0.100'}，
     { path: 'Device.ManagementServer.Username', value : 'admin' }，
     { path: 'Device.ManagementServer.Password', value : 'password' }
   ]
   output data example
   {
     'id_cmsurl': '192.168.0.100'，
     'id_cmsusername': 'admin'，
     'id_cmspassword': 'password' }
   }

*/
export function getdatapath2id(data) {
  const newdata = {}
  for (const dataitem of data) {
    // find id for path
    for (var [key, value] of idmap) {
      if (value === dataitem.path) {
        newdata[key] = dataitem.value
        break
      }
    }
  }
  return newdata
}

/* check the id, get the path and replace oui str
   the example of input data
   [
    { id: 'id_acsusername', value: 'admin' }，
    { id: 'id_acspassword', value: 'password' }
   ]
*/
function setdataconvert(data) {
  const newdata = []
  for (const dataitem of data) {
    if (idmap.has(dataitem.id)) {
      const pathstr = idmap.get(dataitem.id).replace(/.X_/g, '.X_' + oui)
      newdata.push({ path: pathstr, value: dataitem.value })
    } else {
      console.log('undefined id: %s', dataitem)
    }
  }
  return newdata
}

// program should call this func before get/setparametervalues
export function setoui(ouival) {
  oui = ouival
}

/**
  setparametervalues request data example :
  {
    url: '/cpe/setparametervalues',
    method: 'post',
    data: [
      { path: 'Device.ManagementServer.URL', value: 'http://192.168.0.100' }，
      { path: 'Device.ManagementServer.Username', value: 'admin' }，
      { path: 'Device.ManagementServer.Password', value: 'password' }
    ]
  }

  setparametervalues response data example(success) :
  {
    code: 20000
  }

  The fail message is same for all the APIs, but with different code and message
  setparametervalues response data example(fail with code) :
  {
    code: 9001,
    message: 'Invalid parateter path.'
  }
 */
export function setparametervalues(inputdata) {
  return request({
    url: '/cpe/setparametervalues',
    method: 'post',
    data: setdataconvert(inputdata)
  })
}

/**
  getparametervalues request data example :
  {
    url: '/cpe/getparametervalues',
    method: 'post',
    data: [
      { path: 'Device.ManagementServer.URL' }，
      { path: 'Device.ManagementServer.Username' }，
      { path: 'Device.ManagementServer.Password' }
    ]
  }
  If a Parameter name argument is given as a PartialPath Name,
  the request is to be interpreted as a request to return all of
  the Parameters in the branch of the naming hierarchy that
  shares the same prefix as the argument

  getparametervalues response data example(success) :
  {
    code: 20000,
    data: [
      { path: 'Device.ManagementServer.URL', value: 'http://192.168.0.100' }，
      { path: 'Device.ManagementServer.Username', value: 'admin' }，
      { path: 'Device.ManagementServer.Password', value: 'password' }
    ]
  }

*/
export function getparametervalues(inputdata) {
  const reqdata = getdataid2path(inputdata)
  return request({
    url: '/cpe/getparametervalues',
    method: 'post',
    data: reqdata
  })
}

/**
  addobject request data example :
  {
    url: '/cpe/addobject',
    method: 'post',
    data:'Device.Routing.Router.'
  }

  addobject response data example(success) :
  {
    code: 20000,
    data: {instancenumber: 3}
  }

*/
export function addobject(data) {
  return request({
    url: '/cpe/addobject',
    method: 'post',
    data
  })
}

/**
  deleteobject request data example :
  {
    url: '/cpe/deleteobject',
    method: 'post',
    data:'Device.Routing.Router.1.'
  }

  deleteobject response data example(success) :
  {
    code: 20000
  }

*/
export function deleteobject(data) {
  return request({
    url: '/cpe/deleteobject',
    method: 'post',
    data
  })
}

/**
  reboot request data example :
  {
    url: '/cpe/reboot',
    method: 'post'
  }

  reboot response data example(success) :
  {
    code: 20000
  }
*/
export function reboot() {
  return request({
    url: '/cpe/reboot',
    method: 'post'
  })
}

/**
  factoryreset request data example :
  {
    url: '/cpe/factoryreset',
    method: 'post'
  }

  factoryreset response data example(success) :
  {
    code: 20000
  }
*/
export function factoryreset() {
  return request({
    url: '/cpe/factoryreset',
    method: 'post'
  })
}

/**
  ping request data example :
  {
    url: '/cpe/ping',
    method: 'post',
    data: '192.168.0.201'
  }

  ping response data example(success) :
  {
    code: 20000
  }

  ping response data example(fail) :
  {
    code: 20001,
    message: 'no response from target'
  }
*/
export function ping(dst) {
  return request({
    url: '/cpe/ping',
    method: 'post',
    data: dst
  })
}

/**
  getdbtree request data example :
  {
    url: '/cpe/getdevicedbtree',
    method: 'post',
    data: {
      isinternal: false,
      path: "Device.Security.X_D837BE_Psk.1.",
      depth: 1
    }
  }

  If a isinternal is true, return internal db tree, else return device db tree
  The depth is 1, only return the item and its direct children parameters

  getdbtree response data example(success) :
  {
    code: 20000,
    data: [
      {
        "meta": {
          "path": "Device.Security.X_D837BE_Psk.1.",
          "type": "instance",
          "instNum": 1
        },
        "val": [
          {
            "meta": {
              "path": "Device.Security.X_D837BE_Psk.1.Enable",
              "type": "boolean",
              "cType": "BOOL8",
              "range": ""
            },
            "val": "1",
            "flag": 3
          },
          {
            "meta": {
              "path": "Device.Security.X_D837BE_Psk.1.Encoding",
              "type": "string",
              "cType": "UINT32_ENUM",
              "range": "ASCII,Hex,Base64"
            },
            "val": "ASCII",
            "flag": 3
          },
          {
            "meta": {
              "path": "Device.Security.X_D837BE_Psk.1.PreSharedKey",
              "type": "string",
              "cType": "INT8[]",
              "range": "128"
            },
            "val": "123456",
            "flag": 3
          }
        ],
        "flag": 3
      }
    ]
  }
*/
export function getdbtree(data) {
  return request({
    url: '/cpe/getdbtree',
    method: 'post',
    data
  })
}
