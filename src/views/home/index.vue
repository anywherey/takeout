<template>
  <div>
    <div>
      <homePageTop />
    </div>
    <div>
      <searchInput></searchInput>
      <functionIcon></functionIcon>
      <shopList></shopList>
      <!-- <test></test> -->
      <!-- <swiper /> -->
      <backToTop></backToTop>
    </div>
    <!-- <textarea></textarea> -->
    <!-- <input type="image" ref="image" v-bind="$test"/> -->
  </div>
</template>

<script>
import functionIcon from "./components/functionIcon.vue";
import shopList from "./components/shopList.vue";
import homePageTop from "@/views/home/components/homePageTop.vue"
import searchInput from "./components/searchInput.vue";
import swiper from "@/components/swiper.vue"
import backToTop from "@/components/backToTop.vue"
export default {
  components: { functionIcon, shopList, searchInput, homePageTop, swiper, backToTop },
  data() {
    return {
      toElement: '.search'
    };
  },
  created() {
    console.log(this.$refs)
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
