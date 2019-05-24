<template>
  <div class="header">
    <img class="cursor" @click="toHome" src="../assets/imgs/logo.png"/>
    <span class="backHome">
      <div>商户管理后台</div>
      <div class="cursor" @click="toHome"><span class="iconfont iconhome"></span>返回首页</div>
    </span>
    <div class="userInfos">
      <span>welcome, 周四商家（周四商家）</span>
      <span class="iconfont iconxiaoxi"></span>
      <span class="iconfont iconguanji"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({
        path: '/',
      });
    },
  },
};
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  text-align: left;
  background: #333;
  color: #fff;
  font-size: 14px;
  img {
    float: left;
    padding: 0 22px;
  }
  .backHome {
    display: inline-block;
    padding-top: 18px;
  }
  .userInfos {
    float: right;
    display: flex;
    line-height: 50px;
    justify-content: space-between;
    margin-right: 21px;
    span {
      display: inline-block;
      padding: 0 10px;
    }
  }
}
</style>
