<template>
  <div class="mapBox">
    <!-- 地图容器 -->
    <div id="map"></div>
  </div>
</template>
 
<script>
import L from "leaflet"
import "leaflet/dist/leaflet.css"

  export default {
    name: 'LeafletMap',
    data() {
      return {
        map: null
      }
    },
    mounted() {
      // 地图初始化
      this.initMap()
    },
    methods: {
      // 使用id为map的div容器初始化地图，同时指定地图的中心点和缩放级别
      initMap() {
        let map = L.map("map", {
          center: [24.485666, 118.095498], // 中心位置
          zoom: 12, // 缩放等级
          attributionControl: false, // 版权控件
          zoomControl: true //缩放控件
        });
        this.map = map; // data上需要挂载
        L.tileLayer(
          "http://wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}"
        ).addTo(map) // 加载底图
      }
    }
  }
</script>
<style scoped>
  #map {
    width: 100%;
    height: 500px;
  }
</style>