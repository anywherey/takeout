<template>
  <!-- 返回顶部,toElement传元素标签class属性 -->
  <div>
    <div class="goBack" @click="goBack()"></div>
  </div>
</template>

<script>
export default {
  props: {
    toElement: {
      type: String,
      default: null,
    },
  },
  mounted() {
    let goBack = document.querySelector(".goBack");
    if (this.toElement) {
      let nav = document.querySelector(this.toElement);
      window.addEventListener("scroll", function () {
        if (window.pageYOffset >= nav.offsetTop) {
          goBack.style.display = "block";
        } else {
          goBack.style.display = "none";
        }
      });
    } else {
      goBack.style.display = "block";
    }
  },
  methods: {
    goBack() {
      // 返回顶部模块制作
      let goBack = document.querySelector(".goBack");
      goBack.addEventListener("click", function () {
        window.scroll(0, 0);
      });
    },
  },
};
</script>

<style lang="less" scoped>
/* goBack */
.goBack {
  display: none;
  position: fixed;
  z-index: 9999;
  bottom: 50px;
  right: 20px;
  width: 38px;
  height: 38px;
  background: url("@/assets/pics//back.png") no-repeat;
  background-size: 38px 38px;
}
</style>