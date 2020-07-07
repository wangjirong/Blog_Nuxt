<template>
  <div class="statistics">
    <div class="title flex-vertical-start">
      <Icon type="logo-playstation" />
      <h3 class="stat">站点统计</h3>
    </div>
    <ul class="list flex-vertical-center">
      <li class="item flex-column-center">
        <span class="value">{{ info.blogCount }}</span>
        <span class="title">文章数量</span>
      </li>
      <li class="item flex-column-center">
        <span class="value">{{ info.userCount }}</span>
        <span class="title">访客数量</span>
      </li>
      <li class="item flex-column-center">
        <span class="value">{{ info.messageCount }}</span>
        <span class="title">留言数量</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="less">
.statistics {
  border-radius: 20px;
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
  .list {
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    .item {
      flex: 1;
      margin: 1em 0;

      &:nth-child(2) {
        border-left: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;
      }

      > .value {
        font-size: 1.5em;
        color: #000000;
      }
    }
  }
}
</style>
