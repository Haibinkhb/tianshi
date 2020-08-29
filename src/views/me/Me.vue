<template>
  <div class="my-container">
    <div class="my-header">
      <div class="my-header-content">
        <div class="my-header-left">
          <van-image round width="90" height="75" :src="user.photo" fit="cover" />
        </div>
        <div class="my-header-middle">
          <div>{{user.name}}</div>
          <div>
            天使号：
            <span>{{user.angelNumber}}</span>
          </div>
          <div>
            院籍：
            <span>{{user.schoolRecord}}</span>
          </div>
        </div>
        <div class="my-header-right">
          <van-icon name="qr" size="20" color="#FFFFFF" />
          <van-icon name="arrow" size="20" color="#FFFFFF" />
        </div>
      </div>
      <div class="my-header-footer">
        <div>
          访问
          <span>{{user.visitNumber}}</span>
        </div>
        <div>
          粉丝
          <span>{{user.fansNumber}}</span>
        </div>
        <div>
          内容
          <span>{{user.contentNumber}}</span>
        </div>
        <div>
          矿币
          <span>{{user.oreMoney}}</span>
        </div>
      </div>
    </div>
    <div class="my-middle">
      <div class="my-swipe">
        <van-swipe :loop="false" :width="320" :height="120" :show-indicators="false">
          <van-swipe-item v-for="(item, index) in schoolRecordList" :key="index">
            <van-image class="swipe-image" height="120" :src="item.photo" fit="cover" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="my-footer">
      <van-cell icon="cash-on-deliver" title="我的钱包" is-link to="home" />
      <van-cell icon="shop-o" title="我的推广" is-link to="home" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="star-o" title="我的收藏" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="info-o" title="关于学院" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="shop-o" title="我的院籍" is-link to="index" />
      <van-cell icon="shop-o" title="实名认证" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="shop-o" title="我的客服" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="setting-o" title="系统设置" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-cell icon="shop-o" title="关于设置" is-link to="index" />
      <van-divider :style="{height:'10px'}" />
      <van-button
        :style="{height:'60px',border:'none',fontSize:'18px'}"
        icon="https://img.yzcdn.cn/vant/user-active.png"
        type="default"
      >退出登录</van-button>
    </div>
  </div>
</template>

<script>
// import { Swiper as AwesomeSwiper, SwiperSlide as AwesomeSwiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperProducts: {
        freeMode: true,
        freeModeMomentum: false,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true
      },
      user: {
        photo: 'https://img.yzcdn.cn/vant/cat.jpeg',
        name: '张三（大师兄）',
        angelNumber: '12345678',
        schoolRecord: '体验生',
        visitNumber: '100w+',
        fansNumber: '10w+',
        contentNumber: '15w+',
        oreMoney: '1000w'
      },
      schoolRecordList: [
        {
          photo: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          schoolRecordName: '体验生（V1）',
          registerMoney: '1元/天'
        },
        {
          photo: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          schoolRecordName: '合伙人（V2）',
          registerMoney: '10元/天'
        },
        {
          photo: 'https://img.yzcdn.cn/vant/apple-3.jpg',
          schoolRecordName: '理事（V3）',
          registerMoney: '100元/天'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  .my-header {
    width: 100%;
    height: 150px;
    background: #57abf7;
    display: flex;
    flex-direction: column;
    .my-header-content {
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin: 0 10px;
      .my-header-left {
        flex: 1;
        margin-left: 10px;
      }
      .my-header-middle {
        flex: 2;
        display: flex;
        flex-direction: column;
        font-size: 13px;
        div {
          margin-bottom: 3px;
          color: white;
        }
      }
      .my-header-right {
        margin-top: 35px;
      }
    }
    .my-header-footer {
      display: flex;
      margin: 0 15px;
      justify-content: space-between;
      font-size: 13px;
      div {
        color: #ffffff;
        span {
          color: #fbea3b;
        }
      }
    }
  }
  .my-middle {
    width: 100%;
    height: 160px;
    background: #ffffff;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    position: absolute;
    top: 140px;
    left: 0;
    .my-swipe {
      height: 120px;
      width: calc(100% - 20px);
      margin-left: 20px;
      margin-top: 30px;
      .swipe-image {
        margin-right: 20px;
      }
    }
  }
  .my-footer {
    height: calc(100vh - 40px);
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    top: 150px;
    left: 0;
  }
}
</style>
