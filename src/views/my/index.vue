<template>
    <div>
        <Lmap></Lmap>
         <div style="margin: 16px">
          <van-button round block type="info" @click="my" native-type="submit"
            >提交</van-button
          >
        </div>
    </div>
</template>

<script>
import Lmap from "@/components/Lmap.vue"
import {Button} from "vant"
    export default {
        components:{Button,Lmap},
        data(){
            return{

            }},
            created(){

            },
        methods:{
            my(){
                this.$router.push("my-address")
            }
        }
    }
</script>

<style lang="less" scoped>

</style>