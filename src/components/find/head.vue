<template>
  <header id="head_top">
    <slot name="logo" class="logo"></slot>
    <slot name="search"></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2" />
      </svg>
    </section>
    <section class="title_head" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
    <slot name="msite-title"></slot>
    <slot name="changecity"></slot>
    <slot name="changeLogin"></slot>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  props: ['signinUp', 'headTitle', 'goBack']
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';

#head_top {
  background-color: $red;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  @include wh(100%, 60px);
}
.head_goback {
  left: 0.4rem;
  @include wh(0.6rem, 1rem);
  line-height: 2.2rem;
  margin-left: 0.4rem;
}
.head_login {
  right: 0.55rem;
  @include sc(0.65rem, #fff);
  @include ct;
  .login_span {
    color: #fff;
  }
  .user_avatar {
    fill: #fff;
    @include wh(0.8rem, 0.8rem);
  }
}
.title_head {
  @include center;
  width: 80%;
  color: #fff;
  text-align: center;
  .title_text {
    @include sc(14px, #fff);
    text-align: center;
    font-weight: normal;
  }
}
</style>
