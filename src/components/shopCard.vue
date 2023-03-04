<template>
  <div class="shopCard pd16 mg-5">
    <img src="" alt="未查找到图片" />
    <div class="shopCard_words">
      <section>
        <h2>{{ dataSave.shopName }}</h2>
      </section>
      <section class="font">
        <span>{{ dataSave.shopScore }}分</span>
        <span> 月售{{ dataSave.shopMonthSales }}</span>
        <span> 人均￥{{ dataSave.shopAverageSales }}</span>
        <span class="float-right">美团专送</span>
      </section>
      <section class="font">
        <div>
          <span>起送￥{{ dataSave.StartingSale }}</span>
          <span>配送 约￥{{ dataSave.deliverableSale }}</span>
          <div class="float-right">
            <span>{{ dataSave.shopTimeSpending }}分钟</span
            ><span
              v-html="
                dataSave.shopDistance / 1000 >= 1
                  ? ` ${(dataSave.shopDistance / 1000).toFixed(2)}km`
                  : ` ${dataSave.shopDistance}m`
              "
            ></span>
          </div>
        </div>
      </section>
      <section class="font flex">
        <div><div class="normalIndex">{{ dataSave.normalIndex }}</div></div>
        <div><div class="regionIndex margin-left-xs">{{ dataSave.regionIndex }}</div></div>
      </section>
      <section class="font flex margin-top-xs">
        <div><div class="promotionIndex">{{ dataSave.promotionIndex }}</div></div>
        <div></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSave: {
      type: Object,
      default: function _default() {
        return {
          shopName: "蜜雪冰城",
          shopScore: "4.8",
          shopMonthSales: 2043,
          shopAverageSales: 8,
          StartingSale: 15,
          deliverableSale: 1.5,
          shopTimeSpending: 37,
          shopDistance: 8422,
          normalIndex: "点评收录7年",
          regionIndex: "广东冰淇淋人气榜第2名",
          promotionIndex: "最高7元无门槛红包",
        };
      },
    },
  },
  mounted(){
    
  }
};
</script>

<style lang="less" scoped>
.shopCard {
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  margin-bottom:15px;
  min-height: 120px;
  border-radius: 8px;
  background-color: white;
  >img{
    width:30%;
  }
  &_words {
    width: 70%;
  }
}
.font {
  font-size: 13px;
  color: rgba(112, 112, 112, 0.6);
}
.normalIndex{
  background: rgba(255, 187, 98, 0.45);
  color:rgb(148, 143, 138);
}
.regionIndex{
   background: rgba(248, 171, 69, 0.45);
  color:rgb(148, 143, 138);
}
.promotionIndex{
  background: white;
  color:rgb(236, 129, 129);
  border:1px solid rgb(236, 129, 129);
}
</style>
