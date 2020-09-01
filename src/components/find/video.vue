<template>
  <div class="container_box" id="video_box">
    <div class="video_container">
      <!--video属性
            webkit-playsinline ios 小窗播放，使视频不脱离文本流，安卓则无效
            微信内置x5内核，
            x5-video-player-type="h5-page" 启用H5播放器,是wechat安卓版特性，添加此属性，微信浏览器会自动将视频置为全屏
            x5-video-player-fullscreen="true" 全屏设置，设置为 true 是防止横屏
            x5-video-orientation 控制横竖屏 landscape 横屏，portrain竖屏； 默认portrain
            poster：封面
            src：播放地址
      -->
      <video
        class="video_box"
        :ref="item.tag_image"
        loop
        webkit-playsinline="true"
        x5-video-player-type="h5-page"
        x5-video-player-fullscreen="true"
        playsinline
        preload="auto"
        :poster="item.cover"
        :src="item.url"
        :playOrPause="playOrPause"
        @click="pauseVideo"
        @ended="onPlayerEnded($event)"
      />
      <!-- 封面 -->
      <img v-show="isVideoShow" class="play" @click="playvideo($event)" :src="item.cover" />
      <!-- 播放暂停按钮 -->
      <div v-show="iconPlayShow" class="icon_play" @click="playvideo($event)">
        <van-icon size="40" name="play-circle-o" color="#fff" />
      </div>
    </div>
  </div>
</template>

<script>
let videoProcessInterval
export default {
  name: 'Video',
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    key: {
      type: Number,
      default: () => {
        return 0
      }
    }
  },
  data() {
    const u = navigator.userAgent
    return {
      current: 1,
      videoProcess: 0, // 视频播放进度
      isVideoShow: true,
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      isAndroid: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      isiOS: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      tabIndex: 0,
      commentPop: false, // 是否展示评论弹框
      comment_text: '', // 评论输入内容
      canSend: false // 是否可以发送
    }
  },
  watch: {
    // 监听输入变化
    comment_text(newV, oldV) {
      newV === '' ? (this.canSend = false) : (this.canSend = true)
    }
  },
  methods: {
    // 开始播放
    playvideo(event) {
      const video = document.querySelectorAll('video')[this.current]
      this.isVideoShow = false
      this.iconPlayShow = false
      video.play()
      window.onresize = () => {
        video.style.width = window.innerWidth + 'px'
        video.style.height = window.innerHeight + 'px'
      }

      videoProcessInterval = setInterval(() => {
        // this.changeProcess(video)
      }, 100)
    },
    pauseVideo() {
      // 暂停\播放
      const video = document.querySelectorAll('video')[this.current]
      console.log('pauseVideo' + this.current)
      if (this.playOrPause) {
        video.pause()
        this.iconPlayShow = true
        clearInterval(videoProcessInterval)
      } else {
        video.play()
        this.iconPlayShow = false
        videoProcessInterval = setInterval(() => {
          this.changeProcess(video)
        }, 100)
      }
      this.playOrPause = !this.playOrPause
    },

    changeVideoTime(val) {
      // 改变视频时间
      console.log(val, 'video')
      if (this.$refs.video) {
        this.$refs.video.currentTime = val
      }
    },
    // 记录播放进度
    changeProcess() {
      const video = document.querySelectorAll('video')[this.current]
      const currentTime = video.currentTime.toFixed(1)
      const duration = video.duration.toFixed(1)
      this.videoProcess = parseInt((currentTime / duration).toFixed(2) * 100)
    },
    onPlayerEnded(player) {
      // 视频结束
      this.isVideoShow = true
      this.current += this.current
    },
    // 复制当前链接
    copyUrl() {
      const httpUrl = window.location.href
      var oInput = document.createElement('input')
      oInput.value = httpUrl
      document.body.appendChild(oInput)
      oInput.select() // 选择对象
      document.execCommand('Copy') // 执行浏览器复制命令
      oInput.className = 'oInput'
      oInput.style.display = 'none'
      alert('链接复制成功')
    }
  }
}
</script>

<style scoped>
.clear {
  clear: both;
}

.video-player {
  height: 100vh;
  width: 100vw;
}

.product_swiper {
  width: 100vw;
  height: 100vh;
}

.van_swipe {
  width: 100vw;
  height: 100vh;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
}

.van-swipe {
  width: 100%;
  height: 100%;
}

