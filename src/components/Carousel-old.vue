<template>
    <div class="swiper-container" ref="floor1Swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <!-- <img :src="carousel.imgUrl"> -->
                <img :src="list[index].imgUrl" style="height: 110px;width: 100%;object-fit: cover;border-radius:10px;margin:10px 4px;">
            </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
 
<script>
import Swiper from 'swiper'
export default {
    props: ['list'],
    name: 'CarouSel',
    components: {},
    data() {
        return {}
    },
    watch: {
        //swiper必须要先有结构,但是不能够放在mounted中，v-for的结构可能还没有渲染完
        //此时vuex中的数据还没有被修改。v-for导致轮播图还是静态的
        list: {

            //这里必须使用immediate，因为数组是从父组件传过来的从来没有变过
            //所以使用immediate立即监听
            immediate: true,
            handler() {
                //必须和nexttick一起使用，因为v-for遍历结构需要时间，使用这个可以保证结构渲染完马上
                //产生轮播图
                this.$nextTick(() => {
                    new Swiper(this.$refs.floor1Swiper, {
                        //direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,//设置小原店面可以切换
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        autoplay: {
                            delay: 1000,
                            stopOnLastSlide: false,
                            disableOnInteraction: true,
                        },

                        // 如果需要滚动条
                        scrollbar: {
                            el: '.swiper-scrollbar',
                        },
                    })
                })
            }
        }
    }
}
</script>
 
<style></style>