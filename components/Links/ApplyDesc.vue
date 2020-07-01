<template>
  <div class="apply-link-desc">
    <h3 class="title">友链申请说明</h3>
    <div class="website-desc flex-vertical-start">
      <span class="center">经常宕机<Icon type="ios-close-circle" /></span>
      <span class="center">不合法规<Icon type="ios-close-circle" /></span>
      <span class="center">灰色擦边球<Icon type="ios-close-circle" /></span>
      <span class="center">红标报毒<Icon type="ios-close-circle" /></span>
      <span class="center">原创优先<Icon type="md-checkmark-circle" /></span>
      <span class="center">技术优先<Icon type="md-checkmark-circle" /></span>
    </div>
    <div class="content flex-column-start">
      <span class="title">交换链接可在留言板留言，本站链接如下:</span>
      <span class="name">名称:艾瑞</span>
      <span class="href">地址:www.cirev.cn</span>
      <span class="logo">图标:www.cirev.cn/logo.png</span>
      <span class="desc">描述:艾瑞的个人博客</span>
    </div>
    <div class="time-desc"
      >申请后一般无特殊情况将在24小时内通过，若未通过请私信我！</div
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.apply-link-desc {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 1em 2em;
  border-radius: 10px;
  width: 100%;
  > .title {
    padding: 0 1em;
    font-size: 1.4em;
    font-family: 'Times New Roman', Times, serif;
    border-left: lightgreen 5px solid;
  }
  .website-desc {
    margin: 1em 0;
    padding-left: 2em;
    span {
      font-size: 1.1em;
      i {
        font-size: 1.1em;
      }
    }
  }
  > .content {
    padding-left: 2em;
    display: flex;
    flex-direction: column;
    > span {
      font-size: 1.2em;
      font-family: 'Times New Roman', Times, serif;
    }
  }
  .time-desc {
    font-size: 1.2em;
    font-family: 'Times New Roman', Times, serif;
    padding-left: 2em;
    margin: 1em 0;
  }
}
</style>
