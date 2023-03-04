<template>
  <div>
    <div @click.stop="addOrChoose" class="addButton-small" v-if="dataSave.specifications">选规格</div>
    <div @click.stop="addOrChoose" class="addButton-small" v-else>{{ dataSave.xxx ? `'-'${dataSave.xxx}'+'` : '+' }}</div>
    <section>
      <div @click="showPopup = !showPopup" v-show="showPopup" class="cancel">X</div>
      <van-popup v-model="showPopup" @close="close" class="Popup pd16">
        <div class="mgb-10">{{ foodName }}</div>
        <section class="Popup_arrtibute">
          <div v-for="(item, index) in dataSave" :key="index">
            <div class="mgb-10">{{ index }}</div>
            <div class="mgb-10 flex">
              <div class="Popup_default Popup_selected" v-for="(inItem, inIndex) in item" :key="inIndex">
                <div class="Popup_selectedIn">{{ inItem.name }}</div>
                <div v-if="inItem.price" class="Popup_selectedIn_right">￥<span>{{ inItem.price }}</span></div>
              </div>
            </div>
          </div>
        </section>
        <div class="mgb-10" style="background-color:#fbfbfb;">
          <div style="padding:4px;margin-bottom:10px;">
            <span style="color:gray;">已选规格：</span>
            <span>牛杂</span>
          </div>
        </div>
        <div class="keepToSide">
          <div>
            <div><span style="font-size:14px;font-weight: 600;">总计 </span><span
                style="font-size:18px;color:#f4534b;">¥</span><span style="font-size:18px;color:#f4534b;">1.9</span>
            </div>
          </div>
          <section @click="buyButton">
            <div class="addButton-medium">+ 加入购物车</div>
          </section>
        </div>
        <div>
          <div>到手预估</div>
          <div><span>￥</span><span>23.8</span></div>
        </div>
      </van-popup>
    </section>
  </div>
</template>

<script>

export default {
  props: {
    foodName: {
      type: String,
      default: '牛杂面'
    },
    dataSave: {
      type: Object,
      default: function _default() {
        return {
          '加料': [{
            name: '原料',
            price: 10
          }, {
            name: '+爆珠',
            price: 10
          }, {
            name: '+仙草',
            price: 10
          }, {
            name: '+黑钻',
            price: 10
          }, {
            name: '+芋圆',
            price: 10
          }],
          "温度": [{
            name: '冰',
            price: undefined
          }, {
            name: '少冰',
            price: undefined
          }, {
            name: '常温',
            price: undefined
          }],
          "加大料": [{
            name: '冬瓜',
          }]
        }
      }
    },
  },
  watch: {
    showPopup() {
      this.$emit("update:showPopup", this.showPopup)
    }
  },
  data() {
    return {
      showPopup: false,
      show: true,
    };
  },
  methods: {
    addOrChoose() {
      this.showPopup = !this.showPopup
    },
    buyButton() {
      this.showPopup = !this.showPopup
      this.$emit('getData', 'test')
    },
    close() {
      console.log("11")
    }
  }
};
</script>

<style lang="less" scoped>
@selectPD: 4px;

.Popup {
  width: 85%;
  height: 300px;
  border-radius: 2%;
  overflow: hidden;

  &_arrtibute {
    height: 150px;
    overflow-y: scroll;
  }

  &_default {
    display: flex;
    height: 100%;
    // padding: 4px;
    border: 1px solid rgb(244, 244, 244);
    margin: 0 10px 10px 0;
    border-radius: 8px;
  }

  &_selected {
    border: 1px solid #d27d28;
    background: #fffaf4;
    color: #dc8d24;
  }

  &_selectedIn {
    padding: @selectPD;

    &_right {
      border-left: 1px solid #d27d28;
      padding: @selectPD @selectPD @selectPD @selectPD;
    }
  }
}

.cancel {
  position: fixed;
  bottom: 15%;
  left: 50%;
  z-index: 2054;
  color: #f4534b;
}</style>