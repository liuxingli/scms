
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
        'path': 'Device.InterfaceStackNumberOfEntries',
        'type': 'unsignedInt',
        'cType': 'UINT32',
        'range': ''
      },
      'val': '4',
      'flag': 1
    },
    {
      'meta': {
        'path': 'Device.Services.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Services.FAPServiceNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Services.FAPService.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 2
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.DeviceInfo.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.DeviceInfo.Manufacturer',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'Dalian Gongjin',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ManufacturerOUI',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '6'
          },
          'val': 'D837BE',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_ExtensionIdentifier',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '10'
          },
          'val': '0000000000',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_HNBIDRealm',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '20'
          },
          'val': 'hnb.twsz.com',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ModelName',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'PICO Cell',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.Description',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ProductClass',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'ENB-F02004-B01',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.SerialNumber',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '229465200002',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.HardwareVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'v1.0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.SoftwareVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'V1.0.0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.OpenAccountLocal',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '1024'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_BuildVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'trunk-r43744',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_BuildTime',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '2019-07-01T02:07:56Z',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_FirmwareType',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'ENB-F02004-B01_macd',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.HardwarePlatform',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'FSM9055.PX.3.0.2(r2.2@135110.2),FSM9055.DV.3.0.2(r2.2)',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_HardwarePattern',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'f02004',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_SupportedHardwareModels',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.AdditionalHardwareVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.AdditionalSoftwareVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ProvisioningCode',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.UpTime',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1869',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_DateOfLastService',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '2019-07-01T10:57:09.691Z',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.3GPPSpecVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'Release13',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.FirstUseDate',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '0001-01-01T00:00:00Z',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.AddEndPoint',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': 'Device.FaultMgmt.CurrentAlarm.4.',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.DelEndPoint',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': 'Device.FaultMgmt.CurrentAlarm.4.',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_RunningMode',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'DVTCAL,FAPI'
          },
          'val': 'FAPI',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_ReservedData1',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_ReservedData2',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_ReservedData3',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_ReservedData4',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.VendorConfigFileNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.SupportedDataModelNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ProcessorNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.VendorLogFileNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.LocationNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_SlaveDeviceNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.EUNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.X_D837BE_SlaveDevice.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 3
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.VendorConfigFile.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.SupportedDataModel.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.MemoryStatus.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ProcessStatus.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.TemperatureStatus.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.NetworkProperties.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.Processor.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.VendorLogFile.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.ProxierInfo.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.Location.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.DeviceInfo.EU.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 4
          },
          'val': null,
          'flag': 1
        }
      ],
      'flag': 0
    },
    {
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
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.X_D837BE_SecGWServer',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': ''
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.X_D837BE_DiffServ',
            'type': 'unsignedInt',
            'cType': 'UINT8',
            'range': '[0:63]'
          },
          'val': '46',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.X_D837BE_TLSVersion',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'None,TLS_v1,TLS_v1_1,TLS_v1_2'
          },
          'val': 'None',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.X_D837BE_TLSAuthenticationMethod',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.X_D837BE_TLSPeerAuthenticationMethod',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.PeriodicInformEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.PeriodicInformInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[1:]'
          },
          'val': '1800',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.PeriodicInformTime',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '0001-01-01T00:00:00Z',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.ParameterKey',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '32'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.ConnectionRequestURL',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': 'http://10.98.100.176:30005/',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.ConnectionRequestUsername',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.ConnectionRequestPassword',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.UpgradesManaged',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.KickURL',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.DownloadProgressURL',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.DefaultActiveNotificationThrottle',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.CWMPRetryMinimumWaitInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[1:65535]'
          },
          'val': '5',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.CWMPRetryIntervalMultiplier',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[1000:65535]'
          },
          'val': '2000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.UDPConnectionRequestAddress',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNServerAddress',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNServerPort',
            'type': 'unsignedInt',
            'cType': 'UINT16',
            'range': '[0:65535]'
          },
          'val': '20000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNUsername',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNPassword',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNMaximumKeepAlivePeriod',
            'type': 'int',
            'cType': 'INT32',
            'range': '[-1:]'
          },
          'val': '30',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.STUNMinimumKeepAlivePeriod',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:65535]'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.NATDetected',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.AliasBasedAddressing',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.InstanceMode',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'InstanceNumber,InstanceAlias'
          },
          'val': 'InstanceNumber',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.ManagementServer.AutoCreateInstances',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.GatewayInfo.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.GatewayInfo.ManufacturerOUI',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '6'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.GatewayInfo.ProductClass',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.GatewayInfo.SerialNumber',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        }
      ],
      'flag': 1
    },
    {
      'meta': {
        'path': 'Device.Time.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Time.Enable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.X_D837BE_FreqSync',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'None,Ptp4l,Ptp4lAcr,GPS'
          },
          'val': 'None',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.Status',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'Disabled,Unsynchronized,Synchronized,Error_FailedToSynchronize,Error'
          },
          'val': 'Disabled',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Time.NTPServer1',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.NTPServer2',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.NTPServer3',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.NTPServer4',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.NTPServer5',
            'type': 'string',
            'cType': 'CM_HOST_NAME_OR_IP_ADDR_T',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.X_D837BE_Interface',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.X_D837BE_SecGWAddr',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.CurrentLocalTime',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '2019-07-01T19:23:39+08:00',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Time.X_D837BE_CurrentTime',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '2019-07-01T11:22:48Z',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.LocalTimeZone',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': 'CST-8',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Time.X_D837BE_Ptp4l.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 1
        }
      ],
      'flag': 0
    },
    {
      'meta': {
        'path': 'Device.UserInterface.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.UserInterface.PasswordRequired',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.UserInterface.RemoteAccess.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.Users.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Users.UserNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Users.User.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
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
    },
    {
      'meta': {
        'path': 'Device.Ethernet.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Ethernet.InterfaceNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '2',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Ethernet.LinkNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '2',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Ethernet.VLANTerminationNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Ethernet.RMONStatsNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Ethernet.RMONStats.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 1
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Ethernet.Interface.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Ethernet.Link.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Ethernet.VLANTermination.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 0
    },
    {
      'meta': {
        'path': 'Device.IP.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.IP.IPv4Capable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.IPv4Enable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.IPv4Status',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'Disabled,Enabled,Error'
          },
          'val': 'Enabled',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IP.IPv6Capable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.IPv6Enable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.IPv6Status',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'Disabled,Enabled,Error'
          },
          'val': 'Enabled',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IP.X_D837BE_IPStatus',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'Unset,Success,Failed'
          },
          'val': 'Success',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IP.ULAPrefix',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.InterfaceNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '2',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IP.ActivePortNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IP.Interface.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.IP.ActivePort.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 20
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IP.Diagnostics.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.IPsec.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.IPsec.Enable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IPsec.MyKeyMode',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'PSK,SIM,CERT,OTHER'
          },
          'val': 'CERT',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IPsec.Status',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'Disabled,Enabled,Error'
          },
          'val': 'Disabled',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.AHSupported',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.IKEv2SupportedEncryptionAlgorithms',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'DES,3DES,RC5,IDEA,CAST,BLOWFISH,3IDEA,AES-CBC,AES-CBC-256,AES-CTR,AES-CCM-8,AES-CCM-12,AES-CCM-16,AES-GCM-8,AES-GCM-12,AES-GCM-16,CAMELLIA-CBC'
          },
          'val': 'AES-CBC',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.ESPSupportedEncryptionAlgorithms',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'NULL,DES-IV64,DES,3DES,RC5,IDEA,CAST,BLOWFISH,3IDEA,DES-IV32,AES-CBC,AES-CBC-256,AES-CTR,AES-CCM-8,AES-CCM-12,AES-CCM-16,AES-GCM-8,AES-GCM-12,AES-GCM-16,NULL-AUTH-AES-GMAC,CAMELLIA-CBC,CAMELLIA-CTR,CAMELLIA-CCM-8,CAMELLIA-CCM-12,CAMELLIA-CCM-16'
          },
          'val': 'AES-CBC',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.IKEv2SupportedPseudoRandomFunctions',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'HMAC-MD5,HMAC-SHA1,HMAC-TIGER,AES-128-XCBC,HMAC-SHA2-256,HMAC-SHA2-384,HMAC-SHA2-512,AES-128-CMAC'
          },
          'val': 'HMAC-SHA1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.SupportedIntegrityAlgorithms',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'NONE,HMAC-MD5-96,HMAC-SHA1-96,DES-MAC,KPDK-MD5,AES-XCBC-96,HMAC-MD5-128,HMAC-SHA1-160,AES-CMAC-96,AES-128-GMAC,AES-192-GMAC,AES-256-GMAC,HMAC-SHA2-256-128,HMAC-SHA2-256-192,HMAC-SHA2-256-256'
          },
          'val': 'HMAC-SHA1-96',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.SupportedDiffieHellmanGroupTransforms',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'NONE,MODP-768,MODP-1024,MODP-1536,MODP-2048,MODP-3072,MODP-4096,MODP-6144,MODP-8192,ECP-256,ECP-384,ECP-521,MODP-1024-PRIME-160,MODP-2048-PRIME-224,MODP-2048-PRIME-256,ECP-192,ECP-224'
          },
          'val': 'NONE,MODP-1024,MODP-2048',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.MaxFilterEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '10',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.MaxProfileEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '10',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.X_D837BE_PassThroughNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.FilterNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.ProfileNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.TunnelNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.IKEv2SANumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.Stats.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.X_D837BE_PassThrough.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 12
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.IPsec.Filter.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.IPsec.Profile.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.IPsec.Tunnel.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.IPsec.IKEv2SA.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 1
        }
      ],
      'flag': 0
    },
    {
      'meta': {
        'path': 'Device.Routing.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Routing.RouterNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Routing.Router.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Routing.RIP.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Routing.RouteInformation.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 0
    },
    {
      'meta': {
        'path': 'Device.DNS.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.DNS.SupportedRecordTypes',
            'type': 'string',
            'cType': 'UINT32_BITMAP',
            'range': 'A,AAAA,SRV,PTR'
          },
          'val': 'A,AAAA',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.DNS.Client.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.PeriodicStatistics.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.MinSampleInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.MaxReportSamples',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '96',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.X_D837BE_AlarmId',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '213010',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.X_D837BE_UseUploadAsSamplePeriodFlg',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.X_D837BE_PmAgentCacheCnt',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:2000]'
          },
          'val': '1000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.SampleSetNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.X_D837BE_SupportedMeas.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 395
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.PeriodicStatistics.SampleSet.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 3
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.SelfTestDiagnostics.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.SelfTestDiagnostics.DiagnosticsState',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'None,Requested,Complete,Error_Internal,Error_Other'
          },
          'val': 'None',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SelfTestDiagnostics.Results',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '1024'
          },
          'val': '',
          'flag': 3
        }
      ],
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.FaultMgmt.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.FaultMgmt.X_D837BE_InternalSupportedAlarmNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '252',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.SupportedAlarmNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '11',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.MaxCurrentAlarmEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '32',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.CurrentAlarmNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.HistoryEventNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '64',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.X_D837BE_LastestHistoryEventInstanceNumber',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '22',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.ExpeditedEventNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '32',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.QueuedEventNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '32',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.X_D837BE_InternalSupportedAlarm.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 252
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.SupportedAlarm.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 11
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.CurrentAlarm.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 32
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.HistoryEvent.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 64
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.ExpeditedEvent.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 32
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.FaultMgmt.QueuedEvent.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 32
          },
          'val': null,
          'flag': 0
        }
      ],
      'flag': 0
    },
    {
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
    },
    {
      'meta': {
        'path': 'Device.X_D837BE_DebugMgmt.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.CalibrationEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.TelnetdEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.DropbearEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.LoginDisable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.ResetDbAfterNextBooting',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.BootDelay',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.EnableMailboxWakeupCheck',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.MailboxWakeupCheckTimeLen',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:500]'
          },
          'val': '100',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.EnableUeLinkAdaptMeas',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.UeLinkAdaptMeasInterval',
            'type': 'int',
            'cType': 'UINT8',
            'range': '[1:10]'
          },
          'val': '10',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.EnableUeInfoLog',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.UeInfoLogInterval',
            'type': 'int',
            'cType': 'UINT32',
            'range': '[1:]'
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.TtiWatchDogTimeout',
            'type': 'int',
            'cType': 'UINT16',
            'range': '[100:500]'
          },
          'val': '150',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.EnableShmDebug',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.ReestablishmentEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Msg4FailureHandleEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.RlcTxMaxTimesThresholdInReest',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:]'
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.CnOnBoard.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.SelfDiscovery.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Iptables.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.PACalibration.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.TraceFilter.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Upload.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Tcpdump.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.TBDump.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Traces.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.Asn1MemoCheck.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.FtpUpgrade.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_DebugMgmt.MulticastUpgrade.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.CAServer.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.CAServer.URL',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        }
      ],
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.Security.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_WatchdogEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Security.CertificateNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_PskNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_eSIMNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.Security.Certificate.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_Psk.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_eSIM.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 5
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_CMPv2.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.Security.X_D837BE_FileTransmission.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.FAP.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.FAP.GPS.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.FAP.PerfMgmt.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Device.FAP.MRMgmt.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 0
    },
    {
      'meta': {
        'path': 'Device.X_D837BE_PM.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.X_D837BE_PM.PmFileConfig.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Device.X_D837BE_TraceMdt.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.Enable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.FilePath',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': '/tmp/trace_mdt/',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.Xmlns',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'http://www.3gpp.org/ftp/specs/archive/32_series/32.423#traceData',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.XmlnsXsi',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'http://www.w3.org/2001/XMLSchema-instance',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.XsiSchemaLocation',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': 'http://www.3gpp.org/ftp/specs/archive/32_series/32.423#traceData http://www.3gpp.org/ftp/specs/archive/32_series/32423#traceData',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.FileFormatVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': '32.423 V6',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.URL',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.Username',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.Password',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.PeriodicUploadInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[120:]'
          },
          'val': '120',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.connTimeout',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:30]'
          },
          'val': '10',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.maxTimeout',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:600]'
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.limitRate',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0,1000:100000]'
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.retryMax',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:5]'
          },
          'val': '3',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.retryInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[0:10]'
          },
          'val': '5',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.X_D837BE_TraceMdt.HTTPMethod',
            'type': 'unsignedInt',
            'cType': 'UINT32_ENUM',
            'range': 'Default,Get,Put,Post'
          },
          'val': 'Put',
          'flag': 3
        }
      ],
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.SoftwareCtrl.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.AutoActivateEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.ActivateTime',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '0001-01-01T00:00:00Z',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.ActivateEnable',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.SystemCurrentVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': 'V1.0.0',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.SystemBackupVersion',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Device.SoftwareCtrl.LatestUpgradeSuccessTime',
            'type': 'dateTime',
            'cType': 'DATE_TIME_T',
            'range': ''
          },
          'val': '0001-01-01T00:00:00Z',
          'flag': 1
        }
      ],
      'flag': 3
    },
    {
      'meta': {
        'path': 'Device.SoftwareModules.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Device.SoftwareModules.ExecEnvNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareModules.DeploymentUnitNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '7',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareModules.ExecutionUnitNumberOfEntries',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '86',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Device.SoftwareModules.ExecEnv.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 2
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.SoftwareModules.DeploymentUnit.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 0
        },
        {
          'meta': {
            'path': 'Device.SoftwareModules.ExecutionUnit.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 120
          },
          'val': null,
          'flag': 0
        }
      ],
      'flag': 2
    }
  ],
  'flag': 2
}

