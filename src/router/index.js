import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      name: 'Dashboard',
      meta: { title: 'dashboard', icon: 'home' }
    }]
  }

]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/device',
    component: Layout,
    redirect: '/device/acs',
    name: 'device',
    meta: {
      title: 'device',
      icon: 'setting'
    },
    children: [
      {
        path: 'acs',
        component: () => import('@/views/device/acs/index'),
        meta: { title: 'acs' }
      },

      {
        path: 'cell',
        component: () => import('@/views/device/cell/index'),
        meta: { title: 'cell' }
      },

      {
        path: 'network',
        component: () => import('@/views/device/network/index'),
        meta: { title: 'network' }
      },

      {
        path: 'measurement',
        component: () => import('@/views/device/measurement/index'),
        meta: { title: 'measurement' }
      },

      {
        path: 'sync',
        component: () => import('@/views/device/sync/index'),
        meta: { title: 'sync' }
      },

      {
        path: 'operation',
        component: () => import('@/views/device/operation/index'),
        meta: { title: 'operation' }
      },

      {
        path: 'pm',
        component: () => import('@/views/device/pm/index'),
        meta: { title: 'pm' }
      },

      {
        path: 'neighborcell',
        component: () => import('@/views/device/neighborcell/index'),
        meta: { title: 'neighborcell' }
      },

      {
        path: 'debug',
        component: () => import('@/views/device/debug/index'),
        meta: { title: 'debug' }
      },

      {
        path: 'upgrade',
        component: () => import('@/views/device/upgrade/index'),
        meta: { title: 'upgrade' }
      },

      {
        path: 'factory',
        component: () => import('@/views/device/factory/index'),
        meta: { title: 'factory' }
      },

      {
        path: 'security',
        component: () => import('@/views/device/security/index'),
        name: 'security',
        meta: { title: 'security' }
      }
    ]
  },

  {
    path: '/datamodel',
    component: Layout,
    redirect: '/datamodel/devicetree',
    name: 'datamodel',
    meta: { title: 'datamodel', icon: 'db', roles: ['admin', 'operator'] },
    children: [
      {
        path: 'devicetree',
        name: 'devicetree',
        component: () => import('@/views/datamodel/devicetree/index'),
        meta: { title: 'devicetree' }
      },

      {
        path: 'internaltree',
        name: 'internaltree',
        component: () => import('@/views/datamodel/internaltree/index'),
        meta: { title: 'internaltree' }
      },

      {
        path: 'exportdb',
        name: 'exportdb',
        component: () => import('@/views/datamodel/exportdb/index'),
        meta: { title: 'exportdb' }
      },

      {
        path: 'importdb',
        name: 'importdb',
        component: () => import('@/views/datamodel/importdb/index'),
        meta: { title: 'importdb' }
      }
    ]
  },

  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/account',
    name: 'permission',
    meta: { title: 'permission', icon: 'account', roles: ['admin'] },
    children: [
      {
        path: 'account',
        name: 'account',
        component: () => import('@/views/permission/account/index'),
        meta: { title: 'account' }
      },
      {
        path: 'securityconfig',
        name: 'securityconfig',
        component: () => import('@/views/permission/securityconfig/index'),
        meta: { title: 'securityconfig' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
