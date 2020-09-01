<template>
  <div class="shoplist_container">
    <ul type="1">
      <router-link :to="{path: 'shop', query:{ id: item.id}}" tag="li" class="shop_li">
        <section>
          <img :src="item.img" class="shop_img" />
        </section>
        <hgroup class="shop_right">
          <header class="shop_detail_header">
            <span class="premium">人才招聘</span>
            <p class="shop_title">{{'这是一段很长的介绍和覅沙发就会收到回复姑婆safposdjkpfo山'}}</p>
          </header>
          <div class="rating_order_num">
            <section class="rating_order_num_left">
              <section class="rating_section">
                <van-image
                  round
                  width="20px"
                  height="20px"
                  src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
                <span class="rating_num">{{'张三(某某公司)'}}</span>
              </section>
            </section>
            <section class="rating_order_num_right">
              <van-icon name="location" color="#ccc" />
              <span class="delivery_style delivery_right" v-if="(item.img)">深圳</span>
            </section>
          </div>
        </hgroup>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    key: {
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin';
.shoplist_container {
  background-color: #fff;
  margin-bottom: 4px;
}
.shop_li {
  overflow: hidden;
  display: flex;
  padding: 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.shop_img {
  @include wh(120px, 100%);
  display: block;
  margin-right: 0.4rem;
}
.list_back_li {
  height: 4.85rem;
  .list_back_svg {
    @include wh(100%, 100%);
  }
}
.shop_right {
  flex: auto;
  .shop_detail_header {
    @include fj;
    align-items: center;
    .shop_title {
      color: #333;
      font-weight: bold;
      padding-top: 0.01rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      @include font(16px, 16px);
    }
    .premium {
      display: inline-block;
      font-size: 12px;
      line-height: 12px;
      color: #333;
      background-color: #ffd930;
      padding: 2px;
      border-radius: 6px;
      margin-right: 10px;
      text-align: center;
      white-space: nowrap;
    }
    .shop_detail_ul {
      display: flex;
      transform: scale(0.8);
      margin-right: -0.3rem;
      .supports {
        @include sc(0.5rem, #999);
        border: 0.025rem solid #f1f1f1;
        padding: 0 0.04rem;
        border-radius: 0.08rem;
        margin-left: 0.05rem;
      }
    }
  }
  .rating_order_num {
    @include fj(space-between);
    margin-top: 12px;
    .rating_order_num_left {
      @include fj(flex-start);
      .rating_section {
        display: flex;
        .rating_num {
          @include sc(12px, #333);
          transform: scale(0.8);
        }
      }
    }
    .rating_order_num_right {
      display: flex;
      align-items: center;
      transform: scale(0.7);
      justify-content: flex-end;

      .delivery_style {
        font-size: 0.4rem;
        padding: 0.04rem 0.08rem 0;
        border-radius: 0.08rem;
        margin-left: 0.08rem;
        border: 1px;
      }
      .delivery_left {
        color: #fff;
        background-color: $blue;
        border: 1px solid $blue;
      }
      .delivery_right {
        color: $blue;
        border: 0.025rem solid $blue;
      }
    }
  }
}
</style>
