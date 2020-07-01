<template>
  <div class="board flex-column-start">
    <div class="title-des flex-column-center">
      <h3 class="title">留言板</h3>
      <h5 class="desc">就让我们一直走下去，直到世界一片纯白。</h5>
    </div>
    <Input type="textarea" :rows="7" v-model="text" />
    <button class="btn" @click="submit">
      提交留言
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  methods: {
    submit() {
      if (!this.text) this.$Message.error('留言内容不能为空！')
      else this.$Message.success('留言成功')
    },
  },
}
</script>

<style lang="less" scoped>
.board {
  width: 70vw;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2em;
  border-radius: 10px;
  .title-des {
    .title {
      font-size: 1.6em;
      font-family: 'Times New Roman', Times, serif;
    }
    .desc {
      font-size: 1.2em;
      font-family: 'Times New Roman', Times, serif;
      margin: 1em 0;
    }
  }
  .btn {
    padding: 0.5em 1em;
    font-size: 1.3em;
    color: #ffffff;
    background-color: red;
    border-radius: 5px;
    margin-top: 1em;
    &:hover {
      background-color: yellowgreen;
    }
  }
}
</style>
