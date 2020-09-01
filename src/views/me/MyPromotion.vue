// 我的推广
<template>
  <div class="promotion-container">
    <div class="van-nav-bar">
      <van-nav-bar title="我的推广" left-arrow fixed />
    </div>
    <div class="promotion-conter">
      <div class="conter-bgImg">
        <div>
          <van-image
            fit="cover"
            round
            width="100px"
            height="100px"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <div>马云</div>
        <div>123</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.promotion-container {
  .van-nav-bar{
    height: 40px;
  }
  .promotion-conter {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    .conter-bgImg {
      background: #67aff4;
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
