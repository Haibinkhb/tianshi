<template>
  <header id="search_top">
    <slot name="icon"></slot>
    <section class="search_content">
      <van-search
        show-action
        v-model="value"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(val) {
      this.$emit('onSearchClick', this.value)
    },
    onCancel() {
      this.$emit('onCancelClick')
    }
  },
  props: {}
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

#search_top {
  display: flex;
  background-color: #fff;
  margin-top: 60px;
  @include wh(100%, 60px);
}

.search_content {
  width: 80%;
  color: #fff;
}
</style>
