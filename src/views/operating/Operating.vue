<template>
  <div>
    <h2 class="operating-itme-title">快速发布</h2>
    <van-grid :column-num="3" :border='false'>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
     <h2 class="operating-itme-title">天使互助</h2>
       <van-grid :column-num="3" border='false'>
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
  <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.operating-itme-title{
  margin: 0;
padding:16px;
color: rgba(69, 90, 100, 0.6);
font-weight: normal;
font-size: 14px;
line-height: 16px;
}
/deep/ .van-grid{
   background:#fff
}
</style>