const internaltreedata = {
  'meta': {
    'path': 'Internal.',
    'type': 'object',
    'cType': 'STRUCT'
  },
  'val': [
    {
      'meta': {
        'path': 'Internal.VendorDataModelVersion',
        'type': 'string',
        'cType': 'INT8[]',
        'range': '32'
      },
      'val': '43405',
      'flag': 3
    },
    {
      'meta': {
        'path': 'Internal.Ncm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Ncm.VendorConfigIp.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ncm.NetworkCheck.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ncm.Netlink.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Scm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Scm.UpgradeErrRetToEme',
            'type': 'int',
            'cType': 'INT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.DisableLoggingDetail',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.DeploymentMode',
            'type': 'string',
            'cType': 'UINT32_ENUM',
            'range': 'None,FlowTesting,Traceless'
          },
          'val': 'None',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.ForceUpdatePartition',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.ForceAppendUploadFileName',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.DebugCurl',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.HeartbeatTimeout',
            'type': 'int',
            'cType': 'INT32',
            'range': '[0:3000]'
          },
          'val': '90',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.MgmtCuEuRuUpgrade',
            'type': 'int',
            'cType': 'UINT32_BITMAP',
            'range': 'CUMCU,CUFPGA,EUMCU,EUFPGA,RUMCU,RUFPGA'
          },
          'val': '',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Scm.Softdog.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Ema.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Ema.EnableForward',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ema.FirmwareSecurity.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ema.Curl.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ema.SessionStatus.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Ema.emeInfo.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 3
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.WebUI.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.WebUI.UserName',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'admin',
          'flag': 1
        },
        {
          'meta': {
            'path': 'Internal.WebUI.Password',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'c31f42a07226a57e3d42ef03558a5070b40d082e1770a644',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.WebUI.Sha256Password',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': 'c4e02da1690159a13342fb74e9c11b408e4ef25b18919b97d89f78d6010c60570ab04d05c06a0ea0550580420180f40b',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.WebUI.Security.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.WebUI.Config.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.WebUI.TLS.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.NMSERVER.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.NMSERVER.IPAddr',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '64'
          },
          'val': '0.0.0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.NMSERVER.Port',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': '[1024:65536]'
          },
          'val': '5000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.NMSERVER.NMSServerID',
            'type': 'int',
            'cType': 'INT32',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.NMSERVER.RunningMode',
            'type': 'unsignedInt',
            'cType': 'UINT32_ENUM',
            'range': 'TcpServer,TcpClient'
          },
          'val': 'TcpServer',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.NMSERVER.CheckRemoteIDWithUpgradeResult',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.NMSERVER.msginfo.',
            'type': 'multi',
            'cType': 'STRUCT',
            'max': 10
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Tr69c.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Tr69c.TransferNeeded',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.Config.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.AcsConfig.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.GWStateData.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.TransferList.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.DownloadVendorConfigInfo.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tr69c.SoapNameSpaces.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Fm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Fm.RecoverDelay',
            'type': 'int',
            'cType': 'INT32',
            'range': ''
          },
          'val': '90',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.DSPRecoverDelay',
            'type': 'int',
            'cType': 'INT32',
            'range': ''
          },
          'val': '20',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.ForceUploadInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '180',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.ReadLogPath',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '128'
          },
          'val': '/work/command/read_log',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.AdditionalTextNumMin',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '30000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.AdditionalTextNumMax',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '39999',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.SaveDuplicatedAlarmToDeviceLog',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.EnableAlarmForward',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.OldDebugfiles.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.DeviceLog.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Fm.Tcpdump.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Fm.LogViewer.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Tm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Tm.ShortStatusInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '60000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.LongStatusInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '3600000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.SaveTimeInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '600000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.AttemptInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '60000',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.1PPS.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.Ntpd.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Tm.Ptp4l.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Tm.GPS.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Dmm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Dmm.CpuCheckInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Dmm.CpuDisplayInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '30',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Dmm.Led.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Dmm.ResetButton.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Dmm.WiFiCtrl.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Dmm.DumpStatus.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
    },
    {
      'meta': {
        'path': 'Internal.Sm.',
        'type': 'object',
        'cType': 'STRUCT'
      },
      'val': [
        {
          'meta': {
            'path': 'Internal.Sm.CertPoolPath',
            'type': 'string',
            'cType': 'INT8[]',
            'range': '256'
          },
          'val': '/store/certs/',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Sm.EnableForceRekey',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '0',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Sm.CheckProfileInterval',
            'type': 'unsignedInt',
            'cType': 'UINT32',
            'range': ''
          },
          'val': '300',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Sm.RebootAfterCheckProfileFailure',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Sm.StrokeLogging',
            'type': 'boolean',
            'cType': 'BOOL8',
            'range': ''
          },
          'val': '1',
          'flag': 3
        },
        {
          'meta': {
            'path': 'Internal.Sm.Strongswan.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 2
        },
        {
          'meta': {
            'path': 'Internal.Sm.CMPv2.',
            'type': 'object',
            'cType': 'STRUCT'
          },
          'val': null,
          'flag': 3
        }
      ],
      'flag': 2
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

