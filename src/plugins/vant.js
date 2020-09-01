// 按需全局引入 vant组件
import Vue from 'vue'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Toast,
  Popup,
  Icon,
  Image as VanImage,
  Lazyload,
  Search,
  NoticeBar,

} from 'vant'

Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(NoticeBar)
Vue.use(Search)
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Popup)
Vue.use(Swipe, Toast).use(SwipeItem)
