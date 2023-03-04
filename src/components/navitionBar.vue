<template>
    <div>
        <!-- <van-row class="navigations"> -->
        <!-- <div class="flex"><div class="navigations-left mg-left-5">会员商家</div></div> -->
        <ul class="navigations">
            <li @click.stop="click(item, index)"
                :class="item.isChoose ? 'navigations-left navigations-left-choose' : 'navigations-left'"
                v-for="(item, index) in tabList" :key="index">
                <span v-if="!item.navName1">{{ item.navName }}</span>
                <span style="font-size:14px;font-weight:600;font-style:oblique;" v-else-if="item.navName1">
                    <span style="color:#e87052;">{{ item.navName1 }}</span>
                    <span 
                    style="padding-right:1px;background-image:-webkit-linear-gradient(135deg,#d67484,#c87797);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">{{ item.navName2 }}</span>
                    <span style="color:#d46caa;">{{ item.navName3 }}</span>
                </span>
                
            </li>
        </ul>
        <!-- <van-col span="2"> -->
        <!-- <div class="text-right navigations-right">icon</div> -->
        <!-- </van-col> -->
        <!-- </van-row> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabList: [
                { navName1: "天天",navName2:'神',navName3:'券', navId: 1 }, { navName: "新商家", navId: 2 }, { navName: "会员商家", navId: 3 }, { navName: "点评高分", navId: 4 }
            ]
        }
    },
    mounted() {
        let __tabList = []
        this.tabList.map((item) => {
            __tabList.push(Object.assign({}, item, { "isChoose": false }))
        })
        this.tabList = __tabList
    },
    methods: {
        click(item, index) {
            this.tabList[index].isChoose = !this.tabList[index].isChoose
        }
    },
}
</script>

<style lang="less" scoped>
.navigations {
    display: flex;
    overflow-x: scroll;
    margin-left:5px;
    &-left {
        background-color: white;
        white-space: nowrap;
        margin-right: 10px;
        // text-align: center;
        // align-items: center;
        padding: 4px 0px;
        border-radius: 5px;
        height: 20px;
        min-width: 90px;
        text-align: center;
        font-size: 10px;
        line-height: 20px;
        &-choose {
            background: linear-gradient(135deg, #ffd000, #ffbd00);
        }
    }

    &-right {
        text-align: right;
    }
}
</style>