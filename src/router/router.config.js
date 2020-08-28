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
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/About'),
        meta: { title: '关于我', keepAlive: false, footer: true, auth: true }
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/home/Login'),
        meta: { title: '登录', footer: true, keepAlive: false }
      }
    ]
  }
]
