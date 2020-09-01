<!-- home -->
<template>
  <div class="index-container">
    <van-nav-bar title left-text="返回">
      <template #left>
        <van-icon name="arrow-left" @click='goback()' />
        <van-icon name="wap-home" />
      </template>
      <template #title>
        <div class="clearfix">
        <span class="f-l detail-title-img"><img src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png" alt /></span>
        <span class="f-r detail-title-name">某某某</span>
        </div>
      </template>
      <template #right>
        <van-icon name="wap-nav" />
      </template>
    </van-nav-bar>
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
        <!-- <span class="swipe-item-text">文字文字文字文字文字文字文字文字文字文字文字文字文字字文字文字文字</span> -->
      </van-swipe-item>
    </van-swipe>
    <div class="backgroundDiv">
      <div class="box-one">
        <span>
          <van-icon name="location" />1000
        </span>
        <span style="margin-left:80px">
          大师兄
          <van-icon name="comment" />
          <span style="padding:3px 8xp">v9</span>
        </span>
        <span class="redEnvelope">
          <van-icon name="bill" />
        </span>
      </div>
      <div class="box-two">天使认证：赛马xxxxxxx</div>
      <div class="box-three">
        抱团取暖：xxxxxxxxxxxxxxxxxxxxx
        <van-icon name="arrow" />
      </div>
      <div class="box-flex">
        <div>
          <p class="box-number">10W+</p>
          <p class="box-text">访问</p>
        </div>
        <div>
          <p class="box-number">10W+</p>
          <p class="box-text">粉丝</p>
        </div>
        <div>
          <p class="box-number">10W+</p>
          <p class="box-text">内容</p>
        </div>
        <div>
          <p class="box-number">10W+</p>
          <p class="box-text">矿比</p>
        </div>
      </div>
    </div>
    <div style="height:140px"></div>
    <div class="my-tabs">
      <van-tabs v-model="active" animated>
        <van-tab v-for="(item,idx) in tabsTile" :title="item.name" :key="idx">
          <my-title title="账号信息" />
          <!-- <div class='tabs-accoun-title'>账号信息 <span class="tabs-accoun-icon"><van-icon name="records" size='24px' /></span> -->
          <!-- </div > -->
          <div class="accoun-contnet-one">
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
            <p>天使号：xxxx</p>
          </div>
          <my-title title="联系方式" />
          <div class="accoun-contnet-two">
            <div>
              <p class="contnet-two-text">手机</p>
              <p>12345678910</p>
            </div>
            <div>
              <p class="contnet-two-text">手机</p>
              <p>12345678910</p>
            </div>
            <div>
              <p class="contnet-two-text">手机</p>
              <p>12345678910</p>
            </div>
          </div>
          <my-title title="个人简介" />
          <div class="accoun-contnet-three" v-show="!showflag[0]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(true,0)"> 展开
              <van-icon name="arrow-down"  />
              </span>
            </p>
          </div>
            <div class="accoun-contnet-three-all" v-show="showflag[0]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(false,0)"> 收起
              <van-icon name="arrow-up"  />
              </span>
            </p>
          </div>
          <my-title title="单位简介简介" />
          <div class="accoun-contnet-three" v-show="!showflag[1]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(true,1)"> 展开
              <van-icon name="arrow-down"  />
              </span>
            </p>
          </div>
            <div class="accoun-contnet-three-all" v-show="showflag[1]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(false,1)"> 收起
              <van-icon name="arrow-up"  />
              </span>
            </p>
          </div>
          <my-title title="主营业务" />
           <div class="accoun-contnet-three" v-show="!showflag[2]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(true,2)"> 展开
              <van-icon name="arrow-down"  />
              </span>
            </p>
          </div>
            <div class="accoun-contnet-three-all" v-show="showflag[2]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(false,2)"> 收起
              <van-icon name="arrow-up"  />
              </span>
            </p>
          </div>
          <my-title title="成功案例" />
           <div class="accoun-contnet-three" v-show="!showflag[3]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(true,3)"> 展开
              <van-icon name="arrow-down"  />
              </span>
            </p>
          </div>
            <div class="accoun-contnet-three-all" v-show="showflag[3]">
            <p
              class="contnet-three-text"
            >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
            <p class="contnet-three-btn">
              <span @click="showUnfold(false,3)"> 收起
              <van-icon name="arrow-up"  />
              </span>
            </p>
          </div>
          <my-title title="动态" />
          <div class="dynamic">
            <div class="dynamic-wrap clearfix">
              <div class="dynamic-left">
                <img
                  src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                />
              </div>
              <div class="dynamic-right">
                <p class="dynamic-right-one">
                  <span>张三</span>
                </p>
                <p class="dynamic-right-two clearfix">
                  <span class="dynamic-right-two-name">赛马合伙人</span>
                  <span class="dynamic-right-two-time">2020-7-18 16:24</span>
                </p>
                <p
                  class="contnet-three-text"
                >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
                <p class="contnet-three-btn"></p>
                <div class="dynamic-right-img">
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                  <img
                    src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                    alt
                  />
                </div>
                <div class="clearfix">
                  <span class="f-l">广东深圳 12KM</span>
                  <span class="f-r" style="margin-right:8px">
                    <van-icon name="records" size="20px" />
                  </span>
                </div>
                <div class="dynamic-right-btn">
                  <div>10W+</div>
                  <div>10W+</div>
                  <div>10W+</div>
                  <div>10W+</div>
                </div>
              </div>
            </div>

            <div class="dynamic-wrap clearfix">
              <div class="dynamic-left">
                <img
                  src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                />
              </div>
              <div class="dynamic-right">
                <p class="dynamic-right-one">
                  <span>张三</span>
                </p>
                <p class="dynamic-right-two clearfix">
                  <span class="dynamic-right-two-name">赛马合伙人</span>
                  <span class="dynamic-right-two-time">2020-7-18 16:24</span>
                </p>
                <p
                  class="contnet-three-text"
                >手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机手机</p>
                <p class="contnet-three-btn"></p>
                <div class="dynamic-right-video" style="margin-top:10px">
                  <van-swipe :loop="false" :width="250">
                    <van-swipe-item>
                      <img
                        style="width:250px;height:120px"
                        src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                      />
                    </van-swipe-item>
                    <van-swipe-item style="margin-left:10px">
                      <img
                        style="width:250px;height:120px"
                        src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                      />
                    </van-swipe-item>
                    <van-swipe-item style="margin-left:10px">
                      <img
                        style="width:250px;height:120px"
                        src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                      />
                    </van-swipe-item>
                    <van-swipe-item style="margin-left:10px">
                      <img
                        style="width:250px;height:120px"
                        src="https://xfm-erp.vip/Beauty/images/3ce3a83f-18f8-4cf9-931d-655c8d9fa35d.png"
                      />
                    </van-swipe-item>
                  </van-swipe>
                </div>
                <div class="clearfix">
                  <span class="f-l">广东深圳 12KM</span>
                  <span class="f-r" style="margin-right:8px">
                    <van-icon name="records" size="20px" />
                  </span>
                </div>
                <div class="dynamic-right-btn">
                  <div>10W+</div>
                  <div>10W+</div>
                  <div>10W+</div>
                  <div>10W+</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getGoods } from '@/api/goods.js'
