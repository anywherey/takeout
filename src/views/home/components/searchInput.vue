<template>
  <div class="bg-mtYello">
    <Search
    class="search"
      v-model="value"
      show-action
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div class="searchAction" @click="onSearch">搜索</div>
      </template>
    </Search>
  </div>
</template>

<script>
import {Search} from "vant";
export default {
  components: { Search },
  data() {
    return {
      value: null,
    };
  },
  methods: {
    onSearch(key) {
      console.log(key);
    },
  },
};
</script>

<style lang="less" scoped>
.search{
    position: relative;
    border-radius: 50px 50px 0 0;
}
.searchAction{
position: absolute;
background: linear-gradient(135deg,#ffd000,#ffbd00);
right:4%;
top:20%;
border-radius: 40px;
padding:0 5%;
}
::v-deep .van-search__content{
  border: 2px solid #ffd000;
}
</style>
