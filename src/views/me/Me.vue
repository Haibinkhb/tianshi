<template>
  <div @click="goDetails()">我的xxxxxxxx</div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
  },

  mounted() {
    // sessionStorage.setItem('haha', '3123123')
  },
  methods: {
    goDetails(){
        this.$router.push({
        path: "/MyDetails"
      });
    }
  }
}
</script>

<style>
</style>