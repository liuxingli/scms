
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
  ['Device.ManagementServer.Password', 'password'],
  ['Device.ManagementServer.X_D837BE_SecGWServer', '192.168.0.102'],
  ['Device.ManagementServer.PeriodicInformEnable', 'true'],
  ['Device.ManagementServer.PeriodicInformInterval', '1800'],
  ['Device.ManagementServer.ConnectionRequestURL', '192.168.0.101:30005'],
  ['Internal.Tr69c.Config.connectionRequestAuthentication', '1'],
  ['Device.ManagementServer.ConnectionRequestUsername', 'test'],
  ['Device.ManagementServer.ConnectionRequestPassword', 'testpw'],
  ['Device.ManagementServer.X_D837BE_TLSVersion', 'TLS_v1_1'],

  ['Device.Services.FAPServiceNumberOfEntries', '2'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.Common.EnbType', '1'],
  ['Device.Services.FAPService.1.FAPControl.LTE.AdminState', 'false'],
  ['Device.Services.FAPService.1.Capabilities.LTE.DuplexMode', 'TDDMode'],
  ['Device.Services.FAPService.1.CellConfig.LTE.EPC.PLMNList.1.PLMNID', '46000'],
  ['Device.Services.FAPService.1.CellConfig.LTE.EPC.TAC', '10'],
  ['Device.Services.FAPService.1.FAPControl.LTE.Gateway.SecGWServer1', '192.168.0.111'],
  ['Device.Services.FAPService.1.FAPControl.LTE.Gateway.S1SigLinkServerList', '192.168.0.122'],
  ['Device.Services.FAPService.1.X_D837BE_Private.Enabled', '0'],
  ['Device.Services.FAPService.1.FAPControl.LTE.Gateway.X_D837BE_S1Status', 'Indeterminate'],
  ['Device.Services.FAPService.1.FAPControl.LTE.Gateway.X_D837BE_S1RetryMaxNum', '0'],

  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.Common.CellIdentity', '257'],
  ['Device.Services.FAPService.1.FAPControl.LTE.OpState', '0'],
  ['Device.Services.FAPService.1.X_D837BE_Status.UeNumber', '32'],
  ['Device.Services.FAPService.1.X_D837BE_Status.VolteUeNumber', '10'],
  ['Device.Services.FAPService.1.FAPControl.LTE.SelfConfig.SONConfigParam.CandidateARFCNList', '39148,38950'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.EARFCNDL', '39148'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.EARFCNUL', '39148'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.FreqBandIndicator', '40'],
  ['Device.Services.FAPService.1.FAPControl.LTE.SelfConfig.SONConfigParam.CandidatePCIList', '0..503'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.PhyCellID', '48'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.DLBandwidth', '100'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.ULBandwidth', '100'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.ReferenceSignalPower', '-14..-10'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.RF.X_D837BE_PAGain', '0'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.TDDFrame.SubFrameAssignment', '2'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.TDDFrame.SpecialSubframePatterns', '7'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.AntennaInfo.AntennaPortsCount', '2'],
  ['Device.Services.FAPService.1.CellConfig.LTE.RAN.PHY.AntennaInfo.X_D837BE_RxAntennaPortsCount', '2'],

  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.Common.CellIdentity', '258'],
  ['Device.Services.FAPService.2.FAPControl.LTE.OpState', '1'],
  ['Device.Services.FAPService.2.X_D837BE_Status.UeNumber', '16'],
  ['Device.Services.FAPService.2.X_D837BE_Status.VolteUeNumber', '20'],
  ['Device.Services.FAPService.2.FAPControl.LTE.SelfConfig.SONConfigParam.CandidateARFCNList', '39148,38950'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.EARFCNDL', '38950'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.EARFCNUL', '38950'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.FreqBandIndicator', '40'],
  ['Device.Services.FAPService.2.FAPControl.LTE.SelfConfig.SONConfigParam.CandidatePCIList', '0..503'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.PhyCellID', '49'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.DLBandwidth', '100'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.ULBandwidth', '100'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.ReferenceSignalPower', '-14..-10'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.RF.X_D837BE_PAGain', '0'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.TDDFrame.SubFrameAssignment', '2'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.TDDFrame.SpecialSubframePatterns', '7'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.AntennaInfo.AntennaPortsCount', '2'],
  ['Device.Services.FAPService.2.CellConfig.LTE.RAN.PHY.AntennaInfo.X_D837BE_RxAntennaPortsCount', '2'],

  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.CurrentSyncMode', 'GPS'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.Status', 'Success'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SuccessTime', '2019-06-18T05:54:48.067Z'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SyncSwitchEnable', '0'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SyncMode1', 'GPS'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SyncMode2', 'PTP1588'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SyncMode3', 'Sniffer'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SyncFailureHandling', 'Ignore'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.TimingCorrectionOffset', '0'],
  ['Device.Services.FAPService.1.X_D837BE_RF.rfFrameTimingAdjustment.frameShift', '0'],

  ['Device.Services.FAPService.1.Capabilities.GPSEquipped', '1'],
  ['Device.FAP.GPS.ScanStatus', 'Indeterminate'],
  ['Device.FAP.GPS.ErrorDetails', ''],
  ['Device.FAP.GPS.LastScanTime', '0001-01-01T00:00:00Z'],
  ['Device.FAP.GPS.LastSuccessfulScanTime', '0001-01-01T00:00:00Z'],
  ['Device.FAP.GPS.ContinuousGPSStatus.GotFix', '1'],
  ['Device.FAP.GPS.ContinuousGPSStatus.Latitude', '13,323,833'],
  ['Device.FAP.GPS.ContinuousGPSStatus.Longitude', '50,000,000'],
  ['Device.FAP.GPS.ContinuousGPSStatus.Elevation', '25,000,000'],
  ['Device.FAP.GPS.ContinuousGPSStatus.SatellitesTracked', '2'],
  ['Device.FAP.GPS.ContinuousGPSStatus.X_D837BE_Stability', '20'],
  ['Device.FAP.GPS.ContinuousGPSStatus.HorizontalPositionUncertainty', '50'],

  ['Device.Time.X_D837BE_Ptp4l.Status', 'Off'],
  ['Device.Time.X_D837BE_Ptp4l.Transport', 'UDPv4'],
  ['Device.Time.X_D837BE_Ptp4l.Role', 'SLAVE'],
  ['Device.Time.X_D837BE_Ptp4l.SecGWAddr', ''],
  ['Device.Time.X_D837BE_Ptp4l.MasterAddr', '192.168.0.101'],
  ['Device.Services.FAPService.1.X_D837BE_TFCS.tfcsSyncSrcStatus.2.Status', 'ACTIVE'],
  ['Device.Services.FAPService.1.X_D837BE_PTP.ptpConfig.transport', 'UDP'],
  ['Device.Services.FAPService.1.X_D837BE_PTP.ptpConfig.role', 'SLAVE'],
  ['Device.Services.FAPService.1.X_D837BE_PTP.ptpConfig.SecGWServer', ''],
  ['Device.Services.FAPService.1.X_D837BE_PTP.ptpConfig.unicastAddr', '192.168.0.100'],

  ['Device.Services.FAPService.1.X_D837BE_SON.CNM.CheckRSPEnable', '0'],
  ['Device.Services.FAPService.1.X_D837BE_SON.CNM.CheckBWEnable', '0'],
  ['Device.Services.FAPService.1.X_D837BE_SON.CNM.DonorBWThreshold', '50'],
  ['Device.Services.FAPService.1.X_D837BE_SON.CNM.DonorRSPThreshold', '9'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.EARFCNDLList', '38950,39148'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SuccessRatType', 'Null'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SuccessArfcn', '0'],
  ['Device.Services.FAPService.1.X_D837BE_SON.Sync.SuccessPci', '0'],

  ['Device.Time.Status', 'Disabled'],
  ['Device.Time.NTPServer1', 'www.ntp.org'],
  ['Device.Time.NTPServer2', ''],
  ['Device.Time.NTPServer3', ''],
  ['Device.Time.NTPServer4', ''],
  ['Device.Time.NTPServer5', ''],
  ['Device.Time.X_D837BE_SecGWAddr', ''],
  ['Device.Time.LocalTimeZone', 'CST-8'],
  ['Device.Time.X_D837BE_CurrentTime', '2019-06-18T12:24:12Z'],

  ['Device.DebugMgmt.Traces.LogServer.ConnectingPolicy', 'Always'],
  ['Device.DebugMgmt.Traces.LogServer.IPAddress', '192.168.0.100'],
  ['Device.DebugMgmt.Traces.LogServer.Interface', 'eth0'],
  ['Device.DebugMgmt.Traces.LogServer.CpuhPort', '1111'],
  ['Device.DebugMgmt.Traces.LogServer.CpulPort', '7777'],
  ['Device.DebugMgmt.Traces.LogServer.CpuhDestPath', ''],
  ['Device.DebugMgmt.Traces.LogServer.CpulDestPath', ''],

  ['Device.LogMgmt.URL', 'ftp://192.168.0.100'],
  ['Device.LogMgmt.Username', 'test'],
  ['Device.LogMgmt.Password', 'pasword'],
  ['Device.LogMgmt.PeriodicUploadEnable', '1'],
  ['Device.LogMgmt.PeriodicUploadInterval', '3600'],

  ['Device.X_D837BE_DebugMgmt.Upload.Enable', '1'],
  ['Device.X_D837BE_DebugMgmt.Upload.UploadURL', 'ftp://192.168.0.101'],
  ['Device.X_D837BE_DebugMgmt.Upload.Username', 'admin'],
  ['Device.X_D837BE_DebugMgmt.Upload.Password', 'admpw'],
  ['Device.X_D837BE_DebugMgmt.Upload.PeriodicUploadPolicy', 'VendorTraces'],
  ['Device.X_D837BE_DebugMgmt.Upload.UploadPolicyWhenMaxExceeded', 'DeviceLog'],
  ['Device.X_D837BE_DebugMgmt.Upload.UploadPolicyWhenAlarmRaised', 'KernelLog,CpulKernelLog'],
  ['Device.X_D837BE_DebugMgmt.Upload.UploadPolicyWhenPowerOn', 'DeviceLog,VendorTraces,CoreDumps,TmpFileList,VarLog,FsmLog,StrongwanLog'],

  ['Device.FAP.PerfMgmt.Config.1.Enable', '1'],
  ['Device.FAP.PerfMgmt.Config.1.URL', 'ftp://192.168.0.101'],
  ['Device.FAP.PerfMgmt.Config.1.Username', 'admin'],
  ['Device.FAP.PerfMgmt.Config.1.Password', 'pmtester'],
  ['Device.FAP.PerfMgmt.Config.1.PeriodicUploadInterval', '900'],

  ['Device.Security.WatchdogEnable', '0']

])

const devicetreedata = {
  'meta': {
    'path': 'Device.',
    'type': 'object',
    'cType': 'STRUCT'
  },
  'val': [
    {
      'meta': {
        'path': 'Device.RootDataModelVersion',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '32'
      },
      'val': '2.7',
      'flag': 1
    },
    {
      'meta': {
        'path': 'Device.X_D837BE_VendorDataModelVersion',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '32'
      },
      'val': '43713',
      'flag': 1
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': null,
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.LogMgmt.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': null,
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.InterfaceStack.',
        'type': 'multi',
        'cType': 'STRUCT',
        'max': 10
      },
      'val': [
        {
          'meta': {
            'path': 'Device.InterfaceStack.1.',
            'type': 'instance',
            'instNum': 1
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.InterfaceStack.2.',
            'type': 'instance',
            'instNum': 2
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.InterfaceStack.3.',
            'type': 'instance',
            'instNum': 3
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.InterfaceStack.4.',
            'type': 'instance',
            'instNum': 4
          },
          'val': null,
          'flag': 1
        }
      ],
      'flag': 0
    }
  ],
  'flag': 2
}

const managerdata = {
  'meta': {
    'path': 'Device.ManagementServer.',
    'type': 'object',
    'cType': 'STRUCT'
  },
  'val': [
    {
      'meta': {
        'path': 'Device.ManagementServer.EnableCWMP',
        'type': 'boolean',
        'cType': 'BOOL8',
        'range': ''
      },
      'val': '1',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.URL',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.Username',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.Password',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.X_D837BE_lastConnectedURL',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.ManagementServer.X_D837BE_Interface',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    }
  ],
  'flag': 2
}

const mgmtdata = {
  'meta': {
    'path': 'Device.LogMgmt.',
    'type': 'object',
    'cType': 'STRUCT'
  },
  'val': [
    {
      'meta': {
        'path': 'Device.LogMgmt.URL',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.LogMgmt.Username',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.LogMgmt.Password',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '256'
      },
      'val': '',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.LogMgmt.PeriodicUploadEnable',
        'type': 'boolean',
        'cType': 'BOOL8',
        'range': ''
      },
      'val': '0',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.LogMgmt.PeriodicUploadInterval',
        'type': 'unsignedInt',
        'cType': 'UINT32',
        'range': '[1:]'
      },
      'val': '3600',
      'flag': 3
    }
  ],
  'flag': 3
}

