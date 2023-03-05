<template>
  <div>
    <myCarousel :list="list"></myCarousel>
    <!-- <img src="" alt="图"> -->
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="推荐" />
          <van-sidebar-item title="折扣" />
          <van-sidebar-item title="进店必买" />
        </van-sidebar>
      </van-col>
      <van-col span="18" class="pdl6">
        <div>精选</div>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
        <goodsCard></goodsCard>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import myCarousel from '@/components/Carousel.vue'
import goodsCard from '@/views/shopDetails/components/card/goodsCard'

export default {
    components:{goodsCard,myCarousel},
  data() {
    return {
      activeKey:0,
      list:[
        {
          id:1,
          imgUrl:require('@/assets/shop/shop-swiper-1.png')
        },
        {
          id:2,
          imgUrl:require('@/assets/shop/shop-swiper-2.png')
        },
        {
          id:3,
          imgUrl:require('@/assets/shop/shop-swiper-3.png')
        }
      ]
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep .van-sidebar-item--select::before{
  background-color: white;
}
</style>