// 按需全局引入 vant组件
import Vue from 'vue'
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
  Divider,
  NavBar,


  //陈
  Tab, Tabs, Grid, GridItem
} from 'vant'

Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Popup)
Vue.use(Swipe, Toast).use(SwipeItem)
Vue.use(Divider)


//陈
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
