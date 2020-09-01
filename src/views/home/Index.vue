<!-- home -->
<template>
  <div class="index-container">
    <div class="index-deader-bg" />
    <div class="index-header-cotent">
      <div class="index-header">
        <div class="index-header-left">
          <van-icon name="location" color="#fff" />
          <span>深圳</span>
        </div>
        <router-link :to="'/'" class="index-header-center">
          <van-icon name="search" />
          <span>找项目|找投资|找客户</span>
        </router-link>
        <div class="index-header-right">
          <van-icon name="bill" color="red" size="24px" />
        </div>
      </div>
      <van-swipe class="swipe" :autoplay="3000">
        <van-swipe-item class="swipe-item" v-for="(image, index) in images" :key="index">
          <van-image
            width="100%"
            height="200px"
            calss="swipe-item-img"
            :src="image"
            v-lazy="image"
            alt="img"
          />
          <span class="swipe-item-text">文字文字文字文字文字文字文字文字文字文字文字文字文字字文字文字文字</span>
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-notice-bar class="notice" mode="link" left-icon="volume-o" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item>内容 1</van-swipe-item>
        <van-swipe-item>内容 2</van-swipe-item>
        <van-swipe-item>内容 3</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <div class="menu">
      <router-link
        :to="item.wap_url ? item.wap_url : ''"
        class="menu-item"
        v-for="(item, index) in menus"
        :key="index"
      >
        <div class="menu-item-icon">
          <van-image v-lazy="item.pic" alt="img" />
        </div>
        <div class="menu-item-text">{{ item.name }}</div>
      </router-link>
    </div>
    <div class="hor-title">
      <span class="hor-title-place" />
      <span class="hor-title-text">封面天使</span>
      <router-link :to="'/category'" class="hor-title-more">
        更多
        <van-icon name="arrow"></van-icon>
      </router-link>
    </div>
    <div class="hor">
      <div class="hor-header">
        <div class="hor-header-left">
          <van-icon name="add-o" />
          <span>上市公司</span>
        </div>
        <router-link :to="'/category'" class="hor-title-more">
          <van-icon class="hor-heade-right" name="arrow" />
        </router-link>
      </div>
      <van-swipe class="hor-swipe" :show-indicators="false">
        <van-swipe-item class="hor-swipe-item">
          <router-link
            :to="'/category'"
            class="hor-swipe-item-content"
            v-for="(i ,index) in tianShiList"
            :key="index"
          >
            <van-image v-lazy="i.img" />
            <span>{{i.name}}</span>
            <span>{{i.des}}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="hor-title">
      <span class="hor-title-place" />
      <span class="hor-title-text">天使视频</span>
      <router-link :to="'/category'" class="hor-title-more">
        更多
        <van-icon name="arrow"></van-icon>
      </router-link>
    </div>
    <div class="newProducts">
      <awesome-swiper class="awesome-swiper swiper-wrapper" :options="swiperProducts">
        <awesome-swiper-slide
          class="awesome-swiper-item swiper-slide"
          v-for="(item, index) in videoList"
          :key="index"
        ></awesome-swiper-slide>
      </awesome-swiper>
    </div>
  </div>
</template>

