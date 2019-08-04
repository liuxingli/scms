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
  ['id_cpeconntlsver', 'Device.ManagementServer.X_TLSVersion'],

  ['id_fapsrvnum', 'Device.Services.FAPServiceNumberOfEntries'],
  ['id_enbtype', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.Common.EnbType'],
  ['id_adminstate', 'Device.Services.FAPService.1.FAPControl.LTE.AdminState'],
  ['id_duplexmode', 'Device.Services.FAPService.1.Capabilities.LTE.DuplexMode'],
  ['id_plmnid', 'Device.Services.FAPService.1.CellConfig.LTE.EPC.PLMNList.1.PLMNID'],
  ['id_tac', 'Device.Services.FAPService.1.CellConfig.LTE.EPC.TAC'],
  ['id_secgwserver', 'Device.Services.FAPService.1.FAPControl.LTE.Gateway.SecGWServer1'],
  ['id_s1siglinksrv', 'Device.Services.FAPService.1.FAPControl.LTE.Gateway.S1SigLinkServerList'],
  ['id_privatenwflg', 'Device.Services.FAPService.1.X_Private.Enabled'],
  ['id_s1status', 'Device.Services.FAPService.1.FAPControl.LTE.Gateway.X_S1Status'],
  ['id_s1retrymaxnum', 'Device.Services.FAPService.1.FAPControl.LTE.Gateway.X_S1RetryMaxNum'],
  ['id_sctpassocstatus', 'Device.Services.FAPService.1.Transport.SCTP.Assoc.1.Status'],

  ['id_cell1_cellid', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.Common.CellIdentity'],
  ['id_cell1_opState', 'Device.Services.FAPService.1.FAPControl.LTE.OpState'],
  ['id_cell1_connuenum', 'Device.Services.FAPService.1.X_Status.UeNumber'],
  ['id_cell1_voltenum', 'Device.Services.FAPService.1.X_Status.VolteUeNumber'],
  ['id_cell1_candfreqlist', 'Device.Services.FAPService.1.FAPControl.LTE.SelfConfig.SONConfigParam.CandidateARFCNList'],
  ['id_cell1_freqdl', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.EARFCNDL'],
  ['id_cell1_frequl', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.EARFCNUL'],
  ['id_cell1_band', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.FreqBandIndicator'],
  ['id_cell1_candpcilist', 'Device.Services.FAPService.1.FAPControl.LTE.SelfConfig.SONConfigParam.CandidatePCIList'],
  ['id_cell1_pci', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.PhyCellID'],
  ['id_cell1_dlbandwidth', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.DLBandwidth'],
  ['id_cell1_ulbandwidth', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.ULBandwidth'],
  ['id_cell1_referencesignalpower', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.ReferenceSignalPower'],
  ['id_cell1_pagain', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.X_PAGain'],
  ['id_cell1_subframepattern', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.TDDFrame.SubFrameAssignment'],
  ['id_cell1_specialsubframepattern', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.TDDFrame.SpecialSubframePatterns'],
  ['id_cell1_txantennacount', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.AntennaInfo.AntennaPortsCount'],
  ['id_cell1_rxantennacount', 'Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.AntennaInfo.X_RxAntennaPortsCount'],

  ['id_cell2_cellid', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.Common.CellIdentity'],
  ['id_cell2_opState', 'Device.Services.FAPService.2.FAPControl.LTE.OpState'],
  ['id_cell2_connuenum', 'Device.Services.FAPService.2.X_Status.UeNumber'],
  ['id_cell2_voltenum', 'Device.Services.FAPService.2.X_Status.VolteUeNumber'],
  ['id_cell2_candfreqlist', 'Device.Services.FAPService.2.FAPControl.LTE.SelfConfig.SONConfigParam.CandidateARFCNList'],
  ['id_cell2_freqdl', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.EARFCNDL'],
  ['id_cell2_frequl', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.EARFCNUL'],
  ['id_cell2_band', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.FreqBandIndicator'],
  ['id_cell2_candpcilist', 'Device.Services.FAPService.2.FAPControl.LTE.SelfConfig.SONConfigParam.CandidatePCIList'],
  ['id_cell2_pci', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.PhyCellID'],
  ['id_cell2_dlbandwidth', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.DLBandwidth'],
  ['id_cell2_ulbandwidth', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.ULBandwidth'],
  ['id_cell2_referencesignalpower', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.ReferenceSignalPower'],
  ['id_cell2_pagain', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.X_PAGain'],
  ['id_cell2_subframepattern', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.TDDFrame.SubFrameAssignment'],
  ['id_cell2_specialsubframepattern', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.TDDFrame.SpecialSubframePatterns'],
  ['id_cell2_txantennacount', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.AntennaInfo.AntennaPortsCount'],
  ['id_cell2_rxantennacount', 'Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.AntennaInfo.X_RxAntennaPortsCount'],

  ['id_currentsyncmode', 'Device.Services.FAPService.1.X_SON.Sync.CurrentSyncMode'],
  ['id_syncstatus', 'Device.Services.FAPService.1.X_SON.Sync.Status'],
  ['id_syncsucctime', 'Device.Services.FAPService.1.X_SON.Sync.SuccessTime'],
  ['id_syncswitchflg', 'Device.Services.FAPService.1.X_SON.Sync.SyncSwitchEnable'],
  ['id_syncmode1', 'Device.Services.FAPService.1.X_SON.Sync.SyncMode1'],
  ['id_syncmode2', 'Device.Services.FAPService.1.X_SON.Sync.SyncMode2'],
  ['id_syncmode3', 'Device.Services.FAPService.1.X_SON.Sync.SyncMode3'],
  ['id_syncfailhandling', 'Device.Services.FAPService.1.X_SON.Sync.SyncFailureHandling'],
  ['id_timingcorroffset', 'Device.Services.FAPService.1.X_SON.Sync.TimingCorrectionOffset'],
  ['id_frameshift', 'Device.Services.FAPService.1.X_RF.rfFrameTimingAdjustment.frameShift'],

  ['id_gpsequipped', 'Device.Services.FAPService.1.Capabilities.GPSEquipped'],
  ['id_gpsscanstatus', 'Device.FAP.GPS.ScanStatus'],
  ['id_gpserrinfo', 'Device.FAP.GPS.ErrorDetails'],
  ['id_gpslastscantime', 'Device.FAP.GPS.LastScanTime'],
  ['id_gpslastsucctime', 'Device.FAP.GPS.LastSuccessfulScanTime'],
  ['id_gpsfix', 'Device.FAP.GPS.ContinuousGPSStatus.GotFix'],
  ['id_gpslatitude', 'Device.FAP.GPS.ContinuousGPSStatus.Latitude'],
  ['id_gpslongitude', 'Device.FAP.GPS.ContinuousGPSStatus.Longitude'],
  ['id_gpselevation', 'Device.FAP.GPS.ContinuousGPSStatus.Elevation'],
  ['id_gpsstatellites', 'Device.FAP.GPS.ContinuousGPSStatus.SatellitesTracked'],
  ['id_gpsstability', 'Device.FAP.GPS.ContinuousGPSStatus.X_Stability'],
  ['id_gpspostuncertain', 'Device.FAP.GPS.ContinuousGPSStatus.HorizontalPositionUncertainty'],

  ['id_ptp_brcm_status', 'Device.Time.X_Ptp4l.Status'],
  ['id_ptp_brcm_transport', 'Device.Time.X_Ptp4l.Transport'],
  ['id_ptp_brcm_role', 'Device.Time.X_Ptp4l.Role'],
  ['id_ptp_brcm_secgw', 'Device.Time.X_Ptp4l.SecGWAddr'],
  ['id_ptp_brcm_master', 'Device.Time.X_Ptp4l.MasterAddr'],
  ['id_ptp_qual_status', 'Device.Services.FAPService.1.X_TFCS.tfcsSyncSrcStatus.2.Status'],
  ['id_ptp_qual_transport', 'Device.Services.FAPService.1.X_PTP.ptpConfig.transport'],
  ['id_ptp_qual_role', 'Device.Services.FAPService.1.X_PTP.ptpConfig.role'],
  ['id_ptp_qual_secgw', 'Device.Services.FAPService.1.X_PTP.ptpConfig.SecGWServer'],
  ['id_ptp_qual_master', 'Device.Services.FAPService.1.X_PTP.ptpConfig.unicastAddr'],

  ['id_nl_checkrsp', 'Device.Services.FAPService.1.X_SON.CNM.CheckRSPEnable'],
  ['id_nl_checkbw', 'Device.Services.FAPService.1.X_SON.CNM.CheckBWEnable'],
  ['id_nl_donorbwthreshold', 'Device.Services.FAPService.1.X_SON.CNM.DonorBWThreshold'],
  ['id_nl_donorrsrpthreshold', 'Device.Services.FAPService.1.X_SON.CNM.DonorRSPThreshold'],
  ['id_nl_earfcndllist', 'Device.Services.FAPService.1.X_SON.Sync.EARFCNDLList'],
  ['id_nl_successrat', 'Device.Services.FAPService.1.X_SON.Sync.SuccessRatType'],
  ['id_nl_successearfcn', 'Device.Services.FAPService.1.X_SON.Sync.SuccessArfcn'],
  ['id_nl_sucesspci', 'Device.Services.FAPService.1.X_SON.Sync.SuccessPci'],

  ['id_time_ntpstatus', 'Device.Time.Status'],
  ['id_time_ntpserver1', 'Device.Time.NTPServer1'],
  ['id_time_ntpserver2', 'Device.Time.NTPServer2'],
  ['id_time_ntpserver3', 'Device.Time.NTPServer3'],
  ['id_time_ntpserver4', 'Device.Time.NTPServer4'],
  ['id_time_ntpserver5', 'Device.Time.NTPServer5'],
  ['id_time_secgw', 'Device.Time.X_SecGWAddr'],
  ['id_time_timezone', 'Device.Time.LocalTimeZone'],
  ['id_time_currentsystem', 'Device.Time.X_CurrentTime'],

  ['id_logsrv_connpolicy', 'Device.DebugMgmt.Traces.LogServer.ConnectingPolicy'],
  ['id_logsrv_serverip', 'Device.DebugMgmt.Traces.LogServer.IPAddress'],
  ['id_logsrv_localinterface', 'Device.DebugMgmt.Traces.LogServer.Interface'],
  ['id_logsrv_cpuhport', 'Device.DebugMgmt.Traces.LogServer.CpuhPort'],
  ['id_logsrv_cpulport', 'Device.DebugMgmt.Traces.LogServer.CpulPort'],
  ['id_logsrv_cpuhlogpath', 'Device.DebugMgmt.Traces.LogServer.CpuhDestPath'],
  ['id_logsrv_cpullogpath', 'Device.DebugMgmt.Traces.LogServer.CpulDestPath'],

  ['id_devicelog_uploadurl', 'Device.LogMgmt.URL'],
  ['id_devicelog_username', 'Device.LogMgmt.Username'],
  ['id_devicelog_password', 'Device.LogMgmt.Password'],
  ['id_devicelog_periodicflg', 'Device.LogMgmt.PeriodicUploadEnable'],
  ['id_devicelog_interval', 'Device.LogMgmt.PeriodicUploadInterval'],

  ['id_upload_enable', 'Device.X_DebugMgmt.Upload.Enable'],
  ['id_upload_url', 'Device.X_DebugMgmt.Upload.UploadURL'],
  ['id_upload_username', 'Device.X_DebugMgmt.Upload.Username'],
  ['id_upload_password', 'Device.X_DebugMgmt.Upload.Password'],
  ['id_upload_periodic', 'Device.X_DebugMgmt.Upload.PeriodicUploadPolicy'],
  ['id_upload_maxexceed', 'Device.X_DebugMgmt.Upload.UploadPolicyWhenMaxExceeded'],
  ['id_upload_alarm', 'Device.X_DebugMgmt.Upload.UploadPolicyWhenAlarmRaised'],
  ['id_upload_poweron', 'Device.X_DebugMgmt.Upload.UploadPolicyWhenPowerOn'],

  ['id_pm_enable', 'Device.FAP.PerfMgmt.Config.1.Enable'],
  ['id_pm_url', 'Device.FAP.PerfMgmt.Config.1.URL'],
  ['id_pm_username', 'Device.FAP.PerfMgmt.Config.1.Username'],
  ['id_pm_password', 'Device.FAP.PerfMgmt.Config.1.Password'],
  ['id_pm_interval', 'Device.FAP.PerfMgmt.Config.1.PeriodicUploadInterval'],

  ['id_hwwatchdog_enable', 'Device.Security.WatchdogEnable']
])

// the oui of device,oui should be get from device firstly
export let cpe_oui = ''

/* helper func for getparametersvalues, user should call this func instead of getparametervalues
   the example of input data
   {
     'id_cmsurl': ''，
     'id_cmsusername': ''，
     'id_cmspassword': ''
   }

   output data example
   {
     'id_cmsurl': '192.168.0.100'，
     'id_cmsusername': 'admin'，
     'id_cmspassword': 'password'
   }
*/

export async function getparameters(parameters) {
  let result = false
  let ouiflg = true

  // get oui firstly if does not exist
  if (!cpe_oui) {
    ouiflg = false
    try {
      const ouipath = [{ path: 'Device.DeviceInfo.ManufacturerOUI' }]
      const res = await getparametervalues(ouipath)
      for (const dataitem of res.data) {
        // find id for path
        for (var [key, value] of idmap) {
          if (value === dataitem.path) {
            if (key === 'id_oui') {
              cpe_oui = dataitem.value
              ouiflg = true
              break
            }
          }
        }
      }
    } catch (err) {
      console.log('err in getparameters when get OUI:' + err)
    }
  }

  // get parameters if oui is ready
  if (ouiflg) {
    try {
      // convert id to path and replace .X_ with OUI
      const pathdata = []
      for (const elname in parameters) {
        if (idmap.has(elname)) {
          const pathstr = idmap.get(elname).replace(/.X_/g, '.X_' + cpe_oui + '_')
          pathdata.push({ path: pathstr })
        } else {
          console.log('undefined id: %s', elname)
        }
      }
      const res = await getparametervalues(pathdata)
      for (const dataitem of res.data) {
      // find id for path
        for (const [id, path] of idmap) {
          const newpath = path.replace(/.X_/g, '.X_' + cpe_oui + '_')
          if (newpath === dataitem.path) {
            parameters[id] = dataitem.value
            break
          }
        }
      }
      result = true
    } catch (err) {
      console.log('error in getparameters:' + err)
    }
  }
  return result
}

/* helper func for setparametersvalues, user should call this func instead of setparametervalues
   the example of input data
   {
     'id_cmsurl': '192.168.0.100'，
     'id_cmsusername': 'user'，
     'id_cmspassword': 'password'
   }
*/
export function setparameters(parameters) {
  // convert from id to path
  const pathdata = []
  for (const elname in parameters) {
    if (typeof (elname) !== Object) {
      if (idmap.has(elname)) {
        const pathstr = idmap.get(elname).replace(/.X_/g, '.X_' + cpe_oui + '_')
        const valuestr = parameters[elname]
        pathdata.push({ path: pathstr, value: valuestr })
      } else {
        console.log('undefined id: %s', elname)
      }
    }
  }

  let result = true
  setparametervalues(pathdata).then(() => {
  }, err => {
    console.log('error in Setparameters ' + err)
    result = false
  })

  return result
}

export async function filedownload(type, filename) {
  try {
    const res = await downloadfile(type, filename)
    const blob = new Blob([res])
    if ('download' in document.createElement('a')) { // Not IE
      const elink = document.createElement('a')
      elink.download = filename
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click()
      URL.revokeObjectURL(elink.href) // Release URL object
      document.body.removeChild(elink)
    } else { // IE10+
      navigator.msSaveBlob(blob, filename)
    }
    return true
  } catch (err) {
    console.log('error duing download file:' + filename + ' with err:' + err)
    return false
  }
}

/* Following are the API func between Web and Server */
/* ************************************************* */

/**
  getparametervalues request data example :
  {
    url: '/action/cpe_getparametervalues',
    method: 'post',
    data: [
      { path: 'Device.ManagementServer.URL' }，
      { path: 'Device.ManagementServer.Username' }，
      { path: 'Device.ManagementServer.Password' }
    ]
  }

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
  return request({
    url: '/action/cpe_getparametervalues',
    method: 'post',
    data: inputdata
  })
}

/**
  setparametervalues request data example :
  {
    url: '/action/cpe_setparametervalues',
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
    code: 20001,
    message: 'Invalid parateter path.'
  }
 */
export function setparametervalues(inputdata) {
  return request({
    url: '/action/cpe_setparametervalues',
    method: 'post',
    data: inputdata
  })
}

/**
  addobject request data example :
  {
    url: '/action/cpe_addobject',
    method: 'post',
    data: {path:'Device.Routing.Router.'}
  }

  addobject response data example(success) :
  {
    code: 20000,
    data: {instancenumber: 3}
  }
*/
export function addobject(pathval) {
  return request({
    url: '/action/cpe_addobject',
    method: 'post',
    data: { path: pathval }
  })
}

/**
  deleteobject request data example :
  {
    url: '/action/cpe_deleteobject',
    method: 'post',
    data:{ path:'Device.Routing.Router.1.'}
  }

  deleteobject response data example(success) :
  {
    code: 20000
  }
*/
export function deleteobject(pathval) {
  return request({
    url: '/action/cpe_deleteobject',
    method: 'post',
    data: { path: pathval }
  })
}

/**
  reboot request data example :
  {
    url: '/action/cpe_reboot',
    method: 'post'
  }

  reboot response data example(success) :
  {
    code: 20000
  }
*/
export function reboot() {
  return request({
    url: '/action/cpe_reboot',
    method: 'post'
  })
}

/**
  factoryreset request data example :
  {
    url: '/action/cpe_factoryreset',
    method: 'post'
  }

  factoryreset response data example(success) :
  {
    code: 20000
  }
*/
export function factoryreset() {
  return request({
    url: '/action/cpe_factoryreset',
    method: 'post'
  })
}

/**
  ping request data example :
  {
    url: '/action/cpe_ping',
    method: 'post',
    data: {dstip: '192.168.0.201'}
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
    url: '/action/cpe_ping',
    method: 'post',
    data: { dstip: dst }
  })
}

/**
  getdbtree request data example :
  {
    url: '/action/getdbtree',
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
    url: '/action/cpe_getdbtree',
    method: 'post',
    data
  })
}

/**
  getlogdumpfilelist request data example :
  {
    url: '/action/getlogdumpfilelist',
    method: 'post',
  }

  response data example(success) :
  {
    code: 20000,
    data: ['Devicelog.tgz', 'ps.log', 'dmesg.log', 'fsm.log']
  }

*/
export function getlogdumpfilelist() {
  return request({
    url: '/action/cpe_getlogdumpfilelist',
    method: 'post'
  })
}

/**
  downloadfile request data example :
  {
    url: '/action/cpe_downloadfile',
    method: 'get',
    params: {
            type: device,
            filename: device.xml
          }
  }

  Filetype: 'calibration', 'pdr','pacalibration','logo','firmware',
            'operatordefault','device','internal','son','cndata','log'

  the header of response should be
  headers['content-type'] === 'application/octet-stream;charset=utf-8'
  headers['Content-Disposition'] === "attachment;filename=device.xml"
*/
export function downloadfile(type, filename) {
  return request({
    url: '/action/cpe_downloadfile',
    method: 'get',
    params: {
      type: type,
      filename: filename
    }
  })
}

/**
  uploadfile request data example :
  {
    url: '/action/cpe_uploadfile',
    method: 'post',
    data：
  }
  Filetype: 'calibration', 'pdr','pacalibration','logo','firmware',
            'operatordefault','device','internal','son','cndata'
*/
export function uploadfile(fileobj, filetype) {
  const param = new FormData()
  param.append(filetype, fileobj.file)
  return request({
    method: 'post',
    url: '/action/cpe_uploadfile',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: param
  })
}

/**
  deletefile request data example :
  {
    url: '/action/cpe_deletefile',
    method: 'post',
    data: {filename:'pslog.tgz'}
  }
*/
export function deletefile(filename) {
  return request({
    method: 'post',
    url: '/action/cpe_deletefile',
    data: { filename: filename }
  })
}

/**
  upgrade request data example :
  {
    url: '/action/cpe_upgrade',
    method: 'post',
    data: {filename:'firmware1.0.tgz'}
  }
*/
export function upgrade(filename) {
  return request({
    url: '/action/cpe_upgrade',
    method: 'post',
    data: { filename: filename }
  })
}

/**
  queryupgradestatus request data example :
  {
    url: '/action/cpe_queryupgradestatus',
    method: 'post'
  }

  status: 'fail','complete','progress'
  if status is fail, message is also attached
  response data example:
  {
    code: 20000,
    data: { status:'fail',
            message:'file corrupted'
          }
  }
*/
export function queryupgradestatus() {
  return request({
    url: '/action/cpe_queryupgradestatus',
    method: 'post'
  })
}
