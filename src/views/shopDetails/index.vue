<template>
  <div>
    <navitionTop></navitionTop>
    <div class="main">
      <goodsCardTop></goodsCardTop>
      <van-tabs v-model="active">
        <van-tab title="点菜" :title-style="navTitle">
          <order></order>
        </van-tab>
        <van-tab title="评价" :title-style="navTitle">评价</van-tab>
        <van-tab title="商家" :title-style="navTitle">商家</van-tab>
        <slot slot="nav-right">
          <div style="align-items: center;display: flex;">
            <div
              style="font-size:13px;font-weight:600;height:25px;padding:0 4px;color:#fa7e05;border:1px solid #fa7e05;border-radius: 5px;margin:0 10px 0 80px;">
              好友拼单</div>
          </div>
        </slot>
      </van-tabs>
    </div>
    <bottomShopping></bottomShopping>
  </div>
</template>

<script>
import navitionTop from '@/components/navitionTop.vue'
import bottomShopping from '@/components/bottomShopping.vue'
import goodsCardTop from "./components/card/goodsCard-Top.vue"
import order from "./components/order.vue";
export default {
  components: { order, goodsCardTop, navitionTop, bottomShopping },
  data() {
    return {
      active: 0,
      navTitle: "font-size:18px;",
    };
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style lang="less" scoped>
.main {
  background-color: white;
}

.navTitle {
  // font-size: 20px;
}

::v-deep .van-tabs__line {
  width: 20px;
  height: 2px;
  background: linear-gradient(135deg, #ffd000, #ffbd00);
}
</style>