import myTitle from '../../components/my/myTitle'
import logo from '@/assets/logo.png'
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      showflag:[false,false,false,false],
      active: 0,
      images: [
        'https://tse1-mm.cn.bing.net/th/id/OET.6d229cb184ee4f68bde58522166686d9?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.df661b42326a4548852df98e1d92852b?w=135&h=272&c=7&rs=1&o=5&pid=1.9',
        'https://tse1-mm.cn.bing.net/th/id/OET.b8cb80fefc374b7e8550afccc0879a3b?w=135&h=272&c=7&rs=1&o=5&pid=1.9'
      ],
      tabsTile: [
        {
          name: '首页'
        },
        {
          name: '动态'
        },
        {
          name: '商机'
        },
        {
          name: '新闻'
        },
        {
          name: '相册'
        },
        {
          name: '小视频'
        },
        {
          name: '视频'
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
    },
    goback(){
       this.$router.back()
    },
    showUnfold(bol,idx){
        this.$set(this.showflag,idx, bol)
        // this.showflag[idx] = bol
        // console.log(  this.showflag)
        // this.$forceUpdate()
    }
  },
  components: {
    myTitle
  }
}
</script>
<style lang="scss" scoped>
// .index-container {
//   display: flex;
//   flex-direction: column;
//   height: 500px;
// }
/deep/ .van-swipe__indicators{
   bottom:60px
}
.detail-title-img{
   img{
        width:30px;
   height:30px;
   border-radius:50%;
   }
}
.detail-title-name{
  margin-top:6px;
  margin-left:6px
}
.backgroundDiv {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 200px;
  height: 180px;
  background-color: #ffffff;
  box-shadow: 0 3px 10px #e3e3e6;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  border-radius: 10px;
  .box-one {
    position: relative;
    padding: 0 30px;
    margin-top: 20px;
  }
  .box-two {
    padding: 0 50px;
    margin: 8px 0;
  }
  .box-three {
    padding: 0 50px;
  }
}
.redEnvelope {
  position: absolute;
  right: 0;
  top: 0;
}
.box-flex {
  display: flex;
  margin-top: 32px;
}
.box-flex div {
  flex: 1;
  text-align: center;
}
.box-flex div .box-number {
  color: blue;
  font-size: 18px;
}
.box-flex div .box-text {
  margin-top: 8px;
  font-size: 14px;
}
.my-tabs {
  // position:relative;
  // top: 140px;
  .tabs-accoun-title {
    text-align: center;
    position: relative;
    padding: 10px 0;
    background: #e2dfdf;
    .tabs-accoun-icon {
      position: absolute;
      right: 8px;
      top: 6px;
    }
  }
  .accoun-contnet-one {
    padding: 20px;
    p {
      font-size: 16px;
      margin: 6px 0;
    }
  }
  .accoun-contnet-two {
    display: flex;
    padding: 10px;
    div {
      margin: 0 8px;
      padding: 6px 0;
      flex: 1;
      text-align: center;
      background-color: #ffffff;
      box-shadow: 0 3px 10px #e3e3e6;
      .contnet-two-text {
        margin-bottom: 5px;
      }
    }
  }
  .accoun-contnet-three {
    .contnet-three-text {
      margin-top:12px;
      padding: 0 16px;
      color: #333;
      font-weight: bold;
      //   padding-top:0.01rem;
      height: 48px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .contnet-three-btn {
      margin: 28px 0 12px 0;
      text-align: center;
    }
  }
  .accoun-contnet-three-all{
    .contnet-three-text {
      margin-top:12px;
      padding: 0 16px;
      color: #333;
      font-weight: bold;
      //   padding-top:0.01rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .contnet-three-btn {
      margin: 28px 0 12px 0;
      text-align: center;
    }
  }
  .dynamic {
    .dynamic-wrap {
      .dynamic-left {
        float: left;
        width: 80px;
        text-align: center;
        img {
          margin-top: 16px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
      .dynamic-right {
        float: left;
        width: calc(100% - 80px);
        .dynamic-right-one {
          margin-top: 16px;
          font-size: 17px;
        }
        .dynamic-right-two {
          margin-top: 6px;
          font-size: 12px;
          .dynamic-right-two-name {
            float: left;
          }
          .dynamic-right-two-time {
            float: right;
            margin-right: 8px;
          }
        }
        .contnet-three-text {
          margin-top: 20px;
          // padding: 16px;
          color: #333;
          font-weight: bold;
          //   padding-top:0.01rem;
          height: 48px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .dynamic-right-img {
          margin-top: 10px;
          img {
            width: 80px;
            height: 80px;
            margin-right: 6px;
            margin-bottom: 6px;
            border-radius: 6px;
          }
        }
        .dynamic-right-btn {
          display: flex;
          text-align: left;
          margin-top: 16px;
          div {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
