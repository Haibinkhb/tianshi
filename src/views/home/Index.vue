<!-- home -->
<template>
  <div class="index-container">
    <van-swipe class="swipe" :autoplay="3000">
      <van-swipe-item class="swipe-item" v-for="(image, index) in images" :key="index">
        <van-image width="100%" height="300px" calss="swipe-item-img" :src="image" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getGoods } from '@/api/goods.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      images: [
        'https://tse1-mm.cn.bing.net/th/id/OET.6d229cb184ee4f68bde58522166686d9?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.df661b42326a4548852df98e1d92852b?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.b8cb80fefc374b7e8550afccc0879a3b?w=135&h=272&c=7&rs=1&o=5&pid=1.9'
      ]
    }
  },

  computed: {
    ...mapGetters(['storeInfo'])
  },

  mounted() {
    // sessionStorage.setItem('haha', '3123123')
  },

  methods: {
    ...mapActions(['getGoods']),
    getGoodsList() {
      const params = {
        page: 1,
        limit: 10
      }
      getGoods(params).then(res => {
        console.log(res)
        if (res && res.data) {
          this.getGoods(res.data.storeInfo)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.index-container {
  display: flex;
  flex-direction: column;
  height: 500pxs;
}
</style>
