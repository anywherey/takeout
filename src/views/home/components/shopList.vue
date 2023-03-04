<template>
  <div>
    <section>
     <van-row>
      <van-col span="22">
      <navitionBar></navitionBar>
    </van-col>
        <van-col span="2"> 
         <div class="nav-right">三</div>
         </van-col> 
         </van-row> 
    </section>
    <section>
      <shopCard v-for="(item, index) in dataSave" :key="index" :dataSave="item" @click.native="toDetail(item.shopid)"></shopCard>
    </section>
  </div>
</template>

<script>
import navitionBar from '@/components/navitionBar.vue'
import shopCard from "@/components/shopCard.vue";
export default {
  components: { shopCard, navitionBar },
  data() {
    return {
      obj: [],
      age: Number,
      name: String,
      dataSave: []

    };
  },
  mounted() {
    this.dataSave = [{
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }, {
      shopName: "蜜雪冰城",
      shopid: 1,
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
    }]
  },
  methods: {
    toDetail(shopid) {
      this.$router.push({
        path: `/shop-details/${shopid}`,
      })
    }
  },
};
</script>

<style lang="less" scoped>
.nav-right{
  padding:2px 0;
  box-shadow: -10px 0px 4px rgba(rgb(244, 245, 246),0.6);
}
</style>