<template>
  <div class="content">
    <head-g headTitle="天使百科,邂逅天使的神奇网站!">
      <img slot="logo" src="https://img.yzcdn.cn/vant/ipad.jpeg" class="head-logo" />
    </head-g>
    <search-top @onSearchClick="onSearch" @onCancelClick="onCancel">
      <div slot="icon" class="icon">
        <van-icon name="location" color="skyblue" />
        {{ '中国' }}
      </div>
    </search-top>
    <tabs-my @onTabsClick="onTabsClick" :tabsArr="tabsArr" color="skyblue" isswipeable>
      <div slot="tabs" class="tabs">
        <tabs-my @onTabsClick="onTabChildClick" :tabsArr="tabArr" />
        <div class="right_con" @click="clickRightIcon">
          <van-icon name="more-o" />
        </div>
      </div>

      <find-item v-for="(item , i) in findItemArr" :item="item" :key="i" slot="动态" />

      <van-grid :border="false" :column-num="2" slot="小视频" :gutter="10" style="margin-top:10px">
        <van-grid-item
          v-for="(videoItem, vKey) in videoArr"
          :key="vKey"
          style="min-height:160px"
          to="/videoplay"
        >
          <div class="video_box">
            <div class="play_video">
              <van-icon size="40" name="play-circle-o" color="#fff" />
            </div>
            <div class="video_des">
              <div class="avatar_box">
                <van-image
                  round
                  width="20px"
                  height="20px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span style="margin-left=10px">名称（***）</span>
              </div>
              <section class="des">明月别枝惊雀清风半夜鸣蝉稻花香里说丰年听取蛙声一片</section>
              <div class="avatar_bottom">
                <span>
                  <van-icon name="location-o" />3.8km
                </span>
                <span>
                  <van-icon name="browsing-history-o" />10w+
                </span>
              </div>
            </div>
          </div>
          <van-image
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2882417333,796297084&fm=26&gp=0.jpg"
            fit="fill"
            style="height:100%;width:100%;border-radius:10px"
          />
        </van-grid-item>
      </van-grid>

      <van-grid :border="false" :column-num="2" slot="视频" :gutter="10" style="margin-top:10px">
        <van-grid-item style="min-height:160px" v-for="(videoI , i) in videoList " :key="i">
          <video-play :item="videoI" :key="i" />
        </van-grid-item>
      </van-grid>
    </tabs-my>

    <!--小视频播放弹窗 -->
  </div>
</template>

<script>
import findItem from '../../components/find/findItem'
import headG from '../../components/find/head'
import SearchTop from '../../components/find/search'
import tabsMy from '../../components/find/tabs'
import videoPlay from '../../components/find/video'
import { Toast } from 'vant'
export default {
  data() {
    return {
      findItemArr: [
        {
          img: 'https://img.yzcdn.cn/vant/ipad.jpeg',
          title: '干啥干啥',
          msg: '怎样怎样',
          person: '张三',
          localtion: '深圳',
          id: 1
        }
      ],
      tabsArr: [
        { title: '动态' },
        { title: '商机' },
        { title: '新闻' },
        { title: '图片' },
        { title: '小视频' },
        { title: '视频' }
      ],
      tabArr: [
        { title: '最近' },
        { title: '附近' },
        { title: '同城' },
        { title: '关注' },
        { title: '好友' },
        { title: '同级' },
        { title: '同行' },
        { title: '好友' },
        { title: '同级' },
        { title: '同行' }
      ],
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
        }
      ],
      activeTitle: '动态',
      activeChildTitle: '关注',
      videoArr: [{}, {}]
    }
  },
  methods: {
    onSearch(value) {
      console.log('value', value)
    },
    onCancel() {
      console.log('取消')
    },
    onTabsClick(val) {
      this.activeTitle = val
    },
    onTabChildClick(val) {
      this.activeChildTitle = val
    },
    clickRightIcon() {
      Toast.success('牛皮')
    }
  },
  mounted() {},
  destroyed() {
    console.log('销毁掉了')
  },
  components: {
    findItem,
    headG,
    SearchTop,
    tabsMy,
    videoPlay
  },
  props: [],
  mixins: [],
  computed: {},
  updated() {},
  watch: {}
}
</script>

<style  lang="scss" scoped>
@import '../../assets/css/mixin';

.content {
  // background: #ccc;
  .head-logo {
    @include wh(24px, 24px);
    padding: 20px;
  }
  .icon {
    height: 100%;
    line-height: 60px;
    padding-left: 8px;
    font-size: 16px;
    font-weight: bold;
  }
  .tabs {
    position: relative;
    width: 100%;
    height: 40px;
    .right_con {
      position: absolute;
      background: #ccc;
      text-align: center;
      font-size: 20px;
      line-height: 40px;
      width: 40px;
      height: 40px;
      right: 0;
      top: 0;
    }
  }
  /deep/ .van-grid-item__content {
    padding: 0;
    position: relative;
  }
  /deep/ .van-image__img {
    border-radius: 10px;
  }
  .video_box {
    position: absolute;
    color: #ffffff;
    z-index: 99;
    width: 100%;
    height: 100%;
    .play_video {
      position: absolute;
      left: 50%;
      margin-left: -20px;
      top: 30px;
    }
    .video_des {
      position: absolute;
      background: #333;
      box-sizing: border-box;
      border-radius: 15px;
      padding: 0 8px;
      width: 100%;
      opacity: 0.7;
      bottom: 0;
      .avatar_box {
        display: flex;
        align-items: center;
      }
      .des {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    .avatar_bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px;
    }
  }
}
</style>
