export default {
  route: {
    dashboard: 'Home',
    device: 'Device Management',
    acs: 'Tr069 Server',
    cell: 'Cell Setting',
    debug: 'Debug Setting',
    factory: 'Calibration Setting',
    fm: 'Fault Management',
    network: 'Network Setting',
    operation: 'Device Operation',
    pm: 'Performance Management',
    security: 'IPSec Management',
    sync: 'Synchronization Setting',
    time: 'Time Setting',
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
    cancel: 'Cancel'
  },
  navbar: {
    logOut: 'LogOut'
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
    id_secgwaddr: 'IPSec Server URL',
    id_perinformflg: 'Periodic Inform Enable',
    id_perinforminterv: 'Periodic Inform Interval(s)',
    id_cpeconnurl: 'CPE ConnectionRequest URL',
    id_cpeconnauthflg: 'CPE ConnectionRequest Auth',
    id_cpeconnuser: 'CPE ConnectionRequest Username',
    id_cpeconnpassword: 'CPE ConnectionRequest Password',
    id_cpeconntlsver: 'Connection TLS Version'
  },
  permission: {
    createuser: 'Create User',
    modifyuser: 'Modify User',
    username: 'UserName',
    role: 'Role',
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
    weakpassword: 'Passwords should contain three types of characters: uppercase, lowercase, numeric and special',
    usernameplaceholder: 'please input user name',
    usernamelenhint: 'length should be between 5-25 chars',
    createusersuccess: 'Create user successfully',
    modifyusersuccess: 'Modify user successfully',
    deleteusersuccess: 'Delete user successfully:',
    deleteuserfail: 'Delete user failed',
    deleteuserconfirm: 'Are you sure to delete the user:',
    operationcancel: 'Operation canceled'
  },
  dashboard: {
    title: 'Device Information'
  },
  acs: {
    servertitle: 'Hems Setting',
    Clienttitle: 'CPE Setting',
    Securitytitle: 'Security Setting'
  }
}
