<template>
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view />
    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!--
        route: 开启路由模式
       -->
    <Tabbar class="layout-tabbar" v-model="active" route>
      <TabbarItem replace to="/home">
        <template #icon="props">
          <img id="home" :class="props.active ? 'icon-active' : 'icon-default'"
            :src="props.active!=0 ? activeIcon.home : defaultIcon.home" alt="">
        </template>
        <span class="text">{{ toTop ? '回顶部' : '首页' }}</span>
      </TabbarItem>
      <TabbarItem replace to="/member">
        <template #icon="props">
          <img :class="props.active ? 'icon-active' : 'icon-default'"
            :src="props.active ? activeIcon.member : defaultIcon.member" alt="">
        </template>
        <span class="text">会员</span>
      </TabbarItem>
      <TabbarItem replace to="/orderList">
        <template #icon="props">
          <img :class="props.active ? 'icon-active' : 'icon-default'"
            :src="props.active ? activeIcon.orderList : defaultIcon.orderList" alt="">
        </template>
        <span class="text">订单</span>
      </TabbarItem>
      <TabbarItem replace to="/my">
        <template #icon="props">
          <img :class="props.active ? 'icon-active' : 'icon-default'" :src="props.active ? activeIcon.my : defaultIcon.my"
            alt="">
        </template>
        <span class="text">我的</span>
      </TabbarItem>
    </Tabbar>
    <!-- /标签导航栏 -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "LayoutIndex",
  components: { Tabbar, TabbarItem },
  props: {},
  data() {
    return {
      active: 0,
      toTop: false,
      toTopIcon: require('@/assets/icons/tabbar/home-toTop.png'),
      defaultIcon: {
        home: require('@/assets/icons/tabbar/home-default.png'),
        member: require('@/assets/icons/tabbar/member-default.png'),
        orderList: require('@/assets/icons/tabbar/orderList-default.png'),
        my: require('@/assets/icons/tabbar/my-default.png')
      },
      activeIcon: {
        home: require('@/assets/icons/tabbar/home-active.png'),
        member: require('@/assets/icons/tabbar/member-active.png'),
        orderList: require('@/assets/icons/tabbar/orderList-active.png'),
        my: require('@/assets/icons/tabbar/my-active.png')
      }
    };
  },
  methods: {
  },
  mounted() {
    let home = document.getElementById('home')
    const Viewheight = document.documentElement.clientHeight || document.body.clientHeight
    window.addEventListener("scroll", function () {
      this.toTopIcon = require('@/assets/icons/tabbar/home-toTop.png')
      const homeIcon = require('@/assets/icons/tabbar/home-active.png')
      if (window.pageYOffset >= Viewheight) {
        this.toTop = true
        home.src = this.toTopIcon
        home.onclick = function () {
          window.scroll(0, 0);
        }
      } else {
        home.onclick = null
        this.toTop = false
        home.src = homeIcon
      }
    });
  },
};
</script>

<style scoped lang="less">
.layout-tabbar {
  height: 62px
}

.icon-default {
  width: 28px;
  height: 28px;
}

.icon-active {
  width: 40px;
  height: 46px;
}

.text {}

:v-deep .van-tabbar-item__icon {
  position: absolute;
}

::v-deep .van-tabbar-item--active {
  color: black;
}
</style>
