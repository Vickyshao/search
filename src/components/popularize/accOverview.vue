<template>
  <div>
    <div class="cTitle">推广概况 > 账户总览</div>
    <div class="cCnt">
      <div class="overview">
        <div class="name">账户总览
          <el-button type="primary" size="mini" class="fr">报表总览</el-button>
        </div>
        <div class="top">
          <div class="left fl">
            <div>可用现金</div>
            <span class="cash"><span class="colorRed">0.00</span>元</span>
            <el-button class="fr recharge" type="primary" @click="recharge">充值</el-button>
          </div>
          <div class="right fr">
            <div>推广账户</div>
            <span class="cash">可用余额 <span class="colorRed">9999.00</span>元</span>
            <el-button class="fr recharge" type="">转入</el-button>
          </div>
          <div class="tips">
            转入提醒：可用现金充值成功之后，请及时向推广账户中转入推广费用，当推广账户可用余额大于0时，广告可正常投放。
          </div>
        </div>
        <div class="bot"></div>
      </div>
      <div class="notice">推广公告</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    recharge() {
      console.log('充值');
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.cCnt {
  .name {
    text-align: justify;
    margin-bottom: 30px;
  }
  .overview {
    width: 66.66%;
    .top {
      padding: 20px;
      padding-top: 25px;
      background: #f2f2f2;
      margin-bottom: 20px;
      .cash {
        margin-top: 40px;
        display: inline-block
      }
      .recharge {
        margin-top: 25px;
        }
      .left {
        padding: 0 20px 30px;
        width: calc(49% - 50px);
        border-right: 1px solid #999;
      }
      .right {
        float: right;
        width: calc(49%);
        text-align: left;
      }
      .tips {
        clear: both;
        padding-top: 20px;
        line-height: 20px;
      }
    }
    .bot {
      background: #f2f2f2;
    }
  }
  .notice {
    width: 33.33%;
    background: #f2f2f2;
  }
}
</style>
