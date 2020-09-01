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
        meta: { title: '发现', keepAlive: true, footer: true, auth: true }
      },
      {
        path: '/videoplay',
        name: 'videoplay',
        component: () => import('@/components/video/Video'),
        meta: { title: '视频播放', keepAlive: false, footer: false, auth: false }
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
      },
      {
        path: '/myPromotion',
        name: 'MyPromotion',
        component: () => import('@/views/me/MyPromotion'),
        meta: { title: '我的推广', keepAlive: false }
      }
    ]
  }
]
