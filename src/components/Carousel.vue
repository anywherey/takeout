<template>
    <div class="swiper-container" style="position: relative;width: 100%;overflow: hidden;">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
                <!-- <img :src="carousel.imgUrl"> -->
                <img :src="list[index].imgUrl"
                    style="height: 110px;width: 100%;object-fit: cover;border-radius:10px;margin:10px 4px;">
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- <div class="swiper-button-prev" style="top:50%;"></div> -->
        <!-- <div class="swiper-button-next" style="top:50%;"></div> -->
    </div>
</template>
  
<script>
import Swiper from 'swiper';
import 'swiper/swiper.css'
export default {
    props: ['list'],
    name: 'CarouSel',
    // mounted() {
    //     this.$nextTick(()=>{
    //         new Swiper('.swiper-container', {
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //         navigation: {
    //             nextEl: '.swiper-button-next',
    //             prevEl: '.swiper-button-prev',
    //         },
    //     });
    //     })

    // },
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
                    new Swiper('.swiper-container', {
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
};
</script>
  
<style>
.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-pagination {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    text-align: center;
}

.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    margin: 0 8px;
    border-radius: 50%;
    background: #888;
    opacity: 0.5;
    cursor: pointer;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #333;
}

.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    z-index: 10;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M15.5 3.5L14 2 6 12l8 10 1.5-1.5L9.67 12l5.83-7z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.5;
}

.swiper-button-next {
    right: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0V0z'/%3E%3Cpath d='M8.5 3.5L10 2l8 10-8 10-1.5-1.5L14.33 12l-5.83-7z'/%3E%3C/svg%3E");
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    opacity: 1;
}
</style>
  