const ipstackdata = {
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
    }
  ],
  'flag': 0
}

export default [
  {
    url: '/action/cpe_setparametervalues',
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
    url: '/action/cpe_getparametervalues',
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
    url: '/action/cpe_getdbtree',
    type: 'post',
    response: config => {
      const path = config.body.path

      if (path === 'Device.') {
        return {
          code: 20000,
          data: devicetreedata
        }
      } else if (path === 'Internal.') {
        return {
          code: 20000,
          data: internaltreedata
        }
      } else if (path === 'Device.ManagementServer.') {
        return {
          code: 20000,
          data: managerdata
        }
      } else if (path === 'Device.InterfaceStack.') {
        return {
          code: 20000,
          data: ipstackdata
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
    url: '/action/cpe_addobject',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: { instancenumber: 5 }
      }
    }
  },

  {
    url: '/action/cpe_deleteobject',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/action/cpe_reboot',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/action/cpe_factoryreset',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/action/cpe_ping',
    type: 'post',
    response: _ => {
      return {
        code: 20000
      }
    }
  },

  {
    url: '/action/cpe_getlogdumpfilelist',
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
    url: '/action/cpe_downloadfile',
    type: 'get',
    response: _ => {
      const retdata = 'this is content of test file'
      return {
        code: 20000,
        data: retdata
      }
    }
  }

]
