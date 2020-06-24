<template>
  <div class="recent-people">
    <div class="title flex-vertical-start">
      <Icon type="ios-people-outline" />
      <h3 class="stat">最近登录</h3>
    </div>
    <div class="people-container">
 <Icon type="md-qq" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.recent-people {
  border-radius: 10px;
  > .title {
    background-color: rgba(255, 255, 255, 1);
    padding: 0.5em 2em;
    i,
    h3 {
      color: lightsalmon;
      font-size: 1.2em;
      margin-right: 0.5em;
    }
    .stat {
      font-family: 'Times New Roman', Times, serif;
    }
  }
  .people-container{
    background-color: rgba(255, 255, 255, .7);
    width: 100%;
    height: 50px;
  }
}
</style>
