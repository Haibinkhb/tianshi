<template>
  <div class="app-container">
    <div class="layout-content">
      <transition>
        <keep-alive v-if="this.$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </transition>
    </div>
    <div class="layout-footer" v-if="footer">
      <van-tabbar route>
        <van-tabbar-item
          :key="tab.title"
          v-for="tab in tabbars"
          replace
          :to="'/'+tab.to.name"
          :icon="tab.icon"
        >{{tab.title}}</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '发现',
          to: {
            name: 'Find'
          },
          icon: 'user-o'
        },
        {
          title: '服务台',
          to: {
            name: 'Operating'
          },
          icon: 'chat-o'
        },
        {
          title: '人脉',
          to: {
            name: 'Contacts'
          },
          icon: 'chat-o'
        },
        {
          title: '我的',
          to: {
            name: 'Me'
          },
          icon: 'chat-o'
        }
      ]
    }
  },
  mounted() {},
  components: {},
  computed: {
    ...mapGetters(['footer'])
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
