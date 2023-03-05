<template>
  <div>
    <van-row @click="todetails" class="goodsCard">
      <van-col span="9" style="margin-right:3%"><img src="@/assets/shop/shop-list.png" alt="noPic" style="width: 100px;height: 120px;object-fit: cover;border-radius: 10px;" /> </van-col>
      <van-col span="14">
        <div class="mgb-4" style="font-size: 17px;font-weight: 800;">{{ dataSave.goodsName }}</div>
        <div class="mgb-4 flex">
          <div class="goodsCard_Discribe" v-for="(item, index) in dataSave.goodsDiscribe" :key="index">
            <span>{{ item }}</span>
          </div>
        </div>
        <div class="mgb-4 flex" style="font-size:14px;color:grey;">
          <div>月售{{ (dataSave.goodsSale/100)<1?dataSave.goodsSale:`${parseInt(dataSave.goodsSale)}+` }}</div>
          <div style="margin-left:8px;">好评度{{ parseInt(dataSave.goodsfavor*100)+'%' }}</div>
        </div>
        <div class="flex keepToSide">
          <div>
            <span><span style="font-size:14px;color:#f4534b;">￥</span><span style="font-size:18px;color:#f4534b;">{{
              dataSave.goodsPrice }}</span><span style="color:grey;font-size:14px;">起</span></span>
          </div>
          <goodsChoose @getData="getData" :specifications="specifications" :foodName="foodName"></goodsChoose>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import goodsChoose from "./goodsCard-Choose.vue";
export default {
  components: { goodsChoose },
  data() {
    return {
      PopupData: {},
      specifications:'1',
      foodName:'牛牛面',
      dataSave: {
        goodsName: "猪杂汤粉/面（可选）",
        goodsDiscribe: ["原味", "鲜"],
        goodsSale: 4000,
        goodsfavor: 0.83,
        goodsPrice: 0,
      },
    };
  },
  methods: {
    todetails() {
      console.log("1111");
    },
    getData(a){
console.log(a)
    },
  },
};
</script>

<style lang="less" scoped>
.goodsCard {
  min-height: 110px;

  &_Discribe {
    height: 20px;
    box-sizing: border-box;
    line-height: 16px;
    font-size:13px ;
    padding: 2px;
    background-color: rgba(234, 234, 234);
    margin-right: 10px;
  }
}
</style>