<template>
  <div>
    <div v-if="specifications == 1">
      <div @click.stop="addOrChoose" class="addButton-small" v-if="chooseList.amount == 0">
        选规格
      </div>
      <div v-else><span @click="toAddSub(-1)">-</span><span>{{
        chooseList.amount }}</span><span @click="toAddSub(1)">+</span></div>
    </div>
    <div  v-else>
      <div class="addButton-small" v-if="chooseList.amount > 0">
        <span @click="toAddSub(-1)">-</span><span>{{ chooseList.amount }}</span><span @click="toAddSub(1)">+</span>
      </div>
      <div v-else class="addButton-small" @click="chooseList.amount+=1">
        +
      </div>
    </div>
    <section>
      <div @click="showPopup = !showPopup" v-show="showPopup" class="cancel">X</div>
      <van-popup v-model="showPopup" @close="close" class="Popup pd16">
        <div class="mgb-10" style="font-size: 20px;font-weight: 600;">{{ foodName }}</div>
        <section class="Popup_arrtibute">
          <div v-for="(item, index) in dataSave" :key="index">
            <div class="mgb-10">{{ index }}</div>
            <div class="mgb-10 flex">
              <div :class="inItem.isChoose ? 'Popup_default Popup_selected' : 'Popup_default'"
                v-for="(inItem, inIndex) in item" :key="inIndex">
                <div :class="{ 'Popup_selectedIn': inItem.isChoose }" @click="choose(item, inItem, inIndex)">{{
                  inItem.name }}
                </div>
                <div v-if="inItem.price" :class="{ Popup_selectedIn_right: inItem.isChoose }">￥<span>{{ inItem.price
                }}</span></div>
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
          <section>
            <div @click="buyButton" v-if="chooseList.amount == 0" class="addButton-medium">+ 加入购物车</div>
            <div v-else>
              <span @click="toAddSub(-1)">-</span> <span>{{ chooseList.amount }}</span> <span
                @click="toAddSub(1)">+</span>
            </div>
          </section>
        </div>
        <!-- <div>
          <div>到手预估</div>
          <div><span>￥</span><span>23.8</span></div>
        </div> -->
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
    specifications: {
      type: String,
      default: '0'
    },
    dataSave: {
      type: Object,
      default: function _default() {
        return {
          '加料': [{
            firstId: 1,
            name: '原料',
            price: 10,
            isChoose: false,
          }, {
            firstId: 2,
            name: '+爆珠',
            price: 10,
            isChoose: false,
          }, {
            firstId: 3,
            name: '+仙草',
            price: 10,
            isChoose: false,
          }, {
            firstId: 4,
            name: '+黑钻',
            price: 10,
            isChoose: false,
          }, {
            firstId: 5,
            name: '+芋圆',
            price: 10,
            isChoose: false,
          }],
          "温度": [{
            secondId: 1,
            name: '冰',
            price: undefined,
            isChoose: false
          }, {
            secondId: 2,
            name: '少冰',
            price: undefined,
            isChoose: false
          }, {
            secondId: 3,
            name: '常温',
            price: undefined,
            isChoose: false
          }],
          "加大料": [{
            thirdId: 1,
            name: '冬瓜',
            isChoose: false
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
      chooseList: {
        "foodList": [{

        }],
        "amount": 0
      }
    };
  },
  methods: {
    addOrChoose() {
      this.showPopup = !this.showPopup
    },
    choose(item, inItem, inIndex) {
      item.map((all, index) => {
        if (index != inIndex) {
          all.isChoose = false
        } else {
          all.isChoose = true
        }
      })
    },
    toAddSub(num) {
      this.chooseList.amount += num
      this.$emit('getData', this.chooseList)
    },
    buyButton() {
      let countType = 0;
      const maxType = Object.keys(this.dataSave).length
      let warnType = []
      for (let i of Object.keys(this.dataSave)) {
        let searchWarnType = 0
        for (let j = 0; j < this.dataSave[i].length; j++) {
          if (this.dataSave[i][j].isChoose == true) {
            countType += 1
            searchWarnType = 0
            this.chooseList.foodList.push(this.dataSave[i][j])
            break
          } else {
            searchWarnType == this.dataSave[i].length - 1 ?
              (warnType.push(i), searchWarnType = 0)
              : searchWarnType += 1
          }
        }
      }

      if (countType < maxType) {
        let words = ''
        warnType.map((item, index) => {
          if (index < warnType.length - 1) {
            words += item + '、'
          } else {
            words += item
          }
        })
        alert(`请将${words}补齐`)
      } else {
        this.chooseList.amount = 1
        this.$emit('getData', this.chooseList)
      }
      // this.showPopup = !this.showPopup

    },
    close() {
      console.log("X")
    }
  }
};
</script>

<style lang="less" scoped>
@selectPD: 4px;

.Popup {
  width: 85%;
  min-height: 207px;
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
}
</style>