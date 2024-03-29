export default {
  route: {
    dashboard: 'Home',
    device: 'Device Management',
    acs: 'Tr069 Server',
    cell: 'Cell Setting',
    debug: 'Debug Setting',
    factory: 'Calibration Setting',
    neighborcell: 'Neighbor cell Setting',
    network: 'Network Setting',
    operation: 'Device Operation',
    pm: 'Performance Management',
    security: 'IPSec Management',
    sync: 'Synchronization Setting',
    measurement: 'Measurement Setting',
    upgrade: 'Firmware Upgrade',
    permission: 'Permission',
    account: 'Account',
    securityconfig: 'Security Setting',
    datamodel: 'Data Model',
    devicetree: 'Tr069 Model Tree',
    internaltree: 'Internal Model Tree',
    importdb: 'Import Data Model',
    exportdb: 'Export Data Model'
  },
  global: {
    submit: 'Submit',
    cancel: 'Cancel',
    refresh: 'Refresh',
    remove: 'Remove',
    add: 'Add',
    save: 'Save',
    empty: 'No data',
    selectfile: 'Select File',
    uploadfile: 'Upload file',
    importfile: 'Import file',
    exportfile: 'Export file',
    fetchsuccess: 'Fetch data success',
    fetchfail: 'Failed to fetch data from server',
    submitsuccess: 'Submit success',
    submitfail: 'Failed to submit data to server',
    addobjsuccess: 'Add object success',
    addobjfail: 'Failed to add object',
    deleteobjsuccess: 'Delete object success',
    deleteobjfail: 'Failed to delete object',
    upgradefail: 'Failed to do upgrade the firmware',
    filedownloadsuccess: 'File download success',
    filedownloadfail: 'Failed to download from from server',
    fileuploadsuccess: 'File upload sueesss',
    fileuploadfail: 'Failed to upload file to server',
    invalidurl: 'Invalid URL',
    invalidip: 'Invalid IP',
    invalidipv4: 'Invalid IPV4',
    invalidipv6: 'Invalid IPV6',
    invalidipv4v6: 'Invalid IPV4/V6',
    invalidboolean: 'Invalid boolean',
    checkfailhint: 'There are invalid fields',
    switchon: 'Enable',
    switchoff: 'Disable',
    switchtrue: 'True',
    switchfalse: 'False',
    switchsucc: 'Success',
    switchfail: 'Fail',
    switchyes: 'Yes',
    switchno: 'No'
  },
  missingpage: {
    message: 'The webmaster said that you can not enter this page...',
    operation: 'Please check that the URL you entered is correct or return to the homepage.'
  },
  navbar: {
    logOut: 'LogOut',
    changepassword: 'Change Password',
    changepasswordtitle: 'Change Password',
    passwordexpirehint: 'Password will expire soon please change your password'
  },
  login: {
    title: 'Login Form',
    logIn: 'Login',
    username: 'Username',
    password: 'Password'
  },
  cpe: {
    id_oui: 'Manufacturer OUI',
    id_modelname: 'Model Name',
    id_manufacturer: 'Manufacturer',
    id_serialnumber: 'Serial Number',
    id_productclass: 'Product Class',
    id_hardwarever: 'Hardware Version',
    id_softwarever: 'Software Version',
    id_platform: 'Hardware Platform',

    id_hemsurl: 'Hems Server URL',
    id_hemsuser: 'Hems User Name',
    id_hemspassword: 'Hems User Password',
    id_secgwaddr: 'IPSec Server Addr',
    id_perinformflg: 'Periodic Inform Enable',
    id_perinforminterv: 'Periodic Inform Interval(s)',
    id_cpeconnurl: 'CPE ConnectionRequest URL',
    id_cpeconnauthflg: 'CPE ConnectionRequest Auth',
    id_cpeconnuser: 'CPE ConnectionRequest Username',
    id_cpeconnpassword: 'CPE ConnectionRequest Password',
    id_cpeconntlsver: 'Connection TLS Version',

    id_enbtype: 'eNB Type',
    id_adminstate: 'Service Start',
    id_duplexmode: 'Duplex Mode',
    id_plmnid: 'PLMN ID',
    id_tac: 'TAC Code',
    id_secgwserver: 'IPSec Server',
    id_s1siglinksrv: 'MME Server',
    id_privatenwflg: 'Private Network',
    id_s1status: 'S1 Conn Status',
    id_s1retrymaxnum: 'S1 Retry Max Num[0:0:65535]',
    id_sctpassocstatus: 'S1 Sctp Assoc Status',

    id_cell1_cellid: 'Cell Identity',
    id_cell1_opState: 'RF State',
    id_cell1_connuenum: 'Connected UE Num',
    id_cell1_voltenum: 'Volte UE Num',
    id_cell1_candfreqlist: 'Candidate Freq(EARFCN) list[0:262143]',
    id_cell1_freqdl: 'Selected Downlink Freq(EARFCN)',
    id_cell1_frequl: 'Selected Uplink Freq(EARFCN)',
    id_cell1_band: 'Band',
    id_cell1_candpcilist: 'Candidate PCI list[0:503]',
    id_cell1_pci: 'Selected PCI',
    id_cell1_dlbandwidth: 'DL Bandwidth',
    id_cell1_ulbandwidth: 'UL Bandwidth',
    id_cell1_referencesignalpower: 'Reference Signal Power[-60:50]dBm',
    id_cell1_pagain: 'External PA Gain[0:]dB',
    id_cell1_subframepattern: 'Subframe Pattern[0:6]',
    id_cell1_specialsubframepattern: 'Special Subframe Pattern[0:8]',
    id_cell1_txantennacount: 'TX Antenna Num',
    id_cell1_rxantennacount: 'RX Antenna Num',

    id_currentsyncmode: 'Current Sync Mode',
    id_syncstatus: 'Sync Status',
    id_syncsucctime: 'Sync Success Time',
    id_syncswitchflg: 'Sync Switch Enable',
    id_syncmode1: 'SyncMode1',
    id_syncmode2: 'SyncMode2',
    id_syncmode3: 'SyncMode3',
    id_syncfailhandling: 'SyncFailure Handling',
    id_timingcorroffset: 'Timing Correction Offset(chip)',
    id_frameshift: 'Timing Correction Offset(10ns)',

    id_gpsequipped: 'GPS Equipped',
    id_gpsscanstatus: 'GPS Scan Status',
    id_gpserrinfo: 'GPS Error Details',
    id_gpslastscantime: 'GPS Last ScanTime',
    id_gpslastsucctime: 'GPS Last Success ScanTime',
    id_gpsfix: 'GPS Got Fix',
    id_gpslatitude: 'GPS Latitude',
    id_gpslongitude: 'GPS Longitude',
    id_gpselevation: 'GPS Elevation',
    id_gpsstatellites: 'GPS Tracked Satellites',
    id_gpsstability: 'GPS Stability',
    id_gpspostuncertain: 'GPS Position Uncertainty',

    id_ptp_brcm_status: 'PTP Status',
    id_ptp_brcm_transport: 'PTP Transport',
    id_ptp_brcm_role: 'PTP Role',
    id_ptp_brcm_secgw: 'IPSec Gateway',
    id_ptp_brcm_master: 'PTP Master Server',
    id_ptp_qual_status: 'PTP Status',
    id_ptp_qual_transport: 'PTP Transport',
    id_ptp_qual_role: 'PTP Role',
    id_ptp_qual_secgw: 'PTP IPSec Gateway',
    id_ptp_qual_master: 'PTP Master Server',

    id_nl_checkrsp: 'Check RSRP Enable',
    id_nl_checkbw: 'Check BW Enable',
    id_nl_donorbwthreshold: 'Donor BW Threshold',
    id_nl_donorrsrpthreshold: 'Donor RSRP Threshold[-60:50]',
    id_nl_earfcndllist: 'Target EARFCN List',
    id_nl_successrat: 'Success RatType',
    id_nl_successearfcn: 'Success Arfcn',
    id_nl_sucesspci: 'SuccessPci',

    id_time_ntpstatus: 'NTP sync Status',
    id_time_ntpserver1: 'NTPServer1',
    id_time_ntpserver2: 'NTPServer2',
    id_time_ntpserver3: 'NTPServer3',
    id_time_ntpserver4: 'NTPServer4',
    id_time_ntpserver5: 'NTPServer5',
    id_time_secgw: 'IPSec Gateway',
    id_time_timezone: 'Local TimeZone',
    id_time_currentsystem: 'Current Time',

    id_logsrv_connpolicy: 'Connect policy',
    id_logsrv_serverip: 'Server IP',
    id_logsrv_localinterface: 'Local Interace',
    id_logsrv_cpuhport: 'Port for Cpuh log',
    id_logsrv_cpulport: 'Port for Cpul log',
    id_logsrv_cpuhlogpath: 'Cpuh log save path',
    id_logsrv_cpullogpath: 'Cpul log save path',

    id_devicelog_uploadurl: 'Upload Server URL',
    id_devicelog_username: 'Username',
    id_devicelog_password: 'Password',
    id_devicelog_periodicflg: 'Periodic Upload Enable',
    id_devicelog_interval: 'Periodic Upload Interval([1:65535]s)',

    id_upload_enable: 'Upload Enable',
    id_upload_url: 'Upload Upload URL',
    id_upload_username: 'Username',
    id_upload_password: 'Password',
    id_upload_periodic: 'PeriodicUpload Policy',
    id_upload_maxexceed: 'Upload Policy When Max Exceeded',
    id_upload_alarm: 'Upload Policy When Alarm Raised',
    id_upload_poweron: 'Upload Policy When PowerOn',

    id_pm_enable: 'PM periodic upload enable',
    id_pm_url: 'PM upload URL',
    id_pm_username: 'PM upload UserName',
    id_pm_password: 'PM upload Password',
    id_pm_interval: 'PM upload Interval([1:65535]s)',

    id_hwwatchdog_enable: 'Hardware Watchdog Enable'
  },
  permission: {
    createuser: 'Create User',
    modifyuser: 'Modify User',
    username: 'UserName',
    role: 'Role',
    status: 'Status',
    enabled: 'Enabled',
    disabled: 'Disabled',
    operation: 'Operation',
    edit: 'Edit',
    delete: 'Delete',
    password: 'Password',
    newpassword: 'New Password',
    confirmpassword: 'Confirm Password',
    admin: 'Admin',
    operator: 'Operator',
    guest: 'Guest',
    passwordplaceholder: 'please input password',
    roleplaceholder: 'please select role',
    reinputpassword: 'please input password again',
    unmatchpassword: 'Password unmatch',
    weakpassword: 'Passwords should at least contain types(upper, lower, num and symbol) ',
    passwordtooshort: 'Password too short, should >=',
    passwordtoolong: 'Password too long, should <= 18',
    passwordlenhint: 'length should be between 6-18 chars',
    usernameplaceholder: 'please input user name',
    usernamelenhint: 'length should be between 5-25 chars',
    createusersuccess: 'Create user successfully',
    modifyusersuccess: 'Modify user successfully',
    deleteusersuccess: 'Delete user successfully:',
    deleteuserfail: 'Delete user failed',
    deleteuserconfirm: 'Are you sure to delete the user:',
    operationcancel: 'Operation canceled',
    adminnodelete: 'admin is not allowed to remove',
    passwordhint: 'min len >=8 and include upper, lower, num and symbol'
  },
  dashboard: {
    title: 'Device Information'
  },
  acs: {
    servertitle: 'Hems Setting',
    clienttitle: 'CPE Setting',
    securitytitle: 'Security Setting'
  },
  cell: {
    commontitle: 'Common Setting',
    cell1title: 'Cell#1 Setting',
    cell2title: 'Cell#2 Setting'
  },
  sync: {
    synctitle: 'Sync',
    gpstitle: 'GPS',
    ptptitle: 'PTP/ACR',
    sniffertitle: 'Sniffer',
    timetitle: 'Time/NTP'
  },
  debug: {
    logsrvtitle: 'Log Server',
    devicelogtitle: 'Device Log',
    uploadtitle: 'Upload Policy',
    dumptitle: 'Log Dump'
  },
  factory: {
    calibrationtitle: 'Calibration files',
    vendorlogotitle: 'Vendor logo file',
    calibrationfile: 'Calibration file',
    pdrfile: 'PDR Amendment file',
    pacalifile: 'PA Calibration file',
    logofile: 'Vendor logo file'
  },
  network: {
    networkhint: 'All new network configurations take effect after the device is rebooted,please enter reboot device from <<Device Operation>>',
    iptitle0: 'Eth#0',
    iptitle1: 'Eth#1',
    iptbltitle1: 'IP Setting',
    routebltitle1: 'Route Setting',
    dnstitle: 'DNS',
    etherr: 'No valid eth port exist',
    iperr: 'Only one IP address without VLAN is allowed for one eth device',
    name: 'Eth Name',
    macaddr: 'MAC Address',
    mtusize: 'MTU Size',
    vlanid: 'VLAN ID',
    enable: 'Enable',
    ipaddr: 'IP Address',
    subnetmask: 'SubnetMask',
    gateway: 'Default Gateway',
    addrtype: 'Addressing Type',
    staticroute: 'Static Route',
    destip: 'Dest IP',
    destsubnetmask: 'Dest Subnet Mask',
    gatewayip: 'Gateway IP',
    origin: 'Origin',
    destipprefix: 'Dest IP Prefix',
    nexthop: 'Next Hop IP',
    dnsserver: 'DNS Server'
  },
  upgrade: {
    tip: 'Tip:Select and Upload firware file to Device and click Upgrade button',
    note: 'Upgrade procedure will last several minutes,Device will reboot after upgrade procedure',
    verinfo: 'Current version info',
    upgradetitle: 'Upgrade Operation',
    upgrade: 'Upgrade',
    upgradeStatus: 'Upgrade Progress',
    statusupload: 'Firmware upload',
    statusupgrading: 'Upgrading',
    statusreboot: 'Reboot',
    statuscomplete: 'Complete'
  },
  operation: {
    pingtitle: 'Ping Target IP',
    ping: 'Ping Target IP',
    reboot: 'Device Reboot',
    factoryreboot: 'FactoryReboot',
    pingsuccess: 'Ping Success',
    rebootsuccess: 'Reboot start',
    factoryrebootsuccess: 'Factory Reset Success',
    pingfail: 'Ping Fail',
    rebootfail: 'Reboot fail',
    factoryrebootfail: 'Fatory Reset fail'
  },
  security: {
    sessionlife: 'Max session life([60:65535]s)',
    loginattempnum: 'Max login fail attemps[3:8]',
    passwordlocktime: 'Password lock time after max retry([30:65535]s)',
    passwordresuse: 'Password Max resuse times([0:3]) ',
    passwordlifedays: 'Passord expire days([3:65535])',
    passwordgracedays: 'Password grace days([3:65535])',
    passwordminlen: 'Password min len([6:18])',
    passwordcomplexity: 'Password complexity(num,upper,lower,symbol[1:4])'
  },
  db: {
    tip: 'The Operator default is for Factory reset only and others will be apply after reboot',
    removedefultfile: 'Remove Operator Default File',
    removefile: 'Remove',
    importldbfile: 'Import DB files',
    exportldbfile: 'Export DB files',
    importldbtype: 'Select import DB type'
  },
  tree: {
    devicetreetitle: 'Tree View of Device datamodel(Note：To reduce load delay, data model tree is lazy loaded,the unloaded data can not be displayed and searched)',
    internaltreetitle: 'Tree View of Internal datamodel(Note：To reduce load delay, data model tree is lazy loaded,the unloaded data can not be displayed and searched)',
    removefile: 'Remove',
    deleteobj: 'Delete Object',
    addobj: 'Add Object',
    importldbfile: 'Import DB files',
    exportldbfile: 'Export DB files',
    importldbtype: 'Select import DB type',
    emptytext: 'no item matched',
    subtreedepth: 'Load SubTree depth',
    expandall: 'ExpandAll',
    CollapseAll: 'CollapseAll',
    searchplaceholder: 'Input search keyword',
    search: 'Search',
    clearsearch: 'Clear',
    nodedetail: 'Node details',
    path: 'Node Path',
    type: 'Node Type',
    range: 'Value Range',
    writeable: 'Writeable',
    value: 'Value',
    maxinstance: 'Max instance number',
    instancenum: 'Instance index',
    children: 'Children Nodes'
  }
}
