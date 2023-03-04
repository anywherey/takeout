<template>
  <div>
    <div class="IconList grid col-3 no-border">
      <div class="IconList-item" v-for="(item, index) in iconList" :key="index"
        @click="IconList(item.path)">
        <div :class="'cuIcon-' + item.icon">
          <img :src="iconList[index].icon" class="png" />
        </div>
        <div class="IconList-name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgurl: "http",
      iconList: [
        { icon: require("@/assets/icons/mainPage/food.png"), name: "美食", path: 'food' },
        { icon: require("@/assets/icons/mainPage/dessertDrink.png"), name: "甜点饮品", path: 'dessertDrink' },
        { icon: require("@/assets/icons/mainPage/marketConvenience.png"), name: "超市便利", path: 'marketConvenience' },
        { icon: require("@/assets/icons/mainPage/vegetablesFruits.png"), name: "蔬菜水果", path: 'vegetablesFruits' },
        { icon: require("@/assets/icons/mainPage/medicine.png"), name: "美团买药", path: 'medicine' },
        { icon: require("@/assets/icons/mainPage/dinner.png"), name: "晚餐", path: 'dinner' },
        { icon: require("@/assets/icons/mainPage/RomanticFlowers.png"), name: "浪漫鲜花", path: 'RomanticFlowers' },
        { icon: require("@/assets/icons/mainPage/JKCuisine.png"), name: "日韩料理", path: 'JKCuisine' },
        { icon: require("@/assets/icons/mainPage/FastSimpleFood.png"), name: "快食简餐", path: 'FastSimpleFood' },
        { icon: require("@/assets/icons/mainPage/specialDelivery.png"), name: "美团专送", path: 'specialDelivery' },
        { icon: require("@/assets/icons/mainPage/wine.png"), name: "买酒", path: 'wine' },
        { icon: require("@/assets/icons/mainPage/subsidiesAlliance.png"), name: "津贴联盟", path: 'subsidiesAlliance' },
        { icon: require("@/assets/icons/mainPage/tiantianShenquan.png"), name: "天天神券", path: 'tiantianShenquan' },
        { icon: require("@/assets/icons/mainPage/runningErrands.png"), name: "跑腿", path: 'runningErrands' },
        { icon: require("@/assets/icons/mainPage/allCategories.png"), name: "全部分类", path: 'allCategories' }
      ],
    };
  },
  methods: {
    IconList(e) {
      this.$router.push(e
      )
    },
  },
};
</script>

<style lang="less" scoped>
.IconList {
  display: flex;
  flex-wrap: wrap;
  // padding: 10px 10px;
  padding:10px 15px 0 15px;
  margin-bottom:15px;
  &-item {
    align-items: center;
    text-align: center;
    width: 20%;
    margin-bottom:10px;
  }
  &-name{
    font-size: 14px;
    
  }
}
.png{
  width: 62px;
  height: 58px;
}
.IconList-item:nth-child(n+6){
  .png{
    width: 35px;
    height: 35px;
  }
}
</style>