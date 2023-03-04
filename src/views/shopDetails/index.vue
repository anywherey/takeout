<template>
  <div class="main">
    <img src="" alt="图">
    <goodsCardTop></goodsCardTop>
    <van-tabs v-model="active">
      <van-tab title="点菜" :title-style="navTitle">
        <order></order>
      </van-tab>
      <van-tab title="评价" :title-style="navTitle">评价</van-tab>
      <van-tab title="商家" :title-style="navTitle">商家</van-tab>
      <slot slot="nav-right"
        ><div style="padding-left: 15%; margin: auto 0">好友拼单</div></slot
      >
    </van-tabs>
  </div>
</template>

<script>
import goodsCardTop from "./components/card/goodsCard-Top.vue"
import order from "./components/order.vue";
export default {
  components: { order,goodsCardTop },
  data() {
    return {
      active: 0,
      navTitle: "font-size:18px;",
    };
  },
  mounted(){
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
::v-deep .van-tabs__line{
  width: 20px;
  height:2px;
  background: linear-gradient(135deg,#ffd000,#ffbd00);
}
</style>