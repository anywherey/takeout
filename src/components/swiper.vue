<template>
  <div>
    <!-- 焦点图模块 -->
    <div class="focus">
      <!-- <ul @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"> -->
        <ul>
        <li v-for="(item, index) in dataSave" :key="index">
          <img :src="item.src" alt="" />
        </li>
        <li>
          <img src="@/assets/pics/upload/focus1.jpg" alt="">
        </li>
      </ul>
      <!-- 小圆点 -->
      <ol>
        <li class="current"></li>
        <li></li>
        <li></li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 获取元素
      focus: String,
      ul: String,
      // 获得focus 的宽度
      width: Number,
      ol: String,
      index: Number,
      timer: String,
      //   获取手指初始坐标
      startX: 0,
      moveX: 0,
      flag: false,
    };
  },
  props: {
    dataSave: {
      type: Array,
      default: function _default() {
        return [
          { id: 0, src: "@/assets/pics/upload/focus1.jpg" },
          { id: 1, src: "@/assets/pics/upload/focus2.jpg" },
          { id: 2, src: "@/assets/pics/upload/focus3.jpg" },
        ];
      },
    },
  },
  mounted() {
    // this.swiper();
  },
  methods: {
    swiper() {
      // 1. 获取元素
      this.focus = document.querySelector(".focus");
      console.log(this.focus);
      this.ul = this.focus.children[0];
      console.log(this.ul);
      // 获得focus 的宽度
      this.w = this.focus.offsetWidth;
      this.ol = this.focus.children[1];
      // 2. 利用定时器自动轮播图图片
      this.index = 0;
      this.timer = setInterval(function () {
        this.index++;
        let translatex = -this.index * this.width;
        this.ul.style.transition = "all .3s";
        this.ul.style.transform = "translateX(" + translatex + "px)";
      }, 2000);
      // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend
      this.ul.addEventListener("transitionend", function () {
        // 无缝滚动
        if (this.index >= 3) {
          this.index = 0;
          // console.log(this.index);
          // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
          this.ul.style.transition = "none";
          // 利用最新的索引号乘以宽度 去滚动图片
          let translatex = -this.index * this.width;
          this.ul.style.transform = "translateX(" + translatex + "px)";
        } else if (this.index < 0) {
          this.index = 2;
          this.ul.style.transition = "none";
          // 利用最新的索引号乘以宽度 去滚动图片
          let translatex = -this.index * this.width;
          this.ul.style.transform = "translateX(" + translatex + "px)";
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名 remove
        this.ol.querySelector(".current").classList.remove("current");
        // 让当前索引号 的小li 加上 current   add
        this.ol.children[this.index].classList.add("current");
      });
    },
    touchstart(e) {
      // 4. 手指滑动轮播图
      // 触摸元素 touchstart： 获取手指初始坐标
      this.startX = e.targetTouches[0].pageX;
      // 手指触摸的时候就停止定时器
      clearInterval(this.timer);
    },
    touchmove(e) {
      // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
      // 计算移动距离
      this.moveX = e.targetTouches[0].pageX - this.startX;
      // 移动盒子：  盒子原来的位置 + 手指移动的距离
      let translatex = -this.index * this.width + this.moveX;
      // 手指拖动的时候，不需要动画效果所以要取消过渡效果
      this.ul.style.transition = "none";
      this.ul.style.transform = "translateX(" + translatex + "px)";
      this.flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
      e.preventDefault(); // 阻止滚动屏幕的行为
    },
    touchend() {
      // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
      if (this.flag) {
        // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
        if (Math.abs(this.moveX) > 50) {
          // 如果是右滑就是 播放上一张 moveX 是正值
          if (this.moveX > 0) {
            this.index--;
          } else {
            // 如果是左滑就是 播放下一张 moveX 是负值
            this.index++;
          }
          let translatex = -this.index * this.width;
          this.ul.style.transition = "all .3s";
          this.ul.style.transform = "translateX(" + translatex + "px)";
        } else {
          // (2) 如果移动距离小于50像素我们就回弹
          let translatex = -this.index * this.width;
          this.ul.style.transition = "all .1s";
          this.ul.style.transform = "translateX(" + translatex + "px)";
        }
      }
      // 手指离开的时候就重新开启定时器
      clearInterval(this.timer);
      this.timer = setInterval(function () {
        this.index++;
        let translatex = -this.index * this.width;
        this.ul.style.transition = "all .3s";
        this.ul.style.transform = "translateX(" + translatex + "px)";
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
/* focus */
.focus {
  position: relative;
  // padding-top: 44px;
  overflow: hidden;
}
.focus img {
  width: 100%;
}
.focus ul {
  overflow: hidden;
  width: 500%;
  margin-left: -100%;
}
.focus ul li {
  float: left;
  width: 20%;
}
.focus ol {
  position: absolute;
  bottom: 5px;
  right: 5px;
  margin: 0;
}
.focus ol li {
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #fff;
  list-style: none;
  border-radius: 2px;
  transition: all 0.3s;
}
.focus ol li.current {
  width: 15px;
}
</style>
