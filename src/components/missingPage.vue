<template>
  <div class="missing">
    <div>
      <img src="@/assets/pics/404.png" alt="" style="width:300px;margin-left:20%">
      <div style="width:100%;text-align: center;">页面出错</div>
      <van-button round @click="back" style="background:#6B92F2;">回到上一页</van-button>
    </div>
  </div>
</template>

<script>
import {Button} from "vant"
export default {
  name: "NotFound",
  components:{Button},
  created() {
    document.querySelector("body").style.background = "#F4F6FB";
  },
  destroyed(){
    document.querySelector("body").style.background = "#f4f5f6";
  },
  methods:{
    back(){
    this.$router.go(-1) 
  }
  }
};
</script>

<style lang="less" scoped>
.missing {
  position:relative;
  width: 100%;
  min-height: 50px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  font-size: 42px;
  line-height: 84px;
  font-weight: 1000;
  padding: 30% 0 0 0;
  text-align: center;
}
</style>