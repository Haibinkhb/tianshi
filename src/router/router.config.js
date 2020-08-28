/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Index'),
        meta: { title: '首页', keepAlive: false, footer: true }
      },
      {
        path: '/find',
        name: 'Find',
        component: () => import('@/views/find/Find'),
        meta: { title: '发现', keepAlive: false, footer: true, auth: true }
      },
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/contacts/Contacts'),
        meta: { title: '人脉', keepAlive: false, footer: true, auth: true }
      },
      {
        path: '/operating',
        name: 'Operating',
        component: () => import('@/views/operating/Operating'),
        meta: { title: '服务台', keepAlive: false, footer: true, auth: true }
      },
      {
        path: '/me',
        name: 'Me',
        component: () => import('@/views/me/Me'),
        meta: { title: '我的', footer: true, keepAlive: false }
      }
    ]
  }
]
