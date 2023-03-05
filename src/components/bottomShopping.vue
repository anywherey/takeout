<template>
    <div>
        <div class="flex" style="color:gray;justify-content: space-between;background: #020001; align-items: center; position: fixed;bottom:0;left:3%;width:94%;height:55px;border-radius: 100px;">
            <section style="position: relative;">
                <div style="position: absolute;left:23px;top:-45px;width:56px;height:78px;"> <img src="@/assets/logo.png" alt="222" style=" width:inherit;height:inherit;" /></div>
            </section>
            <section>
                <span style="color:white;margin-right:10px;"><span style="font-size: 14px;">¥</span><span style="font-size: 22px;">0</span></span>
                <span style="color:gray;font-size: 13px;padding-left:10px;border-left:1px solid gray;">预估加配送费¥0</span>
            </section>
            <section style="margin-right:24px;">
                <span style="color:gray;font-size: 13px;">¥15起送</span>
            </section>
        </div>
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