export default [
  {
    url: '/cpe/setparametervalues',
    type: 'post',
    response: config => {
      const inputdata = config.body
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
      let errpath = ''
      const retdata = []
      const inputdata = config.body
      for (const dataitem of inputdata) {
        if (devicevalues.has(dataitem.path)) { // get value
          retdata.push({ path: dataitem.path, value: devicevalues.get(dataitem.path) })
        } else { // unsupport value
          errpath = dataitem.path
          errflg = true
          break
        }
      }

      if (errflg) {
        return {
          code: 20001,
          message: 'unsupport data path:' + errpath
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
    url: '/cpe/getdbtree',
    type: 'post',
    response: config => {
      const path = config.body.path

      if (path === 'Device.') {
        return {
          code: 20000,
          data: devicetreedata
        }
      } else if (path === 'Device.ManagementServer.') {
        return {
          code: 20000,
          data: managerdata
        }
      } else if (path === 'Device.LogMgmt.') {
        return {
          code: 20000,
          data: mgmtdata
        }
      } else {
        return {
          code: 20000,
          data: {}
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
  },

  {
    url: '/cpe/getlogdumpfilelist',
    type: 'post',
    response: _ => {
      const retdata = ['Devicelog.tgz', 'ps.log', 'dmesg.log', 'fsm.log']
      return {
        code: 20000,
        data: retdata
      }
    }
  },

  {
    url: '/cpe/download',
    type: 'post',
    response: _ => {
      const retdata = 'this is content of test file'
      return {
        code: 20000,
        data: retdata
      }
    }
  }

]
