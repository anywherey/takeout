<template>
    <div class="flex" style="z-index:999;justify-content: space-between;align-items: center; position: fixed;top:0;width: 100%;height:55px;color:white;font-weight: 800;">
        <section>
            <div  @click="$router.go(-1)" style="margin-left:7px;">
                <span style="color:white;">←</span>
            </div>
         </section>
        <section class="flex">
            <div style="margin-right:20px;">搜索</div>
            <div style="margin-right:20px;">对话</div>
            <div style="margin-right:20px;">收藏</div>
            <div style="margin-right: 10px;">···</div>
        </section>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                
            }
        }
    }
</script>

<style lang="less" scoped>

</style>