<script>
import { Swiper as AwesomeSwiper, SwiperSlide as AwesomeSwiperSlide } from 'vue-awesome-swiper'
import '@/assets/css/swiper.min.css'
import '@/assets/css/iconfont.scss'
import { getGoods } from '@/api/goods.js'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    AwesomeSwiper,
    AwesomeSwiperSlide
  },
  data() {
    return {
      playOrPause: false,
      videoList: [
        {
          url:
            'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4', // 视频源
          cover: 'http://oss.jishiyoo.com/images/file-1575341210559.png', // 封面
          tag_image: 'https://imgs.solui.cn/weapp/logo.png', // 作者头像
          fabulous: false, // 是否赞过
          tagFollow: false, // 是否关注过该作者
          author_id: 1 // 作者ID
        },
        {
          url:
            'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4',
          cover: 'http://oss.jishiyoo.com/images/file-1575343195934.jpg',
          tag_image: 'https://imgs.solui.cn/weapp/logo.png',
          fabulous: true, // 是否赞过
          tagFollow: false, // 是否关注过该作者
          author_id: 2 // 作者ID
        },
        {
          url:
            'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
          cover: 'http://oss.jishiyoo.com/images/file-1575343262684.jpg',
          tag_image: 'https://imgs.solui.cn/weapp/logo.png', // 作者头像
          fabulous: false, // 是否赞过
          tagFollow: false, // 是否关注过该作者
          author_id: 1 // 作者ID
        },
        {
          url:
            'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4',
          cover: 'http://oss.jishiyoo.com/images/file-1575343508574.jpg',
          tag_image: 'https://imgs.solui.cn/weapp/logo.png', // 作者头像
          fabulous: false, // 是否赞过
          tagFollow: false, // 是否关注过该作者
          author_id: 1 // 作者ID
        }
      ],
      swiperProducts: {
        freeMode: true,
        freeModeMomentum: false,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true
      },
      tianShiList: [
        { img: '', name: '哈哈', des: '哈哈哈哈哈哈哈哈哈哈' },
        { img: '', name: '哈哈', des: '哈哈哈哈哈哈哈哈哈哈' },
        { img: '', name: '哈哈', des: '哈哈哈哈哈哈哈哈哈哈' }
      ],
      images: [
        'https://tse1-mm.cn.bing.net/th/id/OET.6d229cb184ee4f68bde58522166686d9?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.df661b42326a4548852df98e1d92852b?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.b8cb80fefc374b7e8550afccc0879a3b?w=135&h=272&c=7&rs=1&o=5&pid=1.9'
      ],
      menus: [
        {
          name: '人脉',
          wap_url: '',
          pic:
            'data:image/jpeg;base64,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'
        },
        {
          name: '商机',
          wap_url: '',
          pic: ''
        },
        {
          name: '圈子',
          wap_url: '',
          pic:
            'data:image/jpeg;base64,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'
        },
        {
          name: '相册',
          wap_url: '',
          pic: ''
        },
        {
          name: '视频',
          wap_url: '',
          pic: ''
        },
        {
          name: '新闻',
          wap_url: '',
          pic: ''
        },
        {
          name: '榜单',
          wap_url: '',
          pic: ''
        },
        {
          name: '宅家赚钱',
          wap_url: '',
          pic: ''
        },
        {
          name: 'ACI天使会',
          wap_url: '',
          pic: ''
        },
        {
          name: '学院',
          wap_url: '',
          pic: ''
        }
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
    pauseVideo() {
      // 暂停\播放
      const video = document.querySelectorAll('video')[this.current]

      if (this.playOrPause) {
        video.pause()
        this.iconPlayShow = true
      } else {
        video.play()
        this.iconPlayShow = false
      }
      this.playOrPause = !this.playOrPause
    },
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
  .index-deader-bg {
    background: #66c6f2;
    height: 150px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .index-header-cotent {
    position: relative;
    margin: 0 10px;
    .index-header {
      display: flex;
      padding: 10px 0;
      .index-header-left {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
      .index-header-center {
        flex: 4;
        padding: 5px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f5f5f5;
        color: #ccc;
        border-radius: 10px;
      }
      .index-header-right {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .swipe {
      border-radius: 10px;
      .swipe-item {
        position: relative;
        .swipe-item-text {
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 10px 10px 25px 10px;
        }
      }
    }
  }
  .notice {
    background: #fff;
    color: #666;
    margin: 10px 0;
    .notice-swipe {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    .menu-item {
      width: 20%;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
    }
  }
  .hor-title {
    background: #f5f5f5;
    color: #666;
    width: 100%;
    padding: 5px 0;
    display: flex;
    text-align: center;
    .hor-title-place {
      flex: 1;
    }
    .hor-title-text {
      flex: 1;
      text-align: center;
    }
    .hor-title-more {
      flex: 1;
      display: flex;
      padding-right: 10px;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .hor {
    padding: 10px;
    .hor-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .hor-header-left {
        display: flex;
        align-items: center;
      }
    }
    .hor-swipe {
      .hor-swipe-item {
        display: flex;
        .hor-swipe-item-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
  .awesome-swiper {
    .awesome-swiper-item {
      height: 200px;
      width: 70%;
      .video_box {
        object-fit: fill !important;
        z-index: 999;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
      }

      video {
        object-position: 0 0;
      }

      .icon_play {
        position: absolute;
        top: 44%;
        right: 0;
        left: 0;
        bottom: auto;
        margin: auto;
        z-index: 999;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .play,
      .platStart {
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
