<template>
    <div class="pdl6">
        <section>
            <van-row>
                <van-col span="20" class="shopIntroduction">
                    <div>店名</div>
                    <div stlye="display:flex;">
                        <span style="margin-right:20px;">⭐4.8</span> <span style="margin-right:20px;">月售2000+</span><span
                            style="margin-right:20px;">配送约40分钟</span>
                    </div>
                </van-col>
                <van-col span="4">
                    <img src="" alt="666">
                </van-col>
            </van-row>
        </section>
        <transition name="fade">
            <section :class="{ 'isOpen-enter': isOpen == false, 'isOpen-leave': isOpen }" v-show="isOpen == false">
                <van-row>
                    <div>
                        <CouponList></CouponList>
                    </div>
                    <div>3</div>
                    <div style="display:flex;justify-content: space-between;">
                        <div class="shopIntroduction-announcement-un">
                            公告：新店开业，优惠多多！欢迎您光临本店尝鲜，如有不XXXXX
                        </div>
                        <div @click.stop="isOpenAll">
                            v
                        </div>
                    </div>
                </van-row>
            </section>
        </transition>
        <transition name="fade">
            <section v-show="isOpen == true">
                <div style="display: flex;justify-content: space-between;">
                    <span>优惠</span>
                    <span @click.stop="isOpenAll">^</span>
                </div>
                <div>

                </div>
                <div>
                    <span>icon</span><span>满30减2;满60减4</span>
                </div>
                <div>
                    <span>icon</span><span>天天神券满20减10</span>
                </div>
                <div>
                    <span>icon</span><span>首次使用美团支付最高再减3元</span>
                </div>
                <div>
                    <div>商家服务</div>
                    <div><i>22</i><span>准时宝</span><i>?</i></div>
                </div>
                <div>
                    <div>公告</div>
                    <div>
                        公告：新店开业，优惠多多！欢迎您光临本店尝鲜，如有不XXXXX
                    </div>
                </div>
            </section>
        </transition>
    </div>
</template>

<script>
import CouponList from '@/components/couponList.vue';
export default {
    components:{CouponList},
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        isOpenAll() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style lang="less" scoped>
.shopIntroduction {
    &-announcement-un {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding-right: 20px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: height 0.1s ease 0.2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}</style>