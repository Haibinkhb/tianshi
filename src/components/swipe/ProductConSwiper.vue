<template>
  <div class="slider-banner product-bg">
    <swiper
      class="swiper-wrapper"
      :options="ProductConSwiper"
      v-if="imgUrls.length > 0"
      ref="mySwiper"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item, index) in imgUrls"
        :key="index"
        ref="goodSwiper"
      >
        <div
          class="slide-image"
          :style="{
            background: 'url('+ item +') no-repeat center center',
            'background-size': '100% 100%'
          }"
        >
          <img src="@/assets/images/videos.png" class="video_play" v-if="videolines && index === 0" />
        </div>
      </swiper-slide>
    </swiper>
    <!--<div :class="mobile === 'iPhone' ? 'videoBox' : ''" v-show="isOnPlay">-->
    <div class="videoBox" v-show="isOnPlay">
      <video
        ref="videoIds"
        :poster="imgUrls[0]"
        class="video-source"
        loop
        controls
        style="width:100%;object-fit:fill"
        preload="auto"
        x-webkit-airplay="true"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
        x5-video-player-type
        :src="videolines"
        @pause="endVideo"
      >您的浏览器可能不支持视频播放</video>
    </div>
    <div class="pages">{{ currents || 1 }}/{{ imgUrls.length || 1 }}</div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/swiper.min.css'

export default {
  name: 'ProductConSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    imgUrls: {
      type: Array,
      default: () => []
    },
    videoline: {
      type: String,
      default: () => ''
    }
  },
  watch: {
    videoline: {
      handler(newName) {
        this.videolines = newName
      },
      deep: true
    }
  },
  data() {
    return {
      videolines: this.videoline,
      mobile: '',
      isOnPlay: false,
      currents: 1,
      ProductConSwiper: {
        // autoplay: {
        //   disableOnInteraction: false,
        //   delay: 2000
        // },
        loop: true,
        speed: 1000,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false, // 这样，即使我们滑动之后， 定时器也不会被清除
        on: {
          slideChangeTransitionStart: () => {
            this.currents = this.realIndex + 1
            if (this.mobile === 'iPhone') {
              const oDiv = this.$refs.videoIds
              oDiv.pause()
            }
          },
          tap: () => {
            const realIndex = this.realIndex
            if (realIndex === 0) {
              this.videoPlay()
            }
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('imgUrls', this.imgUrls)
  },
  created() {
    if (navigator.platform.indexOf('Win') !== -1) this.mobile = 'iPhone'
  },
  methods: {
    endVideo() {
      this.isOnPlay = false
      const oDiv = this.$refs.videoIds
      oDiv.pause()
    },
    videoPlay() {
      if (this.videolines) {
        this.isOnPlay = true
        const oDiv = this.$refs.videoIds
        oDiv.play()
      }
    }
  }
}
</script>

<style scoped lang="scss">

.slider-banner {
  height: 500px;
}

.product-bg {
  .slide-image {
    width: 100px;
    height: 100px;
    background: url('https://tse2-mm.cn.bing.net/th/id/OIP.UZg3gEmatUaU1IU6O1bSTAHaE8?w=241&h=180&c=7&o=5&pid=1.7')
      no-repeat center center;
    background-size: 100% 100%;
  }
}

.videoBox {
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
}

.videoBox video {
  width: 100%;
  height: 100%;
}
.video-source {
  width: 100%;
  height: 100%;
}
.video_play {
  position: absolute;
  width: 1rem;
  height: 1rem;
  left: 45%;
  top: 45%;
  z-index: 11;
}
</style>
