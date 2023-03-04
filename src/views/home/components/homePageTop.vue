<template>
  <div class="keepToSide pdl6 bg-mtYello">
    <!-- 定位 -->
    <div>
      <img class="locationIcon" src="@/assets/icons/Location.png" alt="" />
      <div class="locationIcon-left"><span>汕尾市</span><span>></span></div>
    </div>
    <!-- 消息 -->
    <div class="flex">
      <img
        class="messageIcon"
        src="@/assets/icons/notificationBell.png"
        alt=""
      />
      <div class="messageIcon-font">9+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataSave: {
      type: Object,
    },
  },
};
</script>

<style lang="less" scoped>
.locationIcon {
  position: relative;
  height: 20px;
  width: 20px;
  &-left {
    position: absolute;
    left: 35px;
    font-size: 15px;
    top: 8px;
  }
}
.messageIcon {
  height: 22px;
  width: 22px;
  &-font {
    position: absolute;
    top: -4px;
    right:-5px;
    background-color: red;
    height: 30px;
    width: 30px;
    line-height: 30px;
    transform:scale(0.5) ;
    border-radius: 50%;
    overflow: hidden;
    font-size: 20px;
    text-align:center;
    align-items: center;
  }
}
</style>