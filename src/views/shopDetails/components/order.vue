<template>
  <div>
    <img src="" alt="图">
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
          <van-sidebar-item title="标签名称" />
        </van-sidebar>
      </van-col>
      <van-col span="18" class="pdl6">
        <div>精选</div>
        <goodsCard></goodsCard>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import goodsCard from '@/views/shopDetails/components/card/goodsCard'

export default {
    components:{goodsCard},
  data() {
    return {
      activeKey:0
    };
  },
};
</script>

<style lang="less" scoped>
::v-deep .van-sidebar-item--select::before{
  background-color: white;
}
</style>