.container_box {
  /* width: 100vw;
  height: 100vh;
  background: #000; */
}

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
  top: 30%;
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
  bottom: 0;
  right: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
}

/*头像， 点赞，转发 */
.tag_image {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  margin-bottom: 20px;
  position: relative;
  box-shadow: 0px 0px 10px #9d9d9d;
}

.tag_add {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  border-radius: 67px;
  display: inline-block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: 0 auto;
  z-index: 1;
  font-size: 20px;
  color: #f44;
  background: #fff;
}

.tag_dui {
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  border-radius: 67px;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 auto;
  z-index: 1;
  font-size: 11px;
  color: #f44;
  background: #fff;
}

.tag_dui_active {
  opacity: 0;
  animation: showFollow 1.4s ease-in-out 0s;
}

.tag_add_num {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
}

@keyframes showFollow {
  0% {
    opacity: 1;
    color: #fff;
    background: #f44;
    transform: rotate(-180deg) scale(1);
  }
  35% {
    opacity: 1;
    color: #f44;
    background: #fff;
    transform: rotate(0deg) scale(1.2);
  }
  80% {
    opacity: 1;
    color: #f44;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
    display: none;
    color: #f44;
    transform: scale(0);
  }
}

.tools_right {
  z-index: 1001;
  position: absolute;
  right: 16px;
  bottom: 180px;
}

.tools_r_li {
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  position: relative;
}

.tools_r_li:last-child {
  margin-bottom: 0px;
}

.icon_right {
  margin-bottom: 5px;
  font-size: 42px;
  display: block;
  text-shadow: 0px 0px 10px #9d9d9d;
  /*transition: .5s;*/
}

.lianjie {
  color: #cdcdcd;
}

.share_active {
  bottom: 0px;
}

/*评论样式*/
::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

:-moz-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

::-moz-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.2);
}

.comment_container {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.comment_box {
  padding: 0 15px 52px 15px;
}

.comment_top {
  text-align: center;
  font-size: 12px;
  color: #000;
  line-height: 40px;
}

.guanbi3 {
  float: right;
  font-size: 12px;
  padding: 0 10px;
  position: absolute;
  right: 6px;
}

.comment_li {
  margin-bottom: 20px;
  font-size: 14px;
  text-align: left;
}

.comment_author_left {
  float: left;
}

.comment_author_left img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.comment_author_right {
  margin-left: 46px;
  padding-top: 4px;
}

.comment_author_top {
  position: relative;
}

.comment_author_name {
  margin-bottom: 6px;
  color: #777;
}

.icon-shoucang1_box {
  position: absolute;
  right: 0px;
  top: 0;
  text-align: center;
  color: #777;
}

.comment_author_text {
  color: #555;
  margin-bottom: 10px;
  padding-right: 35px;
}

.comment_replay_box {
  padding-left: 46px;
  box-sizing: border-box;
}

.comment_replay_li {
  margin-bottom: 10px;
}

.comment_replay_left {
  float: left;
}

.comment_replay_left img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.comment_replay_right {
  margin-left: 35px;
  padding-top: 2px;
}

.comment_replay_top {
  position: relative;
  margin-bottom: 6px;
}

.comment_replay_text {
  padding-right: 35px;
  margin-bottom: 10px;
  color: #555;
}

.comment_author_text span,
.comment_replay_text span {
  color: #999;
  font-size: 13px;
  margin-left: 6px;
}

.shoucang1_num {
  text-align: center;
  width: 30px;
  font-size: 12px;
  /* right: -4px; */
  position: relative;
}

.comment_ul {
  height: 400px;
  overflow-y: auto;
}

.comment_input_box {
  position: fixed;
  bottom: 0;
  z-index: 2999;
  width: 100%;
  border-top: 1px solid #e8e8e8;
  background: #fff;
  padding: 10px 15px;
  box-sizing: border-box;
}

/*.comment_form {*/
/**/
/*}*/

.comment_input {
  border: none;
  resize: none;
  width: 80%;
  float: left;
  color: #555;
  caret-color: #f44;
}

.comment_input_right {
  float: right;
}

.comment_i {
  font-size: 22px;
  color: #999;
  transition: 0.3s;
}

.comment_i_active {
  color: #f44;
}

.icon-zanwupinglun {
  font-size: 100px;
  color: #777;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/*添加进场效果*/
.v-move {
  transition: all 1s ease;
}

.v-leave-active {
  position: absolute;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}

.love_active {
  color: #f44;
}
/* 评论样式*/
</style>
