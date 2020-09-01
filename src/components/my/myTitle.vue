<template>
  <div>
    <div class='tabs-accoun-title'>{{title}}<span class="tabs-accoun-icon"><van-icon name="records" size='24px' /></span></div>
  </div>
</template>

<script>

export default {
   props:{
      title: {
        type: [String ,String],
      },
   }
}
</script>

<style lang="scss" scoped>
 .tabs-accoun-title{
    text-align:center;
    position:relative;
    padding:10px 0;
    background:#e2dfdf;
    .tabs-accoun-icon{
      position:absolute;
      right:8px;
      top:6px
    }
  }
</style>
