<template>
  <div>
    <van-tabs
      :color="color"
      v-model="activeTitle"
      @click="onTabClick"
      :background="background"
      :swipeable="isswipeable"
      border
    >
      <van-tab v-for="(item , i) in tabsArr" :title="item.title" :name="item.title" :key="i">
        <slot name="tabs"></slot>
        <slot :name="item.title"></slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTitle: '动态'
    }
  },
  methods: {
    onTabClick(val) {
      this.$emit('onTabsClick', val)
    }
  },
  props: {
    tabsArr: {
      type: Array,
      default: () => {
        return []
      }
    },
    background: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    isswipeable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
</style>
