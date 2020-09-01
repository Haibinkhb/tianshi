// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/css/index.scss'
import '@/assets/css/iconfont.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const { title, footer, auth } = to.meta
  document.title = title
  // 判断是否显示底部导航
  footer === true ? store.commit('SHOW_FOOTER') : store.commit('HIDE_FOOTER')
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && auth) {
    next()
    // next('/login')
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
