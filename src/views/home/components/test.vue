<template>
  <div>
    <div>
     <div class='father'>
      <div class="son" @click="thetest"></div>
     </div>
    </div>
     <div class='linnnne'></div>
    <!-- <footerTip /> -->
  </div>
</template>

<script>
// import footerTip from '@/components/footerTip'
export default {
  // components: { footerTip },
  data() {
    return {
      dataSave: [],
      scrollTop: 0,
      // 滚动速度
      speed: 10,
      // 计时器
      timer: "",
      timer2: "",
      uploadType: {
        // articleType: '10102'
        articleType: "10702",
      },
      // dataSave: [
      //   {
      //     time: '2012.03.24',
      //     content: '关于赖兰等同志职务任免的通知'
      //   },
      //   {
      //     time: '2012.03.23',
      //     content: '关于赖兰等同志职务任免的通知'
      //   },
      //   {
      //     time: '2012.03.22',
      //     content: '关于赖兰等同志职务任免的通知'
      //   }
      // ]
    };
  },
  mounted() {
    this.getggxxlist();
    this.initScroll();
  },
  methods: {
    thetest(){
      let neirongs=document.querySelectorAll('.father')
      console.log(neirongs)
      // this.$router.push({
      //   path:'/member',
      //   query:'QueryTest',
      //   params:{paramsTest:'ParamsTest'},
      // })
    },
    // 获取文件通知
    getggxxlist() {
      // console.log(response)
      let response = [
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
        { releaseTime: "11111", articleTitle: "11111" },
      ];
      // 取前十条
      this.$refs.scrollItemBox.scrollHeight
      this.dataSave = response.splice(0, 10);
      // console.log(this.dataSave)
    },
    // 跳转到对应文件通知文章
    seedetail(item) {
      if (item.filePath) {
        location.href = item.filePath;
      } else {
        this.$router.push({
          path: "/civil-detail",
          query: {
            id: item.id,
            articleType: item.articleType,
          },
        });
      }
      // this.$router.push({
      //   path: '/rsbdArticle',
      //   query: {
      //     getId: item.id,
      //     articleType: item.articleType
      //   }
      // })
    },
    initScroll() {
      this.$nextTick(() => {
        // this.copyHtml = this.$refs.scrollItemBox.innerHTML
        // console.log(this.copyHtml)
        this.startScroll();
      });
    },
    // 鼠标移入停止滚动
    mEnter() {
      clearInterval(this.timer);
      clearInterval(this.timer2);
      this.timer2=setTimeout(() => {
        this.mLeave()
      }, 3000);
    },
    // 鼠标移出继续滚动
    mLeave() {
      this.startScroll();
    },
    // 开始滚动
    startScroll() {
      this.timer = setInterval(this.scroll, this.speed);
    },
    // 滚动处理方法
    scroll() {
      this.scrollTop++;
      // 获取需要滚动的盒子的高度
      // let scrollItemBox = this.$refs.scrollItemBox.offsetHeight
      // console.log(this.$refs.scrollItemBox.scrollHeight)
      // const scrollItemBox = this.$refs.scrollItemBox.scrollHeight
      // let scrollItem=this.$refs.scrollItem.scrollHeight
      // this.$refs.scrollItemBox.scrollTop = this.scrollTop
      // const scrollItemBox = this.$refs.scrollItem.clientHeight
      this.$refs.scrollItemBox.scrollTop = this.scrollTop;
      // console.log(this.$refs.scrollItemBox.scrollTop)
      // console.log(this.$refs.scrollItemBox.clientHeight)
      // console.log(this.$refs.scrollItemBox.offsetHeight)
      // console.log(this.$refs.scrollItemBox.scrollHeight)
      // 滚动条到底部的条件即为scrollTop + clientHeight == scrollHeight。
      // 当判断滚动的高度大于等于盒子高度时，从头开始滚动
      if (this.scrollTop >= this.$refs.scrollItemBox.scrollHeight-this.$refs.scrollItemBox.clientHeight) {
        this.scrollTop = 0;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.message {
  // margin-top: 12px;
  // min-height: 160px;
  height: 400px;
  overflow-y: scroll;
  box-sizing: border-box;
  // background: url('@/assets/img/zj-wjtzbg-bottom.png') no-repeat center top/100% auto;
  // background-size: 100% 100%;
  background-color: #fffafa;
  margin-top: -1px;
  // box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  // background: rgba(255, 255, 255, 0);
  border-radius: 1px;
  position: relative;
  &-top {
    height: 48px;
    margin-left: 16px;
    padding-top: 16px;
    opacity: 0.87;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #000000;
    line-height: 24px;
    // background: linear-gradient(to right, rgb(248, 116, 39), red);
    // -webkit-background-clip: text;
    // color: transparent;
  }
  &-content {
    min-height: 144px;
    // margin-top: 12px;
    padding-top: 12px;
    &-top {
      width: 181px;
      height: 24px;
      margin-left: 16px;
      // background: #f9f8f8;
      background: #fdf1f1;
      border-radius: 12.5px;
      display: flex;
      > ul {
        margin-top: 7px;
        margin-left: 16px;
        width: 10px;
        height: 10px;
        background: #78849e;
        border-radius: 12.5px;
        position: relative;
        > li {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: white;
          top: 4px;
          left: 4px;
          border-radius: 30px;
        }
      }
      > span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.6);
        line-height: 14px;
        margin-top: 5px;
        margin-left: 19px;
      }
    }
    &-bottom {
      min-height: 130px;
      margin-left: 35px;
      display: flex;
      > ul {
        height: 135px;
        width: 9px;
        > li {
          width: 4px;
          height: 4px;
          margin-top: 6px;
          background: rgba(120, 132, 158, 0.29);
          border-radius: 27px;
        }
      }
      > span {
        width: 272px;
        min-height: 96px;
        margin: 12px 13px 0px 19px;
        padding-top: 16px;
        padding-left: 16px;
        padding-right: 16px;
        // background-color: rgba(5, 73, 221, 0.08);
        background-color: rgba(255, 239, 239, 0.7);
        border-radius: 8px;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.9);
        line-height: 24px;
        .btn-see {
          width: 80px;
          height: 32px;
          background: #ffffff;
          align-items: center;
          text-align: center;
          margin-top: 8px;
          margin-bottom: 16px;
          border-radius: 16px;
          line-height: 30px;
          // color: #3177ec;
          color: #e01a1a;
        }
      }
    }
  }
}
.message:hover {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}
/*滚动条样式*/
.message::-webkit-scrollbar {
  width: 4px;
}
.message::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
.message::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.message-content:nth-last-child(1) {
  padding-bottom: 50px;
  .message-content-bottom {
    > span {
      min-height: 120px;
    }
  }
}
// 添加星星背景
.bg-star {
  position: absolute;
  right: 0;
  z-index: -1;
}
.message-content:not(:last-child) {
  .message-content-bottom {
    > ul {
      > li:nth-child(14) {
        display: none;
      }
      > li:nth-child(15) {
        display: none;
      }
      > li:nth-child(16) {
        display: none;
      }
      > li:nth-child(17) {
        display: none;
      }
    }
  }
}
.message-content:last-child {
  .message-content-bottom {
    min-height: 65px;
    > ul {
      position: relative;
      > li:last-child {
        position: absolute;
        width: 6px;
        height: 6px;
        margin-top: 6px;
        left: -1px;
        background: #78849e;
        border-radius: 8px;
      }
    }
  }
}
.father{
  width: 100px;
  height: 200px;
  position:fixed;
  padding:1px;
}
.son{
  margin-top:30px;
  width: 100px;
  height: 100px;
  background-color: red;
}
.linnnne{
 width: 0;
 height: 0;
 border-width:15px;
 border-style: solid;
 border-color:transparent #217aff transparent transparent;
 transform: rotate(180deg);
}
</style>
