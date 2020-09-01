<!-- home -->
<template>
  <div class="index-container">
    <van-tabs>
      <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index"></van-tab>
    </van-tabs>
    <van-tabs>
      <van-tab
        v-for="index in 8"
        :title="'标签 ' + index"
        :key="index"
        background="#4994df"
        color="#fff"
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getGoods } from '@/api/goods.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
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
